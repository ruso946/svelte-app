(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function we(){}function Rc(t){return t()}function Ha(){return Object.create(null)}function nt(t){t.forEach(Rc)}function Lc(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function cf(t){return Object.keys(t).length===0}function uf(t,...e){if(t==null)return we;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(uf(e,n))}function yn(t,e,n){return t.set(n),e}function m(t,e){t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function ks(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function oe(t){return document.createTextNode(t)}function B(){return oe(" ")}function Ro(){return oe("")}function Q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function hf(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mc(t){let e;return{p(...n){e=n,e.forEach(s=>t.push(s))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function pi(t){return t===""?null:+t}function df(t){return Array.from(t.childNodes)}function Ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ce(t,e){t.value=e??""}function gi(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function ff(t){for(const e of t.options)if(!e.disabled)return e}function Bc(t){const e=t.querySelector(":checked")||ff(t);return e&&e.__value}function Zs(t,e,n){t.classList[n?"add":"remove"](e)}function pf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let us;function ts(t){us=t}function Fc(){if(!us)throw new Error("Function called outside component initialization");return us}function Vc(t){Fc().$$.on_mount.push(t)}function Ds(){const t=Fc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=pf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function gf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const bn=[],Ka=[];let Sn=[];const Ga=[],mf=Promise.resolve();let zr=!1;function yf(){zr||(zr=!0,mf.then(xc))}function hs(t){Sn.push(t)}const _r=new Set;let vn=0;function xc(){if(vn!==0)return;const t=us;do{try{for(;vn<bn.length;){const e=bn[vn];vn++,ts(e),vf(e.$$)}}catch(e){throw bn.length=0,vn=0,e}for(ts(null),bn.length=0,vn=0;Ka.length;)Ka.pop()();for(let e=0;e<Sn.length;e+=1){const n=Sn[e];_r.has(n)||(_r.add(n),n())}Sn.length=0}while(bn.length);for(;Ga.length;)Ga.pop()();zr=!1,_r.clear(),ts(t)}function vf(t){if(t.fragment!==null){t.update(),nt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(hs)}}function wf(t){const e=[],n=[];Sn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Sn=e}const li=new Set;let Jt;function Uc(){Jt={r:0,c:[],p:Jt}}function qc(){Jt.r||nt(Jt.c),Jt=Jt.p}function $e(t,e){t&&t.i&&(li.delete(t),t.i(e))}function Je(t,e,n,s){if(t&&t.o){if(li.has(t))return;li.add(t),Jt.c.push(()=>{li.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Dt(t){t&&t.c()}function vt(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||hs(()=>{const o=t.$$.on_mount.map(Rc).filter(Lc);t.$$.on_destroy?t.$$.on_destroy.push(...o):nt(o),t.$$.on_mount=[]}),r.forEach(hs)}function wt(t,e){const n=t.$$;n.fragment!==null&&(wf(n.after_update),nt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bf(t,e){t.$$.dirty[0]===-1&&(bn.push(t),yf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,s,i,r,o,a=[-1]){const l=us;ts(t);const c=t.$$={fragment:null,ctx:[],props:r,update:we,not_equal:i,bound:Ha(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ha(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...g)=>{const p=g.length?g[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&bf(t,h)),d}):[],c.update(),u=!0,nt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=df(e.target);c.fragment&&c.fragment.l(h),h.forEach(H)}else c.fragment&&c.fragment.c();e.intro&&$e(t.$$.fragment),vt(t,e.target,e.anchor,e.customElement),xc()}ts(l)}class St{$destroy(){wt(this,1),this.$destroy=we}$on(e,n){if(!Lc(n))return we;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!cf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let ci=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function Wa(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Qa(t){let e,n=t[12].plan+"",s;return{c(){e=E("option"),s=oe(n),e.__value=t[14],e.value=e.__value},m(i,r){K(i,e,r),m(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&Ie(s,n)},d(i){i&&H(e)}}}function Ef(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=Qa(Wa(t,a,c));return{c(){e=E("div"),n=E("input"),s=B(),i=E("select");for(let c=0;c<l.length;c+=1)l[c].c();f(n,"type","checkbox"),f(n,"name","CheckBoxParticular"),f(n,"id","CheckBoxParticular"),f(i,"name","plan"),f(i,"id","plan"),f(i,"class","svelte-1de4xhy"),t[1]===void 0&&hs(()=>t[8].call(i)),Zs(i,"SelectPlanVisible",t[0]),Zs(i,"SelectPlanHidden",t[3]),f(e,"id","selectPlanContainer"),f(e,"class","svelte-1de4xhy")},m(c,u){K(c,e,u),m(e,n),n.checked=t[0],m(e,s),m(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);gi(i,t[1]),r||(o=[Q(n,"change",t[7]),Q(n,"change",t[4]),Q(i,"change",t[8]),Q(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=Wa(c,a,h);l[h]?l[h].p(d,u):(l[h]=Qa(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&gi(i,c[1]),u&1&&Zs(i,"SelectPlanVisible",c[0]),u&8&&Zs(i,"SelectPlanHidden",c[3])},i:we,o:we,d(c){c&&H(e),ks(l,c),r=!1,nt(o)}}}function _f(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=y=>{n(0,r=y)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var w=y.target.checked;l(w),c()},h=Ds(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function g(){r=this.checked,n(0,r)}function p(){o=Bc(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,g,p]}class Tf extends St{constructor(e){super(),Tt(this,e,_f,Ef,ft,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $c=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Cf;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(t){const e=$c(t);return jc.encodeByteArray(e,!0)},mi=function(t){return If(t).replace(/\./g,"")},Af=function(t){try{return jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Df=()=>kf().__FIREBASE_DEFAULTS__,Pf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Af(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return Df()||Pf()||Nf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Of=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hc=t=>{const e=Of(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rf=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Kc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[mi(JSON.stringify(n)),mi(JSON.stringify(o)),a].join(".")}function Mf(){try{return typeof indexedDB=="object"}catch{return!1}}function Bf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ff,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gc.prototype.create)}}class Gc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function Vf(t,e){return t.replace(xf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xf=/\{\$([^}]+)}/g;function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ya(r)&&Ya(o)){if(!Hr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ya(t){return t!==null&&typeof t=="object"}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Uf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Lf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($f(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(t){return t===Xt?void 0:t}function $f(t){return t.instantiationMode==="EAGER"}/**
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
 */class jf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const zf={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Hf=ie.INFO,Kf={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Gf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Kf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wc{constructor(e){this.name=e,this._logLevel=Hf,this._logHandler=Gf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Wf=(t,e)=>e.some(n=>t instanceof n);let Xa,Ja;function Qf(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yf(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qc=new WeakMap,Kr=new WeakMap,Yc=new WeakMap,Tr=new WeakMap,Lo=new WeakMap;function Xf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qc.set(n,t)}).catch(()=>{}),Lo.set(e,t),e}function Jf(t){if(Kr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let Gr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zf(t){Gr=t(Gr)}function ep(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sr(this),e,...n);return Yc.set(s,e.sort?e.sort():[e]),Bt(s)}:Yf().includes(t)?function(...e){return t.apply(Sr(this),e),Bt(Qc.get(this))}:function(...e){return Bt(t.apply(Sr(this),e))}}function tp(t){return typeof t=="function"?ep(t):(t instanceof IDBTransaction&&Jf(t),Wf(t,Qf())?new Proxy(t,Gr):t)}function Bt(t){if(t instanceof IDBRequest)return Xf(t);if(Tr.has(t))return Tr.get(t);const e=tp(t);return e!==t&&(Tr.set(t,e),Lo.set(e,t)),e}const Sr=t=>Lo.get(t);function np(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Bt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Bt(o.result),l.oldVersion,l.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const sp=["get","getKey","getAll","getAllKeys","count"],ip=["put","add","delete","clear"],Cr=new Map;function Za(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cr.get(e))return Cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ip.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||sp.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Cr.set(e,r),r}Zf(t=>({...t,get:(e,n,s)=>Za(e,n)||t.get(e,n,s),has:(e,n)=>!!Za(e,n)||t.has(e,n)}));/**
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
 */class rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(op(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function op(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",el="0.9.4";/**
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
 */const rn=new Wc("@firebase/app"),ap="@firebase/app-compat",lp="@firebase/analytics-compat",cp="@firebase/analytics",up="@firebase/app-check-compat",hp="@firebase/app-check",dp="@firebase/auth",fp="@firebase/auth-compat",pp="@firebase/database",gp="@firebase/database-compat",mp="@firebase/functions",yp="@firebase/functions-compat",vp="@firebase/installations",wp="@firebase/installations-compat",bp="@firebase/messaging",Ep="@firebase/messaging-compat",_p="@firebase/performance",Tp="@firebase/performance-compat",Sp="@firebase/remote-config",Cp="@firebase/remote-config-compat",Ip="@firebase/storage",Ap="@firebase/storage-compat",kp="@firebase/firestore",Dp="@firebase/firestore-compat",Pp="firebase",Np="9.17.2";/**
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
 */const Qr="[DEFAULT]",Op={[Wr]:"fire-core",[ap]:"fire-core-compat",[cp]:"fire-analytics",[lp]:"fire-analytics-compat",[hp]:"fire-app-check",[up]:"fire-app-check-compat",[dp]:"fire-auth",[fp]:"fire-auth-compat",[pp]:"fire-rtdb",[gp]:"fire-rtdb-compat",[mp]:"fire-fn",[yp]:"fire-fn-compat",[vp]:"fire-iid",[wp]:"fire-iid-compat",[bp]:"fire-fcm",[Ep]:"fire-fcm-compat",[_p]:"fire-perf",[Tp]:"fire-perf-compat",[Sp]:"fire-rc",[Cp]:"fire-rc-compat",[Ip]:"fire-gcs",[Ap]:"fire-gcs-compat",[kp]:"fire-fst",[Dp]:"fire-fst-compat","fire-js":"fire-js",[Pp]:"fire-js-all"};/**
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
 */const yi=new Map,Yr=new Map;function Rp(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(Yr.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Yr.set(e,t);for(const n of yi.values())Rp(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Lp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new Gc("app","Firebase",Lp);/**
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
 */class Mp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const Jc=Np;function Zc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Rf()),!n)throw Ft.create("no-options");const r=yi.get(i);if(r){if(Hr(n,r.options)&&Hr(s,r.config))return r;throw Ft.create("duplicate-app",{appName:i})}const o=new jf(i);for(const l of Yr.values())o.addComponent(l);const a=new Mp(n,s,o);return yi.set(i,a),a}function eu(t=Qr){const e=yi.get(t);if(!e&&t===Qr)return Zc();if(!e)throw Ft.create("no-app",{appName:t});return e}function Vt(t,e,n){var s;let i=(s=Op[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}ds(new Nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Bp="firebase-heartbeat-database",Fp=1,fs="firebase-heartbeat-store";let Ir=null;function tu(){return Ir||(Ir=np(Bp,Fp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fs)}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),Ir}async function Vp(t){try{return(await tu()).transaction(fs).objectStore(fs).get(nu(t))}catch(e){if(e instanceof un)rn.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function tl(t,e){try{const s=(await tu()).transaction(fs,"readwrite");return await s.objectStore(fs).put(e,nu(t)),s.done}catch(n){if(n instanceof un)rn.warn(n.message);else{const s=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(s.message)}}}function nu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xp=1024,Up=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Up}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nl(),{heartbeatsToSend:n,unsentEntries:s}=$p(this._heartbeatsCache.heartbeats),i=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nl(){return new Date().toISOString().substring(0,10)}function $p(t,e=xp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mf()?Bf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sl(t){return mi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zp(t){ds(new Nn("platform-logger",e=>new rp(e),"PRIVATE")),ds(new Nn("heartbeat",e=>new qp(e),"PRIVATE")),Vt(Wr,el,t),Vt(Wr,el,"esm2017"),Vt("fire-js","")}zp("");var Hp="firebase",Kp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(Hp,Kp,"app");var Gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Mo=Mo||{},x=Gp||self;function vi(){}function Fi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ps(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Wp(t){return Object.prototype.hasOwnProperty.call(t,Ar)&&t[Ar]||(t[Ar]=++Qp)}var Ar="closure_uid_"+(1e9*Math.random()>>>0),Qp=0;function Yp(t,e,n){return t.call.apply(t.bind,arguments)}function Xp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=Yp:Fe=Xp,Fe.apply(null,arguments)}function ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Kt(){this.s=this.s,this.o=this.o}var Jp=0;Kt.prototype.s=!1;Kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Jp!=0)&&Wp(this)};Kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const su=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function il(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Fi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Ve(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Zp=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{x.addEventListener("test",vi,e),x.removeEventListener("test",vi,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}var rl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function kr(t,e){return t<e?-1:t>e?1:0}function Vi(){var t=x.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return Vi().indexOf(t)!=-1}function Fo(t){return Fo[" "](t),t}Fo[" "]=vi;function eg(t){var e=sg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var tg=mt("Opera"),On=mt("Trident")||mt("MSIE"),iu=mt("Edge"),Xr=iu||On,ru=mt("Gecko")&&!(Vi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),ng=Vi().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function ou(){var t=x.document;return t?t.documentMode:void 0}var bi;e:{var Dr="",Pr=function(){var t=Vi();if(ru)return/rv:([^\);]+)(\)|;)/.exec(t);if(iu)return/Edge\/([\d\.]+)/.exec(t);if(On)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ng)return/WebKit\/(\S+)/.exec(t);if(tg)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pr&&(Dr=Pr?Pr[1]:""),On){var Nr=ou();if(Nr!=null&&Nr>parseFloat(Dr)){bi=String(Nr);break e}}bi=Dr}var sg={};function ig(){return eg(function(){let t=0;const e=rl(String(bi)).split("."),n=rl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=kr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||kr(i[2].length==0,r[2].length==0)||kr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Jr;if(x.document&&On){var ol=ou();Jr=ol||parseInt(bi,10)||void 0}else Jr=void 0;var rg=Jr;function ps(t,e){if(Ve.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ru){e:{try{Fo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:og[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ps.X.h.call(this)}}Oe(ps,Ve);var og={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ns="closure_listenable_"+(1e6*Math.random()|0),ag=0;function lg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++ag,this.ba=this.ea=!1}function xi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Vo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function au(t){const e={};for(const n in t)e[n]=t[n];return e}const al="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<al.length;r++)n=al[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ui(t){this.src=t,this.g={},this.h=0}Ui.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=eo(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new lg(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Zr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=su(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(xi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eo(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var xo="closure_lm_"+(1e6*Math.random()|0),Or={};function cu(t,e,n,s,i){if(s&&s.once)return hu(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)cu(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Ns]?t.N(e,n,Ps(s)?!!s.capture:!!s,i):uu(t,e,n,!1,s,i)}function uu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ps(i)?!!i.capture:!!i,a=qo(t);if(a||(t[xo]=a=new Ui(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=cg(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Zp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(fu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cg(){function t(n){return e.call(t.src,t.listener,n)}const e=ug;return t}function hu(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)hu(t,e[r],n,s,i);return null}return n=$o(n),t&&t[Ns]?t.O(e,n,Ps(s)?!!s.capture:!!s,i):uu(t,e,n,!0,s,i)}function du(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)du(t,e[r],n,s,i);else s=Ps(s)?!!s.capture:!!s,n=$o(n),t&&t[Ns]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=eo(r,n,s,i),-1<n&&(xi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=qo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eo(e,n,s,i)),(n=-1<t?e[t]:null)&&Uo(n))}function Uo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ns])Zr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(fu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qo(e))?(Zr(n,t),n.h==0&&(n.src=null,e[xo]=null)):xi(t)}}}function fu(t){return t in Or?Or[t]:Or[t]="on"+t}function ug(t,e){if(t.ba)t=!0;else{e=new ps(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Uo(t),t=n.call(s,e)}return t}function qo(t){return t=t[xo],t instanceof Ui?t:null}var Rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(t){return typeof t=="function"?t:(t[Rr]||(t[Rr]=function(e){return t.handleEvent(e)}),t[Rr])}function Ae(){Kt.call(this),this.i=new Ui(this),this.P=this,this.I=null}Oe(Ae,Kt);Ae.prototype[Ns]=!0;Ae.prototype.removeEventListener=function(t,e,n,s){du(this,t,e,n,s)};function Pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ve(e,t);else if(e instanceof Ve)e.target=e.target||t;else{var i=e;e=new Ve(s,t),lu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ti(o,s,!0,e)&&i}if(o=e.g=t,i=ti(o,s,!0,e)&&i,i=ti(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ti(o,s,!1,e)&&i}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xi(n[s]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ae.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Zr(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var jo=x.JSON.stringify;function hg(){var t=mu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dg{constructor(){this.h=this.g=null}add(e,n){const s=pu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var pu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new fg,t=>t.reset());class fg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pg(t){x.setTimeout(()=>{throw t},0)}function gu(t,e){to||gg(),no||(to(),no=!0),mu.add(t,e)}var to;function gg(){var t=x.Promise.resolve(void 0);to=function(){t.then(mg)}}var no=!1,mu=new dg;function mg(){for(var t;t=hg();){try{t.h.call(t.g)}catch(n){pg(n)}var e=pu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}no=!1}function qi(t,e){Ae.call(this),this.h=t||1,this.g=e||x,this.j=Fe(this.lb,this),this.l=Date.now()}Oe(qi,Ae);D=qi.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(zo(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){qi.X.M.call(this),zo(this),delete this.g};function Ho(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:x.setTimeout(t,e||0)}function yu(t){t.g=Ho(()=>{t.g=null,t.i&&(t.i=!1,yu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yg extends Kt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yu(this)}M(){super.M(),this.g&&(x.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(t){Kt.call(this),this.h=t,this.g={}}Oe(gs,Kt);var ll=[];function vu(t,e,n,s){Array.isArray(n)||(n&&(ll[0]=n.toString()),n=ll);for(var i=0;i<n.length;i++){var r=cu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function wu(t){Vo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uo(e)},t),t.g={}}gs.prototype.M=function(){gs.X.M.call(this),wu(this)};gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $i(){this.g=!0}$i.prototype.Aa=function(){this.g=!1};function vg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function wg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Tn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Eg(t,n)+(s?" "+s:"")})}function bg(t,e){t.info(function(){return"TIMEOUT: "+e})}$i.prototype.info=function(){};function Eg(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jo(n)}catch{return e}}var hn={},cl=null;function ji(){return cl=cl||new Ae}hn.Pa="serverreachability";function bu(t){Ve.call(this,hn.Pa,t)}Oe(bu,Ve);function ms(t){const e=ji();Pe(e,new bu(e))}hn.STAT_EVENT="statevent";function Eu(t,e){Ve.call(this,hn.STAT_EVENT,t),this.stat=e}Oe(Eu,Ve);function je(t){const e=ji();Pe(e,new Eu(e,t))}hn.Qa="timingevent";function _u(t,e){Ve.call(this,hn.Qa,t),this.size=e}Oe(_u,Ve);function Os(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return x.setTimeout(function(){t()},e)}var zi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Tu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ko(){}Ko.prototype.h=null;function ul(t){return t.h||(t.h=t.i())}function Su(){}var Rs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Go(){Ve.call(this,"d")}Oe(Go,Ve);function Wo(){Ve.call(this,"c")}Oe(Wo,Ve);var so;function Hi(){}Oe(Hi,Ko);Hi.prototype.g=function(){return new XMLHttpRequest};Hi.prototype.i=function(){return{}};so=new Hi;function Ls(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gs(this),this.O=_g,t=Xr?125:void 0,this.T=new qi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var _g=45e3,io={},Ei={};D=Ls.prototype;D.setTimeout=function(t){this.O=t};function ro(t,e,n){t.K=1,t.v=Gi(Pt(e)),t.s=n,t.P=!0,Iu(t,null)}function Iu(t,e){t.F=Date.now(),Ms(t),t.A=Pt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Lu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Cu,t.g=th(t.l,n?e:null,!t.s),0<t.N&&(t.L=new yg(Fe(t.La,t,t.g),t.N)),vu(t.S,t.g,"readystatechange",t.ib),e=t.H?au(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ms(),vg(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&It(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const u=It(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Xr||this.g&&(this.h.h||this.g.fa()||pl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ms(3):ms(2)),Ki(this);var n=this.g.aa();this.Y=n;t:if(Au(this)){var s=pl(this.g);t="";var i=s.length,r=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),ns(this);var o="";break t}this.h.i=new x.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,wg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var c=a;break t}}c=null}if(n=c)Tn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,oo(this,n);else{this.i=!1,this.o=3,je(12),Zt(this),ns(this);break e}}this.P?(ku(this,u,o),Xr&&this.i&&u==3&&(vu(this.S,this.T,"tick",this.hb),this.T.start())):(Tn(this.j,this.m,o,null),oo(this,o)),u==4&&Zt(this),this.i&&!this.I&&(u==4?Xu(this.l,this):(this.i=!1,Ms(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),Zt(this),ns(this)}}}catch{}finally{}};function Au(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ku(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Tg(t,n),i==Ei){e==4&&(t.o=4,je(14),s=!1),Tn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==io){t.o=4,je(15),Tn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Tn(t.j,t.m,i,null),oo(t,i);Au(t)&&i!=Ei&&i!=io&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ta(e),e.K=!0,je(11))):(Tn(t.j,t.m,n,"[Invalid Chunked Response]"),Zt(t),ns(t))}D.hb=function(){if(this.g){var t=It(this.g),e=this.g.fa();this.C<e.length&&(Ki(this),ku(this,t,e),this.i&&t!=4&&Ms(this))}};function Tg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ei:(n=Number(e.substring(n,s)),isNaN(n)?io:(s+=1,s+n>e.length?Ei:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Zt(this)};function Ms(t){t.V=Date.now()+t.O,Du(t,t.O)}function Du(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Os(Fe(t.gb,t),e)}function Ki(t){t.B&&(x.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(bg(this.j,this.A),this.K!=2&&(ms(),je(17)),Zt(this),this.o=2,ns(this)):Du(this,this.V-t)};function ns(t){t.l.G==0||t.I||Xu(t.l,t)}function Zt(t){Ki(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,zo(t.T),wu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function oo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ao(n.h,t))){if(!t.J&&ao(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Si(n),Yi(n);else break e;ea(n),je(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Os(Fe(n.cb,n),6e3));if(1>=Fu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else en(n,11)}else if((t.J||n.g==t)&&Si(n),!wi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const p=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Qo(r,r.h),r.h=null))}if(s.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,pe(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=eh(s,s.H?s.ka:null,s.V),o.J){Vu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ki(a),Ms(a)),s.g=o}else Qu(s);0<n.i.length&&Xi(n)}else c[0]!="stop"&&c[0]!="close"||en(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?en(n,7):Zo(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}ms(4)}catch{}}function Sg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Cg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Cg(t),s=Sg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ig(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nn){this.h=e!==void 0?e:t.h,_i(this,t.j),this.s=t.s,this.g=t.g,Ti(this,t.m),this.l=t.l,e=t.i;var n=new ys;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hl(this,n),this.o=t.o}else t&&(n=String(t).match(Nu))?(this.h=!!e,_i(this,n[1]||"",!0),this.s=Xn(n[2]||""),this.g=Xn(n[3]||"",!0),Ti(this,n[4]),this.l=Xn(n[5]||"",!0),hl(this,n[6]||"",!0),this.o=Xn(n[7]||"")):(this.h=!!e,this.i=new ys(null,this.h))}nn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Jn(e,dl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Jn(e,dl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Jn(n,n.charAt(0)=="/"?Dg:kg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Jn(n,Ng)),t.join("")};function Pt(t){return new nn(t)}function _i(t,e,n){t.j=n?Xn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ti(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hl(t,e,n){e instanceof ys?(t.i=e,Og(t.i,t.h)):(n||(e=Jn(e,Pg)),t.i=new ys(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function Gi(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Jn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ag),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ag(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dl=/[#\/\?@]/g,kg=/[#\?:]/g,Dg=/[#\?]/g,Pg=/[#\?@]/g,Ng=/#/g;function ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gt(t){t.g||(t.g=new Map,t.h=0,t.i&&Ig(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ys.prototype;D.add=function(t,e){Gt(this),this.i=null,t=qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ou(t,e){Gt(t),e=qn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ru(t,e){return Gt(t),e=qn(t,e),t.g.has(e)}D.forEach=function(t,e){Gt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};D.oa=function(){Gt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};D.W=function(t){Gt(this);let e=[];if(typeof t=="string")Ru(this,t)&&(e=e.concat(this.g.get(qn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Gt(this),this.i=null,t=qn(this,t),Ru(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Lu(t,e,n){Ou(t,e),0<n.length&&(t.i=null,t.g.set(qn(t,e),Bo(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Og(t,e){e&&!t.j&&(Gt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ou(this,s),Lu(this,i,n))},t)),t.j=e}var Rg=class{constructor(e,n){this.h=e,this.g=n}};function Mu(t){this.l=t||Lg,x.PerformanceNavigationTiming?(t=x.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(x.g&&x.g.Ga&&x.g.Ga()&&x.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lg=10;function Bu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fu(t){return t.h?1:t.g?t.g.size:0}function ao(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qo(t,e){t.g?t.g.add(e):t.h=e}function Vu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Mu.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bo(t.i)}function Yo(){}Yo.prototype.stringify=function(t){return x.JSON.stringify(t,void 0)};Yo.prototype.parse=function(t){return x.JSON.parse(t,void 0)};function Mg(){this.g=new Yo}function Bg(t,e,n){const s=n||"";try{Pu(t,function(i,r){let o=i;Ps(i)&&(o=jo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Fg(t,e){const n=new $i;if(x.Image){const s=new Image;s.onload=ei(ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ei(ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ei(ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ei(ni,n,s,"TestLoadImage: timeout",!1,e),x.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ni(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Bs(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(Bs,Ko);Bs.prototype.g=function(){return new Wi(this.l,this.j)};Bs.prototype.i=function(t){return function(){return t}}({});function Wi(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Wi,Ae);var Xo=0;D=Wi.prototype;D.open=function(t,e){if(this.readyState!=Xo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||x).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=Xo};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof x.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Uu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fs(this):vs(this),this.readyState==3&&Uu(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,Fs(this))};D.Ua=function(t){this.g&&(this.response=t,Fs(this))};D.ga=function(){this.g&&Fs(this)};function Fs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vg=x.JSON.parse;function ge(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qu,this.K=this.L=!1}Oe(ge,Ae);var qu="",xg=/^https?$/i,Ug=["POST","PUT"];D=ge.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():so.g(),this.C=this.u?ul(this.u):ul(so),this.g.onreadystatechange=Fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){fl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=x.FormData&&t instanceof x.FormData,!(0<=su(Ug,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zu(this),0<this.B&&((this.K=qg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.qa,this)):this.A=Ho(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){fl(this,r)}};function qg(t){return On&&ig()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Mo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function fl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$u(t),Qi(t)}function $u(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Qi(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qi(this,!0)),ge.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?ju(this):this.fb())};D.fb=function(){ju(this)};function ju(t){if(t.h&&typeof Mo<"u"&&(!t.C[1]||It(t)!=4||t.aa()!=2)){if(t.v&&It(t)==4)Ho(t.Ha,0,t);else if(Pe(t,"readystatechange"),It(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Nu)[1]||null;if(!i&&x.self&&x.self.location){var r=x.self.location.protocol;i=r.substr(0,r.length-1)}s=!xg.test(i?i.toLowerCase():"")}n=s}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<It(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$u(t)}}finally{Qi(t)}}}}function Qi(t,e){if(t.g){zu(t);const n=t.g,s=t.C[0]?vi:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function zu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(x.clearTimeout(t.A),t.A=null)}function It(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vg(e)}};function pl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Hu(t){let e="";return Vo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Jo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Hu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function Yn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ku(t){this.Ca=0,this.i=[],this.j=new $i,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Yn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Yn("baseRetryDelayMs",5e3,t),this.bb=Yn("retryDelaySeedMs",1e4,t),this.$a=Yn("forwardChannelMaxRetries",2,t),this.ta=Yn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Mu(t&&t.concurrentRequestLimit),this.Fa=new Mg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=Ku.prototype;D.ma=8;D.G=1;function Zo(t){if(Gu(t),t.G==3){var e=t.U++,n=Pt(t.F);pe(n,"SID",t.I),pe(n,"RID",e),pe(n,"TYPE","terminate"),Vs(t,n),e=new Ls(t,t.j,e,void 0),e.K=2,e.v=Gi(Pt(n)),n=!1,x.navigator&&x.navigator.sendBeacon&&(n=x.navigator.sendBeacon(e.v.toString(),"")),!n&&x.Image&&(new Image().src=e.v,n=!0),n||(e.g=th(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ms(e)}Zu(t)}function Yi(t){t.g&&(ta(t),t.g.cancel(),t.g=null)}function Gu(t){Yi(t),t.u&&(x.clearTimeout(t.u),t.u=null),Si(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&x.clearTimeout(t.m),t.m=null)}function Xi(t){Bu(t.h)||t.m||(t.m=!0,gu(t.Ja,t),t.C=0)}function $g(t,e){return Fu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Os(Fe(t.Ja,t,e),Ju(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ls(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=au(r),lu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Wu(this,i,e),n=Pt(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),Vs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Hu(r)))+"&"+e:this.o&&Jo(n,this.o,r)),Qo(this.h,i),this.Ya&&pe(n,"TYPE","init"),this.O?(pe(n,"$req",e),pe(n,"SID","null"),i.Z=!0,ro(i,n,null)):ro(i,n,e),this.G=2}}else this.G==3&&(t?gl(this,t):this.i.length==0||Bu(this.h)||gl(this))};function gl(t,e){var n;e?n=e.m:n=t.U++;const s=Pt(t.F);pe(s,"SID",t.I),pe(s,"RID",n),pe(s,"AID",t.T),Vs(t,s),t.o&&t.s&&Jo(s,t.o,t.s),n=new Ls(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Wu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qo(t.h,n),ro(n,s,e)}function Vs(t,e){t.ia&&Vo(t.ia,function(n,s){pe(e,s,n)}),t.l&&Pu({},function(n,s){pe(e,s,n)})}function Wu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Fe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Bg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Qu(t){t.g||t.u||(t.Z=1,gu(t.Ia,t),t.A=0)}function ea(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Os(Fe(t.Ia,t),Ju(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,Yu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Os(Fe(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,je(10),Yi(this),Yu(this))};function ta(t){t.B!=null&&(x.clearTimeout(t.B),t.B=null)}function Yu(t){t.g=new Ls(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Pt(t.sa);pe(e,"RID","rpc"),pe(e,"SID",t.I),pe(e,"CI",t.L?"0":"1"),pe(e,"AID",t.T),pe(e,"TYPE","xmlhttp"),Vs(t,e),t.o&&t.s&&Jo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Gi(Pt(e)),n.s=null,n.P=!0,Iu(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Yi(this),ea(this),je(19))};function Si(t){t.v!=null&&(x.clearTimeout(t.v),t.v=null)}function Xu(t,e){var n=null;if(t.g==e){Si(t),ta(t),t.g=null;var s=2}else if(ao(t.h,e))n=e.D,Vu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=ji(),Pe(s,new _u(s,n)),Xi(t)}else Qu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&$g(t,e)||s==2&&ea(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:en(t,5);break;case 4:en(t,10);break;case 3:en(t,6);break;default:en(t,2)}}}function Ju(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function en(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Fe(t.kb,t);n||(n=new nn("//www.google.com/images/cleardot.gif"),x.location&&x.location.protocol=="http"||_i(n,"https"),Gi(n)),Fg(n.toString(),s)}else je(2);t.G=0,t.l&&t.l.va(e),Zu(t),Gu(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Zu(t){if(t.G=0,t.la=[],t.l){const e=xu(t.h);(e.length!=0||t.i.length!=0)&&(il(t.la,e),il(t.la,t.i),t.h.i.length=0,Bo(t.i),t.i.length=0),t.l.ua()}}function eh(t,e,n){var s=n instanceof nn?Pt(n):new nn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ti(s,s.m);else{var i=x.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new nn(null,void 0);s&&_i(r,s),e&&(r.g=e),i&&Ti(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&pe(s,n,e),pe(s,"VER",t.ma),Vs(t,s),s}function th(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ge(new Bs({jb:!0})):new ge(t.ra),e.Ka(t.H),e}function nh(){}D=nh.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function Ci(){if(On&&!(10<=Number(rg)))throw Error("Environmental error: no available transport.")}Ci.prototype.g=function(t,e){return new et(t,e)};function et(t,e){Ae.call(this),this.g=new Ku(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $n(this)}Oe(et,Ae);et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=eh(t,null,t.V),Xi(t)};et.prototype.close=function(){Zo(this.g)};et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jo(t),t=n);e.i.push(new Rg(e.ab++,t)),e.G==3&&Xi(e)};et.prototype.M=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,et.X.M.call(this)};function sh(t){Go.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(sh,Go);function ih(){Wo.call(this),this.status=1}Oe(ih,Wo);function $n(t){this.g=t}Oe($n,nh);$n.prototype.xa=function(){Pe(this.g,"a")};$n.prototype.wa=function(t){Pe(this.g,new sh(t))};$n.prototype.va=function(t){Pe(this.g,new ih)};$n.prototype.ua=function(){Pe(this.g,"b")};Ci.prototype.createWebChannel=Ci.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;zi.NO_ERROR=0;zi.TIMEOUT=8;zi.HTTP_ERROR=6;Tu.COMPLETE="complete";Su.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;var jg=function(){return new Ci},zg=function(){return ji()},Lr=zi,Hg=Tu,Kg=hn,ml={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Gg=Bs,si=Su,Wg=ge;const yl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Wc("@firebase/firestore");function vl(){return on.logLevel}function O(t,...e){if(on.logLevel<=ie.DEBUG){const n=e.map(na);on.debug(`Firestore (${jn}): ${t}`,...n)}}function Nt(t,...e){if(on.logLevel<=ie.ERROR){const n=e.map(na);on.error(`Firestore (${jn}): ${t}`,...n)}}function lo(t,...e){if(on.logLevel<=ie.WARN){const n=e.map(na);on.warn(`Firestore (${jn}): ${t}`,...n)}}function na(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: `+t;throw Nt(e),new Error(e)}function ue(t,e){t||F()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class Yg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Xg{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ue(typeof s.accessToken=="string"),new rh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Re(e)}}class Jg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Zg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Jg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class em{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.A=n.token,new em(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=nm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function re(t,e){return t<e?-1:t>e?1:0}function Rn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new be(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new be(0,0))}static max(){return new q(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,s){n===void 0?n=0:n>e.length&&F(),s===void 0?s=e.length-n:s>e.length-n&&F(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ws{construct(e,n,s){return new fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new k(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends ws{construct(e,n,s){return new Me(e,n,s)}static isValidIdentifier(e){return sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new k(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(fe.fromString(e))}static fromName(e){return new L(fe.fromString(e).popFirst(5))}static empty(){return new L(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new fe(e.slice()))}}function im(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new qt(i,L.empty(),e)}function rm(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(q.min(),L.empty(),-1)}static max(){return new qt(q.max(),L.empty(),-1)}}function om(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==am)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,s)=>{n(e)})}static reject(e){return new _((n,s)=>{s(e)})}static waitFor(e){return new _((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=_.resolve(!1);for(const s of e)n=n.next(i=>i?_.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new _((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new _((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}sa.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class bs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function dn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return t==null}function Ii(t){return t===0&&1/t==-1/0}function um(t){return typeof t=="number"&&Number.isInteger(t)&&!Ii(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class hm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new hm("Invalid base64 string: "+i):i}}(e);return new xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const dm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(ue(!!t),typeof t=="string"){let e=0;const n=dm.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ln(t){return typeof t=="string"?xe.fromBase64String(t):xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ch(t){const e=t.mapValue.fields.__previous_value__;return lh(e)?ch(e):e}function Es(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function an(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lh(t)?4:fm(t)?9007199254740991:10:F()}function bt(t,e){if(t===e)return!0;const n=an(t);if(n!==an(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Es(t).isEqual(Es(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$t(s.timestampValue),o=$t(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ln(s.bytesValue).isEqual(Ln(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ye(s.doubleValue),o=ye(i.doubleValue);return r===o?Ii(r)===Ii(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Rn(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(wl(r)!==wl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!bt(r[a],o[a])))return!1;return!0}(t,e);default:return F()}}function _s(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function Mn(t,e){if(t===e)return 0;const n=an(t),s=an(e);if(n!==s)return re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ye(i.integerValue||i.doubleValue),a=ye(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bl(t.timestampValue,e.timestampValue);case 4:return bl(Es(t),Es(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ln(i),a=Ln(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=re(o[l],a[l]);if(c!==0)return c}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=re(ye(i.latitude),ye(r.latitude));return o!==0?o:re(ye(i.longitude),ye(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Mn(o[l],a[l]);if(c)return c}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ii.mapValue&&r===ii.mapValue)return 0;if(i===ii.mapValue)return 1;if(r===ii.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=re(a[u],c[u]);if(h!==0)return h;const d=Mn(o[a[u]],l[c[u]]);if(d!==0)return d}return re(a.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function bl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=$t(t),s=$t(e),i=re(n.seconds,s.seconds);return i!==0?i:re(n.nanos,s.nanos)}function Bn(t){return co(t)}function co(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=$t(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ln(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=co(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${co(s.fields[a])}`;return r+"}"}(t.mapValue):F();var e,n}function El(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uo(t){return!!t&&"integerValue"in t}function ia(t){return!!t&&"arrayValue"in t}function _l(t){return!!t&&"nullValue"in t}function Tl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ui(t){return!!t&&"mapValue"in t}function ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return dn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ss(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ai{constructor(e,n){this.position=e,this.inclusive=n}}function Sl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),n.key):s=Mn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Cl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uh{}class ve extends uh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new gm(e,n,s):n==="array-contains"?new vm(e,s):n==="in"?new wm(e,s):n==="not-in"?new bm(e,s):n==="array-contains-any"?new Em(e,s):new ve(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new mm(e,s):new ym(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mn(n,this.value)):n!==null&&an(this.value)===an(n)&&this.matchesComparison(Mn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ht extends uh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new ht(e,n)}matches(e){return hh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hh(t){return t.op==="and"}function dh(t){return pm(t)&&hh(t)}function pm(t){for(const e of t.filters)if(e instanceof ht)return!1;return!0}function ho(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+Bn(t.value);if(dh(t))return t.filters.map(e=>ho(e)).join(",");{const e=t.filters.map(n=>ho(n)).join(",");return`${t.op}(${e})`}}function fh(t,e){return t instanceof ve?function(n,s){return s instanceof ve&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(t,e):t instanceof ht?function(n,s){return s instanceof ht&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&fh(r,s.filters[o]),!0):!1}(t,e):void F()}function ph(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Bn(e.value)}`}(t):t instanceof ht?function(e){return e.op.toString()+" {"+e.getFilters().map(ph).join(" ,")+"}"}(t):"Filter"}class gm extends ve{constructor(e,n,s){super(e,n,s),this.key=L.fromName(s.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class mm extends ve{constructor(e,n){super(e,"in",n),this.keys=gh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ym extends ve{constructor(e,n){super(e,"not-in",n),this.keys=gh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>L.fromName(s.referenceValue))}class vm extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ia(n)&&_s(n.arrayValue,this.value)}}class wm extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_s(this.value.arrayValue,n)}}class bm extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_s(this.value.arrayValue,n)}}class Em extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ia(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>_s(this.value.arrayValue,s))}}/**
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
 */class Cn{constructor(e,n="asc"){this.field=e,this.dir=n}}function _m(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}}class ri{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??ke.EMPTY,this.right=r??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Il(this.data.getIterator())}getIteratorFrom(e){return new Il(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class Il{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Xe([])}unionWith(e){let n=new Ee(Me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Xe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ui(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ss(n)}setAll(e){let n=Me.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ss(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ui(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){dn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Qe(ss(this.value))}}function mh(t){const e=[];return dn(t.fields,(n,s)=>{const i=new Me([n]);if(ui(s)){const r=mh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,q.min(),q.min(),q.min(),Qe.empty(),0)}static newFoundDocument(e,n,s,i){return new Le(e,1,n,q.min(),s,i,0)}static newNoDocument(e,n){return new Le(e,2,n,q.min(),q.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,q.min(),q.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Tm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Al(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Tm(t,e,n,s,i,r,o)}function ra(t){const e=$(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ho(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ji(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),e._t=n}return e._t}function oa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_m(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fh(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cl(t.startAt,e.startAt)&&Cl(t.endAt,e.endAt)}function fo(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Sm(t,e,n,s,i,r,o,a){return new zn(t,e,n,s,i,r,o,a)}function aa(t){return new zn(t)}function kl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function la(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function yh(t){return t.collectionGroup!==null}function In(t){const e=$(t);if(e.wt===null){e.wt=[];const n=Zi(e),s=la(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Cn(n)),e.wt.push(new Cn(Me.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Cn(Me.keyField(),r))}}}return e.wt}function Ot(t){const e=$(t);if(!e.gt)if(e.limitType==="F")e.gt=Al(e.path,e.collectionGroup,In(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of In(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Cn(r.field,o))}const s=e.endAt?new Ai(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ai(e.startAt.position,e.startAt.inclusive):null;e.gt=Al(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function po(t,e){e.getFirstInequalityField(),Zi(t);const n=t.filters.concat([e]);return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function go(t,e,n){return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function er(t,e){return oa(Ot(t),Ot(e))&&t.limitType===e.limitType}function vh(t){return`${ra(Ot(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ph(s)).join(", ")}]`),Ji(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bn(s)).join(",")),`Target(${n})`}(Ot(t))}; limitType=${t.limitType})`}function tr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of In(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,In(n),s)||n.endAt&&!function(i,r,o){const a=Sl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,In(n),s))}(t,e)}function Cm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wh(t){return(e,n)=>{let s=!1;for(const i of In(t)){const r=Im(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Im(t,e,n){const s=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Mn(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Eh(t){return{integerValue:""+t}}function Am(t,e){return um(e)?Eh(e):bh(t,e)}/**
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
 */class nr{constructor(){this._=void 0}}function km(t,e,n){return t instanceof ki?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ts?Th(t,e):t instanceof Ss?Sh(t,e):function(s,i){const r=_h(s,i),o=Dl(r)+Dl(s.It);return uo(r)&&uo(s.It)?Eh(o):bh(s.Tt,o)}(t,e)}function Dm(t,e,n){return t instanceof Ts?Th(t,e):t instanceof Ss?Sh(t,e):n}function _h(t,e){return t instanceof Di?uo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ki extends nr{}class Ts extends nr{constructor(e){super(),this.elements=e}}function Th(t,e){const n=Ch(e);for(const s of t.elements)n.some(i=>bt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ss extends nr{constructor(e){super(),this.elements=e}}function Sh(t,e){let n=Ch(e);for(const s of t.elements)n=n.filter(i=>!bt(i,s));return{arrayValue:{values:n}}}class Di extends nr{constructor(e,n){super(),this.Tt=e,this.It=n}}function Dl(t){return ye(t.integerValue||t.doubleValue)}function Ch(t){return ia(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Pm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ts&&s instanceof Ts||n instanceof Ss&&s instanceof Ss?Rn(n.elements,s.elements,bt):n instanceof Di&&s instanceof Di?bt(n.It,s.It):n instanceof ki&&s instanceof ki}(t.transform,e.transform)}class Nm{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sr{}function Ih(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ca(t.key,it.none()):new qs(t.key,t.data,it.none());{const n=t.data,s=Qe.empty();let i=new Ee(Me.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Wt(t.key,s,new Xe(i.toArray()),it.none())}}function Om(t,e,n){t instanceof qs?function(s,i,r){const o=s.value.clone(),a=Nl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Wt?function(s,i,r){if(!hi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Nl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ah(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function is(t,e,n,s){return t instanceof qs?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=i.value.clone(),c=Ol(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Wt?function(i,r,o,a){if(!hi(i.precondition,r))return o;const l=Ol(i.fieldTransforms,a,r),c=r.data;return c.setAll(Ah(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return hi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Rm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=_h(s.transform,i||null);r!=null&&(n===null&&(n=Qe.empty()),n.set(s.field,r))}return n||null}function Pl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Rn(n,s,(i,r)=>Pm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qs extends sr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wt extends sr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ah(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Nl(t,e,n){const s=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Dm(o,a,n[i]))}return s}function Ol(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,km(r,o,e))}return s}class ca extends sr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lm extends sr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,te;function Bm(t){switch(t){default:return F();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function kh(t){if(t===void 0)return Nt("GRPC error has no .code"),b.UNKNOWN;switch(t){case me.OK:return b.OK;case me.CANCELLED:return b.CANCELLED;case me.UNKNOWN:return b.UNKNOWN;case me.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case me.INTERNAL:return b.INTERNAL;case me.UNAVAILABLE:return b.UNAVAILABLE;case me.UNAUTHENTICATED:return b.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case me.NOT_FOUND:return b.NOT_FOUND;case me.ALREADY_EXISTS:return b.ALREADY_EXISTS;case me.PERMISSION_DENIED:return b.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case me.ABORTED:return b.ABORTED;case me.OUT_OF_RANGE:return b.OUT_OF_RANGE;case me.UNIMPLEMENTED:return b.UNIMPLEMENTED;case me.DATA_LOSS:return b.DATA_LOSS;default:return F()}}(te=me||(me={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new _e(L.comparator);function Rt(){return Fm}const Dh=new _e(L.comparator);function Zn(...t){let e=Dh;for(const n of t)e=e.insert(n.key,n);return e}function Ph(t){let e=Dh;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function tn(){return rs()}function Nh(){return rs()}function rs(){return new Hn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vm=new _e(L.comparator),xm=new Ee(L.comparator);function Y(...t){let e=xm;for(const n of t)e=e.add(n);return e}const Um=new Ee(re);function Oh(){return Um}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,$s.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ir(q.min(),i,Oh(),Rt(),Y())}}class $s{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new $s(s,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Rh{constructor(e,n){this.targetId=e,this.Rt=n}}class Lh{constructor(e,n,s=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Rl{constructor(){this.bt=0,this.vt=Ml(),this.Pt=xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=Y(),n=Y(),s=Y();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:F()}}),new $s(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Ml()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class qm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Rt(),this.Kt=Ll(),this.Gt=new Ee(re)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(fo(r))if(s===0){const o=new L(r.path);this.zt(n,o,Le.newNoDocument(o,q.min()))}else ue(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&fo(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Le.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=Y();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new ir(e,n,this.Gt,this.Ut,s);return this.Ut=Rt(),this.Kt=Ll(),this.Gt=new Ee(re),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Rl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(re),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Rl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ll(){return new _e(L.comparator)}function Ml(){return new _e(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zm=(()=>({and:"AND",or:"OR"}))();class Hm{constructor(e,n){this.databaseId=e,this.yt=n}}function Pi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Km(t,e){return Pi(t,e.toTimestamp())}function yt(t){return ue(!!t),q.fromTimestamp(function(e){const n=$t(e);return new be(n.seconds,n.nanos)}(t))}function ua(t,e){return function(n){return new fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Bh(t){const e=fe.fromString(t);return ue(Uh(e)),e}function yo(t,e){return ua(t.databaseId,e.path)}function Mr(t,e){const n=Bh(e);if(n.get(1)!==t.databaseId.projectId)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Fh(n))}function vo(t,e){return ua(t.databaseId,e)}function Gm(t){const e=Bh(t);return e.length===4?fe.emptyPath():Fh(e)}function wo(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fh(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bl(t,e,n){return{name:yo(t,e),fields:n.value.mapValue.fields}}function Wm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(ue(c===void 0||typeof c=="string"),xe.fromBase64String(c||"")):(ue(c===void 0||c instanceof Uint8Array),xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:kh(l.code);return new k(c,l.message||"")}(o);n=new Lh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mr(t,s.document.name),r=yt(s.document.updateTime),o=s.document.createTime?yt(s.document.createTime):q.min(),a=new Qe({mapValue:{fields:s.document.fields}}),l=Le.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new di(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Mr(t,s.document),r=s.readTime?yt(s.readTime):q.min(),o=Le.newNoDocument(i,r),a=s.removedTargetIds||[];n=new di([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Mr(t,s.document),r=s.removedTargetIds||[];n=new di([],r,i,null)}else{if(!("filter"in e))return F();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Mm(i),o=s.targetId;n=new Rh(o,r)}}return n}function Qm(t,e){let n;if(e instanceof qs)n={update:Bl(t,e.key,e.value)};else if(e instanceof ca)n={delete:yo(t,e.key)};else if(e instanceof Wt)n={update:Bl(t,e.key,e.data),updateMask:iy(e.fieldMask)};else{if(!(e instanceof Lm))return F();n={verify:yo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ki)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ts)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ss)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Di)return{fieldPath:r.field.canonicalString(),increment:o.It};throw F()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Km(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function Ym(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?yt(s.updateTime):yt(i);return r.isEqual(q.min())&&(r=yt(i)),new Nm(r,s.transformResults||[])}(n,e))):[]}function Xm(t,e){return{documents:[vo(t,e.path)]}}function Jm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=vo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return xh(ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:En(u.field),direction:ty(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||Ji(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Zm(t){let e=Gm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ue(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Vh(u);return h instanceof ht&&dh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Cn(_n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ji(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ai(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ai(d,h)}(n.endAt)),Sm(e,i,o,r,a,"F",l,c)}function ey(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=_n(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=_n(e.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_n(e.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=_n(e.unaryFilter.field);return ve.create(r,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(_n(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ht.create(e.compositeFilter.filters.map(n=>Vh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function ty(t){return $m[t]}function ny(t){return jm[t]}function sy(t){return zm[t]}function En(t){return{fieldPath:t.canonicalString()}}function _n(t){return Me.fromServerFormat(t.fieldPath)}function xh(t){return t instanceof ve?function(e){if(e.op==="=="){if(Tl(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NAN"}};if(_l(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tl(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NAN"}};if(_l(e.value))return{unaryFilter:{field:En(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(e.field),op:ny(e.op),value:e.value}}}(t):t instanceof ht?function(e){const n=e.getFilters().map(s=>xh(s));return n.length===1?n[0]:{compositeFilter:{op:sy(e.op),filters:n}}}(t):F()}function iy(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Om(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=is(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Nh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ih(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(q.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(n,s)=>Pl(n,s))&&Rn(this.baseMutations,e.baseMutations,(n,s)=>Pl(n,s))}}class ha{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ue(e.mutations.length===s.length);let i=Vm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ha(e,n,s,i)}}/**
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
 */class oy{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,n,s,i,r=q.min(),o=q.min(),a=xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.oe=e}}function ly(t){const e=Zm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?go(e,e.limit,"L"):e}/**
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
 */class cy{constructor(){this.Ze=new uy}addToCollectionParentIndex(e,n){return this.Ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(qt.min())}updateCollectionGroup(e,n,s){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class uy{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Ee(fe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Ee(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hy{constructor(){this.changes=new Hn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?_.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&is(s.mutation,i,Xe.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Y()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Y()){const i=tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Zn();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=tn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Y()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Rt();const o=rs(),a=rs();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Wt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),is(u.mutation,c,u.mutation.getFieldMask(),be.now())):o.set(c.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new dy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=rs();let i=new _e((o,a)=>o-a),r=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Xe.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Nh();u.forEach(d=>{if(!r.has(d)){const g=Ih(n.get(d),s.get(d));g!==null&&h.set(d,g),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return _.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):_.resolve(tn());let a=-1,l=r;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?_.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Y())).next(u=>({batchId:a,changes:Ph(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(s=>{let i=Zn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Zn();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(c,u){return new zn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Le.newInvalidDocument(c)))});let o=Zn();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&is(c.mutation,l,Xe.empty(),be.now()),tr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return _.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:yt(s.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:ly(s.bundledQuery),readTime:yt(s.readTime)}}(n)),_.resolve()}}/**
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
 */class gy{constructor(){this.overlays=new _e(L.comparator),this.ss=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const s=tn();return _.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),_.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),_.resolve()}getOverlaysForCollection(e,n,s){const i=tn(),r=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new _e((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=tn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=tn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new oy(n,s));let r=this.ss.get(n);r===void 0&&(r=Y(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.rs=new Ee(Se.os),this.us=new Ee(Se.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Se(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Se(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new L(new fe([])),s=new Se(n,e),i=new Se(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new L(new fe([])),s=new Se(n,e),i=new Se(n,e+1);let r=Y();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Se(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return L.comparator(e.key,n.key)||re(e.gs,n.gs)}static cs(e,n){return re(e.gs,n.gs)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(Se.os)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ry(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Se(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return _.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),_.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ee(re);return n.forEach(i=>{const r=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),_.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;L.isDocumentKey(r)||(r=r.child(""));const o=new Se(new L(r),0);let a=new Ee(re);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),_.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return _.forEach(n.mutations,i=>{const r=new Se(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Se(n,0),i=this.ps.firstAfterOrEqual(s);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.Rs=e,this.docs=new _e(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return _.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let s=Rt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Le.newInvalidDocument(i))}),_.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Rt();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||om(rm(u),s)<=0||(i.has(u.key)||tr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return _.resolve(r)}getAllFromCollectionGroup(e,n,s,i){F()}bs(e,n){return _.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new vy(this)}getSize(e){return _.resolve(this.size)}}class vy extends hy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),_.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.persistence=e,this.vs=new Hn(n=>ra(n),oa),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new da,this.targetCount=0,this.Ss=Fn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),_.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Fn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.xn(n),_.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(r).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return _.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),_.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),_.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return _.resolve(s)}containsKey(e,n){return _.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new sa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new wy(this),this.indexManager=new cy,this.remoteDocumentCache=function(s){return new yy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new ay(n),this.Os=new py(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new my(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){O("MemoryPersistence","Starting transaction:",e);const i=new Ey(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return _.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Ey extends lm{constructor(e){super(),this.currentSequenceNumber=e}}class fa{constructor(e){this.persistence=e,this.Bs=new da,this.Ls=null}static qs(e){return new fa(e)}get Us(){if(this.Ls)return this.Ls;throw F()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),_.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),_.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Us,s=>{const i=L.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,q.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return _.or([()=>_.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=Y(),i=Y();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new pa(e,n.fromCache,s,i)}}/**
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
 */class _y{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(kl(n))return _.resolve(null);let s=Ot(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=go(n,null,"F"),s=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Y(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,go(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return kl(n)||i.isEqual(q.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(vl()<=ie.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mo(n)),this.qi(e,o,n,im(i,-1)))})}Bi(e,n){let s=new Ee(wh(e));return n.forEach((i,r)=>{tr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return vl()<=ie.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",mo(n)),this.Oi.getDocumentsMatchingQuery(e,n,qt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new _e(re),this.Gi=new Hn(r=>ra(r),oa),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fy(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Sy(t,e,n,s){return new Ty(t,e,n,s)}async function qh(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=Y();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Cy(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=_.resolve();return h.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(p=>{const y=l.docVersions.get(g);ue(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function $h(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Iy(t,e){const n=$(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let g=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(xe.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),i=i.insert(h,g),function(p,y,w){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,g,u)&&a.push(n.Ns.updateTargetData(r,g))});let l=Rt(),c=Y();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(Ay(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(q.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return _.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function Ay(t,e,n){let s=Y(),i=Y();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Rt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function ky(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Dy(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,_.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new sn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function bo(t,e,n){const s=$(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Us(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Fl(t,e,n){const s=$(t);let i=q.min(),r=Y();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=$(a),h=u.Gi.get(c);return h!==void 0?_.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:q.min(),n?r:Y())).next(a=>(Py(s,Cm(e),a),{documents:a,Yi:r})))}function Py(t,e,n){let s=t.Qi.get(e)||q.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Vl{constructor(){this.activeTargetIds=Oh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ny{constructor(){this.Ur=new Vl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Vl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Oy{Gr(e){}shutdown(){}}/**
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
 */class xl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);O("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw lo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+jn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Ry[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Wg;a.setWithCredentials(!0),a.listenOnce(Hg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Lr.NO_ERROR:const c=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Lr.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new k(b.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const u=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(y)>=0?y:b.UNKNOWN}(d.status);o(new k(g,d.message))}else o(new k(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(b.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=jg(),o=zg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Gg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new Ly({Yr:p=>{h?O("Connection","Not sending because WebChannel is closed:",p):(u||(O("Connection","Opening WebChannel transport."),c.open(),u=!0),O("Connection","WebChannel sending:",p),c.send(p))},Zr:()=>c.close()}),g=(p,y,w)=>{p.listen(y,N=>{try{w(N)}catch(I){setTimeout(()=>{throw I},0)}})};return g(c,si.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),g(c,si.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.oo())}),g(c,si.EventType.ERROR,p=>{h||(h=!0,lo("Connection","WebChannel transport errored:",p),d.oo(new k(b.UNAVAILABLE,"The operation could not be completed")))}),g(c,si.EventType.MESSAGE,p=>{var y;if(!h){const w=p.data[0];ue(!!w);const N=w,I=N.error||((y=N[0])===null||y===void 0?void 0:y.error);if(I){O("Connection","WebChannel received error:",I);const C=I.status;let T=function(W){const X=me[W];if(X!==void 0)return kh(X)}(C),M=I.message;T===void 0&&(T=b.INTERNAL,M="Unknown error status: "+C+" with message "+I.message),h=!0,d.oo(new k(T,M)),c.close()}else O("Connection","WebChannel received:",w),d.uo(w)}}),g(o,Kg.STAT_EVENT,p=>{p.stat===ml.PROXY?O("Connection","Detected buffering proxy"):p.stat===ml.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Br(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t){return new Hm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new jh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new k(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class By extends zh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Wm(this.Tt,e),s=function(i){if(!("targetChange"in i))return q.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?q.min():r.readTime?yt(r.readTime):q.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=wo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=fo(a)?{documents:Xm(i,a)}:{query:Jm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Mh(i,r.resumeToken):r.snapshotVersion.compareTo(q.min())>0&&(o.readTime=Pi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ey(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=wo(this.Tt),n.removeTarget=e,this.qo(n)}}class Fy extends zh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Ym(e.writeResults,e.commitTime),s=yt(e.commitTime);return this.listener.eu(s,n)}return ue(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=wo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Qm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(b.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new k(b.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class xy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Nt(n),this.cu=!1):O("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{fn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=$(a);l.mu.add(4),await js(l),l.pu.set("Unknown"),l.mu.delete(4),await or(l)}(this))})}),this.pu=new xy(s,i)}}async function or(t){if(fn(t))for(const e of t.gu)await e(!0)}async function js(t){for(const e of t.gu)await e(!1)}function Hh(t,e){const n=$(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ya(n)?ma(n):Kn(n).Mo()&&ga(n,e))}function Kh(t,e){const n=$(t),s=Kn(n);n.wu.delete(e),s.Mo()&&Gh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():fn(n)&&n.pu.set("Unknown"))}function ga(t,e){t.Iu.Ft(e.targetId),Kn(t).Jo(e)}function Gh(t,e){t.Iu.Ft(e),Kn(t).Yo(e)}function ma(t){t.Iu=new qm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Kn(t).start(),t.pu.au()}function ya(t){return fn(t)&&!Kn(t).Oo()&&t.wu.size>0}function fn(t){return $(t).mu.size===0}function Wh(t){t.Iu=void 0}async function qy(t){t.wu.forEach((e,n)=>{ga(t,e)})}async function $y(t,e){Wh(t),ya(t)?(t.pu.fu(e),ma(t)):t.pu.set("Unknown")}async function jy(t,e,n){if(t.pu.set("Online"),e instanceof Lh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ni(t,s)}else if(e instanceof di?t.Iu.Qt(e):e instanceof Rh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(q.min()))try{const s=await $h(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(xe.EMPTY_BYTE_STRING,l.snapshotVersion)),Gh(i,a);const c=new sn(l.target,a,1,l.sequenceNumber);ga(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){O("RemoteStore","Failed to raise snapshot:",s),await Ni(t,s)}}async function Ni(t,e,n){if(!Us(e))throw e;t.mu.add(1),await js(t),t.pu.set("Offline"),n||(n=()=>$h(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await or(t)})}function Qh(t,e){return e().catch(n=>Ni(t,n,e))}async function ar(t){const e=$(t),n=jt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;zy(e);)try{const i=await ky(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Hy(e,i)}catch(i){await Ni(e,i)}Yh(e)&&Xh(e)}function zy(t){return fn(t)&&t._u.length<10}function Hy(t,e){t._u.push(e);const n=jt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Yh(t){return fn(t)&&!jt(t).Oo()&&t._u.length>0}function Xh(t){jt(t).start()}async function Ky(t){jt(t).su()}async function Gy(t){const e=jt(t);for(const n of t._u)e.tu(n.mutations)}async function Wy(t,e,n){const s=t._u.shift(),i=ha.from(s,e,n);await Qh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ar(t)}async function Qy(t,e){e&&jt(t).Xo&&await async function(n,s){if(i=s.code,Bm(i)&&i!==b.ABORTED){const r=n._u.shift();jt(n).$o(),await Qh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ar(n)}var i}(t,e),Yh(t)&&Xh(t)}async function Ul(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const s=fn(n);n.mu.add(3),await js(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await or(n)}async function Yy(t,e){const n=$(t);e?(n.mu.delete(2),await or(n)):e||(n.mu.add(2),await js(n),n.pu.set("Unknown"))}function Kn(t){return t.Tu||(t.Tu=function(e,n,s){const i=$(e);return i.ru(),new By(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:qy.bind(null,t),no:$y.bind(null,t),Ho:jy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ya(t)?ma(t):t.pu.set("Unknown")):(await t.Tu.stop(),Wh(t))})),t.Tu}function jt(t){return t.Eu||(t.Eu=function(e,n,s){const i=$(e);return i.ru(),new Fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Ky.bind(null,t),no:Qy.bind(null,t),nu:Gy.bind(null,t),eu:Wy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await ar(t)):(await t.Eu.stop(),t._u.length>0&&(O("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new va(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(t,e){if(Nt("AsyncQueue",`${e}: ${t}`),Us(t))return new k(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.comparator=e?(n,s)=>e(n,s)||L.comparator(n.key,s.key):(n,s)=>L.comparator(n.key,s.key),this.keyedMap=Zn(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new An(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof An)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new An;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Au=new _e(L.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):F():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Vn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vn(e,n,An.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&er(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.bu=void 0,this.listeners=[]}}class Jy{constructor(){this.queries=new Hn(e=>vh(e),er),this.onlineState="Unknown",this.vu=new Set}}async function Jh(t,e){const n=$(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Xy),i)try{r.bu=await n.onListen(s)}catch(o){const a=wa(o,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&ba(n)}async function Zh(t,e){const n=$(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Zy(t,e){const n=$(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ba(n)}function ev(t,e,n){const s=$(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function ba(t){t.vu.forEach(e=>{e.next()})}class ed{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Vn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.key=e}}class nd{constructor(e){this.key=e}}class tv{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Y(),this.mutatedKeys=Y(),this.ju=wh(e),this.zu=new An(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new ql,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),g=tr(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;d&&g?d.data.isEqual(g.data)?p!==y&&(s.track({type:3,doc:g}),w=!0):this.Yu(d,g)||(s.track({type:2,doc:g}),w=!0,(l&&this.ju(g,l)>0||c&&this.ju(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),w=!0):d&&!g&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(g?(o=o.add(g),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const g=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(h)-g(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new Vn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new ql,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=Y(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new nd(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new td(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=Y();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Vn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class nv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class sv{constructor(e){this.key=e,this.ic=!1}}class iv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Hn(a=>vh(a),er),this.uc=new Map,this.cc=new Set,this.ac=new _e(L.comparator),this.hc=new Map,this.lc=new da,this.fc={},this.dc=new Map,this._c=Fn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function rv(t,e){const n=gv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Dy(n.localStore,Ot(e));n.isPrimaryClient&&Hh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ov(n,e,s,a==="current",o.resumeToken)}return i}async function ov(t,e,n,s,i){t.mc=(h,d,g)=>async function(p,y,w,N){let I=y.view.Hu(w);I.Li&&(I=await Fl(p.localStore,y.query,!1).then(({documents:M})=>y.view.Hu(M,I)));const C=N&&N.targetChanges.get(y.targetId),T=y.view.applyChanges(I,p.isPrimaryClient,C);return jl(p,y.targetId,T.tc),T.snapshot}(t,h,d,g);const r=await Fl(t.localStore,e,!0),o=new tv(e,r.Yi),a=o.Hu(r.documents),l=$s.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);jl(t,n,c.tc);const u=new nv(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function av(t,e){const n=$(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!er(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await bo(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Kh(n.remoteStore,s.targetId),Eo(n,s.targetId)}).catch(xs)):(Eo(n,s.targetId),await bo(n.localStore,s.targetId,!0))}async function lv(t,e,n){const s=mv(t);try{const i=await function(r,o){const a=$(r),l=be.now(),c=o.reduce((d,g)=>d.add(g.key),Y());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Rt(),p=Y();return a.ji.getEntries(d,c).next(y=>{g=y,g.forEach((w,N)=>{N.isValidDocument()||(p=p.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(y=>{u=y;const w=[];for(const N of o){const I=Rm(N,u.get(N.key).overlayedDocument);I!=null&&w.push(new Wt(N.key,I,mh(I.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:Ph(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new _e(re)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await zs(s,i.changes),await ar(s.remoteStore)}catch(i){const r=wa(i,"Failed to persist write");n.reject(r)}}async function sd(t,e){const n=$(t);try{const s=await Iy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ue(o.ic):i.removedDocuments.size>0&&(ue(o.ic),o.ic=!1))}),await zs(n,s,e)}catch(s){await xs(s)}}function $l(t,e,n){const s=$(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=$(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&ba(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function cv(t,e,n){const s=$(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new _e(L.comparator);o=o.insert(r,Le.newNoDocument(r,q.min()));const a=Y().add(r),l=new ir(q.min(),new Map,new Ee(re),o,a);await sd(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),Ea(s)}else await bo(s.localStore,e,!1).then(()=>Eo(s,e,n)).catch(xs)}async function uv(t,e){const n=$(t),s=e.batch.batchId;try{const i=await Cy(n.localStore,e);rd(n,s,null),id(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await zs(n,i)}catch(i){await xs(i)}}async function hv(t,e,n){const s=$(t);try{const i=await function(r,o){const a=$(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ue(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);rd(s,e,n),id(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await zs(s,i)}catch(i){await xs(i)}}function id(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function rd(t,e,n){const s=$(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Eo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||od(t,s)})}function od(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Kh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Ea(t))}function jl(t,e,n){for(const s of n)s instanceof td?(t.lc.addReference(s.key,e),dv(t,s)):s instanceof nd?(O("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||od(t,s.key)):F()}function dv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(O("SyncEngine","New document in limbo: "+n),t.cc.add(s),Ea(t))}function Ea(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new L(fe.fromString(e)),s=t._c.next();t.hc.set(s,new sv(n)),t.ac=t.ac.insert(n,s),Hh(t.remoteStore,new sn(Ot(aa(n.path)),s,2,sa.at))}}async function zs(t,e,n){const s=$(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=pa.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=$(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>_.forEach(l,h=>_.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>_.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Us(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),g=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(g);c.Ki=c.Ki.insert(h,p)}}}(s.localStore,r))}async function fv(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const s=await qh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new k(b.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await zs(n,s.Wi)}}function pv(t,e){const n=$(t),s=n.hc.get(e);if(s&&s.ic)return Y().add(s.key);{let i=Y();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function gv(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cv.bind(null,e),e.rc.Ho=Zy.bind(null,e.eventManager),e.rc.gc=ev.bind(null,e.eventManager),e}function mv(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hv.bind(null,e),e}class yv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=rr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Sy(this.persistence,new _y,e.initialUser,this.Tt)}Tc(e){return new by(fa.qs,this.Tt)}Ic(e){return new Ny}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=fv.bind(null,this.syncEngine),await Yy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Jy}createDatastore(e){const n=rr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new My(i));var i;return function(r,o,a,l){return new Vy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>$l(this.syncEngine,a,0),o=xl.C()?new xl:new Oy,new Uy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new iv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);O("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await js(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Nt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Re.UNAUTHENTICATED,this.clientId=oh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=wa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function bv(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await qh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _v(t);O("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Ul(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Ul(e.remoteStore,r)),t.onlineComponents=e}async function _v(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await bv(t,new yv)),t.offlineComponents}async function ld(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await Ev(t,new vv)),t.onlineComponents}function Tv(t){return ld(t).then(e=>e.syncEngine)}async function _o(t){const e=await ld(t),n=e.eventManager;return n.onListen=rv.bind(null,e.syncEngine),n.onUnlisten=av.bind(null,e.syncEngine),n}function Sv(t,e,n={}){const s=new xt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new ad({next:h=>{r.enqueueAndForget(()=>Zh(i,u)),h.fromCache&&a.source==="server"?l.reject(new k(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new ed(o,c,{includeMetadataChanges:!0,Ou:!0});return Jh(i,u)}(await _o(t),t.asyncQueue,e,n,s)),s.promise}const zl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e,n){if(!n)throw new k(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cv(t,e,n,s){if(e===!0&&s===!0)throw new k(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hl(t){if(!L.isDocumentKey(t))throw new k(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kl(t){if(L.isDocumentKey(t))throw new k(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lr(t);throw new k(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qg;switch(n.type){case"gapi":const s=n.client;return new Zg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zl.get(e);n&&(O("ComponentProvider","Removing Datastore"),zl.delete(e),n.terminate())}(this),Promise.resolve()}}function Iv(t,e,n,s={}){var i;const r=(t=rt(t,cr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&lo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Re.MOCK_USER;else{o=Kc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new k(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Re(l)}t._authCredentials=new Yg(new rh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Qt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Qt(this.firestore,e,this._query)}}class Ut extends Qt{constructor(e,n,s){super(e,n,aa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new L(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function st(t,e,...n){if(t=ut(t),cd("collection","path",e),t instanceof cr){const s=fe.fromString(e,...n);return Kl(s),new Ut(t,null,s)}{if(!(t instanceof ze||t instanceof Ut))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return Kl(s),new Ut(t.firestore,null,s)}}function At(t,e,...n){if(t=ut(t),arguments.length===1&&(e=oh.R()),cd("doc","path",e),t instanceof cr){const s=fe.fromString(e,...n);return Hl(s),new ze(t,null,new L(s))}{if(!(t instanceof ze||t instanceof Ut))throw new k(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fe.fromString(e,...n));return Hl(s),new ze(t.firestore,t instanceof Ut?t.converter:null,new L(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new jh(this,"async_queue_retry"),this.Hc=()=>{const n=Br();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Br();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Br();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Us(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Nt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=va.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&F()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Wl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class zt extends cr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Av,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ud(this),this._firestoreClient.terminate()}}function kv(t,e){const n=typeof t=="object"?t:eu(),s=typeof t=="string"?t:e||"(default)",i=Xc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Hc("firestore");r&&Iv(i,...r)}return i}function _a(t){return t._firestoreClient||ud(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ud(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new cm(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new wv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xn(xe.fromBase64String(e))}catch(n){throw new k(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xn(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=/^__.*__$/;class Pv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms):new qs(e,this.data,n,this.fieldTransforms)}}class hd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Wt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Ca{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ca(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Oi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(dd(this.ra)&&Dv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Nv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||rr(e)}wa(e,n,s,i=!1){return new Ca({ra:e,methodName:n,_a:s,path:Me.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function hr(t){const e=t._freezeSettings(),n=rr(t._databaseId);return new Nv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Ia("Data must be an object, but it was:",o,s);const a=pd(s,o);let l,c;if(r.merge)l=new Xe(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=To(e,h,n);if(!o.contains(d))throw new k(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);md(u,d)||u.push(d)}l=new Xe(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Pv(new Qe(a),l,c)}class dr extends Ta{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dr}}function Ov(t,e,n,s){const i=t.wa(1,e,n);Ia("Data must be an object, but it was:",i,s);const r=[],o=Qe.empty();dn(s,(l,c)=>{const u=Aa(e,l,n);c=ut(c);const h=i.ha(u);if(c instanceof dr)r.push(u);else{const d=Hs(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Xe(r);return new hd(o,a,i.fieldTransforms)}function Rv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[To(e,s,n)],l=[i];if(r.length%2!=0)throw new k(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(To(e,r[d])),l.push(r[d+1]);const c=[],u=Qe.empty();for(let d=a.length-1;d>=0;--d)if(!md(c,a[d])){const g=a[d];let p=l[d];p=ut(p);const y=o.ha(g);if(p instanceof dr)c.push(g);else{const w=Hs(p,y);w!=null&&(c.push(g),u.set(g,w))}}const h=new Xe(c);return new hd(u,h,o.fieldTransforms)}function Lv(t,e,n,s=!1){return Hs(n,t.wa(s?4:3,e))}function Hs(t,e){if(gd(t=ut(t)))return Ia("Unsupported field value:",e,t),pd(t,e);if(t instanceof Ta)return function(n,s){if(!dd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Hs(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Am(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:Pi(s.Tt,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pi(s.Tt,i)}}if(n instanceof Sa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xn)return{bytesValue:Mh(s.Tt,n._byteString)};if(n instanceof ze){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ua(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${lr(n)}`)}(t,e)}function pd(t,e){const n={};return ah(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dn(t,(s,i)=>{const r=Hs(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function gd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Sa||t instanceof xn||t instanceof ze||t instanceof Ta)}function Ia(t,e,n){if(!gd(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=lr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function To(t,e,n){if((e=ut(e))instanceof ur)return e._internalPath;if(typeof e=="string")return Aa(t,e);throw Oi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mv=new RegExp("[~\\*/\\[\\]]");function Aa(t,e,n){if(e.search(Mv)>=0)throw Oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ur(...e.split("."))._internalPath}catch{throw Oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new k(b.INVALID_ARGUMENT,a+t+l)}function md(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bv extends yd{data(){return super.data()}}function fr(t,e){return typeof e=="string"?Aa(t,e):e instanceof ur?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ka{}class wd extends ka{}function os(t,e,...n){let s=[];e instanceof ka&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Da).length,o=i.filter(a=>a instanceof pr).length;if(r>1||r>0&&o>0)throw new k(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class pr extends wd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new pr(e,n,s)}_apply(e){const n=this._parse(e);return bd(e._query,n),new Qt(e.firestore,e.converter,po(e._query,n))}_parse(e){const n=hr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new k(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Yl(u,c);const d=[];for(const g of u)d.push(Ql(a,i,g));h={arrayValue:{values:d}}}else h=Ql(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Yl(u,c),h=Lv(o,r,u,c==="in"||c==="not-in");return ve.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function So(t,e,n){const s=e,i=fr("where",t);return pr._create(i,s,n)}class Da extends ka{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Da(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)bd(r,a),r=po(r,a)}(e._query,n),new Qt(e.firestore,e.converter,po(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pa extends wd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Pa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Cn(i,r);return function(a,l){if(la(a)===null){const c=Zi(a);c!==null&&Ed(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Qt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new zn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Fr(t,e="asc"){const n=e,s=fr("orderBy",t);return Pa._create(s,n)}function Ql(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new k(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yh(e)&&n.indexOf("/")!==-1)throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(fe.fromString(n));if(!L.isDocumentKey(s))throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return El(t,new L(s))}if(n instanceof ze)return El(t,n._key);throw new k(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lr(n)}.`)}function Yl(t,e){if(!Array.isArray(t)||t.length===0)throw new k(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bd(t,e){if(e.isInequality()){const s=Zi(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new k(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=la(t);r!==null&&Ed(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Ed(t,e,n){if(!n.isEqual(e))throw new k(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Fv{convertValue(e,n="none"){switch(an(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const s={};return dn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Sa(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ch(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const n=$t(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=fe.fromString(e);ue(Uh(s));const i=new bs(s.get(1),s.get(3)),r=new L(s.popFirst(5));return i.isEqual(n)||Nt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Td extends yd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fi extends Td{data(e={}){return super.data(e)}}class Sd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fi(this._firestore,this._userDataWriter,s.key,s,new es(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new es(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Vv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class Na extends Fv{constructor(e){super(),this.firestore=e}convertBytes(e){return new xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function Cd(t){t=rt(t,Qt);const e=rt(t.firestore,zt),n=_a(e),s=new Na(e);return vd(t._query),Sv(n,t._query).then(i=>new Sd(e,s,t,i))}function Vr(t,e,n){t=rt(t,ze);const s=rt(t.firestore,zt),i=_d(t.converter,e,n);return gr(s,[fd(hr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,it.none())])}function Oa(t,e,n,...s){t=rt(t,ze);const i=rt(t.firestore,zt),r=hr(i);let o;return o=typeof(e=ut(e))=="string"||e instanceof ur?Rv(r,"updateDoc",t._key,e,n,s):Ov(r,"updateDoc",t._key,e),gr(i,[o.toMutation(t._key,it.exists(!0))])}function Co(t){return gr(rt(t.firestore,zt),[new ca(t._key,it.none())])}function Id(t,e){const n=rt(t.firestore,zt),s=At(t),i=_d(t.converter,e);return gr(n,[fd(hr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,it.exists(!1))]).then(()=>s)}function xr(t,...e){var n,s,i;t=ut(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wl(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wl(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof ze)c=rt(t.firestore,zt),u=aa(t._key.path),l={next:h=>{e[o]&&e[o](xv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rt(t,Qt);c=rt(h.firestore,zt),u=h._query;const d=new Na(c);l={next:g=>{e[o]&&e[o](new Sd(c,d,h,g))},error:e[o+1],complete:e[o+2]},vd(t._query)}return function(h,d,g,p){const y=new ad(p),w=new ed(d,y,g);return h.asyncQueue.enqueueAndForget(async()=>Jh(await _o(h),w)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>Zh(await _o(h),w))}}(_a(c),u,a,l)}function gr(t,e){return function(n,s){const i=new xt;return n.asyncQueue.enqueueAndForget(async()=>lv(await Tv(n),s,i)),i.promise}(_a(t),e)}function xv(t,e,n){const s=n.docs.get(e._key),i=new Na(t);return new Td(t,i,e._key,s,new es(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){jn=n})(Jc),ds(new Nn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new zt(new Xg(n.getProvider("auth-internal")),new tm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Vt(yl,"3.8.4",t),Vt(yl,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="firebasestorage.googleapis.com",Uv="storageBucket",qv=2*60*1e3,$v=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends un{constructor(e,n,s=0){super(Ur(e),`Firebase Storage: ${n} (${Ur(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ur(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function Ur(t){return"storage/"+t}function jv(){const t="An unknown error occurred, please check the error payload for server response.";return new Ct(Et.UNKNOWN,t)}function zv(){return new Ct(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hv(){return new Ct(Et.CANCELED,"User canceled the upload/download.")}function Kv(t){return new Ct(Et.INVALID_URL,"Invalid URL '"+t+"'.")}function Gv(t){return new Ct(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xl(t){return new Ct(Et.INVALID_ARGUMENT,t)}function kd(){return new Ct(Et.APP_DELETED,"The Firebase app was deleted.")}function Wv(t){return new Ct(Et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(s.path==="")return s;throw Gv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===Ad?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",N=new RegExp(`^https?://${y}/${i}/${w}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:g,indices:p,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<C.length;T++){const M=C[T],W=M.regex.exec(e);if(W){const X=W[M.indices.bucket];let se=W[M.indices.path];se||(se=""),s=new ct(X,se),M.postModify(s);break}}if(s==null)throw Kv(e);return s}}class Qv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(g,l())},w)}function d(){r&&clearTimeout(r)}function g(w,...N){if(c){d();return}if(w){d(),u.call(null,w,...N);return}if(l()||o){d(),u.call(null,w,...N);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let p=!1;function y(w){p||(p=!0,d(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Xv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return t!==void 0}function Jl(t,e,n,s){if(s<e)throw Xl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Xl(`Invalid value for '${t}'. Expected ${n} or less.`)}function Zv(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ew(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new oi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ri.NO_ERROR,l=r.getStatus();if(!a||ew(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ri.ABORT;s(!1,new oi(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new oi(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Jv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=jv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?kd():Hv();o(l)}else{const l=zv();o(l)}};this.canceled_?n(!1,new oi(!1,null,!0)):this.backoffId_=Yv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class oi{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function nw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ow(t,e,n,s,i,r,o=!0){const a=Zv(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return iw(c,e),nw(c,n),sw(c,r),rw(c,s),new tw(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Li{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Li(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lw(this._location.path)}get storage(){return this._service}get parent(){const e=aw(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Wv(e)}}function Zl(t,e){const n=e==null?void 0:e[Uv];return n==null?null:ct.makeFromBucketSpec(n,t)}function cw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Kc(i,t.app.options.projectId))}class uw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Ad,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qv,this._maxUploadRetryTime=$v,this._requests=new Set,i!=null?this._bucket=ct.makeFromBucketSpec(i,this._host):this._bucket=Zl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=Zl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Li(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Qv(kd());{const o=ow(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ec="@firebase/storage",tc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="storage";function hw(t=eu(),e){t=ut(t);const s=Xc(t,Dd).getImmediate({identifier:e}),i=Hc("storage");return i&&dw(s,...i),s}function dw(t,e,n,s={}){cw(t,e,n,s)}function fw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new uw(n,s,i,e,Jc)}function pw(){ds(new Nn(Dd,fw,"PUBLIC").setMultipleInstances(!0)),Vt(ec,tc,""),Vt(ec,tc,"esm2017")}pw();const gw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Pd=Zc(gw);hw(Pd);const De=kv(Pd);var mw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nd={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(mw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),g=i("y",this.options),p=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?g:"-"+g;o.style.transform="translate("+p+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var g=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+g):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+g):(c[h].style[u]=a[u]+"px",a[u]+=d+g)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Nd);var vw=Nd.exports;const kn=yw(vw),Od="SweetAlert2:",ww=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ra=t=>t.charAt(0).toUpperCase()+t.slice(1),tt=t=>Array.prototype.slice.call(t),Ye=t=>{console.warn(`${Od} ${typeof t=="object"?t.join(" "):t}`)},pn=t=>{console.error(`${Od} ${t}`)},nc=[],bw=t=>{nc.includes(t)||(nc.push(t),Ye(t))},Ew=(t,e)=>{bw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},mr=t=>typeof t=="function"?t():t,La=t=>t&&typeof t.toPromise=="function",Ks=t=>La(t)?t.toPromise():Promise.resolve(t),Ma=t=>t&&Promise.resolve(t)===t,Dn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_w=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Tw={},Sw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Rd=t=>Object.prototype.hasOwnProperty.call(Dn,t),Ld=t=>_w.indexOf(t)!==-1,Io=t=>Tw[t],Cw=t=>{Rd(t)||Ye(`Unknown parameter "${t}"`)},Iw=t=>{Sw.includes(t)&&Ye(`The parameter "${t}" is incompatible with toasts`)},Aw=t=>{Io(t)&&Ew(t,Io(t))},kw=t=>{!t.backdrop&&t.allowOutsideClick&&Ye('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Cw(e),t.toast&&Iw(e),Aw(e)},Dw="swal2-",Md=t=>{const e={};for(const n in t)e[t[n]]=Dw+t[n];return e},v=Md(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),as=Md(["success","warning","info","question","error"]),Ue=()=>document.body.querySelector(`.${v.container}`),Gs=t=>{const e=Ue();return e?e.querySelector(t):null},at=t=>Gs(`.${t}`),ae=()=>at(v.popup),Ws=()=>at(v.icon),Bd=()=>at(v.title),Mi=()=>at(v["html-container"]),Fd=()=>at(v.image),Vd=()=>at(v["progress-steps"]),yr=()=>at(v["validation-message"]),dt=()=>Gs(`.${v.actions} .${v.confirm}`),Ht=()=>Gs(`.${v.actions} .${v.deny}`),Pw=()=>at(v["input-label"]),Gn=()=>Gs(`.${v.loader}`),ln=()=>Gs(`.${v.actions} .${v.cancel}`),Qs=()=>at(v.actions),xd=()=>at(v.footer),vr=()=>at(v["timer-progress-bar"]),Ba=()=>at(v.close),Nw=`
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
`,Fa=()=>{const t=tt(ae().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=tt(ae().querySelectorAll(Nw)).filter(n=>n.getAttribute("tabindex")!=="-1");return ww(t.concat(e)).filter(n=>Ze(n))},Va=()=>kt(document.body,v.shown)&&!kt(document.body,v["toast-shown"])&&!kt(document.body,v["no-backdrop"]),wr=()=>ae()&&kt(ae(),v.toast),Ow=()=>ae().hasAttribute("data-loading"),Pn={previousBodyPadding:null},Be=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");tt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),tt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},kt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Rw=(t,e)=>{tt(t.classList).forEach(n=>{!Object.values(v).includes(n)&&!Object.values(as).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},ot=(t,e,n)=>{if(Rw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ye(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);ne(t,e.customClass[n])}},xa=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${v.popup} > .${v[e]}`);case"checkbox":return t.querySelector(`.${v.popup} > .${v.checkbox} input`);case"radio":return t.querySelector(`.${v.popup} > .${v.radio} input:checked`)||t.querySelector(`.${v.popup} > .${v.radio} input:first-child`);case"range":return t.querySelector(`.${v.popup} > .${v.range} input`);default:return t.querySelector(`.${v.popup} > .${v.input}`)}},Ud=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},qd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},ne=(t,e)=>{qd(t,e,!0)},_t=(t,e)=>{qd(t,e,!1)},Mt=(t,e)=>{const n=tt(t.childNodes);for(let s=0;s<n.length;s++)if(kt(n[s],e))return n[s]},ls=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ne=(t,e="flex")=>{t.style.display=e},qe=t=>{t.style.display="none"},sc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},br=(t,e,n)=>{e?Ne(t,n):qe(t)},Ze=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Lw=()=>!Ze(dt())&&!Ze(Ht())&&!Ze(ln()),ic=t=>t.scrollHeight>t.clientHeight,$d=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ua=(t,e=!1)=>{const n=vr();Ze(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Mw=()=>{const t=vr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},jd=()=>typeof window>"u"||typeof document>"u",Bw=100,j={},Fw=()=>{j.previousActiveElement&&j.previousActiveElement.focus?(j.previousActiveElement.focus(),j.previousActiveElement=null):document.body&&document.body.focus()},Vw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;j.restoreFocusTimeout=setTimeout(()=>{Fw(),e()},Bw),window.scrollTo(n,s)}),xw=`
 <div aria-labelledby="${v.title}" aria-describedby="${v["html-container"]}" class="${v.popup}" tabindex="-1">
   <button type="button" class="${v.close}"></button>
   <ul class="${v["progress-steps"]}"></ul>
   <div class="${v.icon}"></div>
   <img class="${v.image}" />
   <h2 class="${v.title}" id="${v.title}"></h2>
   <div class="${v["html-container"]}" id="${v["html-container"]}"></div>
   <input class="${v.input}" />
   <input type="file" class="${v.file}" />
   <div class="${v.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${v.select}"></select>
   <div class="${v.radio}"></div>
   <label for="${v.checkbox}" class="${v.checkbox}">
     <input type="checkbox" />
     <span class="${v.label}"></span>
   </label>
   <textarea class="${v.textarea}"></textarea>
   <div class="${v["validation-message"]}" id="${v["validation-message"]}"></div>
   <div class="${v.actions}">
     <div class="${v.loader}"></div>
     <button type="button" class="${v.confirm}"></button>
     <button type="button" class="${v.deny}"></button>
     <button type="button" class="${v.cancel}"></button>
   </div>
   <div class="${v.footer}"></div>
   <div class="${v["timer-progress-bar-container"]}">
     <div class="${v["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Uw=()=>{const t=Ue();return t?(t.remove(),_t([document.documentElement,document.body],[v["no-backdrop"],v["toast-shown"],v["has-column"]]),!0):!1},Yt=()=>{j.currentInstance.resetValidationMessage()},qw=()=>{const t=ae(),e=Mt(t,v.input),n=Mt(t,v.file),s=t.querySelector(`.${v.range} input`),i=t.querySelector(`.${v.range} output`),r=Mt(t,v.select),o=t.querySelector(`.${v.checkbox} input`),a=Mt(t,v.textarea);e.oninput=Yt,n.onchange=Yt,r.onchange=Yt,o.onchange=Yt,a.oninput=Yt,s.oninput=()=>{Yt(),i.value=s.value},s.onchange=()=>{Yt(),s.nextSibling.value=s.value}},$w=t=>typeof t=="string"?document.querySelector(t):t,jw=t=>{const e=ae();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},zw=t=>{window.getComputedStyle(t).direction==="rtl"&&ne(Ue(),v.rtl)},Hw=t=>{const e=Uw();if(jd()){pn("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=v.container,e&&ne(n,v["no-transition"]),Be(n,xw);const s=$w(t.target);s.appendChild(n),jw(t),zw(s),qw()},qa=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Kw(t,e):t&&Be(e,t)},Kw=(t,e)=>{t.jquery?Gw(e,t):Be(e,t.toString())},Gw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Cs=(()=>{if(jd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Ww=()=>{const t=document.createElement("div");t.className=v["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Qw=(t,e)=>{const n=Qs(),s=Gn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?qe(n):Ne(n),ot(n,e,"actions"),Yw(n,s,e),Be(s,e.loaderHtml),ot(s,e,"loader")};function Yw(t,e,n){const s=dt(),i=Ht(),r=ln();qr(s,"confirm",n),qr(i,"deny",n),qr(r,"cancel",n),Xw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Xw(t,e,n,s){if(!s.buttonsStyling)return _t([t,e,n],v.styled);ne([t,e,n],v.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,ne(t,v["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,ne(e,v["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,ne(n,v["default-outline"]))}function qr(t,e,n){br(t,n[`show${Ra(e)}Button`],"inline-block"),Be(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=v[e],ot(t,n,`${e}Button`),ne(t,n[`${e}ButtonClass`])}function Jw(t,e){typeof e=="string"?t.style.background=e:e||ne([document.documentElement,document.body],v["no-backdrop"])}function Zw(t,e){e in v?ne(t,v[e]):(Ye('The "position" parameter is not valid, defaulting to "center"'),ne(t,v.center))}function eb(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in v&&ne(t,v[n])}}const tb=(t,e)=>{const n=Ue();n&&(Jw(n,e.backdrop),Zw(n,e.position),eb(n,e.grow),ot(n,e,"container"))},G={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},nb=["input","file","range","select","radio","checkbox","textarea"],sb=(t,e)=>{const n=ae(),s=G.innerParams.get(t),i=!s||e.input!==s.input;nb.forEach(r=>{const o=v[r],a=Mt(n,o);ob(r,e.inputAttributes),a.className=o,i&&qe(a)}),e.input&&(i&&ib(e),ab(e))},ib=t=>{if(!We[t.input])return pn(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=zd(t.input),n=We[t.input](e,t);Ne(n),setTimeout(()=>{Ud(n)})},rb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},ob=(t,e)=>{const n=xa(ae(),t);if(n){rb(n);for(const s in e)n.setAttribute(s,e[s])}},ab=t=>{const e=zd(t.input);t.customClass&&ne(e,t.customClass.input)},$a=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Ys=(t,e,n)=>{if(n.inputLabel){t.id=v.input;const s=document.createElement("label"),i=v["input-label"];s.setAttribute("for",t.id),s.className=i,ne(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},zd=t=>{const e=v[t]?v[t]:v.input;return Mt(ae(),e)},We={};We.text=We.email=We.password=We.number=We.tel=We.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Ma(e.inputValue)||Ye(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Ys(t,t,e),$a(t,e),t.type=e.input,t);We.file=(t,e)=>(Ys(t,t,e),$a(t,e),t);We.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Ys(n,t,e),t};We.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Be(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Ys(t,t,e),t};We.radio=t=>(t.textContent="",t);We.checkbox=(t,e)=>{const n=xa(ae(),"checkbox");n.value="1",n.id=v.checkbox,n.checked=!!e.inputValue;const s=t.querySelector("span");return Be(s,e.inputPlaceholder),t};We.textarea=(t,e)=>{t.value=e.inputValue,$a(t,e),Ys(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(ae()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?ae().style.width=`${r}px`:ae().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const lb=(t,e)=>{const n=Mi();ot(n,e,"htmlContainer"),e.html?(qa(e.html,n),Ne(n,"block")):e.text?(n.textContent=e.text,Ne(n,"block")):qe(n),sb(t,e)},cb=(t,e)=>{const n=xd();br(n,e.footer),e.footer&&qa(e.footer,n),ot(n,e,"footer")},ub=(t,e)=>{const n=Ba();Be(n,e.closeButtonHtml),ot(n,e,"closeButton"),br(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},hb=(t,e)=>{const n=G.innerParams.get(t),s=Ws();if(n&&e.icon===n.icon){oc(s,e),rc(s,e);return}if(!e.icon&&!e.iconHtml)return qe(s);if(e.icon&&Object.keys(as).indexOf(e.icon)===-1)return pn(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),qe(s);Ne(s),oc(s,e),rc(s,e),ne(s,e.showClass.icon)},rc=(t,e)=>{for(const n in as)e.icon!==n&&_t(t,as[n]);ne(t,as[e.icon]),gb(t,e),db(),ot(t,e,"icon")},db=()=>{const t=ae(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},fb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,pb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,oc=(t,e)=>{t.textContent="",e.iconHtml?Be(t,ac(e.iconHtml)):e.icon==="success"?Be(t,fb):e.icon==="error"?Be(t,pb):Be(t,ac({question:"?",warning:"!",info:"i"}[e.icon]))},gb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])sc(t,n,"backgroundColor",e.iconColor);sc(t,".swal2-success-ring","borderColor",e.iconColor)}},ac=t=>`<div class="${v["icon-content"]}">${t}</div>`,mb=(t,e)=>{const n=Fd();if(!e.imageUrl)return qe(n);Ne(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),ls(n,"width",e.imageWidth),ls(n,"height",e.imageHeight),n.className=v.image,ot(n,e,"image")},yb=t=>{const e=document.createElement("li");return ne(e,v["progress-step"]),Be(e,t),e},vb=t=>{const e=document.createElement("li");return ne(e,v["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},wb=(t,e)=>{const n=Vd();if(!e.progressSteps||e.progressSteps.length===0)return qe(n);Ne(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ye("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=yb(s);if(n.appendChild(r),i===e.currentProgressStep&&ne(r,v["active-progress-step"]),i!==e.progressSteps.length-1){const o=vb(e);n.appendChild(o)}})},bb=(t,e)=>{const n=Bd();br(n,e.title||e.titleText,"block"),e.title&&qa(e.title,n),e.titleText&&(n.innerText=e.titleText),ot(n,e,"title")},Eb=(t,e)=>{const n=Ue(),s=ae();e.toast?(ls(n,"width",e.width),s.style.width="100%",s.insertBefore(Gn(),Ws())):ls(s,"width",e.width),ls(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),qe(yr()),_b(s,e)},_b=(t,e)=>{t.className=`${v.popup} ${Ze(t)?e.showClass.popup:""}`,e.toast?(ne([document.documentElement,document.body],v["toast-shown"]),ne(t,v.toast)):ne(t,v.modal),ot(t,e,"popup"),typeof e.customClass=="string"&&ne(t,e.customClass),e.icon&&ne(t,v[`icon-${e.icon}`])},Hd=(t,e)=>{Eb(t,e),tb(t,e),wb(t,e),hb(t,e),mb(t,e),bb(t,e),ub(t,e),lb(t,e),Qw(t,e),cb(t,e),typeof e.didRender=="function"&&e.didRender(ae())},Wn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Tb=()=>{tt(document.body.children).forEach(e=>{e===Ue()||e.contains(Ue())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Kd=()=>{tt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Gd=["swal-title","swal-html","swal-footer"],Sb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Nb(n),Object.assign(Cb(n),Ib(n),Ab(n),kb(n),Db(n),Pb(n,Gd))},Cb=t=>{const e={};return tt(t.querySelectorAll("swal-param")).forEach(n=>{cn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Dn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Dn[s]=="object"&&(e[s]=JSON.parse(i))}),e},Ib=t=>{const e={};return tt(t.querySelectorAll("swal-button")).forEach(n=>{cn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ra(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Ab=t=>{const e={},n=t.querySelector("swal-image");return n&&(cn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},kb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(cn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Db=t=>{const e={},n=t.querySelector("swal-input");n&&(cn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},tt(s).forEach(i=>{cn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Pb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(cn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Nb=t=>{const e=Gd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);tt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ye(`Unrecognized element <${s}>`)})},cn=(t,e)=>{tt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ye([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},lc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Ob(t){t.inputValidator||Object.keys(lc).forEach(e=>{t.input===e&&(t.inputValidator=lc[e])})}function Rb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ye('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Lb(t){Ob(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ye(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Rb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Hw(t)}class Mb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Bb=()=>{Pn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Pn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Pn.previousBodyPadding+Ww()}px`)},Fb=()=>{Pn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Pn.previousBodyPadding}px`,Pn.previousBodyPadding=null)},Vb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!kt(document.body,v.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,ne(document.body,v.iosfix),Ub(),xb()}},xb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&ae().scrollHeight>window.innerHeight-44&&(Ue().style.paddingBottom="44px")},Ub=()=>{const t=Ue();let e;t.ontouchstart=n=>{e=qb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},qb=t=>{const e=t.target,n=Ue();return $b(t)||jb(t)?!1:e===n||!ic(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(ic(Mi())&&Mi().contains(e))},$b=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",jb=t=>t.touches&&t.touches.length>1,zb=()=>{if(kt(document.body,v.iosfix)){const t=parseInt(document.body.style.top,10);_t(document.body,v.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Wd=10,Hb=t=>{const e=Ue(),n=ae();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Wb(e,n,t),setTimeout(()=>{Kb(e,n)},Wd),Va()&&(Gb(e,t.scrollbarPadding,i),Tb()),!wr()&&!j.previousActiveElement&&(j.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),_t(e,v["no-transition"])},Qd=t=>{const e=ae();if(t.target!==e)return;const n=Ue();e.removeEventListener(Cs,Qd),n.style.overflowY="auto"},Kb=(t,e)=>{Cs&&$d(e)?(t.style.overflowY="hidden",e.addEventListener(Cs,Qd)):t.style.overflowY="auto"},Gb=(t,e,n)=>{Vb(),e&&n!=="hidden"&&Bb(),setTimeout(()=>{t.scrollTop=0})},Wb=(t,e,n)=>{ne(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ne(e,"grid"),setTimeout(()=>{ne(e,n.showClass.popup),e.style.removeProperty("opacity")},Wd),ne([document.documentElement,document.body],v.shown),n.heightAuto&&n.backdrop&&!n.toast&&ne([document.documentElement,document.body],v["height-auto"])},Un=t=>{let e=ae();e||new As,e=ae();const n=Gn();wr()?qe(Ws()):Qb(e,t),Ne(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Qb=(t,e)=>{const n=Qs(),s=Gn();!e&&Ze(dt())&&(e=dt()),Ne(n),e&&(qe(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),ne([t,n],v.loading)},Yb=(t,e)=>{e.input==="select"||e.input==="radio"?t0(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(La(e.inputValue)||Ma(e.inputValue))&&(Un(dt()),n0(t,e))},Xb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Jb(n);case"radio":return Zb(n);case"file":return e0(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Jb=t=>t.checked?1:0,Zb=t=>t.checked?t.value:null,e0=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,t0=(t,e)=>{const n=ae(),s=i=>s0[e.input](n,Ao(i),e);La(e.inputOptions)||Ma(e.inputOptions)?(Un(dt()),Ks(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):pn(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},n0=(t,e)=>{const n=t.getInput();qe(n),Ks(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ne(n),n.focus(),t.hideLoading()}).catch(s=>{pn(`Error in inputValue promise: ${s}`),n.value="",Ne(n),n.focus(),t.hideLoading()})},s0={select:(t,e,n)=>{const s=Mt(t,v.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,Be(l,o),l.selected=cc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Mt(t,v.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=v.radio,l.value=o,cc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Be(u,a),u.className=v.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Ao=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Ao(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Ao(s)),e.push([n,s])}),e},cc=(t,e)=>e&&e.toString()===t.toString();function uc(){const t=G.innerParams.get(this);if(!t)return;const e=G.domCache.get(this);qe(e.loader),wr()?t.icon&&Ne(Ws()):i0(e),_t([e.popup,e.actions],v.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const i0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ne(e[0],"inline-block"):Lw()&&qe(t.actions)};function r0(t){const e=G.innerParams.get(t||this),n=G.domCache.get(t||this);return n?xa(n.popup,e.input):null}const Is={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},o0=()=>Ze(ae()),Yd=()=>dt()&&dt().click(),a0=()=>Ht()&&Ht().click(),l0=()=>ln()&&ln().click(),Xd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},c0=(t,e,n,s)=>{Xd(e),n.toast||(e.keydownHandler=i=>h0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:ae(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},ko=(t,e,n)=>{const s=Fa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();ae().focus()},Jd=["ArrowRight","ArrowDown"],u0=["ArrowLeft","ArrowUp"],h0=(t,e,n)=>{const s=G.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?d0(t,e,s):e.key==="Tab"?f0(e,s):[...Jd,...u0].includes(e.key)?p0(e.key):e.key==="Escape"&&g0(e,s,n)))},d0=(t,e,n)=>{if(mr(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Yd(),e.preventDefault()}},f0=(t,e)=>{const n=t.target,s=Fa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?ko(e,i,-1):ko(e,i,1),t.stopPropagation(),t.preventDefault()},p0=t=>{const e=dt(),n=Ht(),s=ln();if(![e,n,s].includes(document.activeElement))return;const i=Jd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Qs().children.length;o++){if(r=r[i],!r)return;if(Ze(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},g0=(t,e,n)=>{mr(e.allowEscapeKey)&&(t.preventDefault(),n(Wn.esc))};function Zd(t,e,n,s){wr()?hc(t,s):(Vw(n).then(()=>hc(t,s)),Xd(j)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Va()&&(Fb(),zb(),Kd()),m0()}function m0(){_t([document.documentElement,document.body],[v.shown,v["height-auto"],v["no-backdrop"],v["toast-shown"]])}function ai(t){t=b0(t);const e=Is.swalPromiseResolve.get(this),n=v0(this);this.isAwaitingPromise()?t.isDismissed||(Xs(this),e(t)):n&&e(t)}function y0(){return!!G.awaitingPromise.get(this)}const v0=t=>{const e=ae();if(!e)return!1;const n=G.innerParams.get(t);if(!n||kt(e,n.hideClass.popup))return!1;_t(e,n.showClass.popup),ne(e,n.hideClass.popup);const s=Ue();return _t(s,n.showClass.backdrop),ne(s,n.hideClass.backdrop),E0(t,e,n),!0};function w0(t){const e=Is.swalPromiseReject.get(this);Xs(this),e&&e(t)}const Xs=t=>{t.isAwaitingPromise()&&(G.awaitingPromise.delete(t),G.innerParams.get(t)||t._destroy())},b0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),E0=(t,e,n)=>{const s=Ue(),i=Cs&&$d(e);typeof n.willClose=="function"&&n.willClose(e),i?_0(t,e,s,n.returnFocus,n.didClose):Zd(t,s,n.returnFocus,n.didClose)},_0=(t,e,n,s,i)=>{j.swalCloseEventFinishedCallback=Zd.bind(null,t,n,s,i),e.addEventListener(Cs,function(r){r.target===e&&(j.swalCloseEventFinishedCallback(),delete j.swalCloseEventFinishedCallback)})},hc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function ef(t,e,n){const s=G.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function tf(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function T0(){ef(this,["confirmButton","denyButton","cancelButton"],!1)}function S0(){ef(this,["confirmButton","denyButton","cancelButton"],!0)}function C0(){return tf(this.getInput(),!1)}function I0(){return tf(this.getInput(),!0)}function A0(t){const e=G.domCache.get(this),n=G.innerParams.get(this);Be(e.validationMessage,t),e.validationMessage.className=v["validation-message"],n.customClass&&n.customClass.validationMessage&&ne(e.validationMessage,n.customClass.validationMessage),Ne(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",v["validation-message"]),Ud(s),ne(s,v.inputerror))}function k0(){const t=G.domCache.get(this);t.validationMessage&&qe(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),_t(e,v.inputerror))}function D0(){return G.domCache.get(this).progressSteps}function P0(t){const e=ae(),n=G.innerParams.get(this);if(!e||kt(e,n.hideClass.popup))return Ye("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=N0(t),i=Object.assign({},n,s);Hd(this,i),G.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const N0=t=>{const e={};return Object.keys(t).forEach(n=>{Ld(n)?e[n]=t[n]:Ye(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function O0(){const t=G.domCache.get(this),e=G.innerParams.get(this);if(!e){nf(this);return}t.popup&&j.swalCloseEventFinishedCallback&&(j.swalCloseEventFinishedCallback(),delete j.swalCloseEventFinishedCallback),j.deferDisposalTimer&&(clearTimeout(j.deferDisposalTimer),delete j.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),R0(this)}const R0=t=>{nf(t),delete t.params,delete j.keydownHandler,delete j.keydownTarget,delete j.currentInstance},nf=t=>{t.isAwaitingPromise()?($r(G,t),G.awaitingPromise.set(t,!0)):($r(Is,t),$r(G,t))},$r=(t,e)=>{for(const n in t)t[n].delete(e)},sf=Object.freeze(Object.defineProperty({__proto__:null,_destroy:O0,close:ai,closeModal:ai,closePopup:ai,closeToast:ai,disableButtons:S0,disableInput:I0,disableLoading:uc,enableButtons:T0,enableInput:C0,getInput:r0,getProgressSteps:D0,handleAwaitingPromise:Xs,hideLoading:uc,isAwaitingPromise:y0,rejectPromise:w0,resetValidationMessage:k0,showValidationMessage:A0,update:P0},Symbol.toStringTag,{value:"Module"})),L0=t=>{const e=G.innerParams.get(t);t.disableButtons(),e.input?rf(t,"confirm"):za(t,!0)},M0=t=>{const e=G.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?rf(t,"deny"):ja(t,!1)},B0=(t,e)=>{t.disableButtons(),e(Wn.cancel)},rf=(t,e)=>{const n=G.innerParams.get(t);if(!n.input)return pn(`The "input" parameter is needed to be set when using returnInputValueOn${Ra(e)}`);const s=Xb(t,n);n.inputValidator?F0(t,s,e):t.getInput().checkValidity()?e==="deny"?ja(t,s):za(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},F0=(t,e,n)=>{const s=G.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ks(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?ja(t,e):za(t,e)})},ja=(t,e)=>{const n=G.innerParams.get(t||globalThis);n.showLoaderOnDeny&&Un(Ht()),n.preDeny?(G.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ks(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Xs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>of(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},dc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},of=(t,e)=>{t.rejectPromise(e)},za=(t,e)=>{const n=G.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&Un(),n.preConfirm?(t.resetValidationMessage(),G.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ks(n.preConfirm(e,n.validationMessage))).then(i=>{Ze(yr())||i===!1?(t.hideLoading(),Xs(t)):dc(t,typeof i>"u"?e:i)}).catch(i=>of(t||globalThis,i))):dc(t,e)},V0=(t,e,n)=>{G.innerParams.get(t).toast?x0(t,e,n):(q0(e),$0(e),j0(t,e,n))},x0=(t,e,n)=>{e.popup.onclick=()=>{const s=G.innerParams.get(t);s&&(U0(s)||s.timer||s.input)||n(Wn.close)}},U0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Bi=!1;const q0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Bi=!0)}}},$0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Bi=!0)}}},j0=(t,e,n)=>{e.container.onclick=s=>{const i=G.innerParams.get(t);if(Bi){Bi=!1;return}s.target===e.container&&mr(i.allowOutsideClick)&&n(Wn.backdrop)}},z0=t=>typeof t=="object"&&t.jquery,fc=t=>t instanceof Element||z0(t),H0=t=>{const e={};return typeof t[0]=="object"&&!fc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||fc(i)?e[n]=i:i!==void 0&&pn(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function K0(...t){const e=this;return new e(...t)}function G0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const W0=()=>j.timeout&&j.timeout.getTimerLeft(),af=()=>{if(j.timeout)return Mw(),j.timeout.stop()},lf=()=>{if(j.timeout){const t=j.timeout.start();return Ua(t),t}},Q0=()=>{const t=j.timeout;return t&&(t.running?af():lf())},Y0=t=>{if(j.timeout){const e=j.timeout.increase(t);return Ua(e,!0),e}},X0=()=>j.timeout&&j.timeout.isRunning();let pc=!1;const Do={};function J0(t="data-swal-template"){Do[t]=this,pc||(document.body.addEventListener("click",Z0),pc=!0)}const Z0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Do){const s=e.getAttribute(n);if(s){Do[n].fire({template:s});return}}},eE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:H0,bindClickHandler:J0,clickCancel:l0,clickConfirm:Yd,clickDeny:a0,enableLoading:Un,fire:K0,getActions:Qs,getCancelButton:ln,getCloseButton:Ba,getConfirmButton:dt,getContainer:Ue,getDenyButton:Ht,getFocusableElements:Fa,getFooter:xd,getHtmlContainer:Mi,getIcon:Ws,getImage:Fd,getInputLabel:Pw,getLoader:Gn,getPopup:ae,getTimerLeft:W0,getTimerProgressBar:vr,getTitle:Bd,getValidationMessage:yr,increaseTimer:Y0,isDeprecatedParameter:Io,isLoading:Ow,isTimerRunning:X0,isUpdatableParameter:Ld,isValidParameter:Rd,isVisible:o0,mixin:G0,resumeTimer:lf,showLoading:Un,stopTimer:af,toggleTimer:Q0},Symbol.toStringTag,{value:"Module"}));let Po;class Qn{constructor(...e){if(typeof window>"u")return;Po=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);G.promise.set(this,s)}_main(e,n={}){kw(Object.assign({},n,e)),j.currentInstance&&(j.currentInstance._destroy(),Va()&&Kd()),j.currentInstance=this;const s=nE(e,n);Lb(s),Object.freeze(s),j.timeout&&(j.timeout.stop(),delete j.timeout),clearTimeout(j.restoreFocusTimeout);const i=sE(this);return Hd(this,s),G.innerParams.set(this,s),tE(this,i,s)}then(e){return G.promise.get(this).then(e)}finally(e){return G.promise.get(this).finally(e)}}const tE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Is.swalPromiseResolve.set(t,s),Is.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>L0(t),e.denyButton.onclick=()=>M0(t),e.cancelButton.onclick=()=>B0(t,r),e.closeButton.onclick=()=>r(Wn.close),V0(t,e,r),c0(t,j,n,r),Yb(t,n),Hb(n),iE(j,n,r),rE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nE=(t,e)=>{const n=Sb(t),s=Object.assign({},Dn,e,n,t);return s.showClass=Object.assign({},Dn.showClass,s.showClass),s.hideClass=Object.assign({},Dn.hideClass,s.hideClass),s},sE=t=>{const e={popup:ae(),container:Ue(),actions:Qs(),confirmButton:dt(),denyButton:Ht(),cancelButton:ln(),loader:Gn(),closeButton:Ba(),validationMessage:yr(),progressSteps:Vd()};return G.domCache.set(t,e),e},iE=(t,e,n)=>{const s=vr();qe(s),e.timer&&(t.timeout=new Mb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ne(s),ot(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ua(e.timer)})))},rE=(t,e)=>{if(!e.toast){if(!mr(e.allowEnterKey))return aE();oE(t,e)||ko(e,-1,1)}},oE=(t,e)=>e.focusDeny&&Ze(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ze(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ze(t.confirmButton)?(t.confirmButton.focus(),!0):!1,aE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Qn.prototype,sf);Object.assign(Qn,eE);Object.keys(sf).forEach(t=>{Qn[t]=function(...e){if(Po)return Po[t](...e)}});Qn.DismissReason=Wn;Qn.version="11.4.8";const As=Qn;As.default=As;const wn=[];function Er(t,e=we){let n;const s=new Set;function i(a){if(ft(t,a)&&(t=a,n)){const l=!wn.length;for(const c of s)c[1](),wn.push(c,t);if(l){for(let c=0;c<wn.length;c+=2)wn[c][0](wn[c+1]);wn.length=0}}}function r(a){i(a(t))}function o(a,l=we){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||we),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const jr=Er({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),No=Er(""),Oo=Er(""),cs=Er(""),lE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},cE=async t=>{try{await Oa(At(De,"Pacientes",t.id),t)}catch(e){console.log(e)}};function gc(t,e,n){const s=t.slice();return s[9]=e[n],s[11]=n,s}function mc(t){let e,n,s=t[0],i=[];for(let r=0;r<s.length;r+=1)i[r]=yc(gc(t,s,r));return{c(){e=E("div"),n=E("ul");for(let r=0;r<i.length;r+=1)i[r].c();f(n,"class","sinPunto svelte-1ru9vt8"),f(e,"class","listadoPacientes svelte-1ru9vt8")},m(r,o){K(r,e,o),m(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null)},p(r,o){if(o&7){s=r[0];let a;for(a=0;a<s.length;a+=1){const l=gc(r,s,a);i[a]?i[a].p(l,o):(i[a]=yc(l),i[a].c(),i[a].m(n,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},d(r){r&&H(e),ks(i,r)}}}function yc(t){let e,n,s,i,r,o=`${t[9].apellido}, ${t[9].nombre}`.slice(0,20).padEnd(21," ")+`${t[9].plan=="particular"?"":t[9].nroSocio+"   plan "+t[9].plan.plan}`,a,l,c,u,h,d;return u=Mc(t[5][0]),{c(){e=E("li"),n=E("input"),i=B(),r=E("label"),a=oe(o),c=B(),f(n,"type","radio"),f(n,"id",s=t[9].id),f(n,"name","pacientes"),n.__value=t[11],n.value=n.__value,f(n,"class","svelte-1ru9vt8"),f(r,"for",l=t[9].id),f(r,"class","svelte-1ru9vt8"),f(e,"class","svelte-1ru9vt8"),u.p(n)},m(g,p){K(g,e,p),m(e,n),n.checked=n.__value===t[1],m(e,i),m(e,r),m(r,a),m(e,c),h||(d=[Q(n,"change",t[4]),Q(n,"change",t[2])],h=!0)},p(g,p){p&1&&s!==(s=g[9].id)&&f(n,"id",s),p&3&&(n.checked=n.__value===g[1]),p&1&&o!==(o=`${g[9].apellido}, ${g[9].nombre}`.slice(0,20).padEnd(21," ")+`${g[9].plan=="particular"?"":g[9].nroSocio+"   plan "+g[9].plan.plan}`)&&Ie(a,o),p&1&&l!==(l=g[9].id)&&f(r,"for",l)},d(g){g&&H(e),u.r(),h=!1,nt(d)}}}function uE(t){let e,n=t[0].length>0&&mc(t);return{c(){n&&n.c(),e=Ro()},m(s,i){n&&n.m(s,i),K(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=mc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:we,o:we,d(s){n&&n.d(s),s&&H(e)}}}function hE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Ds(),l=h=>{const d=h.target.value;n(3,i=s[d].plan),o=s[d].id,a("cambioSelectPaciente",[d,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${d}, planSelect ${i.plan?i.plan:"particular"}`)},c=[[]];function u(){r=this.__value,n(1,r)}return t.$$set=h=>{"pacientesFiltrada"in h&&n(0,s=h.pacientesFiltrada),"planSelect"in h&&n(3,i=h.planSelect)},[s,r,l,i,u,c]}class dE extends St{constructor(e){super(),Tt(this,e,hE,uE,ft,{pacientesFiltrada:0,planSelect:3})}}function fE(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,p,y,w,N,I,C,T,M,W,X,se,U,R,A,z,Z,he,He,pt,le,J,Te,Ke,gn,gt,S,P,ee,de,Ge,Js;return M=new dE({props:{pacientesFiltrada:t[3],planSelect:pE}}),M.$on("cambioSelectPaciente",t[15]),ee=new Tf({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),ee.$on("cambioPlan",t[14]),ee.$on("clickCheckPlan",t[16]),{c(){e=E("body"),n=E("div"),s=E("div"),i=E("button"),r=oe("create"),a=B(),l=E("button"),c=oe("update"),h=B(),d=E("button"),g=oe("delete"),y=B(),w=E("div"),N=E("label"),N.textContent="filtrar por apellido",I=E("input"),C=B(),T=E("div"),Dt(M.$$.fragment),W=B(),X=E("div"),se=E("label"),se.textContent="nombre",U=E("input"),R=B(),A=E("label"),A.textContent="apellido",z=E("input"),Z=B(),he=E("div"),He=E("label"),He.textContent="nº socio",pt=B(),le=E("div"),J=E("input"),Te=B(),Ke=E("button"),Ke.textContent="📋",gn=B(),gt=E("label"),S=oe(t[10]),P=B(),Dt(ee.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],f(i,"class","svelte-hzyg16"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],f(l,"class","svelte-hzyg16"),d.disabled=p=!t[4],f(d,"class","svelte-hzyg16"),f(s,"class","buttons svelte-hzyg16"),f(n,"id","botones"),f(n,"class","svelte-hzyg16"),f(N,"for","filterPrefix"),f(N,"class","svelte-hzyg16"),f(I,"name","filterPrefix"),f(I,"id","filterPrefix"),f(I,"placeholder","filter prefix"),f(I,"class","svelte-hzyg16"),f(w,"id","filter"),f(w,"class","svelte-hzyg16"),f(T,"id","selectPacientes"),f(T,"class","svelte-hzyg16"),f(se,"for","nombre"),f(se,"class","svelte-hzyg16"),f(U,"name","nombre"),f(U,"id","nombre"),f(U,"placeholder","nombre"),f(U,"class","svelte-hzyg16"),f(A,"for","apellido"),f(A,"class","svelte-hzyg16"),f(z,"name","apellido"),f(z,"id","apellido"),f(z,"placeholder","apellido"),f(z,"class","svelte-hzyg16"),f(X,"id","formInputsI"),f(X,"class","svelte-hzyg16"),f(He,"for","inputNroSocio"),f(He,"class","svelte-hzyg16"),f(J,"id","inputNroSocio"),f(J,"name","nroSocio"),f(J,"placeholder","nro de Socio"),f(J,"class","svelte-hzyg16"),f(Ke,"class","transparenteSinBordes svelte-hzyg16"),f(le,"class","formRow svelte-hzyg16"),f(gt,"id","labelPlan"),f(gt,"for","plan"),f(gt,"class","svelte-hzyg16"),f(he,"id","formInputsD"),f(he,"class","svelte-hzyg16"),f(e,"class","svelte-hzyg16")},m(V,ce){K(V,e,ce),m(e,n),m(n,s),m(s,i),m(i,r),m(s,a),m(s,l),m(l,c),m(s,h),m(s,d),m(d,g),m(e,y),m(e,w),m(w,N),m(w,I),Ce(I,t[2]),m(e,C),m(e,T),vt(M,T,null),m(e,W),m(e,X),m(X,se),m(X,U),Ce(U,t[7]),m(X,R),m(X,A),m(X,z),Ce(z,t[8]),m(e,Z),m(e,he),m(he,He),m(he,pt),m(he,le),m(le,J),Ce(J,t[9]),m(le,Te),m(le,Ke),m(he,gn),m(he,gt),m(gt,S),m(he,P),vt(ee,he,null),de=!0,Ge||(Js=[Q(i,"click",t[11]),Q(l,"click",t[12]),Q(d,"click",t[13]),Q(I,"input",t[21]),Q(U,"input",t[22]),Q(z,"input",t[23]),Q(J,"input",t[24]),Q(Ke,"click",gE)],Ge=!0)},p(V,ce){(!de||ce[0]&897&&o!==(o=!V[7]||!V[8]||!V[0]||!V[9]))&&(i.disabled=o),(!de||ce[0]&913&&u!==(u=!V[7]||!V[8]||!V[0]||!V[9]||!V[4]))&&(l.disabled=u),(!de||ce[0]&16&&p!==(p=!V[4]))&&(d.disabled=p),ce[0]&4&&I.value!==V[2]&&Ce(I,V[2]);const mn={};ce[0]&8&&(mn.pacientesFiltrada=V[3]),M.$set(mn),ce[0]&128&&U.value!==V[7]&&Ce(U,V[7]),ce[0]&256&&z.value!==V[8]&&Ce(z,V[8]),ce[0]&512&&J.value!==V[9]&&Ce(J,V[9]),(!de||ce[0]&1024)&&Ie(S,V[10]);const lt={};ce[0]&2&&(lt.planes=V[1]),ce[0]&1&&(lt.planSeleccionado=V[0]),ce[0]&64&&(lt.SelectPlanVisible=V[6]),ce[0]&32&&(lt.indicePlan=V[5]),ee.$set(lt)},i(V){de||($e(M.$$.fragment,V),$e(ee.$$.fragment,V),de=!0)},o(V){Je(M.$$.fragment,V),Je(ee.$$.fragment,V),de=!1},d(V){V&&H(e),wt(M),wt(ee),Ge=!1,nt(Js)}}}let pE="particular";function gE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function mE(t,e,n){let s,i,r,o,a;Lt(t,cs,S=>n(25,i=S)),Lt(t,jr,S=>n(26,r=S)),Lt(t,Oo,S=>n(27,o=S)),Lt(t,No,S=>n(28,a=S));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:g}=e,p,y=0,w;Vc(()=>{lE(l,d),l.forEach(S=>{cE(S)}),console.log(a)});let N="",I="",C="",T="",M=[],W="plan";yn(jr,r=s,r);const X=S=>{n(7,I=S?S.nombre:""),n(8,C=S?S.apellido:""),n(9,T=S?S.nroSocio:""),n(0,h=S?S.plan:{})},se=async()=>{try{await Id(st(De,"Pacientes"),{nombre:I,apellido:C,nroSocio:T,createdAt:new Date().toLocaleDateString(),plan:h}),kn({text:"Nuevo paciente agregado"}).showToast()}catch(S){console.error(S)}},U=()=>{n(17,l=l.concat({nombre:I,apellido:C})),n(20,y=l.length-1),se(),n(7,I=n(8,C=n(0,h=n(9,T=""))))},R=async S=>{try{await Oa(At(De,"Pacientes",S.id),S),kn({text:`paciente ${S.apellido}, ${S.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(P){console.error(P)}},A=()=>{n(4,s.nombre=I,s),n(4,s.apellido=C,s),n(0,h=s.plan),n(4,s.nroSocio=T,s),n(4,s),n(3,M),n(20,y),n(2,N),n(17,l),n(17,l),R(s)},z=async S=>{try{await Co(At(De,"Pacientes",S.id)),kn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(ee){console.error(ee)}const P=os(st(De,"sesiones"),So("pacienteID","==",S.id));console.log(`desde delete q=pacientes a borrar ${P} - paciente: ${S.nombre} ${S.apellido} ${S.id}`);try{(await Cd(P)).forEach(de=>{Co(de.ref)})}catch(ee){console.log(ee)}},Z=()=>{const S=l.indexOf(s);As.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(P=>{P.isConfirmed&&(As.fire("Deleted!","Your file has been deleted.","success"),z(l[y]),n(17,l=[...l.slice(0,S),...l.slice(S+1)]),n(7,I=n(8,C=n(9,T=n(0,h="")))),n(20,y=Math.min(y,M.length-2)))})},he=S=>{n(4,s.plan=S,s),n(4,s.nombre=I,s),n(4,s.apellido=C,s),n(4,s.nroSocio=T,s),n(3,M[y].plan=S,M),R(s)},He=S=>{n(0,h=S.detail),console.log(h),s.plan.plan!=h.plan&&he(h)},pt=S=>{S?(n(10,W="particular"),n(6,w=!1)):(n(10,W="plan"),n(6,w=!0))},le=S=>{n(20,y=S.detail[0]);const P=S.detail[1];yn(cs,i=S.detail[2],i);const ee=typeof P=="string"?"particular":P.plan;console.log(`i ${y}, planSelect ${ee}`),n(0,h=ee=="particular"?"particular":M[y].plan),h!="particular"&&(n(5,p=u.findIndex(Ge=>Ge.plan===ee)),console.log(`indicePlan ${p}, ${typeof p}`));const de=ee=="particular";pt(de)},J=S=>{const P=S.detail.valor.SelectPlanVisible;P?P&&h=="particular"&&n(0,h="210"):n(0,h="particular"),he(h),pt(!P)};function Te(){N=this.value,n(2,N)}function Ke(){I=this.value,n(7,I)}function gn(){C=this.value,n(8,C)}function gt(){T=this.value,n(9,T)}return t.$$set=S=>{"pacientes"in S&&n(17,l=S.pacientes),"sesiones"in S&&n(18,c=S.sesiones),"planes"in S&&n(1,u=S.planes),"planSeleccionado"in S&&n(0,h=S.planSeleccionado),"optionsPlan"in S&&n(19,g=S.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,M=N?l.filter(S=>`${S.apellido}, ${S.nombre}`.toLowerCase().startsWith(N.toLowerCase())):l.map(S=>({nombre:S.nombre,apellido:S.apellido,plan:S.plan,nroSocio:S.nroSocio,id:S.id}))),t.$$.dirty[0]&1048584&&n(4,s=M[y]),t.$$.dirty[0]&16&&s&&(yn(jr,r=s,r),yn(No,a=s.apellido,a),yn(Oo,o=s.nombre,o),yn(cs,i=s.id,i)),t.$$.dirty[0]&16&&X(s)},[h,u,N,M,s,p,w,I,C,T,W,U,A,Z,He,le,J,l,c,g,y,Te,Ke,gn,gt]}class yE extends St{constructor(e){super(),Tt(this,e,mE,fE,ft,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const vE=st(De,"sesiones");st(De,"Pacientes");st(De,"Planes");const wE=async t=>{const e=ci(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Cd(os(vE,So("diaSesion",">=",n),So("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function vc(t,e,n){const s=t.slice();return s[7]=e[n],s}function wc(t){let e,n=`listar mes de ${t[7].nombre} - ${t[7].nro.toString().padStart(2,"0")}`,s;return{c(){e=E("option"),s=oe(n),e.__value=t[7].nro,e.value=e.__value},m(i,r){K(i,e,r),m(e,s)},p:we,d(i){i&&H(e)}}}function bE(t){let e,n,s,i,r=t[1],o=[];for(let a=0;a<r.length;a+=1)o[a]=wc(vc(t,r,a));return{c(){e=E("main"),n=E("select");for(let a=0;a<o.length;a+=1)o[a].c();f(n,"name","mes"),f(n,"id","mesRegistro"),f(n,"class","svelte-2ytts5"),t[0]===void 0&&hs(()=>t[5].call(n)),f(e,"class","svelte-2ytts5")},m(a,l){K(a,e,l),m(e,n);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(n,null);gi(n,t[0]),s||(i=[Q(n,"change",t[3]),Q(n,"dblclick",t[4]),Q(n,"change",t[5])],s=!0)},p(a,[l]){if(l&2){r=a[1];let c;for(c=0;c<r.length;c+=1){const u=vc(a,r,c);o[c]?o[c].p(u,l):(o[c]=wc(u),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=r.length}l&3&&gi(n,a[0])},i:we,o:we,d(a){a&&H(e),ks(o,a),s=!1,nt(i)}}}function EE(t,e,n){let s=new Date().getMonth()+1,i=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}];const r=Ds(),o=u=>{r("cambioMes",u)},a=u=>o(u.target.value),l=u=>o(u.target.value);function c(){s=Bc(this),n(0,s),n(1,i)}return[s,i,o,a,l,c]}class _E extends St{constructor(e){super(),Tt(this,e,EE,bE,ft,{})}}function bc(t,e,n){const s=t.slice();return s[17]=e[n],s[19]=n,s}function Ec(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,p,y,w,N,I,C,T,M,W,X,se=t[1],U=[];for(let A=0;A<se.length;A+=1)U[A]=Sc(bc(t,se,A));let R=t[2]&&Cc(t);return{c(){e=E("button"),e.textContent="Cerrar",n=B(),s=E("button"),s.textContent="ordena por nombre",i=B(),r=E("button"),r.textContent="ordena por OS",o=B(),a=E("button"),a.textContent="ordena por fecha sesion",l=B(),c=E("div"),u=E("table"),h=E("tr"),h.innerHTML=`<th class="svelte-7zqtsu">n°</th> 
          <th class="svelte-7zqtsu">dia</th> 
          <th class="svelte-7zqtsu">paciente</th> 
          <th class="svelte-7zqtsu">plan</th> 
          <th class="svelte-7zqtsu">pago</th> 
          <th class="svelte-7zqtsu">sesion</th>`,d=B(),g=E("tbody");for(let A=0;A<U.length;A+=1)U[A].c();p=B(),y=E("div"),w=E("div"),N=E("button"),N.textContent="Cerrar",I=B(),C=E("div"),T=E("button"),T.innerHTML='<i class="bx bx-show svelte-7zqtsu"></i>',M=B(),R&&R.c(),f(e,"class","svelte-7zqtsu"),f(s,"class","svelte-7zqtsu"),f(r,"class","svelte-7zqtsu"),f(a,"class","svelte-7zqtsu"),f(h,"class","cabecera svelte-7zqtsu"),f(g,"class","svelte-7zqtsu"),f(u,"class","svelte-7zqtsu"),f(c,"id","tabla"),f(c,"class","svelte-7zqtsu"),f(N,"class"," svelte-7zqtsu"),f(w,"class","col col-2 px-2 mt-3 svelte-7zqtsu"),f(T,"class","transparente svelte-7zqtsu"),f(C,"class","col col-1 px-2 mt-3 svelte-7zqtsu"),f(y,"class","row svelte-7zqtsu")},m(A,z){K(A,e,z),K(A,n,z),K(A,s,z),K(A,i,z),K(A,r,z),K(A,o,z),K(A,a,z),K(A,l,z),K(A,c,z),m(c,u),m(u,h),m(u,d),m(u,g);for(let Z=0;Z<U.length;Z+=1)U[Z]&&U[Z].m(g,null);K(A,p,z),K(A,y,z),m(y,w),m(w,N),m(y,I),m(y,C),m(C,T),m(y,M),R&&R.m(y,null),W||(X=[Q(e,"click",t[12]),Q(s,"click",t[6]),Q(r,"click",t[7]),Q(a,"click",t[8]),Q(N,"click",t[13]),Q(T,"click",t[14])],W=!0)},p(A,z){if(z&522){se=A[1];let Z;for(Z=0;Z<se.length;Z+=1){const he=bc(A,se,Z);U[Z]?U[Z].p(he,z):(U[Z]=Sc(he),U[Z].c(),U[Z].m(g,null))}for(;Z<U.length;Z+=1)U[Z].d(1);U.length=se.length}A[2]?R?R.p(A,z):(R=Cc(A),R.c(),R.m(y,null)):R&&(R.d(1),R=null)},d(A){A&&H(e),A&&H(n),A&&H(s),A&&H(i),A&&H(r),A&&H(o),A&&H(a),A&&H(l),A&&H(c),ks(U,A),A&&H(p),A&&H(y),R&&R.d(),W=!1,nt(X)}}}function _c(t){let e,n,s,i,r=`cant sesiones: ${t[9](t[3],t[19]).cantSesiones}`,o,a,l,c=t[9](t[3],t[19]).subtotalPagos+"",u,h,d=t[9](t[3],t[19]).subtotalValorSesion+"",g;return{c(){e=E("tr"),n=E("td"),s=E("td"),i=E("td"),o=oe(r),a=E("td"),a.textContent="subtotales",l=E("td"),u=oe(c),h=E("td"),g=oe(d),f(n,"class","svelte-7zqtsu"),f(s,"class","svelte-7zqtsu"),f(i,"class","svelte-7zqtsu"),f(a,"class","svelte-7zqtsu"),f(l,"class","svelte-7zqtsu"),f(h,"class","svelte-7zqtsu"),f(e,"class","subtotalRow svelte-7zqtsu")},m(p,y){K(p,e,y),m(e,n),m(e,s),m(e,i),m(i,o),m(e,a),m(e,l),m(l,u),m(e,h),m(h,g)},p(p,y){y&8&&r!==(r=`cant sesiones: ${p[9](p[3],p[19]).cantSesiones}`)&&Ie(o,r),y&8&&c!==(c=p[9](p[3],p[19]).subtotalPagos+"")&&Ie(u,c),y&8&&d!==(d=p[9](p[3],p[19]).subtotalValorSesion+"")&&Ie(g,d)},d(p){p&&H(e)}}}function Tc(t){let e,n,s=t[19]+1+"",i,r,o,a=`${Ic(t[17].diaSesion.slice(8,10),2,!1)}`,l,c,u,h=`${t[17].apellido}, ${t[17].nombre}`,d,g,p,y=t[17].plan.slice(0,4)+"",w,N,I,C=t[17].valorPago+"",T,M,W,X=t[17].valorSesion+"",se,U;return{c(){e=E("tr"),n=E("td"),i=oe(s),r=B(),o=E("td"),l=oe(a),c=B(),u=E("td"),d=oe(h),g=B(),p=E("td"),w=oe(y),N=B(),I=E("td"),T=oe(C),M=B(),W=E("td"),se=oe(X),U=B(),f(n,"class","svelte-7zqtsu"),f(o,"class","dia svelte-7zqtsu"),f(u,"class","nombre svelte-7zqtsu"),f(p,"class","plan svelte-7zqtsu"),f(I,"class","svelte-7zqtsu"),f(W,"class","svelte-7zqtsu"),f(e,"class","svelte-7zqtsu")},m(R,A){K(R,e,A),m(e,n),m(n,i),m(e,r),m(e,o),m(o,l),m(e,c),m(e,u),m(u,d),m(e,g),m(e,p),m(p,w),m(e,N),m(e,I),m(I,T),m(e,M),m(e,W),m(W,se),m(e,U)},p(R,A){A&2&&a!==(a=`${Ic(R[17].diaSesion.slice(8,10),2,!1)}`)&&Ie(l,a),A&2&&h!==(h=`${R[17].apellido}, ${R[17].nombre}`)&&Ie(d,h),A&2&&y!==(y=R[17].plan.slice(0,4)+"")&&Ie(w,y),A&2&&C!==(C=R[17].valorPago+"")&&Ie(T,C),A&2&&X!==(X=R[17].valorSesion+"")&&Ie(se,X)},d(R){R&&H(e)}}}function Sc(t){let e,n,s=(t[19]>1&&t[1][t[19]-1][t[3]]!=t[17][t[3]]||t[19]===t[1].length)&&_c(t),i=t[19]<t[1].length&&t[17].nombre!="ultimo"&&Tc(t);return{c(){s&&s.c(),e=B(),i&&i.c(),n=Ro()},m(r,o){s&&s.m(r,o),K(r,e,o),i&&i.m(r,o),K(r,n,o)},p(r,o){r[19]>1&&r[1][r[19]-1][r[3]]!=r[17][r[3]]||r[19]===r[1].length?s?s.p(r,o):(s=_c(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r[19]<r[1].length&&r[17].nombre!="ultimo"?i?i.p(r,o):(i=Tc(r),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d(r){s&&s.d(r),r&&H(e),i&&i.d(r),r&&H(n)}}}function Cc(t){let e,n,s,i=t[4](t[1]).totalColPagos+"",r,o,a,l,c=t[4](t[1]).totalColValorSesion+"",u;return{c(){e=E("div"),n=E("h6"),s=oe("Total pagos: $"),r=oe(i),o=B(),a=E("h6"),l=oe("Total valor sesion: $"),u=oe(c),f(n,"class","row px-2 svelte-7zqtsu"),f(a,"class","row px-2 svelte-7zqtsu"),f(e,"class","bordeTotales col col-8 m-3 p-2 svelte-7zqtsu")},m(h,d){K(h,e,d),m(e,n),m(n,s),m(n,r),m(e,o),m(e,a),m(a,l),m(a,u)},p(h,d){d&2&&i!==(i=h[4](h[1]).totalColPagos+"")&&Ie(r,i),d&2&&c!==(c=h[4](h[1]).totalColValorSesion+"")&&Ie(u,c)},d(h){h&&H(e)}}}function TE(t){let e,n,s,i;e=new _E({}),e.$on("cambioMes",t[11]);let r=t[0]&&t[1].length>0&&Ec(t);return{c(){Dt(e.$$.fragment),n=B(),s=E("div"),r&&r.c(),f(s,"class","listadoSesionesPorMes svelte-7zqtsu")},m(o,a){vt(e,o,a),K(o,n,a),K(o,s,a),r&&r.m(s,null),i=!0},p(o,[a]){o[0]&&o[1].length>0?r?r.p(o,a):(r=Ec(o),r.c(),r.m(s,null)):r&&(r.d(1),r=null)},i(o){i||($e(e.$$.fragment,o),i=!0)},o(o){Je(e.$$.fragment,o),i=!1},d(o){wt(e,o),o&&H(n),o&&H(s),r&&r.d()}}}function Ic(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function SE(t,e){const n=t.plan.toUpperCase(),s=e.plan.toUpperCase();return n<s?-1:n>s?1:0}function CE(t,e){const n=`${t.apellido}, ${t.nombre}`.toUpperCase(),s=`${e.apellido}, ${e.nombre}`.toUpperCase();return n<s?-1:n>s?1:0}function IE(t,e){const n=t.diaSesion.toUpperCase(),s=e.diaSesion.toUpperCase();return n<s?-1:n>s?1:0}function AE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,o=!1;const a=Ds(),l=T=>{var M=0,W=0;return console.log(T),T.forEach(X=>{M+=X.valorPago,W+=X.valorSesion}),{totalColPagos:M,totalColValorSesion:W}},c=T=>{i==!1?(a("vistaPulsado",T),n(10,s=T),n(0,i=!i)):i==!0&&(a("vistaPulsado",T),n(10,s=T)),console.log(l(r),`mes: ${s}, cant de sesiones: ${r.length}`)},u=T=>{n(10,s=T),c(T)};let h="diaSesion";function d(){r.sort(CE),n(1,r),n(3,h="apellido")}function g(){r.sort(SE),n(1,r),n(3,h="plan")}function p(){r.sort(IE),n(1,r),n(3,h="diaSesion")}function y(T,M){const W=r.filter(R=>R[T]===r[M-1][T]);console.log(W);const X=W.reduce((R,A)=>R+A.valorPago,0),se=W.reduce((R,A)=>R+A.valorSesion,0),U=W.length;return{subtotalPagos:X,subtotalValorSesion:se,cantSesiones:U}}const w=T=>u(T.detail),N=()=>n(0,i=!i),I=()=>n(0,i=!i),C=()=>n(2,o=!o);return t.$$set=T=>{"mesSeleccionado"in T&&n(10,s=T.mesSeleccionado),"vistaCalculos"in T&&n(0,i=T.vistaCalculos),"arrayParaLaVista"in T&&n(1,r=T.arrayParaLaVista)},[i,r,o,h,l,u,d,g,p,y,s,w,N,I,C]}class kE extends St{constructor(e){super(),Tt(this,e,AE,TE,ft,{mesSeleccionado:10,vistaCalculos:0,arrayParaLaVista:1})}}function DE(t){let e,n,s;return{c(){e=E("p"),n=oe("total por paciente: "),s=oe(t[0])},m(i,r){K(i,e,r),m(e,n),m(e,s)},p(i,[r]){r&1&&Ie(s,i[0])},i:we,o:we,d(i){i&&H(e)}}}function PE(t,e,n){let{varSumaValorPagoPorPaciente:s}=e;return t.$$set=i=>{"varSumaValorPagoPorPaciente"in i&&n(0,s=i.varSumaValorPagoPorPaciente)},[s]}class NE extends St{constructor(e){super(),Tt(this,e,PE,DE,ft,{varSumaValorPagoPorPaciente:0})}}function Ac(t,e,n){const s=t.slice();return s[9]=e[n],s}function kc(t){let e,n,s,i,r=!1,o,a,l=`${t[9].diaSesion.slice(8,10)} -sesion: $${t[9].valorSesion}-pago: ${t[9].fechaPago.slice(5,10)} $${t[9].valorPago}`,c,u,h,d,g,p;return d=Mc(t[7][0]),{c(){e=E("li"),n=E("input"),o=B(),a=E("label"),c=oe(l),h=B(),f(n,"type","radio"),f(n,"id",s=t[9].id),f(n,"name","sesiones"),n.__value=i=t[9].id,n.value=n.__value,f(n,"class","svelte-1dpczvl"),f(a,"for",u=t[9].id),f(a,"class","svelte-1dpczvl"),f(e,"class","svelte-1dpczvl"),d.p(n)},m(y,w){K(y,e,w),m(e,n),n.checked=n.__value===t[3],m(e,o),m(e,a),m(a,c),m(e,h),g||(p=[Q(n,"change",t[5]),Q(n,"change",t[6])],g=!0)},p(y,w){w&2&&s!==(s=y[9].id)&&f(n,"id",s),w&2&&i!==(i=y[9].id)&&(n.__value=i,n.value=n.__value,r=!0),(r||w&10)&&(n.checked=n.__value===y[3]),w&2&&l!==(l=`${y[9].diaSesion.slice(8,10)} -sesion: $${y[9].valorSesion}-pago: ${y[9].fechaPago.slice(5,10)} $${y[9].valorPago}`)&&Ie(c,l),w&2&&u!==(u=y[9].id)&&f(a,"for",u)},d(y){y&&H(e),d.r(),g=!1,nt(p)}}}function Dc(t){let e=Object.values(t[9]).includes(t[4])&&parseInt(t[9].diaSesion.slice(5,7))==t[0],n,s=e&&kc(t);return{c(){s&&s.c(),n=Ro()},m(i,r){s&&s.m(i,r),K(i,n,r)},p(i,r){r&19&&(e=Object.values(i[9]).includes(i[4])&&parseInt(i[9].diaSesion.slice(5,7))==i[0]),e?s?s.p(i,r):(s=kc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&H(n)}}}function OE(t){let e,n,s,i,r,o=t[1],a=[];for(let l=0;l<o.length;l+=1)a[l]=Dc(Ac(t,o,l));return i=new NE({props:{varSumaValorPagoPorPaciente:t[2]}}),{c(){e=E("div"),n=E("ul");for(let l=0;l<a.length;l+=1)a[l].c();s=B(),Dt(i.$$.fragment),f(n,"class","sinPunto svelte-1dpczvl"),f(e,"class","selectorSesiones svelte-1dpczvl")},m(l,c){K(l,e,c),m(e,n);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(n,null);m(e,s),vt(i,e,null),r=!0},p(l,[c]){if(c&59){o=l[1];let h;for(h=0;h<o.length;h+=1){const d=Ac(l,o,h);a[h]?a[h].p(d,c):(a[h]=Dc(d),a[h].c(),a[h].m(n,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=o.length}const u={};c&4&&(u.varSumaValorPagoPorPaciente=l[2]),i.$set(u)},i(l){r||($e(i.$$.fragment,l),r=!0)},o(l){Je(i.$$.fragment,l),r=!1},d(l){l&&H(e),ks(a,l),wt(i)}}}function RE(t,e,n){let s;Lt(t,cs,d=>n(4,s=d));let{mesSeleccionado:i}=e,{sesiones:r}=e,{varSumaValorPagoPorPaciente:o}=e;const a=Ds();let l;const c=d=>{console.log(l,d.target.value),a("cambioSelectorSesion",d.target.value)},u=[[]];function h(){l=this.__value,n(3,l)}return t.$$set=d=>{"mesSeleccionado"in d&&n(0,i=d.mesSeleccionado),"sesiones"in d&&n(1,r=d.sesiones),"varSumaValorPagoPorPaciente"in d&&n(2,o=d.varSumaValorPagoPorPaciente)},[i,r,o,l,s,c,h,u]}class LE extends St{constructor(e){super(),Tt(this,e,RE,OE,ft,{mesSeleccionado:0,sesiones:1,varSumaValorPagoPorPaciente:2})}}function Pc(t){let e,n,s=`Mes: ${t[5]}`,i,r,o,a,l,c,u=t[10]&&t[11]&&Nc(t);return l=new LE({props:{mesSeleccionado:t[5],sesiones:t[0],varSumaValorPagoPorPaciente:t[4]}}),l.$on("cambioSelectorSesion",t[12]),{c(){e=E("div"),n=E("h5"),i=oe(s),r=B(),u&&u.c(),o=B(),a=E("div"),Dt(l.$$.fragment),f(n,"class","svelte-1u3tilm"),f(e,"class","tituloSelectorSesiones svelte-1u3tilm"),f(a,"class","selectorSesiones svelte-1u3tilm")},m(h,d){K(h,e,d),m(e,n),m(n,i),m(e,r),u&&u.m(e,null),K(h,o,d),K(h,a,d),vt(l,a,null),c=!0},p(h,d){(!c||d[0]&32)&&s!==(s=`Mes: ${h[5]}`)&&Ie(i,s),h[10]&&h[11]?u?u.p(h,d):(u=Nc(h),u.c(),u.m(e,null)):u&&(u.d(1),u=null);const g={};d[0]&32&&(g.mesSeleccionado=h[5]),d[0]&1&&(g.sesiones=h[0]),d[0]&16&&(g.varSumaValorPagoPorPaciente=h[4]),l.$set(g)},i(h){c||($e(l.$$.fragment,h),c=!0)},o(h){Je(l.$$.fragment,h),c=!1},d(h){h&&H(e),u&&u.d(),h&&H(o),h&&H(a),wt(l)}}}function Nc(t){let e,n,s,i,r;return{c(){e=E("p"),n=oe("Paciente: "),s=oe(t[10]),i=oe(", "),r=oe(t[11]),f(e,"class","svelte-1u3tilm")},m(o,a){K(o,e,a),m(e,n),m(e,s),m(e,i),m(e,r)},p(o,a){a[0]&1024&&Ie(s,o[10]),a[0]&2048&&Ie(r,o[11])},d(o){o&&H(e)}}}function ME(t){let e,n,s,i,r,o,a,l,c,u,h,d,g,p,y,w,N,I,C,T,M,W,X,se,U,R,A,z,Z,he,He,pt,le=t[0].length>0&&Pc(t);return Z=new kE({props:{vistaCalculos:t[2],arrayParaLaVista:t[3],mesSeleccionado:t[5]}}),Z.$on("vistaPulsado",t[29]),{c(){e=E("main"),n=E("body"),le&&le.c(),s=B(),i=E("div"),r=E("form"),o=E("div"),a=E("div"),l=E("label"),l.textContent="pago",c=E("input"),u=B(),h=E("label"),h.textContent="valor sesion",d=E("input"),g=B(),p=E("div"),y=E("label"),y.textContent="Dia Sesion",w=E("input"),N=B(),I=E("label"),I.textContent="Fecha Pago",C=E("input"),T=B(),M=E("div"),W=E("button"),W.textContent="update",X=B(),se=E("button"),se.textContent="delete",U=B(),R=E("button"),R.textContent="Agregar sesión",A=B(),z=E("div"),Dt(Z.$$.fragment),f(l,"for","valorPago"),f(l,"class","svelte-1u3tilm"),f(c,"name","valorPago"),f(c,"id","valorPago"),f(c,"type","number"),f(c,"step","100"),f(c,"min","0"),f(c,"placeholder","Valor pago"),f(c,"class","svelte-1u3tilm"),f(h,"for","valorSesion"),f(h,"class","svelte-1u3tilm"),f(d,"name","valorSesion"),f(d,"id","valorSesion"),f(d,"type","number"),f(d,"step","100"),f(d,"min","0"),f(d,"placeholder","Valor sesión"),f(d,"class","svelte-1u3tilm"),f(a,"id","inputsFormSesionesI"),f(a,"class","svelte-1u3tilm"),f(y,"for","diaSesion"),f(y,"class","svelte-1u3tilm"),f(w,"name","diaSesion"),f(w,"id","diaSesion"),f(w,"type","date"),f(w,"placeholder","Día sesión"),f(w,"class","svelte-1u3tilm"),f(I,"for","fechaPago"),f(I,"class","svelte-1u3tilm"),f(C,"name","fechaPago"),f(C,"id","fechaPago"),f(C,"type","date"),f(C,"placeholder","Fecha pago"),f(C,"class","svelte-1u3tilm"),f(p,"id","inputsFormSesionesD"),f(p,"class","svelte-1u3tilm"),f(W,"class","svelte-1u3tilm"),f(se,"class","svelte-1u3tilm"),f(R,"class","svelte-1u3tilm"),f(M,"id","botonesFormSesiones"),f(M,"class","buttons svelte-1u3tilm"),f(o,"id","form-Sesiones"),f(o,"class","svelte-1u3tilm"),f(r,"class","svelte-1u3tilm"),f(z,"class","svelte-1u3tilm"),f(i,"id","contenedor-form-sesiones"),f(i,"class","svelte-1u3tilm"),f(n,"class","svelte-1u3tilm"),f(e,"class","svelte-1u3tilm")},m(J,Te){K(J,e,Te),m(e,n),le&&le.m(n,null),m(n,s),m(n,i),m(i,r),m(r,o),m(o,a),m(a,l),m(a,c),Ce(c,t[6]),m(a,u),m(a,h),m(a,d),Ce(d,t[7]),m(o,g),m(o,p),m(p,y),m(p,w),Ce(w,t[8]),m(p,N),m(p,I),m(p,C),Ce(C,t[9]),m(o,T),m(o,M),m(M,W),m(M,X),m(M,se),m(M,U),m(M,R),m(i,A),m(i,z),vt(Z,z,null),he=!0,He||(pt=[Q(c,"input",t[23]),Q(d,"input",t[24]),Q(w,"input",t[25]),Q(C,"input",t[26]),Q(W,"click",t[27]),Q(se,"click",t[28]),Q(R,"click",t[13]),Q(r,"submit",hf(t[22]))],He=!0)},p(J,Te){J[0].length>0?le?(le.p(J,Te),Te[0]&1&&$e(le,1)):(le=Pc(J),le.c(),$e(le,1),le.m(n,s)):le&&(Uc(),Je(le,1,1,()=>{le=null}),qc()),Te[0]&64&&pi(c.value)!==J[6]&&Ce(c,J[6]),Te[0]&128&&pi(d.value)!==J[7]&&Ce(d,J[7]),Te[0]&256&&Ce(w,J[8]),Te[0]&512&&Ce(C,J[9]);const Ke={};Te[0]&4&&(Ke.vistaCalculos=J[2]),Te[0]&8&&(Ke.arrayParaLaVista=J[3]),Te[0]&32&&(Ke.mesSeleccionado=J[5]),Z.$set(Ke)},i(J){he||($e(le),$e(Z.$$.fragment,J),he=!0)},o(J){Je(le),Je(Z.$$.fragment,J),he=!1},d(J){J&&H(e),le&&le.d(),wt(Z),He=!1,nt(pt)}}}function BE(t,e,n){let s,i,r;Lt(t,cs,P=>n(21,s=P)),Lt(t,No,P=>n(10,i=P)),Lt(t,Oo,P=>n(11,r=P));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u=!1,h=[],d,g=0;const p=new Date;let y=p.getMonth()+1,w=p.getFullYear(),N=y;console.log(`mesSeleccionado ${N}`);let I,C,T=0;const M=P=>{if(console.log(P),n(20,I=P.detail),console.log(o),n(1,C=o.find(de=>de.id===I)),console.log("selectedSession",C),n(6,U=C.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(7,R=C.valorSesion),console.log("particular",R);else{var ee=l.find(de=>de.plan==c);console.log(ee),console.log("OS",R)}n(9,z=C.fechaPago),n(8,A=C.diaSesion)},W=async()=>{console.log("Add sesion",C);try{const P=await Id(st(De,"sesiones"),{valorPago:U,valorSesion:R,diaSesion:A,fechaPago:z,pacienteID:s});console.log("sesion agregada"),kn({text:"Nueva sesion agregada"}).showToast(),n(20,I=P.id)}catch(P){console.error(P)}},X=async P=>{console.log("Update sesion",P);try{await Oa(At(De,"sesiones",P.id),{valorPago:U,valorSesion:R,fechaPago:z,diaSesion:A}),kn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ee){console.log(ee)}},se=async P=>{console.log("Delete sesion",P);try{await Co(At(De,"sesiones",P.id)),kn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(ee){console.error(ee)}};let U=5e3,R=5e3,A=new Date().toISOString().slice(0,10),z=new Date().toISOString().slice(0,10);y.toString().padStart(2,"0"),w.toString();let Z=P=>o.filter(de=>de.pacienteID===P&&de.diaSesion.slice(5,7)===N.toString().padStart(2,"0")).reduce((de,Ge)=>de+Ge.valorSesion,0);const he=async P=>{n(5,N=P);const ee=await He(N);n(3,h=ee[1]),h.push({apellido:"ultimo",diaSesion:"ultimo",nombre:"ultimo",plan:"ultimo",valorPago:0,valorSesion:0}),console.log(Array.isArray(ee[1])),console.log(ee[1]),n(2,u=!0)},He=async P=>{P||(P=y);try{const ee=await wE(P);T=0,g=0;let de=[];return ee.forEach(Ge=>{let Js=Ge.pacienteID;const V=a.find(lt=>lt.id==Js);var ce=Ge.valorPago;if(ce==null&&(ce=0),typeof ce=="number")if(V.plan=="particular"){T+=ce,ce<R&&(g+=R-ce);var mn={diaSesion:Ge.diaSesion,apellido:V.apellido,nombre:V.nombre,plan:V.plan.plan?V.plan.plan:"particular",valorPago:ce,valorSesion:Ge.valorSesion};de.push(mn)}else{const lt=V.plan;var mn={diaSesion:Ge.diaSesion,apellido:V.apellido,nombre:V.nombre,plan:V.plan.plan?V.plan.plan:"particular",valorPago:ce,valorSesion:Ge.valorSesion};de.push(mn),ce<lt.valorCoseguro&&(g+=lt.valorCoseguro-ce),T+=lt.valorOs+ce}}),n(4,d=Z(s)),[T,de]}catch(ee){return console.error("Error al obtener las sesiones y los pagos:",ee),[]}};function pt(P){gf.call(this,t,P)}function le(){U=pi(this.value),n(6,U)}function J(){R=pi(this.value),n(7,R)}function Te(){A=this.value,n(8,A)}function Ke(){z=this.value,n(9,z)}const gn=()=>X(C),gt=()=>se(C),S=async P=>he(P.detail);return t.$$set=P=>{"sesiones"in P&&n(0,o=P.sesiones),"pacientes"in P&&n(17,a=P.pacientes),"planes"in P&&n(18,l=P.planes),"planSeleccionado"in P&&n(19,c=P.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&393217&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&1048579&&(n(1,C=o.find(P=>P.id===I)),console.log(C||"sin seleccion de sesion")),t.$$.dirty[0]&2097152&&n(4,d=Z(s))},He(),[o,C,u,h,d,N,U,R,A,z,i,r,M,W,X,se,he,a,l,c,I,s,pt,le,J,Te,Ke,gn,gt,S]}class FE extends St{constructor(e){super(),Tt(this,e,BE,ME,ft,{sesiones:0,pacientes:17,planes:18,planSeleccionado:19},null,[-1,-1])}}function VE(t){let e,n,s,i,r,o,a,l,c,u,h,d,g;return a=new yE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Oc}}),u=new FE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Oc}}),{c(){e=E("body"),n=E("button"),n.textContent="generar backup firestore",s=B(),i=E("div"),r=E("h5"),r.textContent="Listados de Pacientes",o=B(),Dt(a.$$.fragment),l=B(),c=E("div"),Dt(u.$$.fragment),f(r,"class","svelte-17a4mi0"),f(i,"class","contenedor-pacientes svelte-17a4mi0"),f(c,"class","contenedor-sesiones svelte-17a4mi0"),f(e,"class","svelte-17a4mi0")},m(p,y){K(p,e,y),m(e,n),m(e,s),m(e,i),m(i,r),m(i,o),vt(a,i,null),m(e,l),m(e,c),vt(u,c,null),h=!0,d||(g=Q(n,"click",t[4]),d=!0)},p(p,[y]){const w={};y&4&&(w.sesiones=p[2]),y&8&&(w.pacientes=p[3]),y&1&&(w.planes=p[0]),y&2&&(w.optionsPlan=p[1]),a.$set(w);const N={};y&4&&(N.sesiones=p[2]),y&8&&(N.pacientes=p[3]),y&1&&(N.planes=p[0]),u.$set(N)},i(p){h||($e(a.$$.fragment,p),$e(u.$$.fragment,p),h=!0)},o(p){Je(a.$$.fragment,p),Je(u.$$.fragment,p),h=!1},d(p){p&&H(e),wt(a),wt(u),d=!1,g()}}}let Oc="particular";function xE(t,e,n){let s=[],i=[],r=[],o=[];Vc(()=>{const l=[],c=st(De,"sesiones"),u=st(De,"Pacientes"),h=st(De,"planes"),d=os(c,Fr("diaSesion")),g=os(u,Fr("apellido")),p=os(h,Fr("plan")),y=xr(d,I=>{n(2,s=I.docs.map(C=>({id:C.id,...C.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(y);const w=xr(g,I=>{n(3,i=I.docs.map(C=>({id:C.id,...C.data()})))});l.push(w);const N=xr(p,I=>{n(0,r=I.docs.map(C=>({id:C.id,...C.data()})))});return l.push(N),()=>{l.forEach(I=>I())}});const a=()=>{const l="sesiones"+ci().toString()+"BU",c=st(De,l);s.forEach(async p=>{const y=At(c);try{await Vr(y,p),console.log("Documento sesion creado exitosamente")}catch(w){console.error("Error al crear el documento sesion:",w)}});const u="planes"+ci().toString()+"BU",h=st(De,u);r.forEach(async p=>{const y=At(h);try{await Vr(y,p),console.log("Documento plan creado exitosamente")}catch(w){console.error("Error al crear el documento plan:",w)}});const d="Pacientes"+ci().toString()+"BU",g=st(De,d);i.forEach(async p=>{const y=At(g);try{await Vr(y,p),console.log("Documento paciente creado exitosamente")}catch(w){console.error("Error al crear el documento paciente:",w)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class UE extends St{constructor(e){super(),Tt(this,e,xE,VE,ft,{})}}function qE(t){let e,n,s;return n=new UE({}),{c(){e=E("div"),Dt(n.$$.fragment),f(e,"class","contenedorPadre svelte-1t46ri1")},m(i,r){K(i,e,r),vt(n,e,null),s=!0},p:we,i(i){s||($e(n.$$.fragment,i),s=!0)},o(i){Je(n.$$.fragment,i),s=!1},d(i){i&&H(e),wt(n)}}}function $E(t){let e,n,s,i,r,o;return{c(){e=E("div"),n=E("h1"),n.textContent="ingrese la contraseña:",s=B(),i=E("input"),f(n,"class","svelte-1t46ri1"),f(i,"type","password"),f(i,"class","svelte-1t46ri1"),f(e,"class","ingreso svelte-1t46ri1")},m(a,l){K(a,e,l),m(e,n),m(e,s),m(e,i),Ce(i,t[1]),r||(o=[Q(i,"input",t[3]),Q(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Ce(i,a[1])},i:we,o:we,d(a){a&&H(e),r=!1,nt(o)}}}function jE(t){let e,n,s,i;const r=[$E,qE],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=E("main"),s&&s.c(),f(e,"class","svelte-1t46ri1")},m(l,c){K(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(Uc(),Je(o[u],1,1,()=>{o[u]=null}),qc()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),$e(s,1),s.m(e,null)):s=null)},i(l){i||($e(s),i=!0)},o(l){Je(s),i=!1},d(l){l&&H(e),~n&&o[n].d()}}}function zE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class HE extends St{constructor(e){super(),Tt(this,e,zE,jE,ft,{})}}new HE({target:document.getElementById("app")});
