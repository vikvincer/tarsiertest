!function(e){var r=e.babelHelpers={};r.typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r.jsx=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,t,n,o){var i=r&&r.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&i)for(var a in i)void 0===t[a]&&(t[a]=i[a]);else t||(t=i||{});if(1===u)t.children=o;else if(u>1){for(var f=Array(u),l=0;l<u;l++)f[l]=arguments[l+3];t.children=f}return{$$typeof:e,type:r,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),r.asyncIterator=function(e){if("function"==typeof Symbol){if(Symbol.asyncIterator){var r=e[Symbol.asyncIterator];if(null!=r)return r.call(e)}if(Symbol.iterator)return e[Symbol.iterator]()}throw new TypeError("Object is not async iterable")},r.asyncGenerator=function(){function e(e){this.value=e}function r(r){function t(e,r){return new Promise(function(t,o){var a={key:e,arg:r,resolve:t,reject:o,next:null};u?u=u.next=a:(i=u=a,n(e,r))})}function n(t,i){try{var u=r[t](i),a=u.value;a instanceof e?Promise.resolve(a.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(u.done?"return":"normal",u.value)}catch(e){o("throw",e)}}function o(e,r){switch(e){case"return":i.resolve({value:r,done:!0});break;case"throw":i.reject(r);break;default:i.resolve({value:r,done:!1})}i=i.next,i?n(i.key,i.arg):u=null}var i,u;this._invoke=t,"function"!=typeof r.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(r.prototype[Symbol.asyncIterator]=function(){return this}),r.prototype.next=function(e){return this._invoke("next",e)},r.prototype.throw=function(e){return this._invoke("throw",e)},r.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new r(e.apply(this,arguments))}},await:function(r){return new e(r)}}}(),r.asyncGeneratorDelegate=function(e,r){function t(t,n){return o=!0,n=new Promise(function(r){r(e[t](n))}),{done:!1,value:r(n)}}var n={},o=!1;return"function"==typeof Symbol&&Symbol.iterator&&(n[Symbol.iterator]=function(){return this}),n.next=function(e){return o?(o=!1,e):t("next",e)},"function"==typeof e.throw&&(n.throw=function(e){if(o)throw o=!1,e;return t("throw",e)}),"function"==typeof e.return&&(n.return=function(e){return t("return",e)}),n},r.asyncToGenerator=function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,i){try{var u=r[o](i),a=u.value}catch(e){return void t(e)}return u.done?void e(a):Promise.resolve(a).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}},r.classCallCheck=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},r.createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),r.defineEnumerableProperties=function(e,r){for(var t in r){var n=r[t];n.configurable=n.enumerable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,t,n)}return e},r.defaults=function(e,r){for(var t=Object.getOwnPropertyNames(r),n=0;n<t.length;n++){var o=t[n],i=Object.getOwnPropertyDescriptor(r,o);i&&i.configurable&&void 0===e[o]&&Object.defineProperty(e,o,i)}return e},r.defineProperty=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},r.extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.get=function e(r,t,n){null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,t);if(void 0===o){var i=Object.getPrototypeOf(r);return null===i?void 0:e(i,t,n)}if("value"in o)return o.value;var u=o.get;if(void 0!==u)return u.call(n)},r.inherits=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)},r.instanceof=function(e,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r},r.interopRequireDefault=function(e){return e&&e.__esModule?e:{default:e}},r.interopRequireWildcard=function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r},r.newArrowCheck=function(e,r){if(e!==r)throw new TypeError("Cannot instantiate an arrow function")},r.objectDestructuringEmpty=function(e){if(null==e)throw new TypeError("Cannot destructure undefined")},r.objectWithoutProperties=function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},r.possibleConstructorReturn=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r},r.selfGlobal="undefined"==typeof e?self:e,r.set=function e(r,t,n,o){var i=Object.getOwnPropertyDescriptor(r,t);if(void 0===i){var u=Object.getPrototypeOf(r);null!==u&&e(u,t,n,o)}else if("value"in i&&i.writable)i.value=n;else{var a=i.set;void 0!==a&&a.call(o,n)}return n},r.slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r.slicedToArrayLoose=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e)){for(var t,n=[],o=e[Symbol.iterator]();!(t=o.next()).done&&(n.push(t.value),!r||n.length!==r););return n}throw new TypeError("Invalid attempt to destructure non-iterable instance")},r.taggedTemplateLiteral=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))},r.taggedTemplateLiteralLoose=function(e,r){return e.raw=r,e},r.temporalRef=function(e,r,t){if(e===t)throw new ReferenceError(r+" is not defined - temporal dead zone");return e},r.temporalUndefined={},r.toArray=function(e){return Array.isArray(e)?e:Array.from(e)},r.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}}("undefined"==typeof global?self:global);
try{var ce=new window.CustomEvent("test");ce.preventDefault();if(!0!==ce.defaultPrevented)throw Error("Could not prevent default");}catch(e){var CustomEvent=function(d,a){var b,c;a=a||{bubbles:!1,cancelable:!1,detail:void 0};b=document.createEvent("CustomEvent");b.initCustomEvent(d,a.bubbles,a.cancelable,a.detail);c=b.preventDefault;b.preventDefault=function(){c.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(f){this.defaultPrevented=!0}};return b};CustomEvent.prototype=
window.Event.prototype;window.CustomEvent=CustomEvent};
!function(t,e){if(!t.ES6Promise){t.ES6Promise=e();t.ES6Promise.polyfill()}}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?j(t,it.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),P(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(P,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(P,t)}function P(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function T(){this.error=null}function M(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===st?(a=!0,u=s.error,s=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new T,st=new T,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U});
if (typeof Object.assign != 'function') {

  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

   target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

(function(n){function i(a,d){this.setNotifyMethod(a);this.setNotifyContext(d)}function j(a,d,b){this.name=a;this.body=d;this.type=b}function k(){}function m(){}function l(){this.subCommands=[];this.initializeMacroCommand()}function g(a,d){this.mediatorName=a||this.constructor.NAME;this.viewComponent=d}function h(a,d){this.proxyName=a||this.constructor.NAME;null!=d&&this.setData(d)}function b(a){if(null!=b.instanceMap[a])throw Error(b.MULTITON_MSG);this.initializeNotifier(a);b.instanceMap[a]=this;
this.initializeFacade()}function c(a){if(null!=c.instanceMap[a])throw Error(c.MULTITON_MSG);this.multitonKey=a;c.instanceMap[this.multitonKey]=this;this.mediatorMap=[];this.observerMap=[];this.initializeView()}function e(a){if(e.instanceMap[a])throw Error(e.MULTITON_MSG);this.multitonKey=a;e.instanceMap[a]=this;this.proxyMap=[];this.initializeModel()}function f(a){if(null!=f.instanceMap[a])throw Error(f.MULTITON_MSG);this.multitonKey=a;f.instanceMap[this.multitonKey]=this;this.commandMap=[];this.initializeController()}
function p(a,d,b){for(var a=a.split("."),b=b||o.global,c,e,f=0,g=a.length;f<g;f++)c=b,e=a[f],b=null==b[e]?b[e]={}:b[e];return null==d?b:c[e]=d}null==n&&(n=window);if(!n.puremvc){i.prototype.setNotifyMethod=function(a){this.notify=a};i.prototype.setNotifyContext=function(a){this.context=a};i.prototype.getNotifyMethod=function(){return this.notify};i.prototype.getNotifyContext=function(){return this.context};i.prototype.notifyObserver=function(a){this.getNotifyMethod().call(this.getNotifyContext(),
a)};i.prototype.compareNotifyContext=function(a){return a===this.context};i.prototype.notify=null;i.prototype.context=null;j.prototype.getName=function(){return this.name};j.prototype.setBody=function(a){this.body=a};j.prototype.getBody=function(){return this.body};j.prototype.setType=function(a){this.type=a};j.prototype.getType=function(){return this.type};j.prototype.toString=function(){var a="Notification Name: "+this.getName(),a=a+("\nBody:"+(null==this.body?"null":this.body.toString()));return a+=
"\nType:"+(null==this.type?"null":this.type)};j.prototype.name=null;j.prototype.type=null;j.prototype.body=null;k.prototype.sendNotification=function(a,d,b){var c=this.getFacade();c&&c.sendNotification(a,d,b)};k.prototype.initializeNotifier=function(a){this.multitonKey=""+a;this.facade=this.getFacade()};k.prototype.getFacade=function(){if(null==this.multitonKey)throw Error(k.MULTITON_MSG);return b.getInstance(this.multitonKey)};k.prototype.multitonKey=null;k.MULTITON_MSG="multitonKey for this Notifier not yet initialized!";
m.prototype=new k;m.prototype.constructor=m;m.prototype.execute=function(){};l.prototype=new k;l.prototype.constructor=l;l.prototype.subCommands=null;l.prototype.initializeMacroCommand=function(){};l.prototype.addSubCommand=function(a){this.subCommands.push(a)};l.prototype.execute=function(a){for(;0<this.subCommands.length;){var d=new (this.subCommands.shift());d.initializeNotifier(this.multitonKey);d.execute(a)}};g.NAME="Mediator";g.prototype=new k;g.prototype.constructor=g;g.prototype.getMediatorName=
function(){return this.mediatorName};g.prototype.setViewComponent=function(a){this.viewComponent=a};g.prototype.getViewComponent=function(){return this.viewComponent};g.prototype.listNotificationInterests=function(){return[]};g.prototype.handleNotification=function(){};g.prototype.onRegister=function(){};g.prototype.onRemove=function(){};g.prototype.mediatorName=null;g.prototype.viewComponent=null;h.NAME="Proxy";h.prototype=new k;h.prototype.constructor=h;h.prototype.getProxyName=function(){return this.proxyName};
h.prototype.setData=function(a){this.data=a};h.prototype.getData=function(){return this.data};h.prototype.onRegister=function(){};h.prototype.onRemove=function(){};h.prototype.proxyName=null;h.prototype.data=null;b.prototype.initializeFacade=function(){this.initializeModel();this.initializeController();this.initializeView()};b.getInstance=function(a){if(null==a)return null;null==b.instanceMap[a]&&(b.instanceMap[a]=new b(a));return b.instanceMap[a]};b.prototype.initializeController=function(){if(null==
this.controller)this.controller=f.getInstance(this.multitonKey)};b.prototype.initializeModel=function(){if(null==this.model)this.model=e.getInstance(this.multitonKey)};b.prototype.initializeView=function(){if(null==this.view)this.view=c.getInstance(this.multitonKey)};b.prototype.registerCommand=function(a,d){this.controller.registerCommand(a,d)};b.prototype.removeCommand=function(a){this.controller.removeCommand(a)};b.prototype.hasCommand=function(a){return this.controller.hasCommand(a)};b.prototype.registerProxy=
function(a){this.model.registerProxy(a)};b.prototype.retrieveProxy=function(a){return this.model.retrieveProxy(a)};b.prototype.removeProxy=function(a){var d=null;null!=this.model&&(d=this.model.removeProxy(a));return d};b.prototype.hasProxy=function(a){return this.model.hasProxy(a)};b.prototype.registerMediator=function(a){null!=this.view&&this.view.registerMediator(a)};b.prototype.retrieveMediator=function(a){return this.view.retrieveMediator(a)};b.prototype.removeMediator=function(a){var d=null;
null!=this.view&&(d=this.view.removeMediator(a));return d};b.prototype.hasMediator=function(a){return this.view.hasMediator(a)};b.prototype.sendNotification=function(a,d,b){this.notifyObservers(new j(a,d,b))};b.prototype.notifyObservers=function(a){null!=this.view&&this.view.notifyObservers(a)};b.prototype.initializeNotifier=function(a){this.multitonKey=a};b.hasCore=function(a){return null!=b.instanceMap[a]};b.removeCore=function(a){null!=b.instanceMap[a]&&(e.removeModel(a),c.removeView(a),f.removeController(a),
delete b.instanceMap[a])};b.prototype.controller=null;b.prototype.model=null;b.prototype.view=null;b.prototype.multitonKey=null;b.instanceMap=[];b.MULTITON_MSG="Facade instance for this Multiton key already constructed!";c.prototype.initializeView=function(){};c.getInstance=function(a){if(null==a)return null;null==c.instanceMap[a]&&(c.instanceMap[a]=new c(a));return c.instanceMap[a]};c.prototype.registerObserver=function(a,d){null!=this.observerMap[a]?this.observerMap[a].push(d):this.observerMap[a]=
[d]};c.prototype.notifyObservers=function(a){if(null!=this.observerMap[a.getName()]){for(var d=this.observerMap[a.getName()],b=[],c,e=0;e<d.length;e++)c=d[e],b.push(c);for(e=0;e<b.length;e++)c=b[e],c.notifyObserver(a)}};c.prototype.removeObserver=function(a,d){for(var b=this.observerMap[a],c=0;c<b.length;c++)if(!0==b[c].compareNotifyContext(d)){b.splice(c,1);break}0==b.length&&delete this.observerMap[a]};c.prototype.registerMediator=function(a){if(null==this.mediatorMap[a.getMediatorName()]){a.initializeNotifier(this.multitonKey);
this.mediatorMap[a.getMediatorName()]=a;var d=a.listNotificationInterests();if(0<d.length)for(var b=new i(a.handleNotification,a),c=0;c<d.length;c++)this.registerObserver(d[c],b);a.onRegister()}};c.prototype.retrieveMediator=function(a){return this.mediatorMap[a]};c.prototype.removeMediator=function(a){var d=this.mediatorMap[a];if(d){for(var b=d.listNotificationInterests(),c=0;c<b.length;c++)this.removeObserver(b[c],d);delete this.mediatorMap[a];d.onRemove()}return d};c.prototype.hasMediator=function(a){return null!=
this.mediatorMap[a]};c.removeView=function(a){delete c.instanceMap[a]};c.prototype.mediatorMap=null;c.prototype.observerMap=null;c.instanceMap=[];c.prototype.multitonKey=null;c.MULTITON_MSG="View instance for this Multiton key already constructed!";e.prototype.initializeModel=function(){};e.getInstance=function(a){if(null==a)return null;null==e.instanceMap[a]&&(e.instanceMap[a]=new e(a));return e.instanceMap[a]};e.prototype.registerProxy=function(a){a.initializeNotifier(this.multitonKey);this.proxyMap[a.getProxyName()]=
a;a.onRegister()};e.prototype.retrieveProxy=function(a){return this.proxyMap[a]};e.prototype.hasProxy=function(a){return null!=this.proxyMap[a]};e.prototype.removeProxy=function(a){var b=this.proxyMap[a];b&&(this.proxyMap[a]=null,b.onRemove());return b};e.removeModel=function(a){delete e.instanceMap[a]};e.prototype.proxyMap=null;e.instanceMap=[];e.MULTITON_MSG="Model instance for this Multiton key already constructed!";f.prototype.initializeController=function(){this.view=c.getInstance(this.multitonKey)};
f.getInstance=function(a){if(null==a)return null;null==this.instanceMap[a]&&(this.instanceMap[a]=new this(a));return this.instanceMap[a]};f.prototype.executeCommand=function(a){var b=this.commandMap[a.getName()];null!=b&&(b=new b,b.initializeNotifier(this.multitonKey),b.execute(a))};f.prototype.registerCommand=function(a,b){null==this.commandMap[a]&&this.view.registerObserver(a,new i(this.executeCommand,this));this.commandMap[a]=b};f.prototype.hasCommand=function(a){return null!=this.commandMap[a]};
f.prototype.removeCommand=function(a){this.hasCommand(a)&&(this.view.removeObserver(a,this),this.commandMap[a]=null)};f.removeController=function(a){delete this.instanceMap[a]};f.prototype.view=null;f.prototype.commandMap=null;f.prototype.multitonKey=null;f.instanceMap=[];f.MULTITON_MSG="controller key for this Multiton key already constructed";var o={global:function(){return this}(),extend:function(a,b){if("function"!==typeof a)throw new TypeError("#extend- child should be Function");if("function"!==
typeof b)throw new TypeError("#extend- parent should be Function");if(b!==a){var c=new Function;c.prototype=b.prototype;a.prototype=new c;return a.prototype.constructor=a}},decorate:function(a,b){for(var c in b)a[c]=b[c];return a}};n.puremvc={View:c,Model:e,Controller:f,SimpleCommand:m,MacroCommand:l,Facade:b,Mediator:g,Observer:i,Notification:j,Notifier:k,Proxy:h,define:function(a,b,c){a||(a={});var e=a.name,f=a.parent,g="function"===typeof f,h=a.scope||null;if("parent"in a&&!g)throw new TypeError("Class parent must be Function");
if(a.hasOwnProperty("constructor")){if(a=a.constructor,"function"!==typeof a)throw new TypeError("Class constructor must be Function");}else a=g?function(){f.apply(this,arguments)}:new Function;g&&o.extend(a,f);if(b)g=a.prototype,o.decorate(g,b),g.constructor=a;c&&o.decorate(a,c);if(e){if("string"!==typeof e)throw new TypeError("Class name must be primitive string");p(e,a,h)}return a},declare:p}}})(this);
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchStr, position) {
      // This works much better than >= because
      // it compensates for NaN:
      if (!(position < this.length))
        position = this.length;
      else
        position |= 0; // round position
      return this.substr(position - searchStr.length, searchStr.length) === searchStr;
  };
}


(function() {
var  global, version, _ref;


  function AkamaiSDKManager() {
    var legacyCheck, sdk, versions,
      _this = this;
    sdk = null;
    this.getSDK = function() {
      return sdk;
    };
    this.setSDK = function(newSDK) {
      var key, value;
      sdk = newSDK;
      legacyCheck();
      for (key in sdk) {
        value = sdk[key];
        window[key] = value;
      }
      return sdk;
    };
    this.saveSDK = function(version, object) {
      var key, value, _ref;
      if (!(object != null) || !(version != null) || version === "") {
        return;
      }
      if (!(object.main != null)) {
        for (key in object) {
          value = object[key];
          if (!((value != null ? value.VERSION : void 0) === version)) {
            continue;
          }
          object.main = value;
          break;
        }
      }
      if ((_ref = object.version) == null) {
        object.version = version;
      }
      versions.push(object);
      this[version] = object;
      return object;
    };
    versions = [];
    this.getVersions = function() {
      return versions.slice();
    };
    this.getVersion = function(version) {
      return this[version];
    };
    this.setVersion = function(version) {
      sdk = this.getVersion(version);
      if (!(sdk != null)) {
        return null;
      }
      this.setSDK(sdk);
      return sdk;
    };
    this.revert = function() {
      return this.setSDK(versions[0]);
    };
    this.noConflict = function() {
      var current;
      current = this.getSDK();
      this.revert();
      return current;
    };
    this.create = (function() {
      var Creator;
      Creator = function(cls, args) {
        this.prototype = cls.prototype;
        return cls.apply(this, args);
      };
      return function(args) {
        return new Creator(sdk.main, arguments);
      };
    })();
    legacyCheck = function() {
      var key, obj, value, _ref, _ref1;
      if ((_ref = window.com) != null ? (_ref1 = _ref.akamai) != null ? _ref1.amp : void 0 : void 0) {
        for (key in window) {
          value = window[key];
          if ((value === window.AMP || value === window.AMPremier) && ((value != null ? value.VERSION : void 0) != null) && value.VERSION !== "" && value.VERSION !== (sdk != null ? sdk.version : void 0) && (!(_this[value.VERSION] != null))) {
            obj = {};
            obj.main = value;
            obj.com = window.com;
            if (window.AMP) {
              obj.AMP = window.AMP;
            }
            if (window.AMPPremier) {
              obj.AMPremier = window.AMPPremier;
            }
            if (window.Utils) {
              obj.Utils = window.Utils;
            }
            if (window.QueryString) {
              obj.QueryString = window.QueryString;
            }
            if (window.QueryParams) {
              obj.QueryParams = window.QueryParams;
            }
            _this.saveSDK(value.VERSION, obj);
            break;
          }
        }
      }
    };
    legacyCheck();
  }

  
if ((_ref = window.AKAMAI_MEDIA_PLAYER) == null) {
  window.AKAMAI_MEDIA_PLAYER = new AkamaiSDKManager();
}
version = "AMP Premier v2.83.14";
if (!(window.AKAMAI_MEDIA_PLAYER[version] != null)) {
  global = window.AKAMAI_MEDIA_PLAYER[version] = {};
  /* Start JS Lib
  */
  function __hasProp(prop) {
	return {}["hasOwnProperty"](prop);
}

function __extends(child, parent) {
	for (var key in parent) {
		if (__hasProp["call"](parent, key))
			child[key] = parent[key];
	}
	function ctor() {
		this.constructor = child;
	}

	ctor.prototype = parent.prototype;
	child.prototype = new ctor;
	child.__super__ = parent.prototype;
	return child;
}

function __indexOf(item) {
	for (var i = 0, l = this.length; i < l; i++) {
		if ( i in this && this[i] === item)
			return i;
	}
	return -1;
}

function __bind(fn, me) {
	return function() {
		return fn["apply"](me, arguments);
	};
}

function QueryString() {}

QueryString.construct = function() {
  var key, value, vars;
  vars = this.decode(window.location.search);
  QueryString.typed = {};
  for (key in vars) {
    value = vars[key];
    QueryString[key] = value;
    QueryString.typed[key] = this.parse(value);
  }
  return true;
};

QueryString.encode = function(obj, prefix) {
  var k, p, str, v;
  str = [];
  for (p in obj) {
    v = obj[p];
    if (!(v != null)) {
      continue;
    }
    k = (prefix ? prefix + "[" + p + "]" : p);
    str.push((typeof v === "object" ? this.encode(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v)));
  }
  return str.join("&");
};

QueryString.decode = function(uri) {
  var results,
    _this = this;
  if (uri != null) {
    results = {};
    uri = uri.replace(/^[^?]*\?/, "");
    uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
      results[decodeURIComponent($1)] = decodeURIComponent($3);
    });
  }
  return results;
};

QueryString.parse = function(value) {
  var temp;
  if (value === "undefined") {
    return true;
  }
  temp = value.toLowerCase();
  if (temp === "true" || temp === "false") {
    return temp === "true";
  }
  temp = parseFloat(value);
  if (!isNaN(temp)) {
    return temp;
  }
  try {
    temp = JSON.parse(value);
    return temp;
  } catch (error) {
    return value;
  }
};

QueryString.constructed = QueryString.construct();

/**
 * Creates a new instance of MediaProxy. Used to track player configuration settings.
 * 
 * @param {Object} data The config object.
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function ModuleProxy(data, name) {
  this.config = data;
  ModuleProxy.__super__.constructor.call(this, name);
}


__extends(ModuleProxy, puremvc.Proxy);


/** @static
*/
ModuleProxy.NAME = "ModuleProxy";

/** @private
*/
ModuleProxy.prototype.defaults = null;

ModuleProxy.prototype.config = null;

/** @override
*/
ModuleProxy.prototype.initializeNotifier = function(key) {
  ModuleProxy.__super__.initializeNotifier.call(this, key);
  this.createData();
};

/**
*/
ModuleProxy.prototype.createData = function() {
  this.setData(this.config);
};

/**
*/
ModuleProxy.prototype.getDefaults = function() {
  return this.defaults || {};
};

/**
 * Sets the data for this proxy.
 * 
 * @param {Object} value 
 *    The new data for this proxy
 * @override
*/
ModuleProxy.prototype.setData = function(data) {
  var dflt, key, obj, value, _ref;
  if (data == null) {
    data = {};
  }
  obj = {};
  _ref = this.getDefaults();
  for (key in _ref) {
    dflt = _ref[key];
    value = key in data ? data[key] : dflt;
    obj[key] = value;
  }
  ModuleProxy.__super__.setData.call(this, obj);
  return data;
};

/**
*/
ModuleProxy.prototype.destroy = function() {};

/**
 * The Module class.
 *
 * @param {Object}  config        The configuration object
 * @param {Object}  viewComponent The player's container element
 * @constructor
 * @private
 * @extends {puremvc.Facade}
*/
function Module(viewComponent) {
  this.viewComponent = viewComponent;
  this.performance = {
    init: Date.now()
  };
  Module.__super__.constructor.call(this, this.getModuleName() + "-" + Utils.createUID());
  this.dispatcher = new EventDispatcher(this);
  this.logger = Logger.instance;
  this.moduleMap = {};
}


__extends(Module, puremvc.Facade);


Module.prototype.logger = null;

Module.prototype.config = null;

Module.prototype.moduleName = null;

Module.prototype.moduleMap = null;

Module.prototype.viewComponent = null;

Module.prototype.dispatcher = null;

Module.prototype.oninitialized = null;

Module.prototype.onerror = null;

Module.prototype.parentModule = null;

Module.prototype.performance = null;

/**
 * Initialization function.
 *
 * @param {Object}  config  The plugin's configuration object.
*/
Module.prototype.initialize = function(config, parentModule) {
  this.config = config;
  this.parentModule = parentModule;
  this.loadModuleResources().then(this.resourcesLoaded.bind(this))["catch"](this.resourcesError.bind(this));
};

/**
*/
Module.prototype.loadModuleResources = function(resources) {
  var resource, _i, _len;
  if (resources == null) {
    resources = this.config.resources;
  }
  if (!(resources != null ? resources.length : void 0) > 0) {
    return Promise.resolve();
  }
  for (_i = 0, _len = resources.length; _i < _len; _i++) {
    resource = resources[_i];
    resource.src = this.evaluatePaths(resource.src);
    if (resource.debug != null) {
      resource.debug = this.evaluatePaths(resource.debug);
    }
  }
  return AMP.addResources(resources);
};

/**
*/
Module.prototype.evaluatePaths = function(path) {
  var paths, _ref, _ref1;
  if (!(path != null)) {
    return;
  }
  paths = this.config.paths || ((_ref = this.parentModule) != null ? (_ref1 = _ref.config) != null ? _ref1.paths : void 0 : void 0);
  if (paths != null) {
    path = path.replace(/[\$#]{paths\.[^}]*}/g, function(match) {
      return DataBinding["eval"](match, null, null, null, paths);
    });
  }
  return path;
};

/**
 * The resources failed to load.
 *
 * @private
*/
Module.prototype.resourcesError = function(error) {
  if (typeof this.onerror === "function") {
    this.onerror(this);
  }
};

/**
 * The resources have finished loaded, load the extensions.
 *
 * @private
*/
Module.prototype.resourcesLoaded = function() {
  this.createFramework();
  if (typeof this.oninitialized === "function") {
    this.oninitialized(this);
  }
};

/**
 * Framework based initialization function for defining default
 * mvc classes. Meant to be overwritten by base classes.
*/
Module.prototype.createFramework = function() {
  this.createModel();
  this.createController();
  this.createView();
};

/**
*/
Module.prototype.createModel = function() {
  this.registerProxy(new ModuleProxy(this.config));
};

/**
*/
Module.prototype.createView = function() {};

/**
*/
Module.prototype.createController = function() {
  this.registerCommand(Notifications.DISPATCH_EVENT, DispatchEventCommand);
};

/**
*/
Module.prototype.getModuleName = function() {
  return this.moduleName;
};

/**
 * @return {Object} The configuration object.
 * @expose
*/
Module.prototype.getConfig = function() {
  return this.config;
};

/**
*/
Module.prototype.hasModule = function(moduleName) {
  return this.moduleMap[moduleName] != null;
};

/**
*/
Module.prototype.getModules = function() {
  var key, modules, value, _ref;
  modules = {};
  _ref = this.moduleMap;
  for (key in _ref) {
    value = _ref[key];
    modules[key] = value.module;
  }
  return modules;
};

/**
*/
Module.prototype.registerModule = function(module) {
  var adaptor, moduleName;
  moduleName = module.getModuleName();
  if (!(module != null) || (this.moduleMap[moduleName] != null)) {
    return;
  }
  adaptor = new ModuleAdapter(module);
  this.moduleMap[moduleName] = adaptor;
  this.registerMediator(adaptor);
  module.onRegister();
};

/**
*/
Module.prototype.retrieveModule = function(moduleName) {
  return this.moduleMap[moduleName].module;
};

/**
*/
Module.prototype.removeModule = function(moduleName) {
  var adaptor, module;
  adaptor = this.moduleMap[moduleName];
  if (!(adaptor != null)) {
    return;
  }
  delete this.moduleMap[moduleName];
  this.removeMediator(moduleName);
  module = adaptor.module;
  module.onRemove.call(module);
  return module;
};

/** List INotification interests.
*/
Module.prototype.listNotificationInterests = function() {
  return [];
};

/** List Notification publications
*/
Module.prototype.listNotificationPublications = function() {
  return [];
};

/** Get the IMediator's view component.
*/
Module.prototype.getViewComponent = function() {
  return this.viewComponent;
};

/** Set the IMediator's view component.
*/
Module.prototype.setViewComponent = function(viewComponent) {
  this.viewComponent = viewComponent;
  return viewComponent;
};

/** Called by the parent module when the Module is registered
*/
Module.prototype.onRegister = function() {};

/** Called by the parent module when the Module is removed
*/
Module.prototype.onRemove = function() {};

/** Destroys the module
*/
Module.prototype.destroy = function() {
  var key, value, _ref, _ref1;
  if (this.getModules() != null) {
    _ref = this.getModules();
    for (key in _ref) {
      value = _ref[key];
      this.removeModule(key);
      value.destroy();
    }
  }
  if ((_ref1 = this.retrieveProxy(ModuleProxy.NAME)) != null) {
    if (typeof _ref1.destroy === "function") {
      _ref1.destroy();
    }
  }
  puremvc.Facade.removeCore(this.multitonKey);
  if (this.viewComponent != null) {
    this.viewComponent.innerHTML = "";
    this.viewComponent.className = "";
  }
  for (key in this) {
    try {
      this[key] = null;
    } catch (error) {

    }
    delete this[key];
  }
};

/**
 * Adds a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @expose
*/
Module.prototype.addEventListener = function(type, func) {
  this.dispatcher.addEventListener(type, func);
};

/**
 * Adds a listener for a given event type and removes it after it has been triggered once.
*/
Module.prototype.once = function(type, func) {
  this.dispatcher.once(type, func);
};

/**
*/
Module.prototype.logEvent = function(event) {
  var prefix;
  if (/(timeupdate|progress|fragmentloaded|fragmentloadstart)/.test(event.type) === true) {
    return;
  }
  prefix = this.getModuleName().toUpperCase();
  if (event.dispatcher) {
    prefix += " " + event.dispatcher;
  }
  this.logger.log("[" + prefix + " EVENT] " + event.type, event);
};

/**
 * Dispathes and event, triggering all event listener of the event's type.
 *
 * @param {!IEvent} event The event to dispatch.
 * @expose
*/
Module.prototype.dispatchEvent = function(event) {
  this.logEvent(event);
  this.dispatcher.dispatchEvent(event);
};

/**
 * Removes a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @return {?Function} the handler that was removed if any
 * @expose
*/
Module.prototype.removeEventListener = function(type, func) {
  this.dispatcher.removeEventListener(type, func);
};

/**
 * Creates a new EventDispatcher
 *
 * @constructor
 * @private
 * @implements {IEventDispatcher}
*/
function EventDispatcher(_target) {
  this._target = _target != null ? _target : this;
  this._listenerMap = {};
}

/**
 * Adds a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @param {boolean=} capture
*/
EventDispatcher.prototype.addEventListener = function(type, func, capture) {
  if (!(func != null) || !(type != null)) {
    return;
  }
  if (!(this._listenerMap[type] != null)) {
    this._listenerMap[type] = [];
  }
  if (this._listenerMap[type].indexOf(func) !== -1) {
    return;
  }
  this._listenerMap[type].push(func);
};

/**
 * Adds a listener for a given event type and removes it after it has been triggered once.
*/
EventDispatcher.prototype.once = function(type, func) {
  func.once = true;
  this.addEventListener(type, func);
};

/**
 * Dispathes and event, triggering all event listener of the event's type.
 *
 * @param {!IEvent} event The event to dispatch.
*/
EventDispatcher.prototype.dispatchEvent = function(event) {
  var listener, listeners, remove, _i, _j, _len, _len1, _ref;
  listeners = this._listenerMap[event.type];
  listener = this._target["on" + event.type];
  event.target = this._target;
  remove = [];
  if (listener != null) {
    listener.apply(this._target, [event]);
  }
  if (!(listeners != null)) {
    return;
  }
  _ref = listeners.slice();
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    listener = _ref[_i];
    listener.apply(this._target, [event]);
    if (listener.once === true) {
      remove.push(listener);
    }
  }
  if (remove.length > 0) {
    for (_j = 0, _len1 = remove.length; _j < _len1; _j++) {
      listener = remove[_j];
      listeners.splice(listeners.indexOf(listener), 1);
    }
  }
};

/**
 * Removes a listener for a given event type.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {!Function} func  A function to call when the event is triggered.
 * @return {?Function} the handler that was removed if any
 * @param {boolean=} capture
*/
EventDispatcher.prototype.removeEventListener = function(type, func, capture) {
  var index, listeners;
  if (!(func != null) || !(type != null)) {
    return;
  }
  listeners = this._listenerMap[type];
  if (!(listeners != null)) {
    return;
  }
  index = listeners != null ? listeners.indexOf(func) : void 0;
  if (index === -1) {
    return;
  }
  return listeners.splice(index, 1);
};

/**
 * @constructor
 * @private
*/
function TrackList(list) {
  this.list = list != null ? list : [];
  TrackList.__super__.constructor.call(this);
  this.dispatcher = new EventDispatcher(this);
  this.handlers = {
    change: this.changeHandler.bind(this)
  };
}


__extends(TrackList, Array);


TrackList.prototype.onchange = null;

/**
*/
TrackList.prototype.changeHandler = function(event) {
  this.dispatchEvent(event);
};

/**
*/
TrackList.prototype.addEventListener = function(type, func, capture) {
  this.dispatcher.addEventListener(type, func, capture);
};

/**
*/
TrackList.prototype.dispatchEvent = function(event) {
  this.dispatcher.dispatchEvent(event);
};

/**
*/
TrackList.prototype.removeEventListener = function(type, func, capture) {
  return this.dispatcher.removeEventListener(type, func, capture);
};

/**
 * @param {string} key
 *     The key
 *
 * @param {Object} value
 *     The value
*/
TrackList.prototype.add = function(track, dispatch) {
  if (dispatch == null) {
    dispatch = true;
  }
  this.push(track);
  track.addEventListener("change", this.handlers.change);
  if (dispatch === true) {
    this.dispatchEvent({
      type: "addtrack"
    });
  }
};

/**
 * @param {string} key
 *     The module's key
 *
 * @return {Object}
 *     The item.
*/
TrackList.prototype.remove = function(track, dispatch) {
  var index;
  if (dispatch == null) {
    dispatch = true;
  }
  index = this.indexOf(track);
  if (index === -1) {
    return;
  }
  this.splice(index, 1);
  track.removeEventListener("change", this.handlers.change);
  if (dispatch === true) {
    this.dispatchEvent({
      type: "removetrack"
    });
  }
  return track;
};

TrackList.prototype.clear = function() {
  var index, track, _i, _len;
  if (this.length === 0) {
    return;
  }
  for (index = _i = 0, _len = this.length; _i < _len; index = ++_i) {
    track = this[index];
    this.remove(track, false);
    this[index] = null;
    delete this[index];
  }
  this.dispatchEvent({
    type: "removetrack"
  });
};

TrackList.prototype.getTrackById = function(id) {
  var track, _i, _len;
  for (_i = 0, _len = this.length; _i < _len; _i++) {
    track = this[_i];
    if (track.id === id) {
      return track;
    }
  }
};

/** 
 * The InstallPlayer class.
 *   
 * @constructor
 * @private 
 * @param {Object} viewComponent
*/
function InstallPlayer(viewComponent) {
  var anchor, div, img, message;
  viewComponent.className = Namespace.PREFIX + "player";
  div = UI.create("install-flash", viewComponent);
  message = UI.create(null, div, "p", "To view this page ensure that Adobe Flash Player version 10.2.0 or greater is installed.");
  anchor = UI.create(null, div, "a");
  anchor.href = 'http://www.adobe.com/go/getflashplayer';
  img = UI.create(null, anchor, "img");
  img.src = "//www.adobe.com/images/shared/download_buttons/get_flash_player.gif";
  img.alt = "Get Adobe Flash player";
}

InstallPlayer.prototype.initialize = function() {};

/**
*/
InstallPlayer.prototype.getModules = function() {
  return [];
};

/**
 * @constructor
 * @private
*/
function Manager() {
  this.map = {};
}

/** 
 * @type {Object.<string, Object>}
 * @private
*/
Manager.prototype.map = null;

/**
 * @param {string} key
 *     The key
 * 
 * @param {Object} value
 *     The value
*/
Manager.prototype.add = function(key, value) {
  this.map[key] = value;
};

/**
 * @param {string} key
 *     The module's key
 * 
 * @return {Object}
 *     The item at the given key.
*/
Manager.prototype.item = function(key) {
  return this.map[key];
};

/**
 * @param {string} key
 *     The module's key
 * 
 * @return {Object}
 *     The item.
*/
Manager.prototype.remove = function(key) {
  var item;
  item = this.map[key];
  if (item != null) {
    this.map[key] = null;
    delete this.map[key];
  }
  return item;
};

function URL() {}

/**
 * The URL to send the request to.
 *
 * @type {String}
*/
URL.prototype.url = null;

/**
 * The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. 
 * Ignored for non-HTTP(S) URLs.
 *
 * @type {String}
*/
URL.prototype.method = null;

/**
 * A Boolean that indicates whether or not cross-site Access-Control 
 * requests should be made using credentials such as cookies or authorization 
 * headers.
 *
 * @type {Boolean}
*/
URL.prototype.withCredentials = null;

/**
 * A key value map of http headers to include in the reques
 * 
 * @type {Object}
*/
URL.prototype.headers = null;

/**
 * Data to send with a POST request  
 * 
 * @type {Object}
*/
URL.prototype.data = null;

function Authorization(key, token, expiration) {
  this.key = key;
  this.token = token;
  this.expiration = expiration;
}

Authorization.prototype.key = null;

Authorization.prototype.token = null;

Authorization.prototype.expiration = null;

/**
 * @constructor
 * @extends {Manager}
*/
function ResourceManager() {
  ResourceManager.__super__.constructor.call(this);
}


__extends(ResourceManager, Manager);


ResourceManager.prototype.js = function(src, resource) {
  return Utils.loadScript(src, document.body);
};

ResourceManager.prototype.css = function(src, resource) {
  var _this = this;
  return new Promise(function(resolve, reject) {
    try {
      Utils.loadStyleSheet(src);
    } catch (error) {
      reject();
    }
    resolve(resource);
  });
};

ResourceManager.prototype.json = function(src, resource) {
  var _this = this;
  return Utils.requestJson(resource.src).then(function(data) {
    resource.data = data;
    return resource;
  });
};

/**
 * @override
*/
ResourceManager.prototype.add = function(resource) {
  var item, promise, src, type,
    _this = this;
  src = Logger.instance.enabled && (resource.debug != null) ? resource.debug : resource.src;
  item = this.item(src);
  if (typeof (item != null ? item.then : void 0) === "function") {
    return item;
  }
  if (resource.enabled === false || item instanceof Object) {
    return Promise.resolve();
  }
  type = resource.type || Utils.getMimeType(src);
  if (type === Utils.mimeTypes.js || /javascript/.test(type)) {
    promise = this.js(src, resource);
  } else if (type === Utils.mimeTypes.css) {
    promise = this.css(src, resource);
  } else if (type === Utils.mimeTypes.json || /json/.test(type)) {
    promise = this.json(src, resource);
  } else if (type !== Utils.mimeTypes.swf) {
    promise = Utils.request(src);
  }
  if (!(promise != null)) {
    return Promise.resolve();
  }
  promise = promise.then(function(resource) {
    Manager.prototype.add.call(_this, src);
    return resource;
  });
  ResourceManager.__super__.add.call(this, src, promise);
  return promise;
};

/**
 * @param {Array.<akamai.amp.Resource>} resource
 *    The resource
 *
 * @param {Function} callback
*/
ResourceManager.prototype.addResources = function(resources) {
  var promises, resource, _i, _len;
  if (!(resources != null ? resources.length : void 0) > 0) {
    return Promise.resolve();
  }
  promises = [];
  for (_i = 0, _len = resources.length; _i < _len; _i++) {
    resource = resources[_i];
    promises.push(this.add.bind(this, resource));
  }
  return Utils.chain(promises);
};

/**
 * The PluginsInitializedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PluginsInitializedCommand() {
  PluginsInitializedCommand.__super__.constructor.call(this);
}


__extends(PluginsInitializedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
PluginsInitializedCommand.prototype.execute = function(notification) {
  var media, _ref;
  this.facade.performance.ready = Date.now();
  this.sendNotification(Notifications.READY, this.facade.config);
  media = (_ref = this.facade.config) != null ? _ref.media : void 0;
  if (media != null) {
    setTimeout(this.sendNotification.bind(this, Notifications.SET_MEDIA, media), 0);
  }
};

/** 
 * The PlayerCommand class. Base class for commands that need access 
 * to the application state or the media
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PlayerCommand() {
  PlayerCommand.__super__.constructor.call(this);
}


__extends(PlayerCommand, puremvc.SimpleCommand);


PlayerCommand.prototype.applicationState = null;

PlayerCommand.prototype.media = null;

PlayerCommand.prototype.player = null;

PlayerCommand.prototype.playback = null;

PlayerCommand.prototype.config = null;

PlayerCommand.prototype.logger = null;

PlayerCommand.prototype.bindings = null;

PlayerCommand.prototype.params = null;

PlayerCommand.prototype.playerCore = null;

PlayerCommand.prototype.security = null;

PlayerCommand.prototype.tracks = null;

/** @override
*/
PlayerCommand.prototype.initializeNotifier = function(key) {
  var _ref;
  PlayerCommand.__super__.initializeNotifier.call(this, key);
  this.player = this.facade.player || this.facade;
  this.applicationState = this.player.appState;
  this.media = this.player.mediaProxy;
  this.config = this.player.configuration;
  this.logger = this.player.logger;
  this.bindings = this.player.bindings;
  this.params = this.player.params;
  this.playerCore = this.player.playerCore;
  this.security = this.player.security;
  this.tracks = this.player.tracks;
  this.playback = ((_ref = this.player.playerCore) != null ? _ref.getActivePlaybackCore() : void 0) || this.player.playback;
};

/**
 * The TogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function TogglePlayPauseCommand() {
  TogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(TogglePlayPauseCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
TogglePlayPauseCommand.prototype.execute = function(notification) {
  var note;
  if (this.applicationState.getSeeking()) {
    return;
  }
  switch (this.applicationState.getPlayState()) {
    case PlayState.ENDED:
      note = Notifications.REPLAY;
      break;
    case PlayState.PAUSED:
    case PlayState.READY:
      note = Notifications.PLAY;
      break;
    case PlayState.PLAYING:
      note = Notifications.PAUSE;
  }
  if (this.applicationState.getWaiting()) {
    if (this.facade.getMediaElement().paused === true) {
      note = Notifications.PLAY;
    }
  }
  this.sendNotification(note, true);
};

/**
 * The ToggleFullScreenCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ToggleFullScreenCommand() {
  ToggleFullScreenCommand.__super__.constructor.call(this);
}


__extends(ToggleFullScreenCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleFullScreenCommand.prototype.execute = function(notification) {
  var state;
  state = this.applicationState.getDisplayState() === DisplayState.FULL_SCREEN ? DisplayState.NORMAL : DisplayState.FULL_SCREEN;
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, state);
};

/**
 * The PlayerCommand class. Base class for commands that need access
 * to the application state or the media
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function PlayerEventCommand() {
  PlayerEventCommand.__super__.constructor.call(this);
}


__extends(PlayerEventCommand, PlayerCommand);


/**
 *
*/
PlayerEventCommand.prototype.dispatchEvent = function(type, detail) {
  var event;
  if (typeof type !== "string") {
    detail = type.getBody() != null ? type.getBody() : {};
    type = type.getName();
  }
  event = new Event(type.toLowerCase(), detail);
  this.sendNotification(Notifications.DISPATCH_EVENT, event);
};

/**
 *
*/
PlayerEventCommand.prototype.dispatchEventAfterCommand = function(type, detail) {
  setTimeout(this.dispatchEvent.bind(this, type, detail), 0);
};

/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
PlayerEventCommand.prototype.execute = function(notification) {
  this.dispatchEvent(notification);
};

/**
 * The PlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function PlayingCommand() {
  PlayingCommand.__super__.constructor.call(this);
}


__extends(PlayingCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlayingCommand.prototype.execute = function(notification) {
  if (this.applicationState.getIsUserActive() === true) {
    return;
  }
  if (this.facade.getMediaElement().currentTime === 0 && this.media.started === false && this.applicationState.getSeeking() === false) {
    this.media.started = true;
    this.sendNotification(Notifications.MEDIA_SEQUENCE_STARTED);
  }
  if (this.applicationState.getPlayState() === PlayState.PLAYING) {
    PlayingCommand.__super__.execute.call(this, notification);
  } else {
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FullscreenMode = {
  /**
   *
  */

  EXTERNAL: "external"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ControlsMode = {
  /**
   * Constant representing auto controls mode
  */

  AUTO: "auto",
  /**
   * Constant representing the persistent controls mode
  */

  PERSISTENT: "persistent",
  /**
   * Constant representing none controls mode
  */

  NONE: "none"
};

/**
 * The PauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function PauseCommand() {
  PauseCommand.__super__.constructor.call(this);
}


__extends(PauseCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PauseCommand.prototype.execute = function(notification) {
  this.playback.pause();
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  PauseCommand.__super__.execute.call(this, notification);
};

/**
 * The ChangeAutoplayCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeAutoplayCommand() {
  ChangeAutoplayCommand.__super__.constructor.call(this);
}


__extends(ChangeAutoplayCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeAutoplayCommand.prototype.execute = function(notification) {
  this.config.setAutoplay(notification.getBody());
};

/**
 * The ChangeLoopCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeLoopCommand() {
  ChangeLoopCommand.__super__.constructor.call(this);
}


__extends(ChangeLoopCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeLoopCommand.prototype.execute = function(notification) {
  this.config.setLoop(notification.getBody());
};

/**
 * The ChangeVolumeCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeVolumeCommand() {
  ChangeVolumeCommand.__super__.constructor.call(this);
}


__extends(ChangeVolumeCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChangeVolumeCommand.prototype.execute = function(notification) {
  this.playback.setVolume(Utils.clamp(notification.getBody(), 0, 1));
};

/**
 * The MediaValidatedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MediaValidatedCommand() {
  MediaValidatedCommand.__super__.constructor.call(this);
}


__extends(MediaValidatedCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
MediaValidatedCommand.prototype.execute = function(notification) {
  var canAutoPlay, container, media, mediaElement, muted, playsinline, unmute,
    _this = this;
  media = notification.getBody();
  mediaElement = this.facade.getMediaElement();
  this.sendNotification(Notifications.MEDIA_CHANGE, media);
  canAutoPlay = this.applicationState.getLocked() === false && this.facade.getAutoplay() === true;
  playsinline = this.config.getPlaysInline();
  mediaElement.playsInline = playsinline != null ? playsinline : true;
  muted = this.config.getMuted();
  if (muted != null) {
    this.playback.setMuted(muted);
  }
  if (canAutoPlay && muted) {
    container = this.facade.getContainer();
    unmute = function() {
      _this.config.setMuted(false);
      _this.facade.setMuted(false);
      container.removeEventListener("click", unmute);
    };
    container.addEventListener("click", unmute);
  }
  if (canAutoPlay) {
    setTimeout(this.sendNotification.bind(this, Notifications.PLAY, true), 0);
  }
};

/**
 * The SeekCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekCommand() {
  SeekCommand.__super__.constructor.call(this);
}


__extends(SeekCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
SeekCommand.prototype.execute = function(notification) {
  var time, video;
  time = notification.getBody();
  if (time === 0 && this.media.getType() === Utils.mimeTypes.m3u8) {
    time = 0.25;
  }
  if (time === this.playback.getCurrentTime()) {
    return;
  }
  if (this.playback.getStarted() === true) {
    this.sendNotification(Notifications.WAITING);
  }
  this.sendNotification(Notifications.DISPLAY_TIME, {
    currentTime: time,
    duration: this.playback.getDuration()
  });
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  video = this.facade.getMediaElement();
  this.applicationState.pausedBeforeSeek = video.paused;
  this.playback.setCurrentTime(time);
  if (this.playback.getStarted() !== true) {
    this.sendNotification(Notifications.TIME_UPDATE, time);
  }
};

/**
 * The SeekingCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekingCommand() {
  SeekingCommand.__super__.constructor.call(this);
}


__extends(SeekingCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
SeekingCommand.prototype.execute = function(notification) {
  if (this.applicationState.getSeeking() === true) {
    this.applicationState.setSeekRequested(true);
    return;
  }
  if (this.applicationState.getEnded()) {
    this.applicationState.setEnded(false);
  }
  if (this.facade.getMediaElement().currentTime === 0) {
    this.media.started = false;
  }
  this.applicationState.setSeeking(true);
  SeekingCommand.__super__.execute.call(this, notification);
};

/**
 * The SeekedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function SeekedCommand() {
  SeekedCommand.__super__.constructor.call(this);
}


__extends(SeekedCommand, PlayerEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
SeekedCommand.prototype.execute = function(notification) {
  var _this = this;
  if (this.applicationState.getIsUserActive() === true) {
    setTimeout(this.sendNotification.bind(this, notification.getName(), notification.getBody()), 100);
    return;
  }
  setTimeout(function() {
    var state;
    _this.applicationState.setSeeking(false);
    _this.dispatchEvent(notification);
    _this.applicationState.setSeekRequested(false);
    _this.sendNotification(UserNotifications.SEEKED, notification.getBody());
    if (_this.applicationState.getPlayState() === PlayState.READY) {
      return;
    }
    state = _this.applicationState.pausedBeforeSeek === true || _this.facade.retrieveProxy(PlaybackProxy.NAME).getPaused() === true ? PlayState.PAUSED : PlayState.PLAYING;
    if (_this.applicationState.displayState === "full-screen" && _this.applicationState.device === "ipad" && _this.facade.retrieveProxy(PlaybackProxy.NAME).getPaused() !== _this.facade.getMediaElement().paused) {
      state = _this.facade.getMediaElement().paused === true ? PlayState.PAUSED : PlayState.PLAYING;
    }
    _this.sendNotification(Notifications.CHANGE_PLAY_STATE, state);
  }, 1);
};

/**
 * The ReplayCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ReplayCommand() {
  ReplayCommand.__super__.constructor.call(this);
}


__extends(ReplayCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ReplayCommand.prototype.execute = function(notification) {
  if (typeof this.playback.replay === "function") {
    this.playback.replay();
    return;
  }
  this.sendNotification(Notifications.SET_MEDIA, this.media.getData());
};

/**
 * The EndCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function EndCommand() {
  EndCommand.__super__.constructor.call(this);
}


__extends(EndCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EndCommand.prototype.execute = function(notification) {
  if (this.applicationState.getEnded()) {
    return;
  }
  this.playback.setEnabled(false);
  this.playback.pause();
  this.playback.seek(this.playback.getDuration()).then(this.sendNotification.bind(this, Notifications.ENDED));
};

/**
 * The EndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function EndedCommand() {
  EndedCommand.__super__.constructor.call(this);
}


__extends(EndedCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EndedCommand.prototype.execute = function(notification) {
  if (this.applicationState.getEnded()) {
    return;
  }
  this.applicationState.setEnded(true);
  EndedCommand.__super__.execute.call(this, notification);
  if (this.config.getLoop() === true) {
    this.sendNotification(Notifications.REPLAY);
  } else if (this.applicationState.getHasPostContent() === false) {
    this.sendNotification(Notifications.MEDIA_SEQUENCE_ENDED);
  }
};

/**
 * The StartCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function StartCommand() {
  StartCommand.__super__.constructor.call(this);
}


__extends(StartCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
StartCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.PLAY_REQUEST);
  this.sendNotification(Notifications.DISPLAY_TIME, {
    currentTime: 0,
    duration: this.media.getDuration()
  });
  this.sendNotification(Notifications.STARTED, notification.getBody());
};

/**
 * The IsUserActiveCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function IsUserActiveCommand() {
  IsUserActiveCommand.__super__.constructor.call(this);
}


__extends(IsUserActiveCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IsUserActiveCommand.prototype.execute = function(notification) {
  this.applicationState.setIsUserActive(notification.getBody());
};

/**
 * The WaitingCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function WaitingCommand() {
  WaitingCommand.__super__.constructor.call(this);
}


__extends(WaitingCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
WaitingCommand.prototype.execute = function(notification) {
  if (this.applicationState.getWaiting()) {
    return;
  }
  this.applicationState.setWaiting(true);
  WaitingCommand.__super__.execute.call(this, notification);
};

/**
 * The ChangeMutedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeMutedCommand() {
  ChangeMutedCommand.__super__.constructor.call(this);
}


__extends(ChangeMutedCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeMutedCommand.prototype.execute = function(notification) {
  this.playback.setMuted(notification.getBody());
};

/**
 * The AuthorizedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function AuthorizedCommand() {
  AuthorizedCommand.__super__.constructor.call(this);
}


__extends(AuthorizedCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AuthorizedCommand.prototype.execute = function(notification) {
  if (this.security.getSession() != null) {
    return;
  }
  this.security.setSession(UI.createUID());
  this.sendNotification(Notifications.MEDIA_VALIDATED, this.media.getData());
  AuthorizedCommand.__super__.execute.call(this, notification);
};

/**
 * The InitializedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function InitializedCommand() {
  InitializedCommand.__super__.constructor.call(this);
}


__extends(InitializedCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
InitializedCommand.prototype.execute = function(notification) {
  this.playback.initialized = true;
};

/**
 * The RegisterPlaybackCoreCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function RegisterPlaybackCoreCommand() {
  RegisterPlaybackCoreCommand.__super__.constructor.call(this);
}


__extends(RegisterPlaybackCoreCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RegisterPlaybackCoreCommand.prototype.execute = function(notification) {
  this.playerCore.registerPlaybackCore(notification.getBody());
};

/**
 * The RecordContentChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function RecordContentChangeCommand() {
  RecordContentChangeCommand.__super__.constructor.call(this);
}


__extends(RecordContentChangeCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RecordContentChangeCommand.prototype.execute = function(notification) {
  var content;
  content = notification.getBody();
  this.sendNotification(Notifications.CHANGE_CONTENT, {
    from: this.media.getData(),
    to: content
  });
  this.media.updateData(content);
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS);
  this.sendNotification(Notifications.CHANGE_CONTENT, this.media.getData());
};

/**
 * The TimeupdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function TimeUpdateCommand() {
  TimeUpdateCommand.__super__.constructor.call(this);
}


__extends(TimeUpdateCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
TimeUpdateCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.DISPLAY_TIME, {
    currentTime: this.playback.getCurrentTime(),
    duration: this.playback.getDuration()
  });
  TimeUpdateCommand.__super__.execute.call(this, notification);
};

/**
 * The ToggleMutedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ToggleMutedCommand() {
  ToggleMutedCommand.__super__.constructor.call(this);
}


__extends(ToggleMutedCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleMutedCommand.prototype.execute = function(notification) {
  this.playback.setMuted(!this.playback.getMuted());
};

/**
 * The PlayRequestCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function PlayRequestCommand() {
  PlayRequestCommand.__super__.constructor.call(this);
}


__extends(PlayRequestCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlayRequestCommand.prototype.execute = function(notification) {
  if (this.media.started === true) {
    return;
  }
  this.media.started = true;
  PlayRequestCommand.__super__.execute.call(this, notification);
  this.sendNotification(Notifications.WAITING);
  this.sendNotification(Notifications.MEDIA_SEQUENCE_STARTED);
};

/**
 * The EnableVideoEventsCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function EnableVideoEventsCommand() {
  EnableVideoEventsCommand.__super__.constructor.call(this);
}


__extends(EnableVideoEventsCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
EnableVideoEventsCommand.prototype.execute = function(notification) {
  var event, events, video, _i, _len;
  video = this.player.getMediaElement();
  events = notification.getBody();
  for (_i = 0, _len = events.length; _i < _len; _i++) {
    event = events[_i];
    video.addEventListener(event, this.playback.handlers[event]);
  }
};

/**
 * The DisableVideoEventsCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function DisableVideoEventsCommand() {
  DisableVideoEventsCommand.__super__.constructor.call(this);
}


__extends(DisableVideoEventsCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
DisableVideoEventsCommand.prototype.execute = function(notification) {
  var event, events, video, _i, _len;
  video = this.player.getMediaElement();
  events = notification.getBody();
  for (_i = 0, _len = events.length; _i < _len; _i++) {
    event = events[_i];
    video.removeEventListener(event, this.playback.handlers[event]);
  }
};

/**
 * The PauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function VolumeChangeCommand() {
  VolumeChangeCommand.__super__.constructor.call(this);
}


__extends(VolumeChangeCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
VolumeChangeCommand.prototype.execute = function(notification) {
  this.applicationState.setVolume(notification.getBody());
  VolumeChangeCommand.__super__.execute.call(this, notification);
};

/**
 * The HasPostContentCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function HasPostContentCommand() {
  HasPostContentCommand.__super__.constructor.call(this);
}


__extends(HasPostContentCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
HasPostContentCommand.prototype.execute = function(notification) {
  this.applicationState.setHasPostContent(notification.getBody());
};

/**
 * The EndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function MediaSequenceEndedCommand() {
  MediaSequenceEndedCommand.__super__.constructor.call(this);
}


__extends(MediaSequenceEndedCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaSequenceEndedCommand.prototype.execute = function(notification) {
  if (this.config.getLoop() === true) {
    MediaSequenceEndedCommand.__super__.execute.call(this, notification);
    this.sendNotification(Notifications.REPLAY);
  } else {
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ENDED);
    this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
    MediaSequenceEndedCommand.__super__.execute.call(this, notification);
  }
};

/**
 * The LockCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function LockCommand() {
  LockCommand.__super__.constructor.call(this);
}


__extends(LockCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
LockCommand.prototype.execute = function(notification) {
  var locked, note;
  locked = notification.getBody();
  note = locked ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  this.sendNotification(note, "locked");
  this.applicationState.setLocked(locked);
};

/**
 * The SeekCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function GoLiveCommand() {
  GoLiveCommand.__super__.constructor.call(this);
}


__extends(GoLiveCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
GoLiveCommand.prototype.execute = function(notification) {
  var _base;
  if (typeof (_base = this.playback).goLive === "function") {
    _base.goLive();
  }
};

/**
 * The ChangeActiveStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeActiveStateCommand() {
  ChangeActiveStateCommand.__super__.constructor.call(this);
}


__extends(ChangeActiveStateCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeActiveStateCommand.prototype.execute = function(notification) {
  var state;
  state = this.config.getControls().mode !== ControlsMode.PERSISTENT ? notification.getBody() : ActiveState.ACTIVE;
  this.applicationState.setActiveState(state);
};

/**
 * The ChangeDisplayStateCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function ChangeDisplayStateCommand() {
  ChangeDisplayStateCommand.__super__.constructor.call(this);
}


__extends(ChangeDisplayStateCommand, PlayerEventCommand);


ChangeDisplayStateCommand.interval = null;

/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChangeDisplayStateCommand.prototype.execute = function(notification) {
  var core, fullscreen, state, view,
    _this = this;
  state = notification.getBody();
  if (state === this.applicationState.getDisplayState()) {
    return;
  }
  this.applicationState.setDisplayState(state);
  if (this.config.getFullscreen().mode === FullscreenMode.EXTERNAL) {
    this.sendNotifications(state);
    return;
  }
  core = this.facade.getMediaElement();
  view = this.facade.getViewComponent();
  fullscreen = Utils.getFullScreenApi(view, core);
  if (state === DisplayState.FULL_SCREEN) {
    if (fullscreen.event != null) {
      if (view.mozRequestFullScreen != null) {
        document[fullscreen.event] = function(event) {
          if (!document.mozFullScreen) {
            return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
          }
        };
      } else {
        view[fullscreen.event] = function(event) {
          if (!(document[fullscreen.element] != null)) {
            return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
          }
        };
      }
    } else {
      clearInterval(ChangeDisplayStateCommand.interval);
      ChangeDisplayStateCommand.interval = setInterval(function() {
        if (core.webkitDisplayingFullscreen !== true) {
          _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
          clearInterval(ChangeDisplayStateCommand.interval);
        }
      }, 100);
    }
    if (fullscreen.error != null) {
      document.addEventListener(fullscreen.error, this.facade.logger.error.bind(this.facade.logger));
    }
    fullscreen.enter();
  } else if (state === DisplayState.NORMAL) {
    if (fullscreen != null) {
      if (typeof fullscreen.exit === "function") {
        fullscreen.exit();
      }
    }
    core[fullscreen.event] = null;
    clearInterval(ChangeDisplayStateCommand.interval);
  }
  this.sendNotifications(state);
};

ChangeDisplayStateCommand.prototype.sendNotifications = function(state) {
  setTimeout(this.sendNotification.bind(this, Notifications.FULL_SCREEN_CHANGE, state), 100);
  this.dispatchEvent("fullscreenchange", state === DisplayState.FULL_SCREEN);
};

/**
 * The PlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function PlayCommand() {
  PlayCommand.__super__.constructor.call(this);
}


__extends(PlayCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlayCommand.prototype.execute = function(notification) {
  var userInitiated;
  if (this.applicationState.getLocked() === true) {
    return;
  }
  userInitiated = notification.getBody();
  if (userInitiated && this.playback.initialized !== true) {
    this.sendNotification(Notifications.INITIALIZED);
  }
  if (this.playback.initialized !== true || (!this.media.getSrc() && !this.media.getSource())) {
    return;
  }
  if (!this.playback.getStarted()) {
    this.sendNotification(Notifications.START);
  }
  this.playback.play();
  PlayCommand.__super__.execute.call(this, notification);
};

/**
 * The ToggleActiveCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ToggleActiveCommand() {
  ToggleActiveCommand.__super__.constructor.call(this);
}


__extends(ToggleActiveCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ToggleActiveCommand.prototype.execute = function(notification) {
  var state;
  state = this.applicationState.getActiveState() === ActiveState.ACTIVE ? ActiveState.INACTIVE : ActiveState.ACTIVE;
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, state);
};

function Track(data) {
  this.data = data != null ? data : {};
  Track.__super__.constructor.call(this);
  Object.defineProperties(this, {
    kind: {
      get: this.getKind,
      enumerable: true,
      configurable: false
    },
    label: {
      get: this.getLabel,
      enumerable: true,
      configurable: false
    },
    language: {
      get: this.getLanguage,
      enumerable: true,
      configurable: false
    },
    id: {
      get: this.getId,
      enumerable: true,
      configurable: false
    },
    enabled: {
      get: this.getEnabled,
      set: this.setEnabled,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(Track, EventDispatcher);


Track.prototype.getKind = function() {
  return this.data.kind;
};

Track.prototype.getLabel = function() {
  return this.data.label;
};

Track.prototype.getLanguage = function() {
  return this.data.language;
};

Track.prototype.getId = function() {
  return this.data.id;
};

Track.prototype.setEnabled = function(value) {
  if (value === this.data.enabled) {
    return;
  }
  this.data.enabled = value;
  this.changeEnabled(value);
  this.dispatchEvent("change");
};

Track.prototype.changeEnabled = function(value) {};

Track.prototype.getEnabled = function() {
  return this.data.enabled;
};

function XMLUtils() {}

XMLUtils.createTextContent = function(xml, text) {
  var node;
  node = /[\&<>]/.test(text) ? xml.createCDATASection(text) : xml.createTextNode(text);
  return node;
};

XMLUtils.updateTextContent = function(node, str) {
  var text;
  text = XMLUtils.createTextContent(node.ownerDocument, str);
  node.removeChild(node.childNodes[0]);
  node.appendChild(text);
  return node;
};

XMLUtils.serialize = function(xml) {
  var serializer;
  if (!(xml != null)) {
    return;
  }
  if (typeof xml === "string") {
    return xml;
  }
  try {
    serializer = new XMLSerializer();
    return serializer.serializeToString(xml);
  } catch (err1) {
    try {
      serializer = document.implementation.createLSSerializer();
      return xmlSerializer.writeToString(xml);
    } catch (err3) {
      try {
        return xml.xml;
      } catch (err2) {

      }
    }
  }
};

XMLUtils.parse = function(text) {
  var parser, xmlDoc;
  if (window.DOMParser) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
  } else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(text);
  }
  return xmlDoc;
};

/**
 * Creates a new instance of TracksProxy.
 * 
 * @constructor
 * @private
 * @extends {DataBindingContext}
*/
function TracksProxy() {
  TracksProxy.__super__.constructor.call(this, null, {});
  this.data.audioTracks = new TrackList();
  this.data.videoTracks = new TrackList();
  this.data.textTracks = new TrackList();
}


__extends(TracksProxy, puremvc.Proxy);


/** @static
*/
TracksProxy.NAME = "TracksProxy";

TracksProxy.prototype.clear = function() {
  this.data.audioTracks.clear();
  this.data.videoTracks.clear();
  this.data.textTracks.clear();
};

TracksProxy.prototype.getAudioTracks = function() {
  return this.data.audioTracks;
};

TracksProxy.prototype.getVideoTracks = function() {
  return this.data.videoTracks;
};

TracksProxy.prototype.getTextTracks = function() {
  return this.data.textTracks;
};

/**
 * The base player class.
 *
 * @param {Object} config
 * @param {Object} viewComponent
 * @constructor
 * @private
 * @extends {Module}
*/
function Player(viewComponent) {
  Player.__super__.constructor.call(this, viewComponent);
}


__extends(Player, Module);


Player.prototype.moduleName = "amp";

Player.prototype.playerType = null;

Player.prototype.hidden = false;

Player.prototype.l10n = null;

Player.prototype.appState = null;

Player.prototype.mediaProxy = null;

Player.prototype.bindings = null;

Player.prototype.configuration = null;

Player.prototype.params = null;

Player.prototype.security = null;

Player.prototype.createModel = function() {
  this.appState = new ApplicationStateProxy();
  this.registerProxy(this.appState);
  this.bindings = new DataBindingProxy();
  this.registerProxy(this.bindings);
  this.security = new SecurityProxy();
  this.registerProxy(this.security);
  this.mediaProxy = new MediaProxy();
  this.registerProxy(this.mediaProxy);
  this.params = new ParamsProxy(this.config.params);
  this.registerProxy(this.params);
  this.configuration = new ConfigurationProxy(this.config);
  this.registerProxy(this.configuration);
};

/** @override
*/
Player.prototype.resourcesLoaded = function() {
  Player.__super__.resourcesLoaded.call(this);
  Object.defineProperties(this, {
    src: {
      get: this.getSrc,
      set: this.setSrc,
      enumerable: true,
      configurable: false
    },
    media: {
      get: this.getMedia,
      set: this.setMedia,
      enumerable: true,
      configurable: false
    },
    currentTime: {
      get: this.getCurrentTime,
      set: this.setCurrentTime,
      enumerable: true,
      configurable: false
    },
    autoplay: {
      get: this.getAutoplay,
      set: this.setAutoplay,
      enumerable: true,
      configurable: false
    },
    duration: {
      get: this.getDuration,
      enumerable: true,
      configurable: false
    },
    playState: {
      get: this.getPlayState,
      enumerable: true,
      configurable: false
    },
    seeking: {
      get: this.getSeeking,
      enumerable: true,
      configurable: false
    },
    paused: {
      get: this.getPaused,
      enumerable: true,
      configurable: false
    },
    ended: {
      get: this.getEnded,
      enumerable: true,
      configurable: false
    },
    volume: {
      get: this.getVolume,
      set: this.setVolume,
      enumerable: true,
      configurable: false
    },
    muted: {
      get: this.getMuted,
      set: this.setMuted,
      enumerable: true,
      configurable: false
    },
    mediaElement: {
      get: this.getMediaElement,
      enumerable: true,
      configurable: false
    },
    textTracks: {
      get: (function() {
        return this.getMediaElement().textTracks;
      }),
      enumerable: true,
      configurable: false
    },
    audioTracks: {
      get: this.getAudioTracks,
      enumerable: true,
      configurable: false
    },
    container: {
      get: this.getContainer,
      enumerable: true,
      configurable: false
    },
    loop: {
      get: this.getLoop,
      set: this.setLoop,
      enumerable: true,
      configurable: false
    },
    displayState: {
      get: this.getDisplayState,
      set: this.setDisplayState,
      enumerable: true,
      configurable: false
    },
    playbackRate: {
      get: this.getPlaybackRate,
      set: this.setPlaybackRate,
      enumerable: true,
      configurable: false
    },
    language: {
      get: this.getLanguage,
      set: this.setLanguage,
      enumerable: true,
      configurable: false
    },
    localization: {
      get: (function() {
        return this.retrieveProxy(LocalizationProxy.NAME);
      }),
      enumerable: true,
      configurable: false
    },
    version: {
      get: this.getVersion,
      enumerable: true,
      configurable: false
    },
    error: {
      get: this.getError,
      enumerable: true,
      configurable: false
    },
    hidden: {
      get: this.getHidden,
      set: this.setHidden,
      enumerable: true,
      configurable: false
    },
    mediaTransforms: {
      get: this.getMediaTransforms,
      enumerable: true,
      configurable: false
    },
    waiting: {
      get: this.getWaiting,
      enumerable: true,
      configurable: false
    },
    cues: {
      get: this.getCues,
      set: this.setCues,
      enumerable: true,
      configurable: false
    },
    quality: {
      get: this.getQuality,
      set: this.setQuality,
      enumerable: true,
      configurable: false
    },
    qualityMode: {
      get: this.getQualityMode,
      set: this.setQualityMode,
      enumerable: true,
      configurable: false
    },
    qualityLevels: {
      get: this.getQualityLevels,
      enumerable: true,
      configurable: false
    },
    debug: {
      get: this.getDebug,
      enumerable: true,
      configurable: false
    },
    settings: {
      get: this.getSettings,
      enumerable: true,
      configurable: false
    },
    mode: {
      get: this.getMode,
      enumerable: true,
      configurable: false
    }
  });
};

/** @override
*/
Player.prototype.createView = function() {
  if ((this.config.settings != null) && this.config.settings.enabled !== false) {
    this._settings = new SettingsMediator();
    this.registerMediator(this._settings);
  }
};

/** @override
*/
Player.prototype.createController = function() {
  Player.__super__.createController.call(this);
  this.registerCommand(Notifications.SETTINGS_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.CUES_CHANGE, PlayerEventCommand);
};

/** @override
*/
Player.prototype.setViewComponent = function(viewComponent) {
  viewComponent["amp"] = this;
  return Player.__super__.setViewComponent.call(this, viewComponent);
};

/**
*/
Player.prototype.getPlayerType = function() {
  return this.playerType;
};

/**
*/
Player.prototype.getVersion = function() {
  return AMP.getVersion();
};

/**
*/
Player.prototype.getDebug = function() {
  return this.config.debug;
};

/**
*/
Player.prototype.getMode = function() {
  return this.config.mode;
};

/**
*/
Player.prototype.createPlugins = function() {
  this.sendNotification(PluginNotifications.REGISTER_PLUGINS, this.config);
};

/**
*/
Player.prototype.createMediaElement = function() {
  return null;
};

/** @override
*/
Player.prototype.createFramework = function() {
  Player.__super__.createFramework.call(this);
  this.setMediaElement(this.createMediaElement());
  this.createPlugins();
};

/**
*/
Player.prototype.getLanguage = function() {
  return this.retrieveProxy(LocalizationProxy.NAME).getLanguage();
};

/**
*/
Player.prototype.setLanguage = function(value) {
  this.retrieveProxy(LocalizationProxy.NAME).setLanguage(value);
  return value;
};

/**
*/
Player.prototype.getLocalizedString = function(value) {
  try {
    return this.retrieveProxy(LocalizationProxy.NAME).getString(value);
  } catch (error) {
    return value;
  }
};

/**
 * @return {HTMLObject|HTMLMediaElement} The media playback DOM element.
*/
Player.prototype.getMediaElement = function() {
  return this.appState.getMediaElement();
};

/**
*/
Player.prototype.setMediaElement = function(value) {
  this.appState.setMediaElement(value);
  if (!(value.once != null)) {
    value.once = function(type, listener) {
      var handler, id;
      id = Utils.createUID();
      handler = function(id, type, listener, event) {
        this.removeEventListener(type, this[id]);
        delete this[id];
        listener(event);
      };
      this[id] = handler.bind(this, id, type, listener);
      this.addEventListener(type, this[id]);
    };
    value.once = value.once.bind(value);
  }
  value.amp = this;
  return value;
};

/**
 * @return {HTMLElement} The container div.
*/
Player.prototype.getContainer = function() {
  return this.getViewComponent();
};

/**
 * @return {HTMLElement} The container div.
*/
Player.prototype.getAudioTracks = function() {};

/**
 * @param   {string}  binding
 *    A data bound string to evaluate.
 *
 * @return {Object}
 *    The evaluated result
*/
Player.prototype.evaluateBinding = function(binding) {};

/**
 * @param   {Object}  binding
 *    A data bound object to evaluate.
 *
 * @param   {?Object}  params
 *    Optional parameters object to pass to the bindings
 *
 * @return {Object}
 *    The evaluated result
*/
Player.prototype.evaluateBindings = function(binding, params) {
  return AMP.evaluateBindings(binding, this.bindings.data, params);
};

/**
 * Determines if the core can play a given mimeType.
 *
 * @param   {string}  type
 *    The mimetype to check.
 *
 * @return  {string}  ""
 *    if the core can't play the mimeType
*/
Player.prototype.canPlayType = function(type) {};

/**
 * Loads the video.
*/
Player.prototype.load = function() {};

/**
 * Plays the currently loaded video.
*/
Player.prototype.play = function() {};

/**
 * Plays the currently loaded video from its start time.
*/
Player.prototype.replay = function() {};

/**
 * Pauses the currently loaded video.
*/
Player.prototype.pause = function() {};

/**
 * Ends video playback.
*/
Player.prototype.end = function() {};

/**
 * Sets user params.
 *
 * @param {Object} value The user params object.
*/
Player.prototype.setParams = function(value) {};

/**
 * Gets user params.
 *
 * @return {Object} The user params object.
*/
Player.prototype.getParams = function() {};

/**
 * Sets auto play flag.
 *
 * @param {boolean} value The autoplay flash.
*/
Player.prototype.setAutoplay = function(value) {};

/**
 * Gets auto play flag.
 *
 * @return {boolean} The autoplay flash.
*/
Player.prototype.getAutoplay = function() {};

/**
 * Sets player's loop flag.
 *
 * @param {boolean} value The loop flag.
*/
Player.prototype.setLoop = function(value) {};

/**
 * Gets player's loop flag.
 *
 * @return {boolean} The loop flag.
*/
Player.prototype.getLoop = function() {};

/**
 * Sets player's muted value.
 *
 * @param {boolean} value The muted value.
*/
Player.prototype.setMuted = function(value) {};

/**
 * Gets player's muted value.
 *
 * @return {boolean} The muted value.
*/
Player.prototype.getMuted = function() {};

/**
 * Mutes the player.
*/
Player.prototype.mute = function() {
  return this.setMuted(true);
};

/**
 * Unmutes the player.
*/
Player.prototype.unmute = function() {
  return this.setMuted(false);
};

/**
 * Sets the media object.
 *
 * @param {Object} value The media object for the video to play.
*/
Player.prototype.setMedia = function(value) {};

/**
 * Gets the media object.
 *
 * @return {Object} The media object for the video to play.
*/
Player.prototype.getMedia = function() {};

/**
 * Sets the current time of the video.
 *
 * @param {number} value The desired time to seek to.
*/
Player.prototype.setCurrentTime = function(value) {};

/**
 * Gets the current time of the video.
 *
 * @return {number} The current playhead time.
*/
Player.prototype.getCurrentTime = function() {};

/**
 * Gets the current time of the video as a UTC timestamp.
 *
 * @return {number} The current playhead time as a UTC timestamp.
*/
Player.prototype.getCurrentTimeUTC = function() {};

/**
 * Gets the current time of the video.
 *
 * @return {number} The current time of the video.
*/
Player.prototype.getDuration = function() {};

/**
 * Sets the source url of video.
 *
 * @param {string} value The source url of the video to play.
*/
Player.prototype.setSrc = function(value) {};

/**
 * Gets the source url of video.
 *
 * @return {string} The source url of the video to play.
*/
Player.prototype.getSrc = function() {};

/**
 * Sets the source url of video.
 *
 * @param {Array.<Object>} value An array of source objects to choose from.
*/
Player.prototype.setSource = function(value) {};

/**
 * Gets the source url of video.
 *
 * @return {Array.<Object>} An array of source objects to choose from.
*/
Player.prototype.getSource = function() {};

/**
 * Sets the source url of video.
 *
 * @param {number} value The source url of the video to play.
*/
Player.prototype.setVolume = function(value) {};

/**
 * Gets the source url of video.
 *
 * @return {number} The volume a number between 0 and 1.
*/
Player.prototype.getVolume = function() {};

/**
 * Gets the source url of video.
 *
 * @return {boolean} The source url of the video.
*/
Player.prototype.getSeeking = function() {};

/**
 * Gets the source url of video.
 *
 * @return {boolean} The source url of the video.
*/
Player.prototype.getPaused = function() {};

/**
 * Gets the source url of video.
 *
 * @return {number} The source url of the video.
*/
Player.prototype.getEnded = function() {};

/**
 * Sets the player's display state.
 *
 * @param {DisplayState} value
 *    The display state.
*/
Player.prototype.setDisplayState = function(value) {};

/**
 * Returns the player's display state.
 *
 * @return {DisplayState}
 *    The display state.
*/
Player.prototype.getDisplayState = function() {};

/**
 * Returns the player error.
 *
 * @return {Error}
 *    The Error
*/
Player.prototype.getError = function() {};

/**
 * Enters the player into full screen mode.
*/
Player.prototype.enterFullScreen = function() {};

/**
 * Exits the player out of full screen mode.
*/
Player.prototype.exitFullScreen = function() {};

/**
 * Show the player
*/
Player.prototype.setHidden = function(value) {
  var style;
  if (value === this.appState.getHidden()) {
    return;
  }
  this.appState.setHidden(value);
  style = this.viewComponent.style;
  if (value === true) {
    this.hiddenData = {
      width: style.width,
      height: style.height,
      paused: this.getPaused()
    };
    style.width = style.height = "0px";
    if (this.hiddenData.paused === false) {
      this.pause();
    }
  } else {
    style.width = this.hiddenData.width;
    style.height = this.hiddenData.height;
    if (this.hiddenData.paused === false) {
      this.play();
    }
    this.hiddenData = null;
  }
};

/**
 * Hide the player
*/
Player.prototype.getHidden = function() {
  return this.appState.getHidden();
};

/**
 * Records a content change
 *
 * @param {Object} content
 *    An object representing the new content
*/
Player.prototype.recordContentChange = function(content) {};

/**
 * Sets the rate of playback.
*/
Player.prototype.setPlaybackRate = function() {};

/**
 * Gets the rate of playback.
*/
Player.prototype.getPlaybackRate = function() {};

/**
 * Sets the list of cues.
*/
Player.prototype.setCues = function(value) {
  this.mediaProxy.setCues(value);
  return value;
};

/**
 * Gets the list of cues.
*/
Player.prototype.getCues = function() {
  return this.mediaProxy.getCues();
};

/**
 *
*/
Player.prototype.setQuality = function(value) {};

/**
 *
*/
Player.prototype.getQuality = function() {};

/**
 *
*/
Player.prototype.getQualityLevels = function() {};

/**
 *
*/
Player.prototype.getQualityMode = function() {};

/**
 *
*/
Player.prototype.setQualityMode = function(value) {};

/**
 * Gets the play state.
*/
Player.prototype.getPlaystate = function() {};

/**
 * Gets the list of media transforms
*/
Player.prototype.getMediaTransforms = function() {
  return this.mediaProxy.getTransforms();
};

/**
 * Authorizes a protected stream
*/
Player.prototype.authorize = function(authorization) {
  this.security.authorize(authorization);
};

/**
 * Force the player into live mode during DVR playback
*/
Player.prototype.goLive = function() {};

/**
 *
*/
Player.prototype.appendChild = function(element) {
  this.mediator.addLayer(element);
};

/**
 *
*/
Player.prototype.removeChild = function(element) {
  this.mediator.removeLayer(element);
};

/**
 *
*/
Player.prototype.getSettings = function() {
  var _ref;
  return ((_ref = this._settings) != null ? _ref.getSettings() : void 0) || {
    change: function() {}
  };
};

/**
 * The HTMLPlayer class.
 *
 * @param {Object} viewComponent
 * @constructor
 * @private
 * @extends {Player}
*/
function HTMLPlayer(viewComponent) {
  HTMLPlayer.__super__.constructor.call(this, viewComponent);
  this.fps = FPS;
}


__extends(HTMLPlayer, Player);


HTMLPlayer.prototype.playerType = "html";

HTMLPlayer.prototype.playerCore = null;

HTMLPlayer.prototype.tracks = null;

HTMLPlayer.prototype.mediator = null;

/** @override
*/
HTMLPlayer.prototype.createMediaElement = function() {
  var viewComponent;
  this.mediator = new MediaElementMediator("html5", "video");
  this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, this.mediator);
  viewComponent = this.mediator.getViewComponent();
  if (viewComponent.dataset == null) {
    viewComponent.dataset = {};
  }
  return viewComponent;
};

/** @override
*/
HTMLPlayer.prototype.createModel = function() {
  var playbackProxy;
  HTMLPlayer.__super__.createModel.call(this);
  this.registerProxy(new LocalizationProxy(this.config));
  playbackProxy = new PlaybackCoreProxy();
  this.registerProxy(playbackProxy);
  this.playerCore = new PlayerProxy(playbackProxy, this.config.getPlaybackOrder);
  this.registerProxy(this.playerCore);
  this.tracks = new TracksProxy();
  this.registerProxy(this.tracks);
  this.appState.setRenderMode(RenderMode.HTML);
  this.bindings.initialize();
};

/** @override
*/
HTMLPlayer.prototype.createView = function() {
  HTMLPlayer.__super__.createView.call(this);
  this.mediator = new PlayerMediator("html5", this.getViewComponent());
  this.registerMediator(this.mediator);
  this.registerMediator(new PluginAdapter());
  this.registerMediator(new VideoLayerMediator());
  this.registerMediator(new OverlayLayerMediator());
};

/** @override
*/
HTMLPlayer.prototype.createController = function() {
  HTMLPlayer.__super__.createController.call(this);
  this.registerCommand(PluginNotifications.PLUGINS_INITIALIZED, PluginsInitializedCommand);
  this.registerCommand(Notifications.PLAY, PlayCommand);
  this.registerCommand(Notifications.PLAYING, PlayingCommand);
  this.registerCommand(Notifications.PAUSE, PauseCommand);
  this.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
  this.registerCommand(Notifications.TOGGLE_FULL_SCREEN, ToggleFullScreenCommand);
  this.registerCommand(Notifications.CHANGE_DISPLAY_STATE, ChangeDisplayStateCommand);
  this.registerCommand(Notifications.TOGGLE_ACTIVE, ToggleActiveCommand);
  this.registerCommand(Notifications.CHANGE_ACTIVE_STATE, ChangeActiveStateCommand);
  this.registerCommand(Notifications.SET_MEDIA, SetMediaCommand);
  this.registerCommand(Notifications.CHANGE_MEDIA, ChangeMediaCommand);
  this.registerCommand(Notifications.MEDIA_VALIDATED, MediaValidatedCommand);
  this.registerCommand(Notifications.MEDIA_CHANGE, MediaChangeCommand);
  this.registerCommand(Notifications.UPDATE_DATA_BINDINGS, UpdateDataBindingsCommand);
  this.registerCommand(Notifications.START, StartCommand);
  this.registerCommand(Notifications.SEEK, SeekCommand);
  this.registerCommand(Notifications.SEEKING, SeekingCommand);
  this.registerCommand(Notifications.SEEKED, SeekedCommand);
  this.registerCommand(Notifications.CHANGE_VOLUME, ChangeVolumeCommand);
  this.registerCommand(Notifications.CHANGE_MUTED, ChangeMutedCommand);
  this.registerCommand(Notifications.CHANGE_AUTOPLAY, ChangeAutoplayCommand);
  this.registerCommand(Notifications.CHANGE_LOOP, ChangeLoopCommand);
  this.registerCommand(Notifications.END, EndCommand);
  this.registerCommand(Notifications.ENDED, EndedCommand);
  this.registerCommand(Notifications.REPLAY, ReplayCommand);
  this.registerCommand(Notifications.ERROR, ErrorCommand);
  this.registerCommand(Notifications.READY, ReadyCommand);
  this.registerCommand(Notifications.WAITING, WaitingCommand);
  this.registerCommand(Notifications.CHANGE_DURATION, ChangeDurationCommand);
  this.registerCommand(Notifications.CHANGE_PARAMS, ChangeParamsCommand);
  this.registerCommand(Notifications.IS_USER_ACTIVE, IsUserActiveCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZED, AuthorizedCommand);
  this.registerCommand(Notifications.INITIALIZED, InitializedCommand);
  this.registerCommand(Notifications.REGISTER_PLAYBACK_CORE, RegisterPlaybackCoreCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, TogglePlayPauseCommand);
  this.registerCommand(UserNotifications.SEEK, SeekCommand);
  this.registerCommand(Notifications.CHANGE_PLAYBACK_TARGET, ChangePlaybackTargetCommand);
  this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, PlaybackTargetChangeCommand);
  this.registerCommand(Notifications.RECORD_CONTENT_CHANGE, RecordContentChangeCommand);
  this.registerCommand(Notifications.TIME_UPDATE, TimeUpdateCommand);
  this.registerCommand(Notifications.TOGGLE_MUTED, ToggleMutedCommand);
  this.registerCommand(Notifications.VOLUME_CHANGE, VolumeChangeCommand);
  this.registerCommand(Notifications.PLAY_REQUEST, PlayRequestCommand);
  this.registerCommand(Notifications.HAS_POST_CONTENT, HasPostContentCommand);
  this.registerCommand(Notifications.LOCK, LockCommand);
  this.registerCommand(UserNotifications.GO_LIVE, GoLiveCommand);
  this.registerCommand(Notifications.PLAY_STATE_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.PROGRESS, PlayerEventCommand);
  this.registerCommand(Notifications.CAN_PLAY, PlayerEventCommand);
  this.registerCommand(Notifications.CAN_PLAY_THROUGH, PlayerEventCommand);
  this.registerCommand(Notifications.LOAD_START, PlayerEventCommand);
  this.registerCommand(Notifications.STARTED, PlayerEventCommand);
  this.registerCommand(Notifications.LOADED_METADATA, PlayerEventCommand);
  this.registerCommand(Notifications.DURATION_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.MEDIUM_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.TEMPORAL_TYPE_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.LANGUAGE_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.PLAYBACK_TARGET_AVAILABLE, PlayerEventCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZE, PlayerEventCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZATION_FAILED, PlayerEventCommand);
  this.registerCommand(SecurityNotifications.AUTHENTICATION_FAILED, PlayerEventCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZATION_EXPIRED, PlayerEventCommand);
  this.registerCommand(Notifications.FAIL_OVER_ATTEMPT, PlayerEventCommand);
  this.registerCommand(Notifications.IS_LIVE, PlayerEventCommand);
  this.registerCommand(Notifications.TIMED_METADATA, PlayerEventCommand);
  this.registerCommand(Notifications.PAUSED, PlayerEventCommand);
  this.registerCommand(Notifications.STALLED, PlayerEventCommand);
  this.registerCommand(Notifications.QUALITY_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.QUALITY_CHANGING, PlayerEventCommand);
  this.registerCommand(Notifications.QUALITY_LEVELS_LOADED, PlayerEventCommand);
  this.registerCommand(Notifications.MUTE_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.RESUME, PlayerEventCommand);
  this.registerCommand(Notifications.FRAGMENT_LOAD_START, PlayerEventCommand);
  this.registerCommand(Notifications.FRAGMENT_LOADED, PlayerEventCommand);
  this.registerCommand(Notifications.MEDIA_SEQUENCE_STARTED, PlayerEventCommand);
  this.registerCommand(Notifications.MEDIA_SEQUENCE_ENDED, MediaSequenceEndedCommand);
  this.registerCommand(Notifications.ENABLE_VIDEO_EVENTS, EnableVideoEventsCommand);
  this.registerCommand(Notifications.DISABLE_VIDEO_EVENTS, DisableVideoEventsCommand);
};

/** @override
*/
HTMLPlayer.prototype.setMediaElement = function(value) {
  var mediaElement;
  mediaElement = this.getMediaElement();
  if (mediaElement != null) {
    mediaElement.removeEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
  }
  value.addEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
  HTMLPlayer.__super__.setMediaElement.call(this, value);
  return value;
};

/**
 * HACK: Fix for iOS 10 manipulating controls property incorrectly after leaving fullscreen
*/
HTMLPlayer.prototype.presentationModeChanged = function(event) {
  if ("inline" === event.target.webkitPresentationMode) {
    event.target.controls = false;
  }
};

HTMLPlayer.prototype.evaluateBinding = function(binding) {
  return this.bindings.evaluateBinding(binding);
};

HTMLPlayer.prototype.recordContentChange = function(content) {
  this.sendNotification(Notifications.RECORD_CONTENT_CHANGE, content);
};

HTMLPlayer.prototype.canPlayType = function(type) {
  return this.retrieveProxy(PlaybackProxy.NAME).canPlayType(type);
};

HTMLPlayer.prototype.getAudioTracks = function() {
  return this.retrieveProxy(TracksProxy.NAME).getAudioTracks();
};

HTMLPlayer.prototype.load = function() {
  this.sendNotification(Notifications.LOAD);
};

HTMLPlayer.prototype.play = function() {
  this.sendNotification(Notifications.PLAY, true);
};

HTMLPlayer.prototype.replay = function() {
  this.sendNotification(Notifications.REPLAY);
};

HTMLPlayer.prototype.pause = function() {
  this.sendNotification(Notifications.PAUSE);
};

HTMLPlayer.prototype.end = function() {
  this.sendNotification(Notifications.END);
};

HTMLPlayer.prototype.setParams = function(value) {
  this.sendNotification(Notifications.CHANGE_PARAMS, value);
  return value;
};

HTMLPlayer.prototype.getParams = function() {
  return this.params.getData();
};

HTMLPlayer.prototype.setAutoplay = function(value) {
  this.sendNotification(Notifications.CHANGE_AUTOPLAY, value);
  return value;
};

HTMLPlayer.prototype.getAutoplay = function() {
  var autoPlay, playbackProxy, _ref;
  playbackProxy = this.retrieveProxy(PlaybackProxy.NAME);
  autoPlay = ((Utils.isAutoplaySupported() && this.configuration.getMuted()) || playbackProxy.initialized) && (this.configuration.getAutoplay() || ((_ref = this.getMedia()) != null ? _ref.autoplay : void 0) === true);
  return autoPlay;
};

HTMLPlayer.prototype.setLoop = function(value) {
  this.sendNotification(Notifications.CHANGE_LOOP, value);
  return value;
};

HTMLPlayer.prototype.getLoop = function() {
  return this.configuration.getLoop();
};

HTMLPlayer.prototype.setMuted = function(value) {
  this.sendNotification(Notifications.CHANGE_MUTED, value);
  return value;
};

HTMLPlayer.prototype.getMuted = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getMuted();
};

HTMLPlayer.prototype.setMedia = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, value);
  return value;
};

HTMLPlayer.prototype.getMedia = function() {
  return this.mediaProxy.getData();
};

HTMLPlayer.prototype.setCurrentTime = function(value) {
  this.sendNotification(Notifications.SEEK, value);
  return value;
};

HTMLPlayer.prototype.getCurrentTime = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getCurrentTime();
};

HTMLPlayer.prototype.getDuration = function() {
  return this.mediaProxy.getDuration();
};

HTMLPlayer.prototype.setSrc = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, {
    src: value
  });
  return value;
};

HTMLPlayer.prototype.getSrc = function() {
  return this.mediaProxy.getSrc();
};

HTMLPlayer.prototype.setSource = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, {
    source: value
  });
  return value;
};

HTMLPlayer.prototype.getSource = function() {
  return this.mediaProxy.getSource();
};

HTMLPlayer.prototype.setVolume = function(value) {
  this.sendNotification(Notifications.CHANGE_VOLUME, value);
  return value;
};

HTMLPlayer.prototype.getVolume = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getVolume();
};

HTMLPlayer.prototype.getSeeking = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getSeeking();
};

HTMLPlayer.prototype.getPaused = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getPaused();
};

HTMLPlayer.prototype.getEnded = function() {
  return this.appState.getEnded();
};

HTMLPlayer.prototype.getWaiting = function() {
  return this.appState.getWaiting();
};

HTMLPlayer.prototype.getError = function() {
  return this.getMediaElement().error;
};

HTMLPlayer.prototype.setDisplayState = function(value) {
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, value);
};

HTMLPlayer.prototype.getDisplayState = function(value) {
  return this.appState.getDisplayState();
};

HTMLPlayer.prototype.enterFullScreen = function() {
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.FULL_SCREEN);
};

HTMLPlayer.prototype.exitFullScreen = function() {
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
};

HTMLPlayer.prototype.setPlaybackRate = function(value) {
  var _ref;
  if (((_ref = this.ads) != null ? _ref.inProgress : void 0) === true || value === this.getMediaElement().playbackRate) {
    return;
  }
  this.getMediaElement().playbackRate = value;
  this.dispatchEvent(new Event(Events.PLAYBACK_RATE_CHANGE, value));
};

HTMLPlayer.prototype.getPlaybackRate = function() {
  return this.getMediaElement().playbackRate;
};

HTMLPlayer.prototype.getQualityLevels = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getQualityLevels();
};

HTMLPlayer.prototype.setQuality = function(value) {
  return this.retrieveProxy(PlaybackProxy.NAME).setQuality(value);
};

HTMLPlayer.prototype.getQuality = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getQuality();
};

HTMLPlayer.prototype.getQualityMode = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).getQualityMode();
};

HTMLPlayer.prototype.setQualityMode = function(value) {
  return this.retrieveProxy(PlaybackProxy.NAME).setQualityMode(value);
};

/**
 * Gets the play state.
*/
HTMLPlayer.prototype.getPlayState = function() {
  return this.appState.getPlayState();
};

/**
 * Force the player into live mode during DVR playback
*/
HTMLPlayer.prototype.goLive = function() {
  return this.retrieveProxy(PlaybackProxy.NAME).goLive();
};

/**
 * @override
*/
HTMLPlayer.prototype.destroy = function() {
  var _ref, _ref1;
  if ((_ref = this.retrieveProxy(PlayerProxy.NAME)) != null) {
    if ((_ref1 = _ref.activePlaybackCore) != null) {
      if (typeof _ref1.destroy === "function") {
        _ref1.destroy();
      }
    }
  }
  HTMLPlayer.__super__.destroy.call(this);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FlashNotifications = {
  READY: "jsApiReady",
  RESET: "mediaPlayerReset",
  LOADING: "mediaPlayerLoading",
  PLAYER_ERROR: "mediaPlayerError",
  MEDIA_ERROR: "mediaError",
  ERROR_STREAM_NOT_FOUND: "mediaPlayerErrorStreamNotFound",
  CAPABILITY_CHANGE: "mediaPlayerCapabilityChange",
  PLAYBACK_OPEN: "mediaPlayerPlaybackOpen",
  PLAYBACK_CLOSE: "mediaPlayerPlaybackClose",
  PLAYING: "mediaPlayerPlaying",
  ENDED: "mediaPlayerPlaybackClose",
  MEDIA_SEQUENCE_ENDED: "mediaPlayerPlaybackSequenceComplete",
  PAUSED: "mediaPlayerPaused",
  BUFFERING: "mediaPlayerBuffering",
  DURATION_CHANGE: "mediaPlayerDurationChange",
  TIME_UPDATE: "mediaPlayerPlayheadUpdate",
  SEEKING_CHANGE: "mediaPlayerSeekingChange",
  ERROR: "error",
  VOLUME_CHANGE: "mediaPlayerVolumeChanged",
  PLAY_STATE_CHANGE: "mediaPlayerPlayStateChange",
  STATE_CHANGE: "mediaPlayerStateChange",
  CAPTION_DATA_CHANGE: "mediaPlayerCaptiondataChange",
  FAIL_OVER_ATTEMPT: "mediaPlayerFailoverAttempt",
  ELEMENT_EVENT: "mediaPlayerElementEvent",
  PLAY: "mediaPlayerResumeOrPausePlayback",
  APPLICATION_STATE_CHANGE: "mediaPlayerApplicationStateChange",
  INITIALIZED: "mediaPlayerInitialized",
  FULLSCREEN_CHANGE: "mediaPlayerFullscreenChange",
  AUTHORIZE: "mediaPlayerAuthenticate",
  CAPTIONING_REQUEST: "mediaPlayerCaptioningRequest",
  CAPTION_LANG_CHANGE: "mediaPlayerCaptionLangChange",
  RECOMMENDATIONS_LOADED: "mediaPlayerRecommendationsLoaded",
  RECOMMENDATION_SELECTED: "mediaPlayerRecommendationSelected",
  SHARE: "mediaPlayerShare",
  SHARE_REQUEST: "mediaPlayerShareRequest",
  AUTO_ADVANCE: "mediaPlayerAutoAdvance",
  CREATE_FLASH_VARS: "createFlashVars",
  CREATE_XML: "createXML",
  FLASH_CREATED: "flashCreated",
  PLAY_REQUEST: "mediaPlayerPlaybackSequenceInitiated",
  LOAD_FEED: "mediaPlayerDataFeedRequested",
  FEED_UPDATED: "mediaPlayerDataFeedUpdated",
  FEED_LOADED: "mediaPlayerFeedLoaded",
  TIMED_METADATA: "mediaPlayerSendCuePoint",
  MEDIA_PLAYER_ID3_UPDATED: "mediaPlayerID3Updated"
};

/**
 * PlaybackProxy constructor.
 *
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function PlaybackProxy() {
  PlaybackProxy.__super__.constructor.call(this, PlaybackProxy.NAME);
  this.data = {
    core: null,
    muted: false,
    started: false,
    volume: 1,
    currentTime: 0,
    duration: 0,
    src: null,
    ended: false,
    paused: false,
    seeking: false,
    loading: false,
    waiting: false
  };
  if (Utils.getDevice() === "desktop") {
    this.initialized = true;
  }
  this.handlers = {
    "timeupdate": this.ontimeupdate.bind(this),
    "durationchange": this.ondurationchange.bind(this),
    "play": this.onplay.bind(this),
    "playing": this.onplaying.bind(this),
    "pause": this.onpause.bind(this),
    "loadeddata": this.onloadeddata.bind(this),
    "waiting": this.onwaiting.bind(this),
    "seeking": this.onseeking.bind(this),
    "seeked": this.onseeked.bind(this),
    "ended": this.onended.bind(this),
    "progress": this.onprogress.bind(this),
    "error": this.onerror.bind(this),
    "loadstart": this.onloadstart.bind(this),
    "canplay": this.oncanplay.bind(this),
    "canplaythrough": this.oncanplaythrough.bind(this),
    "loadedmetadata": this.onloadedmetadata.bind(this),
    "stalled": this.onstalled.bind(this)
  };
  this.resume = {
    event: Utils.getIEVersion() === -1 || Utils.getIEVersion() === 11 ? "loadedmetadata" : "canplaythrough",
    listener: this.resumestart.bind(this)
  };
  this.textTrackHandlers = {
    "addtrack": this.onaddtrack.bind(this)
  };
  this.fps = FPS;
  this.onneedkey = this.onneedkey.bind(this);
}


__extends(PlaybackProxy, puremvc.Proxy);


/**
 * The name of the this Proxy.
 *
 * @static
 * @type {string}
*/
PlaybackProxy.NAME = "PlaybackProxy";

/** @private
*/
PlaybackProxy.prototype.data = null;

PlaybackProxy.prototype.initialized = false;

PlaybackProxy.prototype.enabled = null;

PlaybackProxy.prototype.handlers = null;

PlaybackProxy.prototype.resume = null;

PlaybackProxy.prototype.playWhenLoaded = false;

PlaybackProxy.prototype.metadataloaded = false;

PlaybackProxy.prototype.activeCuesIndex = 0;

PlaybackProxy.prototype.id3CueType = null;

/**
 * The current time of the video in seconds. Value must be between currentTime and duration.
 *
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number}
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getEnabled = function() {
  return this.enabled;
};

PlaybackProxy.prototype.setEnabled = function(value) {
  if (value === this.enabled) {
    return;
  }
  this.enabled = value;
  if (this.enabled === true) {
    this.load();
  } else {
    this.applyHandlers(false);
  }
  return value;
};

/** @private
*/
PlaybackProxy.prototype.applyHandlers = function(enabled) {
  var action, handler, type, video, _ref;
  if (enabled == null) {
    enabled = true;
  }
  video = this.getMediaElement();
  action = enabled ? "addEventListener" : "removeEventListener";
  _ref = this.handlers;
  for (type in _ref) {
    handler = _ref[type];
    video[action](type, handler);
  }
};

/** @private
*/
PlaybackProxy.prototype.resumestart = function(event) {
  var video,
    _this = this;
  video = this.getMediaElement();
  this.handlers.durationchange(event);
  if (this.data.currentTime > 0) {
    setTimeout(function() {
      _this.seek(_this.data.currentTime).then(_this.resumecomplete.bind(_this));
    }, 50);
  } else {
    this.resumecomplete();
  }
};

/** @private
*/
PlaybackProxy.prototype.resumecomplete = function() {
  this.data.loading = false;
  this.applyHandlers(true);
  if (this.playWhenLoaded === true) {
    setTimeout(this.play.bind(this), 1);
  }
};

/** @private
*/
PlaybackProxy.prototype.onaddtrack = function(event) {
  var track,
    _this = this;
  track = event.track;
  if (track.kind !== "metadata") {
    return;
  }
  track.mode = "hidden";
  track.addEventListener("cuechange", function(event) {
    var cue, _i, _len, _ref;
    _ref = event.target.activeCues;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      cue = _ref[_i];
      _this.sendNotification(Notifications.TIMED_METADATA, cue);
    }
  });
};

PlaybackProxy.prototype.ontimeupdate = function(event) {
  var ads, inProgress;
  ads = this.facade.ads || {};
  inProgress = (typeof ads.getInProgress === "function" ? ads.getInProgress() : void 0) || ads.inProgress;
  if (inProgress === true) {
    return;
  }
  this.data.currentTime = event.target.currentTime;
  this.sendNotification(Notifications.TIME_UPDATE, this.data.currentTime);
};

PlaybackProxy.prototype.ondurationchange = function(event) {
  var duration;
  duration = event.target.duration;
  if (duration === this.data.duration || duration === 0 || isNaN(duration)) {
    return;
  }
  this.data.duration = duration;
  if (/Android [4-7]/.test(navigator.userAgent) && this.getMediaElement().src.indexOf(".m3u8") !== -1 && duration === Infinity) {
    return;
  }
  this.sendNotification(Notifications.CHANGE_DURATION, duration);
};

PlaybackProxy.prototype.onplay = function(event) {
  this.data.paused = false;
};

PlaybackProxy.prototype.onplaying = function(event) {
  this.data.paused = false;
  this.data.seeking = false;
  this.data.waiting = false;
  this.sendNotification(Notifications.PLAYING);
};

PlaybackProxy.prototype.onpause = function(event) {
  if (this.getMediaElement().ended === true) {
    return;
  }
  if (this.data.waiting === true && this.playbackCoreName === "hls") {
    return;
  }
  this.data.paused = true;
  if (event.target.readyState > 0) {
    this.sendNotification(Notifications.PAUSED);
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
  }
};

PlaybackProxy.prototype.onloadeddata = function(event) {
  this.sendNotification(Notifications.LOADED_DATA);
};

PlaybackProxy.prototype.onwaiting = function(event) {
  this.data.waiting = true;
  this.sendNotification(Notifications.WAITING);
};

PlaybackProxy.prototype.onstalled = function(event) {
  this.sendNotification(Notifications.STALLED);
};

PlaybackProxy.prototype.onseeking = function(event) {
  this.getMediaElement().removeEventListener("timeupdate", this.handlers.timeupdate);
  this.data.seeking = true;
  this.sendNotification(Notifications.SEEKING);
};

PlaybackProxy.prototype.onseeked = function(event) {
  this.data.seeking = false;
  this.sendNotification(Notifications.SEEKED, event.target.currentTime);
  this.getMediaElement().addEventListener("timeupdate", this.handlers.timeupdate);
};

PlaybackProxy.prototype.onended = function(event) {
  this.data.ended = true;
  this.sendNotification(Notifications.ENDED);
};

PlaybackProxy.prototype.onprogress = function(event) {
  var buffered, video;
  try {
    video = this.getMediaElement();
    buffered = video.buffered;
    this.sendNotification(Notifications.PROGRESS, buffered.end(buffered.length - 1) / video.duration);
  } catch (error) {

  }
};

PlaybackProxy.prototype.onerror = function(event) {
  this.sendNotification(Notifications.ERROR, this.getMediaElement().error);
};

PlaybackProxy.prototype.onloadstart = function(event) {
  this.sendNotification(Notifications.LOAD_START);
};

PlaybackProxy.prototype.oncanplay = function(event) {
  this.sendNotification(Notifications.CAN_PLAY);
};

PlaybackProxy.prototype.oncanplaythrough = function(event) {
  this.createTracks();
  this.sendNotification(Notifications.CAN_PLAY_THROUGH);
  this.sendNotification(Notifications.PROGRESS, this.getDuration());
};

PlaybackProxy.prototype.onloadedmetadata = function(event) {
  this.metadataloaded = true;
  this.sendNotification(Notifications.ENABLE_FULL_SCREEN);
  this.sendNotification(Notifications.LOADED_METADATA);
};

PlaybackProxy.prototype.applyTextTrackHandlers = function(data) {
  var action, _ref;
  action = data === true ? "addEventListener" : "removeEventListener";
  if ((_ref = this.getMediaElement().textTracks) != null) {
    _ref[action]("addtrack", this.textTrackHandlers.addtrack);
  }
};

/** @override
*/
PlaybackProxy.prototype.createTracks = function() {
  var audio, count, index, track, tracks, _i, _len;
  audio = this.getMediaElement().audioTracks;
  tracks = this.facade.retrieveProxy(TracksProxy.NAME).getAudioTracks();
  if (audio != null) {
    count = audio.length || 0;
    for (index = _i = 0, _len = audio.length; _i < _len; index = ++_i) {
      track = audio[index];
      tracks.add(new Track(track), index + 1 === count);
    }
  }
};

/** @private
*/
PlaybackProxy.prototype.reset = function() {
  this.data.currentTime = 0;
  this.data.duration = 0;
  this.data.src = null;
  this.data.ended = false;
  this.data.paused = false;
  this.data.seeking = false;
  this.data.started = false;
  this.data.loading = false;
  this.applyTextTrackHandlers(false);
};

/**
 * @return {boolean}
*/
PlaybackProxy.prototype.getStarted = function() {
  return this.data.started;
};

/**
 * The playback core
 *
 * @param {HTMLVideoElement} value
 *    The new playback core
 * @returns {HTMLVideoElement}
 *    The playback core
 * @type {HTMLVideoElement}
 *
 * @private
*/
PlaybackProxy.prototype.getMediaElement = function() {
  return this.facade.getMediaElement();
};

/**
 *
*/
PlaybackProxy.prototype.canPlayMedium = function(medium) {
  return medium === "video";
};

/**
 *
*/
PlaybackProxy.prototype.canPlayTemporalType = function(temporalType) {
  return temporalType !== "dvr";
};

/**
 * Determines if the core can play a given mimeType.
 *
 * @return {String} "" if the core can't play the mimeType
*/
PlaybackProxy.prototype.canPlayType = function(mimeType) {
  var canPlay;
  canPlay = document.createElement("video").canPlayType(mimeType) || "";
  if ((/Android (4\.[1-9]|[5-6])/.test(navigator.userAgent) || /Silk\/3/.test(navigator.userAgent)) && mimeType === Utils.mimeTypes.m3u8) {
    canPlay = "maybe";
  }
  if (canPlay === "probably" && /video\/f4m|x-flv/.test(mimeType) && /UCBrowser/.test(navigator.userAgent)) {
    canPlay = "";
  }
  return canPlay;
};

/**
 * Indicates whether or not the video is playing.
 *
 * @returns {Boolean}
 *    The playing value
 * @type {Boolean}
*/
PlaybackProxy.prototype.getPaused = function() {
  return this.data.paused;
};

/**
 * Indicates whether or not the video is playing.
 *
 * @returns {Boolean}
 *    The playing value
 * @type {Boolean}
*/
PlaybackProxy.prototype.getSeeking = function() {
  return this.data.seeking;
};

/**
 * The current time of the video in seconds. Value must be between currentTime and duration.
 *
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number}
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getCurrentTime = function() {
  return this.data.currentTime;
};

PlaybackProxy.prototype.setCurrentTime = function(value) {
  if (value === this.data.currentTime) {
    return;
  }
  this.data.currentTime = value;
  if (this.getStarted()) {
    this.seek(value);
  }
  return value;
};

/** @private
*/
PlaybackProxy.prototype.seek = function(time) {
  var _this = this;
  if (time == null) {
    time = this.data.currentTime;
  }
  return new Promise(function(resolve, reject) {
    var interval, seeked, ua, video;
    try {
      video = _this.getMediaElement();
      seeked = function() {
        setTimeout(resolve, 10, time);
      };
      video.once("seeked", seeked);
      video.currentTime = time;
      ua = navigator.userAgent;
      if (/Android.*Chrome/.test(ua)) {
        interval = setInterval(function() {
          if (Math.round(video.currentTime) === Math.round(time)) {
            clearInterval(interval);
            video.dispatchEvent(new CustomEvent("seeked"));
          }
        }, 10);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
*/
PlaybackProxy.prototype.goLive = function() {
  var mediaElement, time;
  mediaElement = this.getMediaElement();
  time = mediaElement.duration === Infinity ? mediaElement.seekable.end(0) : mediaElement.duration;
  mediaElement.currentTime = time;
};

/**
 * The current time of the video in seconds. Value must be between currentTime and duration.
 *
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number}
 *    The currentTime value in seconds
 * @type {Number}
*/
PlaybackProxy.prototype.getVolume = function() {
  var mediaElement;
  mediaElement = this.getMediaElement();
  if (mediaElement.muted === true) {
    return 0;
  } else {
    return mediaElement.volume;
  }
};

PlaybackProxy.prototype.setVolume = function(value) {
  if (this.getMuted() && value > 0) {
    this.setMuted(false);
  } else if (!this.getMuted() && value === 0) {
    this.setMuted(true);
  }
  this.sendNotification(Notifications.VOLUME_CHANGE, this.getMediaElement().volume = value);
  return value;
};

/**
*/
PlaybackProxy.prototype.getMuted = function() {
  return this.data.muted;
};

PlaybackProxy.prototype.setMuted = function(value) {
  var volume;
  if (this.data.muted === value) {
    return;
  }
  this.data.muted = value;
  if (this.data.muted === true) {
    this.data.volume = this.getVolume();
    volume = 0;
  } else {
    volume = this.data.volume;
  }
  this.getMediaElement().muted = value;
  this.sendNotification(Notifications.CHANGE_VOLUME, volume);
  this.sendNotification(Notifications.MUTE_CHANGE, this.data.muted);
  return value;
};

/**
 * The duration of the video in seconds.
 *
 * @returns {Number}
 *    The duration of the video
 * @type {Number}
*/
PlaybackProxy.prototype.getDuration = function() {
  return this.data.duration;
};

/**
 * Instructs the core to play.
*/
PlaybackProxy.prototype.play = function() {
  if (this.data.started !== true) {
    this.data.started = true;
    this.setEnabled(true);
    this.playWhenLoaded = true;
    if (this.metadataloaded === false) {
      return;
    }
  } else if (this.data.loading === true) {
    this.playWhenLoaded = true;
    return;
  }
  if (this.getPaused()) {
    this.sendNotification(Notifications.RESUME);
  }
  this.getMediaElement().play();
};

/**
 * Instructs the core to pause.
*/
PlaybackProxy.prototype.pause = function() {
  this.data.paused = true;
  this.getMediaElement().pause();
};

PlaybackProxy.prototype.getSrc = function() {
  return this.facade.mediaProxy.getSrc();
};

/**
 * Instructs the core to load.
*/
PlaybackProxy.prototype.load = function() {
  var element;
  this.sendNotification(Notifications.WAITING);
  this.data.loading = true;
  this.playWhenLoaded = false;
  this.metadataloaded = false;
  element = this.getMediaElement();
  element.once(this.resume.event, this.resume.listener);
  element.addEventListener("loadedmetadata", this.handlers.loadedmetadata);
  element.addEventListener("durationchange", this.handlers.durationchange);
  element.addEventListener("canplaythrough", this.handlers.canplaythrough);
  element.addEventListener("webkitneedkey", this.onneedkey);
  element.addEventListener("error", this.handlers.error);
  this.applyTextTrackHandlers(true);
  this.applySrc();
};

PlaybackProxy.prototype.applySrc = function() {
  var element, muted, src, _ref;
  src = this.getSrc();
  if (!(src != null) || src === "") {
    this.sendNotification(Notifications.ERROR, "The value of src is not supported: " + value);
  }
  element = this.getMediaElement();
  element.src = src;
  muted = element.muted;
  if (muted === true) {
    this.data.muted = true;
  }
  if (Utils.isIPad() && ((_ref = Utils.getIOSversion()) != null ? _ref[0] : void 0) < 8) {
    setTimeout(element.load.bind(element), 100);
  } else {
    element.load();
  }
};

PlaybackProxy.prototype.setQuality = function(value) {};

PlaybackProxy.prototype.getQuality = function() {};

PlaybackProxy.prototype.getQualityLevels = function() {
  return [];
};

PlaybackProxy.prototype.getQualityMode = function() {};

PlaybackProxy.prototype.setQualityMode = function(value) {};

PlaybackProxy.prototype.destroy = function() {
  var element, key, value, _ref;
  element = this.getMediaElement();
  _ref = this.handlers;
  for (key in _ref) {
    value = _ref[key];
    element.removeEventListener(key, value);
  }
  element.removeEventListener(this.resume.event, this.resume.listener);
};

/**
  The EME specification (https://dvcs.w3.org/hg/html-media/raw-file/tip/encrypted-media/encrypted-media.html)
  is supported starting OSX 10.10 and greater.
*/
PlaybackProxy.prototype.onneedkey = function(event) {
  var contentId, initData, keySystem, keys, serverUrl, video,
    _this = this;
  video = event.target;
  keySystem = Utils.getKeySystem();
  keys = this.facade.mediaProxy.getKeys()[keySystem];
  if (!(keys != null) || keySystem !== "com.apple.fps.1_0") {
    return;
  }
  initData = event.initData;
  contentId = this.fps.extractContentId(initData, keys);
  serverUrl = this.fps.extractServerUrl(initData, keys);
  this.fps.requestCertificate(keys).then(function(cert) {
    return _this.fps.concatInitDataIdAndCertificate(initData, contentId, cert);
  }).then(function(initData) {
    var session;
    if (!WebKitMediaKeys.isTypeSupported(keySystem, "video/mp4")) {
      throw "Key System not supported";
    }
    if (!(video.webkitKeys != null)) {
      video.webkitSetMediaKeys(new WebKitMediaKeys(keySystem));
    }
    if (!(video.webkitKeys != null)) {
      throw "Could not create MediaKeys";
    }
    session = video.webkitKeys.createSession("video/mp4", initData);
    if (!(session != null)) {
      throw "Could not create key session";
    }
    session.addEventListener("webkitkeymessage", function(event) {
      _this.fps.requestLicense(event.message, contentId, serverUrl).then(function(key) {
        session.update(key);
      })["catch"](function(error) {
        _this.facade.logger.error("[AMP DRM] A key request error was encountered.", error);
      });
    });
    session.addEventListener("webkitkeyadded", function(event) {
      _this.facade.logger.log("[AMP DRM] Decryption key was added to session.");
    });
    session.addEventListener("webkitkeyerror", function(event) {
      _this.facade.logger.log("[AMP DRM] A decryption key error was encountered.", event);
    });
  })["catch"](function(error) {
    _this.facade.logger.error(error);
  });
};

/**
 * The FlashPluginsInitializedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FlashPluginsInitializedCommand() {
  FlashPluginsInitializedCommand.__super__.constructor.call(this);
}


__extends(FlashPluginsInitializedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
FlashPluginsInitializedCommand.prototype.execute = function(notification) {
  setTimeout(this.facade.pluginsinitialized.bind(this.facade), 0);
};

/**
 * The FlashStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function FlashStartCommand() {
  FlashStartCommand.__super__.constructor.call(this);
}


__extends(FlashStartCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FlashStartCommand.prototype.execute = function(notification) {
  this.player.started = true;
  this.sendNotification(Notifications.STARTED, notification.getBody());
  this.sendNotification(Notifications.PLAY, notification.getBody());
};

/**
 * The RegisterPlaybackCoreCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function ChangePlaybackTargetCommand() {
  ChangePlaybackTargetCommand.__super__.constructor.call(this);
}


__extends(ChangePlaybackTargetCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangePlaybackTargetCommand.prototype.execute = function(notification) {
  var target;
  target = notification.getBody();
  this.applicationState.setPlaybackTarget(target);
  if (target !== "amp") {
    if (this.applicationState.getPlayState() !== PlayState.PAUSED) {
      this.facade.pause();
    }
  } else {
    if (this.applicationState.getPlayState() === PlayState.PLAYING) {
      this.facade.play();
    }
  }
};

function LocalizationWrapper(player, config) {
  this.player = player;
  this.config = config;
  LocalizationWrapper.__super__.constructor.call(this, this.constructor.NAME);
  this.proxy = new LocalizationProxy(this.config);
  this.player.registerProxy(this.proxy);
}


__extends(LocalizationWrapper, puremvc.Mediator);


LocalizationWrapper.prototype.player = null;

LocalizationWrapper.prototype.config = null;

LocalizationWrapper.prototype.proxy = null;

LocalizationWrapper.NAME = "LocalizationWrapper";

/**
*/
LocalizationWrapper.prototype.getString = function(key) {
  return this.proxy.getString(key);
};

/** @override
*/
LocalizationWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML];
};

/**
*/
LocalizationWrapper.prototype.handleNotification = function(notification) {
  var application, body, config, element, flashvars, key, lang, locale, locales, name, prop, text, value, xml, _ref;
  LocalizationWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      flashvars = body.flashvars;
      config = body.config;
      flashvars.locale_setting = this.proxy.getLocaleId();
      break;
    case FlashNotifications.CREATE_XML:
      xml = body.xml;
      application = xml.firstChild;
      locales = xml.getElementsByTagName("locales")[0];
      if (!(locales != null)) {
        locales = xml.createElement("locales");
        application.appendChild(locales);
      }
      _ref = this.proxy.getLocales();
      for (lang in _ref) {
        locale = _ref[lang];
        element = xml.createElement("locale");
        element.setAttribute("id", lang);
        locales.appendChild(element);
        for (key in locale) {
          value = locale[key];
          prop = xml.createElement("property");
          prop.setAttribute("key", key);
          text = XMLUtils.createTextContent(xml, value);
          prop.appendChild(text);
          element.appendChild(prop);
        }
      }
  }
};

/** 
 * The ModuleMediator class.
 * 
 * @param {string} name
 * @param {Object} viewComponent
 * @constructor
 * @private 
 * @extends {puremvc.Mediator}
*/
function ModuleMediator(viewComponent) {
  if (this.cssPrefix == null) {
    this.cssPrefix = Namespace.PREFIX;
  }
  ModuleMediator.__super__.constructor.call(this, this.mediatorName, viewComponent);
}


__extends(ModuleMediator, puremvc.Mediator);


ModuleMediator.prototype.config = null;

ModuleMediator.prototype.cssPrefix = null;

ModuleMediator.prototype.classList = null;

/** @override
*/
ModuleMediator.prototype.initializeNotifier = function(key) {
  var base;
  ModuleMediator.__super__.initializeNotifier.call(this, key);
  base = this.facade.player || this.facade;
  this.config = base.retrieveProxy(ModuleProxy.NAME);
  this.classList = this.classList = new ClassList(this.viewComponent);
};

/** 
 * @constructor
 * @private
*/
function LocalizedMediator(viewComponent) {
  LocalizedMediator.__super__.constructor.call(this, viewComponent);
}


__extends(LocalizedMediator, ModuleMediator);


LocalizedMediator.prototype.localizationManager = null;

/** @override
*/
LocalizedMediator.prototype.initializeNotifier = function(key) {
  var target;
  LocalizedMediator.__super__.initializeNotifier.call(this, key);
  target = this.facade.player || this.facade;
  this.localizationManager = target.retrieveProxy(LocalizationProxy.NAME);
};

/** 
 * @constructor
 * @extends {LocalizedMediator}
 * @private
*/
function ComponentMediator(componentName, componentType, parent, element) {
  this.componentName = componentName != null ? componentName : this.componentName;
  this.componentType = componentType != null ? componentType : this.componentType;
  this.parent = parent;
  this.element = element;
  if (this.mediatorName == null) {
    this.mediatorName = this.createMediatorName();
  }
  ComponentMediator.__super__.constructor.call(this, this.viewComponent);
}


__extends(ComponentMediator, LocalizedMediator);


ComponentMediator.prototype.componentName = null;

ComponentMediator.prototype.componentType = null;

ComponentMediator.prototype.parent = null;

ComponentMediator.prototype.element = null;

ComponentMediator.prototype.classList = null;

ComponentMediator.prototype.state = null;

ComponentMediator.prototype.disabled = false;

/**
*/
ComponentMediator.prototype.onRegister = function() {
  this.viewComponent = this.createViewComponent(this.parent, this.element);
  this.classList = this.viewComponent._classList;
  UI.bindEvents(this.viewComponent, this);
};

/**
*/
ComponentMediator.prototype.createViewComponent = function(parent, element) {
  var type;
  type = this.getTypeList();
  return UI.create(type, parent, element);
};

/**
*/
ComponentMediator.prototype.createMediatorName = function() {
  var type;
  type = this.getTypeList();
  type.push("mediator");
  type.push(UI.createUID());
  return type.join("-");
};

/**
*/
ComponentMediator.prototype.getTypeList = function() {
  var type;
  type = [];
  if (this.componentName != null) {
    type.push(this.componentName);
  }
  if (this.componentType != null) {
    type = type.concat(this.componentType);
  }
  return type;
};

/**
*/
ComponentMediator.prototype.create = function(type, parent, element, text) {
  if (parent == null) {
    parent = this;
  }
  if (parent === false) {
    parent = null;
  }
  return UI.create(type, parent, element, text);
};

/**
*/
ComponentMediator.prototype.createText = function(type, text, parent, element) {
  if (parent == null) {
    parent = this;
  }
  return UI.create(type, parent, element, text);
};

/**
*/
ComponentMediator.prototype.setState = function(value) {
  if (value === this.state) {
    return;
  }
  if (this.state != null) {
    this.classList.remove(this.state);
  }
  this.state = value;
  if (this.state != null) {
    this.classList.add(this.state);
  }
  return value;
};

/**
*/
ComponentMediator.prototype.getState = function() {
  return this.state;
};

/**
*/
ComponentMediator.prototype.setDisabled = function(value) {
  if (value === this.disabled) {
    return;
  }
  this.disabled = value;
  if (this.disabled) {
    this.classList.add("disabled");
  } else {
    this.classList.remove("disabled");
  }
  return value;
};

/**
*/
ComponentMediator.prototype.getDisabled = function() {
  return this.disabled;
};

/** 
 * @constructor
 * @private
 * @extends {ComponentMediator}
*/
function MediaElementMediator(componentName, viewComponent) {
  this.mediatorName = "" + this.componentType + "-mediator";
  MediaElementMediator.__super__.constructor.call(this, componentName, null, null, viewComponent);
}


__extends(MediaElementMediator, ComponentMediator);


MediaElementMediator.prototype.componentType = "media-element";

MediaElementMediator.prototype.created = false;

MediaElementMediator.prototype.onRegister = function() {
  if (this.created !== true) {
    this.created = true;
    MediaElementMediator.__super__.onRegister.call(this);
  }
};

/** 
 * @constructor
 * @private
*/
function LayerMediator() {
  LayerMediator.__super__.constructor.call(this);
}


__extends(LayerMediator, ComponentMediator);


LayerMediator.prototype.componentType = "layer";

/**
 * Registers the layer
 * 
 * @override
*/
LayerMediator.prototype.onRegister = function() {
  LayerMediator.__super__.onRegister.call(this);
  this.registerLayer();
};

/**
 * Removes the layer
 * 
 * @override
*/
LayerMediator.prototype.onRemove = function() {
  LayerMediator.__super__.onRemove.call(this);
  this.removeLayer();
};

/**
 *
*/
LayerMediator.prototype.registerLayer = function() {
  this.sendNotification(Notifications.ADD_LAYER, this.viewComponent);
};

/**
 *
*/
LayerMediator.prototype.removeLayer = function() {
  this.sendNotification(Notifications.REMOVE_LAYER, this.viewComponent);
};

/**
 * @constructor
 * @extends {LayerMediator}
 * @private
*/
function VideoLayerMediator() {
  VideoLayerMediator.__super__.constructor.call(this);
}


__extends(VideoLayerMediator, LayerMediator);


VideoLayerMediator.prototype.componentName = "video";

/** @override
*/
VideoLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAYBACK_CORE_CHANGE];
};

VideoLayerMediator.prototype.mediator = null;

VideoLayerMediator.prototype.mediaElement = null;

/** @override
*/
VideoLayerMediator.prototype.handleNotification = function(notification) {
  var body, isMediator, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAYBACK_CORE_CHANGE:
      if (this.mediaElement != null) {
        this.viewComponent.removeChild(this.mediaElement);
      }
      if (this.mediator != null) {
        this.facade.removeMediator(this.mediator.getMediatorName());
      }
      isMediator = (body != null ? body.getViewComponent : void 0) != null;
      if (isMediator) {
        this.facade.registerMediator(body);
        this.mediator = body;
        this.mediaElement = this.mediator.getViewComponent();
      } else {
        this.mediator = null;
        this.mediaElement = body;
      }
      if (this.mediaElement != null) {
        this.viewComponent.appendChild(this.mediaElement);
      }
  }
};

/**
 * @constructor
 * @private
 * @extends {ModuleMediator}
*/
function PlayerMediator(componentName, viewComponent) {
  this.componentName = componentName;
  this.layers = [];
  PlayerMediator.__super__.constructor.call(this, null, null, null, viewComponent);
}


__extends(PlayerMediator, ComponentMediator);


PlayerMediator.prototype.componentType = "player";

PlayerMediator.prototype.core = null;

PlayerMediator.prototype.medium = null;

PlayerMediator.prototype.layers = null;

PlayerMediator.prototype.ready = false;

/** @override
*/
PlayerMediator.prototype.onRegister = function() {
  var device;
  PlayerMediator.__super__.onRegister.call(this);
  device = Utils.getDevice();
  if ((device != null)) {
    this.classList.add(device);
  }
  if (Utils.isTouchDevice()) {
    this.classList.add("touch");
  }
};

/** @override
*/
PlayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.DISPLAY_STATE_CHANGE, Notifications.ACTIVE_STATE_CHANGE, Notifications.PLAY_STATE_CHANGE, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.MEDIUM_CHANGE, Notifications.DURATION_CHANGE, Notifications.TEMPORAL_TYPE_CHANGE, Notifications.IS_LIVE, Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.READY];
};

/** @override
*/
PlayerMediator.prototype.handleNotification = function(notification) {
  var body, name, previous, state, states, value;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.ACTIVE_STATE_CHANGE:
    case Notifications.PLAY_STATE_CHANGE:
    case Notifications.DISPLAY_STATE_CHANGE:
    case Notifications.MEDIUM_CHANGE:
      states = body;
      value = states.value;
      previous = states.previous;
      if ((previous != null) && this.classList.contains(previous)) {
        this.classList.remove(previous);
      }
      if (value != null) {
        this.classList.add(value);
      }
      break;
    case Notifications.ADD_APPLICATION_STATE:
      state = body;
      this.classList.add(state);
      break;
    case Notifications.REMOVE_APPLICATION_STATE:
      state = body;
      this.classList.remove(state);
      break;
    case Notifications.TEMPORAL_TYPE_CHANGE:
      if (body.previous) {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, body.previous);
      }
      if (body.value) {
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, body.value);
      }
      break;
    case Notifications.IS_LIVE:
      if (body === true) {
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, "is-live");
      } else {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "is-live");
      }
      break;
    case Notifications.DURATION_CHANGE:
      if (body > 3600) {
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, "long-form");
      } else {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "long-form");
      }
      break;
    case Notifications.ADD_LAYER:
      this.addLayer(body);
      break;
    case Notifications.REMOVE_LAYER:
      this.removeLayer(body);
      break;
    case Notifications.READY:
      this.initialize();
      this.viewCreated();
  }
};

/**
*/
PlayerMediator.prototype.initialize = function() {
  var layer, _i, _len, _ref;
  this.ready = true;
  _ref = this.layers;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    layer = _ref[_i];
    if (!this.viewComponent.contains(layer)) {
      this.viewComponent.appendChild(layer);
    }
  }
};

PlayerMediator.prototype.viewCreated = function() {
  this.sendNotification(Notifications.VIEW_CREATED);
};

/**
*/
PlayerMediator.prototype.addLayer = function(layer) {
  this.layers.push(layer);
  if (this.ready) {
    this.viewComponent.appendChild(layer);
  }
};

/**
*/
PlayerMediator.prototype.removeLayer = function(layer) {
  var index;
  if (this.viewComponent.contains(layer)) {
    this.viewComponent.removeChild(layer);
  }
  index = this.layers.indexOf(layer);
  if (index >= 0) {
    this.layers.splice(index, 1);
  }
};

/** 
 * @param {Object} viewComponent
 * @constructor
 * @private 
 * @extends {PlayerMeditator}
*/
function FlashPlayerMediator(viewComponent) {
  FlashPlayerMediator.__super__.constructor.call(this, this.type, viewComponent);
}


__extends(FlashPlayerMediator, PlayerMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {String}
*/
FlashPlayerMediator.NAME = "FlashPlayerMediator";

FlashPlayerMediator.prototype.type = "flash";

/** @override
*/
FlashPlayerMediator.prototype.listNotificationInterests = function() {
  return FlashPlayerMediator.__super__.listNotificationInterests.call(this).concat([PluginNotifications.PLUGINS_INITIALIZED]);
};

/** @override
*/
FlashPlayerMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.READY:
      this.viewCreated();
      return;
    case PluginNotifications.PLUGINS_INITIALIZED:
      this.initialize();
      return;
  }
  FlashPlayerMediator.__super__.handleNotification.call(this, notification);
};

/**
 * The RegisterPlaybackCoreCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function PlaybackTargetChangeCommand() {
  PlaybackTargetChangeCommand.__super__.constructor.call(this);
}


__extends(PlaybackTargetChangeCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
PlaybackTargetChangeCommand.prototype.execute = function(notification) {
  var note, target;
  target = notification.getBody().value;
  if (target === "amp") {
    note = Notifications.REMOVE_APPLICATION_STATE;
  } else {
    note = Notifications.ADD_APPLICATION_STATE;
  }
  this.sendNotification(note, "remote-playback");
  PlaybackTargetChangeCommand.__super__.execute.call(this, notification);
};

/**
 * The FlashAuthorizedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FlashAuthorizedCommand() {
  FlashAuthorizedCommand.__super__.constructor.call(this);
}


__extends(FlashAuthorizedCommand, PlayerEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
FlashAuthorizedCommand.prototype.execute = function(notification) {
  var media;
  FlashAuthorizedCommand.__super__.execute.call(this, notification);
  media = Utils.clone(this.media.getData());
  media.src = this.media.getSrc();
  this.facade.getMediaElement().authenticationComplete({
    media: media
  });
};

/**
 * PlaybackCoreProxy constructor.
 *
 * @constructor
 * @private
 * @extends {PlaybackProxy}
*/
function PlaybackCoreProxy(supportedTypes, config) {
  this.supportedTypes = supportedTypes != null ? supportedTypes : this.supportedTypes;
  this.config = config;
  PlaybackCoreProxy.__super__.constructor.call(this);
  this.temporalTypes = ["vod", "live", "ondemand"];
}


__extends(PlaybackCoreProxy, PlaybackProxy);


PlaybackCoreProxy.prototype.temporalTypes = null;

PlaybackCoreProxy.prototype.supportedTypes = null;

PlaybackCoreProxy.prototype.playbackCoreName = "default";

PlaybackCoreProxy.prototype.config = null;

/**
*/
PlaybackCoreProxy.prototype.onRegister = function() {
  this.mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
};

/**
*/
PlaybackCoreProxy.prototype.getUseMAE = function() {
  var maeConfig;
  maeConfig = this.config.mae;
  return (maeConfig != null) && maeConfig.enabled !== false;
};

/**
*/
PlaybackCoreProxy.prototype.getPlaybackCoreName = function() {
  return this.playbackCoreName;
};

/**
*/
PlaybackCoreProxy.prototype.getSupportedTypes = function() {
  return this.supportedTypes || [];
};

/**
*/
PlaybackCoreProxy.prototype.setSupportedTypes = function(types) {
  this.supportedTypes = types;
  return types;
};

/**
*/
PlaybackCoreProxy.prototype.getTemporalTypes = function() {
  return this.temporalTypes || [];
};

/**
*/
PlaybackCoreProxy.prototype.setTemporalTypes = function(types) {
  this.temporalTypes = types;
  return types;
};

/** @override
*/
PlaybackCoreProxy.prototype.canPlayTemporalType = function(temporalType) {
  return this.getTemporalTypes().indexOf(temporalType) !== -1;
};

/** @override
*/
PlaybackCoreProxy.prototype.canPlayType = function(mimeType) {
  if (this.supportedTypes != null) {
    if (this.getSupportedTypes().indexOf(mimeType) !== -1) {
      return "maybe";
    } else {
      return "";
    }
  } else {
    return PlaybackCoreProxy.__super__.canPlayType.call(this, mimeType);
  }
};

/**
 * ChromeCastPlaybackProxy constructor.
 * 
 * @constructor
 * @extends {PlaybackCoreProxy}
 * @private
*/
function FlashPlaybackProxy(player) {
  this.player = player;
  FlashPlaybackProxy.__super__.constructor.call(this);
}


__extends(FlashPlaybackProxy, PlaybackCoreProxy);


/**
 * The name of the this Proxy.
 * 
 * @static
 * @type {string}
*/
FlashPlaybackProxy.NAME = PlaybackProxy.NAME;

FlashPlaybackProxy.prototype.player = null;

FlashPlaybackProxy.prototype.initialized = true;

FlashPlaybackProxy.prototype.playbackCoreName = "flash";

FlashPlaybackProxy.prototype.supportedTypes = ["video/mp4", "video/x-flv", "video/f4m", "application/smil", "application/smil+xml"];

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getPaused = function() {
  return this.player.getPaused();
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getEnded = function() {
  return this.player.getEnded();
};

/**     
 * Indicates whether or not the video is playing.
 * 
 * @returns {Boolean} 
 *    The playing value
 * @type {Boolean}
*/
FlashPlaybackProxy.prototype.getSeeking = function() {
  return this.player.getSeeking();
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getCurrentTime = function() {
  return this.player.getCurrentTime();
};

FlashPlaybackProxy.prototype.setCurrentTime = function(value) {
  this.player.setCurrentTime(value);
  return value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getSrc = function() {
  return this.player.getSrc();
};

FlashPlaybackProxy.prototype.setSrc = function(value) {
  this.player.setSrc(value);
  return value;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getVolume = function() {
  return this.player.getVolume();
};

FlashPlaybackProxy.prototype.setVolume = function(value) {
  this.player.setVolume(value);
  return value;
};

/**
*/
FlashPlaybackProxy.prototype.getMuted = function() {
  return this.player.getMuted();
};

FlashPlaybackProxy.prototype.setMuted = function(value) {
  this.player.setMuted(value);
  return value;
};

/**
 * The duration of the video in seconds.
 *     
 * @returns {Number} 
 *    The duration of the video
 * @type {Number}
*/
FlashPlaybackProxy.prototype.getDuration = function(value) {
  return this.player.getDuration();
};

/**
 * Instructs the core to play.
*/
FlashPlaybackProxy.prototype.play = function() {
  this.player.play();
};

/**
 * Instructs the core to pause.
*/
FlashPlaybackProxy.prototype.pause = function() {
  this.player.pause();
};

/**
 * Instructs the core to load.
*/
FlashPlaybackProxy.prototype.load = function() {
  this.player.load();
};

/**
 * The FlashPlayer class
 *
 * @param {Object} viewComponent
 * @constructor
 * @private
 * @extends {Player}
*/
function FlashPlayer(viewComponent) {
  var _this = this;
  this.flashObjectID += Date.now();
  this.plugins = {};
  this._displayState = DisplayState.NORMAL;
  this.debug = /debug\=true/.test(location.search);
  FlashPlayer.__super__.constructor.call(this, viewComponent);
  this.addEventListener("mediachange", function(event) {
    var item, mediaElement, textTracks, track, tracks, _i, _len;
    tracks = event.detail.track;
    mediaElement = _this.getMediaElement();
    textTracks = mediaElement.textTracks = [];
    if (!(tracks != null)) {
      return;
    }
    for (_i = 0, _len = tracks.length; _i < _len; _i++) {
      track = tracks[_i];
      item = {
        kind: track.kind,
        label: track.label,
        language: track.srclang,
        _mode: track.mode
      };
      Object.defineProperty(item, "mode", {
        get: function() {
          return this._mode;
        },
        set: function(value) {
          var visible;
          this._mode = value;
          visible = value === "showing";
          if (visible) {
            mediaElement.setTrackByLanguage(this.language);
          }
          mediaElement.setPlayerProperty("captionDisplay", {
            visible: visible
          });
        },
        enumerable: true,
        configurable: false
      });
      textTracks.push(item);
    }
  });
}


__extends(FlashPlayer, Player);


/**
 * @override
*/
FlashPlayer.prototype.initialize = function(config, parentModule) {
  var _ref, _ref1;
  this.config = config;
  this.parentModule = parentModule;
  this.createDefaults();
  this.logEvents = ((_ref = this.config.flash) != null ? _ref.logEvents : void 0) === true || ((_ref1 = QueryString["amp-flash-log"]) != null ? _ref1.toLowerCase() : void 0) === "true";
  FlashPlayer.__super__.initialize.call(this, this.config, this.parentModule);
};

/**
*/
FlashPlayer.prototype.loadModuleResources = function(resources) {
  var _this = this;
  return FlashPlayer.__super__.loadModuleResources.call(this, resources).then(function() {
    var key, locales, promises, update, value;
    locales = _this.config.locales;
    promises = [];
    update = function(key, resource) {
      locales[key] = resource.data;
    };
    for (key in locales) {
      value = locales[key];
      if (typeof value === "string") {
        promises.push(AMP.addResource({
          src: _this.evaluatePaths(value),
          type: Utils.mimeTypes.json
        }).then(update.bind(_this, key))["catch"](function(error) {
          return Promise.resolve();
        }));
      }
    }
    return Promise.all(promises);
  });
};

/** @override
*/
FlashPlayer.prototype.pluginsinitialized = function() {
  var attributes, expressInstallSWF, flash, params, swf, swfs, version, xml, _ref;
  flash = this.config.flash || {};
  swfs = ((_ref = flash["static"]) != null ? _ref.enabled : void 0) === true ? flash["static"] : flash;
  swf = this.debug && (swfs.debug != null) ? swfs.debug : swfs.swf || "amp.swf";
  version = flash.version || "10.1";
  expressInstallSWF = this.evaluatePaths(flash.expressInstallSWF) || "playerProductInstall.swf";
  params = this.createParams(flash);
  attributes = this.createAttributes(flash);
  this.flashvars = this.createFlashVars(flash);
  if (!(this.flashvars.settings_url != null)) {
    xml = this.createXML(this.config);
    if (xml != null) {
      this.flashvars.settings_xml = xml;
    }
  }
  attributes.data = this.evaluatePaths(swf);
  this.createdHandler(Utils.createFlashObject({
    params: params,
    attributes: attributes,
    vars: this.flashvars
  }, this.getMediaElement().parentNode));
};

FlashPlayer.prototype.playerType = "flash";

FlashPlayer.prototype.flashObjectID = "flashObject";

FlashPlayer.prototype.loaded = false;

FlashPlayer.prototype.flashvars = null;

FlashPlayer.prototype._paused = false;

FlashPlayer.prototype._ended = false;

FlashPlayer.prototype._muted = false;

FlashPlayer.prototype.plugins = null;

FlashPlayer.prototype.debug = false;

FlashPlayer.prototype.started = false;

FlashPlayer.prototype._displayState = null;

FlashPlayer.prototype.logEvents = false;

FlashPlayer.prototype._loop = false;

FlashPlayer.prototype.playback = null;

FlashPlayer.prototype.flashPlugins = [
  {
    id: "AkamaiAdvancedStreamingPlugin",
    src: "http://players.edgesuite.net/flash/plugins/osmf/advanced-streaming-plugin/v3.10/osmf2.0/AkamaiAdvancedStreamingPlugin.swf",
    absolute: true,
    host: "osmf",
    main: "com.akamai.osmf.AkamaiAdvancedStreamingPluginInfo",
    type: "application/x-shockwave-flash"
  }, {
    id: "ErrorMessagingPlugin",
    src: '#{paths.resources}plugins/ErrorMessagingPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "ErrorMessagingPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "VideoMetricsViewPlugin",
    src: '#{paths.resources}plugins/VideoMetricsViewPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "VideoMetricsViewPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "VideoStatsInfoOverlayPlugin",
    src: '#{paths.resources}plugins/VideoStatsInfoOverlayPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "VideoStatsInfoOverlayPlugin",
    type: "application/x-shockwave-flash"
  }
];

FlashPlayer.prototype.flashView = null;

/** @override
*/
FlashPlayer.prototype.createModel = function() {
  FlashPlayer.__super__.createModel.call(this);
  this.playback = new FlashPlaybackProxy(this);
  this.registerProxy(this.playback);
  this.appState.setRenderMode(RenderMode.FLASH);
  this.bindings.initialize();
};

/** @override
*/
FlashPlayer.prototype.createView = function() {
  FlashPlayer.__super__.createView.call(this);
  this.mediator = new FlashPlayerMediator(this.getViewComponent());
  this.registerMediator(this.mediator);
  this.registerMediator(new VideoLayerMediator());
  this.registerMediator(new OverlayLayerMediator());
  this.registerMediator(new LocalizationWrapper(this, this.config));
};

/** @override
*/
FlashPlayer.prototype.createController = function() {
  var _ref,
    _this = this;
  FlashPlayer.__super__.createController.call(this);
  if (((_ref = this.config.plugins) != null ? _ref.react : void 0) != null) {
    this.registerCommand(Notifications.CHANGE_DISPLAY_STATE, ChangeDisplayStateCommand);
    this.getDisplayState = function() {
      return _this.appState.getDisplayState();
    };
    this.setDisplayState = function(value) {
      return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, value);
    };
  }
  this.registerCommand(PluginNotifications.PLUGINS_INITIALIZED, FlashPluginsInitializedCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZE, PlayerEventCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZED, FlashAuthorizedCommand);
  this.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
  this.registerCommand(Notifications.PLAY_STATE_CHANGE, PlayerEventCommand);
  this.registerCommand(Notifications.START, FlashStartCommand);
  this.registerCommand(Notifications.STARTED, PlayerEventCommand);
  this.registerCommand(Notifications.PLAY, PlayerEventCommand);
  this.registerCommand(Notifications.PLAY_REQUEST, PlayerEventCommand);
  this.registerCommand(FlashNotifications.FLASH_CREATED, PlayerEventCommand);
  this.registerCommand(Notifications.CHANGE_PLAYBACK_TARGET, ChangePlaybackTargetCommand);
  this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, PlaybackTargetChangeCommand);
  this.registerCommand(Notifications.UPDATE_DATA_BINDINGS, UpdateDataBindingsCommand);
  this.registerCommand(FlashNotifications.CREATE_XML, PlayerEventCommand);
  this.registerCommand(FlashNotifications.CREATE_FLASH_VARS, PlayerEventCommand);
};

/** @override
*/
FlashPlayer.prototype.createMediaElement = function() {
  var video, viewComponent;
  video = new MediaElementMediator("flash", "div");
  this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, video);
  viewComponent = video.getViewComponent();
  viewComponent.id = viewComponent.name = this.flashObjectID;
  return viewComponent;
};

/**
*/
FlashPlayer.prototype.createDefaults = function() {
  var plugin, resources, swf, _i, _len, _ref, _ref1, _ref2;
  if (!((_ref = this.flashPlugins) != null ? _ref.length : void 0) > 0) {
    return;
  }
  resources = this.config.resources || [];
  if (((_ref1 = this.config.flash) != null ? _ref1.resources : void 0) != null) {
    resources = resources.concat(this.config.flash.resources);
  }
  swf = Utils.mimeTypes.swf;
  _ref2 = this.flashPlugins;
  for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
    plugin = _ref2[_i];
    if ((plugin != null) && resources.filter(function(resource) {
      return resource.id === plugin.id;
    }).length === 0) {
      if (plugin.type == null) {
        plugin.type = swf;
      }
      resources.push(plugin);
    }
  }
  this.config.resources = resources;
};

/**
*/
FlashPlayer.prototype.createParams = function(flash) {
  var params;
  params = {
    allowFullScreen: true,
    allowScriptAccess: "always",
    wmode: "direct",
    bgColor: "#000000"
  };
  if (flash.params != null) {
    if (flash.params.allowFullScreen != null) {
      params.allowFullScreen = flash.params.allowFullScreen;
    }
    if (flash.params.allowScriptAccess != null) {
      params.allowScriptAccess = flash.params.allowScriptAccess;
    }
    if (flash.params.wmode != null) {
      params.wmode = flash.params.wmode;
    }
    if (flash.params.bgColor != null) {
      params.bgColor = flash.params.bgColor;
    }
  }
  if (params.wmode === "direct" && /MSIE/.test(navigator.userAgent)) {
    params.wmode = "transparent";
  }
  return params;
};

/** @override
*/
FlashPlayer.prototype.getModules = function() {
  return this.plugins;
};

/** @override
*/
FlashPlayer.prototype.createPlugins = function() {
  var def, feature, init, key, plugin, plugins, promises, register, type, _ref,
    _this = this;
  type = this.getPlayerType();
  _ref = AMP.plugins;
  for (key in _ref) {
    register = _ref[key];
    if (!((key in this.config) && (this.config[key] != null) && !(this.config[key].enabled === false))) {
      continue;
    }
    def = register[type];
    if (!(def != null)) {
      this.logger.debug("[AMP] Plugin could not be found: " + key);
      continue;
    }
    try {
      plugin = this[key] = this.plugins[key] = new def(this, this.config[key]);
      this.registerMediator(this.plugins[key]);
      feature = typeof plugin.getFeatureName === "function" ? plugin.getFeatureName() : void 0;
      if (feature != null) {
        this[feature] = plugin;
      }
      if (plugin.flashView != null) {
        this.flashView = Utils.override(this.flashView, plugin.flashView);
      }
      this.logger.debug("[AMP] Plugin registered: " + key);
    } catch (error) {
      this.logger.error("[AMP] Plugin could not be created: " + key + ". " + error);
      continue;
    }
  }
  plugins = this.config.plugins || {};
  promises = [];
  for (key in plugins) {
    init = plugins[key];
    if (!((init != null) && init.enabled !== false)) {
      continue;
    }
    plugin = function(player, config, key) {
      return _this.loadResources(config.resources).then(function() {
        def = AMP.plugins[key][type];
        if (!(def != null)) {
          throw new Error("[AMP] Plugin could not be found: " + key);
        }
        return def(player, config, key).then(function(result) {
          _this.logger.debug("[AMP] Plugin registered: " + key);
          return {
            key: key,
            value: result
          };
        });
      })["catch"](function(error) {
        return _this.logger.error("[AMP] Plugin could not be created: " + key + ". " + error);
      });
    };
    promises.push(plugin.bind(null, this, init, key));
  }
  promises = promises.map(function(item) {
    return item();
  });
  Promise.all(promises).then(function(plugins) {
    var plugin, _i, _len;
    if (_this.config.flash.view != null) {
      _this.flashView = Utils.override(_this.flashView, _this.config.flash.view);
    }
    for (_i = 0, _len = plugins.length; _i < _len; _i++) {
      plugin = plugins[_i];
      if (!(plugin != null)) {
        continue;
      }
      _this[plugin.key] = plugin.value;
      _this.plugins[plugin.key] = plugin.value;
    }
    return _this.sendNotification(PluginNotifications.PLUGINS_INITIALIZED, _this.plugins);
  })["catch"](function(error) {
    return _this.logger.error(error);
  });
};

/**
*/
FlashPlayer.prototype.createAttributes = function(flash) {
  var attributes;
  attributes = {
    id: this.flashObjectID,
    name: this.flashObjectID
  };
  if (flash.attributes != null) {
    if (flash.attributes.id != null) {
      attributes.id = flash.attributes.id;
    }
    if (flash.attributes.name != null) {
      attributes.name = flash.attributes.name;
    }
  }
  return attributes;
};

/**
*/
FlashPlayer.prototype.createFlashJSON = function(config, spacer) {
  var prepJSON, prepValue;
  if (config == null) {
    config = this.config;
  }
  config = JSON.stringify(config);
  config = this.evaluatePaths(config);
  config = JSON.parse(config);
  prepValue = function(config, key, value) {
    switch (typeof value) {
      case "string":
        config[key] = escape(value);
        break;
      case "object":
        prepJSON(value);
    }
  };
  prepJSON = function(config) {
    var key, value, _i, _len;
    if (config instanceof Array) {
      for (key = _i = 0, _len = config.length; _i < _len; key = ++_i) {
        value = config[key];
        prepValue(config, key, value);
      }
    } else if (typeof config === "object") {
      for (key in config) {
        value = config[key];
        prepValue(config, key, value);
      }
    }
  };
  prepJSON(config);
  return encodeURIComponent(JSON.stringify(config, null, spacer));
};

/**
*/
FlashPlayer.prototype.createFlashVars = function(flash) {
  var flashvars, loadingViewString, prop, settings, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
  flashvars = {};
  settings = JSON.parse(JSON.stringify(this.config));
  settings.flash = null;
  delete settings.flash;
  settings.locales = null;
  delete settings.locales;
  settings.params = null;
  delete settings.params;
  settings.rules = null;
  delete settings.rules;
  flashvars.settings_json = this.createFlashJSON(settings);
  if (this.config.autoplay != null) {
    flashvars.auto_play = this.config.autoplay;
  }
  if ((this.config.rules != null)) {
    Utils.mergeRules(this.config.rules);
  }
  flashvars.hinting_rules = escape(JSON.stringify(Utils.rules));
  if (this.config.volume != null) {
    flashvars.volume = Utils.clamp(this.config.volume, 0, 1);
  }
  if ((this.config.target != null)) {
    flashvars.external_target = this.config.target;
  }
  if ((this.config.name != null)) {
    flashvars.core_player_name = this.config.name;
  }
  if ((this.config.domain != null)) {
    flashvars.embed_domain = flashvars.domain = this.config.domain;
  }
  this._loop = flashvars.auto_replay = this.config.loop === true;
  if (this.config.fullscreen != null) {
    flashvars.fullscreen_enabled = this.config.fullscreen.enabled !== false && this.config.fullscreen.mode !== FullscreenMode.EXTERNAL;
  }
  if (this.config.titlebar != null) {
    flashvars.titlebar_enabled = this.config.titlebar.enabled !== false;
  }
  if (this.config.params != null) {
    flashvars.params = escape(JSON.stringify(this.config.params));
  }
  if (this.config.version != null) {
    flashvars.context_menu_label = this.config.version;
  }
  if (((_ref = this.config.controls) != null ? _ref.displaySceneMarkers : void 0) != null) {
    flashvars.displaySceneMarkers = this.config.controls.displaySceneMarkers;
  }
  if (this.config.media != null) {
    this.mediaProxy.setData(this.config.media);
    if (this.config.media.src != null) {
      this.setSrc(this.config.media.src);
      flashvars.video_url = escape(this.config.media.src);
    }
    if ((this.config.media.source != null) && this.config.media.source.length > 0) {
      this.setSource(this.config.media.source);
      flashvars.video_url = escape(this.mediaProxy.getSrc());
    }
    if (this.config.media.medium != null) {
      this.setMedium(this.config.media.medium);
      flashvars.medium = this.config.media.medium;
    }
    if (this.config.media.title != null) {
      flashvars.title = encodeURIComponent(this.config.media.title);
    }
    if (this.config.media.poster != null) {
      flashvars.poster = escape(this.config.media.poster);
    }
    if (this.config.media.temporalType != null) {
      flashvars.temporalType = this.config.media.temporalType;
    }
  }
  if (this.getMedium() === "audio") {
    flashvars.controls = true;
    flashvars.auto_hide = -1;
  }
  if (((_ref1 = this.config.ima) != null ? (_ref2 = _ref1.overlay) != null ? _ref2.delay : void 0 : void 0) != null) {
    flashvars.overlay_ad_delay = this.config.ima.overlay.delay;
  }
  if ((this.config.ticker != null) && this.config.ticker.enabled !== false) {
    if (this.config.ticker.url != null) {
      flashvars.ticker_text_url = this.config.ticker.url;
    }
    if (this.config.ticker.interval != null) {
      flashvars.ticker_polling_interval = this.config.ticker.interval;
    }
    if (this.config.ticker.speed != null) {
      flashvars.ticker_speed = this.config.ticker.speed;
    }
  }
  flashvars.show_play_button_overlay = false;
  flashvars.auto_play_list = false;
  flashvars.next_video_timer = 0;
  if (flashvars.context_menu_mode == null) {
    flashvars.context_menu_mode = this.debug === true ? "long" : "short";
  }
  if (((_ref3 = this.config.flash) != null ? (_ref4 = _ref3.view) != null ? (_ref5 = _ref4.elements) != null ? (_ref6 = _ref5.loadingView) != null ? _ref6.attributes : void 0 : void 0 : void 0 : void 0) != null) {
    loadingViewString = "";
    for (prop in this.config.flash.view.elements.loadingView.attributes) {
      loadingViewString += prop + ":" + this.config.flash.view.elements.loadingView.attributes[prop] + " ";
    }
    flashvars.loadingView = loadingViewString;
  }
  this.sendNotification(FlashNotifications.CREATE_FLASH_VARS, {
    flashvars: flashvars,
    config: this.config
  });
  flashvars = Utils.override(flashvars, flash.vars);
  return flashvars;
};

/**
*/
FlashPlayer.prototype.createXML = function(config) {
  var app, element, elements, isStatic, key, mode, node, parent, parseResources, parseView, plugin, plugins, str, swf, value, viewXML, xml, _i, _j, _len, _len1, _ref, _ref1, _ref2;
  if (!((config != null ? (_ref = config.flash) != null ? _ref.xml : void 0 : void 0) != null)) {
    if (config.flash == null) {
      config.flash = {};
    }
    config.flash.xml = "<application></application>";
  }
  xml = XMLUtils.parse(config.flash.xml);
  if (xml.childNodes.length > 1) {
    xml.removeChild(xml.firstChild);
  }
  this.sendNotification(FlashNotifications.CREATE_XML, {
    config: config,
    xml: xml
  });
  parseResources = function(config) {
    var key, plugins, resource, resources, value, _i, _len, _ref1;
    resources = config.resources;
    plugins = [];
    if ((resources instanceof Array) && ((resources != null ? resources.length : void 0) > 0)) {
      for (_i = 0, _len = resources.length; _i < _len; _i++) {
        resource = resources[_i];
        if (!(resource.type === swf)) {
          continue;
        }
        resource = Utils.clone(resource);
        if (isStatic === true) {
          if ((resource.main != null) && resource.main !== "") {
            resource.src = resource.main;
            resource.type = "static";
          } else {
            resource.type = "dynamic";
          }
        } else {
          if ((resource.src != null) && resource.src !== "") {
            resource.type = "dynamic";
          } else {
            resource.src = resource.main;
            resource.type = "static";
          }
        }
        delete resource.main;
        plugins.push(resource);
      }
    }
    for (key in config) {
      value = config[key];
      if (key !== "flash" && ((resources = value != null ? value.resources : void 0) != null) && (resources instanceof Array) && (resources.length > 0)) {
        plugins = plugins.concat(parseResources(value));
      }
    }
    _ref1 = config.plugins;
    for (key in _ref1) {
      value = _ref1[key];
      if (((resources = value != null ? value.resources : void 0) != null) && (resources instanceof Array) && (resources.length > 0)) {
        plugins = plugins.concat(parseResources(value));
      }
    }
    return plugins;
  };
  swf = Utils.mimeTypes.swf;
  plugins = parseResources(this.config);
  isStatic = ((_ref1 = config.flash["static"]) != null ? _ref1.enabled : void 0) === true;
  if ((plugins != null ? plugins.length : void 0) > 0) {
    parent = xml.getElementsByTagName("plugins");
    if (parent.length < 1) {
      parent = xml.createElement("plugins");
      xml.firstChild.appendChild(parent);
    } else {
      parent = parent[0];
    }
    for (_i = 0, _len = plugins.length; _i < _len; _i++) {
      plugin = plugins[_i];
      if (!(plugin.enabled !== false)) {
        continue;
      }
      node = xml.createElement("plugin");
      for (key in plugin) {
        value = plugin[key];
        if (key !== "loaded") {
          if (key !== "src") {
            node.setAttribute(key, "" + value);
          } else {
            if (key === "id" && value === "AkamaiAdvancedStreamingPlugin" && this.debug === true) {
              value = value.replace("AkamaiAdvancedStreamingPlugin.swf", "AkamaiAdvancedStreamingPlugin-logging.swf");
            }
            node.appendChild(XMLUtils.createTextContent(xml, value));
          }
        }
      }
      parent.appendChild(node);
    }
  }
  parseView = function(view, node) {
    var element, key, value, _ref2, _ref3, _ref4;
    if (view.attributes != null) {
      _ref2 = view.attributes;
      for (key in _ref2) {
        value = _ref2[key];
        node.setAttribute(key, "" + value);
      }
    }
    if (view.elements != null) {
      _ref3 = view.elements;
      for (key in _ref3) {
        value = _ref3[key];
        if (!(value != null)) {
          continue;
        }
        element = xml.createElement("element");
        element.setAttribute("id", key);
        if (element.id === "state") {
          continue;
        }
        parseView(value, element);
        node.appendChild(element);
      }
    }
    if (view.state != null) {
      element = xml.createElement("state");
      if (view.state.attributes) {
        _ref4 = view.state.attributes;
        for (key in _ref4) {
          value = _ref4[key];
          if (value != null) {
            element.setAttribute(key, "" + value);
          }
        }
      }
      node.appendChild(element);
    }
    return node;
  };
  viewXML = xml.getElementsByTagName("view")[0];
  if (!(viewXML != null)) {
    viewXML = xml.createElement("view");
    xml.firstChild.appendChild(viewXML);
  }
  parseView(this.flashView, viewXML);
  mode = (_ref2 = this.config.fullscreen) != null ? _ref2.mode : void 0;
  if (mode != null) {
    elements = xml.getElementsByTagName("element");
    for (_j = 0, _len1 = elements.length; _j < _len1; _j++) {
      element = elements[_j];
      if (element.getAttribute("id") === "fullscreenBtn") {
        element.setAttribute("action", "external");
      }
    }
  }
  str = XMLUtils.serialize(xml);
  app = str.match(/<application>[\w\W\s\S\d\D]*<\/application>/)[0] || str;
  app = app.replace(/[\n\r\t]/g, "");
  app = this.evaluatePaths(app);
  return encodeURIComponent(app);
};

/**
*/
FlashPlayer.prototype.createdHandler = function(obj) {
  var id, mediaElement,
    _this = this;
  id = this.getMediaElement().id;
  mediaElement = document.getElementById(id);
  this.setMediaElement(mediaElement);
  mediaElement.className = Namespace.PREFIX + MediaElementMediator.prototype.componentType;
  mediaElement.eventHandler = function(eventName, body) {
    return _this.eventHandler(eventName, body);
  };
  this.sendNotification(FlashNotifications.FLASH_CREATED);
  if (this.getMedium() != null) {
    this.setMedium(this.getMedium());
  }
};

/**
*/
FlashPlayer.prototype.eventHandler = function(eventName, body) {
  var error, event, helper, media, state, type, update, _ref, _ref1, _ref2, _ref3,
    _this = this;
  if (this.logEvents && !this.excludedFlashEvents.test(eventName)) {
    this.logger.log("[AMP FLASH EVENT] " + eventName, body);
  }
  try {
    switch (eventName) {
      case FlashNotifications.INITIALIZED:
        type = state = "ready";
        break;
      case FlashNotifications.RESET:
        if (!(body != null)) {
          state = "ready";
        }
        this.started = false;
        break;
      case FlashNotifications.LOADING:
        type = "loadstart";
        break;
      case FlashNotifications.PLAYER_ERROR:
        type = state = "error";
        break;
      case FlashNotifications.MEDIA_ERROR:
        type = state = "error";
        break;
      case FlashNotifications.FEED_LOADED:
        body = JSON.parse(body);
        helper = new MRSSHelper();
        media = (_ref = helper.createFeed(body)) != null ? (_ref1 = _ref.item) != null ? _ref1[0] : void 0 : void 0;
        if (media != null) {
          this.mediaProxy.setData(media);
        }
        break;
      case FlashNotifications.FEED_UPDATED:
        type = "mediachange";
        body = this.getMedia();
        update = true;
        break;
      case FlashNotifications.ERROR_STREAM_NOT_FOUND:
        type = state = "error";
        break;
      case FlashNotifications.CAPABILITY_CHANGE:
        event = body.type;
        if (event === "canPlayChange" && body.enabled === true) {
          type = "canplay";
          this.loaded = true;
        } else if (event === "canSeekChange" && body.enabled === true) {
          type = "canplaythrough";
        } else if (event === "temporalChange" && body.enabled === true) {
          type = "loadedmetadata";
          if (!this.started) {
            this.sendNotification(Notifications.START, body);
          }
        }
        break;
      case FlashNotifications.PLAYING:
        if (!this.started) {
          this.sendNotification(Notifications.START, body);
        }
        type = state = "playing";
        this._ended = false;
        this._paused = false;
        if (this.appState.getSeeking() === true) {
          this.appState.setSeeking(false);
          this.sendNotification(Notifications.SEEKED);
          this.sendNotification(Notifications.DISPATCH_EVENT, new Event("seeked"));
        }
        break;
      case FlashNotifications.ELEMENT_EVENT:
        if (body.element === "fullscreenBtn" && body.type === "click" && ((_ref2 = this.config) != null ? (_ref3 = _ref2.fullscreen) != null ? _ref3.mode : void 0 : void 0) === FullscreenMode.EXTERNAL) {
          state = this.getDisplayState() === DisplayState.FULL_SCREEN ? DisplayState.NORMAL : DisplayState.FULL_SCREEN;
          this.setDisplayState(state);
        }
        break;
      case FlashNotifications.PLAY_REQUEST:
        this.sendNotification(Notifications.PLAY_REQUEST);
        this.setPlayState("playing");
        type = Notifications.MEDIA_SEQUENCE_STARTED;
        this.loaded = true;
        this._ended = false;
        break;
      case FlashNotifications.PLAY:
        if (this.getPlayState() !== "paused" && this.started) {
          this.sendNotification(Notifications.PLAY, body);
        }
        break;
      case FlashNotifications.ENDED:
        type = Notifications.ENDED;
        break;
      case FlashNotifications.MEDIA_SEQUENCE_ENDED:
        type = Notifications.MEDIA_SEQUENCE_ENDED;
        state = Notifications.ENDED;
        this._ended = true;
        break;
      case FlashNotifications.PAUSED:
        type = "pause";
        state = "paused";
        this._paused = true;
        break;
      case FlashNotifications.BUFFERING:
        if (this.className !== "ended") {
          type = state = "waiting";
        }
        break;
      case FlashNotifications.DURATION_CHANGE:
        if (!isNaN(body.time)) {
          if (body.time === 0) {
            this.sendNotification(Notifications.MEDIA_SEQUENCE_ABORTED);
          }
          type = "durationchange";
          body = body.time;
          setTimeout(function() {
            _this.setCues(_this.getCues().slice());
          }, 0);
        }
        break;
      case FlashNotifications.VOLUME_CHANGE:
        type = "volumechange";
        body = body.volume;
        break;
      case FlashNotifications.TIME_UPDATE:
        type = "timeupdate";
        body = body.currentTime;
        break;
      case FlashNotifications.SEEKING_CHANGE:
        if (this.appState.getSeeking() === false && body.seeking === false) {
          return;
        }
        type = body.seeking ? "seeking" : "seeked";
        this.appState.setSeeking(body.seeking);
        if (body.seeking) {
          state = "seeking";
        }
        break;
      case FlashNotifications.FULLSCREEN_CHANGE:
        type = "fullscreenchange";
        body = body.displayState === "fullScreen";
        this.applyDisplayState(body ? DisplayState.FULL_SCREEN : DisplayState.NORMAL);
        break;
      case FlashNotifications.FAIL_OVER_ATTEMPT:
        type = "failoverattempt";
        body = body;
        break;
      case FlashNotifications.ERROR:
        eventName = null;
        break;
      case FlashNotifications.AUTHORIZE:
        type = SecurityNotifications.AUTHORIZE;
        break;
      case FlashNotifications.TIMED_METADATA:
        type = Notifications.TIMED_METADATA;
        body = {
          startTime: body.time,
          endTime: body.time,
          data: body
        };
        break;
      case FlashNotifications.MEDIA_PLAYER_ID3_UPDATED:
        type = Notifications.TIMED_METADATA;
        body = {
          startTime: body.time,
          endTime: body.time,
          data: window.atob(body)
        };
    }
    if ((eventName != null) && eventName !== type) {
      event = new Event(eventName, body);
      event.dispatcher = "FLASH";
      this.sendNotification(Notifications.DISPATCH_EVENT, event);
      this.sendNotification(eventName, body);
    }
    if (type != null) {
      if (type === "error") {
        error = body.error || body;
        this.logError("Flash Error", error);
      }
      this.sendNotification(type, body);
      this.sendNotification(Notifications.DISPATCH_EVENT, new Event(type, body));
    }
    if (update != null) {
      this.sendNotification(Notifications.UPDATE_DATA_BINDINGS);
    }
    if (state != null) {
      this.setPlayState(state);
    }
  } catch (error) {
    this.logError("Event Error: " + eventName, error);
  }
};

FlashPlayer.prototype.logError = function(msg, error) {
  this.logger.error("[AMP FLASH ERROR]", msg, error);
};

/**
*/
FlashPlayer.prototype.excludedFlashEvents = /(mediaPlayerPlayheadUpdate|mediaPlayerElementEvent|adComponentPlaybackProgress)/;

FlashPlayer.prototype.logFlashEvents = false;

FlashPlayer.prototype.logEvent = function(event) {
  if ((event.dispatcher === "FLASH" && this.logFlashEvents === false) || this.excludedFlashEvents.test(event.type) === true) {
    return;
  }
  FlashPlayer.__super__.logEvent.call(this, event);
};

/**
 * Sets the player's play state and adds CSS class to player div
*/
FlashPlayer.prototype.setPlayState = function(state) {
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, state);
  return state;
};

FlashPlayer.prototype.getPlayState = function() {
  return this.appState.getPlayState();
};

/**
 * Initializes the player to a given set of parameters
*/
FlashPlayer.prototype.setMedia = function(value) {
  var _this = this;
  if (this.getPlayState() != null) {
    this.setPlayState("ready");
  }
  this.mediaProxy.transform(value).then(function(result) {
    value = result;
    _this.mediaProxy.setData(value);
    if (value.src != null) {
      _this.setSrc(value.src);
    }
    if ((value.source != null) && value.source.length > 0) {
      _this.setSource(value.source);
    }
    _this.sendNotification(Notifications.MEDIA_CHANGE, value);
    return _this.load(_this.mediaProxy.getData());
  })["catch"](function(error) {
    return _this.sendNotification(Notifications.ERROR, error);
  });
  return value;
};

/**
*/
FlashPlayer.prototype.getMedia = function() {
  return this.mediaProxy.getData();
};

/**
 * Loads the video.
 *
*/
FlashPlayer.prototype.load = function() {
  var data, key, media, value;
  media = this.mediaProxy.getData();
  this.security.setMedia(media);
  if (this.security.getAuthorized()) {
    this.loaded = true;
    data = Utils.clone(media);
    if (data.autoplay == null) {
      data.autoplay = this.config.autoplay;
    }
    for (key in data) {
      value = data[key];
      if (value === void 0) {
        delete data[key];
      }
    }
    this.getMediaElement().loadURL(this.mediaProxy.getSrc(), data);
  } else {
    this.sendNotification(SecurityNotifications.AUTHORIZE, {
      media: media
    });
  }
};

/**
 * Plays the currently loaded video.
 *
*/
FlashPlayer.prototype.play = function() {
  if (!this.loaded) {
    this.load();
  }
  this.getMediaElement().unpause();
};

/**
*/
FlashPlayer.prototype.setMuted = function(value) {
  this._muted = value;
  try {
    if (value === true) {
      this.getMediaElement().mute();
    } else {
      this.getMediaElement().unmute();
    }
  } catch (error) {
    this.logError("Flash muted error", error);
  }
  return value;
};

/**
*/
FlashPlayer.prototype.getMuted = function() {
  return this._muted;
};

/**
*/
FlashPlayer.prototype.getLoop = function() {
  return this._loop;
};

/**
 * The source url of video.
 *
 * @param {String} value The source url of the video to play.
*/
FlashPlayer.prototype.getSrc = function(value) {
  return this.getMediaElement().getURL();
};

FlashPlayer.prototype.setSrc = function(value) {
  this.mediaProxy.setSrc(value);
  this.loaded = false;
  this.setMedium(Utils.getMimeType(value));
  return value;
};

/**
*/
FlashPlayer.prototype.setAutoplay = function(value) {
  this.getMediaElement().setPlayerProperty("autoplay", value);
  return value;
};

FlashPlayer.prototype.getAutoplay = function() {
  return this.getMediaElement().getPlayerProperty("autoplay");
};

/**
 * The url to the video.
 *
 * @param {String} value
 *    The new title of the video
 * @returns {Boolean}
 *    The title of the video
 * @type {String}
*/
FlashPlayer.prototype.getMedium = function() {
  return this.mediaProxy.getData().medium;
};

FlashPlayer.prototype.setMedium = function(value) {
  var media, previous;
  media = this.mediaProxy.getData();
  if (value === media.medium) {
    return;
  }
  if (media.medium != null) {
    previous = "medium-" + media.medium;
  }
  media.medium = /audio/.test(value) ? "audio" : "video";
  this.sendNotification(Notifications.MEDIUM_CHANGE, {
    value: "medium-" + media.medium,
    previous: previous
  });
  return value;
};

/**
 * Sets the source url of video.
 *
 * @param {String} value The source url of the video to play.
*/
FlashPlayer.prototype.setSource = function(value) {
  var item, media,
    _this = this;
  if (!(value != null) || value.length < 1) {
    return;
  }
  media = this.mediaProxy.getData();
  media.source = value;
  this.loaded = false;
  item = Utils.selectSource(value, function(type) {
    return _this.canPlayType(type);
  });
  if (((item != null ? item.src : void 0) != null) && item.src !== "") {
    this.setSrc(item.src);
    if (typeof type !== "undefined" && type !== null) {
      this.setMedium(type);
    }
  } else {
    throw new Error("No valid source could be found");
  }
  return value;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getSource = function() {
  return this.mediaProxy.getData().source;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getSeeking = function() {
  return this.appState.getSeeking();
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getPaused = function() {
  return this._paused;
};

/**
 * Gets the source url of video.
 *
 * @return {Number} The source url of the video.
*/
FlashPlayer.prototype.getEnded = function() {
  return this._ended;
};

/**
*/
FlashPlayer.prototype.getFlashXML = function() {
  var doc, xml;
  xml = decodeURIComponent(this.flashvars.settings_xml);
  doc = XMLUtils.parse(xml);
  try {
    doc.toString = function() {
      return xml;
    };
  } catch (error) {

  }
  return doc;
};

/**
*/
FlashPlayer.prototype.getFlashVars = function() {
  return this.flashvars;
};

/**
*/
FlashPlayer.prototype.getFlashJSON = function() {
  return JSON.parse(decodeURIComponent(this.flashvars.settings_json));
};

FlashPlayer.prototype.evaluateBinding = function(str) {
  var value;
  try {
    value = this.getMediaElement().evaluateBinding(str);
    if (value != null) {
      value = JSON.parse(value);
    }
  } catch (error) {

  }
  return value;
};

FlashPlayer.prototype.canPlayType = function(mimeType) {
  if (__indexOf.call(Utils.flashTypes, mimeType) >= 0) {
    return "maybe";
  } else {
    return "";
  }
};

FlashPlayer.prototype.replay = function() {
  this.getMediaElement().replay();
};

FlashPlayer.prototype.pause = function() {
  this.getMediaElement().pause();
};

FlashPlayer.prototype.end = function() {
  this.getMediaElement().stopPlayer();
};

FlashPlayer.prototype.getCurrentTime = function() {
  var _base;
  return typeof (_base = this.getMediaElement()).getCurrentTime === "function" ? _base.getCurrentTime() : void 0;
};

FlashPlayer.prototype.setCurrentTime = function(value) {
  this.getMediaElement().jumpToTime(value);
  return value;
};

FlashPlayer.prototype.getParams = function() {
  return this.getMediaElement().getParams();
};

FlashPlayer.prototype.setParams = function(value) {
  this.getMediaElement().setParams(value);
  return value;
};

FlashPlayer.prototype.getVolume = function() {
  var _ref;
  return ((_ref = this.getMediaElement()) != null ? typeof _ref.getVolume === "function" ? _ref.getVolume() : void 0 : void 0) || 0;
};

FlashPlayer.prototype.setVolume = function(value, scope) {
  this.getMediaElement().setVolume(value, scope || "");
  return value;
};

FlashPlayer.prototype.getDuration = function() {
  var _base;
  return typeof (_base = this.getMediaElement()).getDuration === "function" ? _base.getDuration() : void 0;
};

FlashPlayer.prototype.getDisplayState = function() {
  return this._displayState;
};

FlashPlayer.prototype.setDisplayState = function(value) {
  var _ref;
  if (value === this._displayState) {
    return;
  }
  this.applyDisplayState(value);
  if (((_ref = this.config.fullscreen) != null ? _ref.mode : void 0) === FullscreenMode.EXTERNAL) {
    return;
  }
  if (this._displayState === DisplayState.FULL_SCREEN) {
    this.getMediaElement().enterFullScreen();
  } else {
    this.getMediaElement().exitFullScreen();
  }
  return value;
};

FlashPlayer.prototype.applyDisplayState = function(value) {
  var states;
  if (value === this._displayState) {
    return;
  }
  states = {
    value: value,
    previous: this._displayState
  };
  this._displayState = value;
  this.sendNotification(Notifications.DISPLAY_STATE_CHANGE, states);
  this.sendNotification(Notifications.DISPATCH_EVENT, new Event("fullscreenchange", this._displayState === DisplayState.FULL_SCREEN));
};

FlashPlayer.prototype.enterFullScreen = function() {
  this.setDisplayState(DisplayState.FULL_SCREEN);
};

FlashPlayer.prototype.exitFullScreen = function() {
  this.setDisplayState(DisplayState.NORMAL);
};

FlashPlayer.prototype.recordContentChange = function(content) {
  this.getMediaElement().recordContentChange(content);
};

FlashPlayer.prototype.setQuality = function(value) {
  return this.getMediaElement().setQuality(value);
};

FlashPlayer.prototype.getQuality = function() {
  var quality;
  try {
    quality = this.getMediaElement().getQuality();
  } catch (error) {

  }
  return quality;
};

FlashPlayer.prototype.getQualityLevels = function() {
  var levels, _base;
  try {
    levels = (typeof (_base = this.getMediaElement()).getQualityLevels === "function" ? _base.getQualityLevels() : void 0) || [];
  } catch (error) {
    levels = [];
  }
  return levels;
};

Events = {
  LOADED_METADATA: "loadedmetadata",
  READY: "ready",
  ERROR: "error",
  ENDED: "ended",
  STARTED: "started",
  DURATION_CHANGE: "durationchange",
  SEEKING: "seeking",
  SEEKED: "seeked",
  TIME_UPDATE: "timeupdate",
  LOAD_START: "loadstart",
  LOADED_DATA: "loadeddata",
  CAN_PLAY: "canplay",
  CAN_PLAY_THROUGH: "canplaythrough",
  PROGRESS: "progress",
  MEDIA_CHANGE: "mediachange",
  WAITING: "waiting",
  STALLED: "stalled",
  PLAY: "play",
  PLAYING: "playing",
  PAUSE: "pause",
  PAUSED: "paused",
  PLAY_REQUEST: "playrequest",
  MEDIUM_CHANGE: "mediumchange",
  TEMPORAL_TYPE_CHANGE: "temporaltypechange",
  VOLUME_CHANGE: "volumechange",
  FAIL_OVER_ATTEMPT: "failoverattempt",
  PLAYBACK_TARGET_CHANGE: "playbacktargetchange",
  PLAYBACK_TARGET_AVAILABLE: "playbacktargetavailable",
  RECORD_CONTENT_CHANGE: "recordcontentchange",
  IS_LIVE: "islive",
  CONTENT_CHANGED: "contentchanged",
  PLAYBACK_RATE_CHANGE: "playbackratechange",
  QUALITY_CHANGE: "qualitychange",
  QUALITY_CHANGING: "qualitychanging",
  QUALITY_MODE_CHANGE: "qualitymodechange",
  QUALITY_LEVELS_LOADED: "qualitylevelsloaded",
  MEDIA_SEQUENCE_STARTED: "mediasequencestarted",
  MEDIA_SEQUENCE_ENDED: "mediasequenceended",
  MEDIA_SEQUENCE_ABORTED: "mediasequenceaborted",
  LANGUAGE_CHANGE: "languagechange",
  TIMED_METADATA: "timedmetadata",
  CUES_CHANGE: "cueschange",
  VIEW_CREATED: "viewcreated",
  MUTE_CHANGE: "mutechange",
  RESUME: "resume",
  PLAY_STATE_CHANGE: "playstatechange",
  FULL_SCREEN_CHANGE: "fullscreenchange",
  init: function() {
    var key, value;
    this.values = [];
    for (key in this) {
      value = this[key];
      if (key !== "values" && key !== "init") {
        this.values.push(value);
      }
    }
  }
};
Events.init();

/**
 * The ModuleAdapter class.
 * 
 * @param {Module} module
 * @constructor
 * @private
 * @extends {puremvc.Mediator}
*/
function ModuleAdapter(module) {
  this.module = module;
  ModuleAdapter.__super__.constructor.call(this, module.getModuleName(), this);
}


__extends(ModuleAdapter, puremvc.Mediator);


ModuleAdapter.prototype.module = null;

ModuleAdapter.prototype.mediator = null;

ModuleAdapter.prototype.initializeNotifier = function(key) {
  var publications,
    _this = this;
  ModuleAdapter.__super__.initializeNotifier.call(this, key);
  publications = this.module.listNotificationPublications();
  if (publications != null) {
    this.mediator = new puremvc.Mediator(this.facade.getModuleName());
    this.mediator.listNotificationInterests = function() {
      return publications;
    };
    this.mediator.handleNotification = function(notification) {
      _this.facade.sendNotification(notification.getName(), notification.getBody(), notification.getType());
    };
  }
};

ModuleAdapter.prototype.onRegister = function() {
  if (this.mediator != null) {
    this.module.registerMediator(this.mediator);
  }
};

ModuleAdapter.prototype.onRemove = function() {
  if (this.mediator != null) {
    this.module.removeMediator(this.mediator);
  }
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 *
*/
ModuleAdapter.prototype.listNotificationInterests = function() {
  return this.module.listNotificationInterests();
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * @param note An INotification
 *
*/
ModuleAdapter.prototype.handleNotification = function(notification) {
  this.module.sendNotification(notification.getName(), notification.getBody(), notification.getType());
};

/**
 * @constructor
*/
function DataBinding() {}

/**
 * @private
 * @type {RegExp}
 * @const
*/
DataBinding.SINGLE = /^\s*[#\$]{([^\$#{}]+)}\s*$/;

/**
 * @private
 * @type {RegExp}
 * @const
*/
DataBinding.TOKEN = /[#\$]{([^\$#}]*)}/g;

/**
 * @private
 * @type {string}
 * @const
*/
DataBinding.RETURN = "return ";

/**
 * @private
 * @type {string}
 * @const
*/
DataBinding.EVENT = "event";

/**
 * @private
 * @type {string}
 * @const
*/
DataBinding.ELEMENT = "element";

/**
 * @private
 * @type {string}
 * @const
*/
DataBinding.PATHS = "paths";

/**
 * Evaluate a data bound string.
 *
 * @param {string} binding
 *   The data bound string.
 *
 * @param {?Object} context
 *   The context object used as "global" when evaluating the binding.
 *
 * @param {?Object} event
 *   An optional event object to expose to the binding.
 *
 * @return {string}
 *   The evaluated result
*/
DataBinding["eval"] = function(binding, context, event, element, paths) {
  var result, single, _ref;
  if (!(binding != null)) {
    return binding;
  }
  single = (_ref = this.SINGLE.exec(binding)) != null ? _ref[1] : null;
  result = single != null ? this.evalBinding(single, context, event, element, paths) : this.evalString(binding, context, event, element, paths);
  return result;
};

/**
 * Evaluate a data bound string.
 *
 * @param {string} binding
 *   The data bound string.
 *
 * @param {?Object} context
 *   The context object used as "global" when evaluating the binding.
 *
 * @param {?Object} event
 *   An optional event object to expose to the binding.
 *
 * @return {string}
 *   The evaluated result
 *
 * @private
*/
DataBinding.evalString = function(binding, context, event, element, paths) {
  return binding.replace(this.TOKEN, this.replaceBinding.bind(this, context, event, element, paths));
};

/**
 * @private
*/
DataBinding.replaceBinding = function(context, event, element, paths, match, token, offset, string) {
  return this.evalBinding(token, context, event, element, paths);
};

/**
 * Evaluate a data bound string.
 *
 * @param {string} binding
 *   The data bound string.
 *
 * @param {?Object} context
 *   The context object used as "this" when evaluating the binding.
 *
 * @param {?Object} event
 *   An optional event object to expose to the binding.
 *
 * @return {string}
 *   The evaluated result
 *
 * @private
*/
DataBinding.evalBinding = function(binding, context, event, element, paths) {
  var result;
  try {
    result = this.exec(binding, context, event, element, paths);
  } catch (error) {
    result = '#{' + binding + '}';
  }
  return result;
};

/**
 * Execute a data binding.
 *
 * @param {string} binding
 *   The data bound string.
 *
 * @param {?Object} context
 *   The context object used as "this" when evaluating the binding.
 *
 * @param {?Object} event
 *   An optional event object to expose to the binding.
 *
 * @return {string}
 *   The evaluated result
 *
 * @private
*/
DataBinding.exec = function(binding, context, event, element, paths) {
  return (new Function(this.EVENT, this.ELEMENT, this.PATHS, this.RETURN + binding)).bind(context)(event, element, paths);
};

/**
 * The EndCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function DispatchEventCommand() {
  DispatchEventCommand.__super__.constructor.call(this);
}


__extends(DispatchEventCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
DispatchEventCommand.prototype.execute = function(notification) {
  var event;
  event = notification.getBody();
  event.player = this.facade.player || this.facade;
  this.facade.dispatchEvent(event);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var Notifications = {
  STARTUP: "startup",
  LOAD: "load",
  PAUSE_REQUEST: "pauserequest",
  TOGGLE_PLAY_PAUSE: "togglePlayPause",
  CHANGE_PLAY_STATE: "chageplaystate",
  MEDIA_ELEMENT_CHANGE: "mediaelementchange",
  HIDDEN_CHANGE: "hiddenchange",
  TOGGLE_FULL_SCREEN: "toggleFullScreen",
  CHANGE_DISPLAY_STATE: "chageDisplayState",
  DISPLAY_STATE_CHANGE: "displayStateChange",
  DISABLE_FULL_SCREEN: "disableFullScreen",
  ENABLE_FULL_SCREEN: "enableFullScreen",
  TOGGLE_ACTIVE: "toggleActive",
  CHANGE_ACTIVE_STATE: "changeactivestate",
  ACTIVE_STATE_CHANGE: "activestatechange",
  CHANGE_MEDIA: "changeMedia",
  SET_MEDIA: "setmedia",
  MEDIA_VALIDATED: "mediavalidated",
  SETTINGS_CHANGE: "settingschange",
  UPDATE_DATA_BINDINGS: "updatedatabindings",
  CHANGE_VOLUME: "changevolume",
  CHANGE_MUTED: "changemuted",
  TOGGLE_MUTED: "togglemuted",
  SEEK: "seek",
  CHANGE_DURATION: "changeduration",
  CHANGE_AUTOPLAY: "changeAutoplay",
  AUTOPLAY_CHANGE: "autoplaychange",
  CHANGE_LOOP: "changeLoop",
  PLAYBACK_CORE_CHANGE: "playbackCoreChange",
  START: "start",
  END: "end",
  REPLAY: "replay",
  REGISTER_PLUGIN: "registerPlugin",
  REGISTER_PLUGINS: "registerPlugins",
  PLUGIN_REGISTERED: "pluginRegistered",
  ADD_LAYER: "addLayer",
  REMOVE_LAYER: "removeLayer",
  ADD_OVERLAY: "addOverlay",
  REMOVE_OVERLAY: "removeOverlay",
  ADD_CONTROL: "addControl",
  REMOVE_CONTROL: "removeControl",
  ADD_CONTROL_STATE: "addControlState",
  REMOVE_CONTROL_STATE: "removeControlState",
  ADD_APPLICATION_STATE: "addApplicationState",
  REMOVE_APPLICATION_STATE: "removeApplicationState",
  DISPATCH_EVENT: "dispatchEvent",
  CHANGE_PARAMS: "changeParams",
  INITIALIZED: "initialized",
  REGISTER_PLAYBACK_CORE: "registerPlaybackCore",
  REMOVE_PLAYBACK_CORE: "removePlaybackCore",
  DISPLAY_TIME: "displaytime",
  IS_USER_ACTIVE: "isUserActive",
  CHANGE_PLAYBACK_TARGET: "changeplaybacktarget",
  LOCK: "lock",
  FRAGMENT_LOAD_START: "fragmentloadstart",
  FRAGMENT_LOADED: "fragmentloaded",
  CHANGE_CONTENT: "changecontent",
  ENABLE_VIDEO_EVENTS: "enablevideoevents",
  DISABLE_VIDEO_EVENTS: "disablevideoevents",
  HAS_POST_CONTENT: "haspostcontent",
  init: function() {
    var key, value;
    for (key in Events) {
      value = Events[key];
      if (key !== "values" && key !== "init") {
        this[key] = value;
      }
    }
  }
};
Notifications.init();

/**
 * The Config class
 *
 * @param Object} overrides
 *    Config overrides
 *
 * @constructor
*/
function Config(overrides) {
  var config, key, react, value;
  if (overrides == null) {
    overrides = {};
  }
  if (!(akamai.amp.AMP.plugins.controls != null)) {
    react = {
      plugins: {
        react: {
          resources: [
            {
              src: "https://unpkg.com/react@15/dist/react-with-addons.min.js",
              debug: "https://unpkg.com/react@15/dist/react-with-addons.js",
              type: "text/javascript"
            }, {
              src: "https://unpkg.com/react-dom@15/dist/react-dom.min.js",
              debug: "https://unpkg.com/react-dom@15/dist/react-dom.js",
              type: "text/javascript"
            }, {
              src: "https://unpkg.com/prop-types/prop-types.min.js",
              debug: "https://unpkg.com/prop-types/prop-types.min.js",
              type: "text/javascript"
            }, {
              src: '#{paths.plugins}react/React.min.css',
              debug: '#{paths.plugins}react/React.css',
              type: "text/css"
            }, {
              src: '#{paths.plugins}react/React.min.js',
              debug: '#{paths.plugins}react/React.js',
              type: "text/javascript"
            }
          ],
          autoHide: 3
        }
      }
    };
    overrides = Utils.override(react, overrides);
  }
  config = Utils.override(Config.defaults, overrides);
  if (/amp\-debug\=true/.test(location.search.toLowerCase()) === true) {
    config.debug = true;
  }
  config.mode = Utils.getPlaybackMode(config.mode);
  config.version = AMP.getVersion();
  for (key in config) {
    value = config[key];
    this[key] = value;
  }
}

Config.create = function(overrides) {
  return new Config(overrides);
};

Config.defaults = {
  paths: {
    base: "../",
    root: "../",
    player: "../amp.premier/",
    plugins: "../akamai/amp/",
    resources: "../resources/"
  },
  resources: [
    {
      src: '#{paths.player}amp.premier.css',
      type: "text/css"
    }
  ],
  rules: {
    android_4_gets_m3u8: {
      regexp: "Android 4"
    }
  },
  attributes: {},
  settings: {},
  autoplay: true,
  loop: false,
  playsinline: null,
  muted: null,
  target: "_blank",
  domain: "akamai.com",
  fullscreen: {},
  contextmenu: {},
  captioning: {},
  controls: {},
  playoverlay: {},
  hls: {
    resources: [
      {
        type: "text/javascript",
        src: '#{paths.resources}js/hls.min.js',
        debug: '#{paths.resources}js/hls.js'
      }
    ],
    quality: {
      startLevel: -1
    },
    data: {
      enableWorker: true
    }
  },
  dash: {
    resources: [
      {
        type: "text/javascript",
        src: "//cdn.dashjs.org/v2.5.0/dash.all.min.js",
        debug: "//cdn.dashjs.org/v2.5.0/dash.all.debug.js"
      }
    ],
    buffer: 1
  },
  flash: {
    swf: '#{paths.player}AkamaiPremierPlayer.swf',
    debug: '#{paths.player}AkamaiPremierPlayer-debug.swf',
    expressInstallSWF: '#{paths.player}playerProductInstall.swf',
    "static": {
      enabled: false,
      swf: '#{paths.player}AkamaiPremierPlayer-static.swf',
      debug: '#{paths.player}AkamaiPremierPlayer-static-debug.swf'
    },
    vars: {
      core_player_name: "amp.premier",
      mbr_starting_index: 2,
      use_last_known_bitrate: false,
      use_netsession_client: false,
      netsession_install_prompt_frequency_secs: -1,
      ad_server_timeout: 20,
      ad_control_enabled: true,
      dvr_enabled: 1,
      branding_preload: "none",
      hds_live_low_latency: true,
      fullscreen_enabled: true,
      show_feature_bar: false,
      suppress_events: "mediaPlayerViewInitialized",
      hds_fragment_retry_data_gap_threshold: 20
    },
    view: {
      attributes: {
        skin: '#{paths.player}premier.assets.swf'
      },
      elements: {
        adOptions: {
          attributes: {
            style: "backgroundColor: 'rgba(0, 0, 0, 0)'"
          },
          elements: {
            adChoices: null,
            adCountdown: null,
            adCount: null
          }
        },
        endSlate: {
          attributes: {
            enabled: "false",
            hideElements: "brandingLogo|viewAll"
          }
        },
        loadingView: {
          attributes: {
            enabled: "false",
            style: "backgroundColor: 'rgba(0, 0, 0, 0)'; color: 'rgba(0, 0, 0, 0)'",
            radius: 0
          }
        }
      }
    }
  },
  locales: {
    en: {
      MSG_TIME_SEPARATOR: " / ",
      MSG_EMAIL_TO: "To",
      MSG_EMAIL_FROM: "From",
      MSG_EMAIL_VIDEO: "Email this video",
      MSG_EMAIL_MESSAGE_DEFAULT: "Check out this video from xxx",
      MSG_EMAIL_MESSAGE: "Message",
      MSG_EMAIL_ADDRESS_INVALID: "Invalid Email Address",
      MSG_EMAIL_MESSAGE_INVALID: "Please limit your message to 500 characters or less.",
      MSG_EMAIL_CHARACTERS_REMAINING_TEXT: " characters left",
      MSG_EMAIL_SEND_FAILURE: "Message could not be sent.",
      MSG_EMAIL_SEND_SUCCESS_MESSAGE: "Your email has been sent!",
      MSG_SHARE_VIDEO_TEXT: "Share this video...",
      MSG_POST_TEXT: "Post",
      MSG_EMBED_TEXT: "Embed",
      MSG_LINK_TEXT: "Link",
      MSG_SHARE_CONNECT_FAILURE: "Unable to connect. Please try again.",
      MSG_SHARE_CONTENT_DISABLED: "Share and embed are disabled.",
      MSG_VERSION_TEXT: "Version",
      MSG_BUFFERING_TEXT: "buffering",
      MSG_CUSTOMIZE_CLIP_POINTS: "Customize the start and end point of the video.",
      MSG_PAUSE: "Pause",
      MSG_PLAY: "Play",
      MSG_REWIND: "Rewind",
      MSG_PLAYBACK_RATE: "Playback Rate",
      MSG_FULLSCREEN: "Fullscreen",
      MSG_ENTER_FULLSCREEN: "Enter Fullscreen",
      MSG_EXIT_FULLSCREEN: "Exit Fullscreen",
      MSG_MUTE: "Mute",
      MSG_JUMP_BACK: "Jump Back",
      MSG_JUMP_AHEAD: "Jump Ahead",
      MSG_VOLUME: "Volume",
      MSG_REPLAY: "Replay",
      MSG_SETTINGS: "Settings",
      MSG_SHARE: "Share",
      MSG_CLOSED_CAPTIONING: "Closed Captioning",
      MSG_SLIDER: "Slider",
      MSG_SEEK: "Seek",
      MSG_OF: "of",
      MSG_AD: "Ad",
      MSG_PREVIEW: "Preview",
      MSG_CURRENT: "Current",
      MSG_SEEK_TO: "Seek to",
      MSG_LIVE: "LIVE",
      MSG_ERROR: "Error",
      MSG_ERROR_ABORTED: "Media Aborted",
      MSG_ERROR_DECODE: "Decode Error",
      MSG_ERROR_NETWORK: "Network Error",
      MSG_ERROR_SRC: "Source not supported",
      MSG_ERROR_DEFAULT: "An error has occured",
      MSG_STREAM_NOT_FOUND: "Stream not found",
      MSG_CURRENT_WORKING_BANDWIDTH: "Current working bandwidth",
      MSG_CURRENT_BITRATE_PLAYING: "Current bitrate playing",
      MSG_MAX_BITRATE_AVAILABLE: "Max bitrate available",
      MSG_NOT_AVAILABLE: "Not Available",
      MSG_GO_LIVE: "GO LIVE",
      MSG_NEXT_VIDEO: "Video starts in: ",
      MSG_RECOMMENDED: "Recommended",
      MSG_VIEW_ALL: "View all ",
      MSG_VIDEO: " videos",
      MSG_CC: "CC",
      MSG_CC_TITLE: "Caption",
      MSG_CC_LANGUAGE: "Track :",
      MSG_CC_PRESETS: "Presets :",
      MSG_CC_FONT: "Font :",
      MSG_CC_EDGE: "Edge :",
      MSG_CC_SIZE: "Size :",
      MSG_CC_SCROLL: "Scroll :",
      MSG_CC_COLOR: "Color :",
      MSG_CC_BACKGROUND: "Background :",
      MSG_CC_WINDOW: "Window :",
      MSG_CC_OPACITY: "Opacity :",
      MSG_CC_SHOW_ADVANCED: "Show Advanced Settings",
      MSG_CC_HIDE_ADVANCED: "Hide Advanced Settings",
      MSG_NEXT_AD: "Next ad starts in: ",
      MSG_CC_RESET: "Default",
      MSG_CC_CANCEL: "Cancel",
      MSG_CC_APPLY: "Apply",
      MSG_CC_PREVIEW_TEXT: "Lorem ipsum dolor sit amet..",
      MSG_EN: "English",
      MSG_ES: "Spanish",
      MSG_DE: "German",
      MSG_FR: "French",
      MSG_IT: "Italian",
      MSG_RU: "Russian",
      MSG_ZH: "Chinese",
      MSG_CHROMECAST_MESSAGE: "Video playing on another screen",
      MSG_RETRY_MESSAGE: "Content not yet available, retrying in",
      MSG_SECONDS: "seconds",
      MSG_RETRY_FAILED: "Retry failed",
      MSG_RECOMMENDATIONS_TITLE: "Recommended",
      MSG_VIEWER_ID: "Viewer ID: ",
      MSG_SIGN_IN: "Sign In",
      MSG_PREVIEW_INFO: "Free Preview",
      MSG_PREVIEW_EXPIRES: "Expires in"
    },
    es: '#{paths.player}es.json',
    fr: '#{paths.player}fr.json'
  }
};

function ITokenized() {}

/**
 * The tokenized data structure
*/
ITokenized.prototype.data = null;

/**
 * The literal value after compiliation
*/
ITokenized.prototype.value = null;

/**
 * The original data structure
*/
ITokenized.prototype.source = null;

/**
 *
*/
ITokenized.prototype.parse = function(data) {};

/**
 * Compiles the tokenized values in the data property
 * and saves them to the value property. As a convenience
 * this function returns the value property.
 * 
 * @param context         An object who's properties can be called from within a token
 * @param suppressErrors  Flag indicating wether or not to suppress errors. Useful when certain context items are known not to exist.
 * @return                The compile value object.
*/
ITokenized.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
};

/**
 * @constructor
 * @private
 * @extends {ITokenized}
 * @param {string} source
*/
function TokenizedBase(source) {
  if (source != null) {
    this.parse(source);
  }
}


__extends(TokenizedBase, ITokenized);


/**
 * The tokenized data structure
*/
TokenizedBase.prototype.data = null;

/**
 * The literal value after compiliation
*/
TokenizedBase.prototype.value = null;

/**
 * The original data structure
*/
TokenizedBase.prototype.source = null;

/**
 * Populates the data property with tokenized values
 * 
 * @param   {Array.<Object>|Object|string|number|boolean} source  The tokenized data structure.
 * @return  {Object} The parsed data structure.
*/
TokenizedBase.prototype.parse = function(source) {
  var value;
  if (source instanceof Array) {
    value = new TokenizedArray(source);
  } else if (source instanceof Object) {
    value = new TokenizedObject(source);
  } else {
    value = new TokenizedValue(source);
  }
  return value;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var SecurityNotifications = {
  AUTHORIZATION_FAILED: "authorizationfailed",
  AUTHORIZE: "authorize",
  AUTHORIZED: "authorized",
  AUTHENTICATION_FAILED: "authenticationfailed",
  AUTHENTICATE: "authenticate",
  AUTHENTICATED: "authenticated",
  AUTHORIZATION_EXPIRED: "authorizationexpired"
};

/** 
 * Binds an event(s) to a handler function.
 * 
 * @param {IEventDispatcher}    target  The event target
 * @param {string|Array|number} type    The event to listen for
 * @param {Function}            handler The handler function to call when the event is dispatched. 
 * @constructor
 * @private
*/
function EventHandler(target, type, handler) {
  var _ref;
  this.target = target;
  this.type = type;
  this.handler = handler;
  this.trigger = __bind(this.trigger, this);

  EventHandler.instances.push(this);
  this.types = [];
  if (_ref = this.type, __indexOf.call(EventHandler.EVENTS, _ref) >= 0) {
    if (Utils.isTouchDevice()) {
      this.types.push(EventHandler.TOUCH_EVENTS[this.type]);
      if (this.type === EventHandler.TOUCH_EVENTS[1]) {
        this.types.push(EventHandler.TOUCH_EVENTS[4]);
      }
    } else {
      this.types.push(EventHandler.MOUSE_EVENTS[this.type]);
    }
  } else if (this.type instanceof Array) {
    this.types = this.type;
  } else {
    this.types.push(this.type);
  }
  this.bind();
}

/**
 * Represents the press user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.PRESS = 0;

/**
 * Represents the release user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.RELEASE = 1;

/**
 * Represents the move user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.MOVE = 2;

/**
 * Represents the click user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.CLICK = 3;

/**
 * Represents the right click (contextMenu) user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.CONTEXTMENU = 4;

/**
 * Represents the mouse over user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.HOVER = 5;

/**
 * Represents the mouse out user interaction
 * 
 * @type {number}
 * @static
 * @const
*/
EventHandler.HOVEROUT = 6;

/**
 * The list of user interactions
 * 
 * @type {Array.<number>}
 * @static
 * @const
*/
EventHandler.EVENTS = [EventHandler.PRESS, EventHandler.RELEASE, EventHandler.MOVE, EventHandler.CLICK, EventHandler.CONTEXTMENU, EventHandler.HOVER, EventHandler.HOVEROUT];

/**
 * The list of mouse interactions
 * 
 * @type {Array.<string>}
 * @static
 * @const
*/
EventHandler.MOUSE_EVENTS = ["mousedown", "mouseup", "mousemove", "click", "contextmenu", "mouseover", "mouseout"];

/**
 * The list of touch interactions
 * 
 * @type {Array.<string>}
 * @static
 * @const
*/
EventHandler.TOUCH_EVENTS = ["touchstart", "touchend", "touchmove", "click", "touchcancel"];

/**
 * An array of EventHandler instances.
 * 
 * @type {Array.<EventHandler>}
 * @static
*/
EventHandler.instances = [];

/**
 * Creates an EventHandler with the parameters provided.
 * 
 * @param {IEventDispatcher}    target  The event target
 * @param {string|Array|number} type    The event to listen for
 * @param {Function}            handler The handler function to call when the event is dispatched. 
 * @static
 * @return {EventHandler} the new EventHandler
*/
EventHandler.create = function(target, type, handler) {
  return new EventHandler(target, type, handler);
};

/**
 * Binds all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.bind = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!(instance.target === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.bind();
  }
};

/**
 * Unbinds all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.unbind = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!(instance.target === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.unbind();
  }
};

/**
 * Clear all EventHandlers of the provided target.
 * 
 * @param {IEventDispatcher} target
 * @static
*/
EventHandler.clear = function(target, type) {
  var i, instance, _i, _len, _ref;
  _ref = EventHandler.instances;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    instance = _ref[i];
    if (!((instance != null ? instance.target : void 0) === target)) {
      continue;
    }
    if ((type != null) && instance.type !== type) {
      continue;
    }
    instance.clear();
    EventHandler.instances.splice(i, 1);
  }
};

/**
 * The system event types for this EventTarget
 * 
 * @type {Array.<string>}
*/
EventHandler.prototype.types = null;

/**
 * Binds the target to the event
*/
EventHandler.prototype.bind = function() {
  var type, _i, _len, _ref;
  _ref = this.types;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    type = _ref[_i];
    if (this.target.addEventListener != null) {
      this.target.addEventListener(type, this.trigger, false);
    } else if (this.target.attachEvent != null) {
      this.target.attachEvent("on" + type, this.trigger);
    }
  }
};

/**
 * Unbinds the target from the event
*/
EventHandler.prototype.unbind = function() {
  var type, _i, _len, _ref;
  _ref = this.types;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    type = _ref[_i];
    if (this.target.removeEventListener != null) {
      this.target.removeEventListener(type, this.trigger);
    } else if (this.target.attachEvent != null) {
      this.target.removeEvent("on" + type, this.trigger);
    }
  }
};

/**
 * Clears the EventHandler
*/
EventHandler.prototype.clear = function() {
  this.unbind();
  this.target = null;
  this.handler = null;
  this.type = null;
  this.types = null;
};

/**
 * Triggers the event handler
*/
EventHandler.prototype.trigger = function(event) {
  this.handler(event);
};

/**
 * @constructor
 * @private
 * @extends {ModuleMediator}
*/
function SettingsMediator() {
  SettingsMediator.__super__.constructor.call(this, "setting");
  this.namespace = "akamai_amp";
  this.defaults = {
    volume: 1,
    captions: {
      visible: false,
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "small",
      scroll: "popout",
      fontColor: "rgba(255,255,255,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0,0,0,0)",
      backgroundColor: "rgba(0,0,0,0)",
      windowColor: "rgba(0,0,0,0.5)"
    }
  };
}


__extends(SettingsMediator, puremvc.Mediator);


/** @override
*/
SettingsMediator.prototype.onRegister = function() {
  var data, settings;
  this.config = this.facade.retrieveProxy(ModuleProxy.NAME);
  settings = this.config.getSettings() || {};
  if (settings.namespace != null) {
    this.namespace = settings.namespace;
  }
  try {
    data = localStorage.getItem(this.namespace);
    if (data != null) {
      this.settings = JSON.parse(data);
    }
  } catch (_error) {}
  if (!(this.settings != null)) {
    this.settings = Utils.clone(this.defaults);
    this.save();
  }
};

/** @override
*/
SettingsMediator.prototype.listNotificationInterests = function() {
  return [Notifications.READY, Notifications.VOLUME_CHANGE, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.SETTINGS_CHANGE, CaptioningNotifications.TRACK_SELECTED];
};

/** @override
*/
SettingsMediator.prototype.handleNotification = function(notification) {
  var body, name, value;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.READY:
      value = this.settings.volume;
      if (value != null) {
        this.sendNotification(Notifications.CHANGE_VOLUME, value);
      }
      break;
    case Notifications.VOLUME_CHANGE:
      if (this.settings.volume === body) {
        return;
      }
      this.change({
        volume: body
      });
      break;
    case CaptioningNotifications.VISIBILITY_CHANGE:
      if (this.settings.captions.visible === body) {
        return;
      }
      this.change({
        captions: {
          visible: body
        }
      });
      break;
    case CaptioningNotifications.SETTINGS_CHANGE:
      this.change({
        captions: body
      });
      break;
    case CaptioningNotifications.TRACK_SELECTED:
      this.change({
        captions: {
          track: body
        }
      });
  }
};

/**
*/
SettingsMediator.prototype.change = function(settings) {
  if (!(settings != null) || typeof settings !== "object" || settings instanceof Array) {
    return;
  }
  Utils.override(this.settings, settings, false);
  this.save();
  this.sendNotification(Notifications.SETTINGS_CHANGE, settings);
};

/**
*/
SettingsMediator.prototype.getSettings = function() {
  return Object.freeze(Object.assign({
    defaults: Object.assign({}, this.defaults),
    change: this.change.bind(this)
  }, this.settings));
};

/**
*/
SettingsMediator.prototype.save = function() {
  try {
    localStorage.setItem(this.namespace, JSON.stringify(this.settings));
  } catch (_error) {}
};

/**
 * Used to track player configuration settings
*/
/**
 * Creates a new instance of MediaProxy.
 *
 * @constructor
 * @private
*/
function ConfigurationProxy(config) {
  this.defaults = Config.defaults;
  ConfigurationProxy.__super__.constructor.call(this, config);
}


__extends(ConfigurationProxy, ModuleProxy);


/** @static
*/
ConfigurationProxy.NAME = ModuleProxy.NAME;

/**
 * @override
*/
ConfigurationProxy.prototype.getContextName = function() {
  return "paths";
};

/**
 * @override
*/
ConfigurationProxy.prototype.getContextData = function() {
  return this.getPaths();
};

/**
*/
ConfigurationProxy.prototype.onRegister = function() {
  this.facade.retrieveProxy(DataBindingProxy.NAME).registerContext(this);
};

/**
 * @override
*/
ConfigurationProxy.prototype.setData = function(value) {
  if (value.rules != null) {
    Utils.mergeRules(value.rules);
  }
  ConfigurationProxy.__super__.setData.call(this, value);
  return value;
};

/**
 * Plays iniline
*/
ConfigurationProxy.prototype.getPlaysInline = function() {
  return this.data.playsinline;
};

/**
 * Plays iniline
*/
ConfigurationProxy.prototype.getMuted = function() {
  return this.data.muted;
};

ConfigurationProxy.prototype.setMuted = function(value) {
  this.data.muted = value;
  return value;
};

/**
 * Auto play.
*/
ConfigurationProxy.prototype.getAutoplay = function() {
  return this.data.autoplay;
};

ConfigurationProxy.prototype.setAutoplay = function(value) {
  this.data.autoplay = value;
  return value;
};

/**
 * Auto play.
*/
ConfigurationProxy.prototype.getLoop = function() {
  return this.data.loop;
};

ConfigurationProxy.prototype.setLoop = function(value) {
  this.data.loop = value;
  return value;
};

/**
 * End Slate.
*/
ConfigurationProxy.prototype.getSettings = function() {
  return this.data.settings;
};

ConfigurationProxy.prototype.setSettings = function(value) {
  this.data.settings = value;
  return value;
};

/**
 * Domain
*/
ConfigurationProxy.prototype.getDomain = function() {
  return this.data.domain;
};

ConfigurationProxy.prototype.setDomain = function(value) {
  this.data.domain = value;
  return value;
};

/**
 * Target.
*/
ConfigurationProxy.prototype.getTarget = function() {
  return this.data.target;
};

ConfigurationProxy.prototype.setTarget = function(value) {
  this.data.target = value;
  return value;
};

/**
 * The player name.
*/
ConfigurationProxy.prototype.getName = function() {
  return this.data.name;
};

ConfigurationProxy.prototype.setName = function(value) {
  this.data.name = value;
  return value;
};

/**
 * The player paths.
*/
ConfigurationProxy.prototype.getPaths = function() {
  return this.data.paths;
};

ConfigurationProxy.prototype.setPaths = function(value) {
  this.data.paths = value;
  return value;
};

/**
 * The player version.
*/
ConfigurationProxy.prototype.getVersion = function() {
  return this.data.version;
};

/**
 * Controls
*/
ConfigurationProxy.prototype.getControls = function() {
  return this.data.controls;
};

ConfigurationProxy.prototype.setControls = function(value) {
  this.data.controls = value;
  return value;
};

/**
 * Fullscreen configuration
*/
ConfigurationProxy.prototype.getFullscreen = function() {
  return this.data.fullscreen || {};
};

ConfigurationProxy.prototype.setFullscreen = function(value) {
  this.data.fullscreen = value;
  return value;
};

/**
 * AudioPlaybackProxy constructor.
 * 
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function AudioPlaybackProxy() {
  AudioPlaybackProxy.__super__.constructor.call(this);
}


__extends(AudioPlaybackProxy, PlaybackCoreProxy);


AudioPlaybackProxy.prototype.playbackCoreName = "audio";

/** @override
*/
AudioPlaybackProxy.prototype.onRegister = function() {
  var mediaElement;
  mediaElement = new MediaElementMediator("html5", "audio");
  this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, mediaElement);
};

/** @override
*/
AudioPlaybackProxy.prototype.onRemove = function() {
  this.facade.createMediaElement();
};

/**
 *
*/
AudioPlaybackProxy.prototype.canPlayMedium = function(medium) {
  return medium === "audio";
};

/** @override
*/
AudioPlaybackProxy.prototype.canPlayType = function(mimeType) {
  if (/audio/.test(mimeType)) {
    return "maybe";
  }
  return "";
};

function FPS() {}

FPS.extractContentId = function(initData, keys) {
  var link;
  link = document.createElement('a');
  link.href = Utils.arrayToString(initData);
  return link.hostname;
};

FPS.extractServerUrl = function(initData, keys) {
  return keys.serverURL || keys.serverUrl;
};

FPS.requestCertificate = function(keys) {
  var request;
  request = {
    url: keys.cert,
    responseType: "arraybuffer",
    headers: {
      "Pragma": "Cache-Control: no-cache",
      "Cache-Control": "max-age=0"
    }
  };
  return Utils.request(request).then(function(xhr) {
    return new Uint8Array(xhr.response);
  });
};

FPS.concatInitDataIdAndCertificate = function(initData, id, cert) {
  var buffer, certArray, dataView, idArray, initDataArray, offset;
  if (typeof id === "string") {
    id = Utils.stringToArray(id);
  }
  offset = 0;
  buffer = new ArrayBuffer(initData.byteLength + 4 + id.byteLength + 4 + cert.byteLength);
  dataView = new DataView(buffer);
  initDataArray = new Uint8Array(buffer, offset, initData.byteLength);
  initDataArray.set(initData);
  offset += initData.byteLength;
  dataView.setUint32(offset, id.byteLength, true);
  offset += 4;
  idArray = new Uint16Array(buffer, offset, id.length);
  idArray.set(id);
  offset += idArray.byteLength;
  dataView.setUint32(offset, cert.byteLength, true);
  offset += 4;
  certArray = new Uint8Array(buffer, offset, cert.byteLength);
  certArray.set(cert);
  return new Uint8Array(buffer, 0, buffer.byteLength);
};

FPS.requestLicense = function(message, contentId, serverUrl) {
  var request,
    _this = this;
  request = {
    url: serverUrl,
    method: "POST",
    responseType: "text",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    data: "spc=" + (Utils.base64EncodeUint8Array(message)) + "&assetId=" + (encodeURIComponent(contentId))
  };
  return Utils.request(request).then(function(xhr) {
    var keyText;
    keyText = xhr.responseText.trim();
    if (keyText.substr(0, 5) === "<ckc>" && keyText.substr(-6) === "</ckc>") {
      keyText = keyText.slice(5, -6);
    }
    return Utils.base64DecodeUint8Array(keyText);
  })["catch"](function(error) {
    throw "The license request failed.";
  });
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {Array.<Object>} data
*/
function TokenizedArray(data) {
  TokenizedArray.__super__.constructor.call(this, data);
}


__extends(TokenizedArray, TokenizedBase);


/**
 *
*/
TokenizedArray.prototype.parse = function(data) {
  var index, token, _i, _len;
  this.data = [];
  for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
    token = data[index];
    this.data[index] = TokenizedArray.__super__.parse.call(this, token);
  }
  return this.data;
};

/**
 *
*/
TokenizedArray.prototype.compile = function(context, suppressErrors) {
  var index, token, _i, _len, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.value = [];
  _ref = this.data;
  for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
    token = _ref[index];
    try {
      this.value[index] = token.compile(context, suppressErrors);
    } catch (error) {
      this.value[index] = null;
      if (!suppressErrors) {
        Logger.error(error);
      }
    }
  }
  return this.value;
};

/**
 * DVRPlaybackProxy constructor.
 *
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function DVRPlaybackProxy() {
  DVRPlaybackProxy.__super__.constructor.call(this);
}


__extends(DVRPlaybackProxy, PlaybackCoreProxy);


DVRPlaybackProxy.prototype.playbackCoreName = "dvr";

DVRPlaybackProxy.prototype.interval = null;

/** @override
*/
DVRPlaybackProxy.prototype.ondurationchange = function(event) {
  this.updateDuration();
};

/** @override
*/
DVRPlaybackProxy.prototype.ontimeupdate = function(event) {
  this.updateCurrentTime();
};

/** @override
*/
DVRPlaybackProxy.prototype.onplay = function(event) {
  this.stopTimer();
  DVRPlaybackProxy.__super__.onplay.call(this, event);
};

/** @override
*/
DVRPlaybackProxy.prototype.onplaying = function(event) {
  this.stopTimer();
  DVRPlaybackProxy.__super__.onplaying.call(this, event);
};

/** @override
*/
DVRPlaybackProxy.prototype.onpause = function(event) {
  this.startTimer();
  DVRPlaybackProxy.__super__.onpause.call(this, event);
};

/** @override
*/
DVRPlaybackProxy.prototype.canPlayTemporalType = function(temporalType) {
  return temporalType === "dvr";
};

/**
*/
DVRPlaybackProxy.prototype.getDuration = function() {
  var mediaElement;
  mediaElement = this.getMediaElement();
  if (mediaElement.duration === Infinity) {
    this.updateDuration();
  }
  return this.data.duration;
};

/**
*/
DVRPlaybackProxy.prototype.getStartTime = function() {
  return this.getMediaElement().seekable.start(0);
};

/**
*/
DVRPlaybackProxy.prototype.getFragmentDuration = function() {
  return 10;
};

/**
*/
DVRPlaybackProxy.prototype.getLiveTime = function() {
  return this.getDuration() - this.getFragmentDuration();
};

/**
*/
DVRPlaybackProxy.prototype.isLive = function() {
  return this.getStartTime() + this.getCurrentTime() >= this.getLiveTime();
};

/** @override
*/
DVRPlaybackProxy.prototype.seek = function(value) {
  var _this = this;
  return DVRPlaybackProxy.__super__.seek.call(this, value + this.getStartTime()).then(function(time) {
    _this.sendNotification(Notifications.IS_LIVE, _this.isLive());
  });
};

/**
*/
DVRPlaybackProxy.prototype.updateCurrentTime = function() {
  var currentTime, seekable;
  seekable = this.getMediaElement().seekable;
  if (seekable.length === 0) {
    return;
  }
  currentTime = this.getMediaElement().currentTime;
  this.data.currentTime = currentTime - seekable.start(0);
  this.sendNotification(Notifications.TIME_UPDATE, this.data.currentTime);
  this.mediaProxy.setIsLive(this.isLive());
};

/**
*/
DVRPlaybackProxy.prototype.updateDuration = function() {
  var seekable;
  seekable = this.getMediaElement().seekable;
  if (seekable.length === 0) {
    return;
  }
  this.data.duration = seekable.end(0) - seekable.start(0);
  this.sendNotification(Notifications.CHANGE_DURATION, this.data.duration);
};

/**
*/
DVRPlaybackProxy.prototype.startTimer = function() {
  this.interval = setInterval(this.updateCurrentTime.bind(this), 1000);
};

/**
*/
DVRPlaybackProxy.prototype.stopTimer = function() {
  if (this.interval != null) {
    clearInterval(this.interval);
    this.interval = null;
    this.updateCurrentTime();
  }
};

/**
 * Creates a new instance of Context.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
 * @implements {IDataBindingContext}
*/
function DataBindingContext() {
  DataBindingContext.__super__.constructor.call(this);
  if (this.contextName == null) {
    this.contextName = this.constructor.NAME;
  }
}


__extends(DataBindingContext, puremvc.Proxy);


DataBindingContext.prototype.contextName = null;

DataBindingContext.prototype.contextData = null;

/**
*/
DataBindingContext.prototype.onRegister = function() {
  var base, bindings;
  if (!(this.getContextName() != null)) {
    return;
  }
  base = this.facade.player || this.facade;
  bindings = base.retrieveProxy(DataBindingProxy.NAME);
  bindings.registerContext(this);
};

/**
*/
DataBindingContext.prototype.getContextName = function() {
  return this.contextName;
};

/**
*/
DataBindingContext.prototype.getContextData = function() {
  return this.contextData;
};

/**
 * Creates a new instance of PlayerProxy.
 *
 * @constructor
 * @private
 * @extends {DataBindingContext}
*/
function PlayerProxy(defaultPlaybackCore, getPlaybackOrder) {
  var _this = this;
  this.defaultPlaybackCore = defaultPlaybackCore;
  this.getPlaybackOrder = getPlaybackOrder;
  PlayerProxy.__super__.constructor.call(this);
  this.playbackCoreMap = [];
  if (this.getPlaybackOrder == null) {
    this.getPlaybackOrder = function(order) {
      if (/Edge|Android/.test(navigator.userAgent)) {
        return ["hls", "dash", "dvr", "default", "audio"];
      }
    };
  }
}


__extends(PlayerProxy, DataBindingContext);


/** @static
*/
PlayerProxy.NAME = "PlayerProxy";

PlayerProxy.prototype.contextName = "player";

PlayerProxy.prototype.getPlaybackOrder = null;

PlayerProxy.prototype.playbackCoreMap = null;

PlayerProxy.prototype.defaultPlaybackCore = null;

PlayerProxy.prototype.activePlaybackCore = null;

/**
*/
PlayerProxy.prototype.onRegister = function() {
  PlayerProxy.__super__.onRegister.call(this);
  this.registerPlaybackCore(new DVRPlaybackProxy());
  this.registerPlaybackCore(this.defaultPlaybackCore);
  this.registerPlaybackCore(new AudioPlaybackProxy());
  this.activePlaybackCore = this.defaultPlaybackCore;
};

PlayerProxy.prototype.ready = function() {
  var order,
    _this = this;
  order = typeof this.getPlaybackOrder === "function" ? this.getPlaybackOrder(this.playbackCoreMap.map(function(core) {
    return core.getPlaybackCoreName();
  })) : void 0;
  if (!(order != null)) {
    return;
  }
  this.playbackCoreMap = this.playbackCoreMap.sort(function(a, b) {
    a = order.indexOf(a.getPlaybackCoreName());
    b = order.indexOf(b.getPlaybackCoreName());
    if (a === b) {
      return 0;
    }
    if (a === -1 && b !== -1) {
      return 1;
    }
    if (a !== -1 && b === -1) {
      return -1;
    }
    return a - b;
  });
};

/**
*/
PlayerProxy.prototype.getActivePlaybackCore = function() {
  return this.activePlaybackCore;
};

/**
*/
PlayerProxy.prototype.registerPlaybackCore = function(core) {
  var name,
    _this = this;
  name = core.getPlaybackCoreName();
  if (!(core != null) || this.playbackCoreMap.some(function(item) {
    return item.getPlaybackCoreName() === name;
  })) {
    return;
  }
  this.playbackCoreMap.push(core);
};

/**
*/
PlayerProxy.prototype.retrievePlaybackCore = function(name) {
  var core, _i, _len, _ref;
  _ref = this.playbackCoreMap;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    core = _ref[_i];
    if (core.getPlaybackCoreName() === name) {
      return core;
    }
  }
};

/**
*/
PlayerProxy.prototype.removePlaybackCore = function(name) {
  var core, index;
  core = this.retrievePlaybackCore(name);
  if (!(core != null)) {
    return null;
  }
  index = this.playbackCoreMap.indexOf(core);
  this.playbackCoreMap.splice(index, 1);
  return core;
};

/**
*/
PlayerProxy.prototype.setPlaybackCore = function(media) {
  var core, error, playbackCore, playbackProxy, _i, _len, _ref;
  _ref = this.playbackCoreMap;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    core = _ref[_i];
    if (core.canPlayMedium(media.medium) === true && core.canPlayTemporalType(media.temporalType) === true && core.canPlayType(media.type) !== "") {
      playbackCore = core;
      break;
    }
  }
  if (!(playbackCore != null)) {
    error = new Error();
    error.code = MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;
    throw error;
  }
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  if (playbackProxy !== playbackCore) {
    if (typeof playbackProxy.destroy === "function") {
      playbackProxy.destroy();
    }
    this.facade.removeProxy(PlaybackProxy.NAME);
    this.facade.registerProxy(playbackCore);
    playbackCore.setData(playbackProxy.getData());
  }
  this.activePlaybackCore = playbackCore;
  return media;
};

/**
*/
PlayerProxy.prototype.canPlayType = function(type) {
  var canPlay, core, _i, _len, _ref;
  _ref = this.playbackCoreMap;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    core = _ref[_i];
    canPlay = core.canPlayType(type);
    if (canPlay !== "") {
      return canPlay;
    }
  }
  return "";
};

/**
 * Gets the context data for this proxy.
 *
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
PlayerProxy.prototype.getContextData = function() {
  var configProxy, element, mediaProxy, playbackProxy;
  configProxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
  playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  element = this.facade.getViewComponent();
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    mode: "html5",
    autoplay: configProxy.getAutoplay(),
    domain: configProxy.getDomain(),
    name: configProxy.getName(),
    currentTime: playbackProxy.getCurrentTime(),
    duration: playbackProxy.getDuration(),
    version: configProxy.getVersion(),
    timecode: {
      duration: Utils.formatTimecode(mediaProxy.getDuration()),
      currentTime: Utils.formatTimecode(playbackProxy.getCurrentTime())
    }
  };
};

/**
 * Creates a new instance of MediaProxy. Used to track metadata associated with the video such as src, title and duration.
 *
 * @constructor
 * @private
 * @extends {DataBindingContext}
*/
function MediaProxy() {
  this.data = {
    metadata: {}
  };
  this.transforms = [this.defaultMediaTransform.bind(this)];
  MediaProxy.__super__.constructor.call(this);
}


__extends(MediaProxy, DataBindingContext);


/** @static
*/
MediaProxy.NAME = "MediaProxy";

MediaProxy.prototype.contextName = "media";

/** @private
*/
MediaProxy.prototype.data = null;

MediaProxy.prototype.value = null;

MediaProxy.prototype.started = false;

MediaProxy.prototype.authorized = true;

MediaProxy.prototype.transforms = null;

/**
 * Gets the context data for this proxy.
 *
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
MediaProxy.prototype.getContextData = function() {
  return this.data;
};

/**
 * Sets the data for this proxy.
 *
 * @param {Object} value
 *    The new data for this proxy
 * @override
*/
MediaProxy.prototype.setData = function(value) {
  if (this.data && this.facade.getCurrentTime() < this.facade.getDuration()) {
    this.sendNotification(Notifications.MEDIA_SEQUENCE_ABORTED);
  }
  this.started = false;
  this.setAutoplay(value.autoplay);
  this.setType(value.type);
  this.setIsLive(value.isLive);
  this.setTemporalType(value.temporalType);
  if (value.source != null) {
    this.setSource(value.source);
  }
  if (value.src != null) {
    this.setSrc(value.src);
  }
  this.setTitle(value.title);
  this.setDuration(value.duration);
  this.setPoster(value.poster);
  this.setGUID(value.guid);
  this.setLink(value.link);
  this.setEmbed(value.embed);
  this.setWidth(value.width);
  this.setHeight(value.height);
  this.setCategory(value.category);
  this.setStartTime(value.startTime);
  this.setDescription(value.description);
  this.setStatus(value.status);
  this.setCategory(value.category);
  this.setMetadata(value.metadata);
  this.setAuthorization(value.authorization);
  this.setMedium(value.medium);
  this.setPubDate(value.pubDate);
  this.setTrack(value.track);
  this.setScenes(value.scenes);
  this.setKeys(value.keys);
  this.setCues(value.cues);
  return this.data;
};

/**
 *
*/
MediaProxy.prototype.defaultMediaTransform = function(media) {
  var index, item, playerProxy, scene, time, _i, _len, _ref, _ref1,
    _this = this;
  if (!(media.src != null) && ((_ref = media.source) != null ? _ref.length : void 0) > 0) {
    playerProxy = this.facade.retrieveProxy(PlayerProxy.NAME) || this.facade;
    if (playerProxy != null) {
      item = Utils.selectSource(media.source, function(type) {
        return playerProxy.canPlayType(type);
      });
    }
    if (((item != null ? item.src : void 0) != null) && item.src !== "") {
      media.src = item.src;
      media.type = item.type;
    } else {
      throw new Error("No valid source could be found");
    }
  }
  if (media.type == null) {
    media.type = Utils.getMimeType(media.src);
  }
  if (!(media.medium != null)) {
    media.medium = /audio/.test(media.type) ? "audio" : "video";
  }
  if (media.temporalType == null) {
    media.temporalType = "vod";
  }
  media.isLive = media.temporalType === "live" || media.temporalType === "dvr";
  if (media.scenes != null) {
    _ref1 = media.scenes;
    for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
      scene = _ref1[index];
      scene.start = isNaN(time = Utils.flattenTimecode(scene.sceneStartTime)) ? 0 : time;
      scene.end = isNaN(time = Utils.flattenTimecode(scene.sceneEndTime)) ? 0 : time;
      scene.title = scene.sceneTitle || "";
      scene.description = scene.sceneDescription || "";
      scene.position = index + 1;
    }
  }
  if (media.startTime == null) {
    media.startTime = 0;
  }
  if (media.status == null) {
    media.status = {};
  }
  if (media.metadata == null) {
    media.metadata = {};
  }
  media.originalSrc = media.src;
  return Promise.resolve(media);
};

MediaProxy.prototype.transform = function(value) {
  return Utils.chain(this.transforms, value);
};

/**
 *
*/
MediaProxy.prototype.updateData = function(data) {
  var key, value;
  for (key in data) {
    value = data[key];
    if (key in this.data) {
      this.data[key] = value;
    }
  }
};

/**
 * The global unique identifier for this to the video.
 *
 * @param {String} value
 *    The new guid of the video
 * @returns {String}
 *    The guid of the video
 * @type {String}
*/
MediaProxy.prototype.getGUID = function() {
  return this.data.guid;
};

MediaProxy.prototype.setGUID = function(value) {
  return this.data.guid = value;
};

MediaProxy.prototype.getLink = function() {
  return this.data.link;
};

MediaProxy.prototype.setLink = function(value) {
  return this.data.link = value;
};

MediaProxy.prototype.getStartTime = function() {
  return this.data.startTime;
};

MediaProxy.prototype.setStartTime = function(value) {
  return this.data.startTime = value;
};

MediaProxy.prototype.getEmbed = function() {
  return this.data.embed;
};

MediaProxy.prototype.setEmbed = function(value) {
  return this.data.embed = value;
};

MediaProxy.prototype.getAutoplay = function() {
  return this.data.autoplay;
};

MediaProxy.prototype.setAutoplay = function(value) {
  return this.data.autoplay = value;
};

MediaProxy.prototype.getPubDate = function() {
  return this.data.pubDate;
};

MediaProxy.prototype.setPubDate = function(value) {
  return this.data.pubDate = value;
};

MediaProxy.prototype.getCategory = function() {
  return this.data.category;
};

MediaProxy.prototype.setCategory = function(value) {
  return this.data.category = value;
};

MediaProxy.prototype.getStatus = function() {
  return this.data.status;
};

MediaProxy.prototype.setStatus = function(value) {
  return this.data.status = value != null ? value : {};
};

/**
 * The url to the video.
 *
 * @param {String} value
 *    The new title of the video
 * @returns {Boolean}
 *    The title of the video
 * @type {String}
*/
MediaProxy.prototype.getSrc = function() {
  return this.facade.security.createURL(this.data.src);
};

MediaProxy.prototype.setSrc = function(value) {
  return this.data.src = value;
};

/**
 * The mimeType of the video.
*/
MediaProxy.prototype.getType = function() {
  return this.data.type;
};

MediaProxy.prototype.setType = function(value) {
  return this.data.type = value;
};

/**
 * The medium the video. ie audio, video, executable
*/
MediaProxy.prototype.getMedium = function() {
  return this.data.medium;
};

MediaProxy.prototype.setMedium = function(value) {
  if (value === this.data.medium) {
    return;
  }
  this.data.medium = value;
  return this.facade.retrieveProxy(ApplicationStateProxy.NAME).setMedium(value);
};

/**
 * Additional information about the vieo
*/
MediaProxy.prototype.getMetadata = function() {
  return this.data.metadata;
};

MediaProxy.prototype.setMetadata = function(value) {
  return this.data.metadata = value;
};

/**
 * The source object of the video.
*/
MediaProxy.prototype.getSource = function() {
  return this.data.source;
};

MediaProxy.prototype.setSource = function(value) {
  return this.data.source = value;
};

/**
 * The source object of the video.
*/
MediaProxy.prototype.getTrack = function() {
  return this.data.track;
};

MediaProxy.prototype.setTrack = function(value) {
  return this.data.track = value;
};

/**
 * The title of the video.
 *
 * @param {String} value
 *    The new title of the video
 * @returns {Boolean}
 *    The title of the video
 * @type {String}
*/
MediaProxy.prototype.getTitle = function() {
  return this.data.title;
};

MediaProxy.prototype.setTitle = function(value) {
  return this.data.title = value;
};

/**
 * The native width of the video.
*/
MediaProxy.prototype.getWidth = function() {
  return this.data.width;
};

MediaProxy.prototype.setWidth = function(value) {
  return this.data.width = value;
};

/**
 * The native width of the video.
*/
MediaProxy.prototype.getHeight = function() {
  return this.data.height;
};

MediaProxy.prototype.setHeight = function(value) {
  return this.data.height = value;
};

/**
 * The description of the video.
 *
 * @param {String} value
 *    The new description of the video
 * @returns {Boolean}
 *    The description of the video
 * @type {String}
*/
MediaProxy.prototype.getDescription = function() {
  return this.data.description;
};

MediaProxy.prototype.setDescription = function(value) {
  return this.data.description = value;
};

/**
 *
*/
MediaProxy.prototype.getCategory = function() {
  return this.data.category;
};

MediaProxy.prototype.setCategory = function(value) {
  return this.data.category = value;
};

/**
 * The duration of the video. This property is used in situations where the
 * duration cannot be determined from the video (i.e. before metadata is loaded)
 *
 * @param {Number} value
 *    The new duration of the video
 * @returns {Number}
 *    The duration of the video
 * @type {Number}
*/
MediaProxy.prototype.getDuration = function(value) {
  return this.data.duration;
};

MediaProxy.prototype.setDuration = function(value) {
  var ua;
  if (value === 0 || this.data.temporalType === "live") {
    return;
  }
  ua = navigator.userAgent;
  if (value === 1 && (/Android/.test(ua) && !/Android.*Chrome/.test(ua))) {
    return;
  }
  if (value !== this.data.duration) {
    this.data.duration = value;
    this.sendNotification(Notifications.DURATION_CHANGE, value);
  }
  if (value === Infinity) {
    this.setTemporalType("live");
  }
  return value;
};

/**
 * The poster image for the video.
 *
 * @param {String} value
 *    The url of the new poster image
 * @returns {String}
 *    The url of the poster image
 * @type {String}
*/
MediaProxy.prototype.getPoster = function(value) {
  return this.data.poster;
};

MediaProxy.prototype.setPoster = function(value) {
  this.data.poster = value;
};

/**
 *
*/
MediaProxy.prototype.getIsLive = function() {
  return this.data.isLive;
};

MediaProxy.prototype.setIsLive = function(value) {
  if (value === this.data.isLive) {
    return;
  }
  this.data.isLive = value;
  this.sendNotification(Notifications.IS_LIVE, value);
  return value;
};

/**
 *
*/
MediaProxy.prototype.getTemporalType = function() {
  return this.data.temporalType || "vod";
};

MediaProxy.prototype.setTemporalType = function(value) {
  var previous;
  if (value === this.data.temporalType) {
    return;
  }
  previous = this.data.temporalType;
  this.data.temporalType = value;
  this.sendNotification(Notifications.TEMPORAL_TYPE_CHANGE, {
    previous: previous,
    value: value
  });
};

/**
 *
*/
MediaProxy.prototype.getScenes = function() {
  return this.data.scenes;
};

MediaProxy.prototype.setScenes = function(value) {
  return this.data.scenes = value;
};

/**
 *
*/
MediaProxy.prototype.getCues = function() {
  return this.data.cues;
};

MediaProxy.prototype.setCues = function(value) {
  if (value == null) {
    value = [];
  }
  if (this.data.cues === value) {
    return;
  }
  this.data.cues = value;
  this.sendNotification(Notifications.CUES_CHANGE, value);
  return value;
};

/**
 *
*/
MediaProxy.prototype.getScene = function(currentTime) {
  var index, scene, _i, _len, _ref;
  if (!(this.data.scenes != null)) {
    return;
  }
  _ref = this.data.scenes;
  for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
    scene = _ref[index];
    if ((scene.start <= currentTime && currentTime < scene.end)) {
      return scene;
    }
  }
};

/**
 *
*/
MediaProxy.prototype.getKeys = function() {
  return this.data.keys;
};

MediaProxy.prototype.setKeys = function(value) {
  this.data.keys = value;
};

/**
 *
*/
MediaProxy.prototype.getAuthorization = function() {
  return this.data.authorization;
};

MediaProxy.prototype.setAuthorization = function(value) {
  this.data.authorization = value;
};

/**
 *
*/
MediaProxy.prototype.getTransforms = function() {
  return this.transforms;
};

/**
 * Creates a new instance of SecurityProxy.
 *
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function SecurityProxy() {
  SecurityProxy.__super__.constructor.call(this, this.constructor.NAME, {});
  this.setupHDN1();
}


__extends(SecurityProxy, puremvc.Proxy);


/** @static
*/
SecurityProxy.NAME = "SecurityProxy";

SecurityProxy.prototype.authorized = true;

SecurityProxy.prototype.timeout = null;

/**
*/
SecurityProxy.prototype.setupHDN1 = function() {
  var _this = this;
  return window.retrieveToken = function(guid, url) {
    var token;
    try {
      _this.facade.logger.debug("[AMP AUTH] HDN1: Token Requested", guid, url);
      token = _this.getToken();
      if (token != null) {
        _this.facade.getMediaElement().tokenRetrievalSuccess("&primaryToken=" + token);
      } else {
        _this.sendNotification(SecurityNotifications.AUTHORIZE);
      }
    } catch (error) {
      _this.facade.logger.error("[AMP AUTH ERROR]: Token Retrival Error", error);
    }
    return true;
  };
};

/**
*/
SecurityProxy.prototype.setMedia = function(media) {
  this.setSession(null);
  this.setAuthorized(media.status.state !== "blocked");
  this.setAuthorization(media.authorization);
};

/**
*/
SecurityProxy.prototype.authorize = function(authorization) {
  this.setAuthorization(authorization);
  this.sendNotification(SecurityNotifications.AUTHORIZED, authorization);
};

/**
*/
SecurityProxy.prototype.getAuthorization = function() {
  return this.data;
};

SecurityProxy.prototype.setAuthorization = function(value) {
  this.data = value || {};
  if (this.data.expiration != null) {
    this.setExpiration(this.data.expiration);
  }
  return value;
};

/**
*/
SecurityProxy.prototype.getKey = function() {
  return this.data.key;
};

SecurityProxy.prototype.setKey = function(value) {
  this.data.key = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getToken = function() {
  return this.data.token;
};

SecurityProxy.prototype.setToken = function(value) {
  this.data.token = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getExpiration = function() {
  return this.data.expiration;
};

SecurityProxy.prototype.setExpiration = function(value) {
  this.data.expiration = value;
  if (this.data.expiration > Date.now()) {
    this.startTimeout();
  }
  return value;
};

/**
*/
SecurityProxy.prototype.startTimeout = function() {
  var _this = this;
  Utils.getUTC().then(function(time) {
    var timeout;
    timeout = function() {
      _this.sendNotification(SecurityNotifications.AUTHORIZATION_EXPIRED);
      _this.sendNotification(SecurityNotifications.AUTHORIZE, {
        media: _this.facade.getMedia()
      });
    };
    return _this.timeout = setTimeout(timeout, _this.getExpiration() - time);
  });
};

/**
*/
SecurityProxy.prototype.stopTimeout = function() {
  clearTimeout(this.timeout);
};

/**
*/
SecurityProxy.prototype.getSecret = function() {
  var secret;
  if (!(this.data.token != null)) {
    return null;
  }
  secret = "";
  if (this.data.token != null) {
    secret = "" + this.data.token;
  }
  if (this.data.key != null) {
    secret = "" + this.data.key + "=" + secret;
  }
  return secret;
};

/**
*/
SecurityProxy.prototype.createURL = function(url) {
  var secret;
  secret = this.getSecret();
  if (secret != null) {
    url += !/\?/.test(url) ? "?" : "&";
    url += secret;
  }
  return url;
};

/**
*/
SecurityProxy.prototype.getAuthorized = function() {
  return this.authorized;
};

SecurityProxy.prototype.setAuthorized = function(value) {
  this.stopTimeout();
  this.authorized = value;
  return value;
};

/**
*/
SecurityProxy.prototype.getSession = function() {
  return this.session;
};

SecurityProxy.prototype.setSession = function(value) {
  this.session = value;
  return value;
};

/**
 * @constructor
 * @private
 * @extends {Error}
 * @param {string} msg
*/
function TokenizationError(msg) {
  this.message = TokenizationError.MESSAGE + msg;
}


__extends(TokenizationError, Error);


TokenizationError.MESSAGE = "Tokenization Error: Could not find token value for: ";

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string|number|boolean} source
*/
function Literal(source) {
  Literal.__super__.constructor.call(this, source);
}


__extends(Literal, TokenizedBase);


/**
 * Populates the data property with tokenized values
 * 
 * @param   source  The tokenized data structure.
 * @return          The parsed data structure.
*/
Literal.prototype.parse = function(data) {
  this.source = this.data = this.value = data;
  return data;
};

/**
 * Compiles the tokenized values in the data property
 * and saves them to the value property. As a convenience
 * this function returns the value property.
 * 
 * @param context     An object who's properties can be called from within a token
 * @param suppressErrors  Flag indicating wether or not to suppress errors. Useful when certain context items are known not to exist.
 * @return          The compile value object.
*/
Literal.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = null;
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string} source
*/
function Token(source) {
  Token.__super__.constructor.call(this, source);
}


__extends(Token, TokenizedBase);


/**
 * The function used to evaluate a token value
*/
Token.prototype.exec = null;

/**
 *
*/
Token.prototype.parse = function(source) {
  this.source = this.data = source;
  this.exec = new Function("context", 'var value; with(context){value = ' + this.data + ';}return value;');
  return this.data;
};

/**
 *
*/
Token.prototype.compile = function(context, suppressErrors) {
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.exec != null)) {
    return this.value;
  }
  try {
    this.value = this.exec(context);
  } catch (error) {
    this.value = null;
    if (!suppressErrors) {
      throw new TokenizationError(this.data);
    }
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {string} source
*/
function TokenizedValue(source) {
  this.token = new RegExp(this.tokenStart.source + "([^\$#]*)" + this.tokenEnd.source, "g");
  TokenizedValue.__super__.constructor.call(this, source);
}


__extends(TokenizedValue, TokenizedBase);


/**
 * The function used to evaluate a token value
*/
TokenizedValue.prototype.exec = null;

/**
 * The literal value after compiliation
*/
TokenizedValue.prototype.tokenStart = /[\$#]{/;

TokenizedValue.prototype.tokenEnd = /}/;

TokenizedValue.prototype.token = null;

/**
 *
*/
TokenizedValue.prototype.parse = function(source) {
  var piece, pieces, placeholder, spacer, temp, token, tokens, _i, _len;
  this.source = source;
  this.data = [];
  if (this.token.test(this.source)) {
    tokens = [];
    placeholder = "<<>>";
    spacer = null;
    temp = this.source.replace(this.token, function(match, token, offset, string) {
      tokens.push(token);
      spacer = placeholder;
      if ((0 < offset && offset < string.length - match.length)) {
        spacer += placeholder;
      }
      return spacer;
    });
    pieces = temp.split(placeholder);
    token = 0;
    for (_i = 0, _len = pieces.length; _i < _len; _i++) {
      piece = pieces[_i];
      if (piece === "" && tokens[token]) {
        this.data.push(new Token(tokens[token]));
        token++;
      } else {
        if (piece !== "") {
          this.data.push(new Literal(piece));
        }
      }
    }
    if (this.data.length === 1) {
      this.data = this.data[0];
    }
  } else {
    this.data = new Literal(source);
  }
  return this.data;
};

/**
 *
*/
TokenizedValue.prototype.compile = function(context, suppressErrors) {
  var token, _i, _len, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.data != null)) {
    return this.value;
  }
  try {
    if (this.data instanceof ITokenized) {
      this.value = this.data.compile(context, suppressErrors);
    } else {
      this.value = "";
      _ref = this.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        token = _ref[_i];
        this.value += token.compile(context, suppressErrors);
      }
    }
  } catch (error) {
    this.value = null;
    if (!suppressErrors) {
      throw new TokenizationError(this.source);
    }
  }
  return this.value;
};

/**
 * @constructor
 * @private
 * @extends {TokenizedBase}
 * @param {Object} source
*/
function TokenizedObject(source) {
  TokenizedObject.__super__.constructor.call(this, source);
}


__extends(TokenizedObject, TokenizedBase);


/**
 *
*/
TokenizedObject.prototype.parse = function(source) {
  var key, token;
  this.source = source;
  this.data = {};
  for (key in source) {
    token = source[key];
    this.data[key] = TokenizedObject.__super__.parse.call(this, token);
  }
  return this.data;
};

/**
 *
*/
TokenizedObject.prototype.compile = function(context, suppressErrors) {
  var key, value, _ref;
  if (context == null) {
    context = {};
  }
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.value = {};
  _ref = this.data;
  for (key in _ref) {
    value = _ref[key];
    try {
      this.value[key] = value.compile(context, suppressErrors);
    } catch (error) {
      this.value[key] = null;
      Logger.instance.error(error);
    }
  }
  return this.value;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var DisplayState = {
  /**
   * Constant representing the normal display state
  */

  NORMAL: "normal",
  /**
   * Constant representing the full screen display state
  */

  FULL_SCREEN: "full-screen"
};

/**
 * The DataBoundConfigurationProxy class.
 *   
 * @constructor
 * @private
 * @extends {ModuleProxy}
 * @param {Object} data
*/
function DataBoundConfigurationProxy(data) {
  DataBoundConfigurationProxy.__super__.constructor.call(this, data);
}


__extends(DataBoundConfigurationProxy, ModuleProxy);


/** @static
*/
DataBoundConfigurationProxy.NAME = ModuleProxy.NAME;

DataBoundConfigurationProxy.prototype.bindings = null;

DataBoundConfigurationProxy.prototype.configurationName = null;

DataBoundConfigurationProxy.prototype.configurationData = null;

DataBoundConfigurationProxy.prototype.contextName = null;

DataBoundConfigurationProxy.prototype.contextData = null;

DataBoundConfigurationProxy.prototype.value = null;

DataBoundConfigurationProxy.prototype.getConfigurationName = function() {
  return this.configurationName;
};

DataBoundConfigurationProxy.prototype.getConfigurationData = function() {
  return this.configurationData.value || {};
};

DataBoundConfigurationProxy.prototype.getContextName = function() {
  return this.contextName;
};

DataBoundConfigurationProxy.prototype.getContextData = function() {
  return this.contextData;
};

DataBoundConfigurationProxy.prototype.onRegister = function() {
  var base;
  base = this.facade.player || this.facade;
  if (!(this.getConfigurationName() != null)) {
    this.configurationName = this.facade.moduleName;
  }
  this.bindings = base.retrieveProxy(DataBindingProxy.NAME);
  this.bindings.registerConfiguration(this);
  if (!(this.getContextName() != null)) {
    return;
  }
  this.bindings.registerContext(this);
};

DataBoundConfigurationProxy.prototype.setData = function(data) {
  var key, value, _ref;
  if (data == null) {
    data = {};
  }
  this.data = {};
  _ref = this.getDefaults();
  for (key in _ref) {
    value = _ref[key];
    this.data[key] = key in data ? data[key] : value;
  }
  this.configurationData = new TokenizedObject(this.data);
  return this.data;
};

DataBoundConfigurationProxy.prototype.getValue = function(key) {
  var _ref;
  this.bindings.update();
  this.value[key] = (_ref = this.configurationData.data[key]) != null ? _ref.compile(this.bindings.getData()) : void 0;
  return this.value[key];
};

DataBoundConfigurationProxy.prototype.compile = function(context, suppressErrors) {
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  if (!(this.configurationData != null)) {
    return null;
  }
  if (!(context != null)) {
    context = this.bindings.getData();
  }
  if ((this.contextName != null) && (this.contextData != null)) {
    context = Utils.clone(context);
    context[this.contextName] = this.contextData;
  }
  this.configurationData.compile(context, suppressErrors);
  this.value = this.configurationData.value;
  return this.configurationData.value;
};

/** 
 * @constructor 
 * @private
*/
function ParamsProxy(data) {
  ParamsProxy.__super__.constructor.call(this, data);
}


__extends(ParamsProxy, DataBoundConfigurationProxy);


/** @static
*/
ParamsProxy.NAME = "ParamsProxy";

ParamsProxy.prototype.defaults = {};

ParamsProxy.prototype.configurationName = "params";

/** @override
*/
ParamsProxy.prototype.setData = function(data) {
  var key, value, _ref;
  this.data = ((_ref = this.configurationData) != null ? _ref.source : void 0) || {};
  for (key in data) {
    value = data[key];
    this.data[key] = data[key];
  }
  this.configurationData = new TokenizedObject(this.data);
  return this.data;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var PlayState = {
  /**
   * Constant representing the playing play state
  */

  READY: "ready",
  /**
   * Constant representing the playing play state
  */

  PLAYING: "playing",
  /**
   * Constant representing the paused play state
  */

  PAUSED: "paused",
  /**
   * Constant representing the ended play state
  */

  ENDED: "ended",
  /**
   * Constant representing the waiting play state
  */

  LOADING: "loading",
  /**
   * Constant representing the waiting play state
  */

  WAITING: "waiting",
  /**
   * Constant representing the waiting play state
  */

  ERROR: "error"
};

/** 
 * @constructor 
 * @private
*/
function DataBindingProxy() {
  DataBindingProxy.__super__.constructor.call(this, this.constructor.NAME, {});
  this.data = {};
  this.contextMap = {};
  this.configurationMap = {};
}


__extends(DataBindingProxy, puremvc.Proxy);


/** @static
*/
DataBindingProxy.NAME = "DataBindingProxy";

DataBindingProxy.prototype.contextMap = null;

DataBindingProxy.prototype.configurationMap = null;

DataBindingProxy.prototype.paramsProxy = null;

/**
*/
DataBindingProxy.prototype.initialize = function() {
  this.paramsProxy = this.facade.retrieveProxy(ParamsProxy.NAME);
  this.update();
};

/**
*/
DataBindingProxy.prototype.registerContext = function(context) {
  if (!(context != null)) {
    return;
  }
  this.contextMap[context.getContextName()] = context;
};

/**
*/
DataBindingProxy.prototype.retrieveContext = function(name) {
  return this.contextMap[name];
};

/**
*/
DataBindingProxy.prototype.removeContext = function(name) {
  var context;
  context = this.contextMap[name];
  delete this.contextMap[name];
  return context;
};

/**
*/
DataBindingProxy.prototype.registerConfiguration = function(config) {
  if (!(config != null)) {
    return;
  }
  this.configurationMap[config.getConfigurationName()] = config;
  config.compile(this.context, true);
};

/**
*/
DataBindingProxy.prototype.retrieveConfiguration = function(name) {
  return this.configurationMap[name];
};

/**
*/
DataBindingProxy.prototype.removeConfiguration = function(name) {
  var config;
  config = this.configurationMap[name];
  delete this.configurationMap[name];
  return config;
};

/**
*/
DataBindingProxy.prototype.evaluateBinding = function(str) {
  var tokenizedObject;
  this.update();
  tokenizedObject = new TokenizedValue(str);
  tokenizedObject.compile(this.data);
  return tokenizedObject.value;
};

/**
*/
DataBindingProxy.prototype.update = function(contexts) {
  var context, key, name, value, _ref, _ref1;
  this.data.now = Date.now();
  _ref = this.contextMap;
  for (name in _ref) {
    context = _ref[name];
    if ((contexts != null ? typeof contexts.indexOf === "function" ? contexts.indexOf(name) : void 0 : void 0) === -1) {
      continue;
    }
    this.data[name] = context.getContextData();
  }
  this.paramsProxy.compile(this.data);
  _ref1 = this.paramsProxy.value;
  for (key in _ref1) {
    value = _ref1[key];
    this.data[key] = value;
  }
  return this.data;
};

/**
*/
DataBindingProxy.prototype.compile = function(contexts, suppressErrors) {
  var config, context, name, paramsName, _ref;
  if (suppressErrors == null) {
    suppressErrors = false;
  }
  this.update(contexts);
  context = Utils.clone(this.data);
  paramsName = this.paramsProxy.getConfigurationName();
  _ref = this.configurationMap;
  for (name in _ref) {
    config = _ref[name];
    if (name !== paramsName) {
      config.compile(context, suppressErrors);
    }
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var RenderMode = {
  /**
   * Constant representing the flash renderer.
  */

  FLASH: "flash",
  /**
   * Constant representing the html renderer.
  */

  HTML: "html"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ActiveState = {
  /**
   * Constant representing the active state (controls on).
  */

  ACTIVE: "active",
  /**
   * Constant representing the inactive state (controls off).
  */

  INACTIVE: "inactive"
};

/**
 * @enum {string}
 * @const
 * @private
*/

var PluginNotifications = {
  REGISTER_PLUGINS: "registerPlugins",
  PLUGIN_REGISTERED: "pluginRegistered",
  PLUGINS_INITIALIZED: "pluginsinitialized"
};

/**
 * Used to track the various states of the player like full screen mode and active state (controls visible).
 *
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function ApplicationStateProxy() {
  ApplicationStateProxy.__super__.constructor.call(this);
  this.device = Utils.getDevice();
}


__extends(ApplicationStateProxy, puremvc.Proxy);


/** @static
*/
ApplicationStateProxy.NAME = "ApplicationStateProxy";

/** @private
*/
ApplicationStateProxy.prototype.displayState = DisplayState.NORMAL;

ApplicationStateProxy.prototype.playState = null;

ApplicationStateProxy.prototype.renderMode = null;

ApplicationStateProxy.prototype.activeState = null;

ApplicationStateProxy.prototype.seeking = false;

ApplicationStateProxy.prototype.seekrequested = false;

ApplicationStateProxy.prototype.waiting = false;

ApplicationStateProxy.prototype.isUserActive = false;

ApplicationStateProxy.prototype.device = null;

ApplicationStateProxy.prototype.volume = 1;

ApplicationStateProxy.prototype.playbackTarget = "amp";

ApplicationStateProxy.prototype.hasPostContent = false;

ApplicationStateProxy.prototype.locked = false;

ApplicationStateProxy.prototype.mediaElement = null;

ApplicationStateProxy.prototype.hidden = false;

ApplicationStateProxy.prototype.pausedBeforeSeek = false;

ApplicationStateProxy.prototype.ended = false;

/**
 * Flag indicating whether or not the media will have additional
 * content playback after the media playback is complete
 *
 * @param {Boolean} value
 *    The post content flag
 * @returns {Boolean}
 *    The post content flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getHasPostContent = function() {
  return this.hasPostContent;
};

ApplicationStateProxy.prototype.setHasPostContent = function(value) {
  this.hasPostContent = value;
};

/**
 * Flag indicating whether or not the media playback is complete
 *
 * @param {Boolean} value
 *    The ended flag
 * @returns {Boolean}
 *    The ended flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getEnded = function() {
  return this.ended;
};

ApplicationStateProxy.prototype.setEnded = function(value) {
  this.ended = value;
  if (this.ended === true && this.seeking === true) {
    this.seeking = false;
  }
};

/**
 * The player's display state. Valid options are:
 *
 * ApplicationStateProxy.FULL_SCREEN
 * ApplicationStateProxy.NORMAL
 *
 * @param {String} value
 *    The new display state of the player
 * @returns {String}
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getDisplayState = function() {
  return this.displayState;
};

ApplicationStateProxy.prototype.setDisplayState = function(value) {
  var previous;
  if (value === this.displayState) {
    return;
  }
  previous = this.displayState;
  this.displayState = value;
  this.sendNotification(Notifications.DISPLAY_STATE_CHANGE, {
    previous: previous,
    value: this.displayState
  });
};

/**
 * The player's display state. Valid options are:
 *
 * ApplicationStateProxy.FULL_SCREEN
 * ApplicationStateProxy.NORMAL
 *
 * @param {String} value
 *    The new display state of the player
 * @returns {String}
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getPlayState = function() {
  return this.playState;
};

ApplicationStateProxy.prototype.setPlayState = function(value) {
  var previous;
  if (this.getWaiting() === true) {
    this.setWaiting(false);
  }
  if (value === this.playState) {
    return;
  }
  previous = this.playState;
  this.playState = value;
  this.sendNotification(Notifications.PLAY_STATE_CHANGE, {
    previous: previous,
    value: this.playState
  });
  switch (value) {
    case PlayState.PLAYING:
      this.sendNotification(Notifications.DISPATCH_EVENT, new Event("playing"));
      break;
    case PlayState.ENDED:
      this.pausedBeforeSeek = false;
  }
};

/**
 * The player's device.
 *
 *
 * @returns {String}
 *    The display state of the player
 * @type {String}
*/
ApplicationStateProxy.prototype.getDevice = function() {
  return this.device;
};

/**
 * Indicates whether or not the player is seeking
 *
 * @param {Boolean} value
 *    The seeking flag
 * @returns {Boolean}
 *    The seeking flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getSeeking = function() {
  return this.seeking;
};

ApplicationStateProxy.prototype.setSeeking = function(value) {
  if (value === this.seeking) {
    return;
  }
  this.seeking = value;
  if (this.seeking === false && this.playState === PlayState.PAUSED && this.getWaiting() === true) {
    this.setWaiting(false);
  }
};

/**
 * Indicates whether or not a seek has been requested.
 * This is only set when a seek is requested while
 * a previously requested seek is in progress
 *
 * @param {Boolean} value
 *    The seekrequested flag
 * @returns {Boolean}
 *    The seekrequested flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getSeekRequested = function() {
  return this.seekrequested;
};

ApplicationStateProxy.prototype.setSeekRequested = function(value) {
  if (value === this.seekrequested) {
    return;
  }
  this.seekrequested = value;
};

/**
 * Indicates whether or not the player is waiting
 *
 * @param {Boolean} value
 *    The waiting flag
 * @returns {Boolean}
 *    The waiting flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getWaiting = function() {
  return this.waiting;
};

ApplicationStateProxy.prototype.setWaiting = function(value) {
  var handler, mediaElement, note,
    _this = this;
  if (value === this.waiting) {
    return;
  }
  this.waiting = value;
  note = this.waiting === true ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  this.sendNotification(note, PlayState.WAITING);
  if (this.waiting === true) {
    mediaElement = this.facade.getMediaElement();
    handler = function(event) {
      _this.facade.removeEventListener("playing", handler);
      _this.facade.removeEventListener("timeupdate", handler);
      _this.facade.removeEventListener("ended", handler);
      _this.setWaiting(false);
    };
    this.facade.addEventListener("playing", handler);
    this.facade.addEventListener("timeupdate", handler);
    this.facade.addEventListener("ended", handler);
  }
};

/**
 * Indicates whether or not the player is locked.
 * A lock player will not autoplay even if configured
 * to do so.
 *
 * @param {Boolean} value
 *    The locked flag
 * @returns {Boolean}
 *    The locked flag
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getLocked = function() {
  return this.locked;
};

ApplicationStateProxy.prototype.setLocked = function(value) {
  this.locked = value;
};

/**
 * Indicates whether or not the user is currently interacting with the player
 *
 * @param {Boolean} value
 *
 * @returns {Boolean}
 *
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getIsUserActive = function() {
  return this.isUserActive;
};

ApplicationStateProxy.prototype.setIsUserActive = function(value) {
  if (value !== this.isUserActive) {
    this.isUserActive = value;
  }
};

/**
 * The core type used for rendering the video.
 *
 * @param {String} value
 *    The new currentTime value in seconds
 * @returns {Number}
 *    The currentTime value in seconds
 * @type {Number}
*/
ApplicationStateProxy.prototype.getRenderMode = function() {
  return this.renderMode;
};

ApplicationStateProxy.prototype.setRenderMode = function(value) {
  if (value !== this.renderMode) {
    this.renderMode = value;
  }
};

/**
 * The medium the player is currently playing. Valid options are:
 *
 * "audio"
 * "video"
 *
 * @param {String} value
 *    The new medium
 *
 * @returns {String}
 *    The current medium
 *
 * @type {String}
*/
ApplicationStateProxy.prototype.getMedium = function() {
  return this.medium;
};

ApplicationStateProxy.prototype.setMedium = function(value) {
  var previous;
  if (value === this.medium) {
    return;
  }
  previous = this.medium != null ? "medium-" + this.medium : this.medium;
  this.medium = value;
  this.sendNotification(Notifications.MEDIUM_CHANGE, {
    previous: previous,
    value: "medium-" + this.medium
  });
};

/**
 * The player's volume as a value between 0 and 1.
 *
 * @param {Number} value
 *    The new volume
 *
 * @returns {Number}
 *    The current volume
 *
 * @type {Number}
*/
ApplicationStateProxy.prototype.getVolume = function() {
  return this.volume;
};

ApplicationStateProxy.prototype.setVolume = function(value) {
  if (value === this.volume) {
    return;
  }
  return this.volume = value;
};

/**
 * The playback target. i.e. "amp", "chromecast", "airplay"
 *
 * @param {Number} value
 *    The new volume
 *
 * @returns {Number}
 *    The current volume
 *
 * @type {Number}
*/
ApplicationStateProxy.prototype.getPlaybackTarget = function() {
  return this.playbackTarget;
};

ApplicationStateProxy.prototype.setPlaybackTarget = function(value) {
  var previous;
  if (value === this.playbackTarget) {
    return;
  }
  previous = this.playbackTarget;
  this.playbackTarget = value;
  this.sendNotification(Notifications.PLAYBACK_TARGET_CHANGE, {
    previous: previous,
    value: this.playbackTarget
  });
};

/**
 * The active state of the player. Used to display controls.
 *
 * @param {Boolean} value
 *    The new active state of the video
 * @returns {Boolean}
 *    The active state of the video
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getActiveState = function() {
  return this.activeState;
};

ApplicationStateProxy.prototype.setActiveState = function(value) {
  var previous;
  if (value === this.activeState) {
    return;
  }
  previous = this.activeState;
  this.activeState = value;
  this.sendNotification(Notifications.ACTIVE_STATE_CHANGE, {
    previous: previous,
    value: this.activeState
  });
};

/**
 * The player's media element
 *
 * @param {HTMLElement} value
 *    The new media element
 * @returns {HTMLElement}
 *    The media element
 * @type {HTMLElement}
*/
ApplicationStateProxy.prototype.getMediaElement = function() {
  return this.mediaElement;
};

ApplicationStateProxy.prototype.setMediaElement = function(value) {
  var previous;
  if (value === this.mediaElement) {
    return;
  }
  previous = this.mediaElement;
  this.mediaElement = value;
  this.sendNotification(Notifications.MEDIA_ELEMENT_CHANGE, {
    previous: previous,
    value: this.mediaElement
  });
};

/**
 * The player's hidden state
 *
 * @param {Boolean} value
 *    The new hidden state
 * @returns {Boolean}
 *    The hidden state
 * @type {Boolean}
*/
ApplicationStateProxy.prototype.getHidden = function() {
  return this.hidden;
};

ApplicationStateProxy.prototype.setHidden = function(value) {
  var previous;
  if (value === this.hidden) {
    return;
  }
  previous = this.hidden;
  this.hidden = value;
  this.sendNotification(Notifications.HIDDEN_CHANGE, {
    previous: previous,
    value: this.hidden
  });
};

/**
 * The ExternalMediaProxy class.
 * 
 * @constructor
 * @private
 * @extends {MediaProxy}
*/
function ExternalMediaProxy() {
  ExternalMediaProxy.__super__.constructor.call(this);
}


__extends(ExternalMediaProxy, MediaProxy);


/** @static
*/
ExternalMediaProxy.NAME = "MediaProxy";

/**
 * The source object of the video.
*/
ExternalMediaProxy.prototype.setSource = function(value) {
  if (!(value != null) || value.length < 1) {
    return;
  }
  value = value.filter(function(item) {
    return item.type === "external";
  });
  return ExternalMediaProxy.__super__.setSource.call(this, value);
};

/**
 * The ExternalPlaybackProxy class.
 * 
 * @constructor
 * @private
 * @extends {puremvc.Proxy}
*/
function ExternalPlaybackProxy() {
  ExternalPlaybackProxy.__super__.constructor.call(this);
}


__extends(ExternalPlaybackProxy, puremvc.Proxy);


/**
 * The name of the this Proxy.
 * 
 * @static
 * @type {string}
*/
ExternalPlaybackProxy.NAME = "PlaybackProxy";

/** @private
*/
ExternalPlaybackProxy.prototype.src = null;

/**
*/
ExternalPlaybackProxy.prototype.getPlaybackCoreName = function() {
  return "external";
};

/**
 * Determines if the core can play a given mimeType.
 * 
 * @return {String} "" if the core can't play the mimeType
*/
ExternalPlaybackProxy.prototype.canPlayType = function(mimeType) {
  return mimeType === "external";
};

/**
 *
*/
ExternalPlaybackProxy.prototype.canPlayTemporalType = function(temporalType) {
  return true;
};

/**     
 * The current time of the video in seconds. Value must be between currentTime and duration.
 * 
 * @param {Number} value
 *    The new currentTime value in seconds
 * @returns {Number} 
 *    The currentTime value in seconds
 * @type {Number}
*/
ExternalPlaybackProxy.prototype.getSrc = function() {
  return this.facade.mediaProxy.getSrc();
};

/**
 * Instructs the core to play.
*/
ExternalPlaybackProxy.prototype.play = function() {
  window.open(this.getSrc(), "_blank");
};

ExternalPlaybackProxy.prototype.load = function() {};

ExternalPlaybackProxy.prototype.setVolume = function() {};

ExternalPlaybackProxy.prototype.pause = function() {};

ExternalPlaybackProxy.prototype.setEnabled = function() {};

ExternalPlaybackProxy.prototype.getCurrentTime = function() {
  return 0;
};

ExternalPlaybackProxy.prototype.setCurrentTime = function(value) {};

ExternalPlaybackProxy.prototype.getDuration = function() {
  return 0;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var UserNotifications = {
  TOGGLE_PLAY_PAUSE: "usertogglePlayPause",
  PLAY: "userplay",
  PAUSE: "userpause",
  SEEK: "userseek",
  SEEKED: "userseeked",
  GO_LIVE: "usergolive"
};

/** 
 * The PluginProxy class.
 *   
 * @param {Object} config
 * @constructor
 * @private
 * @extends {DataBoundConfigurationProxy}
*/
function PluginProxy(config) {
  PluginProxy.__super__.constructor.call(this, config);
}


__extends(PluginProxy, DataBoundConfigurationProxy);


/** @static
*/
PluginProxy.NAME = ModuleProxy.NAME;

PluginProxy.prototype.enabled = true;

PluginProxy.prototype.plugin = null;

PluginProxy.prototype.appState = null;

/**
*/
PluginProxy.prototype.getDefaults = function() {
  var defaults;
  defaults = PluginProxy.__super__.getDefaults.call(this);
  if (!(defaults.debug != null)) {
    defaults.debug = null;
  }
  return defaults;
};

/** @override
*/
PluginProxy.prototype.initializeNotifier = function(key) {
  PluginProxy.__super__.initializeNotifier.call(this, key);
  this.appState = this.facade.player.appState;
};

/**
*/
PluginProxy.prototype.getMediaElement = function() {
  return this.facade.player.getMediaElement();
};

/**
*/
PluginProxy.prototype.setEnabled = function(value) {
  this.enabled = value;
  return value;
};

PluginProxy.prototype.getEnabled = function() {
  return this.enabled;
};

/**
*/
PluginProxy.prototype.getDebug = function() {
  if (this.value.debug != null) {
    return this.value.debug;
  } else {
    return this.facade.player.getConfig().debug === true;
  }
};

/**
*/
PluginProxy.prototype.createPlugin = function() {};

/**
*/
PluginProxy.prototype.initialize = function() {
  this.plugin = this.createPlugin();
};

/**
*/
PluginProxy.prototype.error = function(err) {
  this.facade.logger.error("[AMP " + (this.facade.getModuleName().toUpperCase()) + " Error]", err);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var Namespace = {
  PREFIX: "akamai-"
};

/**
 * The Plugin class. Acts as a base for plugins.
 *
 * @constructor
 * @private
 * @extends {Module}
*/
function Plugin() {
  Plugin.__super__.constructor.call(this);
}


__extends(Plugin, Module);


Plugin.prototype.player = null;

Plugin.prototype.proxy = null;

/**
 * @override
*/
Plugin.prototype.initialize = function(config, player) {
  this.player = player;
  this.logger = this.player.logger;
  Plugin.__super__.initialize.call(this, config, player);
};

/**
*/
Plugin.prototype.isAvailable = function() {
  return true;
};

/**
*/
Plugin.prototype.loadModuleResources = function() {
  if (!this.isAvailable()) {
    return Promise.resolve();
  }
  return Plugin.__super__.loadModuleResources.call(this);
};

/**
 * @override
*/
Plugin.prototype.resourcesLoaded = function() {
  if (typeof this.oninitialized === "function") {
    this.oninitialized(this);
  }
};

/** @override
*/
Plugin.prototype.onRegister = function() {
  var _ref;
  if (this.isAvailable()) {
    this.createFramework();
    if ((_ref = this.retrieveProxy(PluginProxy.NAME)) != null) {
      if (typeof _ref.initialize === "function") {
        _ref.initialize();
      }
    }
  }
  this.performance.ready = Date.now();
  this.sendNotification(PluginNotifications.PLUGIN_REGISTERED, this);
};

/** @override
*/
Plugin.prototype.logEvent = function(event) {
  var prefix;
  if (/(timeupdate|timeremaining)/.test(event.type) === true) {
    return;
  }
  prefix = this.player.getModuleName().toUpperCase() + " " + this.getModuleName().toUpperCase();
  if (event.dispatcher != null) {
    prefix += " " + event.dispatcher;
  }
  this.logger.log("[" + prefix + " EVENT] " + event.type, event);
};

/** @override
*/
Plugin.prototype.listNotificationPublications = function() {
  var key, notes, value;
  notes = [Notifications.ADD_LAYER, Notifications.REMOVE_LAYER, Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.IS_USER_ACTIVE, Notifications.PLAYBACK_CORE_CHANGE];
  return notes.concat((function() {
    var _results;
    _results = [];
    for (key in PluginNotifications) {
      value = PluginNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/**
 * The ChangePlayStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangePlayStateCommand() {
  ChangePlayStateCommand.__super__.constructor.call(this);
}


__extends(ChangePlayStateCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangePlayStateCommand.prototype.execute = function(notification) {
  this.applicationState.setPlayState(notification.getBody());
};

/**
 * The ChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeMediaCommand() {
  ChangeMediaCommand.__super__.constructor.call(this);
}


__extends(ChangeMediaCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeMediaCommand.prototype.execute = function(notification) {
  var media;
  try {
    media = this.media.setData(notification.getBody());
  } catch (error) {
    this.sendNotification(Notifications.ERROR, error.message);
    return;
  }
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS);
  media = this.media.getData();
  this.security.setMedia(media);
  if (this.security.getAuthorized()) {
    this.sendNotification(SecurityNotifications.AUTHORIZED, this.security.getAuthorization());
  } else {
    this.sendNotification(SecurityNotifications.AUTHORIZE, {
      media: media
    });
  }
};

/**
 * The SetMediaCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function SetMediaCommand() {
  SetMediaCommand.__super__.constructor.call(this);
}


__extends(SetMediaCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
SetMediaCommand.prototype.execute = function(notification) {
  var media,
    _this = this;
  media = notification.getBody();
  this.applicationState.setEnded(false);
  this.playback.setEnabled(false);
  this.playback.pause();
  this.tracks.clear();
  this.sendNotification(Notifications.HAS_POST_CONTENT, false);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  this.media.transform(media).then(function(result) {
    return _this.sendNotification(Notifications.CHANGE_MEDIA, result);
  })["catch"](function(error) {
    return _this.sendNotification(Notifications.ERROR, error);
  });
};

/**
 * The ChangeDurationCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeDurationCommand() {
  ChangeDurationCommand.__super__.constructor.call(this);
}


__extends(ChangeDurationCommand, PlayerCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChangeDurationCommand.prototype.execute = function(notification) {
  var duration;
  duration = notification.getBody();
  if (this.media.getDuration() === duration) {
    return;
  }
  this.media.setDuration(duration);
};

/**
 * The ErrorCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function ErrorCommand() {
  ErrorCommand.__super__.constructor.call(this);
}


__extends(ErrorCommand, PlayerEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ErrorCommand.prototype.execute = function(notification) {
  var core, error;
  this.playback.destroy();
  core = this.playback.getMediaElement();
  EventHandler.clear(core);
  error = notification.getBody();
  this.logger.error("[AMP ERROR]", error);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ERROR);
  this.facade.error = error;
  ErrorCommand.__super__.execute.call(this, notification);
};

/**
 * The ReadyCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ReadyCommand() {
  ReadyCommand.__super__.constructor.call(this);
}


__extends(ReadyCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ReadyCommand.prototype.execute = function(notification) {
  var volume, _ref;
  volume = (_ref = this.facade.config) != null ? _ref.volume : void 0;
  if (volume != null) {
    this.sendNotification(Notifications.CHANGE_VOLUME, volume);
  }
  this.playerCore.ready();
  if (this.facade.config.autoplay === true) {
    this.sendNotification(Notifications.ADD_APPLICATION_STATE, "autoplay");
  }
  this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  this.dispatchEventAfterCommand(notification);
};

/**
 * The UpdateDataBindingsCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function UpdateDataBindingsCommand() {
  UpdateDataBindingsCommand.__super__.constructor.call(this);
}


__extends(UpdateDataBindingsCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
UpdateDataBindingsCommand.prototype.execute = function(notification) {
  var body;
  body = notification.getBody() || {};
  this.bindings.compile(body.contexts, body.suppressErrors);
};

/**
 * The ChangeParamsCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function ChangeParamsCommand() {
  ChangeParamsCommand.__super__.constructor.call(this);
}


__extends(ChangeParamsCommand, PlayerCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeParamsCommand.prototype.execute = function(notification) {
  this.params.setData(notification.getBody());
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS, {
    suppressErrors: true
  });
};

/**
 * The MediaChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerEventCommand}
*/
function MediaChangeCommand() {
  MediaChangeCommand.__super__.constructor.call(this);
}


__extends(MediaChangeCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MediaChangeCommand.prototype.execute = function(notification) {
  var media;
  media = notification.getBody();
  this.playerCore.setPlaybackCore(media);
  this.playback.reset();
  this.playback.setCurrentTime(media.startTime || 0);
  MediaChangeCommand.__super__.execute.call(this, notification);
};

/**
 * The OverlayLayerMediator class.
 * 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function OverlayLayerMediator() {
  OverlayLayerMediator.__super__.constructor.call(this);
}


__extends(OverlayLayerMediator, LayerMediator);


OverlayLayerMediator.prototype.componentName = "overlays";

OverlayLayerMediator.NAME = "OverlayLayerMediator";

/**
*/
OverlayLayerMediator.prototype.createMediatorName = function() {
  return OverlayLayerMediator.NAME;
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 * 
 * @override
*/
OverlayLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ADD_OVERLAY, Notifications.REMOVE_OVERLAY];
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
 * 
 * @param note An INotification
 * @override
*/
OverlayLayerMediator.prototype.handleNotification = function(notification) {
  var name, overlay;
  name = notification.getName();
  overlay = notification.getBody();
  switch (name) {
    case Notifications.ADD_OVERLAY:
      this.viewComponent.appendChild(overlay);
      break;
    case Notifications.REMOVE_OVERLAY:
      this.viewComponent.removeChild(overlay);
  }
};

/**
 * @constructor
 * @private
*/
function PluginAdapter() {
  this.plugins = [];
  this.registered = 0;
  PluginAdapter.__super__.constructor.call(this, this.constructor.NAME, {});
}


__extends(PluginAdapter, puremvc.Mediator);


PluginAdapter.NAME = "PluginAdapter";

PluginAdapter.prototype.plugins = null;

PluginAdapter.prototype.registered = null;

/**
 * Registers the appropriate pipes and listeners when
 * this class is registered
 *
 * @override
*/
PluginAdapter.prototype.onRegister = function() {
  return PluginAdapter.__super__.onRegister.call(this);
};

/**
 * Overridden so this class may subscribe to all notifications
 * @return An Array
 *
 * @override
*/
PluginAdapter.prototype.listNotificationInterests = function() {
  return [PluginNotifications.REGISTER_PLUGINS, PluginNotifications.PLUGIN_REGISTERED];
};

/**
 * Handles notifications of interest to this mediator. Note that
 * the default declaration is to allow the super to handle the
 * note. This leaves the base JunctionMediator to handle things
 * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE
 *
 * @param note An INotification
 * @override
*/
PluginAdapter.prototype.handleNotification = function(notification) {
  var body, config, def, init, initialize, key, name, plugin, plugins, type, value, _ref,
    _this = this;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case PluginNotifications.REGISTER_PLUGINS:
      type = this.facade.getPlayerType();
      config = body;
      _ref = AMP.plugins;
      for (key in _ref) {
        value = _ref[key];
        if (!(key in config)) {
          continue;
        }
        init = config[key];
        if (!(init != null) || init.enabled === false) {
          continue;
        }
        def = value[type];
        if (!(def != null)) {
          this.facade.logger.debug("[AMP] Plugin could not be found: " + key);
          continue;
        }
        try {
          plugin = new def();
          plugin.oninitialized = this.onplugininitialized.bind(this, key);
          plugin.onerror = this.onpluginerror.bind(this, key);
          initialize = plugin.initialize.bind(plugin, init, this.facade);
          this.plugins.push(initialize);
        } catch (error) {
          this.logger.error("[AMP] Plugin could not be created: " + key + ". " + error);
          continue;
        }
      }
      plugins = config.plugins || {};
      for (key in plugins) {
        init = plugins[key];
        if (!((init != null) && init.enabled !== false)) {
          continue;
        }
        initialize = function(player, config, key, resolve, reject) {
          return _this.facade.loadResources(config.resources).then(function() {
            def = AMP.plugins[key][type];
            if (!(def != null)) {
              reject("[AMP] Plugin could not be found: " + key);
            }
            return def(player, config, key);
          }).then(resolve)["catch"](reject);
        };
        this.plugins.push(initialize.bind(null, this.facade, init, key, this.onpluginregistered.bind(this, key), this.onpluginerror.bind(this, key)));
      }
      this.plugins.forEach(function(item) {
        return item();
      });
      break;
    case PluginNotifications.PLUGIN_REGISTERED:
      this.onpluginregistered(body.getModuleName(), body);
  }
};

PluginAdapter.prototype.initializedCheck = function() {
  if (this.registered === this.plugins.length) {
    this.sendNotification(PluginNotifications.PLUGINS_INITIALIZED, this.plugins);
  }
};

PluginAdapter.prototype.onplugininitialized = function(key, plugin) {
  plugin.oninitialized = null;
  plugin.onerror = null;
  this.facade.registerModule(plugin);
};

PluginAdapter.prototype.onpluginerror = function(key, error) {
  this.registered++;
  this.facade.logger.error("[AMP] Plugin could not be registered: " + key);
  this.facade.logger.error(error);
  this.initializedCheck();
};

PluginAdapter.prototype.onpluginregistered = function(key, plugin) {
  var feature;
  this.registered++;
  this.facade.logger.debug("[AMP] Plugin registered: " + key);
  this.facade[key] = plugin;
  feature = (typeof plugin.getFeatureName === "function" ? plugin.getFeatureName() : void 0) || plugin.feature;
  if (feature != null) {
    this.facade[feature] = plugin;
  }
  this.initializedCheck();
};

/**
 * The ClassList class.
 * 
 * @param {!DOMElement}  element
 *    The DOM Element
 *
 * @constructor
*/
function ClassList(element) {
  this.element = element;
}

ClassList.prototype.element = null;

ClassList.prototype.prefix = Namespace.PREFIX;

/**
*/
ClassList.prototype.contains = function(className) {
  return this.constructor.contains(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.add = function(className) {
  this.constructor.add(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.remove = function(className) {
  this.constructor.remove(className, this.element, this.prefix);
};

/**
*/
ClassList.prototype.toggle = function(className) {
  return this.constructor.contains(className, this.element, this.prefix);
};

/**
*/
ClassList.contains = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.contains : void 0) != null) {
    return element.classList.contains(css);
  } else {
    return element.className.indexOf(css) !== -1;
  }
};

/**
*/
ClassList.add = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.add : void 0) != null) {
    element.classList.add(css);
  } else {
    if (!this.contains(className, element)) {
      if (element.className !== "") {
        element.className += " " + css;
      } else {
        element.className = css;
      }
    }
  }
};

/**
*/
ClassList.remove = function(className, element, prefix) {
  var css, regexp, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.remove : void 0) != null) {
    element.classList.remove(css);
  } else {
    if (this.contains(className, element)) {
      regexp = new RegExp(" ?" + css);
      element.className = element.className.replace(regexp, "");
    }
  }
};

/**
*/
ClassList.toggle = function(className, element, prefix) {
  var css, _ref;
  if (prefix == null) {
    prefix = "";
  }
  css = prefix + className;
  if (((_ref = element.classList) != null ? _ref.toggle : void 0) != null) {
    element.classList.toggle(this.prefix + className);
  } else {
    if (this.contains(className, element)) {
      this.remome(className, element);
    } else {
      this.add(className, element);
    }
  }
};

/**
 * The LocalizationProxy class. Used to track player localization settings.
 *
 * @constructor
 * @private
 * @extends {DataBindingContext}
 * @param {Object}  init  The configuration object.
*/
function LocalizationProxy(init) {
  var key, lang;
  LocalizationProxy.__super__.constructor.call(this);
  this.data = {
    language: navigator.language || navigator.browserLanguage,
    locales: Config.defaults.locales
  };
  if (init != null) {
    if (init.language != null) {
      this.data.language = init.language;
    }
    if (init.locales != null) {
      for (lang in init.locales) {
        if (this.data.locales[lang] != null) {
          for (key in init.locales[lang]) {
            this.data.locales[lang][key] = init.locales[lang][key];
          }
        } else {
          this.data.locales[lang] = init.locales[lang];
        }
      }
    }
  }
}


__extends(LocalizationProxy, DataBindingContext);


/** @static
*/
LocalizationProxy.NAME = "LocalizationProxy";

LocalizationProxy.prototype.contextName = "l10n";

LocalizationProxy.prototype.locale = null;

LocalizationProxy.prototype.localeId = null;

/** @override
*/
LocalizationProxy.prototype.onRegister = function() {
  LocalizationProxy.__super__.onRegister.call(this);
  this.setLocale(this.data.language);
};

/**
 * Gets the context data for this proxy.
 *
 * @returns {Object} The contenxt data for this proxy
 * @override
*/
LocalizationProxy.prototype.getContextData = function() {
  return this.locale;
};

/**
 *
*/
LocalizationProxy.prototype.getLanguage = function() {
  return this.data.language;
};

LocalizationProxy.prototype.setLanguage = function(value) {
  var _this = this;
  this.setLocale(value).then(function() {
    _this.data.language = value;
    _this.sendNotification(Notifications.LANGUAGE_CHANGE, value);
  });
  return value;
};

/**
 *
*/
LocalizationProxy.prototype.setLocale = function(value) {
  var _this = this;
  return new Promise(function(resolve, reject) {
    var complete, locale, localeId;
    complete = function() {
      _this.localeId = localeId;
      _this.locale = _this.facade.l10n = _this.data.locales[localeId];
      resolve();
    };
    localeId = value;
    locale = _this.data.locales[localeId];
    if (!(locale != null)) {
      localeId = value.substring(0, 2);
      locale = _this.data.locales[localeId];
    }
    if (typeof locale === "string") {
      return AMP.addResource({
        src: _this.facade.evaluatePaths(locale),
        type: Utils.mimeTypes.json
      }).then(function(resource) {
        _this.data.locales[localeId] = resource.data;
        return complete();
      });
    } else {
      return complete();
    }
  });
};

LocalizationProxy.prototype.getLocaleId = function() {
  return this.localeId;
};

/**
 *
*/
LocalizationProxy.prototype.getLocales = function() {
  return this.data.locales;
};

LocalizationProxy.prototype.setLocales = function(value) {
  this.data.locales = value;
  return value;
};

/**
 *
*/
LocalizationProxy.prototype.getString = function(key) {
  var locale;
  try {
    locale = this.locale || this.data.locales.en;
    return locale[key] || "";
  } catch (error) {
    return "";
  }
};

/**
 * Retrieves the full language name in the player's current language setting.
 *
 * @param   {string}  lang  The language code.
 * @return  {string}        The full name of the language according to the player's current language setting.
*/
LocalizationProxy.prototype.getLanguageString = function(lang) {
  var key, str;
  if (typeof lang !== "string" || !(lang != null) || lang === "") {
    return "";
  }
  key = "MSG_" + (lang.toUpperCase());
  str = this.getString(key);
  if (str === "") {
    lang = lang.split("-").shift();
    key = "MSG_" + (lang.toUpperCase());
    str = this.getString(key);
  }
  return str;
};

function UI() {}

/**
 * Creates an HTML element.
 * 
 * @param   {?(string|Array.<string>)}  type
 * @param   {?DOMElement}  parent 
 * @param   {?string|DOMElement}  element
 * @param   {?string} text
 * @return  {DOMElement}
*/
UI.create = function(type, parent, element, text) {
  var classList, item, viewComponent, _i, _len;
  if (element == null) {
    element = "div";
  }
  if (typeof element === "string") {
    element = document.createElement(element);
  }
  classList = new ClassList(element);
  if (type != null) {
    if (typeof type === "string") {
      type = [type];
    }
    for (_i = 0, _len = type.length; _i < _len; _i++) {
      item = type[_i];
      classList.add(item);
    }
  }
  element._classList = classList;
  if (text != null) {
    if (element.innerText != null) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }
  if (parent != null) {
    if (parent.getViewComponent != null) {
      viewComponent = parent.getViewComponent();
    }
    if (viewComponent != null) {
      parent = viewComponent;
    }
    parent.appendChild(element);
  }
  return element;
};

/** 
 * Binds a mediators event handlers to an element.
 * 
 * @param {!DOMElement} element
 * @param {!mediator} mediator
*/
UI.bindEvents = function(element, handlers, exceptions) {
  var key, value;
  if (exceptions == null) {
    exceptions = ["onRemove", "onRegister"];
  }
  for (key in handlers) {
    value = handlers[key];
    if (!(__indexOf.call(exceptions, key) >= 0) && /^on/.test(key) && ((value != null ? value.bind : void 0) != null)) {
      element[key] = value.bind(handlers);
    }
  }
};

/**
 * Creates a unique id.
 *
 * @param   {number=}   base
 *    The base to use for representing a numeric value. 
 * 
 * @return  {string}
 *    The unique id.
*/
UI.createUID = function(base) {
  var date, len, max, rand;
  if (base == null) {
    base = 16;
  }
  date = Date.now();
  len = 2;
  max = base * len - 1;
  rand = Math.round(Math.random() * max + base);
  return (rand.toString(16) + date.toString(16)).toUpperCase();
};

/**
 * The ExternalPlayCommand class.
 * 
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function ExternalPlayCommand() {
  ExternalPlayCommand.__super__.constructor.call(this);
}


__extends(ExternalPlayCommand, PlayerEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ExternalPlayCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.PLAY_REQUEST);
  this.playback.play();
  ExternalPlayCommand.__super__.execute.call(this, notification);
};

/** 
 * The ExternalPlayer class.
 *   
 * @constructor
 * @private 
 * @extends {Player}
 * @param {Object} config
 * @param {Object} viewComponent
 * @param {EventDispatcher} dispatcher
*/
function ExternalPlayer(config, viewComponent, dispatcher) {
  ExternalPlayer.__super__.constructor.call(this, config, viewComponent, dispatcher);
}


__extends(ExternalPlayer, Player);


ExternalPlayer.prototype.playerType = "external";

/** @override
*/
ExternalPlayer.prototype.createModel = function() {
  var playbackProxy;
  ExternalPlayer.__super__.createModel.call(this);
  this.registerProxy(new LocalizationProxy(this.config));
  playbackProxy = new ExternalPlaybackProxy();
  this.registerProxy(playbackProxy);
  this.playerCore = new PlayerProxy(playbackProxy);
  this.registerProxy(this.playerCore);
  this.bindings.initialize();
};

/** @override
*/
ExternalPlayer.prototype.createView = function() {
  var overlay,
    _this = this;
  this.registerMediator(new PlayerMediator("external", this.getViewComponent()));
  this.registerMediator(new PluginAdapter());
  overlay = new OverlayLayerMediator();
  this.registerMediator(overlay);
  EventHandler.create(overlay.viewComponent, EventHandler.CLICK, function() {
    return _this.sendNotification(Notifications.TOGGLE_ACTIVE);
  });
};

/** @override
*/
ExternalPlayer.prototype.createController = function() {
  ExternalPlayer.__super__.createController.call(this);
  this.registerCommand(Notifications.UPDATE_DATA_BINDINGS, UpdateDataBindingsCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ExternalPlayCommand);
  this.registerCommand(Notifications.PLAY, ExternalPlayCommand);
  this.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
  this.registerCommand(Notifications.SET_MEDIA, SetMediaCommand);
  this.registerCommand(Notifications.CHANGE_MEDIA, ChangeMediaCommand);
  this.registerCommand(Notifications.MEDIA_CHANGE, MediaChangeCommand);
  this.registerCommand(Notifications.MEDIA_VALIDATED, MediaValidatedCommand);
  this.registerCommand(Notifications.ERROR, ErrorCommand);
  this.registerCommand(PluginNotifications.PLUGINS_INITIALIZED, PluginsInitializedCommand);
  this.registerCommand(Notifications.READY, ReadyCommand);
  this.registerCommand(Notifications.CHANGE_PARAMS, ChangeParamsCommand);
};

/** @override
*/
ExternalPlayer.prototype.createMediaElement = function() {
  return document.createElement("div");
};

ExternalPlayer.prototype.evaluateBinding = function(str) {
  var _ref;
  return (_ref = this.retrieveProxy(DataBindingProxy.NAME)) != null ? _ref.evaluateBinding(str) : void 0;
};

ExternalPlayer.prototype.canPlayType = function(mimeType) {
  return "maybe";
};

ExternalPlayer.prototype.play = function() {
  this.sendNotification(Notifications.PLAY);
};

ExternalPlayer.prototype.setParams = function(value) {
  this.sendNotification(Notifications.CHANGE_PARAMS, value);
  return value;
};

ExternalPlayer.prototype.getParams = function() {
  return this.retrieveProxy(ParamsProxy.NAME).getData();
};

ExternalPlayer.prototype.setAutoplay = function(value) {
  return false;
};

ExternalPlayer.prototype.getAutoplay = function() {
  return false;
};

ExternalPlayer.prototype.setLoop = function(value) {
  return false;
};

ExternalPlayer.prototype.getLoop = function() {
  return false;
};

ExternalPlayer.prototype.setMuted = function(value) {
  return false;
};

ExternalPlayer.prototype.getMuted = function() {
  return false;
};

ExternalPlayer.prototype.setMedia = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, value);
  return value;
};

ExternalPlayer.prototype.getMedia = function(value) {
  var _ref;
  return (_ref = this.retrieveProxy(MediaProxy.NAME)) != null ? _ref.getData() : void 0;
};

ExternalPlayer.prototype.setCurrentTime = function(value) {
  return 0;
};

ExternalPlayer.prototype.getCurrentTime = function(value) {
  return 0;
};

ExternalPlayer.prototype.getDuration = function(value) {
  return this.retrieveProxy(MediaProxy.NAME).getDuration();
};

ExternalPlayer.prototype.setSrc = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, {
    src: value
  });
  return value;
};

ExternalPlayer.prototype.getSrc = function(value) {
  return this.retrieveProxy(MediaProxy.NAME).getSrc();
};

ExternalPlayer.prototype.setSource = function(value) {
  this.sendNotification(Notifications.SET_MEDIA, {
    source: value
  });
  return value;
};

ExternalPlayer.prototype.getSource = function() {
  return this.retrieveProxy(MediaProxy.NAME).getSource();
};

ExternalPlayer.prototype.setVolume = function(value) {
  return value;
};

ExternalPlayer.prototype.getVolume = function(value) {
  return 1;
};

ExternalPlayer.prototype.getSeeking = function() {
  return false;
};

ExternalPlayer.prototype.getPaused = function() {
  return false;
};

ExternalPlayer.prototype.getEnded = function() {
  return false;
};

/**
 * Event constructor.
 *
 * @param {!string}  type  A string representing the event's type.
 * @param {Object=} detail  Data to pass along with the event.
 * @constructor
 * @private
*/
function Event(type, detail) {
  this.type = type;
  if (detail != null) {
    this.detail = this.data = detail;
  }
}

/**
 * The event's type.
 * 
 * @type {string}
*/
Event.prototype.type = null;

/**
 * The event's target
 * 
 * @type {Object}
*/
Event.prototype.target = null;

/**
 * Collection of event specific details.
 * 
 * @type {Object}
*/
Event.prototype.detail = null;

function Logger(enabled) {
  this.enabled = enabled;
  if (!this.enabled) {
    this.log = this.trace = this.debug = this.info = this.warn = this.error = this.fatal = function() {};
  }
}

Logger.prototype.log = function() {
  try {
    if (arguments.length > 1 && (arguments[1] != null)) {
      console.log.apply(console, arguments);
    } else {
      console.log(arguments[0]);
    }
  } catch (error) {

  }
};

Logger.prototype.trace = function() {
  try {
    console.trace.apply(console, arguments);
  } catch (error) {

  }
};

Logger.prototype.debug = function() {
  try {
    console.log.apply(console, arguments);
  } catch (error) {
    this.log.apply(this, arguments);
  }
};

Logger.prototype.info = function() {
  try {
    console.info.apply(console, arguments);
  } catch (error) {

  }
};

Logger.prototype.warn = function() {
  try {
    console.warn.apply(console, arguments);
  } catch (error) {

  }
};

Logger.prototype.error = function() {
  try {
    console.error.apply(console, arguments);
  } catch (error) {
    this.log.apply(this, arguments);
  }
};

Logger.prototype.fatal = function() {
  try {
    console.fatal.apply(console, arguments);
  } catch (error) {

  }
};

function FeedVO() {
  this.item = [];
  this.metadata = {};
}

FeedVO.prototype.title = null;

FeedVO.prototype.link = null;

FeedVO.prototype.description = null;

FeedVO.prototype.category = null;

FeedVO.prototype.pubDate = null;

FeedVO.prototype.language = null;

FeedVO.prototype.ttl = null;

FeedVO.prototype.item = null;

FeedVO.prototype.metadata = null;

function Resource() {
  this.metadata = {};
}

/**
 * The resource url.
 *
 * @type {String}
*/
Resource.prototype.src = null;

/**
 * The resource url to use in debug mode.
 *
 * @type {String}
*/
Resource.prototype.debug = null;

/**
 * The mime type.
 *
 * @type {String}
*/
Resource.prototype.type = null;

/**
 * @type {Object}
*/
Resource.prototype.metadata = null;

/**
 * @enum {string}
 * @const
*/

var PlaybackMode = {
  /**
   *
  */

  AUTO: "auto",
  /**
   *
  */

  HTML: "html",
  /**
   *
  */

  FLASH: "flash",
  /**
   *
  */

  EXTERNAL: "external",
  /**
   *
  */

  NONE: "none",
  /**
   *
  */

  HTML_AUTO: "html-auto"
};

function MediaVO() {
  return MediaVO.__super__.constructor.apply(this, arguments);
}


__extends(MediaVO, Resource);


MediaVO.prototype.source = null;

MediaVO.prototype.title = null;

MediaVO.prototype.description = null;

MediaVO.prototype.link = null;

MediaVO.prototype.guid = null;

MediaVO.prototype.pubDate = null;

MediaVO.prototype.poster = null;

MediaVO.prototype.thumbnail = null;

MediaVO.prototype.embed = null;

MediaVO.prototype.category = null;

MediaVO.prototype.type = null;

MediaVO.prototype.medium = null;

MediaVO.prototype.duration = null;

MediaVO.prototype.track = null;

MediaVO.prototype.metadata = null;

MediaVO.prototype.scenes = null;

MediaVO.prototype.startTime = null;

/**
 * @constructor
 * @private
*/
function MRSSHelper() {}

/**
*/
MRSSHelper.prototype.getFeed = function(url) {
  return Utils.getFeed(url);
};

/**
*/
MRSSHelper.prototype.getMediaNode = function(item, name, checkItem) {
  var base, mediaContent, mediaName, node;
  if (checkItem == null) {
    checkItem = true;
  }
  mediaName = "media-" + name;
  base = item['media-group'] || item;
  mediaContent = base['media-content'];
  if ((mediaContent != null) && (mediaContent[mediaName] != null)) {
    node = mediaContent[mediaName];
  } else if (base[mediaName] != null) {
    node = base[mediaName];
  } else if (item[mediaName] != null) {
    node = item[mediaName];
  } else if ((item[name] != null) && checkItem) {
    node = item[name];
  }
  return node;
};

MRSSHelper.prototype.createEmbed = function(item) {
  var embed, embedVO, param, _i, _len, _ref;
  try {
    embed = this.getMediaNode(item, "embed");
    if (!(embed != null)) {
      return embedVO;
    }
    embedVO = {};
    embedVO.url = embed["@attributes"].url;
    embedVO.width = embed["@attributes"].width;
    embedVO.height = embed["@attributes"].height;
    embedVO.params = {};
    if (!(embed["media-param"] instanceof Array)) {
      embed["media-param"] = [embed["media-param"]];
    }
    _ref = embed["media-param"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      embedVO.params[param["@attributes"].name] = param["#text"];
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] embed parse error: " + error.message, error);
  }
  return embedVO;
};

/**
*/
MRSSHelper.prototype.createFeed = function(json) {
  var channel, feedVO, item, items, key, mediaVO, value, _i, _len;
  try {
    channel = json.channel;
    feedVO = new FeedVO();
    if (channel != null) {
      feedVO.title = channel.title;
      feedVO.description = channel.description;
      feedVO.language = channel.language;
      feedVO.category = channel.category;
      feedVO.pubDate = new Date(Date.parse(channel.pubDate));
      feedVO.ttl = channel.ttl;
      items = channel.item instanceof Array ? channel.item : [channel.item];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        mediaVO = this.createMedia(item);
        feedVO.item.push(mediaVO);
      }
      for (key in channel) {
        value = channel[key];
        if (!(key in feedVO)) {
          feedVO.metadata[key] = value;
        }
      }
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] feed parse error: " + error.message, error);
  }
  return feedVO;
};

/**
*/
MRSSHelper.prototype.createMedia = function(item) {
  var atts, category, content, key, label, mediaContent, mediaVO, node, source, track, value, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2;
  try {
    mediaVO = new MediaVO();
    mediaContent = this.getMediaNode(item, 'content');
    if (mediaContent instanceof Array) {
      mediaVO.source = [];
      for (_i = 0, _len = mediaContent.length; _i < _len; _i++) {
        content = mediaContent[_i];
        source = {
          src: content['@attributes'].url,
          type: content['@attributes'].type
        };
        category = content["media-category"];
        if (category != null) {
          atts = category["@attributes"];
          if (atts.schema === "http://mrss.akamai.com/user_agent_hint") {
            label = atts.label || category["#text"];
            if ((label != null) && label !== "") {
              if (source.rules == null) {
                source.rules = [];
              }
              source.rules.push(label);
            }
          }
        }
        mediaVO.source.push(source);
        mediaVO.medium = content['@attributes'].medium;
        mediaVO.duration = parseFloat(content['@attributes'].duration);
      }
    } else {
      mediaVO.type = mediaContent['@attributes'].type;
      mediaVO.src = mediaContent['@attributes'].url;
      mediaVO.medium = mediaContent['@attributes'].medium;
      mediaVO.duration = parseFloat(mediaContent['@attributes'].duration);
    }
    mediaVO.guid = item.guid;
    mediaVO.title = this.getMediaNode(item, "title");
    mediaVO.link = item.link;
    mediaVO.description = this.getMediaNode(item, "description");
    mediaVO.pubDate = new Date(Date.parse(item.pubDate));
    mediaVO.thumbnail = mediaVO.poster = (_ref = this.getMediaNode(item, 'thumbnail')) != null ? (_ref1 = _ref['@attributes']) != null ? _ref1.url : void 0 : void 0;
    mediaVO.embed = this.createEmbed(item);
    mediaVO.scenes = (_ref2 = this.getMediaNode(item, "scenes")) != null ? _ref2['media-scene'] : void 0;
    node = this.getMediaNode(item, "status", false);
    if (node != null) {
      mediaVO.status = {
        state: node['@attributes'].state,
        reason: node['@attributes'].reason
      };
    }
    mediaVO.category = item.category;
    if (!(mediaVO.category instanceof Array)) {
      mediaVO.category = [mediaVO.category];
    }
    node = this.getMediaNode(item, "category", false);
    if (node != null) {
      for (_j = 0, _len1 = node.length; _j < _len1; _j++) {
        category = node[_j];
        if ((category["#text"] != null) && category["#text"] !== "") {
          mediaVO.category.push(category["#text"]);
        }
      }
    }
    if (mediaVO.category != null) {
      mediaVO.category.sort(function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    node = this.getMediaNode(item, "subTitle");
    if (node != null) {
      if (mediaVO.track == null) {
        mediaVO.track = [];
      }
      if (!(node instanceof Array)) {
        node = [node];
      }
      for (_k = 0, _len2 = node.length; _k < _len2; _k++) {
        track = node[_k];
        if (track["@attributes"] != null) {
          mediaVO.track.push({
            src: track["@attributes"].href,
            type: track["@attributes"].type,
            kind: "captions",
            srclang: track["@attributes"].lang || "en"
          });
        }
      }
    }
    category = item.category;
    if (!(category instanceof Array)) {
      category = [category];
    }
    mediaVO.isLive = item.temporalType === "live" || ((category != null) && category.join(",").indexOf("live_stream") !== -1);
    mediaVO.temporalType = mediaVO.isLive ? "live" : "vod";
    for (key in item) {
      value = item[key];
      if (!(key in mediaVO)) {
        mediaVO.metadata[key] = value;
      }
    }
  } catch (error) {
    Logger.error("[AMP Feed Parse Error] media parse error: " + error.message, error);
  }
  return mediaVO;
};

/**
 * Poller class
 *
 * @constructor
 * @private
 * @extends {EventDispatcher}
 * @param {string} url
 * @param {number} interval
 * @param {string} type
 * @param {Object} headers
*/
function Poller(url, interval, type, headers) {
  this.url = url;
  this.interval = interval != null ? interval : 10000;
  this.type = type != null ? type : null;
  this.headers = headers != null ? headers : null;
  Poller.__super__.constructor.call(this);
}


__extends(Poller, EventDispatcher);


Poller.prototype.timeout = null;

Poller.prototype.interval = null;

Poller.prototype.url = null;

Poller.prototype.lastModified = null;

Poller.prototype.contentLenght = null;

Poller.prototype.data = null;

Poller.prototype.text = null;

Poller.prototype.type = null;

Poller.prototype.headers = null;

Poller.prototype.useHeadRequest = true;

Poller.prototype.xhr = null;

/**
*/
Poller.prototype.start = function() {
  if ((this.url != null) && this.url !== "") {
    this.poll();
  }
};

/**
*/
Poller.prototype.poll = function() {
  var xhr,
    _this = this;
  xhr = Utils.getXHR();
  if (!this.useHeadRequest) {
    this.updateData();
  } else {
    xhr.onload = function(event) {
      var contentLength, lastModified;
      if (xhr.status === 304) {
        _this.invoke();
        return;
      }
      lastModified = xhr.getResponseHeader("Last-Modified");
      contentLength = xhr.getResponseHeader("Content-Length");
      if ((!(lastModified != null) && !(contentLength != null)) || ((lastModified != null) && lastModified !== _this.lastModified) || ((contentLength != null) && contentLength !== _this.contentLength)) {
        _this.lastModified = lastModified;
        _this.contentLength = contentLength;
        _this.updateData();
      } else {
        _this.invoke();
      }
    };
    xhr.onerror = function(event) {
      _this.error(event);
    };
    xhr.open("HEAD", Utils.cacheBust(this.url), false);
    this.applyHeaders();
    if (this.lastModified != null) {
      xhr.setRequestHeader("If-Modified-Since", this.lastModified);
    }
    xhr.send();
  }
};

/**
*/
Poller.prototype.applyHeaders = function() {
  if (!(this.headers != null)) {
    return;
  }
  this.xhr.setRequestHeaders(this.headers);
};

/**
*/
Poller.prototype.updateData = function() {
  var xhr,
    _this = this;
  xhr = Utils.getXHR();
  xhr.open("GET", Utils.cacheBust(this.url), true);
  xhr.onload = function(event) {
    var text;
    text = xhr.responseText;
    _this.setText(text);
    _this.invoke();
  };
  xhr.onerror = function(event) {
    _this.error(event);
  };
  this.applyHeaders();
  return xhr.send();
};

/**
*/
Poller.prototype.setText = function(value) {
  var data;
  if (value !== this.text) {
    this.text = value;
    data = this.text;
    if (this.type === Utils.mimeTypes.json) {
      try {
        data = this.xhr.response;
      } catch (error) {
        data = this.text;
      }
    }
    this.setData(data);
  }
  return value;
};

/**
*/
Poller.prototype.setData = function(value) {
  if (value !== this.data) {
    this.data = value;
    this.dispatchEvent(new Event("datachange", this.data));
  }
  return value;
};

/**
*/
Poller.prototype.error = function(error) {
  Logger.error(event);
  this.stop();
};

/**
*/
Poller.prototype.invoke = function() {
  var _this = this;
  this.stop();
  this.timeout = setTimeout(function() {
    _this.poll();
  }, this.interval);
};

/**
*/
Poller.prototype.stop = function() {
  clearTimeout(this.timeout);
};

/**
 * @constructor
 * @private
 * @extends {EventDispatcher}
*/
function XHR() {
  XHR.__super__.constructor.call(this);
}


__extends(XHR, EventDispatcher);


XHR.prototype.xhr = null;

XHR.prototype.headers = null;

XHR.prototype.response = null;

XHR.prototype.responseXML = null;

XHR.prototype.responseText = null;

XHR.prototype.responseType = null;

XHR.prototype.withCredentials = false;

XHR.prototype.readyState = 0;

XHR.prototype.status = null;

XHR.prototype.open = function(method, url) {
  var xdr, xhr,
    _this = this;
  try {
    xhr = new XMLHttpRequest();
  } catch (error) {
    xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
  }
  if (XHR.isCORS(url)) {
    if (Object.prototype.hasOwnProperty.call(xhr, "withCredentials")) {
      try {
        xhr.withCredentials = this.withCredentials;
      } catch (error) {
        Logger.warn("[AMP XHR WARNING]", "withCredentials not properly supported in this browser.", error);
      }
    } else if (typeof XDomainRequest !== "undefined") {
      xdr = true;
      xhr = new XDomainRequest();
    }
  }
  if (xhr != null) {
    if (xdr) {
      xhr.onprogress = function() {};
      xhr.ontimeout = function() {};
      xhr.onerror = function() {};
      xhr.onload = function(event) {
        if (typeof xhr.onreadystatechange === 'function') {
          xhr.readyState = 4;
          xhr.status = 200;
          if (xhr.contentType.match(/\/xml/)) {
            xhr.responseXML = new ActiveXObject('Microsoft.XMLDOM');
            xhr.responseXML.async = false;
            xhr.responseXML.loadXML(xhr.responseText);
          }
          xhr.onreadystatechange.call(xhr, event, false);
        }
      };
    }
    xhr.onreadystatechange = function(event) {
      var _ref, _ref1;
      _this.readyState = xhr.readyState;
      _this.dispatchEvent(new Event("readystatechange", xhr));
      if (xhr.readyState === 4) {
        _this.status = xhr.status;
        if ((199 < (_ref = _this.status) && _ref < 400) || _this.status === 0) {
          if (xhr.responseText == null) {
            xhr.responseText = xhr.text;
          }
          _this.responseText = xhr.responseText;
          if ((xhr.responseXML != null) && ((_ref1 = xhr.responseXML.childNodes) != null ? _ref1.length : void 0) > 0) {
            _this.response = _this.responseXML = xhr.responseXML;
            _this.responseType = "document";
          } else {
            try {
              _this.response = JSON.parse(xhr.responseText);
              _this.responseType = "json";
            } catch (error) {
              _this.response = xhr.responseText;
              _this.responseType = "text";
            }
          }
          _this.dispatchEvent(new Event("load", _this));
        } else {
          if (_this.status !== 0) {
            _this.dispatchEvent(new Event("error", _this));
          }
        }
      }
    };
    try {
      if (typeof xhr.onerror !== "undefined") {
        xhr.onerror = function(event) {
          _this.dispatchEvent(new Event("error", _this));
        };
      }
    } catch (error) {

    }
    xhr.open(method, url);
  }
  this.xhr = xhr;
};

XHR.prototype.send = function(data) {
  var key, value, _ref,
    _this = this;
  if (this.headers != null) {
    _ref = this.headers;
    for (key in _ref) {
      value = _ref[key];
      if ((key != null) && (value != null)) {
        this.xhr.setRequestHeader(key, value);
      }
    }
  }
  setTimeout(function() {
    _this.xhr.send(data);
  }, 0);
};

XHR.prototype.setRequestHeader = function(key, value) {
  if (!(key != null) || !(value != null)) {
    return;
  }
  if (this.headers == null) {
    this.headers = {};
  }
  this.headers[key] = value;
};

XHR.prototype.setRequestHeaders = function(headers) {
  this.headers = headers;
  return headers;
};

XHR.prototype.getResponseHeader = function(name) {
  var _ref;
  return (_ref = this.xhr) != null ? typeof _ref.getResponseHeader === "function" ? _ref.getResponseHeader(name) : void 0 : void 0;
};

XHR.prototype.getAllResponseHeaders = function() {
  var _ref;
  return (_ref = this.xhr) != null ? typeof _ref.getAllResponseHeaders === "function" ? _ref.getAllResponseHeaders() : void 0 : void 0;
};

XHR.isCORS = function(url) {
  var hostname, parser, port, protocol;
  parser = document.createElement('a');
  parser.href = url;
  hostname = parser.hostname !== "" ? parser.hostname : location.hostname;
  port = parser.port !== "0" ? parser.port : location.port;
  protocol = parser.protocol !== ":" ? parser.protocol : location.protocol;
  return location.protocol !== protocol || location.hostname !== hostname || location.port !== port && !(location.port === "" && port === "80");
};

/**
 * Constructs a new Timer object with the specified delay and repeatCount states.
*/
function Timer(delay, repeatCount) {
  var _this = this;
  this.delay = delay;
  this.repeatCount = repeatCount != null ? repeatCount : 0;
  Timer.__super__.constructor.call(this);
  this._running = false;
  this._currentCount = 0;
  this._timeout = null;
  this._startTime = null;
  this._currentTime = 0;
  this.tick = this.tick.bind(this);
  this.next = setTimeout.bind(null, this.tick, this.delay);
  Object.defineProperties(this, {
    currentCount: {
      get: function() {
        return _this._currentCount;
      },
      enumerable: true,
      configurable: false
    },
    running: {
      get: function() {
        return _this._running;
      },
      enumerable: true,
      configurable: false
    },
    time: {
      get: function() {
        return _this._currentTime + (Date.now() - _this._startTime);
      },
      enumerable: true,
      configurable: false
    }
  });
}


__extends(Timer, EventDispatcher);


/**
 * Stops the timer, if it is running, and sets the currentCount property back to 0, like the reset button of a stopwatch.
*/
Timer.prototype.reset = function() {
  this.stop();
  this._currentCount = 0;
  this._currentTime = 0;
  this._startTime = null;
};

/**
 * Starts the timer, if it is not already running.
*/
Timer.prototype.start = function() {
  var delay;
  if (this._running === true) {
    return;
  }
  delay = this.delay - (this._currentTime - (this.delay * this._currentCount));
  this._running = true;
  this._timeout = setTimeout(this.tick, delay);
};

/**
 * Stops the timer.
*/
Timer.prototype.stop = function() {
  if (this._running === false) {
    return;
  }
  clearTimeout(this._timeout);
  this._currentTime += Date.now() - this._startTime;
  this._timeout = null;
  this._running = false;
};

/**
 *
*/
Timer.prototype.tick = function() {
  var complete;
  clearTimeout(this._timeout);
  complete = this.repeatCount !== 0 && this._currentCount >= this.repeatCount;
  this._currentCount++;
  this._currentTime += this.delay;
  this._startTime = Date.now();
  if (complete === false) {
    this._timeout = this.next();
  }
  this.dispatchEvent(new Event("timer", this));
  if (complete === true) {
    this.stop();
    this.dispatchEvent(new Event("complete", this));
  }
};

function Utils() {}

Utils.blankImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI2QkJDQTBCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI2QkJDQTFCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODg4NjdFQkIzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODg4NjdFQ0IzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu0++ecAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC";

Utils.mimeTypes = {
  mp4: "video/mp4",
  flv: "video/x-flv",
  f4m: "video/f4m",
  smil: "application/smil",
  smilxml: "application/smil+xml",
  m3u8: "application/x-mpegURL",
  mp3: "audio/mpeg",
  json: "application/json",
  txt: "text/plain",
  xml: "application/xml",
  ogv: "video/ogg",
  webm: "video/webm",
  mpd: "application/dash+xml",
  ism: "application/vnd.ms-sstr+xml",
  js: "text/javascript",
  css: "text/css",
  swf: "application/x-shockwave-flash",
  vtt: "text/vtt",
  ttml: "application/ttml+xml",
  srt: "application/x-subrip",
  cea608: "text/cea-608",
  cea708: "text/cea-708"
};

Utils.flashTypes = [Utils.mimeTypes.mp4, Utils.mimeTypes.flv, Utils.mimeTypes.f4m, Utils.mimeTypes.smil, Utils.mimeTypes.smilxml];

Utils.rules = {
  flashTablets: {
    label: "Android 2 & 3 or Kindle Fire 1",
    regexp: "Android [23]|Silk\/1"
  },
  html5Phones: {
    label: "iPhone",
    regexp: "iPhone"
  },
  html5Tablets: {
    label: "HTML5 Tablets",
    regexp: "iPad|Android [4-9]|Silk\/2"
  },
  desktop: {
    label: "Desktop",
    regexp: "^((?!iPad|iPhone|Android|BlackBerry|PlayBook|Silk).)*$"
  }
};

Utils.getPlaybackMode = function(mode) {
  var key, valid, value, _ref;
  if (mode == null) {
    mode = ((_ref = QueryString["amp-mode"]) != null ? _ref.toLowerCase() : void 0) || PlaybackMode.HTML_AUTO;
  }
  valid = false;
  for (key in PlaybackMode) {
    value = PlaybackMode[key];
    if (value === mode) {
      valid = true;
      break;
    }
  }
  if (!valid) {
    mode = PlaybackMode.AUTO;
  }
  if (mode === PlaybackMode.HTML_AUTO) {
    mode = this.isHTMLFirst() ? PlaybackMode.HTML : PlaybackMode.AUTO;
  }
  if (mode !== PlaybackMode.AUTO) {
    if (mode === PlaybackMode.FLASH && (!this.hasFlash() || typeof FlashPlayer === "undefined")) {
      if (this.supportsHTML5Video()) {
        mode = PlaybackMode.HTML;
      } else {
        mode = PlaybackMode.NONE;
      }
    }
    return mode;
  }
  if (!this.hasFlash()) {
    mode = this.supportsHTML5Video() ? PlaybackMode.HTML : PlaybackMode.NONE;
  }
  if (mode === PlaybackMode.AUTO) {
    mode = this.isHTML5() ? PlaybackMode.HTML : PlaybackMode.FLASH;
  }
  return mode;
};

Utils.getIEVersion = function() {
  var re, rv, ua;
  rv = -1;
  ua = navigator.userAgent;
  if (navigator.appName === 'Microsoft Internet Explorer') {
    re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
  } else if (navigator.appName === 'Netscape') {
    re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
  } else if (/Edge\/[0-9\.]+$/.test(ua)) {
    re = /Edge\/([0-9\.]+)/;
  }
  if ((re != null ? re.exec(ua) : void 0) != null) {
    rv = parseFloat(RegExp.$1);
  }
  return rv;
};

Utils.getFFVersion = function() {
  var rv, ua;
  rv = -1;
  ua = navigator.userAgent;
  if (/Firefox\/([0-9\.]+)$/.exec(ua)) {
    rv = parseFloat(RegExp.$1);
  }
  return rv;
};

Utils.getSafariVersion = function() {
  var rv, ua;
  rv = -1;
  ua = navigator.userAgent;
  if (/Safari\/[0-9\.]+$/.test(ua) && (/Version\/([0-9])/.exec(ua) != null)) {
    rv = parseFloat(RegExp.$1);
  }
  return rv;
};

Utils.isChrome = function() {
  return /Chrom(e|ium)/.test(navigator.userAgent);
};

Utils.getChromeVersion = function() {
  var rv, ua;
  rv = -1;
  ua = navigator.userAgent;
  if (/Chrome( Mobile)?\/([0-9\.]+)/.test(ua)) {
    rv = parseFloat(ua.match(/Chrome( Mobile)?\/([0-9\.]+)/)[2].split(".").slice(0, 2).join("."));
  }
  return rv;
};

Utils.isHTMLFirst = function() {
  return window.MediaSource != null;
};

Utils.mergeRules = function(rules) {
  var id, rule, _results;
  _results = [];
  for (id in rules) {
    rule = rules[id];
    _results.push(Utils.rules[id] = rule);
  }
  return _results;
};

Utils.checkRules = function(rules) {
  var id, regExp, rule, _i, _len;
  if ((rules != null) && rules.length > 0) {
    for (_i = 0, _len = rules.length; _i < _len; _i++) {
      id = rules[_i];
      if (!(rule = Utils.rules[id])) {
        continue;
      }
      regExp = new RegExp(rule.regexp);
      if (regExp.test(navigator.userAgent)) {
        return true;
      }
    }
  }
  return false;
};

Utils.selectSource = function(sources, canPlayType) {
  var item, _i, _j, _len, _len1;
  for (_i = 0, _len = sources.length; _i < _len; _i++) {
    item = sources[_i];
    if (Utils.checkRules(item.rules)) {
      return item;
    }
  }
  for (_j = 0, _len1 = sources.length; _j < _len1; _j++) {
    item = sources[_j];
    if (canPlayType(item.type || Utils.getMimeType(item.src)) !== "") {
      return item;
    }
  }
  return null;
};

Utils.getSourceByType = function(media, type) {
  var source, sources, _i, _len;
  sources = media.source != null ? media.source.slice() : [];
  if (!(media.type != null)) {
    media.type = Utils.getMimeType(media.src);
  }
  sources.unshift(media);
  for (_i = 0, _len = sources.length; _i < _len; _i++) {
    source = sources[_i];
    if (source.type === type) {
      return source;
    }
  }
  return null;
};

Utils.getMimeType = function(file) {
  return this.mimeTypes[Utils.getFileExtension(file)];
};

Utils.selectTrack = function(tracks, kind) {
  var item, track, _i, _len;
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    item = tracks[_i];
    if (!(item.kind === kind)) {
      continue;
    }
    track = item;
    break;
  }
  return track;
};

Utils.isIPhone = function() {
  return /iPhone/.test(navigator.platform) || /iPhone/.test(navigator.userAgent);
};

Utils.isIPad = function() {
  return /iPad/.test(navigator.platform) || /iPad/.test(navigator.userAgent);
};

Utils.isAndroid = function() {
  return /Android [4-9]/.test(navigator.userAgent);
};

Utils.isKindleFireHD = function() {
  return /Silk\/2/.test(navigator.userAgent);
};

Utils.isKindleFire = function() {
  return /Silk\/1/.test(navigator.userAgent);
};

Utils.isBlackBerry = function() {
  return /BlackBerry;|PlayBook|BB10/.test(navigator.userAgent);
};

Utils.isFirefoxOS = function() {
  return /\(Mobile;.*Firefox\//.test(navigator.userAgent);
};

Utils.supportsHTML5Video = function() {
  var video;
  video = document.createElement("video");
  return video.canPlayType != null;
};

Utils.isHTML5 = function() {
  return this.isIOS() || this.isAndroid() || this.isKindleFireHD() || this.isBlackBerry() || this.isFirefoxOS();
};

Utils.isIOS = function() {
  var iOSRegEx, isIOS;
  iOSRegEx = /iP(hone|od|ad)/i;
  return isIOS = iOSRegEx.test(navigator.platform) || iOSRegEx.test(navigator.userAgent);
};

Utils.getIOSversion = function() {
  var ver;
  if (this.isIOS()) {
    ver = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(ver[1], 10), parseInt(ver[2], 10), parseInt(ver[3] || 0, 10)];
  }
};

Utils.hasFlash = function() {
  var hasFlash;
  try {
    hasFlash = Boolean(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"));
  } catch (error) {
    hasFlash = "undefined" !== typeof navigator.mimeTypes["application/x-shockwave-flash"];
  }
  return hasFlash;
};

Utils.isFullscreenDevice = function() {
  return this.isKindleFireHD() || this.isIPhone();
};

Utils.getDevice = function() {
  var device;
  device = "desktop";
  if (this.isIPhone()) {
    device = "iphone";
  } else if (this.isIPad()) {
    device = "ipad";
  } else if (/Android/.test(navigator.userAgent)) {
    device = "android";
  } else if (this.isKindleFireHD()) {
    device = "kindlefirehd";
  } else if (this.isKindleFire()) {
    device = "kindlefire";
  }
  return device;
};

Utils.xmlToJson = function(xml) {
  var attribute, child, element, index, nodeName, obj, _i, _j, _len, _len1, _ref, _ref1;
  obj = {};
  if (xml.nodeType === 9) {
    xml = xml.firstChild;
  }
  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      _ref = xml.attributes;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        attribute = _ref[index];
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3 || xml.nodeType === 4) {
    obj = xml.nodeValue;
  }
  if (xml.hasChildNodes()) {
    _ref1 = xml.childNodes;
    for (index = _j = 0, _len1 = _ref1.length; _j < _len1; index = ++_j) {
      child = _ref1[index];
      if (child.nodeType === 3 && !/\S/.test(child.nodeValue)) {
        continue;
      }
      nodeName = child.nodeName.replace(/:/, "-");
      element = this.xmlToJson(child);
      if (!(element["@attributes"] != null) && (element["#text"] != null)) {
        element = element["#text"];
      }
      if (!(obj[nodeName] != null)) {
        obj[nodeName] = element;
      } else {
        if (!(obj[nodeName] instanceof Array)) {
          obj[nodeName] = [obj[nodeName]];
        }
        obj[nodeName].push(element);
      }
    }
  }
  return obj;
};

/**
 * Returns a platform specific XHR object.
 *
 * @static
*/
Utils.getXHR = function() {
  return new XHR();
};

/**
 * Retrieves a remote text file
 *
 * @static
*/
Utils.get = function(url, client, headers) {
  var xhr;
  if (client == null) {
    client = {};
  }
  if (headers == null) {
    headers = null;
  }
  xhr = Utils.getXHR();
  if (client != null) {
    if (client.withCredentials != null) {
      xhr.withCredentials = client.withCredentials;
    }
    if (client.onload != null) {
      xhr.onload = client.onload;
    }
    if (client.onerror != null) {
      xhr.onerror = client.onerror;
    }
  }
  xhr.open("GET", url);
  if (headers != null) {
    xhr.setRequestHeaders(headers);
  }
  xhr.send();
  return xhr;
};

/**
 * Retrieves a remote text file
 *
 * @static
*/
Utils.getUTC = function() {
  var _this = this;
  return this.request("//time.akamai.com").then(function(xhr) {
    return parseInt(xhr.responseText) * 1000;
  });
};

/**
 * Posts a string to NetStorage.
 *
 * @static
*/
Utils.send = function(url, data, client, headers) {
  var xhr;
  if (client == null) {
    client = {};
  }
  if (headers == null) {
    headers = {
      "Content-Type": "String"
    };
  }
  xhr = Utils.getXHR();
  if (client.onload != null) {
    xhr.onload = client.onload;
  }
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("POST", url);
  if (headers != null) {
    xhr.setRequestHeaders(headers);
  }
  xhr.send(data);
  return xhr;
};

/**
 * Request an http resource
 *
 * @static
*/
Utils.request = function(options) {
  var _this = this;
  if (options == null) {
    options = {};
  }
  return new Promise(function(resolve, reject) {
    var key, value, xhr, _ref;
    if (typeof options === "string") {
      options = {
        url: options
      };
    }
    if (!(options.method != null)) {
      options.method = "GET";
    }
    xhr = new XMLHttpRequest();
    xhr.withCredentials = options.withCredentials;
    xhr.onload = function() {
      return resolve(xhr);
    };
    xhr.onerror = function(event) {
      return reject(event);
    };
    xhr.open(options.method, options.url);
    if (options.responseType != null) {
      try {
        xhr.responseType = options.responseType;
      } catch (error) {

      }
    }
    if (options.headers != null) {
      _ref = options.headers;
      for (key in _ref) {
        value = _ref[key];
        if ((key != null) && (value != null)) {
          xhr.setRequestHeader(key, value);
        }
      }
    }
    return xhr.send(options.data || options.body);
  });
};

/**
 * Request an http resource
 *
 * @static
*/
Utils.requestJson = function(options) {
  var _this = this;
  if (options == null) {
    options = {};
  }
  return this.request(options).then(function(xhr) {
    return JSON.parse(xhr.responseText);
  });
};

/**
 * Attaches a JavaScript file to the head of the document.
 *
 * @static
*/
Utils.loadScript = function(src, parent) {
  var _this = this;
  return new Promise(function(resolve, reject) {
    var head, script;
    head = parent || document.getElementsByTagName("head")[0];
    script = document.createElement("script");
    script.type = 'text/javascript';
    if (script.addEventListener) {
      script.onload = function() {
        resolve(script);
      };
      script.onerror = reject;
    } else if (script.readyState) {
      script.onreadystatechange = function(event) {
        if (this.readyState === 'loaded' || this.readyState === 'complete') {
          this.onreadystatechange = null;
          resolve();
        }
      };
    }
    script.src = src;
    head.appendChild(script);
  });
};

/**
 * Attaches a CSS file to the head of the document.
 *
 * @static
*/
Utils.loadStyleSheet = function(href) {
  var head, link;
  head = document.getElementsByTagName("head")[0];
  link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  return head.appendChild(link);
};

Utils.read = function(url, client, type, headers) {
  var text, xhr;
  if (client == null) {
    client = {};
  }
  if (type == null) {
    type = "";
  }
  if (headers == null) {
    headers = [];
  }
  try {
    xhr = this.get(url, client, headers);
    text = xhr.responseText || xhr.text;
    if (type === Utils.mimeTypes.json) {
      return JSON.parse(text);
    } else if ((type === Utils.mimeTypes.xml) && (xhr.responseXML != null)) {
      return xhr.responseXML;
    } else {
      return text;
    }
  } catch (error) {
    if (typeof console !== "undefined" && console !== null) {
      if (typeof console.error === "function") {
        console.error("Read Error: ", error);
      }
    }
    return null;
  }
};

Utils.getFileExtension = function(url) {
  if (url == null) {
    url = "";
  }
  return url.replace(/\?.*/, "").split('.').pop();
};

Utils.getResponseHeader = function(url, header, client) {
  var xhr;
  if (client == null) {
    client = {};
  }
  xhr = Utils.getXHR();
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("HEAD", url, false);
  xhr.send();
  return xhr.getResponseHeader(header);
};

Utils.getResponseHeaders = function(url, headers, client) {
  var header, results, xhr, _i, _len;
  if (client == null) {
    client = {};
  }
  xhr = Utils.getXHR();
  if (client.onerror != null) {
    xhr.onerror = client.onerror;
  }
  xhr.open("HEAD", url, false);
  xhr.send();
  results = {};
  if (!(headers != null)) {
    return xhr.getAllResponseHeaders();
  }
  for (_i = 0, _len = headers.length; _i < _len; _i++) {
    header = headers[_i];
    results[header] = xhr.getResponseHeader(header);
  }
  return results;
};

/**
 * Determines if the device supports touch events
 *
 * @static
*/
Utils.isTouch = null;

/**
 * Determines if the device supports touch events
 *
 * @static
*/
Utils.isTouchDevice = function() {
  if (!(this.isTouch != null)) {
    try {
      document.createEvent("TouchEvent");
      this.isTouch = true;
    } catch (error) {
      this.isTouch = false;
    }
  }
  return this.isTouch;
};

/**
 * Forces a number between a min and a max
 *
 * @static
*/
Utils.clamp = function(value, min, max) {
  if (value < min) {
    value = min;
  }
  if (value > max) {
    value = max;
  }
  return value;
};

/**
 * Beacons a url via an img tag
 *
 * @static
*/
Utils.beacon = function(url, beaconId) {
  var beaconImg;
  if (beaconId == null) {
    beaconId = "beaconId";
  }
  beaconImg = document.getElementById(beaconId);
  if (!(beaconImg != null)) {
    beaconImg = document.createElement("img");
    beaconImg.setAttribute("id", beaconId);
    beaconImg.setAttribute("height", 0);
    beaconImg.setAttribute("width", 0);
    document.body.appendChild(beaconImg);
    beaconImg.style.display = "none";
  }
  beaconImg.setAttribute("src", url);
  return beaconImg;
};

/**
 * Calculates offset Left and Top
 *
 * @static
*/
Utils.getElementOffset = function(element, root) {
  var height, left, scrollLeft, scrollTop, top, width;
  if (root == null) {
    root = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  }
  left = 0;
  top = 0;
  width = element.offsetWidth;
  height = element.offsetHeight;
  while (element && element !== root) {
    if (element.tagName === "BODY") {
      scrollLeft = element.scrollLeft || document.documentElement.scrollLeft;
      scrollTop = element.scrollTop || document.documentElement.scrollTop;
      left += element.offsetLeft - scrollLeft + element.clientLeft;
      top += element.offsetTop - scrollTop + element.clientTop;
    } else {
      left += element.offsetLeft - element.scrollLeft + element.clientLeft;
      top += element.offsetTop - element.scrollTop + element.clientTop;
    }
    element = element.offsetParent;
  }
  return {
    left: left,
    top: top,
    width: width,
    height: height
  };
};

/**
 * Override the properties of a base object with the values
 * of an override object.
 *
 * @param {Object} base     The base object.
 * @param {Object} overrides  key/value overrides
 * @return {Object}
 * @static
*/
Utils.override = function(base, overrides, clone) {
  var key, value;
  if (clone == null) {
    clone = true;
  }
  if (!(base != null)) {
    return overrides;
  }
  if (!(overrides != null)) {
    return base;
  }
  if (clone === true) {
    base = Utils.clone(base);
    overrides = Utils.clone(overrides);
  }
  for (key in overrides) {
    value = overrides[key];
    if (typeof value === "object" && value !== null) {
      if (base[key] == null) {
        base[key] = value instanceof Array ? [] : {};
      }
      base[key] = Utils.override(base[key], value, false);
    } else {
      base[key] = value;
    }
  }
  return base;
};

/**
 * Clones an object.
 *
 * @param {Object} obj The object to be cloned.
 * @return {Object}
 * @static
*/
Utils.clone = function(obj, deepCopy) {
  var clone, item, k, key, v, value, _i, _len;
  if (deepCopy == null) {
    deepCopy = true;
  }
  if (!(obj != null)) {
    return obj;
  }
  if (typeof obj !== "object") {
    clone = obj;
  } else {
    if (obj instanceof Array) {
      clone = [];
    } else {
      clone = {};
    }
    for (key in obj) {
      value = obj[key];
      if (typeof value === "object" && value !== null && deepCopy === true) {
        if (value instanceof Array) {
          clone[key] = [];
          for (_i = 0, _len = value.length; _i < _len; _i++) {
            item = value[_i];
            clone[key].push(this.clone(item));
          }
        } else {
          clone[key] = {};
          for (k in value) {
            v = value[k];
            clone[key][k] = this.clone(v);
          }
        }
      } else {
        clone[key] = value;
      }
    }
  }
  return clone;
};

/**
 * Takes a time in seconds and converts it to timecode.
 *
 * @param   {Number}  time  The time in seconds to be formatted.
 * @return  {String}  A SMTP formatted string.
*/
Utils.formatTimecode = function(time, duration) {
  var strTime;
  time = parseInt(time);
  if (isNaN(time)) {
    return "00:00";
  }
  strTime = Utils.formatZeroFill(time % 60);
  time = parseInt(time / 60);
  strTime = Utils.formatZeroFill(time % 60) + ":" + strTime;
  time = parseInt(time / 60);
  if (time > 0) {
    strTime = Utils.formatZeroFill(time) + ":" + strTime;
  }
  if (duration >= 3600 && strTime.length === 5) {
    strTime = "00:" + strTime;
  }
  return strTime;
};

/**
 * Converts a time in seconds to a string and adds a zero in front of any number lower than 10.
 *
 * @param Number time The number to be zero filled.
*/
Utils.formatZeroFill = function(time) {
  var str;
  str = time.toString();
  if (time < 10) {
    str = "0" + str;
  }
  return str;
};

/**
 * Converts timecode to seconds.
 *
 * @param   {string}  timeCode        A SMTP formatted string.
 * @param   {number}  [framerate=30]  The frame rate. Used to calculate milliseconds.
 * @return  {number}                  The number of seconds represented by the time code
*/
Utils.flattenTimecode = function(timeCode, framerate) {
  var ms, parts, pieces, time;
  if (framerate == null) {
    framerate = 30;
  }
  if (!(timeCode != null) || timeCode === "") {
    return NaN;
  }
  pieces = timeCode.split(":");
  ms = 0;
  if (pieces.length === 4) {
    ms = parseInt(pieces.pop()) / framerate;
  } else if (pieces.length === 3) {
    pieces[2] = pieces[2].replace(",", ".");
    if (pieces[2].indexOf(".") !== -1) {
      parts = pieces[2].split(".");
    }
    if ((parts != null ? parts.length : void 0) > 1) {
      pieces[2] = parts[0];
      ms = parseInt(parts[1]) / 1000;
    }
  }
  time = parseInt(pieces.pop());
  while (pieces.length > 0) {
    time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
  }
  return time + ms;
};

/**
 * Adds a cache busting query string parameter to a url.
 *
 * @param String url The url.
 * @param String key The name of the query string variable
 * @param Object value The value of the query string variable
*/
Utils.cacheBust = function(url, key, value) {
  var op;
  if (key == null) {
    key = "cacheBust";
  }
  if (value == null) {
    value = Date.now();
  }
  op = url.indexOf('?') === -1 ? "?" : "&";
  return url + op + key + "=" + value;
};

/**
 * Converts a camel case string in to a CSS proptery name.
*/
Utils.formatStyleName = function(styleName) {
  return styleName.replace(/([A-Z])/, "-$1").toLowerCase();
};

/**
 * Trims whitespace from the beginning and end of a string
*/
Utils.trim = function(str) {
  var trim;
  trim = str.replace(/^\s*(.*)/, "$1");
  return trim.replace(/(.*)\s*$/, "$1");
};

/**
*/
Utils.getFeed = function(url) {
  var _this = this;
  return this.request(url).then(function(xhr) {
    if (xhr.responseType === "document" || (xhr.responseXML != null)) {
      return Utils.xmlToJson(xhr.responseXML);
    } else {
      return JSON.parse(xhr.response);
    }
  });
};

/**
*/
Utils.getSource = function(url, onload, onerror) {
  var feedloadedHandler, mode;
  mode = Utils.getPlaybackMode();
  feedloadedHandler = function(feed) {
    var canPlayType, helper, source, _ref;
    helper = new MRSSHelper();
    feed = helper.createFeed(feed);
    if ((feed != null ? (_ref = feed.item) != null ? _ref.length : void 0 : void 0) > 0) {
      canPlayType = function(type) {
        if ((mode === "flash" && Utils.flashTypes.indexOf(type) !== -1) || (mode === "html" && Utils.flashTypes.indexOf(type) === -1)) {
          return "maybe";
        } else {
          return "";
        }
      };
      source = Utils.selectSource(feed.item[0].source, canPlayType);
    }
    if (typeof onload === "function") {
      onload(source);
    }
  };
  Utils.getFeed(url).then(feedloadedHandler)["catch"](onerror);
};

/**
*/
Utils.trackMouse = function() {
  try {
    if (document.addEventListener != null) {
      document.addEventListener("mousemove", this.mouseTracker);
    } else if (document.attachEvent != null) {
      document.attachEvent("mousemove", this.mouseTracker);
    }
  } catch (error) {

  }
};

Utils.clientX = 0;

Utils.clientY = 0;

Utils.pageX = 0;

Utils.pageY = 0;

/**
*/
Utils.mouseTracker = function(event) {
  Utils.clientX = event.clientX;
  Utils.clientY = event.clientY;
  Utils.pageX = event.pageX;
  Utils.pageY = event.pageY;
};

/**
*/
Utils.isMouseOverElement = function(element) {
  var isOver;
  isOver = false;
  if (!(element != null)) {
    return isOver;
  }
  try {
    isOver = element.contains(document.elementFromPoint(Utils.clientX, Utils.clientY));
  } catch (error) {
    isOver = false;
  }
  return isOver;
};

Utils.trackMouse();

/** Function to get Outer Dimensions
*/
Utils.getActualSize = function(element, margin) {
  var height, style, width;
  if (margin == null) {
    margin = true;
  }
  width = element.offsetWidth;
  height = element.offsetHeight;
  if (margin === true) {
    style = getComputedStyle(element);
    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  }
  return {
    "width": width,
    "height": height
  };
};

Utils.isVolumeSettable = function() {
  var noVolume, ua;
  ua = navigator.userAgent.toLowerCase();
  noVolume = /ipad|iphone|ipod|android|blackberry|windows ce|windows phone|webos|playbook/.exec(ua);
  if (noVolume != null) {
    if (noVolume[0] === "android" && /Firefox/.test(ua)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Creates a flash object tag.
 *
 * @param {string} swf
 *    The number to be zero filled.
 *
 * @param {Object} flashvars
 *
 * @return {HTMLObjectElement}
 *    The flash object tag.
 *
 * @static
*/
Utils.createFlashObject = function(flash, parent) {
  var atts, id, innerHTML, key, params, value, vars, _ref, _ref1;
  if (!(flash != null)) {
    return;
  }
  params = {
    allowFullScreen: true,
    allowScriptAccess: "always",
    wmode: "direct",
    bgColor: "#000000"
  };
  Utils.override(params, flash.params, false);
  if (flash.vars != null) {
    vars = [];
    _ref = flash.vars;
    for (key in _ref) {
      value = _ref[key];
      vars.push("" + key + "=" + value);
    }
    params.flashvars = vars.join("&");
  }
  id = ((_ref1 = flash.attributes) != null ? _ref1.id : void 0) || this.createUID();
  atts = {
    id: id,
    name: id,
    width: "100%",
    height: "100%",
    type: "application/x-shockwave-flash"
  };
  Utils.override(atts, flash.attributes, false);
  if (this.getIEVersion() !== -1) {
    if (params.wmode === "direct") {
      params.wmode = "transparent";
    }
  }
  innerHTML = "<object ";
  for (key in atts) {
    value = atts[key];
    innerHTML += "" + key + "=\"" + value + "\" ";
  }
  innerHTML += ">\n";
  for (key in params) {
    value = params[key];
    innerHTML += "<param name=\"" + key + "\" value=\"" + value + "\" />\n";
  }
  innerHTML += "</object>";
  parent.innerHTML = innerHTML;
};

/**
 * Creates a unique id.
 *
 * @param   {number=}   base
 *    The base to use for representing a numeric value.
 *
 * @return  {string}
 *    The unique id.
*/
Utils.createUID = function(base) {
  var date, len, max, rand;
  if (base == null) {
    base = 16;
  }
  date = Date.now();
  len = 2;
  max = base * len - 1;
  rand = Math.round(Math.random() * max + base);
  return (rand.toString(16) + date.toString(16)).toUpperCase();
};

/**
 * Chains an array of promises sequentially
 *
 * @param   {Array}   promises
 *    The list of promises
 *
 * @param   {Object}   data
 *    Data to be passes from promise to promise
 *
 * @return  {Promise}
 *    The promise chain
*/
Utils.chain = function(promises, data) {
  var chain, promise, _i, _len;
  chain = Promise.resolve(data);
  for (_i = 0, _len = promises.length; _i < _len; _i++) {
    promise = promises[_i];
    chain = chain.then(promise);
  }
  return chain;
};

/**
 * Converts an array buffer to UTF-8 string.
 *
 * @param   {ArrayBuffer}   arrayBuffer
 *    The ArrayBuffer
 *
 * @return  {String}
 *    The UTF-8 string
*/
Utils.arrayBufferToString = function(arrayBuffer) {
  return String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
};

/**
 * Parses a JSON Web Token
 *
 * @param {String} jwt
 *
 * @return {Object}
 *    The parsed JSON Web Token as an object
*/
Utils.parseJWT = function(jwt) {
  var parts;
  parts = jwt.split(".");
  return {
    header: JSON.parse(atob(parts[0])),
    payload: JSON.parse(atob(parts[1])),
    signature: parts[2]
  };
};

/**
 *
*/
Utils.getFullScreenApi = function(container, video) {
  var fullscreen;
  fullscreen = {};
  if (container.webkitRequestFullScreen != null) {
    fullscreen.enter = container.webkitRequestFullScreen.bind(container);
    fullscreen.exit = document.webkitExitFullscreen != null ? document.webkitExitFullscreen.bind(document) : document.webkitCancelFullScreen.bind(document);
    fullscreen.event = "onwebkitfullscreenchange";
    fullscreen.element = "webkitFullscreenElement";
    fullscreen.error = "webkitfullscreenerror";
  } else if (container.requestFullscreen != null) {
    fullscreen.enter = container.requestFullscreen.bind(container);
    fullscreen.exit = document.exitFullscreen != null ? document.exitFullscreen.bind(document) : document.cancelFullscreen.bind(document);
    fullscreen.event = "onfullscreenchange";
    fullscreen.element = "fullscreenElement";
    fullscreen.error = "fullscreenerror";
  } else if (container.mozRequestFullScreen != null) {
    fullscreen.enter = container.mozRequestFullScreen.bind(container);
    fullscreen.exit = document.mozCancelFullScreen.bind(document);
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
    fullscreen.error = "mozfullscreenerror";
  } else if (container.msRequestFullscreen != null) {
    fullscreen.enter = container.msRequestFullscreen.bind(container);
    fullscreen.exit = document.msExitFullscreen.bind(document);
    fullscreen.event = "MSFullscreenChange";
    fullscreen.element = "msFullscreenElement";
    fullscreen.error = "MSFullscreenError";
  } else if (video.webkitEnterFullscreen != null) {
    fullscreen.enter = video.webkitEnterFullscreen.bind(video);
    fullscreen.exit = video.webkitExitFullscreen.bind(video);
    fullscreen.event = null;
    fullscreen.error = null;
  }
  return fullscreen;
};

/**
*/
Utils.stringToArray = function(string) {
  var array, buffer, i, _i, _ref;
  buffer = new ArrayBuffer(string.length * 2);
  array = new Uint16Array(buffer);
  for (i = _i = 0, _ref = string.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    array[i] = string.charCodeAt(i);
  }
  return array;
};

/**
*/
Utils.arrayToString = function(array) {
  return String.fromCharCode.apply(null, new Uint16Array(array.buffer));
};

/**
*/
Utils.base64DecodeUint8Array = function(input) {
  var array, i, raw, rawLength, _i, _ref;
  raw = window.atob(input);
  rawLength = raw.length;
  array = new Uint8Array(new ArrayBuffer(rawLength));
  for (i = _i = 0, _ref = rawLength - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
};

/**
*/
Utils.base64EncodeUint8Array = function(input) {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
      chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    };
  return output;
};

/**
*/
Utils.getKeySystem = function() {
  var ua;
  ua = navigator.userAgent;
  if (/Edge/.test(ua) || /Trident/.test(ua)) {
    return "com.microsoft.playready";
  } else if (/Chrome/.test(ua) || /Firefox/.test(ua)) {
    return "com.widevine.alpha";
  } else {
    return "com.apple.fps.1_0";
  }
};

/**
*/
Utils.isAutoplaySupported = function() {
  var supported;
  supported = true;
  if (this.isIOS()) {
    if (this.getSafariVersion() !== -1) {
      supported = this.getIOSversion()[0] >= 10;
    } else if (this.isChrome()) {
      supported = this.getChromeVersion() >= 53;
    }
  }
  if (this.isChrome() && this.isAndroid()) {
    supported = this.getChromeVersion() >= 53;
  }
  return supported;
};

/**
 * The AMPConfig class
 *   
 * @constructor
 * @private
 * @extends {EventDispatcher}
*/
function AMPConfig() {
  AMPConfig.__super__.constructor.call(this, this, false);
}


__extends(AMPConfig, EventDispatcher);


AMPConfig.UNINITIALIZED = 0;

AMPConfig.LOADING = 1;

AMPConfig.LOADED = 2;

/**
 * Converst XML to a native JS object
 * 
 * @param   {Element} xml   The XML to convert
 * @return  {Object}
 * @static
*/
AMPConfig.parseModule = function(xml) {
  var child, childNodes, count, i, k, node, obj, _i, _len;
  obj = {};
  i = 0;
  childNodes = xml.childNodes;
  count = childNodes.length;
  k = 0;
  node = null;
  child = null;
  for (_i = 0, _len = childNodes.length; _i < _len; _i++) {
    node = childNodes[_i];
    if ((node != null ? node.nodeType : void 0) === 1) {
      obj[node.nodeName] = this.parseItem(node);
    }
  }
  return obj;
};

AMPConfig.parseItem = function(node) {
  var child, children, type, value, _i, _len;
  type = ("" + (node.getAttribute('type'))).toLowerCase();
  value = node.textContent || node.text || node.innerText;
  if (type !== "object" && type !== "array" && /#\{.*\}/.test(value)) {
    return value;
  }
  switch (type) {
    case "object":
      value = this.parseModule(node);
      break;
    case "array":
      value = [];
      children = node.childNodes;
      for (_i = 0, _len = children.length; _i < _len; _i++) {
        child = children[_i];
        if (child.nodeType !== 1) {
          continue;
        }
        value.push(this.parseItem(child));
      }
      break;
    case "boolean":
      value = value.toLowerCase() === "true";
      break;
    case "number":
      value = parseFloat(value);
  }
  return value;
};

AMPConfig.prototype.url = null;

AMPConfig.prototype.data = null;

AMPConfig.prototype.xml = null;

AMPConfig.prototype.readyState = AMPConfig.UNINITIALIZED;

AMPConfig.prototype.loaded = false;

AMPConfig.prototype.flash = {
  PlaybackMetricsPlugin: {
    src: '#{paths.resources}plugins/PlaybackMetricsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "PlaybackMetricsPlugin"
  },
  SubclipMonitorPlugin: {
    src: '#{paths.resources}plugins/SubclipMonitorPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "SubclipMonitorPlugin"
  },
  NetSessionClientPlugin: {
    src: '#{paths.resources}plugins/NetSessionClientPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "NetSessionClientPlugin"
  }
};

/**
*/
AMPConfig.prototype.loadURL = function(url, withCredentials) {
  var xhr,
    _this = this;
  if (withCredentials == null) {
    withCredentials = false;
  }
  this.url = url;
  this.setReadyState(AMPConfig.LOADING);
  xhr = Utils.get(url, {
    withCredentials: withCredentials,
    onload: function(event) {
      var data, firstChild, xmlhttp;
      xmlhttp = event.detail;
      if (xmlhttp.responseType === "document") {
        _this.xml = xmlhttp.responseXML;
        firstChild = _this.xml.firstChild.nodeType !== 7 ? _this.xml.firstChild : _this.xml.childNodes[1];
        data = AMPConfig.parseModule(firstChild);
      } else {
        data = xmlhttp.response;
        if (typeof data === "string") {
          data = JSON.parse(data);
        }
      }
      _this.loadData(data);
    },
    onerror: function(event) {
      _this.dispatchEvent(new Event("error", event));
      Logger.error(event);
    }
  });
};

/**
*/
AMPConfig.prototype.loadData = function(data) {
  Config.defaults = data;
  this.setReadyState(AMPConfig.LOADED);
};

/**
*/
AMPConfig.prototype.load = function(resource, withCredentials) {
  if (withCredentials == null) {
    withCredentials = false;
  }
  switch (typeof resource) {
    case "object":
      this.loadData(resource);
      break;
    case "string":
      this.loadURL(resource, withCredentials);
      break;
    default:
      throw new Error("[AMP ERROR] Invalid default configuration resource");
  }
};

/**
*/
AMPConfig.prototype.setReadyState = function(state) {
  this.readyState = state;
  this.dispatchEvent(new Event("readystatechange", state));
  if (state === AMPConfig.LOADED && !this.loaded) {
    this.loaded = true;
    this.dispatchEvent(new Event("load", this.data));
  }
};

/**
 * The CaptionCue class.
 *   
 * @constructor
 * @private
 * @param {number} startTime  The start time of the cue in seconds
 * @param {number} endTime    The end time of the cue in seconds
 * @param {number} text       The text of the cue
*/
function CaptionCue(startTime, endTime, id) {
  this.startTime = startTime;
  this.endTime = endTime;
  this.id = id;
}

CaptionCue.prototype.id = null;

CaptionCue.prototype.startTime = null;

CaptionCue.prototype.endTime = null;

CaptionCue.prototype.text = null;

CaptionCue.prototype.html = null;

CaptionCue.prototype.align = null;

/**
 * @enum {string}
 * @const
 * @private
*/

var FeatureNotifications = {
  REGISTER_FEATURE: "registerfeature"
};

function SRTParser() {}

/**
 * Parses a SRT (subrip) file into CaptionCue objects and attaches them to a given track.
 *
 * @param   {CaptionTrack}  track The caption track to populate
 * @param   {String}        txt   The text of the srt file
 * @return  {CaptionTrack}        The populated caption track
*/
SRTParser.prototype.parse = function(track, txt) {
  var caption, captions, cue, end, index, parts, start, text, times, _i, _len;
  txt = txt.replace(/\r/g, '');
  captions = txt.split("\n\n");
  for (_i = 0, _len = captions.length; _i < _len; _i++) {
    caption = captions[_i];
    parts = caption.split("\n");
    try {
      index = parts[0];
      times = parts[1].match(/([0-9:\,]+)\s*-->\s*([0-9:\,]+)/).slice(1);
      start = Utils.flattenTimecode(times[0]);
      end = Utils.flattenTimecode(times[1]);
      text = parts.slice(2);
    } catch (err) {
      Logger.instance.warn("SRT Parsing Warning");
    }
    cue = new CaptionCue(start, end, "cue_" + index);
    cue.html = "<p>" + text.join("<br />") + "</p>";
    cue.text = text.join("\n");
    track.cues.push(cue);
  }
  return track;
};

function WebVTTParser() {}

/**
 * Parses a SRT (subrip) file into CaptionCue objects and attaches them to a given track.
 * 
 * @param   {CaptionTrack}  track The caption track to populate
 * @param   {String}        txt   The text of the srt file
 * @return  {CaptionTrack}        The populated caption track
*/
WebVTTParser.prototype.parse = function(track, txt) {
  var caption, captions, cue, end, index, parts, settings, start, text, times, _i, _len;
  txt = txt.replace(/\r/g, '');
  captions = txt.split("\n\n");
  index = 0;
  if (/^WEBVTT/.test(captions[0])) {
    captions.shift();
  }
  for (_i = 0, _len = captions.length; _i < _len; _i++) {
    caption = captions[_i];
    if (!(caption !== "")) {
      continue;
    }
    parts = caption.split("\n");
    try {
      index = /^[0-9]+$/.test(parts[0]) ? parts.shift() : ++index;
      times = parts[0].match(/([0-9:\.]+)\s*-->\s*([0-9:\.]+)([^\n]*)/).slice(1);
      settings = times[2];
      start = Utils.flattenTimecode(times[0]);
      end = Utils.flattenTimecode(times[1]);
      text = parts.slice(1);
    } catch (err) {
      Logger.error("WebVTT Parse Error");
    }
    cue = new CaptionCue(start, end, "cue_" + index);
    cue.html = "<p>" + text.join("<br />") + "</p>";
    cue.text = text.join("\n");
    if (settings != null) {
      settings.replace(/\s*([A-Za-z]+)\s*:\s*([\w\-\%]+)/g, function(match, $1, $2) {
        cue[$1] = $2;
        return "";
      });
    }
    track.cues.push(cue);
  }
  return track;
};

function SMPTETTParser() {}

/**
 * Parses a SMPTETT file into CaptionCue objects and attaches them to a given track.
 * 
 * @param   {CaptionTrack}  track The caption track to populate
 * @param   {XMLDocument}   xml   The SMPTETT xml document
 * @return  {CaptionTrack}        The populated caption track
*/
SMPTETTParser.prototype.parse = function(track, xml) {
  var captions, lang, styledElements, styles, tt,
    _this = this;
  if (typeof xml === "string") {
    xml = XMLUtils.parse(xml);
  }
  styles = Array.prototype.slice.call(xml.querySelectorAll("styling style"));
  styles.forEach(function(item, index, list) {
    var attributes, id, style;
    style = "";
    id = item.getAttribute("id") || item.getAttribute("xml:id");
    attributes = Array.prototype.slice.call(item.attributes);
    attributes.forEach(function(item, index, array) {
      if (item.prefix === "tts") {
        return style += Utils.formatStyleName(item.localName) + ":" + item.nodeValue + ";";
      }
    });
    track.styles[id] = style;
  });
  styledElements = Array.prototype.slice.call(xml.querySelectorAll("body [style]"));
  styledElements.forEach(function(item, index, array) {
    var id;
    id = item.getAttribute("style");
    item.setAttribute("style", track.styles[id]);
  });
  tt = xml.querySelector("tt");
  lang = tt.getAttribute("lang") || tt.getAttribute("xml:lang");
  if (track.language === void 0 || track.language === null) {
    track.language = lang;
  }
  captions = Array.prototype.slice.call(xml.querySelectorAll("body p[begin]"));
  captions.forEach(function(item, index, array) {
    var align, cue, end, start, text;
    start = item.getAttribute("begin");
    item.removeAttribute("begin");
    if (item.getAttribute("end") != null) {
      end = item.getAttribute("end");
      item.removeAttribute("end");
    } else if (captions[index + 1] != null) {
      end = captions[index + 1].getAttribute("begin");
    }
    cue = new CaptionCue(Utils.flattenTimecode(start), Utils.flattenTimecode(end), "cue_" + index);
    align = item.getAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
    if (align != null) {
      cue.align = align === "center" ? "middle" : align;
      item.removeAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
    }
    text = XMLUtils.serialize(item);
    text = text.replace(/\s*xmlns="[^"]*"/, "");
    cue.html = text;
    text = text.replace(/^<p[^>]*>/, "");
    text = text.replace(/<\/p>$/, "");
    text = text.replace(/<br\/>/, "\n");
    text = text.replace(/<span style="([^"]*)"/, "<c.$1");
    text = text.replace(/<\/span>/, "</c>");
    cue.text = text;
    track.cues.push(cue);
  });
  return track;
};

/**
 * @constructor
 * @private
*/
function LiveCaptionProxy() {
  var com,
    _this = this;
  this.captions = [];
  this.head = document.getElementsByTagName("head")[0];
  com = window.com || {};
  com.akamai = com.akamai || {};
  com.akamai.amp = com.akamai.amp || {};
  com.akamai.amp.plugins = com.akamai.amp.plugins || {};
  com.akamai.amp.plugins.subply = com.akamai.amp.plugins.subply || {};
  com.akamai.amp.plugins.subply.response = function(json) {
    _this.parse(json);
    _this.poll();
  };
  if (!(window.com != null)) {
    window.com = com;
  }
  LiveCaptionProxy.__super__.constructor.call(this, this.constructor.NAME);
}


__extends(LiveCaptionProxy, puremvc.Proxy);


/** @static
*/
LiveCaptionProxy.NAME = "LiveCaptionProxy";

LiveCaptionProxy.prototype.data = {
  base: "http://test.plymedia.com.s3.amazonaws.com/online/Akamai_",
  interval: 1000
};

LiveCaptionProxy.prototype.caption = null;

LiveCaptionProxy.prototype.head = null;

LiveCaptionProxy.prototype.script = null;

LiveCaptionProxy.prototype.timeout = null;

/**
 *
*/
LiveCaptionProxy.prototype.getURL = function() {
  return this.data.url;
};

LiveCaptionProxy.prototype.setURL = function(value) {
  this.data.url = value;
  return value;
};

LiveCaptionProxy.prototype.start = function() {
  this.send();
};

LiveCaptionProxy.prototype.poll = function() {
  var timeout,
    _this = this;
  timeout = setTimeout(function() {
    _this.send();
  }, this.data.interval || 1000);
};

LiveCaptionProxy.prototype.send = function() {
  var _this = this;
  if (this.script != null) {
    this.head.removeChild(this.script);
  }
  this.script = Utils.loadScript(this.data.base + this.data.url + ".js?nocache=" + Date.now()).then(function(script) {
    return _this.script = script;
  })["catch"](function(error) {
    return _this.facade.logger.error("[AMP CAPTIONING ERROR]", error);
  });
};

LiveCaptionProxy.prototype.stop = function() {
  clearTimeout(timeout);
};

/**
 *
*/
LiveCaptionProxy.prototype.parse = function(response) {
  var html, text, _i, _len, _ref;
  if (response.Stream !== this.data.url) {
    return;
  }
  if ((this.caption != null) && this.caption.id >= response.Ticks) {
    return;
  }
  this.caption = new CaptionCue(Utils.flattenTimecode(response.From), Utils.flattenTimecode(response.To), response.Ticks);
  this.caption.text = response.Text;
  html = "";
  _ref = response.Text.split("\n");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    text = _ref[_i];
    if (html !== "") {
      html += "<br />";
    }
    html += "<span>" + text + "</span>";
  }
  this.caption.html = "<p>" + html + "</p>";
  this.sendNotification(CaptioningNotifications.CUE_CHANGE, [this.caption]);
  return this.caption;
};

/**
 * @constructor
*/
function AMP() {}

/**
 * Create a player based on the configuration object and container.
 *
 * @param {string|HTMLElement} container
 *    The id of the div the player will be attached to.
 *
 * @param {?(Object|string)} config
 *    The configuration override object.
 *
 * @param {?Function} onready
 *    Optional ready handler.
 *
 * @return {Player}
 *
*/
AMP.create = function(container, config, onready) {
  var element, initTime, player, version;
  initTime = Date.now();
  if (typeof container === "string") {
    element = document.getElementById(container);
    if (!(element != null)) {
      element = document.querySelector(container);
    }
  } else {
    element = container;
  }
  if (!(element != null)) {
    throw new Error("[AMP ERROR] Invalid container. Could not find DOM element: " + container);
  }
  config = config instanceof Config ? config : Config.create(config);
  Logger.instance = new Logger(config.debug);
  version = this.getVersion();
  if (element.dataset == null) {
    element.dataset = {};
  }
  element.dataset["amp.version"] = version;
  Logger.instance.log("[AMP] " + version);
  player = this.createPlayer(config, element);
  player.initTime = initTime;
  element.amp = player;
  player.request = this.request.bind(this);
  player.loadResources = player.loadModuleResources.bind(player);
  player.onready = onready;
  player.initialize(config);
  return player;
};

/**
 *
*/
AMP.createPlayer = function(config, container) {
  var player;
  player = this.players[config.mode];
  if (player != null) {
    player = new player(container);
  }
  return player;
};

/**
 * Returns the version string for this player library.
 *
 * @return {string} The version string.
*/
AMP.getVersion = function() {
  return this.VERSION;
};

/**
 * The player version string
 *
 * @type {string}
 * @private
 * @static
*/
AMP.VERSION = "AMP Premier v2.83.14";

/**
 * @private
*/
AMP.defaults = new AMPConfig();

/**
 * @private
*/
AMP.plugins = [];

/**
 * @private
*/
AMP.players = {};

/**
 * Loads a default configuration object from a url.
 *
 * @param {string} url
 *    A url to a configuration json file to use at the defaults object.
 *
 * @param {?Function} loaded
 *    Callback function triggered when the file has been loaded and
 *    sucessfully parsed.
 *
 * @param {?Function} error
 *    Callback function triggered when the file has failed to load
 *    or cannot be parsed.
 *
 * @param {boolean} [withCredentials=false]
 *    Whether or not to use credntials when making XMLHttpRequest.
 *
 * @static
*/
AMP.loadDefaults = function(url, loaded, error, withCredentials) {
  if (withCredentials == null) {
    withCredentials = false;
  }
  if (loaded != null) {
    this.defaults.addEventListener("load", loaded);
  }
  if (error != null) {
    this.defaults.addEventListener("error", error);
  }
  this.defaults.load(url, withCredentials);
};

/**
 * Returns the playback mode best suited for the current environment.
 *
 * @return {PlaybackMode}
 *    The playback mode.
 *
 * @static
*/
AMP.getPlaybackMode = function() {
  return Utils.getPlaybackMode();
};

/**
 * @private
 * @static
*/
AMP.registerPlayer = function(mode, player) {
  this.players[mode] = player;
};

/**
 * Registers a plugin factory function. This function is
 * called when akamai.amp.AMP.create is called and the
 * config object contains the plugin key.
 *
 * @param {String} key
 *    The plugin key. Used to configure the plugin.
 *
 * @param {String|Array.<String>} mode
 *    The player mode(s) in which the plugin can be used.
 *
 * @param {Function} factory
 *
 * @static
*/
AMP.registerPlugin = function(id, mode, plugin) {
  var item, _base, _i, _len, _ref;
  if ((_base = this.plugins)[id] == null) {
    _base[id] = {};
  }
  if (typeof mode === "function") {
    _ref = [plugin, mode], mode = _ref[0], plugin = _ref[1];
  }
  if (typeof mode === "string") {
    mode = [mode];
  }
  if (!(mode != null)) {
    mode = ["html", "flash"];
  }
  for (_i = 0, _len = mode.length; _i < _len; _i++) {
    item = mode[_i];
    this.plugins[id][item] = plugin;
  }
};

/**
 * @type {akamai.amp.ResourceManager}
 * @private
*/
AMP.resourceManager = null;

/**
 * Short cut getter for the global renderer manager
 *
 * @return {akamai.amp.ResourceManager}
 *
 * @static
 * @private
*/
AMP.getResourceManager = function() {
  if (!(this.resourceManager != null)) {
    this.resourceManager = new ResourceManager();
  }
  return this.resourceManager;
};

/**
 * @param {akamai.amp.Resource} resource
 *    The resource definition
 *
 * @param {Function} callback
 *
 * @static
 * @private
*/
AMP.addResource = function(resource) {
  return this.getResourceManager().add(resource);
};

/**
 * @param {Array.<akamai.amp.Resource>} resources
 *    The list of resources
 *
 * @param {Function} callback
 *
 * @static
 * @private
*/
AMP.addResources = function(resources) {
  return this.getResourceManager().addResources(resources);
};

/**
 * Request a http resource.
 *
 * @param {String|Object} options
 *    A url string or an object containing the following properties:
 *
 * @return {Promise.<XHR>}
 *     Promise which resolves to a XHR object
 *
 * @static
*/
AMP.request = function(options) {
  return Utils.request(options);
};

/**
 * Request a http json resource.
 *
 * @param {String|Object} options
 *    A url string or an object containing the following properties:
 *
 * @return {Promise.<Object>}
 *     Promise which resolves to a js object
 *
 * @static
*/
AMP.requestJson = function(options) {
  return Utils.requestJson(options);
};

/**
 * @param {!string} key
 *     The resource's key
 *
 * @return {akamai.amp.Resource}
 *     The resource definition
 *
 * @static
 * @private
*/
AMP.getResource = function(key) {
  return this.getResourceManager().item(key);
};

/**
 * @param {!string} key
 *     The resource's key
 *
 * @return {Function}
 *     The resource's constructor
 *
 * @static
 * @private
*/
AMP.removeResource = function(key) {
  return this.getResourceManager().remove(key);
};

/**
 * Evaluate a data bound object.
 *
 * @param {Object} binding
 *   The data bound object.
 *
 * @param {Object} context
 *   The context object used as "global" when evaluating the binding.
 *
 * @return {string}
 *   The evaluated result
*/
AMP.evaluateBindings = function(value, context, params, clone) {
  var key,
    _this = this;
  if (clone == null) {
    clone = true;
  }
  if (!(value != null)) {
    return;
  }
  if (typeof value === "object") {
    clone = clone === true ? JSON.parse(JSON.stringify(value)) : value;
    if (value instanceof Array) {
      return clone.map(function(item) {
        return _this.evaluateBindings(item, context, params, false);
      });
    } else {
      value = {};
      for (key in clone) {
        value[key] = this.evaluateBindings(clone[key], context, params, false);
      }
      return value;
    }
  } else if (typeof value === "string") {
    return value.replace(/(#|\$){([^#\$]*)}/g, function(match, token, binding) {
      try {
        return (new Function("params", "with (this) { return " + binding + " }")).bind(context)(params);
      } catch (error) {
        return value;
      }
    });
  } else {
    return value;
  }
};


AMP.registerPlayer("html", HTMLPlayer);
AMP.registerPlayer("flash", FlashPlayer);
AMP.registerPlayer("none", InstallPlayer);
AMP.registerPlayer("external", ExternalPlayer);

/**
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function PluginCommand() {
  PluginCommand.__super__.constructor.call(this);
}


__extends(PluginCommand, PlayerCommand);


PluginCommand.prototype.plugin = null;

PluginCommand.prototype.proxy = null;

/** @override
*/
PluginCommand.prototype.initializeNotifier = function(key) {
  PluginCommand.__super__.initializeNotifier.call(this, key);
  this.proxy = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.plugin = this.facade;
};

/**
 * The CaptioningChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function CaptioningChangeMediaCommand() {
  CaptioningChangeMediaCommand.__super__.constructor.call(this);
}


__extends(CaptioningChangeMediaCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningChangeMediaCommand.prototype.execute = function(notification) {
  var media, track;
  media = notification.getBody();
  track = notification.getBody().track;
  this.proxy.setTracks(track);
  if (!(track != null)) {
    this.sendNotification(CaptioningNotifications.ENABLED, false);
    return;
  }
  this.proxy.selectRenderer(media);
  this.sendNotification(CaptioningNotifications.ENABLED, true);
};

/**
 * @constructor
 * @private
 * @extends {amp.player.controller.PlayerCommand}
*/
function PluginEventCommand() {
  PluginEventCommand.__super__.constructor.call(this);
}


__extends(PluginEventCommand, PluginCommand);


/**
 *
*/
PluginEventCommand.prototype.dispatchEvent = function(type, detail) {
  var event, name, _base;
  if (typeof type !== "string") {
    detail = type.getBody();
    if (!(detail != null)) {
      detail = {};
    }
    type = type.getName();
  }
  name = typeof (_base = this.plugin).getFeatureName === "function" ? _base.getFeatureName() : void 0;
  if ((name != null) && name !== "auth") {
    type = type.replace(new RegExp("^(" + name + ")"), "");
  }
  name = this.plugin.getModuleName();
  type = type.replace(new RegExp("^(" + name + ")"), "");
  event = new Event(type, detail);
  this.sendNotification(Notifications.DISPATCH_EVENT, event);
};

/**
 *
*/
PluginEventCommand.prototype.dispatchEventAfterCommand = function(type, detail) {
  setTimeout(this.dispatchEvent.bind(this, type, detail), 0);
};

/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
PluginEventCommand.prototype.execute = function(notification) {
  this.dispatchEvent(notification);
};

/**
 * The CaptioningEnabledCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function CaptioningEnabledCommand() {
  CaptioningEnabledCommand.__super__.constructor.call(this);
}


__extends(CaptioningEnabledCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
CaptioningEnabledCommand.prototype.execute = function(notification) {
  this.proxy.setEnabled(notification.getBody());
  CaptioningEnabledCommand.__super__.execute.call(this, notification);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var UserSettingsNotifications = {
  SETTING_CHANGE: "settingchange",
  UPDATE_SETTINGS: "updatesettings"
};

/**
 * The ChangeVisibilityCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function CaptioningVisibilityChangeCommand() {
  CaptioningVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(CaptioningVisibilityChangeCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
CaptioningVisibilityChangeCommand.prototype.execute = function(notification) {
  var hidden;
  hidden = !notification.getBody();
  if (hidden === this.proxy.getHidden()) {
    return;
  }
  this.proxy.setHidden(hidden);
  CaptioningVisibilityChangeCommand.__super__.execute.call(this, notification);
};

/**
 * The CaptioningTimeUpdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function CaptioningTimeUpdateCommand() {
  CaptioningTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(CaptioningTimeUpdateCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningTimeUpdateCommand.prototype.execute = function(notification) {
  var active, changed, cue, cues, index, time, track, _i, _len;
  time = notification.getBody();
  track = this.proxy.getTrack();
  if (!(track != null)) {
    return;
  }
  active = track.activeCues;
  cues = track.cues;
  changed = false;
  for (_i = 0, _len = cues.length; _i < _len; _i++) {
    cue = cues[_i];
    if (time >= cue.startTime && time < cue.endTime) {
      if (!(__indexOf.call(active, cue) >= 0)) {
        active.push(cue);
        changed = true;
      }
    } else {
      index = active.indexOf(cue);
      if (index !== -1) {
        active.splice(index, 1);
        changed = true;
      }
    }
  }
  if (changed === true) {
    this.sendNotification(CaptioningNotifications.CUE_CHANGE, active);
  }
};

/**
 * The CaptioningStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function CaptioningStartedCommand() {
  CaptioningStartedCommand.__super__.constructor.call(this);
}


__extends(CaptioningStartedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
CaptioningStartedCommand.prototype.execute = function(notification) {
  var proxy, track, _ref;
  proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
  track = proxy.getTrack();
  if (!(track != null) && ((_ref = proxy.getTracks()) != null ? _ref.length : void 0) > 0) {
    track = proxy.autoSelectTrack();
  }
  if ((track != null ? track.isLive : void 0) === true) {
    this.facade.removeCommand(Notifications.TIME_UPDATE);
    proxy = this.facade.retrieveProxy(LiveCaptionProxy.NAME);
    if (!(proxy != null)) {
      proxy = new LiveCaptionProxy();
      this.facade.registerProxy(proxy);
    }
    proxy.setURL(track.src);
    proxy.start();
  }
};

/** 
 * @private
*/

CaptionParsers = {
  "application/ttml+xml": new SMPTETTParser(),
  "application/x-subrip": new SRTParser(),
  "text/vtt": new WebVTTParser(),
  undefined: new SMPTETTParser()
};

/** 
 * @param {FlashPlayer} player
 * @param {Object} config
 * @constructor
 * @private
 * @extends {puremvc.Mediator}
*/
function PluginWrapper(player, config) {
  this.player = player;
  this.config = config;
  PluginWrapper.__super__.constructor.call(this);
  this.dispatcher = new EventDispatcher(this);
  this.createDefaults();
}


__extends(PluginWrapper, puremvc.Mediator);


PluginWrapper.NAME = "PluginWrapper";

PluginWrapper.prototype.player = null;

PluginWrapper.prototype.config = null;

PluginWrapper.prototype.dispatcher = null;

PluginWrapper.prototype.flashPlugins = null;

PluginWrapper.prototype.createFlashVars = null;

PluginWrapper.prototype.createXML = null;

PluginWrapper.prototype.createDefaults = function() {
  this.player.createDefaults.call(this);
};

/**
*/
PluginWrapper.prototype.addEventListener = function(type, func) {
  this.dispatcher.addEventListener(type, func);
};

PluginWrapper.prototype.logEvent = function(event) {};

/**
*/
PluginWrapper.prototype.dispatchEvent = function(event) {
  if (event.type !== "timeupdate" && event.type !== "timeremaining") {
    this.player.logger.log("[AMP " + (this.constructor.NAME.replace('Wrapper', '').toUpperCase()) + " EVENT] " + event.type, event);
  }
  event.player = this.player;
  this.dispatcher.dispatchEvent(event);
};

/**
*/
PluginWrapper.prototype.removeEventListener = function(type, func) {
  this.dispatcher.removeEventListener(type, func);
};

/**
*/
PluginWrapper.prototype.createElement = function(xml, id, parent) {
  var element;
  element = xml.createElement("element");
  element.setAttribute("id", id);
  if (!(parent != null)) {
    parent = this.getControls(xml).controls;
  }
  if (parent != null) {
    parent.appendChild(element);
  }
  return element;
};

/**
*/
PluginWrapper.prototype.createProperty = function(xml, key, value, parent) {
  var property, text, val;
  property = xml.createElement("property");
  property.setAttribute("key", key);
  if (parent != null) {
    parent.appendChild(property);
  }
  if (value != null) {
    if (typeof value === "object" && !(value instanceof Array)) {
      for (key in value) {
        val = value[key];
        this.createProperty(xml, key, val, property);
      }
    } else {
      text = XMLUtils.createTextContent(xml, value.toString());
      property.appendChild(text);
    }
  }
  return property;
};

/** @override
*/
PluginWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML];
};

/**
*/
PluginWrapper.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      if (typeof this.createFlashVars === "function") {
        this.createFlashVars(body.flashvars);
      }
      break;
    case FlashNotifications.CREATE_XML:
      if (typeof this.createXML === "function") {
        this.createXML(body.xml);
      }
  }
};

/**
*/
PluginWrapper.prototype.destroy = function() {};

/**
 * The CaptionTrack class.
 *   
 * @constructor
 * @private
 * @param {?Object} track A generic track object.
*/
function CaptionTrack(track, onload) {
  var xhr,
    _this = this;
  this.kind = track.kind;
  this.type = track.type;
  this.src = track.src;
  this.language = track.srclang;
  this.label = track.label || this.srclang || this.kind;
  this.cues = track.cues || [];
  this.styles = track.styles || {};
  this.activeCues = [];
  this.isLive = /live-subply/.test(this.type);
  if ((this.src != null) && this.src !== "" && !this.isLive) {
    xhr = Utils.get(this.src, {
      onload: function() {
        try {
          CaptionParsers[_this.type].parse(_this, xhr.response);
        } catch (error) {
          Logger.error("Could not parse caption track: " + _this.src);
          return;
        }
        if (typeof onload === "function") {
          onload();
        }
      },
      onerror: function() {
        Logger.error("Could not load caption track: " + _this.src);
      }
    });
  } else {
    setTimeout(onload, 1);
  }
}

CaptionTrack.prototype.kind = null;

CaptionTrack.prototype.src = null;

CaptionTrack.prototype.language = null;

CaptionTrack.prototype.cues = null;

CaptionTrack.prototype.label = null;

CaptionTrack.prototype.activeCues = null;

CaptionTrack.prototype.type = null;

CaptionTrack.prototype.styles = null;

CaptionTrack.prototype.isLive = false;

/** 
 * @constructor
 * @private
*/
function OverlayMediator() {
  OverlayMediator.__super__.constructor.call(this, null, null, null, null);
}


__extends(OverlayMediator, ComponentMediator);


OverlayMediator.prototype.componentType = "overlay";

/**
 * Registers the overlay.
 * 
 * @override
*/
OverlayMediator.prototype.onRegister = function() {
  OverlayMediator.__super__.onRegister.call(this);
  this.registerOverlay();
};

/**
 * Removes the overlay.
 * 
 * @override
*/
OverlayMediator.prototype.onRemove = function() {
  OverlayMediator.__super__.onRemove.call(this);
  this.removeOverlay();
};

/**
 *
*/
OverlayMediator.prototype.registerOverlay = function() {
  this.sendNotification(Notifications.ADD_OVERLAY, this.viewComponent);
};

/**
 *
*/
OverlayMediator.prototype.removeOverlay = function() {
  this.sendNotification(Notifications.REMOVE_OVERLAY, this.viewComponent);
};

/**
 * The CaptioningProxy class
 *
 * @constructor
 * @private
 * @extends {PluginProxy}
 * @param   {Object}  config  The configuration object.
*/
function CaptioningProxy(config) {
  this.activeCaptions = [];
  this.providers = {};
  this.tracks = [];
  this.rendererMap = [];
  this.track = {};
  CaptioningProxy.__super__.constructor.call(this, config);
}


__extends(CaptioningProxy, PluginProxy);


/** @static
*/
CaptioningProxy.NAME = ModuleProxy.NAME;

CaptioningProxy.TEXT_TRACK_RENDERER = "caption-text";

CaptioningProxy.prototype.defaults = {
  useNative: false,
  crossorigin: null
};

CaptioningProxy.prototype.enabled = false;

CaptioningProxy.prototype.hidden = true;

CaptioningProxy.prototype.tracks = null;

CaptioningProxy.prototype.track = null;

CaptioningProxy.prototype.activeCaptions = null;

CaptioningProxy.prototype.captions = null;

CaptioningProxy.prototype.loaded = true;

CaptioningProxy.prototype.rendererMap = null;

/**
 *
*/
CaptioningProxy.prototype.getUseNative = function() {
  return this.getValue("useNative");
};

/**
 *
*/
CaptioningProxy.prototype.getCrossOrigin = function() {
  return this.getValue("crossorigin");
};

/**
 *
*/
CaptioningProxy.prototype.getTracks = function() {
  return this.tracks;
};

CaptioningProxy.prototype.setTracks = function(value) {
  var count, item, loaded, track, trackLoaded, _i, _len,
    _this = this;
  this.tracks = [];
  this.track = null;
  if (!(value != null)) {
    return;
  }
  count = value.length;
  loaded = 0;
  trackLoaded = function() {
    loaded++;
    if (loaded === count) {
      _this.sendNotification(CaptioningNotifications.TRACKS_LOADED, _this.tracks);
      _this.autoSelectTrack();
    }
  };
  for (_i = 0, _len = value.length; _i < _len; _i++) {
    item = value[_i];
    track = new CaptionTrack(item, trackLoaded);
    this.tracks.push(track);
  }
  return value;
};

/**
*/
CaptioningProxy.prototype.registerRenderer = function(value) {
  if (!(value != null)) {
    return;
  }
  value.proxy = this;
  this.rendererMap.push(value);
};

/**
*/
CaptioningProxy.prototype.retrieveRenderer = function(name) {
  var value, _i, _len, _ref;
  _ref = this.rendererMap;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    value = _ref[_i];
    if (value.getRendererName() === name) {
      return value;
    }
  }
};

/**
*/
CaptioningProxy.prototype.removeRenderer = function(name) {
  var index, value;
  value = this.retrieveRenderer(name);
  value.proxy = null;
  if (!(value != null)) {
    return null;
  }
  index = this.rendererMap.indexOf(value);
  this.rendererMap.splice(index, 1);
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.getRenderer = function() {
  return this.renderer;
};

CaptioningProxy.prototype.setRenderer = function(value) {
  if (value === this.renderer) {
    return value;
  }
  if (this.renderer != null) {
    this.facade.removeMediator(CaptioningProxy.TEXT_TRACK_RENDERER);
  }
  this.renderer = value;
  if (this.renderer != null) {
    this.facade.registerMediator(this.renderer);
  }
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.selectRenderer = function(media) {
  var item, renderer, track, tracks, _i, _j, _len, _len1, _ref;
  renderer = null;
  tracks = media.track;
  if (!(tracks != null)) {
    return;
  }
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    track = tracks[_i];
    _ref = this.rendererMap;
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      item = _ref[_j];
      if (!(item.canUseResource(track) === true)) {
        continue;
      }
      renderer = item;
      break;
    }
    if (renderer != null) {
      break;
    }
  }
  this.setRenderer(renderer);
  return renderer;
};

/**
 *
*/
CaptioningProxy.prototype.getTrack = function() {
  return this.track;
};

CaptioningProxy.prototype.setTrack = function(value) {
  this.track = value;
  this.captions = this.track.cues;
  this.activeCaptions = [];
  this.sendNotification(CaptioningNotifications.TRACK_SELECTED, this.track);
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.selectTrackByIndex = function(index) {
  var track;
  if ((0 <= index && index < this.tracks.length)) {
    track = this.tracks[index];
    this.setTrack(track);
  }
  return track;
};

/**
 *
*/
CaptioningProxy.prototype.selectTrackByLanguage = function(lang) {
  var item, track, _i, _len, _ref;
  _ref = this.tracks;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    if (!(item.language === lang)) {
      continue;
    }
    track = item;
    break;
  }
  if (track != null) {
    this.setTrack(track);
  }
  return track;
};

/**
 *
*/
CaptioningProxy.prototype.getHidden = function() {
  return this.hidden;
};

CaptioningProxy.prototype.setHidden = function(value) {
  this.hidden = value;
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.getEnabled = function() {
  return this.enabled;
};

CaptioningProxy.prototype.setEnabled = function(value) {
  this.enabled = value;
  return value;
};

/**
 *
*/
CaptioningProxy.prototype.autoSelectTrack = function() {
  var lang, track, _ref;
  lang = (_ref = this.facade.player.retrieveProxy(LocalizationProxy.NAME)) != null ? _ref.getLanguage() : void 0;
  if (lang != null) {
    lang = lang.split("-").shift();
    track = this.selectTrackByLanguage(lang);
  }
  if (!(track != null)) {
    track = this.tracks[0];
    this.setTrack(track);
  }
  return track;
};

/** 
 * PluginMediator class.
 *   
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function PluginComponentMediator(componentName, componentType, parent, element) {
  PluginComponentMediator.__super__.constructor.call(this, componentName, componentType, parent, element);
}


__extends(PluginComponentMediator, ComponentMediator);


/** @override
*/
PluginComponentMediator.prototype.initializeNotifier = function(key) {
  PluginComponentMediator.__super__.initializeNotifier.call(this, key);
  this.plugin = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.media = this.facade.player.retrieveProxy(MediaProxy.NAME);
};

/**
 * The CaptioningMediator class.
 *
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function CaptioningNativeMediator(viewComponent) {
  CaptioningNativeMediator.__super__.constructor.call(this, viewComponent);
}


__extends(CaptioningNativeMediator, LocalizedMediator);


CaptioningNativeMediator.prototype.video = null;

CaptioningNativeMediator.prototype.index = -1;

CaptioningNativeMediator.prototype.plugin = null;

CaptioningNativeMediator.prototype.parallelement = null;

CaptioningNativeMediator.prototype.paralleltimer = null;

CaptioningNativeMediator.prototype.paddingvalue = 6;

CaptioningNativeMediator.prototype.cueChangeListener = null;

CaptioningNativeMediator.prototype.lineheight = 34;

CaptioningNativeMediator.prototype.playerDefaultHeight = 648;

CaptioningNativeMediator.NAME = CaptioningProxy.TEXT_TRACK_RENDERER;

/**
*/
CaptioningNativeMediator.prototype.getRendererName = function() {
  return "native";
};

/**
*/
CaptioningNativeMediator.prototype.canUseResource = function(resource) {
  var hasNative, type, types, useNative;
  if (!(resource != null)) {
    return false;
  }
  hasNative = document.createElement("video").textTracks != null;
  if (!hasNative) {
    return false;
  }
  types = [Utils.mimeTypes.vtt, Utils.mimeTypes.cea608, Utils.mimeTypes.cea708];
  type = resource.type;
  if (type === types[1] || type === types[2]) {
    return true;
  }
  useNative = /iphone|ipad/.test(Utils.getDevice()) || this.proxy.getUseNative();
  if (!useNative) {
    return false;
  }
  return types.indexOf(resource.type) !== -1;
};

/**
 * @override
*/
CaptioningNativeMediator.prototype.onRegister = function() {
  this.plugin = this.facade.retrieveProxy(CaptioningProxy.NAME);
  this.cueChangeListener = this.cueChange.bind(this);
  if (Utils.getSafariVersion() < 0) {
    this.facade.player.getMediaElement().textTracks.addEventListener("addtrack", this.updateTrack.bind(this));
  }
  this.facade.player.getMediaElement().textTracks.addEventListener("cuechange", this.cueChangeListener);
  if ((this.plugin != null) && (this.plugin.config != null) && !this.plugin.config.hasOwnProperty('useparallelrendering')) {
    this.plugin.config.useparallelrendering = false;
  }
};

/**
 * @override
*/
CaptioningNativeMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.TRACKS_LOADED, Notifications.LOADED_METADATA, Notifications.CAN_PLAY_THROUGH, AdNotifications.BREAK_START];
};

/**
 * @override
*/
CaptioningNativeMediator.prototype.handleNotification = function(notification) {
  var body, crossorigin, element, track, video, _i, _len, _ref;
  body = notification.getBody();
  switch (notification.getName()) {
    case CaptioningNotifications.TRACKS_LOADED:
      this.tracks = body;
      break;
    case CaptioningNotifications.TRACK_SELECTED:
      if (this.facade.player.getMediaElement().textTracks.length) {
        track = this.facade.player.getMediaElement().textTracks[this.index];
      }
      if (track != null) {
        track.mode = "hidden";
      }
      this.index = this.plugin.getTracks().indexOf(body);
      this.lang = body.language;
      this.updateTrack();
      break;
    case CaptioningNotifications.VISIBILITY_CHANGE:
    case Notifications.CAN_PLAY_THROUGH:
      this.updateTrack();
      break;
    case AdNotifications.BREAK_START:
      this.clearCaption();
      break;
    case Notifications.LOADED_METADATA:
      if (!(this.tracks != null)) {
        return;
      }
      video = this.facade.player.getMediaElement();
      crossorigin = this.plugin.getCrossOrigin();
      if (crossorigin != null) {
        video.setAttribute("crossorigin", crossorigin);
      }
      _ref = this.tracks;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        track = _ref[_i];
        if (!(track.type === Utils.mimeTypes.vtt)) {
          continue;
        }
        element = document.createElement("track");
        element.src = track.src;
        if (track.kind != null) {
          element.kind = track.kind;
        }
        if (track.language != null) {
          element.srclang = track.language;
        }
        if (track.label != null) {
          element.label = track.label;
        }
        element["default"] = "default" in track;
        video.appendChild(element);
      }
      this.tracks = null;
  }
};

CaptioningNativeMediator.prototype.updateTrack = function(event) {
  var config, i, track, _i, _len, _ref, _ref1, _ref2;
  config = this.plugin.config;
  _ref = this.facade.player.getMediaElement().textTracks;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    track = _ref[i];
    if (!(/subtitles|captions/.test(track.kind) && (track.language === this.lang || !track.language.length))) {
      continue;
    }
    if (!(track != null)) {
      return;
    }
    this.index = i;
    if (this.getTracksByKind(track.kind).length > 1) {
      this.suppressDupeTracks(track.kind, [1]);
      if (i === 1) {
        track.mode = this.plugin.getHidden() ? "hidden" : "showing";
      }
    }
    if (track.kind === "subtitles") {
      track.mode = "hidden";
    } else {
      if (config.useparallelrendering === false) {
        track.mode = this.plugin.getHidden() ? "hidden" : "showing";
      }
    }
  }
  if (event) {
    if (((_ref1 = event.track) != null ? _ref1.kind : void 0) === "metadata") {
      return;
    }
  }
  if (this.plugin.getHidden()) {
    if ((this.plugin != null) && this.plugin.config.useparallelrendering) {
      if ((this.parallelement != null)) {
        this.parallelement.style.display = "none";
      }
    } else {
      this.clearCaption();
    }
  } else {
    if ((this.plugin != null) && this.plugin.config.useparallelrendering) {
      if ((this.parallelement != null)) {
        this.parallelement.style.display = "inline";
      }
    }
  }
  if ((_ref2 = this.plugin) != null ? _ref2.config.useparallelrendering : void 0) {
    if (!this.parallelement) {
      this.createParallelement();
    }
    if (event) {
      this.useParallelRendering(this.plugin.config.useparallelrendering, event.track);
    } else {
      this.useParallelRendering(this.plugin.config.useparallelrendering);
    }
  }
};

CaptioningNativeMediator.prototype.createParallelement = function() {
  if (this.parallelement) {
    return;
  }
  this.parallelement = document.createElement("div");
  this.parallelement.className = "akamai-caption-container";
  this.viewComponent.appendChild(this.parallelement);
  return this.parallelement;
};

CaptioningNativeMediator.prototype.useParallelRendering = function(value, track) {
  var _ref, _ref1;
  if ((_ref = this.plugin) != null) {
    _ref.config.useparallelrendering = value;
  }
  if (!track && ((_ref1 = this.facade.player.getMediaElement().textTracks) != null ? _ref1.length : void 0)) {
    track = this.facade.player.getMediaElement().textTracks[this.index];
  }
  if (track) {
    if (value === true) {
      if (track.hasCueChangeListener === false || typeof track.hasCueChangeListener === 'undefined') {
        track.hasCueChangeListener = true;
        return track.addEventListener("cuechange", this.cueChangeListener);
      }
    } else {
      track.hasCueChangeListener = false;
      return track.removeEventListener("cuechange", this.cueChangeListener);
    }
  }
};

CaptioningNativeMediator.prototype.cueChange = function(event) {
  var capText, captionTextContainerArray, computedFontSize, cssLh, currentHeight, delay, diff, endtime, i, isPriority, maxCueBottom, percentChanged, shouldScaleFont, starttime, stl, temp, xPos, yPos;
  isPriority = this.proxy.track ? this.proxy.track.kind === event.target.kind : true;
  if (this.plugin.getHidden() || !isPriority) {
    return;
  }
  maxCueBottom = 0;
  shouldScaleFont = false;
  if (this.paralleltimer) {
    clearTimeout(this.paralleltimer);
    this.paralleltimer = null;
  }
  if (this.parallelement) {
    this.parallelement.innerHTML = "";
  }
  captionTextContainerArray = [];
  i = 0;
  while (i < event.target.activeCues.length) {
    if ((new RegExp("^\{\".*}$")).test(event.target.activeCues[i].text)) {
      return;
    }
    this.parallelement.style.display = "inline";
    captionTextContainerArray[i] = document.createElement('div');
    captionTextContainerArray[i].className = 'akamai-caption-text';
    this.viewComponent.getElementsByClassName('akamai-caption-container')[0].appendChild(captionTextContainerArray[i]);
    capText = document.createElement('p');
    captionTextContainerArray[i].appendChild(capText);
    cssLh = window.getComputedStyle(capText).lineHeight.replace("px", "");
    if (cssLh) {
      this.lineheight = cssLh;
    }
    xPos = void 0;
    if (navigator.userAgent.indexOf('Firefox') !== -1) {
      xPos = event.target.activeCues[i].position - 50 + '%';
    } else {
      xPos = event.target.activeCues[i].position + '%';
    }
    yPos = void 0;
    currentHeight = this.facade.player.getMediaElement().getBoundingClientRect().height;
    percentChanged = currentHeight / this.playerDefaultHeight * 100;
    stl = event.target.activeCues[i].snapToLines;
    if (stl !== null && (event.target.activeCues[i].snapToLines === true || typeof stl === 'undefined')) {
      yPos = event.target.activeCues[i].line * (this.lineheight / 100 * percentChanged);
    } else {
      yPos = currentHeight / 100 * event.target.activeCues[i].line * 10;
    }
    if (i > 0 && yPos) {
      diff = this.viewComponent.getElementsByClassName('akamai-caption-container')[0].childNodes[0].offsetHeight - (this.lineheight / 100 * percentChanged);
      yPos = yPos + diff * i;
    }
    yPos = yPos + 'px';
    captionTextContainerArray[i].style.left = xPos;
    captionTextContainerArray[i].style.top = yPos;
    captionTextContainerArray[i].style.textAlign = 'left';
    captionTextContainerArray[i].style.position = 'absolute';
    captionTextContainerArray[i].style.bottom = 'auto';
    captionTextContainerArray[i].style.display = 'inline';
    captionTextContainerArray[i].style.padding = this.paddingvalue + 'px';
    captionTextContainerArray[i].style.width = 'auto';
    captionTextContainerArray[i].style['min-height'] = '0px';
    capText.innerHTML = event.target.activeCues[i].text;
    capText.style.margin = '0px';
    capText.style.display = 'block';
    capText.style.lineHeight = "normal";
    computedFontSize = null;
    try {
      temp = document.createElement('span');
      temp.style.fontSize = JSON.parse(localStorage.getItem("akamai-captioningDefault")).size;
      captionTextContainerArray[i].appendChild(temp);
      computedFontSize = window.getComputedStyle(temp).fontSize.replace("px", "");
      temp = null;
    } catch (_error) {}
    if (computedFontSize) {
      if (shouldScaleFont) {
        computedFontSize = computedFontSize / 100 * percentChanged;
        capText.style.fontSize = computedFontSize + "px";
      }
      maxCueBottom = Math.max(maxCueBottom, (Number(yPos.replace("px", "")) || 0) + captionTextContainerArray[i].getBoundingClientRect().height);
    }
    if (i === event.target.activeCues.length - 1) {
      endtime = event.target.activeCues[i].endTime ? event.target.activeCues[i].endTime : 0;
      starttime = event.target.activeCues[i].startTime ? event.target.activeCues[i].startTime : 0;
      delay = (endtime - starttime) * 1000;
      if (delay > 500) {
        this.paralleltimer = setTimeout(this.clearCaption.bind(this), delay);
      }
    }
    i++;
  }
  if (maxCueBottom > currentHeight) {
    maxCueBottom = maxCueBottom - currentHeight;
    i = 0;
    while (i < captionTextContainerArray.length) {
      captionTextContainerArray[i].style.top = (Number(captionTextContainerArray[i].style.top.replace("px", "")) - maxCueBottom) + "px";
      i++;
    }
  }
};

CaptioningNativeMediator.prototype.clearCaption = function() {
  if (this.paralleltimer) {
    clearTimeout(this.paralleltimer);
    this.paralleltimer = null;
  }
  if (this.parallelement) {
    this.parallelement.innerHTML = "";
  }
};

CaptioningNativeMediator.prototype.getTracksByKind = function(kind) {
  var stracks, track, tracks, _i, _len;
  tracks = this.facade.player.getMediaElement().textTracks;
  stracks = [];
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    track = tracks[_i];
    if (track.kind === kind && track.language === "en") {
      stracks.push(track);
    }
  }
  return stracks;
};

CaptioningNativeMediator.prototype.suppressDupeTracks = function(kind, exclude) {
  var i, track, _i, _len, _ref;
  _ref = this.getTracksByKind(kind);
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    track = _ref[i];
    if (track.kind === kind && track.language === "en") {
      if ((exclude != null) && exclude.includes(i)) {
        continue;
      }
      track.mode = "hidden";
    }
  }
  return i > 0;
};

/**
 * The CaptioningHTMLMediator class.
 *
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function CaptioningHTMLMediator(viewComponent) {
  CaptioningHTMLMediator.__super__.constructor.call(this, null, null, viewComponent, null);
}


__extends(CaptioningHTMLMediator, PluginComponentMediator);


CaptioningHTMLMediator.prototype.componentName = CaptioningProxy.TEXT_TRACK_RENDERER;

CaptioningHTMLMediator.prototype.captionText = null;

CaptioningHTMLMediator.prototype.onRegister = function() {
  CaptioningHTMLMediator.__super__.onRegister.call(this);
  this.settings = this.facade.player._settings.settings.captions || {};
};

/**
*/
CaptioningHTMLMediator.prototype.getRendererName = function() {
  return "html";
};

/**
*/
CaptioningHTMLMediator.prototype.canUseResource = function(resource) {
  var types;
  if (!(resource != null)) {
    return false;
  }
  types = [Utils.mimeTypes.srt, Utils.mimeTypes.ttml, Utils.mimeTypes.vtt];
  return types.indexOf(resource.type) !== -1;
};

/* Get Caption Container Display Height
*/
CaptioningHTMLMediator.prototype.getCaptionDisplayHeight = function() {
  var height, i, length;
  height = 0;
  i = length = this.viewComponent.childNodes.length;
  while (i) {
    --i;
    if (length === 3 && i === 0) {
      break;
    }
    height += Utils.getActualSize(this.viewComponent.childNodes[i]).height;
  }
  return height + "px";
};

/* Scroll Captions
*/
CaptioningHTMLMediator.prototype.scrollCaptions = function(scrollHeight, scrollTop, steps) {
  var scroll, stepSize,
    _this = this;
  if (scrollHeight == null) {
    scrollHeight = this.viewComponent.scrollHeight;
  }
  if (scrollTop == null) {
    scrollTop = this.viewComponent.scrollTop;
  }
  if (steps == null) {
    steps = 20;
  }
  stepSize = (scrollHeight - scrollTop) / steps;
  scroll = function() {
    var _results;
    if (scrollTop < scrollHeight) {
      _this.viewComponent.scrollTop = scrollTop += stepSize;
      return setTimeout(scroll, 20);
    } else {
      _results = [];
      while (_this.viewComponent.childNodes.length > 2) {
        _results.push(_this.viewComponent.removeChild(_this.viewComponent.firstChild));
      }
      return _results;
    }
  };
  scroll();
};

/**
 * @override
*/
CaptioningHTMLMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.CUE_CHANGE, Notifications.CHANGE_MEDIA];
};

/**
 * @override
*/
CaptioningHTMLMediator.prototype.handleNotification = function(notification) {
  var body, captions, child, childNode, cue, i, name, temp, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.CHANGE_MEDIA:
      this.viewComponent.innerHTML = "";
      break;
    case CaptioningNotifications.CUE_CHANGE:
      captions = "";
      for (_i = 0, _len = body.length; _i < _len; _i++) {
        cue = body[_i];
        _ref = this.viewComponent.children;
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          child = _ref[_j];
          if (child.outerHTML.includes(cue.html) && this.settings.scroll === "popout") {
            continue;
          }
        }
        captions += cue.html;
      }
      if (this.settings.scroll === "painton") {
        this.classList.add("captioning-typed");
      } else {
        this.classList.remove("captioning-typed");
      }
      switch (this.settings.scroll) {
        case "popout":
          this.viewComponent.innerHTML = captions;
          break;
        case "rollon":
        case "painton":
          temp = document.createElement("div");
          temp.innerHTML = captions;
          _ref1 = temp.childNodes;
          for (i = _k = 0, _len2 = _ref1.length; _k < _len2; i = ++_k) {
            childNode = _ref1[i];
            if (this.viewComponent.children.length && this.viewComponent.lastChild.innerText.includes(childNode.innerText)) {
              continue;
            }
            this.viewComponent.appendChild(childNode);
          }
          this.viewComponent.style.maxHeight = this.getCaptionDisplayHeight();
          this.scrollCaptions();
      }
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var CaptioningNotifications = {
  VISIBILITY_CHANGE: "captioningvisibilitychange",
  ENABLED: "captioningenabled",
  TRACKS_LOADED: "captioningtracksloaded",
  TRACK_SELECTED: "captioningtrackselected",
  CUE_CHANGE: "captioningcuechange",
  SETTINGS_VISIBILITY_CHANGE: "captioningsettingsvisibility",
  TOGGLE_SETTINGS_VISIBILITY: "togglesettingsvisibility",
  SETTINGS_CHANGE: "captioningsettingschange"
};

function LocalizationConstants() {}

LocalizationConstants.MSG_LIVE = "MSG_LIVE";

LocalizationConstants.MSG_REPLAY = "MSG_REPLAY";

LocalizationConstants.MSG_BUFFERING = "MSG_BUFFERING_TEXT";

LocalizationConstants.MSG_CC = "MSG_CC";

LocalizationConstants.MSG_CC_TITLE = "MSG_CC_TITLE";

LocalizationConstants.MSG_CC_LANGUAGE = "MSG_CC_LANGUAGE";

LocalizationConstants.MSG_CC_PRESETS = "MSG_CC_PRESETS";

LocalizationConstants.MSG_CC_FONT = "MSG_CC_FONT";

LocalizationConstants.MSG_CC_EDGE = "MSG_CC_EDGE";

LocalizationConstants.MSG_CC_SIZE = "MSG_CC_SIZE";

LocalizationConstants.MSG_CC_SCROLL = "MSG_CC_SCROLL";

LocalizationConstants.MSG_CC_COLOR = "MSG_CC_COLOR";

LocalizationConstants.MSG_CC_BACKGROUND = "MSG_CC_BACKGROUND";

LocalizationConstants.MSG_CC_EDGE = "MSG_CC_EDGE";

LocalizationConstants.MSG_CC_WINDOW = "MSG_CC_WINDOW";

LocalizationConstants.MSG_CC_OPACITY = "MSG_CC_OPACITY";

LocalizationConstants.MSG_CC_SHOW_ADVANCED = "MSG_CC_SHOW_ADVANCED";

LocalizationConstants.MSG_CC_HIDE_ADVANCED = "MSG_CC_HIDE_ADVANCED";

LocalizationConstants.MSG_CC_RESET = "MSG_CC_RESET";

LocalizationConstants.MSG_CC_CANCEL = "MSG_CC_CANCEL";

LocalizationConstants.MSG_CC_APPLY = "MSG_CC_APPLY";

LocalizationConstants.MSG_CC_PREVIEW_TEXT = "MSG_CC_PREVIEW_TEXT";

LocalizationConstants.MSG_SECONDS = "MSG_SECONDS";

LocalizationConstants.MSG_RECOMMENDATIONS_TITLE = "MSG_RECOMMENDATIONS_TITLE";

LocalizationConstants.MSG_NEXT_VIDEO = "MSG_NEXT_VIDEO";

LocalizationConstants.MSG_NEXT_AD = "MSG_NEXT_AD";

LocalizationConstants.MSG_TIME_SEPARATOR = "MSG_TIME_SEPARATOR";

LocalizationConstants.MSG_VIEW_ALL = "MSG_VIEW_ALL";

LocalizationConstants.MSG_VIDEO = "MSG_VIDEO";

/** 
 * PluginMediator class.
 *   
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function PluginMediator() {
  PluginMediator.__super__.constructor.call(this);
}


__extends(PluginMediator, OverlayMediator);


/** @override
*/
PluginMediator.prototype.initializeNotifier = function(key) {
  PluginMediator.__super__.initializeNotifier.call(this, key);
  this.plugin = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.media = this.facade.player.retrieveProxy(MediaProxy.NAME);
};

/** @override
*/
PluginMediator.prototype.onRegister = function() {
  PluginMediator.__super__.onRegister.call(this);
  this.facade.viewComponent = this.viewComponent;
};

/**
 * The CaptioningMediator class.
 *
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function CaptioningMediator(viewComponent) {
  CaptioningMediator.__super__.constructor.call(this, viewComponent);
}


__extends(CaptioningMediator, PluginMediator);


CaptioningMediator.prototype.componentName = "captioning";

/**
 * @override
*/
CaptioningMediator.prototype.onRegister = function() {
  var settings;
  CaptioningMediator.__super__.onRegister.call(this);
  settings = this.facade.player.settings.captions;
  this.facade.setHidden(!settings.visible);
  this.captionningStyle = this.create(null, document.getElementsByTagName("head")[0], "style");
  this.captionningStyle.type = "text/css";
  this.applyStyles(settings);
};

/**
 * @override
*/
CaptioningMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED, CaptioningNotifications.TRACK_SELECTED, CaptioningNotifications.SETTINGS_CHANGE];
};

/**
 * @override
*/
CaptioningMediator.prototype.handleNotification = function(notification) {
  var body, note, state;
  body = notification.getBody();
  note = body ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  switch (notification.getName()) {
    case CaptioningNotifications.TRACK_SELECTED:
      state = "cc-embedded";
      note = body.type === "embedded" ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
      break;
    case CaptioningNotifications.VISIBILITY_CHANGE:
      state = "cc-active";
      break;
    case CaptioningNotifications.ENABLED:
      note = body ? Notifications.ADD_CONTROL_STATE : Notifications.REMOVE_CONTROL_STATE;
      state = "cc-enabled";
      if (!body) {
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "cc-active");
      }
      break;
    case CaptioningNotifications.SETTINGS_CHANGE:
      this.applyStyles(body);
      return;
  }
  this.sendNotification(note, state);
};

CaptioningMediator.prototype.applyStyles = function(styles) {
  var backgroundColor, color, containerStyle, edgeType, fontFamily, fontSize, id, windowColor, windowColorValue;
  if (styles.visible != null) {
    this.facade.hidden = !styles.visible;
  }
  fontFamily = "font-family: " + styles.fontFamily + " !important;";
  edgeType = "" + styles.edgeType + " " + styles.edgeColor + " !important;";
  fontSize = "font-size: " + styles.size + " !important;";
  color = "color: " + styles.fontColor + " !important;";
  backgroundColor = "background-color: " + styles.backgroundColor + " !important;";
  windowColor = "background-color: " + styles.windowColor + " !important;";
  containerStyle = "line-height:2.2em;";
  windowColorValue = windowColor.match(/rgba\([^)]+\)/g);
  if ((windowColorValue != null) && windowColorValue instanceof Array && windowColorValue.length > 0) {
    containerStyle = Number(windowColorValue[0].replace(/^.*, (.+)\)/, '$1')) === 0 ? "" : containerStyle;
  }
  id = this.facade.player.viewComponent.id;
  this.captionningStyle.innerHTML = '#' + id + ' .akamai-caption-text { ' + fontFamily + fontSize + edgeType + windowColor + ' } #' + id + ' .akamai-caption-text p { ' + color + backgroundColor + ' } ' + 'video::-webkit-media-text-track-display { ' + windowColor + ' } video::-webkit-media-text-track-display span { ' + fontFamily + fontSize + edgeType + backgroundColor + ' } video::-webkit-media-text-track-display { ' + windowColor + ' } video::cue { ' + color + fontFamily + fontSize + edgeType + backgroundColor + ' } video::-webkit-media-text-track-container {' + containerStyle + '} video::-webkit-media-text-track-display-backdrop { background-color: rgba(0, 0, 0, 0) !important;}';
};

/**
 * The CaptioningWrapper class.
 *
 * @constructor
 * @private
 * @extends {PluginWrapper}
 * @param {FlashPlayer}     player  The FlashPlayer
 * @param {Object}          config  The plugin config
*/
function CaptioningWrapper(player, config) {
  CaptioningWrapper.__super__.constructor.call(this, player, config);
  Object.defineProperties(this, {
    enabled: {
      get: this.getEnabled,
      set: this.setEnabled,
      enumerable: true,
      configurable: false
    },
    hidden: {
      get: this.getHidden,
      set: this.setHidden,
      enumerable: true,
      configurable: false
    },
    visible: {
      get: this.getVisible,
      set: this.setVisible,
      enumerable: true,
      configurable: false
    },
    tracks: {
      get: this.getTracks,
      enumerable: true,
      configurable: false
    },
    track: {
      get: this.getTrack,
      set: this.setTrack,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(CaptioningWrapper, PluginWrapper);


CaptioningWrapper.NAME = "CaptioningWrapper";

CaptioningWrapper.prototype.flashPlugins = [
  {
    id: "AdobeCaptionPlugin",
    src: '#{paths.resources}plugins/AdobeCaptionPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "AdobeCaptionPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "AMPCaptionPlugin",
    src: '#{paths.resources}plugins/AMPCaptionPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "AMPCaptionPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "CaptionSettingsPlugin",
    src: '#{paths.resources}plugins/CaptionSettingsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "CaptionSettingsPlugin",
    type: "application/x-shockwave-flash"
  }
];

CaptioningWrapper.prototype.flashView = {
  elements: {
    captionDisplay: {
      attributes: {
        defaultMessage: "Sorry! No captions available for this stream",
        initState: "cookie",
        position: "relative",
        settingsEnabled: "true",
        style: "bottom: 0px; windowColor :0x000000; windowOpacity: 0; font: Monospaced Serif; fontColor: 0xffffff; fontOpacity: 1; fontBGColor: 0x000000; fontBGOpacity: 0; edgeType: none; edgeColor: 0x000000; edgeOpacity: 1; scroll: Pop-Out; fontSize: 12;"
      }
    },
    controls: {
      elements: {
        captionBtn: {}
      }
    }
  }
};

CaptioningWrapper.prototype._hidden = true;

/** @override
*/
CaptioningWrapper.prototype.createXML = function(xml) {
  var application, player, subply, _ref;
  subply = (_ref = this.config.flash) != null ? _ref.subply : void 0;
  if (subply != null) {
    try {
      if (subply.timeMethod != null) {
        player = xml.getElementsByTagName("player")[0];
        player.setAttribute("subply_time_method", subply.timeMethod);
      }
      if (subply.plugin != null) {
        application = xml.firstChild;
        subply = xml.getElementsByTagName("subply")[0];
        if (!(subply != null)) {
          subply = xml.createElement("subply");
          application.appendChild(subply);
        }
        this.createProperty(xml, "SUBPLY_URL", this.config.flash.subply.plugin, subply);
      }
    } catch (error) {
      this.facade.logger.error("[AMP CAPTIONING ERROR]", error);
    }
  }
};

/** @override
*/
CaptioningWrapper.prototype.createFlashVars = function(flashvars) {
  var captionLangArr, captionUrlArr, config, track, _i, _len, _ref, _ref1;
  config = this.player.config;
  if (((_ref = config.media) != null ? _ref.track : void 0) != null) {
    track = Utils.selectTrack(config.media.track, "captions");
    if ((track.src != null) && track.src !== "") {
      flashvars.caption_url = track.src;
    }
    if (config.media.track.length > 0) {
      captionUrlArr = [];
      captionLangArr = [];
      _ref1 = config.media.track;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        track = _ref1[_i];
        captionUrlArr.push(track.src);
        captionLangArr.push(track.srclang);
      }
      flashvars.caption_url = captionUrlArr.join(",");
      flashvars.caption_language = captionLangArr.join(",");
    }
    flashvars.caption_type = track.type != null ? encodeURIComponent(track.type) : "application/ttml+xml";
  }
  if (flashvars.caption_language == null) {
    flashvars.caption_language = "en-us";
  }
};

/** @override
*/
CaptioningWrapper.prototype.listNotificationInterests = function() {
  return CaptioningWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.MEDIA_CHANGE, FlashNotifications.CAPTIONING_REQUEST, FlashNotifications.CAPTION_LANG_CHANGE, FlashNotifications.INITIALIZED]);
};

/**
*/
CaptioningWrapper.prototype.handleNotification = function(notification) {
  var body, media, name, track, type,
    _this = this;
  CaptioningWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CAPTION_LANG_CHANGE:
      type = "";
      break;
    case FlashNotifications.CAPTIONING_REQUEST:
      type = "visibilitychange";
      body = body.enabled;
      this.hidden = !body;
      break;
    case Notifications.MEDIA_CHANGE:
      media = body;
      if (media.track != null) {
        this._tracks = media.track.map(function(track) {
          return Object.assign({
            language: track.srclang
          }, track);
        });
        track = Utils.selectTrack(this._tracks, "captions");
        if (!(track != null)) {
          return;
        }
        if ((track.src != null) && track.src !== "") {
          media.captioningUrl = track.src;
        }
        if (track.type != null) {
          media.captioningType = track.type || "application/ttml+xml";
        }
        this._track = track;
      }
      break;
    case FlashNotifications.INITIALIZED:
      this.hidden = !this.player.getMediaElement().getPlayerProperty("isCaptionVisible");
  }
  if ((type != null) && type !== "") {
    this.dispatchEvent(new Event(type, body));
  }
};

/**
*/
CaptioningWrapper.prototype.getHidden = function() {
  return this._hidden;
};

CaptioningWrapper.prototype.setHidden = function(value) {
  this._hidden = value;
  this.facade.getMediaElement().setPlayerProperty("captionDisplay", {
    visible: !value
  });
  return value;
};

/**
*/
CaptioningWrapper.prototype.getVisible = function() {
  return !this._hidden;
};

CaptioningWrapper.prototype.setVisible = function(value) {
  this.setHidden(!value);
  return value;
};

/**
 * Returns an array of caption tracks
 *
 * @return {Array.<CaptionTrack>} The list of text tracks.
 * @expose
*/
CaptioningWrapper.prototype.getTracks = function() {
  return this._tracks || [];
};

/**
 * Returns the currently selected track.
 *
 * @return {CaptionTrack} The currently selected caption track.
 * @expose
*/
CaptioningWrapper.prototype.getTrack = function() {
  return this._track;
};

/**
 * Selects a caption track by its index in the getTracks array.
 *
 * @param {number}        index   The index to select
 * @return {CaptionTrack}         The selected caption track.
 * @expose
*/
CaptioningWrapper.prototype.selectTrackByIndex = function(index) {};

/**
 * Selects a caption track by it's language property.
 *
 * @param {string}        lang  The language to select
 * @return {CaptionTrack}       The selected caption track.
 * @expose
*/
CaptioningWrapper.prototype.selectTrackByLanguage = function(lang) {
  this.facade.getMediaElement().setTrackByLanguage(lang);
};

/**
 * Sets a caption Settings Object (styles)
 *
 * @param {Object}  object  The caption settings object.
 * @expose
*/
CaptioningWrapper.prototype.changeSettings = function(object) {
  if (((object != null ? object.fontFamily : void 0) != null) && typeof object.fontFamily === "object") {
    return this.facade.getMediaElement().setPlayerProperty("captionSettingsUI", object);
  }
  if ((object != null ? object.visible : void 0) != null) {
    this.hidden = !object.visible;
  }
  this.facade.getMediaElement().setPlayerProperty("captionDisplay", {
    visible: !this.hidden,
    style: this.parseObject(object)
  });
};

/**
 * Parse Object
 *
*/
CaptioningWrapper.prototype.parseObject = function(object) {
  var flashObject, keyString, prop, _ref;
  flashObject = {};
  try {
    for (prop in object) {
      switch (prop) {
        case "fontFamily":
          flashObject['font'] = object[prop];
          break;
        case "fontColor":
        case "backgroundColor":
        case "edgeColor":
        case "windowColor":
          keyString = prop === "fontColor" ? "font" : prop === "backgroundColor" ? "fontBG" : prop === "edgeColor" ? "edge" : "window";
          if (((_ref = object[prop]) != null ? _ref.indexOf('rgba') : void 0) !== -1) {
            flashObject[keyString + 'Color'] = this.parseRGBA(object[prop]);
            flashObject[keyString + 'Opacity'] = object[prop].replace(/^.*,(.+)\)/, '$1');
          }
          break;
        default:
          flashObject[prop] = object[prop];
      }
    }
    delete flashObject['visible'];
  } catch (error) {
    this.facade.logger.error('Captioning Settings Parse Error', error);
  }
  return flashObject;
};

CaptioningWrapper.prototype.parseRGBA = function(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  if (rgb && rgb.length === 4) {
    return "0x" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
  }
  return "";
};


AMP.registerPlugin("captioning", "flash", CaptioningWrapper);

/** 
 * The Feature class. Acts as a base for features.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function Feature() {
  Feature.__super__.constructor.call(this);
}


__extends(Feature, Plugin);


Feature.NAME = "Feature";

Feature.prototype.featureName = null;

/**
*/
Feature.prototype.getFeatureName = function() {
  return this.featureName;
};

/**
*/
Feature.prototype.registerFeature = function() {
  if (this.getFeatureName() != null) {
    this.player.sendNotification(FeatureNotifications.REGISTER_FEATURE, this);
  }
};

/** @override
*/
Feature.prototype.onRegister = function() {
  this.registerFeature();
  Feature.__super__.onRegister.call(this);
};

/** @override
*/
Feature.prototype.listNotificationPublications = function() {
  return Feature.__super__.listNotificationPublications.call(this).concat([FeatureNotifications.REGISTER_FEATURE]);
};

/** 
 * @constructor
 * @extends {PluginWrapper}
 * @private
*/
function HLSWrapper(player, config) {
  HLSWrapper.__super__.constructor.call(this, player, config);
  Utils.flashTypes.push(Utils.mimeTypes.m3u8);
}


__extends(HLSWrapper, PluginWrapper);


HLSWrapper.NAME = "HLSWrapper";

HLSWrapper.prototype.flashPlugins = [
  {
    id: "flashlsOSMF",
    src: '#{paths.resources}plugins/flashlsOSMF.swf',
    host: "osmf",
    type: "application/x-shockwave-flash"
  }
];


AMP.registerPlugin("hls", "flash", HLSWrapper);

/**
 * HLSPlaybackProxy constructor.
 *
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function HLSPlaybackProxy(config, plugin) {
  this.plugin = plugin;
  HLSPlaybackProxy.__super__.constructor.call(this, config.types, config);
  this.temporalTypes = ["vod", "live", "dvr"];
}


__extends(HLSPlaybackProxy, PlaybackCoreProxy);


HLSPlaybackProxy.prototype.playbackCoreName = "hls";

HLSPlaybackProxy.prototype.player = null;

HLSPlaybackProxy.prototype.hlsConfig = null;

HLSPlaybackProxy.prototype.fragErrorTime = 0;

HLSPlaybackProxy.prototype.timedMedatadata = null;

HLSPlaybackProxy.prototype.currentMedatadata = null;

HLSPlaybackProxy.prototype.id3Track = null;

HLSPlaybackProxy.prototype.manifestParsed = false;

HLSPlaybackProxy.prototype.details = null;

/**
*/
HLSPlaybackProxy.prototype.getUseMAE = function() {
  return HLSPlaybackProxy.__super__.getUseMAE.call(this) && (typeof MediaAccelerationHlsJsWrapper !== "undefined" && MediaAccelerationHlsJsWrapper !== null);
};

HLSPlaybackProxy.prototype.getConfig = function() {
  var config;
  config = Utils.clone(this.config.data);
  if (this.config.withCredentials === true) {
    config.xhrSetup = function(xhr, url) {
      xhr.withCredentials = true;
    };
  }
  config.debug = this.plugin.proxy.getDebug();
  if (!this.getUseMAE()) {
    config.enableSoftwareAES = config.enableSoftwareAES != null ? config.enableSoftwareAES : true;
  }
  return config;
};

/** @override
*/
HLSPlaybackProxy.prototype.load = function() {
  var config, key, player, value, _ref, _ref1,
    _this = this;
  if (this.player != null) {
    this.destroy();
  }
  this.manifestParsed = false;
  config = this.getConfig();
  if (!this.getUseMAE()) {
    player = new Hls(config);
  } else {
    this.facade.mae = new MediaAccelerationHlsJsWrapper(this.config.mae, config);
    player = this.facade.mae.getPlayer();
  }
  player.attachMedia(this.getMediaElement());
  _ref = Hls.Events;
  for (key in _ref) {
    value = _ref[key];
    player.on(value, function(event, data) {
      _this.plugin.dispatcher.dispatchEvent(new Event(event, data));
    });
  }
  player.on(Hls.Events.MANIFEST_PARSED, this.onManifestParsed.bind(this));
  player.on(Hls.Events.ERROR, this.onError.bind(this));
  player.on(Hls.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata.bind(this));
  player.on(Hls.Events.LEVEL_LOADED, this.onLevelLoaded.bind(this));
  player.on(Hls.Events.LEVEL_SWITCHING, this.onLevelSwitching.bind(this));
  player.on(Hls.Events.FRAG_LOADING, this.onFragmentLoadStart.bind(this));
  player.on(Hls.Events.FRAG_LOADED, this.onFragmentLoaded.bind(this));
  try {
    _ref1 = this.config.quality;
    for (key in _ref1) {
      value = _ref1[key];
      player[key] = value;
    }
  } catch (_error) {}
  this.player = player;
  this.details = null;
  HLSPlaybackProxy.__super__.load.call(this);
};

HLSPlaybackProxy.prototype.applySrc = function() {
  this.currentMedatadata = null;
  this.player.loadSource(this.getSrc());
  this.getMediaElement().load();
};

/**
*/
HLSPlaybackProxy.prototype.onManifestParsed = function(event, data) {
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.MANIFEST_PARSED, {
    event: event,
    data: data
  }));
  this.manifestParsed = true;
  this.sendNotification(Notifications.QUALITY_LEVELS_LOADED, data.levels);
  this.player.loadLevel = -1;
};

/**
*/
HLSPlaybackProxy.prototype.onLevelLoaded = function(event, data) {
  var duration;
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.LEVEL_LOADED, {
    event: event,
    data: data
  }));
  this.player.levels[data.level].level = data.level;
  this.sendNotification(Notifications.QUALITY_CHANGE, this.player.levels[data.level]);
  this.details = data.details;
  duration = this.details.totalduration;
  if (duration !== this.data.duration) {
    this.data.duration = this.details.totalduration;
    this.sendNotification(Notifications.CHANGE_DURATION, this.data.duration);
  }
  if (data.details.live === true && this.facade.mediaProxy.getTemporalType() !== "dvr") {
    this.facade.mediaProxy.setTemporalType("live");
  }
};

/**
*/
HLSPlaybackProxy.prototype.onLevelSwitching = function(event, data) {
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.LEVEL_SWITCHING, {
    event: event,
    data: data
  }));
  this.sendNotification(Notifications.QUALITY_CHANGING, this.player.levels[data.level]);
};

/**
*/
HLSPlaybackProxy.prototype.onFragParsingMetadata = function(event, data) {
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.FRAG_PARSING_METADATA, {
    event: event,
    data: data
  }));
};

HLSPlaybackProxy.prototype.onFragmentLoadStart = function(event, data) {
  var bitrate;
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.FRAG_LOADING, {
    event: event,
    data: data
  }));
  bitrate = this.player.levels[data.frag.level].bitrate;
  this.sendNotification(Notifications.FRAGMENT_LOAD_START, bitrate);
};

HLSPlaybackProxy.prototype.onFragmentLoaded = function(event, data) {
  var bitrate;
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event(Hls.Events.FRAG_LOADED, {
    event: event,
    data: data
  }));
  bitrate = this.player.levels[data.frag.level].bitrate;
  this.sendNotification(Notifications.FRAGMENT_LOADED, bitrate);
};

HLSPlaybackProxy.prototype.ontimeupdate = function(event) {
  var ads, inProgress;
  ads = this.facade.ads || {};
  inProgress = (typeof ads.getInProgress === "function" ? ads.getInProgress() : void 0) || ads.inProgress;
  if (inProgress === true) {
    return;
  }
  this.data.currentTime = this.getCurrentTime();
  this.sendNotification(Notifications.TIME_UPDATE, this.data.currentTime);
};

/**
*/
HLSPlaybackProxy.prototype.ondurationchange = function(event) {
  var duration;
  duration = this.getDetails().totalduration;
  if (duration === this.data.duration || duration === 0 || isNaN(duration)) {
    return;
  }
  this.data.duration = duration;
  this.sendNotification(Notifications.CHANGE_DURATION, duration);
};

HLSPlaybackProxy.prototype.getCurrentTime = function() {
  return this.getMediaElement().currentTime - this.getStartTime();
};

HLSPlaybackProxy.prototype.getDetails = function() {
  return this.details || {};
};

HLSPlaybackProxy.prototype.getFragmentDuration = function() {
  return this.getDetails().targetduration;
};

HLSPlaybackProxy.prototype.getUTCStart = function() {
  return this.getDetails().startSN * 10000;
};

HLSPlaybackProxy.prototype.getUTCTime = function() {
  return this.getUTCStart() + (this.getCurrentTime() * 1000);
};

HLSPlaybackProxy.prototype.getUTCEnd = function() {
  return this.getDetails().endSN * 10000;
};

HLSPlaybackProxy.prototype.getStartTime = function() {
  return this.getMediaElement().duration - this.getDuration();
};

/**
*/
HLSPlaybackProxy.prototype.goLive = function() {
  this.setCurrentTime(this.getLiveTime());
};

/**
*/
HLSPlaybackProxy.prototype.getLiveTime = function() {
  return this.getDuration() - this.getFragmentDuration();
};

/**
*/
HLSPlaybackProxy.prototype.isLive = function() {
  return this.getStartTime() + this.getCurrentTime() >= this.getLiveTime();
};

/** @override
*/
HLSPlaybackProxy.prototype.seek = function(value) {
  var _this = this;
  return HLSPlaybackProxy.__super__.seek.call(this, value + this.getStartTime()).then(function(time) {
    if (_this.mediaProxy.getTemporalType() === "dvr") {
      _this.sendNotification(Notifications.IS_LIVE, _this.isLive());
    }
  });
};

/** override
*/
HLSPlaybackProxy.prototype.onplaying = function(event) {
  HLSPlaybackProxy.__super__.onplaying.call(this);
  this.retried = false;
};

/**
*/
HLSPlaybackProxy.prototype.onError = function(event, data) {
  this.plugin.sendNotification(Notifications.DISPATCH_EVENT, new Event("error", {
    event: event,
    data: data
  }));
  if (this.config.ignoreErrors === true) {
    return;
  }
  if (this.config.retryOnError === false || this.retried === true) {
    this.retried = false;
    this.error(data);
    return;
  }
  if (data.fatal && data.type === Hls.ErrorTypes.MEDIA_ERROR && data.details === Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
    data.fatal = false;
  }
  if (data.fatal) {
    switch (data.type) {
      case Hls.ErrorTypes.NETWORK_ERROR:
        this.retried = true;
        if (this.manifestParsed) {
          this.player.startLoad();
        } else {
          this.player.loadSource(this.getSrc());
        }
        this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", event);
        break;
      case Hls.ErrorTypes.MEDIA_ERROR:
        this.retried = true;
        this.player.recoverMediaError();
        this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", event);
        break;
      default:
        this.facade.logger.error("[AMP HLS] Playback Error:", event);
        this.error(data);
    }
  } else {
    if (data.details === Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR) {
      if (this.fragErrorTime === this.getMediaElement().currentTime) {
        this.getMediaElement().currentTime++;
        this.facade.logger.error("[AMP HLS] Frag Loop Load Error, Seeking to :", this.getMediaElement().currentTime);
      } else {
        this.fragErrorTime = this.getMediaElement().currentTime;
      }
    }
  }
};

HLSPlaybackProxy.prototype.error = function(data) {
  switch (data.type) {
    case Hls.ErrorTypes.NETWORK_ERROR:
      data.code = MediaError.MEDIA_ERR_NETWORK;
      break;
    case Hls.ErrorTypes.MEDIA_ERROR:
      data.code = MediaError.MEDIA_ERR_DECODE;
      break;
    default:
      data.toString = function() {
        return data.details;
      };
  }
  this.sendNotification(Notifications.ERROR, data);
};

HLSPlaybackProxy.prototype.createTracks = function() {
  var audio, changeEnabled, count, current, index, item, track, tracks, _i, _len;
  audio = this.player.audioTracks;
  current = this.player.audioTrack;
  tracks = this.facade.tracks.getAudioTracks();
  count = audio.length;
  changeEnabled = function(track, enabled) {
    var _this = this;
    this.facade.tracks.getAudioTracks().forEach(function(track) {
      return track.data.enabled = false;
    });
    if (enabled !== true) {
      return;
    }
    this.facade.tracks.getAudioTracks()[track.id].data.enabled = true;
    this.player.audioTrack = track.id;
  };
  for (index = _i = 0, _len = audio.length; _i < _len; index = ++_i) {
    item = audio[index];
    track = new Track({
      kind: item.type,
      label: item.id,
      language: item.lang,
      id: item.id,
      enabled: item.id === current,
      data: item
    });
    track.changeEnabled = changeEnabled.bind(this, item);
    tracks.add(track, index + 1 === count);
  }
};

/** @override
*/
HLSPlaybackProxy.prototype.setQuality = function(value) {
  var _ref;
  return (_ref = this.player) != null ? _ref.currentLevel = value : void 0;
};

/** @override
*/
HLSPlaybackProxy.prototype.getQuality = function() {
  var level, _ref, _ref1;
  level = (_ref = this.player) != null ? _ref.currentLevel : void 0;
  if (level === -1) {
    level = (_ref1 = this.player) != null ? _ref1.nextLoadLevel : void 0;
  }
  return level;
};

/** @override
*/
HLSPlaybackProxy.prototype.getQualityLevels = function() {
  var _ref;
  return ((_ref = this.player) != null ? _ref.levels : void 0) || HLSPlaybackProxy.__super__.getQualityLevels.call(this);
};

/** @override
*/
HLSPlaybackProxy.prototype.getQualityMode = function() {
  var _ref;
  if (((_ref = this.player) != null ? _ref.autoLevelEnabled : void 0) === true) {
    return "auto";
  } else {
    return "manual";
  }
};

/** @override
*/
HLSPlaybackProxy.prototype.setQualityMode = function(value) {
  var _ref, _ref1, _ref2;
  if (value === "auto") {
    if ((_ref = this.player) != null) {
      _ref.currentLevel = -1;
    }
  } else if (value === "manual") {
    if ((_ref1 = this.player) != null) {
      _ref1.currentLevel = (_ref2 = this.player) != null ? _ref2.currentLevel : void 0;
    }
  } else {
    value += " is not a valid key";
  }
  return value;
};

/** @override
*/
HLSPlaybackProxy.prototype.destroy = function() {
  if (!(this.player != null)) {
    return;
  }
  this.player.destroy();
  this.player = null;
};

/**
 * The HLSAdBreakStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function HLSAdBreakStartCommand() {
  HLSAdBreakStartCommand.__super__.constructor.call(this);
}


__extends(HLSAdBreakStartCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
HLSAdBreakStartCommand.prototype.execute = function(notification) {
  var _ref;
  if (((_ref = notification.getBody()) != null ? _ref.partner : void 0) === "freewheel") {
    this.proxy.destroy();
  }
};

/**
 * @enum {string}
 * @const
 * @private
*/

var AdNotifications = {
  BREAK_START: "adsbreakstart",
  BREAK_END: "adsbreakend",
  BREAK_SKIPPED: "adsbreakskipped",
  AD_CONTAINER_CREATED: "adscontainercreated",
  AD_LOADED: "adsloaded",
  AD_MANAGER_LOADED: "adsmanagerloaded",
  AD_STARTED: "adsstarted",
  AD_TIME_UPDATE: "adstimeupdate",
  AD_TIME_REMAINING: "adstimeremaining",
  AD_DURATION_CHANGE: "adsdurationchange",
  AD_ENDED: "adsended",
  AD_ERROR: "adserror",
  AD_PLAY: "adsplay",
  AD_PAUSE: "adspause",
  AD_PAUSED: "adspaused",
  AD_RESUME: "adsresume",
  AD_CLICKED: "adclicked",
  AD_COMPANION: "adscompanion",
  FIRST_QUARTILE: "adsfirstquartile",
  MIDPOINT: "adsmidpoint",
  THIRD_QUARTILE: "adsthirdquartile",
  COMPLETE: "adscomplete",
  LOG: "adslog",
  REQUEST: "adsrequest",
  REQUEST_COMPLETE: "adsrequestcomplete",
  RESPONSE: "adsresponse",
  SKIPPED: "adsskipped",
  IMPRESSION: "adsimpression"
};

/** 
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function PlaybackPluginProxy(config) {
  PlaybackPluginProxy.__super__.constructor.call(this, config);
}


__extends(PlaybackPluginProxy, PluginProxy);


/** @static
*/
PlaybackPluginProxy.NAME = ModuleProxy.NAME;

PlaybackPluginProxy.prototype.playbackProxy = null;

PlaybackPluginProxy.prototype.createPlaybackProxy = function() {};

PlaybackPluginProxy.prototype.initialize = function() {
  var player;
  this.playbackProxy = this.createPlaybackProxy();
  if (!(this.playbackProxy != null)) {
    return;
  }
  this.sendNotification(Notifications.INITIALIZED);
  player = this.facade.player.retrieveProxy(PlayerProxy.NAME);
  player.registerPlaybackCore(this.playbackProxy);
};

PlaybackPluginProxy.prototype.destroy = function() {
  var _ref;
  if ((_ref = this.playbackProxy) != null) {
    _ref.destroy();
  }
};

/**
 * The HLSProxy class.
 *
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function HLSProxy(config) {
  HLSProxy.__super__.constructor.call(this, config);
}


__extends(HLSProxy, PlaybackPluginProxy);


/** @static
*/
HLSProxy.NAME = ModuleProxy.NAME;

HLSProxy.prototype.defaults = {
  types: ["application/x-mpegURL"],
  data: {
    enableWorker: true,
    enableCEA708Captions: true
  },
  mae: null,
  buffer: null,
  quality: null,
  withCredentials: null,
  retryOnError: true,
  ignoreErrors: false
};

HLSProxy.prototype.createPlaybackProxy = function() {
  var mediaSource;
  mediaSource = window.MediaSource || window.WebKitMediaSource;
  if (!(mediaSource != null) || !Hls.isSupported()) {
    return;
  }
  return new HLSPlaybackProxy(this.getConfigurationData(), this.facade);
};

/**
 * DASHPlaybackProxy constructor.
 *
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function DASHPlaybackProxy(data) {
  DASHPlaybackProxy.__super__.constructor.call(this, data.types, data);
  this.buffer = data.buffer;
  this.temporalTypes = ["vod", "live", "dvr"];
}


__extends(DASHPlaybackProxy, PlaybackCoreProxy);


DASHPlaybackProxy.prototype.playbackCoreName = "dash";

DASHPlaybackProxy.prototype.context = null;

DASHPlaybackProxy.prototype.player = null;

DASHPlaybackProxy.prototype.buffer = null;

/** @override
*/
DASHPlaybackProxy.prototype.resumecomplete = function() {
  var track, tracks, _ref;
  try {
    tracks = (_ref = this.facade.getMediaElement()) != null ? _ref.textTracks : void 0;
    if ((tracks != null ? tracks.length : void 0) !== 0) {
      track = tracks[0];
      if (track != null) {
        track.mode = "hidden";
      }
    }
  } catch (error) {

  }
  DASHPlaybackProxy.__super__.resumecomplete.call(this);
};

DASHPlaybackProxy.prototype.onerror = function() {};

/** @override
*/
DASHPlaybackProxy.prototype.createTracks = function() {
  var audio, changeEnabled, count, current, index, item, track, tracks, _i, _len;
  audio = this.player.getTracksFor("audio");
  current = this.player.getCurrentTrackFor("audio");
  tracks = this.facade.tracks.getAudioTracks();
  count = audio.length;
  changeEnabled = function(audio, track, enabled) {
    var _this = this;
    this.facade.tracks.getAudioTracks().forEach(function(item) {
      return item.data.enabled = item === track;
    });
    if (enabled !== true) {
      return;
    }
    this.player.setCurrentTrack(audio);
  };
  for (index = _i = 0, _len = audio.length; _i < _len; index = ++_i) {
    item = audio[index];
    track = new Track({
      kind: item.roles.join(" "),
      label: item.id,
      language: item.lang,
      id: item.id,
      enabled: item === current,
      data: item
    });
    track.changeEnabled = changeEnabled.bind(this, item, track);
    tracks.add(track, index + 1 === count);
  }
};

/**
*/
DASHPlaybackProxy.prototype.getUseMAE = function() {
  return DASHPlaybackProxy.__super__.getUseMAE.call(this) && (typeof MediaAccelerationDashJsWrapper !== "undefined" && MediaAccelerationDashJsWrapper !== null);
};

/** @override
*/
DASHPlaybackProxy.prototype.load = function() {
  var useMAE, _ref;
  if (!(this.player != null)) {
    useMAE = ((_ref = this.config.mae) != null ? _ref.enabled : void 0) !== false && (typeof MediaAccelerationDashJsWrapper !== "undefined" && MediaAccelerationDashJsWrapper !== null);
    if (!this.getUseMAE()) {
      this.player = dashjs.MediaPlayer().create();
    } else {
      this.facade.mae = new MediaAccelerationDashJsWrapper(this.config.mae);
      this.player = this.facade.mae.getPlayer();
    }
    this.player.enableBufferOccupancyABR(true);
    this.player.on("error", this.onError.bind(this));
    this.player.on("fragmentLoadingStarted", this.onFragmentLoadStart.bind(this));
    this.player.on("fragmentLoadingCompleted", this.onFragmentLoaded.bind(this));
    this.player.on("qualityChangeRequested", this.onLevelSwitching.bind(this));
    this.player.getDebug().setLogToBrowserConsole(this.facade.logger.enabled);
    this.player.initialize(this.getMediaElement(), null, false);
    if (this.config.initialBitrate != null) {
      this.player.setInitialBitrateFor(this.facade.getMedia().medium, this.config.initialBitrate);
    }
  }
  DASHPlaybackProxy.__super__.load.call(this);
};

/** @override
*/
DASHPlaybackProxy.prototype.applySrc = function() {
  var keys;
  keys = this.facade.getMedia().keys;
  if (keys != null) {
    this.player.setProtectionData(keys);
  }
  this.player.attachSource(this.getSrc());
  this.getMediaElement().load();
};

/** @override
*/
DASHPlaybackProxy.prototype.seek = function(value) {
  return Promise.resolve(this.player.seek(value));
};

/** @override
*/
DASHPlaybackProxy.prototype.getCurrentTime = function() {
  var _ref;
  return ((_ref = this.player) != null ? _ref.time() : void 0) || 0;
};

/** @override
*/
DASHPlaybackProxy.prototype.getDuration = function() {
  var _ref;
  return ((_ref = this.player) != null ? _ref.duration() : void 0) || 0;
};

/**
*/
DASHPlaybackProxy.prototype.getStats = function() {
  return {};
};

/**
*/
DASHPlaybackProxy.prototype.onFragmentLoadStart = function(event) {
  var bitrate;
  bitrate = event.request.mediaInfo.bitrateList[event.request.quality].bandwidth;
  this.sendNotification(Notifications.FRAGMENT_LOAD_START, bitrate);
};

/**
*/
DASHPlaybackProxy.prototype.onFragmentLoaded = function(event) {
  var bitrate;
  bitrate = event.request.mediaInfo.bitrateList[event.request.quality].bandwidth;
  this.sendNotification(Notifications.FRAGMENT_LOADED, bitrate);
};

/**
*/
DASHPlaybackProxy.prototype.onLevelSwitching = function(event) {
  this.sendNotification(Notifications.QUALITY_CHANGING, this.getQualityLevels()[event.newQuality]);
};

/**
*/
DASHPlaybackProxy.prototype.onError = function(event) {
  this.facade.logger.error("DASH JS Playback Error:", event);
};

/** @override
*/
DASHPlaybackProxy.prototype.setQuality = function(value) {
  var _ref, _ref1, _ref2;
  if ((_ref = this.player) != null) {
    _ref.setAutoSwitchQualityFor((_ref1 = this.facade.getMedia()) != null ? _ref1.medium : void 0, value === -1);
  }
  if (value === -1) {
    return;
  }
  return (_ref2 = this.player) != null ? _ref2.setQualityFor("video", value) : void 0;
};

/** @override
*/
DASHPlaybackProxy.prototype.getQuality = function() {
  var _ref;
  return (_ref = this.player) != null ? _ref.getQualityFor("video") : void 0;
};

/** @override
*/
DASHPlaybackProxy.prototype.getQualityLevels = function() {
  var _ref;
  return ((_ref = this.player) != null ? _ref.getBitrateInfoListFor("video") : void 0) || DASHPlaybackProxy.__super__.getQualityLevels.call(this);
};

/** @override
*/
DASHPlaybackProxy.prototype.getQualityMode = function() {
  var _ref, _ref1;
  if (((_ref = this.player) != null ? _ref.getAutoSwitchQualityFor((_ref1 = this.facade.getMedia()) != null ? _ref1.medium : void 0) : void 0) === true) {
    return "auto";
  } else {
    return "abr";
  }
};

/** @override
*/
DASHPlaybackProxy.prototype.setQualityMode = function(value) {
  var _ref, _ref1;
  if (value !== "auto") {
    return value + " is not a valid key";
  }
  return (_ref = this.player) != null ? _ref.setAutoSwitchQualityFor((_ref1 = this.facade.getMedia()) != null ? _ref1.medium : void 0, value) : void 0;
};

/** @override
*/
DASHPlaybackProxy.prototype.destroy = function() {
  var _ref;
  if ((_ref = this.player) != null) {
    _ref.reset();
  }
};

/**
 * The CaptioningPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Feature}
*/
function CaptioningPlugin() {
  CaptioningPlugin.__super__.constructor.call(this);
  Object.defineProperties(this, {
    enabled: {
      get: this.getEnabled,
      set: this.setEnabled,
      enumerable: true,
      configurable: false
    },
    hidden: {
      get: this.getHidden,
      set: this.setHidden,
      enumerable: true,
      configurable: false
    },
    visible: {
      get: this.getVisible,
      set: this.setVisible,
      enumerable: true,
      configurable: false
    },
    tracks: {
      get: this.getTracks,
      enumerable: true,
      configurable: false
    },
    track: {
      get: this.getTrack,
      set: this.setTrack,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(CaptioningPlugin, Feature);


CaptioningPlugin.prototype.featureName = "captioning";

CaptioningPlugin.prototype.moduleName = "captioning";

/** @override
*/
CaptioningPlugin.prototype.createController = function() {
  CaptioningPlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.CHANGE_MEDIA, CaptioningChangeMediaCommand);
  this.registerCommand(Notifications.STARTED, CaptioningStartedCommand);
  this.registerCommand(Notifications.TIME_UPDATE, CaptioningTimeUpdateCommand);
  this.registerCommand(CaptioningNotifications.VISIBILITY_CHANGE, CaptioningVisibilityChangeCommand);
  this.registerCommand(CaptioningNotifications.ENABLED, CaptioningEnabledCommand);
  this.registerCommand(CaptioningNotifications.TRACK_SELECTED, PluginEventCommand);
  this.registerCommand(CaptioningNotifications.TRACKS_LOADED, PluginEventCommand);
  this.registerCommand(CaptioningNotifications.CUE_CHANGE, PluginEventCommand);
};

/** @override
*/
CaptioningPlugin.prototype.createModel = function() {
  this.proxy = new CaptioningProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
CaptioningPlugin.prototype.createView = function() {
  var mediator, viewComponent;
  mediator = new CaptioningMediator();
  this.registerMediator(mediator);
  viewComponent = mediator.viewComponent;
  this.proxy.registerRenderer(new CaptioningNativeMediator(viewComponent));
  this.proxy.registerRenderer(new CaptioningHTMLMediator(viewComponent));
};

/**
*/
CaptioningPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.LOADED_METADATA, Notifications.CAN_PLAY_THROUGH, Notifications.CHANGE_MEDIA, Notifications.STARTED, Notifications.TIME_UPDATE, CaptioningNotifications.TRACK_SELECTED];
};

/**
*/
CaptioningPlugin.prototype.listNotificationPublications = function() {
  return CaptioningPlugin.__super__.listNotificationPublications.call(this).concat([CaptioningNotifications.CUE_CHANGE, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.SETTINGS_CHANGE]);
};

/**
 * @return {boolean} The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.getEnabled = function() {
  return this.proxy.getEnabled();
};

/**
 * @param {boolean} value The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.setEnabled = function(value) {
  this.sendNotification(CaptioningNotifications.ENABLED, value);
  return value;
};

/**
 * @return {boolean} The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.getHidden = function() {
  return this.proxy.getHidden();
};

/**
 * @param {boolean} value The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.setHidden = function(value) {
  this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, !value);
  return value;
};

/**
 * @return {boolean} The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.getVisible = function() {
  return !this.proxy.getHidden();
};

/**
 * @param {boolean} value The hidden flag.
 * @expose
*/
CaptioningPlugin.prototype.setVisible = function(value) {
  this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, value);
  return value;
};

/**
 * Returns an array of caption tracks
 *
 * @return {Array.<CaptionTrack>} The list of text tracks.
 * @expose
*/
CaptioningPlugin.prototype.getTracks = function() {
  return this.proxy.getTracks();
};

/**
 * Returns the currently selected track.
 *
 * @return {CaptionTrack} The currently selected caption track.
 * @expose
*/
CaptioningPlugin.prototype.getTrack = function() {
  return this.proxy.getTrack();
};

/**
 * Selects a caption track
 *
 * @param {CaptionTrack} value The caption track to select
 * @expose
*/
CaptioningPlugin.prototype.setTrack = function(value) {
  this.proxy.setTrack(value);
  return value;
};

/**
 * Selects a caption track by its index in the getTracks array.
 *
 * @param {number}        index   The index to select
 * @return {CaptionTrack}         The selected caption track.
 * @expose
*/
CaptioningPlugin.prototype.selectTrackByIndex = function(index) {
  return this.proxy.selectTrackByIndex(index);
};

/**
 * Selects a caption track by it's language property.
 *
 * @param {string}        lang  The language to select
 * @return {CaptionTrack}       The selected caption track.
 * @expose
*/
CaptioningPlugin.prototype.selectTrackByLanguage = function(lang) {
  return this.proxy.selectTrackByLanguage(lang);
};

/**
 * Sets a caption Settings Object (styles)
 *
 * @param {Object}  object  The caption settings object.
 * @expose
*/
CaptioningPlugin.prototype.changeSettings = function(object) {
  this.sendNotification(CaptioningNotifications.SETTINGS_CHANGE, object);
  return object;
};

/**
 * Allows parallel rendering to be toggled
 *
 * @param {value}  number  The value to use.
 * @expose
*/
CaptioningPlugin.prototype.useParallelRendering = function(value) {
  var renderer;
  renderer = this.proxy.getRenderer();
  if (renderer) {
    renderer.useParallelRendering(value);
  }
  return value;
};


AMP.registerPlugin("captioning", "html", CaptioningPlugin);

/**
 * The DASHChangeDisplayStateCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function DASHChangeDisplayStateCommand() {
  DASHChangeDisplayStateCommand.__super__.constructor.call(this);
}


__extends(DASHChangeDisplayStateCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
DASHChangeDisplayStateCommand.prototype.execute = function(notification) {
  var core, fullscreen, playback, proxy, state, target,
    _this = this;
  state = notification.getBody();
  playback = this.facade.retrieveProxy(PlaybackProxy.NAME);
  core = this.facade.getMediaElement();
  if (!(core != null) || !core.webkitSupportsFullscreen) {
    return;
  }
  proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
  proxy.setDisplayState(state);
  fullscreen = {};
  target = this.facade.viewComponent;
  if (target.requestFullscreen != null) {
    fullscreen.enter = function() {
      return target.requestFullscreen();
    };
    fullscreen.exit = function() {
      return document.cancelFullscreen();
    };
    fullscreen.event = "onfullscreenchange";
    fullscreen.element = "fullscreenElement";
  } else if (target.webkitRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.webkitRequestFullScreen();
    };
    fullscreen.exit = function() {
      return document.webkitCancelFullScreen();
    };
    fullscreen.event = "onwebkitfullscreenchange";
    fullscreen.element = "webkitFullscreenElement";
  } else if (target.mozRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.mozRequestFullscreen();
    };
    fullscreen.exit = function() {
      return document.mozCancelFullScreen();
    };
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
  } else if (target.msRequestFullScreen != null) {
    fullscreen.enter = function() {
      return target.msRequestFullscreen();
    };
    fullscreen.exit = function() {
      return document.msCancelFullScreen();
    };
    fullscreen.event = "onmozfullscreenchange";
    fullscreen.element = "mozFullscreenElement";
  }
  if (state === DisplayState.FULL_SCREEN) {
    fullscreen.enter();
    if (fullscreen.event != null) {
      core[fullscreen.event] = function(event) {
        if (!(document[fullscreen.element] != null)) {
          return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
        }
      };
    }
  } else if (state === DisplayState.NORMAL) {
    fullscreen.exit();
    core[fullscreen.event] = null;
  }
  this.facade.dispatchEvent(new Event("fullscreenchange", state === DisplayState.FULL_SCREEN));
};

/** 
 * The DASHProxy class.
 *   
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function DASHProxy(config) {
  DASHProxy.__super__.constructor.call(this, config);
}


__extends(DASHProxy, PlaybackPluginProxy);


/** @static
*/
DASHProxy.NAME = ModuleProxy.NAME;

DASHProxy.prototype.defaults = {
  types: ["application/dash+xml"],
  buffer: null,
  mae: null,
  initialBitrate: null
};

DASHProxy.prototype.createPlaybackProxy = function() {
  var mediaSource;
  mediaSource = window.MediaSource || window.WebKitMediaSource;
  if (!(mediaSource != null)) {
    return;
  }
  return new DASHPlaybackProxy(this.getConfigurationData());
};

/**
 * The AMPChromeCastPlayer class.
 *
 * @param {Object} player
 *    The player instance
 *
 * @constructor
*/
function ChromeCastPlayer(shim) {
  var index, rule, sheet, style;
  this.shim = shim;
  ChromeCastPlayer.__super__.constructor.call(this);
  this.state = cast.receiver.media.PlayerState.IDLE;
  try {
    style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);
    sheet = style.sheet;
    rule = ".akamai-html5.akamai-video::cue {color: #FFFFFF; background: #000000; visibility: hidden;}";
    index = sheet.insertRule(rule, 0);
    this.cssRule = sheet.rules[index];
  } catch (error) {
    Logger.error(error);
  }
}


__extends(ChromeCastPlayer, EventDispatcher);


ChromeCastPlayer.prototype.player = null;

ChromeCastPlayer.prototype.callbackMap = null;

ChromeCastPlayer.prototype.state = null;

ChromeCastPlayer.prototype.activeTrackId = null;

ChromeCastPlayer.prototype.cssRule = null;

ChromeCastPlayer.prototype.textTrackStyle = null;

ChromeCastPlayer.prototype.ccHandler = null;

ChromeCastPlayer.prototype.feed = null;

ChromeCastPlayer.prototype.media = null;

ChromeCastPlayer.prototype.tracks = null;

/**
 *
*/
ChromeCastPlayer.prototype.registerPlayer = function(player) {
  var events, listener, readyHandler,
    _this = this;
  this.player = player;
  events = ["loadedmetadata", "ended", "error"];
  listener = this.dispatchEvent.bind(this);
  events.forEach(function(type) {
    return player.addEventListener(type, listener);
  });
  readyHandler = function() {
    _this.applyMedia();
    _this.applyClassName();
  };
  this.player.once("ready", readyHandler);
  this.player.addEventListener("playing", this.setState.bind(this, cast.receiver.media.PlayerState.PLAYING));
  this.player.addEventListener("pause", this.setState.bind(this, cast.receiver.media.PlayerState.PAUSED));
  this.player.addEventListener("waiting", this.setState.bind(this, cast.receiver.media.PlayerState.BUFFERING));
};

/**
 * @private
*/
ChromeCastPlayer.prototype.setState = function(state) {
  if (state === this.state) {
    return;
  }
  this.state = state;
  this.shim.mediaManager.broadcastStatus(true);
  return state;
};

/**
 * Registers an API that the player should call when there is an error.
 *
 * @param {function(Object)} errorCallback
 *    The callback method called when the player has an error.
*/
ChromeCastPlayer.prototype.registerErrorCallback = function(errorCallback) {
  this.onerror = errorCallback;
};

/**
 * Registers an API that the player should call when the media has ended.
 *
 * @param {function()} endedCallback
 *    The callback method called when the player has ended.
*/
ChromeCastPlayer.prototype.registerEndedCallback = function(endedCallback) {
  this.onended = endedCallback;
};

/**
 * Registers an API that the player should call when load is complete.
 *
 * @param {function()} loadCallback
 *    The callback method called when the player has completed load succesfully.
*/
ChromeCastPlayer.prototype.registerLoadCallback = function(loadCallback) {
  this.onloadedmetadata = loadCallback;
};

/**
 * Called to unregister for error callbacks.
*/
ChromeCastPlayer.prototype.unregisterErrorCallback = function() {
  this.onerror = null;
};

/**
 * Called to unregister for ended callbacks.
*/
ChromeCastPlayer.prototype.unregisterEndedCallback = function() {
  this.onended = null;
};

/**
 * Called to unregister for load callbacks.
*/
ChromeCastPlayer.prototype.unregisterLoadCallback = function() {
  this.onloadedmetadata = null;
};

/**
 * Loads content to be played.
 *
 * @param {string} contentId
 *    The content ID. Should be treated as an opaque string.
 *
 * @param {boolean} autoplay
 *    Whether the content should play after load.
 *
 * @param {number} opt_time
 *    The expected current time after load (in seconds). Optional.
 *
 * @param {cast.receiver.media.TracksInfo} opt_tracksInfo
 *    The tracks information. Optional.
*/
ChromeCastPlayer.prototype.load = function(contentId, autoplay, opt_time, opt_tracksInfo) {
  var customData, info, key, media, metadata, value, _ref, _ref1, _ref2;
  info = this.shim.mediaManager.getMediaInformation();
  customData = info.customData || {};
  metadata = info.metadata || {};
  if (opt_tracksInfo != null) {
    this.editTracksInfo(opt_tracksInfo);
  } else {
    this.activeTrackId = null;
  }
  this.feed = null;
  media = {
    src: contentId,
    type: info.contentType,
    title: metadata.title,
    poster: (_ref = metadata.images) != null ? _ref.url : void 0,
    description: metadata.subtitle,
    pubDate: new Date(info.releaseDate),
    metadata: customData,
    duration: info.duration,
    startTime: opt_time || ((_ref1 = customData.media) != null ? _ref1.startTime : void 0),
    autoplay: autoplay
  };
  if (customData.media != null) {
    _ref2 = customData.media;
    for (key in _ref2) {
      value = _ref2[key];
      if (!(media[key] != null)) {
        media[key] = value;
      }
    }
  }
  this.tracks = info.tracks;
  this.media = media;
  this.applyMedia();
};

/**
 *
*/
ChromeCastPlayer.prototype.applyMedia = function() {
  if (!(this.player != null) || !(this.media != null)) {
    return;
  }
  this.player.once("loadedmetadata", this.loadTracks.bind(this, this.tracks));
  this.player.setMedia(this.media);
  this.setState(cast.receiver.media.PlayerState.BUFFERING);
};

/**
 *
*/
ChromeCastPlayer.prototype.loadTracks = function(tracks, event) {
  var playbackCore, track, type;
  if ((tracks != null ? tracks.length : void 0) > 0) {
    track = this.getTrack(0);
    if (track != null) {
      type = /ttml/.test(track.trackContentType) ? "ttml" : track.trackContentType;
      playbackCore = this.player.retrieveProxy("PlayerProxy").getActivePlaybackCore();
      playbackCore.player.enableCaptions(true, type, track.trackContentId);
    }
  }
};

/**
 *
*/
ChromeCastPlayer.prototype.mediachangeHandler = function(event) {
  var media, mediaInfo;
  media = this.player.getMedia();
  mediaInfo = new cast.receiver.media.MediaInformation();
  mediaInfo.contentId = media.src;
  mediaInfo.contentType = media.type;
  mediaInfo.customData = media.metadata;
  mediaInfo.duration = media.duration;
  mediaInfo.metadata = {
    title: media.title,
    subtitle: media.description,
    images: [
      {
        url: media.poster
      }
    ],
    releaseDate: media.pubDate.toISOString()
  };
  this.media = media;
  this.shim.mediaManager.setMediaInformation(mediaInfo, true);
};

/**
 * Resets the player.
*/
ChromeCastPlayer.prototype.reset = function() {};

/**
 * Starts playback.
*/
ChromeCastPlayer.prototype.play = function() {
  this.player.play();
};

/**
 * Sets playback to start at a new time position.
 *
 * @param {number} time
 *    The expected current time after seek (in seconds).
 *
 * @param {cast.receiver.media.SeekResumeState} opt_resumeState
 *    The expected state after seek. Optional.
*/
ChromeCastPlayer.prototype.seek = function(time, opt_resumeState) {
  this.player.setCurrentTime(time);
  switch (opt_resumeState) {
    case cast.receiver.media.SeekResumeState.PLAYBACK_PAUSE:
      this.player.pause();
      break;
    case cast.receiver.media.SeekResumeState.PLAYBACK_START:
      this.player.play();
  }
};

/**
 * Pauses playback.
*/
ChromeCastPlayer.prototype.pause = function() {
  return this.player.pause();
};

/**
 * Provides the state of the player.
 *
 * @return {cast.receiver.media.PlayerState
 *    The current state of the player
*/
ChromeCastPlayer.prototype.getState = function() {
  return this.state;
};

/**
 * Provides the current time of the media in seconds.
 *
 * @return {number
 *    The current time of the video, in seconds.
*/
ChromeCastPlayer.prototype.getCurrentTimeSec = function() {
  if (this.player != null) {
    return this.player.getCurrentTime();
  } else {
    return 0;
  }
};

/**
 * Provides the duration of the media in seconds.
 *
 * @return {number
 *    Duration of the video, in seconds.
*/
ChromeCastPlayer.prototype.getDurationSec = function() {
  if (this.player != null) {
    return this.player.getDuration();
  } else {
    return 0;
  }
};

/**
 * Provides the stream volume.
 *
 * @return {cast.receiver.media.Volume
 *    The media volume
*/
ChromeCastPlayer.prototype.getVolume = function() {
  var volume;
  if (!(this.player != null)) {
    return;
  }
  volume = new cast.receiver.media.Volume();
  volume.level = this.player.getVolume();
  volume.muted = this.player.getMuted();
  return volume;
};

/**
 * Sets the stream volume.
 *
 * @param {cast.receiver.media.Volume} volume
 *    New volume
*/
ChromeCastPlayer.prototype.setVolume = function(volume) {
  if (volume.level != null) {
    this.player.setVolume(volume.level);
  }
  if (volume.muted === true) {
    this.player.setMuted(true);
  } else {
    if (this.player.getMuted() === true) {
      this.player.setMuted(false);
    }
  }
  return volume;
};

/**
 * Allows to edit the tracks information (active tracks and style).
 *
 * @param {cast.receiver.MediaManager.EditTracksInfoData} data
 *    The tracks information. The tracks definition can not change so
 *    the tracks field will be undefined (and should be ignored).
*/
ChromeCastPlayer.prototype.editTracksInfo = function(data) {
  var activeTrack, style;
  if (data.activeTrackIds != null) {
    activeTrack = data.activeTrackIds[0];
    if (this.activeTrackId !== activeTrack) {
      this.activeTrackId = activeTrack;
      this.applyClassName();
    }
  }
  style = data.textTrackStyle;
  if ((style != null) && (this.cssRule != null)) {
    this.textTrackStyle = style;
    if (style.foregroundColor != null) {
      this.cssRule.style.color = this.hexToRgba(style.foregroundColor);
    }
    if (style.backgroundColor != null) {
      this.cssRule.style.backgroundColor = this.hexToRgba(style.backgroundColor);
    }
    if (style.windowType === cast.receiver.media.TextTrackWindowType.ROUNDED_CORNERS) {
      this.cssRule.style.borderRadius = style.windowRoundedCornerRadius + "px";
    }
    if (style.fontScale != null) {
      this.cssRule.style.fontSize = style.fontScale + "em";
    }
    if (style.fontFamily != null) {
      this.cssRule.style.fontFamily = style.fontFamily;
    }
  }
};

ChromeCastPlayer.prototype.applyClassName = function(hex) {
  var classList, className;
  if (!(this.player != null)) {
    return;
  }
  className = "akamai-cc";
  classList = this.player.getMediaElement().classList;
  if (this.activeTrackId != null) {
    classList.add(className);
  } else {
    classList.remove(className);
  }
};

ChromeCastPlayer.prototype.hexToRgba = function(hex) {
  var a, b, g, r;
  if (!/^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$/.test(hex)) {
    return hex;
  }
  r = parseInt(hex.substring(1, 3), 16);
  g = parseInt(hex.substring(3, 5), 16);
  b = parseInt(hex.substring(5, 7), 16);
  a = hex.length === 9 ? parseInt(hex.substring(7, 9), 16) / 256 : 1;
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
};

ChromeCastPlayer.prototype.getTrack = function(id) {
  var track;
  if (!(id != null)) {
    id = this.activeTrackId;
  }
  track = this.tracks.filter(function(item) {
    return item.trackId === id;
  })[0];
  if (track != null) {
    if (!(track.trackContentType != null)) {
      track.trackContentType = cast.player.api.CaptionsType.CEA608;
    }
  }
  return track;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ChromeCastConstants = {
  CHANNEL_ID: "urn:x-cast:com.akamai.amp.cast",
  APPLICATION_ID: "CC1AD845",
  SUPPORTED_TYPES: [Utils.mimeTypes.m3u8, Utils.mimeTypes.mp4, Utils.mimeTypes.mpd, Utils.mimeTypes.ism, Utils.mimeTypes.webm, Utils.mimeTypes.mp3]
};

/**
 * The ChromeCastSenderProxy class.
 *
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ChromeCastSenderProxy(config) {
  this.messageBus = config.messageBus || ChromeCastConstants.CHANNEL_ID;
  ChromeCastSenderProxy.__super__.constructor.call(this, config.sender);
}


__extends(ChromeCastSenderProxy, PluginProxy);


/** @static
*/
ChromeCastSenderProxy.NAME = ModuleProxy.NAME;

ChromeCastSenderProxy.prototype.defaults = {
  applicationID: ChromeCastConstants.APPLICATION_ID
};

ChromeCastSenderProxy.prototype.session = null;

ChromeCastSenderProxy.prototype.media = null;

ChromeCastSenderProxy.prototype.messageBus = null;

ChromeCastSenderProxy.prototype.feed = null;

ChromeCastSenderProxy.prototype.currentTime = null;

ChromeCastSenderProxy.prototype.duration = null;

ChromeCastSenderProxy.prototype.receiverAvailable = false;

ChromeCastSenderProxy.prototype.currentTime = 0;

ChromeCastSenderProxy.prototype.duration = 0;

ChromeCastSenderProxy.prototype.playerState = null;

ChromeCastSenderProxy.prototype.displayTimeTimeout = null;

/** @override
*/
ChromeCastSenderProxy.prototype.initialize = function() {
  var _ref,
    _this = this;
  if (typeof chrome !== "undefined" && chrome !== null ? (_ref = chrome.cast) != null ? _ref.isAvailable : void 0 : void 0) {
    this.initializeCastApi();
  } else {
    window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
      if (loaded === true) {
        _this.initializeCastApi();
      } else {
        _this.logError("cast load error", errorInfo);
      }
    };
  }
};

ChromeCastSenderProxy.prototype.initializeCastApi = function() {
  var apiConfig, applicationID, sessionRequest;
  applicationID = this.getConfigurationData().applicationID;
  sessionRequest = new chrome.cast.SessionRequest(applicationID);
  apiConfig = new chrome.cast.ApiConfig(sessionRequest, this.sessionListener.bind(this), this.receiverListener.bind(this), chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
  chrome.cast.initialize(apiConfig, this.onInitSuccess.bind(this), this.onInitError.bind(this));
};

ChromeCastSenderProxy.prototype.onInitSuccess = function(event) {
  this.logEvent("init success", event);
};

ChromeCastSenderProxy.prototype.onInitError = function(event) {
  this.logError("init error", event);
};

ChromeCastSenderProxy.prototype.receiverListener = function(event) {
  this.receiverAvailable = event === 'available';
  this.sendNotification(ChromeCastNotifications.AVAILABILITY_CHANGE, this.receiverAvailable);
  this.logEvent("receiver " + (this.receiverAvailable ? "found" : "list empty"));
};

ChromeCastSenderProxy.prototype.sessionListener = function(event) {
  var session;
  this.logEvent("session listener", event);
  session = event;
  if (session.media.length !== 0) {
    this.onMediaDiscovered(session.media[0]);
  } else {
    this.onRequestSessionSuccess(event);
  }
};

ChromeCastSenderProxy.prototype.launch = function() {
  chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this), this.onLaunchError.bind(this));
};

ChromeCastSenderProxy.prototype.send = function(msg) {
  var _ref;
  if ((_ref = this.session) != null) {
    if (typeof _ref.sendMessage === "function") {
      _ref.sendMessage(this.messageBus, msg, this.onMessageSuccess.bind(this), this.onMessageError.bind(this));
    }
  }
};

ChromeCastSenderProxy.prototype.onLaunchError = function(event) {
  this.logError("launch error.", event);
};

ChromeCastSenderProxy.prototype.onRequestSessionSuccess = function(event) {
  var playbackProxy;
  this.logEvent("request session success.", event);
  this.session = event;
  this.session.addMessageListener(this.messageBus, this.onMessage.bind(this));
  this.session.addUpdateListener(this.onUpdate.bind(this));
  this.session.sendMessage(this.messageBus, {
    type: "createPlayer"
  }, this.onCreateSucess.bind(this), this.onMessageError.bind(this));
  playbackProxy = this.facade.player.retrieveProxy(PlaybackProxy.NAME);
  if (this.session.media.length === 0) {
    this.loadMedia(playbackProxy.getCurrentTime());
  }
};

ChromeCastSenderProxy.prototype.onUpdate = function(isAlive) {
  if (!isAlive) {
    this.sendNotification(Notifications.CHANGE_PLAYBACK_TARGET, "amp");
    this.stopDisplayTimeUpdate();
  }
};

ChromeCastSenderProxy.prototype.onCreateSucess = function(event) {
  this.logEvent("MPL created", event);
  this.sendNotification(Notifications.CHANGE_PLAYBACK_TARGET, "chromecast");
};

ChromeCastSenderProxy.prototype.onMessageSuccess = function(event) {
  this.logEvent("message sent", event);
};

ChromeCastSenderProxy.prototype.onMessageError = function(event) {
  this.logError("message error", event);
};

ChromeCastSenderProxy.prototype.onMessage = function(namespace, message) {
  var detail, target, type;
  message = JSON.parse(message);
  type = message.type;
  detail = message.detail || {};
  switch (type) {
    case "dispatchevent":
      target = detail.target === "player" ? this.facade.player : this.facade.player[detail.target];
      if (target != null) {
        target.dispatchEvent(detail.event);
      }
  }
  this.sendNotification(Notifications.DISPATCH_EVENT, {
    type: "message",
    message: message
  });
};

ChromeCastSenderProxy.prototype.onStop = function(event) {
  this.logEvent("stop");
  this.session.stop(this.onStopSuccess.bind(this), this.onStopError.bind(this));
};

ChromeCastSenderProxy.prototype.onStopSuccess = function(event) {
  this.logEvent("stop success", event);
};

ChromeCastSenderProxy.prototype.onStopError = function(event) {
  this.logError("stop error", event);
};

ChromeCastSenderProxy.prototype.logEvent = function(message, data) {
  if (message == null) {
    message = data.type || "";
  }
  this.facade.logger.log("[AMP CHROMECAST] " + message, data);
};

ChromeCastSenderProxy.prototype.logError = function(message, data) {
  this.facade.logger.error("[AMP CHROMECAST ERROR] " + message, data);
};

ChromeCastSenderProxy.prototype.loadMedia = function(startTime) {
  var media, receiverCanPlay, request, source;
  if (startTime == null) {
    startTime = 0;
  }
  media = this.facade.player.retrieveProxy(MediaProxy.NAME).getData();
  if (!(media != null)) {
    return;
  }
  receiverCanPlay = function(type) {
    if (ChromeCastConstants.SUPPORTED_TYPES.indexOf(type) > -1) {
      return "maybe";
    } else {
      return "";
    }
  };
  source = Utils.selectSource(media.source, receiverCanPlay);
  if (!(source != null)) {
    return;
  }
  request = this.mediaToLoadRequest(media, source, startTime, {
    media: media
  });
  this.session.loadMedia(request, this.onMediaDiscovered.bind(this), this.onMediaError.bind(this));
};

ChromeCastSenderProxy.prototype.mediaToLoadRequest = function(media, source, startTime, customData) {
  var index, mediaInfo, metadata, request, track, value, _i, _len, _ref, _ref1, _ref2;
  metadata = new chrome.cast.media.GenericMediaMetadata();
  metadata.title = media.title;
  metadata.subtitle = media.description;
  metadata.image = [new chrome.cast.Image(media.poster)];
  metadata.releaseDate = (_ref = media.pubDate) != null ? typeof _ref.toISOString === "function" ? _ref.toISOString() : void 0 : void 0;
  mediaInfo = new chrome.cast.media.MediaInfo(source.src, source.type);
  mediaInfo.duration = media.duration;
  mediaInfo.customData = customData;
  mediaInfo.metadata = metadata;
  if (((_ref1 = media.track) != null ? _ref1.length : void 0) > 0) {
    mediaInfo.tracks = [];
    _ref2 = media.track;
    for (index = _i = 0, _len = _ref2.length; _i < _len; index = ++_i) {
      value = _ref2[index];
      track = new chrome.cast.media.Track(index, chrome.cast.media.TrackType.TEXT);
      track.subtype = chrome.cast.media.TextTrackType.CAPTIONS;
      track.name = "Closed Captions";
      track.language = value.srclang;
      track.customData = value;
      track.trackContentId = value.src;
      track.trackContentType = value.type;
      mediaInfo.tracks.push(track);
    }
  }
  request = new chrome.cast.media.LoadRequest(mediaInfo);
  request.currentTime = startTime;
  return request;
};

ChromeCastSenderProxy.prototype.onMediaDiscovered = function(media) {
  if (this.media != null) {
    this.media.removeUpdateListener(this.mediaStatusUpdate);
  }
  this.media = media;
  this.mediaStatusUpdate = this.onMediaStatusUpdate.bind(this);
  this.media.addUpdateListener(this.mediaStatusUpdate);
  this.sendNotification(Notifications.CHANGE_PLAYBACK_TARGET, "chromecast");
};

ChromeCastSenderProxy.prototype.onMediaStatusUpdate = function(status) {
  this.logEvent("mediastatusupdate", status);
  this.updatePlayerState(this.media.playerState);
  this.updateDisplayTime();
  if (status === false) {
    this.stopDisplayTimeUpdate();
  }
};

ChromeCastSenderProxy.prototype.updatePlayerState = function(playerState) {
  var state;
  if (playerState === this.playerState) {
    return;
  }
  this.playerState = playerState;
  switch (this.playerState) {
    case chrome.cast.media.PlayerState.BUFFERING:
      state = PlayState.WAITING;
      break;
    case chrome.cast.media.PlayerState.PLAYING:
      state = PlayState.PLAYING;
      break;
    case chrome.cast.media.PlayerState.PAUSED:
      state = PlayState.PAUSED;
  }
  this.sendNotification(Notifications.CHANGE_PLAY_STATE, state);
  if (this.playerState === chrome.cast.media.PlayerState.PLAYING) {
    this.startDisplayTimeUpdate();
  } else {
    this.stopDisplayTimeUpdate();
  }
};

ChromeCastSenderProxy.prototype.startDisplayTimeUpdate = function() {
  this.stopDisplayTimeUpdate();
  this.displayTimeTimeout = setInterval(this.updateDisplayTime.bind(this), 100);
};

ChromeCastSenderProxy.prototype.stopDisplayTimeUpdate = function() {
  clearInterval(this.displayTimeTimeout);
  this.displayTimeTimeout = null;
};

ChromeCastSenderProxy.prototype.updateDisplayTime = function() {
  var currentTime, duration, _ref;
  currentTime = this.media.getEstimatedTime() || 0;
  duration = ((_ref = this.media.media) != null ? _ref.duration : void 0) || currentTime;
  if (duration !== this.duration) {
    this.duration = duration;
    this.sendNotification(Notifications.CHANGE_DURATION, this.duration);
    return;
  }
  if (currentTime !== this.currentTime) {
    this.currentTime = currentTime;
    this.sendNotification(Notifications.DISPLAY_TIME, {
      currentTime: this.currentTime,
      duration: this.duration
    });
  }
};

ChromeCastSenderProxy.prototype.onMediaError = function(error) {
  this.logError("media error", error);
  this.stopDisplayTimeUpdate();
};

ChromeCastSenderProxy.prototype.play = function() {
  this.media.play();
};

ChromeCastSenderProxy.prototype.pause = function() {
  this.media.pause();
};

ChromeCastSenderProxy.prototype.setCurrentTime = function(time) {
  var request;
  request = new chrome.cast.media.SeekRequest();
  request.currentTime = time;
  this.media.seek(request);
};

ChromeCastSenderProxy.prototype.getCurrentTime = function() {
  return this.currentTime;
};

ChromeCastSenderProxy.prototype.isReceiverAvailable = function() {
  return this.receiverAvailable;
};

/**
 * The ChromeCastLaunchCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastLaunchCommand() {
  ChromeCastLaunchCommand.__super__.constructor.call(this);
}


__extends(ChromeCastLaunchCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastLaunchCommand.prototype.execute = function(notification) {
  this.proxy.launch();
};

/**
 * The ChromeCastCaptioningVisibilityChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastCaptioningVisibilityChangeCommand() {
  ChromeCastCaptioningVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastCaptioningVisibilityChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastCaptioningVisibilityChangeCommand.prototype.execute = function(notification) {
  this.proxy.send({
    type: "captioning.visibilitychange",
    detail: {
      visibility: notification.getBody()
    }
  });
};

/**
 * The ChromeCastCaptioningSettingsChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastCaptioningSettingsChangeCommand() {
  ChromeCastCaptioningSettingsChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastCaptioningSettingsChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastCaptioningSettingsChangeCommand.prototype.execute = function(notification) {
  this.proxy.send({
    type: "captioning.settingschange",
    detail: notification.getBody()
  });
};

/**
 * The ChromeCastReceiverReadyCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastReceiverReadyCommand() {
  ChromeCastReceiverReadyCommand.__super__.constructor.call(this);
}


__extends(ChromeCastReceiverReadyCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastReceiverReadyCommand.prototype.execute = function(notification) {
  this.facade.player.getViewComponent().hidden = false;
  this.proxy.ready();
};

/**
 * The ChromeCastBreakStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastBreakStartCommand() {
  ChromeCastBreakStartCommand.__super__.constructor.call(this);
}


__extends(ChromeCastBreakStartCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastBreakStartCommand.prototype.execute = function(notification) {
  var playbackCore;
  this.facade.logger.debug("ChromeCastBreakStartCommand");
  playbackCore = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  if (playbackCore.getPlaybackCoreName() === "chromecast") {
    playbackCore.unload();
    playbackCore.src = null;
  }
};

/**
 * ChromeCastPlaybackProxy constructor.
 *
 * @constructor
 * @private
 * @extends {PlaybackCoreProxy}
*/
function ChromeCastPlaybackProxy(types, receiver) {
  this.receiver = receiver;
  ChromeCastPlaybackProxy.__super__.constructor.call(this, types);
}


__extends(ChromeCastPlaybackProxy, PlaybackCoreProxy);


ChromeCastPlaybackProxy.prototype.initialized = true;

ChromeCastPlaybackProxy.prototype.player = null;

ChromeCastPlaybackProxy.prototype.host = null;

ChromeCastPlaybackProxy.prototype.protocol = null;

ChromeCastPlaybackProxy.prototype.playbackCoreName = "chromecast";

ChromeCastPlaybackProxy.prototype.manifest = null;

ChromeCastPlaybackProxy.prototype.xhr = null;

ChromeCastPlaybackProxy.prototype.trackInfo = null;

ChromeCastPlaybackProxy.prototype.receiver = null;

/**
 * @override
 * @private
*/
ChromeCastPlaybackProxy.prototype.reset = function() {
  ChromeCastPlaybackProxy.__super__.reset.call(this);
  this.xhr = null;
  this.manifest = null;
};

ChromeCastPlaybackProxy.prototype.unload = function() {
  if (this.player != null) {
    this.trackInfo = {
      activeTrackIds: [this.receiver.chromecastPlayer.activeTrackId],
      textTrackStyle: this.receiver.chromecastPlayer.textTrackStyle
    };
    this.receiver.chromecastPlayer.activeTrackId = null;
    this.receiver.chromecastPlayer.textTrackStyle = null;
    this.player.unload();
    this.player = null;
  }
};

/** @override
*/
ChromeCastPlaybackProxy.prototype.load = function() {
  var _this = this;
  if (this.pending === false && (this.manifest != null)) {
    this.loadMediaPlayer();
  } else {
    this.pending = true;
    Utils.request(this.getSrc()).then(function(xhr) {
      if (xhr.status === 200) {
        _this.pending = false;
        _this.manifest = xhr.responseText;
        _this.loadMediaPlayer();
      }
    })["catch"](function(error) {
      _this.facade.logger.error(event);
      _this.player.unload();
    });
  }
};

ChromeCastPlaybackProxy.prototype.loadMediaPlayer = function() {
  var initStart, mediaProxy, type, types, video,
    _this = this;
  this.data.loading = true;
  this.playWhenLoaded = true;
  this.unload();
  video = this.facade.getMediaElement();
  video.once(this.resume.event, this.resume.listener);
  video.addEventListener("loadedmetadata", this.handlers.loadedmetadata);
  video.addEventListener("durationchange", this.handlers.durationchange);
  video.addEventListener("canplaythrough", this.handlers.canplaythrough);
  initStart = 0;
  if (this.facade.logger.enabled === true) {
    cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG);
  }
  this.host = new cast.player.api.Host({
    'mediaElement': video,
    'url': this.getSrc()
  });
  this.host.updateManifestRequestInfo = function(requestInfo) {
    if (requestInfo.url === _this.getSrc()) {
      requestInfo.skipRequest = true;
      requestInfo.setResponse(_this.manifest);
    }
  };
  this.host.onError = function(errorCode) {
    _this.facade.logger.error("Google Media Player Fatal Error - " + errorCode);
    _this.player.unload();
  };
  mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
  type = mediaProxy.getType();
  types = Utils.mimeTypes;
  switch (type) {
    case types.m3u8:
      this.protocol = cast.player.api.CreateHlsStreamingProtocol(this.host);
      break;
    case types.mpd:
      this.protocol = cast.player.api.CreateDashStreamingProtocol(this.host);
      break;
    case types.ism:
      this.protocol = cast.player.api.CreateSmoothStreamingProtocol(this.host);
  }
  if (this.protocol != null) {
    this.player = new cast.player.api.Player(this.host);
    this.player.load(this.protocol, initStart);
  } else {
    this.facade.logger.error("Google Media Player Error: Could not create protocol");
  }
};

/**
 * @override
*/
ChromeCastPlaybackProxy.prototype.resumecomplete = function() {
  ChromeCastPlaybackProxy.__super__.resumecomplete.call(this);
};

/**
 * The ChromeCastSeekCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastMediaChangeCommand() {
  ChromeCastMediaChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastMediaChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastMediaChangeCommand.prototype.execute = function(notification) {
  if (this.applicationState.getPlaybackTarget() !== "chromecast") {
    return;
  }
  this.facade.logger.debug("ChromeCastMediaChangeCommand");
  this.proxy.loadMedia();
};

/**
 * The ChromeCastReceiverMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ChromeCastReceiverMediator() {
  ChromeCastReceiverMediator.__super__.constructor.call(this);
}


__extends(ChromeCastReceiverMediator, PluginMediator);


/**
 * @override
*/
ChromeCastReceiverMediator.prototype.onRegister = function() {
  ChromeCastReceiverMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_APPLICATION_STATE, "chromecast-receiver");
};

/**
 * The ChromeCastSenderMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ChromeCastSenderMediator() {
  ChromeCastSenderMediator.__super__.constructor.call(this);
}


__extends(ChromeCastSenderMediator, PluginMediator);


ChromeCastSenderMediator.prototype.componentName = "chromecast";

ChromeCastSenderMediator.prototype.controls = null;

/**
 * @override
*/
ChromeCastSenderMediator.prototype.onRegister = function() {
  ChromeCastSenderMediator.__super__.onRegister.call(this);
  this.controls = new ChromeCastControlsMediator();
};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.registerOverlay = function() {};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAYBACK_TARGET_CHANGE, Notifications.CHANGE_PLAY_STATE];
};

/**
 * @override
*/
ChromeCastSenderMediator.prototype.handleNotification = function(notification) {
  var body, name, target;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAYBACK_TARGET_CHANGE:
      target = body.value;
      if (target === "chromecast") {
        this.facade.registerMediator(this.controls);
      } else {
        this.facade.removeMediator(this.controls.getMediatorName());
      }
      break;
    case Notifications.CHANGE_PLAY_STATE:
      this.controls.setState(body);
  }
};

/**
 * The ChromeCastSenderMediator class.
 * 
 * @constructor
 * @extends {ChromeCastSenderMediator}
 * @private
*/
function ChromeCastHTMLSenderMediator() {
  ChromeCastHTMLSenderMediator.__super__.constructor.call(this);
}


__extends(ChromeCastHTMLSenderMediator, ChromeCastSenderMediator);


ChromeCastHTMLSenderMediator.prototype.chromeCastButton = null;

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.onRegister = function() {
  ChromeCastHTMLSenderMediator.__super__.onRegister.call(this);
  this.chromeCastButton = new ChromeCastButtonMediator();
  this.facade.registerMediator(this.chromeCastButton);
};

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.listNotificationInterests = function() {
  return ChromeCastHTMLSenderMediator.__super__.listNotificationInterests.call(this).concat([ChromeCastNotifications.AVAILABILITY_CHANGE]);
};

/**
 * @override
*/
ChromeCastHTMLSenderMediator.prototype.handleNotification = function(notification) {
  var body, name;
  ChromeCastHTMLSenderMediator.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case ChromeCastNotifications.AVAILABILITY_CHANGE:
      if (body === true) {
        this.sendNotification(Notifications.ADD_CONTROL_STATE, "chromecast");
        this.facade.player.sendNotification(Notifications.ADD_CONTROL, this.chromeCastButton.getViewComponent());
      } else {
        this.sendNotification(Notifications.REMOVE_CONTROL_STATE, "chromecast");
        this.facade.player.sendNotification(Notifications.REMOVE_CONTROL, this.chromeCastButton.getViewComponent());
      }
  }
};

/** 
 * The ChromeCastReceiverProxy class.
 *   
 * @param {Object}  config  The plugin configuration object.
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function ChromeCastReceiverProxy(config) {
  this.messageBus = config.messageBus || ChromeCastConstants.CHANNEL_ID;
  ChromeCastReceiverProxy.__super__.constructor.call(this, config.receiver);
}


__extends(ChromeCastReceiverProxy, PluginProxy);


/** @static
*/
ChromeCastReceiverProxy.NAME = ModuleProxy.NAME;

ChromeCastReceiverProxy.prototype.defaults = {
  shim: null,
  types: ["application/x-mpegURL", "application/dash+xml", "application/vnd.ms-sstr+xml"]
};

ChromeCastReceiverProxy.prototype.messageBus = null;

ChromeCastReceiverProxy.prototype.castReceiverManager = null;

ChromeCastReceiverProxy.prototype.castMessageBus = null;

ChromeCastReceiverProxy.prototype.startTime = 0;

ChromeCastReceiverProxy.prototype.currentTime = 0;

ChromeCastReceiverProxy.prototype.boundHandler = null;

ChromeCastReceiverProxy.prototype.amp = null;

ChromeCastReceiverProxy.prototype.mediaManager = null;

ChromeCastReceiverProxy.prototype.playbackCore = null;

ChromeCastReceiverProxy.prototype.teardownTimeout = null;

ChromeCastReceiverProxy.prototype.chromecastPlayer = null;

ChromeCastReceiverProxy.prototype.initialize = function() {
  var core, player;
  ChromeCastReceiverProxy.__super__.initialize.call(this);
  this.sendNotification(Notifications.INITIALIZED);
  core = new ChromeCastPlaybackProxy(this.getConfigurationData().types, this);
  player = this.facade.player.retrieveProxy(PlayerProxy.NAME);
  player.registerPlaybackCore(core);
};

ChromeCastReceiverProxy.prototype.ready = function() {
  if (this.facade.logger.enabled === true) {
    cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);
  }
  this.shim = ChromeCastShim.getInstance();
  this.castReceiverManager = this.shim.castReceiverManager;
  this.castReceiverManager.onReady = this.castReceiverManager.onSystemVolumeChanged = this.castReceiverManager.onVisibilityChanged = this.logEvent.bind(this);
  this.castReceiverManager.onSenderConnected = this.onSenderConnected.bind(this);
  this.castReceiverManager.onSenderDisconnected = this.onSenderDisconnected.bind(this);
  this.amp = this.facade.player;
  this.chromecastPlayer = this.shim.player;
  this.chromecastPlayer.registerPlayer(this.amp);
  this.mediaManager = this.shim.mediaManager;
  this.castMessageBus = this.shim.castMessageBuses[this.messageBus];
  this.castMessageBus.onMessage = this.onMessage.bind(this);
  this.amp.addEventListener("seeking", this.eventHandler.bind(this));
  this.amp.addEventListener("seeked", this.eventHandler.bind(this));
  this.amp.addEventListener("pause", this.startTeardownTimeout.bind(this, 20 * 60));
  this.amp.addEventListener("ended", this.startTeardownTimeout.bind(this, 5 * 60));
  this.amp.addEventListener("error", this.startTeardownTimeout.bind(this, 5 * 60));
  this.amp.addEventListener("playing", this.stopTeardownTimeout.bind(this));
  this.amp.addEventListener("loadedmetadata", this.stopTeardownTimeout.bind(this));
  if (this.amp.ads != null) {
    this["amp"].ads.addEventListener("breakstart", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("breakend", this.onBreakEnd.bind(this));
    this["amp"].ads.addEventListener("started", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("ended", this.dispatchEvent.bind(this, "ads"));
    this["amp"].ads.addEventListener("companion", this.dispatchEvent.bind(this, "ads"));
  }
  this.startTeardownTimeout(5 * 60);
};

ChromeCastReceiverProxy.prototype.onBreakEnd = function(event) {
  this.dispatchEvent("ads", event);
  if (this.amp.getEnded() === true) {
    this.startTeardownTimeout(5 * 60);
  }
};

ChromeCastReceiverProxy.prototype.logEvent = function(message, data) {
  if (!(message != null)) {
    message = data.type || "";
  } else if (!(data != null)) {
    data = message.data;
    message = data.type;
  }
  this.facade.logger.log("[CHROMECAST] ", message, data);
};

ChromeCastReceiverProxy.prototype.onSenderConnected = function(event) {
  this.logEvent("senderconnected", event);
  setTimeout(this.sendNotification.bind(this, Notifications.DISPATCH_EVENT, new Event("senderconnected", event)), 0);
};

ChromeCastReceiverProxy.prototype.onSenderDisconnected = function(event) {
  this.logEvent("sender disconnected", event);
  if (this.castReceiverManager.getSenders().length === 0 && event.reason === cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
    this.teardown();
  }
  setTimeout(this.sendNotification.bind(this, Notifications.DISPATCH_EVENT, new Event("senderdisconnected", event)), 0);
};

ChromeCastReceiverProxy.prototype.onMessage = function(event) {
  var detail, ids, message, textTrackStyle, type;
  this.logEvent("message from sender", event);
  try {
    message = event.data || event.message;
    if (!(message != null)) {
      return;
    }
    type = message.type;
    detail = message.detail;
    if (typeof detail === "string") {
      detail = JSON.parse(detail);
    }
    if (!(detail != null)) {
      return;
    }
    switch (type) {
      case "captioning.visibilitychange":
        ids = [];
        if (detail.visibility === true) {
          ids.push(0);
        }
        this.chromecastPlayer.editTracksInfo({
          activeTrackIds: ids
        });
        break;
      case "captioning.settingschange":
        textTrackStyle = new cast.receiver.media.TextTrackStyle();
        textTrackStyle.foregroundColor = detail.fontColor;
        textTrackStyle.backgroundColor = detail.backgroundColor;
        textTrackStyle.fontScale = detail.size;
        textTrackStyle.windowColor = detail.windowColor;
        textTrackStyle.fontFamily = detail.fontFamily;
        textTrackStyle.edgeColor = detail.edgeColor;
        textTrackStyle.edgeType = detail.edgeType;
        this.chromecastPlayer.editTracksInfo({
          textTrackStyle: textTrackStyle
        });
        break;
      case "stats.visibilitychange":
        this["amp"].stats.setHidden(!detail.visibility);
    }
    this.sendNotification(Notifications.DISPATCH_EVENT, event);
  } catch (error) {
    this.error(error);
  }
};

ChromeCastReceiverProxy.prototype.onClose = function(event) {
  this.logEvent("message channel closed", event);
};

ChromeCastReceiverProxy.prototype.eventHandler = function(event) {
  var msg;
  msg = {
    type: event.type
  };
  if (event.detail != null) {
    msg.detail = event.detail;
  }
  this.send(msg);
};

ChromeCastReceiverProxy.prototype.dispatchEvent = function(target, event) {
  this.send({
    type: "dispatchevent",
    detail: {
      target: target,
      event: {
        type: event.type,
        detail: event.detail
      }
    }
  });
};

ChromeCastReceiverProxy.prototype.send = function(message) {
  this.castMessageBus.broadcast(message);
};

ChromeCastReceiverProxy.prototype.startTeardownTimeout = function(seconds) {
  this.stopTeardownTimeout();
  this.teardownTimeout = setTimeout(this.teardown.bind(this), seconds * 1000);
};

ChromeCastReceiverProxy.prototype.stopTeardownTimeout = function() {
  clearTimeout(this.teardownTimeout);
};

ChromeCastReceiverProxy.prototype.teardown = function() {
  window.close();
};

/**
 * The ChromeCastFeedChangedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastFeedChangedCommand() {
  ChromeCastFeedChangedCommand.__super__.constructor.call(this);
}


__extends(ChromeCastFeedChangedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastFeedChangedCommand.prototype.execute = function(notification) {
  var _base;
  if (typeof (_base = this.proxy).setFeed === "function") {
    _base.setFeed(notification.getBody());
  }
};

/**
 * The ChromeCastSeekCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastSeekCommand() {
  ChromeCastSeekCommand.__super__.constructor.call(this);
}


__extends(ChromeCastSeekCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastSeekCommand.prototype.execute = function(notification) {
  this.facade.logger.debug("ChromeCastSeekCommand");
  this.plugin.setCurrentTime(notification.getBody());
};

/**
 * @constructor
 * @private
 * @extends {contextMenuMediator}
*/
function contextMenuMediator() {
  contextMenuMediator.__super__.constructor.call(this);
}


__extends(contextMenuMediator, OverlayMediator);


contextMenuMediator.prototype.componentName = "context-menu";

contextMenuMediator.prototype.contextMenu = null;

/**
 * @override
*/
contextMenuMediator.prototype.onRegister = function() {
  var _this = this;
  contextMenuMediator.__super__.onRegister.call(this);
  EventHandler.create(this.facade.player.viewComponent, EventHandler.CONTEXTMENU, function(event) {
    event.preventDefault();
    _this.contextMenuHandler(event);
    return false;
  });
};

/** Context Menu Click Handler
*/
contextMenuMediator.prototype.contextMenuHandler = function(event) {
  var id, item,
    _this = this;
  if (this.contextMenu) {
    this.removeContextMenu();
  }
  this.contextMenu = UI.create("context-menu", document.body, "ul");
  UI.create("context-item", this.contextMenu, "li", this.facade.player.getVersion());
  if (typeof akamaiGetViewerId !== "undefined" && akamaiGetViewerId !== null) {
    id = akamaiGetViewerId();
    item = UI.create("context-item", this.contextMenu, "li", "" + (this.localizationManager.getString("MSG_VIEWER_ID") || "Viewer ID: "));
    UI.create("selectable", item, "span", "" + (id != null ? id : "N/A"));
  }
  this.contextMenu.style.top = event.pageY + "px";
  this.contextMenu.style.left = event.pageX + "px";
  EventHandler.create(document.body, EventHandler.CLICK, function(event) {
    if (/selectable/.test(event.target.className)) {
      return false;
    }
    _this.removeContextMenu(event);
    return false;
  });
};

/** Remove ContextMenu Handler and DOM Object
*/
contextMenuMediator.prototype.removeContextMenu = function(event) {
  try {
    EventHandler.clear(document.body, EventHandler.CLICK);
    document.body.removeChild(this.contextMenu);
    this.contextMenu = null;
  } catch (_error) {}
};

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function TitleBarMediator() {
  TitleBarMediator.__super__.constructor.call(this);
}


__extends(TitleBarMediator, OverlayMediator);


TitleBarMediator.prototype.componentName = "title-bar";

TitleBarMediator.prototype.title = null;

TitleBarMediator.prototype.description = null;

/**
 * @override
*/
TitleBarMediator.prototype.onRegister = function() {
  TitleBarMediator.__super__.onRegister.call(this);
  this.title = this.create("title-text");
  this.description = this.create("description-text");
};

/**
 * @override
*/
TitleBarMediator.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA];
};

/**
 * @override
*/
TitleBarMediator.prototype.handleNotification = function(notification) {
  var metadata, title;
  switch (notification.getName()) {
    case Notifications.CHANGE_MEDIA:
      metadata = notification.getBody();
      title = this.facade.player.evaluateBinding(metadata.title);
      if (!(title != null) || title === "" || title === "undefined") {
        this.classList.add("hidden");
      } else {
        this.title.innerHTML = title;
        this.description.innerHTML = metadata.description ? metadata.description : "";
        this.classList.remove("hidden");
      }
  }
};

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function ReplayOverlayMediator() {
  ReplayOverlayMediator.__super__.constructor.call(this);
}


__extends(ReplayOverlayMediator, OverlayMediator);


ReplayOverlayMediator.prototype.componentName = "replay";

ReplayOverlayMediator.prototype.replay = null;

ReplayOverlayMediator.prototype.icon = null;

ReplayOverlayMediator.prototype.label = null;

/**
 * @override
*/
ReplayOverlayMediator.prototype.onRegister = function() {
  ReplayOverlayMediator.__super__.onRegister.call(this);
  this.replay = this.create("replay-button");
  this.replay.onclick = this.onclick.bind(this);
  this.icon = this.create("replay-icon", this.replay);
  this.label = this.createText("replay-label", this.localizationManager.getString(LocalizationConstants.MSG_REPLAY), this.replay);
};

/**
*/
ReplayOverlayMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(Notifications.REPLAY);
  return false;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var FeedNotifications = {
  LOAD_FEED: "loadfeed",
  FEED_CHANGED: "feedchanged",
  FEED_LOADED: "feedloaded",
  FEED_ERROR: "feederror"
};

/**
 * ErrorLayerMediator class.
 *
 * @constructor
 * @extends {LayerMediator}
 * @private
*/
function ErrorLayerMediator() {
  ErrorLayerMediator.__super__.constructor.call(this);
}


__extends(ErrorLayerMediator, LayerMediator);


ErrorLayerMediator.prototype.message = null;

ErrorLayerMediator.prototype.componentName = "error";

/**
 * @override
*/
ErrorLayerMediator.prototype.onRegister = function() {
  ErrorLayerMediator.__super__.onRegister.call(this);
  this.message = this.create("error-message");
};

/**
 * @override
*/
ErrorLayerMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ERROR];
};

/**
 * @override
*/
ErrorLayerMediator.prototype.handleNotification = function(notification) {
  var error, msg;
  switch (notification.getName()) {
    case Notifications.ERROR:
      error = notification.getBody();
      msg = /^(Error: )/.test(error.toString()) ? "" : "Error: ";
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          msg += "Media was aborted.";
          break;
        case MediaError.MEDIA_ERR_DECODE:
          msg += "Decode Error.";
          break;
        case MediaError.MEDIA_ERR_NETWORK:
          msg += "Network Error.";
          break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          msg += "Source not supported.";
          break;
        default:
          msg += error;
      }
      this.message.textContent = msg;
  }
};

/** 
 * @constructor
 * @extends {OverlayMediator}
 * @private
*/
function LoadingOverlayMediator() {
  LoadingOverlayMediator.__super__.constructor.call(this);
}


__extends(LoadingOverlayMediator, OverlayMediator);


LoadingOverlayMediator.prototype.componentName = "loading";

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function WaitingOverlayMediator() {
  WaitingOverlayMediator.__super__.constructor.call(this);
}


__extends(WaitingOverlayMediator, OverlayMediator);


WaitingOverlayMediator.prototype.componentName = "waiting";

WaitingOverlayMediator.prototype.bar = null;

WaitingOverlayMediator.prototype.text = null;

WaitingOverlayMediator.prototype.onRegister = function() {
  WaitingOverlayMediator.__super__.onRegister.call(this);
  this.bar = this.create("waiting-bar");
  this.text = this.createText("waiting-text", this.localizationManager.getString(LocalizationConstants.MSG_BUFFERING));
};

/**
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function PosterMediator() {
  PosterMediator.__super__.constructor.call(this);
}


__extends(PosterMediator, OverlayMediator);


PosterMediator.prototype.componentName = "poster";

PosterMediator.prototype.poster = null;

PosterMediator.prototype.clickHandler = null;

/**
 * @override
*/
PosterMediator.prototype.onRegister = function() {
  PosterMediator.__super__.onRegister.call(this);
  this.poster = this.create("poster-content");
  this.poster.onclick = this.onclick.bind(this);
};

/**
*/
PosterMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE, true);
  return false;
};

/**
 * @override
*/
PosterMediator.prototype.listNotificationInterests = function() {
  return [Notifications.SET_MEDIA];
};

/**
 * @override
*/
PosterMediator.prototype.handleNotification = function(notification) {
  var html, src;
  switch (notification.getName()) {
    case Notifications.SET_MEDIA:
      src = notification.getBody().poster;
      html = (src != null) && src !== "" ? "<img src=\"" + src + "\" class=\"" + this.cssPrefix + "poster-image\" />" : "";
      this.poster.innerHTML = html;
  }
};

/**
*/
/**
 * @constructor
 * @private
*/
function EndSlateMediator() {
  EndSlateMediator.__super__.constructor.call(this);
}


__extends(EndSlateMediator, OverlayMediator);


EndSlateMediator.prototype.componentName = "end-slate";

/**
 * @override
*/
EndSlateMediator.prototype.onRegister = function() {
  if (this.facade.config.endslate != null) {
    EndSlateMediator.__super__.onRegister.call(this);
  }
};

EndSlateMediator.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE];
};

EndSlateMediator.prototype.handleNotification = function(notification) {
  var endslate, html, media, src, viewComponent;
  switch (notification.getName()) {
    case Notifications.MEDIA_CHANGE:
      media = notification.getBody();
      endslate = this.facade.config.endslate;
      viewComponent = this.getViewComponent();
      html = "";
      if (endslate != null) {
        src = endslate.usePoster === true ? media.poster : endslate.url;
        if ((src != null) && src !== "") {
          html = "<img src=\"" + src + "\" class=\"end-slate-image\" />";
        }
      }
      if (viewComponent != null) {
        viewComponent.innerHTML = html;
      }
  }
};

/**
 * @constructor
 * @private
*/
function ButtonMediator(labelText, parent, element, componentName, onclick) {
  this.labelText = labelText;
  this.onclick = onclick != null ? onclick : this.onclick;
  ButtonMediator.__super__.constructor.call(this, componentName, null, parent, element);
}


__extends(ButtonMediator, ComponentMediator);


ButtonMediator.prototype.componentType = "button";

ButtonMediator.prototype.icon = null;

ButtonMediator.prototype.label = null;

ButtonMediator.prototype.onclick = null;

ButtonMediator.prototype.labelText = null;

ButtonMediator.prototype.onRegister = function() {
  ButtonMediator.__super__.onRegister.call(this);
  this.icon = this.create("icon");
  this.createLabel(this.labelText);
};

ButtonMediator.prototype.createLabel = function(label) {
  if (label != null) {
    this.label = this.createText("label", label);
  }
};

ButtonMediator.prototype.setLabel = function(value) {
  if (!(this.label != null)) {
    this.createLabel(value);
  } else {
    this.label.textContent = value;
  }
  return value;
};

ButtonMediator.prototype.getLabel = function() {
  var _ref;
  return (_ref = this.label) != null ? _ref.textContent : void 0;
};

/**
 * The LogoMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function LogoMediator(parent) {
  LogoMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(LogoMediator, ComponentMediator);


/**
 * The name of the this Mediator.
 * 
 * @static
 * @type {string}
*/
LogoMediator.prototype.componentName = "logo";

LogoMediator.prototype.url = null;

/**
 * @override
*/
LogoMediator.prototype.onRegister = function() {
  LogoMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, this.componentName + "-enabled");
};

LogoMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(Notifications.DISPATCH_EVENT, new Event("controlsLogoClicked"));
  return false;
};

/**
 * The FullScreenMediator class.
 *
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function FullScreenMediator(parent) {
  FullScreenMediator.__super__.constructor.call(this, null, parent);
}


__extends(FullScreenMediator, ButtonMediator);


FullScreenMediator.prototype.componentName = "full-screen";

FullScreenMediator.prototype.onRegister = function() {
  FullScreenMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, this.componentName + "-enabled");
};

FullScreenMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(Notifications.TOGGLE_FULL_SCREEN);
  return false;
};

/**
 * @override
*/
FullScreenMediator.prototype.listNotificationInterests = function() {
  return [Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_FULL_SCREEN];
};

/**
 * @override
*/
FullScreenMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.DISABLE_FULL_SCREEN:
      this.setDisabled(true);
      break;
    case Notifications.ENABLE_FULL_SCREEN:
      this.setDisabled(false);
  }
};

/**
 * The VolumeMediator class.
 *
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function SliderMediator(parent, direction) {
  this.direction = direction != null ? direction : this.direction;
  SliderMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(SliderMediator, ComponentMediator);


SliderMediator.prototype.componentType = "slider";

SliderMediator.prototype.trackView = null;

SliderMediator.prototype.handleView = null;

SliderMediator.prototype.valueView = null;

SliderMediator.prototype.startCapView = null;

SliderMediator.prototype.endCapView = null;

SliderMediator.prototype.clickView = null;

SliderMediator.prototype.min = 0;

SliderMediator.prototype.max = 1;

SliderMediator.prototype.value = 0;

SliderMediator.prototype.draggable = false;

SliderMediator.prototype.dragging = false;

SliderMediator.prototype.draggingInterval = null;

SliderMediator.prototype.draggingDelay = 250;

SliderMediator.prototype.direction = "vertical";

SliderMediator.prototype.pressHandler = null;

SliderMediator.prototype.releaseHandler = null;

SliderMediator.prototype.moveHandler = null;

SliderMediator.prototype.clickHandler = null;

/**
 * @override
*/
SliderMediator.prototype.onRegister = function() {
  SliderMediator.__super__.onRegister.call(this);
  this.startCapView = this.create("start-cap");
  this.endCapView = this.create("end-cap");
  this.trackView = this.create("track");
  this.valueView = this.create("value", this.trackView);
  this.clickView = this.create("click", this.trackView);
  this.handleView = this.create("handle", this.trackView);
  this.pressHandler = EventHandler.create(this.handleView, EventHandler.PRESS, this.handlePressHandler.bind(this));
  this.releaseHandler = EventHandler.create(window, EventHandler.RELEASE, this.handleReleaseHandler.bind(this));
  this.releaseHandler.unbind();
  this.moveHandler = EventHandler.create(window, EventHandler.MOVE, this.updateHandler.bind(this, this.draggable));
  this.moveHandler.unbind();
  this.clickHandler = EventHandler.create(this.clickView, EventHandler.CLICK, this.updateHandler.bind(this, true));
};

/** sets the value
*/
SliderMediator.prototype.setDirection = function(value) {
  this.direction = value;
  return value;
};

SliderMediator.prototype.getDirection = function() {
  return this.direction;
};

/** sets the value
*/
SliderMediator.prototype.setValue = function(value) {
  this.updateValue(value);
  this.valueChanged();
  return value;
};

SliderMediator.prototype.getValue = function() {
  return this.value;
};

SliderMediator.prototype.setDragging = function(value) {
  if (value === this.dragging) {
    return;
  }
  this.dragging = value;
  this.sendNotification(Notifications.IS_USER_ACTIVE, this.dragging);
  if (this.dragging === true) {
    this.draggingInterval = setInterval(this.valueChanged.bind(this), this.draggingDelay);
  } else {
    clearInterval(this.draggingInterval);
    this.valueChanged();
  }
  return this.dragging;
};

SliderMediator.prototype.getDragging = function() {
  return this.dragging;
};

SliderMediator.prototype.setDraggable = function(value) {
  if (value === this.draggable) {
    return;
  }
  this.draggable = value;
  return value;
};

SliderMediator.prototype.getDraggable = function() {
  return this.draggable;
};

/** updates the view
*/
SliderMediator.prototype.updateValue = function(value, force) {
  var handle;
  if (force == null) {
    force = false;
  }
  if (value === this.value && force === false) {
    return;
  }
  this.value = Utils.clamp(value, this.min, this.max);
  if (this.direction === "vertical") {
    value = "height";
    handle = "bottom";
  } else {
    value = "width";
    handle = "left";
  }
  this.valueView.style[value] = this.handleView.style[handle] = "" + (this.value * 100) + "%";
};

/** calculates the value based on mouse/touch point
*/
SliderMediator.prototype.calculateValue = function(event) {
  var offset, pos, value;
  pos = {
    x: (event.pageX - (window.scrollX || window.pageXOffset)) || (event.targetTouches[0].pageX - window.scrollX),
    y: (event.pageY - (window.scrollY || window.pageYOffset)) || (event.targetTouches[0].pageY - window.scrollY)
  };
  offset = Utils.getElementOffset(this.viewComponent);
  if (this.getDirection() === "vertical") {
    value = 1 - ((pos.y - offset.top) / offset.height);
  } else {
    value = (pos.x - offset.left) / offset.width;
  }
  return Utils.clamp(value, 0, 1);
};

SliderMediator.prototype.blockEvent = function(event) {
  if (!(event != null)) {
    return;
  }
  event.stopImmediatePropagation();
  event.preventDefault();
};

SliderMediator.prototype.handlePressHandler = function(event) {
  this.moveHandler.bind();
  this.releaseHandler.bind();
  this.clickHandler.unbind();
  this.setDragging(true);
  this.blockEvent(event);
  return false;
};

SliderMediator.prototype.handleReleaseHandler = function(event) {
  this.moveHandler.unbind();
  this.releaseHandler.unbind();
  this.clickHandler.bind();
  this.setDragging(false);
  this.blockEvent(event);
  return false;
};

SliderMediator.prototype.updateHandler = function(setValue, event) {
  var value;
  this.blockEvent(event);
  value = /click/.test(event.type) && this.classList.contains('scrubbing') ? this.getValue() : this.calculateValue(event);
  if (setValue === true) {
    this.setValue(value);
  } else {
    this.updateValue(value);
  }
  return false;
};

SliderMediator.prototype.valueChanged = function() {};

/**
 * @enum {string}
 * @const
 * @private
*/

var PanelNotifications = {
  ADD_PANEL: "addPanel",
  REMOVE_PANEL: "removePanel",
  OPEN_PANEL: "openPanel",
  CLOSE_PANEL: "closePanel",
  TOGGLE_PANEL: "togglePanel",
  CLOSE_ALL_PANELS: "closeAllPanels"
};

/**
 * The TimeDisplayMediator class.
 *
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function TimeDisplayMediator(parent) {
  TimeDisplayMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(TimeDisplayMediator, ComponentMediator);


/**
 * The name of the this Mediator.
 *
 * @static
 * @type {string}
*/
TimeDisplayMediator.prototype.componentName = "time-display";

TimeDisplayMediator.prototype.duration = null;

TimeDisplayMediator.prototype.currentTimeDisplay = null;

TimeDisplayMediator.prototype.separatorDisplay = null;

TimeDisplayMediator.prototype.durationDisplay = null;

TimeDisplayMediator.prototype.liveDisplay = null;

/**
 * @override
*/
TimeDisplayMediator.prototype.onRegister = function() {
  TimeDisplayMediator.__super__.onRegister.call(this);
  this.liveDisplay = this.createText("live-display", this.localizationManager.getString(LocalizationConstants.MSG_LIVE));
  this.currentTimeDisplay = this.createText("current-time-display", "00:00", this, "span");
  this.separatorDisplay = this.createText("separator-display", this.localizationManager.getString(LocalizationConstants.MSG_TIME_SEPARATOR), this, "span");
  this.durationDisplay = this.createText("duration-display", "00:00", this, "span");
};

/**
 * @override
*/
TimeDisplayMediator.prototype.listNotificationInterests = function() {
  return [Notifications.PLAY, Notifications.DURATION_CHANGE, Notifications.ENDED, Notifications.DISPLAY_TIME];
};

/**
 * @override
*/
TimeDisplayMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.PLAY:
      this.updateDuration();
      break;
    case Notifications.DURATION_CHANGE:
      this.updateCurrentTime();
      this.updateDuration(body);
      break;
    case Notifications.ENDED:
      this.updateCurrentTime(this.duration);
      this.updateDuration();
      break;
    case Notifications.DISPLAY_TIME:
      this.updateCurrentTime(body.currentTime, body.duration);
      this.updateDuration(body.duration);
  }
};

TimeDisplayMediator.prototype.updateCurrentTime = function(currentTime, duration) {
  if (currentTime != null) {
    this.currentTime = currentTime;
  }
  if (duration != null) {
    this.duration = duration;
  }
  this.currentTimeDisplay.textContent = Utils.formatTimecode(this.currentTime, this.duration);
};

TimeDisplayMediator.prototype.updateDuration = function(duration) {
  if (duration != null) {
    this.duration = duration;
  }
  this.durationDisplay.textContent = Utils.formatTimecode(this.duration);
};

/**
 * The PlayPauseMediator class.
 *
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function GoLiveMediator(parent) {
  GoLiveMediator.__super__.constructor.call(this, null, parent);
}


__extends(GoLiveMediator, ButtonMediator);


GoLiveMediator.prototype.componentName = "go-live";

GoLiveMediator.prototype.onRegister = function() {
  GoLiveMediator.__super__.onRegister.call(this);
  this.createLabel(this.localizationManager.getString("MSG_LIVE"));
};

/**
 * @override
*/
GoLiveMediator.prototype.listNotificationInterests = function() {
  return [Notifications.IS_LIVE];
};

/**
 * @override
*/
GoLiveMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.IS_LIVE:
      this.setLabel(body === true ? this.localizationManager.getString("MSG_LIVE") : this.localizationManager.getString("MSG_GO_LIVE"));
  }
};

/**
*/
GoLiveMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.GO_LIVE);
  return false;
};

/**
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function AdMediator() {
  AdMediator.__super__.constructor.call(this);
}


__extends(AdMediator, OverlayMediator);


AdMediator.prototype.duration = null;

AdMediator.prototype.currentTime = null;

AdMediator.prototype.container = null;

AdMediator.prototype.banner = null;

AdMediator.prototype.text = null;

AdMediator.prototype.adText = null;

AdMediator.prototype.bg = null;

AdMediator.prototype.totalAds = null;

AdMediator.prototype.adPosition = null;

AdMediator.prototype.adContainerRequired = true;

AdMediator.prototype.componentName = "ads";

/**
 * @override
*/
AdMediator.prototype.onRegister = function() {
  AdMediator.__super__.onRegister.call(this);
  if (this.adContainerRequired) {
    this.container = this.create("ad-container");
  }
  this.banner = this.create("ad-banner");
  this.bg = this.create("ad-text-bg", this.banner);
  this.adText = this.create("ad-text-title", this.banner);
  this.text = this.create("ad-text", this.banner);
  if (this.adContainerRequired) {
    this.viewComponent.container = this.container;
  }
  this.sendNotification(AdNotifications.AD_CONTAINER_CREATED, this.viewComponent);
};

/**
 * @override
*/
AdMediator.prototype.listNotificationInterests = function() {
  return [AdNotifications.BREAK_START, AdNotifications.BREAK_END, AdNotifications.AD_TIME_REMAINING, AdNotifications.AD_STARTED];
};

/**
 * @override
*/
AdMediator.prototype.handleNotification = function(notification) {
  var adVO, msg, time;
  switch (notification.getName()) {
    case AdNotifications.BREAK_END:
      this.text.textContent = "";
      this.adText.textContent = "";
      break;
    case AdNotifications.AD_TIME_REMAINING:
      time = Math.round(notification.getBody());
      if ((this.totalAds != null) && this.totalAds > 0 && (this.adPosition != null) && this.adPosition !== this.totalAds) {
        msg = time > 0 ? "" + (this.localizationManager.getString(LocalizationConstants.MSG_NEXT_AD)) + time + " " + (this.localizationManager.getString(LocalizationConstants.MSG_SECONDS)) : "";
      } else {
        msg = time > 0 ? "" + (this.localizationManager.getString(LocalizationConstants.MSG_NEXT_VIDEO)) + time + " " + (this.localizationManager.getString(LocalizationConstants.MSG_SECONDS)) : "";
      }
      this.text.textContent = msg;
      break;
    case AdNotifications.AD_STARTED:
      adVO = notification.getBody();
      this.totalAds = adVO.totalAds;
      this.adPosition = adVO.position;
      msg = "Ad " + adVO.position + " of " + adVO.totalAds;
      if ((adVO.position != null) && (adVO.totalAds != null) && adVO.totalAds >= 1) {
        this.adText.textContent = msg;
      }
  }
};

/**
 * The PanelControlMediator class.
 *
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PanelControlMediator(componentName) {
  PanelControlMediator.__super__.constructor.call(this, null, null, null, componentName, onclick);
}


__extends(PanelControlMediator, ButtonMediator);


PanelControlMediator.prototype.panel = null;

PanelControlMediator.prototype.timeout = null;

PanelControlMediator.prototype.closePanelDelayed = null;

/**
 * @override
*/
PanelControlMediator.prototype.onRegister = function() {
  this.closePanelDelayed = this.delayedClosePanel.bind(this);
  if (Utils.getDevice() === "desktop") {
    this.onmouseleave = this.closePanelDelayed;
    this.onmouseenter = this.openPanel;
    this.onclick = this.clickHandler;
  } else {
    this.onclick = this.togglePanel;
  }
  PanelControlMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "" + this.componentName + "-enabled");
  this.sendNotification(Notifications.ADD_CONTROL, this.viewComponent);
};

PanelControlMediator.prototype.openPanel = function() {
  clearTimeout(this.timeout);
  this.sendNotification(PanelNotifications.OPEN_PANEL, this.panel);
  this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed);
};

PanelControlMediator.prototype.closePanel = function() {
  if (Utils.isMouseOverElement(this.panel.viewComponent) || Utils.isMouseOverElement(this.viewComponent) || this.facade.player.retrieveProxy(ApplicationStateProxy.NAME).getIsUserActive()) {
    return;
  }
  this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed);
  this.sendNotification(PanelNotifications.CLOSE_PANEL, this.panel);
};

PanelControlMediator.prototype.delayedClosePanel = function() {
  this.timeout = setTimeout(this.closePanel.bind(this), 350);
};

PanelControlMediator.prototype.togglePanel = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(PanelNotifications.TOGGLE_PANEL, this.panel);
};

PanelControlMediator.prototype.clickPanel = function() {};

/**
 * The PlayPauseMediator class.
 * 
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PanelMediator(componentName) {
  PanelMediator.__super__.constructor.call(this, componentName, null, null, null);
}


__extends(PanelMediator, ComponentMediator);


PanelMediator.prototype.componentType = "panel";

PanelMediator.prototype.control = null;

/**
 * @override
*/
PanelMediator.prototype.onRegister = function() {
  PanelMediator.__super__.onRegister.call(this);
  this.sendNotification(PanelNotifications.ADD_PANEL, this);
};

/**
 * The CaptioningMediator class.
 *
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function CaptionsMediator(viewComponent) {
  CaptionsMediator.__super__.constructor.call(this, viewComponent);
}


__extends(CaptionsMediator, PluginMediator);


CaptionsMediator.prototype.componentName = "captioning";

CaptionsMediator.prototype.captionButton = null;

/**
 * @override
*/
CaptionsMediator.prototype.onRegister = function() {
  var button;
  this.captioning = this.facade.player.captioning;
  button = new ButtonMediator(this.localizationManager.getString(LocalizationConstants.MSG_CC), this.viewComponent, null, "caption", this.onclick.bind(this));
  this.facade.registerMediator(button);
  this.captionButton = button.getViewComponent();
  this.sendNotification(Notifications.ADD_CONTROL, this.captionButton);
  CaptionsMediator.__super__.onRegister.call(this);
};

/**
*/
CaptionsMediator.prototype.onclick = function(event) {
  var _ref;
  event.stopImmediatePropagation();
  if (((_ref = this.captioning.getTrack()) != null ? _ref.type : void 0) === "embedded") {
    this.captioning.setHidden(!this.captioning.getHidden());
  } else if (event.currentTarget === this.captionButton) {
    this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, this.captioning.getHidden());
  }
  return false;
};

/**
 * The CaptioningSettingsMediator class.
 *
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function CaptionsSettingsMediator(viewComponent) {
  this.list = {
    font: null,
    language: null,
    edge: null,
    size: null,
    scroll: null
  };
  this.picker = {
    color: null,
    background: null,
    edge: null,
    window: null
  };
  this.toggle = {
    ON: null,
    OFF: null,
    disabled: false
  };
  this.captioningObject = {
    "default": {
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "small",
      scroll: "popout",
      fontColor: "rgba(255,255,255,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0,0,0,0)",
      windowColor: "rgba(0,0,0,0.5)"
    },
    appliedStyleText: "",
    selected: {
      fontFamily: null,
      size: null,
      fontColor: null,
      edgeType: null,
      edgeColor: null,
      backgroundColor: null,
      windowColor: null
    },
    preset1: {
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "medium",
      fontColor: "rgba(255,255,255,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0,0,0,0)",
      windowColor: "rgba(0,0,0,0)"
    },
    preset2: {
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "medium",
      fontColor: "rgba(255,255,0,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0,0,0,0)",
      windowColor: "rgba(0,0,0,0)"
    },
    preset3: {
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "medium",
      fontColor: "rgba(255,255,255,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0, 0, 0, 0)",
      backgroundColor: "rgba(0,0,0,1)",
      windowColor: "rgba(0,0,0,0)"
    },
    preset4: {
      fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
      size: "medium",
      fontColor: "rgba(255,255,0,1)",
      edgeType: "text-shadow: 0px 0px 0px",
      edgeColor: "rgba(0, 0, 0, 1)",
      backgroundColor: "rgba(0,0,0,0)",
      windowColor: "rgba(0,0,0,0.5)"
    },
    instance: null
  };
  CaptionsSettingsMediator.__super__.constructor.call(this, null, null, viewComponent, null);
}


__extends(CaptionsSettingsMediator, PluginComponentMediator);


CaptionsSettingsMediator.prototype.componentName = "captioning-settings";

CaptionsSettingsMediator.prototype.settingsUiVisible = false;

CaptionsSettingsMediator.prototype.captionningStyle = null;

CaptionsSettingsMediator.prototype.swatchColorCurr = null;

CaptionsSettingsMediator.prototype.swatchOpacityCurr = null;

CaptionsSettingsMediator.prototype.colorPicker = null;

CaptionsSettingsMediator.prototype.colorPickerOpacity = null;

CaptionsSettingsMediator.prototype.advancedSettingContainer = null;

CaptionsSettingsMediator.prototype.scroll = {
  type: "popout",
  typeSpeed: 5,
  lines: 2,
  scrollTimer: [],
  speed: 10,
  popout: null,
  rollup: null,
  painton: null
};

/**
 * @override
*/
CaptionsSettingsMediator.prototype.onRegister = function() {
  var applyButton, cancelButton, captionContainer, captionLabel, clonedSwatch, color, colorArray, isDefault, preset1, preset2, preset3, preset4, previewContainer, previewPara, resetButton, swatch, titleBar, titleText, toggleAdvancedButton, _i, _len,
    _this = this;
  CaptionsSettingsMediator.__super__.onRegister.call(this);
  this.captioning = this.facade.player.captioning;
  titleBar = this.create("captioning-titlebar");
  titleText = this.create("captioning-title", titleBar, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_TITLE));
  this.toggle.OFF = this.create("captioning-toggle-btn", titleBar, "div", "OFF");
  this.toggle.ON = this.create("captioning-toggle-btn", titleBar, "div", "ON");
  EventHandler.create(this.toggle.ON, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    if (!_this.toggle.disabled) {
      _this.toggleButtonHandler(true);
    }
    return false;
  });
  if (!this.toggle.disabled) {
    ClassList.add("captioning-floater-btnselected", this.toggle.OFF, this.classList.prefix);
  }
  EventHandler.create(this.toggle.OFF, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    if (!_this.toggle.disabled) {
      _this.toggleButtonHandler(false);
    }
    return false;
  });
  captionContainer = this.create("captioning-row");
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_LANGUAGE));
  this.list.language = this.create("captioning-dropdown", captionContainer, "select");
  this.languageListPopulate();
  EventHandler.create(this.list.language, "change", function(event) {
    var langIsSelected;
    event.stopImmediatePropagation();
    langIsSelected = event.target.selectedValue !== "None";
    _this.captioining.setHidden(!langIsSelected);
    if (langIsSelected) {
      _this.captioning.setTrack(_this.captioning.selectTrackByIndex(event.target.selectedIndex));
    }
    return false;
  });
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_PRESETS));
  preset1 = this.create(["captioning-preset", "captioning-preset1"], captionContainer, null, "Aa");
  preset2 = this.create(["captioning-preset", "captioning-preset2"], captionContainer, null, "Aa");
  preset3 = this.create(["captioning-preset", "captioning-preset3"], captionContainer, null, "Aa");
  preset4 = this.create(["captioning-preset", "captioning-preset4"], captionContainer, null, "Aa");
  EventHandler.create(preset1, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset1);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset2, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset2);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset3, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset3);
    _this.applyCaptioningStyle();
    return false;
  });
  EventHandler.create(preset4, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected = _this.cloneObject(_this.captioningObject.preset4);
    _this.applyCaptioningStyle();
    return false;
  });
  this.advancedSettingContainer = this.create("captioning-advanced-container");
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_FONT));
  this.list.font = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.font, "option", "Monospaced Serif").value = "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace";
  this.create(null, this.list.font, "option", "Proportional Serif").value = "'Times New Roman', Times, Georgia, Cambria, 'PT Serif Caption', serif";
  this.create(null, this.list.font, "option", "Monospaced Sans-Serif").value = "'Deja Vu Sans Mono', 'Lucida Console', Monaco, Consolas, 'PT Mono', monospace";
  this.create(null, this.list.font, "option", "Proportional Sans-Serif").value = "Roboto, 'Arial Unicode Ms', Arial, Helvetica, Verdana, 'PT Sans Caption', sans-serif";
  this.create(null, this.list.font, "option", "Casual").value = "'Comic Sans MS', Impact, Handlee, fantasy";
  this.create(null, this.list.font, "option", "Cursive").value = "'Monotype Corsiva', 'URW Chancery L', 'Apple Chancery', 'Dancing Script', cursive";
  this.create(null, this.list.font, "option", "Small Capitals").value = "'Arial Unicode Ms', Arial, Helvetica, Verdana, 'Marcellus SC', sans-serif; font-variant: small-caps";
  EventHandler.create(this.list.font, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.fontFamily = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  captionContainer.appendChild(this.list.font);
  captionLabel = this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_EDGE));
  this.list.edge = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.edge, "option", "None").value = "text-shadow: 0px 0px 0px";
  this.create(null, this.list.edge, "option", "Depressed").value = "text-shadow: 0px 1px 0px";
  this.create(null, this.list.edge, "option", "Left Drop Shadow").value = "text-shadow: -3px 3px 2px";
  this.create(null, this.list.edge, "option", "Raised").value = "text-shadow: 0px 1px 1px";
  this.create(null, this.list.edge, "option", "Right Drop Shadow").value = "text-shadow: 3px 3px 2px";
  this.create(null, this.list.edge, "option", "Uniform").value = "text-shadow: 0px 0px 4px";
  EventHandler.create(this.list.edge, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.edgeType = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_SIZE));
  this.list.size = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.size, "option", "Extra Small").value = "x-small";
  this.create(null, this.list.size, "option", "Small").value = "small";
  this.create(null, this.list.size, "option", "Medium").value = "medium";
  this.create(null, this.list.size, "option", "Large").value = "large";
  this.create(null, this.list.size, "option", "Extra Large").value = "x-large";
  this.list.size.selectedIndex = 1;
  EventHandler.create(this.list.size, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.size = event.target.value;
    _this.applyCaptioningStyle(false);
    return false;
  });
  this.create("captioning-label", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_SCROLL));
  this.list.scroll = this.create("captioning-dropdown", captionContainer, "select");
  this.create(null, this.list.scroll, "option", "Pop-Out").value = "popout";
  this.create(null, this.list.scroll, "option", "Roll-On").value = "rollon";
  this.create(null, this.list.scroll, "option", "Paint-On").value = "painton";
  EventHandler.create(this.list.scroll, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.selected.scroll = _this.scroll.type = event.target.value;
    return false;
  });
  captionContainer = this.create("captioning-row", this.advancedSettingContainer);
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_COLOR));
  this.picker.color = this.create("captioning-color-picker", captionContainer);
  this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor;
  EventHandler.create(this.picker.color, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPickerHandler();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "152px";
      _this.colorPicker.name = "fontColor";
      _this.captioningObject.instance = _this.picker.color;
      if (_this.picker.color.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.color.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_BACKGROUND));
  this.picker.background = this.create("captioning-color-picker", captionContainer);
  this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor;
  EventHandler.create(this.picker.background, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPickerHandler();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "264px";
      _this.colorPicker.name = "backgroundColor";
      _this.captioningObject.instance = _this.picker.background;
      if (_this.picker.background.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.background.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_EDGE));
  this.picker.edge = this.create("captioning-color-picker", captionContainer);
  this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor;
  EventHandler.create(this.picker.edge, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPickerHandler();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "212px";
      _this.colorPicker.name = "edgeColor";
      _this.captioningObject.instance = _this.picker.edge;
      if (_this.picker.edge.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.edge.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  this.create("captioning-label-small", captionContainer, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_WINDOW));
  this.picker.window = this.create("captioning-color-picker", captionContainer);
  this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor;
  EventHandler.create(this.picker.window, EventHandler.CLICK, function(event) {
    var alpha, _ref;
    event.stopImmediatePropagation();
    _this.colorPickerHandler();
    _this.colorPicker.style.display = _this.colorPicker.style.display === "block" ? "none" : "block";
    if (_this.colorPicker.style.display === "block") {
      if ((_ref = _this.swatchColorCurr) != null) {
        _ref.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.colorPicker.style.left = "300px";
      _this.colorPicker.name = "windowColor";
      _this.captioningObject.instance = _this.picker.window;
      if (_this.picker.window.style.backgroundColor.indexOf('rgba') !== -1) {
        alpha = _this.picker.window.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, '').split(',')[3];
      }
      _this.colorPickerOpacity.value = alpha != null ? alpha : 1;
    }
    return false;
  });
  previewContainer = this.create(["caption-text", "caption-text-preview"]);
  previewPara = this.create(null, previewContainer, "p", this.localizationManager.getString(LocalizationConstants.MSG_CC_PREVIEW_TEXT));
  captionContainer = this.create("captioning-footer-container");
  applyButton = this.create("captioning-footer-button", captionContainer, "div", this.localizationManager.getString(LocalizationConstants.MSG_CC_APPLY));
  cancelButton = this.create("captioning-footer-button", captionContainer, "div", this.localizationManager.getString(LocalizationConstants.MSG_CC_CANCEL));
  resetButton = this.create("captioning-footer-button", captionContainer, "div", this.localizationManager.getString(LocalizationConstants.MSG_CC_RESET));
  if (this.captioning.getViewComponent().clientWidth >= 0) {
    toggleAdvancedButton = this.create("captioning-advanced-button", captionContainer, "div", this.localizationManager.getString(LocalizationConstants.MSG_CC_SHOW_ADVANCED));
    EventHandler.create(toggleAdvancedButton, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      if (_this.advancedSettingContainer.style.display === "block") {
        event.target.innerHTML = _this.localizationManager.getString(LocalizationConstants.MSG_CC_SHOW_ADVANCED);
        _this.advancedSettingContainer.style.display = "none";
        _this.colorPicker.style.display = "none";
      } else {
        event.target.innerHTML = _this.localizationManager.getString(LocalizationConstants.MSG_CC_HIDE_ADVANCED);
        _this.advancedSettingContainer.style.display = "block";
      }
      return false;
    });
  }
  EventHandler.create(applyButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, _this.settingsUiVisible);
    _this.applyCaptioningStyle(false, true);
    _this.sendNotification(CaptioningNotifications.SETTINGS_CHANGE, _this.captioningObject.selected);
    return false;
  });
  EventHandler.create(cancelButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, _this.settingsUiVisible);
    return false;
  });
  EventHandler.create(resetButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.colorPicker.style.display = "none";
    _this.applyCaptioningStyle(true);
    return false;
  });
  this.captionningStyle = this.create(null, document.getElementsByTagName('head')[0], "style");
  this.captionningStyle.type = 'text/css';
  colorArray = ["#000000", "#660000", "#990000", "#ff0000", "#000066", "#660066", "#990066", "#ff0066", "#006600", "#666600", "#996600", "#ff6600", "#006666", "#666666", "#996666", "#ff6666", "#009900", "#669966", "#999900", "#ff9900", "#009966", "#669966", "#999966", "#ff9966", "#00ff00", "#66ff00", "#99ff00", "#ffff00", "#00ff66", "#66ff66", "#99ff66", "#ffff66", "#000099", "#660099", "#990099", "#ff0099", "#0000ff", "#6600ff", "#9900ff", "#ff00ff", "#006699", "#666699", "#996699", "#ff6699", "#0066ff", "#6666ff", "#9966ff", "#ff66ff", "#009999", "#669999", "#999999", "#ff9999", "#0099ff", "#6699ff", "#9999ff", "#ff99ff", "#0099ff", "#66ff99", "#99ff99", "#ffff99", "#00ffff", "#66ffff", "#99ffff", "#ffffff"];
  this.colorPicker = this.create("colorpicker-palette", this.viewComponent.parentElement);
  swatch = this.create("colorpicker-swatch", false, null, "&nbsp;");
  for (_i = 0, _len = colorArray.length; _i < _len; _i++) {
    color = colorArray[_i];
    swatch.style.backgroundColor = color;
    clonedSwatch = swatch.cloneNode();
    EventHandler.create(clonedSwatch, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      if (_this.swatchColorCurr !== null) {
        _this.swatchColorCurr.style.borderColor = "rgba(0,0,0,0.3)";
      }
      _this.swatchColorCurr = event.target;
      _this.swatchColorCurr.style.borderColor = "rgba(255, 50, 50, 1)";
      _this.captioningObject.instance.style.backgroundColor = _this.captioningObject.selected[_this.colorPicker.name] = _this.toRGBA(event.target.style.backgroundColor);
      _this.applyCaptioningStyle(false);
      return false;
    });
    this.colorPicker.appendChild(clonedSwatch);
  }
  this.create("opacity-label", this.colorPicker, "span", this.localizationManager.getString(LocalizationConstants.MSG_CC_OPACITY));
  this.colorPickerOpacity = this.create("colorpicker-slider", this.colorPicker, "input");
  this.colorPickerOpacity.type = "range";
  this.colorPickerOpacity.min = 0;
  this.colorPickerOpacity.max = 1;
  this.colorPickerOpacity.step = .1;
  this.colorPickerOpacity.value = 1;
  EventHandler.create(this.colorPickerOpacity, "change", function(event) {
    event.stopImmediatePropagation();
    _this.captioningObject.instance.style.backgroundColor = _this.captioningObject.selected[_this.colorPicker.name] = _this.toRGBA(_this.captioningObject.instance.style.backgroundColor);
    _this.applyCaptioningStyle(false);
    return false;
  });
  this.swatchOpacityCurr = this.colorPickerOpacity;
  try {
    if (localStorage.getItem(Namespace.PREFIX + "captioningDefault") != null) {
      this.captioningObject.selected = JSON.parse(localStorage.getItem(Namespace.PREFIX + "captioningDefault"));
      this.applyCaptioningStyle(false, !this.captioning.getHidden());
    } else {
      isDefault = !((this.captioning.config.style != null) || this.captioning.config.style !== "undefined");
      if (!isDefault) {
        this.captioningObject.selected = this.cloneObject(this.captioning.config.style);
      }
      this.applyCaptioningStyle(isDefault);
    }
  } catch (_error) {}
  this.setSettings(Object.keys(this.captioningObject.selected).length > 0 ? this.captioningObject.selected : this.captioningObject["default"]);
  this.toggleButtonHandler(!this.captioning.getHidden(), false);
};

CaptionsSettingsMediator.prototype.toRGBA = function(colorCode) {
  var rbga, rgb;
  rgb = colorCode.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
  rbga = 'rgba(' + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + this.swatchOpacityCurr.value + ')';
  return rbga;
};

CaptionsSettingsMediator.prototype.onScrollListChange = function(value) {
  var _ref;
  if (value != null) {
    this.captioningObject.selected.scroll = this.scroll.type = value;
  }
  this.setSettings({
    scroll: this.scroll.type
  });
  try {
    if (((_ref = this.captioning.proxy.renderer) != null ? _ref.viewComponent : void 0) != null) {
      if (this.scroll.type === "painton") {
        ClassList.add("akamai-captioning-typed", this.captioning.proxy.renderer.viewComponent);
      } else {
        ClassList.remove("akamai-captioning-typed", this.captioning.proxy.renderer.viewComponent);
      }
    }
  } catch (error) {
    this.facade.logger.error("AMP Captioning Error", error);
  }
};

CaptionsSettingsMediator.prototype.languageListPopulate = function() {
  var language, track, tracks, _i, _len, _ref;
  tracks = this.captioning.getTracks();
  if (!(tracks != null)) {
    return;
  }
  this.list.language.innerHTML = "";
  for (_i = 0, _len = tracks.length; _i < _len; _i++) {
    track = tracks[_i];
    language = track.language;
    language = this.facade.player.retrieveProxy(LocalizationProxy.NAME).getLanguageString(language);
    if ((language != null) && language !== "") {
      this.create(null, this.list.language, "option", language).value = track.language;
    }
  }
  this.toggle.disabled = this.list.language.childElementCount === 0;
  if (this.toggle.disabled) {
    this.create(null, this.list.language, "option", "None");
  }
  this.list.language.value = (_ref = this.captioning.getTrack()) != null ? _ref.language : void 0;
};

CaptionsSettingsMediator.prototype.colorPickerHandler = function(unbind) {
  var _this = this;
  if (unbind == null) {
    unbind = false;
  }
  if (unbind) {
    return EventHandler.unbind(document, EventHandler.CLICK);
  }
  EventHandler.create(document, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.colorPickerHandler(true);
    if (event.target.className !== "akamai-colorpicker-palette" && event.target.className !== "akamai-opacity-label" && event.target.className !== "akamai-colorpicker-slider" && _this.colorPicker.style.display !== "none") {
      _this.colorPicker.style.display = "none";
    }
    return false;
  });
};

CaptionsSettingsMediator.prototype.cloneObject = function(clone) {
  var cloned, key;
  cloned = {};
  for (key in clone) {
    cloned[key] = clone[key];
  }
  return cloned;
};

CaptionsSettingsMediator.prototype.applyCaptioningStyle = function(isDefault, isApply, settingsDefault) {
  var backgroundColor, color, containerStyle, edgeType, fontFamily, fontSize, id, windowColor, windowColorValue;
  if (isDefault == null) {
    isDefault = false;
  }
  if (isApply == null) {
    isApply = false;
  }
  if (settingsDefault == null) {
    settingsDefault = false;
  }
  if (isDefault) {
    this.captioningObject.selected = this.cloneObject(this.captioningObject["default"]);
    this.list.font.value = this.captioningObject["default"].fontFamily;
    this.list.edge.value = this.captioningObject["default"].edgeType != null ? this.captioningObject["default"].edgeType : "text-shadow: 0px 0px 0px";
    this.list.size.value = this.captioningObject["default"].size;
    this.list.scroll.value = this.captioningObject["default"].scroll;
    this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor;
    this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor;
    this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor;
    this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor;
  } else {
    if ((this.captioningObject.selected.fontFamily != null) && !settingsDefault) {
      this.list.font.value = this.captioningObject.selected.fontFamily;
    }
    this.list.edge.value = this.captioningObject.selected.edgeType != null ? this.captioningObject.selected.edgeType : "text-shadow: 0px 0px 0px";
    if (this.captioningObject.selected.size != null) {
      this.list.size.value = this.captioningObject.selected.size;
    }
    if (this.captioningObject.selected.scroll != null) {
      this.list.scroll.value = this.captioningObject.selected.scroll;
    } else {
      this.captioningObject.selected.scroll = this.list.scroll.value;
    }
    this.picker.color.style.backgroundColor = this.captioningObject.selected.fontColor;
    if (this.captioningObject.selected.backgroundColor != null) {
      this.picker.background.style.backgroundColor = this.captioningObject.selected.backgroundColor;
    }
    if (this.captioningObject.selected.edgeColor != null) {
      this.picker.edge.style.backgroundColor = this.captioningObject.selected.edgeColor;
    }
    if (this.captioningObject.selected.windowColor != null) {
      this.picker.window.style.backgroundColor = this.captioningObject.selected.windowColor;
    }
  }
  fontFamily = "font-family: " + (isDefault ? this.captioningObject["default"].fontFamily : settingsDefault ? this.captioningObject.selected.fontFamily : this.list.font.value) + " !important;";
  edgeType = (isDefault ? this.captioningObject["default"].edgeType + this.captioningObject["default"].edgeColor : this.list.edge.value + " " + this.picker.edge.style.backgroundColor) + " !important;";
  fontSize = "font-size: " + (isDefault ? this.captioningObject["default"].size : this.list.size.value) + " !important;";
  color = "color: " + (isDefault ? this.captioningObject["default"].fontColor : this.picker.color.style.backgroundColor) + " !important;";
  backgroundColor = "background-color: " + (isDefault ? this.captioningObject["default"].backgroundColor : this.picker.background.style.backgroundColor) + " !important;";
  windowColor = "background-color: " + (isDefault ? this.captioningObject["default"].windowColor : this.picker.window.style.backgroundColor) + " !important;";
  containerStyle = "line-height:2.2em;";
  windowColorValue = windowColor.match(/rgba\([^)]+\)/g);
  if ((windowColorValue != null) && windowColorValue instanceof Array && windowColorValue.length > 0) {
    containerStyle = Number(windowColorValue[0].replace(/^.*, (.+)\)/, '$1')) === 0 ? "" : containerStyle;
  }
  if (isApply) {
    this.onScrollListChange();
    id = this.facade.player.viewComponent.id;
    this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText = '#' + id + ' .akamai-caption-text { ' + fontFamily + fontSize + edgeType + windowColor + ' } #' + id + ' .akamai-caption-text p { ' + color + backgroundColor + ' } ' + 'video::-webkit-media-text-track-display { ' + windowColor + ' } video::-webkit-media-text-track-display span { ' + fontFamily + fontSize + edgeType + backgroundColor + ' } video::-webkit-media-text-track-display { ' + windowColor + ' } video::cue { ' + color + fontFamily + fontSize + edgeType + backgroundColor + ' } video::-webkit-media-text-track-container {' + containerStyle + '} video::-webkit-media-text-track-display-backdrop { background-color: rgba(0, 0, 0, 0) !important;}';
    try {
      if (isDefault === false && !settingsDefault) {
        localStorage.setItem(Namespace.PREFIX + "captioningDefault", JSON.stringify(this.captioningObject.selected));
      }
    } catch (localStorageError) {
      this.facade.logger.error("LocalStorage Not Supported on this Browser", localStorageError);
    }
  } else {
    this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText + '#' + id + ' .akamai-caption-text.akamai-caption-text-preview { ' + fontFamily + fontSize + edgeType + windowColor + ' } #' + id + ' .akamai-caption-text.akamai-caption-text-preview p { ' + color + backgroundColor + ' }';
  }
};

CaptionsSettingsMediator.prototype.toggleButtonHandler = function(isON, isTargetButton) {
  if (isON == null) {
    isON = false;
  }
  if (isTargetButton == null) {
    isTargetButton = true;
  }
  if (isON) {
    ClassList.add("captioning-floater-btnselected", this.toggle.ON, this.classList.prefix);
    ClassList.remove("captioning-floater-btnselected", this.toggle.OFF, this.classList.prefix);
  } else {
    ClassList.add("captioning-floater-btnselected", this.toggle.OFF, this.classList.prefix);
    ClassList.remove("captioning-floater-btnselected", this.toggle.ON, this.classList.prefix);
  }
  if (isTargetButton) {
    this.captioning.setHidden(!isON);
  }
  this.sendNotification(UserSettingsNotifications.UPDATE_SETTINGS, {
    captioning: {
      hidden: !isON
    }
  });
};

CaptionsSettingsMediator.prototype.setSettings = function(value) {
  this.settings = value;
  return value;
};

CaptionsSettingsMediator.prototype.getSettings = function() {
  return this.settings;
};

/**
 * @override
*/
CaptionsSettingsMediator.prototype.listNotificationInterests = function() {
  return [CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE, CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY, CaptioningNotifications.SETTINGS_CHANGE];
};

/**
 * @override
*/
CaptionsSettingsMediator.prototype.handleNotification = function(notification) {
  var body, fName, fValue, i, isDefault, k, listString, name, note, option, state, v, _i, _len, _ref;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case CaptioningNotifications.SETTINGS_VISIBILITY_CHANGE:
    case CaptioningNotifications.TOGGLE_SETTINGS_VISIBILITY:
      if (this.settingsUiVisible) {
        this.colorPicker.style.display = "none";
      }
      this.settingsUiVisible = !this.settingsUiVisible;
      if (this.settingsUiVisible && this.list.language.length === 1) {
        this.languageListPopulate();
      }
      note = this.settingsUiVisible ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
      state = "cc-setting-active";
      this.toggleButtonHandler(!this.captioning.getHidden(), false);
      this.list.language.value = this.captioning.getTrack().language;
      this.onScrollListChange(this.captioningObject.selected.scroll);
      this.sendNotification(note, state);
      break;
    case CaptioningNotifications.SETTINGS_CHANGE:
      isDefault = false;
      for (k in body) {
        v = body[k];
        switch (k) {
          case "fontFamily":
          case "fontSize":
          case "scroll":
          case "edgeType":
            listString = k === "fontFamily" ? "font" : k === "fontSize" ? "size" : k === "edgeType" ? "edge" : "scroll";
            _ref = this.list[listString].options;
            for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
              option = _ref[i];
              if (k === "fontFamily" && typeof v === "object") {
                for (fName in v) {
                  fValue = v[fName];
                  if (fName === "default") {
                    this.captioningObject.selected.fontFamily = fValue;
                    isDefault = true;
                  }
                  if ((new RegExp(fName, "i")).test(option.label)) {
                    if (!(new RegExp("^" + fValue)).test(option.value)) {
                      option.value = fValue + "," + option.value;
                    }
                    if (option.selected) {
                      this.captioningObject.selected.fontFamily = option.value;
                    }
                  }
                }
              } else if ((new RegExp("^" + v + "$", "i")).test(option.label)) {
                this.list[listString].selectedIndex = i;
                if (k === "fontSize") {
                  k = "size";
                }
                this.captioningObject.selected[k] = option.value;
                if (k === "scroll") {
                  this.scroll.type = this.captioningObject.selected.scroll = option.value;
                  this.setSettings({
                    scroll: this.scroll.type
                  });
                  try {
                    if (option.value === "painton") {
                      ClassList.add("akamai-captioning-typed", this.captioning.proxy.renderer.viewComponent);
                    } else {
                      ClassList.remove("akamai-captioning-typed", this.captioning.proxy.renderer.viewComponent);
                    }
                  } catch (error) {
                    this.facade.logger.error("AMP Captioning Error", error);
                  }
                }
              }
            }
            break;
          case "backgroundColor":
          case "edgeColor":
          case "fontColor":
          case "windowColor":
            this.captioningObject.selected[k] = v;
        }
      }
      this.applyCaptioningStyle(false, true, isDefault);
      if ((body.visible != null) && body.visible !== !this.captioning.getHidden()) {
        this.captioning.setHidden(!body.visible);
      }
  }
};

/**
 * @constructor
 * @private
*/
function PlayOverlayMediator() {
  PlayOverlayMediator.__super__.constructor.call(this);
}


__extends(PlayOverlayMediator, OverlayMediator);


PlayOverlayMediator.prototype.componentName = "play";

PlayOverlayMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE);
  return false;
};

function VolumePanelControlMediator(componentName) {
  VolumePanelControlMediator.__super__.constructor.call(this, componentName);
}


__extends(VolumePanelControlMediator, PanelControlMediator);


VolumePanelControlMediator.prototype.clickHandler = function() {
  this.sendNotification(Notifications.TOGGLE_MUTED);
};

/**
 * The VolumeMediator class.
 *
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function VolumeMediator(parent, direction) {
  VolumeMediator.__super__.constructor.call(this, parent, direction);
}


__extends(VolumeMediator, SliderMediator);


VolumeMediator.prototype.componentName = "volume";

VolumeMediator.prototype.draggable = true;

/**
 * @override
*/
VolumeMediator.prototype.valueChanged = function() {
  this.sendNotification(Notifications.CHANGE_VOLUME, this.value);
  this.sendNotification(UserSettingsNotifications.UPDATE_SETTINGS, {
    volume: this.value
  });
};

/**
 * @override
*/
VolumeMediator.prototype.listNotificationInterests = function() {
  return [Notifications.VOLUME_CHANGE, Notifications.READY];
};

/**
 * @override
*/
VolumeMediator.prototype.handleNotification = function(notification) {
  switch (notification.getName()) {
    case Notifications.READY:
      this.updateValue(this.facade.player.getVolume(), true);
      break;
    case Notifications.VOLUME_CHANGE:
      this.updateValue(notification.getBody());
  }
};

/**
 * The ControlPanelMediator class.
 *
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function ControlPanelMediator() {
  ControlPanelMediator.__super__.constructor.call(this);
  this.controls = {};
}


__extends(ControlPanelMediator, PluginMediator);


ControlPanelMediator.prototype.panel = null;

ControlPanelMediator.prototype.control = null;

ControlPanelMediator.prototype.separator = null;

ControlPanelMediator.prototype.controls = null;

ControlPanelMediator.prototype.labels = null;

ControlPanelMediator.prototype.closed = true;

ControlPanelMediator.prototype.panelClass = PanelMediator;

ControlPanelMediator.prototype.controlClass = PanelControlMediator;

/**
 * @override
*/
ControlPanelMediator.prototype.onRegister = function() {
  this.panel = this.createPanel(this.componentName);
  this.control = this.createControl(this.componentName);
  this.separator = this.createSeparator(this.componentName);
  this.panel.control = this.control;
  this.control.panel = this.panel;
  if (this.labels == null) {
    this.labels = {};
  }
  this.createPanelControls(this.componentName);
};

ControlPanelMediator.prototype.createControl = function(name) {
  var control;
  control = new this.controlClass(name);
  this.facade.registerMediator(control);
  return control;
};

ControlPanelMediator.prototype.createPanel = function(name) {
  var panel;
  panel = new this.panelClass(name);
  this.facade.registerMediator(panel);
  return panel;
};

ControlPanelMediator.prototype.createSeparator = function(name) {
  return this.create(["separator", "icon"], this.panel);
};

ControlPanelMediator.prototype.createPanelControls = function(name) {
  var data, key, value, _base, _ref;
  data = (typeof (_base = this.plugin).getConfigurationData === "function" ? _base.getConfigurationData() : void 0) || this.facade.getConfig()[this.componentName];
  for (key in data) {
    value = data[key];
    if (value === true) {
      this.controls[key] = this.addPanelControl(new ButtonMediator(this.localizationManager.getString(this.labels[key]), null, null, key, (_ref = this.panelButtonClickHandler) != null ? typeof _ref.bind === "function" ? _ref.bind(this, key) : void 0 : void 0));
    }
  }
};

ControlPanelMediator.prototype.addPanelControl = function(control) {
  this.facade.registerMediator(control);
  this.panel.getViewComponent().appendChild(control.getViewComponent());
  return control;
};

/**
*/
ControlPanelMediator.prototype.panelButtonClickHandler = function() {
  this.sendNotification(PanelNotifications.CLOSE_PANEL, this.panel);
};

/**
 * The VolumePanelMediator class.
 *
 * @constructor
 * @private
 * @extends {ControlPanelMediator}
*/
function VolumePanelMediator() {
  VolumePanelMediator.__super__.constructor.call(this);
}


__extends(VolumePanelMediator, ControlPanelMediator);


VolumePanelMediator.prototype.componentName = "volume";

VolumePanelMediator.prototype.slider = null;

VolumePanelMediator.prototype.level = null;

VolumePanelMediator.prototype.controlClass = VolumePanelControlMediator;

/**
*/
VolumePanelMediator.prototype.onRegister = function() {
  var _ref;
  VolumePanelMediator.__super__.onRegister.call(this);
  this.slider = new VolumeMediator(this.panel, (_ref = this.facade.getConfig().volume) != null ? _ref.direction : void 0);
  this.facade.registerMediator(this.slider);
};

VolumePanelMediator.prototype.updateVolumeButton = function(percent) {
  var level;
  level = Math.ceil(percent * 10);
  if (level === this.level) {
    return;
  }
  if (this.level != null) {
    this.sendNotification(Notifications.REMOVE_CONTROL_STATE, "volume-" + this.level);
  }
  this.level = level;
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "volume-" + this.level);
};

/**
 * @override
*/
VolumePanelMediator.prototype.listNotificationInterests = function() {
  return VolumePanelMediator.__super__.listNotificationInterests.apply(this, arguments).concat([Notifications.VOLUME_CHANGE]);
};

/**
 * @override
*/
VolumePanelMediator.prototype.handleNotification = function(notification) {
  VolumePanelMediator.__super__.handleNotification.call(this, notification);
  switch (notification.getName()) {
    case Notifications.VOLUME_CHANGE:
      this.updateVolumeButton(notification.body);
  }
};

/**
 * The PanelsMediator class.
 * 
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function PanelsMediator(parent) {
  this.panels = [];
  this.closeHandler = this.mouseupHandler.bind(this);
  PanelsMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(PanelsMediator, ComponentMediator);


PanelsMediator.prototype.componentName = "panels";

PanelsMediator.prototype.activePanel = null;

PanelsMediator.prototype.panels = null;

PanelsMediator.prototype.closeHandler = null;

/**
 * @override
*/
PanelsMediator.prototype.listNotificationInterests = function() {
  var key, value;
  return ((function() {
    var _results;
    _results = [];
    for (key in PanelNotifications) {
      value = PanelNotifications[key];
      _results.push(value);
    }
    return _results;
  })()).concat([]);
};

/**
 * @override
*/
PanelsMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case PanelNotifications.ADD_PANEL:
      this.addPanel(body);
      break;
    case PanelNotifications.REMOVE_PANEL:
      this.removePanel(body);
      break;
    case PanelNotifications.OPEN_PANEL:
      this.openPanel(body);
      break;
    case PanelNotifications.CLOSE_PANEL:
      this.closePanel(body);
      break;
    case PanelNotifications.CLOSE_ALL_PANELS:
      this.closeAllPanels(body);
      break;
    case PanelNotifications.TOGGLE_PANEL:
      this.togglePanel(body);
  }
};

PanelsMediator.prototype.addPanel = function(panel) {
  this.panels.push(panel);
  this.viewComponent.appendChild(panel.getViewComponent());
};

PanelsMediator.prototype.removePanel = function(panel) {
  this.panels.splice(this.panels.indexOf(panel), 1);
  this.viewComponent.removeChild(panel.getViewComponent());
};

PanelsMediator.prototype.openPanel = function(panel) {
  if (panel === this.activePanel || !(panel != null)) {
    return;
  }
  this.closeAllPanels();
  this.activePanel = panel;
  this.activePanel.classList.add("active");
  if (Utils.getDevice() !== "desktop") {
    this.sendNotification(Notifications.IS_USER_ACTIVE, true);
  }
  document.addEventListener("mouseup", this.closeHandler);
};

PanelsMediator.prototype.closePanel = function(panel) {
  panel.classList.remove("active");
  if (this.activePanel != null) {
    this.activePanel = null;
    if (Utils.getDevice() !== "desktop") {
      this.sendNotification(Notifications.IS_USER_ACTIVE, false);
    }
    document.removeEventListener("mouseup", this.closeHandler);
  }
};

PanelsMediator.prototype.togglePanel = function(panel) {
  if (panel === this.activePanel) {
    this.closePanel(panel);
  } else {
    this.openPanel(panel);
  }
};

PanelsMediator.prototype.closeAllPanels = function() {
  var panel, _i, _len, _ref;
  _ref = this.panels;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    panel = _ref[_i];
    this.closePanel(panel);
  }
};

PanelsMediator.prototype.mouseupHandler = function(event) {
  var button, element, panel;
  element = document.elementFromPoint(event.clientX, event.clientY);
  panel = this.activePanel.getViewComponent();
  button = this.activePanel.control.getViewComponent();
  if (element !== panel && panel.contains(element) === false && element !== button && button.contains(element) === false) {
    this.closeAllPanels();
  }
};

/**
 * The ProgressMediator class.
 *
 * @constructor
 * @private
 * @extends {ModuleMediator}
 * @param {Object} viewComponent
*/
function ProgressMediator(parent) {
  ProgressMediator.__super__.constructor.call(this, parent, "horizontal");
}


__extends(ProgressMediator, SliderMediator);


/**
 * The name of the this Mediator.
 *
 * @static
 * @type {string}
*/
ProgressMediator.prototype.componentName = "progress";

ProgressMediator.prototype.bufferValue = null;

ProgressMediator.prototype.scrubTime = null;

ProgressMediator.prototype.scrubTimeSeparator = null;

ProgressMediator.prototype.cuePoints = null;

ProgressMediator.prototype.cues = null;

ProgressMediator.prototype.duration = 0;

ProgressMediator.prototype.isLive = false;

ProgressMediator.prototype.seeking = false;

ProgressMediator.prototype.previewData = {
  src: null,
  previewWidth: null,
  previewHeight: null,
  imgWidth: null,
  imgHeight: null,
  count: null
};

ProgressMediator.prototype.hoverHandler = null;

ProgressMediator.prototype.mouseoutHandler = null;

ProgressMediator.prototype.mouseMoveHandler = null;

ProgressMediator.prototype.previewMoveHandler = null;

/**
 * @override
*/
ProgressMediator.prototype.onRegister = function() {
  ProgressMediator.__super__.onRegister.call(this);
  this.bufferValue = this.create("buffer-value", false);
  this.trackView.insertBefore(this.bufferValue, this.trackView.lastChild);
  this.cuePoints = this.create("cue-points", this.trackView);
  this.scrubTimeSeparator = this.create("scrub-time-separator");
  this.scrubTime = this.create("scrub-time");
  this.thumbPreview = this.create("thumb-preview", this.trackView);
  this.previewMoveHandler = EventHandler.create(this.clickView, EventHandler.MOVE, this.updatePreviewHandler.bind(this));
  this.previewMoveHandler.unbind();
  this.hoverHandler = EventHandler.create(this.clickView, EventHandler.HOVER, this.handlehoverHandler.bind(this));
  this.mouseoutHandler = EventHandler.create(this.clickView, EventHandler.HOVEROUT, this.handlemouseoutHandler.bind(this));
  this.mouseoutHandler.unbind();
  EventHandler.create(this.clickView, EventHandler.HOVER, this.mouseOverHandler.bind(this));
  EventHandler.create(this.clickView, EventHandler.HOVEROUT, this.mouseOutHandler.bind(this));
  this.mouseMoveBinding = EventHandler.create(document, EventHandler.MOVE, this.mouseMoveHandler.bind(this));
  this.mouseMoveBinding.unbind();
};

/**
 * @override
*/
ProgressMediator.prototype.listNotificationInterests = function() {
  return [Notifications.ENDED, Notifications.MEDIA_CHANGE, Notifications.DURATION_CHANGE, Notifications.PROGRESS, Notifications.CUES_CHANGE, Notifications.DISPLAY_TIME, AdNotifications.BREAK_START];
};

/**
 * @override
*/
ProgressMediator.prototype.handleNotification = function(notification) {
  var body, name, value;
  ProgressMediator.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.MEDIA_CHANGE:
      this.isLive = body.temporalType === "live";
      this.updateValue(0);
      this.bufferValue.style.width = "0%";
      this.updatePreview(body.metadata);
      break;
    case Notifications.PROGRESS:
      value = Utils.clamp(body / this.duration * 100, 0, 100);
      this.bufferValue.style.width = value + "%";
      break;
    case Notifications.DURATION_CHANGE:
      this.duration = body;
      this.updateCuePoints();
      break;
    case Notifications.ENDED:
      this.updateValue(1.0);
      break;
    case Notifications.CUES_CHANGE:
      this.cues = body;
      this.updateCuePoints();
      break;
    case Notifications.DISPLAY_TIME:
      if (this.dragging === false) {
        this.updateValue(body.currentTime / body.duration, body.duration);
      }
      break;
    case AdNotifications.BREAK_START:
      if (this.getDragging()) {
        this.handleReleaseHandler();
      }
  }
};

ProgressMediator.prototype.updateCuePoints = function() {
  var cue, cuePoint, _i, _len, _ref;
  if (!(this.cues != null)) {
    return;
  }
  if (this.facade.config.displaySceneMarkers === false) {
    return;
  }
  this.removeCuePoints();
  _ref = this.cues;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    cue = _ref[_i];
    if (!(cue.startTime !== 0 && cue.startTime !== -1)) {
      continue;
    }
    cuePoint = this.create("cue-point", this.cuePoints);
    cuePoint.style.left = (cue.startTime / this.duration * 100) + "%";
  }
};

ProgressMediator.prototype.preloadPreviewImages = function(metadata) {
  var i, image;
  i = 1;
  while (i < metadata.previewThumbnailCount) {
    image = new Image;
    image.src = metadata.previewThumbnailSrc + "out" + i + ".png";
    i++;
  }
};

ProgressMediator.prototype.updatePreview = function(metadata) {
  this.preloadPreviewImages(metadata);
  this.previewData.src = metadata.previewThumbnailSrc;
  this.previewData.previewHeight = metadata.previewThumbnailHeight;
  this.previewData.previewWidth = metadata.previewThumbnailWidth;
  this.previewData.count = metadata.previewThumbnailCount;
  if (this.previewData.src === void 0) {
    this.hoverHandler.unbind();
  }
};

ProgressMediator.prototype.handlehoverHandler = function(event) {
  this.previewMoveHandler.bind();
  this.mouseoutHandler.bind();
  this.hoverHandler.unbind();
  this.updatePreviewHandler(event);
  event.stopImmediatePropagation();
  return false;
};

ProgressMediator.prototype.handlemouseoutHandler = function(event) {
  this.previewMoveHandler.unbind();
  this.mouseoutHandler.unbind();
  this.hoverHandler.bind();
  event.stopImmediatePropagation();
  return false;
};

ProgressMediator.prototype.mouseOverHandler = function(event) {
  this.mouseOver = true;
  this.classList.add("active");
  this.mouseMoveBinding.bind();
};

ProgressMediator.prototype.mouseOutHandler = function(event) {
  this.mouseOver = false;
  if (this.getDragging() === true) {
    return;
  }
  this.classList.remove("active");
  this.mouseMoveBinding.unbind();
};

ProgressMediator.prototype.mouseMoveHandler = function(event) {
  var value;
  value = this.calculateValue(event);
  this.scrubTime.textContent = Utils.formatTimecode(Math.round(value * this.duration));
  this.scrubTime.style.left = this.scrubTimeSeparator.style.left = "" + ((value * 100).toFixed(2)) + "%";
};

ProgressMediator.prototype.updatePreviewHandler = function(event) {
  var thumbPreviewPos, value;
  value = this.calculateValue(event);
  this.previewInterval = this.duration / this.previewData.count;
  this.previewImgIndex = Math.floor(value * this.duration / this.previewInterval);
  if (this.previewData.src) {
    this.thumbPreview.style.backgroundImage = "url(" + this.previewData.src + "out" + (this.previewImgIndex + 1) + ".png)";
  }
  this.thumbPreview.style.width = this.previewData.previewWidth + "px";
  this.thumbPreview.style.height = this.previewData.previewHeight + "px";
  thumbPreviewPos = Utils.clamp(((value * 100) - 10).toFixed(2), 1, 80);
  this.thumbPreview.style.left = "" + thumbPreviewPos + "%";
};

ProgressMediator.prototype.removeCuePoints = function() {
  if (!(this.cuePoints != null)) {
    return;
  }
  this.cuePoints.innerHTML = "";
};

/**
 * @override
*/
ProgressMediator.prototype.valueChanged = function() {
  this.sendNotification(UserNotifications.SEEK, this.value * this.facade.player.retrieveProxy(PlaybackProxy.NAME).getDuration());
};

/** updates the view
*/
ProgressMediator.prototype.updateValue = function(value) {
  if (value === this.value) {
    return;
  }
  if (this.isLive === true) {
    value = 1;
  }
  if (isNaN(value) === true) {
    value = 0;
  }
  ProgressMediator.__super__.updateValue.call(this, value);
  if (this.getDragging() && this.value >= this.max) {
    this.handleReleaseHandler();
    this.sendNotification(Notifications.END);
  }
};

ProgressMediator.prototype.updateHandler = function(setValue, event) {
  ProgressMediator.__super__.updateHandler.call(this, setValue, event);
  this.mouseMoveHandler(event);
};

ProgressMediator.prototype.handlePressHandler = function(event) {
  ProgressMediator.__super__.handlePressHandler.call(this, event);
  this.classList.add("scrubbing");
};

ProgressMediator.prototype.handleReleaseHandler = function(event) {
  var self;
  ProgressMediator.__super__.handleReleaseHandler.call(this, event);
  self = this;
  setTimeout(function() {
    return self.classList.remove("scrubbing");
  }, 500);
  if (this.mouseOver === false) {
    this.mouseOutHandler();
  }
};

/**
 * The PlayPauseMediator class.
 *
 * @constructor
 * @private
 * @extends {ButtonMediator}
*/
function PlayPauseMediator(parent) {
  PlayPauseMediator.__super__.constructor.call(this, null, parent);
}


__extends(PlayPauseMediator, ButtonMediator);


PlayPauseMediator.prototype.componentName = "play-pause";

PlayPauseMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  event.preventDefault();
  this.sendNotification(UserNotifications.TOGGLE_PLAY_PAUSE);
  return false;
};

/**
 * The ChromeCastTogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastTogglePlayPauseCommand() {
  ChromeCastTogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(ChromeCastTogglePlayPauseCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastTogglePlayPauseCommand.prototype.execute = function(notification) {
  switch (this.applicationState.getPlayState()) {
    case PlayState.ENDED:
      this.plugin.setCurrentTime(0);
      this.plugin.play();
      break;
    case PlayState.PAUSED:
    case PlayState.READY:
      this.plugin.play();
      break;
    case PlayState.PLAYING:
    case PlayState.WAITING:
      this.plugin.pause();
  }
};

/**
 * The ChromeCastButtonMediator class.
 *
 * @constructor
 * @extends {PluginMediator}
 * @param {Object} parent
 * @private
*/
function ChromeCastButtonMediator() {
  ChromeCastButtonMediator.__super__.constructor.call(this);
}


__extends(ChromeCastButtonMediator, ButtonMediator);


ChromeCastButtonMediator.prototype.componentName = "chromecast";

ChromeCastButtonMediator.prototype.onclick = function(event) {
  event.stopImmediatePropagation();
  this.sendNotification(ChromeCastNotifications.LAUNCH);
  return false;
};

/**
 * The ControlsMediator class.
 *
 * @constructor
 * @private
 * @extends {LayerMediator}
*/
function ControlsMediator() {
  ControlsMediator.__super__.constructor.call(this);
}


__extends(ControlsMediator, LayerMediator);


ControlsMediator.prototype.componentName = "controls";

ControlsMediator.prototype.activeControlPanel = null;

ControlsMediator.prototype.controlBar = null;

ControlsMediator.prototype.panels = null;

/**
 * @override
*/
ControlsMediator.prototype.onRegister = function() {
  var separator, titlebar;
  this.facade.registerMediator(new ErrorLayerMediator());
  if (this.facade.player.config.debug !== true) {
    if (this.facade.player.config.contextmenu && this.facade.player.config.contextmenu.enabled !== false) {
      this.facade.registerMediator(new contextMenuMediator());
    }
  }
  ControlsMediator.__super__.onRegister.call(this);
  this.facade.viewComponent = this.viewComponent;
  this.facade.registerMediator(new PosterMediator());
  this.facade.registerMediator(new LoadingOverlayMediator());
  this.facade.registerMediator(new WaitingOverlayMediator());
  this.facade.registerMediator(new ReplayOverlayMediator());
  this.facade.registerMediator(new EndSlateMediator());
  titlebar = this.facade.config.titlebar || this.facade.player.config.titlebar || {};
  if (titlebar.enabled !== false) {
    this.facade.registerMediator(new TitleBarMediator());
  }
  this.controlBar = this.create("control-bar");
  this.facade.registerMediator(new PanelsMediator(this.viewComponent));
  this.facade.registerMediator(new PlayPauseMediator(this.controlBar));
  this.facade.registerMediator(new TimeDisplayMediator(this.controlBar));
  this.facade.registerMediator(new ProgressMediator(this.controlBar));
  if (this.facade.config.logo != null) {
    this.facade.registerMediator(new LogoMediator(this.controlBar));
  }
  this.facade.registerMediator(new GoLiveMediator(this.controlBar));
  if (this.facade.player.captioning != null) {
    this.facade.registerMediator(new CaptionsMediator());
    this.facade.registerMediator(new CaptionsSettingsMediator(this.viewComponent));
  }
  this.facade.registerMediator(new VolumePanelMediator());
  this.facade.ads = new AdMediator();
  this.facade.registerMediator(this.facade.ads);
  this.facade.registerMediator(new PlayOverlayMediator());
  separator = this.create("separator", this.controlBar);
};

/**
 * @override
*/
ControlsMediator.prototype.listNotificationInterests = function() {
  return [Notifications.READY, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, Notifications.SET_MEDIA, AdNotifications.BREAK_START, AdNotifications.BREAK_END];
};

/**
 * @override
*/
ControlsMediator.prototype.handleNotification = function(notification) {
  var body, name, _ref;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.READY:
      if (((_ref = body.fullscreen) != null ? _ref.enabled : void 0) !== false) {
        this.facade.registerMediator(new FullScreenMediator(this.controlBar));
      }
      break;
    case Notifications.SET_MEDIA:
    case AdNotifications.BREAK_END:
      this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
      break;
    case AdNotifications.BREAK_START:
      this.sendNotification(Notifications.ADD_APPLICATION_STATE, "ad-mode");
      break;
    case Notifications.ADD_CONTROL_STATE:
      this.classList.add(body);
      break;
    case Notifications.REMOVE_CONTROL_STATE:
      this.classList.remove(body);
      break;
    case Notifications.ADD_CONTROL:
      this.controlBar.appendChild(body);
      break;
    case Notifications.REMOVE_CONTROL:
      if (this.controlBar.contains(body)) {
        this.controlBar.removeChild(body);
      }
  }
};

/**
 * The ChromeCastControlsMediator class.
 * 
 * @constructor
 * @extends {PluginMediator}
 * @private
*/
function ChromeCastControlsMediator() {
  ChromeCastControlsMediator.__super__.constructor.call(this);
}


__extends(ChromeCastControlsMediator, ControlsMediator);


ChromeCastControlsMediator.prototype.componentName = "chromecast-controls";

ChromeCastControlsMediator.prototype.message = null;

ChromeCastControlsMediator.prototype.messageContainer = null;

ChromeCastControlsMediator.prototype.button = null;

ChromeCastControlsMediator.prototype.captioningActive = false;

/** @override
*/
ChromeCastControlsMediator.prototype.onRegister = function() {
  var button, fullscreen, _ref, _ref1;
  ChromeCastControlsMediator.__super__.onRegister.call(this);
  this.messageContainer = this.create("chromecast-message-container");
  this.message = this.createText("chromecast-message", this.localizationManager.getString("MSG_CHROMECAST_MESSAGE"), this.messageContainer);
  this.button = new ChromeCastButtonMediator();
  this.facade.registerMediator(this.button);
  fullscreen = new FullScreenMediator(this.controlBar);
  this.facade.registerMediator(fullscreen);
  fullscreen.setDisabled(true);
  this.sendNotification(Notifications.ADD_CONTROL, this.button.getViewComponent());
  if (!this.viewComponent.getElementsByClassName("akamai-caption akamai-button").length && ((_ref = this.facade.player.captioning) != null ? (_ref1 = _ref.config) != null ? _ref1.enabled : void 0 : void 0) === true) {
    button = new ButtonMediator(this.localizationManager.getString(LocalizationConstants.MSG_CC), this.viewComponent.getElementsByClassName("akamai-control-bar")[0], null, "caption", this.captionButtonClick.bind(this));
    this.facade.registerMediator(button);
    this.captionButton = button.getViewComponent();
    this.sendNotification(Notifications.ADD_CONTROL, this.captionButton);
    this.sendNotification(Notifications.ADD_CONTROL_STATE, "cc-enabled");
  }
};

ChromeCastControlsMediator.prototype.captionButtonClick = function() {
  var note;
  this.captioningActive = !this.captioningActive;
  try {
    this.facade.player.parent.chromecast.postMessage({
      type: "captioning.visibilitychange",
      detail: {
        visibility: this.captioningActive
      }
    });
  } catch (error) {
    this.facade.logger.error("[AMP Chromecast Captioning Error]", error);
  }
  note = this.captioningActive ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
  this.sendNotification(note, "cc-active");
};

/**
 * The ChromeCastPlaybackTargetChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function ChromeCastPlaybackTargetChangeCommand() {
  ChromeCastPlaybackTargetChangeCommand.__super__.constructor.call(this);
}


__extends(ChromeCastPlaybackTargetChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChromeCastPlaybackTargetChangeCommand.prototype.execute = function(notification) {
  var body, currentTime, duration, target,
    _this = this;
  body = notification.getBody();
  target = body.target;
  if (target === "chromecast") {
    this.player.pause();
  } else if (target === "amp") {
    currentTime = this.proxy.getCurrentTime();
    duration = this.player.getDuration();
    if (currentTime !== 0) {
      if (currentTime !== duration) {
        this.seekedHandler = this.seeked.bind(this);
        this.player.once("seeked", function(event) {
          _this.player.play();
        });
      }
      this.player.setCurrentTime(currentTime);
    }
  }
};

/**
 * The ChromeCastPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ChromeCastPlugin() {
  ChromeCastPlugin.__super__.constructor.call(this);
}


__extends(ChromeCastPlugin, Plugin);


ChromeCastPlugin.prototype.moduleName = "chromecast";

/** @override
*/
ChromeCastPlugin.prototype.isAvailable = function() {
  return this.isSender() || this.isReceiver();
};

/** @override
*/
ChromeCastPlugin.prototype.createModel = function() {
  this.proxy = this.isSender() ? new ChromeCastSenderProxy(this.config) : new ChromeCastReceiverProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
ChromeCastPlugin.prototype.createController = function() {
  ChromeCastPlugin.__super__.createController.call(this);
  if (this.isSender()) {
    this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, ChromeCastPlaybackTargetChangeCommand);
    this.registerCommand(ChromeCastNotifications.LAUNCH, ChromeCastLaunchCommand);
    this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ChromeCastTogglePlayPauseCommand);
    this.registerCommand(UserNotifications.SEEK, ChromeCastSeekCommand);
    this.registerCommand(CaptioningNotifications.VISIBILITY_CHANGE, ChromeCastCaptioningVisibilityChangeCommand);
    this.registerCommand(CaptioningNotifications.SETTINGS_CHANGE, ChromeCastCaptioningSettingsChangeCommand);
    this.registerCommand(Notifications.MEDIA_CHANGE, ChromeCastMediaChangeCommand);
    this.registerCommand(ChromeCastNotifications.AVAILABILITY_CHANGE, PluginEventCommand);
  } else if (this.isReceiver()) {
    this.registerCommand(Notifications.READY, ChromeCastReceiverReadyCommand);
    this.registerCommand(AdNotifications.BREAK_START, ChromeCastBreakStartCommand);
  }
};

/** @override
*/
ChromeCastPlugin.prototype.createView = function() {
  if (this.isSender()) {
    this.registerMediator(new ChromeCastHTMLSenderMediator());
  } else if (this.isReceiver()) {
    this.registerMediator(new ChromeCastReceiverMediator());
  }
};

ChromeCastPlugin.prototype.isSender = function() {
  return !ChromeCastPlugin.prototype.isReceiver() && /Chrome/.test(navigator.userAgent);
};

ChromeCastPlugin.prototype.isReceiver = function() {
  return /CrKey/.test(navigator.userAgent);
};

/** @override
*/
ChromeCastPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.READY, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.SETTINGS_CHANGE, AdNotifications.BREAK_START, Notifications.PLAYBACK_TARGET_CHANGE, Notifications.MEDIA_CHANGE];
};

/** @override
*/
ChromeCastPlugin.prototype.listNotificationPublications = function() {
  return ChromeCastPlugin.__super__.listNotificationPublications.apply(this, arguments).concat([Notifications.INITIALIZED, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, Notifications.CHANGE_PLAYBACK_TARGET, ChromeCastNotifications.AVAILABILITY_CHANGE, Notifications.CHANGE_PLAY_STATE, Notifications.CHANGE_DURATION, Notifications.DISPLAY_TIME]);
};

/**
 * @expose
*/
ChromeCastPlugin.prototype.play = function() {
  var _base;
  if (typeof (_base = this.proxy).play === "function") {
    _base.play();
  }
};

/**
 * @expose
*/
ChromeCastPlugin.prototype.pause = function() {
  var _base;
  if (typeof (_base = this.proxy).pause === "function") {
    _base.pause();
  }
};

/**
 * @param {Number}  value   The time in seconds to seek to.
 * @expose
*/
ChromeCastPlugin.prototype.setCurrentTime = function(value) {
  this.proxy.setCurrentTime(value);
  return value;
};

/**
 * Returns if The chromecast device's Availability
 * @expose
*/
ChromeCastPlugin.prototype.isReceiverAvailable = function() {
  var _ref;
  return ((_ref = this.proxy) != null ? typeof _ref.isReceiverAvailable === "function" ? _ref.isReceiverAvailable() : void 0 : void 0) || false;
};

ChromeCastPlugin.prototype.getMedia = function() {
  return this.proxy.media;
};

ChromeCastPlugin.prototype.getSession = function() {
  return this.proxy.session;
};

ChromeCastPlugin.prototype.getMediaManager = function() {
  return this.proxy.mediaManager;
};

ChromeCastPlugin.prototype.getCastReceiverManager = function() {
  return this.proxy.castReceiverManager;
};

ChromeCastPlugin.prototype.getCastMessageBus = function() {
  return this.proxy.shim.castMessageBuses[this.proxy.messageBus];
};

/**
 * sends a message across the message bus.
 *
 * @param {Object} msg
 * @expose
*/
ChromeCastPlugin.prototype.postMessage = function(msg) {
  this.proxy.send(msg);
};

ChromeCastPlugin.prototype.launch = function() {
  this.proxy.launch();
};


AMP.registerPlugin("chromecast", "html", ChromeCastPlugin);

/** 
 * The ChromeCastFlashPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @param {Object}  config  The plugin's configuration object.
 * @constructor
 * @extends {ChromeCastPlugin}
 * @private
*/
function ChromeCastFlashPlugin() {
  ChromeCastFlashPlugin.__super__.constructor.call(this);
}


__extends(ChromeCastFlashPlugin, ChromeCastPlugin);


ChromeCastFlashPlugin.NAME = "ChromeCastFlashPlugin";

/** @override
*/
ChromeCastFlashPlugin.prototype.createModel = function() {
  this.proxy = new ChromeCastSenderProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
ChromeCastFlashPlugin.prototype.createController = function() {
  ChromeCastFlashPlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.PLAYBACK_TARGET_CHANGE, ChromeCastPlaybackTargetChangeCommand);
  this.registerCommand(ChromeCastNotifications.LAUNCH, ChromeCastLaunchCommand);
  this.registerCommand(FeedNotifications.FEED_CHANGED, ChromeCastFeedChangedCommand);
  this.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, ChromeCastTogglePlayPauseCommand);
  this.registerCommand(UserNotifications.SEEK, ChromeCastSeekCommand);
};

/** @override
*/
ChromeCastFlashPlugin.prototype.createView = function() {
  this.registerMediator(new ChromeCastSenderMediator());
};

/** @override
*/
ChromeCastFlashPlugin.prototype.listNotificationInterests = function() {
  return [FeedNotifications.FEED_CHANGED, Notifications.CHANGE_MEDIA, Notifications.PLAYBACK_TARGET_CHANGE];
};

/**
 * @enum {string}
 * @const
 * @private
*/

var ChromeCastNotifications = {
  LAUNCH: "launch",
  AVAILABILITY_CHANGE: "availabilitychange"
};

/**
 * @constructor
 * @extends {PluginWrapper}
 * @private
*/
function ChromeCastWrapper(player, init) {
  if (!ChromeCastPlugin.prototype.isSender()) {
    throw new Error("Chromecast not supported on this platform. Skipping plugin initialization.");
  }
  ChromeCastWrapper.__super__.constructor.call(this, player, init);
  this.plugin = new ChromeCastFlashPlugin();
  this.plugin.initialize(init, this.player);
  player.registerModule(this.plugin);
}


__extends(ChromeCastWrapper, PluginWrapper);


ChromeCastWrapper.NAME = "ChromeCastWrapper";

ChromeCastWrapper.prototype.buttonId = "chromecastBtn";

ChromeCastWrapper.prototype.plugin = null;

ChromeCastWrapper.prototype.flashView = {
  elements: {
    controls: {
      elements: {
        chromecastBtn: {}
      }
    }
  }
};

/**
*/
ChromeCastWrapper.prototype.listNotificationInterests = function() {
  return ChromeCastWrapper.__super__.listNotificationInterests.call(this).concat([FlashNotifications.ELEMENT_EVENT, FlashNotifications.LOAD_STATE_READY, FlashNotifications.LOAD_STATE_LOADING, FlashNotifications.APPLICATION_STATE_CHANGE, ChromeCastNotifications.AVAILABILITY_CHANGE]);
};

/**
*/
ChromeCastWrapper.prototype.handleNotification = function(notification) {
  var body, isReceiverAvailable, name, _ref;
  ChromeCastWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.ELEMENT_EVENT:
      if (body.type === "click" && body.element === this.buttonId) {
        this.plugin.sendNotification(ChromeCastNotifications.LAUNCH);
      }
      break;
    case ChromeCastNotifications.AVAILABILITY_CHANGE:
      if (((_ref = this.player.mediaElement) != null ? _ref.setPlayerProperty : void 0) != null) {
        this.player.mediaElement.setPlayerProperty(this.buttonId, {
          visible: body
        });
      }
      break;
    case FlashNotifications.APPLICATION_STATE_CHANGE:
    case FlashNotifications.LOAD_STATE_READY:
    case FlashNotifications.LOAD_STATE_LOADING:
      isReceiverAvailable = this.plugin.isReceiverAvailable();
      if (isReceiverAvailable) {
        this.player.mediaElement.setPlayerProperty(this.buttonId, {
          state: 1
        });
      }
      this.player.mediaElement.setPlayerProperty(this.buttonId, {
        visible: isReceiverAvailable
      });
  }
};

/**
 * @expose
*/
ChromeCastWrapper.prototype.play = function() {
  this.plugin.play();
};

/**
 * @expose
*/
ChromeCastWrapper.prototype.pause = function() {
  this.plugin.pause();
};

/**
 * @param {Number}  value   The time in seconds to seek to.
 * @expose
*/
ChromeCastWrapper.prototype.setCurrentTime = function(value) {
  this.plugin.setCurrentTime(value);
  return value;
};

/**
 * Returns if The chromecast device's Availability
 * @expose
*/
ChromeCastWrapper.prototype.isReceiverAvailable = function() {
  return this.plugin.isReceiverAvailable();
};

ChromeCastWrapper.prototype.getMedia = function() {
  return this.plugin.getMedia();
};

ChromeCastWrapper.prototype.getSession = function() {
  return this.plugin.getSession();
};

ChromeCastWrapper.prototype.getMediaManager = function() {
  return this.plugin.getMediaManager();
};

ChromeCastWrapper.prototype.getCastReceiverManager = function() {
  return this.plugin.getCastReceiverManager();
};

ChromeCastWrapper.prototype.getCastMessageBus = function() {
  return this.plugin.getCastMessageBuses();
};

/**
 * sends a message across the message bus.
 *
 * @param {Object} msg
 * @expose
*/
ChromeCastWrapper.prototype.postMessage = function(msg) {
  this.plugin.postMessage(msg);
};

ChromeCastWrapper.prototype.launch = function() {
  this.plugin.launch();
};


AMP.registerPlugin("chromecast", "flash", ChromeCastWrapper);

/**
 * The HLSPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function HLSPlugin() {
  HLSPlugin.__super__.constructor.call(this);
  Object.defineProperties(this, {
    instance: {
      get: this.getInstance,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(HLSPlugin, Plugin);


HLSPlugin.prototype.moduleName = "hls";

/** @override
*/
HLSPlugin.prototype.createModel = function() {
  this.proxy = new HLSProxy(this.config);
  this.registerProxy(this.proxy);
};

HLSPlugin.prototype.createController = function() {
  this.registerCommand(AdNotifications.BREAK_START, HLSAdBreakStartCommand);
  HLSPlugin.__super__.createController.call(this);
};

/**
*/
HLSPlugin.prototype.logEvent = function(event) {
  if (/(hlsFragLoading|hlsFragLoaded)/.test(event.type) === true) {
    return;
  }
  HLSPlugin.__super__.logEvent.call(this, event);
};

/**
 * Returns HLS PlaybackProxy
 *
*/
HLSPlugin.prototype.getPlaybackProxy = function() {
  return this.proxy.playbackProxy;
};

/**
 * Returns instance of HLS player
 *
*/
HLSPlugin.prototype.getInstance = function() {
  return this.getPlaybackProxy().player;
};

/**
*/
HLSPlugin.prototype.listNotificationInterests = function() {
  return HLSPlugin.__super__.listNotificationInterests.call(this).concat([AdNotifications.BREAK_START]);
};

/**
*/
HLSPlugin.prototype.listNotificationPublications = function() {
  return HLSPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.TIMED_METADATA, Notifications.QUALITY_LEVELS_LOADED, Notifications.QUALITY_CHANGE, Notifications.QUALITY_CHANGING, Notifications.FRAGMENT_LOAD_START, Notifications.FRAGMENT_LOADED]);
};


AMP.registerPlugin("hls", "html", HLSPlugin);

/**
 * Create a ChromeCastShim.
 * 
 * @param {?cast.receiver.CastReceiverManager.Config} config
 * @param {Object.<string, string>} messageBuses
*/
function ChromeCastShim(config, messageBuses) {
  var key, value;
  if (!/CrKey/.test(navigator.userAgent) || !(typeof cast !== "undefined" && cast !== null)) {
    return;
  }
  ChromeCastShim.__super__.constructor.call(this);
  this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  this.castReceiverManager.onReady = this.dispatchEvent.bind(this, {
    type: "ready"
  });
  this.castReceiverManager.onSenderConnected = this.dispatchEvent.bind(this, {
    type: "senderconnected"
  });
  this.castReceiverManager.onSenderDisconnected = this.dispatchEvent.bind(this, {
    type: "senderdisconnected"
  });
  this.castReceiverManager.onShutdown = this.dispatchEvent.bind(this, {
    type: "shutdown"
  });
  this.castReceiverManager.onStandbyChanged = this.dispatchEvent.bind(this, {
    type: "standbychange"
  });
  this.castReceiverManager.onSystemVolumeChanged = this.dispatchEvent.bind(this, {
    type: "systemvolumechanged"
  });
  this.castReceiverManager.onVisibilityChanged = this.dispatchEvent.bind(this, {
    type: "visibilitychanged"
  });
  this.player = new ChromeCastPlayer(this);
  this.mediaManager = new cast.receiver.MediaManager(this.player);
  if (!(messageBuses != null)) {
    messageBuses = {};
  }
  messageBuses[ChromeCastConstants.CHANNEL_ID] = cast.receiver.CastMessageBus.MessageType.JSON;
  this.castMessageBuses = {};
  for (key in messageBuses) {
    value = messageBuses[key];
    this.castMessageBuses[key] = this.castReceiverManager.getCastMessageBus(key, value);
    this.castMessageBuses[key].addEventListener("message", this.dispatchEvent.bind(this));
  }
  this.castReceiverManager.start(config);
  return;
}


__extends(ChromeCastShim, EventDispatcher);


/**
 * @type {cast.receiver.CastReceiverManager}
*/
ChromeCastShim.prototype.castReceiverManager = null;

/**
 * @type {cast.receiver.MediaManager}
*/
ChromeCastShim.prototype.mediaManager = null;

/**
 * @type {Object.<string, cast.receiver.CastMessageBus>}
*/
ChromeCastShim.prototype.castMessageBuses = null;

/**
 * @type {cast.receiver.media.Player}
*/
ChromeCastShim.prototype.player = null;

/**
*/
ChromeCastShim.prototype.isSender = function() {
  return !this.isReceiver() && /Chrome/.test(navigator.userAgent);
};

/**
*/
ChromeCastShim.prototype.isReceiver = function() {
  return /CrKey/.test(navigator.userAgent);
};

ChromeCastShim.getInstance = function() {
  return this.instance;
};

ChromeCastShim.instance = new ChromeCastShim();

function OctoshapeWrapper(player, config) {
  OctoshapeWrapper.__super__.constructor.call(this, player, config);
}


__extends(OctoshapeWrapper, PluginWrapper);


OctoshapeWrapper.NAME = "OctoshapeWrapper";

OctoshapeWrapper.prototype.flashPlugins = [
  {
    id: "OctoShapeStreamingPlugin",
    src: '#{paths.resources}plugins/infinitehd-osmf-plugin-1511180@v330-OSMF_1_6_MA.swf',
    host: "osmf",
    main: "com.octoshape.osmf.streamingplugin.OctoshapeStreamingPluginInfo"
  }
];


AMP.registerPlugin("octoshape", "flash", OctoshapeWrapper);

/**
 * The DASHPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function DASHPlugin() {
  DASHPlugin.__super__.constructor.call(this);
  Object.defineProperties(this, {
    instance: {
      get: this.getInstance,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(DASHPlugin, Plugin);


DASHPlugin.prototype.moduleName = "dash";

/** @override
*/
DASHPlugin.prototype.createModel = function() {
  this.proxy = new DASHProxy(this.config);
  this.registerProxy(this.proxy);
};

/**
 * Returns DASH PlaybackProxy
 *
*/
DASHPlugin.prototype.getPlaybackProxy = function() {
  return this.proxy.playbackProxy;
};

/**
 * Returns instance of DASH player
 *
*/
DASHPlugin.prototype.getInstance = function() {
  return this.getPlaybackProxy().player;
};

DASHPlugin.prototype.registered = function() {
  this.player.registerCommand(Notifications.CHANGE_DISPLAY_STATE, DASHChangeDisplayStateCommand);
  DASHPlugin.__super__.registered.call(this);
};

/**
*/
DASHPlugin.prototype.listNotificationPublications = function() {
  return DASHPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.FRAGMENT_LOAD_START, Notifications.FRAGMENT_LOADED]);
};


AMP.registerPlugin("dash", "html", DASHPlugin);

function FeedWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  FeedWrapper.__super__.constructor.call(this, player, config);
  if (config.url != null) {
    this.url = config.url;
  }
  if (config.data != null) {
    this.data = config.data;
  }
  this.player.load = function() {};
}


__extends(FeedWrapper, PluginWrapper);


FeedWrapper.NAME = "FeedWrapper";

FeedWrapper.prototype.url = null;

FeedWrapper.prototype.data = null;

FeedWrapper.prototype.updateData = true;

/** @override
*/
FeedWrapper.prototype.createFlashVars = function(flashvars) {
  if ((this.url != null) && this.url !== "") {
    flashvars.data_feed_url = escape(this.facade.evaluatePaths(this.url));
  }
};

/** @override
*/
FeedWrapper.prototype.listNotificationInterests = function() {
  return FeedWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([FlashNotifications.READY, FlashNotifications.FEED_LOADED, FlashNotifications.LOAD_FEED]);
};

/**
*/
FeedWrapper.prototype.handleNotification = function(notification) {
  var body, name, type,
    _this = this;
  FeedWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.FEED_LOADED:
      this.sendNotification(FeedNotifications.FEED_CHANGED, this.data);
      break;
    case FlashNotifications.LOAD_FEED:
      type = "request";
      break;
    case FlashNotifications.READY:
      if (this.data != null) {
        setTimeout(function() {
          _this.setData(_this.data);
        }, 25);
      } else if ((this.url != null) && this.url !== "") {
        this.sendNotification(FeedNotifications.LOAD_FEED, this.url);
      }
  }
  if (type != null) {
    this.dispatchEvent(new Event(type, body));
  }
};

/**
*/
FeedWrapper.prototype.setURL = function(value) {
  if ((value != null) && value !== "") {
    this.url = value;
    this.player.mediaElement.playFile(this.url, this.player.getAutoplay());
    this.sendNotification(FeedNotifications.LOAD_FEED, this.url);
  }
  return value;
};

FeedWrapper.prototype.getURL = function() {
  return this.url;
};

/**
*/
FeedWrapper.prototype.setData = function(value) {
  this.data = value;
  this.updateData = false;
  this.player.mediaElement.playFile(this.data, this.player.getAutoplay());
  return value;
};

FeedWrapper.prototype.getData = function() {
  return this.data;
};

/**
 * The FeedProxy class.
 *
 * @constructor
 * @private
 * @extends {ModuleProxy}
 * @param {Object} config The configuration object.
*/
function FeedProxy(config) {
  FeedProxy.__super__.constructor.call(this, config);
  this.helper = new MRSSHelper();
}


__extends(FeedProxy, ModuleProxy);


FeedProxy.NAME = ModuleProxy.NAME;

FeedProxy.prototype.defaults = {
  url: null,
  data: null
};

FeedProxy.prototype.feed = null;

FeedProxy.prototype.helper = null;

FeedProxy.prototype.setURL = function(value) {
  var _this = this;
  this.data.url = this.facade.evaluatePaths(value);
  this.sendNotification(Notifications.DISPATCH_EVENT, new Event("request", this.data.url));
  this.helper.getFeed(this.data.url).then(function(feed) {
    _this.sendNotification(FeedNotifications.FEED_LOADED, feed);
    _this.sendNotification(FeedNotifications.CHANGE_FEED, feed);
  })["catch"](function(error) {
    _this.sendNotification(FeedNotifications.FEED_ERROR, {
      error: error,
      url: value
    });
    Logger.error("[AMP Feed Load Error]", _this.data.url, error);
  });
  return value;
};

FeedProxy.prototype.getURL = function() {
  return this.data.url;
};

FeedProxy.prototype.setFeedData = function(value) {
  this.data.data = value;
  this.feed = this.helper.createFeed(value);
  this.sendNotification(FeedNotifications.FEED_CHANGED, this.feed);
  return value;
};

FeedProxy.prototype.getFeedData = function() {
  return this.data.data;
};

FeedProxy.prototype.invoke = function() {
  var func;
  if ((this.data.url != null) && this.data.url !== "") {
    func = this.sendNotification.bind(this, FeedNotifications.LOAD_FEED, this.data.url);
  } else if (this.data.data != null) {
    func = this.sendNotification.bind(this, FeedNotifications.CHANGE_FEED, this.data.data);
  }
  if (func != null) {
    setTimeout(func, 1);
  }
};

/**
 * The LoadFeedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function LoadFeedCommand() {
  LoadFeedCommand.__super__.constructor.call(this);
}


__extends(LoadFeedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
LoadFeedCommand.prototype.execute = function(notification) {
  var feedProxy;
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.setURL(notification.getBody());
};

/**
 * The ChangeFeedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChangeFeedCommand() {
  ChangeFeedCommand.__super__.constructor.call(this);
}


__extends(ChangeFeedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ChangeFeedCommand.prototype.execute = function(notification) {
  var feedProxy;
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.setFeedData(notification.getBody());
};

/**
 * The FeedChangedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function FeedChangedCommand() {
  FeedChangedCommand.__super__.constructor.call(this);
}


__extends(FeedChangedCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FeedChangedCommand.prototype.execute = function(notification) {
  var feed, mediaVO;
  FeedChangedCommand.__super__.execute.call(this, notification);
  this.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
  feed = notification.getBody();
  mediaVO = feed.item[0];
  this.player.sendNotification(Notifications.SET_MEDIA, mediaVO);
};

/**
 * The FeedInitializedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function FeedInitializedCommand() {
  FeedInitializedCommand.__super__.constructor.call(this);
}


__extends(FeedInitializedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
FeedInitializedCommand.prototype.execute = function(notification) {
  var feedProxy;
  feedProxy = this.facade.retrieveProxy(FeedProxy.NAME);
  feedProxy.invoke();
};

/** 
 * The OctoShapePlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function OctoshapePlugin() {
  OctoshapePlugin.__super__.constructor.call(this);
}


__extends(OctoshapePlugin, Plugin);


OctoshapePlugin.prototype.moduleName = "octoshape";


AMP.registerPlugin("octoshape", "html", OctoshapePlugin);

/**
 * @enum {string}
 * @const
 * @private
*/

var AutoAdvanceNotifications = {
  TIME_UPDATE: "autoadvancetimeupdate",
  START: "autoadvancestart",
  STOP: "autoadvancestop",
  ADVANCE: "autoadvanceadvance"
};

/** 
 * @constructor
 * @private
*/
function AutoAdvanceWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  AutoAdvanceWrapper.__super__.constructor.call(this, player, config);
  if (config.interval != null) {
    this.interval = config.interval;
  }
  if (config.handler != null) {
    this.handler = config.handler;
  }
}


__extends(AutoAdvanceWrapper, PluginWrapper);


AutoAdvanceWrapper.NAME = "AutoAdvanceWrapper";

AutoAdvanceWrapper.prototype.interval = null;

AutoAdvanceWrapper.prototype.handler = null;

AutoAdvanceWrapper.prototype.getInterval = function() {
  return this.interval;
};

AutoAdvanceWrapper.prototype.setInterval = function(value) {
  return this.interval = value;
};

AutoAdvanceWrapper.prototype.getHandler = function() {
  return this.handler;
};

AutoAdvanceWrapper.prototype.setHandler = function(value) {
  return this.handler = value;
};

/** @override
*/
AutoAdvanceWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.AUTO_ADVANCE];
};

/**
*/
AutoAdvanceWrapper.prototype.handleNotification = function(notification) {
  var body, flashvars, name, type, _base;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      flashvars = body.flashvars;
      if (this.interval != null) {
        flashvars.next_video_timer = this.interval;
        flashvars.auto_play_list = true;
      }
      break;
    case FlashNotifications.AUTO_ADVANCE:
      if (typeof (_base = this.config).handler === "function") {
        _base.handler();
      }
      type = "advance";
  }
  if (type != null) {
    this.dispatchEvent(new Event(type));
  }
};

/** 
 * @constructor 
 * @private
*/
function AutoAdvanceProxy(config) {
  AutoAdvanceProxy.__super__.constructor.call(this, config);
}


__extends(AutoAdvanceProxy, ModuleProxy);


/** @static
*/
AutoAdvanceProxy.NAME = ModuleProxy.NAME;

AutoAdvanceProxy.prototype.defaults = {
  interval: 15,
  handler: null
};

AutoAdvanceProxy.prototype.currentTime = 0;

AutoAdvanceProxy.prototype.timeout = null;

AutoAdvanceProxy.prototype.start = function() {
  var _this = this;
  this.currentTime = this.data.interval;
  this.timeout = setInterval(function() {
    _this.updateTime();
  }, 1000);
  this.sendNotification(AutoAdvanceNotifications.TIME_UPDATE, this.currentTime);
};

AutoAdvanceProxy.prototype.stop = function() {
  clearInterval(this.timeout);
};

AutoAdvanceProxy.prototype.updateTime = function() {
  this.currentTime--;
  this.sendNotification(AutoAdvanceNotifications.TIME_UPDATE, this.currentTime);
  if (this.currentTime <= 0) {
    this.stop();
    this.sendNotification(AutoAdvanceNotifications.ADVANCE, this.data.handler);
  }
};

/**
 * The AutoAdvanceStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AutoAdvanceStartCommand() {
  AutoAdvanceStartCommand.__super__.constructor.call(this);
}


__extends(AutoAdvanceStartCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AutoAdvanceStartCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.ADD_APPLICATION_STATE, "autoadvance-mode");
  this.proxy.start();
  AutoAdvanceStartCommand.__super__.execute.call(this, notification);
};

/**
 * The AutoAdvanceAdvanceCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AutoAdvanceAdvanceCommand() {
  AutoAdvanceAdvanceCommand.__super__.constructor.call(this);
}


__extends(AutoAdvanceAdvanceCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AutoAdvanceAdvanceCommand.prototype.execute = function(notification) {
  var handler;
  handler = notification.getBody();
  if ((handler != null)) {
    if (typeof handler === "string") {
      eval("" + handler + "()");
    } else if (typeof handler === "function") {
      handler();
    }
  }
  this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "autoadvance-mode");
  AutoAdvanceAdvanceCommand.__super__.execute.call(this, notification);
};

/**
 * The AutoAdvanceEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AutoAdvanceEndedCommand() {
  AutoAdvanceEndedCommand.__super__.constructor.call(this);
}


__extends(AutoAdvanceEndedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AutoAdvanceEndedCommand.prototype.execute = function(notification) {
  if (this.proxy.getData().interval != null) {
    this.sendNotification(AutoAdvanceNotifications.START, notification.getBody());
  }
};

/**
 * The AutoAdvanceStopCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AutoAdvanceStopCommand() {
  AutoAdvanceStopCommand.__super__.constructor.call(this);
}


__extends(AutoAdvanceStopCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AutoAdvanceStopCommand.prototype.execute = function(notification) {
  this.proxy.stop();
};

/**
 * The AutoAdvanceMediator class.
 * 
 * @constructor
 * @private
 * @extends {OverlayMediator}
 * @param {Object} viewComponent
*/
function AutoAdvanceMediator() {
  AutoAdvanceMediator.__super__.constructor.call(this);
}


__extends(AutoAdvanceMediator, OverlayMediator);


AutoAdvanceMediator.prototype.componentName = "autoadvance";

AutoAdvanceMediator.prototype.text = null;

AutoAdvanceMediator.prototype.onRegister = function() {
  AutoAdvanceMediator.__super__.onRegister.call(this);
  this.text = this.create("autoadvance-text");
};

/**
 * @override
*/
AutoAdvanceMediator.prototype.listNotificationInterests = function() {
  return [AutoAdvanceNotifications.TIME_UPDATE];
};

/**
 * @override
*/
AutoAdvanceMediator.prototype.handleNotification = function(notification) {
  var time;
  switch (notification.getName()) {
    case AutoAdvanceNotifications.TIME_UPDATE:
      time = notification.getBody();
      this.text.textContent = "" + (this.localizationManager.getString('MSG_NEXT_VIDEO')) + " " + time + " " + (this.localizationManager.getString('MSG_SECONDS'));
  }
};

/**
 * The FeedPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function FeedPlugin() {
  FeedPlugin.__super__.constructor.call(this);
  try {
    Object.defineProperties(this, {
      url: {
        get: this.getURL,
        set: this.setURL,
        enumerable: true,
        configurable: false
      },
      data: {
        get: this.getData,
        set: this.setData,
        enumerable: true,
        configurable: false
      }
    });
  } catch (error) {
    console.error(error);
  }
}


__extends(FeedPlugin, Plugin);


FeedPlugin.prototype.moduleName = "feed";

/** @override
*/
FeedPlugin.prototype.createModel = function() {
  this.proxy = new FeedProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
FeedPlugin.prototype.createController = function() {
  FeedPlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.READY, FeedInitializedCommand);
  this.registerCommand(FeedNotifications.LOAD_FEED, LoadFeedCommand);
  this.registerCommand(FeedNotifications.CHANGE_FEED, ChangeFeedCommand);
  this.registerCommand(FeedNotifications.FEED_CHANGED, FeedChangedCommand);
  this.registerCommand(FeedNotifications.FEED_LOADED, PluginEventCommand);
  this.registerCommand(FeedNotifications.FEED_ERROR, PluginEventCommand);
};

/** @override
*/
FeedPlugin.prototype.listNotificationInterests = function() {
  return FeedPlugin.__super__.listNotificationInterests.call(this).concat([Notifications.READY]);
};

/** @override
*/
FeedPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return FeedPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in FeedNotifications) {
      value = FeedNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/**
 * @param {string} value The url of the feed.
 * @expose
*/
FeedPlugin.prototype.setURL = function(value) {
  this.sendNotification(FeedNotifications.LOAD_FEED, value);
  return value;
};

/**
 * @return {string} The url of the feed.
 * @expose
*/
FeedPlugin.prototype.getURL = function() {
  return this.proxy.getURL();
};

/**
 * @param {Object} value The MRSS feed object
 * @expose
*/
FeedPlugin.prototype.setData = function(value) {
  this.sendNotification(FeedNotifications.CHANGE_FEED, value);
  return value;
};

/**
 * @return {Object} The MRSS feed object.
 * @expose
*/
FeedPlugin.prototype.getData = function() {
  return this.proxy.getFeedData();
};


AMP.registerPlugin("feed", "html", FeedPlugin);
AMP.registerPlugin("feed", "flash", FeedWrapper);

/**
 * @enum {string}
 * @const
 * @private
*/

var RecommendationsNotifications = {
  RECOMMENDATIONS_LOADED: "recommendationsloaded",
  RECOMMENDATION_SELECTED: "recommendationsselected"
};

function RecommendationVO(guid, link, title, description, thumbnail, duration, pubDate, target, metadata) {
  this.guid = guid;
  this.link = link;
  this.title = title;
  this.description = description;
  this.thumbnail = thumbnail;
  this.duration = duration;
  this.pubDate = pubDate;
  this.target = target;
  this.metadata = metadata != null ? metadata : {};
}

RecommendationVO.prototype.guid = null;

RecommendationVO.prototype.link = null;

RecommendationVO.prototype.title = null;

RecommendationVO.prototype.description = null;

RecommendationVO.prototype.thumbnail = null;

RecommendationVO.prototype.duration = null;

RecommendationVO.prototype.pubDate = null;

RecommendationVO.prototype.target = null;

RecommendationVO.prototype.metadata = null;

/**
 * @constructor
 * @private
 * @extends {PluginWrapper}
*/
function RecommendationsWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  RecommendationsWrapper.__super__.constructor.call(this, player, config);
  if (config.url != null) {
    this.url = config.url;
  }
  if (config.target != null) {
    this.target = config.target;
  }
}


__extends(RecommendationsWrapper, PluginWrapper);


RecommendationsWrapper.NAME = "RecommendationsWrapper";

RecommendationsWrapper.prototype.flashPlugins = [
  {
    id: "RecommendationsPlugin",
    src: '#{paths.resources}plugins/RecommendationsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "RecommendationsPlugin",
    type: "application/x-shockwave-flash"
  }
];

RecommendationsWrapper.prototype.flashView = {
  elements: {
    recommendationSlate: {
      attributes: {
        items: "5",
        viewMode: "grid"
      }
    }
  }
};

RecommendationsWrapper.prototype.url = null;

RecommendationsWrapper.prototype.target = null;

RecommendationsWrapper.prototype.recommendations = null;

/**
*/
RecommendationsWrapper.prototype.getFeatureName = function() {
  return "recommendations";
};

/**
*/
RecommendationsWrapper.prototype.getData = function() {
  return this.recommendations;
};

RecommendationsWrapper.prototype.setData = function(value) {
  return this.recommendations = value;
};

/**
*/
RecommendationsWrapper.prototype.getTarget = function() {
  var _ref, _ref1;
  return this.target || ((_ref = this.player) != null ? (_ref1 = _ref.config) != null ? _ref1.target : void 0 : void 0);
};

/**
*/
RecommendationsWrapper.prototype.getURL = function() {
  return this.url;
};

/**
*/
RecommendationsWrapper.prototype.createFlashVars = function(flashvars) {
  flashvars.recommendations_partner = "mrss";
  if (this.config.target != null) {
    flashvars.external_target = this.config.target;
  }
};

/**
*/
RecommendationsWrapper.prototype.createXML = function(xml) {
  var application, recommendations, vendor;
  application = xml.firstChild;
  recommendations = xml.getElementsByTagName("recommendations")[0];
  if (!(recommendations != null)) {
    recommendations = xml.createElement("recommendations");
    application.appendChild(recommendations);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "mrss");
  recommendations.appendChild(vendor);
  this.createProperty(xml, "RECOMMENDATIONS_MRSS_URL", this.url, vendor);
};

/** @override
*/
RecommendationsWrapper.prototype.listNotificationInterests = function() {
  return RecommendationsWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([FlashNotifications.RECOMMENDATION_SELECTED, FlashNotifications.RECOMMENDATIONS_LOADED]);
};

/**
*/
RecommendationsWrapper.prototype.handleNotification = function(notification) {
  var body, name, type;
  RecommendationsWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.RECOMMENDATIONS_LOADED:
      type = "loaded";
      this.recommendations = body;
      break;
    case FlashNotifications.RECOMMENDATION_SELECTED:
      type = "selected";
  }
  if (type != null) {
    this.dispatchEvent(new Event(type, body));
  }
};

/**
 * The RecommendationsSelectedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function RecommendationSelectedCommand() {
  RecommendationSelectedCommand.__super__.constructor.call(this);
}


__extends(RecommendationSelectedCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RecommendationSelectedCommand.prototype.execute = function(notification) {
  var rec;
  RecommendationSelectedCommand.__super__.execute.call(this, notification);
  rec = notification.getBody();
  if (rec.target !== "none" && rec.target !== "player") {
    window.open(rec.link, rec.target);
  }
};

/**
 * The RecommendationsPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function RecommendationsPlayCommand() {
  RecommendationsPlayCommand.__super__.constructor.call(this);
}


__extends(RecommendationsPlayCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RecommendationsPlayCommand.prototype.execute = function(notification) {
  this.proxy.invoke();
};

/**
 * The RecommendationsPlayStateChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function RecommendationsPlayStateChangeCommand() {
  RecommendationsPlayStateChangeCommand.__super__.constructor.call(this);
}


__extends(RecommendationsPlayStateChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
RecommendationsPlayStateChangeCommand.prototype.execute = function(notification) {
  var recommendations, states;
  recommendations = this.proxy.getRecommendations();
  states = notification.getBody();
  if (states.value === PlayState.ENDED) {
    if ((recommendations != null ? recommendations.length : void 0) > 0) {
      this.sendNotification(Notifications.ADD_APPLICATION_STATE, "recommendations-mode");
    }
  } else if (states.previous === PlayState.ENDED) {
    if ((recommendations != null ? recommendations.length : void 0) > 0) {
      this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "recommendations-mode");
    }
  }
};

/**
 * Proxy for recommendations feature
 *
 * @constructor
 * @private
*/
function RecommendationsProxy(config) {
  RecommendationsProxy.__super__.constructor.call(this, config);
  this.helper = new MRSSHelper();
}


__extends(RecommendationsProxy, PluginProxy);


/** @static
*/
RecommendationsProxy.NAME = ModuleProxy.NAME;

RecommendationsProxy.prototype.defaults = {
  url: null,
  target: "_blank"
};

RecommendationsProxy.prototype.loaded = true;

RecommendationsProxy.prototype.recommendations = null;

RecommendationsProxy.prototype.helper = null;

/** Getter/Setter for RecommendationVO.
*/
RecommendationsProxy.prototype.getRecommendations = function() {
  return this.recommendations;
};

RecommendationsProxy.prototype.setRecommendations = function(value) {
  this.recommendations = value;
  this.sendNotification(RecommendationsNotifications.RECOMMENDATIONS_LOADED, this.recommendations);
  return value;
};

RecommendationsProxy.prototype.getURL = function() {
  return this.getConfigurationData().url;
};

RecommendationsProxy.prototype.setURL = function(value) {
  this.data.url = value;
  this.invoke();
  return value;
};

RecommendationsProxy.prototype.getTarget = function() {
  return this.getConfigurationData().target || this.facade.player.retrieveProxy(ConfigurationProxy.NAME).getTarget();
};

RecommendationsProxy.prototype.setTarget = function(value) {
  this.data.target = value;
  return value;
};

/**
 *
 *
 * @param {String} value
 *    The new display state of the player
 * @returns {String}
 *    The display state of the player
 * @type {String}
*/
RecommendationsProxy.prototype.invoke = function() {
  var url;
  url = this.getURL();
  if (!(url != null) || url === "") {
    this.facade.logger.error("[AMP RECOMMENDATIONS ERROR]", "Load Error: No url provided");
    return;
  }
  Utils.getFeed(url).then(this.onload.bind(this))["catch"](this.onerror.bind(this));
};

RecommendationsProxy.prototype.onload = function(json) {
  var recs;
  recs = this.createRecommendations(json);
  this.setRecommendations(recs);
};

RecommendationsProxy.prototype.onerror = function(error) {
  this.facade.logger.error("[AMP RECOMMENDATIONS ERROR]", "Load Error:", error);
};

/**
*/
RecommendationsProxy.prototype.createRecommendations = function(feed) {
  var item, rec, recs, _i, _len, _ref;
  feed = this.helper.createFeed(feed);
  recs = [];
  _ref = feed.item;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    rec = new RecommendationVO(item.guid, item.link, item.title, item.description, item.thumbnail, item.duration, item.pubDate, this.getTarget(), item);
    recs.push(rec);
  }
  return recs;
};

/**
 * The RecommendationsMediator class.
 * 
 * @constructor
 * @private
 * @extends {OverlayMediator}
*/
function RecommendationsMediator() {
  RecommendationsMediator.__super__.constructor.call(this);
}


__extends(RecommendationsMediator, OverlayMediator);


RecommendationsMediator.prototype.componentName = "recommendations";

RecommendationsMediator.prototype.listArea = null;

/**
 * @override
*/
RecommendationsMediator.prototype.onRegister = function() {
  var label;
  RecommendationsMediator.__super__.onRegister.call(this);
  label = this.createText("recommendations-label", "Recommended");
  this.listArea = this.create("recommendations-list-area");
};

/**
 * @override
*/
RecommendationsMediator.prototype.listNotificationInterests = function() {
  return [RecommendationsNotifications.RECOMMENDATIONS_LOADED];
};

/**
 * @override
*/
RecommendationsMediator.prototype.handleNotification = function(notification) {
  var rec, recs, _i, _len;
  switch (notification.getName()) {
    case RecommendationsNotifications.RECOMMENDATIONS_LOADED:
      this.listArea.innerHTML = "";
      recs = notification.getBody();
      if ((recs != null) && recs.length > 0) {
        for (_i = 0, _len = recs.length; _i < _len; _i++) {
          rec = recs[_i];
          this.addElement(rec);
        }
      }
  }
};

RecommendationsMediator.prototype.addElement = function(recommendation) {
  var listItem,
    _this = this;
  listItem = this.create("recommendation", this.listArea);
  if (listItem.dataset == null) {
    listItem.dataset = {};
  }
  listItem.dataset.link = recommendation.link;
  listItem.dataset.target = recommendation.target;
  listItem.innerHTML = "<img src='" + recommendation.thumbnail + "' class='" + this.cssPrefix + "recommendation-thumbnail' /> <span class='" + this.cssPrefix + "recommendation-text'>" + recommendation.description + "</span>";
  listItem.onclick = function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(RecommendationsNotifications.RECOMMENDATION_SELECTED, event.currentTarget.dataset);
    return false;
  };
};

/** 
 * The AutoadvancePlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function AutoAdvancePlugin() {
  AutoAdvancePlugin.__super__.constructor.call(this);
}


__extends(AutoAdvancePlugin, Plugin);


AutoAdvancePlugin.NAME = "AutoAdvancePlugin";

AutoAdvancePlugin.prototype.moduleName = "autoadvance";

/** @override
*/
AutoAdvancePlugin.prototype.createController = function() {
  AutoAdvancePlugin.__super__.createController.call(this);
  this.registerCommand(AutoAdvanceNotifications.START, AutoAdvanceStartCommand);
  this.registerCommand(AutoAdvanceNotifications.ADVANCE, AutoAdvanceAdvanceCommand);
  this.registerCommand(Notifications.MEDIA_SEQUENCE_ENDED, AutoAdvanceEndedCommand);
  this.registerCommand(Notifications.CHANGE_MEDIA, AutoAdvanceStopCommand);
  this.registerCommand(Notifications.PLAY, AutoAdvanceStopCommand);
  this.registerCommand(Notifications.PLAYING, AutoAdvanceStopCommand);
  this.registerCommand(Notifications.REPLAY, AutoAdvanceStopCommand);
  this.registerCommand(Notifications.SEEK, AutoAdvanceStopCommand);
  this.registerCommand(UserNotifications.SEEK, AutoAdvanceStopCommand);
  this.registerCommand(Notifications.TIME_UPDATE, PluginEventCommand);
  this.registerCommand(Notifications.STOP, PluginEventCommand);
};

/** @override
*/
AutoAdvancePlugin.prototype.createModel = function() {
  this.registerProxy(new AutoAdvanceProxy(this.config));
};

/** @override
*/
AutoAdvancePlugin.prototype.createView = function() {
  this.registerMediator(new AutoAdvanceMediator());
};

/** @override
*/
AutoAdvancePlugin.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA, Notifications.PLAY, Notifications.PLAYING, Notifications.REPLAY, Notifications.MEDIA_SEQUENCE_ENDED, Notifications.SEEK, UserNotifications.SEEK];
};

/**
*/
AutoAdvancePlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return AutoAdvancePlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in AutoAdvanceNotifications) {
      value = AutoAdvanceNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};


AMP.registerPlugin("autoadvance", "html", AutoAdvancePlugin);
AMP.registerPlugin("autoadvance", "flash", AutoAdvanceWrapper);

/**
 * The AdChoicesMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
*/
function RecommendationsGridMediator() {
  RecommendationsGridMediator.__super__.constructor.call(this);
}


__extends(RecommendationsGridMediator, OverlayMediator);


RecommendationsGridMediator.prototype.componentName = "recommendations-grid";

RecommendationsGridMediator.prototype.grid = null;

RecommendationsGridMediator.prototype.onRegister = function() {
  var label;
  RecommendationsGridMediator.__super__.onRegister.call(this);
  label = this.createText("recommendations-grid-label", this.localizationManager.getString(LocalizationConstants.MSG_RECOMMENDATIONS_TITLE));
  this.grid = this.create("recommendations-grid-table-grid", this, "table");
};

/**
 * @override
*/
RecommendationsGridMediator.prototype.listNotificationInterests = function() {
  return [RecommendationsNotifications.RECOMMENDATIONS_LOADED];
};

/**
 * @override
*/
RecommendationsGridMediator.prototype.handleNotification = function(notification) {
  var rec, recs, _i, _len;
  switch (notification.getName()) {
    case RecommendationsNotifications.RECOMMENDATIONS_LOADED:
      this.grid.innerHTML = "";
      this.create("recommendations-grid-row", this.grid, "tr");
      this.create("recommendations-grid-row", this.grid, "tr");
      recs = notification.getBody();
      if ((recs != null) && recs.length > 0) {
        for (_i = 0, _len = recs.length; _i < _len; _i++) {
          rec = recs[_i];
          this.addElement(rec, _i);
        }
      }
  }
};

RecommendationsGridMediator.prototype.addElement = function(recommendation, recommendedIndex) {
  var gridRowIndex, td,
    _this = this;
  gridRowIndex = (recommendedIndex % 4) < 2 ? 0 : 1;
  td = this.create("recommendations-grid-item", this.grid.childNodes[gridRowIndex], "td");
  if (td.dataset == null) {
    td.dataset = {};
  }
  td.dataset.link = recommendation.link;
  td.dataset.target = this.config.getTarget();
  td.innerHTML = "<img src='" + recommendation.thumbnail + "' class='" + this.cssPrefix + "recommendations-grid-thumbnail' /> <span class='" + this.cssPrefix + "recommendations-grid-text'>" + recommendation.description + "</span>";
  td.onclick = function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(RecommendationsNotifications.RECOMMENDATION_SELECTED, event.currentTarget.dataset);
    return false;
  };
};

/**
 * The RecommendationsFluidGridMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
*/
function RecommendationsFluidGridMediator() {
  RecommendationsFluidGridMediator.__super__.constructor.call(this);
}


__extends(RecommendationsFluidGridMediator, OverlayMediator);


RecommendationsFluidGridMediator.prototype.componentName = "recommendations-fluid-grid";

RecommendationsFluidGridMediator.prototype.grid = null;

RecommendationsFluidGridMediator.prototype.timeout = null;

RecommendationsFluidGridMediator.prototype.gridBounds = {
  width: 0,
  height: 0
};

RecommendationsFluidGridMediator.prototype.onRegister = function() {
  RecommendationsFluidGridMediator.__super__.onRegister.call(this);
  this.grid = this.viewComponent;
  window.addEventListener("orientationchange", this.delayedResizeGridHanlder.bind(this));
};

/**
 * @override
*/
RecommendationsFluidGridMediator.prototype.listNotificationInterests = function() {
  return [RecommendationsNotifications.RECOMMENDATIONS_LOADED, Notifications.ENDED, Notifications.CHANGE_MEDIA, Notifications.PLAY, Notifications.PLAYING, Notifications.REPLAY];
};

RecommendationsFluidGridMediator.prototype.delayedResizeGridHanlder = function(event) {
  try {
    clearTimeout(this.timeout);
  } catch (_error) {}
  this.timeout = setTimeout(this.resizeGridHandler.bind(this, true), 100);
};

RecommendationsFluidGridMediator.prototype.resizeGridHandler = function(isOrientation) {
  var currentGridBounds, item, _i, _j, _len, _len1, _ref, _ref1;
  if (isOrientation == null) {
    isOrientation = false;
  }
  currentGridBounds = this.grid.getBoundingClientRect();
  if (this.gridBounds.width !== currentGridBounds.width || this.gridBounds.height !== currentGridBounds.height || isOrientation) {
    this.grid.setAttribute("style", "align-content:flex-start; -webkit-align-content:flex-start; -ms-flex-align: flex-start;opacity:0;");
    this.gridBounds = currentGridBounds;
    _ref = this.grid.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      item = _ref[_i];
      item.style.display = "block";
    }
    _ref1 = this.grid.childNodes;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      item = _ref1[_j];
      if (item.getBoundingClientRect().bottom > this.gridBounds.bottom) {
        item.style.display = "none";
      }
    }
    this.grid.setAttribute("style", "align-content:center; -webkit-align-content:center; -ms-flex-align: center;opacity:1;");
  }
};

/**
 * @override
*/
RecommendationsFluidGridMediator.prototype.handleNotification = function(notification) {
  var rec, recs, _i, _len,
    _this = this;
  switch (notification.getName()) {
    case Notifications.CHANGE_MEDIA:
    case Notifications.PLAY:
    case Notifications.PLAYING:
    case Notifications.REPLAY:
      try {
        clearInterval(this.timeout);
      } catch (_error) {}
      break;
    case Notifications.ENDED:
      this.timeout = setInterval(function() {
        _this.resizeGridHandler();
      }, 500);
      break;
    case RecommendationsNotifications.RECOMMENDATIONS_LOADED:
      this.grid.innerHTML = "";
      recs = notification.getBody();
      if ((recs != null) && recs.length > 0) {
        for (_i = 0, _len = recs.length; _i < _len; _i++) {
          rec = recs[_i];
          this.addElement(rec, _i);
        }
      }
  }
};

RecommendationsFluidGridMediator.prototype.addElement = function(recommendation, recommendedIndex) {
  var tile, _ref, _ref1,
    _this = this;
  tile = this.create("recommendations-fluid-grid-tile", this.grid);
  tile.style.backgroundImage = "url(" + recommendation.thumbnail + ")";
  if (((_ref = this.facade.getConfig().responsive) != null ? _ref.rows : void 0) != null) {
    tile.style.height = "calc(" + 100 / this.facade.getConfig().responsive.rows + "%)";
  }
  if (((_ref1 = this.facade.getConfig().responsive) != null ? _ref1.column : void 0) != null) {
    tile.style.width = "calc(" + 100 / this.facade.getConfig().responsive.columns + "%)";
  }
  tile.dataset.link = recommendation.link;
  tile.dataset.target = this.facade.getConfig().target;
  EventHandler.create(tile, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(RecommendationsNotifications.RECOMMENDATION_SELECTED, event.currentTarget.dataset);
    return false;
  });
  this.create("recommendations-fluid-grid-tile-caption", tile, "span", recommendation.description);
};

/** 
 * The RecommendationsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function RecommendationsPlugin() {
  RecommendationsPlugin.__super__.constructor.call(this);
}


__extends(RecommendationsPlugin, Feature);


RecommendationsPlugin.prototype.featureName = "recommendations";

RecommendationsPlugin.prototype.moduleName = "recommendations";

/** @override
*/
RecommendationsPlugin.prototype.createController = function() {
  RecommendationsPlugin.__super__.createController.call(this);
  this.registerCommand(RecommendationsNotifications.RECOMMENDATION_SELECTED, RecommendationSelectedCommand);
  this.registerCommand(Notifications.START, RecommendationsPlayCommand);
  this.registerCommand(Notifications.PLAY_STATE_CHANGE, RecommendationsPlayStateChangeCommand);
  this.registerCommand(RecommendationsNotifications.RECOMMENDATIONS_LOADED, PluginEventCommand);
};

/** @override
*/
RecommendationsPlugin.prototype.createModel = function() {
  this.proxy = new RecommendationsProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
RecommendationsPlugin.prototype.createView = function() {
  this.registerMediator(new RecommendationsMediator());
};

/**
*/
RecommendationsPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.START, Notifications.PLAY_STATE_CHANGE];
};

/**
*/
RecommendationsPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return RecommendationsPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in RecommendationsNotifications) {
      value = RecommendationsNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/**
 * @param {string} value The url of the feed.
 * @expose
*/
RecommendationsPlugin.prototype.setURL = function(value) {
  this.proxy.set(value);
};

/**
 * @return {string} The url of the feed.
 * @expose
*/
RecommendationsPlugin.prototype.getURL = function() {
  return this.proxy.getURL();
};

/**
 * @return {Object} The MRSS feed object.
 * @expose
*/
RecommendationsPlugin.prototype.getData = function() {
  return this.proxy.getData();
};

/**
 * @param {Object} value The MRSS feed object
 * @expose
*/
RecommendationsPlugin.prototype.setData = function(value) {
  this.proxy.setData(value);
};

/**
 * @return {string} The window target for recommendations.
 * @expose
*/
RecommendationsPlugin.prototype.getTarget = function() {
  return this.proxy.getTarget();
};

/**
 * @param {string} value The window target for recommendations.
 * @expose
*/
RecommendationsPlugin.prototype.setTarget = function(value) {
  this.proxy.setTarget(value);
};


AMP.registerPlugin("recommendations", "html", RecommendationsPlugin);
AMP.registerPlugin("recommendations", "flash", RecommendationsWrapper);

function ComscoreStreamsenseWrapper() {
  return ComscoreStreamsenseWrapper.__super__.constructor.apply(this, arguments);
}


__extends(ComscoreStreamsenseWrapper, PluginWrapper);


ComscoreStreamsenseWrapper.NAME = "ComscoreStreamsenseWrapper";

ComscoreStreamsenseWrapper.prototype.flashPlugins = [
  {
    id: "ComscoreStreamSensePlugin",
    src: '#{paths.resources}plugins/ComscoreStreamSensePlugin.swf',
    blocking: false,
    host: "akamai",
    main: "ComscoreStreamSensePlugin"
  }
];

/** @override
*/
ComscoreStreamsenseWrapper.prototype.createXML = function(xml) {
  var application, metrics, prop, props, vendor, _i, _len;
  application = xml.firstChild;
  metrics = xml.getElementsByTagName("metrics")[0];
  if (!(metrics != null)) {
    metrics = xml.createElement("metrics");
    application.appendChild(metrics);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "comscoreStreamSense");
  metrics.appendChild(vendor);
  props = [
    {
      value: this.config.data.clientId,
      key: "C2"
    }, {
      value: this.config.data.publisherSecret,
      key: "PUBLISHER_SECRET"
    }, {
      value: this.config.data.appVersion,
      key: "APP_VERSION"
    }, {
      value: this.config.data.metadata,
      key: "metadata"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (prop.value != null) {
      this.createProperty(xml, prop.key, prop.value, vendor);
    }
  }
  return xml;
};

/** 
 * @constructor 
 * @private
*/
function ComscoreStreamsenseProxy(config) {
  ComscoreStreamsenseProxy.__super__.constructor.call(this, config);
}


__extends(ComscoreStreamsenseProxy, PluginProxy);


/** @static
*/
ComscoreStreamsenseProxy.NAME = ModuleProxy.NAME;

ComscoreStreamsenseProxy.prototype.defaults = {
  plugin: {
    js: null
  },
  data: {
    clientId: null,
    publisherSecret: null,
    appVersion: null,
    metadata: null
  }
};

ComscoreStreamsenseProxy.prototype.myStreamingTag = null;

ComscoreStreamsenseProxy.prototype.sdk = null;

/** Overrides
*/
ComscoreStreamsenseProxy.prototype.getScript = function() {
  return this.config.plugin.js;
};

/** Overrides
*/
ComscoreStreamsenseProxy.prototype.initialize = function() {
  ComscoreStreamsenseProxy.__super__.initialize.call(this);
  this.sdk = akamai["amp"].ns_;
  if ((this.sdk != null) && this.myStreamingTag === null) {
    this.myStreamingTag = new this.sdk.StreamingTag({
      customerC2: this.value.data.clientId
    });
  }
};

ComscoreStreamsenseProxy.prototype.mediaChange = function() {
  if (this.myStreamingTag != null) {
    this.myStreamingTag.stop();
  }
  this.myStreamingTag = null;
  this.myStreamingTag = new this.sdk.StreamingTag({
    customerC2: this.value.data.clientId
  });
  this.facade.logger.log("[AMP ComscoreStreamsense Event] : Media Change, StreamTag ReInitialize");
};

ComscoreStreamsenseProxy.prototype.adStart = function(adVO) {
  if (adVO == null) {
    adVO = null;
  }
  this.myStreamingTag.playVideoAdvertisement(this.getMetaData(true));
  this.facade.logger.log("[AMP ComscoreStreamsense Event] : Ad Start");
};

/** Media Started
*/
ComscoreStreamsenseProxy.prototype.start = function(adVO) {
  var _ref;
  if (adVO == null) {
    adVO = null;
  }
  if ((_ref = this.facade.player.ads) != null ? _ref.getInProgress() : void 0) {
    return;
  }
  this.myStreamingTag.playVideoContentPart(this.getMetaData());
  this.facade.logger.log("[AMP ComscoreStreamsense Event] : Content Play");
};

/** Media Stop
*/
ComscoreStreamsenseProxy.prototype.stop = function() {
  this.myStreamingTag.stop();
  this.facade.logger.log("[AMP ComscoreStreamsense Event] : Stop");
};

/** Media Ended
*/
ComscoreStreamsenseProxy.prototype.ended = function() {
  this.myStreamingTag.stop();
  this.facade.logger.log("[AMP ComscoreStreamsense Event] : End");
  this.myStreamingTag = null;
  this.myStreamingTag = new this.sdk.StreamingTag({
    customerC2: this.value.data.clientId
  });
};

/** Get MetaData
*/
ComscoreStreamsenseProxy.prototype.getMetaData = function(ads) {
  var key, metadata, object, value;
  if (ads == null) {
    ads = false;
  }
  metadata = {};
  object = ads ? this.value.data.metadata.ads : this.value.data.metadata.video;
  for (key in object) {
    value = object[key];
    if (value !== "null") {
      metadata[key] = value;
    }
  }
  return metadata;
};

/**
 * The ComscoreStreamsenseStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseStartedCommand() {
  ComscoreStreamsenseStartedCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseStartedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseStartedCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.start(notification.body);
};

/**
 * The ComscoreStreamsenseAdStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseAdStartedCommand() {
  ComscoreStreamsenseAdStartedCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseAdStartedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseAdStartedCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.adStart(notification.body);
};

/**
 * The ComscoreStreamsenseStopCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseStopCommand() {
  ComscoreStreamsenseStopCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseStopCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseStopCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.stop(notification.body);
};

/**
 * The ComscoreStreamsenseAdErrorCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseAdErrorCommand() {
  ComscoreStreamsenseAdErrorCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseAdErrorCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseAdErrorCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.adStart(notification.body);
  comscoreProxy.stop(notification.body);
};

/**
 * The ComscoreStreamsenseChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseChangeMediaCommand() {
  ComscoreStreamsenseChangeMediaCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseChangeMediaCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseChangeMediaCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.mediaChange();
};

/**
 * The ComscoreStreamsenseEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStreamsenseEndedCommand() {
  ComscoreStreamsenseEndedCommand.__super__.constructor.call(this);
}


__extends(ComscoreStreamsenseEndedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStreamsenseEndedCommand.prototype.execute = function(notification) {
  var comscoreProxy;
  comscoreProxy = this.facade.retrieveProxy(ComscoreStreamsenseProxy.NAME);
  comscoreProxy.ended();
};

/** 
 * The RecommendationsGridPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {RecommendationsPlugin}
*/
function RecommendationsGridPlugin() {
  RecommendationsGridPlugin.__super__.constructor.call(this);
}


__extends(RecommendationsGridPlugin, RecommendationsPlugin);


RecommendationsGridPlugin.prototype.moduleName = "recommendationsgrid";

/** @override
*/
RecommendationsGridPlugin.prototype.createView = function() {
  if (this.config.view === "tile") {
    this.registerMediator(new RecommendationsFluidGridMediator());
  } else {
    this.registerMediator(new RecommendationsGridMediator());
  }
};

/**
*/
RecommendationsGridPlugin.prototype.listNotificationInterests = function() {
  return RecommendationsGridPlugin.__super__.listNotificationInterests.call(this).concat([Notifications.ENDED, Notifications.CHANGE_MEDIA, Notifications.PLAY, Notifications.PLAYING, Notifications.REPLAY]);
};


AMP.registerPlugin("recommendationsgrid", "html", RecommendationsGridPlugin);
AMP.registerPlugin("recommendationsgrid", "flash", RecommendationsWrapper);

/** 
 * @constructor 
 * @private
*/
function ComscoreProxy(config) {
  ComscoreProxy.__super__.constructor.call(this, config);
}


__extends(ComscoreProxy, DataBoundConfigurationProxy);


ComscoreProxy.prototype.configurationName = "comscore";

/** @static
*/
ComscoreProxy.NAME = ModuleProxy.NAME;

ComscoreProxy.prototype.defaults = {
  url: "http://b.scorecardresearch.com/b",
  events: {
    ads: null,
    video: null
  },
  data: {
    c1: null,
    c2: null,
    c3: null,
    c4: null,
    c5: null,
    c6: null,
    c7: null,
    c8: null,
    c9: null,
    c10: null,
    c14: null
  }
};

/**
 *
*/
ComscoreProxy.prototype.adStart = function() {
  var url;
  url = this.constructURL("ads", "started");
  Utils.beacon(url);
};

/**
 *
*/
ComscoreProxy.prototype.videoStart = function() {
  var url;
  url = this.constructURL("video", "started");
  Utils.beacon(url);
};

/**
 *
*/
ComscoreProxy.prototype.constructURL = function(target, type) {
  var data, event, events, item, key, query, url, value, _i, _len, _ref, _ref1, _ref2;
  data = {};
  events = (_ref = this.value.events) != null ? _ref[target] : void 0;
  if (events != null) {
    for (_i = 0, _len = events.length; _i < _len; _i++) {
      item = events[_i];
      if (item.type === type) {
        event = item;
      }
    }
  }
  _ref1 = this.value.data;
  for (key in _ref1) {
    value = _ref1[key];
    data[key] = (event != null ? (_ref2 = event.data) != null ? _ref2[key] : void 0 : void 0) || value;
  }
  if (data.c7 == null) {
    data.c7 = document.location.href.substr(0, 512);
  }
  if (data.c8 == null) {
    data.c8 = document.referrer.substr(0, 512);
  }
  if (data.c9 == null) {
    data.c9 = document.title;
  }
  if (data.cv == null) {
    data.cv = "2.0";
  }
  data.rn = Date.now();
  url = this.value.url;
  query = [];
  for (key in data) {
    value = data[key];
    if ((value != null) && value !== "") {
      query.push(key + "=" + escape(value));
    }
  }
  if (query.length > 0) {
    url += "?" + query.join("&");
  }
  return url.substr(0, 2080);
};

function ComscoreWrapper() {
  return ComscoreWrapper.__super__.constructor.apply(this, arguments);
}


__extends(ComscoreWrapper, PluginWrapper);


ComscoreWrapper.NAME = "ComscoreWrapper";

ComscoreWrapper.prototype.flashPlugins = [
  {
    id: "ComscorePlugin",
    src: '#{paths.resources}plugins/ComscorePlugin.swf',
    blocking: false,
    host: "akamai",
    main: "ComscorePlugin",
    type: "application/x-shockwave-flash"
  }
];

/** @override
*/
ComscoreWrapper.prototype.createXML = function(xml) {
  var application, element, event, events, map, metrics, node, prop, props, text, type, vendor, _i, _j, _len, _len1, _ref, _ref1, _ref2;
  application = xml.firstChild;
  metrics = xml.getElementsByTagName("metrics")[0];
  if (!(metrics != null)) {
    metrics = xml.createElement("metrics");
    application.appendChild(metrics);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "comscore");
  metrics.appendChild(vendor);
  map = {
    ads: {
      started: "adStart",
      ended: "adComplete"
    },
    video: {
      started: "videoStart",
      ended: "videoComplete"
    }
  };
  props = [
    {
      value: "c1",
      key: "COMSCORE_CSC1"
    }, {
      value: "c2",
      key: "COMSCORE_CSC2"
    }, {
      value: "c3",
      key: "COMSCORE_CSC3"
    }, {
      value: "c4",
      key: "COMSCORE_CSC4"
    }, {
      value: "c5",
      key: "COMSCORE_CSC5"
    }, {
      value: "c6",
      key: "COMSCORE_CSC6"
    }, {
      value: "c7",
      key: "COMSCORE_CSC7"
    }, {
      value: "c8",
      key: "COMSCORE_CSC8"
    }, {
      value: "c9",
      key: "COMSCORE_CSC9"
    }, {
      value: "c10",
      key: "COMSCORE_CSC10"
    }, {
      value: "c11",
      key: "COMSCORE_CSC14"
    }
  ];
  _ref = this.config.events;
  for (type in _ref) {
    events = _ref[type];
    if ((events != null) && events.length > 0) {
      for (_i = 0, _len = events.length; _i < _len; _i++) {
        event = events[_i];
        node = xml.createElement("property");
        node.setAttribute("key", map[type][event.type]);
        vendor.appendChild(node);
        element = xml.createElement("property");
        element.setAttribute("key", "COMSCORE_CSURL");
        text = XMLUtils.createTextContent(xml, this.config.url);
        element.appendChild(text);
        node.appendChild(element);
        for (_j = 0, _len1 = props.length; _j < _len1; _j++) {
          prop = props[_j];
          text = ((_ref1 = event.data) != null ? _ref1[prop.value] : void 0) || ((_ref2 = this.config.data) != null ? _ref2[prop.value] : void 0);
          if ((text != null) && text !== "") {
            element = xml.createElement("property");
            element.setAttribute("key", prop.key);
            text = XMLUtils.createTextContent(xml, text);
            element.appendChild(text);
            node.appendChild(element);
          }
        }
      }
    }
  }
  return xml;
};

/**
 * The ComscoreAdStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreAdStartCommand() {
  ComscoreAdStartCommand.__super__.constructor.call(this);
}


__extends(ComscoreAdStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreAdStartCommand.prototype.execute = function(notification) {
  var comscore;
  comscore = this.facade.retrieveProxy(ComscoreProxy.NAME);
  comscore.adStart();
};

/**
 * The ComscoreStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ComscoreStartCommand() {
  ComscoreStartCommand.__super__.constructor.call(this);
}


__extends(ComscoreStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
ComscoreStartCommand.prototype.execute = function(notification) {
  var comscore;
  comscore = this.facade.retrieveProxy(ComscoreProxy.NAME);
  comscore.videoStart();
};

/** 
 * The ComscoreStreamsensePlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ComscoreStreamsensePlugin() {
  ComscoreStreamsensePlugin.__super__.constructor.call(this);
}


__extends(ComscoreStreamsensePlugin, Plugin);


ComscoreStreamsensePlugin.prototype.moduleName = "comscorestreamsense";

/** @override
*/
ComscoreStreamsensePlugin.prototype.createModel = function() {
  this.registerProxy(new ComscoreStreamsenseProxy(this.config));
};

/** @override
*/
ComscoreStreamsensePlugin.prototype.createController = function() {
  ComscoreStreamsensePlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.MEDIA_CHANGE, ComscoreStreamsenseChangeMediaCommand);
  this.registerCommand(AdNotifications.AD_STARTED, ComscoreStreamsenseAdStartedCommand);
  this.registerCommand(AdNotifications.AD_ENDED, ComscoreStreamsenseStopCommand);
  this.registerCommand(AdNotifications.SKIPPED, ComscoreStreamsenseStopCommand);
  this.registerCommand(AdNotifications.AD_ERROR, ComscoreStreamsenseAdErrorCommand);
  this.registerCommand(Notifications.PLAYING, ComscoreStreamsenseStartedCommand);
  this.registerCommand(Notifications.PAUSED, ComscoreStreamsenseStopCommand);
  this.registerCommand(Notifications.ENDED, ComscoreStreamsenseEndedCommand);
};

/** @override
*/
ComscoreStreamsensePlugin.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE, AdNotifications.AD_STARTED, AdNotifications.AD_ENDED, AdNotifications.AD_ERROR, AdNotifications.SKIPPED, Notifications.ENDED, Notifications.PAUSED, Notifications.PLAYING];
};


AMP.registerPlugin("comscorestreamsense", "html", ComscoreStreamsensePlugin);
AMP.registerPlugin("comscorestreamsense", "flash", ComscoreStreamsenseWrapper);

/** 
 * @constructor
 * @private
 * @extends {PluginWrapper}
*/
function OmnitureWrapper(player, config) {
  if (config.heartbeat.enabled === true || config.useJS === true) {
    this.createXML = function() {};
    this.flashPlugins = [];
    this.plugin = new OmniturePlugin();
    this.plugin.oninitialized = player.registerModule.bind(player, this.plugin);
    this.plugin.initialize(config, player);
  }
  OmnitureWrapper.__super__.constructor.call(this, player, config);
}


__extends(OmnitureWrapper, PluginWrapper);


OmnitureWrapper.NAME = "OmnitureWrapper";

OmnitureWrapper.prototype.flashPlugins = [
  {
    id: "OmniturePlugin",
    src: '#{paths.resources}plugins/OmniturePlugin.swf',
    blocking: false,
    host: "akamai",
    main: "OmniturePlugin"
  }
];

/** @override
*/
OmnitureWrapper.prototype.createXML = function(xml) {
  var application, contextData, contextDataMapping, event, events, intervalProp, intervalReached, intervals, key, linkTracking, linkTrackingData, media, metrics, milestone, milestones, prop, property, props, trackMilestone, trackMilestones, type, value, vendor, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _m, _n, _o, _ref, _ref1, _ref2;
  if (this.config.useJS === true) {
    return;
  }
  application = xml.firstChild;
  metrics = xml.getElementsByTagName("metrics")[0];
  if (!(metrics != null)) {
    metrics = xml.createElement("metrics");
    application.appendChild(metrics);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "omniture");
  metrics.appendChild(vendor);
  props = [
    {
      value: this.config.channel,
      key: "OMNITURE_CHANNEL"
    }, {
      value: this.config.account,
      key: "OMNITURE_ACCOUNT"
    }, {
      value: this.config.debugTracking,
      key: "OMNITURE_DEBUG_TRACKING"
    }, {
      value: this.config.trackLocal,
      key: "OMNITURE_TRACK_LOCAL"
    }, {
      value: this.config.visitorNamespace,
      key: "OMNITURE_VISITOR_NAMESPACE"
    }, {
      value: this.config.trackingServer,
      key: "OMNITURE_TRACKING_SERVER"
    }, {
      value: this.config.trackingServerSecure,
      key: "OMNITURE_TRACKING_SERVER_SECURE"
    }, {
      value: this.config.currencyCode,
      key: "OMNITURE_CURRENCY_CODE"
    }, {
      value: this.config.trackWhilePlaying,
      key: "OMNITURE_TRACK_WHILE_PLAYING"
    }, {
      value: this.config.trackMediaMethods,
      key: "OMNITURE_TRACK_MEDIA_METHODS"
    }, {
      value: this.config.mediaName,
      key: "OMNITURE_MEDIA_NAME"
    }, {
      value: this.config.playerName,
      key: "OMNITURE_PLAYER_NAME"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (prop.value != null) {
      this.createProperty(xml, prop.key, prop.value, vendor);
    }
  }
  media = this.config.Media;
  if (media != null) {
    props = [
      {
        value: media.autoTrack,
        key: "OMNITURE_AUTO_TRACK"
      }, {
        value: media.segmentByMilestones,
        key: "OMNITURE_SEGMENT_MILESTONES"
      }, {
        value: media.trackVars,
        key: "OMNITURE_TRACKVARS"
      }, {
        value: media.trackEvents,
        key: "OMNITURE_TRACKEVENTS"
      }, {
        value: media.trackUsingContextData,
        key: "OMNITURE_TRACK_CONTEXT_DATA"
      }, {
        value: media.trackSecondIntervals,
        key: "OMNITURE_TRACKSECOND_INTERVALS"
      }
    ];
    for (_j = 0, _len1 = props.length; _j < _len1; _j++) {
      prop = props[_j];
      if (prop.value != null) {
        this.createProperty(xml, prop.key, prop.value, vendor);
      }
    }
    if (media.trackMilestones != null) {
      trackMilestones = this.createProperty(xml, "OMNITURE_TRACK_MILESTONES", null, vendor);
      milestones = media.trackMilestones;
      for (_k = 0, _len2 = milestones.length; _k < _len2; _k++) {
        milestone = milestones[_k];
        trackMilestone = this.createProperty(xml, milestone.percent, null, trackMilestones);
        for (key in milestone) {
          value = milestone[key];
          if (key !== "percent") {
            this.createProperty(xml, key, value, trackMilestone);
          }
        }
      }
    }
    contextDataMapping = media.contextDataMapping;
    if (contextDataMapping != null) {
      contextData = this.createProperty(xml, "OMNITURE_CONTEXT_DATA", null, vendor);
      for (key in contextDataMapping) {
        value = contextDataMapping[key];
        if (typeof value === "string") {
          this.createProperty(xml, key, value, contextData);
        }
        if (value instanceof Array) {
          property = this.createProperty(xml, key, null, contextData);
          for (_l = 0, _len3 = value.length; _l < _len3; _l++) {
            milestone = value[_l];
            this.createProperty(xml, milestone.percent, milestone.events, property);
          }
        }
      }
    }
  }
  linkTracking = this.config.customLinkTracking;
  if (linkTracking != null) {
    linkTrackingData = this.createProperty(xml, "OMNITURE_CUSTOM_LINK_TRACKING", null, vendor);
    for (key in linkTracking) {
      if (key === "intervalReached") {
        intervalReached = this.createProperty(xml, key, null, linkTrackingData);
        _ref = linkTracking[key];
        for (_m = 0, _len4 = _ref.length; _m < _len4; _m++) {
          intervals = _ref[_m];
          intervalProp = this.createProperty(xml, intervals.interval, null, intervalReached);
          for (key in intervals) {
            if (key !== "interval") {
              this.createProperty(xml, key, intervals[key], intervalProp);
            }
          }
        }
      } else {
        this.createProperty(xml, key, linkTracking[key], linkTrackingData);
      }
    }
  }
  events = (_ref1 = this.config.events) != null ? _ref1.video : void 0;
  if (events != null) {
    for (_n = 0, _len5 = events.length; _n < _len5; _n++) {
      event = events[_n];
      switch (event.type) {
        case "started":
          type = "videoStart";
          break;
        case "ended":
          type = "videoComplete";
          break;
        case "play":
          type = "videoResume";
          break;
        case "pause":
          type = "videoPause";
          break;
        default:
          type = event.type;
      }
      this.createProperty(xml, type, event.data, vendor);
    }
  }
  events = (_ref2 = this.config.events) != null ? _ref2.ads : void 0;
  if (events != null) {
    for (_o = 0, _len6 = events.length; _o < _len6; _o++) {
      event = events[_o];
      type = event.type === "started" ? 'adStart' : event.type === "ended" ? 'adComplete' : event.type;
      this.createProperty(xml, type, event.data, vendor);
    }
  }
};

/** 
 * The OmnitureProxy class.
 *   
 * @param {Object} config
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function OmnitureProxy(config) {
  OmnitureProxy.__super__.constructor.call(this, config);
}


__extends(OmnitureProxy, PluginProxy);


/** @static
*/
OmnitureProxy.NAME = ModuleProxy.NAME;

OmnitureProxy.prototype.defaults = {
  main: "s",
  heartbeat: null,
  account: null,
  playerName: null,
  mediaName: null,
  trackingServer: null,
  visitorNamespace: null,
  visitor: null,
  visitorID: null,
  pageName: null
};

OmnitureProxy.prototype.media = null;

OmnitureProxy.prototype.started = false;

OmnitureProxy.prototype.ad = null;

OmnitureProxy.prototype.adCurrentTime = null;

OmnitureProxy.prototype.adStarted = false;

OmnitureProxy.prototype.adsEnabled = false;

OmnitureProxy.prototype.getMediaName = function() {
  return this.getConfigurationData().mediaName || this.media.getTitle();
};

OmnitureProxy.prototype.getPlayerName = function() {
  var _ref;
  return this.getConfigurationData().playerName || ((_ref = this.facade.player.retrieveProxy(ConfigurationProxy.NAME)) != null ? _ref.getName() : void 0) || this.facade.player.config.name || "amp";
};

OmnitureProxy.prototype.getPlaybackCore = function() {
  var _ref;
  return ((_ref = this.facade.player.retrieveProxy(PlayerProxy.NAME)) != null ? _ref.getActivePlaybackCore() : void 0) || this.facade.player.playback;
};

/**
*/
OmnitureProxy.prototype.initialize = function() {
  var _ref, _ref1;
  OmnitureProxy.__super__.initialize.call(this);
  this.media = this.facade.player.retrieveProxy(MediaProxy.NAME);
  this.adsEnabled = (_ref = this.facade.player.ads) != null ? _ref.getEnabled() : void 0;
  if (this.plugin != null) {
    try {
      if (!(this.plugin.Media != null)) {
        this.plugin.loadModule("Media");
      }
    } catch (error) {
      this.error("initialize", error);
    }
    if (!(((_ref1 = this.plugin.Media) != null ? _ref1.openAd : void 0) != null)) {
      this.adStart = this.adEnded = this.adPlay = this.adPause = this.adCurrentTime = function() {};
    }
  }
};

/**
*/
OmnitureProxy.prototype.createPlugin = function() {
  return window[this.getConfigurationData().main];
};

/**
*/
OmnitureProxy.prototype.mediaChange = function() {
  var _ref;
  this.started = false;
  this.adsEnabled = (_ref = this.facade.player.ads) != null ? _ref.getEnabled() : void 0;
};

/**
*/
OmnitureProxy.prototype.start = function() {
  if (this.started === true) {
    return;
  }
  try {
    this.started = true;
    this.plugin.Media.open(this.getMediaName(), this.media.getDuration(), this.getPlayerName());
  } catch (error) {
    this.error(error);
  }
  if (this.adsEnabled !== true) {
    this.play();
  }
};

/**
*/
OmnitureProxy.prototype.play = function() {
  if (this.started !== true) {
    this.start();
    return;
  }
  if (this.adStarted === true) {
    return;
  }
  try {
    this.plugin.Media.play(this.getMediaName(), this.getPlaybackCore().getCurrentTime() || 0);
  } catch (error) {
    this.error(error);
  }
};

/**
*/
OmnitureProxy.prototype.pause = function() {
  if (this.adStarted === true) {
    return;
  }
  try {
    this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime());
  } catch (error) {
    this.error(error);
  }
};

/**
*/
OmnitureProxy.prototype.seeking = function() {
  try {
    this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime());
  } catch (error) {
    this.error(error);
  }
};

/**
*/
OmnitureProxy.prototype.seeked = function() {
  try {
    this.plugin.Media.play(this.getMediaName(), this.getPlaybackCore().getCurrentTime());
  } catch (error) {
    this.error(error);
  }
};

/**
*/
OmnitureProxy.prototype.ended = function() {
  try {
    this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime());
    this.plugin.Media.close(this.getMediaName());
    this.started = false;
  } catch (error) {
    this.error(error);
  }
};

/** Pluging.
*/
OmnitureProxy.prototype.getAd = function() {
  return this.ad;
};

OmnitureProxy.prototype.setAd = function(value) {
  this.adStarted = false;
  this.adCurrentTime = 0;
  return this.ad = value;
};

/**
*/
OmnitureProxy.prototype.adStart = function() {
  try {
    this.adStarted = true;
    this.plugin.Media.openAd(this.ad.title, this.ad.duration, this.getPlayerName(), this.getMediaName(), this.ad.type, this.ad.position, this.ad.cpm);
    this.adPlay();
  } catch (error) {
    this.error("ad start", error);
  }
};

/**
*/
OmnitureProxy.prototype.adPlay = function() {
  if (this.adStarted !== true) {
    this.adStart();
  }
  try {
    this.plugin.Media.play(this.ad.title, this.adCurrentTime || 0);
  } catch (error) {
    this.error("ad play", error);
  }
};

/**
*/
OmnitureProxy.prototype.adPause = function() {
  try {
    this.plugin.Media.stop(this.ad.title, this.adCurrentTime);
  } catch (error) {
    this.error("ad pause", error);
  }
};

/**
*/
OmnitureProxy.prototype.adCurrentTime = function(value) {
  this.adCurrentTime = value;
};

/**
*/
OmnitureProxy.prototype.adEnded = function() {
  if (this.adStarted === false) {
    return;
  }
  try {
    this.adStarted = false;
    this.plugin.Media.stop(this.ad.title, this.ad.duration);
    this.plugin.Media.close(this.ad.title);
  } catch (error) {
    this.error("ad end", error);
  }
  this.play();
};

/**
 * The HeartbeatProxy class.
 *
 * @param {Object} config
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function HeartbeatProxy(config) {
  HeartbeatProxy.__super__.constructor.call(this, config);
}


__extends(HeartbeatProxy, OmnitureProxy);


/** @static
*/
HeartbeatProxy.NAME = ModuleProxy.NAME;

HeartbeatProxy.prototype.aaPlugin = null;

HeartbeatProxy.prototype.playerPlugin = null;

HeartbeatProxy.prototype.heartbeat = null;

HeartbeatProxy.prototype.resumed = false;

HeartbeatProxy.prototype.liveLinear = null;

/**
*/
HeartbeatProxy.prototype.initialize = function() {
  var ahPlugin, appMeasurement, config, delegate, pluginConfig, plugins, visitor,
    _this = this;
  HeartbeatProxy.__super__.initialize.call(this);
  config = this.getConfigurationData();
  if (config.heartbeat.liveLinear != null) {
    this.calculateLiveLinear();
  }
  if (typeof Visitor !== "undefined" && Visitor !== null) {
    visitor = new Visitor(config.visitor.marketingCloudOrgId);
    visitor.trackingServer = config.visitor.trackingServer;
  }
  appMeasurement = new AppMeasurement();
  appMeasurement.account = config.account;
  appMeasurement.trackingServer = config.trackingServer;
  appMeasurement.visitor = visitor;
  appMeasurement.pageName = config.pageName;
  appMeasurement.charSet = "UTF-8";
  appMeasurement.visitorID = config.visitorID;
  delegate = this.createDelegate();
  this.playerPlugin = new ADB.va.plugins.videoplayer.VideoPlayerPlugin(delegate);
  pluginConfig = new ADB.va.plugins.videoplayer.VideoPlayerPluginConfig();
  pluginConfig.debugLogging = this.getDebug();
  this.playerPlugin.configure(pluginConfig);
  delegate = new ADB.va.plugins.aa.AdobeAnalyticsPluginDelegate();
  delegate.onError = function(errorInfo) {
    _this.facade.logger.error("AdobeAnalyticsPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
  };
  this.aaPlugin = new ADB.va.plugins.aa.AdobeAnalyticsPlugin(appMeasurement, delegate);
  pluginConfig = new ADB.va.plugins.aa.AdobeAnalyticsPluginConfig();
  pluginConfig.channel = config.heartbeat.channel;
  pluginConfig.debugLogging = this.getDebug();
  this.aaPlugin.configure(pluginConfig);
  delegate = new ADB.va.plugins.ah.AdobeHeartbeatPluginDelegate();
  delegate.onError = function(errorInfo) {
    _this.facade.logger.error("AdobeHeartbeatPlugin error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
  };
  ahPlugin = new ADB.va.plugins.ah.AdobeHeartbeatPlugin(delegate);
  pluginConfig = new ADB.va.plugins.ah.AdobeHeartbeatPluginConfig(config.heartbeat.trackingServer, config.heartbeat.publisher);
  pluginConfig.ovp = config.heartbeat.ovp;
  pluginConfig.sdk = config.heartbeat.sdk;
  pluginConfig.ssl = config.heartbeat.ssl === true;
  pluginConfig.debugLogging = this.getDebug();
  ahPlugin.configure(pluginConfig);
  plugins = [this.playerPlugin, this.aaPlugin, ahPlugin];
  delegate = new ADB.va.HeartbeatDelegate();
  delegate.onError = function(errorInfo) {
    _this.facade.logger.error("Heartbeat error: " + errorInfo.getMessage() + " | " + errorInfo.getDetails());
  };
  this.heartbeat = new ADB.va.Heartbeat(delegate, plugins);
  pluginConfig = new ADB.va.HeartbeatConfig();
  pluginConfig.debugLogging = this.getDebug();
  this.heartbeat.configure(pluginConfig);
};

/**
*/
HeartbeatProxy.prototype.calculateLiveLinear = function() {
  var liveLinear, start,
    _this = this;
  if (this.liveLinear == null) {
    this.liveLinear = {};
  }
  if (this.liveLinear.updating === true) {
    return;
  }
  this.liveLinear.updating = true;
  liveLinear = {
    updating: false
  };
  start = Date.now();
  Utils.getUTC().then(function(utc) {
    var date, day, end, timezone;
    end = Date.now();
    date = new Date(utc);
    day = date.toJSON().replace(/([^T]+T).+/, "$1");
    timezone = _this.getConfigurationData().heartbeat.liveLinear.timezone || "Z";
    liveLinear.utc = utc;
    date = new Date(start + ((end - start) / 2));
    liveLinear.client = date.getTime();
    liveLinear.offset = liveLinear.client - utc;
    date = new Date(day + "00:00:00.000" + timezone);
    liveLinear.start = date.getTime();
    date = new Date(day + "23:59:59.999" + timezone);
    liveLinear.end = date.getTime();
    liveLinear.duration = Math.round((liveLinear.end - liveLinear.start) / 1000);
    return _this.liveLinear = liveLinear;
  });
  return;
};

/**
*/
HeartbeatProxy.prototype.calculateLiveLinearTime = function() {
  var now, time;
  now = Date.now() - this.liveLinear.offset;
  time = Math.round((now - this.liveLinear.start) / 1000);
  if (time > this.liveLinear.duration) {
    time = time - this.liveLinear.duration;
    this.calculateLiveLinear();
  }
  return time;
};

/**
*/
HeartbeatProxy.prototype.createDelegate = function() {
  var delegate,
    _this = this;
  delegate = new ADB.va.plugins.videoplayer.VideoPlayerPluginDelegate();
  delegate.getVideoInfo = function() {
    var config, playbackCore, time, videoInfo;
    playbackCore = _this.getPlaybackCore();
    videoInfo = new ADB.va.plugins.videoplayer.VideoInfo();
    videoInfo.id = _this.media.getGUID() || _this.media.getTitle();
    videoInfo.playerName = _this.getPlayerName();
    videoInfo.name = _this.getMediaName();
    videoInfo.resumed = _this.resumed;
    config = _this.getConfigurationData().heartbeat;
    if (config.liveLinear.enabled === true) {
      videoInfo.length = _this.liveLinear.duration;
      videoInfo.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_LIVE;
      videoInfo.playhead = _this.calculateLiveLinearTime();
    } else if (_this.media.getTemporalType() === "live") {
      videoInfo.length = -1;
      videoInfo.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_LIVE;
      videoInfo.playhead = 0;
    } else {
      videoInfo.length = _this.media.getDuration();
      videoInfo.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_VOD;
      time = playbackCore != null ? typeof playbackCore.getCurrentTime === "function" ? playbackCore.getCurrentTime() : void 0 : void 0;
      videoInfo.playhead = !(time != null) || isNaN(time) ? 0 : time;
    }
    return videoInfo;
  };
  delegate.getAdInfo = function() {
    var adInfo, duration;
    adInfo = new ADB.va.plugins.videoplayer.AdInfo();
    if (!(_this.ad != null)) {
      return null;
    }
    adInfo.id = _this.ad.id;
    duration = _this.ad.duration;
    adInfo.length = isNaN(duration) || duration === 0 ? -1 : duration;
    adInfo.position = _this.ad.position;
    adInfo.name = _this.ad.title;
    return adInfo;
  };
  delegate.getAdBreakInfo = function() {
    var adBreakInfo;
    adBreakInfo = new ADB.va.plugins.videoplayer.AdBreakInfo();
    if (!(_this.ad != null)) {
      return null;
    }
    adBreakInfo.name = _this.ad.type;
    adBreakInfo.position = _this.ad.position;
    adBreakInfo.playerName = _this.getPlayerName();
    adBreakInfo.startTime = _this.getPlaybackCore().getCurrentTime();
    return adBreakInfo;
  };
  delegate.getChapterInfo = function() {
    var chapterInfo, currentScene;
    currentScene = _this.media.getScene(_this.getPlaybackCore().getCurrentTime());
    if (!(currentScene != null)) {
      return null;
    }
    chapterInfo = new ADB.va.plugins.videoplayer.ChapterInfo();
    chapterInfo.name = currentScene.title;
    chapterInfo.length = currentScene.end - currentScene.start;
    chapterInfo.position = currentScene.position;
    chapterInfo.startTime = currentScene.start;
    return chapterInfo;
  };
  delegate.onError = function(error) {
    _this.facade.logger.error("Heartbeat Error:", error);
  };
  delegate.getQoSInfo = function() {
    var qosInfo;
    qosInfo = new ADB.va.plugins.videoplayer.QoSInfo();
    return null;
  };
  return delegate;
};

/**
*/
HeartbeatProxy.prototype.mediaChange = function() {
  var metadata, _ref;
  HeartbeatProxy.__super__.mediaChange.call(this);
  this.resumed = false;
  metadata = (_ref = this.getValue("heartbeat").metadata) != null ? _ref.video : void 0;
  if (metadata != null) {
    this.aaPlugin.setVideoMetadata(metadata);
  }
};

/**
*/
HeartbeatProxy.prototype.start = function() {
  if (this.started === true) {
    return;
  }
  try {
    this.playerPlugin.trackVideoLoad();
    this.started = true;
  } catch (error) {
    this.error(error);
  }
  this.play();
};

/**
*/
HeartbeatProxy.prototype.play = function() {
  if (this.started !== true) {
    this.start();
  }
  try {
    this.playerPlugin.trackPlay();
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.pause = function() {
  try {
    this.playerPlugin.trackPause();
    this.resumed = true;
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.seeking = function() {
  try {
    this.playerPlugin.trackSeekStart();
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.seeked = function() {
  try {
    this.playerPlugin.trackSeekComplete();
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.ended = function() {
  try {
    this.playerPlugin.trackComplete();
    this.playerPlugin.trackVideoUnload();
    this.started = false;
    this.aaPlugin.setVideoMetadata(null);
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.adStart = function() {
  var metadata, _ref;
  if (this.started !== true) {
    metadata = (_ref = this.getValue("heartbeat").metadata) != null ? _ref.ad : void 0;
    if (metadata != null) {
      this.aaPlugin.setAdMetadata(metadata);
    }
    this.start();
    setTimeout(this.adStart.bind(this), 0);
    return;
  }
  try {
    this.playerPlugin.trackAdStart();
  } catch (error) {
    this.error(error);
  }
};

/**
*/
HeartbeatProxy.prototype.adEnded = function() {
  try {
    this.playerPlugin.trackAdComplete();
    this.aaPlugin.setAdMetadata(null);
  } catch (error) {
    this.error(error);
  }
};

HeartbeatProxy.prototype.adPlay = function() {};

HeartbeatProxy.prototype.adPause = function() {};

/**
 * The OmnitureStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureStartCommand() {
  OmnitureStartCommand.__super__.constructor.call(this);
}


__extends(OmnitureStartCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureStartCommand.prototype.execute = function(notification) {
  this.proxy.start();
};

/**
 * The OmniturePlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmniturePlayCommand() {
  OmniturePlayCommand.__super__.constructor.call(this);
}


__extends(OmniturePlayCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmniturePlayCommand.prototype.execute = function(notification) {
  this.proxy.play();
};

/**
 * The OmniturePauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmniturePauseCommand() {
  OmniturePauseCommand.__super__.constructor.call(this);
}


__extends(OmniturePauseCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmniturePauseCommand.prototype.execute = function(notification) {
  this.proxy.pause();
};

/**
 * The OmnitureSeekingCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureSeekingCommand() {
  OmnitureSeekingCommand.__super__.constructor.call(this);
}


__extends(OmnitureSeekingCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureSeekingCommand.prototype.execute = function(notification) {
  this.proxy.seeking();
};

/**
 * The OmnitureSeekedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureSeekedCommand() {
  OmnitureSeekedCommand.__super__.constructor.call(this);
}


__extends(OmnitureSeekedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureSeekedCommand.prototype.execute = function(notification) {
  this.proxy.seeked();
};

/**
 * The OmnitureEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureEndedCommand() {
  OmnitureEndedCommand.__super__.constructor.call(this);
}


__extends(OmnitureEndedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureEndedCommand.prototype.execute = function(notification) {
  this.proxy.ended();
};

/**
 * The OmnitureChangeMediaCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureContentChangedCommand() {
  OmnitureContentChangedCommand.__super__.constructor.call(this);
}


__extends(OmnitureContentChangedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureContentChangedCommand.prototype.execute = function(notification) {
  this.proxy.setMedia(notification.getBody());
  this.proxy.start();
};

/**
 * The OmnitureAdLoadedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdLoadedCommand() {
  OmnitureAdLoadedCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdLoadedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdLoadedCommand.prototype.execute = function(notification) {
  this.proxy.setAd(notification.getBody());
};

/**
 * The OmnitureAdStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdStartedCommand() {
  OmnitureAdStartedCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdStartedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdStartedCommand.prototype.execute = function(notification) {
  this.proxy.adStart();
};

/**
 * The OmnitureAdPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdPlayCommand() {
  OmnitureAdPlayCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdPlayCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdPlayCommand.prototype.execute = function(notification) {
  this.proxy.adPlay();
};

/**
 * The OmnitureAdPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdPauseCommand() {
  OmnitureAdPauseCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdPauseCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdPauseCommand.prototype.execute = function(notification) {
  this.proxy.adPause();
};

/**
 * The OmnitureAdBreakEndCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdBreakEndCommand() {
  OmnitureAdBreakEndCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdBreakEndCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdBreakEndCommand.prototype.execute = function(notification) {
  this.proxy.adEnded();
  this.proxy.setAd(null);
};

/**
 * The OmnitureAdTimeRemainingCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureAdTimeUpdateCommand() {
  OmnitureAdTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(OmnitureAdTimeUpdateCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureAdTimeUpdateCommand.prototype.execute = function(notification) {
  this.proxy.adCurrentTime(notification.getBody());
};

/**
 * The OmnitureMediaChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {PluginCommand}
*/
function OmnitureMediaChangeCommand() {
  OmnitureMediaChangeCommand.__super__.constructor.call(this);
}


__extends(OmnitureMediaChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
OmnitureMediaChangeCommand.prototype.execute = function(notification) {
  this.proxy.mediaChange();
};

/** 
 * The ComscorePlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ComscorePlugin() {
  ComscorePlugin.__super__.constructor.call(this);
}


__extends(ComscorePlugin, Plugin);


ComscorePlugin.prototype.moduleName = "comscore";

/** @override
*/
ComscorePlugin.prototype.createController = function() {
  ComscorePlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.STARTED, ComscoreStartCommand);
  this.registerCommand(Notifications.CONTENT_CHANGED, ComscoreStartCommand);
  this.registerCommand(AdNotifications.AD_STARTED, ComscoreAdStartCommand);
};

/** @override
*/
ComscorePlugin.prototype.createModel = function() {
  this.registerProxy(new ComscoreProxy(this.config));
};

/** @override
*/
ComscorePlugin.prototype.listNotificationInterests = function() {
  return [Notifications.STARTED, AdNotifications.AD_STARTED, Notifications.CONTENT_CHANGED];
};


AMP.registerPlugin("comscore", "html", ComscorePlugin);
AMP.registerPlugin("comscore", "flash", ComscoreWrapper);

/** 
 * @constructor
 * @private
*/
function InfoWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  InfoWrapper.__super__.constructor.call(this, player, config);
}


__extends(InfoWrapper, PluginWrapper);


InfoWrapper.NAME = "InfoWrapper";

/** @override
*/
InfoWrapper.prototype.listNotificationInterests = function() {
  return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML, FlashNotifications.SHARE, FlashNotifications.SHARE_REQUEST];
};

/**
*/
InfoWrapper.prototype.handleNotification = function(notification) {
  var application, body, data, element, elements, flashvars, info, name, property, provider, text, type, view, xml, _i, _len;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case FlashNotifications.CREATE_FLASH_VARS:
      flashvars = body.flashvars;
      break;
    case FlashNotifications.CREATE_XML:
      xml = body.xml;
      application = xml.firstChild;
      view = xml.getElementsByTagName("view")[0];
      elements = xml.getElementsByTagName("element");
      for (_i = 0, _len = elements.length; _i < _len; _i++) {
        element = elements[_i];
        if (!(element.getAttribute("id") === "infoOverlayAdvanced")) {
          continue;
        }
        info = element;
        break;
      }
      if (!(view != null)) {
        return;
      }
      if (!(info != null)) {
        info = xml.createElement("element");
        info.setAttribute("id", "infoOverlayAdvanced");
        info.setAttribute("displayStates", "preplay,paused,ns,fs,mouseover");
        view.insertBefore(info, view.childNodes[0]);
      }
      data = xml.createElement("data");
      info.appendChild(data);
      if (this.config.title != null) {
        property = xml.createElement("property");
        property.setAttribute("key", "title");
        text = XMLUtils.createTextContent(xml, this.config.title);
        property.appendChild(text);
        data.appendChild(property);
      }
      if (this.config.description != null) {
        property = xml.createElement("property");
        property.setAttribute("key", "description");
        text = XMLUtils.createTextContent(xml, this.config.description);
        property.appendChild(text);
        data.appendChild(property);
      }
      if (this.config.more != null) {
        property = xml.createElement("property");
        property.setAttribute("key", "more");
        text = XMLUtils.createTextContent(xml, this.config.more);
        property.appendChild(text);
        data.appendChild(property);
      }
      if (this.config.less != null) {
        property = xml.createElement("property");
        property.setAttribute("key", "less");
        text = XMLUtils.createTextContent(xml, this.config.less);
        property.appendChild(text);
        data.appendChild(property);
      }
      if (this.config.provider != null) {
        provider = xml.createElement("property");
        provider.setAttribute("key", "provider");
        data.appendChild(provider);
        if (this.config.provider.name != null) {
          property = xml.createElement("property");
          property.setAttribute("key", "name");
          text = XMLUtils.createTextContent(xml, this.config.provider.name);
          property.appendChild(text);
          provider.appendChild(property);
        }
        if (this.config.provider.image != null) {
          property = xml.createElement("property");
          property.setAttribute("key", "image");
          text = XMLUtils.createTextContent(xml, this.config.provider.image);
          property.appendChild(text);
          provider.appendChild(property);
        }
      }
      break;
    case FlashNotifications.SHARE:
    case FlashNotifications.SHARE_REQUEST:
      type = "share";
  }
  if (type != null) {
    return this.dispatchEvent(new Event(type, body));
  }
};


AMP.registerPlugin("info", "flash", InfoWrapper);

/**
 * The InfoMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
*/
function InfoMediator() {
  InfoMediator.__super__.constructor.call(this);
}


__extends(InfoMediator, PluginMediator);


InfoMediator.prototype.componentName = "info";

InfoMediator.prototype.title = null;

InfoMediator.prototype.shortDescription = null;

InfoMediator.prototype.icon = null;

InfoMediator.prototype.provider = null;

/**
 * @override
*/
InfoMediator.prototype.onRegister = function() {
  InfoMediator.__super__.onRegister.call(this);
  this.title = this.create("info-title");
  this.provider = this.create("info-provider");
  this.shortDescription = this.create("info-short-description");
  this.icon = this.create("info-icon", this, "img");
  this.dataChangedHandler();
};

/**
 * @override
*/
InfoMediator.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE];
};

/**
 * @override
*/
InfoMediator.prototype.handleNotification = function(notification) {
  var body, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case Notifications.MEDIA_CHANGE:
      this.dataChangedHandler();
  }
};

InfoMediator.prototype.moreClicked = function(event) {
  return this.classList.add("open");
};

InfoMediator.prototype.closeClicked = function(event) {
  return this.classList.remove("open");
};

InfoMediator.prototype.dataChangedHandler = function() {
  var styles, _ref;
  if (this.plugin.value.title != null) {
    this.title.textContent = this.plugin.value.title;
  }
  if (((_ref = this.plugin.value.provider) != null ? _ref.image : void 0) != null) {
    this.icon.src = this.plugin.value.provider.image;
  }
  styles = getComputedStyle(this.title);
  if (this.title.clientHeight > parseInt(styles.lineHeight)) {
    this.classList.add("info-small");
    this.shortDescription.innerHTML = this.provider.innerHTML = "";
    return;
  } else {
    this.classList.remove("info-small");
  }
  this.truncateDescription(this.plugin.value.description, this.plugin.value.more);
  this.provider.textContent = this.plugin.value.provider.name != null ? "" + this.plugin.value.provider.name : "";
};

InfoMediator.prototype.truncateDescription = function(desc) {
  var character, ellp, index, text, tf, _i, _len;
  ellp = "...";
  text = "";
  tf = this.shortDescription;
  tf.textContent = "";
  if (!(desc != null)) {
    return;
  }
  for (index = _i = 0, _len = desc.length; _i < _len; index = ++_i) {
    character = desc[index];
    tf.textContent = text + character + ellp;
    if (tf.scrollHeight > tf.clientHeight) {
      tf.textContent = text + ellp;
      break;
    } else {
      text += character;
    }
  }
};

/** 
 * The InfoProxy class.
 *   
 * @constructor
 * @private 
 * @extends {DataBoundConfigurationProxy}
 * @param {Object} data
*/
function InfoProxy(data) {
  InfoProxy.__super__.constructor.call(this, data);
}


__extends(InfoProxy, DataBoundConfigurationProxy);


InfoProxy.prototype.configurationName = "info";

/** @static
*/
InfoProxy.NAME = ModuleProxy.NAME;

InfoProxy.prototype.defaults = {
  title: '#{media.title}',
  description: '#{media.description}',
  provider: {},
  more: "read more",
  less: "less"
};

/** 
 * The AdContentStartedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContentStartedCommand() {
  AdContentStartedCommand.__super__.constructor.call(this);
}


__extends(AdContentStartedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdContentStartedCommand.prototype.execute = function(notification) {
  this.proxy.contentStarted();
};

/** 
 * The AdContentEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContentEndedCommand() {
  AdContentEndedCommand.__super__.constructor.call(this);
}


__extends(AdContentEndedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdContentEndedCommand.prototype.execute = function(notification) {
  this.proxy.contentEnded();
};

/** 
 * The AdMediaChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdMediaChangeCommand() {
  AdMediaChangeCommand.__super__.constructor.call(this);
}


__extends(AdMediaChangeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdMediaChangeCommand.prototype.execute = function(notification) {
  if (this.proxy.getEnabled() === false) {
    return;
  }
  this.proxy.engage(notification.getBody());
};

/** 
 * The AdLoadedCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdLoadedCommand() {
  AdLoadedCommand.__super__.constructor.call(this);
}


__extends(AdLoadedCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdLoadedCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.UPDATE_DATA_BINDINGS, {
    contexts: [this.proxy.getContextName()]
  });
  AdLoadedCommand.__super__.execute.call(this, notification);
};

/**
 * The AdBreakStartCommand class.
 *
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdBreakStartCommand() {
  AdBreakStartCommand.__super__.constructor.call(this);
}


__extends(AdBreakStartCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AdBreakStartCommand.prototype.execute = function(notification) {
  AdBreakStartCommand.__super__.execute.call(this, notification);
  this.proxy.breakStart();
};

/**
 * The AdBreakEndCommand class.
 *
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdBreakEndCommand() {
  AdBreakEndCommand.__super__.constructor.call(this);
}


__extends(AdBreakEndCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AdBreakEndCommand.prototype.execute = function(notification) {
  AdBreakEndCommand.__super__.execute.call(this, notification);
  this.proxy.breakEnd();
  if (this.applicationState.getEnded() && this.applicationState.getHasPostContent() === true) {
    this.sendNotification(Notifications.MEDIA_SEQUENCE_ENDED);
  }
};

/** 
 * The AdSeekCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdSeekCommand() {
  AdSeekCommand.__super__.constructor.call(this);
}


__extends(AdSeekCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdSeekCommand.prototype.execute = function(notification) {
  this.proxy.contentSeek(notification.getBody());
};

/** 
 * The AdPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContainerCreatedCommand() {
  AdContainerCreatedCommand.__super__.constructor.call(this);
}


__extends(AdContainerCreatedCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdContainerCreatedCommand.prototype.execute = function(notification) {
  this.proxy.container = notification.getBody();
  AdContainerCreatedCommand.__super__.execute.call(this, notification);
};

/** 
 * The AdReplayCommand class.
 * 
 * Added to address ad replay workflow FLASHPLR 
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdReplayCommand() {
  AdReplayCommand.__super__.constructor.call(this);
}


__extends(AdReplayCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdReplayCommand.prototype.execute = function(notification) {
  if (typeof this.proxy.replay === "function" && this.facade.player.getAutoplay() === false) {
    this.proxy.replay();
  }
};

/** 
 * @constructor
*/
function AdVO(id, title, duration, position, type, partner, advertiser, companions, request, metadata, totalAds, time) {
  this.id = id;
  this.title = title;
  this.duration = duration;
  this.position = position;
  this.type = type;
  this.partner = partner;
  this.advertiser = advertiser;
  this.companions = companions;
  this.request = request;
  this.metadata = metadata;
  this.totalAds = totalAds;
  this.time = time;
}

AdVO.prototype.id = null;

AdVO.prototype.title = null;

AdVO.prototype.duration = NaN;

AdVO.prototype.position = NaN;

AdVO.prototype.totalAds = NaN;

AdVO.prototype.type = null;

AdVO.prototype.partner = null;

AdVO.prototype.advertiser = null;

AdVO.prototype.companions = null;

AdVO.prototype.metadata = null;

AdVO.prototype.request = null;

AdVO.prototype.error = null;

AdVO.prototype.time = null;

/** 
 * The AdStartCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.MacroCommand}
*/
function AdStartCommand() {
  AdStartCommand.__super__.constructor.call(this);
}


__extends(AdStartCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdStartCommand.prototype.execute = function(notification) {
  this.sendNotification(Notifications.PLAY_REQUEST);
  if (this.playback.initialized === false) {
    this.player.sendNotification(Notifications.INITIALIZED);
  }
  this.proxy.start();
  AdStartCommand.__super__.execute.call(this, notification);
};

/** 
 * The AdPlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdPlayCommand() {
  AdPlayCommand.__super__.constructor.call(this);
}


__extends(AdPlayCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdPlayCommand.prototype.execute = function(notification) {
  if (this.applicationState.getLocked() === true) {
    return;
  }
  this.sendNotification(Notifications.PLAY_REQUEST);
  if (this.proxy.getStarted() === false) {
    this.sendNotification(Notifications.START, true);
    return;
  }
  this.proxy.play();
  this.facade.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
};

/** 
 * The AdPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdPauseCommand() {
  AdPauseCommand.__super__.constructor.call(this);
}


__extends(AdPauseCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdPauseCommand.prototype.execute = function(notification) {
  this.proxy.pause();
  this.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
};

/** 
 * The AdTogglePlayPauseCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdTogglePlayPauseCommand() {
  AdTogglePlayPauseCommand.__super__.constructor.call(this);
}


__extends(AdTogglePlayPauseCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdTogglePlayPauseCommand.prototype.execute = function(notification) {
  var note;
  if (this.proxy.getPaused() || this.proxy.getStarted() === false) {
    note = Notifications.PLAY;
  } else {
    note = Notifications.PAUSE;
  }
  this.sendNotification(note, true);
};

/** 
 * The AdVolumeChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdVolumeChangeCommand() {
  AdVolumeChangeCommand.__super__.constructor.call(this);
}


__extends(AdVolumeChangeCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdVolumeChangeCommand.prototype.execute = function(notification) {
  this.proxy.setVolume(notification.getBody());
  AdVolumeChangeCommand.__super__.execute.call(this, notification);
};

/** 
 * The AdPlayStateChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdPlayStateChangeCommand() {
  AdPlayStateChangeCommand.__super__.constructor.call(this);
}


__extends(AdPlayStateChangeCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AdPlayStateChangeCommand.prototype.execute = function(notification) {
  if (notification.getBody().value === "playing") {
    this.dispatchEvent("playing", this.proxy.adVO);
  }
};

/** 
 * The OmniturePlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function OmniturePlugin() {
  OmniturePlugin.__super__.constructor.call(this);
}


__extends(OmniturePlugin, Plugin);


OmniturePlugin.prototype.moduleName = "omniture";

/** @override
*/
OmniturePlugin.prototype.createController = function() {
  this.registerCommand(Notifications.MEDIA_CHANGE, OmnitureMediaChangeCommand);
  this.registerCommand(Notifications.ENDED, OmnitureEndedCommand);
  this.registerCommand(Notifications.STARTED, OmnitureStartCommand);
  this.registerCommand(Notifications.PLAY, OmniturePlayCommand);
  this.registerCommand(Notifications.PAUSE, OmniturePauseCommand);
  this.registerCommand(Notifications.SEEKING, OmnitureSeekingCommand);
  this.registerCommand(Notifications.SEEKED, OmnitureSeekedCommand);
  this.registerCommand(Notifications.CHANGE_CONTENT, OmnitureEndedCommand);
  this.registerCommand(Notifications.CONTENT_CHANGED, OmnitureContentChangedCommand);
  this.registerCommand(AdNotifications.AD_LOADED, OmnitureAdLoadedCommand);
  this.registerCommand(AdNotifications.AD_STARTED, OmnitureAdStartedCommand);
  this.registerCommand(AdNotifications.AD_PLAY, OmnitureAdPlayCommand);
  this.registerCommand(AdNotifications.AD_PAUSE, OmnitureAdPauseCommand);
  this.registerCommand(AdNotifications.AD_TIME_UPDATE, OmnitureAdTimeUpdateCommand);
  this.registerCommand(AdNotifications.BREAK_END, OmnitureAdBreakEndCommand);
};

/** @override
*/
OmniturePlugin.prototype.createModel = function() {
  var _ref;
  if (((_ref = this.config.heartbeat) != null ? _ref.enabled : void 0) === true) {
    this.registerProxy(new HeartbeatProxy(this.config));
  } else {
    this.registerProxy(new OmnitureProxy(this.config));
  }
};

/**
*/
OmniturePlugin.prototype.listNotificationInterests = function() {
  return [Notifications.CHANGE_MEDIA, Notifications.MEDIA_CHANGE, Notifications.CHANGE_CONTENT, Notifications.CONTENT_CHANGED, Notifications.TIME_UPDATE, Notifications.ENDED, Notifications.STARTED, Notifications.PLAY, Notifications.PAUSE, Notifications.SEEKING, Notifications.SEEKED, AdNotifications.AD_LOADED, AdNotifications.AD_STARTED, AdNotifications.AD_PLAY, AdNotifications.AD_PAUSE, AdNotifications.AD_TIME_REMAINING, AdNotifications.BREAK_START, AdNotifications.BREAK_END];
};


AMP.registerPlugin("omniture", "html", OmniturePlugin);
AMP.registerPlugin("omniture", "flash", OmnitureWrapper);

/**
 * The AdProxy class.
 *
 * @constructor
 * @private
 * @extends {PluginProxy}
 * @param {Object} config
 * @implements {IDataBindingContext}
*/
function AdProxy(config) {
  AdProxy.__super__.constructor.call(this, config);
  this.pods = [];
}


__extends(AdProxy, PluginProxy);


/** @static
*/
AdProxy.NAME = PluginProxy.NAME;

AdProxy.prototype.inProgress = false;

AdProxy.prototype.paused = false;

AdProxy.prototype.started = false;

AdProxy.prototype.adVO = null;

AdProxy.prototype.contextName = "ad";

AdProxy.prototype.container = null;

AdProxy.prototype.partner = null;

AdProxy.prototype.pods = null;

AdProxy.prototype.createDefaultAdVO = function() {
  return new AdVO(null, null, null, null, null, this.partner, null, null, null, null, null);
};

/**
 * Gets the context data for this proxy.
 *
 * @returns {Object} The contenxt data for this proxy
*/
AdProxy.prototype.getContextData = function() {
  return this.adVO || {};
};

/**
*/
AdProxy.prototype.setCompanions = function(value) {
  this.adVO.companions = value;
  this.sendNotification(AdNotifications.AD_COMPANION, this.adVO);
  return value;
};

AdProxy.prototype.getCompanions = function() {
  var _ref;
  return (_ref = this.adVO) != null ? _ref.companions : void 0;
};

/**
*/
AdProxy.prototype.getInProgress = function() {
  return this.inProgress;
};

AdProxy.prototype.setInProgress = function(value) {
  this.inProgress = value;
  return value;
};

/**
*/
AdProxy.prototype.getStarted = function() {
  return this.started;
};

/**
*/
AdProxy.prototype.setStarted = function(value) {
  this.started = value;
  return value;
};

/**
*/
AdProxy.prototype.getPaused = function() {
  return this.paused;
};

AdProxy.prototype.setPaused = function(value) {
  this.paused = value;
  return value;
};

AdProxy.prototype.setCues = function(value) {
  var cue, cues, _i, _len;
  cues = [];
  for (_i = 0, _len = value.length; _i < _len; _i++) {
    cue = value[_i];
    cues.push({
      startTime: cue,
      endTime: cue
    });
  }
  this.facade.player.mediaProxy.setCues(cues);
  return value;
};

/**
*/
AdProxy.prototype.play = function() {
  this.setPaused(false);
  this.sendNotification(AdNotifications.AD_PLAY, this.adVO);
};

/**
*/
AdProxy.prototype.pause = function() {
  this.setPaused(true);
  this.sendNotification(AdNotifications.AD_PAUSE, this.adVO);
};

/**
*/
AdProxy.prototype.breakStart = function() {
  this.setInProgress(true);
};

/**
*/
AdProxy.prototype.breakEnd = function() {
  this.setInProgress(false);
  this.reset();
};

/**
*/
AdProxy.prototype.error = function(err, breakEnd) {
  var msg;
  if (breakEnd == null) {
    breakEnd = true;
  }
  msg = (typeof err.getMessage === "function" ? err.getMessage() : void 0) || err.message;
  this.facade.logger.error("[AMP AD ERROR]", "" + msg + " Skipping ad content.", err);
  if (this.adVO == null) {
    this.adVO = {};
  }
  this.adVO.error = err;
  this.sendNotification(AdNotifications.AD_ERROR, this.adVO);
  if (breakEnd === true) {
    this.endBreak();
  }
};

/**
*/
AdProxy.prototype.engage = function(media) {
  if (this.getEnabled() === false) {
    return;
  }
  this.setStarted(false);
  if (this.getInProgress()) {
    this.reset();
    this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
  }
  this.engageAds();
};

/**
*/
AdProxy.prototype.engageAds = function() {
  this.facade.player.removeCommand(Notifications.START);
  this.facade.player.removeCommand(Notifications.PLAY);
  this.facade.player.removeCommand(Notifications.PAUSE);
  this.facade.player.removeCommand(Notifications.ENDED);
  this.facade.player.removeCommand(UserNotifications.PLAY);
  this.facade.player.removeCommand(UserNotifications.PAUSE);
  this.facade.player.removeCommand(UserNotifications.TOGGLE_PLAY_PAUSE);
  if (this.facade.isFullscreenDevice()) {
    this.facade.player.removeCommand(Notifications.CHANGE_DURATION);
  }
  this.facade.removeCommand(Notifications.STARTED);
  this.facade.removeCommand(Notifications.ENDED);
  this.facade.registerCommand(Notifications.START, AdStartCommand);
  this.facade.registerCommand(Notifications.PLAY, AdPlayCommand);
  this.facade.registerCommand(Notifications.PAUSE, AdPauseCommand);
  this.facade.registerCommand(UserNotifications.PLAY, AdPlayCommand);
  this.facade.registerCommand(UserNotifications.PAUSE, AdPauseCommand);
  this.facade.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, AdTogglePlayPauseCommand);
  this.facade.registerCommand(Notifications.VOLUME_CHANGE, AdVolumeChangeCommand);
  this.facade.registerCommand(Notifications.PLAY_STATE_CHANGE, AdPlayStateChangeCommand);
};

/**
*/
AdProxy.prototype.reset = function() {
  this.facade.removeCommand(Notifications.START);
  this.facade.removeCommand(Notifications.PLAY);
  this.facade.removeCommand(Notifications.PAUSE);
  this.facade.removeCommand(UserNotifications.PLAY);
  this.facade.removeCommand(UserNotifications.PAUSE);
  this.facade.removeCommand(UserNotifications.TOGGLE_PLAY_PAUSE);
  this.facade.removeCommand(Notifications.VOLUME_CHANGE);
  this.facade.removeCommand(Notifications.PLAY_STATE_CHANGE);
  this.facade.player.registerCommand(Notifications.START, StartCommand);
  this.facade.player.registerCommand(Notifications.PLAY, PlayCommand);
  this.facade.player.registerCommand(Notifications.PAUSE, PauseCommand);
  this.facade.player.registerCommand(Notifications.ENDED, EndedCommand);
  this.facade.player.registerCommand(UserNotifications.PLAY, PlayCommand);
  this.facade.player.registerCommand(UserNotifications.PAUSE, PauseCommand);
  this.facade.player.registerCommand(UserNotifications.TOGGLE_PLAY_PAUSE, TogglePlayPauseCommand);
  if (this.facade.isFullscreenDevice()) {
    this.facade.player.registerCommand(Notifications.CHANGE_DURATION, ChangeDurationCommand);
  }
  this.facade.registerCommand(Notifications.STARTED, AdContentStartedCommand);
  this.facade.registerCommand(Notifications.ENDED, AdContentEndedCommand);
};

/**
*/
AdProxy.prototype.requestAd = function() {
  this.sendNotification(AdNotifications.REQUEST, this.adVO);
};

/**
*/
AdProxy.prototype.getPodById = function(id) {
  var pod, _i, _len, _ref;
  _ref = this.pods;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    pod = _ref[_i];
    if (pod.id === id) {
      return pod;
    }
  }
};

/**
*/
AdProxy.prototype.setPodLocks = function(pods) {
  var pod, _i, _len, _ref;
  for (_i = 0, _len = pods.length; _i < _len; _i++) {
    pod = pods[_i];
    if ((_ref = this.getPodById(pod.id)) != null) {
      _ref.locked = pod.locked;
    }
  }
};

/**
*/
AdProxy.prototype.startBreak = function(adVO) {
  if (adVO != null) {
    this.adVO = adVO;
  }
  this.setStarted(true);
  this.sendNotification(AdNotifications.BREAK_START, this.adVO);
  if (this.getEnabled() === false) {
    this.endBreak();
    return false;
  }
  return true;
};

/**
*/
AdProxy.prototype.endBreak = function() {
  this.sendNotification(AdNotifications.BREAK_END, this.adVO);
};

/**
*/
AdProxy.prototype.start = function() {
  this.startBreak();
};

/**
*/
AdProxy.prototype.contentPlay = function() {
  this.facade.player.sendNotification(Notifications.PLAY, true);
};

/**
*/
AdProxy.prototype.contentPause = function() {
  var video,
    _this = this;
  video = this.facade.player.mediaElement;
  if (video.seeking === true) {
    video.once("seeked", function() {
      video.pause();
    });
  } else {
    video.pause();
  }
};

/**
*/
AdProxy.prototype.contentStarted = function() {};

/**
*/
AdProxy.prototype.contentSeek = function(time) {};

/**
*/
AdProxy.prototype.contentEnded = function() {};

/**
*/
AdProxy.prototype.setVolume = function(value) {};

/**
*/
AdProxy.prototype.getVolume = function() {};

/**
*/
AdProxy.prototype.terminateAd = function() {};

/**
*/
AdProxy.prototype.terminateAllAds = function() {};

/** 
 * The InfoPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function InfoPlugin() {
  InfoPlugin.__super__.constructor.call(this);
}


__extends(InfoPlugin, Plugin);


InfoPlugin.prototype.moduleName = "info";

/** @override
*/
InfoPlugin.prototype.createModel = function() {
  this.registerProxy(new InfoProxy(this.config));
};

/** @override
*/
/** @override
*/
InfoPlugin.prototype.createView = function() {
  this.registerMediator(new InfoMediator());
};

/** @override
*/
InfoPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE];
};


AMP.registerPlugin("info", "html", InfoPlugin);
AMP.registerPlugin("info", "external", InfoPlugin);

/**
 * @enum {string}
 * @const
 * @private
*/

var FlashAdNotifications = {
  BREAK_START: "adComponentBreakInitiated",
  BREAK_END: "adComponentBreakComplete",
  BREAK_SKIPPED: "adComponentBreakSkipped",
  AD_LOADED: "adComponentLoaded",
  AD_STARTED: "adComponentAdBegin",
  AD_TIME_UPDATE: "adComponentPlaybackProgress",
  AD_TIME_REMAINING: "adComponentTimeElapsed",
  AD_DURATION_CHANGE: "addurationchange",
  AD_ENDED: "adComponentImpressionEnd",
  COMPLETE: "adComponentAdComplete",
  AD_ERROR: "adComponentInitFailed",
  AD_PLAY: "adComponentPlaybackResumed",
  AD_PAUSE: "adComponentPlaybackPaused",
  AD_LOG: "adComponentLog",
  AD_COMPANION: "adComponentCompanion",
  AD_PLAYBACK_FAILED: "adComponentPlaybackFailed",
  AD_PLAYBACK_TERMINATED: "adComponentPlaybackTerminated",
  AD_MEDIA_LOADED: "adComponentMediaLoaded",
  AD_CLICKED: "adComponentClicked",
  AD_FIRST_QUARTILE: "adComponentFirstQuartile",
  AD_MIDPOINT: "adComponentMidpoint",
  AD_THIRD_QUARTILE: "adComponentThirdQuartile",
  AD_REQUEST: "adComponentAdsRequest",
  AD_REQUEST_COMPLETE: "adComponentAdsRequestComplete",
  AD_SKIPPED: "adComponentAdSkipped",
  AD_IMPRESSION: "adComponentImpression"
};

/** 
 * Used to trigger overlay ads for Google IMA
 * 
 * @constructor 
 * @private
*/
function IMAOverlayProxy(config) {
  IMAOverlayProxy.__super__.constructor.call(this, config);
}


__extends(IMAOverlayProxy, DataBoundConfigurationProxy);


IMAOverlayProxy.prototype.configurationName = "imaoverlay";

/** @static
*/
IMAOverlayProxy.NAME = "IMAOveralyProxy";

IMAOverlayProxy.prototype.defaults = {
  adTagUrl: null,
  duration: 15,
  interval: 30,
  delay: 30
};

IMAOverlayProxy.prototype.durationTimer = null;

IMAOverlayProxy.prototype.intervalTimer = null;

IMAOverlayProxy.prototype.delayTimer = null;

/** Stops polling and clears the ad
*/
IMAOverlayProxy.prototype.stop = function() {
  clearTimeout(this.durationTimer);
  clearTimeout(this.delayTimer);
  clearTimeout(this.intervalTimer);
};

/** Starts polling and load the first ad
*/
IMAOverlayProxy.prototype.play = function() {
  var _this = this;
  this.stop();
  this.delayTimer = setTimeout(function() {
    return _this.requestAd();
  }, this.value.delay * 1000);
};

/** Retrieves an ad image from VAST XML
*/
IMAOverlayProxy.prototype.requestAd = function() {
  var adTagUrl, xhr;
  adTagUrl = this.getValue("adTagUrl");
  if (adTagUrl != null) {
    adTagUrl = adTagUrl.replace("[timestamp]", new Date().getTime());
    adTagUrl = adTagUrl.replace("__random-number__", new Date().getTime());
  }
  xhr = Utils.get(adTagUrl, {
    withCredentials: true,
    onload: this.vastLoadHandler.bind(this),
    onerror: this.error.bind(this)
  }, false);
};

IMAOverlayProxy.prototype.vastLoadHandler = function(xhr) {
  var ad, clickThroughHref, creativeView, img, impression, xml;
  xml = xhr.target.responseXML;
  if (xml != null) {
    try {
      ad = xml.querySelector("NonLinear");
      if (ad != null) {
        impression = xml.querySelector("Impression") != null ? xml.querySelector("Impression").textContent : "";
        creativeView = xml.querySelector("Tracking[event=creativeView]") != null ? xml.querySelector("Tracking[event=creativeView]").textContent : "";
        clickThroughHref = ad.querySelector("NonLinearClickThrough") != null ? ad.querySelector("NonLinearClickThrough").textContent : "";
        img = {
          src: ad.querySelector("StaticResource").textContent,
          width: ad.getAttribute("width"),
          height: ad.getAttribute("height"),
          tracking: [impression, creativeView],
          href: clickThroughHref
        };
        this.displayAd(img);
      } else {
        this.error("No overlay was returned");
      }
    } catch (error) {
      this.error(error);
    }
  }
};

IMAOverlayProxy.prototype.error = function(error) {
  this.facade.logger.error("[AMP IMA OVERLAY ERROR]", error);
  this.stop();
};

/** Notifies the application that a new overlay is ready to display
*/
IMAOverlayProxy.prototype.displayAd = function(ad) {
  var _this = this;
  this.sendNotification(IMANotifications.ADD_OVERLAY, ad);
  this.durationTimer = setTimeout(function() {
    _this.sendNotification(IMANotifications.REMOVE_OVERLAY);
    return _this.intervalTimer = setTimeout(function() {
      return _this.requestAd();
    }, _this.value.interval * 1000);
  }, this.value.duration * 1000);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var IMANotifications = {
  INITIALIZED: "ima/initialize",
  ADD_OVERLAY: "ima/addOverlay",
  REMOVE_OVERLAY: "ima/removeOverlay"
};

/**
 * The IMAProxy class.
 *
 * @constructor
 * @private
 * @extends {AdProxy}
 * @param {Object} config
*/
function IMAProxy(config) {
  IMAProxy.__super__.constructor.call(this, config);
  this.intervals = [];
  this.loadedmetadata = this.onLoadedMetadata.bind(this);
  this.adVO = this.createDefaultAdVO();
}


__extends(IMAProxy, AdProxy);


/** @static
*/
IMAProxy.NAME = AdProxy.NAME;

IMAProxy.prototype.defaults = {
  adTagUrl: null,
  overlay: null,
  width: null,
  height: null,
  maxBitrate: -1,
  ppid: null,
  companions: null,
  logEventsEnabled: false
};

IMAProxy.prototype.partner = "ima";

IMAProxy.prototype.key = "ima";

IMAProxy.prototype.intervals = null;

IMAProxy.prototype.adDisplayContainer = null;

IMAProxy.prototype.adDisplayContainerInitialized = false;

IMAProxy.prototype.adsLoader = null;

IMAProxy.prototype.adsRenderingSettings = null;

IMAProxy.prototype.adsManagerLoaded = false;

IMAProxy.prototype.adsManager = null;

IMAProxy.prototype.cuepoints = null;

IMAProxy.prototype.adLoaded = false;

IMAProxy.prototype.playWhenLoaded = false;

IMAProxy.prototype.contentHasEnded = false;

IMAProxy.prototype.adTagUrl = null;

IMAProxy.prototype.viewMode = null;

IMAProxy.prototype.playbackCore = null;

IMAProxy.prototype.loadedmetadata = null;

/**
*/
IMAProxy.prototype.setEnabled = function(value) {
  var _ref;
  IMAProxy.__super__.setEnabled.call(this, value);
  if (value === false) {
    if ((_ref = this.adsManager) != null) {
      if (typeof _ref.destroy === "function") {
        _ref.destroy();
      }
    }
    if (this.getInProgress()) {
      this.contentPlay();
    }
  }
  return value;
};

/** @override
*/
IMAProxy.prototype.onLoadedMetadata = function(event) {
  if (this.canPlay() && this.playWhenLoaded === true) {
    this.startAd();
  }
};

/** @override
*/
IMAProxy.prototype.initialize = function() {};

/** @override
*/
IMAProxy.prototype.ready = function() {
  var isAndroidChrome, mode, userAgentMatch, _ref;
  this.viewMode = google.ima.ViewMode.NORMAL;
  window.addEventListener("resize", this.resize.bind(this));
  if (this.config.vpaidAllowed != null) {
    google.ima.settings.setVpaidAllowed(this.config.vpaidAllowed);
  }
  if ((this.config.vpaidMode != null) && ((mode = google.ima.ImaSdkSettings.VpaidMode[this.config.vpaidMode.toUpperCase()]) != null)) {
    google.ima.settings.setVpaidMode(mode);
  }
  if (this.config.disableFlashAds != null) {
    google.ima.settings.setDisableFlashAds(this.config.disableFlashAds);
  }
  this.adDisplayContainer = this.createPlugin();
  this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
  userAgentMatch = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  isAndroidChrome = userAgentMatch ? parseInt(userAgentMatch[2], 10) > 52 : false;
  if ((((_ref = Utils.getIOSversion()) != null ? _ref[0] : void 0) >= 10 || isAndroidChrome) && this.facade.player.getConfig().playsinline !== false) {
    google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
  }
  this.adsRenderingSettings = new google.ima.AdsRenderingSettings();
  this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), false);
  this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), false);
};

/** @override
*/
IMAProxy.prototype.createPlugin = function() {
  return new google.ima.AdDisplayContainer(this.facade.player.ui.ads.container);
};

/** @override
*/
IMAProxy.prototype.engage = function(override) {
  var _ref, _ref1;
  if (override == null) {
    override = true;
  }
  if (this.getEnabled() === false) {
    return;
  }
  IMAProxy.__super__.engage.call(this);
  if (this.adsManagerLoaded === true && this.contentHasEnded === false || this.contentHasEnded === true && ((_ref = this.adVO) != null ? _ref.type : void 0) === "postroll") {
    if ((_ref1 = this.adsManager) != null) {
      if (typeof _ref1.destroy === "function") {
        _ref1.destroy();
      }
    }
  }
  this.adsManagerLoaded = false;
  this.contentHasEnded = false;
  this.adsManagerLoaded = false;
  this.playWhenLoaded = false;
};

/**
*/
IMAProxy.prototype.setVolume = function(value) {
  var _ref;
  if ((_ref = this.adsManager) != null) {
    _ref.setVolume(value);
  }
  return value;
};

/**
*/
IMAProxy.prototype.getVolume = function() {
  var _ref;
  return (_ref = this.adsManager) != null ? _ref.getVolume() : void 0;
};

/** @override
*/
IMAProxy.prototype.requestAd = function() {
  var adsRequest, adsResponse, dimensions, height, settings, width, _ref, _ref1;
  IMAProxy.__super__.requestAd.call(this);
  dimensions = this.getDimensions();
  width = dimensions.clientWidth;
  height = dimensions.clientHeight;
  adsRequest = new google.ima.AdsRequest();
  this.adTagUrl = this.getValue("adTagUrl");
  adsResponse = this.getValue("adsResponse");
  if ((adsResponse != null) && adsResponse !== "") {
    adsRequest.adsResponse = Utils.read(adsResponse, null, Utils.mimeTypes.txt);
  } else {
    adsRequest.adTagUrl = this.adTagUrl;
  }
  if (!(adsRequest.adsResponse != null) && !(adsRequest.adTagUrl != null)) {
    this.onAdError("No valid adTagUrl or adsResponse provided.");
    return;
  }
  adsRequest.linearAdSlotWidth = width;
  adsRequest.linearAdSlotHeight = height;
  adsRequest.nonLinearAdSlotWidth = ((_ref = this.value.overlay) != null ? _ref.width : void 0) || width;
  adsRequest.nonLinearAdSlotHeight = ((_ref1 = this.value.overlay) != null ? _ref1.height : void 0) || height;
  settings = this.adsLoader.getSettings();
  if (this.config.ppid != null) {
    settings.setPpid(this.getValue("ppid"));
  }
  this.adsLoader.requestAds(adsRequest);
};

/** @override
*/
IMAProxy.prototype.requestOverlay = function() {
  var adsRequest, overlay;
  overlay = this.value.overlay;
  if (!(overlay != null)) {
    return;
  }
  adsRequest = new google.ima.AdsRequest();
  adsRequest.adTagUrl = overlay.adTagUrl;
  adsRequest.nonLinearAdSlotWidth = overlay.width || 300;
  adsRequest.nonLinearAdSlotHeight = overlay.height || 50;
  this.adsLoader.requestAds(adsRequest);
};

/** @override
*/
IMAProxy.prototype.start = function(load) {
  var video;
  if (load == null) {
    load = true;
  }
  if (load === true) {
    this.playbackCore = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
    video = this.getMediaElement();
    video.once("loadedmetadata", this.loadedmetadata);
    this.playbackCore.setEnabled(false);
    this.playbackCore.load();
  } else {
    this.engage();
  }
  if (IMAProxy.__super__.start.call(this) === false) {
    return false;
  }
  this.isLiveMidroll = (load === false) && (this.facade.player.retrieveProxy(MediaProxy.NAME).getTemporalType() === "live");
  if (this.adDisplayContainerInitialized !== true) {
    this.adDisplayContainer.initialize();
    this.adDisplayContainerInitialized = true;
  }
  if (this.canPlay() === true && load === true) {
    this.startAd();
  } else {
    this.playWhenLoaded = true;
    this.requestAd();
  }
};

/**
*/
IMAProxy.prototype.canPlay = function() {
  return this.adsManagerLoaded === true;
};

/**
*/
IMAProxy.prototype.startAd = function() {
  this.playWhenLoaded = false;
  try {
    if (this.viewMode == null) {
      this.viewMode = google.ima.ViewMode.NORMAL;
    }
    this.adsManager.init(this.facade.player.getViewComponent().clientWidth, this.facade.player.getViewComponent().clientHeight, this.viewMode);
    this.adsManager.start();
  } catch (adError) {
    this.error(adError);
  }
};

IMAProxy.prototype.resize = function(state, dimensions) {
  var _ref;
  if (dimensions == null) {
    dimensions = this.getDimensions();
  }
  if ((this.dimensions != null) && this.dimensions.width === dimensions.width && this.dimensions.height === dimensions.height) {
    return;
  }
  this.dimensions = dimensions;
  if (state != null) {
    this.viewMode = state === DisplayState.FULL_SCREEN ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL;
  }
  if ((_ref = this.adsManager) != null) {
    _ref.resize(this.dimensions.width, this.dimensions.height, this.viewMode);
  }
};

/**
*/
IMAProxy.prototype.onAdsManagerLoaded = function(adsManagerLoadedEvent) {
  var adEventHandler, _ref;
  this.adsRenderingSettings.bitrate = this.getValue("maxBitrate");
  this.adsRenderingSettings.autoAlign = true;
  this.adsRenderingSettings.useStyledNonLinearAds = true;
  if ((_ref = this.adsManager) != null) {
    if (typeof _ref.destroy === "function") {
      _ref.destroy();
    }
  }
  this.adsManager = adsManagerLoadedEvent.getAdsManager(this.facade.player.mediaElement, this.adsRenderingSettings);
  this.facade.player.sendNotification(AdNotifications.AD_MANAGER_LOADED, {
    "adManager": this.adsManager,
    "viewMode": google.ima.ViewMode.NORMAL,
    "adContainer": this.facade.getViewComponent()
  });
  this.adsManagerLoaded = true;
  this.cuePoints = this.adsManager.getCuePoints();
  this.setCues(this.cuePoints);
  if (this.cuePoints.indexOf(-1) !== -1) {
    this.sendNotification(Notifications.HAS_POST_CONTENT, true);
  }
  adEventHandler = this.onAdEvent.bind(this);
  this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.contentPause.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.contentPlay.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this.onAdResumed.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this.onAdPaused.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this.onAdClick.bind(this));
  this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, adEventHandler);
  this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, adEventHandler);
  if (this.getValue("logEventsEnabled") === true) {
    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, adEventHandler);
  }
  this.sendNotification(AdNotifications.REQUEST_COMPLETE, {
    pods: this.cuePoints
  });
  this.sendNotification(AdNotifications.RESPONSE, {
    pods: this.cuePoints,
    response: adsManagerLoadedEvent,
    adsManager: this.adsManager
  });
  if (this.canPlay() && this.playWhenLoaded === true) {
    this.startAd();
  }
};

/**
*/
IMAProxy.prototype.onAdClick = function(adEvent) {
  if ((adEvent != null ? adEvent.getAd().isLinear() : void 0) === false) {
    this.facade.player.sendNotification(Notifications.PAUSE);
    return;
  }
  if (!this.getPaused()) {
    this.pause();
  }
  this.sendNotification(AdNotifications.AD_CLICKED, this.adVO);
};

/**
*/
IMAProxy.prototype.onAdPaused = function(adEvent) {
  this.setPaused(true);
  this.facade.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
  this.facade.player.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
  this.facade.player.sendNotification(AdNotifications.AD_PAUSED, this.adVO);
};

/**
*/
IMAProxy.prototype.onAdResumed = function(adEvent) {
  this.setPaused(false);
  this.facade.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
};

/**
*/
IMAProxy.prototype.onAdEvent = function(adEvent) {
  var ad, companion, companions, config, pos, type, _i, _len, _ref;
  ad = adEvent.getAd();
  if (this.adVO != null) {
    if (ad != null) {
      ad.wrapperAdIds = typeof ad.getWrapperAdIds === "function" ? ad.getWrapperAdIds() : void 0;
      ad.wrapperAdSystems = typeof ad.getWrapperAdSystems === "function" ? ad.getWrapperAdSystems() : void 0;
    }
    this.adVO.metadata = ad;
  }
  switch (adEvent.type) {
    case google.ima.AdEvent.Type.IMPRESSION:
      this.sendNotification(AdNotifications.IMPRESSION, this.adVO);
      break;
    case google.ima.AdEvent.Type.LOADED:
      if (ad.isLinear()) {
        this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-overlaymode");
        pos = ad.getAdPodInfo().getPodIndex();
        type = pos === 0 ? "preroll" : pos === -1 ? "postroll" : "midroll";
        this.adVO = new AdVO(ad.getAdId(), ad.getAdId(), ad.getDuration(), pos, type, "ima", null, null, this.adTagUrl, ad, ad.getAdPodInfo().getTotalAds());
        if (!this.getInProgress() && type === "midroll" || type === "postroll") {
          this.startBreak();
          this.engageAds();
        }
        this.resize();
        this.sendNotification(AdNotifications.AD_LOADED, this.adVO);
        this.sendNotification(AdNotifications.AD_DURATION_CHANGE, this.adVO);
        this.setVolume(this.facade.player.retrieveProxy(ApplicationStateProxy.NAME).getVolume());
      } else {
        this.facade.player.sendNotification(Notifications.ADD_APPLICATION_STATE, "ad-overlaymode");
        this.contentPlay();
      }
      break;
    case google.ima.AdEvent.Type.STARTED:
      if (ad.isLinear()) {
        this.adVO.position = ad.getAdPodInfo().getAdPosition();
        this.sendNotification(AdNotifications.AD_STARTED, this.adVO);
        this.intervals.push(setInterval(this.onAdTimeUpdate.bind(this), 67));
        this.facade.player.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
        this.sendNotification(AdNotifications.AD_PLAY, this.adVO);
      }
      try {
        companions = [];
        config = (typeof this.getConfigurationData === "function" ? (_ref = this.getConfigurationData()) != null ? _ref.companions : void 0 : void 0) || [];
        for (_i = 0, _len = config.length; _i < _len; _i++) {
          companion = config[_i];
          companions = companions.concat(ad.getCompanionAds(companion.width, companion.height));
        }
        if ((companions != null ? companions.length : void 0) > 0) {
          this.setCompanions(companions);
        }
      } catch (error) {
        this.facade.logger.error("[AMP IMA ERROR]", "Could not retrieve companion ads:", error);
      }
      break;
    case google.ima.AdEvent.Type.COMPLETE:
      if (ad.isLinear()) {
        this.sendNotification(AdNotifications.AD_ENDED, this.adVO);
      }
      break;
    case google.ima.AdEvent.Type.FIRST_QUARTILE:
      this.sendNotification(AdNotifications.FIRST_QUARTILE, this.adVO);
      break;
    case google.ima.AdEvent.Type.MIDPOINT:
      this.sendNotification(AdNotifications.MIDPOINT, this.adVO);
      break;
    case google.ima.AdEvent.Type.THIRD_QUARTILE:
      this.sendNotification(AdNotifications.THIRD_QUARTILE, this.adVO);
      break;
    case google.ima.AdEvent.Type.LOG:
      this.sendNotification(AdNotifications.LOG, this.adVO);
      break;
    case google.ima.AdEvent.Type.SKIPPED:
      this.sendNotification(AdNotifications.SKIPPED, this.adVO);
      break;
    case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
      if (this.getInProgress() === true) {
        this.endBreak();
      }
  }
};

/**
*/
IMAProxy.prototype.getDimensions = function() {
  var container, _ref, _ref1;
  container = ((_ref = this.facade.player.ui) != null ? (_ref1 = _ref.ads) != null ? _ref1.container : void 0 : void 0) || this.facade.player.container;
  return {
    width: container.clientWidth,
    height: container.clientHeight
  };
};

/**
*/
IMAProxy.prototype.onAdTimeUpdate = function(adEvent) {
  var remaining, time;
  this.resize();
  remaining = Utils.clamp(this.adsManager.getRemainingTime(), 0, this.adVO.duration);
  time = this.adVO.duration - remaining;
  this.sendNotification(AdNotifications.AD_TIME_UPDATE, time);
  this.sendNotification(AdNotifications.AD_TIME_REMAINING, remaining);
};

/**
*/
IMAProxy.prototype.onAdError = function(adErrorEvent) {
  var error;
  error = (adErrorEvent != null ? typeof adErrorEvent.getError === "function" ? adErrorEvent.getError() : void 0 : void 0) || adErrorEvent;
  this.error(error);
  this.contentPlay();
};

/**
*/
IMAProxy.prototype.play = function() {
  var _ref;
  IMAProxy.__super__.play.call(this);
  try {
    if ((_ref = this.adsManager) != null) {
      _ref.resume();
    }
    this.sendNotification(AdNotifications.AD_RESUME);
  } catch (error) {
    this.facade.logger.error("[AMP IMA ERROR]", "resume", error);
  }
};

/**
*/
IMAProxy.prototype.pause = function() {
  IMAProxy.__super__.pause.call(this);
  if (this.adsManager != null) {
    try {
      this.adsManager.pause();
    } catch (error) {
      this.facade.logger.error("[AMP IMA ERROR]", "pause", error);
    }
  } else {
    this.playWhenLoaded = false;
  }
};

/**
*/
IMAProxy.prototype.clearIntervals = function() {
  var interval, _i, _len, _ref;
  _ref = this.intervals;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    interval = _ref[_i];
    clearInterval(this.intervals.pop());
  }
};

/**
*/
IMAProxy.prototype.breakEnd = function() {
  var overlayProxy;
  this.clearIntervals();
  IMAProxy.__super__.breakEnd.call(this);
  overlayProxy = this.facade.retrieveProxy(IMAOverlayProxy.NAME);
  if (overlayProxy != null) {
    overlayProxy.play();
  }
};

/**
*/
IMAProxy.prototype.setCompanions = function(value) {
  var companion, companions, _i, _len, _ref;
  companions = [];
  for (_i = 0, _len = value.length; _i < _len; _i++) {
    companion = value[_i];
    companions.push({
      data: companion.getContent(),
      type: (_ref = companion.getContentType()) != null ? _ref.toLowerCase() : void 0,
      width: companion.getWidth(),
      height: companion.getHeight(),
      metadata: companion
    });
  }
  IMAProxy.__super__.setCompanions.call(this, companions);
  return value;
};

/**
*/
IMAProxy.prototype.contentPause = function() {
  var events,
    _this = this;
  events = ["pause", "waiting", "playing", "ended", "durationchange", "error"];
  if (this.facade.player.retrieveProxy(ApplicationStateProxy.NAME).getSeeking() === false) {
    events.push("seeked");
  } else {
    this.getMediaElement().once("seeked", function() {
      _this.sendNotification(Notifications.DISABLE_VIDEO_EVENTS, ["seeked"]);
    });
  }
  this.sendNotification(Notifications.DISABLE_VIDEO_EVENTS, events);
  if (this.isLiveMidroll === true) {
    this.getMediaElement().volume = 0;
    return;
  }
  IMAProxy.__super__.contentPause.call(this);
};

/**
*/
IMAProxy.prototype.contentPlay = function() {
  var _ref, _ref1;
  if (this.getInProgress() === true) {
    this.endBreak();
  }
  this.sendNotification(Notifications.ENABLE_VIDEO_EVENTS, ["pause", "seeked", "waiting", "playing", "ended", "durationchange", "error"]);
  if (((_ref = this.adVO) != null ? _ref.type : void 0) === "postroll") {
    return;
  }
  if (this.isLiveMidroll === true) {
    this.getMediaElement().volume = this.facade.player.retrieveProxy(ApplicationStateProxy.NAME).getVolume();
    if (Utils.getDevice() === "ipad") {
      this.getMediaElement().load();
    } else {
      return;
    }
  }
  IMAProxy.__super__.contentPlay.call(this);
  if (((_ref1 = this.adVO) != null ? _ref1.type : void 0) === "midroll" && Utils.getDevice() === "desktop") {
    this.facade.player.setCurrentTime(Math.floor(this.facade.player.getCurrentTime()));
  }
};

/**
*/
IMAProxy.prototype.contentEnded = function() {
  var _ref;
  this.contentHasEnded = true;
  try {
    if ((_ref = this.adsLoader) != null) {
      if (typeof _ref.contentComplete === "function") {
        _ref.contentComplete();
      }
    }
  } catch (error) {
    this.facade.logger.error("[AMP IMA ERROR]", "contentComplete", error);
  }
};

/**
*/
IMAProxy.prototype.terminateAd = function() {
  var _ref;
  try {
    if ((_ref = this.adsManager) != null) {
      _ref.stop();
    }
  } catch (error) {
    this.facade.logger.error("[AMP IMA ERROR]", "terminateAd", error);
  }
  if (this.adVO.type === "postrol") {
    this.sendNotification(Notifications.HAS_POST_CONTENT, false);
  }
  this.endBreak();
  this.contentPlay();
};

/**
*/
IMAProxy.prototype.terminateAllAds = function() {
  var _ref;
  try {
    if ((_ref = this.adsManager) != null) {
      _ref.destroy();
    }
  } catch (error) {
    this.facade.logger.error("[AMP IMA ERROR]", "terminateAllAds", error);
  }
  this.sendNotification(Notifications.HAS_POST_CONTENT, false);
  this.endBreak();
  this.contentPlay();
};

/**
*/
IMAProxy.prototype.destroy = function() {
  var _ref;
  this.clearIntervals();
  if ((_ref = this.adsManager) != null) {
    if (typeof _ref.destroy === "function") {
      _ref.destroy();
    }
  }
};

/**
 * The IMAAddOverlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IMAAddOverlayCommand() {
  IMAAddOverlayCommand.__super__.constructor.call(this);
}


__extends(IMAAddOverlayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IMAAddOverlayCommand.prototype.execute = function(notification) {
  this.facade.sendNotification(Notifications.ADD_APPLICATION_STATE, "ad-overlay-mode");
};

/**
 * The IMARemoveOverlayCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IMARemoveOverlayCommand() {
  IMARemoveOverlayCommand.__super__.constructor.call(this);
}


__extends(IMARemoveOverlayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IMARemoveOverlayCommand.prototype.execute = function(notification) {
  var proxy;
  proxy = this.facade.retrieveProxy(IMAOverlayProxy.NAME);
  proxy.stop();
  this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-overlay-mode");
};

/**
 * The IMAOverlayMediator class.
 * 
 * @constructor
 * @private
 * @extends {OverlayMediator}
 * @param {Object} viewComponent
*/
function IMAOverlayMediator() {
  IMAOverlayMediator.__super__.constructor.call(this);
}


__extends(IMAOverlayMediator, OverlayMediator);


IMAOverlayMediator.prototype.componentName = "ad-overlay";

IMAOverlayMediator.prototype.anchor = null;

IMAOverlayMediator.prototype.image = null;

IMAOverlayMediator.prototype.tracker = null;

IMAOverlayMediator.prototype.tracker2 = null;

IMAOverlayMediator.prototype.closeButton = null;

IMAOverlayMediator.prototype.closeText = null;

/**
 * @override
*/
IMAOverlayMediator.prototype.onRegister = function() {
  var _this = this;
  IMAOverlayMediator.__super__.onRegister.call(this);
  this.anchor = this.create("ad-overlay-anchor");
  this.anchor.target = "_blank";
  this.image = this.create("ad-overlay-img", this.anchor, "img");
  this.tracker = this.create();
  this.tracker.width = 0;
  this.tracker.height = 0;
  this.tracker2 = this.create(null, this, "img");
  this.tracker2.width = 0;
  this.tracker2.height = 0;
  this.closeButton = this.create("ad-close-button", this.anchor);
  this.closeButton.onclick = function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(IMANotifications.REMOVE_OVERLAY);
    return false;
  };
  this.closeText = this.createText("ad-close-text", "x", this.closeButton);
};

/**
 * @override
*/
IMAOverlayMediator.prototype.listNotificationInterests = function() {
  return [IMANotifications.ADD_OVERLAY, IMANotifications.REMOVE_OVERLAY];
};

/**
 * @override
*/
IMAOverlayMediator.prototype.handleNotification = function(notification) {
  var ad;
  switch (notification.getName()) {
    case IMANotifications.ADD_OVERLAY:
      ad = notification.getBody();
      this.image.src = ad.src;
      this.anchor.href = ad.href;
      this.tracker.src = ad.tracking[0];
      this.tracker2.src = ad.tracking[1];
  }
};

/**
 * The IMAReadyCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IMAReadyCommand() {
  IMAReadyCommand.__super__.constructor.call(this);
}


__extends(IMAReadyCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IMAReadyCommand.prototype.execute = function(notification) {
  this.facade.retrieveProxy(IMAProxy.NAME).ready();
};

/**
 * The IMADisplayStateChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IMADisplayStateChangeCommand() {
  IMADisplayStateChangeCommand.__super__.constructor.call(this);
}


__extends(IMADisplayStateChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IMADisplayStateChangeCommand.prototype.execute = function(notification) {
  this.facade.retrieveProxy(IMAProxy.NAME).resize(notification.getBody());
};

/**
 * The IMAActiveStateChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function IMAActiveStateChangeCommand() {
  IMAActiveStateChangeCommand.__super__.constructor.call(this);
}


__extends(IMAActiveStateChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
IMAActiveStateChangeCommand.prototype.execute = function(notification) {
  this.facade.retrieveProxy(IMAProxy.NAME).resize(notification.getBody());
};

/**
 * The IMAFullscreenProxy class.
 *
 * @constructor
 * @private
 * @extends {IMAProxy}
 * @param   {Object}    config  The configuration object.
*/
function IMAFullscreenProxy(config) {
  IMAFullscreenProxy.__super__.constructor.call(this, config);
}


__extends(IMAFullscreenProxy, IMAProxy);


/** @static
*/
IMAFullscreenProxy.NAME = IMAProxy.NAME;

/**
*/
IMAFullscreenProxy.prototype.createPlugin = function() {
  var container, _ref, _ref1;
  container = this.facade.player.ui.ads.container;
  if (Utils.isIPhone() && (((_ref = Utils.getIOSversion()) != null ? _ref[0] : void 0) < 10)) {
    return new google.ima.AdDisplayContainer(container, this.facade.player.getMediaElement(), container);
  }
  if (((_ref1 = Utils.getIOSversion()) != null ? _ref1[0] : void 0) >= 10) {
    this.facade.player.getMediaElement().playsInline = this.facade.player.getConfig().playsinline != null ? this.facade.player.getConfig().playsinline : true;
  }
  return new google.ima.AdDisplayContainer(container, this.facade.player.getMediaElement());
};

/** @override
*/
IMAFullscreenProxy.prototype.engage = function(media) {
  IMAFullscreenProxy.__super__.engage.call(this, media);
  this.sendNotification(Notifications.DISABLE_VIDEO_EVENTS, ["paused", "ended", "durationchange", "error"]);
};

/** @override
*/
IMAFullscreenProxy.prototype.reset = function(media) {
  IMAFullscreenProxy.__super__.reset.call(this, media);
  this.sendNotification(Notifications.ENABLE_VIDEO_EVENTS, ["paused", "ended", "durationchange", "error"]);
};

/** @override
*/
IMAFullscreenProxy.prototype.breakStart = function() {
  this.playbackCore = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  this.playbackCore.setEnabled(false);
  this.setInProgress(true);
};

/** @override
*/
IMAFullscreenProxy.prototype.breakEnd = function() {
  IMAFullscreenProxy.__super__.breakEnd.call(this);
  this.playbackCore.setEnabled(true);
};

/**
 * @constructor
 * @private
*/
function AdWrapper(player, init) {
  AdWrapper.__super__.constructor.call(this, player, init);
  Object.defineProperties(this, {
    enabled: {
      get: this.getEnabled,
      set: this.setEnabled,
      enumerable: true,
      configurable: false
    },
    inProgress: {
      get: this.getInProgress,
      enumerable: true,
      configurable: false
    },
    started: {
      get: this.getStarted,
      enumerable: true,
      configurable: false
    },
    paused: {
      get: this.getPaused,
      enumerable: true,
      configurable: false
    },
    companions: {
      get: this.getCompanions,
      enumerable: true,
      configurable: false
    },
    currentAd: {
      get: this.getCurrentAd,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(AdWrapper, PluginWrapper);


AdWrapper.NAME = "AdWrapper";

AdWrapper.prototype.enabled = true;

AdWrapper.prototype.paused = false;

AdWrapper.prototype.started = false;

AdWrapper.prototype.adVO = null;

AdWrapper.prototype.partner = null;

/**
*/
AdWrapper.prototype.getFeatureName = function() {
  return "ads";
};

AdWrapper.prototype.getInProgress = function() {
  return this.player.mediaElement.getPlayerProperty("adInProgress");
};

AdWrapper.prototype.getStarted = function() {
  return this.started;
};

AdWrapper.prototype.getPaused = function() {
  return this.paused;
};

AdWrapper.prototype.getCompanions = function() {
  var _ref;
  return (_ref = this.adVO) != null ? _ref.companions : void 0;
};

AdWrapper.prototype.setEnabled = function(value) {
  this.enabled = value;
  this.player.mediaElement.setPlayerProperty("adsEnabled", value);
  return value;
};

AdWrapper.prototype.getEnabled = function() {
  return this.enabled;
};

AdWrapper.prototype.getCurrentAd = function() {
  return this.adVO;
};

AdWrapper.prototype.enable = function() {
  this.setEnabled(true);
};

AdWrapper.prototype.disable = function() {
  this.setEnabled(false);
};

/**
*/
AdWrapper.prototype.createFlashVars = function(flashvars) {
  flashvars.core_ads_enabled = true;
  return flashvars;
};

/**
*/
AdWrapper.prototype.listNotificationInterests = function() {
  var key, value;
  return AdWrapper.__super__.listNotificationInterests.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in FlashAdNotifications) {
      value = FlashAdNotifications[key];
      _results.push(value);
    }
    return _results;
  })());
};

/** @override
*/
AdWrapper.prototype.handleNotification = function(notification) {
  var body, cuepoints, cues, event, name, pods, remaining, scene, target, type, _i, _len, _ref,
    _this = this;
  AdWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  this.adVO = this.createAdVO(body);
  target = this;
  switch (name) {
    case FlashAdNotifications.BREAK_START:
      type = AdNotifications.BREAK_START;
      this.facade.setPlayState("playing");
      if (((_ref = body.cuePoints) != null ? _ref.length : void 0) > 0) {
        cuepoints = body.cuePoints.map(function(cue) {
          var start;
          start = !isNaN(cue.sceneStartSeconds) ? cue.sceneStartSeconds : cue.sceneEndSeconds;
          return {
            startTime: start,
            endTime: cue.sceneEndSeconds
          };
        });
        this.facade.setCues(cuepoints);
      }
      break;
    case FlashAdNotifications.BREAK_END:
      type = AdNotifications.BREAK_END;
      break;
    case FlashAdNotifications.BREAK_SKIPPED:
      type = AdNotifications.BREAK_SKIPPED;
      break;
    case FlashAdNotifications.AD_MEDIA_LOADED:
      type = AdNotifications.AD_LOADED;
      this.start = false;
      target.dispatchEvent(new Event(AdNotifications.AD_DURATION_CHANGE.replace(/^ads/, ""), this.adVO));
      break;
    case FlashAdNotifications.AD_STARTED:
      type = AdNotifications.AD_STARTED;
      this.started = true;
      this.sendNotification(Notifications.ADD_APPLICATION_STATE, "ad-mode");
      break;
    case FlashAdNotifications.AD_TIME_UPDATE:
      type = AdNotifications.AD_TIME_UPDATE;
      remaining = body.duration - body.currentTime;
      target.dispatchEvent(new Event(AdNotifications.AD_TIME_REMAINING.replace(/^ads/, ""), remaining));
      body = body.currentTime;
      break;
    case FlashAdNotifications.AD_TIME_REMAINING:
      type = AdNotifications.AD_TIME_REMAINING;
      body = body.timeElapsed;
      break;
    case FlashAdNotifications.AD_ERROR:
    case FlashAdNotifications.AD_PLAYBACK_FAILED:
      type = AdNotifications.AD_ERROR;
      this.start = false;
      this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
      break;
    case FlashAdNotifications.COMPLETE:
      type = AdNotifications.COMPLETE;
      break;
    case FlashAdNotifications.AD_ENDED:
    case FlashAdNotifications.AD_PLAYBACK_TERMINATED:
      type = AdNotifications.AD_ENDED;
      this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "ad-mode");
      break;
    case FlashAdNotifications.AD_CLICKED:
      type = AdNotifications.AD_CLICKED;
      break;
    case FlashAdNotifications.AD_COMPANION:
      type = AdNotifications.AD_COMPANION;
      if ((this.adVO != null) && (body != null)) {
        this.adVO.companions = body;
      }
      break;
    case FlashAdNotifications.AD_PAUSE:
      type = AdNotifications.AD_PAUSE;
      target = this.player;
      this.paused = true;
      this.player.setPlayState("paused");
      break;
    case FlashAdNotifications.AD_PLAY:
      type = AdNotifications.AD_PLAY;
      this.paused = false;
      this.player.setPlayState("playing");
      break;
    case FlashAdNotifications.AD_LOG:
      type = AdNotifications.AD_LOG;
      break;
    case FlashAdNotifications.AD_FIRST_QUARTILE:
      type = AdNotifications.FIRST_QUARTILE;
      break;
    case FlashAdNotifications.AD_MIDPOINT:
      type = AdNotifications.MIDPOINT;
      break;
    case FlashAdNotifications.AD_THIRD_QUARTILE:
      type = AdNotifications.THIRD_QUARTILE;
      break;
    case FlashAdNotifications.AD_REQUEST:
      type = AdNotifications.REQUEST;
      break;
    case FlashAdNotifications.AD_REQUEST_COMPLETE:
      type = AdNotifications.REQUEST_COMPLETE;
      pods = [];
      cues = body.cuePoints || [];
      for (_i = 0, _len = cues.length; _i < _len; _i++) {
        scene = cues[_i];
        pods.push(new AdVO(scene.sceneId, scene.sceneTitle, scene.sceneDuration, scene.scenePodIndex, scene.scenePodPosition, this.partner, null, null, null, {}, scene.sceneSubCount, scene.sceneEndSeconds));
      }
      this.adVO = {
        pods: pods
      };
      event = new Event("response", this.adVO);
      event.player = this.player;
      target.dispatchEvent(event);
      break;
    case FlashAdNotifications.AD_SKIPPED:
      type = AdNotifications.SKIPPED;
      break;
    case FlashAdNotifications.AD_IMPRESSION:
      type = AdNotifications.IMPRESSION;
  }
  if (type != null) {
    this.sendNotification(type, this.adVO);
    if (type === AdNotifications.AD_TIME_REMAINING || type === AdNotifications.AD_TIME_UPDATE) {
      event = new Event(type.replace(/^ads/, ""), body);
    } else {
      event = new Event(type.replace(/^ads/, ""), this.adVO);
    }
    event.player = this.player;
    target.dispatchEvent(event);
  }
};

/**
*/
AdWrapper.prototype.createAdVO = function(ad) {
  if (!(ad != null)) {
    return null;
  }
  return new AdVO(ad.id, ad.title, ad.duration, ad.adIndex, ad.podPosition, ad.adPlatform, null, null, ad.requestURL, ad.metadata, ad.totalAds, ad.currentTime);
};

/**
 * @expose
*/
AdWrapper.prototype.setPodLocks = function(pods) {
  var pod, scenes, _i, _len;
  scenes = [];
  for (_i = 0, _len = pods.length; _i < _len; _i++) {
    pod = pods[_i];
    scenes.push({
      sceneId: pod.id,
      sceneLocked: pod.locked,
      sceneTitle: pod.title,
      sceneStartSeconds: pod.time,
      sceneEndSeconds: pod.duration + pod.time,
      scenePodIndex: pod.position,
      scenePodPosition: pod.type
    });
  }
  this.player.mediaElement.setAdPodLocks(scenes);
};

/**
 * @expose
*/
AdWrapper.prototype.terminateAd = function() {
  this.player.mediaElement.terminateAd();
};

/**
 * @expose
*/
AdWrapper.prototype.terminateAllAds = function() {
  this.player.mediaElement.terminateAllAds();
};

/**
 * @expose
*/
AdWrapper.prototype.requestAd = function() {
  this.player.mediaElement.triggerAd();
};

function IMAWrapper() {
  return IMAWrapper.__super__.constructor.apply(this, arguments);
}


__extends(IMAWrapper, AdWrapper);


IMAWrapper.NAME = "IMAWrapper";

IMAWrapper.prototype.partner = "ima";

IMAWrapper.prototype.flashPlugins = [
  {
    id: "GoogleIMAPlugin",
    src: '#{paths.resources}plugins/GoogleIMAPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "GoogleIMAPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "IMAOverlayAdPlugin",
    src: '#{paths.resources}plugins/IMAOverlayAdPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "IMAOverlayAdPlugin",
    type: "application/x-shockwave-flash"
  }, {
    id: "AdOptionsPlugin",
    src: '#{paths.resources}plugins/AdOptionsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "AdOptionsPlugin",
    type: "application/x-shockwave-flash"
  }
];

/**
*/
IMAWrapper.prototype.createXML = function(xml) {
  var admedia, application, companion, companions, ids, overlay, prop, props, vendor, _i, _j, _k, _len, _len1, _len2, _ref;
  application = xml.firstChild;
  admedia = xml.getElementsByTagName("admedia")[0];
  if (!(admedia != null)) {
    admedia = xml.createElement("admedia");
    application.appendChild(admedia);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "dfp");
  admedia.appendChild(vendor);
  props = [
    {
      value: this.config.adTagUrl,
      key: "DFP_AD_TAG_URL"
    }, {
      value: this.config.maxBitrate,
      key: "DFP_MAX_BITRATE"
    }, {
      value: this.config.sceneMarkers,
      key: "displaySceneMarkers"
    }, {
      value: this.config.ppid,
      key: "DFP_PPID"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (prop.value != null) {
      this.createProperty(xml, prop.key, prop.value, vendor);
    }
  }
  if (this.config.position != null) {
    vendor.setAttribute("position", this.config.position);
  }
  if (this.config.params != null) {
    if (this.config.params.adTag != null) {
      this.createProperty(xml, "DFP_AD_TAG_PARAMS", this.config.params.adTag, vendor);
    }
    if (this.config.params.manual != null) {
      this.createProperty(xml, "DFP_MANUAL_PARAMS", this.config.params.manual, vendor);
    }
  }
  if (this.config.companions != null) {
    companions = [];
    ids = [];
    _ref = this.config.companions;
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      companion = _ref[_j];
      companions.push(companion.width + "x" + companion.height);
      ids.push(companion.id);
    }
    this.createProperty(xml, "DFP_SIZE", companions.join(","), vendor);
    this.createProperty(xml, "COMPANION_ID", ids.join(","), vendor);
  }
  if (this.config.disableCompanionAds != null) {
    this.createProperty(xml, "disableCompanionAds", this.config.disableCompanionAds, vendor);
  }
  if (this.config.overlay != null) {
    if (this.config.overlay.enabled === true) {
      overlay = xml.createElement("overlay");
      admedia.appendChild(overlay);
    }
    props = [
      {
        value: "dfp",
        key: "OVERLAY_AD_PARTNER"
      }, {
        value: this.config.overlay.adTagUrl,
        key: "OVERLAY_AD_BASE_URL"
      }, {
        value: this.config.overlay.delay,
        key: "OVERLAY_AD_DELAY"
      }, {
        value: this.config.overlay.interval,
        key: "OVERLAY_AD_INTERVAL"
      }, {
        value: this.config.overlay.duration,
        key: "OVERLAY_AD_DURATION"
      }, {
        value: "" + this.config.overlay.width + "x" + this.config.overlay.height,
        key: "OVERLAY_AD_SIZE"
      }
    ];
    for (_k = 0, _len2 = props.length; _k < _len2; _k++) {
      prop = props[_k];
      if (prop.value != null) {
        this.createProperty(xml, prop.key, prop.value, overlay);
      }
    }
  }
  return xml;
};

/**
 * @enum {string}
 * @const
 * @private
*/

var StatsNotifications = {
  VISIBILITY_CHANGE: "statsvisibilitychange",
  BITRATES_UPDATE: "bitratesUpdate"
};

/**
 * The AdPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Feature}
*/
function AdPlugin() {
  AdPlugin.__super__.constructor.call(this);
  Object.defineProperties(this, {
    enabled: {
      get: this.getEnabled,
      set: this.setEnabled,
      enumerable: true,
      configurable: false
    },
    inProgress: {
      get: this.getInProgress,
      enumerable: true,
      configurable: false
    },
    started: {
      get: this.getStarted,
      enumerable: true,
      configurable: false
    },
    paused: {
      get: this.getPaused,
      enumerable: true,
      configurable: false
    },
    companions: {
      get: this.getCompanions,
      enumerable: true,
      configurable: false
    },
    currentAd: {
      get: this.getCurrentAd,
      enumerable: true,
      configurable: false
    }
  });
}


__extends(AdPlugin, Feature);


AdPlugin.NAME = "AdPlugin";

AdPlugin.prototype.container = null;

AdPlugin.prototype.featureName = "ads";

/** @override
*/
AdPlugin.prototype.createModel = function() {
  this.proxy = this.isFullscreenDevice() ? this.createFullscreenProxy() : this.createProxy();
  this.registerProxy(this.proxy);
};

/** @override
*/
AdPlugin.prototype.createController = function() {
  AdPlugin.__super__.createController.call(this);
  this.registerCommand(Notifications.MEDIA_CHANGE, AdMediaChangeCommand);
  this.registerCommand(AdNotifications.BREAK_START, AdBreakStartCommand);
  this.registerCommand(AdNotifications.AD_LOADED, AdLoadedCommand);
  this.registerCommand(AdNotifications.BREAK_END, AdBreakEndCommand);
  this.registerCommand(UserNotifications.SEEKED, AdSeekCommand);
  this.registerCommand(AdNotifications.AD_CONTAINER_CREATED, AdContainerCreatedCommand);
  this.registerCommand(Notifications.REPLAY, AdReplayCommand);
  this.registerCommand(AdNotifications.AD_STARTED, PluginEventCommand);
  this.registerCommand(AdNotifications.SKIPPED, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_MANAGER_LOADED, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_TIME_UPDATE, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_TIME_REMAINING, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_DURATION_CHANGE, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_ENDED, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_ERROR, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_COMPANION, PluginEventCommand);
  this.registerCommand(AdNotifications.FIRST_QUARTILE, PluginEventCommand);
  this.registerCommand(AdNotifications.MIDPOINT, PluginEventCommand);
  this.registerCommand(AdNotifications.THIRD_QUARTILE, PluginEventCommand);
  this.registerCommand(AdNotifications.COMPLETE, PluginEventCommand);
  this.registerCommand(AdNotifications.LOG, PluginEventCommand);
  this.registerCommand(AdNotifications.REQUEST, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_RESUME, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_PLAY, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_PAUSE, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_PAUSED, PluginEventCommand);
  this.registerCommand(AdNotifications.IMPRESSION, PluginEventCommand);
  this.registerCommand(AdNotifications.AD_CLICKED, PluginEventCommand);
  this.registerCommand(AdNotifications.REQUEST_COMPLETE, PluginEventCommand);
  this.registerCommand(AdNotifications.RESPONSE, PluginEventCommand);
  this.registerCommand(AdNotifications.BREAK_SKIPPED, PluginEventCommand);
};

AdPlugin.prototype.isFullscreenDevice = function() {
  return Utils.isFullscreenDevice();
};

AdPlugin.prototype.createProxy = function() {};

AdPlugin.prototype.createFullscreenProxy = function() {};

/**
*/
AdPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.MEDIA_CHANGE, Notifications.REPLAY, Notifications.PLAY, Notifications.PAUSE, Notifications.PAUSED, Notifications.START, Notifications.STARTED, Notifications.ENDED, Notifications.READY, Notifications.VOLUME_CHANGE, Notifications.FULL_SCREEN_CHANGE, Notifications.CHANGE_ACTIVE_STATE, Notifications.PLAY_STATE_CHANGE, UserNotifications.PLAY, UserNotifications.PAUSE, UserNotifications.SEEKED, UserNotifications.TOGGLE_PLAY_PAUSE];
};

/**
*/
AdPlugin.prototype.listNotificationPublications = function() {
  var key, value;
  return AdPlugin.__super__.listNotificationPublications.call(this).concat((function() {
    var _results;
    _results = [];
    for (key in AdNotifications) {
      value = AdNotifications[key];
      _results.push(value);
    }
    return _results;
  })()).concat([Notifications.PLAY_REQUEST, Notifications.UPDATE_DATA_BINDINGS, Notifications.DISPLAY_TIME, Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_VIDEO_EVENTS, Notifications.DISABLE_VIDEO_EVENTS, Notifications.HAS_POST_CONTENT, Notifications.MEDIA_SEQUENCE_ENDED, Notifications.CHANGE_PLAY_STATE]);
};

/**
 * @param {boolean} value The enabled flag.
 * @expose
*/
AdPlugin.prototype.setEnabled = function(value) {
  this.proxy.setEnabled(value);
};

/**
 * @return {boolean} The enabled flag.
 * @expose
*/
AdPlugin.prototype.getEnabled = function() {
  return this.proxy.getEnabled();
};

/**
 * @return {boolean} The in progress flag.
 * @expose
*/
AdPlugin.prototype.getInProgress = function() {
  return this.proxy.getInProgress();
};

/**
 * @return {boolean} The started flag.
 * @expose
*/
AdPlugin.prototype.getStarted = function() {
  return this.proxy.getStarted();
};

/**
 * @return {boolean} The paused flag.
 * @expose
*/
AdPlugin.prototype.getPaused = function() {
  return this.proxy.getPaused();
};

/**
 * @return {Array.<Object>} The list of companion ads.
 * @expose
*/
AdPlugin.prototype.getCompanions = function() {
  return this.proxy.getCompanions();
};

/**
 * @return {Array.<Object>} The list of companion ads.
 * @expose
*/
AdPlugin.prototype.getCurrentAd = function() {
  return this.proxy.adVO;
};

/**
 * @expose
*/
AdPlugin.prototype.setPodLocks = function(pods) {
  this.proxy.setPodLocks(pods);
};

/**
 * @expose
*/
AdPlugin.prototype.terminateAd = function() {
  this.proxy.terminateAd();
};

/**
 * @expose
*/
AdPlugin.prototype.terminateAllAds = function() {
  this.proxy.terminateAllAds();
};

/**
 * @expose
*/
AdPlugin.prototype.requestAd = function() {
  this.proxy.start(false);
};

/** 
 * @constructor 
 * @private
*/
function StatsProxy(config) {
  StatsProxy.__super__.constructor.call(this, config);
}


__extends(StatsProxy, ModuleProxy);


/** @static
*/
StatsProxy.NAME = ModuleProxy.NAME;

StatsProxy.prototype.defaults = {
  url: null
};

StatsProxy.prototype.hidden = true;

StatsProxy.prototype.getURL = function() {
  return this.data.url;
};

StatsProxy.prototype.setURL = function(value) {
  return this.data.url = value;
};

StatsProxy.prototype.getHidden = function() {
  return this.hidden;
};

StatsProxy.prototype.setHidden = function(value) {
  return this.hidden = value;
};

StatsProxy.prototype.invoke = function() {
  var xhr,
    _this = this;
  if (this.data.url != null) {
    return xhr = Utils.get(this.data.url, {
      onload: function() {
        if (xhr.response != null) {
          _this.sendNotification(StatsNotifications.BITRATES_UPDATE, xhr.response);
        }
      },
      onerror: function(error) {
        return _this.sendNotification(StatsNotifications.BITRATES_UPDATE, null);
      }
    });
  }
};

/**
 * The StatsVisibilityChangeCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function StatsVisibilityChangeCommand() {
  StatsVisibilityChangeCommand.__super__.constructor.call(this);
}


__extends(StatsVisibilityChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
StatsVisibilityChangeCommand.prototype.execute = function(notification) {
  var statsProxy;
  statsProxy = this.facade.retrieveProxy(StatsProxy.NAME);
  statsProxy.setHidden(notification.getBody());
  statsProxy.setURL("" + (this.facade.player.getSrc()));
  if (notification.getBody() === false) {
    statsProxy.invoke();
  }
};

/**
 * The StatsMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function StatsMediator() {
  StatsMediator.__super__.constructor.call(this);
}


__extends(StatsMediator, PluginMediator);


/**
 * Stats Mediator
 * 
 * @static
 * @type {string}
*/
StatsMediator.prototype.componentName = "stats";

StatsMediator.prototype.container = null;

StatsMediator.prototype.statsText = null;

StatsMediator.prototype.statsButton = null;

StatsMediator.prototype.bitrateText = null;

StatsMediator.prototype.bitrateArr = null;

/**
 * @override
*/
StatsMediator.prototype.onRegister = function() {
  var _this = this;
  StatsMediator.__super__.onRegister.call(this);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "stats-enabled");
  this.classList.add("hidden");
  this.statsFormat = this.create("stats-text");
  this.statsQuality = this.create("stats-text");
  this.statsBitRate = this.create("stats-text");
  this.statsPlayBack = this.create("stats-text");
  this.statsAnalytics = this.create("stats-text");
  this.statsButton = this.create("stats-button", false);
  EventHandler.create(this.statsButton, EventHandler.CLICK, function(event) {
    event.stopImmediatePropagation();
    _this.sendNotification(StatsNotifications.VISIBILITY_CHANGE, !_this.facade.getHidden());
    return false;
  });
  this.sendNotification(Notifications.ADD_CONTROL, this.statsButton);
};

/**
 * @override
*/
StatsMediator.prototype.listNotificationInterests = function() {
  return [StatsNotifications.VISIBILITY_CHANGE, Notifications.PLAYING, Notifications.TIME_UPDATE];
};

/**
 * @override
*/
StatsMediator.prototype.handleNotification = function(notification) {
  var body, levels, name;
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case StatsNotifications.VISIBILITY_CHANGE:
      if (this.plugin.getHidden()) {
        this.classList.add("hidden");
      } else {
        this.classList.remove("hidden");
        this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p><p>Loading...</p>";
        this.renderStats();
      }
      break;
    case Notifications.TIME_UPDATE:
      this.renderQuality();
      break;
    case Notifications.PLAYING:
      levels = this.facade.player.getQualityLevels();
      if ((levels != null ? levels.length : void 0) > 0) {
        this.constructBitrateText(levels);
      } else {
        this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p><p>Not Available</p>";
      }
  }
};

/*  Render Stats UI
*/
StatsMediator.prototype.renderQuality = function() {
  var quality;
  quality = this.facade.player.getQuality();
  if (this.quality === quality) {
    return;
  }
  this.statsQuality.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Quality</b></p><p>" + this.createBitrateText(this.facade.player.getQualityLevels()[quality], quality) + "</p>";
};

/*  Render Stats UI
*/
StatsMediator.prototype.renderStats = function() {
  var analyticsVal, device, formatVal, isDash, playbackVal, player, urlVal, _ref;
  try {
    player = this.facade.player;
    formatVal = player.getMedia() === void 0 ? "Not Available" : player.getMedia().type;
    urlVal = player.getSrc() === "" || player.getSrc() === null ? "Not Available" : player.getSrc();
    device = Utils.getDevice();
    if (device == null) {
      device = "";
    }
    playbackVal = this.facade.player.getConfig().mode !== "" && this.facade.player.getConfig().mode !== null && this.facade.player.getConfig().mode.indexOf("html") !== -1 ? this.facade.player.getVersion() + ", HTML5 Video: " + device : "Not Available";
    isDash = (_ref = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore()) != null ? _ref.proxyName.indexOf("dash") : void 0;
    if (isDash > -1) {
      playbackVal += ", dash.js";
    }
    analyticsVal = this.facade.player.getConfig().mediaanalytics === void 0 || this.facade.player.getConfig().mediaanalytics.config === "" || this.facade.player.getConfig().mediaanalytics.config === null ? "Not Available" : this.facade.player.getConfig().mediaanalytics.config;
    this.statsFormat.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Stream</b></p><p>Format: " + formatVal + "</p><p>URL: " + urlVal + "</p>";
    this.statsPlayBack.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Playback</b></p>" + playbackVal;
    this.statsAnalytics.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Analytics</b></p>" + analyticsVal;
  } catch (error) {
    this.facade.logger.error("[AMP Stats Render Error]:", error);
  }
};

/*  Format Bitrate HTML Text
*/
StatsMediator.prototype.constructBitrateText = function(bitrateArr) {
  var index, item, _i, _len, _ref;
  this.bitrateArr = bitrateArr;
  this.bitrateText = '';
  this.bitrateArr.sort(function(a, b) {
    var aBitrate, bBitrate;
    aBitrate = parseInt(a.bitrate);
    bBitrate = parseInt(b.bitrate);
    if (aBitrate < bBitrate) {
      return -1;
    } else if (aBitrate > bBitrate) {
      return 1;
    } else {
      return 0;
    }
  });
  _ref = this.bitrateArr;
  for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
    item = _ref[index];
    this.bitrateText += this.createBitrateText(item, index);
  }
  if (this.bitrateText === "") {
    this.bitrateText = "<p>Not Available</p>";
  }
  this.statsBitRate.innerHTML = "<p><b class='" + this.classList.prefix + "stats-header'>Adaptive Bitrate Renditions</b></p>" + this.bitrateText;
};

/**
*/
StatsMediator.prototype.createBitrateText = function(item, index) {
  return "<p>" + (index + 1) + ". " + ((item.bitrate / 1000).toFixed(0)) + " kbps " + item.width + "x" + item.height + "</p>";
};

/**
 * @enum {string}
 * @const
 * @private
*/

var MediaAnalyticsNotifications = {
  SET_DIMENSIONS: "mediaanalytics:setDimensions"
};

/**
 * The AISLaunchIDPLoginCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AISLaunchIDPLoginCommand() {
  AISLaunchIDPLoginCommand.__super__.constructor.call(this);
}


__extends(AISLaunchIDPLoginCommand, PluginEventCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISLaunchIDPLoginCommand.prototype.execute = function(notification) {
  AISLaunchIDPLoginCommand.__super__.execute.call(this, notification);
  this.proxy.launchIDPLogin(notification.getBody());
};

/**
 * The AISChooserMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
*/
function AISChooserMediator(parent) {
  AISChooserMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(AISChooserMediator, ComponentMediator);


AISChooserMediator.prototype.componentName = "ais-chooser";

AISChooserMediator.prototype.menu = null;

AISChooserMediator.prototype.label = null;

AISChooserMediator.prototype.grid = null;

AISChooserMediator.prototype.select = null;

AISChooserMediator.prototype.login = null;

AISChooserMediator.prototype.title = null;

/**
 * @override
*/
AISChooserMediator.prototype.onRegister = function() {
  var _this = this;
  AISChooserMediator.__super__.onRegister.call(this);
  this.classList.add("hidden");
  this.title = this.createText("ais-chooser-title", "Choose your provider");
  this.grid = this.create("ais-chooser-grid");
  this.menu = this.create("ais-chooser-menu");
  this.label = this.createText("ais-chooser-label", "Providers: ", this.menu);
  this.select = this.create("ais-chooser-select", this.menu, "select");
  this.login = this.create("ais-chooser-login", false, "input");
  this.login.type = "button";
  this.login.value = "Login";
  EventHandler.create(this.login, EventHandler.CLICK, function(event) {
    var idpID;
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
    idpID = _this.select.options[_this.select.selectedIndex].value;
    _this.sendNotification(AISNotifications.LAUNCH_IDP_LOGIN, idpID);
    return false;
  });
  this.menu.appendChild(this.login);
};

/**
 * @override
*/
AISChooserMediator.prototype.listNotificationInterests = function() {
  return [AISNotifications.CHOOSE_AUTH_PROVIDER, AISNotifications.AUTHENTICATING];
};

/**
 * @override
*/
AISChooserMediator.prototype.handleNotification = function(notification) {
  var baseURL, div, featuredGroup, footprints, group, groups, idp, idps, img, index, key, logos, member, option, options, proxy, resp, span, src, value, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1,
    _this = this;
  switch (notification.getName()) {
    case AISNotifications.CHOOSE_AUTH_PROVIDER:
      resp = notification.getBody();
      idps = resp.possible_idps;
      footprints = resp.footprints || [];
      groups = resp.grouped_idps || [];
      proxy = this.facade.retrieveProxy(ModuleProxy.NAME);
      logos = proxy.value.logos;
      baseURL = logos != null ? logos.base : void 0;
      this.grid.innerHTML = "";
      if ((groups != null) && ((logos != null ? logos.group : void 0) != null)) {
        for (_i = 0, _len = groups.length; _i < _len; _i++) {
          group = groups[_i];
          if (!(group.name === logos.group)) {
            continue;
          }
          featuredGroup = group;
          break;
        }
        if (featuredGroup != null) {
          _ref = featuredGroup.members;
          for (index = _j = 0, _len1 = _ref.length; _j < _len1; index = ++_j) {
            member = _ref[index];
            idp = idps[member];
            div = this.create(["ais-chooser-grid-item", "ais-chooser-grid-index-" + (index + 1)], this.grid);
            if (div.dataset == null) {
              div.dataset = {};
            }
            div.dataset.key = member;
            div.onclick = function(event) {
              var idpID, target;
              if (typeof event.stopImmediatePropagation === "function") {
                event.stopImmediatePropagation();
              }
              target = (event.currentTarget != null) ? event.currentTarget : event.srcElement;
              idpID = target.dataset.key;
              _this.sendNotification(AISNotifications.LAUNCH_IDP_LOGIN, idpID);
              return false;
            };
            if (((_ref1 = idps[member].logos) != null ? _ref1[logos.key] : void 0) != null) {
              img = this.create("ais-chooser-grid-cell-img", div, "img");
              img.alt = idp.display_name;
              src = idp.logos[logos.key];
              if (src.indexOf("http") === -1) {
                src = baseURL + src;
              }
              img.src = src;
              if (img.dataset == null) {
                img.dataset = {};
              }
              img.dataset.key = member;
              span = this.create("ais-chooser-grid-cell-label", div, "span");
              span.innerHTML = idp.display_name;
            } else {
              div.innerHTML = idp.display_name;
            }
          }
        }
      }
      if (this.grid.innerHTML !== "") {
        this.classList.add("ais-chooser-featured");
        this.label.textContent = "Other ";
      }
      options = this.select.options;
      for (index = _k = 0, _len2 = options.length; _k < _len2; index = ++_k) {
        option = options[index];
        this.select.options.remove(index);
      }
      if (footprints.length > 0) {
        for (_l = 0, _len3 = footprints.length; _l < _len3; _l++) {
          key = footprints[_l];
          options[options.length] = new Option("" + idps[key].display_name, "" + key);
        }
      }
      for (key in idps) {
        value = idps[key];
        options[options.length] = new Option("" + value.display_name, "" + key);
      }
      this.classList.remove("hidden");
      break;
    case AISNotifications.AUTHENTICATING:
      this.classList.add("hidden");
  }
};

/**
 * The AISPlayMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function AISPlayMediator(parent) {
  AISPlayMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(AISPlayMediator, ComponentMediator);


AISPlayMediator.prototype.componentName = "ais-play";

AISPlayMediator.prototype.menu = null;

AISPlayMediator.prototype.restart = null;

AISPlayMediator.prototype.resume = null;

AISPlayMediator.prototype.resumeTime = null;

/**
 * @override
*/
AISPlayMediator.prototype.onRegister = function() {
  var _this = this;
  AISPlayMediator.__super__.onRegister.call(this);
  this.classList.add("hidden");
  this.menu = this.create("ais-play-menu");
  this.restart = this.create("ais-play-restart", this.menu);
  this.restart.type = "button";
  this.restart.textContent = "Restart";
  this.restart.onclick = function(event) {
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
    _this.play();
    return false;
  };
  this.resume = this.create("ais-play-resume", this.menu);
  this.resume.type = "button";
  this.resume.value = "Resume";
  this.restart.onclick = function(event) {
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
    _this.play(_this.resumeTime);
    return false;
  };
};

AISPlayMediator.prototype.play = function(time) {
  var proxy;
  proxy = this.facade.retrieveProxy(AISProxy.NAME);
  proxy.play(time);
};

/**
 * @override
*/
AISPlayMediator.prototype.listNotificationInterests = function() {
  return [AISNotifications.CHOOSE_PLAY_OPTIONS];
};

/**
 * @override
*/
AISPlayMediator.prototype.handleNotification = function(notification) {
  switch (notification.getName()) {
    case AISNotifications.CHOOSE_PLAY_OPTIONS:
      this.resumeTime = notification.getBody();
      this.classList.remove("hidden");
  }
};

/**
 * The AISAuthenticateMediaCommand class.
 * 
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AISAuthorizeCommand() {
  AISAuthorizeCommand.__super__.constructor.call(this);
}


__extends(AISAuthorizeCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISAuthorizeCommand.prototype.execute = function(notification) {
  var reason;
  reason = this.media.getData().status.reason;
  if (reason === "ais" || reason === "token") {
    this.proxy.authorize();
  }
};

/**
 * The AISAuthenticationFailedCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AISAuthenticationFailedCommand() {
  AISAuthenticationFailedCommand.__super__.constructor.call(this);
}


__extends(AISAuthenticationFailedCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AISAuthenticationFailedCommand.prototype.execute = function(notification) {
  AISAuthenticationFailedCommand.__super__.execute.call(this, notification);
  if (this.proxy.isPreviewAvailable()) {
    this.proxy.preview();
  } else {
    this.proxy.choose();
  }
};

/**
 * The AISAuthorizationFailedCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AISAuthorizationFailedCommand() {
  AISAuthorizationFailedCommand.__super__.constructor.call(this);
}


__extends(AISAuthorizationFailedCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AISAuthorizationFailedCommand.prototype.execute = function(notification) {
  AISAuthorizationFailedCommand.__super__.execute.call(this, notification);
  if (this.proxy.isPreviewAvailable()) {
    this.proxy.preview();
  }
};

/**
 * The AISAuthorizationExpiredCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AISAuthorizationExpiredCommand() {
  AISAuthorizationExpiredCommand.__super__.constructor.call(this);
}


__extends(AISAuthorizationExpiredCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AISAuthorizationExpiredCommand.prototype.execute = function(notification) {
  AISAuthorizationExpiredCommand.__super__.execute.call(this, notification);
  this.sendNotification(Notifications.PAUSE);
  this.proxy.authorize();
};

/**
 * The AISChangePlayStateCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AISChangePlayStateCommand() {
  AISChangePlayStateCommand.__super__.constructor.call(this);
}


__extends(AISChangePlayStateCommand, PluginCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AISChangePlayStateCommand.prototype.execute = function(notification) {
  var state;
  state = notification.getBody().value;
  if (state === PlayState.PLAYING) {
    this.proxy.playing();
  } else if (state === PlayState.PAUSED) {
    this.proxy.pause();
  }
};

/**
 * The AISAuthenticatingMediator class.
 * 
 * @constructor
 * @private
 * @extends {LocalizedMediator}
*/
function AISAuthenticatingMediator(parent) {
  AISAuthenticatingMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(AISAuthenticatingMediator, ComponentMediator);


AISAuthenticatingMediator.prototype.componentName = "ais-authenticating";

AISAuthenticatingMediator.prototype.retry = null;

/**
 * @override
*/
AISAuthenticatingMediator.prototype.onRegister = function() {
  AISAuthenticatingMediator.__super__.onRegister.call(this);
  this.classList.add("hidden");
  this.retry = this.create("ais-authenticating-button");
  this.retry.type = "button";
  this.retry.value = "Back to Providers";
  this.retry.onclick = this.onclick.bind(this);
};

/**
*/
AISAuthenticatingMediator.prototype.onclick = function(event) {
  if (typeof event.stopImmediatePropagation === "function") {
    event.stopImmediatePropagation();
  }
  this.classList.add("hidden");
  this.sendNotification(AISNotifications.START_AUTHENTICATION);
  return false;
};

/**
 * @override
*/
AISAuthenticatingMediator.prototype.listNotificationInterests = function() {
  return [AISNotifications.AUTHENTICATING];
};

/**
 * @override
*/
AISAuthenticatingMediator.prototype.handleNotification = function(notification) {
  switch (notification.getName()) {
    case AISNotifications.AUTHENTICATING:
      if (notification.getBody() === true) {
        this.classList.remove("hidden");
      } else {
        this.classList.add("hidden");
      }
  }
};

/**
 * The AISPlayMediator class.
 *
 * @constructor
 * @private
 * @extends {LocalizedMediator}
 * @param {Object} viewComponent
*/
function AISPreviewMediator(parent) {
  AISPreviewMediator.__super__.constructor.call(this, null, null, parent);
}


__extends(AISPreviewMediator, ComponentMediator);


AISPreviewMediator.prototype.componentName = "ais-preview";

/**
 * @override
*/
AISPreviewMediator.prototype.onRegister = function() {
  var _this = this;
  AISPreviewMediator.__super__.onRegister.call(this);
  this.classList.add("hidden");
  this.info = this.create(["flex-item", "ais-preview-info"]);
  this.info.textContent = this.localizationManager.getString("MSG_PREVIEW_INFO");
  this.spacer = this.create("spacer");
  this.label = this.create(["flex-item", "ais-preview-label"]);
  this.label.textContent = this.localizationManager.getString("MSG_PREVIEW_EXPIRES");
  this.count = this.create(["flex-item", "ais-preview-count"]);
  this.login = this.create(["flex-item", "ais-preview-login"], this, "button");
  this.login.textContent = this.localizationManager.getString("MSG_SIGN_IN");
  this.login.onclick = function() {
    _this.sendNotification(Notifications.PAUSE);
    _this.facade.retrieveProxy(AISProxy.NAME).authorize(true);
  };
};

AISPreviewMediator.prototype.displayTime = function(time, duration) {
  this.count.textContent = Utils.formatTimecode(time, duration);
};

/**
 * @override
*/
AISPreviewMediator.prototype.listNotificationInterests = function() {
  return [AISNotifications.START_AUTHENTICATION, AISNotifications.PREVIEW, AISNotifications.PREVIEW_TIME_REMAINING];
};

/**
 * @override
*/
AISPreviewMediator.prototype.handleNotification = function(notification) {
  var data;
  switch (notification.getName()) {
    case AISNotifications.START_AUTHENTICATION:
      this.classList.add("hidden");
      break;
    case AISNotifications.PREVIEW:
      this.classList.remove("hidden");
      break;
    case AISNotifications.PREVIEW_TIME_REMAINING:
      data = notification.getBody();
      this.displayTime(data.time / 1000, data.duration / 1000);
  }
};

/**
 * The AISStartAuthenticationCommand class.
 *
 * @constructor
 * @private
 * @extends {amp.plugins.PluginEventCommand}
*/
function AISStartAuthenticationCommand() {
  AISStartAuthenticationCommand.__super__.constructor.call(this);
}


__extends(AISStartAuthenticationCommand, PluginEventCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AISStartAuthenticationCommand.prototype.execute = function(notification) {
  this.proxy.authenticate();
  AISStartAuthenticationCommand.__super__.execute.call(this, notification);
};

/**
 * @constructor
 * @private
*/
function AISMediator() {
  AISMediator.__super__.constructor.call(this);
}


__extends(AISMediator, OverlayMediator);


AISMediator.prototype.componentName = "ais";

AISMediator.prototype.chooser = null;

AISMediator.prototype.auth = null;

AISMediator.prototype.play = null;

AISMediator.prototype.onRegister = function() {
  var _this = this;
  AISMediator.__super__.onRegister.call(this);
  this.classList.add("hidden");
  setTimeout(function() {
    _this.chooser = new AISChooserMediator(_this);
    _this.facade.registerMediator(_this.chooser);
    _this.auth = new AISAuthenticatingMediator(_this);
    _this.facade.registerMediator(_this.auth);
    _this.play = new AISPlayMediator(_this);
    _this.facade.registerMediator(_this.play);
    _this.preview = new AISPreviewMediator(_this);
    return _this.facade.registerMediator(_this.preview);
  }, 20);
};

AISMediator.prototype.listNotificationInterests = function() {
  return [AISNotifications.START_AUTHENTICATION, AISNotifications.AUTHENTICATION_COMPLETE, AISNotifications.CHOOSE_PLAY_OPTIONS, AISNotifications.PREVIEW, Notifications.MEDIA_CHANGE];
};

AISMediator.prototype.handleNotification = function(notification) {
  var name;
  name = notification.getName();
  switch (name) {
    case AISNotifications.CHOOSE_PLAY_OPTIONS:
    case AISNotifications.START_AUTHENTICATION:
    case AISNotifications.PREVIEW:
      this.classList.remove("hidden");
      if (name === AISNotifications.PREVIEW) {
        this.classList.add("ais-free-preview");
      } else {
        this.classList.remove("ais-free-preview");
      }
      break;
    case AISNotifications.AUTHENTICATION_COMPLETE:
    case Notifications.MEDIA_CHANGE:
      this.classList.add("hidden");
      this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "authenticating");
  }
};

/**
 * The AISPlugin class.
 *
 * @param {Module}  app
 *    The parent module of this plugin.
 *
 * @constructor
 * @private
 * @extends {Feature}
*/
function AISPlugin() {
  AISPlugin.__super__.constructor.call(this);
}


__extends(AISPlugin, Feature);


AISPlugin.NAME = "AISPlugin";

AISPlugin.prototype.moduleName = "ais";

AISPlugin.prototype.featureName = "auth";

AISPlugin.prototype.idps = null;

/** @override
*/
AISPlugin.prototype.createController = function() {
  AISPlugin.__super__.createController.call(this);
  this.registerCommand(SecurityNotifications.AUTHORIZE, AISAuthorizeCommand);
  this.registerCommand(AISNotifications.LAUNCH_IDP_LOGIN, AISLaunchIDPLoginCommand);
  this.registerCommand(AISNotifications.START_AUTHENTICATION, AISStartAuthenticationCommand);
  this.registerCommand(SecurityNotifications.AUTHENTICATION_FAILED, AISAuthenticationFailedCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZATION_FAILED, AISAuthorizationFailedCommand);
  this.registerCommand(SecurityNotifications.AUTHORIZATION_EXPIRED, AISAuthorizationExpiredCommand);
  this.registerCommand(AISNotifications.AUTHENTICATED, PluginEventCommand);
  this.registerCommand(AISNotifications.AUTHENTICATING, PluginEventCommand);
  this.registerCommand(AISNotifications.AUTHENTICATION_COMPLETE, PluginEventCommand);
  this.registerCommand(AISNotifications.CHOOSE_AUTH_PROVIDER, PluginEventCommand);
  this.registerCommand(AISNotifications.CHOOSE_PLAY_OPTIONS, PluginEventCommand);
  this.registerCommand(AISNotifications.PREVIEW, PluginEventCommand);
  this.registerCommand(Notifications.PLAY_STATE_CHANGE, AISChangePlayStateCommand);
};

/** @override
*/
AISPlugin.prototype.createModel = function() {
  this.proxy = new AISProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
AISPlugin.prototype.createView = function() {
  this.registerMediator(new AISMediator());
};

/** @override
*/
AISPlugin.prototype.createNotificationEvent = function(notificationName, body, type) {
  var event;
  event = Module.prototype.createNotificationEvent.call(this, notificationName, body, type);
  if (!(event != null)) {
    return;
  }
  event.type = event.type.replace(new RegExp("^" + (this.getModuleName())), "");
  return event;
};

/** @override
*/
AISPlugin.prototype.listNotificationInterests = function() {
  return AISPlugin.__super__.listNotificationInterests.call(this).concat([Notifications.MEDIA_CHANGE, SecurityNotifications.AUTHORIZE, Notifications.PLAY_STATE_CHANGE]);
};

/**
*/
AISPlugin.prototype.listNotificationPublications = function() {
  return AISPlugin.__super__.listNotificationPublications.call(this).concat([SecurityNotifications.AUTHORIZED, SecurityNotifications.AUTHENTICATION_FAILED, SecurityNotifications.AUTHORIZATION_FAILED, SecurityNotifications.AUTHORIZATION_EXPIRED, Notifications.INITIALIZED, Notifications.PLAY, Notifications.PAUSE, Notifications.SEEK, Notifications.WAITING]);
};

/**
 * @expose
*/
AISPlugin.prototype.authorize = function(media) {
  this.proxy.authorize(media);
  return media;
};

/**
 * @expose
*/
AISPlugin.prototype.logout = function() {
  this.proxy.logout();
};

/**
 * @return {Array.<Object>} The list of IDPs.
 * @expose
*/
AISPlugin.prototype.getIdps = function() {
  return this.idps;
};


AMP.registerPlugin("ais", "html", AISPlugin);

/**
 * The AISFlashPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function AISFlashPlugin() {
  AISFlashPlugin.__super__.constructor.call(this);
}


__extends(AISFlashPlugin, AISPlugin);


AISFlashPlugin.NAME = "AISFlashPlugin";

AISFlashPlugin.prototype.proxy = null;

AISFlashPlugin.prototype.startTime = null;

/**
*/
AISFlashPlugin.prototype.setData = function(data) {
  var proxy;
  proxy = this.retrieveProxy(AISProxy.NAME);
  proxy.data.platformID = data.platformID;
  proxy.data.resourceID = data.resourceID;
  proxy.data.contentID = data.contentID;
};

/**
*/
AISFlashPlugin.prototype.authorize = function(media) {
  this.retrieveProxy(AISProxy.NAME).authorize(media);
};

/**
 * @enum {string}
 * @const
 * @private
*/

var AISNotifications = {
  START_AUTHENTICATION: "aisauthenticationstarted",
  AUTHENTICATED: "aisauthenticated",
  AUTHENTICATING: "aisauthenticating",
  AUTHENTICATION_COMPLETE: "aisauthenticationcomplete",
  CHOOSE_AUTH_PROVIDER: "aischooseprovider",
  CHOOSE_PLAY_OPTIONS: "aischooseplayoptions",
  LAUNCH_IDP_LOGIN: "aislaunchidplogin",
  PREVIEW: "aispreview",
  PREVIEW_TIME_REMAINING: "aispreviewtimeremaining"
};

/**
 * @constructor
 * @private
 * @extends {PluginWrapper}
*/
function AISWrapper(player, config) {
  var dispatchEvent, key, value;
  AISWrapper.__super__.constructor.call(this, player, config);
  this.plugin = new AISFlashPlugin();
  dispatchEvent = this.dispatcher.dispatchEvent.bind(this.dispatcher);
  for (key in AISNotifications) {
    value = AISNotifications[key];
    this.plugin.addEventListener(value.replace(/^(ais)/, ""), dispatchEvent);
  }
  for (key in SecurityNotifications) {
    value = SecurityNotifications[key];
    this.plugin.addEventListener(value.replace(/^(auth)/, ""), dispatchEvent);
  }
  this.plugin.oninitialized = this.player.registerModule.bind(this.player, this.plugin);
  this.plugin.initialize(config, this.player);
}


__extends(AISWrapper, PluginWrapper);


AISWrapper.NAME = "AISWrapper";

AISWrapper.prototype.plugin = null;

/**
*/
AISWrapper.prototype.getFeatureName = function() {
  return "auth";
};

/**
*/
AISWrapper.prototype.createXML = function(xml) {
  var application, auth, element, prop, props, text, vendor, _i, _len;
  application = xml.firstChild;
  auth = xml.getElementsByTagName("authentication");
  if (!(auth != null) || auth.length === 0) {
    auth = xml.createElement("authentication");
    application.appendChild(auth);
  } else {
    auth = auth[0];
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "ais");
  auth.appendChild(vendor);
  props = [
    {
      value: this.config.platformID,
      key: "platformID"
    }, {
      value: this.config.resourceID,
      key: "resourceID"
    }, {
      value: this.config.contentID,
      key: "contentID"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (!(prop.value != null)) {
      continue;
    }
    element = xml.createElement("property");
    element.setAttribute("key", prop.key);
    text = XMLUtils.createTextContent(xml, prop.value);
    element.appendChild(text);
    vendor.appendChild(element);
  }
  return xml;
};

/**
*/
AISWrapper.prototype.listNotificationInterests = function() {
  return AISWrapper.__super__.listNotificationInterests.apply(this, arguments).concat([SecurityNotifications.AUTHORIZE, FlashNotifications.TIME_UPDATE, FlashNotifications.ENDED, FlashNotifications.PAUSED, FlashNotifications.CAPABILITY_CHANGE, FlashNotifications.RESET]);
};

/**
*/
AISWrapper.prototype.handleNotification = function(notification) {
  var body, mediaProxy, name;
  AISWrapper.__super__.handleNotification.call(this, notification);
  name = notification.getName();
  body = notification.getBody();
  switch (name) {
    case SecurityNotifications.AUTHORIZE:
      this.plugin.startTime = null;
      this.plugin.setData(body);
      mediaProxy = this.player.retrieveProxy(MediaProxy.NAME);
      if (!(mediaProxy.getSrc() != null)) {
        mediaProxy.setSrc(body.media.src);
      }
      break;
    case FlashNotifications.TIME_UPDATE:
      this.plugin.sendNotification(Notifications.TIME_UPDATE, body);
      break;
    case FlashNotifications.ENDED:
      this.plugin.sendNotification(Notifications.ENDED, body);
      break;
    case FlashNotifications.PAUSED:
      this.plugin.sendNotification(Notifications.PAUSE, body);
      break;
    case FlashNotifications.RESET:
      this.plugin.sendNotification(Notifications.MEDIA_CHANGE, body);
      break;
    case FlashNotifications.CAPABILITY_CHANGE:
      if ((this.plugin.startTime != null) && body.type === "canSeekChange" && body.enabled) {
        this.player.setCurrentTime(this.plugin.startTime);
      }
  }
};

/**
 * @expose
*/
AISWrapper.prototype.authorize = function(media) {
  this.plugin.authorize(media);
  return media;
};

/**
 * @expose
*/
AISWrapper.prototype.logout = function() {
  this.plugin.logout();
};

/**
 * @return {Array.<Object>} The list of IDPs.
 * @expose
*/
AISWrapper.prototype.getIdps = function() {
  return this.plugin.getIdps();
};


AMP.registerPlugin("ais", "flash", AISWrapper);

/**
 * The AISTimeUpdateCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AISTimeUpdateCommand() {
  AISTimeUpdateCommand.__super__.constructor.call(this);
}


__extends(AISTimeUpdateCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISTimeUpdateCommand.prototype.execute = function(notification) {
  var currentTime;
  currentTime = Math.floor(notification.getBody());
  if (currentTime !== 0 && currentTime % 30 === 0 && currentTime !== this.proxy.currentTime) {
    this.proxy.vcsSet(currentTime);
  }
  this.proxy.currentTime = currentTime;
};

/**
 * The AISEndedCommand class.
 *   
 * @constructor
 * @private
 * @extends {amp.plugins.PluginCommand}
*/
function AISEndedCommand() {
  AISEndedCommand.__super__.constructor.call(this);
}


__extends(AISEndedCommand, PluginCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
AISEndedCommand.prototype.execute = function(notification) {
  this.proxy.vcsSet(0);
};

function Cookies() {}

Cookies.setCookie = function(name, value, days, path, domain) {
  var expires;
  value = escape(value);
  if (days != null) {
    expires = new Date();
    expires.setDate(expires.getDate() + days);
    value += "; expires=" + expires.toUTCString();
  }
  if (domain != null) {
    value += "; domain=" + domain;
  }
  if (path != null) {
    value += "; path=" + path;
  }
  return document.cookie = name + "=" + value;
};

Cookies.getCookie = function(name) {
  var cookie, cookies, index, key, value, _i, _len;
  cookies = document.cookie.split(";");
  for (_i = 0, _len = cookies.length; _i < _len; _i++) {
    cookie = cookies[_i];
    index = cookie.indexOf("=");
    key = cookie.substr(0, index).replace(/^\s+|\s+$/g, "");
    value = unescape(cookie.substr(index + 1));
    if (key === name) {
      return value;
    }
  }
};

Cookies.deleteCookie = function(name) {
  return this.setCookie(name, "", -1);
};

/**
 * The IMAPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {AdPlugin}
*/
function IMAPlugin() {
  IMAPlugin.__super__.constructor.call(this);
}


__extends(IMAPlugin, AdPlugin);


IMAPlugin.prototype.moduleName = "ima";

IMAPlugin.prototype.createFullscreenProxy = function() {
  return new IMAFullscreenProxy(this.config);
};

IMAPlugin.prototype.createProxy = function() {
  return new IMAProxy(this.config);
};

IMAPlugin.prototype.isFullscreenDevice = function() {
  var ua;
  ua = navigator.userAgent;
  return this.config.fullscreen === true || Utils.isFullscreenDevice() || /Android 4\.[0-1]/.test(ua) || /CrKey/.test(ua);
};

/** @override
*/
IMAPlugin.prototype.createModel = function() {
  IMAPlugin.__super__.createModel.call(this);
  if (this.config.overlay != null) {
    this.registerProxy(new IMAOverlayProxy(this.config.overlay));
  }
};

/** @override
*/
IMAPlugin.prototype.createController = function() {
  IMAPlugin.__super__.createController.call(this);
  if (this.config.overlay != null) {
    this.registerCommand(IMANotifications.ADD_OVERLAY, IMAAddOverlayCommand);
    this.registerCommand(IMANotifications.REMOVE_OVERLAY, IMARemoveOverlayCommand);
  }
  this.registerCommand(Notifications.READY, IMAReadyCommand);
  this.registerCommand(Notifications.FULL_SCREEN_CHANGE, IMADisplayStateChangeCommand);
  this.registerCommand(Notifications.CHANGE_ACTIVE_STATE, IMAActiveStateChangeCommand);
};

/** @override
*/
IMAPlugin.prototype.createView = function() {
  IMAPlugin.__super__.createView.call(this);
  if (this.config.overlay != null) {
    this.registerMediator(new IMAOverlayMediator());
  }
};


AMP.registerPlugin("ima", "html", IMAPlugin);
AMP.registerPlugin("ima", "flash", IMAWrapper);

/**
 * The AdContentPausedCommand class.
 *
 * @constructor
 * @private
 * @extends {AdCommand}
*/
function AdContentPausedCommand() {
  AdContentPausedCommand.__super__.constructor.call(this);
}


__extends(AdContentPausedCommand, PluginCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
AdContentPausedCommand.prototype.execute = function(notification) {
  var fw;
  fw = this.facade.retrieveProxy(AdProxy.NAME);
  fw.contentPaused();
};

/**
 * @constructor
 * @private
 * @extends {PluginProxy}
*/
function AISProxy(config) {
  AISProxy.__super__.constructor.call(this, config);
}


__extends(AISProxy, PluginProxy);


/** @static
*/
AISProxy.NAME = ModuleProxy.NAME;

AISProxy.prototype.client = null;

AISProxy.prototype.currentTime = null;

AISProxy.prototype.idps = null;

AISProxy.prototype.idp = null;

AISProxy.prototype.token = null;

AISProxy.prototype.authz = null;

AISProxy.prototype.authenticated = null;

AISProxy.prototype.defaults = {
  platformID: null,
  resourceID: null,
  contentID: null,
  responseTargets: null,
  query: "hdnts",
  vcs: false,
  preview: null,
  logos: {
    base: null,
    group: null,
    key: "full"
  }
};

/** @override
*/
AISProxy.prototype.getScript = function() {
  return this.value.plugin;
};

/**
*/
AISProxy.prototype.initialize = function() {
  this.client = window.ais_client;
  this.client.setLogging(this.facade.logger.enabled);
  this.client.setPlatformId(this.value.platformID);
  this.client.setUseCache(false);
  this.client.assignhandler('bounce', this.bounceHandler.bind(this));
  this.client.assignhandler('chooser', this.chooserHandler.bind(this));
  this.client.assignhandler('init', this.initHandler.bind(this));
  this.client.assignhandler('authz_query', this.authz_queryHandler.bind(this));
  this.client.assignhandler('identity', this.identityHandler.bind(this));
  this.client.assignhandler('vcs', this.vcsHandler.bind(this));
  window.onunload = function() {};
};

/**
*/
AISProxy.prototype.waiting = function(value) {
  var _this = this;
  setTimeout(function() {
    _this.facade.player.appState.setWaiting(value);
  }, 10);
};

/**
*/
AISProxy.prototype.authorize = function(force) {
  if (force == null) {
    force = false;
  }
  this.authz = null;
  this.token = null;
  if (force === true) {
    this.value.preview = null;
  }
  this.disengage();
  this.waiting(true);
  this.sendNotification(AISNotifications.START_AUTHENTICATION);
};

/**
*/
AISProxy.prototype.credentials = function(token) {
  var security;
  security = this.facade.player.security;
  security.setAuthorization({
    key: this.value.query || this.getDefaults().query,
    token: token
  });
  this.token = security.getSecret();
};

/**
*/
AISProxy.prototype.authorized = function(token) {
  if (token == null) {
    token = this.token;
  }
  this.engage();
  this.waiting(false);
  this.sendNotification(AISNotifications.AUTHENTICATION_COMPLETE);
  this.sendNotification(SecurityNotifications.AUTHORIZED, token);
};

/**
*/
AISProxy.prototype.play = function(time) {
  this.sendNotification(Notifications.INITIALIZED);
  this.sendNotification(Notifications.PLAY);
  if (time != null) {
    return this.sendNotification(Notifications.SEEK, time);
  }
};

/**
*/
AISProxy.prototype.engage = function() {
  this.facade.registerCommand(Notifications.TIME_UPDATE, AISTimeUpdateCommand);
  this.facade.registerCommand(Notifications.ENDED, AISEndedCommand);
};

/**
*/
AISProxy.prototype.disengage = function() {
  this.facade.removeCommand(Notifications.TIME_UPDATE);
  this.facade.removeCommand(Notifications.ENDED);
};

/**
*/
AISProxy.prototype.logout = function() {
  var height, method, target, width, _ref;
  this.authenticated = null;
  method = ((_ref = this.idp.window_display) != null ? _ref.method : void 0) || "redirect";
  target = this.getTarget(method);
  this.setRedirect(method);
  switch (method) {
    case "redirect":
      window.open(this.client.logoutFormat(target), "_top");
      break;
    case "popup":
      width = this.idp.window_display.width || 320;
      height = this.idp.window_display.height || 240;
      window.open(this.client.logoutFormat(target), 'ais_popup', 'width=' + width + ',height=' + height);
  }
};

/**
*/
AISProxy.prototype.isPreviewAvailable = function() {
  var _ref;
  return ((_ref = this.value.preview) != null ? _ref.duration : void 0) != null;
};

/**
*/
AISProxy.prototype.preview = function(refreshIdToken) {
  var count, delay, duration, expired, preflight, remaining, startTime, windowed,
    _this = this;
  if (refreshIdToken == null) {
    refreshIdToken = false;
  }
  duration = this.value.preview.duration * 1000;
  windowed = this.value.preview.type === "window";
  count = "AIS_preview___" + this.value.platformID + "__" + this.value.resourceID;
  delay = 100;
  expired = "PREVIEW EXPIRED";
  if (windowed === false) {
    startTime = localStorage.getItem(count);
    if (!(startTime != null)) {
      startTime = 0;
      localStorage.setItem(count, 0);
    }
    startTime = parseInt(startTime);
    remaining = duration - startTime;
  }
  preflight = function() {
    return new Promise(function(resolve, reject) {
      if (windowed === false && remaining <= 0) {
        reject(expired);
      } else {
        resolve();
      }
    });
  };
  return preflight().then(function() {
    return _this.requestIdToken(refreshIdToken);
  }).then(function(tokenId) {
    return _this.requestCrossToken(tokenId);
  }).then(function(preview) {
    _this.credentials(preview.token);
    _this.authorized(_this.token);
    if (windowed === true) {
      startTime = 0;
      remaining = preview.expires - preview.issued;
    }
    if (remaining <= 0) {
      throw expired;
    }
    _this.timer = new Timer(delay, Math.ceil(remaining / delay));
    _this.timer.addEventListener("timer", function(event) {
      var currentTime, remainingTime;
      currentTime = event.target.time;
      remainingTime = remaining - currentTime;
      if (windowed === false) {
        localStorage.setItem(count, startTime + currentTime);
      }
      _this.sendNotification(AISNotifications.PREVIEW_TIME_REMAINING, {
        time: remainingTime,
        duration: duration
      });
      if (remainingTime <= 0) {
        _this.timer.stop();
        _this.sendNotification(SecurityNotifications.AUTHORIZATION_EXPIRED);
      }
    });
    _this.sendNotification(AISNotifications.PREVIEW, preview);
    _this.sendNotification(AISNotifications.PREVIEW_TIME_REMAINING, {
      time: remaining,
      duration: duration
    });
  })["catch"](function(error) {
    _this.facade.logger.error(error);
    _this.authorize(true);
  }).then(function() {
    _this.waiting(false);
  });
};

/**
*/
AISProxy.prototype.requestGuardToken = function() {
  var path,
    _this = this;
  path = "https://idp.securetve.com/rest/security/v2/platforms/" + this.value.platformID + "/tokens/guard";
  return Utils.requestJson(path).then(function(json) {
    return json.guard_token;
  });
};

/**
*/
AISProxy.prototype.requestIdToken = function(refreshIdToken) {
  var paths, token, tokenKey,
    _this = this;
  tokenKey = "AIS_preview___" + this.value.platformID + "__response_cache__identity_token";
  if (refreshIdToken === true) {
    localStorage.removeItem(tokenKey);
  } else {
    token = localStorage.getItem(tokenKey);
    if (token != null) {
      return Promise.resolve(token);
    }
  }
  paths = ["https://idp.securetve.com/rest/authn/v2/platforms/" + this.value.platformID + "/init/fingerprint", "https://idp.securetve.com/rest/authn/v2/platforms/" + this.value.platformID + "/tokens/id"];
  return this.requestGuardToken().then(function(guard) {
    return Utils.requestJson({
      url: paths[0],
      headers: {
        "Akamai-Token-Guard": guard
      }
    }).then(function(km) {
      return akamai.ais.createEncryptedFingerprint(km);
    }).then(function(fingerprint) {
      return Utils.requestJson({
        url: paths[1],
        headers: {
          "Akamai-Token-Guard": guard,
          "Akamai-Authentication": "fingerprint/ob " + fingerprint
        }
      });
    }).then(function(json) {
      if (json.failure_type != null) {
        throw json.failure_type;
      }
      token = json.identity_token;
      localStorage.setItem(tokenKey, token);
      return token;
    });
  });
};

/**
*/
AISProxy.prototype.requestCrossToken = function(tokenId) {
  var paths,
    _this = this;
  paths = ["https://idp.securetve.com/rest/authz/v2/platforms/" + this.value.platformID + "/resources/" + this.value.resourceID, "https://idp.securetve.com/rest/authz/v2/platforms/" + this.value.platformID + "/tokens/crossover"];
  return Utils.requestJson({
    url: paths[0],
    headers: {
      "Akamai-Token-Id": tokenId
    }
  }).then(function(json) {
    var error;
    error = json.failure_type;
    if (!(error != null)) {
      return json;
    }
    switch (error) {
      case "INVALID_ID_TOKEN":
        return _this.preview(true);
      case "GRANTS_WINDOW_EXPIRED":
        return _this.requestGuardToken().then(function(guard) {
          return Utils.requestJson({
            url: paths[0],
            method: "POST",
            headers: {
              "Akamai-Token-Guard": guard,
              "Akamai-Token-Id": tokenId
            },
            body: '{"action":"grant_extension","attributes":{"duration":' + _this.value.preview.duration + '}}'
          });
        });
      default:
        throw JSON.stringify(json, null, "  ");
    }
  }).then(function(json) {
    var jwt, preview;
    if (json.failure_type != null) {
      throw json.failure_type;
    }
    jwt = Utils.parseJWT(json.access_token).payload.grants[_this.value.resourceID];
    preview = {
      issued: jwt.issued * 1000,
      expires: jwt.expires * 1000,
      duration: _this.value.preview.duration
    };
    return Utils.requestJson({
      url: paths[1],
      headers: {
        "Akamai-Token-Access": json.access_token
      }
    }).then(function(json) {
      preview.token = json.crossover_token;
      return preview;
    });
  });
};

/**
*/
AISProxy.prototype.playing = function() {
  if (!(this.timer != null) || !(this.value.preview != null) || this.value.preview.type === "window") {
    return;
  }
  this.timer.start();
};

/**
*/
AISProxy.prototype.pause = function() {
  if (!(this.timer != null) || !(this.value.preview != null) || this.value.preview.type === "window") {
    return;
  }
  this.timer.stop();
};

/**
*/
AISProxy.prototype.authenticate = function() {
  if (this.authenticated === null) {
    this.bounce();
  } else if (this.authenticated === false) {
    this.choose();
  }
};

/**
*/
AISProxy.prototype.bounce = function(resource) {
  this.client.bounce();
};

/**
*/
AISProxy.prototype.init = function(resource) {
  this.client.init();
};

/**
*/
AISProxy.prototype.choose = function() {
  this.timer = null;
  this.client.chooser();
};

/**
*/
AISProxy.prototype.resourceAccess = function(resource) {
  if (resource == null) {
    resource = this.value.resourceID;
  }
  this.client.resourceAccess(resource);
};

/**
*/
AISProxy.prototype.vcsSet = function(time) {
  time = Utils.formatTimecode(time);
  this.client.vcsSet(this.value.contentID, time);
};

/**
*/
AISProxy.prototype.bounceHandler = function(type, resp) {
  this.authenticated = resp['authenticated'].toString() === 'true';
  if (this.authenticated === false) {
    this.sendNotification(SecurityNotifications.AUTHENTICATION_FAILED);
  } else if (this.authenticated === true) {
    this.init();
  }
};

/**
*/
AISProxy.prototype.initHandler = function(type, resp) {
  var key, key2, value, value2, _ref;
  this.idp = resp.idps;
  this.facade.idps = {};
  _ref = resp.idps;
  for (key in _ref) {
    value = _ref[key];
    this.facade.idps.key = key;
    for (key2 in value) {
      value2 = value[key2];
      this.facade.idps[key2] = value2;
    }
    break;
  }
  for (key in resp) {
    value = resp[key];
    if (key !== "idps" && (value != null)) {
      this.facade[key] = value;
    }
  }
  if ((this.value.logos != null) && (this.facade.idps.logos != null)) {
    this.facade.idps.logo = this.value.logos.base + this.facade.idps.logos[this.value.logos.key];
  }
  this.client.assignhandler('logout_result', this.logoutHandler.bind(this));
  this.facade.player.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "authenticating");
  this.sendNotification(AISNotifications.AUTHENTICATED, this.facade.idps);
  this.resourceAccess(this.value.resourceID);
};

/**
*/
AISProxy.prototype.chooserHandler = function(type, resp) {
  this.waiting(false);
  this.facade.sendNotification(Notifications.ADD_APPLICATION_STATE, "authenticating");
  resp.possible_idps = this.idps = this.sort(resp.possible_idps, 'value', 'display_name');
  this.sendNotification(AISNotifications.CHOOSE_AUTH_PROVIDER, resp);
};

AISProxy.prototype.launchIDPLogin = function(idp_platform_id) {
  var height, idp, method, target, width, _ref;
  this.sendNotification(AISNotifications.AUTHENTICATING, true);
  idp = this.idps[idp_platform_id];
  method = ((_ref = idp.window_display) != null ? _ref.method : void 0) || "redirect";
  target = this.getTarget(method);
  this.setRedirect(method);
  switch (method) {
    case "redirect":
      window.open(this.client.loginFormat(idp_platform_id, target), "_top");
      break;
    case "popup":
      method = idp.window_display.method || "popup";
      width = idp.window_display.width || 320;
      height = idp.window_display.height || 240;
      window.open(this.client.loginFormat(idp_platform_id, target), 'ais_popup', 'width=' + width + ',height=' + height);
  }
};

/**
*/
AISProxy.prototype.identityHandler = function(type, resp) {
  var aisuid;
  aisuid = resp['identity']['attributes']['aisuid'];
};

/**
*/
AISProxy.prototype.authz_queryHandler = function(type, resp) {
  var auth, dimensions, resource;
  auth = resp['authorization'].toString() === "true";
  if (auth === false) {
    this.sendNotification(SecurityNotifications.AUTHORIZATION_FAILED, resp);
  } else if (auth === true) {
    this.authz = resp;
    dimensions = {
      mvpdName: this.facade.idps.name,
      viewerId: this.client.aisuid,
      "std:viewerId": this.client.aisuid
    };
    this.facade.player.setParams({
      "mvpdname": dimensions.mvpdName
    });
    this.facade.player.sendNotification(MediaAnalyticsNotifications.SET_DIMENSIONS, dimensions);
    this.facade.viewerId = this.client.aisuid;
    resource = resp['resource'];
    if (resource != null) {
      this.facade.resource = resource;
    }
    this.credentials(resp['security_token']);
    this.sendNotification(AISNotifications.AUTHENTICATING, false);
    if (this.value.vcs === true && (this.value.contentID != null)) {
      this.client.vcsGet(this.value.contentID);
    } else {
      this.authorized(this.token);
    }
  }
};

/**
*/
AISProxy.prototype.logoutHandler = function(type, resp) {
  top.location.href = top.location.href;
};

/**
*/
AISProxy.prototype.vcsHandler = function(type, resp) {
  if (resp['operation'] === 'get') {
    if (resp['ph_pos'] === '00:00:00' || resp['ph_pos'] === "00:00") {
      this.client.vcsSet(this.value.contentID, resp['ph_pos']);
      this.authorized(this.token);
    } else {
      this.sendNotification(AISNotifications.CHOOSE_PLAY_OPTIONS, Utils.flattenTimecode(resp['ph_pos']));
    }
  }
};

/**
*/
AISProxy.prototype.sort = function(obj, sortType, valueName) {
  var data, index, item, key, returnObj, value, _i, _len;
  returnObj = {};
  data = [];
  index = 0;
  for (key in obj) {
    value = obj[key];
    data[index] = {
      key: key,
      value: value[valueName]
    };
    index++;
  }
  data.sort(function(a, b) {
    var valueA, valueB, _ref, _ref1, _ref2, _ref3;
    valueA = sortType === 'value' ? (_ref = a.value) != null ? _ref.toLowerCase() : void 0 : (_ref1 = a.key) != null ? _ref1.toLowercase() : void 0;
    valueB = sortType === 'value' ? (_ref2 = b.value) != null ? _ref2.toLowerCase() : void 0 : (_ref3 = b.key) != null ? _ref3.toLowercase() : void 0;
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  });
  for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
    item = data[index];
    returnObj[item.key] = obj[item.key];
  }
  return returnObj;
};

/**
*/
AISProxy.prototype.setRedirect = function(method) {
  var devToken, domain, loc;
  try {
    devToken = /\/dev\./;
    loc = window.top.location.href || window.top.location;
    domain = devToken.test(loc) ? loc.replace(devToken, "/") : null;
    Cookies.setCookie(this.getTarget(method), loc, 1, "/", domain);
  } catch (error) {

  }
};

/**
*/
AISProxy.prototype.getTarget = function(method) {
  if (method == null) {
    method = "redirect";
  }
  return this.value.responseTargets[method];
};

function FreeWheelWrapper() {
  return FreeWheelWrapper.__super__.constructor.apply(this, arguments);
}


__extends(FreeWheelWrapper, AdWrapper);


FreeWheelWrapper.NAME = "FreeWheelWrapper";

FreeWheelWrapper.prototype.partner = "freewheel";

FreeWheelWrapper.prototype.flashPlugins = [
  {
    id: "FreewheelPlugin",
    src: '#{paths.resources}plugins/FreewheelPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "FreewheelPlugin"
  }, {
    id: "AdOptionsPlugin",
    src: '#{paths.resources}plugins/AdOptionsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "AdOptionsPlugin",
    type: "application/x-shockwave-flash"
  }
];

/** @override
*/
FreeWheelWrapper.prototype.createXML = function(xml) {
  var admedia, application, key, keyValue, prop, props, value, vendor, _i, _len, _ref;
  application = xml.firstChild;
  admedia = xml.getElementsByTagName("admedia")[0];
  if (!(admedia != null)) {
    admedia = xml.createElement("admedia");
    application.appendChild(admedia);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "freewheel");
  admedia.appendChild(vendor);
  props = [
    {
      value: this.config.plugin.swf,
      key: "FREEWHEEL_AD_MANAGER_URL"
    }, {
      value: this.config.serverUrl,
      key: "FREEWHEEL_SERVER_URL"
    }, {
      value: this.config.networkId,
      key: "FREEWHEEL_NETWORK_ID"
    }, {
      value: this.config.profileId,
      key: "FREEWHEEL_PROFILE"
    }, {
      value: this.config.siteSectionId,
      key: "FREEWHEEL_SITE_SECTION_ID"
    }, {
      value: this.config.siteSectionFallbackId,
      key: "FREEWHEEL_SITE_SECTION_FALLBACK_ID"
    }, {
      value: this.config.prerollSlotId,
      key: "FREEWHEEL_PREROLL_SLOT_ID"
    }, {
      value: this.config.midrollSlotId,
      key: "FREEWHEEL_MIDROLL_SLOT_ID"
    }, {
      value: this.config.postrollSlotId,
      key: "FREEWHEEL_POSTROLL_SLOT_ID"
    }, {
      value: this.config.videoAssetId,
      key: "FREEWHEEL_VIDEO_ASSET_ID"
    }, {
      value: this.config.videoAssetFallbackId,
      key: "FREEWHEEL_VIDEO_ASSET_FALLBACK_ID"
    }, {
      value: this.config.videoAssetVideoPlayRandom,
      key: "FREEWHEEL_VIDEO_ASSET_VIDEO_PLAY_RANDOM"
    }, {
      value: this.config.visitorId,
      key: "FREEWHEEL_VISITOR_ID"
    }, {
      value: this.config.keyValuesString,
      key: "FREEWHEEL_KEY_VALUES_STRING"
    }, {
      value: this.config,
      key: "FREEWHEEL_SITE_SECTION_PAGE_VIEW_RANDOM"
    }, {
      value: "EXACT",
      key: "FREEWHEEL_VIDEO_ASSET_DURATION_TYPE"
    }, {
      value: this.config.visitorHeader,
      key: "FREEWHEEL_VISITOR_HTTP_HEADER_KEY_VALUE"
    }, {
      value: this.config.synchronizeMultipleRequests,
      key: "FREEWHEEL_SYNCHRONIZE_MULTIPLE_REQUESTS"
    }, {
      value: this.config.subsessionToken,
      key: "FREEWHEEL_SUBSESSION_TOKEN"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (prop.value != null) {
      this.createProperty(xml, prop.key, prop.value, vendor);
    }
  }
  if (this.config.position != null) {
    vendor.setAttribute("position", this.config.position);
  }
  if (this.config.keyValues != null) {
    keyValue = xml.createElement("property");
    keyValue.setAttribute("key", "FREEWHEEL_KEY_VALUE");
    _ref = this.config.keyValues;
    for (key in _ref) {
      value = _ref[key];
      if (value != null) {
        this.createProperty(xml, key, value, keyValue);
      }
    }
    vendor.appendChild(keyValue);
  }
};

var isOverlayDisplayed;





/**
 * @constructor
 * @private
*/
function FreeWheelProxy(config) {
  this.media = {};
  this.handlers = {
    onRequestComplete: this.onRequestComplete.bind(this),
    onSlotStarted: this.onSlotStarted.bind(this),
    onSlotEnded: this.onSlotEnded.bind(this),
    onAdImpression: this.onAdImpression.bind(this),
    onAdImpressionEnd: this.onAdImpressionEnd.bind(this),
    onAdClick: this.onAdClick.bind(this),
    onResume: this.onResume.bind(this),
    adtimeupdate: this.adTimeupdate.bind(this),
    timeupdate: this.midrollCheck.bind(this),
    overlaytimeupdate: this.overlayCheck.bind(this),
    seekupdate: this.seekingHandler.bind(this),
    onAdEvent: this.onAdEvent.bind(this)
  };
  FreeWheelProxy.__super__.constructor.call(this, config);
  this.adVO = this.createDefaultAdVO();
}


__extends(FreeWheelProxy, AdProxy);


/** @static
*/
FreeWheelProxy.NAME = AdProxy.NAME;

FreeWheelProxy.prototype.partner = "freewheel";

FreeWheelProxy.prototype.context = null;

FreeWheelProxy.prototype.prerollSlots = null;

FreeWheelProxy.prototype.midrollSlots = null;

FreeWheelProxy.prototype.postrollSlots = null;

FreeWheelProxy.prototype.initialized = false;

FreeWheelProxy.prototype.playWhenLoaded = false;

FreeWheelProxy.prototype.handlers = null;

FreeWheelProxy.prototype.slot = null;

FreeWheelProxy.prototype.playbackCore = null;

FreeWheelProxy.prototype.nextMidroll = null;

FreeWheelProxy.prototype.midrollEngaged = false;

FreeWheelProxy.prototype.overlayEngaged = false;

FreeWheelProxy.prototype.timeout = null;

FreeWheelProxy.prototype.curTime = 0;

FreeWheelProxy.prototype.mediator = null;

FreeWheelProxy.prototype.adPosition = 1;

FreeWheelProxy.prototype.currentAd = null;

isOverlayDisplayed = false;

FreeWheelProxy.prototype.defaults = {
  networkId: "96749",
  serverUrl: "http://demo.v.fwmrm.net/ad/g/1",
  profileId: "global-js",
  siteSectionId: "DemoSiteGroup.01",
  siteSectionFallbackId: null,
  siteSectionPageViewRandom: null,
  videoAssetId: '#{media.guid}',
  videoAssetFallbackId: null,
  videoAssetVideoPlayRandom: null,
  prerollSlotId: null,
  midrollSlotId: null,
  postrollSlotId: null,
  visitorId: null,
  keyValues: null,
  keyValuesString: null,
  renderers: null,
  synchronizeMultipleRequests: null,
  subsessionToken: null,
  creativeParameters: null,
  parameters: null
};

/**
*/
FreeWheelProxy.prototype.initialize = function() {
  var debug, level;
  debug = this.getDebug();
  switch (true) {
    case debug === true:
      level = tv.freewheel.SDK.LOG_LEVEL_INFO;
      break;
    case typeof debug === "number":
      level = debug;
      break;
    default:
      level = tv.freewheel.SDK.LOG_LEVEL_QUIET;
  }
  tv.freewheel.SDK.setLogLevel(level);
  this.plugin = this.createPlugin();
  this.plugin.setNetwork(this.value.networkId);
  this.plugin.setServer(this.value.serverUrl);
};

FreeWheelProxy.prototype.createPlugin = function() {
  return new tv.freewheel.SDK.AdManager();
};

/**
*/
FreeWheelProxy.prototype.engage = function(media) {
  this.media = media;
  FreeWheelProxy.__super__.engage.call(this, media);
  this.requestAd();
};

/**
*/
FreeWheelProxy.prototype.requestAd = function() {
  var cues, index, key, keyValue, mediaElement, pair, pairs, parameter, renderer, renderers, scene, time, value, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3;
  this.terminateAllAds(true);
  this.context = this.plugin.newContext();
  if (this.value.synchronizeMultipleRequests != null) {
    this.context.setCapability("sync", this.value.synchronizeMultipleRequests ? tv.freewheel.SDK.CAPABILITY_STATUS_ON : tv.freewheel.SDK.CAPABILITY_STATUS_OFF);
  }
  this.context.registerVideoDisplayBase(this.facade.player.viewComponent.id);
  mediaElement = this.getMediaElement();
  if (mediaElement.nodeName.toLowerCase() !== "video") {
    this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, this.facade.player.mediator);
    this.mediator = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore().mediator;
  }
  this.context.setContentVideoElement(this.getMediaElement());
  this.context.setProfile(this.value.profileId);
  this.context.setVideoAsset(this.value.videoAssetId, this.media.duration, this.value.networkId, null, null, this.value.videoAssetVideoPlayRandom, null, this.value.videoAssetFallbackId);
  this.context.setSiteSection(this.value.siteSectionId, this.value.networkId, this.value.siteSectionPageViewRandom, null, this.value.siteSectionFallbackId);
  if (this.value.subsessionToken != null) {
    this.context.startSubsession(this.value.subsessionToken);
  }
  if (this.value.visitorId != null) {
    this.context.setVisitor(this.value.visitorId);
  }
  if (this.value.keyValues != null) {
    _ref = this.value.keyValues;
    for (key in _ref) {
      value = _ref[key];
      if (value != null) {
        this.context.addKeyValue(key, value);
      }
    }
  }
  if (this.value.keyValuesString != null) {
    pairs = this.value.keyValuesString.split("&");
    for (_i = 0, _len = pairs.length; _i < _len; _i++) {
      pair = pairs[_i];
      if (!(pair !== "")) {
        continue;
      }
      keyValue = pair.split("=");
      this.context.addKeyValue(keyValue[0], keyValue[1]);
    }
  }
  this.context.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.handlers.onRequestComplete);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.handlers.onSlotStarted);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.handlers.onSlotEnded);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION, this.handlers.onAdImpression);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, this.handlers.onAdImpressionEnd);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_CLICK, this.handlers.onAdClick);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_AD, this.handlers.onAdEvent);
  this.context.addEventListener(tv.freewheel.SDK.EVENT_ERROR, this.handlers.onAdEvent);
  this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT, 10000, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
  this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT, 10000, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
  this.context.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE, false, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
  this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, false, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
  this.context.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE, false, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
  if (this.value.parameters != null) {
    _ref1 = this.value.parameters;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      parameter = _ref1[_j];
      this.context.setParameter(parameter.key, parameter.value, parameter.level || tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
    }
  }
  if (this.value.prerollSlotId != null) {
    this.context.addTemporalSlot(this.value.prerollSlotId, tv.freewheel.SDK.ADUNIT_PREROLL, 0);
  }
  if (((_ref2 = this.media.scenes) != null ? _ref2.length : void 0) > 0 && (this.value.midrollSlotId != null)) {
    cues = [];
    _ref3 = this.media.scenes;
    for (index = _k = 0, _len2 = _ref3.length; _k < _len2; index = ++_k) {
      scene = _ref3[index];
      if (!(index > 0)) {
        continue;
      }
      time = Utils.flattenTimecode(scene.sceneStartTime);
      cues.push(time);
      this.context.addTemporalSlot(this.value.midrollSlotId, tv.freewheel.SDK.ADUNIT_MIDROLL, time);
    }
    this.setCues(cues);
  }
  if (this.value.postrollSlotId != null) {
    this.context.addTemporalSlot(this.value.postrollSlotId, tv.freewheel.SDK.ADUNIT_POSTROLL, this.media.duration);
  }
  renderers = this.value.renderers;
  if ((renderers != null ? renderers.length : void 0) > 0) {
    for (_l = 0, _len3 = renderers.length; _l < _len3; _l++) {
      renderer = renderers[_l];
      this.context.addRenderer(renderer.url, renderer.baseUnit, renderer.contentType, renderer.slotType, renderer.soAdUnit, renderer.creativeApi, renderer.parameters);
    }
  }
  this.initialized = false;
  FreeWheelProxy.__super__.requestAd.call(this);
  this.context.submitRequest();
  try {
    this.facade.player.ui.ads.container.style.pointerEvents = "none";
  } catch (error) {

  }
};

/**
*/
FreeWheelProxy.prototype.reset = function() {
  FreeWheelProxy.__super__.reset.call(this);
  if (this.mediator != null) {
    this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, this.mediator);
    this.mediator = null;
  }
  this.facade.registerCommand(Notifications.PAUSED, AdContentPausedCommand);
};

/**
*/
FreeWheelProxy.prototype.onRequestComplete = function(event) {
  var createAdBreakVO, cues, pod, podPosition, slot, slots, _i, _j, _len, _len1, _ref,
    _this = this;
  cues = [];
  this.pods = [];
  createAdBreakVO = function(slot) {
    return new AdVO(slot.getCustomId(), slot.getCustomId(), slot.getTotalDuration(), 0, slot.getTimePositionClass().toLowerCase(), "freewheel", null, null, null, slot, slot.getAdCount(), slot.getTimePosition());
  };
  if (event.success) {
    slots = this.context.getTemporalSlots();
    for (_i = 0, _len = slots.length; _i < _len; _i++) {
      slot = slots[_i];
      switch (slot.getTimePositionClass()) {
        case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
          if (this.value.prerollSlotId != null) {
            this.pods.push(createAdBreakVO(slot));
            this.prerollSlots.push(slot);
          }
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
          if (this.value.midrollSlotId != null) {
            this.pods.push(createAdBreakVO(slot));
            cues.push(slot.getTimePosition());
            this.midrollSlots.push(slot);
          }
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
          if (this.value.postrollSlotId != null) {
            this.pods.push(createAdBreakVO(slot));
            this.postrollSlots.push(slot);
          }
          break;
        case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
          this.pods.push(createAdBreakVO(slot));
          this.overlaySlotsArray.push(slot);
      }
    }
  }
  if (cues.length > 0) {
    this.setCues(cues);
  }
  if (this.postrollSlots.length > 0) {
    this.sendNotification(Notifications.HAS_POST_CONTENT, true);
  }
  this.initialized = true;
  this.pods.sort(function(a, b) {
    return a.time - b.time;
  });
  podPosition = -1;
  _ref = this.pods;
  for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
    pod = _ref[_j];
    pod.position = pod.type !== "overlay" ? ++podPosition : podPosition;
  }
  this.sendNotification(AdNotifications.REQUEST_COMPLETE, {
    pods: this.pods
  });
  this.sendNotification(AdNotifications.RESPONSE, {
    pods: this.pods,
    response: event,
    context: this.context
  });
  if (this.playWhenLoaded === true) {
    this.startAd();
  }
};

/** @override
*/
FreeWheelProxy.prototype.breakStart = function() {
  var video;
  FreeWheelProxy.__super__.breakStart.call(this);
  this.adPosition = 1;
  this.playbackCore = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  this.playbackCore.setEnabled(false);
  this.getMediaElement().removeEventListener("playing", this.handlers.onResume);
  video = this.getMediaElement();
  video.addEventListener("playing", this.playbackCore.handlers.playing);
  video.addEventListener("pause", this.playbackCore.handlers.pause);
  video.addEventListener("waiting", this.playbackCore.handlers.waiting);
  video.addEventListener("seeking", this.handlers.seekupdate);
  this.timeout = setInterval(function() {
    return this.curTime = video.currentTime;
  }, 500);
  if (this.adVO.type === "midroll") {
    this.contentPause();
  }
  if (this.facade.player.playbackRate !== 1) {
    this.playbackRate = this.facade.player.playbackRate;
    this.facade.player.playbackRate = 1;
  }
};

/** Prevent seeking during pre-roll
*/
FreeWheelProxy.prototype.seekingHandler = function(event) {
  if (event.target.currentTime > this.curTime) {
    event.target.currentTime = this.curTime;
  }
};

/**
*/
FreeWheelProxy.prototype.onAdImpression = function(event) {
  var adType, ctrlBrHi, curBtm, metadata, qryString, rendition, _base, _ref, _ref1, _ref2;
  adType = (_ref = event.adInstance) != null ? typeof _ref.getSlot === "function" ? typeof (_base = _ref.getSlot()).getTimePositionClass === "function" ? _base.getTimePositionClass() : void 0 : void 0 : void 0;
  try {
    if (adType === tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY) {
      qryString = '[id^="_fw_ad_container_iframe_' + this.slot.getCustomId();
      curBtm = document.getElementById(document.querySelector(qryString).id).style.bottom;
      ctrlBrHi = window.getComputedStyle(document.getElementsByClassName("akamai-control-bar")[0]).height;
      if (parseInt(curBtm, 10) < parseInt(ctrlBrHi, 10)) {
        document.getElementById(document.querySelector(qryString).id).style.bottom = ctrlBrHi;
      }
    }
  } catch (_error) {}
  if (adType === tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY || adType === tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY) {
    return;
  }
  this.currentAd = event.adInstance;
  this.adVO.position = this.adPosition++;
  this.adVO.id = this.currentAd.getAdId();
  this.adVO.duration = (_ref1 = event.adInstance) != null ? _ref1.getDuration() : void 0;
  if ((this.slot != null) === !null) {
    metadata = {
      adtype: this.slot.getType()
    };
    this.updateAdMetadata(this.slot, metadata);
    this.adVO.metadata = metadata;
  }
  rendition = (_ref2 = this.currentAd) != null ? _ref2.getActiveCreativeRendition() : void 0;
  if (rendition != null) {
    this.adVO.metadata.adwidth = rendition.getWidth();
    this.adVO.metadata.adheight = rendition.getHeight();
  }
  this.sendNotification(AdNotifications.IMPRESSION, this.adVO);
  this.sendNotification(AdNotifications.AD_STARTED, this.adVO);
};

/**
*/
FreeWheelProxy.prototype.onAdEvent = function(event) {
  switch (event.subType) {
    case tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE:
      this.sendNotification(AdNotifications.FIRST_QUARTILE, this.adVO);
      break;
    case tv.freewheel.SDK.EVENT_AD_MIDPOINT:
      this.sendNotification(AdNotifications.MIDPOINT, this.adVO);
      break;
    case tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE:
      this.sendNotification(AdNotifications.THIRD_QUARTILE, this.adVO);
      break;
    case tv.freewheel.SDK.EVENT_AD_COMPLETE:
      this.sendNotification(AdNotifications.COMPLETE, this.adVO);
      break;
    case tv.freewheel.SDK.EVENT_ERROR:
      this.adVO.error = {};
      this.adVO.error.errorcode = event.errorCode;
      this.adVO.error.errorinfo = event.errorInfo;
      this.adVO.error.errormodule = event.errorModule;
      this.facade.sendNotification(Notifications.DISPATCH_EVENT, new Event("error", this.adVO));
  }
};

/**
*/
FreeWheelProxy.prototype.onAdImpressionEnd = function(event) {
  this.sendNotification(AdNotifications.AD_ENDED, this.adVO);
};

/**
*/
FreeWheelProxy.prototype.onAdClick = function(event) {
  var paused;
  paused = this.getMediaElement().paused;
  if (paused === false) {
    this.pause();
  }
  this.sendNotification(AdNotifications.AD_CLICKED, this.adVO);
};

/**
*/
FreeWheelProxy.prototype.onResume = function(event) {
  this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING);
  this.getMediaElement().removeEventListener("playing", this.handlers.onResume);
};

/**
*/
FreeWheelProxy.prototype.adTimeupdate = function(event) {
  try {
    if (this.slot != null) {
      this.currentAd = this.slot.getCurrentAdInstance();
      if (this.currentAd != null) {
        this.adVO.duration = this.currentAd.getDuration();
        this.sendNotification(AdNotifications.AD_TIME_UPDATE, this.currentAd.getPlayheadTime());
        this.sendNotification(AdNotifications.AD_TIME_REMAINING, this.currentAd.getDuration() - this.currentAd.getPlayheadTime());
      }
    }
  } catch (error) {
    this.facade.logger.error("[AMP FREEWHEEL ERROR]", error);
  }
};

/**
*/
FreeWheelProxy.prototype.onSlotStarted = function(event) {
  var prevSlot, prevSlotType, slot;
  prevSlot = this.slot;
  slot = event.slot;
  if (slot.getType() !== "temporal") {
    return;
  }
  if (prevSlot) {
    prevSlotType = typeof prevSlot.getTimePositionClass === "function" ? prevSlot.getTimePositionClass() : void 0;
    if ((prevSlotType === tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY) && this.isOverlayDisplayed) {
      if (typeof prevSlot.stop === "function") {
        prevSlot.stop();
      }
    }
  }
  this.slot = slot;
  this.getMediaElement().addEventListener("timeupdate", this.handlers.adtimeupdate);
};

/**
*/
FreeWheelProxy.prototype.onSlotEnded = function(event) {
  var complete, index, midroll, overlay, pod, slot, slotTimePositionClass;
  slot = event.slot;
  complete = event.skipped === true ? this.sendNotification.bind(this, AdNotifications.BREAK_SKIPPED, slot) : this.endBreak.bind(this);
  if (slot.getType() !== "temporal") {
    return;
  }
  this.getMediaElement().removeEventListener("timeupdate", this.handlers.adtimeupdate);
  slotTimePositionClass = slot.getTimePositionClass();
  pod = this.getPodById(slot.getCustomId());
  pod.locked = true;
  this.slot = null;
  switch (slotTimePositionClass) {
    case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
      if (this.prerollSlots.length) {
        this.prerollSlots.shift();
        if (this.prerollSlots.length) {
          this.playAd(this.prerollSlots[0]);
        } else {
          complete();
        }
      }
      break;
    case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
      index = this.midrollSlots.indexOf(this.nextMidroll);
      if (index > -1) {
        midroll = this.midrollSlots.splice(index, 1);
      }
      this.nextMidroll = null;
      complete();
      break;
    case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:
      this.isOverlayDisplayed = false;
      index = this.overlaySlotsArray.indexOf(this.nextOverlay);
      if (index > -1) {
        overlay = this.overlaySlotsArray.splice(index, 1);
      }
      this.nextOverlay = null;
      break;
    case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
      if (this.postrollSlots.length) {
        this.postrollSlots.shift();
        if (this.postrollSlots.length) {
          this.playAd(this.postrollSlots[0]);
        } else {
          complete();
        }
      }
  }
};

/**
*/
FreeWheelProxy.prototype.playAd = function(ad) {
  var activeCreativeRendition, adId, adInstance, adType, metadata, pod, _ref;
  pod = this.getPodById(ad.getCustomId());
  if ((pod != null ? pod.locked : void 0) === true) {
    this.onSlotEnded({
      slot: pod.metadata,
      skipped: true
    });
    return;
  }
  metadata = {
    adtype: ad.getType()
  };
  adInstance = ad != null ? (_ref = ad.getAdInstances()) != null ? _ref[0] : void 0 : void 0;
  if (adInstance != null) {
    adId = adInstance.getAdId();
    metadata.adunit = adInstance.getSoAdUnit();
    activeCreativeRendition = adInstance.getActiveCreativeRendition();
    if (activeCreativeRendition != null) {
      this.updateAdMetadata(ad, metadata);
    }
  }
  if (!(adId != null)) {
    adId = ad.getCustomId();
  }
  this.adVO = new AdVO(adId, ad.getCustomId(), (adInstance != null ? adInstance.getDuration() : NaN), this.adPosition, ad.getTimePositionClass().toLowerCase(), "freewheel", null, null, null, metadata, ad.getAdCount());
  this.sendNotification(AdNotifications.AD_LOADED, this.adVO);
  this.sendNotification(AdNotifications.AD_DURATION_CHANGE, this.adVO);
  adType = typeof ad.getTimePositionClass === "function" ? ad.getTimePositionClass() : void 0;
  if (adType !== tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY) {
    this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED);
    this.getMediaElement().load();
  }
  if (adType === tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY) {
    this.isOverlayDisplayed = true;
  }
  ad.play();
};

/** @override
*/
FreeWheelProxy.prototype.start = function() {
  if (this.canPlay() === true) {
    this.startAd();
  } else {
    this.playWhenLoaded = true;
  }
  return true;
};

/**
*/
FreeWheelProxy.prototype.canPlay = function() {
  return this.initialized === true;
};

/**
*/
FreeWheelProxy.prototype.startAd = function() {
  var adLocked, id, slot, _i, _len, _ref, _ref1;
  this.playWhenLoaded = false;
  if (this.prerollSlots.length) {
    adLocked = false;
    _ref = this.prerollSlots;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      slot = _ref[_i];
      id = slot.getCustomId();
      if (((_ref1 = this.getPodById(id)) != null ? _ref1.locked : void 0) === true) {
        adLocked = true;
      }
      if (adLocked) {
        this.breakEnd();
      } else {
        slot = this.prerollSlots[0];
        this.startBreak(this.getPodById(slot.getCustomId()));
        this.playAd(slot);
      }
    }
  } else {
    this.endBreak();
  }
};

/**
*/
FreeWheelProxy.prototype.play = function() {
  var _ref;
  FreeWheelProxy.__super__.play.call(this);
  this.getMediaElement().play();
  if ((_ref = this.slot) != null) {
    _ref.resume();
  }
  if (this.terminateAdOnPlay === true) {
    this.terminateAdOnPlay = false;
    this.terminateAd();
  }
};

/**
*/
FreeWheelProxy.prototype.pause = function() {
  var video, _ref;
  FreeWheelProxy.__super__.pause.call(this);
  video = this.getMediaElement();
  video.pause();
  if ((_ref = this.slot) != null) {
    _ref.pause();
  }
  setTimeout(function() {
    return video.controls = false;
  }, 0);
};

/**
*/
FreeWheelProxy.prototype.breakEnd = function() {
  var video,
    _this = this;
  FreeWheelProxy.__super__.breakEnd.call(this);
  if (this.playbackCore == null) {
    this.playbackCore = this.facade.player.retrieveProxy(PlayerProxy.NAME).getActivePlaybackCore();
  }
  video = this.getMediaElement();
  video.removeEventListener("playing", this.playbackCore.handlers.playing);
  video.removeEventListener("pause", this.playbackCore.handlers.pause);
  video.removeEventListener("waiting", this.playbackCore.handlers.waiting);
  video.removeEventListener("seeking", this.handlers.seekupdate);
  clearInterval(this.timeout);
  if (this.appState.getEnded()) {
    this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED);
  } else {
    this.playbackCore.setEnabled(true);
    setTimeout(function() {
      _this.contentPlay();
      if (_this.playbackRate != null) {
        _this.facade.player.playbackRate = _this.playbackRate;
        _this.playbackRate = null;
      }
      _this.getMediaElement().addEventListener("playing", _this.handlers.onResume);
    }, 1);
    setTimeout(function() {
      _this.engageMidrollCheck();
      _this.engageOverlayCheck();
    }, 500);
    return;
  }
};

/** @override
*/
FreeWheelProxy.prototype.contentStarted = function() {
  this.engageMidrollCheck();
  this.engageOverlayCheck();
};

/** @override
*/
FreeWheelProxy.prototype.contentSeek = function(time) {
  var nextime;
  if (this.appState.getSeekRequested() === true) {
    return;
  }
  this.nextMidroll = this.getPreviousMidroll(time);
  this.nextOverlay = this.getPreviousOverlay(time);
  if (!(this.nextMidroll != null)) {
    this.nextMidroll = this.getNextMidroll(time);
    if (this.nextMidroll != null) {
      nextime = this.nextMidroll.getTimePosition();
      if (nextime - time < 1 || time < nextime) {
        this.nextMidroll = null;
      }
    }
    return;
  }
  if (!(this.nextOverlay != null)) {
    this.nextOverlay = this.getNextOverlay(time);
    return;
  }
  if (!this.midrollEngaged) {
    this.engageMidrollCheck();
  }
  if (!this.overlayEngaged) {
    this.engageOverlayCheck();
  }
};

/** @override
*/
FreeWheelProxy.prototype.contentEnded = function() {
  var _ref,
    _this = this;
  this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED);
  if (((_ref = this.postrollSlots) != null ? _ref.length : void 0)) {
    setTimeout(function() {
      var slot;
      slot = _this.postrollSlots[0];
      _this.startBreak(_this.getPodById(slot.getCustomId()));
      _this.playAd(slot);
    }, 0);
  } else {
    this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED);
  }
};

/**
*/
FreeWheelProxy.prototype.engageMidrollCheck = function() {
  var _ref;
  if (((_ref = this.midrollSlots) != null ? _ref.length : void 0) === 0 || this.midrollEngaged === true) {
    return;
  }
  this.midrollEngaged = true;
  this.getMediaElement().addEventListener("timeupdate", this.handlers.timeupdate);
};

FreeWheelProxy.prototype.disengageMidrollCheck = function() {
  this.midrollEngaged = false;
  this.getMediaElement().removeEventListener("timeupdate", this.handlers.timeupdate);
};

FreeWheelProxy.prototype.engageOverlayCheck = function() {
  var _ref;
  if (((_ref = this.overlaySlotsArray) != null ? _ref.length : void 0) === 0 || this.overlayEngaged === true) {
    return;
  }
  this.overlayEngaged = true;
  this.getMediaElement().addEventListener("timeupdate", this.handlers.overlaytimeupdate);
};

FreeWheelProxy.prototype.disengageOverlayCheck = function() {
  this.overlayEngaged = false;
  this.getMediaElement().removeEventListener("timeupdate", this.handlers.overlaytimeupdate);
};

/**
*/
FreeWheelProxy.prototype.midrollCheck = function(event) {
  var count, cur, next, nextime, pod, time, _base;
  if (this.getMediaElement().paused) {
    return;
  }
  if (this.appState.getSeeking() === true || this.appState.getSeekRequested() === true) {
    return;
  }
  time = this.playbackCore.getCurrentTime();
  if (!(this.nextMidroll != null)) {
    next = this.getNextMidroll(time);
    cur = this.getPreviousMidroll(time);
    if ((cur != null) && time >= (cur != null ? cur.getTimePosition() : void 0) && (!(next != null) || ((next != null) && time <= next.getTimePosition()))) {
      this.nextMidroll = cur;
    }
    return;
  }
  nextime = this.nextMidroll.getTimePosition();
  if (time < nextime) {
    return;
  }
  count = typeof (_base = this.nextMidroll).getAdCount === "function" ? _base.getAdCount() : void 0;
  pod = this.getPodById(this.nextMidroll.getCustomId());
  if (!(count != null) || pod.locked) {
    return;
  }
  if (count === 0) {
    this.onSlotEnded({
      slot: this.nextMidroll,
      skipped: true
    });
    return;
  }
  this.disengageMidrollCheck();
  this.disengageOverlayCheck();
  this.adVO.type = "midroll";
  this.startBreak(this.getPodById(this.nextMidroll.getCustomId()));
  this.engageAds();
  this.playAd(this.nextMidroll);
};

/**
*/
FreeWheelProxy.prototype.getNextMidroll = function(time) {
  var midroll, _i, _len, _ref;
  time = time >= 0 ? time : 0;
  _ref = this.midrollSlots;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    midroll = _ref[_i];
    if (time < midroll.getTimePosition()) {
      return midroll;
    }
  }
};

/**
*/
FreeWheelProxy.prototype.getPreviousMidroll = function(time) {
  var midroll, pod, pods, _i, _len;
  pods = this.pods.slice().reverse();
  for (_i = 0, _len = pods.length; _i < _len; _i++) {
    pod = pods[_i];
    if (!(pod.type === "midroll")) {
      continue;
    }
    midroll = pod.metadata;
    if (time > midroll.getTimePosition()) {
      if (pod.locked !== true) {
        return midroll;
      } else {
        return null;
      }
    }
  }
};

FreeWheelProxy.prototype.overlayCheck = function(event) {
  var count, _base;
  if (this.getMediaElement().paused) {
    return;
  }
  if (this.appState.getSeeking() === true || this.appState.getSeekRequested() === true) {
    return;
  }
  if (!(this.nextOverlay != null)) {
    this.nextOverlay = this.getNextOverlay(this.playbackCore.getCurrentTime());
    return;
  }
  if (this.playbackCore.getCurrentTime() < this.nextOverlay.getTimePosition()) {
    return;
  }
  count = typeof (_base = this.nextOverlay).getAdCount === "function" ? _base.getAdCount() : void 0;
  if (!(count != null)) {
    return;
  }
  if (count === 0) {
    this.onSlotEnded({
      slot: this.nextOverlay,
      skipped: true
    });
    return;
  }
  this.disengageOverlayCheck();
  this.adVO.type = "overlay";
  this.playAd(this.nextOverlay);
};

/**
*/
FreeWheelProxy.prototype.getNextOverlay = function(time) {
  var overlay, _i, _len, _ref;
  time = time >= 0 ? time : 0;
  _ref = this.overlaySlotsArray;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    overlay = _ref[_i];
    if (time < overlay.getTimePosition()) {
      return overlay;
    }
  }
};

/**
*/
FreeWheelProxy.prototype.getPreviousOverlay = function(time) {
  var overlay, pod, pods, _i, _len;
  pods = this.pods.slice().reverse();
  for (_i = 0, _len = pods.length; _i < _len; _i++) {
    pod = pods[_i];
    if (!(pod.type === "overlay")) {
      continue;
    }
    overlay = pod.metadata;
    if (time > overlay.getTimePosition()) {
      if (pod.locked !== true) {
        return overlay;
      } else {
        return null;
      }
    }
  }
};

/**
*/
FreeWheelProxy.prototype.terminateAd = function() {
  var _base;
  if (this.started === true && this.getMediaElement().paused === true) {
    this.terminateAdOnPlay = true;
    return;
  }
  if (this.slot != null) {
    if (this.slot.getTimePositionClass() === tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL) {
      this.sendNotification(Notifications.HAS_POST_CONTENT, false);
    }
    if (typeof (_base = this.slot).stop === "function") {
      _base.stop();
    }
  }
};

/**
*/
FreeWheelProxy.prototype.terminateAllAds = function(listeners) {
  if (listeners === true && (this.context != null)) {
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.handlers.onRequestComplete);
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.handlers.onSlotStarted);
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.handlers.onSlotEnded);
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION, this.handlers.onAdImpression);
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, this.handlers.onAdImpressionEnd);
    this.context.removeEventListener(tv.freewheel.SDK.EVENT_ERROR, this.handlers.onAdEvent);
  }
  this.terminateAd();
  this.prerollSlots = [];
  this.midrollSlots = [];
  this.postrollSlots = [];
  this.overlaySlotsArray = [];
  this.nextMidroll = null;
  this.disengageMidrollCheck();
  this.disengageOverlayCheck();
  this.sendNotification(Notifications.HAS_POST_CONTENT, false);
  this.isOverlayDisplayed = false;
};

/**
*/
FreeWheelProxy.prototype.getCreativeParameters = function(instance) {
  var param, payload, value, _i, _len, _ref;
  if (this.config.creativeParameters && instance) {
    value = null;
    payload = {};
    _ref = this.config.creativeParameters;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      param = _ref[_i];
      value = null;
      try {
        value = instance.getActiveCreativeRendition().getParameter(param);
      } catch (error) {
        this.facade.logger.warn("[AMP FREEWHEEL WARNING]", "Could not retrieve Freewheel creative parameter: " + param, error);
      } finally {
        if (value) {
          payload[param] = value;
        }
      }
    }
  }
  return payload;
};

FreeWheelProxy.prototype.contentPaused = function() {
  if (!this.getInProgress()) {
    this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED);
    this.getMediaElement().addEventListener("playing", this.handlers.onResume);
  }
};

/**
*/
FreeWheelProxy.prototype.setVolume = function(value) {
  var _ref;
  if ((_ref = this.context) != null) {
    _ref.setAdVolume(value);
  }
  return value;
};

/**
*/
FreeWheelProxy.prototype.destroy = function() {
  this.terminateAllAds(true);
};

/**
*/
FreeWheelProxy.prototype.updateAdMetadata = function(ad, metadata) {
  var creativeParameters, id, instance, key, rendition, val, _i, _len, _ref;
  if ((ad != null) && (metadata != null)) {
    metadata.time = ad.getTimePosition();
    instance = ad.getCurrentAdInstance();
    if (instance != null) {
      rendition = instance.getActiveCreativeRendition();
    }
    if (rendition != null) {
      for (key in rendition) {
        val = rendition[key];
        if (key.indexOf('get') === 0 && typeof val === 'function') {
          metadata[key.substring(3).toLowerCase()] = val();
        }
      }
      metadata.baseunit = rendition.getBaseUnit();
      creativeParameters = this.value.creativeParameters;
      if (creativeParameters != null) {
        metadata.creativeparameters = {};
        _ref = ad.getAdInstances();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          instance = _ref[_i];
          id = instance.getAdId();
          metadata.creativeparameters[id] = this.getCreativeParameters(instance);
        }
      }
    }
  }
  return metadata;
};

/**
*/
FreeWheelProxy.prototype.replay = function() {
  this.playWhenLoaded = true;
};

/** 
 * The StatsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function StatsPlugin() {
  StatsPlugin.__super__.constructor.call(this);
}


__extends(StatsPlugin, Plugin);


StatsPlugin.prototype.moduleName = "stats";

/** @override
*/
StatsPlugin.prototype.createModel = function() {
  this.proxy = new StatsProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
StatsPlugin.prototype.createController = function() {
  StatsPlugin.__super__.createController.call(this);
  this.registerCommand(StatsNotifications.VISIBILITY_CHANGE, StatsVisibilityChangeCommand);
};

/** @override
*/
StatsPlugin.prototype.createView = function() {
  this.registerMediator(new StatsMediator());
};

/**
*/
StatsPlugin.prototype.listNotificationInterests = function() {
  return [Notifications.PLAYING, Notifications.TIME_UPDATE];
};

/** @override
*/
StatsPlugin.prototype.listNotificationPublications = function() {
  return StatsPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE, StatsNotifications.VISIBILITY_CHANGE]);
};

/**
 * @return   {boolean}  A boolean indicating whether or not the stats are hidden.
 * @expose
*/
StatsPlugin.prototype.getHidden = function() {
  return this.proxy.getHidden();
};

/**
 * 
 * @param   {boolean} value A boolean indicating whether or not the stats are hidden.
 * @expose
*/
StatsPlugin.prototype.setHidden = function(value) {
  this.sendNotification(StatsNotifications.VISIBILITY_CHANGE, value);
  return value;
};


AMP.registerPlugin("stats", "html", StatsPlugin);

/** 
 * The IMAProxy class.
 *   
 * @constructor
 * @private 
 * @extends {AdProxy}
 * @param {Object} config
*/
function MOATProxy(config) {
  MOATProxy.__super__.constructor.call(this, config);
}


__extends(MOATProxy, PluginProxy);


/** @static
*/
MOATProxy.NAME = ModuleProxy.NAME;

MOATProxy.prototype.defaults = {
  data: {
    partnerCode: null
  }
};

/**
*/
MOATProxy.prototype.initSDK = function(adsManagerVO) {
  var data, _ref;
  if (typeof initMoatTracking !== "undefined" && initMoatTracking !== null) {
    data = (_ref = this.getConfigurationData()) != null ? _ref.data : void 0;
    initMoatTracking(adsManagerVO.adManager, {
      "partnerCode": data.partnerCode,
      "viewMode": adsManagerVO.viewMode,
      "slicer1": data.slicer1,
      "slicer2": data.slicer2
    }, adsManagerVO.adContainer);
  }
};

function MOATWrapper() {
  return MOATWrapper.__super__.constructor.apply(this, arguments);
}


__extends(MOATWrapper, PluginWrapper);


MOATWrapper.NAME = "MOATWrapper";

MOATWrapper.prototype.flashPlugins = [
  {
    id: "MOATAnalyticsPlugin",
    src: '#{paths.resources}plugins/MOATAnalyticsPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "MOATAnalyticsPlugin"
  }
];

/** @override
*/
MOATWrapper.prototype.createXML = function(xml) {
  var application, metrics, prop, props, vendor, _i, _len;
  application = xml.firstChild;
  metrics = xml.getElementsByTagName("metrics")[0];
  if (!(metrics != null)) {
    metrics = xml.createElement("metrics");
    application.appendChild(metrics);
  }
  vendor = xml.createElement("vendor");
  vendor.setAttribute("id", "moat");
  metrics.appendChild(vendor);
  props = [
    {
      value: this.config.data.partnerCode,
      key: "partnerCode"
    }, {
      value: this.config.data.slicer1,
      key: "slicer1"
    }, {
      value: this.config.data.slicer2,
      key: "slicer2"
    }
  ];
  for (_i = 0, _len = props.length; _i < _len; _i++) {
    prop = props[_i];
    if (prop.value != null) {
      this.createProperty(xml, prop.key, prop.value, vendor);
    }
  }
  return xml;
};

/**
 * The MOATAdManagerLoadedCommand class.
 *   
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function MOATAdManagerLoadedCommand() {
  MOATAdManagerLoadedCommand.__super__.constructor.call(this);
}


__extends(MOATAdManagerLoadedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 * 
 * @param {puremvc.Notification} notification 
 *    The notification.
 * 
 * @override
*/
MOATAdManagerLoadedCommand.prototype.execute = function(notification) {
  var moatProxy;
  moatProxy = this.facade.retrieveProxy(MOATProxy.NAME);
  if (notification.getBody()) {
    moatProxy.initSDK(notification.getBody());
  }
};

/** 
 * @constructor 
 * @private
*/
function FreeWheelPlugin() {
  FreeWheelPlugin.__super__.constructor.call(this);
}


__extends(FreeWheelPlugin, AdPlugin);


FreeWheelPlugin.prototype.moduleName = "freewheel";

FreeWheelPlugin.prototype.featureName = "ads";

/** @override
*/
FreeWheelPlugin.prototype.createProxy = function() {
  return new FreeWheelProxy(this.config);
};

/** @override
*/
FreeWheelPlugin.prototype.isFullscreenDevice = function() {
  return false;
};


AMP.registerPlugin("freewheel", "html", FreeWheelPlugin);
AMP.registerPlugin("freewheel", "flash", FreeWheelWrapper);

/**
 * The PlaylistMediator class.
 * 
 * @constructor
 * @private
 * @extends {PluginMediator}
 * @param {Object} viewComponent
*/
function PlaylistMediator(viewComponent) {
  PlaylistMediator.__super__.constructor.call(this, viewComponent);
}


__extends(PlaylistMediator, PluginMediator);


/**
 * Stats Mediator
 * 
 * @static
 * @type {string}
*/
PlaylistMediator.prototype.componentName = "playlist";

PlaylistMediator.prototype.playlistButton = null;

/**
 * @override
*/
PlaylistMediator.prototype.onRegister = function() {
  var button;
  button = new ButtonMediator(null, this.viewComponent, null, "playlist", this.playlistOnClick.bind(this));
  this.facade.registerMediator(button);
  this.playlistButton = button.getViewComponent();
  this.sendNotification(Notifications.ADD_CONTROL, this.playlistButton);
  this.sendNotification(Notifications.ADD_CONTROL_STATE, "playlist-enabled");
  PlaylistMediator.__super__.onRegister.call(this);
};

PlaylistMediator.prototype.playlistOnClick = function(event) {
  this.facade.logger.debug('AMP Event: Playlist Clicked');
};

/** 
 * The MOATPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {AdPlugin}
*/
function MOATPlugin() {
  MOATPlugin.__super__.constructor.call(this);
}


__extends(MOATPlugin, Plugin);


MOATPlugin.prototype.moduleName = "moat";

/** @override
*/
MOATPlugin.prototype.createModel = function() {
  this.proxy = new MOATProxy(this.config);
  this.registerProxy(this.proxy);
};

/** @override
*/
MOATPlugin.prototype.createController = function() {
  MOATPlugin.__super__.createController.call(this);
  return this.registerCommand(AdNotifications.AD_MANAGER_LOADED, MOATAdManagerLoadedCommand);
};

/** @override
*/
MOATPlugin.prototype.listNotificationInterests = function() {
  return [AdNotifications.AD_MANAGER_LOADED];
};


AMP.registerPlugin("moat", "html", MOATPlugin);
AMP.registerPlugin("moat", "flash", MOATWrapper);

function AdChoicesWrapper() {
  return AdChoicesWrapper.__super__.constructor.apply(this, arguments);
}


__extends(AdChoicesWrapper, PluginWrapper);


AdChoicesWrapper.NAME = "AdChoicesWrapper";

AdChoicesWrapper.prototype.flashView = {
  elements: {
    adOptions: {
      elements: {
        adChoices: {
          attributes: {
            target: "http://www.akamai.com/"
          }
        }
      }
    }
  }
};

/**
 * The AdChoicesMediator class.
 * 
 * @constructor
 * @extends {ComponentMediator}
 * @private
*/
function AdChoicesMediator() {
  AdChoicesMediator.__super__.constructor.call(this);
}


__extends(AdChoicesMediator, ComponentMediator);


AdChoicesMediator.prototype.componentName = "ad-choices";

AdChoicesMediator.prototype.icon = null;

AdChoicesMediator.prototype.text = null;

AdChoicesMediator.prototype.container = null;

/**
 * @override
*/
AdChoicesMediator.prototype.onRegister = function() {
  var data;
  AdChoicesMediator.__super__.onRegister.call(this);
  data = this.facade.retrieveProxy(ModuleProxy.NAME);
  this.container = this.create("ad-choices-link", this, "a");
  this.container.target = "_blank";
  this.container.href = data.getTarget();
  this.text = this.createText("ad-choices-text", "AdChoices", this.container);
  this.icon = this.create("ad-choices-icon", this.container);
};

/**
 * @override
*/
AdChoicesMediator.prototype.listNotificationInterests = function() {
  return [AdNotifications.AD_CONTAINER_CREATED];
};

/**
 * @override
*/
AdChoicesMediator.prototype.handleNotification = function(notification) {
  var container;
  switch (notification.getName()) {
    case AdNotifications.AD_CONTAINER_CREATED:
      container = notification.getBody();
      if (container != null) {
        container.appendChild(this.viewComponent);
      }
  }
};

/**
 *
*/
/** @constructor
*/
function AdChoicesProxy(config) {
  AdChoicesProxy.__super__.constructor.call(this, config);
}


__extends(AdChoicesProxy, ModuleProxy);


/** @static
*/
AdChoicesProxy.NAME = ModuleProxy.NAME;

AdChoicesProxy.prototype.defaults = {
  target: null
};

/**
 *
*/
AdChoicesProxy.prototype.getTarget = function() {
  return this.data.target;
};

AdChoicesProxy.prototype.setTarget = function(value) {
  return this.data.target = value;
};

/** 
 * The PlaylistPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function PlaylistPlugin() {
  PlaylistPlugin.__super__.constructor.call(this);
}


__extends(PlaylistPlugin, Plugin);


PlaylistPlugin.prototype.moduleName = "playlist";

/** @override
*/
PlaylistPlugin.prototype.createView = function() {
  this.registerMediator(new PlaylistMediator());
};

/** @override
*/
PlaylistPlugin.prototype.listNotificationPublications = function() {
  return PlaylistPlugin.__super__.listNotificationPublications.call(this).concat([Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL, Notifications.ADD_CONTROL_STATE, Notifications.REMOVE_CONTROL_STATE]);
};


AMP.registerPlugin("playlist", "html", PlaylistPlugin);

function UplynkWrapper(player, config) {
  UplynkWrapper.__super__.constructor.call(this, player, config);
}


__extends(UplynkWrapper, PluginWrapper);


UplynkWrapper.NAME = "UplynkWrapper";

UplynkWrapper.prototype.flashPlugins = [
  {
    id: "UplynkStreamingPlugin",
    src: '#{paths.resources}plugins/latest_upLynkOsmfPlugin.swf',
    host: "osmf",
    main: '#{paths.resources}plugins/latest_upLynkOsmfPlugin.swf',
    type: "application/x-shockwave-flash"
  }
];

/** 
 * The AdChoicesPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function AdChoicesPlugin() {
  AdChoicesPlugin.__super__.constructor.call(this);
}


__extends(AdChoicesPlugin, Plugin);


AdChoicesPlugin.prototype.moduleName = "adchoices";

/** @override
*/
AdChoicesPlugin.prototype.createModel = function() {
  this.registerProxy(new AdChoicesProxy(this.config));
};

/** @override
*/
AdChoicesPlugin.prototype.createView = function() {
  this.registerMediator(new AdChoicesMediator());
};

/**
 * @override
*/
AdChoicesPlugin.prototype.listNotificationInterests = function() {
  return [AdNotifications.AD_CONTAINER_CREATED];
};


AMP.registerPlugin("adchoices", "html", AdChoicesPlugin);
AMP.registerPlugin("adchoices", "flash", AdChoicesWrapper);

function CustomAuthWrapper(player, config) {
  CustomAuthWrapper.__super__.constructor.call(this, player, config);
}


__extends(CustomAuthWrapper, PluginWrapper);


CustomAuthWrapper.NAME = "CustomAuthWrapper";

CustomAuthWrapper.prototype.flashPlugins = [
  {
    id: "AuthenticationSamplePlugin",
    src: '#{paths.resources}plugins/AuthenticationSamplePlugin.swf',
    blocking: false,
    host: "akamai",
    main: "AuthenticationSamplePlugin",
    type: "application/x-shockwave-flash"
  }
];


AMP.registerPlugin("customauth", "flash", CustomAuthWrapper);

/** 
 * The MediaAnalyticsPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function UplynkPlugin() {
  UplynkPlugin.__super__.constructor.call(this);
}


__extends(UplynkPlugin, Plugin);


UplynkPlugin.prototype.moduleName = "uplynk";


AMP.registerPlugin("uplynk", "html", UplynkPlugin);
AMP.registerPlugin("uplynk", "flash", UplynkWrapper);

/** 
 * @constructor
 * @private
*/
function LinkedMenuWrapper(player, config) {
  if (config == null) {
    config = {};
  }
  LinkedMenuWrapper.__super__.constructor.call(this, player, config);
}


__extends(LinkedMenuWrapper, PluginWrapper);


LinkedMenuWrapper.NAME = "LinkedMenuWrapper";

LinkedMenuWrapper.prototype.flashPlugins = [
  {
    id: "LinkedMenuPlugin",
    src: '#{paths.resources}plugins/LinkedMenuPlugin.swf',
    blocking: false,
    host: "akamai",
    main: "LinkedMenuPlugin"
  }
];


AMP.registerPlugin("linkedmenu", "flash", LinkedMenuWrapper);

function ChartbeatAnalyticsStrategy(player) {
  this._player = player;
}

ChartbeatAnalyticsStrategy.prototype.ContentType = {
  AD: 'ad',
  CONTENT: 'ct'
};

ChartbeatAnalyticsStrategy.prototype.AdPosition = {
  PREROLL: 'a1',
  MIDROLL: 'a2',
  POSTROLL: 'a3',
  OVERLAY: 'a4',
  SPECIAL: 'a5'
};

ChartbeatAnalyticsStrategy.prototype.VideoState = {
  UNPLAYED: 's1',
  PLAYED: 's2',
  STOPPED: 's3',
  COMPLETED: 's4'
};

ChartbeatAnalyticsStrategy.prototype.media = null;

ChartbeatAnalyticsStrategy.prototype.facade = null;

ChartbeatAnalyticsStrategy.prototype.cur_position = 0;

ChartbeatAnalyticsStrategy.prototype.queryInterval = 2;

ChartbeatAnalyticsStrategy.prototype.timer = null;

ChartbeatAnalyticsStrategy.prototype.isPlayerReady = false;

ChartbeatAnalyticsStrategy.prototype._player = null;

ChartbeatAnalyticsStrategy.prototype.contentType = null;

ChartbeatAnalyticsStrategy.prototype.adType = "";

ChartbeatAnalyticsStrategy.prototype.playbackState = ChartbeatAnalyticsStrategy.prototype.VideoState.UNPLAYED;

ChartbeatAnalyticsStrategy.prototype.videoStartTime = null;

ChartbeatAnalyticsStrategy.prototype.isReady = function() {
  return this.isPlayerReady;
};

ChartbeatAnalyticsStrategy.prototype.getTitle = function() {
  var _ref;
  return (_ref = this.media) != null ? _ref.title : void 0;
};

ChartbeatAnalyticsStrategy.prototype.getVideoPath = function() {
  var _ref;
  return (_ref = this.media) != null ? _ref.src : void 0;
};

ChartbeatAnalyticsStrategy.prototype.getContentType = function() {
  return this.contentType;
};

ChartbeatAnalyticsStrategy.prototype.getAdPosition = function() {
  return this.adType;
};

ChartbeatAnalyticsStrategy.prototype.getTotalDuration = function() {
  var _ref;
  return ((_ref = this.media) != null ? _ref.duration : void 0) * 1000;
};

ChartbeatAnalyticsStrategy.prototype.getState = function() {
  return this.playbackState;
};

ChartbeatAnalyticsStrategy.prototype.getCurrentPlayTime = function() {
  var currentPosition;
  currentPosition = null;
  if (this.media.isLive) {
    this.cur_position = Math.floor(Date.now() / 1000);
  } else {
    this.cur_position = this.facade.player.getCurrentTime().toFixed(1);
    if (Math.abs(this.timer - this.cur_position) > this.queryInterval) {
      this.timer = this.cur_position;
    }
  }
  return this.cur_position;
};

ChartbeatAnalyticsStrategy.prototype.getBitrate = function() {
  var value;
  value = NaN;
  try {
    value = this.facade.player.getQuality();
  } catch (_error) {}
  return value;
};

ChartbeatAnalyticsStrategy.prototype.getThumbnailPath = function() {
  return this.facade.player.getMedia().poster;
};

ChartbeatAnalyticsStrategy.prototype.getViewStartTime = function() {
  if (this.videoStartTime != null) {
    return Math.round(new Date().getTime() - this.videoStartTime);
  } else {
    return 0;
  }
};

ChartbeatAnalyticsStrategy.verify = function(player) {
  return true;
};

ChartbeatAnalyticsStrategy.prototype.onVideoStart = function() {
  this.videoStartTime = new Date().getTime();
};

ChartbeatAnalyticsStrategy.prototype.onVideoEnd = function() {
  this.videoStartTime = null;
};

/** 
 * The CustomAuthPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function CustomAuthPlugin() {
  CustomAuthPlugin.__super__.constructor.call(this);
}


__extends(CustomAuthPlugin, Plugin);


CustomAuthPlugin.prototype.moduleName = "customauth";


AMP.registerPlugin("customauth", "html", CustomAuthPlugin);

/**
 * The ChartbeatAnalyticsStartCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsStartCommand() {
  ChartbeatAnalyticsStartCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsStartCommand.prototype.execute = function(notification) {
  var chartbeatanalytics;
  chartbeatanalytics = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeatanalytics.start();
};

/**
 * The ChartbeatAnalyticsAdStartCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsAdStartCommand() {
  ChartbeatAnalyticsAdStartCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsAdStartCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsAdStartCommand.prototype.execute = function(notification) {
  var chartbeat;
  chartbeat = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeat.adStart(notification.body);
};

/**
 * The ChartbeatAnalyticsAdEndCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsAdEndCommand() {
  ChartbeatAnalyticsAdEndCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsAdEndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsAdEndCommand.prototype.execute = function(notification) {
  var chartbeat;
  chartbeat = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeat.adEnd(notification.body);
};

/**
 * The ChartbeatAnalyticsEndCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsEndCommand() {
  ChartbeatAnalyticsEndCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsEndCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsEndCommand.prototype.execute = function(notification) {
  var chartbeat;
  chartbeat = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeat.end();
};

/**
 * The ChartbeatAnalyticsMediaChangeCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsMediaChangeCommand() {
  ChartbeatAnalyticsMediaChangeCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsMediaChangeCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsMediaChangeCommand.prototype.execute = function(notification) {
  var chartbeat;
  chartbeat = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeat.contentChanged(notification.body);
};

/**
 * The ChartbeatAnalyticsPausedCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsPausedCommand() {
  ChartbeatAnalyticsPausedCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsPausedCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsPausedCommand.prototype.execute = function(notification) {
  var chartbeatanalytics;
  chartbeatanalytics = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeatanalytics.paused();
};

/**
 * The ChartbeatAnalyticsCanPlayCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsCanPlayCommand() {
  ChartbeatAnalyticsCanPlayCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsCanPlayCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsCanPlayCommand.prototype.execute = function(notification) {
  var chartbeatanalytics;
  chartbeatanalytics = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeatanalytics.canPlay(notification.body);
};

/**
 * The ChartbeatAnalyticsPlayingCommand class.
 *
 * @constructor
 * @private
 * @extends {puremvc.SimpleCommand}
*/
function ChartbeatAnalyticsPlayingCommand() {
  ChartbeatAnalyticsPlayingCommand.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsPlayingCommand, puremvc.SimpleCommand);


/**
 * Executes the command.
 *
 * @param {puremvc.Notification} notification
 *    The notification.
 *
 * @override
*/
ChartbeatAnalyticsPlayingCommand.prototype.execute = function(notification) {
  var chartbeatanalytics;
  chartbeatanalytics = this.facade.retrieveProxy(ChartbeatAnalyticsProxy.NAME);
  chartbeatanalytics.playing();
};

/**
 * @constructor
 * @private
 * @extends {PluginWrapper}
*/
function ChartbeatAnalyticsWrapper(player, config) {
  this.plugin = new ChartbeatAnalyticsPlugin();
  this.plugin.oninitialized = player.registerModule.bind(player, this.plugin);
  this.plugin.initialize(config, player);
  ChartbeatAnalyticsWrapper.__super__.constructor.call(this, player, config);
}


__extends(ChartbeatAnalyticsWrapper, PluginWrapper);


ChartbeatAnalyticsWrapper.NAME = "ChartbeatAnalyticsWrapper";

/**
 * @constructor
 * @private
*/
function ChartbeatAnalyticsProxy(config) {
  ChartbeatAnalyticsProxy.__super__.constructor.call(this, config);
  return;
}


__extends(ChartbeatAnalyticsProxy, PluginProxy);


/** @static
*/
ChartbeatAnalyticsProxy.NAME = ModuleProxy.NAME;

ChartbeatAnalyticsProxy.prototype.defaults = {
  data: null,
  events: null,
  plugin: {
    js: "//static.chartbeat.com/js/chartbeat_video.js"
  }
};

ChartbeatAnalyticsProxy.prototype.media = null;

ChartbeatAnalyticsProxy.prototype.initialize = function() {
  var mediaElement, _cbv;
  try {
    mediaElement = this.facade.player.getMediaElement();
    ChartbeatAnalyticsStrategy.prototype._player = mediaElement;
    ChartbeatAnalyticsStrategy.prototype.facade = this.facade;
    window['_cbv_strategies'] = window['_cbv_strategies'] || [];
    window['_cbv_strategies'].push(ChartbeatAnalyticsStrategy);
    _cbv = window._cbv || (window._cbv = []);
    _cbv.push(mediaElement);
    this.setConfigMetadata();
  } catch (_error) {}
  AMP.addResources(this.facade.pluginResources);
  ChartbeatAnalyticsProxy.__super__.initialize.call(this);
};

ChartbeatAnalyticsProxy.prototype.setConfigMetadata = function() {
  var configMetadata, key, value, _ref, _sf_async_config;
  _sf_async_config = window._sf_async_config = {};
  configMetadata = (_ref = this.value) != null ? _ref.data : void 0;
  if (configMetadata != null) {
    for (key in configMetadata) {
      value = configMetadata[key];
      if (value !== "null") {
        _sf_async_config[key] = value;
      }
    }
  }
};

ChartbeatAnalyticsProxy.prototype.contentChanged = function() {
  this.media = this.facade.player.getMedia();
  this.setConfigMetadata();
  ChartbeatAnalyticsStrategy.prototype.media = this.media;
  ChartbeatAnalyticsStrategy.prototype.playbackState = ChartbeatAnalyticsStrategy.prototype.VideoState.UNPLAYED;
  ChartbeatAnalyticsStrategy.prototype.isPlayerReady = true;
};

/** Ad start event handler
*/
ChartbeatAnalyticsProxy.prototype.adStart = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.contentType = ChartbeatAnalyticsStrategy.prototype.ContentType.AD;
  if ((adVO != null ? adVO.type : void 0) === "preroll") {
    ChartbeatAnalyticsStrategy.prototype.adType = ChartbeatAnalyticsStrategy.prototype.AdPosition.PREROLL;
  }
  if ((adVO != null ? adVO.type : void 0) === "midroll") {
    ChartbeatAnalyticsStrategy.prototype.adType = ChartbeatAnalyticsStrategy.prototype.AdPosition.MIDROLL;
  }
  if ((adVO != null ? adVO.type : void 0) === "postroll") {
    ChartbeatAnalyticsStrategy.prototype.adType = ChartbeatAnalyticsStrategy.prototype.AdPosition.POSTROLL;
  }
};

/** ad end event handler
*/
ChartbeatAnalyticsProxy.prototype.adEnd = function(adVO) {
  if ((adVO != null ? adVO.type : void 0) === "postroll") {
    ChartbeatAnalyticsStrategy.prototype.contentType = ChartbeatAnalyticsStrategy.prototype.ContentType.CONTENT;
  }
};

/** Media Started Event Handler
*/
ChartbeatAnalyticsProxy.prototype.start = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.contentType = ChartbeatAnalyticsStrategy.prototype.ContentType.CONTENT;
  ChartbeatAnalyticsStrategy.prototype.onVideoStart();
};

ChartbeatAnalyticsProxy.prototype.playing = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.contentType = ChartbeatAnalyticsStrategy.prototype.ContentType.CONTENT;
  ChartbeatAnalyticsStrategy.prototype.playbackState = ChartbeatAnalyticsStrategy.prototype.VideoState.PLAYED;
};

/** Media Ended Event Handler
*/
ChartbeatAnalyticsProxy.prototype.end = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.playbackState = ChartbeatAnalyticsStrategy.prototype.VideoState.COMPLETED;
  ChartbeatAnalyticsStrategy.prototype.onVideoEnd();
};

/** Media Ended Event Handler
*/
ChartbeatAnalyticsProxy.prototype.paused = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.playbackState = ChartbeatAnalyticsStrategy.prototype.VideoState.STOPPED;
};

ChartbeatAnalyticsProxy.prototype.canPlay = function(adVO) {
  ChartbeatAnalyticsStrategy.prototype.playbackReady = true;
};

/** 
 * The LinkedMenuPlugin class.
 *   
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function LinkedMenuPlugin() {
  LinkedMenuPlugin.__super__.constructor.call(this);
}


__extends(LinkedMenuPlugin, Plugin);


LinkedMenuPlugin.prototype.moduleName = "linkedmenu";


AMP.registerPlugin("linkedmenu", "html", LinkedMenuPlugin);

/**
 * The ChartbeatAnalyticsPlugin class.
 *
 * @param {Module}  app     The parent module of this plugin.
 * @constructor
 * @private
 * @extends {Plugin}
*/
function ChartbeatAnalyticsPlugin() {
  ChartbeatAnalyticsPlugin.__super__.constructor.call(this);
}


__extends(ChartbeatAnalyticsPlugin, Plugin);


ChartbeatAnalyticsPlugin.prototype.moduleName = "chartbeatanalytics";

ChartbeatAnalyticsPlugin.prototype.pluginResources = null;

/** @override
*/
ChartbeatAnalyticsPlugin.prototype.createModel = function() {
  this.registerProxy(new ChartbeatAnalyticsProxy(this.config));
};

/** @override
*/
ChartbeatAnalyticsPlugin.prototype.loadModuleResources = function() {
  var _ref;
  this.pluginResources = (_ref = this.config) != null ? _ref.resources : void 0;
  this.config.resources = null;
  return ChartbeatAnalyticsPlugin.__super__.loadModuleResources.call(this);
};

/** @override
*/
ChartbeatAnalyticsPlugin.prototype.createController = function() {
  ChartbeatAnalyticsPlugin.__super__.createController.call(this);
  this.registerCommand(AdNotifications.BREAK_END, ChartbeatAnalyticsAdEndCommand);
  this.registerCommand(AdNotifications.AD_STARTED, ChartbeatAnalyticsAdStartCommand);
  this.registerCommand(Notifications.ENDED, ChartbeatAnalyticsEndCommand);
  this.registerCommand(Notifications.MEDIA_CHANGE, ChartbeatAnalyticsMediaChangeCommand);
  this.registerCommand(Notifications.CAN_PLAY_THROUGH, ChartbeatAnalyticsCanPlayCommand);
  this.registerCommand(Notifications.STARTED, ChartbeatAnalyticsStartCommand);
  this.registerCommand(Notifications.PLAYING, ChartbeatAnalyticsPlayingCommand);
  this.registerCommand(Notifications.PAUSED, ChartbeatAnalyticsPausedCommand);
};

/** @override
*/
ChartbeatAnalyticsPlugin.prototype.listNotificationInterests = function() {
  return [AdNotifications.AD_STARTED, AdNotifications.BREAK_END, Notifications.STARTED, Notifications.ENDED, Notifications.MEDIA_CHANGE, Notifications.PLAYING, Notifications.PAUSED, Notifications.CAN_PLAY_THROUGH];
};


AMP.registerPlugin("chartbeatanalytics", "html", ChartbeatAnalyticsPlugin);
AMP.registerPlugin("chartbeatanalytics", "flash", ChartbeatAnalyticsWrapper);


var PromisePlugin = function (_EventDispatcher) {
  babelHelpers.inherits(PromisePlugin, _EventDispatcher);

  function PromisePlugin(player, config) {
    babelHelpers.classCallCheck(this, PromisePlugin);

    var _this = babelHelpers.possibleConstructorReturn(this, (PromisePlugin.__proto__ || Object.getPrototypeOf(PromisePlugin)).call(this));

    _this.player = player;
    _this.config = config || {};
    _this.logger = new Logger(_this.debug)

    var events = Events.values;
    var prop = void 0,
        event = void 0;

    events.forEach(function (event) {
      prop = _this["on" + event];
      if (prop == null || typeof prop != "function") return;

      prop = _this["on" + event] = prop.bind(_this);
      _this.player.addEventListener(event, prop);
    });
    return _this;
  }

  babelHelpers.createClass(PromisePlugin, [{
    key: "bindHandlers",
    value: function bindHandlers(handlers) {
      var _this2 = this;

      if (handlers instanceof Array == false) handlers = [handlers];

      handlers.forEach(function (func) {
        _this2[func] = _this2[func].bind(_this2);
      });
    }
  }, {
    key: "debug",
    get: function get() {
      return this.config.debug != null ? this.config.debug : this.player.config.debug;
    }
  }], [{
    key: "create",
    value: function create(player, config) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          var plugin = new _this2(player, config);
          resolve(plugin);
        } catch (error) {
          reject(error);
        }
      });
    }
  }, {
    key: "factory",
    get: function get() {
      return this.create.bind(this);
    }
  }]);

  return PromisePlugin;
}(EventDispatcher);

var PromiseAdPlugin = function (_PromisePlugin) {
  babelHelpers.inherits(PromiseAdPlugin, _PromisePlugin);

  function PromiseAdPlugin(player, config) {
    babelHelpers.classCallCheck(this, PromiseAdPlugin);

    return babelHelpers.possibleConstructorReturn(this, (PromiseAdPlugin.__proto__ || Object.getPrototypeOf(PromiseAdPlugin)).call(this, player, config));
  }

  babelHelpers.createClass(PromiseAdPlugin, [{
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      this.player.sendNotification("ads" + event.type, event.detail);
      babelHelpers.get(PromiseAdPlugin.prototype.__proto__ || Object.getPrototypeOf(PromiseAdPlugin.prototype), "dispatchEvent", this).call(this, event);
    }
  }]);

  return PromiseAdPlugin;
}(PromisePlugin);

global["akamai"] = {
  "amp": {
    "AMP": AMP,
    "utils": {
      "Timer": Timer,
      "Utils": Utils,
      "QueryString": QueryString,
      "Logger": Logger.instance,
      "MRSSHelper": MRSSHelper
    },
    "Timer": Timer,
    "Utils": Utils,
    "Poller": Poller,
    "PlayState": PlayState,
    "DisplayState": DisplayState,
    "QueryString": QueryString,
    "Logger": Logger,
    "Config": Config,
    "XMLUtils": XMLUtils,
    "chromecast": {
      "ChromeCastShim": (typeof ChromeCastShim != "undefined") ? ChromeCastShim.getInstance() : null
    },
    "XHR": XHR,
    "Resource": Resource,
    "Media": MediaVO,
    "Authorization": Authorization,
    "Event": Event,
    "Events": Events,
    "EventDispatcher": EventDispatcher,
    "Plugin": PromisePlugin,
    "AdPlugin": PromiseAdPlugin
  }
};

if (typeof AdVO != "undefined")
  global["akamai"]["amp"]["AdVO"] = AdVO

if (typeof AdNotifications != "undefined") {
  global["akamai"]["amp"]["AdEvents"] = (function () {
    var key, value, events = {};
    events.values = [];
    for (key in AdNotifications) {
      value = AdNotifications[key].replace(/^ads/, "");
      events[key.replace(/^AD_/, "")] = value;
      events.values.push(value);
    }
    return events;
  }())
}

  /* End JS Lib
  */
  window["AKAMAI_MEDIA_PLAYER"].saveSDK(version, global);
}
window.AKAMAI_MEDIA_PLAYER.setVersion(version);
})();