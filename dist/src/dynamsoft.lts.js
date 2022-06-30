/**
* Dynamsoft JavaScript Library
* @product Dynamsoft WebTWAIN
* @website http://www.dynamsoft.com
* @preserve Copyright 2022, Dynamsoft Corporation
* @author Dynamsoft
* @version 17.3 18798
* @fileoverview Dynamsoft JavaScript Library for WebTWAIN
*/
(function(D){D.Lib = D.Lib || {};
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.localforage=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";function c(){k=!0;for(var a,b,c=l.length;c;){for(b=l,l=[],a=-1;++a<c;)b[a]();c=l.length}k=!1}function d(a){1!==l.push(a)||k||e()}var e,f=a.MutationObserver||a.WebKitMutationObserver;if(f){var g=0,h=new f(c),i=a.document.createTextNode("");h.observe(i,{characterData:!0}),e=function(){i.data=g=++g%2}}else if(a.setImmediate||void 0===a.MessageChannel)e="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var b=a.document.createElement("script");b.onreadystatechange=function(){c(),b.onreadystatechange=null,b.parentNode.removeChild(b),b=null},a.document.documentElement.appendChild(b)}:function(){setTimeout(c,0)};else{var j=new a.MessageChannel;j.port1.onmessage=c,e=function(){j.port2.postMessage(0)}}var k,l=[];b.exports=d}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(a,b,c){"use strict";function d(){}function e(a){if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=s,this.queue=[],this.outcome=void 0,a!==d&&i(this,a)}function f(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}function g(a,b,c){o(function(){var d;try{d=b(c)}catch(b){return p.reject(a,b)}d===a?p.reject(a,new TypeError("Cannot resolve promise with itself")):p.resolve(a,d)})}function h(a){var b=a&&a.then;if(a&&("object"==typeof a||"function"==typeof a)&&"function"==typeof b)return function(){b.apply(a,arguments)}}function i(a,b){function c(b){f||(f=!0,p.reject(a,b))}function d(b){f||(f=!0,p.resolve(a,b))}function e(){b(d,c)}var f=!1,g=j(e);"error"===g.status&&c(g.value)}function j(a,b){var c={};try{c.value=a(b),c.status="success"}catch(a){c.status="error",c.value=a}return c}function k(a){return a instanceof this?a:p.resolve(new this(d),a)}function l(a){var b=new this(d);return p.reject(b,a)}function m(a){function b(a,b){function d(a){g[b]=a,++h!==e||f||(f=!0,p.resolve(j,g))}c.resolve(a).then(d,function(a){f||(f=!0,p.reject(j,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=new Array(e),h=0,i=-1,j=new this(d);++i<e;)b(a[i],i);return j}function n(a){function b(a){c.resolve(a).then(function(a){f||(f=!0,p.resolve(h,a))},function(a){f||(f=!0,p.reject(h,a))})}var c=this;if("[object Array]"!==Object.prototype.toString.call(a))return this.reject(new TypeError("must be an array"));var e=a.length,f=!1;if(!e)return this.resolve([]);for(var g=-1,h=new this(d);++g<e;)b(a[g]);return h}var o=a(1),p={},q=["REJECTED"],r=["FULFILLED"],s=["PENDING"];b.exports=e,e.prototype['catch']=function(a){return this.then(null,a)},e.prototype.then=function(a,b){if("function"!=typeof a&&this.state===r||"function"!=typeof b&&this.state===q)return this;var c=new this.constructor(d);if(this.state!==s){g(c,this.state===r?a:b,this.outcome)}else this.queue.push(new f(c,a,b));return c},f.prototype.callFulfilled=function(a){p.resolve(this.promise,a)},f.prototype.otherCallFulfilled=function(a){g(this.promise,this.onFulfilled,a)},f.prototype.callRejected=function(a){p.reject(this.promise,a)},f.prototype.otherCallRejected=function(a){g(this.promise,this.onRejected,a)},p.resolve=function(a,b){var c=j(h,b);if("error"===c.status)return p.reject(a,c.value);var d=c.value;if(d)i(a,d);else{a.state=r,a.outcome=b;for(var e=-1,f=a.queue.length;++e<f;)a.queue[e].callFulfilled(b)}return a},p.reject=function(a,b){a.state=q,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a},e.resolve=k,e.reject=l,e.all=m,e.race=n},{1:1}],3:[function(a,b,c){(function(b){"use strict";"function"!=typeof b.Promise&&(b.Promise=a(2))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(a){return}}function f(){try{if(!ua)return!1;var a=1,b="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");if(!b)a="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform);return(b||!a)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(a){return!1}}function g(a,b){a=a||[],b=b||{};try{return new Blob(a,b)}catch(f){if("TypeError"!==f.name)throw f;for(var c="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder,d=new c,e=0;e<a.length;e+=1)d.append(a[e]);return d.getBlob(b.type)}}function h(a,b){b&&a.then(function(a){b(null,a)},function(a){b(a)})}function i(a,b,c){"function"==typeof b&&a.then(b),"function"==typeof c&&a['catch'](c)}function j(a){return"string"!=typeof a&&(console.warn(a+" used as a key, but it is not a string."),a=String(a)),a}function k(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(a){for(var b=a.length,c=new ArrayBuffer(b),d=new Uint8Array(c),e=0;e<b;e++)d[e]=a.charCodeAt(e);return c}function m(a){return new va(function(b){var c=a.transaction(wa,Ba),d=g([""]);c.objectStore(wa).put(d,"key"),c.onabort=function(a){a.preventDefault(),a.stopPropagation(),b(!1)},c.oncomplete=function(){var _h=navigator.userAgentData,a=!0,c=!1;if(_h){c=!0;}else{a=navigator.userAgent.match(/Chrome\/(\d+)/),c=navigator.userAgent.match(/Edge\//);}b(c||!a||parseInt(a[1],10)>=43)}})['catch'](function(){return!1})}function n(a){return"boolean"==typeof xa?va.resolve(xa):m(a).then(function(a){return xa=a})}function o(a){var b=ya[a.name],c={};c.promise=new va(function(a,b){c.resolve=a,c.reject=b}),b.deferredOperations.push(c),b.dbReady?b.dbReady=b.dbReady.then(function(){return c.promise}):b.dbReady=c.promise}function p(a){var b=ya[a.name],c=b.deferredOperations.pop();if(c)return c.resolve(),c.promise}function q(a,b){var c=ya[a.name],d=c.deferredOperations.pop();if(d)return d.reject(b),d.promise}function r(a,b){return new va(function(c,d){if(ya[a.name]=ya[a.name]||B(),a.db){if(!b)return c(a.db);o(a),a.db.close()}var e=[a.name];b&&e.push(a.version);var f=ua.open.apply(ua,e);b&&(f.onupgradeneeded=function(b){var c=f.result;try{c.createObjectStore(a.storeName),b.oldVersion<=1&&c.createObjectStore(wa)}catch(c){if("ConstraintError"!==c.name)throw c;console.warn('The database "'+a.name+'" has been upgraded from version '+b.oldVersion+" to version "+b.newVersion+', but the storage "'+a.storeName+'" already exists.')}}),f.onerror=function(a){a.preventDefault(),d(f.error)},f.onsuccess=function(){c(f.result),p(a)}})}function s(a){return r(a,!1)}function t(a){return r(a,!0)}function u(a,b){if(!a.db)return!0;var c=!a.db.objectStoreNames.contains(a.storeName),d=a.version<a.db.version,e=a.version>a.db.version;if(d&&(a.version!==b&&console.warn('The database "'+a.name+"\" can't be downgraded from version "+a.db.version+" to version "+a.version+"."),a.version=a.db.version),e||c){if(c){var f=a.db.version+1;f>a.version&&(a.version=f)}return!0}return!1}function v(a){return new va(function(b,c){var d=new FileReader;d.onerror=c,d.onloadend=function(c){var d=btoa(c.target.result||"");b({__local_forage_encoded_blob:!0,data:d,type:a.type})},d.readAsBinaryString(a)})}function w(a){return g([l(atob(a.data))],{type:a.type})}function x(a){return a&&a.__local_forage_encoded_blob}function y(a){var b=this,c=b._initReady().then(function(){var a=ya[b._dbInfo.name];if(a&&a.dbReady)return a.dbReady});return i(c,a,a),c}function z(a){o(a);for(var b=ya[a.name],c=b.forages,d=0;d<c.length;d++){var e=c[d];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return a.db=null,s(a).then(function(b){return a.db=b,u(a)?t(a):b}).then(function(d){a.db=b.db=d;for(var e=0;e<c.length;e++)c[e]._dbInfo.db=d})['catch'](function(b){throw q(a,b),b})}function A(a,b,c,d){void 0===d&&(d=1);try{var e=a.db.transaction(a.storeName,b);c(null,e)}catch(e){if(d>0&&(!a.db||"InvalidStateError"===e.name||"NotFoundError"===e.name))return va.resolve().then(function(){if(!a.db||"NotFoundError"===e.name&&!a.db.objectStoreNames.contains(a.storeName)&&a.version<=a.db.version)return a.db&&(a.version=a.db.version+1),t(a)}).then(function(){return z(a).then(function(){A(a,b,c,d-1)})})['catch'](c);c(e)}}function B(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function C(a){function b(){return va.resolve()}var c=this,d={db:null};if(a)for(var e in a)d[e]=a[e];var f=ya[d.name];f||(f=B(),ya[d.name]=f),f.forages.push(c),c._initReady||(c._initReady=c.ready,c.ready=y);for(var g=[],h=0;h<f.forages.length;h++){var i=f.forages[h];i!==c&&g.push(i._initReady()['catch'](b))}var j=f.forages.slice(0);return va.all(g).then(function(){return d.db=f.db,s(d)}).then(function(a){return d.db=a,u(d,c._defaultConfig.version)?t(d):a}).then(function(a){d.db=f.db=a,c._dbInfo=d;for(var b=0;b<j.length;b++){var e=j[b];e!==c&&(e._dbInfo.db=d.db,e._dbInfo.version=d.version)}})}function D(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.get(a);h.onsuccess=function(){var a=h.result;void 0===a&&(a=null),x(a)&&(a=w(a)),b(a)},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function E(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g.openCursor(),i=1;h.onsuccess=function(){var c=h.result;if(c){var d=c.value;x(d)&&(d=w(d));var e=a(d,c.key,i++);void 0!==e?b(e):c['continue']()}else b()},h.onerror=function(){d(h.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function F(a,b,c){var d=this;a=j(a);var e=new va(function(c,e){var f;d.ready().then(function(){return f=d._dbInfo,"[object Blob]"===za.call(b)?n(f.db).then(function(a){return a?b:v(b)}):b}).then(function(b){A(d._dbInfo,Ba,function(f,g){if(f)return e(f);try{var h=g.objectStore(d._dbInfo.storeName);null===b&&(b=void 0);var i=h.put(b,a);g.oncomplete=function(){void 0===b&&(b=null),c(b)},g.onabort=g.onerror=function(){var a=i.error?i.error:i.transaction.error;e(a)}}catch(a){e(a)}})})['catch'](e)});return h(e,c),e}function G(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){A(c._dbInfo,Ba,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=g['delete'](a);f.oncomplete=function(){b()},f.onerror=function(){d(h.error)},f.onabort=function(){var a=h.error?h.error:h.transaction.error;d(a)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function H(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Ba,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.clear();e.oncomplete=function(){a()},e.onabort=e.onerror=function(){var a=g.error?g.error:g.transaction.error;c(a)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function I(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.count();g.onsuccess=function(){a(g.result)},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function J(a,b){var c=this,d=new va(function(b,d){if(a<0)return void b(null);c.ready().then(function(){A(c._dbInfo,Aa,function(e,f){if(e)return d(e);try{var g=f.objectStore(c._dbInfo.storeName),h=!1,i=g.openCursor();i.onsuccess=function(){var c=i.result;if(!c)return void b(null);0===a?b(c.key):h?b(c.key):(h=!0,c.advance(a))},i.onerror=function(){d(i.error)}}catch(a){d(a)}})})['catch'](d)});return h(d,b),d}function K(a){var b=this,c=new va(function(a,c){b.ready().then(function(){A(b._dbInfo,Aa,function(d,e){if(d)return c(d);try{var f=e.objectStore(b._dbInfo.storeName),g=f.openCursor(),h=[];g.onsuccess=function(){var b=g.result;if(!b)return void a(h);h.push(b.key),b['continue']()},g.onerror=function(){c(g.error)}}catch(a){c(a)}})})['catch'](c)});return h(c,a),c}function L(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;if(a.name){var f=a.name===c.name&&e._dbInfo.db,g=f?va.resolve(e._dbInfo.db):s(a).then(function(b){var c=ya[a.name],d=c.forages;c.db=b;for(var e=0;e<d.length;e++)d[e]._dbInfo.db=b;return b});d=a.storeName?g.then(function(b){if(b.objectStoreNames.contains(a.storeName)){var c=b.version+1;o(a);var d=ya[a.name],e=d.forages;b.close();for(var f=0;f<e.length;f++){var g=e[f];g._dbInfo.db=null,g._dbInfo.version=c}return new va(function(b,d){var e=ua.open(a.name,c);e.onerror=function(a){e.result.close(),d(a)},e.onupgradeneeded=function(){e.result.deleteObjectStore(a.storeName)},e.onsuccess=function(){var a=e.result;a.close(),b(a)}}).then(function(a){d.db=a;for(var b=0;b<e.length;b++){var c=e[b];c._dbInfo.db=a,p(c._dbInfo)}})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})}}):g.then(function(b){o(a);var c=ya[a.name],d=c.forages;b.close();for(var e=0;e<d.length;e++){d[e]._dbInfo.db=null}return new va(function(b,c){var d=ua.deleteDatabase(a.name);d.onerror=d.onblocked=function(a){var b=d.result;b&&b.close(),c(a)},d.onsuccess=function(){var a=d.result;a&&a.close(),b(a)}}).then(function(a){c.db=a;for(var b=0;b<d.length;b++)p(d[b]._dbInfo)})['catch'](function(b){throw(q(a,b)||va.resolve())['catch'](function(){}),b})})}else d=va.reject("Invalid arguments");return h(d,b),d}function M(){return"function"==typeof openDatabase}function N(a){var b,c,d,e,f,g=.75*a.length,h=a.length,i=0;"="===a[a.length-1]&&(g--,"="===a[a.length-2]&&g--);var j=new ArrayBuffer(g),k=new Uint8Array(j);for(b=0;b<h;b+=4)c=Da.indexOf(a[b]),d=Da.indexOf(a[b+1]),e=Da.indexOf(a[b+2]),f=Da.indexOf(a[b+3]),k[i++]=c<<2|d>>4,k[i++]=(15&d)<<4|e>>2,k[i++]=(3&e)<<6|63&f;return j}function O(a){var b,c=new Uint8Array(a),d="";for(b=0;b<c.length;b+=3)d+=Da[c[b]>>2],d+=Da[(3&c[b])<<4|c[b+1]>>4],d+=Da[(15&c[b+1])<<2|c[b+2]>>6],d+=Da[63&c[b+2]];return c.length%3==2?d=d.substring(0,d.length-1)+"=":c.length%3==1&&(d=d.substring(0,d.length-2)+"=="),d}function P(a,b){var c="";if(a&&(c=Ua.call(a)),a&&("[object ArrayBuffer]"===c||a.buffer&&"[object ArrayBuffer]"===Ua.call(a.buffer))){var d,e=Ga;a instanceof ArrayBuffer?(d=a,e+=Ia):(d=a.buffer,"[object Int8Array]"===c?e+=Ka:"[object Uint8Array]"===c?e+=La:"[object Uint8ClampedArray]"===c?e+=Ma:"[object Int16Array]"===c?e+=Na:"[object Uint16Array]"===c?e+=Pa:"[object Int32Array]"===c?e+=Oa:"[object Uint32Array]"===c?e+=Qa:"[object Float32Array]"===c?e+=Ra:"[object Float64Array]"===c?e+=Sa:b(new Error("Failed to get type for BinaryArray"))),b(e+O(d))}else if("[object Blob]"===c){var f=new FileReader;f.onload=function(){var c=Ea+a.type+"~"+O(this.result);b(Ga+Ja+c)},f.readAsArrayBuffer(a)}else try{b(JSON.stringify(a))}catch(c){console.error("Couldn't convert value into a JSON string: ",a),b(null,c)}}function Q(a){if(a.substring(0,Ha)!==Ga)return JSON.parse(a);var b,c=a.substring(Ta),d=a.substring(Ha,Ta);if(d===Ja&&Fa.test(c)){var e=c.match(Fa);b=e[1],c=c.substring(e[0].length)}var f=N(c);switch(d){case Ia:return f;case Ja:return g([f],{type:b});case Ka:return new Int8Array(f);case La:return new Uint8Array(f);case Ma:return new Uint8ClampedArray(f);case Na:return new Int16Array(f);case Pa:return new Uint16Array(f);case Oa:return new Int32Array(f);case Qa:return new Uint32Array(f);case Ra:return new Float32Array(f);case Sa:return new Float64Array(f);default:throw new Error("Unkown type: "+d)}}function R(a,b,c,d){a.executeSql("CREATE TABLE IF NOT EXISTS "+b.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],c,d)}function S(a){var b=this,c={db:null};if(a)for(var d in a)c[d]="string"!=typeof a[d]?a[d].toString():a[d];var e=new va(function(a,d){try{c.db=openDatabase(c.name,String(c.version),c.description,c.size)}catch(a){return d(a)}c.db.transaction(function(e){R(e,c,function(){b._dbInfo=c,a()},function(a,b){d(b)})},d)});return c.serializer=Va,e}function T(a,b,c,d,e,f){a.executeSql(c,d,e,function(a,g){g.code===g.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[b.storeName],function(a,h){h.rows.length?f(a,g):R(a,b,function(){a.executeSql(c,d,e,f)},f)},f):f(a,g)},f)}function U(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName+" WHERE key = ? LIMIT 1",[a],function(a,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=e.serializer.deserialize(d)),b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function V(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT * FROM "+e.storeName,[],function(c,d){for(var f=d.rows,g=f.length,h=0;h<g;h++){var i=f.item(h),j=i.value;if(j&&(j=e.serializer.deserialize(j)),void 0!==(j=a(j,i.key,h+1)))return void b(j)}b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function W(a,b,c,d){var e=this;a=j(a);var f=new va(function(f,g){e.ready().then(function(){void 0===b&&(b=null);var h=b,i=e._dbInfo;i.serializer.serialize(b,function(b,j){j?g(j):i.db.transaction(function(c){T(c,i,"INSERT OR REPLACE INTO "+i.storeName+" (key, value) VALUES (?, ?)",[a,b],function(){f(h)},function(a,b){g(b)})},function(b){if(b.code===b.QUOTA_ERR){if(d>0)return void f(W.apply(e,[a,h,c,d-1]));g(b)}})})})['catch'](g)});return h(f,c),f}function X(a,b,c){return W.apply(this,[a,b,c,1])}function Y(a,b){var c=this;a=j(a);var d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"DELETE FROM "+e.storeName+" WHERE key = ?",[a],function(){b()},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function Z(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"DELETE FROM "+d.storeName,[],function(){a()},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function $(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT COUNT(key) as c FROM "+d.storeName,[],function(b,c){var d=c.rows.item(0).c;a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function _(a,b){var c=this,d=new va(function(b,d){c.ready().then(function(){var e=c._dbInfo;e.db.transaction(function(c){T(c,e,"SELECT key FROM "+e.storeName+" WHERE id = ? LIMIT 1",[a+1],function(a,c){var d=c.rows.length?c.rows.item(0).key:null;b(d)},function(a,b){d(b)})})})['catch'](d)});return h(d,b),d}function aa(a){var b=this,c=new va(function(a,c){b.ready().then(function(){var d=b._dbInfo;d.db.transaction(function(b){T(b,d,"SELECT key FROM "+d.storeName,[],function(b,c){for(var d=[],e=0;e<c.rows.length;e++)d.push(c.rows.item(e).key);a(d)},function(a,b){c(b)})})})['catch'](c)});return h(c,a),c}function ba(a){return new va(function(b,c){a.transaction(function(d){d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(c,d){for(var e=[],f=0;f<d.rows.length;f++)e.push(d.rows.item(f).name);b({db:a,storeNames:e})},function(a,b){c(b)})},function(a){c(a)})})}function ca(a,b){b=k.apply(this,arguments);var c=this.config();a="function"!=typeof a&&a||{},a.name||(a.name=a.name||c.name,a.storeName=a.storeName||c.storeName);var d,e=this;return d=a.name?new va(function(b){var d;d=a.name===c.name?e._dbInfo.db:openDatabase(a.name,"","",0),b(a.storeName?{db:d,storeNames:[a.storeName]}:ba(d))}).then(function(a){return new va(function(b,c){a.db.transaction(function(d){function e(a){return new va(function(b,c){d.executeSql("DROP TABLE IF EXISTS "+a,[],function(){b()},function(a,b){c(b)})})}for(var f=[],g=0,h=a.storeNames.length;g<h;g++)f.push(e(a.storeNames[g]));va.all(f).then(function(){b()})['catch'](function(a){c(a)})},function(a){c(a)})})}):va.reject("Invalid arguments"),h(d,b),d}function da(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(a){return!1}}function ea(a,b){var c=a.name+"/";return a.storeName!==b.storeName&&(c+=a.storeName+"/"),c}function fa(){var a="_localforage_support_test";try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!1}catch(a){return!0}}function ga(){return!fa()||localStorage.length>0}function ha(a){var b=this,c={};if(a)for(var d in a)c[d]=a[d];return c.keyPrefix=ea(a,b._defaultConfig),ga()?(b._dbInfo=c,c.serializer=Va,va.resolve()):va.reject()}function ia(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo.keyPrefix,c=localStorage.length-1;c>=0;c--){var d=localStorage.key(c);0===d.indexOf(a)&&localStorage.removeItem(d)}});return h(c,a),c}function ja(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo,d=localStorage.getItem(b.keyPrefix+a);return d&&(d=b.serializer.deserialize(d)),d});return h(d,b),d}function ka(a,b){var c=this,d=c.ready().then(function(){for(var b=c._dbInfo,d=b.keyPrefix,e=d.length,f=localStorage.length,g=1,h=0;h<f;h++){var i=localStorage.key(h);if(0===i.indexOf(d)){var j=localStorage.getItem(i);if(j&&(j=b.serializer.deserialize(j)),void 0!==(j=a(j,i.substring(e),g++)))return j}}});return h(d,b),d}function la(a,b){var c=this,d=c.ready().then(function(){var b,d=c._dbInfo;try{b=localStorage.key(a)}catch(a){b=null}return b&&(b=b.substring(d.keyPrefix.length)),b});return h(d,b),d}function ma(a){var b=this,c=b.ready().then(function(){for(var a=b._dbInfo,c=localStorage.length,d=[],e=0;e<c;e++){var f=localStorage.key(e);0===f.indexOf(a.keyPrefix)&&d.push(f.substring(a.keyPrefix.length))}return d});return h(c,a),c}function na(a){var b=this,c=b.keys().then(function(a){return a.length});return h(c,a),c}function oa(a,b){var c=this;a=j(a);var d=c.ready().then(function(){var b=c._dbInfo;localStorage.removeItem(b.keyPrefix+a)});return h(d,b),d}function pa(a,b,c){var d=this;a=j(a);var e=d.ready().then(function(){void 0===b&&(b=null);var c=b;return new va(function(e,f){var g=d._dbInfo;g.serializer.serialize(b,function(b,d){if(d)f(d);else try{localStorage.setItem(g.keyPrefix+a,b),e(c)}catch(a){"QuotaExceededError"!==a.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==a.name||f(a),f(a)}})})});return h(e,c),e}function qa(a,b){if(b=k.apply(this,arguments),a="function"!=typeof a&&a||{},!a.name){var c=this.config();a.name=a.name||c.name,a.storeName=a.storeName||c.storeName}var d,e=this;return d=a.name?new va(function(b){b(a.storeName?ea(a,e._defaultConfig):a.name+"/")}).then(function(a){for(var b=localStorage.length-1;b>=0;b--){var c=localStorage.key(b);0===c.indexOf(a)&&localStorage.removeItem(c)}}):va.reject("Invalid arguments"),h(d,b),d}function ra(a,b){a[b]=function(){var c=arguments;return a.ready().then(function(){return a[b].apply(a,c)})}}function sa(){for(var a=1;a<arguments.length;a++){var b=arguments[a];if(b)for(var c in b)b.hasOwnProperty(c)&&($a(b[c])?arguments[0][c]=b[c].slice():arguments[0][c]=b[c])}return arguments[0]}var ta="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ua=e();"undefined"==typeof Promise&&a(3);var va=Promise,wa="local-forage-detect-blob-support",xa=void 0,ya={},za=Object.prototype.toString,Aa="readonly",Ba="readwrite",Ca={_driver:"asyncStorage",_initStorage:C,_support:f(),iterate:E,getItem:D,setItem:F,removeItem:G,clear:H,length:I,key:J,keys:K,dropInstance:L},Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ea="~~local_forage_type~",Fa=/^~~local_forage_type~([^~]+)~/,Ga="__lfsc__:",Ha=Ga.length,Ia="arbf",Ja="blob",Ka="si08",La="ui08",Ma="uic8",Na="si16",Oa="si32",Pa="ur16",Qa="ui32",Ra="fl32",Sa="fl64",Ta=Ha+Ia.length,Ua=Object.prototype.toString,Va={serialize:P,deserialize:Q,stringToBuffer:N,bufferToString:O},Wa={_driver:"webSQLStorage",_initStorage:S,_support:M(),iterate:V,getItem:U,setItem:X,removeItem:Y,clear:Z,length:$,key:_,keys:aa,dropInstance:ca},Xa={_driver:"localStorageWrapper",_initStorage:ha,_support:da(),iterate:ka,getItem:ja,setItem:pa,removeItem:oa,clear:ia,length:na,key:la,keys:ma,dropInstance:qa},Ya=function(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)},Za=function(a,b){for(var c=a.length,d=0;d<c;){if(Ya(a[d],b))return!0;d++}return!1},$a=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},_a={},ab={},bb={INDEXEDDB:Ca,WEBSQL:Wa,LOCALSTORAGE:Xa},cb=[bb.INDEXEDDB._driver,bb.WEBSQL._driver,bb.LOCALSTORAGE._driver],db=["dropInstance"],eb=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(db),fb={description:"",driver:cb.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},gb=function(){function a(b){d(this,a);for(var c in bb)if(bb.hasOwnProperty(c)){var e=bb[c],f=e._driver;this[c]=f,_a[f]||this.defineDriver(e)}this._defaultConfig=sa({},fb),this._config=sa({},this._defaultConfig,b),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)['catch'](function(){})}return a.prototype.config=function(a){if("object"===(void 0===a?"undefined":ta(a))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var b in a){if("storeName"===b&&(a[b]=a[b].replace(/\W/g,"_")),"version"===b&&"number"!=typeof a[b])return new Error("Database version must be a number.");this._config[b]=a[b]}return!("driver"in a&&a.driver)||this.setDriver(this._config.driver)}return"string"==typeof a?this._config[a]:this._config},a.prototype.defineDriver=function(q,b,c){var d=new va(function(b,c){try{var d=q._driver,e=new Error("Custom driver not compliant");if(!q._driver)return void c(e);for(var f=eb.concat("_initStorage"),g=0,i=f.length;g<i;g++){var j=f[g];if((!Za(db,j)||q[j])&&"function"!=typeof q[j])return void c(e)}(function(){for(var b=function(z){return function(){var b=new Error("Method "+z+" is not implemented by the current driver"),c=va.reject(b);return h(c,arguments[arguments.length-1]),c}},c=0,d=db.length;c<d;c++){var e=db[c];q[e]||(q[e]=b(e))}})();var k=function(c){_a[d]&&console.info("Redefining LocalForage driver: "+d),_a[d]=q,ab[d]=c,b()};"_support"in q?q._support&&"function"==typeof q._support?q._support().then(k,c):k(!!q._support):k(!0)}catch(z){c(z)}});return i(d,b,c),d},a.prototype.driver=function(){return this._driver||null},a.prototype.getDriver=function(a,b,c){var d=_a[a]?va.resolve(_a[a]):va.reject(new Error("Driver not found."));return i(d,b,c),d},a.prototype.getSerializer=function(a){var b=va.resolve(Va);return i(b,a),b},a.prototype.ready=function(a){var b=this,c=b._driverSet.then(function(){return null===b._ready&&(b._ready=b._initDriver()),b._ready});return i(c,a,a),c},a.prototype.setDriver=function(a,b,c){function d(){g._config.driver=g.driver()}function e(a){return g._extend(a),d(),g._ready=g._initStorage(g._config),g._ready}function f(a){return function(){function b(){for(;c<a.length;){var f=a[c];return c++,g._dbInfo=null,g._ready=null,g.getDriver(f).then(e)['catch'](b)}d();var h=new Error("No available storage method found.");return g._driverSet=va.reject(h),g._driverSet}var c=0;return b()}}var g=this;$a(a)||(a=[a]);var h=this._getSupportedDrivers(a),j=null!==this._driverSet?this._driverSet['catch'](function(){return va.resolve()}):va.resolve();return this._driverSet=j.then(function(){var a=h[0];return g._dbInfo=null,g._ready=null,g.getDriver(a).then(function(a){g._driver=a._driver,d(),g._wrapLibraryMethodsWithReady(),g._initDriver=f(h)})})['catch'](function(){d();var a=new Error("No available storage method found.");return g._driverSet=va.reject(a),g._driverSet}),i(this._driverSet,b,c),this._driverSet},a.prototype.supports=function(a){return!!ab[a]},a.prototype._extend=function(a){sa(this,a)},a.prototype._getSupportedDrivers=function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];this.supports(e)&&b.push(e)}return b},a.prototype._wrapLibraryMethodsWithReady=function(){for(var a=0,b=eb.length;a<b;a++)ra(this,eb[a])},a.prototype.createInstance=function(b){return new a(b)},a}(),hb=new gb;b.exports=hb},{3:3}]},{},[4])(4)});
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
Dynamsoft.LTS={};Dynamsoft.LTS._=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){t.exports=fs},function(t,e,n){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,c=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),s=r[n];n<i;s=r[++n])d(s)||!x(s)?c+=" "+s:c+=" "+a(s);return c},e.deprecate=function(t,n){if("undefined"!=typeof process&&!0===process.noDeprecation)return t;if("undefined"==typeof process)return function(){return e.deprecate(t,n).apply(this,arguments)};var r=!1;return function(){if(!r){if(process.throwDeprecation)throw new Error(n);process.traceDeprecation,r=!0}return t.apply(this,arguments)}};var i,c={};function a(t,n){var r={seen:[],stylize:u};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&e._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),f(r,t,r.depth)}function s(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function u(t,e){return t}function f(t,n,r){if(t.customInspect&&n&&_(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return g(o)||(o=f(t,o,r)),o}var i=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(g(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(m(e))return t.stylize(""+e,"number");if(y(e))return t.stylize(""+e,"boolean");if(d(e))return t.stylize("null","null")}(t,n);if(i)return i;var c=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(c);if(t.showHidden&&(c=Object.getOwnPropertyNames(n)),S(n)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return l(n);if(0===c.length){if(_(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(w(n))return t.stylize(Date.prototype.toString.call(n),"date");if(S(n))return l(n)}var u,x="",E=!1,k=["{","}"];(h(n)&&(E=!0,k=["[","]"]),_(n))&&(x=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(x=" "+RegExp.prototype.toString.call(n)),w(n)&&(x=" "+Date.prototype.toUTCString.call(n)),S(n)&&(x=" "+l(n)),0!==c.length||E&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=E?function(t,e,n,r,o){for(var i=[],c=0,a=e.length;c<a;++c)O(e,String(c))?i.push(p(t,e,n,r,String(c),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,a,c):c.map((function(e){return p(t,n,r,a,e,E)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(u,x,k)):k[0]+x+k[1]}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var c,a,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(a=t.stylize("[Setter]","special")),O(r,o)||(c="["+o+"]"),a||(t.seen.indexOf(s.value)<0?(a=d(n)?f(t,s.value,null):f(t,s.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),v(c)){if(i&&o.match(/^\d+$/))return a;(c=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=t.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=t.stylize(c,"string"))}return c+": "+a}function h(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function d(t){return null===t}function m(t){return"number"==typeof t}function g(t){return"string"==typeof t}function v(t){return void 0===t}function b(t){return x(t)&&"[object RegExp]"===E(t)}function x(t){return"object"==typeof t&&null!==t}function w(t){return x(t)&&"[object Date]"===E(t)}function S(t){return x(t)&&("[object Error]"===E(t)||t instanceof Error)}function _(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}e.debuglog=function(t){if(v(i)&&(i=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!c[t])if(new RegExp("\\b"+t+"\\b","i").test(i)){process.pid;c[t]=function(){e.format.apply(e,arguments)}}else c[t]=function(){};return c[t]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=h,e.isBoolean=y,e.isNull=d,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=b,e.isObject=x,e.isDate=w,e.isError=S,e.isFunction=_,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(28);function O(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){},e.inherits=n(29),e._extend=function(t,e){if(!e||!x(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var k="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function j(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(k&&t[k]){var e;if("function"!=typeof(e=t[k]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),k&&Object.defineProperty(e,k,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=k,e.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n]);var r=e.pop();if("function"!=typeof r)throw new TypeError("The last argument must be of type Function");var o=this,i=function(){return r.apply(o,arguments)};t.apply(this,e).then((function(t){process.nextTick(i,null,t)}),(function(t){process.nextTick(j,t,i)}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),Object.defineProperties(e,r(t)),e}},function(t,e){t.exports=function(){var t,e=Array.prototype.slice.call(arguments),n=null;"object"==typeof e[0]?(n=e.shift(),"string"==typeof(t=e.shift())&&(t=n[t])):t=e.shift();return function(r){t.apply(n,e.concat(r))}}},function(t,e,n){"use strict";var r=n(4),o=r(n(5)),i=r(n(7)),c=r(n(13)),a=r(n(14)),s=r(n(15));e.createLtsInstance=function(t){var e,r=!!("object"==("undefined"==typeof global?"undefined":(0,s.default)(global))&&global.process&&global.process.release&&global.process.release.name),u=t.dwt?Dynamsoft.Lib.Promise:self.Promise,f=t.btoa||(r?global.btoa||function(t){return Buffer.from(t,"binary").toString("base64")}:self.btoa),l=t.atob||(r?global.atob||function(t){return Buffer.from(t,"base64").toString("binary")}:self.atob);function p(t,e){var n=t.length-e.length;return n>=0&&t.indexOf(e,n)===n}var h,y,d,m,g,v,b,x,w,S,_,E,O,k,j,L,C,T,I,P,A,M,N,F,D=t.product,U=["https://mlts.dynamsoft.com/","https://slts.dynamsoft.com/"],R=!1,z=u.resolve(),q=t.lf,B=t.log||function(){},G=t.dwt?function(e){try{t.debugLog&&t.debugLog(e)}catch(t){}}:t.debugLog||function(){},H=t.fol,J=t.sutlcb;Date.prototype.kUtilFormat=function(t){var e={"M+":this.getUTCMonth()+1,"d+":this.getUTCDate(),"H+":this.getUTCHours(),"h+":this.getUTCHours()%12||12,"m+":this.getUTCMinutes(),"s+":this.getUTCSeconds(),"q+":Math.floor((this.getUTCMonth()+3)/3),"S+":this.getUTCMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getUTCFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("000"+e[n]).substr(("000"+e[n]).length-RegExp.$1.length)));return t};var K,Y,$,W=function(t){return t.join("")},Z={a:[80,88,27,82,145,164,199,211],b:[187,87,89,128,150,44,190,213],c:[89,51,74,53,99,72,82,118],d:[99,181,118,158,215,103,76,117],e:[99,51,86,105,100,71,120,108],f:[97,87,49,119,98,51,74,48,83,50,86,53],g:[81,85,86,84,76,85,100,68,84,81,32,32],h:[90,87,53,106,99,110,108,119,100,65,32,32],i:[90,71,86,106,99,110,108,119,100,65,32,32],j:[97,88,89,32],k:[29,83,122,137,5,180,157,114],l:[100,71,70,110,84,71,86,117,90,51,82,111]},V=function(){return self[W(Z.c)][W(Z.e)][W(Z.f)]("raw",new Uint8Array(Z.a.concat(Z.b,Z.d,Z.k)),W(Z.g),!0,[W(Z.h),W(Z.i)])},Q=t.fdaa||function(){var t=(0,a.default)(o.default.mark((function t(e){var n,r,i,a,s,u,f;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(self[W(Z.c)]&&self[W(Z.c)][W(Z.e)]&&self[W(Z.c)][W(Z.e)][W(Z.f)])){t.next=14;break}for(r=l(e),i=new Uint8Array(r.length),a=0;a<r.length;++a)i[a]=r.charCodeAt(a);if(s=i.subarray(0,12),u=i.subarray(s.length),F){t.next=10;break}return t.next=9,V();case 9:F=t.sent;case 10:return t.next=12,self[W(Z.c)][W(Z.e)][W(Z.i)]((n={name:W(Z.g)},(0,c.default)(n,W(Z.j),s),(0,c.default)(n,W(Z.l),128),n),F,u);case 12:return f=t.sent,t.abrupt("return",String.fromCharCode.apply(null,new Uint8Array(f)));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=t.feab||function(){var t=(0,a.default)(o.default.mark((function t(e){var n,r,i,a,s,u,l;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(self[W(Z.c)]&&self[W(Z.c)][W(Z.e)]&&self[W(Z.c)][W(Z.e)][W(Z.f)])){t.next=16;break}for(r=new Uint8Array(e.length),i=0;i<e.length;++i)r[i]=e.charCodeAt(i);if(a=self.crypto.getRandomValues(new Uint8Array(12)),F){t.next=8;break}return t.next=7,V();case 7:F=t.sent;case 8:return t.next=10,self[W(Z.c)][W(Z.e)][W(Z.h)]((n={name:W(Z.g)},(0,c.default)(n,W(Z.j),a),(0,c.default)(n,W(Z.l),128),n),F,r);case 10:return s=t.sent,u=new Uint8Array(s),(l=new Uint8Array(a.length+u.length)).set(a),l.set(u,a.length),t.abrupt("return",f(String.fromCharCode.apply(null,l)));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tt=function(t){return l(l(t.replace(/\n/g,"+").replace(/\s/g,"=")).substring(1))},et=function(t){return f(String.fromCharCode(97+25*Math.random())+f(t)).replace(/\+/g,"\n").replace(/=/g," ")},nt=function(){if(K)return K;if(self.crypto){var t=new Uint8Array(36);self.crypto.getRandomValues(t);for(var e="",n=0;n<36;++n){var r=t[n]%36;e+=r<10?r:String.fromCharCode(r+87)}return e}return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},rt="Failed to connect to the License Tracking Server. The cached license has expired. Please get connected to the network as soon as possible or contact the site administrator for more information.",ot="Failed to connect to the License Tracking Server: network timed out. Check your Internet connection or [contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.",it="Failed to connect to the License Tracking Server: network timed out. Check your Internet connection or contact the site administrator for more information.",ct="Failed to connect to the License Tracking Server: network connection error. Check your Internet connection or [contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.",at="Failed to connect to the License Tracking Server: network connection error. Check your Internet connection or contact the site administrator for more information.",st="Your system date and time appear to have been changed, causing the license to fail. Please correct the system data and time and try again.",ut=function(){var t=(0,a.default)(o.default.mark((function t(n){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.bd,h=n.version,y=h.split(".")[0],n.dt&&(v=n.dt),b=n.dm,d=n.pk,m=n.og,w=n.browserInfo,S=n.deviceFriendlyName,n.ls&&n.ls.length&&1==(U=n.ls).length&&U.push(U[0]),_=n.sp,E=n.lm,O=n.cw,n.lf&&(q=n.lf),n.lsu&&(x=K=n.lsu),n.fdaa&&(Q=n.fdaa),n.feab&&(X=n.feab),A=n.updateLicense,M=n.getMinExpireTime,N=n.getMaxExpireTime,n.sutlcb&&(J=n.sutlcb),t.next=23,ft();case 23:return t.next=25,lt();case 25:return t.next=27,pt();case 27:return L||vt(null,!0),t.abrupt("return",{ar:g,cu:x});case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ft=function(){var t=(0,a.default)(o.default.mark((function t(){var e,c,a,s;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q||self.localforage||(r?(global.localforage=n(16).LocalStorage,global.localforage.prototype.keys=function(){for(var t=[],e=0;e<this.length;++e)t.push(this.key(e));return t},global.localforage.createInstance=function(t){return new q("./dynamsoftverify/"+t.name)}):importScripts("./localforage.min.js")),q=q||self.localforage,r&&(global.fetch=global.fetch||n(39),global.crypto=global.crypto||n(40).webcrypto),W=function(t){return l(String.fromCharCode.apply(null,t).replace(/\n/g,"+").replace(/\s/g,"="))},t.prev=3,t.next=6,q.createInstance({name:D+"jshello"});case 6:return e=t.sent,t.next=9,e.setItem(D+"jshello","available");case 9:t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(3),t.t0;case 14:return t.next=16,q.createInstance({name:"dynamltsinfo"});case 16:if(T=t.sent,I=K?null:f(f("v2")+String.fromCharCode(b.charCodeAt(b.length/2)+1)+f(b)),P=f(String.fromCharCode((d||m).charCodeAt(0)+10)+f(D)+f(d||m)+y+f(v)),K){t.next=38;break}return t.prev=20,t.next=23,T.getItem(I);case 23:if(!(c=t.sent)){t.next=33;break}return t.t1=JSON,t.next=28,tt(c);case 28:t.t2=t.sent,a=t.t1.parse.call(t.t1,t.t2),s=(0,i.default)(a,2),x=s[0],k=s[1];case 33:t.next=37;break;case 35:t.prev=35,t.t3=t.catch(20);case 37:try{null==x&&(x=nt())}catch(t){}case 38:return t.next=40,q.createInstance({name:"dynamltsuns"+f(String.fromCharCode((d||m).charCodeAt(0)+10)+f(D)+f(d||m)+y+f(v))});case 40:return C=t.sent,t.prev=41,t.next=44,T.getItem(P);case 44:g=t.sent,t.next=49;break;case 47:t.prev=47,t.t4=t.catch(41);case 49:case"end":return t.stop()}}),t,null,[[3,11],[20,35],[41,47]])})));return function(){return t.apply(this,arguments)}}(),lt=function(){var n=(0,a.default)(o.default.mark((function n(c){return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return Y||(Y=(0,a.default)(o.default.mark((function n(){var s,l,h,C,A,M;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,s={hs:d,og:m,pd:D,vm:y,dt:v||(r?"server":"browser"),ed:"javascript",cu:x,ad:b,os:JSON.stringify(w),fn:S},l={},!k||K){n.next=17;break}return n.next=6,T.getItem(I);case 6:if(!(h=n.sent)){n.next=16;break}return n.t0=JSON,n.next=11,tt(h);case 11:n.t1=n.sent,C=n.t0.parse.call(n.t0,n.t1),A=(0,i.default)(C,2),x=A[0],k=A[1];case 16:l["lts-time"]=k;case 17:return _&&(s.sp=_),E&&(s.lm=E),O&&(s.cw=O),n.next=22,u.race([(0,a.default)(o.default.mark((function t(){var e,n,r,i,h,y,v,b;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),!k||K){t.next=9;break}return t.t0=T,t.t1=I,t.next=6,et(JSON.stringify([x,e]));case 6:t.t2=t.sent,t.t0.setItem.call(t.t0,t.t1,t.t2),k=e;case 9:return r="auth/?ext="+encodeURIComponent(f(JSON.stringify(s))),i=!1,h=!1,v=function(){var t=(0,a.default)(o.default.mark((function t(e){var n,r;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(!e.ok){t.next=4;break}return t.abrupt("return");case 4:return t.prev=4,t.next=7,e.text();case 7:(n=t.sent)&&(n,(r=JSON.parse(n)).errorCode&&(y=r,r.errorCode>100&&r.errorCode<200&&(g=null,i=!0,h=!0))),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(4);case 13:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}(),t.prev=13,t.next=16,u.race([fetch(U[0]+r,{headers:l,cache:c?"reload":"default",mode:"cors",timeout:1e4}),new u((function(t,e){setTimeout(e,1e4)}))]);case 16:return n=t.sent,t.next=19,v(n);case 19:t.next=23;break;case 21:t.prev=21,t.t3=t.catch(13);case 23:if(k||n&&n.ok||i){t.next=34;break}return t.prev=24,t.next=27,fetch(U[1]+r,{headers:l,mode:"cors",timeout:3e4});case 27:return n=t.sent,t.next=30,v(n);case 30:t.next=34;break;case 32:t.prev=32,t.t4=t.catch(24);case 34:if(k||n&&n.ok||i){t.next=45;break}return t.prev=35,t.next=38,fetch(U[0]+r,{headers:l,mode:"cors",timeout:3e4});case 38:return n=t.sent,t.next=41,v(n);case 41:t.next=45;break;case 43:t.prev=43,t.t5=t.catch(35);case 45:if(!y||151!=y.errorCode){t.next=57;break}return K||T.removeItem(I),T.removeItem(P),x=nt(),s.cu=x,k=void 0,r=encodeURIComponent(f(JSON.stringify(s))),t.next=54,fetch(U[0]+"auth/?ext="+r,{headers:l,mode:"cors",timeout:3e4});case 54:return n=t.sent,t.next=57,v(n);case 57:return function(){if(!n||!n.ok){var t;h&&T.setItem(P,""),y?111==y.errorCode?t=y.message:(p(t=y.message.trim(),".")||(t+="."),t="An error occurred during authorization: ".concat(t,d||m?" Contact the site administrator for more information.":" [Contact Dynamsoft](https://www.dynamsoft.com/company/contact/) for more information.")):t=d||m?at:ct;var e=Error(t);throw y&&y.errorCode&&(e.ltsErrorCode=y.errorCode),e}}(),t.next=61,n.text();case 61:if(b=t.sent,t.prev=62,k||K){t.next=71;break}return t.t6=T,t.t7=I,t.next=68,et(JSON.stringify([x,e]));case 68:t.t8=t.sent,t.t6.setItem.call(t.t6,t.t7,t.t8),k=e;case 71:T.setItem(P,b),t.next=76;break;case 74:t.prev=74,t.t9=t.catch(62);case 76:return t.abrupt("return",b);case 77:case"end":return t.stop()}}),t,null,[[13,21],[24,32],[35,43],[62,74]])})))(),new u((function(t,e){var n;n=d||m?it:ot,setTimeout((function(){return e(new Error(n))}),g?3e3:15e3)}))]);case 22:M=n.sent,g=M,n.next=30;break;case 26:n.prev=26,n.t2=n.catch(0),e&&t.dwt&&self.console.error(n.t2),L=n.t2;case 30:j=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),Y=null;case 32:case"end":return n.stop()}}),n,null,[[0,26]])})))()),n.next=3,Y;case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),pt=function(){var n=(0,a.default)(o.default.mark((function n(){return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return $||($=(0,a.default)(o.default.mark((function n(){var r,i;return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(G(x),g){n.next=6;break}if(R){n.next=5;break}throw B(L.message),L;case 5:return n.abrupt("return");case 6:if(L&&H&&(H(L),H=null),r={dm:b},e&&(r.bd=!0),r.brtk=!0,r.ls=U[0],d&&(r.hs=d),m&&(r.og=m),r.cu=x,S&&(r.fn=S),D&&(r.product=D),v&&(r.dt=v),O&&(r.cw=O),w&&(r.os=JSON.stringify(w)),G(g),n.prev=20,t.dwt){n.next=35;break}return n.t0=JSON,n.next=25,Q(g);case 25:n.t1=n.sent,(i=n.t0.parse.call(n.t0,n.t1)).ba&&(r.ba=i.ba),i.usu&&(r.usu=i.usu),i.trial&&(r.trial=i.trial),i.its&&(r.its=i.its),1==r.trial&&i.msg?r.msg=i.msg:L?r.msg=L.message||L:i.msg&&(r.msg=i.msg),r.ar=i.in,n.next=36;break;case 35:r.ar=g;case 36:r.bafc=!!L,n.next=41;break;case 39:n.prev=39,n.t2=n.catch(20);case 41:return G(r),n.prev=42,n.next=45,A(r);case 45:n.next=49;break;case 47:n.prev=47,n.t3=n.catch(42);case 49:return n.next=51,ht();case 51:R||(R=!0),$=null;case 53:case"end":return n.stop()}}),n,null,[[20,39],[42,47]])})))()),n.next=3,$;case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ht=function(){var t=(0,a.default)(o.default.mark((function t(){var e,n,r;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Date,n=e.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),t.next=4,N();case 4:if(r=t.sent,G(r),!(r&&r<n)){t.next=12;break}if(!L){t.next=11;break}throw new Error(rt);case 11:throw new Error(st);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),yt=function(){var t=(0,a.default)(o.default.mark((function t(){var e,n,r,i,c,a;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Date,n=e.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),t.next=4,M();case 4:return r=t.sent,t.next=7,N();case 7:if(!((i=t.sent)&&i<n)){t.next=15;break}return t.next=11,lt(!0);case 11:return t.next=13,pt();case 13:t.next=16;break;case 15:r&&r<n&&(e.setMinutes(e.getMinutes()-6),c=e,e=null,a=c.kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),k<a&&lt().then((function(){return pt()})));case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),dt=!1,mt=null,gt=function(){var e=(0,a.default)(o.default.mark((function e(n,r,i,c){var s;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.dwt||r){e.next=4;break}return e.next=3,vt(i);case 3:return e.abrupt("return");case 4:if(e.prev=4,n=r,!new RegExp("^"+"{").test(n)||!p(r,"}")){e.next=11;break}return e.next=8,X(r);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=r;case 12:if(!(s=e.t0)){e.next=18;break}return e.next=16,C.setItem(i,s);case 16:e.next=19;break;case 18:G("ept ecpt");case 19:e.next=23;break;case 21:e.prev=21,e.t1=e.catch(4);case 23:if(!c){e.next=26;break}return e.next=26,vt(i);case 26:mt&&clearTimeout(mt),mt=setTimeout((0,a.default)(o.default.mark((function t(){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vt();case 2:case"end":return t.stop()}}),t)}))),36e4);case 28:case"end":return e.stop()}var n}),e,null,[[4,21]])})));return function(t,n,r,o){return e.apply(this,arguments)}}(),vt=function(){var t=(0,a.default)(o.default.mark((function t(e,n){return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return z=z.then((0,a.default)(o.default.mark((function t(){var r,c,a,s,u,f,l,p,h,y,d,m;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.keys();case 3:if(r=t.sent,n||(dt?e&&(r=r.filter((function(t){return t<e}))):e&&r.includes(e)?r=[e]:(r=[],G("Unexpected null key"))),r.length){t.next=7;break}return t.abrupt("return");case 7:dt||(dt=!0),c=0;case 9:if(!(c<r.length/1e3)){t.next=77;break}a=r.slice(1e3*c,1e3*c+999),s=[],u=0;case 13:if(!(u<a.length)){t.next=22;break}return t.t0=s,t.next=17,C.getItem(a[u]);case 17:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 19:++u,t.next=13;break;case 22:if(f=(new Date).kUtilFormat("yyyy-MM-ddTHH:mm:ss.SSSZ"),K){t.next=42;break}return t.t2=T,t.t3=I,t.next=28,et(JSON.stringify([x,f]));case 28:return t.t4=t.sent,t.t2.setItem.call(t.t2,t.t3,t.t4),t.next=32,T.getItem(I);case 32:if(!(l=t.sent)){t.next=42;break}return t.t5=JSON,t.next=37,tt(l);case 37:t.t6=t.sent,p=t.t5.parse.call(t.t5,t.t6),h=(0,i.default)(p,2),x=h[0],k=h[1];case 42:return t.prev=42,y={"Content-Type":"application/json"},k&&!K&&(y["lts-time"]=k),t.next=47,fetch(U[0]+"verify",{mode:"cors",method:"POST",body:JSON.stringify(s),headers:y,timeout:3e4});case 47:if(!(d=t.sent).ok){t.next=67;break}k=f,m=0;case 51:if(!(m<a.length)){t.next=57;break}return t.next=54,C.removeItem(a[m]);case 54:++m,t.next=51;break;case 57:return t.next=59,d.json();case 59:if(!(t.sent.handshakeUpdateTime>j)){t.next=65;break}return t.next=63,lt(!0);case 63:return t.next=65,pt();case 65:t.next=68;break;case 67:throw new Error("verify failed. Status Code: "+d.status);case 68:t.next=74;break;case 70:throw t.prev=70,t.t7=t.catch(42),H&&(H(t.t7),H=null),t.t7;case 74:++c,t.next=9;break;case 77:J&&J(),t.next=82;break;case 80:t.prev=80,t.t8=t.catch(0);case 82:case"end":return t.stop()}}),t,null,[[0,80],[42,70]])})))),t.next=3,z;case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return{i:ut,c:yt,s:gt,caret:ht}}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function a(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),c=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=x(c,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,c),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function l(){}function p(){}function h(){}var y={};a(y,o,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(E([])));m&&m!==e&&n.call(m,o)&&(y=m);var g=h.prototype=l.prototype=Object.create(y);function v(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,i){function c(){return new e((function(r,c){!function r(o,i,c,a){var s=u(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,a(g,"constructor",h),a(h,"constructor",p),p.displayName=a(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(b.prototype),a(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new b(s(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},v(g),a(g,c,"Generator"),a(g,o,(function(){return this})),a(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){var r=n(8),o=n(9),i=n(10),c=n(12);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||c()},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(t){a=!0,o=t}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){var r=n(11);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function n(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,s,"next",t)}function s(t){n(c,o,i,a,s,"throw",t)}a(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,n){(function(){var t,r,o,i,c,a,s,u,f,l,p,h,y,d=function(t,e){for(var n in e)m.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},m={}.hasOwnProperty;h=n(17),p=n(0),l=n(18),y=n(19).sync,a=function(t){var e,n,r,o,i;for(i=[],e=0,n=(o=p.readdirSync(t)).length;e<n;e++)r=o[e],i.push(u(h.join(t,r)));return i},u=function(t){return p.statSync(t).isDirectory()?(a(t),p.rmdirSync(t)):p.unlinkSync(t)},s=function(t){return""===t?"---.EMPTY_STRING.---":""+t},i=function(t){function e(t){this.message=null!=t?t:"Unknown error.",e.__super__.constructor.call(this),null!=Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}return d(e,t),e.prototype.toString=function(){return this.name+": "+this.message},e}(Error),c=function(t,e,n,r,o){this.key=t,this.oldValue=e,this.newValue=n,this.url=r,this.storageArea=null!=o?o:"localStorage"},o=function t(e,n){if(this.key=e,this.index=n,!(this instanceof t))return new t(this.key,this.index)},f=function(){var t;return(t=function(){}).prototype=Object.create(null),new t},t=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return d(e,t),e.prototype.setItem=function(t,n){var r;return r=JSON.stringify(n),e.__super__.setItem.call(this,t,r)},e.prototype.getItem=function(t){return JSON.parse(e.__super__.getItem.call(this,t))},e}(r=function(t){var e;function n(t,r){var o,c;return this._location=t,this.quota=null!=r?r:5242880,n.__super__.constructor.call(this),this instanceof n?(this._location=h.resolve(this._location),null!=e[this._location]?e[this._location]:(this.length=0,this._bytesInUse=0,this._keys=[],this._metaKeyMap=f(),this._eventUrl="pid:"+process.pid,this._init(),this._QUOTA_EXCEEDED_ERR=i,"undefined"!=typeof Proxy&&null!==Proxy?(o={set:(c=this,function(t,e,n){return null!=c[e]?c[e]=n:c.setItem(e,n)}),get:function(t){return function(e,n){return null!=t[n]?t[n]:t.getItem(n)}}(this)},e[this._location]=new Proxy(this,o),e[this._location]):(e[this._location]=this,e[this._location]))):new n(this._location,this.quota)}return d(n,t),e={},n.prototype._init=function(){var t,e,n,r,i,c,a,s,u;try{if(null!=(u=p.statSync(this._location))&&!u.isDirectory())throw new Error("A file exists at the location '"+this._location+"' when trying to create/open localStorage");for(this._bytesInUse=0,this.length=0,n=p.readdirSync(this._location),c=i=0,s=n.length;i<s;c=++i)a=n[c],e=decodeURIComponent(a),this._keys.push(e),t=new o(a,c),this._metaKeyMap[e]=t,null!=(null!=(u=this._getStat(a))?u.size:void 0)&&(t.size=u.size,this._bytesInUse+=u.size);this.length=n.length}catch(t){if("ENOENT"!==(r=t).code)throw r;try{p.mkdirSync(this._location,{recursive:!0})}catch(t){if("EEXIST"!==(r=t).code)throw r}}},n.prototype.setItem=function(t,e){var n,r,a,u,f,l,p,d,m,g;if(d=null,(f=this.listenerCount("storage"))&&(d=this.getItem(t)),t=s(t),n=encodeURIComponent(t).replace(/[!'()]/g,escape).replace(/\*/g,"%2A"),u=h.join(this._location,n),g=(m=""+e).length,p=(a=!!(l=this._metaKeyMap[t]))?l.size:0,this._bytesInUse-p+g>this.quota)throw new i;if(y(u,m,{encoding:"utf8"}),a||((l=new o(n,this._keys.push(t)-1)).size=g,this._metaKeyMap[t]=l,this.length+=1,this._bytesInUse+=g),f)return r=new c(t,d,e,this._eventUrl),this.emit("storage",r)},n.prototype.getItem=function(t){var e,n;return t=s(t),(n=this._metaKeyMap[t])?(e=h.join(this._location,n.key),p.readFileSync(e,"utf8")):null},n.prototype._getStat=function(t){var e;t=s(t),e=h.join(this._location,encodeURIComponent(t));try{return p.statSync(e)}catch(t){return null}},n.prototype.removeItem=function(t){var e,n,r,o,i,a,f,l;if(t=s(t),a=this._metaKeyMap[t]){for(o in f=null,(r=this.listenerCount("storage"))&&(f=this.getItem(t)),delete this._metaKeyMap[t],this.length-=1,this._bytesInUse-=a.size,n=h.join(this._location,a.key),this._keys.splice(a.index,1),l=this._metaKeyMap)l[o],(i=this._metaKeyMap[o]).index>a.index&&(i.index-=1);if(u(n),r)return e=new c(t,f,null,this._eventUrl),this.emit("storage",e)}},n.prototype.key=function(t){var e;return"---.EMPTY_STRING.---"===(e=this._keys[t])?"":e},n.prototype.clear=function(){var t;if(a(this._location),this._metaKeyMap=f(),this._keys=[],this.length=0,this._bytesInUse=0,this.listenerCount("storage"))return t=new c(null,null,null,this._eventUrl),this.emit("storage",t)},n.prototype._getBytesInUse=function(){return this._bytesInUse},n.prototype._deleteLocation=function(){return delete e[this._location],u(this._location),this._metaKeyMap={},this._keys=[],this.length=0,this._bytesInUse=0},n}(l.EventEmitter)),e.LocalStorage=r,e.JSONStorage=t,e.QUOTA_EXCEEDED_ERR=i}).call(this)},function(t,e){t.exports=path},function(t,e,n){"use strict";var r,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var c=Number.isNaN||function(t){return t!=t};function a(){a.init.call(this)}t.exports=a,t.exports.once=function(t,e){return new Promise((function(n,r){function o(n){t.removeListener(e,i),r(n)}function i(){"function"==typeof t.removeListener&&t.removeListener("error",o),n([].slice.call(arguments))}g(t,e,i,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&g(t,"error",e,n)}(t,o,{once:!0})}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var s=10;function u(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function f(t){return void 0===t._maxListeners?a.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var o,i,c;if(u(n),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),i=t._events),c=i[e]),void 0===c)c=i[e]=n,++t._eventsCount;else if("function"==typeof c?c=i[e]=r?[n,c]:[c,n]:r?c.unshift(n):c.push(n),(o=f(t))>0&&c.length>o&&!c.warned){c.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+c.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=c.length,console&&console.warn}return t}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function y(t,e,n){var r=t._events;if(void 0===r)return[];var o=r[e];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(o):m(o,o.length)}function d(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function g(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function o(i){r.once&&t.removeEventListener(e,o),n(i)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t||t<0||c(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");s=t}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||c(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},a.prototype.getMaxListeners=function(){return f(this)},a.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var c;if(e.length>0&&(c=e[0]),c instanceof Error)throw c;var a=new Error("Unhandled error."+(c?" ("+c.message+")":""));throw a.context=c,a}var s=o[t];if(void 0===s)return!1;if("function"==typeof s)i(s,this,e);else{var u=s.length,f=m(s,u);for(n=0;n<u;++n)i(f[n],this,e)}return!0},a.prototype.addListener=function(t,e){return l(this,t,e,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(t,e){return l(this,t,e,!0)},a.prototype.once=function(t,e){return u(e),this.on(t,h(this,t,e)),this},a.prototype.prependOnceListener=function(t,e){return u(e),this.prependListener(t,h(this,t,e)),this},a.prototype.removeListener=function(t,e){var n,r,o,i,c;if(u(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===e||n[i].listener===e){c=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,o),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,c||e)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},a.prototype.listeners=function(t){return y(this,t,!0)},a.prototype.rawListeners=function(t){return y(this,t,!1)},a.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(t,e,n){"use strict";t.exports=function(t,e,n,i){n instanceof Function&&(i=n,n=null);n||(n={});r.realpath(t,(function(a,u){!function(t,e,n,i){var a=s(t);return n.mode&&n.chown?u():r.stat(t,(function(t,e){return t||!e||((n=c({},n)).mode||(n.mode=e.mode),!n.chown&&process.getuid&&(n.chown={uid:e.uid,gid:e.gid})),u()}));function u(){o([[f,a,e,n.mode,n.encoding||"utf8"],n.chown&&[r,r.chown,a,n.chown.uid,n.chown.gid],n.mode&&[r,r.chmod,a,n.mode],[r,r.rename,a,t]],(function(t){t?r.unlink(a,(function(){i(t)})):i()}))}function f(t,e,o,i,c){r.open(t,"w",n.mode,(function(t,n){return t?c(t):Buffer.isBuffer(e)?r.write(n,e,0,e.length,0,o):null!=e?r.write(n,String(e),0,String(i),o):o();function o(t){if(t)return c(t);r.fsync(n,(function(t){if(t)return c(t);r.close(n,c)}))}}))}}(u||t,e,n,i)}))},t.exports.sync=function(t,e,n){n||(n={});try{t=r.realpathSync(t)}catch(t){}var o=s(t);try{if(!n.mode||!n.chown)try{var i=r.statSync(t);(n=c({},n)).mode||(n.mode=i.mode),!n.chown&&process.getuid&&(n.chown={uid:i.uid,gid:i.gid})}catch(t){}var a=r.openSync(o,"w",n.mode);Buffer.isBuffer(e)?r.writeSync(a,e,0,e.length,0):null!=e&&r.writeSync(a,String(e),0,String(n.encoding||"utf8")),r.fsyncSync(a),r.closeSync(a),n.chown&&r.chownSync(o,n.chown.uid,n.chown.gid),n.mode&&r.chmodSync(o,n.mode),r.renameSync(o,t)}catch(t){try{r.unlinkSync(o)}catch(t){}throw t}},t.exports._getTmpname=s;var r=n(20),o=n(35).chain,i=n(38),c=Object.assign||n(1)._extend,a=0;function s(t){return t+"."+i(__filename).hash(String(process.pid)).hash(String(++a)).result()}},function(t,e,n){var r,o,i=n(0),c=n(21),a=n(24),s=n(27),u=n(1);function f(t,e){Object.defineProperty(t,r,{get:function(){return e}})}"function"==typeof Symbol&&"function"==typeof Symbol.for?(r=Symbol.for("graceful-fs.queue"),o=Symbol.for("graceful-fs.previous")):(r="___graceful-fs.queue",o="___graceful-fs.previous");var l,p=function(){};if(u.debuglog?p=u.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(p=function(){var t=u.format.apply(u,arguments);t="GFS4: "+t.split(/\n/).join("\nGFS4: ")}),!i[r]){var h=global[r]||[];f(i,h),i.close=function(t){function e(e,n){return t.call(i,e,(function(t){t||m(),"function"==typeof n&&n.apply(this,arguments)}))}return Object.defineProperty(e,o,{value:t}),e}(i.close),i.closeSync=function(t){function e(e){t.apply(i,arguments),m()}return Object.defineProperty(e,o,{value:t}),e}(i.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",(function(){p(i[r]),n(30).equal(i[r].length,0)}))}function y(t){c(t),t.gracefulify=y,t.createReadStream=function(e,n){return new t.ReadStream(e,n)},t.createWriteStream=function(e,n){return new t.WriteStream(e,n)};var e=t.readFile;t.readFile=function(t,n,r){"function"==typeof n&&(r=n,n=null);return function t(n,r,o,i){return e(n,r,(function(e){!e||"EMFILE"!==e.code&&"ENFILE"!==e.code?"function"==typeof o&&o.apply(this,arguments):d([t,[n,r,o],e,i||Date.now(),Date.now()])}))}(t,n,r)};var n=t.writeFile;t.writeFile=function(t,e,r,o){"function"==typeof r&&(o=r,r=null);return function t(e,r,o,i,c){return n(e,r,o,(function(n){!n||"EMFILE"!==n.code&&"ENFILE"!==n.code?"function"==typeof i&&i.apply(this,arguments):d([t,[e,r,o,i],n,c||Date.now(),Date.now()])}))}(t,e,r,o)};var r=t.appendFile;r&&(t.appendFile=function(t,e,n,o){"function"==typeof n&&(o=n,n=null);return function t(e,n,o,i,c){return r(e,n,o,(function(r){!r||"EMFILE"!==r.code&&"ENFILE"!==r.code?"function"==typeof i&&i.apply(this,arguments):d([t,[e,n,o,i],r,c||Date.now(),Date.now()])}))}(t,e,n,o)});var o=t.copyFile;o&&(t.copyFile=function(t,e,n,r){"function"==typeof n&&(r=n,n=0);return function t(e,n,r,i,c){return o(e,n,r,(function(o){!o||"EMFILE"!==o.code&&"ENFILE"!==o.code?"function"==typeof i&&i.apply(this,arguments):d([t,[e,n,r,i],o,c||Date.now(),Date.now()])}))}(t,e,n,r)});var i=t.readdir;t.readdir=function(t,e,n){"function"==typeof e&&(n=e,e=null);var r=s.test(process.version)?function(t,e,n,r){return i(t,o(t,e,n,r))}:function(t,e,n,r){return i(t,e,o(t,e,n,r))};return r(t,e,n);function o(t,e,n,o){return function(i,c){!i||"EMFILE"!==i.code&&"ENFILE"!==i.code?(c&&c.sort&&c.sort(),"function"==typeof n&&n.call(this,i,c)):d([r,[t,e,n],i,o||Date.now(),Date.now()])}}};var s=/^v[0-5]\./;if("v0.8"===process.version.substr(0,4)){var u=a(t);m=u.ReadStream,g=u.WriteStream}var f=t.ReadStream;f&&(m.prototype=Object.create(f.prototype),m.prototype.open=function(){var t=this;b(t.path,t.flags,t.mode,(function(e,n){e?(t.autoClose&&t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n),t.read())}))});var l=t.WriteStream;l&&(g.prototype=Object.create(l.prototype),g.prototype.open=function(){var t=this;b(t.path,t.flags,t.mode,(function(e,n){e?(t.destroy(),t.emit("error",e)):(t.fd=n,t.emit("open",n))}))}),Object.defineProperty(t,"ReadStream",{get:function(){return m},set:function(t){m=t},enumerable:!0,configurable:!0}),Object.defineProperty(t,"WriteStream",{get:function(){return g},set:function(t){g=t},enumerable:!0,configurable:!0});var p=m;Object.defineProperty(t,"FileReadStream",{get:function(){return p},set:function(t){p=t},enumerable:!0,configurable:!0});var h=g;function m(t,e){return this instanceof m?(f.apply(this,arguments),this):m.apply(Object.create(m.prototype),arguments)}function g(t,e){return this instanceof g?(l.apply(this,arguments),this):g.apply(Object.create(g.prototype),arguments)}Object.defineProperty(t,"FileWriteStream",{get:function(){return h},set:function(t){h=t},enumerable:!0,configurable:!0});var v=t.open;function b(t,e,n,r){return"function"==typeof n&&(r=n,n=null),function t(e,n,r,o,i){return v(e,n,r,(function(c,a){!c||"EMFILE"!==c.code&&"ENFILE"!==c.code?"function"==typeof o&&o.apply(this,arguments):d([t,[e,n,r,o],c,i||Date.now(),Date.now()])}))}(t,e,n,r)}return t.open=b,t}function d(t){p("ENQUEUE",t[0].name,t[1]),i[r].push(t),g()}function m(){for(var t=Date.now(),e=0;e<i[r].length;++e)i[r][e].length>2&&(i[r][e][3]=t,i[r][e][4]=t);g()}function g(){if(clearTimeout(l),l=void 0,0!==i[r].length){var t=i[r].shift(),e=t[0],n=t[1],o=t[2],c=t[3],a=t[4];if(void 0===c)p("RETRY",e.name,n),e.apply(null,n);else if(Date.now()-c>=6e4){p("TIMEOUT",e.name,n);var s=n.pop();"function"==typeof s&&s.call(null,o)}else{var u=Date.now()-a,f=Math.max(a-c,1);u>=Math.min(1.2*f,100)?(p("RETRY",e.name,n),e.apply(null,n.concat([c]))):i[r].push(t)}void 0===l&&(l=setTimeout(g,0))}}global[r]||f(global,i[r]),t.exports=y(s(i)),process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!i.__patched&&(t.exports=y(i),i.__patched=!0)},function(t,e,n){var r=n(22),o=process.cwd,i=null,c=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return i||(i=o.call(process)),i};try{process.cwd()}catch(t){}if("function"==typeof process.chdir){var a=process.chdir;process.chdir=function(t){i=null,a.call(process,t)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,a)}t.exports=function(t){r.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&function(t){t.lchmod=function(e,n,o){t.open(e,r.O_WRONLY|r.O_SYMLINK,n,(function(e,r){e?o&&o(e):t.fchmod(r,n,(function(e){t.close(r,(function(t){o&&o(e||t)}))}))}))},t.lchmodSync=function(e,n){var o,i=t.openSync(e,r.O_WRONLY|r.O_SYMLINK,n),c=!0;try{o=t.fchmodSync(i,n),c=!1}finally{if(c)try{t.closeSync(i)}catch(t){}else t.closeSync(i)}return o}}(t);t.lutimes||function(t){r.hasOwnProperty("O_SYMLINK")&&t.futimes?(t.lutimes=function(e,n,o,i){t.open(e,r.O_SYMLINK,(function(e,r){e?i&&i(e):t.futimes(r,n,o,(function(e){t.close(r,(function(t){i&&i(e||t)}))}))}))},t.lutimesSync=function(e,n,o){var i,c=t.openSync(e,r.O_SYMLINK),a=!0;try{i=t.futimesSync(c,n,o),a=!1}finally{if(a)try{t.closeSync(c)}catch(t){}else t.closeSync(c)}return i}):t.futimes&&(t.lutimes=function(t,e,n,r){r&&process.nextTick(r)},t.lutimesSync=function(){})}(t);t.chown=o(t.chown),t.fchown=o(t.fchown),t.lchown=o(t.lchown),t.chmod=e(t.chmod),t.fchmod=e(t.fchmod),t.lchmod=e(t.lchmod),t.chownSync=i(t.chownSync),t.fchownSync=i(t.fchownSync),t.lchownSync=i(t.lchownSync),t.chmodSync=n(t.chmodSync),t.fchmodSync=n(t.fchmodSync),t.lchmodSync=n(t.lchmodSync),t.stat=a(t.stat),t.fstat=a(t.fstat),t.lstat=a(t.lstat),t.statSync=s(t.statSync),t.fstatSync=s(t.fstatSync),t.lstatSync=s(t.lstatSync),t.chmod&&!t.lchmod&&(t.lchmod=function(t,e,n){n&&process.nextTick(n)},t.lchmodSync=function(){});t.chown&&!t.lchown&&(t.lchown=function(t,e,n,r){r&&process.nextTick(r)},t.lchownSync=function(){});"win32"===c&&(t.rename="function"!=typeof t.rename?t.rename:function(e){function n(n,r,o){var i=Date.now(),c=0;e(n,r,(function a(s){if(s&&("EACCES"===s.code||"EPERM"===s.code)&&Date.now()-i<6e4)return setTimeout((function(){t.stat(r,(function(t,i){t&&"ENOENT"===t.code?e(n,r,a):o(s)}))}),c),void(c<100&&(c+=10));o&&o(s)}))}return Object.setPrototypeOf&&Object.setPrototypeOf(n,e),n}(t.rename));function e(e){return e?function(n,r,o){return e.call(t,n,r,(function(t){u(t)&&(t=null),o&&o.apply(this,arguments)}))}:e}function n(e){return e?function(n,r){try{return e.call(t,n,r)}catch(t){if(!u(t))throw t}}:e}function o(e){return e?function(n,r,o,i){return e.call(t,n,r,o,(function(t){u(t)&&(t=null),i&&i.apply(this,arguments)}))}:e}function i(e){return e?function(n,r,o){try{return e.call(t,n,r,o)}catch(t){if(!u(t))throw t}}:e}function a(e){return e?function(n,r,o){function i(t,e){e&&(e.uid<0&&(e.uid+=4294967296),e.gid<0&&(e.gid+=4294967296)),o&&o.apply(this,arguments)}return"function"==typeof r&&(o=r,r=null),r?e.call(t,n,r,i):e.call(t,n,i)}:e}function s(e){return e?function(n,r){var o=r?e.call(t,n,r):e.call(t,n);return o&&(o.uid<0&&(o.uid+=4294967296),o.gid<0&&(o.gid+=4294967296)),o}:e}function u(t){return!t||("ENOSYS"===t.code||!(process.getuid&&0===process.getuid()||"EINVAL"!==t.code&&"EPERM"!==t.code))}t.read="function"!=typeof t.read?t.read:function(e){function n(n,r,o,i,c,a){var s;if(a&&"function"==typeof a){var u=0;s=function(f,l,p){if(f&&"EAGAIN"===f.code&&u<10)return u++,e.call(t,n,r,o,i,c,s);a.apply(this,arguments)}}return e.call(t,n,r,o,i,c,s)}return Object.setPrototypeOf&&Object.setPrototypeOf(n,e),n}(t.read),t.readSync="function"!=typeof t.readSync?t.readSync:(f=t.readSync,function(e,n,r,o,i){for(var c=0;;)try{return f.call(t,e,n,r,o,i)}catch(t){if("EAGAIN"===t.code&&c<10){c++;continue}throw t}});var f}},function(t,e,n){t.exports=n(23)},function(t,e){t.exports=function(e){return t.exports.definer(e)},t.exports.define=function(e,n,r){var o;if("object"==typeof n)for(o in n)n.hasOwnProperty(o)&&t.exports.define(e,o,n[o]);else Object.defineProperty(e,n,{value:r,enumerable:!0,writable:!1,configurable:!1});return e},t.exports.definer=function(e){return e=e||Object.create(null),function(n,r){return t.exports.define(e,n,r)}}},function(t,e,n){var r=n(25).Stream;t.exports=function(t){return{ReadStream:function e(n,o){if(!(this instanceof e))return new e(n,o);r.call(this);var i=this;this.path=n,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=65536,o=o||{};for(var c=Object.keys(o),a=0,s=c.length;a<s;a++){var u=c[a];this[u]=o[u]}this.encoding&&this.setEncoding(this.encoding);if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(void 0===this.end)this.end=1/0;else if("number"!=typeof this.end)throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(null!==this.fd)return void process.nextTick((function(){i._read()}));t.open(this.path,this.flags,this.mode,(function(t,e){if(t)return i.emit("error",t),void(i.readable=!1);i.fd=e,i.emit("open",e),i._read()}))},WriteStream:function e(n,o){if(!(this instanceof e))return new e(n,o);r.call(this),this.path=n,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,o=o||{};for(var i=Object.keys(o),c=0,a=i.length;c<a;c++){var s=i[c];this[s]=o[s]}if(void 0!==this.start){if("number"!=typeof this.start)throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],null===this.fd&&(this._open=t.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}}},function(t,e,n){var r=n(26);function o(){r.call(this)}o.prototype=new r,t.exports=o,o.Stream=o,o.prototype.pipe=function(t,e){var n=this;function r(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",r),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",c),n.on("close",a));var i=!1;function c(){i||(i=!0,t.end())}function a(){i||(i=!0,"function"==typeof t.destroy&&t.destroy())}function s(t){if(u(),!this.hasListeners("error"))throw t}function u(){n.off("data",r),t.off("drain",o),n.off("end",c),n.off("close",a),n.off("error",s),t.off("error",s),n.off("end",u),n.off("close",u),t.off("end",u),t.off("close",u)}return n.on("error",s),t.on("error",s),n.on("end",u),n.on("close",u),t.on("end",u),t.on("close",u),t.emit("pipe",n),t}},function(t,e){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){var n=this;function r(){n.off(t,r),e.apply(this,arguments)}return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n)for(var r=0,o=(n=n.slice(0)).length;r<o;++r)n[r].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){"use strict";t.exports=function(t){if(null===t||"object"!=typeof t)return t;if(t instanceof Object)var e={__proto__:r(t)};else e=Object.create(null);return Object.getOwnPropertyNames(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e};var r=Object.getPrototypeOf||function(t){return t.__proto__}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";var r=n(31);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function o(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function i(t){return global.Buffer&&"function"==typeof global.Buffer.isBuffer?global.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var c=n(32),a=Object.prototype.hasOwnProperty,s=Array.prototype.slice,u="foo"===function(){}.name;function f(t){return Object.prototype.toString.call(t)}function l(t){return!i(t)&&("function"==typeof global.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=v,h=/\s*function\s+([^\(\s]*)\s*/;function y(t){if(c.isFunction(t)){if(u)return t.name;var e=t.toString().match(h);return e&&e[1]}}function d(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function m(t){if(u||!c.isFunction(t))return c.inspect(t);var e=y(t);return"[Function"+(e?": "+e:"")+"]"}function g(t,e,n,r,o){throw new p.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function v(t,e){t||g(t,!0,e,"==",p.ok)}function b(t,e,n,r){if(t===e)return!0;if(i(t)&&i(e))return 0===o(t,e);if(c.isDate(t)&&c.isDate(e))return t.getTime()===e.getTime();if(c.isRegExp(t)&&c.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(l(t)&&l(e)&&f(t)===f(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===o(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var a=(r=r||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===r.expected.indexOf(e)||(r.actual.push(t),r.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(c.isPrimitive(t)||c.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=x(t),i=x(e);if(o&&!i||!o&&i)return!1;if(o)return t=s.call(t),e=s.call(e),b(t,e,n);var a,u,f=_(t),l=_(e);if(f.length!==l.length)return!1;for(f.sort(),l.sort(),u=f.length-1;u>=0;u--)if(f[u]!==l[u])return!1;for(u=f.length-1;u>=0;u--)if(a=f[u],!b(t[a],e[a],n,r))return!1;return!0}(t,e,n,r))}return n?t===e:t==e}function x(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function S(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&g(o,n,"Missing expected exception"+r);var i="string"==typeof r,a=!t&&o&&!n;if((!t&&c.isError(o)&&i&&w(o,n)||a)&&g(o,n,"Got unwanted exception"+r),t&&o&&n&&!w(o,n)||!t&&o)throw o}p.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return d(m(t.actual),128)+" "+t.operator+" "+d(m(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=y(e),i=r.indexOf("\n"+o);if(i>=0){var c=r.indexOf("\n",i+1);r=r.substring(c+1)}this.stack=r}}},c.inherits(p.AssertionError,Error),p.fail=g,p.ok=v,p.equal=function(t,e,n){t!=e&&g(t,e,n,"==",p.equal)},p.notEqual=function(t,e,n){t==e&&g(t,e,n,"!=",p.notEqual)},p.deepEqual=function(t,e,n){b(t,e,!1)||g(t,e,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,n){b(t,e,!0)||g(t,e,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,n){b(t,e,!1)&&g(t,e,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&g(e,n,r,"notDeepStrictEqual",t)},p.strictEqual=function(t,e,n){t!==e&&g(t,e,n,"===",p.strictEqual)},p.notStrictEqual=function(t,e,n){t===e&&g(t,e,n,"!==",p.notStrictEqual)},p.throws=function(t,e,n){S(!0,t,e,n)},p.doesNotThrow=function(t,e,n){S(!1,t,e,n)},p.ifError=function(t){if(t)throw t},p.strict=r((function t(e,n){e||g(e,!0,n,"==",t)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var _=Object.keys||function(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,s=c(t),u=1;u<arguments.length;u++){for(var f in n=Object(arguments[u]))o.call(n,f)&&(s[f]=n[f]);if(r){a=r(n);for(var l=0;l<a.length;l++)i.call(n,a[l])&&(s[a[l]]=n[a[l]])}}return s}},function(t,e,n){var r=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var o=arguments,i=o.length,a=String(t).replace(r,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return t}})),s=o[n];n<i;s=o[++n])y(s)||!b(s)?a+=" "+s:a+=" "+c(s);return a},e.deprecate=function(t,n){if(g(global.process))return function(){return e.deprecate(t,n).apply(this,arguments)};if(!0===process.noDeprecation)return t;var r=!1;return function(){if(!r){if(process.throwDeprecation)throw new Error(n);process.traceDeprecation,r=!0}return t.apply(this,arguments)}};var o,i={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),g(r.showHidden)&&(r.showHidden=!1),g(r.depth)&&(r.depth=2),g(r.colors)&&(r.colors=!1),g(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),u(r,t,r.depth)}function a(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return m(o)||(o=u(t,o,r)),o}var i=function(t,e){if(g(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(d(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,n);if(i)return i;var c=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(c);if(t.showHidden&&(c=Object.getOwnPropertyNames(n)),w(n)&&(c.indexOf("message")>=0||c.indexOf("description")>=0))return f(n);if(0===c.length){if(S(n)){var s=n.name?": "+n.name:"";return t.stylize("[Function"+s+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(x(n))return t.stylize(Date.prototype.toString.call(n),"date");if(w(n))return f(n)}var b,_="",O=!1,k=["{","}"];(p(n)&&(O=!0,k=["[","]"]),S(n))&&(_=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(_=" "+RegExp.prototype.toString.call(n)),x(n)&&(_=" "+Date.prototype.toUTCString.call(n)),w(n)&&(_=" "+f(n)),0!==c.length||O&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),b=O?function(t,e,n,r,o){for(var i=[],c=0,a=e.length;c<a;++c)E(e,String(c))?i.push(l(t,e,n,r,String(c),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(l(t,e,n,r,o,!0))})),i}(t,n,r,a,c):c.map((function(e){return l(t,n,r,a,e,O)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(b,_,k)):k[0]+_+k[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,e,n,r,o,i){var c,a,s;if((s=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(a=t.stylize("[Setter]","special")),E(r,o)||(c="["+o+"]"),a||(t.seen.indexOf(s.value)<0?(a=y(n)?u(t,s.value,null):u(t,s.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),g(c)){if(i&&o.match(/^\d+$/))return a;(c=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=t.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=t.stylize(c,"string"))}return c+": "+a}function p(t){return Array.isArray(t)}function h(t){return"boolean"==typeof t}function y(t){return null===t}function d(t){return"number"==typeof t}function m(t){return"string"==typeof t}function g(t){return void 0===t}function v(t){return b(t)&&"[object RegExp]"===_(t)}function b(t){return"object"==typeof t&&null!==t}function x(t){return b(t)&&"[object Date]"===_(t)}function w(t){return b(t)&&("[object Error]"===_(t)||t instanceof Error)}function S(t){return"function"==typeof t}function _(t){return Object.prototype.toString.call(t)}e.debuglog=function(t){if(g(o)&&(o=process.env.NODE_DEBUG||""),t=t.toUpperCase(),!i[t])if(new RegExp("\\b"+t+"\\b","i").test(o)){process.pid;i[t]=function(){e.format.apply(e,arguments)}}else i[t]=function(){};return i[t]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=h,e.isNull=y,e.isNullOrUndefined=function(t){return null==t},e.isNumber=d,e.isString=m,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=g,e.isRegExp=v,e.isObject=b,e.isDate=x,e.isError=w,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(33);function E(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){},e.inherits=n(34),e._extend=function(t,e){if(!e||!b(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){e.asyncMap=n(36),e.bindActor=n(2),e.chain=n(37)},function(t,e){t.exports=function(){var t=Array.prototype.slice.call(arguments),e=t.shift()||[],n=t.pop();if("function"!=typeof n)throw new Error("No callback provided to asyncMap");if(!e)return n(null,[]);Array.isArray(e)||(e=[e]);var r=t.length,o=[],i=null,c=e.length,a=c*r;if(!a)return n(null,[]);function s(u){u&&!i&&(i=u);for(var f=arguments.length,l=1;l<f;l++)void 0!==arguments[l]&&(o[l-1]=(o[l-1]||[]).concat(arguments[l]));if(e.length>c){var p=e.slice(c);a+=(e.length-c)*r,c=e.length,process.nextTick((function(){p.forEach((function(e){t.forEach((function(t){t(e,s)}))}))}))}0==--a&&n.apply(null,[i].concat(o))}e.forEach((function(e){t.forEach((function(t){t(e,s)}))}))}},function(t,e,n){t.exports=o;var r=n(2);function o(t,e){var n=[];!function i(c,a){return c>=a?e(null,n):(Array.isArray(t[c])&&(t[c]=r.apply(null,t[c].map((function(t){return t===o.first?n[0]:t===o.last?n[n.length-1]:t})))),t[c]?void t[c]((function(t,r){if(t)return e(t,n);void 0!==r&&(n=n.concat(r)),i(c+1,a)})):i(c+1,a))}(0,t.length)}o.first={},o.last={}},function(t,e,n){
/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */
!function(){var e;function n(t,r){var o=this instanceof n?this:e;if(o.reset(r),"string"==typeof t&&t.length>0&&o.hash(t),o!==this)return o}n.prototype.hash=function(t){var e,n,r,o,i;switch(i=t.length,this.len+=i,n=this.k1,r=0,this.rem){case 0:n^=i>r?65535&t.charCodeAt(r++):0;case 1:n^=i>r?(65535&t.charCodeAt(r++))<<8:0;case 2:n^=i>r?(65535&t.charCodeAt(r++))<<16:0;case 3:n^=i>r?(255&t.charCodeAt(r))<<24:0,n^=i>r?(65280&t.charCodeAt(r++))>>8:0}if(this.rem=i+this.rem&3,(i-=this.rem)>0){for(e=this.h1;e=5*(e=(e^=n=13715*(n=(n=11601*n+3432906752*(65535&n)&4294967295)<<15|n>>>17)+461832192*(65535&n)&4294967295)<<13|e>>>19)+3864292196&4294967295,!(r>=i);)n=65535&t.charCodeAt(r++)^(65535&t.charCodeAt(r++))<<8^(65535&t.charCodeAt(r++))<<16,n^=(255&(o=t.charCodeAt(r++)))<<24^(65280&o)>>8;switch(n=0,this.rem){case 3:n^=(65535&t.charCodeAt(r+2))<<16;case 2:n^=(65535&t.charCodeAt(r+1))<<8;case 1:n^=65535&t.charCodeAt(r)}this.h1=e}return this.k1=n,this},n.prototype.result=function(){var t,e;return t=this.k1,e=this.h1,t>0&&(e^=t=13715*(t=(t=11601*t+3432906752*(65535&t)&4294967295)<<15|t>>>17)+461832192*(65535&t)&4294967295),e^=this.len,e=51819*(e^=e>>>16)+2246770688*(65535&e)&4294967295,e=44597*(e^=e>>>13)+3266445312*(65535&e)&4294967295,(e^=e>>>16)>>>0},n.prototype.reset=function(t){return this.h1="number"==typeof t?t:0,this.rem=this.k1=this.len=0,this},e=new n,t.exports=n}()},function(t,e,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();t.exports=e=r.fetch,r.fetch&&(e.default=r.fetch.bind(r)),e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response},function(t,e){}]);