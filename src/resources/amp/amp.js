try{if(typeof document!=="undefined"&&!("classList"in document.createElement("a"))){(function(e){"use strict";var t="classList",n="prototype",r=(e.HTMLElement||e.Element)[n],i=Object,s=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++){if(t in this&&this[t]===e){return t}}return-1},u=function(e,t){this.name=e;this.code=DOMException[e];this.message=t},a=function(e,t){if(t===""){throw new u("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(t)){throw new u("INVALID_CHARACTER_ERR","String contains an invalid character")}return o.call(e,t)},f=function(e){var t=s.call(e.className),n=t?t.split(/\s+/):[],r=0,i=n.length;for(;r<i;r++){this.push(n[r])}this._updateClassName=function(){e.className=this.toString()}},l=f[n]=[],c=function(){return new f(this)};u[n]=Error[n];l.item=function(e){return this[e]||null};l.contains=function(e){e+="";return a(this,e)!==-1};l.add=function(e){e+="";if(a(this,e)===-1){this.push(e);this._updateClassName()}};l.remove=function(e){e+="";var t=a(this,e);if(t!==-1){this.splice(t,1);this._updateClassName()}};l.toggle=function(e){e+="";if(a(this,e)===-1){this.add(e)}else{this.remove(e)}};l.toString=function(){return this.join(" ")};if(i.defineProperty){var h={get:c,enumerable:true,configurable:true};try{i.defineProperty(r,t,h)}catch(p){if(p.number===-2146823252){h.enumerable=false;i.defineProperty(r,t,h)}}}else if(i[n].__defineGetter__){r.__defineGetter__(t,c)}})(self)}}catch(error){}
var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
	__indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
	__bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Date.now||(Date.now=function(){return +new Date});
/*! JSON v3.2.4 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org */
;(function(){if(typeof JSON === "object")return;var e=void 0,i=!0,k=null,l={}.toString,m,n,p="function"===typeof define&&define.c,q=!p&&"object"==typeof exports&&exports;q||p?"object"==typeof JSON&&JSON?p?q=JSON:(q.stringify=JSON.stringify,q.parse=JSON.parse):p&&(q=this.JSON={}):q=this.JSON||(this.JSON={});var r,t,u,x,z,B,C,D,E,F,G,H,I,J=new Date(-3509827334573292),K,O,P;try{J=-109252==J.getUTCFullYear()&&0===J.getUTCMonth()&&1==J.getUTCDate()&&10==J.getUTCHours()&&37==J.getUTCMinutes()&&6==J.getUTCSeconds()&&708==J.getUTCMilliseconds()}catch(Q){}
function R(b){var c,a,d,j=b=="json";if(j||b=="json-stringify"||b=="json-parse"){if(b=="json-stringify"||j){if(c=typeof q.stringify=="function"&&J){(d=function(){return 1}).toJSON=d;try{c=q.stringify(0)==="0"&&q.stringify(new Number)==="0"&&q.stringify(new String)=='""'&&q.stringify(l)===e&&q.stringify(e)===e&&q.stringify()===e&&q.stringify(d)==="1"&&q.stringify([d])=="[1]"&&q.stringify([e])=="[null]"&&q.stringify(k)=="null"&&q.stringify([e,l,k])=="[null,null,null]"&&q.stringify({A:[d,i,false,k,"\x00\u0008\n\u000c\r\t"]})==
'{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'&&q.stringify(k,d)==="1"&&q.stringify([1,2],k,1)=="[\n 1,\n 2\n]"&&q.stringify(new Date(-864E13))=='"-271821-04-20T00:00:00.000Z"'&&q.stringify(new Date(864E13))=='"+275760-09-13T00:00:00.000Z"'&&q.stringify(new Date(-621987552E5))=='"-000001-01-01T00:00:00.000Z"'&&q.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(f){c=false}}if(!j)return c}if(b=="json-parse"||j){if(typeof q.parse=="function")try{if(q.parse("0")===0&&!q.parse(false)){d=
q.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');if(a=d.a.length==5&&d.a[0]==1){try{a=!q.parse('"\t"')}catch(o){}if(a)try{a=q.parse("01")!=1}catch(g){}}}}catch(h){a=false}if(!j)return a}return c&&a}}
if(!R("json")){J||(K=Math.floor,O=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(b,c){return O[c]+365*(b-1970)+K((b-1969+(c=+(c>1)))/4)-K((b-1901+c)/100)+K((b-1601+c)/400)});if(!(m={}.hasOwnProperty))m=function(b){var c={},a;if((c.__proto__=k,c.__proto__={toString:1},c).toString!=l)m=function(a){var b=this.__proto__,a=a in(this.__proto__=k,this);this.__proto__=b;return a};else{a=c.constructor;m=function(b){var c=(this.constructor||a).prototype;return b in this&&!(b in c&&this[b]===c[b])}}c=
k;return m.call(this,b)};n=function(b,c){var a=0,d,j,f;(d=function(){this.valueOf=0}).prototype.valueOf=0;j=new d;for(f in j)m.call(j,f)&&a++;d=j=k;if(a)a=a==2?function(a,b){var c={},d=l.call(a)=="[object Function]",f;for(f in a)!(d&&f=="prototype")&&!m.call(c,f)&&(c[f]=1)&&m.call(a,f)&&b(f)}:function(a,b){var c=l.call(a)=="[object Function]",d,f;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&!(f=d==="constructor")&&b(d);(f||m.call(a,d="constructor"))&&b(d)};else{j=["valueOf","toString","toLocaleString",
"propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];a=function(a,b){var c=l.call(a)=="[object Function]",d;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&b(d);for(c=j.length;d=j[--c];m.call(a,d)&&b(d));}}a(b,c)};R("json-stringify")||(r={"\\":"\\\\",'"':'\\"',"\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},t=function(b,c){return("000000"+(c||0)).slice(-b)},u=function(b){for(var c='"',a=0,d;d=b.charAt(a);a++)c=c+('\\"\u0008\u000c\n\r\t'.indexOf(d)>-1?r[d]:r[d]=d<" "?
"\\u00"+t(2,d.charCodeAt(0).toString(16)):d);return c+'"'},x=function(b,c,a,d,j,f,o){var g=c[b],h,s,v,w,L,M,N,y,A;if(typeof g=="object"&&g){h=l.call(g);if(h=="[object Date]"&&!m.call(g,"toJSON"))if(g>-1/0&&g<1/0){if(P){v=K(g/864E5);for(h=K(v/365.2425)+1970-1;P(h+1,0)<=v;h++);for(s=K((v-P(h,0))/30.42);P(h,s+1)<=v;s++);v=1+v-P(h,s);w=(g%864E5+864E5)%864E5;L=K(w/36E5)%24;M=K(w/6E4)%60;N=K(w/1E3)%60;w=w%1E3}else{h=g.getUTCFullYear();s=g.getUTCMonth();v=g.getUTCDate();L=g.getUTCHours();M=g.getUTCMinutes();
N=g.getUTCSeconds();w=g.getUTCMilliseconds()}g=(h<=0||h>=1E4?(h<0?"-":"+")+t(6,h<0?-h:h):t(4,h))+"-"+t(2,s+1)+"-"+t(2,v)+"T"+t(2,L)+":"+t(2,M)+":"+t(2,N)+"."+t(3,w)+"Z"}else g=k;else if(typeof g.toJSON=="function"&&(h!="[object Number]"&&h!="[object String]"&&h!="[object Array]"||m.call(g,"toJSON")))g=g.toJSON(b)}a&&(g=a.call(c,b,g));if(g===k)return"null";h=l.call(g);if(h=="[object Boolean]")return""+g;if(h=="[object Number]")return g>-1/0&&g<1/0?""+g:"null";if(h=="[object String]")return u(g);if(typeof g==
"object"){for(b=o.length;b--;)if(o[b]===g)throw TypeError();o.push(g);y=[];c=f;f=f+j;if(h=="[object Array]"){s=0;for(b=g.length;s<b;A||(A=i),s++){h=x(s,g,a,d,j,f,o);y.push(h===e?"null":h)}b=A?j?"[\n"+f+y.join(",\n"+f)+"\n"+c+"]":"["+y.join(",")+"]":"[]"}else{n(d||g,function(b){var c=x(b,g,a,d,j,f,o);c!==e&&y.push(u(b)+":"+(j?" ":"")+c);A||(A=i)});b=A?j?"{\n"+f+y.join(",\n"+f)+"\n"+c+"}":"{"+y.join(",")+"}":"{}"}o.pop();return b}},q.stringify=function(b,c,a){var d,j,f,o,g,h;if(typeof c=="function"||
typeof c=="object"&&c)if(l.call(c)=="[object Function]")j=c;else if(l.call(c)=="[object Array]"){f={};o=0;for(g=c.length;o<g;h=c[o++],(l.call(h)=="[object String]"||l.call(h)=="[object Number]")&&(f[h]=1));}if(a)if(l.call(a)=="[object Number]"){if((a=a-a%1)>0){d="";for(a>10&&(a=10);d.length<a;d=d+" ");}}else l.call(a)=="[object String]"&&(d=a.length<=10?a:a.slice(0,10));return x("",(h={},h[""]=b,h),j,f,d,"",[])});R("json-parse")||(z=String.fromCharCode,B={"\\":"\\",'"':'"',"/":"/",b:"\u0008",t:"\t",
n:"\n",f:"\u000c",r:"\r"},C=function(){H=I=k;throw SyntaxError();},D=function(){for(var b=I,c=b.length,a,d,j,f,o;H<c;){a=b.charAt(H);if("\t\r\n ".indexOf(a)>-1)H++;else{if("{}[]:,".indexOf(a)>-1){H++;return a}if(a=='"'){d="@";for(H++;H<c;){a=b.charAt(H);if(a<" ")C();else if(a=="\\"){a=b.charAt(++H);if('\\"/btnfr'.indexOf(a)>-1){d=d+B[a];H++}else if(a=="u"){j=++H;for(f=H+4;H<f;H++){a=b.charAt(H);a>="0"&&a<="9"||a>="a"&&a<="f"||a>="A"&&a<="F"||C()}d=d+z("0x"+b.slice(j,H))}else C()}else{if(a=='"')break;
d=d+a;H++}}if(b.charAt(H)=='"'){H++;return d}}else{j=H;if(a=="-"){o=i;a=b.charAt(++H)}if(a>="0"&&a<="9"){for(a=="0"&&(a=b.charAt(H+1),a>="0"&&a<="9")&&C();H<c&&(a=b.charAt(H),a>="0"&&a<="9");H++);if(b.charAt(H)=="."){for(f=++H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}a=b.charAt(H);if(a=="e"||a=="E"){a=b.charAt(++H);(a=="+"||a=="-")&&H++;for(f=H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}return+b.slice(j,H)}o&&C();if(b.slice(H,H+4)=="true"){H=H+4;return i}if(b.slice(H,H+5)==
"false"){H=H+5;return false}if(b.slice(H,H+4)=="null"){H=H+4;return k}}C()}}return"$"},E=function(b){var c,a;b=="$"&&C();if(typeof b=="string"){if(b.charAt(0)=="@")return b.slice(1);if(b=="["){for(c=[];;a||(a=i)){b=D();if(b=="]")break;if(a)if(b==","){b=D();b=="]"&&C()}else C();b==","&&C();c.push(E(b))}return c}if(b=="{"){for(c={};;a||(a=i)){b=D();if(b=="}")break;if(a)if(b==","){b=D();b=="}"&&C()}else C();(b==","||typeof b!="string"||b.charAt(0)!="@"||D()!=":")&&C();c[b.slice(1)]=E(D())}return c}C()}return b},
G=function(b,c,a){a=F(b,c,a);a===e?delete b[c]:b[c]=a},F=function(b,c,a){var d=b[c],j;if(typeof d=="object"&&d)if(l.call(d)=="[object Array]")for(j=d.length;j--;)G(d,j,a);else n(d,function(b){G(d,b,a)});return a.call(b,c,d)},q.parse=function(b,c){var a,d;H=0;I=b;a=E(D());D()!="$"&&C();H=I=k;return c&&l.call(c)=="[object Function]"?F((d={},d[""]=a,d),"",c):a})}p&&define(function(){return q});
}());
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
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();



var com = window.com || {};
com.akamai = window.com.akamai || {};
com.akamai.amp = window.com.akamai.amp || {};
com.akamai.amp.core = window.com.akamai.amp.core || {};
com.akamai.amp.core.utils = window.com.akamai.amp.core.utils || {};
com.akamai.amp.events = window.com.akamai.amp.events || {};
com.akamai.amp.modules = window.com.akamai.amp.modules || {};
com.akamai.amp.player = window.com.akamai.amp.player || {};
com.akamai.amp.player.controller = window.com.akamai.amp.player.controller || {};
com.akamai.amp.player.model = window.com.akamai.amp.player.model || {};
com.akamai.amp.player.model.localization = window.com.akamai.amp.player.model.localization || {};
com.akamai.amp.player.view = window.com.akamai.amp.player.view || {};
com.akamai.amp.plugins = window.com.akamai.amp.plugins || {};
com.akamai.amp.plugins.ads = window.com.akamai.amp.plugins.ads || {};
com.akamai.amp.plugins.captioning = window.com.akamai.amp.plugins.captioning || {};
com.akamai.amp.plugins.eventmanagement = window.com.akamai.amp.plugins.eventmanagement || {};
com.akamai.amp.plugins.mediaanalytics = window.com.akamai.amp.plugins.mediaanalytics || {};
com.akamai.amp.standard = window.com.akamai.amp.standard || {};
com.akamai.amp.tokenization = window.com.akamai.amp.tokenization || {};


com.akamai.amp.events.EventDispatcher = (function() {

  EventDispatcher.name = 'EventDispatcher';

  EventDispatcher.prototype.listeners = null;

  EventDispatcher.prototype.target = null;

  /**
   * Creates a new EventDispatcher
   * 
   * a person. 
   * @constructor
  */


  function EventDispatcher(dispather) {
    this.target = dispather || this;
    this.listeners = {};
  }

  /**
  */


  EventDispatcher.prototype["addEventListener"] = function(type, func) {
    if (func) {
      if (!(this.listeners[type] != null)) {
        this.listeners[type] = [];
      }
      this.listeners[type].push(func);
    }
  };

  /**
  */


  EventDispatcher.prototype["dispatchEvent"] = function(event) {
    var handler, handlers, listener, _i, _len;
    handlers = this.listeners[event.type];
    listener = this.target["on" + event.type];
    if ((listener != null)) {
      listener.apply(this, [event]);
    }
    if (handlers) {
      event.target = this.target;
      for (_i = 0, _len = handlers.length; _i < _len; _i++) {
        handler = handlers[_i];
        handler.apply(this.target, [event]);
      }
    }
  };

  /**
  */


  EventDispatcher.prototype["removeEventListener"] = function(type, func) {
    var handlers, index;
    if ((__indexOf.call(this.listeners, type) >= 0)) {
      handlers = this.listeners[type];
      index = handlers.indexOf(func);
      if (index !== -1) {
        return handlers.splice(index, 1);
      }
    }
  };

  return EventDispatcher;

})();


/**
 *
 * @member com.akamai.amp.player
*/

com.akamai.amp.player.Notifications = (function() {

  Notifications.name = 'Notifications';

  function Notifications() {}

  /* * @static
  */


  Notifications.STARTUP = "startup";

  Notifications.LOAD = "load";

  Notifications.PLAY_REQUEST = "playRequest";

  Notifications.PAUSE_REQUEST = "pauseRequest";

  Notifications.AUTHENTICATE = "authenticate";

  Notifications.AUTHENTICATED = "authenticated";

  Notifications.INITIALIZED = "initialized";

  Notifications.TOGGLE_PLAY_PAUSE = "togglePlayPause";

  Notifications.PLAY = "play";

  Notifications.PAUSE = "pause";

  Notifications.CHANGE_PLAY_STATE = "chagePlayState";

  Notifications.PLAY_STATE_CHANGE = "playStateChange";

  Notifications.WAITING = "waiting";

  Notifications.TOGGLE_FULL_SCREEN = "toggleFullScreen";

  Notifications.CHANGE_DISPLAY_STATE = "chageDisplayState";

  Notifications.DISPLAY_STATE_CHANGE = "displayStateChange";

  Notifications.DISABLE_FULL_SCREEN = "disableFullScreen";

  Notifications.ENABLE_FULL_SCREEN = "enableFullScreen";

  Notifications.LANGUAGE_CHANGE = "languageChange";

  Notifications.TOGGLE_ACTIVE = "toggleActive";

  Notifications.CHANGE_ACTIVE_STATE = "changeActiveState";

  Notifications.ACTIVE_STATE_CHANGE = "activeStateChange";

  Notifications.PROGRESS = "progress";

  Notifications.CHANGE_MEDIA = "changeMedia";

  Notifications.MEDIA_CHANGE = "mediaChange";

  Notifications.UPDATE_TOKEN_CONTEXT = "updateTokenContext";

  Notifications.CHANGE_VOLUME = "changeVolume";

  Notifications.VOLUME_CHANGE = "volumeChange";

  Notifications.CHANGE_MUTED = "changemuted";

  Notifications.TIME_UPDATE = "timeUpdate";

  Notifications.SEEK = "seek";

  Notifications.SEEKED = "seeked";

  Notifications.CHANGE_DURATION = "changeDuration";

  Notifications.DURATION_CHANGE = "durationChange";

  Notifications.CHANGE_AUTOPLAY = "changeAutoplay";

  Notifications.CHANGE_LOOP = "changeLoop";

  Notifications.MEDIUM_CHANGE = "mediumChange";

  Notifications.TEMPORAL_TYPE_CHANGE = "temporalTypeChange";

  Notifications.PLAYBACK_CORE_CHANGE = "playbackCoreChange";

  Notifications.CHANGE_PLAYBACK_CORE = "changePlaybackCore";

  Notifications.UPDATE_PLAYBACK_CORE = "updatePlaybackCore";

  Notifications.START = "start";

  Notifications.STARTED = "started";

  Notifications.END = "end";

  Notifications.ENDED = "ended";

  Notifications.REPLAY = "replay";

  Notifications.READY = "ready";

  Notifications.ERROR = "error";

  Notifications.LOAD_FEED = "loadFeed";

  Notifications.REGISTER_PLUGIN = "registerPlugin";

  Notifications.REGISTER_PLUGINS = "registerPlugins";

  Notifications.PLUGIN_REGISTERED = "pluginRegistered";

  Notifications.ADD_OVERLAY = "addOverlay";

  Notifications.REMOVE_OVERLAY = "removeOverlay";

  Notifications.ADD_CONTROL = "addControl";

  Notifications.REMOVE_CONTROL = "removeControl";

  Notifications.ADD_APPLICATION_STATE = "addApplicationState";

  Notifications.REMOVE_APPLICATION_STATE = "removeApplicationState";

  Notifications.DISPATCH_EVENT = "dispatchEvent";

  Notifications.CHANGE_PARAMS = "changeParams";

  Notifications.ADD_CUE_POINTS = "addCuePoints";

  Notifications.REMOVE_CUE_POINTS = "removeCuePoints";

  return Notifications;

})();

com.akamai.amp.core.utils.XMLUtils = (function() {

  XMLUtils.name = 'XMLUtils';

  function XMLUtils() {}

  XMLUtils.createTextContent = function(xml, text) {
    var node;
    node = /[\&<>]/.test(text) ? xml.createCDATASection(text) : xml.createTextNode(text);
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

  return XMLUtils;

})();

/**
 *
 * @member com.akamai.amp.player
*/

com.akamai.amp.player.FlashNotifications = (function() {

  FlashNotifications.name = 'FlashNotifications';

  function FlashNotifications() {}

  FlashNotifications.READY = "jsApiReady";

  FlashNotifications.RESET = "mediaPlayerReset";

  FlashNotifications.LOADING = "mediaPlayerLoading";

  FlashNotifications.PLAYER_ERROR = "mediaPlayerError";

  FlashNotifications.MEDIA_ERROR = "mediaError";

  FlashNotifications.ERROR_STREAM_NOT_FOUND = "mediaPlayerErrorStreamNotFound";

  FlashNotifications.CAPABILITY_CHANGE = "mediaPlayerCapabilityChange";

  FlashNotifications.PLAYBACK_OPEN = "mediaPlayerPlaybackOpen";

  FlashNotifications.PLAYING = "mediaPlayerPlaying";

  FlashNotifications.ENDED = "mediaPlayerPlaybackClose";

  FlashNotifications.PAUSED = "mediaPlayerPaused";

  FlashNotifications.BUFFERING = "mediaPlayerBuffering";

  FlashNotifications.DURATION_CHANGE = "mediaPlayerDurationChange";

  FlashNotifications.TIME_UPDATE = "mediaPlayerCurrentTimeChange";

  FlashNotifications.SEEKING_CHANGE = "mediaPlayerSeekingChange";

  FlashNotifications.ERROR = "error";

  FlashNotifications.VOLUME_CHANGE = "mediaPlayerVolumeChanged";

  FlashNotifications.CAPTION_DATA_CHANGE = "mediaPlayerCaptiondataChange";

  FlashNotifications.AUTHENTICATE = "mediaPlayerAuthenticate";

  FlashNotifications.CAPTIONING_REQUEST = "mediaPlayerCaptioningRequest";

  FlashNotifications.RECOMMENDATION_SELECTED = "mediaPlayerRecommendationSelected";

  FlashNotifications.SHARE = "mediaPlayerShare";

  FlashNotifications.SHARE_REQUEST = "mediaPlayerShareRequest";

  FlashNotifications.AUTO_ADVANCE = "mediaPlayerAutoAdvance";

  FlashNotifications.CREATE_FLASH_VARS = "createFlashVars";

  FlashNotifications.CREATE_XML = "createXML";

  FlashNotifications.FLASH_CREATED = "flashCreated";

  FlashNotifications.AD_LOADED = "adComponentLoaded";

  FlashNotifications.AD_PLAYBACK_BEGIN = "adComponentPlaybackBegin";

  FlashNotifications.AD_PLAYBACK_PROGRESS = "adComponentPlaybackProgress";

  FlashNotifications.AD_PLAYBACK_FAILED = "adComponentPlaybackFailed";

  FlashNotifications.AD_PLAYBACK_TERMINATED = "adComponentPlaybackTerminated";

  FlashNotifications.AD_COMPLETE = "adComponentAdComplete";

  FlashNotifications.AD_MEDIA_LOADED = "adComponentMediaLoaded";

  FlashNotifications.AD_CLICKED = "adComponentClicked";

  FlashNotifications.AD_COMPANION = "adComponentCompanion";

  FlashNotifications.AD_TIME_ELAPSED = "adComponentTimeElapsed";

  return FlashNotifications;

})();

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.modules.ModuleMediator = (function(_super) {

  __extends(ModuleMediator, _super);

  ModuleMediator.name = 'ModuleMediator';

  ModuleMediator.config = null;

  /** @constructor
  */


  var ModuleConfigurationProxy;


  function ModuleMediator(name, viewComponent) {
    ModuleConfigurationProxy = com.akamai.amp.modules.ModuleConfigurationProxy;
    ModuleMediator.__super__.constructor.call(this, name, viewComponent);
  }

  /** @override
  */


  ModuleMediator.prototype.initializeNotifier = function(key) {
    var base;
    ModuleMediator.__super__.initializeNotifier.call(this, key);
    base = this.facade.app || this.facade;
    this.config = base.retrieveProxy(ModuleConfigurationProxy.NAME);
  };

  return ModuleMediator;

})(puremvc.Mediator);

com.akamai.amp.player.view.LocalizationWrapper = (function(_super) {

  __extends(LocalizationWrapper, _super);

  LocalizationWrapper.name = 'LocalizationWrapper';

  LocalizationWrapper.prototype.config = null;

  var XMLUtils, FlashNotifications;


  function LocalizationWrapper(config) {
    this.config = config;
    XMLUtils = com.akamai.amp.core.utils.XMLUtils;

    FlashNotifications = com.akamai.amp.player.FlashNotifications;

    LocalizationWrapper.__super__.constructor.call(this, this.constructor.NAME);
  }

  LocalizationWrapper.NAME = "LocalizationWrapper";

  /** @override
  */


  LocalizationWrapper.prototype.listNotificationInterests = function() {
    var notes;
    notes = LocalizationWrapper.__super__.listNotificationInterests.call(this);
    notes = notes.concat([FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML]);
    return notes;
  };

  /**
  */


  LocalizationWrapper.prototype.handleNotification = function(notification) {
    var application, body, element, key, lang, locale, locales, name, prop, text, value, xml, _ref;
    LocalizationWrapper.__super__.handleNotification.call(this, notification);
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case FlashNotifications.CREATE_FLASH_VARS:
        if (this.config.language != null) {
          body.locale_setting = this.config.language;
        }
        break;
      case FlashNotifications.CREATE_XML:
        xml = body.xml;
        application = xml.getElementsByTagName("application")[0];
        locales = xml.getElementsByTagName("locales")[0];
        if (!(locales != null)) {
          locales = xml.createElement("locales");
          applications.appendChild(locales);
        }
        _ref = this.config.locales;
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

  return LocalizationWrapper;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.FlashMediator = (function(_super) {

  __extends(FlashMediator, _super);

  FlashMediator.name = 'FlashMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {String}
  */


  FlashMediator.NAME = "FlashMediator";

  FlashMediator.prototype.core = null;

  FlashMediator.prototype.container = null;

  FlashMediator.prototype.medium = null;

  /** @constructor
  */


  var Event, Notifications, VideoMediator;


  function FlashMediator(viewComponent) {
    Event = com.akamai.amp.events.Event;

    Notifications = com.akamai.amp.player.Notifications;

    VideoMediator = com.akamai.amp.player.view.VideoMediator;
    FlashMediator.__super__.constructor.call(this, FlashMediator.NAME, viewComponent);
  }

  /** @override
  */


  FlashMediator.prototype.onRegister = function() {
    FlashMediator.__super__.onRegister.call(this);
    return this.viewComponent.className = "akamai-player akamai-flash";
  };

  return FlashMediator;

})(com.akamai.amp.modules.ModuleMediator);

/**
 * Used to track player configuration settings
 * 
 * @member com.akamai.amp.player.model
 *
 *
*/

com.akamai.amp.modules.ModuleConfigurationProxy = (function(_super) {

  __extends(ModuleConfigurationProxy, _super);

  ModuleConfigurationProxy.name = 'ModuleConfigurationProxy';

  /** @static
  */


  ModuleConfigurationProxy.NAME = "ModuleConfigurationProxy";

  /** @private
  */


  ModuleConfigurationProxy.prototype.data = null;

  /**
   * Creates a new instance of MediaProxy.
   * 
   * @constructor
  */


  function ModuleConfigurationProxy(data) {
    ModuleConfigurationProxy.__super__.constructor.call(this);
    if ((data != null)) {
      this.setData(data);
    }
  }

  /**
   * Gets the data for this proxy.
   * 
   * @returns {Object} 
   *    The data for this proxy
   * @override
  */


  ModuleConfigurationProxy.prototype.getData = function() {
    return this.data;
  };

  /**
   * Sets the data for this proxy.
   * 
   * @param {Object} value 
   *    The new data for this proxy
   * @override
  */


  ModuleConfigurationProxy.prototype.setData = function(data) {
    var key, value, _results;
    _results = [];
    for (key in data) {
      value = data[key];
      if (key in this.data) {
        _results.push(this.data[key] = value);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  return ModuleConfigurationProxy;

})(puremvc.Proxy);

com.akamai.amp.core.FlashWrapper = (function(_super) {

  __extends(FlashWrapper, _super);

  FlashWrapper.name = 'FlashWrapper';

  FlashWrapper.prototype.flashObjectID = "flashObject";

  FlashWrapper.prototype.dispatcher = null;

  FlashWrapper.prototype.logger = null;

  FlashWrapper.prototype.video = null;

  FlashWrapper.prototype.config = null;

  FlashWrapper.prototype.id = null;

  FlashWrapper.prototype.container = null;

  FlashWrapper.prototype.playState = null;

  FlashWrapper.prototype.loaded = false;

  FlashWrapper.prototype.playWhenLoaded = false;

  FlashWrapper.prototype.flashvars = null;

  FlashWrapper.prototype.plugins = null;

  FlashWrapper.prototype.features = null;

  FlashWrapper.prototype.seeking = false;

  FlashWrapper.prototype.paused = false;

  FlashWrapper.prototype.ended = false;

  FlashWrapper.prototype.media = null;

  FlashWrapper.prototype.muted = false;

  /**
  */


  var Logger, EventDispatcher, Event, Utils, XMLUtils, AkamaiMediaPlayer, FlashNotifications, Notifications, FlashMediator, LocalizationWrapper, TokenizationProxy, PluginRegistry;


  function FlashWrapper(id, config, dispatcher) {
    var attributes, debug, expressInstallSWF, flash, params, swf, version,
      _this = this;
    this.id = id;
    this.config = config;
    this.dispatcher = dispatcher != null ? dispatcher : new EventDispatcher(this);
    Logger = com.akamai.amp.core.Logger;

    EventDispatcher = com.akamai.amp.events.EventDispatcher;

    Event = com.akamai.amp.events.Event;

    Utils = com.akamai.amp.core.Utils;

    XMLUtils = com.akamai.amp.core.utils.XMLUtils;

    AkamaiMediaPlayer = com.akamai.amp.AkamaiMediaPlayer;

    FlashNotifications = com.akamai.amp.player.FlashNotifications;

    Notifications = com.akamai.amp.player.Notifications;

    FlashMediator = com.akamai.amp.player.view.FlashMediator;

    LocalizationWrapper = com.akamai.amp.player.view.LocalizationWrapper;

    TokenizationProxy = com.akamai.amp.player.model.TokenizationProxy;

    PluginRegistry = com.akamai.amp.plugins.PluginRegistry;

    FlashWrapper.__super__.constructor.call(this, this.id);
    this.flashObjectID += Date.now();
    debug = /debug\=true/.test(location.search);
    this.logger = Logger;
    this.plugins = {};
    this.features = {};
    this.media = {};
    flash = this.config.flash || {};
    swf = flash.swf || "amp.swf";
    if (debug && (flash.debug != null)) {
      swf = flash.debug;
    }
    version = flash.version || "10.1";
    expressInstallSWF = flash.expressInstallSWF || "playerProductInstall.swf";
    this.registerProxy(new TokenizationProxy());
    this.container = document.getElementById(this.id);
    this.registerMediator(new FlashMediator(this.container));
    this.registerMediator(new LocalizationWrapper(this.config));
    this.video = document.createElement("div");
    this.video.id = this.video.name = this.flashObjectID;
    this.container.appendChild(this.video);
    this.createPlugins();
    params = this.createParams(flash);
    attributes = this.createAttributes(flash);
    this.flashvars = this.createFlashVars(flash);
    if (!(this.flashvars.settings_url != null)) {
      this.flashvars.settings_xml = this.createXML(this.config);
    }
    swfobject.embedSWF(swf, this.flashObjectID, "100%", "100%", version, expressInstallSWF, this.flashvars, params, attributes, function(obj) {
      return _this.createdHandler(obj);
    });
  }

  /**
  */


  FlashWrapper.prototype.createPlugins = function() {
    var def, key, register, _results;
    _results = [];
    for (key in PluginRegistry) {
      register = PluginRegistry[key];
      if (!((key in this.config) && !(this.config[key].enabled === false))) {
        continue;
      }
      try {
        def = eval(register.flash);
        if (!(def != null)) {
          this.logger.debug("Plugin could not be found: ", register.flash);
          continue;
        }
      } catch (error) {
        this.logger.debug("Plugin could not be found: ", register.flash);
      }
      this.plugins[key] = new def(this, this.config[key]);
      _results.push(this.registerMediator(this.plugins[key]));
    }
    return _results;
  };

  /**
  */


  FlashWrapper.prototype.createParams = function(flash) {
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
    return params;
  };

  /**
  */


  FlashWrapper.prototype.createAttributes = function(flash) {
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


  FlashWrapper.prototype.createFlashVars = function(flash) {
    var flashvars, _ref, _ref1;
    flashvars = flash.vars || {};
    if (this.config.autoplay != null) {
      flashvars.auto_play = this.config.autoplay;
    }
    if ((this.config.rules != null)) {
      Utils.mergeRules(this.config.rules);
    }
    flashvars.hinting_rules = escape(JSON.stringify(Utils.rules));
    if (this.config.media != null) {
      if (this.config.media.src != null) {
        this.setSrc(this.config.media.src);
        flashvars.video_url = escape(this.config.media.src);
      }
      if (this.config.media.medium != null) {
        this.setMedium(this.config.media.medium);
        flashvars.medium = this.config.media.medium;
      }
      if ((this.config.media.source != null) && this.config.media.source.length > 0) {
        this.setSource(this.config.media.source);
        flashvars.video_url = escape(this.media.src);
      }
      if (this.config.media.title != null) {
        flashvars.title = escape(this.config.media.title);
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
    if (((_ref = this.config.ima) != null ? (_ref1 = _ref.overlay) != null ? _ref1.delay : void 0 : void 0) != null) {
      flashvars.overlay_ad_delay = this.config.ima.overlay.delay;
    }
    if ((this.config.controls != null)) {
      if (this.config.controls.mode != null) {
        flashvars.controls_mode = this.config.controls.mode;
      }
    }
    if (this.config.volume != null) {
      flashvars.volume = this.config.volume;
    }
    if ((this.config.target != null)) {
      flashvars.externalTarget = this.config.target;
    }
    if ((this.config.name != null)) {
      flashvars.core_player_name = this.config.name;
    }
    if ((this.config.domain != null)) {
      flashvars.embedDomain = flashvars.domain = this.config.domain;
    }
    flashvars.auto_replay = this.config.loop === true;
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
    if (this.config.fullscreen != null) {
      flashvars.fullscreen_enabled = this.config.fullscreen.enabled !== false;
    }
    if (this.config.params != null) {
      flashvars.params = escape(JSON.stringify(this.config.params));
    }
    this.sendNotification(FlashNotifications.CREATE_FLASH_VARS, {
      flashvars: flashvars,
      config: this.config
    });
    return flashvars;
  };

  /**
  */


  FlashWrapper.prototype.createXML = function(config) {
    var app, str, xml;
    xml = AkamaiMediaPlayer.config.xml;
    this.sendNotification(FlashNotifications.CREATE_XML, {
      config: config,
      xml: xml
    });
    str = XMLUtils.serialize(xml);
    app = str.match(/<application>[\w\W\s\S\d\D]*<\/application>/)[0] || str;
    app = app.replace(/[\n\r\t]/g, "");
    return escape(app);
  };

  /**
  */


  FlashWrapper.prototype.getConfigXML = function() {
    var text, vars;
    vars = document.querySelector("param[name=flashvars]").value;
    text = unescape(vars.split("&").pop()).replace("settings_xml=", "") + "\n";
    return XMLUtils.parse(text);
  };

  /**
  */


  FlashWrapper.prototype.getFlashVars = function() {
    return this.flashvars;
  };

  /**
  */


  FlashWrapper.prototype.createdHandler = function(obj) {
    var _this = this;
    this.video = document.getElementById(this.flashObjectID);
    this.video.eventHandler = function(eventName, body) {
      return _this.eventHandler(eventName, body);
    };
    this.sendNotification(FlashNotifications.FLASH_CREATED);
    if (this.getMedium() != null) {
      return this.setMedium(this.media.medium);
    }
  };

  /**
  */


  FlashWrapper.prototype.eventHandler = function(eventName, body) {
    var event, state, type;
    try {
      if (eventName !== FlashNotifications.TIME_UPDATE && eventName !== FlashNotifications.AD_PLAYBACK_PROGRESS && eventName !== FlashNotifications.AD_TIME_ELAPSED && eventName !== FlashNotifications.CAPTION_DATA_CHANGE) {
        this.logger.log(eventName, body);
      }
      switch (eventName) {
        case FlashNotifications.READY:
          type = state = "ready";
          break;
        case FlashNotifications.RESET:
          state = "ready";
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
        case FlashNotifications.ERROR_STREAM_NOT_FOUND:
          type = state = "error";
          break;
        case FlashNotifications.CAPABILITY_CHANGE:
          event = body.type;
          if (event === "canPlayChange" && body.enabled === true) {
            type = "canplay";
            this.loaded = true;
            if (this.playWhenLoaded === true) {
              this.playWhenLoaded = false;
              this.play();
            }
          } else if (event === "canSeekChange" && body.enabled === true) {
            type = "canplaythrough";
          } else if (event === "temporalChange" && body.enabled === true) {
            type = "loadedmetadata";
          }
          break;
        case FlashNotifications.PLAYBACK_OPEN:
          type = "play";
          break;
        case FlashNotifications.PLAYING:
          type = state = "playing";
          this.ended = false;
          this.paused = false;
          break;
        case FlashNotifications.ENDED:
          type = state = "ended";
          this.ended = true;
          break;
        case FlashNotifications.PAUSED:
          type = "pause";
          state = "paused";
          this.paused = true;
          break;
        case FlashNotifications.BUFFERING:
          if (this.className !== "akamai-ended") {
            type = state = "waiting";
          }
          break;
        case FlashNotifications.DURATION_CHANGE:
          type = "durationchange";
          break;
        case FlashNotifications.VOLUME_CHANGE:
          type = "volumechange";
          break;
        case FlashNotifications.TIME_UPDATE:
          type = "timeupdate";
          break;
        case FlashNotifications.SEEKING_CHANGE:
          type = body.seeking ? "seeking" : "seeked";
          this.seeking = body.seeking;
          break;
        case FlashNotifications.ERROR:
          this.logger.error(body);
          type = state = "error";
          break;
        default:
          type = eventName;
      }
      this.sendNotification(eventName, body);
      if (type == null) {
        type = eventName;
      }
      this.dispatcher.dispatchEvent(new Event(type, body));
      return this.setPlayState(state);
    } catch (error) {
      return this.logger.error(error);
    }
  };

  /**
   * Sets the player's play state and adds CSS class to player div
  */


  FlashWrapper.prototype.setPlayState = function(state) {
    if ((state != null) && state !== this.playState) {
      this.container.className = this.container.className.replace(" akamai-" + this.playState, "");
      this.container.className += " akamai-" + state;
      return this.playState = state;
    }
  };

  /**
   * Determines if the core can play a given mimeType.
   * 
   * @return {String} "" if the core can't play the mimeType
  */


  FlashWrapper.prototype.canPlayType = function(mimeType) {
    if (__indexOf.call(Utils.flashTypes, mimeType) >= 0) {
      return "maybe";
    } else {
      return "";
    }
  };

  /**
   * Initializes the player to a given set of parameters
  */


  FlashWrapper.prototype.setMedia = function(value) {
    if (value === this.media) {
      return;
    }
    this.media = value;
    if (this.playState != null) {
      this.setPlayState("ready");
    }
    if (value.src != null) {
      this.setSrc(value.src);
    }
    if ((value.source != null) && value.source.length > 0) {
      this.setSource(value.source);
    }
    this.sendNotification(Notifications.MEDIA_CHANGE, value);
    this.loaded = true;
    this.video.loadURL(this.media.src, value);
    return value;
  };

  /**
  */


  FlashWrapper.prototype.getMedia = function() {
    return this.media;
  };

  /**
   * Loads the video.
   *
  */


  FlashWrapper.prototype.load = function() {
    this.loaded = true;
    return this.video.loadURL(this.media.src);
  };

  /**
   * Plays the currently loaded video.
   *
  */


  FlashWrapper.prototype.play = function() {
    if (!this.loaded) {
      this.playWhenLoaded = true;
      this.load();
      return;
    }
    return this.video.unpause();
  };

  /**
   * Plays the currently loaded video from its start time.
   *
  */


  FlashWrapper.prototype.replay = function() {
    return this.video.replay();
  };

  /**
   * Pauses the currently loaded video.
   *
  */


  FlashWrapper.prototype.pause = function() {
    return this.video.pause();
  };

  /**
   * Ends video playback.
   *
  */


  FlashWrapper.prototype.end = function() {
    return this.video.stopPlayer();
  };

  /**
  */


  FlashWrapper.prototype.setMuted = function(value) {
    this.muted = value;
    if (value === true) {
      return this.player.mute();
    } else {
      return this.player.unmute();
    }
  };

  /**
  */


  FlashWrapper.prototype.getMuted = function() {
    return this.muted;
  };

  /**
   * Sets the current time of the video.
   *
   * @param {Number} value The desired time to seek to.
  */


  FlashWrapper.prototype.setCurrentTime = function(value) {
    this.video.jumpToTime(value);
    return value;
  };

  /**
   * Gets the current time of the video.
   *
   * @return {Number} The current time of the video.
  */


  FlashWrapper.prototype.getCurrentTime = function(value) {
    return this.video.getCurrentTime();
  };

  /**
   * The source url of video.
   *
   * @param {String} value The source url of the video to play.
  */


  FlashWrapper.prototype.getSrc = function(value) {
    return this.video.getURL();
  };

  FlashWrapper.prototype.setSrc = function(value) {
    this.media.src = value;
    this.loaded = false;
    this.setMedium(Utils.getMimeType(value));
    return value;
  };

  /**
   * The user defined player parameters
  */


  FlashWrapper.prototype.getParams = function() {
    return this.player.getParams();
  };

  FlashWrapper.prototype.setParams = function(value) {
    this.player.setParams(value);
    return value;
  };

  /**
  */


  FlashWrapper.prototype.setAutoplay = function(value) {};

  FlashWrapper.prototype.getAutoplay = function() {};

  /**
  */


  FlashWrapper.prototype.setLoop = function(value) {};

  FlashWrapper.prototype.getLoop = function() {};

  /**
   * The url to the video.
   * 
   * @param {String} value 
   *    The new title of the video
   * @returns {Boolean} 
   *    The title of the video
   * @type {String}
  */


  FlashWrapper.prototype.getMedium = function() {
    return this.media.medium;
  };

  FlashWrapper.prototype.setMedium = function(value) {
    if ((this.media.medium != null) && (this.container != null)) {
      this.container.className = this.container.className.replace(" akamai-medium-" + this.media.medium, "");
    }
    this.media.medium = /audio/.test(value) ? "audio" : "video";
    if (this.container != null) {
      this.container.className += " akamai-medium-" + this.media.medium;
    }
    return value;
  };

  /**
   * Sets the source url of video.
   *
   * @param {String} value The source url of the video to play.
  */


  FlashWrapper.prototype.setSource = function(value) {
    var item,
      _this = this;
    if (!(value != null) || value.length < 1) {
      return;
    }
    this.media.source = value;
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


  FlashWrapper.prototype.getSource = function(value) {
    return this.media.source;
  };

  /**
   * Sets the source url of video.
   *
   * @param {String} value The source url of the video to play.
  */


  FlashWrapper.prototype.setVolume = function(value) {
    this.video.setVolume(value);
    return value;
  };

  /**
   * Gets the source url of video.
   *
   * @return {Number} The source url of the video.
  */


  FlashWrapper.prototype.getVolume = function() {
    return this.video.getVolume();
  };

  /**
   * Gets the source url of video.
   *
   * @return {Number} The source url of the video.
  */


  FlashWrapper.prototype.getDuration = function() {
    return this.video.getDuration();
  };

  /**
   * Gets the source url of video.
   *
   * @return {Number} The source url of the video.
  */


  FlashWrapper.prototype.getSeeking = function() {
    return this.seeking;
  };

  /**
   * Gets the source url of video.
   *
   * @return {Number} The source url of the video.
  */


  FlashWrapper.prototype.getPaused = function() {
    return this.paused;
  };

  /**
   * Gets the source url of video.
   *
   * @return {Number} The source url of the video.
  */


  FlashWrapper.prototype.getEnded = function() {
    return this.ended;
  };

  /**
   * Enters the player into full screen mode.
   *
  */


  FlashWrapper.prototype.enterFullScreen = function() {};

  /**
   * Exits the player out of full screen mode.
   *
  */


  FlashWrapper.prototype.exitFullScreen = function() {
    return this.video.exitFullScreen();
  };

  return FlashWrapper;

})(puremvc.Facade);

com.akamai.amp.core.QueryString = (function() {

  QueryString.name = 'QueryString';

  function QueryString() {}

  QueryString.construct = function() {
    var result, uri;
    result = {};
    uri = window.location.search;
    if (uri != null) {
      uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
        QueryString[$1] = unescape($3);
      });
    }
    return true;
  };

  QueryString.constructed = QueryString.construct();

  QueryString.serialize = function(obj, prefix) {
    var k, p, str, v;
    str = [];
    for (p in obj) {
      v = obj[p];
      k = (prefix ? prefix + "[" + p + "]" : p);
      str.push((typeof v === "object" ? this.serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v)));
    }
    return str.join("&");
  };

  return QueryString;

})();
window.QueryString = com.akamai.amp.core.QueryString;

/**
 * The main player class.
 *   
 * @member com.akamai.amp.player 
 *
 *
*/

com.akamai.amp.core.Logger = (function() {
  var nop;

  Logger.name = 'Logger';

  function Logger() {}

  nop = function() {};

  Logger.enabled = false;

  Logger.enable = function(enabled) {
    if (enabled == null) {
      enabled = /debug\=true/.test(location.search.toLowerCase());
    }
    this.enabled = enabled;
    if (!this.enabled) {
      return this.log = this.trace = this.debug = this.info = this.warn = this.error = this.fatal = nop;
    }
  };

  Logger.log = function() {
    try {
      return console.log.apply(console, arguments);
    } catch (error) {

    }
  };

  Logger.trace = function() {
    try {
      return console.trace.apply(console, arguments);
    } catch (error) {

    }
  };

  Logger.debug = function() {
    try {
      return console.debug.apply(console, arguments);
    } catch (error) {
      return this.log.apply(this, arguments);
    }
  };

  Logger.info = function() {
    try {
      return console.info.apply(console, arguments);
    } catch (error) {

    }
  };

  Logger.warn = function() {
    try {
      return console.warn.apply(console, arguments);
    } catch (error) {

    }
  };

  Logger.error = function() {
    try {
      return console.error.apply(console, arguments);
    } catch (error) {
      return this.log.apply(this, arguments);
    }
  };

  Logger.fatal = function() {
    try {
      return console.fatal.apply(console, arguments);
    } catch (error) {

    }
  };

  return Logger;

})();

com.akamai.amp.core.Utils = (function() {

  Utils.name = 'Utils';

  var QueryString;


  function Utils() {
    QueryString = com.akamai.amp.core.QueryString;

  }

  Utils.blankImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI2QkJDQTBCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI2QkJDQTFCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODg4NjdFQkIzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODg4NjdFQ0IzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu0++ecAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC";

  Utils.flashTypes = ["video/mp4", "video/x-flv", "video/f4m", "application/smil", "application/smil+xml"];

  Utils.mimeTypes = {
    mp4: "video/mp4",
    flv: "video/x-flv",
    f4m: "video/f4m",
    smil: "application/smil",
    m3u8: "application/x-mpegURL",
    mp3: "audio/mpeg",
    json: "application/json",
    txt: "text/plain",
    xml: "application/xml",
    ogv: "video/ogg",
    webm: "video/webm"
  };

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
      regexp: "iPad|Android 4|Silk\/2"
    },
    desktop: {
      label: "Desktop",
      regexp: "^((?!iPad|iPhone|Android|BlackBerry|PlayBook|Silk).)*$"
    }
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

  Utils.isHTML5 = function() {
    var isAndroid4, isBlackBerry, isKindleHD;
    isAndroid4 = /Android 4/.test(navigator.userAgent);
    isKindleHD = /Silk\/2/.test(navigator.userAgent);
    isBlackBerry = /BlackBerry;|PlayBook|BB10/.test(navigator.userAgent);
    return this.isIOS() || isAndroid4 || isKindleHD || isBlackBerry;
  };

  Utils.isIOS = function() {
    var iOSRegEx, isIOS;
    iOSRegEx = /iPad|iPhone|iPod/i;
    return isIOS = iOSRegEx.test(navigator.platform) || iOSRegEx.test(navigator.userAgent);
  };

  Utils.hasFlash = function() {
    return swfobject.hasFlashPlayerVersion("1");
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
    } else if (xml.nodeType === 3) {
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
    var xhr;
    try {
      xhr = new XMLHttpRequest();
    } catch (error) {
      try {
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (error) {
        try {
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (error) {

        }
      }
    }
    return xhr;
  };

  /**
   * Retrieves a remote text file
   * 
   * @static
  */


  Utils.get = function(url, client, async, headers) {
    var header, name, value, xhr, _i, _len;
    if (client == null) {
      client = {};
    }
    if (async == null) {
      async = false;
    }
    if (headers == null) {
      headers = [];
    }
    xhr = Utils.getXHR();
    try {
      if (client.onload != null) {
        xhr.onload = client.onload;
      }
      if (client.onerror != null) {
        xhr.onerror = client.onerror;
      }
      if (client.onprogress != null) {
        xhr.onprogress = client.onprogress;
      }
    } catch (error) {
      if (client.onload != null) {
        xhr.onreadystatechange = client.onload;
      }
    }
    xhr.open("GET", url, async);
    for (_i = 0, _len = headers.length; _i < _len; _i++) {
      header = headers[_i];
      for (name in header) {
        value = header[name];
        xhr.setRequestHeader(name, value);
      }
    }
    xhr.send();
    return xhr;
  };

  /**
   * Posts a string to NetStorage.
   * 
   * @static
  */


  Utils.send = function(url, data, client, async, headers) {
    var header, name, value, xhr, _i, _len;
    if (client == null) {
      client = {};
    }
    if (async == null) {
      async = false;
    }
    if (headers == null) {
      headers = [
        {
          "Content-Type": "String"
        }
      ];
    }
    xhr = Utils.getXHR();
    if (client.onload != null) {
      xhr.onload = client.onload;
    }
    if (client.onerror != null) {
      xhr.onerror = client.onerror;
    }
    if (client.onprogress != null) {
      xhr.onprogress = client.onprogress;
    }
    xhr.open("POST", url, async);
    for (_i = 0, _len = headers.length; _i < _len; _i++) {
      header = headers[_i];
      for (name in header) {
        value = header[name];
        xhr.setRequestHeader(name, value);
      }
    }
    xhr.send(data);
    return xhr;
  };

  /**
   * Attaches a JavaScript file to the head of the document.
   * 
   * @static
  */


  Utils.loadAMPScript = function(src, onload) {
    return this.loadScript(src, onload, com.akamai.amp.AMPConfig.getScriptTag().parentNode);
  };

  /**
   * Attaches a JavaScript file to the head of the document.
   * 
   * @static
  */


  Utils.loadScript = function(src, onload, parent) {
    var head, script;
    head = parent || document.getElementsByTagName("head")[0];
    script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = src;
    if (script.addEventListener) {
      script.addEventListener("load", onload, false);
    } else if (script.readyState) {
      script.onreadystatechange = onload;
    }
    return head.appendChild(script);
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
    link.type = 'text/css';
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
      xhr = this.get(url, client, false, headers);
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
    return url.split('.').pop().replace(/\?.*/, "");
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


  Utils.isTouchDevice = function() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (error) {
      return false;
    }
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


  Utils.beacon = function(url) {
    var beaconImg;
    beaconImg = document.getElementById("beaconId");
    if (!(beaconImg != null)) {
      beaconImg = document.createElement("img");
      beaconImg.setAttribute("id", "beaconId");
      beaconImg.setAttribute("height", 0);
      beaconImg.setAttribute("width", 0);
      document.body.appendChild(beaconImg);
      beaconImg.style.display = "none";
    }
    return beaconImg.setAttribute("src", url);
  };

  /**
   * Beacons a url via an img tag
   * 
   * @static
  */


  Utils.getElementOffset = function(element) {
    var offset;
    offset = {
      left: 0,
      top: 0
    };
    if (element.offsetParent) {
      offset.left = element.offsetLeft;
      offset.top = element.offsetTop;
      while ((element = element.offsetParent)) {
        offset.left += element.offsetLeft;
        offset.top += element.offsetTop;
      }
    }
    return offset;
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


  Utils.override = function(base, overrides) {
    var key, value;
    if (!(base != null)) {
      return overrides;
    }
    if (overrides != null) {
      for (key in overrides) {
        value = overrides[key];
        if (typeof value === "object") {
          if (base[key] == null) {
            base[key] = value instanceof Array ? [] : {};
          }
          base[key] = Utils.override(base[key], value);
        } else {
          base[key] = value;
        }
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


  Utils.clone = function(obj) {
    var clone, key, value;
    clone = {};
    for (key in obj) {
      value = obj[key];
      clone[key] = value;
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
   * @param   {String}  timeCode  A SMTP formatted string.
   * @return  {Number}  The number of seconds represented by the time code
  */


  Utils.flattenTimecode = function(timeCode) {
    var pieces, seconds, time;
    if (!(timeCode != null) || timeCode === "") {
      return NaN;
    }
    pieces = timeCode.split(":");
    if (pieces.length === 4) {
      pieces.pop();
    } else if (pieces.length === 3) {
      if (pieces[2].indexOf(".")) {
        pieces[2] = pieces[2].split(".").shift();
      }
    }
    seconds = pieces;
    time = parseInt(pieces.pop());
    while (pieces.length > 0) {
      time += Math.pow(60, pieces.length) * parseInt(pieces.shift());
    }
    return time;
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

  return Utils;

})();
window.Utils = com.akamai.amp.core.Utils;

com.akamai.amp.player.model.DisplayState = (function() {

  DisplayState.name = 'DisplayState';

  function DisplayState() {}

  /**
   * Constant representing the normal display state
   * 
   * @static
   * @type {String}
  */


  DisplayState.NORMAL = "normal";

  /**
   * Constant representing the full screen display state
   * 
   * @static
   * @type {String}
  */


  DisplayState.FULL_SCREEN = "full-screen";

  return DisplayState;

})();

com.akamai.amp.events.EventHandler = (function() {

  EventHandler.name = 'EventHandler';

  /**
   * Represents the press user interaction
   * 
   * @type Number
   * @static
  */


  EventHandler.PRESS = 0;

  /**
   * Represents the release user interaction
   * 
   * @type Number
   * @static
  */


  EventHandler.RELEASE = 1;

  /**
   * Represents the move user interaction
   * 
   * @type Number
   * @static
  */


  EventHandler.MOVE = 2;

  /**
   * Represents the click user interaction
   * 
   * @type Number
   * @static
  */


  EventHandler.CLICK = 3;

  /**
   * The list of user interactions
   * 
   * @type Array
   * @static
  */


  EventHandler.EVENTS = [EventHandler.PRESS, EventHandler.RELEASE, EventHandler.MOVE, EventHandler.CLICK];

  /**
   * The list of mouse interactions
   * 
   * @type Array
   * @static
  */


  EventHandler.MOUSE_EVENTS = ["mousedown", "mouseup", "mousemove", "click"];

  /**
   * The list of touch interactions
   * 
   * @type Array
   * @static
  */


  EventHandler.TOUCH_EVENTS = ["touchstart", "touchend", "touchmove", "click", "touchcancel"];

  /**
   * An array of EventHandler instances.
   * 
   * @type Array
   * @static
  */


  EventHandler.instances = [];

  /**
   * Creates an EventHandler with the parameters provided.
   * 
   * @param {EventDispatcher} target
   * @static
  */


  EventHandler.create = function(target, type, handler) {
    return new EventHandler(target, type, handler);
  };

  /**
   * Binds all EventHandlers of the provided target.
   * 
   * @param {EventDispatcher} target
   * @static
  */


  EventHandler.bind = function(target, type) {
    var i, instance, _i, _len, _ref, _results;
    _ref = EventHandler.instances;
    _results = [];
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      instance = _ref[i];
      if (!(instance.target === target)) {
        continue;
      }
      if ((type != null) && instance.type !== type) {
        continue;
      }
      _results.push(instance.bind());
    }
    return _results;
  };

  /**
   * Unbinds all EventHandlers of the provided target.
   * 
   * @param {EventDispatcher} target
   * @static
  */


  EventHandler.unbind = function(target, type) {
    var i, instance, _i, _len, _ref, _results;
    _ref = EventHandler.instances;
    _results = [];
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      instance = _ref[i];
      if (!(instance.target === target)) {
        continue;
      }
      if ((type != null) && instance.type !== type) {
        continue;
      }
      _results.push(instance.unbind());
    }
    return _results;
  };

  /**
   * Clear all EventHandlers of the provided target.
   * 
   * @param {EventDispatcher} target
   * @static
  */


  EventHandler.clear = function(target, type) {
    var i, instance, _i, _len, _ref, _results;
    _ref = EventHandler.instances;
    _results = [];
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      instance = _ref[i];
      if (!((instance != null ? instance.target : void 0) === target)) {
        continue;
      }
      if ((type != null) && instance.type !== type) {
        continue;
      }
      instance.clear();
      _results.push(EventHandler.instances.splice(i, 1));
    }
    return _results;
  };

  /**
   * The system event types for this EventTarget
   * 
   * @type Array
  */


  EventHandler.prototype.types = null;

  /** 
   * Binds an event(s) to a handler function.
   * 
   * @param {EventDispatcher}     target  The event target
   * @param {String|Array|Number} type    The event to listen for
   * @param {Function}            handler The handler function to call when the event is dispatched. 
   * @constructor
  */


  var Utils;


  function EventHandler(target, type, handler) {
    var _ref;
    this.target = target;
    this.type = type;
    this.handler = handler;
    this.trigger = __bind(this.trigger, this);

    Utils = com.akamai.amp.core.Utils;

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
   * Binds the target to the event
  */


  EventHandler.prototype.bind = function() {
    var type, _i, _len, _ref, _results;
    _ref = this.types;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      type = _ref[_i];
      if (this.target.addEventListener != null) {
        _results.push(this.target.addEventListener(type, this.trigger, false));
      } else if (this.target.attachEvent != null) {
        _results.push(this.target.attachEvent("on" + type, this.trigger));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  /**
   * Unbinds the target from the event
  */


  EventHandler.prototype.unbind = function() {
    var type, _i, _len, _ref, _results;
    _ref = this.types;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      type = _ref[_i];
      if (this.target.removeEventListener != null) {
        _results.push(this.target.removeEventListener(type, this.trigger));
      } else if (this.target.attachEvent != null) {
        _results.push(this.target.removeEvent("on" + type, this.trigger));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  /**
   * Clears the EventHandler
  */


  EventHandler.prototype.clear = function() {
    this.unbind();
    this.target = null;
    this.handler = null;
    this.type = null;
    return this.types = null;
  };

  /**
   * Triggers the event handler
  */


  EventHandler.prototype.trigger = function(event) {
    return this.handler(event);
  };

  return EventHandler;

})();

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.DetermineRendererCommand = (function(_super) {

  __extends(DetermineRendererCommand, _super);

  DetermineRendererCommand.name = 'DetermineRendererCommand';

  var ApplicationStateProxy, RenderMode;


  function DetermineRendererCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    RenderMode = com.akamai.amp.player.model.RenderMode;
    DetermineRendererCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  DetermineRendererCommand.prototype.execute = function(notification) {
    var appStateProxy;
    appStateProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    return appStateProxy.setRenderMode(RenderMode.HTML);
  };

  return DetermineRendererCommand;

})(puremvc.SimpleCommand);

/**
 * Initializes the model, view and controller.
 * 
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.plugins.PluginRegistry = (function() {

  PluginRegistry.name = 'PluginRegistry';

  function PluginRegistry() {}

  PluginRegistry.feed = {
    html: "com.akamai.amp.plugins.feed.FeedPlugin",
    flash: "com.akamai.amp.plugins.feed.FeedWrapper"
  };

  PluginRegistry.branding = {
    html: "com.akamai.amp.plugins.branding.BrandingPlugin",
    flash: "com.akamai.amp.plugins.branding.BrandingWrapper"
  };

  PluginRegistry.nielsen = {
    html: "com.akamai.amp.plugins.nielsen.NielsenPlugin",
    flash: "com.akamai.amp.plugins.nielsen.NielsenWrapper"
  };

  PluginRegistry.comscore = {
    html: "com.akamai.amp.plugins.comscore.ComscorePlugin",
    flash: "com.akamai.amp.plugins.comscore.ComscoreWrapper"
  };

  PluginRegistry.auditude = {
    html: "com.akamai.amp.plugins.auditude.AuditudePlugin",
    flash: "com.akamai.amp.plugins.auditude.AuditudeWrapper"
  };

  PluginRegistry.ima = {
    html: "com.akamai.amp.plugins.ima.IMAPlugin",
    flash: "com.akamai.amp.plugins.ima.IMAWrapper"
  };

  PluginRegistry.omniture = {
    html: "com.akamai.amp.plugins.omniture.OmniturePlugin",
    flash: "com.akamai.amp.plugins.omniture.OmnitureWrapper"
  };

  PluginRegistry.mediaanalytics = {
    html: "com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsPlugin",
    flash: "com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsWrapper"
  };

  PluginRegistry.recommendations = {
    html: "com.akamai.amp.plugins.recommendations.RecommendationsPlugin",
    flash: "com.akamai.amp.plugins.recommendations.RecommendationsWrapper"
  };

  PluginRegistry.autoadvance = {
    html: "com.akamai.amp.plugins.autoadvance.AutoAdvancePlugin",
    flash: "com.akamai.amp.plugins.autoadvance.AutoAdvanceWrapper"
  };

  PluginRegistry.outbrain = {
    html: "com.akamai.amp.plugins.outbrain.OutbrainPlugin",
    flash: null
  };

  PluginRegistry.ticker = {
    html: "com.akamai.amp.plugins.ticker.TickerPlugin",
    flash: null
  };

  PluginRegistry.captioning = {
    html: "com.akamai.amp.plugins.captioning.CaptioningPlugin",
    flash: "com.akamai.amp.plugins.captioning.CaptioningWrapper"
  };

  PluginRegistry.eventmanagement = {
    html: "com.akamai.amp.plugins.eventmanagement.EventManagementPlugin",
    flash: "com.akamai.amp.plugins.eventmanagement.EventManagementWrapper"
  };

  PluginRegistry.share = {
    html: "com.akamai.amp.plugins.share.SharePlugin",
    flash: "com.akamai.amp.plugins.share.ShareWrapper"
  };

  PluginRegistry.sharewindow = {
    html: "com.akamai.amp.plugins.sharewindow.ShareWindowPlugin",
    flash: "com.akamai.amp.plugins.share.ShareWrapper"
  };

  PluginRegistry.ais = {
    html: "com.akamai.amp.plugins.ais.AISPlugin",
    flash: "com.akamai.amp.plugins.ais.AISWrapper"
  };

  PluginRegistry.info = {
    html: "com.akamai.amp.plugins.info.InfoPlugin",
    flash: "com.akamai.amp.plugins.info.InfoWrapper"
  };

  return PluginRegistry;

})();

com.akamai.amp.player.view.PublicAPIMediator = (function(_super) {

  __extends(PublicAPIMediator, _super);

  PublicAPIMediator.name = 'PublicAPIMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  PublicAPIMediator.NAME = "PublicAPIMediator";

  PublicAPIMediator.prototype.eventHandler = null;

  /**
   * @constructor
  */


  var Notifications, EventHandler;


  function PublicAPIMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    EventHandler = com.akamai.amp.events.EventHandler;
    PublicAPIMediator.__super__.constructor.call(this, PublicAPIMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  PublicAPIMediator.prototype.onRegister = function() {
    return PublicAPIMediator.__super__.onRegister.call(this);
  };

  PublicAPIMediator.prototype.listNotificationInterests = function() {
    return [Notifications.PLAYBACK_CORE_CHANGE, Notifications.DISPATCH_EVENT];
  };

  PublicAPIMediator.prototype.handleNotification = function(notification) {
    switch (notification.getName()) {
      case Notifications.PLAYBACK_CORE_CHANGE:
        return this.addEventListeners(notification.getBody());
      case Notifications.DISPATCH_EVENT:
        return this.facade.dispatchEvent(notification.getBody());
    }
  };

  PublicAPIMediator.prototype.addEventListeners = function(core) {
    var events,
      _this = this;
    events = ["loadstart", "loadeddata", "play", "playing", "ended", "timeupdate", "durationchange", "error", "progress", "stalled", "emptied", "suspend", "abort", "volumechange", "seeking", "seeked", "loadedmetadata", "pause", "waiting", "canplay", "canplaythrough"];
    if ((this.eventHandler != null)) {
      this.eventHandler.clear();
    }
    return this.eventHandler = new EventHandler(core, events, function(event) {
      return _this.facade.dispatchEvent(event);
    });
  };

  return PublicAPIMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.CreatePlaybackCoreCommand = (function(_super) {

  __extends(CreatePlaybackCoreCommand, _super);

  CreatePlaybackCoreCommand.name = 'CreatePlaybackCoreCommand';

  var Notifications;


  function CreatePlaybackCoreCommand() {
    Notifications = com.akamai.amp.player.Notifications;
    CreatePlaybackCoreCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  CreatePlaybackCoreCommand.prototype.execute = function(notification) {
    var core, video;
    video = document.querySelector("[id=" + this.facade.multitonKey + "] > video");
    core = (video != null) ? video : document.createElement("video");
    core.preload = "auto";
    return this.sendNotification(Notifications.CHANGE_PLAYBACK_CORE, core);
  };

  return CreatePlaybackCoreCommand;

})(puremvc.SimpleCommand);

/**
 * Initializes the model, view and controller.
*/

com.akamai.amp.player.controller.InitPluginsCommand = (function(_super) {

  __extends(InitPluginsCommand, _super);

  InitPluginsCommand.name = 'InitPluginsCommand';

  var Notifications, PluginRegistry;


  function InitPluginsCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    PluginRegistry = com.akamai.amp.plugins.PluginRegistry;
    InitPluginsCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification The notification.
   * @override
  */


  InitPluginsCommand.prototype.execute = function(notification) {
    var config, def, init, key, plugin, plugins, value, _base, _i, _len, _results;
    this.facade.logger.debug("InitPluginsCommand");
    config = notification.getBody();
    if ((_base = this.facade).plugins == null) {
      _base.plugins = {};
    }
    plugins = [];
    for (key in PluginRegistry) {
      value = PluginRegistry[key];
      if (!(key in config)) {
        continue;
      }
      init = config[key];
      if (!(init != null) || init.enabled === false) {
        continue;
      }
      if (!(this.facade.plugins[key] != null)) {
        try {
          def = eval(value.html);
        } catch (error) {
          this.facade.logger.debug("Plugin could not be found: ", value.html);
          continue;
        }
        if (!(def != null)) {
          this.facade.logger.debug("Plugin could not be created: ", value.html);
          continue;
        }
        plugin = new def(this.facade, init);
        this.facade.plugins[key] = plugin;
        plugins.push(plugin);
      }
    }
    this.sendNotification(Notifications.REGISTER_PLUGINS, plugins);
    _results = [];
    for (_i = 0, _len = plugins.length; _i < _len; _i++) {
      plugin = plugins[_i];
      _results.push(this.sendNotification(Notifications.REGISTER_PLUGIN, plugin));
    }
    return _results;
  };

  return InitPluginsCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.VideoMediator = (function(_super) {

  __extends(VideoMediator, _super);

  VideoMediator.name = 'VideoMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  VideoMediator.NAME = "VideoMediator";

  /** @constructor
  */


  var Notifications;


  function VideoMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;
    VideoMediator.__super__.constructor.call(this, VideoMediator.NAME, viewComponent);
  }

  /** @override
  */


  VideoMediator.prototype.onRegister = function() {
    VideoMediator.__super__.onRegister.call(this);
    return this.viewComponent.classList.add("akamai-video");
  };

  return VideoMediator;

})(puremvc.Mediator);

/**
 * Initializes the playback core.
 * 
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.InitPlaybackCoreCommand = (function(_super) {

  __extends(InitPlaybackCoreCommand, _super);

  InitPlaybackCoreCommand.name = 'InitPlaybackCoreCommand';

  var DetermineRendererCommand, CreatePlaybackCoreCommand;


  function InitPlaybackCoreCommand() {
    DetermineRendererCommand = com.akamai.amp.player.controller.DetermineRendererCommand;

    CreatePlaybackCoreCommand = com.akamai.amp.player.controller.CreatePlaybackCoreCommand;
    InitPlaybackCoreCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Initializes the sub commands prior to execution.
   * 
   * @override
  */


  InitPlaybackCoreCommand.prototype.initializeMacroCommand = function() {
    this.addSubCommand(DetermineRendererCommand);
    return this.addSubCommand(CreatePlaybackCoreCommand);
  };

  return InitPlaybackCoreCommand;

})(puremvc.MacroCommand);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.PlayPauseMediator = (function(_super) {

  __extends(PlayPauseMediator, _super);

  PlayPauseMediator.name = 'PlayPauseMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  PlayPauseMediator.NAME = "PlayPauseMediator";

  var EventHandler, Notifications, PlayState;


  function PlayPauseMediator(viewComponent) {
    EventHandler = com.akamai.amp.events.EventHandler;

    Notifications = com.akamai.amp.player.Notifications;

    PlayState = com.akamai.amp.player.model.PlayState;
    PlayPauseMediator.__super__.constructor.call(this, PlayPauseMediator.NAME, viewComponent);
  }

  PlayPauseMediator.prototype.onRegister = function() {
    var _this = this;
    PlayPauseMediator.__super__.onRegister.call(this);
    EventHandler.create(this.viewComponent, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      _this.sendNotification(Notifications.TOGGLE_PLAY_PAUSE);
      return false;
    });
    return this.viewComponent.classList.add("akamai-play-pause-button");
  };

  return PlayPauseMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.FullScreenMediator = (function(_super) {

  __extends(FullScreenMediator, _super);

  FullScreenMediator.name = 'FullScreenMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  FullScreenMediator.NAME = "FullScreenMediator";

  FullScreenMediator.prototype.clickHandler = null;

  var EventHandler, Notifications;


  function FullScreenMediator(viewComponent) {
    EventHandler = com.akamai.amp.events.EventHandler;

    Notifications = com.akamai.amp.player.Notifications;
    FullScreenMediator.__super__.constructor.call(this, FullScreenMediator.NAME, viewComponent);
  }

  FullScreenMediator.prototype.onRegister = function() {
    var _this = this;
    FullScreenMediator.__super__.onRegister.call(this);
    this.clickHandler = EventHandler.create(this.viewComponent, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      _this.sendNotification(Notifications.TOGGLE_FULL_SCREEN);
      return false;
    });
    return this.viewComponent.classList.add("akamai-full-screen-button");
  };

  FullScreenMediator.prototype.listNotificationInterests = function() {
    return [Notifications.DISABLE_FULL_SCREEN, Notifications.ENABLE_FULL_SCREEN];
  };

  FullScreenMediator.prototype.handleNotification = function(notification) {
    var body, name;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case Notifications.DISABLE_FULL_SCREEN:
        this.sendNotification(Notifications.ADD_APPLICATION_STATE, "disable-full-screen");
        return this.clickHandler.unbind();
      case Notifications.ENABLE_FULL_SCREEN:
        this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "disable-full-screen");
        return this.clickHandler.bind();
    }
  };

  return FullScreenMediator;

})(puremvc.Mediator);

com.akamai.amp.player.view.LocalizedMediator = (function(_super) {

  __extends(LocalizedMediator, _super);

  LocalizedMediator.name = 'LocalizedMediator';

  LocalizedMediator.NAME = "LocalizedMediator";

  LocalizedMediator.prototype.localizationManager = null;

  /**
   * Constructor.
   *
  */


  var LocalizationProxy;


  function LocalizedMediator(name, viewComponent) {
    LocalizationProxy = com.akamai.amp.player.model.LocalizationProxy;
    LocalizedMediator.__super__.constructor.call(this, name, viewComponent);
  }

  /** @override
  */


  LocalizedMediator.prototype.initializeNotifier = function(key) {
    var target;
    LocalizedMediator.__super__.initializeNotifier.call(this, key);
    target = this.facade.app || this.facade;
    return this.localizationManager = target.retrieveProxy(LocalizationProxy.NAME);
  };

  return LocalizedMediator;

})(com.akamai.amp.modules.ModuleMediator);

com.akamai.amp.player.view.OverlayMediator = (function(_super) {

  __extends(OverlayMediator, _super);

  OverlayMediator.name = 'OverlayMediator';

  OverlayMediator.NAME = "OverlayMediator";

  /**
   * Constructor.
   *
  */


  var Notifications;


  function OverlayMediator(name, viewComponent) {
    if (viewComponent == null) {
      viewComponent = "div";
    }
    Notifications = com.akamai.amp.player.Notifications;

    if (typeof viewComponent === "string") {
      viewComponent = document.createElement(viewComponent);
    }
    OverlayMediator.__super__.constructor.call(this, name, viewComponent);
  }

  /**
   * Registers the appropriate pipes and listeners when
   * this class is registered 
   * 
   * @override
  */


  OverlayMediator.prototype.onRegister = function() {
    OverlayMediator.__super__.onRegister.call(this);
    return this.sendNotification(Notifications.ADD_OVERLAY, this.viewComponent);
  };

  return OverlayMediator;

})(com.akamai.amp.player.view.LocalizedMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.ErrorSlateMediator = (function(_super) {

  __extends(ErrorSlateMediator, _super);

  ErrorSlateMediator.name = 'ErrorSlateMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  ErrorSlateMediator.NAME = "ErrorSlateMediator";

  ErrorSlateMediator.prototype.message = null;

  /**
   * @constructor
  */


  var Notifications;


  function ErrorSlateMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;
    ErrorSlateMediator.__super__.constructor.call(this, ErrorSlateMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  ErrorSlateMediator.prototype.onRegister = function() {
    ErrorSlateMediator.__super__.onRegister.call(this);
    this.viewComponent.classList.add("akamai-error-slate");
    this.message = document.createElement("div");
    this.message.classList.add("akamai-error-message");
    return this.viewComponent.appendChild(this.message);
  };

  ErrorSlateMediator.prototype.listNotificationInterests = function() {
    return [Notifications.ERROR];
  };

  ErrorSlateMediator.prototype.handleNotification = function(notification) {
    var error, msg;
    switch (notification.getName()) {
      case Notifications.ERROR:
        error = notification.getBody();
        msg = "Error: ";
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
        return this.message.textContent = msg;
    }
  };

  return ErrorSlateMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.LoadingOverlayMediator = (function(_super) {

  __extends(LoadingOverlayMediator, _super);

  LoadingOverlayMediator.name = 'LoadingOverlayMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  LoadingOverlayMediator.NAME = "LoadingOverlayMediator";

  var Notifications;


  function LoadingOverlayMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;
    LoadingOverlayMediator.__super__.constructor.call(this, LoadingOverlayMediator.NAME, viewComponent);
  }

  LoadingOverlayMediator.prototype.onRegister = function() {
    this.viewComponent.classList.add("akamai-loading-overlay");
    return LoadingOverlayMediator.__super__.onRegister.call(this);
  };

  return LoadingOverlayMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.WaitingOverlayMediator = (function(_super) {

  __extends(WaitingOverlayMediator, _super);

  WaitingOverlayMediator.name = 'WaitingOverlayMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  WaitingOverlayMediator.NAME = "WaitingOverlayMediator";

  WaitingOverlayMediator.prototype.bar = null;

  var Notifications, LocalizationConstants;


  function WaitingOverlayMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    LocalizationConstants = com.akamai.amp.player.model.localization.LocalizationConstants;
    WaitingOverlayMediator.__super__.constructor.call(this, WaitingOverlayMediator.NAME, viewComponent);
  }

  WaitingOverlayMediator.prototype.onRegister = function() {
    var text;
    this.viewComponent.classList.add("akamai-waiting-overlay");
    this.bar = document.createElement("div");
    this.bar.classList.add("akamai-waiting-bar");
    this.viewComponent.appendChild(this.bar);
    text = document.createElement("div");
    text.classList.add("akamai-waiting-text");
    text.textContent = this.localizationManager.getString(LocalizationConstants.MSG_BUFFERING);
    this.viewComponent.appendChild(text);
    return WaitingOverlayMediator.__super__.onRegister.call(this);
  };

  return WaitingOverlayMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.PosterMediator = (function(_super) {

  __extends(PosterMediator, _super);

  PosterMediator.name = 'PosterMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  PosterMediator.NAME = "PosterMediator";

  PosterMediator.prototype.poster = null;

  /**
   * @constructor
  */


  var Notifications;


  function PosterMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;
    PosterMediator.__super__.constructor.call(this, PosterMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  PosterMediator.prototype.onRegister = function() {
    this.viewComponent.classList.add("akamai-poster-overlay");
    this.poster = document.createElement("div");
    this.poster.classList.add("akamai-poster-content");
    this.viewComponent.appendChild(this.poster);
    return PosterMediator.__super__.onRegister.call(this);
  };

  PosterMediator.prototype.listNotificationInterests = function() {
    return [Notifications.CHANGE_MEDIA];
  };

  PosterMediator.prototype.handleNotification = function(notification) {
    var src;
    switch (notification.getName()) {
      case Notifications.CHANGE_MEDIA:
        this.poster.innerHTML = "";
        src = notification.getBody().poster;
        if ((src != null) && src !== "") {
          return this.poster.innerHTML = "<img src=\"" + src + "\" class=\"akamai-poster-image\" />";
        }
    }
  };

  return PosterMediator;

})(com.akamai.amp.player.view.OverlayMediator);

com.akamai.amp.player.view.ApplicationOverlayMediator = (function(_super) {

  __extends(ApplicationOverlayMediator, _super);

  ApplicationOverlayMediator.name = 'ApplicationOverlayMediator';

  ApplicationOverlayMediator.NAME = "ApplicationOverlayMediator";

  /**
   * Constructor.
   *
  */


  var Notifications;


  function ApplicationOverlayMediator(viewComponent, name) {
    Notifications = com.akamai.amp.player.Notifications;
    if (name == null) {
      name = ApplicationOverlayMediator.NAME;
    }
    ApplicationOverlayMediator.__super__.constructor.call(this, name, viewComponent);
  }

  /**
   * Registers the appropriate pipes and listeners when
   * this class is registered 
   * 
   * @override
  */


  ApplicationOverlayMediator.prototype.onRegister = function() {
    ApplicationOverlayMediator.__super__.onRegister.call(this);
    return this.viewComponent.classList.add("akamai-overlays");
  };

  /**
   * Overridden so this class may subscribe to all notifications
   * @return An Array
   * 
   * @override
  */


  ApplicationOverlayMediator.prototype.listNotificationInterests = function() {
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


  ApplicationOverlayMediator.prototype.handleNotification = function(notification) {
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

  return ApplicationOverlayMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.EndSlateMediator = (function(_super) {

  __extends(EndSlateMediator, _super);

  EndSlateMediator.name = 'EndSlateMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  EndSlateMediator.NAME = "EndSlateMediator";

  /**
   * @constructor
  */


  var Notifications;


  function EndSlateMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;
    EndSlateMediator.__super__.constructor.call(this, EndSlateMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  EndSlateMediator.prototype.onRegister = function() {
    if (this.config.getEndSlate() != null) {
      this.viewComponent.classList.add("akamai-end-slate");
      return EndSlateMediator.__super__.onRegister.call(this);
    }
  };

  EndSlateMediator.prototype.listNotificationInterests = function() {
    return [Notifications.MEDIA_CHANGE];
  };

  EndSlateMediator.prototype.handleNotification = function(notification) {
    var endslate, media, src;
    switch (notification.getName()) {
      case Notifications.MEDIA_CHANGE:
        media = notification.getBody();
        endslate = this.config.getEndSlate();
        this.viewComponent.innerHTML = "";
        if (endslate != null) {
          src = endslate.usePoster === true ? media.poster : endslate.url;
          if ((src != null) && src !== "") {
            this.viewComponent.innerHTML = "<img src=\"" + src + "\" class=\"akamai-end-slate-image\" />";
          }
        }
    }
  };

  return EndSlateMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.ReplayOverlayMediator = (function(_super) {

  __extends(ReplayOverlayMediator, _super);

  ReplayOverlayMediator.name = 'ReplayOverlayMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  ReplayOverlayMediator.NAME = "ReplayOverlayMediator";

  ReplayOverlayMediator.prototype.replay = null;

  ReplayOverlayMediator.prototype.icon = null;

  ReplayOverlayMediator.prototype.label = null;

  /**
   * @constructor
  */


  var EventHandler, Notifications, LocalizationConstants;


  function ReplayOverlayMediator(viewComponent) {
    EventHandler = com.akamai.amp.events.EventHandler;

    Notifications = com.akamai.amp.player.Notifications;

    LocalizationConstants = com.akamai.amp.player.model.localization.LocalizationConstants;
    ReplayOverlayMediator.__super__.constructor.call(this, ReplayOverlayMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  ReplayOverlayMediator.prototype.onRegister = function() {
    var _this = this;
    this.viewComponent.classList.add("akamai-replay-overlay");
    this.replay = document.createElement("div");
    this.replay.classList.add("akamai-replay-button");
    this.viewComponent.appendChild(this.replay);
    EventHandler.create(this.replay, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      _this.sendNotification(Notifications.REPLAY);
      return false;
    });
    this.icon = document.createElement("span");
    this.icon.classList.add("akamai-replay-icon");
    this.replay.appendChild(this.icon);
    this.label = document.createElement("span");
    this.label.classList.add("akamai-replay-label");
    this.label.textContent = this.localizationManager.getString(LocalizationConstants.MSG_REPLAY);
    this.replay.appendChild(this.label);
    return ReplayOverlayMediator.__super__.onRegister.call(this);
  };

  return ReplayOverlayMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.PlayOverlayMediator = (function(_super) {

  __extends(PlayOverlayMediator, _super);

  PlayOverlayMediator.name = 'PlayOverlayMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  PlayOverlayMediator.NAME = "PlayOverlayMediator";

  var EventHandler, Notifications;


  function PlayOverlayMediator(viewComponent) {
    EventHandler = com.akamai.amp.events.EventHandler;

    Notifications = com.akamai.amp.player.Notifications;
    PlayOverlayMediator.__super__.constructor.call(this, PlayOverlayMediator.NAME, viewComponent);
  }

  PlayOverlayMediator.prototype.onRegister = function() {
    var _this = this;
    EventHandler.create(this.viewComponent, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      event.preventDefault();
      _this.sendNotification(Notifications.TOGGLE_PLAY_PAUSE);
      return false;
    });
    this.viewComponent.classList.add("akamai-play-overlay");
    return PlayOverlayMediator.__super__.onRegister.call(this);
  };

  return PlayOverlayMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.TitleBarMediator = (function(_super) {

  __extends(TitleBarMediator, _super);

  TitleBarMediator.name = 'TitleBarMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  TitleBarMediator.NAME = "TitleBarMediator";

  TitleBarMediator.prototype.title = null;

  TitleBarMediator.prototype.description = null;

  /**
   * @constructor
  */


  var Notifications, Utils;


  function TitleBarMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    Utils = com.akamai.amp.core.Utils;
    TitleBarMediator.__super__.constructor.call(this, TitleBarMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  TitleBarMediator.prototype.onRegister = function() {
    this.viewComponent.classList.add("akamai-title-bar");
    this.title = document.createElement("div");
    this.title.classList.add("akamai-title-text");
    this.viewComponent.appendChild(this.title);
    this.description = document.createElement("div");
    this.description.classList.add("akamai-description-text");
    this.viewComponent.appendChild(this.description);
    return TitleBarMediator.__super__.onRegister.call(this);
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
        title = metadata.title;
        if (!(title != null) || title === "" || title === "undefined") {
          return this.viewComponent.classList.add("akamai-hidden");
        } else {
          this.title.innerHTML = title;
          if (metadata.duration != null) {
            this.title.innerHTML += " - " + Utils.formatTimecode(metadata.duration);
          }
          this.description.innerHTML = metadata.description ? metadata.description : "";
          return this.viewComponent.classList.remove("akamai-hidden");
        }
    }
  };

  return TitleBarMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.ProgressMediator = (function(_super) {

  __extends(ProgressMediator, _super);

  ProgressMediator.name = 'ProgressMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  ProgressMediator.NAME = "ProgressMediator";

  ProgressMediator.prototype.bufferValue = null;

  ProgressMediator.prototype.progressValue = null;

  ProgressMediator.prototype.scrubber = null;

  ProgressMediator.prototype.scrubTime = null;

  ProgressMediator.prototype.cuePoints = null;

  ProgressMediator.prototype.duration = 0;

  ProgressMediator.prototype.scrubbing = false;

  ProgressMediator.prototype.value = 0;

  ProgressMediator.prototype.releaseHandler = null;

  ProgressMediator.prototype.dragHandler = null;

  ProgressMediator.prototype.pressHandler = null;

  /**
   * @constructor
  */


  var Notifications, Utils, EventHandler;


  function ProgressMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    Utils = com.akamai.amp.core.Utils;

    EventHandler = com.akamai.amp.events.EventHandler;
    ProgressMediator.__super__.constructor.call(this, ProgressMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  ProgressMediator.prototype.onRegister = function() {
    var seekBar,
      _this = this;
    ProgressMediator.__super__.onRegister.call(this);
    this.viewComponent.classList.add("akamai-progress");
    this.bufferValue = document.createElement("div");
    this.bufferValue.classList.add("akamai-buffer-value");
    this.viewComponent.appendChild(this.bufferValue);
    this.progressValue = document.createElement("div");
    this.progressValue.classList.add("akamai-progress-value");
    this.viewComponent.appendChild(this.progressValue);
    seekBar = document.createElement("div");
    seekBar.classList.add("akamai-seek-bar");
    this.viewComponent.appendChild(seekBar);
    EventHandler.create(seekBar, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      _this.setValue(_this.calculateValue(event.clientX));
      return false;
    });
    /* TODO: Should "scrubbing" be an ApplicationStateProxy property or perhaps a PlayState?
    */

    this.scrubber = document.createElement("div");
    this.scrubber.classList.add("akamai-scrubber");
    this.viewComponent.appendChild(this.scrubber);
    this.pressHandler = EventHandler.create(this.scrubber, EventHandler.PRESS, function(event) {
      _this.dragHandler.bind();
      _this.releaseHandler.bind();
      _this.scrubbing = true;
      _this.viewComponent.classList.add("akamai-scrubbing");
      event.stopImmediatePropagation();
      return false;
    });
    this.releaseHandler = EventHandler.create(window, EventHandler.RELEASE, function(event) {
      event.stopImmediatePropagation();
      _this.dragHandler.unbind();
      _this.releaseHandler.unbind();
      _this.setValue(_this.value);
      _this.viewComponent.classList.remove("akamai-scrubbing");
      _this.scrubbing = false;
      return false;
    });
    this.releaseHandler.unbind();
    this.dragHandler = EventHandler.create(window, EventHandler.MOVE, function(event) {
      var x;
      event.stopImmediatePropagation();
      x = event.clientX ? event.clientX : event.targetTouches[0].screenX;
      _this.updateValue(_this.calculateValue(x));
      return false;
    });
    this.dragHandler.unbind();
    this.scrubTime = document.createElement("div");
    this.scrubTime.classList.add("akamai-scrub-time");
    return this.viewComponent.appendChild(this.scrubTime);
  };

  /** @override
  */


  ProgressMediator.prototype.listNotificationInterests = function() {
    return [Notifications.MEDIA_CHANGE, Notifications.TIME_UPDATE, Notifications.DURATION_CHANGE, Notifications.PROGRESS, Notifications.ADD_CUE_POINTS, Notifications.REMOVE_CUE_POINTS];
  };

  /** @override
  */


  ProgressMediator.prototype.handleNotification = function(notification) {
    var cue, cuePoint, cues, _i, _len, _results;
    switch (notification.getName()) {
      case Notifications.MEDIA_CHANGE:
        this.updateValue(0);
        return this.bufferValue.style.width = "0%";
      case Notifications.TIME_UPDATE:
        if (!this.scrubbing) {
          return this.updateValue(notification.getBody() / this.duration);
        }
        break;
      case Notifications.PROGRESS:
        return this.bufferValue.style.width = String(notification.getBody() * 100).substr(0, 5) + "%";
      case Notifications.DURATION_CHANGE:
        return this.duration = notification.getBody();
      case Notifications.ADD_CUE_POINTS:
        this.removeCuePoints();
        cues = notification.getBody();
        this.cuePoints = document.createElement("div");
        this.cuePoints.className = "akamai-cue-points";
        this.viewComponent.appendChild(this.cuePoints);
        _results = [];
        for (_i = 0, _len = cues.length; _i < _len; _i++) {
          cue = cues[_i];
          if (!(cue !== 0 && cue !== -1)) {
            continue;
          }
          cuePoint = document.createElement("div");
          cuePoint.className = "akamai-cue-point";
          cuePoint.style.left = (cue / this.duration * 100) + "%";
          _results.push(this.cuePoints.appendChild(cuePoint));
        }
        return _results;
        break;
      case Notifications.REMOVE_CUE_POINTS:
        return this.removeCuePoints();
    }
  };

  ProgressMediator.prototype.removeCuePoints = function() {
    if (!(this.cuePoints != null)) {
      return;
    }
    this.cuePoints.innerHTML = "";
    this.viewComponent.removeChild(this.cuePoints);
    return this.cuePoints = null;
  };

  /** sets the value
  */


  ProgressMediator.prototype.setValue = function(percent) {
    this.updateValue(percent);
    return this.sendNotification(Notifications.SEEK, percent * this.duration);
  };

  /** updates the view
  */


  ProgressMediator.prototype.updateValue = function(percent) {
    this.value = percent;
    if (this.scrubbing === true) {
      this.scrubTime.textContent = Utils.formatTimecode(this.value * this.duration);
    }
    this.scrubber.style.marginLeft = "-" + Math.round((this.value * this.scrubber.clientWidth) - 1) + "px";
    return this.progressValue.style.width = this.scrubber.style.left = this.scrubTime.style.left = "" + (String(this.value * 100).substr(0, 5)) + "%";
  };

  /** calculates the value based on x
  */


  ProgressMediator.prototype.calculateValue = function(x) {
    return Utils.clamp((x - Utils.getElementOffset(this.viewComponent).left) / this.viewComponent.offsetWidth, 0, 1);
  };

  return ProgressMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.VolumeMediator = (function(_super) {

  __extends(VolumeMediator, _super);

  VolumeMediator.name = 'VolumeMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  VolumeMediator.NAME = "VolumeMediator";

  VolumeMediator.prototype.slider = null;

  VolumeMediator.prototype.sliderView = null;

  VolumeMediator.prototype.valueView = null;

  VolumeMediator.prototype.trackView = null;

  VolumeMediator.prototype.handleView = null;

  VolumeMediator.prototype.buttonView = null;

  VolumeMediator.prototype.min = 0;

  VolumeMediator.prototype.max = 1;

  VolumeMediator.prototype.value = 0.5;

  VolumeMediator.prototype.dragging = false;

  VolumeMediator.prototype.pressHandler = null;

  VolumeMediator.prototype.releaseHandler = null;

  VolumeMediator.prototype.dragHandler = null;

  /**
   * @constructor
  */


  var Notifications, Utils, EventHandler;


  function VolumeMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    Utils = com.akamai.amp.core.Utils;

    EventHandler = com.akamai.amp.events.EventHandler;
    VolumeMediator.__super__.constructor.call(this, VolumeMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  VolumeMediator.prototype.onRegister = function() {
    var _this = this;
    VolumeMediator.__super__.onRegister.call(this);
    this.buttonView = document.createElement("div");
    this.buttonView.classList.add("akamai-volume-button");
    this.viewComponent.appendChild(this.buttonView);
    EventHandler.create(this.buttonView, EventHandler.PRESS, function(event) {
      return _this.viewComponent.classList.toggle("akamai-volume");
    });
    this.slider = document.createElement("div");
    this.slider.classList.add("akamai-slider");
    this.viewComponent.appendChild(this.slider);
    this.sliderView = document.createElement("div");
    this.sliderView.classList.add("akamai-slider-area");
    this.slider.appendChild(this.sliderView);
    this.trackView = document.createElement("div");
    this.trackView.classList.add("akamai-slider-track");
    this.sliderView.appendChild(this.trackView);
    this.valueView = document.createElement("div");
    this.valueView.classList.add("akamai-slider-value");
    this.sliderView.appendChild(this.valueView);
    this.handleView = document.createElement("div");
    this.handleView.classList.add("akamai-slider-handle");
    this.sliderView.appendChild(this.handleView);
    this.pressHandler = EventHandler.create(this.handleView, EventHandler.PRESS, function(event) {
      _this.dragHandler.bind();
      _this.releaseHandler.bind();
      _this.dragging = true;
      event.stopImmediatePropagation();
      return false;
    });
    this.releaseHandler = EventHandler.create(window, EventHandler.RELEASE, function(event) {
      _this.dragHandler.unbind();
      _this.releaseHandler.unbind();
      _this.dragging = false;
      _this.viewComponent.classList.remove("akamai-volume");
      event.stopImmediatePropagation();
      return false;
    });
    this.releaseHandler.unbind();
    this.dragHandler = EventHandler.create(window, EventHandler.MOVE, function(event) {
      var y;
      event.stopImmediatePropagation();
      y = event.clientY ? event.clientY : event.targetTouches[0].screenY;
      _this.setValue(_this.calculateValue(y));
      return false;
    });
    return this.dragHandler.unbind();
  };

  /** sets the value
  */


  VolumeMediator.prototype.setValue = function(percent) {
    return this.sendNotification(Notifications.CHANGE_VOLUME, percent);
  };

  /** updates the view
  */


  VolumeMediator.prototype.updateValue = function(percent) {
    this.value = Utils.clamp(percent * 100, 0, 100);
    this.valueView.style.height = "" + this.value + "%";
    return this.handleView.style.top = "" + (100 - this.value) + "%";
  };

  /** calculates the value based on y
  */


  VolumeMediator.prototype.calculateValue = function(y) {
    return 1 - Utils.clamp((y - Utils.getElementOffset(this.sliderView).top) / this.sliderView.offsetHeight, 0, 1);
  };

  /** @override
  */


  VolumeMediator.prototype.listNotificationInterests = function() {
    return [Notifications.VOLUME_CHANGE];
  };

  /** @override
  */


  VolumeMediator.prototype.handleNotification = function(notification) {
    switch (notification.getName()) {
      case Notifications.VOLUME_CHANGE:
        return this.updateValue(notification.getBody());
    }
  };

  return VolumeMediator;

})(puremvc.Mediator);

com.akamai.amp.player.model.localization.LocalizationConstants = (function() {

  LocalizationConstants.name = 'LocalizationConstants';

  function LocalizationConstants() {}

  LocalizationConstants.MSG_LIVE = "MSG_LIVE";

  LocalizationConstants.MSG_REPLAY = "MSG_REPLAY";

  LocalizationConstants.MSG_BUFFERING = "MSG_BUFFERING";

  LocalizationConstants.MSG_CC = "MSG_CC";

  return LocalizationConstants;

})();

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.TimeDisplayMediator = (function(_super) {

  __extends(TimeDisplayMediator, _super);

  TimeDisplayMediator.name = 'TimeDisplayMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  TimeDisplayMediator.NAME = "TimeDisplayMediator";

  TimeDisplayMediator.prototype.currentTimeText = null;

  TimeDisplayMediator.prototype.currentTime = 0;

  TimeDisplayMediator.prototype.separator = null;

  TimeDisplayMediator.prototype.durationText = null;

  TimeDisplayMediator.prototype.duration = null;

  /**
   * @constructor
  */


  var Notifications, MediaProxy, Utils, LocalizationConstants;


  function TimeDisplayMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    Utils = com.akamai.amp.core.Utils;

    LocalizationConstants = com.akamai.amp.player.model.localization.LocalizationConstants;
    TimeDisplayMediator.__super__.constructor.call(this, TimeDisplayMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  TimeDisplayMediator.prototype.onRegister = function() {
    var liveLabel;
    TimeDisplayMediator.__super__.onRegister.call(this);
    this.viewComponent.classList.add("akamai-time-display");
    liveLabel = document.createElement("div");
    liveLabel.classList.add("akamai-live-display");
    liveLabel.textContent = this.localizationManager.getString(LocalizationConstants.MSG_LIVE);
    this.viewComponent.appendChild(liveLabel);
    this.currentTimeText = document.createElement("div");
    this.currentTimeText.classList.add("akamai-current-time-display");
    this.currentTimeText.textContent = "00:00";
    this.viewComponent.appendChild(this.currentTimeText);
    this.separator = document.createElement("div");
    this.separator.classList.add("akamai-separator-display");
    this.separator.textContent = " / ";
    this.viewComponent.appendChild(this.separator);
    this.durationText = document.createElement("div");
    this.durationText.classList.add("akamai-duration-display");
    this.durationText.textContent = "00:00";
    return this.viewComponent.appendChild(this.durationText);
  };

  TimeDisplayMediator.prototype.listNotificationInterests = function() {
    return [Notifications.TIME_UPDATE, Notifications.DURATION_CHANGE];
  };

  TimeDisplayMediator.prototype.handleNotification = function(notification) {
    var mediaProxy;
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    switch (notification.getName()) {
      case Notifications.TIME_UPDATE:
        this.currentTime = notification.getBody();
        return this.currentTimeText.textContent = Utils.formatTimecode(this.currentTime, this.duration);
      case Notifications.DURATION_CHANGE:
        this.duration = notification.getBody();
        this.currentTimeText.textContent = Utils.formatTimecode(this.currentTime, this.duration);
        return this.durationText.textContent = Utils.formatTimecode(this.duration);
    }
  };

  return TimeDisplayMediator;

})(com.akamai.amp.player.view.LocalizedMediator);

com.akamai.amp.player.view.ApplicationPluginMediator = (function(_super) {

  __extends(ApplicationPluginMediator, _super);

  ApplicationPluginMediator.name = 'ApplicationPluginMediator';

  ApplicationPluginMediator.NAME = "ApplicationPluginMediator";

  ApplicationPluginMediator.prototype.plugins = null;

  ApplicationPluginMediator.prototype.registered = null;

  /**
   * Constructor.
   *
  */


  var Notifications, MessageEvent;


  function ApplicationPluginMediator() {
    Notifications = com.akamai.amp.player.Notifications;

    MessageEvent = com.akamai.amp.modules.MessageEvent;
    this.plugins = [];
    this.registered = [];
    ApplicationPluginMediator.__super__.constructor.call(this, ApplicationPluginMediator.NAME, {});
  }

  /**
   * Registers the appropriate pipes and listeners when
   * this class is registered 
   * 
   * @override
  */


  ApplicationPluginMediator.prototype.onRegister = function() {
    return ApplicationPluginMediator.__super__.onRegister.call(this);
  };

  /**
   * Overridden so this class may subscribe to all notifications
   * @return An Array
   * 
   * @override
  */


  ApplicationPluginMediator.prototype.listNotificationInterests = function() {
    return [Notifications.REGISTER_PLUGINS, Notifications.REGISTER_PLUGIN, Notifications.PLUGIN_REGISTERED];
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


  ApplicationPluginMediator.prototype.handleNotification = function(notification) {
    var name, plugin,
      _this = this;
    name = notification.getName();
    switch (name) {
      case Notifications.REGISTER_PLUGINS:
        this.plugins = notification.getBody();
        break;
      case Notifications.REGISTER_PLUGIN:
        plugin = notification.getBody();
        plugin.addEventListener(MessageEvent.MESSAGE, function(event) {
          if (event.origin !== _this.multitonKey) {
            return _this.facade.passMessage(event.message, event.target.multitonKey);
          }
        });
        this.facade.addEventListener(MessageEvent.MESSAGE, function(event) {
          if (event.origin === _this.multitonKey) {
            return plugin.passMessage(event.message, _this.multitonKey);
          }
        });
        if (typeof plugin.onRegister === "function") {
          plugin.onRegister();
        }
        break;
      case Notifications.PLUGIN_REGISTERED:
        plugin = notification.getBody();
        this.registered.push(plugin);
        this.facade.logger.debug("Plugin Registered: " + plugin.constructor.NAME);
        if (this.registered.length === this.plugins.length) {
          this.sendNotification(Notifications.READY, this.facade.config);
        }
    }
  };

  return ApplicationPluginMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.ControlsMediator = (function(_super) {

  __extends(ControlsMediator, _super);

  ControlsMediator.name = 'ControlsMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  ControlsMediator.NAME = "ControlsMediator";

  /**
   * @constructor
  */


  var Notifications, PlayPauseMediator, FullScreenMediator, ProgressMediator, TimeDisplayMediator, VolumeMediator;


  function ControlsMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    PlayPauseMediator = com.akamai.amp.player.view.PlayPauseMediator;

    FullScreenMediator = com.akamai.amp.player.view.FullScreenMediator;

    ProgressMediator = com.akamai.amp.player.view.ProgressMediator;

    TimeDisplayMediator = com.akamai.amp.player.view.TimeDisplayMediator;

    VolumeMediator = com.akamai.amp.player.view.VolumeMediator;
    ControlsMediator.__super__.constructor.call(this, ControlsMediator.NAME, viewComponent);
  }

  /**
   * @override
  */


  ControlsMediator.prototype.onRegister = function() {
    var child, flexibleArea,
      _this = this;
    ControlsMediator.__super__.onRegister.call(this);
    this.viewComponent.classList.add("akamai-controls");
    this.viewComponent.addEventListener("webkitTransitionStart", function(event) {
      return console.debug("Transition Start!", event);
    });
    this.viewComponent.addEventListener("webkitTransitionEnd", function(event) {
      return console.debug("Transition End!", event);
    });
    child = document.createElement("div");
    this.viewComponent.appendChild(child);
    this.facade.registerMediator(new PlayPauseMediator(child));
    child = document.createElement("div");
    this.viewComponent.appendChild(child);
    this.facade.registerMediator(new TimeDisplayMediator(child));
    flexibleArea = document.createElement("div");
    flexibleArea.classList.add("akamai-progress-area");
    this.viewComponent.appendChild(flexibleArea);
    child = document.createElement("div");
    flexibleArea.appendChild(child);
    this.facade.registerMediator(new ProgressMediator(child));
    child = document.createElement("div");
    child.classList.add("akamai-separator");
    return this.viewComponent.appendChild(child);
  };

  ControlsMediator.prototype.listNotificationInterests = function() {
    return [Notifications.READY, Notifications.ADD_CONTROL, Notifications.REMOVE_CONTROL];
  };

  ControlsMediator.prototype.handleNotification = function(notification) {
    var body, child, name, _ref;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case Notifications.READY:
        if (((_ref = body.fullscreen) != null ? _ref.enabled : void 0) !== false) {
          child = document.createElement("div");
          this.viewComponent.appendChild(child);
          return this.facade.registerMediator(new FullScreenMediator(child));
        }
        break;
      case Notifications.ADD_CONTROL:
        return this.viewComponent.appendChild(body);
      case Notifications.REMOVE_CONTROL:
        return this.viewComponent.appendChild(body);
    }
  };

  return ControlsMediator;

})(puremvc.Mediator);

/**
 *
 *
 * @member com.akamai.amp.player.view
*/

com.akamai.amp.player.view.ApplicationMediator = (function(_super) {

  __extends(ApplicationMediator, _super);

  ApplicationMediator.name = 'ApplicationMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {String}
  */


  ApplicationMediator.NAME = "ApplicationMediator";

  ApplicationMediator.prototype.core = null;

  ApplicationMediator.prototype.container = null;

  ApplicationMediator.prototype.medium = null;

  /** @constructor
  */


  var Event, Notifications, VideoMediator;


  function ApplicationMediator(viewComponent) {
    Event = com.akamai.amp.events.Event;

    Notifications = com.akamai.amp.player.Notifications;

    VideoMediator = com.akamai.amp.player.view.VideoMediator;
    ApplicationMediator.__super__.constructor.call(this, ApplicationMediator.NAME, viewComponent);
  }

  /** @override
  */


  ApplicationMediator.prototype.onRegister = function() {
    var device;
    ApplicationMediator.__super__.onRegister.call(this);
    this.viewComponent.classList.add("akamai-player");
    this.viewComponent.classList.add("akamai-html5");
    this.container = document.createElement("div");
    this.container.classList.add("akamai-video-area");
    this.viewComponent.appendChild(this.container);
    if (/iPhone/.test(navigator.userAgent)) {
      device = "iphone";
    } else if (/iPad/.test(navigator.userAgent)) {
      device = "ipad";
    } else if (/Android/.test(navigator.userAgent)) {
      device = "android";
    } else if (/Mac|Win32/.test(navigator.platform)) {
      device = "desktop";
    }
    if ((device != null)) {
      return this.viewComponent.classList.add("akamai-" + device);
    }
  };

  /** @override
  */


  ApplicationMediator.prototype.listNotificationInterests = function() {
    return [Notifications.DISPLAY_STATE_CHANGE, Notifications.ACTIVE_STATE_CHANGE, Notifications.PLAY_STATE_CHANGE, Notifications.PLAYBACK_CORE_CHANGE, Notifications.ADD_APPLICATION_STATE, Notifications.REMOVE_APPLICATION_STATE, Notifications.MEDIUM_CHANGE, Notifications.DURATION_CHANGE, Notifications.TEMPORAL_TYPE_CHANGE];
  };

  /** @override
  */


  ApplicationMediator.prototype.handleNotification = function(notification) {
    var body, name, newState, oldState, state, states;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case Notifications.PLAYBACK_CORE_CHANGE:
        if (this.core) {
          this.container.removeChild(this.core);
        }
        this.core = body;
        this.container.appendChild(this.core);
        return this.facade.registerMediator(new VideoMediator(this.core));
      case Notifications.ACTIVE_STATE_CHANGE:
      case Notifications.PLAY_STATE_CHANGE:
      case Notifications.DISPLAY_STATE_CHANGE:
      case Notifications.MEDIUM_CHANGE:
        states = body;
        newState = states.newState;
        oldState = states.oldState;
        if ((oldState != null) && this.viewComponent.classList.contains("akamai-" + oldState)) {
          this.viewComponent.classList.remove("akamai-" + oldState);
        }
        if (newState != null) {
          this.viewComponent.classList.add("akamai-" + newState);
        }
        return this.sendNotification(Notifications.DISPATCH_EVENT, new Event(name.toLowerCase(), body));
      case Notifications.ADD_APPLICATION_STATE:
        state = body;
        return this.viewComponent.classList.add("akamai-" + state);
      case Notifications.REMOVE_APPLICATION_STATE:
        state = body;
        return this.viewComponent.classList.remove("akamai-" + state);
      case Notifications.TEMPORAL_TYPE_CHANGE:
        if (body === "live") {
          return this.sendNotification(Notifications.ADD_APPLICATION_STATE, "live");
        } else {
          return this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "live");
        }
        break;
      case Notifications.DURATION_CHANGE:
        if (body > 3600) {
          return this.sendNotification(Notifications.ADD_APPLICATION_STATE, "long-form");
        } else {
          return this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "long-form");
        }
    }
  };

  return ApplicationMediator;

})(com.akamai.amp.modules.ModuleMediator);

/**
 * Initializes the model. Register all sub-proxies here.
*/

com.akamai.amp.player.controller.InitModelCommand = (function(_super) {

  __extends(InitModelCommand, _super);

  InitModelCommand.name = 'InitModelCommand';

  var ApplicationStateProxy, PlaybackProxy, MediaProxy, LocalizationProxy, UserSettingsProxy, TokenizationProxy, ParamsProxy;


  function InitModelCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    LocalizationProxy = com.akamai.amp.player.model.LocalizationProxy;

    UserSettingsProxy = com.akamai.amp.player.model.UserSettingsProxy;

    TokenizationProxy = com.akamai.amp.player.model.TokenizationProxy;

    ParamsProxy = com.akamai.amp.player.model.ParamsProxy;
    InitModelCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification The notification.
   * @override
  */


  InitModelCommand.prototype.execute = function(notification) {
    var config, tokenizationProxy;
    this.facade.logger.debug("InitModelCommand");
    config = notification.getBody();
    this.facade.registerProxy(new LocalizationProxy(config));
    this.facade.registerProxy(new ApplicationStateProxy());
    this.facade.registerProxy(new PlaybackProxy());
    this.facade.registerProxy(new MediaProxy());
    this.facade.registerProxy(new UserSettingsProxy());
    tokenizationProxy = this.facade.retrieveProxy(TokenizationProxy.NAME);
    this.facade.registerProxy(new ParamsProxy(config.params));
    tokenizationProxy.initialize();
  };

  return InitModelCommand;

})(puremvc.SimpleCommand);

/**
 * View initialization routine.
 * 
 * @member com.akamai.amp.player.controller
 *
 *
*/

com.akamai.amp.player.controller.InitViewCommand = (function(_super) {

  __extends(InitViewCommand, _super);

  InitViewCommand.name = 'InitViewCommand';

  var Notifications, EventHandler, ControlsMode, ApplicationMediator, ApplicationPluginMediator, ControlsMediator, TitleBarMediator, PlayOverlayMediator, ReplayOverlayMediator, ErrorSlateMediator, LoadingOverlayMediator, WaitingOverlayMediator, PosterMediator, ApplicationOverlayMediator, EndSlateMediator;


  function InitViewCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    EventHandler = com.akamai.amp.events.EventHandler;

    ControlsMode = com.akamai.amp.player.model.ControlsMode;

    ApplicationMediator = com.akamai.amp.player.view.ApplicationMediator;

    ApplicationPluginMediator = com.akamai.amp.player.view.ApplicationPluginMediator;

    ControlsMediator = com.akamai.amp.player.view.ControlsMediator;

    TitleBarMediator = com.akamai.amp.player.view.TitleBarMediator;

    PlayOverlayMediator = com.akamai.amp.player.view.PlayOverlayMediator;

    ReplayOverlayMediator = com.akamai.amp.player.view.ReplayOverlayMediator;

    ErrorSlateMediator = com.akamai.amp.player.view.ErrorSlateMediator;

    LoadingOverlayMediator = com.akamai.amp.player.view.LoadingOverlayMediator;

    WaitingOverlayMediator = com.akamai.amp.player.view.WaitingOverlayMediator;

    PosterMediator = com.akamai.amp.player.view.PosterMediator;

    ApplicationOverlayMediator = com.akamai.amp.player.view.ApplicationOverlayMediator;

    EndSlateMediator = com.akamai.amp.player.view.EndSlateMediator;
    InitViewCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  InitViewCommand.prototype.execute = function(notification) {
    var app, controls, errorslate, overlay, _ref,
      _this = this;
    this.facade.logger.debug("InitViewCommand");
    this.facade.container = app = document.getElementById(this.facade.multitonKey);
    this.facade.registerMediator(new ApplicationMediator(app));
    this.facade.registerMediator(new ApplicationPluginMediator());
    overlay = document.createElement("div");
    app.appendChild(overlay);
    this.facade.registerMediator(new ApplicationOverlayMediator(overlay));
    EventHandler.create(overlay, EventHandler.CLICK, function() {
      return _this.sendNotification(Notifications.TOGGLE_ACTIVE);
    });
    this.facade.registerMediator(new PosterMediator());
    this.facade.registerMediator(new LoadingOverlayMediator());
    this.facade.registerMediator(new WaitingOverlayMediator());
    this.facade.registerMediator(new PlayOverlayMediator());
    this.facade.registerMediator(new ReplayOverlayMediator());
    this.facade.registerMediator(new EndSlateMediator());
    this.facade.registerMediator(new TitleBarMediator());
    errorslate = document.createElement("div");
    app.appendChild(errorslate);
    this.facade.registerMediator(new ErrorSlateMediator(errorslate));
    controls = document.createElement("div");
    app.appendChild(controls);
    this.facade.registerMediator(new ControlsMediator(controls));
    if (((_ref = notification.getBody().controls) != null ? _ref.mode : void 0) === ControlsMode.PERSISTENT) {
      return app.classList.add("akamai-persistent-controls");
    }
  };

  return InitViewCommand;

})(puremvc.SimpleCommand);

/**
 * Used to track metadata associated with the video such as src, title and duration.
 * 
 * @member com.akamai.amp.player.model
 *
 *
*/

com.akamai.amp.player.model.MediaProxy = (function(_super) {

  __extends(MediaProxy, _super);

  MediaProxy.name = 'MediaProxy';

  /** @static
  */


  MediaProxy.NAME = "MediaProxy";

  /** @private
  */


  MediaProxy.prototype.data = null;

  MediaProxy.prototype.initialized = false;

  /**
   * Creates a new instance of MediaProxy.
   * 
   * @constructor
  */


  var Notifications, PlaybackProxy, ApplicationStateProxy;


  function MediaProxy() {
    Notifications = com.akamai.amp.player.Notifications;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;
    this.data = {
      metadata: {}
    };
    MediaProxy.__super__.constructor.call(this);
  }

  /**
   * Gets the data for this proxy.
   * 
   * @returns {Object} 
   *    The data for this proxy
   * @override
  */


  MediaProxy.prototype.getData = function() {
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
    this.data.type = value.type;
    if (value.source != null) {
      this.setSource(value.source);
    }
    if (value.src != null) {
      this.setSrc(value.src);
    }
    this.data.title = value.title;
    this.setDuration(value.duration);
    this.data.poster = value.poster;
    this.data.guid = value.guid;
    this.data.link = value.link;
    this.data.embed = value.embed;
    this.data.width = value.width;
    this.data.height = value.height;
    this.data.category = value.category;
    this.data.description = value.description;
    this.data.status = value.status;
    this.data.metadata = value.metadata || {};
    if (value.isLive != null) {
      this.setIsLive(value.isLive);
    }
    if (value.temporalType != null) {
      this.setTemporalType(value.temporalType);
    }
    if (value.medium != null) {
      this.setMedium(value.medium);
    }
    return value;
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

  MediaProxy.prototype.setLint = function(value) {
    return this.data.link = value;
  };

  MediaProxy.prototype.getEmbed = function() {
    return this.data.embed;
  };

  MediaProxy.prototype.setEmbed = function(value) {
    return this.data.embed = value;
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
    return this.data.src;
  };

  MediaProxy.prototype.setSrc = function(value) {
    this.data.src = value;
    if ((this.data.src != null) && !(this.data.type != null)) {
      return this.setType(Utils.getMimeType(this.data.src));
    }
  };

  /**
   * The mimeType of the video.
  */


  MediaProxy.prototype.getType = function() {
    return this.data.type;
  };

  MediaProxy.prototype.setType = function(value) {
    var medium;
    this.data.type = value;
    medium = /audio/.test(this.data.type) ? "audio" : "video";
    return this.setMedium(medium);
  };

  /**
   * The medium the video. ie audio, video, executable
  */


  MediaProxy.prototype.getMedium = function() {
    return this.data.medium;
  };

  MediaProxy.prototype.setMedium = function(value) {
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
    var item, playbackProxy,
      _this = this;
    if (!(value != null) || value.length < 1) {
      return;
    }
    this.data.source = value;
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    item = Utils.selectSource(value, function(type) {
      return playbackProxy.canPlayType(type);
    });
    if (((item != null ? item.src : void 0) != null) && item.src !== "") {
      this.setSrc(item.src);
      if (typeof type !== "undefined" && type !== null) {
        return this.setType(type);
      }
    } else {
      throw new Error("No valid source could be found");
    }
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
    if (value === 0) {
      return;
    }
    if (value !== this.data.duration) {
      this.data.duration = value;
      this.sendNotification(Notifications.DURATION_CHANGE, value);
    }
    if (value === Infinity) {
      return this.setTemporalType("live");
    }
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
    return this.data.poster = value;
  };

  /**
   *
  */


  MediaProxy.prototype.getIsLive = function() {
    return this.data.isLive;
  };

  MediaProxy.prototype.setIsLive = function(value) {
    if (value !== this.data.isLive) {
      return this.data.isLive = value;
    }
  };

  /**
   *
  */


  MediaProxy.prototype.getTemporalType = function() {
    return this.data.temporalType;
  };

  MediaProxy.prototype.setTemporalType = function(value) {
    if (value !== this.data.temporalType) {
      this.data.temporalType = value;
      return this.sendNotification(Notifications.TEMPORAL_TYPE_CHANGE, value);
    }
  };

  return MediaProxy;

})(puremvc.Proxy);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ToggleFullScreenCommand = (function(_super) {

  __extends(ToggleFullScreenCommand, _super);

  ToggleFullScreenCommand.name = 'ToggleFullScreenCommand';

  var ApplicationStateProxy, DisplayState, Notifications;


  function ToggleFullScreenCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    DisplayState = com.akamai.amp.player.model.DisplayState;

    Notifications = com.akamai.amp.player.Notifications;
    ToggleFullScreenCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ToggleFullScreenCommand.prototype.execute = function(notification) {
    var appProxy, state;
    appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    state = appProxy.getDisplayState() === DisplayState.FULL_SCREEN ? DisplayState.NORMAL : DisplayState.FULL_SCREEN;
    return this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, state);
  };

  return ToggleFullScreenCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.PauseCommand = (function(_super) {

  __extends(PauseCommand, _super);

  PauseCommand.name = 'PauseCommand';

  var PlaybackProxy;


  function PauseCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;
    PauseCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  PauseCommand.prototype.execute = function(notification) {
    var playbackProxy;
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    return playbackProxy.pause();
  };

  return PauseCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.player.controller.ChangeDisplayStateCommand = (function(_super) {

  __extends(ChangeDisplayStateCommand, _super);

  ChangeDisplayStateCommand.name = 'ChangeDisplayStateCommand';

  var Notifications, ApplicationStateProxy, PlaybackProxy, DisplayState, EventHandler;


  function ChangeDisplayStateCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    DisplayState = com.akamai.amp.player.model.DisplayState;

    EventHandler = com.akamai.amp.events.EventHandler;
    ChangeDisplayStateCommand.__super__.constructor.apply(this, arguments);
  }

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
    var core, fullscreen, playback, proxy, state,
      _this = this;
    state = notification.getBody();
    playback = this.facade.retrieveProxy(PlaybackProxy.NAME);
    core = playback.getCore();
    if (!(core != null) || !core.webkitSupportsFullscreen) {
      return;
    }
    proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    proxy.setDisplayState(state);
    fullscreen = {};
    if (core.webkitRequestFullScreen != null) {
      fullscreen.enter = function() {
        return core.webkitRequestFullScreen();
      };
      fullscreen.exit = function() {
        return document.webkitCancelFullScreen();
      };
      fullscreen.event = "onwebkitfullscreenchange";
      fullscreen.element = "webkitFullscreenElement";
    } else if (core.requestFullscreen != null) {
      fullscreen.enter = function() {
        return core.requestFullscreen();
      };
      fullscreen.exit = function() {
        return document.cancelFullscreen();
      };
      fullscreen.event = "onfullscreenchange";
      fullscreen.element = "fullscreenElement";
    } else if (core.mozRequestFullScreen != null) {
      fullscreen.enter = function() {
        return core.mozRequestFullscreen();
      };
      fullscreen.exit = function() {
        return document.mozCancelFullScreen();
      };
      fullscreen.event = "onmozfullscreenchange";
      fullscreen.element = "mozFullscreenElement";
    } else if (core.webkitEnterFullscreen != null) {
      fullscreen.enter = function() {
        return core.webkitEnterFullscreen();
      };
      fullscreen.exit = function() {
        return core.webkitExitFullscreen();
      };
      fullscreen.event = null;
    }
    if (state === DisplayState.FULL_SCREEN) {
      fullscreen.enter();
      if (fullscreen.event != null) {
        return core[fullscreen.event] = function(event) {
          if (!(document[fullscreen.element] != null)) {
            return _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
          }
        };
      } else {
        clearInterval(ChangeDisplayStateCommand.interval);
        return ChangeDisplayStateCommand.interval = setInterval(function() {
          if (core.webkitDisplayingFullscreen !== true) {
            _this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
            return clearInterval(ChangeDisplayStateCommand.interval);
          }
        }, 100);
      }
    } else if (state === DisplayState.NORMAL) {
      fullscreen.exit();
      core[fullscreen.event] = null;
      return clearInterval(ChangeDisplayStateCommand.interval);
    }
  };

  return ChangeDisplayStateCommand;

})(puremvc.SimpleCommand);

/**
 * Used to track player configuration settings
 * 
 * @member com.akamai.amp.player.model
 *
 *
*/

com.akamai.amp.player.model.ConfigurationProxy = (function(_super) {

  __extends(ConfigurationProxy, _super);

  ConfigurationProxy.name = 'ConfigurationProxy';

  /** @static
  */


  ConfigurationProxy.NAME = com.akamai.amp.modules.ModuleConfigurationProxy.NAME;

  /** @private
  */


  ConfigurationProxy.prototype.data = {
    name: null,
    autoplay: false,
    loop: false,
    controls: null,
    fullscreen: null,
    target: null,
    domain: null,
    endslate: null
  };

  /**
   * Creates a new instance of MediaProxy.
   * 
   * @constructor
  */


  function ConfigurationProxy(config) {
    ConfigurationProxy.__super__.constructor.call(this, config);
    this.setDefaults();
  }

  /**
  */


  ConfigurationProxy.prototype.setDefaults = function() {
    var _base, _base1, _ref;
    if ((_base = this.data).target == null) {
      _base.target = "_blank";
    }
    return (_ref = (_base1 = this.data).controls) != null ? _ref : _base1.controls = {};
  };

  /**
   * @override
  */


  ConfigurationProxy.prototype.setData = function(data) {
    if (data.rules != null) {
      Utils.mergeRules(data.rules);
    }
    return ConfigurationProxy.__super__.setData.call(this, data);
  };

  /**
   * Auto play.
  */


  ConfigurationProxy.prototype.getAutoplay = function() {
    return this.data.autoplay;
  };

  ConfigurationProxy.prototype.setAutoplay = function(value) {
    return this.data.autoplay = value;
  };

  /**
   * Auto play.
  */


  ConfigurationProxy.prototype.getLoop = function() {
    return this.data.loop;
  };

  ConfigurationProxy.prototype.setLoop = function(value) {
    return this.data.loop = value;
  };

  /**
   * End Slate.
  */


  ConfigurationProxy.prototype.getEndSlate = function() {
    return this.data.endslate;
  };

  ConfigurationProxy.prototype.setEndSlate = function(value) {
    return this.data.endslate = value;
  };

  /**
   * Domain
  */


  ConfigurationProxy.prototype.getDomain = function() {
    return this.data.domain;
  };

  ConfigurationProxy.prototype.setDomain = function(value) {
    return this.data.domain = value;
  };

  /**
   * Target.
  */


  ConfigurationProxy.prototype.getTarget = function() {
    return this.data.target;
  };

  ConfigurationProxy.prototype.setTarget = function(value) {
    return this.data.target = value;
  };

  /**
   * Native full screen.
  */


  ConfigurationProxy.prototype.getNative = function() {
    return this.data["native"];
  };

  ConfigurationProxy.prototype.setNative = function(value) {
    return this.data["native"] = value;
  };

  /**
   * The player name.
  */


  ConfigurationProxy.prototype.getName = function() {
    return this.data.name;
  };

  ConfigurationProxy.prototype.setName = function(value) {
    return this.data.name = value;
  };

  /**
   * Controls
  */


  ConfigurationProxy.prototype.getControls = function() {
    return this.data.controls;
  };

  ConfigurationProxy.prototype.setControls = function(value) {
    return this.data.controls = value;
  };

  /**
   * Controls
  */


  ConfigurationProxy.prototype.getFullscreen = function() {
    return this.data.fullscreen;
  };

  ConfigurationProxy.prototype.setFullscreen = function(value) {
    return this.data.fullscreen = value;
  };

  return ConfigurationProxy;

})(com.akamai.amp.modules.ModuleConfigurationProxy);

com.akamai.amp.player.model.ControlsMode = (function() {

  ControlsMode.name = 'ControlsMode';

  function ControlsMode() {}

  /**
   * Constant representing the persistent controls mode
   * 
   * @static
   * @type {String}
  */


  ControlsMode.PERSISTENT = "persistent";

  return ControlsMode;

})();

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangePlaybackCoreCommand = (function(_super) {
  var started;

  __extends(ChangePlaybackCoreCommand, _super);

  ChangePlaybackCoreCommand.name = 'ChangePlaybackCoreCommand';

  var Notifications, EventHandler, MediaProxy, PlaybackProxy, PlayState;


  function ChangePlaybackCoreCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    EventHandler = com.akamai.amp.events.EventHandler;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    PlayState = com.akamai.amp.player.model.PlayState;
    ChangePlaybackCoreCommand.__super__.constructor.apply(this, arguments);
  }

  started = false;

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangePlaybackCoreCommand.prototype.execute = function(notification) {
    var core, mediaProxy, oldCore, playbackProxy,
      _this = this;
    this.facade.logger.debug("ChangePlaybackCoreCommand");
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    core = notification.getBody();
    oldCore = playbackProxy.getCore();
    this.facade.video = core;
    if (oldCore) {
      EventHandler.clear(oldCore);
    }
    EventHandler.create(core, "timeupdate", function(event) {
      return _this.sendNotification(Notifications.TIME_UPDATE, event.target.currentTime);
    });
    EventHandler.create(core, "durationchange", function(event) {
      _this.facade.logger.debug("Playback core: durationchange: " + event.target.duration);
      if (/Android 4/.test(navigator.userAgent) && event.target.src.indexOf(".m3u8") !== -1) {
        return;
      }
      _this.sendNotification(Notifications.CHANGE_DURATION, event.target.duration);
    });
    EventHandler.create(core, "playing", function(event) {
      _this.facade.logger.debug("Playback core: playing");
      return _this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
    });
    EventHandler.create(core, "pause", function(event) {
      _this.facade.logger.debug("Playback core: pause");
      if (event.target.readyState > 0) {
        return _this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
      }
    });
    EventHandler.create(core, "waiting", function(event) {
      _this.facade.logger.debug("Playback core: waiting");
      return _this.sendNotification(Notifications.WAITING);
    });
    EventHandler.create(core, "seeked", function(event) {
      _this.facade.logger.debug("Playback core: seeked");
      return _this.sendNotification(Notifications.SEEKED);
    });
    EventHandler.create(core, "ended", function(event) {
      _this.facade.logger.debug("Playback core: ended");
      return _this.sendNotification(Notifications.ENDED);
    });
    EventHandler.create(core, "progress", function(event) {
      var buffered, video;
      try {
        video = event.target;
        buffered = video.buffered;
        _this.sendNotification(Notifications.PROGRESS, buffered.end(buffered.length - 1) / video.duration);
      } catch (error) {

      }
    });
    EventHandler.create(core, "error", function(event) {
      _this.facade.logger.debug("Playback core: error");
      return _this.sendNotification(Notifications.ERROR, event.target.error);
    });
    EventHandler.create(core, "canplaythrough", function(event) {
      _this.facade.logger.debug("Playback core: canplaythrough");
      return _this.sendNotification(Notifications.PROGRESS, mediaProxy.getDuration());
    });
    EventHandler.create(core, "loadedmetadata", function(event) {
      _this.facade.logger.debug("Playback core: loadedmetadata");
      _this.sendNotification(Notifications.ENABLE_FULL_SCREEN);
      if (/Android 4/.test(navigator.userAgent) && event.target.src.indexOf(".m3u8") !== -1) {
        return;
      }
      _this.sendNotification(Notifications.CHANGE_DURATION, event.target.duration);
    });
    EventHandler.create(core, "loadstart", function(event) {
      return _this.facade.logger.debug("Playback core: loadstart");
    });
    EventHandler.create(core, "canplay", function(event) {
      return _this.facade.logger.debug("Playback core: canplay");
    });
    EventHandler.create(core, "loadeddata", function(event) {
      return _this.facade.logger.debug("Playback core: loadeddata");
    });
    EventHandler.create(core, "stalled", function(event) {
      return _this.facade.logger.debug("Playback core: stalled");
    });
    EventHandler.create(core, "emptied", function(event) {
      return _this.facade.logger.debug("Playback core: emptied");
    });
    this.sendNotification(Notifications.DISABLE_FULL_SCREEN);
    return playbackProxy.setCore(core);
  };

  return ChangePlaybackCoreCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.ChangeAutoplayCommand = (function(_super) {

  __extends(ChangeAutoplayCommand, _super);

  ChangeAutoplayCommand.name = 'ChangeAutoplayCommand';

  var ConfigurationProxy;


  function ChangeAutoplayCommand() {
    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;
    ChangeAutoplayCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeAutoplayCommand.prototype.execute = function(notification) {
    var proxy;
    proxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    return proxy.setAutoplay(notification.getBody());
  };

  return ChangeAutoplayCommand;

})(puremvc.SimpleCommand);

/**
 * Used to track player configuration settings
 * 
 * @member com.akamai.amp.player.model
 *
 *
*/

com.akamai.amp.player.model.UserSettingsProxy = (function(_super) {

  __extends(UserSettingsProxy, _super);

  UserSettingsProxy.name = 'UserSettingsProxy';

  /** @static
  */


  UserSettingsProxy.NAME = "UserSettingsProxy";

  UserSettingsProxy.NAMESPACE = "akamai_";

  /**
   * Creates a new instance of MediaProxy.
   * 
   * @constructor
  */


  function UserSettingsProxy() {
    UserSettingsProxy.__super__.constructor.call(this);
  }

  /**
   * Creates a new instance of MediaProxy.
   * 
   * @constructor
  */


  UserSettingsProxy.prototype.getVolume = function() {
    return localStorage.getItem(UserSettingsProxy.NAMESPACE + "volume") || 1;
  };

  UserSettingsProxy.prototype.setVolume = function(value) {
    return localStorage.setItem(UserSettingsProxy.NAMESPACE + "volume", value);
  };

  return UserSettingsProxy;

})(puremvc.Proxy);

/**
 *
*/

com.akamai.amp.player.controller.ChangeLoopCommand = (function(_super) {

  __extends(ChangeLoopCommand, _super);

  ChangeLoopCommand.name = 'ChangeLoopCommand';

  var ConfigurationProxy;


  function ChangeLoopCommand() {
    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;
    ChangeLoopCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeLoopCommand.prototype.execute = function(notification) {
    var proxy;
    proxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    return proxy.setLoop(notification.getBody());
  };

  return ChangeLoopCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.ChangeMediaCommand = (function(_super) {

  __extends(ChangeMediaCommand, _super);

  ChangeMediaCommand.name = 'ChangeMediaCommand';

  var MediaProxy, Notifications;


  function ChangeMediaCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    Notifications = com.akamai.amp.player.Notifications;
    ChangeMediaCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeMediaCommand.prototype.execute = function(notification) {
    var media, mediaProxy;
    this.facade.logger.debug("ChangeMediaCommand", notification.getBody());
    media = notification.getBody();
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    mediaProxy.setData(media);
    this.sendNotification(Notifications.UPDATE_TOKEN_CONTEXT);
    this.sendNotification(Notifications.AUTHENTICATE, mediaProxy.getData());
  };

  return ChangeMediaCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.MediaChangeCommand = (function(_super) {

  __extends(MediaChangeCommand, _super);

  MediaChangeCommand.name = 'MediaChangeCommand';

  var ConfigurationProxy, MediaProxy, Notifications;


  function MediaChangeCommand() {
    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    Notifications = com.akamai.amp.player.Notifications;
    MediaChangeCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaChangeCommand.prototype.execute = function(notification) {
    var autoStart, configProxy, media, mediaProxy;
    this.facade.logger.debug("MediaChangeCommand", notification.getBody());
    media = notification.getBody();
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    configProxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    autoStart = mediaProxy.initialized && configProxy.getAutoplay();
    if (autoStart) {
      return this.sendNotification(Notifications.START);
    }
  };

  return MediaChangeCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangeDurationCommand = (function(_super) {

  __extends(ChangeDurationCommand, _super);

  ChangeDurationCommand.name = 'ChangeDurationCommand';

  var MediaProxy, PlayState, Notifications;


  function ChangeDurationCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;
    ChangeDurationCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeDurationCommand.prototype.execute = function(notification) {
    var duration, mediaProxy;
    this.facade.logger.debug("ChangeDurationCommand", notification.getBody());
    duration = notification.getBody();
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    if (mediaProxy.getDuration() === duration) {
      return;
    }
    return mediaProxy.setDuration(duration);
  };

  return ChangeDurationCommand;

})(puremvc.SimpleCommand);

/**
 * Updates the playback core proxy with the values from the 
 * metadata proxy.
 * 
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.UpdatePlaybackCoreCommand = (function(_super) {

  __extends(UpdatePlaybackCoreCommand, _super);

  UpdatePlaybackCoreCommand.name = 'UpdatePlaybackCoreCommand';

  var MediaProxy, PlaybackProxy, UserSettingsProxy, ActiveState, Notifications;


  function UpdatePlaybackCoreCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    UserSettingsProxy = com.akamai.amp.player.model.UserSettingsProxy;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    Notifications = com.akamai.amp.player.Notifications;
    UpdatePlaybackCoreCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  UpdatePlaybackCoreCommand.prototype.execute = function(notification) {
    var mediaProxy, playbackProxy, src, userProxy;
    this.facade.logger.debug("UpdatePlaybackCoreCommand");
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    userProxy = this.facade.retrieveProxy(UserSettingsProxy.NAME);
    playbackProxy.setVolume(userProxy.getVolume());
    src = mediaProxy.getSrc();
    if ((src != null) && src !== "" && src !== "undefined") {
      playbackProxy.setSrc(mediaProxy.getSrc());
      return playbackProxy.load();
    }
  };

  return UpdatePlaybackCoreCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.SeekCommand = (function(_super) {

  __extends(SeekCommand, _super);

  SeekCommand.name = 'SeekCommand';

  var PlaybackProxy, PlayState, Notifications;


  function SeekCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;
    SeekCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  SeekCommand.prototype.execute = function(notification) {
    var handler, playbackProxy, time;
    time = notification.getBody();
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    if (playbackProxy.core.readyState === 0) {
      handler = function(event) {
        playbackProxy.core.removeEventListener("loadedmetadata", handler, false);
        return playbackProxy.setCurrentTime(time);
      };
      playbackProxy.core.addEventListener("loadedmetadata", handler, false);
    } else {
      playbackProxy.setCurrentTime(time);
    }
    return this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.WAITING);
  };

  return SeekCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.SeekedCommand = (function(_super) {

  __extends(SeekedCommand, _super);

  SeekedCommand.name = 'SeekedCommand';

  var PlayState, PlaybackProxy, Notifications;


  function SeekedCommand() {
    PlayState = com.akamai.amp.player.model.PlayState;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;
    SeekedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  SeekedCommand.prototype.execute = function(notification) {
    var proxy, src;
    proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    src = proxy.getSrc();
    if (src.indexOf(".m3u8") === -1) {
      this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PLAYING);
    }
    if (proxy.getPaused()) {
      return this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.PAUSED);
    }
  };

  return SeekedCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ReplayCommand = (function(_super) {

  __extends(ReplayCommand, _super);

  ReplayCommand.name = 'ReplayCommand';

  var PlaybackProxy, Notifications;


  function ReplayCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;
    ReplayCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ReplayCommand.prototype.execute = function(notification) {
    var playbackProxy;
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    playbackProxy.setCurrentTime(0.25);
    return this.sendNotification(Notifications.PLAY);
  };

  return ReplayCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.EndCommand = (function(_super) {

  __extends(EndCommand, _super);

  EndCommand.name = 'EndCommand';

  var PlaybackProxy, Notifications;


  function EndCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;
    EndCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  EndCommand.prototype.execute = function(notification) {
    var playbackProxy, time;
    this.facade.logger.debug("EndCommand", notification);
    time = notification.getBody();
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    playbackProxy.pause();
    if (playbackProxy.getCurrentTime() !== playbackProxy.getDuration()) {
      return playbackProxy.setCurrentTime(playbackProxy.getDuration());
    }
  };

  return EndCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.EndedCommand = (function(_super) {

  __extends(EndedCommand, _super);

  EndedCommand.name = 'EndedCommand';

  var PlayState, ActiveState, ConfigurationProxy, Notifications;


  function EndedCommand() {
    PlayState = com.akamai.amp.player.model.PlayState;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;

    Notifications = com.akamai.amp.player.Notifications;
    EndedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  EndedCommand.prototype.execute = function(notification) {
    var config;
    this.facade.logger.debug("EndedCommand", notification);
    config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    if (config.getLoop() === true) {
      return this.sendNotification(Notifications.REPLAY);
    } else {
      this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ENDED);
      return this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
    }
  };

  return EndedCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ErrorCommand = (function(_super) {

  __extends(ErrorCommand, _super);

  ErrorCommand.name = 'ErrorCommand';

  var PlaybackProxy, Notifications, EventHandler, PlayState;


  function ErrorCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;

    EventHandler = com.akamai.amp.events.EventHandler;

    PlayState = com.akamai.amp.player.model.PlayState;
    ErrorCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ErrorCommand.prototype.execute = function(notification) {
    var core, playbackProxy;
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    core = playbackProxy.getCore();
    EventHandler.clear(core);
    this.facade.logger.error(notification.getBody());
    return this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.ERROR);
  };

  return ErrorCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.StartCommand = (function(_super) {

  __extends(StartCommand, _super);

  StartCommand.name = 'StartCommand';

  var MediaProxy, PlaybackProxy, PlayState, Notifications, ActiveState, Utils;


  function StartCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    Utils = com.akamai.amp.core.Utils;
    StartCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  StartCommand.prototype.execute = function(notification) {
    var mediaProxy, playbackProxy;
    this.facade.logger.debug("StartCommand");
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    if (mediaProxy.getSrc() !== playbackProxy.getSrc()) {
      this.sendNotification(Notifications.UPDATE_PLAYBACK_CORE, false);
    }
    this.sendNotification(Notifications.STARTED);
    if (Utils.isIOS()) {
      playbackProxy.load();
    }
    this.sendNotification(Notifications.PLAY, notification.getBody());
    return this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.INACTIVE);
  };

  return StartCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.StartedCommand = (function(_super) {

  __extends(StartedCommand, _super);

  StartedCommand.name = 'StartedCommand';

  var PlaybackProxy, PlayState, Notifications, Event;


  function StartedCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;

    Event = com.akamai.amp.events.Event;
    StartedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  StartedCommand.prototype.execute = function(notification) {
    var playbackProxy;
    this.facade.logger.debug("StartedCommand");
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    playbackProxy.setStarted(true);
    return this.facade.dispatchEvent(new Event(Notifications.STARTED));
  };

  return StartedCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
*/

com.akamai.amp.player.controller.ReadyCommand = (function(_super) {

  __extends(ReadyCommand, _super);

  ReadyCommand.name = 'ReadyCommand';

  var Notifications, ActiveState, DisplayState, PlayState, Event;


  function ReadyCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    DisplayState = com.akamai.amp.player.model.DisplayState;

    PlayState = com.akamai.amp.player.model.PlayState;

    Event = com.akamai.amp.events.Event;
    ReadyCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ReadyCommand.prototype.execute = function(notification) {
    var media, _ref;
    this.facade.logger.debug("ReadyCommand");
    this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
    this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.READY);
    this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, ActiveState.ACTIVE);
    this.facade.dispatchEvent(new Event(Notifications.READY));
    media = (_ref = this.facade.config) != null ? _ref.media : void 0;
    if (media != null) {
      return this.sendNotification(Notifications.CHANGE_MEDIA, media);
    }
  };

  return ReadyCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.tokenization.ITokenized = (function() {

  ITokenized.name = 'ITokenized';

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

  return ITokenized;

})();

com.akamai.amp.tokenization.TokenizedBase = (function(_super) {

  __extends(TokenizedBase, _super);

  TokenizedBase.name = 'TokenizedBase';

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
   *
  */


  var TokenizedValue, TokenizedObject, TokenizedArray;


  function TokenizedBase(source) {
    TokenizedValue = com.akamai.amp.tokenization.TokenizedValue;

    TokenizedObject = com.akamai.amp.tokenization.TokenizedObject;

    TokenizedArray = com.akamai.amp.tokenization.TokenizedArray;
    if (source != null) {
      this.parse(source);
    }
  }

  /**
   * Populates the data property with tokenized values
   * 
   * @param   source  The tokenized data structure.
   * @return          The parsed data structure.
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

  return TokenizedBase;

})(com.akamai.amp.tokenization.ITokenized);

com.akamai.amp.tokenization.TokenizedArray = (function(_super) {

  __extends(TokenizedArray, _super);

  /**
   *
  */


  TokenizedArray.name = 'TokenizedArray';

  var Logger;


  function TokenizedArray(data) {
    Logger = com.akamai.amp.core.Logger;
    TokenizedArray.__super__.constructor.call(this, data);
  }

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

  return TokenizedArray;

})(com.akamai.amp.tokenization.TokenizedBase);

/**
 *
*/

com.akamai.amp.player.controller.ChangeParamsCommand = (function(_super) {

  __extends(ChangeParamsCommand, _super);

  ChangeParamsCommand.name = 'ChangeParamsCommand';

  var ParamsProxy, Notifications;


  function ChangeParamsCommand() {
    ParamsProxy = com.akamai.amp.player.model.ParamsProxy;

    Notifications = com.akamai.amp.player.Notifications;
    ChangeParamsCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeParamsCommand.prototype.execute = function(notification) {
    var params, proxy;
    this.facade.logger.debug("ChangeParamsCommand", notification.getBody());
    params = notification.getBody();
    proxy = this.facade.retrieveProxy(ParamsProxy.NAME);
    proxy.setParams(params);
    return this.sendNotification(Notifications.UPDATE_TOKEN_CONTEXT);
  };

  return ChangeParamsCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.AuthenticateCommand = (function(_super) {

  __extends(AuthenticateCommand, _super);

  AuthenticateCommand.name = 'AuthenticateCommand';

  var PlaybackProxy, Notifications;


  function AuthenticateCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;
    AuthenticateCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  AuthenticateCommand.prototype.execute = function(notification) {
    var auth, media;
    this.facade.logger.debug("AuthenticateCommand");
    media = notification.getBody();
    auth = this.facade.features.auth;
    if ((auth != null) && (media.status != null) && media.status.state === "blocked" && media.status.reason === "ais") {
      return auth.authenticate(media);
    } else {
      return this.sendNotification(Notifications.AUTHENTICATED, {
        media: media
      });
    }
  };

  return AuthenticateCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.AuthenticatedCommand = (function(_super) {

  __extends(AuthenticatedCommand, _super);

  AuthenticatedCommand.name = 'AuthenticatedCommand';

  var Notifications, PlaybackProxy;


  function AuthenticatedCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;
    AuthenticatedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  AuthenticatedCommand.prototype.execute = function(notification) {
    var body, media, startTime;
    this.facade.logger.debug("AuthenticatedCommand");
    body = notification.getBody();
    media = body.media;
    startTime = body.startTime;
    this.sendNotification(Notifications.UPDATE_PLAYBACK_CORE);
    this.sendNotification(Notifications.MEDIA_CHANGE, media);
    if (startTime != null) {
      return this.sendNotification(Notifications.SEEK, startTime);
    }
  };

  return AuthenticatedCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.InitializedCommand = (function(_super) {

  __extends(InitializedCommand, _super);

  InitializedCommand.name = 'InitializedCommand';

  var MediaProxy;


  function InitializedCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;
    InitializedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  InitializedCommand.prototype.execute = function(notification) {
    var proxy;
    this.facade.logger.debug("InitializedCommand");
    proxy = this.facade.retrieveProxy(MediaProxy.NAME);
    return proxy.initialized = true;
  };

  return InitializedCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.tokenization.TokenizationError = (function(_super) {

  __extends(TokenizationError, _super);

  TokenizationError.name = 'TokenizationError';

  TokenizationError.MESSAGE = "Tokenization Error: Could not find token value for: ";

  function TokenizationError(msg) {
    this.message = TokenizationError.MESSAGE + msg;
  }

  return TokenizationError;

})(Error);

com.akamai.amp.tokenization.Literal = (function(_super) {

  __extends(Literal, _super);

  Literal.name = 'Literal';

  /**
   * Constructor.
   * 
   * @param   source  A tokenized data structure to be passed to the <code>parse</code> function.
  */


  function Literal(source) {
    Literal.__super__.constructor.call(this, source);
  }

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

  return Literal;

})(com.akamai.amp.tokenization.TokenizedBase);

com.akamai.amp.tokenization.Token = (function(_super) {

  __extends(Token, _super);

  Token.name = 'Token';

  /**
   * The function used to evaluate a token value
  */


  Token.prototype.exec = null;

  /**
   *
  */


  var TokenizationError;


  function Token(source) {
    TokenizationError = com.akamai.amp.tokenization.TokenizationError;
    Token.__super__.constructor.call(this, source);
  }

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
      if (!suppressErors) {
        throw new TokenizationError(this.data);
      }
    }
    return this.value;
  };

  return Token;

})(com.akamai.amp.tokenization.TokenizedBase);

com.akamai.amp.tokenization.TokenizedValue = (function(_super) {

  __extends(TokenizedValue, _super);

  TokenizedValue.name = 'TokenizedValue';

  /**
   * The function used to evaluate a token value
  */


  TokenizedValue.prototype.exec = null;

  /**
   * The literal value after compiliation
  */


  TokenizedValue.prototype.tokenStart = /#{/;

  TokenizedValue.prototype.tokenEnd = /}/;

  TokenizedValue.prototype.token = null;

  /**
   *
  */


  var TokenizationError, Token, ITokenized, Literal;


  function TokenizedValue(source) {
    TokenizationError = com.akamai.amp.tokenization.TokenizationError;

    Token = com.akamai.amp.tokenization.Token;

    ITokenized = com.akamai.amp.tokenization.ITokenized;

    Literal = com.akamai.amp.tokenization.Literal;
    this.token = new RegExp(this.tokenStart.source + "(.*)" + this.tokenEnd.source);
    TokenizedValue.__super__.constructor.call(this, source);
  }

  /**
   *
  */


  TokenizedValue.prototype.parse = function(source) {
    var chuncks, part, parts, _i, _len;
    this.source = source;
    this.data = [];
    if (this.token.test(this.source)) {
      parts = this.source.split(this.tokenStart.source);
      for (_i = 0, _len = parts.length; _i < _len; _i++) {
        part = parts[_i];
        if (this.tokenEnd.test(part)) {
          chuncks = part.split(this.tokenEnd.source);
          this.data.push(new Token(chuncks[0]));
          if (chuncks[1] !== "") {
            this.data.push(new Literal(chuncks[1]));
          }
        } else {
          if (part !== "") {
            this.data.push(new Literal(part));
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

  return TokenizedValue;

})(com.akamai.amp.tokenization.TokenizedBase);

com.akamai.amp.tokenization.TokenizedObject = (function(_super) {

  __extends(TokenizedObject, _super);

  /**
   *
  */


  TokenizedObject.name = 'TokenizedObject';

  var Logger;


  function TokenizedObject(source) {
    Logger = com.akamai.amp.core.Logger;
    TokenizedObject.__super__.constructor.call(this, source);
  }

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
        Logger.error(error);
      }
    }
    return this.value;
  };

  return TokenizedObject;

})(com.akamai.amp.tokenization.TokenizedBase);

/**
 * Used to track player localization settings
*/

com.akamai.amp.player.model.LocalizationProxy = (function(_super) {

  __extends(LocalizationProxy, _super);

  LocalizationProxy.name = 'LocalizationProxy';

  /** @static
  */


  LocalizationProxy.NAME = "LocalizationProxy";

  LocalizationProxy.prototype.data = {
    language: navigator.language,
    locales: {
      en: {
        MSG_LIVE: "LIVE",
        MSG_REPLAY: "Replay",
        MSG_BUFFERING: "buffering...",
        MSG_CC: "CC",
        MSG_CLOSE: "close"
      }
    }
  };

  LocalizationProxy.prototype.locale = null;

  /**
   * Creates a new instance of LocalizationProxy.
   * 
   * @constructor
  */


  var Notifications;


  function LocalizationProxy(init) {
    Notifications = com.akamai.amp.player.Notifications;
    LocalizationProxy.__super__.constructor.call(this);
    if (init) {
      if (init.locales != null) {
        this.data.locales = init.locales;
      }
      if (init.language != null) {
        this.data.language = init.language;
      }
    }
    this.setLocale(this.data.language);
  }

  /**
   *
  */


  LocalizationProxy.prototype.getLanguage = function() {
    return this.data.language;
  };

  LocalizationProxy.prototype.setLanguage = function(value) {
    this.data.language = value;
    this.setLocale(value);
    return this.sendNotification(Notifications.LANGUAGE_CHANGED, value);
  };

  /**
   *
  */


  LocalizationProxy.prototype.setLocale = function(value) {
    this.locale = this.data.locales[value];
    if (!(this.locale != null)) {
      return this.locale = this.data.locales[value.substring(0, 2)];
    }
  };

  /**
   *
  */


  LocalizationProxy.prototype.getLocales = function() {
    return this.data.locales;
  };

  LocalizationProxy.prototype.setLocales = function(value) {
    return this.data.locales = value;
  };

  /**
   *
  */


  LocalizationProxy.prototype.getString = function(key) {
    var locale;
    locale = this.locale || this.data.locales.en;
    return locale[key] || "";
  };

  return LocalizationProxy;

})(puremvc.Proxy);

/**
 * Used to track player configuration settings
*/

com.akamai.amp.player.model.TokenizedConfigurationProxy = (function(_super) {

  __extends(TokenizedConfigurationProxy, _super);

  TokenizedConfigurationProxy.name = 'TokenizedConfigurationProxy';

  /** @static
  */


  TokenizedConfigurationProxy.NAME = com.akamai.amp.modules.ModuleConfigurationProxy.NAME;

  TokenizedConfigurationProxy.prototype.config = null;

  TokenizedConfigurationProxy.prototype.tokens = null;

  TokenizedConfigurationProxy.prototype.value = null;

  TokenizedConfigurationProxy.prototype.defaults = null;

  /**
   *
  */


  var TokenizedObject, TokenizationProxy;


  function TokenizedConfigurationProxy(data) {
    TokenizedObject = com.akamai.amp.tokenization.TokenizedObject;

    TokenizationProxy = com.akamai.amp.player.model.TokenizationProxy;
    this.data = new TokenizedObject();
    this.value = {};
    TokenizedConfigurationProxy.__super__.constructor.call(this, data);
  }

  TokenizedConfigurationProxy.prototype.onRegister = function() {
    var base;
    base = this.facade.app || this.facade;
    this.tokens = base.retrieveProxy(TokenizationProxy.NAME);
    return this.tokens.add(this.facade.key, this);
  };

  TokenizedConfigurationProxy.prototype.setData = function(data) {
    var key, obj, value, _ref;
    obj = {};
    _ref = this.defaults;
    for (key in _ref) {
      value = _ref[key];
      obj[key] = key in data ? data[key] : value;
    }
    this.data.parse(obj);
    return this.data;
  };

  TokenizedConfigurationProxy.prototype.getValue = function(key) {
    var _ref;
    this.tokens.update();
    this.value[key] = (_ref = this.data.data[key]) != null ? _ref.compile(this.tokens.context) : void 0;
    return this.value[key];
  };

  TokenizedConfigurationProxy.prototype.compile = function(context, suppressErrors) {
    if (suppressErrors == null) {
      suppressErrors = false;
    }
    this.value = this.data.compile(context, suppressErrors);
  };

  return TokenizedConfigurationProxy;

})(com.akamai.amp.modules.ModuleConfigurationProxy);

/**
 * Proxy for the info feature
*/

com.akamai.amp.player.model.ParamsProxy = (function(_super) {

  __extends(ParamsProxy, _super);

  ParamsProxy.name = 'ParamsProxy';

  /** @static
  */


  ParamsProxy.NAME = "ParamsProxy";

  ParamsProxy.prototype.defaults = {};

  /** @constructor
  */


  function ParamsProxy(data) {
    ParamsProxy.__super__.constructor.call(this, data);
  }

  /** @override
  */


  ParamsProxy.prototype.setData = function(data) {
    var key, obj, value;
    obj = this.data.source || {};
    for (key in data) {
      value = data[key];
      obj[key] = data[key];
    }
    this.data.parse(obj);
    return this.data;
  };

  return ParamsProxy;

})(com.akamai.amp.player.model.TokenizedConfigurationProxy);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.WaitingCommand = (function(_super) {

  __extends(WaitingCommand, _super);

  WaitingCommand.name = 'WaitingCommand';

  var ApplicationStateProxy, PlayState, Notifications;


  function WaitingCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;
    WaitingCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  WaitingCommand.prototype.execute = function(notification) {
    var appProxy;
    this.facade.logger.debug("WaitingCommand");
    appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    if (appProxy.getPlayState() !== PlayState.LOADING) {
      return this.sendNotification(Notifications.CHANGE_PLAY_STATE, PlayState.WAITING);
    }
  };

  return WaitingCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.model.TokenizationProxy = (function(_super) {

  __extends(TokenizationProxy, _super);

  TokenizationProxy.name = 'TokenizationProxy';

  /** @static
  */


  TokenizationProxy.NAME = "TokenizationProxy";

  TokenizationProxy.prototype.context = null;

  /** @constructor
  */


  var ConfigurationProxy, LocalizationProxy, PlaybackProxy, ParamsProxy, MediaProxy, Utils;


  function TokenizationProxy() {
    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;

    LocalizationProxy = com.akamai.amp.player.model.LocalizationProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    ParamsProxy = com.akamai.amp.player.model.ParamsProxy;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    Utils = com.akamai.amp.core.Utils;
    TokenizationProxy.__super__.constructor.call(this, this.constructor.NAME, {});
  }

  /**
  */


  TokenizationProxy.prototype.add = function(name, proxy) {
    this.data[name] = proxy;
    return proxy.compile(this.context, true);
  };

  /**
  */


  TokenizationProxy.prototype.initialize = function() {
    return this.update();
  };

  TokenizationProxy.prototype.update = function() {
    var configProxy, element, key, l10nProxy, mediaProxy, paramsProxy, playbackProxy, value, _ref;
    configProxy = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    l10nProxy = this.facade.retrieveProxy(LocalizationProxy.NAME);
    paramsProxy = this.facade.retrieveProxy(ParamsProxy.NAME);
    element = document.getElementById(this.facade.multitonKey);
    this.context = {
      media: {
        width: mediaProxy.getWidth(),
        height: mediaProxy.getHeight(),
        title: mediaProxy.getTitle(),
        description: mediaProxy.getDescription(),
        src: mediaProxy.getSrc(),
        duration: mediaProxy.getDuration(),
        guid: mediaProxy.getGUID(),
        isLive: mediaProxy.getIsLive(),
        metadata: mediaProxy.getMetadata(),
        temporalType: mediaProxy.getTemporalType()
      },
      player: {
        width: element.offsetWidth,
        height: element.offsetHeight,
        mode: "html5",
        autoplay: configProxy.getAutoplay(),
        domain: configProxy.getDomain(),
        name: configProxy.getName(),
        currentTime: playbackProxy.getCurrentTime(),
        timecode: {
          duration: Utils.formatTimecode(mediaProxy.getDuration()),
          currentTime: Utils.formatTimecode(playbackProxy.getCurrentTime())
        }
      },
      l10n: l10nProxy.locale,
      now: Date.now()
    };
    paramsProxy.compile(this.context);
    _ref = paramsProxy.value;
    for (key in _ref) {
      value = _ref[key];
      this.context[key] = value;
    }
    return this.context;
  };

  /**
  */


  TokenizationProxy.prototype.compile = function() {
    var context, key, proxy, _ref;
    this.update();
    context = Utils.clone(this.context);
    _ref = this.data;
    for (key in _ref) {
      proxy = _ref[key];
      proxy.compile(context);
    }
  };

  return TokenizationProxy;

})(puremvc.Proxy);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangeMutedCommand = (function(_super) {

  __extends(ChangeMutedCommand, _super);

  ChangeMutedCommand.name = 'ChangeMutedCommand';

  var PlaybackProxy;


  function ChangeMutedCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;
    ChangeMutedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeMutedCommand.prototype.execute = function(notification) {
    var proxy;
    proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    return proxy.setMuted(notification.getBody());
  };

  return ChangeMutedCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.player.controller.UpdateTokenContextCommand = (function(_super) {

  __extends(UpdateTokenContextCommand, _super);

  UpdateTokenContextCommand.name = 'UpdateTokenContextCommand';

  var TokenizationProxy;


  function UpdateTokenContextCommand() {
    TokenizationProxy = com.akamai.amp.player.model.TokenizationProxy;
    UpdateTokenContextCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  UpdateTokenContextCommand.prototype.execute = function(notification) {
    var tokenizationProxy;
    this.facade.logger.debug("UpdateTokenContextCommand");
    tokenizationProxy = this.facade.retrieveProxy(TokenizationProxy.NAME);
    tokenizationProxy.compile();
  };

  return UpdateTokenContextCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangeVolumeCommand = (function(_super) {

  __extends(ChangeVolumeCommand, _super);

  ChangeVolumeCommand.name = 'ChangeVolumeCommand';

  var PlaybackProxy, UserSettingsProxy;


  function ChangeVolumeCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    UserSettingsProxy = com.akamai.amp.player.model.UserSettingsProxy;
    ChangeVolumeCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeVolumeCommand.prototype.execute = function(notification) {
    var proxy;
    proxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    proxy.setVolume(notification.getBody());
    proxy = this.facade.retrieveProxy(UserSettingsProxy.NAME);
    return proxy.setVolume(notification.getBody());
  };

  return ChangeVolumeCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangePlayStateCommand = (function(_super) {

  __extends(ChangePlayStateCommand, _super);

  ChangePlayStateCommand.name = 'ChangePlayStateCommand';

  var ApplicationStateProxy;


  function ChangePlayStateCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;
    ChangePlayStateCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangePlayStateCommand.prototype.execute = function(notification) {
    var app, state;
    app = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    state = notification.getBody();
    return app.setPlayState(state);
  };

  return ChangePlayStateCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ChangeActiveStateCommand = (function(_super) {

  __extends(ChangeActiveStateCommand, _super);

  ChangeActiveStateCommand.name = 'ChangeActiveStateCommand';

  var Notifications, ApplicationStateProxy, ConfigurationProxy, ActiveState, ControlsMode, Event;


  function ChangeActiveStateCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    ControlsMode = com.akamai.amp.player.model.ControlsMode;

    Event = com.akamai.amp.events.Event;
    ChangeActiveStateCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ChangeActiveStateCommand.prototype.execute = function(notification) {
    var config, proxy, state;
    config = this.facade.retrieveProxy(ConfigurationProxy.NAME);
    state = config.getControls().mode !== ControlsMode.PERSISTENT ? notification.getBody() : ActiveState.ACTIVE;
    proxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    return proxy.setActiveState(state);
  };

  return ChangeActiveStateCommand;

})(puremvc.SimpleCommand);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.PlayCommand = (function(_super) {

  __extends(PlayCommand, _super);

  PlayCommand.name = 'PlayCommand';

  var MediaProxy, PlaybackProxy, Notifications;


  function PlayCommand() {
    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    Notifications = com.akamai.amp.player.Notifications;
    PlayCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  PlayCommand.prototype.execute = function(notification) {
    var mediaProxy, playbackProxy, userInitiated;
    this.facade.logger.debug("PlayCommand");
    userInitiated = notification.getBody();
    mediaProxy = this.facade.retrieveProxy(MediaProxy.NAME);
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    if (userInitiated) {
      this.sendNotification(Notifications.INITIALIZED);
    }
    if (!mediaProxy.initialized || (!mediaProxy.getSrc() && !mediaProxy.getSource())) {
      return;
    }
    if (!playbackProxy.getStarted()) {
      this.sendNotification(Notifications.START);
    } else {
      playbackProxy.play();
    }
  };

  return PlayCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.player.model.PlayState = (function() {

  PlayState.name = 'PlayState';

  function PlayState() {}

  /**
   * Constant representing the playing play state
   * 
   * @static
   * @type {String}
  */


  PlayState.READY = "ready";

  /**
   * Constant representing the playing play state
   * 
   * @static
   * @type {String}
  */


  PlayState.PLAYING = "playing";

  /**
   * Constant representing the paused play state
   * 
   * @static
   * @type {String}
  */


  PlayState.PAUSED = "paused";

  /**
   * Constant representing the ended play state
   * 
   * @static
   * @type {String}
  */


  PlayState.ENDED = "ended";

  /**
   * Constant representing the waiting play state
   * 
   * @static
   * @type {String}
  */


  PlayState.LOADING = "loading";

  /**
   * Constant representing the waiting play state
   * 
   * @static
   * @type {String}
  */


  PlayState.WAITING = "waiting";

  /**
   * Constant representing the seeking play state
   * 
   * @static
   * @type {String}
  */


  PlayState.SEEKING = "seeking";

  /**
   * Constant representing the waiting play state
   * 
   * @static
   * @type {String}
  */


  PlayState.ERROR = "error";

  return PlayState;

})();

/**
 * Used to track play back related properties like playing and seeking.
*/

com.akamai.amp.player.model.PlaybackProxy = (function(_super) {

  __extends(PlaybackProxy, _super);

  PlaybackProxy.name = 'PlaybackProxy';

  /**
   * The name of the this Proxy.
   * 
   * @static
   * @type {string}
  */


  PlaybackProxy.NAME = "PlaybackProxy";

  /** @private
  */


  PlaybackProxy.prototype.core = null;

  PlaybackProxy.prototype.muted = false;

  PlaybackProxy.prototype.interval = null;

  PlaybackProxy.prototype.readyState = 0;

  PlaybackProxy.prototype.started = false;

  PlaybackProxy.prototype.volume = 1;

  /**
   * PlaybackProxy constructor.
   * 
   * @constructor
  */


  var Notifications, PlayState, EventHandler, Utils;


  function PlaybackProxy() {
    Notifications = com.akamai.amp.player.Notifications;

    PlayState = com.akamai.amp.player.model.PlayState;

    EventHandler = com.akamai.amp.events.EventHandler;

    Utils = com.akamai.amp.core.Utils;
    PlaybackProxy.__super__.constructor.call(this);
  }

  /**
   * TODO: Move this to media proxy
  */


  PlaybackProxy.prototype.getStarted = function() {
    return this.started;
  };

  PlaybackProxy.prototype.setStarted = function(value) {
    return this.started = value;
  };

  /**     
   * The playback core
   * 
   * @param {HTMLVideoElement} value
   *    The new playback core
   * @returns {HTMLVideoElement} 
   *    The playback core
   * @type {HTMLVideoElement}
  */


  PlaybackProxy.prototype.getCore = function() {
    return this.core;
  };

  PlaybackProxy.prototype.setCore = function(value) {
    var _this = this;
    if (value === this.core) {
      return;
    }
    this.core = value;
    clearInterval(this.interval);
    this.sendNotification(Notifications.ADD_APPLICATION_STATE, "hide-video");
    this.interval = setInterval(function() {
      return _this.stateCheck();
    }, 50);
    this.sendNotification(Notifications.PLAYBACK_CORE_CHANGE, this.core);
    return this.core;
  };

  /**
   *
  */


  PlaybackProxy.prototype.stateCheck = function() {
    if (this.readyState !== this.core.readyState) {
      this.readyState = this.core.readyState;
      if (this.readyState > 1) {
        return this.sendNotification(Notifications.REMOVE_APPLICATION_STATE, "hide-video");
      } else {
        return this.sendNotification(Notifications.ADD_APPLICATION_STATE, "hide-video");
      }
    }
  };

  /**
   * Determines if the core can play a given mimeType.
   * 
   * @return {String} "" if the core can't play the mimeType
  */


  PlaybackProxy.prototype.canPlayType = function(mimeType) {
    var canPlay, _ref;
    canPlay = ((_ref = this.core) != null ? _ref.canPlayType(mimeType) : void 0) || "";
    if (/Android 4\.[12]/.test(navigator.userAgent) && mimeType === Utils.mimeTypes.m3u8) {
      canPlay = "maybe";
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
    var _ref;
    return (_ref = this.core) != null ? _ref.paused : void 0;
  };

  /**     
   * Indicates whether or not the video is playing.
   * 
   * @returns {Boolean} 
   *    The playing value
   * @type {Boolean}
  */


  PlaybackProxy.prototype.getEnded = function() {
    var _ref;
    return (_ref = this.core) != null ? _ref.ended : void 0;
  };

  /**     
   * Indicates whether or not the video is playing.
   * 
   * @returns {Boolean} 
   *    The playing value
   * @type {Boolean}
  */


  PlaybackProxy.prototype.getSeeking = function() {
    var _ref;
    return (_ref = this.core) != null ? _ref.seeking : void 0;
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
    var _ref;
    return (_ref = this.core) != null ? _ref.currentTime : void 0;
  };

  PlaybackProxy.prototype.setCurrentTime = function(value) {
    if (!this.core || value === this.core.currentTime) {
      return;
    }
    return this.core.currentTime = Utils.clamp(value, 0, this.getDuration());
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


  PlaybackProxy.prototype.getSrc = function() {
    var _ref;
    return (_ref = this.core) != null ? _ref.src : void 0;
  };

  PlaybackProxy.prototype.setSrc = function(value) {
    var _ref;
    if (!(value != null) || value === "") {
      this.sendNotification(Notifications.ERROR, "The value of src is not supported: " + value);
    }
    if (value !== this.core.src) {
      this.started = false;
      return (_ref = this.core) != null ? _ref.src = value : void 0;
    }
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
    var _ref;
    return (_ref = this.core) != null ? _ref.volume : void 0;
  };

  PlaybackProxy.prototype.setVolume = function(value) {
    var _ref, _ref1;
    if ((0 <= value && value <= 1) && value !== ((_ref = this.core) != null ? _ref.volume : void 0)) {
      return this.sendNotification(Notifications.VOLUME_CHANGE, (_ref1 = this.core) != null ? _ref1.volume = value : void 0);
    }
  };

  /**
  */


  PlaybackProxy.prototype.getMuted = function() {
    return this.muted;
  };

  PlaybackProxy.prototype.setMuted = function(value) {
    var volume;
    this.muted = value;
    if (this.muted === true) {
      this.volume = this.getVolume();
      volume = 0;
    } else {
      volume = this.volume;
    }
    return this.sendNotification(Notifications.CHANGE_VOLUME, volume);
  };

  /**
   * The duration of the video in seconds.
   *     
   * @returns {Number} 
   *    The duration of the video
   * @type {Number}
  */


  PlaybackProxy.prototype.getDuration = function(value) {
    var _ref;
    return (_ref = this.core) != null ? _ref.duration : void 0;
  };

  /**
   * Instructs the core to play.
  */


  PlaybackProxy.prototype.play = function() {
    var _ref;
    if (!this.started) {
      this.started = true;
    }
    if ((_ref = this.core) != null) {
      _ref.play();
    }
  };

  /**
   * Instructs the core to pause.
  */


  PlaybackProxy.prototype.pause = function() {
    var _ref;
    if ((_ref = this.core) != null) {
      _ref.pause();
    }
  };

  /**
   * Instructs the core to pause.
  */


  PlaybackProxy.prototype.load = function() {
    var _ref;
    if ((_ref = this.core) != null) {
      _ref.load();
    }
  };

  /**
   * Instructs the core to pause.
  */


  PlaybackProxy.prototype.end = function() {
    if (!this.core) {
      return;
    }
    this.core.currentTime = this.core.duration;
  };

  return PlaybackProxy;

})(puremvc.Proxy);

com.akamai.amp.player.model.RenderMode = (function() {

  RenderMode.name = 'RenderMode';

  function RenderMode() {}

  /**
   * Constant representing the flash renderer.
   * 
   * @static
   * @type {String}
  */


  RenderMode.FLASH = "flash";

  /**
   * Constant representing the html renderer.
   * 
   * @static
   * @type {String}
  */


  RenderMode.HTML = "html";

  return RenderMode;

})();

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.TogglePlayPauseCommand = (function(_super) {

  __extends(TogglePlayPauseCommand, _super);

  TogglePlayPauseCommand.name = 'TogglePlayPauseCommand';

  var PlaybackProxy, PlayState, Notifications;


  function TogglePlayPauseCommand() {
    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    PlayState = com.akamai.amp.player.model.PlayState;

    Notifications = com.akamai.amp.player.Notifications;
    TogglePlayPauseCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  TogglePlayPauseCommand.prototype.execute = function(notification) {
    var note, playbackProxy;
    playbackProxy = this.facade.retrieveProxy(PlaybackProxy.NAME);
    if (playbackProxy.getEnded()) {
      note = Notifications.REPLAY;
    } else if (!playbackProxy.getPaused()) {
      note = Notifications.PAUSE;
    } else {
      note = Notifications.PLAY;
    }
    return this.sendNotification(note, true);
  };

  return TogglePlayPauseCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.player.model.ActiveState = (function() {

  ActiveState.name = 'ActiveState';

  function ActiveState() {}

  /**
   * Constant representing the normal display state
   * 
   * @static
   * @type {String}
  */


  ActiveState.ACTIVE = "active";

  /**
   * Constant representing the full screen display state
   * 
   * @static
   * @type {String}
  */


  ActiveState.INACTIVE = "inactive";

  return ActiveState;

})();

com.akamai.amp.plugins.ads.AdNotifications = (function() {

  AdNotifications.name = 'AdNotifications';

  function AdNotifications() {}

  AdNotifications.BREAK_START = "adbreakstart";

  AdNotifications.BREAK_END = "adbreakend";

  AdNotifications.AD_LOADED = "adloaded";

  AdNotifications.AD_STARTED = "adstarted";

  AdNotifications.AD_TIME_UPDATE = "adtimeupdate";

  AdNotifications.AD_TIME_REMAINING = "adtimeremaining";

  AdNotifications.AD_DURATION_CHANGE = "addurationchange";

  AdNotifications.AD_ENDED = "adended";

  AdNotifications.AD_ERROR = "aderror";

  AdNotifications.AD_COMPANION = "adcompanion";

  return AdNotifications;

})();

/**
 * Used to track the various states of the player like full screen mode and active state (controls visible).
 *
 * @member com.akamai.amp.player.model
 *
 *
*/

com.akamai.amp.player.model.ApplicationStateProxy = (function(_super) {

  __extends(ApplicationStateProxy, _super);

  ApplicationStateProxy.name = 'ApplicationStateProxy';

  /** @static
  */


  ApplicationStateProxy.NAME = "ApplicationStateProxy";

  /** @private
  */


  ApplicationStateProxy.prototype.displayState = null;

  ApplicationStateProxy.prototype.playState = null;

  ApplicationStateProxy.prototype.renderMode = null;

  ApplicationStateProxy.prototype.activeState = null;

  /** @constructor
  */


  var Notifications, DisplayState, PlayState, RenderMode, ActiveState;


  function ApplicationStateProxy() {
    Notifications = com.akamai.amp.player.Notifications;

    DisplayState = com.akamai.amp.player.model.DisplayState;

    PlayState = com.akamai.amp.player.model.PlayState;

    RenderMode = com.akamai.amp.player.model.RenderMode;

    ActiveState = com.akamai.amp.player.model.ActiveState;
    ApplicationStateProxy.__super__.constructor.call(this);
  }

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
    var oldState;
    if (value === oldState) {
      return;
    }
    oldState = this.displayState;
    this.displayState = value;
    return this.sendNotification(Notifications.DISPLAY_STATE_CHANGE, {
      oldState: oldState,
      newState: this.displayState
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
    var oldState;
    if (value === this.playState) {
      return;
    }
    oldState = this.playState;
    this.playState = value;
    return this.sendNotification(Notifications.PLAY_STATE_CHANGE, {
      oldState: oldState,
      newState: this.playState
    });
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
      return this.renderMode = value;
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


  ApplicationStateProxy.prototype.getMedium = function() {
    return this.medium;
  };

  ApplicationStateProxy.prototype.setMedium = function(value) {
    var oldState;
    if (value === this.medium) {
      return;
    }
    oldState = "medium-" + this.medium;
    this.medium = value;
    return this.sendNotification(Notifications.MEDIUM_CHANGE, {
      oldState: oldState,
      newState: "medium-" + this.medium
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
    var oldState;
    if (value === this.activeState) {
      return;
    }
    oldState = this.activeState;
    this.activeState = value;
    return this.sendNotification(Notifications.ACTIVE_STATE_CHANGE, {
      oldState: oldState,
      newState: this.activeState
    });
  };

  return ApplicationStateProxy;

})(puremvc.Proxy);

com.akamai.amp.events.Event = (function() {

  Event.name = 'Event';

  Event.prototype.type = null;

  Event.prototype.target = null;

  Event.prototype.data = null;

  /**
   * Event constructor.
   * 
   * @param String  type  A string representing the event's type.
   * @param Object  data  Data to pass along with the event.
  */


  function Event(type, data) {
    this.type = type;
    this.data = data;
  }

  return Event;

})();

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.ToggleActiveCommand = (function(_super) {

  __extends(ToggleActiveCommand, _super);

  ToggleActiveCommand.name = 'ToggleActiveCommand';

  var ApplicationStateProxy, ActiveState, Notifications;


  function ToggleActiveCommand() {
    ApplicationStateProxy = com.akamai.amp.player.model.ApplicationStateProxy;

    ActiveState = com.akamai.amp.player.model.ActiveState;

    Notifications = com.akamai.amp.player.Notifications;
    ToggleActiveCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  ToggleActiveCommand.prototype.execute = function(notification) {
    var appProxy, state;
    appProxy = this.facade.retrieveProxy(ApplicationStateProxy.NAME);
    state = appProxy.getActiveState() === ActiveState.ACTIVE ? ActiveState.INACTIVE : ActiveState.ACTIVE;
    return this.sendNotification(Notifications.CHANGE_ACTIVE_STATE, state);
  };

  return ToggleActiveCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.modules.MessageEvent = (function(_super) {

  __extends(MessageEvent, _super);

  MessageEvent.name = 'MessageEvent';

  /** @static
  */


  MessageEvent.MESSAGE = "message";

  /**
   * Event constructor.
   * 
   * @param String  type  A string representing the event's type.
   * @param Object  data  Data to pass along with the event.
  */


  function MessageEvent(message, origin) {
    this.message = message;
    this.origin = origin;
    MessageEvent.__super__.constructor.call(this, MessageEvent.MESSAGE);
  }

  return MessageEvent;

})(com.akamai.amp.events.Event);

/**
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.InitControllerCommand = (function(_super) {

  __extends(InitControllerCommand, _super);

  InitControllerCommand.name = 'InitControllerCommand';

  var Notifications, ToggleActiveCommand, TogglePlayPauseCommand, ToggleFullScreenCommand, PlayCommand, PauseCommand, ChangeDisplayStateCommand, ChangePlayStateCommand, ChangeActiveStateCommand, ChangePlaybackCoreCommand, ChangeAutoplayCommand, ChangeLoopCommand, ChangeVolumeCommand, ChangeMediaCommand, MediaChangeCommand, ChangeDurationCommand, UpdatePlaybackCoreCommand, SeekCommand, SeekedCommand, ReplayCommand, EndCommand, EndedCommand, ErrorCommand, StartCommand, StartedCommand, ReadyCommand, WaitingCommand, ChangeMutedCommand, UpdateTokenContextCommand, ChangeParamsCommand, AuthenticateCommand, AuthenticatedCommand, InitializedCommand;


  function InitControllerCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    ToggleActiveCommand = com.akamai.amp.player.controller.ToggleActiveCommand;

    TogglePlayPauseCommand = com.akamai.amp.player.controller.TogglePlayPauseCommand;

    ToggleFullScreenCommand = com.akamai.amp.player.controller.ToggleFullScreenCommand;

    PlayCommand = com.akamai.amp.player.controller.PlayCommand;

    PauseCommand = com.akamai.amp.player.controller.PauseCommand;

    ChangeDisplayStateCommand = com.akamai.amp.player.controller.ChangeDisplayStateCommand;

    ChangePlayStateCommand = com.akamai.amp.player.controller.ChangePlayStateCommand;

    ChangeActiveStateCommand = com.akamai.amp.player.controller.ChangeActiveStateCommand;

    ChangePlaybackCoreCommand = com.akamai.amp.player.controller.ChangePlaybackCoreCommand;

    ChangeAutoplayCommand = com.akamai.amp.player.controller.ChangeAutoplayCommand;

    ChangeLoopCommand = com.akamai.amp.player.controller.ChangeLoopCommand;

    ChangeVolumeCommand = com.akamai.amp.player.controller.ChangeVolumeCommand;

    ChangeMediaCommand = com.akamai.amp.player.controller.ChangeMediaCommand;

    MediaChangeCommand = com.akamai.amp.player.controller.MediaChangeCommand;

    ChangeDurationCommand = com.akamai.amp.player.controller.ChangeDurationCommand;

    UpdatePlaybackCoreCommand = com.akamai.amp.player.controller.UpdatePlaybackCoreCommand;

    SeekCommand = com.akamai.amp.player.controller.SeekCommand;

    SeekedCommand = com.akamai.amp.player.controller.SeekedCommand;

    ReplayCommand = com.akamai.amp.player.controller.ReplayCommand;

    EndCommand = com.akamai.amp.player.controller.EndCommand;

    EndedCommand = com.akamai.amp.player.controller.EndedCommand;

    ErrorCommand = com.akamai.amp.player.controller.ErrorCommand;

    StartCommand = com.akamai.amp.player.controller.StartCommand;

    StartedCommand = com.akamai.amp.player.controller.StartedCommand;

    ReadyCommand = com.akamai.amp.player.controller.ReadyCommand;

    WaitingCommand = com.akamai.amp.player.controller.WaitingCommand;

    ChangeMutedCommand = com.akamai.amp.player.controller.ChangeMutedCommand;

    UpdateTokenContextCommand = com.akamai.amp.player.controller.UpdateTokenContextCommand;

    ChangeParamsCommand = com.akamai.amp.player.controller.ChangeParamsCommand;

    AuthenticateCommand = com.akamai.amp.player.controller.AuthenticateCommand;

    AuthenticatedCommand = com.akamai.amp.player.controller.AuthenticatedCommand;

    InitializedCommand = com.akamai.amp.player.controller.InitializedCommand;
    InitControllerCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  InitControllerCommand.prototype.execute = function(notification) {
    this.facade.logger.debug("InitControllerCommand");
    this.facade.registerCommand(Notifications.TOGGLE_PLAY_PAUSE, TogglePlayPauseCommand);
    this.facade.registerCommand(Notifications.PLAY, PlayCommand);
    this.facade.registerCommand(Notifications.PAUSE, PauseCommand);
    this.facade.registerCommand(Notifications.CHANGE_PLAY_STATE, ChangePlayStateCommand);
    this.facade.registerCommand(Notifications.TOGGLE_FULL_SCREEN, ToggleFullScreenCommand);
    this.facade.registerCommand(Notifications.CHANGE_DISPLAY_STATE, ChangeDisplayStateCommand);
    this.facade.registerCommand(Notifications.TOGGLE_ACTIVE, ToggleActiveCommand);
    this.facade.registerCommand(Notifications.CHANGE_ACTIVE_STATE, ChangeActiveStateCommand);
    this.facade.registerCommand(Notifications.CHANGE_MEDIA, ChangeMediaCommand);
    this.facade.registerCommand(Notifications.MEDIA_CHANGE, MediaChangeCommand);
    this.facade.registerCommand(Notifications.UPDATE_TOKEN_CONTEXT, UpdateTokenContextCommand);
    this.facade.registerCommand(Notifications.CHANGE_PLAYBACK_CORE, ChangePlaybackCoreCommand);
    this.facade.registerCommand(Notifications.UPDATE_PLAYBACK_CORE, UpdatePlaybackCoreCommand);
    this.facade.registerCommand(Notifications.START, StartCommand);
    this.facade.registerCommand(Notifications.STARTED, StartedCommand);
    this.facade.registerCommand(Notifications.SEEK, SeekCommand);
    this.facade.registerCommand(Notifications.SEEKED, SeekedCommand);
    this.facade.registerCommand(Notifications.CHANGE_VOLUME, ChangeVolumeCommand);
    this.facade.registerCommand(Notifications.CHANGE_MUTED, ChangeMutedCommand);
    this.facade.registerCommand(Notifications.CHANGE_AUTOPLAY, ChangeAutoplayCommand);
    this.facade.registerCommand(Notifications.CHANGE_LOOP, ChangeLoopCommand);
    this.facade.registerCommand(Notifications.END, EndCommand);
    this.facade.registerCommand(Notifications.ENDED, EndedCommand);
    this.facade.registerCommand(Notifications.REPLAY, ReplayCommand);
    this.facade.registerCommand(Notifications.ERROR, ErrorCommand);
    this.facade.registerCommand(Notifications.READY, ReadyCommand);
    this.facade.registerCommand(Notifications.WAITING, WaitingCommand);
    this.facade.registerCommand(Notifications.CHANGE_DURATION, ChangeDurationCommand);
    this.facade.registerCommand(Notifications.CHANGE_PARAMS, ChangeParamsCommand);
    this.facade.registerCommand(Notifications.AUTHENTICATE, AuthenticateCommand);
    this.facade.registerCommand(Notifications.AUTHENTICATED, AuthenticatedCommand);
    return this.facade.registerCommand(Notifications.INITIALIZED, InitializedCommand);
  };

  return InitControllerCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.modules.ModuleJunctionMediator = (function(_super) {

  __extends(ModuleJunctionMediator, _super);

  ModuleJunctionMediator.name = 'ModuleJunctionMediator';

  ModuleJunctionMediator.NAME = "ModuleJunctionMediator";

  /**
   * Constructor.
   *
  */


  var Notifications, AdNotifications, MessageEvent;


  function ModuleJunctionMediator() {
    Notifications = com.akamai.amp.player.Notifications;

    AdNotifications = com.akamai.amp.plugins.ads.AdNotifications;

    MessageEvent = com.akamai.amp.modules.MessageEvent;
    ModuleJunctionMediator.__super__.constructor.call(this, ModuleJunctionMediator.NAME, this);
  }

  ModuleJunctionMediator.prototype.onRegister = function() {
    return ModuleJunctionMediator.__super__.onRegister.call(this);
  };

  /**
   * Overridden so this class may subscribe to all notifications
   * @return An Array
   *
  */


  ModuleJunctionMediator.prototype.listNotificationInterests = function() {
    var exempt, interests, key, value;
    interests = [];
    exempt = [Notifications.STARTUP];
    for (key in Notifications) {
      value = Notifications[key];
      if (exempt.indexOf(value) === -1) {
        interests.push(value);
      }
    }
    return interests;
  };

  /**
   * Handles notifications of interest to this mediator. Note that
   * the default declaration is to allow the super to handle the
   * note. This leaves the base JunctionMediator to handle things
   * like ACCEPT_INPUT_PIPE and ACCEPT_OUTPUT_PIPE  
   * @param note An INotification
   *
  */


  ModuleJunctionMediator.prototype.handleNotification = function(notification) {
    var name, type;
    name = notification.getName();
    type = notification.getType();
    if (!(type != null)) {
      notification.setType(this.multitonKey);
    }
    this.facade.dispatchEvent(new MessageEvent(notification, this.multitonKey));
  };

  return ModuleJunctionMediator;

})(puremvc.Mediator);

/**
 * Initializes the model, view and controller.
 * 
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.InitFrameworkCommand = (function(_super) {

  __extends(InitFrameworkCommand, _super);

  InitFrameworkCommand.name = 'InitFrameworkCommand';

  var InitControllerCommand, InitModelCommand, InitViewCommand;


  function InitFrameworkCommand() {
    InitControllerCommand = com.akamai.amp.player.controller.InitControllerCommand;

    InitModelCommand = com.akamai.amp.player.controller.InitModelCommand;

    InitViewCommand = com.akamai.amp.player.controller.InitViewCommand;
    InitFrameworkCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Initializes the sub commands prior to execution.
   * 
   * @override
  */


  InitFrameworkCommand.prototype.initializeMacroCommand = function() {
    this.addSubCommand(InitModelCommand);
    this.addSubCommand(InitControllerCommand);
    return this.addSubCommand(InitViewCommand);
  };

  return InitFrameworkCommand;

})(puremvc.MacroCommand);

com.akamai.amp.AMPConfig = (function() {

  AMPConfig.name = 'AMPConfig';

  function AMPConfig() {}

  AMPConfig.UNINITIALIZED = 0;

  AMPConfig.LOADING = 1;

  AMPConfig.LOADED = 2;

  /** @static
  */


  AMPConfig.getConfigURL = function() {
    var script, search, src, start;
    script = this.getScriptTag();
    src = script.src;
    start = src.indexOf("?");
    if ((-1 < start && start < src.length - 1)) {
      return search = src.substring(start + 1);
    }
    return null;
  };

  /** @static
  */


  AMPConfig.getScriptTag = function() {
    var script, scripts, _i, _len;
    scripts = document.getElementsByTagName("script");
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (/amp(\..*)?\.js/.test(script.src)) {
        return script;
      }
    }
    return null;
  };

  /** @static
  */


  AMPConfig.getModule = function(url, onload, onerror) {
    var count, loadModule, loaded, modules, next, xhr, xml,
      _this = this;
    try {
      xhr = new XMLHttpRequest();
    } catch (error) {
      try {
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
      } catch (error) {
        try {
          xhr = new ActiveXObject('Microsoft.XMLHTTP');
        } catch (error) {

        }
      }
    }
    xhr.open("GET", url, false);
    xhr.send();
    xml = xhr.responseXML;
    modules = xml.getElementsByTagName("module");
    count = modules.length;
    loaded = -1;
    loadModule = function(plugin) {
      return _this.loadModule(plugin, next);
    };
    next = function() {
      loaded++;
      if (loaded < count) {
        return loadModule(modules[loaded]);
      } else {
        if (onload) {
          return onload(xml);
        }
      }
    };
    next();
    return xml;
  };

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

  /**
   * Loads and AMP module
   * 
   * @static
  */


  AMPConfig.loadModule = function(xml, onload) {
    var count, element, head, link, links, loadScript, loaded, next, scripts, _i, _len;
    head = this.getScriptTag().parentNode;
    loadScript = function(script) {
      var element;
      element = document.createElement("script");
      element.type = 'text/javascript';
      element.src = script.getAttribute("src");
      if (element.addEventListener) {
        element.addEventListener("load", next, false);
      } else if (element.readyState) {
        element.onreadystatechange = next;
      }
      return head.appendChild(element);
    };
    next = function() {
      loaded++;
      if (loaded < count) {
        return loadScript(scripts[loaded]);
      } else {
        if (onload) {
          return onload(xml);
        }
      }
    };
    links = xml.getElementsByTagName("link");
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      link = links[_i];
      element = document.createElement("link");
      element.rel = "stylesheet";
      element.type = 'text/css';
      element.href = link.getAttribute("href");
      head.appendChild(element);
    }
    scripts = xml.getElementsByTagName("script");
    loaded = -1;
    count = scripts.length;
    return next();
  };

  AMPConfig.prototype.url = null;

  AMPConfig.prototype.data = null;

  AMPConfig.prototype.xml = null;

  AMPConfig.prototype.readyState = AMPConfig.UNINITIALIZED;

  AMPConfig.prototype.onreadystatechange = null;

  AMPConfig.prototype.onload = null;

  AMPConfig.prototype.loaded = false;

  /** @static
  */


  AMPConfig.prototype.load = function(url) {
    var _this = this;
    if (!(url != null)) {
      url = AMPConfig.getConfigURL();
      if (!(url != null)) {
        return;
      }
    }
    this.setReadyState(AMPConfig.LOADING);
    this.url = url;
    return AMPConfig.getModule(url, function(xml) {
      _this.xml = xml;
      _this.data = AMPConfig.parseModule(xml.getElementsByTagName("config")[0]);
      _this.setReadyState(AMPConfig.LOADED);
    }, function(error) {
      try {
        return console.log(error);
      } catch (err) {

      }
    });
  };

  AMPConfig.prototype.setReadyState = function(state) {
    this.readyState = state;
    if (typeof this.onreadystatechange === "function") {
      this.onreadystatechange({
        type: "readystatechange",
        data: state
      });
    }
    if (state === AMPConfig.LOADED && !this.loaded) {
      this.loaded = true;
      return typeof this.onload === "function" ? this.onload({
        type: "load",
        data: this.data
      }) : void 0;
    }
  };

  return AMPConfig;

})();

/**
 * Initial startup routine for the player. Initializes the
 * model, view and controller.
 * 
 *
 *
 * @member com.akamai.amp.player.controller
*/

com.akamai.amp.player.controller.StartupCommand = (function(_super) {

  __extends(StartupCommand, _super);

  StartupCommand.name = 'StartupCommand';

  var InitFrameworkCommand, InitPlaybackCoreCommand, InitPluginsCommand, UpdateTokenContextCommand;


  function StartupCommand() {
    InitFrameworkCommand = com.akamai.amp.player.controller.InitFrameworkCommand;

    InitPlaybackCoreCommand = com.akamai.amp.player.controller.InitPlaybackCoreCommand;

    InitPluginsCommand = com.akamai.amp.player.controller.InitPluginsCommand;

    UpdateTokenContextCommand = com.akamai.amp.player.controller.UpdateTokenContextCommand;
    StartupCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Initializes the sub commands prior to execution.
   * 
   * @override
  */


  StartupCommand.prototype.initializeMacroCommand = function() {
    this.addSubCommand(InitFrameworkCommand);
    this.addSubCommand(UpdateTokenContextCommand);
    this.addSubCommand(InitPlaybackCoreCommand);
    return this.addSubCommand(InitPluginsCommand);
  };

  return StartupCommand;

})(puremvc.MacroCommand);

com.akamai.amp.modules.ModuleFacade = (function(_super) {

  __extends(ModuleFacade, _super);

  ModuleFacade.name = 'ModuleFacade';

  ModuleFacade.prototype.dispatcher = null;

  ModuleFacade.prototype.logger = null;

  ModuleFacade.prototype.config = null;

  ModuleFacade.prototype.key = null;

  /** @constructor
  */


  var ModuleJunctionMediator, ModuleConfigurationProxy, Logger, EventDispatcher;


  function ModuleFacade(key, config, dispatcher) {
    ModuleJunctionMediator = com.akamai.amp.modules.ModuleJunctionMediator;

    ModuleConfigurationProxy = com.akamai.amp.modules.ModuleConfigurationProxy;

    Logger = com.akamai.amp.core.Logger;

    EventDispatcher = com.akamai.amp.events.EventDispatcher;
    ModuleFacade.__super__.constructor.call(this, key);
    this.dispatcher = dispatcher || new EventDispatcher(this);
    this.logger = Logger;
    this.config = config;
    this.initialize();
  }

  /**
  */


  ModuleFacade.prototype.initializeView = function() {
    ModuleFacade.__super__.initializeView.call(this);
    return this.registerMediator(new ModuleJunctionMediator());
  };

  /**
   * Framework based initialization function for defining default
   * mvc classes. Meant to be overwritten by base classes.
  */


  ModuleFacade.prototype.initialize = function() {
    this.createModel();
    this.createController();
    return this.createView();
  };

  /**
  */


  ModuleFacade.prototype.createModel = function() {
    return this.registerProxy(new ModuleConfigurationProxy(this.config));
  };

  /**
  */


  ModuleFacade.prototype.createView = function() {};

  /**
  */


  ModuleFacade.prototype.createController = function() {};

  /** 
   * Called by the module loader after this module has been 
   * bound and is to communicate with the module loader.
  */


  ModuleFacade.prototype.onRegister = function() {};

  /**
  */


  ModuleFacade.prototype.passMessage = function(message, origin) {
    if (message.getType() !== this.multitonKey) {
      return this.sendNotification(message.getName(), message.getBody(), origin);
    }
  };

  /**
  */


  ModuleFacade.prototype.addEventListener = function(type, func) {
    return this.dispatcher.addEventListener(type, func);
  };

  /**
  */


  ModuleFacade.prototype.dispatchEvent = function(event) {
    return this.dispatcher.dispatchEvent(event);
  };

  /**
  */


  ModuleFacade.prototype.removeEventListener = function(type, func) {
    return this.dispather.removeEventListener(type, func);
  };

  return ModuleFacade;

})(puremvc.Facade);

/**
 * The main player class.
*/

com.akamai.amp.player.PlayerFacade = (function(_super) {

  __extends(PlayerFacade, _super);

  PlayerFacade.name = 'PlayerFacade';

  PlayerFacade.prototype.video = null;

  PlayerFacade.prototype.container = null;

  PlayerFacade.prototype.plugins = null;

  PlayerFacade.prototype.features = null;

  /** @constructor
  */


  var StartupCommand, Notifications, PlaybackProxy, ConfigurationProxy, TokenizationProxy, MediaProxy, PublicAPIMediator, DisplayState;


  function PlayerFacade(id, config, dispatcher) {
    StartupCommand = com.akamai.amp.player.controller.StartupCommand;

    Notifications = com.akamai.amp.player.Notifications;

    PlaybackProxy = com.akamai.amp.player.model.PlaybackProxy;

    ConfigurationProxy = com.akamai.amp.player.model.ConfigurationProxy;

    TokenizationProxy = com.akamai.amp.player.model.TokenizationProxy;

    MediaProxy = com.akamai.amp.player.model.MediaProxy;

    PublicAPIMediator = com.akamai.amp.player.view.PublicAPIMediator;

    DisplayState = com.akamai.amp.player.model.DisplayState;
    PlayerFacade.__super__.constructor.call(this, id, config, dispatcher);
    this.plugins = {};
    this.features = {};
    this.startup();
  }

  /** @override
  */


  PlayerFacade.prototype.createModel = function() {
    this.registerProxy(new TokenizationProxy());
    return this.registerProxy(new ConfigurationProxy(this.config));
  };

  /** @override
  */


  PlayerFacade.prototype.createView = function() {
    return this.registerMediator(new PublicAPIMediator());
  };

  /** @override
  */


  PlayerFacade.prototype.createController = function() {
    return this.registerCommand(Notifications.STARTUP, StartupCommand);
  };

  /** Starts the application
  */


  PlayerFacade.prototype.startup = function() {
    this.sendNotification(Notifications.STARTUP, this.config);
  };

  /**
   * Determines if the core can play a given mimeType.
   * 
   * @return {String} "" if the core can't play the mimeType
  */


  PlayerFacade.prototype.canPlayType = function(mimeType) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.canPlayType(mimeType) : void 0;
  };

  /**
   * Loads the video.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.load = function() {
    return this.sendNotification(Notifications.LOAD);
  };

  /**
   * Plays the currently loaded video.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.play = function() {
    return this.sendNotification(Notifications.PLAY);
  };

  /**
   * Plays the currently loaded video from its start time.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.replay = function() {
    return this.sendNotification(Notifications.REPLAY);
  };

  /**
   * Pauses the currently loaded video.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.pause = function() {
    return this.sendNotification(Notifications.PAUSE);
  };

  /**
   * Ends video playback.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.end = function() {
    return this.sendNotification(Notifications.END);
  };

  /**
  */


  PlayerFacade.prototype.setParams = function(value) {
    return this.sendNotification(Notifications.CHANGE_PARAMS, value);
  };

  PlayerFacade.prototype.getParams = function() {
    return this.retrieveProxy(ConfigurationProxy.NAME).getParams();
  };

  /**
  */


  PlayerFacade.prototype.setAutoplay = function(value) {
    return this.sendNotification(Notifications.CHANGE_AUTOPLAY, {
      autoplay: value
    });
  };

  PlayerFacade.prototype.getAutoplay = function() {
    return this.retrieveProxy(PlaybackProxy.NAME).getAutoplay();
  };

  /**
  */


  PlayerFacade.prototype.setLoop = function(value) {
    return this.sendNotification(Notifications.CHANGE_LOOP, {
      loop: value
    });
  };

  PlayerFacade.prototype.getLoop = function() {
    return this.retrieveProxy(PlaybackProxy.NAME).getLoop();
  };

  /**
  */


  PlayerFacade.prototype.setMuted = function(value) {
    return this.sendNotification(Notifications.CHANGE_MUTED, value);
  };

  /**
  */


  PlayerFacade.prototype.getMuted = function() {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getMuted() : void 0;
  };

  /**
   * Sets the media object.
   * 
   * @this com.akamai.amp.player.AMP
   * @param {Object} value The media object for the video to play.
  */


  PlayerFacade.prototype.setMedia = function(value) {
    this.sendNotification(Notifications.CHANGE_MEDIA, value);
    return value;
  };

  /**
   * Gets the media object.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The media object.
  */


  PlayerFacade.prototype.getMedia = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(MediaProxy.NAME)) != null ? _ref.getData() : void 0;
  };

  /**
   * Sets the current time of the video.
   * 
   * @this com.akamai.amp.player.AMP
   * @param {Number} value The desired time to seek to.
  */


  PlayerFacade.prototype.setCurrentTime = function(value) {
    this.sendNotification(Notifications.SEEK, value);
    return value;
  };

  /**
   * Gets the current time of the video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The current time of the video.
  */


  PlayerFacade.prototype.getCurrentTime = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getCurrentTime() : void 0;
  };

  /**
   * Gets the current time of the video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The current time of the video.
  */


  PlayerFacade.prototype.getDuration = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getDuration() : void 0;
  };

  /**
   * Sets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @param {String} value The source url of the video to play.
  */


  PlayerFacade.prototype.setSrc = function(value) {
    this.sendNotification(Notifications.CHANGE_MEDIA, {
      src: value
    });
    return value;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getSrc = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getSrc() : void 0;
  };

  /**
   * Sets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @param {String} value The source url of the video to play.
  */


  PlayerFacade.prototype.setSource = function(value) {
    this.sendNotification(Notifications.CHANGE_MEDIA, {
      source: value
    });
    return value;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getSource = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getSource() : void 0;
  };

  /**
   * Sets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @param {String} value The source url of the video to play.
  */


  PlayerFacade.prototype.setVolume = function(value) {
    this.sendNotification(Notifications.CHANGE_VOLUME, value);
    return value;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getVolume = function(value) {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getVolume() : void 0;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getSeeking = function() {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getSeeking() : void 0;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getPaused = function() {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getPaused() : void 0;
  };

  /**
   * Gets the source url of video.
   * 
   * @this com.akamai.amp.player.AMP
   * @return {Number} The source url of the video.
  */


  PlayerFacade.prototype.getEnded = function() {
    var _ref;
    return (_ref = this.retrieveProxy(PlaybackProxy.NAME)) != null ? _ref.getEnded() : void 0;
  };

  /**
   * Enters the player into full screen mode.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.enterFullScreen = function() {
    return this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.FULL_SCREEN);
  };

  /**
   * Exits the player out of full screen mode.
   * 
   * @this com.akamai.amp.player.AMP
  */


  PlayerFacade.prototype.exitFullScreen = function() {
    return this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
  };

  return PlayerFacade;

})(com.akamai.amp.modules.ModuleFacade);

/**
 * Wrapper for the player. Exposes desired functionality of ApplicationFacade.
*/

com.akamai.amp.AkamaiMediaPlayer = (function(_super) {

  __extends(AkamaiMediaPlayer, _super);

  AkamaiMediaPlayer.name = 'AkamaiMediaPlayer';

  /**
   * The player version
   * @static
  */


  AkamaiMediaPlayer.VERSION = "";

  AkamaiMediaPlayer.config = new com.akamai.amp.AMPConfig();

  /** @static
  */


  AkamaiMediaPlayer.loadConfig = function(url) {
    return this.config.load(url);
  };

  /** @private
  */


  AkamaiMediaPlayer.prototype.player = null;

  AkamaiMediaPlayer.prototype.config = null;

  AkamaiMediaPlayer.prototype.initialized = false;

  /** @constructor
  */


  var AMPConfig, PlayerFacade, EventDispatcher, Utils, FlashWrapper, AMPConfig, QueryString, Logger, Event;


  function AkamaiMediaPlayer(id, init) {
    AMPConfig = com.akamai.amp.AMPConfig;

    PlayerFacade = com.akamai.amp.player.PlayerFacade;

    EventDispatcher = com.akamai.amp.events.EventDispatcher;

    Utils = com.akamai.amp.core.Utils;

    FlashWrapper = com.akamai.amp.core.FlashWrapper;

    AMPConfig = com.akamai.amp.AMPConfig;

    QueryString = com.akamai.amp.core.QueryString;

    Logger = com.akamai.amp.core.Logger;

    Event = com.akamai.amp.events.Event;
    AkamaiMediaPlayer.__super__.constructor.call(this);
    Logger.enable();
    this.config = init;
    this.initialize(id, init);
  }

  AkamaiMediaPlayer.prototype.initialize = function(id, init) {
    var xhr,
      _this = this;
    if (typeof init === "string") {
      xhr = Utils.get(init);
      init = JSON.parse(xhr.responseText);
    }
    if ((AMPConfig.getConfigURL() != null) && AkamaiMediaPlayer.config.readyState !== AMPConfig.LOADED) {
      AkamaiMediaPlayer.config.onload = function(event) {
        _this.startup(id, init);
      };
      if (AkamaiMediaPlayer.config.readyState === AMPConfig.UNINITIALIZED) {
        AkamaiMediaPlayer.loadConfig();
      }
      return;
    }
    this.startup(id, init);
  };

  /** @private
  */


  AkamaiMediaPlayer.prototype.createFlashPlayer = function(id, init) {
    return new FlashWrapper(id, init, this);
  };

  /** @private
  */


  AkamaiMediaPlayer.prototype.createHTML5Player = function(id, init) {
    return new PlayerFacade(id, init, this);
  };

  /** @private
  */


  AkamaiMediaPlayer.prototype.error = function(event) {
    return this.player.logger.error(event);
  };

  /** @private
  */


  AkamaiMediaPlayer.prototype.startup = function(id, init) {
    var app, key, value, _ref, _ref1, _ref2;
    if ((AkamaiMediaPlayer.config.data != null)) {
      init = Utils.override(AkamaiMediaPlayer.config.data, init);
    }
    if (Object.defineProperty != null) {
      try {
        Object.defineProperty(this, "src", {
          get: this.getSrc,
          set: this.setSrc,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "currentTime", {
          get: this.getCurrentTime,
          set: this.setCurrentTime,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "duration", {
          get: this.getDuration,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "volume", {
          get: this.getVolume,
          set: this.setVolume,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "seeking", {
          get: this.getSeeking,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "paused", {
          get: this.getPaused,
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(this, "ended", {
          get: this.getEnded,
          enumerable: true,
          configurable: true
        });
      } catch (error) {

      }
    }
    if (init.mode == null) {
      init.mode = ((_ref = QueryString.mode) != null ? _ref.toLowerCase() : void 0) || "auto";
    }
    if (!Utils.hasFlash()) {
      init.mode = "html";
    }
    if (init.mode === "auto") {
      init.mode = Utils.isHTML5() ? "html" : "flash";
    }
    app = document.getElementById(id);
    if (!app.dataset) {
      app.dataset = {};
    }
    app.dataset.version = this.getVersion();
    this.player = init.mode === "html" ? this.createHTML5Player(id, init) : this.createFlashPlayer(id, init);
    this.player.parent = this;
    _ref1 = this.player.plugins;
    for (key in _ref1) {
      value = _ref1[key];
      this[key] = value;
    }
    _ref2 = this.player.features;
    for (key in _ref2) {
      value = _ref2[key];
      this[key] = value;
    }
    this.initialized = true;
    this.dispatchEvent(new Event("initialized", this));
  };

  /**
   **************
   * PUBLIC API *
   **************
  */


  AkamaiMediaPlayer.prototype.addEventListener = function(type, func) {
    var event;
    if (type === "initialized" && this.initialized === true) {
      event = new Event("initialized", this);
      event.target = this.target;
      func.call(this.target, event);
    }
    return AkamaiMediaPlayer.__super__.addEventListener.call(this, type, func);
  };

  AkamaiMediaPlayer.prototype.getVersion = function() {
    return AkamaiMediaPlayer.VERSION;
  };

  /**
   * Loads the video.
   *
  */


  AkamaiMediaPlayer.prototype.load = function() {
    return this.player.load();
  };

  /**
   * Plays the currently loaded video.
   *
  */


  AkamaiMediaPlayer.prototype.play = function() {
    return this.player.play();
  };

  /**
   * Plays the currently loaded video from its start time.
   *
  */


  AkamaiMediaPlayer.prototype.replay = function() {
    return this.player.replay();
  };

  /**
   * Pauses the currently loaded video.
   *
  */


  AkamaiMediaPlayer.prototype.pause = function() {
    return this.player.pause();
  };

  /**
   * Ends video playback.
   *
  */


  AkamaiMediaPlayer.prototype.end = function() {
    return this.player.end();
  };

  /**
  */


  AkamaiMediaPlayer.prototype.setParams = function(value) {
    return this.player.setParams(value);
  };

  AkamaiMediaPlayer.prototype.getParams = function() {
    return this.player.getParams();
  };

  /**
  */


  AkamaiMediaPlayer.prototype.setAutoplay = function(value) {
    return this.player.setAutoplay(value);
  };

  AkamaiMediaPlayer.prototype.getAutoplay = function() {
    return this.player.getAutoplay();
  };

  /**
  */


  AkamaiMediaPlayer.prototype.setLoop = function(value) {
    return this.player.setLoop(value);
  };

  AkamaiMediaPlayer.prototype.getLoop = function() {
    return this.player.getLoop();
  };

  /**
   * Sets the media object.
   * 
   * 
   * @param {Object} value The media object for the video to play.
  */


  AkamaiMediaPlayer.prototype.setMedia = function(value) {
    this.player.setMedia(value);
    return value;
  };

  /**
   * Gets the media object.
   * 
   * 
   * @return {Number} The media object.
  */


  AkamaiMediaPlayer.prototype.getMedia = function() {
    return this.player.getMedia();
  };

  /**
   * Sets the current time of the video.
   * 
   * @param {Number} value The desired time to seek to.
  */


  AkamaiMediaPlayer.prototype.setCurrentTime = function(value) {
    this.player.setCurrentTime(value);
    return value;
  };

  /**
   * Gets the current time of the video.
   * 
   * @return {Number} The current time of the video.
  */


  AkamaiMediaPlayer.prototype.getCurrentTime = function(value) {
    return this.player.getCurrentTime();
  };

  /**
   * Gets the duration of the video.
   * 
   * @return {Number} The current time of the video.
  */


  AkamaiMediaPlayer.prototype.getDuration = function(value) {
    return this.player.getDuration();
  };

  /**
   * Sets the source url of video.
   * 
   * @param {String} value The source url of the video to play.
  */


  AkamaiMediaPlayer.prototype.setSrc = function(value) {
    this.player.setSrc(value);
    return value;
  };

  /**
   * Gets the source url of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getSrc = function(value) {
    return this.player.getSrc();
  };

  /**
   * Sets the source url of video.
   * 
   * @param {String} value The source url of the video to play.
  */


  AkamaiMediaPlayer.prototype.setSource = function(value) {
    this.player.setSource(value);
    return value;
  };

  /**
   * Gets the source url of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getSource = function(value) {
    return this.player.getSource();
  };

  /**
   * Sets the volume of video.
   * 
   * 
   * @param {String} value The source url of the video to play.
  */


  AkamaiMediaPlayer.prototype.setVolume = function(value) {
    this.player.setVolume(Utils.clamp(value, 0, 1));
    return value;
  };

  /**
   * Gets the volume of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getVolume = function(value) {
    return this.player.getVolume();
  };

  /**
   * Sets the volume of video.
   * 
   * 
   * @param {String} value The source url of the video to play.
  */


  AkamaiMediaPlayer.prototype.setMuted = function(value) {
    this.player.setMuted(value);
    return value;
  };

  /**
   * Gets the volume of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getMuted = function(value) {
    return this.player.getMuted();
  };

  /**
   * Mutes the player.
  */


  AkamaiMediaPlayer.prototype.mute = function() {
    return this.setMuted(true);
  };

  /**
   * Unmutes the player.
  */


  AkamaiMediaPlayer.prototype.unmute = function() {
    return this.setMuted(false);
  };

  /**
   * Gets the source url of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getSeeking = function() {
    return this.player.getSeeking();
  };

  /**
   * Gets the source url of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getPaused = function() {
    return this.player.getPaused();
  };

  /**
   * Gets the source url of video.
   * 
   * @return {Number} The source url of the video.
  */


  AkamaiMediaPlayer.prototype.getEnded = function() {
    return this.player.getEnded();
  };

  /**
   * Enters the player into full screen mode.
   *
  */


  AkamaiMediaPlayer.prototype.enterFullScreen = function() {
    return this.player.enterFullScreen();
  };

  /**
   * Exits the player out of full screen mode.
   *
  */


  AkamaiMediaPlayer.prototype.exitFullScreen = function() {
    return this.player.exitFullScreen();
  };

  return AkamaiMediaPlayer;

})(com.akamai.amp.events.EventDispatcher);

com.akamai.amp.standard.AMP = (function(_super) {

  __extends(AMP, _super);

  AMP.name = 'AMP';

  function AMP() {
    return AMP.__super__.constructor.apply(this, arguments);
  }

  AMP.VERSION = 'AMP v3.0.0023';

  /** override
  */


  AMP.prototype.getVersion = function() {
    return AMP.VERSION;
  };

  return AMP;

})(com.akamai.amp.AkamaiMediaPlayer);
window.AMP = com.akamai.amp.standard.AMP;

/**
 *
 * @member com.akamai.amp.player
*/

com.akamai.amp.plugins.eventmanagement.EventManagementNotifications = (function() {

  EventManagementNotifications.name = 'EventManagementNotifications';

  function EventManagementNotifications() {}

  EventManagementNotifications.EVENT_STATE_CHANGED = "eventStateChanged";

  return EventManagementNotifications;

})();

com.akamai.amp.core.Poller = (function(_super) {

  __extends(Poller, _super);

  Poller.name = 'Poller';

  Poller.prototype.timeout = null;

  Poller.prototype.interval = null;

  Poller.prototype.url = null;

  Poller.prototype.lastModified = null;

  Poller.prototype.contentLenght = null;

  Poller.prototype.data = null;

  Poller.prototype.type = null;

  Poller.prototype.useHeadRequest = true;

  Poller.prototype.xhr = null;

  var Utils, Event;


  function Poller(url, interval, type, headers) {
    this.url = url;
    this.interval = interval != null ? interval : 10000;
    this.type = type != null ? type : null;
    this.headers = headers != null ? headers : null;
    Utils = com.akamai.amp.core.Utils;

    Event = com.akamai.amp.events.Event;

    Poller.__super__.constructor.call(this);
    this.xhr = Utils.getXHR();
  }

  Poller.prototype.start = function() {
    if ((this.url != null) && this.url !== "") {
      this.poll();
      return this.invoke();
    }
  };

  Poller.prototype.poll = function() {
    var contentLength, header, lastModified, name, value, _i, _len, _ref,
      _this = this;
    if (!this.useHeadRequest) {
      this.updateData();
    } else {
      this.xhr.open("HEAD", Utils.cacheBust(this.url), false);
      this.xhr.onerror = function(event) {
        return _this.error(event);
      };
      if (this.headers != null) {
        _ref = this.headers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          header = _ref[_i];
          for (name in header) {
            value = header[name];
            this.xhr.setRequestHeader(name, value);
          }
        }
      }
      if (this.lastModified != null) {
        this.xhr.setRequestHeader("If-Modified-Since", this.lastModified);
      }
      this.xhr.send();
      if (this.xhr.status === 200) {
        lastModified = this.xhr.getResponseHeader("Last-Modified");
        contentLength = this.xhr.getResponseHeader("Content-Length");
        if (contentLength !== this.contentLength || lastModified !== this.lastModified || (!(lastModified != null) && !(contentLength != null))) {
          if (lastModified != null) {
            this.lastModified = lastModified;
          }
          if (contentLength != null) {
            this.contentLength = contentLength;
          }
          this.updateData();
        }
      }
    }
    return this.data;
  };

  Poller.prototype.updateData = function() {
    var client, text,
      _this = this;
    client = {
      onerror: function(event) {
        return _this.error(event);
      }
    };
    text = Utils.read(Utils.cacheBust(this.url), client, null, this.headers);
    if (text !== this.text) {
      this.text = text;
      if (this.type === Utils.mimeTypes.json) {
        try {
          this.data = JSON.parse(this.text);
        } catch (error) {
          this.data = text;
        }
      } else {
        this.data = text;
      }
      return this.dispatchEvent(new Event("datachanged", this.data));
    }
  };

  Poller.prototype.error = function(error) {
    this.facade.logger.debug(event);
    return this.stop();
  };

  Poller.prototype.invoke = function() {
    var _this = this;
    this.stop();
    return this.timeout = setTimeout(function() {
      _this.poll();
      return _this.invoke();
    }, this.interval);
  };

  Poller.prototype.stop = function() {
    return clearTimeout(this.timeout);
  };

  return Poller;

})(com.akamai.amp.events.EventDispatcher);

/**
 *
 *
 * @member com.akamai.amp.plugins.ticker
*/

com.akamai.amp.plugins.eventmanagement.EventManagementMediator = (function(_super) {

  __extends(EventManagementMediator, _super);

  EventManagementMediator.name = 'EventManagementMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  EventManagementMediator.NAME = "EventManagementMediator";

  EventManagementMediator.prototype.poster = null;

  var EventManagementNotifications, EventHandler, Notifications, DisplayState;


  function EventManagementMediator(viewComponent) {
    EventManagementNotifications = com.akamai.amp.plugins.eventmanagement.EventManagementNotifications;

    EventHandler = com.akamai.amp.events.EventHandler;

    Notifications = com.akamai.amp.player.Notifications;

    DisplayState = com.akamai.amp.player.model.DisplayState;
    EventManagementMediator.__super__.constructor.call(this, EventManagementMediator.NAME, viewComponent);
  }

  EventManagementMediator.prototype.onRegister = function() {
    this.viewComponent.classList.add("akamai-event-management");
    this.viewComponent.classList.add("akamai-hidden");
    this.poster = document.createElement("img");
    this.poster.classList.add("akamai-event-poster");
    return EventManagementMediator.__super__.onRegister.call(this);
  };

  EventManagementMediator.prototype.listNotificationInterests = function() {
    return [EventManagementNotifications.EVENT_STATE_CHANGED];
  };

  EventManagementMediator.prototype.handleNotification = function(notification) {
    var state;
    switch (notification.getName()) {
      case EventManagementNotifications.EVENT_STATE_CHANGED:
        state = notification.getBody();
        if (state.id !== "on") {
          if (state.poster != null) {
            this.poster.src = state.poster;
            this.viewComponent.appendChild(this.poster);
          }
          this.viewComponent.classList.remove("akamai-hidden");
          this.sendNotification(Notifications.PAUSE);
          return this.sendNotification(Notifications.CHANGE_DISPLAY_STATE, DisplayState.NORMAL);
        } else {
          if (this.viewComponent.contains(this.poster)) {
            this.viewComponent.removeChild(this.poster);
          }
          this.viewComponent.classList.add("akamai-hidden");
          return this.sendNotification(Notifications.PLAY);
        }
    }
  };

  return EventManagementMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.eventmanagement.EventManagementPlayCommand = (function(_super) {

  __extends(EventManagementPlayCommand, _super);

  EventManagementPlayCommand.name = 'EventManagementPlayCommand';

  var Notifications, EventManagementProxy;


  function EventManagementPlayCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    EventManagementProxy = com.akamai.amp.plugins.eventmanagement.EventManagementProxy;
    EventManagementPlayCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  EventManagementPlayCommand.prototype.execute = function(notification) {
    var eventManagementProxy;
    this.facade.logger.debug("EventManagementPlayCommand");
    eventManagementProxy = this.facade.retrieveProxy(EventManagementProxy.NAME);
    if (eventManagementProxy.getState().id !== EventManagementProxy.ON.id) {
      return this.sendNotification(Notifications.PAUSE);
    }
  };

  return EventManagementPlayCommand;

})(puremvc.SimpleCommand);

com.akamai.amp.plugins.PluginWrapper = (function(_super) {

  __extends(PluginWrapper, _super);

  PluginWrapper.name = 'PluginWrapper';

  PluginWrapper.NAME = "PluginWrapper";

  PluginWrapper.prototype.player = null;

  PluginWrapper.prototype.config = null;

  PluginWrapper.prototype.dispatcher = null;

  /**
  */


  var EventDispatcher;


  function PluginWrapper(player, config) {
    this.player = player;
    this.config = config;
    EventDispatcher = com.akamai.amp.events.EventDispatcher;

    PluginWrapper.__super__.constructor.call(this);
    this.dispatcher = new EventDispatcher();
  }

  /**
  */


  PluginWrapper.prototype.addEventListener = function(type, func) {
    return this.dispatcher.addEventListener(type, func);
  };

  /**
  */


  PluginWrapper.prototype.dispatchEvent = function(event) {
    return this.dispatcher.dispatchEvent(event);
  };

  /**
  */


  PluginWrapper.prototype.removeEventListener = function(type, func) {
    return this.dispather.removeEventListener(type, func);
  };

  return PluginWrapper;

})(puremvc.Mediator);

/**
 * Used to trigger beacons for Comscore analytics
 *
 * @member com.akamai.amp.plugins.mediaanalytics
 *
 *
*/

com.akamai.amp.plugins.eventmanagement.EventManagementProxy = (function(_super) {

  __extends(EventManagementProxy, _super);

  EventManagementProxy.name = 'EventManagementProxy';

  EventManagementProxy.NAME = com.akamai.amp.modules.ModuleConfigurationProxy.NAME;

  EventManagementProxy.ON = {
    id: "on"
  };

  EventManagementProxy.prototype.data = {
    url: null,
    interval: null,
    states: null,
    enabled: false
  };

  EventManagementProxy.prototype.poller = null;

  EventManagementProxy.prototype.state = null;

  var EventManagementNotifications, Poller, Utils;


  function EventManagementProxy(config) {
    EventManagementNotifications = com.akamai.amp.plugins.eventmanagement.EventManagementNotifications;

    Poller = com.akamai.amp.core.Poller;

    Utils = com.akamai.amp.core.Utils;

    var _this = this;
    EventManagementProxy.__super__.constructor.call(this, config);
    this.poller = new Poller();
    this.poller.ondatachanged = function(event) {
      var id, state, _i, _len, _ref;
      id = event.data;
      if (id === "on") {
        state = EventManagementProxy.ON;
      } else {
        _ref = _this.data.states;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          state = _ref[_i];
          if (state.id === id) {
            break;
          }
        }
      }
      if (state != null) {
        return _this.setState(state);
      }
    };
  }

  EventManagementProxy.prototype.initialize = function() {
    if (this.data.enabled === true) {
      this.setURL(this.data.url);
      this.setInterval(this.data.interval);
      return this.poller.start();
    }
  };

  EventManagementProxy.prototype.setURL = function(value) {
    return this.data.url = this.poller.url = value;
  };

  EventManagementProxy.prototype.getURL = function() {
    return this.data.url;
  };

  /**
   *
  */


  EventManagementProxy.prototype.getInterval = function() {
    return this.data.interval;
  };

  EventManagementProxy.prototype.setInterval = function(value) {
    return this.data.interval = this.poller.interval = value * 1000;
  };

  EventManagementProxy.prototype.setState = function(value) {
    this.state = value;
    this.facade.logger.debug("EventManagementStateChange", value);
    return this.sendNotification(EventManagementNotifications.EVENT_STATE_CHANGED, value);
  };

  EventManagementProxy.prototype.getState = function() {
    return this.state;
  };

  return EventManagementProxy;

})(com.akamai.amp.modules.ModuleConfigurationProxy);

com.akamai.amp.plugins.eventmanagement.EventManagementWrapper = (function(_super) {

  __extends(EventManagementWrapper, _super);

  EventManagementWrapper.name = 'EventManagementWrapper';

  var XMLUtils, FlashNotifications;


  function EventManagementWrapper() {
    XMLUtils = com.akamai.amp.core.utils.XMLUtils;

    FlashNotifications = com.akamai.amp.player.FlashNotifications;
    EventManagementWrapper.__super__.constructor.apply(this, arguments);
  }

  EventManagementWrapper.NAME = "EventManagementWrapper";

  /** @override
  */


  EventManagementWrapper.prototype.listNotificationInterests = function() {
    return [FlashNotifications.CREATE_FLASH_VARS, FlashNotifications.CREATE_XML];
  };

  /**
  */


  EventManagementWrapper.prototype.handleNotification = function(notification) {
    var application, body, eventmanagementstates, flashvars, name, node, property, state, states, xml, _i, _len, _ref;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case FlashNotifications.CREATE_FLASH_VARS:
        flashvars = body.flashvars;
        if (this.config.enabled != null) {
          flashvars.eventmanagementstates_enabled = this.config.enabled;
        }
        if (this.config.url != null) {
          flashvars.eventmanagementstates_status_url = this.config.url;
        }
        if (this.config.interval != null) {
          flashvars.eventmanagementstates_status_interval = this.config.interval;
        }
        break;
      case FlashNotifications.CREATE_XML:
        xml = body.xml;
        application = xml.getElementsByTagName("application")[0];
        eventmanagementstates = xml.getElementsByTagName("eventmanagementstates");
        if (!(eventmanagementstates != null) || eventmanagementstates.length === 0) {
          eventmanagementstates = xml.createElement("eventmanagementstates");
          application.appendChild(eventmanagementstates);
        } else {
          eventmanagementstates = eventmanagementstates[0];
        }
        states = xml.createElement("states");
        eventmanagementstates.appendChild(states);
        _ref = this.config.states;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          state = _ref[_i];
          node = xml.createElement("state");
          states.appendChild(node);
          property = xml.createElement("property");
          property.setAttribute("key", "ID");
          property.appendChild(XMLUtils.createTextContent(xml, state.id));
          node.appendChild(property);
          property = xml.createElement("property");
          property.setAttribute("key", "POSTER_SRC");
          property.appendChild(XMLUtils.createTextContent(xml, state.poster));
          node.appendChild(property);
          if (state.url != null) {
            property = xml.createElement("property");
            property.setAttribute("key", "URL");
            property.appendChild(XMLUtils.createTextContent(xml, state.url));
            node.appendChild(property);
          }
        }
    }
  };

  return EventManagementWrapper;

})(com.akamai.amp.plugins.PluginWrapper);

/**
 * The base for plugins.
 *   
 * @member com.akamai.amp.core
 *
 *
*/

com.akamai.amp.plugins.PluginFacade = (function(_super) {

  __extends(PluginFacade, _super);

  PluginFacade.name = 'PluginFacade';

  PluginFacade.NAME = "PluginFacade";

  PluginFacade.prototype.app = null;

  PluginFacade.prototype.api = null;

  PluginFacade.prototype.id = null;

  /** @constructor
  */


  var Notifications;


  function PluginFacade(app, init) {
    Notifications = com.akamai.amp.player.Notifications;
    this.app = app;
    PluginFacade.__super__.constructor.call(this, "" + app.multitonKey + "/" + this.constructor.NAME, init);
    this.logger = this.app.logger;
  }

  PluginFacade.prototype.onRegister = function() {
    return this.sendNotification(Notifications.PLUGIN_REGISTERED, this);
  };

  return PluginFacade;

})(com.akamai.amp.modules.ModuleFacade);

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsWrapper = (function(_super) {

  __extends(MediaAnalyticsWrapper, _super);

  MediaAnalyticsWrapper.name = 'MediaAnalyticsWrapper';

  var XMLUtils, FlashNotifications, Notifications;


  function MediaAnalyticsWrapper() {
    XMLUtils = com.akamai.amp.core.utils.XMLUtils;

    FlashNotifications = com.akamai.amp.player.FlashNotifications;

    Notifications = com.akamai.amp.player.Notifications;
    MediaAnalyticsWrapper.__super__.constructor.apply(this, arguments);
  }

  MediaAnalyticsWrapper.NAME = "MediaAnalyticsWrapper";

  /** @override
  */


  MediaAnalyticsWrapper.prototype.listNotificationInterests = function() {
    return [FlashNotifications.CREATE_XML, FlashNotifications.MEDIA_CHANGE];
  };

  MediaAnalyticsWrapper.prototype.handleNotification = function(notification) {
    var application, body, dimensions, element, key, media, metrics, name, path, value, vendor, xml, _ref, _ref1, _ref2, _ref3;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case FlashNotifications.CREATE_XML:
        xml = body.xml;
        application = xml.getElementsByTagName("application")[0];
        metrics = xml.getElementsByTagName("metrics")[0];
        vendor = xml.createElement("vendor");
        vendor.setAttribute("id", "akamai");
        metrics.appendChild(vendor);
        if (this.config.config != null) {
          element = xml.createElement("property");
          element.setAttribute("key", "MEDIA_ANALYTICS_BEACON");
          element.appendChild(XMLUtils.createTextContent(xml, this.config.config));
          vendor.appendChild(element);
          path = ((_ref = this.config.plugin) != null ? _ref.swf : void 0) || "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf";
          element = xml.createElement("property");
          element.setAttribute("key", "MEDIA_ANALYTICS_PLUGIN_PATH");
          element.appendChild(XMLUtils.createTextContent(xml, path));
          vendor.appendChild(element);
        }
        if (this.config.dimensions != null) {
          dimensions = xml.createElement("property");
          dimensions.setAttribute("key", "dimensions");
          vendor.appendChild(dimensions);
          _ref1 = this.config.dimensions;
          for (key in _ref1) {
            value = _ref1[key];
            element = xml.createElement("property");
            element.setAttribute("key", key);
            element.appendChild(XMLUtils.createTextContent(xml, value));
            dimensions.appendChild(element);
          }
        }
        break;
      case Notifications.MEDIA_CHANGE:
        media = body;
        if (((_ref2 = media.mediaanalytics) != null ? _ref2.dimensions : void 0) != null) {
          media.dimensions = [];
          _ref3 = media.mediaanalytics.dimensions;
          for (key in _ref3) {
            value = _ref3[key];
            media.dimensions.push({
              key: key,
              value: value
            });
          }
        }
    }
  };

  return MediaAnalyticsWrapper;

})(com.akamai.amp.plugins.PluginWrapper);

/**
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy = (function(_super) {

  __extends(MediaAnalyticsProxy, _super);

  MediaAnalyticsProxy.name = 'MediaAnalyticsProxy';

  /** @static
  */


  MediaAnalyticsProxy.NAME = com.akamai.amp.modules.ModuleConfigurationProxy.NAME;

  MediaAnalyticsProxy.prototype.defaults = {
    config: null,
    dimensions: null,
    plugin: {
      js: "http://79423.analytics.edgesuite.net/html5/akamaihtml5-min.js"
    }
  };

  MediaAnalyticsProxy.prototype.percent = 0;

  /** @constructor
  */


  var Notifications, Utils;


  function MediaAnalyticsProxy(config) {
    Notifications = com.akamai.amp.player.Notifications;

    Utils = com.akamai.amp.core.Utils;
    MediaAnalyticsProxy.__super__.constructor.call(this, config);
  }

  MediaAnalyticsProxy.prototype.getPlugin = function() {
    return this.value.plugin.js;
  };

  MediaAnalyticsProxy.prototype.setMedia = function(media) {
    var dimensions, key, value, _ref;
    try {
      if (!(window.setAkamaiMediaAnalyticsData != null)) {
        return;
      }
      if (((_ref = media.mediaanalytics) != null ? _ref.dimensions : void 0) != null) {
        dimensions = Utils.override(this.value.dimensions, media.mediaanalytics.dimensions);
      } else {
        dimensions = this.value.dimensions;
      }
      for (key in dimensions) {
        value = dimensions[key];
        setAkamaiMediaAnalyticsData(key, value);
      }
    } catch (error) {
      this.facade.logger.error("Error setting MA Fields:", error);
    }
    return media;
  };

  return MediaAnalyticsProxy;

})(com.akamai.amp.player.model.TokenizedConfigurationProxy);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsChangeMediaCommand = (function(_super) {

  __extends(MediaAnalyticsChangeMediaCommand, _super);

  MediaAnalyticsChangeMediaCommand.name = 'MediaAnalyticsChangeMediaCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsChangeMediaCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsChangeMediaCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsChangeMediaCommand.prototype.execute = function(notification) {
    var media, mediaanalyticsProxy;
    this.facade.logger.debug("MediaAnalyticsChangeMediaCommand");
    media = notification.getBody();
    mediaanalyticsProxy = this.facade.retrieveProxy(MediaAnalyticsProxy.NAME);
    return mediaanalyticsProxy.setMedia(media);
  };

  return MediaAnalyticsChangeMediaCommand;

})(puremvc.SimpleCommand);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdBreakStartCommand = (function(_super) {

  __extends(MediaAnalyticsAdBreakStartCommand, _super);

  MediaAnalyticsAdBreakStartCommand.name = 'MediaAnalyticsAdBreakStartCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsAdBreakStartCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsAdBreakStartCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsAdBreakStartCommand.prototype.execute = function(notification) {
    this.facade.logger.debug("MediaAnalyticsAdBreakStartCommand");
    return this.facade.app.video.dataset.isad = true;
  };

  return MediaAnalyticsAdBreakStartCommand;

})(puremvc.SimpleCommand);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdLoadedCommand = (function(_super) {

  __extends(MediaAnalyticsAdLoadedCommand, _super);

  MediaAnalyticsAdLoadedCommand.name = 'MediaAnalyticsAdLoadedCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsAdLoadedCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsAdLoadedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsAdLoadedCommand.prototype.execute = function(notification) {
    var adObject;
    this.facade.logger.debug("MediaAnalyticsAdLoadedCommand");
    adObject = notification.getBody();
    return typeof akamaiHandleAdLoaded === "function" ? akamaiHandleAdLoaded(adObject) : void 0;
  };

  return MediaAnalyticsAdLoadedCommand;

})(puremvc.SimpleCommand);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdStartCommand = (function(_super) {

  __extends(MediaAnalyticsAdStartCommand, _super);

  MediaAnalyticsAdStartCommand.name = 'MediaAnalyticsAdStartCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsAdStartCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsAdStartCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsAdStartCommand.prototype.execute = function(notification) {
    this.facade.logger.debug("MediaAnalyticsAdStartCommand");
    return typeof akamaiHandleAdStarted === "function" ? akamaiHandleAdStarted() : void 0;
  };

  return MediaAnalyticsAdStartCommand;

})(puremvc.SimpleCommand);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdTimeUpdateCommand = (function(_super) {

  __extends(MediaAnalyticsAdTimeUpdateCommand, _super);

  MediaAnalyticsAdTimeUpdateCommand.name = 'MediaAnalyticsAdTimeUpdateCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsAdTimeUpdateCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsAdTimeUpdateCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsAdTimeUpdateCommand.prototype.execute = function(notification) {
    var core, percent, proxy;
    core = notification.getBody();
    percent = Math.round(core.currentTime / core.duration * 100);
    proxy = this.facade.retrieveProxy(MediaAnalyticsProxy.NAME);
    if (percent >= 25 && proxy.percent < 25) {
      this.facade.logger.debug("MediaAnalytics: First Quartile");
      if (typeof akamaiHandleAdFirstQuartile === "function") {
        akamaiHandleAdFirstQuartile();
      }
    } else if (percent >= 50 && proxy.percent < 50) {
      this.facade.logger.debug("MediaAnalytics: Second Quartile");
      if (typeof akamaiHandleAdMidpoint === "function") {
        akamaiHandleAdMidpoint();
      }
    } else if (percent >= 75 && proxy.percent < 75) {
      this.facade.logger.debug("MediaAnalytics: Third Quartile");
      if (typeof akamaiHandleAdThirdQuartile === "function") {
        akamaiHandleAdThirdQuartile();
      }
    }
    return proxy.percent = percent;
  };

  return MediaAnalyticsAdTimeUpdateCommand;

})(puremvc.SimpleCommand);

/**
 * Ussed to pass video start notification to the registered metrics proxies.
 * 
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdEndCommand = (function(_super) {

  __extends(MediaAnalyticsAdEndCommand, _super);

  MediaAnalyticsAdEndCommand.name = 'MediaAnalyticsAdEndCommand';

  var MediaAnalyticsProxy;


  function MediaAnalyticsAdEndCommand() {
    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;
    MediaAnalyticsAdEndCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  MediaAnalyticsAdEndCommand.prototype.execute = function(notification) {
    this.facade.logger.debug("MediaAnalyticsAdEndCommand");
    if (typeof akamaiHandleAdCompleted === "function") {
      akamaiHandleAdCompleted();
    }
    return this.facade.app.video.dataset.isad = true;
  };

  return MediaAnalyticsAdEndCommand;

})(puremvc.SimpleCommand);

/**
 * The main player class.
 *   
 * @member com.akamai.amp.player
 *
 *
*/

com.akamai.amp.plugins.eventmanagement.EventManagementPlugin = (function(_super) {

  __extends(EventManagementPlugin, _super);

  EventManagementPlugin.name = 'EventManagementPlugin';

  EventManagementPlugin.NAME = "EventManagementPlugin";

  /** @constructor
  */


  var Notifications, EventManagementWrapper, EventManagementProxy, EventManagementMediator, EventManagementPlayCommand;


  function EventManagementPlugin(app, init) {
    Notifications = com.akamai.amp.player.Notifications;

    EventManagementWrapper = com.akamai.amp.plugins.eventmanagement.EventManagementWrapper;

    EventManagementProxy = com.akamai.amp.plugins.eventmanagement.EventManagementProxy;

    EventManagementMediator = com.akamai.amp.plugins.eventmanagement.EventManagementMediator;

    EventManagementPlayCommand = com.akamai.amp.plugins.eventmanagement.EventManagementPlayCommand;
    EventManagementPlugin.__super__.constructor.call(this, app, init);
  }

  /** @override
  */


  EventManagementPlugin.prototype.createModel = function() {
    return this.registerProxy(new EventManagementProxy(this.config));
  };

  /** @override
  */


  EventManagementPlugin.prototype.createController = function() {
    return this.registerCommand(Notifications.PLAY, EventManagementPlayCommand);
  };

  /** @override
  */


  EventManagementPlugin.prototype.onRegister = function() {
    var proxy;
    this.registerMediator(new EventManagementMediator());
    proxy = this.retrieveProxy(EventManagementProxy.NAME);
    proxy.initialize();
    return EventManagementPlugin.__super__.onRegister.call(this);
  };

  return EventManagementPlugin;

})(com.akamai.amp.plugins.PluginFacade);

com.akamai.amp.plugins.captioning.CaptioningWrapper = (function(_super) {

  __extends(CaptioningWrapper, _super);

  CaptioningWrapper.name = 'CaptioningWrapper';

  var Event, Utils, FlashNotifications, Notifications;


  function CaptioningWrapper() {
    Event = com.akamai.amp.events.Event;

    Utils = com.akamai.amp.core.Utils;

    FlashNotifications = com.akamai.amp.player.FlashNotifications;

    Notifications = com.akamai.amp.player.Notifications;
    CaptioningWrapper.__super__.constructor.apply(this, arguments);
  }

  CaptioningWrapper.NAME = "CaptioningWrapper";

  CaptioningWrapper.prototype.hidden = true;

  CaptioningWrapper.prototype.embedded = false;

  /** @override
  */


  CaptioningWrapper.prototype.listNotificationInterests = function() {
    return [FlashNotifications.CREATE_FLASH_VARS, Notifications.MEDIA_CHANGE, FlashNotifications.CAPTIONING_REQUEST];
  };

  /**
  */


  CaptioningWrapper.prototype.handleNotification = function(notification) {
    var body, config, flashvars, media, name, track, _ref;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case FlashNotifications.CAPTIONING_REQUEST:
        this.setHidden(!this.getHidden());
        return this.dispatchEvent(new Event("visibilitychange", body.enabled));
      case FlashNotifications.CREATE_FLASH_VARS:
        flashvars = body.flashvars;
        config = body.config;
        if (((_ref = config.media) != null ? _ref.track : void 0) != null) {
          track = Utils.selectTrack(config.media.track, "captioning");
          if ((track.src != null) && track.src !== "") {
            flashvars.caption_url = track.src;
          }
          return flashvars.caption_type = encodeURIComponent(track.type) || "application/ttml+xml";
        }
        break;
      case Notifications.MEDIA_CHANGE:
        media = body;
        if (media.track != null) {
          track = Utils.selectTrack(media.track, "captioning");
          if (((track != null ? track.src : void 0) != null) && track.src !== "") {
            media.captioningUrl = track.src;
          }
          return media.captioningType = track.type || "application/ttml+xml";
        }
    }
  };

  /**
  */


  CaptioningWrapper.prototype.getHidden = function() {
    return this.hidden;
  };

  CaptioningWrapper.prototype.setHidden = function(value) {
    return this.hidden = value;
  };

  /**
  */


  CaptioningWrapper.prototype.getEmbedded = function() {
    return this.embedded;
  };

  CaptioningWrapper.prototype.setEmbedded = function(value) {
    return this.embedded = value;
  };

  return CaptioningWrapper;

})(com.akamai.amp.plugins.PluginWrapper);

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningProviders = (function() {

  CaptioningProviders.name = 'CaptioningProviders';

  function CaptioningProviders() {}

  CaptioningProviders.SUBPLY = "subply";

  CaptioningProviders.SMPTETT = "smptett";

  return CaptioningProviders;

})();

/**
 *
*/

com.akamai.amp.plugins.captioning.SubplyProxy = (function(_super) {

  __extends(SubplyProxy, _super);

  SubplyProxy.name = 'SubplyProxy';

  /** @static
  */


  SubplyProxy.NAME = "SubplyProxy";

  SubplyProxy.prototype.data = {
    base: "http://test.plymedia.com.s3.amazonaws.com/online/Akamai_",
    interval: 1000
  };

  SubplyProxy.prototype.caption = null;

  SubplyProxy.prototype.head = null;

  SubplyProxy.prototype.script = null;

  SubplyProxy.prototype.timeout = null;

  /** @constructor
  */


  var CaptioningNotifications;


  function SubplyProxy(config) {
    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;

    var _base,
      _this = this;
    this.activeCaptions = [];
    this.captions = [];
    this.head = document.getElementsByTagName("head")[0];
    if ((_base = com.akamai.amp.plugins).subply == null) {
      _base.subply = {};
    }
    com.akamai.amp.plugins.subply.response = function(json) {
      _this.parse(json);
      _this.poll();
    };
    SubplyProxy.__super__.constructor.call(this, this.constructor.NAME, config);
  }

  /**
   *
  */


  SubplyProxy.prototype.getURL = function() {
    return this.data.url;
  };

  SubplyProxy.prototype.setURL = function(value) {
    this.data.url = value;
    return value;
  };

  SubplyProxy.prototype.start = function() {
    this.send();
  };

  SubplyProxy.prototype.poll = function() {
    var timeout,
      _this = this;
    timeout = setTimeout(function() {
      _this.send();
    }, this.data.interval || 1000);
  };

  SubplyProxy.prototype.send = function() {
    if (this.script != null) {
      this.head.removeChild(this.script);
    }
    this.script = document.createElement("script");
    this.script.src = this.data.base + this.data.url + ".js?nocache=" + Date.now();
    this.head.appendChild(this.script);
  };

  SubplyProxy.prototype.stop = function() {
    clearTimeout(timeout);
  };

  SubplyProxy.prototype.setCurrentTime = function(value) {};

  /**
   *
  */


  SubplyProxy.prototype.parse = function(response) {
    var caption, text, _i, _len, _ref;
    if (response.Stream !== this.data.url) {
      return;
    }
    if ((this.caption != null) && this.caption.ticks >= response.Ticks) {
      return;
    }
    caption = {};
    caption.element = document.createElement("p");
    caption.element.className = "akamai-caption";
    _ref = response.Text.split("\n");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      text = _ref[_i];
      if (caption.element.innerHTML !== "") {
        caption.element.innerHTML += "<br />";
      }
      caption.element.innerHTML += "<span>" + text + "</span>";
    }
    caption.begin = Utils.flattenTimecode(response.From);
    caption.end = Utils.flattenTimecode(response.To);
    caption.ticks = response.Ticks;
    this.sendNotification(CaptioningNotifications.REMOVE_CAPTION, this.caption);
    this.caption = caption;
    this.sendNotification(CaptioningNotifications.ADD_CAPTION, this.caption);
    return this.caption;
  };

  return SubplyProxy;

})(puremvc.Proxy);

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningStartedCommand = (function(_super) {

  __extends(CaptioningStartedCommand, _super);

  CaptioningStartedCommand.name = 'CaptioningStartedCommand';

  var Notifications, CaptioningProxy, CaptioningNotifications, CaptioningProviders, Utils;


  function CaptioningStartedCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    CaptioningProxy = com.akamai.amp.plugins.captioning.CaptioningProxy;

    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;

    CaptioningProviders = com.akamai.amp.plugins.captioning.CaptioningProviders;

    Utils = com.akamai.amp.core.Utils;
    CaptioningStartedCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  CaptioningStartedCommand.prototype.execute = function(notification) {
    var media, proxy;
    this.facade.logger.debug("CaptioningStartedCommand");
    media = notification.getBody();
    proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
    return proxy.start();
  };

  return CaptioningStartedCommand;

})(puremvc.SimpleCommand);

/**
 * Ends the ticker
 * 
 *
 *
 * @member com.akamai.amp.player.controller.ticker
*/

com.akamai.amp.plugins.captioning.CaptioningTimeUpdateCommand = (function(_super) {

  __extends(CaptioningTimeUpdateCommand, _super);

  CaptioningTimeUpdateCommand.name = 'CaptioningTimeUpdateCommand';

  var CaptioningProxy;


  function CaptioningTimeUpdateCommand() {
    CaptioningProxy = com.akamai.amp.plugins.captioning.CaptioningProxy;
    CaptioningTimeUpdateCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  CaptioningTimeUpdateCommand.prototype.execute = function(notification) {
    var proxy, time;
    time = notification.getBody();
    proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
    return proxy.setCurrentTime(Math.round(time));
  };

  return CaptioningTimeUpdateCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningChangeMediaCommand = (function(_super) {

  __extends(CaptioningChangeMediaCommand, _super);

  CaptioningChangeMediaCommand.name = 'CaptioningChangeMediaCommand';

  var Notifications, CaptioningProxy, CaptioningNotifications, CaptioningProviders, Utils;


  function CaptioningChangeMediaCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    CaptioningProxy = com.akamai.amp.plugins.captioning.CaptioningProxy;

    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;

    CaptioningProviders = com.akamai.amp.plugins.captioning.CaptioningProviders;

    Utils = com.akamai.amp.core.Utils;
    CaptioningChangeMediaCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  CaptioningChangeMediaCommand.prototype.execute = function(notification) {
    var media, provider, proxy, track;
    this.facade.logger.debug("CaptioningChangeMediaCommand");
    media = notification.getBody();
    proxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
    if (media.track != null) {
      track = Utils.selectTrack(media.track, "captioning");
      if (track != null) {
        provider = track.type === "live-subply" ? CaptioningProviders.SUBPLY : CaptioningProviders.SMPTETT;
        proxy.setProvider(provider);
        if ((track.src != null) && track.src !== "") {
          proxy.setURL(track.src);
        }
      }
    }
    return this.sendNotification(CaptioningNotifications.ENABLED, (proxy.getURL() != null) || proxy.getEmbedded() === true);
  };

  return CaptioningChangeMediaCommand;

})(puremvc.SimpleCommand);

/**
 * Ends the ticker
 * 
 *
 *
 * @member com.akamai.amp.player.controller.ticker
*/

com.akamai.amp.plugins.captioning.CaptioningVisibilityChangeCommand = (function(_super) {

  __extends(CaptioningVisibilityChangeCommand, _super);

  CaptioningVisibilityChangeCommand.name = 'CaptioningVisibilityChangeCommand';

  var Notifications, CaptioningProxy, Event, Utils;


  function CaptioningVisibilityChangeCommand() {
    Notifications = com.akamai.amp.player.Notifications;

    CaptioningProxy = com.akamai.amp.plugins.captioning.CaptioningProxy;

    Event = com.akamai.amp.events.Event;

    Utils = com.akamai.amp.core.Utils;
    CaptioningVisibilityChangeCommand.__super__.constructor.apply(this, arguments);
  }

  /**
   * Executes the command.
   * 
   * @param {puremvc.Notification} notification 
   *    The notification.
   * 
   * @override
  */


  CaptioningVisibilityChangeCommand.prototype.execute = function(notification) {
    var configProxy;
    this.facade.logger.debug("CaptioningVisibilityChangeCommand");
    configProxy = this.facade.retrieveProxy(CaptioningProxy.NAME);
    configProxy.setHidden(notification.getBody());
    return this.facade.dispatchEvent(new Event("visibilitychange", this.hidden));
  };

  return CaptioningVisibilityChangeCommand;

})(puremvc.SimpleCommand);

/**
 *
*/

com.akamai.amp.plugins.captioning.SMPTETTProxy = (function(_super) {

  __extends(SMPTETTProxy, _super);

  SMPTETTProxy.name = 'SMPTETTProxy';

  /** @static
  */


  SMPTETTProxy.NAME = "SMPTETTProxy";

  SMPTETTProxy.prototype.data = {
    url: null
  };

  SMPTETTProxy.prototype.activeCaptions = null;

  SMPTETTProxy.prototype.captions = null;

  SMPTETTProxy.prototype.styles = null;

  SMPTETTProxy.prototype.currentTime = 0;

  SMPTETTProxy.prototype.subply = null;

  /** @constructor
  */


  var CaptioningNotifications;


  function SMPTETTProxy(config) {
    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;
    this.activeCaptions = [];
    this.captions = [];
    SMPTETTProxy.__super__.constructor.call(this, config);
  }

  /**
   *
  */


  SMPTETTProxy.prototype.getURL = function() {
    return this.data.url;
  };

  SMPTETTProxy.prototype.setURL = function(value) {
    var xml;
    this.data.url = value;
    if (this.data.url != null) {
      xml = Utils.read(this.data.url, null, Utils.mimeTypes.xml);
      if (xml) {
        return this.parse(xml);
      }
    }
  };

  /**
   *
  */


  SMPTETTProxy.prototype.getCurrentTime = function() {
    return this.currentTime;
  };

  SMPTETTProxy.prototype.setCurrentTime = function(value) {
    var caption, i, _i, _len, _ref, _results;
    if (value === this.currentTime) {
      return;
    }
    this.currentTime = value;
    i = 0;
    while (i < this.activeCaptions.length) {
      caption = this.activeCaptions[i];
      if (caption.end <= value) {
        this.sendNotification(CaptioningNotifications.REMOVE_CAPTION, caption);
        this.activeCaptions.splice(i, 1);
        continue;
      }
      ++i;
    }
    _ref = this.captions;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      caption = _ref[_i];
      if (!(caption.begin === value && !(__indexOf.call(this.activeCaptions, caption) >= 0))) {
        continue;
      }
      this.sendNotification(CaptioningNotifications.ADD_CAPTION, caption);
      _results.push(this.activeCaptions.push(caption));
    }
    return _results;
  };

  /**
   *
  */


  SMPTETTProxy.prototype.start = function() {};

  /**
   *
  */


  SMPTETTProxy.prototype.parse = function(xml) {
    var captions, previousCaption, styledElements, styles,
      _this = this;
    this.styles = {};
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
      return _this.styles[id] = style;
    });
    styledElements = Array.prototype.slice.call(xml.querySelectorAll("body [style]"));
    styledElements.forEach(function(item, index, array) {
      var id;
      id = item.getAttribute("style");
      return item.setAttribute("style", _this.styles[id]);
    });
    captions = Array.prototype.slice.call(xml.querySelectorAll("body p[begin]"));
    previousCaption = null;
    return captions.forEach(function(item, index, array) {
      var caption, element;
      element = document.adoptNode(item);
      caption = {};
      caption.element = element;
      caption.begin = Utils.flattenTimecode(element.getAttribute("begin"));
      element.removeAttribute("begin");
      if (previousCaption != null) {
        previousCaption.end = caption.begin;
        previousCaption = null;
      }
      if (element.hasAttribute("end")) {
        caption.end = Utils.flattenTimecode(element.getAttribute("end"));
        element.removeAttribute("end");
      } else {
        previousCaption = caption;
      }
      return _this.captions.push(caption);
    });
  };

  return SMPTETTProxy;

})(puremvc.Proxy);

com.akamai.amp.plugins.captioning.CaptioningNotifications = (function() {

  CaptioningNotifications.name = 'CaptioningNotifications';

  function CaptioningNotifications() {}

  CaptioningNotifications.ADD_CAPTION = "addCaption";

  CaptioningNotifications.REMOVE_CAPTION = "removeCaption";

  CaptioningNotifications.VISIBILITY_CHANGE = "captioningvisibilitychange";

  CaptioningNotifications.ENABLED = "captioningEnabled";

  return CaptioningNotifications;

})();

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningProxy = (function(_super) {

  __extends(CaptioningProxy, _super);

  CaptioningProxy.name = 'CaptioningProxy';

  /** @static
  */


  CaptioningProxy.NAME = com.akamai.amp.modules.ModuleConfigurationProxy.NAME;

  CaptioningProxy.prototype.data = {
    url: null,
    embedded: false
  };

  CaptioningProxy.prototype.core = null;

  CaptioningProxy.prototype.activeCaptions = null;

  CaptioningProxy.prototype.captions = null;

  CaptioningProxy.prototype.hidden = true;

  CaptioningProxy.prototype.provider = null;

  CaptioningProxy.prototype.providers = null;

  /** @constructor
  */


  var CaptioningProviders, CaptioningNotifications, SubplyProxy, SMPTETTProxy;


  function CaptioningProxy(config) {
    CaptioningProviders = com.akamai.amp.plugins.captioning.CaptioningProviders;

    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;

    SubplyProxy = com.akamai.amp.plugins.captioning.SubplyProxy;

    SMPTETTProxy = com.akamai.amp.plugins.captioning.SMPTETTProxy;
    this.activeCaptions = [];
    this.captions = [];
    this.providers = {};
    CaptioningProxy.__super__.constructor.call(this, config);
  }

  CaptioningProxy.prototype.onRegister = function() {
    this.providers[CaptioningProviders.SMPTETT] = new SMPTETTProxy();
    this.facade.registerProxy(this.providers[CaptioningProviders.SMPTETT]);
    this.providers[CaptioningProviders.SUBPLY] = new SubplyProxy();
    return this.facade.registerProxy(this.providers[CaptioningProviders.SUBPLY]);
  };

  /**
   *
  */


  CaptioningProxy.prototype.getProvider = function() {
    return this.provider;
  };

  CaptioningProxy.prototype.setProvider = function(value) {
    return this.provider = this.providers[value];
  };

  /**
   *
  */


  CaptioningProxy.prototype.getURL = function() {
    return this.data.url;
  };

  CaptioningProxy.prototype.setURL = function(value) {
    var _ref;
    this.data.url = value;
    return (_ref = this.provider) != null ? _ref.setURL(value) : void 0;
  };

  /**
   *
  */


  CaptioningProxy.prototype.getEmbedded = function() {
    return this.data.embedded;
  };

  CaptioningProxy.prototype.setEmbedded = function(value) {
    return this.data.embedded = value;
  };

  /**
   *
  */


  CaptioningProxy.prototype.getHidden = function() {
    return this.hidden;
  };

  CaptioningProxy.prototype.setHidden = function(value) {
    return this.hidden = value;
  };

  /**
   *
  */


  CaptioningProxy.prototype.setCurrentTime = function(value) {
    var _ref;
    return (_ref = this.provider) != null ? _ref.setCurrentTime(value) : void 0;
  };

  /**
   *
  */


  CaptioningProxy.prototype.start = function() {
    var _ref;
    return (_ref = this.provider) != null ? _ref.start() : void 0;
  };

  return CaptioningProxy;

})(com.akamai.amp.modules.ModuleConfigurationProxy);

com.akamai.amp.plugins.PluginMediator = (function(_super) {

  __extends(PluginMediator, _super);

  PluginMediator.name = 'PluginMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  PluginMediator.NAME = "PluginMediator";

  var ModuleConfigurationProxy;


  function PluginMediator(name, viewComponent) {
    ModuleConfigurationProxy = com.akamai.amp.modules.ModuleConfigurationProxy;
    PluginMediator.__super__.constructor.call(this, name, viewComponent);
  }

  /** @override
  */


  PluginMediator.prototype.initializeNotifier = function(key) {
    PluginMediator.__super__.initializeNotifier.call(this, key);
    this.plugin = this.facade.retrieveProxy(ModuleConfigurationProxy.NAME);
  };

  return PluginMediator;

})(com.akamai.amp.player.view.OverlayMediator);

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningMediator = (function(_super) {

  __extends(CaptioningMediator, _super);

  CaptioningMediator.name = 'CaptioningMediator';

  /**
   * The name of the this Mediator.
   * 
   * @static
   * @type {string}
  */


  CaptioningMediator.NAME = "CaptioningMediator";

  CaptioningMediator.prototype.captionText = null;

  CaptioningMediator.prototype.captionButton = null;

  CaptioningMediator.prototype.caption = null;

  var Notifications, Event, EventHandler, CaptioningNotifications, LocalizationConstants;


  function CaptioningMediator(viewComponent) {
    Notifications = com.akamai.amp.player.Notifications;

    Event = com.akamai.amp.events.Event;

    EventHandler = com.akamai.amp.events.EventHandler;

    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;

    LocalizationConstants = com.akamai.amp.player.model.localization.LocalizationConstants;
    CaptioningMediator.__super__.constructor.call(this, CaptioningMediator.NAME, viewComponent);
  }

  CaptioningMediator.prototype.onRegister = function() {
    var _this = this;
    this.viewComponent.classList.add("akamai-captioning");
    this.viewComponent.classList.add("akamai-hidden");
    this.captionText = document.createElement("div");
    this.captionText.classList.add("akamai-caption-text");
    this.viewComponent.appendChild(this.captionText);
    this.captionButton = document.createElement("div");
    this.captionButton.classList.add("akamai-caption-button");
    this.captionButton.textContent = this.localizationManager.getString(LocalizationConstants.MSG_CC);
    EventHandler.create(this.captionButton, EventHandler.CLICK, function(event) {
      event.stopImmediatePropagation();
      _this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, !_this.plugin.getHidden());
      return false;
    });
    this.sendNotification(Notifications.ADD_CONTROL, this.captionButton);
    return CaptioningMediator.__super__.onRegister.call(this);
  };

  CaptioningMediator.prototype.listNotificationInterests = function() {
    return [CaptioningNotifications.ADD_CAPTION, CaptioningNotifications.REMOVE_CAPTION, CaptioningNotifications.VISIBILITY_CHANGE, CaptioningNotifications.ENABLED];
  };

  CaptioningMediator.prototype.handleNotification = function(notification) {
    var body, name, note;
    name = notification.getName();
    body = notification.getBody();
    switch (name) {
      case CaptioningNotifications.ADD_CAPTION:
        if (body != null) {
          return this.captionText.appendChild(body.element);
        }
        break;
      case CaptioningNotifications.REMOVE_CAPTION:
        if ((body != null) && this.captionText.contains(body.element)) {
          return this.captionText.removeChild(body.element);
        }
        break;
      case CaptioningNotifications.VISIBILITY_CHANGE:
        if (this.plugin.getHidden()) {
          this.viewComponent.classList.add("akamai-hidden");
          return this.captionButton.classList.remove("akamai-cc-active");
        } else {
          if (!this.plugin.getEmbedded()) {
            this.viewComponent.classList.remove("akamai-hidden");
          }
          return this.captionButton.classList.add("akamai-cc-active");
        }
        break;
      case CaptioningNotifications.ENABLED:
        note = body ? Notifications.ADD_APPLICATION_STATE : Notifications.REMOVE_APPLICATION_STATE;
        return this.sendNotification(note, "cc-enabled");
    }
  };

  return CaptioningMediator;

})(com.akamai.amp.plugins.PluginMediator);

/**
 * The main player class.
 *   
 * @member com.akamai.amp.player
 *
 *
*/

com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsPlugin = (function(_super) {

  __extends(MediaAnalyticsPlugin, _super);

  MediaAnalyticsPlugin.name = 'MediaAnalyticsPlugin';

  MediaAnalyticsPlugin.NAME = "MediaAnalyticsPlugin";

  MediaAnalyticsPlugin.prototype.key = "mediaanalytics";

  /** @constructor
  */


  var MediaAnalyticsWrapper, Utils, MediaAnalyticsProxy, MediaAnalyticsChangeMediaCommand, MediaAnalyticsAdBreakStartCommand, MediaAnalyticsAdLoadedCommand, MediaAnalyticsAdStartCommand, MediaAnalyticsAdTimeUpdateCommand, MediaAnalyticsAdEndCommand, Notifications, AdNotifications;


  function MediaAnalyticsPlugin(app, config) {
    MediaAnalyticsWrapper = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsWrapper;

    Utils = com.akamai.amp.core.Utils;

    MediaAnalyticsProxy = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsProxy;

    MediaAnalyticsChangeMediaCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsChangeMediaCommand;

    MediaAnalyticsAdBreakStartCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdBreakStartCommand;

    MediaAnalyticsAdLoadedCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdLoadedCommand;

    MediaAnalyticsAdStartCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdStartCommand;

    MediaAnalyticsAdTimeUpdateCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdTimeUpdateCommand;

    MediaAnalyticsAdEndCommand = com.akamai.amp.plugins.mediaanalytics.MediaAnalyticsAdEndCommand;

    Notifications = com.akamai.amp.player.Notifications;

    AdNotifications = com.akamai.amp.plugins.ads.AdNotifications;
    MediaAnalyticsPlugin.__super__.constructor.call(this, app, config);
  }

  /** @override
  */


  MediaAnalyticsPlugin.prototype.createModel = function() {
    return this.registerProxy(new MediaAnalyticsProxy(this.config));
  };

  /** @override
  */


  MediaAnalyticsPlugin.prototype.createController = function() {
    this.registerCommand(Notifications.MEDIA_CHANGE, MediaAnalyticsChangeMediaCommand);
    this.registerCommand(AdNotifications.BREAK_START, MediaAnalyticsAdBreakStartCommand);
    this.registerCommand(AdNotifications.AD_LOADED, MediaAnalyticsAdLoadedCommand);
    this.registerCommand(AdNotifications.AD_STARTED, MediaAnalyticsAdStartCommand);
    this.registerCommand(AdNotifications.AD_TIME_UPDATE, MediaAnalyticsAdTimeUpdateCommand);
    return this.registerCommand(AdNotifications.AD_ENDED, MediaAnalyticsAdEndCommand);
  };

  /** @override
  */


  MediaAnalyticsPlugin.prototype.onRegister = function() {
    var proxy,
      _this = this;
    window.AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH = this.config.config;
    proxy = this.retrieveProxy(MediaAnalyticsProxy.NAME);
    if (proxy.getPlugin() != null) {
      return Utils.loadAMPScript(proxy.getPlugin(), function() {
        return _this.sendNotification(Notifications.PLUGIN_REGISTERED, _this);
      });
    } else {
      return this.sendNotification(Notifications.PLUGIN_REGISTERED, this);
    }
  };

  return MediaAnalyticsPlugin;

})(com.akamai.amp.plugins.PluginFacade);

/**
 *
*/

com.akamai.amp.plugins.captioning.CaptioningPlugin = (function(_super) {

  __extends(CaptioningPlugin, _super);

  CaptioningPlugin.name = 'CaptioningPlugin';

  CaptioningPlugin.NAME = "CaptioningPlugin";

  CaptioningPlugin.prototype.captioningProxy = null;

  /** @constructor
  */


  var CaptioningWrapper, Notifications, CaptioningMediator, CaptioningProxy, CaptioningStartedCommand, CaptioningTimeUpdateCommand, CaptioningChangeMediaCommand, CaptioningVisibilityChangeCommand, CaptioningNotifications;


  function CaptioningPlugin(app, init) {
    CaptioningWrapper = com.akamai.amp.plugins.captioning.CaptioningWrapper;

    Notifications = com.akamai.amp.player.Notifications;

    CaptioningMediator = com.akamai.amp.plugins.captioning.CaptioningMediator;

    CaptioningProxy = com.akamai.amp.plugins.captioning.CaptioningProxy;

    CaptioningStartedCommand = com.akamai.amp.plugins.captioning.CaptioningStartedCommand;

    CaptioningTimeUpdateCommand = com.akamai.amp.plugins.captioning.CaptioningTimeUpdateCommand;

    CaptioningChangeMediaCommand = com.akamai.amp.plugins.captioning.CaptioningChangeMediaCommand;

    CaptioningVisibilityChangeCommand = com.akamai.amp.plugins.captioning.CaptioningVisibilityChangeCommand;

    CaptioningNotifications = com.akamai.amp.plugins.captioning.CaptioningNotifications;
    CaptioningPlugin.__super__.constructor.call(this, app, init);
    this.app.features.captioning = this;
  }

  /** @override
  */


  CaptioningPlugin.prototype.createController = function() {
    this.registerCommand(Notifications.CHANGE_MEDIA, CaptioningChangeMediaCommand);
    this.registerCommand(Notifications.STARTED, CaptioningStartedCommand);
    this.registerCommand(Notifications.TIME_UPDATE, CaptioningTimeUpdateCommand);
    return this.registerCommand(CaptioningNotifications.VISIBILITY_CHANGE, CaptioningVisibilityChangeCommand);
  };

  /** @override
  */


  CaptioningPlugin.prototype.createModel = function() {
    this.captioningProxy = new CaptioningProxy(this.config);
    return this.registerProxy(this.captioningProxy);
  };

  /** @override
  */


  CaptioningPlugin.prototype.onRegister = function() {
    this.registerMediator(new CaptioningMediator());
    return CaptioningPlugin.__super__.onRegister.call(this);
  };

  CaptioningPlugin.prototype.getHidden = function() {
    return this.captioningProxy.getHidden();
  };

  CaptioningPlugin.prototype.setHidden = function(value) {
    return this.sendNotification(CaptioningNotifications.VISIBILITY_CHANGE, value);
  };

  return CaptioningPlugin;

})(com.akamai.amp.plugins.PluginFacade);

