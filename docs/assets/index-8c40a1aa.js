(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function pe(){}function _l(t){return t()}function Ka(){return Object.create(null)}function lt(t){t.forEach(_l)}function Tl(t){return typeof t=="function"}function rn(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Kd(t){return Object.keys(t).length===0}function zd(t,...e){if(t==null)return pe;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(zd(e,n))}function Wn(t,e,n){return t.set(n),e}function v(t,e){t.appendChild(e)}function Ce(t,e,n){t.insertBefore(e,n||null)}function be(t){t.parentNode&&t.parentNode.removeChild(t)}function Oi(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function ie(t){return document.createTextNode(t)}function ne(){return ie(" ")}function No(){return ie("")}function se(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Gd(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function li(t){return t===""?null:+t}function Wd(t){return Array.from(t.childNodes)}function st(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function Pt(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function Qd(t){for(const e of t.options)if(!e.disabled)return e}function ui(t){const e=t.querySelector(":checked")||Qd(t);return e&&e.__value}function Qs(t,e,n){t.classList[n?"add":"remove"](e)}function Yd(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let cs;function es(t){cs=t}function Po(){if(!cs)throw new Error("Function called outside component initialization");return cs}function Cl(t){Po().$$.on_mount.push(t)}function Xd(t){Po().$$.on_destroy.push(t)}function Il(){const t=Po();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const r=Yd(e,n,{cancelable:s});return i.slice().forEach(o=>{o.call(t,r)}),!r.defaultPrevented}return!0}}function Jd(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const fn=[],za=[];let yn=[];const Ga=[],Zd=Promise.resolve();let xr=!1;function ef(){xr||(xr=!0,Zd.then(Sl))}function Yt(t){yn.push(t)}const yr=new Set;let hn=0;function Sl(){if(hn!==0)return;const t=cs;do{try{for(;hn<fn.length;){const e=fn[hn];hn++,es(e),tf(e.$$)}}catch(e){throw fn.length=0,hn=0,e}for(es(null),fn.length=0,hn=0;za.length;)za.pop()();for(let e=0;e<yn.length;e+=1){const n=yn[e];yr.has(n)||(yr.add(n),n())}yn.length=0}while(fn.length);for(;Ga.length;)Ga.pop()();xr=!1,yr.clear(),es(t)}function tf(t){if(t.fragment!==null){t.update(),lt(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Yt)}}function nf(t){const e=[],n=[];yn.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),yn=e}const ii=new Set;let Ht;function sf(){Ht={r:0,c:[],p:Ht}}function rf(){Ht.r||lt(Ht.c),Ht=Ht.p}function Ot(t,e){t&&t.i&&(ii.delete(t),t.i(e))}function Xt(t,e,n,s){if(t&&t.o){if(ii.has(t))return;ii.add(t),Ht.c.push(()=>{ii.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ls(t){t&&t.c()}function Cn(t,e,n,s){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),s||Yt(()=>{const o=t.$$.on_mount.map(_l).filter(Tl);t.$$.on_destroy?t.$$.on_destroy.push(...o):lt(o),t.$$.on_mount=[]}),r.forEach(Yt)}function In(t,e){const n=t.$$;n.fragment!==null&&(nf(n.after_update),lt(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function of(t,e){t.$$.dirty[0]===-1&&(fn.push(t),ef(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fn(t,e,n,s,i,r,o,a=[-1]){const c=cs;es(t);const l=t.$$={fragment:null,ctx:[],props:r,update:pe,not_equal:i,bound:Ka(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ka(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(h,d,...p)=>{const y=p.length?p[0]:d;return l.ctx&&i(l.ctx[h],l.ctx[h]=y)&&(!l.skip_bound&&l.bound[h]&&l.bound[h](y),u&&of(t,h)),d}):[],l.update(),u=!0,lt(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const h=Wd(e.target);l.fragment&&l.fragment.l(h),h.forEach(be)}else l.fragment&&l.fragment.c();e.intro&&Ot(t.$$.fragment),Cn(t,e.target,e.anchor,e.customElement),Sl()}es(c)}class Bn{$destroy(){In(this,1),this.$destroy=pe}$on(e,n){if(!Tl(n))return pe;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Kd(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Wa(t,e,n){const s=t.slice();return s[12]=e[n],s}function Qa(t){let e,n=t[12]+"",s,i;return{c(){e=I("option"),s=ie(n),e.__value=i=t[12],e.value=e.__value},m(r,o){Ce(r,e,o),v(e,s)},p(r,o){o&4&&n!==(n=r[12]+"")&&st(s,n),o&4&&i!==(i=r[12])&&(e.__value=i,e.value=e.__value)},d(r){r&&be(e)}}}function af(t){let e,n,s,i,r,o,a=t[2],c=[];for(let l=0;l<a.length;l+=1)c[l]=Qa(Wa(t,a,l));return{c(){e=I("div"),n=I("input"),s=ne(),i=I("select");for(let l=0;l<c.length;l+=1)c[l].c();g(n,"type","checkbox"),g(n,"name","CheckBoxParticular"),g(n,"id","CheckBoxParticular"),g(i,"name","plan"),g(i,"id","plan"),g(i,"class","svelte-1de4xhy"),t[1]===void 0&&Yt(()=>t[7].call(i)),Qs(i,"SelectPlanVisible",t[0]),Qs(i,"SelectPlanHidden",t[3]),g(e,"id","selectPlanContainer"),g(e,"class","svelte-1de4xhy")},m(l,u){Ce(l,e,u),v(e,n),n.checked=t[0],v(e,s),v(e,i);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(i,null);Pt(i,t[1]),r||(o=[se(n,"change",t[6]),se(n,"change",t[4]),se(i,"change",t[7]),se(i,"change",t[5])],r=!0)},p(l,[u]){if(u&1&&(n.checked=l[0]),u&4){a=l[2];let h;for(h=0;h<a.length;h+=1){const d=Wa(l,a,h);c[h]?c[h].p(d,u):(c[h]=Qa(d),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=a.length}u&6&&Pt(i,l[1]),u&1&&Qs(i,"SelectPlanVisible",l[0]),u&8&&Qs(i,"SelectPlanHidden",l[3])},i:pe,o:pe,d(l){l&&be(e),Oi(c,l),r=!1,lt(o)}}}function cf(t,e,n){let{planes:s}=e,{planSeleccionado:i}=e,{SelectPlanVisible:r}=e,o;const a=y=>{n(0,r=y)},c=()=>{u("clickCheckPlan",{valor:{SelectPlanVisible:r}})},l=y=>{var E=y.target.checked;a(E),c()},u=Il(),h=()=>{u("cambioPlan",{valor:{planSeleccionado:i}})};function d(){r=this.checked,n(0,r)}function p(){i=ui(this),n(1,i),n(2,s)}return t.$$set=y=>{"planes"in y&&n(2,s=y.planes),"planSeleccionado"in y&&n(1,i=y.planSeleccionado),"SelectPlanVisible"in y&&n(0,r=y.SelectPlanVisible)},t.$$.update=()=>{t.$$.dirty&1&&n(3,o=!r)},[r,i,s,o,l,h,d,p]}class lf extends Bn{constructor(e){super(),Fn(this,e,cf,af,rn,{planes:2,planSeleccionado:1,SelectPlanVisible:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Al=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Al(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new hf;const d=r<<2|a>>4;if(s.push(d),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const df=function(t){const e=Al(t);return kl.encodeByteArray(e,!0)},hi=function(t){return df(t).replace(/\./g,"")},ff=function(t){try{return kl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gf=()=>pf().__FIREBASE_DEFAULTS__,mf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ff(t[1]);return e&&JSON.parse(e)},Dl=()=>{try{return gf()||mf()||yf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vf=t=>{var e,n;return(n=(e=Dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nl=t=>{const e=vf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},wf=()=>{var t;return(t=Dl())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[hi(JSON.stringify(n)),hi(JSON.stringify(o)),a].join(".")}function Ef(){try{return typeof indexedDB=="object"}catch{return!1}}function _f(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="FirebaseError";class on extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tf,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ol.prototype.create)}}class Ol{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Cf(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,s)}}function Cf(t,e){return t.replace(If,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const If=/\{\$([^}]+)}/g;function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ya(r)&&Ya(o)){if(!Fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ya(t){return t!==null&&typeof t=="object"}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class Sf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new bf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kf(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Af(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(t){return t===jt?void 0:t}function kf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Df{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Nf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Pf=X.INFO,Of={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Rf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Of[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rl{constructor(e){this.name=e,this._logLevel=Pf,this._logHandler=Rf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Lf=(t,e)=>e.some(n=>t instanceof n);let Xa,Ja;function Mf(){return Xa||(Xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ll=new WeakMap,Br=new WeakMap,Ml=new WeakMap,vr=new WeakMap,Oo=new WeakMap;function Ff(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(St(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ll.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function Bf(t){if(Br.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Br.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Br.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ml.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vf(t){Vr=t(Vr)}function Uf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wr(this),e,...n);return Ml.set(s,e.sort?e.sort():[e]),St(s)}:xf().includes(t)?function(...e){return t.apply(wr(this),e),St(Ll.get(this))}:function(...e){return St(t.apply(wr(this),e))}}function $f(t){return typeof t=="function"?Uf(t):(t instanceof IDBTransaction&&Bf(t),Lf(t,Mf())?new Proxy(t,Vr):t)}function St(t){if(t instanceof IDBRequest)return Ff(t);if(vr.has(t))return vr.get(t);const e=$f(t);return e!==t&&(vr.set(t,e),Oo.set(e,t)),e}const wr=t=>Oo.get(t);function jf(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=St(o);return s&&o.addEventListener("upgradeneeded",c=>{s(St(o.result),c.oldVersion,c.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qf=["get","getKey","getAll","getAllKeys","count"],Hf=["put","add","delete","clear"],br=new Map;function Za(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Hf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qf.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return br.set(e,r),r}Vf(t=>({...t,get:(e,n,s)=>Za(e,n)||t.get(e,n,s),has:(e,n)=>!!Za(e,n)||t.has(e,n)}));/**
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
 */class Kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ur="@firebase/app",ec="0.9.4";/**
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
 */const Jt=new Rl("@firebase/app"),Gf="@firebase/app-compat",Wf="@firebase/analytics-compat",Qf="@firebase/analytics",Yf="@firebase/app-check-compat",Xf="@firebase/app-check",Jf="@firebase/auth",Zf="@firebase/auth-compat",ep="@firebase/database",tp="@firebase/database-compat",np="@firebase/functions",sp="@firebase/functions-compat",ip="@firebase/installations",rp="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",cp="@firebase/performance",lp="@firebase/performance-compat",up="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",pp="@firebase/firestore",gp="@firebase/firestore-compat",mp="firebase",yp="9.17.2";/**
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
 */const $r="[DEFAULT]",vp={[Ur]:"fire-core",[Gf]:"fire-core-compat",[Qf]:"fire-analytics",[Wf]:"fire-analytics-compat",[Xf]:"fire-app-check",[Yf]:"fire-app-check-compat",[Jf]:"fire-auth",[Zf]:"fire-auth-compat",[ep]:"fire-rtdb",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[sp]:"fire-fn-compat",[ip]:"fire-iid",[rp]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[cp]:"fire-perf",[lp]:"fire-perf-compat",[up]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat","fire-js":"fire-js",[mp]:"fire-js-all"};/**
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
 */const di=new Map,jr=new Map;function wp(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function us(t){const e=t.name;if(jr.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;jr.set(e,t);for(const n of di.values())wp(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const bp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Ol("app","Firebase",bp);/**
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
 */class Ep{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Fl=yp;function Bl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$r,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=wf()),!n)throw At.create("no-options");const r=di.get(i);if(r){if(Fr(n,r.options)&&Fr(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new Df(i);for(const c of jr.values())o.addComponent(c);const a=new Ep(n,s,o);return di.set(i,a),a}function Vl(t=$r){const e=di.get(t);if(!e&&t===$r)return Bl();if(!e)throw At.create("no-app",{appName:t});return e}function kt(t,e,n){var s;let i=(s=vp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}us(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _p="firebase-heartbeat-database",Tp=1,hs="firebase-heartbeat-store";let Er=null;function Ul(){return Er||(Er=jf(_p,Tp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Er}async function Cp(t){try{return(await Ul()).transaction(hs).objectStore(hs).get($l(t))}catch(e){if(e instanceof on)Jt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}async function tc(t,e){try{const s=(await Ul()).transaction(hs,"readwrite");return await s.objectStore(hs).put(e,$l(t)),s.done}catch(n){if(n instanceof on)Jt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(s.message)}}}function $l(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ip=1024,Sp=30*24*60*60*1e3;class Ap{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nc(),{heartbeatsToSend:n,unsentEntries:s}=kp(this._heartbeatsCache.heartbeats),i=hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nc(){return new Date().toISOString().substring(0,10)}function kp(t,e=Ip){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),sc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?_f().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Cp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sc(t){return hi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Np(t){us(new Sn("platform-logger",e=>new Kf(e),"PRIVATE")),us(new Sn("heartbeat",e=>new Ap(e),"PRIVATE")),kt(Ur,ec,t),kt(Ur,ec,"esm2017"),kt("fire-js","")}Np("");var Pp="firebase",Op="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(Pp,Op,"app");var Rp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Ro=Ro||{},L=Rp||self;function fi(){}function Ri(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ss(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lp(t){return Object.prototype.hasOwnProperty.call(t,_r)&&t[_r]||(t[_r]=++Mp)}var _r="closure_uid_"+(1e9*Math.random()>>>0),Mp=0;function xp(t,e,n){return t.call.apply(t.bind,arguments)}function Fp(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=xp:Le=Fp,Le.apply(null,arguments)}function Ys(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ft(){this.s=this.s,this.o=this.o}var Bp=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Bp!=0)&&Lp(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jl=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Lo(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ic(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ri(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var Vp=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",fi,e),L.removeEventListener("test",fi,e)}catch{}return t}();function pi(t){return/^[\s\xa0]*$/.test(t)}var rc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Tr(t,e){return t<e?-1:t>e?1:0}function Li(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function ut(t){return Li().indexOf(t)!=-1}function Mo(t){return Mo[" "](t),t}Mo[" "]=fi;function Up(t){var e=qp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var $p=ut("Opera"),An=ut("Trident")||ut("MSIE"),ql=ut("Edge"),qr=ql||An,Hl=ut("Gecko")&&!(Li().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge"))&&!(ut("Trident")||ut("MSIE"))&&!ut("Edge"),jp=Li().toLowerCase().indexOf("webkit")!=-1&&!ut("Edge");function Kl(){var t=L.document;return t?t.documentMode:void 0}var gi;e:{var Cr="",Ir=function(){var t=Li();if(Hl)return/rv:([^\);]+)(\)|;)/.exec(t);if(ql)return/Edge\/([\d\.]+)/.exec(t);if(An)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jp)return/WebKit\/(\S+)/.exec(t);if($p)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ir&&(Cr=Ir?Ir[1]:""),An){var Sr=Kl();if(Sr!=null&&Sr>parseFloat(Cr)){gi=String(Sr);break e}}gi=Cr}var qp={};function Hp(){return Up(function(){let t=0;const e=rc(String(gi)).split("."),n=rc("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Tr(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Tr(i[2].length==0,r[2].length==0)||Tr(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Hr;if(L.document&&An){var oc=Kl();Hr=oc||parseInt(gi,10)||void 0}else Hr=void 0;var Kp=Hr;function ds(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hl){e:{try{Mo(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ds.X.h.call(this)}}ke(ds,Me);var zp={2:"touch",3:"pen",4:"mouse"};ds.prototype.h=function(){ds.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var As="closure_listenable_"+(1e6*Math.random()|0),Gp=0;function Wp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Gp,this.ba=this.ea=!1}function Mi(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xo(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function zl(t){const e={};for(const n in t)e[n]=t[n];return e}const ac="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gl(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<ac.length;r++)n=ac[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function xi(t){this.src=t,this.g={},this.h=0}xi.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=zr(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Wp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Kr(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=jl(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Mi(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zr(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Fo="closure_lm_"+(1e6*Math.random()|0),Ar={};function Wl(t,e,n,s,i){if(s&&s.once)return Yl(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wl(t,e[r],n,s,i);return null}return n=Uo(n),t&&t[As]?t.N(e,n,Ss(s)?!!s.capture:!!s,i):Ql(t,e,n,!1,s,i)}function Ql(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ss(i)?!!i.capture:!!i,a=Vo(t);if(a||(t[Fo]=a=new xi(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Qp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Vp||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Jl(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qp(){function t(n){return e.call(t.src,t.listener,n)}const e=Yp;return t}function Yl(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yl(t,e[r],n,s,i);return null}return n=Uo(n),t&&t[As]?t.O(e,n,Ss(s)?!!s.capture:!!s,i):Ql(t,e,n,!0,s,i)}function Xl(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xl(t,e[r],n,s,i);else s=Ss(s)?!!s.capture:!!s,n=Uo(n),t&&t[As]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=zr(r,n,s,i),-1<n&&(Mi(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zr(e,n,s,i)),(n=-1<t?e[t]:null)&&Bo(n))}function Bo(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[As])Kr(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Jl(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vo(e))?(Kr(n,t),n.h==0&&(n.src=null,e[Fo]=null)):Mi(t)}}}function Jl(t){return t in Ar?Ar[t]:Ar[t]="on"+t}function Yp(t,e){if(t.ba)t=!0;else{e=new ds(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Bo(t),t=n.call(s,e)}return t}function Vo(t){return t=t[Fo],t instanceof xi?t:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(t){return typeof t=="function"?t:(t[kr]||(t[kr]=function(e){return t.handleEvent(e)}),t[kr])}function Te(){Ft.call(this),this.i=new xi(this),this.P=this,this.I=null}ke(Te,Ft);Te.prototype[As]=!0;Te.prototype.removeEventListener=function(t,e,n,s){Xl(this,t,e,n,s)};function Se(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(s,t),Gl(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xs(o,s,!0,e)&&i}if(o=e.g=t,i=Xs(o,s,!0,e)&&i,i=Xs(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xs(o,s,!1,e)&&i}Te.prototype.M=function(){if(Te.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mi(n[s]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Te.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xs(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Kr(t.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var $o=L.JSON.stringify;function Xp(){var t=tu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Jp{constructor(){this.h=this.g=null}add(e,n){const s=Zl.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Zp,t=>t.reset());class Zp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eg(t){L.setTimeout(()=>{throw t},0)}function eu(t,e){Gr||tg(),Wr||(Gr(),Wr=!0),tu.add(t,e)}var Gr;function tg(){var t=L.Promise.resolve(void 0);Gr=function(){t.then(ng)}}var Wr=!1,tu=new Jp;function ng(){for(var t;t=Xp();){try{t.h.call(t.g)}catch(n){eg(n)}var e=Zl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wr=!1}function Fi(t,e){Te.call(this),this.h=t||1,this.g=e||L,this.j=Le(this.lb,this),this.l=Date.now()}ke(Fi,Te);A=Fi.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Se(this,"tick"),this.ca&&(jo(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jo(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){Fi.X.M.call(this),jo(this),delete this.g};function qo(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function nu(t){t.g=qo(()=>{t.g=null,t.i&&(t.i=!1,nu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sg extends Ft{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:nu(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(t){Ft.call(this),this.h=t,this.g={}}ke(fs,Ft);var cc=[];function su(t,e,n,s){Array.isArray(n)||(n&&(cc[0]=n.toString()),n=cc);for(var i=0;i<n.length;i++){var r=Wl(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function iu(t){xo(t.g,function(e,n){this.g.hasOwnProperty(n)&&Bo(e)},t),t.g={}}fs.prototype.M=function(){fs.X.M.call(this),iu(this)};fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bi(){this.g=!0}Bi.prototype.Aa=function(){this.g=!1};function ig(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function rg(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function mn(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ag(t,n)+(s?" "+s:"")})}function og(t,e){t.info(function(){return"TIMEOUT: "+e})}Bi.prototype.info=function(){};function ag(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $o(n)}catch{return e}}var an={},lc=null;function Vi(){return lc=lc||new Te}an.Pa="serverreachability";function ru(t){Me.call(this,an.Pa,t)}ke(ru,Me);function ps(t){const e=Vi();Se(e,new ru(e))}an.STAT_EVENT="statevent";function ou(t,e){Me.call(this,an.STAT_EVENT,t),this.stat=e}ke(ou,Me);function Ve(t){const e=Vi();Se(e,new ou(e,t))}an.Qa="timingevent";function au(t,e){Me.call(this,an.Qa,t),this.size=e}ke(au,Me);function ks(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Ui={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},cu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ho(){}Ho.prototype.h=null;function uc(t){return t.h||(t.h=t.i())}function lu(){}var Ds={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ko(){Me.call(this,"d")}ke(Ko,Me);function zo(){Me.call(this,"c")}ke(zo,Me);var Qr;function $i(){}ke($i,Ho);$i.prototype.g=function(){return new XMLHttpRequest};$i.prototype.i=function(){return{}};Qr=new $i;function Ns(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new fs(this),this.O=cg,t=qr?125:void 0,this.T=new Fi(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new uu}function uu(){this.i=null,this.g="",this.h=!1}var cg=45e3,Yr={},mi={};A=Ns.prototype;A.setTimeout=function(t){this.O=t};function Xr(t,e,n){t.K=1,t.v=qi(bt(e)),t.s=n,t.P=!0,hu(t,null)}function hu(t,e){t.F=Date.now(),Ps(t),t.A=bt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),wu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new uu,t.g=Uu(t.l,n?e:null,!t.s),0<t.N&&(t.L=new sg(Le(t.La,t,t.g),t.N)),su(t.S,t.g,"readystatechange",t.ib),e=t.H?zl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ps(),ig(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&vt(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const u=vt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||qr||this.g&&(this.h.h||this.g.fa()||pc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?ps(3):ps(2)),ji(this);var n=this.g.aa();this.Y=n;t:if(du(this)){var s=pc(this.g);t="";var i=s.length,r=vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),ts(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,rg(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pi(a)){var l=a;break t}}l=null}if(n=l)mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jr(this,n);else{this.i=!1,this.o=3,Ve(12),Kt(this),ts(this);break e}}this.P?(fu(this,u,o),qr&&this.i&&u==3&&(su(this.S,this.T,"tick",this.hb),this.T.start())):(mn(this.j,this.m,o,null),Jr(this,o)),u==4&&Kt(this),this.i&&!this.I&&(u==4?xu(this.l,this):(this.i=!1,Ps(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),Kt(this),ts(this)}}}catch{}finally{}};function du(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function fu(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=lg(t,n),i==mi){e==4&&(t.o=4,Ve(14),s=!1),mn(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yr){t.o=4,Ve(15),mn(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else mn(t.j,t.m,i,null),Jr(t,i);du(t)&&i!=mi&&i!=Yr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zo(e),e.K=!0,Ve(11))):(mn(t.j,t.m,n,"[Invalid Chunked Response]"),Kt(t),ts(t))}A.hb=function(){if(this.g){var t=vt(this.g),e=this.g.fa();this.C<e.length&&(ji(this),fu(this,t,e),this.i&&t!=4&&Ps(this))}};function lg(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?mi:(n=Number(e.substring(n,s)),isNaN(n)?Yr:(s+=1,s+n>e.length?mi:(e=e.substr(s,n),t.C=s+n,e)))}A.cancel=function(){this.I=!0,Kt(this)};function Ps(t){t.V=Date.now()+t.O,pu(t,t.O)}function pu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ks(Le(t.gb,t),e)}function ji(t){t.B&&(L.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(og(this.j,this.A),this.K!=2&&(ps(),Ve(17)),Kt(this),this.o=2,ts(this)):pu(this,this.V-t)};function ts(t){t.l.G==0||t.I||xu(t.l,t)}function Kt(t){ji(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jo(t.T),iu(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zr(n.h,t))){if(!t.J&&Zr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)wi(n),zi(n);else break e;Jo(n),Ve(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ks(Le(n.cb,n),6e3));if(1>=_u(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else zt(n,11)}else if((t.J||n.g==t)&&wi(n),!pi(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var r=s.h;r.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Go(r,r.h),r.h=null))}if(s.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.za=E,ae(s.F,s.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Vu(s,s.H?s.ka:null,s.V),o.J){Tu(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ji(a),Ps(a)),s.g=o}else Lu(s);0<n.i.length&&Gi(n)}else l[0]!="stop"&&l[0]!="close"||zt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?zt(n,7):Xo(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ps(4)}catch{}}function ug(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ri(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function hg(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ri(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ri(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hg(t),s=ug(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wt){this.h=e!==void 0?e:t.h,yi(this,t.j),this.s=t.s,this.g=t.g,vi(this,t.m),this.l=t.l,e=t.i;var n=new gs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hc(this,n),this.o=t.o}else t&&(n=String(t).match(mu))?(this.h=!!e,yi(this,n[1]||"",!0),this.s=Yn(n[2]||""),this.g=Yn(n[3]||"",!0),vi(this,n[4]),this.l=Yn(n[5]||"",!0),hc(this,n[6]||"",!0),this.o=Yn(n[7]||"")):(this.h=!!e,this.i=new gs(null,this.h))}Wt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xn(e,dc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xn(e,dc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xn(n,n.charAt(0)=="/"?gg:pg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xn(n,yg)),t.join("")};function bt(t){return new Wt(t)}function yi(t,e,n){t.j=n?Yn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hc(t,e,n){e instanceof gs?(t.i=e,vg(t.i,t.h)):(n||(e=Xn(e,mg)),t.i=new gs(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function qi(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dc=/[#\/\?@]/g,pg=/[#\?:]/g,gg=/[#\?]/g,mg=/[#\?@]/g,yg=/#/g;function gs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Bt(t){t.g||(t.g=new Map,t.h=0,t.i&&dg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=gs.prototype;A.add=function(t,e){Bt(this),this.i=null,t=Vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yu(t,e){Bt(t),e=Vn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vu(t,e){return Bt(t),e=Vn(t,e),t.g.has(e)}A.forEach=function(t,e){Bt(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};A.oa=function(){Bt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};A.W=function(t){Bt(this);let e=[];if(typeof t=="string")vu(this,t)&&(e=e.concat(this.g.get(Vn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Bt(this),this.i=null,t=Vn(this,t),vu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function wu(t,e,n){yu(t,e),0<n.length&&(t.i=null,t.g.set(Vn(t,e),Lo(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function vg(t,e){e&&!t.j&&(Bt(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(yu(this,s),wu(this,i,n))},t)),t.j=e}var wg=class{constructor(e,n){this.h=e,this.g=n}};function bu(t){this.l=t||bg,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bg=10;function Eu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _u(t){return t.h?1:t.g?t.g.size:0}function Zr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Go(t,e){t.g?t.g.add(e):t.h=e}function Tu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bu.prototype.cancel=function(){if(this.i=Cu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Lo(t.i)}function Wo(){}Wo.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Wo.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Eg(){this.g=new Wo}function _g(t,e,n){const s=n||"";try{gu(t,function(i,r){let o=i;Ss(i)&&(o=$o(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Tg(t,e){const n=new Bi;if(L.Image){const s=new Image;s.onload=Ys(Js,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ys(Js,n,s,"TestLoadImage: error",!1,e),s.onabort=Ys(Js,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ys(Js,n,s,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Js(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Os(t){this.l=t.ac||null,this.j=t.jb||!1}ke(Os,Ho);Os.prototype.g=function(){return new Hi(this.l,this.j)};Os.prototype.i=function(t){return function(){return t}}({});function Hi(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(Hi,Te);var Qo=0;A=Hi.prototype;A.open=function(t,e){if(this.readyState!=Qo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ms(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rs(this)),this.readyState=Qo};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Iu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Iu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rs(this):ms(this),this.readyState==3&&Iu(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,Rs(this))};A.Ua=function(t){this.g&&(this.response=t,Rs(this))};A.ga=function(){this.g&&Rs(this)};function Rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ms(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ms(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Cg=L.JSON.parse;function le(t){Te.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Su,this.K=this.L=!1}ke(le,Te);var Su="",Ig=/^https?$/i,Sg=["POST","PUT"];A=le.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qr.g(),this.C=this.u?uc(this.u):uc(Qr),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){fc(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=jl(Sg,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Du(this),0<this.B&&((this.K=Ag(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=qo(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){fc(this,r)}};function Ag(t){return An&&Hp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof Ro<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function fc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Au(t),Ki(t)}function Au(t){t.D||(t.D=!0,Se(t,"complete"),Se(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),Ki(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ki(this,!0)),le.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?ku(this):this.fb())};A.fb=function(){ku(this)};function ku(t){if(t.h&&typeof Ro<"u"&&(!t.C[1]||vt(t)!=4||t.aa()!=2)){if(t.v&&vt(t)==4)qo(t.Ha,0,t);else if(Se(t,"readystatechange"),vt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(mu)[1]||null;if(!i&&L.self&&L.self.location){var r=L.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ig.test(i?i.toLowerCase():"")}n=s}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<vt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Au(t)}}finally{Ki(t)}}}}function Ki(t,e){if(t.g){Du(t);const n=t.g,s=t.C[0]?fi:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=s}catch{}}}function Du(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function vt(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<vt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Cg(e)}};function pc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Su:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Nu(t){let e="";return xo(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Yo(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Nu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pu(t){this.Ca=0,this.i=[],this.j=new Bi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qn("baseRetryDelayMs",5e3,t),this.bb=Qn("retryDelaySeedMs",1e4,t),this.$a=Qn("forwardChannelMaxRetries",2,t),this.ta=Qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new bu(t&&t.concurrentRequestLimit),this.Fa=new Eg,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=Pu.prototype;A.ma=8;A.G=1;function Xo(t){if(Ou(t),t.G==3){var e=t.U++,n=bt(t.F);ae(n,"SID",t.I),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ls(t,n),e=new Ns(t,t.j,e,void 0),e.K=2,e.v=qi(bt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Uu(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ps(e)}Bu(t)}function zi(t){t.g&&(Zo(t),t.g.cancel(),t.g=null)}function Ou(t){zi(t),t.u&&(L.clearTimeout(t.u),t.u=null),wi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Gi(t){Eu(t.h)||t.m||(t.m=!0,eu(t.Ja,t),t.C=0)}function kg(t,e){return _u(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ks(Le(t.Ja,t,e),Fu(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ns(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=zl(r),Gl(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ru(this,i,e),n=bt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Ls(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Nu(r)))+"&"+e:this.o&&Yo(n,this.o,r)),Go(this.h,i),this.Ya&&ae(n,"TYPE","init"),this.O?(ae(n,"$req",e),ae(n,"SID","null"),i.Z=!0,Xr(i,n,null)):Xr(i,n,e),this.G=2}}else this.G==3&&(t?gc(this,t):this.i.length==0||Eu(this.h)||gc(this))};function gc(t,e){var n;e?n=e.m:n=t.U++;const s=bt(t.F);ae(s,"SID",t.I),ae(s,"RID",n),ae(s,"AID",t.T),Ls(t,s),t.o&&t.s&&Yo(s,t.o,t.s),n=new Ns(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ru(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Go(t.h,n),Xr(n,s,e)}function Ls(t,e){t.ia&&xo(t.ia,function(n,s){ae(e,s,n)}),t.l&&gu({},function(n,s){ae(e,s,n)})}function Ru(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Le(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{_g(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Lu(t){t.g||t.u||(t.Z=1,eu(t.Ia,t),t.A=0)}function Jo(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ks(Le(t.Ia,t),Fu(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,Mu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ks(Le(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ve(10),zi(this),Mu(this))};function Zo(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Mu(t){t.g=new Ns(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=bt(t.sa);ae(e,"RID","rpc"),ae(e,"SID",t.I),ae(e,"CI",t.L?"0":"1"),ae(e,"AID",t.T),ae(e,"TYPE","xmlhttp"),Ls(t,e),t.o&&t.s&&Yo(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qi(bt(e)),n.s=null,n.P=!0,hu(n,t)}A.cb=function(){this.v!=null&&(this.v=null,zi(this),Jo(this),Ve(19))};function wi(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function xu(t,e){var n=null;if(t.g==e){wi(t),Zo(t),t.g=null;var s=2}else if(Zr(t.h,e))n=e.D,Tu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Vi(),Se(s,new au(s,n)),Gi(t)}else Lu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&kg(t,e)||s==2&&Jo(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:zt(t,5);break;case 4:zt(t,10);break;case 3:zt(t,6);break;default:zt(t,2)}}}function Fu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function zt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Le(t.kb,t);n||(n=new Wt("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||yi(n,"https"),qi(n)),Tg(n.toString(),s)}else Ve(2);t.G=0,t.l&&t.l.va(e),Bu(t),Ou(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function Bu(t){if(t.G=0,t.la=[],t.l){const e=Cu(t.h);(e.length!=0||t.i.length!=0)&&(ic(t.la,e),ic(t.la,t.i),t.h.i.length=0,Lo(t.i),t.i.length=0),t.l.ua()}}function Vu(t,e,n){var s=n instanceof Wt?bt(n):new Wt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),vi(s,s.m);else{var i=L.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Wt(null,void 0);s&&yi(r,s),e&&(r.g=e),i&&vi(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ae(s,n,e),ae(s,"VER",t.ma),Ls(t,s),s}function Uu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new le(new Os({jb:!0})):new le(t.ra),e.Ka(t.H),e}function $u(){}A=$u.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function bi(){if(An&&!(10<=Number(Kp)))throw Error("Environmental error: no available transport.")}bi.prototype.g=function(t,e){return new Xe(t,e)};function Xe(t,e){Te.call(this),this.g=new Pu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!pi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Un(this)}ke(Xe,Te);Xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ve(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Vu(t,null,t.V),Gi(t)};Xe.prototype.close=function(){Xo(this.g)};Xe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$o(t),t=n);e.i.push(new wg(e.ab++,t)),e.G==3&&Gi(e)};Xe.prototype.M=function(){this.g.l=null,delete this.j,Xo(this.g),delete this.g,Xe.X.M.call(this)};function ju(t){Ko.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ke(ju,Ko);function qu(){zo.call(this),this.status=1}ke(qu,zo);function Un(t){this.g=t}ke(Un,$u);Un.prototype.xa=function(){Se(this.g,"a")};Un.prototype.wa=function(t){Se(this.g,new ju(t))};Un.prototype.va=function(t){Se(this.g,new qu)};Un.prototype.ua=function(){Se(this.g,"b")};bi.prototype.createWebChannel=bi.prototype.g;Xe.prototype.send=Xe.prototype.u;Xe.prototype.open=Xe.prototype.m;Xe.prototype.close=Xe.prototype.close;Ui.NO_ERROR=0;Ui.TIMEOUT=8;Ui.HTTP_ERROR=6;cu.COMPLETE="complete";lu.EventType=Ds;Ds.OPEN="a";Ds.CLOSE="b";Ds.ERROR="c";Ds.MESSAGE="d";Te.prototype.listen=Te.prototype.N;le.prototype.listenOnce=le.prototype.O;le.prototype.getLastError=le.prototype.Oa;le.prototype.getLastErrorCode=le.prototype.Ea;le.prototype.getStatus=le.prototype.aa;le.prototype.getResponseJson=le.prototype.Sa;le.prototype.getResponseText=le.prototype.fa;le.prototype.send=le.prototype.da;le.prototype.setWithCredentials=le.prototype.Ka;var Dg=function(){return new bi},Ng=function(){return Vi()},Dr=Ui,Pg=cu,Og=an,mc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Rg=Os,Zs=lu,Lg=le;const yc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zt=new Rl("@firebase/firestore");function vc(){return Zt.logLevel}function k(t,...e){if(Zt.logLevel<=X.DEBUG){const n=e.map(ea);Zt.debug(`Firestore (${$n}): ${t}`,...n)}}function Et(t,...e){if(Zt.logLevel<=X.ERROR){const n=e.map(ea);Zt.error(`Firestore (${$n}): ${t}`,...n)}}function eo(t,...e){if(Zt.logLevel<=X.WARN){const n=e.map(ea);Zt.warn(`Firestore (${$n}): ${t}`,...n)}}function ea(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function R(t="Unexpected state"){const e=`FIRESTORE (${$n}) INTERNAL ASSERTION FAILED: `+t;throw Et(e),new Error(e)}function re(t,e){t||R()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ne.UNAUTHENTICATED))}shutdown(){}}class xg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Fg{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Dt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Dt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(re(typeof s.accessToken=="string"),new Hu(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Ne(e)}}class Bg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(re(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Vg{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Bg(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $g{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.A=n.token,new Ug(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=jg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function kn(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new ye(0,0))}static max(){return new x(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){n===void 0?n=0:n>e.length&&R(),s===void 0?s=e.length-n:s>e.length-n&&R(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ys?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends ys{construct(e,n,s){return new oe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new S(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends ys{construct(e,n,s){return new Oe(e,n,s)}static isValidIdentifier(e){return qg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new S(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new S(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(oe.fromString(e))}static fromName(e){return new D(oe.fromString(e).popFirst(5))}static empty(){return new D(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new oe(e.slice()))}}function Hg(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=x.fromTimestamp(s===1e9?new ye(n+1,0):new ye(n,s));return new Rt(i,D.empty(),e)}function Kg(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Rt(x.min(),D.empty(),-1)}static max(){return new Rt(x.max(),D.empty(),-1)}}function zg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Gg)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(i=>i?b.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new b((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new b((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ta{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ta.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,s,i,r,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t){return t==null}function Ei(t){return t===0&&1/t==-1/0}function Yg(t){return typeof t=="number"&&Number.isInteger(t)&&!Ei(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Xg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Xg("Invalid base64 string: "+i):i}}(e);return new xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xe.EMPTY_BYTE_STRING=new xe("");const Jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(t){if(re(!!t),typeof t=="string"){let e=0;const n=Jg.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dn(t){return typeof t=="string"?xe.fromBase64String(t):xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wu(t){const e=t.mapValue.fields.__previous_value__;return Gu(e)?Wu(e):e}function ws(t){const e=Lt(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:Zg(t)?9007199254740991:10:R()}function ft(t,e){if(t===e)return!0;const n=en(t);if(n!==en(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ws(t).isEqual(ws(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Lt(s.timestampValue),o=Lt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dn(s.bytesValue).isEqual(Dn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return de(s.geoPointValue.latitude)===de(i.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return de(s.integerValue)===de(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=de(s.doubleValue),o=de(i.doubleValue);return r===o?Ei(r)===Ei(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return kn(t.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(wc(r)!==wc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!ft(r[a],o[a])))return!1;return!0}(t,e);default:return R()}}function bs(t,e){return(t.values||[]).find(n=>ft(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=en(t),s=en(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=de(i.integerValue||i.doubleValue),a=de(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bc(t.timestampValue,e.timestampValue);case 4:return bc(ws(t),ws(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Dn(i),a=Dn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=J(o[c],a[c]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=J(de(i.latitude),de(r.latitude));return o!==0?o:J(de(i.longitude),de(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nn(o[c],a[c]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ei.mapValue&&r===ei.mapValue)return 0;if(i===ei.mapValue)return 1;if(r===ei.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=J(a[u],l[u]);if(h!==0)return h;const d=Nn(o[a[u]],c[l[u]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw R()}}function bc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Lt(t),s=Lt(e),i=J(n.seconds,s.seconds);return i!==0?i:J(n.nanos,s.nanos)}function Pn(t){return to(t)}function to(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Lt(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=to(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${to(s.fields[a])}`;return r+"}"}(t.mapValue):R();var e,n}function Ec(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function no(t){return!!t&&"integerValue"in t}function na(t){return!!t&&"arrayValue"in t}function _c(t){return!!t&&"nullValue"in t}function Tc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ri(t){return!!t&&"mapValue"in t}function ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ns(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Zg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _i{constructor(e,n){this.position=e,this.inclusive=n}}function Cc(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),n.key):s=Nn(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ic(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qu{}class fe extends Qu{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tm(e,n,s):n==="array-contains"?new im(e,s):n==="in"?new rm(e,s):n==="not-in"?new om(e,s):n==="array-contains-any"?new am(e,s):new fe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nm(e,s):new sm(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.matchesComparison(Nn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class at extends Qu{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new at(e,n)}matches(e){return Yu(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yu(t){return t.op==="and"}function Xu(t){return em(t)&&Yu(t)}function em(t){for(const e of t.filters)if(e instanceof at)return!1;return!0}function so(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+Pn(t.value);if(Xu(t))return t.filters.map(e=>so(e)).join(",");{const e=t.filters.map(n=>so(n)).join(",");return`${t.op}(${e})`}}function Ju(t,e){return t instanceof fe?function(n,s){return s instanceof fe&&n.op===s.op&&n.field.isEqual(s.field)&&ft(n.value,s.value)}(t,e):t instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Ju(r,s.filters[o]),!0):!1}(t,e):void R()}function Zu(t){return t instanceof fe?function(e){return`${e.field.canonicalString()} ${e.op} ${Pn(e.value)}`}(t):t instanceof at?function(e){return e.op.toString()+" {"+e.getFilters().map(Zu).join(" ,")+"}"}(t):"Filter"}class tm extends fe{constructor(e,n,s){super(e,n,s),this.key=D.fromName(s.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class nm extends fe{constructor(e,n){super(e,"in",n),this.keys=eh("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sm extends fe{constructor(e,n){super(e,"not-in",n),this.keys=eh("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eh(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>D.fromName(s.referenceValue))}class im extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return na(n)&&bs(n.arrayValue,this.value)}}class rm extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bs(this.value.arrayValue,n)}}class om extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bs(this.value.arrayValue,n)}}class am extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!na(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>bs(this.value.arrayValue,s))}}/**
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
 */class vn{constructor(e,n="asc"){this.field=e,this.dir=n}}function cm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ti(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ti(this.root,e,this.comparator,!1)}getReverseIterator(){return new ti(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ti(this.root,e,this.comparator,!0)}}class ti{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ie.EMPTY,this.right=r??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const e=this.left.check();if(e!==this.right.check())throw R();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sc(this.data.getIterator())}getIteratorFrom(e){return new Sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ve(this.comparator);return n.data=e,n}}class Sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Qe([])}unionWith(e){let n=new ve(Oe.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ri(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(n)}setAll(e){let n=Oe.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ns(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ri(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ri(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){cn(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new qe(ns(this.value))}}function th(t){const e=[];return cn(t.fields,(n,s)=>{const i=new Oe([n]);if(ri(s)){const r=th(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,x.min(),x.min(),x.min(),qe.empty(),0)}static newFoundDocument(e,n,s,i){return new Pe(e,1,n,x.min(),s,i,0)}static newNoDocument(e,n){return new Pe(e,2,n,x.min(),x.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Pe(e,3,n,x.min(),x.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lm{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function Ac(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lm(t,e,n,s,i,r,o)}function sa(t){const e=B(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>so(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pn(s)).join(",")),e._t=n}return e._t}function ia(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ju(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ic(t.startAt,e.startAt)&&Ic(t.endAt,e.endAt)}function io(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function um(t,e,n,s,i,r,o,a){return new jn(t,e,n,s,i,r,o,a)}function ra(t){return new jn(t)}function kc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oa(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Qi(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nh(t){return t.collectionGroup!==null}function wn(t){const e=B(t);if(e.wt===null){e.wt=[];const n=Qi(e),s=oa(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new vn(n)),e.wt.push(new vn(Oe.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new vn(Oe.keyField(),r))}}}return e.wt}function _t(t){const e=B(t);if(!e.gt)if(e.limitType==="F")e.gt=Ac(e.path,e.collectionGroup,wn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of wn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new vn(r.field,o))}const s=e.endAt?new _i(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new _i(e.startAt.position,e.startAt.inclusive):null;e.gt=Ac(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.gt}function ro(t,e){e.getFirstInequalityField(),Qi(t);const n=t.filters.concat([e]);return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oo(t,e,n){return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yi(t,e){return ia(_t(t),_t(e))&&t.limitType===e.limitType}function sh(t){return`${sa(_t(t))}|lt:${t.limitType}`}function ao(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Zu(s)).join(", ")}]`),Wi(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pn(s)).join(",")),`Target(${n})`}(_t(t))}; limitType=${t.limitType})`}function Xi(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of wn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Cc(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,wn(n),s)||n.endAt&&!function(i,r,o){const a=Cc(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,wn(n),s))}(t,e)}function hm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ih(t){return(e,n)=>{let s=!1;for(const i of wn(t)){const r=dm(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function dm(t,e,n){const s=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Nn(a,c):R()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return R()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ei(e)?"-0":e}}function oh(t){return{integerValue:""+t}}function fm(t,e){return Yg(e)?oh(e):rh(t,e)}/**
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
 */class Ji{constructor(){this._=void 0}}function pm(t,e,n){return t instanceof Ti?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Es?ch(t,e):t instanceof _s?lh(t,e):function(s,i){const r=ah(s,i),o=Dc(r)+Dc(s.It);return no(r)&&no(s.It)?oh(o):rh(s.Tt,o)}(t,e)}function gm(t,e,n){return t instanceof Es?ch(t,e):t instanceof _s?lh(t,e):n}function ah(t,e){return t instanceof Ci?no(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ti extends Ji{}class Es extends Ji{constructor(e){super(),this.elements=e}}function ch(t,e){const n=uh(e);for(const s of t.elements)n.some(i=>ft(i,s))||n.push(s);return{arrayValue:{values:n}}}class _s extends Ji{constructor(e){super(),this.elements=e}}function lh(t,e){let n=uh(e);for(const s of t.elements)n=n.filter(i=>!ft(i,s));return{arrayValue:{values:n}}}class Ci extends Ji{constructor(e,n){super(),this.Tt=e,this.It=n}}function Dc(t){return de(t.integerValue||t.doubleValue)}function uh(t){return na(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mm(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Es&&s instanceof Es||n instanceof _s&&s instanceof _s?kn(n.elements,s.elements,ft):n instanceof Ci&&s instanceof Ci?ft(n.It,s.It):n instanceof Ti&&s instanceof Ti}(t.transform,e.transform)}class ym{constructor(e,n){this.version=e,this.transformResults=n}}class rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zi{}function hh(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aa(t.key,rt.none()):new Fs(t.key,t.data,rt.none());{const n=t.data,s=qe.empty();let i=new ve(Oe.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Vt(t.key,s,new Qe(i.toArray()),rt.none())}}function vm(t,e,n){t instanceof Fs?function(s,i,r){const o=s.value.clone(),a=Pc(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vt?function(s,i,r){if(!oi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Pc(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(dh(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ss(t,e,n,s){return t instanceof Fs?function(i,r,o,a){if(!oi(i.precondition,r))return o;const c=i.value.clone(),l=Oc(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Vt?function(i,r,o,a){if(!oi(i.precondition,r))return o;const c=Oc(i.fieldTransforms,a,r),l=r.data;return l.setAll(dh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return oi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function wm(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=ah(s.transform,i||null);r!=null&&(n===null&&(n=qe.empty()),n.set(s.field,r))}return n||null}function Nc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kn(n,s,(i,r)=>mm(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fs extends Zi{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vt extends Zi{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function dh(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Pc(t,e,n){const s=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gm(o,a,n[i]))}return s}function Oc(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,pm(r,o,e))}return s}class aa extends Zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bm extends Zi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he,K;function _m(t){switch(t){default:return R();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function fh(t){if(t===void 0)return Et("GRPC error has no .code"),m.UNKNOWN;switch(t){case he.OK:return m.OK;case he.CANCELLED:return m.CANCELLED;case he.UNKNOWN:return m.UNKNOWN;case he.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case he.INTERNAL:return m.INTERNAL;case he.UNAVAILABLE:return m.UNAVAILABLE;case he.UNAUTHENTICATED:return m.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case he.NOT_FOUND:return m.NOT_FOUND;case he.ALREADY_EXISTS:return m.ALREADY_EXISTS;case he.PERMISSION_DENIED:return m.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case he.ABORTED:return m.ABORTED;case he.OUT_OF_RANGE:return m.OUT_OF_RANGE;case he.UNIMPLEMENTED:return m.UNIMPLEMENTED;case he.DATA_LOSS:return m.DATA_LOSS;default:return R()}}(K=he||(he={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cn(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return zu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new we(D.comparator);function Tt(){return Tm}const ph=new we(D.comparator);function Jn(...t){let e=ph;for(const n of t)e=e.insert(n.key,n);return e}function gh(t){let e=ph;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gt(){return is()}function mh(){return is()}function is(){return new qn(t=>t.toString(),(t,e)=>t.isEqual(e))}const Cm=new we(D.comparator),Im=new ve(D.comparator);function q(...t){let e=Im;for(const n of t)e=e.add(n);return e}const Sm=new ve(J);function yh(){return Sm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Bs.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new er(x.min(),i,yh(),Tt(),q())}}class Bs{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Bs(s,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,s,i){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=i}}class vh{constructor(e,n){this.targetId=e,this.Rt=n}}class wh{constructor(e,n,s=xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Rc{constructor(){this.bt=0,this.vt=Mc(),this.Pt=xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=q(),n=q(),s=q();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:R()}}),new Bs(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Mc()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Am{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tt(),this.Kt=Lc(),this.Gt=new ve(J)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:R()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,s=e.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(io(r))if(s===0){const o=new D(r.path);this.zt(n,o,Pe.newNoDocument(o,x.min()))}else re(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&io(a.target)){const c=new D(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Pe.newNoDocument(c,e))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=q();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const i=new er(e,n,this.Gt,this.Ut,s);return this.Ut=Tt(),this.Kt=Lc(),this.Gt=new ve(J),i}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Rc,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new ve(J),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Rc),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Lc(){return new we(D.comparator)}function Mc(){return new we(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Nm=(()=>({and:"AND",or:"OR"}))();class Pm{constructor(e,n){this.databaseId=e,this.yt=n}}function Ii(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bh(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Om(t,e){return Ii(t,e.toTimestamp())}function ht(t){return re(!!t),x.fromTimestamp(function(e){const n=Lt(e);return new ye(n.seconds,n.nanos)}(t))}function ca(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Eh(t){const e=oe.fromString(t);return re(Ih(e)),e}function co(t,e){return ca(t.databaseId,e.path)}function Nr(t,e){const n=Eh(e);if(n.get(1)!==t.databaseId.projectId)throw new S(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(_h(n))}function lo(t,e){return ca(t.databaseId,e)}function Rm(t){const e=Eh(t);return e.length===4?oe.emptyPath():_h(e)}function uo(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _h(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xc(t,e,n){return{name:co(t,e),fields:n.value.mapValue.fields}}function Lm(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:R()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(re(l===void 0||typeof l=="string"),xe.fromBase64String(l||"")):(re(l===void 0||l instanceof Uint8Array),xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?m.UNKNOWN:fh(c.code);return new S(l,c.message||"")}(o);n=new wh(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Nr(t,s.document.name),r=ht(s.document.updateTime),o=s.document.createTime?ht(s.document.createTime):x.min(),a=new qe({mapValue:{fields:s.document.fields}}),c=Pe.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new ai(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Nr(t,s.document),r=s.readTime?ht(s.readTime):x.min(),o=Pe.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ai([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Nr(t,s.document),r=s.removedTargetIds||[];n=new ai([],r,i,null)}else{if(!("filter"in e))return R();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new Em(i),o=s.targetId;n=new vh(o,r)}}return n}function Mm(t,e){let n;if(e instanceof Fs)n={update:xc(t,e.key,e.value)};else if(e instanceof aa)n={delete:co(t,e.key)};else if(e instanceof Vt)n={update:xc(t,e.key,e.data),updateMask:Hm(e.fieldMask)};else{if(!(e instanceof bm))return R();n={verify:co(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ti)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Es)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _s)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ci)return{fieldPath:r.field.canonicalString(),increment:o.It};throw R()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Om(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(t,e.precondition)),n}function xm(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(x.min())&&(r=ht(i)),new ym(r,s.transformResults||[])}(n,e))):[]}function Fm(t,e){return{documents:[lo(t,e.path)]}}function Bm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=lo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=lo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return Ch(at.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pn(u.field),direction:$m(u.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(c,l){return c.yt||Wi(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Vm(t){let e=Rm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=Th(u);return h instanceof at&&Xu(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new vn(gn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wi(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new _i(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new _i(d,h)}(n.endAt)),um(e,i,o,r,a,"F",c,l)}function Um(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return R()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Th(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gn(e.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=gn(e.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gn(e.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gn(e.unaryFilter.field);return fe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(t):t.fieldFilter!==void 0?function(e){return fe.create(gn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return at.create(e.compositeFilter.filters.map(n=>Th(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return R()}}(e.compositeFilter.op))}(t):R()}function $m(t){return km[t]}function jm(t){return Dm[t]}function qm(t){return Nm[t]}function pn(t){return{fieldPath:t.canonicalString()}}function gn(t){return Oe.fromServerFormat(t.fieldPath)}function Ch(t){return t instanceof fe?function(e){if(e.op==="=="){if(Tc(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NAN"}};if(_c(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Tc(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NAN"}};if(_c(e.value))return{unaryFilter:{field:pn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pn(e.field),op:jm(e.op),value:e.value}}}(t):t instanceof at?function(e){const n=e.getFilters().map(s=>Ch(s));return n.length===1?n[0]:{compositeFilter:{op:qm(e.op),filters:n}}}(t):R()}function Hm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ih(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vm(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ss(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ss(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=mh();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=hh(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&kn(this.mutations,e.mutations,(n,s)=>Nc(n,s))&&kn(this.baseMutations,e.baseMutations,(n,s)=>Nc(n,s))}}class la{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){re(e.mutations.length===s.length);let i=Cm;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new la(e,n,s,i)}}/**
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
 */class zm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qt{constructor(e,n,s,i,r=x.min(),o=x.min(),a=xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.oe=e}}function Wm(t){const e=Vm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oo(e,e.limit,"L"):e}/**
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
 */class Qm{constructor(){this.Ze=new Ym}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Rt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Ym{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ve(oe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ve(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xm{constructor(){this.changes=new qn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&ss(s.mutation,i,Qe.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,q()).next(()=>s))}getLocalViewOfDocuments(e,n,s=q()){const i=Gt();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Jn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Gt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,q()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Tt();const o=is(),a=is();return n.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Vt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ss(u.mutation,l,u.mutation.getFieldMask(),ye.now())):o.set(l.key,Qe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new Jm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=is();let i=new we((o,a)=>o-a),r=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Qe.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(i.get(a.batchId)||q()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=mh();u.forEach(d=>{if(!r.has(d)){const p=hh(n.get(d),s.get(d));p!==null&&h.set(d,p),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):b.resolve(Gt());let a=-1,c=r;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,q())).next(u=>({batchId:a,changes:gh(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(s=>{let i=Jn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Jn();return this.indexManager.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const c=function(l,u){return new jn(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Pe.newInvalidDocument(l)))});let o=Jn();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ss(l.mutation,c,Qe.empty(),ye.now()),Xi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Wm(s.bundledQuery),readTime:ht(s.readTime)}}(n)),b.resolve()}}/**
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
 */class ty{constructor(){this.overlays=new we(D.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gt();return b.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ce(e,n,r)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const i=Gt(),r=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new we((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Gt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return b.resolve(a)}ce(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new zm(n,s));let r=this.ss.get(n);r===void 0&&(r=q(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.rs=new ve(Ee.os),this.us=new ve(Ee.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Ee(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Ee(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new D(new oe([])),s=new Ee(n,e),i=new Ee(n,e+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new D(new oe([])),s=new Ee(n,e),i=new Ee(n,e+1);let r=q();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Ee(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ee{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return D.comparator(e.key,n.key)||J(e.gs,n.gs)}static cs(e,n){return J(e.gs,n.gs)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new ve(Ee.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Km(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Ee(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ee(n,0),i=new Ee(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ve(J);return n.forEach(i=>{const r=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;D.isDocumentKey(r)||(r=r.child(""));const o=new Ee(new D(r),0);let a=new ve(J);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,i=>{const r=new Ee(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Ee(n,0),i=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.Rs=e,this.docs=new we(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Pe.newInvalidDocument(n))}getEntries(e,n){let s=Tt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Pe.newInvalidDocument(i))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Tt();const o=n.path,a=new D(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||zg(Kg(u),s)<=0||(i.has(u.key)||Xi(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,i){R()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new iy(this)}getSize(e){return b.resolve(this.size)}}class iy extends Xm{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.persistence=e,this.vs=new qn(n=>sa(n),ia),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ua,this.targetCount=0,this.Ss=On.Vn()}forEachTarget(e,n){return this.vs.forEach((s,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new On(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(r).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new ta(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new ry(this),this.indexManager=new Qm,this.remoteDocumentCache=function(s){return new sy(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Gm(n),this.Os=new ey(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ty,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new ny(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const i=new ay(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class ay extends Wg{constructor(e){super(),this.currentSequenceNumber=e}}class ha{constructor(e){this.persistence=e,this.Bs=new ua,this.Ls=null}static qs(e){return new ha(e)}get Us(){if(this.Ls)return this.Ls;throw R()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const i=D.fromPath(s);return this.Ks(e,i).next(r=>{r||n.removeEntry(i,x.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(e,n){let s=q(),i=q();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new da(e,n.fromCache,s,i)}}/**
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
 */class cy{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Mi(e,n).next(r=>r||this.Fi(e,n,i,s)).next(r=>r||this.$i(e,n))}Mi(e,n){if(kc(n))return b.resolve(null);let s=_t(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=oo(n,null,"F"),s=_t(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=q(...r);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(e,oo(n,null,"F")):this.qi(e,l,n,c)}))})))}Fi(e,n,s,i){return kc(n)||i.isEqual(x.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(e,n):(vc()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ao(n)),this.qi(e,o,n,Hg(i,-1)))})}Bi(e,n){let s=new ve(ih(e));return n.forEach((i,r)=>{Xi(e,r)&&(s=s.add(r))}),s}Li(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,n){return vc()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",ao(n)),this.Oi.getDocumentsMatchingQuery(e,n,Rt.min())}qi(e,n,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,s,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new we(J),this.Gi=new qn(r=>sa(r),ia),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zm(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function uy(t,e,n,s){return new ly(t,e,n,s)}async function Sh(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=q();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function hy(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=b.resolve();return h.forEach(p=>{d=d.next(()=>l.getEntry(a,p)).next(y=>{const E=c.docVersions.get(p);re(E!==null),y.version.compareTo(E)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=q();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Ah(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function dy(t,e){const n=B(t),s=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(r,u.addedDocuments,h)));let p=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(xe.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),i=i.insert(h,p),function(y,E,w){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,p,u)&&a.push(n.Ns.updateTargetData(r,p))});let c=Tt(),l=q();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(fy(r,o,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(x.min())){const u=n.Ns.getLastRemoteSnapshotVersion(r).next(h=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(n.Ki=i,r))}function fy(t,e,n){let s=q(),i=q();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Tt();return n.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(x.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Hi:o,Ji:i}})}function py(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function gy(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,e).next(r=>r?(i=r,b.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Qt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function ho(t,e,n){const s=B(t),i=s.Ki.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xs(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function Fc(t,e,n){const s=B(t);let i=x.min(),r=q();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=B(a),h=u.Gi.get(l);return h!==void 0?b.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,o,_t(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?i:x.min(),n?r:q())).next(a=>(my(s,hm(e),a),{documents:a,Yi:r})))}function my(t,e,n){let s=t.Qi.get(e)||x.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Qi.set(e,s)}class Bc{constructor(){this.activeTargetIds=yh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yy{constructor(){this.Ur=new Bc,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Bc,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vy{Gr(e){}shutdown(){}}/**
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
 */class Vc{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,i,r){const o=this.fo(e,n);k("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw eo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,i,r,o){return this.lo(e,n,s,i,r)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+$n,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,n){const s=wy[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,i){return new Promise((r,o)=>{const a=new Lg;a.setWithCredentials(!0),a.listenOnce(Pg.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dr.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Dr.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new S(m.DEADLINE_EXCEEDED,"Request time out"));break;case Dr.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(E)>=0?E:m.UNKNOWN}(d.status);o(new S(p,d.message))}else o(new S(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new S(m.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(e,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Dg(),o=Ng(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Rg({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");k("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let u=!1,h=!1;const d=new by({Yr:y=>{h?k("Connection","Not sending because WebChannel is closed:",y):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",y),l.send(y))},Zr:()=>l.close()}),p=(y,E,w)=>{y.listen(E,N=>{try{w(N)}catch(C){setTimeout(()=>{throw C},0)}})};return p(l,Zs.EventType.OPEN,()=>{h||k("Connection","WebChannel transport opened.")}),p(l,Zs.EventType.CLOSE,()=>{h||(h=!0,k("Connection","WebChannel transport closed"),d.oo())}),p(l,Zs.EventType.ERROR,y=>{h||(h=!0,eo("Connection","WebChannel transport errored:",y),d.oo(new S(m.UNAVAILABLE,"The operation could not be completed")))}),p(l,Zs.EventType.MESSAGE,y=>{var E;if(!h){const w=y.data[0];re(!!w);const N=w,C=N.error||((E=N[0])===null||E===void 0?void 0:E.error);if(C){k("Connection","WebChannel received error:",C);const M=C.status;let O=function(G){const W=he[G];if(W!==void 0)return fh(W)}(M),F=C.message;O===void 0&&(O=m.INTERNAL,F="Unknown error status: "+M+" with message "+C.message),h=!0,d.oo(new S(O,F)),l.close()}else k("Connection","WebChannel received:",w),d.uo(w)}}),p(o,Og.STAT_EVENT,y=>{y.stat===mc.PROXY?k("Connection","Detected buffering proxy"):y.stat===mc.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Pr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t){return new Pm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,s,i,r,o,a,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new kh(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{e(()=>{const i=new S(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _y extends Dh{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Lm(this.Tt,e),s=function(i){if(!("targetChange"in i))return x.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?x.min():r.readTime?ht(r.readTime):x.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=uo(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=io(a)?{documents:Fm(i,a)}:{query:Bm(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=bh(i,r.resumeToken):r.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Ii(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Um(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=uo(this.Tt),n.removeTarget=e,this.qo(n)}}class Ty extends Dh{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=xm(e.writeResults,e.commitTime),s=ht(e.commitTime);return this.listener.eu(s,n)}return re(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=uo(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Mm(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new S(m.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(m.UNKNOWN,i.toString())})}mo(e,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new S(m.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Iy{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Et(n),this.cu=!1):k("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{ln(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=B(a);c.mu.add(4),await Vs(c),c.pu.set("Unknown"),c.mu.delete(4),await nr(c)}(this))})}),this.pu=new Iy(s,i)}}async function nr(t){if(ln(t))for(const e of t.gu)await e(!0)}async function Vs(t){for(const e of t.gu)await e(!1)}function Nh(t,e){const n=B(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ga(n)?pa(n):Hn(n).Mo()&&fa(n,e))}function Ph(t,e){const n=B(t),s=Hn(n);n.wu.delete(e),s.Mo()&&Oh(n,e),n.wu.size===0&&(s.Mo()?s.Bo():ln(n)&&n.pu.set("Unknown"))}function fa(t,e){t.Iu.Ft(e.targetId),Hn(t).Jo(e)}function Oh(t,e){t.Iu.Ft(e),Hn(t).Yo(e)}function pa(t){t.Iu=new Am({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Hn(t).start(),t.pu.au()}function ga(t){return ln(t)&&!Hn(t).Oo()&&t.wu.size>0}function ln(t){return B(t).mu.size===0}function Rh(t){t.Iu=void 0}async function Ay(t){t.wu.forEach((e,n)=>{fa(t,e)})}async function ky(t,e){Rh(t),ga(t)?(t.pu.fu(e),pa(t)):t.pu.set("Unknown")}async function Dy(t,e,n){if(t.pu.set("Online"),e instanceof wh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Si(t,s)}else if(e instanceof ai?t.Iu.Qt(e):e instanceof vh?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(x.min()))try{const s=await Ah(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const c=i.wu.get(a);if(!c)return;i.wu.set(a,c.withResumeToken(xe.EMPTY_BYTE_STRING,c.snapshotVersion)),Oh(i,a);const l=new Qt(c.target,a,1,c.sequenceNumber);fa(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Si(t,s)}}async function Si(t,e,n){if(!xs(e))throw e;t.mu.add(1),await Vs(t),t.pu.set("Offline"),n||(n=()=>Ah(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await nr(t)})}function Lh(t,e){return e().catch(n=>Si(t,n,e))}async function sr(t){const e=B(t),n=Mt(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;Ny(e);)try{const i=await py(e.localStore,s);if(i===null){e._u.length===0&&n.Bo();break}s=i.batchId,Py(e,i)}catch(i){await Si(e,i)}Mh(e)&&xh(e)}function Ny(t){return ln(t)&&t._u.length<10}function Py(t,e){t._u.push(e);const n=Mt(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Mh(t){return ln(t)&&!Mt(t).Oo()&&t._u.length>0}function xh(t){Mt(t).start()}async function Oy(t){Mt(t).su()}async function Ry(t){const e=Mt(t);for(const n of t._u)e.tu(n.mutations)}async function Ly(t,e,n){const s=t._u.shift(),i=la.from(s,e,n);await Lh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sr(t)}async function My(t,e){e&&Mt(t).Xo&&await async function(n,s){if(i=s.code,_m(i)&&i!==m.ABORTED){const r=n._u.shift();Mt(n).$o(),await Lh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await sr(n)}var i}(t,e),Mh(t)&&xh(t)}async function Uc(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=ln(n);n.mu.add(3),await Vs(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await nr(n)}async function xy(t,e){const n=B(t);e?(n.mu.delete(2),await nr(n)):e||(n.mu.add(2),await Vs(n),n.pu.set("Unknown"))}function Hn(t){return t.Tu||(t.Tu=function(e,n,s){const i=B(e);return i.ru(),new _y(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Ay.bind(null,t),no:ky.bind(null,t),Ho:Dy.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ga(t)?pa(t):t.pu.set("Unknown")):(await t.Tu.stop(),Rh(t))})),t.Tu}function Mt(t){return t.Eu||(t.Eu=function(e,n,s){const i=B(e);return i.ru(),new Ty(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(t.datastore,t.asyncQueue,{Xr:Oy.bind(null,t),no:My.bind(null,t),nu:Ry.bind(null,t),eu:Ly.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await sr(t)):(await t.Eu.stop(),t._u.length>0&&(k("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ma(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(t,e){if(Et("AsyncQueue",`${e}: ${t}`),xs(t))return new S(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||D.comparator(n.key,s.key):(n,s)=>D.comparator(n.key,s.key),this.keyedMap=Jn(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new bn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new bn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Au=new we(D.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):R():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Rn{constructor(e,n,s,i,r,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rn(e,n,bn.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this.bu=void 0,this.listeners=[]}}class By{constructor(){this.queries=new qn(e=>sh(e),Yi),this.onlineState="Unknown",this.vu=new Set}}async function Fh(t,e){const n=B(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Fy),i)try{r.bu=await n.onListen(s)}catch(o){const a=ya(o,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.bu&&e.Vu(r.bu)&&va(n)}async function Bh(t,e){const n=B(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Vy(t,e){const n=B(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&va(n)}function Uy(t,e,n){const s=B(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function va(t){t.vu.forEach(e=>{e.next()})}class Vh{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Rn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.key=e}}class $h{constructor(e){this.key=e}}class $y{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=q(),this.mutatedKeys=q(),this.ju=ih(e),this.zu=new bn(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new $c,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),p=Xi(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==E&&(s.track({type:3,doc:p}),w=!0):this.Yu(d,p)||(s.track({type:2,doc:p}),w=!0,(c&&this.ju(p,c)>0||l&&this.ju(p,l)<0)&&(a=!0)):!d&&p?(s.track({type:0,doc:p}),w=!0):d&&!p&&(s.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),r=E?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return p(h)-p(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,r.length!==0||c?{snapshot:new Rn(this.query,e.zu,i,r,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new $c,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=q(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new $h(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Uh(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=q();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Rn.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class jy{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class qy{constructor(e){this.key=e,this.ic=!1}}class Hy{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new qn(a=>sh(a),Yi),this.uc=new Map,this.cc=new Set,this.ac=new we(D.comparator),this.hc=new Map,this.lc=new ua,this.fc={},this.dc=new Map,this._c=On.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Ky(t,e){const n=tv(t);let s,i;const r=n.oc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await gy(n.localStore,_t(e));n.isPrimaryClient&&Nh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await zy(n,e,s,a==="current",o.resumeToken)}return i}async function zy(t,e,n,s,i){t.mc=(h,d,p)=>async function(y,E,w,N){let C=E.view.Hu(w);C.Li&&(C=await Fc(y.localStore,E.query,!1).then(({documents:F})=>E.view.Hu(F,C)));const M=N&&N.targetChanges.get(E.targetId),O=E.view.applyChanges(C,y.isPrimaryClient,M);return qc(y,E.targetId,O.tc),O.snapshot}(t,h,d,p);const r=await Fc(t.localStore,e,!0),o=new $y(e,r.Yi),a=o.Hu(r.documents),c=Bs.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);qc(t,n,l.tc);const u=new jy(e,n,o);return t.oc.set(e,u),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),l.snapshot}async function Gy(t,e){const n=B(t),s=n.oc.get(e),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!Yi(r,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ho(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ph(n.remoteStore,s.targetId),fo(n,s.targetId)}).catch(Ms)):(fo(n,s.targetId),await ho(n.localStore,s.targetId,!0))}async function Wy(t,e,n){const s=nv(t);try{const i=await function(r,o){const a=B(r),c=ye.now(),l=o.reduce((d,p)=>d.add(p.key),q());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Tt(),y=q();return a.ji.getEntries(d,l).next(E=>{p=E,p.forEach((w,N)=>{N.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(E=>{u=E;const w=[];for(const N of o){const C=wm(N,u.get(N.key).overlayedDocument);C!=null&&w.push(new Vt(N.key,C,th(C.value.mapValue),rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,w,o)}).next(E=>{h=E;const w=E.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(d,E.batchId,w)})}).then(()=>({batchId:h.batchId,changes:gh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new we(J)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Us(s,i.changes),await sr(s.remoteStore)}catch(i){const r=ya(i,"Failed to persist write");n.reject(r)}}async function jh(t,e){const n=B(t);try{const s=await dy(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?re(o.ic):i.removedDocuments.size>0&&(re(o.ic),o.ic=!1))}),await Us(n,s,e)}catch(s){await Ms(s)}}function jc(t,e,n){const s=B(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=B(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(o)&&(c=!0)}),c&&va(a)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Qy(t,e,n){const s=B(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.hc.get(e),r=i&&i.key;if(r){let o=new we(D.comparator);o=o.insert(r,Pe.newNoDocument(r,x.min()));const a=q().add(r),c=new er(x.min(),new Map,new ve(J),o,a);await jh(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),wa(s)}else await ho(s.localStore,e,!1).then(()=>fo(s,e,n)).catch(Ms)}async function Yy(t,e){const n=B(t),s=e.batch.batchId;try{const i=await hy(n.localStore,e);Hh(n,s,null),qh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Us(n,i)}catch(i){await Ms(i)}}async function Xy(t,e,n){const s=B(t);try{const i=await function(r,o){const a=B(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(re(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Hh(s,e,n),qh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Us(s,i)}catch(i){await Ms(i)}}function qh(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Hh(t,e,n){const s=B(t);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||Kh(t,s)})}function Kh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Ph(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),wa(t))}function qc(t,e,n){for(const s of n)s instanceof Uh?(t.lc.addReference(s.key,e),Jy(t,s)):s instanceof $h?(k("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Kh(t,s.key)):R()}function Jy(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.cc.add(s),wa(t))}function wa(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new D(oe.fromString(e)),s=t._c.next();t.hc.set(s,new qy(n)),t.ac=t.ac.insert(n,s),Nh(t.remoteStore,new Qt(_t(ra(n.path)),s,2,ta.at))}}async function Us(t,e,n){const s=B(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=da.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=B(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,h=>b.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!xs(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),p=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(p);l.Ki=l.Ki.insert(h,y)}}}(s.localStore,r))}async function Zy(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await Sh(n.localStore,e);n.currentUser=e,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new S(m.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Us(n,s.Wi)}}function ev(t,e){const n=B(t),s=n.hc.get(e);if(s&&s.ic)return q().add(s.key);{let i=q();const r=n.uc.get(e);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function tv(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ev.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qy.bind(null,e),e.rc.Ho=Vy.bind(null,e.eventManager),e.rc.gc=Uy.bind(null,e.eventManager),e}function nv(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xy.bind(null,e),e}class sv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=tr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return uy(this.persistence,new cy,e.initialUser,this.Tt)}Tc(e){return new oy(ha.qs,this.Tt)}Ic(e){return new yy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zy.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new By}createDatastore(e){const n=tr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Ey(i));var i;return function(r,o,a,c){return new Cy(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>jc(this.syncEngine,a,0),o=Vc.C()?new Vc:new vy,new Sy(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,c,l){const u=new Hy(s,i,r,o,a,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=B(e);k("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Vs(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ne.UNAUTHENTICATED,this.clientId=Ku.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{k("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(k("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ya(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ov(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Sh(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function av(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cv(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Uc(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Uc(e.remoteStore,r)),t.onlineComponents=e}async function cv(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await ov(t,new sv)),t.offlineComponents}async function Gh(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await av(t,new iv)),t.onlineComponents}function lv(t){return Gh(t).then(e=>e.syncEngine)}async function po(t){const e=await Gh(t),n=e.eventManager;return n.onListen=Ky.bind(null,e.syncEngine),n.onUnlisten=Gy.bind(null,e.syncEngine),n}function uv(t,e,n={}){const s=new Dt;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,c){const l=new zh({next:h=>{r.enqueueAndForget(()=>Bh(i,u)),h.fromCache&&a.source==="server"?c.reject(new S(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Vh(o,l,{includeMetadataChanges:!0,Ou:!0});return Fh(i,u)}(await po(t),t.asyncQueue,e,n,s)),s.promise}const Hc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t,e,n){if(!n)throw new S(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hv(t,e,n,s){if(e===!0&&s===!0)throw new S(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kc(t){if(!D.isDocumentKey(t))throw new S(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zc(t){if(D.isDocumentKey(t))throw new S(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ir(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R()}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ir(t);throw new S(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Mg;switch(n.type){case"gapi":const s=n.client;return new Vg(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hc.get(e);n&&(k("ComponentProvider","Removing Datastore"),Hc.delete(e),n.terminate())}(this),Promise.resolve()}}function dv(t,e,n,s={}){var i;const r=(t=dt(t,rr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&eo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ne.MOCK_USER;else{o=Pl(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new S(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ne(c)}t._authCredentials=new xg(new Hu(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}}class Ut{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ut(this.firestore,e,this._query)}}class Nt extends Ut{constructor(e,n,s){super(e,n,ra(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new D(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function Ct(t,e,...n){if(t=ot(t),Wh("collection","path",e),t instanceof rr){const s=oe.fromString(e,...n);return zc(s),new Nt(t,null,s)}{if(!(t instanceof He||t instanceof Nt))throw new S(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return zc(s),new Nt(t.firestore,null,s)}}function Ln(t,e,...n){if(t=ot(t),arguments.length===1&&(e=Ku.R()),Wh("doc","path",e),t instanceof rr){const s=oe.fromString(e,...n);return Kc(s),new He(t,null,new D(s))}{if(!(t instanceof He||t instanceof Nt))throw new S(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(oe.fromString(e,...n));return Kc(s),new He(t.firestore,t instanceof Nt?t.converter:null,new D(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new kh(this,"async_queue_retry"),this.Hc=()=>{const n=Pr();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Pr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Pr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Dt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!xs(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Et("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=ma.createAndSchedule(this,e,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&R()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Wc(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class tn extends rr{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new fv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qh(this),this._firestoreClient.terminate()}}function pv(t,e){const n=typeof t=="object"?t:Vl(),s=typeof t=="string"?t:e||"(default)",i=xl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Nl("firestore");r&&dv(i,...r)}return i}function ba(t){return t._firestoreClient||Qh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Qh(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new Qg(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new rv(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mn(xe.fromBase64String(e))}catch(n){throw new S(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mn(xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=/^__.*__$/;class mv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fs(e,this.data,n,this.fieldTransforms)}}class Yh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Vt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class Ta{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ai(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Xh(this.ra)&&gv.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class yv{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||tr(e)}wa(e,n,s,i=!1){return new Ta({ra:e,methodName:n,_a:s,path:Oe.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Ca(t){const e=t._freezeSettings(),n=tr(t._databaseId);return new yv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vv(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Ia("Data must be an object, but it was:",o,s);const a=Jh(s,o);let c,l;if(r.merge)c=new Qe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=go(e,h,n);if(!o.contains(d))throw new S(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ed(u,d)||u.push(d)}c=new Qe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mv(new qe(a),c,l)}class ar extends Ea{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ar}}function wv(t,e,n,s){const i=t.wa(1,e,n);Ia("Data must be an object, but it was:",i,s);const r=[],o=qe.empty();cn(s,(c,l)=>{const u=Sa(e,c,n);l=ot(l);const h=i.ha(u);if(l instanceof ar)r.push(u);else{const d=$s(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Qe(r);return new Yh(o,a,i.fieldTransforms)}function bv(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[go(e,s,n)],c=[i];if(r.length%2!=0)throw new S(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(go(e,r[d])),c.push(r[d+1]);const l=[],u=qe.empty();for(let d=a.length-1;d>=0;--d)if(!ed(l,a[d])){const p=a[d];let y=c[d];y=ot(y);const E=o.ha(p);if(y instanceof ar)l.push(p);else{const w=$s(y,E);w!=null&&(l.push(p),u.set(p,w))}}const h=new Qe(l);return new Yh(u,h,o.fieldTransforms)}function Ev(t,e,n,s=!1){return $s(n,t.wa(s?4:3,e))}function $s(t,e){if(Zh(t=ot(t)))return Ia("Unsupported field value:",e,t),Jh(t,e);if(t instanceof Ea)return function(n,s){if(!Xh(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=$s(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ot(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fm(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ye.fromDate(n);return{timestampValue:Ii(s.Tt,i)}}if(n instanceof ye){const i=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ii(s.Tt,i)}}if(n instanceof _a)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Mn)return{bytesValue:bh(s.Tt,n._byteString)};if(n instanceof He){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ca(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ir(n)}`)}(t,e)}function Jh(t,e){const n={};return zu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(t,(s,i)=>{const r=$s(i,e.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Zh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof _a||t instanceof Mn||t instanceof He||t instanceof Ea)}function Ia(t,e,n){if(!Zh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ir(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function go(t,e,n){if((e=ot(e))instanceof or)return e._internalPath;if(typeof e=="string")return Sa(t,e);throw Ai("Field path arguments must be of type string or ",t,!1,void 0,n)}const _v=new RegExp("[~\\*/\\[\\]]");function Sa(t,e,n){if(e.search(_v)>=0)throw Ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new or(...e.split("."))._internalPath}catch{throw Ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ai(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new S(m.INVALID_ARGUMENT,a+t+c)}function ed(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Tv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Tv extends td{data(){return super.data()}}function cr(t,e){return typeof e=="string"?Sa(t,e):e instanceof or?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aa{}class sd extends Aa{}function rs(t,e,...n){let s=[];e instanceof Aa&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof ka).length,o=i.filter(a=>a instanceof lr).length;if(r>1||r>0&&o>0)throw new S(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class lr extends sd{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new lr(e,n,s)}_apply(e){const n=this._parse(e);return id(e._query,n),new Ut(e.firestore,e.converter,ro(e._query,n))}_parse(e){const n=Ca(e.firestore);return function(i,r,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new S(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Yc(u,l);const d=[];for(const p of u)d.push(Qc(a,i,p));h={arrayValue:{values:d}}}else h=Qc(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Yc(u,l),h=Ev(o,r,u,l==="in"||l==="not-in");return fe.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mo(t,e,n){const s=e,i=cr("where",t);return lr._create(i,s,n)}class ka extends Aa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ka(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:at.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)id(r,a),r=ro(r,a)}(e._query,n),new Ut(e.firestore,e.converter,ro(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Da extends sd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Da(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new S(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new S(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vn(i,r);return function(a,c){if(oa(a)===null){const l=Qi(a);l!==null&&rd(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ut(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new jn(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function yo(t,e="asc"){const n=e,s=cr("orderBy",t);return Da._create(s,n)}function Qc(t,e,n){if(typeof(n=ot(n))=="string"){if(n==="")throw new S(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nh(e)&&n.indexOf("/")!==-1)throw new S(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(oe.fromString(n));if(!D.isDocumentKey(s))throw new S(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ec(t,new D(s))}if(n instanceof He)return Ec(t,n._key);throw new S(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ir(n)}.`)}function Yc(t,e){if(!Array.isArray(t)||t.length===0)throw new S(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function id(t,e){if(e.isInequality()){const s=Qi(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new S(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=oa(t);r!==null&&rd(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rd(t,e,n){if(!n.isEqual(e))throw new S(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Cv{convertValue(e,n="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw R()}}convertObject(e,n){const s={};return cn(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new _a(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Wu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ws(e));default:return null}}convertTimestamp(e){const n=Lt(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=oe.fromString(e);re(Ih(s));const i=new vs(s.get(1),s.get(3)),r=new D(s.popFirst(5));return i.isEqual(n)||Et(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class od extends td{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ci(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ci extends od{data(e={}){return super.data(e)}}class ad{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ci(this._firestore,this._userDataWriter,s.key,s,new Zn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ci(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ci(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Zn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:Sv(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Sv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}class Na extends Cv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function vo(t){t=dt(t,Ut);const e=dt(t.firestore,tn),n=ba(e),s=new Na(e);return nd(t._query),uv(n,t._query).then(i=>new ad(e,s,t,i))}function Pa(t,e,n,...s){t=dt(t,He);const i=dt(t.firestore,tn),r=Ca(i);let o;return o=typeof(e=ot(e))=="string"||e instanceof or?bv(r,"updateDoc",t._key,e,n,s):wv(r,"updateDoc",t._key,e),Oa(i,[o.toMutation(t._key,rt.exists(!0))])}function wo(t){return Oa(dt(t.firestore,tn),[new aa(t._key,rt.none())])}function cd(t,e){const n=dt(t.firestore,tn),s=Ln(t),i=Iv(t.converter,e);return Oa(n,[vv(Ca(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,rt.exists(!1))]).then(()=>s)}function bo(t,...e){var n,s,i;t=ot(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wc(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Wc(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof He)l=dt(t.firestore,tn),u=ra(t._key.path),c={next:h=>{e[o]&&e[o](Av(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=dt(t,Ut);l=dt(h.firestore,tn),u=h._query;const d=new Na(l);c={next:p=>{e[o]&&e[o](new ad(l,d,h,p))},error:e[o+1],complete:e[o+2]},nd(t._query)}return function(h,d,p,y){const E=new zh(y),w=new Vh(d,E,p);return h.asyncQueue.enqueueAndForget(async()=>Fh(await po(h),w)),()=>{E.Pc(),h.asyncQueue.enqueueAndForget(async()=>Bh(await po(h),w))}}(ba(l),u,a,c)}function Oa(t,e){return function(n,s){const i=new Dt;return n.asyncQueue.enqueueAndForget(async()=>Wy(await lv(n),s,i)),i.promise}(ba(t),e)}function Av(t,e,n){const s=n.docs.get(e._key),i=new Na(t);return new od(t,i,e._key,s,new Zn(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){$n=n})(Fl),us(new Sn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new tn(new Fg(n.getProvider("auth-internal")),new $g(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),kt(yc,"3.8.4",t),kt(yc,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="firebasestorage.googleapis.com",kv="storageBucket",Dv=2*60*1e3,Nv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends on{constructor(e,n,s=0){super(Or(e),`Firebase Storage: ${n} (${Or(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Or(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pt||(pt={}));function Or(t){return"storage/"+t}function Pv(){const t="An unknown error occurred, please check the error payload for server response.";return new mt(pt.UNKNOWN,t)}function Ov(){return new mt(pt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rv(){return new mt(pt.CANCELED,"User canceled the upload/download.")}function Lv(t){return new mt(pt.INVALID_URL,"Invalid URL '"+t+"'.")}function Mv(t){return new mt(pt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Xc(t){return new mt(pt.INVALID_ARGUMENT,t)}function ud(){return new mt(pt.APP_DELETED,"The Firebase app was deleted.")}function xv(t){return new mt(pt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(s.path==="")return s;throw Mv(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},E=n===ld?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",N=new RegExp(`^https?://${E}/${i}/${w}`,"i"),M=[{regex:a,indices:c,postModify:r},{regex:p,indices:y,postModify:l},{regex:N,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<M.length;O++){const F=M[O],G=F.regex.exec(e);if(G){const W=G[F.indices.bucket];let U=G[F.indices.path];U||(U=""),s=new it(W,U),F.postModify(s);break}}if(s==null)throw Lv(e);return s}}class Fv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,c())},w)}function d(){r&&clearTimeout(r)}function p(w,...N){if(l){d();return}if(w){d(),u.call(null,w,...N);return}if(c()||o){d(),u.call(null,w,...N);return}s<64&&(s*=2);let M;a===1?(a=2,M=0):M=(s+Math.random())*1e3,h(M)}let y=!1;function E(w){y||(y=!0,d(),!l&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,E(!0)},n),E}function Vv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){return t!==void 0}function Jc(t,e,n,s){if(s<e)throw Xc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Xc(`Invalid value for '${t}'. Expected ${n} or less.`)}function $v(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ki||(ki={}));/**
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
 */function jv(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n,s,i,r,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ni(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ki.NO_ERROR,c=r.getStatus();if(!a||jv(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ki.ABORT;s(!1,new ni(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new ni(l,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Uv(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Pv();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ud():Rv();o(c)}else{const c=Ov();o(c)}};this.canceled_?n(!1,new ni(!1,null,!0)):this.backoffId_=Bv(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ni{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function Hv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Kv(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zv(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Gv(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Wv(t,e,n,s,i,r,o=!0){const a=$v(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return zv(l,e),Hv(l,n),Kv(l,r),Gv(l,s),new qv(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Yv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Di{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Di(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yv(this._location.path)}get storage(){return this._service}get parent(){const e=Qv(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new Di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xv(e)}}function Zc(t,e){const n=e==null?void 0:e[kv];return n==null?null:it.makeFromBucketSpec(n,t)}function Xv(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Pl(i,t.app.options.projectId))}class Jv{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=ld,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dv,this._maxUploadRetryTime=Nv,this._requests=new Set,i!=null?this._bucket=it.makeFromBucketSpec(i,this._host):this._bucket=Zc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=Zc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Di(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Fv(ud());{const o=Wv(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const el="@firebase/storage",tl="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="storage";function Zv(t=Vl(),e){t=ot(t);const s=xl(t,hd).getImmediate({identifier:e}),i=Nl("storage");return i&&ew(s,...i),s}function ew(t,e,n,s={}){Xv(t,e,n,s)}function tw(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Jv(n,s,i,e,Fl)}function nw(){us(new Sn(hd,tw,"PUBLIC").setMultipleInstances(!0)),kt(el,tl,""),kt(el,tl,"esm2017")}nw();const sw={apiKey:"AIzaSyDuGOTHz4qCZA1bbNNmmKi39HhEz9nXgnY",authDomain:"db-pacientes.firebaseapp.com",projectId:"db-pacientes",storageBucket:"db-pacientes.appspot.com",messagingSenderId:"404316742828",appId:"1:404316742828:web:9316fea39b46abfcd4ab09"},dd=Bl(sw);Zv(dd);const We=pv(dd);var iw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Eo={},rw={get exports(){return Eo},set exports(t){Eo=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(iw,function(e){var n=function(o){return new n.lib.init(o)},s="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:s,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",function(w){w.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var d=i("x",this.options),p=i("y",this.options),y=this.options.position=="left"?d:"-"+d,E=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+y+","+E+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){r(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):r(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function i(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function r(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(rw);const En=Eo,fd="SweetAlert2:",ow=t=>{const e=[];for(let n=0;n<t.length;n++)e.indexOf(t[n])===-1&&e.push(t[n]);return e},Ra=t=>t.charAt(0).toUpperCase()+t.slice(1),Je=t=>Array.prototype.slice.call(t),Ke=t=>{console.warn(`${fd} ${typeof t=="object"?t.join(" "):t}`)},un=t=>{console.error(`${fd} ${t}`)},nl=[],aw=t=>{nl.includes(t)||(nl.push(t),Ke(t))},cw=(t,e)=>{aw(`"${t}" is deprecated and will be removed in the next major release. Please use "${e}" instead.`)},ur=t=>typeof t=="function"?t():t,La=t=>t&&typeof t.toPromise=="function",js=t=>La(t)?t.toPromise():Promise.resolve(t),Ma=t=>t&&Promise.resolve(t)===t,_n={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},lw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],uw={},hw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],pd=t=>Object.prototype.hasOwnProperty.call(_n,t),gd=t=>lw.indexOf(t)!==-1,_o=t=>uw[t],dw=t=>{pd(t)||Ke(`Unknown parameter "${t}"`)},fw=t=>{hw.includes(t)&&Ke(`The parameter "${t}" is incompatible with toasts`)},pw=t=>{_o(t)&&cw(t,_o(t))},gw=t=>{!t.backdrop&&t.allowOutsideClick&&Ke('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)dw(e),t.toast&&fw(e),pw(e)},mw="swal2-",md=t=>{const e={};for(const n in t)e[t[n]]=mw+t[n];return e},f=md(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),os=md(["success","warning","info","question","error"]),Fe=()=>document.body.querySelector(`.${f.container}`),qs=t=>{const e=Fe();return e?e.querySelector(t):null},nt=t=>qs(`.${t}`),Z=()=>nt(f.popup),Hs=()=>nt(f.icon),yd=()=>nt(f.title),Ni=()=>nt(f["html-container"]),vd=()=>nt(f.image),wd=()=>nt(f["progress-steps"]),hr=()=>nt(f["validation-message"]),ct=()=>qs(`.${f.actions} .${f.confirm}`),xt=()=>qs(`.${f.actions} .${f.deny}`),yw=()=>nt(f["input-label"]),Kn=()=>qs(`.${f.loader}`),nn=()=>qs(`.${f.actions} .${f.cancel}`),Ks=()=>nt(f.actions),bd=()=>nt(f.footer),dr=()=>nt(f["timer-progress-bar"]),xa=()=>nt(f.close),vw=`
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
`,Fa=()=>{const t=Je(Z().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((n,s)=>{const i=parseInt(n.getAttribute("tabindex")),r=parseInt(s.getAttribute("tabindex"));return i>r?1:i<r?-1:0}),e=Je(Z().querySelectorAll(vw)).filter(n=>n.getAttribute("tabindex")!=="-1");return ow(t.concat(e)).filter(n=>Ye(n))},Ba=()=>wt(document.body,f.shown)&&!wt(document.body,f["toast-shown"])&&!wt(document.body,f["no-backdrop"]),fr=()=>Z()&&wt(Z(),f.toast),ww=()=>Z().hasAttribute("data-loading"),Tn={previousBodyPadding:null},Re=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html");Je(s.querySelector("head").childNodes).forEach(i=>{t.appendChild(i)}),Je(s.querySelector("body").childNodes).forEach(i=>{t.appendChild(i)})}},wt=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},bw=(t,e)=>{Je(t.classList).forEach(n=>{!Object.values(f).includes(n)&&!Object.values(os).includes(n)&&!Object.values(e.showClass).includes(n)&&t.classList.remove(n)})},tt=(t,e,n)=>{if(bw(t,e),e.customClass&&e.customClass[n]){if(typeof e.customClass[n]!="string"&&!e.customClass[n].forEach)return Ke(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof e.customClass[n]}"`);z(t,e.customClass[n])}},Va=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${f.popup} > .${f[e]}`);case"checkbox":return t.querySelector(`.${f.popup} > .${f.checkbox} input`);case"radio":return t.querySelector(`.${f.popup} > .${f.radio} input:checked`)||t.querySelector(`.${f.popup} > .${f.radio} input:first-child`);case"range":return t.querySelector(`.${f.popup} > .${f.range} input`);default:return t.querySelector(`.${f.popup} > .${f.input}`)}},Ed=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},_d=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},z=(t,e)=>{_d(t,e,!0)},gt=(t,e)=>{_d(t,e,!1)},It=(t,e)=>{const n=Je(t.childNodes);for(let s=0;s<n.length;s++)if(wt(n[s],e))return n[s]},as=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style[e]=typeof n=="number"?`${n}px`:n:t.style.removeProperty(e)},Ae=(t,e="flex")=>{t.style.display=e},Be=t=>{t.style.display="none"},sl=(t,e,n,s)=>{const i=t.querySelector(e);i&&(i.style[n]=s)},pr=(t,e,n)=>{e?Ae(t,n):Be(t)},Ye=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Ew=()=>!Ye(ct())&&!Ye(xt())&&!Ye(nn()),il=t=>t.scrollHeight>t.clientHeight,Td=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Ua=(t,e=!1)=>{const n=dr();Ye(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},_w=()=>{const t=dr(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.removeProperty("transition"),t.style.width=`${s}%`},Cd=()=>typeof window>"u"||typeof document>"u",Tw=100,V={},Cw=()=>{V.previousActiveElement&&V.previousActiveElement.focus?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},Iw=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{Cw(),e()},Tw),window.scrollTo(n,s)}),Sw=`
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
`.replace(/(^|\n)\s*/g,""),Aw=()=>{const t=Fe();return t?(t.remove(),gt([document.documentElement,document.body],[f["no-backdrop"],f["toast-shown"],f["has-column"]]),!0):!1},$t=()=>{V.currentInstance.resetValidationMessage()},kw=()=>{const t=Z(),e=It(t,f.input),n=It(t,f.file),s=t.querySelector(`.${f.range} input`),i=t.querySelector(`.${f.range} output`),r=It(t,f.select),o=t.querySelector(`.${f.checkbox} input`),a=It(t,f.textarea);e.oninput=$t,n.onchange=$t,r.onchange=$t,o.onchange=$t,a.oninput=$t,s.oninput=()=>{$t(),i.value=s.value},s.onchange=()=>{$t(),s.nextSibling.value=s.value}},Dw=t=>typeof t=="string"?document.querySelector(t):t,Nw=t=>{const e=Z();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Pw=t=>{window.getComputedStyle(t).direction==="rtl"&&z(Fe(),f.rtl)},Ow=t=>{const e=Aw();if(Cd()){un("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=f.container,e&&z(n,f["no-transition"]),Re(n,Sw);const s=Dw(t.target);s.appendChild(n),Nw(t),Pw(s),kw()},$a=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Rw(t,e):t&&Re(e,t)},Rw=(t,e)=>{t.jquery?Lw(e,t):Re(e,t.toString())},Lw=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ts=(()=>{if(Cd())return!1;const t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&typeof t.style[n]<"u")return e[n];return!1})(),Mw=()=>{const t=document.createElement("div");t.className=f["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},xw=(t,e)=>{const n=Ks(),s=Kn();!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Be(n):Ae(n),tt(n,e,"actions"),Fw(n,s,e),Re(s,e.loaderHtml),tt(s,e,"loader")};function Fw(t,e,n){const s=ct(),i=xt(),r=nn();Rr(s,"confirm",n),Rr(i,"deny",n),Rr(r,"cancel",n),Bw(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e)))}function Bw(t,e,n,s){if(!s.buttonsStyling)return gt([t,e,n],f.styled);z([t,e,n],f.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,z(t,f["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,z(e,f["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,z(n,f["default-outline"]))}function Rr(t,e,n){pr(t,n[`show${Ra(e)}Button`],"inline-block"),Re(t,n[`${e}ButtonText`]),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]),t.className=f[e],tt(t,n,`${e}Button`),z(t,n[`${e}ButtonClass`])}function Vw(t,e){typeof e=="string"?t.style.background=e:e||z([document.documentElement,document.body],f["no-backdrop"])}function Uw(t,e){e in f?z(t,f[e]):(Ke('The "position" parameter is not valid, defaulting to "center"'),z(t,f.center))}function $w(t,e){if(e&&typeof e=="string"){const n=`grow-${e}`;n in f&&z(t,f[n])}}const jw=(t,e)=>{const n=Fe();n&&(Vw(n,e.backdrop),Uw(n,e.position),$w(n,e.grow),tt(n,e,"container"))},$={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},qw=["input","file","range","select","radio","checkbox","textarea"],Hw=(t,e)=>{const n=Z(),s=$.innerParams.get(t),i=!s||e.input!==s.input;qw.forEach(r=>{const o=f[r],a=It(n,o);Gw(r,e.inputAttributes),a.className=o,i&&Be(a)}),e.input&&(i&&Kw(e),Ww(e))},Kw=t=>{if(!je[t.input])return un(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${t.input}"`);const e=Id(t.input),n=je[t.input](e,t);Ae(n),setTimeout(()=>{Ed(n)})},zw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Gw=(t,e)=>{const n=Va(Z(),t);if(n){zw(n);for(const s in e)n.setAttribute(s,e[s])}},Ww=t=>{const e=Id(t.input);t.customClass&&z(e,t.customClass.input)},ja=(t,e)=>{(!t.placeholder||e.inputPlaceholder)&&(t.placeholder=e.inputPlaceholder)},zs=(t,e,n)=>{if(n.inputLabel){t.id=f.input;const s=document.createElement("label"),i=f["input-label"];s.setAttribute("for",t.id),s.className=i,z(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Id=t=>{const e=f[t]?f[t]:f.input;return It(Z(),e)},je={};je.text=je.email=je.password=je.number=je.tel=je.url=(t,e)=>(typeof e.inputValue=="string"||typeof e.inputValue=="number"?t.value=e.inputValue:Ma(e.inputValue)||Ke(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e.inputValue}"`),zs(t,t,e),ja(t,e),t.type=e.input,t);je.file=(t,e)=>(zs(t,t,e),ja(t,e),t);je.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,s.value=e.inputValue,zs(n,t,e),t};je.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Re(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return zs(t,t,e),t};je.radio=t=>(t.textContent="",t);je.checkbox=(t,e)=>{const n=Va(Z(),"checkbox");n.value="1",n.id=f.checkbox,n.checked=Boolean(e.inputValue);const s=t.querySelector("span");return Re(s,e.inputPlaceholder),t};je.textarea=(t,e)=>{t.value=e.inputValue,ja(t,e),zs(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(Z()).width),i=()=>{const r=t.offsetWidth+n(t);r>s?Z().style.width=`${r}px`:Z().style.width=null};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Qw=(t,e)=>{const n=Ni();tt(n,e,"htmlContainer"),e.html?($a(e.html,n),Ae(n,"block")):e.text?(n.textContent=e.text,Ae(n,"block")):Be(n),Hw(t,e)},Yw=(t,e)=>{const n=bd();pr(n,e.footer),e.footer&&$a(e.footer,n),tt(n,e,"footer")},Xw=(t,e)=>{const n=xa();Re(n,e.closeButtonHtml),tt(n,e,"closeButton"),pr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)},Jw=(t,e)=>{const n=$.innerParams.get(t),s=Hs();if(n&&e.icon===n.icon){ol(s,e),rl(s,e);return}if(!e.icon&&!e.iconHtml)return Be(s);if(e.icon&&Object.keys(os).indexOf(e.icon)===-1)return un(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Be(s);Ae(s),ol(s,e),rl(s,e),z(s,e.showClass.icon)},rl=(t,e)=>{for(const n in os)e.icon!==n&&gt(t,os[n]);z(t,os[e.icon]),nb(t,e),Zw(),tt(t,e,"icon")},Zw=()=>{const t=Z(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},eb=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,tb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ol=(t,e)=>{t.textContent="",e.iconHtml?Re(t,al(e.iconHtml)):e.icon==="success"?Re(t,eb):e.icon==="error"?Re(t,tb):Re(t,al({question:"?",warning:"!",info:"i"}[e.icon]))},nb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])sl(t,n,"backgroundColor",e.iconColor);sl(t,".swal2-success-ring","borderColor",e.iconColor)}},al=t=>`<div class="${f["icon-content"]}">${t}</div>`,sb=(t,e)=>{const n=vd();if(!e.imageUrl)return Be(n);Ae(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),as(n,"width",e.imageWidth),as(n,"height",e.imageHeight),n.className=f.image,tt(n,e,"image")},ib=t=>{const e=document.createElement("li");return z(e,f["progress-step"]),Re(e,t),e},rb=t=>{const e=document.createElement("li");return z(e,f["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e},ob=(t,e)=>{const n=wd();if(!e.progressSteps||e.progressSteps.length===0)return Be(n);Ae(n),n.textContent="",e.currentProgressStep>=e.progressSteps.length&&Ke("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((s,i)=>{const r=ib(s);if(n.appendChild(r),i===e.currentProgressStep&&z(r,f["active-progress-step"]),i!==e.progressSteps.length-1){const o=rb(e);n.appendChild(o)}})},ab=(t,e)=>{const n=yd();pr(n,e.title||e.titleText,"block"),e.title&&$a(e.title,n),e.titleText&&(n.innerText=e.titleText),tt(n,e,"title")},cb=(t,e)=>{const n=Fe(),s=Z();e.toast?(as(n,"width",e.width),s.style.width="100%",s.insertBefore(Kn(),Hs())):as(s,"width",e.width),as(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Be(hr()),lb(s,e)},lb=(t,e)=>{t.className=`${f.popup} ${Ye(t)?e.showClass.popup:""}`,e.toast?(z([document.documentElement,document.body],f["toast-shown"]),z(t,f.toast)):z(t,f.modal),tt(t,e,"popup"),typeof e.customClass=="string"&&z(t,e.customClass),e.icon&&z(t,f[`icon-${e.icon}`])},Sd=(t,e)=>{cb(t,e),jw(t,e),ob(t,e),Jw(t,e),sb(t,e),ab(t,e),Xw(t,e),Qw(t,e),xw(t,e),Yw(t,e),typeof e.didRender=="function"&&e.didRender(Z())},zn=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ub=()=>{Je(document.body.children).forEach(e=>{e===Fe()||e.contains(Fe())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},Ad=()=>{Je(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},kd=["swal-title","swal-html","swal-footer"],hb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return vb(n),Object.assign(db(n),fb(n),pb(n),gb(n),mb(n),yb(n,kd))},db=t=>{const e={};return Je(t.querySelectorAll("swal-param")).forEach(n=>{sn(n,["name","value"]);const s=n.getAttribute("name"),i=n.getAttribute("value");typeof _n[s]=="boolean"&&i==="false"&&(e[s]=!1),typeof _n[s]=="object"&&(e[s]=JSON.parse(i))}),e},fb=t=>{const e={};return Je(t.querySelectorAll("swal-button")).forEach(n=>{sn(n,["type","color","aria-label"]);const s=n.getAttribute("type");e[`${s}ButtonText`]=n.innerHTML,e[`show${Ra(s)}Button`]=!0,n.hasAttribute("color")&&(e[`${s}ButtonColor`]=n.getAttribute("color")),n.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=n.getAttribute("aria-label"))}),e},pb=t=>{const e={},n=t.querySelector("swal-image");return n&&(sn(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},gb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(sn(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},mb=t=>{const e={},n=t.querySelector("swal-input");n&&(sn(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=t.querySelectorAll("swal-input-option");return s.length&&(e.inputOptions={},Je(s).forEach(i=>{sn(i,["value"]);const r=i.getAttribute("value"),o=i.innerHTML;e.inputOptions[r]=o})),e},yb=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(sn(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},vb=t=>{const e=kd.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Je(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.indexOf(s)===-1&&Ke(`Unrecognized element <${s}>`)})},sn=(t,e)=>{Je(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Ke([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},cl={email:(t,e)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function wb(t){t.inputValidator||Object.keys(cl).forEach(e=>{t.input===e&&(t.inputValidator=cl[e])})}function bb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Ke('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Eb(t){wb(t),t.showLoaderOnConfirm&&!t.preConfirm&&Ke(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),bb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Ow(t)}class _b{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Tb=()=>{Tn.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Tn.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Tn.previousBodyPadding+Mw()}px`)},Cb=()=>{Tn.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Tn.previousBodyPadding}px`,Tn.previousBodyPadding=null)},Ib=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!wt(document.body,f.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,z(document.body,f.iosfix),Ab(),Sb()}},Sb=()=>{const t=navigator.userAgent,e=!!t.match(/iPad/i)||!!t.match(/iPhone/i),n=!!t.match(/WebKit/i);e&&n&&!t.match(/CriOS/i)&&Z().scrollHeight>window.innerHeight-44&&(Fe().style.paddingBottom=`${44}px`)},Ab=()=>{const t=Fe();let e;t.ontouchstart=n=>{e=kb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},kb=t=>{const e=t.target,n=Fe();return Db(t)||Nb(t)?!1:e===n||!il(n)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(il(Ni())&&Ni().contains(e))},Db=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Nb=t=>t.touches&&t.touches.length>1,Pb=()=>{if(wt(document.body,f.iosfix)){const t=parseInt(document.body.style.top,10);gt(document.body,f.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Dd=10,Ob=t=>{const e=Fe(),n=Z();typeof t.willOpen=="function"&&t.willOpen(n);const i=window.getComputedStyle(document.body).overflowY;Mb(e,n,t),setTimeout(()=>{Rb(e,n)},Dd),Ba()&&(Lb(e,t.scrollbarPadding,i),ub()),!fr()&&!V.previousActiveElement&&(V.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),gt(e,f["no-transition"])},Nd=t=>{const e=Z();if(t.target!==e)return;const n=Fe();e.removeEventListener(Ts,Nd),n.style.overflowY="auto"},Rb=(t,e)=>{Ts&&Td(e)?(t.style.overflowY="hidden",e.addEventListener(Ts,Nd)):t.style.overflowY="auto"},Lb=(t,e,n)=>{Ib(),e&&n!=="hidden"&&Tb(),setTimeout(()=>{t.scrollTop=0})},Mb=(t,e,n)=>{z(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),Ae(e,"grid"),setTimeout(()=>{z(e,n.showClass.popup),e.style.removeProperty("opacity")},Dd),z([document.documentElement,document.body],f.shown),n.heightAuto&&n.backdrop&&!n.toast&&z([document.documentElement,document.body],f["height-auto"])},xn=t=>{let e=Z();e||new Is,e=Z();const n=Kn();fr()?Be(Hs()):xb(e,t),Ae(n),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},xb=(t,e)=>{const n=Ks(),s=Kn();!e&&Ye(ct())&&(e=ct()),Ae(n),e&&(Be(e),s.setAttribute("data-button-to-replace",e.className)),s.parentNode.insertBefore(s,e),z([t,n],f.loading)},Fb=(t,e)=>{e.input==="select"||e.input==="radio"?jb(t,e):["text","email","number","tel","textarea"].includes(e.input)&&(La(e.inputValue)||Ma(e.inputValue))&&(xn(ct()),qb(t,e))},Bb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Vb(n);case"radio":return Ub(n);case"file":return $b(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Vb=t=>t.checked?1:0,Ub=t=>t.checked?t.value:null,$b=t=>t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,jb=(t,e)=>{const n=Z(),s=i=>Hb[e.input](n,To(i),e);La(e.inputOptions)||Ma(e.inputOptions)?(xn(ct()),js(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):un(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},qb=(t,e)=>{const n=t.getInput();Be(n),js(e.inputValue).then(s=>{n.value=e.input==="number"?parseFloat(s)||0:`${s}`,Ae(n),n.focus(),t.hideLoading()}).catch(s=>{un(`Error in inputValue promise: ${s}`),n.value="",Ae(n),n.focus(),t.hideLoading()})},Hb={select:(t,e,n)=>{const s=It(t,f.select),i=(r,o,a)=>{const c=document.createElement("option");c.value=a,Re(c,o),c.selected=ll(a,n.inputValue),r.appendChild(c)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,s.appendChild(c),a.forEach(l=>i(c,l[1],l[0]))}else i(s,a,o)}),s.focus()},radio:(t,e,n)=>{const s=It(t,f.radio);e.forEach(r=>{const o=r[0],a=r[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=f.radio,c.value=o,ll(o,n.inputValue)&&(c.checked=!0);const u=document.createElement("span");Re(u,a),u.className=f.label,l.appendChild(c),l.appendChild(u),s.appendChild(l)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}},To=t=>{const e=[];return typeof Map<"u"&&t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=To(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=To(s)),e.push([n,s])}),e},ll=(t,e)=>e&&e.toString()===t.toString();function ul(){const t=$.innerParams.get(this);if(!t)return;const e=$.domCache.get(this);Be(e.loader),fr()?t.icon&&Ae(Hs()):Kb(e),gt([e.popup,e.actions],f.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Kb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Ae(e[0],"inline-block"):Ew()&&Be(t.actions)};function zb(t){const e=$.innerParams.get(t||this),n=$.domCache.get(t||this);return n?Va(n.popup,e.input):null}const Cs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap},Gb=()=>Ye(Z()),Pd=()=>ct()&&ct().click(),Wb=()=>xt()&&xt().click(),Qb=()=>nn()&&nn().click(),Od=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Yb=(t,e,n,s)=>{Od(e),n.toast||(e.keydownHandler=i=>Jb(t,i,s),e.keydownTarget=n.keydownListenerCapture?window:Z(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Co=(t,e,n)=>{const s=Fa();if(s.length)return e=e+n,e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();Z().focus()},Rd=["ArrowRight","ArrowDown"],Xb=["ArrowLeft","ArrowUp"],Jb=(t,e,n)=>{const s=$.innerParams.get(t);s&&(e.isComposing||e.keyCode===229||(s.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Zb(t,e,s):e.key==="Tab"?e0(e,s):[...Rd,...Xb].includes(e.key)?t0(e.key):e.key==="Escape"&&n0(e,s,n)))},Zb=(t,e,n)=>{if(ur(n.allowEnterKey)&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(["textarea","file"].includes(n.input))return;Pd(),e.preventDefault()}},e0=(t,e)=>{const n=t.target,s=Fa();let i=-1;for(let r=0;r<s.length;r++)if(n===s[r]){i=r;break}t.shiftKey?Co(e,i,-1):Co(e,i,1),t.stopPropagation(),t.preventDefault()},t0=t=>{const e=ct(),n=xt(),s=nn();if(![e,n,s].includes(document.activeElement))return;const i=Rd.includes(t)?"nextElementSibling":"previousElementSibling";let r=document.activeElement;for(let o=0;o<Ks().children.length;o++){if(r=r[i],!r)return;if(Ye(r)&&r instanceof HTMLButtonElement)break}r instanceof HTMLButtonElement&&r.focus()},n0=(t,e,n)=>{ur(e.allowEscapeKey)&&(t.preventDefault(),n(zn.esc))};function Ld(t,e,n,s){fr()?hl(t,s):(Iw(n).then(()=>hl(t,s)),Od(V)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Ba()&&(Cb(),Pb(),Ad()),s0()}function s0(){gt([document.documentElement,document.body],[f.shown,f["height-auto"],f["no-backdrop"],f["toast-shown"]])}function si(t){t=a0(t);const e=Cs.swalPromiseResolve.get(this),n=r0(this);this.isAwaitingPromise()?t.isDismissed||(Gs(this),e(t)):n&&e(t)}function i0(){return!!$.awaitingPromise.get(this)}const r0=t=>{const e=Z();if(!e)return!1;const n=$.innerParams.get(t);if(!n||wt(e,n.hideClass.popup))return!1;gt(e,n.showClass.popup),z(e,n.hideClass.popup);const s=Fe();return gt(s,n.showClass.backdrop),z(s,n.hideClass.backdrop),c0(t,e,n),!0};function o0(t){const e=Cs.swalPromiseReject.get(this);Gs(this),e&&e(t)}const Gs=t=>{t.isAwaitingPromise()&&($.awaitingPromise.delete(t),$.innerParams.get(t)||t._destroy())},a0=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),c0=(t,e,n)=>{const s=Fe(),i=Ts&&Td(e);typeof n.willClose=="function"&&n.willClose(e),i?l0(t,e,s,n.returnFocus,n.didClose):Ld(t,s,n.returnFocus,n.didClose)},l0=(t,e,n,s,i)=>{V.swalCloseEventFinishedCallback=Ld.bind(null,t,n,s,i),e.addEventListener(Ts,function(r){r.target===e&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback)})},hl=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),t._destroy()})};function Md(t,e,n){const s=$.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function xd(t,e){if(!t)return!1;if(t.type==="radio"){const s=t.parentNode.parentNode.querySelectorAll("input");for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function u0(){Md(this,["confirmButton","denyButton","cancelButton"],!1)}function h0(){Md(this,["confirmButton","denyButton","cancelButton"],!0)}function d0(){return xd(this.getInput(),!1)}function f0(){return xd(this.getInput(),!0)}function p0(t){const e=$.domCache.get(this),n=$.innerParams.get(this);Re(e.validationMessage,t),e.validationMessage.className=f["validation-message"],n.customClass&&n.customClass.validationMessage&&z(e.validationMessage,n.customClass.validationMessage),Ae(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid",!0),s.setAttribute("aria-describedby",f["validation-message"]),Ed(s),z(s,f.inputerror))}function g0(){const t=$.domCache.get(this);t.validationMessage&&Be(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),gt(e,f.inputerror))}function m0(){return $.domCache.get(this).progressSteps}function y0(t){const e=Z(),n=$.innerParams.get(this);if(!e||wt(e,n.hideClass.popup))return Ke("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const s=v0(t),i=Object.assign({},n,s);Sd(this,i),$.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const v0=t=>{const e={};return Object.keys(t).forEach(n=>{gd(n)?e[n]=t[n]:Ke(`Invalid parameter to update: "${n}". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`)}),e};function w0(){const t=$.domCache.get(this),e=$.innerParams.get(this);if(!e){Fd(this);return}t.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),V.deferDisposalTimer&&(clearTimeout(V.deferDisposalTimer),delete V.deferDisposalTimer),typeof e.didDestroy=="function"&&e.didDestroy(),b0(this)}const b0=t=>{Fd(t),delete t.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},Fd=t=>{t.isAwaitingPromise()?(Lr($,t),$.awaitingPromise.set(t,!0)):(Lr(Cs,t),Lr($,t))},Lr=(t,e)=>{for(const n in t)t[n].delete(e)},Bd=Object.freeze(Object.defineProperty({__proto__:null,_destroy:w0,close:si,closeModal:si,closePopup:si,closeToast:si,disableButtons:h0,disableInput:f0,disableLoading:ul,enableButtons:u0,enableInput:d0,getInput:zb,getProgressSteps:m0,handleAwaitingPromise:Gs,hideLoading:ul,isAwaitingPromise:i0,rejectPromise:o0,resetValidationMessage:g0,showValidationMessage:p0,update:y0},Symbol.toStringTag,{value:"Module"})),E0=t=>{const e=$.innerParams.get(t);t.disableButtons(),e.input?Vd(t,"confirm"):Ha(t,!0)},_0=t=>{const e=$.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Vd(t,"deny"):qa(t,!1)},T0=(t,e)=>{t.disableButtons(),e(zn.cancel)},Vd=(t,e)=>{const n=$.innerParams.get(t);if(!n.input)return un(`The "input" parameter is needed to be set when using returnInputValueOn${Ra(e)}`);const s=Bb(t,n);n.inputValidator?C0(t,s,e):t.getInput().checkValidity()?e==="deny"?qa(t,s):Ha(t,s):(t.enableButtons(),t.showValidationMessage(n.validationMessage))},C0=(t,e,n)=>{const s=$.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>js(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?qa(t,e):Ha(t,e)})},qa=(t,e)=>{const n=$.innerParams.get(t||globalThis);n.showLoaderOnDeny&&xn(xt()),n.preDeny?($.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>js(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Gs(t)):t.closePopup({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Ud(t||globalThis,i))):t.closePopup({isDenied:!0,value:e})},dl=(t,e)=>{t.closePopup({isConfirmed:!0,value:e})},Ud=(t,e)=>{t.rejectPromise(e)},Ha=(t,e)=>{const n=$.innerParams.get(t||globalThis);n.showLoaderOnConfirm&&xn(),n.preConfirm?(t.resetValidationMessage(),$.awaitingPromise.set(t||globalThis,!0),Promise.resolve().then(()=>js(n.preConfirm(e,n.validationMessage))).then(i=>{Ye(hr())||i===!1?(t.hideLoading(),Gs(t)):dl(t,typeof i>"u"?e:i)}).catch(i=>Ud(t||globalThis,i))):dl(t,e)},I0=(t,e,n)=>{$.innerParams.get(t).toast?S0(t,e,n):(k0(e),D0(e),N0(t,e,n))},S0=(t,e,n)=>{e.popup.onclick=()=>{const s=$.innerParams.get(t);s&&(A0(s)||s.timer||s.input)||n(zn.close)}},A0=t=>t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton;let Pi=!1;const k0=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Pi=!0)}}},D0=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(Pi=!0)}}},N0=(t,e,n)=>{e.container.onclick=s=>{const i=$.innerParams.get(t);if(Pi){Pi=!1;return}s.target===e.container&&ur(i.allowOutsideClick)&&n(zn.backdrop)}},P0=t=>typeof t=="object"&&t.jquery,fl=t=>t instanceof Element||P0(t),O0=t=>{const e={};return typeof t[0]=="object"&&!fl(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||fl(i)?e[n]=i:i!==void 0&&un(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function R0(...t){const e=this;return new e(...t)}function L0(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const M0=()=>V.timeout&&V.timeout.getTimerLeft(),$d=()=>{if(V.timeout)return _w(),V.timeout.stop()},jd=()=>{if(V.timeout){const t=V.timeout.start();return Ua(t),t}},x0=()=>{const t=V.timeout;return t&&(t.running?$d():jd())},F0=t=>{if(V.timeout){const e=V.timeout.increase(t);return Ua(e,!0),e}},B0=()=>V.timeout&&V.timeout.isRunning();let pl=!1;const Io={};function V0(t="data-swal-template"){Io[t]=this,pl||(document.body.addEventListener("click",U0),pl=!0)}const U0=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Io){const s=e.getAttribute(n);if(s){Io[n].fire({template:s});return}}},$0=Object.freeze(Object.defineProperty({__proto__:null,argsToParams:O0,bindClickHandler:V0,clickCancel:Qb,clickConfirm:Pd,clickDeny:Wb,enableLoading:xn,fire:R0,getActions:Ks,getCancelButton:nn,getCloseButton:xa,getConfirmButton:ct,getContainer:Fe,getDenyButton:xt,getFocusableElements:Fa,getFooter:bd,getHtmlContainer:Ni,getIcon:Hs,getImage:vd,getInputLabel:yw,getLoader:Kn,getPopup:Z,getTimerLeft:M0,getTimerProgressBar:dr,getTitle:yd,getValidationMessage:hr,increaseTimer:F0,isDeprecatedParameter:_o,isLoading:ww,isTimerRunning:B0,isUpdatableParameter:gd,isValidParameter:pd,isVisible:Gb,mixin:L0,resumeTimer:jd,showLoading:xn,stopTimer:$d,toggleTimer:x0},Symbol.toStringTag,{value:"Module"}));let So;class Gn{constructor(...e){if(typeof window>"u")return;So=this;const n=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:n,writable:!1,enumerable:!0,configurable:!0}});const s=this._main(this.params);$.promise.set(this,s)}_main(e,n={}){gw(Object.assign({},n,e)),V.currentInstance&&(V.currentInstance._destroy(),Ba()&&Ad()),V.currentInstance=this;const s=q0(e,n);Eb(s),Object.freeze(s),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const i=H0(this);return Sd(this,s),$.innerParams.set(this,s),j0(this,i,s)}then(e){return $.promise.get(this).then(e)}finally(e){return $.promise.get(this).finally(e)}}const j0=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.closePopup({isDismissed:!0,dismiss:o})};Cs.swalPromiseResolve.set(t,s),Cs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>E0(t),e.denyButton.onclick=()=>_0(t),e.cancelButton.onclick=()=>T0(t,r),e.closeButton.onclick=()=>r(zn.close),I0(t,e,r),Yb(t,V,n,r),Fb(t,n),Ob(n),K0(V,n,r),z0(e,n),setTimeout(()=>{e.container.scrollTop=0})}),q0=(t,e)=>{const n=hb(t),s=Object.assign({},_n,e,n,t);return s.showClass=Object.assign({},_n.showClass,s.showClass),s.hideClass=Object.assign({},_n.hideClass,s.hideClass),s},H0=t=>{const e={popup:Z(),container:Fe(),actions:Ks(),confirmButton:ct(),denyButton:xt(),cancelButton:nn(),loader:Kn(),closeButton:xa(),validationMessage:hr(),progressSteps:wd()};return $.domCache.set(t,e),e},K0=(t,e,n)=>{const s=dr();Be(s),e.timer&&(t.timeout=new _b(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Ae(s),tt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ua(e.timer)})))},z0=(t,e)=>{if(!e.toast){if(!ur(e.allowEnterKey))return W0();G0(t,e)||Co(e,-1,1)}},G0=(t,e)=>e.focusDeny&&Ye(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ye(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ye(t.confirmButton)?(t.confirmButton.focus(),!0):!1,W0=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Gn.prototype,Bd);Object.assign(Gn,$0);Object.keys(Bd).forEach(t=>{Gn[t]=function(...e){if(So)return So[t](...e)}});Gn.DismissReason=zn;Gn.version="11.4.8";const Is=Gn;Is.default=Is;const dn=[];function gr(t,e=pe){let n;const s=new Set;function i(a){if(rn(t,a)&&(t=a,n)){const c=!dn.length;for(const l of s)l[1](),dn.push(l,t);if(c){for(let l=0;l<dn.length;l+=2)dn[l][0](dn[l+1]);dn.length=0}}}function r(a){i(a(t))}function o(a,c=pe){const l=[a,c];return s.add(l),s.size===1&&(n=e(i)||pe),a(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:o}}const Mr=gr({nombre:"nombreDefault",apellido:"apellidoDefault",id:"idDefault",plan:"planDefault",nroSocio:9876543210}),Ao=gr(""),ko=gr(""),Do=gr(""),Q0=(t,e)=>{t.forEach(n=>{e.forEach(s=>{s in n||(n[s]=null)})})},Y0=async t=>{try{await Pa(Ln(We,"Pacientes",t.id),t)}catch(e){console.log(e)}};function gl(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function X0(t){let e,n=t[0],s=[];for(let i=0;i<n.length;i+=1)s[i]=ml(gl(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=No()},m(i,r){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,r);Ce(i,e,r)},p(i,r){if(r&1){n=i[0];let o;for(o=0;o<n.length;o+=1){const a=gl(i,n,o);s[o]?s[o].p(a,r):(s[o]=ml(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){Oi(s,i),i&&be(e)}}}function J0(t){let e;return{c(){e=I("option"),e.textContent="no hay resultados para ese prefijo...",e.disabled=!0,e.__value="no hay resultados para ese prefijo...",e.value=e.__value},m(n,s){Ce(n,e,s)},p:pe,d(n){n&&be(e)}}}function ml(t){let e,n=`${t[6].apellido}, ${t[6].nombre}${t[6].plan=="particular"?"":" -"+t[6].nroSocio+" - plan "+t[6].plan} `,s;return{c(){e=I("option"),s=ie(n),e.__value=t[8],e.value=e.__value},m(i,r){Ce(i,e,r),v(e,s)},p(i,r){r&1&&n!==(n=`${i[6].apellido}, ${i[6].nombre}${i[6].plan=="particular"?"":" -"+i[6].nroSocio+" - plan "+i[6].plan} `)&&st(s,n)},d(i){i&&be(e)}}}function Z0(t){let e,n,s;function i(a,c){return a[0].length==0?J0:X0}let r=i(t),o=r(t);return{c(){e=I("select"),o.c(),g(e,"name","select-pacientes"),g(e,"class","select-Pacientes svelte-2shrp8"),g(e,"id","selectPacientes"),g(e,"size",5),t[1]===void 0&&Yt(()=>t[4].call(e))},m(a,c){Ce(a,e,c),o.m(e,null),Pt(e,t[1]),n||(s=[se(e,"change",t[2]),se(e,"change",t[4])],n=!0)},p(a,[c]){r===(r=i(a))&&o?o.p(a,c):(o.d(1),o=r(a),o&&(o.c(),o.m(e,null))),c&2&&Pt(e,a[1])},i:pe,o:pe,d(a){a&&be(e),o.d(),n=!1,lt(s)}}}function eE(t,e,n){let{pacientesFiltrada:s}=e,{planSelect:i}=e,r;const o=Il(),a=l=>{const u=l.target.value;n(3,i=s[u].plan),o("cambioSelectPaciente",u),console.log("dispatch cambioSelectPaciente, valorindiceSelectPaciente: ",u)};function c(){r=ui(this),n(1,r)}return t.$$set=l=>{"pacientesFiltrada"in l&&n(0,s=l.pacientesFiltrada),"planSelect"in l&&n(3,i=l.planSelect)},[s,r,a,i,c]}class tE extends Bn{constructor(e){super(),Fn(this,e,eE,Z0,rn,{pacientesFiltrada:0,planSelect:3})}}function nE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,E,w,N,C,M,O,F,G,W,U,j,ee,ge,De,Ze,me,Ue,yt,ue,ce,T,Y,Q,_,te,$e,et;return F=new tE({props:{pacientesFiltrada:t[1],planSelect:t[4]}}),F.$on("cambioSelectPaciente",t[15]),_=new lf({props:{planes:t[3],planSeleccionado:t[9],SelectPlanVisible:t[5]}}),_.$on("cambioPlan",t[14]),_.$on("clickCheckPlan",t[16]),{c(){e=I("body"),n=I("div"),s=I("div"),i=I("button"),r=ie("create"),a=ne(),c=I("button"),l=ie("update"),h=ne(),d=I("button"),p=ie("delete"),E=ne(),w=I("div"),N=I("label"),N.textContent="filtrar por apellido",C=I("input"),M=ne(),O=I("div"),ls(F.$$.fragment),G=ne(),W=I("div"),U=I("label"),U.textContent="nombre",j=I("input"),ee=ne(),ge=I("label"),ge.textContent="apellido",De=I("input"),Ze=ne(),me=I("div"),Ue=I("label"),Ue.textContent="nº socio",yt=ne(),ue=I("input"),ce=ne(),T=I("label"),Y=ie(t[10]),Q=ne(),ls(_.$$.fragment),i.disabled=o=!t[6]||!t[7]||!t[9]||!t[8],g(i,"class","svelte-v8du9y"),c.disabled=u=!t[6]||!t[7]||!t[9]||!t[8]||!t[2],g(c,"class","svelte-v8du9y"),d.disabled=y=!t[2],g(d,"class","svelte-v8du9y"),g(s,"class","buttons svelte-v8du9y"),g(n,"id","botones"),g(n,"class","svelte-v8du9y"),g(N,"for","filterPrefix"),g(N,"class","svelte-v8du9y"),g(C,"name","filterPrefix"),g(C,"placeholder","filter prefix"),g(C,"class","svelte-v8du9y"),g(w,"id","filter"),g(w,"class","svelte-v8du9y"),g(O,"id","selectPacientes"),g(O,"class","svelte-v8du9y"),g(U,"for","nombre"),g(U,"class","svelte-v8du9y"),g(j,"name","nombre"),g(j,"placeholder","nombre"),g(j,"class","svelte-v8du9y"),g(ge,"for","apellido"),g(ge,"class","svelte-v8du9y"),g(De,"name","apellido"),g(De,"placeholder","apellido"),g(De,"class","svelte-v8du9y"),g(W,"id","formInputsI"),g(W,"class","svelte-v8du9y"),g(Ue,"for","nroSocio"),g(Ue,"class","svelte-v8du9y"),g(ue,"name","nroSocio"),g(ue,"placeholder","nro de Socio"),g(ue,"class","svelte-v8du9y"),g(T,"id","labelPlan"),g(T,"for","plan"),g(T,"class","svelte-v8du9y"),g(me,"id","formInputsD"),g(me,"class","svelte-v8du9y"),g(e,"class","svelte-v8du9y")},m(P,H){Ce(P,e,H),v(e,n),v(n,s),v(s,i),v(i,r),v(s,a),v(s,c),v(c,l),v(s,h),v(s,d),v(d,p),v(e,E),v(e,w),v(w,N),v(w,C),_e(C,t[0]),v(e,M),v(e,O),Cn(F,O,null),v(e,G),v(e,W),v(W,U),v(W,j),_e(j,t[6]),v(W,ee),v(W,ge),v(W,De),_e(De,t[7]),v(e,Ze),v(e,me),v(me,Ue),v(me,yt),v(me,ue),_e(ue,t[8]),v(me,ce),v(me,T),v(T,Y),v(me,Q),Cn(_,me,null),te=!0,$e||(et=[se(i,"click",t[11]),se(c,"click",t[12]),se(d,"click",t[13]),se(C,"input",t[19]),se(j,"input",t[20]),se(De,"input",t[21]),se(ue,"input",t[22])],$e=!0)},p(P,H){(!te||H[0]&960&&o!==(o=!P[6]||!P[7]||!P[9]||!P[8]))&&(i.disabled=o),(!te||H[0]&964&&u!==(u=!P[6]||!P[7]||!P[9]||!P[8]||!P[2]))&&(c.disabled=u),(!te||H[0]&4&&y!==(y=!P[2]))&&(d.disabled=y),H[0]&1&&C.value!==P[0]&&_e(C,P[0]);const ze={};H[0]&2&&(ze.pacientesFiltrada=P[1]),H[0]&16&&(ze.planSelect=P[4]),F.$set(ze),H[0]&64&&j.value!==P[6]&&_e(j,P[6]),H[0]&128&&De.value!==P[7]&&_e(De,P[7]),H[0]&256&&ue.value!==P[8]&&_e(ue,P[8]),(!te||H[0]&1024)&&st(Y,P[10]);const Ge={};H[0]&8&&(Ge.planes=P[3]),H[0]&512&&(Ge.planSeleccionado=P[9]),H[0]&32&&(Ge.SelectPlanVisible=P[5]),_.$set(Ge)},i(P){te||(Ot(F.$$.fragment,P),Ot(_.$$.fragment,P),te=!0)},o(P){Xt(F.$$.fragment,P),Xt(_.$$.fragment,P),te=!1},d(P){P&&be(e),In(F),In(_),$e=!1,lt(et)}}}function sE(t,e,n){let s,i,r,o,a;qt(t,Mr,_=>n(24,i=_)),qt(t,Do,_=>n(25,r=_)),qt(t,ko,_=>n(26,o=_)),qt(t,Ao,_=>n(27,a=_));let c=[],l=["nombre","apellido","nroSocio","plan","createdAt"],u=[],h="",d,p;Cl(()=>{const _=Ct(We,"Pacientes"),$e=rs(_,yo("apellido"));p=bo($e,P=>{n(17,c=P.docs.map(H=>({...H.data(),id:H.id}))),Q0(c,l),c.forEach(H=>{Y0(H)}),document.getElementById("selectPacientes").selected=M},P=>{console.log(P)}),(async()=>{const P=Ct(We,"planes"),H=await vo(P);n(3,u=H.docs.map(ze=>ze.data().plan)),u.push("particular"),u.sort(),n(4,h="particular")})()}),Xd(p);let y="",E="",w="",N="",C="",M=0,O,F="plan";Wn(Mr,i=s,i);const G=_=>{n(6,E=_?_.nombre:""),n(7,w=_?_.apellido:""),n(8,N=_?_.nroSocio:""),n(9,C=_?_.plan:"")},W=async()=>{try{await cd(Ct(We,"Pacientes"),{nombre:E,apellido:w,nroSocio:N,createdAt:new Date().toLocaleDateString(),plan:C}),En({text:"Nuevo paciente agregado"}).showToast()}catch(_){console.error(_)}},U=()=>{n(17,c=c.concat({nombre:E,apellido:w})),n(18,M=c.length-1),W(),n(6,E=n(7,w=n(9,C=n(8,N=""))))},j=async _=>{try{await Pa(Ln(We,"Pacientes",_.id),_),En({text:`paciente ${_.apellido}, ${_.nombre} actualizado`,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(te){console.error(te)}},ee=()=>{n(2,s.nombre=E,s),n(2,s.apellido=w,s),n(9,C=s.plan),n(2,s.nroSocio=N,s),n(2,s),n(1,O),n(18,M),n(0,y),n(17,c),n(17,c),j(s)},ge=async _=>{try{await wo(Ln(We,"Pacientes",_.id)),En({text:"Paciente eliminado",style:{background:"red"}}).showToast()}catch($e){console.error($e)}const te=rs(Ct(We,"sesiones"),mo("pacienteID","==",_.id));console.log(`desde delete q=pacientes a borrar ${te} - paciente: ${_.nombre} ${_.apellido} ${_.id}`);try{(await vo(te)).forEach(et=>{wo(et.ref)})}catch($e){console.log($e)}},De=()=>{const _=c.indexOf(s);Is.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(te=>{te.isConfirmed&&(Is.fire("Deleted!","Your file has been deleted.","success"),ge(c[M]),n(17,c=[...c.slice(0,_),...c.slice(_+1)]),n(6,E=n(7,w=n(8,N=n(9,C="")))),n(18,M=Math.min(M,O.length-2)))})},Ze=_=>{n(2,s.plan=_,s),n(2,s.nombre=E,s),n(2,s.apellido=w,s),n(2,s.nroSocio=N,s),n(1,O[M].plan=_,O),j(s)},me=_=>{n(9,C=_.detail.valor.planSeleccionado),s.plan!=C&&Ze(C)},Ue=_=>{_?(n(10,F="particular"),n(5,d=!1)):(n(10,F="plan"),n(5,d=!0))},yt=_=>{n(18,M=_.detail),n(9,C=O[M].plan);const te=C=="particular";Ue(te)},ue=_=>{const te=_.detail.valor.SelectPlanVisible;te?te&&C=="particular"&&n(9,C="210"):n(9,C="particular"),Ze(C),Ue(!te)};function ce(){y=this.value,n(0,y)}function T(){E=this.value,n(6,E)}function Y(){w=this.value,n(7,w)}function Q(){N=this.value,n(8,N)}return t.$$.update=()=>{t.$$.dirty[0]&131073&&n(1,O=y?c.filter(_=>`${_.apellido}, ${_.nombre}`.toLowerCase().startsWith(y.toLowerCase())):c.map(_=>({nombre:_.nombre,apellido:_.apellido,plan:_.plan,nroSocio:_.nroSocio,id:_.id}))),t.$$.dirty[0]&262146&&n(2,s=O[M]),t.$$.dirty[0]&4&&s&&(Wn(Mr,i=s,i),Wn(Ao,a=s.apellido,a),Wn(ko,o=s.nombre,o),Wn(Do,r=s.id,r)),t.$$.dirty[0]&4&&G(s)},[y,O,s,u,h,d,E,w,N,C,F,U,ee,De,me,yt,ue,c,M,ce,T,Y,Q]}class iE extends Bn{constructor(e){super(),Fn(this,e,sE,nE,rn,{},null,[-1,-1])}}function yl(t,e,n){const s=t.slice();return s[33]=e[n],s[35]=n,s}function vl(t,e,n){const s=t.slice();return s[36]=e[n],s}function wl(t){let e,n,s=t[36].diaSesion+"",i,r,o=t[36].valorSesion+"",a,c,l=t[36].fechaPago+"",u,h,d=t[36].valorPago+"",p,y,E;return{c(){e=I("option"),n=ie("dia sesion: "),i=ie(s),r=ie(" - valor sesion: "),a=ie(o),c=ie(`\r
              - dia pago `),u=ie(l),h=ie(" - valor pago "),p=ie(d),y=ne(),g(e,"class"," svelte-1imwuid"),e.__value=E=t[36].id,e.value=e.__value},m(w,N){Ce(w,e,N),v(e,n),v(e,i),v(e,r),v(e,a),v(e,c),v(e,u),v(e,h),v(e,p),v(e,y)},p(w,N){N[0]&1&&s!==(s=w[36].diaSesion+"")&&st(i,s),N[0]&1&&o!==(o=w[36].valorSesion+"")&&st(a,o),N[0]&1&&l!==(l=w[36].fechaPago+"")&&st(u,l),N[0]&1&&d!==(d=w[36].valorPago+"")&&st(p,d),N[0]&1&&E!==(E=w[36].id)&&(e.__value=E,e.value=e.__value)},d(w){w&&be(e)}}}function bl(t){let e=Object.values(t[36]).includes(t[3]),n,s=e&&wl(t);return{c(){s&&s.c(),n=No()},m(i,r){s&&s.m(i,r),Ce(i,n,r)},p(i,r){r[0]&9&&(e=Object.values(i[36]).includes(i[3])),e?s?s.p(i,r):(s=wl(i),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},d(i){s&&s.d(i),i&&be(n)}}}function rE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,E,w,N,C,M,O,F,G,W,U,j,ee,ge,De,Ze=t[11][t[4]-1]+"",me,Ue,yt,ue=t[11],ce=[];for(let T=0;T<ue.length;T+=1)ce[T]=El(yl(t,ue,T));return{c(){e=I("div"),n=I("form"),s=I("div"),i=I("div"),r=I("label"),r.textContent="pago",o=I("input"),a=ne(),c=I("label"),c.textContent="valor sesion",l=I("input"),u=ne(),h=I("div"),d=I("label"),d.textContent="Dia Sesion",p=I("input"),y=ne(),E=I("label"),E.textContent="Fecha Pago",w=I("input"),N=ne(),C=I("div"),M=I("button"),M.textContent="update",O=ne(),F=I("button"),F.textContent="delete",G=ne(),W=I("button"),W.textContent="Agregar sesión",U=ne(),j=I("select");for(let T=0;T<ce.length;T+=1)ce[T].c();ee=ne(),ge=I("button"),De=ie("registros mes "),me=ie(Ze),g(r,"for","valorPago"),g(r,"class","svelte-1imwuid"),g(o,"name","valorPago"),g(o,"type","number"),g(o,"step","100"),g(o,"min","0"),g(o,"placeholder","Valor pago"),g(o,"class","svelte-1imwuid"),g(c,"for","valorSesion"),g(c,"class","svelte-1imwuid"),g(l,"name","valorSesion"),g(l,"type","number"),g(l,"step","100"),g(l,"min","0"),g(l,"placeholder","Valor sesión"),g(l,"class","svelte-1imwuid"),g(i,"id","inputsFormSesionesI"),g(i,"class","svelte-1imwuid"),g(d,"for","diaSesion"),g(d,"class","svelte-1imwuid"),g(p,"name","diaSesion"),g(p,"type","date"),g(p,"placeholder","Día sesión"),g(p,"class","svelte-1imwuid"),g(E,"for","fechaPago"),g(E,"class","svelte-1imwuid"),g(w,"name","fechaPago"),g(w,"type","date"),g(w,"placeholder","Fecha pago"),g(w,"class","svelte-1imwuid"),g(h,"id","inputsFormSesionesD"),g(h,"class","svelte-1imwuid"),g(M,"class","svelte-1imwuid"),g(F,"class","svelte-1imwuid"),g(W,"class","svelte-1imwuid"),g(j,"name","mes"),g(j,"id","mesRegistro"),g(j,"class","svelte-1imwuid"),t[4]===void 0&&Yt(()=>t[27].call(j)),g(ge,"class","svelte-1imwuid"),g(C,"id","botonesFormSesiones"),g(C,"class","buttons svelte-1imwuid"),g(s,"id","form-Sesiones"),g(s,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"id","contenedor-form-sesiones"),g(e,"class","svelte-1imwuid")},m(T,Y){Ce(T,e,Y),v(e,n),v(n,s),v(s,i),v(i,r),v(i,o),_e(o,t[5]),v(i,a),v(i,c),v(i,l),_e(l,t[6]),v(s,u),v(s,h),v(h,d),v(h,p),_e(p,t[7]),v(h,y),v(h,E),v(h,w),_e(w,t[8]),v(s,N),v(s,C),v(C,M),v(C,O),v(C,F),v(C,G),v(C,W),v(C,U),v(C,j);for(let Q=0;Q<ce.length;Q+=1)ce[Q]&&ce[Q].m(j,null);Pt(j,t[4]),v(C,ee),v(C,ge),v(ge,De),v(ge,me),Ue||(yt=[se(o,"input",t[21]),se(l,"input",t[22]),se(p,"input",t[23]),se(w,"input",t[24]),se(M,"click",t[25]),se(F,"click",t[26]),se(W,"click",t[13]),se(j,"change",t[27]),se(ge,"click",t[28]),se(n,"submit",Gd(t[19]))],Ue=!0)},p(T,Y){if(Y[0]&32&&li(o.value)!==T[5]&&_e(o,T[5]),Y[0]&64&&li(l.value)!==T[6]&&_e(l,T[6]),Y[0]&128&&_e(p,T[7]),Y[0]&256&&_e(w,T[8]),Y[0]&2064){ue=T[11];let Q;for(Q=0;Q<ue.length;Q+=1){const _=yl(T,ue,Q);ce[Q]?ce[Q].p(_,Y):(ce[Q]=El(_),ce[Q].c(),ce[Q].m(j,null))}for(;Q<ce.length;Q+=1)ce[Q].d(1);ce.length=ue.length}Y[0]&16&&Pt(j,T[4]),Y[0]&16&&Ze!==(Ze=T[11][T[4]-1]+"")&&st(me,Ze)},d(T){T&&be(e),Oi(ce,T),Ue=!1,lt(yt)}}}function oE(t){let e,n=`${(t[35]+1).toString().padStart(2,"0")} - ${t[33]}`,s;return{c(){e=I("option"),s=ie(n),e.__value=t[35]+1,e.value=e.__value,g(e,"class","svelte-1imwuid")},m(i,r){Ce(i,e,r),v(e,s)},p:pe,d(i){i&&be(e)}}}function aE(t){let e,n=`${(t[35]+1).toString().padStart(2,"0")} - ${t[33]}`,s;return{c(){e=I("option"),s=ie(n),e.selected=!0,e.__value=t[35]+1,e.value=e.__value,g(e,"class","svelte-1imwuid")},m(i,r){Ce(i,e,r),v(e,s)},p:pe,d(i){i&&be(e)}}}function El(t){let e;function n(r,o){return r[35]+1==r[4]?aE:oE}let s=n(t),i=s(t);return{c(){i.c(),e=No()},m(r,o){i.m(r,o),Ce(r,e,o)},p(r,o){s===(s=n(r))&&i?i.p(r,o):(i.d(1),i=s(r),i&&(i.c(),i.m(e.parentNode,e)))},d(r){i.d(r),r&&be(e)}}}function cE(t){let e,n,s,i,r,o,a,c,l,u,h,d,p,y,E,w=t[17](t[3])+"",N,C,M,O,F=t[0],G=[];for(let U=0;U<F.length;U+=1)G[U]=bl(vl(t,F,U));let W=rE(t);return{c(){e=I("main"),n=I("body"),s=I("h4"),i=ie("Paciente: "),r=ie(t[9]),o=ie(", "),a=ie(t[10]),c=ne(),l=I("div"),u=I("select");for(let U=0;U<G.length;U+=1)G[U].c();h=ne(),d=I("p"),d.textContent=`total general:${t[16]()}`,p=ne(),y=I("p"),E=ie("total por paciente:"),N=ie(w),C=ne(),W&&W.c(),g(s,"class","svelte-1imwuid"),g(u,"id","select-sesiones"),g(u,"size",5),g(u,"class","svelte-1imwuid"),t[1]===void 0&&Yt(()=>t[20].call(u)),g(d,"id","totalGeneral"),g(d,"class","svelte-1imwuid"),g(y,"class","svelte-1imwuid"),g(l,"id","select"),g(l,"class","svelte-1imwuid"),g(n,"class","svelte-1imwuid"),g(e,"class","svelte-1imwuid")},m(U,j){Ce(U,e,j),v(e,n),v(n,s),v(s,i),v(s,r),v(s,o),v(s,a),v(n,c),v(n,l),v(l,u);for(let ee=0;ee<G.length;ee+=1)G[ee]&&G[ee].m(u,null);Pt(u,t[1]),v(l,h),v(l,d),v(l,p),v(l,y),v(y,E),v(y,N),v(n,C),W&&W.m(n,null),M||(O=[se(u,"change",t[12]),se(u,"change",t[20])],M=!0)},p(U,j){if(j[0]&512&&st(r,U[9]),j[0]&1024&&st(a,U[10]),j[0]&9){F=U[0];let ee;for(ee=0;ee<F.length;ee+=1){const ge=vl(U,F,ee);G[ee]?G[ee].p(ge,j):(G[ee]=bl(ge),G[ee].c(),G[ee].m(u,null))}for(;ee<G.length;ee+=1)G[ee].d(1);G.length=F.length}j[0]&3&&Pt(u,U[1]),j[0]&8&&w!==(w=U[17](U[3])+"")&&st(N,w),W.p(U,j)},i:pe,o:pe,d(U){U&&be(e),Oi(G,U),W&&W.d(),M=!1,lt(O)}}}function lE(t,e,n){let s,i,r;qt(t,Do,T=>n(3,s=T)),qt(t,Ao,T=>n(9,i=T)),qt(t,ko,T=>n(10,r=T));let{sesiones:o}=e,a;Cl(()=>{const T=[],Y=Ct(We,"sesiones"),Q=Ct(We,"Pacientes"),_=rs(Y,yo("diaSesion")),te=rs(Q,yo("apellido")),$e=bo(_,P=>{n(0,o=P.docs.map(ze=>({id:ze.id,...ze.data()})));const H=(ze,Ge)=>ze.diaSesion<Ge.diaSesion?-1:ze.diaSesion>Ge.diaSesion?1:0;o.sort(H)});console.log("desde onMount CRUDSesiones",o),T.push($e);const et=bo(te,P=>{n(18,a=P.docs.map(H=>({id:H.id,...H.data()})))});return T.push(et),()=>{T.forEach(P=>P())}});const c=new Date;let l=c.getMonth()+1,u=c.getFullYear(),h=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"],d,p;const y=T=>{n(1,d=T.target.value),console.log(o),n(2,p=o.find(Y=>Y.id===d)),console.log("selectedSession",p),n(5,C=p.valorPago),n(6,M=p.valorSesion),n(8,F=p.fechaPago),n(7,O=p.diaSesion)},E=async()=>{console.log("Add sesion",p);try{const T=await cd(Ct(We,"sesiones"),{valorPago:C,valorSesion:M,diaSesion:O,fechaPago:F,pacienteID:s});console.log("sesion agregada"),En({text:"Nueva sesion agregada"}).showToast(),n(1,d=T.id)}catch(T){console.error(T)}},w=async T=>{console.log("Update sesion",T);try{await Pa(Ln(We,"sesiones",T.id),{valorPago:C,valorSesion:M,fechaPago:F,diaSesion:O}),En({text:"sesion actualizada",style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast()}catch(Y){console.log(Y)}},N=async T=>{console.log("Delete sesion",T);try{await wo(Ln(We,"sesiones",T.id)),En({text:"Sesion eliminada",style:{background:"red"}}).showToast()}catch(Y){console.error(Y)}};let C=5e3,M=5e3,O=new Date().toISOString().slice(0,10),F=new Date().toISOString().slice(0,10);const G=async()=>{const T=Ct(We,"sesiones"),Y=l.toString().padStart(2,"0"),Q=u.toString(),_=`${Q}-${Y}-01`,te=`${Q}-${Y}-31`,$e=rs(T,mo("diaSesion",">=",_),mo("diaSesion","<=",te));try{const et=await vo($e),P=et.docs.map(Ge=>Ge.data());console.log("sesiones por mes actual",P);let H=0;et.forEach(Ge=>{console.log(a);let qd=Ge.data().pacienteID;const Ws=a.find(Hd=>Hd.id==qd);console.log(Ws);const mr=Ge.data().valorPago;(typeof mr=="number"||mr==null)&&(Ws.plan=="particular"?(H+=mr,console.log(`paciente ${Ws.apellido}, valor pago ${Ge.data().valorPago}, total acumulado ${H}`)):(H+=2700,console.log(`paciente ${Ws.apellido}, valor pago 2700, total acumulado ${H}`)))}),console.log("Total pagos mes actual: ",H);const ze=document.querySelector("#totalGeneral");return ze.innerHTML="total mes: $"+H.toString(),H}catch(et){return console.error("Error al obtener las sesiones y los pagos:",et),[]}},W=()=>o.reduce((T,Y)=>T+Y.valorPago,0),U=T=>o.filter(Q=>Q.pacienteID===T).reduce((Q,_)=>Q+_.valorPago,0);function j(T){Jd.call(this,t,T)}function ee(){d=ui(this),n(1,d),n(0,o)}function ge(){C=li(this.value),n(5,C)}function De(){M=li(this.value),n(6,M)}function Ze(){O=this.value,n(7,O)}function me(){F=this.value,n(8,F)}const Ue=()=>w(p),yt=()=>N(p);function ue(){l=ui(this),n(4,l)}const ce=()=>G();return t.$$set=T=>{"sesiones"in T&&n(0,o=T.sesiones)},t.$$.update=()=>{t.$$.dirty[0]&262145&&console.log("luego de las subscripciones a pacientes y sesiones: sesiones>",o,"pacientes>",a),t.$$.dirty[0]&7&&(n(2,p=o.find(T=>T.id===d)),console.log(p||"sin seleccion de sesion")),t.$$.dirty[0]&8&&U(s)},W(),G(),[o,d,p,s,l,C,M,O,F,i,r,h,y,E,w,N,G,U,a,j,ee,ge,De,Ze,me,Ue,yt,ue,ce]}class uE extends Bn{constructor(e){super(),Fn(this,e,lE,cE,rn,{sesiones:0},null,[-1,-1])}}function hE(t){let e,n,s,i,r,o,a,c,l;return r=new iE({}),c=new uE({props:{sesiones:t[0]}}),{c(){e=I("body"),n=I("div"),s=I("h5"),s.textContent="CRUD Pacientes",i=ne(),ls(r.$$.fragment),o=ne(),a=I("div"),ls(c.$$.fragment),g(n,"class","contenedor-pacientes svelte-1y3ujd1"),g(a,"class","contenedor-sesiones svelte-1y3ujd1"),g(e,"class","svelte-1y3ujd1")},m(u,h){Ce(u,e,h),v(e,n),v(n,s),v(n,i),Cn(r,n,null),v(e,o),v(e,a),Cn(c,a,null),l=!0},p:pe,i(u){l||(Ot(r.$$.fragment,u),Ot(c.$$.fragment,u),l=!0)},o(u){Xt(r.$$.fragment,u),Xt(c.$$.fragment,u),l=!1},d(u){u&&be(e),In(r),In(c)}}}function dE(t){return[[]]}class fE extends Bn{constructor(e){super(),Fn(this,e,dE,hE,rn,{})}}function pE(t){let e,n,s;return n=new fE({}),{c(){e=I("div"),ls(n.$$.fragment),g(e,"class","contenedorPadre svelte-uueu6x")},m(i,r){Ce(i,e,r),Cn(n,e,null),s=!0},p:pe,i(i){s||(Ot(n.$$.fragment,i),s=!0)},o(i){Xt(n.$$.fragment,i),s=!1},d(i){i&&be(e),In(n)}}}function gE(t){let e,n,s,i,r,o;return{c(){e=I("div"),n=I("h1"),n.textContent="ingrese la contraseña:",s=ne(),i=I("input"),g(n,"class","svelte-uueu6x"),g(i,"type","password"),g(i,"class","svelte-uueu6x"),g(e,"class","ingreso svelte-uueu6x")},m(a,c){Ce(a,e,c),v(e,n),v(e,s),v(e,i),_e(i,t[1]),r||(o=[se(i,"input",t[3]),se(i,"input",t[2])],r=!0)},p(a,c){c&2&&i.value!==a[1]&&_e(i,a[1])},i:pe,o:pe,d(a){a&&be(e),r=!1,lt(o)}}}function mE(t){let e,n,s,i;const r=[gE,pE],o=[];function a(c,l){return c[0]==="nada"?0:c[0]==="Gonzalo"?1:-1}return~(n=a(t))&&(s=o[n]=r[n](t)),{c(){e=I("main"),s&&s.c(),g(e,"class","svelte-uueu6x")},m(c,l){Ce(c,e,l),~n&&o[n].m(e,null),i=!0},p(c,[l]){let u=n;n=a(c),n===u?~n&&o[n].p(c,l):(s&&(sf(),Xt(o[u],1,1,()=>{o[u]=null}),rf()),~n?(s=o[n],s?s.p(c,l):(s=o[n]=r[n](c),s.c()),Ot(s,1),s.m(e,null)):s=null)},i(c){i||(Ot(s),i=!0)},o(c){Xt(s),i=!1},d(c){c&&be(e),~n&&o[n].d()}}}function yE(t,e,n){let s="Paparula",i="nada",r;const o=()=>{r===s&&n(0,i="Gonzalo")};function a(){r=this.value,n(1,r)}return[i,r,o,a]}class vE extends Bn{constructor(e){super(),Fn(this,e,yE,mE,rn,{})}}new vE({target:document.getElementById("app")});
