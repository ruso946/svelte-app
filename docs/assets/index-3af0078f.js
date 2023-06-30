(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pe(){}function xc(t){return t()}function Ja(){return Object.create(null)}function gt(t){t.forEach(xc)}function Fc(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function uf(t){return Object.keys(t).length===0}function hf(t,...e){if(t==null)return pe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function sn(t,e,n){t.$$.on_destroy.push(hf(e,n))}function Tn(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function W(t,e,n){t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function Rs(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function $(){return z(" ")}function Vo(){return z("")}function K(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function df(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wi(t){return t===""?null:+t}function ff(t){return Array.from(t.childNodes)}function Ke(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ee(t,e){t.value=e??""}function Vt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function pf(t){for(const e of t.options)if(!e.disabled)return e}function bi(t){const e=t.querySelector(":checked")||pf(t);return e&&e.__value}function si(t,e,n){t.classList[n?"add":"remove"](e)}function gf(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ms;function ls(t){ms=t}function Bc(){if(!ms)throw new Error("Function called outside component initialization");return ms}function Vc(t){Bc().$$.on_mount.push(t)}function Uo(){const t=Bc();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=gf(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function mf(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const In=[],Za=[];let Pn=[];const el=[],yf=Promise.resolve();let Qr=!1;function vf(){Qr||(Qr=!0,yf.then(Uc))}function hn(t){Pn.push(t)}const Ar=new Set;let Cn=0;function Uc(){if(Cn!==0)return;const t=ms;do{try{for(;Cn<In.length;){const e=In[Cn];Cn++,ls(e),wf(e.$$)}}catch(e){throw In.length=0,Cn=0,e}for(ls(null),In.length=0,Cn=0;Za.length;)Za.pop()();for(let e=0;e<Pn.length;e+=1){const n=Pn[e];Ar.has(n)||(Ar.add(n),n())}Pn.length=0}while(In.length);for(;el.length;)el.pop()();Qr=!1,Ar.clear(),ls(t)}function wf(t){if(t.fragment!==null){t.update(),gt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(hn)}}function bf(t){const e=[],n=[];Pn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),Pn=e}const di=new Set;let rn;function jc(){rn={r:0,c:[],p:rn}}function qc(){rn.r||gt(rn.c),rn=rn.p}function Je(t,e){t&&t.i&&(di.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(di.has(t))return;di.add(t),rn.c.push(()=>{di.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function dn(t){t&&t.c()}function Ut(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||hn(()=>{const o=t.$$.on_mount.map(xc).filter(Fc);t.$$.on_destroy?t.$$.on_destroy.push(...o):gt(o),t.$$.on_mount=[]}),r.forEach(hn)}function jt(t,e){const n=t.$$;n.fragment!==null&&(bf(n.after_update),gt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ef(t,e){t.$$.dirty[0]===-1&&(In.push(t),vf(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,s,i,r,o,a=[-1]){const l=ms;ls(t);const c=t.$$={fragment:null,ctx:[],props:r,update:pe,not_equal:i,bound:Ja(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ja(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(h,d,...f)=>{const p=f.length?f[0]:d;return c.ctx&&i(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&Ef(t,h)),d}):[],c.update(),u=!0,gt(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const h=ff(e.target);c.fragment&&c.fragment.l(h),h.forEach(G)}else c.fragment&&c.fragment.c();e.intro&&Je(t.$$.fragment),Ut(t,e.target,e.anchor,e.customElement),Uc()}ls(l)}class Wt{$destroy(){jt(this,1),this.$destroy=pe}$on(e,n){if(!Fc(n))return pe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!uf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let fi=t=>{let e=new Date,n;const s=e.getDate().toString().padStart(2,"0"),i=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0");t>=1&&t<=12?n=t:n=e.getMonth()+1;let o=n.toString().padStart(2,"0"),l=e.getFullYear().toString();const c=`${l}_${o}_${s}_${i}${r}`;let u=`${l}-${o}-01`,h=`${l}-${o}-31`;return{fechaActual:c,fechaInicio:u,fechaFin:h}};function tl(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function nl(t){let e,n=t[12].plan+"",s;return{c(){e=C("option"),s=z(n),e.__value=t[14],e.value=e.__value},m(i,r){W(i,e,r),v(e,s)},p(i,r){r&4&&n!==(n=i[12].plan+"")&&Ke(s,n)},d(i){i&&G(e)}}}function _f(t){let e,n,s,i,r,o,a=t[2],l=[];for(let c=0;c<a.length;c+=1)l[c]=nl(tl(t,a,c));return{c(){e=C("div"),n=C("input"),s=$(),i=C("select");for(let c=0;c<l.length;c+=1)l[c].c();m(n,"type","checkbox"),m(n,"name","CheckBoxParticular"),m(n,"id","CheckBoxParticular"),m(i,"name","plan"),m(i,"id","plan"),m(i,"class","svelte-1de4xhy"),t[1]===void 0&&hn(()=>t[8].call(i)),si(i,"SelectPlanVisible",t[0]),si(i,"SelectPlanHidden",t[3]),m(e,"id","selectPlanContainer"),m(e,"class","svelte-1de4xhy")},m(c,u){W(c,e,u),v(e,n),n.checked=t[0],v(e,s),v(e,i);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(i,null);Vt(i,t[1]),r||(o=[K(n,"change",t[7]),K(n,"change",t[4]),K(i,"change",t[8]),K(i,"change",t[5])],r=!0)},p(c,[u]){if(u&1&&(n.checked=c[0]),u&4){a=c[2];let h;for(h=0;h<a.length;h+=1){const d=tl(c,a,h);l[h]?l[h].p(d,u):(l[h]=nl(d),l[h].c(),l[h].m(i,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=a.length}u&2&&Vt(i,c[1]),u&1&&si(i,"SelectPlanVisible",c[0]),u&8&&si(i,"SelectPlanHidden",c[3])},i:pe,o:pe,d(c){c&&G(e),Rs(l,c),r=!1,gt(o)}}}function Tf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,{indicePlan:o}=e,a;const l=y=>{n(0,r=y)},c=()=>{h("clickCheckPlan",{valor:{SelectPlanVisible:r}})},u=y=>{var b=y.target.checked;l(b),c()},h=Uo(),d=y=>{n(1,o=parseInt(y.target.value)),console.log(`tipo de dato indicePlan: ${typeof o}, indicePlan ${o}`),console.log(`planSeleccionado.plan antes de modificarlo${i.plan}, indicePlan ${o}`),n(6,i=s[o]),console.log(`planSeleccionado.plan despues de modificarlo${i.plan}, indicePlan ${o}`),h("cambioPlan",i)};function f(){r=this.checked,n(0,r)}function p(){o=bi(this),n(1,o)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(6,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible),"indicePlan"in y&&n(1,o=y.indicePlan)},t.$$.update=()=>{t.$$.dirty&1&&n(3,a=!r)},[r,o,s,a,u,d,i,f,p]}class Cf extends Wt{constructor(e){super(),Gt(this,e,Tf,_f,Ot,{planes:2,planSeleccionado:6,SelectPlanVisible:0,indicePlan:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $c=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new If;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class If extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Af=function(t){const e=$c(t);return Hc.encodeByteArray(e,!0)},Ei=function(t){return Af(t).replace(/\./g,"")},kf=function(t){try{return Hc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Pf=()=>Df().__FIREBASE_DEFAULTS__,Nf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Of=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kf(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return Pf()||Nf()||Of()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rf=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zc=t=>{const e=Rf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Lf=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Gc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ei(JSON.stringify(n)),Ei(JSON.stringify(o)),a].join(".")}function xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ff(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Bf,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wc.prototype.create)}}class Wc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,s)}}function Vf(t,e){return t.replace(Uf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Uf=/\{\$([^}]+)}/g;function Yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(sl(r)&&sl(o)){if(!Yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function sl(t){return t!==null&&typeof t=="object"}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class jf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($f(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qf(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qf(t){return t===nn?void 0:t}function $f(t){return t.instantiationMode==="EAGER"}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Kf={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},zf=Y.INFO,Gf={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Wf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Gf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=zf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Qf=(t,e)=>e.some(n=>t instanceof n);let il,rl;function Yf(){return il||(il=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xf(){return rl||(rl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yc=new WeakMap,Xr=new WeakMap,Xc=new WeakMap,kr=new WeakMap,jo=new WeakMap;function Jf(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yc.set(n,t)}).catch(()=>{}),jo.set(e,t),e}function Zf(t){if(Xr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Xr.set(t,e)}let Jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ep(t){Jr=t(Jr)}function tp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Dr(this),e,...n);return Xc.set(s,e.sort?e.sort():[e]),Lt(s)}:Xf().includes(t)?function(...e){return t.apply(Dr(this),e),Lt(Yc.get(this))}:function(...e){return Lt(t.apply(Dr(this),e))}}function np(t){return typeof t=="function"?tp(t):(t instanceof IDBTransaction&&Zf(t),Qf(t,Yf())?new Proxy(t,Jr):t)}function Lt(t){if(t instanceof IDBRequest)return Jf(t);if(kr.has(t))return kr.get(t);const e=np(t);return e!==t&&(kr.set(t,e),jo.set(e,t)),e}const Dr=t=>jo.get(t);function sp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Lt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Lt(o.result),l.oldVersion,l.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ip=["get","getKey","getAll","getAllKeys","count"],rp=["put","add","delete","clear"],Pr=new Map;function ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pr.get(e))return Pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=rp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ip.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Pr.set(e,r),r}ep(t=>({...t,get:(e,n,s)=>ol(e,n)||t.get(e,n,s),has:(e,n)=>!!ol(e,n)||t.has(e,n)}));/**
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
 */class op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ap(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ap(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zr="@firebase/app",al="0.9.4";/**
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
 */const fn=new Qc("@firebase/app"),lp="@firebase/app-compat",cp="@firebase/analytics-compat",up="@firebase/analytics",hp="@firebase/app-check-compat",dp="@firebase/app-check",fp="@firebase/auth",pp="@firebase/auth-compat",gp="@firebase/database",mp="@firebase/database-compat",yp="@firebase/functions",vp="@firebase/functions-compat",wp="@firebase/installations",bp="@firebase/installations-compat",Ep="@firebase/messaging",_p="@firebase/messaging-compat",Tp="@firebase/performance",Cp="@firebase/performance-compat",Sp="@firebase/remote-config",Ip="@firebase/remote-config-compat",Ap="@firebase/storage",kp="@firebase/storage-compat",Dp="@firebase/firestore",Pp="@firebase/firestore-compat",Np="firebase",Op="9.17.2";/**
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
 */const eo="[DEFAULT]",Rp={[Zr]:"fire-core",[lp]:"fire-core-compat",[up]:"fire-analytics",[cp]:"fire-analytics-compat",[dp]:"fire-app-check",[hp]:"fire-app-check-compat",[fp]:"fire-auth",[pp]:"fire-auth-compat",[gp]:"fire-rtdb",[mp]:"fire-rtdb-compat",[yp]:"fire-fn",[vp]:"fire-fn-compat",[wp]:"fire-iid",[bp]:"fire-iid-compat",[Ep]:"fire-fcm",[_p]:"fire-fcm-compat",[Tp]:"fire-perf",[Cp]:"fire-perf-compat",[Sp]:"fire-rc",[Ip]:"fire-rc-compat",[Ap]:"fire-gcs",[kp]:"fire-gcs-compat",[Dp]:"fire-fst",[Pp]:"fire-fst-compat","fire-js":"fire-js",[Np]:"fire-js-all"};/**
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
 */const _i=new Map,to=new Map;function Lp(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(to.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,t);for(const n of _i.values())Lp(n,t);return!0}function Jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Mt=new Wc("app","Firebase",Mp);/**
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
 */class xp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zc=Op;function eu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=Lf()),!n)throw Mt.create("no-options");const r=_i.get(i);if(r){if(Yr(n,r.options)&&Yr(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new Hf(i);for(const l of to.values())o.addComponent(l);const a=new xp(n,s,o);return _i.set(i,a),a}function tu(t=eo){const e=_i.get(t);if(!e&&t===eo)return eu();if(!e)throw Mt.create("no-app",{appName:t});return e}function xt(t,e,n){var s;let i=(s=Rp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}ys(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fp="firebase-heartbeat-database",Bp=1,vs="firebase-heartbeat-store";let Nr=null;function nu(){return Nr||(Nr=sp(Fp,Bp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vs)}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Nr}async function Vp(t){try{return(await nu()).transaction(vs).objectStore(vs).get(su(t))}catch(e){if(e instanceof vn)fn.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function ll(t,e){try{const s=(await nu()).transaction(vs,"readwrite");return await s.objectStore(vs).put(e,su(t)),s.done}catch(n){if(n instanceof vn)fn.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(s.message)}}}function su(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Up=1024,jp=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=cl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=cl(),{heartbeatsToSend:n,unsentEntries:s}=$p(this._heartbeatsCache.heartbeats),i=Ei(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cl(){return new Date().toISOString().substring(0,10)}function $p(t,e=Up){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ul(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ul(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?Ff().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ul(t){return Ei(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kp(t){ys(new Fn("platform-logger",e=>new op(e),"PRIVATE")),ys(new Fn("heartbeat",e=>new qp(e),"PRIVATE")),xt(Zr,al,t),xt(Zr,al,"esm2017"),xt("fire-js","")}Kp("");var zp="firebase",Gp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(zp,Gp,"app");var Wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,qo=qo||{},L=Wp||self;function Ti(){}function qi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Qp(t){return Object.prototype.hasOwnProperty.call(t,Or)&&t[Or]||(t[Or]=++Yp)}var Or="closure_uid_"+(1e9*Math.random()>>>0),Yp=0;function Xp(t,e,n){return t.call.apply(t.bind,arguments)}function Jp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=Xp:Me=Jp,Me.apply(null,arguments)}function ii(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Pe(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Qt(){this.s=this.s,this.o=this.o}var Zp=0;Qt.prototype.s=!1;Qt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Zp!=0)&&Qp(this)};Qt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $o(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function hl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qi(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var eg=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",Ti,e),L.removeEventListener("test",Ti,e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}var dl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rr(t,e){return t<e?-1:t>e?1:0}function $i(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function vt(t){return $i().indexOf(t)!=-1}function Ho(t){return Ho[" "](t),t}Ho[" "]=Ti;function tg(t){var e=ig;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ng=vt("Opera"),Bn=vt("Trident")||vt("MSIE"),ru=vt("Edge"),no=ru||Bn,ou=vt("Gecko")&&!($i().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge"))&&!(vt("Trident")||vt("MSIE"))&&!vt("Edge"),sg=$i().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge");function au(){var t=L.document;return t?t.documentMode:void 0}var Si;e:{var Lr="",Mr=function(){var t=$i();if(ou)return/rv:([^\);]+)(\)|;)/.exec(t);if(ru)return/Edge\/([\d\.]+)/.exec(t);if(Bn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sg)return/WebKit\/(\S+)/.exec(t);if(ng)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mr&&(Lr=Mr?Mr[1]:""),Bn){var xr=au();if(xr!=null&&xr>parseFloat(Lr)){Si=String(xr);break e}}Si=Lr}var ig={};function rg(){return tg(function(){let t=0;const e=dl(String(Si)).split("."),n=dl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Rr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Rr(i[2].length==0,r[2].length==0)||Rr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var so;if(L.document&&Bn){var fl=au();so=fl||parseInt(Si,10)||void 0}else so=void 0;var og=so;function ws(t,e){if(xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ou){e:{try{Ho(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ag[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ws.X.h.call(this)}}Pe(ws,xe);var ag={2:"touch",3:"pen",4:"mouse"};ws.prototype.h=function(){ws.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ms="closure_listenable_"+(1e6*Math.random()|0),lg=0;function cg(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++lg,this.ba=this.ea=!1}function Hi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ko(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function lu(t){const e={};for(const n in t)e[n]=t[n];return e}const pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cu(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<pl.length;r++)n=pl[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ki(t){this.src=t,this.g={},this.h=0}Ki.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ro(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new cg(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=iu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ro(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var zo="closure_lm_"+(1e6*Math.random()|0),Fr={};function uu(t,e,n,s,i){if(s&&s.once)return du(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)uu(t,e[r],n,s,i);return null}return n=Qo(n),t&&t[Ms]?t.N(e,n,Ls(s)?!!s.capture:!!s,i):hu(t,e,n,!1,s,i)}function hu(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ls(i)?!!i.capture:!!i,a=Wo(t);if(a||(t[zo]=a=new Ki(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ug(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)eg||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(pu(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ug(){function t(n){return e.call(t.src,t.listener,n)}const e=hg;return t}function du(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)du(t,e[r],n,s,i);return null}return n=Qo(n),t&&t[Ms]?t.O(e,n,Ls(s)?!!s.capture:!!s,i):hu(t,e,n,!0,s,i)}function fu(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)fu(t,e[r],n,s,i);else s=Ls(s)?!!s.capture:!!s,n=Qo(n),t&&t[Ms]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ro(r,n,s,i),-1<n&&(Hi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ro(e,n,s,i)),(n=-1<t?e[t]:null)&&Go(n))}function Go(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ms])io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pu(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wo(e))?(io(n,t),n.h==0&&(n.src=null,e[zo]=null)):Hi(t)}}}function pu(t){return t in Fr?Fr[t]:Fr[t]="on"+t}function hg(t,e){if(t.ba)t=!0;else{e=new ws(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Go(t),t=n.call(s,e)}return t}function Wo(t){return t=t[zo],t instanceof Ki?t:null}var Br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(t){return typeof t=="function"?t:(t[Br]||(t[Br]=function(e){return t.handleEvent(e)}),t[Br])}function _e(){Qt.call(this),this.i=new Ki(this),this.P=this,this.I=null}Pe(_e,Qt);_e.prototype[Ms]=!0;_e.prototype.removeEventListener=function(t,e,n,s){fu(this,t,e,n,s)};function ke(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new xe(e,t);else if(e instanceof xe)e.target=e.target||t;else{var i=e;e=new xe(s,t),cu(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ri(o,s,!0,e)&&i}if(o=e.g=t,i=ri(o,s,!0,e)&&i,i=ri(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ri(o,s,!1,e)&&i}_e.prototype.M=function(){if(_e.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hi(n[s]);delete t.g[e],t.h--}}this.I=null};_e.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};_e.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ri(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&io(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Yo=L.JSON.stringify;function dg(){var t=yu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fg{constructor(){this.h=this.g=null}add(e,n){const s=gu.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var gu=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new pg,t=>t.reset());class pg{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gg(t){L.setTimeout(()=>{throw t},0)}function mu(t,e){oo||mg(),ao||(oo(),ao=!0),yu.add(t,e)}var oo;function mg(){var t=L.Promise.resolve(void 0);oo=function(){t.then(yg)}}var ao=!1,yu=new fg;function yg(){for(var t;t=dg();){try{t.h.call(t.g)}catch(n){gg(n)}var e=gu;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ao=!1}function zi(t,e){_e.call(this),this.h=t||1,this.g=e||L,this.j=Me(this.lb,this),this.l=Date.now()}Pe(zi,_e);A=zi.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Xo(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){zi.X.M.call(this),Xo(this),delete this.g};function Jo(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function vu(t){t.g=Jo(()=>{t.g=null,t.i&&(t.i=!1,vu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class vg extends Qt{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){Qt.call(this),this.h=t,this.g={}}Pe(bs,Qt);var gl=[];function wu(t,e,n,s){Array.isArray(n)||(n&&(gl[0]=n.toString()),n=gl);for(var i=0;i<n.length;i++){var r=uu(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function bu(t){Ko(t.g,function(e,n){this.g.hasOwnProperty(n)&&Go(e)},t),t.g={}}bs.prototype.M=function(){bs.X.M.call(this),bu(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Gi(){this.g=!0}Gi.prototype.Aa=function(){this.g=!1};function wg(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Dn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+_g(t,n)+(s?" "+s:"")})}function Eg(t,e){t.info(function(){return"TIMEOUT: "+e})}Gi.prototype.info=function(){};function _g(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yo(n)}catch{return e}}var wn={},ml=null;function Wi(){return ml=ml||new _e}wn.Pa="serverreachability";function Eu(t){xe.call(this,wn.Pa,t)}Pe(Eu,xe);function Es(t){const e=Wi();ke(e,new Eu(e))}wn.STAT_EVENT="statevent";function _u(t,e){xe.call(this,wn.STAT_EVENT,t),this.stat=e}Pe(_u,xe);function ze(t){const e=Wi();ke(e,new _u(e,t))}wn.Qa="timingevent";function Tu(t,e){xe.call(this,wn.Qa,t),this.size=e}Pe(Tu,xe);function xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Qi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zo(){}Zo.prototype.h=null;function yl(t){return t.h||(t.h=t.i())}function Su(){}var Fs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ea(){xe.call(this,"d")}Pe(ea,xe);function ta(){xe.call(this,"c")}Pe(ta,xe);var lo;function Yi(){}Pe(Yi,Zo);Yi.prototype.g=function(){return new XMLHttpRequest};Yi.prototype.i=function(){return{}};lo=new Yi;function Bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new bs(this),this.O=Tg,t=no?125:void 0,this.T=new zi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var Tg=45e3,co={},Ii={};A=Bs.prototype;A.setTimeout=function(t){this.O=t};function uo(t,e,n){t.K=1,t.v=Ji(kt(e)),t.s=n,t.P=!0,Au(t,null)}function Au(t,e){t.F=Date.now(),Vs(t),t.A=kt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Mu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Iu,t.g=nh(t.l,n?e:null,!t.s),0<t.N&&(t.L=new vg(Me(t.La,t,t.g),t.N)),wu(t.S,t.g,"readystatechange",t.ib),e=t.H?lu(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Es(),wg(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&St(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const u=St(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||no||this.g&&(this.h.h||this.g.fa()||El(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Es(3):Es(2)),Xi(this);var n=this.g.aa();this.Y=n;t:if(ku(this)){var s=El(this.g);t="";var i=s.length,r=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){on(this),cs(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var c=a;break t}}c=null}if(n=c)Dn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ho(this,n);else{this.i=!1,this.o=3,ze(12),on(this),cs(this);break e}}this.P?(Du(this,u,o),no&&this.i&&u==3&&(wu(this.S,this.T,"tick",this.hb),this.T.start())):(Dn(this.j,this.m,o,null),ho(this,o)),u==4&&on(this),this.i&&!this.I&&(u==4?Ju(this.l,this):(this.i=!1,Vs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),on(this),cs(this)}}}catch{}finally{}};function ku(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Du(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Cg(t,n),i==Ii){e==4&&(t.o=4,ze(14),s=!1),Dn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==co){t.o=4,ze(15),Dn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Dn(t.j,t.m,i,null),ho(t,i);ku(t)&&i!=Ii&&i!=co&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),la(e),e.K=!0,ze(11))):(Dn(t.j,t.m,n,"[Invalid Chunked Response]"),on(t),cs(t))}A.hb=function(){if(this.g){var t=St(this.g),e=this.g.fa();this.C<e.length&&(Xi(this),Du(this,t,e),this.i&&t!=4&&Vs(this))}};function Cg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ii:(n=Number(e.substring(n,s)),isNaN(n)?co:(s+=1,s+n>e.length?Ii:(e=e.substr(s,n),t.C=s+n,e)))}A.cancel=function(){this.I=!0,on(this)};function Vs(t){t.V=Date.now()+t.O,Pu(t,t.O)}function Pu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xs(Me(t.gb,t),e)}function Xi(t){t.B&&(L.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Eg(this.j,this.A),this.K!=2&&(Es(),ze(17)),on(this),this.o=2,cs(this)):Pu(this,this.V-t)};function cs(t){t.l.G==0||t.I||Ju(t.l,t)}function on(t){Xi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xo(t.T),bu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ho(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fo(n.h,t))){if(!t.J&&fo(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Di(n),tr(n);else break e;aa(n),ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xs(Me(n.cb,n),6e3));if(1>=Bu(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else an(n,11)}else if((t.J||n.g==t)&&Di(n),!Ci(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=s.h;r.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(na(r,r.h),r.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,oe(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=th(s,s.H?s.ka:null,s.V),o.J){Vu(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Xi(a),Vs(a)),s.g=o}else Yu(s);0<n.i.length&&nr(n)}else c[0]!="stop"&&c[0]!="close"||an(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?an(n,7):oa(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Es(4)}catch{}}function Sg(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qi(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ig(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Nu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ig(t),s=Sg(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ag(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cn){this.h=e!==void 0?e:t.h,Ai(this,t.j),this.s=t.s,this.g=t.g,ki(this,t.m),this.l=t.l,e=t.i;var n=new _s;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vl(this,n),this.o=t.o}else t&&(n=String(t).match(Ou))?(this.h=!!e,Ai(this,n[1]||"",!0),this.s=is(n[2]||""),this.g=is(n[3]||"",!0),ki(this,n[4]),this.l=is(n[5]||"",!0),vl(this,n[6]||"",!0),this.o=is(n[7]||"")):(this.h=!!e,this.i=new _s(null,this.h))}cn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rs(e,wl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rs(e,wl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rs(n,n.charAt(0)=="/"?Pg:Dg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rs(n,Og)),t.join("")};function kt(t){return new cn(t)}function Ai(t,e,n){t.j=n?is(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ki(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vl(t,e,n){e instanceof _s?(t.i=e,Rg(t.i,t.h)):(n||(e=rs(e,Ng)),t.i=new _s(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Ji(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function is(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function rs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wl=/[#\/\?@]/g,Dg=/[#\?:]/g,Pg=/[#\?]/g,Ng=/[#\?@]/g,Og=/#/g;function _s(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yt(t){t.g||(t.g=new Map,t.h=0,t.i&&Ag(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=_s.prototype;A.add=function(t,e){Yt(this),this.i=null,t=Gn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ru(t,e){Yt(t),e=Gn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lu(t,e){return Yt(t),e=Gn(t,e),t.g.has(e)}A.forEach=function(t,e){Yt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};A.oa=function(){Yt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};A.W=function(t){Yt(this);let e=[];if(typeof t=="string")Lu(this,t)&&(e=e.concat(this.g.get(Gn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Yt(this),this.i=null,t=Gn(this,t),Lu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mu(t,e,n){Ru(t,e),0<n.length&&(t.i=null,t.g.set(Gn(t,e),$o(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Rg(t,e){e&&!t.j&&(Yt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Ru(this,s),Mu(this,i,n))},t)),t.j=e}var Lg=class{constructor(e,n){this.h=e,this.g=n}};function xu(t){this.l=t||Mg,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mg=10;function Fu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Bu(t){return t.h?1:t.g?t.g.size:0}function fo(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function na(t,e){t.g?t.g.add(e):t.h=e}function Vu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xu.prototype.cancel=function(){if(this.i=Uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Uu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $o(t.i)}function sa(){}sa.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};sa.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function xg(){this.g=new sa}function Fg(t,e,n){const s=n||"";try{Nu(t,function(i,r){let o=i;Ls(i)&&(o=Yo(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Bg(t,e){const n=new Gi;if(L.Image){const s=new Image;s.onload=ii(oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ii(oi,n,s,"TestLoadImage: error",!1,e),s.onabort=ii(oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ii(oi,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function oi(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Us(t){this.l=t.ac||null,this.j=t.jb||!1}Pe(Us,Zo);Us.prototype.g=function(){return new Zi(this.l,this.j)};Us.prototype.i=function(t){return function(){return t}}({});function Zi(t,e){_e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ia,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Pe(Zi,_e);var ia=0;A=Zi.prototype;A.open=function(t,e){if(this.readyState!=ia)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ts(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=ia};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ju(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ju(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):Ts(this),this.readyState==3&&ju(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,js(this))};A.Ua=function(t){this.g&&(this.response=t,js(this))};A.ga=function(){this.g&&js(this)};function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ts(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ts(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vg=L.JSON.parse;function ae(t){_e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qu,this.K=this.L=!1}Pe(ae,_e);var qu="",Ug=/^https?$/i,jg=["POST","PUT"];A=ae.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?yl(this.u):yl(lo),this.g.onreadystatechange=Me(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){bl(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=iu(jg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ku(this),0<this.B&&((this.K=qg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.qa,this)):this.A=Jo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){bl(this,r)}};function qg(t){return Bn&&rg()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof qo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function bl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$u(t),er(t)}function $u(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),er(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),er(this,!0)),ae.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?Hu(this):this.fb())};A.fb=function(){Hu(this)};function Hu(t){if(t.h&&typeof qo<"u"&&(!t.C[1]||St(t)!=4||t.aa()!=2)){if(t.v&&St(t)==4)Jo(t.Ha,0,t);else if(ke(t,"readystatechange"),St(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(Ou)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ug.test(i?i.toLowerCase():"")}n=s}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<St(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",$u(t)}}finally{er(t)}}}}function er(t,e){if(t.g){Ku(t);const n=t.g,s=t.C[0]?Ti:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ku(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function St(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vg(e)}};function El(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zu(t){let e="";return Ko(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ra(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Gu(t){this.Ca=0,this.i=[],this.j=new Gi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ss("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ss("baseRetryDelayMs",5e3,t),this.bb=ss("retryDelaySeedMs",1e4,t),this.$a=ss("forwardChannelMaxRetries",2,t),this.ta=ss("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new xu(t&&t.concurrentRequestLimit),this.Fa=new xg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=Gu.prototype;A.ma=8;A.G=1;function oa(t){if(Wu(t),t.G==3){var e=t.U++,n=kt(t.F);oe(n,"SID",t.I),oe(n,"RID",e),oe(n,"TYPE","terminate"),qs(t,n),e=new Bs(t,t.j,e,void 0),e.K=2,e.v=Ji(kt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=nh(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vs(e)}eh(t)}function tr(t){t.g&&(la(t),t.g.cancel(),t.g=null)}function Wu(t){tr(t),t.u&&(L.clearTimeout(t.u),t.u=null),Di(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function nr(t){Fu(t.h)||t.m||(t.m=!0,mu(t.Ja,t),t.C=0)}function $g(t,e){return Bu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xs(Me(t.Ja,t,e),Zu(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bs(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=lu(r),cu(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qu(this,i,e),n=kt(this.F),oe(n,"RID",t),oe(n,"CVER",22),this.D&&oe(n,"X-HTTP-Session-Id",this.D),qs(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(zu(r)))+"&"+e:this.o&&ra(n,this.o,r)),na(this.h,i),this.Ya&&oe(n,"TYPE","init"),this.O?(oe(n,"$req",e),oe(n,"SID","null"),i.Z=!0,uo(i,n,null)):uo(i,n,e),this.G=2}}else this.G==3&&(t?_l(this,t):this.i.length==0||Fu(this.h)||_l(this))};function _l(t,e){var n;e?n=e.m:n=t.U++;const s=kt(t.F);oe(s,"SID",t.I),oe(s,"RID",n),oe(s,"AID",t.T),qs(t,s),t.o&&t.s&&ra(s,t.o,t.s),n=new Bs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),na(t.h,n),uo(n,s,e)}function qs(t,e){t.ia&&Ko(t.ia,function(n,s){oe(e,s,n)}),t.l&&Nu({},function(n,s){oe(e,s,n)})}function Qu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Me(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Fg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Yu(t){t.g||t.u||(t.Z=1,mu(t.Ia,t),t.A=0)}function aa(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xs(Me(t.Ia,t),Zu(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,Xu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xs(Me(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),tr(this),Xu(this))};function la(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Xu(t){t.g=new Bs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=kt(t.sa);oe(e,"RID","rpc"),oe(e,"SID",t.I),oe(e,"CI",t.L?"0":"1"),oe(e,"AID",t.T),oe(e,"TYPE","xmlhttp"),qs(t,e),t.o&&t.s&&ra(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ji(kt(e)),n.s=null,n.P=!0,Au(n,t)}A.cb=function(){this.v!=null&&(this.v=null,tr(this),aa(this),ze(19))};function Di(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function Ju(t,e){var n=null;if(t.g==e){Di(t),la(t),t.g=null;var s=2}else if(fo(t.h,e))n=e.D,Vu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Wi(),ke(s,new Tu(s,n)),nr(t)}else Yu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&$g(t,e)||s==2&&aa(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:an(t,5);break;case 4:an(t,10);break;case 3:an(t,6);break;default:an(t,2)}}}function Zu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function an(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Me(t.kb,t);n||(n=new cn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ai(n,"https"),Ji(n)),Bg(n.toString(),s)}else ze(2);t.G=0,t.l&&t.l.va(e),eh(t),Wu(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function eh(t){if(t.G=0,t.la=[],t.l){const e=Uu(t.h);(e.length!=0||t.i.length!=0)&&(hl(t.la,e),hl(t.la,t.i),t.h.i.length=0,$o(t.i),t.i.length=0),t.l.ua()}}function th(t,e,n){var s=n instanceof cn?kt(n):new cn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ki(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new cn(null,void 0);s&&Ai(r,s),e&&(r.g=e),i&&ki(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&oe(s,n,e),oe(s,"VER",t.ma),qs(t,s),s}function nh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ae(new Us({jb:!0})):new ae(t.ra),e.Ka(t.H),e}function sh(){}A=sh.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function Pi(){if(Bn&&!(10<=Number(og)))throw Error("Environmental error: no available transport.")}Pi.prototype.g=function(t,e){return new tt(t,e)};function tt(t,e){_e.call(this),this.g=new Gu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wn(this)}Pe(tt,_e);tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=th(t,null,t.V),nr(t)};tt.prototype.close=function(){oa(this.g)};tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Yo(t),t=n);e.i.push(new Lg(e.ab++,t)),e.G==3&&nr(e)};tt.prototype.M=function(){this.g.l=null,delete this.j,oa(this.g),delete this.g,tt.X.M.call(this)};function ih(t){ea.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Pe(ih,ea);function rh(){ta.call(this),this.status=1}Pe(rh,ta);function Wn(t){this.g=t}Pe(Wn,sh);Wn.prototype.xa=function(){ke(this.g,"a")};Wn.prototype.wa=function(t){ke(this.g,new ih(t))};Wn.prototype.va=function(t){ke(this.g,new rh)};Wn.prototype.ua=function(){ke(this.g,"b")};Pi.prototype.createWebChannel=Pi.prototype.g;tt.prototype.send=tt.prototype.u;tt.prototype.open=tt.prototype.m;tt.prototype.close=tt.prototype.close;Qi.NO_ERROR=0;Qi.TIMEOUT=8;Qi.HTTP_ERROR=6;Cu.COMPLETE="complete";Su.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";_e.prototype.listen=_e.prototype.N;ae.prototype.listenOnce=ae.prototype.O;ae.prototype.getLastError=ae.prototype.Oa;ae.prototype.getLastErrorCode=ae.prototype.Ea;ae.prototype.getStatus=ae.prototype.aa;ae.prototype.getResponseJson=ae.prototype.Sa;ae.prototype.getResponseText=ae.prototype.fa;ae.prototype.send=ae.prototype.da;ae.prototype.setWithCredentials=ae.prototype.Ka;var Hg=function(){return new Pi},Kg=function(){return Wi()},Vr=Qi,zg=Cu,Gg=wn,Tl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Wg=Us,ai=Su,Qg=ae;const Cl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pn=new Qc("@firebase/firestore");function Sl(){return pn.logLevel}function D(t,...e){if(pn.logLevel<=Y.DEBUG){const n=e.map(ca);pn.debug(`Firestore (${Qn}): ${t}`,...n)}}function Dt(t,...e){if(pn.logLevel<=Y.ERROR){const n=e.map(ca);pn.error(`Firestore (${Qn}): ${t}`,...n)}}function po(t,...e){if(pn.logLevel<=Y.WARN){const n=e.map(ca);pn.warn(`Firestore (${Qn}): ${t}`,...n)}}function ca(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function R(t="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+t;throw Dt(e),new Error(e)}function ne(t,e){t||R()}function x(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class Xg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Jg{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ft)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ne(typeof s.accessToken=="string"),new oh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string"),new Ne(e)}}class Zg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class em{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Zg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nm{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ne(typeof n.token=="string"),this.A=n.token,new tm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ah{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=sm(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function X(t,e){return t<e?-1:t>e?1:0}function Vn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.timestamp=e}static fromTimestamp(e){return new M(e)}static min(){return new M(new ye(0,0))}static max(){return new M(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,s){n===void 0?n=0:n>e.length&&R(),s===void 0?s=e.length-n:s>e.length-n&&R(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Cs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Cs{construct(e,n,s){return new ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(w.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const im=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends Cs{construct(e,n,s){return new Re(e,n,s)}static isValidIdentifier(e){return im.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new I(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ie.fromString(e))}static fromName(e){return new P(ie.fromString(e).popFirst(5))}static empty(){return new P(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ie(e.slice()))}}function rm(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new qt(i,P.empty(),e)}function om(t){return new qt(t.readTime,t.key,-1)}class qt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(M.min(),P.empty(),-1)}static max(){return new qt(M.max(),P.empty(),-1)}}function am(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function $s(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==lm)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,s)=>{n(e)})}static reject(e){return new E((n,s)=>{s(e)})}static waitFor(e){return new E((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=E.resolve(!1);for(const s of e)n=n.next(i=>i?E.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new E((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new E((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ua.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){return t==null}function Ni(t){return t===0&&1/t==-1/0}function hm(t){return typeof t=="number"&&Number.isInteger(t)&&!Ni(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new dm("Invalid base64 string: "+i):i}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const fm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(t){if(ne(!!t),typeof t=="string"){let e=0;const n=fm.exec(t);if(ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Un(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uh(t){const e=t.mapValue.fields.__previous_value__;return ch(e)?uh(e):e}function Is(t){const e=$t(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ch(t)?4:pm(t)?9007199254740991:10:R()}function bt(t,e){if(t===e)return!0;const n=gn(t);if(n!==gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Is(t).isEqual(Is(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=$t(s.timestampValue),o=$t(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=de(s.doubleValue),o=de(i.doubleValue);return r===o?Ni(r)===Ni(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Vn(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Il(r)!==Il(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!bt(r[a],o[a])))return!1;return!0}(t,e);default:return R()}}function As(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function jn(t,e){if(t===e)return 0;const n=gn(t),s=gn(e);if(n!==s)return X(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=de(i.integerValue||i.doubleValue),a=de(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Al(t.timestampValue,e.timestampValue);case 4:return Al(Is(t),Is(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Un(i),a=Un(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=X(o[l],a[l]);if(c!==0)return c}return X(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=X(de(i.latitude),de(r.latitude));return o!==0?o:X(de(i.longitude),de(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=jn(o[l],a[l]);if(c)return c}return X(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===li.mapValue&&r===li.mapValue)return 0;if(i===li.mapValue)return 1;if(r===li.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=X(a[u],c[u]);if(h!==0)return h;const d=jn(o[a[u]],l[c[u]]);if(d!==0)return d}return X(a.length,c.length)}(t.mapValue,e.mapValue);default:throw R()}}function Al(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=$t(t),s=$t(e),i=X(n.seconds,s.seconds);return i!==0?i:X(n.nanos,s.nanos)}function qn(t){return go(t)}function go(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=$t(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Un(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=go(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${go(s.fields[a])}`;return r+"}"}(t.mapValue):R();var e,n}function kl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mo(t){return!!t&&"integerValue"in t}function ha(t){return!!t&&"arrayValue"in t}function Dl(t){return!!t&&"nullValue"in t}function Pl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pi(t){return!!t&&"mapValue"in t}function us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=us(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Oi{constructor(e,n){this.position=e,this.inclusive=n}}function Nl(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=P.comparator(P.fromName(o.referenceValue),n.key):s=jn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ol(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class hh{}class fe extends hh{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new mm(e,n,s):n==="array-contains"?new wm(e,s):n==="in"?new bm(e,s):n==="not-in"?new Em(e,s):n==="array-contains-any"?new _m(e,s):new fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ym(e,s):new vm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jn(n,this.value)):n!==null&&gn(this.value)===gn(n)&&this.matchesComparison(jn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends hh{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new ft(e,n)}matches(e){return dh(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dh(t){return t.op==="and"}function fh(t){return gm(t)&&dh(t)}function gm(t){for(const e of t.filters)if(e instanceof ft)return!1;return!0}function yo(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+qn(t.value);if(fh(t))return t.filters.map(e=>yo(e)).join(",");{const e=t.filters.map(n=>yo(n)).join(",");return`${t.op}(${e})`}}function ph(t,e){return t instanceof fe?function(n,s){return s instanceof fe&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(t,e):t instanceof ft?function(n,s){return s instanceof ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&ph(r,s.filters[o]),!0):!1}(t,e):void R()}function gh(t){return t instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${qn(e.value)}`}(t):t instanceof ft?function(e){return e.op.toString()+" {"+e.getFilters().map(gh).join(" ,")+"}"}(t):"Filter"}class mm extends fe{constructor(e,n,s){super(e,n,s),this.key=P.fromName(s.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class ym extends fe{constructor(e,n){super(e,"in",n),this.keys=mh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vm extends fe{constructor(e,n){super(e,"not-in",n),this.keys=mh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>P.fromName(s.referenceValue))}class wm extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ha(n)&&As(n.arrayValue,this.value)}}class bm extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class Em extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class _m extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>As(this.value.arrayValue,s))}}/**
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
 */class Nn{constructor(e,n="asc"){this.field=e,this.dir=n}}function Tm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ie.EMPTY,this.right=r??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(e){return new Rl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Rl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ze([])}unionWith(e){let n=new ve(Re.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ze(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!pi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(n)}setAll(e){let n=Re.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=us(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());pi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];pi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){bn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ye(us(this.value))}}function yh(t){const e=[];return bn(t.fields,(n,s)=>{const i=new Re([n]);if(pi(s)){const r=yh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,M.min(),M.min(),M.min(),Ye.empty(),0)}static newFoundDocument(e,n,s,i){return new Oe(e,1,n,M.min(),s,i,0)}static newNoDocument(e,n){return new Oe(e,2,n,M.min(),M.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,M.min(),M.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Ll(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Cm(t,e,n,s,i,r,o)}function da(t){const e=x(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yo(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),sr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qn(s)).join(",")),e._t=n}return e._t}function fa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Tm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ph(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ol(t.startAt,e.startAt)&&Ol(t.endAt,e.endAt)}function vo(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Sm(t,e,n,s,i,r,o,a){return new Yn(t,e,n,s,i,r,o,a)}function pa(t){return new Yn(t)}function Ml(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ga(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ir(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vh(t){return t.collectionGroup!==null}function On(t){const e=x(t);if(e.wt===null){e.wt=[];const n=ir(e),s=ga(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Nn(n)),e.wt.push(new Nn(Re.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Nn(Re.keyField(),r))}}}return e.wt}function Pt(t){const e=x(t);if(!e.gt)if(e.limitType==="F")e.gt=Ll(e.path,e.collectionGroup,On(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of On(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Nn(r.field,o))}const s=e.endAt?new Oi(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oi(e.startAt.position,e.startAt.inclusive):null;e.gt=Ll(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function wo(t,e){e.getFirstInequalityField(),ir(t);const n=t.filters.concat([e]);return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bo(t,e,n){return new Yn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rr(t,e){return fa(Pt(t),Pt(e))&&t.limitType===e.limitType}function wh(t){return`${da(Pt(t))}|lt:${t.limitType}`}function Eo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gh(s)).join(", ")}]`),sr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>qn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>qn(s)).join(",")),`Target(${n})`}(Pt(t))}; limitType=${t.limitType})`}function or(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of On(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Nl(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,On(n),s)||n.endAt&&!function(i,r,o){const a=Nl(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,On(n),s))}(t,e)}function Im(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bh(t){return(e,n)=>{let s=!1;for(const i of On(t)){const r=Am(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Am(t,e,n){const s=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?jn(a,l):R()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return R()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(e)?"-0":e}}function _h(t){return{integerValue:""+t}}function km(t,e){return hm(e)?_h(e):Eh(t,e)}/**
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
 */class ar{constructor(){this._=void 0}}function Dm(t,e,n){return t instanceof Ri?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ks?Ch(t,e):t instanceof Ds?Sh(t,e):function(s,i){const r=Th(s,i),o=xl(r)+xl(s.It);return mo(r)&&mo(s.It)?_h(o):Eh(s.Tt,o)}(t,e)}function Pm(t,e,n){return t instanceof ks?Ch(t,e):t instanceof Ds?Sh(t,e):n}function Th(t,e){return t instanceof Li?mo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ri extends ar{}class ks extends ar{constructor(e){super(),this.elements=e}}function Ch(t,e){const n=Ih(e);for(const s of t.elements)n.some(i=>bt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ds extends ar{constructor(e){super(),this.elements=e}}function Sh(t,e){let n=Ih(e);for(const s of t.elements)n=n.filter(i=>!bt(i,s));return{arrayValue:{values:n}}}class Li extends ar{constructor(e,n){super(),this.Tt=e,this.It=n}}function xl(t){return de(t.integerValue||t.doubleValue)}function Ih(t){return ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Nm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Ds&&s instanceof Ds?Vn(n.elements,s.elements,bt):n instanceof Li&&s instanceof Li?bt(n.It,s.It):n instanceof Ri&&s instanceof Ri}(t.transform,e.transform)}class Om{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lr{}function Ah(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ma(t.key,it.none()):new Ks(t.key,t.data,it.none());{const n=t.data,s=Ye.empty();let i=new ve(Re.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xt(t.key,s,new Ze(i.toArray()),it.none())}}function Rm(t,e,n){t instanceof Ks?function(s,i,r){const o=s.value.clone(),a=Bl(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xt?function(s,i,r){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Bl(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(kh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function hs(t,e,n,s){return t instanceof Ks?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=i.value.clone(),c=Vl(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xt?function(i,r,o,a){if(!gi(i.precondition,r))return o;const l=Vl(i.fieldTransforms,a,r),c=r.data;return c.setAll(kh(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return gi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Lm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Th(s.transform,i||null);r!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,r))}return n||null}function Fl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Vn(n,s,(i,r)=>Nm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ks extends lr{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xt extends lr{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function kh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bl(t,e,n){const s=new Map;ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Pm(o,a,n[i]))}return s}function Vl(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Dm(r,o,e))}return s}class ma extends lr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mm extends lr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var he,q;function Fm(t){switch(t){default:return R();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Dh(t){if(t===void 0)return Dt("GRPC error has no .code"),w.UNKNOWN;switch(t){case he.OK:return w.OK;case he.CANCELLED:return w.CANCELLED;case he.UNKNOWN:return w.UNKNOWN;case he.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case he.INTERNAL:return w.INTERNAL;case he.UNAVAILABLE:return w.UNAVAILABLE;case he.UNAUTHENTICATED:return w.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case he.NOT_FOUND:return w.NOT_FOUND;case he.ALREADY_EXISTS:return w.ALREADY_EXISTS;case he.PERMISSION_DENIED:return w.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case he.ABORTED:return w.ABORTED;case he.OUT_OF_RANGE:return w.OUT_OF_RANGE;case he.UNIMPLEMENTED:return w.UNIMPLEMENTED;case he.DATA_LOSS:return w.DATA_LOSS;default:return R()}}(q=he||(he={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return lh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new we(P.comparator);function Nt(){return Bm}const Ph=new we(P.comparator);function os(...t){let e=Ph;for(const n of t)e=e.insert(n.key,n);return e}function Nh(t){let e=Ph;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ln(){return ds()}function Oh(){return ds()}function ds(){return new Xn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vm=new we(P.comparator),Um=new ve(P.comparator);function j(...t){let e=Um;for(const n of t)e=e.add(n);return e}const jm=new ve(X);function Rh(){return jm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,zs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new cr(M.min(),i,Rh(),Nt(),j())}}class zs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new zs(s,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class Lh{constructor(e,n){this.targetId=e,this.Rt=n}}class Mh{constructor(e,n,s=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Ul{constructor(){this.bt=0,this.vt=ql(),this.Pt=Fe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=j(),n=j(),s=j();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:R()}}),new zs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=ql()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class qm{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Nt(),this.Kt=jl(),this.Gt=new ve(X)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:R()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(vo(r))if(s===0){const o=new P(r.path);this.zt(n,o,Oe.newNoDocument(o,M.min()))}else ne(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&vo(a.target)){const l=new P(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Oe.newNoDocument(l,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=j();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new cr(e,n,this.Gt,this.Ut,s);return this.Ut=Nt(),this.Kt=jl(),this.Gt=new ve(X),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Ul,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(X),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Ul),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function jl(){return new we(P.comparator)}function ql(){return new we(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Km=(()=>({and:"AND",or:"OR"}))();class zm{constructor(e,n){this.databaseId=e,this.yt=n}}function Mi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Gm(t,e){return Mi(t,e.toTimestamp())}function wt(t){return ne(!!t),M.fromTimestamp(function(e){const n=$t(e);return new ye(n.seconds,n.nanos)}(t))}function ya(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Fh(t){const e=ie.fromString(t);return ne(jh(e)),e}function _o(t,e){return ya(t.databaseId,e.path)}function Ur(t,e){const n=Fh(e);if(n.get(1)!==t.databaseId.projectId)throw new I(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(Bh(n))}function To(t,e){return ya(t.databaseId,e)}function Wm(t){const e=Fh(t);return e.length===4?ie.emptyPath():Bh(e)}function Co(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bh(t){return ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $l(t,e,n){return{name:_o(t,e),fields:n.value.mapValue.fields}}function Qm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.yt?(ne(c===void 0||typeof c=="string"),Fe.fromBase64String(c||"")):(ne(c===void 0||c instanceof Uint8Array),Fe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?w.UNKNOWN:Dh(l.code);return new I(c,l.message||"")}(o);n=new Mh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ur(t,s.document.name),r=wt(s.document.updateTime),o=s.document.createTime?wt(s.document.createTime):M.min(),a=new Ye({mapValue:{fields:s.document.fields}}),l=Oe.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new mi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ur(t,s.document),r=s.readTime?wt(s.readTime):M.min(),o=Oe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new mi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ur(t,s.document),r=s.removedTargetIds||[];n=new mi([],r,i,null)}else{if(!("filter"in e))return R();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new xm(i),o=s.targetId;n=new Lh(o,r)}}return n}function Ym(t,e){let n;if(e instanceof Ks)n={update:$l(t,e.key,e.value)};else if(e instanceof ma)n={delete:_o(t,e.key)};else if(e instanceof Xt)n={update:$l(t,e.key,e.data),updateMask:ry(e.fieldMask)};else{if(!(e instanceof Mm))return R();n={verify:_o(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ri)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ks)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ds)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Li)return{fieldPath:r.field.canonicalString(),increment:o.It};throw R()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Gm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(t,e.precondition)),n}function Xm(t,e){return t&&t.length>0?(ne(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?wt(s.updateTime):wt(i);return r.isEqual(M.min())&&(r=wt(i)),new Om(r,s.transformResults||[])}(n,e))):[]}function Jm(t,e){return{documents:[To(t,e.path)]}}function Zm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=To(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=To(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Uh(ft.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:An(u.field),direction:ny(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.yt||sr(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ey(t){let e=Wm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Vh(u);return h instanceof ft&&fh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Nn(kn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Oi(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Oi(d,h)}(n.endAt)),Sm(e,i,o,r,a,"F",l,c)}function ty(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return R()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vh(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kn(e.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=kn(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kn(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=kn(e.unaryFilter.field);return fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(t):t.fieldFilter!==void 0?function(e){return fe.create(kn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ft.create(e.compositeFilter.filters.map(n=>Vh(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(t):R()}function ny(t){return $m[t]}function sy(t){return Hm[t]}function iy(t){return Km[t]}function An(t){return{fieldPath:t.canonicalString()}}function kn(t){return Re.fromServerFormat(t.fieldPath)}function Uh(t){return t instanceof fe?function(e){if(e.op==="=="){if(Pl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NAN"}};if(Dl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NAN"}};if(Dl(e.value))return{unaryFilter:{field:An(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(e.field),op:sy(e.op),value:e.value}}}(t):t instanceof ft?function(e){const n=e.getFilters().map(s=>Uh(s));return n.length===1?n[0]:{compositeFilter:{op:iy(e.op),filters:n}}}(t):R()}function ry(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Rm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Oh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Ah(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(M.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,(n,s)=>Fl(n,s))&&Vn(this.baseMutations,e.baseMutations,(n,s)=>Fl(n,s))}}class va{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ne(e.mutations.length===s.length);let i=Vm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new va(e,n,s,i)}}/**
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
 */class un{constructor(e,n,s,i,r=M.min(),o=M.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.oe=e}}function cy(t){const e=ey({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bo(e,e.limit,"L"):e}/**
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
 */class uy{constructor(){this.Ze=new hy}addToCollectionParentIndex(e,n){return this.Ze.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(qt.min())}updateCollectionGroup(e,n,s){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class hy{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ve(ie.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dy{constructor(){this.changes=new Xn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?E.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class py{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&hs(s.mutation,i,Ze.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,j()).next(()=>s))}getLocalViewOfDocuments(e,n,s=j()){const i=ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=os();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ln();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,j()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Nt();const o=ds(),a=ds();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Xt)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),hs(u.mutation,c,u.mutation.getFieldMask(),ye.now())):o.set(c.key,Ze.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new fy(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ds();let i=new we((o,a)=>o-a),r=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ze.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||j()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Oh();u.forEach(d=>{if(!r.has(d)){const f=Ah(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):E.resolve(ln());let a=-1,l=r;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,j())).next(u=>({batchId:a,changes:Nh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(s=>{let i=os();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=os();return this.indexManager.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const l=function(c,u){return new Yn(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,Oe.newInvalidDocument(c)))});let o=os();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&hs(c.mutation,l,Ze.empty(),ye.now()),or(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return E.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:wt(s.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:cy(s.bundledQuery),readTime:wt(s.readTime)}}(n)),E.resolve()}}/**
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
 */class my{constructor(){this.overlays=new we(P.comparator),this.ss=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ln();return E.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),E.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),E.resolve()}getOverlaysForCollection(e,n,s){const i=ln(),r=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new we((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=ln(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=ln(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ay(n,s));let r=this.ss.get(n);r===void 0&&(r=j(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.rs=new ve(be.os),this.us=new ve(be.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new be(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new be(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new P(new ie([])),s=new be(n,e),i=new be(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new P(new ie([])),s=new be(n,e),i=new be(n,e+1);let r=j();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new be(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class be{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return P.comparator(e.key,n.key)||X(e.gs,n.gs)}static cs(e,n){return X(e.gs,n.gs)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(be.os)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oy(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new be(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return E.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),E.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(X);return n.forEach(i=>{const r=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),E.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;P.isDocumentKey(r)||(r=r.child(""));const o=new be(new P(r),0);let a=new ve(X);return this.ps.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gs)),!0)},o),E.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ne(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return E.forEach(n.mutations,i=>{const r=new be(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new be(n,0),i=this.ps.firstAfterOrEqual(s);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.Rs=e,this.docs=new we(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return E.resolve(s?s.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let s=Nt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Oe.newInvalidDocument(i))}),E.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Nt();const o=n.path,a=new P(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||am(om(u),s)<=0||(i.has(u.key)||or(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return E.resolve(r)}getAllFromCollectionGroup(e,n,s,i){R()}bs(e,n){return E.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new wy(this)}getSize(e){return E.resolve(this.size)}}class wy extends dy{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),E.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.persistence=e,this.vs=new Xn(n=>da(n),fa),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new wa,this.targetCount=0,this.Ss=$n.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),E.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new $n(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.xn(n),E.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(r).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return E.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),E.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),E.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return E.resolve(s)}containsKey(e,n){return E.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ua(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new by(this),this.indexManager=new uy,this.remoteDocumentCache=function(s){return new vy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new ly(n),this.Os=new gy(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new my,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new yy(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){D("MemoryPersistence","Starting transaction:",e);const i=new _y(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return E.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class _y extends cm{constructor(e){super(),this.currentSequenceNumber=e}}class ba{constructor(e){this.persistence=e,this.Bs=new wa,this.Ls=null}static qs(e){return new ba(e)}get Us(){if(this.Ls)return this.Ls;throw R()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),E.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),E.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Us,s=>{const i=P.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,M.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return E.or([()=>E.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=j(),i=j();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ea(e,n.fromCache,s,i)}}/**
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
 */class Ty{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(Ml(n))return E.resolve(null);let s=Pt(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bo(n,null,"F"),s=Pt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=j(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Bi(n,a);return this.Li(n,c,o,l.readTime)?this.Mi(e,bo(n,null,"F")):this.qi(e,c,n,l)}))})))}Fi(e,n,s,i){return Ml(n)||i.isEqual(M.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(Sl()<=Y.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Eo(n)),this.qi(e,o,n,rm(i,-1)))})}Bi(e,n){let s=new ve(bh(e));return n.forEach((i,r)=>{or(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return Sl()<=Y.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Eo(n)),this.Oi.getDocumentsMatchingQuery(e,n,qt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new we(X),this.Gi=new Xn(r=>da(r),fa),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new py(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Sy(t,e,n,s){return new Cy(t,e,n,s)}async function qh(t,e){const n=x(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=j();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Wi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Iy(t,e){const n=x(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=E.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(p=>{const y=l.docVersions.get(f);ne(y!==null),p.version.compareTo(y)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&(p.setReadTime(l.commitVersion),c.addEntry(p)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=j();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function $h(t){const e=x(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Ay(t,e){const n=x(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Fe.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(p,y,b){return p.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(d,f,u)&&a.push(n.Ns.updateTargetData(r,f))});let l=Nt(),c=j();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(ky(r,o,e.documentUpdates).next(u=>{l=u.Hi,c=u.Ji})),!s.isEqual(M.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return E.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ki=i,r))}function ky(t,e,n){let s=j(),i=j();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Nt();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(M.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function Dy(t,e){const n=x(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Py(t,e){const n=x(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,E.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new un(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function So(t,e,n){const s=x(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hs(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Hl(t,e,n){const s=x(t);let i=M.min(),r=j();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=x(a),h=u.Gi.get(c);return h!==void 0?E.resolve(u.Ki.get(h)):u.Ns.getTargetData(l,c)}(s,o,Pt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?r:j())).next(a=>(Ny(s,Im(e),a),{documents:a,Yi:r})))}function Ny(t,e,n){let s=t.Qi.get(e)||M.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Kl{constructor(){this.activeTargetIds=Rh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Oy{constructor(){this.Ur=new Kl,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Kl,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);D("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw po("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Qn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=Ly[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Qg;a.setWithCredentials(!0),a.listenOnce(zg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const c=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Vr.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new I(w.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const u=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(p){const y=p.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(y)>=0?y:w.UNKNOWN}(d.status);o(new I(f,d.message))}else o(new I(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(w.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Hg(),o=Kg(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Wg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new My({Yr:p=>{h?D("Connection","Not sending because WebChannel is closed:",p):(u||(D("Connection","Opening WebChannel transport."),c.open(),u=!0),D("Connection","WebChannel sending:",p),c.send(p))},Zr:()=>c.close()}),f=(p,y,b)=>{p.listen(y,k=>{try{b(k)}catch(S){setTimeout(()=>{throw S},0)}})};return f(c,ai.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),f(c,ai.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),d.oo())}),f(c,ai.EventType.ERROR,p=>{h||(h=!0,po("Connection","WebChannel transport errored:",p),d.oo(new I(w.UNAVAILABLE,"The operation could not be completed")))}),f(c,ai.EventType.MESSAGE,p=>{var y;if(!h){const b=p.data[0];ne(!!b);const k=b,S=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(S){D("Connection","WebChannel received error:",S);const O=S.status;let N=function(Te){const re=he[Te];if(re!==void 0)return Dh(re)}(O),F=S.message;N===void 0&&(N=w.INTERNAL,F="Unknown error status: "+O+" with message "+S.message),h=!0,d.oo(new I(N,F)),c.close()}else D("Connection","WebChannel received:",b),d.uo(b)}}),f(o,Gg.STAT_EVENT,p=>{p.stat===Tl.PROXY?D("Connection","Detected buffering proxy"):p.stat===Tl.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){return new zm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kh{constructor(e,n,s,i,r,o,a,l){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Hh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(Dt(n.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new I(w.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fy extends Kh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Qm(this.Tt,e),s=function(i){if(!("targetChange"in i))return M.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?M.min():r.readTime?wt(r.readTime):M.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=Co(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=vo(a)?{documents:Jm(i,a)}:{query:Zm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=xh(i,r.resumeToken):r.snapshotVersion.compareTo(M.min())>0&&(o.readTime=Mi(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=ty(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=Co(this.Tt),n.removeTarget=e,this.qo(n)}}class By extends Kh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Xm(e.writeResults,e.commitTime),s=wt(e.commitTime);return this.listener.eu(s,n)}return ne(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Co(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ym(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new I(w.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(w.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(w.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Uy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Dt(n),this.cu=!1):D("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{En(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=x(a);l.mu.add(4),await Gs(l),l.pu.set("Unknown"),l.mu.delete(4),await hr(l)}(this))})}),this.pu=new Uy(s,i)}}async function hr(t){if(En(t))for(const e of t.gu)await e(!0)}async function Gs(t){for(const e of t.gu)await e(!1)}function zh(t,e){const n=x(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ca(n)?Ta(n):Jn(n).Mo()&&_a(n,e))}function Gh(t,e){const n=x(t),s=Jn(n);n.wu.delete(e),s.Mo()&&Wh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():En(n)&&n.pu.set("Unknown"))}function _a(t,e){t.Iu.Ft(e.targetId),Jn(t).Jo(e)}function Wh(t,e){t.Iu.Ft(e),Jn(t).Yo(e)}function Ta(t){t.Iu=new qm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Jn(t).start(),t.pu.au()}function Ca(t){return En(t)&&!Jn(t).Oo()&&t.wu.size>0}function En(t){return x(t).mu.size===0}function Qh(t){t.Iu=void 0}async function qy(t){t.wu.forEach((e,n)=>{_a(t,e)})}async function $y(t,e){Qh(t),Ca(t)?(t.pu.fu(e),Ta(t)):t.pu.set("Unknown")}async function Hy(t,e,n){if(t.pu.set("Online"),e instanceof Mh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xi(t,s)}else if(e instanceof mi?t.Iu.Qt(e):e instanceof Lh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(M.min()))try{const s=await $h(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.wu.get(l);c&&i.wu.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Fe.EMPTY_BYTE_STRING,l.snapshotVersion)),Wh(i,a);const c=new un(l.target,a,1,l.sequenceNumber);_a(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){D("RemoteStore","Failed to raise snapshot:",s),await xi(t,s)}}async function xi(t,e,n){if(!Hs(e))throw e;t.mu.add(1),await Gs(t),t.pu.set("Offline"),n||(n=()=>$h(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await hr(t)})}function Yh(t,e){return e().catch(n=>xi(t,n,e))}async function dr(t){const e=x(t),n=Ht(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Ky(e);)try{const i=await Dy(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,zy(e,i)}catch(i){await xi(e,i)}Xh(e)&&Jh(e)}function Ky(t){return En(t)&&t._u.length<10}function zy(t,e){t._u.push(e);const n=Ht(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Xh(t){return En(t)&&!Ht(t).Oo()&&t._u.length>0}function Jh(t){Ht(t).start()}async function Gy(t){Ht(t).su()}async function Wy(t){const e=Ht(t);for(const n of t._u)e.tu(n.mutations)}async function Qy(t,e,n){const s=t._u.shift(),i=va.from(s,e,n);await Yh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dr(t)}async function Yy(t,e){e&&Ht(t).Xo&&await async function(n,s){if(i=s.code,Fm(i)&&i!==w.ABORTED){const r=n._u.shift();Ht(n).$o(),await Yh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await dr(n)}var i}(t,e),Xh(t)&&Jh(t)}async function Gl(t,e){const n=x(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const s=En(n);n.mu.add(3),await Gs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await hr(n)}async function Xy(t,e){const n=x(t);e?(n.mu.delete(2),await hr(n)):e||(n.mu.add(2),await Gs(n),n.pu.set("Unknown"))}function Jn(t){return t.Tu||(t.Tu=function(e,n,s){const i=x(e);return i.ru(),new Fy(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:qy.bind(null,t),no:$y.bind(null,t),Ho:Hy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ca(t)?Ta(t):t.pu.set("Unknown")):(await t.Tu.stop(),Qh(t))})),t.Tu}function Ht(t){return t.Eu||(t.Eu=function(e,n,s){const i=x(e);return i.ru(),new By(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Gy.bind(null,t),no:Yy.bind(null,t),nu:Wy.bind(null,t),eu:Qy.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await dr(t)):(await t.Eu.stop(),t._u.length>0&&(D("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Sa(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ia(t,e){if(Dt("AsyncQueue",`${e}: ${t}`),Hs(t))return new I(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||P.comparator(n.key,s.key):(n,s)=>P.comparator(n.key,s.key),this.keyedMap=os(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Wl{constructor(){this.Au=new we(P.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):R():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Hn{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hn(e,n,Rn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(){this.bu=void 0,this.listeners=[]}}class Zy{constructor(){this.queries=new Xn(e=>wh(e),rr),this.onlineState="Unknown",this.vu=new Set}}async function Zh(t,e){const n=x(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Jy),i)try{r.bu=await n.onListen(s)}catch(o){const a=Ia(o,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&Aa(n)}async function ed(t,e){const n=x(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ev(t,e){const n=x(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&Aa(n)}function tv(t,e,n){const s=x(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Aa(t){t.vu.forEach(e=>{e.next()})}class td{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Hn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.key=e}}class sd{constructor(e){this.key=e}}class nv{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=j(),this.mutatedKeys=j(),this.ju=bh(e),this.zu=new Rn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Wl,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=or(this.query,h)?h:null,p=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;d&&f?d.data.isEqual(f.data)?p!==y&&(s.track({type:3,doc:f}),b=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),b=!0,(l&&this.ju(f,l)>0||c&&this.ju(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),b=!0):d&&!f&&(s.track({type:1,doc:d}),b=!0,(l||c)&&(a=!0)),b&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((c,u)=>function(h,d){const f=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return f(h)-f(d)}(c.type,u.type)||this.ju(c.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,r.length!==0||l?{snapshot:new Hn(this.query,e.zu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Wl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=j(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new sd(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new nd(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=j();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Hn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class sv{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class iv{constructor(e){this.key=e,this.ic=!1}}class rv{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Xn(a=>wh(a),rr),this.uc=new Map,this.cc=new Set,this.ac=new we(P.comparator),this.hc=new Map,this.lc=new wa,this.fc={},this.dc=new Map,this._c=$n.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function ov(t,e){const n=mv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Py(n.localStore,Pt(e));n.isPrimaryClient&&zh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await av(n,e,s,a==="current",o.resumeToken)}return i}async function av(t,e,n,s,i){t.mc=(h,d,f)=>async function(p,y,b,k){let S=y.view.Hu(b);S.Li&&(S=await Hl(p.localStore,y.query,!1).then(({documents:F})=>y.view.Hu(F,S)));const O=k&&k.targetChanges.get(y.targetId),N=y.view.applyChanges(S,p.isPrimaryClient,O);return Yl(p,y.targetId,N.tc),N.snapshot}(t,h,d,f);const r=await Hl(t.localStore,e,!0),o=new nv(e,r.Yi),a=o.Hu(r.documents),l=zs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Yl(t,n,c.tc);const u=new sv(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),c.snapshot}async function lv(t,e){const n=x(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!rr(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await So(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Gh(n.remoteStore,s.targetId),Io(n,s.targetId)}).catch($s)):(Io(n,s.targetId),await So(n.localStore,s.targetId,!0))}async function cv(t,e,n){const s=yv(t);try{const i=await function(r,o){const a=x(r),l=ye.now(),c=o.reduce((d,f)=>d.add(f.key),j());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Nt(),p=j();return a.ji.getEntries(d,c).next(y=>{f=y,f.forEach((b,k)=>{k.isValidDocument()||(p=p.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(y=>{u=y;const b=[];for(const k of o){const S=Lm(k,u.get(k.key).overlayedDocument);S!=null&&b.push(new Xt(k.key,S,yh(S.value.mapValue),it.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,b,o)}).next(y=>{h=y;const b=y.applyToLocalDocumentSet(u,p);return a.documentOverlayCache.saveOverlays(d,y.batchId,b)})}).then(()=>({batchId:h.batchId,changes:Nh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.fc[r.currentUser.toKey()];l||(l=new we(X)),l=l.insert(o,a),r.fc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Ws(s,i.changes),await dr(s.remoteStore)}catch(i){const r=Ia(i,"Failed to persist write");n.reject(r)}}async function id(t,e){const n=x(t);try{const s=await Ay(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ne(o.ic):i.removedDocuments.size>0&&(ne(o.ic),o.ic=!1))}),await Ws(n,s,e)}catch(s){await $s(s)}}function Ql(t,e,n){const s=x(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=x(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Pu(o)&&(l=!0)}),l&&Aa(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uv(t,e,n){const s=x(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new we(P.comparator);o=o.insert(r,Oe.newNoDocument(r,M.min()));const a=j().add(r),l=new cr(M.min(),new Map,new ve(X),o,a);await id(s,l),s.ac=s.ac.remove(r),s.hc.delete(e),ka(s)}else await So(s.localStore,e,!1).then(()=>Io(s,e,n)).catch($s)}async function hv(t,e){const n=x(t),s=e.batch.batchId;try{const i=await Iy(n.localStore,e);od(n,s,null),rd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ws(n,i)}catch(i){await $s(i)}}async function dv(t,e,n){const s=x(t);try{const i=await function(r,o){const a=x(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(ne(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);od(s,e,n),rd(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ws(s,i)}catch(i){await $s(i)}}function rd(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function od(t,e,n){const s=x(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||ad(t,s)})}function ad(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Gh(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),ka(t))}function Yl(t,e,n){for(const s of n)s instanceof nd?(t.lc.addReference(s.key,e),fv(t,s)):s instanceof sd?(D("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||ad(t,s.key)):R()}function fv(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(D("SyncEngine","New document in limbo: "+n),t.cc.add(s),ka(t))}function ka(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new P(ie.fromString(e)),s=t._c.next();t.hc.set(s,new iv(n)),t.ac=t.ac.insert(n,s),zh(t.remoteStore,new un(Pt(pa(n.path)),s,2,ua.at))}}async function Ws(t,e,n){const s=x(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,l)=>{o.push(s.mc(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Ea.Ni(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,l){const c=x(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>E.forEach(l,h=>E.forEach(h.Ci,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>E.forEach(h.xi,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Hs(u))throw u;D("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ki.get(h),f=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(f);c.Ki=c.Ki.insert(h,p)}}}(s.localStore,r))}async function pv(t,e){const n=x(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const s=await qh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new I(w.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ws(n,s.Wi)}}function gv(t,e){const n=x(t),s=n.hc.get(e);if(s&&s.ic)return j().add(s.key);{let i=j();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function mv(t){const e=x(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=id.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uv.bind(null,e),e.rc.Ho=ev.bind(null,e.eventManager),e.rc.gc=tv.bind(null,e.eventManager),e}function yv(t){const e=x(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dv.bind(null,e),e}class vv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=ur(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Sy(this.persistence,new Ty,e.initialUser,this.Tt)}Tc(e){return new Ey(ba.qs,this.Tt)}Ic(e){return new Oy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ql(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pv.bind(null,this.syncEngine),await Xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Zy}createDatastore(e){const n=ur(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new xy(i));var i;return function(r,o,a,l){return new Vy(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Ql(this.syncEngine,a,0),o=zl.C()?new zl:new Ry,new jy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new rv(s,i,r,o,a,l);return c&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=x(e);D("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Gs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ld{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ne.UNAUTHENTICATED,this.clientId=ah.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{D("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(D("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ia(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await qh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _v(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Tv(t);D("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Gl(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Gl(e.remoteStore,r)),t.onlineComponents=e}async function Tv(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await Ev(t,new vv)),t.offlineComponents}async function cd(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await _v(t,new wv)),t.onlineComponents}function Cv(t){return cd(t).then(e=>e.syncEngine)}async function Ao(t){const e=await cd(t),n=e.eventManager;return n.onListen=ov.bind(null,e.syncEngine),n.onUnlisten=lv.bind(null,e.syncEngine),n}function Sv(t,e,n={}){const s=new Ft;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new ld({next:h=>{r.enqueueAndForget(()=>ed(i,u)),h.fromCache&&a.source==="server"?l.reject(new I(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new td(o,c,{includeMetadataChanges:!0,Ou:!0});return Zh(i,u)}(await Ao(t),t.asyncQueue,e,n,s)),s.promise}const Xl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e,n){if(!n)throw new I(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Iv(t,e,n,s){if(e===!0&&s===!0)throw new I(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jl(t){if(!P.isDocumentKey(t))throw new I(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zl(t){if(P.isDocumentKey(t))throw new I(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R()}function rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fr(t);throw new I(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Iv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Yg;switch(n.type){case"gapi":const s=n.client;return new em(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xl.get(e);n&&(D("ComponentProvider","Removing Datastore"),Xl.delete(e),n.terminate())}(this),Promise.resolve()}}function Av(t,e,n,s={}){var i;const r=(t=rt(t,pr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&po("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=Gc(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new I(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(l)}t._authCredentials=new Xg(new oh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Jt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jt(this.firestore,e,this._query)}}class Bt extends Jt{constructor(e,n,s){super(e,n,pa(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new P(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function st(t,e,...n){if(t=dt(t),ud("collection","path",e),t instanceof pr){const s=ie.fromString(e,...n);return Zl(s),new Bt(t,null,s)}{if(!(t instanceof Ge||t instanceof Bt))throw new I(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Zl(s),new Bt(t.firestore,null,s)}}function It(t,e,...n){if(t=dt(t),arguments.length===1&&(e=ah.R()),ud("doc","path",e),t instanceof pr){const s=ie.fromString(e,...n);return Jl(s),new Ge(t,null,new P(s))}{if(!(t instanceof Ge||t instanceof Bt))throw new I(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ie.fromString(e,...n));return Jl(s),new Ge(t.firestore,t instanceof Bt?t.converter:null,new P(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Hh(this,"async_queue_retry"),this.Hc=()=>{const n=jr();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ft;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Hs(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Dt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Sa.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&R()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function tc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Kt extends pr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new kv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hd(this),this._firestoreClient.terminate()}}function Dv(t,e){const n=typeof t=="object"?t:tu(),s=typeof t=="string"?t:e||"(default)",i=Jc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=zc("firestore");r&&Av(i,...r)}return i}function Da(t){return t._firestoreClient||hd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hd(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new um(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Fe.fromBase64String(e))}catch(n){throw new I(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=/^__.*__$/;class Nv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ks(e,this.data,n,this.fieldTransforms)}}class dd{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class Oa{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Oa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Fi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(fd(this.ra)&&Pv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class Ov{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||ur(e)}wa(e,n,s,i=!1){return new Oa({ra:e,methodName:n,_a:s,path:Re.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function mr(t){const e=t._freezeSettings(),n=ur(t._databaseId);return new Ov(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pd(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Ra("Data must be an object, but it was:",o,s);const a=gd(s,o);let l,c;if(r.merge)l=new Ze(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ko(e,h,n);if(!o.contains(d))throw new I(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);yd(u,d)||u.push(d)}l=new Ze(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Nv(new Ye(a),l,c)}class yr extends Pa{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yr}}function Rv(t,e,n,s){const i=t.wa(1,e,n);Ra("Data must be an object, but it was:",i,s);const r=[],o=Ye.empty();bn(s,(l,c)=>{const u=La(e,l,n);c=dt(c);const h=i.ha(u);if(c instanceof yr)r.push(u);else{const d=Qs(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ze(r);return new dd(o,a,i.fieldTransforms)}function Lv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[ko(e,s,n)],l=[i];if(r.length%2!=0)throw new I(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ko(e,r[d])),l.push(r[d+1]);const c=[],u=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!yd(c,a[d])){const f=a[d];let p=l[d];p=dt(p);const y=o.ha(f);if(p instanceof yr)c.push(f);else{const b=Qs(p,y);b!=null&&(c.push(f),u.set(f,b))}}const h=new Ze(c);return new dd(u,h,o.fieldTransforms)}function Mv(t,e,n,s=!1){return Qs(n,t.wa(s?4:3,e))}function Qs(t,e){if(md(t=dt(t)))return Ra("Unsupported field value:",e,t),gd(t,e);if(t instanceof Pa)return function(n,s){if(!fd(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=Qs(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=dt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return km(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Mi(s.Tt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mi(s.Tt,i)}}if(n instanceof Na)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:xh(s.Tt,n._byteString)};if(n instanceof Ge){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ya(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${fr(n)}`)}(t,e)}function gd(t,e){const n={};return lh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(t,(s,i)=>{const r=Qs(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function md(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Na||t instanceof Kn||t instanceof Ge||t instanceof Pa)}function Ra(t,e,n){if(!md(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=fr(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function ko(t,e,n){if((e=dt(e))instanceof gr)return e._internalPath;if(typeof e=="string")return La(t,e);throw Fi("Field path arguments must be of type string or ",t,!1,void 0,n)}const xv=new RegExp("[~\\*/\\[\\]]");function La(t,e,n){if(e.search(xv)>=0)throw Fi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gr(...e.split("."))._internalPath}catch{throw Fi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fi(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new I(w.INVALID_ARGUMENT,a+t+l)}function yd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fv extends vd{data(){return super.data()}}function vr(t,e){return typeof e=="string"?La(t,e):e instanceof gr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ma{}class bd extends Ma{}function fs(t,e,...n){let s=[];e instanceof Ma&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof xa).length,o=i.filter(a=>a instanceof wr).length;if(r>1||r>0&&o>0)throw new I(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class wr extends bd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new wr(e,n,s)}_apply(e){const n=this._parse(e);return Ed(e._query,n),new Jt(e.firestore,e.converter,wo(e._query,n))}_parse(e){const n=mr(e.firestore);return function(i,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new I(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){sc(u,c);const d=[];for(const f of u)d.push(nc(a,i,f));h={arrayValue:{values:d}}}else h=nc(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||sc(u,c),h=Mv(o,r,u,c==="in"||c==="not-in");return fe.create(l,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Do(t,e,n){const s=e,i=vr("where",t);return wr._create(i,s,n)}class xa extends Ma{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xa(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ft.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)Ed(r,a),r=wo(r,a)}(e._query,n),new Jt(e.firestore,e.converter,wo(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fa extends bd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fa(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new I(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new I(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Nn(i,r);return function(a,l){if(ga(a)===null){const c=ir(a);c!==null&&_d(a,c,l.field)}}(s,o),o}(e._query,this._field,this._direction);return new Jt(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Yn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function qr(t,e="asc"){const n=e,s=vr("orderBy",t);return Fa._create(s,n)}function nc(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new I(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vh(e)&&n.indexOf("/")!==-1)throw new I(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ie.fromString(n));if(!P.isDocumentKey(s))throw new I(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return kl(t,new P(s))}if(n instanceof Ge)return kl(t,n._key);throw new I(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fr(n)}.`)}function sc(t,e){if(!Array.isArray(t)||t.length===0)throw new I(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ed(t,e){if(e.isInequality()){const s=ir(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new I(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ga(t);r!==null&&_d(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new I(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _d(t,e,n){if(!n.isEqual(e))throw new I(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Bv{convertValue(e,n="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw R()}}convertObject(e,n){const s={};return bn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Na(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=uh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Is(e));default:return null}}convertTimestamp(e){const n=$t(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ie.fromString(e);ne(jh(s));const i=new Ss(s.get(1),s.get(3)),r=new P(s.popFirst(5));return i.isEqual(n)||Dt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cd extends vd{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class yi extends Cd{data(e={}){return super.data(e)}}class Sd{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new as(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new yi(this._firestore,this._userDataWriter,s.key,s,new as(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:Vv(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Vv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}class Ba extends Bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function Id(t){t=rt(t,Jt);const e=rt(t.firestore,Kt),n=Da(e),s=new Ba(e);return wd(t._query),Sv(n,t._query).then(i=>new Sd(e,s,t,i))}function $r(t,e,n){t=rt(t,Ge);const s=rt(t.firestore,Kt),i=Td(t.converter,e,n);return br(s,[pd(mr(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,it.none())])}function Va(t,e,n,...s){t=rt(t,Ge);const i=rt(t.firestore,Kt),r=mr(i);let o;return o=typeof(e=dt(e))=="string"||e instanceof gr?Lv(r,"updateDoc",t._key,e,n,s):Rv(r,"updateDoc",t._key,e),br(i,[o.toMutation(t._key,it.exists(!0))])}function Po(t){return br(rt(t.firestore,Kt),[new ma(t._key,it.none())])}function Ad(t,e){const n=rt(t.firestore,Kt),s=It(t),i=Td(t.converter,e);return br(n,[pd(mr(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,it.exists(!1))]).then(()=>s)}function Hr(t,...e){var n,s,i;t=dt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||tc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(tc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof Ge)c=rt(t.firestore,Kt),u=pa(t._key.path),l={next:h=>{e[o]&&e[o](Uv(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=rt(t,Jt);c=rt(h.firestore,Kt),u=h._query;const d=new Ba(c);l={next:f=>{e[o]&&e[o](new Sd(c,d,h,f))},error:e[o+1],complete:e[o+2]},wd(t._query)}return function(h,d,f,p){const y=new ld(p),b=new td(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Zh(await Ao(h),b)),()=>{y.Pc(),h.asyncQueue.enqueueAndForget(async()=>ed(await Ao(h),b))}}(Da(c),u,a,l)}function br(t,e){return function(n,s){const i=new Ft;return n.asyncQueue.enqueueAndForget(async()=>cv(await Cv(n),s,i)),i.promise}(Da(t),e)}function Uv(t,e,n){const s=n.docs.get(e._key),i=new Ba(t);return new Cd(t,i,e._key,s,new as(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Qn=n})(Zc),ys(new Fn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Kt(new Jg(n.getProvider("auth-internal")),new nm(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xt(Cl,"3.8.4",t),xt(Cl,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Tt extends vn{constructor(e,n,s=0){super(Kr(e),`Firebase Storage: ${n} (${Kr(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Et||(Et={}));function Kr(t){return"storage/"+t}function Hv(){const t="An unknown error occurred, please check the error payload for server response.";return new Tt(Et.UNKNOWN,t)}function Kv(){return new Tt(Et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zv(){return new Tt(Et.CANCELED,"User canceled the upload/download.")}function Gv(t){return new Tt(Et.INVALID_URL,"Invalid URL '"+t+"'.")}function Wv(t){return new Tt(Et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ic(t){return new Tt(Et.INVALID_ARGUMENT,t)}function Dd(){return new Tt(Et.APP_DELETED,"The Firebase app was deleted.")}function Qv(t){return new Tt(Et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=ut.makeFromUrl(e,n)}catch{return new ut(e,"")}if(s.path==="")return s;throw Wv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(N){N.path_=decodeURIComponent(N.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},y=n===kd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",k=new RegExp(`^https?://${y}/${i}/${b}`,"i"),O=[{regex:a,indices:l,postModify:r},{regex:f,indices:p,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let N=0;N<O.length;N++){const F=O[N],Te=F.regex.exec(e);if(Te){const re=Te[F.indices.bucket];let Ce=Te[F.indices.path];Ce||(Ce=""),s=new ut(re,Ce),F.postModify(s);break}}if(s==null)throw Gv(e);return s}}class Yv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(f,l())},b)}function d(){r&&clearTimeout(r)}function f(b,...k){if(c){d();return}if(b){d(),u.call(null,b,...k);return}if(l()||o){d(),u.call(null,b,...k);return}s<64&&(s*=2);let O;a===1?(a=2,O=0):O=(s+Math.random())*1e3,h(O)}let p=!1;function y(b){p||(p=!0,d(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},n),y}function Jv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){return t!==void 0}function rc(t,e,n,s){if(s<e)throw ic(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ic(`Invalid value for '${t}'. Expected ${n} or less.`)}function ew(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nw{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ui(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Bi.NO_ERROR,l=r.getStatus();if(!a||tw(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Bi.ABORT;s(!1,new ui(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new ui(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Zv(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Hv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Dd():zv();o(l)}else{const l=Kv();o(l)}};this.canceled_?n(!1,new ui(!1,null,!0)):this.backoffId_=Xv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ui{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function sw(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iw(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ow(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aw(t,e,n,s,i,r,o=!0){const a=ew(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return rw(c,e),sw(c,n),iw(c,r),ow(c,s),new nw(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vi{constructor(e,n){this._service=e,n instanceof ut?this._location=n:this._location=ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vi(e,n)}get root(){const e=new ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cw(this._location.path)}get storage(){return this._service}get parent(){const e=lw(this._location.path);if(e===null)return null;const n=new ut(this._location.bucket,e);return new Vi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qv(e)}}function oc(t,e){const n=e==null?void 0:e[jv];return n==null?null:ut.makeFromBucketSpec(n,t)}function uw(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Gc(i,t.app.options.projectId))}class hw{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=kd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qv,this._maxUploadRetryTime=$v,this._requests=new Set,i!=null?this._bucket=ut.makeFromBucketSpec(i,this._host):this._bucket=oc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ut.makeFromBucketSpec(this._url,e):this._bucket=oc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Yv(Dd());{const o=aw(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const ac="@firebase/storage",lc="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="storage";function dw(t=tu(),e){t=dt(t);const s=Jc(t,Pd).getImmediate({identifier:e}),i=zc("storage");return i&&fw(s,...i),s}function fw(t,e,n,s={}){uw(t,e,n,s)}function pw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hw(n,s,i,e,Zc)}function gw(){ys(new Fn(Pd,pw,"PUBLIC").setMultipleInstances(!0)),xt(ac,lc,""),xt(ac,lc,"esm2017")}gw();const mw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},Nd=eu(mw);dw(Nd);const Ae=Dv(Nd);var yw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},No={},vw={get exports(){return No},set exports(t){No=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(yw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",function(b){b.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",c):o.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(b){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(b){b.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(b){b.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),f=i("y",this.options),p=this.options.position=="left"?d:"-"+d,y=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+p+","+y+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},l={top:15,bottom:15},c=document.getElementsByClassName("toastify"),u,h=0;h<c.length;h++){r(c[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=c[h].offsetHeight;u=u.substr(9,u.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(c[h].style[u]=l[u]+"px",l[u]+=d+f):r(c[h],"toastify-left")===!0?(c[h].style[u]=o[u]+"px",o[u]+=d+f):(c[h].style[u]=a[u]+"px",a[u]+=d+f)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(vw);const Ln=No,Od="SweetAlert2:",ww=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ua=t=>t.charAt(0).toUpperCase()+t.slice(1),nt=t=>Array.prototype.slice.call(t),Xe=t=>{console.warn(`${Od} ${typeof t=="object"?t.join(" "):t}`)},_n=t=>{console.error(`${Od} ${t}`)},cc=[],bw=t=>{cc.includes(t)||(cc.push(t),Xe(t))},Ew=(t,e)=>{bw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},Er=t=>typeof t=="function"?t():t,ja=t=>t&&typeof t.toPromise=="function",Ys=t=>ja(t)?t.toPromise():Promise.resolve(t),qa=t=>t&&Promise.resolve(t)===t,Mn={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},_w=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Tw={},Cw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Rd=t=>Object.prototype.hasOwnProperty.call(Mn,t),Ld=t=>_w.indexOf(t)!==-1,Oo=t=>Tw[t],Sw=t=>{Rd(t)||Xe(`Unknown parameter "${t}"`)},Iw=t=>{Cw.includes(t)&&Xe(`The parameter "${t}" is incompatible with toasts`)},Aw=t=>{Oo(t)&&Ew(t,Oo(t))},kw=t=>{!t.backdrop&&t.allowOutsideClick&&Xe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Sw(e),t.toast&&Iw(e),Aw(e)},Dw="swal2-",Md=t=>{const e={};for(const n in t)e[t[n]]=Dw+t[n];return e},g=Md(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),ps=Md(["success","warning","info","question","error"]),Be=()=>document.body.querySelector(`.${g.container}`),Xs=t=>{const e=Be();return e?e.querySelector(t):null},at=t=>Xs(`.${t}`),J=()=>at(g.popup),Js=()=>at(g.icon),xd=()=>at(g.title),Ui=()=>at(g["html-container"]),Fd=()=>at(g.image),Bd=()=>at(g["progress-steps"]),_r=()=>at(g["validation-message"]),pt=()=>Xs(`.${g.actions} .${g.confirm}`),zt=()=>Xs(`.${g.actions} .${g.deny}`),Pw=()=>at(g["input-label"]),Zn=()=>Xs(`.${g.loader}`),mn=()=>Xs(`.${g.actions} .${g.cancel}`),Zs=()=>at(g.actions),Vd=()=>at(g.footer),Tr=()=>at(g["timer-progress-bar"]),$a=()=>at(g.close),Nw=`
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
`,Ha=()=>{const t=nt(J().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=nt(J().querySelectorAll(Nw)).filter(n=>n.getAttribute("tabindex")!=="-1");return ww(t.concat(e)).filter(n=>et(n))},Ka=()=>At(document.body,g.shown)&&!At(document.body,g["toast-shown"])&&!At(document.body,g["no-backdrop"]),Cr=()=>J()&&At(J(),g.toast),Ow=()=>J().hasAttribute("data-loading"),xn={previousBodyPadding:null},Le=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");nt(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),nt(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},At=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},Rw=(t,e)=>{nt(t.classList).forEach(n=>{!Object.values(g).includes(n)&&!Object.values(ps).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},ot=(t,e,n)=>{if(Rw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Xe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);H(t,e.customClass[n])}},za=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${g.popup} > .${g[e]}`);case"checkbox":return t.querySelector(`.${g.popup} > .${g.checkbox} input`);case"radio":return t.querySelector(`.${g.popup} > .${g.radio} input:checked`)||t.querySelector(`.${g.popup} > .${g.radio} input:first-child`);case"range":return t.querySelector(`.${g.popup} > .${g.range} input`);default:return t.querySelector(`.${g.popup} > .${g.input}`)}},Ud=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},jd=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},H=(t,e)=>{jd(t,e,!0)},_t=(t,e)=>{jd(t,e,!1)},Rt=(t,e)=>{const n=nt(t.childNodes);for(let s=0;s<n.length;s++)if(At(n[s],e))return n[s]},gs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},De=(t,e="flex")=>{t.style.display=e},Ve=t=>{t.style.display="none"},uc=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},Sr=(t,e,n)=>{e?De(t,n):Ve(t)},et=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Lw=()=>!et(pt())&&!et(zt())&&!et(mn()),hc=t=>t.scrollHeight>t.clientHeight,qd=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ga=(t,e=!1)=>{const n=Tr();et(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Mw=()=>{const t=Tr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},$d=()=>typeof window>"u"||typeof document>"u",xw=100,B={},Fw=()=>{B.previousActiveElement&&B.previousActiveElement.focus?(B.previousActiveElement.focus(),B.previousActiveElement=null):document.body&&document.body.focus()},Bw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;B.restoreFocusTimeout=setTimeout(()=>{Fw(),e()},xw),window.scrollTo(n,s)}),Vw=`
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
`.replace(/(^|\n)\s*/g,""),Uw=()=>{const t=Be();return t?(t.remove(),_t([document.documentElement,document.body],[g["no-backdrop"],g["toast-shown"],g["has-column"]]),!0):!1},tn=()=>{B.currentInstance.resetValidationMessage()},jw=()=>{const t=J(),e=Rt(t,g.input),n=Rt(t,g.file),s=t.querySelector(`.${g.range} input`),i=t.querySelector(`.${g.range} output`),r=Rt(t,g.select),o=t.querySelector(`.${g.checkbox} input`),a=Rt(t,g.textarea);e.oninput=tn,n.onchange=tn,r.onchange=tn,o.onchange=tn,a.oninput=tn,s.oninput=()=>{tn(),i.value=s.value},s.onchange=()=>{tn(),s.nextSibling.value=s.value}},qw=t=>typeof t=="string"?document.querySelector(t):t,$w=t=>{const e=J();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Hw=t=>{window.getComputedStyle(t).direction==="rtl"&&H(Be(),g.rtl)},Kw=t=>{const e=Uw();if($d()){_n("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=g.container,e&&H(n,g["no-transition"]),Le(n,Vw);const s=qw(t.target);s.appendChild(n),$w(t),Hw(s),jw()},Wa=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?zw(t,e):t&&Le(e,t)},zw=(t,e)=>{t.jquery?Gw(e,t):Le(e,t.toString())},Gw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ps=(()=>{if($d())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Ww=()=>{const t=document.createElement("div");t.className=g["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Qw=(t,e)=>{const n=Zs(),s=Zn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Ve(n):De(n),ot(n,e,"actions"),Yw(n,s,e),Le(s,e.loaderHtml),ot(s,e,"loader")};function Yw(t,e,n){const s=pt(),i=zt(),r=mn();zr(s,"confirm",n),zr(i,"deny",n),zr(r,"cancel",n),Xw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Xw(t,e,n,s){if(!s.buttonsStyling)return _t([t,e,n],g.styled);H([t,e,n],g.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,H(t,g["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,H(e,g["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,H(n,g["default-outline"]))}function zr(t,e,n){Sr(t,n[`show${Ua(e)}Button`],"inline-block"),Le(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=g[e],ot(t,n,`${e}Button`),H(t,n[`${e}ButtonClass`])}function Jw(t,e){typeof e=="string"?t.style.background=e:e||H([document.documentElement,document.body],g["no-backdrop"])}function Zw(t,e){e in g?H(t,g[e]):(Xe('The "position" parameter is not valid, defaulting to "center"'),H(t,g.center))}function eb(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in g&&H(t,g[n])}}const tb=(t,e)=>{const n=Be();n&&(Jw(n,e.backdrop),Zw(n,e.position),eb(n,e.grow),ot(n,e,"container"))},U={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},nb=["input","file","range","select","radio","checkbox","textarea"],sb=(t,e)=>{const n=J(),s=U.innerParams.get(t),i=!s||e.input!==s.input;nb.forEach(r=>{const o=g[r],a=Rt(n,o);ob(r,e.inputAttributes),a.className=o,i&&Ve(a)}),e.input&&(i&&ib(e),ab(e))},ib=t=>{if(!Qe[t.input])return _n(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Hd(t.input),n=Qe[t.input](e,t);De(n),setTimeout(()=>{Ud(n)})},rb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},ob=(t,e)=>{const n=za(J(),t);if(n){rb(n);for(const s in e)n.setAttribute(s,e[s])}},ab=t=>{const e=Hd(t.input);t.customClass&&H(e,t.customClass.input)},Qa=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},ei=(t,e,n)=>{if(n.inputLabel){t.id=g.input;const s=document.createElement("label"),i=g["input-label"];s.setAttribute("for",t.id),s.className=i,H(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Hd=t=>{const e=g[t]?g[t]:g.input;return Rt(J(),e)},Qe={};Qe.text=Qe.email=Qe.password=Qe.number=Qe.tel=Qe.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:qa(e.inputValue)||Xe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),ei(t,t,e),Qa(t,e),t.type=e.input,t);Qe.file=(t,e)=>(ei(t,t,e),Qa(t,e),t);Qe.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,ei(n,t,e),t};Qe.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Le(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ei(t,t,e),t};Qe.radio=t=>(t.textContent="",t);Qe.checkbox=(t,e)=>{const n=za(J(),"checkbox");n.value="1",n.id=g.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Le(s,e.inputPlaceholder),t};Qe.textarea=(t,e)=>{t.value=e.inputValue,Qa(t,e),ei(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(J()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?J().style.width=`${r}px`:J().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const lb=(t,e)=>{const n=Ui();ot(n,e,"htmlContainer"),e.html?(Wa(e.html,n),De(n,"block")):e.text?(n.textContent=e.text,De(n,"block")):Ve(n),sb(t,e)},cb=(t,e)=>{const n=Vd();Sr(n,e.footer),e.footer&&Wa(e.footer,n),ot(n,e,"footer")},ub=(t,e)=>{const n=$a();Le(n,e.closeButtonHtml),ot(n,e,"closeButton"),Sr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},hb=(t,e)=>{const n=U.innerParams.get(t),s=Js();if(n&&e.icon===n.icon){fc(s,e),dc(s,e);return}if(!e.icon&&!e.iconHtml)return Ve(s);if(e.icon&&Object.keys(ps).indexOf(e.icon)===-1)return _n(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Ve(s);De(s),fc(s,e),dc(s,e),H(s,e.showClass.icon)},dc=(t,e)=>{for(const n in ps)e.icon!==n&&_t(t,ps[n]);H(t,ps[e.icon]),gb(t,e),db(),ot(t,e,"icon")},db=()=>{const t=J(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},fb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,pb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,fc=(t,e)=>{t.textContent="",e.iconHtml?Le(t,pc(e.iconHtml)):e.icon==="success"?Le(t,fb):e.icon==="error"?Le(t,pb):Le(t,pc({question:"?",warning:"!",info:"i"}[e.icon]))},gb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])uc(t,n,"backgroundColor",e.iconColor);uc(t,".swal2-success-ring","borderColor",e.iconColor)}},pc=t=>`<div class="${g["icon-content"]}">${t}</div>`,mb=(t,e)=>{const n=Fd();if(!e.imageUrl)return Ve(n);De(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),gs(n,"width",e.imageWidth),gs(n,"height",e.imageHeight),n.className=g.image,ot(n,e,"image")},yb=t=>{const e=document.createElement("li");return H(e,g["progress-step"]),Le(e,t),e},vb=t=>{const e=document.createElement("li");return H(e,g["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},wb=(t,e)=>{const n=Bd();if(!e.progressSteps||e.progressSteps.length===0)return Ve(n);De(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Xe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=yb(s);if(n.appendChild(r),i===e.currentProgressStep&&H(r,g["active-progress-step"]),i!==e.progressSteps.length-1){const o=vb(e);n.appendChild(o)}})},bb=(t,e)=>{const n=xd();Sr(n,e.title||e.titleText,"block"),e.title&&Wa(e.title,n),e.titleText&&(n.innerText=e.titleText),ot(n,e,"title")},Eb=(t,e)=>{const n=Be(),s=J();e.toast?(gs(n,"width",e.width),s.style.width="100%",s.insertBefore(Zn(),Js())):gs(s,"width",e.width),gs(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Ve(_r()),_b(s,e)},_b=(t,e)=>{t.className=`${g.popup} ${et(t)?e.showClass.popup:""}`,e.toast?(H([document.documentElement,document.body],g["toast-shown"]),H(t,g.toast)):H(t,g.modal),ot(t,e,"popup"),typeof e.customClass=="string"&&H(t,e.customClass),e.icon&&H(t,g[`icon-${e.icon}`])},Kd=(t,e)=>{Eb(t,e),tb(t,e),wb(t,e),hb(t,e),mb(t,e),bb(t,e),ub(t,e),lb(t,e),Qw(t,e),cb(t,e),typeof e.didRender=="function"&&e.didRender(J())},es=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Tb=()=>{nt(document.body.children).forEach(e=>{e===Be()||e.contains(Be())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},zd=()=>{nt(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Gd=["swal-title","swal-html","swal-footer"],Cb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Nb(n),Object.assign(Sb(n),Ib(n),Ab(n),kb(n),Db(n),Pb(n,Gd))},Sb=t=>{const e={};return nt(t.querySelectorAll("swal-param")).forEach(n=>{yn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof Mn[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof Mn[s]=="object"&&(e[s]=JSON.parse(i))}),e},Ib=t=>{const e={};return nt(t.querySelectorAll("swal-button")).forEach(n=>{yn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ua(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},Ab=t=>{const e={},n=t.querySelector("swal-image");return n&&(yn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},kb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(yn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Db=t=>{const e={},n=t.querySelector("swal-input");n&&(yn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},nt(s).forEach(i=>{yn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},Pb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(yn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Nb=t=>{const e=Gd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);nt(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Xe(`Unrecognized element <${s}>`)})},yn=(t,e)=>{nt(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Xe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},gc={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Ob(t){t.inputValidator||Object.keys(gc).forEach(e=>{t.input===e&&(t.inputValidator=gc[e])})}function Rb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Xe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Lb(t){Ob(t),t.showLoaderOnConfirm&&!t.preConfirm&&Xe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Rb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Kw(t)}class Mb{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const xb=()=>{xn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(xn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${xn.previousBodyPadding+Ww()}px`)},Fb=()=>{xn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${xn.previousBodyPadding}px`,xn.previousBodyPadding=null)},Bb=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!At(document.body,g.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,H(document.body,g.iosfix),Ub(),Vb()}},Vb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&J().scrollHeight>window.innerHeight-44&&(Be().style.paddingBottom=`${44}px`)},Ub=()=>{const t=Be();let e;t.ontouchstart=n=>{e=jb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},jb=t=>{const e=t.target,n=Be();return qb(t)||$b(t)?!1:e===n||!hc(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(hc(Ui())&&Ui().contains(e))},qb=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",$b=t=>t.touches&&t.touches.length>1,Hb=()=>{if(At(document.body,g.iosfix)){const t=parseInt(document.body.style.top,10);_t(document.body,g.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Wd=10,Kb=t=>{const e=Be(),n=J();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Wb(e,n,t),setTimeout(()=>{zb(e,n)},Wd),Ka()&&(Gb(e,t.scrollbarPadding,i),Tb()),!Cr()&&!B.previousActiveElement&&(B.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),_t(e,g["no-transition"])},Qd=t=>{const e=J();if(t.target!==e)return;const n=Be();e.removeEventListener(Ps,Qd),n.style.overflowY="auto"},zb=(t,e)=>{Ps&&qd(e)?(t.style.overflowY="hidden",e.addEventListener(Ps,Qd)):t.style.overflowY="auto"},Gb=(t,e,n)=>{Bb(),e&&n!=="hidden"&&xb(),setTimeout(()=>{t.scrollTop=0})},Wb=(t,e,n)=>{H(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),De(e,"grid"),setTimeout(()=>{H(e,n.showClass.popup),e.style.removeProperty("opacity")},Wd),H([document.documentElement,document.body],g.shown),n.heightAuto&&n.backdrop&&!n.toast&&H([document.documentElement,document.body],g["height-auto"])},zn=t=>{let e=J();e||new Os,e=J();const n=Zn();Cr()?Ve(Js()):Qb(e,t),De(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Qb=(t,e)=>{const n=Zs(),s=Zn();!e&&et(pt())&&(e=pt()),De(n),e&&(Ve(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),H([t,n],g.loading)},Yb=(t,e)=>{e.input==="select"||e.input==="radio"?t0(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(ja(e.inputValue)||qa(e.inputValue))&&(zn(pt()),n0(t,e))},Xb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Jb(n);case"radio":return Zb(n);case"file":return e0(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Jb=t=>t.checked?1:0,Zb=t=>t.checked?t.value:null,e0=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,t0=(t,e)=>{const n=J(),s=i=>s0[e.input](n,Ro(i),e);ja(e.inputOptions)||qa(e.inputOptions)?(zn(pt()),Ys(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):_n(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},n0=(t,e)=>{const n=t.getInput();Ve(n),Ys(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,De(n),n.focus(),t.hideLoading()}).catch(s=>{_n(`Error in inputValue promise: ${s}`),n.value="",De(n),n.focus(),t.hideLoading()})},s0={select:(t,e,n)=>{const s=Rt(t,g.select),i=(r,o,a)=>{const l=document.createElement("option");l.value=a,Le(l,o),l.selected=mc(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=Rt(t,g.radio);e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=g.radio,l.value=o,mc(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Le(u,a),u.className=g.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},Ro=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=Ro(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=Ro(s)),e.push([n,s])}),e},mc=(t,e)=>e&&e.toString()===t.toString();function yc(){const t=U.innerParams.get(this);if(!t)return;const e=U.domCache.get(this);Ve(e.loader),Cr()?t.icon&&De(Js()):i0(e),_t([e.popup,e.actions],g.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const i0=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?De(e[0],"inline-block"):Lw()&&Ve(t.actions)};function r0(t){const e=U.innerParams.get(t||this),n=U.domCache.get(t||this);return n?za(n.popup,e.input):null}const Ns={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},o0=()=>et(J()),Yd=()=>pt()&&pt().click(),a0=()=>zt()&&zt().click(),l0=()=>mn()&&mn().click(),Xd=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},c0=(t,e,n,s)=>{Xd(e),n.toast||(e.keydownHandler=i=>h0(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:J(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Lo=(t,e,n)=>{const s=Ha();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();J().focus()},Jd=["ArrowRight","ArrowDown"],u0=["ArrowLeft","ArrowUp"],h0=(t,e,n)=>{const s=U.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?d0(t,e,s):e.key==="Tab"?f0(e,s):[...Jd,...u0].includes(e.key)?p0(e.key):e.key==="Escape"&&g0(e,s,n)))},d0=(t,e,n)=>{if(Er(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Yd(),e.preventDefault()}},f0=(t,e)=>{const n=t.target,s=Ha();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Lo(e,i,-1):Lo(e,i,1),t.stopPropagation(),t.preventDefault()},p0=t=>{const e=pt(),n=zt(),s=mn();if(![e,n,s].includes(document.activeElement))return;const i=Jd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Zs().children.length;o++){if(r=r[i],!r)return;if(et(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},g0=(t,e,n)=>{Er(e.allowEscapeKey)&&(t.preventDefault(),n(es.esc))};function Zd(t,e,n,s){Cr()?vc(t,s):(Bw(n).then(()=>vc(t,s)),Xd(B)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ka()&&(Fb(),Hb(),zd()),m0()}function m0(){_t([document.documentElement,document.body],[g.shown,g["height-auto"],g["no-backdrop"],g["toast-shown"]])}function hi(t){t=b0(t);const e=Ns.swalPromiseResolve.get(this),n=v0(this);this.isAwaitingPromise()?t.isDismissed||(ti(this),e(t)):n&&e(t)}function y0(){return!!U.awaitingPromise.get(this)}const v0=t=>{const e=J();if(!e)return!1;const n=U.innerParams.get(t);if(!n||At(e,n.hideClass.popup))return!1;_t(e,n.showClass.popup),H(e,n.hideClass.popup);const s=Be();return _t(s,n.showClass.backdrop),H(s,n.hideClass.backdrop),E0(t,e,n),!0};function w0(t){const e=Ns.swalPromiseReject.get(this);ti(this),e&&e(t)}const ti=t=>{t.isAwaitingPromise()&&(U.awaitingPromise.delete(t),U.innerParams.get(t)||t._destroy())},b0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),E0=(t,e,n)=>{const s=Be(),i=Ps&&qd(e);typeof n.willClose=="function"&&n.willClose(e),i?_0(t,e,s,n.returnFocus,n.didClose):Zd(t,s,n.returnFocus,n.didClose)},_0=(t,e,n,s,i)=>{B.swalCloseEventFinishedCallback=Zd.bind(null,t,n,s,i),e.addEventListener(Ps,function(r){r.target===e&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback)})},vc=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function ef(t,e,n){const s=U.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function tf(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function T0(){ef(this,["confirmButton","denyButton","cancelButton"],!1)}function C0(){ef(this,["confirmButton","denyButton","cancelButton"],!0)}function S0(){return tf(this.getInput(),!1)}function I0(){return tf(this.getInput(),!0)}function A0(t){const e=U.domCache.get(this),n=U.innerParams.get(this);Le(e.validationMessage,t),e.validationMessage.className=g["validation-message"],n.customClass&&n.customClass.validationMessage&&H(e.validationMessage,n.customClass.validationMessage),De(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",g["validation-message"]),Ud(s),H(s,g.inputerror))}function k0(){const t=U.domCache.get(this);t.validationMessage&&Ve(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),_t(e,g.inputerror))}function D0(){return U.domCache.get(this).progressSteps}function P0(t){const e=J(),n=U.innerParams.get(this);if(!e||At(e,n.hideClass.popup))return Xe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=N0(t),i=Object.assign({},n,s);Kd(this,i),U.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const N0=t=>{const e={};return Object.keys(t).forEach(n=>{Ld(n)?e[n]=t[n]:Xe(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function O0(){const t=U.domCache.get(this),e=U.innerParams.get(this);if(!e){nf(this);return}t.popup&&B.swalCloseEventFinishedCallback&&(B.swalCloseEventFinishedCallback(),delete B.swalCloseEventFinishedCallback),B.deferDisposalTimer&&(clearTimeout(B.deferDisposalTimer),delete B.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),R0(this)}const R0=t=>{nf(t),delete t.params,delete B.keydownHandler,delete B.keydownTarget,delete B.currentInstance},nf=t=>{t.isAwaitingPromise()?(Gr(U,t),U.awaitingPromise.set(t,!0)):(Gr(Ns,t),Gr(U,t))},Gr=(t,e)=>{for(const n in t)t[n].delete(e)},sf=Object.freeze(Object.defineProperty({__proto__:null,_destroy:O0,close:hi,closeModal:hi,closePopup:hi,closeToast:hi,disableButtons:C0,disableInput:I0,disableLoading:yc,enableButtons:T0,enableInput:S0,getInput:r0,getProgressSteps:D0,handleAwaitingPromise:ti,hideLoading:yc,isAwaitingPromise:y0,rejectPromise:w0,resetValidationMessage:k0,showValidationMessage:A0,update:P0},Symbol.toStringTag,{value:"Module"})),L0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.input?rf(t,"confirm"):Xa(t,!0)},M0=t=>{const e=U.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?rf(t,"deny"):Ya(t,!1)},x0=(t,e)=>{t.disableButtons(),e(es.cancel)},rf=(t,e)=>{const n=U.innerParams.get(t);if(!n.input)return _n(`The "input" parameter is needed to be set when using returnInputValueOn${Ua(e)}`);const s=Xb(t,n);n.inputValidator?F0(t,s,e):t.getInput().checkValidity()?e==="deny"?Ya(t,s):Xa(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},F0=(t,e,n)=>{const s=U.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ys(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ya(t,e):Xa(t,e)})},Ya=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnDeny&&zn(zt()),n.preDeny?(U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ys(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),ti(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>of(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},wc=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},of=(t,e)=>{t.rejectPromise(e)},Xa=(t,e)=>{const n=U.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&zn(),n.preConfirm?(t.resetValidationMessage(),U.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>Ys(n.preConfirm(e,n.validationMessage))).then(i=>{et(_r())||i===!1?(t.hideLoading(),ti(t)):wc(t,typeof i>"u"?e:i)}).catch(i=>of(t||globalThis,i))):wc(t,e)},B0=(t,e,n)=>{U.innerParams.get(t).toast?V0(t,e,n):(j0(e),q0(e),$0(t,e,n))},V0=(t,e,n)=>{e.popup.onclick=()=>{const s=U.innerParams.get(t);s&&(U0(s)||s.timer||s.input)||n(es.close)}},U0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let ji=!1;const j0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(ji=!0)}}},q0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(ji=!0)}}},$0=(t,e,n)=>{e.container.onclick=s=>{const i=U.innerParams.get(t);if(ji){ji=!1;return}s.target===e.container&&Er(i.allowOutsideClick)&&n(es.backdrop)}},H0=t=>typeof t=="object"&&t.jquery,bc=t=>t instanceof Element||H0(t),K0=t=>{const e={};return typeof t[0]=="object"&&!bc(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||bc(i)?e[n]=i:i!==void 0&&_n(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function z0(...t){const e=this;return new e(...t)}function G0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const W0=()=>B.timeout&&B.timeout.getTimerLeft(),af=()=>{if(B.timeout)return Mw(),B.timeout.stop()},lf=()=>{if(B.timeout){const t=B.timeout.start();return Ga(t),t}},Q0=()=>{const t=B.timeout;return t&&(t.running?af():lf())},Y0=t=>{if(B.timeout){const e=B.timeout.increase(t);return Ga(e,!0),e}},X0=()=>B.timeout&&B.timeout.isRunning();let Ec=!1;const Mo={};function J0(t="data-swal-template"){Mo[t]=this,Ec||(document.body.addEventListener("click",Z0),Ec=!0)}const Z0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Mo){const s=e.getAttribute(n);if(s){Mo[n].fire({template:s});return}}},eE=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:K0,bindClickHandler:J0,clickCancel:l0,clickConfirm:Yd,clickDeny:a0,enableLoading:zn,fire:z0,getActions:Zs,getCancelButton:mn,getCloseButton:$a,getConfirmButton:pt,getContainer:Be,getDenyButton:zt,getFocusableElements:Ha,getFooter:Vd,getHtmlContainer:Ui,getIcon:Js,getImage:Fd,getInputLabel:Pw,getLoader:Zn,getPopup:J,getTimerLeft:W0,getTimerProgressBar:Tr,getTitle:xd,getValidationMessage:_r,increaseTimer:Y0,isDeprecatedParameter:Oo,isLoading:Ow,isTimerRunning:X0,isUpdatableParameter:Ld,isValidParameter:Rd,isVisible:o0,mixin:G0,resumeTimer:lf,showLoading:zn,stopTimer:af,toggleTimer:Q0},Symbol.toStringTag,{value:"Module"}));let xo;class ts{constructor(...e){if(typeof window>"u")return;xo=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);U.promise.set(this,s)}_main(e,n={}){kw(Object.assign({},n,e)),B.currentInstance&&(B.currentInstance._destroy(),Ka()&&zd()),B.currentInstance=this;const s=nE(e,n);Lb(s),Object.freeze(s),B.timeout&&(B.timeout.stop(),delete B.timeout),clearTimeout(B.restoreFocusTimeout);const i=sE(this);return Kd(this,s),U.innerParams.set(this,s),tE(this,i,s)}then(e){return U.promise.get(this).then(e)}finally(e){return U.promise.get(this).finally(e)}}const tE=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Ns.swalPromiseResolve.set(t,s),Ns.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>L0(t),e.denyButton.onclick=()=>M0(t),e.cancelButton.onclick=()=>x0(t,r),e.closeButton.onclick=()=>r(es.close),B0(t,e,r),c0(t,B,n,r),Yb(t,n),Kb(n),iE(B,n,r),rE(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nE=(t,e)=>{const n=Cb(t),s=Object.assign({},Mn,e,n,t);return s.showClass=Object.assign({},Mn.showClass,s.showClass),s.hideClass=Object.assign({},Mn.hideClass,s.hideClass),s},sE=t=>{const e={popup:J(),container:Be(),actions:Zs(),confirmButton:pt(),denyButton:zt(),cancelButton:mn(),loader:Zn(),closeButton:$a(),validationMessage:_r(),progressSteps:Bd()};return U.domCache.set(t,e),e},iE=(t,e,n)=>{const s=Tr();Ve(s),e.timer&&(t.timeout=new Mb(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(De(s),ot(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ga(e.timer)})))},rE=(t,e)=>{if(!e.toast){if(!Er(e.allowEnterKey))return aE();oE(t,e)||Lo(e,-1,1)}},oE=(t,e)=>e.focusDeny&&et(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&et(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&et(t.confirmButton)?(t.confirmButton.focus(),!0):!1,aE=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(ts.prototype,sf);Object.assign(ts,eE);Object.keys(sf).forEach(t=>{ts[t]=function(...e){if(xo)return xo[t](...e)}});ts.DismissReason=es;ts.version="11.4.8";const Os=ts;Os.default=Os;const Sn=[];function Ir(t,e=pe){let n;const s=new Set;function i(a){if(Ot(t,a)&&(t=a,n)){const l=!Sn.length;for(const c of s)c[1](),Sn.push(c,t);if(l){for(let c=0;c<Sn.length;c+=2)Sn[c][0](Sn[c+1]);Sn.length=0}}}function r(a){i(a(t))}function o(a,l=pe){const c=[a,l];return s.add(c),s.size===1&&(n=e(i)||pe),a(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Wr=Ir({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Fo=Ir(""),Bo=Ir(""),vi=Ir(""),lE=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},cE=async t=>{try{await Va(It(Ae,"Pacientes",t.id),t)}catch(e){console.log(e)}};function _c(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function Tc(t){let e,n,s;function i(a,l){return a[0].length==0?hE:uE}let r=i(t),o=r(t);return{c(){e=C("select"),o.c(),m(e,"name","select-pacientes"),m(e,"class","select-Pacientes svelte-2shrp8"),m(e,"id","elementoSelectPacientes"),m(e,"size",5),t[1]===void 0&&hn(()=>t[4].call(e))},m(a,l){W(a,e,l),o.m(e,null),Vt(e,t[1]),n||(s=[K(e,"change",t[2]),K(e,"change",t[4])],n=!0)},p(a,l){r===(r=i(a))&&o?o.p(a,l):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),l&2&&Vt(e,a[1])},d(a){a&&G(e),o.d(),n=!1,gt(s)}}}function uE(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=Cc(_c(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Vo()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);W(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=_c(i,n,o);s[o]?s[o].p(a,r):(s[o]=Cc(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Rs(s,i),i&&G(e)}}}function hE(t){let e;return{c(){e=C("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){W(n,e,s)},p:pe,d(n){n&&G(e)}}}function Cc(t){let e,n=`${t[7].apellido}, ${t[7].nombre}${t[7].plan=="particular"?"":" -"+t[7].nroSocio+" - plan "+t[7].plan.plan} `,s;return{c(){e=C("option"),s=z(n),e.__value=t[9],e.value=e.__value},m(i,r){W(i,e,r),v(e,s)},p(i,r){r&1&&n!==(n=`${i[7].apellido}, ${i[7].nombre}${i[7].plan=="particular"?"":" -"+i[7].nroSocio+" - plan "+i[7].plan.plan} `)&&Ke(s,n)},d(i){i&&G(e)}}}function dE(t){let e,n=t[0].length>0&&Tc(t);return{c(){n&&n.c(),e=Vo()},m(s,i){n&&n.m(s,i),W(s,e,i)},p(s,[i]){s[0].length>0?n?n.p(s,i):(n=Tc(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:pe,o:pe,d(s){n&&n.d(s),s&&G(e)}}}function fE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r=0,o;const a=Uo(),l=u=>{const h=u.target.value;n(3,i=s[h].plan),o=s[h].id,a("cambioSelectPaciente",[h,i,o]),console.log(`dispatch cambioSelectPaciente, idPaciente ${o} valorindiceSelectPaciente: 
      ${h}, planSelect ${i.plan?i.plan:"particular"}`)};function c(){r=bi(this),n(1,r)}return t.$$set=u=>{"pacientesFiltrada"in u&&n(0,s=u.pacientesFiltrada),"planSelect"in u&&n(3,i=u.planSelect)},[s,r,l,i,c]}class pE extends Wt{constructor(e){super(),Gt(this,e,fE,dE,Ot,{pacientesFiltrada:0,planSelect:3})}}function gE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,p,y,b,k,S,O,N,F,Te,re,Ce,Z,Ue,se,le,je,ce,qe,$e,te,V,Se,ee,Ct,mt,T,ge,ue,We,Zt,ni;return F=new pE({props:{pacientesFiltrada:t[3],planSelect:mE}}),F.$on("cambioSelectPaciente",t[15]),ue=new Cf({props:{planes:t[1],planSeleccionado:t[0],SelectPlanVisible:t[6],indicePlan:t[5]}}),ue.$on("cambioPlan",t[14]),ue.$on("clickCheckPlan",t[16]),{c(){e=C("body"),n=C("div"),s=C("div"),i=C("button"),r=z("create"),a=$(),l=C("button"),c=z("update"),h=$(),d=C("button"),f=z("delete"),y=$(),b=C("div"),k=C("label"),k.textContent="filtrar por apellido",S=C("input"),O=$(),N=C("div"),dn(F.$$.fragment),Te=$(),re=C("div"),Ce=C("label"),Ce.textContent="nombre",Z=C("input"),Ue=$(),se=C("label"),se.textContent="apellido",le=C("input"),je=$(),ce=C("div"),qe=C("label"),qe.textContent="nº socio",$e=$(),te=C("div"),V=C("input"),Se=$(),ee=C("button"),ee.textContent="✎",Ct=$(),mt=C("label"),T=z(t[10]),ge=$(),dn(ue.$$.fragment),i.disabled=o=!t[7]||!t[8]||!t[0]||!t[9],m(i,"class","svelte-40mbgp"),l.disabled=u=!t[7]||!t[8]||!t[0]||!t[9]||!t[4],m(l,"class","svelte-40mbgp"),d.disabled=p=!t[4],m(d,"class","svelte-40mbgp"),m(s,"class","buttons svelte-40mbgp"),m(n,"id","botones"),m(n,"class","svelte-40mbgp"),m(k,"for","filterPrefix"),m(k,"class","svelte-40mbgp"),m(S,"name","filterPrefix"),m(S,"placeholder","filter prefix"),m(S,"class","svelte-40mbgp"),m(b,"id","filter"),m(b,"class","svelte-40mbgp"),m(N,"id","selectPacientes"),m(N,"class","svelte-40mbgp"),m(Ce,"for","nombre"),m(Ce,"class","svelte-40mbgp"),m(Z,"name","nombre"),m(Z,"placeholder","nombre"),m(Z,"class","svelte-40mbgp"),m(se,"for","apellido"),m(se,"class","svelte-40mbgp"),m(le,"name","apellido"),m(le,"placeholder","apellido"),m(le,"class","svelte-40mbgp"),m(re,"id","formInputsI"),m(re,"class","svelte-40mbgp"),m(qe,"for","nroSocio"),m(qe,"class","svelte-40mbgp"),m(V,"id","inputNroSocio"),m(V,"name","nroSocio"),m(V,"placeholder","nro de Socio"),m(V,"class","svelte-40mbgp"),m(ee,"class","svelte-40mbgp"),m(te,"class","formRow svelte-40mbgp"),m(mt,"id","labelPlan"),m(mt,"for","plan"),m(mt,"class","svelte-40mbgp"),m(ce,"id","formInputsD"),m(ce,"class","svelte-40mbgp"),m(e,"class","svelte-40mbgp")},m(_,Q){W(_,e,Q),v(e,n),v(n,s),v(s,i),v(i,r),v(s,a),v(s,l),v(l,c),v(s,h),v(s,d),v(d,f),v(e,y),v(e,b),v(b,k),v(b,S),Ee(S,t[2]),v(e,O),v(e,N),Ut(F,N,null),v(e,Te),v(e,re),v(re,Ce),v(re,Z),Ee(Z,t[7]),v(re,Ue),v(re,se),v(re,le),Ee(le,t[8]),v(e,je),v(e,ce),v(ce,qe),v(ce,$e),v(ce,te),v(te,V),Ee(V,t[9]),v(te,Se),v(te,ee),v(ce,Ct),v(ce,mt),v(mt,T),v(ce,ge),Ut(ue,ce,null),We=!0,Zt||(ni=[K(i,"click",t[11]),K(l,"click",t[12]),K(d,"click",t[13]),K(S,"input",t[21]),K(Z,"input",t[22]),K(le,"input",t[23]),K(V,"input",t[24]),K(ee,"click",yE)],Zt=!0)},p(_,Q){(!We||Q[0]&897&&o!==(o=!_[7]||!_[8]||!_[0]||!_[9]))&&(i.disabled=o),(!We||Q[0]&913&&u!==(u=!_[7]||!_[8]||!_[0]||!_[9]||!_[4]))&&(l.disabled=u),(!We||Q[0]&16&&p!==(p=!_[4]))&&(d.disabled=p),Q[0]&4&&S.value!==_[2]&&Ee(S,_[2]);const me={};Q[0]&8&&(me.pacientesFiltrada=_[3]),F.$set(me),Q[0]&128&&Z.value!==_[7]&&Ee(Z,_[7]),Q[0]&256&&le.value!==_[8]&&Ee(le,_[8]),Q[0]&512&&V.value!==_[9]&&Ee(V,_[9]),(!We||Q[0]&1024)&&Ke(T,_[10]);const He={};Q[0]&2&&(He.planes=_[1]),Q[0]&1&&(He.planSeleccionado=_[0]),Q[0]&64&&(He.SelectPlanVisible=_[6]),Q[0]&32&&(He.indicePlan=_[5]),ue.$set(He)},i(_){We||(Je(F.$$.fragment,_),Je(ue.$$.fragment,_),We=!0)},o(_){ht(F.$$.fragment,_),ht(ue.$$.fragment,_),We=!1},d(_){_&&G(e),jt(F),jt(ue),Zt=!1,gt(ni)}}}let mE="particular";function yE(t){const e=document.getElementById("inputNroSocio");console.log(`input ${e}`),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}function vE(t,e,n){let s,i,r,o,a;sn(t,vi,T=>n(25,i=T)),sn(t,Wr,T=>n(26,r=T)),sn(t,Bo,T=>n(27,o=T)),sn(t,Fo,T=>n(28,a=T));let{pacientes:l=[]}=e,{sesiones:c}=e,{planes:u}=e,{planSeleccionado:h}=e,d=["nombre","apellido","nroSocio","plan","createdAt"],{optionsPlan:f}=e,p,y=0,b;Vc(()=>{lE(l,d),l.forEach(T=>{cE(T)}),console.log(a)});let k="",S="",O="",N="",F=[],Te="plan";Tn(Wr,r=s,r);const re=T=>{n(7,S=T?T.nombre:""),n(8,O=T?T.apellido:""),n(9,N=T?T.nroSocio:""),n(0,h=T?T.plan:{})},Ce=async()=>{try{await Ad(st(Ae,"Pacientes"),{nombre:S,apellido:O,nroSocio:N,createdAt:new Date().toLocaleDateString(),plan:h}),Ln({text:"Nuevo paciente agregado"}).showToast()}catch(T){console.error(T)}},Z=()=>{n(17,l=l.concat({nombre:S,apellido:O})),n(20,y=l.length-1),Ce(),n(7,S=n(8,O=n(0,h=n(9,N=""))))},Ue=async T=>{try{await Va(It(Ae,"Pacientes",T.id),T),Ln({text:`paciente ${T.apellido}, ${T.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(ge){console.error(ge)}},se=()=>{n(4,s.nombre=S,s),n(4,s.apellido=O,s),n(0,h=s.plan),n(4,s.nroSocio=N,s),n(4,s),n(3,F),n(20,y),n(2,k),n(17,l),n(17,l),Ue(s)},le=async T=>{try{await Po(It(Ae,"Pacientes",T.id)),Ln({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch(ue){console.error(ue)}const ge=fs(st(Ae,"sesiones"),Do("pacienteID","==",T.id));console.log(`desde delete q=pacientes a borrar ${ge} - paciente: ${T.nombre} ${T.apellido} ${T.id}`);try{(await Id(ge)).forEach(We=>{Po(We.ref)})}catch(ue){console.log(ue)}},je=()=>{const T=l.indexOf(s);Os.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(ge=>{ge.isConfirmed&&(Os.fire("Deleted!","Your file has been deleted.","success"),le(l[y]),n(17,l=[...l.slice(0,T),...l.slice(T+1)]),n(7,S=n(8,O=n(9,N=n(0,h="")))),n(20,y=Math.min(y,F.length-2)))})},ce=T=>{n(4,s.plan=T,s),n(4,s.nombre=S,s),n(4,s.apellido=O,s),n(4,s.nroSocio=N,s),n(3,F[y].plan=T,F),Ue(s)},qe=T=>{n(0,h=T.detail),console.log(h),s.plan.plan!=h.plan&&ce(h)},$e=T=>{T?(n(10,Te="particular"),n(6,b=!1)):(n(10,Te="plan"),n(6,b=!0))},te=T=>{n(20,y=T.detail[0]);const ge=T.detail[1];Tn(vi,i=T.detail[2],i);const ue=typeof ge=="string"?"particular":ge.plan;console.log(`i ${y}, planSelect ${ue}`),n(0,h=ue=="particular"?"particular":F[y].plan),h!="particular"&&(n(5,p=u.findIndex(Zt=>Zt.plan===ue)),console.log(`indicePlan ${p}, ${typeof p}`));const We=ue=="particular";$e(We)},V=T=>{const ge=T.detail.valor.SelectPlanVisible;ge?ge&&h=="particular"&&n(0,h="210"):n(0,h="particular"),ce(h),$e(!ge)};function Se(){k=this.value,n(2,k)}function ee(){S=this.value,n(7,S)}function Ct(){O=this.value,n(8,O)}function mt(){N=this.value,n(9,N)}return t.$$set=T=>{"pacientes"in T&&n(17,l=T.pacientes),"sesiones"in T&&n(18,c=T.sesiones),"planes"in T&&n(1,u=T.planes),"planSeleccionado"in T&&n(0,h=T.planSeleccionado),"optionsPlan"in T&&n(19,f=T.optionsPlan)},t.$$.update=()=>{t.$$.dirty[0]&131076&&n(3,F=k?l.filter(T=>`${T.apellido}, ${T.nombre}`.toLowerCase().startsWith(k.toLowerCase())):l.map(T=>({nombre:T.nombre,apellido:T.apellido,plan:T.plan,nroSocio:T.nroSocio,id:T.id}))),t.$$.dirty[0]&1048584&&n(4,s=F[y]),t.$$.dirty[0]&16&&s&&(Tn(Wr,r=s,r),Tn(Fo,a=s.apellido,a),Tn(Bo,o=s.nombre,o),Tn(vi,i=s.id,i)),t.$$.dirty[0]&16&&re(s)},[h,u,k,F,s,p,b,S,O,N,Te,Z,se,je,qe,te,V,l,c,f,y,Se,ee,Ct,mt]}class wE extends Wt{constructor(e){super(),Gt(this,e,vE,gE,Ot,{pacientes:17,sesiones:18,planes:1,planSeleccionado:0,optionsPlan:19},null,[-1,-1])}}const bE=st(Ae,"sesiones");st(Ae,"Pacientes");st(Ae,"Planes");const EE=async t=>{const e=fi(t),n=e.fechaInicio,s=e.fechaFin;try{return(await Id(fs(bE,Do("diaSesion",">=",n),Do("diaSesion","<=",s)))).docs.map(r=>r.data())}catch(i){console.error(i)}};function Sc(t,e,n){const s=t.slice();return s[7]=e[n],s}function Ic(t){let e,n,s,i,r,o,a,l,c,u=t[2],h=[];for(let d=0;d<u.length;d+=1)h[d]=Ac(Sc(t,u,d));return{c(){e=C("ol");for(let d=0;d<h.length;d+=1)h[d].c();n=$(),s=C("p"),i=z("Total: $"),r=z(t[3]),o=$(),a=C("button"),a.textContent="Cerrar",m(s,"class","centrar svelte-j6pq9d")},m(d,f){W(d,e,f);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(e,null);W(d,n,f),W(d,s,f),v(s,i),v(s,r),W(d,o,f),W(d,a,f),l||(c=K(a,"click",t[5]),l=!0)},p(d,f){if(f&4){u=d[2];let p;for(p=0;p<u.length;p+=1){const y=Sc(d,u,p);h[p]?h[p].p(y,f):(h[p]=Ac(y),h[p].c(),h[p].m(e,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=u.length}f&8&&Ke(r,d[3])},d(d){d&&G(e),Rs(h,d),d&&G(n),d&&G(s),d&&G(o),d&&G(a),l=!1,c()}}}function Ac(t){let e,n=`${yt(t[7].diaSesion.slice(8,10),2,!1)}
                    -${yt(t[7].apellido+","+t[7].nombre,10,!1)}
                    -${yt(t[7].plan,4,!0)}
                    - pago: $ ${yt(t[7].valorPago,5,!0)} - valor sesion: $${yt(t[7].valorSesion,5,!0)} `,s,i;return{c(){e=C("li"),s=z(n),i=$()},m(r,o){W(r,e,o),v(e,s),v(e,i)},p(r,o){o&4&&n!==(n=`${yt(r[7].diaSesion.slice(8,10),2,!1)}
                    -${yt(r[7].apellido+","+r[7].nombre,10,!1)}
                    -${yt(r[7].plan,4,!0)}
                    - pago: $ ${yt(r[7].valorPago,5,!0)} - valor sesion: $${yt(r[7].valorSesion,5,!0)} `)&&Ke(s,n)},d(r){r&&G(e)}}}function _E(t){let e,n,s,i,r,o,a,l=t[0]&&Ic(t);return{c(){e=C("button"),n=z("Ver Listado de Sesiones Mes "),s=z(t[1]),i=$(),r=C("div"),l&&l.c(),m(r,"class","listadoSesionesPorMes svelte-j6pq9d")},m(c,u){W(c,e,u),v(e,n),v(e,s),W(c,i,u),W(c,r,u),l&&l.m(r,null),o||(a=K(e,"click",t[4]),o=!0)},p(c,[u]){u&2&&Ke(s,c[1]),c[0]?l?l.p(c,u):(l=Ic(c),l.c(),l.m(r,null)):l&&(l.d(1),l=null)},i:pe,o:pe,d(c){c&&G(e),c&&G(i),c&&G(r),l&&l.d(),o=!1,a()}}}function yt(t,e,n){let s=String(t);return s.length>e?s=s.slice(0,e):s.length<e&&n?s=s.padStart(e,"_"):s.length<e&&!n&&(s=s.padEnd(e,"_")),s}function TE(t,e,n){let{mesSeleccionado:s}=e,{vistaCalculos:i}=e,{arrayParaLaVista:r}=e,{totalPagos:o}=e;const a=Uo(),l=()=>{i==!1&&a("vistaPulsado",s),n(0,i=!i)},c=()=>n(0,i=!i);return t.$$set=u=>{"mesSeleccionado"in u&&n(1,s=u.mesSeleccionado),"vistaCalculos"in u&&n(0,i=u.vistaCalculos),"arrayParaLaVista"in u&&n(2,r=u.arrayParaLaVista),"totalPagos"in u&&n(3,o=u.totalPagos)},[i,s,r,o,l,c]}class CE extends Wt{constructor(e){super(),Gt(this,e,TE,_E,Ot,{mesSeleccionado:1,vistaCalculos:0,arrayParaLaVista:2,totalPagos:3})}}function SE(t){let e,n,s,i,r,o,a;return{c(){e=C("p"),n=z("total general:"),s=z(t[0]),i=$(),r=C("p"),o=z("total por paciente: "),a=z(t[1]),m(e,"id","totalGeneral")},m(l,c){W(l,e,c),v(e,n),v(e,s),W(l,i,c),W(l,r,c),v(r,o),v(r,a)},p(l,[c]){c&1&&Ke(s,l[0]),c&2&&Ke(a,l[1])},i:pe,o:pe,d(l){l&&G(e),l&&G(i),l&&G(r)}}}function IE(t,e,n){let{registrosMesActual:s}=e,{varSumaValorPagoPorPaciente:i}=e;return t.$$set=r=>{"registrosMesActual"in r&&n(0,s=r.registrosMesActual),"varSumaValorPagoPorPaciente"in r&&n(1,i=r.varSumaValorPagoPorPaciente)},[s,i]}class AE extends Wt{constructor(e){super(),Gt(this,e,IE,SE,Ot,{registrosMesActual:0,varSumaValorPagoPorPaciente:1})}}function kc(t,e,n){const s=t.slice();return s[50]=e[n],s}function Dc(t,e,n){const s=t.slice();return s[53]=e[n],s}function Pc(t){let e,n,s,i,r;return{c(){e=C("h4"),n=z("Paciente: "),s=z(t[13]),i=z(", "),r=z(t[14]),m(e,"class","svelte-1imwuid")},m(o,a){W(o,e,a),v(e,n),v(e,s),v(e,i),v(e,r)},p(o,a){a[0]&8192&&Ke(s,o[13]),a[0]&16384&&Ke(r,o[14])},d(o){o&&G(e)}}}function Nc(t){let e,n,s,i,r,o,a,l=t[0],c=[];for(let u=0;u<l.length;u+=1)c[u]=Rc(Dc(t,l,u));return i=new AE({props:{registrosMesActual:t[8],varSumaValorPagoPorPaciente:t[6]}}),{c(){e=C("div"),n=C("select");for(let u=0;u<c.length;u+=1)c[u].c();s=$(),dn(i.$$.fragment),m(n,"id","select-sesiones"),m(n,"size",5),m(n,"class","svelte-1imwuid"),t[1]===void 0&&hn(()=>t[25].call(n)),m(e,"id","select"),m(e,"class","svelte-1imwuid")},m(u,h){W(u,e,h),v(e,n);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(n,null);Vt(n,t[1]),v(e,s),Ut(i,e,null),r=!0,o||(a=[K(n,"change",t[16]),K(n,"change",t[25])],o=!0)},p(u,h){if(h[0]&137){l=u[0];let f;for(f=0;f<l.length;f+=1){const p=Dc(u,l,f);c[f]?c[f].p(p,h):(c[f]=Rc(p),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=l.length}h[0]&3&&Vt(n,u[1]);const d={};h[0]&256&&(d.registrosMesActual=u[8]),h[0]&64&&(d.varSumaValorPagoPorPaciente=u[6]),i.$set(d)},i(u){r||(Je(i.$$.fragment,u),r=!0)},o(u){ht(i.$$.fragment,u),r=!1},d(u){u&&G(e),Rs(c,u),jt(i),o=!1,gt(a)}}}function Oc(t){let e,n,s=t[53].diaSesion+"",i,r,o=t[53].valorSesion+"",a,l,c=t[53].fechaPago+"",u,h,d=t[53].valorPago+"",f,p,y;return{c(){e=C("option"),n=z("dia sesion: "),i=z(s),r=z(" - valor sesion: "),a=z(o),l=z(`
              - dia pago `),u=z(c),h=z(" - valor pago "),f=z(d),p=$(),m(e,"class"," svelte-1imwuid"),e.__value=y=t[53].id,e.value=e.__value},m(b,k){W(b,e,k),v(e,n),v(e,i),v(e,r),v(e,a),v(e,l),v(e,u),v(e,h),v(e,f),v(e,p)},p(b,k){k[0]&1&&s!==(s=b[53].diaSesion+"")&&Ke(i,s),k[0]&1&&o!==(o=b[53].valorSesion+"")&&Ke(a,o),k[0]&1&&c!==(c=b[53].fechaPago+"")&&Ke(u,c),k[0]&1&&d!==(d=b[53].valorPago+"")&&Ke(f,d),k[0]&1&&y!==(y=b[53].id)&&(e.__value=y,e.value=e.__value)},d(b){b&&G(e)}}}function Rc(t){let e=Object.values(t[53]).includes(t[3])&&t[53].diaSesion.slice(5,7)==t[7],n,s=e&&Oc(t);return{c(){s&&s.c(),n=Vo()},m(i,r){s&&s.m(i,r),W(i,n,r)},p(i,r){r[0]&137&&(e=Object.values(i[53]).includes(i[3])&&i[53].diaSesion.slice(5,7)==i[7]),e?s?s.p(i,r):(s=Oc(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&G(n)}}}function kE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f,p,y,b,k,S,O,N,F,Te,re,Ce,Z,Ue,se,le,je,ce,qe,$e=t[15],te=[];for(let V=0;V<$e.length;V+=1)te[V]=Lc(kc(t,$e,V));return{c(){e=C("div"),n=C("form"),s=C("div"),i=C("div"),r=C("label"),r.textContent="pago",o=C("input"),a=$(),l=C("label"),l.textContent="valor sesion",c=C("input"),u=$(),h=C("div"),d=C("label"),d.textContent="Dia Sesion",f=C("input"),p=$(),y=C("label"),y.textContent="Fecha Pago",b=C("input"),k=$(),S=C("div"),O=C("button"),O.textContent="update",N=$(),F=C("button"),F.textContent="delete",Te=$(),re=C("button"),re.textContent="Agregar sesión",Ce=$(),Z=C("select");for(let V=0;V<te.length;V+=1)te[V].c();Ue=$(),se=C("button"),le=z("listar mes "),je=z(t[7]),m(r,"for","valorPago"),m(r,"class","svelte-1imwuid"),m(o,"name","valorPago"),m(o,"type","number"),m(o,"step","100"),m(o,"min","0"),m(o,"placeholder","Valor pago"),m(o,"class","svelte-1imwuid"),m(l,"for","valorSesion"),m(l,"class","svelte-1imwuid"),m(c,"name","valorSesion"),m(c,"type","number"),m(c,"step","100"),m(c,"min","0"),m(c,"placeholder","Valor sesión"),m(c,"class","svelte-1imwuid"),m(i,"id","inputsFormSesionesI"),m(i,"class","svelte-1imwuid"),m(d,"for","diaSesion"),m(d,"class","svelte-1imwuid"),m(f,"name","diaSesion"),m(f,"type","date"),m(f,"placeholder","Día sesión"),m(f,"class","svelte-1imwuid"),m(y,"for","fechaPago"),m(y,"class","svelte-1imwuid"),m(b,"name","fechaPago"),m(b,"type","date"),m(b,"placeholder","Fecha pago"),m(b,"class","svelte-1imwuid"),m(h,"id","inputsFormSesionesD"),m(h,"class","svelte-1imwuid"),m(O,"class","svelte-1imwuid"),m(F,"class","svelte-1imwuid"),m(re,"class","svelte-1imwuid"),m(Z,"name","mes"),m(Z,"id","mesRegistro"),m(Z,"class","svelte-1imwuid"),t[7]===void 0&&hn(()=>t[33].call(Z)),m(se,"class","svelte-1imwuid"),m(S,"id","botonesFormSesiones"),m(S,"class","buttons svelte-1imwuid"),m(s,"id","form-Sesiones"),m(s,"class","svelte-1imwuid"),m(n,"class","svelte-1imwuid"),m(e,"id","contenedor-form-sesiones"),m(e,"class","svelte-1imwuid")},m(V,Se){W(V,e,Se),v(e,n),v(n,s),v(s,i),v(i,r),v(i,o),Ee(o,t[9]),v(i,a),v(i,l),v(i,c),Ee(c,t[10]),v(s,u),v(s,h),v(h,d),v(h,f),Ee(f,t[11]),v(h,p),v(h,y),v(h,b),Ee(b,t[12]),v(s,k),v(s,S),v(S,O),v(S,N),v(S,F),v(S,Te),v(S,re),v(S,Ce),v(S,Z);for(let ee=0;ee<te.length;ee+=1)te[ee]&&te[ee].m(Z,null);Vt(Z,t[7]),v(S,Ue),v(S,se),v(se,le),v(se,je),ce||(qe=[K(o,"input",t[26]),K(c,"input",t[27]),K(f,"input",t[28]),K(b,"input",t[29]),K(O,"click",t[30]),K(F,"click",t[31]),K(re,"click",t[17]),K(Z,"change",t[32]),K(Z,"change",t[33]),K(se,"click",t[34]),K(n,"submit",df(t[24]))],ce=!0)},p(V,Se){if(Se[0]&512&&wi(o.value)!==V[9]&&Ee(o,V[9]),Se[0]&1024&&wi(c.value)!==V[10]&&Ee(c,V[10]),Se[0]&2048&&Ee(f,V[11]),Se[0]&4096&&Ee(b,V[12]),Se[0]&32768){$e=V[15];let ee;for(ee=0;ee<$e.length;ee+=1){const Ct=kc(V,$e,ee);te[ee]?te[ee].p(Ct,Se):(te[ee]=Lc(Ct),te[ee].c(),te[ee].m(Z,null))}for(;ee<te.length;ee+=1)te[ee].d(1);te.length=$e.length}Se[0]&32896&&Vt(Z,V[7]),Se[0]&128&&Ke(je,V[7])},d(V){V&&G(e),Rs(te,V),ce=!1,gt(qe)}}}function Lc(t){let e,n=`${t[50].nro.toString().padStart(2,"0")} - ${t[50].nombre}`,s;return{c(){e=C("option"),s=z(n),e.__value=t[50].nro,e.value=e.__value,m(e,"class","svelte-1imwuid")},m(i,r){W(i,e,r),v(e,s)},p:pe,d(i){i&&G(e)}}}function DE(t){let e,n,s,i,r,o,a,l=t[13]&&t[14]&&Pc(t),c=t[0].length>0&&Nc(t),u=kE(t);return o=new CE({props:{vistaCalculos:t[4],arrayParaLaVista:t[5],totalPagos:t[8],mesSeleccionado:t[7]}}),o.$on("vistaPulsado",t[35]),{c(){e=C("main"),n=C("body"),l&&l.c(),s=$(),c&&c.c(),i=$(),u&&u.c(),r=$(),dn(o.$$.fragment),m(n,"class","svelte-1imwuid"),m(e,"class","svelte-1imwuid")},m(h,d){W(h,e,d),v(e,n),l&&l.m(n,null),v(n,s),c&&c.m(n,null),v(n,i),u&&u.m(n,null),v(n,r),Ut(o,n,null),a=!0},p(h,d){h[13]&&h[14]?l?l.p(h,d):(l=Pc(h),l.c(),l.m(n,s)):l&&(l.d(1),l=null),h[0].length>0?c?(c.p(h,d),d[0]&1&&Je(c,1)):(c=Nc(h),c.c(),Je(c,1),c.m(n,i)):c&&(jc(),ht(c,1,1,()=>{c=null}),qc()),u.p(h,d);const f={};d[0]&16&&(f.vistaCalculos=h[4]),d[0]&32&&(f.arrayParaLaVista=h[5]),d[0]&256&&(f.totalPagos=h[8]),d[0]&128&&(f.mesSeleccionado=h[7]),o.$set(f)},i(h){a||(Je(c),Je(o.$$.fragment,h),a=!0)},o(h){ht(c),ht(o.$$.fragment,h),a=!1},d(h){h&&G(e),l&&l.d(),c&&c.d(),u&&u.d(),jt(o)}}}function PE(t,e,n){let s,i,r;sn(t,vi,_=>n(3,s=_)),sn(t,Fo,_=>n(13,i=_)),sn(t,Bo,_=>n(14,r=_));let{sesiones:o}=e,{pacientes:a}=e,{planes:l}=e,{planSeleccionado:c}=e,u,h=[],d,f=0;const p=new Date;let y=p.getMonth()+1,b=p.getFullYear(),k=y;console.log(`mesSeleccionado ${k}`);let S=[{nro:1,nombre:"enero"},{nro:2,nombre:"febrero"},{nro:3,nombre:"marzo"},{nro:4,nombre:"abri"},{nro:5,nombre:"mayo"},{nro:6,nombre:"junio"},{nro:7,nombre:"julio"},{nro:8,nombre:"agosto"},{nro:9,nombre:"setiembre"},{nro:10,nombre:"octubre"},{nro:11,nombre:"noviembre"},{nro:12,nombre:"diciembre"}],O,N,F=0;const Te=_=>{if(n(1,O=_.target.value),console.log(o),n(2,N=o.find(me=>me.id===O)),console.log("selectedSession",N),n(9,Ue=N.valorPago),console.log(`planSeleccionado: ${c}`),typeof c.plan>"u"||c.plan=="particular"||!c)n(10,se=N.valorSesion),console.log("particular",se);else{var Q=l.find(me=>me.plan==c);console.log(Q),console.log("OS",se)}n(12,je=N.fechaPago),n(11,le=N.diaSesion)},re=async()=>{console.log("Add sesion",N);try{const _=await Ad(st(Ae,"sesiones"),{valorPago:Ue,valorSesion:se,diaSesion:le,fechaPago:je,pacienteID:s});console.log("sesion agregada"),Ln({text:"Nueva sesion agregada"}).showToast(),n(1,O=_.id)}catch(_){console.error(_)}},Ce=async _=>{console.log("Update sesion",_);try{await Va(It(Ae,"sesiones",_.id),{valorPago:Ue,valorSesion:se,fechaPago:je,diaSesion:le}),Ln({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Q){console.log(Q)}},Z=async _=>{console.log("Delete sesion",_);try{await Po(It(Ae,"sesiones",_.id)),Ln({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Q){console.error(Q)}};let Ue=5e3,se=5e3,le=new Date().toISOString().slice(0,10),je=new Date().toISOString().slice(0,10);y.toString().padStart(2,"0"),b.toString();let ce=_=>o.filter(me=>me.pacienteID===_&&me.diaSesion.slice(5,7)===k.toString().padStart(2,"0")).reduce((me,He)=>me+He.valorSesion,0);const qe=async _=>{const Q=await $e(_);n(5,h=Q[1]),console.log(Array.isArray(Q[1])),console.log(Q[1]),n(4,u=!0)},$e=async _=>{_||(_=y);try{const Q=await EE(_);n(8,F=0),f=0;let me=[];return console.log(typeof me),Q.forEach(He=>{let cf=He.pacienteID;const lt=a.find(en=>en.id==cf);var ct=He.valorPago;if(ct==null&&(ct=0),typeof ct=="number")if(lt.plan=="particular"){n(8,F+=ct),ct<se&&(f+=se-ct);var ns={diaSesion:He.diaSesion,apellido:lt.apellido,nombre:lt.nombre,plan:lt.plan.plan?lt.plan.plan:"particular",valorPago:ct,valorSesion:He.valorSesion};console.log(ns),console.log(typeof me),me.push(ns)}else{const en=lt.plan;var ns={diaSesion:He.diaSesion,apellido:lt.apellido,nombre:lt.nombre,plan:lt.plan.plan?lt.plan.plan:"particular",valorPago:ct,valorSesion:He.valorSesion};console.log(ns),console.log(typeof me),me.push(ns),ct<en.valorCoseguro&&(f+=en.valorCoseguro-ct,console.log(`totalAdeudado: ${f}`)),n(8,F+=en.valorOs+ct),console.log(`paciente ${lt.apellido}, fechaSesion: ${He.diaSesion}, valor Os + Coseguro$${en.valorOs+en.valorCoseguro}, total acumulado ${F}`)}}),console.log("Total pagos mes actual: ",F),console.log("Total adeudado mes actual: ",f),n(6,d=ce(s)),console.log(typeof me),[F,me]}catch(Q){return console.error("Error al obtener las sesiones y los pagos:",Q),[]}};function te(_){mf.call(this,t,_)}function V(){O=bi(this),n(1,O),n(0,o)}function Se(){Ue=wi(this.value),n(9,Ue)}function ee(){se=wi(this.value),n(10,se)}function Ct(){le=this.value,n(11,le)}function mt(){je=this.value,n(12,je)}const T=()=>Ce(N),ge=()=>Z(N),ue=async _=>qe(_.target.value);function We(){k=bi(this),n(7,k),n(15,S)}const Zt=async()=>qe(k),ni=async()=>qe(k);return t.$$set=_=>{"sesiones"in _&&n(0,o=_.sesiones),"pacientes"in _&&n(21,a=_.pacientes),"planes"in _&&n(22,l=_.planes),"planSeleccionado"in _&&n(23,c=_.planSeleccionado)},t.$$.update=()=>{t.$$.dirty[0]&6291457&&console.log("luego de las subscripciones a pacientes, planes y sesiones: sesiones>",o,"pacientes>",a,"planes>",l),t.$$.dirty[0]&7&&(n(2,N=o.find(_=>_.id===O)),console.log(N||"sin seleccion de sesion")),t.$$.dirty[0]&8&&n(6,d=ce(s))},$e(),[o,O,N,s,u,h,d,k,F,Ue,se,le,je,i,r,S,Te,re,Ce,Z,qe,a,l,c,te,V,Se,ee,Ct,mt,T,ge,ue,We,Zt,ni]}class NE extends Wt{constructor(e){super(),Gt(this,e,PE,DE,Ot,{sesiones:0,pacientes:21,planes:22,planSeleccionado:23},null,[-1,-1])}}function OE(t){let e,n,s,i,r,o,a,l,c,u,h,d,f;return a=new wE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],optionsPlan:t[1],planSeleccionado:Mc}}),u=new NE({props:{sesiones:t[2],pacientes:t[3],planes:t[0],planSeleccionado:Mc}}),{c(){e=C("body"),n=C("button"),n.textContent="generar backup firestore",s=$(),i=C("div"),r=C("h5"),r.textContent="CRUD Pacientes",o=$(),dn(a.$$.fragment),l=$(),c=C("div"),dn(u.$$.fragment),m(i,"class","contenedor-pacientes svelte-1y3ujd1"),m(c,"class","contenedor-sesiones svelte-1y3ujd1"),m(e,"class","svelte-1y3ujd1")},m(p,y){W(p,e,y),v(e,n),v(e,s),v(e,i),v(i,r),v(i,o),Ut(a,i,null),v(e,l),v(e,c),Ut(u,c,null),h=!0,d||(f=K(n,"click",t[4]),d=!0)},p(p,[y]){const b={};y&4&&(b.sesiones=p[2]),y&8&&(b.pacientes=p[3]),y&1&&(b.planes=p[0]),y&2&&(b.optionsPlan=p[1]),a.$set(b);const k={};y&4&&(k.sesiones=p[2]),y&8&&(k.pacientes=p[3]),y&1&&(k.planes=p[0]),u.$set(k)},i(p){h||(Je(a.$$.fragment,p),Je(u.$$.fragment,p),h=!0)},o(p){ht(a.$$.fragment,p),ht(u.$$.fragment,p),h=!1},d(p){p&&G(e),jt(a),jt(u),d=!1,f()}}}let Mc="particular";function RE(t,e,n){let s=[],i=[],r=[],o=[];Vc(()=>{const l=[],c=st(Ae,"sesiones"),u=st(Ae,"Pacientes"),h=st(Ae,"planes"),d=fs(c,qr("diaSesion")),f=fs(u,qr("apellido")),p=fs(h,qr("plan")),y=Hr(d,S=>{n(2,s=S.docs.map(O=>({id:O.id,...O.data()})))});console.log("desde onMount CRUDSesiones",s),l.push(y);const b=Hr(f,S=>{n(3,i=S.docs.map(O=>({id:O.id,...O.data()})))});l.push(b);const k=Hr(p,S=>{n(0,r=S.docs.map(O=>({id:O.id,...O.data()})))});return l.push(k),()=>{l.forEach(S=>S())}});const a=()=>{const l="sesiones"+fi().toString()+"BU",c=st(Ae,l);s.forEach(async p=>{const y=It(c);try{await $r(y,p),console.log("Documento sesion creado exitosamente")}catch(b){console.error("Error al crear el documento sesion:",b)}});const u="planes"+fi().toString()+"BU",h=st(Ae,u);r.forEach(async p=>{const y=It(h);try{await $r(y,p),console.log("Documento plan creado exitosamente")}catch(b){console.error("Error al crear el documento plan:",b)}});const d="Pacientes"+fi().toString()+"BU",f=st(Ae,d);i.forEach(async p=>{const y=It(f);try{await $r(y,p),console.log("Documento paciente creado exitosamente")}catch(b){console.error("Error al crear el documento paciente:",b)}})};return t.$$.update=()=>{t.$$.dirty&3&&(r.length!=0?(console.log(r),n(1,o=r.map(l=>l.plan)),o.push("particular"),o.sort(),console.log(o)):console.log("no hay planes"))},[r,o,s,i,a]}class LE extends Wt{constructor(e){super(),Gt(this,e,RE,OE,Ot,{})}}function ME(t){let e,n,s;return n=new LE({}),{c(){e=C("div"),dn(n.$$.fragment),m(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){W(i,e,r),Ut(n,e,null),s=!0},p:pe,i(i){s||(Je(n.$$.fragment,i),s=!0)},o(i){ht(n.$$.fragment,i),s=!1},d(i){i&&G(e),jt(n)}}}function xE(t){let e,n,s,i,r,o;return{c(){e=C("div"),n=C("h1"),n.textContent="ingrese la contraseña:",s=$(),i=C("input"),m(n,"class","svelte-uueu6x"),m(i,"type","password"),m(i,"class","svelte-uueu6x"),m(e,"class","ingreso svelte-uueu6x")},m(a,l){W(a,e,l),v(e,n),v(e,s),v(e,i),Ee(i,t[1]),r||(o=[K(i,"input",t[3]),K(i,"input",t[2])],r=!0)},p(a,l){l&2&&i.value!==a[1]&&Ee(i,a[1])},i:pe,o:pe,d(a){a&&G(e),r=!1,gt(o)}}}function FE(t){let e,n,s,i;const r=[xE,ME],o=[];function a(l,c){return l[0]==="nada"?0:l[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=C("main"),s&&s.c(),m(e,"class","svelte-uueu6x")},m(l,c){W(l,e,c),~n&&o[n].m(e,null),i=!0},p(l,[c]){let u=n;n=a(l),n===u?~n&&o[n].p(l,c):(s&&(jc(),ht(o[u],1,1,()=>{o[u]=null}),qc()),~n?(s=o[n],s?s.p(l,c):(s=o[n]=r[n](l),s.c()),Je(s,1),s.m(e,null)):s=null)},i(l){i||(Je(s),i=!0)},o(l){ht(s),i=!1},d(l){l&&G(e),~n&&o[n].d()}}}function BE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class VE extends Wt{constructor(e){super(),Gt(this,e,BE,FE,Ot,{})}}new VE({target:document.getElementById("app")});
