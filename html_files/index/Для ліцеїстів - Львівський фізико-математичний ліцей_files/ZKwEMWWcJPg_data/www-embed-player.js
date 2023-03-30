(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function p(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ja(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;qa=ta.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=pa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.va=b.prototype}
function wa(){this.H=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.v=this.j=null}
function xa(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
wa.prototype.Z=function(a){this.i=a};
function ya(a,b){a.j={md:b,wd:!0};a.h=a.s||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.md;a.j=null;return b}
function Ca(a){a.v=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.v.splice(0)[0];(b=a.j=a.j||b)?b.wd?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.wd)throw b.md;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.Z):(a.h.Z(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.Z):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return na});
p("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.m)}};
b.prototype.V=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.R(g):this.s(g)}};
b.prototype.R=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ia(h,g):this.s(g)};
b.prototype.m=function(g){this.Z(2,g)};
b.prototype.s=function(g){this.Z(1,g)};
b.prototype.Z=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.v()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.H)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.v=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.dc(h.resolve,h.reject)};
b.prototype.ia=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(u,t){return"function"==typeof u?function(z){try{m(u(z))}catch(C){n(C)}}:t}
var m,n,q=new b(function(u,t){m=u;n=t});
this.dc(k(g,m),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.dc=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=r(g),n=m.next();!n.done;n=m.next())d(n.value).dc(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(m,n){function q(z){return function(C){u[z]=C;t--;0==t&&m(u)}}
var u=[],t=0;do u.push(void 0),t++,d(k.value).dc(q(u.length-1),n),k=h.next();while(!k.done)})};
return b});
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=r(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ca(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&ka(h.data_,m))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:m,list:n,index:h,entry:q}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
p("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
p("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
p("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
p("Int8Array.prototype.fill",Na);p("Uint8Array.prototype.fill",Na);p("Uint8ClampedArray.prototype.fill",Na);p("Int16Array.prototype.fill",Na);p("Uint16Array.prototype.fill",Na);p("Int32Array.prototype.fill",Na);p("Uint32Array.prototype.fill",Na);p("Float32Array.prototype.fill",Na);p("Float64Array.prototype.fill",Na);p("Object.setPrototypeOf",function(a){return a||va});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
p("globalThis",function(a){return a||ea});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.va=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xt=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.toString=function(){return this.j.toString()};
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Rb;try{new URL("s://g"),Rb=!0}catch(a){Rb=!1}var Sb=Rb,Nb={},Tb=new Mb("about:invalid#zClosurez",Nb);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function D(a){return-1!=Ub().indexOf(a)}
;function Vb(){return D("Trident")||D("MSIE")}
function Wb(){return D("Firefox")||D("FxiOS")}
function Xb(){return D("Safari")&&!(Yb()||D("Coast")||D("Opera")||D("Edge")||D("Edg/")||D("OPR")||Wb()||D("Silk")||D("Android"))}
function Yb(){return(D("Chrome")||D("CriOS"))&&!D("Edge")||D("Silk")}
function Zb(){return D("Android")&&!(Yb()||Wb()||D("Opera")||D("Silk"))}
function $b(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ac(a){var b=Ub();if("Internet Explorer"===a){if(Vb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=$b(c);
switch(a){case "Opera":if(D("Opera"))return b(["Version","Opera"]);if(D("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(D("Edge"))return b(["Edge"]);if(D("Edg/"))return b(["Edg"]);break;case "Chromium":if(Yb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Wb()||"Safari"===a&&Xb()||"Android Browser"===a&&Zb()||"Silk"===a&&D("Silk")?(b=c[2])&&b[1]||"":""}
function bc(a){a=ac(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var cc={};function dc(a){this.j=cc===cc?a:"";this.i=!0}
dc.prototype.h=function(){return this.j.toString()};
dc.prototype.toString=function(){return this.j.toString()};function ec(a,b){if(!(b instanceof Mb||b instanceof Mb)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Sb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Mb(b,Nb)}a.href=Ob(b)}
function fc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=gc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function hc(){return gc("script[nonce]")}
var ic=/^[\w+/_-]+[=]{0,2}$/;function gc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&ic.test(a)?a:"":""}
;function jc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(a){return a?decodeURI(a):a}
function mc(a,b){return b.match(kc)[a]||null}
function pc(a){return lc(mc(3,a))}
function qc(a){var b=a.match(kc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function rc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)sc(a[b],a[b+1],c);return c.join("&")}
function uc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
function vc(a,b){var c=2==arguments.length?tc(arguments[1],0):tc(arguments,1);return rc(a,c)}
function wc(a,b){b=uc(b);return rc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return rc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;function Cc(a){y.setTimeout(function(){throw a;},0)}
;function Dc(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Ec(){var a=Ub(),b="";D("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Dc()||D("iPad")||D("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):D("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Ub().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):D("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):D("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Kb(String(b||"")).split(".");for(var c=Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Fc(a){Fc[" "](a);return a}
Fc[" "]=function(){};var Gc=D("Opera"),Hc=Vb(),Ic=D("Edge"),Jc=D("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),Kc=-1!=Ub().toLowerCase().indexOf("webkit")&&!D("Edge"),Lc=D("Android");function Mc(){var a=y.document;return a?a.documentMode:void 0}
var Nc;a:{var Oc="",Sc=function(){var a=Ub();if(Jc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ic)return/Edge\/([\d\.]+)/.exec(a);if(Hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kc)return/WebKit\/(\S+)/.exec(a);if(Gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Oc=Sc?Sc[1]:"");if(Hc){var Tc=Mc();if(null!=Tc&&Tc>parseFloat(Oc)){Nc=String(Tc);break a}}Nc=Oc}var Uc=Nc,Vc;if(y.document&&Hc){var Wc=Mc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;var Yc=Dc()||D("iPod"),Zc=D("iPad");Zb();Yb();var $c=Xb()&&!(Dc()||D("iPad")||D("iPod"));var ad={},bd=null;function cd(a,b){Qa(a);void 0===b&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),n=bd[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===bd[f]&&(bd[f]=e)}}}}
;var gd="undefined"!==typeof Uint8Array,hd=!Hc&&"function"===typeof y.btoa;function id(a){if(!hd)return cd(a);for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);return btoa(b)}
var jd=RegExp("[-_.]","g");function kd(a){switch(a){case "-":return"+";case "_":return"/";case ".":return"=";default:return""}}
function ld(a){return gd&&null!=a&&a instanceof Uint8Array}
var md={};var nd;function od(a){if(a!==md)throw Error("illegal external caller");}
function pd(a,b){od(b);this.Aa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
pd.prototype.Lb=function(){return null==this.Aa};
pd.prototype.sizeBytes=function(){od(md);var a=this.Aa;if(null!=a&&!ld(a))if("string"===typeof a)if(hd){jd.test(a)&&(a=a.replace(jd,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ed(a);else Pa(a),a=null;return(a=null==a?a:this.Aa=a)?a.length:0};var qd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function rd(a,b){if(qd)return a[qd]|=b;if(void 0!==a.Ea)return a.Ea|=b;Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function sd(a,b){var c=td(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),ud(a,c|b));return a}
function vd(a,b){qd?a[qd]&&(a[qd]&=~b):void 0!==a.Ea&&(a.Ea&=~b)}
function td(a){var b;qd?b=a[qd]:b=a.Ea;return null==b?0:b}
function ud(a,b){qd?a[qd]=b:void 0!==a.Ea?a.Ea=b:Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function wd(a){rd(a,1);return a}
function xd(a){return!!(td(a)&2)}
function yd(a,b){ud(b,(a|0)&-51)}
function zd(a,b){ud(b,(a|18)&-41)}
;var Ad={};function Bd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Cd,Dd,Ed=[];ud(Ed,23);Dd=Object.freeze(Ed);function Fd(a){if(xd(a.N))throw Error("Cannot mutate an immutable Message");}
function Gd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Bd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Hd(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Id(a){return a.displayName||a.name||"unknown type name"}
function Jd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Id(b)+" but got "+(a&&Id(a.constructor)));return a}
;function Kd(a){var b=a.j+a.fb;return a.xa||(a.xa=a.N[b]={})}
function Ld(a,b,c){return-1===b?null:b>=a.j?a.xa?a.xa[b]:void 0:c&&a.xa&&(c=a.xa[b],null!=c)?c:a.N[b+a.fb]}
function E(a,b,c,d){Fd(a);return Qd(a,b,c,d)}
function Qd(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return Kd(a)[b]=c,a;a.N[b+a.fb]=c;(c=a.xa)&&b in c&&delete c[b];return a}
function Rd(a,b){a&&xd(b.N)&&xd(a.N);return a}
function Sd(a,b,c,d,e){var f=Ld(a,b,d);Array.isArray(f)||(f=Dd);var g=td(f);g&1||wd(f);if(e)g&2||rd(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&vd(f,16):(f=wd(Array.prototype.slice.call(f)),Qd(a,b,f,d))}return f}
function Td(a,b,c,d){Fd(a);(c=Ud(a,c))&&c!==b&&null!=d&&Qd(a,c,void 0,!1);return Qd(a,b,d)}
function Ud(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Ld(a,e)&&(0!==c&&Qd(a,c,void 0,!1),c=e)}return c}
function Vd(a,b,c,d){var e=d=void 0===d?!1:d,f=Ld(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.Jc!==Ad?g?new b(f):void 0:f;h!==f&&null!=h&&(Qd(a,c,h,e),rd(h.N,td(a.N)&18));b=Rd(h,a);if(null==b)return b;xd(a.N)||(e=Wd(b),e!==b&&(b=e,Qd(a,c,b,d)));return Rd(b,a)}
function Xd(a,b,c,d,e){a.i||(a.i={});var f=a.i[c],g=Sd(a,c,3,void 0,e);if(!f){var h=g;f=[];var k=!!(td(a.N)&16);g=xd(h);var m=h;!e&&g&&(h=Array.prototype.slice.call(h));for(var n=g,q=0;q<h.length;q++){var u=h[q];var t=b,z=!1;z=void 0===z?!1:z;u=Array.isArray(u)?new t(u):z?new t:void 0;if(void 0!==u){t=u.N;var C=z=td(t);g&&(C|=2);k&&(C|=16);C!=z&&ud(t,C);t=C;n=n||!!(2&t);f.push(u)}}a.i[c]=f;b=h;h=!n;k=td(b);n=k|33;n=h?n|8:n&-9;k!=n&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),ud(b,n));h=
b;m!==h&&Qd(a,c,h);(e||d&&g)&&rd(f,2);d&&Object.freeze(f);return f}e||(e=Object.isFrozen(f),d&&!e?Object.freeze(f):!d&&e&&(f=Array.prototype.slice.call(f),a.i[c]=f));return f}
function F(a,b,c,d){Fd(a);null!=d?Jd(d,b):d=void 0;return Qd(a,c,d)}
function Yd(a,b,c,d,e){Fd(a);null!=e?Jd(e,b):e=void 0;Td(a,c,d,e)}
function Zd(a,b,c,d,e){Fd(a);var f=null==d?Dd:wd([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Jd(k,b);g=g&&!xd(k.N);f[h]=k.N}f=sd(f,(g?8:0)|1);a.i||(a.i={});a.i[c]=d}else a.i&&(a.i[c]=void 0);return Qd(a,c,f,e)}
function $d(a,b,c,d){Fd(a);var e=Xd(a,c,b,!1,!1);c=null!=d?Jd(d,c):new c;a=Sd(a,b,2,void 0,!1);e.push(c);a.push(c.N);xd(c.N)&&vd(a,8)}
function ae(){var a=new be;return E(a,1,1)}
function ce(a,b){return null==a?b:a}
function de(a,b){return ce(Ld(a,b),"")}
;var ee;function fe(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(td(a)&128))return a=Array.prototype.slice.call(a),Gd(a),a}else{if(ld(a))return id(a);if(a instanceof pd){var b=a.Aa;return null==b?"":"string"===typeof b?b:a.Aa=id(b)}}}return a}
;function ge(a,b,c,d){if(null!=a){if(Array.isArray(a))a=he(a,b,c,void 0!==d);else if(Bd(a)){var e={},f;for(f in a)e[f]=ge(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function he(a,b,c,d){var e=td(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=ge(a[f],b,c,d);c(e,a);return a}
function ie(a){return a.Jc===Ad?a.toJSON():fe(a)}
function je(a,b){a&128&&Gd(b)}
;function ke(a,b,c){c=void 0===c?zd:c;if(null!=a){if(gd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=td(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return ud(a,d|2),a;a=he(a,ke,d&4?zd:c,!0);b=td(a);b&4&&b&2&&Object.freeze(a);return a}return a.Jc===Ad?le(a):a}}
function me(a,b,c,d,e,f,g){(a=a.i&&a.i[c])?(d=0<a.length?a[0].constructor:void 0,f=td(a),f&2||(a=ib(a,le),zd(f,a),Object.freeze(a)),Zd(b,d,c,a,e)):E(b,c,ke(d,f,g),e)}
function le(a){if(xd(a.N))return a;a=ne(a,!0);rd(a.N,2);return a}
function ne(a,b){var c=a.N,d=[];rd(d,16);var e=a.constructor.h;e&&d.push(e);e=a.xa;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(td(c)&128)&&Gd(d);b=b||xd(a.N)?zd:yd;f=a.constructor;td(d);ee=d;d=new f(d);ee=void 0;a.vd&&(d.vd=a.vd.slice());f=!!(td(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)me(a,d,h-a.fb,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),me(a,d,g,c,!0,f,b);return d}
function Wd(a){if(!xd(a.N))return a;var b=ne(a,!1);b.m=a;return b}
;function I(a,b,c,d){null==a&&(a=ee);ee=void 0;var e=this.constructor.h,f=!1;if(null==a){a=e?[e]:[];var g=48;var h=!0;d&&(g|=128);ud(a,g)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();var k=g=rd(a,0);if(h=0!==(16&k))(f=0!==(32&k))||(k|=32);if(d){if(!(k&128)&&0<a.length){var m=a[a.length-1];if(Bd(m)&&"g"in m){k|=128;delete m.g;var n=!0,q;for(q in m){n=!1;break}n&&a.pop()}else throw Error();}}else if(128&k)throw Error();g!==k&&ud(a,k)}this.fb=e?0:-1;this.i=void 0;this.N=a;a:{g=
this.N.length;e=g-1;if(g&&(g=this.N[e],Bd(g))){this.xa=g;this.j=e-this.fb;break a}void 0!==b&&-1<b?(this.j=Math.max(b,e+1-this.fb),this.xa=void 0):this.j=Number.MAX_VALUE}if(!d&&this.xa&&"g"in this.xa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!f&&!0;d=this.j;var u;for(h=0;h<c.length;h++)f=c[h],f<d?(f+=this.fb,(e=a[f])?oe(e,b):a[f]=Dd):(u||(u=Kd(this)),(e=u[f])?oe(e,b):u[f]=Dd)}}
I.prototype.toJSON=function(){var a=this.N,b;Cd?b=a:b=he(a,ie,je);return b};
function pe(a){Cd=!0;try{return JSON.stringify(a.toJSON(),qe)}finally{Cd=!1}}
I.prototype.clone=function(){return ne(this,!1)};
function oe(a,b){if(Array.isArray(a)){var c=td(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&ud(a,c|d)}}
I.prototype.Jc=Ad;I.prototype.toString=function(){return this.N.toString()};
function qe(a,b){return fe(b)}
;function re(a){this.fd=a}
;function se(a,b,c){this.i=a;this.l=b;this.h=c||[];this.qb=new Map}
l=se.prototype;l.Zd=function(a){var b=Ka.apply(1,arguments),c=this.yc(b);c?c.push(new re(a)):this.Jd(a,b)};
l.Jd=function(a){this.qb.set(this.od(Ka.apply(1,arguments)),[new re(a)])};
l.yc=function(){var a=this.od(Ka.apply(0,arguments));return this.qb.has(a)?this.qb.get(a):void 0};
l.qe=function(){var a=this.yc(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.qb.clear()};
l.od=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function te(a,b){se.call(this,a,3,b)}
v(te,se);te.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.qe(b);d&&(c=d.fd);this.Jd(c+a,b)};function ue(a,b){se.call(this,a,2,b)}
v(ue,se);ue.prototype.j=function(a){this.Zd(a,Ka.apply(1,arguments))};function ve(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function we(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?we.apply(null,d):ve(d)}}
;function J(){this.Z=this.Z;this.H=this.H}
J.prototype.Z=!1;J.prototype.h=function(){return this.Z};
J.prototype.dispose=function(){this.Z||(this.Z=!0,this.M())};
function xe(a,b){ye(a,Za(ve,b))}
function ye(a,b){a.Z?b():(a.H||(a.H=[]),a.H.push(b))}
J.prototype.M=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function ze(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ze.prototype.stopPropagation=function(){this.j=!0};
ze.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ae(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Be(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ce[c])c=Ce[c];else{c=String(c);if(!Ce[c]){var f=/function\s+([^\(]+)/m.exec(c);Ce[c]=f?f[1]:"[Anonymous]"}c=Ce[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Be(a,b){b||(b={});b[De(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[De(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Be(a,b));return c}
function De(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ce={};var Ee=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Fe(a,b){ze.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Fe,ze);var Ge={2:"touch",3:"pen",4:"mouse"};
Fe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Jc){a:{try{Fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ge[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Fe.va.preventDefault.call(this)};
Fe.prototype.stopPropagation=function(){Fe.va.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Fe.prototype.preventDefault=function(){Fe.va.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var He="closure_listenable_"+(1E6*Math.random()|0);var Ie=0;function Je(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ic=e;this.key=++Ie;this.Pb=this.cc=!1}
function Ke(a){a.Pb=!0;a.listener=null;a.proxy=null;a.src=null;a.ic=null}
;function Le(a){this.src=a;this.listeners={};this.h=0}
Le.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Me(a,b,d,e);-1<g?(b=a[g],c||(b.cc=!1)):(b=new Je(b,this.src,f,!!d,e),b.cc=c,a.push(b));return b};
Le.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Me(e,b,c,d);return-1<b?(Ke(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ne(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Ke(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Me(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pb&&f.listener==b&&f.capture==!!c&&f.ic==d)return e}return-1}
;var Oe="closure_lm_"+(1E6*Math.random()|0),Pe={},Qe=0;function Re(a,b,c,d,e){if(d&&d.once)Se(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else c=Te(c),a&&a[He]?a.Ma(b,c,Ra(d)?!!d.capture:!!d,e):Ue(a,b,c,!1,d,e)}
function Ue(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Ve(a);h||(a[Oe]=h=new Le(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=We();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ee||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Xe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Qe++}}
function We(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ye;return a}
function Se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else c=Te(c),a&&a[He]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Ue(a,b,c,!0,d,e)}
function Ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ze(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Te(c),a&&a[He])?a.l.remove(String(b),c,d,e):a&&(a=Ve(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Me(b,c,d,e)),(c=-1<a?b[a]:null)&&$e(c))}
function $e(a){if("number"!==typeof a&&a&&!a.Pb){var b=a.src;if(b&&b[He])Ne(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Xe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Qe--;(c=Ve(b))?(Ne(c,a),0==c.h&&(c.src=null,b[Oe]=null)):Ke(a)}}}
function Xe(a){return a in Pe?Pe[a]:Pe[a]="on"+a}
function Ye(a,b){if(a.Pb)a=!0;else{b=new Fe(b,this);var c=a.listener,d=a.ic||a.src;a.cc&&$e(a);a=c.call(d,b)}return a}
function Ve(a){a=a[Oe];return a instanceof Le?a:null}
var af="__closure_events_fn_"+(1E9*Math.random()>>>0);function Te(a){if("function"===typeof a)return a;a[af]||(a[af]=function(b){return a.handleEvent(b)});
return a[af]}
;function gf(){J.call(this);this.l=new Le(this);this.Wd=this;this.Qa=null}
$a(gf,J);gf.prototype[He]=!0;gf.prototype.addEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
gf.prototype.removeEventListener=function(a,b,c,d){Ze(this,a,b,c,d)};
function hf(a,b){var c=a.Qa;if(c){var d=[];for(var e=1;c;c=c.Qa)d.push(c),++e}a=a.Wd;c=b.type||b;"string"===typeof b?b=new ze(b,a):b instanceof ze?b.target=b.target||a:(e=b,b=new ze(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=jf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=jf(g,c,!0,b)&&e,b.j||(e=jf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=jf(g,c,!1,b)&&e}
gf.prototype.M=function(){gf.va.M.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ke(d[e]);delete a.listeners[c];a.h--}}this.Qa=null};
gf.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function jf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pb&&g.capture==c){var h=g.listener,k=g.ic||g.src;g.cc&&Ne(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function kf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
kf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function lf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function mf(a,b){return a+Math.random()*(b-a)}
;function nf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=nf.prototype;l.clone=function(){return new nf(this.x,this.y)};
l.equals=function(a){return a instanceof nf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function of(a,b){this.width=a;this.height=b}
l=of.prototype;l.clone=function(){return new of(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Lb=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function pf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function qf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function rf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var sf;function tf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=qf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ed;c.ed=null;e()}};
return function(e){d.next={ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function uf(){this.i=this.h=null}
uf.prototype.add=function(a,b){var c=vf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
uf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var vf=new kf(function(){return new wf},function(a){return a.reset()});
function wf(){this.next=this.scope=this.h=null}
wf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
wf.prototype.reset=function(){this.next=this.scope=this.h=null};var xf,yf=!1,zf=new uf;function Af(a,b){xf||Bf();yf||(xf(),yf=!0);zf.add(a,b)}
function Bf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);xf=function(){a.then(Cf)}}else xf=function(){var b=Cf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!D("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(sf||(sf=tf()),sf(b)):y.setImmediate(b)}}
function Cf(){for(var a;a=zf.remove();){try{a.h.call(a.scope)}catch(b){Cc(b)}lf(vf,a)}yf=!1}
;function Df(a){this.h=0;this.H=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Ef(b,2,c)},function(c){Ef(b,3,c)})}catch(c){Ef(this,3,c)}}
function Ff(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Ff.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Gf=new kf(function(){return new Ff},function(a){a.reset()});
function Hf(a,b,c){var d=Gf.get();d.j=a;d.i=b;d.context=c;return d}
function If(a){return new Df(function(b,c){c(a)})}
Df.prototype.then=function(a,b,c){return Jf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Df.prototype.$goog_Thenable=!0;l=Df.prototype;l.tc=function(a,b){return Jf(this,null,a,b)};
l.catch=Df.prototype.tc;l.cancel=function(a){if(0==this.h){var b=new Kf(a);Af(function(){Lf(this,b)},this)}};
function Lf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Lf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Mf(c),Nf(c,e,3,b)))}a.j=null}else Ef(a,3,b)}
function Of(a,b){a.i||2!=a.h&&3!=a.h||Pf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Jf(a,b,c,d){var e=Hf(null,null,null);e.h=new Df(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Kf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Of(a,e);return e.h}
l.gf=function(a){this.h=0;Ef(this,2,a)};
l.hf=function(a){this.h=0;Ef(this,3,a)};
function Ef(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.gf,f=a.hf;if(d instanceof Df){Of(d,Hf(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){Qf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,Pf(a),3!=b||c instanceof Kf||Rf(a,c))}}
function Qf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Pf(a){a.s||(a.s=!0,Af(a.le,a))}
function Mf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.le=function(){for(var a;a=Mf(this);)Nf(this,a,this.h,this.H);this.s=!1};
function Nf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Sf(b,c,d);else try{b.l?b.j.call(b.context):Sf(b,c,d)}catch(e){Tf.call(null,e)}lf(Gf,b)}
function Sf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Rf(a,b){a.m=!0;Af(function(){a.m&&Tf.call(null,b)})}
var Tf=Cc;function Kf(a){bb.call(this,a)}
$a(Kf,bb);Kf.prototype.name="cancel";function Uf(a,b){gf.call(this);this.j=a||1;this.i=b||y;this.m=Xa(this.ef,this);this.s=Date.now()}
$a(Uf,gf);l=Uf.prototype;l.enabled=!1;l.za=null;function Vf(a,b){a.j=b;a.za&&a.enabled?(a.stop(),a.start()):a.za&&a.stop()}
l.ef=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.za=this.i.setTimeout(this.m,this.j-a):(this.za&&(this.i.clearTimeout(this.za),this.za=null),hf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.za||(this.za=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.za&&(this.i.clearTimeout(this.za),this.za=null)};
l.M=function(){Uf.va.M.call(this);this.stop();delete this.i};
function Wf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Xf(a){this.H=a;this.h=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Uf(this.flushInterval);this.i.Ma("tick",this.Cb,!1,this);this.m=!1}
l=Xf.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Yf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.Cb()}
l.Cb=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.qb.size});
a.length&&this.H.flush(a,this.m);Zf(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Zc=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new te(a,b))};
l.bd=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new ue(a,b))};
function $f(a,b){return a.s.has(b)?void 0:a.h.get(b)}
l.uc=function(a){this.Ud.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.Ud=function(a,b){var c=Ka.apply(2,arguments),d=$f(this,a);d&&d instanceof te&&(d.j(b,c),Yf(this))};
l.vc=function(a,b){var c=Ka.apply(2,arguments),d=$f(this,a);d&&d instanceof ue&&(d.j(b,c),Yf(this))};
function Zf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function ag(a){this.h=a;this.h.Zc("/client_streamz/bg/fiec",{Kb:3,Jb:"rk"},{Kb:2,Jb:"ec"})}
function bg(a,b,c){a.h.uc("/client_streamz/bg/fiec",b,c)}
function cg(a){this.h=a;this.h.bd("/client_streamz/bg/fil",{Kb:3,Jb:"rk"})}
function dg(a){this.h=a;this.h.Zc("/client_streamz/bg/fsc",{Kb:3,Jb:"rk"})}
function eg(a){this.h=a;this.h.bd("/client_streamz/bg/fsl",{Kb:3,Jb:"rk"})}
;var fg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function gg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=hg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=ig(a,h),d+=ig(a,h+4),e+=ig(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return fg.toString(e)}
function hg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function ig(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function jg(a){I.call(this,a)}
v(jg,I);var kg=[1,2,3];function lg(a){I.call(this,a)}
v(lg,I);var mg=[1,2,3];function ng(a){I.call(this,a,-1,og)}
v(ng,I);var og=[1];function pg(a){I.call(this,a,-1,qg)}
v(pg,I);var qg=[3,6,4];function rg(a){I.call(this,a,-1,sg)}
v(rg,I);var sg=[1];function tg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ug(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(q){for(var u=g,t=0;64>t;t+=4)u[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=u[t-3]^u[t-8]^u[t-14]^u[t-16],u[t]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],C=e[2],G=e[3],N=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var O=G^z&(C^G);var Q=1518500249}else O=z^C^G,Q=1859775393;else 60>t?(O=z&C|G&(z|C),Q=2400959708):(O=z^C^G,Q=3395469782);O=((q<<5|q>>>27)&4294967295)+O+N+Q+u[t]&4294967295;N=G;G=C;C=(z<<30|z>>>2)&4294967295;z=q;q=O}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+C&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+N&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],z=0,C=q.length;z<C;++z)t.push(q.charCodeAt(z));q=t}u||(u=q.length);t=0;if(0==m)for(;t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64;for(;t<u;)if(f[m++]=q[t++],n++,64==m)for(m=0,b(f);t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64}
function d(){var q=[],u=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=u&255,u>>>=8;b(f);for(t=u=0;5>t;t++)for(var z=24;0<=z;z-=8)q[u++]=e[t]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,he:function(){for(var q=d(),u="",t=0;t<q.length;t++)u+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return u}}}
;function vg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,wg(tg(d),a,c||null)].join(" "):null}
function wg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),xg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=xg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function xg(a){var b=ug();b.update(a);return b.he().toLowerCase()}
;var yg={};function zg(a){this.h=a||{cookie:""}}
l=zg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Lb())return!0;this.set("TESTCOOKIESENABLED","1",{lc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qt;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.lc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{lc:0,path:b,domain:c});return d};
l.Bc=function(){return Ag(this).keys};
l.Lb=function(){return!this.h.cookie};
l.clear=function(){for(var a=Ag(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Ag(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Bg=new zg("undefined"==typeof document?null:document);function Cg(a){return!!yg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Dg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Cg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new zg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Cg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Eg(a,b,c,d){(a=y[a])||(a=(new zg(document)).get(b));return a?vg(a,c,d):null}
function Fg(a,b){b=void 0===b?!1:b;var c=tg(String(y.location.href)),d=[];if(Dg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new zg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?vg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Cg(b)&&((b=Eg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Eg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Gg(a){I.call(this,a,-1,Hg)}
v(Gg,I);var Hg=[2];function Ig(a){this.h=this.i=this.j=a}
Ig.prototype.reset=function(){this.h=this.i=this.j};
Ig.prototype.getValue=function(){return this.i};function Jg(a){var b=[];Kg(new Lg,a,b);return b.join("")}
function Lg(){}
function Kg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Kg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Mg(d,c),c.push(":"),Kg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Mg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ng={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Og=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Mg(a,b){b.push('"',a.replace(Og,function(c){var d=Ng[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ng[c]=d);return d}),'"')}
;function Pg(){}
Pg.prototype.h=null;Pg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Qg(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Rg;function Sg(){}
$a(Sg,Pg);function Tg(a){return(a=Qg(a))?new ActiveXObject(a):new XMLHttpRequest}
function Qg(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Rg=new Sg;function Ug(a){gf.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.F=null;this.m=this.ia="";this.j=this.aa=this.v=this.Y=!1;this.s=0;this.L=null;this.Ba="";this.oa=this.qa=!1}
$a(Ug,gf);var Vg=/^https?$/i,Wg=["POST","PUT"],Xg=[];function Yg(a,b,c,d,e,f,g){var h=new Ug;Xg.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.ee,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
l=Ug.prototype;l.ee=function(){this.dispose();lb(Xg,this)};
l.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ia+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ia=a;this.m="";this.Y=!1;this.i=!0;this.F=this.V?Tg(this.V):Tg(Rg);this.R=this.V?this.V.getOptions():Rg.getOptions();this.F.onreadystatechange=Xa(this.Ad,this);try{this.getStatus(),this.aa=!0,this.F.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();Zg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(Wg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.Ba&&(this.F.responseType=this.Ba);"withCredentials"in this.F&&this.F.withCredentials!==this.qa&&(this.F.withCredentials=this.qa);try{$g(this),0<this.s&&(this.oa=ah(this.F),this.getStatus(),this.oa?(this.F.timeout=this.s,this.F.ontimeout=Xa(this.Nd,
this)):this.L=Wf(this.Nd,this.s,this)),this.getStatus(),this.v=!0,this.F.send(a),this.v=!1}catch(g){this.getStatus(),Zg(this,g)}};
function ah(a){return Hc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.Nd=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),hf(this,"timeout"),this.abort(8))};
function Zg(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;bh(a);ch(a)}
function bh(a){a.Y||(a.Y=!0,hf(a,"complete"),hf(a,"error"))}
l.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,hf(this,"complete"),hf(this,"abort"),ch(this))};
l.M=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),ch(this,!0));Ug.va.M.call(this)};
l.Ad=function(){this.h()||(this.aa||this.v||this.j?dh(this):this.Ie())};
l.Ie=function(){dh(this)};
function dh(a){if(a.i&&"undefined"!=typeof Oa)if(a.R[1]&&4==eh(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==eh(a))Wf(a.Ad,0,a);else if(hf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(fh(a))hf(a,"complete"),hf(a,"success");else{try{var b=2<eh(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";bh(a)}}finally{ch(a)}}}
function ch(a,b){if(a.F){$g(a);var c=a.F,d=a.R[0]?function(){}:null;
a.F=null;a.R=null;b||hf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function $g(a){a.F&&a.oa&&(a.F.ontimeout=null);a.L&&(y.clearTimeout(a.L),a.L=null)}
l.isActive=function(){return!!this.F};
l.isComplete=function(){return 4==eh(this)};
function fh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=mc(1,String(a.ia)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Vg.test(a?a.toLowerCase():"");c=b}return c}
function eh(a){return a.F?a.F.readyState:0}
l.getStatus=function(){try{return 2<eh(this)?this.F.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function gh(a){I.call(this,a,-1,hh)}
v(gh,I);var hh=[1];function ih(a){I.call(this,a)}
v(ih,I);var jh=["platform","platformVersion","architecture","model","uaFullVersion"];new gh;function be(a){I.call(this,a)}
v(be,I);function kh(a){I.call(this,a,31,lh)}
v(kh,I);var lh=[3,20,27];function mh(a){I.call(this,a,17,nh)}
v(mh,I);var nh=[3,5];function oh(a){I.call(this,a,6,ph)}
v(oh,I);var ph=[5];function qh(a){I.call(this,a)}
v(qh,I);var rh;rh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=Vd;this.defaultValue=void 0}(175237375,{Gt:0},qh);function sh(a,b,c,d,e,f,g,h,k,m,n){gf.call(this);var q=this;this.Y="";this.j=[];this.Xc="";this.Yc=this.eb=-1;this.Xb=!1;this.R=this.m=null;this.L=0;this.Xd=1;this.timeoutMillis=0;this.Ba=!1;gf.call(this);this.Yb=b||function(){};
this.v=new th(a,f);this.Vd=d;this.Wb=n;this.Yd=Za(mf,0,1);this.ia=e||null;this.V=c||null;this.oa=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Eb=f||!1;!this.Eb&&(65<=bc("Chromium")||45<=bc("Firefox")||12<=bc("Safari")||(Dc()||D("iPad")||D("iPod"))&&Ec());a=ae();uh(this.v,a);this.s=new Ig(1E4);this.i=new Uf(this.s.getValue());xe(this,this.i);m=xh(this,m);Re(this.i,"tick",m,!1,this);this.aa=new Uf(6E5);xe(this,this.aa);Re(this.aa,"tick",m,!1,this);this.oa||this.aa.start();
this.Eb||(Re(document,"visibilitychange",function(){"hidden"===document.visibilityState&&q.qa()}),Re(document,"pagehide",this.qa,!1,this))}
v(sh,gf);function xh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
sh.prototype.M=function(){this.qa();gf.prototype.M.call(this)};
function yh(a){a.ia||(a.ia=.01>a.Yd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ia}
function zh(a,b){a.s=new Ig(1>b?1:b);Vf(a.i,a.s.getValue())}
sh.prototype.log=function(a){a=a.clone();var b=this.Xd++;E(a,21,b);this.Y&&E(a,26,this.Y);if(!Ld(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null==Ld(a,15)&&E(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),F(a,Gg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.L;this.j.push(a);hf(this,new Ah(a));this.oa||this.i.enabled||this.i.start()};
sh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.Ba)Bh(this);else{var d=Date.now();if(this.Yc>d&&this.eb<d)b&&b("throttled");else{var e=Ch(this.v,this.j,this.L);d={};var f=this.Yb();f&&(d.Authorization=f);var g=yh(this);this.V&&(d["X-Goog-AuthUser"]=this.V,g=xc(g,"authuser",this.V));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Xc===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.L=0;var h=pe(e),
k;this.R&&this.R.isSupported(h.length)&&(k=this.R.compress(h));var m={url:g,body:h,ce:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(t){c.s.reset();Vf(c.i,c.s.getValue());if(t){var z=null;try{var C=JSON.parse(t.replace(")]}'\n",""));z=new oh(C)}catch(G){}z&&(t=Number(ce(Ld(z,1),"-1")),0<t&&(c.eb=Date.now(),c.Yc=c.eb+t),z=rh.h?rh.j(z,rh.h,rh.i,!0):rh.j(z,rh.i,rh.defaultValue,!0))&&(z=ce(Ld(z,1),-1),-1!=z&&(c.Xb||zh(c,z)))}a&&a()},q=function(t,
z){var C=xd(e.N),G=Xd(e,kh,3,C,C),N=Sd(e,3,3,void 0,C);
if(!(C||td(N)&8)){for(C=0;C<G.length;C++){var O=G[C],Q=Wd(O);O!==Q&&(G[C]=Q,N[C]=Q.N)}rd(N,8)}N=c.s;N.h=Math.min(3E5,2*N.h);N.i=Math.min(3E5,N.h+Math.round(.2*(Math.random()-.5)*N.h));Vf(c.i,c.s.getValue());401===t&&f&&(c.Xc=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=G.concat(c.j),c.oa||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},u=function(){c.Wb?c.Wb.send(m,n,q):c.Vd(m,n,q)};
k?k.then(function(t){m.Oc["Content-Encoding"]="gzip";m.Oc["Content-Type"]="application/binary";m.body=t;m.ce=2;u()},function(){u()}):u()}}}};
sh.prototype.qa=function(){this.flush()};
function Bh(a){Dh(a,function(b,c){b=xc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,pe(c))}catch(e){}a.Ba&&!d&&(a.Ba=!1);return d})}
function Dh(a,b){if(0!==a.j.length){var c=Bc(yh(a),"format");c=vc(c,"auth",a.Yb(),"authuser",a.V||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Ch(a.v,e,a.L);if(!b(c,f))break;a.L=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Ah(){ze.call(this,"event-logged",void 0)}
v(Ah,ze);function th(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new mh;E(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));uh(this,new be)}
function uh(a,b){F(a.h,be,1,b);Ld(b,1)||E(b,1,1);a.i||(b=Eh(a),Ld(b,5)||E(b,5,a.locale));a.uach&&(b=Eh(a),Vd(b,gh,9)||F(b,gh,9,a.uach))}
function Fh(a,b){var c=void 0===c?jh:c;b(window,c).then(function(d){a.uach=d;d=Eh(a);F(d,gh,9,a.uach);return!0}).catch(function(){return!1})}
function Eh(a){a=Vd(a.h,be,1);var b=Vd(a,ih,11);b||(b=new ih,F(a,ih,11,b));return b}
function Ch(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=E(a,4,d);b=Zd(a,kh,3,b);c&&E(b,14,c);return b}
;function Gh(a,b,c){Yg(a.url,function(d){d=d.target;if(fh(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)}
;function Hh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.v=!1;this.m=Gh;this.h=""}
;function Ih(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Hh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new sh(1828,c.R?c.R:Fg,"0",c.m,c.j,c.v,!1,c.aa,void 0,void 0,c.s?c.s:void 0);c.Z&&uh(a.v,c.Z);if(c.i){b=c.i;var d=Eh(a.v);E(d,7,b)}c.l&&(a.R=c.l);c.h&&(a.Y=c.h);c.H&&((b=c.H)?(a.m||(a.m=new Gg),b=pe(b),E(a.m,4,b)):a.m&&E(a.m,4,void 0,!1));c.V&&(d=c.V,a.m||(a.m=new Gg),b=a.m,d=null==d?Dd:sd(d,1),E(b,2,d));c.L&&(b=c.L,a.Xb=!0,zh(a,b));c.Y&&Fh(a.v,c.Y);this.h=a}
Ih.prototype.flush=function(a){var b=a||[];if(b.length){a=new rg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new pg;var h=E(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Jb);if(null==g)g=E(h,3,Dd);else{k=td(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];ud(g,k|5)}g=E(h,3,g)}h=[];k=[];m=r(f.qb.keys());for(var n=m.next();!n.done;n=m.next())k.push(n.value.split(","));for(m=0;m<k.length;m++){n=k[m];var q=f.l;for(var u=
f.yc(n)||[],t=[],z=0;z<u.length;z++){var C=u[z];C=C&&C.fd;var G=new lg;switch(q){case 3:Td(G,1,mg,Number(C));break;case 2:Td(G,2,mg,Hd(Number(C)))}t.push(G)}q=t;for(u=0;u<q.length;u++){t=q[u];z=new ng;t=F(z,lg,2,t);z=n;C=[];G=f;for(var N=[],O=0;O<G.h.length;O++)N.push(G.h[O].Kb);G=N;for(N=0;N<G.length;N++){O=G[N];var Q=z[N],aa=new jg;switch(O){case 3:Td(aa,1,kg,String(Q));break;case 2:Td(aa,2,kg,Number(Q));break;case 1:Td(aa,3,kg,"true"==Q)}C.push(aa)}Zd(t,jg,1,C);h.push(t)}}Zd(g,ng,4,h);c.push(g);
e.clear()}Zd(a,pg,1,c);b=this.h;a instanceof kh?b.log(a):(c=new kh,a=pe(a),a=E(c,8,a),b.log(a));this.h.flush()}};function Jh(a){this.H=Kh();this.m=new Ih;this.h=new Xf(this.m);this.s=new cg(this.h);this.j=new dg(this.h);this.l=new eg(this.h);this.i=new ag(this.h);this.Oa=gg(a)}
function Kh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Lh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Mh(a){var b=this;this.i=!1;var c=a.program;var d=a.se;if(a.Me){var e;this.ra=null!=(e=a.ra)?e:new Jh(d)}var f=new Lh;this.j=f.promise;if(y[d])if(y[d].a){var g;null!=(g=this.ra)&&bg(g.i,g.Oa,3)}else{var h;null!=(h=this.ra)&&bg(h.i,h.Oa,2);var k;null!=(k=this.ra)&&k.h.Cb()}else{var m;null!=(m=this.ra)&&bg(m.i,m.Oa,1);var n;null!=(n=this.ra)&&n.h.Cb()}this.l=r((0,y[d].a)(c,function(q,u){Promise.resolve().then(function(){var t;if(null!=(t=b.ra)){var z=Kh()-t.H;t.s.h.vc("/client_streamz/bg/fil",
z,t.Oa)}f.resolve({ae:q,af:u})})},!0)).next().value;
this.Ze=f.promise.then(function(){})}
Mh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Kh(),d;null!=(d=this.ra)&&d.j.h.uc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.ae;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ra)){var m=Kh()-c;k.l.h.vc("/client_streamz/bg/fsl",m,k.Oa)}g(h)},[a.hd,
a.bf])})})};
Mh.prototype.Kd=function(a){if(this.i)throw Error("Already disposed");var b=Kh(),c;null!=(c=this.ra)&&c.j.h.uc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.hd,a.bf]);null!=(c=this.ra)&&(b=Kh()-b,c.l.h.vc("/client_streamz/bg/fsl",b,c.Oa));return a};
Mh.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.h.Cb();this.i=!0;this.j.then(function(b){(b=b.af)&&b()})};
Mh.prototype.h=function(){return this.i};var Nh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Oh;try{new URL("s://g"),Oh=!0}catch(a){Oh=!1}var Ph=Oh;var Qh={};function Rh(){}
function Sh(a){this.h=a}
v(Sh,Rh);Sh.prototype.toString=function(){return this.h};function Th(a){var b="true".toString(),c=[new Sh(Uh[0].toLowerCase(),Qh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Sh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Vh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Wh(a,b){a.src=Ib(b);Vh(a)}
;function Xh(a){this.Ae=a}
function Yh(a){return new Xh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Zh=[Yh("data"),Yh("http"),Yh("https"),Yh("mailto"),Yh("ftp"),new Xh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function $h(a){var b=ai;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function bi(){var a=[];$h(function(b){a.push(b)});
return a}
var ai={wf:"allow-forms",xf:"allow-modals",yf:"allow-orientation-lock",zf:"allow-pointer-lock",Af:"allow-popups",Bf:"allow-popups-to-escape-sandbox",Cf:"allow-presentation",Df:"allow-same-origin",Ef:"allow-scripts",Ff:"allow-top-navigation",Gf:"allow-top-navigation-by-user-activation"},ci=eb(function(){return bi()});
function di(){var a=ei(),b={};gb(ci(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ei(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function fi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var gi=(new Date).getTime();var hi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(hi);"undefined"!==typeof TextDecoder&&new TextDecoder;var ii="undefined"!==typeof TextEncoder?new TextEncoder:null,ji=ii?function(a){return ii.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ki(a){gf.call(this);var b=this;this.v=this.j=0;this.ya=null!=a?a:{fa:function(e,f){return setTimeout(e,f)},
Da:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,li(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||mi(this)}
v(ki,gf);function ni(){var a=oi;ki.h||(ki.h=new ki(a));return ki.h}
ki.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.ya.Da(this.v);delete ki.h};
ki.prototype.ma=function(){return this.i};
function mi(a){a.v=a.ya.fa(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):w(c,li(a),3):w(c,li(a),3);mi(a);c.h=0})},3E4)}
function li(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.ya.fa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.ya.Da(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?hf(a,"networkstatus-online"):hf(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function pi(){this.data_=[];this.h=-1}
pi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
pi.prototype.get=function(a){return!!this.data_[a]};
function qi(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ri(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
ri.prototype[Symbol.iterator]=function(){return this};
ri.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function si(a,b){return new ri(a,b)}
;function ti(){this.blockSize=-1}
;function ui(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(ui,ti);ui.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function vi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ui.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)vi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vi(this,e);f=0;break}}this.i=f;this.l+=b}};
ui.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;vi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function wi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function zi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yi(a,"inverted-hdpi")&&xi(a,Array.prototype.filter.call(a.classList?a.classList:wi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ai(){}
Ai.prototype.next=function(){return Bi};
var Bi={done:!0,value:void 0};function Ci(a){return{value:a,done:!1}}
Ai.prototype.Ca=function(){return this};function Di(a){if(a instanceof Ei||a instanceof Fi||a instanceof Gi)return a;if("function"==typeof a.next)return new Ei(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ei(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ca)return new Ei(function(){return a.Ca()});
throw Error("Not an iterator or iterable.");}
function Ei(a){this.i=a}
Ei.prototype.Ca=function(){return new Fi(this.i())};
Ei.prototype[Symbol.iterator]=function(){return new Gi(this.i())};
Ei.prototype.h=function(){return new Gi(this.i())};
function Fi(a){this.i=a}
v(Fi,Ai);Fi.prototype.next=function(){return this.i.next()};
Fi.prototype[Symbol.iterator]=function(){return new Gi(this.i)};
Fi.prototype.h=function(){return new Gi(this.i)};
function Gi(a){Ei.call(this,function(){return a});
this.j=a}
v(Gi,Ei);Gi.prototype.next=function(){return this.j.next()};function Hi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hi)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Hi.prototype;l.Bc=function(){Ii(this);return this.h.concat()};
l.has=function(a){return Ji(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ki;Ii(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ki(a,b){return a===b}
l.Lb=function(){return 0==this.size};
l.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Ji(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ii(this),!0):!1};
function Ii(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ji(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ji(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Ji(this.i,a)?this.i[a]:b};
l.set=function(a,b){Ji(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Hi(this)};
l.keys=function(){return Di(this.Ca(!0)).h()};
l.values=function(){return Di(this.Ca(!1)).h()};
l.entries=function(){var a=this;return si(this.keys(),function(b){return[b,a.get(b)]})};
l.Ca=function(a){Ii(this);var b=0,c=this.Xa,d=this,e=new Ai;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Bi;var f=d.h[b++];return Ci(a?f:d.i[f])};
return e};
function Ji(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Li(a){J.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
$a(Li,J);l=Li.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Mi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Db(b)}}
l.Db=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Ni(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Db(c)}}return 0!=e}return!1};
function Ni(a,b,c){Af(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Db,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.M=function(){Li.va.M.call(this);this.clear();this.l.length=0};function Oi(a){this.h=a}
Oi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Jg(b))};
Oi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Oi.prototype.remove=function(a){this.h.remove(a)};function Pi(a){this.h=a}
$a(Pi,Oi);function Qi(a){this.data=a}
function Ri(a){return void 0===a||a instanceof Qi?a:new Qi(a)}
Pi.prototype.set=function(a,b){Pi.va.set.call(this,a,Ri(b))};
Pi.prototype.i=function(a){a=Pi.va.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pi.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Si(a){this.h=a}
$a(Si,Pi);Si.prototype.set=function(a,b,c){if(b=Ri(b)){if(c){if(c<Date.now()){Si.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Si.va.set.call(this,a,b)};
Si.prototype.i=function(a){var b=Si.va.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Si.prototype.remove.call(this,a);else return b}};function Ti(){}
;function Ui(){}
$a(Ui,Ti);Ui.prototype[Symbol.iterator]=function(){return Di(this.Ca(!0)).h()};
Ui.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Vi(a){this.h=a}
$a(Vi,Ui);l=Vi.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Ca=function(a){var b=0,c=this.h,d=new Ai;d.next=function(){if(b>=c.length)return Bi;var e=c.key(b++);if(a)return Ci(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ci(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Wi(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(Wi,Vi);function Xi(a,b){this.i=a;this.h=null;var c;if(c=Hc)c=!(9<=Number(Xc));if(c){Yi||(Yi=new Hi);this.h=Yi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Yi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(Xi,Ui);var Zi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yi=null;function $i(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Zi[b]})}
l=Xi.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute($i(a),b);aj(this)};
l.get=function(a){a=this.h.getAttribute($i(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute($i(a));aj(this)};
l.Ca=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ai;d.next=function(){if(b>=c.length)return Bi;var e=c[b++];if(a)return Ci(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ci(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);aj(this)};
function aj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function bj(a,b){this.i=a;this.h=b+"::"}
$a(bj,Ui);bj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bj.prototype.get=function(a){return this.i.get(this.h+a)};
bj.prototype.remove=function(a){this.i.remove(this.h+a)};
bj.prototype.Ca=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ai;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ci(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},cj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var dj={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ej={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
K.Ye=function(){cj?(K.bb=Uint8Array,K.Ga=Uint16Array,K.Td=Int32Array,K.assign(K,dj)):(K.bb=Array,K.Ga=Array,K.Td=Array,K.assign(K,ej))};
K.Ye();var fj=!0;try{new Uint8Array(1)}catch(a){fj=!1}for(var gj=new K.bb(256),hj=0;256>hj;hj++)gj[hj]=252<=hj?6:248<=hj?5:240<=hj?4:224<=hj?3:192<=hj?2:1;gj[254]=gj[254]=1;
function ij(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.bb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var jj={};jj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var kj={},lj,mj=[],nj=0;256>nj;nj++){lj=nj;for(var oj=0;8>oj;oj++)lj=lj&1?3988292384^lj>>>1:lj>>>1;mj[nj]=lj}kj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^mj[(a^b[d])&255];return a^-1};var pj={};pj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function qj(a){for(var b=a.length;0<=--b;)a[b]=0}
var rj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],sj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],uj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],vj=Array(576);qj(vj);var wj=Array(60);qj(wj);var xj=Array(512);qj(xj);var yj=Array(256);qj(yj);var zj=Array(29);qj(zj);var Aj=Array(30);qj(Aj);function Bj(a,b,c,d,e){this.Ld=a;this.ne=b;this.me=c;this.ie=d;this.Ee=e;this.rd=a&&a.length}
var Cj,Dj,Ej;function Fj(a,b){this.ld=a;this.wb=0;this.Wa=b}
function Gj(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function Hj(a,b,c){a.ba>16-c?(a.ha|=b<<a.ba&65535,Gj(a,a.ha),a.ha=b>>16-a.ba,a.ba+=c-16):(a.ha|=b<<a.ba&65535,a.ba+=c)}
function Ij(a,b,c){Hj(a,c[2*b],c[2*b+1])}
function Jj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Kj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Jj(d[e]++,e))}
function Lj(a){var b;for(b=0;286>b;b++)a.ja[2*b]=0;for(b=0;30>b;b++)a.gb[2*b]=0;for(b=0;19>b;b++)a.ca[2*b]=0;a.ja[512]=1;a.Na=a.zb=0;a.sa=a.matches=0}
function Mj(a){8<a.ba?Gj(a,a.ha):0<a.ba&&(a.S[a.pending++]=a.ha);a.ha=0;a.ba=0}
function Nj(a,b,c){Mj(a);Gj(a,c);Gj(a,~c);K.pb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Oj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Pj(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Oj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Oj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Qj(a,b,c){var d=0;if(0!==a.sa){do{var e=a.S[a.Gb+2*d]<<8|a.S[a.Gb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)Ij(a,f,b);else{var g=yj[f];Ij(a,g+256+1,b);var h=rj[g];0!==h&&(f-=zj[g],Hj(a,f,h));e--;g=256>e?xj[e]:xj[256+(e>>>7)];Ij(a,g,c);h=sj[g];0!==h&&(e-=Aj[g],Hj(a,e,h))}}while(d<a.sa)}Ij(a,256,b)}
function Rj(a,b){var c=b.ld,d=b.Wa.Ld,e=b.Wa.rd,f=b.Wa.ie,g,h=-1;a.Ka=0;a.tb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var k=a.U[++a.Ka]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.wb=h;for(g=a.Ka>>1;1<=g;g--)Pj(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ka--],Pj(a,c,1),d=a.U[1],a.U[--a.tb]=g,a.U[--a.tb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,Pj(a,c,1);while(2<=a.Ka);a.U[--a.tb]=
a.U[1];g=b.ld;k=b.wb;d=b.Wa.Ld;e=b.Wa.rd;f=b.Wa.ne;var m=b.Wa.me,n=b.Wa.Ee,q,u=0;for(q=0;15>=q;q++)a.Ha[q]=0;g[2*a.U[a.tb]+1]=0;for(b=a.tb+1;573>b;b++){var t=a.U[b];q=g[2*g[2*t+1]+1]+1;q>n&&(q=n,u++);g[2*t+1]=q;if(!(t>k)){a.Ha[q]++;var z=0;t>=m&&(z=f[t-m]);var C=g[2*t];a.Na+=C*(q+z);e&&(a.zb+=C*(d[2*t+1]+z))}}if(0!==u){do{for(q=n-1;0===a.Ha[q];)q--;a.Ha[q]--;a.Ha[q+1]+=2;a.Ha[n]--;u-=2}while(0<u);for(q=n;0!==q;q--)for(t=a.Ha[q];0!==t;)d=a.U[--b],d>k||(g[2*d+1]!==q&&(a.Na+=(q-g[2*d+1])*g[2*d],g[2*
d+1]=q),t--)}Kj(c,h,a.Ha)}
function Sj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<k?a.ca[2*m]+=g:0!==m?(m!==e&&a.ca[2*m]++,a.ca[32]++):10>=g?a.ca[34]++:a.ca[36]++,g=0,e=m,0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4))}}
function Tj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<k){do Ij(a,m,a.ca);while(0!==--g)}else 0!==m?(m!==e&&(Ij(a,m,a.ca),g--),Ij(a,16,a.ca),Hj(a,g-3,2)):10>=g?(Ij(a,17,a.ca),Hj(a,g-3,3)):(Ij(a,18,a.ca),Hj(a,g-11,7));g=0;e=m;0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4)}}}
function Uj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ja[2*c])return 0;if(0!==a.ja[18]||0!==a.ja[20]||0!==a.ja[26])return 1;for(c=32;256>c;c++)if(0!==a.ja[2*c])return 1;return 0}
var Vj=!1;function Wj(a,b,c){a.S[a.Gb+2*a.sa]=b>>>8&255;a.S[a.Gb+2*a.sa+1]=b&255;a.S[a.Gc+a.sa]=c&255;a.sa++;0===b?a.ja[2*c]++:(a.matches++,b--,a.ja[2*(yj[c]+256+1)]++,a.gb[2*(256>b?xj[b]:xj[256+(b>>>7)])]++);return a.sa===a.Mb-1}
;function Xj(a,b){a.msg=pj[b];return b}
function Yj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Zj(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(K.pb(a.Nb,b.S,b.Ob,c,a.xb),a.xb+=c,b.Ob+=c,a.Sc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Ob=0))}
function ak(a,b){var c=0<=a.la?a.la:-1,d=a.o-a.la,e=0;if(0<a.level){2===a.D.wc&&(a.D.wc=Uj(a));Rj(a,a.kc);Rj(a,a.fc);Sj(a,a.ja,a.kc.wb);Sj(a,a.gb,a.fc.wb);Rj(a,a.cd);for(e=18;3<=e&&0===a.ca[2*uj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Hj(a,b?1:0,3),Nj(a,c,d);else if(4===a.strategy||g===f)Hj(a,2+(b?1:0),3),Qj(a,vj,wj);else{Hj(a,4+(b?1:0),3);c=a.kc.wb+1;d=a.fc.wb+1;e+=1;Hj(a,c-257,5);Hj(a,d-1,5);Hj(a,e-4,4);for(f=0;f<e;f++)Hj(a,a.ca[2*
uj[f]+1],3);Tj(a,a.ja,c-1);Tj(a,a.gb,d-1);Qj(a,a.ja,a.gb)}Lj(a);b&&Mj(a);a.la=a.o;Zj(a.D)}
function L(a,b){a.S[a.pending++]=b}
function bk(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function ck(a,b){var c=a.xd,d=a.o,e=a.na,f=a.zd,g=a.o>a.ea-262?a.o-(a.ea-262):0,h=a.window,k=a.Ya,m=a.Fa,n=a.o+258,q=h[d+e-1],u=h[d+e];a.na>=a.qd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===u&&h[t+e-1]===q&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.vb=b;e=t;if(t>=f)break;q=h[d+e-1];u=h[d+e]}}}while((b=m[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function dk(a){var b=a.ea,c;do{var d=a.Rd-a.u-a.o;if(a.o>=b+(b-262)){K.pb(a.window,a.window,b,b,0);a.vb-=b;a.o-=b;a.la-=b;var e=c=a.jc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.ga)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.ga;g>d&&(g=d);0===g?c=0:(e.ga-=g,K.pb(c,e.input,e.jb,g,f),1===e.state.wrap?e.C=jj(e.C,c,g,f):2===e.state.wrap&&(e.C=kj(e.C,c,g,f)),e.jb+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.ka)for(d=a.o-a.ka,a.G=a.window[d],
a.G=(a.G<<a.Ja^a.window[d+1])&a.Ia;a.ka&&!(a.G=(a.G<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ya]=a.head[a.G],a.head[a.G]=d,d++,a.ka--,3>a.u+a.ka););}while(262>a.u&&0!==a.D.ga)}
function ek(a,b){for(var c;;){if(262>a.u){dk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);0!==c&&a.o-c<=a.ea-262&&(a.J=ck(a,c));if(3<=a.J)if(c=Wj(a,a.o-a.vb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.G=a.window[a.o],a.G=(a.G<<a.Ja^a.window[a.o+1])&a.Ia;else c=Wj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(ak(a,!1),0===a.D.I))return 1}a.ka=2>a.o?a.o:2;return 4===b?(ak(a,!0),0===a.D.I?3:4):a.sa&&(ak(a,!1),0===a.D.I)?1:2}
function fk(a,b){for(var c,d;;){if(262>a.u){dk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);a.na=a.J;a.Cd=a.vb;a.J=2;0!==c&&a.na<a.Hc&&a.o-c<=a.ea-262&&(a.J=ck(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.vb)&&(a.J=2));if(3<=a.na&&a.J<=a.na){d=a.o+a.u-3;c=Wj(a,a.o-1-a.Cd,a.na-3);a.u-=a.na-1;a.na-=2;do++a.o<=d&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);
while(0!==--a.na);a.hb=0;a.J=2;a.o++;if(c&&(ak(a,!1),0===a.D.I))return 1}else if(a.hb){if((c=Wj(a,0,a.window[a.o-1]))&&ak(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Wj(a,0,a.window[a.o-1]),a.hb=0);a.ka=2>a.o?a.o:2;return 4===b?(ak(a,!0),0===a.D.I?3:4):a.sa&&(ak(a,!1),0===a.D.I)?1:2}
function gk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){dk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Wj(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Wj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(ak(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(ak(a,!0),0===a.D.I?3:4):
a.sa&&(ak(a,!1),0===a.D.I)?1:2}
function hk(a,b){for(var c;;){if(0===a.u&&(dk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Wj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(ak(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(ak(a,!0),0===a.D.I?3:4):a.sa&&(ak(a,!1),0===a.D.I)?1:2}
function ik(a,b,c,d,e){this.te=a;this.De=b;this.He=c;this.Ce=d;this.pe=e}
var jk;jk=[new ik(0,0,0,0,function(a,b){var c=65535;for(c>a.ta-5&&(c=a.ta-5);;){if(1>=a.u){dk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.la+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,ak(a,!1),0===a.D.I)return 1;if(a.o-a.la>=a.ea-262&&(ak(a,!1),0===a.D.I))return 1}a.ka=0;if(4===b)return ak(a,!0),0===a.D.I?3:4;a.o>a.la&&ak(a,!1);return 1}),
new ik(4,4,8,4,ek),new ik(4,5,16,8,ek),new ik(4,6,32,32,ek),new ik(4,4,16,16,fk),new ik(8,16,32,32,fk),new ik(8,16,128,128,fk),new ik(8,32,128,256,fk),new ik(32,128,258,1024,fk),new ik(32,258,258,4096,fk)];
function kk(){this.D=null;this.status=0;this.S=null;this.wrap=this.pending=this.Ob=this.ta=0;this.B=null;this.wa=0;this.method=8;this.ub=-1;this.Ya=this.Uc=this.ea=0;this.window=null;this.Rd=0;this.head=this.Fa=null;this.zd=this.qd=this.strategy=this.level=this.Hc=this.xd=this.na=this.u=this.vb=this.o=this.hb=this.Cd=this.J=this.la=this.Ja=this.Ia=this.Cc=this.jc=this.G=0;this.ja=new K.Ga(1146);this.gb=new K.Ga(122);this.ca=new K.Ga(78);Yj(this.ja);Yj(this.gb);Yj(this.ca);this.cd=this.fc=this.kc=
null;this.Ha=new K.Ga(16);this.U=new K.Ga(573);Yj(this.U);this.tb=this.Ka=0;this.depth=new K.Ga(573);Yj(this.depth);this.ba=this.ha=this.ka=this.matches=this.zb=this.Na=this.Gb=this.sa=this.Mb=this.Gc=0}
function lk(a,b){if(!a||!a.state||5<b||0>b)return a?Xj(a,-2):-2;var c=a.state;if(!a.Nb||!a.input&&0!==a.ga||666===c.status&&4!==b)return Xj(a,0===a.I?-5:-2);c.D=a;var d=c.ub;c.ub=b;if(42===c.status)if(2===c.wrap)a.C=0,L(c,31),L(c,139),L(c,8),c.B?(L(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),L(c,c.B.time&255),L(c,c.B.time>>8&255),L(c,c.B.time>>16&255),L(c,c.B.time>>24&255),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&(L(c,
c.B.Sa.length&255),L(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.C=kj(a.C,c.S,c.pending,0)),c.wa=0,c.status=69):(L(c,0),L(c,0),L(c,0),L(c,0),L(c,0),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;bk(c,e+(31-e%31));0!==c.o&&(bk(c,a.C>>>16),bk(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.wa<(c.B.Sa.length&65535)&&(c.pending!==c.ta||(c.B.Ta&&c.pending>
e&&(a.C=kj(a.C,c.S,c.pending-e,e)),Zj(a),e=c.pending,c.pending!==c.ta));)L(c,c.B.Sa[c.wa]&255),c.wa++;c.B.Ta&&c.pending>e&&(a.C=kj(a.C,c.S,c.pending-e,e));c.wa===c.B.Sa.length&&(c.wa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.ta&&(c.B.Ta&&c.pending>e&&(a.C=kj(a.C,c.S,c.pending-e,e)),Zj(a),e=c.pending,c.pending===c.ta)){var f=1;break}f=c.wa<c.B.name.length?c.B.name.charCodeAt(c.wa++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=kj(a.C,c.S,c.pending-
e,e));0===f&&(c.wa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.ta&&(c.B.Ta&&c.pending>e&&(a.C=kj(a.C,c.S,c.pending-e,e)),Zj(a),e=c.pending,c.pending===c.ta)){f=1;break}f=c.wa<c.B.comment.length?c.B.comment.charCodeAt(c.wa++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=kj(a.C,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.ta&&Zj(a),c.pending+2<=c.ta&&(L(c,a.C&255),L(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Zj(a),0===a.I)return c.ub=-1,0}else if(0===a.ga&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Xj(a,-5);if(666===c.status&&0!==a.ga)return Xj(a,-5);if(0!==a.ga||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?hk(c,b):3===c.strategy?gk(c,b):jk[c.level].pe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.ub=-1),0;if(2===d&&(1===b?(Hj(c,2,3),Ij(c,256,vj),16===c.ba?(Gj(c,c.ha),c.ha=0,c.ba=0):8<=c.ba&&(c.S[c.pending++]=c.ha&255,
c.ha>>=8,c.ba-=8)):5!==b&&(Hj(c,0,3),Nj(c,0,0),3===b&&(Yj(c.head),0===c.u&&(c.o=0,c.la=0,c.ka=0))),Zj(a),0===a.I))return c.ub=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(L(c,a.C&255),L(c,a.C>>8&255),L(c,a.C>>16&255),L(c,a.C>>24&255),L(c,a.mb&255),L(c,a.mb>>8&255),L(c,a.mb>>16&255),L(c,a.mb>>24&255)):(bk(c,a.C>>>16),bk(c,a.C&65535));Zj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var mk={};mk=function(){this.input=null;this.mb=this.ga=this.jb=0;this.Nb=null;this.Sc=this.I=this.xb=0;this.msg="";this.state=null;this.wc=2;this.C=0};var nk=Object.prototype.toString;
function ok(a){if(!(this instanceof ok))return new ok(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,Za:15,Fe:8,strategy:0,K:""},a||{});a.raw&&0<a.Za?a.Za=-a.Za:a.ue&&0<a.Za&&16>a.Za&&(a.Za+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new mk;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Za,f=a.Fe,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Xj(b,-2);else{8===e&&(e=9);var k=new kk;
b.state=k;k.D=b;k.wrap=h;k.B=null;k.Uc=e;k.ea=1<<k.Uc;k.Ya=k.ea-1;k.Cc=f+7;k.jc=1<<k.Cc;k.Ia=k.jc-1;k.Ja=~~((k.Cc+3-1)/3);k.window=new K.bb(2*k.ea);k.head=new K.Ga(k.jc);k.Fa=new K.Ga(k.ea);k.Mb=1<<f+6;k.ta=4*k.Mb;k.S=new K.bb(k.ta);k.Gb=1*k.Mb;k.Gc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Sc=0;b.wc=2;c=b.state;c.pending=0;c.Ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.ub=0;if(!Vj){d=Array(16);for(f=g=0;28>f;f++)for(zj[f]=g,e=0;e<1<<rj[f];e++)yj[g++]=
f;yj[g-1]=f;for(f=g=0;16>f;f++)for(Aj[f]=g,e=0;e<1<<sj[f];e++)xj[g++]=f;for(g>>=7;30>f;f++)for(Aj[f]=g<<7,e=0;e<1<<sj[f]-7;e++)xj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)vj[2*e+1]=8,e++,d[8]++;for(;255>=e;)vj[2*e+1]=9,e++,d[9]++;for(;279>=e;)vj[2*e+1]=7,e++,d[7]++;for(;287>=e;)vj[2*e+1]=8,e++,d[8]++;Kj(vj,287,d);for(e=0;30>e;e++)wj[2*e+1]=5,wj[2*e]=Jj(e,5);Cj=new Bj(vj,rj,257,286,15);Dj=new Bj(wj,sj,0,30,15);Ej=new Bj([],tj,0,19,7);Vj=!0}c.kc=new Fj(c.ja,Cj);c.fc=new Fj(c.gb,Dj);c.cd=
new Fj(c.ca,Ej);c.ha=0;c.ba=0;Lj(c);c=0}else c=Xj(b,-2);0===c&&(b=b.state,b.Rd=2*b.ea,Yj(b.head),b.Hc=jk[b.level].De,b.qd=jk[b.level].te,b.zd=jk[b.level].He,b.xd=jk[b.level].Ce,b.o=0,b.la=0,b.u=0,b.ka=0,b.J=b.na=2,b.hb=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(pj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Hb){var m;"string"===typeof a.Hb?m=ij(a.Hb):"[object ArrayBuffer]"===nk.call(a.Hb)?m=new Uint8Array(a.Hb):m=a.Hb;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=jj(a.C,f,g,0));m.wrap=0;g>=m.ea&&(0===b&&(Yj(m.head),m.o=0,m.la=0,m.ka=0),c=new K.bb(m.ea),K.pb(c,f,g-m.ea,m.ea,0),f=c,g=m.ea);c=a.ga;d=a.jb;e=a.input;a.ga=g;a.jb=0;a.input=f;for(dk(m);3<=m.u;){f=m.o;g=m.u-2;do m.G=(m.G<<m.Ja^m.window[f+3-1])&m.Ia,m.Fa[f&m.Ya]=m.head[m.G],m.head[m.G]=f,f++;while(--g);m.o=f;m.u=2;dk(m)}m.o+=m.u;m.la=m.o;m.ka=m.u;m.u=0;m.J=m.na=2;m.hb=0;a.jb=d;a.input=e;a.ga=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(pj[b]);
this.ut=!0}}
ok.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=ij(a):"[object ArrayBuffer]"===nk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ga=c.input.length;do{0===c.I&&(c.Nb=new K.bb(d),c.xb=0,c.I=d);a=lk(c,e);if(1!==a&&0!==a)return pk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ga&&(4===e||2===e))if("string"===this.options.K){var f=K.Rc(c.Nb,c.xb);b=f;f=f.length;if(65537>f&&(b.subarray&&fj||!b.subarray))b=
String.fromCharCode.apply(null,K.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Rc(c.Nb,c.xb),this.chunks.push(b)}while((0<c.ga||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Xj(c,-2):(c.state=null,a=113===d?Xj(c,-3):0)):a=-2,pk(this,a),this.ended=!0,0===a;2===e&&(pk(this,0),c.I=0);return!0};
function pk(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):K.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function qk(a){var b=b||{};b.ue=!0;b=new ok(b);b.push(a,!0);if(b.err)throw b.msg||pj[b.err];return b.result}
;function rk(a){return Jb(null===a?"null":void 0===a?"undefined":a)}
;function sk(a){this.name=a}
;var tk=new sk("rawColdConfigGroup");var uk=new sk("rawHotConfigGroup");function vk(a){I.call(this,a)}
v(vk,I);function wk(a,b){return E(a,1,b)}
;function xk(a){I.call(this,a,-1,yk)}
v(xk,I);var yk=[1];function zk(a){I.call(this,a)}
v(zk,I);function Ak(a){I.call(this,a)}
v(Ak,I);function Bk(a){I.call(this,a)}
v(Bk,I);function Ck(a){I.call(this,a,-1,Dk)}
v(Ck,I);var Dk=[2];function Ek(a){I.call(this,a,-1,Fk)}
v(Ek,I);Ek.prototype.getPlayerType=function(){return Ld(this,36)};
Ek.prototype.setHomeGroupInfo=function(a){return F(this,Ck,81,a)};
Ek.prototype.clearLocationPlayabilityToken=function(){return E(this,89,void 0,!1)};
var Fk=[9,66,24,32,86,100,101];function Gk(a){I.call(this,a)}
v(Gk,I);Gk.prototype.getKey=function(){return de(this,1)};
Gk.prototype.getValue=function(){return de(this,2===Ud(this,Hk)?2:-1)};
var Hk=[2,3,4,5,6];function Ik(a){I.call(this,a,-1,Jk)}
v(Ik,I);var Jk=[15,26,28];function Kk(a){I.call(this,a,-1,Lk)}
v(Kk,I);var Lk=[5];function Mk(a){I.call(this,a)}
v(Mk,I);function Nk(a){I.call(this,a,-1,Ok)}
v(Nk,I);Nk.prototype.setSafetyMode=function(a){return E(this,5,a)};
var Ok=[12];function Pk(a){I.call(this,a,-1,Qk)}
v(Pk,I);Pk.prototype.l=function(a){return F(this,Ek,1,a)};
var Qk=[12];var Rk=new sk("continuationCommand");var Sk=new sk("webCommandMetadata");var Tk=new sk("signalServiceEndpoint");var Uk={jk:"EMBEDDED_PLAYER_MODE_UNKNOWN",gk:"EMBEDDED_PLAYER_MODE_DEFAULT",ik:"EMBEDDED_PLAYER_MODE_PFP",hk:"EMBEDDED_PLAYER_MODE_PFL"};var Vk=new sk("feedbackEndpoint");var Wk={Rs:"WEB_DISPLAY_MODE_UNKNOWN",Ns:"WEB_DISPLAY_MODE_BROWSER",Ps:"WEB_DISPLAY_MODE_MINIMAL_UI",Qs:"WEB_DISPLAY_MODE_STANDALONE",Os:"WEB_DISPLAY_MODE_FULLSCREEN"};function Xk(a){I.call(this,a)}
v(Xk,I);Xk.prototype.getKey=function(){return de(this,1)};
Xk.prototype.getValue=function(){return de(this,2)};function rl(a){I.call(this,a,-1,sl)}
v(rl,I);var sl=[4,5];function tl(a){I.call(this,a)}
v(tl,I);function ul(a){I.call(this,a)}
v(ul,I);var vl=[2,3,4];function wl(a){I.call(this,a)}
v(wl,I);wl.prototype.getMessage=function(){return de(this,1)};function xl(a){I.call(this,a)}
v(xl,I);function yl(a){I.call(this,a)}
v(yl,I);function zl(a){I.call(this,a,-1,Al)}
v(zl,I);var Al=[10,17];function Bl(a){I.call(this,a)}
v(Bl,I);function Cl(a){I.call(this,a)}
v(Cl,I);function Dl(a){I.call(this,a)}
v(Dl,I);function El(a){I.call(this,a)}
v(El,I);function Fl(a){I.call(this,a)}
v(Fl,I);function Gl(a){I.call(this,a,-1,Hl)}
v(Gl,I);Gl.prototype.getVideoData=function(){return Vd(this,Fl,15)};
var Hl=[4];function Il(a){I.call(this,a)}
v(Il,I);function Jl(a,b){F(a,Dl,1,b)}
;function Kl(a){I.call(this,a)}
v(Kl,I);function Ll(a,b){return F(a,Dl,1,b)}
Kl.prototype.h=function(a){return E(this,2,a)};function Ml(a){I.call(this,a,-1,Nl)}
v(Ml,I);Ml.prototype.h=function(a){return E(this,1,a)};
function Ol(a,b){return F(a,Dl,2,b)}
var Nl=[3];function Pl(a){I.call(this,a)}
v(Pl,I);Pl.prototype.h=function(a){return E(this,1,a)};function Ql(a){I.call(this,a)}
v(Ql,I);Ql.prototype.h=function(a){return E(this,1,a)};function Rl(a){I.call(this,a)}
v(Rl,I);Rl.prototype.h=function(a){return E(this,1,a)};function Sl(a){I.call(this,a)}
v(Sl,I);Sl.prototype.h=function(a){return E(this,1,a)};function Tl(a){I.call(this,a)}
v(Tl,I);function Ul(a){I.call(this,a)}
v(Ul,I);function Vl(a){var b=new Ul;return E(b,1,a)}
Ul.prototype.getId=function(){return de(this,2)};
function Wl(a,b){return E(a,2,b)}
;function Xl(a){I.call(this,a)}
v(Xl,I);function Yl(a){I.call(this,a,-1,Zl)}
v(Yl,I);Yl.prototype.getPlayerType=function(){return ce(Ld(this,7),0)};
Yl.prototype.setVideoId=function(a){return E(this,19,a)};
function $l(a,b){$d(a,68,Ul,b)}
var Zl=[83,68];function am(a){I.call(this,a)}
v(am,I);function bm(a){I.call(this,a)}
v(bm,I);function cm(a){I.call(this,a)}
v(cm,I);function dm(a){I.call(this,a,459)}
v(dm,I);
var em=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458];var fm={pl:0,Uk:1,al:2,bl:4,ll:8,dl:16,fl:32,ol:64,nl:128,Wk:256,Yk:512,jl:1024,Xk:2048,Zk:4096,Vk:8192,il:16384,ml:32768,kl:65536};function gm(a){I.call(this,a)}
v(gm,I);function hm(a){I.call(this,a)}
v(hm,I);hm.prototype.setVideoId=function(a){return Td(this,1,im,a)};
hm.prototype.getPlaylistId=function(){var a=2===Ud(this,im)?2:-1;return Ld(this,a)};
var im=[1,2];function jm(a){I.call(this,a,-1,km)}
v(jm,I);var km=[3];var lm=new sk("webPlayerShareEntityServiceEndpoint");var mm=new sk("playlistEditEndpoint");var nm=new sk("modifyChannelNotificationPreferenceEndpoint");var om=new sk("unsubscribeEndpoint");var pm=new sk("subscribeEndpoint");function qm(){var a=rm;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function sm(a){A("yt.ads.biscotti.lastId_",a)}
;function tm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var um=y.window,vm,wm,xm=(null==um?void 0:null==(vm=um.yt)?void 0:vm.config_)||(null==um?void 0:null==(wm=um.ytcfg)?void 0:wm.data_)||{};A("yt.config_",xm);function ym(){tm(xm,arguments)}
function M(a,b){return a in xm?xm[a]:b}
function zm(){var a=xm.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Am=[];function Bm(a){Am.forEach(function(b){return b(a)})}
function Cm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Dm(b)}}:a}
function Dm(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=M("ERRORS",[]),e.push([a,"ERROR",b,c,d]),ym("ERRORS",e));Bm(a)}
function Em(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=M("ERRORS",[]),e.push([a,"WARNING",b,c,d]),ym("ERRORS",e))}
;var Fm=/^[\w.]*$/,Gm={q:!0,search_query:!0};function Hm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Im(f[0]||""),h=Im(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,m=f[0],n=String(Hm);k.args=[{key:m,value:f[1],query:a,method:Jm==n?"unchanged":n}];Gm.hasOwnProperty(m)||Em(k)}}return c}
var Jm=String(Hm);function Km(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Lm(a){"?"==a.charAt(0)&&(a=a.substr(1));return Hm(a,"&")}
function Mm(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Lm(1<a.length?a[1]:a[0])):{}}
function Nm(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Lm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function Om(a){if(!b)var b=window.location.href;var c=mc(1,a),d=pc(a);c&&d?(a=a.match(kc),b=b.match(kc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)==d&&(Number(mc(4,b))||null)==(Number(mc(4,a))||null):!0;return a}
function Im(a){return a&&a.match(Fm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Pm(a){var b=Qm;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=gi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ia){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Nh:g;try{var h=g.history.length}catch(ia){h=0}e.u_his=h;var k;e.u_h=null==(k=Nh.screen)?void 0:k.height;var m;e.u_w=null==(m=Nh.screen)?void 0:m.width;var n;e.u_ah=null==(n=Nh.screen)?void 0:n.availHeight;var q;e.u_aw=
null==(q=Nh.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=Nh.screen)?void 0:u.colorDepth}catch(ia){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(ia){}try{var C=h.outerWidth;var G=h.outerHeight}catch(ia){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ia){}try{var Q=h.screenLeft;var aa=h.screenTop}catch(ia){}try{N=h.innerWidth,O=h.innerHeight}catch(ia){}try{var W=h.screen.availWidth;var wb=h.screen.availTop}catch(ia){}t=[Q,aa,t,z,W,wb,C,G,N,O];try{var Ya=(b.h.top||window).document,ra="CSS1Compat"==
Ya.compatMode?Ya.documentElement:Ya.body;var H=(new of(ra.clientWidth,ra.clientHeight)).round()}catch(ia){H=new of(-12245933,-12245933)}Ya=H;H={};var oa=void 0===oa?y:oa;ra=new pi;oa.SVGElement&&oa.document.createElementNS&&ra.set(0);z=di();z["allow-top-navigation-by-user-activation"]&&ra.set(1);z["allow-popups-to-escape-sandbox"]&&ra.set(2);oa.crypto&&oa.crypto.subtle&&ra.set(3);oa.TextDecoder&&oa.TextEncoder&&ra.set(4);oa=qi(ra);H.bc=oa;H.bih=Ya.height;H.biw=Ya.width;H.brdim=t.join();b=b.i;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Nh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Qm=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Km(Pm(a))});Date.now();function P(a){a=Rm(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Sm(a,b){a=Rm(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Tm(){return M("EXPERIMENTS_TOKEN","")}
function Rm(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
function Um(){for(var a=[],b=M("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=M("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Vm="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Wm(){if(!Vm)return null;var a=Vm();return"open"in a?a:null}
function Xm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ym(a,b){"function"===typeof a&&(a=Cm(a));return window.setTimeout(a,b)}
;var Zm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},$m="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(hi)),an=!1;
function bn(a,b){b=void 0===b?{}:b;var c=Om(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in Zm){var f=M(Zm[e]);"X-Goog-Visitor-Id"!==e||f||(f=M("VISITOR_DATA"));!f||!c&&pc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=Km(Pm()));return b}
function cn(a){var b=window.location.search,c=pc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Om(a)&&(c=document.location.hostname);var d=lc(mc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Lm(b),f={};gb($m,function(g){e[g]&&(f[g]=e[g])});
return Nm(a,f||{},!1)}
function dn(a,b){var c=b.format||"JSON";a=en(a,b);var d=fn(a,b),e=!1,f=gn(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=Xm(k),n=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(m||q||u)n=hn(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};q=b.context||y;m?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Ym(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function en(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Nm(a,b||{},!0);return a}
function fn(a,b){var c=M("XSRF_FIELD_NAME"),d=M("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Lm(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):uc(e));f=e||f&&!qb(f);!an&&f&&"POST"!=b.method&&(an=!0,Dm(Error("AJAX request with postData should use POST")));return e}
function hn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Em(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jn(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=kn(g)})}d&&ln(e);
return e}
function ln(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new dc(d)}else ln(a[b])}}
function jn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kn(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mn(a,b){b.method="POST";b.postParams||(b.postParams={});return dn(a,b)}
function gn(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Cm(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Wm();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=cn(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bn(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var nn=Yc||Zc;function on(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var pn=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var rn={Va:[],Ra:[{callback:qn,weight:500}]};function qn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function sn(){this.Ra=[];this.Va=[]}
var tn;function un(){if(!tn){var a=tn=new sn;a.Va.length=0;a.Ra.length=0;rn.Va&&a.Va.push.apply(a.Va,rn.Va);rn.Ra&&a.Ra.push.apply(a.Ra,rn.Ra)}return tn}
;var vn=new Li;function wn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=xn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=xn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=xn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function xn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function yn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=zn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=wn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?zn(e+".ve",f,g,h):0;d+=g;d+=zn(e,a[e],b,c);if(500<d)break}}else c[b]=An(a),d+=c[b].length;else c[b]=An(a),d+=c[b].length;return d}
function zn(a,b,c,d){c+="."+a;a=An(b);d[c]=a;return c.length+a.length}
function An(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Bn(){this.cf=!0}
function Cn(){Bn.h||(Bn.h=new Bn);return Bn.h}
function Dn(a,b){a={};var c=Fg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(M("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in xm||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in xm&&(a["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return a}
;var En={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Fn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Gn(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Hn(a,b,c,d,e){Bg.set(""+a,b,{lc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function In(a,b,c){Bg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Jn(){if(!Bg.isEnabled())return!1;if(!Bg.Lb())return!0;Bg.set("TESTCOOKIESENABLED","1",{lc:60});if("1"!==Bg.get("TESTCOOKIESENABLED"))return!1;Bg.remove("TESTCOOKIESENABLED");return!0}
;var Kn=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",Kn);function Ln(){this.h=M("ALT_PREF_COOKIE_NAME","PREF");this.i=M("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Bg.get(""+this.h,void 0);a&&this.parse(a)}
var Mn;function Nn(){Mn||(Mn=new Ln);return Mn}
l=Ln.prototype;l.get=function(a,b){On(a);Pn(a);a=void 0!==Kn[a]?Kn[a].toString():null;return null!=a?a:b?b:""};
l.set=function(a,b){On(a);Pn(a);if(null==b)throw Error("ExpectedNotNull");Kn[a]=b.toString()};
function Qn(a){return!!((Rn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
l.remove=function(a){On(a);Pn(a);delete Kn[a]};
l.clear=function(){for(var a in Kn)delete Kn[a]};
function Pn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function On(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Rn(a){a=void 0!==Kn[a]?Kn[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
l.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Kn[d]=c.toString())}};var Sn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Tn={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Un={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Vn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Wn(){var a=y.navigator;return a?a.connection:void 0}
function Xn(){var a=Wn();if(a){var b=Sn[a.type||"unknown"]||"CONN_UNKNOWN";a=Sn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Yn(){var a=Wn();if(null!=a&&a.effectiveType)return Vn.hasOwnProperty(a.effectiveType)?Vn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function R(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
v(R,Error);function Zn(){try{return $n(),!0}catch(a){return!1}}
function $n(a){if(void 0!==M("DATASYNC_ID"))return M("DATASYNC_ID");throw new R("Datasync ID not set",void 0===a?"unknown":a);}
;function ao(){}
function bo(a,b){return co(a,0,b)}
ao.prototype.fa=function(a,b){return co(a,1,b)};
function eo(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function fo(){ao.apply(this,arguments)}
v(fo,ao);function go(){fo.h||(fo.h=new fo);return fo.h}
function co(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ym(a,c||0)}
fo.prototype.Da=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fo.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
fo.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var oi=go();function ho(a){var b=new Wi;(b=b.isAvailable()?a?new bj(b,a):b:null)||(a=new Xi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Si(a):null;this.i=document.domain||window.location.hostname}
ho.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Jg(b))}catch(f){return}else e=escape(b);Hn(a,e,c,this.i)};
ho.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Bg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ho.prototype.remove=function(a){this.h&&this.h.remove(a);In(a,"/",this.i)};var io=function(){var a;return function(){a||(a=new ho("ytidb"));return a}}();
function jo(){var a;return null==(a=io())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ko=[],lo,mo=!1;function no(){var a={};for(lo=new oo(void 0===a.handleError?po:a.handleError,void 0===a.logEvent?qo:a.logEvent);0<ko.length;)switch(a=ko.shift(),a.type){case "ERROR":lo.handleError(a.payload);break;case "EVENT":lo.logEvent(a.eventType,a.payload)}}
function ro(a){mo||(lo?lo.handleError(a):(ko.push({type:"ERROR",payload:a}),10<ko.length&&ko.shift()))}
function so(a,b){mo||(lo?lo.logEvent(a,b):(ko.push({type:"EVENT",eventType:a,payload:b}),10<ko.length&&ko.shift()))}
;function to(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function uo(a){return a.substr(0,a.indexOf(":"))||a}
;var vo={},wo=(vo.AUTH_INVALID="No user identifier specified.",vo.EXPLICIT_ABORT="Transaction was explicitly aborted.",vo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",vo.MISSING_INDEX="Index not created.",vo.MISSING_OBJECT_STORES="Object stores not created.",vo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",vo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",vo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
vo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",vo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",vo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",vo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",vo),xo={},yo=(xo.AUTH_INVALID="ERROR",xo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",xo.EXPLICIT_ABORT="IGNORED",xo.IDB_NOT_SUPPORTED="ERROR",xo.MISSING_INDEX=
"WARNING",xo.MISSING_OBJECT_STORES="ERROR",xo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",xo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",xo.QUOTA_EXCEEDED="WARNING",xo.QUOTA_MAYBE_EXCEEDED="WARNING",xo.UNKNOWN_ABORT="WARNING",xo.INCOMPATIBLE_DB_VERSION="WARNING",xo),zo={},Ao=(zo.AUTH_INVALID=!1,zo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,zo.EXPLICIT_ABORT=!1,zo.IDB_NOT_SUPPORTED=!1,zo.MISSING_INDEX=!1,zo.MISSING_OBJECT_STORES=!1,zo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,zo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,zo.QUOTA_EXCEEDED=!1,zo.QUOTA_MAYBE_EXCEEDED=!0,zo.UNKNOWN_ABORT=!0,zo.INCOMPATIBLE_DB_VERSION=!1,zo);function Bo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?wo[a]:c;d=void 0===d?yo[a]:d;e=void 0===e?Ao[a]:e;R.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Bo.prototype)}
v(Bo,R);function Co(a,b){Bo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},wo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Co.prototype)}
v(Co,Bo);function Do(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Do.prototype)}
v(Do,Error);var Eo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Fo(a,b,c,d){b=uo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Bo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Bo("QUOTA_EXCEEDED",a);if($c&&"UnknownError"===e.name)return new Bo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Do)return new Bo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Eo.some(function(f){return e.message.includes(f)}))return new Bo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Bo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bd:e.name})];e.level="WARNING";return e}
function Go(a,b,c){var d=jo();return new Bo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ho(a){if(!a)throw Error();throw a;}
function Io(a){return a}
function Jo(a){this.h=a}
function Ko(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ko.all=function(a){return new Ko(new Jo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)Ko.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Ko.resolve=function(a){return new Ko(new Jo(function(b,c){a instanceof Ko?a.then(b,c):b(a)}))};
Ko.reject=function(a){return new Ko(new Jo(function(b,c){c(a)}))};
Ko.prototype.then=function(a,b){var c=this,d=null!=a?a:Io,e=null!=b?b:Ho;return new Ko(new Jo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Lo(c,c,d,f,g)}),c.i.push(function(){Mo(c,c,e,f,g)})):"FULFILLED"===c.state.status?Lo(c,c,d,f,g):"REJECTED"===c.state.status&&Mo(c,c,e,f,g)}))};
Ko.prototype.catch=function(a){return this.then(void 0,a)};
function Lo(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ko?No(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Mo(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ko?No(a,b,f,d,e):d(f)}catch(g){e(g)}}
function No(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ko?No(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Oo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Po(a){return new Promise(function(b,c){Oo(a,b,c)})}
function Qo(a){return new Ko(new Jo(function(b,c){Oo(a,b,c)}))}
;function Ro(a,b){return new Ko(new Jo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var So=window,S=So.ytcsi&&So.ytcsi.now?So.ytcsi.now:So.performance&&So.performance.timing&&So.performance.now&&So.performance.timing.navigationStart?function(){return So.performance.timing.navigationStart+So.performance.now()}:function(){return(new Date).getTime()};function To(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
l=To.prototype;l.add=function(a,b,c){return Uo(this,[a],{mode:"readwrite",da:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Uo(this,[a],{mode:"readwrite",da:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Uo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).count(b)})};
function Vo(a,b,c){a=a.h.createObjectStore(b,c);return new Wo(a)}
l.delete=function(a,b){return Uo(this,[a],{mode:"readwrite",da:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Uo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).get(b)})};
function Xo(a,b,c){return Uo(a,[b],{mode:"readwrite",da:!0},function(d){d=d.objectStore(b);return Qo(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Uo(a,b,c,d){var e,f,g,h,k,m,n,q,u,t,z,C;return x(function(G){switch(G.h){case 1:var N={mode:"readonly",da:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.da?3:1;g=0;case 2:if(h){G.A(3);break}g++;k=Math.round(S());za(G,4);m=a.h.transaction(b,e.mode);N=new Yo(m);N=Zo(N,d);return w(G,N,6);case 6:return n=G.i,q=Math.round(S()),$o(a,k,q,g,void 0,b.join(),e),G.return(n);case 4:u=Ba(G);t=Math.round(S());z=Fo(u,a.h.name,b.join(),
a.h.version);if((C=z instanceof Bo&&!z.h)||g>=f)$o(a,k,t,g,z,b.join(),e),h=z;G.A(2);break;case 3:return G.return(Promise.reject(h))}})}
function $o(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Bo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&so("QUOTA_EXCEEDED",{dbName:uo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Bo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),so("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ap(a,!1,d,f,b,g.tag),ro(e)):ap(a,!0,d,f,b,g.tag)}
function ap(a,b,c,d,e,f){so("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Wo(a){this.h=a}
l=Wo.prototype;l.add=function(a,b){return Qo(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Qo(this.h.clear()).then(function(){})};
function bp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return Qo(this.h.count(a))};
function cp(a,b){return dp(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?cp(this,a):Qo(this.h.delete(a))};
l.get=function(a){return Qo(this.h.get(a))};
l.index=function(a){try{return new ep(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Do(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function dp(a,b,c){a=a.h.openCursor(b.query,b.direction);return fp(a).then(function(d){return Ro(d,c)})}
function Yo(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Bo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Zo(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
Yo.prototype.abort=function(){this.h.abort();this.i=!0;throw new Bo("EXPLICIT_ABORT");};
Yo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Wo(a),this.j.set(a,b));return b};
function ep(a){this.h=a}
l=ep.prototype;l.count=function(a){return Qo(this.h.count(a))};
l.delete=function(a){return gp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Qo(this.h.get(a))};
l.getKey=function(a){return Qo(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function gp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return fp(a).then(function(d){return Ro(d,c)})}
function hp(a,b){this.request=a;this.cursor=b}
function fp(a){return Qo(a).then(function(b){return b?new hp(a,b):null})}
l=hp.prototype;l.advance=function(a){this.cursor.advance(a);return fp(this.request)};
l.continue=function(a){this.cursor.continue(a);return fp(this.request)};
l.delete=function(){return Qo(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Qo(this.cursor.update(a))};function ip(a,b,c){return new Promise(function(d,e){function f(){u||(u=new To(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,m=c.df,n=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&so("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:uo(a)});var z=f(),C=new Yo(g.transaction);
n&&n(z,function(G){return t.oldVersion<G&&t.newVersion>=G},C);
C.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){so("IDB_UNEXPECTEDLY_CLOSED",{dbName:uo(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function jp(a,b,c){c=void 0===c?{}:c;return ip(a,b,c)}
function kp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),w(g,Po(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Fo(f,a,"",-1);})}
;function lp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
lp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return jp(a,b,c)};
lp.prototype.delete=function(a){a=void 0===a?{}:a;return kp(this.name,a)};
function mp(a,b){return new Bo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function np(a,b){if(!b)throw Go("openWithToken",uo(a.name));return op(a)}
function op(a){function b(){var f,g,h,k,m,n,q,u,t,z;return x(function(C){switch(C.h){case 1:return g=null!=(f=Error().stack)?f:"",za(C,2),w(C,a.i(a.name,a.options.version,d),4);case 4:h=C.i;for(var G=a.options,N=[],O=r(Object.keys(G.yb)),Q=O.next();!Q.done;Q=O.next()){Q=Q.value;var aa=G.yb[Q],W=void 0===aa.Ne?Number.MAX_VALUE:aa.Ne;!(h.h.version>=aa.Fb)||h.h.version>=W||h.h.objectStoreNames.contains(Q)||N.push(Q)}k=N;if(0===k.length){C.A(5);break}m=Object.keys(a.options.yb);n=h.objectStoreNames();
if(a.m<Sm("ytidb_reopen_db_retries",0))return a.m++,h.close(),ro(new Bo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());if(!(a.l<Sm("ytidb_remake_db_retries",1))){C.A(6);break}a.l++;return w(C,a.delete(),7);case 7:return ro(new Bo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());case 6:throw new Co(n,m);case 5:return C.return(h);case 2:q=Ba(C);if(q instanceof DOMException?
"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){C.A(8);break}return w(C,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:u=C.i;t=u.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw u.close(),a.j=!1,mp(a,t);return C.return(u);case 8:throw c(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&
(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Fo(q,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw mp(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,df:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var pp=new lp("YtIdbMeta",{yb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&Vo(a,"databases",{keyPath:"actualName"})}});
function qp(a,b){var c;return x(function(d){if(1==d.h)return w(d,np(pp,b),2);c=d.i;return d.return(Uo(c,["databases"],{da:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Qo(f.h.put(a,void 0)).then(function(){})})}))})}
function rp(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,np(pp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function sp(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,np(pp,b),2)):3!=e.h?(d=e.i,w(e,Uo(d,["databases"],{da:!0,mode:"readonly"},function(f){c.length=0;return dp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function tp(a){return sp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function up(a,b,c){return sp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function vp(a){var b,c;return x(function(d){if(1==d.h)return b=$n("YtIdbMeta hasAnyMeta other"),w(d,sp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var wp,xp=new function(){}(new function(){});
function yp(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=jo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=nn)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,qp(d,xp),4);case 4:return w(e,rp("yt-idb-test-do-not-use",xp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function zp(){if(void 0!==wp)return wp;mo=!0;return wp=yp().then(function(a){mo=!1;var b;if(null!=(b=io())&&b.h){var c;b={hasSucceededOnce:(null==(c=jo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=io())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ap(){return B("ytglobal.idbToken_")||void 0}
function Bp(){var a=Ap();return a?Promise.resolve(a):zp().then(function(b){(b=b?xp:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var Cp=0;function Dp(a,b){Cp||(Cp=oi.fa(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,Bp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return w(h,up(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return w(h,kp(f.actualName),7);case 7:return w(h,rp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),ro(g),d=!1;case 4:oi.Da(Cp),Cp=0,d&&Dp(a,b),h.h=0}})}))}
function Ep(){var a;return x(function(b){return 1==b.h?w(b,Bp(),2):(a=b.i)?b.return(vp(a)):b.return(!1)})}
new Lh;function Fp(a){if(!Zn())throw a=new Bo("AUTH_INVALID",{dbName:a}),ro(a),a;var b=$n();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Gp(a,b,c,d){var e,f,g,h,k,m;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Bp(),2);case 2:g=n.i;if(!g)throw h=Go("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ro(h),h;to(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Fp(a);za(n,3);return w(n,qp(k,g),5);case 5:return w(n,jp(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=Ba(n),za(n,7),w(n,rp(k.actualName,g),9);case 9:Aa(n,
8);break;case 7:Ba(n);case 8:throw m;}})}
function Hp(a,b,c){c=void 0===c?{}:c;return Gp(a,b,!1,c)}
function Ip(a,b,c){c=void 0===c?{}:c;return Gp(a,b,!0,c)}
function Jp(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Bp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();to(a);d=Fp(a);return w(e,kp(d.actualName,b),3)}return w(e,rp(d.actualName,c),0)})}
function Kp(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,kp(d.actualName,b),2):w(e,rp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Lp(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Bp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();to("LogsDatabaseV2");return w(d,tp(b),3)}c=d.i;return w(d,Kp(c,a,b),0)})}
function Mp(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Bp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();to(a);return w(d,kp(a,b),3)}return w(d,rp(a,c),0)})}
;function Np(a,b){lp.call(this,a,b);this.options=b;to(a)}
v(Np,lp);function Op(a,b){var c;return function(){c||(c=new Np(a,b));return c}}
Np.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.sc?Ip:Hp)(a,b,Object.assign({},c))};
Np.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.sc?Mp:Jp)(this.name,a)};
function Pp(a,b){return Op(a,b)}
;var Qp={},Rp=Pp("ytGcfConfig",{yb:(Qp.coldConfigStore={Fb:1},Qp.hotConfigStore={Fb:1},Qp),sc:!1,upgrade:function(a,b){b(1)&&(bp(Vo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),bp(Vo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Sp(a){return np(Rp(),a)}
function Tp(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:S()},w(g,Sp(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Xo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Up(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:S()},w(h,Sp(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Xo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Vp(a){var b,c;return x(function(d){return 1==d.h?w(d,Sp(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Uo(b,["coldConfigStore"],{mode:"readwrite",da:!0},function(e){return gp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Wp(a){var b,c;return x(function(d){return 1==d.h?w(d,Sp(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Uo(b,["hotConfigStore"],{mode:"readwrite",da:!0},function(e){return gp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Xp(){this.h=0}
function Yp(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=Ap())?c?g.A(4):w(g,Wp(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,Tp(c,b,d),0)})}
function Zp(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=Ap())?c?h.A(4):w(h,Vp(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return w(h,Up(c,b,g,d),0)})}
;function $p(){return"INNERTUBE_API_KEY"in xm&&"INNERTUBE_API_VERSION"in xm}
function aq(){return{innertubeApiKey:M("INNERTUBE_API_KEY"),innertubeApiVersion:M("INNERTUBE_API_VERSION"),Dc:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),we:M("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION"),ud:M("INNERTUBE_CONTEXT_HL"),td:M("INNERTUBE_CONTEXT_GL"),xe:M("INNERTUBE_HOST_OVERRIDE")||"",ze:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ye:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA")}}
function bq(a){var b={client:{hl:a.ud,gl:a.td,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Tm();""!==c&&(b.client.experimentsToken=c);c=Um();0<c.length&&(b.request={internalExperimentFlags:c});cq(a,void 0,b);dq(void 0,b);eq(void 0,b);fq(a,void 0,b);gq(void 0,b);P("start_sending_config_hash")&&hq(void 0,b);M("DELEGATED_SESSION_ID")&&
!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(Lm(M("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function iq(a){var b=new Pk,c=new Ek;E(c,1,a.ud);E(c,2,a.td);E(c,16,a.we);E(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new Ak;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);F(c,Ak,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,Hd(d));d=Tm();""!==d&&E(c,54,d);d=Um();if(0<d.length){e=new Ik;for(var f=0;f<d.length;f++){var g=new Gk;E(g,1,d[f].key);Td(g,2,Hk,d[f].value);$d(e,15,
Gk,g)}F(b,Ik,5,e)}cq(a,c);dq(b);eq(c);fq(a,c);gq(c);P("start_sending_config_hash")&&hq(c);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Nk,E(a,3,M("DELEGATED_SESSION_ID")));a=r(Object.entries(Lm(M("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.l(c);return b}
function cq(a,b,c){a=a.sd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Vd(b,Bk,96)||new Bk;var d=Gn();d=Object.keys(Wk).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);F(b,Bk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Gn())}
function dq(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Vd(a,Kk,7)||new Kk,E(b,4,c),F(a,Kk,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function eq(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function fq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Vd(b,Ak,62))?d:new Ak;E(c,6,a.appInstallData);F(b,Ak,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function gq(a,b){var c=Xn();c&&(a?E(a,61,Tn[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=Yn())&&(a?E(a,94,Un[c]):b&&(b.client.effectiveConnectionType=c))}
function jq(a,b,c){c=void 0===c?{}:c;var d={};M("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":M("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.wt||M("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().vt:(a=Dn(Cn()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function hq(a,b){Xp.h||(Xp.h=new Xp);var c=Xp.h;var d=S()-c.h;if(0!==c.h&&d<Sm("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=S());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Vd(a,Ak,62))?g:new Ak;E(b,1,c);E(b,3,d);E(b,5,e);F(a,Ak,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function kq(a,b){this.version=a;this.args=b}
;function lq(a,b){this.topic=a;this.h=b}
lq.prototype.toString=function(){return this.topic};var mq=B("ytPubsub2Pubsub2Instance")||new Li;Li.prototype.subscribe=Li.prototype.subscribe;Li.prototype.unsubscribeByKey=Li.prototype.Db;Li.prototype.publish=Li.prototype.cb;Li.prototype.clear=Li.prototype.clear;A("ytPubsub2Pubsub2Instance",mq);var nq=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",nq);var oq=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",oq);var pq=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",pq);
A("ytPubsub2Pubsub2SkipSubKey",null);function qq(a,b){var c=rq();c&&c.publish.call(c,a.toString(),a,b)}
function sq(a){var b=tq,c=rq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(nq[d])try{if(f&&b instanceof lq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var m=new h;h.Xa=m.version}var n=h.Xa}catch(G){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var q=n.construct;
var u=k.args,t=u.length;if(0<t){var z=Array(t);for(k=0;k<t;k++)z[k]=u[k];var C=z}else C=[];f=q.call(n,h,C)}catch(G){throw G.message="yt.pubsub2.Data.deserialize(): "+G.message,G;}}catch(G){throw G.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+G.message,G;}a.call(window,f)}catch(G){Dm(G)}},pq[b.toString()]?B("yt.scheduler.instance")?oi.fa(g):Ym(g,0):g())});
nq[d]=!0;oq[b.toString()]||(oq[b.toString()]=[]);oq[b.toString()].push(d);return d}
function uq(){var a=vq,b=sq(function(c){a.apply(void 0,arguments);wq(b)});
return b}
function wq(a){var b=rq();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete nq[c]}))}
function rq(){return B("ytPubsub2Pubsub2Instance")}
;var xq=!0,yq=Sm("compression_performance_threshold",250);
function zq(a,b,c,d){var e={startTime:S()};if(xq)try{var f=qk(ji(b));e.endTime=S();P("disable_compression_due_to_performance_degredation")&&e.endTime-e.startTime>=yq&&(xq=!1);!P("gel_compression_csi_killswitch")&&P("log_gel_compression_latency")&&.01>=Math.random()&&qq("gel_compression_latency_payload",e);if(!P("only_compress_gel_if_smaller")||(window.Blob?f.length<(new Blob(b.split(""))).size:1))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=f,c.postParams=void 0;d(a,c)}catch(g){Em(g),
d(a,c)}else d(a,c)}
function Aq(a){if(!a.body)return a;try{var b="string"===typeof a.body?a.body:JSON.stringify(a.body),c=qk(ji(b));if(P("only_compress_gel_if_smaller")&&!(window.Blob?c.length<(new Blob(b.split(""))).size:1))return a;a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=c;return a}catch(d){return Em(d),a}}
;function Bq(a){a=Object.assign({},a);delete a.Authorization;var b=Fg();if(b){var c=new ui;c.update(M("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var Cq;function Dq(){Cq||(Cq=new ho("yt.innertube"));return Cq}
function Eq(a,b,c,d){if(d)return null;d=Dq().get("nextId",!0)||1;var e=Dq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Bq(c),requestTime:Math.round(S())};Dq().set("nextId",d+1,86400,!0);Dq().set("requests",e,86400,!0);return d}
function Fq(a){var b=Dq().get("requests",!0)||{};delete b[a];Dq().set("requests",b,86400,!0)}
function Gq(a){var b=Dq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=Bq(jq(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),Hq(a,d.method,e,{}));delete b[c]}}Dq().set("requests",b,86400,!0)}}
;function Iq(a){this.ac=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sb=function(){};
this.now=Date.now;this.Ib=!1;var b;this.Md=null!=(b=a.Md)?b:100;var c;this.Hd=null!=(c=a.Hd)?c:1;var d;this.Fd=null!=(d=a.Fd)?d:2592E6;var e;this.Dd=null!=(e=a.Dd)?e:12E4;var f;this.Gd=null!=(f=a.Gd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.hc=!!a.hc;var h;this.ec=null!=(h=a.ec)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.sb&&(this.sb=a.sb);a.Ib&&(this.Ib=a.Ib);a.ac&&(this.ac=a.ac);this.T=a.T;this.ya=a.ya;this.X=a.X;this.W=a.W;this.Pa=a.Pa;this.Lc=
a.Lc;this.Kc=a.Kc;Jq(this)&&(!this.T||this.T("networkless_logging"))&&Kq(this)}
function Kq(a){Jq(a)&&!a.Ib&&(a.h=!0,a.hc&&Math.random()<=a.ec&&a.X.de(a.P),Lq(a),a.W.ma()&&a.Rb(),a.W.Ma(a.Lc,a.Rb.bind(a)),a.W.Ma(a.Kc,a.dd.bind(a)))}
l=Iq.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Jq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.X.set(d,this.P).then(function(e){d.id=e;c.W.ma()&&Mq(c,d)}).catch(function(e){Mq(c,d);
Nq(c,e)})}else this.Pa(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Jq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.T&&this.T("nwl_skip_retry")&&(e.skipRetry=c);if(this.W.ma()||this.T&&this.T("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.X.set(e,d.P).catch(function(m){Nq(d,m)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.X.set(e,this.P).catch(function(g){d.Pa(a,b,e.skipRetry);
Nq(d,g)})}else this.Pa(a,b,this.T&&this.T("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Jq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.X.rb(d.id,c.P):e=!0;c.W.ib&&c.T&&c.T("vss_network_hint")&&c.W.ib(!0);f(g,h)};
this.Pa(d.url,d.options);this.X.set(d,this.P).then(function(g){d.id=g;e&&c.X.rb(d.id,c.P)}).catch(function(g){Nq(c,g)})}else this.Pa(a,b)};
l.Rb=function(){var a=this;if(!Jq(this))throw Go("throttleSend");this.i||(this.i=this.ya.fa(function(){var b;return x(function(c){if(1==c.h)return w(c,a.X.pd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?w(c,Mq(a,b),3):(a.dd(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.Md))};
l.dd=function(){this.ya.Da(this.i);this.i=0};
function Mq(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!Jq(a))throw c=Go("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.X.Be(b.id,a.P),3);case 3:(d=e.i)||a.sb(Error("The request cannot be found in the database."));case 2:if(Oq(a,b,a.Fd)){e.A(4);break}a.sb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.X.rb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Pq(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.X.rb(b.id,a.P),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Pq(a,b){if(!Jq(a))throw Go("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,m;return x(function(n){switch(n.h){case 1:g=Qq(f);h=Rq(f);if(!(a.T&&a.T("nwl_consider_error_code")&&g||a.T&&!a.T("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.A(2);break}if(!a.W.qc){n.A(3);break}return w(n,a.W.qc(),3);case 3:if(a.W.ma()){n.A(2);break}c(e,f);if(!a.T||!a.T("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.A(6);break}return w(n,a.X.Pc(b.id,a.P,!1),6);case 6:return n.return();case 2:if(a.T&&a.T("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){n.A(8);break}return b.sendCount<a.Hd?w(n,a.X.Pc(b.id,a.P,!0,h?!1:void 0),12):w(n,a.X.rb(b.id,a.P),8);case 12:a.ya.fa(function(){a.W.ma()&&a.Rb()},a.Gd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):w(h,a.X.rb(b.id,a.P),2);a.W.ib&&a.T&&a.T("vss_network_hint")&&a.W.ib(!0);d(e,f);h.h=0})};
return b}
function Oq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Lq(a){if(!Jq(a))throw Go("retryQueuedRequests");a.X.pd("QUEUED",a.P).then(function(b){b&&!Oq(a,b,a.Dd)?a.ya.fa(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.X.Pc(b.id,a.P),2);Lq(a);c.h=0})}):a.W.ma()&&a.Rb()})}
function Nq(a,b){a.Sd&&!a.W.ma()?a.Sd(b):a.handleError(b)}
function Jq(a){return!!a.P||a.ac}
function Qq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Rq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Sq;
function Tq(){if(Sq)return Sq();var a={};Sq=Pp("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Fb:2},a),sc:!1,upgrade:function(b,c,d){c(2)&&Vo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),bp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Sq()}
;function gr(a){return np(Tq(),a)}
function Fr(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,gr(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Xo(d,"LogsRequestsStore",e),3);f=g.i;c.ff=S();Gr(c);return g.return(f)})}
function Hr(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:S(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,gr(b),2);if(3!=m.h)return d=m.i,e=M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,S()],h=IDBKeyRange.bound(f,g),k=void 0,w(m,Uo(d,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(n){return gp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.getValue()&&(k=q.getValue(),"NEW"===a&&(k.status="QUEUED",
q.update(k)))})}),3);
c.ff=S();Gr(c);return m.return(k)})}
function Ir(a,b){var c;return x(function(d){if(1==d.h)return w(d,gr(b),2);c=d.i;return d.return(Uo(c,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Qo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Jr(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,gr(b),2);e=f.i;return f.return(Uo(e,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Qo(h.h.put(k,void 0)).then(function(){return k})):Ko.resolve(void 0)})}))})}
function Kr(a,b){var c;return x(function(d){if(1==d.h)return w(d,gr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Lr(a){var b,c;return x(function(d){if(1==d.h)return w(d,gr(a),2);b=d.i;c=S()-2592E6;return w(d,Uo(b,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){return dp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Mr(){x(function(a){return w(a,Lp(),0)})}
function Gr(a){P("nwl_csi_killswitch")||.01>=Math.random()&&qq("nwl_transaction_latency_payload",a)}
;var Nr={},Or=Pp("ServiceWorkerLogsDatabase",{yb:(Nr.SWHealthLog={Fb:1},Nr),sc:!0,upgrade:function(a,b){b(1)&&bp(Vo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Pr(a){return np(Or(),a)}
function Qr(a){var b,c;x(function(d){if(1==d.h)return w(d,Pr(a),2);b=d.i;c=S()-2592E6;return w(d,Uo(b,["SWHealthLog"],{mode:"readwrite",da:!0},function(e){return dp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Rr(a){var b;return x(function(c){if(1==c.h)return w(c,Pr(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Sr={},Tr=0;function Ur(a){var b=new Image,c=""+Tr++;Sr[c]=b;b.onload=b.onerror=function(){delete Sr[c]};
b.src=a}
;function Vr(){this.h=new Map;this.i=!1}
function Wr(){if(!Vr.h){var a=B("yt.networkRequestMonitor.instance")||new Vr;A("yt.networkRequestMonitor.instance",a);Vr.h=a}return Vr.h}
Vr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Vr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Vr.prototype.removeParams=function(a){return a.split("?")[0]};
Vr.prototype.removeParams=Vr.prototype.removeParams;Vr.prototype.isEndpointCFR=Vr.prototype.isEndpointCFR;Vr.prototype.requestComplete=Vr.prototype.requestComplete;Vr.getInstance=Wr;var Xr;function Yr(){Xr||(Xr=new ho("yt.offline"));return Xr}
function Zr(a){if(P("offline_error_handling")){var b=Yr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yr().set("errors",b,2592E3,!0)}}
;function $r(){gf.call(this);var a=this;this.j=!1;this.i=ni();this.i.Ma("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=Yr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new R(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Dm(d)}Yr().set("errors",{},2592E3,!0)}}})}
v($r,gf);function as(){if(!$r.h){var a=B("yt.networkStatusManager.instance")||new $r;A("yt.networkStatusManager.instance",a);$r.h=a}return $r.h}
l=$r.prototype;l.ma=function(){return this.i.ma()};
l.ib=function(a){this.i.i=a};
l.re=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.je=function(){this.j=!0};
l.Ma=function(a,b){return this.i.Ma(a,b)};
l.qc=function(a){a=li(this.i,a);a.then(function(b){P("use_cfr_monitor")&&Wr().requestComplete("generate_204",b)});
return a};
$r.prototype.sendNetworkCheckRequest=$r.prototype.qc;$r.prototype.listen=$r.prototype.Ma;$r.prototype.enableErrorFlushing=$r.prototype.je;$r.prototype.getWindowStatus=$r.prototype.re;$r.prototype.networkStatusHint=$r.prototype.ib;$r.prototype.isNetworkAvailable=$r.prototype.ma;$r.getInstance=as;function bs(a){a=void 0===a?{}:a;gf.call(this);var b=this;this.i=this.s=0;this.j=as();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.pc?(this.pc=a.pc,c("networkstatus-online",function(){cs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){cs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){hf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){hf(b,"publicytnetworkstatus-offline")})))}
v(bs,gf);bs.prototype.ma=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
bs.prototype.ib=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
bs.prototype.qc=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&Wr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ma())})):c?d.return(c(a)):d.return(!0)})};
function cs(a,b){a.pc?a.i?(oi.Da(a.s),a.s=oi.fa(function(){a.m!==b&&(hf(a,b),a.m=b,a.i=S())},a.pc-(S()-a.i))):(hf(a,b),a.m=b,a.i=S()):hf(a,b)}
;var ds;function es(){var a=Iq.call;ds||(ds=new bs({Jt:!0,Dt:!0}));a.call(Iq,this,{X:{de:Lr,rb:Kr,pd:Hr,Be:Ir,Pc:Jr,set:Fr},W:ds,handleError:Dm,sb:Em,Pa:fs,now:S,Sd:Zr,ya:go(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",hc:!0,ec:.1,nc:Sm("potential_esf_error_limit",10),T:P,Ib:!(Zn()&&gs())});this.j=new Lh;P("networkless_immediately_drop_all_requests")&&Mr();Mp("LogsDatabaseV2")}
v(es,Iq);function hs(){var a=B("yt.networklessRequestController.instance");a||(a=new es,A("yt.networklessRequestController.instance",a),P("networkless_logging")&&Bp().then(function(b){a.P=b;Kq(a);a.j.resolve();a.hc&&Math.random()<=a.ec&&a.P&&Qr(a.P);P("networkless_immediately_drop_sw_health_store")&&is(a)}));
return a}
es.prototype.writeThenSend=function(a,b){b||(b={});Zn()||(this.h=!1);Iq.prototype.writeThenSend.call(this,a,b)};
es.prototype.sendThenWrite=function(a,b,c){b||(b={});Zn()||(this.h=!1);Iq.prototype.sendThenWrite.call(this,a,b,c)};
es.prototype.sendAndWrite=function(a,b){b||(b={});Zn()||(this.h=!1);Iq.prototype.sendAndWrite.call(this,a,b)};
es.prototype.awaitInitialization=function(){return this.j.promise};
function is(a){var b;x(function(c){if(!a.P)throw b=Go("clearSWHealthLogsDb"),b;return c.return(Rr(a.P).catch(function(d){a.handleError(d)}))})}
function fs(a,b,c){P("use_cfr_monitor")&&js(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(S())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(S())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)gn(a,void 0,"POST",e);else if(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))gn(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=lc(mc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(zc),n=yc(a,0,"ri",m);if(0>n)var q=null;else{var u=a.indexOf("&",n);if(0>u||u>m)u=m;q=decodeURIComponent(a.slice(n+3,-1!==u?u:0).replace(/\+/g," "))}k="1"!==q}var t=!k;break b}}catch(C){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(C){}z=!1}c=z?!0:!1}else c=!1;c||Ur(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
zq(a,b.postBody,b,dn)):zq(a,JSON.stringify(b.postParams),b,mn):dn(a,b)}
function js(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Wr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Wr().requestComplete(a,!0);d(e,f)}}
function gs(){return"www.youtube-nocookie.com"!==pc(document.location.toString())}
;var ks=!1,ls=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ks};A("ytNetworklessLoggingInitializationOptions",ls);function ms(){var a;x(function(b){if(1==b.h)return w(b,Bp(),2);a=b.i;if(!a||!Zn()&&!P("nwl_init_require_datasync_id_killswitch")||!gs())return b.A(0);ks=!0;ls.isNwlInitialized=ks;return w(b,hs().awaitInitialization(),0)})}
;function ns(a){var b=this;this.config_=null;a?this.config_=a:$p()&&(this.config_=aq());bo(function(){Gq(b)},5E3)}
ns.prototype.isReady=function(){!this.config_&&$p()&&(this.config_=aq());return!!this.config_};
function Hq(a,b,c,d){function e(z){z=void 0===z?!1:z;var C;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(C=Eq(b,c,m,k)),C)){var G=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(Q,aa){Fq(C);G(Q,aa)};
c.onFetchSuccess=function(Q,aa){Fq(C);N(Q,aa)}}try{if(z&&d.retry&&!d.yd.bypassNetworkless)g.method="POST",d.yd.writeThenSend?hs().writeThenSend(t,g):hs().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var O=g.postBody;"string"!==typeof O&&(O=JSON.stringify(g.postBody));zq(t,O,g,dn)}else zq(t,JSON.stringify(g.postParams),g,mn);else P("web_all_payloads_via_jspb")?dn(t,g):mn(t,g)}catch(Q){if("InvalidAccessError"==Q.name)C&&(Fq(C),C=0),Em(Error("An extension is blocking network request."));else throw Q;}C&&bo(function(){Gq(a)},5E3)}
!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Em(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new R("innertube xhrclient not ready",b,c,d);Dm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,C){if(d.onSuccess)d.onSuccess(C)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,C){if(d.onError)d.onError(C)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xe)&&(h=f);var k=a.config_.ze||!1,m=jq(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.ye&&f;u=u&&f.startsWith("Bearer");u||(q.key=a.config_.innertubeApiKey);var t=Nm(""+h+n,q||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
ls.isNwlInitialized:ks)?zp().then(function(z){e(z)}):e(!1)}
;var os=0,ps=Kc?"webkit":Jc?"moz":Hc?"ms":Gc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++os});var qs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in qs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ss(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
rs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",pb);var ts=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",ts);
function us(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vs=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ws(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=us(a,b,c,d);if(e)return e;e=++ts.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new rs(h);if(!rf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new rs(h);
h.currentTarget=a;return c.call(a,h)};
g=Cm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vs()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function xs(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vs()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;function ys(a){this.L=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.V=ws(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=Cm(a));this.aa=window.setInterval(a,25)}
$a(ys,J);ys.prototype.Y=function(a){void 0===a.h&&ss(a);var b=a.h;void 0===a.i&&ss(a);this.i=new nf(b,a.i)};
ys.prototype.R=function(){if(this.i){var a=S();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
ys.prototype.M=function(){window.clearInterval(this.aa);xs(this.V)};var zs={};
function As(a){var b=void 0===a?{}:a;a=void 0===b.Ke?!1:b.Ke;b=void 0===b.ke?!0:b.ke;if(null==B("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Bs();ws(document,"keydown",Bs);ws(document,"keyup",Bs);ws(document,"mousedown",Bs);ws(document,"mouseup",Bs);a?ws(window,"touchmove",function(){Cs("touchmove",200)},{passive:!0}):(ws(window,"resize",function(){Cs("resize",200)}),b&&ws(window,"scroll",function(){Cs("scroll",200)}));
new ys(function(){Cs("mouse",100)});
ws(document,"touchstart",Bs,{passive:!0});ws(document,"touchend",Bs,{passive:!0})}}
function Cs(a,b){zs[a]||(zs[a]=!0,oi.fa(function(){Bs();zs[a]=!1},b))}
function Bs(){null==B("_lact",window)&&As();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ds(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Es=y.ytPubsubPubsubInstance||new Li,Fs=y.ytPubsubPubsubSubscribedKeys||{},Gs=y.ytPubsubPubsubTopicToKeys||{},Hs=y.ytPubsubPubsubIsSynchronous||{};function Is(a,b){var c=Js();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Fs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Hs[a]?f():Ym(f,0)}catch(g){Dm(g)}},void 0);
Fs[d]=!0;Gs[a]||(Gs[a]=[]);Gs[a].push(d);return d}return 0}
function Ks(a){var b=Js();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Fs[c]}))}
function Ls(a,b){var c=Js();c&&c.publish.apply(c,arguments)}
function Ms(a){var b=Js();if(b)if(b.clear(a),a)Ns(a);else for(var c in Gs)Ns(c)}
function Js(){return y.ytPubsubPubsubInstance}
function Ns(a){Gs[a]&&(a=Gs[a],gb(a,function(b){Fs[b]&&delete Fs[b]}),a.length=0)}
Li.prototype.subscribe=Li.prototype.subscribe;Li.prototype.unsubscribeByKey=Li.prototype.Db;Li.prototype.publish=Li.prototype.cb;Li.prototype.clear=Li.prototype.clear;A("ytPubsubPubsubInstance",Es);A("ytPubsubPubsubTopicToKeys",Gs);A("ytPubsubPubsubIsSynchronous",Hs);A("ytPubsubPubsubSubscribedKeys",Fs);var Os=Symbol("injectionDeps");function Ps(a){this.name=a}
Ps.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Qs(a){this.key=a}
function Rs(){this.h=new Map;this.i=new Map}
Rs.prototype.resolve=function(a){return a instanceof Qs?Ss(this,a.key,[],!0):Ss(this,a,[])};
function Ss(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.Pd)var e=d.Pd;else if(d.jf)e=d[Os]?Ts(a,d[Os],c):[],e=d.jf.apply(d,ja(e));else if(d.Od){e=d.Od;var f=e[Os]?Ts(a,e[Os],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Tt||a.i.set(b,e);return e}
function Ts(a,b,c){return b?b.map(function(d){return d instanceof Qs?Ss(a,d.key,c,!0):Ss(a,d,c)}):[]}
;var Us;function Vs(){Us||(Us=new Rs);return Us}
;function Ws(){this.store={};this.h={}}
Ws.prototype.storePayload=function(a,b){a=Xs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Ws.prototype.extractMatchingEntries=function(a){a=Ys(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Ws.prototype.getSequenceCount=function(a){a=Ys(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Ys(a,b){var c=Xs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Xs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Zs(b.auth,g[0])){var h=b.isJspb;Zs(void 0===h?"undefined":h?"true":"false",g[1])&&Zs(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Zs(a,b){return void 0===a||"undefined"===a?!0:a===b}
Ws.prototype.getSequenceCount=Ws.prototype.getSequenceCount;Ws.prototype.extractMatchingEntries=Ws.prototype.extractMatchingEntries;Ws.prototype.storePayload=Ws.prototype.storePayload;function Xs(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function $s(a,b){if(a)return a[b.name]}
;var at=Sm("initial_gel_batch_timeout",2E3),bt=Sm("gel_queue_timeout_max_ms",6E4),ct=Math.pow(2,16)-1,dt=void 0;function et(){this.j=this.h=this.i=0}
var ft=new et,gt=new et,ht,jt=!0,kt=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",kt);var lt=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",lt);var mt={};function nt(){var a=B("yt.logging.ims");a||(a=new Ws,A("yt.logging.ims",a));return a}
function ot(a,b){P("web_all_payloads_via_jspb")&&Em(new R("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){pt(a);var c=qt(a);mt[c]=!0;var d={cttAuthInfo:c,isJspb:!1};nt().storePayload(d,a.payload);rt(b,c,!1,d)}}
function st(a,b){if("log_event"===a.endpoint){pt(void 0,a);var c=qt(a,!0);mt[c]=!0;var d={cttAuthInfo:c,isJspb:!0};nt().storePayload(d,a.payload.toJSON());rt(b,c,!0,d)}}
function rt(a,b,c,d){c=void 0===c?!1:c;a&&(dt=new a);a=Sm("tvhtml5_logging_max_batch_ads_fork")||Sm("tvhtml5_logging_max_batch")||Sm("web_logging_max_batch")||100;var e=S(),f=c?gt.j:ft.j,g=0;d&&(g=nt().getSequenceCount(d));g>=a?ht||(ht=tt(function(){ut({writeThenSend:!0},P("flush_only_full_queue")?b:void 0,c);ht=void 0},0)):10<=e-f&&(vt(c),c?gt.j=e:ft.j=e)}
function wt(a,b){P("web_all_payloads_via_jspb")&&Em(new R("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){pt(a);var c=qt(a),d=new Map;d.set(c,[a.payload]);b&&(dt=new b);return new Df(function(e,f){dt&&dt.isReady()?xt(d,dt,e,f,{bypassNetworkless:!0},!0):e()})}}
function zt(a,b){if("log_event"===a.endpoint){pt(void 0,a);var c=qt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(dt=new b);return new Df(function(e){dt&&dt.isReady()?At(d,dt,e,{bypassNetworkless:!0},!0):e()})}}
function qt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new hm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Td(d,2,im,c.playlistId);lt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),kt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function ut(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&P("web_all_payloads_via_jspb")&&Em(new R("transport.flushLogs called for JSON in JSPB only experiment"));new Df(function(d,e){c?(Bt(gt.i),Bt(gt.h),gt.h=0):(Bt(ft.i),Bt(ft.h),ft.h=0);if(dt&&dt.isReady()){var f=a,g=c,h=dt;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=nt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),At(k,h,d,f)):(k=nt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,
k),xt(m,h,d,e,f));else if(g){e=r(Object.keys(mt));for(g=e.next();!g.done;g=e.next())m=g.value,g=nt().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete mt[m];At(k,h,d,f)}else{k=r(Object.keys(mt));for(g=k.next();!g.done;g=k.next()){g=g.value;var n=nt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<n.length&&m.set(g,n);delete mt[g]}xt(m,h,d,e,f)}}else vt(c),d()})}
function vt(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!ft.h||a&&!gt.h)){var b=tt(function(){ut({writeThenSend:!0},void 0,a)},bt);
a?gt.h=b:ft.h=b}Bt(a?gt.i:ft.i);b=M("LOGGING_BATCH_TIMEOUT",Sm("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&jt&&(b=at);b=tt(function(){ut({writeThenSend:!0},void 0,a)},b);
a?gt.i=b:ft.i=b}
function xt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(S()),h=a.size,k={};a=r(a);for(var m=a.next();!m.done;k={Tb:k.Tb,ab:k.ab,Ab:k.Ab,Vb:k.Vb,Ub:k.Ub},m=a.next()){var n=r(m.value);m=n.next().value;n=n.next().value;k.ab=vb({context:bq(b.config_||aq())});if(!Qa(n)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}k.ab.events=n;(n=kt[m])&&Ct(k.ab,m,n);delete kt[m];k.Ab="visitorOnlyApprovedKey"===m;Dt(k.ab,g,k.Ab);Et(e);k.Vb=function(q){P("update_log_event_config")&&oi.fa(function(){return x(function(u){return w(u,
Ft(q),0)})});
h--;h||c()};
k.Tb=0;k.Ub=function(q){return function(){q.Tb++;if(e.bypassNetworkless&&1===q.Tb)try{Hq(b,"log_event",q.ab,Gt({writeThenSend:!0},q.Ab,q.Vb,q.Ub,f)),jt=!1}catch(u){Dm(u),d()}h--;h||c()}}(k);
try{Hq(b,"log_event",k.ab,Gt(e,k.Ab,k.Vb,k.Ub,f)),jt=!1}catch(q){Dm(q),d()}}}
function At(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(S()),g=a.size,h=new Map([].concat(ja(a)));h=r(h);for(var k=h.next();!k.done;k=h.next()){var m=r(k.value).next().value,n=a.get(m);k=new jm;var q=iq(b.config_||aq());F(k,Pk,1,q);n=n?Ht(n):[];n=r(n);for(q=n.next();!q.done;q=n.next())$d(k,3,dm,q.value);(n=lt[m])&&It(k,m,n);delete lt[m];m="visitorOnlyApprovedKey"===m;Jt(k,f,m);Et(d);k=pe(k);m=Gt(d,m,function(u){P("update_log_event_config")&&oi.fa(function(){return x(function(t){return w(t,Ft(u),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;Hq(b,"log_event","",m);jt=!1}}
function Et(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Gt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,yd:a,dangerousLogToVisitorSession:b,zt:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")};Kt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(S())));return a}
function Dt(a,b,c){Kt()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=M("EVENT_ID"))&&(c=Lt(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Jt(a,b,c){Kt()||E(a,2,b);if(!c&&(b=M("EVENT_ID"))){c=Lt();var d=new gm;E(d,1,b);E(d,2,c);F(a,gm,5,d)}}
function Lt(){var a=M("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*ct/2));a++;a>ct&&(a=1);ym("BATCH_CLIENT_COUNTER",a);return a}
function Ct(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function It(a,b,c){var d=1===Ud(c,im)?1:-1;if(Ld(c,d))d=1;else if(c.getPlaylistId())d=2;else return;F(a,hm,4,c);a=Vd(a,Pk,1)||new Pk;c=Vd(a,Nk,3)||new Nk;var e=new Mk;E(e,2,b);E(e,1,d);$d(c,12,Mk,e);F(a,Nk,3,c)}
function Ht(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new dm(a[c]))}catch(d){Dm(new R("Transport failed to deserialize "+String(a[c])))}return b}
function pt(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Kt(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function tt(a,b){return P("transport_use_scheduler")?bo(a,b):Ym(a,b)}
function Bt(a){P("transport_use_scheduler")?oi.Da(a):window.clearTimeout(a)}
function Ft(a){var b,c,d,e,f,g,h,k,m,n;return x(function(q){return 1==q.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=$s(d,uk),g=null==(f=d)?void 0:f.hotHashData,h=$s(d,tk),m=null==(k=d)?void 0:k.coldHashData,(n=Vs().resolve(new Qs(Xp)))?g?e?w(q,Yp(n,g,e),2):w(q,Yp(n,g),2):q.A(2):q.return()):m?h?w(q,Zp(n,m,h),0):w(q,Zp(n,m),0):q.A(0)})}
;var Mt=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Mt);
function Nt(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&As();a=Ds();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:Ot(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Mt[d.sequenceGroup]);(d.sendIsolatedPayload?wt:ot)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function Pt(a){ut(void 0,void 0,void 0===a?!1:a)}
function Ot(a){Mt[a]=a in Mt?Mt[a]+1:0;return Mt[a]}
;var Qt=[];function qo(a,b,c){c=void 0===c?{}:c;var d=ns;M("ytLoggingEventsDefaultDisabled",!1)&&ns===ns&&(d=null);P("web_all_payloads_via_jspb")?Qt.push({Mc:a,payload:b,options:c}):Nt(a,b,d,c)}
;var Rt=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Rt);
function St(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||S());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Ds();d=new cm;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=Ot(e),g=new bm;E(g,2,f);E(g,1,e);F(d,bm,3,g);c.endOfSequence&&delete Rt[c.sequenceGroup]}F(a,cm,33,d);(c.sendIsolatedPayload?zt:st)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function Tt(a,b){b=void 0===b?{}:b;var c=!1;M("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);St(a,c?null:ns,b)}
;function Ut(a,b,c){var d=new dm;Yd(d,Rl,72,em,a);c?St(d,c,b):Tt(d,b)}
function Vt(a,b,c){var d=new dm;Yd(d,Ql,73,em,a);c?St(d,c,b):Tt(d,b)}
function Wt(a,b,c){var d=new dm;Yd(d,Pl,78,em,a);c?St(d,c,b):Tt(d,b)}
function Xt(a,b,c){var d=new dm;Yd(d,Sl,208,em,a);c?St(d,c,b):Tt(d,b)}
function Yt(a,b,c){var d=new dm;Yd(d,Kl,156,em,a);c?St(d,c,b):Tt(d,b)}
function Zt(a,b,c){var d=new dm;Yd(d,Ml,215,em,a);c?St(d,c,b):Tt(d,b)}
;var $t=new Set,au=0,bu=0,cu=0,du=[],eu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function po(a){fu(a)}
function gu(a){fu(a,"WARNING")}
function fu(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(P("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=au)){var m=du,n=Ae(a),q=n.message||"Unknown Error",u=n.name||"UnknownError",t=n.stack||a.i||"Not available";if(t.startsWith(u+": "+q)){var z=t.split("\n");z.shift();t=z.join("\n")}var C=n.lineNumber||"Not available",G=n.fileName||"Not available",N=t,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var Q=0;Q<a.args.length&&!(O=yn(a.args[Q],"params."+Q,g,O),500<=O);Q++);else if(a.hasOwnProperty("params")&&
a.params){var aa=a.params;if("object"===typeof a.params)for(var W in aa){if(aa[W]){var wb="params."+W,Ya=An(aa[W]);g[wb]=Ya;O+=wb.length+Ya.length;if(500<O)break}}else g.params=An(aa)}if(m.length)for(var ra=0;ra<m.length&&!(O=yn(m[ra],"params.context."+ra,g,O),500<=O);ra++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:q,name:u,lineNumber:C,fileName:G,stack:N,params:g,sampleWeight:1},oa=Number(a.columnNumber);isNaN(oa)||(H.lineNumber=H.lineNumber+
":"+oa);if("IGNORED"===a.level)var ia=0;else a:{for(var bf=un(),cf=r(bf.Va),Md=cf.next();!Md.done;Md=cf.next()){var ua=Md.value;if(H.message&&H.message.match(ua.Kt)){ia=ua.weight;break a}}for(var Uq=r(bf.Ra),Yk=Uq.next();!Yk.done;Yk=Uq.next()){var Vq=Yk.value;if(Vq.callback(H)){ia=Vq.weight;break a}}ia=1}H.sampleWeight=ia;for(var Wq=r(pn),Zk=Wq.next();!Zk.done;Zk=Wq.next()){var $k=Zk.value;if($k.mc[H.name])for(var Xq=r($k.mc[H.name]),al=Xq.next();!al.done;al=Xq.next()){var Yq=al.value,vh=H.message.match(Yq.regexp);
if(vh){H.params["params.error.original"]=vh[0];for(var bl=Yq.groups,Zq={},Nd=0;Nd<bl.length;Nd++)Zq[bl[Nd]]=vh[Nd+1],H.params["params.error."+bl[Nd]]=vh[Nd+1];H.message=$k.Ic(Zq);break}}}H.params||(H.params={});var $q=un();H.params["params.errorServiceSignature"]="msg="+$q.Va.length+"&cb="+$q.Ra.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!$t.has(H.message)){if("ERROR"===h){vn.cb("handleError",H);if(P("record_app_crashed_web")&&0===cu&&1===H.sampleWeight)if(cu++,P("errors_via_jspb")){var cl=new Bl;E(cl,1,1);if(!P("report_client_error_with_app_crash_ks")){var ar=new wl;E(ar,1,H.message);var br=new xl;F(br,wl,3,ar);var cr=new yl;F(cr,xl,5,br);var dr=new zl;F(dr,yl,9,cr);F(cl,zl,4,dr)}var er=new dm;Yd(er,Bl,20,
em,cl);Tt(er)}else{var fr={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(fr.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});qo("appCrashed",fr)}bu++}else"WARNING"===h&&vn.cb("handleWarning",H);if(P("kevlar_gel_error_routing"))a:{var df=h;if(P("errors_via_jspb")){if(hu())var hr=void 0;else{var Od=new tl;E(Od,1,H.stack);H.fileName&&E(Od,4,H.fileName);var Pb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Pb.length&&(1!==
Pb.length||isNaN(Number(Pb[0]))?2!==Pb.length||isNaN(Number(Pb[0]))||isNaN(Number(Pb[1]))||(E(Od,2,Number(Pb[0])),E(Od,3,Number(Pb[1]))):E(Od,2,Number(Pb[0])));var Pc=new wl;E(Pc,1,H.message);E(Pc,3,H.name);E(Pc,6,H.sampleWeight);"ERROR"===df?E(Pc,2,2):"WARNING"===df?E(Pc,2,1):E(Pc,2,0);var dl=new ul;E(dl,1,!0);Yd(dl,tl,3,vl,Od);var nc=new rl;E(nc,3,window.location.href);for(var ir=M("FEXP_EXPERIMENTS",[]),el=0;el<ir.length;el++){var ay=ir[el];Fd(nc);Sd(nc,5,2,!1,!1).push(ay)}var fl=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!zm()&&fl)for(var jr=r(Object.keys(fl)),Qc=jr.next();!Qc.done;Qc=jr.next()){var kr=Qc.value,gl=new Xk;E(gl,1,kr);E(gl,2,String(fl[kr]));$d(nc,4,Xk,gl)}var hl=H.params;if(hl){var lr=r(Object.keys(hl));for(Qc=lr.next();!Qc.done;Qc=lr.next()){var mr=Qc.value,il=new Xk;E(il,1,"client."+mr);E(il,2,String(hl[mr]));$d(nc,4,Xk,il)}}var nr=M("SERVER_NAME"),or=M("SERVER_VERSION");if(nr&&or){var jl=new Xk;E(jl,1,"server.name");E(jl,2,nr);$d(nc,4,Xk,jl);var kl=new Xk;E(kl,1,"server.version");E(kl,2,or);$d(nc,
4,Xk,kl)}var wh=new xl;F(wh,rl,1,nc);F(wh,ul,2,dl);F(wh,wl,3,Pc);hr=wh}var pr=hr;if(!pr)break a;var qr=new dm;Yd(qr,xl,163,em,pr);Tt(qr)}else{if(hu())var rr=void 0;else{var ef={stackTrace:H.stack};H.fileName&&(ef.filename=H.fileName);var Qb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Qb.length&&(1!==Qb.length||isNaN(Number(Qb[0]))?2!==Qb.length||isNaN(Number(Qb[0]))||isNaN(Number(Qb[1]))||(ef.lineNumber=Number(Qb[0]),ef.columnNumber=Number(Qb[1])):ef.lineNumber=Number(Qb[0]));
var ll={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===df?ll.level="ERROR_LEVEL_ERROR":"WARNING"===df&&(ll.level="ERROR_LEVEL_WARNNING");var by={isObfuscated:!0,browserStackInfo:ef},Pd={pageUrl:window.location.href,kvPairs:[]};M("FEXP_EXPERIMENTS")&&(Pd.experimentIds=M("FEXP_EXPERIMENTS"));var ml=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!zm()&&ml)for(var sr=r(Object.keys(ml)),Rc=sr.next();!Rc.done;Rc=sr.next()){var tr=Rc.value;Pd.kvPairs.push({key:tr,
value:String(ml[tr])})}var nl=H.params;if(nl){var ur=r(Object.keys(nl));for(Rc=ur.next();!Rc.done;Rc=ur.next()){var vr=Rc.value;Pd.kvPairs.push({key:"client."+vr,value:String(nl[vr])})}}var wr=M("SERVER_NAME"),xr=M("SERVER_VERSION");wr&&xr&&(Pd.kvPairs.push({key:"server.name",value:wr}),Pd.kvPairs.push({key:"server.version",value:xr}));rr={errorMetadata:Pd,stackTrace:by,logMessage:ll}}var yr=rr;if(!yr)break a;qo("clientError",yr)}if("ERROR"===df||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&
(Pt(!0),!P("web_fp_via_jspb_and_json")))break b;Pt()}}if(!P("suppress_error_204_logging")){var ff=H.params||{},oc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":ff.name},postParams:{url:M("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};ff.version&&(oc["client.version"]=ff.version);if(oc.postParams){H.stack&&(oc.postParams.stack=H.stack);for(var zr=r(Object.keys(ff)),ol=zr.next();!ol.done;ol=zr.next()){var Ar=ol.value;
oc.postParams["client."+Ar]=ff[Ar]}var pl=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(pl)for(var Br=r(Object.keys(pl)),ql=Br.next();!ql.done;ql=Br.next()){var Cr=ql.value;oc.postParams[Cr]=pl[Cr]}var Dr=M("SERVER_NAME"),Er=M("SERVER_VERSION");Dr&&Er&&(oc.postParams["server.name"]=Dr,oc.postParams["server.version"]=Er)}dn(M("ECATCHER_REPORT_HOST","")+"/error_204",oc)}try{$t.add(H.message)}catch(Pz){}au++}}}}
function hu(){for(var a=r(eu),b=a.next();!b.done;b=a.next())if(on(b.value.toLowerCase()))return!0;return!1}
function iu(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function ju(){this.register=new Map}
function ku(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ot("ABORTED")}
ju.prototype.clear=function(){ku(this);this.register.clear()};
var lu=new ju;var mu=Date.now().toString();function nu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(mu)for(b=1,c=0;c<mu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^mu.charCodeAt(c),b++;return a}
function ou(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return nu()}
function pu(){for(var a=ou(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var qu=y.ytLoggingDocDocumentNonce_;qu||(qu=pu(),A("ytLoggingDocDocumentNonce_",qu));var ru=qu;var su={Vj:0,gg:1,qg:2,Hn:3,Xj:4,Es:5,Ho:6,zq:7,Op:8,mq:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function tu(a){this.O=a}
function uu(a){return new tu({trackingParams:a})}
tu.prototype.getAsJson=function(){var a={};void 0!==this.O.trackingParams?a.trackingParams=this.O.trackingParams:(a.veType=this.O.veType,void 0!==this.O.veCounter&&(a.veCounter=this.O.veCounter),void 0!==this.O.elementIndex&&(a.elementIndex=this.O.elementIndex));void 0!==this.O.dataElement&&(a.dataElement=this.O.dataElement.getAsJson());void 0!==this.O.youtubeData&&(a.youtubeData=this.O.youtubeData);return a};
tu.prototype.getAsJspb=function(){var a=new Dl;if(void 0!==this.O.trackingParams){var b=this.O.trackingParams;if(null!=b)if("string"===typeof b)b=b?new pd(b,md):nd||(nd=new pd(null,md));else if(b.constructor!==pd)if(ld(b))b=b.length?new pd(new Uint8Array(b),md):nd||(nd=new pd(null,md));else throw Error();E(a,1,b)}else void 0!==this.O.veType&&E(a,2,this.O.veType),void 0!==this.O.veCounter&&E(a,6,this.O.veCounter),void 0!==this.O.elementIndex&&E(a,3,this.O.elementIndex);void 0!==this.O.dataElement&&
(b=this.O.dataElement.getAsJspb(),F(a,Dl,7,b));void 0!==this.O.youtubeData&&F(a,zk,8,this.O.jspbYoutubeData);return a};
tu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
tu.prototype.isClientVe=function(){return!this.O.trackingParams&&!!this.O.veType};function vu(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function wu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function xu(a){return M(wu(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",xu);function yu(a){return(a=xu(void 0===a?0:a))?new tu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function zu(){var a=M("csn-to-ctt-auth-info");a||(a={},ym("csn-to-ctt-auth-info",a));return a}
function Au(a){a=M(vu(void 0===a?0:a));if(!a&&!M("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Au);function Bu(a){for(var b=r(Object.values(su)),c=b.next();!c.done;c=b.next())if(Au(c.value)===a)return!0;return!1}
function Cu(a,b,c){var d=zu();(c=Au(c))&&delete d[c];b&&(d[a]=b)}
function Du(a){return zu()[a]}
A("yt_logging_screen.getCttAuthInfo",Du);function Eu(a,b,c,d){c=void 0===c?0:c;if(a!==M(vu(c))||b!==M(wu(c)))if(Cu(a,d,c),ym(vu(c),a),ym(wu(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new El;E(e,1,ru);E(e,2,a);var f=new dm;Yd(f,El,111,em,e);Tt(f)}else qo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ru,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Eu);var Fu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Fu);function Gu(a){tm(Fu,arguments)}
;var Hu={fg:3611,kf:27686,lf:85013,mf:23462,nf:157557,pf:42016,qf:62407,rf:26926,sf:51236,tf:79148,uf:50160,vf:77504,Hf:153587,If:87907,Jf:18630,Kf:54445,Lf:80935,Mf:152172,Nf:105675,Of:150723,Pf:37521,Qf:147285,Rf:47786,Sf:98349,Tf:168271,Uf:168954,Vf:168277,Wf:168273,Xf:168270,Yf:123695,Zf:6827,ag:29434,cg:171388,dg:7282,eg:124448,ig:32276,hg:76278,jg:147868,kg:147869,lg:93911,mg:106531,ng:27259,og:27262,pg:27263,rg:21759,sg:27107,tg:62936,ug:160866,vg:49568,wg:171243,xg:160789,yg:171244,zg:171241,
Ag:171245,Bg:171242,Cg:38408,Dg:80637,Eg:68727,Fg:68728,Gg:80353,Hg:80356,Ig:74610,Jg:45707,Kg:83962,Lg:83970,Mg:46713,Ng:166591,Og:89711,Pg:74612,Qg:155792,Rg:93265,Sg:74611,Tg:131380,Vg:128979,Wg:139311,Xg:128978,Ug:131391,Yg:105350,ah:139312,bh:134800,Zg:131392,eh:113533,fh:93252,gh:99357,ih:94521,jh:114252,kh:113532,lh:94522,hh:94583,mh:88E3,nh:139580,oh:93253,ph:93254,qh:94387,rh:94388,sh:93255,th:97424,dh:72502,uh:110111,vh:76019,xh:117092,yh:117093,wh:89431,zh:110466,Ah:77240,Bh:60508,Ch:148123,
Dh:148124,Eh:137401,Fh:137402,Gh:137046,Hh:73393,Ih:113534,Jh:92098,Kh:131381,Lh:84517,Mh:83759,Nh:162711,Oh:162712,Ph:80357,Qh:86113,Rh:72598,Sh:168413,Th:72733,Uh:107349,Vh:124275,Wh:118203,Xh:133275,Yh:160157,Zh:152569,ai:156651,bi:133274,ci:160159,di:160158,fi:133272,gi:133273,hi:133276,ii:144507,ji:143247,ki:156652,li:143248,mi:143249,ni:143250,oi:143251,ri:156653,si:144401,vi:117431,ti:133797,wi:153964,xi:128572,yi:133405,zi:117429,Ai:117430,Bi:117432,Ci:120080,Di:117259,Ei:156655,Fi:156654,
Gi:121692,Hi:145656,Ii:156656,Ji:145655,Ki:145653,Li:145654,Mi:145657,Ni:132972,Oi:133051,Pi:133658,Qi:132971,Ri:97615,Ti:143359,Si:143356,Vi:143361,Ui:143358,Xi:143360,Wi:143357,Yi:142303,Zi:143353,aj:172859,bj:143354,cj:144479,dj:143355,ej:31402,gj:133624,hj:146477,ij:133623,jj:133622,fj:133621,kj:84774,mj:160801,lj:95117,nj:172721,oj:150497,pj:98930,qj:98931,rj:98932,sj:153320,tj:153321,uj:43347,vj:129889,wj:149123,xj:45474,yj:100352,zj:84758,Aj:98443,Bj:117985,Cj:74613,Dj:155911,Ej:74614,Fj:64502,
Gj:136032,Hj:74615,Ij:74616,Jj:122224,Kj:74617,Lj:77820,Mj:74618,Nj:93278,Oj:93274,Pj:93275,Qj:93276,Rj:22110,Sj:29433,Tj:133798,Uj:132295,Wj:120541,Yj:82047,Zj:113550,ak:75836,bk:75837,ck:42352,dk:84512,ek:76065,fk:75989,kk:51879,lk:16623,mk:32594,nk:27240,pk:32633,qk:74858,rk:156999,tk:3945,sk:16989,uk:45520,vk:25488,wk:25492,xk:25494,yk:55760,zk:14057,Ak:18451,Bk:57204,Ck:57203,Dk:17897,Ek:57205,Fk:18198,Gk:17898,Hk:17909,Ik:43980,Jk:46220,Kk:11721,Lk:147994,Mk:49954,Nk:96369,Ok:3854,Pk:151633,
Qk:56251,Rk:159108,Sk:25624,Tk:152036,ql:16906,rl:99999,sl:68172,ul:27068,vl:47973,wl:72773,xl:26970,yl:26971,zl:96805,Al:17752,Bl:73233,Cl:109512,Dl:22256,El:14115,Fl:22696,Gl:89278,Hl:89277,Il:109513,Jl:43278,Kl:43459,Ll:43464,Ml:89279,Nl:43717,Ol:55764,Pl:22255,Ql:147912,Rl:89281,Sl:40963,Tl:43277,Ul:43442,Vl:91824,Wl:120137,Xl:96367,Yl:36850,Zl:72694,am:37414,bm:36851,dm:124863,cm:121343,em:73491,fm:54473,gm:166861,hm:43375,im:46674,jm:143815,km:139095,lm:144402,mm:149968,nm:149969,om:32473,pm:72901,
qm:72906,rm:50612,sm:50613,tm:50942,um:84938,vm:84943,wm:84939,xm:84941,ym:84944,zm:84940,Am:84942,Bm:35585,Cm:51926,Dm:79983,Em:18921,Fm:57893,Gm:41182,Hm:135732,Im:33424,Jm:22207,Km:36229,Lm:22206,Mm:22205,Nm:44763,Om:33427,Pm:67793,Qm:22182,Rm:37091,Sm:34650,Tm:50617,Um:22287,Vm:25144,Wm:97917,Xm:62397,Ym:150871,Zm:150874,an:125598,bn:137935,cn:36961,dn:108035,en:27426,fn:27857,gn:27846,hn:27854,jn:69692,kn:61411,ln:39299,mn:38696,nn:62520,pn:36382,qn:108701,rn:50663,sn:36387,tn:14908,un:37533,
vn:105443,wn:61635,xn:62274,yn:161670,zn:133818,An:65702,Bn:65703,Cn:65701,Dn:76256,En:166382,Fn:37671,Gn:49953,In:36216,Jn:28237,Kn:173718,Ln:39553,Mn:29222,Nn:26107,On:38050,Pn:26108,Rn:120745,Qn:26109,Sn:26110,Tn:66881,Un:28236,Vn:14586,Wn:160598,Xn:57929,Yn:74723,Zn:44098,ao:173689,bo:44099,fo:23528,ho:61699,co:134104,eo:134103,jo:59149,ko:173191,lo:173192,mo:173193,oo:101951,no:171502,po:97346,qo:118051,ro:95102,so:64882,to:119505,uo:63595,vo:63349,wo:95101,xo:75240,yo:27039,zo:68823,Ao:21537,
Bo:83464,Co:75707,Do:170215,Eo:83113,Fo:101952,Go:101953,Io:79610,Jo:125755,Ko:24402,Lo:24400,Mo:32925,Oo:57173,No:156421,Po:122502,Qo:145268,Ro:138480,So:64423,To:64424,Uo:33986,Vo:100828,Wo:129089,Xo:21409,bp:135155,cp:135156,ep:135157,fp:135158,gp:158225,hp:135159,ip:135160,jp:167651,kp:135161,mp:135162,np:135163,lp:158226,qp:158227,rp:135164,sp:135165,tp:135166,Yo:11070,Zo:11074,ap:17880,vp:30709,wp:30707,xp:30711,yp:30710,zp:30708,up:26984,Ap:146143,Bp:63648,Cp:63649,Dp:111059,Ep:5754,Fp:20445,
Gp:151308,Hp:151152,Kp:130975,Jp:130976,Ip:167637,Lp:110386,Mp:113746,Np:66557,Pp:17310,Qp:28631,Rp:21589,Sp:164817,Tp:168011,Up:154946,Vp:68012,Wp:162617,Xp:60480,Yp:138664,Zp:141121,aq:164502,bq:31571,cq:141978,fq:150105,gq:150106,hq:150107,iq:150108,jq:76980,kq:41577,lq:45469,nq:38669,oq:13768,pq:13777,qq:141842,rq:62985,sq:4724,tq:59369,uq:43927,wq:43928,xq:12924,yq:100355,Bq:56219,Cq:27669,Dq:10337,Aq:47896,Eq:122629,Gq:139723,Fq:139722,Hq:121258,Iq:107598,Jq:127991,Kq:96639,Lq:107536,Mq:130169,
Nq:96661,Oq:145188,Pq:96658,Qq:116646,Rq:159428,Tq:168611,Uq:168612,Sq:121122,Vq:96660,Wq:127738,Xq:127083,Yq:155281,Zq:162959,br:163566,dr:147842,er:104443,fr:96659,gr:147595,hr:106442,ir:162776,jr:134840,kr:63667,lr:63668,mr:63669,pr:130686,qr:147036,rr:78314,sr:147799,tr:148649,ur:55761,vr:127098,wr:134841,xr:96368,yr:67374,zr:48992,Ar:146176,Br:49956,Cr:31961,Dr:26388,Er:23811,Fr:5E4,Gr:126250,Hr:96370,Ir:47355,Jr:47356,Kr:37935,Lr:45521,Mr:21760,Nr:83769,Or:49977,Pr:49974,Qr:93497,Rr:93498,Sr:34325,
Tr:140759,Ur:115803,Vr:123707,Wr:100081,Xr:35309,Yr:68314,Zr:25602,bs:100339,ds:170873,es:143516,gs:59018,hs:18248,ks:50625,ls:9729,ms:37168,ns:37169,qs:21667,rs:16749,ts:18635,us:39305,vs:18046,ws:53969,xs:8213,ys:93926,zs:102852,As:110099,Bs:22678,Cs:69076,Ds:137575,Fs:139224,Gs:100856,Hs:154430,Is:17736,Js:3832,Ks:147111,Ls:55759,Ms:64031,Ss:93044,Ts:93045,Us:170701,Vs:170702,Ys:34388,Ws:167841,Xs:170419,Zs:17657,bt:17655,ct:39579,et:39578,ft:170412,gt:77448,ht:8196,jt:11357,kt:69877,lt:8197,mt:168501,
nt:156512,ot:161613,pt:156509,qt:161612,rt:161614,tt:82039};function Iu(){var a=ub(Ju),b;return(new Df(function(c,d){a.onSuccess=function(e){Xm(e)?c(new Ku(e)):d(new Lu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Lu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Lu("Request timed out","net.timeout",e))};
b=dn("//googleads.g.doubleclick.net/pagead/id",a)})).tc(function(c){c instanceof Kf&&b.abort();
return If(c)})}
function Lu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Lu,bb);function Ku(a){this.xhr=a}
;function Mu(){this.h=0;this.Aa=null}
Mu.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.Aa))&&"function"===typeof a.then?a:Nu(a):2===this.h&&b?(a=b.call(c,this.Aa))&&"function"===typeof a.then?a:Ou(a):this};
Mu.prototype.getValue=function(){return this.Aa};
Mu.prototype.$goog_Thenable=!0;function Ou(a){var b=new Mu;a=void 0===a?null:a;b.h=2;b.Aa=void 0===a?null:a;return b}
function Nu(a){var b=new Mu;a=void 0===a?null:a;b.h=1;b.Aa=void 0===a?null:a;return b}
;function Pu(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Om(a)?"same-origin":"cors",credentials:Om(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Qu(){return Dg()||nn&&on("applewebkit")&&!on("version")&&(!on("safari")||on("gsa/"))||Lc&&on("version/")?!0:M("EOM_VISITOR_DATA")?!1:!0}
;function Ru(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Uk)if(Uk[c]==b.embeddedPlayerMode){b=Uk[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Su(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Tu;this.isTimeout=a instanceof Lu&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Kf}
v(Su,bb);Su.prototype.name="BiscottiError";function Tu(){bb.call(this,"Biscotti ID is missing from server")}
v(Tu,bb);Tu.prototype.name="BiscottiMissingError";var Ju={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Uu=null;function Vu(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Qu())return Error("User has not consented - not fetching biscotti id.");var a=M("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(Ru(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function rm(){var a=Vu();if(void 0!==a)return If(a);Uu||(Uu=Iu().then(Wu).tc(function(b){return Xu(2,b)}));
return Uu}
function Wu(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Tu;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Tu;a=a.id;sm(a);Uu=Nu(a);Yu(18E5,2);return a}
function Xu(a,b){b=new Su(b);sm("");Uu=Ou(b);0<a&&Yu(12E4,a-1);throw b;}
function Yu(a,b){Ym(function(){Iu().then(Wu,function(c){return Xu(b,c)}).tc(db)},a)}
function Zu(){try{var a=B("yt.ads.biscotti.getId_");return a?a():rm()}catch(b){return If(b)}}
;function $u(a){if("1"!=sb(M("PLAYER_VARS",{}))){a&&qm();try{Zu().then(function(){},function(){}),Ym($u,18E5)}catch(b){Dm(b)}}}
;function av(){var a=Nn(),b=Qn(119),c=1<window.devicePixelRatio;if(document.body&&yi(document.body,"exp-invert-logo"))if(c&&!yi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yi(d,"inverted-hdpi")){var e=wi(d);xi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yi(document.body,"inverted-hdpi")&&zi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Rn(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Kn[b]:(c=d.toString(16),Kn[b]=c.toString());
c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Kn)Kn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Kn[f])));Hn(b,d.join("&"),63072E3,a.i,c)}}
;var bv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function cv(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;lc(mc(5,a));try{var b=Mm(a).theme;return bv.get(b)||null}catch(c){}return null}
;function dv(){this.h={};if(this.i=Jn()){var a=Bg.get("CONSISTENCY",void 0);a&&ev(this,{encryptedTokenJarContents:a})}}
dv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];ev(this,a)}};
function ev(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Hn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var fv=window.location.hostname.split(".").slice(-2).join(".");function gv(){var a=M("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===M("INNERTUBE_CLIENT_NAME")&&(this.h=hv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var iv;function jv(){iv=B("yt.clientLocationService.instance");iv||(iv=new gv,A("yt.clientLocationService.instance",iv));return iv}
l=gv.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===M("INNERTUBE_CLIENT_NAME")?(this.h=hv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Hn("YT_CL",JSON.stringify({loctok:a}),15552E3,fv,!0))};
function hv(a){return void 0===a.h?new ho("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=hv(this))&&this.h.remove("yt-location-playability-token"):In("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===M("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function kv(a,b){var c,d=null==(c=$s(a,Tk))?void 0:c.signal;if(d&&b.Qb&&(c=b.Qb[d]))return c();var e;if((c=null==(e=$s(a,Rk))?void 0:e.request)&&b.ge&&(e=b.ge[c]))return e();for(var f in a)if(b.gd[f]&&(a=b.gd[f]))return a()}
;function lv(a){return function(){return new a}}
;var mv={},nv=(mv.WEB_UNPLUGGED="^unplugged/",mv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",mv.WEB_UNPLUGGED_OPS="^unplugged/",mv.WEB_UNPLUGGED_PUBLIC="^unplugged/",mv.WEB_CREATOR="^creator/",mv.WEB_KIDS="^kids/",mv.WEB_EXPERIMENTS="^experiments/",mv.WEB_MUSIC="^music/",mv.WEB_REMIX="^music/",mv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",mv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",mv);
function ov(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=nv[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(nv).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function pv(){}
pv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?En:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=M("INNERTUBE_CONTEXT");if(g){g=vb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Nn();var m="USER_INTERFACE_THEME_LIGHT";Qn(165)?m="USER_INTERFACE_THEME_DARK":Qn(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:cv()||m;h.userInterfaceTheme=k;if(!f){if(k=Xn())h.connectionType=
k;P("web_log_effective_connection_type")&&(k=Yn())&&(g.client.effectiveConnectionType=k)}var n;if(P("web_log_memory_total_kbytes")&&(null==(n=y.navigator)?0:n.deviceMemory)){var q;n=null==(q=y.navigator)?void 0:q.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}q=Mm(y.location.href);!P("web_populate_internal_geo_killswitch")&&q.internalcountrycode&&(h.internalGeo=q.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},P("kevlar_woffle")&&Fn.h&&
(q=Fn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!q.h&&q.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Gn(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(q=M("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:q})),q=M("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:q}));
if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(wb){}u=void 0}u&&(h.timeZone=u)}(u=Tm())?h.experimentsToken=u:delete h.experimentsToken;u=Um();dv.h||(dv.h=new dv);h=dv.h.h;q=[];n=0;for(var t in h)q[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:u,consistencyTokenJars:q});!P("web_prequest_context_killswitch")&&(t=M("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
t);u=Nn();t=Qn(58);u=u.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);u&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=Au())&&(g.clientScreenNonce=f):!f&&(f=Au())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;jv().setLocationOnInnerTubeContext(g);try{var z=Pm(),C=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:C};var G=r(Object.entries(z));for(var N=G.next();!N.done;N=G.next()){var O=
r(N.value),Q=O.next().value,aa=O.next().value;z=Q;C=aa;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+C})}}catch(wb){fu(wb)}G=g}else fu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),G={};G={context:G};if(N=this.h(a)){this.i(G,N,b);var W;b="/youtubei/v1/"+ov(this.j());(N=null==(W=$s(a.commandMetadata,Sk))?void 0:W.apiUrl)&&(b=N);W=b;(b=M("INNERTUBE_HOST_OVERRIDE"))&&(W=String(b)+String(qc(W)));b={};b.key=M("INNERTUBE_API_KEY");P("json_condensed_response")&&(b.prettyPrint=
"false");W=Nm(W,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:W,kb:Pu(W),La:G,config:a};a.config.Zb?a.config.Zb.identity=c:a.config.Zb={identity:c};return a}fu(new R("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(pv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function qv(){}
v(qv,pv);qv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Pu("/getDatasyncIdsEndpoint","GET"),La:{}}};
qv.prototype.j=function(){return[]};
qv.prototype.h=function(){};
qv.prototype.i=function(){};var rv={},sv=(rv.GET_DATASYNC_IDS=lv(qv),rv);function tv(a){var b=Ka.apply(1,arguments);if(!uv(a)||b.some(function(d){return!uv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())vv(a,c.value);return a}
function vv(a,b){for(var c in b)if(uv(b[c])){if(c in a&&!uv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});vv(a[c],b[c])}else if(wv(b[c])){if(c in a&&!wv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);xv(a[c],b[c])}else a[c]=b[c];return a}
function xv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,uv(c)?a.push(vv({},c)):wv(c)?a.push(xv([],c)):a.push(c);return a}
function uv(a){return"object"===typeof a&&!Array.isArray(a)}
function wv(a){return"object"===typeof a&&Array.isArray(a)}
;function yv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function zv(){var a=yv();a.info||(a.info={});return a.info}
function Av(a){a=yv(a);a.metadata||(a.metadata={});return a.metadata}
function Bv(a){a=yv(a);a.tick||(a.tick={});return a.tick}
function Cv(a){a=yv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Dv(a){a=Cv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ev(a){var b=yv(a).nonce;b||(b=pu(),yv(a).nonce=b);return b}
;function Fv(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function Gv(a){a=a||"";var b=B("ytcsi.reference");b||(Fv(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Fv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Hv=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
T["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",T["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",T["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",T["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",T["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",T["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",T["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",T["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
T["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",
T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",T["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",T["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",T["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",T["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",T["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",T["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",T["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",T["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",T["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",T["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
T["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",T["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",T["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",T["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",T["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",T["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",T["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",T["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",
T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",T["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",T),U={},Iv=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",
U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",
U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",
U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",
U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Jv="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Kv={},Lv=(Kv.ccs="CANARY_STATE_",Kv.mver="MEASUREMENT_VERSION_",Kv.pis="PLAYER_INITIALIZED_STATE_",
Kv.yt_pt="LATENCY_PLAYER_",Kv.pa="LATENCY_ACTION_",Kv.ctop="TOP_ENTITY_TYPE_",Kv.yt_vst="VIDEO_STREAM_TYPE_",Kv),Mv="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Nv(a){return Hv[a]||"LATENCY_ACTION_UNKNOWN"}
function Ov(a,b,c){c=Cv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Iv){c=Iv[a];0<=fb(Jv,c)&&(b=!!b);a in Lv&&"string"===typeof b&&(b=Lv[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return tv({},d)}0<=fb(Mv,a)||gu(new R("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,
LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,
LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,
LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,
LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,
LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,
LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,
LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,
LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,
LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,
LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,
LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,
LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,
LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";V[V.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
V[V.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";
V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";
V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";
V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";
V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";V[V.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";
V[V.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";
V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";
V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";
V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";V[V.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";
V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";V[V.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";V[V.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";V[V.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";V[V.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";
V[V.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";V[V.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";V[V.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";V[V.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";V[V.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";V[V.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";V[V.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";V[V.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";V[V.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Pv={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Pv[Pv.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Pv[Pv.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Pv[Pv.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Qv={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Qv[Qv.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Qv[Qv.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Qv[Qv.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Qv[Qv.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Qv[Qv.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Qv[Qv.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Qv[Qv.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Qv[Qv.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Rv={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Rv[Rv.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Rv[Rv.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Rv[Rv.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Rv[Rv.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Sv={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Sv[Sv.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Sv[Sv.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Tv={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Tv[Tv.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Tv[Tv.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Tv[Tv.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Tv[Tv.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Tv[Tv.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Tv[Tv.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Uv={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Uv[Uv.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Uv[Uv.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Uv[Uv.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Uv[Uv.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Vv={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Vv[Vv.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Vv[Vv.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Vv[Vv.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Wv={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Wv[Wv.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Wv[Wv.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Wv[Wv.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Xv="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext".split(" ");function Yv(a,b){kq.call(this,1,arguments);this.timer=b}
v(Yv,kq);var Zv=new lq("aft-recorded",Yv);var $v=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",$v);function aw(){this.h=0}
function bw(){aw.h||(aw.h=new aw);return aw.h}
aw.prototype.tick=function(a,b,c,d){cw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new am,E(d,1,a),E(d,2,b),a=new dm,Yd(a,am,5,em,d),Tt(a,c)):qo("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
aw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");cw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,qo("latencyActionInfo",a,{cttAuthInfo:c}))};
aw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));cw(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new dm,Yd(c,Yl,7,em,a),Tt(c,b))};
aw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");cw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,qo("latencyActionSpan",a,{cttAuthInfo:c}))};
function cw(a,b){$v[b]=$v[b]||{count:0};var c=$v[b];c.count++;c.time=S();a.h||(a.h=bo(function(){var d=S(),e;for(e in $v)$v[e]&&6E4<d-$v[e].time&&delete $v[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||gu(c)),!0):!1}
;var dw=window;function ew(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function fw(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=gw(e.requestStart),e.responseEnd=gw(e.responseEnd),e.redirectStart=gw(e.redirectStart),e.redirectEnd=gw(e.redirectEnd),e.domainLookupEnd=gw(e.domainLookupEnd),e.connectStart=gw(e.connectStart),e.connectEnd=
gw(e.connectEnd),e.responseStart=gw(e.responseStart),e.secureConnectionStart=gw(e.secureConnectionStart),e.domainLookupStart=gw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function gw(a){return Math.round(hw()+a)}
function hw(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=dw.performance||dw.mozPerformance||dw.msPerformance||dw.webkitPerformance||new ew;var iw=!1,jw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||db,Z);function kw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Av(c).loadType=e}(a=Ov(a,b,c))&&lw(a,c,d)}}
function lw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=Gv(b||""),tv(c.info,a),a.loadType&&(c=a.loadType,Av(b).loadType=c),tv(Dv(b),a),c=Ev(b),b=yv(b).cttAuthInfo,bw().info(a,c,b);else{c=new Yl;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":E(c,1,V[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,92,a[e]);break;case "isFirstInstall":E(c,
55,a[e]);break;case "networkType":E(c,5,Pv[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,Qv[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,a[e]);break;case "isPrerollShown":E(c,17,
a[e]);break;case "adType":E(c,12,a[e]);break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,V[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,Rv[a[e]]);break;case "isNavigation":E(c,25,a[e]);break;case "viewportHeight":E(c,29,a[e]);break;case "viewportWidth":E(c,
30,a[e]);break;case "screenHeight":E(c,84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,64,a[e]);break;case "shellStartupDurationMs":E(c,
70,a[e]);break;case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Sv[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "isResume":E(c,104,a[e]);break;case "debugTicksExcluded":E(c,105,a[e]);break;case "adPrebufferedTimeSecs":E(c,39,a[e]);break;case "isLivestream":E(c,
47,a[e]);break;case "liveStreamMode":E(c,91,Tv[a[e]]);break;case "adCpn2":E(c,48,a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Uv[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Vv[a[e]]);break;case "playerRotationType":E(c,101,Wv[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,57,a[e]);break;
case "getSearchRequestId":E(c,60,a[e]);break;case "getPlayerRequestId":E(c,61,a[e]);break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;case "isTransformerEnabledForFeature":E(c,106,a[e]);break;default:Xv.includes(f)&&Dm(new R("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Dm(Error("Codegen laipb translator failed to set "+f))}}mw(c,b)}}
function mw(a,b){var c=de(a,3);c&&(Av(b).loadType=c);Gv(b||"").jspbInfo.push(a);c=Ev(b);b=yv(b).cttAuthInfo;bw().jspbInfo(a,c,b)}
function nw(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=Gv(c||"");d.tick[a]=b||S();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Cv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Bv(c);d=b||S();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Ev(c);var f=yv(c).cttAuthInfo;"_start"===a?(a=bw(),cw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new Tl,
E(a,1,e),e=new dm,Yd(e,Tl,6,em,a),Tt(e,b)):qo("latencyActionBaselined",{clientActionNonce:e},b))):bw().tick(a,e,b,f);ow(c);return d}
function pw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ps+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function qw(a){var b=fw(),c=hw(),d=M("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(nw("srt",b.responseStart),1!==a.prerender&&nw("_start",c,void 0));a=rw();0<a&&nw("fpt",a);a=fw();a.isPerformanceNavigationTiming&&lw({performanceNavigationTiming:!0},void 0);nw("nreqs",a.requestStart,void 0);nw("nress",a.responseStart,void 0);nw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(nw("nrs",a.redirectStart,void 0),nw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(nw("ndnss",a.domainLookupStart,void 0),nw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(nw("ntcps",a.connectStart,void 0),nw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=hw()&&0<a.connectEnd-a.secureConnectionStart&&(nw("nstcps",a.secureConnectionStart,void 0),nw("ntcpe",a.connectEnd,void 0));Z&&"getEntriesByType"in Z&&sw()}
function tw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);hc()&&a.setAttribute("nonce",hc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=hw(),nw("rsf_"+b,c+Math.round(a.fetchStart)),nw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function uw(){var a=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var b in jw)if(jw.hasOwnProperty(b)){var c=jw[b];tw(b,c)&&a.push(c)}return a}
function sw(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(nw("wffs",gw(b.startTime)),nw("wffe",gw(b.responseEnd)))}
function vw(a){var b=ww("aft",a);if(b)return b;b=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=ww(b[d],a);if(e)return e}return NaN}
function ww(a,b){if(a=Bv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function ow(a){var b=ww("_start",a),c=vw(a);b&&c&&!iw&&(qq(Zv,new Yv(Math.round(c-b),a)),iw=!0)}
function xw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!xw(a[d],b[d]))return!1;return!0}
function rw(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return gw(a.startTime)}a=Z.timing;
return a.Ge?Math.max(0,a.Ge):0}
;function yw(a,b){function c(){Gv("").info.actionType=a;b&&ym("TIMING_AFT_KEYS",b);ym("TIMING_ACTION",a);if(P("web_csi_via_jspb")){var d=M("TIMING_INFO",{}),e=new Yl;d=r(Object.entries(d));for(var f=d.next();!f.done;f=d.next()){var g=r(f.value);f=g.next().value;g=g.next().value;switch(f){case "GetBrowse_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetGuide_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetHome_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetPlayer_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetSearch_rid":$l(e,
Wl(Vl(f),String(g)));break;case "GetSettings_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetTrending_rid":$l(e,Wl(Vl(f),String(g)));break;case "GetWatchNext_rid":$l(e,Wl(Vl(f),String(g)));break;case "yt_red":E(e,14,!!g);break;case "yt_ad":E(e,9,!!g)}}mw(e);e=new Yl;e=E(e,25,!0);e=E(e,1,V[Nv(M("TIMING_ACTION"))]);(d=M("PREVIOUS_ACTION"))&&E(e,13,V[Nv(d)]);(d=M("CLIENT_PROTOCOL"))&&E(e,33,d);(d=M("CLIENT_TRANSPORT"))&&E(e,34,d);(d=Au())&&"UNDEFINED_CSN"!==d&&E(e,4,d);d=pw();1!==d&&-1!==d||E(e,6,!0);
d=zv();Av();E(e,3,"cold");qw(d);d=uw();if(0<d.length)for(d=r(d),f=d.next();!f.done;f=d.next())f=f.value,g=new Xl,E(g,1,f),$d(e,83,Xl,g);mw(e)}else{e=M("TIMING_INFO",{});for(d in e)e.hasOwnProperty(d)&&kw(d,e[d]);e={isNavigation:!0,actionType:Nv(M("TIMING_ACTION"))};if(d=M("PREVIOUS_ACTION"))e.previousAction=Nv(d);if(d=M("CLIENT_PROTOCOL"))e.httpProtocol=d;if(d=M("CLIENT_TRANSPORT"))e.transportProtocol=d;(d=Au())&&"UNDEFINED_CSN"!==d&&(e.clientScreenNonce=d);d=pw();if(1===d||-1===d)e.isVisible=!0;
Av();zv();e.loadType="cold";qw(zv());d=uw();if(0<d.length)for(e.resourceInfo=[],d=r(d),f=d.next();!f.done;f=d.next())e.resourceInfo.push({resourceCache:f.value});lw(e)}e=zv();d=Dv();if("cold"===Av().loadType&&("cold"===e.yt_lt||"cold"===d.loadType)){f=Bv();g=Cv();g=g.gelTicks?g.gelTicks:g.gelTicks={};for(var h in f)if(!(h in g))if("number"===typeof f[h])nw(h,ww(h));else if(P("log_repeated_ytcsi_ticks"))for(var k=r(f[h]),m=k.next();!m.done;m=k.next())nw(h.slice(1),m.value);h={};f=!1;g=r(Object.keys(e));
for(k=g.next();!k.done;k=g.next())k=k.value,(k=Ov(k,e[k]))&&!xw(Dv(),k)&&(tv(d,k),tv(h,k),f=!0);f&&lw(h)}A("ytglobal.timingready_",!0);h=M("TIMING_ACTION");B("ytglobal.timingready_")&&h&&zw()&&vw()&&ow()}
P("safe_logging_library_killswitch")?c():Cm(c)()}
function Aw(a,b,c,d){P("safe_logging_library_killswitch")?kw(a,b,c,d):Cm(kw)(a,b,c,d)}
function Bw(a){var b=void 0===b?!1:b;P("safe_logging_library_killswitch")?lw(a,void 0,b):Cm(lw)(a,void 0,b)}
function Cw(a,b,c){return P("safe_logging_library_killswitch")?nw(a,b,c):Cm(nw)(a,b,c)}
function zw(){function a(){return"_start"in Bv()}
return P("safe_logging_library_killswitch")?a():Cm(a)()}
function Dw(){function a(){var b=Ev();requestAnimationFrame(function(){setTimeout(function(){b===Ev()&&Cw("ol",void 0,void 0)},0)})}
P("safe_logging_library_killswitch")?a():Cm(a)()}
var Ew=window;Ew.ytcsi&&(Ew.ytcsi.info=Aw,Ew.ytcsi.tick=Cw);var Fw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Gw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Hw(a,b,c,d){this.m=a;this.W=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},sv,a.Qb)}
function Iw(a,b,c,d){if(void 0!==Hw.h){if(d=Hw.h,a=[a!==d.m,b!==d.W,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new R("InnerTubeTransportService is already initialized",a);
}else Hw.h=new Hw(a,b,c,d)}
function Jw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?En:c;var d=kv(b,a.m);if(!d)return If(new R("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Df(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.l.cf){var n=e.config,q;n=null==n?void 0:null==(q=n.Zb)?void 0:q.sessionIndex;q=Dn(0,{sessionIndex:n});k=Object.assign({},Kw(h),q);return m.A(2)}return w(m,Lw(e.config,
h),3)}2!=m.h&&(k=m.i);f(Mw(a,e,k));m.h=0})}):If(new R("Error: Failed to build request for command.",b))}
function Nw(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Rt)?0:d.Ut)&&a.j){d=r(Fw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Mw(a,b,c){var d,e,f,g,h,k,m,n,q,u,t,z,C,G,N,O,Q,aa,W,wb,Ya,ra,H,oa,ia,bf,cf,Md;return x(function(ua){switch(ua.h){case 1:ua.A(2);break;case 3:if((d=ua.i)&&!d.isExpired())return ua.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.La)?0:f.context)for(g=r([]),h=g.next();!h.done;h=g.next())k=h.value,k.Nt(b.La.context);if(null==(m=a.i)||!m.St(b.input,b.La)){ua.A(4);break}return w(ua,a.i.It(b.input,b.La),5);case 5:return n=ua.i,P("kevlar_process_local_innertube_responses_killswitch")||
Nw(a,n,b),ua.return(n);case 4:return(t=null==(u=b.config)?void 0:u.Oa)&&a.h.has(t)&&P("web_memoize_inflight_requests")?q=a.h.get(t):(z=JSON.stringify(b.La),N=null!=(G=null==(C=b.kb)?void 0:C.headers)?G:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},N,c)}),O=Object.assign({},b.kb),"POST"===b.kb.method&&(O=Object.assign({},O,{body:z})),(null==(Q=b.config)?0:Q.Oe)&&Cw(b.config.Oe),aa=function(){return a.W.fetch(b.input,O,b.config)},q=aa(),t&&a.h.set(t,q)),w(ua,q,6);
case 6:if((W=ua.i)&&"error"in W&&(null==(wb=W)?0:null==(Ya=wb.error)?0:Ya.details))for(ra=W.error.details,H=r(ra),oa=H.next();!oa.done;oa=H.next())ia=oa.value,(bf=ia["@type"])&&-1<Gw.indexOf(bf)&&(delete ia["@type"],W=ia);t&&a.h.has(t)&&a.h.delete(t);(null==(cf=b.config)?0:cf.Pe)&&Cw(b.config.Pe);if(W||null==(Md=a.i)||!Md.At(b.input,b.La)){ua.A(7);break}return w(ua,a.i.Ht(b.input,b.La),8);case 8:W=ua.i;case 7:return Nw(a,W,b),ua.return(W||void 0)}})}
function Lw(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Zb)?void 0:d.sessionIndex;var h=Dn(0,{sessionIndex:e});if(!(h instanceof Df)){var k=new Df(db);Ef(k,2,h);h=k}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Kw(b),f)))})}
function Kw(a){var b={"Content-Type":"application/json"};M("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=M("EOM_VISITOR_DATA"):M("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=M("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=M("LOGGED_IN",!1);"cors"!==a&&((a=M("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=M("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=M("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=M("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ow=new Ps("INNERTUBE_TRANSPORT_TOKEN");var Pw=["share/get_web_player_share_panel"],Qw=["feedback"],Rw=["notification/modify_channel_preference"],Sw=["browse/edit_playlist"],Tw=["subscription/subscribe"],Uw=["subscription/unsubscribe"];function Vw(){}
v(Vw,pv);Vw.prototype.j=function(){return Tw};
Vw.prototype.h=function(a){return $s(a,pm)||void 0};
Vw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Vw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ww(){}
v(Ww,pv);Ww.prototype.j=function(){return Uw};
Ww.prototype.h=function(a){return $s(a,om)||void 0};
Ww.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Ww.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Xw(){}
v(Xw,pv);Xw.prototype.j=function(){return Qw};
Xw.prototype.h=function(a){return $s(a,Vk)||void 0};
Xw.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Xw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Yw(){}
v(Yw,pv);Yw.prototype.j=function(){return Rw};
Yw.prototype.h=function(a){return $s(a,nm)||void 0};
Yw.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Zw(){}
v(Zw,pv);Zw.prototype.j=function(){return Sw};
Zw.prototype.h=function(a){return $s(a,mm)||void 0};
Zw.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function $w(){}
v($w,pv);$w.prototype.j=function(){return Pw};
$w.prototype.h=function(a){return $s(a,lm)};
$w.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var ax=new Ps("NETWORK_SLI_TOKEN");function bx(a){this.h=a}
bx.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=lc(mc(5,Bc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=Aq(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){gu(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){gu(h)}))})};
bx.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Et(),b=b.then(function(c){gu(new R("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
bx[Os]=[new Qs(ax)];var cx=new Ps("NETWORK_MANAGER_TOKEN");var dx;function ex(a){a=void 0===a||a?ou():nu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function fx(a){kq.call(this,1,arguments);this.csn=a}
v(fx,kq);var tq=new lq("screen-created",fx),gx=[],ix=hx,jx=0;function kx(a,b,c,d,e,f,g,h){function k(){gu(new R("newScreen() parent element does not have a VE - rootVe",b))}
var m=ix(),n=new tu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(P("il_via_jspb")){e=Ll((new Kl).h(m),n.getAsJspb());c&&c.visualElement?(n=new Il,c.clientScreenNonce&&E(n,2,c.clientScreenNonce),Jl(n,c.visualElement.getAsJspb()),g&&E(n,4,fm[g]),F(e,Il,5,n)):c&&k();d&&E(e,3,d);if(P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new xk;h=r(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=wk(new vk,d.screenVeType),$d(c,1,vk,d));F(e,xk,7,c)}Yt(e,f,a)}else e={csn:m,pageVe:n.getAsJson()},P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&k(),d&&(e.cloneCsn=d),a?Nt("screenCreated",e,a,f):qo("screenCreated",e,f);qq(tq,new fx(m));
return m}
function lx(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Du(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&gu(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=Ol((new Ml).h(b),c.getAsJspb());ib(e,function(k){k=k.getAsJspb();$d(h,3,Dl,k)});
"UNDEFINED_CSN"===b?mx("visualElementAttached",f,void 0,h):Zt(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?mx("visualElementAttached",f,c):a?Nt("visualElementAttached",c,a,f):qo("visualElementAttached",c,f)}
function nx(a,b,c,d,e,f){d={cttAuthInfo:Du(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(e=(new Rl).h(b),c=c.getAsJspb(),c=F(e,Dl,2,c),c=E(c,4,1),f&&F(c,Gl,3,f),"UNDEFINED_CSN"===b?mx("visualElementShown",d,void 0,c):Ut(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?mx("visualElementShown",d,f):a?Nt("visualElementShown",f,a,d):qo("visualElementShown",f,d))}
function ox(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:Du(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new Ql).h(b),c=c.getAsJspb(),c=F(e,Dl,2,c),E(c,4,d?16:8),"UNDEFINED_CSN"===b?mx("visualElementHidden",f,void 0,c):Vt(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?mx("visualElementHidden",f,d):a?Nt("visualElementHidden",d,a,f):qo("visualElementHidden",d,f))}
function hx(){if(P("enable_web_96_bit_csn"))var a=ex();else if(P("enable_web_96_bit_csn_no_crypto"))a=ex(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=cd(b,3)}return a}
function mx(a,b,c,d){gx.push({Mc:a,payload:c,Ua:d,options:b});jx||(jx=uq())}
function vq(a){if(gx){for(var b=r(gx),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Ua)switch(c.Ua.h(a.csn),c.Mc){case "screenCreated":Yt(c.Ua,c.options);break;case "visualElementAttached":Zt(c.Ua,c.options);break;case "visualElementShown":Ut(c.Ua,c.options);break;case "visualElementHidden":Vt(c.Ua,c.options);break;case "visualElementGestured":Wt(c.Ua,c.options);break;case "visualElementStateChanged":Xt(c.Ua,c.options);break;default:gu(new R("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,qo(c.Mc,c.payload,c.options));gx.length=0}jx=0}
;function px(){this.j=new Set;this.i=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function qx(){px.h||(px.h=new px);return px.h}
px.prototype.l=function(a){this.client=a};
px.prototype.h=function(){this.clear();this.csn=Au()};
px.prototype.clear=function(){this.j.clear();this.i.clear();this.m.clear();this.csn=null};function rx(){}
rx.prototype.l=function(a){Cm(qx().l).bind(qx())(a)};
rx.prototype.clear=function(){Cm(qx().clear).bind(qx())()};function sx(){this.s=[];this.H=[];this.h=[];this.v=[];this.m=[];this.Z=[];this.i=new Set;this.L=new Map}
sx.prototype.l=function(a){this.client=a};
function tx(){function a(){Object.values(Hu).includes(c)||(gu(new R("createClientScreen() called with a non-page VE",c)),c=83769);d.isHistoryNavigation||(b.v=[],b.h.push({rootVe:c,key:d.key||""}));b.s=[];b.H=[];d.kd?ux(b,c,d):vx(b,c,d)}
sx.h||(sx.h=new sx);var b=sx.h;var c=16623;var d=void 0===d?{}:d;P("safe_logging_library_killswitch")?a():Cm(a)()}
function wx(a,b,c){function d(){b.then(function(e){a.i.has(c)&&a.j&&a.j();var f=Au(c),g=yu(c);if(f&&g){var h;(null==e?0:null==(h=e.response)?0:h.trackingParams)&&lx(a.client,f,g,[uu(e.response.trackingParams)]);var k;(null==e?0:null==(k=e.playerResponse)?0:k.trackingParams)&&lx(a.client,f,g,[uu(e.playerResponse.trackingParams)])}})}
c=void 0===c?0:c;P("safe_logging_library_killswitch")?d():Cm(d)()}
function xx(a,b,c,d){function e(){if(a.i.has(d))return a.s.push([b,c]),!0;var f=Au(d),g=c||yu(d);return f&&g?(lx(a.client,f,g,[b]),!0):!1}
d=void 0===d?0:d;P("safe_logging_library_killswitch")?e():Cm(e)()}
sx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Au(void 0===c?0:c)){a=this.client;var e=uu(d);d={cttAuthInfo:Du(c)||void 0,sequenceGroup:c};P("il_via_jspb")?(b=(new Pl).h(c),e=e.getAsJspb(),b=F(b,Dl,2,e),E(b,4,fm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?mx("visualElementGestured",d,void 0,b):Wt(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?mx("visualElementGestured",d,e):a?Nt("visualElementGestured",e,a,d):qo("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
sx.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.H.push([a,b]):yx(this,a,b,c)};
function yx(a,b,c,d){d=void 0===d?0:d;var e=Au(d);d=b||yu(d);e&&d&&(a=a.client,b={cttAuthInfo:Du(e)||void 0,sequenceGroup:e},P("il_via_jspb")?(c=new Sl,c.h(e),d=d.getAsJspb(),F(c,Dl,2,d),"UNDEFINED_CSN"===e?mx("visualElementStateChanged",b,void 0,c):Xt(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?mx("visualElementStateChanged",b,c):a?Nt("visualElementStateChanged",c,a,b):qo("visualElementStateChanged",c,b)))}
function ux(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){vx(a,b,c);var f=yu(c.layer);if(f){for(var g=r(a.s),h=g.next();!h.done;h=g.next())h=h.value,xx(a,h[0],h[1]||f,c.layer);f=r(a.H);for(g=f.next();!g.done;g=f.next())g=g.value,yx(a,g[0],g[1])}};
Au(c.layer)||a.j();if(c.kd)for(var d=r(c.kd),e=d.next();!e.done;e=d.next())wx(a,e.value,c.layer);else fu(Error("Delayed screen needs a data promise."))}
function vx(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Je?c.Je:c.layer;var e=Au(d);d=yu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=M("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=kx(a.client,b,f,c.jd,c.cttAuthInfo,g,c.Ft,c.loggingExpectations)}catch(q){iu(q,{Pt:b,rootVe:d,Mt:void 0,Bt:e,Lt:f,jd:c.jd});fu(q);
return}Eu(k,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!Bu(e)&&ox(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Bw({clientScreenNonce:k});rx.h||(rx.h=new rx);Cm(qx().h).bind(qx())();var m=yu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&Cm(nx)(void 0,k,m,void 0,void 0,void 0);a.i.delete(c.layer||0);a.j=void 0;var n;null==(n=a.L.get(c.layer))||n.forEach(function(q,u){q?xx(a,u,q,c.layer):m&&xx(a,
u,m,c.layer)});
zx(a)}
function zx(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){fu(d)}}for(b=a.m.length=0;b<a.Z.length;b++){c=a.Z[b];try{c()}catch(d){fu(d)}}}
;function Ax(){var a,b,c;return x(function(d){if(1==d.h)return a=Vs().resolve(Ow),a?w(d,Jw(a),2):(gu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return gu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Ct;return d.return(c)}gu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Bx=y.caches,Cx;function Dx(a){var b=a.indexOf(":");return-1===b?{Bd:a}:{Bd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Ex(){return x(function(a){if(void 0!==Cx)return a.return(Cx);Cx=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),w(d,Bx.open("test-only"),4);case 4:return w(d,Bx.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Cx)})}
function Fx(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return w(k,Ex(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return w(k,Bx.keys(),3)}c=k.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Dx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Bx.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function Gx(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,Ex(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=$n("cache contains other");return w(h,Bx.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Dx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Hx(){try{return!!self.localStorage}catch(a){return!1}}
;function Ix(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Jx(a){if(Hx()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ix(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Kx(){if(!Hx())return!1;var a=$n(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=Ix(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Lx(){Ax().then(function(a){a&&(Dp(a),Fx(a),Jx(a))})}
function Mx(){var a=new bs;oi.fa(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=$n("clear");if(b.startsWith("V")){var g=[b];Dp(g);Fx(g);Jx(g);return f.return()}c=Kx();return w(f,Gx(),3);case 3:return d=f.i,w(f,Ep(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ma()?Lx():a.l.add("publicytnetworkstatus-online",Lx,!0,void 0,void 0),f.h=0}})})}
;var Uh=ha(["data-"]);function Nx(a){a&&(a.dataset?a.dataset[Ox("loaded")]="true":Th(a))}
function Px(a,b){return a?a.dataset?a.dataset[Ox(b)]:a.getAttribute("data-"+b):null}
var Qx={};function Ox(a){return Qx[a]||(Qx[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Rx=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Sx=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Tx(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Rx,""),c=c.replace(Sx,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ux(a,b,c)}
function Ux(a,b,c){c=void 0===c?null:c;var d=Vx(a),e=document.getElementById(d),f=e&&Px(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Is(d,b),b=""+Sa(b),Wx[b]=f),g||(e=Xx(a,d,function(){Px(e,"loaded")||(Nx(e),Ls(d),Ym(Za(Ms,d),0))},c)))}
function Xx(a,b,c,d){d=void 0===d?null:d;var e=qf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Wh(e,rk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Yx(a){a=Vx(a);var b=document.getElementById(a);b&&(Ms(a),b.parentNode.removeChild(b))}
function Zx(a,b){a&&b&&(a=""+Sa(b),(a=Wx[a])&&Ks(a))}
function Vx(a){var b=document.createElement("a");ec(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+jc(a)}
var Wx={};var $x=[],cy=!1;function dy(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&Qu()){var a=M("PLAYER_VARS",{});if("1"!=sb(a)&&!Ru(a)){var b=function(){cy=!0;"google_ad_status"in window?ym("DCLKSTAT",1):ym("DCLKSTAT",2)};
try{Tx("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}$x.push(oi.fa(function(){if(!(cy||"google_ad_status"in window)){try{Zx("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}cy=!0;ym("DCLKSTAT",3)}},5E3))}}}
function ey(){var a=Number(M("DCLKSTAT",0));return isNaN(a)?0:a}
;var fy=window,gy,hy=P("web_enable_lifecycle_monitoring")&&(null==(gy=fy.performance)?void 0:gy.measure);function iy(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?go():d;this.l=c;this.j=d;this.i=new Lh;this.h=a;a={};c=r(this.h.entries());for(d=c.next();!d.done;a={Bb:a.Bb,Sb:a.Sb},d=c.next()){var e=r(d.value);d=e.next().value;e=e.next().value;a.Sb=d;a.Bb=e;d=function(f){return function(){f.Bb.Fc();b.h[f.Sb].oc=!0;b.h.every(function(g){return!0===g.oc})&&b.i.resolve()}}(a);
e=co(d,jy(this,a.Bb));this.h[a.Sb]=Object.assign({},a.Bb,{Fc:d,jobId:e})}}
function ky(a){var b=Array.from(a.h.keys()).sort(function(d,e){return jy(a,a.h[e])-jy(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.j.Da(c.jobId),co(c.Fc,10))}
iy.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.j.Da(b.jobId),b.oc=!0;this.i.resolve()};
function jy(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function ly(a){this.state=a;this.plugins=[];this.j=void 0;hy&&window.performance.mark(this.state+"-start")}
ly.prototype.install=function(a){this.plugins.push(a);return this};
ly.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
ly.prototype.transition=function(a,b){var c=this;my(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.l&&(ky(this.l),this.l=void 0);ny(this,a,b);this.state=a;hy&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(oy(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function oy(a,b){return function(){var c=Ka.apply(0,arguments),d=b.filter(function(h){var k,m;return 10===(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)}),e=b.filter(function(h){var k,m;
return 10!==(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)});
go();var f={};d=r(d);for(var g=d.next();!g.done;f={ob:f.ob},g=d.next())f.ob=g.value,eo(function(h){return function(){var k=h.ob.name;hy&&k&&window.performance.mark(k+"-start");h.ob.callback.apply(h.ob,ja(c));py(h.ob.name)}}(f));
e=e.map(function(h){var k,m;return{Fc:function(){var n=h.name;hy&&n&&window.performance.mark(n+"-start");h.callback.apply(h,ja(c));py(h.name)},
priority:null!=(m=null!=(k=a.j)?k:h.priority)?m:0}});
e.length&&(a.l=new iy(e))}}
function my(a){if(hy){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function py(a){if(hy&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function ny(a,b,c){hy&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(ly.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function qy(a){ly.call(this,void 0===a?"document_active":a);var b=this;this.j=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.H},{from:"document_active",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"flush_logs",action:this.s},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.s},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(qy,ly);qy.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
qy.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
qy.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
qy.prototype.i=function(){this.h=new Map};function ry(a){ly.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.m},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.s},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.s},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.m},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.m},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(ry,ly);ry.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ry.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ry.prototype.m=function(a,b){a(null==b?void 0:b.event)};
ry.prototype.s=function(a,b){a(null==b?void 0:b.event)};function sy(){this.j=new qy;this.l=new ry}
sy.prototype.install=function(){var a=Ka.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function ty(){sy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(ty,sy);ty.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new Cl,b=Au();b&&E(a,1,b);b=new dm;Yd(b,Cl,380,em,a);Tt(b);P("web_fp_via_jspb_and_json")&&qo("finalPayload",{csn:Au()})}else qo("finalPayload",{csn:Au()})};
ty.prototype.h=function(){ku(lu)};function uy(){}
function vy(){var a=B("ytglobal.storage_");a||(a=new uy,A("ytglobal.storage_",a));return a}
uy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(wy()):d.return()})};
function wy(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",uy);function oo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Sm("ytidb_transaction_ended_event_rate_limit_session",.2)}
oo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":xy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Sm("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function xy(a,b){vy().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:yy(null==c?void 0:c.usage),deviceStorageQuotaMbytes:yy(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function yy(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function zy(a,b,c){J.call(this);var d=this;c=c||M("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.R=!!a;this.L=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.R&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.v||0<=fb(d.v,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.v=this.j=this.s=null;window.addEventListener("message",this.L)}
v(zy,J);zy.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Em(d)}}};
zy.prototype.M=function(){window.removeEventListener("message",this.L);J.prototype.M.call(this)};function Ay(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new zy(!!M("WIDGET_ID_ENFORCE")),b=this.Le.bind(this);a.s=b;a.v=null;this.h.i="widget";if(a=M("WIDGET_ID"))this.h.sessionId=a}
l=Ay.prototype;l.Le=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Vc(a,b,c)};
l.Vc=function(){};
l.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.oe=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");gb(this.i,this.Id,this);this.i=[]};
l.Ac=function(){return null};
function By(a,b){a.sendMessage("infoDelivery",b)}
l.Id=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Id({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var Cy={},Dy=(Cy["api.invalidparam"]=2,Cy.auth=150,Cy["drm.auth"]=150,Cy["heartbeat.net"]=150,Cy["heartbeat.servererror"]=150,Cy["heartbeat.stop"]=150,Cy["html5.unsupportedads"]=5,Cy["fmt.noneavailable"]=5,Cy["fmt.decode"]=5,Cy["fmt.unplayable"]=5,Cy["html5.missingapi"]=5,Cy["html5.unsupportedlive"]=5,Cy["drm.unavailable"]=5,Cy["mrm.blocked"]=151,Cy);var Ey=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Fy(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Gy(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(Ey);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Hy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Iy(a){Ay.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
v(Iy,Ay);l=Iy.prototype;
l.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Fy(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Gy(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Gy(e);break;case "loadPlaylist":case "cuePlaylist":e=Hy(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Fy(a)&&By(this,this.Ac())}};
l.Ec=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);Ay.prototype.Ec.call(this,a,b)};
l.xc=function(a,b){var c=this,d=Ay.prototype.xc.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.oe.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Dy[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());By(this,a)};
l.Se=function(a){By(this,{playbackQuality:a})};
l.Te=function(a){By(this,{playbackRate:a})};
l.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.We=function(){By(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());By(this,a)};
l.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};By(this,a)};
l.dispose=function(){Ay.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Jy(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ed,this)}
v(Jy,J);l=Jy.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.lb("RECEIVING"))};
l.lb=function(a,b){this.started&&!this.h()&&this.connection.lb(a,b)};
l.Ed=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Ky(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Ly(a,c))&&this.lb(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.Re.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.Re=function(a,b){this.started&&!this.h()&&this.connection.lb(a,this.zc(a,b))};
l.zc=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.M=function(){var a=this.connection;a.h()||Mi(a.i,"command",this.Ed,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.M.call(this)};function My(a,b){Jy.call(this,b);this.api=a;this.start()}
v(My,Jy);My.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
My.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Ky(a,b){switch(a){case "loadVideoById":return a=Gy(b),[a];case "cueVideoById":return a=Gy(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Hy(b),[a];case "cuePlaylist":return a=Hy(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ly(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
My.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Jy.prototype.zc.call(this,a,b)};
My.prototype.M=function(){Jy.prototype.M.call(this);delete this.api};function Ny(a){a=void 0===a?!1:a;J.call(this);this.i=new Li(a);xe(this,this.i)}
$a(Ny,J);Ny.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Ny.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function Oy(a,b,c){Ny.call(this);this.l=a;this.j=b;this.id=c}
v(Oy,Ny);Oy.prototype.lb=function(a,b){this.h()||this.l.lb(this.j,this.id,a,b)};
Oy.prototype.M=function(){this.j=this.l=null;Ny.prototype.M.call(this)};function Py(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=ws(window,"message",this.l.bind(this));this.connection=new Oy(this,a,b);xe(this,this.connection)}
v(Py,J);Py.prototype.lb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Py.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Py.prototype.M=function(){xs(this.j);this.i=null;J.prototype.M.call(this)};function Qy(){this.state=1;this.h=null}
l=Qy.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Db("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Ab();d=f?f.createScript(d):d;d=new Fb(d,Eb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Jb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Ry(this,d,e,
a.program,b,c)}else gu(Error("Cannot initialize botguard without program"))};
function Ry(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Tx(c,function(){window[g]?Sy(a,d,g,e):(a.state=3,Yx(c),gu(new R("Unable to load Botguard","from "+c)))},f)):b?(f=qf("SCRIPT"),b instanceof Fb?(b instanceof Fb&&b.constructor===Fb?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,Vh(f)):f.textContent=b,f.nonce=hc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Sy(a,d,g,e):(a.state=4,gu(new R("Unable to load Botguard from JS")))):gu(new R("Unable to load VM; no url or JS provided"))}
function Sy(a,b,c,d){a.state=5;try{var e=new Mh({program:b,se:c,Me:P("att_web_record_metrics")});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&gu(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Qd({hd:a}):null};
l.dispose=function(){this.Wc()};
l.Wc=function(){this.Qc(null);this.state=8};
l.Tc=function(){return!!this.h};
l.Qd=function(a){return this.h.Kd(a)};
l.Qc=function(a){ve(this.h);this.h=a};function Ty(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Uy(){Qy.apply(this,arguments)}
v(Uy,Qy);Uy.prototype.Wc=function(){this.state=8};
Uy.prototype.Qc=function(a){var b;null==(b=Ty())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Kd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
Uy.prototype.Tc=function(){return!!Ty()};
Uy.prototype.Qd=function(a){return Ty().bgvmc(a)};var Vy=new Uy;function Wy(){return Vy.Tc()}
function Xy(a){a=void 0===a?{}:a;return Vy.invoke(a)}
;function Yy(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yy.prototype.clone=function(){var a=new Yy,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=ub(c):a[b]=c}return a};var Zy=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $y(a){a=a||"";if(window.spf){var b=a.match(Zy);spf.style.load(a,b?b[1]:"",void 0)}else az(a)}
function az(a){var b=bz(a),c=document.getElementById(b),d=c&&Px(c,"loaded");d||c&&!d||(c=cz(a,b,function(){Px(c,"loaded")||(Nx(c),Ls(b),Ym(Za(Ms,b),0))}))}
function cz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=rk(a);fc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bz(a){var b=qf("A");ec(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+jc(a)}
;function dz(){J.call(this);this.i=[]}
v(dz,J);dz.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.M.call(this)};function ez(){dz.apply(this,arguments)}
v(ez,dz);function fz(a,b,c,d,e){J.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Wb=e;this.Ba=!1;this.api={};this.oa=this.s=null;this.V=new Li;this.i={};this.aa=this.qa=this.elementId=this.eb=this.config=null;this.Y=!1;this.l=this.L=null;this.Qa={};this.Xb=["onReady"];this.lastError=null;this.Eb=NaN;this.R={};this.Yb=new ez(this);this.ia=0;this.j=this.m=a;xe(this,this.V);gz(this);hz(this);xe(this,this.Yb);c?this.ia=Ym(function(){f.loadNewVideoConfig(c)},0):d&&(iz(this),jz(this))}
v(fz,J);l=fz.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.h()){this.ia&&(window.clearTimeout(this.ia),this.ia=0);var b=a||{};b instanceof Yy||(b=new Yy(b));this.config=b;this.setConfig(a);jz(this);this.isReady()&&kz(this)}};
function iz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.eb=a;this.config=lz(a);iz(this);if(!this.qa){var b;this.qa=mz(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=fi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=fi(Number(a)||a))};
function kz(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nz(a){var b=!0,c=oz(a);c&&a.config&&(a=pz(a),b=Px(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function jz(a){if(!a.h()&&!a.Y){var b=nz(a);if(b&&"html5"===(oz(a)?"html5":null))a.aa="html5",a.isReady()||qz(a);else if(rz(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),qz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.L=function(){c=!0;var d=sz(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?lz(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Wb);qz(a)};
a.Y=!0;b?a.L():(Tx(pz(a),a.L),(b=tz(a))&&$y(b),uz(a)&&!c&&A("yt.player.Application.create",null))}}}
function oz(a){var b=pf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function qz(a){if(!a.h()){var b=oz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!sz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vz(a)}else a.Eb=Ym(function(){qz(a)},50)}}
function vz(a){gz(a);a.Ba=!0;var b=oz(a);if(b){a.s=wz(a,b,"addEventListener");a.oa=wz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=wz(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);kz(a);a.qa&&a.qa(a.api);a.V.cb("onReady",a.api)}
function wz(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,gu(f))}}}
function gz(a){a.Ba=!1;if(a.oa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.oa(b,a.i[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.eb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ba};
function hz(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ls("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ls("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=mz(this,b);d&&(0<=fb(this.Xb,a)||this.i[a]||(b=xz(this,a),this.s&&this.s(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&Ym(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=mz(this,b))&&Mi(this.V,a,b)};
function mz(a,b){var c=b;if("string"===typeof b){if(a.Qa[b])return a.Qa[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){fu(f)}};
a.Qa[b]=c}return c?c:null}
function xz(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;y[c]=function(d){var e=Ym(function(){if(!a.h()){try{a.V.cb(b,null!=d?d:void 0)}catch(h){gu(new R("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
rb(a.R,String(e))};
return c}
l.getPlayerType=function(){return this.aa||(oz(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function rz(a){a.cancel();gz(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=oz(a);b&&(nz(a)||!uz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.L&&Zx(pz(this),this.L);window.clearTimeout(this.Eb);this.Y=!1};
l.M=function(){rz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){fu(b)}this.Qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.eb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.M.call(this)};
function uz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function pz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Hm(c||"","&")[b]}
function lz(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var yz={},zz="player_uid_"+(1E9*Math.random()>>>0);function Az(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?pf(c):c;var e=zz+"_"+Sa(c),f=yz[e];if(f&&d)return Bz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new fz(c,e,a,b,void 0);yz[e]=f;Ls("player-added",f.api);ye(f,function(){delete yz[f.getId()]});
return f.api}
function Bz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cz=null,Dz=null,Ez=null;function Fz(){Gz()}
function Hz(){Gz()}
function Gz(){var a=Cz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Iz(){Cz&&Cz.sendAbandonmentPing&&Cz.sendAbandonmentPing();M("PL_ATT")&&Vy.dispose();for(var a=oi,b=0,c=$x.length;b<c;b++)a.Da($x[b]);$x.length=0;Yx("//static.doubleclick.net/instream/ad_status.js");cy=!1;ym("DCLKSTAT",0);we(Ez,Dz);Cz&&(Cz.removeEventListener("onVideoDataChange",Fz),Cz.destroy())}
;function Jz(a,b,c){a="ST-"+jc(a).toString(36);b=b?uc(b):"";c=c||5;Qu()&&Hn(a,b,c)}
;function Kz(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=pc(window.location.href);g&&f.push(g);g=pc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),ec(f,d),d=f.href),d&&(d=qc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Au()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Jz(d,b,h)}else Jz(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=wc(a,k)+m;var q=void 0===q?Zh:q;a:{q=void 0===q?Zh:q;for(k=0;k<q.length;++k)if(m=q[k],m instanceof Xh&&m.Ae(a)){q=new Mb(a,Nb);break a}q=void 0}q=q||Tb;if(q instanceof Mb)var u=Ob(q);else{b:if(Ph){try{u=new URL(q)}catch(t){u="https:";break b}u=u.protocol}else c:{u=document.createElement("a");try{u.href=q}catch(t){u=void 0;break c}u=
u.protocol;u=":"===u||""===u?"https:":u}u="javascript:"!==u?q:void 0}void 0!==u&&(c.href=u)}return!0}
;A("yt.setConfig",ym);A("yt.config.set",ym);A("yt.setMsg",Gu);A("yt.msgs.set",Gu);A("yt.logging.errors.log",fu);
A("writeEmbed",function(){var a=M("PLAYER_CONFIG");if(!a){var b=M("PLAYER_VARS");b&&(a={args:b})}$u(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=M("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);yw("embed",["ol"]);c=M("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Mm(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;P("embeds_web_enable_watch_on_autoplay")&&(null==(e=a.args)?0:e.autoplay)&&yw("watch",["pbs","pbu","pbp"]);Cz=Az(a,c);Cz.addEventListener("onVideoDataChange",Fz);Cz.addEventListener("onReady",Hz);a=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?Ez=new Iy(Cz):M("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Dz=new Py(window.parent,a,b),Ez=new My(Cz,Dz.connection));dy();P("ytidb_create_logger_embed_killswitch")||
P("embeds_web_disable_nwl")||no();a={};ty.h||(ty.h=new ty);ty.h.install((a.flush_logs={callback:function(){ut()}},a));
P("embeds_web_disable_nwl")||ms();P("ytidb_clear_embedded_player")&&oi.fa(function(){var f,g;if(!dx){var h=Vs(),k={Nc:cx,Od:bx};h.h.set(k.Nc,k);k={gd:{feedbackEndpoint:lv(Xw),modifyChannelNotificationPreferenceEndpoint:lv(Yw),playlistEditEndpoint:lv(Zw),subscribeEndpoint:lv(Vw),unsubscribeEndpoint:lv(Ww),webPlayerShareEntityServiceEndpoint:lv($w)}};var m=jv(),n={};m&&(n.client_location=m);void 0===f&&(f=Cn());void 0===g&&(g=h.resolve(cx));Iw(k,g,f,n);f={Nc:Ow,Pd:Hw.h};h.h.set(f.Nc,f);dx=h.resolve(Ow)}Mx()})});
var Lz=Cm(function(){Dw();av();P("embeds_web_enable_ve_logging_unification")||tx()}),Mz=Cm(function(a){a.persisted||(Dw(),av())}),Nz=Cm(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Iz():a.persisted||Iz()}),Oz=Cm(Iz);
window.addEventListener?(window.addEventListener("load",Lz),window.addEventListener("pageshow",Mz),window.addEventListener("pagehide",Nz)):window.attachEvent&&(window.attachEvent("onload",Lz),window.attachEvent("onunload",Oz));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Wy);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Xy);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||ey);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||Kz);A("yt.util.activity.init",B("yt.util.activity.init")||As);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Ds);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Bs);}).call(this);
