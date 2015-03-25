// Automatically generated file.  Do not edit!
'use strict';var f,n=this;function aa(a){a=a.split(".");for(var b=n,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Ib=function(){return a.th?a.th:a.th=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function r(a){return"number"==typeof a}function u(a){return"function"==da(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a){return a[ia]||(a[ia]=++ja)}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;
function ka(a,b,c){return a.call.apply(a.bind,arguments)}function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ma(a,b,c){ma=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return ma.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var oa=Date.now||function(){return+new Date};function w(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kk=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var pa={},x,qa,z,ra,sa,ta,ua,va,wa,xa,za,Aa,Ba,Ca,Da;/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ea(){this.Zc=[]}f=Ea.prototype;f.t=!1;f.Of=Infinity;f.k=function(){this.clear()};f.cd=function(a){this.Zc.push(a);this.lb()};f.Ne=function(a){for(var b=!1,c,d=0;c=this.Zc[d];d++)if(c==a){this.Zc.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.lb()};function Fa(a,b){var c=[].concat(a.Zc);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);x&&(d*=-1);c.sort(function(a,b){var c=a.O(),k=b.O();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.vb=function(){for(var a=Fa(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].ac());return a};f.clear=function(){for(;this.Zc.length;)this.Zc[0].k()};f.je=function(){return 0};function Ga(a,b){for(var c=a.vb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ha(a){return Infinity==a.Of?Infinity:a.Of-a.vb().length}f.lb=function(){};function Ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ja(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function La(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;
function Ua(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=n.document.createElement("div");return a.replace(Va,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Wa(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Va=/&([^;\s<&]+);?/g;function Xa(a,b){return a<b?-1:a>b?1:0};var Ya;a:{var Za=n.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}function ab(a){return-1!=Ya.indexOf(a)};function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<cb.length;g++)c=cb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function eb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return eb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var fb;function hb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,hb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}w(hb,Error);hb.prototype.name="CustomError";function ib(a,b){b.unshift(a);hb.call(this,Ia.apply(null,b));b.shift()}w(ib,hb);ib.prototype.name="AssertionError";function jb(a,b){throw new ib("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=Array.prototype,kb=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},lb=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},mb=A.filter?function(a,b,c){return A.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[g++]=l)}return e},nb=A.map?function(a,b,c){return A.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=p(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},ob=A.every?function(a,b,c){return A.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function pb(a,b){return 0<=kb(a,b)}
function qb(a,b){var c=kb(a,b),d;(d=0<=c)&&A.splice.call(a,c,1);return d}function rb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function sb(a,b,c,d){A.splice.apply(a,tb(arguments,1))}function tb(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)};var ub=ab("Opera")||ab("OPR"),B=ab("Trident")||ab("MSIE"),vb=ab("Gecko")&&-1==Ya.toLowerCase().indexOf("webkit")&&!(ab("Trident")||ab("MSIE")),C=-1!=Ya.toLowerCase().indexOf("webkit"),wb=ab("Macintosh"),xb=ab("Android"),yb=ab("iPhone")&&!ab("iPod")&&!ab("iPad"),zb=ab("iPad");function Ab(){var a=n.document;return a?a.documentMode:void 0}
var Bb=function(){var a="",b;if(ub&&n.opera)return a=n.opera.version,u(a)?a():a;vb?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:C&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ya))?a[1]:"");return B&&(b=Ab(),b>parseFloat(a))?String(b):a}(),Cb={};
function D(a){var b;if(!(b=Cb[a])){b=0;for(var c=Ka(String(Bb)).split("."),d=Ka(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",l=/(\d*)(\D*)/g,m=/(\d*)(\D*)/g;do{var q=l.exec(h)||["","",""],v=m.exec(k)||["","",""];if(0==q[0].length&&0==v[0].length)break;b=Xa(0==q[1].length?0:parseInt(q[1],10),0==v[1].length?0:parseInt(v[1],10))||Xa(0==q[2].length,0==v[2].length)||Xa(q[2],v[2])}while(0==b)}b=Cb[a]=0<=b}return b}
var Db=n.document,Eb=Db&&B?Ab()||("CSS1Compat"==Db.compatMode?parseInt(Bb,10):5):void 0;function Fb(a,b){this.width=a;this.height=b}f=Fb.prototype;f.clone=function(){return new Fb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.uh=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=r(b)?b:a;this.width*=a;this.height*=c;return this};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Gb(a){this.Xc=new Fb(0,25);this.La(a)}f=Gb.prototype;f.h=null;f.Q=!0;f.clone=function(){jb("There should never be an instance of Field, only its derived classes.")};f.uc=!0;f.I=function(a){this.h||(this.h=a,this.Y=E("g",{},null),this.dd=E("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.Y),this.fa=E("text",{"class":"blocklyText"},this.Y),this.tc(),a.D().appendChild(this.Y),this.Pf=F(this.Y,"mouseup",this,this.Tf),Hb(this))};
f.k=function(){this.Pf&&(G(this.Pf),this.Pf=null);this.h=null;H(this.Y);this.dd=this.fa=this.Y=null};f.tc=function(){this.uc&&(this.h.Bc&&!I?(Ib(this.Y,"blocklyEditableText"),Jb(this.Y,"blocklyNoNEditableText"),this.Y.style.cursor=this.di):(Ib(this.Y,"blocklyNonEditableText"),Jb(this.Y,"blocklyEditableText"),this.Y.style.cursor=""))};f.u=function(){return this.Q};f.G=function(a){if(this.Q!=a){this.Q=a;var b=this.D();b&&(b.style.display=a?"block":"none",this.Sc())}};f.D=function(){return this.Y};
f.Sc=function(){if(this.Q){try{var a=this.fa.getComputedTextLength()}catch(b){a=8*this.fa.textContent.length}this.dd&&this.dd.setAttribute("width",a+10)}else a=0;this.Xc.width=a};f.mh=function(){this.Xc.width||this.Sc();return this.Xc};f.nb=function(){return this.za};f.La=function(a){null!==a&&a!==this.za&&(this.za=a,Hb(this),this.h&&this.h.t&&(this.h.C(),this.h.Ca(),this.h.o.lb()))};
function Hb(a){if(a.fa){var b=a.za;Kb(a.fa);b=b.replace(/\s/g,"\u00a0");x&&b&&(b+="\u200f");b||(b="\u00a0");a.fa.appendChild(document.createTextNode(b));a.Xc.width=0}}f.Gc=function(){return this.nb()};f.Ma=function(a){this.La(a)};f.Tf=function(a){if(!yb&&!zb||0===a.layerX||0===a.layerY)Lb(a)||2!=Mb&&this.h.Bc&&!I&&Nb(this)};f.Wc=function(){};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ob(){for(var a=J.vb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].zk;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Pb);b.sort(Pb);return[c,b]}function Pb(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function Qb(a,b,c,d){function e(e,g){for(var l=0;l<e.length;l++){var m=Rb(d,g);Sb(m,"NAME").Ma(e[l][0]);for(var q=[],v=0;v<e[l][1].length;v++)q[v]="ARG"+v;m.Sk(e[l][1],q);m.eb();a.push(m);b.push(2*c)}}if(K.procedures_defnoreturn){var g=Rb(d,"procedures_defnoreturn");g.eb();a.push(g);b.push(2*c)}K.procedures_defreturn&&(g=Rb(d,"procedures_defreturn"),g.eb(),a.push(g),b.push(2*c));K.procedures_ifreturn&&(g=Rb(d,"procedures_ifreturn"),g.eb(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=Ob();
e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function L(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=L.prototype;f.clone=function(){return new L(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof L?(this.x+=a.x,this.y+=a.y):(this.x+=a,r(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.x*=a;this.y*=c;return this};function Tb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=Tb.prototype;f.je=function(){return this.right-this.left};f.clone=function(){return new Tb(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof Tb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ga(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,r(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function Ub(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=Ub.prototype;f.clone=function(){return new Ub(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof Ub?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.mh=function(){return new Fb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.top+=a.y):(this.left+=a,r(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function Vb(){this.pg="";this.ki=Wb}Vb.prototype.Kc=!0;Vb.prototype.Fc=function(){return this.pg};Vb.prototype.toString=function(){return"Const{"+this.pg+"}"};function Xb(a){if(a instanceof Vb&&a.constructor===Vb&&a.ki===Wb)return a.pg;jb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Wb={};function Yb(){this.Qb="";this.ii=Zb}f=Yb.prototype;f.Kc=!0;f.Fc=function(){return this.Qb};f.Hf=!0;f.md=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Qb+"}"};var Zb={};var $b=eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ac(){this.Ge="";this.hi=bc}ac.prototype.Kc=!0;var bc={};ac.prototype.Fc=function(){return this.Ge};ac.prototype.toString=function(){return"SafeStyle{"+this.Ge+"}"};function cc(a){var b=new ac;b.Ge=a;return b}var dc=cc("");
function ec(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof Vb?d=Xb(d):fc.test(d)||(jb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?cc(b):dc}var fc=/^[-.%_!# a-zA-Z0-9]+$/;function gc(){this.Zf="";this.li=hc}f=gc.prototype;f.Kc=!0;f.Fc=function(){return this.Zf};f.Hf=!0;f.md=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.Zf+"}"};var hc={};function ic(){this.Qb="";this.gi=jc;this.eh=null}f=ic.prototype;f.Hf=!0;f.md=function(){return this.eh};f.Kc=!0;f.Fc=function(){return this.Qb};f.toString=function(){return"SafeHtml{"+this.Qb+"}"};function kc(a){if(a instanceof ic&&a.constructor===ic&&a.gi===jc)return a.Qb;jb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function lc(a){if(a instanceof ic)return a;var b=null;a.Hf&&(b=a.md());return mc(Ma(a.Kc?a.Fc():String(a)),b)}
var nc=/^[a-zA-Z0-9-]+$/,oc=eb("action","cite","data","formaction","href","manifest","poster","src"),pc=eb("embed","iframe","link","object","script","style","template");
function qc(a,b,c){if(!nc.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in pc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!nc.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,l=a;k=g;if(h instanceof Vb)h=Xb(h);else if("style"==k.toLowerCase()){if(!ga(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof ac||
(h=ec(h));l=void 0;h instanceof ac&&h.constructor===ac&&h.hi===bc?l=h.Ge:(jb("expected object of type SafeStyle, got '"+h+"'"),l="type_error:SafeStyle");h=l}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in oc)if(h instanceof gc)h instanceof gc&&h.constructor===gc&&h.li===hc?h=h.Zf:(jb("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Yb)h instanceof Yb&&h.constructor===
Yb&&h.ii===Zb?h=h.Qb:(jb("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Kc&&(h=h.Fc());k=k+'="'+Ma(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===$b[a.toLowerCase()]?e+=">":(d=rc(c),e+=">"+kc(d)+"</"+a+">",d=d.md());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return mc(e,d)}
function rc(a){function b(a){ea(a)?lb(a,b):(a=lc(a),d+=kc(a),a=a.md(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";lb(arguments,b);return mc(d,c)}var jc={};function mc(a,b){var c=new ic;c.Qb=a;c.eh=b;return c}var sc=mc("",0);function tc(a,b){a.innerHTML=kc(b)};var uc=!B||B&&9<=Eb,vc=!vb&&!B||B&&B&&9<=Eb||vb&&D("1.9.1"),wc=B&&!D("9");function xc(a){return a?new yc(zc(a)):fb||(fb=new yc)}function Ac(a,b){bb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Bc?a.setAttribute(Bc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Cc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Fb(a.clientWidth,a.clientHeight)}function M(a,b,c){return Dc(document,arguments)}
function Dc(a,b){var c=b[0],d=b[1];if(!uc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ma(d.name),'"');if(d.type){c.push(' type="',Ma(d.type),'"');var e={};db(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(p(d)?c.className=d:ea(d)?c.className=d.join(" "):Ac(c,d));2<b.length&&Ec(a,c,b,2);return c}
function Ec(a,b,c,d){function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ga(g)&&0<g.nodeType?e(g):lb(Fc(g)?rb(g):g,e)}}function Kb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function Gc(a){var b=J.g;b.parentNode&&b.parentNode.insertBefore(a,b)}function H(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Hc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function zc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var Ic={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Jc={IMG:" ",BR:"\n"};function Kc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function Lc(a){a=a.tabIndex;return r(a)&&0<=a&&32768>a}
function Mc(a){var b=[];Nc(a,b,!1);return b.join("")}function Nc(a,b,c){if(!(a.nodeName in Ic))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Jc)b.push(Jc[a.nodeName]);else for(a=a.firstChild;a;)Nc(a,b,c),a=a.nextSibling}function Fc(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(u(a))return"function"==typeof a.item}return!1}
function yc(a){this.ub=a||n.document||document}f=yc.prototype;f.bb=xc;f.i=function(a){return p(a)?this.ub.getElementById(a):a};f.H=function(a,b,c){return Dc(this.ub,arguments)};f.createElement=function(a){return this.ub.createElement(a)};f.createTextNode=function(a){return this.ub.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){Ec(zc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Lh=Kb;f.removeNode=H;f.ac=function(a){return vc&&void 0!=a.children?a.children:mb(a.childNodes,function(a){return 1==a.nodeType})};f.contains=Hc;f.Lb=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Kc(a)||Lc(a)):Kc(a)&&Lc(a))&&B?(a=u(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};function Oc(a,b){var c=zc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Pc(a,b){return Oc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Qc(){var a=document,b=a.body,a=a.documentElement;return new L(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function Rc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Sc(a){if(B&&!(B&&8<=Eb))return a.offsetParent;var b=zc(a),c=Pc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Pc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Tc(a){var b,c=zc(a),d=Pc(a,"position"),e=vb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new L(0,0),h;b=c?zc(c):document;(h=!B||B&&9<=Eb)||(h="CSS1Compat"==xc(b).ub.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=Rc(a),c=xc(c).ub,a=C||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=B&&D("10")&&c.pageYOffset!=a.scrollTop?new L(a.scrollLeft,
a.scrollTop):new L(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(C&&"fixed"==Pc(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(ub||C&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=Sc(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,ub&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function Uc(a){var b=Vc;if("none"!=Pc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function Vc(a){var b=a.offsetWidth,c=a.offsetHeight,d=C&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Rc(a),new Fb(a.right-a.left,a.bottom-a.top)):new Fb(b,c)}
function Wc(a){var b=Tc(a);a=Uc(a);return new Ub(b.x,b.y,a.width,a.height)}function Xc(a,b){a.style.display=b?"":"none"}var Yc=vb?"MozUserSelect":C?"WebkitUserSelect":null;function Zc(a,b,c){c=c?null:a.getElementsByTagName("*");if(Yc){if(b=b?"none":"",a.style[Yc]=b,c){a=0;for(var d;d=c[a];a++)d.style[Yc]=b}}else if(B||ub)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var $c={thin:2,medium:4,thick:6};
function ad(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in $c)d=$c[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function bd(a){if(B&&!(B&&9<=Eb)){var b=ad(a,"borderLeft"),c=ad(a,"borderRight"),d=ad(a,"borderTop");a=ad(a,"borderBottom");return new Tb(d,c,a,b)}b=Oc(a,"borderLeftWidth");c=Oc(a,"borderRightWidth");d=Oc(a,"borderTopWidth");a=Oc(a,"borderBottomWidth");return new Tb(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var cd="closure_listenable_"+(1E6*Math.random()|0),dd=0;function ed(a,b,c,d,e){this.cc=a;this.He=null;this.src=b;this.type=c;this.Vd=!!d;this.le=e;this.key=++dd;this.Rc=this.Ud=!1}function fd(a){a.Rc=!0;a.cc=null;a.He=null;a.src=null;a.le=null};function gd(a){this.src=a;this.xa={};this.Md=0}gd.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.xa[g];a||(a=this.xa[g]=[],this.Md++);var h=hd(a,b,d,e);-1<h?(b=a[h],c||(b.Ud=!1)):(b=new ed(b,this.src,g,!!d,e),b.Ud=c,a.push(b));return b};gd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.xa))return!1;var e=this.xa[a];b=hd(e,b,c,d);return-1<b?(fd(e[b]),A.splice.call(e,b,1),0==e.length&&(delete this.xa[a],this.Md--),!0):!1};
function id(a,b){var c=b.type;if(!(c in a.xa))return!1;var d=qb(a.xa[c],b);d&&(fd(b),0==a.xa[c].length&&(delete a.xa[c],a.Md--));return d}gd.prototype.Le=function(a){a=a&&a.toString();var b=0,c;for(c in this.xa)if(!a||c==a){for(var d=this.xa[c],e=0;e<d.length;e++)++b,fd(d[e]);delete this.xa[c];this.Md--}return b};gd.prototype.nd=function(a,b,c,d){a=this.xa[a.toString()];var e=-1;a&&(e=hd(a,b,c,d));return-1<e?a[e]:null};
function hd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.Rc&&g.cc==b&&g.Vd==!!c&&g.le==d)return e}return-1};var jd=!B||B&&9<=Eb,kd=!B||B&&9<=Eb,ld=B&&!D("9");!C||D("528");vb&&D("1.9b")||B&&D("8")||ub&&D("9.5")||C&&D("528");vb&&!D("8")||B&&D("9");var md="ontouchstart"in n||!!(n.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!n.navigator||!n.navigator.msMaxTouchPoints);function nd(){0!=od&&(pd[ha(this)]=this);this.fd=this.fd;this.Be=this.Be}var od=0,pd={};nd.prototype.fd=!1;nd.prototype.k=function(){if(!this.fd&&(this.fd=!0,this.X(),0!=od)){var a=ha(this);delete pd[a]}};nd.prototype.X=function(){if(this.Be)for(;this.Be.length;)this.Be.shift()()};function qd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.hc=!1;this.Mh=!0}qd.prototype.X=function(){};qd.prototype.k=function(){};qd.prototype.stopPropagation=function(){this.hc=!0};qd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Mh=!1};function rd(a){rd[" "](a);return a}rd[" "]=ba;function sd(a,b){qd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Vf=!1;this.ta=null;a&&this.I(a,b)}w(sd,qd);var td=[1,4,2];f=sd.prototype;
f.I=function(a,b){this.ta=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(vb){var e;a:{try{rd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.kh,set:this.Oj},offsetY:{configurable:!0,enumerable:!0,get:this.lh,set:this.Pj}}):(this.offsetX=this.kh(),
this.offsetY=this.lh());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Vf=wb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function ud(a){return jd?0==a.ta.button:"click"==a.type?!0:!!(a.ta.button&td[0])}f.stopPropagation=function(){sd.j.stopPropagation.call(this);this.ta.stopPropagation?this.ta.stopPropagation():this.ta.cancelBubble=!0};f.preventDefault=function(){sd.j.preventDefault.call(this);var a=this.ta;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ld)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.X=function(){};
f.kh=function(){return C||void 0!==this.ta.offsetX?this.ta.offsetX:this.ta.layerX};f.Oj=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.lh=function(){return C||void 0!==this.ta.offsetY?this.ta.offsetY:this.ta.layerY};f.Pj=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var vd="closure_lm_"+(1E6*Math.random()|0),wd={},xd=0;function yd(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)yd(a,b[g],c,d,e);return null}c=zd(c);if(a&&a[cd])a=a.w(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Ad(a);h||(a[vd]=h=new gd(a));c=h.add(b,c,!1,d,e);c.He||(d=Bd(),c.He=d,d.src=a,d.cc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Cd(b.toString()),d),xd++);a=c}return a}
function Bd(){var a=Dd,b=kd?function(c){return a.call(b.src,b.cc,c)}:function(c){c=a.call(b.src,b.cc,c);if(!c)return c};return b}function Ed(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)Ed(a,b[g],c,d,e);else c=zd(c),a&&a[cd]?a.Va(b,c,d,e):a&&(a=Ad(a))&&(b=a.nd(b,c,!!d,e))&&Fd(b)}
function Fd(a){if(r(a)||!a||a.Rc)return!1;var b=a.src;if(b&&b[cd])return id(b.Hb,a);var c=a.type,d=a.He;b.removeEventListener?b.removeEventListener(c,d,a.Vd):b.detachEvent&&b.detachEvent(Cd(c),d);xd--;(c=Ad(b))?(id(c,a),0==c.Md&&(c.src=null,b[vd]=null)):fd(a);return!0}function Cd(a){return a in wd?wd[a]:wd[a]="on"+a}function Gd(a,b,c,d){var e=!0;if(a=Ad(a))if(b=a.xa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.Vd==c&&!g.Rc&&(g=Hd(g,d),e=e&&!1!==g)}return e}
function Hd(a,b){var c=a.cc,d=a.le||a.src;a.Ud&&Fd(a);return c.call(d,b)}
function Dd(a,b){if(a.Rc)return!0;if(!kd){var c=b||aa("window.event"),d=new sd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.hc&&0<=k;k--){d.currentTarget=c[k];var l=Gd(c[k],g,!0,d),e=e&&l}for(k=0;!d.hc&&k<c.length;k++)d.currentTarget=c[k],l=Gd(c[k],g,!1,d),e=e&&l}return e}return Hd(a,new sd(b,
this))}function Ad(a){a=a[vd];return a instanceof gd?a:null}var Id="__closure_events_fn_"+(1E9*Math.random()>>>0);function zd(a){if(u(a))return a;a[Id]||(a[Id]=function(b){return a.handleEvent(b)});return a[Id]};function Jd(a){nd.call(this);this.ph=a;this.ve={}}w(Jd,nd);var Kd=[];f=Jd.prototype;f.w=function(a,b,c,d){ea(b)||(b&&(Kd[0]=b.toString()),b=Kd);for(var e=0;e<b.length;e++){var g=yd(a,b[e],c||this.handleEvent,d||!1,this.ph||this);if(!g)break;this.ve[g.key]=g}return this};
f.Va=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.Va(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.ph||this,c=zd(c),d=!!d,b=a&&a[cd]?a.nd(b,c,d,e):a?(a=Ad(a))?a.nd(b,c,d,e):null:null,b&&(Fd(b),delete this.ve[b.key]);return this};f.Le=function(){bb(this.ve,Fd);this.ve={}};f.X=function(){Jd.j.X.call(this);this.Le()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Ld(){}ca(Ld);Ld.prototype.vj=0;function Md(){nd.call(this);this.Hb=new gd(this);this.ni=this;this.Uf=null}w(Md,nd);Md.prototype[cd]=!0;f=Md.prototype;f.he=function(){return this.Uf};f.gg=function(a){this.Uf=a};f.addEventListener=function(a,b,c,d){yd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Ed(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.he();if(c)for(b=[];c;c=c.he())b.push(c);var c=this.ni,d=a.type||a;if(p(a))a=new qd(a,c);else if(a instanceof qd)a.target=a.target||c;else{var e=a;a=new qd(d,c);db(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.hc&&0<=h;h--)g=a.currentTarget=b[h],e=Nd(g,d,!0,a)&&e;a.hc||(g=a.currentTarget=c,e=Nd(g,d,!0,a)&&e,a.hc||(e=Nd(g,d,!1,a)&&e));if(b)for(h=0;!a.hc&&h<b.length;h++)g=a.currentTarget=b[h],e=Nd(g,d,!1,a)&&e;return e};
f.X=function(){Md.j.X.call(this);this.Hb&&this.Hb.Le(void 0);this.Uf=null};f.w=function(a,b,c,d){return this.Hb.add(String(a),b,!1,c,d)};f.Va=function(a,b,c,d){return this.Hb.remove(String(a),b,c,d)};function Nd(a,b,c,d){b=a.Hb.xa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.Rc&&h.Vd==c){var k=h.cc,l=h.le||h.src;h.Ud&&id(a.Hb,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Mh}f.nd=function(a,b,c,d){return this.Hb.nd(String(a),b,c,d)};function Od(a){Md.call(this);this.Zd=a||xc();this.Pe=Pd;this.ne=null;this.v=!1;this.s=null;this.Jb=void 0;this.Db=this.R=this.ra=this.ze=null;this.ak=!1}w(Od,Md);Od.prototype.lj=Ld.Ib();var Pd=null;
function Qd(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function Rd(a){return a.ne||(a.ne=":"+(a.lj.vj++).toString(36))}f=Od.prototype;f.i=function(){return this.s};function Sd(a){a.Jb||(a.Jb=new Jd(a));return a.Jb}
f.ya=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.ra&&this.ne&&Td(this.ra,this.ne)&&this.ra!=a)throw Error("Unable to set parent component");this.ra=a;Od.j.gg.call(this,a)};f.getParent=function(){return this.ra};f.gg=function(a){if(this.ra&&this.ra!=a)throw Error("Method not supported");Od.j.gg.call(this,a)};f.bb=function(){return this.Zd};f.H=function(){this.s=this.Zd.createElement("div")};f.C=function(a){this.Sc(a)};
f.Sc=function(a,b){if(this.v)throw Error("Component already rendered");this.s||this.H();a?a.insertBefore(this.s,b||null):this.Zd.ub.body.appendChild(this.s);this.ra&&!this.ra.v||this.ia()};f.ia=function(){this.v=!0;Ud(this,function(a){!a.v&&a.i()&&a.ia()})};f.Ta=function(){Ud(this,function(a){a.v&&a.Ta()});this.Jb&&this.Jb.Le();this.v=!1};
f.X=function(){this.v&&this.Ta();this.Jb&&(this.Jb.k(),delete this.Jb);Ud(this,function(a){a.k()});!this.ak&&this.s&&H(this.s);this.ra=this.ze=this.s=this.Db=this.R=null;Od.j.X.call(this)};f.Qd=function(a,b){this.vc(a,Vd(this),b)};
f.vc=function(a,b,c){if(a.v&&(c||!this.v))throw Error("Component already rendered");if(0>b||b>Vd(this))throw Error("Child component index out of bounds");this.Db&&this.R||(this.Db={},this.R=[]);if(a.getParent()==this){var d=Rd(a);this.Db[d]=a;qb(this.R,a)}else{var d=this.Db,e=Rd(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.ya(this);sb(this.R,b,0,a);a.v&&this.v&&a.getParent()==this?(c=this.ab(),b=c.childNodes[b]||null,b!=a.i()&&c.insertBefore(a.i(),b)):c?(this.s||
this.H(),b=N(this,b+1),a.Sc(this.ab(),b?b.s:null)):this.v&&!a.v&&a.s&&a.s.parentNode&&1==a.s.parentNode.nodeType&&a.ia()};f.ab=function(){return this.s};function Wd(a){null==a.Pe&&(a.Pe="rtl"==Pc(a.v?a.s:a.Zd.ub.body,"direction"));return a.Pe}f.Gd=function(a){if(this.v)throw Error("Component already rendered");this.Pe=a};function Xd(a){return!!a.R&&0!=a.R.length}function Vd(a){return a.R?a.R.length:0}function Td(a,b){var c;a.Db&&b?(c=a.Db,c=(b in c?c[b]:void 0)||null):c=null;return c}
function N(a,b){return a.R?a.R[b]||null:null}function Ud(a,b,c){a.R&&lb(a.R,b,c)}function Yd(a,b){return a.R&&b?kb(a.R,b):-1}f.removeChild=function(a,b){if(a){var c=p(a)?a:Rd(a);a=Td(this,c);if(c&&a){var d=this.Db;c in d&&delete d[c];qb(this.R,a);b&&(a.Ta(),a.s&&H(a.s));a.ya(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Lh=function(a){for(var b=[];Xd(this);)b.push(this.removeChild(N(this,0),a));return b};function Zd(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function $d(a,b){return a.classList?a.classList.contains(b):pb(Zd(a),b)}function ae(a,b){a.classList?a.classList.add(b):$d(a,b)||(a.className+=0<a.className.length?" "+b:b)}function be(a,b){if(a.classList)lb(b,function(b){ae(a,b)});else{var c={};lb(Zd(a),function(a){c[a]=!0});lb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function ce(a,b){a.classList?a.classList.remove(b):$d(a,b)&&(a.className=mb(Zd(a),function(a){return a!=b}).join(" "))}function de(a,b){a.classList?lb(b,function(b){ce(a,b)}):a.className=mb(Zd(a),function(a){return!pb(b,a)}).join(" ")};function ee(a,b){if(!a)throw Error("Invalid class name "+a);if(!u(b))throw Error("Invalid decorator function "+b);}var fe={};var ge;function he(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function O(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ge||(ge={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ge,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function ie(){}var je;ca(ie);var ke={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=ie.prototype;f.ae=function(){};f.H=function(a){return a.bb().H("div",this.de(a).join(" "),a.tb)};f.ab=function(a){return a};f.hd=function(a,b,c){if(a=a.i?a.i():a){var d=[b];B&&!D("7")&&(d=le(Zd(a),b),d.push(b));(c?be:de)(a,d)}};f.vd=function(a){Wd(a)&&this.Gd(a.i(),!0);a.isEnabled()&&this.nc(a,a.u())};
function me(a,b,c){if(a=c||a.ae())c=b.getAttribute("role")||null,a!=c&&he(b,a)}function ne(a,b){a.u()||O(b,"hidden",!a.u());a.isEnabled()||oe(b,1,!a.isEnabled());a.U&8&&oe(b,8,a.se());a.U&16&&oe(b,16,!!(a.$&16));a.U&64&&oe(b,64,a.Lc())}f.dg=function(a,b){Zc(a,!b,!B&&!ub)};f.Gd=function(a,b){this.hd(a,this.pa()+"-rtl",b)};f.Lb=function(a){var b;return a.U&32&&(b=a.da())?Kc(b)&&Lc(b):!1};
f.nc=function(a,b){var c;if(a.U&32&&(c=a.da())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.rd(null)}(Kc(c)&&Lc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.G=function(a,b){Xc(a,b);a&&O(a,"hidden",!b)};f.hb=function(a,b,c){var d=a.i();if(d){var e=this.ce(b);e&&this.hd(a,e,c);oe(d,b,c)}};
function oe(a,b,c){je||(je={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=je[b];var d=a.getAttribute("role")||null;d&&(d=ke[d]||b,b="checked"==b||"selected"==b?d:b);b&&O(a,b,c)}f.da=function(a){return a.i()};f.pa=function(){return"goog-control"};f.de=function(a){var b=this.pa(),c=[b],d=this.pa();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.ce(e));b&=~e}c.push.apply(c,d);(a=a.kb)&&c.push.apply(c,a);B&&!D("7")&&c.push.apply(c,le(c));return c};
function le(a,b){var c=[];b&&(a=a.concat([b]));lb([],function(d){!ob(d,na(pb,a))||b&&!pb(d,b)||c.push(d.join("_"))});return c}f.ce=function(a){if(!this.Jg){var b=this.pa();b.replace(/\xa0|\s/g," ");this.Jg={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Jg[a]};function pe(a,b,c,d,e){if(!(B||C&&D("525")))return!0;if(wb&&e)return qe(a);if(e&&!d)return!1;r(b)&&(b=re(b));if(!c&&(17==b||18==b||wb&&91==b))return!1;if(C&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(B&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!C}return qe(a)}
function qe(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||C&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function re(a){if(vb)a=se(a);else if(wb&&C)a:switch(a){case 93:a=91;break a}return a}
function se(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function te(a,b){Md.call(this);a&&ue(this,a,b)}w(te,Md);f=te.prototype;f.s=null;f.te=null;f.Kf=null;f.ue=null;f.Ia=-1;f.Nb=-1;f.$e=!1;
var ve={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},we={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},xe=B||C&&D("525"),ye=wb&&vb;f=te.prototype;
f.dj=function(a){C&&(17==this.Ia&&!a.ctrlKey||18==this.Ia&&!a.altKey||wb&&91==this.Ia&&!a.metaKey)&&(this.Nb=this.Ia=-1);-1==this.Ia&&(a.ctrlKey&&17!=a.keyCode?this.Ia=17:a.altKey&&18!=a.keyCode?this.Ia=18:a.metaKey&&91!=a.keyCode&&(this.Ia=91));xe&&!pe(a.keyCode,this.Ia,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Nb=re(a.keyCode),ye&&(this.$e=a.altKey))};f.ej=function(a){this.Nb=this.Ia=-1;this.$e=a.altKey};
f.handleEvent=function(a){var b=a.ta,c,d,e=b.altKey;B&&"keypress"==a.type?(c=this.Nb,d=13!=c&&27!=c?b.keyCode:0):C&&"keypress"==a.type?(c=this.Nb,d=0<=b.charCode&&63232>b.charCode&&qe(c)?b.charCode:0):ub?(c=this.Nb,d=qe(c)?b.keyCode:0):(c=b.keyCode||this.Nb,d=b.charCode||0,ye&&(e=this.$e),wb&&63==d&&224==c&&(c=191));var g=c=re(c),h=b.keyIdentifier;c?63232<=c&&c in ve?g=ve[c]:25==c&&a.shiftKey&&(g=9):h&&h in we&&(g=we[h]);a=g==this.Ia;this.Ia=g;b=new ze(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.i=function(){return this.s};function ue(a,b,c){a.ue&&a.detach();a.s=b;a.te=yd(a.s,"keypress",a,c);a.Kf=yd(a.s,"keydown",a.dj,c,a);a.ue=yd(a.s,"keyup",a.ej,c,a)}f.detach=function(){this.te&&(Fd(this.te),Fd(this.Kf),Fd(this.ue),this.ue=this.Kf=this.te=null);this.s=null;this.Nb=this.Ia=-1};f.X=function(){te.j.X.call(this);this.detach()};function ze(a,b,c,d){sd.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}w(ze,sd);function P(a,b,c){Od.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ha(b);if(d=fe[d])break;b=b.j?b.j.constructor:null}b=d?u(d.Ib)?d.Ib():new d:null}this.F=b;this.Nj(void 0!==a?a:null)}w(P,Od);f=P.prototype;f.tb=null;f.$=0;f.U=39;f.ui=255;f.Id=0;f.Q=!0;f.kb=null;f.td=!0;f.Ze=!1;f.Ej=null;f.da=function(){return this.F.da(this)};f.ge=function(){return this.qa||(this.qa=new te)};
f.hd=function(a,b){b?a&&(this.kb?pb(this.kb,a)||this.kb.push(a):this.kb=[a],this.F.hd(this,a,!0)):a&&this.kb&&qb(this.kb,a)&&(0==this.kb.length&&(this.kb=null),this.F.hd(this,a,!1))};f.H=function(){var a=this.F.H(this);this.s=a;me(this.F,a,this.ie());this.Ze||this.F.dg(a,!1);this.u()||this.F.G(a,!1)};f.ie=function(){return this.Ej};f.ab=function(){return this.F.ab(this.i())};
f.ia=function(){P.j.ia.call(this);ne(this,this.s);this.F.vd(this);if(this.U&-2&&(this.td&&Ae(this,!0),this.U&32)){var a=this.da();if(a){var b=this.ge();ue(b,a);Sd(this).w(b,"key",this.cb).w(a,"focus",this.ke).w(a,"blur",this.rd)}}};
function Ae(a,b){var c=Sd(a),d=a.i();b?(c.w(d,"mouseover",a.Ef).w(d,"mousedown",a.Hc).w(d,"mouseup",a.ud).w(d,"mouseout",a.Df),a.sd!=ba&&c.w(d,"contextmenu",a.sd),B&&c.w(d,"dblclick",a.nh)):(c.Va(d,"mouseover",a.Ef).Va(d,"mousedown",a.Hc).Va(d,"mouseup",a.ud).Va(d,"mouseout",a.Df),a.sd!=ba&&c.Va(d,"contextmenu",a.sd),B&&c.Va(d,"dblclick",a.nh))}f.Ta=function(){P.j.Ta.call(this);this.qa&&this.qa.detach();this.u()&&this.isEnabled()&&this.F.nc(this,!1)};
f.X=function(){P.j.X.call(this);this.qa&&(this.qa.k(),delete this.qa);delete this.F;this.kb=this.tb=null};f.Nj=function(a){this.tb=a};f.xf=function(){var a=this.tb;if(!a)return"";if(!p(a))if(ea(a))a=nb(a,Mc).join("");else{if(wc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Nc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");wc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return Ja(a)};
f.Gd=function(a){P.j.Gd.call(this,a);var b=this.i();b&&this.F.Gd(b,a)};f.dg=function(a){this.Ze=a;var b=this.i();b&&this.F.dg(b,a)};f.u=function(){return this.Q};f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.i();c&&this.F.G(c,a);this.isEnabled()&&this.F.nc(this,a);this.Q=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};
f.Fd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Be(this,1,!a)||(a||(this.setActive(!1),this.gb(!1)),this.u()&&this.F.nc(this,a),this.hb(1,!a,!0))};f.gb=function(a){Be(this,2,a)&&this.hb(2,a)};f.setActive=function(a){Be(this,4,a)&&this.hb(4,a)};f.se=function(){return!!(this.$&8)};f.Qj=function(){Be(this,8,!0)&&this.hb(8,!0)};function Ce(a,b){Be(a,16,b)&&a.hb(16,b)}f.Lc=function(){return!!(this.$&64)};function De(a,b){Be(a,64,b)&&a.hb(64,b)}
f.hb=function(a,b,c){c||1!=a?this.U&a&&b!=!!(this.$&a)&&(this.F.hb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Fd(!b)};f.Ka=function(a,b){if(this.v&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.hb(a,!1);this.U=b?this.U|a:this.U&~a};function Ee(a,b){return!!(a.ui&b)&&!!(a.U&b)}function Be(a,b,c){return!!(a.U&b)&&!!(a.$&b)!=c&&(!(a.Id&b)||a.dispatchEvent(Qd(b,c)))&&!a.fd}f.Ef=function(a){!Fe(a,this.i())&&this.dispatchEvent("enter")&&this.isEnabled()&&Ee(this,2)&&this.gb(!0)};
f.Df=function(a){!Fe(a,this.i())&&this.dispatchEvent("leave")&&(Ee(this,4)&&this.setActive(!1),Ee(this,2)&&this.gb(!1))};f.sd=ba;function Fe(a,b){return!!a.relatedTarget&&Hc(b,a.relatedTarget)}f.Hc=function(a){this.isEnabled()&&(Ee(this,2)&&this.gb(!0),!ud(a)||C&&wb&&a.ctrlKey||(Ee(this,4)&&this.setActive(!0),this.F.Lb(this)&&this.da().focus()));this.Ze||!ud(a)||C&&wb&&a.ctrlKey||a.preventDefault()};f.ud=function(a){this.isEnabled()&&(Ee(this,2)&&this.gb(!0),this.$&4&&this.Bd(a)&&Ee(this,4)&&this.setActive(!1))};
f.nh=function(a){this.isEnabled()&&this.Bd(a)};f.Bd=function(a){Ee(this,16)&&Ce(this,!(this.$&16));Ee(this,8)&&this.Qj();Ee(this,64)&&De(this,!this.Lc());var b=new qd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Vf=a.Vf);return this.dispatchEvent(b)};f.ke=function(){Ee(this,32)&&Be(this,32,!0)&&this.hb(32,!0)};f.rd=function(){Ee(this,4)&&this.setActive(!1);Ee(this,32)&&Be(this,32,!1)&&this.hb(32,!1)};
f.cb=function(a){return this.u()&&this.isEnabled()&&this.bc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.bc=function(a){return 13==a.keyCode&&this.Bd(a)};if(!u(P))throw Error("Invalid component class "+P);if(!u(ie))throw Error("Invalid renderer class "+ie);var Ge=ha(P);fe[Ge]=ie;ee("goog-control",function(){return new P(null)});function He(){this.Kg=[]}w(He,ie);ca(He);function Ie(a,b){var c=a.Kg[b];if(!c){switch(b){case 0:c=a.pa()+"-highlight";break;case 1:c=a.pa()+"-checkbox";break;case 2:c=a.pa()+"-content"}a.Kg[b]=c}return c}f=He.prototype;f.ae=function(){return"menuitem"};f.H=function(a){var b=a.bb().H("div",this.de(a).join(" "),Je(this,a.tb,a.bb()));Ke(this,a,b,!!(a.U&8)||!!(a.U&16));return b};f.ab=function(a){return a&&a.firstChild};function Je(a,b,c){a=Ie(a,2);return c.H("div",a,b)}
f.Ph=function(a,b,c){a&&b&&Ke(this,a,b,c)};f.eg=function(a,b,c){a&&b&&Ke(this,a,b,c)};function Ke(a,b,c,d){me(a,c,b.ie());ne(b,c);var e;if(e=a.ab(c)){e=e.firstChild;var g=Ie(a,1);e=!!e&&ga(e)&&1==e.nodeType&&$d(e,g)}else e=!1;d!=e&&(d?ae(c,"goog-option"):ce(c,"goog-option"),c=a.ab(c),d?(a=Ie(a,1),c.insertBefore(b.bb().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.ce=function(a){switch(a){case 2:return Ie(this,0);case 16:case 8:return"goog-option-selected";default:return He.j.ce.call(this,a)}};f.pa=function(){return"goog-menuitem"};function Le(a,b,c,d){P.call(this,a,d||He.Ib(),c);this.Ma(b)}w(Le,P);f=Le.prototype;f.Gc=function(){var a=this.ze;return null!=a?a:this.xf()};f.Ma=function(a){this.ze=a};f.Ka=function(a,b){Le.j.Ka.call(this,a,b);switch(a){case 8:this.$&16&&!b&&Ce(this,!1);var c=this.i();c&&this.F.Ph(this,c,b);break;case 16:(c=this.i())&&this.F.eg(this,c,b)}};f.Ph=function(a){this.Ka(8,a)};f.eg=function(a){this.Ka(16,a)};
f.xf=function(){var a=this.tb;return ea(a)?(a=nb(a,function(a){return ga(a)&&1==a.nodeType&&($d(a,"goog-menuitem-accel")||$d(a,"goog-menuitem-mnemonic-separator"))?"":Mc(a)}).join(""),Ja(a)):Le.j.xf.call(this)};f.ud=function(a){var b=this.getParent();if(b){var c=b.Fh;b.Fh=null;if(b=c&&r(a.clientX))b=new L(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}Le.j.ud.call(this,a)};f.bc=function(a){return a.keyCode==this.zh&&this.Bd(a)?!0:Le.j.bc.call(this,a)};f.Wi=function(){return this.zh};
ee("goog-menuitem",function(){return new Le(null)});Le.prototype.ie=function(){return this.U&16?"menuitemcheckbox":this.U&8?"menuitemradio":Le.j.ie.call(this)};Le.prototype.getParent=function(){return P.prototype.getParent.call(this)};Le.prototype.he=function(){return P.prototype.he.call(this)};function Me(a){this.Cg=a}ca(Me);f=Me.prototype;f.ae=function(){return this.Cg};function Ne(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.bb().H("div",this.de(a).join(" "))};f.ab=function(a){return a};f.vd=function(a){a=a.i();Zc(a,!0,vb);B&&(a.hideFocus=!0);var b=this.ae();b&&he(a,b)};f.da=function(a){return a.i()};f.pa=function(){return"goog-container"};f.de=function(a){var b=this.pa(),c=[b,a.Qc==Oe?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function Pe(){}w(Pe,ie);ca(Pe);Pe.prototype.H=function(a){return a.bb().H("div",this.pa())};Pe.prototype.pa=function(){return"goog-menuseparator"};function Qe(a,b){P.call(this,null,a||Pe.Ib(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.$=1}w(Qe,P);Qe.prototype.ia=function(){Qe.j.ia.call(this);var a=this.i();he(a,"separator")};ee("goog-menuseparator",function(){return new Qe});function Re(a){this.Cg=a||"menu"}w(Re,Me);ca(Re);Re.prototype.pa=function(){return"goog-menu"};Re.prototype.vd=function(a){Re.j.vd.call(this,a);a=a.i();O(a,"haspopup","true")};ee("goog-menuseparator",function(){return new Qe});function Se(a,b,c){Od.call(this,c);this.F=b||Me.Ib();this.Qc=a||Te}w(Se,Od);var Oe="horizontal",Te="vertical";f=Se.prototype;f.Lf=null;f.qa=null;f.F=null;f.Qc=null;f.Q=!0;f.Yb=!0;f.vf=!0;f.M=-1;f.Z=null;f.Oc=!1;f.pi=!1;f.Cj=!0;f.rb=null;f.da=function(){return this.Lf||this.F.da(this)};f.ge=function(){return this.qa||(this.qa=new te(this.da()))};f.H=function(){this.s=this.F.H(this)};f.ab=function(){return this.F.ab(this.i())};
f.ia=function(){Se.j.ia.call(this);Ud(this,function(a){a.v&&Ue(this,a)},this);var a=this.i();this.F.vd(this);this.G(this.Q,!0);Sd(this).w(this,"enter",this.Bf).w(this,"highlight",this.cj).w(this,"unhighlight",this.hj).w(this,"open",this.fj).w(this,"close",this.$i).w(a,"mousedown",this.Hc).w(zc(a),"mouseup",this.aj).w(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.Zi);this.Lb()&&Ve(this,!0)};
function Ve(a,b){var c=Sd(a),d=a.da();b?c.w(d,"focus",a.ke).w(d,"blur",a.rd).w(a.ge(),"key",a.cb):c.Va(d,"focus",a.ke).Va(d,"blur",a.rd).Va(a.ge(),"key",a.cb)}f.Ta=function(){this.Vc(-1);this.Z&&De(this.Z,!1);this.Oc=!1;Se.j.Ta.call(this)};f.X=function(){Se.j.X.call(this);this.qa&&(this.qa.k(),this.qa=null);this.F=this.Z=this.rb=this.Lf=null};f.Bf=function(){return!0};
f.cj=function(a){var b=Yd(this,a.target);if(-1<b&&b!=this.M){var c=N(this,this.M);c&&c.gb(!1);this.M=b;c=N(this,this.M);this.Oc&&c.setActive(!0);this.Cj&&this.Z&&c!=this.Z&&(c.U&64?De(c,!0):De(this.Z,!1))}b=this.i();null!=a.target.i()&&O(b,"activedescendant",a.target.i().id)};f.hj=function(a){a.target==N(this,this.M)&&(this.M=-1);this.i().removeAttribute("aria-activedescendant")};f.fj=function(a){(a=a.target)&&a!=this.Z&&a.getParent()==this&&(this.Z&&De(this.Z,!1),this.Z=a)};
f.$i=function(a){a.target==this.Z&&(this.Z=null)};f.Hc=function(a){this.Yb&&(this.Oc=!0);var b=this.da();b&&Kc(b)&&Lc(b)?b.focus():a.preventDefault()};f.aj=function(){this.Oc=!1};f.Zi=function(a){var b=We(this,a.target);if(b)switch(a.type){case "mousedown":b.Hc(a);break;case "mouseup":b.ud(a);break;case "mouseover":b.Ef(a);break;case "mouseout":b.Df(a);break;case "contextmenu":b.sd(a)}};
function We(a,b){if(a.rb)for(var c=a.i();b&&b!==c;){var d=b.id;if(d in a.rb)return a.rb[d];b=b.parentNode}return null}f.ke=function(){};f.rd=function(){this.Vc(-1);this.Oc=!1;this.Z&&De(this.Z,!1)};f.cb=function(a){return this.isEnabled()&&this.u()&&(0!=Vd(this)||this.Lf)&&this.bc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.bc=function(a){var b=N(this,this.M);if(b&&"function"==typeof b.cb&&b.cb(a)||this.Z&&this.Z!=b&&"function"==typeof this.Z.cb&&this.Z.cb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Lb())this.da().blur();else return!1;break;case 36:Xe(this);break;case 35:Ye(this);break;case 38:if(this.Qc==Te)Ze(this);else return!1;break;case 37:if(this.Qc==Oe)Wd(this)?$e(this):Ze(this);else return!1;break;case 40:if(this.Qc==Te)$e(this);else return!1;break;case 39:if(this.Qc==
Oe)Wd(this)?Ze(this):$e(this);else return!1;break;default:return!1}return!0};function Ue(a,b){var c=b.i(),c=c.id||(c.id=Rd(b));a.rb||(a.rb={});a.rb[c]=b}f.Qd=function(a,b){Se.j.Qd.call(this,a,b)};f.vc=function(a,b,c){a.Id|=2;a.Id|=64;!this.Lb()&&this.pi||a.Ka(32,!1);a.v&&0!=a.td&&Ae(a,!1);a.td=!1;var d=a.getParent()==this?Yd(this,a):-1;Se.j.vc.call(this,a,b,c);a.v&&this.v&&Ue(this,a);a=d;-1==a&&(a=Vd(this));a==this.M?this.M=Math.min(Vd(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=p(a)?Td(this,a):a){var c=Yd(this,a);-1!=c&&(c==this.M?(a.gb(!1),this.M=-1):c<this.M&&this.M--);var d=a.i();d&&d.id&&this.rb&&(c=this.rb,d=d.id,d in c&&delete c[d])}c=a=Se.j.removeChild.call(this,a,b);c.v&&1!=c.td&&Ae(c,!0);c.td=!0;return a};f.u=function(){return this.Q};
f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){this.Q=a;var c=this.i();c&&(Xc(c,a),this.Lb()&&Ne(this.da(),this.Yb&&this.Q),b||this.dispatchEvent(this.Q?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Yb};f.Fd=function(a){this.Yb!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Yb=!0,Ud(this,function(a){a.ai?delete a.ai:a.Fd(!0)})):(Ud(this,function(a){a.isEnabled()?a.Fd(!1):a.ai=!0}),this.Oc=this.Yb=!1),this.Lb()&&Ne(this.da(),a&&this.Q))};
f.Lb=function(){return this.vf};f.nc=function(a){a!=this.vf&&this.v&&Ve(this,a);this.vf=a;this.Yb&&this.Q&&Ne(this.da(),a)};f.Vc=function(a){(a=N(this,a))?a.gb(!0):-1<this.M&&N(this,this.M).gb(!1)};f.gb=function(a){this.Vc(Yd(this,a))};function Xe(a){af(a,function(a,c){return(a+1)%c},Vd(a)-1)}function Ye(a){af(a,function(a,c){a--;return 0>a?c-1:a},0)}function $e(a){af(a,function(a,c){return(a+1)%c},a.M)}function Ze(a){af(a,function(a,c){a--;return 0>a?c-1:a},a.M)}
function af(a,b,c){c=0>c?Yd(a,a.Z):c;var d=Vd(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=N(a,c);if(g&&a.Ig(g)){a.Vc(c);break}e++;c=b.call(a,c,d)}}f.Ig=function(a){return a.u()&&a.isEnabled()&&!!(a.U&2)};function bf(){}w(bf,ie);ca(bf);bf.prototype.pa=function(){return"goog-menuheader"};function cf(a,b,c){P.call(this,a,c||bf.Ib(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.$=1}w(cf,P);ee("goog-menuheader",function(){return new cf(null)});function df(a,b){Se.call(this,Te,b||Re.Ib(),a);this.nc(!1)}w(df,Se);f=df.prototype;f.Ye=!0;f.qi=!1;f.pa=function(){return this.F.pa()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.k()};function ef(a){a.Ye=!0;a.nc(!0)}f.G=function(a,b,c){(b=df.j.G.call(this,a,b))&&a&&this.v&&this.Ye&&this.da().focus();this.Fh=a&&c&&r(c.clientX)?new L(c.clientX,c.clientY):null;return b};f.Bf=function(a){this.Ye&&this.da().focus();return df.j.Bf.call(this,a)};
f.Ig=function(a){return(this.qi||a.isEnabled())&&a.u()&&!!(a.U&2)};f.bc=function(a){var b=df.j.bc.call(this,a);b||Ud(this,function(c){!b&&c.Wi&&c.zh==a.keyCode&&(this.isEnabled()&&this.gb(c),b=c.cb(a))},this);return b};
f.Vc=function(a){df.j.Vc.call(this,a);if(a=N(this,a)){var b=a.i();a=this.i();var c=Tc(b),d=Tc(a),e=bd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new L(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ff(a,b){this.Nc=a;this.ff=b;gf(this);var c=hf(this)[0];this.Ga=c[1];this.Rd=E("tspan",{},null);this.Rd.appendChild(document.createTextNode(x?jf+" ":" "+jf));ff.j.constructor.call(this,c[0])}w(ff,Gb);var jf=xb?"\u25bc":"\u25be";f=ff.prototype;f.clone=function(){return new ff(this.Nc,this.ff)};f.di="default";
function Nb(a){kf(a);for(var b=new df,c=hf(a),d=0;d<c.length;d++){var e=c[d][1],g=new Le(c[d][0]);g.Ma(e);g.eg(!0);b.Qd(g,!0);Ce(g,e==a.Ga)}yd(b,"action",function(b){if(b=b.target){b=b.Gc();if(a.h&&a.ff){var c=a.ff(b);void 0!==c&&(b=c)}null!==b&&a.Ma(b)}lf==a&&mf()});Sd(b).w(b.i(),"touchstart",function(a){We(this,a.target).Hc(a)});Sd(b).w(b.i(),"touchend",function(a){We(this,a.target).Bd(a)});c=Cc();d=Qc();e=nf(a.dd);g=a.dd.getBBox();b.C(of);var h=b.i();Ib(h,"blocklyDropdownMenu");var k=Uc(h);e.y=
e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;x?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));pf(e.x,e.y,c,d);ef(b);h.focus()}
function gf(a){a.Wf=null;a.qg=null;var b=a.Nc;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=qf(c),e=rf(c,d),g=sf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.Wf=c[0].substring(0,e-1));g&&(a.qg=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.Nc=c}}}function hf(a){return u(a.Nc)?a.Nc.call(a):a.Nc}f.Gc=function(){return this.Ga};f.Ma=function(a){this.Ga=a;for(var b=hf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.La(b[c][0]);return}this.La(a)};
f.La=function(a){this.h&&(this.Rd.style.fill=tf(uf(this.h.hf)));null!==a&&a!==this.za&&(this.za=a,Hb(this),this.fa&&(x?this.fa.insertBefore(this.Rd,this.fa.firstChild):this.fa.appendChild(this.Rd)),this.h&&this.h.t&&(this.h.C(),this.h.Ca(),this.h.o.lb()))};f.k=function(){lf==this&&mf();ff.j.k.call(this)};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function vf(a,b,c,d){var e=J,g;if(e.mb)g=e.mb();else if(e.vb)g=e.vb();else throw"Not Block or Workspace: "+e;for(var e=Object.create(null),h=0;h<g.length;h++){var k=g[h].Xi;if(k)for(var k=k.call(g[h]),l=0;l<k.length;l++){var m=k[l];m&&(e[m.toLowerCase()]=m)}}g=[];for(var q in e)g.push(e[q]);g.sort(La);g.unshift(null);q=void 0;for(e=0;e<g.length;e++)g[e]!==q&&((h=K.variables_get?Rb(d,"variables_get"):null)&&h.eb(),(k=K.variables_set?Rb(d,"variables_set"):null)&&k.eb(),null===g[e]?q=(h||k).Xi()[0]:
(h&&Sb(h,"VAR").Ma(g[e]),k&&Sb(k,"VAR").Ma(g[e])),k&&a.push(k),h&&a.push(h),h&&k?b.push(c,3*c):b.push(2*c))};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var wf=/#(.)(.)(.)/;function tf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=xf(b.toString(16));c=xf(c.toString(16));a=xf(a.toString(16));return"#"+b+c+a}var yf=/^#(?:[0-9a-f]{3}){1,2}$/i;function xf(a){return 1==a.length?"0"+a:a}
function uf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function zf(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function Af(a,b){null!=a&&this.append.apply(this,arguments)}f=Af.prototype;f.W="";f.set=function(a){this.W=""+a};f.append=function(a,b,c){this.W+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.W+=arguments[d];return this};f.clear=function(){this.W=""};f.toString=function(){return this.W};function Cf(a,b,c){if(u(a))c&&(a=ma(a,c));else if(a&&"function"==typeof a.handleEvent)a=ma(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:n.setTimeout(a,b||0)};function Q(a,b,c){Od.call(this,c);this.ha=b||Df;this.Ff=a instanceof ic?a:mc(a,null)}w(Q,Od);var Ef={};f=Q.prototype;f.cg=!1;f.jd=!1;f.Zj=null;f.oi=sc;f.yd=!0;f.Xd=-1;f.X=function(){Q.j.X.call(this);this.rc&&(this.rc.removeNode(this),this.rc=null);this.s=null};
f.qe=function(){var a=this.i();if(a){var b=Ff(this);b&&!b.id&&(b.id=Rd(this)+".label");he(a,"treeitem");O(a,"selected",!1);O(a,"expanded",!1);O(a,"level",this.Dc());b&&O(a,"labelledby",b.id);(a=this.fe())&&he(a,"presentation");(a=this.ee())&&he(a,"presentation");if(a=Gf(this))if(he(a,"group"),a.hasChildNodes())for(a=Vd(this),b=1;b<=a;b++){var c=N(this,b-1).i();O(c,"setsize",a);O(c,"posinset",b)}}};
f.H=function(){var a=this.bb(),b=this.sg(),c=a.ub,a=c.createElement("div");B?(tc(a,rc(qc("br"),b)),a.removeChild(a.firstChild)):tc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.s=b};f.ia=function(){Q.j.ia.call(this);Ef[Rd(this)]=this;this.qe()};f.Ta=function(){Q.j.Ta.call(this);delete Ef[Rd(this)]};
f.vc=function(a,b){var c=N(this,b-1),d=N(this,b);Q.j.vc.call(this,a,b);a.gc=c;a.fb=d;c?c.fb=a:this.ih=a;d?d.gc=a:this.wh=a;var e=this.ua();e&&Hf(a,e);If(a,this.Dc()+1);if(this.i()&&(this.$c(),this.Da())){e=Gf(this);a.i()||a.H();var g=a.i(),h=d&&d.i();e.insertBefore(g,h);this.v&&a.ia();d||(c?c.$c():(Xc(e,!0),this.Bb(this.Da())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.vc(a,b?Yd(this,b):Vd(this));return a};
f.removeChild=function(a){var b=this.ua(),c=b?b.Ja:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),Cf(this.Bj,10,this)):this.select();Q.j.removeChild.call(this,a);this.wh==a&&(this.wh=a.gc);this.ih==a&&(this.ih=a.fb);a.gc&&(a.gc.fb=a.fb);a.fb&&(a.fb.gc=a.gc);c=!a.fb;a.rc=null;a.Xd=-1;if(b&&(b.removeNode(this),this.v)){b=Gf(this);if(a.v){var d=a.i();b.removeChild(d);a.Ta()}c&&(c=N(this,Vd(this)-1))&&c.$c();Xd(this)||(b.style.display="none",this.$c(),this.fe().className=this.be())}return a};
f.remove=Q.prototype.removeChild;f.Bj=function(){this.select()};f.Dc=function(){var a=this.Xd;0>a&&(a=(a=this.getParent())?a.Dc()+1:0,If(this,a));return a};function If(a,b){if(b!=a.Xd){a.Xd=b;var c=Jf(a);if(c){var d=Kf(a)+"px";Wd(a)?c.style.paddingRight=d:c.style.paddingLeft=d}Ud(a,function(a){If(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.ac=function(){var a=[];Ud(this,function(b){a.push(b)});return a};f.se=function(){return this.cg};
f.select=function(){var a=this.ua();a&&a.oc(this)};function Lf(a,b){if(a.cg!=b){a.cg=b;Mf(a);var c=a.i();c&&(O(c,"selected",b),b&&(c=a.ua().i(),O(c,"activedescendant",Rd(a))))}}f.Da=function(){return this.jd};
f.Bb=function(a){var b=a!=this.jd;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.jd=a;c=this.ua();var d=this.i();if(Xd(this)){if(!a&&c&&this.contains(c.Ja)&&this.select(),d){if(c=Gf(this))if(Xc(c,a),a&&this.v&&!c.hasChildNodes()){var e=[];Ud(this,function(a){e.push(a.sg())});tc(c,rc(e));Ud(this,function(a){a.ia()})}this.$c()}}else(c=Gf(this))&&Xc(c,!1);d&&(this.fe().className=this.be(),O(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Bb(!this.Da())};
f.expand=function(){this.Bb(!0)};f.collapse=function(){this.Bb(!1)};f.bg=function(){var a=this.getParent();a&&(a.Bb(!0),a.bg())};f.sg=function(){var a=this.ua(),b=!a.Hd||a==this.getParent()&&!a.ig?this.ha.Mg:this.ha.Lg,a=this.Da()&&Xd(this),b={"class":b,style:Nf(this)},c=[];a&&Ud(this,function(a){c.push(a.sg())});a=qc("div",b,c);return qc("div",{"class":this.ha.Ug,id:Rd(this)},[Of(this),a])};function Kf(a){return Math.max(0,(a.Dc()-1)*a.ha.If)}
function Of(a){var b={};b["padding-"+(Wd(a)?"right":"left")]=Kf(a)+"px";var b={"class":a.pd(),style:b},c=a.yf(),d=qc("span",{style:{display:"inline-block"},"class":a.be()}),e=qc("span",{"class":a.ha.Vg,title:a.Zj||null},a.Ff);a=rc(e,qc("span",{},a.oi));return qc("div",b,[c,d,a])}f.pd=function(){return this.ha.mf+(this.se()?" "+this.ha.Xg:"")};f.yf=function(){return qc("span",{type:"expand",style:{display:"inline-block"},"class":Pf(this)})};
function Pf(a){var b=a.ua(),c=!b.Hd||b==a.getParent()&&!b.ig,d=a.ha,e=new Af;e.append(d.Xb," ",d.Di," ");if(Xd(a)){var g=0;b.hg&&a.yd&&(g=a.Da()?2:1);c||(g=a.fb?g+8:g+4);switch(g){case 1:e.append(d.Hi);break;case 2:e.append(d.Gi);break;case 4:e.append(d.Qg);break;case 5:e.append(d.Fi);break;case 6:e.append(d.Ei);break;case 8:e.append(d.Rg);break;case 9:e.append(d.Ji);break;case 10:e.append(d.Ii);break;default:e.append(d.Pg)}}else c?e.append(d.Pg):a.fb?e.append(d.Rg):e.append(d.Qg);return e.toString()}
function Nf(a){var b=a.Da()&&Xd(a);return ec({"background-position":Qf(a),display:b?null:"none"})}function Qf(a){return(a.fb?(a.Dc()-1)*a.ha.If:"-100")+"px 0"}f.i=function(){var a=Q.j.i.call(this);a||(this.s=a=this.bb().i(Rd(this)));return a};function Jf(a){return(a=a.i())?a.firstChild:null}f.ee=function(){var a=Jf(this);return a?a.firstChild:null};f.fe=function(){var a=Jf(this);return a?a.childNodes[1]:null};function Ff(a){return(a=Jf(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Gf(a){return(a=a.i())?a.lastChild:null}f.La=function(a){this.Ff=a=lc(a);var b=Ff(this);b&&tc(b,a);(a=this.ua())&&Rf(a,this)};f.nb=function(){var a=kc(this.Ff);return-1!=a.indexOf("&")?"document"in n?Ua(a):Wa(a):a};function Mf(a){var b=Jf(a);b&&(b.className=a.pd())}f.$c=function(){var a=this.ee();a&&(a.className=Pf(this));if(a=Gf(this))a.style.backgroundPosition=Qf(this)};f.Rf=function(a){"expand"==a.target.getAttribute("type")&&Xd(this)?this.yd&&this.toggle():(this.select(),Mf(this))};
f.Bh=function(a){"expand"==a.target.getAttribute("type")&&Xd(this)||this.yd&&this.toggle()};function Sf(a){return a.Da()&&Xd(a)?Sf(N(a,Vd(a)-1)):a}function Hf(a,b){a.rc!=b&&(a.rc=b,Rf(b,a),Ud(a,function(a){Hf(a,b)}))}
var Df={If:19,Wg:"goog-tree-root goog-tree-item",Tg:"goog-tree-hide-root",Ug:"goog-tree-item",Lg:"goog-tree-children",Mg:"goog-tree-children-nolines",mf:"goog-tree-row",Vg:"goog-tree-item-label",Xb:"goog-tree-icon",Di:"goog-tree-expand-icon",Hi:"goog-tree-expand-icon-plus",Gi:"goog-tree-expand-icon-minus",Ji:"goog-tree-expand-icon-tplus",Ii:"goog-tree-expand-icon-tminus",Fi:"goog-tree-expand-icon-lplus",Ei:"goog-tree-expand-icon-lminus",Rg:"goog-tree-expand-icon-t",Qg:"goog-tree-expand-icon-l",Pg:"goog-tree-expand-icon-blank",
kf:"goog-tree-expanded-folder-icon",Ng:"goog-tree-collapsed-folder-icon",lf:"goog-tree-file-icon",Sg:"goog-tree-expanded-folder-icon",Og:"goog-tree-collapsed-folder-icon",Xg:"selected"};function Tf(a,b,c){Q.call(this,a,b,c)}w(Tf,Q);Tf.prototype.ua=function(){if(this.rc)return this.rc;var a=this.getParent();return a&&(a=a.ua())?(Hf(this,a),a):null};Tf.prototype.be=function(){var a=this.Da(),b=this.Ri;if(a&&b)return b;b=this.jj;if(!a&&b)return b;b=this.ha;if(Xd(this)){if(a&&b.kf)return b.Xb+" "+b.kf;if(!a&&b.Ng)return b.Xb+" "+b.Ng}else if(b.lf)return b.Xb+" "+b.lf;return""};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Uf(a){var b;x&&(b=workarea.je());var c=M("xml");a=Fa(a,!0);for(var d=0,e;e=a[d];d++){var g=Vf(e);e=e.O();g.setAttribute("x",x?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}return c}
function Vf(a){var b=M("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Pc){var c=a.Pc();c&&b.appendChild(c)}for(var d=0;c=a.S[d];d++)for(var e=0,g;g=c.oa[e];e++)if(g.name&&g.uc){var h=M("field",null,g.Gc());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.jh())c=M("comment",null,c),"object"==typeof a.L&&(c.setAttribute("pinned",a.L.u()),d=a.L.$b(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.S[e];e++){var k;g=!0;5!=c.type&&
(h=R(c.n),1==c.type?(k=M("value"),d=!0):3==c.type&&(k=M("statement")),h&&(k.appendChild(Vf(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.wd);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Ac&&!I||b.setAttribute("deletable",!1);a.zb&&!I||b.setAttribute("movable",!1);a.Bc&&!I||b.setAttribute("editable",!1);if(a=Wf(a))k=M("next",null,Vf(a)),b.appendChild(k);return b}
function Xf(a){return(new XMLSerializer).serializeToString(a)}function Yf(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Zf(a,b){var c;x&&(c=a.je());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=$f(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(x?c-h:h,e)}}
function $f(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=ag(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.o&&d.k(!0,!1,!0);d.fill(a,e);d.ra=g}else d=Rb(a,e);d.eb&&d.eb();(g=b.getAttribute("inline"))&&bg(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Ed("true"==g);(g=b.getAttribute("deletable"))&&cg(d,"true"==g);if(g=b.getAttribute("movable"))d.zb="true"==g;(g=b.getAttribute("editable"))&&dg(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,l=0,m;m=k.childNodes[l];l++)3==m.nodeType&&m.data.match(/^\s*$/)||(h=m);l=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.gd&&(d.gd(k),d.eb&&d.eb());break;case "comment":d.Dd(k.textContent);var q=k.getAttribute("pinned");q&&setTimeout(function(){d.L&&d.L.G&&d.L.G("true"==q)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.L&&d.L.G&&d.L.lc(h,k);break;case "title":case "field":Sb(d,l).Ma(k.textContent);break;case "value":case "statement":k=eg(d,l);if(!k)throw"Input "+l+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=$f(a,h,c),h.K)fg(k.n,h.K);else if(h.B)fg(k.n,h.B);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.J)throw"Next statement does not exist.";if(d.J.m)throw"Next statement is already connected.";
h=$f(a,h,c);if(!h.B)throw"Next block does not have previous statement.";fg(d.J,h.B)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.mc("true"==b);a.t&&((a=Wf(d))?a.C():d.C());return d}function gg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}n.Blockly||(n.Blockly={});n.Blockly.Xml||(n.Blockly.Xml={});n.Blockly.Xml.domToText=Xf;n.Blockly.Xml.domToWorkspace=Zf;n.Blockly.Xml.textToDom=Yf;
n.Blockly.Xml.workspaceToDom=Uf;/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function hg(a,b,c,d,e,g,h){var k=ig;x&&(k=-k);this.si=k*Math.PI/180;this.p=a;this.tb=b;this.Qh=c;a.Yc.appendChild(this.jf(b,!(!g||!h)));jg(this,d,e);g&&h||(a=this.tb.getBBox(),g=a.width+2*kg,h=a.height+2*kg);this.lc(g,h);lg(this);mg(this);this.ag=!0;I||(F(this.Td,"mousedown",this,this.wi),this.Ab&&F(this.Ab,"mousedown",this,this.Kj))}var kg=6,ig=20,ng=null,og=null;function pg(){ng&&(G(ng),ng=null);og&&(G(og),og=null)}f=hg.prototype;f.ag=!1;f.Wa=0;f.af=0;f.ic=0;f.Cd=0;f.A=0;f.ea=0;f.df=!0;
f.jf=function(a,b){this.Xa=E("g",{},null);var c=E("g",{filter:"url(#blocklyEmboss)"},this.Xa);this.Eg=E("path",{},c);this.Td=E("rect",{"class":"blocklyDraggable",x:0,y:0,rx:kg,ry:kg},c);b?(this.Ab=E("g",{"class":x?"blocklyResizeSW":"blocklyResizeSE"},this.Xa),c=2*kg,E("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.Ab),E("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.Ab),E("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.Ab)):this.Ab=
null;this.Xa.appendChild(a);return this.Xa};f.wi=function(a){qg(this);pg();Lb(a)||rg(a)||(sg(tg),this.fh=x?this.ic+a.clientX:this.ic-a.clientX,this.Pi=this.Cd-a.clientY,ng=F(document,"mouseup",this,pg),og=F(document,"mousemove",this,this.xi),ug(),a.stopPropagation())};f.xi=function(a){this.df=!1;this.ic=x?this.fh-a.clientX:this.fh+a.clientX;this.Cd=this.Pi+a.clientY;lg(this);mg(this)};
f.Kj=function(a){qg(this);pg();Lb(a)||(sg(tg),this.Jj=x?this.A+a.clientX:this.A-a.clientX,this.Ij=this.ea-a.clientY,ng=F(document,"mouseup",this,pg),og=F(document,"mousemove",this,this.Lj),ug(),a.stopPropagation())};f.Lj=function(a){this.df=!1;var b=this.Jj,c=this.Ij+a.clientY,b=x?b-a.clientX:b+a.clientX;this.lc(b,c);x&&lg(this)};function qg(a){a.Xa.parentNode.appendChild(a.Xa)}function jg(a,b,c){a.Wa=b;a.af=c;a.ag&&lg(a)}
function lg(a){a.Xa.setAttribute("transform","translate("+(x?a.Wa-a.ic-a.A:a.Wa+a.ic)+", "+(a.Cd+a.af)+")")}f.$b=function(){return{width:this.A,height:this.ea}};
f.lc=function(a,b){var c=2*kg;a=Math.max(a,c+45);b=Math.max(b,c+18);this.A=a;this.ea=b;this.Td.setAttribute("width",a);this.Td.setAttribute("height",b);this.Ab&&(x?this.Ab.setAttribute("transform","translate("+2*kg+", "+(b-c)+") scale(-1 1)"):this.Ab.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.ag){if(this.df){var c=-this.A/4,d=-this.ea-25,e=this.p.wb();x?this.Wa-e.Oa-c-this.A<S?c=this.Wa-e.Oa-this.A-S:this.Wa-e.Oa-c>e.V&&(c=this.Wa-e.Oa-e.V):this.Wa+c<e.Oa?c=e.Oa-this.Wa:
e.Oa+e.V<this.Wa+c+this.A+10+S&&(c=e.Oa+e.V-this.Wa-this.A-S);this.af+d<e.Sb&&(d=this.Qh.getBBox().height);this.ic=c;this.Cd=d}lg(this);mg(this)}vg(this.Xa,"resize")};
function mg(a){var b=[],c=a.A/2,d=a.ea/2,e=-a.ic,g=-a.Cd;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;x&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var l=k+Math.PI/2;l>2*Math.PI&&(l-=2*Math.PI);var m=Math.sin(l),q=Math.cos(l),v=a.$b(),l=(v.width+v.height)/10,l=Math.min(l,v.width,v.height)/2,v=1-8/h,e=c+v*e,g=d+v*g,v=c+l*q,t=d+l*m,c=c-l*q,d=d-l*m,m=k+a.si;m>2*Math.PI&&(m-=2*Math.PI);k=Math.sin(m)*h/4;h=Math.cos(m)*h/4;b.push("M"+v+","+t);b.push("C"+(v+h)+","+(t+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.Eg.setAttribute("d",b.join(" "))}f.Uc=function(a){this.Td.setAttribute("fill",a);this.Eg.setAttribute("fill",a)};f.k=function(){pg();H(this.Xa);this.Qh=this.tb=this.p=this.Xa=null};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function wg(a){this.p=a}f=wg.prototype;f.bd=47;f.Ue=45;f.ad=15;f.fi=35;f.yg=35;f.Pd=25;f.Lc=!1;f.g=null;f.Se=null;f.Mf=0;f.Ob=0;f.xh=0;f.Xh=0;
f.H=function(){this.g=E("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=E("clipPath",{id:"blocklyTrashBodyClipPath"},this.g);E("rect",{width:this.bd,height:this.Ue,y:this.ad},a);E("image",{width:xg,height:yg,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.g).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",zg+Ag);a=E("clipPath",{id:"blocklyTrashLidClipPath"},this.g);E("rect",{width:this.bd,height:this.ad},a);this.Se=E("image",{width:xg,height:yg,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.g);this.Se.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",zg+Ag);this.bf();return this.g};f.I=function(){Bg(this,!1);this.Pb();F(window,"resize",this,this.Pb)};f.k=function(){this.g&&(H(this.g),this.g=null);this.p=this.Se=null;n.clearTimeout(this.Mf)};f.Pb=function(){var a=this.p.wb();a&&(this.xh=x?this.yg:a.V+a.Pa-this.bd-this.yg,this.Xh=a.la+a.Qa-(this.Ue+this.ad)-this.fi,this.g.setAttribute("transform","translate("+this.xh+","+this.Xh+")"))};
f.od=function(){var a=Cg(this.g);return new Ub(a.x-this.Pd,a.y-this.Pd,this.bd+2*this.Pd,this.Ue+this.ad+2*this.Pd)};function Bg(a,b){a.Lc!=b&&(n.clearTimeout(a.Mf),a.Lc=b,a.bf())}f.bf=function(){this.Ob+=this.Lc?.2:-.2;this.Ob=Math.min(Math.max(this.Ob,0),1);var a=45*this.Ob;this.Se.setAttribute("transform","rotate("+(x?-a:a)+", "+(x?4:this.bd-4)+", "+(this.ad-2)+")");this.g.style.opacity=.2+.2*this.Ob;if(0<this.Ob||1>this.Ob)this.Mf=Cf(this.bf,20,this)};f.close=function(){Bg(this,!1)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Dg(a){this.p=a;this.P=null;this.qd=new Eg(a,!0,!0);this.Nd=new Eg(a,!1,!0);this.ed=E("rect",{height:S,width:S,style:"fill: #fff"},null);Fg(this.ed,a.Yc)}Dg.prototype.k=function(){G(this.Ee);this.Ee=null;H(this.ed);this.P=this.p=this.ed=null;this.qd.k();this.qd=null;this.Nd.k();this.Nd=null};
Dg.prototype.resize=function(){var a=this.p.wb();if(a){var b=!1,c=!1;this.P&&this.P.V==a.V&&this.P.la==a.la&&this.P.Qa==a.Qa&&this.P.Pa==a.Pa?(this.P&&this.P.yc==a.yc&&this.P.Oa==a.Oa&&this.P.sb==a.sb||(b=!0),this.P&&this.P.Sa==a.Sa&&this.P.Sb==a.Sb&&this.P.Za==a.Za||(c=!0)):c=b=!0;b&&this.qd.resize(a);c&&this.Nd.resize(a);this.P&&this.P.V==a.V&&this.P.Pa==a.Pa||this.ed.setAttribute("x",this.Nd.Tb);this.P&&this.P.la==a.la&&this.P.Qa==a.Qa||this.ed.setAttribute("y",this.qd.Te);this.P=a}};
Dg.prototype.set=function(a,b){this.qd.set(a);this.Nd.set(b)};function Eg(a,b,c){this.p=a;this.Fe=c||!1;this.va=b;this.jf();b?(this.Ua.setAttribute("height",S),this.ba.setAttribute("height",S-6),this.ba.setAttribute("y",3)):(this.Ua.setAttribute("width",S),this.ba.setAttribute("width",S-6),this.ba.setAttribute("x",3));this.Dh=F(this.Ua,"mousedown",this,this.xj);this.Eh=F(this.ba,"mousedown",this,this.yj)}var Gg,Hg,S=15;aa("document.documentElement.ontouchstart")&&(S=25);f=Eg.prototype;
f.k=function(){this.De();this.Ee&&(G(this.Ee),this.Ee=null);G(this.Dh);this.Dh=null;G(this.Eh);this.Eh=null;H(this.g);this.p=this.ba=this.Ua=this.g=null};
f.resize=function(a){if(!a&&(a=this.p.wb(),!a))return;if(this.va){var b=a.V;this.Fe?b-=S:this.G(b<a.Sa);this.Ea=b/a.yc;if(-Infinity===this.Ea||Infinity===this.Ea||isNaN(this.Ea))this.Ea=0;var c=a.V*this.Ea,d=(a.Oa-a.sb)*this.Ea;this.ba.setAttribute("width",Math.max(0,c));this.Tb=a.Pa;this.Fe&&x&&(this.Tb+=a.Pa+S);this.Te=a.Qa+a.la-S;this.g.setAttribute("transform","translate("+this.Tb+", "+this.Te+")");this.Ua.setAttribute("width",Math.max(0,b));this.ba.setAttribute("x",Ig(this,d))}else{b=a.la;this.Fe?
b-=S:this.G(b<a.Sa);this.Ea=b/a.Sa;if(-Infinity===this.Ea||Infinity===this.Ea||isNaN(this.Ea))this.Ea=0;c=a.la*this.Ea;d=(a.Sb-a.Za)*this.Ea;this.ba.setAttribute("height",Math.max(0,c));this.Tb=a.Pa;x||(this.Tb+=a.V-S);this.Te=a.Qa;this.g.setAttribute("transform","translate("+this.Tb+", "+this.Te+")");this.Ua.setAttribute("height",Math.max(0,b));this.ba.setAttribute("y",Ig(this,d))}Jg(this)};
f.jf=function(){this.g=E("g",{},null);this.Ua=E("rect",{"class":"blocklyScrollbarBackground"},this.g);var a=Math.floor((S-6)/2);this.ba=E("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.g);Fg(this.g,this.p.Yc)};f.u=function(){return"none"!=this.g.getAttribute("display")};f.G=function(a){if(a!=this.u()){if(this.Fe)throw"Unable to toggle visibility of paired scrollbars.";a?this.g.setAttribute("display","block"):(this.p.Oh({x:0,y:0}),this.g.setAttribute("display","none"))}};
f.xj=function(a){this.De();if(!Lb(a)){var b=Kg(a),b=this.va?b.x:b.y,c=Cg(this.ba),c=this.va?c.x:c.y,d=parseFloat(this.ba.getAttribute(this.va?"width":"height")),e=parseFloat(this.ba.getAttribute(this.va?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ba.setAttribute(this.va?"x":"y",Ig(this,e));Jg(this)}a.stopPropagation()};
f.yj=function(a){this.De();Lb(a)||(this.Sj=parseFloat(this.ba.getAttribute(this.va?"x":"y")),this.Uj=this.va?a.clientX:a.clientY,Gg=F(document,"mouseup",this,this.De),Hg=F(document,"mousemove",this,this.Aj));a.stopPropagation()};f.Aj=function(a){this.ba.setAttribute(this.va?"x":"y",Ig(this,this.Sj+((this.va?a.clientX:a.clientY)-this.Uj)));Jg(this)};f.De=function(){Lg();ug(!0);Gg&&(G(Gg),Gg=null);Hg&&(G(Hg),Hg=null)};
function Ig(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.va?"width":"height",d=parseFloat(a.Ua.getAttribute(c)),c=parseFloat(a.ba.getAttribute(c));b=Math.min(b,d-c)}return b}function Jg(a){var b=parseFloat(a.ba.getAttribute(a.va?"x":"y")),c=parseFloat(a.Ua.getAttribute(a.va?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.va?c.x=b:c.y=b;a.p.Oh(c)}f.set=function(a){this.ba.setAttribute(this.va?"x":"y",a*this.Ea);Jg(this)};
function Fg(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

 Visual Blocks Editor

 Copyright 2014 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Mg(a,b){Mg.j.constructor.call(this);this.wb=a;this.Oh=b;var c=[];c[1]=new Ng;c[2]=new Ng;c[3]=new Ng;c[4]=new Ng;this.Bi=c}w(Mg,Ea);f=Mg.prototype;f.t=!0;f.vh=!1;f.rf=!1;f.scrollX=0;f.scrollY=0;f.Na=null;f.tf=null;f.Rb=null;f.H=function(){this.g=E("g",{},null);this.aa=E("g",{},this.g);this.Yc=E("g",{},this.g);this.lb();return this.g};
f.k=function(){this.t=!1;Mg.j.k.call(this);this.g&&(H(this.g),this.g=null);this.Yc=this.aa=null;this.ja&&(this.ja.k(),this.ja=null);this.Na&&(this.Na.k(),this.Na=null)};function Og(){var a=J;if(qa&&!I){a.Na=new wg(a);var b=a.Na.H();a.g.insertBefore(b,a.aa);a.Na.I()}}f.cd=function(a){Mg.j.cd.call(this,a);Pg&&this==J&&-1==Qg.indexOf(a)&&Qg.push(a)};f.Ne=function(a){Mg.j.Ne.call(this,a);Pg&&this==J&&Qg.Lk(a)};f.clear=function(){ug();Mg.j.clear.call(this)};f.je=function(){return this.wb().V};
f.C=function(){for(var a=this.vb(),b=0,c;c=a[b];b++)c.ac().length||c.C()};function Rg(a,b){a.tg=b;a.ug&&(G(a.ug),a.ug=null);b&&(a.ug=F(a.aa,"blocklySelectChange",a,function(){this.tg=!1}))}function Sg(a){var b=J;b.tg&&0!=Mb&&Rg(b,!1);if(b.tg){var c=null;if(a&&(c=Ga(b,a),!c))return;Rg(b,!1);c?c.select():T&&Tg(T);setTimeout(function(){Rg(b,!0)},1)}}f.lb=function(){if(this.t){this.tf&&clearTimeout(this.tf);var a=this.aa;a&&(this.tf=setTimeout(function(){vg(a,"blocklyWorkspaceChange")},0))}};
function Ug(a,b){var c=Kg(b),c=new L(c.x,c.y);if(a.Zg){if(a.Zg.contains(c))return Bg(a.Na,!0),sg(Vg),!0;Bg(a.Na,!1)}if(a.Yg&&a.Yg.contains(c))return sg(Vg),!0;sg(tg);return!1}Mg.prototype.clear=Mg.prototype.clear;/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Wg(a){this.Ba=a}f=Wg.prototype;f.ga=null;f.Ic=0;f.Jc=0;f.zc=function(){this.wa||(this.wa=E("g",{},null),this.Ba.D().appendChild(this.wa),F(this.wa,"mouseup",this,this.kj),this.tc())};f.k=function(){H(this.wa);this.wa=null;this.G(!1);this.Ba=null};f.tc=function(){this.Ba.Mb?Jb(this.wa,"blocklyIconGroup"):Ib(this.wa,"blocklyIconGroup")};f.u=function(){return!!this.ga};f.kj=function(){this.Ba.Mb||this.G(!this.u())};f.sc=function(){if(this.u()){var a=tf(uf(this.Ba.hf));this.ga.Uc(a)}};
function Xg(a){var b=a.Ba.O(),c=Yg(a.wa),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Ic||b!==a.Jc)a.Ic=d,a.Jc=b,a.u()&&jg(a.ga,d,b)};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Zg(a,b){this.h=a;this.m=null;this.type=b;this.N=this.ib=0;this.ob=!1;this.Fb=this.h.o.Bi}f=Zg.prototype;f.k=function(){if(this.m)throw"Disconnect connection before disposing of it.";this.ob&&$g(this.Fb[this.type],this);this.ob=!1;ah==this&&(ah=null);bh==this&&(bh=null)};function ch(a){return 1==a.type||3==a.type}
function fg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.o!==b.h.o)throw"Blocks are on different workspaces.";if(dh[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.m)throw"Source connection already connected (value).";if(b.m){var c=R(b);c.ya(null);if(!c.K)throw"Orphan block does not have an output connection.";for(var d=a.h;d=eh(d,c);)if(R(d))d=R(d);else{fg(d,c.K);c=null;break}c&&setTimeout(function(){fh(c.K,b)},gh)}}else{if(a.m)throw"Source connection already connected (block).";
if(b.m){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=R(b);c.ya(null);if(!c.B)throw"Orphan block does not have a previous connection.";for(d=a.h;d.J;)if(d.J.m)d=Wf(d);else{hh(c.B,d.J)&&(fg(d.J,c.B),c=null);break}c&&setTimeout(function(){fh(c.B,b)},gh)}}var e;ch(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.m=b;b.m=a;e.ya(d);d.t&&ih(d);e.t&&ih(e);d.t&&e.t&&(3==a.type||4==a.type?e.C():d.C())}
function eh(a,b){for(var c=!1,d=0;d<a.S.length;d++){var e=a.S[d].n;if(e&&1==e.type&&hh(b.K,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.m;if(!a)throw"Source connection not connected.";if(a.m!=this)throw"Target connection not connected to source connection.";this.m=a.m=null;var b;ch(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.t&&b.C();a.t&&(ih(a),a.C())};function R(a){return a.m?a.m.h:null}
function fh(a,b){if(0==Mb){var c=jh(a.h);if(!c.Mb){var d=!1;if(!c.zb||I){c=jh(b.h);if(!c.zb||I)return;b=a;d=!0}c.D().parentNode.appendChild(c.D());var e=b.ib+U-a.ib,g=b.N+U-a.N;d&&(g=-g);x&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.ob&&$g(this.Fb[this.type],this);this.ib=a;this.N=b;kh(this.Fb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.ib+a,this.N+b)};
f.rh=function(){var a;1==this.type||2==this.type?(a=x?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=x?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.O();Zg.me=E("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.ib-b.x)+", "+(this.N-b.y)+")"},this.h.D())};
function lh(a){var b=Math.round(a.m.ib-a.ib),c=Math.round(a.m.N-a.N);if(0!=b||0!=c){a=R(a);var d=a.D();if(!d)throw"block is not rendered.";d=Yg(d);a.D().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");mh(a,-b,-c)}}
function nh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.m||1==c.type&&c.m&&(!R(c).zb||I)||!hh(v,c))return!0;c=c.h;do{if(q==c)return!0;c=c.getParent()}while(c);var d=h-g[a].ib,c=k-g[a].N,d=Math.sqrt(d*d+c*c);d<=b&&(m=g[a],b=d);return c<b}if(a.m)return{n:null,Ih:b};var g=a.Fb[dh[a.type]],h=a.ib+c,k=a.N+d;c=0;for(var l=d=g.length-2;c<l;)g[l].N<k?c=l:d=l,l=Math.floor((c+d)/2);d=c=l;var m=null,q=a.h,v=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{n:m,Ih:b}}
function hh(a,b){if(!a.wc||!b.wc)return!0;for(var c=0;c<a.wc.length;c++)if(-1!=b.wc.indexOf(a.wc[c]))return!0;return!1}f.Tc=function(a){a?(ea(a)||(a=[a]),this.wc=a,this.m&&!hh(this,this.m)&&(ch(this)?R(this).ya(null):this.h.ya(null),this.h.Ca())):this.wc=null;return this};
function oh(a){var b=U;function c(a){var c=e-d[a].ib,h=g-d[a].N;Math.sqrt(c*c+h*h)<=b&&l.push(d[a]);return h<b}var d=a.Fb[dh[a.type]],e=a.ib,g=a.N;a=0;for(var h=d.length-2,k=h;a<k;)d[k].N<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,l=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return l}
function ph(a){a.ob||kh(a.Fb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=R(a)){var c;a.isCollapsed()?(c=[],a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B)):c=qh(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,ph(c[d]));0==b.length&&(b[0]=a)}return b}function Ng(){}Ng.prototype=[];function kh(a,b){if(b.ob)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].N<b.N)c=e+1;else if(a[e].N>b.N)d=e;else{c=e;break}}a.splice(c,0,b);b.ob=!0}
function $g(a,b){if(!b.ob)throw"Connection not in database.";b.ob=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].N<b.N?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].N==b.N;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].N==b.N);throw"Unable to find connection in connectionDB.";};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var K={$j:0,Ti:function(){var a=(++K.$j).toString();return Pg?rh(a):a},ik:function(a){var b={I:function(){var b=this;this.Uc(a.qk);this.Kb=a.Kb;"string"==typeof a.Aa?this.Wc(a.Aa):"function"==typeof a.Aa&&this.Wc(function(){return a.Aa(b)});"undefined"!=a.Dj?sh(this,a.Dj):(th(this,"undefined"==typeof a.Fj?!0:a.Fj),uh(this,"undefined"==typeof a.wj?!0:a.wj));var d=[];d.push(a.text);a.ri&&a.ri.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
jb("addTemplate() can only handle value inputs.")});d.push(1);a.nj&&this.Rk(a.nj);vh.prototype.xd.apply(this,d)}};b.Pc=a.Uk?function(){var b=a.tj?a.Ik():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.tj;K[a.mk]=b}};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function wh(a){wh.j.constructor.call(this,a);this.zc()}w(wh,Wg);f=wh.prototype;f.za="";f.A=160;f.ea=80;f.zc=function(){Wg.prototype.zc.call(this);E("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.wa);this.Gf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.wa);this.Gf.appendChild(document.createTextNode("?"))};f.tc=function(){this.u()&&(this.G(!1),this.G(!0));Wg.prototype.tc.call(this)};
f.Hj=function(){var a=this.ga.$b(),b=2*kg;this.ld.setAttribute("width",a.width-b);this.ld.setAttribute("height",a.height-b);this.Fa.style.width=a.width-b-4+"px";this.Fa.style.height=a.height-b-4+"px"};
f.G=function(a){if(a!=this.u())if((!this.Ba.Bc||I)&&!this.Fa||B)xh.prototype.G.call(this,a);else{var b=this.nb(),c=this.$b();if(a){a=this.Ba.o;this.ld=E("foreignObject",{x:kg,y:kg},null);var d=document.createElementNS("http://www.w3.org/1999/xhtml","body");d.setAttribute("xmlns","http://www.w3.org/1999/xhtml");d.className="blocklyMinimalBody";this.Fa=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Fa.className="blocklyCommentTextarea";this.Fa.setAttribute("dir",x?"RTL":"LTR");
d.appendChild(this.Fa);this.ld.appendChild(d);F(this.Fa,"mouseup",this,this.Yj);this.ga=new hg(a,this.ld,this.Ba.Cb,this.Ic,this.Jc,this.A,this.ea);F(this.ga.Xa,"resize",this,this.Hj);this.sc();this.za=null}else this.ga.k(),this.ld=this.Fa=this.ga=null;this.La(b);this.lc(c.width,c.height)}};f.Yj=function(){qg(this.ga);this.Fa.focus()};f.$b=function(){return this.u()?this.ga.$b():{width:this.A,height:this.ea}};f.lc=function(a,b){this.Fa?this.ga.lc(a,b):(this.A=a,this.ea=b)};
f.nb=function(){return this.Fa?this.Fa.value:this.za};f.La=function(a){this.Fa?this.Fa.value=a:this.za=a};f.k=function(){this.Ba.L=null;Wg.prototype.k.call(this)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var yh=!1,zh=0,Ah=0,Bh={x:0,y:0},Ch=null,Dh=null,Eh=null,Fh=null,Gh=null,Hh=null;function Ih(){var a=E("g",{"class":"blocklyHidden"},null);Eh=a;Hh=E("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Gh=E("rect",{"class":"blocklyTooltipBackground"},a);Fh=E("text",{"class":"blocklyTooltipText"},a);return a}function Jh(a){F(a,"mouseover",null,Kh);F(a,"mouseout",null,Lh);F(a,"mousemove",null,Mh)}function Kh(a){for(a=a.target;!p(a.Aa)&&!u(a.Aa);)a=a.Aa;Ch!=a&&(Nh(),Dh=null,Ch=a);clearTimeout(zh)}
function Lh(){zh=setTimeout(function(){Dh=Ch=null;Nh()},1);clearTimeout(Ah)}function Mh(a){Ch&&Ch.Aa&&0==Mb&&!lf&&(yh?(a=Kg(a),10<Math.sqrt(Math.pow(Bh.x-a.x,2)+Math.pow(Bh.y-a.y,2))&&Nh()):Dh!=Ch&&(clearTimeout(Ah),Bh=Kg(a),Ah=setTimeout(Oh,1E3)))}function Nh(){yh&&(yh=!1,Eh&&(Eh.style.display="none"));clearTimeout(Ah)}
function Oh(){Dh=Ch;if(Eh){Kb(Fh);var a=Ch.Aa;u(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,l=1,d=0;d<c.length-1;d++)l<(d+1.5)/k?(l++,b[d]=!0):b[d]=!1;for(var b=Ph(c,b,a),d=Qh(c,b,a),k=c,l=[],m=0;m<k.length;m++)l.push(k[m]),void 0!==b[m]&&l.push(b[m]?"\n":" ");b=l.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)E("tspan",{dy:"1em",x:5},
Fh).appendChild(document.createTextNode(a[c]));yh=!0;Eh.style.display="block";a=Fh.getBBox();c=10+a.width;e=a.height;Gh.setAttribute("width",c);Gh.setAttribute("height",e);Hh.setAttribute("width",c);Hh.setAttribute("height",e);if(x)for(e=a.width,g=0;h=Fh.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=Bh.x;e=x?e-(0+c):e+0;c=Bh.y+10;g=Rh();c+a.height>g.height&&(c-=a.height+20);x?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);Eh.setAttribute("transform",
"translate("+e+","+c+")")}}function Qh(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Ph(a,b,c){for(var d=Qh(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=Qh(a,h,c);k>d&&(d=k,e=h)}return e?Ph(a,e,c):b};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Sh(a){this.h=null;this.Xc=new Fb(0,25);this.La(a)}w(Sh,Gb);f=Sh.prototype;f.clone=function(){return new Sh(this.nb())};f.uc=!1;f.I=function(a){this.h||(this.h=a,this.fa=E("text",{"class":"blocklyText"},null),a.D().appendChild(this.fa),this.fa.Aa=this.h,Jh(this.fa),Hb(this))};f.k=function(){H(this.fa);this.fa=null};f.D=function(){return this.fa};f.Wc=function(a){this.fa.Aa=a};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Th(a,b,c,d){this.type=a;this.name=b;this.h=c;this.n=d;this.oa=[];this.align=-1;this.Q=!0}function Uh(a,b,c){if(!b&&!c)return a;p(b)&&(b=new Sh(b));a.h.t&&b.I(a.h);b.name=c;b.Wf&&Uh(a,b.Wf);a.oa.push(b);b.qg&&Uh(a,b.qg);a.h.t&&(a.h.C(),a.h.Ca());return a}f=Th.prototype;f.u=function(){return this.Q};
f.G=function(a){var b=[];if(this.Q==a)return b;for(var c=(this.Q=a)?"block":"none",d=0,e;e=this.oa[d];d++)e.G(a);if(this.n){if(a)b=ph(this.n);else if(d=this.n,d.ob&&$g(d.Fb[d.type],d),d.m){e=R(d).mb();for(var g=0;g<e.length;g++){for(var h=e[g],k=qh(h,!0),l=0;l<k.length;l++){var m=k[l];m.ob&&$g(d.Fb[m.type],m)}h=Vh(h);for(k=0;k<h.length;k++)h[k].G(!1)}}if(d=R(this.n))d.D().style.display=c,a||(d.t=!1)}return b};f.Tc=function(a){if(!this.n)throw"This input does not have a connection.";this.n.Tc(a);return this};
function Wh(a,b){a.align=b;a.h.t&&a.h.C();return a}f.I=function(){for(var a=0;a<this.oa.length;a++)this.oa[a].I(this.h)};f.k=function(){for(var a=0,b;b=this.oa[a];a++)b.k();this.n&&this.n.k();this.h=null};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function xh(a){xh.j.constructor.call(this,a);this.zc()}w(xh,Wg);f=xh.prototype;f.za="";f.zc=function(){Wg.prototype.zc.call(this);E("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.wa);this.Gf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.wa);this.Gf.appendChild(document.createTextNode("!"))};
f.G=function(a){if(a!=this.u())if(a){var b=this.za;a=E("text",{"class":"blocklyText blocklyBubbleText",y:kg},null);for(var b=b.split("\n"),c=0;c<b.length;c++)E("tspan",{dy:"1em",x:kg},a).appendChild(document.createTextNode(b[c]));this.ga=new hg(this.Ba.o,a,this.Ba.Cb,this.Ic,this.Jc,null,null);if(x)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+kg);this.sc();a=this.ga.$b();this.ga.lc(a.width,a.height)}else this.ga.k(),this.ga=null};
f.La=function(a){this.za!=a&&(this.za=a,this.u()&&(this.G(!1),this.G(!0)))};f.k=function(){this.Ba.Od=null;Wg.prototype.k.call(this)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function vh(){}function Rb(a,b){if(Pg)return Xh.create(vh,a,b);var c=a.t?new Yh:new vh;c.initialize(a,b);return c}f=vh.prototype;f.initialize=function(a,b){this.id=K.Ti();a.cd(this);this.fill(a,b)};f.fill=function(a,b){this.B=this.J=this.K=null;this.S=[];this.disabled=this.t=this.wd=!1;this.Aa="";this.contextMenu=!0;this.ec=null;this.jb=[];this.Bc=this.zb=this.Ac=!0;this.Wb=!1;this.L=null;this.ci=new L(0,0);this.o=a;this.Mb=a.vh;if(b){this.type=b;var c=K[b],d;for(d in c)this[d]=c[d]}u(this.I)&&this.I()};
function ag(a,b){return Pg?Zh.get(a):Ga(b,a)}f.k=function(a,b,c){$h(this,a);this.o&&!c&&(this.o.Ne(this),this.o=null);T==this&&(T=null);for(a=this.jb.length-1;0<=a;a--)this.jb[a].k(!1);for(a=0;b=this.S[a];a++)b.k();this.S.length=0;b=qh(this,!0);for(a=0;a<b.length;a++)c=b[a],c.m&&c.disconnect(),b[a].k();if(Pg&&!ai)Zh["delete"](this.id.toString())};
function $h(a,b){var c;c=!1;if(a.K)a.K.m&&a.ya(null);else{var d=null;a.B&&a.B.m&&(d=a.B.m,a.ya(null));var e=Wf(a);if(b&&e){var g=a.J.m;e.ya(null);d&&hh(d,g)&&fg(d,g)}}c&&a.moveBy(U*(x?-1:1),2*U)}function qh(a,b){var c=[];if(b||a.t)if(a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B),b||!a.Wb)for(var d=0,e;e=a.S[d];d++)e.n&&c.push(e.n);return c}
f.Ca=function(){if(0==Mb){var a=jh(this);if(!a.Mb)for(var b=qh(this,!1),c=0;c<b.length;c++){var d=b[c];d.m&&ch(d)&&R(d).Ca();for(var e=oh(d),g=0;g<e.length;g++){var h=e[g];d.m&&h.m||jh(h.h)!=a&&(ch(d)?fh(h,d):fh(d,h))}}}};f.getParent=function(){return this.ec};function bi(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Wf(a)==b);return a}}function Wf(a){return a.J&&R(a.J)}function jh(a){var b=a;do a=b,b=a.ec;while(b);return a}f.ac=function(){return this.jb};
f.ya=function(a){if(this.ec){for(var b=this.ec.jb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.ec=null;this.B&&this.B.m&&this.B.disconnect();this.K&&this.K.m&&this.K.disconnect()}else pb(Fa(this.o,!1),this)&&this.o.Ne(this);(this.ec=a)?a.jb.push(this):this.o.cd(this)};f.mb=function(){for(var a=[this],b,c=0;b=this.jb[c];c++)a.push.apply(a,b.mb());return a};function cg(a,b){a.Ac=b;a.Vh&&ci(a.Vh)}
function dg(a,b){a.Bc=b;for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.oa[e];e++)g.tc();d=Vh(a);for(c=0;c<d.length;c++)d[c].tc()}f.Wc=function(a){this.Aa=a};f.Uc=function(a){this.hf=a;this.t&&this.sc()};function Sb(a,b){for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.oa[e];e++)if(g.name===b)return g;return null}function th(a,b){var c;a.B&&(a.B.k(),a.B=null);b&&(void 0===c&&(c=null),a.B=new Zg(a,4),a.B.Tc(c));a.t&&(a.C(),a.Ca())}
function uh(a,b){var c;a.J&&(a.J.k(),a.J=null);b&&(void 0===c&&(c=null),a.J=new Zg(a,3),a.J.Tc(c));a.t&&(a.C(),a.Ca())}function sh(a,b){a.K&&(a.K.k(),a.K=null);void 0===b&&(b=null);a.K=new Zg(a,2);a.K.Tc(b);a.t&&(a.C(),a.Ca())}function bg(a,b){a.wd=b;a.t&&(a.C(),a.Ca(),a.o.lb())}f.Ed=function(a){this.disabled=a};function di(a){for(;;){a=bi(a);if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.Wb};f.mc=function(a){this.Wb=a};
f.toString=function(a){for(var b=[],c=0,d;d=this.S[c];c++){for(var e=0,g;g=d.oa[e];e++)b.push(g.nb());d.n&&((d=R(d.n))?b.push(d.toString()):b.push("?"))}b=Ka(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};
f.xd=function(a,b){function c(a){a instanceof Gb?Uh(this,a):Uh(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.xd.ji),g=[],h=0;h<e.length;h+=2){var k=Ka(e[h]),l=void 0;k&&g.push(new Sh(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),m=arguments[k];m[1]instanceof Gb?g.push([m[0],m[1]]):l=Wh(ei(this,1,m[0]).Tc(m[1]),m[2]);arguments[k]=null}else"\n"==k&&g.length&&(l=ei(this,5,""));l&&g.length&&(g.forEach(c,l),g=[])}g.length&&(l=Wh(ei(this,
5,""),d),g.forEach(c,l));for(h=1;h<arguments.length-1;h++);bg(this,!a.match(this.xd.ei))};f.xd.ji=/(%\d+|\n)/;f.xd.ei=/%1\s*$/;function ei(a,b,c){var d=null;if(1==b||3==b)d=new Zg(a,b);b=new Th(b,c,a,d);a.S.push(b);a.t&&(a.C(),a.Ca());return b}function eg(a,b){for(var c=0,d;d=a.S[c];c++)if(d.name==b)return d;return null}f.jh=function(){return this.L||""};f.Dd=function(a){this.L=a};f.O=function(){return this.ci};f.moveBy=function(a,b){this.ci.translate(a,b)};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function gi(){var a=this;this.p=new Mg(function(){return hi(a)},function(b){var c=hi(a);c&&(r(b.y)&&(a.p.scrollY=-c.Sa*b.y-c.Za),a.p.aa.setAttribute("transform","translate(0,"+(a.p.scrollY+c.Qa)+")"))});this.p.vh=!0;this.gh=[];this.ea=this.A=0;this.ef=[];this.pb=[]}var ii,ji,ki,li,mi,ni;f=gi.prototype;f.Sd=!0;f.ma=8;f.H=function(){this.g=E("g",{},null);this.Ua=E("path",{"class":"blocklyFlyoutBackground"},this.g);this.g.appendChild(this.p.H());return this.g};
f.k=function(){this.xb();G(this.gh);this.gh.length=0;this.kc&&(this.kc.k(),this.kc=null);this.p=null;this.g&&(H(this.g),this.g=null);this.Jd=this.Ua=null};function hi(a){if(!a.u())return null;var b=a.ea-2*a.ma,c=a.A;try{var d=a.p.aa.getBBox()}catch(e){d={height:0,y:0}}return{la:b,V:c,Sa:d.height+d.y,Sb:-a.p.scrollY,Za:0,Qa:a.ma,Pa:0}}
f.I=function(a){this.Jd=a;this.kc=new Eg(this.p,!1,!1);this.xb();F(window,"resize",this,this.Pb);this.Pb();F(this.g,"wheel",this,this.bi);F(this.g,"mousewheel",this,this.bi);F(this.Jd.aa,"blocklyWorkspaceChange",this,this.sf);F(this.g,"mousedown",this,this.Ce)};
f.Pb=function(){if(this.u()){var a=this.Jd.wb();if(a){var b=this.A-this.ma;x&&(b*=-1);var c=["M "+(x?this.A:0)+",0"];c.push("h",b);c.push("a",this.ma,this.ma,0,0,x?0:1,x?-this.ma:this.ma,this.ma);c.push("v",Math.max(0,a.la-2*this.ma));c.push("a",this.ma,this.ma,0,0,x?0:1,x?this.ma:-this.ma,this.ma);c.push("h",-b);c.push("z");this.Ua.setAttribute("d",c.join(" "));b=a.Pa;x&&(b+=a.V,b-=this.A);this.g.setAttribute("transform","translate("+b+","+a.Qa+")");this.ea=a.la;this.kc&&this.kc.resize()}}};
f.bi=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){vb&&(b*=10);var c=hi(this),b=c.Sb+b,b=Math.min(b,c.Sa-c.la),b=Math.max(b,0);this.kc.set(b);a.preventDefault()}};f.u=function(){return this.g&&"block"==this.g.style.display};f.xb=function(){if(this.u()){this.g.style.display="none";for(var a=0,b;b=this.pb[a];a++)G(b);this.pb.length=0;this.$f&&(G(this.$f),this.$f=null)}};
f.show=function(a){this.xb();for(var b=Fa(this.p,!1),c=0,d;d=b[c];c++)d.o==this.p&&d.k(!1,!1);for(var c=0,e;e=this.ef[c];c++)H(e);this.ef.length=0;var g=this.ma;this.g.style.display="block";var b=[],h=[];if("VARIABLE"==a)vf(b,h,g,this.p);else if("PROCEDURE"==a)Qb(b,h,g,this.p);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=$f(this.p,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.mb();e=0;for(var l;l=c[e];e++)l.Mb=!0,l.Dd(null);d.C();l=d.D();e=oi(d);c=x?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=E("rect",{"fill-opacity":0},null);this.p.aa.insertBefore(e,d.D());d.kd=e;this.ef[k]=e;this.Sd?this.pb.push(F(l,"mousedown",null,pi(this,d))):this.pb.push(F(l,"mousedown",null,qi(this,d)));this.pb.push(F(l,"mouseover",d,d.Xe));this.pb.push(F(l,"mouseout",d,d.Me));this.pb.push(F(e,"mousedown",null,pi(this,d)));this.pb.push(F(e,"mouseover",d,d.Xe));this.pb.push(F(e,"mouseout",d,d.Me))}this.pb.push(F(this.Ua,"mouseover",this,function(){for(var a=Fa(this.p,!1),b=0,c;c=a[b];b++)c.Me()}));
this.A=0;this.Jh();this.sf();ri(window,"resize");this.$f=F(this.p.aa,"blocklyWorkspaceChange",this,this.Jh);this.p.lb()};
f.Jh=function(){for(var a=0,b=this.ma,c=Fa(this.p,!1),d=0,e;e=c[d];d++)var g=oi(e),a=Math.max(a,g.width);a+=b+8+b/2+S;if(this.A!=a){for(d=0;e=c[d];d++){var g=oi(e),h=e.O();if(x){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.kd&&(e.kd.setAttribute("width",g.width),e.kd.setAttribute("height",g.height),e.kd.setAttribute("x",x?h.x-g.width:h.x),e.kd.setAttribute("y",h.y))}this.A=a;vg(window,"resize")}};
function qi(a,b){return function(c){si();ug();Lb(c)?ti(b,c):(Lg(),sg(tg),ii=c,ji=b,ki=a,li=F(document,"mouseup",this,si),mi=F(document,"mousemove",this,a.zj));c.stopPropagation()}}f.Ce=function(a){Lb(a)||(ug(!0),ui(),this.Rh=a.clientY,ni=F(document,"mousemove",this,this.Sf),li=F(document,"mouseup",this,ui),a.preventDefault(),a.stopPropagation())};f.Sf=function(a){var b=a.clientY-this.Rh;this.Rh=a.clientY;a=hi(this);b=a.Sb-b;b=Math.min(b,a.Sa-a.la);b=Math.max(b,0);this.kc.set(b)};
f.zj=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Lg(),Math.sqrt(Math.pow(a.clientX-ii.clientX,2)+Math.pow(a.clientY-ii.clientY,2))>vi&&pi(ki,ji)(ii))};function pi(a,b){return function(c){if(!Lb(c)&&!b.disabled){var d=Vf(b),d=$f(a.Jd,d),e=b.D();if(!e)throw"originBlock is not rendered.";var e=Cg(e),g=d.D();if(!g)throw"block is not rendered.";g=Cg(g);d.moveBy(e.x-g.x,e.y-g.y);a.Sd?a.xb():a.sf();d.Ce(c)}}}
f.sf=function(){for(var a=Ha(this.Jd),b=Fa(this.p,!1),c=0,d;d=b[c];c++){var e=d.mb().length>a;d.Ed(e)}};function ui(){li&&(G(li),li=null);mi&&(G(mi),mi=null);ni&&(G(ni),ni=null);li&&(G(li),li=null);ki=ji=ii=null}f.od=function(){var a=Cg(this.g).x;x||(a-=1E7);return new Ub(a,-1E7,1E7+this.A,this.ea+2E7)};function wi(a){if("function"==typeof a.Af)return a.Af();if(p(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function xi(a){this.Ga=void 0;this.na={};if(a){var b;if("function"==typeof a.zf)b=a.zf();else if("function"!=typeof a.Af)if(fa(a)||p(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=wi(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=xi.prototype;f.set=function(a,b){yi(this,a,b,!1)};f.add=function(a,b){yi(this,a,b,!0)};
function yi(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.na[g]||(a.na[g]=new xi);a=a.na[g]}if(d&&void 0!==a.Ga)throw Error('The collection already contains the key "'+b+'"');a.Ga=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.na[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Ga:void 0};f.Af=function(){var a=[];zi(this,a);return a};function zi(a,b){void 0!==a.Ga&&b.push(a.Ga);for(var c in a.na)zi(a.na[c],b)}
f.zf=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.na[e])return[];c=c.na[e]}Ai(c,a,b)}else Ai(this,"",b);return b};function Ai(a,b,c){void 0!==a.Ga&&c.push(b);for(var d in a.na)Ai(a.na[d],b+d,c)}f.clear=function(){this.na={};this.Ga=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.na[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.na[e]}a=b.Ga;for(delete b.Ga;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.na[e].uh())delete b.na[e];else break;return a};f.clone=function(){return new xi(this)};f.uh=function(){var a;if(a=void 0===this.Ga)a:{a=this.na;for(var b in a){a=!1;break a}a=!0}return a};function Bi(){this.dc=new xi}f=Bi.prototype;f.W="";f.Nf=null;f.ye=null;f.Ad=0;f.Mc=0;function Ci(a,b){var c=!1,d=a.dc.zf(b);d&&d.length&&(a.Mc=0,a.Ad=0,c=a.dc.get(d[0]),c=Di(a,c))&&(a.Nf=d);return c}function Di(a,b){var c;b&&(a.Mc<b.length&&(c=b[a.Mc],a.ye=b),c&&(c.bg(),c.select()));return!!c}f.clear=function(){this.W=""};function Ei(a,b,c,d,e){this.reset(a,b,c,d,e)}Ei.prototype.hh=null;var Fi=0;Ei.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Fi++;d||oa();this.zd=a;this.sj=b;delete this.hh};Ei.prototype.Nh=function(a){this.zd=a};function Gi(a){this.Ah=a;this.qh=this.R=this.zd=this.ra=null}function Hi(a,b){this.name=a;this.value=b}Hi.prototype.toString=function(){return this.name};var Ii=new Hi("WARNING",900),Ji=new Hi("INFO",800),Ki=new Hi("CONFIG",700),Li=new Hi("FINE",500);f=Gi.prototype;f.getName=function(){return this.Ah};f.getParent=function(){return this.ra};f.ac=function(){this.R||(this.R={});return this.R};f.Nh=function(a){this.zd=a};
function Mi(a){if(a.zd)return a.zd;if(a.ra)return Mi(a.ra);jb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Mi(this).value)for(u(b)&&(b=b()),a=new Ei(a,String(b),this.Ah),c&&(a.hh=c),c="log:"+a.sj,n.console&&(n.console.timeStamp?n.console.timeStamp(c):n.console.markTimeline&&n.console.markTimeline(c)),n.msWriteProfilerMark&&n.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.qh)for(var e=0,g=void 0;g=b.qh[e];e++)g(d);c=c.getParent()}};
f.Od=function(a,b){this.log(Ii,a,b)};f.info=function(a,b){this.log(Ji,a,b)};var Ni={},Oi=null;function Pi(a){Oi||(Oi=new Gi(""),Ni[""]=Oi,Oi.Nh(Ki));var b;if(!(b=Ni[a])){b=new Gi(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Pi(a.substr(0,c));c.ac()[d]=b;b.ra=c;Ni[a]=b}return b};function Qi(a){Md.call(this);this.s=a;a=B?"focusout":"blur";this.qj=yd(this.s,B?"focusin":"focus",this,!B);this.rj=yd(this.s,a,this,!B)}w(Qi,Md);Qi.prototype.handleEvent=function(a){var b=new sd(a.ta);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Qi.prototype.X=function(){Qi.j.X.call(this);Fd(this.qj);Fd(this.rj);delete this.s};function Ri(a,b,c){Q.call(this,a,b,c);this.jd=!0;Lf(this,!0);this.Ja=this;this.Ld=new Bi;if(B)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.yh)&&a.Od("Failed to enable background image cache",void 0)}}w(Ri,Q);Ri.prototype.qa=null;Ri.prototype.uf=null;var Si=Ri.prototype,Ti=Pi("goog.ui.tree.TreeControl");Si.yh=Ti;f=Ri.prototype;f.wf=!1;f.Si=null;f.Hd=!0;f.hg=!0;f.qc=!0;f.ig=!0;f.ua=function(){return this};f.Dc=function(){return 0};f.bg=function(){};
f.bj=function(){this.wf=!0;ae(this.i(),"focused");this.Ja&&this.Ja.select()};f.Yi=function(){this.wf=!1;ce(this.i(),"focused")};f.hasFocus=function(){return this.wf};f.Da=function(){return!this.qc||Ri.j.Da.call(this)};f.Bb=function(a){this.qc?Ri.j.Bb.call(this,a):this.jd=a};f.yf=function(){return sc};f.fe=function(){var a=Jf(this);return a?a.firstChild:null};f.ee=function(){return null};f.$c=function(){};f.pd=function(){return Ri.j.pd.call(this)+(this.qc?"":" "+this.ha.Tg)};
f.be=function(){var a=this.Da(),b=this.Ri;if(a&&b)return b;b=this.jj;if(!a&&b)return b;b=this.ha;return a&&b.Sg?b.Xb+" "+b.Sg:!a&&b.Og?b.Xb+" "+b.Og:""};f.oc=function(a){if(this.Ja!=a){var b=!1;this.Ja&&(b=this.Ja==this.Si,Lf(this.Ja,!1));if(this.Ja=a)Lf(a,!0),b&&a.select();this.dispatchEvent("change")}};function Ui(a){0!=a.Hd&&(a.Hd=!1,a.v&&Vi(a))}
function Vi(a){function b(a){var h=Gf(a);if(h){var k=!d||c==a.getParent()&&!e?a.ha.Mg:a.ha.Lg;h.className=k;if(h=a.ee())h.className=Pf(a)}Ud(a,b)}var c=a,d=c.Hd,e=c.ig;b(a)}function Wi(a){0!=a.hg&&(a.hg=!1,a.v&&Vi(a))}function Xi(a){if(0!=a.qc){a.qc=!1;if(a.v){var b=Jf(a);b&&(b.className=a.pd())}a.Ja==a&&N(a,0)&&a.oc(N(a,0))}}f.qe=function(){Ri.j.qe.call(this);var a=this.i();he(a,"tree");O(a,"labelledby",Ff(this).id)};
f.ia=function(){Ri.j.ia.call(this);var a=this.i();a.className=this.ha.Wg;a.setAttribute("hideFocus","true");a=this.i();a.tabIndex=0;var b=this.qa=new te(a),c=this.uf=new Qi(a);Sd(this).w(c,"focusout",this.Yi).w(c,"focusin",this.bj).w(b,"key",this.cb).w(a,"mousedown",this.Cf).w(a,"click",this.Cf).w(a,"dblclick",this.Cf);this.qe()};f.Ta=function(){Ri.j.Ta.call(this);this.qa.k();this.qa=null;this.uf.k();this.uf=null};
f.Cf=function(a){var b=this.yh;b&&b.log(Li,"Received event "+a.type,void 0);if(b=Yi(this,a))switch(a.type){case "mousedown":b.Rf(a);break;case "click":a.preventDefault();break;case "dblclick":b.Bh(a)}};
f.cb=function(a){var b=!1,b=this.Ld,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Nf;if(d){var e=null,g=!1;if(b.ye){var h=b.Mc+c;0<=h&&h<b.ye.length?(b.Mc=h,e=b.ye):g=!0}e||(h=b.Ad+c,0<=h&&h<d.length&&(b.Ad=h),d.length>b.Ad&&(e=b.dc.get(d[b.Ad])),e&&e.length&&g&&(b.Mc=-1==c?e.length-1:0));Di(b,e)&&(b.Nf=d)}c=!0}break;case 8:d=b.W.length-1;c=!0;0<d?(b.W=b.W.substring(0,d),Ci(b,b.W)):0==d?b.W="":c=!1;break;case 27:b.W="",c=!0}if(!(b=c)&&(b=this.Ja)){b=this.Ja;c=!0;
switch(a.keyCode){case 39:if(a.altKey)break;Xd(b)&&(b.Da()?N(b,0).select():b.Bb(!0));break;case 37:if(a.altKey)break;Xd(b)&&b.Da()&&b.yd?b.Bb(!1):(d=b.getParent(),e=b.ua(),d&&(e.qc||d!=e)&&d.select());break;case 40:a:if(Xd(b)&&b.Da())d=N(b,0);else{for(d=b;d!=b.ua();){e=d.fb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.gc;null!=d?d=Sf(d):(d=b.getParent(),e=b.ua(),d=!e.qc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.ua())&&e.Ld.clear());
b=c}b||(b=this.Ld,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.W)&&(b.W+=d,c=Ci(b,b.W))),b=c);b&&a.preventDefault();return b};function Yi(a,b){for(var c=null,d=b.target;null!=d;){if(c=Ef[d.id])return c;if(d==a.i())break;d=d.parentNode}return null}f.createNode=function(a){return new Tf(a||sc,this.ha,this.bb())};
function Rf(a,b){var c=a.Ld,d=b.nb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.dc.get(d);e?e.push(b):c.dc.set(d,[b])}}f.removeNode=function(a){var b=this.Ld,c=a.nb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.dc.get(c);d&&(qb(d,a),d.length&&b.dc.remove(c))}};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Zi(a,b){this.Ub=M("div","blocklyToolboxDiv");this.Ub.setAttribute("dir",x?"RTL":"LTR");b.appendChild(this.Ub);this.ja=new gi;a.appendChild(this.ja.H());F(this.Ub,"mousedown",this,function(a){Lb(a)||a.target==this.Ub?ug(!1):ug(!0)})}f=Zi.prototype;f.width=0;f.Ve={If:19,Wg:"blocklyTreeRoot",Tg:"blocklyHidden",Ug:"",mf:"blocklyTreeRow",Vg:"blocklyTreeLabel",Xb:"blocklyTreeIcon",kf:"blocklyTreeIconOpen",lf:"blocklyTreeIconNone",Xg:"blocklyTreeSelected"};
f.I=function(){this.Ve.cleardotPath=zg+"1x1.gif";this.Ve.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(x?"Rtl":"Ltr");var a=new $i(this,this.Ve);this.Kd=a;Xi(a);Ui(a);Wi(a);a.oc(null);this.Ub.style.display="block";this.ja.I(J);aj(this);a.C(this.Ub);var b=this;yd(window,"resize",function(){b.Pb()});this.Pb()};
f.Pb=function(){var a=this.Ub,b=bd(z),c=Rh();x?(b=bj(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;x||--this.width};
function aj(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.Vb=[];e.add(k);var l=h.getAttribute("custom");l?k.Vb=l:b(h,k)}else"HR"==k?e.add(new cj):"BLOCK"==k&&e.Vb.push(h)}}var c=a.Kd;c.Lh();c.Vb=[];b(ra,a.Kd);if(c.Vb.length)throw"Toolbox cannot have both blocks and categories in the root level.";vg(window,"resize")}
f.od=function(){return new Ub(x?Rh().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function $i(a,b){this.sa=a;Ri.call(this,sc,b)}w($i,Ri);$i.prototype.ia=function(){$i.j.ia.call(this);if(md){var a=this.i();F(a,"touchstart",this,this.gj)}};$i.prototype.gj=function(a){a.preventDefault();var b=Yi(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Rf(a)},1)};$i.prototype.createNode=function(a){return new dj(this.sa,a?lc(a):sc,this.ha,this.bb())};
$i.prototype.oc=function(a){this.Ja!=a&&(Ri.prototype.oc.call(this,a),a&&a.Vb&&a.Vb.length?this.sa.ja.show(a.Vb):this.sa.ja.xb())};function dj(a,b,c,d){Q.call(this,b,c,d);a&&(b=function(){vg(window,"resize")},yd(a.Kd,"expand",b),yd(a.Kd,"collapse",b))}w(dj,Tf);Q.prototype.yf=function(){return qc("span")};dj.prototype.Rf=function(){Xd(this)&&this.yd?(this.toggle(),this.select()):this.se()?this.ua().oc(null):this.select();Mf(this)};dj.prototype.Bh=function(){};
function cj(){dj.call(this,null,"",ej)}w(cj,dj);var ej={mf:"blocklyTreeSeparator"};/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var fj={Wd:null,show:function(a,b){kf(fj);if(b.length){for(var c=new df,d=0,e;e=b[d];d++){var g=new Le(e.text);c.Qd(g,!0);g.Fd(e.enabled);e.enabled&&yd(g,"action",function(a){return function(){a()}}(e.Ya))}yd(c,"action",fj.xb);e=Cc();g=Qc();c.C(of);var h=c.i();Ib(h,"blocklyContextMenu");var k=Uc(h),d=a.clientX+g.x,l=a.clientY+g.y;a.clientY+k.height>=e.height&&(l-=k.height);x?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);pf(d,l,e,g);ef(c);setTimeout(function(){h.focus()},
1);fj.Wd=null}else fj.xb()},xb:function(){lf==fj&&mf();fj.Wd=null},pk:function(a,b){return function(){var c=$f(a.o,b),d=a.O();d.x=x?d.x-U:d.x+U;d.y+=2*U;c.moveBy(d.x,d.y);c.select()}}};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Yh(){this.g=E("g",{},null);this.Uh=E("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.g);this.Cb=E("path",{"class":"blocklyPath"},this.g);this.rg=E("path",{"class":"blocklyPathLight"},this.g);this.Cb.Aa=this;Jh(this.Cb);ci(this)}w(Yh,vh);f=Yh.prototype;f.height=0;f.width=0;
f.eb=function(){for(var a=0,b;b=this.S[a];a++)b.I();this.Ae&&this.Ae.rk();this.sc();I||F(this.D(),"mousedown",this,this.Ce);this.o.aa.appendChild(this.D());u(this.onchange)&&F(this.o.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){T&&Tg(T);T=this;this.Xe();vg(this.o.aa,"blocklySelectChange")};function Tg(a){T=null;a.Me();vg(a.o.aa,"blocklySelectChange")}f.Ae=null;f.L=null;f.Od=null;function Vh(a){var b=[];a.Ae&&b.push(a.Ae);a.L&&b.push(a.L);a.Od&&b.push(a.Od);return b}
var gj=null,hj=null;f=Yh.prototype;f.ya=function(a){var b=this.D();if(this.ec&&b){var c=this.O();this.o.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Yh.j.ya.call(this,a);a&&(c=this.O(),a.D().appendChild(b),a=this.O(),mh(this,a.x-c.x,a.y-c.y))};f.O=function(){var a=0,b=0,c=this.D();if(c){do var d=Yg(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.o.aa)}return new L(a,b)};
f.moveBy=function(a,b){var c=this.O();this.D().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");mh(this,a,b);ij(this)};function oi(a){var b=a.height,c=a.width;if(a=Wf(a))a=oi(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.mc=function(a){if(this.Wb!=a){Yh.j.mc.call(this,a);for(var b=[],c=0,d;d=this.S[c];c++)b.push.apply(b,d.G(!a));if(a){a=Vh(this);for(c=0;c<a.length;c++)a[c].G(!1);c=this.toString(jj);Uh(ei(this,5,"_TEMP_COLLAPSED_INPUT"),c).I()}else a:{for(c=0;a=this.S[c];c++)if("_TEMP_COLLAPSED_INPUT"==a.name){a.n&&a.n.m&&R(a.n).ya(null);a.k();this.S.splice(c,1);this.t&&(this.C(),this.Ca());break a}jb('Input "%s" not found.',"_TEMP_COLLAPSED_INPUT")}b.length||(b[0]=this);if(this.t){for(c=0;a=b[c];c++)a.C();this.Ca()}}};
f.Ce=function(a){if(!this.Mb){kj();si();this.select();ug();if(Lb(a))ti(this,a);else if(this.zb&&!I){Lg();sg(tg);var b=this.O();this.Sh=b.x;this.Th=b.y;this.mg=a.clientX;this.ng=a.clientY;Mb=1;gj=F(document,"mouseup",this,this.Tf);hj=F(document,"mousemove",this,this.Sf);this.$d=[];for(var b=this.mb(),c=0,d;d=b[c];c++){d=Vh(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Ic,y:g.Jc};g.vi=d[e];this.$d.push(g)}}}else return;a.stopPropagation()}};
f.Tf=function(a){var b=this;lj(function(){si();if(T&&ah){fg(bh,ah);if(b.t){var c=(ch(bh)?ah:bh).h;mj("click");var d=Cg(c.g);c.K?(d.x+=x?3:-3,d.y+=13):c.B&&(d.x+=x?-23:23,d.y+=3);c=E("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},z);c.kg=new Date;nj(c)}b.o.Na&&b.o.Na.close()}else Ug(b.o,a)&&((c=b.o.Na)&&Cf(c.close,100,c),T.k(!1,!0),vg(window,"resize"));ah&&(H(Zg.me),delete Zg.me,ah=null);sg(oj.OPEN)})};
function ti(a,b){if(!I&&a.contextMenu){var c=[];if(a.Ac&&!I&&a.zb&&!I&&!a.Mb){var d={text:pj,enabled:!0,Ya:function(){var b=Vf(a);gg(b);var b=$f(a.o,b),c=a.O();c.x=x?c.x-U:c.x+U;c.y+=2*U;b.moveBy(c.x,c.y);b.select()}};a.mb().length>Ha(a.o)&&(d.enabled=!1);c.push(d);a.Bc&&!I&&!a.Wb&&sa&&(d={enabled:!0},a.L?(d.text=qj,d.Ya=function(){a.Dd(null)}):(d.text=rj,d.Ya=function(){a.Dd("")}),c.push(d));if(!a.Wb)for(d=0;d<a.S.length;d++)if(1==a.S[d].type){d={enabled:!0};d.text=a.wd?sj:tj;d.Ya=function(){bg(a,
!a.wd)};c.push(d);break}ta&&(a.Wb?(d={enabled:!0},d.text=uj,d.Ya=function(){a.mc(!1)}):(d={enabled:!0},d.text=vj,d.Ya=function(){a.mc(!0)}),c.push(d));ua&&(d={text:a.disabled?wj:xj,enabled:!di(a),Ya:function(){a.Ed(!a.disabled)}},c.push(d));var d=a.mb().length,e=Wf(a);e&&(d-=e.mb().length);d={text:1==d?yj:zj.replace("%1",String(d)),enabled:!0,Ya:function(){a.k(!0,!0)}};c.push(d)}d={enabled:!(u(a.Kb)?!a.Kb():!a.Kb)};d.text=Aj;d.Ya=function(){var b=u(a.Kb)?a.Kb():a.Kb;b&&window.open(b)};c.push(d);a.Ki&&
!a.Mb&&a.Ki(c);fj.show(b,c);fj.Wd=a}}function mh(a,b,c){if(a.t){for(var d=qh(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Vh(a);for(e=0;e<d.length;e++)Xg(d[e]);for(e=0;e<a.jb.length;e++)mh(a.jb[e],b,c)}}function Bj(a,b){b?Ib(a.g,"blocklyDragging"):Jb(a.g,"blocklyDragging");for(var c=0;c<a.jb.length;c++)Bj(a.jb[c],b)}
f.Sf=function(a){var b=this;lj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Lg();var c=a.clientX-b.mg,d=a.clientY-b.ng;if(1==Mb&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>vi){Mb=2;b.ya(null);Bj(b,!0);var e=b.o;e.Zg=e.Na?e.Na.od():null;e.Yg=e.ja?e.ja.od():e.sa?e.sa.od():null}if(2==Mb){b.D().setAttribute("transform","translate("+(b.Sh+c)+", "+(b.Th+d)+")");for(e=0;e<b.$d.length;e++){var g=b.$d[e],h=g.vi,k=g.x+c,g=g.y+d;h.Ic=k;h.Jc=g;h.u()&&jg(h.ga,k,g)}for(var h=qh(b,
!1),g=k=null,l=U,e=0;e<h.length;e++){var m=h[e],q=nh(m,l,c,d);q.n&&(k=q.n,g=m,l=q.Ih)}ah&&ah!=k&&(H(Zg.me),delete Zg.me,bh=ah=null);k&&k!=ah&&(k.rh(),ah=k,bh=g);b.Ac&&!I&&Ug(b.o,a)}}a.stopPropagation()})};function ci(a){a.zb&&!I?Ib(a.g,"blocklyDraggable"):Jb(a.g,"blocklyDraggable")}f.D=function(){return this.g};var Cj=1*(1-Math.SQRT1_2)+1,Dj=3*(1-Math.SQRT1_2)-1,Ej="m "+Cj+","+Cj,Fj="a 3,3 0 0,0 "+(-Dj-1)+","+(2-Dj),Gj="a 3,3 0 0,0 "+(2-Dj)+","+(Dj+1);f=Yh.prototype;
f.k=function(a,b){si();fj.Wd==this&&fj.xb();$h(this,a);if(b&&this.t){mj("delete");var c=Cg(this.g),d=this.g.cloneNode(!0);d.Zh=c.x;d.$h=c.y;d.setAttribute("transform","translate("+d.Zh+","+d.$h+")");z.appendChild(d);d.Dg=d.getBBox();d.kg=new Date;Hj(d)}this.t=!1;c=Vh(this);for(d=0;d<c.length;d++)c[d].k();Yh.j.k.call(this,a);H(this.g);this.Uh=this.rg=this.Cb=this.g=null};
function Hj(a){var b=(new Date-a.kg)/150;1<b?H(a):(a.setAttribute("transform","translate("+(a.Zh+(x?-1:1)*a.Dg.width/2*b+", "+(a.$h+a.Dg.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Hj(a)},10))}function nj(a){var b=(new Date-a.kg)/150;1<b?H(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){nj(a)},10))}
f.sc=function(){if(!this.disabled){var a=tf(uf(this.hf)),b;b=a;if(!yf.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(wf,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];zf([255,255,255],b,.3);zf([0,0,0],b,.4);this.Cb.setAttribute("fill",a);b=Vh(this);for(a=0;a<b.length;a++)b[a].sc();for(a=0;b=this.S[a];a++)for(var c=0,d;d=b.oa[c];c++)d.La(null);this.t&&this.C()}};
function ih(a){a.disabled||di(a)?(Ib(a.g,"blocklyDisabled"),a.Cb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Jb(a.g,"blocklyDisabled"),a.sc());a=a.ac();for(var b=0,c;c=a[b];b++)ih(c)}f.jh=function(){return this.L?this.L.nb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Dd=function(a){var b=!1;p(a)?(this.L||(this.L=new wh(this),b=!0),this.L.La(a)):this.L&&(this.L.k(),b=!0);b&&this.t&&(this.C(),this.Ca())};f.Ed=function(a){this.disabled!=a&&(Yh.j.Ed.call(this,a),ih(this),this.o.lb())};
f.Xe=function(){Ib(this.g,"blocklySelected");this.g.parentNode.appendChild(this.g)};f.Me=function(){Jb(this.g,"blocklySelected")};
f.C=function(){this.t=!0;var a=10;x&&(a=-a);for(var b=Vh(this),c=0;c<b.length;c++){var d=b[c];d.Ba.isCollapsed()?d.wa.setAttribute("display","none"):(d.wa.setAttribute("display","block"),x&&(a-=16),d.wa.setAttribute("transform","translate("+a+", 5)"),Xg(d),a=x?a-10:a+26)}var e=a+=x?10:-10,g=this.S,b=[];b.T=e+20;if(this.B||this.J)b.T=Math.max(b.T,40);for(var d=c=0,h=!1,k=!1,l=!1,m=void 0,q=this.wd&&!this.isCollapsed(),v=0,t;t=g[v];v++)if(t.u()){var y;q&&m&&3!=m&&3!=t.type?y=b[b.length-1]:(m=t.type,
y=[],y.type=q&&3!=t.type?-1:t.type,y.height=0,b.push(y));y.push(t);t.jc=25;t.ka=q&&1==t.type?20.5:0;if(t.n&&t.n.m){var ya=oi(R(t.n));t.jc=Math.max(t.jc,ya.height);t.ka=Math.max(t.ka,ya.width)}v==g.length-1&&t.jc--;y.height=Math.max(y.height,t.jc);t.$a=0;1==b.length&&(t.$a+=x?-e:e);for(var ya=!1,Bf=0,gb;gb=t.oa[Bf];Bf++){0!=Bf&&(t.$a+=10);var fi=gb.mh();gb.ka=fi.width;gb.Oe=ya&&gb.uc?10:0;t.$a+=gb.ka+gb.Oe;y.height=Math.max(y.height,fi.height);ya=gb.uc}-1!=y.type&&(3==y.type?(k=!0,d=Math.max(d,t.$a)):
(1==y.type?h=!0:5==y.type&&(l=!0),c=Math.max(c,t.$a)))}for(e=0;y=b[e];e++)if(y.Wh=!1,-1==y.type)for(g=0;t=y[g];g++)if(1==t.type){y.height+=20;y.Wh=!0;break}b.Re=20+d;k&&(b.T=Math.max(b.T,b.Re+30));h?b.T=Math.max(b.T,c+20+8):l&&(b.T=Math.max(b.T,c+20));b.ij=h;b.Ck=k;b.Bk=l;d=a;this.K?this.jg=this.Qe=!0:(this.jg=this.Qe=!1,this.B&&(a=R(this.B))&&Wf(a)==this&&(this.Qe=!0),Wf(this)&&(this.jg=!0));h=this.O();k=[];l=[];a=[];c=[];t=b.T;this.Qe?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(x?
Ej:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.B&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.B.moveTo(h.x+(x?-30:30),h.y));k.push("H",t);a.push("H",t+(x?-1:0));this.width=t;for(y=t=0;e=b[y];y++){q=10;0==y&&(q+=x?-d:d);a.push("M",b.T-1+","+(t+1));if(this.isCollapsed())g=e[0],v=t+18,Ij(g.oa,q,v),k.push("l 8,0 0,4 8,4 -16,8 8,4"),x?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),x&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(m=0;g=e[m];m++)v=t+18,e.Wh&&(v+=10),q=Ij(g.oa,q,v),5!=g.type&&(q+=g.ka+10),1==g.type&&(l.push("M",q-10+","+(t+10)),l.push("h",6-g.ka),l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),l.push("v",g.jc+1-20),l.push("h",g.ka+2-8),l.push("z"),x?(c.push("M",q-10-3+8-g.ka+","+(t+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.jc-20+3),c.push("h",g.ka-8+1)):(c.push("M",q-10+1+","+(t+10+1)),c.push("v",g.jc+1),c.push("h",6-g.ka),
c.push("M",q-g.ka-10+1.8+","+(t+10+20-.4)),c.push("l","3.04,-1.8")),v=x?h.x-q-8+10+g.ka+1:h.x+q+8-10-g.ka-1,ya=h.y+t+10+1,g.n.moveTo(v,ya),g.n.m&&lh(g.n));q=Math.max(q,b.T);this.width=Math.max(this.width,q);k.push("H",q);a.push("H",q+(x?-1:0));k.push("v",e.height);x&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],v=t+18,-1!=g.align&&(m=b.T-g.$a-8-20,1==g.align?q+=m:0==g.align&&(q+=(m+q)/2)),Ij(g.oa,q,v),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),m=e.height-20,k.push("v",m),x?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",m)):(a.push("M",b.T-4.2+","+(t+20-.4)),a.push("l","3.04,-1.8")),v=h.x+(x?-b.T-1:b.T+1),ya=h.y+t,g.n.moveTo(v,ya),g.n.m&&(lh(g.n),this.width=Math.max(this.width,b.T+oi(R(g.n)).width-8+1))):5==e.type?(g=e[0],v=t+18,-1!=g.align&&(m=b.T-g.$a-20,b.ij&&(m-=8),1==g.align?q+=m:0==g.align&&(q+=(m+q)/2)),Ij(g.oa,q,v),k.push("v",e.height),x&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==y&&(k.push("v",10),x&&a.push("v",9),t+=10),v=t+18,-1!=g.align&&(m=b.Re-g.$a-20,1==g.align?q+=m:0==g.align&&(q+=
(m+q)/2)),Ij(g.oa,q,v),q=b.Re+30,k.push("H",q),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.T),x?(a.push("M",q-30+Dj+","+(t+Dj)),a.push(Fj),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.T-1)):(a.push("M",q-30+Dj+","+(t+e.height-Dj)),a.push(Gj),a.push("H",b.T)),v=h.x+(x?-q:q),ya=h.y+t+1,g.n.moveTo(v,ya),g.n.m&&(lh(g.n),this.width=Math.max(this.width,b.Re+oi(R(g.n)).width)),y==b.length-1||3==b[y+1].type)&&(k.push("v",
10),x&&a.push("v",9),t+=10);t+=e.height}b.length||(t=25,k.push("V",t),x&&a.push("V",t-1));b=t;this.height=b+1;this.J&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.J.moveTo(x?h.x-30:h.x+30,h.y+b+1),this.J.m&&lh(this.J),this.height+=4);this.jg?(k.push("H 0"),x||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),x||(a.push("M",Cj+","+(b-Cj)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.K?(this.K.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),x?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):x||(this.Qe?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+l.join(" ");this.Cb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.rg.setAttribute("d",b);x&&(this.Cb.setAttribute("transform","scale(-1 1)"),this.rg.setAttribute("transform","scale(-1 1)"),this.Uh.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.C():vg(window,"resize");
ij(this)};function Ij(a,b,c){x&&(b=-b);for(var d=0,e;e=a[d];d++)x?(b-=e.Oe+e.ka,e.D().setAttribute("transform","translate("+b+", "+c+")"),e.ka&&(b-=10)):(e.D().setAttribute("transform","translate("+(b+e.Oe)+", "+c+")"),e.ka&&(b+=e.Oe+e.ka+10));return x?-b:b};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Ib(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Jb(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function F(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in Jj)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=Jj[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var Jj={};aa("document.documentElement.ontouchstart")&&(Jj={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function G(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function ri(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function vg(a,b){setTimeout(function(){ri(a,b)},0)}
function Yg(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function Cg(a){var b=0,c=0;do{var d=Yg(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=z);return{x:b,y:c}}function nf(a){a=Cg(a);return bj(a.x,a.y,!1)}
function E(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Lb(a){return 2==a.button||a.ctrlKey}
function bj(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=z.createSVGPoint();d.x=a;d.y=b;a=z.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Kg(a){return bj(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function qf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function rf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||qf(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function sf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||qf(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var tg="handclosed",Vg="handdelete",oj={},Kj="",Lj=null,Mj="";function Nj(){var a=Oj.join("\n");Mj=zg.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Mj),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Lj=c.sheet;sg("hando")}
function sg(a){if(!I&&Kj!=a){Kj=a;var b="url("+Mj+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Lj||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;z&&(z.style.cursor="hando"==a?"":b)}}
var Oj=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
"  fill:none;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklySelected>.blocklyPath {","  stroke-width: 3px;","  stroke: #fc3;","}",".blocklySelected>.blocklyPathLight {","  display: none;","}",".blocklyDragging>.blocklyPath,",".blocklyDragging>.blocklyPathLight {","  fill-opacity: .8;","  stroke-opacity: .8;","}",".blocklyDragging>.blocklyPathDark {","  display: none;","}",".blocklyDisabled>.blocklyPath {","  fill-opacity: .5;","  stroke-opacity: .5;","}",".blocklyDisabled>.blocklyPathLight,",
".blocklyDisabled>.blocklyPathDark {","  display: none;","}",".blocklyText {","  cursor: default;",'  font-family: "Open Sans", sans-serif;',"  font-size: 12pt;","  fill: #fff;","}",".blocklyNonEditableText>text {","  pointer-events: none;","}",".blocklyNonEditableText>rect,",".blocklyEditableText>rect {","  fill: #fff;","  fill-opacity: .6;","}",".blocklyNonEditableText>text,",".blocklyEditableText>text {","  fill: #000;","}",".blocklyEditableText:hover>rect {","  stroke-width: 2;","  stroke: #fff;",
"}",".blocklyBubbleText {","  fill: #000;","}",".blocklySvg text {","  -moz-user-select: none;","  -webkit-user-select: none;","  user-select: none;","  cursor: inherit;","}",".blocklyHidden {","  display: none;","}",".blocklyFieldDropdown:not(.blocklyHidden) {","  display: block;","}",".blocklyTooltipBackground {","  fill: #ffffc7;","  stroke-width: 1px;","  stroke: #d8d8d8;","}",".blocklyTooltipShadow,",".blocklyDropdownMenuShadow {","  fill: #bbb;","  filter: url(#blocklyShadowFilter);","}",".blocklyTooltipText {",
"  font-family: sans-serif;","  font-size: 9pt;","  fill: #000;","}",".blocklyIconShield {","  cursor: default;","  fill: #00c;","  stroke-width: 1px;","  stroke: #ccc;","}",".blocklyIconGroup:hover>.blocklyIconShield {","  fill: #00f;","  stroke: #fff;","}",".blocklyIconGroup:hover>.blocklyIconMark {","  fill: #fff;","}",".blocklyIconMark {","  cursor: default !important;","  font-family: sans-serif;","  font-size: 9pt;","  font-weight: bold;","  fill: #ccc;","  text-anchor: middle;","}",".blocklyWarningBody {",
"}",".blocklyMinimalBody {","  margin: 0;","  padding: 0;","}",".blocklyCommentTextarea {","  margin: 0;","  padding: 2px;","  border: 0;","  resize: none;","  background-color: #ffc;","}",".blocklyHtmlInput {","  font-family: sans-serif;","  font-size: 11pt;","  border: none;","  outline: none;","  width: 100%","}",".blocklyMutatorBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #ddd;","}",".blocklyFlyoutBackground {","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyColourBackground {",
"  fill: #666;","}",".blocklyScrollbarBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #e4e4e4;","}",".blocklyScrollbarKnob {","  fill: #ccc;","}",".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,",".blocklyScrollbarKnob:hover {","  fill: #bbb;","}",".blocklyInvalidInput {","  background: #faa;","}",".blocklyAngleCircle {","  stroke: #444;","  stroke-width: 1;","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyAngleMarks {","  stroke: #444;","  stroke-width: 1;","}",".blocklyAngleGauge {",
"  fill: #f88;","  fill-opacity: .8;  ","}",".blocklyAngleLine {","  stroke: #f00;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklyContextMenu {","  border-radius: 4px;","}",".blocklyDropdownMenu {","  padding: 0 !important;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;","}",".blocklyToolboxDiv {","  background-color: #fae5e2;",
"  display: none;","  overflow-x: visible;","  overflow-y: auto;","  position: absolute;","\t width: 200px;","}",".blocklyTreeRoot {","  padding: 4px 0;","}",".blocklyTreeRoot:focus {","  outline: none;","}",".blocklyTreeRow {","  line-height: 40px;","  background-color: #ec8fa1;","  outline: #ee9bab solid 2px;","  text-transform: uppercase;","  height: 40px;","  padding-right: 1em;","  white-space: nowrap;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',"  padding-right: 0;","  padding-left: 1em !important;",
"}",".blocklyTreeRow:hover {","  background-color: #f7d0d8;","}",".blocklyTreeSeparator {","  height: 0px;","  border-bottom: solid #e5e5e5 1px;","  margin: 5px 0;","}",".blocklyTreeIcon {","  height: 16px;","  width: 16px;","  vertical-align: middle;","  background-image: url(<<<PATH>>>/sprites.png);","}",".blocklyTreeIconClosedLtr {","  background-position: -32px -1px;","}",".blocklyTreeIconClosedRtl {","  background-position: 0px -1px;","}",".blocklyTreeIconO {","  background-position: -16px -1px;",
"}",".blocklyTreeSelected>.blocklyTreeIconClosedLtr {","  background-position: -32px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconClosedRtl {","  background-position: 0px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconO {","  background-position: -16px -17px;","}",".blocklyTreeIconNone,",".blocklyTreeSelected>.blocklyTreeIconNone {","  background-position: -48px -1px;","}",".blocklyTreeLabel {","  cursor: default;"," color: #fff;",'  font-family: "O Sans", sans-serif;',"\t font-weight: 400;",
"  font-size: 18px;","  padding: 0 3px;","  vertical-align: middle;","}",".blocklyTreeSelected  {","  background-color: #dd3858 !important;","}",".blocklyTreeSelected .blocklyTreeLabel {","  color: #fff;","}",".blocklyWidgetDiv .goog-palette {","  outline: none;","  cursor: default;","}",".blocklyWidgetDiv .goog-palette-table {","  border: 1px solid #666;","  border-collapse: collapse;","}",".blocklyWidgetDiv .goog-palette-cell {","  height: 13px;","  width: 15px;","  margin: 0;","  border: 0;","  text-align: center;",
"  vertical-align: middle;","  border-right: 1px solid #666;","  font-size: 1px;","}",".blocklyWidgetDiv .goog-palette-colorswatch {","  position: relative;","  height: 13px;","  width: 15px;","  border: 1px solid #666;","}",".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {","  border: 1px solid #FFF;","}",".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {","  border: 1px solid #000;","  color: #fff;","}",".blocklyWidgetDiv .goog-menu {","  background: #fff;",
"  border-color: #ccc #666 #666 #ccc;","  border-style: solid;","  border-width: 1px;","  cursor: default;","  font: normal 13px Arial, sans-serif;","  margin: 0;","  outline: none;","  padding: 4px 0;","  position: absolute;","  z-index: 20000;","}",".blocklyWidgetDiv .goog-menuitem {","  color: #000;","  font: normal 13px Arial, sans-serif;","  list-style: none;","  margin: 0;","  padding: 4px 7em 4px 28px;","  white-space: nowrap;","}",".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {","  padding-left: 7em;",
"  padding-right: 28px;","}",".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,",".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {","  padding-left: 12px;","}",".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {","  padding-right: 20px;","}",".blocklyWidgetDiv .goog-menuitem-content {","  color: #000;","  font: normal 13px Arial, sans-serif;","}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {","  color: #ccc !important;",
"}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {","  opacity: 0.3;","  -moz-opacity: 0.3;","  filter: alpha(opacity=30);","}",".blocklyWidgetDiv .goog-menuitem-highlight,",".blocklyWidgetDiv .goog-menuitem-hover {","  background-color: #d6e9f8;","  border-color: #d6e9f8;","  border-style: dotted;","  border-width: 1px 0;","  padding-bottom: 3px;","  padding-top: 3px;","}",".blocklyWidgetDiv .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-menuitem-icon {","  background-repeat: no-repeat;",
"  height: 16px;","  left: 6px;","  position: absolute;","  right: auto;","  vertical-align: middle;","  width: 16px;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {","  left: auto;","  right: 6px;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;","}",
".blocklyWidgetDiv .goog-menuitem-accel {","  color: #999;","  direction: ltr;","  left: auto;","  padding: 0 6px;","  position: absolute;","  right: 0;","  text-align: right;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {","  left: 0;","  right: auto;","  text-align: left;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {","  text-decoration: underline;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {","  color: #999;","  font-size: 12px;","  padding-left: 4px;",
"}",".blocklyWidgetDiv .goog-menuseparator {","  border-top: 1px solid #ccc;","  margin: 4px 0;","  padding: 0;","}",""];/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Pj(a,b){function c(){Qj(a);Rj()}if(!Hc(document,a))throw"Error: container is not in current document.";b&&Sj(b);if(va){var d=document.getElementById("realtime");d&&(d.style.display="block");Tj(c,a)}else c()}
function Sj(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Yf(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var l=a.scrollbars;void 0===l&&(l=c);var m=a.sounds;void 0===m&&(m=!0);var q=!!a.realtime,v=q?a.realtimeOptions:void 0;
x=!!a.rtl;ta=e;sa=g;ua=h;I=b;xa=a.maxBlocks||Infinity;a.media?zg=a.media:a.path&&(zg=a.path+"media/");za=c;Aa=l;qa=d;Ba=m;ra=k;va=q;wa=v}
function Qj(a){a.setAttribute("dir","LTR");Pd=x;Nj();var b=E("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=E("defs",{},b),d,e;d=E("filter",{id:"blocklyEmboss"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=E("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
E("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);E("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);E("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=E("filter",{id:"blocklyTrashcanShadowFilter"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);E("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=E("feMerge",{},d);E("feMergeNode",{"in":"offsetBlur"},d);E("feMergeNode",{"in":"SourceGraphic"},
d);d=E("filter",{id:"blocklyShadowFilter"},c);E("feGaussianBlur",{stdDeviation:2},d);c=E("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);E("rect",{width:10,height:10,fill:"#aaa"},c);E("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);J=new Mg(Uj,Vj);b.appendChild(J.H());J.Of=xa;I||(za?J.sa=new Zi(b,a):(J.ja=new gi,c=J.ja,d=c.H(),c.Sd=!1,Gc(d)),Aa||Wj(function(){if(0==Mb){var a=J.wb(),b=a.Oa+a.Pa,c=a.Sb+a.Qa;if(a.Za<c||a.Za+a.Sa>a.la+c||a.sb<(x?a.Oa:
b)||a.sb+a.yc>(x?a.V:a.V+b))for(var d=Fa(J,!1),e=0,q;q=d[e];e++){var v=q.O(),t=oi(q),y=c+25-t.height-v.y;0<y&&q.moveBy(0,y);y=c+a.la-25-v.y;0>y&&q.moveBy(0,y);y=25+b-v.x-(x?0:t.width);0<y&&q.moveBy(y,0);y=b+a.V-25-v.x+(x?t.width:0);0>y&&q.moveBy(y,0)}}}));b.appendChild(Ih());a.appendChild(b);z=b;kj();of=M("div","blocklyWidgetDiv");of.style.direction=x?"rtl":"ltr";document.body.appendChild(of)}
function Rj(){F(z,"mousedown",null,Xj);F(z,"contextmenu",null,Yj);F(of,"contextmenu",null,Yj);Ca||(F(window,"resize",document,kj),F(document,"keydown",null,Zj),document.addEventListener("mouseup",ak,!1),zb&&F(window,"orientationchange",document,function(){vg(window,"resize")}),Ca=!0);if(ra)if(J.sa)J.sa.I();else if(J.ja){J.ja.I(J);J.ja.show(ra.childNodes);J.scrollX=J.ja.A;x&&(J.scrollX*=-1);var a="translate("+J.scrollX+", 0)";J.aa.setAttribute("transform",a);J.Yc.setAttribute("transform",a)}Aa&&(J.Rb=
new Dg(J),J.Rb.resize());Og();if(Ba){bk([zg+"click.mp3",zg+"click.wav",zg+"click.ogg"],"click");bk([zg+"delete.mp3",zg+"delete.ogg",zg+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)G(b.pop());for(var a in ck){var d=ck[a];d.volume=.01;d.play();d.pause();if(zb||yb)break}};b.push(F(document,"mousemove",null,a));b.push(F(document,"touchstart",null,a))}};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var of=null,lf=null,dk=null;function kf(a){mf();lf=a;dk=null;of.style.display="block"}function mf(){lf&&(of.style.display="none",dk&&dk(),dk=lf=null,Kb(of))}function pf(a,b,c,d){b<d.y&&(b=d.y);x?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);of.style.left=a+"px";of.style.top=b+"px"};/*

 Visual Blocks Editor

 Copyright 2012 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function ek(a,b,c,d){this.h=null;this.ea=Number(c);this.A=Number(b);this.Xc={height:this.ea+10,width:this.A};this.za=d||"";this.Y=E("g",{},null);this.oe=E("image",{height:this.ea+"px",width:this.A+"px",y:-12},this.Y);this.Ma(a);vb&&(this.Ie=E("rect",{height:this.ea+"px",width:this.A+"px",y:-12,"fill-opacity":0},this.Y))}w(ek,Gb);f=ek.prototype;f.clone=function(){return new ek(this.Ak(),this.A,this.ea,this.nb())};f.Ie=null;f.uc=!1;
f.I=function(a){this.h||(this.h=a,a.D().appendChild(this.Y),a=this.Ie||this.oe,a.Aa=this.h,Jh(a))};f.k=function(){H(this.Y);this.Ie=this.oe=this.Y=null};f.Wc=function(a){(this.Ie||this.oe).Aa=a};f.Gc=function(){return this.Rj};f.Ma=function(a){null!==a&&(this.Rj=a,this.oe.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",p(a)?a:""))};f.La=function(a){null!==a&&(this.za=a)};f.Sc=function(){};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function fk(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=n.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var gk=fk();function V(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function hk(a){this.zi=V(a,"clientId");this.vg=gk.userId;document.getElementById(V(a,"authButtonElementId"));document.getElementById(V(a,"authDivElementId"))}hk.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function ik(a,b,c,d){function e(c){gapi.Eb.ca.files.re({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Zb(d)}function g(){function a(b){gapi.Eb.ca.Gj.re({fileId:"appdata",resource:{key:"folderId",value:b}}).Zb(function(){e(b)})}function b(){gapi.Eb.ca.files.re({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Zb(function(b){a(b.id)})}gapi.Eb.ca.Gj.get({fileId:"appdata",propertyKey:"folderId"}).Zb(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Eb.ca.files.get({fileId:g}).Zb(function(a){a.error||
a.labels.Vk?b():e(g)})}})}gapi.Eb.load("drive","v2",function(){g()})}function jk(a){this.Ch=V(a,"onFileLoaded");this.uj=V(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.sh=V(a,"initializeModel");this.Kh=V(a,"registerTypes",function(){});this.Ag=V(a,"afterAuth",function(){});this.ti=V(a,"autoCreate",!1);this.Mi=V(a,"defaultTitle","New Realtime File");this.Li=V(a,"defaultFolderTitle","");this.Bg=V(a,"afterCreate",function(){});this.cf=new hk(a)}
function kk(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;gk=fk();for(var e in b)gapi.ca.qb.load(b[e],a.Ch,a.sh,a.oh)}jk.prototype.start=function(){var a=this;this.cf.start(function(){a.Kh&&a.Kh();a.Ag&&a.Ag();a.load()})};
jk.prototype.oh=function(a){a.type!=gapi.ca.qb.xg.gk&&(a.type==gapi.ca.qb.xg.bk?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ca.qb.xg.ek&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
jk.prototype.load=function(){var a=gk.fileIds;a&&(a=a.split(","));var b=this.cf.vg,b=gk.state;if(a)for(var c in a)gapi.ca.qb.load(a[c],this.Ch,this.sh,this.oh);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.Dk;b=d.vg;kk(this,a,b);return}}this.ti&&lk(this)}};function lk(a){ik(a.Mi,a.uj,a.Li,function(b){b.id?(a.Bg&&a.Bg(b.id),kk(a,[b.id],a.cf.vg)):(console.error("Error creating file."),console.error(b))})};/*

 Visual Blocks Editor

 Copyright 2014 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Qg,mk,Pg=!1,nk=null,Xh=null,ok=null,pk=null,Zh=null,ai=!1,qk=null,rk=null,sk=null;function tk(a){var b=a.Qi;a=a.Qi.length;for(var c=0;c<a;c++){var d=b[c];if(!d.oj){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Hh?uk(function(){vk(e,!1);wk(e)}):"relativeX"!=d.Hh&&"relativeY"!=d.Hh||uk(function(){e.Vh||vk(e,!1);wk(e)}))}}}function xk(a){if(!a.oj){var b=a.newValue;b?vk(b,!a.oldValue):(b=a.oldValue,yk(b))}}function uk(a){if(ai)a();else try{ai=!0,a()}finally{ai=!1}}
function vk(a,b){uk(function(){var c=Yf(a.wg).firstChild;if(c=$f(J,c,!0))b&&c.o.cd(c),(b||pb(Qg,c))&&wk(c)})}function wk(a){if(!isNaN(a.Je)&&!isNaN(a.Ke)){var b=Rh().width,c=a.O(),d=a.Je-c.x;a.moveBy(x?b-d:d,a.Ke-c.y)}}function yk(a){uk(function(){a.k(!0,!0,!0)})}function ij(a){if(a.o==J&&Pg&&!ai){a=jh(a);var b=a.O(),c=!1,d=Vf(a);d.setAttribute("id",a.id);var e=M("xml");e.appendChild(d);d=Xf(e);d!=a.wg&&(c=!0,a.wg=d);if(a.Je!=b.x||a.Ke!=b.y)a.Je=b.x,a.Ke=b.y,c=!0;c&&Zh.set(a.id.toString(),a)}}
function zk(a,b){gapi.Eb.ca.Gh.list({fileId:a}).Zb(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Mk){b(e.domain);break}}})}
var Dk={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Xh=a;var b=a.tk();a.Ec().set("blocks",b);b=a.sk();a.Ec().set("topBlocks",b);rk&&a.Ec().set(rk,a.uk(sk))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){nk=a;a:{for(var b=a.Vi(),c=0;c<b.length;c++){var d=b[c];if(d.pj){ok=d.Pk;break a}}ok=void 0}Xh=a.ze;Zh=Xh.Ec().get("blocks");Qg=Xh.Ec().get("topBlocks");
Xh.Ec().addEventListener(gapi.ca.qb.We.fk,tk);Zh.addEventListener(gapi.ca.qb.We.hk,xk);pk();a.addEventListener(gapi.ca.qb.We.ck,Ak);a.addEventListener(gapi.ca.qb.We.dk,Bk);Ck();a=Qg;for(b=0;b<a.length;b++)c=a.get(b),vk(c,!0)},registerTypes:function(){var a=gapi.ca.qb.vk;a.Kk(vh,"Block");vh.prototype.id=a.gf("id");vh.prototype.wg=a.gf("xmlDom");vh.prototype.Je=a.gf("relativeX");vh.prototype.Ke=a.gf("relativeY");a.Qk(vh,vh.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Eb.ca.Gh.re({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Zb(function(c){c.error&&zk(a,function(c){b=gapi.Eb.ca.Gh.re({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Zb(function(){})})})}};function Ek(){var a=wa,b=V(a,"chatbox");b&&(rk=V(b,"elementId"),sk=V(b,"initText",Fk));Dk.zi=V(a,"clientId");mk=V(a,"collabElementId")}
function Tj(a,b){Ek();Pg=!0;Gk(b);pk=function(){a();if(rk){var b=Xh.Ec().get(rk),d=document.getElementById(rk);gapi.ca.qb.wk.lk(b,d);d.disabled=!1}};qk=new jk(Dk);qk.start()}
function Gk(a){a.style.background="url("+zg+"progress.gif) no-repeat center center";var b=Wc(a),c=M("div");c.id=Dk.authDivElementId;var d=M("p",null,Hk);c.appendChild(d);d=M("button",null,"Authorize");d.id=Dk.jk;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=Wc(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Ck(){if(mk){var a;a=mk;a=p(a)?document.getElementById(a):a;Kb(a);for(var b=nk.Vi(),c=0;c<b.length;c++){var d=b[c],e=M("img",{src:d.Jk||zg+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.pj?" ("+Ik+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function Ak(){Ck()}function Bk(){Ck()}function rh(a){var b=ok+"-"+a;return Zh.has(b)?rh("-"+a):b};/*

 Visual Blocks Editor

 Copyright 2013 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*

 Visual Blocks Editor

 Copyright 2011 Google Inc.
 https://developers.google.com/blockly/

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var zg="https://blockly-demo.appspot.com/static/media/",xg=64,yg=92,Ag="sprites.png",dh=[,2,1,4,3],ck=Object.create(null),T=null,I=!1,ah=null,bh=null,vi=5,U=20,gh=250,jj=30,J=null,Jk=null,Mb=0,Kk=null;function Rh(){return{width:z.Gg,height:z.Fg}}function kj(){var a=z,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Gg!=c&&(a.setAttribute("width",c+"px"),a.Gg=c);a.Fg!=b&&(a.setAttribute("height",b+"px"),a.Fg=b);J.Rb&&J.Rb.resize()}
function Xj(a){kj();si();ug();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!I&&T&&b&&Tg(T);a.target==z&&Lb(a)?Lk(a):(I||b)&&J.Rb&&(J.rf=!0,J.mg=a.clientX,J.ng=a.clientY,J.Tj=J.wb(),J.Vj=J.scrollX,J.Wj=J.scrollY,"mouseup"in Jj&&(Kk=F(document,"mouseup",null,ak)),Da=F(document,"mousemove",null,Mk))}function ak(){sg(oj.OPEN);J.rf=!1;Kk&&(G(Kk),Kk=null);Da&&(G(Da),Da=null)}
function Mk(a){if(J.rf){Lg();var b=J.Tj,c=J.Vj+(a.clientX-J.mg),d=J.Wj+(a.clientY-J.ng),c=Math.min(c,-b.sb),d=Math.min(d,-b.Za),c=Math.max(c,b.V-b.sb-b.yc),d=Math.max(d,b.la-b.Za-b.Sa);J.Rb.set(-c-b.sb,-d-b.Za);a.stopPropagation()}}
function Zj(a){if(!rg(a))if(27==a.keyCode)ug();else if(8==a.keyCode||46==a.keyCode)try{T&&T.Ac&&!I&&(ug(),T.k(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(T&&T.Ac&&!I&&T.zb&&!I&&T.o==J&&(ug(),67==a.keyCode?Nk():88==a.keyCode&&(Nk(),T.k(!0,!0))),86==a.keyCode&&Jk){a=J;var b=Jk;if(!(b.getElementsByTagName("block").length>=Ha(a))){var c=$f(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){x&&(d=-d);do for(var e=!1,g=a.vb(),
h=0,k;k=g[h];h++)k=k.O(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=x?d-U:d+U,b+=2*U,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function si(){gj&&(G(gj),gj=null);hj&&(G(hj),hj=null);var a=T;if(2==Mb&&a){var b=a.O();mh(a,b.x-a.Sh,b.y-a.Th);delete a.$d;Bj(a,!1);a.C();Cf(a.Ca,gh,a);vg(window,"resize");a.o.lb()}Mb=0;sg(oj.OPEN);ui()}function Nk(){var a=T,b=Vf(a);gg(b);a=a.O();b.setAttribute("x",x?-a.x:a.x);b.setAttribute("y",a.y);Jk=b}
function Lk(a){if(!I){var b=[];if(ta){for(var c=!1,d=!1,e=Fa(J,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Wf(h);d={enabled:d};d.text=Ok;d.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!0),a),c=Wf(c),a+=10};b.push(d);c={enabled:c};c.text=Pk;c.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!1),a),c=Wf(c),a+=10};b.push(c)}fj.show(a,b)}}function Yj(a){rg(a)||a.preventDefault()}
function ug(a){Nh();mf();!a&&J.sa&&J.sa.ja&&J.sa.ja.Sd&&J.sa.Kd.oc(null)}function Lg(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function rg(a){return"textarea"==a.target.type||"text"==a.target.type}
function bk(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(ck[b]=c)}}function mj(a,b){var c=ck[a];c&&(c=Eb&&9===Eb||zb||xb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Uj(){var a=Rh();J.sa&&(a.width-=J.sa.width);var b=a.width-S,c=a.height-S;try{var d=J.aa.getBBox()}catch(e){return null}if(J.Rb)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!x&&J.sa&&(d=J.sa.width);return{la:a.height,V:a.width,Sa:c-h,yc:b-g,Sb:-J.scrollY,Oa:-J.scrollX,Za:h,sb:g,Qa:0,Pa:d}}
function Vj(a){if(!J.Rb)throw"Attempt to set main workspace scroll without scrollbars.";var b=Uj();r(a.x)&&(J.scrollX=-b.yc*a.x-b.sb);r(a.y)&&(J.scrollY=-b.Sa*a.y-b.Za);a="translate("+(J.scrollX+b.Pa)+","+(J.scrollY+b.Qa)+")";J.aa.setAttribute("transform",a);J.Yc.setAttribute("transform",a)}function lj(a){a()}function Wj(a){return F(J.aa,"blocklyWorkspaceChange",null,a)}n.Blockly||(n.Blockly={});n.Blockly.getMainWorkspace=function(){return J};n.Blockly.addChangeListener=Wj;
n.Blockly.removeChangeListener=function(a){G(a)};function Qk(a,b){var c;c=a.className;for(var d=c=p(c)&&c.match(/\S+/g)||[],e=tb(arguments,1),g=0;g<e.length;g++)pb(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var Rk={},Sk={en:"English"},Tk=[],Uk=window.BlocklyGamesLang,Vk=window.BlocklyGamesLanguages,Wk=!!window.location.pathname.match(/\.html$/);function Xk(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var W,Yk=Number(Xk("level","NaN"));W=isNaN(Yk)?1:Math.min(Math.max(1,Yk),10);
function Zk(){document.head.parentElement.setAttribute("dir",-1!=Tk.indexOf(Uk)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",Uk);for(var a=[],b=0;b<Vk.length;b++){var c=Vk[b];a.push([Sk[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==Uk&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!$k(b),a&&c&&Qk(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(al,1)}function $k(a){var b=bl,c;try{c=window.localStorage[b+a]}catch(d){}return c}function X(a){var b=cl(a);return null===b?"[Unknown message: "+a+"]":b}function cl(a){return(a=document.getElementById(a))?(a=a.textContent,a=a.replace(/\\n/g,"\n")):null}
function dl(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function al(){if(!Wk){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};K.animal={I:function(){this.Uc(185);Uh(ei(this,5,""),"","NAME");Uh(Wh(ei(this,1,"PIC"),1),X("Puzzle_picture"));Uh(Uh(Wh(ei(this,5,""),1),X("Puzzle_legs")),new ff(el),"LEGS")},Pc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ra);return a},gd:function(a){this.fc(parseInt(a.getAttribute("animal"),10))},Ra:0,fc:function(a){this.Ra=a;var b=X("Puzzle_animal"+a).toUpperCase();Sb(this,"NAME").Ma(b);this.Kb=X("Puzzle_animal"+a+"HelpUrl")},Jf:function(){var a=Sb(this,"LEGS");
return(a?a.Gc():null)==this.Ra}};K.picture={I:function(){this.Uc(348);ei(this,5,"PIC");sh(this);this.Wc("")},Pc:K.animal.Pc,gd:K.animal.gd,Ra:0,fc:function(a){this.Ra=a;var b="puzzle/"+X("Puzzle_animal"+a+"Pic"),c=X("Puzzle_animal"+a+"PicHeight");a=X("Puzzle_animal"+a+"PicWidth");Uh(eg(this,"PIC"),new ek(b,a,c))},Jf:function(){var a=this.getParent();return a&&a.Ra==this.Ra}};
K.trait={I:function(){this.Uc(18);Uh(ei(this,5,""),"","NAME");th(this,!0);uh(this,!0)},Pc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ra);a.setAttribute("trait",this.Yh);return a},gd:function(a){this.fc(parseInt(a.getAttribute("animal"),10),parseInt(a.getAttribute("trait"),10))},Ra:0,Yh:0,fc:function(a,b){this.Ra=a;this.Yh=b;var c=X("Puzzle_animal"+a+"Trait"+b);Sb(this,"NAME").Ma(c)},Jf:function(){var a=bi(this);return a&&a.Ra==this.Ra}};var rj="Add Comment",Hk="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",Fk="Chat with your collaborator by typing in this box!",Ok="Collapse Blocks",vj="Collapse Block",yj="Delete Block",zj="Delete %1 Blocks",xj="Disable Block",pj="Duplicate",wj="Enable Block",Pk="Expand Blocks",uj="Expand Block",sj="External Inputs",Aj="Help",tj="Inline Inputs",Ik="Me",qj="Remove Comment";var Y={Cc:null,I:function(){Zk();var a=document.getElementById("linkButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=X("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=X("Games_linkAlert"),BlocklyStorage.HASH_ERROR=X("Games_hashError"),BlocklyStorage.XML_ERROR=X("Games_xmlError"),BlocklyStorage.alert=Rk.Xj,a&&dl(a,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",Y.yi,!0)},mj:function(a){document.body.innerHTML=
a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Pj(a,{media:"media/",readOnly:!0,Nk:-1!=Tk.indexOf(Uk),scrollbars:!1});a=Xk("xml","");Y.fg("<xml>"+a+"</xml>")},Hk:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.we}catch(d){}c&&delete window.sessionStorage.we;var e=$k(W),g=b&&$k(W-1);(c=c||e||g||a)&&Y.fg(c)}},fg:function(a){Y.Cc?Y.Cc.setValue(a,
-1):(a=Yf(a),Zf(J,a))},Mj:function(){if(void 0!=typeof pa&&window.localStorage){var a=bl+W;if(Y.Cc)var b=Y.Cc.getValue();else b=Uf(J),b=Xf(b);window.localStorage[a]=b}},pe:function(){window.location=(Wk?"index.html":"./")+"?lang="+Uk},yi:function(){if(window.sessionStorage){if(Y.Cc)var a=Y.Cc.getValue();else a=Uf(J),a=Xf(a);window.sessionStorage.we=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+
a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},rh:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Sg(a)},Tk:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Gb:function(a){if("click"==a.type&&"touchend"==Y.Gb.Yf&&Y.Gb.Xf+2E3>Date.now()||Y.Gb.Yf==a.type&&Y.Gb.Xf+400>Date.now())return a.preventDefault(),a.stopPropagation(),
!0;Y.Gb.Yf=a.type;Y.Gb.Xf=Date.now();return!1}};Y.Gb.Yf=null;Y.Gb.Xf=0;Y.Ek=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
Y.Fk=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=Y;Y.setCode=Y.fg;var Z={yb:!1,ah:null,Yd:null,pc:function(a,b,c,d,e,g){function h(){Z.yb&&(k.style.visibility="visible",k.style.zIndex=10,l.style.visibility="hidden")}Z.yb&&Z.Ha(!1);ug(!0);Z.yb=!0;Z.ah=b;Z.Yd=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var l=document.getElementById("dialogBorder"),m;for(m in e)k.style[m]=e[m];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Z.nf=F(d,"mousedown",
null,Z.Ni));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Z.xe(b,!1,.2),Z.xe(k,!0,.8),setTimeout(h,175)):h()},bh:0,dh:0,Ni:function(a){Z.qf();if(!Lb(a)){var b=document.getElementById("dialog");Z.bh=b.offsetLeft-a.clientX;Z.dh=b.offsetTop-a.clientY;Z.pf=F(document,"mouseup",null,Z.qf);Z.of=F(document,"mousemove",null,Z.Oi);a.stopPropagation()}},Oi:function(a){var b=document.getElementById("dialog"),c=Z.bh+a.clientX;a=Z.dh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},qf:function(){Z.pf&&(G(Z.pf),Z.pf=null);Z.of&&(G(Z.of),Z.of=null)},Ha:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Z.yb){Z.qf();Z.nf&&(G(Z.nf),Z.nf=null);Z.yb=!1;Z.Yd&&Z.Yd();Z.Yd=null;var c=!1===a?null:Z.ah;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Z.xe(a,!1,.8),Z.xe(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},xe:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Z.Ui(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Ui:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=nf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Xj:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Z.pc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Z.og);Z.lg()},mi:function(){if(!$k(W))if(Z.yb||0!=vh.yk)setTimeout(Z.mi,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("abortOk");b.addEventListener("click",Y.pe,!0);b.addEventListener("touchend",Y.pe,
!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.zg,!0)});document.body.addEventListener("keydown",Z.zg,!0)}},Gk:function(){var a=document.getElementById("dialogDone");J&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("containerCode");a.removeChild(b);10>W?X("Games_nextLevel").replace("%1",W+1):X("Games_finalLevel");b=document.getElementById("doneCancel");
b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("doneOk");1==W&&(b.addEventListener("click",function(){window.open("/puzzle","_self")},!0),b.addEventListener("touchend",function(){window.open("/puzzle","_self")},!0));2==W&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));3==W&&(b.addEventListener("click",function(){window.open("/turtle?lang=en?level=2",
"_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.xc,!0)});document.body.addEventListener("keydown",Z.xc,!0)},xk:function(){var a=document.getElementById("dialogDone");J&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" Return to the homepage or "Cancel" continue dressing up your avatar.');
var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("doneOk");b.addEventListener("click",function(){window.open("/","_self")},!0);b.addEventListener("touchend",function(){window.open("/","_self")},!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.xc,!0)});document.body.addEventListener("keydown",
Z.xc,!0)},Ai:function(){var a=document.getElementById("dialogDone");if(J){document.getElementById("dialogLinesText").textContent="";var b=10>W?X("Games_nextLevel").replace("%1",W+1):X("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==bl?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/>":"turtle"==bl&&1==W?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/>":
"turtle"==bl&&2==W&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/earrings.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/>")}c=document.getElementById("doneCancel");c.addEventListener("click",Z.Ha,!0);c.addEventListener("touchend",Z.Ha,!0);c=document.getElementById("doneOk");c.addEventListener("click",Y.Qf,!0);c.addEventListener("touchend",Y.Qf,!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
Z.xc,!0)});document.body.addEventListener("keydown",Z.xc,!0);document.getElementById("dialogDoneText").textContent=b},$g:function(a){!Z.yb||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Z.Ha(!0),a.stopPropagation(),a.preventDefault())},lg:function(){document.body.addEventListener("keydown",Z.$g,!0)},og:function(){document.body.removeEventListener("keydown",Z.$g,!0)},xc:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Qf()},
zg:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.pe()}};window.BlocklyDialogs=Z;Z.hideDialog=Z.Ha;var fl={Ok:!0};B&&D(8);var gl={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function hl(a){return gl[a]}var il=/[\x00\x22\x26\x27\x3c\x3e]/g;function jl(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function kl(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Puzzle_animal1">Elephant</span><span id="Puzzle_animal1Pic">elephant.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Elephant</span><span id="Puzzle_animal2">Ladybug</span><span id="Puzzle_animal2Pic">ladybug.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Coccinellidae</span><span id="Puzzle_animal3">Goldfish</span><span id="Puzzle_animal3Pic">goldfish.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Fish</span><span id="Puzzle_animal4">Penguin</span><span id="Puzzle_animal4Pic">penguin.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Penguin</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>'}
function ll(){var a=kl()+'<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout</button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button><button id="checkButton" class="primary">Check Answers</button></div></div><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+jl()+"</div>")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (blue), attach its picture and choose its number of legs.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang=',b;b=Uk&&Uk.Ci&&Uk.Ci===fl?Uk.content:String(Uk).replace(il,hl);return a+b+'&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>'+
jl()+'</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>'+jl()+"</div>"};var bl="puzzle";Y.Qf=function(){window.location=window.location.protocol+"//"+window.location.host+"/movie?lang="+Uk+"&level="+(W+1)};
function ml(){function a(){c.style.width=window.innerWidth-20+"px";c.style.height=window.innerHeight-c.offsetTop-15+"px"}document.body.innerHTML=ll();Y.I();var b=-1!=Tk.indexOf(Uk),c=document.getElementById("blockly");a();window.addEventListener("resize",a);Pj(document.getElementById("blockly"),{media:"media/",rtl:b,scrollbars:!1,trashcan:!1});var d=$k(W);try{var e=window.sessionStorage.we}catch(g){e=null}if(e)delete window.sessionStorage.we,b=Yf(e),Zf(J,b);else if(d)b=Yf(d),Zf(J,b);else{for(var h=
[],k=[],l=[],e=1;cl("Puzzle_animal"+e);){var m=Rb(J,"animal");m.fc(e);h.push(m);m=Rb(J,"picture");m.fc(e);k.push(m);for(var q=1;cl("Puzzle_animal"+e+"Trait"+q);)m=Rb(J,"trait"),m.fc(e,q),l.push(m),q++;e++}nl(h);nl(k);nl(l);h=[].concat(h,k,l);b&&h.reverse();for(e=0;m=h[e];e++)cg(m,!1),m.eb(),m.C();for(e=k=0;m=h[e];e++){var v=m.D().getBBox();m.ok=v.width;m.nk=v.height;m.Hg=v.width*v.height;k+=m.Hg}kj();l=Rh();l.width-=50;l.height-=50;for(e=q=0;m=h[e];e++){var v=m.D().getBBox(),t=b?v.width+q/k*l.width:
q/k*(l.width-v.width),t=Math.round(t+50*Math.random()),v=Math.round(Math.random()*(l.height-v.height));m.moveBy(t,v);q+=m.Hg}}dl("checkButton",ol);dl("helpButton",function(){pl(!0)});d||pl(!1);if(C){h=J.vb();for(e=0;m=h[e];e++)m.select();Tg(T)}U*=2;bk(["puzzle/win.mp3","puzzle/win.ogg"],"win")}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){Y.mj(kl()+'<div id="blockly"></div>')}):window.addEventListener("load",ml);
function nl(a){for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}}function el(){for(var a=[[X("Puzzle_legsChoose"),"0"]],b=1,c;c=cl("Puzzle_animal"+b+"Legs");)a[b]=[c,String(b)],b++;a.sort(function(a,b){return a[0]-b[0]});return a}
function ol(){for(var a=J.vb(),b=0,c=[],d=0,e;e=a[d];d++)e.Jf()||(b++,e.select(),c.push(e));var g=document.getElementById("graphValue");setTimeout(function(){g.style.width=100*(a.length-b)/a.length+"px"},500);1==b?d=[X("Puzzle_error1"),X("Puzzle_tryAgain")]:b?d=[X("Puzzle_error2").replace("%1",b),X("Puzzle_tryAgain")]:(d=[X("Puzzle_error0").replace("%1",a.length)],Y.Mj(),document.getElementsByClassName("secondary").addEventListener("click",Z.Ai()));e=document.getElementById("answerMessage");e.textContent=
"";for(var h=0;h<d.length;h++){var k=document.createElement("div");k.appendChild(document.createTextNode(d[h]));e.appendChild(k)}d=document.getElementById("answers");e=document.getElementById("checkButton");Z.pc(d,e,!0,!0,{width:"25%",left:-1!=Tk.indexOf(Uk)?"5%":"70%",top:"5em"},b?Z.og:Y.pe);Z.lg();if(c.length){nl(c);var l=c[0],m=function(){l.select();Z.yb&&(setTimeout(function(){Tg(l)},150),setTimeout(m,300))};m()}else setTimeout(ql,2E3),T&&Tg(T)}
function ql(){mj("win",.5);for(var a=Fa(J,!1),b=0,c;c=a[b];b++)rl(c,b/a.length*360)}
function rl(a,b){if(Z.yb){var c=J.wb(),d=c.la/2,e=c.V/2,c=a.O(),g=oi(a),h=Math.max(175,Math.min(d,e)-Math.max(g.height,g.width)/2),k=Date.now(),l=b+k/50%360,h=h*(Math.sin(k%5E3/5E3*2*Math.PI)/8+.875),e=h*Math.cos(l*Math.PI/180)+e-g.width/2,g=h*Math.sin(l*Math.PI/180)+d-g.height/2;5>Math.sqrt(Math.pow(e-c.x,2)+Math.pow(g-c.y,2))?(d=e-c.x,c=g-c.y):(c=180*Math.atan2(g-c.y,e-c.x)/Math.PI%360,c=0>360*c?c+360:c,d=Math.round(5*Math.cos(c*Math.PI/180)),c=Math.round(5*Math.sin(c*Math.PI/180)));a.moveBy(d,
c);setTimeout(rl.bind(null,a,b),50)}}function pl(a){var b=document.getElementById("help"),c=document.getElementById("helpButton");Z.pc(b,c,a,!0,{width:"50%",left:"25%",top:"5em"},Z.og);Z.lg()};
