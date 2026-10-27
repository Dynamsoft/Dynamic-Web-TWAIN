/*! 20260902112703
* Dynamsoft JavaScript Library
* Product: Dynamic Web TWAIN
* Web Site: https://www.dynamsoft.com
* 
* Copyright 2026, Dynamsoft Corporation
* Author: Dynamsoft Support Team
* Version: 19.5
*/
(function(D){
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd&&0)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype['catch']=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a=1,b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");if(!b)a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform);return(b||!a)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a['catch'](c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var _h=navigator.userAgentData,a=!0,c=!1;if(_h){c=!0;}else{a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);}b(c||!a||parseInt(a[1],10)>=43)}})['catch'](function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d})['catch'](function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})})['catch'](c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady()['catch'](b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c['continue']()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})})['catch'](e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g['delete'](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b['continue']()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})})['catch'](g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()})['catch'](function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)if(c!=='__proto__'&&c!=='prototype'&&c!=='constructor')b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Dynamsoft.Lib.Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(c!=='__proto__'&&c!=='prototype'&&c!=='constructor')if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)['catch'](function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(q,b,c){var d=new va(function(b,c){try{var d=q._driver,e=new Error("Custom driver not compliant");if(!q._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||q[j])&&"function"!=typeof q[j])return void c(e)}(function(){for(var b=function(z){return function(){var b=new Error("Method "+z+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];q[e]||(q[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=q,ab[d]=c,b()};"_support"in q?q._support&&"function"==typeof q._support?q._support().then(k,c):k(!!q._support):k(!0)}catch(z){c(z)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e)['catch'](b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet['catch'](function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})})['catch'](function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
D.Lib.localforage = localforage;})(Dynamsoft);"use strict";function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function asyncGeneratorStep(e,r,t,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void t(e)}s.done?r(c):Dynamsoft.Lib.Promise.resolve(c).then(n,o)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Dynamsoft.Lib.Promise(function(n,o){var i=e.apply(r,t);function a(e){asyncGeneratorStep(i,n,o,a,s,"next",e)}function s(e){asyncGeneratorStep(i,n,o,a,s,"throw",e)}a(void 0)})}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==t["return"]||t["return"]()}finally{if(s)throw i}}}}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _iterableToArrayLimit(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,a,s=[],c=!0,u=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=i.call(t)).done)&&(s.push(n.value),s.length!==r);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t["return"]&&(a=t["return"](),Object(a)!==a))return}finally{if(u)throw o}}return s}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _regenerator(){var e,r,t="function"==typeof Symbol?Symbol:{},n=t.iterator||"@@iterator",o=t.toStringTag||"@@toStringTag";function i(t,n,o,i){var c=n&&n.prototype instanceof s?n:s,u=Object.create(c.prototype);return _regeneratorDefine(u,"_invoke",function(t,n,o){var i,s,c,u=0,f=o||[],l=!1,d={p:0,n:0,v:e,a:h,f:h.bind(e,4),d:function(r,t){return i=r,s=0,c=e,d.n=t,a}};function h(t,n){for(s=t,c=n,r=0;!l&&u&&!o&&r<f.length;r++){var o,i=f[r],h=d.p,p=i[2];t>3?(o=p===n)&&(c=i[(s=i[4])?5:(s=3,3)],i[4]=i[5]=e):i[0]<=h&&((o=t<2&&h<i[1])?(s=0,d.v=n,d.n=i[1]):h<p&&(o=t<3||i[0]>n||n>p)&&(i[4]=t,i[5]=n,d.n=p,s=0))}if(o||t>1)return a;throw l=!0,n}return function(o,f,p){if(u>1)throw TypeError("Generator is already running");for(l&&1===f&&h(f,p),s=f,c=p;(r=s<2?e:c)||!l;){i||(s?s<3?(s>1&&(d.n=-1),h(s,c)):d.n=c:d.v=c);try{if(u=2,i){if(s||(o="next"),r=i[o]){if(!(r=r.call(i,c)))throw TypeError("iterator result is not an object");if(!r.done)return r;c=r.value,s<2&&(s=0)}else 1===s&&(r=i["return"])&&r.call(i),s<2&&(c=TypeError("The iterator does not provide a '"+o+"' method"),s=1);i=e}else if((r=(l=d.n<0)?c:t.call(n,d))!==a)break}catch(r){i=e,s=1,c=r}finally{u=1}}return{value:r,done:l}}}(t,o,i),!0),u}var a={};function s(){}function c(){}function u(){}r=Object.getPrototypeOf;var f=[][n]?r(r([][n]())):(_regeneratorDefine(r={},n,function(){return this}),r),l=u.prototype=s.prototype=Object.create(f);function d(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,_regeneratorDefine(e,o,"GeneratorFunction")),e.prototype=Object.create(l),e}return c.prototype=u,_regeneratorDefine(l,"constructor",u),_regeneratorDefine(u,"constructor",c),c.displayName="GeneratorFunction",_regeneratorDefine(u,o,"GeneratorFunction"),_regeneratorDefine(l),_regeneratorDefine(l,o,"Generator"),_regeneratorDefine(l,n,function(){return this}),_regeneratorDefine(l,"toString",function(){return"[object Generator]"}),(_regenerator=function(){return{w:i,m:d}})()}function _regeneratorDefine(e,r,t,n){var o=Object.defineProperty;try{o({},"",{})}catch(e){o=0}_regeneratorDefine=function(e,r,t,n){function i(r,t){_regeneratorDefine(e,r,function(e){return this._invoke(r,t,e)})}r?o?o(e,r,{value:t,enumerable:!n,configurable:!n,writable:!n}):e[r]=t:(i("next",0),i("throw",1),i("return",2))},_regeneratorDefine(e,r,t,n)}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _toPrimitive(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function _toPropertyKey(e){var r=_toPrimitive(e,"string");return"symbol"==typeof r?r:r+""}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}!function(e){var r,t,n,o,i,a="undefined"==typeof self,s=a?{}:self;"undefined"!=typeof navigator&&(r=navigator,t=r.userAgent,n=r.platform,o=r.mediaDevices),function(){if(!a){var e={Edge:{search:"Edg",verSearch:"Edg"},OPR:null,Chrome:null,Safari:{str:r.vendor,search:"Apple",verSearch:["Version","iPhone OS","CPU OS"]},Firefox:null,Explorer:{search:"MSIE",verSearch:"MSIE"}},o={HarmonyOS:null,Android:null,iPhone:null,iPad:null,Windows:{str:n,search:"Win"},Mac:{str:n},Linux:{str:n}},s="unknownBrowser",c=0,u="unknownOS";for(var f in e){var l=e[f]||{},d=l.str||t,h=l.search||f,p=l.verStr||t,y=l.verSearch||f;if(y instanceof Array||(y=[y]),-1!=d.indexOf(h)){s=f;var v,m=_createForOfIteratorHelper(y);try{for(m.s();!(v=m.n()).done;){var g=v.value,b=p.indexOf(g);if(-1!=b){c=parseFloat(p.substring(b+g.length+1));break}}}catch(k){m.e(k)}finally{m.f()}break}}for(var _ in o){var w=o[_]||{},S=w.str||t,C=w.search||_;if(-1!=S.indexOf(C)){u=_;break}}"Linux"==u&&-1!=t.indexOf("Windows NT")&&(u="HarmonyOS"),i={browser:s,version:c,OS:u}}a&&(i={browser:"ssr",version:0,OS:"ssr"})}(),o&&o.getUserMedia;var c="Chrome"===i.browser&&i.version>66||"Safari"===i.browser&&i.version>13||"OPR"===i.browser&&i.version>43||"Edge"===i.browser&&i.version>15;var u=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function f(e,r){e=e||[],r=r||{};try{return new Blob(e,r)}catch(o){if("TypeError"!==o.name)throw o;for(var t=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),n=0;n<e.length;n+=1)t.append(e[n]);return t.getBlob(r.type)}}function l(e,r){r&&e.then(function(e){r(null,e)},function(e){r(e)})}function d(e,r,t){"function"==typeof r&&e.then(r),"function"==typeof t&&e["catch"](t)}function h(e){return"string"!=typeof e&&(e=String(e)),e}function p(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var y,v="local-forage-detect-blob-support",m={},g=Object.prototype.toString,b="readonly",_="readwrite";function w(e){return"boolean"==typeof y?Dynamsoft.Lib.Promise.resolve(y):function(e){return new Dynamsoft.Lib.Promise(function(r){var t=e.transaction(v,_),n=f([""]);t.objectStore(v).put(n,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),r(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);r(t||!e||parseInt(e[1],10)>=43)}})["catch"](function(){return!1})}(e).then(function(e){return y=e})}function S(e){var r=m[e.name],t={};t.promise=new Dynamsoft.Lib.Promise(function(e,r){t.resolve=e,t.reject=r}),r.deferredOperations.push(t),r.dbReady?r.dbReady=r.dbReady.then(function(){return t.promise}):r.dbReady=t.promise}function C(e){var r=m[e.name].deferredOperations.pop();if(r)return r.resolve(),r.promise}function k(e,r){var t=m[e.name].deferredOperations.pop();if(t)return t.reject(r),t.promise}function x(e,r){return new Dynamsoft.Lib.Promise(function(t,n){if(m[e.name]=m[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!r)return t(e.db);S(e),e.db.close()}var o=[e.name];r&&o.push(e.version);var i=u.open.apply(u,o);r&&(i.onupgradeneeded=function(r){var t=i.result;try{t.createObjectStore(e.storeName),r.oldVersion<=1&&t.createObjectStore(v)}catch(n){if("ConstraintError"!==n.name)throw n}}),i.onerror=function(e){e.preventDefault(),n(i.error)},i.onsuccess=function(){var r=i.result;r.onversionchange=function(e){e.target.close()},t(r),C(e)}})}function P(e){return x(e,!1)}function T(e){return x(e,!0)}function I(e,r){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version,e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function O(e){var r=function(e){for(var r=e.length,t=new ArrayBuffer(r),n=new Uint8Array(t),o=0;o<r;o++)n[o]=e.charCodeAt(o);return t}(atob(e.data));return f([r],{type:e.type})}function A(e){var r=this,t=r._initReady().then(function(){var e=m[r._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return d(t,e,e),t}function E(e,r,t,n){n===undefined&&(n=1);try{var o=e.db.transaction(e.storeName,r);t(null,o)}catch(i){if(n>0&&(!e.db||"InvalidStateError"===i.name||"NotFoundError"===i.name))return Dynamsoft.Lib.Promise.resolve().then(function(){if(!e.db||"NotFoundError"===i.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),T(e)}).then(function(){return function(e){S(e);for(var r=m[e.name],t=r.forages,n=0;n<t.length;n++){var o=t[n];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,P(e).then(function(r){return e.db=r,I(e)?T(e):r}).then(function(n){e.db=r.db=n;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=n})["catch"](function(r){throw k(e,r),r})}(e).then(function(){E(e,r,t,n-1)})})["catch"](t);t(i)}}var j={_driver:"asyncStorage",_initStorage:function(e){var r=this,t={db:null};if(e)for(var n in e)t[n]=e[n];var o=m[t.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},m[t.name]=o),o.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=A);var i=[];function a(){return Dynamsoft.Lib.Promise.resolve()}for(var s=0;s<o.forages.length;s++){var c=o.forages[s];c!==r&&i.push(c._initReady()["catch"](a))}var u=o.forages.slice(0);return Promise.all(i).then(function(){return t.db=o.db,P(t)}).then(function(e){return t.db=e,I(t,r._defaultConfig.version)?T(t):e}).then(function(e){t.db=o.db=e,r._dbInfo=t;for(var n=0;n<u.length;n++){var i=u[n];i!==r&&(i._dbInfo.db=t.db,i._dbInfo.version=t.version)}})},_support:function(){try{if(!u||!u.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||r)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(t){return!1}}(),getItem:function(e,r){var t=this;e=h(e);var n=new Dynamsoft.Lib.Promise(function(r,n){t.ready().then(function(){E(t._dbInfo,b,function(o,i){if(o)return n(o);try{var a=i.objectStore(t._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;e===undefined&&(e=null),function(e){return e&&e.__local_forage_encoded_blob}(e)&&(e=O(e)),r(e)},a.onerror=function(){n(a.error)}}catch(s){n(s)}})})["catch"](n)});return l(n,r),n},setItem:function(e,r,t){var n=this;e=h(e);var o=new Dynamsoft.Lib.Promise(function(t,o){var i;n.ready().then(function(){return i=n._dbInfo,"[object Blob]"===g.call(r)?w(i.db).then(function(e){return e?r:(t=r,new Dynamsoft.Lib.Promise(function(e,r){var n=new FileReader;n.onerror=r,n.onloadend=function(r){var n=btoa(r.target.result||"");e({__local_forage_encoded_blob:!0,data:n,type:t.type})},n.readAsBinaryString(t)}));var t}):r}).then(function(r){E(n._dbInfo,_,function(i,a){if(i)return o(i);try{var s=a.objectStore(n._dbInfo.storeName);null===r&&(r=undefined);var c=s.put(r,e);a.oncomplete=function(){r===undefined&&(r=null),t(r)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(u){o(u)}})})["catch"](o)});return l(o,t),o},removeItem:function(e,r){var t=this;e=h(e);var n=new Dynamsoft.Lib.Promise(function(r,n){t.ready().then(function(){E(t._dbInfo,_,function(o,i){if(o)return n(o);try{var a=i.objectStore(t._dbInfo.storeName)["delete"](e);i.oncomplete=function(){r()},i.onerror=function(){n(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;n(e)}}catch(s){n(s)}})})["catch"](n)});return l(n,r),n},clear:function(e){var r=this,t=new Dynamsoft.Lib.Promise(function(e,t){r.ready().then(function(){E(r._dbInfo,_,function(n,o){if(n)return t(n);try{var i=o.objectStore(r._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;t(e)}}catch(a){t(a)}})})["catch"](t)});return l(t,e),t},length:function(e){var r=this,t=new Dynamsoft.Lib.Promise(function(e,t){r.ready().then(function(){E(r._dbInfo,b,function(n,o){if(n)return t(n);try{var i=o.objectStore(r._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){t(i.error)}}catch(a){t(a)}})})["catch"](t)});return l(t,e),t},keys:function(e){var r=this,t=new Dynamsoft.Lib.Promise(function(e,t){r.ready().then(function(){E(r._dbInfo,b,function(n,o){if(n)return t(n);try{var i=o.objectStore(r._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var r=i.result;r?(a.push(r.key),r["continue"]()):e(a)},i.onerror=function(){t(i.error)}}catch(s){t(s)}})})["catch"](t)});return l(t,e),t},dropInstance:function(e,r){r=p.apply(this,arguments);var t,n=this.config();if((e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName),e.name){var o=e.name===n.name&&this._dbInfo.db?Dynamsoft.Lib.Promise.resolve(this._dbInfo.db):P(e).then(function(r){var t=m[e.name],n=t.forages;t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r;return r});t=e.storeName?o.then(function(r){if(r.objectStoreNames.contains(e.storeName)){var t=r.version+1;S(e);var n=m[e.name],o=n.forages;r.close();for(var i=0;i<o.length;i++){var a=o[i];a._dbInfo.db=null,a._dbInfo.version=t}var s=new Dynamsoft.Lib.Promise(function(r,n){var o=u.open(e.name,t);o.onerror=function(e){o.result.close(),n(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),r(e)}});return s.then(function(e){n.db=e;for(var r=0;r<o.length;r++){var t=o[r];t._dbInfo.db=e,C(t._dbInfo)}})["catch"](function(r){throw(k(e,r)||Dynamsoft.Lib.Promise.resolve())["catch"](function(){}),r})}}):o.then(function(r){S(e);var t=m[e.name],n=t.forages;r.close();for(var o=0;o<n.length;o++){n[o]._dbInfo.db=null}var i=new Dynamsoft.Lib.Promise(function(r,t){var n=u.deleteDatabase(e.name);n.onerror=function(){var e=n.result;e&&e.close(),t(n.error)},n.onblocked=function(){},n.onsuccess=function(){var e=n.result;e&&e.close(),r(e)}});return i.then(function(e){t.db=e;for(var r=0;r<n.length;r++){C(n[r]._dbInfo)}})["catch"](function(r){throw(k(e,r)||Dynamsoft.Lib.Promise.resolve())["catch"](function(){}),r})})}else t=Promise.reject("Invalid arguments");return l(t,r),t}},D=new Map;function N(e,r){var t=e.name+"/";return e.storeName!==r.storeName&&(t+=e.storeName+"/"),t}function L(){return(L=_asyncToGenerator(_regenerator().m(function e(r){var t,n,o;return _regenerator().w(function(e){for(;;)switch(e.n){case 0:if(t={},r)for(n in r)t[n]=r[n];o=t.keyPrefix=N(r,this._defaultConfig),this._dbInfo=t,D.has(o)||D.set(o,new Map);case 1:return e.a(2)}},e,this)}))).apply(this,arguments)}var M={_driver:"tempStorageWrapper",_initStorage:function(e){return L.apply(this,arguments)},getItem:function(e,r){var t=this;e=h(e);var n=this.ready().then(function(){return D.get(t._dbInfo.keyPrefix).get(e)});return l(n,r),n},setItem:function(e,r,t){var n=this;e=h(e);var o=this.ready().then(function(){return r===undefined&&(r=null),D.get(n._dbInfo.keyPrefix).set(e,r),r});return l(o,t),o},removeItem:function(e,r){var t=this;e=h(e);var n=this.ready().then(function(){D.get(t._dbInfo.keyPrefix)["delete"](e)});return l(n,r),n},clear:function(e){var r=this,t=this.ready().then(function(){var e=r._dbInfo.keyPrefix;D.has(e)&&D["delete"](e)});return l(t,e),t},length:function(e){var r=this,t=this.ready().then(function(){return D.get(r._dbInfo.keyPrefix).size});return l(t,e),t},keys:function(e){var r=this,t=this.ready().then(function(){return _toConsumableArray(D.get(r._dbInfo.keyPrefix).keys())});return l(t,e),t},dropInstance:function(e,r){var t,n=this;if(r=p.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var o=this.config();e.name=e.name||o.name,e.storeName=e.storeName||o.storeName}return l(t=e.name?new Dynamsoft.Lib.Promise(function(r){e.storeName?r(N(e,n._defaultConfig)):r("".concat(e.name,"/"))}).then(function(e){D["delete"](e)}):Promise.reject("Invalid arguments"),r),t}},U=function(e,r){return e===r||"number"==typeof e&&"number"==typeof r&&isNaN(e)&&isNaN(r)},B=function(e,r){for(var t=e.length,n=0;n<t;){if(U(e[n],r))return!0;n++}return!1},F=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},R={},H={},W={INDEXEDDB:j,TEMPSTORAGE:M},G=[W.INDEXEDDB._driver,W.TEMPSTORAGE._driver],J=["dropInstance"],$=["clear","getItem","keys","length","removeItem","setItem"].concat(J),q={description:"",driver:G.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function V(e,r){e[r]=function(){var t=arguments;return e.ready().then(function(){return e[r].apply(e,t)})}}function z(){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var t in r)"__proto__"!==t&&"prototype"!==t&&"constructor"!==t&&r.hasOwnProperty(t)&&(F(r[t])?arguments[0][t]=r[t].slice():arguments[0][t]=r[t])}return arguments[0]}var K=function(){function e(r){for(var t in _classCallCheck(this,e),W)if("__proto__"!==t&&"prototype"!==t&&"constructor"!==t&&W.hasOwnProperty(t)){var n=W[t],o=n._driver;this[t]=o,R[o]||this.defineDriver(n)}this._defaultConfig=z({},q),this._config=z({},this._defaultConfig,r),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)["catch"](function(){})}return _createClass(e,[{key:"config",value:function(e){if("object"===_typeof(e)){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var r in e){if("storeName"===r&&(e[r]=e[r].replace(/\W/g,"_")),"version"===r&&"number"!=typeof e[r])return new Error("Database version must be a number.");this._config[r]=e[r]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config}},{key:"defineDriver",value:function(e,r,t){var n=new Dynamsoft.Lib.Promise(function(r,t){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void t(o);for(var i=$.concat("_initStorage"),a=0,s=i.length;a<s;a++){var c=i[a];if((!B(J,c)||e[c])&&"function"!=typeof e[c])return void t(o)}!function(){for(var r=function(e){return function(){var r=new Error("Method ".concat(e," is not implemented by the current driver")),t=Promise.reject(r);return l(t,arguments[arguments.length-1]),t}},t=0,n=J.length;t<n;t++){var o=J[t];e[o]||(e[o]=r(o))}}();var u=function(t){R[n],R[n]=e,H[n]=t,r()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(u,t):u(!!e._support):u(!0)}catch(f){t(f)}});return d(n,r,t),n}},{key:"driver",value:function(){return this._driver||null}},{key:"getDriver",value:function(e,r,t){var n=R[e]?Dynamsoft.Lib.Promise.resolve(R[e]):Promise.reject(new Error("Driver not found."));return d(n,r,t),n}},{key:"ready",value:function(e){var r=this,t=r._driverSet.then(function(){return null===r._ready&&(r._ready=r._initDriver()),r._ready});return d(t,e,e),t}},{key:"setDriver",value:function(e,r,t){var n=this;F(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){n._config.driver=n.driver()}function a(e){return n._extend(e),i(),n._ready=n._initStorage(n._config),n._ready}var s=null!==this._driverSet?this._driverSet["catch"](function(){return Dynamsoft.Lib.Promise.resolve()}):Dynamsoft.Lib.Promise.resolve();return this._driverSet=s.then(function(){var e=o[0];return n._dbInfo=null,n._ready=null,n.getDriver(e).then(function(e){n._driver=e._driver,i(),n._wrapLibraryMethodsWithReady(),n._initDriver=function(e){return function(){var r=0;return function t(){for(;r<e.length;){var o=e[r];return r++,n._dbInfo=null,n._ready=null,n.getDriver(o).then(a)["catch"](t)}i();var s=new Error("No available storage method found.");return n._driverSet=Promise.reject(s),n._driverSet}()}}(o)})})["catch"](function(){i();var e=new Error("No available storage method found.");return n._driverSet=Promise.reject(e),n._driverSet}),d(this._driverSet,r,t),this._driverSet}},{key:"supports",value:function(e){return!!H[e]}},{key:"_extend",value:function(e){z(this,e)}},{key:"_getSupportedDrivers",value:function(e){for(var r=[],t=0,n=e.length;t<n;t++){var o=e[t];this.supports(o)&&r.push(o)}return r}},{key:"_wrapLibraryMethodsWithReady",value:function(){for(var e=0,r=$.length;e<r;e++)V(this,$[e])}},{key:"createInstance",value:function(r){return new e(r)}}])}(),Z=new K;Date.prototype.kUtilFormat=function(e){var r={"M+":this.getUTCMonth()+1,"d+":this.getUTCDate(),"H+":this.getUTCHours(),"h+":this.getUTCHours()%12||12,"m+":this.getUTCMinutes(),"s+":this.getUTCSeconds(),"q+":Math.floor((this.getUTCMonth()+3)/3),"S+":this.getUTCMilliseconds()};for(var t in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getUTCFullYear()+"").substr(4-RegExp.$1.length))),r)new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?r[t]:("000"+r[t]).substr(("000"+r[t]).length-RegExp.$1.length)));return e},String.prototype.startsWith||(String.prototype.startsWith=function(e){return 0==this.indexOf(e)});var Y;function X(e){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(e)}function Q(e){var r=function(e,r){if("object"!=X(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=X(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==X(r)?r:r+""}function ee(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Q(n.key),n)}}function re(e){var r=e?new Date(e):new Date,t="yyyy-MM-dd HH:mm:ss.SSSZ",n={"M+":r.getUTCMonth()+1,"d+":r.getUTCDate(),"H+":r.getUTCHours(),"h+":r.getUTCHours()%12||12,"m+":r.getUTCMinutes(),"s+":r.getUTCSeconds(),"q+":Math.floor((r.getUTCMonth()+3)/3),"S+":r.getUTCMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(r.getUTCFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?String(n[o]):("000"+n[o]).substr(("000"+n[o]).length-RegExp.$1.length)));return t}Y="object"===("undefined"==typeof window?"undefined":_typeof(window))?window:{};var te=undefined;function ne(e){return e===te}function oe(e){return e!==te}function ie(e){return null===e}var ae={"[object Function]":"function","[object AsyncFunction]":"function","[object String]":"string","[object Object]":"object","[object Boolean]":"boolean","[object Number]":"number","[object Array]":"array"};function se(e){return ie(e)||ne(e)?String(e):ae[{}.toString.call(e)]||"object"}function ce(e){return"function"===se(e)}function ue(e){return"string"===se(e)}function fe(e){return"object"===se(e)}function le(e){return"boolean"===se(e)}function de(e){return"number"===se(e)}function he(e){return Array.isArray?Array.isArray(e):"array"===se(e)}function pe(e){if(null==e)return[];if(he(e))return e;var r=_typeof(e.length),t=_typeof(e);if("number"!==r||e.alert||"string"===t||"function"===t&&(!("item"in e)||"number"!==r))return[e];for(var n=[],o=0,i=e.length;o<i;o++)n[o]=e[o];return n}var ye,ve,me={debug:!1,bShowConsoleError:!1};function ge(){return ye}function be(e){ye=e}function _e(){if(me.debug&&ve&&ce(ve.log)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.log("[".concat(e,"] ").concat(o))}}function we(){if((me.debug||me.bShowConsoleError)&&ve&&ce(ve.error)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.error("[".concat(e,"] ").concat(o))}}function Se(){if(me.debug&&ve&&ce(ve.warn)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.warn("[".concat(e,"] ").concat(o))}}function Ce(){if(me.debug&&ve&&ce(ve.info)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.info("[".concat(e,"] ").concat(o))}}Y&&oe(Y.console)&&(!(ve=Y.console)||ce(ve.log)&&ce(ve.error)||(ve=!1),ye={log:_e,error:we,info:Ce,warn:Se,debug:function(){if(me.debug&&ve&&ce(ve.debug)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.debug("[".concat(e,"] ").concat(o))}},trace:function(){if(me.debug&&ve&&ce(ve.trace)){for(var e=re((new Date).getTime()),r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=pe(t);ve.trace("[".concat(e,"] ").concat(o))}}});var ke={queue:[],doNextStarted:!1,timer:null,pushToDo:function(e,r,t){ke.queue.push({obj:e,method:r,args:t})},doNext:function(){if(ke.doNextStarted)if(0!==ke.queue.length){var e=ke.queue[0],r=e.obj,t=e.method,n=e.args;if(ke.queue.splice(0,1),r&&"string"==typeof t&&ce(r[t])){var o=!1;if(n&&n.length>2){var i=n[n.length-2],a=n[n.length-1];ce(i)&&ce(a)&&(n[n.length-2]=function(){try{i.apply(r,arguments)}catch(e){}ke.timer=setTimeout(ke.doNext,0)},n[n.length-1]=function(){try{a.apply(r,arguments)}catch(e){}ke.timer=setTimeout(ke.doNext,0)},o=!0)}try{r[t].apply(r,n)}catch(s){}o||(ke.timer=setTimeout(ke.doNext,0))}else if(null===r&&ce(t)){try{t.apply(null,n)}catch(s){}ke.timer=setTimeout(ke.doNext,0)}else _e("not invoke a function: "+t),ke.timer=setTimeout(ke.doNext,0)}else ke.stop();else ke.stop()},start:function(){ke.doNextStarted||(ke.doNextStarted=!0,ke.timer=setTimeout(ke.doNext,0))},stop:function(){null!==ke.timer&&clearTimeout(ke.timer),ke.timer=null,ke.doNextStarted=!1,ke.queue=[]}};function xe(e){return Math.random().toString(16).substring(2,2+e)}function Pe(e){var r=[xe(8),"-",xe(4),"-",xe(4),"-",xe(4),"-",xe(8)];return e&&r.unshift(e),r.join("")}var Te=function(){return _createClass(function e(){_classCallCheck(this,e),_defineProperty(this,"handlers",void 0),this.handlers={}},[{key:"fire",value:function(e,r){var t=this.handlers[e.toLowerCase()];if(t){for(var n=0,o=0;n<t.length;n++){var i=t[n];try{i.handler.apply(i.context,[r]),o++}catch(a){_e(a)}}return o}return 0}},{key:"emit",value:function(e){return this.fire(e)}},{key:"on",value:function(e,r,t){var n,o=Pe(),i=e.toLowerCase();return this.handlers[i]=null!==(n=this.handlers[i])&&void 0!==n?n:[],this.handlers[i].push({id:o,handler:r,context:t}),o}},{key:"off",value:function(e,r){var t,n=e.toLowerCase(),o=this.handlers[n];if(o)if(r){for(t=o.length-1;t>=0;t--)if(o[t].id==r){o.splice(t,1);break}}else o.splice(0),delete this.handlers[n]}},{key:"clear",value:function(){this.handlers={}}}])}(),Ie="";function Oe(e,r){var t,n=e.toLowerCase(),o=r.toLowerCase(),i=/harmonyos/g.test(n);"linux"==o&&n.indexOf("windows nt")>=0&&(o="harmonyos",i=!0);var a=!i&&/cros/.test(n),s=!i&&/android/g.test(n)||/android/g.test(o),c=/iphone/g.test(n)||/iphone/g.test(o),u=/macintosh/.test(n),f=navigator.maxTouchPoints||0,l=/ipad/g.test(n)||(u||"macintel"==o)&&f>1,d=/ucweb|ucbrowser/g.test(n),h=!d&&/nexus/g.test(n)&&/version\/[\d.]+.*safari\//g.test(n),p=/playbook/g.test(n),y=/hp-tablet/g.test(n),v=/blackberry|bb10/g.test(n),m=/symbian/g.test(n),g=/windows phone/g.test(n),b=/mobile/g.test(n),_=/arm64|aarch64/g.test(n),w=/mips64/g.test(n),S=/huaweibrowser/g.test(n),C=/jsdom/g.test(n),k=p||l||y,x=!k&&!a&&(c||h||v||m||g||s||i||b),P=!x&&!k&&!a,T=P&&/win32|win64|windows/.test(o),I=T&&/win64|x64/.test(n),O=P&&/mac68k|macppc|macintosh|macintel/.test(n),A=P&&/linux/.test(o),E="win64"==o||/wow64|x86_64|win64|x64/.test(n)||_||w,j=/wow64/g.test(n),D=!1,N=/opera|opr/g.test(n),L=/360se/g.test(n),M=/maxthon/g.test(n),U=/tencenttraveler|qqbrowser/g.test(n),B=/the world/g.test(n),F=/metasr/g.test(n),R=/avant/g.test(n),H=/firefox|fxios/g.test(n),W=/gecko/g.test(n),G=!(H||S)&&/edge\/|edga\/|edgios\/|edg\//g.test(n),J=!(v||p||d||N||G||S||C)&&/chrome|crios/g.test(n),$=!1,q=Ie,V=0,z=0,K=Ie;if(T&&!G&&!H&&!J){var Z=n.indexOf("msie "),X=n.indexOf("trident"),Q=n.indexOf("rv:");$=-1!=Z||-1!=X||-1!=Q}if(!(O||c||l||T||v||p||h)||d||N||G||$||H||(t=n.match(/version\/([\d.]+).*safari\//))&&(v||p||h||(D=!0,J=!1),K=t[1]),G){var ee=n.indexOf("edge/");ee>-1?ee+=5:(ee=n.indexOf("edg/"))>-1?ee+=4:(ee=n.indexOf("edga/"))>-1?ee+=5:(ee=n.indexOf("edgios/"))>-1&&(ee+=7),ee>-1&&(t=(K=n.slice(ee)).indexOf(" "))>-1&&(K=K.slice(0,t))}else if(H)if((t=n.indexOf("firefox/"))>-1){var re=(t=n.slice(t+8)).indexOf(" ");re>-1&&(t=t.slice(0,re)),K=t,(re=t.indexOf("."))>-1&&(t=K.slice(0,re))}else(c||l)&&(t=n.indexOf("fxios/"))>-1&&(K=t=(t=n.slice(t+6)).slice(0,t.indexOf(" ")));else if($){var te=n.indexOf("msie "),ne=n.indexOf("trident"),oe=n.indexOf("rv:");-1!=te?q=t=(t=n.slice(te+5)).slice(0,t.indexOf(";")):-1!=oe?q=t=(t=(t=n.slice(oe+3)).slice(0,t.indexOf(";"))).slice(0,t.indexOf(")")):-1!=ne&&(q=t=(t=n.slice(ne+7)).slice(0,t.indexOf(";"))),K=t}else if(D)(t=K.indexOf("."))>-1&&(t=K.slice(0,t));else if(d)(t=n.indexOf("ucweb"))>-1?K=n.slice(t+5):(t=n.indexOf("ucbrowser/"))>-1&&(t=(K=n.slice(t+10)).indexOf(" "))>-1&&(K=K.slice(0,t));else if(N)(t=n.indexOf("version/"))>-1?K=n.slice(t+8):(t=n.indexOf("opr/"))>-1&&(K=n.slice(t+4));else if(m)(t=n.indexOf("browserng/"))>-1&&(K=n.slice(t+10));else if(g)(t=n.indexOf("iemobile/"))>-1&&(K=n.slice(t+9));else if(J){var ie=n.indexOf("chrome/");ie>-1?(t=(K=n.slice(ie+7)).indexOf(" "))>-1&&(K=K.slice(0,t)):(ie=n.indexOf("crios/"))>-1&&(t=(K=n.slice(ie+6)).indexOf(" "))>-1&&(K=K.slice(0,t)),(t=K.indexOf("."))>-1&&(t=K.slice(0,t))}else if(S){var ae=n.indexOf("huaweibrowser");ae>-1&&(t=(K=n.slice(ae+14)).indexOf(" "))>-1&&(K=K.slice(0,t))}else if(C){var se=n.indexOf("jsdom");se>-1&&(t=(K=n.slice(se+6)).indexOf(" "))>-1&&(K=K.slice(0,t))}if(G||$){var ce=window.document;ce&&ce.documentMode?V=ce.documentMode:(V=5,ce.compatMode&&"CSS1Compat"==ce.compatMode&&(V=7)),$&&(z=parseInt(K))}(O||A)&&(E=!0,O&&(t=n.match(/mac os x (\d+)(_|\.)(\d+)/))&&t.length>3&&(10==parseInt(t[1])&&parseInt(t[3])<14||parseInt(t[1])<10)&&(E=!1)),T||O||A||_||w||(x=!0);var ue=!0;if($)if(""===q||parseInt(q)>=10){var fe=Y.Dynamsoft;fe&&fe.DWT&&fe.DWT.IfUseActiveXForIE10Plus&&(ue=!1)}else ue=!1;return{bUseUserAgent:!0,bWin:T,bMac:O,bLinux:A,bMobile:x,bPad:k,bChromeOS:a,bHarmonyOS:i,bArm64:_,bMips64:w,bEmbed:_||w,bAndroid:s,biPhone:c,biPad:l,bWin64:I,bWOW64:j,bOSx64:E,bIE:$,bEdge:G,bChrome:J,bFirefox:H,bSafari:D,bOpera:N,bNexus:h,bUC:d,b360SE:L,bMaxthon:M,bTencentTraveler:U,bTheWorld:B,bMetaSr:F,bAvant:R,bHuaWeiBrowser:S,bJSDom:C,bGecko:W,bHTML5Edition:ue,strBrowserVersion:K,IEVersion:z,IEMode:V}}var Ae,Ee,je=navigator,De=!0;if("userAgentData"in je){var Ne=je.userAgentData,Le=[];Ne.platform&&""!=Ne.platform&&("brands"in Ne&&Array.isArray(Ne.brands)&&Ne.brands.length>0?Le=Ne.brands:"uaList"in Ne&&Array.isArray(Ne.uaList)&&Ne.uaList.length>0&&(Le=Ne.uaList),Le.length>0&&(De=!1,Ee=Ne.platform.toLowerCase(),Ae=function(e,r,t){var n,o,i,a,s,c,u,f,l,d=!1,h=!1,p=!1,y=e.mobile,v=!1,m=Ie,g=navigator.maxTouchPoints||0;for(o=r.length,n=0;n<o;n++){var b=r[n].brand.toLowerCase();if(b.indexOf("chrome")>=0){p=!0,m=r[n].version;break}if(b.indexOf("edge")>=0){d=!0,m=r[n].version;break}if(b.indexOf("opera")>=0){h=!0,m=r[n].version;break}}return p||d||h||(p=!0,m="100"),i=/windows/g.test(t),a=/mac/g.test(t),s=/linux/g.test(t),c=/android/g.test(t),u=/harmony/g.test(t),f=/(chromeos|chrome\sos)/g.test(t),l=/iphone/g.test(t),i||c||s||l||(v=/macintel/g.test(t)&&g>1),(c||u||l||v)&&(y=!0),{bUseUserAgent:!1,bWin:i,bMac:a,bLinux:s,bAndroid:c,bHarmonyOS:u,bChromeOS:f,bIE:!1,bEdge:d,bUC:!1,bPlaybook:!1,bBlackBerry:!1,bHuaWeiBrowser:!1,bOpera:h,bFirefox:!1,bChrome:p,bJSDom:!1,biPhone:l,biPad:v,bPad:c&&!e.mobile,bSafari:!1,bMobile:y,strBrowserVersion:m,bHTML5Edition:!0,IEVersion:0,IEMode:0}}(Ne,Le,Ee)))}if(De){var Me=je.userAgent.toLowerCase(),Ue=je.platform.toLowerCase();Ae=Oe(Me,Ue)}else Ae=Oe(je.userAgent.toLowerCase(),je.platform.toLowerCase());var Be=null===(e=document)||void 0===e||null===(e=e.location)||void 0===e?void 0:e.protocol;function Fe(e){return Ae.bGecko&&"mousewheel"===e?"DOMMouseScroll":e}function Re(e,r,t){var n=Fe(r);e&&e.addEventListener(n,t,!1)}function He(e,r,t){var n=Fe(r);e&&e.removeEventListener(n,t||null,!1)}function We(e){var r=e||Y.event;r&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation(),r.returnValue=!1,r.cancelBubble=!0)}function Ge(e,r){var t=Y.document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),r.dispatchEvent&&r.dispatchEvent(t)}Be||(Be="https:"),Ae.protocol=Be,Ae.bSSL="https:"===Be,Ae.bFileSystem="https:"!==Be&&"http:"!==Be;var Je,$e,qe,Ve,ze=Y.document,Ke=[],Ze=Ke.push,Ye=Ke.slice,Xe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Qe=function(){$e()};function er(e,r,t,n){var o,i,a,s=r&&r.ownerDocument,c=r?r.nodeType:9;if(t=t||[],"string"!=typeof e||!e||1!==c&&9!==c&&11!==c)return t;if(!n&&((r?r.ownerDocument||r:ze)!==qe&&$e(r),r=r||qe,11!==c&&(a=Xe.exec(e))))if(o=a[1]){if(9===c){if(!(i=r.getElementById(o)))return t;if(i.id===o)return t.push(i),t}else if(s&&(i=s.getElementById(o))&&Ve(r,i)&&i.id===o)return t.push(i),t}else{if(a[2])return Ze.apply(t,r.getElementsByTagName(e)),t;if((o=a[3])&&r.getElementsByClassName)return Ze.apply(t,r.getElementsByClassName(o)),t}return t}Ze.apply(Ye.call(ze.childNodes),ze.childNodes),$e=er.setDocument=function(e){var r,t=e?e.ownerDocument||e:ze;return t!==qe&&9===t.nodeType&&t.documentElement?(ze!==(qe=t)&&(r=qe.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",Qe,!1):r.attachEvent&&r.attachEvent("onunload",Qe)),Ve=function(e,r){if(r)for(;r=r.parentNode;)if(r===e)return!0;return!1},qe):qe},er.contains=function(e,r){return(e.ownerDocument||e)!==qe&&$e(e),Ve(e,r)},er.error=function(e){throw new Error("Syntax error: "+e)},Je=er.getText=function(e){var r,t="",n=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)t+=Je(e)}else if(3===o||4===o)return e.nodeValue}else for(;r=e[n++];)t+=Je(r);return t},$e();var rr={encodeChars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decodeChars:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1]},tr={UTF16ToUTF8:function(e){for(var r,t,n=[],o=e.length,i=0;i<o;i++){var a=e.charCodeAt(i);if(a>0&&a<=127)n.push(e.charAt(i));else if(a>=128&&a<=2047)r=192|a>>6&31,t=128|63&a,n.push(String.fromCharCode(r),String.fromCharCode(t));else if(a>=2048&&a<=65535){r=224|a>>12&15,t=128|a>>6&63;var s=128|63&a;n.push(String.fromCharCode(r),String.fromCharCode(t),String.fromCharCode(s))}}return n.join("")},UTF8ToUTF16:function(e){var r,t,n,o,i=[],a=e.length;for(r=0;r<a;r++)(t=e.charCodeAt(r))>>7&255?6==(t>>5&255)?(o=(31&t)<<6|63&(n=e.charCodeAt(++r)),i.push(String.fromCharCode(o))):14==(t>>4&255)&&(o=(255&(t<<4|(n=e.charCodeAt(++r))>>2&15))<<8|((3&n)<<6|63&e.charCodeAt(++r)),i.push(String.fromCharCode(o))):i.push(e.charAt(r));return i.join("")},encode:function(e){for(var r,t,n,o=this.UTF16ToUTF8(e),i=[],a=0,s=o.length;a<s;){if(r=255&o.charCodeAt(a++),a==s){i.push(rr.encodeChars.charAt(r>>2)),i.push(rr.encodeChars.charAt((3&r)<<4)),i.push("==");break}if(t=o.charCodeAt(a++),a==s){i.push(rr.encodeChars.charAt(r>>2)),i.push(rr.encodeChars.charAt((3&r)<<4|(240&t)>>4)),i.push(rr.encodeChars.charAt((15&t)<<2)),i.push("=");break}n=o.charCodeAt(a++),i.push(rr.encodeChars.charAt(r>>2)),i.push(rr.encodeChars.charAt((3&r)<<4|(240&t)>>4)),i.push(rr.encodeChars.charAt((15&t)<<2|(192&n)>>6)),i.push(rr.encodeChars.charAt(63&n))}return i.join("")},encodeArray:function(e){if(window.ArrayBuffer&&window.Uint8Array&&e instanceof window.ArrayBuffer){var r=new window.Uint8Array(e);return this.encodeArray(r)}for(var t,n,o,i=[],a=0,s=e.length;a<s;){if(t=255&e[a++],a==s){i.push(rr.encodeChars.charAt(t>>2)),i.push(rr.encodeChars.charAt((3&t)<<4)),i.push("==");break}if(n=255&e[a++],a==s){i.push(rr.encodeChars.charAt(t>>2)),i.push(rr.encodeChars.charAt((3&t)<<4|(240&n)>>4)),i.push(rr.encodeChars.charAt((15&n)<<2)),i.push("=");break}o=255&e[a++],i.push(rr.encodeChars.charAt(t>>2)),i.push(rr.encodeChars.charAt((3&t)<<4|(240&n)>>4)),i.push(rr.encodeChars.charAt((15&n)<<2|(192&o)>>6)),i.push(rr.encodeChars.charAt(63&o))}return i.join("")},decode:function(e,r){for(var t,n,o,i,a=this,s=[],c=0,u=e.length;c<u;){do{t=rr.decodeChars[255&e.charCodeAt(c++)]}while(c<u&&-1==t);if(-1==t)break;do{n=rr.decodeChars[255&e.charCodeAt(c++)]}while(c<u&&-1==n);if(-1==n)break;r?s.push(t<<2|(48&n)>>4):s.push(String.fromCharCode(t<<2|(48&n)>>4));do{if(61==(o=255&e.charCodeAt(c++)))return r?s:a.UTF8ToUTF16(s.join(""));o=rr.decodeChars[o]}while(c<u&&-1==o);if(-1==o)break;r?s.push((15&n)<<4|(60&o)>>2):s.push(String.fromCharCode((15&n)<<4|(60&o)>>2));do{if(61==(i=255&e.charCodeAt(c++)))return r?s:a.UTF8ToUTF16(s.join(""));i=rr.decodeChars[i]}while(c<u&&-1==i);if(-1==i)break;r?s.push((3&o)<<6|i):s.push(String.fromCharCode((3&o)<<6|i))}return r?s:a.UTF8ToUTF16(s.join(""))}},nr={fromUTF16:function(e){for(var r,t=[],n=0,o=e.length;n<o;)(r=e.charCodeAt(n))>=1&&r<=127?t.push(e.charAt(n)):r>2047?(t.push(String.fromCharCode(224|r>>12&15)),t.push(String.fromCharCode(128|r>>6&63)),t.push(String.fromCharCode(128|63&r))):(t.push(String.fromCharCode(192|r>>6&31)),t.push(String.fromCharCode(128|63&r))),n++;return t.join("")},toUTF16:function(e){for(var r,t,n,o=[],i=0,a=e.length;i<a;)switch((r=e.charCodeAt(i++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o.push(e.charAt(i-1));break;case 12:case 13:t=e.charCodeAt(i++),o.push(String.fromCharCode((31&r)<<6|63&t));break;case 14:t=e.charCodeAt(i++),n=e.charCodeAt(i++),o.push(String.fromCharCode((15&r)<<12|(63&t)<<6|63&n))}return o.join("")}},or="undefined"!=typeof self?self:global,ir=or.btoa?function(e){return or.btoa(e)}:function(e){for(var r,t=String(e),n=0,o=0,i=rr.encodeChars,a="";t.charAt(0|o)||(i="=",o%1);a+=i.charAt(63&n>>8-o%1*8)){if((r=t.charCodeAt(o+=3/4))>255)throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|r}return a},ar=or.atob?function(e){return or.atob(e)}:function(e){var r=String(e).replace(/[=]+$/,"");if(r.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n=0,o=0,i=0,a="";t=r.charAt(i++);~t&&(o=n%4?64*o+t:t,n++%4)?a+=String.fromCharCode(255&o>>(-2*n&6)):0)t=rr.encodeChars.indexOf(t);return a};function sr(e){if(null===e||"object"!==_typeof(e))return e;if(e instanceof Date){var r=new Date;return r.setTime(e.getTime()),r}if(Array.isArray(e)){for(var t=[],n=e.length,o=0;o<n;o++)t[o]=sr(e[o]);return t}if(e instanceof Object){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=sr(e[a]));return i}return e}var cr=Date.now||function(){return+new Date},ur=function(){return""+cr()};function fr(){for(var e,r=cr()%1e4,t=[],n=0;n<5;n++)e=Math.floor(10*Math.random()),0!=n||0!=e?t.push(e):n=-1;return r<10?t.push("000"):r<100?t.push("00"):r<1e3&&t.push("0"),t.push(r),t.join("")}function lr(e){return"__proto__"===e||"prototype"===e||"constructor"===e}function dr(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){if(lr(t))continue;e[t]=r[t]}return e}function hr(e,r){for(var t in r)!Object.prototype.hasOwnProperty.call(r,t)||lr(t)||ne(r[t])||Object.prototype.hasOwnProperty.call(e,t)&&!ne(e[t])||(e[t]=r[t]);return e}var pr=!1;"wakeLock"in navigator&&(pr=!0);var yr=null;function vr(){return(vr=_asyncToGenerator(_regenerator().m(function e(){return _regenerator().w(function(e){for(;;)switch(e.p=e.n){case 0:return e.p=0,e.n=1,navigator.wakeLock.request("screen");case 1:yr=e.v,e.n=3;break;case 2:e.p=2,e.v,yr=null;case 3:return e.a(2)}},e,null,[[0,2]])}))).apply(this,arguments)}function mr(){pr&&(null==yr?function(){vr.apply(this,arguments)}():yr.release().then(function(){yr=null}))}function gr(){return yr}var br=Array.prototype;function _r(e,r,t){return br.filter.call(e,r,t)}function wr(e,r){return br.indexOf.call(r,e)}function Sr(e){var r,t,n=[],o=e.length;for(r=0;r<o;r++){for(t=r+1;t<o;t++)e[r]===e[t]&&(t=++r);n.push(e[r])}return n}var Cr=/^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;function kr(e,r){var t,n=[];for(t=0;t<e.length;t++){var o=e[t];o&&"."!==o&&(".."===o?n.length&&".."!==n[n.length-1]?n.pop():r&&n.push(".."):n.push(o))}return n}function xr(e){var r="/"===e.charAt(0),t="/"===e.slice(-1);return(e=kr(_r(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}var Pr=function(){return _createClass(function e(){_classCallCheck(this,e)},[{key:"resolve",value:function(){var e,r,t="",n=arguments,o=!1;for(e=n.length-1;e>=0&&!o;e--)ue(r=n[e])&&r&&(t=r+"/"+t,o="/"===r.charAt(0));return(o?"/":"")+kr(_r(t.split("/"),function(e){return!!e}),!o).join("/")||"."}},{key:"join",value:function(){return xr(_r(pe(arguments),function(e){return e&&ue(e)}).join("/"))}},{key:"relative",value:function(e,r){e=xr(e),r=xr(r);var t,n,o=_r(e.split("/"),function(e){return!!e}),i=[],a=_r(r.split("/"),function(e){return!!e}),s=Math.min(o.length,a.length);for(t=0;t<s&&o[t]===a[t];t++);for(n=t;t<o.length;)i.push(".."),t++;return(i=i.concat(a.slice(n))).join("/")}},{key:"basename",value:function(e,r){var t;return t=(e.match(Cr)||[])[3]||"",r&&t&&t.slice(-1*r.length)===r&&(t=t.slice(0,-1*r.length)),t}},{key:"dirname",value:function(e){var r=e.match(Cr)||[],t=r[1]||"",n=r[2]||"";return t||n?(n&&(n=n.substring(0,n.length-1)),t+n):"."}},{key:"extname",value:function(e){return(e.match(Cr)||[])[4]||""}}])}(),Tr=!1;function Ir(e,r,t){if(!e)return e;var n=t||null,o=e.length;if(ne(o)||ce(e))for(var i=Object.keys(e),a=0;a<i.length;a++){var s=i[a];if(r.call(n,e[s],s,e)===Tr)break}else for(var c=e,u=0;u<o&&r.call(n,c[u],u,e)!==Tr;u++);return e}var Or=Object.prototype.hasOwnProperty;function Ar(e){if(!e||"object"!==se(e)||e.nodeType||e.window==e)return Tr;var r,t;try{if((t=e.constructor)&&!Or.call(e,"constructor")&&!Or.call(t.prototype,"isPrototypeOf"))return Tr}catch(n){return Tr}for(r in e);return ne(r)||Or.call(e,r)}var Er="object"===("undefined"==typeof HTMLElement?"undefined":_typeof(HTMLElement));function jr(e){return Er?e instanceof HTMLElement:e&&"object"===_typeof(e)&&(1===e.nodeType||9===e.nodeType)&&"string"==typeof e.nodeName}function Dr(e){var r=e;if(jr(e))for(;!r&&r!=document.body;)r=r.parentNode;else r=0;return!!r}function Nr(e,r){return 0===e.lastIndexOf(r,0)}function Lr(e,r){var t=e.length-r.length;return t>=0&&e.indexOf(r,t)===t}function Mr(e){return null==e?Ie:String.prototype.trim.call(e)}function Ur(e){if(e&&"object"===_typeof(e))for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&!ne(e[r]))return!1;return!0}function Br(e){return ue(e)?e.replace(/[^\x20-\x7E]/g,""):e}function Fr(e,r,t){return e.replace(new RegExp(r,"gi"),t)}function Rr(e){return e.charAt(0).toUpperCase()+e.substring(1)}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Ie)});var Hr,Wr="none",Gr={getOffset:function(e,r,t){e=e||Y.event;for(var n,o,i=t||e.target,a=0,s=0,c=0,u=0,f=!1,l=Y.document;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);){var d,h;if(o=i.scrollLeft,n=i.scrollTop,"BODY"===i.tagName)if(f)o=0,n=0;else o|=null===(d=l.documentElement)||void 0===d?void 0:d.scrollLeft,n|=null===(h=l.documentElement)||void 0===h?void 0:h.scrollTop;else"fixed"===i.style.position&&(f=!0);a+=i.offsetLeft-o,s+=i.offsetTop-n,i=i.offsetParent}return r&&(c=r.Left,u=r.Top),{x:a=e.clientX-a-c,y:s=e.clientY-s-u}},getElDimensions:function(e,r){var t,n;return e?(t=e.style.display,e.style.display="",n=r?{offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight}:{clientTop:e.clientTop,clientLeft:e.clientLeft,clientWidth:e.clientWidth?e.clientWidth:parseInt(e.style.width)?parseInt(e.style.width):0,clientHeight:e.clientHeight?e.clientHeight:parseInt(e.style.height)?parseInt(e.style.height):0},e.style.display=t,n):{offsetTop:0,offsetLeft:0,offsetWidth:0,offsetHeight:0}}};function Jr(e){return document.getElementById(e)}function $r(e){var r=ue(e)?Jr(e):e;r&&(r.length>0&&(r=r[0]),r.style.display=Wr)}function qr(e){var r=ue(e)?Jr(e):e;r&&(r.length>0&&(r=r[0]),r.style.display=Ie)}function Vr(e){var r=ue(e)?Jr(e):e;r&&(r.length>0&&(r=r[0]),r.style.display===Wr?r.style.display=Ie:r.style.display=Wr)}function zr(e){if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function Kr(e){return encodeURIComponent(String(e))}function Zr(e){return decodeURIComponent(e.replace(/\+/g," "))}if(window.trustedTypes){try{Hr=window.trustedTypes.createPolicy("d-create-script",{createScriptURL:function(e){return e}})}catch(At){}}function Yr(e){return Hr?Hr.createScriptURL(e):e}var Xr=document,Qr=Xr&&Xr.documentElement,et=Xr.getElementsByTagName("head")[0]||Qr,rt=Xr.createElement("script").readyState?function(e,r){var t=e.onreadystatechange;e.onreadystatechange=function(){var n=e.readyState;if("loaded"===n||"complete"===n){e.onreadystatechange=null,t&&t();r.call(this,{type:"load",path:[e]})}else"loading"===n||r.call(this,{type:"error",path:[e]})}}:function(e,r){e.addEventListener("load",r,!1),e.addEventListener("error",r,!1)};function tt(e,r,t){return nt(e,r,!1,t)}function nt(e,r,t,n){var o=n||function(){};if(ce(n)||(o=function(){}),ue(e)&&e!==Ie){var i=Xr.createElement("script"),a=["",e].join(Ie);return i.src=Yr(a),r&&(i.async=!0),i.charset="utf-8",rt(i,o),t?et.appendChild(i):et.insertBefore(i,et.firstChild),i}o()}function ot(e,r,t){return it(e,r,!1,t)}function it(e,r,t,n){var o=n||function(){};if(ce(n)||(o=function(){}),Ae.bJSDom)o("ok");else if(he(e)){var i=e.length,a=function(e){e&&"object"===_typeof(e)&&"load"===e.type?i--:(e&&"object"===_typeof(e)&&"error"===e.type&&we(["Failed to load resource: ",e.target.src,"."].join("")),o()),i<=0&&o("ok")};i<=0?o("ok"):Ir(e,function(e){nt(e,r||!1,t,a)})}else o()}function at(e,r){return st(e,!1,r)}function st(e,r,t){var n=t||!1;if(ce(t)||(n=!1),ue(e)&&e!==Ie){if(!Ae.bJSDom){var o=Xr.createElement("link");return o.href=Yr(e),o.rel="stylesheet",o.async=!0,n&&rt(o,n),r?et.appendChild(o):et.insertBefore(o,et.firstChild),o}n&&n()}else n&&n()}function ct(e,r){return ut(e,!1,r)}function ut(e,r,t){if(Ae.bJSDom)t&&t("ok");else if(he(e)){var n=e.length,o=function(e){e&&"object"===_typeof(e)&&"load"===e.type&&n--,e&&"object"===_typeof(e)&&"load"!==e.type&&("error"===e.type&&we(["Failed to load resource: ",e.target.href,"."].join("")),t&&t()),n<=0&&t&&t("ok")};Ir(e,function(e){st(e,r,o)})}else t&&t()}function ft(e){var r,t;if(!Ae.bJSDom){var n=document;if(n&&ue(t=e.body)&&t!=Ie){(r=n.createElement("script")).charset="utf-8",Ae.bIE?r.text=t:r.appendChild(n.createTextNode(t)),e.language?r.language=e.language:r.language="javascript",e.type?r.type=e.type:r.type="text/javascript";var o=n&&n.documentElement,i=n.getElementsByTagName("head")[0]||o;i.insertBefore(r,i.firstChild)}}}function lt(e){ft({body:e})}function dt(e){ft({body:e,language:"vbscript",type:"text/vbscript"})}function ht(e){return null!=e&&e==e.window}function pt(){this.keys=[],this.data={},this.set=function(e,r){null==this.data[e]&&-1==this.keys.indexOf(e)&&this.keys.push(e),this.data[e]=r},this.get=function(e){return this.data[e]}}function yt(e){return Math.random().toString(16).substring(2,2+e)}function vt(e){var r=[yt(8),"-",yt(4),"-",yt(4),"-",yt(4),"-",yt(8)];return e&&r.unshift(e),r.join("")}var mt=new(function(){return _createClass(function e(){_classCallCheck(this,e),_defineProperty(this,"nil",undefined),_defineProperty(this,"bNode",!1),_defineProperty(this,"noop",function(){}),_defineProperty(this,"mix",dr),_defineProperty(this,"mixOwnProperties",hr),_defineProperty(this,"clone",sr),_defineProperty(this,"keys",Object.keys),_defineProperty(this,"now",ur),_defineProperty(this,"getFormatedNow",re),_defineProperty(this,"getRandom",fr),_defineProperty(this,"guid",Pe),_defineProperty(this,"get",Jr),_defineProperty(this,"show",qr),_defineProperty(this,"hide",$r),_defineProperty(this,"toggle",Vr),_defineProperty(this,"empty",zr),_defineProperty(this,"uid",vt),_defineProperty(this,"stringify",Y.JSON.stringify),_defineProperty(this,"parse",Y.JSON.parse),_defineProperty(this,"isDef",oe),_defineProperty(this,"isUndef",ne),_defineProperty(this,"isUndefined",ne),_defineProperty(this,"isNull",ie),_defineProperty(this,"isNaN",isNaN),_defineProperty(this,"isFunction",ce),_defineProperty(this,"isString",ue),_defineProperty(this,"isObject",fe),_defineProperty(this,"isBoolean",le),_defineProperty(this,"isNumber",de),_defineProperty(this,"isArray",he),_defineProperty(this,"type",se),_defineProperty(this,"isPlainObject",Ar),_defineProperty(this,"isDOM",jr),_defineProperty(this,"isDOMInBody",Dr),_defineProperty(this,"each",Ir),_defineProperty(this,"getLogger",ge),_defineProperty(this,"setLogger",be),_defineProperty(this,"log",_e),_defineProperty(this,"error",we),_defineProperty(this,"warn",Se),_defineProperty(this,"info",Ce),_defineProperty(this,"filter",_r),_defineProperty(this,"indexOf",wr),_defineProperty(this,"uniq",Sr),_defineProperty(this,"startsWith",Nr),_defineProperty(this,"endsWith",Lr),_defineProperty(this,"replaceAll",Fr),_defineProperty(this,"upperCaseFirst",Rr),_defineProperty(this,"removeNonPrintableChar",Br),_defineProperty(this,"trim",Mr),_defineProperty(this,"makeArray",pe),_defineProperty(this,"isEmptyObject",Ur),_defineProperty(this,"Map",pt),_defineProperty(this,"Path",new Pr),_defineProperty(this,"DOM",Gr),_defineProperty(this,"isWindow",ht),_defineProperty(this,"customEvent",new Te),_defineProperty(this,"addEventListener",Re),_defineProperty(this,"removeEventListener",He),_defineProperty(this,"stopPropagation",We),_defineProperty(this,"fireEvent",Ge),_defineProperty(this,"base64",tr),_defineProperty(this,"utf8",nr),_defineProperty(this,"btoa",ir),_defineProperty(this,"atob",ar),_defineProperty(this,"asyncQueue",ke),_defineProperty(this,"sizzle",er),_defineProperty(this,"toggleWakeLock",mr),_defineProperty(this,"getWakeLock",gr),_defineProperty(this,"urlEncode",Kr),_defineProperty(this,"urlDecode",Zr),_defineProperty(this,"scriptOnload",rt),_defineProperty(this,"addAllCss",ut),_defineProperty(this,"getAllCss",ct),_defineProperty(this,"addCss",st),_defineProperty(this,"getCss",at),_defineProperty(this,"addScripts",it),_defineProperty(this,"getScripts",ot),_defineProperty(this,"addScript",nt),_defineProperty(this,"getScript",tt),_defineProperty(this,"addJS",lt),_defineProperty(this,"addVBS",dt)},[{key:"debug",get:function(){return me.debug},set:function(e){me.debug=e}},{key:"bShowConsoleError",get:function(){return me.debug},set:function(e){me.bShowConsoleError=e}}])}()),gt=mt.clone,bt=mt.startsWith,_t=mt.each,wt=mt.isString,St=/[#\/\?@]/g,Ct=/[#\?]/g,kt={scheme:1,userInfo:2,hostname:3,port:4,path:5},xt=new RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?(.+)?$");function Pt(e,r){return wt(e)&&wt(r)?e.toLowerCase()===r.toLowerCase():e===r}function Tt(e,r){return encodeURI(e).replace(r,function(e){return"%"+function(e){return 1===e.length?"0"+e:e}(e.charCodeAt(0).toString(16))})}var It=function(){function e(r){if(function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.scheme="",this.userInfo="",this.hostname="",this.port="",this.path="",r instanceof e)return gt(r);e.getComponents(r,this)}return r=e,n=[{key:"getComponents",value:function(e,r){var t=(e=e||"").match(xt)||[],n=r||{};return _t(kt,function(e,r){n[r]=t[e]}),n}}],(t=[{key:"clone",value:function(){var r=new e,t=this;return _t(kt,function(e,n){r[n]=t[n]}),r}},{key:"getScheme",value:function(){return this.scheme}},{key:"setScheme",value:function(e){return this.scheme=e,this}},{key:"getHostname",value:function(){return this.hostname}},{key:"setHostname",value:function(e){return this.hostname=e,this}},{key:"setUserInfo",value:function(e){return this.userInfo=e,this}},{key:"getUserInfo",value:function(){return this.userInfo}},{key:"setPort",value:function(e){return this.port=e,this}},{key:"getPort",value:function(){return this.port}},{key:"setPath",value:function(e){return this.path=e,this}},{key:"getPath",value:function(){return this.path}},{key:"isSameOriginAs",value:function(e){var r=this;return Pt(r.hostname,e.hostname)&&Pt(r.scheme,e.scheme)&&Pt(r.port,e.port)}},{key:"toString",value:function(e){var r,t,n,o,i,a=[],s=this;return(r=s.scheme)&&(a.push(Tt(r,St)),a.push(":")),(t=s.hostname)&&(a.push("//"),(i=s.userInfo)&&(a.push(Tt(i,St)),a.push("@")),a.push(encodeURIComponent(t)),(o=s.port)&&(a.push(":"),a.push(o))),(n=s.path)&&(t&&!bt(n,"/")&&(n="/"+n),a.push(Tt(n,Ct))),a.join("")}}])&&ee(r.prototype,t),n&&ee(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,t,n}(),Ot=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Dynamsoft;Ot.LTS={},Ot.LTS._={createLtsInstance:function(e){var r,t,n,o,i,a,u,f,l,d,h,p,y,v,m,g,b,_,w,S,C,k,x,P,T=e.fetch||s.fetch,I=e.btoa||s.btoa,O=e.atob||s.atob,A=e.bd,E=e.pd,j=e.vm,D=e.hs,N=e.dt,L=e.dm,M=["https://mlts.dynamsoft.com/","https://slts.dynamsoft.com/"],U=!1,B=Dynamsoft.Lib.Promise.resolve(),F=e.lf,R=e.log&&function(){try{for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];e.log.apply(null,t)}catch(o){setTimeout(function(){throw o},0)}}||function(){},H=A&&R||function(){},W=e.fol,G=e.updl,J=e.mnet,$=e.mxet,q=e.sutlcb,V=e.feab,z=function(e){return O(O(e.replace(/\n/g,"+").replace(/\s/g,"=")).substring(1))},K=function(e){return I(String.fromCharCode(97+25*Math.random())+I(e)).replace(/\+/g,"\n").replace(/=/g," ")},Y=function(){if(g)return g;if(s.crypto){var e=new Uint8Array(36);s.crypto.getRandomValues(e);for(var r="",t=0;t<36;++t){var n=e[t]%36;r+=n<10?n:String.fromCharCode(n+87)}return r}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=16*Math.random()|0;return("x"==e?r:3&r|8).toString(16)})},X=" Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.",Q={dlsErrorAndCacheExpire:"Failed to connect to the Dynamsoft License Server. The cached license has expired. Please get connected to the network as soon as possible or contact the site administrator for more information.",publicTrialNetworkTimeout:"Failed to connect to the Dynamsoft License Server: network timed out."+X,networkTimeout:"Failed to connect to the Dynamsoft License Server: network timed out. Check your Internet connection or contact the site administrator for more information.",publicTrialFailConnect:"Failed to connect to the Dynamsoft License Server: network connection error."+X,failConnect:"Failed to connect to the Dynamsoft License Server: network connection error. Check your Internet connection or contact the site administrator for more information.",checkLocalTime:"Your system date and time appear to have been changed, causing the license to fail. Please correct the system date and time, then try again."},ee=function(){var e=_asyncToGenerator(_regenerator().m(function r(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:F||(F=Z);case 1:return e.a(2)}},r)}));return function(){return e.apply(this,arguments)}}(),re=function(){var e=_asyncToGenerator(_regenerator().m(function r(){return _regenerator().w(function(e){for(;;)if(0===e.n)return e.a(2,b=b||_asyncToGenerator(_regenerator().m(function r(){var e,t,o,i,a,s,c,u,f,l,h,p,m,b;return _regenerator().w(function(r){for(;;)switch(r.p=r.n){case 0:return r.n=1,ee();case 1:return r.n=2,F.createInstance({name:"dynamjssdkhello"});case 2:return e=r.v,r.n=3,e.setItem("dynamjssdkhello","available");case 3:return r.n=4,F.createInstance({name:"dynamdlsinfo"});case 4:if(y=r.v,!g){r.n=6;break}return r.n=5,y.setItem("lsu"+D,g);case 5:r.n=8;break;case 6:return r.n=7,y.getItem("lsu"+D);case 7:g=r.v;case 8:if(v=g?null:I(I("v2")+String.fromCharCode(L.charCodeAt(L.length/2)+1)+I(L)),g){r.n=25;break}return r.p=9,r.n=10,y.getItem(v);case 10:if(s=r.v,!(u=!s)){r.n=14;break}return r.n=11,null===(o=self.indexedDB)||void 0===o?void 0:o.databases();case 11:if(h=t=r.v,!(l=null!==h)){r.n=12;break}l=void 0!==t;case 12:if(!(f=l)){r.n=13;break}f=t.some(function(e){return"dynamltsinfo"===(null==e?void 0:e.name)});case 13:u=f;case 14:if(!u){r.n=17;break}return r.n=15,F.createInstance({name:"dynamltsinfo"});case 15:return c=r.v,r.n=16,c.getItem(v);case 16:if(s=r.v,!s){r.n=17;break}return r.n=17,y.setItem(v,s);case 17:if(!s){r.n=19;break}return p=JSON,r.n=18,z(s);case 18:i=p.parse.call(p,r.v),a=_slicedToArray(i,2),n=a[0],d=a[1];case 19:r.n=21;break;case 20:r.p=20,r.v;case 21:if(r.p=21,!(null==n)){r.n=23;break}return n=Y(),m=y,b=v,r.n=22,K(JSON.stringify([n,null]));case 22:m.setItem.call(m,b,r.v);case 23:r.n=25;break;case 24:r.p=24,r.v;case 25:return r.a(2)}},r,null,[[21,24],[9,20]])}))())},r)}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=_asyncToGenerator(_regenerator().m(function r(){return _regenerator().w(function(e){for(;;)switch(e.p=e.n){case 0:return m=I(String.fromCharCode(D.charCodeAt(0)+10)+I(E)+I(D)+j+I(""+N)),e.n=1,F.createInstance({name:"dynamdlsuns"+I(I("v2"))+I(String.fromCharCode(D.charCodeAt(0)+10)+I(E)+I(D)+j+I(""+N))});case 1:return p=e.v,e.p=2,e.n=3,y.getItem(m);case 3:t=e.v,e.n=5;break;case 4:e.p=4,e.v;case 5:return e.a(2)}},r,null,[[2,4]])}));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=_asyncToGenerator(_regenerator().m(function s(e){return _regenerator().w(function(s){for(;;)switch(s.n){case 0:return w=Date.now(),_||(_=_asyncToGenerator(_regenerator().m(function c(){var s,p,b,w,S,C,k,x;return _regenerator().w(function(c){for(;;)switch(c.p=c.n){case 0:if(c.p=0,s={pd:E,vm:j,v:r,dt:N||"browser",ed:"javascript",cu:n,ad:L,os:o,fn:i},f&&(s.rmk=f),D&&(-1!=D.indexOf("-")?s.hs=D:s.og=D),p={},!d||g){c.n=4;break}return c.n=1,y.getItem(v);case 1:if(S=c.v,!S){c.n=3;break}return k=JSON,c.n=2,z(S);case 2:b=k.parse.call(k,c.v),w=_slicedToArray(b,2),n=w[0],d=w[1];case 3:p["lts-time"]=d;case 4:return u&&(s.sp=u),c.n=5,Promise.race([_asyncToGenerator(_regenerator().m(function P(){var r,o,i,c,u,f,h,b,_,w,S,C;return _regenerator().w(function(k){for(;;)switch(k.p=k.n){case 0:if(o=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),!(d&&!g)){k.n=2;break}return _=y,w=v,k.n=1,K(JSON.stringify([n,o]));case 1:_.setItem.call(_,w,k.v),d=o;case 2:return i="auth/?ext="+encodeURIComponent(I(JSON.stringify(s))),l&&(i+="&"+encodeURIComponent(l)),u=!1,f=!1,h=function(){var e=_asyncToGenerator(_regenerator().m(function r(e){var n,o;return _regenerator().w(function(r){for(;;)switch(r.p=r.n){case 0:if(!e||e.ok){r.n=4;break}return r.p=1,r.n=2,e.text();case 2:(n=r.v)&&(o=JSON.parse(n)).errorCode&&(c=o,o.errorCode>100&&o.errorCode<200&&(t=null,u=!0,f=!0)),r.n=4;break;case 3:r.p=3,r.v;case 4:return r.a(2)}},r,null,[[1,3]])}));return function(r){return e.apply(this,arguments)}}(),k.p=3,k.n=4,T(M[0]+i,{headers:p,cache:e?"reload":"default",mode:"cors",timeout:1e4});case 4:return r=k.v,k.n=5,h(r);case 5:k.n=7;break;case 6:k.p=6,k.v;case 7:if(t||r&&r.ok||u){k.n=12;break}return k.p=8,k.n=9,T(M[1]+i,{headers:p,mode:"cors",timeout:3e4});case 9:return r=k.v,k.n=10,h(r);case 10:k.n=12;break;case 11:k.p=11,k.v;case 12:if(t||r&&r.ok||u){k.n=17;break}return k.p=13,k.n=14,T(M[0]+i,{headers:p,mode:"cors",timeout:3e4});case 14:return r=k.v,k.n=15,h(r);case 15:k.n=17;break;case 16:k.p=16,k.v;case 17:if(!(c&&151==c.errorCode&&!g)){k.n=19;break}return y.removeItem(v),y.removeItem(m),n=Y(),s.cu=n,d=void 0,i="auth/?ext="+encodeURIComponent(I(JSON.stringify(s))),k.n=18,T(M[0]+i,{headers:p,mode:"cors",timeout:3e4});case 18:return r=k.v,k.n=19,h(r);case 19:return function(){if(!r||!r.ok){var e;f&&y.setItem(m,""),c?111==c.errorCode?e=c.message:((e=c.message.trim()).endsWith(".")||(e+="."),e="An error occurred during authorization: ".concat(e,a?" [Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.":" Contact the site administrator for more information.")):e=a?Q.publicTrialFailConnect:Q.failConnect;var t=Error(e);throw c&&c.errorCode&&(t.ltsErrorCode=c.errorCode),t}}(),k.n=20,r.text();case 20:if(b=k.v,k.p=21,d||g){k.n=23;break}return S=y,C=v,k.n=22,K(JSON.stringify([n,o]));case 22:S.setItem.call(S,C,k.v),d=o;case 23:y.setItem(m,b),k.n=25;break;case 24:k.p=24,k.v;case 25:return k.a(2,b)}},P,null,[[21,24],[13,16],[8,11],[3,6]])}))(),new Dynamsoft.Lib.Promise(function(e,r){var n;n=a?Q.publicTrialNetworkTimeout:Q.networkTimeout,setTimeout(function(){return r(new Error(n))},t?3e3:15e3)})]);case 5:C=c.v,t=C,c.n=7;break;case 6:c.p=6,x=c.v,h=x;case 7:_=null;case 8:return c.a(2)}},c,null,[[0,6]])}))()),s.n=1,_;case 1:return s.a(2)}},s)}));return function(r){return e.apply(this,arguments)}}(),oe=function(){var e=_asyncToGenerator(_regenerator().m(function a(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:return S||(S=_asyncToGenerator(_regenerator().m(function a(){var e;return _regenerator().w(function(a){for(;;)switch(a.p=a.n){case 0:if(H(n),t){a.n=2;break}if(U){a.n=1;break}throw R(h.message),h;case 1:return a.a(2);case 2:e={dm:L},A&&(e.bd=!0),e.brtk=!0,e.ls=M[0],D&&(-1!=D.indexOf("-")?e.hs=D:e.og=D),e.cu=n,i&&(e.fn=i),E&&(e.pd=E),r&&(e.v=r),N&&(e.dt=N),o&&(e.os=o),f&&(e.rmk=f),H(t);try{e.ar=t,e.bafc=!!h}catch(At){}return H(e),a.p=3,a.n=4,G(e);case 4:a.n=6;break;case 5:a.p=5,a.v,H("error updl");case 6:return a.n=7,ie();case 7:U||(U=!0),S=null;case 8:return a.a(2)}},a,null,[[3,5]])}))()),e.n=1,S;case 1:return e.a(2)}},a)}));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=_asyncToGenerator(_regenerator().m(function r(){var e,t;return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return e=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),r.n=1,$();case 1:if(t=r.v,H(t),!(t&&t<e)){r.n=2;break}throw h?new Error(Q.dlsErrorAndCacheExpire):new Error(Q.checkLocalTime);case 2:return r.a(2)}},r)}));return function(){return e.apply(this,arguments)}}(),ae=null,se=new Dynamsoft.Lib.Promise(function(e){ae=function(){se.isPending=!1,se.isFulfilled=!0,e()}}),ce=null,ue=function(){var e=_asyncToGenerator(_regenerator().m(function r(e,t){return _regenerator().w(function(r){for(;;)switch(r.n){case 0:return B=B.then(_asyncToGenerator(_regenerator().m(function o(){var r,i,a,s,u,f,l,h,m,b,_,w,S,C,k,x,P;return _regenerator().w(function(o){for(;;)switch(o.p=o.n){case 0:return o.p=0,o.n=1,p.keys();case 1:if(r=o.v,t||(se.isFulfilled?e&&(r=r.filter(function(r){return r<e})):e&&r.includes(e)?r=[e]:(r=[],H("Unexpected null key"))),r.length){o.n=2;break}return o.a(2);case 2:i=0;case 3:if(!(i<r.length/1e3)){o.n=23;break}a=r.slice(1e3*i,1e3*(i+1)),s=[],u=0;case 4:if(!(u<a.length)){o.n=7;break}return S=s,o.n=5,p.getItem(a[u]);case 5:S.push.call(S,o.v);case 6:++u,o.n=4;break;case 7:if(d=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),g){o.n=12;break}return o.n=8,y.getItem(v);case 8:if(h=o.v,!h){o.n=10;break}return C=JSON,o.n=9,z(h);case 9:f=C.parse.call(C,o.v),l=_slicedToArray(f,1),n=l[0];case 10:return k=y,x=v,o.n=11,K(JSON.stringify([n,d]));case 11:k.setItem.call(k,x,o.v);case 12:o.p=12,m=void 0,b=void 0,_=M[0]+"verify/v2",d&&!g&&(_+="?ltstime="+encodeURIComponent(d));try{m=T(_,{method:"POST",body:s.join(";"),keepalive:!0})}finally{!se.isFulfilled&&c&&ae()}return o.p=13,o.n=14,m;case 14:b=o.v;case 15:return o.p=15,se.isFulfilled||ae(),o.f(15);case 16:if(b.ok){o.n=17;break}throw new Error("verify failed. Status Code: "+b.status);case 17:w=0;case 18:if(!(w<a.length)){o.n=20;break}return o.n=19,p.removeItem(a[w]);case 19:++w,o.n=18;break;case 20:o.n=22;break;case 21:throw o.p=21,P=o.v,se.isFulfilled||ae(),W&&(W(P),W=null),P;case 22:++i,o.n=3;break;case 23:q&&q(),o.n=25;break;case 24:o.p=24,o.v;case 25:return o.a(2)}},o,null,[[13,,15,16],[12,21],[0,24]])}))),r.n=1,B;case 1:return r.a(2,r.v)}},r)}));return function(r,t){return e.apply(this,arguments)}}();return{i:(P=_asyncToGenerator(_regenerator().m(function fe(e){return _regenerator().w(function(s){for(;;)switch(s.n){case 0:return E=e.pd,r=e.v,j=r.split(".")[0],e.dt&&(N=e.dt),D=e.l||"",o="string"!=typeof e.os?JSON.stringify(e.os):e.os,"string"==typeof(i=e.fn)&&(i=i.substring(0,255)),e.ls&&e.ls.length&&1==(M=e.ls).length&&M.push(M[0]),a=!D||"200001"===D||D.startsWith("200001-"),u=e.sp,"string"==typeof(f=e.rmk)&&(f=f.substring(0,255)),e.cv&&(l=""+e.cv),e.lf&&(F=e.lf),e.lsu&&(n=g=e.lsu),e.feab&&(V=e.feab),G=e.updl,J=e.mnet,$=e.mxet,e.sutlcb&&(q=e.sutlcb),s.n=1,re();case 1:return s.n=2,te();case 2:return s.n=3,ne();case 3:return s.n=4,oe();case 4:return(!h||h.ltsErrorCode>=102&&h.ltsErrorCode<=120)&&ue(null,!0),s.a(2,{ar:t,cu:n})}},fe)})),function(e){return P.apply(this,arguments)}),ih:te,c:(x=_asyncToGenerator(_regenerator().m(function le(){var e,r,t,n,o,i;return _regenerator().w(function(a){for(;;)switch(a.n){case 0:if(!((e=new Date).getTime()<w+36e4)){a.n=1;break}return a.a(2);case 1:return r=e.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),a.n=2,J();case 2:return t=a.v,a.n=3,$();case 3:if(!((n=a.v)&&n<r)){a.n=6;break}return a.n=4,ne(!0);case 4:return a.n=5,oe();case 5:a.n=7;break;case 6:t&&t<r&&((o=new Date(e.getTime())).setMinutes(e.getMinutes()-6),i=o.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),d<i&&ne().then(function(){return oe()}));case 7:return a.a(2)}},le)})),function(){return x.apply(this,arguments)}),s:(k=_asyncToGenerator(_regenerator().m(function de(e,r,t,n){var o,i;return _regenerator().w(function(e){for(;;)switch(e.p=e.n){case 0:if(!r){e.n=12;break}if(e.p=1,!r.startsWith("{")||!r.endsWith("}")){e.n=3;break}return e.n=2,V(r);case 2:i=e.v,e.n=4;break;case 3:i=r;case 4:if(!(o=i)){e.n=6;break}return H("bs "+t),e.n=5,p.setItem(t,o);case 5:H("ss "+t),e.n=7;break;case 6:H("ept ecpt");case 7:e.n=9;break;case 8:e.p=8,e.v;case 9:if(!n){e.n=11;break}return H("bd "+t),e.n=10,ue(t,2==n);case 10:H("sd "+t);case 11:ce&&clearTimeout(ce),ce=setTimeout(_asyncToGenerator(_regenerator().m(function a(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,ue();case 1:return e.a(2)}},a)})),36e4),e.n=13;break;case 12:return e.n=13,ue(t);case 13:return e.a(2)}},de,null,[[1,8]])})),function(e,r,t,n){return k.apply(this,arguments)}),p:se,u:(C=_asyncToGenerator(_regenerator().m(function he(){return _regenerator().w(function(e){for(;;)switch(e.n){case 0:return e.n=1,re();case 1:return e.a(2,n)}},he)})),function(){return C.apply(this,arguments)}),caret:ie}}},Ot.Lib.Uri=It}();
(function (dynam, nil) {

	"use strict";
	var lib = dynam.Lib,
		win = window,
		_fetch_ver = 20230615;

	if (dynam._fetch_ver) {
		if (dynam._fetch_ver >= _fetch_ver) {
			return;
		}
	}
	dynam._fetch_ver = _fetch_ver;
	
	if(win.fetch) {
		return;
	}

	var bIE6_9 = Dynamsoft.navInfoSync.bIE && (parseInt(Dynamsoft.navInfoSync.strBrowserVersion) <= 9),
		bIE6_10 = Dynamsoft.navInfoSync.bIE && (parseInt(Dynamsoft.navInfoSync.strBrowserVersion) <= 10),
		each = lib.each,
		rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|widget)$/,

		STATE_READY = 1,
		STATE_OK = 2,
		STATE_ABORT = 3,

		OK_CODE = 200,
		NO_CONTENT_CODE = 204,
		MULTIPLE_CHOICES = 300,
		NOT_MODIFIED = 304,
		BAD_REQUEST = 400,
    UN_AUTH_REQUEST = 401,
		FORBIDDEN_REQUEST = 403,
		NOT_FOUND_CODE = 404,
		NO_CONTENT_CODE2 = 1223,
		SERVER_ERR = 500,
    ERR_NAME_NOT_RESOLVED = 12007,
    ERR_CANNOT_CONNECT = 12029,
    ERR_NO_RESPONSE = 2,

		_strOpenErr = 'open error: ',
		_strSendErr = 'send error: ',

		simulatedLocation = new lib.Uri(location.href),
		isLocal = simulatedLocation && rlocalProtocol.test(simulatedLocation.getScheme()),
		XDomainRequest_ = false,//bIE6_9 && win.XDomainRequest,

		createStandardXHR = function () {
			try {
				return new win.XMLHttpRequest();
			} catch (e) {
			}
			// return undefined;
		},

		createActiveXHR = function () {
			try {
				var http = false;
				// code for IE9,IE8,IE7,IE6,IE5
				each(['Msxml2.XMLHTTP.6.0',
					'Msxml2.XMLHTTP',
					'Microsoft.XMLHTTP',
					'Msxml2.XMLHTTP.3.0',
					'Msxml3.XMLHTTP'],
					function (item) {
						try {
              if(!http){
                http = new win.ActiveXObject(item);
                return false;
              }
						}
						catch (e) {
							lib.error('new xhr error: ' + e.message);
						}
					});
				return http;
			} catch (e) {
			}
			// return undefined;
		},

		supportCORS = (!isLocal && win.XMLHttpRequest) ? ('withCredentials' in (createStandardXHR() || [])) : false,

		//Create a xmlHttpRequest object
		_newXhr = win.ActiveXObject ? function (crossDomain) {

			if (bIE6_9)
				return createActiveXHR();

			if (!supportCORS && crossDomain && XDomainRequest_) {
				return new XDomainRequest_();
			}
			return !isLocal && createStandardXHR() || createActiveXHR();

		} : createStandardXHR,

		isInstanceOfXDomainRequest = function (xhr) {
			return XDomainRequest_ && (xhr instanceof XDomainRequest_);
		},

		rnoContent = /^(?:GET|HEAD)$/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		accepts = { 'xml': "application/xml, text/xml", 'html': "text/html", 'text': "text/plain", 'json': "application/json, text/javascript", "*": "*/*" },
		nilFun = nil,
		nativeFetch;
	
	// IE<=8 fixed
	if (bIE6_10) {
		nilFun = function(){};
	}

	function _io() { }

	lib.mix(_io.prototype, {

		url: false, //URL to be loaded
		onSuccess: false, //Function that should be called at success
		onError: false, //Function that should be called at error
		onComplete: false,
		method: "GET", //GET or POST	
		async: true, // async or sync
		xhrFields: false,
		mimeType: false,
		username: false,
		password: false,
		data: false,
		dataType: 'text', //Return type - could be 'blob', 'arraybuffer', 'text', 'xml', 'json', 'user-defined'(which is used for acquiring image data from service)
		headers: false,
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		beforeSend: false,
		afterSend: false,
		timeout: 0,		// seconds		default 0 means no timeout
		cache: true,
		crossDomain: false,
		retry: 0,

		setRequestHeader: function (name, value) {
			var self = this;
			self.headers[name] = value;
			return self;
		}, getAllResponseHeaders: function () {
			var self = this;
			return self.state === STATE_OK ? self.responseHeadersString : null;
		}, getNativeXhr: function () {
			var self = this;
			return self.nativeXhr;
		}, getResponseHeader: function (name) {
			var match, self = this, responseHeaders;
			name = name.toLowerCase();
			if (self.state === STATE_OK) {
				if (!(responseHeaders = self.responseHeaders)) {
					responseHeaders = self.responseHeaders = {};
					while ((match = rheaders.exec(self.responseHeadersString))) {
						responseHeaders[match[1].toLowerCase()] = match[2];
					}
				}
				match = responseHeaders[name];
			}
			return match === undefined ? null : match;
		}, overrideMimeType: function (type) {
			var self = this;
			if (!self.state) {
				self.mimeType = type;
			}
			return self;
		}, abort: function (statusText) {
			var self = this;
			statusText = statusText || "abort";

			self.state = STATE_ABORT;
			self.status = 0;
			self.statusText = statusText;

			if (self.nativeXhr) {
				self.nativeXhr.abort();
			}

			self._callback();
			return self;
		}, _ioReady: function (status, statusText) {
			var self = this, isSuccess = false;
			if (self.state === STATE_OK || self.state === STATE_ABORT) {
				return;
			}
			if (self.state === STATE_READY)
				self.state = STATE_OK;
			self.readyState = 4;

			if (status >= OK_CODE && status < MULTIPLE_CHOICES || status === NOT_MODIFIED) {
				if (status === NOT_MODIFIED) {
					statusText = "not modified";
					isSuccess = true;
				} else {
					statusText = "success";
					isSuccess = true;
				}
			} else {
				if (status < 0) {
					status = 0;
				}
			}

			try {
				if (status >= OK_CODE)
					self.handleResponseData();
			} catch (e) {
				lib.error(e.stack || e, "error");
				statusText = e.message || "parser error";
			}
			
			
			if (status < OK_CODE || !isSuccess) {
				if(self.retry > 0) {
					self.retry = self.retry - 1;
					setTimeout(function(){
						self.sendInternal();
					}, 200);
					return;
				}
			}

			self.status = status;
			self.statusText = statusText;
			self._callback(isSuccess);
		},
		_callback: function (isSuccess) {
			var self = this, timeoutTimer = self.timeoutTimer;
			if (timeoutTimer) {
				clearTimeout(timeoutTimer);
				self.timeoutTimer = 0;
			}

			each([isSuccess ? self.onSuccess : self.onError, self.onComplete], function (func) {
				if (lib.isFunction(func)) {
					func.apply(self.context, [self.responseData, self.statusText, self]);
				}
			});

			self.responseData = null;
		},
		handleResponseData: function () {
			var self = this, result, dataType = self.dataType, nativeXhr = self.nativeXhr;

			self.responseText = result = nativeXhr.responseText || '';
			try {
				var xml = nativeXhr.responseXML;
				if (xml && xml.documentElement /*#4958#*/) {
					self.responseXML = xml;
				}
			} catch (e) { }

			self.responseData = result;
		},

		sendInternal: function (opt) {
			//The XMLHttpRequest object is recreated at every call - to defeat Cache problem in IE
			var self = this, c, i,
				method, url, dataType, contentType,
				nativeXhr, xhrFields, mimeType, requestHeaders,
				hasContent, sendContent;

			c = self._setup(opt);

			method = c.method;
			if(lib.isString(method)) {
				method = method.toUpperCase();
			}
			
			contentType = c.contentType;
			
			url = c.url;
			dataType = c.dataType;
			mimeType = c.mimeType;

			if (!lib.isString(url)) return;

			self.nativeXhr = nativeXhr = _newXhr(c.crossDomain);
			if (!nativeXhr) return;

			try {
				self.state = STATE_READY;

				if (c.username) {
					nativeXhr.open(method, url, c.async, c.username, c.password);
				} else {
					nativeXhr.open(method, url, c.async);
				}

				if ((c.async || Dynamsoft.navInfoSync.bIE) && dataType && dataType != 'user-defined' && ('responseType' in nativeXhr)) {
					try {
						nativeXhr.responseType = dataType;
					} catch (e) { }
				}

			} catch (ex) {
				if (self.state < 2) {
					lib.error(ex.stack || ex, "error");
					self._ioReady(-1, _strOpenErr +
						(lib.isNumber(ex.number) ? '(' + ex.number + ')' : '') +
						(ex.message || ''));
				} else {
					lib.error(ex);
				}

				return;
			}

			xhrFields = c.xhrFields || {};
			if ('withCredentials' in xhrFields) {
				if (!supportCORS) {
					delete xhrFields.withCredentials;
				}
			}

			each(xhrFields, function(val, key){
				try {
					nativeXhr[key] = val;
				} catch (e) {
					lib.error(e);
				}
			});

			// Override mime type if supported
			if (mimeType && nativeXhr.overrideMimeType) {
				nativeXhr.overrideMimeType(mimeType);
			}

			requestHeaders = c.headers || {};
			var xRequestHeader = requestHeaders['X-Requested-With'];
			if (xRequestHeader === false) {
				delete requestHeaders['X-Requested-With'];
			}

			// ie<10 XDomainRequest does not support setRequestHeader
			if ('setRequestHeader' in nativeXhr) {

				if (contentType) {
					nativeXhr.setRequestHeader("Content-Type", c.contentType);
				}

				nativeXhr.setRequestHeader("Accept", dataType && accepts[dataType] ? accepts[dataType] + (dataType === "*" ? "" : ", */*; q=0.01") : accepts["*"]);

				
				each(requestHeaders, function(val, key){
					nativeXhr.setRequestHeader(key, val);
				});
			}
			
			if(!c.cache)
			{
				nativeXhr.setRequestHeader('If-Modified-Since', '0');
				nativeXhr.setRequestHeader('Cache-Control', 'no-cache');
			}


			hasContent = !rnoContent.test(c.method);
			sendContent = hasContent && c.data || null;

			if (hasContent && bIE6_9) {
				sendContent = c.data;
			}

			// timeout
			if (c.async && c.timeout > 0) {
				if(c.timeout<300)
					c.timeout=300;
				self.timeoutTimer = setTimeout(function () {
					self.abort("timeout");
				}, c.timeout);
			}

			try {
				self.state = STATE_READY;
				if (lib.isFunction(self.beforeSend)) {
					var r = self.beforeSend(nativeXhr, self);
					if (r === false) {
						self.abort("cancel");
						return;
					}
				}
				nativeXhr.send(sendContent);
				sendContent = null;
				c.data = null;
				if (lib.isFunction(self.afterSend))
					self.afterSend(self);
			} catch (e) {
				if (self.state < 2) {
					lib.error(e.stack || e, "error");
					self._ioReady(-1, _strSendErr + (e.message || ''));
				} else {
					lib.error(e);
				}
			}

			if (!c.async || nativeXhr.readyState === 4) {
				self._xhrCallback();
			} else {
				if (isInstanceOfXDomainRequest(nativeXhr)) {
					nativeXhr.onload = function () {
						nativeXhr.readyState = 4;
						nativeXhr.status = OK_CODE;
						self._xhrCallback();
					};
					nativeXhr.onerror = function () {
						nativeXhr.readyState = 4;
						nativeXhr.status = SERVER_ERR;
						self._xhrCallback();
					};
				} else {
					nativeXhr.onreadystatechange = function () {
						self._xhrCallback();
					};
				}
			}
		},

		_xhrCallback: function (evt, abort) { //Call a function when the state changes.
			var self = this, nativeXhr = self.nativeXhr;

			try {
				if (nativeXhr.readyState === 4 || abort) { //Ready State will be 4 when the document is loaded.
					if (isInstanceOfXDomainRequest(nativeXhr)) {
						nativeXhr.onerror = nilFun;
						nativeXhr.onload = nilFun;
					} else {
						nativeXhr.onreadystatechange = nilFun;
					}

					if (abort) {
						if (nativeXhr.readyState !== 4) {
							nativeXhr.abort();
						}
					} else {

						if (!isInstanceOfXDomainRequest(nativeXhr)) {
							self.responseHeadersString = nativeXhr.getAllResponseHeaders();
						}

						var status = nativeXhr.status, statusText;
						try {
							statusText = nativeXhr.statusText;
						} catch (e) {
							lib.error("xhr statusText error: ");
							lib.error(e);
							statusText = "";
						}

						self._ioReady(status, statusText);
					}
				}

			} catch (e) {
				lib.error(e.stack || e, "error");

				nativeXhr.onreadystatechange = nilFun;
				if (!abort) {
					self._ioReady(-1, e.message || "process error");
				}
			}
		},

		_setup: function (opt) {
			var self = this, dataType, i, requestHeaders, url, uri;

			if(opt) {
				self.context = opt.context;
				delete opt.context;

				if (opt instanceof _io) {
					opt = opt.config;
				}

				self.config = opt;

				url = opt.url;

				if (lib.startsWith(url, 'http://') || lib.startsWith(url, 'https://')) {
					uri = new lib.Uri(url);
				} else {
					if (lib.startsWith(url, '//')) {
						opt.url = url = 'http:' + url;
					}

					uri = simulatedLocation.resolve(url);
				}

				if (!opt.dataType)
					dataType = 'text'; //Default return type is 'text'
				else
					dataType = opt.dataType.toLowerCase();
				opt.dataType = dataType;

				if (!opt.method)
					opt.method = 'GET'; //Default method is GET
				else
					opt.method = opt.method.toUpperCase();

				if (!("crossDomain" in opt)) {
					opt.crossDomain = !uri.isSameOriginAs(simulatedLocation);
				}

				requestHeaders = opt.headers;
				for (i in requestHeaders) {
					if (lib.isUndefined(requestHeaders[i]))
						delete requestHeaders[i];
				}
				lib.mix(self, opt);
			}
			
			self.state = STATE_READY;
			return self;
		}
	});

	// Chrome or Firefox
	if(!nativeFetch) {

		// fetch
		win.fetch = function(url, options){

			// options
			// {
			//    mode:"cors",			  // mode: cors / no-cors / same-origin
			//    method:"post",
			//    body:'',
			//    headers:{
			//      // set send data type for body
			//    	'content-type': 'application/json'
			// 	  },
			//    dataType: 'blob',       // Return type - could be 'blob', 'arraybuffer', 'text', 'json'
			//                            // NOTE: IE<=9 'blob', 'arraybuffer' -> 'user-defined'
			
			//    cache:'reload',         // (not supported) http cache: default / no-store / reload / no-cache / force-cache / only-if-cached
			//    redirect: 'manual',     // (not supported) redirect: follow / error / manual
			//    referrer: 'client',     // (not supported) no-referrer / client / URL (string)
			//    credentials:'include'   // (not supported) if carry cookie: omit/ same-origin / include
			// };

			return new Dynamsoft.Lib.Promise(function(resolutionFunc,rejectionFunc){
				
				var get_ret_obj = function(_bOK, _data, _reason, _io){

          return {
            'ok': _bOK,
            'text': function() {return Dynamsoft.Lib.Promise.resolve(_data);},
            'json': function() {
              var _json;
              if(Dynamsoft.Lib.isString(_data) && _data != '') {
                try{
                  _json = Dynamsoft.Lib.parse(_data);
                }catch(_ex){
                  return Dynamsoft.Lib.Promise.reject({
                    code: -2443,
                    message: 'License server response data error.'
                  });
                }
              } else {
                _json = {};
              }
              return Dynamsoft.Lib.Promise.resolve(_json);
            }
          };

        }, sFun = function(_data, _reason, _io){
					
					resolutionFunc(get_ret_obj(true, _data, _reason, _io));
					
				}, fFun = function(_data, _reason, _io){
          var reason = _reason, status = _io.status;

					if(status == NOT_FOUND_CODE || status == BAD_REQUEST || status == FORBIDDEN_REQUEST || status == UN_AUTH_REQUEST ) {

						resolutionFunc(get_ret_obj(false, _data, _reason, _io));

						return;
					} else if(status == ERR_NAME_NOT_RESOLVED || status == ERR_CANNOT_CONNECT || status == ERR_NO_RESPONSE) {
            reason = 'NetworkError';
          } else {
            var isStr = Dynamsoft.Lib.isString(reason);
            if(!isStr || isStr && reason == '') {
              reason = 'NetworkError';
            }
          }
					
					rejectionFunc({
            'ok': false,
            'code': status,
            'message': reason,
            'httpCode': status, 
            'errorString': reason
          });
				}, cfg = {
					
					url: url,
					onSuccess: sFun,
					onError: fFun,
					contentType: 'text/plain;charset=UTF-8',
					dataType: 'text'
					
				}, bContentTypeInHeaders = false;
				
				if(options) {

					if(options.method) {
						cfg.method = options.method;
					}
					
					if(options.body) {
						cfg.data = options.body;
					}
					
					if(options.headers) {
            if (!cfg.headers) {
              cfg.headers = {};
            }

						each(options.headers, function(val, key){
							if(key.toLowerCase() == 'content-type') {
								bContentTypeInHeaders = true;
							}

							cfg.headers[key] = val;
						});

					}
					
					if(options.dataType) {
						cfg.dataType = options.dataType;
					}

					if(options.contentType) {
						cfg.contentType = options.contentType;
					}
				}
				
				if(bContentTypeInHeaders) {
					cfg.contentType = false;
				}
				
				if(cfg.dataType == 'blob' && bIE6_9) {
					cfg.mimeType = 'text/plain; charset=x-user-defined';
				}
				
				if (!cfg || !lib.isString(cfg.url)) {
					lib.log('the url is error.');
					return; //Return if a url is not provided
				}

				var self = new _io();
				self.sendInternal(cfg);
			});
		};
	}

})(Dynamsoft);
