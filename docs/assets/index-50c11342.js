(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ye(){}function Oc(t){return t()}function Xa(){return Object.create(null)}function ft(t){t.forEach(Oc)}function Rc(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function rf(t){return Object.keys(t).length===0}function of(t,...e){if(t==null)return ye;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function sn(t,e,n){t.$$.on_destroy.push(of(e,n))}function Tn(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function se(t,e,n){t.insertBefore(e,n||null)}function ee(t){t.parentNode&&t.parentNode.removeChild(t)}function Rs(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function K(){return Q(" ")}function Lc(){return Q("")}function W(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function af(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wi(t){return t===""?null:+t}function lf(t){return Array.from(t.childNodes)}function Ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ce(t,e){t.value=e??""}function Vt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function cf(t){for(const e of t.options)if(!e.disabled)return e}function bi(t){const e=t.querySelector(":checked")||cf(t);return e&&e.__value}function si(t,e,n){t.classList[n?"add":"remove"](e)}function uf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ms;function ls(t){ms=t}function Mc(){if(!ms)throw new Error("Function called outside component initialization");return ms}function xc(t){Mc().$$.on_mount.push(t)}function Vo(){const t=Mc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=uf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function hf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const In=[],Ja=[];let Pn=[];const Za=[],df=Promise.resolve();let Qr=!1;function ff(){Qr||(Qr=!0,df.then(Fc))}function hn(t){Pn.push(t)}const Ar=new Set;let Cn=0;function Fc(){if(Cn!==0)return;const t=ms;do{try{for(;Cn<In.length;){const e=In[Cn];Cn++,ls(e),pf(e.$$)}}catch(e){throw In.length=0,Cn=0,e}for(ls(null),In.length=0,Cn=0;Ja.length;)Ja.pop()();for(let e=0;e<Pn.length;e+=1){const n=Pn[e];Ar.has(n)||(Ar.add(n),n())}Pn.length=0}while(In.length);for(;Za.length;)Za.pop()();Qr=!1,Ar.clear(),ls(t)}function pf(t){if(t.fragment!==null){t.update(),ft(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(hn)}}function gf(t){const e=[],n=[];Pn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Pn=e}const di=new Set;let rn;function mf(){rn={r:0,c:[],p:rn}}function yf(){rn.r||ft(rn.c),rn=rn.p}function vt(t,e){t&&t.i&&(di.delete(t),t.i(e))}function At(t,e,n,s){if(t&&t.o){if(di.has(t))return;di.add(t),rn.c.push(()=>{di.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function dn(t){t&&t.c()}function Ut(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||hn(()=>{const o=t.$$.on_mount.map(Oc).filter(Rc);t.$$.on_destroy?t.$$.on_destroy.push(...o):ft(o),t.$$.on_mount=[]}),r.forEach(hn)}function jt(t,e){const n=t.$$;n.fragment!==null&&(gf(n.after_update),ft(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vf(t,e){t.$$.dirty[0]===-1&&(In.push(t),ff(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,s,i,r,o,a=[-1]){const l=ms;ls(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ye,not_equal:i,bound:Xa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&vf(t,h)),d}):[],c.update(),u=!0,ft(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=lf(e.target);c.fragment&&c.fragment.l(h),h.forEach(ee)}else c.fragment&&c.fragment.c();e.intro&&vt(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),Fc()}ls(l)}class Wt{$destroy(){jt(this,1),this.$destroy=ye}$on(e,n){if(!Rc(n))return ye;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!rf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let fi=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function el(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function tl(t){let e,n=t[12].plan+"",s;return{c(){e=C("option"),s=Q(n),e.__value=t[14],e.value=e.__value},m(i,r){se(i,e,r),v(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&Ke(s,n)},d(i){i&&ee(e)}}}function wf(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=tl(el(t,a,c));return{c(){e=C("div"),n=C("input"),s=K(),i=C("select");for(let c=0;c<l.length;c+=1)l[c].c();y(n,"type","checkbox"),y(n,"name","CheckBoxParticular"),y(n,"id","CheckBoxParticular"),y(i,"name","plan"),y(i,"id","plan"),y(i,"class","svelte-1de4xhy"),t[1]===void 0&&hn(()=>t[8].call(i)),si(i,"SelectPlanVisible",t[0]),si(i,"SelectPlanHidden",t[3]),y(e,"id","selectPlanContainer"),y(e,"class","svelte-1de4xhy")},m(c,u){se(c,e,u),v(e,n),n.checked=t[0],v(e,s),v(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);Vt(i,t[1]),r||(o=[W(n,"change",t[7]),W(n,"change",t[4]),W(i,"change",t[8]),W(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=el(c,a,h);l[h]?l[h].p(d,u):(l[h]=tl(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&Vt(i,c[1]),u&1&&si(i,"SelectPlanVisible",c[0]),u&8&&si(i,"SelectPlanHidden",c[3])},i:ye,o:ye,d(c){c&&ee(e),Rs(l,c),r=!1,ft(o)}}}function bf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=m=>{n(0,r=m)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=m=>{var w=m.target.checked;l(w),c()},h=Vo(),d=m=>{n(1,o=parseInt(m.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function f(){r=this.checked,n(0,r)}function p(){o=bi(this),n(1,o)}return t.$$set=m=>{"planes"in m&&n(2,s=m.planes),"planSeleccionado"in m&&n(6,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible),"indicePlan"in m&&n(1,o=m.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,f,p]}class Ef extends Wt{constructor(e){super(),Gt(this,e,bf,wf,Ot,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_f=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_f(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Tf;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cf=function(t){const e=Bc(t);return Vc.encodeByteArray(e,!0)},Ei=function(t){return Cf(t).replace(/\./g,"")},Sf=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Af=()=>If().__FIREBASE_DEFAULTS__,kf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Df=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sf(t[1]);return e&&JSON.parse(e)},Uc=()=>{try{return Af()||kf()||Df()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pf=t=>{var e,n;return(n=(e=Uc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jc=t=>{const e=Pf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nf=()=>{var t;return(t=Uc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function qc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ei(JSON.stringify(n)),Ei(JSON.stringify(o)),a].join(".")}function Rf(){try{return typeof indexedDB=="object"}catch{return!1}}function Lf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mf,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$c.prototype.create)}}class $c{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,s)}}function xf(t,e){return t.replace(Ff,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ff=/\{\$([^}]+)}/g;function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nl(r)&&nl(o)){if(!Yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nl(t){return t!==null&&typeof t=="object"}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class Bf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Of;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uf(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vf(t){return t===nn?void 0:t}function Uf(t){return t.instantiationMode==="EAGER"}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const qf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},$f=X.INFO,Hf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Kf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Hf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hc{constructor(e){this.name=e,this._logLevel=$f,this._logHandler=Kf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const zf=(t,e)=>e.some(n=>t instanceof n);let sl,il;function Gf(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wf(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,Xr=new WeakMap,zc=new WeakMap,kr=new WeakMap,Uo=new WeakMap;function Qf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),Uo.set(e,t),e}function Yf(t){if(Xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xr.set(t,e)}let Jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xf(t){Jr=t(Jr)}function Jf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Dr(this),e,...n);return zc.set(s,e.sort?e.sort():[e]),Lt(s)}:Wf().includes(t)?function(...e){return t.apply(Dr(this),e),Lt(Kc.get(this))}:function(...e){return Lt(t.apply(Dr(this),e))}}function Zf(t){return typeof t=="function"?Jf(t):(t instanceof IDBTransaction&&Yf(t),zf(t,Gf())?new Proxy(t,Jr):t)}function Lt(t){if(t instanceof IDBRequest)return Qf(t);if(kr.has(t))return kr.get(t);const e=Zf(t);return e!==t&&(kr.set(t,e),Uo.set(e,t)),e}const Dr=t=>Uo.get(t);function ep(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Lt(o.result),l.oldVersion,l.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const tp=["get","getKey","getAll","getAllKeys","count"],np=["put","add","delete","clear"],Pr=new Map;function rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=np.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||tp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Pr.set(e,r),r}Xf(t=>({...t,get:(e,n,s)=>rl(e,n)||t.get(e,n,s),has:(e,n)=>!!rl(e,n)||t.has(e,n)}));/**
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
 */class sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ip(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ip(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",ol="0.9.4";/**
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
 */const fn=new Hc("@firebase/app"),rp="@firebase/app-compat",op="@firebase/analytics-compat",ap="@firebase/analytics",lp="@firebase/app-check-compat",cp="@firebase/app-check",up="@firebase/auth",hp="@firebase/auth-compat",dp="@firebase/database",fp="@firebase/database-compat",pp="@firebase/functions",gp="@firebase/functions-compat",mp="@firebase/installations",yp="@firebase/installations-compat",vp="@firebase/messaging",wp="@firebase/messaging-compat",bp="@firebase/performance",Ep="@firebase/performance-compat",_p="@firebase/remote-config",Tp="@firebase/remote-config-compat",Cp="@firebase/storage",Sp="@firebase/storage-compat",Ip="@firebase/firestore",Ap="@firebase/firestore-compat",kp="firebase",Dp="9.17.2";/**
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
 */const eo="[DEFAULT]",Pp={[Zr]:"fire-core",[rp]:"fire-core-compat",[ap]:"fire-analytics",[op]:"fire-analytics-compat",[cp]:"fire-app-check",[lp]:"fire-app-check-compat",[up]:"fire-auth",[hp]:"fire-auth-compat",[dp]:"fire-rtdb",[fp]:"fire-rtdb-compat",[pp]:"fire-fn",[gp]:"fire-fn-compat",[mp]:"fire-iid",[yp]:"fire-iid-compat",[vp]:"fire-fcm",[wp]:"fire-fcm-compat",[bp]:"fire-perf",[Ep]:"fire-perf-compat",[_p]:"fire-rc",[Tp]:"fire-rc-compat",[Cp]:"fire-gcs",[Sp]:"fire-gcs-compat",[Ip]:"fire-fst",[Ap]:"fire-fst-compat","fire-js":"fire-js",[kp]:"fire-js-all"};/**
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
 */const _i=new Map,to=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(to.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,t);for(const n of _i.values())Np(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Op={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new $c("app","Firebase",Op);/**
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
 */class Rp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Wc=Dp;function Qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=Nf()),!n)throw Mt.create("no-options");const r=_i.get(i);if(r){if(Yr(n,r.options)&&Yr(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new jf(i);for(const l of to.values())o.addComponent(l);const a=new Rp(n,s,o);return _i.set(i,a),a}function Yc(t=eo){const e=_i.get(t);if(!e&&t===eo)return Qc();if(!e)throw Mt.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=Pp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}ys(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Lp="firebase-heartbeat-database",Mp=1,vs="firebase-heartbeat-store";let Nr=null;function Xc(){return Nr||(Nr=ep(Lp,Mp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Nr}async function xp(t){try{return(await Xc()).transaction(vs).objectStore(vs).get(Jc(t))}catch(e){if(e instanceof vn)fn.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function al(t,e){try{const s=(await Xc()).transaction(vs,"readwrite");return await s.objectStore(vs).put(e,Jc(t)),s.done}catch(n){if(n instanceof vn)fn.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(s.message)}}}function Jc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fp=1024,Bp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Bp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:n,unsentEntries:s}=Up(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ll(){return new Date().toISOString().substring(0,10)}function Up(t,e=Fp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rf()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cl(t){return Ei(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qp(t){ys(new Fn("platform-logger",e=>new sp(e),"PRIVATE")),ys(new Fn("heartbeat",e=>new Vp(e),"PRIVATE")),xt(Zr,ol,t),xt(Zr,ol,"esm2017"),xt("fire-js","")}qp("");var $p="firebase",Hp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt($p,Hp,"app");var Kp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,jo=jo||{},x=Kp||self;function Ti(){}function qi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zp(t){return Object.prototype.hasOwnProperty.call(t,Or)&&t[Or]||(t[Or]=++Gp)}var Or="closure_uid_"+(1e9*Math.random()>>>0),Gp=0;function Wp(t,e,n){return t.call.apply(t.bind,arguments)}function Qp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xe=Wp:xe=Qp,xe.apply(null,arguments)}function ii(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ne(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var Yp=0;Qt.prototype.s=!1;Qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Yp!=0)&&zp(this)};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ul(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Fe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Xp=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{x.addEventListener("test",Ti,e),x.removeEventListener("test",Ti,e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}var hl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rr(t,e){return t<e?-1:t>e?1:0}function $i(){var t=x.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return $i().indexOf(t)!=-1}function $o(t){return $o[" "](t),t}$o[" "]=Ti;function Jp(t){var e=tg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Zp=mt("Opera"),Bn=mt("Trident")||mt("MSIE"),eu=mt("Edge"),no=eu||Bn,tu=mt("Gecko")&&!($i().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),eg=$i().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function nu(){var t=x.document;return t?t.documentMode:void 0}var Si;e:{var Lr="",Mr=function(){var t=$i();if(tu)return/rv:([^\);]+)(\)|;)/.exec(t);if(eu)return/Edge\/([\d\.]+)/.exec(t);if(Bn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eg)return/WebKit\/(\S+)/.exec(t);if(Zp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mr&&(Lr=Mr?Mr[1]:""),Bn){var xr=nu();if(xr!=null&&xr>parseFloat(Lr)){Si=String(xr);break e}}Si=Lr}var tg={};function ng(){return Jp(function(){let t=0;const e=hl(String(Si)).split("."),n=hl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Rr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Rr(i[2].length==0,r[2].length==0)||Rr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var so;if(x.document&&Bn){var dl=nu();so=dl||parseInt(Si,10)||void 0}else so=void 0;var sg=so;function ws(t,e){if(Fe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tu){e:{try{$o(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ig[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.X.h.call(this)}}Ne(ws,Fe);var ig={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ms="closure_listenable_"+(1e6*Math.random()|0),rg=0;function og(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++rg,this.ba=this.ea=!1}function Hi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ho(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function su(t){const e={};for(const n in t)e[n]=t[n];return e}const fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<fl.length;r++)n=fl[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ki(t){this.src=t,this.g={},this.h=0}Ki.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ro(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new og(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Zc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Ko="closure_lm_"+(1e6*Math.random()|0),Fr={};function ru(t,e,n,s,i){if(s&&s.once)return au(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ru(t,e[r],n,s,i);return null}return n=Wo(n),t&&t[Ms]?t.N(e,n,Ls(s)?!!s.capture:!!s,i):ou(t,e,n,!1,s,i)}function ou(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ls(i)?!!i.capture:!!i,a=Go(t);if(a||(t[Ko]=a=new Ki(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ag(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Xp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(cu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ag(){function t(n){return e.call(t.src,t.listener,n)}const e=lg;return t}function au(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)au(t,e[r],n,s,i);return null}return n=Wo(n),t&&t[Ms]?t.O(e,n,Ls(s)?!!s.capture:!!s,i):ou(t,e,n,!0,s,i)}function lu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)lu(t,e[r],n,s,i);else s=Ls(s)?!!s.capture:!!s,n=Wo(n),t&&t[Ms]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ro(r,n,s,i),-1<n&&(Hi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Go(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,s,i)),(n=-1<t?e[t]:null)&&zo(n))}function zo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ms])io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(cu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Go(e))?(io(n,t),n.h==0&&(n.src=null,e[Ko]=null)):Hi(t)}}}function cu(t){return t in Fr?Fr[t]:Fr[t]="on"+t}function lg(t,e){if(t.ba)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&zo(t),t=n.call(s,e)}return t}function Go(t){return t=t[Ko],t instanceof Ki?t:null}var Br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(t){return typeof t=="function"?t:(t[Br]||(t[Br]=function(e){return t.handleEvent(e)}),t[Br])}function Se(){Qt.call(this),this.i=new Ki(this),this.P=this,this.I=null}Ne(Se,Qt);Se.prototype[Ms]=!0;Se.prototype.removeEventListener=function(t,e,n,s){lu(this,t,e,n,s)};function De(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Fe(e,t);else if(e instanceof Fe)e.target=e.target||t;else{var i=e;e=new Fe(s,t),iu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ri(o,s,!0,e)&&i}if(o=e.g=t,i=ri(o,s,!0,e)&&i,i=ri(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ri(o,s,!1,e)&&i}Se.prototype.M=function(){if(Se.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hi(n[s]);delete t.g[e],t.h--}}this.I=null};Se.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Se.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ri(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&io(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Qo=x.JSON.stringify;function cg(){var t=du;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ug{constructor(){this.h=this.g=null}add(e,n){const s=uu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var uu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new hg,t=>t.reset());class hg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dg(t){x.setTimeout(()=>{throw t},0)}function hu(t,e){oo||fg(),ao||(oo(),ao=!0),du.add(t,e)}var oo;function fg(){var t=x.Promise.resolve(void 0);oo=function(){t.then(pg)}}var ao=!1,du=new ug;function pg(){for(var t;t=cg();){try{t.h.call(t.g)}catch(n){dg(n)}var e=uu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ao=!1}function zi(t,e){Se.call(this),this.h=t||1,this.g=e||x,this.j=xe(this.lb,this),this.l=Date.now()}Ne(zi,Se);D=zi.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),De(this,"tick"),this.ca&&(Yo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){zi.X.M.call(this),Yo(this),delete this.g};function Xo(t,e,n){if(typeof t=="function")n&&(t=xe(t,n));else if(t&&typeof t.handleEvent=="function")t=xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(t,e||0)}function fu(t){t.g=Xo(()=>{t.g=null,t.i&&(t.i=!1,fu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class gg extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fu(this)}M(){super.M(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){Qt.call(this),this.h=t,this.g={}}Ne(bs,Qt);var pl=[];function pu(t,e,n,s){Array.isArray(n)||(n&&(pl[0]=n.toString()),n=pl);for(var i=0;i<n.length;i++){var r=ru(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function gu(t){Ho(t.g,function(e,n){this.g.hasOwnProperty(n)&&zo(e)},t),t.g={}}bs.prototype.M=function(){bs.X.M.call(this),gu(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gi(){this.g=!0}Gi.prototype.Aa=function(){this.g=!1};function mg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function yg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wg(t,n)+(s?" "+s:"")})}function vg(t,e){t.info(function(){return"TIMEOUT: "+e})}Gi.prototype.info=function(){};function wg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qo(n)}catch{return e}}var wn={},gl=null;function Wi(){return gl=gl||new Se}wn.Pa="serverreachability";function mu(t){Fe.call(this,wn.Pa,t)}Ne(mu,Fe);function Es(t){const e=Wi();De(e,new mu(e))}wn.STAT_EVENT="statevent";function yu(t,e){Fe.call(this,wn.STAT_EVENT,t),this.stat=e}Ne(yu,Fe);function ze(t){const e=Wi();De(e,new yu(e,t))}wn.Qa="timingevent";function vu(t,e){Fe.call(this,wn.Qa,t),this.size=e}Ne(vu,Fe);function xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){t()},e)}var Qi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jo(){}Jo.prototype.h=null;function ml(t){return t.h||(t.h=t.i())}function bu(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zo(){Fe.call(this,"d")}Ne(Zo,Fe);function ea(){Fe.call(this,"c")}Ne(ea,Fe);var lo;function Yi(){}Ne(Yi,Jo);Yi.prototype.g=function(){return new XMLHttpRequest};Yi.prototype.i=function(){return{}};lo=new Yi;function Bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bs(this),this.O=bg,t=no?125:void 0,this.T=new zi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Eu}function Eu(){this.i=null,this.g="",this.h=!1}var bg=45e3,co={},Ii={};D=Bs.prototype;D.setTimeout=function(t){this.O=t};function uo(t,e,n){t.K=1,t.v=Ji(kt(e)),t.s=n,t.P=!0,_u(t,null)}function _u(t,e){t.F=Date.now(),Vs(t),t.A=kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Pu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Eu,t.g=Xu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new gg(xe(t.La,t,t.g),t.N)),pu(t.S,t.g,"readystatechange",t.ib),e=t.H?su(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Es(),mg(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&Ct(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=Ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||no||this.g&&(this.h.h||this.g.fa()||bl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),Xi(this);var n=this.g.aa();this.Y=n;t:if(Tu(this)){var s=bl(this.g);t="";var i=s.length,r=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),cs(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,yg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)Dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ho(this,n);else{this.i=!1,this.o=3,ze(12),on(this),cs(this);break e}}this.P?(Cu(this,u,o),no&&this.i&&u==3&&(pu(this.S,this.T,"tick",this.hb),this.T.start())):(Dn(this.j,this.m,o,null),ho(this,o)),u==4&&on(this),this.i&&!this.I&&(u==4?Gu(this.l,this):(this.i=!1,Vs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),on(this),cs(this)}}}catch{}finally{}};function Tu(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Cu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Eg(t,n),i==Ii){e==4&&(t.o=4,ze(14),s=!1),Dn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==co){t.o=4,ze(15),Dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Dn(t.j,t.m,i,null),ho(t,i);Tu(t)&&i!=Ii&&i!=co&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),aa(e),e.K=!0,ze(11))):(Dn(t.j,t.m,n,"[Invalid Chunked Response]"),on(t),cs(t))}D.hb=function(){if(this.g){var t=Ct(this.g),e=this.g.fa();this.C<e.length&&(Xi(this),Cu(this,t,e),this.i&&t!=4&&Vs(this))}};function Eg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ii:(n=Number(e.substring(n,s)),isNaN(n)?co:(s+=1,s+n>e.length?Ii:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,on(this)};function Vs(t){t.V=Date.now()+t.O,Su(t,t.O)}function Su(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xs(xe(t.gb,t),e)}function Xi(t){t.B&&(x.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(vg(this.j,this.A),this.K!=2&&(Es(),ze(17)),on(this),this.o=2,cs(this)):Su(this,this.V-t)};function cs(t){t.l.G==0||t.I||Gu(t.l,t)}function on(t){Xi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Yo(t.T),gu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ho(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fo(n.h,t))){if(!t.J&&fo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Di(n),tr(n);else break e;oa(n),ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xs(xe(n.cb,n),6e3));if(1>=Ru(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else an(n,11)}else if((t.J||n.g==t)&&Di(n),!Ci(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ta(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,ce(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Yu(s,s.H?s.ka:null,s.V),o.J){Lu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Xi(a),Vs(a)),s.g=o}else Ku(s);0<n.i.length&&nr(n)}else c[0]!="stop"&&c[0]!="close"||an(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?an(n,7):ra(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Es(4)}catch{}}function _g(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Tg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Iu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Tg(t),s=_g(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cn){this.h=e!==void 0?e:t.h,Ai(this,t.j),this.s=t.s,this.g=t.g,ki(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yl(this,n),this.o=t.o}else t&&(n=String(t).match(Au))?(this.h=!!e,Ai(this,n[1]||"",!0),this.s=is(n[2]||""),this.g=is(n[3]||"",!0),ki(this,n[4]),this.l=is(n[5]||"",!0),yl(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rs(e,vl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rs(e,vl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rs(n,n.charAt(0)=="/"?Ag:Ig,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rs(n,Dg)),t.join("")};function kt(t){return new cn(t)}function Ai(t,e,n){t.j=n?is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ki(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yl(t,e,n){e instanceof _s?(t.i=e,Pg(t.i,t.h)):(n||(e=rs(e,kg)),t.i=new _s(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function Ji(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Sg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vl=/[#\/\?@]/g,Ig=/[#\?:]/g,Ag=/[#\?]/g,kg=/[#\?@]/g,Dg=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new Map,t.h=0,t.i&&Cg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=_s.prototype;D.add=function(t,e){Yt(this),this.i=null,t=Gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ku(t,e){Yt(t),e=Gn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Du(t,e){return Yt(t),e=Gn(t,e),t.g.has(e)}D.forEach=function(t,e){Yt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){Yt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){Yt(this);let e=[];if(typeof t=="string")Du(this,t)&&(e=e.concat(this.g.get(Gn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Yt(this),this.i=null,t=Gn(this,t),Du(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Pu(t,e,n){ku(t,e),0<n.length&&(t.i=null,t.g.set(Gn(t,e),qo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Pg(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(ku(this,s),Pu(this,i,n))},t)),t.j=e}var Ng=class{constructor(e,n){this.h=e,this.g=n}};function Nu(t){this.l=t||Og,x.PerformanceNavigationTiming?(t=x.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(x.g&&x.g.Ga&&x.g.Ga()&&x.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Og=10;function Ou(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ru(t){return t.h?1:t.g?t.g.size:0}function fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ta(t,e){t.g?t.g.add(e):t.h=e}function Lu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nu.prototype.cancel=function(){if(this.i=Mu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qo(t.i)}function na(){}na.prototype.stringify=function(t){return x.JSON.stringify(t,void 0)};na.prototype.parse=function(t){return x.JSON.parse(t,void 0)};function Rg(){this.g=new na}function Lg(t,e,n){const s=n||"";try{Iu(t,function(i,r){let o=i;Ls(i)&&(o=Qo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Mg(t,e){const n=new Gi;if(x.Image){const s=new Image;s.onload=ii(oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ii(oi,n,s,"TestLoadImage: error",!1,e),s.onabort=ii(oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ii(oi,n,s,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function oi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Us(t){this.l=t.ac||null,this.j=t.jb||!1}Ne(Us,Jo);Us.prototype.g=function(){return new Zi(this.l,this.j)};Us.prototype.i=function(t){return function(){return t}}({});function Zi(t,e){Se.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ne(Zi,Se);var sa=0;D=Zi.prototype;D.open=function(t,e){if(this.readyState!=sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||x).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=sa};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):Ts(this),this.readyState==3&&xu(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,js(this))};D.Ua=function(t){this.g&&(this.response=t,js(this))};D.ga=function(){this.g&&js(this)};function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xg=x.JSON.parse;function ue(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fu,this.K=this.L=!1}Ne(ue,Se);var Fu="",Fg=/^https?$/i,Bg=["POST","PUT"];D=ue.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?ml(this.u):ml(lo),this.g.onreadystatechange=xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=x.FormData&&t instanceof x.FormData,!(0<=Zc(Bg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Uu(this),0<this.B&&((this.K=Vg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xe(this.qa,this)):this.A=Xo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wl(this,r)}};function Vg(t){return Bn&&ng()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof jo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function wl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Bu(t),er(t)}function Bu(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),er(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),er(this,!0)),ue.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?Vu(this):this.fb())};D.fb=function(){Vu(this)};function Vu(t){if(t.h&&typeof jo<"u"&&(!t.C[1]||Ct(t)!=4||t.aa()!=2)){if(t.v&&Ct(t)==4)Xo(t.Ha,0,t);else if(De(t,"readystatechange"),Ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Au)[1]||null;if(!i&&x.self&&x.self.location){var r=x.self.location.protocol;i=r.substr(0,r.length-1)}s=!Fg.test(i?i.toLowerCase():"")}n=s}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Bu(t)}}finally{er(t)}}}}function er(t,e){if(t.g){Uu(t);const n=t.g,s=t.C[0]?Ti:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=s}catch{}}}function Uu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(x.clearTimeout(t.A),t.A=null)}function Ct(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xg(e)}};function bl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ju(t){let e="";return Ho(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=ju(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qu(t){this.Ca=0,this.i=[],this.j=new Gi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ss("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ss("baseRetryDelayMs",5e3,t),this.bb=ss("retryDelaySeedMs",1e4,t),this.$a=ss("forwardChannelMaxRetries",2,t),this.ta=ss("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Nu(t&&t.concurrentRequestLimit),this.Fa=new Rg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=qu.prototype;D.ma=8;D.G=1;function ra(t){if($u(t),t.G==3){var e=t.U++,n=kt(t.F);ce(n,"SID",t.I),ce(n,"RID",e),ce(n,"TYPE","terminate"),qs(t,n),e=new Bs(t,t.j,e,void 0),e.K=2,e.v=Ji(kt(n)),n=!1,x.navigator&&x.navigator.sendBeacon&&(n=x.navigator.sendBeacon(e.v.toString(),"")),!n&&x.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vs(e)}Qu(t)}function tr(t){t.g&&(aa(t),t.g.cancel(),t.g=null)}function $u(t){tr(t),t.u&&(x.clearTimeout(t.u),t.u=null),Di(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&x.clearTimeout(t.m),t.m=null)}function nr(t){Ou(t.h)||t.m||(t.m=!0,hu(t.Ja,t),t.C=0)}function Ug(t,e){return Ru(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xs(xe(t.Ja,t,e),Wu(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=su(r),iu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Hu(this,i,e),n=kt(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),qs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ju(r)))+"&"+e:this.o&&ia(n,this.o,r)),ta(this.h,i),this.Ya&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",e),ce(n,"SID","null"),i.Z=!0,uo(i,n,null)):uo(i,n,e),this.G=2}}else this.G==3&&(t?El(this,t):this.i.length==0||Ou(this.h)||El(this))};function El(t,e){var n;e?n=e.m:n=t.U++;const s=kt(t.F);ce(s,"SID",t.I),ce(s,"RID",n),ce(s,"AID",t.T),qs(t,s),t.o&&t.s&&ia(s,t.o,t.s),n=new Bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Hu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ta(t.h,n),uo(n,s,e)}function qs(t,e){t.ia&&Ho(t.ia,function(n,s){ce(e,s,n)}),t.l&&Iu({},function(n,s){ce(e,s,n)})}function Hu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?xe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Lg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Ku(t){t.g||t.u||(t.Z=1,hu(t.Ia,t),t.A=0)}function oa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xs(xe(t.Ia,t),Wu(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,zu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xs(xe(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),tr(this),zu(this))};function aa(t){t.B!=null&&(x.clearTimeout(t.B),t.B=null)}function zu(t){t.g=new Bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=kt(t.sa);ce(e,"RID","rpc"),ce(e,"SID",t.I),ce(e,"CI",t.L?"0":"1"),ce(e,"AID",t.T),ce(e,"TYPE","xmlhttp"),qs(t,e),t.o&&t.s&&ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ji(kt(e)),n.s=null,n.P=!0,_u(n,t)}D.cb=function(){this.v!=null&&(this.v=null,tr(this),oa(this),ze(19))};function Di(t){t.v!=null&&(x.clearTimeout(t.v),t.v=null)}function Gu(t,e){var n=null;if(t.g==e){Di(t),aa(t),t.g=null;var s=2}else if(fo(t.h,e))n=e.D,Lu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Wi(),De(s,new vu(s,n)),nr(t)}else Ku(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Ug(t,e)||s==2&&oa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:an(t,5);break;case 4:an(t,10);break;case 3:an(t,6);break;default:an(t,2)}}}function Wu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function an(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=xe(t.kb,t);n||(n=new cn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||Ai(n,"https"),Ji(n)),Mg(n.toString(),s)}else ze(2);t.G=0,t.l&&t.l.va(e),Qu(t),$u(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Qu(t){if(t.G=0,t.la=[],t.l){const e=Mu(t.h);(e.length!=0||t.i.length!=0)&&(ul(t.la,e),ul(t.la,t.i),t.h.i.length=0,qo(t.i),t.i.length=0),t.l.ua()}}function Yu(t,e,n){var s=n instanceof cn?kt(n):new cn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ki(s,s.m);else{var i=x.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new cn(null,void 0);s&&Ai(r,s),e&&(r.g=e),i&&ki(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ce(s,n,e),ce(s,"VER",t.ma),qs(t,s),s}function Xu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ue(new Us({jb:!0})):new ue(t.ra),e.Ka(t.H),e}function Ju(){}D=Ju.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Pi(){if(Bn&&!(10<=Number(sg)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Se.call(this),this.g=new qu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wn(this)}Ne(et,Se);et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Yu(t,null,t.V),nr(t)};et.prototype.close=function(){ra(this.g)};et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qo(t),t=n);e.i.push(new Ng(e.ab++,t)),e.G==3&&nr(e)};et.prototype.M=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,et.X.M.call(this)};function Zu(t){Zo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ne(Zu,Zo);function eh(){ea.call(this),this.status=1}Ne(eh,ea);function Wn(t){this.g=t}Ne(Wn,Ju);Wn.prototype.xa=function(){De(this.g,"a")};Wn.prototype.wa=function(t){De(this.g,new Zu(t))};Wn.prototype.va=function(t){De(this.g,new eh)};Wn.prototype.ua=function(){De(this.g,"b")};Pi.prototype.createWebChannel=Pi.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;Qi.NO_ERROR=0;Qi.TIMEOUT=8;Qi.HTTP_ERROR=6;wu.COMPLETE="complete";bu.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";Se.prototype.listen=Se.prototype.N;ue.prototype.listenOnce=ue.prototype.O;ue.prototype.getLastError=ue.prototype.Oa;ue.prototype.getLastErrorCode=ue.prototype.Ea;ue.prototype.getStatus=ue.prototype.aa;ue.prototype.getResponseJson=ue.prototype.Sa;ue.prototype.getResponseText=ue.prototype.fa;ue.prototype.send=ue.prototype.da;ue.prototype.setWithCredentials=ue.prototype.Ka;var jg=function(){return new Pi},qg=function(){return Wi()},Vr=Qi,$g=wu,Hg=wn,_l={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Kg=Us,ai=bu,zg=ue;const Tl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pn=new Hc("@firebase/firestore");function Cl(){return pn.logLevel}function P(t,...e){if(pn.logLevel<=X.DEBUG){const n=e.map(la);pn.debug(`Firestore (${Qn}): ${t}`,...n)}}function Dt(t,...e){if(pn.logLevel<=X.ERROR){const n=e.map(la);pn.error(`Firestore (${Qn}): ${t}`,...n)}}function po(t,...e){if(pn.logLevel<=X.WARN){const n=e.map(la);pn.warn(`Firestore (${Qn}): ${t}`,...n)}}function la(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+t;throw Dt(e),new Error(e)}function ae(t,e){t||M()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class Wg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Qg{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ft)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ae(typeof s.accessToken=="string"),new th(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Oe(e)}}class Yg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Xg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Yg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zg{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.A=n.token,new Jg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=em(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Vn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new be(0,0))}static max(){return new F(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&M(),s===void 0?s=e.length-n:s>e.length-n&&M(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends Cs{construct(e,n,s){return new le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const tm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Cs{construct(e,n,s){return new Le(e,n,s)}static isValidIdentifier(e){return tm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Le(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(n)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(le.fromString(e))}static fromName(e){return new O(le.fromString(e).popFirst(5))}static empty(){return new O(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new le(e.slice()))}}function nm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new qt(i,O.empty(),e)}function sm(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(F.min(),O.empty(),-1)}static max(){return new qt(F.max(),O.empty(),-1)}}function im(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function $s(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==rm)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ca{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ca.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){return t==null}function Ni(t){return t===0&&1/t==-1/0}function lm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ni(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new cm("Invalid base64 string: "+i):i}}(e);return new Be(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const um=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(ae(!!t),typeof t=="string"){let e=0;const n=um.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rh(t){const e=t.mapValue.fields.__previous_value__;return ih(e)?rh(e):e}function Is(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ih(t)?4:hm(t)?9007199254740991:10:M()}function wt(t,e){if(t===e)return!0;const n=gn(t);if(n!==gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$t(s.timestampValue),o=$t(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ge(s.doubleValue),o=ge(i.doubleValue);return r===o?Ni(r)===Ni(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Vn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Sl(r)!==Sl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(t,e);default:return M()}}function As(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function jn(t,e){if(t===e)return 0;const n=gn(t),s=gn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ge(i.integerValue||i.doubleValue),a=ge(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Il(t.timestampValue,e.timestampValue);case 4:return Il(Is(t),Is(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Un(i),a=Un(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=J(o[l],a[l]);if(c!==0)return c}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=J(ge(i.latitude),ge(r.latitude));return o!==0?o:J(ge(i.longitude),ge(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=jn(o[l],a[l]);if(c)return c}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===li.mapValue&&r===li.mapValue)return 0;if(i===li.mapValue)return 1;if(r===li.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=J(a[u],c[u]);if(h!==0)return h;const d=jn(o[a[u]],l[c[u]]);if(d!==0)return d}return J(a.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function Il(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=$t(t),s=$t(e),i=J(n.seconds,s.seconds);return i!==0?i:J(n.nanos,s.nanos)}function qn(t){return go(t)}function go(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=$t(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Un(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=go(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${go(s.fields[a])}`;return r+"}"}(t.mapValue):M();var e,n}function Al(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mo(t){return!!t&&"integerValue"in t}function ua(t){return!!t&&"arrayValue"in t}function kl(t){return!!t&&"nullValue"in t}function Dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pi(t){return!!t&&"mapValue"in t}function us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=us(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Oi{constructor(e,n){this.position=e,this.inclusive=n}}function Pl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=jn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class oh{}class me extends oh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new fm(e,n,s):n==="array-contains"?new mm(e,s):n==="in"?new ym(e,s):n==="not-in"?new vm(e,s):n==="array-contains-any"?new wm(e,s):new me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pm(e,s):new gm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jn(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(jn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ht extends oh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new ht(e,n)}matches(e){return ah(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ah(t){return t.op==="and"}function lh(t){return dm(t)&&ah(t)}function dm(t){for(const e of t.filters)if(e instanceof ht)return!1;return!0}function yo(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+qn(t.value);if(lh(t))return t.filters.map(e=>yo(e)).join(",");{const e=t.filters.map(n=>yo(n)).join(",");return`${t.op}(${e})`}}function ch(t,e){return t instanceof me?function(n,s){return s instanceof me&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(t,e):t instanceof ht?function(n,s){return s instanceof ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ch(r,s.filters[o]),!0):!1}(t,e):void M()}function uh(t){return t instanceof me?function(e){return`${e.field.canonicalString()} ${e.op} ${qn(e.value)}`}(t):t instanceof ht?function(e){return e.op.toString()+" {"+e.getFilters().map(uh).join(" ,")+"}"}(t):"Filter"}class fm extends me{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class pm extends me{constructor(e,n){super(e,"in",n),this.keys=hh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gm extends me{constructor(e,n){super(e,"not-in",n),this.keys=hh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class mm extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ua(n)&&As(n.arrayValue,this.value)}}class ym extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class vm extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class wm extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ua(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
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
 */class Nn{constructor(e,n="asc"){this.field=e,this.dir=n}}function bm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ae.RED,this.left=i??Ae.EMPTY,this.right=r??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ol(this.data.getIterator())}getIteratorFrom(e){return new Ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Je([])}unionWith(e){let n=new Ee(Le.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Je(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(n)}setAll(e){let n=Le.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=us(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());pi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];pi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ye(us(this.value))}}function dh(t){const e=[];return bn(t.fields,(n,s)=>{const i=new Le([n]);if(pi(s)){const r=dh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,F.min(),F.min(),F.min(),Ye.empty(),0)}static newFoundDocument(e,n,s,i){return new Re(e,1,n,F.min(),s,i,0)}static newNoDocument(e,n){return new Re(e,2,n,F.min(),F.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Re(e,3,n,F.min(),F.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Em{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Rl(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Em(t,e,n,s,i,r,o)}function ha(t){const e=B(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),sr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qn(s)).join(",")),e._t=n}return e._t}function da(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ch(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nl(t.startAt,e.startAt)&&Nl(t.endAt,e.endAt)}function vo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function _m(t,e,n,s,i,r,o,a){return new Yn(t,e,n,s,i,r,o,a)}function fa(t){return new Yn(t)}function Ll(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ir(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function fh(t){return t.collectionGroup!==null}function On(t){const e=B(t);if(e.wt===null){e.wt=[];const n=ir(e),s=pa(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Nn(n)),e.wt.push(new Nn(Le.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Nn(Le.keyField(),r))}}}return e.wt}function Pt(t){const e=B(t);if(!e.gt)if(e.limitType==="F")e.gt=Rl(e.path,e.collectionGroup,On(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of On(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Nn(r.field,o))}const s=e.endAt?new Oi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oi(e.startAt.position,e.startAt.inclusive):null;e.gt=Rl(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function wo(t,e){e.getFirstInequalityField(),ir(t);const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bo(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rr(t,e){return da(Pt(t),Pt(e))&&t.limitType===e.limitType}function ph(t){return`${ha(Pt(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>uh(s)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qn(s)).join(",")),`Target(${n})`}(Pt(t))}; limitType=${t.limitType})`}function or(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of On(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Pl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,On(n),s)||n.endAt&&!function(i,r,o){const a=Pl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,On(n),s))}(t,e)}function Tm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gh(t){return(e,n)=>{let s=!1;for(const i of On(t)){const r=Cm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Cm(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?jn(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(e)?"-0":e}}function yh(t){return{integerValue:""+t}}function Sm(t,e){return lm(e)?yh(e):mh(t,e)}/**
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
 */class ar{constructor(){this._=void 0}}function Im(t,e,n){return t instanceof Ri?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ks?wh(t,e):t instanceof Ds?bh(t,e):function(s,i){const r=vh(s,i),o=Ml(r)+Ml(s.It);return mo(r)&&mo(s.It)?yh(o):mh(s.Tt,o)}(t,e)}function Am(t,e,n){return t instanceof ks?wh(t,e):t instanceof Ds?bh(t,e):n}function vh(t,e){return t instanceof Li?mo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ri extends ar{}class ks extends ar{constructor(e){super(),this.elements=e}}function wh(t,e){const n=Eh(e);for(const s of t.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ds extends ar{constructor(e){super(),this.elements=e}}function bh(t,e){let n=Eh(e);for(const s of t.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class Li extends ar{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ml(t){return ge(t.integerValue||t.doubleValue)}function Eh(t){return ua(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function km(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Ds&&s instanceof Ds?Vn(n.elements,s.elements,wt):n instanceof Li&&s instanceof Li?wt(n.It,s.It):n instanceof Ri&&s instanceof Ri}(t.transform,e.transform)}class Dm{constructor(e,n){this.version=e,this.transformResults=n}}class st{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new st}static exists(e){return new st(void 0,e)}static updateTime(e){return new st(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lr{}function _h(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ga(t.key,st.none()):new Ks(t.key,t.data,st.none());{const n=t.data,s=Ye.empty();let i=new Ee(Le.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xt(t.key,s,new Je(i.toArray()),st.none())}}function Pm(t,e,n){t instanceof Ks?function(s,i,r){const o=s.value.clone(),a=Fl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xt?function(s,i,r){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Fl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Th(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function hs(t,e,n,s){return t instanceof Ks?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=i.value.clone(),c=Bl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xt?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=Bl(i.fieldTransforms,a,r),c=r.data;return c.setAll(Th(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return gi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Nm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=vh(s.transform,i||null);r!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,r))}return n||null}function xl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vn(n,s,(i,r)=>km(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ks extends lr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xt extends lr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Th(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Fl(t,e,n){const s=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Am(o,a,n[i]))}return s}function Bl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Im(r,o,e))}return s}class ga extends lr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Om extends lr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var pe,H;function Lm(t){switch(t){default:return M();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ch(t){if(t===void 0)return Dt("GRPC error has no .code"),b.UNKNOWN;switch(t){case pe.OK:return b.OK;case pe.CANCELLED:return b.CANCELLED;case pe.UNKNOWN:return b.UNKNOWN;case pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case pe.INTERNAL:return b.INTERNAL;case pe.UNAVAILABLE:return b.UNAVAILABLE;case pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case pe.NOT_FOUND:return b.NOT_FOUND;case pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case pe.ABORTED:return b.ABORTED;case pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case pe.DATA_LOSS:return b.DATA_LOSS;default:return M()}}(H=pe||(pe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return sh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new _e(O.comparator);function Nt(){return Mm}const Sh=new _e(O.comparator);function os(...t){let e=Sh;for(const n of t)e=e.insert(n.key,n);return e}function Ih(t){let e=Sh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ln(){return ds()}function Ah(){return ds()}function ds(){return new Xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const xm=new _e(O.comparator),Fm=new Ee(O.comparator);function $(...t){let e=Fm;for(const n of t)e=e.add(n);return e}const Bm=new Ee(J);function kh(){return Bm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new cr(F.min(),i,kh(),Nt(),$())}}class zs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new zs(s,n,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Dh{constructor(e,n){this.targetId=e,this.Rt=n}}class Ph{constructor(e,n,s=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Vl{constructor(){this.bt=0,this.vt=jl(),this.Pt=Be.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=$(),n=$(),s=$();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:M()}}),new zs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=jl()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Vm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Nt(),this.Kt=Ul(),this.Gt=new Ee(J)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(vo(r))if(s===0){const o=new O(r.path);this.zt(n,o,Re.newNoDocument(o,F.min()))}else ae(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&vo(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Re.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=$();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new cr(e,n,this.Gt,this.Ut,s);return this.Ut=Nt(),this.Kt=Ul(),this.Gt=new Ee(J),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Vl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(J),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Vl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ul(){return new _e(O.comparator)}function jl(){return new _e(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qm=(()=>({and:"AND",or:"OR"}))();class $m{constructor(e,n){this.databaseId=e,this.yt=n}}function Mi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Hm(t,e){return Mi(t,e.toTimestamp())}function yt(t){return ae(!!t),F.fromTimestamp(function(e){const n=$t(e);return new be(n.seconds,n.nanos)}(t))}function ma(t,e){return function(n){return new le(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Oh(t){const e=le.fromString(t);return ae(xh(e)),e}function _o(t,e){return ma(t.databaseId,e.path)}function Ur(t,e){const n=Oh(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Rh(n))}function To(t,e){return ma(t.databaseId,e)}function Km(t){const e=Oh(t);return e.length===4?le.emptyPath():Rh(e)}function Co(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rh(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ql(t,e,n){return{name:_o(t,e),fields:n.value.mapValue.fields}}function zm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(ae(c===void 0||typeof c=="string"),Be.fromBase64String(c||"")):(ae(c===void 0||c instanceof Uint8Array),Be.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:Ch(l.code);return new A(c,l.message||"")}(o);n=new Ph(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ur(t,s.document.name),r=yt(s.document.updateTime),o=s.document.createTime?yt(s.document.createTime):F.min(),a=new Ye({mapValue:{fields:s.document.fields}}),l=Re.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new mi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ur(t,s.document),r=s.readTime?yt(s.readTime):F.min(),o=Re.newNoDocument(i,r),a=s.removedTargetIds||[];n=new mi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ur(t,s.document),r=s.removedTargetIds||[];n=new mi([],r,i,null)}else{if(!("filter"in e))return M();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Rm(i),o=s.targetId;n=new Dh(o,r)}}return n}function Gm(t,e){let n;if(e instanceof Ks)n={update:ql(t,e.key,e.value)};else if(e instanceof ga)n={delete:_o(t,e.key)};else if(e instanceof Xt)n={update:ql(t,e.key,e.data),updateMask:ny(e.fieldMask)};else{if(!(e instanceof Om))return M();n={verify:_o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ri)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ds)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Li)return{fieldPath:r.field.canonicalString(),increment:o.It};throw M()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Hm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function Wm(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?yt(s.updateTime):yt(i);return r.isEqual(F.min())&&(r=yt(i)),new Dm(r,s.transformResults||[])}(n,e))):[]}function Qm(t,e){return{documents:[To(t,e.path)]}}function Ym(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=To(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=To(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Mh(ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:An(u.field),direction:Zm(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||sr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Xm(t){let e=Km(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ae(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Lh(u);return h instanceof ht&&lh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Nn(kn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Oi(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Oi(d,h)}(n.endAt)),_m(e,i,o,r,a,"F",l,c)}function Jm(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kn(e.unaryFilter.field);return me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(e.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kn(e.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=kn(e.unaryFilter.field);return me.create(r,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return me.create(kn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ht.create(e.compositeFilter.filters.map(n=>Lh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function Zm(t){return Um[t]}function ey(t){return jm[t]}function ty(t){return qm[t]}function An(t){return{fieldPath:t.canonicalString()}}function kn(t){return Le.fromServerFormat(t.fieldPath)}function Mh(t){return t instanceof me?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NAN"}};if(kl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NAN"}};if(kl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(e.field),op:ey(e.op),value:e.value}}}(t):t instanceof ht?function(e){const n=e.getFilters().map(s=>Mh(s));return n.length===1?n[0]:{compositeFilter:{op:ty(e.op),filters:n}}}(t):M()}function ny(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Pm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ah();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=_h(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(n,s)=>xl(n,s))&&Vn(this.baseMutations,e.baseMutations,(n,s)=>xl(n,s))}}class ya{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ae(e.mutations.length===s.length);let i=xm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ya(e,n,s,i)}}/**
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
 */class un{constructor(e,n,s,i,r=F.min(),o=F.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.oe=e}}function oy(t){const e=Xm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
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
 */class ay{constructor(){this.Ze=new ly}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(qt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class ly{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ee(le.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ee(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new $n(0)}static Sn(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.changes=new Xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&hs(s.mutation,i,Je.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,$()).next(()=>s))}getLocalViewOfDocuments(e,n,s=$()){const i=ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=os();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,$()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Nt();const o=ds(),a=ds();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Xt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),hs(u.mutation,c,u.mutation.getFieldMask(),be.now())):o.set(c.key,Je.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new uy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ds();let i=new _e((o,a)=>o-a),r=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Je.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||$()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Ah();u.forEach(d=>{if(!r.has(d)){const f=_h(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(ln());let a=-1,l=r;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,$())).next(u=>({batchId:a,changes:Ih(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let i=os();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=os();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Yn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Re.newInvalidDocument(c)))});let o=os();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&hs(c.mutation,l,Je.empty(),be.now()),or(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:oy(s.bundledQuery),readTime:yt(s.readTime)}}(n)),E.resolve()}}/**
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
 */class fy{constructor(){this.overlays=new _e(O.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ln();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=ln(),r=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new _e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ln(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ln(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new iy(n,s));let r=this.ss.get(n);r===void 0&&(r=$(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.rs=new Ee(Te.os),this.us=new Ee(Te.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Te(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Te(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new O(new le([])),s=new Te(n,e),i=new Te(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new le([])),s=new Te(n,e),i=new Te(n,e+1);let r=$();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Te(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||J(e.gs,n.gs)}static cs(e,n){return J(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(Te.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sy(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Te(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(J);return n.forEach(i=>{const r=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const o=new Te(new O(r),0);let a=new Ee(J);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new Te(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Te(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.Rs=e,this.docs=new _e(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Re.newInvalidDocument(n))}getEntries(e,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Re.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Nt();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||im(sm(u),s)<=0||(i.has(u.key)||or(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){M()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new my(this)}getSize(e){return E.resolve(this.size)}}class my extends cy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.persistence=e,this.vs=new Xn(n=>ha(n),da),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new va,this.targetCount=0,this.Ss=$n.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ca(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new yy(this),this.indexManager=new ay,this.remoteDocumentCache=function(s){return new gy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new ry(n),this.Os=new dy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new py(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){P("MemoryPersistence","Starting transaction:",e);const i=new wy(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class wy extends om{constructor(e){super(),this.currentSequenceNumber=e}}class wa{constructor(e){this.persistence=e,this.Bs=new va,this.Ls=null}static qs(e){return new wa(e)}get Us(){if(this.Ls)return this.Ls;throw M()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,F.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=$(),i=$();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ba(e,n.fromCache,s,i)}}/**
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
 */class by{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Ll(n))return E.resolve(null);let s=Pt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bo(n,null,"F"),s=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=$(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,bo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Ll(n)||i.isEqual(F.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(Cl()<=X.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Eo(n)),this.qi(e,o,n,nm(i,-1)))})}Bi(e,n){let s=new Ee(gh(e));return n.forEach((i,r)=>{or(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return Cl()<=X.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",Eo(n)),this.Oi.getDocumentsMatchingQuery(e,n,qt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new _e(J),this.Gi=new Xn(r=>ha(r),da),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function _y(t,e,n,s){return new Ey(t,e,n,s)}async function Fh(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=$();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Ty(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const m=l.docVersions.get(f);ae(m!==null),p.version.compareTo(m)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=$();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Bh(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Cy(t,e){const n=B(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Be.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,m,w){return p.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Ns.updateTargetData(r,f))});let l=Nt(),c=$();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Sy(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(F.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Sy(t,e,n){let s=$(),i=$();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Nt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Iy(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ay(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new un(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function So(t,e,n){const s=B(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hs(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function $l(t,e,n){const s=B(t);let i=F.min(),r=$();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=B(a),h=u.Gi.get(c);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?r:$())).next(a=>(ky(s,Tm(e),a),{documents:a,Yi:r})))}function ky(t,e,n){let s=t.Qi.get(e)||F.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Hl{constructor(){this.activeTargetIds=kh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dy{constructor(){this.Ur=new Hl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Hl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ry extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);P("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(P("RestConnection","Received: ",l),l),l=>{throw po("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Ny[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new zg;a.setWithCredentials(!0),a.listenOnce($g.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const c=a.getResponseJson();P("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Vr.TIMEOUT:P("Connection",'RPC "'+e+'" timed out'),o(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const u=a.getStatus();if(P("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(b.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{P("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=jg(),o=qg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Kg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");P("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new Oy({Yr:p=>{h?P("Connection","Not sending because WebChannel is closed:",p):(u||(P("Connection","Opening WebChannel transport."),c.open(),u=!0),P("Connection","WebChannel sending:",p),c.send(p))},Zr:()=>c.close()}),f=(p,m,w)=>{p.listen(m,k=>{try{w(k)}catch(S){setTimeout(()=>{throw S},0)}})};return f(c,ai.EventType.OPEN,()=>{h||P("Connection","WebChannel transport opened.")}),f(c,ai.EventType.CLOSE,()=>{h||(h=!0,P("Connection","WebChannel transport closed"),d.oo())}),f(c,ai.EventType.ERROR,p=>{h||(h=!0,po("Connection","WebChannel transport errored:",p),d.oo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),f(c,ai.EventType.MESSAGE,p=>{var m;if(!h){const w=p.data[0];ae(!!w);const k=w,S=k.error||((m=k[0])===null||m===void 0?void 0:m.error);if(S){P("Connection","WebChannel received error:",S);const N=S.status;let I=function(R){const U=pe[R];if(U!==void 0)return Ch(U)}(N),L=S.message;I===void 0&&(I=b.INTERNAL,L="Unknown error status: "+N+" with message "+S.message),h=!0,d.oo(new A(I,L)),c.close()}else P("Connection","WebChannel received:",w),d.uo(w)}}),f(o,Hg.STAT_EVENT,p=>{p.stat===_l.PROXY?P("Connection","Detected buffering proxy"):p.stat===_l.NOPROXY&&P("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return new $m(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Vh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ly extends Uh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=zm(this.Tt,e),s=function(i){if(!("targetChange"in i))return F.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?F.min():r.readTime?yt(r.readTime):F.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Co(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=vo(a)?{documents:Qm(i,a)}:{query:Ym(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Nh(i,r.resumeToken):r.snapshotVersion.compareTo(F.min())>0&&(o.readTime=Mi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Jm(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Co(this.Tt),n.removeTarget=e,this.qo(n)}}class My extends Uh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Wm(e.writeResults,e.commitTime),s=yt(e.commitTime);return this.listener.eu(s,n)}return ae(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Co(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Gm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Dt(n),this.cu=!1):P("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{En(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=B(a);l.mu.add(4),await Gs(l),l.pu.set("Unknown"),l.mu.delete(4),await hr(l)}(this))})}),this.pu=new Fy(s,i)}}async function hr(t){if(En(t))for(const e of t.gu)await e(!0)}async function Gs(t){for(const e of t.gu)await e(!1)}function jh(t,e){const n=B(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ta(n)?_a(n):Jn(n).Mo()&&Ea(n,e))}function qh(t,e){const n=B(t),s=Jn(n);n.wu.delete(e),s.Mo()&&$h(n,e),n.wu.size===0&&(s.Mo()?s.Bo():En(n)&&n.pu.set("Unknown"))}function Ea(t,e){t.Iu.Ft(e.targetId),Jn(t).Jo(e)}function $h(t,e){t.Iu.Ft(e),Jn(t).Yo(e)}function _a(t){t.Iu=new Vm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Jn(t).start(),t.pu.au()}function Ta(t){return En(t)&&!Jn(t).Oo()&&t.wu.size>0}function En(t){return B(t).mu.size===0}function Hh(t){t.Iu=void 0}async function Vy(t){t.wu.forEach((e,n)=>{Ea(t,e)})}async function Uy(t,e){Hh(t),Ta(t)?(t.pu.fu(e),_a(t)):t.pu.set("Unknown")}async function jy(t,e,n){if(t.pu.set("Online"),e instanceof Ph&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xi(t,s)}else if(e instanceof mi?t.Iu.Qt(e):e instanceof Dh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(F.min()))try{const s=await Bh(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),$h(i,a);const c=new un(l.target,a,1,l.sequenceNumber);Ea(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){P("RemoteStore","Failed to raise snapshot:",s),await xi(t,s)}}async function xi(t,e,n){if(!Hs(e))throw e;t.mu.add(1),await Gs(t),t.pu.set("Offline"),n||(n=()=>Bh(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await hr(t)})}function Kh(t,e){return e().catch(n=>xi(t,n,e))}async function dr(t){const e=B(t),n=Ht(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;qy(e);)try{const i=await Iy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,$y(e,i)}catch(i){await xi(e,i)}zh(e)&&Gh(e)}function qy(t){return En(t)&&t._u.length<10}function $y(t,e){t._u.push(e);const n=Ht(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function zh(t){return En(t)&&!Ht(t).Oo()&&t._u.length>0}function Gh(t){Ht(t).start()}async function Hy(t){Ht(t).su()}async function Ky(t){const e=Ht(t);for(const n of t._u)e.tu(n.mutations)}async function zy(t,e,n){const s=t._u.shift(),i=ya.from(s,e,n);await Kh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dr(t)}async function Gy(t,e){e&&Ht(t).Xo&&await async function(n,s){if(i=s.code,Lm(i)&&i!==b.ABORTED){const r=n._u.shift();Ht(n).$o(),await Kh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await dr(n)}var i}(t,e),zh(t)&&Gh(t)}async function zl(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const s=En(n);n.mu.add(3),await Gs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await hr(n)}async function Wy(t,e){const n=B(t);e?(n.mu.delete(2),await hr(n)):e||(n.mu.add(2),await Gs(n),n.pu.set("Unknown"))}function Jn(t){return t.Tu||(t.Tu=function(e,n,s){const i=B(e);return i.ru(),new Ly(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Vy.bind(null,t),no:Uy.bind(null,t),Ho:jy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ta(t)?_a(t):t.pu.set("Unknown")):(await t.Tu.stop(),Hh(t))})),t.Tu}function Ht(t){return t.Eu||(t.Eu=function(e,n,s){const i=B(e);return i.ru(),new My(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Hy.bind(null,t),no:Gy.bind(null,t),nu:Ky.bind(null,t),eu:zy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await dr(t)):(await t.Eu.stop(),t._u.length>0&&(P("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ca(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(t,e){if(Dt("AsyncQueue",`${e}: ${t}`),Hs(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=os(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Au=new _e(O.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):M():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hn(e,n,Rn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.bu=void 0,this.listeners=[]}}class Yy{constructor(){this.queries=new Xn(e=>ph(e),rr),this.onlineState="Unknown",this.vu=new Set}}async function Wh(t,e){const n=B(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Qy),i)try{r.bu=await n.onListen(s)}catch(o){const a=Sa(o,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ia(n)}async function Qh(t,e){const n=B(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xy(t,e){const n=B(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ia(n)}function Jy(t,e,n){const s=B(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ia(t){t.vu.forEach(e=>{e.next()})}class Yh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Hn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.key=e}}class Jh{constructor(e){this.key=e}}class Zy{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=$(),this.mutatedKeys=$(),this.ju=gh(e),this.zu=new Rn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Gl,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=or(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?p!==m&&(s.track({type:3,doc:f}),w=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),w=!0,(l&&this.ju(f,l)>0||c&&this.ju(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return f(h)-f(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new Hn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Gl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=$(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new Jh(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Xh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=$();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Hn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class ev{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class tv{constructor(e){this.key=e,this.ic=!1}}class nv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Xn(a=>ph(a),rr),this.uc=new Map,this.cc=new Set,this.ac=new _e(O.comparator),this.hc=new Map,this.lc=new va,this.fc={},this.dc=new Map,this._c=$n.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function sv(t,e){const n=fv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Ay(n.localStore,Pt(e));n.isPrimaryClient&&jh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await iv(n,e,s,a==="current",o.resumeToken)}return i}async function iv(t,e,n,s,i){t.mc=(h,d,f)=>async function(p,m,w,k){let S=m.view.Hu(w);S.Li&&(S=await $l(p.localStore,m.query,!1).then(({documents:L})=>m.view.Hu(L,S)));const N=k&&k.targetChanges.get(m.targetId),I=m.view.applyChanges(S,p.isPrimaryClient,N);return Ql(p,m.targetId,I.tc),I.snapshot}(t,h,d,f);const r=await $l(t.localStore,e,!0),o=new Zy(e,r.Yi),a=o.Hu(r.documents),l=zs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ql(t,n,c.tc);const u=new ev(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function rv(t,e){const n=B(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!rr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await So(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),qh(n.remoteStore,s.targetId),Io(n,s.targetId)}).catch($s)):(Io(n,s.targetId),await So(n.localStore,s.targetId,!0))}async function ov(t,e,n){const s=pv(t);try{const i=await function(r,o){const a=B(r),l=be.now(),c=o.reduce((d,f)=>d.add(f.key),$());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Nt(),p=$();return a.ji.getEntries(d,c).next(m=>{f=m,f.forEach((w,k)=>{k.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const w=[];for(const k of o){const S=Nm(k,u.get(k.key).overlayedDocument);S!=null&&w.push(new Xt(k.key,S,dh(S.value.mapValue),st.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(m=>{h=m;const w=m.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,m.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Ih(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new _e(J)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Ws(s,i.changes),await dr(s.remoteStore)}catch(i){const r=Sa(i,"Failed to persist write");n.reject(r)}}async function Zh(t,e){const n=B(t);try{const s=await Cy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ae(o.ic):i.removedDocuments.size>0&&(ae(o.ic),o.ic=!1))}),await Ws(n,s,e)}catch(s){await $s(s)}}function Wl(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=B(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&Ia(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function av(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new _e(O.comparator);o=o.insert(r,Re.newNoDocument(r,F.min()));const a=$().add(r),l=new cr(F.min(),new Map,new Ee(J),o,a);await Zh(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),Aa(s)}else await So(s.localStore,e,!1).then(()=>Io(s,e,n)).catch($s)}async function lv(t,e){const n=B(t),s=e.batch.batchId;try{const i=await Ty(n.localStore,e);td(n,s,null),ed(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ws(n,i)}catch(i){await $s(i)}}async function cv(t,e,n){const s=B(t);try{const i=await function(r,o){const a=B(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ae(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);td(s,e,n),ed(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ws(s,i)}catch(i){await $s(i)}}function ed(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function td(t,e,n){const s=B(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||nd(t,s)})}function nd(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(qh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Aa(t))}function Ql(t,e,n){for(const s of n)s instanceof Xh?(t.lc.addReference(s.key,e),uv(t,s)):s instanceof Jh?(P("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||nd(t,s.key)):M()}function uv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(P("SyncEngine","New document in limbo: "+n),t.cc.add(s),Aa(t))}function Aa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(le.fromString(e)),s=t._c.next();t.hc.set(s,new tv(n)),t.ac=t.ac.insert(n,s),jh(t.remoteStore,new un(Pt(fa(n.path)),s,2,ca.at))}}async function Ws(t,e,n){const s=B(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ba.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=B(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,h=>E.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Hs(u))throw u;P("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(h,p)}}}(s.localStore,r))}async function hv(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const s=await Fh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ws(n,s.Wi)}}function dv(t,e){const n=B(t),s=n.hc.get(e);if(s&&s.ic)return $().add(s.key);{let i=$();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function fv(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=av.bind(null,e),e.rc.Ho=Xy.bind(null,e.eventManager),e.rc.gc=Jy.bind(null,e.eventManager),e}function pv(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cv.bind(null,e),e}class gv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ur(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return _y(this.persistence,new by,e.initialUser,this.Tt)}Tc(e){return new vy(wa.qs,this.Tt)}Ic(e){return new Dy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hv.bind(null,this.syncEngine),await Wy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Yy}createDatastore(e){const n=ur(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ry(i));var i;return function(r,o,a,l){return new xy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Wl(this.syncEngine,a,0),o=Kl.C()?new Kl:new Py,new By(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new nv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);P("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Gs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=nh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{P("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(P("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vv(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Fh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bv(t);P("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>zl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>zl(e.remoteStore,r)),t.onlineComponents=e}async function bv(t){return t.offlineComponents||(P("FirestoreClient","Using default OfflineComponentProvider"),await vv(t,new gv)),t.offlineComponents}async function id(t){return t.onlineComponents||(P("FirestoreClient","Using default OnlineComponentProvider"),await wv(t,new mv)),t.onlineComponents}function Ev(t){return id(t).then(e=>e.syncEngine)}async function Ao(t){const e=await id(t),n=e.eventManager;return n.onListen=sv.bind(null,e.syncEngine),n.onUnlisten=rv.bind(null,e.syncEngine),n}function _v(t,e,n={}){const s=new Ft;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new sd({next:h=>{r.enqueueAndForget(()=>Qh(i,u)),h.fromCache&&a.source==="server"?l.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Yh(o,c,{includeMetadataChanges:!0,Ou:!0});return Wh(i,u)}(await Ao(t),t.asyncQueue,e,n,s)),s.promise}const Yl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Tv(t,e,n,s){if(e===!0&&s===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xl(t){if(!O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jl(t){if(O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function it(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fr(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Tv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Gg;switch(n.type){case"gapi":const s=n.client;return new Xg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yl.get(e);n&&(P("ComponentProvider","Removing Datastore"),Yl.delete(e),n.terminate())}(this),Promise.resolve()}}function Cv(t,e,n,s={}){var i;const r=(t=it(t,pr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&po("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Oe.MOCK_USER;else{o=qc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Oe(l)}t._authCredentials=new Wg(new th(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Jt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class Bt extends Jt{constructor(e,n,s){super(e,n,fa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new O(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function nt(t,e,...n){if(t=ut(t),rd("collection","path",e),t instanceof pr){const s=le.fromString(e,...n);return Jl(s),new Bt(t,null,s)}{if(!(t instanceof Ge||t instanceof Bt))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return Jl(s),new Bt(t.firestore,null,s)}}function St(t,e,...n){if(t=ut(t),arguments.length===1&&(e=nh.R()),rd("doc","path",e),t instanceof pr){const s=le.fromString(e,...n);return Xl(s),new Ge(t,null,new O(s))}{if(!(t instanceof Ge||t instanceof Bt))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(le.fromString(e,...n));return Xl(s),new Ge(t.firestore,t instanceof Bt?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Vh(this,"async_queue_retry"),this.Hc=()=>{const n=jr();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ft;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Hs(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Ca.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&M()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function ec(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Kt extends pr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Sv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||od(this),this._firestoreClient.terminate()}}function Iv(t,e){const n=typeof t=="object"?t:Yc(),s=typeof t=="string"?t:e||"(default)",i=Gc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=jc("firestore");r&&Cv(i,...r)}return i}function ka(t){return t._firestoreClient||od(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function od(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new am(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Be.fromBase64String(e))}catch(n){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=/^__.*__$/;class kv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ks(e,this.data,n,this.fieldTransforms)}}class ad{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ld(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Na{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Fi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(ld(this.ra)&&Av.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Dv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ur(e)}wa(e,n,s,i=!1){return new Na({ra:e,methodName:n,_a:s,path:Le.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function mr(t){const e=t._freezeSettings(),n=ur(t._databaseId);return new Dv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function cd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Oa("Data must be an object, but it was:",o,s);const a=ud(s,o);let l,c;if(r.merge)l=new Je(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ko(e,h,n);if(!o.contains(d))throw new A(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dd(u,d)||u.push(d)}l=new Je(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new kv(new Ye(a),l,c)}class yr extends Da{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yr}}function Pv(t,e,n,s){const i=t.wa(1,e,n);Oa("Data must be an object, but it was:",i,s);const r=[],o=Ye.empty();bn(s,(l,c)=>{const u=Ra(e,l,n);c=ut(c);const h=i.ha(u);if(c instanceof yr)r.push(u);else{const d=Qs(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Je(r);return new ad(o,a,i.fieldTransforms)}function Nv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[ko(e,s,n)],l=[i];if(r.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ko(e,r[d])),l.push(r[d+1]);const c=[],u=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!dd(c,a[d])){const f=a[d];let p=l[d];p=ut(p);const m=o.ha(f);if(p instanceof yr)c.push(f);else{const w=Qs(p,m);w!=null&&(c.push(f),u.set(f,w))}}const h=new Je(c);return new ad(u,h,o.fieldTransforms)}function Ov(t,e,n,s=!1){return Qs(n,t.wa(s?4:3,e))}function Qs(t,e){if(hd(t=ut(t)))return Oa("Unsupported field value:",e,t),ud(t,e);if(t instanceof Da)return function(n,s){if(!ld(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Qs(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Sm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Mi(s.Tt,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mi(s.Tt,i)}}if(n instanceof Pa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:Nh(s.Tt,n._byteString)};if(n instanceof Ge){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ma(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${fr(n)}`)}(t,e)}function ud(t,e){const n={};return sh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(t,(s,i)=>{const r=Qs(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function hd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Pa||t instanceof Kn||t instanceof Ge||t instanceof Da)}function Oa(t,e,n){if(!hd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function ko(t,e,n){if((e=ut(e))instanceof gr)return e._internalPath;if(typeof e=="string")return Ra(t,e);throw Fi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Rv=new RegExp("[~\\*/\\[\\]]");function Ra(t,e,n){if(e.search(Rv)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gr(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new A(b.INVALID_ARGUMENT,a+t+l)}function dd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Lv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Lv extends fd{data(){return super.data()}}function vr(t,e){return typeof e=="string"?Ra(t,e):e instanceof gr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class gd extends La{}function fs(t,e,...n){let s=[];e instanceof La&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ma).length,o=i.filter(a=>a instanceof wr).length;if(r>1||r>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class wr extends gd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new wr(e,n,s)}_apply(e){const n=this._parse(e);return md(e._query,n),new Jt(e.firestore,e.converter,wo(e._query,n))}_parse(e){const n=mr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){nc(u,c);const d=[];for(const f of u)d.push(tc(a,i,f));h={arrayValue:{values:d}}}else h=tc(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||nc(u,c),h=Ov(o,r,u,c==="in"||c==="not-in");return me.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Do(t,e,n){const s=e,i=vr("where",t);return wr._create(i,s,n)}class Ma extends La{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ma(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)md(r,a),r=wo(r,a)}(e._query,n),new Jt(e.firestore,e.converter,wo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xa extends gd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Nn(i,r);return function(a,l){if(pa(a)===null){const c=ir(a);c!==null&&yd(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Jt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Yn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function qr(t,e="asc"){const n=e,s=vr("orderBy",t);return xa._create(s,n)}function tc(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fh(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(le.fromString(n));if(!O.isDocumentKey(s))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Al(t,new O(s))}if(n instanceof Ge)return Al(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fr(n)}.`)}function nc(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function md(t,e){if(e.isInequality()){const s=ir(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=pa(t);r!==null&&yd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function yd(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Mv{convertValue(e,n="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const s={};return bn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Pa(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=rh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=$t(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=le.fromString(e);ae(xh(s));const i=new Ss(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(n)||Dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wd extends fd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class yi extends wd{data(e={}){return super.data(e)}}class bd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new yi(this._firestore,this._userDataWriter,s.key,s,new as(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:xv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Fa extends Mv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Ed(t){t=it(t,Jt);const e=it(t.firestore,Kt),n=ka(e),s=new Fa(e);return pd(t._query),_v(n,t._query).then(i=>new bd(e,s,t,i))}function $r(t,e,n){t=it(t,Ge);const s=it(t.firestore,Kt),i=vd(t.converter,e,n);return br(s,[cd(mr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,st.none())])}function Ba(t,e,n,...s){t=it(t,Ge);const i=it(t.firestore,Kt),r=mr(i);let o;return o=typeof(e=ut(e))=="string"||e instanceof gr?Nv(r,"updateDoc",t._key,e,n,s):Pv(r,"updateDoc",t._key,e),br(i,[o.toMutation(t._key,st.exists(!0))])}function Po(t){return br(it(t.firestore,Kt),[new ga(t._key,st.none())])}function _d(t,e){const n=it(t.firestore,Kt),s=St(t),i=vd(t.converter,e);return br(n,[cd(mr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,st.exists(!1))]).then(()=>s)}function Hr(t,...e){var n,s,i;t=ut(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ec(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ec(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ge)c=it(t.firestore,Kt),u=fa(t._key.path),l={next:h=>{e[o]&&e[o](Fv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=it(t,Jt);c=it(h.firestore,Kt),u=h._query;const d=new Fa(c);l={next:f=>{e[o]&&e[o](new bd(c,d,h,f))},error:e[o+1],complete:e[o+2]},pd(t._query)}return function(h,d,f,p){const m=new sd(p),w=new Yh(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>Wh(await Ao(h),w)),()=>{m.Pc(),h.asyncQueue.enqueueAndForget(async()=>Qh(await Ao(h),w))}}(ka(c),u,a,l)}function br(t,e){return function(n,s){const i=new Ft;return n.asyncQueue.enqueueAndForget(async()=>ov(await Ev(n),s,i)),i.promise}(ka(t),e)}function Fv(t,e,n){const s=n.docs.get(e._key),i=new Fa(t);return new wd(t,i,e._key,s,new as(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Qn=n})(Wc),ys(new Fn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Kt(new Qg(n.getProvider("auth-internal")),new Zg(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xt(Tl,"3.8.4",t),xt(Tl,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="firebasestorage.googleapis.com",Bv="storageBucket",Vv=2*60*1e3,Uv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends vn{constructor(e,n,s=0){super(Kr(e),`Firebase Storage: ${n} (${Kr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bt||(bt={}));function Kr(t){return"storage/"+t}function jv(){const t="An unknown error occurred, please check the error payload for server response.";return new _t(bt.UNKNOWN,t)}function qv(){return new _t(bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $v(){return new _t(bt.CANCELED,"User canceled the upload/download.")}function Hv(t){return new _t(bt.INVALID_URL,"Invalid URL '"+t+"'.")}function Kv(t){return new _t(bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sc(t){return new _t(bt.INVALID_ARGUMENT,t)}function Cd(){return new _t(bt.APP_DELETED,"The Firebase app was deleted.")}function zv(t){return new _t(bt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(s.path==="")return s;throw Kv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=n===Td?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",k=new RegExp(`^https?://${m}/${i}/${w}`,"i"),N=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<N.length;I++){const L=N[I],R=L.regex.exec(e);if(R){const U=R[L.indices.bucket];let re=R[L.indices.path];re||(re=""),s=new ct(U,re),L.postModify(s);break}}if(s==null)throw Hv(e);return s}}class Gv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){r&&clearTimeout(r)}function f(w,...k){if(c){d();return}if(w){d(),u.call(null,w,...k);return}if(l()||o){d(),u.call(null,w,...k);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let p=!1;function m(w){p||(p=!0,d(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function Qv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){return t!==void 0}function ic(t,e,n,s){if(s<e)throw sc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw sc(`Invalid value for '${t}'. Expected ${n} or less.`)}function Xv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bi||(Bi={}));/**
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
 */class Zv{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ui(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Bi.NO_ERROR,l=r.getStatus();if(!a||Jv(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Bi.ABORT;s(!1,new ui(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ui(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Yv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=jv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Cd():$v();o(l)}else{const l=qv();o(l)}};this.canceled_?n(!1,new ui(!1,null,!0)):this.backoffId_=Wv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ui{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ew(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iw(t,e,n,s,i,r,o=!0){const a=Xv(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return nw(c,e),ew(c,n),tw(c,r),sw(c,s),new Zv(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vi{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vi(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ow(this._location.path)}get storage(){return this._service}get parent(){const e=rw(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zv(e)}}function rc(t,e){const n=e==null?void 0:e[Bv];return n==null?null:ct.makeFromBucketSpec(n,t)}function aw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:qc(i,t.app.options.projectId))}class lw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Td,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Vv,this._maxUploadRetryTime=Uv,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=rc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=rc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Gv(Cd());{const o=iw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const oc="@firebase/storage",ac="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="storage";function cw(t=Yc(),e){t=ut(t);const s=Gc(t,Sd).getImmediate({identifier:e}),i=jc("storage");return i&&uw(s,...i),s}function uw(t,e,n,s={}){aw(t,e,n,s)}function hw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new lw(n,s,i,e,Wc)}function dw(){ys(new Fn(Sd,hw,"PUBLIC").setMultipleInstances(!0)),xt(oc,ac,""),xt(oc,ac,"esm2017")}dw();const fw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Id=Qc(fw);cw(Id);const ke=Iv(Id);var pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},No={},gw={get exports(){return No},set exports(t){No=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(pw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),f=i("y",this.options),p=this.options.position=="left"?d:"-"+d,m=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+p+","+m+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(gw);const Ln=No,Ad="SweetAlert2:",mw=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Va=t=>t.charAt(0).toUpperCase()+t.slice(1),tt=t=>Array.prototype.slice.call(t),Xe=t=>{console.warn(`${Ad} ${typeof t=="object"?t.join(" "):t}`)},_n=t=>{console.error(`${Ad} ${t}`)},lc=[],yw=t=>{lc.includes(t)||(lc.push(t),Xe(t))},vw=(t,e)=>{yw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Er=t=>typeof t=="function"?t():t,Ua=t=>t&&typeof t.toPromise=="function",Ys=t=>Ua(t)?t.toPromise():Promise.resolve(t),ja=t=>t&&Promise.resolve(t)===t,Mn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ww=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],bw={},Ew=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],kd=t=>Object.prototype.hasOwnProperty.call(Mn,t),Dd=t=>ww.indexOf(t)!==-1,Oo=t=>bw[t],_w=t=>{kd(t)||Xe(`Unknown parameter "${t}"`)},Tw=t=>{Ew.includes(t)&&Xe(`The parameter "${t}" is incompatible with toasts`)},Cw=t=>{Oo(t)&&vw(t,Oo(t))},Sw=t=>{!t.backdrop&&t.allowOutsideClick&&Xe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)_w(e),t.toast&&Tw(e),Cw(e)},Iw="swal2-",Pd=t=>{const e={};for(const n in t)e[t[n]]=Iw+t[n];return e},g=Pd(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),ps=Pd(["success","warning","info","question","error"]),Ve=()=>document.body.querySelector(`.${g.container}`),Xs=t=>{const e=Ve();return e?e.querySelector(t):null},ot=t=>Xs(`.${t}`),Z=()=>ot(g.popup),Js=()=>ot(g.icon),Nd=()=>ot(g.title),Ui=()=>ot(g["html-container"]),Od=()=>ot(g.image),Rd=()=>ot(g["progress-steps"]),_r=()=>ot(g["validation-message"]),dt=()=>Xs(`.${g.actions} .${g.confirm}`),zt=()=>Xs(`.${g.actions} .${g.deny}`),Aw=()=>ot(g["input-label"]),Zn=()=>Xs(`.${g.loader}`),mn=()=>Xs(`.${g.actions} .${g.cancel}`),Zs=()=>ot(g.actions),Ld=()=>ot(g.footer),Tr=()=>ot(g["timer-progress-bar"]),qa=()=>ot(g.close),kw=`
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
`,$a=()=>{const t=tt(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=tt(Z().querySelectorAll(kw)).filter(n=>n.getAttribute("tabindex")!=="-1");return mw(t.concat(e)).filter(n=>Ze(n))},Ha=()=>It(document.body,g.shown)&&!It(document.body,g["toast-shown"])&&!It(document.body,g["no-backdrop"]),Cr=()=>Z()&&It(Z(),g.toast),Dw=()=>Z().hasAttribute("data-loading"),xn={previousBodyPadding:null},Me=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");tt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),tt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},It=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Pw=(t,e)=>{tt(t.classList).forEach(n=>{!Object.values(g).includes(n)&&!Object.values(ps).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},rt=(t,e,n)=>{if(Pw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Xe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);z(t,e.customClass[n])}},Ka=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${g.popup} > .${g[e]}`);case"checkbox":return t.querySelector(`.${g.popup} > .${g.checkbox} input`);case"radio":return t.querySelector(`.${g.popup} > .${g.radio} input:checked`)||t.querySelector(`.${g.popup} > .${g.radio} input:first-child`);case"range":return t.querySelector(`.${g.popup} > .${g.range} input`);default:return t.querySelector(`.${g.popup} > .${g.input}`)}},Md=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},xd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},z=(t,e)=>{xd(t,e,!0)},Et=(t,e)=>{xd(t,e,!1)},Rt=(t,e)=>{const n=tt(t.childNodes);for(let s=0;s<n.length;s++)if(It(n[s],e))return n[s]},gs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Pe=(t,e="flex")=>{t.style.display=e},Ue=t=>{t.style.display="none"},cc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Sr=(t,e,n)=>{e?Pe(t,n):Ue(t)},Ze=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Nw=()=>!Ze(dt())&&!Ze(zt())&&!Ze(mn()),uc=t=>t.scrollHeight>t.clientHeight,Fd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},za=(t,e=!1)=>{const n=Tr();Ze(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Ow=()=>{const t=Tr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Bd=()=>typeof window>"u"||typeof document>"u",Rw=100,V={},Lw=()=>{V.previousActiveElement&&V.previousActiveElement.focus?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},Mw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{Lw(),e()},Rw),window.scrollTo(n,s)}),xw=`
 <div aria-labelledby="${g.title}" aria-describedby="${g["html-container"]}" class="${g.popup}" tabindex="-1">
   <button type="button" class="${g.close}"></button>
   <ul class="${g["progress-steps"]}"></ul>
   <div class="${g.icon}"></div>
   <img class="${g.image}" />
   <h2 class="${g.title}" id="${g.title}"></h2>
   <div class="${g["html-container"]}" id="${g["html-container"]}"></div>
   <input class="${g.input}" />
   <input type="file" class="${g.file}" />
   <div class="${g.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${g.select}"></select>
   <div class="${g.radio}"></div>
   <label for="${g.checkbox}" class="${g.checkbox}">
     <input type="checkbox" />
     <span class="${g.label}"></span>
   </label>
   <textarea class="${g.textarea}"></textarea>
   <div class="${g["validation-message"]}" id="${g["validation-message"]}"></div>
   <div class="${g.actions}">
     <div class="${g.loader}"></div>
     <button type="button" class="${g.confirm}"></button>
     <button type="button" class="${g.deny}"></button>
     <button type="button" class="${g.cancel}"></button>
   </div>
   <div class="${g.footer}"></div>
   <div class="${g["timer-progress-bar-container"]}">
     <div class="${g["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Fw=()=>{const t=Ve();return t?(t.remove(),Et([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},tn=()=>{V.currentInstance.resetValidationMessage()},Bw=()=>{const t=Z(),e=Rt(t,g.input),n=Rt(t,g.file),s=t.querySelector(`.${g.range} input`),i=t.querySelector(`.${g.range} output`),r=Rt(t,g.select),o=t.querySelector(`.${g.checkbox} input`),a=Rt(t,g.textarea);e.oninput=tn,n.onchange=tn,r.onchange=tn,o.onchange=tn,a.oninput=tn,s.oninput=()=>{tn(),i.value=s.value},s.onchange=()=>{tn(),s.nextSibling.value=s.value}},Vw=t=>typeof t=="string"?document.querySelector(t):t,Uw=t=>{const e=Z();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},jw=t=>{window.getComputedStyle(t).direction==="rtl"&&z(Ve(),g.rtl)},qw=t=>{const e=Fw();if(Bd()){_n("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=g.container,e&&z(n,g["no-transition"]),Me(n,xw);const s=Vw(t.target);s.appendChild(n),Uw(t),jw(s),Bw()},Ga=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?$w(t,e):t&&Me(e,t)},$w=(t,e)=>{t.jquery?Hw(e,t):Me(e,t.toString())},Hw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ps=(()=>{if(Bd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Kw=()=>{const t=document.createElement("div");t.className=g["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},zw=(t,e)=>{const n=Zs(),s=Zn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ue(n):Pe(n),rt(n,e,"actions"),Gw(n,s,e),Me(s,e.loaderHtml),rt(s,e,"loader")};function Gw(t,e,n){const s=dt(),i=zt(),r=mn();zr(s,"confirm",n),zr(i,"deny",n),zr(r,"cancel",n),Ww(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Ww(t,e,n,s){if(!s.buttonsStyling)return Et([t,e,n],g.styled);z([t,e,n],g.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,z(t,g["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,z(e,g["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,z(n,g["default-outline"]))}function zr(t,e,n){Sr(t,n[`show${Va(e)}Button`],"inline-block"),Me(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=g[e],rt(t,n,`${e}Button`),z(t,n[`${e}ButtonClass`])}function Qw(t,e){typeof e=="string"?t.style.background=e:e||z([document.documentElement,document.body],g["no-backdrop"])}function Yw(t,e){e in g?z(t,g[e]):(Xe('The "position" parameter is not valid, defaulting to "center"'),z(t,g.center))}function Xw(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in g&&z(t,g[n])}}const Jw=(t,e)=>{const n=Ve();n&&(Qw(n,e.backdrop),Yw(n,e.position),Xw(n,e.grow),rt(n,e,"container"))},q={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Zw=["input","file","range","select","radio","checkbox","textarea"],eb=(t,e)=>{const n=Z(),s=q.innerParams.get(t),i=!s||e.input!==s.input;Zw.forEach(r=>{const o=g[r],a=Rt(n,o);sb(r,e.inputAttributes),a.className=o,i&&Ue(a)}),e.input&&(i&&tb(e),ib(e))},tb=t=>{if(!Qe[t.input])return _n(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Vd(t.input),n=Qe[t.input](e,t);Pe(n),setTimeout(()=>{Md(n)})},nb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},sb=(t,e)=>{const n=Ka(Z(),t);if(n){nb(n);for(const s in e)n.setAttribute(s,e[s])}},ib=t=>{const e=Vd(t.input);t.customClass&&z(e,t.customClass.input)},Wa=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},ei=(t,e,n)=>{if(n.inputLabel){t.id=g.input;const s=document.createElement("label"),i=g["input-label"];s.setAttribute("for",t.id),s.className=i,z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Vd=t=>{const e=g[t]?g[t]:g.input;return Rt(Z(),e)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:ja(e.inputValue)||Xe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),ei(t,t,e),Wa(t,e),t.type=e.input,t);Qe.file=(t,e)=>(ei(t,t,e),Wa(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,ei(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Me(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ei(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=Ka(Z(),"checkbox");n.value="1",n.id=g.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Me(s,e.inputPlaceholder),t};Qe.textarea=(t,e)=>{t.value=e.inputValue,Wa(t,e),ei(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Z()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?Z().style.width=`${r}px`:Z().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const rb=(t,e)=>{const n=Ui();rt(n,e,"htmlContainer"),e.html?(Ga(e.html,n),Pe(n,"block")):e.text?(n.textContent=e.text,Pe(n,"block")):Ue(n),eb(t,e)},ob=(t,e)=>{const n=Ld();Sr(n,e.footer),e.footer&&Ga(e.footer,n),rt(n,e,"footer")},ab=(t,e)=>{const n=qa();Me(n,e.closeButtonHtml),rt(n,e,"closeButton"),Sr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},lb=(t,e)=>{const n=q.innerParams.get(t),s=Js();if(n&&e.icon===n.icon){dc(s,e),hc(s,e);return}if(!e.icon&&!e.iconHtml)return Ue(s);if(e.icon&&Object.keys(ps).indexOf(e.icon)===-1)return _n(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ue(s);Pe(s),dc(s,e),hc(s,e),z(s,e.showClass.icon)},hc=(t,e)=>{for(const n in ps)e.icon!==n&&Et(t,ps[n]);z(t,ps[e.icon]),db(t,e),cb(),rt(t,e,"icon")},cb=()=>{const t=Z(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},ub=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,hb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,dc=(t,e)=>{t.textContent="",e.iconHtml?Me(t,fc(e.iconHtml)):e.icon==="success"?Me(t,ub):e.icon==="error"?Me(t,hb):Me(t,fc({question:"?",warning:"!",info:"i"}[e.icon]))},db=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])cc(t,n,"backgroundColor",e.iconColor);cc(t,".swal2-success-ring","borderColor",e.iconColor)}},fc=t=>`<div class="${g["icon-content"]}">${t}</div>`,fb=(t,e)=>{const n=Od();if(!e.imageUrl)return Ue(n);Pe(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),gs(n,"width",e.imageWidth),gs(n,"height",e.imageHeight),n.className=g.image,rt(n,e,"image")},pb=t=>{const e=document.createElement("li");return z(e,g["progress-step"]),Me(e,t),e},gb=t=>{const e=document.createElement("li");return z(e,g["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},mb=(t,e)=>{const n=Rd();if(!e.progressSteps||e.progressSteps.length===0)return Ue(n);Pe(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Xe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=pb(s);if(n.appendChild(r),i===e.currentProgressStep&&z(r,g["active-progress-step"]),i!==e.progressSteps.length-1){const o=gb(e);n.appendChild(o)}})},yb=(t,e)=>{const n=Nd();Sr(n,e.title||e.titleText,"block"),e.title&&Ga(e.title,n),e.titleText&&(n.innerText=e.titleText),rt(n,e,"title")},vb=(t,e)=>{const n=Ve(),s=Z();e.toast?(gs(n,"width",e.width),s.style.width="100%",s.insertBefore(Zn(),Js())):gs(s,"width",e.width),gs(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Ue(_r()),wb(s,e)},wb=(t,e)=>{t.className=`${g.popup} ${Ze(t)?e.showClass.popup:""}`,e.toast?(z([document.documentElement,document.body],g["toast-shown"]),z(t,g.toast)):z(t,g.modal),rt(t,e,"popup"),typeof e.customClass=="string"&&z(t,e.customClass),e.icon&&z(t,g[`icon-${e.icon}`])},Ud=(t,e)=>{vb(t,e),Jw(t,e),mb(t,e),lb(t,e),fb(t,e),yb(t,e),ab(t,e),rb(t,e),zw(t,e),ob(t,e),typeof e.didRender=="function"&&e.didRender(Z())},es=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),bb=()=>{tt(document.body.children).forEach(e=>{e===Ve()||e.contains(Ve())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},jd=()=>{tt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},qd=["swal-title","swal-html","swal-footer"],Eb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return kb(n),Object.assign(_b(n),Tb(n),Cb(n),Sb(n),Ib(n),Ab(n,qd))},_b=t=>{const e={};return tt(t.querySelectorAll("swal-param")).forEach(n=>{yn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Mn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Mn[s]=="object"&&(e[s]=JSON.parse(i))}),e},Tb=t=>{const e={};return tt(t.querySelectorAll("swal-button")).forEach(n=>{yn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Va(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Cb=t=>{const e={},n=t.querySelector("swal-image");return n&&(yn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Sb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(yn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Ib=t=>{const e={},n=t.querySelector("swal-input");n&&(yn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},tt(s).forEach(i=>{yn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Ab=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(yn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},kb=t=>{const e=qd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);tt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Xe(`Unrecognized element <${s}>`)})},yn=(t,e)=>{tt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Xe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},pc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Db(t){t.inputValidator||Object.keys(pc).forEach(e=>{t.input===e&&(t.inputValidator=pc[e])})}function Pb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Xe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Nb(t){Db(t),t.showLoaderOnConfirm&&!t.preConfirm&&Xe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Pb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),qw(t)}class Ob{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Rb=()=>{xn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(xn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${xn.previousBodyPadding+Kw()}px`)},Lb=()=>{xn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${xn.previousBodyPadding}px`,xn.previousBodyPadding=null)},Mb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!It(document.body,g.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,z(document.body,g.iosfix),Fb(),xb()}},xb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Z().scrollHeight>window.innerHeight-44&&(Ve().style.paddingBottom=`${44}px`)},Fb=()=>{const t=Ve();let e;t.ontouchstart=n=>{e=Bb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Bb=t=>{const e=t.target,n=Ve();return Vb(t)||Ub(t)?!1:e===n||!uc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(uc(Ui())&&Ui().contains(e))},Vb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Ub=t=>t.touches&&t.touches.length>1,jb=()=>{if(It(document.body,g.iosfix)){const t=parseInt(document.body.style.top,10);Et(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},$d=10,qb=t=>{const e=Ve(),n=Z();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Kb(e,n,t),setTimeout(()=>{$b(e,n)},$d),Ha()&&(Hb(e,t.scrollbarPadding,i),bb()),!Cr()&&!V.previousActiveElement&&(V.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Et(e,g["no-transition"])},Hd=t=>{const e=Z();if(t.target!==e)return;const n=Ve();e.removeEventListener(Ps,Hd),n.style.overflowY="auto"},$b=(t,e)=>{Ps&&Fd(e)?(t.style.overflowY="hidden",e.addEventListener(Ps,Hd)):t.style.overflowY="auto"},Hb=(t,e,n)=>{Mb(),e&&n!=="hidden"&&Rb(),setTimeout(()=>{t.scrollTop=0})},Kb=(t,e,n)=>{z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Pe(e,"grid"),setTimeout(()=>{z(e,n.showClass.popup),e.style.removeProperty("opacity")},$d),z([document.documentElement,document.body],g.shown),n.heightAuto&&n.backdrop&&!n.toast&&z([document.documentElement,document.body],g["height-auto"])},zn=t=>{let e=Z();e||new Os,e=Z();const n=Zn();Cr()?Ue(Js()):zb(e,t),Pe(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},zb=(t,e)=>{const n=Zs(),s=Zn();!e&&Ze(dt())&&(e=dt()),Pe(n),e&&(Ue(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),z([t,n],g.loading)},Gb=(t,e)=>{e.input==="select"||e.input==="radio"?Jb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ua(e.inputValue)||ja(e.inputValue))&&(zn(dt()),Zb(t,e))},Wb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Qb(n);case"radio":return Yb(n);case"file":return Xb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Qb=t=>t.checked?1:0,Yb=t=>t.checked?t.value:null,Xb=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Jb=(t,e)=>{const n=Z(),s=i=>e0[e.input](n,Ro(i),e);Ua(e.inputOptions)||ja(e.inputOptions)?(zn(dt()),Ys(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):_n(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Zb=(t,e)=>{const n=t.getInput();Ue(n),Ys(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Pe(n),n.focus(),t.hideLoading()}).catch(s=>{_n(`Error in inputValue promise: ${s}`),n.value="",Pe(n),n.focus(),t.hideLoading()})},e0={select:(t,e,n)=>{const s=Rt(t,g.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,Me(l,o),l.selected=gc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Rt(t,g.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=g.radio,l.value=o,gc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Me(u,a),u.className=g.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Ro=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Ro(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Ro(s)),e.push([n,s])}),e},gc=(t,e)=>e&&e.toString()===t.toString();function mc(){const t=q.innerParams.get(this);if(!t)return;const e=q.domCache.get(this);Ue(e.loader),Cr()?t.icon&&Pe(Js()):t0(e),Et([e.popup,e.actions],g.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const t0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Pe(e[0],"inline-block"):Nw()&&Ue(t.actions)};function n0(t){const e=q.innerParams.get(t||this),n=q.domCache.get(t||this);return n?Ka(n.popup,e.input):null}const Ns={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},s0=()=>Ze(Z()),Kd=()=>dt()&&dt().click(),i0=()=>zt()&&zt().click(),r0=()=>mn()&&mn().click(),zd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},o0=(t,e,n,s)=>{zd(e),n.toast||(e.keydownHandler=i=>l0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:Z(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Lo=(t,e,n)=>{const s=$a();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();Z().focus()},Gd=["ArrowRight","ArrowDown"],a0=["ArrowLeft","ArrowUp"],l0=(t,e,n)=>{const s=q.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?c0(t,e,s):e.key==="Tab"?u0(e,s):[...Gd,...a0].includes(e.key)?h0(e.key):e.key==="Escape"&&d0(e,s,n)))},c0=(t,e,n)=>{if(Er(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Kd(),e.preventDefault()}},u0=(t,e)=>{const n=t.target,s=$a();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Lo(e,i,-1):Lo(e,i,1),t.stopPropagation(),t.preventDefault()},h0=t=>{const e=dt(),n=zt(),s=mn();if(![e,n,s].includes(document.activeElement))return;const i=Gd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Zs().children.length;o++){if(r=r[i],!r)return;if(Ze(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},d0=(t,e,n)=>{Er(e.allowEscapeKey)&&(t.preventDefault(),n(es.esc))};function Wd(t,e,n,s){Cr()?yc(t,s):(Mw(n).then(()=>yc(t,s)),zd(V)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ha()&&(Lb(),jb(),jd()),f0()}function f0(){Et([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function hi(t){t=y0(t);const e=Ns.swalPromiseResolve.get(this),n=g0(this);this.isAwaitingPromise()?t.isDismissed||(ti(this),e(t)):n&&e(t)}function p0(){return!!q.awaitingPromise.get(this)}const g0=t=>{const e=Z();if(!e)return!1;const n=q.innerParams.get(t);if(!n||It(e,n.hideClass.popup))return!1;Et(e,n.showClass.popup),z(e,n.hideClass.popup);const s=Ve();return Et(s,n.showClass.backdrop),z(s,n.hideClass.backdrop),v0(t,e,n),!0};function m0(t){const e=Ns.swalPromiseReject.get(this);ti(this),e&&e(t)}const ti=t=>{t.isAwaitingPromise()&&(q.awaitingPromise.delete(t),q.innerParams.get(t)||t._destroy())},y0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),v0=(t,e,n)=>{const s=Ve(),i=Ps&&Fd(e);typeof n.willClose=="function"&&n.willClose(e),i?w0(t,e,s,n.returnFocus,n.didClose):Wd(t,s,n.returnFocus,n.didClose)},w0=(t,e,n,s,i)=>{V.swalCloseEventFinishedCallback=Wd.bind(null,t,n,s,i),e.addEventListener(Ps,function(r){r.target===e&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback)})},yc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Qd(t,e,n){const s=q.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function Yd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function b0(){Qd(this,["confirmButton","denyButton","cancelButton"],!1)}function E0(){Qd(this,["confirmButton","denyButton","cancelButton"],!0)}function _0(){return Yd(this.getInput(),!1)}function T0(){return Yd(this.getInput(),!0)}function C0(t){const e=q.domCache.get(this),n=q.innerParams.get(this);Me(e.validationMessage,t),e.validationMessage.className=g["validation-message"],n.customClass&&n.customClass.validationMessage&&z(e.validationMessage,n.customClass.validationMessage),Pe(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",g["validation-message"]),Md(s),z(s,g.inputerror))}function S0(){const t=q.domCache.get(this);t.validationMessage&&Ue(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Et(e,g.inputerror))}function I0(){return q.domCache.get(this).progressSteps}function A0(t){const e=Z(),n=q.innerParams.get(this);if(!e||It(e,n.hideClass.popup))return Xe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=k0(t),i=Object.assign({},n,s);Ud(this,i),q.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const k0=t=>{const e={};return Object.keys(t).forEach(n=>{Dd(n)?e[n]=t[n]:Xe(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function D0(){const t=q.domCache.get(this),e=q.innerParams.get(this);if(!e){Xd(this);return}t.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),V.deferDisposalTimer&&(clearTimeout(V.deferDisposalTimer),delete V.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),P0(this)}const P0=t=>{Xd(t),delete t.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},Xd=t=>{t.isAwaitingPromise()?(Gr(q,t),q.awaitingPromise.set(t,!0)):(Gr(Ns,t),Gr(q,t))},Gr=(t,e)=>{for(const n in t)t[n].delete(e)},Jd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:D0,close:hi,closeModal:hi,closePopup:hi,closeToast:hi,disableButtons:E0,disableInput:T0,disableLoading:mc,enableButtons:b0,enableInput:_0,getInput:n0,getProgressSteps:I0,handleAwaitingPromise:ti,hideLoading:mc,isAwaitingPromise:p0,rejectPromise:m0,resetValidationMessage:S0,showValidationMessage:C0,update:A0},Symbol.toStringTag,{value:"Module"})),N0=t=>{const e=q.innerParams.get(t);t.disableButtons(),e.input?Zd(t,"confirm"):Ya(t,!0)},O0=t=>{const e=q.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Zd(t,"deny"):Qa(t,!1)},R0=(t,e)=>{t.disableButtons(),e(es.cancel)},Zd=(t,e)=>{const n=q.innerParams.get(t);if(!n.input)return _n(`The "input" parameter is needed to be set when using returnInputValueOn${Va(e)}`);const s=Wb(t,n);n.inputValidator?L0(t,s,e):t.getInput().checkValidity()?e==="deny"?Qa(t,s):Ya(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},L0=(t,e,n)=>{const s=q.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ys(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Qa(t,e):Ya(t,e)})},Qa=(t,e)=>{const n=q.innerParams.get(t||globalThis);n.showLoaderOnDeny&&zn(zt()),n.preDeny?(q.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ys(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),ti(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>ef(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},vc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},ef=(t,e)=>{t.rejectPromise(e)},Ya=(t,e)=>{const n=q.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&zn(),n.preConfirm?(t.resetValidationMessage(),q.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ys(n.preConfirm(e,n.validationMessage))).then(i=>{Ze(_r())||i===!1?(t.hideLoading(),ti(t)):vc(t,typeof i>"u"?e:i)}).catch(i=>ef(t||globalThis,i))):vc(t,e)},M0=(t,e,n)=>{q.innerParams.get(t).toast?x0(t,e,n):(B0(e),V0(e),U0(t,e,n))},x0=(t,e,n)=>{e.popup.onclick=()=>{const s=q.innerParams.get(t);s&&(F0(s)||s.timer||s.input)||n(es.close)}},F0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let ji=!1;const B0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(ji=!0)}}},V0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(ji=!0)}}},U0=(t,e,n)=>{e.container.onclick=s=>{const i=q.innerParams.get(t);if(ji){ji=!1;return}s.target===e.container&&Er(i.allowOutsideClick)&&n(es.backdrop)}},j0=t=>typeof t=="object"&&t.jquery,wc=t=>t instanceof Element||j0(t),q0=t=>{const e={};return typeof t[0]=="object"&&!wc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||wc(i)?e[n]=i:i!==void 0&&_n(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function $0(...t){const e=this;return new e(...t)}function H0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const K0=()=>V.timeout&&V.timeout.getTimerLeft(),tf=()=>{if(V.timeout)return Ow(),V.timeout.stop()},nf=()=>{if(V.timeout){const t=V.timeout.start();return za(t),t}},z0=()=>{const t=V.timeout;return t&&(t.running?tf():nf())},G0=t=>{if(V.timeout){const e=V.timeout.increase(t);return za(e,!0),e}},W0=()=>V.timeout&&V.timeout.isRunning();let bc=!1;const Mo={};function Q0(t="data-swal-template"){Mo[t]=this,bc||(document.body.addEventListener("click",Y0),bc=!0)}const Y0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Mo){const s=e.getAttribute(n);if(s){Mo[n].fire({template:s});return}}},X0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:q0,bindClickHandler:Q0,clickCancel:r0,clickConfirm:Kd,clickDeny:i0,enableLoading:zn,fire:$0,getActions:Zs,getCancelButton:mn,getCloseButton:qa,getConfirmButton:dt,getContainer:Ve,getDenyButton:zt,getFocusableElements:$a,getFooter:Ld,getHtmlContainer:Ui,getIcon:Js,getImage:Od,getInputLabel:Aw,getLoader:Zn,getPopup:Z,getTimerLeft:K0,getTimerProgressBar:Tr,getTitle:Nd,getValidationMessage:_r,increaseTimer:G0,isDeprecatedParameter:Oo,isLoading:Dw,isTimerRunning:W0,isUpdatableParameter:Dd,isValidParameter:kd,isVisible:s0,mixin:H0,resumeTimer:nf,showLoading:zn,stopTimer:tf,toggleTimer:z0},Symbol.toStringTag,{value:"Module"}));let xo;class ts{constructor(...e){if(typeof window>"u")return;xo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);q.promise.set(this,s)}_main(e,n={}){Sw(Object.assign({},n,e)),V.currentInstance&&(V.currentInstance._destroy(),Ha()&&jd()),V.currentInstance=this;const s=Z0(e,n);Nb(s),Object.freeze(s),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const i=eE(this);return Ud(this,s),q.innerParams.set(this,s),J0(this,i,s)}then(e){return q.promise.get(this).then(e)}finally(e){return q.promise.get(this).finally(e)}}const J0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Ns.swalPromiseResolve.set(t,s),Ns.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>N0(t),e.denyButton.onclick=()=>O0(t),e.cancelButton.onclick=()=>R0(t,r),e.closeButton.onclick=()=>r(es.close),M0(t,e,r),o0(t,V,n,r),Gb(t,n),qb(n),tE(V,n,r),nE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Z0=(t,e)=>{const n=Eb(t),s=Object.assign({},Mn,e,n,t);return s.showClass=Object.assign({},Mn.showClass,s.showClass),s.hideClass=Object.assign({},Mn.hideClass,s.hideClass),s},eE=t=>{const e={popup:Z(),container:Ve(),actions:Zs(),confirmButton:dt(),denyButton:zt(),cancelButton:mn(),loader:Zn(),closeButton:qa(),validationMessage:_r(),progressSteps:Rd()};return q.domCache.set(t,e),e},tE=(t,e,n)=>{const s=Tr();Ue(s),e.timer&&(t.timeout=new Ob(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Pe(s),rt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&za(e.timer)})))},nE=(t,e)=>{if(!e.toast){if(!Er(e.allowEnterKey))return iE();sE(t,e)||Lo(e,-1,1)}},sE=(t,e)=>e.focusDeny&&Ze(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ze(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ze(t.confirmButton)?(t.confirmButton.focus(),!0):!1,iE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(ts.prototype,Jd);Object.assign(ts,X0);Object.keys(Jd).forEach(t=>{ts[t]=function(...e){if(xo)return xo[t](...e)}});ts.DismissReason=es;ts.version="11.4.8";const Os=ts;Os.default=Os;const Sn=[];function Ir(t,e=ye){let n;const s=new Set;function i(a){if(Ot(t,a)&&(t=a,n)){const l=!Sn.length;for(const c of s)c[1](),Sn.push(c,t);if(l){for(let c=0;c<Sn.length;c+=2)Sn[c][0](Sn[c+1]);Sn.length=0}}}function r(a){i(a(t))}function o(a,l=ye){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ye),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Wr=Ir({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Fo=Ir(""),Bo=Ir(""),vi=Ir(""),rE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},oE=async t=>{try{await Ba(St(ke,"Pacientes",t.id),t)}catch(e){console.log(e)}};function Ec(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function aE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=_c(Ec(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Lc()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);se(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=Ec(i,n,o);s[o]?s[o].p(a,r):(s[o]=_c(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Rs(s,i),i&&ee(e)}}}function lE(t){let e;return{c(){e=C("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){se(n,e,s)},p:ye,d(n){n&&ee(e)}}}function _c(t){let e,n=`${t[7].apellido}, ${t[7].nombre}${t[7].plan=="particular"?"":" -"+t[7].nroSocio+" - plan "+t[7].plan.plan} `,s;return{c(){e=C("option"),s=Q(n),e.__value=t[9],e.value=e.__value},m(i,r){se(i,e,r),v(e,s)},p(i,r){r&1&&n!==(n=`${i[7].apellido}, ${i[7].nombre}${i[7].plan=="particular"?"":" -"+i[7].nroSocio+" - plan "+i[7].plan.plan} `)&&Ke(s,n)},d(i){i&&ee(e)}}}function cE(t){let e,n,s;function i(a,l){return a[0].length==0?lE:aE}let r=i(t),o=r(t);return{c(){e=C("select"),o.c(),y(e,"name","select-pacientes"),y(e,"class","select-Pacientes svelte-2shrp8"),y(e,"id","elementoSelectPacientes"),y(e,"size",5),t[1]===void 0&&hn(()=>t[4].call(e))},m(a,l){se(a,e,l),o.m(e,null),Vt(e,t[1]),n||(s=[W(e,"change",t[2]),W(e,"change",t[4])],n=!0)},p(a,[l]){r===(r=i(a))&&o?o.p(a,l):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),l&2&&Vt(e,a[1])},i:ye,o:ye,d(a){a&&ee(e),o.d(),n=!1,ft(s)}}}function uE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r,o;const a=Vo(),l=u=>{const h=u.target.value;n(3,i=s[h].plan),o=s[h].id,a("cambioSelectPaciente",[h,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${h}, planSelect ${i.plan?i.plan:"particular"}`)};function c(){r=bi(this),n(1,r)}return t.$$set=u=>{"pacientesFiltrada"in u&&n(0,s=u.pacientesFiltrada),"planSelect"in u&&n(3,i=u.planSelect)},[s,r,l,i,c]}class hE extends Wt{constructor(e){super(),Gt(this,e,uE,cE,Ot,{pacientesFiltrada:0,planSelect:3})}}function dE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,p,m,w,k,S,N,I,L,R,U,re,G,te,ne,he,je,de,qe,$e,oe,j,Ie,ie,Tt,pt,T,ve,fe,We,Zt,ni;return L=new hE({props:{pacientesFiltrada:t[3],planSelect:fE}}),L.$on("cambioSelectPaciente",t[15]),fe=new Ef({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),fe.$on("cambioPlan",t[14]),fe.$on("clickCheckPlan",t[16]),{c(){e=C("body"),n=C("div"),s=C("div"),i=C("button"),r=Q("create"),a=K(),l=C("button"),c=Q("update"),h=K(),d=C("button"),f=Q("delete"),m=K(),w=C("div"),k=C("label"),k.textContent="filtrar por apellido",S=C("input"),N=K(),I=C("div"),dn(L.$$.fragment),R=K(),U=C("div"),re=C("label"),re.textContent="nombre",G=C("input"),te=K(),ne=C("label"),ne.textContent="apellido",he=C("input"),je=K(),de=C("div"),qe=C("label"),qe.textContent="nº socio",$e=K(),oe=C("div"),j=C("input"),Ie=K(),ie=C("button"),ie.textContent="✎",Tt=K(),pt=C("label"),T=Q(t[10]),ve=K(),dn(fe.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],y(i,"class","svelte-40mbgp"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],y(l,"class","svelte-40mbgp"),d.disabled=p=!t[4],y(d,"class","svelte-40mbgp"),y(s,"class","buttons svelte-40mbgp"),y(n,"id","botones"),y(n,"class","svelte-40mbgp"),y(k,"for","filterPrefix"),y(k,"class","svelte-40mbgp"),y(S,"name","filterPrefix"),y(S,"placeholder","filter prefix"),y(S,"class","svelte-40mbgp"),y(w,"id","filter"),y(w,"class","svelte-40mbgp"),y(I,"id","selectPacientes"),y(I,"class","svelte-40mbgp"),y(re,"for","nombre"),y(re,"class","svelte-40mbgp"),y(G,"name","nombre"),y(G,"placeholder","nombre"),y(G,"class","svelte-40mbgp"),y(ne,"for","apellido"),y(ne,"class","svelte-40mbgp"),y(he,"name","apellido"),y(he,"placeholder","apellido"),y(he,"class","svelte-40mbgp"),y(U,"id","formInputsI"),y(U,"class","svelte-40mbgp"),y(qe,"for","nroSocio"),y(qe,"class","svelte-40mbgp"),y(j,"id","inputNroSocio"),y(j,"name","nroSocio"),y(j,"placeholder","nro de Socio"),y(j,"class","svelte-40mbgp"),y(ie,"class","svelte-40mbgp"),y(oe,"class","formRow svelte-40mbgp"),y(pt,"id","labelPlan"),y(pt,"for","plan"),y(pt,"class","svelte-40mbgp"),y(de,"id","formInputsD"),y(de,"class","svelte-40mbgp"),y(e,"class","svelte-40mbgp")},m(_,Y){se(_,e,Y),v(e,n),v(n,s),v(s,i),v(i,r),v(s,a),v(s,l),v(l,c),v(s,h),v(s,d),v(d,f),v(e,m),v(e,w),v(w,k),v(w,S),Ce(S,t[2]),v(e,N),v(e,I),Ut(L,I,null),v(e,R),v(e,U),v(U,re),v(U,G),Ce(G,t[7]),v(U,te),v(U,ne),v(U,he),Ce(he,t[8]),v(e,je),v(e,de),v(de,qe),v(de,$e),v(de,oe),v(oe,j),Ce(j,t[9]),v(oe,Ie),v(oe,ie),v(de,Tt),v(de,pt),v(pt,T),v(de,ve),Ut(fe,de,null),We=!0,Zt||(ni=[W(i,"click",t[11]),W(l,"click",t[12]),W(d,"click",t[13]),W(S,"input",t[21]),W(G,"input",t[22]),W(he,"input",t[23]),W(j,"input",t[24]),W(ie,"click",pE)],Zt=!0)},p(_,Y){(!We||Y[0]&897&&o!==(o=!_[7]||!_[8]||!_[0]||!_[9]))&&(i.disabled=o),(!We||Y[0]&913&&u!==(u=!_[7]||!_[8]||!_[0]||!_[9]||!_[4]))&&(l.disabled=u),(!We||Y[0]&16&&p!==(p=!_[4]))&&(d.disabled=p),Y[0]&4&&S.value!==_[2]&&Ce(S,_[2]);const we={};Y[0]&8&&(we.pacientesFiltrada=_[3]),L.$set(we),Y[0]&128&&G.value!==_[7]&&Ce(G,_[7]),Y[0]&256&&he.value!==_[8]&&Ce(he,_[8]),Y[0]&512&&j.value!==_[9]&&Ce(j,_[9]),(!We||Y[0]&1024)&&Ke(T,_[10]);const He={};Y[0]&2&&(He.planes=_[1]),Y[0]&1&&(He.planSeleccionado=_[0]),Y[0]&64&&(He.SelectPlanVisible=_[6]),Y[0]&32&&(He.indicePlan=_[5]),fe.$set(He)},i(_){We||(vt(L.$$.fragment,_),vt(fe.$$.fragment,_),We=!0)},o(_){At(L.$$.fragment,_),At(fe.$$.fragment,_),We=!1},d(_){_&&ee(e),jt(L),jt(fe),Zt=!1,ft(ni)}}}let fE="particular";function pE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function gE(t,e,n){let s,i,r,o,a;sn(t,vi,T=>n(25,i=T)),sn(t,Wr,T=>n(26,r=T)),sn(t,Bo,T=>n(27,o=T)),sn(t,Fo,T=>n(28,a=T));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:f}=e,p,m,w;xc(()=>{rE(l,d),l.forEach(T=>{oE(T)})});let k="",S="",N="",I="",L,R="plan";Tn(Wr,r=s,r);const U=T=>{n(7,S=T?T.nombre:""),n(8,N=T?T.apellido:""),n(9,I=T?T.nroSocio:""),n(0,h=T?T.plan:{})},re=async()=>{try{await _d(nt(ke,"Pacientes"),{nombre:S,apellido:N,nroSocio:I,createdAt:new Date().toLocaleDateString(),plan:h}),Ln({text:"Nuevo paciente agregado"}).showToast()}catch(T){console.error(T)}},G=()=>{n(17,l=l.concat({nombre:S,apellido:N})),n(20,m=l.length-1),re(),n(7,S=n(8,N=n(0,h=n(9,I=""))))},te=async T=>{try{await Ba(St(ke,"Pacientes",T.id),T),Ln({text:`paciente ${T.apellido}, ${T.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ve){console.error(ve)}},ne=()=>{n(4,s.nombre=S,s),n(4,s.apellido=N,s),n(0,h=s.plan),n(4,s.nroSocio=I,s),n(4,s),n(3,L),n(20,m),n(2,k),n(17,l),n(17,l),te(s)},he=async T=>{try{await Po(St(ke,"Pacientes",T.id)),Ln({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(fe){console.error(fe)}const ve=fs(nt(ke,"sesiones"),Do("pacienteID","==",T.id));console.log(`desde delete q=pacientes a borrar ${ve} - paciente: ${T.nombre} ${T.apellido} ${T.id}`);try{(await Ed(ve)).forEach(We=>{Po(We.ref)})}catch(fe){console.log(fe)}},je=()=>{const T=l.indexOf(s);Os.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ve=>{ve.isConfirmed&&(Os.fire("Deleted!","Your file has been deleted.","success"),he(l[m]),n(17,l=[...l.slice(0,T),...l.slice(T+1)]),n(7,S=n(8,N=n(9,I=n(0,h="")))),n(20,m=Math.min(m,L.length-2)))})},de=T=>{n(4,s.plan=T,s),n(4,s.nombre=S,s),n(4,s.apellido=N,s),n(4,s.nroSocio=I,s),n(3,L[m].plan=T,L),te(s)},qe=T=>{n(0,h=T.detail),console.log(h),s.plan.plan!=h.plan&&de(h)},$e=T=>{T?(n(10,R="particular"),n(6,w=!1)):(n(10,R="plan"),n(6,w=!0))},oe=T=>{n(20,m=T.detail[0]);const ve=T.detail[1];Tn(vi,i=T.detail[2],i);const fe=typeof ve=="string"?"particular":ve.plan;console.log(`i ${m}, planSelect ${fe}`),n(0,h=fe=="particular"?"particular":L[m].plan),h!="particular"&&(n(5,p=u.findIndex(Zt=>Zt.plan===fe)),console.log(`indicePlan ${p}, ${typeof p}`));const We=fe=="particular";$e(We)},j=T=>{const ve=T.detail.valor.SelectPlanVisible;ve?ve&&h=="particular"&&n(0,h="210"):n(0,h="particular"),de(h),$e(!ve)};function Ie(){k=this.value,n(2,k)}function ie(){S=this.value,n(7,S)}function Tt(){N=this.value,n(8,N)}function pt(){I=this.value,n(9,I)}return t.$$set=T=>{"pacientes"in T&&n(17,l=T.pacientes),"sesiones"in T&&n(18,c=T.sesiones),"planes"in T&&n(1,u=T.planes),"planSeleccionado"in T&&n(0,h=T.planSeleccionado),"optionsPlan"in T&&n(19,f=T.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,L=k?l.filter(T=>`${T.apellido}, ${T.nombre}`.toLowerCase().startsWith(k.toLowerCase())):l.map(T=>({nombre:T.nombre,apellido:T.apellido,plan:T.plan,nroSocio:T.nroSocio,id:T.id}))),t.$$.dirty[0]&1048584&&n(4,s=L[m]),t.$$.dirty[0]&16&&s&&(Tn(Wr,r=s,r),Tn(Fo,a=s.apellido,a),Tn(Bo,o=s.nombre,o),Tn(vi,i=s.id,i)),t.$$.dirty[0]&16&&U(s)},[h,u,k,L,s,p,w,S,N,I,R,G,ne,je,qe,oe,j,l,c,f,m,Ie,ie,Tt,pt]}class mE extends Wt{constructor(e){super(),Gt(this,e,gE,dE,Ot,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const yE=nt(ke,"sesiones");nt(ke,"Pacientes");nt(ke,"Planes");const vE=async t=>{const e=fi(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Ed(fs(yE,Do("diaSesion",">=",n),Do("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function Tc(t,e,n){const s=t.slice();return s[7]=e[n],s}function Cc(t){let e,n,s,i,r,o,a,l,c,u=t[2],h=[];for(let d=0;d<u.length;d+=1)h[d]=Sc(Tc(t,u,d));return{c(){e=C("ol");for(let d=0;d<h.length;d+=1)h[d].c();n=K(),s=C("p"),i=Q("Total: $"),r=Q(t[3]),o=K(),a=C("button"),a.textContent="Cerrar",y(s,"class","centrar svelte-j6pq9d")},m(d,f){se(d,e,f);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);se(d,n,f),se(d,s,f),v(s,i),v(s,r),se(d,o,f),se(d,a,f),l||(c=W(a,"click",t[5]),l=!0)},p(d,f){if(f&4){u=d[2];let p;for(p=0;p<u.length;p+=1){const m=Tc(d,u,p);h[p]?h[p].p(m,f):(h[p]=Sc(m),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}f&8&&Ke(r,d[3])},d(d){d&&ee(e),Rs(h,d),d&&ee(n),d&&ee(s),d&&ee(o),d&&ee(a),l=!1,c()}}}function Sc(t){let e,n=`${gt(t[7].diaSesion.slice(8,10),2,!1)}
                    -${gt(t[7].apellido+","+t[7].nombre,10,!1)}
                    -${gt(t[7].plan,4,!0)}
                    - pago: $ ${gt(t[7].valorPago,5,!0)} - valor sesion: $${gt(t[7].valorSesion,5,!0)} `,s,i;return{c(){e=C("li"),s=Q(n),i=K()},m(r,o){se(r,e,o),v(e,s),v(e,i)},p(r,o){o&4&&n!==(n=`${gt(r[7].diaSesion.slice(8,10),2,!1)}
                    -${gt(r[7].apellido+","+r[7].nombre,10,!1)}
                    -${gt(r[7].plan,4,!0)}
                    - pago: $ ${gt(r[7].valorPago,5,!0)} - valor sesion: $${gt(r[7].valorSesion,5,!0)} `)&&Ke(s,n)},d(r){r&&ee(e)}}}function wE(t){let e,n,s,i,r,o,a,l=t[0]&&Cc(t);return{c(){e=C("button"),n=Q("Ver Listado de Sesiones Mes "),s=Q(t[1]),i=K(),r=C("div"),l&&l.c(),y(r,"class","listadoSesionesPorMes svelte-j6pq9d")},m(c,u){se(c,e,u),v(e,n),v(e,s),se(c,i,u),se(c,r,u),l&&l.m(r,null),o||(a=W(e,"click",t[4]),o=!0)},p(c,[u]){u&2&&Ke(s,c[1]),c[0]?l?l.p(c,u):(l=Cc(c),l.c(),l.m(r,null)):l&&(l.d(1),l=null)},i:ye,o:ye,d(c){c&&ee(e),c&&ee(i),c&&ee(r),l&&l.d(),o=!1,a()}}}function gt(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function bE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,{totalPagos:o}=e;const a=Vo(),l=()=>{i==!1&&a("vistaPulsado",s),n(0,i=!i)},c=()=>n(0,i=!i);return t.$$set=u=>{"mesSeleccionado"in u&&n(1,s=u.mesSeleccionado),"vistaCalculos"in u&&n(0,i=u.vistaCalculos),"arrayParaLaVista"in u&&n(2,r=u.arrayParaLaVista),"totalPagos"in u&&n(3,o=u.totalPagos)},[i,s,r,o,l,c]}class EE extends Wt{constructor(e){super(),Gt(this,e,bE,wE,Ot,{mesSeleccionado:1,vistaCalculos:0,arrayParaLaVista:2,totalPagos:3})}}function _E(t){let e,n,s,i,r,o,a;return{c(){e=C("p"),n=Q("total general:"),s=Q(t[0]),i=K(),r=C("p"),o=Q("total por paciente: "),a=Q(t[1]),y(e,"id","totalGeneral")},m(l,c){se(l,e,c),v(e,n),v(e,s),se(l,i,c),se(l,r,c),v(r,o),v(r,a)},p(l,[c]){c&1&&Ke(s,l[0]),c&2&&Ke(a,l[1])},i:ye,o:ye,d(l){l&&ee(e),l&&ee(i),l&&ee(r)}}}function TE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class CE extends Wt{constructor(e){super(),Gt(this,e,TE,_E,Ot,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function Ic(t,e,n){const s=t.slice();return s[50]=e[n],s}function Ac(t,e,n){const s=t.slice();return s[53]=e[n],s}function kc(t){let e,n,s=t[53].diaSesion+"",i,r,o=t[53].valorSesion+"",a,l,c=t[53].fechaPago+"",u,h,d=t[53].valorPago+"",f,p,m;return{c(){e=C("option"),n=Q("dia sesion: "),i=Q(s),r=Q(" - valor sesion: "),a=Q(o),l=Q(`
              - dia pago `),u=Q(c),h=Q(" - valor pago "),f=Q(d),p=K(),y(e,"class"," svelte-1imwuid"),e.__value=m=t[53].id,e.value=e.__value},m(w,k){se(w,e,k),v(e,n),v(e,i),v(e,r),v(e,a),v(e,l),v(e,u),v(e,h),v(e,f),v(e,p)},p(w,k){k[0]&1&&s!==(s=w[53].diaSesion+"")&&Ke(i,s),k[0]&1&&o!==(o=w[53].valorSesion+"")&&Ke(a,o),k[0]&1&&c!==(c=w[53].fechaPago+"")&&Ke(u,c),k[0]&1&&d!==(d=w[53].valorPago+"")&&Ke(f,d),k[0]&1&&m!==(m=w[53].id)&&(e.__value=m,e.value=e.__value)},d(w){w&&ee(e)}}}function Dc(t){let e=Object.values(t[53]).includes(t[3])&&t[53].diaSesion.slice(5,7)==t[7],n,s=e&&kc(t);return{c(){s&&s.c(),n=Lc()},m(i,r){s&&s.m(i,r),se(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[53]).includes(i[3])&&i[53].diaSesion.slice(5,7)==i[7]),e?s?s.p(i,r):(s=kc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&ee(n)}}}function SE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,p,m,w,k,S,N,I,L,R,U,re,G,te,ne,he,je,de,qe,$e=t[15],oe=[];for(let j=0;j<$e.length;j+=1)oe[j]=Pc(Ic(t,$e,j));return{c(){e=C("div"),n=C("form"),s=C("div"),i=C("div"),r=C("label"),r.textContent="pago",o=C("input"),a=K(),l=C("label"),l.textContent="valor sesion",c=C("input"),u=K(),h=C("div"),d=C("label"),d.textContent="Dia Sesion",f=C("input"),p=K(),m=C("label"),m.textContent="Fecha Pago",w=C("input"),k=K(),S=C("div"),N=C("button"),N.textContent="update",I=K(),L=C("button"),L.textContent="delete",R=K(),U=C("button"),U.textContent="Agregar sesión",re=K(),G=C("select");for(let j=0;j<oe.length;j+=1)oe[j].c();te=K(),ne=C("button"),he=Q("listar mes "),je=Q(t[7]),y(r,"for","valorPago"),y(r,"class","svelte-1imwuid"),y(o,"name","valorPago"),y(o,"type","number"),y(o,"step","100"),y(o,"min","0"),y(o,"placeholder","Valor pago"),y(o,"class","svelte-1imwuid"),y(l,"for","valorSesion"),y(l,"class","svelte-1imwuid"),y(c,"name","valorSesion"),y(c,"type","number"),y(c,"step","100"),y(c,"min","0"),y(c,"placeholder","Valor sesión"),y(c,"class","svelte-1imwuid"),y(i,"id","inputsFormSesionesI"),y(i,"class","svelte-1imwuid"),y(d,"for","diaSesion"),y(d,"class","svelte-1imwuid"),y(f,"name","diaSesion"),y(f,"type","date"),y(f,"placeholder","Día sesión"),y(f,"class","svelte-1imwuid"),y(m,"for","fechaPago"),y(m,"class","svelte-1imwuid"),y(w,"name","fechaPago"),y(w,"type","date"),y(w,"placeholder","Fecha pago"),y(w,"class","svelte-1imwuid"),y(h,"id","inputsFormSesionesD"),y(h,"class","svelte-1imwuid"),y(N,"class","svelte-1imwuid"),y(L,"class","svelte-1imwuid"),y(U,"class","svelte-1imwuid"),y(G,"name","mes"),y(G,"id","mesRegistro"),y(G,"class","svelte-1imwuid"),t[7]===void 0&&hn(()=>t[33].call(G)),y(ne,"class","svelte-1imwuid"),y(S,"id","botonesFormSesiones"),y(S,"class","buttons svelte-1imwuid"),y(s,"id","form-Sesiones"),y(s,"class","svelte-1imwuid"),y(n,"class","svelte-1imwuid"),y(e,"id","contenedor-form-sesiones"),y(e,"class","svelte-1imwuid")},m(j,Ie){se(j,e,Ie),v(e,n),v(n,s),v(s,i),v(i,r),v(i,o),Ce(o,t[9]),v(i,a),v(i,l),v(i,c),Ce(c,t[10]),v(s,u),v(s,h),v(h,d),v(h,f),Ce(f,t[11]),v(h,p),v(h,m),v(h,w),Ce(w,t[12]),v(s,k),v(s,S),v(S,N),v(S,I),v(S,L),v(S,R),v(S,U),v(S,re),v(S,G);for(let ie=0;ie<oe.length;ie+=1)oe[ie]&&oe[ie].m(G,null);Vt(G,t[7]),v(S,te),v(S,ne),v(ne,he),v(ne,je),de||(qe=[W(o,"input",t[26]),W(c,"input",t[27]),W(f,"input",t[28]),W(w,"input",t[29]),W(N,"click",t[30]),W(L,"click",t[31]),W(U,"click",t[17]),W(G,"change",t[32]),W(G,"change",t[33]),W(ne,"click",t[34]),W(n,"submit",af(t[24]))],de=!0)},p(j,Ie){if(Ie[0]&512&&wi(o.value)!==j[9]&&Ce(o,j[9]),Ie[0]&1024&&wi(c.value)!==j[10]&&Ce(c,j[10]),Ie[0]&2048&&Ce(f,j[11]),Ie[0]&4096&&Ce(w,j[12]),Ie[0]&32768){$e=j[15];let ie;for(ie=0;ie<$e.length;ie+=1){const Tt=Ic(j,$e,ie);oe[ie]?oe[ie].p(Tt,Ie):(oe[ie]=Pc(Tt),oe[ie].c(),oe[ie].m(G,null))}for(;ie<oe.length;ie+=1)oe[ie].d(1);oe.length=$e.length}Ie[0]&32896&&Vt(G,j[7]),Ie[0]&128&&Ke(je,j[7])},d(j){j&&ee(e),Rs(oe,j),de=!1,ft(qe)}}}function Pc(t){let e,n=`${t[50].nro.toString().padStart(2,"0")} - ${t[50].nombre}`,s;return{c(){e=C("option"),s=Q(n),e.__value=t[50].nro,e.value=e.__value,y(e,"class","svelte-1imwuid")},m(i,r){se(i,e,r),v(e,s)},p:ye,d(i){i&&ee(e)}}}function IE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,p,m,w,k,S,N=t[0],I=[];for(let R=0;R<N.length;R+=1)I[R]=Dc(Ac(t,N,R));d=new CE({props:{registrosMesActual:t[8],varSumaValorPagoPorPaciente:t[6]}});let L=SE(t);return m=new EE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],totalPagos:t[8],mesSeleccionado:t[7]}}),m.$on("vistaPulsado",t[35]),{c(){e=C("main"),n=C("body"),s=C("h4"),i=Q("Paciente: "),r=Q(t[13]),o=Q(", "),a=Q(t[14]),l=K(),c=C("div"),u=C("select");for(let R=0;R<I.length;R+=1)I[R].c();h=K(),dn(d.$$.fragment),f=K(),L&&L.c(),p=K(),dn(m.$$.fragment),y(s,"class","svelte-1imwuid"),y(u,"id","select-sesiones"),y(u,"size",5),y(u,"class","svelte-1imwuid"),t[1]===void 0&&hn(()=>t[25].call(u)),y(c,"id","select"),y(c,"class","svelte-1imwuid"),y(n,"class","svelte-1imwuid"),y(e,"class","svelte-1imwuid")},m(R,U){se(R,e,U),v(e,n),v(n,s),v(s,i),v(s,r),v(s,o),v(s,a),v(n,l),v(n,c),v(c,u);for(let re=0;re<I.length;re+=1)I[re]&&I[re].m(u,null);Vt(u,t[1]),v(c,h),Ut(d,c,null),v(n,f),L&&L.m(n,null),v(n,p),Ut(m,n,null),w=!0,k||(S=[W(u,"change",t[16]),W(u,"change",t[25])],k=!0)},p(R,U){if((!w||U[0]&8192)&&Ke(r,R[13]),(!w||U[0]&16384)&&Ke(a,R[14]),U[0]&137){N=R[0];let te;for(te=0;te<N.length;te+=1){const ne=Ac(R,N,te);I[te]?I[te].p(ne,U):(I[te]=Dc(ne),I[te].c(),I[te].m(u,null))}for(;te<I.length;te+=1)I[te].d(1);I.length=N.length}U[0]&3&&Vt(u,R[1]);const re={};U[0]&256&&(re.registrosMesActual=R[8]),U[0]&64&&(re.varSumaValorPagoPorPaciente=R[6]),d.$set(re),L.p(R,U);const G={};U[0]&16&&(G.vistaCalculos=R[4]),U[0]&32&&(G.arrayParaLaVista=R[5]),U[0]&256&&(G.totalPagos=R[8]),U[0]&128&&(G.mesSeleccionado=R[7]),m.$set(G)},i(R){w||(vt(d.$$.fragment,R),vt(m.$$.fragment,R),w=!0)},o(R){At(d.$$.fragment,R),At(m.$$.fragment,R),w=!1},d(R){R&&ee(e),Rs(I,R),jt(d),L&&L.d(),jt(m),k=!1,ft(S)}}}function AE(t,e,n){let s,i,r;sn(t,vi,_=>n(3,s=_)),sn(t,Fo,_=>n(13,i=_)),sn(t,Bo,_=>n(14,r=_));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u,h=[],d,f=0;const p=new Date;let m=p.getMonth()+1,w=p.getFullYear(),k=m;console.log(`mesSeleccionado ${k}`);let S=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],N,I,L=0;const R=_=>{if(n(1,N=_.target.value),console.log(o),n(2,I=o.find(we=>we.id===N)),console.log("selectedSession",I),n(9,te=I.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(10,ne=I.valorSesion),console.log("particular",ne);else{var Y=l.find(we=>we.plan==c);console.log(Y),console.log("OS",ne)}n(12,je=I.fechaPago),n(11,he=I.diaSesion)},U=async()=>{console.log("Add sesion",I);try{const _=await _d(nt(ke,"sesiones"),{valorPago:te,valorSesion:ne,diaSesion:he,fechaPago:je,pacienteID:s});console.log("sesion agregada"),Ln({text:"Nueva sesion agregada"}).showToast(),n(1,N=_.id)}catch(_){console.error(_)}},re=async _=>{console.log("Update sesion",_);try{await Ba(St(ke,"sesiones",_.id),{valorPago:te,valorSesion:ne,fechaPago:je,diaSesion:he}),Ln({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Y){console.log(Y)}},G=async _=>{console.log("Delete sesion",_);try{await Po(St(ke,"sesiones",_.id)),Ln({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Y){console.error(Y)}};let te=5e3,ne=5e3,he=new Date().toISOString().slice(0,10),je=new Date().toISOString().slice(0,10);m.toString().padStart(2,"0"),w.toString();let de=_=>o.filter(we=>we.pacienteID===_&&we.diaSesion.slice(5,7)===k.toString().padStart(2,"0")).reduce((we,He)=>we+He.valorSesion,0);const qe=async _=>{const Y=await $e(_);n(5,h=Y[1]),console.log(Array.isArray(Y[1])),console.log(Y[1]),n(4,u=!0)},$e=async _=>{_||(_=m);try{const Y=await vE(_);n(8,L=0),f=0;let we=[];return console.log(typeof we),Y.forEach(He=>{let sf=He.pacienteID;const at=a.find(en=>en.id==sf);var lt=He.valorPago;if(lt==null&&(lt=0),typeof lt=="number")if(at.plan=="particular"){n(8,L+=lt),lt<ne&&(f+=ne-lt);var ns={diaSesion:He.diaSesion,apellido:at.apellido,nombre:at.nombre,plan:at.plan.plan?at.plan.plan:"particular",valorPago:lt,valorSesion:He.valorSesion};console.log(ns),console.log(typeof we),we.push(ns)}else{const en=at.plan;var ns={diaSesion:He.diaSesion,apellido:at.apellido,nombre:at.nombre,plan:at.plan.plan?at.plan.plan:"particular",valorPago:lt,valorSesion:He.valorSesion};console.log(ns),console.log(typeof we),we.push(ns),lt<en.valorCoseguro&&(f+=en.valorCoseguro-lt,console.log(`totalAdeudado: ${f}`)),n(8,L+=en.valorOs+lt),console.log(`paciente ${at.apellido}, fechaSesion: ${He.diaSesion}, valor Os + Coseguro$${en.valorOs+en.valorCoseguro}, total acumulado ${L}`)}}),console.log("Total pagos mes actual: ",L),console.log("Total adeudado mes actual: ",f),n(6,d=de(s)),console.log(typeof we),[L,we]}catch(Y){return console.error("Error al obtener las sesiones y los pagos:",Y),[]}};function oe(_){hf.call(this,t,_)}function j(){N=bi(this),n(1,N),n(0,o)}function Ie(){te=wi(this.value),n(9,te)}function ie(){ne=wi(this.value),n(10,ne)}function Tt(){he=this.value,n(11,he)}function pt(){je=this.value,n(12,je)}const T=()=>re(I),ve=()=>G(I),fe=_=>qe(_.target.value);function We(){k=bi(this),n(7,k),n(15,S)}const Zt=()=>qe(k),ni=()=>qe(k);return t.$$set=_=>{"sesiones"in _&&n(0,o=_.sesiones),"pacientes"in _&&n(21,a=_.pacientes),"planes"in _&&n(22,l=_.planes),"planSeleccionado"in _&&n(23,c=_.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&6291457&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,I=o.find(_=>_.id===N)),console.log(I||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=de(s))},$e(),[o,N,I,s,u,h,d,k,L,te,ne,he,je,i,r,S,R,U,re,G,qe,a,l,c,oe,j,Ie,ie,Tt,pt,T,ve,fe,We,Zt,ni]}class kE extends Wt{constructor(e){super(),Gt(this,e,AE,IE,Ot,{sesiones:0,pacientes:21,planes:22,planSeleccionado:23},null,[-1,-1])}}function DE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f;return a=new mE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Nc}}),u=new kE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Nc}}),{c(){e=C("body"),n=C("button"),n.textContent="generar backup firestore",s=K(),i=C("div"),r=C("h5"),r.textContent="CRUD Pacientes",o=K(),dn(a.$$.fragment),l=K(),c=C("div"),dn(u.$$.fragment),y(i,"class","contenedor-pacientes svelte-1y3ujd1"),y(c,"class","contenedor-sesiones svelte-1y3ujd1"),y(e,"class","svelte-1y3ujd1")},m(p,m){se(p,e,m),v(e,n),v(e,s),v(e,i),v(i,r),v(i,o),Ut(a,i,null),v(e,l),v(e,c),Ut(u,c,null),h=!0,d||(f=W(n,"click",t[4]),d=!0)},p(p,[m]){const w={};m&4&&(w.sesiones=p[2]),m&8&&(w.pacientes=p[3]),m&1&&(w.planes=p[0]),m&2&&(w.optionsPlan=p[1]),a.$set(w);const k={};m&4&&(k.sesiones=p[2]),m&8&&(k.pacientes=p[3]),m&1&&(k.planes=p[0]),u.$set(k)},i(p){h||(vt(a.$$.fragment,p),vt(u.$$.fragment,p),h=!0)},o(p){At(a.$$.fragment,p),At(u.$$.fragment,p),h=!1},d(p){p&&ee(e),jt(a),jt(u),d=!1,f()}}}let Nc="particular";function PE(t,e,n){let s=[],i=[],r=[],o=[];xc(()=>{const l=[],c=nt(ke,"sesiones"),u=nt(ke,"Pacientes"),h=nt(ke,"planes"),d=fs(c,qr("diaSesion")),f=fs(u,qr("apellido")),p=fs(h,qr("plan")),m=Hr(d,S=>{n(2,s=S.docs.map(N=>({id:N.id,...N.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(m);const w=Hr(f,S=>{n(3,i=S.docs.map(N=>({id:N.id,...N.data()})))});l.push(w);const k=Hr(p,S=>{n(0,r=S.docs.map(N=>({id:N.id,...N.data()})))});return l.push(k),()=>{l.forEach(S=>S())}});const a=()=>{const l="sesiones"+fi().toString()+"BU",c=nt(ke,l);s.forEach(async p=>{const m=St(c);try{await $r(m,p),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+fi().toString()+"BU",h=nt(ke,u);r.forEach(async p=>{const m=St(h);try{await $r(m,p),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+fi().toString()+"BU",f=nt(ke,d);i.forEach(async p=>{const m=St(f);try{await $r(m,p),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class NE extends Wt{constructor(e){super(),Gt(this,e,PE,DE,Ot,{})}}function OE(t){let e,n,s;return n=new NE({}),{c(){e=C("div"),dn(n.$$.fragment),y(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){se(i,e,r),Ut(n,e,null),s=!0},p:ye,i(i){s||(vt(n.$$.fragment,i),s=!0)},o(i){At(n.$$.fragment,i),s=!1},d(i){i&&ee(e),jt(n)}}}function RE(t){let e,n,s,i,r,o;return{c(){e=C("div"),n=C("h1"),n.textContent="ingrese la contraseña:",s=K(),i=C("input"),y(n,"class","svelte-uueu6x"),y(i,"type","password"),y(i,"class","svelte-uueu6x"),y(e,"class","ingreso svelte-uueu6x")},m(a,l){se(a,e,l),v(e,n),v(e,s),v(e,i),Ce(i,t[1]),r||(o=[W(i,"input",t[3]),W(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Ce(i,a[1])},i:ye,o:ye,d(a){a&&ee(e),r=!1,ft(o)}}}function LE(t){let e,n,s,i;const r=[RE,OE],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=C("main"),s&&s.c(),y(e,"class","svelte-uueu6x")},m(l,c){se(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(mf(),At(o[u],1,1,()=>{o[u]=null}),yf()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),vt(s,1),s.m(e,null)):s=null)},i(l){i||(vt(s),i=!0)},o(l){At(s),i=!1},d(l){l&&ee(e),~n&&o[n].d()}}}function ME(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class xE extends Wt{constructor(e){super(),Gt(this,e,ME,LE,Ot,{})}}new xE({target:document.getElementById("app")});
