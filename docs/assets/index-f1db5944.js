(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function ye(){}function xc(t){return t()}function Xa(){return Object.create(null)}function gt(t){t.forEach(xc)}function Fc(t){return typeof t=="function"}function Nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function uf(t){return Object.keys(t).length===0}function hf(t,...e){if(t==null)return ye;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function nn(t,e,n){t.$$.on_destroy.push(hf(e,n))}function _n(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function Q(t,e,n){t.insertBefore(e,n||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function Os(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function V(){return $(" ")}function Bo(){return $("")}function G(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function df(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vi(t){return t===""?null:+t}function ff(t){return Array.from(t.childNodes)}function be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Se(t,e){t.value=e??""}function Bt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function pf(t){for(const e of t.options)if(!e.disabled)return e}function wi(t){const e=t.querySelector(":checked")||pf(t);return e&&e.__value}function ni(t,e,n){t.classList[n?"add":"remove"](e)}function gf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let gs;function as(t){gs=t}function Bc(){if(!gs)throw new Error("Function called outside component initialization");return gs}function Vc(t){Bc().$$.on_mount.push(t)}function Vo(){const t=Bc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=gf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function mf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const Sn=[],Ja=[];let Dn=[];const Za=[],yf=Promise.resolve();let Wr=!1;function vf(){Wr||(Wr=!0,yf.then(Uc))}function un(t){Dn.push(t)}const Ir=new Set;let Tn=0;function Uc(){if(Tn!==0)return;const t=gs;do{try{for(;Tn<Sn.length;){const e=Sn[Tn];Tn++,as(e),wf(e.$$)}}catch(e){throw Sn.length=0,Tn=0,e}for(as(null),Sn.length=0,Tn=0;Ja.length;)Ja.pop()();for(let e=0;e<Dn.length;e+=1){const n=Dn[e];Ir.has(n)||(Ir.add(n),n())}Dn.length=0}while(Sn.length);for(;Za.length;)Za.pop()();Wr=!1,Ir.clear(),as(t)}function wf(t){if(t.fragment!==null){t.update(),gt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(un)}}function bf(t){const e=[],n=[];Dn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Dn=e}const hi=new Set;let sn;function jc(){sn={r:0,c:[],p:sn}}function qc(){sn.r||gt(sn.c),sn=sn.p}function Je(t,e){t&&t.i&&(hi.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(hi.has(t))return;hi.add(t),sn.c.push(()=>{hi.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function hn(t){t&&t.c()}function Vt(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||un(()=>{const o=t.$$.on_mount.map(xc).filter(Fc);t.$$.on_destroy?t.$$.on_destroy.push(...o):gt(o),t.$$.on_mount=[]}),r.forEach(un)}function Ut(t,e){const n=t.$$;n.fragment!==null&&(bf(n.after_update),gt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ef(t,e){t.$$.dirty[0]===-1&&(Sn.push(t),vf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,s,i,r,o,a=[-1]){const l=gs;as(t);const c=t.$$={fragment:null,ctx:[],props:r,update:ye,not_equal:i,bound:Xa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const w=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=w)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](w),u&&Ef(t,h)),d}):[],c.update(),u=!0,gt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=ff(e.target);c.fragment&&c.fragment.l(h),h.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&Je(t.$$.fragment),Vt(t,e.target,e.anchor,e.customElement),Uc()}as(l)}class Gt{$destroy(){Ut(this,1),this.$destroy=ye}$on(e,n){if(!Fc(n))return ye;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!uf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let di=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function el(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function tl(t){let e,n=t[12].plan+"",s;return{c(){e=T("option"),s=$(n),e.__value=t[14],e.value=e.__value},m(i,r){Q(i,e,r),v(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&be(s,n)},d(i){i&&W(e)}}}function _f(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=tl(el(t,a,c));return{c(){e=T("div"),n=T("input"),s=V(),i=T("select");for(let c=0;c<l.length;c+=1)l[c].c();p(n,"type","checkbox"),p(n,"name","CheckBoxParticular"),p(n,"id","CheckBoxParticular"),p(i,"name","plan"),p(i,"id","plan"),p(i,"class","svelte-1de4xhy"),t[1]===void 0&&un(()=>t[8].call(i)),ni(i,"SelectPlanVisible",t[0]),ni(i,"SelectPlanHidden",t[3]),p(e,"id","selectPlanContainer"),p(e,"class","svelte-1de4xhy")},m(c,u){Q(c,e,u),v(e,n),n.checked=t[0],v(e,s),v(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);Bt(i,t[1]),r||(o=[G(n,"change",t[7]),G(n,"change",t[4]),G(i,"change",t[8]),G(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=el(c,a,h);l[h]?l[h].p(d,u):(l[h]=tl(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&Bt(i,c[1]),u&1&&ni(i,"SelectPlanVisible",c[0]),u&8&&ni(i,"SelectPlanHidden",c[3])},i:ye,o:ye,d(c){c&&W(e),Os(l,c),r=!1,gt(o)}}}function Tf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=m=>{n(0,r=m)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=m=>{var y=m.target.checked;l(y),c()},h=Vo(),d=m=>{n(1,o=parseInt(m.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function f(){r=this.checked,n(0,r)}function w(){o=wi(this),n(1,o)}return t.$$set=m=>{"planes"in m&&n(2,s=m.planes),"planSeleccionado"in m&&n(6,i=m.planSeleccionado),"SelectPlanVisible"in m&&n(0,r=m.SelectPlanVisible),"indicePlan"in m&&n(1,o=m.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,f,w]}class Cf extends Gt{constructor(e){super(),Kt(this,e,Tf,_f,Nt,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $c=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new If;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const w=c<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class If extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Af=function(t){const e=$c(t);return Hc.encodeByteArray(e,!0)},bi=function(t){return Af(t).replace(/\./g,"")},kf=function(t){try{return Hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pf=()=>Df().__FIREBASE_DEFAULTS__,Nf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Of=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kf(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return Pf()||Nf()||Of()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rf=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kc=t=>{const e=Rf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Lf=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Gc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bi(JSON.stringify(n)),bi(JSON.stringify(o)),a].join(".")}function xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="FirebaseError";class yn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Bf,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wc.prototype.create)}}class Wc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,s)}}function Vf(t,e){return t.replace(Uf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Uf=/\{\$([^}]+)}/g;function Qr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nl(r)&&nl(o)){if(!Qr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nl(t){return t!==null&&typeof t=="object"}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class jf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($f(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(t){return t===tn?void 0:t}function $f(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const zf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Kf=X.INFO,Gf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Wf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Gf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=Kf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Qf=(t,e)=>e.some(n=>t instanceof n);let sl,il;function Yf(){return sl||(sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yc=new WeakMap,Yr=new WeakMap,Xc=new WeakMap,Ar=new WeakMap,Uo=new WeakMap;function Jf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Rt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yc.set(n,t)}).catch(()=>{}),Uo.set(e,t),e}function Zf(t){if(Yr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yr.set(t,e)}let Xr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ep(t){Xr=t(Xr)}function tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(kr(this),e,...n);return Xc.set(s,e.sort?e.sort():[e]),Rt(s)}:Xf().includes(t)?function(...e){return t.apply(kr(this),e),Rt(Yc.get(this))}:function(...e){return Rt(t.apply(kr(this),e))}}function np(t){return typeof t=="function"?tp(t):(t instanceof IDBTransaction&&Zf(t),Qf(t,Yf())?new Proxy(t,Xr):t)}function Rt(t){if(t instanceof IDBRequest)return Jf(t);if(Ar.has(t))return Ar.get(t);const e=np(t);return e!==t&&(Ar.set(t,e),Uo.set(e,t)),e}const kr=t=>Uo.get(t);function sp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Rt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Rt(o.result),l.oldVersion,l.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ip=["get","getKey","getAll","getAllKeys","count"],rp=["put","add","delete","clear"],Dr=new Map;function rl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ip.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Dr.set(e,r),r}ep(t=>({...t,get:(e,n,s)=>rl(e,n)||t.get(e,n,s),has:(e,n)=>!!rl(e,n)||t.has(e,n)}));/**
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
 */class op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ap(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jr="@firebase/app",ol="0.9.4";/**
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
 */const dn=new Qc("@firebase/app"),lp="@firebase/app-compat",cp="@firebase/analytics-compat",up="@firebase/analytics",hp="@firebase/app-check-compat",dp="@firebase/app-check",fp="@firebase/auth",pp="@firebase/auth-compat",gp="@firebase/database",mp="@firebase/database-compat",yp="@firebase/functions",vp="@firebase/functions-compat",wp="@firebase/installations",bp="@firebase/installations-compat",Ep="@firebase/messaging",_p="@firebase/messaging-compat",Tp="@firebase/performance",Cp="@firebase/performance-compat",Sp="@firebase/remote-config",Ip="@firebase/remote-config-compat",Ap="@firebase/storage",kp="@firebase/storage-compat",Dp="@firebase/firestore",Pp="@firebase/firestore-compat",Np="firebase",Op="9.17.2";/**
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
 */const Zr="[DEFAULT]",Rp={[Jr]:"fire-core",[lp]:"fire-core-compat",[up]:"fire-analytics",[cp]:"fire-analytics-compat",[dp]:"fire-app-check",[hp]:"fire-app-check-compat",[fp]:"fire-auth",[pp]:"fire-auth-compat",[gp]:"fire-rtdb",[mp]:"fire-rtdb-compat",[yp]:"fire-fn",[vp]:"fire-fn-compat",[wp]:"fire-iid",[bp]:"fire-iid-compat",[Ep]:"fire-fcm",[_p]:"fire-fcm-compat",[Tp]:"fire-perf",[Cp]:"fire-perf-compat",[Sp]:"fire-rc",[Ip]:"fire-rc-compat",[Ap]:"fire-gcs",[kp]:"fire-gcs-compat",[Dp]:"fire-fst",[Pp]:"fire-fst-compat","fire-js":"fire-js",[Np]:"fire-js-all"};/**
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
 */const Ei=new Map,eo=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(eo.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,t);for(const n of Ei.values())Lp(n,t);return!0}function Jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Wc("app","Firebase",Mp);/**
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
 */class xp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zc=Op;function eu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Zr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Lf()),!n)throw Lt.create("no-options");const r=Ei.get(i);if(r){if(Qr(n,r.options)&&Qr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Hf(i);for(const l of eo.values())o.addComponent(l);const a=new xp(n,s,o);return Ei.set(i,a),a}function tu(t=Zr){const e=Ei.get(t);if(!e&&t===Zr)return eu();if(!e)throw Lt.create("no-app",{appName:t});return e}function Mt(t,e,n){var s;let i=(s=Rp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}ms(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fp="firebase-heartbeat-database",Bp=1,ys="firebase-heartbeat-store";let Pr=null;function nu(){return Pr||(Pr=sp(Fp,Bp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),Pr}async function Vp(t){try{return(await nu()).transaction(ys).objectStore(ys).get(su(t))}catch(e){if(e instanceof yn)dn.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function al(t,e){try{const s=(await nu()).transaction(ys,"readwrite");return await s.objectStore(ys).put(e,su(t)),s.done}catch(n){if(n instanceof yn)dn.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(s.message)}}}function su(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Up=1024,jp=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:n,unsentEntries:s}=$p(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ll(){return new Date().toISOString().substring(0,10)}function $p(t,e=Up){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),cl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return al(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cl(t){return bi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zp(t){ms(new xn("platform-logger",e=>new op(e),"PRIVATE")),ms(new xn("heartbeat",e=>new qp(e),"PRIVATE")),Mt(Jr,ol,t),Mt(Jr,ol,"esm2017"),Mt("fire-js","")}zp("");var Kp="firebase",Gp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(Kp,Gp,"app");var Wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,jo=jo||{},M=Wp||self;function _i(){}function ji(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Qp(t){return Object.prototype.hasOwnProperty.call(t,Nr)&&t[Nr]||(t[Nr]=++Yp)}var Nr="closure_uid_"+(1e9*Math.random()>>>0),Yp=0;function Xp(t,e,n){return t.call.apply(t.bind,arguments)}function Jp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Fe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=Xp:Fe=Jp,Fe.apply(null,arguments)}function si(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Oe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Wt(){this.s=this.s,this.o=this.o}var Zp=0;Wt.prototype.s=!1;Wt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zp!=0)&&Qp(this)};Wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ul(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ji(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var eg=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",_i,e),M.removeEventListener("test",_i,e)}catch{}return t}();function Ti(t){return/^[\s\xa0]*$/.test(t)}var hl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Or(t,e){return t<e?-1:t>e?1:0}function qi(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function yt(t){return qi().indexOf(t)!=-1}function $o(t){return $o[" "](t),t}$o[" "]=_i;function tg(t){var e=ig;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ng=yt("Opera"),Fn=yt("Trident")||yt("MSIE"),ru=yt("Edge"),to=ru||Fn,ou=yt("Gecko")&&!(qi().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),sg=qi().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function au(){var t=M.document;return t?t.documentMode:void 0}var Ci;e:{var Rr="",Lr=function(){var t=qi();if(ou)return/rv:([^\);]+)(\)|;)/.exec(t);if(ru)return/Edge\/([\d\.]+)/.exec(t);if(Fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sg)return/WebKit\/(\S+)/.exec(t);if(ng)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lr&&(Rr=Lr?Lr[1]:""),Fn){var Mr=au();if(Mr!=null&&Mr>parseFloat(Rr)){Ci=String(Mr);break e}}Ci=Rr}var ig={};function rg(){return tg(function(){let t=0;const e=hl(String(Ci)).split("."),n=hl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Or(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Or(i[2].length==0,r[2].length==0)||Or(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var no;if(M.document&&Fn){var dl=au();no=dl||parseInt(Ci,10)||void 0}else no=void 0;var og=no;function vs(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ou){e:{try{$o(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ag[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vs.X.h.call(this)}}Oe(vs,Be);var ag={2:"touch",3:"pen",4:"mouse"};vs.prototype.h=function(){vs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ls="closure_listenable_"+(1e6*Math.random()|0),lg=0;function cg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++lg,this.ba=this.ea=!1}function $i(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ho(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lu(t){const e={};for(const n in t)e[n]=t[n];return e}const fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<fl.length;r++)n=fl[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Hi(t){this.src=t,this.g={},this.h=0}Hi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=io(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new cg(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function so(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=iu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&($i(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function io(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var zo="closure_lm_"+(1e6*Math.random()|0),xr={};function uu(t,e,n,s,i){if(s&&s.once)return du(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)uu(t,e[r],n,s,i);return null}return n=Wo(n),t&&t[Ls]?t.N(e,n,Rs(s)?!!s.capture:!!s,i):hu(t,e,n,!1,s,i)}function hu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Rs(i)?!!i.capture:!!i,a=Go(t);if(a||(t[zo]=a=new Hi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ug(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)eg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(pu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ug(){function t(n){return e.call(t.src,t.listener,n)}const e=hg;return t}function du(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)du(t,e[r],n,s,i);return null}return n=Wo(n),t&&t[Ls]?t.O(e,n,Rs(s)?!!s.capture:!!s,i):hu(t,e,n,!0,s,i)}function fu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)fu(t,e[r],n,s,i);else s=Rs(s)?!!s.capture:!!s,n=Wo(n),t&&t[Ls]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=io(r,n,s,i),-1<n&&($i(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Go(t))&&(e=t.g[e.toString()],t=-1,e&&(t=io(e,n,s,i)),(n=-1<t?e[t]:null)&&Ko(n))}function Ko(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ls])so(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Go(e))?(so(n,t),n.h==0&&(n.src=null,e[zo]=null)):$i(t)}}}function pu(t){return t in xr?xr[t]:xr[t]="on"+t}function hg(t,e){if(t.ba)t=!0;else{e=new vs(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ko(t),t=n.call(s,e)}return t}function Go(t){return t=t[zo],t instanceof Hi?t:null}var Fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wo(t){return typeof t=="function"?t:(t[Fr]||(t[Fr]=function(e){return t.handleEvent(e)}),t[Fr])}function Ie(){Wt.call(this),this.i=new Hi(this),this.P=this,this.I=null}Oe(Ie,Wt);Ie.prototype[Ls]=!0;Ie.prototype.removeEventListener=function(t,e,n,s){fu(this,t,e,n,s)};function Pe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(s,t),cu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ii(o,s,!0,e)&&i}if(o=e.g=t,i=ii(o,s,!0,e)&&i,i=ii(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ii(o,s,!1,e)&&i}Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)$i(n[s]);delete t.g[e],t.h--}}this.I=null};Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ii(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&so(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Qo=M.JSON.stringify;function dg(){var t=yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fg{constructor(){this.h=this.g=null}add(e,n){const s=gu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var gu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pg,t=>t.reset());class pg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gg(t){M.setTimeout(()=>{throw t},0)}function mu(t,e){ro||mg(),oo||(ro(),oo=!0),yu.add(t,e)}var ro;function mg(){var t=M.Promise.resolve(void 0);ro=function(){t.then(yg)}}var oo=!1,yu=new fg;function yg(){for(var t;t=dg();){try{t.h.call(t.g)}catch(n){gg(n)}var e=gu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oo=!1}function zi(t,e){Ie.call(this),this.h=t||1,this.g=e||M,this.j=Fe(this.lb,this),this.l=Date.now()}Oe(zi,Ie);k=zi.prototype;k.ca=!1;k.R=null;k.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(Yo(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}k.M=function(){zi.X.M.call(this),Yo(this),delete this.g};function Xo(t,e,n){if(typeof t=="function")n&&(t=Fe(t,n));else if(t&&typeof t.handleEvent=="function")t=Fe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function vu(t){t.g=Xo(()=>{t.g=null,t.i&&(t.i=!1,vu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vg extends Wt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vu(this)}M(){super.M(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(t){Wt.call(this),this.h=t,this.g={}}Oe(ws,Wt);var pl=[];function wu(t,e,n,s){Array.isArray(n)||(n&&(pl[0]=n.toString()),n=pl);for(var i=0;i<n.length;i++){var r=uu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function bu(t){Ho(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ko(e)},t),t.g={}}ws.prototype.M=function(){ws.X.M.call(this),bu(this)};ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ki(){this.g=!0}Ki.prototype.Aa=function(){this.g=!1};function wg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function kn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_g(t,n)+(s?" "+s:"")})}function Eg(t,e){t.info(function(){return"TIMEOUT: "+e})}Ki.prototype.info=function(){};function _g(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Qo(n)}catch{return e}}var vn={},gl=null;function Gi(){return gl=gl||new Ie}vn.Pa="serverreachability";function Eu(t){Be.call(this,vn.Pa,t)}Oe(Eu,Be);function bs(t){const e=Gi();Pe(e,new Eu(e))}vn.STAT_EVENT="statevent";function _u(t,e){Be.call(this,vn.STAT_EVENT,t),this.stat=e}Oe(_u,Be);function Ke(t){const e=Gi();Pe(e,new _u(e,t))}vn.Qa="timingevent";function Tu(t,e){Be.call(this,vn.Qa,t),this.size=e}Oe(Tu,Be);function Ms(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Wi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jo(){}Jo.prototype.h=null;function ml(t){return t.h||(t.h=t.i())}function Su(){}var xs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Zo(){Be.call(this,"d")}Oe(Zo,Be);function ea(){Be.call(this,"c")}Oe(ea,Be);var ao;function Qi(){}Oe(Qi,Jo);Qi.prototype.g=function(){return new XMLHttpRequest};Qi.prototype.i=function(){return{}};ao=new Qi;function Fs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ws(this),this.O=Tg,t=to?125:void 0,this.T=new zi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var Tg=45e3,lo={},Si={};k=Fs.prototype;k.setTimeout=function(t){this.O=t};function co(t,e,n){t.K=1,t.v=Xi(At(e)),t.s=n,t.P=!0,Au(t,null)}function Au(t,e){t.F=Date.now(),Bs(t),t.A=At(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Mu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Iu,t.g=nh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new vg(Fe(t.La,t,t.g),t.N)),wu(t.S,t.g,"readystatechange",t.ib),e=t.H?lu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),bs(),wg(t.j,t.u,t.A,t.m,t.U,t.s)}k.ib=function(t){t=t.target;const e=this.L;e&&Ct(t)==3?e.l():this.La(t)};k.La=function(t){try{if(t==this.g)e:{const u=Ct(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||to||this.g&&(this.h.h||this.g.fa()||bl(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?bs(3):bs(2)),Yi(this);var n=this.g.aa();this.Y=n;t:if(ku(this)){var s=bl(this.g);t="";var i=s.length,r=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rn(this),ls(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ti(a)){var c=a;break t}}c=null}if(n=c)kn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uo(this,n);else{this.i=!1,this.o=3,Ke(12),rn(this),ls(this);break e}}this.P?(Du(this,u,o),to&&this.i&&u==3&&(wu(this.S,this.T,"tick",this.hb),this.T.start())):(kn(this.j,this.m,o,null),uo(this,o)),u==4&&rn(this),this.i&&!this.I&&(u==4?Ju(this.l,this):(this.i=!1,Bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ke(12)):(this.o=0,Ke(13)),rn(this),ls(this)}}}catch{}finally{}};function ku(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Du(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Cg(t,n),i==Si){e==4&&(t.o=4,Ke(14),s=!1),kn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lo){t.o=4,Ke(15),kn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else kn(t.j,t.m,i,null),uo(t,i);ku(t)&&i!=Si&&i!=lo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ke(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),aa(e),e.K=!0,Ke(11))):(kn(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),ls(t))}k.hb=function(){if(this.g){var t=Ct(this.g),e=this.g.fa();this.C<e.length&&(Yi(this),Du(this,t,e),this.i&&t!=4&&Bs(this))}};function Cg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Si:(n=Number(e.substring(n,s)),isNaN(n)?lo:(s+=1,s+n>e.length?Si:(e=e.substr(s,n),t.C=s+n,e)))}k.cancel=function(){this.I=!0,rn(this)};function Bs(t){t.V=Date.now()+t.O,Pu(t,t.O)}function Pu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ms(Fe(t.gb,t),e)}function Yi(t){t.B&&(M.clearTimeout(t.B),t.B=null)}k.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Eg(this.j,this.A),this.K!=2&&(bs(),Ke(17)),rn(this),this.o=2,ls(this)):Pu(this,this.V-t)};function ls(t){t.l.G==0||t.I||Ju(t.l,t)}function rn(t){Yi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Yo(t.T),bu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function uo(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ho(n.h,t))){if(!t.J&&ho(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ki(n),er(n);else break e;oa(n),Ke(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ms(Fe(n.cb,n),6e3));if(1>=Bu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else on(n,11)}else if((t.J||n.g==t)&&ki(n),!Ti(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const w=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var r=s.h;r.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ta(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,oe(s.F,s.D,m))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=th(s,s.H?s.ka:null,s.V),o.J){Vu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Yi(a),Bs(a)),s.g=o}else Yu(s);0<n.i.length&&tr(n)}else c[0]!="stop"&&c[0]!="close"||on(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?on(n,7):ra(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}bs(4)}catch{}}function Sg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ji(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ig(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ji(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ji(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ig(t),s=Sg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ag(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ln){this.h=e!==void 0?e:t.h,Ii(this,t.j),this.s=t.s,this.g=t.g,Ai(this,t.m),this.l=t.l,e=t.i;var n=new Es;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),yl(this,n),this.o=t.o}else t&&(n=String(t).match(Ou))?(this.h=!!e,Ii(this,n[1]||"",!0),this.s=ss(n[2]||""),this.g=ss(n[3]||"",!0),Ai(this,n[4]),this.l=ss(n[5]||"",!0),yl(this,n[6]||"",!0),this.o=ss(n[7]||"")):(this.h=!!e,this.i=new Es(null,this.h))}ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(is(e,vl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(is(e,vl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(is(n,n.charAt(0)=="/"?Pg:Dg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",is(n,Og)),t.join("")};function At(t){return new ln(t)}function Ii(t,e,n){t.j=n?ss(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ai(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yl(t,e,n){e instanceof Es?(t.i=e,Rg(t.i,t.h)):(n||(e=is(e,Ng)),t.i=new Es(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Xi(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ss(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var vl=/[#\/\?@]/g,Dg=/[#\?:]/g,Pg=/[#\?]/g,Ng=/[#\?@]/g,Og=/#/g;function Es(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qt(t){t.g||(t.g=new Map,t.h=0,t.i&&Ag(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Es.prototype;k.add=function(t,e){Qt(this),this.i=null,t=Kn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ru(t,e){Qt(t),e=Kn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lu(t,e){return Qt(t),e=Kn(t,e),t.g.has(e)}k.forEach=function(t,e){Qt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};k.oa=function(){Qt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};k.W=function(t){Qt(this);let e=[];if(typeof t=="string")Lu(this,t)&&(e=e.concat(this.g.get(Kn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return Qt(this),this.i=null,t=Kn(this,t),Lu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mu(t,e,n){Ru(t,e),0<n.length&&(t.i=null,t.g.set(Kn(t,e),qo(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Kn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Rg(t,e){e&&!t.j&&(Qt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ru(this,s),Mu(this,i,n))},t)),t.j=e}var Lg=class{constructor(e,n){this.h=e,this.g=n}};function xu(t){this.l=t||Mg,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ga&&M.g.Ga()&&M.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mg=10;function Fu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bu(t){return t.h?1:t.g?t.g.size:0}function ho(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ta(t,e){t.g?t.g.add(e):t.h=e}function Vu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xu.prototype.cancel=function(){if(this.i=Uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qo(t.i)}function na(){}na.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};na.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function xg(){this.g=new na}function Fg(t,e,n){const s=n||"";try{Nu(t,function(i,r){let o=i;Rs(i)&&(o=Qo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Bg(t,e){const n=new Ki;if(M.Image){const s=new Image;s.onload=si(ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=si(ri,n,s,"TestLoadImage: error",!1,e),s.onabort=si(ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=si(ri,n,s,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ri(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Vs(t){this.l=t.ac||null,this.j=t.jb||!1}Oe(Vs,Jo);Vs.prototype.g=function(){return new Ji(this.l,this.j)};Vs.prototype.i=function(t){return function(){return t}}({});function Ji(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Oe(Ji,Ie);var sa=0;k=Ji.prototype;k.open=function(t,e){if(this.readyState!=sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_s(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||M).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=sa};k.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ju(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}k.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):_s(this),this.readyState==3&&ju(this)}};k.Va=function(t){this.g&&(this.response=this.responseText=t,Us(this))};k.Ua=function(t){this.g&&(this.response=t,Us(this))};k.ga=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_s(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vg=M.JSON.parse;function ce(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qu,this.K=this.L=!1}Oe(ce,Ie);var qu="",Ug=/^https?$/i,jg=["POST","PUT"];k=ce.prototype;k.Ka=function(t){this.L=t};k.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ao.g(),this.C=this.u?ml(this.u):ml(ao),this.g.onreadystatechange=Fe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){wl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=iu(jg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zu(this),0<this.B&&((this.K=qg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.qa,this)):this.A=Xo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){wl(this,r)}};function qg(t){return Fn&&rg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.qa=function(){typeof jo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function wl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$u(t),Zi(t)}function $u(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),Zi(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zi(this,!0)),ce.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?Hu(this):this.fb())};k.fb=function(){Hu(this)};function Hu(t){if(t.h&&typeof jo<"u"&&(!t.C[1]||Ct(t)!=4||t.aa()!=2)){if(t.v&&Ct(t)==4)Xo(t.Ha,0,t);else if(Pe(t,"readystatechange"),Ct(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Ou)[1]||null;if(!i&&M.self&&M.self.location){var r=M.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ug.test(i?i.toLowerCase():"")}n=s}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<Ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$u(t)}}finally{Zi(t)}}}}function Zi(t,e){if(t.g){zu(t);const n=t.g,s=t.C[0]?_i:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=s}catch{}}}function zu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function Ct(t){return t.g?t.g.readyState:0}k.aa=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vg(e)}};function bl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ku(t){let e="";return Ho(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ia(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ku(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gu(t){this.Ca=0,this.i=[],this.j=new Ki,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ns("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ns("baseRetryDelayMs",5e3,t),this.bb=ns("retryDelaySeedMs",1e4,t),this.$a=ns("forwardChannelMaxRetries",2,t),this.ta=ns("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new xu(t&&t.concurrentRequestLimit),this.Fa=new xg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=Gu.prototype;k.ma=8;k.G=1;function ra(t){if(Wu(t),t.G==3){var e=t.U++,n=At(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),js(t,n),e=new Fs(t,t.j,e,void 0),e.K=2,e.v=Xi(At(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=nh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Bs(e)}eh(t)}function er(t){t.g&&(aa(t),t.g.cancel(),t.g=null)}function Wu(t){er(t),t.u&&(M.clearTimeout(t.u),t.u=null),ki(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function tr(t){Fu(t.h)||t.m||(t.m=!0,mu(t.Ja,t),t.C=0)}function $g(t,e){return Bu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ms(Fe(t.Ja,t,e),Zu(t,t.C)),t.C++,!0)}k.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=lu(r),cu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qu(this,i,e),n=At(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),js(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Ku(r)))+"&"+e:this.o&&ia(n,this.o,r)),ta(this.h,i),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),i.Z=!0,co(i,n,null)):co(i,n,e),this.G=2}}else this.G==3&&(t?El(this,t):this.i.length==0||Fu(this.h)||El(this))};function El(t,e){var n;e?n=e.m:n=t.U++;const s=At(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),js(t,s),t.o&&t.s&&ia(s,t.o,t.s),n=new Fs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ta(t.h,n),co(n,s,e)}function js(t,e){t.ia&&Ho(t.ia,function(n,s){oe(e,s,n)}),t.l&&Nu({},function(n,s){oe(e,s,n)})}function Qu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Fe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Fg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Yu(t){t.g||t.u||(t.Z=1,mu(t.Ia,t),t.A=0)}function oa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ms(Fe(t.Ia,t),Zu(t,t.A)),t.A++,!0)}k.Ia=function(){if(this.u=null,Xu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ms(Fe(this.eb,this),t)}};k.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ke(10),er(this),Xu(this))};function aa(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function Xu(t){t.g=new Fs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=At(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),js(t,e),t.o&&t.s&&ia(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Xi(At(e)),n.s=null,n.P=!0,Au(n,t)}k.cb=function(){this.v!=null&&(this.v=null,er(this),oa(this),Ke(19))};function ki(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function Ju(t,e){var n=null;if(t.g==e){ki(t),aa(t),t.g=null;var s=2}else if(ho(t.h,e))n=e.D,Vu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Gi(),Pe(s,new Tu(s,n)),tr(t)}else Yu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&$g(t,e)||s==2&&oa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:on(t,5);break;case 4:on(t,10);break;case 3:on(t,6);break;default:on(t,2)}}}function Zu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function on(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Fe(t.kb,t);n||(n=new ln("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||Ii(n,"https"),Xi(n)),Bg(n.toString(),s)}else Ke(2);t.G=0,t.l&&t.l.va(e),eh(t),Wu(t)}k.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function eh(t){if(t.G=0,t.la=[],t.l){const e=Uu(t.h);(e.length!=0||t.i.length!=0)&&(ul(t.la,e),ul(t.la,t.i),t.h.i.length=0,qo(t.i),t.i.length=0),t.l.ua()}}function th(t,e,n){var s=n instanceof ln?At(n):new ln(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ai(s,s.m);else{var i=M.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ln(null,void 0);s&&Ii(r,s),e&&(r.g=e),i&&Ai(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),js(t,s),s}function nh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Vs({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function sh(){}k=sh.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Ra=function(){};function Di(){if(Fn&&!(10<=Number(og)))throw Error("Environmental error: no available transport.")}Di.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){Ie.call(this),this.g=new Gu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ti(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ti(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gn(this)}Oe(tt,Ie);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ke(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=th(t,null,t.V),tr(t)};tt.prototype.close=function(){ra(this.g)};tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Qo(t),t=n);e.i.push(new Lg(e.ab++,t)),e.G==3&&tr(e)};tt.prototype.M=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,tt.X.M.call(this)};function ih(t){Zo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Oe(ih,Zo);function rh(){ea.call(this),this.status=1}Oe(rh,ea);function Gn(t){this.g=t}Oe(Gn,sh);Gn.prototype.xa=function(){Pe(this.g,"a")};Gn.prototype.wa=function(t){Pe(this.g,new ih(t))};Gn.prototype.va=function(t){Pe(this.g,new rh)};Gn.prototype.ua=function(){Pe(this.g,"b")};Di.prototype.createWebChannel=Di.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Wi.NO_ERROR=0;Wi.TIMEOUT=8;Wi.HTTP_ERROR=6;Cu.COMPLETE="complete";Su.EventType=xs;xs.OPEN="a";xs.CLOSE="b";xs.ERROR="c";xs.MESSAGE="d";Ie.prototype.listen=Ie.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var Hg=function(){return new Di},zg=function(){return Gi()},Br=Wi,Kg=Cu,Gg=vn,_l={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Wg=Vs,oi=Su,Qg=ce;const Tl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Wn="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Qc("@firebase/firestore");function Cl(){return fn.logLevel}function D(t,...e){if(fn.logLevel<=X.DEBUG){const n=e.map(la);fn.debug(`Firestore (${Wn}): ${t}`,...n)}}function kt(t,...e){if(fn.logLevel<=X.ERROR){const n=e.map(la);fn.error(`Firestore (${Wn}): ${t}`,...n)}}function fo(t,...e){if(fn.logLevel<=X.WARN){const n=e.map(la);fn.warn(`Firestore (${Wn}): ${t}`,...n)}}function la(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function L(t="Unexpected state"){const e=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+t;throw kt(e),new Error(e)}function se(t,e){t||L()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Re.UNAUTHENTICATED))}shutdown(){}}class Xg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jg{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new xt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new xt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string"),new oh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new Re(e)}}class Zg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class em{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Zg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.A=n.token,new tm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=sm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Bn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ee(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new Ee(0,0))}static max(){return new x(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,s){n===void 0?n=0:n>e.length&&L(),s===void 0?s=e.length-n:s>e.length-n&&L(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ts.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ts?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Ts{construct(e,n,s){return new re(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new A(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const im=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Ts{construct(e,n,s){return new Me(e,n,s)}static isValidIdentifier(e){return im.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new A(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(re.fromString(e))}static fromName(e){return new O(re.fromString(e).popFirst(5))}static empty(){return new O(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new re(e.slice()))}}function rm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new Ee(n+1,0):new Ee(n,s));return new jt(i,O.empty(),e)}function om(t){return new jt(t.readTime,t.key,-1)}class jt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new jt(x.min(),O.empty(),-1)}static max(){return new jt(x.max(),O.empty(),-1)}}function am(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==lm)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function $s(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class um{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return t==null}function Pi(t){return t===0&&1/t==-1/0}function hm(t){return typeof t=="number"&&Number.isInteger(t)&&!Pi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new dm("Invalid base64 string: "+i):i}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const fm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(t){if(se(!!t),typeof t=="string"){let e=0;const n=fm.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uh(t){const e=t.mapValue.fields.__previous_value__;return ch(e)?uh(e):e}function Ss(t){const e=qt(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ch(t)?4:pm(t)?9007199254740991:10:L()}function wt(t,e){if(t===e)return!0;const n=pn(t);if(n!==pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ss(t).isEqual(Ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=qt(s.timestampValue),o=qt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ge(s.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(s.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ge(s.integerValue)===ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ge(s.doubleValue),o=ge(i.doubleValue);return r===o?Pi(r)===Pi(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Bn(t.arrayValue.values||[],e.arrayValue.values||[],wt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Sl(r)!==Sl(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wt(r[a],o[a])))return!1;return!0}(t,e);default:return L()}}function Is(t,e){return(t.values||[]).find(n=>wt(n,e))!==void 0}function Un(t,e){if(t===e)return 0;const n=pn(t),s=pn(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ge(i.integerValue||i.doubleValue),a=ge(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Il(t.timestampValue,e.timestampValue);case 4:return Il(Ss(t),Ss(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Vn(i),a=Vn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=J(o[l],a[l]);if(c!==0)return c}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=J(ge(i.latitude),ge(r.latitude));return o!==0?o:J(ge(i.longitude),ge(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Un(o[l],a[l]);if(c)return c}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ai.mapValue&&r===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(r===ai.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=J(a[u],c[u]);if(h!==0)return h;const d=Un(o[a[u]],l[c[u]]);if(d!==0)return d}return J(a.length,c.length)}(t.mapValue,e.mapValue);default:throw L()}}function Il(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=qt(t),s=qt(e),i=J(n.seconds,s.seconds);return i!==0?i:J(n.nanos,s.nanos)}function jn(t){return po(t)}function po(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=qt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Vn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=po(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${po(s.fields[a])}`;return r+"}"}(t.mapValue):L();var e,n}function Al(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function go(t){return!!t&&"integerValue"in t}function ua(t){return!!t&&"arrayValue"in t}function kl(t){return!!t&&"nullValue"in t}function Dl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fi(t){return!!t&&"mapValue"in t}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=cs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ni{constructor(e,n){this.position=e,this.inclusive=n}}function Pl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=Un(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Nl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hh{}class me extends hh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new mm(e,n,s):n==="array-contains"?new wm(e,s):n==="in"?new bm(e,s):n==="not-in"?new Em(e,s):n==="array-contains-any"?new _m(e,s):new me(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ym(e,s):new vm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Un(n,this.value)):n!==null&&pn(this.value)===pn(n)&&this.matchesComparison(Un(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends hh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new ft(e,n)}matches(e){return dh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dh(t){return t.op==="and"}function fh(t){return gm(t)&&dh(t)}function gm(t){for(const e of t.filters)if(e instanceof ft)return!1;return!0}function mo(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+jn(t.value);if(fh(t))return t.filters.map(e=>mo(e)).join(",");{const e=t.filters.map(n=>mo(n)).join(",");return`${t.op}(${e})`}}function ph(t,e){return t instanceof me?function(n,s){return s instanceof me&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(t,e):t instanceof ft?function(n,s){return s instanceof ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ph(r,s.filters[o]),!0):!1}(t,e):void L()}function gh(t){return t instanceof me?function(e){return`${e.field.canonicalString()} ${e.op} ${jn(e.value)}`}(t):t instanceof ft?function(e){return e.op.toString()+" {"+e.getFilters().map(gh).join(" ,")+"}"}(t):"Filter"}class mm extends me{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class ym extends me{constructor(e,n){super(e,"in",n),this.keys=mh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vm extends me{constructor(e,n){super(e,"not-in",n),this.keys=mh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class wm extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ua(n)&&Is(n.arrayValue,this.value)}}class bm extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Is(this.value.arrayValue,n)}}class Em extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Is(this.value.arrayValue,n)}}class _m extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ua(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Is(this.value.arrayValue,s))}}/**
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
 */class Pn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new li(this.root,e,this.comparator,!1)}getReverseIterator(){return new li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new li(this.root,e,this.comparator,!0)}}class li{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ke.RED,this.left=i??ke.EMPTY,this.right=r??ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new ke(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ol(this.data.getIterator())}getIteratorFrom(e){return new Ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new _e(Me.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=Me.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=cs(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());fi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];fi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){wn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ye(cs(this.value))}}function yh(t){const e=[];return wn(t.fields,(n,s)=>{const i=new Me([n]);if(fi(s)){const r=yh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,x.min(),x.min(),x.min(),Ye.empty(),0)}static newFoundDocument(e,n,s,i){return new Le(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new Le(e,2,n,x.min(),x.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,x.min(),x.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Rl(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Cm(t,e,n,s,i,r,o)}function ha(t){const e=F(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>mo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),nr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>jn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>jn(s)).join(",")),e._t=n}return e._t}function da(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ph(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nl(t.startAt,e.startAt)&&Nl(t.endAt,e.endAt)}function yo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Sm(t,e,n,s,i,r,o,a){return new Qn(t,e,n,s,i,r,o,a)}function fa(t){return new Qn(t)}function Ll(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function sr(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vh(t){return t.collectionGroup!==null}function Nn(t){const e=F(t);if(e.wt===null){e.wt=[];const n=sr(e),s=pa(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Pn(n)),e.wt.push(new Pn(Me.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Pn(Me.keyField(),r))}}}return e.wt}function Dt(t){const e=F(t);if(!e.gt)if(e.limitType==="F")e.gt=Rl(e.path,e.collectionGroup,Nn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Nn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Pn(r.field,o))}const s=e.endAt?new Ni(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ni(e.startAt.position,e.startAt.inclusive):null;e.gt=Rl(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function vo(t,e){e.getFirstInequalityField(),sr(t);const n=t.filters.concat([e]);return new Qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wo(t,e,n){return new Qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ir(t,e){return da(Dt(t),Dt(e))&&t.limitType===e.limitType}function wh(t){return`${ha(Dt(t))}|lt:${t.limitType}`}function bo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gh(s)).join(", ")}]`),nr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>jn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>jn(s)).join(",")),`Target(${n})`}(Dt(t))}; limitType=${t.limitType})`}function rr(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Nn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Pl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Nn(n),s)||n.endAt&&!function(i,r,o){const a=Pl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Nn(n),s))}(t,e)}function Im(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bh(t){return(e,n)=>{let s=!1;for(const i of Nn(t)){const r=Am(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Am(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Un(a,l):L()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function _h(t){return{integerValue:""+t}}function km(t,e){return hm(e)?_h(e):Eh(t,e)}/**
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
 */class or{constructor(){this._=void 0}}function Dm(t,e,n){return t instanceof Oi?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof As?Ch(t,e):t instanceof ks?Sh(t,e):function(s,i){const r=Th(s,i),o=Ml(r)+Ml(s.It);return go(r)&&go(s.It)?_h(o):Eh(s.Tt,o)}(t,e)}function Pm(t,e,n){return t instanceof As?Ch(t,e):t instanceof ks?Sh(t,e):n}function Th(t,e){return t instanceof Ri?go(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Oi extends or{}class As extends or{constructor(e){super(),this.elements=e}}function Ch(t,e){const n=Ih(e);for(const s of t.elements)n.some(i=>wt(i,s))||n.push(s);return{arrayValue:{values:n}}}class ks extends or{constructor(e){super(),this.elements=e}}function Sh(t,e){let n=Ih(e);for(const s of t.elements)n=n.filter(i=>!wt(i,s));return{arrayValue:{values:n}}}class Ri extends or{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ml(t){return ge(t.integerValue||t.doubleValue)}function Ih(t){return ua(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Nm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof As&&s instanceof As||n instanceof ks&&s instanceof ks?Bn(n.elements,s.elements,wt):n instanceof Ri&&s instanceof Ri?wt(n.It,s.It):n instanceof Oi&&s instanceof Oi}(t.transform,e.transform)}class Om{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ar{}function Ah(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ga(t.key,it.none()):new Hs(t.key,t.data,it.none());{const n=t.data,s=Ye.empty();let i=new _e(Me.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Yt(t.key,s,new Ze(i.toArray()),it.none())}}function Rm(t,e,n){t instanceof Hs?function(s,i,r){const o=s.value.clone(),a=Fl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yt?function(s,i,r){if(!pi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Fl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(kh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function us(t,e,n,s){return t instanceof Hs?function(i,r,o,a){if(!pi(i.precondition,r))return o;const l=i.value.clone(),c=Bl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Yt?function(i,r,o,a){if(!pi(i.precondition,r))return o;const l=Bl(i.fieldTransforms,a,r),c=r.data;return c.setAll(kh(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return pi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Lm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Th(s.transform,i||null);r!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,r))}return n||null}function xl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Bn(n,s,(i,r)=>Nm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hs extends ar{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yt extends ar{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function kh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Fl(t,e,n){const s=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Pm(o,a,n[i]))}return s}function Bl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Dm(r,o,e))}return s}class ga extends ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mm extends ar{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,z;function Fm(t){switch(t){default:return L();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Dh(t){if(t===void 0)return kt("GRPC error has no .code"),b.UNKNOWN;switch(t){case pe.OK:return b.OK;case pe.CANCELLED:return b.CANCELLED;case pe.UNKNOWN:return b.UNKNOWN;case pe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case pe.INTERNAL:return b.INTERNAL;case pe.UNAVAILABLE:return b.UNAVAILABLE;case pe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case pe.NOT_FOUND:return b.NOT_FOUND;case pe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case pe.ABORTED:return b.ABORTED;case pe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case pe.DATA_LOSS:return b.DATA_LOSS;default:return L()}}(z=pe||(pe={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){wn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Te(O.comparator);function Pt(){return Bm}const Ph=new Te(O.comparator);function rs(...t){let e=Ph;for(const n of t)e=e.insert(n.key,n);return e}function Nh(t){let e=Ph;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function an(){return hs()}function Oh(){return hs()}function hs(){return new Yn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vm=new Te(O.comparator),Um=new _e(O.comparator);function H(...t){let e=Um;for(const n of t)e=e.add(n);return e}const jm=new _e(J);function Rh(){return jm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lr(x.min(),i,Rh(),Pt(),H())}}class zs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new zs(s,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Lh{constructor(e,n){this.targetId=e,this.Rt=n}}class Mh{constructor(e,n,s=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Vl{constructor(){this.bt=0,this.vt=jl(),this.Pt=Ve.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=H(),n=H(),s=H();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:L()}}),new zs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=jl()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class qm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Pt(),this.Kt=Ul(),this.Gt=new _e(J)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(yo(r))if(s===0){const o=new O(r.path);this.zt(n,o,Le.newNoDocument(o,x.min()))}else se(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&yo(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Le.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=H();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new lr(e,n,this.Gt,this.Ut,s);return this.Ut=Pt(),this.Kt=Ul(),this.Gt=new _e(J),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Vl,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new _e(J),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Vl),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Ul(){return new Te(O.comparator)}function jl(){return new Te(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),zm=(()=>({and:"AND",or:"OR"}))();class Km{constructor(e,n){this.databaseId=e,this.yt=n}}function Li(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Gm(t,e){return Li(t,e.toTimestamp())}function vt(t){return se(!!t),x.fromTimestamp(function(e){const n=qt(e);return new Ee(n.seconds,n.nanos)}(t))}function ma(t,e){return function(n){return new re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fh(t){const e=re.fromString(t);return se(jh(e)),e}function Eo(t,e){return ma(t.databaseId,e.path)}function Vr(t,e){const n=Fh(e);if(n.get(1)!==t.databaseId.projectId)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Bh(n))}function _o(t,e){return ma(t.databaseId,e)}function Wm(t){const e=Fh(t);return e.length===4?re.emptyPath():Bh(e)}function To(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bh(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ql(t,e,n){return{name:Eo(t,e),fields:n.value.mapValue.fields}}function Qm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(se(c===void 0||typeof c=="string"),Ve.fromBase64String(c||"")):(se(c===void 0||c instanceof Uint8Array),Ve.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:Dh(l.code);return new A(c,l.message||"")}(o);n=new Mh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Vr(t,s.document.name),r=vt(s.document.updateTime),o=s.document.createTime?vt(s.document.createTime):x.min(),a=new Ye({mapValue:{fields:s.document.fields}}),l=Le.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new gi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Vr(t,s.document),r=s.readTime?vt(s.readTime):x.min(),o=Le.newNoDocument(i,r),a=s.removedTargetIds||[];n=new gi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Vr(t,s.document),r=s.removedTargetIds||[];n=new gi([],r,i,null)}else{if(!("filter"in e))return L();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new xm(i),o=s.targetId;n=new Lh(o,r)}}return n}function Ym(t,e){let n;if(e instanceof Hs)n={update:ql(t,e.key,e.value)};else if(e instanceof ga)n={delete:Eo(t,e.key)};else if(e instanceof Yt)n={update:ql(t,e.key,e.data),updateMask:ry(e.fieldMask)};else{if(!(e instanceof Mm))return L();n={verify:Eo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Oi)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof As)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ks)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ri)return{fieldPath:r.field.canonicalString(),increment:o.It};throw L()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:L()}(t,e.precondition)),n}function Xm(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?vt(s.updateTime):vt(i);return r.isEqual(x.min())&&(r=vt(i)),new Om(r,s.transformResults||[])}(n,e))):[]}function Jm(t,e){return{documents:[_o(t,e.path)]}}function Zm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=_o(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_o(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Uh(ft.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:In(u.field),direction:ny(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||nr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ey(t){let e=Wm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){se(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Vh(u);return h instanceof ft&&fh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Pn(An(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,nr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ni(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ni(d,h)}(n.endAt)),Sm(e,i,o,r,a,"F",l,c)}function ty(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=An(e.unaryFilter.field);return me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=An(e.unaryFilter.field);return me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=An(e.unaryFilter.field);return me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=An(e.unaryFilter.field);return me.create(r,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(e){return me.create(An(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ft.create(e.compositeFilter.filters.map(n=>Vh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(t):L()}function ny(t){return $m[t]}function sy(t){return Hm[t]}function iy(t){return zm[t]}function In(t){return{fieldPath:t.canonicalString()}}function An(t){return Me.fromServerFormat(t.fieldPath)}function Uh(t){return t instanceof me?function(e){if(e.op==="=="){if(Dl(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NAN"}};if(kl(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Dl(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NAN"}};if(kl(e.value))return{unaryFilter:{field:In(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(e.field),op:sy(e.op),value:e.value}}}(t):t instanceof ft?function(e){const n=e.getFilters().map(s=>Uh(s));return n.length===1?n[0]:{compositeFilter:{op:iy(e.op),filters:n}}}(t):L()}function ry(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Rm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=us(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=us(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Oh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ah(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(n,s)=>xl(n,s))&&Bn(this.baseMutations,e.baseMutations,(n,s)=>xl(n,s))}}class ya{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){se(e.mutations.length===s.length);let i=Vm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ya(e,n,s,i)}}/**
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
 */class ay{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cn{constructor(e,n,s,i,r=x.min(),o=x.min(),a=Ve.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.oe=e}}function cy(t){const e=ey({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wo(e,e.limit,"L"):e}/**
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
 */class uy{constructor(){this.Ze=new hy}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(jt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(jt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class hy{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new _e(re.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new _e(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new qn(0)}static Sn(){return new qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.changes=new Yn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fy{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&us(s.mutation,i,Ze.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,H()).next(()=>s))}getLocalViewOfDocuments(e,n,s=H()){const i=an();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=rs();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=an();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,H()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Pt();const o=hs(),a=hs();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Yt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),us(u.mutation,c,u.mutation.getFieldMask(),Ee.now())):o.set(c.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new fy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=hs();let i=new Te((o,a)=>o-a),r=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ze.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Oh();u.forEach(d=>{if(!r.has(d)){const f=Ah(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(an());let a=-1,l=r;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,H())).next(u=>({batchId:a,changes:Nh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let i=rs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=rs();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Qn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Le.newInvalidDocument(c)))});let o=rs();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&us(c.mutation,l,Ze.empty(),Ee.now()),rr(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:vt(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:cy(s.bundledQuery),readTime:vt(s.readTime)}}(n)),E.resolve()}}/**
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
 */class my{constructor(){this.overlays=new Te(O.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=an();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=an(),r=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Te((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=an(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=an(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ay(n,s));let r=this.ss.get(n);r===void 0&&(r=H(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.rs=new _e(Ce.os),this.us=new _e(Ce.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ce(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ce(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new O(new re([])),s=new Ce(n,e),i=new Ce(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new O(new re([])),s=new Ce(n,e),i=new Ce(n,e+1);let r=H();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ce(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ce{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return O.comparator(e.key,n.key)||J(e.gs,n.gs)}static cs(e,n){return J(e.gs,n.gs)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new _e(Ce.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oy(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ce(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ce(n,0),i=new Ce(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _e(J);return n.forEach(i=>{const r=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const o=new Ce(new O(r),0);let a=new _e(J);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new Ce(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ce(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.Rs=e,this.docs=new Te(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let s=Pt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Le.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Pt();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||am(om(u),s)<=0||(i.has(u.key)||rr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){L()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new wy(this)}getSize(e){return E.resolve(this.size)}}class wy extends dy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.persistence=e,this.vs=new Yn(n=>ha(n),da),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new va,this.targetCount=0,this.Ss=qn.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new qn(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ca(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new by(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new vy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new ly(n),this.Os=new gy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new my,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new yy(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const i=new _y(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class _y extends cm{constructor(e){super(),this.currentSequenceNumber=e}}class wa{constructor(e){this.persistence=e,this.Bs=new va,this.Ls=null}static qs(e){return new wa(e)}get Us(){if(this.Ls)return this.Ls;throw L()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=H(),i=H();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ba(e,n.fromCache,s,i)}}/**
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
 */class Ty{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Ll(n))return E.resolve(null);let s=Dt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wo(n,null,"F"),s=Dt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=H(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,wo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Ll(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(Cl()<=X.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bo(n)),this.qi(e,o,n,rm(i,-1)))})}Bi(e,n){let s=new _e(bh(e));return n.forEach((i,r)=>{rr(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return Cl()<=X.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",bo(n)),this.Oi.getDocumentsMatchingQuery(e,n,jt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Te(J),this.Gi=new Yn(r=>ha(r),da),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new py(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Sy(t,e,n,s){return new Cy(t,e,n,s)}async function qh(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=H();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Iy(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(w=>{const m=l.docVersions.get(f);se(m!==null),w.version.compareTo(m)<0&&(u.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),c.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function $h(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Ay(t,e){const n=F(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Ve.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(w,m,y){return w.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(d,f,u)&&a.push(n.Ns.updateTargetData(r,f))});let l=Pt(),c=H();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ky(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function ky(t,e,n){let s=H(),i=H();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Pt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(x.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Dy(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Py(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new cn(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function Co(t,e,n){const s=F(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$s(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function $l(t,e,n){const s=F(t);let i=x.min(),r=H();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=F(a),h=u.Gi.get(c);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Dt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:H())).next(a=>(Ny(s,Im(e),a),{documents:a,Yi:r})))}function Ny(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Hl{constructor(){this.activeTargetIds=Rh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oy{constructor(){this.Ur=new Hl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Hl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ry{Gr(e){}shutdown(){}}/**
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
 */class zl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);D("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw fo("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Ly[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Qg;a.setWithCredentials(!0),a.listenOnce(Kg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Br.NO_ERROR:const c=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Br.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new A(b.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const u=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(w){const m=w.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(m)>=0?m:b.UNKNOWN}(d.status);o(new A(f,d.message))}else o(new A(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new A(b.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Hg(),o=zg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Wg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new My({Yr:w=>{h?D("Connection","Not sending because WebChannel is closed:",w):(u||(D("Connection","Opening WebChannel transport."),c.open(),u=!0),D("Connection","WebChannel sending:",w),c.send(w))},Zr:()=>c.close()}),f=(w,m,y)=>{w.listen(m,I=>{try{y(I)}catch(_){setTimeout(()=>{throw _},0)}})};return f(c,oi.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),f(c,oi.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.oo())}),f(c,oi.EventType.ERROR,w=>{h||(h=!0,fo("Connection","WebChannel transport errored:",w),d.oo(new A(b.UNAVAILABLE,"The operation could not be completed")))}),f(c,oi.EventType.MESSAGE,w=>{var m;if(!h){const y=w.data[0];se(!!y);const I=y,_=I.error||((m=I[0])===null||m===void 0?void 0:m.error);if(_){D("Connection","WebChannel received error:",_);const P=_.status;let N=function(le){const ee=pe[le];if(ee!==void 0)return Dh(ee)}(P),R=_.message;N===void 0&&(N=b.INTERNAL,R="Unknown error status: "+P+" with message "+_.message),h=!0,d.oo(new A(N,R)),c.close()}else D("Connection","WebChannel received:",y),d.uo(y)}}),f(o,Gg.STAT_EVENT,w=>{w.stat===_l.PROXY?D("Connection","Detected buffering proxy"):w.stat===_l.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Ur(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){return new Km(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Hh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(kt(n.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new A(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fy extends zh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Qm(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?vt(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=To(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=yo(a)?{documents:Jm(i,a)}:{query:Zm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=xh(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Li(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ty(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=To(this.Tt),n.removeTarget=e,this.qo(n)}}class By extends zh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Xm(e.writeResults,e.commitTime),s=vt(e.commitTime);return this.listener.eu(s,n)}return se(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=To(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ym(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(b.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new A(b.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Uy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(kt(n),this.cu=!1):D("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{bn(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.mu.add(4),await Ks(l),l.pu.set("Unknown"),l.mu.delete(4),await ur(l)}(this))})}),this.pu=new Uy(s,i)}}async function ur(t){if(bn(t))for(const e of t.gu)await e(!0)}async function Ks(t){for(const e of t.gu)await e(!1)}function Kh(t,e){const n=F(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ta(n)?_a(n):Xn(n).Mo()&&Ea(n,e))}function Gh(t,e){const n=F(t),s=Xn(n);n.wu.delete(e),s.Mo()&&Wh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():bn(n)&&n.pu.set("Unknown"))}function Ea(t,e){t.Iu.Ft(e.targetId),Xn(t).Jo(e)}function Wh(t,e){t.Iu.Ft(e),Xn(t).Yo(e)}function _a(t){t.Iu=new qm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Xn(t).start(),t.pu.au()}function Ta(t){return bn(t)&&!Xn(t).Oo()&&t.wu.size>0}function bn(t){return F(t).mu.size===0}function Qh(t){t.Iu=void 0}async function qy(t){t.wu.forEach((e,n)=>{Ea(t,e)})}async function $y(t,e){Qh(t),Ta(t)?(t.pu.fu(e),_a(t)):t.pu.set("Unknown")}async function Hy(t,e,n){if(t.pu.set("Online"),e instanceof Mh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mi(t,s)}else if(e instanceof gi?t.Iu.Qt(e):e instanceof Lh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await $h(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ve.EMPTY_BYTE_STRING,l.snapshotVersion)),Wh(i,a);const c=new cn(l.target,a,1,l.sequenceNumber);Ea(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await Mi(t,s)}}async function Mi(t,e,n){if(!$s(e))throw e;t.mu.add(1),await Ks(t),t.pu.set("Offline"),n||(n=()=>$h(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await ur(t)})}function Yh(t,e){return e().catch(n=>Mi(t,n,e))}async function hr(t){const e=F(t),n=$t(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;zy(e);)try{const i=await Dy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Ky(e,i)}catch(i){await Mi(e,i)}Xh(e)&&Jh(e)}function zy(t){return bn(t)&&t._u.length<10}function Ky(t,e){t._u.push(e);const n=$t(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Xh(t){return bn(t)&&!$t(t).Oo()&&t._u.length>0}function Jh(t){$t(t).start()}async function Gy(t){$t(t).su()}async function Wy(t){const e=$t(t);for(const n of t._u)e.tu(n.mutations)}async function Qy(t,e,n){const s=t._u.shift(),i=ya.from(s,e,n);await Yh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hr(t)}async function Yy(t,e){e&&$t(t).Xo&&await async function(n,s){if(i=s.code,Fm(i)&&i!==b.ABORTED){const r=n._u.shift();$t(n).$o(),await Yh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await hr(n)}var i}(t,e),Xh(t)&&Jh(t)}async function Kl(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=bn(n);n.mu.add(3),await Ks(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await ur(n)}async function Xy(t,e){const n=F(t);e?(n.mu.delete(2),await ur(n)):e||(n.mu.add(2),await Ks(n),n.pu.set("Unknown"))}function Xn(t){return t.Tu||(t.Tu=function(e,n,s){const i=F(e);return i.ru(),new Fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:qy.bind(null,t),no:$y.bind(null,t),Ho:Hy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ta(t)?_a(t):t.pu.set("Unknown")):(await t.Tu.stop(),Qh(t))})),t.Tu}function $t(t){return t.Eu||(t.Eu=function(e,n,s){const i=F(e);return i.ru(),new By(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Gy.bind(null,t),no:Yy.bind(null,t),nu:Wy.bind(null,t),eu:Qy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await hr(t)):(await t.Eu.stop(),t._u.length>0&&(D("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ca(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sa(t,e){if(kt("AsyncQueue",`${e}: ${t}`),$s(t))return new A(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=rs(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new On(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new On;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Au=new Te(O.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):L():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class $n{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,n,On.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ir(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.bu=void 0,this.listeners=[]}}class Zy{constructor(){this.queries=new Yn(e=>wh(e),ir),this.onlineState="Unknown",this.vu=new Set}}async function Zh(t,e){const n=F(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Jy),i)try{r.bu=await n.onListen(s)}catch(o){const a=Sa(o,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Ia(n)}async function ed(t,e){const n=F(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ev(t,e){const n=F(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Ia(n)}function tv(t,e,n){const s=F(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ia(t){t.vu.forEach(e=>{e.next()})}class td{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.key=e}}class sd{constructor(e){this.key=e}}class nv{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=H(),this.mutatedKeys=H(),this.ju=bh(e),this.zu=new On(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Gl,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=rr(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?w!==m&&(s.track({type:3,doc:f}),y=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.ju(f,l)>0||c&&this.ju(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const f=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return f(h)-f(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new $n(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Gl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=H(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new sd(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new nd(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=H();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return $n.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class sv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iv{constructor(e){this.key=e,this.ic=!1}}class rv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Yn(a=>wh(a),ir),this.uc=new Map,this.cc=new Set,this.ac=new Te(O.comparator),this.hc=new Map,this.lc=new va,this.fc={},this.dc=new Map,this._c=qn.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function ov(t,e){const n=mv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Py(n.localStore,Dt(e));n.isPrimaryClient&&Kh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await av(n,e,s,a==="current",o.resumeToken)}return i}async function av(t,e,n,s,i){t.mc=(h,d,f)=>async function(w,m,y,I){let _=m.view.Hu(y);_.Li&&(_=await $l(w.localStore,m.query,!1).then(({documents:R})=>m.view.Hu(R,_)));const P=I&&I.targetChanges.get(m.targetId),N=m.view.applyChanges(_,w.isPrimaryClient,P);return Ql(w,m.targetId,N.tc),N.snapshot}(t,h,d,f);const r=await $l(t.localStore,e,!0),o=new nv(e,r.Yi),a=o.Hu(r.documents),l=zs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Ql(t,n,c.tc);const u=new sv(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function lv(t,e){const n=F(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!ir(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Co(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Gh(n.remoteStore,s.targetId),So(n,s.targetId)}).catch(qs)):(So(n,s.targetId),await Co(n.localStore,s.targetId,!0))}async function cv(t,e,n){const s=yv(t);try{const i=await function(r,o){const a=F(r),l=Ee.now(),c=o.reduce((d,f)=>d.add(f.key),H());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Pt(),w=H();return a.ji.getEntries(d,c).next(m=>{f=m,f.forEach((y,I)=>{I.isValidDocument()||(w=w.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const y=[];for(const I of o){const _=Lm(I,u.get(I.key).overlayedDocument);_!=null&&y.push(new Yt(I.key,_,yh(_.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,y,o)}).next(m=>{h=m;const y=m.applyToLocalDocumentSet(u,w);return a.documentOverlayCache.saveOverlays(d,m.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Nh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new Te(J)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Gs(s,i.changes),await hr(s.remoteStore)}catch(i){const r=Sa(i,"Failed to persist write");n.reject(r)}}async function id(t,e){const n=F(t);try{const s=await Ay(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?se(o.ic):i.removedDocuments.size>0&&(se(o.ic),o.ic=!1))}),await Gs(n,s,e)}catch(s){await qs(s)}}function Wl(t,e,n){const s=F(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=F(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&Ia(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uv(t,e,n){const s=F(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new Te(O.comparator);o=o.insert(r,Le.newNoDocument(r,x.min()));const a=H().add(r),l=new lr(x.min(),new Map,new _e(J),o,a);await id(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),Aa(s)}else await Co(s.localStore,e,!1).then(()=>So(s,e,n)).catch(qs)}async function hv(t,e){const n=F(t),s=e.batch.batchId;try{const i=await Iy(n.localStore,e);od(n,s,null),rd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Gs(n,i)}catch(i){await qs(i)}}async function dv(t,e,n){const s=F(t);try{const i=await function(r,o){const a=F(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(se(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);od(s,e,n),rd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Gs(s,i)}catch(i){await qs(i)}}function rd(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function od(t,e,n){const s=F(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function So(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||ad(t,s)})}function ad(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Gh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Aa(t))}function Ql(t,e,n){for(const s of n)s instanceof nd?(t.lc.addReference(s.key,e),fv(t,s)):s instanceof sd?(D("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||ad(t,s.key)):L()}function fv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.cc.add(s),Aa(t))}function Aa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new O(re.fromString(e)),s=t._c.next();t.hc.set(s,new iv(n)),t.ac=t.ac.insert(n,s),Kh(t.remoteStore,new cn(Dt(fa(n.path)),s,2,ca.at))}}async function Gs(t,e,n){const s=F(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=ba.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=F(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,h=>E.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!$s(u))throw u;D("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),f=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(h,w)}}}(s.localStore,r))}async function pv(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await qh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new A(b.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gs(n,s.Wi)}}function gv(t,e){const n=F(t),s=n.hc.get(e);if(s&&s.ic)return H().add(s.key);{let i=H();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function mv(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=id.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uv.bind(null,e),e.rc.Ho=ev.bind(null,e.eventManager),e.rc.gc=tv.bind(null,e.eventManager),e}function yv(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dv.bind(null,e),e}class vv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=cr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Sy(this.persistence,new Ty,e.initialUser,this.Tt)}Tc(e){return new Ey(wa.qs,this.Tt)}Ic(e){return new Oy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await Xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zy}createDatastore(e){const n=cr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new xy(i));var i;return function(r,o,a,l){return new Vy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Wl(this.syncEngine,a,0),o=zl.C()?new zl:new Ry,new jy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new rv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);D("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ks(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ld{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Re.UNAUTHENTICATED,this.clientId=ah.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sa(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await qh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _v(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tv(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Kl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Kl(e.remoteStore,r)),t.onlineComponents=e}async function Tv(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await Ev(t,new vv)),t.offlineComponents}async function cd(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await _v(t,new wv)),t.onlineComponents}function Cv(t){return cd(t).then(e=>e.syncEngine)}async function Io(t){const e=await cd(t),n=e.eventManager;return n.onListen=ov.bind(null,e.syncEngine),n.onUnlisten=lv.bind(null,e.syncEngine),n}function Sv(t,e,n={}){const s=new xt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new ld({next:h=>{r.enqueueAndForget(()=>ed(i,u)),h.fromCache&&a.source==="server"?l.reject(new A(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new td(o,c,{includeMetadataChanges:!0,Ou:!0});return Zh(i,u)}(await Io(t),t.asyncQueue,e,n,s)),s.promise}const Yl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e,n){if(!n)throw new A(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Iv(t,e,n,s){if(e===!0&&s===!0)throw new A(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xl(t){if(!O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jl(t){if(O.isDocumentKey(t))throw new A(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dr(t);throw new A(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new A(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Iv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yg;switch(n.type){case"gapi":const s=n.client;return new em(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yl.get(e);n&&(D("ComponentProvider","Removing Datastore"),Yl.delete(e),n.terminate())}(this),Promise.resolve()}}function Av(t,e,n,s={}){var i;const r=(t=rt(t,fr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&fo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Re.MOCK_USER;else{o=Gc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new A(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Re(l)}t._authCredentials=new Xg(new oh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Xt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xt(this.firestore,e,this._query)}}class Ft extends Xt{constructor(e,n,s){super(e,n,fa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new O(e))}withConverter(e){return new Ft(this.firestore,e,this._path)}}function st(t,e,...n){if(t=dt(t),ud("collection","path",e),t instanceof fr){const s=re.fromString(e,...n);return Jl(s),new Ft(t,null,s)}{if(!(t instanceof Ge||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Jl(s),new Ft(t.firestore,null,s)}}function St(t,e,...n){if(t=dt(t),arguments.length===1&&(e=ah.R()),ud("doc","path",e),t instanceof fr){const s=re.fromString(e,...n);return Xl(s),new Ge(t,null,new O(s))}{if(!(t instanceof Ge||t instanceof Ft))throw new A(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(re.fromString(e,...n));return Xl(s),new Ge(t.firestore,t instanceof Ft?t.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Hh(this,"async_queue_retry"),this.Hc=()=>{const n=Ur();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Ur();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Ur();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new xt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!$s(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw kt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Ca.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&L()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function ec(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ht extends fr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new kv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hd(this),this._firestoreClient.terminate()}}function Dv(t,e){const n=typeof t=="object"?t:tu(),s=typeof t=="string"?t:e||"(default)",i=Jc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Kc("firestore");r&&Av(i,...r)}return i}function ka(t){return t._firestoreClient||hd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new um(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ve.fromBase64String(e))}catch(n){throw new A(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Pv=/^__.*__$/;class Nv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hs(e,this.data,n,this.fieldTransforms)}}class dd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Yt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Na{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return xi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(fd(this.ra)&&Pv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Ov{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||cr(e)}wa(e,n,s,i=!1){return new Na({ra:e,methodName:n,_a:s,path:Me.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function gr(t){const e=t._freezeSettings(),n=cr(t._databaseId);return new Ov(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Oa("Data must be an object, but it was:",o,s);const a=gd(s,o);let l,c;if(r.merge)l=new Ze(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ao(e,h,n);if(!o.contains(d))throw new A(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yd(u,d)||u.push(d)}l=new Ze(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Nv(new Ye(a),l,c)}class mr extends Da{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mr}}function Rv(t,e,n,s){const i=t.wa(1,e,n);Oa("Data must be an object, but it was:",i,s);const r=[],o=Ye.empty();wn(s,(l,c)=>{const u=Ra(e,l,n);c=dt(c);const h=i.ha(u);if(c instanceof mr)r.push(u);else{const d=Ws(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ze(r);return new dd(o,a,i.fieldTransforms)}function Lv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Ao(e,s,n)],l=[i];if(r.length%2!=0)throw new A(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ao(e,r[d])),l.push(r[d+1]);const c=[],u=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!yd(c,a[d])){const f=a[d];let w=l[d];w=dt(w);const m=o.ha(f);if(w instanceof mr)c.push(f);else{const y=Ws(w,m);y!=null&&(c.push(f),u.set(f,y))}}const h=new Ze(c);return new dd(u,h,o.fieldTransforms)}function Mv(t,e,n,s=!1){return Ws(n,t.wa(s?4:3,e))}function Ws(t,e){if(md(t=dt(t)))return Oa("Unsupported field value:",e,t),gd(t,e);if(t instanceof Da)return function(n,s){if(!fd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Ws(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return km(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ee.fromDate(n);return{timestampValue:Li(s.Tt,i)}}if(n instanceof Ee){const i=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Li(s.Tt,i)}}if(n instanceof Pa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hn)return{bytesValue:xh(s.Tt,n._byteString)};if(n instanceof Ge){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ma(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${dr(n)}`)}(t,e)}function gd(t,e){const n={};return lh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wn(t,(s,i)=>{const r=Ws(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function md(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Pa||t instanceof Hn||t instanceof Ge||t instanceof Da)}function Oa(t,e,n){if(!md(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=dr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Ao(t,e,n){if((e=dt(e))instanceof pr)return e._internalPath;if(typeof e=="string")return Ra(t,e);throw xi("Field path arguments must be of type string or ",t,!1,void 0,n)}const xv=new RegExp("[~\\*/\\[\\]]");function Ra(t,e,n){if(e.search(xv)>=0)throw xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pr(...e.split("."))._internalPath}catch{throw xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new A(b.INVALID_ARGUMENT,a+t+l)}function yd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fv extends vd{data(){return super.data()}}function yr(t,e){return typeof e=="string"?Ra(t,e):e instanceof pr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class La{}class bd extends La{}function ds(t,e,...n){let s=[];e instanceof La&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ma).length,o=i.filter(a=>a instanceof vr).length;if(r>1||r>0&&o>0)throw new A(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class vr extends bd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new vr(e,n,s)}_apply(e){const n=this._parse(e);return Ed(e._query,n),new Xt(e.firestore,e.converter,vo(e._query,n))}_parse(e){const n=gr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new A(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){nc(u,c);const d=[];for(const f of u)d.push(tc(a,i,f));h={arrayValue:{values:d}}}else h=tc(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||nc(u,c),h=Mv(o,r,u,c==="in"||c==="not-in");return me.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ko(t,e,n){const s=e,i=yr("where",t);return vr._create(i,s,n)}class Ma extends La{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ma(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Ed(r,a),r=vo(r,a)}(e._query,n),new Xt(e.firestore,e.converter,vo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xa extends bd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new A(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Pn(i,r);return function(a,l){if(pa(a)===null){const c=sr(a);c!==null&&_d(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Xt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Qn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function jr(t,e="asc"){const n=e,s=yr("orderBy",t);return xa._create(s,n)}function tc(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new A(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vh(e)&&n.indexOf("/")!==-1)throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(re.fromString(n));if(!O.isDocumentKey(s))throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Al(t,new O(s))}if(n instanceof Ge)return Al(t,n._key);throw new A(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dr(n)}.`)}function nc(t,e){if(!Array.isArray(t)||t.length===0)throw new A(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ed(t,e){if(e.isInequality()){const s=sr(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new A(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=pa(t);r!==null&&_d(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _d(t,e,n){if(!n.isEqual(e))throw new A(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Bv{convertValue(e,n="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){const s={};return wn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Pa(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=uh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const n=qt(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=re.fromString(e);se(jh(s));const i=new Cs(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(n)||kt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cd extends vd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(yr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class mi extends Cd{data(e={}){return super.data(e)}}class Sd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new os(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new mi(this._firestore,this._userDataWriter,s.key,s,new os(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new mi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new os(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new mi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new os(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Vv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class Fa extends Bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Id(t){t=rt(t,Xt);const e=rt(t.firestore,Ht),n=ka(e),s=new Fa(e);return wd(t._query),Sv(n,t._query).then(i=>new Sd(e,s,t,i))}function qr(t,e,n){t=rt(t,Ge);const s=rt(t.firestore,Ht),i=Td(t.converter,e,n);return wr(s,[pd(gr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,it.none())])}function Ba(t,e,n,...s){t=rt(t,Ge);const i=rt(t.firestore,Ht),r=gr(i);let o;return o=typeof(e=dt(e))=="string"||e instanceof pr?Lv(r,"updateDoc",t._key,e,n,s):Rv(r,"updateDoc",t._key,e),wr(i,[o.toMutation(t._key,it.exists(!0))])}function Do(t){return wr(rt(t.firestore,Ht),[new ga(t._key,it.none())])}function Ad(t,e){const n=rt(t.firestore,Ht),s=St(t),i=Td(t.converter,e);return wr(n,[pd(gr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,it.exists(!1))]).then(()=>s)}function $r(t,...e){var n,s,i;t=dt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ec(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ec(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ge)c=rt(t.firestore,Ht),u=fa(t._key.path),l={next:h=>{e[o]&&e[o](Uv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rt(t,Xt);c=rt(h.firestore,Ht),u=h._query;const d=new Fa(c);l={next:f=>{e[o]&&e[o](new Sd(c,d,h,f))},error:e[o+1],complete:e[o+2]},wd(t._query)}return function(h,d,f,w){const m=new ld(w),y=new td(d,m,f);return h.asyncQueue.enqueueAndForget(async()=>Zh(await Io(h),y)),()=>{m.Pc(),h.asyncQueue.enqueueAndForget(async()=>ed(await Io(h),y))}}(ka(c),u,a,l)}function wr(t,e){return function(n,s){const i=new xt;return n.asyncQueue.enqueueAndForget(async()=>cv(await Cv(n),s,i)),i.promise}(ka(t),e)}function Uv(t,e,n){const s=n.docs.get(e._key),i=new Fa(t);return new Cd(t,i,e._key,s,new os(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Wn=n})(Zc),ms(new xn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Ht(new Jg(n.getProvider("auth-internal")),new nm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(Tl,"3.8.4",t),Mt(Tl,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="firebasestorage.googleapis.com",jv="storageBucket",qv=2*60*1e3,$v=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends yn{constructor(e,n,s=0){super(Hr(e),`Firebase Storage: ${n} (${Hr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Hr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var bt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(bt||(bt={}));function Hr(t){return"storage/"+t}function Hv(){const t="An unknown error occurred, please check the error payload for server response.";return new _t(bt.UNKNOWN,t)}function zv(){return new _t(bt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Kv(){return new _t(bt.CANCELED,"User canceled the upload/download.")}function Gv(t){return new _t(bt.INVALID_URL,"Invalid URL '"+t+"'.")}function Wv(t){return new _t(bt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sc(t){return new _t(bt.INVALID_ARGUMENT,t)}function Dd(){return new _t(bt.APP_DELETED,"The Firebase app was deleted.")}function Qv(t){return new _t(bt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ut.makeFromUrl(e,n)}catch{return new ut(e,"")}if(s.path==="")return s;throw Wv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},m=n===kd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",I=new RegExp(`^https?://${m}/${i}/${y}`,"i"),P=[{regex:a,indices:l,postModify:r},{regex:f,indices:w,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<P.length;N++){const R=P[N],le=R.regex.exec(e);if(le){const ee=le[R.indices.bucket];let fe=le[R.indices.path];fe||(fe=""),s=new ut(ee,fe),R.postModify(s);break}}if(s==null)throw Gv(e);return s}}class Yv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...I){if(c){d();return}if(y){d(),u.call(null,y,...I);return}if(l()||o){d(),u.call(null,y,...I);return}s<64&&(s*=2);let P;a===1?(a=2,P=0):P=(s+Math.random())*1e3,h(P)}let w=!1;function m(y){w||(w=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function Jv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){return t!==void 0}function ic(t,e,n,s){if(s<e)throw sc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw sc(`Invalid value for '${t}'. Expected ${n} or less.`)}function ew(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Fi||(Fi={}));/**
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
 */function tw(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,w)=>{this.resolve_=f,this.reject_=w,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ci(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Fi.NO_ERROR,l=r.getStatus();if(!a||tw(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Fi.ABORT;s(!1,new ci(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ci(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Zv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Hv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Dd():Kv();o(l)}else{const l=zv();o(l)}};this.canceled_?n(!1,new ci(!1,null,!0)):this.backoffId_=Xv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ci{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function sw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ow(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aw(t,e,n,s,i,r,o=!0){const a=ew(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return rw(c,e),sw(c,n),iw(c,r),ow(c,s),new nw(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Bi{constructor(e,n){this._service=e,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bi(e,n)}get root(){const e=new ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cw(this._location.path)}get storage(){return this._service}get parent(){const e=lw(this._location.path);if(e===null)return null;const n=new ut(this._location.bucket,e);return new Bi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qv(e)}}function rc(t,e){const n=e==null?void 0:e[jv];return n==null?null:ut.makeFromBucketSpec(n,t)}function uw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Gc(i,t.app.options.projectId))}class hw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=kd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qv,this._maxUploadRetryTime=$v,this._requests=new Set,i!=null?this._bucket=ut.makeFromBucketSpec(i,this._host):this._bucket=rc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,e):this._bucket=rc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ic("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Yv(Dd());{const o=aw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const oc="@firebase/storage",ac="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="storage";function dw(t=tu(),e){t=dt(t);const s=Jc(t,Pd).getImmediate({identifier:e}),i=Kc("storage");return i&&fw(s,...i),s}function fw(t,e,n,s={}){uw(t,e,n,s)}function pw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hw(n,s,i,e,Zc)}function gw(){ms(new xn(Pd,pw,"PUBLIC").setMultipleInstances(!0)),Mt(oc,ac,""),Mt(oc,ac,"esm2017")}gw();const mw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Nd=eu(mw);dw(Nd);const De=Dv(Nd);var yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Po={},vw={get exports(){return Po},set exports(t){Po=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(yw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(y){y.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(y){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(y){y.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(y){y.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),f=i("y",this.options),w=this.options.position=="left"?d:"-"+d,m=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+w+","+m+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,w=window.innerWidth>0?window.innerWidth:screen.width;w<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(vw);const Rn=Po,Od="SweetAlert2:",ww=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Va=t=>t.charAt(0).toUpperCase()+t.slice(1),nt=t=>Array.prototype.slice.call(t),Xe=t=>{console.warn(`${Od} ${typeof t=="object"?t.join(" "):t}`)},En=t=>{console.error(`${Od} ${t}`)},lc=[],bw=t=>{lc.includes(t)||(lc.push(t),Xe(t))},Ew=(t,e)=>{bw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},br=t=>typeof t=="function"?t():t,Ua=t=>t&&typeof t.toPromise=="function",Qs=t=>Ua(t)?t.toPromise():Promise.resolve(t),ja=t=>t&&Promise.resolve(t)===t,Ln={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_w=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Tw={},Cw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Rd=t=>Object.prototype.hasOwnProperty.call(Ln,t),Ld=t=>_w.indexOf(t)!==-1,No=t=>Tw[t],Sw=t=>{Rd(t)||Xe(`Unknown parameter "${t}"`)},Iw=t=>{Cw.includes(t)&&Xe(`The parameter "${t}" is incompatible with toasts`)},Aw=t=>{No(t)&&Ew(t,No(t))},kw=t=>{!t.backdrop&&t.allowOutsideClick&&Xe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Sw(e),t.toast&&Iw(e),Aw(e)},Dw="swal2-",Md=t=>{const e={};for(const n in t)e[t[n]]=Dw+t[n];return e},g=Md(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),fs=Md(["success","warning","info","question","error"]),Ue=()=>document.body.querySelector(`.${g.container}`),Ys=t=>{const e=Ue();return e?e.querySelector(t):null},at=t=>Ys(`.${t}`),Z=()=>at(g.popup),Xs=()=>at(g.icon),xd=()=>at(g.title),Vi=()=>at(g["html-container"]),Fd=()=>at(g.image),Bd=()=>at(g["progress-steps"]),Er=()=>at(g["validation-message"]),pt=()=>Ys(`.${g.actions} .${g.confirm}`),zt=()=>Ys(`.${g.actions} .${g.deny}`),Pw=()=>at(g["input-label"]),Jn=()=>Ys(`.${g.loader}`),gn=()=>Ys(`.${g.actions} .${g.cancel}`),Js=()=>at(g.actions),Vd=()=>at(g.footer),_r=()=>at(g["timer-progress-bar"]),qa=()=>at(g.close),Nw=`
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
`,$a=()=>{const t=nt(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=nt(Z().querySelectorAll(Nw)).filter(n=>n.getAttribute("tabindex")!=="-1");return ww(t.concat(e)).filter(n=>et(n))},Ha=()=>It(document.body,g.shown)&&!It(document.body,g["toast-shown"])&&!It(document.body,g["no-backdrop"]),Tr=()=>Z()&&It(Z(),g.toast),Ow=()=>Z().hasAttribute("data-loading"),Mn={previousBodyPadding:null},xe=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");nt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),nt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},It=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Rw=(t,e)=>{nt(t.classList).forEach(n=>{!Object.values(g).includes(n)&&!Object.values(fs).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},ot=(t,e,n)=>{if(Rw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Xe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);K(t,e.customClass[n])}},za=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${g.popup} > .${g[e]}`);case"checkbox":return t.querySelector(`.${g.popup} > .${g.checkbox} input`);case"radio":return t.querySelector(`.${g.popup} > .${g.radio} input:checked`)||t.querySelector(`.${g.popup} > .${g.radio} input:first-child`);case"range":return t.querySelector(`.${g.popup} > .${g.range} input`);default:return t.querySelector(`.${g.popup} > .${g.input}`)}},Ud=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},jd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},K=(t,e)=>{jd(t,e,!0)},Et=(t,e)=>{jd(t,e,!1)},Ot=(t,e)=>{const n=nt(t.childNodes);for(let s=0;s<n.length;s++)if(It(n[s],e))return n[s]},ps=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ne=(t,e="flex")=>{t.style.display=e},je=t=>{t.style.display="none"},cc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Cr=(t,e,n)=>{e?Ne(t,n):je(t)},et=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Lw=()=>!et(pt())&&!et(zt())&&!et(gn()),uc=t=>t.scrollHeight>t.clientHeight,qd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ka=(t,e=!1)=>{const n=_r();et(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Mw=()=>{const t=_r(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},$d=()=>typeof window>"u"||typeof document>"u",xw=100,B={},Fw=()=>{B.previousActiveElement&&B.previousActiveElement.focus?(B.previousActiveElement.focus(),B.previousActiveElement=null):document.body&&document.body.focus()},Bw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;B.restoreFocusTimeout=setTimeout(()=>{Fw(),e()},xw),window.scrollTo(n,s)}),Vw=`
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
`.replace(/(^|\n)\s*/g,""),Uw=()=>{const t=Ue();return t?(t.remove(),Et([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},en=()=>{B.currentInstance.resetValidationMessage()},jw=()=>{const t=Z(),e=Ot(t,g.input),n=Ot(t,g.file),s=t.querySelector(`.${g.range} input`),i=t.querySelector(`.${g.range} output`),r=Ot(t,g.select),o=t.querySelector(`.${g.checkbox} input`),a=Ot(t,g.textarea);e.oninput=en,n.onchange=en,r.onchange=en,o.onchange=en,a.oninput=en,s.oninput=()=>{en(),i.value=s.value},s.onchange=()=>{en(),s.nextSibling.value=s.value}},qw=t=>typeof t=="string"?document.querySelector(t):t,$w=t=>{const e=Z();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Hw=t=>{window.getComputedStyle(t).direction==="rtl"&&K(Ue(),g.rtl)},zw=t=>{const e=Uw();if($d()){En("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=g.container,e&&K(n,g["no-transition"]),xe(n,Vw);const s=qw(t.target);s.appendChild(n),$w(t),Hw(s),jw()},Ga=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Kw(t,e):t&&xe(e,t)},Kw=(t,e)=>{t.jquery?Gw(e,t):xe(e,t.toString())},Gw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ds=(()=>{if($d())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Ww=()=>{const t=document.createElement("div");t.className=g["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Qw=(t,e)=>{const n=Js(),s=Jn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?je(n):Ne(n),ot(n,e,"actions"),Yw(n,s,e),xe(s,e.loaderHtml),ot(s,e,"loader")};function Yw(t,e,n){const s=pt(),i=zt(),r=gn();zr(s,"confirm",n),zr(i,"deny",n),zr(r,"cancel",n),Xw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Xw(t,e,n,s){if(!s.buttonsStyling)return Et([t,e,n],g.styled);K([t,e,n],g.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,K(t,g["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,K(e,g["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,K(n,g["default-outline"]))}function zr(t,e,n){Cr(t,n[`show${Va(e)}Button`],"inline-block"),xe(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=g[e],ot(t,n,`${e}Button`),K(t,n[`${e}ButtonClass`])}function Jw(t,e){typeof e=="string"?t.style.background=e:e||K([document.documentElement,document.body],g["no-backdrop"])}function Zw(t,e){e in g?K(t,g[e]):(Xe('The "position" parameter is not valid, defaulting to "center"'),K(t,g.center))}function eb(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in g&&K(t,g[n])}}const tb=(t,e)=>{const n=Ue();n&&(Jw(n,e.backdrop),Zw(n,e.position),eb(n,e.grow),ot(n,e,"container"))},j={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},nb=["input","file","range","select","radio","checkbox","textarea"],sb=(t,e)=>{const n=Z(),s=j.innerParams.get(t),i=!s||e.input!==s.input;nb.forEach(r=>{const o=g[r],a=Ot(n,o);ob(r,e.inputAttributes),a.className=o,i&&je(a)}),e.input&&(i&&ib(e),ab(e))},ib=t=>{if(!Qe[t.input])return En(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Hd(t.input),n=Qe[t.input](e,t);Ne(n),setTimeout(()=>{Ud(n)})},rb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},ob=(t,e)=>{const n=za(Z(),t);if(n){rb(n);for(const s in e)n.setAttribute(s,e[s])}},ab=t=>{const e=Hd(t.input);t.customClass&&K(e,t.customClass.input)},Wa=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},Zs=(t,e,n)=>{if(n.inputLabel){t.id=g.input;const s=document.createElement("label"),i=g["input-label"];s.setAttribute("for",t.id),s.className=i,K(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Hd=t=>{const e=g[t]?g[t]:g.input;return Ot(Z(),e)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:ja(e.inputValue)||Xe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),Zs(t,t,e),Wa(t,e),t.type=e.input,t);Qe.file=(t,e)=>(Zs(t,t,e),Wa(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,Zs(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");xe(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Zs(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=za(Z(),"checkbox");n.value="1",n.id=g.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return xe(s,e.inputPlaceholder),t};Qe.textarea=(t,e)=>{t.value=e.inputValue,Wa(t,e),Zs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Z()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?Z().style.width=`${r}px`:Z().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const lb=(t,e)=>{const n=Vi();ot(n,e,"htmlContainer"),e.html?(Ga(e.html,n),Ne(n,"block")):e.text?(n.textContent=e.text,Ne(n,"block")):je(n),sb(t,e)},cb=(t,e)=>{const n=Vd();Cr(n,e.footer),e.footer&&Ga(e.footer,n),ot(n,e,"footer")},ub=(t,e)=>{const n=qa();xe(n,e.closeButtonHtml),ot(n,e,"closeButton"),Cr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},hb=(t,e)=>{const n=j.innerParams.get(t),s=Xs();if(n&&e.icon===n.icon){dc(s,e),hc(s,e);return}if(!e.icon&&!e.iconHtml)return je(s);if(e.icon&&Object.keys(fs).indexOf(e.icon)===-1)return En(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),je(s);Ne(s),dc(s,e),hc(s,e),K(s,e.showClass.icon)},hc=(t,e)=>{for(const n in fs)e.icon!==n&&Et(t,fs[n]);K(t,fs[e.icon]),gb(t,e),db(),ot(t,e,"icon")},db=()=>{const t=Z(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},fb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,pb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,dc=(t,e)=>{t.textContent="",e.iconHtml?xe(t,fc(e.iconHtml)):e.icon==="success"?xe(t,fb):e.icon==="error"?xe(t,pb):xe(t,fc({question:"?",warning:"!",info:"i"}[e.icon]))},gb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])cc(t,n,"backgroundColor",e.iconColor);cc(t,".swal2-success-ring","borderColor",e.iconColor)}},fc=t=>`<div class="${g["icon-content"]}">${t}</div>`,mb=(t,e)=>{const n=Fd();if(!e.imageUrl)return je(n);Ne(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),ps(n,"width",e.imageWidth),ps(n,"height",e.imageHeight),n.className=g.image,ot(n,e,"image")},yb=t=>{const e=document.createElement("li");return K(e,g["progress-step"]),xe(e,t),e},vb=t=>{const e=document.createElement("li");return K(e,g["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},wb=(t,e)=>{const n=Bd();if(!e.progressSteps||e.progressSteps.length===0)return je(n);Ne(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Xe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=yb(s);if(n.appendChild(r),i===e.currentProgressStep&&K(r,g["active-progress-step"]),i!==e.progressSteps.length-1){const o=vb(e);n.appendChild(o)}})},bb=(t,e)=>{const n=xd();Cr(n,e.title||e.titleText,"block"),e.title&&Ga(e.title,n),e.titleText&&(n.innerText=e.titleText),ot(n,e,"title")},Eb=(t,e)=>{const n=Ue(),s=Z();e.toast?(ps(n,"width",e.width),s.style.width="100%",s.insertBefore(Jn(),Xs())):ps(s,"width",e.width),ps(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),je(Er()),_b(s,e)},_b=(t,e)=>{t.className=`${g.popup} ${et(t)?e.showClass.popup:""}`,e.toast?(K([document.documentElement,document.body],g["toast-shown"]),K(t,g.toast)):K(t,g.modal),ot(t,e,"popup"),typeof e.customClass=="string"&&K(t,e.customClass),e.icon&&K(t,g[`icon-${e.icon}`])},zd=(t,e)=>{Eb(t,e),tb(t,e),wb(t,e),hb(t,e),mb(t,e),bb(t,e),ub(t,e),lb(t,e),Qw(t,e),cb(t,e),typeof e.didRender=="function"&&e.didRender(Z())},Zn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Tb=()=>{nt(document.body.children).forEach(e=>{e===Ue()||e.contains(Ue())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Kd=()=>{nt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Gd=["swal-title","swal-html","swal-footer"],Cb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Nb(n),Object.assign(Sb(n),Ib(n),Ab(n),kb(n),Db(n),Pb(n,Gd))},Sb=t=>{const e={};return nt(t.querySelectorAll("swal-param")).forEach(n=>{mn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Ln[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Ln[s]=="object"&&(e[s]=JSON.parse(i))}),e},Ib=t=>{const e={};return nt(t.querySelectorAll("swal-button")).forEach(n=>{mn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Va(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Ab=t=>{const e={},n=t.querySelector("swal-image");return n&&(mn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},kb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(mn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Db=t=>{const e={},n=t.querySelector("swal-input");n&&(mn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},nt(s).forEach(i=>{mn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Pb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(mn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Nb=t=>{const e=Gd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);nt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Xe(`Unrecognized element <${s}>`)})},mn=(t,e)=>{nt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Xe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},pc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Ob(t){t.inputValidator||Object.keys(pc).forEach(e=>{t.input===e&&(t.inputValidator=pc[e])})}function Rb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Xe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Lb(t){Ob(t),t.showLoaderOnConfirm&&!t.preConfirm&&Xe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Rb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),zw(t)}class Mb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const xb=()=>{Mn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Mn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Mn.previousBodyPadding+Ww()}px`)},Fb=()=>{Mn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Mn.previousBodyPadding}px`,Mn.previousBodyPadding=null)},Bb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!It(document.body,g.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,K(document.body,g.iosfix),Ub(),Vb()}},Vb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Z().scrollHeight>window.innerHeight-44&&(Ue().style.paddingBottom=`${44}px`)},Ub=()=>{const t=Ue();let e;t.ontouchstart=n=>{e=jb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},jb=t=>{const e=t.target,n=Ue();return qb(t)||$b(t)?!1:e===n||!uc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(uc(Vi())&&Vi().contains(e))},qb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",$b=t=>t.touches&&t.touches.length>1,Hb=()=>{if(It(document.body,g.iosfix)){const t=parseInt(document.body.style.top,10);Et(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Wd=10,zb=t=>{const e=Ue(),n=Z();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Wb(e,n,t),setTimeout(()=>{Kb(e,n)},Wd),Ha()&&(Gb(e,t.scrollbarPadding,i),Tb()),!Tr()&&!B.previousActiveElement&&(B.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Et(e,g["no-transition"])},Qd=t=>{const e=Z();if(t.target!==e)return;const n=Ue();e.removeEventListener(Ds,Qd),n.style.overflowY="auto"},Kb=(t,e)=>{Ds&&qd(e)?(t.style.overflowY="hidden",e.addEventListener(Ds,Qd)):t.style.overflowY="auto"},Gb=(t,e,n)=>{Bb(),e&&n!=="hidden"&&xb(),setTimeout(()=>{t.scrollTop=0})},Wb=(t,e,n)=>{K(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ne(e,"grid"),setTimeout(()=>{K(e,n.showClass.popup),e.style.removeProperty("opacity")},Wd),K([document.documentElement,document.body],g.shown),n.heightAuto&&n.backdrop&&!n.toast&&K([document.documentElement,document.body],g["height-auto"])},zn=t=>{let e=Z();e||new Ns,e=Z();const n=Jn();Tr()?je(Xs()):Qb(e,t),Ne(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Qb=(t,e)=>{const n=Js(),s=Jn();!e&&et(pt())&&(e=pt()),Ne(n),e&&(je(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),K([t,n],g.loading)},Yb=(t,e)=>{e.input==="select"||e.input==="radio"?t0(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(Ua(e.inputValue)||ja(e.inputValue))&&(zn(pt()),n0(t,e))},Xb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Jb(n);case"radio":return Zb(n);case"file":return e0(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Jb=t=>t.checked?1:0,Zb=t=>t.checked?t.value:null,e0=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,t0=(t,e)=>{const n=Z(),s=i=>s0[e.input](n,Oo(i),e);Ua(e.inputOptions)||ja(e.inputOptions)?(zn(pt()),Qs(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):En(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},n0=(t,e)=>{const n=t.getInput();je(n),Qs(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ne(n),n.focus(),t.hideLoading()}).catch(s=>{En(`Error in inputValue promise: ${s}`),n.value="",Ne(n),n.focus(),t.hideLoading()})},s0={select:(t,e,n)=>{const s=Ot(t,g.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,xe(l,o),l.selected=gc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Ot(t,g.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=g.radio,l.value=o,gc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");xe(u,a),u.className=g.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Oo=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Oo(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Oo(s)),e.push([n,s])}),e},gc=(t,e)=>e&&e.toString()===t.toString();function mc(){const t=j.innerParams.get(this);if(!t)return;const e=j.domCache.get(this);je(e.loader),Tr()?t.icon&&Ne(Xs()):i0(e),Et([e.popup,e.actions],g.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const i0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ne(e[0],"inline-block"):Lw()&&je(t.actions)};function r0(t){const e=j.innerParams.get(t||this),n=j.domCache.get(t||this);return n?za(n.popup,e.input):null}const Ps={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},o0=()=>et(Z()),Yd=()=>pt()&&pt().click(),a0=()=>zt()&&zt().click(),l0=()=>gn()&&gn().click(),Xd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},c0=(t,e,n,s)=>{Xd(e),n.toast||(e.keydownHandler=i=>h0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:Z(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Ro=(t,e,n)=>{const s=$a();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();Z().focus()},Jd=["ArrowRight","ArrowDown"],u0=["ArrowLeft","ArrowUp"],h0=(t,e,n)=>{const s=j.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?d0(t,e,s):e.key==="Tab"?f0(e,s):[...Jd,...u0].includes(e.key)?p0(e.key):e.key==="Escape"&&g0(e,s,n)))},d0=(t,e,n)=>{if(br(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Yd(),e.preventDefault()}},f0=(t,e)=>{const n=t.target,s=$a();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Ro(e,i,-1):Ro(e,i,1),t.stopPropagation(),t.preventDefault()},p0=t=>{const e=pt(),n=zt(),s=gn();if(![e,n,s].includes(document.activeElement))return;const i=Jd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Js().children.length;o++){if(r=r[i],!r)return;if(et(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},g0=(t,e,n)=>{br(e.allowEscapeKey)&&(t.preventDefault(),n(Zn.esc))};function Zd(t,e,n,s){Tr()?yc(t,s):(Bw(n).then(()=>yc(t,s)),Xd(B)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ha()&&(Fb(),Hb(),Kd()),m0()}function m0(){Et([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function ui(t){t=b0(t);const e=Ps.swalPromiseResolve.get(this),n=v0(this);this.isAwaitingPromise()?t.isDismissed||(ei(this),e(t)):n&&e(t)}function y0(){return!!j.awaitingPromise.get(this)}const v0=t=>{const e=Z();if(!e)return!1;const n=j.innerParams.get(t);if(!n||It(e,n.hideClass.popup))return!1;Et(e,n.showClass.popup),K(e,n.hideClass.popup);const s=Ue();return Et(s,n.showClass.backdrop),K(s,n.hideClass.backdrop),E0(t,e,n),!0};function w0(t){const e=Ps.swalPromiseReject.get(this);ei(this),e&&e(t)}const ei=t=>{t.isAwaitingPromise()&&(j.awaitingPromise.delete(t),j.innerParams.get(t)||t._destroy())},b0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),E0=(t,e,n)=>{const s=Ue(),i=Ds&&qd(e);typeof n.willClose=="function"&&n.willClose(e),i?_0(t,e,s,n.returnFocus,n.didClose):Zd(t,s,n.returnFocus,n.didClose)},_0=(t,e,n,s,i)=>{B.swalCloseEventFinishedCallback=Zd.bind(null,t,n,s,i),e.addEventListener(Ds,function(r){r.target===e&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback)})},yc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function ef(t,e,n){const s=j.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function tf(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function T0(){ef(this,["confirmButton","denyButton","cancelButton"],!1)}function C0(){ef(this,["confirmButton","denyButton","cancelButton"],!0)}function S0(){return tf(this.getInput(),!1)}function I0(){return tf(this.getInput(),!0)}function A0(t){const e=j.domCache.get(this),n=j.innerParams.get(this);xe(e.validationMessage,t),e.validationMessage.className=g["validation-message"],n.customClass&&n.customClass.validationMessage&&K(e.validationMessage,n.customClass.validationMessage),Ne(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",g["validation-message"]),Ud(s),K(s,g.inputerror))}function k0(){const t=j.domCache.get(this);t.validationMessage&&je(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Et(e,g.inputerror))}function D0(){return j.domCache.get(this).progressSteps}function P0(t){const e=Z(),n=j.innerParams.get(this);if(!e||It(e,n.hideClass.popup))return Xe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=N0(t),i=Object.assign({},n,s);zd(this,i),j.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const N0=t=>{const e={};return Object.keys(t).forEach(n=>{Ld(n)?e[n]=t[n]:Xe(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function O0(){const t=j.domCache.get(this),e=j.innerParams.get(this);if(!e){nf(this);return}t.popup&&B.swalCloseEventFinishedCallback&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback),B.deferDisposalTimer&&(clearTimeout(B.deferDisposalTimer),delete B.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),R0(this)}const R0=t=>{nf(t),delete t.params,delete B.keydownHandler,delete B.keydownTarget,delete B.currentInstance},nf=t=>{t.isAwaitingPromise()?(Kr(j,t),j.awaitingPromise.set(t,!0)):(Kr(Ps,t),Kr(j,t))},Kr=(t,e)=>{for(const n in t)t[n].delete(e)},sf=Object.freeze(Object.defineProperty({__proto__:null,_destroy:O0,close:ui,closeModal:ui,closePopup:ui,closeToast:ui,disableButtons:C0,disableInput:I0,disableLoading:mc,enableButtons:T0,enableInput:S0,getInput:r0,getProgressSteps:D0,handleAwaitingPromise:ei,hideLoading:mc,isAwaitingPromise:y0,rejectPromise:w0,resetValidationMessage:k0,showValidationMessage:A0,update:P0},Symbol.toStringTag,{value:"Module"})),L0=t=>{const e=j.innerParams.get(t);t.disableButtons(),e.input?rf(t,"confirm"):Ya(t,!0)},M0=t=>{const e=j.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?rf(t,"deny"):Qa(t,!1)},x0=(t,e)=>{t.disableButtons(),e(Zn.cancel)},rf=(t,e)=>{const n=j.innerParams.get(t);if(!n.input)return En(`The "input" parameter is needed to be set when using returnInputValueOn${Va(e)}`);const s=Xb(t,n);n.inputValidator?F0(t,s,e):t.getInput().checkValidity()?e==="deny"?Qa(t,s):Ya(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},F0=(t,e,n)=>{const s=j.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Qs(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Qa(t,e):Ya(t,e)})},Qa=(t,e)=>{const n=j.innerParams.get(t||globalThis);n.showLoaderOnDeny&&zn(zt()),n.preDeny?(j.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Qs(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),ei(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>of(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},vc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},of=(t,e)=>{t.rejectPromise(e)},Ya=(t,e)=>{const n=j.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&zn(),n.preConfirm?(t.resetValidationMessage(),j.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Qs(n.preConfirm(e,n.validationMessage))).then(i=>{et(Er())||i===!1?(t.hideLoading(),ei(t)):vc(t,typeof i>"u"?e:i)}).catch(i=>of(t||globalThis,i))):vc(t,e)},B0=(t,e,n)=>{j.innerParams.get(t).toast?V0(t,e,n):(j0(e),q0(e),$0(t,e,n))},V0=(t,e,n)=>{e.popup.onclick=()=>{const s=j.innerParams.get(t);s&&(U0(s)||s.timer||s.input)||n(Zn.close)}},U0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Ui=!1;const j0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Ui=!0)}}},q0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Ui=!0)}}},$0=(t,e,n)=>{e.container.onclick=s=>{const i=j.innerParams.get(t);if(Ui){Ui=!1;return}s.target===e.container&&br(i.allowOutsideClick)&&n(Zn.backdrop)}},H0=t=>typeof t=="object"&&t.jquery,wc=t=>t instanceof Element||H0(t),z0=t=>{const e={};return typeof t[0]=="object"&&!wc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||wc(i)?e[n]=i:i!==void 0&&En(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function K0(...t){const e=this;return new e(...t)}function G0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const W0=()=>B.timeout&&B.timeout.getTimerLeft(),af=()=>{if(B.timeout)return Mw(),B.timeout.stop()},lf=()=>{if(B.timeout){const t=B.timeout.start();return Ka(t),t}},Q0=()=>{const t=B.timeout;return t&&(t.running?af():lf())},Y0=t=>{if(B.timeout){const e=B.timeout.increase(t);return Ka(e,!0),e}},X0=()=>B.timeout&&B.timeout.isRunning();let bc=!1;const Lo={};function J0(t="data-swal-template"){Lo[t]=this,bc||(document.body.addEventListener("click",Z0),bc=!0)}const Z0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Lo){const s=e.getAttribute(n);if(s){Lo[n].fire({template:s});return}}},eE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:z0,bindClickHandler:J0,clickCancel:l0,clickConfirm:Yd,clickDeny:a0,enableLoading:zn,fire:K0,getActions:Js,getCancelButton:gn,getCloseButton:qa,getConfirmButton:pt,getContainer:Ue,getDenyButton:zt,getFocusableElements:$a,getFooter:Vd,getHtmlContainer:Vi,getIcon:Xs,getImage:Fd,getInputLabel:Pw,getLoader:Jn,getPopup:Z,getTimerLeft:W0,getTimerProgressBar:_r,getTitle:xd,getValidationMessage:Er,increaseTimer:Y0,isDeprecatedParameter:No,isLoading:Ow,isTimerRunning:X0,isUpdatableParameter:Ld,isValidParameter:Rd,isVisible:o0,mixin:G0,resumeTimer:lf,showLoading:zn,stopTimer:af,toggleTimer:Q0},Symbol.toStringTag,{value:"Module"}));let Mo;class es{constructor(...e){if(typeof window>"u")return;Mo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);j.promise.set(this,s)}_main(e,n={}){kw(Object.assign({},n,e)),B.currentInstance&&(B.currentInstance._destroy(),Ha()&&Kd()),B.currentInstance=this;const s=nE(e,n);Lb(s),Object.freeze(s),B.timeout&&(B.timeout.stop(),delete B.timeout),clearTimeout(B.restoreFocusTimeout);const i=sE(this);return zd(this,s),j.innerParams.set(this,s),tE(this,i,s)}then(e){return j.promise.get(this).then(e)}finally(e){return j.promise.get(this).finally(e)}}const tE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Ps.swalPromiseResolve.set(t,s),Ps.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>L0(t),e.denyButton.onclick=()=>M0(t),e.cancelButton.onclick=()=>x0(t,r),e.closeButton.onclick=()=>r(Zn.close),B0(t,e,r),c0(t,B,n,r),Yb(t,n),zb(n),iE(B,n,r),rE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nE=(t,e)=>{const n=Cb(t),s=Object.assign({},Ln,e,n,t);return s.showClass=Object.assign({},Ln.showClass,s.showClass),s.hideClass=Object.assign({},Ln.hideClass,s.hideClass),s},sE=t=>{const e={popup:Z(),container:Ue(),actions:Js(),confirmButton:pt(),denyButton:zt(),cancelButton:gn(),loader:Jn(),closeButton:qa(),validationMessage:Er(),progressSteps:Bd()};return j.domCache.set(t,e),e},iE=(t,e,n)=>{const s=_r();je(s),e.timer&&(t.timeout=new Mb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ne(s),ot(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ka(e.timer)})))},rE=(t,e)=>{if(!e.toast){if(!br(e.allowEnterKey))return aE();oE(t,e)||Ro(e,-1,1)}},oE=(t,e)=>e.focusDeny&&et(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&et(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&et(t.confirmButton)?(t.confirmButton.focus(),!0):!1,aE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(es.prototype,sf);Object.assign(es,eE);Object.keys(sf).forEach(t=>{es[t]=function(...e){if(Mo)return Mo[t](...e)}});es.DismissReason=Zn;es.version="11.4.8";const Ns=es;Ns.default=Ns;const Cn=[];function Sr(t,e=ye){let n;const s=new Set;function i(a){if(Nt(t,a)&&(t=a,n)){const l=!Cn.length;for(const c of s)c[1](),Cn.push(c,t);if(l){for(let c=0;c<Cn.length;c+=2)Cn[c][0](Cn[c+1]);Cn.length=0}}}function r(a){i(a(t))}function o(a,l=ye){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||ye),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Gr=Sr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),xo=Sr(""),Fo=Sr(""),yi=Sr(""),lE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},cE=async t=>{try{await Ba(St(De,"Pacientes",t.id),t)}catch(e){console.log(e)}};function Ec(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function _c(t){let e,n,s;function i(a,l){return a[0].length==0?hE:uE}let r=i(t),o=r(t);return{c(){e=T("select"),o.c(),p(e,"name","select-pacientes"),p(e,"class","select-Pacientes svelte-2shrp8"),p(e,"id","elementoSelectPacientes"),p(e,"size",5),t[1]===void 0&&un(()=>t[4].call(e))},m(a,l){Q(a,e,l),o.m(e,null),Bt(e,t[1]),n||(s=[G(e,"change",t[2]),G(e,"change",t[4])],n=!0)},p(a,l){r===(r=i(a))&&o?o.p(a,l):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),l&2&&Bt(e,a[1])},d(a){a&&W(e),o.d(),n=!1,gt(s)}}}function uE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=Tc(Ec(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Bo()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);Q(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=Ec(i,n,o);s[o]?s[o].p(a,r):(s[o]=Tc(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Os(s,i),i&&W(e)}}}function hE(t){let e;return{c(){e=T("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){Q(n,e,s)},p:ye,d(n){n&&W(e)}}}function Tc(t){let e,n=`${t[7].apellido}, ${t[7].nombre}${t[7].plan=="particular"?"":" -"+t[7].nroSocio+" - plan "+t[7].plan.plan} `,s;return{c(){e=T("option"),s=$(n),e.__value=t[9],e.value=e.__value},m(i,r){Q(i,e,r),v(e,s)},p(i,r){r&1&&n!==(n=`${i[7].apellido}, ${i[7].nombre}${i[7].plan=="particular"?"":" -"+i[7].nroSocio+" - plan "+i[7].plan.plan} `)&&be(s,n)},d(i){i&&W(e)}}}function dE(t){let e,n=t[0].length>0&&_c(t);return{c(){n&&n.c(),e=Bo()},m(s,i){n&&n.m(s,i),Q(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=_c(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ye,o:ye,d(s){n&&n.d(s),s&&W(e)}}}function fE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Vo(),l=u=>{const h=u.target.value;n(3,i=s[h].plan),o=s[h].id,a("cambioSelectPaciente",[h,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${h}, planSelect ${i.plan?i.plan:"particular"}`)};function c(){r=wi(this),n(1,r)}return t.$$set=u=>{"pacientesFiltrada"in u&&n(0,s=u.pacientesFiltrada),"planSelect"in u&&n(3,i=u.planSelect)},[s,r,l,i,c]}class pE extends Gt{constructor(e){super(),Kt(this,e,fE,dE,Nt,{pacientesFiltrada:0,planSelect:3})}}function gE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,w,m,y,I,_,P,N,R,le,ee,fe,q,ae,ie,ue,qe,he,$e,He,ne,U,Ae,te,Tt,mt,S,ve,de,We,Jt,ti;return R=new pE({props:{pacientesFiltrada:t[3],planSelect:mE}}),R.$on("cambioSelectPaciente",t[15]),de=new Cf({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),de.$on("cambioPlan",t[14]),de.$on("clickCheckPlan",t[16]),{c(){e=T("body"),n=T("div"),s=T("div"),i=T("button"),r=$("create"),a=V(),l=T("button"),c=$("update"),h=V(),d=T("button"),f=$("delete"),m=V(),y=T("div"),I=T("label"),I.textContent="filtrar por apellido",_=T("input"),P=V(),N=T("div"),hn(R.$$.fragment),le=V(),ee=T("div"),fe=T("label"),fe.textContent="nombre",q=T("input"),ae=V(),ie=T("label"),ie.textContent="apellido",ue=T("input"),qe=V(),he=T("div"),$e=T("label"),$e.textContent="nº socio",He=V(),ne=T("div"),U=T("input"),Ae=V(),te=T("button"),te.textContent="✎",Tt=V(),mt=T("label"),S=$(t[10]),ve=V(),hn(de.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],p(i,"class","svelte-40mbgp"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],p(l,"class","svelte-40mbgp"),d.disabled=w=!t[4],p(d,"class","svelte-40mbgp"),p(s,"class","buttons svelte-40mbgp"),p(n,"id","botones"),p(n,"class","svelte-40mbgp"),p(I,"for","filterPrefix"),p(I,"class","svelte-40mbgp"),p(_,"name","filterPrefix"),p(_,"placeholder","filter prefix"),p(_,"class","svelte-40mbgp"),p(y,"id","filter"),p(y,"class","svelte-40mbgp"),p(N,"id","selectPacientes"),p(N,"class","svelte-40mbgp"),p(fe,"for","nombre"),p(fe,"class","svelte-40mbgp"),p(q,"name","nombre"),p(q,"placeholder","nombre"),p(q,"class","svelte-40mbgp"),p(ie,"for","apellido"),p(ie,"class","svelte-40mbgp"),p(ue,"name","apellido"),p(ue,"placeholder","apellido"),p(ue,"class","svelte-40mbgp"),p(ee,"id","formInputsI"),p(ee,"class","svelte-40mbgp"),p($e,"for","nroSocio"),p($e,"class","svelte-40mbgp"),p(U,"id","inputNroSocio"),p(U,"name","nroSocio"),p(U,"placeholder","nro de Socio"),p(U,"class","svelte-40mbgp"),p(te,"class","svelte-40mbgp"),p(ne,"class","formRow svelte-40mbgp"),p(mt,"id","labelPlan"),p(mt,"for","plan"),p(mt,"class","svelte-40mbgp"),p(he,"id","formInputsD"),p(he,"class","svelte-40mbgp"),p(e,"class","svelte-40mbgp")},m(C,Y){Q(C,e,Y),v(e,n),v(n,s),v(s,i),v(i,r),v(s,a),v(s,l),v(l,c),v(s,h),v(s,d),v(d,f),v(e,m),v(e,y),v(y,I),v(y,_),Se(_,t[2]),v(e,P),v(e,N),Vt(R,N,null),v(e,le),v(e,ee),v(ee,fe),v(ee,q),Se(q,t[7]),v(ee,ae),v(ee,ie),v(ee,ue),Se(ue,t[8]),v(e,qe),v(e,he),v(he,$e),v(he,He),v(he,ne),v(ne,U),Se(U,t[9]),v(ne,Ae),v(ne,te),v(he,Tt),v(he,mt),v(mt,S),v(he,ve),Vt(de,he,null),We=!0,Jt||(ti=[G(i,"click",t[11]),G(l,"click",t[12]),G(d,"click",t[13]),G(_,"input",t[21]),G(q,"input",t[22]),G(ue,"input",t[23]),G(U,"input",t[24]),G(te,"click",yE)],Jt=!0)},p(C,Y){(!We||Y[0]&897&&o!==(o=!C[7]||!C[8]||!C[0]||!C[9]))&&(i.disabled=o),(!We||Y[0]&913&&u!==(u=!C[7]||!C[8]||!C[0]||!C[9]||!C[4]))&&(l.disabled=u),(!We||Y[0]&16&&w!==(w=!C[4]))&&(d.disabled=w),Y[0]&4&&_.value!==C[2]&&Se(_,C[2]);const we={};Y[0]&8&&(we.pacientesFiltrada=C[3]),R.$set(we),Y[0]&128&&q.value!==C[7]&&Se(q,C[7]),Y[0]&256&&ue.value!==C[8]&&Se(ue,C[8]),Y[0]&512&&U.value!==C[9]&&Se(U,C[9]),(!We||Y[0]&1024)&&be(S,C[10]);const ze={};Y[0]&2&&(ze.planes=C[1]),Y[0]&1&&(ze.planSeleccionado=C[0]),Y[0]&64&&(ze.SelectPlanVisible=C[6]),Y[0]&32&&(ze.indicePlan=C[5]),de.$set(ze)},i(C){We||(Je(R.$$.fragment,C),Je(de.$$.fragment,C),We=!0)},o(C){ht(R.$$.fragment,C),ht(de.$$.fragment,C),We=!1},d(C){C&&W(e),Ut(R),Ut(de),Jt=!1,gt(ti)}}}let mE="particular";function yE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function vE(t,e,n){let s,i,r,o,a;nn(t,yi,S=>n(25,i=S)),nn(t,Gr,S=>n(26,r=S)),nn(t,Fo,S=>n(27,o=S)),nn(t,xo,S=>n(28,a=S));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:f}=e,w,m=0,y;Vc(()=>{lE(l,d),l.forEach(S=>{cE(S)}),console.log(a)});let I="",_="",P="",N="",R=[],le="plan";_n(Gr,r=s,r);const ee=S=>{n(7,_=S?S.nombre:""),n(8,P=S?S.apellido:""),n(9,N=S?S.nroSocio:""),n(0,h=S?S.plan:{})},fe=async()=>{try{await Ad(st(De,"Pacientes"),{nombre:_,apellido:P,nroSocio:N,createdAt:new Date().toLocaleDateString(),plan:h}),Rn({text:"Nuevo paciente agregado"}).showToast()}catch(S){console.error(S)}},q=()=>{n(17,l=l.concat({nombre:_,apellido:P})),n(20,m=l.length-1),fe(),n(7,_=n(8,P=n(0,h=n(9,N=""))))},ae=async S=>{try{await Ba(St(De,"Pacientes",S.id),S),Rn({text:`paciente ${S.apellido}, ${S.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ve){console.error(ve)}},ie=()=>{n(4,s.nombre=_,s),n(4,s.apellido=P,s),n(0,h=s.plan),n(4,s.nroSocio=N,s),n(4,s),n(3,R),n(20,m),n(2,I),n(17,l),n(17,l),ae(s)},ue=async S=>{try{await Do(St(De,"Pacientes",S.id)),Rn({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(de){console.error(de)}const ve=ds(st(De,"sesiones"),ko("pacienteID","==",S.id));console.log(`desde delete q=pacientes a borrar ${ve} - paciente: ${S.nombre} ${S.apellido} ${S.id}`);try{(await Id(ve)).forEach(We=>{Do(We.ref)})}catch(de){console.log(de)}},qe=()=>{const S=l.indexOf(s);Ns.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ve=>{ve.isConfirmed&&(Ns.fire("Deleted!","Your file has been deleted.","success"),ue(l[m]),n(17,l=[...l.slice(0,S),...l.slice(S+1)]),n(7,_=n(8,P=n(9,N=n(0,h="")))),n(20,m=Math.min(m,R.length-2)))})},he=S=>{n(4,s.plan=S,s),n(4,s.nombre=_,s),n(4,s.apellido=P,s),n(4,s.nroSocio=N,s),n(3,R[m].plan=S,R),ae(s)},$e=S=>{n(0,h=S.detail),console.log(h),s.plan.plan!=h.plan&&he(h)},He=S=>{S?(n(10,le="particular"),n(6,y=!1)):(n(10,le="plan"),n(6,y=!0))},ne=S=>{n(20,m=S.detail[0]);const ve=S.detail[1];_n(yi,i=S.detail[2],i);const de=typeof ve=="string"?"particular":ve.plan;console.log(`i ${m}, planSelect ${de}`),n(0,h=de=="particular"?"particular":R[m].plan),h!="particular"&&(n(5,w=u.findIndex(Jt=>Jt.plan===de)),console.log(`indicePlan ${w}, ${typeof w}`));const We=de=="particular";He(We)},U=S=>{const ve=S.detail.valor.SelectPlanVisible;ve?ve&&h=="particular"&&n(0,h="210"):n(0,h="particular"),he(h),He(!ve)};function Ae(){I=this.value,n(2,I)}function te(){_=this.value,n(7,_)}function Tt(){P=this.value,n(8,P)}function mt(){N=this.value,n(9,N)}return t.$$set=S=>{"pacientes"in S&&n(17,l=S.pacientes),"sesiones"in S&&n(18,c=S.sesiones),"planes"in S&&n(1,u=S.planes),"planSeleccionado"in S&&n(0,h=S.planSeleccionado),"optionsPlan"in S&&n(19,f=S.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,R=I?l.filter(S=>`${S.apellido}, ${S.nombre}`.toLowerCase().startsWith(I.toLowerCase())):l.map(S=>({nombre:S.nombre,apellido:S.apellido,plan:S.plan,nroSocio:S.nroSocio,id:S.id}))),t.$$.dirty[0]&1048584&&n(4,s=R[m]),t.$$.dirty[0]&16&&s&&(_n(Gr,r=s,r),_n(xo,a=s.apellido,a),_n(Fo,o=s.nombre,o),_n(yi,i=s.id,i)),t.$$.dirty[0]&16&&ee(s)},[h,u,I,R,s,w,y,_,P,N,le,q,ie,qe,$e,ne,U,l,c,f,m,Ae,te,Tt,mt]}class wE extends Gt{constructor(e){super(),Kt(this,e,vE,gE,Nt,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const bE=st(De,"sesiones");st(De,"Pacientes");st(De,"Planes");const EE=async t=>{const e=di(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Id(ds(bE,ko("diaSesion",">=",n),ko("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function Cc(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function Sc(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,w=t[2],m=[];for(let y=0;y<w.length;y+=1)m[y]=Ic(Cc(t,w,y));return{c(){e=T("div"),n=T("table"),s=T("tr"),s.innerHTML=`<th class="svelte-s1hkz6">n°</th> 
                    <th class="svelte-s1hkz6">dia</th> 
                    <th class="svelte-s1hkz6">paciente</th> 
                    <th class="svelte-s1hkz6">plan</th> 
                    <th class="svelte-s1hkz6">sesion</th> 
                    <th class="svelte-s1hkz6">pago</th>`,i=V(),r=T("tbody");for(let y=0;y<m.length;y+=1)m[y].c();o=V(),a=T("p"),l=$("Total: $"),c=$(t[3]),u=V(),h=T("button"),h.textContent="Cerrar",p(s,"class","svelte-s1hkz6"),p(r,"class","svelte-s1hkz6"),p(n,"class","svelte-s1hkz6"),p(e,"id","tabla"),p(e,"class","svelte-s1hkz6"),p(a,"class","centrar svelte-s1hkz6")},m(y,I){Q(y,e,I),v(e,n),v(n,s),v(n,i),v(n,r);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(r,null);Q(y,o,I),Q(y,a,I),v(a,l),v(a,c),Q(y,u,I),Q(y,h,I),d||(f=G(h,"click",t[5]),d=!0)},p(y,I){if(I&4){w=y[2];let _;for(_=0;_<w.length;_+=1){const P=Cc(y,w,_);m[_]?m[_].p(P,I):(m[_]=Ic(P),m[_].c(),m[_].m(r,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=w.length}I&8&&be(c,y[3])},d(y){y&&W(e),Os(m,y),y&&W(o),y&&W(a),y&&W(u),y&&W(h),d=!1,f()}}}function Ic(t){let e,n,s,i,r,o=`${Ac(t[7].diaSesion.slice(8,10),2,!1)}`,a,l,c,u=`${t[7].apellido}, ${t[7].nombre}`,h,d,f,w=t[7].plan.slice(0,4)+"",m,y,I,_=t[7].valorPago+"",P,N,R,le=t[7].valorSesion+"",ee,fe;return{c(){e=T("tr"),n=T("td"),s=$(t[9]),i=V(),r=T("td"),a=$(o),l=V(),c=T("td"),h=$(u),d=V(),f=T("td"),m=$(w),y=V(),I=T("td"),P=$(_),N=V(),R=T("td"),ee=$(le),fe=V(),p(n,"class","svelte-s1hkz6"),p(r,"class","dia svelte-s1hkz6"),p(c,"class","nombre svelte-s1hkz6"),p(f,"class","plan svelte-s1hkz6"),p(I,"class","svelte-s1hkz6"),p(R,"class","svelte-s1hkz6"),p(e,"class","svelte-s1hkz6")},m(q,ae){Q(q,e,ae),v(e,n),v(n,s),v(e,i),v(e,r),v(r,a),v(e,l),v(e,c),v(c,h),v(e,d),v(e,f),v(f,m),v(e,y),v(e,I),v(I,P),v(e,N),v(e,R),v(R,ee),v(e,fe)},p(q,ae){ae&4&&o!==(o=`${Ac(q[7].diaSesion.slice(8,10),2,!1)}`)&&be(a,o),ae&4&&u!==(u=`${q[7].apellido}, ${q[7].nombre}`)&&be(h,u),ae&4&&w!==(w=q[7].plan.slice(0,4)+"")&&be(m,w),ae&4&&_!==(_=q[7].valorPago+"")&&be(P,_),ae&4&&le!==(le=q[7].valorSesion+"")&&be(ee,le)},d(q){q&&W(e)}}}function _E(t){let e,n,s,i,r,o,a,l=t[0]&&t[2].length>0&&Sc(t);return{c(){e=T("button"),n=$("Ver Listado de Sesiones Mes "),s=$(t[1]),i=V(),r=T("div"),l&&l.c(),p(r,"class","listadoSesionesPorMes svelte-s1hkz6")},m(c,u){Q(c,e,u),v(e,n),v(e,s),Q(c,i,u),Q(c,r,u),l&&l.m(r,null),o||(a=G(e,"click",t[4]),o=!0)},p(c,[u]){u&2&&be(s,c[1]),c[0]&&c[2].length>0?l?l.p(c,u):(l=Sc(c),l.c(),l.m(r,null)):l&&(l.d(1),l=null)},i:ye,o:ye,d(c){c&&W(e),c&&W(i),c&&W(r),l&&l.d(),o=!1,a()}}}function Ac(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function TE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,{totalPagos:o}=e;const a=Vo(),l=()=>{i==!1&&a("vistaPulsado",s),n(0,i=!i)},c=()=>n(0,i=!i);return t.$$set=u=>{"mesSeleccionado"in u&&n(1,s=u.mesSeleccionado),"vistaCalculos"in u&&n(0,i=u.vistaCalculos),"arrayParaLaVista"in u&&n(2,r=u.arrayParaLaVista),"totalPagos"in u&&n(3,o=u.totalPagos)},[i,s,r,o,l,c]}class CE extends Gt{constructor(e){super(),Kt(this,e,TE,_E,Nt,{mesSeleccionado:1,vistaCalculos:0,arrayParaLaVista:2,totalPagos:3})}}function SE(t){let e,n,s,i,r,o,a;return{c(){e=T("p"),n=$("total general:"),s=$(t[0]),i=V(),r=T("p"),o=$("total por paciente: "),a=$(t[1]),p(e,"id","totalGeneral")},m(l,c){Q(l,e,c),v(e,n),v(e,s),Q(l,i,c),Q(l,r,c),v(r,o),v(r,a)},p(l,[c]){c&1&&be(s,l[0]),c&2&&be(a,l[1])},i:ye,o:ye,d(l){l&&W(e),l&&W(i),l&&W(r)}}}function IE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class AE extends Gt{constructor(e){super(),Kt(this,e,IE,SE,Nt,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function kc(t,e,n){const s=t.slice();return s[50]=e[n],s}function Dc(t,e,n){const s=t.slice();return s[53]=e[n],s}function Pc(t){let e,n,s,i,r;return{c(){e=T("h4"),n=$("Paciente: "),s=$(t[13]),i=$(", "),r=$(t[14]),p(e,"class","svelte-1imwuid")},m(o,a){Q(o,e,a),v(e,n),v(e,s),v(e,i),v(e,r)},p(o,a){a[0]&8192&&be(s,o[13]),a[0]&16384&&be(r,o[14])},d(o){o&&W(e)}}}function Nc(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let u=0;u<l.length;u+=1)c[u]=Rc(Dc(t,l,u));return i=new AE({props:{registrosMesActual:t[8],varSumaValorPagoPorPaciente:t[6]}}),{c(){e=T("div"),n=T("select");for(let u=0;u<c.length;u+=1)c[u].c();s=V(),hn(i.$$.fragment),p(n,"id","select-sesiones"),p(n,"size",5),p(n,"class","svelte-1imwuid"),t[1]===void 0&&un(()=>t[25].call(n)),p(e,"id","select"),p(e,"class","svelte-1imwuid")},m(u,h){Q(u,e,h),v(e,n);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(n,null);Bt(n,t[1]),v(e,s),Vt(i,e,null),r=!0,o||(a=[G(n,"change",t[16]),G(n,"change",t[25])],o=!0)},p(u,h){if(h[0]&137){l=u[0];let f;for(f=0;f<l.length;f+=1){const w=Dc(u,l,f);c[f]?c[f].p(w,h):(c[f]=Rc(w),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=l.length}h[0]&3&&Bt(n,u[1]);const d={};h[0]&256&&(d.registrosMesActual=u[8]),h[0]&64&&(d.varSumaValorPagoPorPaciente=u[6]),i.$set(d)},i(u){r||(Je(i.$$.fragment,u),r=!0)},o(u){ht(i.$$.fragment,u),r=!1},d(u){u&&W(e),Os(c,u),Ut(i),o=!1,gt(a)}}}function Oc(t){let e,n,s=t[53].diaSesion+"",i,r,o=t[53].valorSesion+"",a,l,c=t[53].fechaPago+"",u,h,d=t[53].valorPago+"",f,w,m;return{c(){e=T("option"),n=$("dia sesion: "),i=$(s),r=$(" - valor sesion: "),a=$(o),l=$(`
              - dia pago `),u=$(c),h=$(" - valor pago "),f=$(d),w=V(),p(e,"class"," svelte-1imwuid"),e.__value=m=t[53].id,e.value=e.__value},m(y,I){Q(y,e,I),v(e,n),v(e,i),v(e,r),v(e,a),v(e,l),v(e,u),v(e,h),v(e,f),v(e,w)},p(y,I){I[0]&1&&s!==(s=y[53].diaSesion+"")&&be(i,s),I[0]&1&&o!==(o=y[53].valorSesion+"")&&be(a,o),I[0]&1&&c!==(c=y[53].fechaPago+"")&&be(u,c),I[0]&1&&d!==(d=y[53].valorPago+"")&&be(f,d),I[0]&1&&m!==(m=y[53].id)&&(e.__value=m,e.value=e.__value)},d(y){y&&W(e)}}}function Rc(t){let e=Object.values(t[53]).includes(t[3])&&t[53].diaSesion.slice(5,7)==t[7],n,s=e&&Oc(t);return{c(){s&&s.c(),n=Bo()},m(i,r){s&&s.m(i,r),Q(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[53]).includes(i[3])&&i[53].diaSesion.slice(5,7)==i[7]),e?s?s.p(i,r):(s=Oc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&W(n)}}}function kE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,w,m,y,I,_,P,N,R,le,ee,fe,q,ae,ie,ue,qe,he,$e,He=t[15],ne=[];for(let U=0;U<He.length;U+=1)ne[U]=Lc(kc(t,He,U));return{c(){e=T("div"),n=T("form"),s=T("div"),i=T("div"),r=T("label"),r.textContent="pago",o=T("input"),a=V(),l=T("label"),l.textContent="valor sesion",c=T("input"),u=V(),h=T("div"),d=T("label"),d.textContent="Dia Sesion",f=T("input"),w=V(),m=T("label"),m.textContent="Fecha Pago",y=T("input"),I=V(),_=T("div"),P=T("button"),P.textContent="update",N=V(),R=T("button"),R.textContent="delete",le=V(),ee=T("button"),ee.textContent="Agregar sesión",fe=V(),q=T("select");for(let U=0;U<ne.length;U+=1)ne[U].c();ae=V(),ie=T("button"),ue=$("listar mes "),qe=$(t[7]),p(r,"for","valorPago"),p(r,"class","svelte-1imwuid"),p(o,"name","valorPago"),p(o,"type","number"),p(o,"step","100"),p(o,"min","0"),p(o,"placeholder","Valor pago"),p(o,"class","svelte-1imwuid"),p(l,"for","valorSesion"),p(l,"class","svelte-1imwuid"),p(c,"name","valorSesion"),p(c,"type","number"),p(c,"step","100"),p(c,"min","0"),p(c,"placeholder","Valor sesión"),p(c,"class","svelte-1imwuid"),p(i,"id","inputsFormSesionesI"),p(i,"class","svelte-1imwuid"),p(d,"for","diaSesion"),p(d,"class","svelte-1imwuid"),p(f,"name","diaSesion"),p(f,"type","date"),p(f,"placeholder","Día sesión"),p(f,"class","svelte-1imwuid"),p(m,"for","fechaPago"),p(m,"class","svelte-1imwuid"),p(y,"name","fechaPago"),p(y,"type","date"),p(y,"placeholder","Fecha pago"),p(y,"class","svelte-1imwuid"),p(h,"id","inputsFormSesionesD"),p(h,"class","svelte-1imwuid"),p(P,"class","svelte-1imwuid"),p(R,"class","svelte-1imwuid"),p(ee,"class","svelte-1imwuid"),p(q,"name","mes"),p(q,"id","mesRegistro"),p(q,"class","svelte-1imwuid"),t[7]===void 0&&un(()=>t[33].call(q)),p(ie,"class","svelte-1imwuid"),p(_,"id","botonesFormSesiones"),p(_,"class","buttons svelte-1imwuid"),p(s,"id","form-Sesiones"),p(s,"class","svelte-1imwuid"),p(n,"class","svelte-1imwuid"),p(e,"id","contenedor-form-sesiones"),p(e,"class","svelte-1imwuid")},m(U,Ae){Q(U,e,Ae),v(e,n),v(n,s),v(s,i),v(i,r),v(i,o),Se(o,t[9]),v(i,a),v(i,l),v(i,c),Se(c,t[10]),v(s,u),v(s,h),v(h,d),v(h,f),Se(f,t[11]),v(h,w),v(h,m),v(h,y),Se(y,t[12]),v(s,I),v(s,_),v(_,P),v(_,N),v(_,R),v(_,le),v(_,ee),v(_,fe),v(_,q);for(let te=0;te<ne.length;te+=1)ne[te]&&ne[te].m(q,null);Bt(q,t[7]),v(_,ae),v(_,ie),v(ie,ue),v(ie,qe),he||($e=[G(o,"input",t[26]),G(c,"input",t[27]),G(f,"input",t[28]),G(y,"input",t[29]),G(P,"click",t[30]),G(R,"click",t[31]),G(ee,"click",t[17]),G(q,"change",t[32]),G(q,"change",t[33]),G(ie,"click",t[34]),G(n,"submit",df(t[24]))],he=!0)},p(U,Ae){if(Ae[0]&512&&vi(o.value)!==U[9]&&Se(o,U[9]),Ae[0]&1024&&vi(c.value)!==U[10]&&Se(c,U[10]),Ae[0]&2048&&Se(f,U[11]),Ae[0]&4096&&Se(y,U[12]),Ae[0]&32768){He=U[15];let te;for(te=0;te<He.length;te+=1){const Tt=kc(U,He,te);ne[te]?ne[te].p(Tt,Ae):(ne[te]=Lc(Tt),ne[te].c(),ne[te].m(q,null))}for(;te<ne.length;te+=1)ne[te].d(1);ne.length=He.length}Ae[0]&32896&&Bt(q,U[7]),Ae[0]&128&&be(qe,U[7])},d(U){U&&W(e),Os(ne,U),he=!1,gt($e)}}}function Lc(t){let e,n=`${t[50].nro.toString().padStart(2,"0")} - ${t[50].nombre}`,s;return{c(){e=T("option"),s=$(n),e.__value=t[50].nro,e.value=e.__value,p(e,"class","svelte-1imwuid")},m(i,r){Q(i,e,r),v(e,s)},p:ye,d(i){i&&W(e)}}}function DE(t){let e,n,s,i,r,o,a,l=t[13]&&t[14]&&Pc(t),c=t[0].length>0&&Nc(t),u=kE(t);return o=new CE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],totalPagos:t[8],mesSeleccionado:t[7]}}),o.$on("vistaPulsado",t[35]),{c(){e=T("main"),n=T("body"),l&&l.c(),s=V(),c&&c.c(),i=V(),u&&u.c(),r=V(),hn(o.$$.fragment),p(n,"class","svelte-1imwuid"),p(e,"class","svelte-1imwuid")},m(h,d){Q(h,e,d),v(e,n),l&&l.m(n,null),v(n,s),c&&c.m(n,null),v(n,i),u&&u.m(n,null),v(n,r),Vt(o,n,null),a=!0},p(h,d){h[13]&&h[14]?l?l.p(h,d):(l=Pc(h),l.c(),l.m(n,s)):l&&(l.d(1),l=null),h[0].length>0?c?(c.p(h,d),d[0]&1&&Je(c,1)):(c=Nc(h),c.c(),Je(c,1),c.m(n,i)):c&&(jc(),ht(c,1,1,()=>{c=null}),qc()),u.p(h,d);const f={};d[0]&16&&(f.vistaCalculos=h[4]),d[0]&32&&(f.arrayParaLaVista=h[5]),d[0]&256&&(f.totalPagos=h[8]),d[0]&128&&(f.mesSeleccionado=h[7]),o.$set(f)},i(h){a||(Je(c),Je(o.$$.fragment,h),a=!0)},o(h){ht(c),ht(o.$$.fragment,h),a=!1},d(h){h&&W(e),l&&l.d(),c&&c.d(),u&&u.d(),Ut(o)}}}function PE(t,e,n){let s,i,r;nn(t,yi,C=>n(3,s=C)),nn(t,xo,C=>n(13,i=C)),nn(t,Fo,C=>n(14,r=C));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u,h=[],d,f=0;const w=new Date;let m=w.getMonth()+1,y=w.getFullYear(),I=m;console.log(`mesSeleccionado ${I}`);let _=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],P,N,R=0;const le=C=>{if(n(1,P=C.target.value),console.log(o),n(2,N=o.find(we=>we.id===P)),console.log("selectedSession",N),n(9,ae=N.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(10,ie=N.valorSesion),console.log("particular",ie);else{var Y=l.find(we=>we.plan==c);console.log(Y),console.log("OS",ie)}n(12,qe=N.fechaPago),n(11,ue=N.diaSesion)},ee=async()=>{console.log("Add sesion",N);try{const C=await Ad(st(De,"sesiones"),{valorPago:ae,valorSesion:ie,diaSesion:ue,fechaPago:qe,pacienteID:s});console.log("sesion agregada"),Rn({text:"Nueva sesion agregada"}).showToast(),n(1,P=C.id)}catch(C){console.error(C)}},fe=async C=>{console.log("Update sesion",C);try{await Ba(St(De,"sesiones",C.id),{valorPago:ae,valorSesion:ie,fechaPago:qe,diaSesion:ue}),Rn({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Y){console.log(Y)}},q=async C=>{console.log("Delete sesion",C);try{await Do(St(De,"sesiones",C.id)),Rn({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Y){console.error(Y)}};let ae=5e3,ie=5e3,ue=new Date().toISOString().slice(0,10),qe=new Date().toISOString().slice(0,10);m.toString().padStart(2,"0"),y.toString();let he=C=>o.filter(we=>we.pacienteID===C&&we.diaSesion.slice(5,7)===I.toString().padStart(2,"0")).reduce((we,ze)=>we+ze.valorSesion,0);const $e=async C=>{const Y=await He(C);n(5,h=Y[1]),console.log(Array.isArray(Y[1])),console.log(Y[1]),n(4,u=!0)},He=async C=>{C||(C=m);try{const Y=await EE(C);n(8,R=0),f=0;let we=[];return console.log(typeof we),Y.forEach(ze=>{let cf=ze.pacienteID;const lt=a.find(Zt=>Zt.id==cf);var ct=ze.valorPago;if(ct==null&&(ct=0),typeof ct=="number")if(lt.plan=="particular"){n(8,R+=ct),ct<ie&&(f+=ie-ct);var ts={diaSesion:ze.diaSesion,apellido:lt.apellido,nombre:lt.nombre,plan:lt.plan.plan?lt.plan.plan:"particular",valorPago:ct,valorSesion:ze.valorSesion};console.log(ts),console.log(typeof we),we.push(ts)}else{const Zt=lt.plan;var ts={diaSesion:ze.diaSesion,apellido:lt.apellido,nombre:lt.nombre,plan:lt.plan.plan?lt.plan.plan:"particular",valorPago:ct,valorSesion:ze.valorSesion};console.log(ts),console.log(typeof we),we.push(ts),ct<Zt.valorCoseguro&&(f+=Zt.valorCoseguro-ct,console.log(`totalAdeudado: ${f}`)),n(8,R+=Zt.valorOs+ct),console.log(`paciente ${lt.apellido}, fechaSesion: ${ze.diaSesion}, valor Os + Coseguro$${Zt.valorOs+Zt.valorCoseguro}, total acumulado ${R}`)}}),console.log("Total pagos mes actual: ",R),console.log("Total adeudado mes actual: ",f),n(6,d=he(s)),console.log(typeof we),[R,we]}catch(Y){return console.error("Error al obtener las sesiones y los pagos:",Y),[]}};function ne(C){mf.call(this,t,C)}function U(){P=wi(this),n(1,P),n(0,o)}function Ae(){ae=vi(this.value),n(9,ae)}function te(){ie=vi(this.value),n(10,ie)}function Tt(){ue=this.value,n(11,ue)}function mt(){qe=this.value,n(12,qe)}const S=()=>fe(N),ve=()=>q(N),de=async C=>$e(C.target.value);function We(){I=wi(this),n(7,I),n(15,_)}const Jt=async()=>$e(I),ti=async()=>$e(I);return t.$$set=C=>{"sesiones"in C&&n(0,o=C.sesiones),"pacientes"in C&&n(21,a=C.pacientes),"planes"in C&&n(22,l=C.planes),"planSeleccionado"in C&&n(23,c=C.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&6291457&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,N=o.find(C=>C.id===P)),console.log(N||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=he(s))},He(),[o,P,N,s,u,h,d,I,R,ae,ie,ue,qe,i,r,_,le,ee,fe,q,$e,a,l,c,ne,U,Ae,te,Tt,mt,S,ve,de,We,Jt,ti]}class NE extends Gt{constructor(e){super(),Kt(this,e,PE,DE,Nt,{sesiones:0,pacientes:21,planes:22,planSeleccionado:23},null,[-1,-1])}}function OE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f;return a=new wE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Mc}}),u=new NE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Mc}}),{c(){e=T("body"),n=T("button"),n.textContent="generar backup firestore",s=V(),i=T("div"),r=T("h5"),r.textContent="CRUD Pacientes",o=V(),hn(a.$$.fragment),l=V(),c=T("div"),hn(u.$$.fragment),p(i,"class","contenedor-pacientes svelte-1y3ujd1"),p(c,"class","contenedor-sesiones svelte-1y3ujd1"),p(e,"class","svelte-1y3ujd1")},m(w,m){Q(w,e,m),v(e,n),v(e,s),v(e,i),v(i,r),v(i,o),Vt(a,i,null),v(e,l),v(e,c),Vt(u,c,null),h=!0,d||(f=G(n,"click",t[4]),d=!0)},p(w,[m]){const y={};m&4&&(y.sesiones=w[2]),m&8&&(y.pacientes=w[3]),m&1&&(y.planes=w[0]),m&2&&(y.optionsPlan=w[1]),a.$set(y);const I={};m&4&&(I.sesiones=w[2]),m&8&&(I.pacientes=w[3]),m&1&&(I.planes=w[0]),u.$set(I)},i(w){h||(Je(a.$$.fragment,w),Je(u.$$.fragment,w),h=!0)},o(w){ht(a.$$.fragment,w),ht(u.$$.fragment,w),h=!1},d(w){w&&W(e),Ut(a),Ut(u),d=!1,f()}}}let Mc="particular";function RE(t,e,n){let s=[],i=[],r=[],o=[];Vc(()=>{const l=[],c=st(De,"sesiones"),u=st(De,"Pacientes"),h=st(De,"planes"),d=ds(c,jr("diaSesion")),f=ds(u,jr("apellido")),w=ds(h,jr("plan")),m=$r(d,_=>{n(2,s=_.docs.map(P=>({id:P.id,...P.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(m);const y=$r(f,_=>{n(3,i=_.docs.map(P=>({id:P.id,...P.data()})))});l.push(y);const I=$r(w,_=>{n(0,r=_.docs.map(P=>({id:P.id,...P.data()})))});return l.push(I),()=>{l.forEach(_=>_())}});const a=()=>{const l="sesiones"+di().toString()+"BU",c=st(De,l);s.forEach(async w=>{const m=St(c);try{await qr(m,w),console.log("Documento sesion creado exitosamente")}catch(y){console.error("Error al crear el documento sesion:",y)}});const u="planes"+di().toString()+"BU",h=st(De,u);r.forEach(async w=>{const m=St(h);try{await qr(m,w),console.log("Documento plan creado exitosamente")}catch(y){console.error("Error al crear el documento plan:",y)}});const d="Pacientes"+di().toString()+"BU",f=st(De,d);i.forEach(async w=>{const m=St(f);try{await qr(m,w),console.log("Documento paciente creado exitosamente")}catch(y){console.error("Error al crear el documento paciente:",y)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class LE extends Gt{constructor(e){super(),Kt(this,e,RE,OE,Nt,{})}}function ME(t){let e,n,s;return n=new LE({}),{c(){e=T("div"),hn(n.$$.fragment),p(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){Q(i,e,r),Vt(n,e,null),s=!0},p:ye,i(i){s||(Je(n.$$.fragment,i),s=!0)},o(i){ht(n.$$.fragment,i),s=!1},d(i){i&&W(e),Ut(n)}}}function xE(t){let e,n,s,i,r,o;return{c(){e=T("div"),n=T("h1"),n.textContent="ingrese la contraseña:",s=V(),i=T("input"),p(n,"class","svelte-uueu6x"),p(i,"type","password"),p(i,"class","svelte-uueu6x"),p(e,"class","ingreso svelte-uueu6x")},m(a,l){Q(a,e,l),v(e,n),v(e,s),v(e,i),Se(i,t[1]),r||(o=[G(i,"input",t[3]),G(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Se(i,a[1])},i:ye,o:ye,d(a){a&&W(e),r=!1,gt(o)}}}function FE(t){let e,n,s,i;const r=[xE,ME],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=T("main"),s&&s.c(),p(e,"class","svelte-uueu6x")},m(l,c){Q(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(jc(),ht(o[u],1,1,()=>{o[u]=null}),qc()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),Je(s,1),s.m(e,null)):s=null)},i(l){i||(Je(s),i=!0)},o(l){ht(s),i=!1},d(l){l&&W(e),~n&&o[n].d()}}}function BE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class VE extends Gt{constructor(e){super(),Kt(this,e,BE,FE,Nt,{})}}new VE({target:document.getElementById("app")});
