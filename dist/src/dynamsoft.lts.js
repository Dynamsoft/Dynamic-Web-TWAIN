/**
* Dynamsoft JavaScript Library
* @product Dynamsoft WebTWAIN
* @website http://www.dynamsoft.com
* @preserve Copyright 2021, Dynamsoft Corporation
* @author Dynamsoft
* @version 17.1.0 70916
* @fileoverview Dynamsoft JavaScript Library for WebTWAIN
*/
(function(D){D.Lib = D.Lib || {};
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype['catch']=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!a||b)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a['catch'](c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);b(c||!a||parseInt(a[1],10)>=43)}})['catch'](function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d})['catch'](function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})})['catch'](c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady()['catch'](b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c['continue']()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})})['catch'](e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g['delete'](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b['continue']()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})})['catch'](g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()})['catch'](function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)['catch'](function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(q,b,c){var d=new va(function(b,c){try{var d=q._driver,e=new Error("Custom driver not compliant");if(!q._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||q[j])&&"function"!=typeof q[j])return void c(e)}(function(){for(var b=function(z){return function(){var b=new Error("Method "+z+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];q[e]||(q[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=q,ab[d]=c,b()};"_support"in q?q._support&&"function"==typeof q._support?q._support().then(k,c):k(!!q._support):k(!0)}catch(z){c(z)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e)['catch'](b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet['catch'](function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})})['catch'](function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
D.Lib.localforage = localforage;})(Dynamsoft);(function (dynam, nil) {

	"use strict";
	var lib = dynam.Lib,
		win = lib.win,
		_fetch_ver = 20210225;
		
	if (dynam._fetch_ver) {
		if (dynam._fetch_ver >= _fetch_ver) {
			return;
		}
	}
	dynam._fetch_ver = _fetch_ver;
	
	if(win.fetch) {
		return;
	}

	var nav = navigator,
    navInfo = lib.getNavInfoByUserAgent(nav.userAgent, nav.platform),
		bIE6_9 = navInfo.bIE && (parseInt(navInfo.strBrowserVersion) <= 9),
		bIE6_10 = navInfo.bIE && (parseInt(navInfo.strBrowserVersion) <= 10),
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
							return (http = new win.ActiveXObject(item));
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

				if ((c.async || navInfo.bIE) && dataType && dataType != 'user-defined' && ('responseType' in nativeXhr)) {
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
Dynamsoft.LTS={};Dynamsoft.LTS._=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=91)}([function(t,e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,e,n){"use strict";var r,o=n(83),i=n(9),a=n(0),u=n(6),c=n(11),f=n(33),s=n(10),l=n(14),p=n(8).f,d=n(39),h=n(28),y=n(3),v=n(45),g=a.Int8Array,x=g&&g.prototype,m=a.Uint8ClampedArray,b=m&&m.prototype,w=g&&d(g),S=x&&d(x),T=Object.prototype,A=T.isPrototypeOf,E=y("toStringTag"),k=v("TYPED_ARRAY_TAG"),O=o&&!!h&&"Opera"!==f(a.opera),I=!1,_={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},M={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!u(t))return!1;var e=f(t);return c(_,e)||c(M,e)};for(r in _)a[r]||(O=!1);if((!O||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},O))for(r in _)a[r]&&h(a[r],w);if((!O||!S||S===T)&&(S=w.prototype,O))for(r in _)a[r]&&h(a[r].prototype,S);if(O&&d(b)!==S&&h(b,S),i&&!c(S,E))for(r in I=!0,p(S,E,{get:function(){return u(this)?this[k]:undefined}}),_)a[r]&&s(a[r],k,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:I&&k,aTypedArray:function(t){if(j(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(h){if(A.call(w,t))return t}else for(var e in _)if(c(_,r)){var n=a[e];if(n&&(t===n||A.call(n,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,n){if(i){if(n)for(var r in _){var o=a[r];o&&c(o.prototype,t)&&delete o.prototype[t]}S[t]&&!n||l(S,t,n?e:O&&x[t]||e)}},exportTypedArrayStaticMethod:function(t,e,n){var r,o;if(i){if(h){if(n)for(r in _)(o=a[r])&&c(o,t)&&delete o[t];if(w[t]&&!n)return;try{return l(w,t,n?e:O&&g[t]||e)}catch(u){}}for(r in _)!(o=a[r])||o[t]&&!n||l(o,t,e)}},isView:function(t){if(!u(t))return!1;var e=f(t);return"DataView"===e||c(_,e)||c(M,e)},isTypedArray:j,TypedArray:w,TypedArrayPrototype:S}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(0),o=n(42),i=n(11),a=n(45),u=n(64),c=n(98),f=o("wks"),s=r.Symbol,l=c?s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)&&(u||"string"==typeof f[t])||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,e,n){var r=n(16),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(0),o=n(22).f,i=n(10),a=n(14),u=n(44),c=n(103),f=n(50);t.exports=function(t,e){var n,s,l,p,d,h=t.target,y=t.global,v=t.stat;if(n=y?r:v?r[h]||u(h,{}):(r[h]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(d=o(n,s))&&d.value:n[s],!f(y?s:h+(v?".":"#")+s,t.forced)&&l!==undefined){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,s,p,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(9),o=n(63),i=n(7),a=n(29),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(9),o=n(8),i=n(24);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12),o={}.hasOwnProperty;t.exports=function(t,e){return o.call(r(t),e)}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(t==undefined)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=n(10),i=n(11),a=n(44),u=n(46),c=n(21),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c,f=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(c=s(n)).source||(c.source=l.join("string"==typeof e?e:""))),t!==r?(f?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,e,n){var r=n(38),o=n(34),i=n(12),a=n(4),u=n(87),c=[].push,f=function(t){var e=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=7==t,d=5==t||l;return function(h,y,v,g){for(var x,m,b=i(h),w=o(b),S=r(y,v,3),T=a(w.length),A=0,E=g||u,k=e?E(h,T):n||p?E(h,0):undefined;T>A;A++)if((d||A in w)&&(m=S(x=w[A],A,b),t))if(e)k[A]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return A;case 2:c.call(k,x)}else switch(t){case 4:return!1;case 7:c.call(k,x)}return l?-1:f||s?s:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterOut:f(7)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(34),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(26),i=n(3)("species");t.exports=function(t,e){var n,a=r(t).constructor;return a===undefined||(n=r(a)[i])==undefined?e:o(n)}},function(t,e){t.exports=!1},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r,o,i,a=n(99),u=n(0),c=n(6),f=n(10),s=n(11),l=n(43),p=n(47),d=n(48),h=u.WeakMap;if(a){var y=l.state||(l.state=new h),v=y.get,g=y.has,x=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError("Object already initialized");return e.facade=t,x.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var m=p("state");d[m]=!0,r=function(t,e){if(s(t,m))throw new TypeError("Object already initialized");return e.facade=t,f(t,m,e),e},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(9),o=n(102),i=n(24),a=n(17),u=n(29),c=n(11),f=n(63),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=a(t),e=u(e,!0),f)try{return s(t,e)}catch(n){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(16),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(97),o=n(0),i=function(t){return"function"==typeof t?t:undefined};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){t.exports={}},function(t,e,n){var r=n(7),o=n(119);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():undefined)},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(20),o=n(0);t.exports="process"==r(o.process)},function(t,e,n){var r,o,i=n(0),a=n(32),u=i.process,c=u&&u.versions,f=c&&c.v8;f?o=(r=f.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(25);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(41),o=n(20),i=n(3)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return t===undefined?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(2),o=n(20),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(65),o=n(49).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(17),o=n(4),i=n(23),a=function(t){return function(e,n,a){var u,c=r(e),f=o(c.length),s=i(a,f);if(t&&n!=n){for(;f>s;)if((u=c[s++])!=u)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(8).f,o=n(11),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(26);t.exports=function(t,e,n){if(r(t),e===undefined)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(12),i=n(47),a=n(125),u=i("IE_PROTO"),c=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(0),o=n(6),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r={};r[n(3)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(19),o=n(43);(t.exports=function(t,e){return o[t]||(o[t]=e!==undefined?e:{})})("versions",[]).push({version:"3.11.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(0),o=n(44),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(t===undefined?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(43),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(42),o=n(45),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==f||n!=c&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(25),o=n(8),i=n(3),a=n(9),u=i("species");t.exports=function(t){var e=r(t),n=o.f;a&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r,o,i=n(53),a=n(55),u=n(42),c=RegExp.prototype.exec,f=u("native-string-replace",String.prototype.replace),s=c,l=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=/()??/.exec("")[1]!==undefined;(l||d||p)&&(s=function(t){var e,n,r,o,a=this,u=p&&a.sticky,s=i.call(a),h=a.source,y=0,v=t;return u&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),v=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,y++),n=new RegExp("^(?:"+h+")",s)),d&&(n=new RegExp("^"+h+"$(?!\\s)",s)),l&&(e=a.lastIndex),r=c.call(u?n:a,v),u?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:l&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),d&&r&&r.length>1&&f.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)arguments[o]===undefined&&(r[o]=undefined)})),r}),t.exports=s},function(t,e,n){"use strict";var r=n(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r=n(6),o=n(20),i=n(3)("match");t.exports=function(t){var e;return r(t)&&((e=t[i])!==undefined?!!e:"RegExp"==o(t))}},function(t,e,n){"use strict";var r=n(17),o=n(80),i=n(27),a=n(21),u=n(123),c=a.set,f=a.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=undefined,{value:undefined,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r,o=n(7),i=n(121),a=n(49),u=n(48),c=n(71),f=n(40),s=n(47),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},h=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,e;h=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=f("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete h.prototype[a[n]];return h()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=h(),e===undefined?n:i(n,e)}},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(2),o=n(3),i=n(31),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(56);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(o){}}return!1}},function(t,e,n){var r=n(9),o=n(2),i=n(40);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(30),o=n(31),i=n(2);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},function(t,e,n){var r=n(11),o=n(17),i=n(36).indexOf,a=n(48);t.exports=function(t,e){var n,u=o(t),c=0,f=[];for(n in u)!r(a,n)&&r(u,n)&&f.push(n);for(;e.length>c;)r(u,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(14);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(3),o=n(27),i=r("iterator"),a=Array.prototype;t.exports=function(t){return t!==undefined&&(o.Array===t||a[i]===t)}},function(t,e,n){var r=n(33),o=n(27),i=n(3)("iterator");t.exports=function(t){if(t!=undefined)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(3)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},"return":function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(u){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(u){}return n}},function(t,e,n){var r,o,i,a=n(0),u=n(2),c=n(38),f=n(71),s=n(40),l=n(72),p=n(30),d=a.location,h=a.setImmediate,y=a.clearImmediate,v=a.process,g=a.MessageChannel,x=a.Dispatch,m=0,b={},w=function(t){if(b.hasOwnProperty(t)){var e=b[t];delete b[t],e()}},S=function(t){return function(){w(t)}},T=function(t){w(t.data)},A=function(t){a.postMessage(t+"",d.protocol+"//"+d.host)};h&&y||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return b[++m]=function(){("function"==typeof t?t:Function(t)).apply(undefined,e)},r(m),m},y=function(t){delete b[t]},p?r=function(t){v.nextTick(S(t))}:x&&x.now?r=function(t){x.now(S(t))}:g&&!l?(i=(o=new g).port2,o.port1.onmessage=T,r=c(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts&&d&&"file:"!==d.protocol&&!u(A)?(r=A,a.addEventListener("message",T,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}),t.exports={set:h,clear:y}},function(t,e,n){var r=n(25);t.exports=r("document","documentElement")},function(t,e,n){var r=n(32);t.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){"use strict";var r=n(26),o=function(t){var e,n;this.promise=new t((function(t,r){if(e!==undefined||n!==undefined)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r=n(5),o=n(54);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";n(74);var r=n(14),o=n(2),i=n(3),a=n(10),u=i("species"),c=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),s=i("replace"),l=!!/./[s]&&""===/./[s]("a","$0"),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,s){var d=i(t),h=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),y=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!y||"replace"===t&&(!c||!f||l)||"split"===t&&!p){var v=/./[d],g=n(d,""[t],(function(t,e,n,r,o){return e.exec===RegExp.prototype.exec?h&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:l}),x=g[0],m=g[1];r(String.prototype,t,x),r(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}s&&a(RegExp.prototype[d],"sham",!0)}},function(t,e,n){"use strict";var r=n(116).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(20),o=n(54);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(6),o=n(28);t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(3),o=n(58),i=n(8),a=r("unscopables"),u=Array.prototype;u[a]==undefined&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},function(t,e,n){"use strict";var r,o,i,a=n(2),u=n(39),c=n(10),f=n(11),s=n(3),l=n(19),p=s("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(r=o):d=!0);var h=r==undefined||a((function(){var t={};return r[p].call(t)!==t}));h&&(r={}),l&&!h||f(r,p)||c(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(t,e,n){"use strict";var r=n(0),o=n(9),i=n(83),a=n(10),u=n(66),c=n(2),f=n(52),s=n(16),l=n(4),p=n(84),d=n(127),h=n(39),y=n(28),v=n(35).f,g=n(8).f,x=n(85),m=n(37),b=n(21),w=b.get,S=b.set,T=r.ArrayBuffer,A=T,E=r.DataView,k=E&&E.prototype,O=Object.prototype,I=r.RangeError,_=d.pack,M=d.unpack,j=function(t){return[255&t]},L=function(t){return[255&t,t>>8&255]},R=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},P=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},C=function(t){return _(t,23,4)},U=function(t){return _(t,52,8)},N=function(t,e){g(t.prototype,e,{get:function(){return w(this)[e]}})},F=function(t,e,n,r){var o=p(n),i=w(t);if(o+e>i.byteLength)throw I("Wrong index");var a=w(i.buffer).bytes,u=o+i.byteOffset,c=a.slice(u,u+e);return r?c:c.reverse()},D=function(t,e,n,r,o,i){var a=p(n),u=w(t);if(a+e>u.byteLength)throw I("Wrong index");for(var c=w(u.buffer).bytes,f=a+u.byteOffset,s=r(+o),l=0;l<e;l++)c[f+l]=s[i?l:e-l-1]};if(i){if(!c((function(){T(1)}))||!c((function(){new T(-1)}))||c((function(){return new T,new T(1.5),new T(NaN),"ArrayBuffer"!=T.name}))){for(var B,W=(A=function(t){return f(this,A),new T(p(t))}).prototype=T.prototype,V=v(T),G=0;V.length>G;)(B=V[G++])in A||a(A,B,T[B]);W.constructor=A}y&&h(k)!==O&&y(k,O);var Y=new E(new A(2)),$=k.setInt8;Y.setInt8(0,2147483648),Y.setInt8(1,2147483649),!Y.getInt8(0)&&Y.getInt8(1)||u(k,{setInt8:function(t,e){$.call(this,t,e<<24>>24)},setUint8:function(t,e){$.call(this,t,e<<24>>24)}},{unsafe:!0})}else A=function(t){f(this,A,"ArrayBuffer");var e=p(t);S(this,{bytes:x.call(new Array(e),0),byteLength:e}),o||(this.byteLength=e)},E=function(t,e,n){f(this,E,"DataView"),f(t,A,"DataView");var r=w(t).byteLength,i=s(e);if(i<0||i>r)throw I("Wrong offset");if(i+(n=n===undefined?r-i:l(n))>r)throw I("Wrong length");S(this,{buffer:t,byteLength:n,byteOffset:i}),o||(this.buffer=t,this.byteLength=n,this.byteOffset=i)},o&&(N(A,"byteLength"),N(E,"buffer"),N(E,"byteLength"),N(E,"byteOffset")),u(E.prototype,{getInt8:function(t){return F(this,1,t)[0]<<24>>24},getUint8:function(t){return F(this,1,t)[0]},getInt16:function(t){var e=F(this,2,t,arguments.length>1?arguments[1]:undefined);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=F(this,2,t,arguments.length>1?arguments[1]:undefined);return e[1]<<8|e[0]},getInt32:function(t){return P(F(this,4,t,arguments.length>1?arguments[1]:undefined))},getUint32:function(t){return P(F(this,4,t,arguments.length>1?arguments[1]:undefined))>>>0},getFloat32:function(t){return M(F(this,4,t,arguments.length>1?arguments[1]:undefined),23)},getFloat64:function(t){return M(F(this,8,t,arguments.length>1?arguments[1]:undefined),52)},setInt8:function(t,e){D(this,1,t,j,e)},setUint8:function(t,e){D(this,1,t,j,e)},setInt16:function(t,e){D(this,2,t,L,e,arguments.length>2?arguments[2]:undefined)},setUint16:function(t,e){D(this,2,t,L,e,arguments.length>2?arguments[2]:undefined)},setInt32:function(t,e){D(this,4,t,R,e,arguments.length>2?arguments[2]:undefined)},setUint32:function(t,e){D(this,4,t,R,e,arguments.length>2?arguments[2]:undefined)},setFloat32:function(t,e){D(this,4,t,C,e,arguments.length>2?arguments[2]:undefined)},setFloat64:function(t,e){D(this,8,t,U,e,arguments.length>2?arguments[2]:undefined)}});m(A,"ArrayBuffer"),m(E,"DataView"),t.exports={ArrayBuffer:A,DataView:E}},function(t,e){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,e,n){var r=n(16),o=n(4);t.exports=function(t){if(t===undefined)return 0;var e=r(t),n=o(e);if(e!==n)throw RangeError("Wrong length or index");return n}},function(t,e,n){"use strict";var r=n(12),o=n(23),i=n(4);t.exports=function(t){for(var e=r(this),n=i(e.length),a=arguments.length,u=o(a>1?arguments[1]:undefined,n),c=a>2?arguments[2]:undefined,f=c===undefined?n:o(c,n);f>u;)e[u++]=t;return e}},function(t,e,n){var r=n(131);t.exports=function(t,e){var n=r(t);if(n%e)throw RangeError("Wrong offset");return n}},function(t,e,n){var r=n(6),o=n(59),i=n(3)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=undefined):n=undefined),new(n===undefined?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(26),o=n(12),i=n(34),a=n(4),u=function(t){return function(e,n,u,c){r(n);var f=o(e),s=i(f),l=a(f.length),p=t?l-1:0,d=t?-1:1;if(u<2)for(;;){if(p in s){c=s[p],p+=d;break}if(p+=d,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=d)p in s&&(c=n(c,s[p],p,f));return c}};t.exports={left:u(!1),right:u(!0)}},function(t,e,n){"use strict";var r=n(29),o=n(8),i=n(24);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e){t.exports="\t\n\x0B\f\r                　\u2028\u2029\ufeff"},function(t,e,n){"use strict";var r=n(92),o=r(n(93));n(95),n(96),n(101),n(114),n(74),n(115),n(118),n(120),n(57),n(126),n(128),n(133),n(135),n(136),n(137),n(139),n(140),n(141),n(142),n(143),n(144),n(145),n(146),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(163),n(164),n(167),n(168),n(169),n(170),n(171),n(172);var i=r(n(173)),a=r(n(179)),u=r(n(180)),c=r(n(181));e.createLtsInstance=function(t){var e,r,f,s,l,p,d,h,y,v,g,x,m,b,w,S,T,A,E,k,O,I,_,M,j,L=!!("object"==("undefined"==typeof global?"undefined":(0,c["default"])(global))&&global.process&&global.process.release&&global.process.release.name),R=t.dwt?Dynamsoft.Lib.Promise:self.Promise,P=t.btoa||(L?global.btoa||function(t){return Buffer.from(t,"binary").toString("base64")}:self.btoa),C=t.atob||(L?global.atob||function(t){return Buffer.from(t,"base64").toString("binary")}:self.atob),U=t.product,N=["https://mlts.dynamsoft.com/","https://slts.dynamsoft.com/"],F=!1,D=R.resolve(),B=t.lf,W=t.log||function(){},V=t.dwt?function(e){try{t.debugLog&&t.debugLog(e)}catch(n){}}:t.debugLog||function(){},G=t.fol,Y=t.sutlcb;Date.prototype.kUtilFormat=function(t){var e={"M+":this.getUTCMonth()+1,"d+":this.getUTCDate(),"H+":this.getUTCHours(),"h+":this.getUTCHours()%12||12,"m+":this.getUTCMinutes(),"s+":this.getUTCSeconds(),"q+":Math.floor((this.getUTCMonth()+3)/3),"S+":this.getUTCMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getUTCFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("000"+e[n]).substr(("000"+e[n]).length-RegExp.$1.length)));return t};var $,H,J,z=function(t){return t.join("")},K={a:[80,88,27,82,145,164,199,211],b:[187,87,89,128,150,44,190,213],c:[89,51,74,53,99,72,82,118],d:[99,181,118,158,215,103,76,117],e:[99,51,86,105,100,71,120,108],f:[97,87,49,119,98,51,74,48,83,50,86,53],g:[81,85,86,84,76,85,100,68,84,81,32,32],h:[90,87,53,106,99,110,108,119,100,65,32,32],i:[90,71,86,106,99,110,108,119,100,65,32,32],j:[97,88,89,32],k:[29,83,122,137,5,180,157,114],l:[100,71,70,110,84,71,86,117,90,51,82,111]},Z=function(){return self[z(K.c)][z(K.e)][z(K.f)]("raw",new Uint8Array(K.a.concat(K.b,K.d,K.k)),z(K.g),!0,[z(K.h),z(K.i)])},q=t.fdaa||function(){var t=(0,u["default"])(o["default"].mark((function e(t){var n,r,i,u,c,f,s;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(self[z(K.c)]&&self[z(K.c)][z(K.e)]&&self[z(K.c)][z(K.e)][z(K.f)])){e.next=14;break}for(r=C(t),i=new Uint8Array(r.length),u=0;u<r.length;++u)i[u]=r.charCodeAt(u);if(c=i.subarray(0,12),f=i.subarray(c.length),j){e.next=10;break}return e.next=9,Z();case 9:j=e.sent;case 10:return e.next=12,self[z(K.c)][z(K.e)][z(K.i)]((n={name:z(K.g)},(0,a["default"])(n,z(K.j),c),(0,a["default"])(n,z(K.l),128),n),j,f);case 12:return s=e.sent,e.abrupt("return",String.fromCharCode.apply(null,new Uint8Array(s)));case 14:case"end":return e.stop()}}),e)})));return function(e){return t.apply(this,arguments)}}(),X=t.feab||function(){var t=(0,u["default"])(o["default"].mark((function e(t){var n,r,i,u,c,f,s;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(self[z(K.c)]&&self[z(K.c)][z(K.e)]&&self[z(K.c)][z(K.e)][z(K.f)])){e.next=16;break}for(r=new Uint8Array(t.length),i=0;i<t.length;++i)r[i]=t.charCodeAt(i);if(u=self.crypto.getRandomValues(new Uint8Array(12)),j){e.next=8;break}return e.next=7,Z();case 7:j=e.sent;case 8:return e.next=10,self[z(K.c)][z(K.e)][z(K.h)]((n={name:z(K.g)},(0,a["default"])(n,z(K.j),u),(0,a["default"])(n,z(K.l),128),n),j,r);case 10:return c=e.sent,f=new Uint8Array(c),(s=new Uint8Array(u.length+f.length)).set(u),s.set(f,u.length),e.abrupt("return",P(String.fromCharCode.apply(null,s)));case 16:case"end":return e.stop()}}),e)})));return function(e){return t.apply(this,arguments)}}(),Q=function(t){return C(C(t.replace(/\n/g,"+").replace(/\s/g,"=")).substring(1))},tt=function(t){return P(String.fromCharCode(97+25*Math.random())+P(t)).replace(/\+/g,"\n").replace(/=/g," ")},et=function(){if($)return $;if(self.crypto){var t=new Uint8Array(36);self.crypto.getRandomValues(t);for(var e="",n=0;n<36;++n){var r=t[n]%36;e+=r<10?r:String.fromCharCode(r+87)}return e}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},nt="Failed to connect to the License Tracking Server. The cached license has expired. Please get connected to the network as soon as possible or contact the site administrator for more information.",rt="Failed to connect to the License Tracking Server: network timed out. Check your Internet connection or [contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.",ot="Failed to connect to the License Tracking Server: network timed out. Check your Internet connection or contact the site administrator for more information.",it="Failed to connect to the License Tracking Server: network connection error. Check your Internet connection or [contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.",at="Failed to connect to the License Tracking Server: network connection error. Check your Internet connection or contact the site administrator for more information.",ut="Your system date and time appear to have been changed, causing the license to fail. Please correct the system data and time and try again.",ct=function(){var t=(0,u["default"])(o["default"].mark((function n(t){return o["default"].wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.bd,r=t.version,f=r.split(".")[0],t.dt&&(d=t.dt),h=t.dm,s=t.pk,l=t.og,v=t.browserInfo,g=t.deviceFriendlyName,t.ls&&t.ls.length&&1==(N=t.ls).length&&N.push(N[0]),x=t.sp,m=t.lm,b=t.cw,t.lf&&(B=t.lf),t.lsu&&(y=$=t.lsu),t.fdaa&&(q=t.fdaa),t.feab&&(X=t.feab),I=t.updateLicense,_=t.getMinExpireTime,M=t.getMaxExpireTime,t.sutlcb&&(Y=t.sutlcb),n.next=23,ft();case 23:return n.next=25,st();case 25:return n.next=27,lt();case 27:return T||gt(null,!0),n.abrupt("return",{ar:p,cu:y});case 29:case"end":return n.stop()}}),n)})));return function(e){return t.apply(this,arguments)}}(),ft=function(){var t=(0,u["default"])(o["default"].mark((function e(){var t,r,a,u;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B||self.localforage||(L?(global.localforage=n(182).LocalStorage,global.localforage.prototype.keys=function(){for(var t=[],e=0;e<this.length;++e)t.push(this.key(e));return t},global.localforage.createInstance=function(t){return new B("./dynamsoftverify/"+t.name)}):importScripts("./localforage.min.js")),B=B||self.localforage,L&&(global.fetch=global.fetch||n(183),global.crypto=global.crypto||n(184).webcrypto),z=function(t){return C(String.fromCharCode.apply(null,t).replace(/\n/g,"+").replace(/\s/g,"="))},e.prev=3,e.next=6,B.createInstance({name:U+"jshello"});case 6:return t=e.sent,e.next=9,t.setItem(U+"jshello","available");case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e["catch"](3),e.t0;case 14:return e.next=16,B.createInstance({name:"dynamltsinfo"});case 16:if(E=e.sent,k=$?null:P(P("v2")+String.fromCharCode(h.charCodeAt(h.length/2)+1)+P(h)),O=P(String.fromCharCode((s||l).charCodeAt(0)+10)+P(U)+P(s||l)+f+P(d)),$){e.next=38;break}return e.prev=20,e.next=23,E.getItem(k);case 23:if(!(r=e.sent)){e.next=33;break}return e.t1=JSON,e.next=28,Q(r);case 28:e.t2=e.sent,a=e.t1.parse.call(e.t1,e.t2),u=(0,i["default"])(a,2),y=u[0],w=u[1];case 33:e.next=37;break;case 35:e.prev=35,e.t3=e["catch"](20);case 37:try{null==y&&(y=et())}catch(o){}case 38:return e.next=40,B.createInstance({name:"dynamltsuns"+P(String.fromCharCode((s||l).charCodeAt(0)+10)+P(U)+P(s||l)+f+P(d))});case 40:return A=e.sent,e.prev=41,e.next=44,E.getItem(O);case 44:p=e.sent,e.next=49;break;case 47:e.prev=47,e.t4=e["catch"](41);case 49:case"end":return e.stop()}}),e,null,[[3,11],[20,35],[41,47]])})));return function(){return t.apply(this,arguments)}}(),st=function(){var n=(0,u["default"])(o["default"].mark((function r(n){return o["default"].wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return H||(H=(0,u["default"])(o["default"].mark((function a(){var r,c,A,I,_,M;return o["default"].wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,r={hs:s,og:l,pd:U,vm:f,dt:d||(L?"server":"browser"),ed:"javascript",cu:y,ad:h,os:JSON.stringify(v),fn:g},c={},!w||$){a.next=17;break}return a.next=6,E.getItem(k);case 6:if(!(A=a.sent)){a.next=16;break}return a.t0=JSON,a.next=11,Q(A);case 11:a.t1=a.sent,I=a.t0.parse.call(a.t0,a.t1),_=(0,i["default"])(I,2),y=_[0],w=_[1];case 16:c["lts-time"]=w;case 17:return x&&(r.sp=x),m&&(r.lm=m),b&&(r.cw=b),a.next=22,R.race([(0,u["default"])(o["default"].mark((function j(){var t,e,i,a,f,d,h,v;return o["default"].wrap((function(g){for(;;)switch(g.prev=g.next){case 0:if(t=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),!w||$){g.next=9;break}return g.t0=E,g.t1=k,g.next=6,tt(JSON.stringify([y,t]));case 6:g.t2=g.sent,g.t0.setItem.call(g.t0,g.t1,g.t2),w=t;case 9:return i="auth/?ext="+encodeURIComponent(P(JSON.stringify(r))),a=!1,f=!1,h=function(){var t=(0,u["default"])(o["default"].mark((function e(t){var n,r;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(!t.ok){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,t.text();case 7:(n=e.sent)&&(n,(r=JSON.parse(n)).errorCode&&(d=r,r.errorCode>100&&r.errorCode<200&&(p=null,a=!0,f=!0))),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](4);case 13:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}(),g.prev=13,g.next=16,R.race([fetch(N[0]+i,{headers:c,cache:n?"reload":"default",mode:"cors",timeout:1e4}),new R((function(t,e){setTimeout(e,1e4)}))]);case 16:return e=g.sent,g.next=19,h(e);case 19:g.next=23;break;case 21:g.prev=21,g.t3=g["catch"](13);case 23:if(w||e&&e.ok||a){g.next=34;break}return g.prev=24,g.next=27,fetch(N[1]+i,{headers:c,mode:"cors",timeout:3e4});case 27:return e=g.sent,g.next=30,h(e);case 30:g.next=34;break;case 32:g.prev=32,g.t4=g["catch"](24);case 34:if(w||e&&e.ok||a){g.next=45;break}return g.prev=35,g.next=38,fetch(N[0]+i,{headers:c,mode:"cors",timeout:3e4});case 38:return e=g.sent,g.next=41,h(e);case 41:g.next=45;break;case 43:g.prev=43,g.t5=g["catch"](35);case 45:if(!d||151!=d.errorCode){g.next=57;break}return $||E.removeItem(k),E.removeItem(O),y=et(),r.cu=y,w=undefined,i=encodeURIComponent(P(JSON.stringify(r))),g.next=54,fetch(N[0]+"auth/?ext="+i,{headers:c,mode:"cors",timeout:3e4});case 54:return e=g.sent,g.next=57,h(e);case 57:return function(){if(!e||!e.ok){var t;f&&E.setItem(O,""),d?111==d.errorCode?t=d.message:((t=d.message.trim()).endsWith(".")||(t+="."),t="An error occurred during authorization: ".concat(t,s||l?" Contact the site administrator for more information.":" [Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.")):t=s||l?at:it;var n=Error(t);throw d&&d.errorCode&&(n.ltsErrorCode=d.errorCode),n}}(),g.next=61,e.text();case 61:if(v=g.sent,g.prev=62,w||$){g.next=71;break}return g.t6=E,g.t7=k,g.next=68,tt(JSON.stringify([y,t]));case 68:g.t8=g.sent,g.t6.setItem.call(g.t6,g.t7,g.t8),w=t;case 71:E.setItem(O,v),g.next=76;break;case 74:g.prev=74,g.t9=g["catch"](62);case 76:return g.abrupt("return",v);case 77:case"end":return g.stop()}}),j,null,[[13,21],[24,32],[35,43],[62,74]])})))(),new R((function(t,e){var n;n=s||l?ot:rt,setTimeout((function(){return e(new Error(n))}),p?3e3:15e3)}))]);case 22:M=a.sent,p=M,a.next=30;break;case 26:a.prev=26,a.t2=a["catch"](0),e&&t.dwt&&self.console.error(a.t2),T=a.t2;case 30:S=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),H=null;case 32:case"end":return a.stop()}}),a,null,[[0,26]])})))()),r.next=3,H;case 3:case"end":return r.stop()}}),r)})));return function(t){return n.apply(this,arguments)}}(),lt=function(){var n=(0,u["default"])(o["default"].mark((function r(){return o["default"].wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return J||(J=(0,u["default"])(o["default"].mark((function r(){var n,i;return o["default"].wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(V(y),p){r.next=6;break}if(F){r.next=5;break}throw W(T.message),T;case 5:return r.abrupt("return");case 6:if(T&&G&&(G(T),G=null),n={dm:h},e&&(n.bd=!0),n.brtk=!0,n.ls=N[0],s&&(n.hs=s),l&&(n.og=l),n.cu=y,g&&(n.fn=g),U&&(n.product=U),d&&(n.dt=d),b&&(n.cw=b),v&&(n.os=JSON.stringify(v)),V(p),r.prev=20,t.dwt){r.next=35;break}return r.t0=JSON,r.next=25,q(p);case 25:r.t1=r.sent,(i=r.t0.parse.call(r.t0,r.t1)).ba&&(n.ba=i.ba),i.usu&&(n.usu=i.usu),i.trial&&(n.trial=i.trial),i.its&&(n.its=i.its),1==n.trial&&i.msg?n.msg=i.msg:T?n.msg=T.message||T:i.msg&&(n.msg=i.msg),n.ar=i["in"],r.next=36;break;case 35:n.ar=p;case 36:n.bafc=!!T,r.next=41;break;case 39:r.prev=39,r.t2=r["catch"](20);case 41:return V(n),r.prev=42,r.next=45,I(n);case 45:r.next=49;break;case 47:r.prev=47,r.t3=r["catch"](42);case 49:return r.next=51,pt();case 51:F||(F=!0),J=null;case 53:case"end":return r.stop()}}),r,null,[[20,39],[42,47]])})))()),n.next=3,J;case 3:case"end":return n.stop()}}),r)})));return function(){return n.apply(this,arguments)}}(),pt=function(){var t=(0,u["default"])(o["default"].mark((function e(){var t,n,r;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),e.next=4,M();case 4:if(r=e.sent,V(r),!(r&&r<n)){e.next=12;break}if(!T){e.next=11;break}throw new Error(nt);case 11:throw new Error(ut);case 12:case"end":return e.stop()}}),e)})));return function(){return t.apply(this,arguments)}}(),dt=function(){var t=(0,u["default"])(o["default"].mark((function e(){var t,n,r,i,a,u;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,n=t.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),e.next=4,_();case 4:return r=e.sent,e.next=7,M();case 7:if(!((i=e.sent)&&i<n)){e.next=15;break}return e.next=11,st(!0);case 11:return e.next=13,lt();case 13:e.next=16;break;case 15:r&&r<n&&(t.setMinutes(t.getMinutes()-6),a=t,t=null,u=a.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),w<u&&st().then((function(){return lt()})));case 16:case"end":return e.stop()}}),e)})));return function(){return t.apply(this,arguments)}}(),ht=!1,yt=null,vt=function(){var e=(0,u["default"])(o["default"].mark((function n(e,r,i,a){var c;return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.dwt||r){e.next=4;break}return e.next=3,gt(i);case 3:return e.abrupt("return");case 4:if(e.prev=4,!r.startsWith("{")||!r.endsWith("}")){e.next=11;break}return e.next=8,X(r);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=r;case 12:if(!(c=e.t0)){e.next=18;break}return e.next=16,A.setItem(i,c);case 16:e.next=19;break;case 18:V("ept ecpt");case 19:e.next=23;break;case 21:e.prev=21,e.t1=e["catch"](4);case 23:if(!a){e.next=26;break}return e.next=26,gt(i);case 26:yt&&clearTimeout(yt),yt=setTimeout((0,u["default"])(o["default"].mark((function n(){return o["default"].wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gt();case 2:case"end":return t.stop()}}),n)}))),36e4);case 28:case"end":return e.stop()}}),n,null,[[4,21]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),gt=function(){var t=(0,u["default"])(o["default"].mark((function e(t,n){return o["default"].wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D=D.then((0,u["default"])(o["default"].mark((function r(){var e,a,u,c,f,s,l,p,d,h,v,g;return o["default"].wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A.keys();case 3:if(e=r.sent,n||(ht?t&&(e=e.filter((function(e){return e<t}))):t&&e.includes(t)?e=[t]:(e=[],V("Unexpected null key"))),e.length){r.next=7;break}return r.abrupt("return");case 7:ht||(ht=!0),a=0;case 9:if(!(a<e.length/1e3)){r.next=77;break}u=e.slice(1e3*a,1e3*a+999),c=[],f=0;case 13:if(!(f<u.length)){r.next=22;break}return r.t0=c,r.next=17,A.getItem(u[f]);case 17:r.t1=r.sent,r.t0.push.call(r.t0,r.t1);case 19:++f,r.next=13;break;case 22:if(s=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),$){r.next=42;break}return r.t2=E,r.t3=k,r.next=28,tt(JSON.stringify([y,s]));case 28:return r.t4=r.sent,r.t2.setItem.call(r.t2,r.t3,r.t4),r.next=32,E.getItem(k);case 32:if(!(l=r.sent)){r.next=42;break}return r.t5=JSON,r.next=37,Q(l);case 37:r.t6=r.sent,p=r.t5.parse.call(r.t5,r.t6),d=(0,i["default"])(p,2),y=d[0],w=d[1];case 42:return r.prev=42,h={"Content-Type":"application/json"},w&&!$&&(h["lts-time"]=w),r.next=47,fetch(N[0]+"verify",{mode:"cors",method:"POST",body:JSON.stringify(c),headers:h,timeout:3e4});case 47:if(!(v=r.sent).ok){r.next=67;break}w=s,g=0;case 51:if(!(g<u.length)){r.next=57;break}return r.next=54,A.removeItem(u[g]);case 54:++g,r.next=51;break;case 57:return r.next=59,v.json();case 59:if(!(r.sent.handshakeUpdateTime>S)){r.next=65;break}return r.next=63,st(!0);case 63:return r.next=65,lt();case 65:r.next=68;break;case 67:throw new Error("verify failed. Status Code: "+v.status);case 68:r.next=74;break;case 70:throw r.prev=70,r.t7=r["catch"](42),G&&(G(r.t7),G=null),r.t7;case 74:++a,r.next=9;break;case 77:Y&&Y(),r.next=82;break;case 80:r.prev=80,r.t8=r["catch"](0);case 82:case"end":return r.stop()}}),r,null,[[0,80],[42,70]])})))),e.next=3,D;case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(e,n){return t.apply(this,arguments)}}();return{i:ct,c:dt,s:vt,caret:pt}}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{"default":t}},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e,n){t.exports=n(94)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=b(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=c;var s={};function l(){}function p(){}function d(){}var h={};h[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(A([])));v&&v!==e&&n.call(v,o)&&(h=v);var g=d.prototype=l.prototype=Object.create(h);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function m(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function u(r,o,i,a){var c=f(t[r],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){u("next",t,i,a)}),(function(t){u("throw",t,i,a)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return u("throw",t,i,a)}))}a(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=g.constructor=d,d.constructor=p,p.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},x(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new m(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(g),u(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),s}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(9),o=n(8).f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},function(t,e,n){var r=n(41),o=n(14),i=n(100);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(64);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(0),o=n(46),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r=n(41),o=n(33);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r,o,i,a,u=n(5),c=n(19),f=n(0),s=n(25),l=n(106),p=n(14),d=n(66),h=n(37),y=n(51),v=n(6),g=n(26),x=n(52),m=n(46),b=n(107),w=n(69),S=n(18),T=n(70).set,A=n(109),E=n(111),k=n(112),O=n(73),I=n(113),_=n(21),M=n(50),j=n(3),L=n(30),R=n(31),P=j("species"),C="Promise",U=_.get,N=_.set,F=_.getterFor(C),D=l,B=f.TypeError,W=f.document,V=f.process,G=s("fetch"),Y=O.f,$=Y,H=!!(W&&W.createEvent&&f.dispatchEvent),J="function"==typeof PromiseRejectionEvent,z=M(C,(function(){if(!(m(D)!==String(D))){if(66===R)return!0;if(!L&&!J)return!0}if(c&&!D.prototype["finally"])return!0;if(R>=51&&/native code/.test(D))return!1;var t=D.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[P]=e,!(t.then((function(){}))instanceof e)})),K=z||!w((function(t){D.all(t)["catch"]((function(){}))})),Z=function(t){var e;return!(!v(t)||"function"!=typeof(e=t.then))&&e},q=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;A((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var a,u,c,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,d=f.domain;try{s?(o||(2===t.rejection&&et(t),t.rejection=1),!0===s?a=r:(d&&d.enter(),a=s(r),d&&(d.exit(),c=!0)),a===f.promise?p(B("Promise-chain cycle")):(u=Z(a))?u.call(a,l,p):l(a)):p(r)}catch(h){d&&!c&&d.exit(),p(h)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&Q(t)}))}},X=function(t,e,n){var r,o;H?((r=W.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:e,reason:n},!J&&(o=f["on"+t])?o(r):"unhandledrejection"===t&&k("Unhandled promise rejection",n)},Q=function(t){T.call(f,(function(){var e,n=t.facade,r=t.value;if(tt(t)&&(e=I((function(){L?V.emit("unhandledRejection",r,n):X("unhandledrejection",n,r)})),t.rejection=L||tt(t)?2:1,e.error))throw e.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t){T.call(f,(function(){var e=t.facade;L?V.emit("rejectionHandled",e):X("rejectionhandled",e,t.value)}))},nt=function(t,e,n){return function(r){t(e,r,n)}},rt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,q(t,!0))},ot=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw B("Promise can't be resolved itself");var r=Z(e);r?A((function(){var n={done:!1};try{r.call(e,nt(ot,n,t),nt(rt,n,t))}catch(o){rt(n,o,t)}})):(t.value=e,t.state=1,q(t,!1))}catch(o){rt({done:!1},o,t)}}};z&&(D=function(t){x(this,D,C),g(t),r.call(this);var e=U(this);try{t(nt(ot,e),nt(rt,e))}catch(n){rt(e,n)}},(r=function(t){N(this,{type:C,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:undefined})}).prototype=d(D.prototype,{then:function(t,e){var n=F(this),r=Y(S(this,D));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=L?V.domain:undefined,n.parent=!0,n.reactions.push(r),0!=n.state&&q(n,!1),r.promise},"catch":function(t){return this.then(undefined,t)}}),o=function(){var t=new r,e=U(t);this.promise=t,this.resolve=nt(ot,e),this.reject=nt(rt,e)},O.f=Y=function(t){return t===D||t===i?new o(t):$(t)},c||"function"!=typeof l||(a=l.prototype.then,p(l.prototype,"then",(function(t,e){var n=this;return new D((function(t,e){a.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof G&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(D,G.apply(f,arguments))}}))),u({global:!0,wrap:!0,forced:z},{Promise:D}),h(D,C,!1,!0),y(C),i=s(C),u({target:C,stat:!0,forced:z},{reject:function(t){var e=Y(this);return e.reject.call(undefined,t),e.promise}}),u({target:C,stat:!0,forced:c||z},{resolve:function(t){return E(c&&this===i?D:this,t)}}),u({target:C,stat:!0,forced:K},{all:function(t){var e=this,n=Y(e),r=n.resolve,o=n.reject,i=I((function(){var n=g(e.resolve),i=[],a=0,u=1;b(t,(function(t){var c=a++,f=!1;i.push(undefined),u++,n.call(e,t).then((function(t){f||(f=!0,i[c]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Y(e),r=n.reject,o=I((function(){var o=g(e.resolve);b(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(11),o=n(104),i=n(22),a=n(8);t.exports=function(t,e){for(var n=o(e),u=a.f,c=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||u(t,s,c(e,s))}}},function(t,e,n){var r=n(25),o=n(35),i=n(105),a=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(7),o=n(67),i=n(4),a=n(38),u=n(68),c=n(108),f=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var s,l,p,d,h,y,v,g=n&&n.that,x=!(!n||!n.AS_ENTRIES),m=!(!n||!n.IS_ITERATOR),b=!(!n||!n.INTERRUPTED),w=a(e,g,1+x+b),S=function(t){return s&&c(s),new f(!0,t)},T=function(t){return x?(r(t),b?w(t[0],t[1],S):w(t[0],t[1])):b?w(t,S):w(t)};if(m)s=t;else{if("function"!=typeof(l=u(t)))throw TypeError("Target is not iterable");if(o(l)){for(p=0,d=i(t.length);d>p;p++)if((h=T(t[p]))&&h instanceof f)return h;return new f(!1)}s=l.call(t)}for(y=s.next;!(v=y.call(s)).done;){try{h=T(v.value)}catch(A){throw c(s),A}if("object"==typeof h&&h&&h instanceof f)return h}return new f(!1)}},function(t,e,n){var r=n(7);t.exports=function(t){var e=t["return"];if(e!==undefined)return r(e.call(t)).value}},function(t,e,n){var r,o,i,a,u,c,f,s,l=n(0),p=n(22).f,d=n(70).set,h=n(72),y=n(110),v=n(30),g=l.MutationObserver||l.WebKitMutationObserver,x=l.document,m=l.process,b=l.Promise,w=p(l,"queueMicrotask"),S=w&&w.value;S||(r=function(){var t,e;for(v&&(t=m.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(n){throw o?a():i=undefined,n}}i=undefined,t&&t.enter()},h||v||y||!g||!x?b&&b.resolve?(f=b.resolve(undefined),s=f.then,a=function(){s.call(f,r)}):a=v?function(){m.nextTick(r)}:function(){d.call(l,r)}:(u=!0,c=x.createTextNode(""),new g(r).observe(c,{characterData:!0}),a=function(){c.data=u=!u})),t.exports=S||function(t){var e={fn:t,next:undefined};i&&(i.next=e),o||(o=e,a()),i=e}},function(t,e,n){var r=n(32);t.exports=/web0s(?!.*chrome)/i.test(r)},function(t,e,n){var r=n(7),o=n(6),i=n(73);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},function(t,e,n){"use strict";var r=n(14),o=n(7),i=n(2),a=n(53),u=RegExp.prototype,c=u.toString,f=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),s="toString"!=c.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(n===undefined&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(75),o=n(7),i=n(4),a=n(16),u=n(13),c=n(76),f=n(117),s=n(77),l=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=r.REPLACE_KEEPS_$0,y=d?"$":"$0";return[function(n,r){var o=u(this),i=n==undefined?undefined:n[t];return i!==undefined?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!d&&h||"string"==typeof r&&-1===r.indexOf(y)){var u=n(e,t,this,r);if(u.done)return u.value}var v=o(t),g=String(this),x="function"==typeof r;x||(r=String(r));var m=v.global;if(m){var b=v.unicode;v.lastIndex=0}for(var w=[];;){var S=s(v,g);if(null===S)break;if(w.push(S),!m)break;""===String(S[0])&&(v.lastIndex=c(g,i(v.lastIndex),b))}for(var T,A="",E=0,k=0;k<w.length;k++){S=w[k];for(var O=String(S[0]),I=l(p(a(S.index),g.length),0),_=[],M=1;M<S.length;M++)_.push((T=S[M])===undefined?T:String(T));var j=S.groups;if(x){var L=[O].concat(_,I,g);j!==undefined&&L.push(j);var R=String(r.apply(undefined,L))}else R=f(O,g,I,_,j,r);I>=E&&(A+=g.slice(E,I)+R,E=I+O.length)}return A+g.slice(E)}]}))},function(t,e,n){var r=n(16),o=n(13),i=function(t){return function(e,n){var i,a,u=String(o(e)),c=r(n),f=u.length;return c<0||c>=f?t?"":undefined:(i=u.charCodeAt(c))<55296||i>56319||c+1===f||(a=u.charCodeAt(c+1))<56320||a>57343?t?u.charAt(c):i:t?u.slice(c,c+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r=n(12),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,f,s){var l=n+t.length,p=c.length,d=u;return f!==undefined&&(f=r(f),d=a),i.call(s,d,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":a=f[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>p){var s=o(u/10);return 0===s?r:s<=p?c[s-1]===undefined?i.charAt(1):c[s-1]+i.charAt(1):r}a=c[u-1]}return a===undefined?"":a}))}},function(t,e,n){var r=n(9),o=n(0),i=n(50),a=n(78),u=n(8).f,c=n(35).f,f=n(56),s=n(53),l=n(55),p=n(14),d=n(2),h=n(21).enforce,y=n(51),v=n(3)("match"),g=o.RegExp,x=g.prototype,m=/a/g,b=/a/g,w=new g(m)!==m,S=l.UNSUPPORTED_Y;if(r&&i("RegExp",!w||S||d((function(){return b[v]=!1,g(m)!=m||g(b)==b||"/a/i"!=g(m,"i")})))){for(var T=function(t,e){var n,r=this instanceof T,o=f(t),i=e===undefined;if(!r&&o&&t.constructor===T&&i)return t;w?o&&!i&&(t=t.source):t instanceof T&&(i&&(e=s.call(t)),t=t.source),S&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var u=a(w?new g(t,e):g(t,e),r?this:x,T);S&&n&&(h(u).sticky=!0);return u},A=function(t){t in T||u(T,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},E=c(g),k=0;E.length>k;)A(E[k++]);x.constructor=T,T.prototype=x,p(o,"RegExp",T)}y("RegExp")},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(5),o=n(34),i=n(17),a=n(79),u=[].join,c=o!=Object,f=a("join",",");r({target:"Array",proto:!0,forced:c||!f},{join:function(t){return u.call(i(this),t===undefined?",":t)}})},function(t,e,n){var r=n(9),o=n(8),i=n(7),a=n(122);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),u=r.length,c=0;u>c;)o.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var r=n(65),o=n(49);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(5),o=n(124),i=n(39),a=n(28),u=n(37),c=n(10),f=n(14),s=n(3),l=n(19),p=n(27),d=n(81),h=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,v=s("iterator"),g=function(){return this};t.exports=function(t,e,n,s,d,x,m){o(n,e,s);var b,w,S,T=function(t){if(t===d&&I)return I;if(!y&&t in k)return k[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},A=e+" Iterator",E=!1,k=t.prototype,O=k[v]||k["@@iterator"]||d&&k[d],I=!y&&O||T(d),_="Array"==e&&k.entries||O;if(_&&(b=i(_.call(new t)),h!==Object.prototype&&b.next&&(l||i(b)===h||(a?a(b,h):"function"!=typeof b[v]&&c(b,v,g)),u(b,A,!0,!0),l&&(p[A]=g))),"values"==d&&O&&"values"!==O.name&&(E=!0,I=function(){return O.call(this)}),l&&!m||k[v]===I||c(k,v,I),p[e]=I,d)if(w={values:T("values"),keys:x?I:T("keys"),entries:T("entries")},m)for(S in w)(y||E||!(S in k))&&f(k,S,w[S]);else r({target:e,proto:!0,forced:y||E},w);return w}},function(t,e,n){"use strict";var r=n(81).IteratorPrototype,o=n(58),i=n(24),a=n(37),u=n(27),c=function(){return this};t.exports=function(t,e,n){var f=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),a(t,f,!1,!0),u[f]=c,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){"use strict";var r=n(5),o=n(2),i=n(82),a=n(7),u=n(23),c=n(4),f=n(18),s=i.ArrayBuffer,l=i.DataView,p=s.prototype.slice;r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:o((function(){return!new s(2).slice(1,undefined).byteLength}))},{slice:function(t,e){if(p!==undefined&&e===undefined)return p.call(a(this),t);for(var n=a(this).byteLength,r=u(t,n),o=u(e===undefined?n:e,n),i=new(f(this,s))(c(o-r)),d=new l(this),h=new l(i),y=0;r<o;)h.setUint8(y++,d.getUint8(r++));return i}})},function(t,e){var n=Math.abs,r=Math.pow,o=Math.floor,i=Math.log,a=Math.LN2;t.exports={pack:function(t,e,u){var c,f,s,l=new Array(u),p=8*u-e-1,d=(1<<p)-1,h=d>>1,y=23===e?r(2,-24)-r(2,-77):0,v=t<0||0===t&&1/t<0?1:0,g=0;for((t=n(t))!=t||t===Infinity?(f=t!=t?1:0,c=d):(c=o(i(t)/a),t*(s=r(2,-c))<1&&(c--,s*=2),(t+=c+h>=1?y/s:y*r(2,1-h))*s>=2&&(c++,s/=2),c+h>=d?(f=0,c=d):c+h>=1?(f=(t*s-1)*r(2,e),c+=h):(f=t*r(2,h-1)*r(2,e),c=0));e>=8;l[g++]=255&f,f/=256,e-=8);for(c=c<<e|f,p+=e;p>0;l[g++]=255&c,c/=256,p-=8);return l[--g]|=128*v,l},unpack:function(t,e){var n,o=t.length,i=8*o-e-1,a=(1<<i)-1,u=a>>1,c=i-7,f=o-1,s=t[f--],l=127&s;for(s>>=7;c>0;l=256*l+t[f],f--,c-=8);for(n=l&(1<<-c)-1,l>>=-c,c+=e;c>0;n=256*n+t[f],f--,c-=8);if(0===l)l=1-u;else{if(l===a)return n?NaN:s?-Infinity:Infinity;n+=r(2,e),l-=u}return(s?-1:1)*n*r(2,l-e)}}},function(t,e,n){n(129)("Uint8",(function(t){return function(e,n,r){return t(this,e,n,r)}}))},function(t,e,n){"use strict";var r=n(5),o=n(0),i=n(9),a=n(130),u=n(1),c=n(82),f=n(52),s=n(24),l=n(10),p=n(4),d=n(84),h=n(86),y=n(29),v=n(11),g=n(33),x=n(6),m=n(58),b=n(28),w=n(35).f,S=n(132),T=n(15).forEach,A=n(51),E=n(8),k=n(22),O=n(21),I=n(78),_=O.get,M=O.set,j=E.f,L=k.f,R=Math.round,P=o.RangeError,C=c.ArrayBuffer,U=c.DataView,N=u.NATIVE_ARRAY_BUFFER_VIEWS,F=u.TYPED_ARRAY_TAG,D=u.TypedArray,B=u.TypedArrayPrototype,W=u.aTypedArrayConstructor,V=u.isTypedArray,G=function(t,e){for(var n=0,r=e.length,o=new(W(t))(r);r>n;)o[n]=e[n++];return o},Y=function(t,e){j(t,e,{get:function(){return _(this)[e]}})},$=function(t){var e;return t instanceof C||"ArrayBuffer"==(e=g(t))||"SharedArrayBuffer"==e},H=function(t,e){return V(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},J=function(t,e){return H(t,e=y(e,!0))?s(2,t[e]):L(t,e)},z=function(t,e,n){return!(H(t,e=y(e,!0))&&x(n)&&v(n,"value"))||v(n,"get")||v(n,"set")||n.configurable||v(n,"writable")&&!n.writable||v(n,"enumerable")&&!n.enumerable?j(t,e,n):(t[e]=n.value,t)};i?(N||(k.f=J,E.f=z,Y(B,"buffer"),Y(B,"byteOffset"),Y(B,"byteLength"),Y(B,"length")),r({target:"Object",stat:!0,forced:!N},{getOwnPropertyDescriptor:J,defineProperty:z}),t.exports=function(t,e,n){var i=t.match(/\d+$/)[0]/8,u=t+(n?"Clamped":"")+"Array",c="get"+t,s="set"+t,y=o[u],v=y,g=v&&v.prototype,E={},k=function(t,e){j(t,e,{get:function(){return function(t,e){var n=_(t);return n.view[c](e*i+n.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,r){var o=_(t);n&&(r=(r=R(r))<0?0:r>255?255:255&r),o.view[s](e*i+o.byteOffset,r,!0)}(this,e,t)},enumerable:!0})};N?a&&(v=e((function(t,e,n,r){return f(t,v,u),I(x(e)?$(e)?r!==undefined?new y(e,h(n,i),r):n!==undefined?new y(e,h(n,i)):new y(e):V(e)?G(v,e):S.call(v,e):new y(d(e)),t,v)})),b&&b(v,D),T(w(y),(function(t){t in v||l(v,t,y[t])})),v.prototype=g):(v=e((function(t,e,n,r){f(t,v,u);var o,a,c,s=0,l=0;if(x(e)){if(!$(e))return V(e)?G(v,e):S.call(v,e);o=e,l=h(n,i);var y=e.byteLength;if(r===undefined){if(y%i)throw P("Wrong length");if((a=y-l)<0)throw P("Wrong length")}else if((a=p(r)*i)+l>y)throw P("Wrong length");c=a/i}else c=d(e),o=new C(a=c*i);for(M(t,{buffer:o,byteOffset:l,byteLength:a,length:c,view:new U(o)});s<c;)k(t,s++)})),b&&b(v,D),g=v.prototype=m(B)),g.constructor!==v&&l(g,"constructor",v),F&&l(g,F,u),E[u]=v,r({global:!0,forced:v!=y,sham:!N},E),"BYTES_PER_ELEMENT"in v||l(v,"BYTES_PER_ELEMENT",i),"BYTES_PER_ELEMENT"in g||l(g,"BYTES_PER_ELEMENT",i),A(u)}):t.exports=function(){}},function(t,e,n){var r=n(0),o=n(2),i=n(69),a=n(1).NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,c=r.Int8Array;t.exports=!a||!o((function(){c(1)}))||!o((function(){new c(-1)}))||!i((function(t){new c,new c(null),new c(1.5),new c(t)}),!0)||o((function(){return 1!==new c(new u(2),1,undefined).length}))},function(t,e,n){var r=n(16);t.exports=function(t){var e=r(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,n){var r=n(12),o=n(4),i=n(68),a=n(67),u=n(38),c=n(1).aTypedArrayConstructor;t.exports=function(t){var e,n,f,s,l,p,d=r(t),h=arguments.length,y=h>1?arguments[1]:undefined,v=y!==undefined,g=i(d);if(g!=undefined&&!a(g))for(p=(l=g.call(d)).next,d=[];!(s=p.call(l)).done;)d.push(s.value);for(v&&h>2&&(y=u(y,arguments[2],2)),n=o(d.length),f=new(c(this))(n),e=0;n>e;e++)f[e]=v?y(d[e],e):d[e];return f}},function(t,e,n){"use strict";var r=n(1),o=n(134),i=r.aTypedArray;(0,r.exportTypedArrayMethod)("copyWithin",(function(t,e){return o.call(i(this),t,e,arguments.length>2?arguments[2]:undefined)}))},function(t,e,n){"use strict";var r=n(12),o=n(23),i=n(4),a=Math.min;t.exports=[].copyWithin||function(t,e){var n=r(this),u=i(n.length),c=o(t,u),f=o(e,u),s=arguments.length>2?arguments[2]:undefined,l=a((s===undefined?u:o(s,u))-f,u-c),p=1;for(f<c&&c<f+l&&(p=-1,f+=l-1,c+=l-1);l-- >0;)f in n?n[c]=n[f]:delete n[c],c+=p,f+=p;return n}},function(t,e,n){"use strict";var r=n(1),o=n(15).every,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(85),i=r.aTypedArray;(0,r.exportTypedArrayMethod)("fill",(function(t){return o.apply(i(this),arguments)}))},function(t,e,n){"use strict";var r=n(1),o=n(15).filter,i=n(138),a=r.aTypedArray;(0,r.exportTypedArrayMethod)("filter",(function(t){var e=o(a(this),t,arguments.length>1?arguments[1]:undefined);return i(this,e)}))},function(t,e,n){var r=n(1).aTypedArrayConstructor,o=n(18);t.exports=function(t,e){for(var n=o(t,t.constructor),i=0,a=e.length,u=new(r(n))(a);a>i;)u[i]=e[i++];return u}},function(t,e,n){"use strict";var r=n(1),o=n(15).find,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(15).findIndex,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(15).forEach,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(36).includes,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(36).indexOf,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(57),a=n(3)("iterator"),u=r.Uint8Array,c=i.values,f=i.keys,s=i.entries,l=o.aTypedArray,p=o.exportTypedArrayMethod,d=u&&u.prototype[a],h=!!d&&("values"==d.name||d.name==undefined),y=function(){return c.call(l(this))};p("entries",(function(){return s.call(l(this))})),p("keys",(function(){return f.call(l(this))})),p("values",y,!h),p(a,y,!h)},function(t,e,n){"use strict";var r=n(1),o=r.aTypedArray,i=r.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},function(t,e,n){"use strict";var r=n(1),o=n(147),i=r.aTypedArray;(0,r.exportTypedArrayMethod)("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},function(t,e,n){"use strict";var r=n(17),o=n(16),i=n(4),a=n(79),u=Math.min,c=[].lastIndexOf,f=!!c&&1/[1].lastIndexOf(1,-0)<0,s=a("lastIndexOf"),l=f||!s;t.exports=l?function(t){if(f)return c.apply(this,arguments)||0;var e=r(this),n=i(e.length),a=n-1;for(arguments.length>1&&(a=u(a,o(arguments[1]))),a<0&&(a=n+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:c},function(t,e,n){"use strict";var r=n(1),o=n(15).map,i=n(18),a=r.aTypedArray,u=r.aTypedArrayConstructor;(0,r.exportTypedArrayMethod)("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:undefined,(function(t,e){return new(u(i(t,t.constructor)))(e)}))}))},function(t,e,n){"use strict";var r=n(1),o=n(88).left,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=n(88).right,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=r.aTypedArray,i=r.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){for(var t,e=o(this).length,n=a(e/2),r=0;r<n;)t=this[r],this[r++]=this[--e],this[e]=t;return this}))},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(86),a=n(12),u=n(2),c=r.aTypedArray;(0,r.exportTypedArrayMethod)("set",(function(t){c(this);var e=i(arguments.length>1?arguments[1]:undefined,1),n=this.length,r=a(t),u=o(r.length),f=0;if(u+e>n)throw RangeError("Wrong length");for(;f<u;)this[e+f]=r[f++]}),u((function(){new Int8Array(1).set({})})))},function(t,e,n){"use strict";var r=n(1),o=n(18),i=n(2),a=r.aTypedArray,u=r.aTypedArrayConstructor,c=r.exportTypedArrayMethod,f=[].slice;c("slice",(function(t,e){for(var n=f.call(a(this),t,e),r=o(this,this.constructor),i=0,c=n.length,s=new(u(r))(c);c>i;)s[i]=n[i++];return s}),i((function(){new Int8Array(1).slice()})))},function(t,e,n){"use strict";var r=n(1),o=n(15).some,i=r.aTypedArray;(0,r.exportTypedArrayMethod)("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:undefined)}))},function(t,e,n){"use strict";var r=n(1),o=r.aTypedArray,i=r.exportTypedArrayMethod,a=[].sort;i("sort",(function(t){return a.call(o(this),t)}))},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(23),a=n(18),u=r.aTypedArray;(0,r.exportTypedArrayMethod)("subarray",(function(t,e){var n=u(this),r=n.length,c=i(t,r);return new(a(n,n.constructor))(n.buffer,n.byteOffset+c*n.BYTES_PER_ELEMENT,o((e===undefined?r:i(e,r))-c))}))},function(t,e,n){"use strict";var r=n(0),o=n(1),i=n(2),a=r.Int8Array,u=o.aTypedArray,c=o.exportTypedArrayMethod,f=[].toLocaleString,s=[].slice,l=!!a&&i((function(){f.call(new a(1))}));c("toLocaleString",(function(){return f.apply(l?s.call(u(this)):u(this),arguments)}),i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])})))},function(t,e,n){"use strict";var r=n(1).exportTypedArrayMethod,o=n(2),i=n(0).Uint8Array,a=i&&i.prototype||{},u=[].toString,c=[].join;o((function(){u.call({})}))&&(u=function(){return c.call(this)});var f=a.toString!=u;r("toString",u,f)},function(t,e,n){"use strict";var r=n(5),o=n(2),i=n(59),a=n(6),u=n(12),c=n(4),f=n(89),s=n(87),l=n(60),p=n(3),d=n(31),h=p("isConcatSpreadable"),y=d>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=l("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return e!==undefined?!!e:i(t)};r({target:"Array",proto:!0,forced:!y||!v},{concat:function(t){var e,n,r,o,i,a=u(this),l=s(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(i=-1===e?a:arguments[e])){if(p+(o=c(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,e,n){"use strict";var r=n(75),o=n(56),i=n(7),a=n(13),u=n(18),c=n(76),f=n(4),s=n(77),l=n(54),p=n(55).UNSUPPORTED_Y,d=[].push,h=Math.min;r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),i=n===undefined?4294967295:n>>>0;if(0===i)return[];if(t===undefined)return[r];if(!o(t))return e.call(r,t,i);for(var u,c,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,y=new RegExp(t.source,p+"g");(u=l.call(y,r))&&!((c=y.lastIndex)>h&&(s.push(r.slice(h,u.index)),u.length>1&&u.index<r.length&&d.apply(s,u.slice(1)),f=u[0].length,h=c,s.length>=i));)y.lastIndex===u.index&&y.lastIndex++;return h===r.length?!f&&y.test("")||s.push(""):s.push(r.slice(h)),s.length>i?s.slice(0,i):s}:"0".split(undefined,0).length?function(t,n){return t===undefined&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=e==undefined?undefined:e[t];return i!==undefined?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var a=n(r,t,this,o,r!==e);if(a.done)return a.value;var l=i(t),d=String(this),y=u(l,RegExp),v=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"g":"y"),x=new y(p?"^(?:"+l.source+")":l,g),m=o===undefined?4294967295:o>>>0;if(0===m)return[];if(0===d.length)return null===s(x,d)?[d]:[];for(var b=0,w=0,S=[];w<d.length;){x.lastIndex=p?0:w;var T,A=s(x,p?d.slice(w):d);if(null===A||(T=h(f(x.lastIndex+(p?w:0)),d.length))===b)w=c(d,w,v);else{if(S.push(d.slice(b,w)),S.length===m)return S;for(var E=1;E<=A.length-1;E++)if(S.push(A[E]),S.length===m)return S;w=b=T}}return S.push(d.slice(b)),S}]}),p)},function(t,e,n){var r=n(0),o=n(162),i=n(57),a=n(10),u=n(3),c=u("iterator"),f=u("toStringTag"),s=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[c]!==s)try{a(d,c,s)}catch(y){d[c]=s}if(d[f]||a(d,f,l),o[l])for(var h in i)if(d[h]!==i[h])try{a(d,h,i[h])}catch(y){d[h]=i[h]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(5),o=n(0),i=n(32),a=[].slice,u=function(t){return function(e,n){var r=arguments.length>2,o=r?a.call(arguments,2):undefined;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:u(o.setTimeout),setInterval:u(o.setInterval)})},function(t,e,n){"use strict";var r=n(5),o=n(165).trim;r({target:"String",proto:!0,forced:n(166)("trim")},{trim:function(){return o(this)}})},function(t,e,n){var r=n(13),o="["+n(90)+"]",i=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},function(t,e,n){var r=n(2),o=n(90);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},function(t,e,n){"use strict";var r,o=n(5),i=n(22).f,a=n(4),u=n(61),c=n(13),f=n(62),s=n(19),l="".endsWith,p=Math.min,d=f("endsWith");o({target:"String",proto:!0,forced:!!(s||d||(r=i(String.prototype,"endsWith"),!r||r.writable))&&!d},{endsWith:function(t){var e=String(c(this));u(t);var n=arguments.length>1?arguments[1]:undefined,r=a(e.length),o=n===undefined?r:p(a(n),r),i=String(t);return l?l.call(e,i,o):e.slice(o-i.length,o)===i}})},function(t,e,n){"use strict";var r,o=n(5),i=n(22).f,a=n(4),u=n(61),c=n(13),f=n(62),s=n(19),l="".startsWith,p=Math.min,d=f("startsWith");o({target:"String",proto:!0,forced:!!(s||d||(r=i(String.prototype,"startsWith"),!r||r.writable))&&!d},{startsWith:function(t){var e=String(c(this));u(t);var n=a(p(arguments.length>1?arguments[1]:undefined,e.length)),r=String(t);return l?l.call(e,r,n):e.slice(n,n+r.length)===r}})},function(t,e,n){"use strict";var r=n(5),o=n(15).filter;r({target:"Array",proto:!0,forced:!n(60)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:undefined)}})},function(t,e,n){"use strict";var r=n(5),o=n(36).includes,i=n(80);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:undefined)}}),i("includes")},function(t,e,n){"use strict";var r=n(5),o=n(61),i=n(13);r({target:"String",proto:!0,forced:!n(62)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:undefined)}})},function(t,e,n){"use strict";var r=n(5),o=n(6),i=n(59),a=n(23),u=n(4),c=n(17),f=n(89),s=n(3),l=n(60)("slice"),p=s("species"),d=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!l},{slice:function(t,e){var n,r,s,l=c(this),y=u(l.length),v=a(t,y),g=a(e===undefined?y:e,y);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[p])&&(n=undefined):n=undefined,n===Array||n===undefined))return d.call(l,v,g);for(r=new(n===undefined?Array:n)(h(g-v,0)),s=0;v<g;v++,s++)v in l&&f(r,s,l[v]);return r.length=s,r}})},function(t,e,n){var r=n(174),o=n(175),i=n(176),a=n(178);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(u)throw o}}return i}},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e,n){var r=n(177);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void n(f)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(undefined)}))}},t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports["default"]=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports["default"]=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(){}}]);