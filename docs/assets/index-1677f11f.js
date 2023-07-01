(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function fe(){}function Oc(t){return t()}function Ga(){return Object.create(null)}function Xe(t){t.forEach(Oc)}function Rc(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function of(t){return Object.keys(t).length===0}function af(t,...e){if(t==null)return fe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t,e,n){t.$$.on_destroy.push(af(e,n))}function bn(t,e,n){return t.set(n),e}function w(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function K(t){t.parentNode&&t.parentNode.removeChild(t)}function Ps(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function q(){return G(" ")}function Mo(){return G("")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function lf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gi(t){return t===""?null:+t}function cf(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function Bt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function uf(t){for(const e of t.options)if(!e.disabled)return e}function Fi(t){const e=t.querySelector(":checked")||uf(t);return e&&e.__value}function Zs(t,e,n){t.classList[n?"add":"remove"](e)}function hf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let fs;function rs(t){fs=t}function Lc(){if(!fs)throw new Error("Function called outside component initialization");return fs}function Mc(t){Lc().$$.on_mount.push(t)}function Bi(){const t=Lc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=hf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function df(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Tn=[],Wa=[];let An=[];const Qa=[],ff=Promise.resolve();let Kr=!1;function pf(){Kr||(Kr=!0,ff.then(xc))}function an(t){An.push(t)}const Cr=new Set;let En=0;function xc(){if(En!==0)return;const t=fs;do{try{for(;En<Tn.length;){const e=Tn[En];En++,rs(e),gf(e.$$)}}catch(e){throw Tn.length=0,En=0,e}for(rs(null),Tn.length=0,En=0;Wa.length;)Wa.pop()();for(let e=0;e<An.length;e+=1){const n=An[e];Cr.has(n)||(Cr.add(n),n())}An.length=0}while(Tn.length);for(;Qa.length;)Qa.pop()();Kr=!1,Cr.clear(),rs(t)}function gf(t){if(t.fragment!==null){t.update(),Xe(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(an)}}function mf(t){const e=[],n=[];An.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),An=e}const li=new Set;let en;function Fc(){en={r:0,c:[],p:en}}function Bc(){en.r||Xe(en.c),en=en.p}function ze(t,e){t&&t.i&&(li.delete(t),t.i(e))}function Ze(t,e,n,s){if(t&&t.o){if(li.has(t))return;li.add(t),en.c.push(()=>{li.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Vt(t){t&&t.c()}function Ct(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||an(()=>{const o=t.$$.on_mount.map(Oc).filter(Rc);t.$$.on_destroy?t.$$.on_destroy.push(...o):Xe(o),t.$$.on_mount=[]}),r.forEach(an)}function St(t,e){const n=t.$$;n.fragment!==null&&(mf(n.after_update),Xe(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yf(t,e){t.$$.dirty[0]===-1&&(Tn.push(t),pf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pt(t,e,n,s,i,r,o,a=[-1]){const l=fs;rs(t);const c=t.$$={fragment:null,ctx:[],props:r,update:fe,not_equal:i,bound:Ga(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ga(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const g=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&yf(t,h)),d}):[],c.update(),u=!0,Xe(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=cf(e.target);c.fragment&&c.fragment.l(h),h.forEach(K)}else c.fragment&&c.fragment.c();e.intro&&ze(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),xc()}rs(l)}class Nt{$destroy(){St(this,1),this.$destroy=fe}$on(e,n){if(!Rc(n))return fe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!of(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let ci=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function Ya(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Xa(t){let e,n=t[12].plan+"",s;return{c(){e=_("option"),s=G(n),e.__value=t[14],e.value=e.__value},m(i,r){Q(i,e,r),w(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&me(s,n)},d(i){i&&K(e)}}}function vf(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=Xa(Ya(t,a,c));return{c(){e=_("div"),n=_("input"),s=q(),i=_("select");for(let c=0;c<l.length;c+=1)l[c].c();p(n,"type","checkbox"),p(n,"name","CheckBoxParticular"),p(n,"id","CheckBoxParticular"),p(i,"name","plan"),p(i,"id","plan"),p(i,"class","svelte-1de4xhy"),t[1]===void 0&&an(()=>t[8].call(i)),Zs(i,"SelectPlanVisible",t[0]),Zs(i,"SelectPlanHidden",t[3]),p(e,"id","selectPlanContainer"),p(e,"class","svelte-1de4xhy")},m(c,u){Q(c,e,u),w(e,n),n.checked=t[0],w(e,s),w(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);Bt(i,t[1]),r||(o=[J(n,"change",t[7]),J(n,"change",t[4]),J(i,"change",t[8]),J(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=Ya(c,a,h);l[h]?l[h].p(d,u):(l[h]=Xa(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&Bt(i,c[1]),u&1&&Zs(i,"SelectPlanVisible",c[0]),u&8&&Zs(i,"SelectPlanHidden",c[3])},i:fe,o:fe,d(c){c&&K(e),Ps(l,c),r=!1,Xe(o)}}}function wf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=y=>{n(0,r=y)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var v=y.target.checked;l(v),c()},h=Bi(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function f(){r=this.checked,n(0,r)}function g(){o=Fi(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,f,g]}class bf extends Nt{constructor(e){super(),Pt(this,e,wf,vf,yt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Vc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ef=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Uc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ef(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new _f;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tf=function(t){const e=Vc(t);return Uc.encodeByteArray(e,!0)},mi=function(t){return Tf(t).replace(/\./g,"")},Cf=function(t){try{return Uc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const If=()=>Sf().__FIREBASE_DEFAULTS__,Af=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cf(t[1]);return e&&JSON.parse(e)},jc=()=>{try{return If()||Af()||kf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Df=t=>{var e,n;return(n=(e=jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qc=t=>{const e=Df(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Pf=()=>{var t;return(t=jc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mi(JSON.stringify(n)),mi(JSON.stringify(o)),a].join(".")}function Of(){try{return typeof indexedDB=="object"}catch{return!1}}function Rf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="FirebaseError";class fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Lf,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Mf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,s)}}function Mf(t,e){return t.replace(xf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xf=/\{\$([^}]+)}/g;function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ja(r)&&Ja(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ja(t){return t!==null&&typeof t=="object"}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class Ff{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Nf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vf(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bf(t){return t===Jt?void 0:t}function Vf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Uf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ff(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const jf={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},qf=Z.INFO,$f={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Hf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=$f[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=qf,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const zf=(t,e)=>e.some(n=>t instanceof n);let Za,el;function Kf(){return Za||(Za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gf(){return el||(el=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,Wr=new WeakMap,Gc=new WeakMap,Sr=new WeakMap,xo=new WeakMap;function Wf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function Qf(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yf(t){Qr=t(Qr)}function Xf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ir(this),e,...n);return Gc.set(s,e.sort?e.sort():[e]),Rt(s)}:Gf().includes(t)?function(...e){return t.apply(Ir(this),e),Rt(Kc.get(this))}:function(...e){return Rt(t.apply(Ir(this),e))}}function Jf(t){return typeof t=="function"?Xf(t):(t instanceof IDBTransaction&&Qf(t),zf(t,Kf())?new Proxy(t,Qr):t)}function Rt(t){if(t instanceof IDBRequest)return Wf(t);if(Sr.has(t))return Sr.get(t);const e=Jf(t);return e!==t&&(Sr.set(t,e),xo.set(e,t)),e}const Ir=t=>xo.get(t);function Zf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rt(o.result),l.oldVersion,l.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ep=["get","getKey","getAll","getAllKeys","count"],tp=["put","add","delete","clear"],Ar=new Map;function tl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ar.get(e))return Ar.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=tp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ep.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ar.set(e,r),r}Yf(t=>({...t,get:(e,n,s)=>tl(e,n)||t.get(e,n,s),has:(e,n)=>!!tl(e,n)||t.has(e,n)}));/**
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
 */class np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yr="@firebase/app",nl="0.9.4";/**
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
 */const ln=new zc("@firebase/app"),ip="@firebase/app-compat",rp="@firebase/analytics-compat",op="@firebase/analytics",ap="@firebase/app-check-compat",lp="@firebase/app-check",cp="@firebase/auth",up="@firebase/auth-compat",hp="@firebase/database",dp="@firebase/database-compat",fp="@firebase/functions",pp="@firebase/functions-compat",gp="@firebase/installations",mp="@firebase/installations-compat",yp="@firebase/messaging",vp="@firebase/messaging-compat",wp="@firebase/performance",bp="@firebase/performance-compat",Ep="@firebase/remote-config",_p="@firebase/remote-config-compat",Tp="@firebase/storage",Cp="@firebase/storage-compat",Sp="@firebase/firestore",Ip="@firebase/firestore-compat",Ap="firebase",kp="9.17.2";/**
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
 */const Xr="[DEFAULT]",Dp={[Yr]:"fire-core",[ip]:"fire-core-compat",[op]:"fire-analytics",[rp]:"fire-analytics-compat",[lp]:"fire-app-check",[ap]:"fire-app-check-compat",[cp]:"fire-auth",[up]:"fire-auth-compat",[hp]:"fire-rtdb",[dp]:"fire-rtdb-compat",[fp]:"fire-fn",[pp]:"fire-fn-compat",[gp]:"fire-iid",[mp]:"fire-iid-compat",[yp]:"fire-fcm",[vp]:"fire-fcm-compat",[wp]:"fire-perf",[bp]:"fire-perf-compat",[Ep]:"fire-rc",[_p]:"fire-rc-compat",[Tp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Sp]:"fire-fst",[Ip]:"fire-fst-compat","fire-js":"fire-js",[Ap]:"fire-js-all"};/**
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
 */const yi=new Map,Jr=new Map;function Pp(t,e){try{t.container.addComponent(e)}catch(n){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(Jr.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,t);for(const n of yi.values())Pp(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Np={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Hc("app","Firebase",Np);/**
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
 */class Op{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Qc=kp;function Yc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Pf()),!n)throw Lt.create("no-options");const r=yi.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Uf(i);for(const l of Jr.values())o.addComponent(l);const a=new Op(n,s,o);return yi.set(i,a),a}function Xc(t=Xr){const e=yi.get(t);if(!e&&t===Xr)return Yc();if(!e)throw Lt.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=Dp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}ps(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rp="firebase-heartbeat-database",Lp=1,gs="firebase-heartbeat-store";let kr=null;function Jc(){return kr||(kr=Zf(Rp,Lp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gs)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),kr}async function Mp(t){try{return(await Jc()).transaction(gs).objectStore(gs).get(Zc(t))}catch(e){if(e instanceof fn)ln.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ln.warn(n.message)}}}async function sl(t,e){try{const s=(await Jc()).transaction(gs,"readwrite");return await s.objectStore(gs).put(e,Zc(t)),s.done}catch(n){if(n instanceof fn)ln.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ln.warn(s.message)}}}function Zc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xp=1024,Fp=30*24*60*60*1e3;class Bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Up(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Fp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=il(),{heartbeatsToSend:n,unsentEntries:s}=Vp(this._heartbeatsCache.heartbeats),i=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function il(){return new Date().toISOString().substring(0,10)}function Vp(t,e=xp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),rl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Of()?Rf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rl(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jp(t){ps(new Ln("platform-logger",e=>new np(e),"PRIVATE")),ps(new Ln("heartbeat",e=>new Bp(e),"PRIVATE")),Mt(Yr,nl,t),Mt(Yr,nl,"esm2017"),Mt("fire-js","")}jp("");var qp="firebase",$p="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(qp,$p,"app");var Hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Fo=Fo||{},B=Hp||self;function vi(){}function Vi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zp(t){return Object.prototype.hasOwnProperty.call(t,Dr)&&t[Dr]||(t[Dr]=++Kp)}var Dr="closure_uid_"+(1e9*Math.random()>>>0),Kp=0;function Gp(t,e,n){return t.call.apply(t.bind,arguments)}function Wp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=Gp:Le=Wp,Le.apply(null,arguments)}function ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function zt(){this.s=this.s,this.o=this.o}var Qp=0;zt.prototype.s=!1;zt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Qp!=0)&&zp(this)};zt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ol(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Vi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Yp=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",vi,e),B.removeEventListener("test",vi,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}var al=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pr(t,e){return t<e?-1:t>e?1:0}function Ui(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function dt(t){return Ui().indexOf(t)!=-1}function Vo(t){return Vo[" "](t),t}Vo[" "]=vi;function Xp(t){var e=eg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Jp=dt("Opera"),Mn=dt("Trident")||dt("MSIE"),tu=dt("Edge"),Zr=tu||Mn,nu=dt("Gecko")&&!(Ui().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),Zp=Ui().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function su(){var t=B.document;return t?t.documentMode:void 0}var bi;e:{var Nr="",Or=function(){var t=Ui();if(nu)return/rv:([^\);]+)(\)|;)/.exec(t);if(tu)return/Edge\/([\d\.]+)/.exec(t);if(Mn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Zp)return/WebKit\/(\S+)/.exec(t);if(Jp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Or&&(Nr=Or?Or[1]:""),Mn){var Rr=su();if(Rr!=null&&Rr>parseFloat(Nr)){bi=String(Rr);break e}}bi=Nr}var eg={};function tg(){return Xp(function(){let t=0;const e=al(String(bi)).split("."),n=al("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Pr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Pr(i[2].length==0,r[2].length==0)||Pr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var eo;if(B.document&&Mn){var ll=su();eo=ll||parseInt(bi,10)||void 0}else eo=void 0;var ng=eo;function ms(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nu){e:{try{Vo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sg[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ms.X.h.call(this)}}De(ms,Me);var sg={2:"touch",3:"pen",4:"mouse"};ms.prototype.h=function(){ms.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),ig=0;function rg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++ig,this.ba=this.ea=!1}function ji(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Uo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function iu(t){const e={};for(const n in t)e[n]=t[n];return e}const cl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ru(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<cl.length;r++)n=cl[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qi(t){this.src=t,this.g={},this.h=0}qi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=no(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new rg(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function to(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=eu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ji(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function no(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var jo="closure_lm_"+(1e6*Math.random()|0),Lr={};function ou(t,e,n,s,i){if(s&&s.once)return lu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ou(t,e[r],n,s,i);return null}return n=Ho(n),t&&t[Os]?t.N(e,n,Ns(s)?!!s.capture:!!s,i):au(t,e,n,!1,s,i)}function au(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ns(i)?!!i.capture:!!i,a=$o(t);if(a||(t[jo]=a=new qi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=og(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Yp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(uu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function og(){function t(n){return e.call(t.src,t.listener,n)}const e=ag;return t}function lu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)lu(t,e[r],n,s,i);return null}return n=Ho(n),t&&t[Os]?t.O(e,n,Ns(s)?!!s.capture:!!s,i):au(t,e,n,!0,s,i)}function cu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)cu(t,e[r],n,s,i);else s=Ns(s)?!!s.capture:!!s,n=Ho(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=no(r,n,s,i),-1<n&&(ji(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=$o(t))&&(e=t.g[e.toString()],t=-1,e&&(t=no(e,n,s,i)),(n=-1<t?e[t]:null)&&qo(n))}function qo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Os])to(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(uu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$o(e))?(to(n,t),n.h==0&&(n.src=null,e[jo]=null)):ji(t)}}}function uu(t){return t in Lr?Lr[t]:Lr[t]="on"+t}function ag(t,e){if(t.ba)t=!0;else{e=new ms(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qo(t),t=n.call(s,e)}return t}function $o(t){return t=t[jo],t instanceof qi?t:null}var Mr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(t){return typeof t=="function"?t:(t[Mr]||(t[Mr]=function(e){return t.handleEvent(e)}),t[Mr])}function Te(){zt.call(this),this.i=new qi(this),this.P=this,this.I=null}De(Te,zt);Te.prototype[Os]=!0;Te.prototype.removeEventListener=function(t,e,n,s){cu(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(s,t),ru(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ti(o,s,!0,e)&&i}if(o=e.g=t,i=ti(o,s,!0,e)&&i,i=ti(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ti(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ji(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&to(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var zo=B.JSON.stringify;function lg(){var t=fu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class cg{constructor(){this.h=this.g=null}add(e,n){const s=hu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ug,t=>t.reset());class ug{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function hg(t){B.setTimeout(()=>{throw t},0)}function du(t,e){so||dg(),io||(so(),io=!0),fu.add(t,e)}var so;function dg(){var t=B.Promise.resolve(void 0);so=function(){t.then(fg)}}var io=!1,fu=new cg;function fg(){for(var t;t=lg();){try{t.h.call(t.g)}catch(n){hg(n)}var e=hu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}io=!1}function $i(t,e){Te.call(this),this.h=t||1,this.g=e||B,this.j=Le(this.lb,this),this.l=Date.now()}De($i,Te);D=$i.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ae(this,"tick"),this.ca&&(Ko(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ko(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){$i.X.M.call(this),Ko(this),delete this.g};function Go(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function pu(t){t.g=Go(()=>{t.g=null,t.i&&(t.i=!1,pu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pg extends zt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pu(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(t){zt.call(this),this.h=t,this.g={}}De(ys,zt);var ul=[];function gu(t,e,n,s){Array.isArray(n)||(n&&(ul[0]=n.toString()),n=ul);for(var i=0;i<n.length;i++){var r=ou(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function mu(t){Uo(t.g,function(e,n){this.g.hasOwnProperty(n)&&qo(e)},t),t.g={}}ys.prototype.M=function(){ys.X.M.call(this),mu(this)};ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hi(){this.g=!0}Hi.prototype.Aa=function(){this.g=!1};function gg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function mg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function In(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vg(t,n)+(s?" "+s:"")})}function yg(t,e){t.info(function(){return"TIMEOUT: "+e})}Hi.prototype.info=function(){};function vg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zo(n)}catch{return e}}var pn={},hl=null;function zi(){return hl=hl||new Te}pn.Pa="serverreachability";function yu(t){Me.call(this,pn.Pa,t)}De(yu,Me);function vs(t){const e=zi();Ae(e,new yu(e))}pn.STAT_EVENT="statevent";function vu(t,e){Me.call(this,pn.STAT_EVENT,t),this.stat=e}De(vu,Me);function Ve(t){const e=zi();Ae(e,new vu(e,t))}pn.Qa="timingevent";function wu(t,e){Me.call(this,pn.Qa,t),this.size=e}De(wu,Me);function Rs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var Ki={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wo(){}Wo.prototype.h=null;function dl(t){return t.h||(t.h=t.i())}function Eu(){}var Ls={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qo(){Me.call(this,"d")}De(Qo,Me);function Yo(){Me.call(this,"c")}De(Yo,Me);var ro;function Gi(){}De(Gi,Wo);Gi.prototype.g=function(){return new XMLHttpRequest};Gi.prototype.i=function(){return{}};ro=new Gi;function Ms(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ys(this),this.O=wg,t=Zr?125:void 0,this.T=new $i(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var wg=45e3,oo={},Ei={};D=Ms.prototype;D.setTimeout=function(t){this.O=t};function ao(t,e,n){t.K=1,t.v=Qi(It(e)),t.s=n,t.P=!0,Tu(t,null)}function Tu(t,e){t.F=Date.now(),xs(t),t.A=It(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Nu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new _u,t.g=Ju(t.l,n?e:null,!t.s),0<t.N&&(t.L=new pg(Le(t.La,t,t.g),t.N)),gu(t.S,t.g,"readystatechange",t.ib),e=t.H?iu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),vs(),gg(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Et(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Et(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Zr||this.g&&(this.h.h||this.g.fa()||ml(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?vs(3):vs(2)),Wi(this);var n=this.g.aa();this.Y=n;t:if(Cu(this)){var s=ml(this.g);t="";var i=s.length,r=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),os(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,mg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var c=a;break t}}c=null}if(n=c)In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,lo(this,n);else{this.i=!1,this.o=3,Ve(12),tn(this),os(this);break e}}this.P?(Su(this,u,o),Zr&&this.i&&u==3&&(gu(this.S,this.T,"tick",this.hb),this.T.start())):(In(this.j,this.m,o,null),lo(this,o)),u==4&&tn(this),this.i&&!this.I&&(u==4?Wu(this.l,this):(this.i=!1,xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),tn(this),os(this)}}}catch{}finally{}};function Cu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Su(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=bg(t,n),i==Ei){e==4&&(t.o=4,Ve(14),s=!1),In(t.j,t.m,null,"[Incomplete Response]");break}else if(i==oo){t.o=4,Ve(15),In(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else In(t.j,t.m,i,null),lo(t,i);Cu(t)&&i!=Ei&&i!=oo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sa(e),e.K=!0,Ve(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),tn(t),os(t))}D.hb=function(){if(this.g){var t=Et(this.g),e=this.g.fa();this.C<e.length&&(Wi(this),Su(this,t,e),this.i&&t!=4&&xs(this))}};function bg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?oo:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,tn(this)};function xs(t){t.V=Date.now()+t.O,Iu(t,t.O)}function Iu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rs(Le(t.gb,t),e)}function Wi(t){t.B&&(B.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(yg(this.j,this.A),this.K!=2&&(vs(),Ve(17)),tn(this),this.o=2,os(this)):Iu(this,this.V-t)};function os(t){t.l.G==0||t.I||Wu(t.l,t)}function tn(t){Wi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ko(t.T),mu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function lo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||co(n.h,t))){if(!t.J&&co(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ci(n),Ji(n);else break e;na(n),Ve(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Rs(Le(n.cb,n),6e3));if(1>=Lu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nn(n,11)}else if((t.J||n.g==t)&&Ci(n),!wi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Xo(r,r.h),r.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,le(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Xu(s,s.H?s.ka:null,s.V),o.J){Mu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Wi(a),xs(a)),s.g=o}else Ku(s);0<n.i.length&&Zi(n)}else c[0]!="stop"&&c[0]!="close"||nn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?nn(n,7):ta(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}vs(4)}catch{}}function Eg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function _g(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Au(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_g(t),s=Eg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rn){this.h=e!==void 0?e:t.h,_i(this,t.j),this.s=t.s,this.g=t.g,Ti(this,t.m),this.l=t.l,e=t.i;var n=new ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fl(this,n),this.o=t.o}else t&&(n=String(t).match(ku))?(this.h=!!e,_i(this,n[1]||"",!0),this.s=ts(n[2]||""),this.g=ts(n[3]||"",!0),Ti(this,n[4]),this.l=ts(n[5]||"",!0),fl(this,n[6]||"",!0),this.o=ts(n[7]||"")):(this.h=!!e,this.i=new ws(null,this.h))}rn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,pl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ns(e,pl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ns(n,n.charAt(0)=="/"?Ig:Sg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,kg)),t.join("")};function It(t){return new rn(t)}function _i(t,e,n){t.j=n?ts(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fl(t,e,n){e instanceof ws?(t.i=e,Dg(t.i,t.h)):(n||(e=ns(e,Ag)),t.i=new ws(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Qi(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ts(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Cg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Cg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pl=/[#\/\?@]/g,Sg=/[#\?:]/g,Ig=/[#\?]/g,Ag=/[#\?@]/g,kg=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kt(t){t.g||(t.g=new Map,t.h=0,t.i&&Tg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ws.prototype;D.add=function(t,e){Kt(this),this.i=null,t=Hn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Du(t,e){Kt(t),e=Hn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Pu(t,e){return Kt(t),e=Hn(t,e),t.g.has(e)}D.forEach=function(t,e){Kt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){Kt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){Kt(this);let e=[];if(typeof t=="string")Pu(this,t)&&(e=e.concat(this.g.get(Hn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Kt(this),this.i=null,t=Hn(this,t),Pu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Nu(t,e,n){Du(t,e),0<n.length&&(t.i=null,t.g.set(Hn(t,e),Bo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Hn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Dg(t,e){e&&!t.j&&(Kt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Du(this,s),Nu(this,i,n))},t)),t.j=e}var Pg=class{constructor(e,n){this.h=e,this.g=n}};function Ou(t){this.l=t||Ng,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ga&&B.g.Ga()&&B.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ng=10;function Ru(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lu(t){return t.h?1:t.g?t.g.size:0}function co(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xo(t,e){t.g?t.g.add(e):t.h=e}function Mu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ou.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bo(t.i)}function Jo(){}Jo.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)};Jo.prototype.parse=function(t){return B.JSON.parse(t,void 0)};function Og(){this.g=new Jo}function Rg(t,e,n){const s=n||"";try{Au(t,function(i,r){let o=i;Ns(i)&&(o=zo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Lg(t,e){const n=new Hi;if(B.Image){const s=new Image;s.onload=ei(ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ei(ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ei(ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ei(ni,n,s,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ni(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Fs(t){this.l=t.ac||null,this.j=t.jb||!1}De(Fs,Wo);Fs.prototype.g=function(){return new Yi(this.l,this.j)};Fs.prototype.i=function(t){return function(){return t}}({});function Yi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Yi,Te);var Zo=0;D=Yi.prototype;D.open=function(t,e){if(this.readyState!=Zo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=Zo};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Fu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bs(this):bs(this),this.readyState==3&&Fu(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Bs(this))};D.Ua=function(t){this.g&&(this.response=t,Bs(this))};D.ga=function(){this.g&&Bs(this)};function Bs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Mg=B.JSON.parse;function ce(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bu,this.K=this.L=!1}De(ce,Te);var Bu="",xg=/^https?$/i,Fg=["POST","PUT"];D=ce.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?dl(this.u):dl(ro),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){gl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=eu(Fg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ju(this),0<this.B&&((this.K=Bg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=Go(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){gl(this,r)}};function Bg(t){return Mn&&tg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Fo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function gl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vu(t),Xi(t)}function Vu(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Xi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xi(this,!0)),ce.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Uu(this):this.fb())};D.fb=function(){Uu(this)};function Uu(t){if(t.h&&typeof Fo<"u"&&(!t.C[1]||Et(t)!=4||t.aa()!=2)){if(t.v&&Et(t)==4)Go(t.Ha,0,t);else if(Ae(t,"readystatechange"),Et(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(ku)[1]||null;if(!i&&B.self&&B.self.location){var r=B.self.location.protocol;i=r.substr(0,r.length-1)}s=!xg.test(i?i.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<Et(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Vu(t)}}finally{Xi(t)}}}}function Xi(t,e){if(t.g){ju(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function ju(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function Et(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Mg(e)}};function ml(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Bu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qu(t){let e="";return Uo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ea(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=qu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function es(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $u(t){this.Ca=0,this.i=[],this.j=new Hi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=es("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=es("baseRetryDelayMs",5e3,t),this.bb=es("retryDelaySeedMs",1e4,t),this.$a=es("forwardChannelMaxRetries",2,t),this.ta=es("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ou(t&&t.concurrentRequestLimit),this.Fa=new Og,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=$u.prototype;D.ma=8;D.G=1;function ta(t){if(Hu(t),t.G==3){var e=t.U++,n=It(t.F);le(n,"SID",t.I),le(n,"RID",e),le(n,"TYPE","terminate"),Vs(t,n),e=new Ms(t,t.j,e,void 0),e.K=2,e.v=Qi(It(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ju(e.l,null),e.g.da(e.v)),e.F=Date.now(),xs(e)}Yu(t)}function Ji(t){t.g&&(sa(t),t.g.cancel(),t.g=null)}function Hu(t){Ji(t),t.u&&(B.clearTimeout(t.u),t.u=null),Ci(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Zi(t){Ru(t.h)||t.m||(t.m=!0,du(t.Ja,t),t.C=0)}function Vg(t,e){return Lu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Rs(Le(t.Ja,t,e),Qu(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ms(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=iu(r),ru(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=zu(this,i,e),n=It(this.F),le(n,"RID",t),le(n,"CVER",22),this.D&&le(n,"X-HTTP-Session-Id",this.D),Vs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(qu(r)))+"&"+e:this.o&&ea(n,this.o,r)),Xo(this.h,i),this.Ya&&le(n,"TYPE","init"),this.O?(le(n,"$req",e),le(n,"SID","null"),i.Z=!0,ao(i,n,null)):ao(i,n,e),this.G=2}}else this.G==3&&(t?yl(this,t):this.i.length==0||Ru(this.h)||yl(this))};function yl(t,e){var n;e?n=e.m:n=t.U++;const s=It(t.F);le(s,"SID",t.I),le(s,"RID",n),le(s,"AID",t.T),Vs(t,s),t.o&&t.s&&ea(s,t.o,t.s),n=new Ms(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=zu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Xo(t.h,n),ao(n,s,e)}function Vs(t,e){t.ia&&Uo(t.ia,function(n,s){le(e,s,n)}),t.l&&Au({},function(n,s){le(e,s,n)})}function zu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Rg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ku(t){t.g||t.u||(t.Z=1,du(t.Ia,t),t.A=0)}function na(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Rs(Le(t.Ia,t),Qu(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,Gu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Rs(Le(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),Ji(this),Gu(this))};function sa(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function Gu(t){t.g=new Ms(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=It(t.sa);le(e,"RID","rpc"),le(e,"SID",t.I),le(e,"CI",t.L?"0":"1"),le(e,"AID",t.T),le(e,"TYPE","xmlhttp"),Vs(t,e),t.o&&t.s&&ea(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Qi(It(e)),n.s=null,n.P=!0,Tu(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Ji(this),na(this),Ve(19))};function Ci(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function Wu(t,e){var n=null;if(t.g==e){Ci(t),sa(t),t.g=null;var s=2}else if(co(t.h,e))n=e.D,Mu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=zi(),Ae(s,new wu(s,n)),Zi(t)}else Ku(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Vg(t,e)||s==2&&na(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:nn(t,5);break;case 4:nn(t,10);break;case 3:nn(t,6);break;default:nn(t,2)}}}function Qu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function nn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new rn("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||_i(n,"https"),Qi(n)),Lg(n.toString(),s)}else Ve(2);t.G=0,t.l&&t.l.va(e),Yu(t),Hu(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Yu(t){if(t.G=0,t.la=[],t.l){const e=xu(t.h);(e.length!=0||t.i.length!=0)&&(ol(t.la,e),ol(t.la,t.i),t.h.i.length=0,Bo(t.i),t.i.length=0),t.l.ua()}}function Xu(t,e,n){var s=n instanceof rn?It(n):new rn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ti(s,s.m);else{var i=B.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new rn(null,void 0);s&&_i(r,s),e&&(r.g=e),i&&Ti(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&le(s,n,e),le(s,"VER",t.ma),Vs(t,s),s}function Ju(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Fs({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function Zu(){}D=Zu.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Si(){if(Mn&&!(10<=Number(ng)))throw Error("Environmental error: no available transport.")}Si.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Te.call(this),this.g=new $u(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zn(this)}De(Qe,Te);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ve(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xu(t,null,t.V),Zi(t)};Qe.prototype.close=function(){ta(this.g)};Qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zo(t),t=n);e.i.push(new Pg(e.ab++,t)),e.G==3&&Zi(e)};Qe.prototype.M=function(){this.g.l=null,delete this.j,ta(this.g),delete this.g,Qe.X.M.call(this)};function eh(t){Qo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(eh,Qo);function th(){Yo.call(this),this.status=1}De(th,Yo);function zn(t){this.g=t}De(zn,Zu);zn.prototype.xa=function(){Ae(this.g,"a")};zn.prototype.wa=function(t){Ae(this.g,new eh(t))};zn.prototype.va=function(t){Ae(this.g,new th)};zn.prototype.ua=function(){Ae(this.g,"b")};Si.prototype.createWebChannel=Si.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;Ki.NO_ERROR=0;Ki.TIMEOUT=8;Ki.HTTP_ERROR=6;bu.COMPLETE="complete";Eu.EventType=Ls;Ls.OPEN="a";Ls.CLOSE="b";Ls.ERROR="c";Ls.MESSAGE="d";Te.prototype.listen=Te.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var Ug=function(){return new Si},jg=function(){return zi()},xr=Ki,qg=bu,$g=pn,vl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Hg=Fs,si=Eu,zg=ce;const wl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const cn=new zc("@firebase/firestore");function bl(){return cn.logLevel}function N(t,...e){if(cn.logLevel<=Z.DEBUG){const n=e.map(ia);cn.debug(`Firestore (${Kn}): ${t}`,...n)}}function At(t,...e){if(cn.logLevel<=Z.ERROR){const n=e.map(ia);cn.error(`Firestore (${Kn}): ${t}`,...n)}}function uo(t,...e){if(cn.logLevel<=Z.WARN){const n=e.map(ia);cn.warn(`Firestore (${Kn}): ${t}`,...n)}}function ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function x(t="Unexpected state"){const e=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: `+t;throw At(e),new Error(e)}function re(t,e){t||x()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class Gg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Wg{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new nh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Pe(e)}}class Qg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Yg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Qg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Xg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Zg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ee(t,e){return t<e?-1:t>e?1:0}function xn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new ye(0,0))}static max(){return new U(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){n===void 0?n=0:n>e.length&&x(),s===void 0?s=e.length-n:s>e.length-n&&x(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Es.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Es?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends Es{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Es{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return em.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(oe.fromString(e))}static fromName(e){return new O(oe.fromString(e).popFirst(5))}static empty(){return new O(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new oe(e.slice()))}}function tm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Ut(i,O.empty(),e)}function nm(t){return new Ut(t.readTime,t.key,-1)}class Ut{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ut(U.min(),O.empty(),-1)}static max(){return new Ut(U.max(),O.empty(),-1)}}function sm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==im)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ra.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class _s{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _s&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){return t==null}function Ii(t){return t===0&&1/t==-1/0}function am(t){return typeof t=="number"&&Number.isInteger(t)&&!Ii(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new lm("Invalid base64 string: "+i):i}}(e);return new xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const cm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(t){if(re(!!t),typeof t=="string"){let e=0;const n=cm.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fn(t){return typeof t=="string"?xe.fromBase64String(t):xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function oh(t){const e=t.mapValue.fields.__previous_value__;return rh(e)?oh(e):e}function Ts(t){const e=jt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:um(t)?9007199254740991:10:x()}function pt(t,e){if(t===e)return!0;const n=un(t);if(n!==un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=jt(s.timestampValue),o=jt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=he(s.doubleValue),o=he(i.doubleValue);return r===o?Ii(r)===Ii(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return xn(t.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(El(r)!==El(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!pt(r[a],o[a])))return!1;return!0}(t,e);default:return x()}}function Cs(t,e){return(t.values||[]).find(n=>pt(n,e))!==void 0}function Bn(t,e){if(t===e)return 0;const n=un(t),s=un(e);if(n!==s)return ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=he(i.integerValue||i.doubleValue),a=he(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _l(t.timestampValue,e.timestampValue);case 4:return _l(Ts(t),Ts(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Fn(i),a=Fn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ee(o[l],a[l]);if(c!==0)return c}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ee(he(i.latitude),he(r.latitude));return o!==0?o:ee(he(i.longitude),he(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Bn(o[l],a[l]);if(c)return c}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ii.mapValue&&r===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(r===ii.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ee(a[u],c[u]);if(h!==0)return h;const d=Bn(o[a[u]],l[c[u]]);if(d!==0)return d}return ee(a.length,c.length)}(t.mapValue,e.mapValue);default:throw x()}}function _l(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=jt(t),s=jt(e),i=ee(n.seconds,s.seconds);return i!==0?i:ee(n.nanos,s.nanos)}function Vn(t){return ho(t)}function ho(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=jt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ho(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${ho(s.fields[a])}`;return r+"}"}(t.mapValue):x();var e,n}function Tl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fo(t){return!!t&&"integerValue"in t}function oa(t){return!!t&&"arrayValue"in t}function Cl(t){return!!t&&"nullValue"in t}function Sl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ui(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=as(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function um(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ai{constructor(e,n){this.position=e,this.inclusive=n}}function Il(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Bn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Al(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ah{}class de extends ah{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new dm(e,n,s):n==="array-contains"?new gm(e,s):n==="in"?new mm(e,s):n==="not-in"?new ym(e,s):n==="array-contains-any"?new vm(e,s):new de(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new fm(e,s):new pm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bn(n,this.value)):n!==null&&un(this.value)===un(n)&&this.matchesComparison(Bn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends ah{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new at(e,n)}matches(e){return lh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function lh(t){return t.op==="and"}function ch(t){return hm(t)&&lh(t)}function hm(t){for(const e of t.filters)if(e instanceof at)return!1;return!0}function po(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+Vn(t.value);if(ch(t))return t.filters.map(e=>po(e)).join(",");{const e=t.filters.map(n=>po(n)).join(",");return`${t.op}(${e})`}}function uh(t,e){return t instanceof de?function(n,s){return s instanceof de&&n.op===s.op&&n.field.isEqual(s.field)&&pt(n.value,s.value)}(t,e):t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&uh(r,s.filters[o]),!0):!1}(t,e):void x()}function hh(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${Vn(e.value)}`}(t):t instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(hh).join(" ,")+"}"}(t):"Filter"}class dm extends de{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class fm extends de{constructor(e,n){super(e,"in",n),this.keys=dh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pm extends de{constructor(e,n){super(e,"not-in",n),this.keys=dh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class gm extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oa(n)&&Cs(n.arrayValue,this.value)}}class mm extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cs(this.value.arrayValue,n)}}class ym extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cs(this.value.arrayValue,n)}}class vm extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Cs(this.value.arrayValue,s))}}/**
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
 */class kn{constructor(e,n="asc"){this.field=e,this.dir=n}}function wm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Se.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Se.RED,this.left=i??Se.EMPTY,this.right=r??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Se(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Se(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kl(this.data.getIterator())}getIteratorFrom(e){return new kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Ge([])}unionWith(e){let n=new ve(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ge(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=as(n)}setAll(e){let n=Oe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=as(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){gn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new He(as(this.value))}}function fh(t){const e=[];return gn(t.fields,(n,s)=>{const i=new Oe([n]);if(ui(s)){const r=fh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ge(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Dl(t,e=null,n=[],s=[],i=null,r=null,o=null){return new bm(t,e,n,s,i,r,o)}function aa(t){const e=j(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>po(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),er(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vn(s)).join(",")),e._t=n}return e._t}function la(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!uh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Al(t.startAt,e.startAt)&&Al(t.endAt,e.endAt)}function go(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Em(t,e,n,s,i,r,o,a){return new Gn(t,e,n,s,i,r,o,a)}function ca(t){return new Gn(t)}function Pl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ua(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function tr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ph(t){return t.collectionGroup!==null}function Dn(t){const e=j(t);if(e.wt===null){e.wt=[];const n=tr(e),s=ua(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new kn(n)),e.wt.push(new kn(Oe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new kn(Oe.keyField(),r))}}}return e.wt}function kt(t){const e=j(t);if(!e.gt)if(e.limitType==="F")e.gt=Dl(e.path,e.collectionGroup,Dn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Dn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new kn(r.field,o))}const s=e.endAt?new Ai(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ai(e.startAt.position,e.startAt.inclusive):null;e.gt=Dl(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function mo(t,e){e.getFirstInequalityField(),tr(t);const n=t.filters.concat([e]);return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function yo(t,e,n){return new Gn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nr(t,e){return la(kt(t),kt(e))&&t.limitType===e.limitType}function gh(t){return`${aa(kt(t))}|lt:${t.limitType}`}function vo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>hh(s)).join(", ")}]`),er(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vn(s)).join(",")),`Target(${n})`}(kt(t))}; limitType=${t.limitType})`}function sr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Dn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Il(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Dn(n),s)||n.endAt&&!function(i,r,o){const a=Il(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Dn(n),s))}(t,e)}function _m(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mh(t){return(e,n)=>{let s=!1;for(const i of Dn(t)){const r=Tm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Tm(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bn(a,l):x()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return x()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function vh(t){return{integerValue:""+t}}function Cm(t,e){return am(e)?vh(e):yh(t,e)}/**
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
 */class ir{constructor(){this._=void 0}}function Sm(t,e,n){return t instanceof ki?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ss?bh(t,e):t instanceof Is?Eh(t,e):function(s,i){const r=wh(s,i),o=Nl(r)+Nl(s.It);return fo(r)&&fo(s.It)?vh(o):yh(s.Tt,o)}(t,e)}function Im(t,e,n){return t instanceof Ss?bh(t,e):t instanceof Is?Eh(t,e):n}function wh(t,e){return t instanceof Di?fo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ki extends ir{}class Ss extends ir{constructor(e){super(),this.elements=e}}function bh(t,e){const n=_h(e);for(const s of t.elements)n.some(i=>pt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Is extends ir{constructor(e){super(),this.elements=e}}function Eh(t,e){let n=_h(e);for(const s of t.elements)n=n.filter(i=>!pt(i,s));return{arrayValue:{values:n}}}class Di extends ir{constructor(e,n){super(),this.Tt=e,this.It=n}}function Nl(t){return he(t.integerValue||t.doubleValue)}function _h(t){return oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Am(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ss&&s instanceof Ss||n instanceof Is&&s instanceof Is?xn(n.elements,s.elements,pt):n instanceof Di&&s instanceof Di?pt(n.It,s.It):n instanceof ki&&s instanceof ki}(t.transform,e.transform)}class km{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rr{}function Th(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ha(t.key,et.none()):new qs(t.key,t.data,et.none());{const n=t.data,s=He.empty();let i=new ve(Oe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Gt(t.key,s,new Ge(i.toArray()),et.none())}}function Dm(t,e,n){t instanceof qs?function(s,i,r){const o=s.value.clone(),a=Rl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gt?function(s,i,r){if(!hi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Rl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ch(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ls(t,e,n,s){return t instanceof qs?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=i.value.clone(),c=Ll(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Gt?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=Ll(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ch(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return hi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Pm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=wh(s.transform,i||null);r!=null&&(n===null&&(n=He.empty()),n.set(s.field,r))}return n||null}function Ol(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&xn(n,s,(i,r)=>Am(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qs extends rr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gt extends rr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ch(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Rl(t,e,n){const s=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Im(o,a,n[i]))}return s}function Ll(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Sm(r,o,e))}return s}class ha extends rr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nm extends rr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,Y;function Rm(t){switch(t){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Sh(t){if(t===void 0)return At("GRPC error has no .code"),b.UNKNOWN;switch(t){case ue.OK:return b.OK;case ue.CANCELLED:return b.CANCELLED;case ue.UNKNOWN:return b.UNKNOWN;case ue.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ue.INTERNAL:return b.INTERNAL;case ue.UNAVAILABLE:return b.UNAVAILABLE;case ue.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ue.NOT_FOUND:return b.NOT_FOUND;case ue.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ue.ABORTED:return b.ABORTED;case ue.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ue.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(Y=ue||(ue={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ih(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=new we(O.comparator);function Dt(){return Lm}const Ih=new we(O.comparator);function ss(...t){let e=Ih;for(const n of t)e=e.insert(n.key,n);return e}function Ah(t){let e=Ih;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function sn(){return cs()}function kh(){return cs()}function cs(){return new Wn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mm=new we(O.comparator),xm=new ve(O.comparator);function W(...t){let e=xm;for(const n of t)e=e.add(n);return e}const Fm=new ve(ee);function Dh(){return Fm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new or(U.min(),i,Dh(),Dt(),W())}}class $s{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $s(s,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Ph{constructor(e,n){this.targetId=e,this.Rt=n}}class Nh{constructor(e,n,s=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ml{constructor(){this.bt=0,this.vt=Fl(),this.Pt=xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=W(),n=W(),s=W();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:x()}}),new $s(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Fl()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Bm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Dt(),this.Kt=xl(),this.Gt=new ve(ee)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:x()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(go(r))if(s===0){const o=new O(r.path);this.zt(n,o,Ne.newNoDocument(o,U.min()))}else re(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&go(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ne.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=W();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new or(e,n,this.Gt,this.Ut,s);return this.Ut=Dt(),this.Kt=xl(),this.Gt=new ve(ee),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Ml,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(ee),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Ml),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function xl(){return new we(O.comparator)}function Fl(){return new we(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Um=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),jm=(()=>({and:"AND",or:"OR"}))();class qm{constructor(e,n){this.databaseId=e,this.yt=n}}function Pi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Oh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function $m(t,e){return Pi(t,e.toTimestamp())}function ft(t){return re(!!t),U.fromTimestamp(function(e){const n=jt(e);return new ye(n.seconds,n.nanos)}(t))}function da(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Rh(t){const e=oe.fromString(t);return re(Fh(e)),e}function wo(t,e){return da(t.databaseId,e.path)}function Fr(t,e){const n=Rh(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Lh(n))}function bo(t,e){return da(t.databaseId,e)}function Hm(t){const e=Rh(t);return e.length===4?oe.emptyPath():Lh(e)}function Eo(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lh(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bl(t,e,n){return{name:wo(t,e),fields:n.value.mapValue.fields}}function zm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(re(c===void 0||typeof c=="string"),xe.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:Sh(l.code);return new A(c,l.message||"")}(o);n=new Nh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Fr(t,s.document.name),r=ft(s.document.updateTime),o=s.document.createTime?ft(s.document.createTime):U.min(),a=new He({mapValue:{fields:s.document.fields}}),l=Ne.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new di(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Fr(t,s.document),r=s.readTime?ft(s.readTime):U.min(),o=Ne.newNoDocument(i,r),a=s.removedTargetIds||[];n=new di([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Fr(t,s.document),r=s.removedTargetIds||[];n=new di([],r,i,null)}else{if(!("filter"in e))return x();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Om(i),o=s.targetId;n=new Ph(o,r)}}return n}function Km(t,e){let n;if(e instanceof qs)n={update:Bl(t,e.key,e.value)};else if(e instanceof ha)n={delete:wo(t,e.key)};else if(e instanceof Gt)n={update:Bl(t,e.key,e.data),updateMask:ty(e.fieldMask)};else{if(!(e instanceof Nm))return x();n={verify:wo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ki)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Is)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:r.field.canonicalString(),increment:o.It};throw x()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$m(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(t,e.precondition)),n}function Gm(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ft(s.updateTime):ft(i);return r.isEqual(U.min())&&(r=ft(i)),new km(r,s.transformResults||[])}(n,e))):[]}function Wm(t,e){return{documents:[bo(t,e.path)]}}function Qm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=bo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return xh(at.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:Cn(u.field),direction:Jm(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||er(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Ym(t){let e=Hm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Mh(u);return h instanceof at&&ch(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new kn(Sn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,er(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ai(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ai(d,h)}(n.endAt)),Em(e,i,o,r,a,"F",l,c)}function Xm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return x()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Sn(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Sn(e.unaryFilter.field);return de.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sn(e.unaryFilter.field);return de.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Sn(e.unaryFilter.field);return de.create(r,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Sn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(n=>Mh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(t):x()}function Jm(t){return Vm[t]}function Zm(t){return Um[t]}function ey(t){return jm[t]}function Cn(t){return{fieldPath:t.canonicalString()}}function Sn(t){return Oe.fromServerFormat(t.fieldPath)}function xh(t){return t instanceof de?function(e){if(e.op==="=="){if(Sl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NAN"}};if(Cl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Sl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NAN"}};if(Cl(e.value))return{unaryFilter:{field:Cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cn(e.field),op:Zm(e.op),value:e.value}}}(t):t instanceof at?function(e){const n=e.getFilters().map(s=>xh(s));return n.length===1?n[0]:{compositeFilter:{op:ey(e.op),filters:n}}}(t):x()}function ty(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Dm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ls(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=kh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Th(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&xn(this.mutations,e.mutations,(n,s)=>Ol(n,s))&&xn(this.baseMutations,e.baseMutations,(n,s)=>Ol(n,s))}}class fa{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){re(e.mutations.length===s.length);let i=Mm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new fa(e,n,s,i)}}/**
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
 */class sy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class on{constructor(e,n,s,i,r=U.min(),o=U.min(),a=xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.oe=e}}function ry(t){const e=Ym({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?yo(e,e.limit,"L"):e}/**
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
 */class oy{constructor(){this.Ze=new ay}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Ut.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Ut.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ay{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ve(oe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ly{constructor(){this.changes=new Wn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ls(s.mutation,i,Ge.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,W()).next(()=>s))}getLocalViewOfDocuments(e,n,s=W()){const i=sn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ss();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=sn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,W()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Dt();const o=cs(),a=cs();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Gt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ls(u.mutation,c,u.mutation.getFieldMask(),ye.now())):o.set(c.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new cy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=cs();let i=new we((o,a)=>o-a),r=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ge.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=kh();u.forEach(d=>{if(!r.has(d)){const f=Th(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ph(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(sn());let a=-1,l=r;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,W())).next(u=>({batchId:a,changes:Ah(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let i=ss();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ss();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Gn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Ne.newInvalidDocument(c)))});let o=ss();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&ls(c.mutation,l,Ge.empty(),ye.now()),sr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ft(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:ry(s.bundledQuery),readTime:ft(s.readTime)}}(n)),E.resolve()}}/**
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
 */class dy{constructor(){this.overlays=new we(O.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=sn();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=sn(),r=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new we((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=sn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=sn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sy(n,s));let r=this.ss.get(n);r===void 0&&(r=W(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.rs=new ve(Ee.os),this.us=new ve(Ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ee(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new O(new oe([])),s=new Ee(n,e),i=new Ee(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new oe([])),s=new Ee(n,e),i=new Ee(n,e+1);let r=W();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ee(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||ee(e.gs,n.gs)}static cs(e,n){return ee(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(Ee.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ny(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ee(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(ee);return n.forEach(i=>{const r=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new O(r),0);let a=new ve(ee);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new Ee(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ee(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.Rs=e,this.docs=new we(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Ne.newInvalidDocument(n))}getEntries(e,n){let s=Dt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Ne.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Dt();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sm(nm(u),s)<=0||(i.has(u.key)||sr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){x()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gy(this)}getSize(e){return E.resolve(this.size)}}class gy extends ly{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.persistence=e,this.vs=new Wn(n=>aa(n),la),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new pa,this.targetCount=0,this.Ss=Un.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Un(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ra(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new my(this),this.indexManager=new oy,this.remoteDocumentCache=function(s){return new py(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new iy(n),this.Os=new hy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new fy(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){N("MemoryPersistence","Starting transaction:",e);const i=new vy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class vy extends rm{constructor(e){super(),this.currentSequenceNumber=e}}class ga{constructor(e){this.persistence=e,this.Bs=new pa,this.Ls=null}static qs(e){return new ga(e)}get Us(){if(this.Ls)return this.Ls;throw x()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,U.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=W(),i=W();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ma(e,n.fromCache,s,i)}}/**
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
 */class wy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Pl(n))return E.resolve(null);let s=kt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=yo(n,null,"F"),s=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=W(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,yo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Pl(n)||i.isEqual(U.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(bl()<=Z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vo(n)),this.qi(e,o,n,tm(i,-1)))})}Bi(e,n){let s=new ve(mh(e));return n.forEach((i,r)=>{sr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return bl()<=Z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",vo(n)),this.Oi.getDocumentsMatchingQuery(e,n,Ut.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new we(ee),this.Gi=new Wn(r=>aa(r),la),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Ey(t,e,n,s){return new by(t,e,n,s)}async function Bh(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=W();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function _y(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(g=>{const y=l.docVersions.get(f);re(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Vh(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Ty(t,e){const n=j(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(xe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,y,v){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,u)&&a.push(n.Ns.updateTargetData(r,f))});let l=Dt(),c=W();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Cy(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(U.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Cy(t,e,n){let s=W(),i=W();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Dt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):N("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Sy(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Iy(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new on(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function _o(t,e,n){const s=j(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!js(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Vl(t,e,n){const s=j(t);let i=U.min(),r=W();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=j(a),h=u.Gi.get(c);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?r:W())).next(a=>(Ay(s,_m(e),a),{documents:a,Yi:r})))}function Ay(t,e,n){let s=t.Qi.get(e)||U.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Ul{constructor(){this.activeTargetIds=Dh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ky{constructor(){this.Ur=new Ul,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ul,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dy{Gr(e){}shutdown(){}}/**
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
 */class jl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);N("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(N("RestConnection","Received: ",l),l),l=>{throw uo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Py[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new zg;a.setWithCredentials(!0),a.listenOnce(qg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xr.NO_ERROR:const c=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(c)),r(c);break;case xr.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const u=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Ug(),o=jg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Hg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");N("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new Ny({Yr:g=>{h?N("Connection","Not sending because WebChannel is closed:",g):(u||(N("Connection","Opening WebChannel transport."),c.open(),u=!0),N("Connection","WebChannel sending:",g),c.send(g))},Zr:()=>c.close()}),f=(g,y,v)=>{g.listen(y,S=>{try{v(S)}catch(T){setTimeout(()=>{throw T},0)}})};return f(c,si.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),f(c,si.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),d.oo())}),f(c,si.EventType.ERROR,g=>{h||(h=!0,uo("Connection","WebChannel transport errored:",g),d.oo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),f(c,si.EventType.MESSAGE,g=>{var y;if(!h){const v=g.data[0];re(!!v);const S=v,T=S.error||((y=S[0])===null||y===void 0?void 0:y.error);if(T){N("Connection","WebChannel received error:",T);const I=T.status;let L=function(ne){const F=ue[ne];if(F!==void 0)return Sh(F)}(I),V=T.message;L===void 0&&(L=b.INTERNAL,V="Unknown error status: "+I+" with message "+T.message),h=!0,d.oo(new A(L,V)),c.close()}else N("Connection","WebChannel received:",v),d.uo(v)}}),f(o,$g.STAT_EVENT,g=>{g.stat===vl.PROXY?N("Connection","Detected buffering proxy"):g.stat===vl.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t){return new qm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Uh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(At(n.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ry extends jh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=zm(this.Tt,e),s=function(i){if(!("targetChange"in i))return U.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?U.min():r.readTime?ft(r.readTime):U.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Eo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=go(a)?{documents:Wm(i,a)}:{query:Qm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Oh(i,r.resumeToken):r.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Pi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Xm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Eo(this.Tt),n.removeTarget=e,this.qo(n)}}class Ly extends jh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Gm(e.writeResults,e.commitTime),s=ft(e.commitTime);return this.listener.eu(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Eo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Km(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(b.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(b.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class xy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class Fy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{mn(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.mu.add(4),await Hs(l),l.pu.set("Unknown"),l.mu.delete(4),await lr(l)}(this))})}),this.pu=new xy(s,i)}}async function lr(t){if(mn(t))for(const e of t.gu)await e(!0)}async function Hs(t){for(const e of t.gu)await e(!1)}function qh(t,e){const n=j(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),wa(n)?va(n):Qn(n).Mo()&&ya(n,e))}function $h(t,e){const n=j(t),s=Qn(n);n.wu.delete(e),s.Mo()&&Hh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():mn(n)&&n.pu.set("Unknown"))}function ya(t,e){t.Iu.Ft(e.targetId),Qn(t).Jo(e)}function Hh(t,e){t.Iu.Ft(e),Qn(t).Yo(e)}function va(t){t.Iu=new Bm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Qn(t).start(),t.pu.au()}function wa(t){return mn(t)&&!Qn(t).Oo()&&t.wu.size>0}function mn(t){return j(t).mu.size===0}function zh(t){t.Iu=void 0}async function By(t){t.wu.forEach((e,n)=>{ya(t,e)})}async function Vy(t,e){zh(t),wa(t)?(t.pu.fu(e),va(t)):t.pu.set("Unknown")}async function Uy(t,e,n){if(t.pu.set("Online"),e instanceof Nh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ni(t,s)}else if(e instanceof di?t.Iu.Qt(e):e instanceof Ph?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(U.min()))try{const s=await Vh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(xe.EMPTY_BYTE_STRING,l.snapshotVersion)),Hh(i,a);const c=new on(l.target,a,1,l.sequenceNumber);ya(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){N("RemoteStore","Failed to raise snapshot:",s),await Ni(t,s)}}async function Ni(t,e,n){if(!js(e))throw e;t.mu.add(1),await Hs(t),t.pu.set("Offline"),n||(n=()=>Vh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await lr(t)})}function Kh(t,e){return e().catch(n=>Ni(t,n,e))}async function cr(t){const e=j(t),n=qt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;jy(e);)try{const i=await Sy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,qy(e,i)}catch(i){await Ni(e,i)}Gh(e)&&Wh(e)}function jy(t){return mn(t)&&t._u.length<10}function qy(t,e){t._u.push(e);const n=qt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Gh(t){return mn(t)&&!qt(t).Oo()&&t._u.length>0}function Wh(t){qt(t).start()}async function $y(t){qt(t).su()}async function Hy(t){const e=qt(t);for(const n of t._u)e.tu(n.mutations)}async function zy(t,e,n){const s=t._u.shift(),i=fa.from(s,e,n);await Kh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cr(t)}async function Ky(t,e){e&&qt(t).Xo&&await async function(n,s){if(i=s.code,Rm(i)&&i!==b.ABORTED){const r=n._u.shift();qt(n).$o(),await Kh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await cr(n)}var i}(t,e),Gh(t)&&Wh(t)}async function ql(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const s=mn(n);n.mu.add(3),await Hs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await lr(n)}async function Gy(t,e){const n=j(t);e?(n.mu.delete(2),await lr(n)):e||(n.mu.add(2),await Hs(n),n.pu.set("Unknown"))}function Qn(t){return t.Tu||(t.Tu=function(e,n,s){const i=j(e);return i.ru(),new Ry(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:By.bind(null,t),no:Vy.bind(null,t),Ho:Uy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),wa(t)?va(t):t.pu.set("Unknown")):(await t.Tu.stop(),zh(t))})),t.Tu}function qt(t){return t.Eu||(t.Eu=function(e,n,s){const i=j(e);return i.ru(),new Ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:$y.bind(null,t),no:Ky.bind(null,t),nu:Hy.bind(null,t),eu:zy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await cr(t)):(await t.Eu.stop(),t._u.length>0&&(N("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ba(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ea(t,e){if(At("AsyncQueue",`${e}: ${t}`),js(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=ss(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Pn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class $l{constructor(){this.Au=new we(O.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):x():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class jn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jn(e,n,Pn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.bu=void 0,this.listeners=[]}}class Qy{constructor(){this.queries=new Wn(e=>gh(e),nr),this.onlineState="Unknown",this.vu=new Set}}async function Qh(t,e){const n=j(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Wy),i)try{r.bu=await n.onListen(s)}catch(o){const a=Ea(o,`Initialization of query '${vo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&_a(n)}async function Yh(t,e){const n=j(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Yy(t,e){const n=j(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&_a(n)}function Xy(t,e,n){const s=j(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function _a(t){t.vu.forEach(e=>{e.next()})}class Xh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new jn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.key=e}}class Zh{constructor(e){this.key=e}}class Jy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=W(),this.mutatedKeys=W(),this.ju=mh(e),this.zu=new Pn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new $l,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=sr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),v=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),v=!0,(l&&this.ju(f,l)>0||c&&this.ju(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),v=!0):d&&!f&&(s.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return f(h)-f(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new jn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new $l,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=W(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Zh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Jh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=W();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return jn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Zy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ev{constructor(e){this.key=e,this.ic=!1}}class tv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Wn(a=>gh(a),nr),this.uc=new Map,this.cc=new Set,this.ac=new we(O.comparator),this.hc=new Map,this.lc=new pa,this.fc={},this.dc=new Map,this._c=Un.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function nv(t,e){const n=dv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Iy(n.localStore,kt(e));n.isPrimaryClient&&qh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await sv(n,e,s,a==="current",o.resumeToken)}return i}async function sv(t,e,n,s,i){t.mc=(h,d,f)=>async function(g,y,v,S){let T=y.view.Hu(v);T.Li&&(T=await Vl(g.localStore,y.query,!1).then(({documents:V})=>y.view.Hu(V,T)));const I=S&&S.targetChanges.get(y.targetId),L=y.view.applyChanges(T,g.isPrimaryClient,I);return zl(g,y.targetId,L.tc),L.snapshot}(t,h,d,f);const r=await Vl(t.localStore,e,!0),o=new Jy(e,r.Yi),a=o.Hu(r.documents),l=$s.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);zl(t,n,c.tc);const u=new Zy(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function iv(t,e){const n=j(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!nr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$h(n.remoteStore,s.targetId),To(n,s.targetId)}).catch(Us)):(To(n,s.targetId),await _o(n.localStore,s.targetId,!0))}async function rv(t,e,n){const s=fv(t);try{const i=await function(r,o){const a=j(r),l=ye.now(),c=o.reduce((d,f)=>d.add(f.key),W());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Dt(),g=W();return a.ji.getEntries(d,c).next(y=>{f=y,f.forEach((v,S)=>{S.isValidDocument()||(g=g.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const v=[];for(const S of o){const T=Pm(S,u.get(S.key).overlayedDocument);T!=null&&v.push(new Gt(S.key,T,fh(T.value.mapValue),et.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,v,o)}).next(y=>{h=y;const v=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,v)})}).then(()=>({batchId:h.batchId,changes:Ah(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new we(ee)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await zs(s,i.changes),await cr(s.remoteStore)}catch(i){const r=Ea(i,"Failed to persist write");n.reject(r)}}async function ed(t,e){const n=j(t);try{const s=await Ty(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?re(o.ic):i.removedDocuments.size>0&&(re(o.ic),o.ic=!1))}),await zs(n,s,e)}catch(s){await Us(s)}}function Hl(t,e,n){const s=j(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=j(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&_a(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ov(t,e,n){const s=j(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new we(O.comparator);o=o.insert(r,Ne.newNoDocument(r,U.min()));const a=W().add(r),l=new or(U.min(),new Map,new ve(ee),o,a);await ed(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),Ta(s)}else await _o(s.localStore,e,!1).then(()=>To(s,e,n)).catch(Us)}async function av(t,e){const n=j(t),s=e.batch.batchId;try{const i=await _y(n.localStore,e);nd(n,s,null),td(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zs(n,i)}catch(i){await Us(i)}}async function lv(t,e,n){const s=j(t);try{const i=await function(r,o){const a=j(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(re(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);nd(s,e,n),td(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zs(s,i)}catch(i){await Us(i)}}function td(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function nd(t,e,n){const s=j(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function To(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||sd(t,s)})}function sd(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&($h(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ta(t))}function zl(t,e,n){for(const s of n)s instanceof Jh?(t.lc.addReference(s.key,e),cv(t,s)):s instanceof Zh?(N("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||sd(t,s.key)):x()}function cv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(N("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ta(t))}function Ta(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(oe.fromString(e)),s=t._c.next();t.hc.set(s,new ev(n)),t.ac=t.ac.insert(n,s),qh(t.remoteStore,new on(kt(ca(n.path)),s,2,ra.at))}}async function zs(t,e,n){const s=j(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ma.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=j(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,h=>E.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!js(u))throw u;N("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(h,g)}}}(s.localStore,r))}async function uv(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const s=await Bh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zs(n,s.Wi)}}function hv(t,e){const n=j(t),s=n.hc.get(e);if(s&&s.ic)return W().add(s.key);{let i=W();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function dv(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ov.bind(null,e),e.rc.Ho=Yy.bind(null,e.eventManager),e.rc.gc=Xy.bind(null,e.eventManager),e}function fv(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lv.bind(null,e),e}class pv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ar(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Ey(this.persistence,new wy,e.initialUser,this.Tt)}Tc(e){return new yy(ga.qs,this.Tt)}Ic(e){return new ky}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Hl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uv.bind(null,this.syncEngine),await Gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qy}createDatastore(e){const n=ar(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Oy(i));var i;return function(r,o,a,l){return new My(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Hl(this.syncEngine,a,0),o=jl.C()?new jl:new Dy,new Fy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new tv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);N("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Hs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=sh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{N("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(N("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ea(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function yv(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Bh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wv(t);N("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>ql(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>ql(e.remoteStore,r)),t.onlineComponents=e}async function wv(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await yv(t,new pv)),t.offlineComponents}async function rd(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await vv(t,new gv)),t.onlineComponents}function bv(t){return rd(t).then(e=>e.syncEngine)}async function Co(t){const e=await rd(t),n=e.eventManager;return n.onListen=nv.bind(null,e.syncEngine),n.onUnlisten=iv.bind(null,e.syncEngine),n}function Ev(t,e,n={}){const s=new xt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new id({next:h=>{r.enqueueAndForget(()=>Yh(i,u)),h.fromCache&&a.source==="server"?l.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Xh(o,c,{includeMetadataChanges:!0,Ou:!0});return Qh(i,u)}(await Co(t),t.asyncQueue,e,n,s)),s.promise}const Kl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _v(t,e,n,s){if(e===!0&&s===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gl(t){if(!O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ur(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":x()}function tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ur(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_v("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ql({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ql(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kg;switch(n.type){case"gapi":const s=n.client;return new Yg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kl.get(e);n&&(N("ComponentProvider","Removing Datastore"),Kl.delete(e),n.terminate())}(this),Promise.resolve()}}function Tv(t,e,n,s={}){var i;const r=(t=tt(t,hr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&uo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Pe.MOCK_USER;else{o=$c(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Pe(l)}t._authCredentials=new Gg(new nh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class Wt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Wt(this.firestore,e,this._query)}}class Ft extends Wt{constructor(e,n,s){super(e,n,ca(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new O(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function Je(t,e,...n){if(t=ot(t),od("collection","path",e),t instanceof hr){const s=oe.fromString(e,...n);return Wl(s),new Ft(t,null,s)}{if(!(t instanceof Ue||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Wl(s),new Ft(t.firestore,null,s)}}function _t(t,e,...n){if(t=ot(t),arguments.length===1&&(e=sh.R()),od("doc","path",e),t instanceof hr){const s=oe.fromString(e,...n);return Gl(s),new Ue(t,null,new O(s))}{if(!(t instanceof Ue||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Gl(s),new Ue(t.firestore,t instanceof Ft?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Uh(this,"async_queue_retry"),this.Hc=()=>{const n=Br();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Br();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!js(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw At("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=ba.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&x()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Yl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $t extends hr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Cv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ad(this),this._firestoreClient.terminate()}}function Sv(t,e){const n=typeof t=="object"?t:Xc(),s=typeof t=="string"?t:e||"(default)",i=Wc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=qc("firestore");r&&Tv(i,...r)}return i}function Ca(t){return t._firestoreClient||ad(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ad(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new om(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new mv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=/^__.*__$/;class Av{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Gt(e,this.data,this.fieldMask,n,this.fieldTransforms):new qs(e,this.data,n,this.fieldTransforms)}}class ld{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Gt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Aa{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Aa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Oi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(cd(this.ra)&&Iv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class kv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ar(e)}wa(e,n,s,i=!1){return new Aa({ra:e,methodName:n,_a:s,path:Oe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function fr(t){const e=t._freezeSettings(),n=ar(t._databaseId);return new kv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ud(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);ka("Data must be an object, but it was:",o,s);const a=hd(s,o);let l,c;if(r.merge)l=new Ge(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=So(e,h,n);if(!o.contains(d))throw new A(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);fd(u,d)||u.push(d)}l=new Ge(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Av(new He(a),l,c)}class pr extends Sa{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pr}}function Dv(t,e,n,s){const i=t.wa(1,e,n);ka("Data must be an object, but it was:",i,s);const r=[],o=He.empty();gn(s,(l,c)=>{const u=Da(e,l,n);c=ot(c);const h=i.ha(u);if(c instanceof pr)r.push(u);else{const d=Ks(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ge(r);return new ld(o,a,i.fieldTransforms)}function Pv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[So(e,s,n)],l=[i];if(r.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(So(e,r[d])),l.push(r[d+1]);const c=[],u=He.empty();for(let d=a.length-1;d>=0;--d)if(!fd(c,a[d])){const f=a[d];let g=l[d];g=ot(g);const y=o.ha(f);if(g instanceof pr)c.push(f);else{const v=Ks(g,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new Ge(c);return new ld(u,h,o.fieldTransforms)}function Nv(t,e,n,s=!1){return Ks(n,t.wa(s?4:3,e))}function Ks(t,e){if(dd(t=ot(t)))return ka("Unsupported field value:",e,t),hd(t,e);if(t instanceof Sa)return function(n,s){if(!cd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ks(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Pi(s.Tt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pi(s.Tt,i)}}if(n instanceof Ia)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qn)return{bytesValue:Oh(s.Tt,n._byteString)};if(n instanceof Ue){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:da(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ur(n)}`)}(t,e)}function hd(t,e){const n={};return ih(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gn(t,(s,i)=>{const r=Ks(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function dd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Ia||t instanceof qn||t instanceof Ue||t instanceof Sa)}function ka(t,e,n){if(!dd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ur(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function So(t,e,n){if((e=ot(e))instanceof dr)return e._internalPath;if(typeof e=="string")return Da(t,e);throw Oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ov=new RegExp("[~\\*/\\[\\]]");function Da(t,e,n){if(e.search(Ov)>=0)throw Oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dr(...e.split("."))._internalPath}catch{throw Oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new A(b.INVALID_ARGUMENT,a+t+l)}function fd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rv extends pd{data(){return super.data()}}function gr(t,e){return typeof e=="string"?Da(t,e):e instanceof dr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pa{}class md extends Pa{}function us(t,e,...n){let s=[];e instanceof Pa&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Na).length,o=i.filter(a=>a instanceof mr).length;if(r>1||r>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class mr extends md{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new mr(e,n,s)}_apply(e){const n=this._parse(e);return yd(e._query,n),new Wt(e.firestore,e.converter,mo(e._query,n))}_parse(e){const n=fr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Jl(u,c);const d=[];for(const f of u)d.push(Xl(a,i,f));h={arrayValue:{values:d}}}else h=Xl(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Jl(u,c),h=Nv(o,r,u,c==="in"||c==="not-in");return de.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Io(t,e,n){const s=e,i=gr("where",t);return mr._create(i,s,n)}class Na extends Pa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Na(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)yd(r,a),r=mo(r,a)}(e._query,n),new Wt(e.firestore,e.converter,mo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oa extends md{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Oa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kn(i,r);return function(a,l){if(ua(a)===null){const c=tr(a);c!==null&&vd(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Wt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Gn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Vr(t,e="asc"){const n=e,s=gr("orderBy",t);return Oa._create(s,n)}function Xl(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ph(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!O.isDocumentKey(s))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Tl(t,new O(s))}if(n instanceof Ue)return Tl(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ur(n)}.`)}function Jl(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yd(t,e){if(e.isInequality()){const s=tr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ua(t);r!==null&&vd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vd(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Lv{convertValue(e,n="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw x()}}convertObject(e,n){const s={};return gn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ia(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=oh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=jt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);re(Fh(s));const i=new _s(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(n)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class is{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bd extends pd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fi extends bd{data(e={}){return super.data(e)}}class Ed{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new is(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fi(this._firestore,this._userDataWriter,s.key,s,new is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Mv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class Ra extends Lv{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function _d(t){t=tt(t,Wt);const e=tt(t.firestore,$t),n=Ca(e),s=new Ra(e);return gd(t._query),Ev(n,t._query).then(i=>new Ed(e,s,t,i))}function Ur(t,e,n){t=tt(t,Ue);const s=tt(t.firestore,$t),i=wd(t.converter,e,n);return yr(s,[ud(fr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,et.none())])}function La(t,e,n,...s){t=tt(t,Ue);const i=tt(t.firestore,$t),r=fr(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof dr?Pv(r,"updateDoc",t._key,e,n,s):Dv(r,"updateDoc",t._key,e),yr(i,[o.toMutation(t._key,et.exists(!0))])}function Ao(t){return yr(tt(t.firestore,$t),[new ha(t._key,et.none())])}function Td(t,e){const n=tt(t.firestore,$t),s=_t(t),i=wd(t.converter,e);return yr(n,[ud(fr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,et.exists(!1))]).then(()=>s)}function jr(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Yl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Yl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ue)c=tt(t.firestore,$t),u=ca(t._key.path),l={next:h=>{e[o]&&e[o](xv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=tt(t,Wt);c=tt(h.firestore,$t),u=h._query;const d=new Ra(c);l={next:f=>{e[o]&&e[o](new Ed(c,d,h,f))},error:e[o+1],complete:e[o+2]},gd(t._query)}return function(h,d,f,g){const y=new id(g),v=new Xh(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Qh(await Co(h),v)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>Yh(await Co(h),v))}}(Ca(c),u,a,l)}function yr(t,e){return function(n,s){const i=new xt;return n.asyncQueue.enqueueAndForget(async()=>rv(await bv(n),s,i)),i.promise}(Ca(t),e)}function xv(t,e,n){const s=n.docs.get(e._key),i=new Ra(t);return new bd(t,i,e._key,s,new is(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Kn=n})(Qc),ps(new Ln("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new $t(new Wg(n.getProvider("auth-internal")),new Jg(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(wl,"3.8.4",t),Mt(wl,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebasestorage.googleapis.com",Fv="storageBucket",Bv=2*60*1e3,Vv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends fn{constructor(e,n,s=0){super(qr(e),`Firebase Storage: ${n} (${qr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gt||(gt={}));function qr(t){return"storage/"+t}function Uv(){const t="An unknown error occurred, please check the error payload for server response.";return new vt(gt.UNKNOWN,t)}function jv(){return new vt(gt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qv(){return new vt(gt.CANCELED,"User canceled the upload/download.")}function $v(t){return new vt(gt.INVALID_URL,"Invalid URL '"+t+"'.")}function Hv(t){return new vt(gt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zl(t){return new vt(gt.INVALID_ARGUMENT,t)}function Sd(){return new vt(gt.APP_DELETED,"The Firebase app was deleted.")}function zv(t){return new vt(gt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(s.path==="")return s;throw Hv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(L){L.path_=decodeURIComponent(L.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=n===Cd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${y}/${i}/${v}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let L=0;L<I.length;L++){const V=I[L],ne=V.regex.exec(e);if(ne){const F=ne[V.indices.bucket];let P=ne[V.indices.path];P||(P=""),s=new rt(F,P),V.postModify(s);break}}if(s==null)throw $v(e);return s}}class Kv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...v){c||(c=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){r&&clearTimeout(r)}function f(v,...S){if(c){d();return}if(v){d(),u.call(null,v,...S);return}if(l()||o){d(),u.call(null,v,...S);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function y(v){g||(g=!0,d(),!c&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Wv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){return t!==void 0}function ec(t,e,n,s){if(s<e)throw Zl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Zl(`Invalid value for '${t}'. Expected ${n} or less.`)}function Yv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Xv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ri.NO_ERROR,l=r.getStatus();if(!a||Xv(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ri.ABORT;s(!1,new oi(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new oi(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Qv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Uv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Sd():qv();o(l)}else{const l=jv();o(l)}};this.canceled_?n(!1,new oi(!1,null,!0)):this.backoffId_=Gv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Wv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Zv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ew(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sw(t,e,n,s,i,r,o=!0){const a=Yv(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return tw(c,e),Zv(c,n),ew(c,r),nw(c,s),new Jv(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function rw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rw(this._location.path)}get storage(){return this._service}get parent(){const e=iw(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zv(e)}}function tc(t,e){const n=e==null?void 0:e[Fv];return n==null?null:rt.makeFromBucketSpec(n,t)}function ow(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:$c(i,t.app.options.projectId))}class aw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Cd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bv,this._maxUploadRetryTime=Vv,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=tc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=tc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ec("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ec("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Kv(Sd());{const o=sw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const nc="@firebase/storage",sc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="storage";function lw(t=Xc(),e){t=ot(t);const s=Wc(t,Id).getImmediate({identifier:e}),i=qc("storage");return i&&cw(s,...i),s}function cw(t,e,n,s={}){ow(t,e,n,s)}function uw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new aw(n,s,i,e,Qc)}function hw(){ps(new Ln(Id,uw,"PUBLIC").setMultipleInstances(!0)),Mt(nc,sc,""),Mt(nc,sc,"esm2017")}hw();const dw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Ad=Yc(dw);lw(Ad);const Ie=Sv(Ad);var fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kd={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(fw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(v){v.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(v){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(v){v.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),f=i("y",this.options),g=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+g+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,g=window.innerWidth>0?window.innerWidth:screen.width;g<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(kd);var gw=kd.exports;const Nn=pw(gw),Dd="SweetAlert2:",mw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ma=t=>t.charAt(0).toUpperCase()+t.slice(1),Ye=t=>Array.prototype.slice.call(t),Ke=t=>{console.warn(`${Dd} ${typeof t=="object"?t.join(" "):t}`)},yn=t=>{console.error(`${Dd} ${t}`)},ic=[],yw=t=>{ic.includes(t)||(ic.push(t),Ke(t))},vw=(t,e)=>{yw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},vr=t=>typeof t=="function"?t():t,xa=t=>t&&typeof t.toPromise=="function",Gs=t=>xa(t)?t.toPromise():Promise.resolve(t),Fa=t=>t&&Promise.resolve(t)===t,On={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ww=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],bw={},Ew=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Pd=t=>Object.prototype.hasOwnProperty.call(On,t),Nd=t=>ww.indexOf(t)!==-1,ko=t=>bw[t],_w=t=>{Pd(t)||Ke(`Unknown parameter "${t}"`)},Tw=t=>{Ew.includes(t)&&Ke(`The parameter "${t}" is incompatible with toasts`)},Cw=t=>{ko(t)&&vw(t,ko(t))},Sw=t=>{!t.backdrop&&t.allowOutsideClick&&Ke('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)_w(e),t.toast&&Tw(e),Cw(e)},Iw="swal2-",Od=t=>{const e={};for(const n in t)e[t[n]]=Iw+t[n];return e},m=Od(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),hs=Od(["success","warning","info","question","error"]),Fe=()=>document.body.querySelector(`.${m.container}`),Ws=t=>{const e=Fe();return e?e.querySelector(t):null},st=t=>Ws(`.${t}`),te=()=>st(m.popup),Qs=()=>st(m.icon),Rd=()=>st(m.title),Mi=()=>st(m["html-container"]),Ld=()=>st(m.image),Md=()=>st(m["progress-steps"]),wr=()=>st(m["validation-message"]),lt=()=>Ws(`.${m.actions} .${m.confirm}`),Ht=()=>Ws(`.${m.actions} .${m.deny}`),Aw=()=>st(m["input-label"]),Yn=()=>Ws(`.${m.loader}`),hn=()=>Ws(`.${m.actions} .${m.cancel}`),Ys=()=>st(m.actions),xd=()=>st(m.footer),br=()=>st(m["timer-progress-bar"]),Ba=()=>st(m.close),kw=`
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
`,Va=()=>{const t=Ye(te().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Ye(te().querySelectorAll(kw)).filter(n=>n.getAttribute("tabindex")!=="-1");return mw(t.concat(e)).filter(n=>We(n))},Ua=()=>Tt(document.body,m.shown)&&!Tt(document.body,m["toast-shown"])&&!Tt(document.body,m["no-backdrop"]),Er=()=>te()&&Tt(te(),m.toast),Dw=()=>te().hasAttribute("data-loading"),Rn={previousBodyPadding:null},Re=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Ye(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Ye(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},Tt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Pw=(t,e)=>{Ye(t.classList).forEach(n=>{!Object.values(m).includes(n)&&!Object.values(hs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},nt=(t,e,n)=>{if(Pw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ke(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);X(t,e.customClass[n])}},ja=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${m.popup} > .${m[e]}`);case"checkbox":return t.querySelector(`.${m.popup} > .${m.checkbox} input`);case"radio":return t.querySelector(`.${m.popup} > .${m.radio} input:checked`)||t.querySelector(`.${m.popup} > .${m.radio} input:first-child`);case"range":return t.querySelector(`.${m.popup} > .${m.range} input`);default:return t.querySelector(`.${m.popup} > .${m.input}`)}},Fd=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Bd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},X=(t,e)=>{Bd(t,e,!0)},mt=(t,e)=>{Bd(t,e,!1)},Ot=(t,e)=>{const n=Ye(t.childNodes);for(let s=0;s<n.length;s++)if(Tt(n[s],e))return n[s]},ds=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},ke=(t,e="flex")=>{t.style.display=e},Be=t=>{t.style.display="none"},rc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},_r=(t,e,n)=>{e?ke(t,n):Be(t)},We=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Nw=()=>!We(lt())&&!We(Ht())&&!We(hn()),oc=t=>t.scrollHeight>t.clientHeight,Vd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},qa=(t,e=!1)=>{const n=br();We(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Ow=()=>{const t=br(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Ud=()=>typeof window>"u"||typeof document>"u",Rw=100,$={},Lw=()=>{$.previousActiveElement&&$.previousActiveElement.focus?($.previousActiveElement.focus(),$.previousActiveElement=null):document.body&&document.body.focus()},Mw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;$.restoreFocusTimeout=setTimeout(()=>{Lw(),e()},Rw),window.scrollTo(n,s)}),xw=`
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
`.replace(/(^|\n)\s*/g,""),Fw=()=>{const t=Fe();return t?(t.remove(),mt([document.documentElement,document.body],[m["no-backdrop"],m["toast-shown"],m["has-column"]]),!0):!1},Xt=()=>{$.currentInstance.resetValidationMessage()},Bw=()=>{const t=te(),e=Ot(t,m.input),n=Ot(t,m.file),s=t.querySelector(`.${m.range} input`),i=t.querySelector(`.${m.range} output`),r=Ot(t,m.select),o=t.querySelector(`.${m.checkbox} input`),a=Ot(t,m.textarea);e.oninput=Xt,n.onchange=Xt,r.onchange=Xt,o.onchange=Xt,a.oninput=Xt,s.oninput=()=>{Xt(),i.value=s.value},s.onchange=()=>{Xt(),s.nextSibling.value=s.value}},Vw=t=>typeof t=="string"?document.querySelector(t):t,Uw=t=>{const e=te();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},jw=t=>{window.getComputedStyle(t).direction==="rtl"&&X(Fe(),m.rtl)},qw=t=>{const e=Fw();if(Ud()){yn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=m.container,e&&X(n,m["no-transition"]),Re(n,xw);const s=Vw(t.target);s.appendChild(n),Uw(t),jw(s),Bw()},$a=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?$w(t,e):t&&Re(e,t)},$w=(t,e)=>{t.jquery?Hw(e,t):Re(e,t.toString())},Hw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},As=(()=>{if(Ud())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),zw=()=>{const t=document.createElement("div");t.className=m["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Kw=(t,e)=>{const n=Ys(),s=Yn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Be(n):ke(n),nt(n,e,"actions"),Gw(n,s,e),Re(s,e.loaderHtml),nt(s,e,"loader")};function Gw(t,e,n){const s=lt(),i=Ht(),r=hn();$r(s,"confirm",n),$r(i,"deny",n),$r(r,"cancel",n),Ww(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Ww(t,e,n,s){if(!s.buttonsStyling)return mt([t,e,n],m.styled);X([t,e,n],m.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,X(t,m["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,X(e,m["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,X(n,m["default-outline"]))}function $r(t,e,n){_r(t,n[`show${Ma(e)}Button`],"inline-block"),Re(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=m[e],nt(t,n,`${e}Button`),X(t,n[`${e}ButtonClass`])}function Qw(t,e){typeof e=="string"?t.style.background=e:e||X([document.documentElement,document.body],m["no-backdrop"])}function Yw(t,e){e in m?X(t,m[e]):(Ke('The "position" parameter is not valid, defaulting to "center"'),X(t,m.center))}function Xw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in m&&X(t,m[n])}}const Jw=(t,e)=>{const n=Fe();n&&(Qw(n,e.backdrop),Yw(n,e.position),Xw(n,e.grow),nt(n,e,"container"))},H={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Zw=["input","file","range","select","radio","checkbox","textarea"],eb=(t,e)=>{const n=te(),s=H.innerParams.get(t),i=!s||e.input!==s.input;Zw.forEach(r=>{const o=m[r],a=Ot(n,o);sb(r,e.inputAttributes),a.className=o,i&&Be(a)}),e.input&&(i&&tb(e),ib(e))},tb=t=>{if(!$e[t.input])return yn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=jd(t.input),n=$e[t.input](e,t);ke(n),setTimeout(()=>{Fd(n)})},nb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},sb=(t,e)=>{const n=ja(te(),t);if(n){nb(n);for(const s in e)n.setAttribute(s,e[s])}},ib=t=>{const e=jd(t.input);t.customClass&&X(e,t.customClass.input)},Ha=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Xs=(t,e,n)=>{if(n.inputLabel){t.id=m.input;const s=document.createElement("label"),i=m["input-label"];s.setAttribute("for",t.id),s.className=i,X(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},jd=t=>{const e=m[t]?m[t]:m.input;return Ot(te(),e)},$e={};$e.text=$e.email=$e.password=$e.number=$e.tel=$e.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Fa(e.inputValue)||Ke(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Xs(t,t,e),Ha(t,e),t.type=e.input,t);$e.file=(t,e)=>(Xs(t,t,e),Ha(t,e),t);$e.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Xs(n,t,e),t};$e.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Re(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Xs(t,t,e),t};$e.radio=t=>(t.textContent="",t);$e.checkbox=(t,e)=>{const n=ja(te(),"checkbox");n.value="1",n.id=m.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return Re(s,e.inputPlaceholder),t};$e.textarea=(t,e)=>{t.value=e.inputValue,Ha(t,e),Xs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(te()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?te().style.width=`${r}px`:te().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const rb=(t,e)=>{const n=Mi();nt(n,e,"htmlContainer"),e.html?($a(e.html,n),ke(n,"block")):e.text?(n.textContent=e.text,ke(n,"block")):Be(n),eb(t,e)},ob=(t,e)=>{const n=xd();_r(n,e.footer),e.footer&&$a(e.footer,n),nt(n,e,"footer")},ab=(t,e)=>{const n=Ba();Re(n,e.closeButtonHtml),nt(n,e,"closeButton"),_r(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},lb=(t,e)=>{const n=H.innerParams.get(t),s=Qs();if(n&&e.icon===n.icon){lc(s,e),ac(s,e);return}if(!e.icon&&!e.iconHtml)return Be(s);if(e.icon&&Object.keys(hs).indexOf(e.icon)===-1)return yn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Be(s);ke(s),lc(s,e),ac(s,e),X(s,e.showClass.icon)},ac=(t,e)=>{for(const n in hs)e.icon!==n&&mt(t,hs[n]);X(t,hs[e.icon]),db(t,e),cb(),nt(t,e,"icon")},cb=()=>{const t=te(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},ub=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,hb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,lc=(t,e)=>{t.textContent="",e.iconHtml?Re(t,cc(e.iconHtml)):e.icon==="success"?Re(t,ub):e.icon==="error"?Re(t,hb):Re(t,cc({question:"?",warning:"!",info:"i"}[e.icon]))},db=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])rc(t,n,"backgroundColor",e.iconColor);rc(t,".swal2-success-ring","borderColor",e.iconColor)}},cc=t=>`<div class="${m["icon-content"]}">${t}</div>`,fb=(t,e)=>{const n=Ld();if(!e.imageUrl)return Be(n);ke(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),ds(n,"width",e.imageWidth),ds(n,"height",e.imageHeight),n.className=m.image,nt(n,e,"image")},pb=t=>{const e=document.createElement("li");return X(e,m["progress-step"]),Re(e,t),e},gb=t=>{const e=document.createElement("li");return X(e,m["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},mb=(t,e)=>{const n=Md();if(!e.progressSteps||e.progressSteps.length===0)return Be(n);ke(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ke("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=pb(s);if(n.appendChild(r),i===e.currentProgressStep&&X(r,m["active-progress-step"]),i!==e.progressSteps.length-1){const o=gb(e);n.appendChild(o)}})},yb=(t,e)=>{const n=Rd();_r(n,e.title||e.titleText,"block"),e.title&&$a(e.title,n),e.titleText&&(n.innerText=e.titleText),nt(n,e,"title")},vb=(t,e)=>{const n=Fe(),s=te();e.toast?(ds(n,"width",e.width),s.style.width="100%",s.insertBefore(Yn(),Qs())):ds(s,"width",e.width),ds(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Be(wr()),wb(s,e)},wb=(t,e)=>{t.className=`${m.popup} ${We(t)?e.showClass.popup:""}`,e.toast?(X([document.documentElement,document.body],m["toast-shown"]),X(t,m.toast)):X(t,m.modal),nt(t,e,"popup"),typeof e.customClass=="string"&&X(t,e.customClass),e.icon&&X(t,m[`icon-${e.icon}`])},qd=(t,e)=>{vb(t,e),Jw(t,e),mb(t,e),lb(t,e),fb(t,e),yb(t,e),ab(t,e),rb(t,e),Kw(t,e),ob(t,e),typeof e.didRender=="function"&&e.didRender(te())},Xn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),bb=()=>{Ye(document.body.children).forEach(e=>{e===Fe()||e.contains(Fe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},$d=()=>{Ye(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Hd=["swal-title","swal-html","swal-footer"],Eb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return kb(n),Object.assign(_b(n),Tb(n),Cb(n),Sb(n),Ib(n),Ab(n,Hd))},_b=t=>{const e={};return Ye(t.querySelectorAll("swal-param")).forEach(n=>{dn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof On[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof On[s]=="object"&&(e[s]=JSON.parse(i))}),e},Tb=t=>{const e={};return Ye(t.querySelectorAll("swal-button")).forEach(n=>{dn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ma(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Cb=t=>{const e={},n=t.querySelector("swal-image");return n&&(dn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Sb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(dn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Ib=t=>{const e={},n=t.querySelector("swal-input");n&&(dn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Ye(s).forEach(i=>{dn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Ab=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(dn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},kb=t=>{const e=Hd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Ye(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ke(`Unrecognized element <${s}>`)})},dn=(t,e)=>{Ye(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ke([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},uc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Db(t){t.inputValidator||Object.keys(uc).forEach(e=>{t.input===e&&(t.inputValidator=uc[e])})}function Pb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ke('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Nb(t){Db(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Pb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),qw(t)}class Ob{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Rb=()=>{Rn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Rn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Rn.previousBodyPadding+zw()}px`)},Lb=()=>{Rn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Rn.previousBodyPadding}px`,Rn.previousBodyPadding=null)},Mb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Tt(document.body,m.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,X(document.body,m.iosfix),Fb(),xb()}},xb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&te().scrollHeight>window.innerHeight-44&&(Fe().style.paddingBottom="44px")},Fb=()=>{const t=Fe();let e;t.ontouchstart=n=>{e=Bb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Bb=t=>{const e=t.target,n=Fe();return Vb(t)||Ub(t)?!1:e===n||!oc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(oc(Mi())&&Mi().contains(e))},Vb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Ub=t=>t.touches&&t.touches.length>1,jb=()=>{if(Tt(document.body,m.iosfix)){const t=parseInt(document.body.style.top,10);mt(document.body,m.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},zd=10,qb=t=>{const e=Fe(),n=te();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;zb(e,n,t),setTimeout(()=>{$b(e,n)},zd),Ua()&&(Hb(e,t.scrollbarPadding,i),bb()),!Er()&&!$.previousActiveElement&&($.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),mt(e,m["no-transition"])},Kd=t=>{const e=te();if(t.target!==e)return;const n=Fe();e.removeEventListener(As,Kd),n.style.overflowY="auto"},$b=(t,e)=>{As&&Vd(e)?(t.style.overflowY="hidden",e.addEventListener(As,Kd)):t.style.overflowY="auto"},Hb=(t,e,n)=>{Mb(),e&&n!=="hidden"&&Rb(),setTimeout(()=>{t.scrollTop=0})},zb=(t,e,n)=>{X(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),ke(e,"grid"),setTimeout(()=>{X(e,n.showClass.popup),e.style.removeProperty("opacity")},zd),X([document.documentElement,document.body],m.shown),n.heightAuto&&n.backdrop&&!n.toast&&X([document.documentElement,document.body],m["height-auto"])},$n=t=>{let e=te();e||new Ds,e=te();const n=Yn();Er()?Be(Qs()):Kb(e,t),ke(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Kb=(t,e)=>{const n=Ys(),s=Yn();!e&&We(lt())&&(e=lt()),ke(n),e&&(Be(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),X([t,n],m.loading)},Gb=(t,e)=>{e.input==="select"||e.input==="radio"?Jb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(xa(e.inputValue)||Fa(e.inputValue))&&($n(lt()),Zb(t,e))},Wb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Qb(n);case"radio":return Yb(n);case"file":return Xb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Qb=t=>t.checked?1:0,Yb=t=>t.checked?t.value:null,Xb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Jb=(t,e)=>{const n=te(),s=i=>e0[e.input](n,Do(i),e);xa(e.inputOptions)||Fa(e.inputOptions)?($n(lt()),Gs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):yn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Zb=(t,e)=>{const n=t.getInput();Be(n),Gs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,ke(n),n.focus(),t.hideLoading()}).catch(s=>{yn(`Error in inputValue promise: ${s}`),n.value="",ke(n),n.focus(),t.hideLoading()})},e0={select:(t,e,n)=>{const s=Ot(t,m.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,Re(l,o),l.selected=hc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Ot(t,m.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=m.radio,l.value=o,hc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Re(u,a),u.className=m.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Do=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Do(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Do(s)),e.push([n,s])}),e},hc=(t,e)=>e&&e.toString()===t.toString();function dc(){const t=H.innerParams.get(this);if(!t)return;const e=H.domCache.get(this);Be(e.loader),Er()?t.icon&&ke(Qs()):t0(e),mt([e.popup,e.actions],m.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const t0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ke(e[0],"inline-block"):Nw()&&Be(t.actions)};function n0(t){const e=H.innerParams.get(t||this),n=H.domCache.get(t||this);return n?ja(n.popup,e.input):null}const ks={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},s0=()=>We(te()),Gd=()=>lt()&&lt().click(),i0=()=>Ht()&&Ht().click(),r0=()=>hn()&&hn().click(),Wd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},o0=(t,e,n,s)=>{Wd(e),n.toast||(e.keydownHandler=i=>l0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:te(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Po=(t,e,n)=>{const s=Va();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();te().focus()},Qd=["ArrowRight","ArrowDown"],a0=["ArrowLeft","ArrowUp"],l0=(t,e,n)=>{const s=H.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?c0(t,e,s):e.key==="Tab"?u0(e,s):[...Qd,...a0].includes(e.key)?h0(e.key):e.key==="Escape"&&d0(e,s,n)))},c0=(t,e,n)=>{if(vr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Gd(),e.preventDefault()}},u0=(t,e)=>{const n=t.target,s=Va();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Po(e,i,-1):Po(e,i,1),t.stopPropagation(),t.preventDefault()},h0=t=>{const e=lt(),n=Ht(),s=hn();if(![e,n,s].includes(document.activeElement))return;const i=Qd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ys().children.length;o++){if(r=r[i],!r)return;if(We(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},d0=(t,e,n)=>{vr(e.allowEscapeKey)&&(t.preventDefault(),n(Xn.esc))};function Yd(t,e,n,s){Er()?fc(t,s):(Mw(n).then(()=>fc(t,s)),Wd($)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ua()&&(Lb(),jb(),$d()),f0()}function f0(){mt([document.documentElement,document.body],[m.shown,m["height-auto"],m["no-backdrop"],m["toast-shown"]])}function ai(t){t=y0(t);const e=ks.swalPromiseResolve.get(this),n=g0(this);this.isAwaitingPromise()?t.isDismissed||(Js(this),e(t)):n&&e(t)}function p0(){return!!H.awaitingPromise.get(this)}const g0=t=>{const e=te();if(!e)return!1;const n=H.innerParams.get(t);if(!n||Tt(e,n.hideClass.popup))return!1;mt(e,n.showClass.popup),X(e,n.hideClass.popup);const s=Fe();return mt(s,n.showClass.backdrop),X(s,n.hideClass.backdrop),v0(t,e,n),!0};function m0(t){const e=ks.swalPromiseReject.get(this);Js(this),e&&e(t)}const Js=t=>{t.isAwaitingPromise()&&(H.awaitingPromise.delete(t),H.innerParams.get(t)||t._destroy())},y0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),v0=(t,e,n)=>{const s=Fe(),i=As&&Vd(e);typeof n.willClose=="function"&&n.willClose(e),i?w0(t,e,s,n.returnFocus,n.didClose):Yd(t,s,n.returnFocus,n.didClose)},w0=(t,e,n,s,i)=>{$.swalCloseEventFinishedCallback=Yd.bind(null,t,n,s,i),e.addEventListener(As,function(r){r.target===e&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback)})},fc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Xd(t,e,n){const s=H.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Jd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function b0(){Xd(this,["confirmButton","denyButton","cancelButton"],!1)}function E0(){Xd(this,["confirmButton","denyButton","cancelButton"],!0)}function _0(){return Jd(this.getInput(),!1)}function T0(){return Jd(this.getInput(),!0)}function C0(t){const e=H.domCache.get(this),n=H.innerParams.get(this);Re(e.validationMessage,t),e.validationMessage.className=m["validation-message"],n.customClass&&n.customClass.validationMessage&&X(e.validationMessage,n.customClass.validationMessage),ke(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",m["validation-message"]),Fd(s),X(s,m.inputerror))}function S0(){const t=H.domCache.get(this);t.validationMessage&&Be(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),mt(e,m.inputerror))}function I0(){return H.domCache.get(this).progressSteps}function A0(t){const e=te(),n=H.innerParams.get(this);if(!e||Tt(e,n.hideClass.popup))return Ke("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=k0(t),i=Object.assign({},n,s);qd(this,i),H.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const k0=t=>{const e={};return Object.keys(t).forEach(n=>{Nd(n)?e[n]=t[n]:Ke(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function D0(){const t=H.domCache.get(this),e=H.innerParams.get(this);if(!e){Zd(this);return}t.popup&&$.swalCloseEventFinishedCallback&&($.swalCloseEventFinishedCallback(),delete $.swalCloseEventFinishedCallback),$.deferDisposalTimer&&(clearTimeout($.deferDisposalTimer),delete $.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),P0(this)}const P0=t=>{Zd(t),delete t.params,delete $.keydownHandler,delete $.keydownTarget,delete $.currentInstance},Zd=t=>{t.isAwaitingPromise()?(Hr(H,t),H.awaitingPromise.set(t,!0)):(Hr(ks,t),Hr(H,t))},Hr=(t,e)=>{for(const n in t)t[n].delete(e)},ef=Object.freeze(Object.defineProperty({__proto__:null,_destroy:D0,close:ai,closeModal:ai,closePopup:ai,closeToast:ai,disableButtons:E0,disableInput:T0,disableLoading:dc,enableButtons:b0,enableInput:_0,getInput:n0,getProgressSteps:I0,handleAwaitingPromise:Js,hideLoading:dc,isAwaitingPromise:p0,rejectPromise:m0,resetValidationMessage:S0,showValidationMessage:C0,update:A0},Symbol.toStringTag,{value:"Module"})),N0=t=>{const e=H.innerParams.get(t);t.disableButtons(),e.input?tf(t,"confirm"):Ka(t,!0)},O0=t=>{const e=H.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?tf(t,"deny"):za(t,!1)},R0=(t,e)=>{t.disableButtons(),e(Xn.cancel)},tf=(t,e)=>{const n=H.innerParams.get(t);if(!n.input)return yn(`The "input" parameter is needed to be set when using returnInputValueOn${Ma(e)}`);const s=Wb(t,n);n.inputValidator?L0(t,s,e):t.getInput().checkValidity()?e==="deny"?za(t,s):Ka(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},L0=(t,e,n)=>{const s=H.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Gs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?za(t,e):Ka(t,e)})},za=(t,e)=>{const n=H.innerParams.get(t||globalThis);n.showLoaderOnDeny&&$n(Ht()),n.preDeny?(H.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Js(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>nf(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},pc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},nf=(t,e)=>{t.rejectPromise(e)},Ka=(t,e)=>{const n=H.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&$n(),n.preConfirm?(t.resetValidationMessage(),H.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Gs(n.preConfirm(e,n.validationMessage))).then(i=>{We(wr())||i===!1?(t.hideLoading(),Js(t)):pc(t,typeof i>"u"?e:i)}).catch(i=>nf(t||globalThis,i))):pc(t,e)},M0=(t,e,n)=>{H.innerParams.get(t).toast?x0(t,e,n):(B0(e),V0(e),U0(t,e,n))},x0=(t,e,n)=>{e.popup.onclick=()=>{const s=H.innerParams.get(t);s&&(F0(s)||s.timer||s.input)||n(Xn.close)}},F0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let xi=!1;const B0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(xi=!0)}}},V0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(xi=!0)}}},U0=(t,e,n)=>{e.container.onclick=s=>{const i=H.innerParams.get(t);if(xi){xi=!1;return}s.target===e.container&&vr(i.allowOutsideClick)&&n(Xn.backdrop)}},j0=t=>typeof t=="object"&&t.jquery,gc=t=>t instanceof Element||j0(t),q0=t=>{const e={};return typeof t[0]=="object"&&!gc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||gc(i)?e[n]=i:i!==void 0&&yn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function $0(...t){const e=this;return new e(...t)}function H0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const z0=()=>$.timeout&&$.timeout.getTimerLeft(),sf=()=>{if($.timeout)return Ow(),$.timeout.stop()},rf=()=>{if($.timeout){const t=$.timeout.start();return qa(t),t}},K0=()=>{const t=$.timeout;return t&&(t.running?sf():rf())},G0=t=>{if($.timeout){const e=$.timeout.increase(t);return qa(e,!0),e}},W0=()=>$.timeout&&$.timeout.isRunning();let mc=!1;const No={};function Q0(t="data-swal-template"){No[t]=this,mc||(document.body.addEventListener("click",Y0),mc=!0)}const Y0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in No){const s=e.getAttribute(n);if(s){No[n].fire({template:s});return}}},X0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:q0,bindClickHandler:Q0,clickCancel:r0,clickConfirm:Gd,clickDeny:i0,enableLoading:$n,fire:$0,getActions:Ys,getCancelButton:hn,getCloseButton:Ba,getConfirmButton:lt,getContainer:Fe,getDenyButton:Ht,getFocusableElements:Va,getFooter:xd,getHtmlContainer:Mi,getIcon:Qs,getImage:Ld,getInputLabel:Aw,getLoader:Yn,getPopup:te,getTimerLeft:z0,getTimerProgressBar:br,getTitle:Rd,getValidationMessage:wr,increaseTimer:G0,isDeprecatedParameter:ko,isLoading:Dw,isTimerRunning:W0,isUpdatableParameter:Nd,isValidParameter:Pd,isVisible:s0,mixin:H0,resumeTimer:rf,showLoading:$n,stopTimer:sf,toggleTimer:K0},Symbol.toStringTag,{value:"Module"}));let Oo;class Jn{constructor(...e){if(typeof window>"u")return;Oo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);H.promise.set(this,s)}_main(e,n={}){Sw(Object.assign({},n,e)),$.currentInstance&&($.currentInstance._destroy(),Ua()&&$d()),$.currentInstance=this;const s=Z0(e,n);Nb(s),Object.freeze(s),$.timeout&&($.timeout.stop(),delete $.timeout),clearTimeout($.restoreFocusTimeout);const i=eE(this);return qd(this,s),H.innerParams.set(this,s),J0(this,i,s)}then(e){return H.promise.get(this).then(e)}finally(e){return H.promise.get(this).finally(e)}}const J0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};ks.swalPromiseResolve.set(t,s),ks.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>N0(t),e.denyButton.onclick=()=>O0(t),e.cancelButton.onclick=()=>R0(t,r),e.closeButton.onclick=()=>r(Xn.close),M0(t,e,r),o0(t,$,n,r),Gb(t,n),qb(n),tE($,n,r),nE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Z0=(t,e)=>{const n=Eb(t),s=Object.assign({},On,e,n,t);return s.showClass=Object.assign({},On.showClass,s.showClass),s.hideClass=Object.assign({},On.hideClass,s.hideClass),s},eE=t=>{const e={popup:te(),container:Fe(),actions:Ys(),confirmButton:lt(),denyButton:Ht(),cancelButton:hn(),loader:Yn(),closeButton:Ba(),validationMessage:wr(),progressSteps:Md()};return H.domCache.set(t,e),e},tE=(t,e,n)=>{const s=br();Be(s),e.timer&&(t.timeout=new Ob(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ke(s),nt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&qa(e.timer)})))},nE=(t,e)=>{if(!e.toast){if(!vr(e.allowEnterKey))return iE();sE(t,e)||Po(e,-1,1)}},sE=(t,e)=>e.focusDeny&&We(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&We(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&We(t.confirmButton)?(t.confirmButton.focus(),!0):!1,iE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Jn.prototype,ef);Object.assign(Jn,X0);Object.keys(ef).forEach(t=>{Jn[t]=function(...e){if(Oo)return Oo[t](...e)}});Jn.DismissReason=Xn;Jn.version="11.4.8";const Ds=Jn;Ds.default=Ds;const _n=[];function Tr(t,e=fe){let n;const s=new Set;function i(a){if(yt(t,a)&&(t=a,n)){const l=!_n.length;for(const c of s)c[1](),_n.push(c,t);if(l){for(let c=0;c<_n.length;c+=2)_n[c][0](_n[c+1]);_n.length=0}}}function r(a){i(a(t))}function o(a,l=fe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||fe),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const zr=Tr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Ro=Tr(""),Lo=Tr(""),pi=Tr(""),rE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},oE=async t=>{try{await La(_t(Ie,"Pacientes",t.id),t)}catch(e){console.log(e)}};function yc(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function vc(t){let e,n,s;function i(a,l){return a[0].length==0?lE:aE}let r=i(t),o=r(t);return{c(){e=_("select"),o.c(),p(e,"name","select-pacientes"),p(e,"class","select-Pacientes svelte-2shrp8"),p(e,"id","elementoSelectPacientes"),p(e,"size",5),t[1]===void 0&&an(()=>t[4].call(e))},m(a,l){Q(a,e,l),o.m(e,null),Bt(e,t[1]),n||(s=[J(e,"change",t[2]),J(e,"change",t[4])],n=!0)},p(a,l){r===(r=i(a))&&o?o.p(a,l):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),l&2&&Bt(e,a[1])},d(a){a&&K(e),o.d(),n=!1,Xe(s)}}}function aE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=wc(yc(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Mo()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);Q(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=yc(i,n,o);s[o]?s[o].p(a,r):(s[o]=wc(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Ps(s,i),i&&K(e)}}}function lE(t){let e;return{c(){e=_("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){Q(n,e,s)},p:fe,d(n){n&&K(e)}}}function wc(t){let e,n=`${t[7].apellido}, ${t[7].nombre}${t[7].plan=="particular"?"":" -"+t[7].nroSocio+" - plan "+t[7].plan.plan} `,s;return{c(){e=_("option"),s=G(n),e.__value=t[9],e.value=e.__value},m(i,r){Q(i,e,r),w(e,s)},p(i,r){r&1&&n!==(n=`${i[7].apellido}, ${i[7].nombre}${i[7].plan=="particular"?"":" -"+i[7].nroSocio+" - plan "+i[7].plan.plan} `)&&me(s,n)},d(i){i&&K(e)}}}function cE(t){let e,n=t[0].length>0&&vc(t);return{c(){n&&n.c(),e=Mo()},m(s,i){n&&n.m(s,i),Q(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=vc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:fe,o:fe,d(s){n&&n.d(s),s&&K(e)}}}function uE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Bi(),l=u=>{const h=u.target.value;n(3,i=s[h].plan),o=s[h].id,a("cambioSelectPaciente",[h,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${h}, planSelect ${i.plan?i.plan:"particular"}`)};function c(){r=Fi(this),n(1,r)}return t.$$set=u=>{"pacientesFiltrada"in u&&n(0,s=u.pacientesFiltrada),"planSelect"in u&&n(3,i=u.planSelect)},[s,r,l,i,c]}class hE extends Nt{constructor(e){super(),Pt(this,e,uE,cE,yt,{pacientesFiltrada:0,planSelect:3})}}function dE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,g,y,v,S,T,I,L,V,ne,F,P,M,R,ae,pe,Qt,Ce,ct,Yt,ut,je,vn,wt,wn,ht,C,ge,k,se,be,it;return V=new hE({props:{pacientesFiltrada:t[3],planSelect:fE}}),V.$on("cambioSelectPaciente",t[15]),k=new bf({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),k.$on("cambioPlan",t[14]),k.$on("clickCheckPlan",t[16]),{c(){e=_("body"),n=_("div"),s=_("div"),i=_("button"),r=G("create"),a=q(),l=_("button"),c=G("update"),h=q(),d=_("button"),f=G("delete"),y=q(),v=_("div"),S=_("label"),S.textContent="filtrar por apellido",T=_("input"),I=q(),L=_("div"),Vt(V.$$.fragment),ne=q(),F=_("div"),P=_("label"),P.textContent="nombre",M=_("input"),R=q(),ae=_("label"),ae.textContent="apellido",pe=_("input"),Qt=q(),Ce=_("div"),ct=_("label"),ct.textContent="nº socio",Yt=q(),ut=_("div"),je=_("input"),vn=q(),wt=_("button"),wt.textContent="✎",wn=q(),ht=_("label"),C=G(t[10]),ge=q(),Vt(k.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],p(i,"class","svelte-40mbgp"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],p(l,"class","svelte-40mbgp"),d.disabled=g=!t[4],p(d,"class","svelte-40mbgp"),p(s,"class","buttons svelte-40mbgp"),p(n,"id","botones"),p(n,"class","svelte-40mbgp"),p(S,"for","filterPrefix"),p(S,"class","svelte-40mbgp"),p(T,"name","filterPrefix"),p(T,"id","filterPrefix"),p(T,"placeholder","filter prefix"),p(T,"class","svelte-40mbgp"),p(v,"id","filter"),p(v,"class","svelte-40mbgp"),p(L,"id","selectPacientes"),p(L,"class","svelte-40mbgp"),p(P,"for","nombre"),p(P,"class","svelte-40mbgp"),p(M,"name","nombre"),p(M,"id","nombre"),p(M,"placeholder","nombre"),p(M,"class","svelte-40mbgp"),p(ae,"for","apellido"),p(ae,"class","svelte-40mbgp"),p(pe,"name","apellido"),p(pe,"id","apellido"),p(pe,"placeholder","apellido"),p(pe,"class","svelte-40mbgp"),p(F,"id","formInputsI"),p(F,"class","svelte-40mbgp"),p(ct,"for","inputNroSocio"),p(ct,"class","svelte-40mbgp"),p(je,"id","inputNroSocio"),p(je,"name","nroSocio"),p(je,"placeholder","nro de Socio"),p(je,"class","svelte-40mbgp"),p(wt,"class","svelte-40mbgp"),p(ut,"class","formRow svelte-40mbgp"),p(ht,"id","labelPlan"),p(ht,"for","plan"),p(ht,"class","svelte-40mbgp"),p(Ce,"id","formInputsD"),p(Ce,"class","svelte-40mbgp"),p(e,"class","svelte-40mbgp")},m(z,ie){Q(z,e,ie),w(e,n),w(n,s),w(s,i),w(i,r),w(s,a),w(s,l),w(l,c),w(s,h),w(s,d),w(d,f),w(e,y),w(e,v),w(v,S),w(v,T),_e(T,t[2]),w(e,I),w(e,L),Ct(V,L,null),w(e,ne),w(e,F),w(F,P),w(F,M),_e(M,t[7]),w(F,R),w(F,ae),w(F,pe),_e(pe,t[8]),w(e,Qt),w(e,Ce),w(Ce,ct),w(Ce,Yt),w(Ce,ut),w(ut,je),_e(je,t[9]),w(ut,vn),w(ut,wt),w(Ce,wn),w(Ce,ht),w(ht,C),w(Ce,ge),Ct(k,Ce,null),se=!0,be||(it=[J(i,"click",t[11]),J(l,"click",t[12]),J(d,"click",t[13]),J(T,"input",t[21]),J(M,"input",t[22]),J(pe,"input",t[23]),J(je,"input",t[24]),J(wt,"click",pE)],be=!0)},p(z,ie){(!se||ie[0]&897&&o!==(o=!z[7]||!z[8]||!z[0]||!z[9]))&&(i.disabled=o),(!se||ie[0]&913&&u!==(u=!z[7]||!z[8]||!z[0]||!z[9]||!z[4]))&&(l.disabled=u),(!se||ie[0]&16&&g!==(g=!z[4]))&&(d.disabled=g),ie[0]&4&&T.value!==z[2]&&_e(T,z[2]);const qe={};ie[0]&8&&(qe.pacientesFiltrada=z[3]),V.$set(qe),ie[0]&128&&M.value!==z[7]&&_e(M,z[7]),ie[0]&256&&pe.value!==z[8]&&_e(pe,z[8]),ie[0]&512&&je.value!==z[9]&&_e(je,z[9]),(!se||ie[0]&1024)&&me(C,z[10]);const bt={};ie[0]&2&&(bt.planes=z[1]),ie[0]&1&&(bt.planSeleccionado=z[0]),ie[0]&64&&(bt.SelectPlanVisible=z[6]),ie[0]&32&&(bt.indicePlan=z[5]),k.$set(bt)},i(z){se||(ze(V.$$.fragment,z),ze(k.$$.fragment,z),se=!0)},o(z){Ze(V.$$.fragment,z),Ze(k.$$.fragment,z),se=!1},d(z){z&&K(e),St(V),St(k),be=!1,Xe(it)}}}let fE="particular";function pE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function gE(t,e,n){let s,i,r,o,a;Zt(t,pi,C=>n(25,i=C)),Zt(t,zr,C=>n(26,r=C)),Zt(t,Lo,C=>n(27,o=C)),Zt(t,Ro,C=>n(28,a=C));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:f}=e,g,y=0,v;Mc(()=>{rE(l,d),l.forEach(C=>{oE(C)}),console.log(a)});let S="",T="",I="",L="",V=[],ne="plan";bn(zr,r=s,r);const F=C=>{n(7,T=C?C.nombre:""),n(8,I=C?C.apellido:""),n(9,L=C?C.nroSocio:""),n(0,h=C?C.plan:{})},P=async()=>{try{await Td(Je(Ie,"Pacientes"),{nombre:T,apellido:I,nroSocio:L,createdAt:new Date().toLocaleDateString(),plan:h}),Nn({text:"Nuevo paciente agregado"}).showToast()}catch(C){console.error(C)}},M=()=>{n(17,l=l.concat({nombre:T,apellido:I})),n(20,y=l.length-1),P(),n(7,T=n(8,I=n(0,h=n(9,L=""))))},R=async C=>{try{await La(_t(Ie,"Pacientes",C.id),C),Nn({text:`paciente ${C.apellido}, ${C.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ge){console.error(ge)}},ae=()=>{n(4,s.nombre=T,s),n(4,s.apellido=I,s),n(0,h=s.plan),n(4,s.nroSocio=L,s),n(4,s),n(3,V),n(20,y),n(2,S),n(17,l),n(17,l),R(s)},pe=async C=>{try{await Ao(_t(Ie,"Pacientes",C.id)),Nn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(k){console.error(k)}const ge=us(Je(Ie,"sesiones"),Io("pacienteID","==",C.id));console.log(`desde delete q=pacientes a borrar ${ge} - paciente: ${C.nombre} ${C.apellido} ${C.id}`);try{(await _d(ge)).forEach(se=>{Ao(se.ref)})}catch(k){console.log(k)}},Qt=()=>{const C=l.indexOf(s);Ds.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ge=>{ge.isConfirmed&&(Ds.fire("Deleted!","Your file has been deleted.","success"),pe(l[y]),n(17,l=[...l.slice(0,C),...l.slice(C+1)]),n(7,T=n(8,I=n(9,L=n(0,h="")))),n(20,y=Math.min(y,V.length-2)))})},Ce=C=>{n(4,s.plan=C,s),n(4,s.nombre=T,s),n(4,s.apellido=I,s),n(4,s.nroSocio=L,s),n(3,V[y].plan=C,V),R(s)},ct=C=>{n(0,h=C.detail),console.log(h),s.plan.plan!=h.plan&&Ce(h)},Yt=C=>{C?(n(10,ne="particular"),n(6,v=!1)):(n(10,ne="plan"),n(6,v=!0))},ut=C=>{n(20,y=C.detail[0]);const ge=C.detail[1];bn(pi,i=C.detail[2],i);const k=typeof ge=="string"?"particular":ge.plan;console.log(`i ${y}, planSelect ${k}`),n(0,h=k=="particular"?"particular":V[y].plan),h!="particular"&&(n(5,g=u.findIndex(be=>be.plan===k)),console.log(`indicePlan ${g}, ${typeof g}`));const se=k=="particular";Yt(se)},je=C=>{const ge=C.detail.valor.SelectPlanVisible;ge?ge&&h=="particular"&&n(0,h="210"):n(0,h="particular"),Ce(h),Yt(!ge)};function vn(){S=this.value,n(2,S)}function wt(){T=this.value,n(7,T)}function wn(){I=this.value,n(8,I)}function ht(){L=this.value,n(9,L)}return t.$$set=C=>{"pacientes"in C&&n(17,l=C.pacientes),"sesiones"in C&&n(18,c=C.sesiones),"planes"in C&&n(1,u=C.planes),"planSeleccionado"in C&&n(0,h=C.planSeleccionado),"optionsPlan"in C&&n(19,f=C.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,V=S?l.filter(C=>`${C.apellido}, ${C.nombre}`.toLowerCase().startsWith(S.toLowerCase())):l.map(C=>({nombre:C.nombre,apellido:C.apellido,plan:C.plan,nroSocio:C.nroSocio,id:C.id}))),t.$$.dirty[0]&1048584&&n(4,s=V[y]),t.$$.dirty[0]&16&&s&&(bn(zr,r=s,r),bn(Ro,a=s.apellido,a),bn(Lo,o=s.nombre,o),bn(pi,i=s.id,i)),t.$$.dirty[0]&16&&F(s)},[h,u,S,V,s,g,v,T,I,L,ne,M,ae,Qt,ct,ut,je,l,c,f,y,vn,wt,wn,ht]}class mE extends Nt{constructor(e){super(),Pt(this,e,gE,dE,yt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const yE=Je(Ie,"sesiones");Je(Ie,"Pacientes");Je(Ie,"Planes");const vE=async t=>{const e=ci(t),n=e.fechaInicio,s=e.fechaFin;try{return(await _d(us(yE,Io("diaSesion",">=",n),Io("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function bc(t,e,n){const s=t.slice();return s[6]=e[n],s}function Ec(t){let e,n=`listar mes de ${t[6].nombre} - ${t[6].nro.toString().padStart(2,"0")}`,s;return{c(){e=_("option"),s=G(n),e.__value=t[6].nro,e.value=e.__value},m(i,r){Q(i,e,r),w(e,s)},p:fe,d(i){i&&K(e)}}}function wE(t){let e,n,s,i=t[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=Ec(bc(t,i,o));return{c(){e=_("select");for(let o=0;o<r.length;o+=1)r[o].c();p(e,"name","mes"),p(e,"id","mesRegistro"),t[0]===void 0&&an(()=>t[4].call(e))},m(o,a){Q(o,e,a);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(e,null);Bt(e,t[0]),n||(s=[J(e,"change",t[3]),J(e,"change",t[4])],n=!0)},p(o,[a]){if(a&2){i=o[1];let l;for(l=0;l<i.length;l+=1){const c=bc(o,i,l);r[l]?r[l].p(c,a):(r[l]=Ec(c),r[l].c(),r[l].m(e,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=i.length}a&3&&Bt(e,o[0])},i:fe,o:fe,d(o){o&&K(e),Ps(r,o),n=!1,Xe(s)}}}function bE(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=Bi(),o=c=>{r("cambioMes",c)},a=c=>o(c.target.value);function l(){s=Fi(this),n(0,s),n(1,i)}return[s,i,o,a,l]}class EE extends Nt{constructor(e){super(),Pt(this,e,bE,wE,yt,{})}}function _c(t,e,n){const s=t.slice();return s[10]=e[n],s[12]=n,s}function Tc(t){let e,n,s,i,r,o,a,l,c,u,h=t[2](t[1]).totalColPagos+"",d,f,g,y,v=t[2](t[1]).totalColValorSesion+"",S,T,I,L,V,ne=t[1],F=[];for(let P=0;P<ne.length;P+=1)F[P]=Cc(_c(t,ne,P));return{c(){e=_("button"),e.textContent="Cerrar",n=q(),s=_("div"),i=_("table"),r=_("tr"),r.innerHTML=`<th class="svelte-s1hkz6">n°</th> 
                    <th class="svelte-s1hkz6">dia</th> 
                    <th class="svelte-s1hkz6">paciente</th> 
                    <th class="svelte-s1hkz6">plan</th> 
                    <th class="svelte-s1hkz6">sesion</th> 
                    <th class="svelte-s1hkz6">pago</th>`,o=q(),a=_("tbody");for(let P=0;P<F.length;P+=1)F[P].c();l=q(),c=_("p"),u=G("Total pagos: $"),d=G(h),f=q(),g=_("p"),y=G("Total valor sesion: $"),S=G(v),T=q(),I=_("button"),I.textContent="Cerrar",p(r,"class","svelte-s1hkz6"),p(a,"class","svelte-s1hkz6"),p(i,"class","svelte-s1hkz6"),p(s,"id","tabla"),p(s,"class","svelte-s1hkz6"),p(c,"class","centrar svelte-s1hkz6"),p(g,"class","centrar svelte-s1hkz6")},m(P,M){Q(P,e,M),Q(P,n,M),Q(P,s,M),w(s,i),w(i,r),w(i,o),w(i,a);for(let R=0;R<F.length;R+=1)F[R]&&F[R].m(a,null);Q(P,l,M),Q(P,c,M),w(c,u),w(c,d),Q(P,f,M),Q(P,g,M),w(g,y),w(g,S),Q(P,T,M),Q(P,I,M),L||(V=[J(e,"click",t[6]),J(I,"click",t[7])],L=!0)},p(P,M){if(M&2){ne=P[1];let R;for(R=0;R<ne.length;R+=1){const ae=_c(P,ne,R);F[R]?F[R].p(ae,M):(F[R]=Cc(ae),F[R].c(),F[R].m(a,null))}for(;R<F.length;R+=1)F[R].d(1);F.length=ne.length}M&2&&h!==(h=P[2](P[1]).totalColPagos+"")&&me(d,h),M&2&&v!==(v=P[2](P[1]).totalColValorSesion+"")&&me(S,v)},d(P){P&&K(e),P&&K(n),P&&K(s),Ps(F,P),P&&K(l),P&&K(c),P&&K(f),P&&K(g),P&&K(T),P&&K(I),L=!1,Xe(V)}}}function Cc(t){let e,n,s,i,r,o=`${Sc(t[10].diaSesion.slice(8,10),2,!1)}`,a,l,c,u=`${t[10].apellido}, ${t[10].nombre}`,h,d,f,g=t[10].plan.slice(0,4)+"",y,v,S,T=t[10].valorPago+"",I,L,V,ne=t[10].valorSesion+"",F,P;return{c(){e=_("tr"),n=_("td"),s=G(t[12]),i=q(),r=_("td"),a=G(o),l=q(),c=_("td"),h=G(u),d=q(),f=_("td"),y=G(g),v=q(),S=_("td"),I=G(T),L=q(),V=_("td"),F=G(ne),P=q(),p(n,"class","svelte-s1hkz6"),p(r,"class","dia svelte-s1hkz6"),p(c,"class","nombre svelte-s1hkz6"),p(f,"class","plan svelte-s1hkz6"),p(S,"class","svelte-s1hkz6"),p(V,"class","svelte-s1hkz6"),p(e,"class","svelte-s1hkz6")},m(M,R){Q(M,e,R),w(e,n),w(n,s),w(e,i),w(e,r),w(r,a),w(e,l),w(e,c),w(c,h),w(e,d),w(e,f),w(f,y),w(e,v),w(e,S),w(S,I),w(e,L),w(e,V),w(V,F),w(e,P)},p(M,R){R&2&&o!==(o=`${Sc(M[10].diaSesion.slice(8,10),2,!1)}`)&&me(a,o),R&2&&u!==(u=`${M[10].apellido}, ${M[10].nombre}`)&&me(h,u),R&2&&g!==(g=M[10].plan.slice(0,4)+"")&&me(y,g),R&2&&T!==(T=M[10].valorPago+"")&&me(I,T),R&2&&ne!==(ne=M[10].valorSesion+"")&&me(F,ne)},d(M){M&&K(e)}}}function _E(t){let e,n,s,i;e=new EE({}),e.$on("cambioMes",t[5]);let r=t[0]&&t[1].length>0&&Tc(t);return{c(){Vt(e.$$.fragment),n=q(),s=_("div"),r&&r.c(),p(s,"class","listadoSesionesPorMes svelte-s1hkz6")},m(o,a){Ct(e,o,a),Q(o,n,a),Q(o,s,a),r&&r.m(s,null),i=!0},p(o,[a]){o[0]&&o[1].length>0?r?r.p(o,a):(r=Tc(o),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i(o){i||(ze(e.$$.fragment,o),i=!0)},o(o){Ze(e.$$.fragment,o),i=!1},d(o){St(e,o),o&&K(n),o&&K(s),r&&r.d()}}}function Sc(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function TE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e;const o=Bi(),a=f=>{var g=0,y=0;return f.forEach(v=>{g+=v.valorPago,y+=v.valorSesion}),{totalColPagos:g,totalColValorSesion:y}},l=f=>{i==!1?(o("vistaPulsado",f),n(4,s=f),n(0,i=!i)):(o("vistaPulsado",f),n(4,s=f)),console.log(a(r),`mes: ${s}, cant de sesiones: ${r.length}`)},c=f=>{n(4,s=f),l(f)},u=f=>c(f.detail),h=()=>n(0,i=!i),d=()=>n(0,i=!i);return t.$$set=f=>{"mesSeleccionado"in f&&n(4,s=f.mesSeleccionado),"vistaCalculos"in f&&n(0,i=f.vistaCalculos),"arrayParaLaVista"in f&&n(1,r=f.arrayParaLaVista)},[i,r,a,c,s,u,h,d]}class CE extends Nt{constructor(e){super(),Pt(this,e,TE,_E,yt,{mesSeleccionado:4,vistaCalculos:0,arrayParaLaVista:1})}}function SE(t){let e,n,s,i,r,o,a;return{c(){e=_("p"),n=G("total general:"),s=G(t[0]),i=q(),r=_("p"),o=G("total por paciente: "),a=G(t[1]),p(e,"id","totalGeneral")},m(l,c){Q(l,e,c),w(e,n),w(e,s),Q(l,i,c),Q(l,r,c),w(r,o),w(r,a)},p(l,[c]){c&1&&me(s,l[0]),c&2&&me(a,l[1])},i:fe,o:fe,d(l){l&&K(e),l&&K(i),l&&K(r)}}}function IE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class AE extends Nt{constructor(e){super(),Pt(this,e,IE,SE,yt,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function Ic(t,e,n){const s=t.slice();return s[45]=e[n],s}function Ac(t){let e,n,s,i,r;return{c(){e=_("h4"),n=G("Paciente: "),s=G(t[13]),i=G(", "),r=G(t[14]),p(e,"class","svelte-1imwuid")},m(o,a){Q(o,e,a),w(e,n),w(e,s),w(e,i),w(e,r)},p(o,a){a[0]&8192&&me(s,o[13]),a[0]&16384&&me(r,o[14])},d(o){o&&K(e)}}}function kc(t){let e,n=`mesSeleccionado ${t[7]} ${typeof t[7]} ${t[0][1].diaSesion.slice(5,7)}`,s,i,r,o,a,l,c,u,h=t[0],d=[];for(let f=0;f<h.length;f+=1)d[f]=Pc(Ic(t,h,f));return a=new AE({props:{registrosMesActual:t[8],varSumaValorPagoPorPaciente:t[6]}}),{c(){e=_("div"),s=G(n),i=q(),r=_("select");for(let f=0;f<d.length;f+=1)d[f].c();o=q(),Vt(a.$$.fragment),p(r,"id","select-sesiones"),p(r,"size",5),p(r,"class","svelte-1imwuid"),t[1]===void 0&&an(()=>t[24].call(r)),p(e,"id","select"),p(e,"class","svelte-1imwuid")},m(f,g){Q(f,e,g),w(e,s),w(e,i),w(e,r);for(let y=0;y<d.length;y+=1)d[y]&&d[y].m(r,null);Bt(r,t[1]),w(e,o),Ct(a,e,null),l=!0,c||(u=[J(r,"change",t[15]),J(r,"change",t[24])],c=!0)},p(f,g){if((!l||g[0]&129)&&n!==(n=`mesSeleccionado ${f[7]} ${typeof f[7]} ${f[0][1].diaSesion.slice(5,7)}`)&&me(s,n),g[0]&137){h=f[0];let v;for(v=0;v<h.length;v+=1){const S=Ic(f,h,v);d[v]?d[v].p(S,g):(d[v]=Pc(S),d[v].c(),d[v].m(r,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=h.length}g[0]&3&&Bt(r,f[1]);const y={};g[0]&256&&(y.registrosMesActual=f[8]),g[0]&64&&(y.varSumaValorPagoPorPaciente=f[6]),a.$set(y)},i(f){l||(ze(a.$$.fragment,f),l=!0)},o(f){Ze(a.$$.fragment,f),l=!1},d(f){f&&K(e),Ps(d,f),St(a),c=!1,Xe(u)}}}function Dc(t){let e,n,s=t[45].diaSesion+"",i,r,o=t[45].valorSesion+"",a,l,c=t[45].fechaPago+"",u,h,d=t[45].valorPago+"",f,g,y;return{c(){e=_("option"),n=G("dia sesion: "),i=G(s),r=G(" - valor sesion: "),a=G(o),l=G(`\r
              - dia pago `),u=G(c),h=G(" - valor pago "),f=G(d),g=q(),p(e,"class"," svelte-1imwuid"),e.__value=y=t[45].id,e.value=e.__value},m(v,S){Q(v,e,S),w(e,n),w(e,i),w(e,r),w(e,a),w(e,l),w(e,u),w(e,h),w(e,f),w(e,g)},p(v,S){S[0]&1&&s!==(s=v[45].diaSesion+"")&&me(i,s),S[0]&1&&o!==(o=v[45].valorSesion+"")&&me(a,o),S[0]&1&&c!==(c=v[45].fechaPago+"")&&me(u,c),S[0]&1&&d!==(d=v[45].valorPago+"")&&me(f,d),S[0]&1&&y!==(y=v[45].id)&&(e.__value=y,e.value=e.__value)},d(v){v&&K(e)}}}function Pc(t){let e=Object.values(t[45]).includes(t[3])&&parseInt(t[45].diaSesion.slice(5,7))==t[7],n,s=e&&Dc(t);return{c(){s&&s.c(),n=Mo()},m(i,r){s&&s.m(i,r),Q(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[45]).includes(i[3])&&parseInt(i[45].diaSesion.slice(5,7))==i[7]),e?s?s.p(i,r):(s=Dc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&K(n)}}}function kE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,g,y,v,S,T,I,L,V,ne,F,P,M;return{c(){e=_("div"),n=_("form"),s=_("div"),i=_("div"),r=_("label"),r.textContent="pago",o=_("input"),a=q(),l=_("label"),l.textContent="valor sesion",c=_("input"),u=q(),h=_("div"),d=_("label"),d.textContent="Dia Sesion",f=_("input"),g=q(),y=_("label"),y.textContent="Fecha Pago",v=_("input"),S=q(),T=_("div"),I=_("button"),I.textContent="update",L=q(),V=_("button"),V.textContent="delete",ne=q(),F=_("button"),F.textContent="Agregar sesión",p(r,"for","valorPago"),p(r,"class","svelte-1imwuid"),p(o,"name","valorPago"),p(o,"id","valorPago"),p(o,"type","number"),p(o,"step","100"),p(o,"min","0"),p(o,"placeholder","Valor pago"),p(o,"class","svelte-1imwuid"),p(l,"for","valorSesion"),p(l,"class","svelte-1imwuid"),p(c,"name","valorSesion"),p(c,"id","valorSesion"),p(c,"type","number"),p(c,"step","100"),p(c,"min","0"),p(c,"placeholder","Valor sesión"),p(c,"class","svelte-1imwuid"),p(i,"id","inputsFormSesionesI"),p(i,"class","svelte-1imwuid"),p(d,"for","diaSesion"),p(d,"class","svelte-1imwuid"),p(f,"name","diaSesion"),p(f,"id","diaSesion"),p(f,"type","date"),p(f,"placeholder","Día sesión"),p(f,"class","svelte-1imwuid"),p(y,"for","fechaPago"),p(y,"class","svelte-1imwuid"),p(v,"name","fechaPago"),p(v,"id","fechaPago"),p(v,"type","date"),p(v,"placeholder","Fecha pago"),p(v,"class","svelte-1imwuid"),p(h,"id","inputsFormSesionesD"),p(h,"class","svelte-1imwuid"),p(I,"class","svelte-1imwuid"),p(V,"class","svelte-1imwuid"),p(F,"class","svelte-1imwuid"),p(T,"id","botonesFormSesiones"),p(T,"class","buttons svelte-1imwuid"),p(s,"id","form-Sesiones"),p(s,"class","svelte-1imwuid"),p(n,"class","svelte-1imwuid"),p(e,"id","contenedor-form-sesiones"),p(e,"class","svelte-1imwuid")},m(R,ae){Q(R,e,ae),w(e,n),w(n,s),w(s,i),w(i,r),w(i,o),_e(o,t[9]),w(i,a),w(i,l),w(i,c),_e(c,t[10]),w(s,u),w(s,h),w(h,d),w(h,f),_e(f,t[11]),w(h,g),w(h,y),w(h,v),_e(v,t[12]),w(s,S),w(s,T),w(T,I),w(T,L),w(T,V),w(T,ne),w(T,F),P||(M=[J(o,"input",t[25]),J(c,"input",t[26]),J(f,"input",t[27]),J(v,"input",t[28]),J(I,"click",t[29]),J(V,"click",t[30]),J(F,"click",t[16]),J(n,"submit",lf(t[23]))],P=!0)},p(R,ae){ae[0]&512&&gi(o.value)!==R[9]&&_e(o,R[9]),ae[0]&1024&&gi(c.value)!==R[10]&&_e(c,R[10]),ae[0]&2048&&_e(f,R[11]),ae[0]&4096&&_e(v,R[12])},d(R){R&&K(e),P=!1,Xe(M)}}}function DE(t){let e,n,s,i,r,o,a,l=t[13]&&t[14]&&Ac(t),c=t[0].length>0&&kc(t),u=kE(t);return o=new CE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],mesSeleccionado:t[7]}}),o.$on("vistaPulsado",t[31]),{c(){e=_("main"),n=_("body"),l&&l.c(),s=q(),c&&c.c(),i=q(),u&&u.c(),r=q(),Vt(o.$$.fragment),p(n,"class","svelte-1imwuid"),p(e,"class","svelte-1imwuid")},m(h,d){Q(h,e,d),w(e,n),l&&l.m(n,null),w(n,s),c&&c.m(n,null),w(n,i),u&&u.m(n,null),w(n,r),Ct(o,n,null),a=!0},p(h,d){h[13]&&h[14]?l?l.p(h,d):(l=Ac(h),l.c(),l.m(n,s)):l&&(l.d(1),l=null),h[0].length>0?c?(c.p(h,d),d[0]&1&&ze(c,1)):(c=kc(h),c.c(),ze(c,1),c.m(n,i)):c&&(Fc(),Ze(c,1,1,()=>{c=null}),Bc()),u.p(h,d);const f={};d[0]&16&&(f.vistaCalculos=h[4]),d[0]&32&&(f.arrayParaLaVista=h[5]),d[0]&128&&(f.mesSeleccionado=h[7]),o.$set(f)},i(h){a||(ze(c),ze(o.$$.fragment,h),a=!0)},o(h){Ze(c),Ze(o.$$.fragment,h),a=!1},d(h){h&&K(e),l&&l.d(),c&&c.d(),u&&u.d(),St(o)}}}function PE(t,e,n){let s,i,r;Zt(t,pi,k=>n(3,s=k)),Zt(t,Ro,k=>n(13,i=k)),Zt(t,Lo,k=>n(14,r=k));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u=!1,h=[],d,f=0;const g=new Date;let y=g.getMonth()+1,v=g.getFullYear(),S=y;console.log(`mesSeleccionado ${S}`);let T,I,L=0;const V=k=>{if(n(1,T=k.target.value),console.log(o),n(2,I=o.find(be=>be.id===T)),console.log("selectedSession",I),n(9,M=I.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(10,R=I.valorSesion),console.log("particular",R);else{var se=l.find(be=>be.plan==c);console.log(se),console.log("OS",R)}n(12,pe=I.fechaPago),n(11,ae=I.diaSesion)},ne=async()=>{console.log("Add sesion",I);try{const k=await Td(Je(Ie,"sesiones"),{valorPago:M,valorSesion:R,diaSesion:ae,fechaPago:pe,pacienteID:s});console.log("sesion agregada"),Nn({text:"Nueva sesion agregada"}).showToast(),n(1,T=k.id)}catch(k){console.error(k)}},F=async k=>{console.log("Update sesion",k);try{await La(_t(Ie,"sesiones",k.id),{valorPago:M,valorSesion:R,fechaPago:pe,diaSesion:ae}),Nn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(se){console.log(se)}},P=async k=>{console.log("Delete sesion",k);try{await Ao(_t(Ie,"sesiones",k.id)),Nn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(se){console.error(se)}};let M=5e3,R=5e3,ae=new Date().toISOString().slice(0,10),pe=new Date().toISOString().slice(0,10);y.toString().padStart(2,"0"),v.toString();let Qt=k=>o.filter(be=>be.pacienteID===k&&be.diaSesion.slice(5,7)===S.toString().padStart(2,"0")).reduce((be,it)=>be+it.valorSesion,0);const Ce=async k=>{n(7,S=k);const se=await ct(S);n(5,h=se[1]),console.log(Array.isArray(se[1])),console.log(se[1]),n(4,u=!0)},ct=async k=>{k||(k=y);try{const se=await vE(k);n(8,L=0),f=0;let be=[];return se.forEach(it=>{let z=it.pacienteID;const ie=a.find(Zn=>Zn.id==z);var qe=it.valorPago;if(qe==null&&(qe=0),typeof qe=="number")if(ie.plan=="particular"){n(8,L+=qe),qe<R&&(f+=R-qe);var bt={diaSesion:it.diaSesion,apellido:ie.apellido,nombre:ie.nombre,plan:ie.plan.plan?ie.plan.plan:"particular",valorPago:qe,valorSesion:it.valorSesion};be.push(bt)}else{const Zn=ie.plan;var bt={diaSesion:it.diaSesion,apellido:ie.apellido,nombre:ie.nombre,plan:ie.plan.plan?ie.plan.plan:"particular",valorPago:qe,valorSesion:it.valorSesion};be.push(bt),qe<Zn.valorCoseguro&&(f+=Zn.valorCoseguro-qe),n(8,L+=Zn.valorOs+qe)}}),n(6,d=Qt(s)),[L,be]}catch(se){return console.error("Error al obtener las sesiones y los pagos:",se),[]}};function Yt(k){df.call(this,t,k)}function ut(){T=Fi(this),n(1,T),n(0,o)}function je(){M=gi(this.value),n(9,M)}function vn(){R=gi(this.value),n(10,R)}function wt(){ae=this.value,n(11,ae)}function wn(){pe=this.value,n(12,pe)}const ht=()=>F(I),C=()=>P(I),ge=async k=>Ce(k.detail);return t.$$set=k=>{"sesiones"in k&&n(0,o=k.sesiones),"pacientes"in k&&n(20,a=k.pacientes),"planes"in k&&n(21,l=k.planes),"planSeleccionado"in k&&n(22,c=k.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&3145729&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,I=o.find(k=>k.id===T)),console.log(I||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=Qt(s))},ct(),[o,T,I,s,u,h,d,S,L,M,R,ae,pe,i,r,V,ne,F,P,Ce,a,l,c,Yt,ut,je,vn,wt,wn,ht,C,ge]}class NE extends Nt{constructor(e){super(),Pt(this,e,PE,DE,yt,{sesiones:0,pacientes:20,planes:21,planSeleccionado:22},null,[-1,-1])}}function OE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f;return a=new mE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Nc}}),u=new NE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Nc}}),{c(){e=_("body"),n=_("button"),n.textContent="generar backup firestore",s=q(),i=_("div"),r=_("h5"),r.textContent="CRUD Pacientes",o=q(),Vt(a.$$.fragment),l=q(),c=_("div"),Vt(u.$$.fragment),p(i,"class","contenedor-pacientes svelte-1y3ujd1"),p(c,"class","contenedor-sesiones svelte-1y3ujd1"),p(e,"class","svelte-1y3ujd1")},m(g,y){Q(g,e,y),w(e,n),w(e,s),w(e,i),w(i,r),w(i,o),Ct(a,i,null),w(e,l),w(e,c),Ct(u,c,null),h=!0,d||(f=J(n,"click",t[4]),d=!0)},p(g,[y]){const v={};y&4&&(v.sesiones=g[2]),y&8&&(v.pacientes=g[3]),y&1&&(v.planes=g[0]),y&2&&(v.optionsPlan=g[1]),a.$set(v);const S={};y&4&&(S.sesiones=g[2]),y&8&&(S.pacientes=g[3]),y&1&&(S.planes=g[0]),u.$set(S)},i(g){h||(ze(a.$$.fragment,g),ze(u.$$.fragment,g),h=!0)},o(g){Ze(a.$$.fragment,g),Ze(u.$$.fragment,g),h=!1},d(g){g&&K(e),St(a),St(u),d=!1,f()}}}let Nc="particular";function RE(t,e,n){let s=[],i=[],r=[],o=[];Mc(()=>{const l=[],c=Je(Ie,"sesiones"),u=Je(Ie,"Pacientes"),h=Je(Ie,"planes"),d=us(c,Vr("diaSesion")),f=us(u,Vr("apellido")),g=us(h,Vr("plan")),y=jr(d,T=>{n(2,s=T.docs.map(I=>({id:I.id,...I.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(y);const v=jr(f,T=>{n(3,i=T.docs.map(I=>({id:I.id,...I.data()})))});l.push(v);const S=jr(g,T=>{n(0,r=T.docs.map(I=>({id:I.id,...I.data()})))});return l.push(S),()=>{l.forEach(T=>T())}});const a=()=>{const l="sesiones"+ci().toString()+"BU",c=Je(Ie,l);s.forEach(async g=>{const y=_t(c);try{await Ur(y,g),console.log("Documento sesion creado exitosamente")}catch(v){console.error("Error al crear el documento sesion:",v)}});const u="planes"+ci().toString()+"BU",h=Je(Ie,u);r.forEach(async g=>{const y=_t(h);try{await Ur(y,g),console.log("Documento plan creado exitosamente")}catch(v){console.error("Error al crear el documento plan:",v)}});const d="Pacientes"+ci().toString()+"BU",f=Je(Ie,d);i.forEach(async g=>{const y=_t(f);try{await Ur(y,g),console.log("Documento paciente creado exitosamente")}catch(v){console.error("Error al crear el documento paciente:",v)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class LE extends Nt{constructor(e){super(),Pt(this,e,RE,OE,yt,{})}}function ME(t){let e,n,s;return n=new LE({}),{c(){e=_("div"),Vt(n.$$.fragment),p(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){Q(i,e,r),Ct(n,e,null),s=!0},p:fe,i(i){s||(ze(n.$$.fragment,i),s=!0)},o(i){Ze(n.$$.fragment,i),s=!1},d(i){i&&K(e),St(n)}}}function xE(t){let e,n,s,i,r,o;return{c(){e=_("div"),n=_("h1"),n.textContent="ingrese la contraseña:",s=q(),i=_("input"),p(n,"class","svelte-uueu6x"),p(i,"type","password"),p(i,"class","svelte-uueu6x"),p(e,"class","ingreso svelte-uueu6x")},m(a,l){Q(a,e,l),w(e,n),w(e,s),w(e,i),_e(i,t[1]),r||(o=[J(i,"input",t[3]),J(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&_e(i,a[1])},i:fe,o:fe,d(a){a&&K(e),r=!1,Xe(o)}}}function FE(t){let e,n,s,i;const r=[xE,ME],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=_("main"),s&&s.c(),p(e,"class","svelte-uueu6x")},m(l,c){Q(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(Fc(),Ze(o[u],1,1,()=>{o[u]=null}),Bc()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),ze(s,1),s.m(e,null)):s=null)},i(l){i||(ze(s),i=!0)},o(l){Ze(s),i=!1},d(l){l&&K(e),~n&&o[n].d()}}}function BE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class VE extends Nt{constructor(e){super(),Pt(this,e,BE,FE,yt,{})}}new VE({target:document.getElementById("app")});
