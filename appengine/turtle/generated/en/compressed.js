// Automatically generated file.  Do not edit!
'use strict';var f,g=this;function aa(a){a=a.split(".");for(var b=g,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Yb=function(){return a.fk?a.fk:a.fk=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function l(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a){return a[ka]||(a[ka]=++la)}var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;
function ma(a,b,c){return a.call.apply(a.bind,arguments)}function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function oa(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var qa=Date.now||function(){return+new Date};function n(a,b){function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.gu=function(a,c,h){for(var k=Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-2]=arguments[m];return b.prototype[c].apply(a,k)}};/*

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
var ra={},q,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa;function Ga(a){this.Ek=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Ek[a[b]]=!0}this.reset()}Ga.prototype.reset=function(){this.hh=Object.create(null);this.Lj=Object.create(null)};Ga.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.hh)return this.hh[c];var d=Ha(this,a);return this.hh[c]=d};
function Ha(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.Lj[c+d]||c+d in a.Ek;)d=d?d+1:2;c+=d;a.Lj[c]=!0;return c}function Ia(a,b){return a.toLowerCase()==b.toLowerCase()};/*

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
function Ja(){this.de=[]}f=Ja.prototype;f.B=!1;f.Lh=Infinity;f.m=function(){this.clear()};f.oe=function(a){this.de.push(a);this.wb()};f.ng=function(a){for(var b=!1,c,d=0;c=this.de[d];d++)if(c==a){this.de.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.wb()};function Ka(a,b){var c=[].concat(a.de);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);q&&(d*=-1);c.sort(function(a,b){var c=a.ga(),m=b.ga();return c.y+d*c.x-(m.y+d*m.x)})}return c}
f.Za=function(){for(var a=Ka(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].ad());return a};f.clear=function(){for(;this.de.length;)this.de[0].m()};f.Jf=function(){return 0};function La(a,b){for(var c=a.Za(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ma(a){return Infinity==a.Lh?Infinity:a.Lh-a.Za().length}f.wb=function(){};function Na(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Oa(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function Qa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ra(a){if(!Sa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ta,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ua,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Va,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Wa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Xa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ya,"&#0;"));return a}var Ta=/&/g,Ua=/</g,Va=/>/g,Wa=/"/g,Xa=/'/g,Ya=/\x00/g,Sa=/[\x00&<>"']/;
function Za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=g.document.createElement("div");return a.replace($a,function(a,e){var h=b[a];if(h)return h;if("#"==e.charAt(0)){var k=Number("0"+e.substr(1));isNaN(k)||(h=String.fromCharCode(k))}h||(c.innerHTML=a+" ",h=c.firstChild.nodeValue.slice(0,-1));return b[a]=h})}
function ab(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var $a=/&([^;\s<&]+);?/g;function bb(a,b){return a<b?-1:a>b?1:0}function cb(){return"background-color".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function db(a){var b=l(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var eb;a:{var fb=g.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function hb(a){return-1!=eb.indexOf(a)};function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<kb.length;h++)c=kb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var nb;function ob(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ob);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}n(ob,Error);ob.prototype.name="CustomError";function pb(a,b){b.unshift(a);ob.call(this,Na.apply(null,b));b.shift()}n(pb,ob);pb.prototype.name="AssertionError";function qb(a,b){throw new pb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var rb=Array.prototype,sb=rb.indexOf?function(a,b,c){return rb.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tb=rb.forEach?function(a,b,c){rb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)},ub=rb.filter?function(a,b,c){return rb.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=
0,k=l(a)?a.split(""):a,m=0;m<d;m++)if(m in k){var p=k[m];b.call(c,p,m,a)&&(e[h++]=p)}return e},vb=rb.map?function(a,b,c){return rb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=l(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));return e},wb=rb.every?function(a,b,c){return rb.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;return!0};function xb(a,b){return 0<=sb(a,b)}
function yb(a,b){var c=sb(a,b),d;(d=0<=c)&&rb.splice.call(a,c,1);return d}function zb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}}function Bb(a,b,c,d){rb.splice.apply(a,Cb(arguments,1))}function Cb(a,b,c){return 2>=arguments.length?rb.slice.call(a,b):rb.slice.call(a,b,c)};var Db=hb("Opera")||hb("OPR"),r=hb("Trident")||hb("MSIE"),Eb=hb("Gecko")&&-1==eb.toLowerCase().indexOf("webkit")&&!(hb("Trident")||hb("MSIE")),t=-1!=eb.toLowerCase().indexOf("webkit"),Fb=t&&hb("Mobile"),Gb=hb("Macintosh"),Hb,Ib=g.navigator||null;Hb=!!Ib&&-1!=(Ib.appVersion||"").indexOf("X11");var Jb=hb("Android"),Kb=hb("iPhone")&&!hb("iPod")&&!hb("iPad"),Lb=hb("iPad");function Mb(){var a=g.document;return a?a.documentMode:void 0}
var Nb=function(){var a="",b;if(Db&&g.opera)return a=g.opera.version,ha(a)?a():a;Eb?b=/rv\:([^\);]+)(\)|;)/:r?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:t&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(eb))?a[1]:"");return r&&(b=Mb(),b>parseFloat(a))?String(b):a}(),Ob={};
function Pb(a){var b;if(!(b=Ob[a])){b=0;for(var c=Pa(String(Nb)).split("."),d=Pa(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||"",m=d[h]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var x=p.exec(k)||["","",""],E=y.exec(m)||["","",""];if(0==x[0].length&&0==E[0].length)break;b=bb(0==x[1].length?0:parseInt(x[1],10),0==E[1].length?0:parseInt(E[1],10))||bb(0==x[2].length,0==E[2].length)||bb(x[2],E[2])}while(0==b)}b=Ob[a]=0<=b}return b}
var Qb=g.document,Rb=Qb&&r?Mb()||("CSS1Compat"==Qb.compatMode?parseInt(Nb,10):5):void 0;function Sb(a,b){this.width=a;this.height=b}f=Sb.prototype;f.clone=function(){return new Sb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.gk=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=ga(b)?b:a;this.width*=a;this.height*=c;return this};/*

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
function Tb(a){this.Aa=new Sb(0,25);this.ia(a)}f=Tb.prototype;f.h=null;f.oa=!0;f.clone=function(){qb("There should never be an instance of Field, only its derived classes.")};f.xd=!0;f.g=function(a){this.h||(this.h=a,this.la=u("g",{},null),this.Cb=u("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.la),this.Ja=u("text",{"class":"blocklyText"},this.la),this.qc(),a.W().appendChild(this.la),this.Mh=v(this.la,"mouseup",this,this.Qh),Ub(this))};
f.m=function(){this.Mh&&(w(this.Mh),this.Mh=null);this.h=null;Vb(this.la);this.Cb=this.Ja=this.la=null};f.qc=function(){this.xd&&(this.h.uc&&!z?(Wb(this.la,"blocklyEditableText"),Xb(this.la,"blocklyNoNEditableText"),this.la.style.cursor=this.df):(Wb(this.la,"blocklyNonEditableText"),Xb(this.la,"blocklyEditableText"),this.la.style.cursor=""))};f.J=function(){return this.oa};f.O=function(a){if(this.oa!=a){this.oa=a;var b=this.W();b&&(b.style.display=a?"block":"none",this.Zd())}};f.W=function(){return this.la};
f.Zd=function(){if(this.oa){try{var a=this.Ja.getComputedTextLength()}catch(b){a=8*this.Ja.textContent.length}this.Cb&&this.Cb.setAttribute("width",a+10)}else a=0;this.Aa.width=a};f.Nd=function(){this.Aa.width||this.Zd();return this.Aa};f.fb=function(){return this.Ka};f.ia=function(a){null!==a&&a!==this.Ka&&(this.Ka=a,Ub(this),this.h&&this.h.B&&(this.h.F(),this.h.Ma(),this.h.t.wb()))};
function Ub(a){if(a.Ja){var b=a.Ka;Yb(a.Ja);b=b.replace(/\s/g,"\u00a0");q&&b&&(b+="\u200f");b||(b="\u00a0");a.Ja.appendChild(document.createTextNode(b));a.Aa.width=0}}f.Fa=function(){return this.fb()};f.ja=function(a){this.ia(a)};f.Qh=function(a){if(!Kb&&!Lb||0===a.layerX||0===a.layerY)$b(a)||2!=ac&&this.h.uc&&!z&&this.vg()};f.i=function(){};/*

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
function bc(){for(var a=B.Za(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].If;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(cc);b.sort(cc);return[c,b]}function cc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}function dc(a,b){if(b.ac)return a;for(;!ec(a,b.t,b);){var c=a.match(/^(.*?)(\d+)$/);a=c?c[1]+(parseInt(c[2],10)+1):a+"2"}return a}
function ec(a,b,c){b=b.Za();for(var d=0;d<b.length;d++)if(b[d]!=c){var e=b[d].If;if(e&&(e=e.call(b[d]),Ia(e[0],a)))return!1}return!0}function fc(a){a=a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");a=dc(a,this.h);for(var b=this.h.t.Za(),c=0;c<b.length;c++){var d=b[c].Zh;d&&d.call(b[c],this.Ka,a)}return a}
function gc(a,b,c,d){function e(e,h){for(var p=0;p<e.length;p++){var y=hc(d,h);ic(y,e[p][0],"NAME");for(var x=[],E=0;E<e[p][1].length;E++)x[E]="ARG"+E;y.be(e[p][1],x);y.ra();a.push(y);b.push(2*c)}}if(C.procedures_defnoreturn){var h=hc(d,"procedures_defnoreturn");h.ra();a.push(h);b.push(2*c)}C.procedures_defreturn&&(h=hc(d,"procedures_defreturn"),h.ra(),a.push(h),b.push(2*c));C.procedures_ifreturn&&(h=hc(d,"procedures_ifreturn"),h.ra(),a.push(h),b.push(2*c));b.length&&(b[b.length-1]=3*c);h=bc();e(h[0],
"procedures_callnoreturn");e(h[1],"procedures_callreturn")}function jc(a,b){for(var c=[],d=b.Za(),e=0;e<d.length;e++){var h=d[e].Ld;h&&(h=h.call(d[e]))&&Ia(h,a)&&c.push(d[e])}return c}function kc(a,b,c,d){a=jc(a,b);for(b=0;b<a.length;b++)a[b].be(c,d)}function lc(a,b){for(var c=b.Za(),d=0;d<c.length;d++){var e=c[d].If;if(e&&(e=e.call(c[d]))&&Ia(e[0],a))return c[d]}return null};function mc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=mc.prototype;f.clone=function(){return new mc(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof mc?(this.x+=a.x,this.y+=a.y):(this.x+=a,ga(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.x*=a;this.y*=c;return this};function nc(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=nc.prototype;f.Jf=function(){return this.right-this.left};f.clone=function(){return new nc(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof nc?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ia(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,ga(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function oc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=oc.prototype;f.clone=function(){return new oc(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof oc?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Nd=function(){return new Sb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.top+=a.y):(this.left+=a,ga(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function pc(){this.si="";this.Pp=qc}pc.prototype.Qd=!0;pc.prototype.Od=function(){return this.si};pc.prototype.toString=function(){return"Const{"+this.si+"}"};function rc(a){if(a instanceof pc&&a.constructor===pc&&a.Pp===qc)return a.si;qb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var qc={};function sc(){this.Fc="";this.Np=tc}f=sc.prototype;f.Qd=!0;f.Od=function(){return this.Fc};f.Ch=!0;f.ye=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Fc+"}"};var tc={};var uc=mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function vc(){this.gg="";this.Mp=wc}vc.prototype.Qd=!0;var wc={};vc.prototype.Od=function(){return this.gg};vc.prototype.toString=function(){return"SafeStyle{"+this.gg+"}"};function xc(a){var b=new vc;b.gg=a;return b}var yc=xc("");
function zc(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof pc?d=rc(d):Ac.test(d)||(qb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?xc(b):yc}var Ac=/^[-.%_!# a-zA-Z0-9]+$/;function Bc(){this.Xh="";this.Nq=Cc}f=Bc.prototype;f.Qd=!0;f.Od=function(){return this.Xh};f.Ch=!0;f.ye=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.Xh+"}"};var Cc={};function Dc(){this.Fc="";this.Lp=Ec;this.Sj=null}f=Dc.prototype;f.Ch=!0;f.ye=function(){return this.Sj};f.Qd=!0;f.Od=function(){return this.Fc};f.toString=function(){return"SafeHtml{"+this.Fc+"}"};function Fc(a){if(a instanceof Dc&&a.constructor===Dc&&a.Lp===Ec)return a.Fc;qb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function Gc(a){if(a instanceof Dc)return a;var b=null;a.Ch&&(b=a.ye());return Hc(Ra(a.Qd?a.Od():String(a)),b)}
var Ic=/^[a-zA-Z0-9-]+$/,Jc=mb("action","cite","data","formaction","href","manifest","poster","src"),Kc=mb("embed","iframe","link","object","script","style","template");
function Lc(a,b,c){if(!Ic.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in Kc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var h in b){if(!Ic.test(h))throw Error('Invalid attribute name "'+h+'".');var k=b[h];if(null!=k){var m,p=a;m=h;if(k instanceof pc)k=rc(k);else if("style"==m.toLowerCase()){if(!ia(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof k+" given: "+k);k instanceof vc||
(k=zc(k));p=void 0;k instanceof vc&&k.constructor===vc&&k.Mp===wc?p=k.gg:(qb("expected object of type SafeStyle, got '"+k+"'"),p="type_error:SafeStyle");k=p}else{if(/^on/i.test(m))throw Error('Attribute "'+m+'" requires goog.string.Const value, "'+k+'" given.');if(m.toLowerCase()in Jc)if(k instanceof Bc)k instanceof Bc&&k.constructor===Bc&&k.Nq===Cc?k=k.Xh:(qb("expected object of type TrustedResourceUrl, got '"+k+"'"),k="type_error:TrustedResourceUrl");else if(k instanceof sc)k instanceof sc&&k.constructor===
sc&&k.Np===tc?k=k.Fc:(qb("expected object of type SafeUrl, got '"+k+"'"),k="type_error:SafeUrl");else throw Error('Attribute "'+m+'" on tag "'+p+'" requires goog.html.SafeUrl or goog.string.Const value, "'+k+'" given.');}k.Qd&&(k=k.Od());m=m+'="'+Ra(String(k))+'"';e+=" "+m}}void 0!==c?ea(c)||(c=[c]):c=[];!0===uc[a.toLowerCase()]?e+=">":(d=Mc(c),e+=">"+Fc(d)+"</"+a+">",d=d.ye());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return Hc(e,d)}
function Mc(a){function b(a){ea(a)?tb(a,b):(a=Gc(a),d+=Fc(a),a=a.ye(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";tb(arguments,b);return Hc(d,c)}var Ec={};function Hc(a,b){var c=new Dc;c.Fc=a;c.Sj=b;return c}var Nc=Hc("",0);function Oc(a,b){a.innerHTML=Fc(b)};var Pc=!r||r&&9<=Rb,Qc=!Eb&&!r||r&&r&&9<=Rb||Eb&&Pb("1.9.1"),Rc=r&&!Pb("9");function Sc(a){return a?new Tc(Uc(a)):nb||(nb=new Tc)}
function Vc(a,b){var c=document,c=b||c;if(c.querySelectorAll&&c.querySelector)return c.querySelectorAll("TBODY"+(a?"."+a:""));if(a&&c.getElementsByClassName){for(var c=c.getElementsByClassName(a),d={},e=0,h=0,k;k=c[h];h++)"TBODY"==k.nodeName&&(d[e++]=k);d.length=e;return d}c=c.getElementsByTagName("TBODY");if(a){d={};for(h=e=0;k=c[h];h++){var m=k.className;"function"==typeof m.split&&xb(m.split(/\s+/),a)&&(d[e++]=k)}d.length=e;return d}return c}
function Wc(a,b){ib(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Xc?a.setAttribute(Xc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Sb(a.clientWidth,a.clientHeight)}function D(a,b,c){return Zc(document,arguments)}
function Zc(a,b){var c=b[0],d=b[1];if(!Pc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ra(d.name),'"');if(d.type){c.push(' type="',Ra(d.type),'"');var e={};lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(l(d)?c.className=d:ea(d)?c.className=d.join(" "):Wc(c,d));2<b.length&&$c(a,c,b,2);return c}
function $c(a,b,c,d){function e(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var h=c[d];!fa(h)||ia(h)&&0<h.nodeType?e(h):tb(ad(h)?zb(h):h,e)}}function Yb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function bd(a){var b=B.o;b.parentNode&&b.parentNode.insertBefore(a,b)}function Vb(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function cd(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function Uc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function dd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Yb(a),a.appendChild(Uc(a).createTextNode(String(b)))}var ed={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},fd={IMG:" ",BR:"\n"};function gd(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function hd(a){a=a.tabIndex;return ga(a)&&0<=a&&32768>a}
function id(a){if(Rc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];jd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Rc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}function kd(a){var b=[];jd(a,b,!1);return b.join("")}
function jd(a,b,c){if(!(a.nodeName in ed))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in fd)b.push(fd[a.nodeName]);else for(a=a.firstChild;a;)jd(a,b,c),a=a.nextSibling}function ad(a){if(a&&"number"==typeof a.length){if(ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(ha(a))return"function"==typeof a.item}return!1}function Tc(a){this.Vb=a||g.document||document}f=Tc.prototype;f.eb=Sc;
f.n=function(a){return l(a)?this.Vb.getElementById(a):a};f.H=function(a,b,c){return Zc(this.Vb,arguments)};f.createElement=function(a){return this.Vb.createElement(a)};f.createTextNode=function(a){return this.Vb.createTextNode(String(a))};f.xj=function(a,b,c){var d=this.Vb;c=!!c;for(var e=d.createElement("TABLE"),h=e.appendChild(d.createElement("TBODY")),k=0;k<a;k++){for(var m=d.createElement("TR"),p=0;p<b;p++){var y=d.createElement("TD");c&&dd(y,"\u00a0");m.appendChild(y)}h.appendChild(m)}return e};
f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){$c(Uc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Dk=Yb;f.removeNode=Vb;f.ad=function(a){return Qc&&void 0!=a.children?a.children:ub(a.childNodes,function(a){return 1==a.nodeType})};f.contains=cd;f.kc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!gd(a)||hd(a)):gd(a)&&hd(a))&&r?(a=ha(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};var ld={};function md(a,b){var c=Uc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function nd(a,b){return md(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function od(){var a=document,b=a.body,a=a.documentElement;return new mc(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function pd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}r&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function qd(a){if(r&&!(r&&8<=Rb))return a.offsetParent;var b=Uc(a),c=nd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=nd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function rd(a){var b,c=Uc(a),d=nd(a,"position"),e=Eb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),h=new mc(0,0),k;b=c?Uc(c):document;(k=!r||r&&9<=Rb)||(k="CSS1Compat"==Sc(b).Vb.compatMode);k=k?b.documentElement:b.body;if(a==k)return h;if(a.getBoundingClientRect)b=pd(a),c=Sc(c).Vb,a=t||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=r&&Pb("10")&&c.pageYOffset!=a.scrollTop?new mc(a.scrollLeft,
a.scrollTop):new mc(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),h.x=b.left+a.x,h.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(k),h.x=b.screenX-a.screenX,h.y=b.screenY-a.screenY;else{b=a;do{h.x+=b.offsetLeft;h.y+=b.offsetTop;b!=a&&(h.x+=b.clientLeft||0,h.y+=b.clientTop||0);if(t&&"fixed"==nd(b,"position")){h.x+=c.body.scrollLeft;h.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Db||t&&"absolute"==d)h.y-=c.body.offsetTop;for(b=a;(b=qd(b))&&
b!=c.body&&b!=k;)h.x-=b.scrollLeft,Db&&"TR"==b.tagName||(h.y-=b.scrollTop)}return h}function sd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function td(a){return ud(a)}function ud(a){var b=vd;if("none"!=nd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=h;c.visibility=e;return a}
function vd(a){var b=a.offsetWidth,c=a.offsetHeight,d=t&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=pd(a),new Sb(a.right-a.left,a.bottom-a.top)):new Sb(b,c)}function wd(a){var b=rd(a);a=ud(a);return new oc(b.x,b.y,a.width,a.height)}function xd(a,b){a.style.display=b?"":"none"}var yd=Eb?"MozUserSelect":t?"WebkitUserSelect":null;
function zd(a,b,c){c=c?null:a.getElementsByTagName("*");if(yd){if(b=b?"none":"",a.style[yd]=b,c){a=0;for(var d;d=c[a];a++)d.style[yd]=b}}else if(r||Db)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var Ad={thin:2,medium:4,thick:6};
function Bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in Ad)d=Ad[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function Cd(a){if(r&&!(r&&9<=Rb)){var b=Bd(a,"borderLeft"),c=Bd(a,"borderRight"),d=Bd(a,"borderTop");a=Bd(a,"borderBottom");return new nc(d,c,a,b)}b=md(a,"borderLeftWidth");c=md(a,"borderRightWidth");d=md(a,"borderTopWidth");a=md(a,"borderBottomWidth");return new nc(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var Dd="closure_listenable_"+(1E6*Math.random()|0),Ed=0;function Fd(a,b,c,d,e){this.fd=a;this.hg=null;this.src=b;this.type=c;this.rf=!!d;this.Lf=e;this.key=++Ed;this.Yd=this.pf=!1}function Gd(a){a.Yd=!0;a.fd=null;a.hg=null;a.src=null;a.Lf=null};function Hd(a){this.src=a;this.ib={};this.$e=0}Hd.prototype.add=function(a,b,c,d,e){var h=a.toString();a=this.ib[h];a||(a=this.ib[h]=[],this.$e++);var k=Id(a,b,d,e);-1<k?(b=a[k],c||(b.pf=!1)):(b=new Fd(b,this.src,h,!!d,e),b.pf=c,a.push(b));return b};Hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.ib))return!1;var e=this.ib[a];b=Id(e,b,c,d);return-1<b?(Gd(e[b]),rb.splice.call(e,b,1),0==e.length&&(delete this.ib[a],this.$e--),!0):!1};
function Jd(a,b){var c=b.type;if(!(c in a.ib))return!1;var d=yb(a.ib[c],b);d&&(Gd(b),0==a.ib[c].length&&(delete a.ib[c],a.$e--));return d}Hd.prototype.lg=function(a){a=a&&a.toString();var b=0,c;for(c in this.ib)if(!a||c==a){for(var d=this.ib[c],e=0;e<d.length;e++)++b,Gd(d[e]);delete this.ib[c];this.$e--}return b};Hd.prototype.ze=function(a,b,c,d){a=this.ib[a.toString()];var e=-1;a&&(e=Id(a,b,c,d));return-1<e?a[e]:null};
function Id(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Yd&&h.fd==b&&h.rf==!!c&&h.Lf==d)return e}return-1};var Kd=!r||r&&9<=Rb,Ld=!r||r&&9<=Rb,Md=r&&!Pb("9");!t||Pb("528");Eb&&Pb("1.9b")||r&&Pb("8")||Db&&Pb("9.5")||t&&Pb("528");Eb&&!Pb("8")||r&&Pb("9");var Nd="ontouchstart"in g||!!(g.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!g.navigator||!g.navigator.msMaxTouchPoints);function Od(){0!=Pd&&(Qd[ja(this)]=this);this.se=this.se;this.bg=this.bg}var Pd=0,Qd={};Od.prototype.se=!1;Od.prototype.m=function(){if(!this.se&&(this.se=!0,this.Z(),0!=Pd)){var a=ja(this);delete Qd[a]}};Od.prototype.Z=function(){if(this.bg)for(;this.bg.length;)this.bg.shift()()};function Rd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.kd=!1;this.Gk=!0}Rd.prototype.Z=function(){};Rd.prototype.m=function(){};Rd.prototype.stopPropagation=function(){this.kd=!0};Rd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Gk=!1};function Sd(a){Sd[" "](a);return a}Sd[" "]=ba;function Td(a,b){Rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Th=!1;this.cb=null;a&&this.g(a,b)}n(Td,Rd);var Ud=[1,4,2];f=Td.prototype;
f.g=function(a,b){this.cb=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Eb){var e;a:{try{Sd(d.nodeName);e=!0;break a}catch(h){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.Zj,set:this.Is},offsetY:{configurable:!0,enumerable:!0,get:this.$j,set:this.Js}}):(this.offsetX=this.Zj(),
this.offsetY=this.$j());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Th=Gb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Vd(a){return Kd?0==a.cb.button:"click"==a.type?!0:!!(a.cb.button&Ud[0])}f.stopPropagation=function(){Td.k.stopPropagation.call(this);this.cb.stopPropagation?this.cb.stopPropagation():this.cb.cancelBubble=!0};f.preventDefault=function(){Td.k.preventDefault.call(this);var a=this.cb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Md)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.Z=function(){};
f.Zj=function(){return t||void 0!==this.cb.offsetX?this.cb.offsetX:this.cb.layerX};f.Is=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.$j=function(){return t||void 0!==this.cb.offsetY?this.cb.offsetY:this.cb.layerY};f.Js=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Wd="closure_lm_"+(1E6*Math.random()|0),Xd={},Yd=0;function Zd(a,b,c,d,e){if(ea(b)){for(var h=0;h<b.length;h++)Zd(a,b[h],c,d,e);return null}c=$d(c);if(a&&a[Dd])a=a.N(b,c,d,e);else{if(!b)throw Error("Invalid event type");var h=!!d,k=ae(a);k||(a[Wd]=k=new Hd(a));c=k.add(b,c,!1,d,e);c.hg||(d=be(),c.hg=d,d.src=a,d.fd=c,a.addEventListener?a.addEventListener(b.toString(),d,h):a.attachEvent(ce(b.toString()),d),Yd++);a=c}return a}
function be(){var a=de,b=Ld?function(c){return a.call(b.src,b.fd,c)}:function(c){c=a.call(b.src,b.fd,c);if(!c)return c};return b}function ee(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)ee(a,b[h],c,d,e);else c=$d(c),a&&a[Dd]?a.Kb(b,c,d,e):a&&(a=ae(a))&&(b=a.ze(b,c,!!d,e))&&fe(b)}
function fe(a){if(ga(a)||!a||a.Yd)return!1;var b=a.src;if(b&&b[Dd])return Jd(b.vc,a);var c=a.type,d=a.hg;b.removeEventListener?b.removeEventListener(c,d,a.rf):b.detachEvent&&b.detachEvent(ce(c),d);Yd--;(c=ae(b))?(Jd(c,a),0==c.$e&&(c.src=null,b[Wd]=null)):Gd(a);return!0}function ce(a){return a in Xd?Xd[a]:Xd[a]="on"+a}function ge(a,b,c,d){var e=!0;if(a=ae(a))if(b=a.ib[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.rf==c&&!h.Yd&&(h=he(h,d),e=e&&!1!==h)}return e}
function he(a,b){var c=a.fd,d=a.Lf||a.src;a.pf&&fe(a);return c.call(d,b)}
function de(a,b){if(a.Yd)return!0;if(!Ld){var c=b||aa("window.event"),d=new Td(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var h=a.type,m=c.length-1;!d.kd&&0<=m;m--){d.currentTarget=c[m];var p=ge(c[m],h,!0,d),e=e&&p}for(m=0;!d.kd&&m<c.length;m++)d.currentTarget=c[m],p=ge(c[m],h,!1,d),e=e&&p}return e}return he(a,new Td(b,
this))}function ae(a){a=a[Wd];return a instanceof Hd?a:null}var ie="__closure_events_fn_"+(1E9*Math.random()>>>0);function $d(a){if(ha(a))return a;a[ie]||(a[ie]=function(b){return a.handleEvent(b)});return a[ie]};function je(a){Od.call(this);this.ck=a;this.Vf={}}n(je,Od);var ke=[];f=je.prototype;f.N=function(a,b,c,d){ea(b)||(b&&(ke[0]=b.toString()),b=ke);for(var e=0;e<b.length;e++){var h=Zd(a,b[e],c||this.handleEvent,d||!1,this.ck||this);if(!h)break;this.Vf[h.key]=h}return this};
f.Kb=function(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)this.Kb(a,b[h],c,d,e);else c=c||this.handleEvent,e=e||this.ck||this,c=$d(c),d=!!d,b=a&&a[Dd]?a.ze(b,c,d,e):a?(a=ae(a))?a.ze(b,c,d,e):null:null,b&&(fe(b),delete this.Vf[b.key]);return this};f.lg=function(){ib(this.Vf,fe);this.Vf={}};f.Z=function(){je.k.Z.call(this);this.lg()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function le(){}ca(le);le.prototype.ls=0;function me(){Od.call(this);this.vc=new Hd(this);this.Zq=this;this.Sh=null}n(me,Od);me.prototype[Dd]=!0;f=me.prototype;f.Gf=function(){return this.Sh};f.tg=function(a){this.Sh=a};f.addEventListener=function(a,b,c,d){Zd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){ee(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.Gf();if(c)for(b=[];c;c=c.Gf())b.push(c);var c=this.Zq,d=a.type||a;if(l(a))a=new Rd(a,c);else if(a instanceof Rd)a.target=a.target||c;else{var e=a;a=new Rd(d,c);lb(a,e)}var e=!0,h;if(b)for(var k=b.length-1;!a.kd&&0<=k;k--)h=a.currentTarget=b[k],e=ne(h,d,!0,a)&&e;a.kd||(h=a.currentTarget=c,e=ne(h,d,!0,a)&&e,a.kd||(e=ne(h,d,!1,a)&&e));if(b)for(k=0;!a.kd&&k<b.length;k++)h=a.currentTarget=b[k],e=ne(h,d,!1,a)&&e;return e};
f.Z=function(){me.k.Z.call(this);this.vc&&this.vc.lg(void 0);this.Sh=null};f.N=function(a,b,c,d){return this.vc.add(String(a),b,!1,c,d)};f.Kb=function(a,b,c,d){return this.vc.remove(String(a),b,c,d)};function ne(a,b,c,d){b=a.vc.ib[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Yd&&k.rf==c){var m=k.fd,p=k.Lf||k.src;k.pf&&Jd(a.vc,k);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Gk}f.ze=function(a,b,c,d){return this.vc.ze(String(a),b,c,d)};function oe(a){me.call(this);this.wf=a||Sc();this.qg=pe;this.Of=null;this.Q=!1;this.D=null;this.xc=void 0;this.rc=this.qa=this.ab=this.Zf=null;this.Xs=!1}n(oe,me);oe.prototype.Ur=le.Yb();var pe=null;
function qe(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function re(a){return a.Of||(a.Of=":"+(a.Ur.ls++).toString(36))}f=oe.prototype;f.n=function(){return this.D};function se(a){a.xc||(a.xc=new je(a));return a.xc}
f.bb=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.ab&&this.Of&&te(this.ab,this.Of)&&this.ab!=a)throw Error("Unable to set parent component");this.ab=a;oe.k.tg.call(this,a)};f.getParent=function(){return this.ab};f.tg=function(a){if(this.ab&&this.ab!=a)throw Error("Method not supported");oe.k.tg.call(this,a)};f.eb=function(){return this.wf};f.H=function(){this.D=this.wf.createElement("div")};f.F=function(a){this.Zd(a)};
f.Zd=function(a,b){if(this.Q)throw Error("Component already rendered");this.D||this.H();a?a.insertBefore(this.D,b||null):this.wf.Vb.body.appendChild(this.D);this.ab&&!this.ab.Q||this.ya()};f.ya=function(){this.Q=!0;ue(this,function(a){!a.Q&&a.n()&&a.ya()})};f.Db=function(){ue(this,function(a){a.Q&&a.Db()});this.xc&&this.xc.lg();this.Q=!1};
f.Z=function(){this.Q&&this.Db();this.xc&&(this.xc.m(),delete this.xc);ue(this,function(a){a.m()});!this.Xs&&this.D&&Vb(this.D);this.ab=this.Zf=this.D=this.rc=this.qa=null;oe.k.Z.call(this)};f.ne=function(a,b){this.Bd(a,ve(this),b)};
f.Bd=function(a,b,c){if(a.Q&&(c||!this.Q))throw Error("Component already rendered");if(0>b||b>ve(this))throw Error("Child component index out of bounds");this.rc&&this.qa||(this.rc={},this.qa=[]);if(a.getParent()==this){var d=re(a);this.rc[d]=a;yb(this.qa,a)}else{var d=this.rc,e=re(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.bb(this);Bb(this.qa,b,0,a);a.Q&&this.Q&&a.getParent()==this?(c=this.xb(),b=c.childNodes[b]||null,b!=a.n()&&c.insertBefore(a.n(),b)):c?(this.D||
this.H(),b=we(this,b+1),a.Zd(this.xb(),b?b.D:null)):this.Q&&!a.Q&&a.D&&a.D.parentNode&&1==a.D.parentNode.nodeType&&a.ya()};f.xb=function(){return this.D};function xe(a){null==a.qg&&(a.qg="rtl"==nd(a.Q?a.D:a.wf.Vb.body,"direction"));return a.qg}f.Ue=function(a){if(this.Q)throw Error("Component already rendered");this.qg=a};function ye(a){return!!a.qa&&0!=a.qa.length}function ve(a){return a.qa?a.qa.length:0}function te(a,b){var c;a.rc&&b?(c=a.rc,c=(b in c?c[b]:void 0)||null):c=null;return c}
function we(a,b){return a.qa?a.qa[b]||null:null}function ue(a,b,c){a.qa&&tb(a.qa,b,c)}function ze(a,b){return a.qa&&b?sb(a.qa,b):-1}f.removeChild=function(a,b){if(a){var c=l(a)?a:re(a);a=te(this,c);if(c&&a){var d=this.rc;c in d&&delete d[c];yb(this.qa,a);b&&(a.Db(),a.D&&Vb(a.D));a.bb(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Dk=function(a){for(var b=[];ye(this);)b.push(this.removeChild(we(this,0),a));return b};function Ae(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}function Be(a,b){return a.classList?a.classList.contains(b):xb(Ae(a),b)}function Ce(a,b){a.classList?a.classList.add(b):Be(a,b)||(a.className+=0<a.className.length?" "+b:b)}function De(a,b){if(a.classList)tb(b,function(b){Ce(a,b)});else{var c={};tb(Ae(a),function(a){c[a]=!0});tb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Ee(a,b){a.classList?a.classList.remove(b):Be(a,b)&&(a.className=ub(Ae(a),function(a){return a!=b}).join(" "))}function Fe(a,b){a.classList?tb(b,function(b){Ee(a,b)}):a.className=ub(Ae(a),function(a){return!xb(b,a)}).join(" ")};function Ge(a,b){if(!a)throw Error("Invalid class name "+a);if(!ha(b))throw Error("Invalid decorator function "+b);}var He={};var Ie;function Je(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function Ke(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Ie||(Ie={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Ie,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Le(a){a.removeAttribute("aria-activedescendant")}function Me(a,b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)};function Ne(){}var Oe;ca(Ne);var Pe={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=Ne.prototype;f.yf=function(){};f.H=function(a){return a.eb().H("div",this.xe(a).join(" "),a.Xa)};f.xb=function(a){return a};f.te=function(a,b,c){if(a=a.n?a.n():a){var d=[b];r&&!Pb("7")&&(d=Qe(Ae(a),b),d.push(b));(c?De:Fe)(a,d)}};f.Je=function(a){xe(a)&&this.Ue(a.n(),!0);a.isEnabled()&&this.Jc(a,a.J())};
function Re(a,b,c){if(a=c||a.yf())c=b.getAttribute("role")||null,a!=c&&Je(b,a)}function Se(a,b){a.J()||Ke(b,"hidden",!a.J());a.isEnabled()||Te(b,1,!a.isEnabled());a.ua&8&&Te(b,8,a.Sf());a.ua&16&&Te(b,16,!!(a.$&16));a.ua&64&&Te(b,64,a.Rd())}f.ei=function(a,b){zd(a,!b,!r&&!Db)};f.Ue=function(a,b){this.te(a,this.U()+"-rtl",b)};f.kc=function(a){var b;return a.ua&32&&(b=a.Ea())?gd(b)&&hd(b):!1};
f.Jc=function(a,b){var c;if(a.ua&32&&(c=a.Ea())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.Ee(null)}(gd(c)&&hd(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.O=function(a,b){xd(a,b);a&&Ke(a,"hidden",!b)};f.Qb=function(a,b,c){var d=a.n();if(d){var e=this.Bf(b);e&&this.te(a,e,c);Te(d,b,c)}};
function Te(a,b,c){Oe||(Oe={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=Oe[b];var d=a.getAttribute("role")||null;d&&(d=Pe[d]||b,b="checked"==b||"selected"==b?d:b);b&&Ke(a,b,c)}f.qd=function(a,b){var c=this.xb(a);if(c&&(Yb(c),b))if(l(b))dd(c,b);else{var d=function(a){if(a){var b=Uc(c);c.appendChild(l(a)?b.createTextNode(a):a)}};ea(b)?tb(b,d):!fa(b)||"nodeType"in b?d(b):tb(zb(b),d)}};f.Ea=function(a){return a.n()};f.U=function(){return"goog-control"};
f.xe=function(a){var b=this.U(),c=[b],d=this.U();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.Bf(e));b&=~e}c.push.apply(c,d);(a=a.Xb)&&c.push.apply(c,a);r&&!Pb("7")&&c.push.apply(c,Qe(c));return c};function Qe(a,b){var c=[];b&&(a=a.concat([b]));tb([],function(d){!wb(d,pa(xb,a))||b&&!xb(d,b)||c.push(d.join("_"))});return c}
f.Bf=function(a){if(!this.qj){var b=this.U();b.replace(/\xa0|\s/g," ");this.qj={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.qj[a]};function Ue(a,b,c,d,e){if(!(r||t&&Pb("525")))return!0;if(Gb&&e)return Ve(a);if(e&&!d)return!1;ga(b)&&(b=We(b));if(!c&&(17==b||18==b||Gb&&91==b))return!1;if(t&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(r&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!t}return Ve(a)}
function Ve(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||t&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function We(a){if(Eb)a=Xe(a);else if(Gb&&t)a:switch(a){case 93:a=91;break a}return a}
function Xe(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Ye(a,b){me.call(this);a&&Ze(this,a,b)}n(Ye,me);f=Ye.prototype;f.D=null;f.Tf=null;f.Fh=null;f.Uf=null;f.yb=-1;f.Bc=-1;f.Sg=!1;
var $e={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},af={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},bf=r||t&&Pb("525"),cf=Gb&&Eb;f=Ye.prototype;
f.Mr=function(a){t&&(17==this.yb&&!a.ctrlKey||18==this.yb&&!a.altKey||Gb&&91==this.yb&&!a.metaKey)&&(this.Bc=this.yb=-1);-1==this.yb&&(a.ctrlKey&&17!=a.keyCode?this.yb=17:a.altKey&&18!=a.keyCode?this.yb=18:a.metaKey&&91!=a.keyCode&&(this.yb=91));bf&&!Ue(a.keyCode,this.yb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Bc=We(a.keyCode),cf&&(this.Sg=a.altKey))};f.Nr=function(a){this.Bc=this.yb=-1;this.Sg=a.altKey};
f.handleEvent=function(a){var b=a.cb,c,d,e=b.altKey;r&&"keypress"==a.type?(c=this.Bc,d=13!=c&&27!=c?b.keyCode:0):t&&"keypress"==a.type?(c=this.Bc,d=0<=b.charCode&&63232>b.charCode&&Ve(c)?b.charCode:0):Db?(c=this.Bc,d=Ve(c)?b.keyCode:0):(c=b.keyCode||this.Bc,d=b.charCode||0,cf&&(e=this.Sg),Gb&&63==d&&224==c&&(c=191));var h=c=We(c),k=b.keyIdentifier;c?63232<=c&&c in $e?h=$e[c]:25==c&&a.shiftKey&&(h=9):k&&k in af&&(h=af[k]);a=h==this.yb;this.yb=h;b=new df(h,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.n=function(){return this.D};function Ze(a,b,c){a.Uf&&a.detach();a.D=b;a.Tf=Zd(a.D,"keypress",a,c);a.Fh=Zd(a.D,"keydown",a.Mr,c,a);a.Uf=Zd(a.D,"keyup",a.Nr,c,a)}f.detach=function(){this.Tf&&(fe(this.Tf),fe(this.Fh),fe(this.Uf),this.Uf=this.Fh=this.Tf=null);this.D=null;this.Bc=this.yb=-1};f.Z=function(){Ye.k.Z.call(this);this.detach()};function df(a,b,c,d){Td.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}n(df,Td);function ef(a,b,c){oe.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ja(b);if(d=He[d])break;b=b.k?b.k.constructor:null}b=d?ha(d.Yb)?d.Yb():new d:null}this.L=b;this.sg(void 0!==a?a:null)}n(ef,oe);f=ef.prototype;f.Xa=null;f.$=0;f.ua=39;f.Yg=255;f.ud=0;f.oa=!0;f.Xb=null;f.Ge=!0;f.Rg=!1;f.ys=null;f.Ea=function(){return this.L.Ea(this)};f.Ff=function(){return this.$a||(this.$a=new Ye)};
f.te=function(a,b){b?a&&(this.Xb?xb(this.Xb,a)||this.Xb.push(a):this.Xb=[a],this.L.te(this,a,!0)):a&&this.Xb&&yb(this.Xb,a)&&(0==this.Xb.length&&(this.Xb=null),this.L.te(this,a,!1))};f.H=function(){var a=this.L.H(this);this.D=a;Re(this.L,a,this.Hf());this.Rg||this.L.ei(a,!1);this.J()||this.L.O(a,!1)};f.Hf=function(){return this.ys};f.xb=function(){return this.L.xb(this.n())};
f.ya=function(){ef.k.ya.call(this);Se(this,this.D);this.L.Je(this);if(this.ua&-2&&(this.Ge&&ff(this,!0),this.ua&32)){var a=this.Ea();if(a){var b=this.Ff();Ze(b,a);se(this).N(b,"key",this.Fb).N(a,"focus",this.Kf).N(a,"blur",this.Ee)}}};
function ff(a,b){var c=se(a),d=a.n();b?(c.N(d,"mouseover",a.He).N(d,"mousedown",a.yc).N(d,"mouseup",a.Ie).N(d,"mouseout",a.xh),a.Fe!=ba&&c.N(d,"contextmenu",a.Fe),r&&c.N(d,"dblclick",a.ak)):(c.Kb(d,"mouseover",a.He).Kb(d,"mousedown",a.yc).Kb(d,"mouseup",a.Ie).Kb(d,"mouseout",a.xh),a.Fe!=ba&&c.Kb(d,"contextmenu",a.Fe),r&&c.Kb(d,"dblclick",a.ak))}f.Db=function(){ef.k.Db.call(this);this.$a&&this.$a.detach();this.J()&&this.isEnabled()&&this.L.Jc(this,!1)};
f.Z=function(){ef.k.Z.call(this);this.$a&&(this.$a.m(),delete this.$a);delete this.L;this.Xb=this.Xa=null};f.qd=function(a){this.L.qd(this.n(),a);this.sg(a)};f.sg=function(a){this.Xa=a};f.Af=function(){var a=this.Xa;if(!a)return"";a=l(a)?a:ea(a)?vb(a,kd).join(""):id(a);return Oa(a)};f.Ue=function(a){ef.k.Ue.call(this,a);var b=this.n();b&&this.L.Ue(b,a)};f.ei=function(a){this.Rg=a;var b=this.n();b&&this.L.ei(b,a)};f.J=function(){return this.oa};
f.O=function(a,b){if(b||this.oa!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.n();c&&this.L.O(c,a);this.isEnabled()&&this.L.Jc(this,a);this.oa=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};f.Te=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!gf(this,1,!a)||(a||(this.setActive(!1),this.ob(!1)),this.J()&&this.L.Jc(this,a),this.Qb(1,!a,!0))};f.ob=function(a){gf(this,2,a)&&this.Qb(2,a)};f.setActive=function(a){gf(this,4,a)&&this.Qb(4,a)};
f.Sf=function(){return!!(this.$&8)};f.hi=function(a){gf(this,8,a)&&this.Qb(8,a)};function hf(a,b){gf(a,16,b)&&a.Qb(16,b)}f.Rd=function(){return!!(this.$&64)};function jf(a,b){gf(a,64,b)&&a.Qb(64,b)}f.Qb=function(a,b,c){c||1!=a?this.ua&a&&b!=!!(this.$&a)&&(this.L.Qb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Te(!b)};f.jb=function(a,b){if(this.Q&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.Qb(a,!1);this.ua=b?this.ua|a:this.ua&~a};
function kf(a,b){return!!(a.Yg&b)&&!!(a.ua&b)}function gf(a,b,c){return!!(a.ua&b)&&!!(a.$&b)!=c&&(!(a.ud&b)||a.dispatchEvent(qe(b,c)))&&!a.se}f.He=function(a){!lf(a,this.n())&&this.dispatchEvent("enter")&&this.isEnabled()&&kf(this,2)&&this.ob(!0)};f.xh=function(a){!lf(a,this.n())&&this.dispatchEvent("leave")&&(kf(this,4)&&this.setActive(!1),kf(this,2)&&this.ob(!1))};f.Fe=ba;function lf(a,b){return!!a.relatedTarget&&cd(b,a.relatedTarget)}
f.yc=function(a){this.isEnabled()&&(kf(this,2)&&this.ob(!0),!Vd(a)||t&&Gb&&a.ctrlKey||(kf(this,4)&&this.setActive(!0),this.L.kc(this)&&this.Ea().focus()));this.Rg||!Vd(a)||t&&Gb&&a.ctrlKey||a.preventDefault()};f.Ie=function(a){this.isEnabled()&&(kf(this,2)&&this.ob(!0),this.$&4&&this.Dc(a)&&kf(this,4)&&this.setActive(!1))};f.ak=function(a){this.isEnabled()&&this.Dc(a)};
f.Dc=function(a){kf(this,16)&&hf(this,!(this.$&16));kf(this,8)&&this.hi(!0);kf(this,64)&&jf(this,!this.Rd());var b=new Rd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Th=a.Th);return this.dispatchEvent(b)};f.Kf=function(){kf(this,32)&&gf(this,32,!0)&&this.Qb(32,!0)};f.Ee=function(){kf(this,4)&&this.setActive(!1);kf(this,32)&&gf(this,32,!1)&&this.Qb(32,!1)};
f.Fb=function(a){return this.J()&&this.isEnabled()&&this.cd(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.cd=function(a){return 13==a.keyCode&&this.Dc(a)};if(!ha(ef))throw Error("Invalid component class "+ef);if(!ha(Ne))throw Error("Invalid renderer class "+Ne);var mf=ja(ef);He[mf]=Ne;Ge("goog-control",function(){return new ef(null)});function nf(){this.rj=[]}n(nf,Ne);ca(nf);function of(a,b){var c=a.rj[b];if(!c){switch(b){case 0:c=a.U()+"-highlight";break;case 1:c=a.U()+"-checkbox";break;case 2:c=a.U()+"-content"}a.rj[b]=c}return c}f=nf.prototype;f.yf=function(){return"menuitem"};f.H=function(a){var b=a.eb().H("div",this.xe(a).join(" "),pf(this,a.Xa,a.eb()));qf(this,a,b,!!(a.ua&8)||!!(a.ua&16));return b};f.xb=function(a){return a&&a.firstChild};
f.qd=function(a,b){var c=this.xb(a),d=rf(this,a)?c.firstChild:null;nf.k.qd.call(this,a,b);d&&!rf(this,a)&&c.insertBefore(d,c.firstChild||null)};function pf(a,b,c){a=of(a,2);return c.H("div",a,b)}f.Kk=function(a,b,c){a&&b&&qf(this,a,b,c)};f.fi=function(a,b,c){a&&b&&qf(this,a,b,c)};function rf(a,b){var c=a.xb(b);if(c){var c=c.firstChild,d=of(a,1);return!!c&&ia(c)&&1==c.nodeType&&Be(c,d)}return!1}
function qf(a,b,c,d){Re(a,c,b.Hf());Se(b,c);d!=rf(a,c)&&(d?Ce(c,"goog-option"):Ee(c,"goog-option"),c=a.xb(c),d?(a=of(a,1),c.insertBefore(b.eb().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}f.Bf=function(a){switch(a){case 2:return of(this,0);case 16:case 8:return"goog-option-selected";default:return nf.k.Bf.call(this,a)}};f.U=function(){return"goog-menuitem"};function sf(a,b,c,d){ef.call(this,a,d||nf.Yb(),c);this.ja(b)}n(sf,ef);f=sf.prototype;f.Fa=function(){var a=this.Zf;return null!=a?a:this.Af()};f.ja=function(a){this.Zf=a};f.jb=function(a,b){sf.k.jb.call(this,a,b);switch(a){case 8:this.$&16&&!b&&hf(this,!1);var c=this.n();c&&this.L.Kk(this,c,b);break;case 16:(c=this.n())&&this.L.fi(this,c,b)}};f.Kk=function(a){this.jb(8,a)};f.fi=function(a){this.jb(16,a)};
f.Af=function(){var a=this.Xa;return ea(a)?(a=vb(a,function(a){return ia(a)&&1==a.nodeType&&(Be(a,"goog-menuitem-accel")||Be(a,"goog-menuitem-mnemonic-separator"))?"":kd(a)}).join(""),Oa(a)):sf.k.Af.call(this)};f.Ie=function(a){var b=this.getParent();if(b){var c=b.vk;b.vk=null;if(b=c&&ga(a.clientX))b=new mc(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}sf.k.Ie.call(this,a)};f.cd=function(a){return a.keyCode==this.ok&&this.Dc(a)?!0:sf.k.cd.call(this,a)};f.Fr=function(){return this.ok};
Ge("goog-menuitem",function(){return new sf(null)});sf.prototype.Hf=function(){return this.ua&16?"menuitemcheckbox":this.ua&8?"menuitemradio":sf.k.Hf.call(this)};sf.prototype.getParent=function(){return ef.prototype.getParent.call(this)};sf.prototype.Gf=function(){return ef.prototype.Gf.call(this)};function tf(a){this.hj=a}ca(tf);f=tf.prototype;f.yf=function(){return this.hj};function uf(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.eb().H("div",this.xe(a).join(" "))};f.xb=function(a){return a};f.Je=function(a){a=a.n();zd(a,!0,Eb);r&&(a.hideFocus=!0);var b=this.yf();b&&Je(a,b)};f.Ea=function(a){return a.n()};f.U=function(){return"goog-container"};f.xe=function(a){var b=this.U(),c=[b,a.Xd==vf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function wf(){}n(wf,Ne);ca(wf);wf.prototype.H=function(a){return a.eb().H("div",this.U())};wf.prototype.qd=function(){};wf.prototype.U=function(){return"goog-menuseparator"};function xf(a,b){ef.call(this,null,a||wf.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(xf,ef);xf.prototype.ya=function(){xf.k.ya.call(this);var a=this.n();Je(a,"separator")};Ge("goog-menuseparator",function(){return new xf});function yf(a){this.hj=a||"menu"}n(yf,tf);ca(yf);yf.prototype.U=function(){return"goog-menu"};yf.prototype.Je=function(a){yf.k.Je.call(this,a);a=a.n();Ke(a,"haspopup","true")};Ge("goog-menuseparator",function(){return new xf});function zf(a,b,c){oe.call(this,c);this.L=b||tf.Yb();this.Xd=a||Af}n(zf,oe);var vf="horizontal",Af="vertical";f=zf.prototype;f.Gh=null;f.$a=null;f.L=null;f.Xd=null;f.oa=!0;f.Xc=!0;f.Zc=!0;f.M=-1;f.za=null;f.Vd=!1;f.ar=!1;f.ws=!0;f.hc=null;f.Ea=function(){return this.Gh||this.L.Ea(this)};f.Ff=function(){return this.$a||(this.$a=new Ye(this.Ea()))};f.H=function(){this.D=this.L.H(this)};f.xb=function(){return this.L.xb(this.n())};
f.ya=function(){zf.k.ya.call(this);ue(this,function(a){a.Q&&Bf(this,a)},this);var a=this.n();this.L.Je(this);this.O(this.oa,!0);se(this).N(this,"enter",this.vh).N(this,"highlight",this.Lr).N(this,"unhighlight",this.Rr).N(this,"open",this.Or).N(this,"close",this.Ir).N(a,"mousedown",this.yc).N(Uc(a),"mouseup",this.Jr).N(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.Hr);this.kc()&&Cf(this,!0)};
function Cf(a,b){var c=se(a),d=a.Ea();b?c.N(d,"focus",a.Kf).N(d,"blur",a.Ee).N(a.Ff(),"key",a.Fb):c.Kb(d,"focus",a.Kf).Kb(d,"blur",a.Ee).Kb(a.Ff(),"key",a.Fb)}f.Db=function(){this.Sa(-1);this.za&&jf(this.za,!1);this.Vd=!1;zf.k.Db.call(this)};f.Z=function(){zf.k.Z.call(this);this.$a&&(this.$a.m(),this.$a=null);this.L=this.za=this.hc=this.Gh=null};f.vh=function(){return!0};
f.Lr=function(a){var b=ze(this,a.target);if(-1<b&&b!=this.M){var c=we(this,this.M);c&&c.ob(!1);this.M=b;c=we(this,this.M);this.Vd&&c.setActive(!0);this.ws&&this.za&&c!=this.za&&(c.ua&64?jf(c,!0):jf(this.za,!1))}b=this.n();null!=a.target.n()&&Ke(b,"activedescendant",a.target.n().id)};f.Rr=function(a){a.target==we(this,this.M)&&(this.M=-1);a=this.n();Le(a)};f.Or=function(a){(a=a.target)&&a!=this.za&&a.getParent()==this&&(this.za&&jf(this.za,!1),this.za=a)};
f.Ir=function(a){a.target==this.za&&(this.za=null)};f.yc=function(a){this.Xc&&(this.Vd=!0);var b=this.Ea();b&&gd(b)&&hd(b)?b.focus():a.preventDefault()};f.Jr=function(){this.Vd=!1};f.Hr=function(a){var b=Df(this,a.target);if(b)switch(a.type){case "mousedown":b.yc(a);break;case "mouseup":b.Ie(a);break;case "mouseover":b.He(a);break;case "mouseout":b.xh(a);break;case "contextmenu":b.Fe(a)}};
function Df(a,b){if(a.hc)for(var c=a.n();b&&b!==c;){var d=b.id;if(d in a.hc)return a.hc[d];b=b.parentNode}return null}f.Kf=function(){};f.Ee=function(){this.Sa(-1);this.Vd=!1;this.za&&jf(this.za,!1)};f.Fb=function(a){return this.isEnabled()&&this.J()&&(0!=ve(this)||this.Gh)&&this.cd(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.cd=function(a){var b=we(this,this.M);if(b&&"function"==typeof b.Fb&&b.Fb(a)||this.za&&this.za!=b&&"function"==typeof this.za.Fb&&this.za.Fb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.kc())this.Ea().blur();else return!1;break;case 36:Ef(this);break;case 35:Ff(this);break;case 38:if(this.Xd==Af)Gf(this);else return!1;break;case 37:if(this.Xd==vf)xe(this)?Hf(this):Gf(this);else return!1;break;case 40:if(this.Xd==Af)Hf(this);else return!1;break;
case 39:if(this.Xd==vf)xe(this)?Gf(this):Hf(this);else return!1;break;default:return!1}return!0};function Bf(a,b){var c=b.n(),c=c.id||(c.id=re(b));a.hc||(a.hc={});a.hc[c]=b}f.ne=function(a,b){zf.k.ne.call(this,a,b)};
f.Bd=function(a,b,c){a.ud|=2;a.ud|=64;!this.kc()&&this.ar||a.jb(32,!1);a.Q&&0!=a.Ge&&ff(a,!1);a.Ge=!1;var d=a.getParent()==this?ze(this,a):-1;zf.k.Bd.call(this,a,b,c);a.Q&&this.Q&&Bf(this,a);a=d;-1==a&&(a=ve(this));a==this.M?this.M=Math.min(ve(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=l(a)?te(this,a):a){var c=ze(this,a);-1!=c&&(c==this.M?(a.ob(!1),this.M=-1):c<this.M&&this.M--);var d=a.n();d&&d.id&&this.hc&&(c=this.hc,d=d.id,d in c&&delete c[d])}c=a=zf.k.removeChild.call(this,a,b);c.Q&&1!=c.Ge&&ff(c,!0);c.Ge=!0;return a};f.J=function(){return this.oa};
f.O=function(a,b){if(b||this.oa!=a&&this.dispatchEvent(a?"show":"hide")){this.oa=a;var c=this.n();c&&(xd(c,a),this.kc()&&uf(this.Ea(),this.Xc&&this.oa),b||this.dispatchEvent(this.oa?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Xc};
f.Te=function(a){this.Xc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Xc=!0,ue(this,function(a){a.Xk?delete a.Xk:a.Te(!0)})):(ue(this,function(a){a.isEnabled()?a.Te(!1):a.Xk=!0}),this.Vd=this.Xc=!1),this.kc()&&uf(this.Ea(),a&&this.oa))};f.kc=function(){return this.Zc};f.Jc=function(a){a!=this.Zc&&this.Q&&Cf(this,a);this.Zc=a;this.Xc&&this.oa&&uf(this.Ea(),a)};f.Sa=function(a){(a=we(this,a))?a.ob(!0):-1<this.M&&we(this,this.M).ob(!1)};f.ob=function(a){this.Sa(ze(this,a))};
function Ef(a){If(a,function(a,c){return(a+1)%c},ve(a)-1)}function Ff(a){If(a,function(a,c){a--;return 0>a?c-1:a},0)}function Hf(a){If(a,function(a,c){return(a+1)%c},a.M)}function Gf(a){If(a,function(a,c){a--;return 0>a?c-1:a},a.M)}function If(a,b,c){c=0>c?ze(a,a.za):c;var d=ve(a);c=b.call(a,c,d);for(var e=0;e<=d;){var h=we(a,c);if(h&&a.nj(h)){a.Sa(c);break}e++;c=b.call(a,c,d)}}f.nj=function(a){return a.J()&&a.isEnabled()&&!!(a.ua&2)};function Jf(){}n(Jf,Ne);ca(Jf);Jf.prototype.U=function(){return"goog-menuheader"};function Kf(a,b,c){ef.call(this,a,c||Jf.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(Kf,ef);Ge("goog-menuheader",function(){return new Kf(null)});function Lf(a,b){zf.call(this,Af,b||yf.Yb(),a);this.Jc(!1)}n(Lf,zf);f=Lf.prototype;f.Qg=!0;f.br=!1;f.U=function(){return this.L.U()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.m()};f.Yj=function(a){return we(this,a)};
f.ae=function(a,b){var c=this.J();c||xd(this.n(),!0);var d=this.n(),e=a,h=b,k=rd(d);e instanceof mc&&(h=e.y,e=e.x);var e=d.offsetLeft+(e-k.x),m=d.offsetTop+(h-k.y),k=Eb&&(Gb||Hb)&&Pb("1.9");e instanceof mc?(h=e.x,e=e.y):(h=e,e=m);d.style.left=sd(h,k);d.style.top=sd(e,k);c||xd(this.n(),!1)};function Mf(a){a.Qg=!0;a.Jc(!0)}f.O=function(a,b,c){(b=Lf.k.O.call(this,a,b))&&a&&this.Q&&this.Qg&&this.Ea().focus();this.vk=a&&c&&ga(c.clientX)?new mc(c.clientX,c.clientY):null;return b};
f.vh=function(a){this.Qg&&this.Ea().focus();return Lf.k.vh.call(this,a)};f.nj=function(a){return(this.br||a.isEnabled())&&a.J()&&!!(a.ua&2)};f.cd=function(a){var b=Lf.k.cd.call(this,a);b||ue(this,function(c){!b&&c.Fr&&c.ok==a.keyCode&&(this.isEnabled()&&this.ob(c),b=c.Fb(a))},this);return b};
f.Sa=function(a){Lf.k.Sa.call(this,a);if(a=we(this,a)){var b=a.n();a=this.n();var c=rd(b),d=rd(a),e=Cd(a),h=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,k=a.scrollTop,e=e+Math.min(h,Math.max(h-(a.clientWidth-b.offsetWidth),0)),k=k+Math.min(c,Math.max(c-d,0)),b=new mc(e,k);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function F(a,b){this.Ud=a;this.fa=b;Nf(this);var c=Of(this)[0];this.va=c[1];this.nf=u("tspan",{},null);this.nf.appendChild(document.createTextNode(q?Pf+" ":" "+Pf));F.k.constructor.call(this,c[0])}n(F,Tb);var Pf=Jb?"\u25bc":"\u25be";f=F.prototype;f.clone=function(){return new F(this.Ud,this.fa)};f.df="default";
f.vg=function(){Qf(this,null);for(var a=this,b=new Lf,c=Of(this),d=0;d<c.length;d++){var e=c[d][1],h=new sf(c[d][0]);h.ja(e);h.fi(!0);b.ne(h,!0);hf(h,e==this.va)}Zd(b,"action",function(b){if(b=b.target){b=b.Fa();if(a.h&&a.fa){var c=a.fa(b);void 0!==c&&(b=c)}null!==b&&a.ja(b)}Rf(a)});se(b).N(b.n(),"touchstart",function(a){Df(this,a.target).yc(a)});se(b).N(b.n(),"touchend",function(a){Df(this,a.target).Dc(a)});c=Yc();d=od();e=Sf(this.Cb);h=this.Cb.getBBox();b.F(Tf);var k=b.n();Wb(k,"blocklyDropdownMenu");
var m=ud(k);e.y=e.y+m.height+h.height>=c.height+d.y?e.y-m.height:e.y+h.height;q?(e.x+=h.width,e.x+=25,e.x<d.x+m.width&&(e.x=d.x+m.width)):(e.x-=25,e.x>c.width+d.x-m.width&&(e.x=c.width+d.x-m.width));Uf(e.x,e.y,c,d);Mf(b);k.focus()};
function Nf(a){a.Uh=null;a.ti=null;var b=a.Ud;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Vf(c),e=Wf(c,d),h=Xf(c,d);if((e||h)&&!(d<=e+h)){e&&(a.Uh=c[0].substring(0,e-1));h&&(a.ti=c[0].substr(1-h));c=[];for(d=0;d<b.length;d++){var k=b[d][0],m=b[d][1],k=k.substring(e,k.length-h);c[d]=[k,m]}a.Ud=c}}}function Of(a){return ha(a.Ud)?a.Ud.call(a):a.Ud}f.Fa=function(){return this.va};f.ja=function(a){this.va=a;for(var b=Of(this),c=0;c<b.length;c++)if(b[c][1]==a){this.ia(b[c][0]);return}this.ia(a)};
f.ia=function(a){this.h&&(this.nf.style.fill=Yf(Zf(this.h.ah)));null!==a&&a!==this.Ka&&(this.Ka=a,Ub(this),this.Ja&&(q?this.Ja.insertBefore(this.nf,this.Ja.firstChild):this.Ja.appendChild(this.nf)),this.h&&this.h.B&&(this.h.F(),this.h.Ma(),this.h.t.wb()))};f.m=function(){Rf(this);F.k.m.call(this)};/*

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
var G={};/*

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
function $f(a){a=a||B;var b;if(a.Eb)b=a.Eb();else if(a.Za)b=a.Za();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].Zb;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var h=d[e];h&&(a[h.toLowerCase()]=h)}}b=[];for(var k in a)b.push(a[k]);return b}function ag(a,b){for(var c=B.Za(),d=0;d<c.length;d++){var e=c[d].Hb;e&&e.call(c[d],a,b)}}
function bg(a,b,c,d){var e=$f();e.sort(Qa);e.unshift(null);for(var h=void 0,k=0;k<e.length;k++)if(e[k]!==h){var m=C.variables_get?hc(d,"variables_get"):null;m&&m.ra();var p=C.variables_set?hc(d,"variables_set"):null;p&&p.ra();null===e[k]?h=(m||p).Zb()[0]:(m&&ic(m,e[k],"VAR"),p&&ic(p,e[k],"VAR"));p&&a.push(p);m&&a.push(m);m&&p?b.push(c,3*c):b.push(2*c)}}
function cg(){var a=$f(),b="";if(a.length){a.sort(Qa);for(var c=0,d="i",e=0,h=!1;!b;){e=0;for(h=!1;e<a.length&&!h;)a[e].toLowerCase()==d&&(h=!0),e++;h?("z"===d[0]?(c++,d="a"):(d=String.fromCharCode(d.charCodeAt(0)+1),"l"==d[0]&&(d=String.fromCharCode(d.charCodeAt(0)+1))),0<c&&(d+=c)):b=d}}else b="i";return b};/*

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
function dg(a,b){var c;if(b){var d=this;c=function(a){var c=eg.call(d,a);a=void 0===c?a:null===c?d.Fa():c;b.call(d,a);return c}}else c=eg;dg.k.constructor.call(this,fg,c);a?this.ja(a):this.ja(cg())}n(dg,F);dg.prototype.clone=function(){return new dg(this.Fa(),this.fa)};dg.prototype.Fa=function(){return this.fb()};dg.prototype.ja=function(a){this.va=a;this.ia(a)};
function fg(){var a=this.h&&this.h.t?$f(this.h.t):[],b=this.fb();b&&-1==a.indexOf(b)&&a.push(b);a.sort(Qa);a.push(G.Vi);a.push(G.Mi);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function eg(a){function b(a,b){gg();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==G.Vi){var c=this.fb();(a=b(G.Kp.replace("%1",c),c))&&ag(c,a);return null}if(a==G.Mi)return(a=b(G.jp,""))?(ag(a,a),a):null};var hg={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ig(a){var b={};a=String(a);var c="#"==a.charAt(0)?a:"#"+a;if(jg.test(c))return b.yh=kg(c),b.type="hex",b;a:{var d=a.match(lg);if(d){var c=Number(d[1]),e=Number(d[2]),d=Number(d[3]);if(0<=c&&255>=c&&0<=e&&255>=e&&0<=d&&255>=d){c=[c,e,d];break a}}c=[]}if(c.length)return b.yh=Yf(c),b.type="rgb",b;if(hg&&(c=hg[a.toLowerCase()]))return b.yh=c,b.type="named",b;throw Error(a+" is not a valid color string");}var mg=/#(.)(.)(.)/;
function kg(a){if(!jg.test(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(mg,"#$1$1$2$2$3$3"));return a.toLowerCase()}function ng(a){a=kg(a);return[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)]}
function Yf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=og(b.toString(16));c=og(c.toString(16));a=og(a.toString(16));return"#"+b+c+a}var jg=/^#(?:[0-9a-f]{3}){1,2}$/i,lg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;function og(a){return 1==a.length?"0"+a:a}
function Zf(a){var b=0,c=0,d=0,e=Math.floor(a/60),h=a/60-e;a=237.15*(1-.39*h);h=237.15*(1-.39*(1-h));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=h;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=h;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=h,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function pg(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function qg(a,b){null!=a&&this.append.apply(this,arguments)}f=qg.prototype;f.xa="";f.set=function(a){this.xa=""+a};f.append=function(a,b,c){this.xa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.xa+=arguments[d];return this};f.clear=function(){this.xa=""};f.toString=function(){return this.xa};function rg(a,b,c){if(ha(a))c&&(a=oa(a,c));else if(a&&"function"==typeof a.handleEvent)a=oa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:g.setTimeout(a,b||0)};function sg(a,b,c){oe.call(this,c);this.Na=b||tg;this.Ah=a instanceof Dc?a:Hc(a,null)}n(sg,oe);var ug={};f=sg.prototype;f.ci=!1;f.ue=!1;f.Ss=null;f.$q=Nc;f.Le=!0;f.uf=-1;f.Z=function(){sg.k.Z.call(this);this.wd&&(this.wd.removeNode(this),this.wd=null);this.D=null};
f.Qf=function(){var a=this.n();if(a){var b=vg(this);b&&!b.id&&(b.id=re(this)+".label");Je(a,"treeitem");Ke(a,"selected",!1);Ke(a,"expanded",!1);Ke(a,"level",this.Kd());b&&Ke(a,"labelledby",b.id);(a=this.Ef())&&Je(a,"presentation");(a=this.Df())&&Je(a,"presentation");if(a=wg(this))if(Je(a,"group"),a.hasChildNodes())for(a=ve(this),b=1;b<=a;b++){var c=we(this,b-1).n();Ke(c,"setsize",a);Ke(c,"posinset",b)}}};
f.H=function(){var a=this.eb(),b=this.vi(),c=a.Vb,a=c.createElement("div");r?(Oc(a,Mc(Lc("br"),b)),a.removeChild(a.firstChild)):Oc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.D=b};f.ya=function(){sg.k.ya.call(this);ug[re(this)]=this;this.Qf()};f.Db=function(){sg.k.Db.call(this);delete ug[re(this)]};
f.Bd=function(a,b){var c=we(this,b-1),d=we(this,b);sg.k.Bd.call(this,a,b);a.jd=c;a.Pb=d;c?c.Pb=a:this.Wj=a;d?d.jd=a:this.kk=a;var e=this.gb();e&&xg(a,e);yg(a,this.Kd()+1);if(this.n()&&(this.ee(),this.lb())){e=wg(this);a.n()||a.H();var h=a.n(),k=d&&d.n();e.insertBefore(h,k);this.Q&&a.ya();d||(c?c.ee():(xd(e,!0),this.oc(this.lb())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Bd(a,b?ze(this,b):ve(this));return a};
f.removeChild=function(a){var b=this.gb(),c=b?b.bd():null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),rg(this.us,10,this)):this.select();sg.k.removeChild.call(this,a);this.kk==a&&(this.kk=a.jd);this.Wj==a&&(this.Wj=a.Pb);a.jd&&(a.jd.Pb=a.Pb);a.Pb&&(a.Pb.jd=a.jd);c=!a.Pb;a.wd=null;a.uf=-1;if(b&&(b.removeNode(this),this.Q)){b=wg(this);if(a.Q){var d=a.n();b.removeChild(d);a.Db()}c&&(c=we(this,ve(this)-1))&&c.ee();ye(this)||(b.style.display="none",this.ee(),this.Ef().className=this.zf())}return a};
f.remove=sg.prototype.removeChild;f.us=function(){this.select()};f.Kd=function(){var a=this.uf;0>a&&(a=(a=this.getParent())?a.Kd()+1:0,yg(this,a));return a};function yg(a,b){if(b!=a.uf){a.uf=b;var c=zg(a);if(c){var d=Ag(a)+"px";xe(a)?c.style.paddingRight=d:c.style.paddingLeft=d}ue(a,function(a){yg(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.ad=function(){var a=[];ue(this,function(b){a.push(b)});return a};f.Sf=function(){return this.ci};
f.select=function(){var a=this.gb();a&&a.Ib(this)};function Bg(a,b){if(a.ci!=b){a.ci=b;Cg(a);var c=a.n();c&&(Ke(c,"selected",b),b&&(c=a.gb().n(),Ke(c,"activedescendant",re(a))))}}f.lb=function(){return this.ue};
f.oc=function(a){var b=a!=this.ue;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.ue=a;c=this.gb();var d=this.n();if(ye(this)){if(!a&&c&&this.contains(c.bd())&&this.select(),d){if(c=wg(this))if(xd(c,a),a&&this.Q&&!c.hasChildNodes()){var e=[];ue(this,function(a){e.push(a.vi())});Oc(c,Mc(e));ue(this,function(a){a.ya()})}this.ee()}}else(c=wg(this))&&xd(c,!1);d&&(this.Ef().className=this.zf(),Ke(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.oc(!this.lb())};
f.expand=function(){this.oc(!0)};f.collapse=function(){this.oc(!1)};f.ai=function(){var a=this.getParent();a&&(a.oc(!0),a.ai())};f.vi=function(){var a=this.gb(),b=!a.We||a==this.getParent()&&!a.ki?this.Na.zj:this.Na.yj,a=this.lb()&&ye(this),b={"class":b,style:Dg(this)},c=[];a&&ue(this,function(a){c.push(a.vi())});a=Lc("div",b,c);return Lc("div",{"class":this.Na.Hj,id:re(this)},[Eg(this),a])};function Ag(a){return Math.max(0,(a.Kd()-1)*a.Na.Dh)}
function Eg(a){var b={};b["padding-"+(xe(a)?"right":"left")]=Ag(a)+"px";var b={"class":a.Be(),style:b},c=a.rh(),d=Lc("span",{style:{display:"inline-block"},"class":a.zf()}),e=Lc("span",{"class":a.Na.Ij,title:a.Ss||null},a.Ah);a=Mc(e,Lc("span",{},a.$q));return Lc("div",b,[c,d,a])}f.Be=function(){return this.Na.gh+(this.Sf()?" "+this.Na.Kj:"")};f.rh=function(){return Lc("span",{type:"expand",style:{display:"inline-block"},"class":Fg(this)})};
function Fg(a){var b=a.gb(),c=!b.We||b==a.getParent()&&!b.ki,d=a.Na,e=new qg;e.append(d.Wc," ",d.nr," ");if(ye(a)){var h=0;b.ji&&a.Le&&(h=a.lb()?2:1);c||(h=a.Pb?h+8:h+4);switch(h){case 1:e.append(d.rr);break;case 2:e.append(d.qr);break;case 4:e.append(d.Dj);break;case 5:e.append(d.pr);break;case 6:e.append(d.or);break;case 8:e.append(d.Ej);break;case 9:e.append(d.tr);break;case 10:e.append(d.sr);break;default:e.append(d.Cj)}}else c?e.append(d.Cj):a.Pb?e.append(d.Ej):e.append(d.Dj);return e.toString()}
function Dg(a){var b=a.lb()&&ye(a);return zc({"background-position":Gg(a),display:b?null:"none"})}function Gg(a){return(a.Pb?(a.Kd()-1)*a.Na.Dh:"-100")+"px 0"}f.n=function(){var a=sg.k.n.call(this);a||(this.D=a=this.eb().n(re(this)));return a};function zg(a){return(a=a.n())?a.firstChild:null}f.Df=function(){var a=zg(this);return a?a.firstChild:null};f.Ef=function(){var a=zg(this);return a?a.childNodes[1]:null};function vg(a){return(a=zg(a))&&a.lastChild?a.lastChild.previousSibling:null}
function wg(a){return(a=a.n())?a.lastChild:null}f.ia=function(a){this.Ah=a=Gc(a);var b=vg(this);b&&Oc(b,a);(a=this.gb())&&Hg(a,this)};f.fb=function(){var a=Fc(this.Ah);return-1!=a.indexOf("&")?"document"in g?Za(a):ab(a):a};function Cg(a){var b=zg(a);b&&(b.className=a.Be())}f.ee=function(){var a=this.Df();a&&(a.className=Fg(this));if(a=wg(this))a.style.backgroundPosition=Gg(this)};f.Oh=function(a){"expand"==a.target.getAttribute("type")&&ye(this)?this.Le&&this.toggle():(this.select(),Cg(this))};
f.qk=function(a){"expand"==a.target.getAttribute("type")&&ye(this)||this.Le&&this.toggle()};function Ig(a){return a.lb()&&ye(a)?Ig(we(a,ve(a)-1)):a}function xg(a,b){a.wd!=b&&(a.wd=b,Hg(b,a),ue(a,function(a){xg(a,b)}))}
var tg={Dh:19,Jj:"goog-tree-root goog-tree-item",Gj:"goog-tree-hide-root",Hj:"goog-tree-item",yj:"goog-tree-children",zj:"goog-tree-children-nolines",gh:"goog-tree-row",Ij:"goog-tree-item-label",Wc:"goog-tree-icon",nr:"goog-tree-expand-icon",rr:"goog-tree-expand-icon-plus",qr:"goog-tree-expand-icon-minus",tr:"goog-tree-expand-icon-tplus",sr:"goog-tree-expand-icon-tminus",pr:"goog-tree-expand-icon-lplus",or:"goog-tree-expand-icon-lminus",Ej:"goog-tree-expand-icon-t",Dj:"goog-tree-expand-icon-l",Cj:"goog-tree-expand-icon-blank",
eh:"goog-tree-expanded-folder-icon",Aj:"goog-tree-collapsed-folder-icon",fh:"goog-tree-file-icon",Fj:"goog-tree-expanded-folder-icon",Bj:"goog-tree-collapsed-folder-icon",Kj:"selected"};function Jg(a,b,c){sg.call(this,a,b,c)}n(Jg,sg);Jg.prototype.gb=function(){if(this.wd)return this.wd;var a=this.getParent();return a&&(a=a.gb())?(xg(this,a),a):null};Jg.prototype.zf=function(){var a=this.lb(),b=this.Ar;if(a&&b)return b;b=this.Tr;if(!a&&b)return b;b=this.Na;if(ye(this)){if(a&&b.eh)return b.Wc+" "+b.eh;if(!a&&b.Aj)return b.Wc+" "+b.Aj}else if(b.fh)return b.Wc+" "+b.fh;return""};/*

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
function Kg(a){var b;q&&(b=workarea.Jf());var c=D("xml");a=Ka(a,!0);for(var d=0,e;e=a[d];d++){var h=Lg(e);e=e.ga();h.setAttribute("x",q?b-e.x:e.x);h.setAttribute("y",e.y);c.appendChild(h)}return c}
function Lg(a){var b=D("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Ia){var c=a.Ia();c&&b.appendChild(c)}for(var d=0;c=a.T[d];d++)for(var e=0,h;h=c.Pa[e];e++)if(h.name&&h.xd){var k=D("field",null,h.Fa());k.setAttribute("name",h.name);b.appendChild(k)}if(c=a.Cf())c=D("comment",null,c),"object"==typeof a.ba&&(c.setAttribute("pinned",a.ba.J()),d=a.ba.$c(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.T[e];e++){var m;h=!0;5!=c.type&&
(k=H(c.s),1==c.type?(m=D("value"),d=!0):3==c.type&&(m=D("statement")),k&&(m.appendChild(Lg(k)),h=!1),m.setAttribute("name",c.name),h||b.appendChild(m))}d&&b.setAttribute("inline",a.Ke);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Id&&!z||b.setAttribute("deletable",!1);a.cc&&!z||b.setAttribute("movable",!1);a.uc&&!z||b.setAttribute("editable",!1);if(a=Mg(a))m=D("next",null,Lg(a)),b.appendChild(m);return b}
function Ng(a){return(new XMLSerializer).serializeToString(a)}function Og(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Pg(a,b){var c;q&&(c=a.Jf());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var h=Qg(a,e),k=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(k)||isNaN(e)||h.moveBy(q?c-k:k,e)}}
function Qg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var h=b.getAttribute("id");if(c&&h){d=Rg(h,a);if(!d)throw"Couldn't get Block with id: "+h;h=d.getParent();d.t&&d.m(!0,!1,!0);d.fill(a,e);d.ab=h}else d=hc(a,e);d.ra&&d.ra();(h=b.getAttribute("inline"))&&Sg(d,"true"==h);(h=b.getAttribute("disabled"))&&d.Se("true"==h);(h=b.getAttribute("deletable"))&&Tg(d,"true"==h);if(h=b.getAttribute("movable"))d.cc="true"==h;(h=b.getAttribute("editable"))&&Ug(d,
"true"==h);for(var k=null,h=0,m;m=b.childNodes[h];h++)if(3!=m.nodeType||!m.data.match(/^\s*$/)){for(var k=null,p=0,y;y=m.childNodes[p];p++)3==y.nodeType&&y.data.match(/^\s*$/)||(k=y);p=m.getAttribute("name");switch(m.nodeName.toLowerCase()){case "mutation":d.Oa&&(d.Oa(m),d.ra&&d.ra());break;case "comment":d.Re(m.textContent);var x=m.getAttribute("pinned");x&&setTimeout(function(){d.ba&&d.ba.O&&d.ba.O("true"==x)},1);k=parseInt(m.getAttribute("w"),10);m=parseInt(m.getAttribute("h"),10);!isNaN(k)&&!isNaN(m)&&
d.ba&&d.ba.O&&d.ba.Ic(k,m);break;case "title":case "field":ic(d,m.textContent,p);break;case "value":case "statement":m=I(d,p);if(!m)throw"Input "+p+" does not exist in block "+e;if(k&&"block"==k.nodeName.toLowerCase())if(k=Qg(a,k,c),k.G)Wg(m.s,k.G);else if(k.K)Wg(m.s,k.K);else throw"Child block does not have output or previous statement.";break;case "next":if(k&&"block"==k.nodeName.toLowerCase()){if(!d.C)throw"Next statement does not exist.";if(d.C.w)throw"Next statement is already connected.";k=
Qg(a,k,c);if(!k.K)throw"Next block does not have previous statement.";Wg(d.C,k.K)}break;default:console.log("Ignoring unknown tag: "+m.nodeName)}}(b=b.getAttribute("collapsed"))&&d.pd("true"==b);a.B&&((a=Mg(d))?a.F():d.F());return d}function Xg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}g.Blockly||(g.Blockly={});g.Blockly.Xml||(g.Blockly.Xml={});g.Blockly.Xml.domToText=Ng;g.Blockly.Xml.domToWorkspace=Pg;g.Blockly.Xml.textToDom=Og;
g.Blockly.Xml.workspaceToDom=Kg;/*

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
function Yg(a,b,c,d,e,h,k){var m=Zg;q&&(m=-m);this.dr=m*Math.PI/180;this.u=a;this.Xa=b;this.Lk=c;a.ce.appendChild(this.bh(b,!(!h||!k)));$g(this,d,e);h&&k||(a=this.Xa.getBBox(),h=a.width+2*ah,k=a.height+2*ah);this.Ic(h,k);bh(this);ch(this);this.$h=!0;z||(v(this.of,"mousedown",this,this.gr),this.mc&&v(this.mc,"mousedown",this,this.Fs))}var ah=6,Zg=20,dh=null,eh=null;function fh(){dh&&(w(dh),dh=null);eh&&(w(eh),eh=null)}f=Yg.prototype;f.$h=!1;f.Lb=0;f.Tg=0;f.md=0;f.Oe=0;f.R=0;f.Ga=0;f.Xg=!0;
f.bh=function(a,b){this.Mb=u("g",{},null);var c=u("g",{filter:"url(#blocklyEmboss)"},this.Mb);this.jj=u("path",{},c);this.of=u("rect",{"class":"blocklyDraggable",x:0,y:0,rx:ah,ry:ah},c);b?(this.mc=u("g",{"class":q?"blocklyResizeSW":"blocklyResizeSE"},this.Mb),c=2*ah,u("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.mc),u("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.mc),u("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.mc)):this.mc=
null;this.Mb.appendChild(a);return this.Mb};f.gr=function(a){gh(this);fh();$b(a)||hh(a)||(ih(jh),this.Tj=q?this.md+a.clientX:this.md-a.clientX,this.yr=this.Oe-a.clientY,dh=v(document,"mouseup",this,fh),eh=v(document,"mousemove",this,this.hr),gg(),a.stopPropagation())};f.hr=function(a){this.Xg=!1;this.md=q?this.Tj-a.clientX:this.Tj+a.clientX;this.Oe=this.yr+a.clientY;bh(this);ch(this)};
f.Fs=function(a){gh(this);fh();$b(a)||(ih(jh),this.Es=q?this.R+a.clientX:this.R-a.clientX,this.Ds=this.Ga-a.clientY,dh=v(document,"mouseup",this,fh),eh=v(document,"mousemove",this,this.Gs),gg(),a.stopPropagation())};f.Gs=function(a){this.Xg=!1;var b=this.Es,c=this.Ds+a.clientY,b=q?b-a.clientX:b+a.clientX;this.Ic(b,c);q&&bh(this)};function gh(a){a.Mb.parentNode.appendChild(a.Mb)}function $g(a,b,c){a.Lb=b;a.Tg=c;a.$h&&bh(a)}
function bh(a){a.Mb.setAttribute("transform","translate("+(q?a.Lb-a.md-a.R:a.Lb+a.md)+", "+(a.Oe+a.Tg)+")")}f.$c=function(){return{width:this.R,height:this.Ga}};
f.Ic=function(a,b){var c=2*ah;a=Math.max(a,c+45);b=Math.max(b,c+18);this.R=a;this.Ga=b;this.of.setAttribute("width",a);this.of.setAttribute("height",b);this.mc&&(q?this.mc.setAttribute("transform","translate("+2*ah+", "+(b-c)+") scale(-1 1)"):this.mc.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.$h){if(this.Xg){var c=-this.R/4,d=-this.Ga-25,e=this.u.wc();q?this.Lb-e.Bb-c-this.R<kh?c=this.Lb-e.Bb-this.R-kh:this.Lb-e.Bb-c>e.wa&&(c=this.Lb-e.Bb-e.wa):this.Lb+c<e.Bb?c=e.Bb-this.Lb:
e.Bb+e.wa<this.Lb+c+this.R+10+kh&&(c=e.Bb+e.wa-this.Lb-this.R-kh);this.Tg+d<e.Mc&&(d=this.Lk.getBBox().height);this.md=c;this.Oe=d}bh(this);ch(this)}lh(this.Mb,"resize")};
function ch(a){var b=[],c=a.R/2,d=a.Ga/2,e=-a.md,h=-a.Oe;if(c==e&&d==h)b.push("M "+c+","+d);else{h-=d;e-=c;q&&(e*=-1);var k=Math.sqrt(h*h+e*e),m=Math.acos(e/k);0>h&&(m=2*Math.PI-m);var p=m+Math.PI/2;p>2*Math.PI&&(p-=2*Math.PI);var y=Math.sin(p),x=Math.cos(p),E=a.$c(),p=(E.width+E.height)/10,p=Math.min(p,E.width,E.height)/2,E=1-8/k,e=c+E*e,h=d+E*h,E=c+p*x,A=d+p*y,c=c-p*x,d=d-p*y,y=m+a.dr;y>2*Math.PI&&(y-=2*Math.PI);m=Math.sin(y)*k/4;k=Math.cos(y)*k/4;b.push("M"+E+","+A);b.push("C"+(E+k)+","+(A+m)+
" "+e+","+h+" "+e+","+h);b.push("C"+e+","+h+" "+(c+k)+","+(d+m)+" "+c+","+d)}b.push("z");a.jj.setAttribute("d",b.join(" "))}f.j=function(a){this.of.setAttribute("fill",a);this.jj.setAttribute("fill",a)};f.m=function(){fh();Vb(this.Mb);this.Lk=this.Xa=this.u=this.Mb=null};/*

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
function mh(a){this.u=a}f=mh.prototype;f.me=47;f.Ag=45;f.ie=15;f.An=35;f.Li=35;f.gf=25;f.Rd=!1;f.o=null;f.yg=null;f.Jh=0;f.Cc=0;f.lk=0;f.Tk=0;
f.H=function(){this.o=u("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=u("clipPath",{id:"blocklyTrashBodyClipPath"},this.o);u("rect",{width:this.me,height:this.Ag,y:this.ie},a);u("image",{width:nh,height:oh,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.o).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ph+qh);a=u("clipPath",{id:"blocklyTrashLidClipPath"},this.o);u("rect",{width:this.me,height:this.ie},a);this.yg=u("image",{width:nh,height:oh,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.o);this.yg.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ph+qh);this.Ug();return this.o};f.g=function(){rh(this,!1);this.Ec();v(window,"resize",this,this.Ec)};f.m=function(){this.o&&(Vb(this.o),this.o=null);this.u=this.yg=null;g.clearTimeout(this.Jh)};f.Ec=function(){var a=this.u.wc();a&&(this.lk=q?this.Li:a.wa+a.rb-this.me-this.Li,this.Tk=a.Ua+a.sb-(this.Ag+this.ie)-this.An,this.o.setAttribute("transform","translate("+this.lk+","+this.Tk+")"))};
f.Ae=function(){var a=sh(this.o);return new oc(a.x-this.gf,a.y-this.gf,this.me+2*this.gf,this.Ag+this.ie+2*this.gf)};function rh(a,b){a.Rd!=b&&(g.clearTimeout(a.Jh),a.Rd=b,a.Ug())}f.Ug=function(){this.Cc+=this.Rd?.2:-.2;this.Cc=Math.min(Math.max(this.Cc,0),1);var a=45*this.Cc;this.yg.setAttribute("transform","rotate("+(q?-a:a)+", "+(q?4:this.me-4)+", "+(this.ie-2)+")");this.o.style.opacity=.2+.2*this.Cc;if(0<this.Cc||1>this.Cc)this.Jh=rg(this.Ug,20,this)};f.close=function(){rh(this,!1)};/*

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
function th(a){this.u=a;this.ma=null;this.De=new uh(a,!0,!0);this.bf=new uh(a,!1,!0);this.qe=u("rect",{height:kh,width:kh,style:"fill: #fff"},null);vh(this.qe,a.ce)}th.prototype.m=function(){w(this.eg);this.eg=null;Vb(this.qe);this.ma=this.u=this.qe=null;this.De.m();this.De=null;this.bf.m();this.bf=null};
th.prototype.resize=function(){var a=this.u.wc();if(a){var b=!1,c=!1;this.ma&&this.ma.wa==a.wa&&this.ma.Ua==a.Ua&&this.ma.sb==a.sb&&this.ma.rb==a.rb?(this.ma&&this.ma.Fd==a.Fd&&this.ma.Bb==a.Bb&&this.ma.ic==a.ic||(b=!0),this.ma&&this.ma.tb==a.tb&&this.ma.Mc==a.Mc&&this.ma.Nb==a.Nb||(c=!0)):c=b=!0;b&&this.De.resize(a);c&&this.bf.resize(a);this.ma&&this.ma.wa==a.wa&&this.ma.rb==a.rb||this.qe.setAttribute("x",this.bf.Nc);this.ma&&this.ma.Ua==a.Ua&&this.ma.sb==a.sb||this.qe.setAttribute("y",this.De.zg);
this.ma=a}};th.prototype.set=function(a,b){this.De.set(a);this.bf.set(b)};function uh(a,b,c){this.u=a;this.fg=c||!1;this.hb=b;this.bh();b?(this.Jb.setAttribute("height",kh),this.Ba.setAttribute("height",kh-6),this.Ba.setAttribute("y",3)):(this.Jb.setAttribute("width",kh),this.Ba.setAttribute("width",kh-6),this.Ba.setAttribute("x",3));this.tk=v(this.Jb,"mousedown",this,this.qs);this.uk=v(this.Ba,"mousedown",this,this.rs)}var wh,xh,kh=15;aa("document.documentElement.ontouchstart")&&(kh=25);f=uh.prototype;
f.m=function(){this.dg();this.eg&&(w(this.eg),this.eg=null);w(this.tk);this.tk=null;w(this.uk);this.uk=null;Vb(this.o);this.u=this.Ba=this.Jb=this.o=null};
f.resize=function(a){if(!a&&(a=this.u.wc(),!a))return;if(this.hb){var b=a.wa;this.fg?b-=kh:this.O(b<a.tb);this.nb=b/a.Fd;if(-Infinity===this.nb||Infinity===this.nb||isNaN(this.nb))this.nb=0;var c=a.wa*this.nb,d=(a.Bb-a.ic)*this.nb;this.Ba.setAttribute("width",Math.max(0,c));this.Nc=a.rb;this.fg&&q&&(this.Nc+=a.rb+kh);this.zg=a.sb+a.Ua-kh;this.o.setAttribute("transform","translate("+this.Nc+", "+this.zg+")");this.Jb.setAttribute("width",Math.max(0,b));this.Ba.setAttribute("x",yh(this,d))}else{b=a.Ua;
this.fg?b-=kh:this.O(b<a.tb);this.nb=b/a.tb;if(-Infinity===this.nb||Infinity===this.nb||isNaN(this.nb))this.nb=0;c=a.Ua*this.nb;d=(a.Mc-a.Nb)*this.nb;this.Ba.setAttribute("height",Math.max(0,c));this.Nc=a.rb;q||(this.Nc+=a.wa-kh);this.zg=a.sb;this.o.setAttribute("transform","translate("+this.Nc+", "+this.zg+")");this.Jb.setAttribute("height",Math.max(0,b));this.Ba.setAttribute("y",yh(this,d))}zh(this)};
f.bh=function(){this.o=u("g",{},null);this.Jb=u("rect",{"class":"blocklyScrollbarBackground"},this.o);var a=Math.floor((kh-6)/2);this.Ba=u("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.o);vh(this.o,this.u.ce)};f.J=function(){return"none"!=this.o.getAttribute("display")};f.O=function(a){if(a!=this.J()){if(this.fg)throw"Unable to toggle visibility of paired scrollbars.";a?this.o.setAttribute("display","block"):(this.u.Jk({x:0,y:0}),this.o.setAttribute("display","none"))}};
f.qs=function(a){this.dg();if(!$b(a)){var b=Ah(a),b=this.hb?b.x:b.y,c=sh(this.Ba),c=this.hb?c.x:c.y,d=parseFloat(this.Ba.getAttribute(this.hb?"width":"height")),e=parseFloat(this.Ba.getAttribute(this.hb?"x":"y")),h=.95*d;b<=c?e-=h:b>=c+d&&(e+=h);this.Ba.setAttribute(this.hb?"x":"y",yh(this,e));zh(this)}a.stopPropagation()};
f.rs=function(a){this.dg();$b(a)||(this.Ls=parseFloat(this.Ba.getAttribute(this.hb?"x":"y")),this.Ns=this.hb?a.clientX:a.clientY,wh=v(document,"mouseup",this,this.dg),xh=v(document,"mousemove",this,this.ts));a.stopPropagation()};f.ts=function(a){this.Ba.setAttribute(this.hb?"x":"y",yh(this,this.Ls+((this.hb?a.clientX:a.clientY)-this.Ns)));zh(this)};f.dg=function(){Bh();gg(!0);wh&&(w(wh),wh=null);xh&&(w(xh),xh=null)};
function yh(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.hb?"width":"height",d=parseFloat(a.Jb.getAttribute(c)),c=parseFloat(a.Ba.getAttribute(c));b=Math.min(b,d-c)}return b}function zh(a){var b=parseFloat(a.Ba.getAttribute(a.hb?"x":"y")),c=parseFloat(a.Jb.getAttribute(a.hb?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.hb?c.x=b:c.y=b;a.u.Jk(c)}f.set=function(a){this.Ba.setAttribute(this.hb?"x":"y",a*this.nb);zh(this)};
function vh(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function Ch(a,b){Ch.k.constructor.call(this);this.wc=a;this.Jk=b;var c=[];c[1]=new Dh;c[2]=new Dh;c[3]=new Dh;c[4]=new Dh;this.lr=c}n(Ch,Ja);f=Ch.prototype;f.B=!0;f.hk=!1;f.mh=!1;f.scrollX=0;f.scrollY=0;f.Ab=null;f.oh=null;f.Hc=null;f.H=function(){this.o=u("g",{},null);this.aa=u("g",{},this.o);this.ce=u("g",{},this.o);this.wb();return this.o};
f.m=function(){this.B=!1;Ch.k.m.call(this);this.o&&(Vb(this.o),this.o=null);this.ce=this.aa=null;this.V&&(this.V.m(),this.V=null);this.Ab&&(this.Ab.m(),this.Ab=null)};function Eh(){var a=B;if(sa&&!z){a.Ab=new mh(a);var b=a.Ab.H();a.o.insertBefore(b,a.aa);a.Ab.g()}}f.oe=function(a){Ch.k.oe.call(this,a);Fh&&this==B&&-1==Gh.indexOf(a)&&Gh.push(a)};f.ng=function(a){Ch.k.ng.call(this,a);Fh&&this==B&&Gh.Bu(a)};f.clear=function(){gg();Ch.k.clear.call(this)};f.Jf=function(){return this.wc().wa};
f.F=function(){for(var a=this.Za(),b=0,c;c=a[b];b++)c.ad().length||c.F()};function Hh(a,b){a.wi=b;a.xi&&(w(a.xi),a.xi=null);b&&(a.xi=v(a.aa,"blocklySelectChange",a,function(){this.wi=!1}))}function Ih(a){var b=B;b.wi&&0!=ac&&Hh(b,!1);if(b.wi){var c=null;if(a&&(c=La(b,a),!c))return;Hh(b,!1);c?c.select():Jh&&Kh();setTimeout(function(){Hh(b,!0)},1)}}f.wb=function(){if(this.B){this.oh&&clearTimeout(this.oh);var a=this.aa;a&&(this.oh=setTimeout(function(){lh(a,"blocklyWorkspaceChange")},0))}};
function Lh(a,b){var c=Ah(b),c=new mc(c.x,c.y);if(a.Nj){if(a.Nj.contains(c))return rh(a.Ab,!0),ih(Mh),!0;rh(a.Ab,!1)}if(a.Mj&&a.Mj.contains(c))return ih(Mh),!0;ih(jh);return!1}Ch.prototype.clear=Ch.prototype.clear;/*

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
function Nh(a){this.I=a}f=Nh.prototype;f.ka=null;f.dd=0;f.ed=0;f.Vc=function(){this.Ha||(this.Ha=u("g",{},null),this.I.W().appendChild(this.Ha),v(this.Ha,"mouseup",this,this.Bh),this.qc())};f.m=function(){Vb(this.Ha);this.Ha=null;this.O(!1);this.I=null};f.qc=function(){this.I.ac?Xb(this.Ha,"blocklyIconGroup"):Wb(this.Ha,"blocklyIconGroup")};f.J=function(){return!!this.ka};f.Bh=function(){this.I.ac||this.O(!this.J())};f.Lc=function(){if(this.J()){var a=Yf(Zf(this.I.ah));this.ka.j(a)}};
function Oh(a){var b=a.I.ga(),c=Ph(a.Ha),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.dd||b!==a.ed)a.dd=d,a.ed=b,a.J()&&$g(a.ka,d,b)};/*

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
function Qh(a){Qh.k.constructor.call(this,null);this.yk=[];for(var b=0;b<a.length;b++){var c=D("block",{type:a[b]});this.yk[b]=c}}n(Qh,Nh);f=Qh.prototype;f.ge=0;f.cf=0;function Rh(a){a.Pd||(Nh.prototype.Vc.call(a),u("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.Ha),a.Pd=u("text",{"class":"blocklyIconMark",x:8,y:12},a.Ha),a.Pd.appendChild(document.createTextNode("\u2605")))}f.Bh=function(a){this.I.uc&&!z&&Nh.prototype.Bh.call(this,a)};
f.dh=function(){this.vd=u("svg",{x:ah,y:ah},null);u("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.vd);var a=this;this.u=new Ch(function(){var b=0;q&&(b+=a.ge);return{Ua:a.cf,wa:0,sb:0,rb:b}},null);this.u.V=new Sh;this.u.V.pe=!1;this.vd.appendChild(this.u.V.H());this.vd.appendChild(this.u.H());return this.vd};f.qc=function(){this.I.uc&&!z?Nh.prototype.qc.call(this):(this.O(!1),Xb(this.Ha,"blocklyIconGroup"))};
f.pg=function(){var a=2*ah,b=this.u.aa.getBBox(),c=Th(this.u.V),d;d=q?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.tb+20);d+=3*a;if(Math.abs(this.ge-d)>a||Math.abs(this.cf-b)>a)this.ge=d,this.cf=b,this.ka.Ic(d+a,b+a),this.vd.setAttribute("width",this.ge),this.vd.setAttribute("height",this.cf);q&&this.u.aa.setAttribute("transform","translate("+this.ge+",0)")};
f.O=function(a){if(a!=this.J())if(a){this.ka=new Yg(this.I.t,this.dh(),this.I.ec,this.dd,this.ed,null,null);var b=this;this.u.V.g(this.u);this.u.V.show(this.yk);this.nc=this.I.Gd(this.u);a=this.nc.Eb();for(var c=0,d;d=a[c];c++)d.F();this.nc.cc=!1;Tg(this.nc,!1);a=2*this.u.V.La;c=this.u.V.R+a;q&&(c=-c);this.nc.moveBy(c,a);this.I.Pe&&(this.I.Pe(this.nc),this.li=v(this.I.t.aa,"blocklyWorkspaceChange",this.I,function(){b.I.Pe(b.nc)}));this.pg();v(this.u.aa,"blocklyWorkspaceChange",this.I,function(){if(0==
ac)for(var a=Ka(b.u,!1),c=0,d;d=a[c];c++){var m=d.ga(),p=Uh(d);20>m.y+p.height&&d.moveBy(0,20-p.height-m.y)}b.nc.t==b.u&&(a=b.I.B,b.I.B=!1,b.I.Dd(b.nc),b.I.B=a,b.I.ra(),b.I.B&&b.I.F(),b.pg(),b.I.t.wb())});this.Lc()}else this.vd=null,this.u.m(),this.nc=this.u=null,this.ka.m(),this.ka=null,this.cf=this.ge=0,this.li&&(w(this.li),this.li=null)};f.m=function(){this.I.Gb=null;Nh.prototype.m.call(this)};/*

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
function Vh(a,b){this.h=a;this.w=null;this.type=b;this.ea=this.Rb=0;this.$b=!1;this.tc=this.h.t.lr}f=Vh.prototype;f.m=function(){if(this.w)throw"Disconnect connection before disposing of it.";this.$b&&Wh(this.tc[this.type],this);this.$b=!1;Xh==this&&(Xh=null);Yh==this&&(Yh=null)};function Zh(a){return 1==a.type||3==a.type}
function Wg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.t!==b.h.t)throw"Blocks are on different workspaces.";if($h[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.w)throw"Source connection already connected (value).";if(b.w){var c=H(b);c.bb(null);if(!c.G)throw"Orphan block does not have an output connection.";for(var d=a.h;d=ai(d,c);)if(H(d))d=H(d);else{Wg(d,c.G);c=null;break}c&&setTimeout(function(){bi(c.G,b)},ci)}}else{if(a.w)throw"Source connection already connected (block).";
if(b.w){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=H(b);c.bb(null);if(!c.K)throw"Orphan block does not have a previous connection.";for(d=a.h;d.C;)if(d.C.w)d=Mg(d);else{di(c.K,d.C)&&(Wg(d.C,c.K),c=null);break}c&&setTimeout(function(){bi(c.K,b)},ci)}}var e;Zh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.w=b;b.w=a;e.bb(d);d.B&&ei(d);e.B&&ei(e);d.B&&e.B&&(3==a.type||4==a.type?e.F():d.F())}
function ai(a,b){for(var c=!1,d=0;d<a.T.length;d++){var e=a.T[d].s;if(e&&1==e.type&&di(b.G,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.w;if(!a)throw"Source connection not connected.";if(a.w!=this)throw"Target connection not connected to source connection.";this.w=a.w=null;var b;Zh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.B&&b.F();a.B&&(ei(a),a.F())};function H(a){return a.w?a.w.h:null}
function bi(a,b){if(0==ac){var c=fi(a.h);if(!c.ac){var d=!1;if(!c.cc||z){c=fi(b.h);if(!c.cc||z)return;b=a;d=!0}c.W().parentNode.appendChild(c.W());var e=b.Rb+gi-a.Rb,h=b.ea+gi-a.ea;d&&(h=-h);q&&(e=-e);c.moveBy(e,h)}}}f.moveTo=function(a,b){this.$b&&Wh(this.tc[this.type],this);this.Rb=a;this.ea=b;hi(this.tc[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.Rb+a,this.ea+b)};
f.zh=function(){var a;1==this.type||2==this.type?(a=q?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=q?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.ga();Vh.Nf=u("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.Rb-b.x)+", "+(this.ea-b.y)+")"},this.h.W())};
function ii(a){var b=Math.round(a.w.Rb-a.Rb),c=Math.round(a.w.ea-a.ea);if(0!=b||0!=c){a=H(a);var d=a.W();if(!d)throw"block is not rendered.";d=Ph(d);a.W().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");ji(a,-b,-c)}}
function ki(a,b,c,d){function e(a){var c=h[a];if((2==c.type||4==c.type)&&c.w||1==c.type&&c.w&&(!H(c).cc||z)||!di(E,c))return!0;c=c.h;do{if(x==c)return!0;c=c.getParent()}while(c);var d=k-h[a].Rb,c=m-h[a].ea,d=Math.sqrt(d*d+c*c);d<=b&&(y=h[a],b=d);return c<b}if(a.w)return{s:null,Ak:b};var h=a.tc[$h[a.type]],k=a.Rb+c,m=a.ea+d;c=0;for(var p=d=h.length-2;c<p;)h[p].ea<m?c=p:d=p,p=Math.floor((c+d)/2);d=c=p;var y=null,x=a.h,E=a;if(h.length){for(;0<=c&&e(c);)c--;do d++;while(d<h.length&&e(d))}return{s:y,Ak:b}}
function di(a,b){if(!a.Cd||!b.Cd)return!0;for(var c=0;c<a.Cd.length;c++)if(-1!=b.Cd.indexOf(a.Cd[c]))return!0;return!1}f.v=function(a){a?(ea(a)||(a=[a]),this.Cd=a,this.w&&!di(this,this.w)&&(Zh(this)?H(this).bb(null):this.h.bb(null),this.h.Ma())):this.Cd=null;return this};
function li(a){var b=gi;function c(a){var c=e-d[a].Rb,k=h-d[a].ea;Math.sqrt(c*c+k*k)<=b&&p.push(d[a]);return k<b}var d=a.tc[$h[a.type]],e=a.Rb,h=a.ea;a=0;for(var k=d.length-2,m=k;a<m;)d[m].ea<h?a=m:k=m,m=Math.floor((a+k)/2);var k=a=m,p=[];if(d.length){for(;0<=a&&c(a);)a--;do k++;while(k<d.length&&c(k))}return p}
function mi(a){a.$b||hi(a.tc[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=H(a)){var c;a.isCollapsed()?(c=[],a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K)):c=ni(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,mi(c[d]));0==b.length&&(b[0]=a)}return b}function Dh(){}Dh.prototype=[];
function hi(a,b){if(b.$b)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].ea<b.ea)c=e+1;else if(a[e].ea>b.ea)d=e;else{c=e;break}}a.splice(c,0,b);b.$b=!0}
function Wh(a,b){if(!b.$b)throw"Connection not in database.";b.$b=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].ea<b.ea?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].ea==b.ea;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].ea==b.ea);throw"Unable to find connection in connectionDB.";};/*

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
var C={Us:0,Cr:function(){var a=(++C.Us).toString();return Fh?oi(a):a},eu:function(a){var b={g:function(){var b=this;this.j(a.sj);this.p=a.p;"string"==typeof a.kb?this.i(a.kb):"function"==typeof a.kb&&this.i(function(){return a.kb(b)});"undefined"!=a.xs?K(this,!0,a.xs):(L(this,"undefined"==typeof a.zs?!0:a.zs),M(this,"undefined"==typeof a.ms?!0:a.ms));var d=[];d.push(a.text);a.cr&&a.cr.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
qb("addTemplate() can only handle value inputs.")});d.push(1);a.Yr&&this.Hu(a.Yr);pi.prototype.sa.apply(this,d)}};b.Ia=a.Ju?function(){var b=a.js?a.xu():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.js;C[a.iu]=b}};/*

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
function qi(a){qi.k.constructor.call(this,a);this.Vc()}n(qi,Nh);f=qi.prototype;f.Ka="";f.R=160;f.Ga=80;f.Vc=function(){Nh.prototype.Vc.call(this);u("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.Ha);this.Pd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Ha);this.Pd.appendChild(document.createTextNode("?"))};
f.dh=function(){this.we=u("foreignObject",{x:ah,y:ah},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.qb=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.qb.className="blocklyCommentTextarea";this.qb.setAttribute("dir",q?"RTL":"LTR");a.appendChild(this.qb);this.we.appendChild(a);v(this.qb,"mouseup",this,this.Rs);return this.we};
f.qc=function(){this.J()&&(this.O(!1),this.O(!0));Nh.prototype.qc.call(this)};f.pg=function(){var a=this.ka.$c(),b=2*ah;this.we.setAttribute("width",a.width-b);this.we.setAttribute("height",a.height-b);this.qb.style.width=a.width-b-4+"px";this.qb.style.height=a.height-b-4+"px"};
f.O=function(a){if(a!=this.J())if((!this.I.uc||z)&&!this.qb||r)ri.prototype.O.call(this,a);else{var b=this.fb(),c=this.$c();a?(this.ka=new Yg(this.I.t,this.dh(),this.I.ec,this.dd,this.ed,this.R,this.Ga),v(this.ka.Mb,"resize",this,this.pg),this.Lc(),this.Ka=null):(this.ka.m(),this.we=this.qb=this.ka=null);this.ia(b);this.Ic(c.width,c.height)}};f.Rs=function(){gh(this.ka);this.qb.focus()};f.$c=function(){return this.J()?this.ka.$c():{width:this.R,height:this.Ga}};
f.Ic=function(a,b){this.qb?this.ka.Ic(a,b):(this.R=a,this.Ga=b)};f.fb=function(){return this.qb?this.qb.value:this.Ka};f.ia=function(a){this.qb?this.qb.value=a:this.Ka=a};f.m=function(){this.I.ba=null;Nh.prototype.m.call(this)};/*

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
var si=!1,ti=0,ui=0,vi={x:0,y:0},wi=null,xi=null,yi=null,zi=null,Ai=null,Bi=null;function Ci(){var a=u("g",{"class":"blocklyHidden"},null);yi=a;Bi=u("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Ai=u("rect",{"class":"blocklyTooltipBackground"},a);zi=u("text",{"class":"blocklyTooltipText"},a);return a}function Di(a){v(a,"mouseover",null,Ei);v(a,"mouseout",null,Fi);v(a,"mousemove",null,Gi)}function Ei(a){for(a=a.target;!l(a.kb)&&!ha(a.kb);)a=a.kb;wi!=a&&(Hi(),xi=null,wi=a);clearTimeout(ti)}
function Fi(){ti=setTimeout(function(){xi=wi=null;Hi()},1);clearTimeout(ui)}function Gi(a){wi&&wi.kb&&0==ac&&!Ii&&(si?(a=Ah(a),10<Math.sqrt(Math.pow(vi.x-a.x,2)+Math.pow(vi.y-a.y,2))&&Hi()):xi!=wi&&(clearTimeout(ui),vi=Ah(a),ui=setTimeout(Ji,1E3)))}function Hi(){si&&(si=!1,yi&&(yi.style.display="none"));clearTimeout(ui)}
function Ji(){xi=wi;if(yi){Yb(zi);var a=wi.kb;ha(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,h,k=1;do{e=d;h=b;for(var b=[],m=c.length/k,p=1,d=0;d<c.length-1;d++)p<(d+1.5)/m?(p++,b[d]=!0):b[d]=!1;for(var b=Ki(c,b,a),d=Li(c,b,a),m=c,p=[],y=0;y<m.length;y++)p.push(m[y]),void 0!==b[y]&&p.push(b[y]?"\n":" ");b=p.join("");k++}while(d>e);a=h}a=a.split("\n");for(c=0;c<a.length;c++)u("tspan",{dy:"1em",
x:5},zi).appendChild(document.createTextNode(a[c]));si=!0;yi.style.display="block";a=zi.getBBox();c=10+a.width;e=a.height;Ai.setAttribute("width",c);Ai.setAttribute("height",e);Bi.setAttribute("width",c);Bi.setAttribute("height",e);if(q)for(e=a.width,h=0;k=zi.childNodes[h];h++)k.setAttribute("text-anchor","end"),k.setAttribute("x",e+5);e=vi.x;e=q?e-(0+c):e+0;c=vi.y+10;h=Mi();c+a.height>h.height&&(c-=a.height+20);q?e=Math.max(5,e):e+a.width>h.width-10&&(e=h.width-a.width-10);yi.setAttribute("transform",
"translate("+e+","+c+")")}}function Li(a,b,c){for(var d=[0],e=[],h=0;h<a.length;h++)d[d.length-1]+=a[h].length,!0===b[h]?(d.push(0),e.push(a[h].charAt(a[h].length-1))):!1===b[h]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(h=b=0;h<d.length;h++)b-=2*Math.pow(Math.abs(c-d[h]),1.5),b-=Math.pow(a-d[h],1.5),-1!=".?!".indexOf(e[h])?b+=c/3:-1!=",;)]}".indexOf(e[h])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Ki(a,b,c){for(var d=Li(a,b,c),e,h=0;h<b.length-1;h++)if(b[h]!=b[h+1]){var k=[].concat(b);k[h]=!k[h];k[h+1]=!k[h+1];var m=Li(a,k,c);m>d&&(d=m,e=k)}return e?Ki(a,e,c):b};/*

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
function Ni(a){this.h=null;this.Aa=new Sb(0,25);this.ia(a)}n(Ni,Tb);f=Ni.prototype;f.clone=function(){return new Ni(this.fb())};f.xd=!1;f.g=function(a){this.h||(this.h=a,this.Ja=u("text",{"class":"blocklyText"},null),a.W().appendChild(this.Ja),this.Ja.kb=this.h,Di(this.Ja),Ub(this))};f.m=function(){Vb(this.Ja);this.Ja=null};f.W=function(){return this.Ja};f.i=function(a){this.Ja.kb=a};/*

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
function Oi(a,b,c,d){this.type=a;this.name=b;this.h=c;this.s=d;this.Pa=[];this.align=-1;this.oa=!0}function N(a,b,c){if(!b&&!c)return a;l(b)&&(b=new Ni(b));a.h.B&&b.g(a.h);b.name=c;b.Uh&&N(a,b.Uh);a.Pa.push(b);b.ti&&N(a,b.ti);a.h.B&&(a.h.F(),a.h.Ma());return a}f=Oi.prototype;f.J=function(){return this.oa};
f.O=function(a){var b=[];if(this.oa==a)return b;for(var c=(this.oa=a)?"block":"none",d=0,e;e=this.Pa[d];d++)e.O(a);if(this.s){if(a)b=mi(this.s);else if(d=this.s,d.$b&&Wh(d.tc[d.type],d),d.w){e=H(d).Eb();for(var h=0;h<e.length;h++){for(var k=e[h],m=ni(k,!0),p=0;p<m.length;p++){var y=m[p];y.$b&&Wh(d.tc[y.type],y)}k=Pi(k);for(m=0;m<k.length;m++)k[m].O(!1)}}if(d=H(this.s))d.W().style.display=c,a||(d.B=!1)}return b};f.v=function(a){if(!this.s)throw"This input does not have a connection.";this.s.v(a);return this};
function Qi(a,b){a.align=b;a.h.B&&a.h.F();return a}f.g=function(){for(var a=0;a<this.Pa.length;a++)this.Pa[a].g(this.h)};f.m=function(){for(var a=0,b;b=this.Pa[a];a++)b.m();this.s&&this.s.m();this.h=null};/*

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
function ri(a){ri.k.constructor.call(this,a);this.Vc()}n(ri,Nh);f=ri.prototype;f.Ka="";f.Vc=function(){Nh.prototype.Vc.call(this);u("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.Ha);this.Pd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Ha);this.Pd.appendChild(document.createTextNode("!"))};
f.O=function(a){if(a!=this.J())if(a){var b=this.Ka;a=u("text",{"class":"blocklyText blocklyBubbleText",y:ah},null);for(var b=b.split("\n"),c=0;c<b.length;c++)u("tspan",{dy:"1em",x:ah},a).appendChild(document.createTextNode(b[c]));this.ka=new Yg(this.I.t,a,this.I.ec,this.dd,this.ed,null,null);if(q)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+ah);this.Lc();a=this.ka.$c();this.ka.Ic(a.width,a.height)}else this.ka.m(),this.ka=null};
f.ia=function(a){this.Ka!=a&&(this.Ka=a,this.J()&&(this.O(!1),this.O(!0)))};f.m=function(){this.I.gc=null;Nh.prototype.m.call(this)};/*

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
function pi(){}function hc(a,b){if(Fh)return Ri.create(pi,a,b);var c=a.B?new Si:new pi;c.initialize(a,b);return c}f=pi.prototype;f.initialize=function(a,b){this.id=C.Cr();a.oe(this);this.fill(a,b)};
f.fill=function(a,b){this.K=this.C=this.G=null;this.T=[];this.disabled=this.B=this.Ke=!1;this.kb="";this.contextMenu=!0;this.hd=null;this.Ub=[];this.uc=this.cc=this.Id=!0;this.Uc=!1;this.ba=null;this.Zk=new mc(0,0);this.t=a;this.ac=a.hk;if(b){this.type=b;var c=C[b],d;for(d in c)this[d]=c[d]}ha(this.g)&&this.g()};function Rg(a,b){return Fh?Ti.get(a):La(b,a)}
f.m=function(a,b,c){Ui(this,a,!1);this.t&&!c&&(this.t.ng(this),this.t=null);Jh==this&&(Jh=null);for(a=this.Ub.length-1;0<=a;a--)this.Ub[a].m(!1);for(a=0;b=this.T[a];a++)b.m();this.T.length=0;b=ni(this,!0);for(a=0;a<b.length;a++)c=b[a],c.w&&c.disconnect(),b[a].m();if(Fh&&!Vi)Ti["delete"](this.id.toString())};
function Ui(a,b,c){c=c&&!!a.getParent();if(a.G)a.G.w&&a.bb(null);else{var d=null;a.K&&a.K.w&&(d=a.K.w,a.bb(null));var e=Mg(a);b&&e&&(b=a.C.w,e.bb(null),d&&di(d,b)&&Wg(d,b))}c&&a.moveBy(gi*(q?-1:1),2*gi)}function ni(a,b){var c=[];if(b||a.B)if(a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K),b||!a.Uc)for(var d=0,e;e=a.T[d];d++)e.s&&c.push(e.s);return c}
f.Ma=function(){if(0==ac){var a=fi(this);if(!a.ac)for(var b=ni(this,!1),c=0;c<b.length;c++){var d=b[c];d.w&&Zh(d)&&H(d).Ma();for(var e=li(d),h=0;h<e.length;h++){var k=e[h];d.w&&k.w||fi(k.h)!=a&&(Zh(d)?bi(k,d):bi(d,k))}}}};f.getParent=function(){return this.hd};function Wi(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Mg(a)==b);return a}}function Mg(a){return a.C&&H(a.C)}function fi(a){var b=a;do a=b,b=a.hd;while(b);return a}f.ad=function(){return this.Ub};
f.bb=function(a){if(this.hd){for(var b=this.hd.Ub,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.hd=null;this.K&&this.K.w&&this.K.disconnect();this.G&&this.G.w&&this.G.disconnect()}else xb(Ka(this.t,!1),this)&&this.t.ng(this);(this.hd=a)?a.Ub.push(this):this.t.oe(this)};f.Eb=function(){for(var a=[this],b,c=0;b=this.Ub[c];c++)a.push.apply(a,b.Eb());return a};function Tg(a,b){a.Id=b;a.Rk&&Xi(a.Rk)}
function Ug(a,b){a.uc=b;for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)h.qc();d=Pi(a);for(c=0;c<d.length;c++)d[c].qc()}f.i=function(a){this.kb=a};f.j=function(a){this.ah=a;this.B&&this.Lc()};function Yi(a,b){for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)if(h.name===b)return h;return null}function O(a,b){var c=Yi(a,b);return c?c.Fa():null}function ic(a,b,c){Yi(a,c).ja(b)}
function L(a,b,c){a.K&&(a.K.m(),a.K=null);b&&(void 0===c&&(c=null),a.K=new Vh(a,4),a.K.v(c));a.B&&(a.F(),a.Ma())}function M(a,b,c){a.C&&(a.C.m(),a.C=null);b&&(void 0===c&&(c=null),a.C=new Vh(a,3),a.C.v(c));a.B&&(a.F(),a.Ma())}function K(a,b,c){a.G&&(a.G.m(),a.G=null);b&&(void 0===c&&(c=null),a.G=new Vh(a,2),a.G.v(c));a.B&&(a.F(),a.Ma())}function Sg(a,b){a.Ke=b;a.B&&(a.F(),a.Ma(),a.t.wb())}f.Se=function(a){this.disabled=a};function Zi(a){for(;;){a=Wi(a);if(!a)return!1;if(a.disabled)return!0}}
f.isCollapsed=function(){return this.Uc};f.pd=function(a){this.Uc=a};f.toString=function(a){for(var b=[],c=0,d;d=this.T[c];c++){for(var e=0,h;h=d.Pa[e];e++)b.push(h.fb());d.s&&((d=H(d.s))?b.push(d.toString()):b.push("?"))}b=Pa(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function P(a,b){return $i(a,1,b)}function Q(a,b){return $i(a,5,b||"")}
f.sa=function(a,b){function c(a){a instanceof Tb?N(this,a):N(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.sa.Op),h=[],k=0;k<e.length;k+=2){var m=Pa(e[k]),p=void 0;m&&h.push(new Ni(m));if((m=e[k+1])&&"%"==m.charAt(0)){var m=parseInt(m.substring(1),10),y=arguments[m];y[1]instanceof Tb?h.push([y[0],y[1]]):p=Qi(P(this,y[0]).v(y[1]),y[2]);arguments[m]=null}else"\n"==m&&h.length&&(p=Q(this));p&&h.length&&(h.forEach(c,p),h=[])}h.length&&(p=Qi(Q(this),d),h.forEach(c,
p));for(k=1;k<arguments.length-1;k++);Sg(this,!a.match(this.sa.om))};f.sa.Op=/(%\d+|\n)/;f.sa.om=/%1\s*$/;function $i(a,b,c){var d=null;if(1==b||3==b)d=new Vh(a,b);b=new Oi(b,c,a,d);a.T.push(b);a.B&&(a.F(),a.Ma());return b}function aj(a,b,c){if(b!=c){for(var d=-1,e=c?-1:a.T.length,h=0,k;k=a.T[h];h++)if(k.name==b){if(d=h,-1!=e)break}else if(c&&k.name==c&&(e=h,-1!=d))break;b=d;c=a.T[b];a.T.splice(b,1);b<e&&e--;a.T.splice(e,0,c);a.B&&(a.F(),a.Ma())}}
function R(a,b,c){for(var d=0,e;e=a.T[d];d++)if(e.name==b){e.s&&e.s.w&&H(e.s).bb(null);e.m();a.T.splice(d,1);a.B&&(a.F(),a.Ma());return}c||qb('Input "%s" not found.',b)}function I(a,b){for(var c=0,d;d=a.T[c];c++)if(d.name==b)return d;return null}function bj(a,b){var c=I(a,b);return c&&c.s&&H(c.s)}f.Cf=function(){return this.ba||""};f.Re=function(a){this.ba=a};f.sd=function(){};f.$d=function(){};f.ga=function(){return this.Zk};f.moveBy=function(a,b){this.Zk.translate(a,b)};/*

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
function Sh(){var a=this;this.u=new Ch(function(){return Th(a)},function(b){var c=Th(a);c&&(ga(b.y)&&(a.u.scrollY=-c.tb*b.y-c.Nb),a.u.aa.setAttribute("transform","translate(0,"+(a.u.scrollY+c.sb)+")"))});this.u.hk=!0;this.Uj=[];this.Ga=this.R=0;this.Zg=[];this.bc=[]}var cj,dj,ej,fj,gj,hj;f=Sh.prototype;f.pe=!0;f.La=8;f.H=function(){this.o=u("g",{},null);this.Jb=u("path",{"class":"blocklyFlyoutBackground"},this.o);this.o.appendChild(this.u.H());return this.o};
f.m=function(){this.jc();w(this.Uj);this.Uj.length=0;this.od&&(this.od.m(),this.od=null);this.u=null;this.o&&(Vb(this.o),this.o=null);this.Xe=this.Jb=null};function Th(a){if(!a.J())return null;var b=a.Ga-2*a.La,c=a.R;try{var d=a.u.aa.getBBox()}catch(e){d={height:0,y:0}}return{Ua:b,wa:c,tb:d.height+d.y,Mc:-a.u.scrollY,Nb:0,sb:a.La,rb:0}}
f.g=function(a){this.Xe=a;this.od=new uh(this.u,!1,!1);this.jc();v(window,"resize",this,this.Ec);this.Ec();v(this.o,"wheel",this,this.Yk);v(this.o,"mousewheel",this,this.Yk);v(this.Xe.aa,"blocklyWorkspaceChange",this,this.nh);v(this.o,"mousedown",this,this.cg)};
f.Ec=function(){if(this.J()){var a=this.Xe.wc();if(a){var b=this.R-this.La;q&&(b*=-1);var c=["M "+(q?this.R:0)+",0"];c.push("h",b);c.push("a",this.La,this.La,0,0,q?0:1,q?-this.La:this.La,this.La);c.push("v",Math.max(0,a.Ua-2*this.La));c.push("a",this.La,this.La,0,0,q?0:1,q?this.La:-this.La,this.La);c.push("h",-b);c.push("z");this.Jb.setAttribute("d",c.join(" "));b=a.rb;q&&(b+=a.wa,b-=this.R);this.o.setAttribute("transform","translate("+b+","+a.sb+")");this.Ga=a.Ua;this.od&&this.od.resize()}}};
f.Yk=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Eb&&(b*=10);var c=Th(this),b=c.Mc+b,b=Math.min(b,c.tb-c.Ua),b=Math.max(b,0);this.od.set(b);a.preventDefault()}};f.J=function(){return this.o&&"block"==this.o.style.display};f.jc=function(){if(this.J()){this.o.style.display="none";for(var a=0,b;b=this.bc[a];a++)w(b);this.bc.length=0;this.Yh&&(w(this.Yh),this.Yh=null)}};
f.show=function(a){this.jc();for(var b=Ka(this.u,!1),c=0,d;d=b[c];c++)d.t==this.u&&d.m(!1,!1);for(var c=0,e;e=this.Zg[c];c++)Vb(e);this.Zg.length=0;var h=this.La;this.o.style.display="block";var b=[],k=[];if("VARIABLE"==a)bg(b,k,h,this.u);else if("PROCEDURE"==a)gc(b,k,h,this.u);else for(var m=0;d=a[m];m++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Qg(this.u,d),b.push(d),k.push(3*h));a=h;for(m=0;d=b[m];m++){c=d.Eb();e=0;for(var p;p=c[e];e++)p.ac=!0,p.Re(null);d.F();p=d.W();e=Uh(d);c=q?0:h+8;d.moveBy(c,
a);a+=e.height+k[m];e=u("rect",{"fill-opacity":0},null);this.u.aa.insertBefore(e,d.W());d.ve=e;this.Zg[m]=e;this.pe?this.bc.push(v(p,"mousedown",null,ij(this,d))):this.bc.push(v(p,"mousedown",null,jj(this,d)));this.bc.push(v(p,"mouseover",d,d.Pg));this.bc.push(v(p,"mouseout",d,d.mg));this.bc.push(v(e,"mousedown",null,ij(this,d)));this.bc.push(v(e,"mouseover",d,d.Pg));this.bc.push(v(e,"mouseout",d,d.mg))}this.bc.push(v(this.Jb,"mouseover",this,function(){for(var a=Ka(this.u,!1),b=0,c;c=a[b];b++)c.mg()}));
this.R=0;this.Bk();this.nh();kj(window,"resize");this.Yh=v(this.u.aa,"blocklyWorkspaceChange",this,this.Bk);this.u.wb()};
f.Bk=function(){for(var a=0,b=this.La,c=Ka(this.u,!1),d=0,e;e=c[d];d++)var h=Uh(e),a=Math.max(a,h.width);a+=b+8+b/2+kh;if(this.R!=a){for(d=0;e=c[d];d++){var h=Uh(e),k=e.ga();if(q){var m=a-b-8-k.x;e.moveBy(m,0);k.x+=m}e.ve&&(e.ve.setAttribute("width",h.width),e.ve.setAttribute("height",h.height),e.ve.setAttribute("x",q?k.x-h.width:k.x),e.ve.setAttribute("y",k.y))}this.R=a;lh(window,"resize")}};
function jj(a,b){return function(c){lj();gg();$b(c)?mj(b,c):(Bh(),ih(jh),cj=c,dj=b,ej=a,fj=v(document,"mouseup",this,lj),gj=v(document,"mousemove",this,a.ss));c.stopPropagation()}}f.cg=function(a){$b(a)||(gg(!0),nj(),this.Mk=a.clientY,hj=v(document,"mousemove",this,this.Ph),fj=v(document,"mouseup",this,nj),a.preventDefault(),a.stopPropagation())};f.Ph=function(a){var b=a.clientY-this.Mk;this.Mk=a.clientY;a=Th(this);b=a.Mc-b;b=Math.min(b,a.tb-a.Ua);b=Math.max(b,0);this.od.set(b)};
f.ss=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Bh(),Math.sqrt(Math.pow(a.clientX-cj.clientX,2)+Math.pow(a.clientY-cj.clientY,2))>oj&&ij(ej,dj)(cj))};function ij(a,b){return function(c){if(!$b(c)&&!b.disabled){var d=Lg(b),d=Qg(a.Xe,d),e=b.W();if(!e)throw"originBlock is not rendered.";var e=sh(e),h=d.W();if(!h)throw"block is not rendered.";h=sh(h);d.moveBy(e.x-h.x,e.y-h.y);a.pe?a.jc():a.nh();d.cg(c)}}}
f.nh=function(){for(var a=Ma(this.Xe),b=Ka(this.u,!1),c=0,d;d=b[c];c++){var e=d.Eb().length>a;d.Se(e)}};function nj(){fj&&(w(fj),fj=null);gj&&(w(gj),gj=null);hj&&(w(hj),hj=null);fj&&(w(fj),fj=null);ej=dj=cj=null}f.Ae=function(){var a=sh(this.o).x;q||(a-=1E7);return new oc(a,-1E7,1E7+this.R,this.Ga+2E7)};function pj(a){if("function"==typeof a.uh)return a.uh();if(l(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function qj(a){this.va=void 0;this.Wa={};if(a){var b;if("function"==typeof a.sh)b=a.sh();else if("function"!=typeof a.uh)if(fa(a)||l(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=pj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=qj.prototype;f.set=function(a,b){rj(this,a,b,!1)};f.add=function(a,b){rj(this,a,b,!0)};
function rj(a,b,c,d){for(var e=0;e<b.length;e++){var h=b.charAt(e);a.Wa[h]||(a.Wa[h]=new qj);a=a.Wa[h]}if(d&&void 0!==a.va)throw Error('The collection already contains the key "'+b+'"');a.va=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.Wa[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.va:void 0};f.uh=function(){var a=[];sj(this,a);return a};function sj(a,b){void 0!==a.va&&b.push(a.va);for(var c in a.Wa)sj(a.Wa[c],b)}
f.sh=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.Wa[e])return[];c=c.Wa[e]}tj(c,a,b)}else tj(this,"",b);return b};function tj(a,b,c){void 0!==a.va&&c.push(b);for(var d in a.Wa)tj(a.Wa[d],b+d,c)}f.clear=function(){this.Wa={};this.va=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.Wa[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.Wa[e]}a=b.va;for(delete b.va;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.Wa[e].gk())delete b.Wa[e];else break;return a};f.clone=function(){return new qj(this)};f.gk=function(){var a;if(a=void 0===this.va)a:{a=this.Wa;for(var b in a){a=!1;break a}a=!0}return a};function uj(){this.gd=new qj}f=uj.prototype;f.xa="";f.Kh=null;f.Yf=null;f.Ne=0;f.Td=0;function vj(a,b){var c=!1,d=a.gd.sh(b);d&&d.length&&(a.Td=0,a.Ne=0,c=a.gd.get(d[0]),c=wj(a,c))&&(a.Kh=d);return c}function wj(a,b){var c;b&&(a.Td<b.length&&(c=b[a.Td],a.Yf=b),c&&(c.ai(),c.select()));return!!c}f.clear=function(){this.xa=""};var xj="StopIteration"in g?g.StopIteration:Error("StopIteration");function yj(){}yj.prototype.next=function(){throw xj;};yj.prototype.cj=function(){return this};function zj(a){if(a instanceof yj)return a;if("function"==typeof a.cj)return a.cj();if(fa(a)){var b=0,c=new yj;c.next=function(){for(;;){if(b>=a.length)throw xj;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function Aj(a){try{return zj(a).next()}catch(b){if(b!=xj)throw b;return null}};function Bj(a,b,c,d,e){this.reset(a,b,c,d,e)}Bj.prototype.Vj=null;var Cj=0;Bj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Cj++;d||qa();this.Me=a;this.hs=b;delete this.Vj};Bj.prototype.Ik=function(a){this.Me=a};function Dj(a){this.$f=a;this.dk=this.qa=this.Me=this.ab=null}function Ej(a,b){this.name=a;this.value=b}Ej.prototype.toString=function(){return this.name};var Fj=new Ej("WARNING",900),Gj=new Ej("INFO",800),Hj=new Ej("CONFIG",700),Ij=new Ej("FINE",500);f=Dj.prototype;f.getName=function(){return this.$f};f.getParent=function(){return this.ab};f.ad=function(){this.qa||(this.qa={});return this.qa};f.Ik=function(a){this.Me=a};
function Jj(a){if(a.Me)return a.Me;if(a.ab)return Jj(a.ab);qb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Jj(this).value)for(ha(b)&&(b=b()),a=new Bj(a,String(b),this.$f),c&&(a.Vj=c),c="log:"+a.hs,g.console&&(g.console.timeStamp?g.console.timeStamp(c):g.console.markTimeline&&g.console.markTimeline(c)),g.msWriteProfilerMark&&g.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.dk)for(var e=0,h=void 0;h=b.dk[e];e++)h(d);c=c.getParent()}};
f.gc=function(a,b){this.log(Fj,a,b)};f.info=function(a,b){this.log(Gj,a,b)};var Kj={},Lj=null;function Mj(a){Lj||(Lj=new Dj(""),Kj[""]=Lj,Lj.Ik(Hj));var b;if(!(b=Kj[a])){b=new Dj(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Mj(a.substr(0,c));c.ad()[d]=b;b.ab=c;Kj[a]=b}return b};function Nj(a){me.call(this);this.D=a;a=r?"focusout":"blur";this.as=Zd(this.D,r?"focusin":"focus",this,!r);this.bs=Zd(this.D,a,this,!r)}n(Nj,me);Nj.prototype.handleEvent=function(a){var b=new Td(a.cb);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Nj.prototype.Z=function(){Nj.k.Z.call(this);fe(this.as);fe(this.bs);delete this.D};function Oj(a,b,c){sg.call(this,a,b,c);this.ue=!0;Bg(this,!0);this.na=this;this.Ze=new uj;if(r)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.nk)&&a.gc("Failed to enable background image cache",void 0)}}n(Oj,sg);Oj.prototype.$a=null;Oj.prototype.ph=null;var Pj=Oj.prototype,Qj=Mj("goog.ui.tree.TreeControl");Pj.nk=Qj;f=Oj.prototype;f.qh=!1;f.Br=null;f.We=!0;f.ji=!0;f.td=!0;f.ki=!0;f.gb=function(){return this};f.Kd=function(){return 0};f.ai=function(){};
f.Kr=function(){this.qh=!0;Ce(this.n(),"focused");this.na&&this.na.select()};f.Gr=function(){this.qh=!1;Ee(this.n(),"focused")};f.hasFocus=function(){return this.qh};f.lb=function(){return!this.td||Oj.k.lb.call(this)};f.oc=function(a){this.td?Oj.k.oc.call(this,a):this.ue=a};f.rh=function(){return Nc};f.Ef=function(){var a=zg(this);return a?a.firstChild:null};f.Df=function(){return null};f.ee=function(){};f.Be=function(){return Oj.k.Be.call(this)+(this.td?"":" "+this.Na.Gj)};
f.zf=function(){var a=this.lb(),b=this.Ar;if(a&&b)return b;b=this.Tr;if(!a&&b)return b;b=this.Na;return a&&b.Fj?b.Wc+" "+b.Fj:!a&&b.Bj?b.Wc+" "+b.Bj:""};f.Ib=function(a){if(this.na!=a){var b=!1;this.na&&(b=this.na==this.Br,Bg(this.na,!1));if(this.na=a)Bg(a,!0),b&&a.select();this.dispatchEvent("change")}};f.bd=function(){return this.na};function Rj(a){0!=a.We&&(a.We=!1,a.Q&&Sj(a))}
function Sj(a){function b(a){var k=wg(a);if(k){var m=!d||c==a.getParent()&&!e?a.Na.zj:a.Na.yj;k.className=m;if(k=a.Df())k.className=Fg(a)}ue(a,b)}var c=a,d=c.We,e=c.ki;b(a)}function Uj(a){0!=a.ji&&(a.ji=!1,a.Q&&Sj(a))}function Vj(a){if(0!=a.td){a.td=!1;if(a.Q){var b=zg(a);b&&(b.className=a.Be())}a.bd()==a&&we(a,0)&&a.Ib(we(a,0))}}f.Qf=function(){Oj.k.Qf.call(this);var a=this.n();Je(a,"tree");Ke(a,"labelledby",vg(this).id)};
f.ya=function(){Oj.k.ya.call(this);var a=this.n();a.className=this.Na.Jj;a.setAttribute("hideFocus","true");a=this.n();a.tabIndex=0;var b=this.$a=new Ye(a),c=this.ph=new Nj(a);se(this).N(c,"focusout",this.Gr).N(c,"focusin",this.Kr).N(b,"key",this.Fb).N(a,"mousedown",this.wh).N(a,"click",this.wh).N(a,"dblclick",this.wh);this.Qf()};f.Db=function(){Oj.k.Db.call(this);this.$a.m();this.$a=null;this.ph.m();this.ph=null};
f.wh=function(a){var b=this.nk;b&&b.log(Ij,"Received event "+a.type,void 0);if(b=Wj(this,a))switch(a.type){case "mousedown":b.Oh(a);break;case "click":a.preventDefault();break;case "dblclick":b.qk(a)}};
f.Fb=function(a){var b=!1,b=this.Ze,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Kh;if(d){var e=null,h=!1;if(b.Yf){var k=b.Td+c;0<=k&&k<b.Yf.length?(b.Td=k,e=b.Yf):h=!0}e||(k=b.Ne+c,0<=k&&k<d.length&&(b.Ne=k),d.length>b.Ne&&(e=b.gd.get(d[b.Ne])),e&&e.length&&h&&(b.Td=-1==c?e.length-1:0));wj(b,e)&&(b.Kh=d)}c=!0}break;case 8:d=b.xa.length-1;c=!0;0<d?(b.xa=b.xa.substring(0,d),vj(b,b.xa)):0==d?b.xa="":c=!1;break;case 27:b.xa="",c=!0}if(!(b=c)&&(b=this.na)){b=this.na;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;ye(b)&&(b.lb()?we(b,0).select():b.oc(!0));break;case 37:if(a.altKey)break;ye(b)&&b.lb()&&b.Le?b.oc(!1):(d=b.getParent(),e=b.gb(),d&&(e.td||d!=e)&&d.select());break;case 40:a:if(ye(b)&&b.lb())d=we(b,0);else{for(d=b;d!=b.gb();){e=d.Pb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.jd;null!=d?d=Ig(d):(d=b.getParent(),e=b.gb(),d=!e.td&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.gb())&&
e.Ze.clear());b=c}b||(b=this.Ze,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.xa)&&(b.xa+=d,c=vj(b,b.xa))),b=c);b&&a.preventDefault();return b};function Wj(a,b){for(var c=null,d=b.target;null!=d;){if(c=ug[d.id])return c;if(d==a.n())break;d=d.parentNode}return null}f.createNode=function(a){return new Jg(a||Nc,this.Na,this.eb())};
function Hg(a,b){var c=a.Ze,d=b.fb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.gd.get(d);e?e.push(b):c.gd.set(d,[b])}}f.removeNode=function(a){var b=this.Ze,c=a.fb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.gd.get(c);d&&(yb(d,a),d.length&&b.gd.remove(c))}};/*

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
function Xj(a,b){this.Pc=D("div","blocklyToolboxDiv");this.Pc.setAttribute("dir",q?"RTL":"LTR");b.appendChild(this.Pc);this.V=new Sh;a.appendChild(this.V.H());v(this.Pc,"mousedown",this,function(a){$b(a)||a.target==this.Pc?gg(!1):gg(!0)})}f=Xj.prototype;f.width=0;f.Bg={Dh:19,Jj:"blocklyTreeRoot",Gj:"blocklyHidden",Hj:"",gh:"blocklyTreeRow",Ij:"blocklyTreeLabel",Wc:"blocklyTreeIcon",eh:"blocklyTreeIconOpen",fh:"blocklyTreeIconNone",Kj:"blocklyTreeSelected"};
f.g=function(){this.Bg.cleardotPath=ph+"1x1.gif";this.Bg.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(q?"Rtl":"Ltr");var a=new Yj(this,this.Bg);this.Ye=a;Vj(a);Rj(a);Uj(a);a.Ib(null);this.Pc.style.display="block";this.V.g(B);Zj(this);a.F(this.Pc);var b=this;Zd(window,"resize",function(){b.Ec()});this.Ec()};
f.Ec=function(){var a=this.Pc,b=Cd(ta),c=Mi();q?(b=ak(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;q||--this.width};
function Zj(a){function b(a,e){for(var h=0,k;k=a.childNodes[h];h++)if(k.tagName){var m=k.tagName.toUpperCase();if("CATEGORY"==m){m=c.createNode(k.getAttribute("name"));m.Tc=[];e.add(m);var p=k.getAttribute("custom");p?m.Tc=p:b(k,m)}else"HR"==m?e.add(new bk):"BLOCK"==m&&e.Tc.push(k)}}var c=a.Ye;c.Dk();c.Tc=[];b(ua,a.Ye);if(c.Tc.length)throw"Toolbox cannot have both blocks and categories in the root level.";lh(window,"resize")}
f.Ae=function(){return new oc(q?Mi().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Yj(a,b){this.Ta=a;Oj.call(this,Nc,b)}n(Yj,Oj);Yj.prototype.ya=function(){Yj.k.ya.call(this);if(Nd){var a=this.n();v(a,"touchstart",this,this.Qr)}};Yj.prototype.Qr=function(a){a.preventDefault();var b=Wj(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Oh(a)},1)};Yj.prototype.createNode=function(a){return new ck(this.Ta,a?Gc(a):Nc,this.Na,this.eb())};
Yj.prototype.Ib=function(a){this.na!=a&&(Oj.prototype.Ib.call(this,a),a&&a.Tc&&a.Tc.length?this.Ta.V.show(a.Tc):this.Ta.V.jc())};function ck(a,b,c,d){sg.call(this,b,c,d);a&&(b=function(){lh(window,"resize")},Zd(a.Ye,"expand",b),Zd(a.Ye,"collapse",b))}n(ck,Jg);sg.prototype.rh=function(){return Lc("span")};ck.prototype.Oh=function(){ye(this)&&this.Le?(this.toggle(),this.select()):this.Sf()?this.gb().Ib(null):this.select();Cg(this)};ck.prototype.qk=function(){};
function bk(){ck.call(this,null,"",dk)}n(bk,ck);var dk={gh:"blocklyTreeSeparator"};/*

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
var ek={tf:null,show:function(a,b){Qf(ek,null);if(b.length){for(var c=new Lf,d=0,e;e=b[d];d++){var h=new sf(e.text);c.ne(h,!0);h.Te(e.enabled);e.enabled&&Zd(h,"action",function(a){return function(){a()}}(e.Va))}Zd(c,"action",ek.jc);e=Yc();h=od();c.F(Tf);var k=c.n();Wb(k,"blocklyContextMenu");var m=ud(k),d=a.clientX+h.x,p=a.clientY+h.y;a.clientY+m.height>=e.height&&(p-=m.height);q?m.width>=a.clientX&&(d+=m.width):a.clientX+m.width>=e.width&&(d-=m.width);Uf(d,p,e,h);Mf(c);setTimeout(function(){k.focus()},
1);ek.tf=null}else ek.jc()},jc:function(){Rf(ek);ek.tf=null},qf:function(a,b){return function(){var c=Qg(a.t,b),d=a.ga();d.x=q?d.x-gi:d.x+gi;d.y+=2*gi;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Si(){this.o=u("g",{},null);this.Qk=u("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.o);this.ec=u("path",{"class":"blocklyPath"},this.o);this.ui=u("path",{"class":"blocklyPathLight"},this.o);this.ec.kb=this;Di(this.ec);Xi(this)}n(Si,pi);f=Si.prototype;f.height=0;f.width=0;
f.ra=function(){for(var a=0,b;b=this.T[a];a++)b.g();this.Gb&&Rh(this.Gb);this.Lc();z||v(this.W(),"mousedown",this,this.cg);this.t.aa.appendChild(this.W());ha(this.onchange)&&v(this.t.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){Jh&&Kh();Jh=this;this.Pg();lh(this.t.aa,"blocklySelectChange")};function Kh(){var a=Jh;Jh=null;a.mg();lh(a.t.aa,"blocklySelectChange")}f.Gb=null;f.ba=null;f.gc=null;
function Pi(a){var b=[];a.Gb&&b.push(a.Gb);a.ba&&b.push(a.ba);a.gc&&b.push(a.gc);return b}var fk=null,gk=null;f=Si.prototype;f.bb=function(a){var b=this.W();if(this.hd&&b){var c=this.ga();this.t.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Si.k.bb.call(this,a);a&&(c=this.ga(),a.W().appendChild(b),a=this.ga(),ji(this,a.x-c.x,a.y-c.y))};f.ga=function(){var a=0,b=0,c=this.W();if(c){do var d=Ph(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.t.aa)}return new mc(a,b)};
f.moveBy=function(a,b){var c=this.ga();this.W().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");ji(this,a,b);hk(this)};function Uh(a){var b=a.height,c=a.width;if(a=Mg(a))a=Uh(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.pd=function(a){if(this.Uc!=a){Si.k.pd.call(this,a);for(var b=[],c=0,d;d=this.T[c];c++)b.push.apply(b,d.O(!a));if(a){a=Pi(this);for(c=0;c<a.length;c++)a[c].O(!1);c=this.toString(ik);N(Q(this,"_TEMP_COLLAPSED_INPUT"),c).g()}else R(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.B){for(c=0;a=b[c];c++)a.F();this.Ma()}}};
f.cg=function(a){if(!this.ac){jk();lj();this.select();gg();if($b(a))mj(this,a);else if(this.cc&&!z){Bh();ih(jh);var b=this.ga();this.Nk=b.x;this.Ok=b.y;this.pi=a.clientX;this.qi=a.clientY;ac=1;fk=v(document,"mouseup",this,this.Qh);gk=v(document,"mousemove",this,this.Ph);this.xf=[];for(var b=this.Eb(),c=0,d;d=b[c];c++){d=Pi(d);for(var e=0;e<d.length;e++){var h;h=d[e];h={x:h.dd,y:h.ed};h.fr=d[e];this.xf.push(h)}}}else return;a.stopPropagation()}};
f.Qh=function(a){var b=this;kk(function(){lj();if(Jh&&Xh){Wg(Yh,Xh);if(b.B){var c=(Zh(Yh)?Xh:Yh).h;lk("click");var d=sh(c.o);c.G?(d.x+=q?3:-3,d.y+=13):c.K&&(d.x+=q?-23:23,d.y+=3);c=u("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},ta);c.ni=new Date;mk(c)}b.t.Ab&&b.t.Ab.close()}else Lh(b.t,a)&&((c=b.t.Ab)&&rg(c.close,100,c),Jh.m(!1,!0),lh(window,"resize"));Xh&&(Vb(Vh.Nf),delete Vh.Nf,Xh=null);ih(nk.OPEN)})};
function mj(a,b){if(!z&&a.contextMenu){var c=[];if(a.Id&&!z&&a.cc&&!z&&!a.ac){var d={text:G.gm,enabled:!0,Va:function(){var b=Lg(a);Xg(b);var b=Qg(a.t,b),c=a.ga();c.x=q?c.x-gi:c.x+gi;c.y+=2*gi;b.moveBy(c.x,c.y);b.select()}};a.Eb().length>Ma(a.t)&&(d.enabled=!1);c.push(d);a.uc&&!z&&!a.Uc&&va&&(d={enabled:!0},a.ba?(d.text=G.Jp,d.Va=function(){a.Re(null)}):(d.text=G.$k,d.Va=function(){a.Re("")}),c.push(d));if(!a.Uc)for(d=0;d<a.T.length;d++)if(1==a.T[d].type){d={enabled:!0};d.text=a.Ke?G.km:G.nm;d.Va=
function(){Sg(a,!a.Ke)};c.push(d);break}wa&&(a.Uc?(d={enabled:!0},d.text=G.jm,d.Va=function(){a.pd(!1)}):(d={enabled:!0},d.text=G.el,d.Va=function(){a.pd(!0)}),c.push(d));xa&&(d={text:a.disabled?G.hm:G.fm,enabled:!Zi(a),Va:function(){a.Se(!a.disabled)}},c.push(d));var d=a.Eb().length,e=Mg(a);e&&(d-=e.Eb().length);d={text:1==d?G.dm:G.em.replace("%1",String(d)),enabled:!0,Va:function(){a.m(!0,!0)}};c.push(d)}d={enabled:!(ha(a.p)?!a.p():!a.p)};d.text=G.mm;d.Va=function(){var b=ha(a.p)?a.p():a.p;b&&window.open(b)};
c.push(d);a.ub&&!a.ac&&a.ub(c);ek.show(b,c);ek.tf=a}}function ji(a,b,c){if(a.B){for(var d=ni(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Pi(a);for(e=0;e<d.length;e++)Oh(d[e]);for(e=0;e<a.Ub.length;e++)ji(a.Ub[e],b,c)}}function ok(a,b){b?Wb(a.o,"blocklyDragging"):Xb(a.o,"blocklyDragging");for(var c=0;c<a.Ub.length;c++)ok(a.Ub[c],b)}
f.Ph=function(a){var b=this;kk(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Bh();var c=a.clientX-b.pi,d=a.clientY-b.qi;if(1==ac&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>oj){ac=2;b.bb(null);ok(b,!0);var e=b.t;e.Nj=e.Ab?e.Ab.Ae():null;e.Mj=e.V?e.V.Ae():e.Ta?e.Ta.Ae():null}if(2==ac){b.W().setAttribute("transform","translate("+(b.Nk+c)+", "+(b.Ok+d)+")");for(e=0;e<b.xf.length;e++){var h=b.xf[e],k=h.fr,m=h.x+c,h=h.y+d;k.dd=m;k.ed=h;k.J()&&$g(k.ka,m,h)}for(var k=ni(b,!1),
h=m=null,p=gi,e=0;e<k.length;e++){var y=k[e],x=ki(y,p,c,d);x.s&&(m=x.s,h=y,p=x.Ak)}Xh&&Xh!=m&&(Vb(Vh.Nf),delete Vh.Nf,Yh=Xh=null);m&&m!=Xh&&(m.zh(),Xh=m,Yh=h);b.Id&&!z&&Lh(b.t,a)}}a.stopPropagation()})};function Xi(a){a.cc&&!z?Wb(a.o,"blocklyDraggable"):Xb(a.o,"blocklyDraggable")}f.W=function(){return this.o};var pk=1*(1-Math.SQRT1_2)+1,qk=3*(1-Math.SQRT1_2)-1,rk="m "+pk+","+pk,sk="a 3,3 0 0,0 "+(-qk-1)+","+(2-qk),tk="a 3,3 0 0,0 "+(2-qk)+","+(qk+1);f=Si.prototype;
f.m=function(a,b){lj();ek.tf==this&&ek.jc();Ui(this,a,!1);if(b&&this.B){lk("delete");var c=sh(this.o),d=this.o.cloneNode(!0);d.Uk=c.x;d.Vk=c.y;d.setAttribute("transform","translate("+d.Uk+","+d.Vk+")");ta.appendChild(d);d.ij=d.getBBox();d.ni=new Date;uk(d)}this.B=!1;c=Pi(this);for(d=0;d<c.length;d++)c[d].m();Si.k.m.call(this,a);Vb(this.o);this.Qk=this.ui=this.ec=this.o=null};
function uk(a){var b=(new Date-a.ni)/150;1<b?Vb(a):(a.setAttribute("transform","translate("+(a.Uk+(q?-1:1)*a.ij.width/2*b+", "+(a.Vk+a.ij.height*b))+") scale("+(1-b)+")"),setTimeout(function(){uk(a)},10))}function mk(a){var b=(new Date-a.ni)/150;1<b?Vb(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){mk(a)},10))}
f.Lc=function(){if(!this.disabled){var a=Yf(Zf(this.ah)),b=ng(a);pg([255,255,255],b,.3);pg([0,0,0],b,.4);this.ec.setAttribute("fill",a);b=Pi(this);for(a=0;a<b.length;a++)b[a].Lc();for(a=0;b=this.T[a];a++)for(var c=0,d;d=b.Pa[c];c++)d.ia(null);this.B&&this.F()}};function ei(a){a.disabled||Zi(a)?(Wb(a.o,"blocklyDisabled"),a.ec.setAttribute("fill","url(#blocklyDisabledPattern)")):(Xb(a.o,"blocklyDisabled"),a.Lc());a=a.ad();for(var b=0,c;c=a[b];b++)ei(c)}
f.Cf=function(){return this.ba?this.ba.fb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Re=function(a){var b=!1;l(a)?(this.ba||(this.ba=new qi(this),b=!0),this.ba.ia(a)):this.ba&&(this.ba.m(),b=!0);b&&this.B&&(this.F(),this.Ma())};f.sd=function(a){this.ac&&(a=null);var b=!1;l(a)?(this.gc||(this.gc=new ri(this),b=!0),this.gc.ia(a)):this.gc&&(this.gc.m(),b=!0);b&&this.B&&(this.F(),this.Ma())};f.$d=function(a){this.Gb&&this.Gb!==a&&this.Gb.m();a&&(a.I=this,this.Gb=a,this.B&&Rh(a))};
f.Se=function(a){this.disabled!=a&&(Si.k.Se.call(this,a),ei(this),this.t.wb())};f.Pg=function(){Wb(this.o,"blocklySelected");this.o.parentNode.appendChild(this.o)};f.mg=function(){Xb(this.o,"blocklySelected")};
f.F=function(){this.B=!0;var a=10;q&&(a=-a);for(var b=Pi(this),c=0;c<b.length;c++){var d=b[c];d.I.isCollapsed()?d.Ha.setAttribute("display","none"):(d.Ha.setAttribute("display","block"),q&&(a-=16),d.Ha.setAttribute("transform","translate("+a+", 5)"),Oh(d),a=q?a-10:a+26)}var e=a+=q?10:-10,h=this.T,b=[];b.ta=e+20;if(this.K||this.C)b.ta=Math.max(b.ta,40);for(var d=c=0,k=!1,m=!1,p=!1,y=void 0,x=this.Ke&&!this.isCollapsed(),E=0,A;A=h[E];E++)if(A.J()){var J;x&&y&&3!=y&&3!=A.type?J=b[b.length-1]:(y=A.type,
J=[],J.type=x&&3!=A.type?-1:A.type,J.height=0,b.push(J));J.push(A);A.nd=25;A.Qa=x&&1==A.type?20.5:0;if(A.s&&A.s.w){var jb=Uh(H(A.s));A.nd=Math.max(A.nd,jb.height);A.Qa=Math.max(A.Qa,jb.width)}E==h.length-1&&A.nd--;J.height=Math.max(J.height,A.nd);A.Ob=0;1==b.length&&(A.Ob+=q?-e:e);for(var jb=!1,Vg=0,Zb;Zb=A.Pa[Vg];Vg++){0!=Vg&&(A.Ob+=10);var Tj=Zb.Nd();Zb.Qa=Tj.width;Zb.og=jb&&Zb.xd?10:0;A.Ob+=Zb.Qa+Zb.og;J.height=Math.max(J.height,Tj.height);jb=Zb.xd}-1!=J.type&&(3==J.type?(m=!0,d=Math.max(d,A.Ob)):
(1==J.type?k=!0:5==J.type&&(p=!0),c=Math.max(c,A.Ob)))}for(e=0;J=b[e];e++)if(J.Sk=!1,-1==J.type)for(h=0;A=J[h];h++)if(1==A.type){J.height+=20;J.Sk=!0;break}b.xg=20+d;m&&(b.ta=Math.max(b.ta,b.xg+30));k?b.ta=Math.max(b.ta,c+20+8):p&&(b.ta=Math.max(b.ta,c+20));b.Sr=k;b.tu=m;b.su=p;d=a;this.G?this.mi=this.wg=!0:(this.mi=this.wg=!1,this.K&&(a=H(this.K))&&Mg(a)==this&&(this.wg=!0),Mg(this)&&(this.mi=!0));k=this.ga();m=[];p=[];a=[];c=[];A=b.ta;this.wg?(m.push("m 0,0"),a.push("m 1,1")):(m.push("m 0,2"),a.push(q?
rk:"m 1,1"),m.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.K&&(m.push("H",15),a.push("H",15),m.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.K.moveTo(k.x+(q?-30:30),k.y));m.push("H",A);a.push("H",A+(q?-1:0));this.width=A;for(J=A=0;e=b[J];J++){x=10;0==J&&(x+=q?-d:d);a.push("M",b.ta-1+","+(A+1));if(this.isCollapsed())h=e[0],E=A+18,vk(h.Pa,x,E),m.push("l 8,0 0,4 8,4 -16,8 8,4"),q?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),h=e.height-20,m.push("v",h),q&&a.push("v",
h-2),this.width+=15;else if(-1==e.type){for(y=0;h=e[y];y++)E=A+18,e.Sk&&(E+=10),x=vk(h.Pa,x,E),5!=h.type&&(x+=h.Qa+10),1==h.type&&(p.push("M",x-10+","+(A+10)),p.push("h",6-h.Qa),p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),p.push("v",h.nd+1-20),p.push("h",h.Qa+2-8),p.push("z"),q?(c.push("M",x-10-3+8-h.Qa+","+(A+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",h.nd-20+3),c.push("h",h.Qa-8+1)):(c.push("M",x-10+1+","+(A+10+1)),c.push("v",h.nd+1),c.push("h",6-h.Qa),
c.push("M",x-h.Qa-10+1.8+","+(A+10+20-.4)),c.push("l","3.04,-1.8")),E=q?k.x-x-8+10+h.Qa+1:k.x+x+8-10-h.Qa-1,jb=k.y+A+10+1,h.s.moveTo(E,jb),h.s.w&&ii(h.s));x=Math.max(x,b.ta);this.width=Math.max(this.width,x);m.push("H",x);a.push("H",x+(q?-1:0));m.push("v",e.height);q&&a.push("v",e.height-2)}else 1==e.type?(h=e[0],E=A+18,-1!=h.align&&(y=b.ta-h.Ob-8-20,1==h.align?x+=y:0==h.align&&(x+=(y+x)/2)),vk(h.Pa,x,E),m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),y=e.height-20,m.push("v",y),q?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",y)):(a.push("M",b.ta-4.2+","+(A+20-.4)),a.push("l","3.04,-1.8")),E=k.x+(q?-b.ta-1:b.ta+1),jb=k.y+A,h.s.moveTo(E,jb),h.s.w&&(ii(h.s),this.width=Math.max(this.width,b.ta+Uh(H(h.s)).width-8+1))):5==e.type?(h=e[0],E=A+18,-1!=h.align&&(y=b.ta-h.Ob-20,b.Sr&&(y-=8),1==h.align?x+=y:0==h.align&&(x+=(y+x)/2)),vk(h.Pa,x,E),m.push("v",e.height),q&&a.push("v",e.height-2)):3==e.type&&(h=e[0],0==J&&(m.push("v",10),q&&a.push("v",9),A+=10),E=A+18,-1!=h.align&&(y=b.xg-h.Ob-20,1==h.align?x+=y:0==h.align&&
(x+=(y+x)/2)),vk(h.Pa,x,E),x=b.xg+30,m.push("H",x),m.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),m.push("v",e.height-4),m.push("a 2,2 0 0,0 2,2"),m.push("H",b.ta),q?(a.push("M",x-30+qk+","+(A+qk)),a.push(sk),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.ta-1)):(a.push("M",x-30+qk+","+(A+e.height-qk)),a.push(tk),a.push("H",b.ta)),E=k.x+(q?-x:x),jb=k.y+A+1,h.s.moveTo(E,jb),h.s.w&&(ii(h.s),this.width=Math.max(this.width,b.xg+Uh(H(h.s)).width)),J==b.length-1||3==b[J+1].type)&&(m.push("v",
10),q&&a.push("v",9),A+=10);A+=e.height}b.length||(A=25,m.push("V",A),q&&a.push("V",A-1));b=A;this.height=b+1;this.C&&(m.push("H","30 l -6,4 -3,0 -6,-4"),this.C.moveTo(q?k.x-30:k.x+30,k.y+b+1),this.C.w&&ii(this.C),this.height+=4);this.mi?(m.push("H 0"),q||a.push("M","1,"+b)):(m.push("H",2),m.push("a","2,2 0 0,1 -2,-2"),q||(a.push("M",pk+","+(b-pk)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.G?(this.G.moveTo(k.x,k.y),m.push("V",20),m.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),q?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):q||(this.wg?a.push("V",1):a.push("V",2));m.push("z");b=m.join(" ")+"\n"+p.join(" ");this.ec.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.ui.setAttribute("d",b);q&&(this.ec.setAttribute("transform","scale(-1 1)"),this.ui.setAttribute("transform","scale(-1 1)"),this.Qk.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.F():lh(window,"resize");
hk(this)};function vk(a,b,c){q&&(b=-b);for(var d=0,e;e=a[d];d++)q?(b-=e.og+e.Qa,e.W().setAttribute("transform","translate("+b+", "+c+")"),e.Qa&&(b-=10)):(e.W().setAttribute("transform","translate("+(b+e.og)+", "+c+")"),e.Qa&&(b+=e.og+e.Qa+10));return q?-b:b};/*

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
function Wb(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Xb(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function v(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var h=[[a,b,e]];if(b in wk)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},k=0,m;m=wk[b][k];k++)a.addEventListener(m,e,!1),h.push([a,m,e]);return h}var wk={};aa("document.documentElement.ontouchstart")&&(wk={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function w(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function kj(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function lh(a,b){setTimeout(function(){kj(a,b)},0)}
function Ph(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function sh(a){var b=0,c=0;do{var d=Ph(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=ta);return{x:b,y:c}}function Sf(a){a=sh(a);return ak(a.x,a.y,!1)}
function u(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function $b(a){return 2==a.button||a.ctrlKey}
function ak(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=ta.createSVGPoint();d.x=a;d.y=b;a=ta.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Ah(a){return ak(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Vf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Wf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Vf(a),e=0;e<d;e++){for(var h=a[0][e],k=1;k<a.length;k++)if(h!=a[k][e])return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k][e])&&" "!=h)return c;return d}
function Xf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Vf(a),e=0;e<d;e++){for(var h=a[0].substr(-e-1,1),k=1;k<a.length;k++)if(h!=a[k].substr(-e-1,1))return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k].charAt(a[k].length-e-1))&&" "!=h)return c;return d}function xk(a){return!!a.match(/^\s*-?\d+(\.\d+)?\s*$/)};/*

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
function yk(a,b){yk.k.constructor.call(this,"");this.fa=b;this.pj=u("text",{"class":"blocklyText",x:-3},this.la);this.pj.appendChild(document.createTextNode("\u2713"));this.ja(a)}n(yk,Tb);f=yk.prototype;f.clone=function(){return new yk(this.Fa(),this.fa)};f.df="default";f.Fa=function(){return String(this.$).toUpperCase()};f.ja=function(a){a="TRUE"==a;this.$!==a&&(this.$=a,this.pj.style.display=a?"block":"none",this.h&&this.h.B&&this.h.t.wb())};
f.vg=function(){var a=!this.$;if(this.h&&this.fa){var b=this.fa(a);void 0!==b&&(a=b)}null!==a&&this.ja(String(a).toUpperCase())};function zk(a){me.call(this);this.Sd=[];Ak(this,a)}n(zk,me);f=zk.prototype;f.na=null;f.di=null;f.Yj=function(a){return this.Sd[a]||null};function Ak(a,b){b&&(tb(b,function(a){this.Qe(a,!1)},a),Ab(a.Sd,b))}f.removeItem=function(a){a&&yb(this.Sd,a)&&a==this.na&&(this.na=null,this.dispatchEvent("select"))};f.bd=function(){return this.na};f.Ib=function(a){a!=this.na&&(this.Qe(this.na,!1),this.na=a,this.Qe(a,!0));this.dispatchEvent("select")};f.Ce=function(){var a=this.na;return a?sb(this.Sd,a):-1};
f.Ve=function(a){this.Ib(this.Yj(a))};f.clear=function(){var a=this.Sd;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0;this.na=null};f.Z=function(){zk.k.Z.call(this);delete this.Sd;this.na=null};f.Qe=function(a,b){a&&("function"==typeof this.di?this.di(a,b):"function"==typeof a.hi&&a.hi(b))};function Bk(a,b,c,d,e){this.zb=!!b;a&&this.ae(a,d);this.depth=void 0!=e?e:this.pc||0;this.zb&&(this.depth*=-1);this.uj=!c}n(Bk,yj);f=Bk.prototype;f.lc=null;f.pc=0;f.Pk=!1;f.ae=function(a,b,c){if(this.lc=a)this.pc=ga(b)?b:1!=this.lc.nodeType?0:this.zb?-1:1;ga(c)&&(this.depth=c)};f.clone=function(){return new Bk(this.lc,this.zb,!this.uj,this.pc,this.depth)};
f.next=function(){var a;if(this.Pk){if(!this.lc||this.uj&&0==this.depth)throw xj;a=this.lc;var b=this.zb?-1:1;if(this.pc==b){var c=this.zb?a.lastChild:a.firstChild;c?this.ae(c):this.ae(a,-1*b)}else(c=this.zb?a.previousSibling:a.nextSibling)?this.ae(c):this.ae(a.parentNode,-1*b);this.depth+=this.pc*(this.zb?-1:1)}else this.Pk=!0;a=this.lc;if(!this.lc)throw xj;return a};
f.splice=function(a){var b=this.lc,c=this.zb?1:-1;this.pc==c&&(this.pc=-1*c,this.depth+=this.pc*(this.zb?-1:1));this.zb=!this.zb;Bk.prototype.next.call(this);this.zb=!this.zb;for(var c=fa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)b.parentNode&&b.parentNode.insertBefore(c[d],b.nextSibling);Vb(b)};function Ck(a,b,c,d){Bk.call(this,a,b,c,null,d)}n(Ck,Bk);Ck.prototype.next=function(){do Ck.k.next.call(this);while(-1==this.pc);return this.lc};function Dk(){}n(Dk,Ne);ca(Dk);var Ek=0;Dk.prototype.H=function(a){var b=this.xe(a);a=a.eb().H("DIV",b?b.join(" "):null,Fk(this,a.Xa,a.Nd(),a.eb()));Je(a,"grid");return a};function Fk(a,b,c,d){for(var e=[],h=0,k=0;h<c.height;h++){for(var m=[],p=0;p<c.width;p++){var y=b&&b[k++];m.push(Gk(a,y,d))}e.push(Hk(a,m,d))}return a.xj(e,d)}Dk.prototype.xj=function(a,b){var c=b.H("TABLE",this.U()+"-table",b.H("TBODY",this.U()+"-body",a));c.cellSpacing=0;c.cellPadding=0;return c};
function Hk(a,b,c){a=c.H("TR",a.U()+"-row",b);Je(a,"row");return a}function Gk(a,b,c){a=c.H("TD",{"class":a.U()+"-cell",id:a.U()+"-cell-"+Ek++},b);Je(a,"gridcell");Ke(a,"selected",!1);if(!id(a)&&!Me(a,"label")){var d;b=new Ck(a);for(c="";!c&&(d=Aj(b));)1==d.nodeType&&(c=Me(d,"label")||d.title);(d=c)&&Ke(a,"label",d)}return a}
Dk.prototype.qd=function(a,b){if(a){var c=Vc(this.U()+"-body",a)[0];if(c){var d=0;tb(c.rows,function(a){tb(a.cells,function(a){Yb(a);if(b){var c=b[d++];c&&a.appendChild(c)}})});if(d<b.length){for(var e=[],h=Sc(a),k=c.rows[0].cells.length;d<b.length;){var m=b[d++];e.push(Gk(this,m,h));e.length==k&&(m=Hk(this,e,h),c.appendChild(m),e.length=0)}if(0<e.length){for(;e.length<k;)e.push(Gk(this,"",h));m=Hk(this,e,h);c.appendChild(m)}}}zd(a,!0,Eb)}};
function Ik(a,b,c){for(b=b.n();c&&1==c.nodeType&&c!=b;){if("TD"==c.tagName&&Be(c,a.U()+"-cell"))return c.firstChild;c=c.parentNode}return null}Dk.prototype.U=function(){return"goog-palette"};function Jk(a,b,c){ef.call(this,a,b||Dk.Yb(),c);this.Yg&=-89;this.re=new Kk;this.re.tg(this);this.Ih=-1}n(Jk,ef);f=Jk.prototype;f.Aa=null;f.M=-1;f.Ra=null;f.Z=function(){Jk.k.Z.call(this);this.Ra&&(this.Ra.m(),this.Ra=null);this.Aa=null;this.re.m()};f.sg=function(a){Jk.k.sg.call(this,a);Lk(this);this.Ra?(this.Ra.clear(),Ak(this.Ra,a)):(this.Ra=new zk(a),a=oa(this.Qe,this),this.Ra.di=a,se(this).N(this.Ra,"select",this.Pr));this.M=-1};f.Af=function(){return""};
f.He=function(a){Jk.k.He.call(this,a);var b=Ik(this.L,this,a.target);b&&a.relatedTarget&&cd(b,a.relatedTarget)||b==Mk(this)||(a=this.Xa,this.Sa(a?sb(a,b):-1))};f.yc=function(a){Jk.k.yc.call(this,a);if(this.$&4&&(a=Ik(this.L,this,a.target),a!=Mk(this))){var b=this.Xa;this.Sa(b?sb(b,a):-1)}};f.Dc=function(a){var b=Mk(this);return b?(this.Ib(b),Jk.k.Dc.call(this,a)):!1};
f.Fb=function(a){var b=this.Xa,b=b?b.length:0,c=this.Aa.width;if(0==b||!this.isEnabled())return!1;if(13==a.keyCode||32==a.keyCode)return this.Dc(a);if(36==a.keyCode)return this.Sa(0),!0;if(35==a.keyCode)return this.Sa(b-1),!0;var d=0>this.M?this.Ce():this.M;switch(a.keyCode){case 37:if(-1==d||0==d)d=b;this.Sa(d-1);a.preventDefault();return!0;case 39:return d==b-1&&(d=-1),this.Sa(d+1),a.preventDefault(),!0;case 38:-1==d&&(d=b+c-1);if(d>=c)return this.Sa(d-c),a.preventDefault(),!0;break;case 40:if(-1==
d&&(d=-c),d<b-c)return this.Sa(d+c),a.preventDefault(),!0}return!1};f.Pr=function(){};f.Nd=function(){return this.Aa};f.ug=function(a,b){if(this.n())throw Error("Component already rendered");this.Aa=ga(a)?new Sb(a,b):a;Lk(this)};function Mk(a){var b=a.Xa;return b&&b[a.M]}f.Sa=function(a){a!=this.M&&(Nk(this,this.M,!1),this.Ih=this.M,this.M=a,Nk(this,a,!0),this.dispatchEvent("a"))};f.Ce=function(){return this.Ra?this.Ra.Ce():-1};f.bd=function(){return this.Ra?this.Ra.bd():null};
f.Ve=function(a){this.Ra&&this.Ra.Ve(a)};f.Ib=function(a){this.Ra&&this.Ra.Ib(a)};function Nk(a,b,c){if(a.n()){var d=a.Xa;if(d&&0<=b&&b<d.length){var e;e=(e=Mk(a))?e.parentNode:null;a.re.n()!=e&&(a.re.D=e);e=a.re;e.ob(c);!!(e.$&2)==c&&(b=d[b])&&(b=b?b.parentNode:null,d=a.L.U()+"-cell-hover",c?Ce(b,d):Ee(b,d),c?Ke(a.D,"activedescendant",b.id):b.id==Me(a.D,"activedescendant")&&Le(a.D))}}}f.ob=function(a){a&&-1==this.M?this.Sa(-1<this.Ih?this.Ih:0):a||this.Sa(-1);Jk.k.ob.call(this,a)};
f.Qe=function(a,b){if(this.n()&&a){var c=a.parentNode,d=this.L.U()+"-cell-selected";b?Ce(c,d):Ee(c,d);Ke(c,"selected",b)}};function Lk(a){var b=a.Xa;if(b)if(a.Aa&&a.Aa.width){if(b=Math.ceil(b.length/a.Aa.width),!ga(a.Aa.height)||a.Aa.height<b)a.Aa.height=b}else b=Math.ceil(Math.sqrt(b.length)),a.Aa=new Sb(b,b);else a.Aa=new Sb(0,0)}function Kk(){ef.call(this,null);this.ud|=2}n(Kk,ef);function Ok(a,b,c){this.sf=a||[];Jk.call(this,null,b||Dk.Yb(),c);this.rg(this.sf)}n(Ok,Jk);f=Ok.prototype;f.ag=null;f.Wf=null;f.rg=function(a,b){this.sf=a;this.Wf=b||null;this.ag=null;this.qd(Pk(this))};f.th=function(){var a=this.bd();if(a){var b=a.style[cb()];if("undefined"!==typeof b)a=b;else{var b=a.style,c=ld["background-color"];if(!c){var d=cb(),c=d;void 0===a.style[d]&&(d=(t?"Webkit":Eb?"Moz":r?"ms":Db?"O":null)+db(d),void 0!==a.style[d]&&(c=d));ld["background-color"]=c}a=b[c]||""}return Qk(a)}return null};
f.ii=function(a){a=Qk(a);this.ag||(this.ag=vb(this.sf,function(a){return Qk(a)}));this.Ve(a?sb(this.ag,a):-1)};function Pk(a){return vb(a.sf,function(a,c){var d=this.eb().H("div",{"class":this.L.U()+"-colorswatch",style:"background-color:"+a});d.title=this.Wf&&this.Wf[c]?this.Wf[c]:"#"==a.charAt(0)?"RGB ("+ng(a).join(", ")+")":a;return d},a)}function Qk(a){if(a)try{return ig(a).yh}catch(b){}return null};function Rk(a,b){oe.call(this,a);this.Y=b||null;se(this).N(this,"action",this.ns)}n(Rk,oe);f=Rk.prototype;f.Zc=!0;f.rg=function(a){this.Y?this.Y.rg(a):Sk(this,a)};f.ug=function(a){this.Y||Sk(this,[]);this.Y.ug(a)};f.Nd=function(){return this.Y?this.Y.Nd():null};f.Ce=function(){return this.Y?this.Y.Ce():-1};f.Ve=function(a){this.Y&&this.Y.Ve(a)};f.th=function(){return this.Y?this.Y.th():null};f.ii=function(a){this.Y&&this.Y.ii(a)};f.kc=function(){return this.Zc};
f.Jc=function(a){this.Zc=a;this.Y&&this.Y.jb(32,a)};f.ya=function(){Rk.k.ya.call(this);this.Y&&this.Y.F(this.n());this.n().unselectable="on"};f.Z=function(){Rk.k.Z.call(this);this.Y&&(this.Y.m(),this.Y=null)};f.focus=function(){this.Y&&this.Y.n().focus()};f.ns=function(a){a.stopPropagation();this.dispatchEvent("change")};function Sk(a,b){var c=new Ok(b,null,a.eb());c.ug(5);c.jb(32,a.Zc);a.ne(c);a.Y=c;a.Q&&a.Y.F(a.n())};/*

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
function Tk(a,b){Tk.k.constructor.call(this,"\u00a0\u00a0\u00a0");this.fa=b;this.ja(a)}var Uk;n(Tk,Tb);f=Tk.prototype;f.g=function(a){Tk.k.g.call(this,a);this.Cb.style.fillOpacity=1;this.ja(this.Fa())};f.clone=function(){return new Tk(this.Fa(),this.fa)};f.df="default";f.m=function(){Rf(this);Tk.k.m.call(this)};f.Fa=function(){return this.tj};f.ja=function(a){this.tj=a;this.Cb&&(this.Cb.style.fill=a);this.h&&this.h.B&&(hk(this.h),this.h.t.wb())};
f.fb=function(){var a=this.tj,b=a.match(/^#(.)\1(.)\2(.)\3$/);b&&(a="#"+b[1]+b[2]+b[3]);return a};
var Vk="#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),Wk=
7;Tk.prototype.vg=function(){Qf(this,Xk);var a=new Rk;a.ug(Wk);a.rg(Vk);var b=Yc(),c=od(),d=Sf(this.Cb),e=this.Cb.getBBox();a.F(Tf);a.ii(this.Fa());var h=td(a.n());d.y=d.y+h.height+e.height>=b.height+c.y?d.y-(h.height-1):d.y+(e.height-1);q?(d.x+=e.width,d.x-=h.width,d.x<c.x&&(d.x=c.x)):d.x>b.width+c.x-h.width&&(d.x=b.width+c.x-h.width);Uf(d.x,d.y,b,c);var k=this;Uk=Zd(a,"change",function(a){a=a.target.th()||"#000000";Yk();if(k.h&&k.fa){var b=k.fa(a);void 0!==b&&(a=b)}null!==a&&k.ja(a)})};
function Xk(){Uk&&fe(Uk)};/*

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
function Zk(a,b){Zk.k.constructor.call(this,a);this.fa=b}var $k;n(Zk,Tb);f=Zk.prototype;f.clone=function(){return new Zk(this.fb(),this.fa)};f.df="text";f.m=function(){Rf(this);Zk.k.m.call(this)};f.ia=function(a){if(null!==a){if(this.h&&this.fa){var b=this.fa(a);null!==b&&void 0!==b&&(a=b)}Tb.prototype.ia.call(this,a)}};
f.vg=function(a){a=a||!1;if(!a&&(Fb||Jb||Lb)){a=window.prompt(G.bl,this.Ka);if(this.h&&this.fa){var b=this.fa(a);void 0!==b&&(a=b)}null!==a&&this.ia(a)}else{Qf(this,al(this));var b=Tf,c=D("input","blocklyHtmlInput");$k=c;b.appendChild(c);c.value=c.defaultValue=this.Ka;c.pk=null;bl(this);this.Fk();a||(c.focus(),c.select());c.ps=v(c,"keyup",this,this.sk);c.os=v(c,"keypress",this,this.sk);c.vs=v(this.h.t.aa,"blocklyWorkspaceChange",this,this.Fk)}};
f.sk=function(a){var b=$k;13==a.keyCode?Yk():27==a.keyCode?(this.ia(b.defaultValue),Yk()):(a=b.value,a!==b.pk?(b.pk=a,this.ia(a),bl(this)):t&&this.h.F())};function bl(a){var b=!0,c=$k;a.h&&a.fa&&(b=a.fa(c.value));null===b?Wb(c,"blocklyInvalidInput"):Xb(c,"blocklyInvalidInput")}f.Fk=function(){var a=Tf,b=this.la.getBBox();a.style.width=b.width+"px";b=Sf(this.Cb);if(q){var c=this.Cb.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;t&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function al(a){return function(){var b=$k,c=b.value;a.h&&a.fa&&(c=a.fa(c),null===c&&(c=b.defaultValue));a.ia(c);a.h.B&&a.h.F();w(b.ps);w(b.os);w(b.vs);$k=null;Tf.style.width="auto"}}function cl(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)}function dl(a){(a=cl(a))&&(a=String(Math.max(0,Math.floor(a))));return a};/*

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
function el(a){this.$f=a;this.Ng="";this.lm=new RegExp(this.Ca,"g")}el.prototype.ef=null;el.prototype.zd=null;function fl(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}
function gl(a,b){if(!b)return"";if(b.disabled)return gl(a,Mg(b));var c=a[b.type];if(!c)throw'Language "'+a.$f+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.bi(b,c[0]),c[1]];if(l(c))return a.zd&&(c=a.zd.replace(/%1/g,"'"+b.id+"'")+c),a.bi(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function S(a,b,c){var d=T;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=bj(a,b);if(!a)return"";b=gl(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function hl(a,b){var c=T,d=bj(a,b),e=gl(c,d);if(!l(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=fl(e,c.he));return e}
function il(a,b){var c=T;c.ef&&(a=c.ef.replace(/%1/g,"'"+b+"'")+a);c.zd&&(a+=fl(c.zd.replace(/%1/g,"'"+b+"'"),c.he));return a}el.prototype.he="  ";function jl(a){var b=T;b.Ng+=a+","}el.prototype.Ca="{leCUI8hutHZI4480Dc}";function kl(a,b){var c=T;if(!c.Hd[a]){var d=Ha(c.da,a);c.Xj[a]=d;c.Hd[a]=b.join("\n").replace(c.lm,d)}return c.Xj[a]};/*

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
var jh="handclosed",Mh="handdelete",nk={},ll="",ml=null,nl="";function ol(){var a=pl.join("\n");nl=ph.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,nl),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));ml=c.sheet;ih("hando")}
function ih(a){if(!z&&ll!=a){ll=a;var b="url("+nl+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=ml||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(h){if(15==h.code)throw h.styleSheet=d,h;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;ta&&(ta.style.cursor="hando"==a?"":b)}}
var pl=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
"  fill:none;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklySelected>.blocklyPath {","  stroke-width: 3px;","  stroke: #fc3;","}",".blocklySelected>.blocklyPathLight {","  display: none;","}",".blocklyDragging>.blocklyPath,",".blocklyDragging>.blocklyPathLight {","  fill-opacity: .8;","  stroke-opacity: .8;","}",".blocklyDragging>.blocklyPathDark {","  display: none;","}",".blocklyDisabled>.blocklyPath {","  fill-opacity: .5;","  stroke-opacity: .5;","}",".blocklyDisabled>.blocklyPathLight,",
".blocklyDisabled>.blocklyPathDark {","  display: none;","}",".blocklyText {","  cursor: default;",'  font-family: "Open Sans", sans-serif;',"  font-size: 12pt;","  fill: #fff;","}",".blocklyNonEditableText>text {","  pointer-events: none;","}",".blocklyNonEditableText>rect,",".blocklyEditableText>rect {","  fill: #fff;","  fill-opacity: .6;","}",".blocklyNonEditableText>text,",".blocklyEditableText>text {","  fill: #000;","}",".blocklyEditableText:hover>rect {","  stroke-width: 2;","  stroke: #fff;",
"}",".blocklyBubbleText {","  fill: #000;","}",".blocklySvg text {","  -moz-user-select: none;","  -webkit-user-select: none;","  user-select: none;","  cursor: inherit;","}",".blocklyHidden {","  display: none;","}",".blocklyFieldDropdown:not(.blocklyHidden) {","  display: block;","}",".blocklyTooltipBackground {","  fill: #ffffc7;","  stroke-width: 1px;","  stroke: #d8d8d8;","}",".blocklyTooltipShadow,",".blocklyDropdownMenuShadow {","  fill: #bbb;","  filter: url(#blocklyShadowFilter);","}",".blocklyTooltipText {",
"  font-family: sans-serif;","  font-size: 9pt;","  fill: #000;","}",".blocklyIconShield {","  cursor: default;","  fill: #00c;","  stroke-width: 1px;","  stroke: #ccc;","}",".blocklyIconGroup:hover>.blocklyIconShield {","  fill: #00f;","  stroke: #fff;","}",".blocklyIconGroup:hover>.blocklyIconMark {","  fill: #fff;","}",".blocklyIconMark {","  cursor: default !important;","  font-family: sans-serif;","  font-size: 9pt;","  font-weight: bold;","  fill: #ccc;","  text-anchor: middle;","}",".blocklyWarningBody {",
"}",".blocklyMinimalBody {","  margin: 0;","  padding: 0;","}",".blocklyCommentTextarea {","  margin: 0;","  padding: 2px;","  border: 0;","  resize: none;","  background-color: #ffc;","}",".blocklyHtmlInput {","  font-family: sans-serif;","  font-size: 11pt;","  border: none;","  outline: none;","  width: 100%","}",".blocklyMutatorBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #ddd;","}",".blocklyFlyoutBackground {","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyColourBackground {",
"  fill: #666;","}",".blocklyScrollbarBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #e4e4e4;","}",".blocklyScrollbarKnob {","  fill: #ccc;","}",".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,",".blocklyScrollbarKnob:hover {","  fill: #bbb;","}",".blocklyInvalidInput {","  background: #faa;","}",".blocklyAngleCircle {","  stroke: #444;","  stroke-width: 1;","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyAngleMarks {","  stroke: #444;","  stroke-width: 1;","}",".blocklyAngleGauge {",
"  fill: #f88;","  fill-opacity: .8;  ","}",".blocklyAngleLine {","  stroke: #f00;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklyContextMenu {","  border-radius: 4px;","}",".blocklyDropdownMenu {","  padding: 0 !important;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;","}",".blocklyToolboxDiv {","  background-color: #fae5e2;",
"  display: none;","  overflow-x: visible;","  overflow-y: auto;","  position: absolute;","}",".blocklyTreeRoot {","  padding: 4px 0;","}",".blocklyTreeRoot:focus {","  outline: none;","}",".blocklyTreeRow {","  line-height: 40px;","  background-color: #ec8fa1;","  outline: #ee9bab solid 2px;","  text-transform: uppercase;","  height: 40px;","  padding-right: 1em;","  white-space: nowrap;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',"  padding-right: 0;","  padding-left: 1em !important;",
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
function ql(a,b){function c(){rl(a);sl()}if(!cd(document,a))throw"Error: container is not in current document.";b&&tl(b);if(ya){var d=document.getElementById("realtime");d&&(d.style.display="block");ul(c,a)}else c()}
function tl(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,h=!1,k=!1,m=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Og(c))):c=null,m=c,c=Boolean(m&&m.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),h=a.comments,void 0===h&&(h=c),k=a.disable,void 0===k&&(k=c);var p=a.scrollbars;void 0===p&&(p=c);var y=a.sounds;void 0===y&&(y=!0);var x=!!a.realtime,E=x?a.realtimeOptions:void 0;
q=!!a.rtl;wa=e;va=h;xa=k;z=b;Aa=a.maxBlocks||Infinity;a.media?ph=a.media:a.path&&(ph=a.path+"media/");Ba=c;Ca=p;sa=d;Da=y;ua=m;ya=x;za=E}
function rl(a){a.setAttribute("dir","LTR");pe=q;ol();var b=u("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=u("defs",{},b),d,e;d=u("filter",{id:"blocklyEmboss"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=u("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
u("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);u("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);u("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=u("filter",{id:"blocklyTrashcanShadowFilter"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);u("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=u("feMerge",{},d);u("feMergeNode",{"in":"offsetBlur"},d);u("feMergeNode",{"in":"SourceGraphic"},
d);d=u("filter",{id:"blocklyShadowFilter"},c);u("feGaussianBlur",{stdDeviation:2},d);c=u("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);u("rect",{width:10,height:10,fill:"#aaa"},c);u("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);B=new Ch(vl,wl);b.appendChild(B.H());B.Lh=Aa;z||(Ba?B.Ta=new Xj(b,a):(B.V=new Sh,c=B.V,d=c.H(),c.pe=!1,bd(d)),Ca||xl(function(){if(0==ac){var a=B.wc(),b=a.Bb+a.rb,c=a.Mc+a.sb;if(a.Nb<c||a.Nb+a.tb>a.Ua+c||a.ic<(q?a.Bb:
b)||a.ic+a.Fd>(q?a.wa:a.wa+b))for(var d=Ka(B,!1),e=0,x;x=d[e];e++){var E=x.ga(),A=Uh(x),J=c+25-A.height-E.y;0<J&&x.moveBy(0,J);J=c+a.Ua-25-E.y;0>J&&x.moveBy(0,J);J=25+b-E.x-(q?0:A.width);0<J&&x.moveBy(J,0);J=b+a.wa-25-E.x+(q?A.width:0);0>J&&x.moveBy(J,0)}}}));b.appendChild(Ci());a.appendChild(b);ta=b;jk();Tf=D("div","blocklyWidgetDiv");Tf.style.direction=q?"rtl":"ltr";document.body.appendChild(Tf)}
function sl(){v(ta,"mousedown",null,yl);v(ta,"contextmenu",null,zl);v(Tf,"contextmenu",null,zl);Ea||(v(window,"resize",document,jk),v(document,"keydown",null,Al),document.addEventListener("mouseup",Bl,!1),Lb&&v(window,"orientationchange",document,function(){lh(window,"resize")}),Ea=!0);if(ua)if(B.Ta)B.Ta.g();else if(B.V){B.V.g(B);B.V.show(ua.childNodes);B.scrollX=B.V.R;q&&(B.scrollX*=-1);var a="translate("+B.scrollX+", 0)";B.aa.setAttribute("transform",a);B.ce.setAttribute("transform",a)}Ca&&(B.Hc=
new th(B),B.Hc.resize());Eh();if(Da){Cl([ph+"click.mp3",ph+"click.wav",ph+"click.ogg"],"click");Cl([ph+"delete.mp3",ph+"delete.ogg",ph+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)w(b.pop());for(var a in Dl){var d=Dl[a];d.volume=.01;d.play();d.pause();if(Lb||Kb)break}};b.push(v(document,"mousemove",null,a));b.push(v(document,"touchstart",null,a))}};/*

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
var Tf=null,Ii=null,El=null;function Qf(a,b){Yk();Ii=a;El=b;Tf.style.display="block"}function Yk(){Ii&&(Tf.style.display="none",El&&El(),El=Ii=null,Yb(Tf))}function Rf(a){Ii==a&&Yk()}function Uf(a,b,c,d){b<d.y&&(b=d.y);q?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);Tf.style.left=a+"px";Tf.style.top=b+"px"};/*

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
function Fl(a,b,c,d){this.h=null;this.Ga=Number(c);this.R=Number(b);this.Aa={height:this.Ga+10,width:this.R};this.Ka=d||"";this.la=u("g",{},null);this.Pf=u("image",{height:this.Ga+"px",width:this.R+"px",y:-12},this.la);this.ja(a);Eb&&(this.ig=u("rect",{height:this.Ga+"px",width:this.R+"px",y:-12,"fill-opacity":0},this.la))}n(Fl,Tb);f=Fl.prototype;f.clone=function(){return new Fl(this.ru(),this.R,this.Ga,this.fb())};f.ig=null;f.xd=!1;
f.g=function(a){this.h||(this.h=a,a.W().appendChild(this.la),a=this.ig||this.Pf,a.kb=this.h,Di(a))};f.m=function(){Vb(this.la);this.ig=this.Pf=this.la=null};f.i=function(a){(this.ig||this.Pf).kb=a};f.Fa=function(){return this.Ks};f.ja=function(a){null!==a&&(this.Ks=a,this.Pf.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l(a)?a:""))};f.ia=function(a){null!==a&&(this.Ka=a)};f.Zd=function(){};/*

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
function Gl(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=g.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var Hl=Gl();function Il(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function Jl(a){this.jr=Il(a,"clientId");this.yi=Hl.userId;document.getElementById(Il(a,"authButtonElementId"));document.getElementById(Il(a,"authDivElementId"))}Jl.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function Kl(a,b,c,d){function e(c){gapi.sc.Da.files.Rf({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Yc(d)}function h(){function a(b){gapi.sc.Da.Bs.Rf({fileId:"appdata",resource:{key:"folderId",value:b}}).Yc(function(){e(b)})}function b(){gapi.sc.Da.files.Rf({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Yc(function(b){a(b.id)})}gapi.sc.Da.Bs.get({fileId:"appdata",propertyKey:"folderId"}).Yc(function(d){if(d.error)c?b():a("root");else{var h=d.result.value;gapi.sc.Da.files.get({fileId:h}).Yc(function(a){a.error||
a.labels.Ku?b():e(h)})}})}gapi.sc.load("drive","v2",function(){h()})}function Ll(a){this.rk=Il(a,"onFileLoaded");this.ks=Il(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.ek=Il(a,"initializeModel");this.Ck=Il(a,"registerTypes",function(){});this.fj=Il(a,"afterAuth",function(){});this.er=Il(a,"autoCreate",!1);this.vr=Il(a,"defaultTitle","New Realtime File");this.ur=Il(a,"defaultFolderTitle","");this.gj=Il(a,"afterCreate",function(){});this.Wg=new Jl(a)}
function Ml(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Hl=Gl();for(var e in b)gapi.Da.dc.load(b[e],a.rk,a.ek,a.bk)}Ll.prototype.start=function(){var a=this;this.Wg.start(function(){a.Ck&&a.Ck();a.fj&&a.fj();a.load()})};
Ll.prototype.bk=function(a){a.type!=gapi.Da.dc.Di.cu&&(a.type==gapi.Da.dc.Di.Ys?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.Da.dc.Di.Gt&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
Ll.prototype.load=function(){var a=Hl.fileIds;a&&(a=a.split(","));var b=this.Wg.yi,b=Hl.state;if(a)for(var c in a)gapi.Da.dc.load(a[c],this.rk,this.ek,this.bk);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.uu;b=d.yi;Ml(this,a,b);return}}this.er&&Nl(this)}};function Nl(a){Kl(a.vr,a.ks,a.ur,function(b){b.id?(a.gj&&a.gj(b.id),Ml(a,[b.id],a.Wg.yi)):(console.error("Error creating file."),console.error(b))})};/*

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
var Gh,Ol,Fh=!1,Pl=null,Ri=null,Ql=null,Rl=null,Ti=null,Vi=!1,Sl=null,Tl=null,Ul=null;function Vl(a){var b=a.zr;a=a.zr.length;for(var c=0;c<a;c++){var d=b[c];if(!d.Zr){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.xk?Wl(function(){Xl(e,!1);Yl(e)}):"relativeX"!=d.xk&&"relativeY"!=d.xk||Wl(function(){e.Rk||Xl(e,!1);Yl(e)}))}}}function Zl(a){if(!a.Zr){var b=a.newValue;b?Xl(b,!a.oldValue):(b=a.oldValue,$l(b))}}function Wl(a){if(Vi)a();else try{Vi=!0,a()}finally{Vi=!1}}
function Xl(a,b){Wl(function(){var c=Og(a.zi).firstChild;if(c=Qg(B,c,!0))b&&c.t.oe(c),(b||xb(Gh,c))&&Yl(c)})}function Yl(a){if(!isNaN(a.jg)&&!isNaN(a.kg)){var b=Mi().width,c=a.ga(),d=a.jg-c.x;a.moveBy(q?b-d:d,a.kg-c.y)}}function $l(a){Wl(function(){a.m(!0,!0,!0)})}function hk(a){if(a.t==B&&Fh&&!Vi){a=fi(a);var b=a.ga(),c=!1,d=Lg(a);d.setAttribute("id",a.id);var e=D("xml");e.appendChild(d);d=Ng(e);d!=a.zi&&(c=!0,a.zi=d);if(a.jg!=b.x||a.kg!=b.y)a.jg=b.x,a.kg=b.y,c=!0;c&&Ti.set(a.id.toString(),a)}}
function am(a,b){gapi.sc.Da.wk.list({fileId:a}).Yc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Cu){b(e.domain);break}}})}
var em={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Ri=a;var b=a.ku();a.Md().set("blocks",b);b=a.ju();a.Md().set("topBlocks",b);Tl&&a.Md().set(Tl,a.lu(Ul))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){Pl=a;a:{for(var b=a.Er(),c=0;c<b.length;c++){var d=b[c];if(d.$r){Ql=d.Fu;break a}}Ql=void 0}Ri=a.Zf;Ti=Ri.Md().get("blocks");Gh=Ri.Md().get("topBlocks");
Ri.Md().addEventListener(gapi.Da.dc.Ig.Ht,Vl);Ti.addEventListener(gapi.Da.dc.Ig.du,Zl);Rl();a.addEventListener(gapi.Da.dc.Ig.Zs,bm);a.addEventListener(gapi.Da.dc.Ig.$s,cm);dm();a=Gh;for(b=0;b<a.length;b++)c=a.get(b),Xl(c,!0)},registerTypes:function(){var a=gapi.Da.dc.mu;a.Au(pi,"Block");pi.prototype.id=a.$g("id");pi.prototype.zi=a.$g("xmlDom");pi.prototype.jg=a.$g("relativeX");pi.prototype.kg=a.$g("relativeY");a.Gu(pi,pi.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.sc.Da.wk.Rf({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Yc(function(c){c.error&&am(a,function(c){b=gapi.sc.Da.wk.Rf({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Yc(function(){})})})}};function fm(){var a=za,b=Il(a,"chatbox");b&&(Tl=Il(b,"elementId"),Ul=Il(b,"initText",G.cl));em.jr=Il(a,"clientId");Ol=Il(a,"collabElementId")}
function ul(a,b){fm();Fh=!0;gm(b);Rl=function(){a();if(Tl){var b=Ri.Md().get(Tl),d=document.getElementById(Tl);gapi.Da.dc.nu.hu(b,d);d.disabled=!1}};Sl=new Ll(em);Sl.start()}
function gm(a){a.style.background="url("+ph+"progress.gif) no-repeat center center";var b=wd(a),c=D("div");c.id=em.authDivElementId;var d=D("p",null,G.al);c.appendChild(d);d=D("button",null,"Authorize");d.id=em.fu;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=wd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function dm(){if(Ol){var a;a=Ol;a=l(a)?document.getElementById(a):a;Yb(a);for(var b=Pl.Er(),c=0;c<b.length;c++){var d=b[c],e=D("img",{src:d.zu||ph+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.$r?" ("+G.ip+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function bm(){dm()}function cm(){dm()}function oi(a){var b=Ql+"-"+a;return Ti.has(b)?oi("-"+a):b};/*

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
var ph="https://blockly-demo.appspot.com/static/media/",nh=64,oh=92,qh="sprites.png",$h=[,2,1,4,3],Dl=Object.create(null),Jh=null,z=!1,Xh=null,Yh=null,oj=5,gi=20,ci=250,ik=30,B=null,hm=null,ac=0,im=null;function Mi(){return{width:ta.lj,height:ta.kj}}function jk(){var a=ta,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.lj!=c&&(a.setAttribute("width",c+"px"),a.lj=c);a.kj!=b&&(a.setAttribute("height",b+"px"),a.kj=b);B.Hc&&B.Hc.resize()}
function yl(a){jk();lj();gg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!z&&Jh&&b&&Kh();a.target==ta&&$b(a)?jm(a):(z||b)&&B.Hc&&(B.mh=!0,B.pi=a.clientX,B.qi=a.clientY,B.Ms=B.wc(),B.Os=B.scrollX,B.Ps=B.scrollY,"mouseup"in wk&&(im=v(document,"mouseup",null,Bl)),Fa=v(document,"mousemove",null,km))}function Bl(){ih(nk.OPEN);B.mh=!1;im&&(w(im),im=null);Fa&&(w(Fa),Fa=null)}
function km(a){if(B.mh){Bh();var b=B.Ms,c=B.Os+(a.clientX-B.pi),d=B.Ps+(a.clientY-B.qi),c=Math.min(c,-b.ic),d=Math.min(d,-b.Nb),c=Math.max(c,b.wa-b.ic-b.Fd),d=Math.max(d,b.Ua-b.Nb-b.tb);B.Hc.set(-c-b.ic,-d-b.Nb);a.stopPropagation()}}
function Al(a){if(!hh(a))if(27==a.keyCode)gg();else if(8==a.keyCode||46==a.keyCode)try{Jh&&Jh.Id&&!z&&(gg(),Jh.m(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(Jh&&Jh.Id&&!z&&Jh.cc&&!z&&Jh.t==B&&(gg(),67==a.keyCode?lm():88==a.keyCode&&(lm(),Jh.m(!0,!0))),86==a.keyCode&&hm){a=B;var b=hm;if(!(b.getElementsByTagName("block").length>=Ma(a))){var c=Qg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){q&&(d=-d);do for(var e=
!1,h=a.Za(),k=0,m;m=h[k];k++)m=m.ga(),1>=Math.abs(d-m.x)&&1>=Math.abs(b-m.y)&&(d=q?d-gi:d+gi,b+=2*gi,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function lj(){fk&&(w(fk),fk=null);gk&&(w(gk),gk=null);var a=Jh;if(2==ac&&a){var b=a.ga();ji(a,b.x-a.Nk,b.y-a.Ok);delete a.xf;ok(a,!1);a.F();rg(a.Ma,ci,a);lh(window,"resize");a.t.wb()}ac=0;ih(nk.OPEN);nj()}function lm(){var a=Jh,b=Lg(a);Xg(b);a=a.ga();b.setAttribute("x",q?-a.x:a.x);b.setAttribute("y",a.y);hm=b}
function jm(a){if(!z){var b=[];if(wa){for(var c=!1,d=!1,e=Ka(B,!1),h=0;h<e.length;h++)for(var k=e[h];k;)k.isCollapsed()?c=!0:d=!0,k=Mg(k);d={enabled:d};d.text=G.dl;d.Va=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.pd.bind(c,!0),a),c=Mg(c),a+=10};b.push(d);c={enabled:c};c.text=G.im;c.Va=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.pd.bind(c,!1),a),c=Mg(c),a+=10};b.push(c)}ek.show(a,b)}}function zl(a){hh(a)||a.preventDefault()}
function gg(a){Hi();Yk();!a&&B.Ta&&B.Ta.V&&B.Ta.V.pe&&B.Ta.Ye.Ib(null)}function Bh(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function hh(a){return"textarea"==a.target.type||"text"==a.target.type}
function Cl(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var h=a[e],k=h.match(/\.(\w+)$/);if(k&&d.canPlayType("audio/"+k[1])){c=new window.Audio(h);break}}c&&c.play&&(Dl[b]=c)}}function lk(a,b){var c=Dl[a];c&&(c=Rb&&9===Rb||Lb||Jb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function vl(){var a=Mi();B.Ta&&(a.width-=B.Ta.width);var b=a.width-kh,c=a.height-kh;try{var d=B.aa.getBBox()}catch(e){return null}if(B.Hc)var h=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),k=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else h=d.x,b=h+d.width,k=d.y,c=k+d.height;d=0;!q&&B.Ta&&(d=B.Ta.width);return{Ua:a.height,wa:a.width,tb:c-k,Fd:b-h,Mc:-B.scrollY,Bb:-B.scrollX,Nb:k,ic:h,sb:0,rb:d}}
function wl(a){if(!B.Hc)throw"Attempt to set main workspace scroll without scrollbars.";var b=vl();ga(a.x)&&(B.scrollX=-b.Fd*a.x-b.ic);ga(a.y)&&(B.scrollY=-b.tb*a.y-b.Nb);a="translate("+(B.scrollX+b.rb)+","+(B.scrollY+b.sb)+")";B.aa.setAttribute("transform",a);B.ce.setAttribute("transform",a)}function kk(a){a()}function xl(a){return v(B.aa,"blocklyWorkspaceChange",null,a)}g.Blockly||(g.Blockly={});g.Blockly.getMainWorkspace=function(){return B};g.Blockly.addChangeListener=xl;
g.Blockly.removeChangeListener=function(a){w(a)};G.qu={};G.$k="Add Comment";G.al="Please authorize this app to enable your work to be saved and to allow it to be shared by you.";G.bl="Change value:";G.cl="Chat with your collaborator by typing in this box!";G.dl="Collapse Blocks";G.el="Collapse Block";G.fl="colour 1";G.gl="colour 2";G.hl="http://meyerweb.com/eric/tools/color-blend/";G.il="ratio";G.jl="blend";G.kl="Blends two colours together with a given ratio (0.0 - 1.0).";G.ll="https://en.wikipedia.org/wiki/Color";G.ml="Choose a colour from the palette.";
G.nl="http://randomcolour.com";G.ol="random colour";G.pl="Choose a colour at random.";G.ql="blue";G.rl="green";G.sl="http://www.december.com/html/spec/colorper.html";G.tl="red";G.ul="colour with";G.vl="Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";G.wl="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";G.xl="break out of loop";G.yl="continue with next iteration of loop";G.zl="Break out of the containing loop.";G.Al="Skip the rest of this loop, and continue with the next iteration.";
G.Bl="Warning: This block may only be used within a loop.";G.Cl="https://github.com/google/blockly/wiki/Loops#for-each for each block";G.El="in list";G.Ai="";G.Fl="for each item";G.Gl="For each item in a list, set the variable '%1' to the item, and then do some statements.";G.Hl="https://github.com/google/blockly/wiki/Loops#count-with";G.Jl="from %1 to %2 by %3";G.Kl="count with";G.Ll="Have the variable %1 take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
G.Nl="Add a condition to the if block.";G.Pl="Add a final, catch-all condition to the if block.";G.Ql="https://github.com/google/blockly/wiki/IfElse";G.Sl="Add, remove, or reorder sections to reconfigure this if block.";G.Cg="else";G.Dg="else if";G.Eg="if";G.Tl="If a value is true, then do some statements.";G.Ul="If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";G.Vl="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
G.Wl="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";G.Gg="https://en.wikipedia.org/wiki/For_loop";G.Oc="do";G.Xl="repeat %1 times";G.Bi="repeat";G.Ci="times";G.Hg="Do some statements several times.";G.Yl="https://github.com/google/blockly/wiki/Loops#repeat";G.$l="repeat until";G.am="repeat while";G.bm="While a value is false, then do some statements.";
G.cm="While a value is true, then do some statements.";G.dm="Delete Block";G.em="Delete %1 Blocks";G.fm="Disable Block";G.gm="Duplicate";G.hm="Enable Block";G.im="Expand Blocks";G.jm="Expand Block";G.km="External Inputs";G.mm="Help";G.nm="Inline Inputs";G.qm="https://en.wikipedia.org/wiki/Linked_list#Empty_lists";G.Ei="create empty list";G.rm="Returns a list, of length 0, containing no data records";G.sm="list";G.tm="Add, remove, or reorder sections to reconfigure this list block.";G.um="create list with";
G.wm="Add an item to the list.";G.xm="Create a list with any number of items.";G.Fi="first";G.Gi="# from end";G.Hi="#";G.ym="get";G.zm="get and remove";G.Ii="last";G.Ji="random";G.Cm="remove";G.Kg="";G.at="Returns the first item in a list.";G.bt="Returns the item at the specified position in a list. #1 is the last item.";G.ct="Returns the item at the specified position in a list. #1 is the first item.";G.dt="Returns the last item in a list.";G.et="Returns a random item in a list.";G.ft="Removes and returns the first item in a list.";
G.gt="Removes and returns the item at the specified position in a list. #1 is the last item.";G.ht="Removes and returns the item at the specified position in a list. #1 is the first item.";G.it="Removes and returns the last item in a list.";G.jt="Removes and returns a random item in a list.";G.kt="Removes the first item in a list.";G.lt="Removes the item at the specified position in a list. #1 is the last item.";G.mt="Removes the item at the specified position in a list. #1 is the first item.";
G.nt="Removes the last item in a list.";G.ot="Removes a random item in a list.";G.pt="to # from end";G.qt="to #";G.rt="to last";G.Dm="https://github.com/google/blockly/wiki/Lists#getting-a-sublist";G.st="get sub-list from first";G.tt="get sub-list from # from end";G.ut="get sub-list from #";G.Lg="";G.Fm="Creates a copy of the specified portion of a list.";G.Gm="find first occurrence of item";G.Ki="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";G.Im="find last occurrence of item";
G.Jm="Returns the index of the first/last occurrence of the item in the list. Returns 0 if text is not found.";G.ff="in list";G.Km="https://github.com/google/blockly/wiki/Lists#is-empty";G.Lm="%1 is empty";G.Mm="https://github.com/google/blockly/wiki/Lists#length-of";G.Nm="length of %1";G.Om="Returns the length of a list.";G.Pm="https://github.com/google/blockly/wiki/Lists#create-list-with";G.Qm="create list with item %1 repeated %2 times";G.Rm="Creates a list consisting of the given value repeated the specified number of times.";
G.Sm="https://github.com/google/blockly/wiki/Lists#in-list--set";G.Um="as";G.Vm="insert at";G.Wm="set";G.wt="Inserts the item at the start of a list.";G.xt="Inserts the item at the specified position in a list. #1 is the last item.";G.yt="Inserts the item at the specified position in a list. #1 is the first item.";G.zt="Append the item to the end of a list.";G.At="Inserts the item randomly in a list.";G.Bt="Sets the first item in a list.";G.Ct="Sets the item at the specified position in a list. #1 is the last item.";
G.Dt="Sets the item at the specified position in a list. #1 is the first item.";G.Et="Sets the last item in a list.";G.Ft="Sets a random item in a list.";G.Xm="Returns true if the list is empty.";G.Ym="false";G.Zm="https://github.com/google/blockly/wiki/Logic#values";G.$m="Returns either true or false.";G.an="true";G.bn="https://en.wikipedia.org/wiki/Inequality_(mathematics)";G.cn="Return true if both inputs equal each other.";G.dn="Return true if the first input is greater than the second input.";
G.fn="Return true if the first input is greater than or equal to the second input.";G.gn="Return true if the first input is smaller than the second input.";G.hn="Return true if the first input is smaller than or equal to the second input.";G.jn="Return true if both inputs are not equal to each other.";G.kn="https://github.com/google/blockly/wiki/Logic#not";G.ln="not %1";G.mn="Returns true if the input is false. Returns false if the input is true.";G.nn="null";G.on="https://en.wikipedia.org/wiki/Nullable_type";
G.pn="Returns null.";G.qn="and";G.rn="https://github.com/google/blockly/wiki/Logic#logical-operations";G.sn="or";G.tn="Return true if both inputs are true.";G.un="Return true if at least one of the inputs is true.";G.vn="test";G.wn="https://en.wikipedia.org/wiki/%3F:";G.xn="if false";G.yn="if true";G.zn="Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";G.Bn="+";G.Cn="https://en.wikipedia.org/wiki/Arithmetic";G.Dn="Return the sum of the two numbers.";
G.En="Return the quotient of the two numbers.";G.Fn="Return the difference of the two numbers.";G.Gn="Return the product of the two numbers.";G.Hn="Return the first number raised to the power of the second number.";G.In="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";G.Jn="by";G.Kn="change";G.Mn="Add a number to variable '%1'.";G.Nn="https://en.wikipedia.org/wiki/Mathematical_constant";G.On="Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
G.Pn="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";G.Qn="constrain %1 low %2 high %3";G.Rn="Constrain a number to be between the specified limits (inclusive).";G.Sn="\u00f7";G.Tn="is divisible by";G.Un="is even";G.Vn="is negative";G.Wn="is odd";G.Xn="is positive";G.Yn="is prime";G.Zn="Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";G.$n="is whole";G.ao="https://en.wikipedia.org/wiki/Modulo_operation";
G.bo="remainder of %1 \u00f7 %2";G.co="Return the remainder from dividing the two numbers.";G.eo="\u00d7";G.fo="https://en.wikipedia.org/wiki/Number";G.ho="A number.";G.io="";G.jo="average of list";G.ko="max of list";G.lo="median of list";G.mo="min of list";G.no="modes of list";G.oo="random item of list";G.po="standard deviation of list";G.qo="sum of list";G.ro="Return the average (arithmetic mean) of the numeric values in the list.";G.so="Return the largest number in the list.";G.to="Return the median number in the list.";
G.uo="Return the smallest number in the list.";G.vo="Return a list of the most common item(s) in the list.";G.wo="Return a random element from the list.";G.xo="Return the standard deviation of the list.";G.yo="Return the sum of all the numbers in the list.";G.zo="^";G.Ao="https://en.wikipedia.org/wiki/Random_number_generation";G.Bo="random fraction";G.Co="Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";G.Do="https://en.wikipedia.org/wiki/Random_number_generation";G.Eo="random integer from %1 to %2";
G.Fo="Return a random integer between the two specified limits, inclusive.";G.Go="https://en.wikipedia.org/wiki/Rounding";G.Ho="round";G.Io="round down";G.Jo="round up";G.Ko="Round a number up or down.";G.Lo="https://en.wikipedia.org/wiki/Square_root";G.Mo="absolute";G.No="square root";G.Oo="Return the absolute value of a number.";G.Po="Return e to the power of a number.";G.Qo="Return the natural logarithm of a number.";G.Ro="Return the base 10 logarithm of a number.";G.So="Return the negation of a number.";
G.To="Return 10 to the power of a number.";G.Uo="Return the square root of a number.";G.Vo="-";G.Wo="acos";G.Xo="asin";G.Yo="atan";G.Zo="cos";G.$o="https://en.wikipedia.org/wiki/Trigonometric_functions";G.ap="sin";G.bp="tan";G.cp="Return the arccosine of a number.";G.dp="Return the arcsine of a number.";G.ep="Return the arctangent of a number.";G.fp="Return the cosine of a degree (not radian).";G.gp="Return the sine of a degree (not radian).";G.hp="Return the tangent of a degree (not radian).";
G.ip="Me";G.Mi="New variable...";G.jp="New variable name:";G.Tb="";G.pp="allow statements";G.qp="with:";G.Oi="";G.rp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Pi="Run the user-defined function '%1'.";G.tp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Qi="Run the user-defined function '%1' and use its output.";G.Ri="with:";G.up="Create '%1'";G.Si="";G.vp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Ti="do something";G.Ui="to";
G.wp="Creates a function with no output.";G.xp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.ke="return";G.Ap="Creates a function with an output.";G.Bp="Warning: This function has duplicate parameters.";G.Cp="Highlight function definition";G.Dp="If a value is true, then return a second value.";G.Ep="Warning: This block may be used only within a function definition.";G.Fp="input name:";G.Gp="Add an input to the function.";G.Hp="inputs";G.Ip="Add, remove, or reorder inputs to this function.";
G.Jp="Remove Comment";G.Vi="Rename variable...";G.Kp="Rename all '%1' variables to:";G.Qp="append text";G.Rp="https://github.com/google/blockly/wiki/Text#text-modification";G.Sp="to";G.Tp="Append some text to variable '%1'.";G.Wp="https://github.com/google/blockly/wiki/Text#adjusting-text-case";G.Xp="to lower case";G.Yp="to Title Case";G.Zp="to UPPER CASE";G.$p="Return a copy of the text in a different case.";G.aq="get first letter";G.bq="get letter # from end";G.cq="get letter #";G.dq="https://github.com/google/blockly/wiki/Text#extracting-text";
G.eq="in text";G.fq="get last letter";G.gq="get random letter";G.Wi="";G.hq="Returns the letter at the specified position.";G.jq="Add an item to the text.";G.kq="join";G.lq="Add, remove, or reorder sections to reconfigure this text block.";G.Xt="to letter # from end";G.Yt="to letter #";G.Zt="to last letter";G.mq="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";G.nq="in text";G.$t="get substring from first letter";G.au="get substring from letter # from end";G.bu="get substring from letter #";
G.mf="";G.oq="Returns a specified portion of the text.";G.pq="https://github.com/google/blockly/wiki/Text#finding-text";G.qq="in text";G.rq="find first occurrence of text";G.sq="find last occurrence of text";G.Xi="";G.tq="Returns the index of the first/last occurrence of first text in the second text. Returns 0 if text is not found.";G.uq="https://github.com/google/blockly/wiki/Text#checking-for-empty-text";G.vq="%1 is empty";G.wq="Returns true if the provided text is empty.";G.xq="https://github.com/google/blockly/wiki/Text#text-creation";
G.yq="create text with";G.zq="Create a piece of text by joining together any number of items.";G.Aq="https://github.com/google/blockly/wiki/Text#text-modification";G.Bq="length of %1";G.Cq="Returns the number of letters (including spaces) in the provided text.";G.Dq="https://github.com/google/blockly/wiki/Text#printing-text";G.Eq="print %1";G.Fq="Print the specified text, number or other value.";G.Yi="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";G.Zi="Prompt for user for a number.";
G.$i="Prompt for user for some text.";G.aj="prompt for number with message";G.bj="prompt for text with message";G.Gq="https://en.wikipedia.org/wiki/String_(computer_science)";G.Hq="A letter, word, or line of text.";G.Iq="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";G.Jq="trim spaces from both sides of";G.Kq="trim spaces from left side of";G.Lq="trim spaces from right side of";G.Mq="Return a copy of the text with spaces removed from one or both ends.";G.Ad="item";G.Oq="Create 'set %1'";
G.Pq="https://github.com/google/blockly/wiki/Variables#get";G.Rq="";G.Sq="";G.Tq="Returns the value of this variable.";G.Og="Create 'get %1'";G.Uq="https://github.com/google/blockly/wiki/Variables#set";G.Wq="to";G.Xq="set";G.Yq="Sets this variable to be equal to the input.";G.zp=G.Ui;G.Em=G.ff;G.Tm=G.ff;G.yp=G.Ti;G.Vq=G.Ad;G.vm=G.Ad;G.Ln=G.Ad;G.Qq=G.Ad;G.Wt=G.Si;G.Am=G.Ki;G.iq=G.Ad;G.Fg=G.Oc;G.Hm=G.ff;G.sp=G.Oi;G.Bm=G.ff;G.Il=G.Oc;G.Dl=G.Oc;G.Rl=G.Eg;G.Zl=G.Oc;G.Ml=G.Dg;G.Vp=G.Ad;G.Ol=G.Cg;var mm={};function nm(a,b){var c;c=a.className;for(var d=c=l(c)&&c.match(/\S+/g)||[],e=Cb(arguments,1),h=0;h<e.length;h++)xb(d,e[h])||d.push(e[h]);a.className=c.join(" ")};var om={en:"English"},pm=[],qm=window.BlocklyGamesLang,rm=window.BlocklyGamesLanguages,sm=!!window.location.pathname.match(/\.html$/);function tm(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var U,um=Number(tm("level","NaN"));U=isNaN(um)?1:Math.min(Math.max(1,um),10);
function vm(){document.head.parentElement.setAttribute("dir",-1!=pm.indexOf(qm)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",qm);for(var a=[],b=0;b<rm.length;b++){var c=rm[b];a.push([om[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==qm&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!wm(b),a&&c&&nm(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(xm,1)}function wm(a){var b=ym,c;try{c=window.localStorage[b+a]}catch(d){}return c}function V(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function zm(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function xm(){if(!sm){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var W={Jd:null,g:function(){vm();var a=document.getElementById("linkButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=V("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=V("Games_linkAlert"),BlocklyStorage.HASH_ERROR=V("Games_hashError"),BlocklyStorage.XML_ERROR=V("Games_xmlError"),BlocklyStorage.alert=mm.Qs,a&&zm(a,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",W.ir,!0)},Xr:function(a){document.body.innerHTML=
a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";ql(a,{media:"media/",readOnly:!0,Du:-1!=pm.indexOf(qm),scrollbars:!1});a=tm("xml","");W.gi("<xml>"+a+"</xml>")},ds:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.mk}catch(d){}c&&delete window.sessionStorage.mk;var e=wm(U),h=b&&wm(U-1);(c=c||e||h||a)&&W.gi(c)}},gi:function(a){W.Jd?W.Jd.setValue(a,
-1):(a=Og(a),Pg(B,a))},Hs:function(){if(void 0!=typeof ra&&window.localStorage){var a=ym+U;if(W.Jd)var b=W.Jd.getValue();else b=Kg(B),b=Ng(b);window.localStorage[a]=b}},Eh:function(){window.location=(sm?"index.html":"./")+"?lang="+qm},ir:function(){if(window.sessionStorage){if(W.Jd)var a=W.Jd.getValue();else a=Kg(B),a=Ng(a);window.sessionStorage.mk=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+
a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},zh:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Ih(a)},Iu:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Wb:function(a){if("click"==a.type&&"touchend"==W.Wb.Wh&&W.Wb.Vh+2E3>Date.now()||W.Wb.Wh==a.type&&W.Wb.Vh+400>Date.now())return a.preventDefault(),a.stopPropagation(),
!0;W.Wb.Wh=a.type;W.Wb.Vh=Date.now();return!1}};W.Wb.Wh=null;W.Wb.Vh=0;W.Vr=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
W.Wr=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=W;W.setCode=W.gi;var X={Ac:!1,Pj:null,vf:null,Kc:function(a,b,c,d,e,h){function k(){X.Ac&&(m.style.visibility="visible",m.style.zIndex=10,p.style.visibility="hidden")}X.Ac&&X.mb(!1);gg(!0);X.Ac=!0;X.Pj=b;X.vf=h;var m=document.getElementById("dialog");h=document.getElementById("dialogShadow");var p=document.getElementById("dialogBorder"),y;for(y in e)m.style[y]=e[y];d&&(h.style.visibility="visible",h.style.opacity=.3,h.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",m.appendChild(d),X.ih=v(d,"mousedown",
null,X.wr));m.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(X.Xf(b,!1,.2),X.Xf(m,!0,.8),setTimeout(k,175)):k()},Qj:0,Rj:0,wr:function(a){X.lh();if(!$b(a)){var b=document.getElementById("dialog");X.Qj=b.offsetLeft-a.clientX;X.Rj=b.offsetTop-a.clientY;X.kh=v(document,"mouseup",null,X.lh);X.jh=v(document,"mousemove",null,X.xr);a.stopPropagation()}},xr:function(a){var b=document.getElementById("dialog"),c=X.Qj+a.clientX;a=X.Rj+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},lh:function(){X.kh&&(w(X.kh),X.kh=null);X.jh&&(w(X.jh),X.jh=null)},mb:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(X.Ac){X.lh();X.ih&&(w(X.ih),X.ih=null);X.Ac=!1;X.vf&&X.vf();X.vf=null;var c=!1===a?null:X.Pj;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(X.Xf(a,!1,.8),X.Xf(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Xf:function(a,b,c){function d(){e.style.width=h.width+"px";e.style.height=h.height+"px";e.style.left=h.x+"px";e.style.top=h.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),h=X.Dr(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Dr:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Sf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Qs:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");X.Kc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},X.ri);X.oi()},ej:function(){if(!wm(U))if(X.Ac||0!=pi.pu)setTimeout(X.ej,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("abortOk");b.addEventListener("click",W.Eh,!0);b.addEventListener("touchend",W.Eh,
!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.dj,!0)});document.body.addEventListener("keydown",X.dj,!0)}},wu:function(){var a=document.getElementById("dialogDone");B&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("containerCode");a.removeChild(b);10>U?V("Games_nextLevel").replace("%1",U+1):V("Games_finalLevel");b=document.getElementById("doneCancel");
b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("doneOk");1==U&&(b.addEventListener("click",function(){window.open("/puzzle","_self")},!0),b.addEventListener("touchend",function(){window.open("/puzzle","_self")},!0));2==U&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));3==U&&(b.addEventListener("click",function(){window.open("/turtle?lang=en?level=2",
"_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.Ed,!0)});document.body.addEventListener("keydown",X.Ed,!0)},ou:function(){var a=document.getElementById("dialogDone");B&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" Return to the homepage or "Cancel" continue dressing up your avatar.');
var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("doneOk");b.addEventListener("click",function(){window.open("/","_self")},!0);b.addEventListener("touchend",function(){window.open("/","_self")},!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.Ed,!0)});document.body.addEventListener("keydown",
X.Ed,!0)},kr:function(){var a=document.getElementById("dialogDone");if(B){document.getElementById("dialogLinesText").textContent="";var b=10>U?V("Games_nextLevel").replace("%1",U+1):V("Games_finalLevel");document.getElementById("containerCode").innerHTML="puzzle"==ym?"<p>New feature unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/>":"<p>New feature unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/>"}var c=
document.getElementById("doneCancel");c.addEventListener("click",X.mb,!0);c.addEventListener("touchend",X.mb,!0);c=document.getElementById("doneOk");c.addEventListener("click",W.Nh,!0);c.addEventListener("touchend",W.Nh,!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.Ed,!0)});document.body.addEventListener("keydown",X.Ed,!0);document.getElementById("dialogDoneText").textContent=b},Oj:function(a){!X.Ac||13!=a.keyCode&&27!=a.keyCode&&
32!=a.keyCode||(X.mb(!0),a.stopPropagation(),a.preventDefault())},oi:function(){document.body.addEventListener("keydown",X.Oj,!0)},ri:function(){document.body.removeEventListener("keydown",X.Oj,!0)},Ed:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)X.mb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&W.Nh()},dj:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)X.mb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&W.Eh()}};window.BlocklyDialogs=X;
X.hideDialog=X.mb;var Am,Bm,Cm,Y,Dm,Em,Fm,Gm;
function Hm(){function a(a){for(var b=0;5>b;b++)Z(a),Im(144)}switch(U){case 1:for(var b=0;4>b;b++)Z(100),Im(90);break;case 2:for(b=0;5>b;b++)Z(100),Im(72);break;case 3:Jm("#ffff00");a(100);break;case 4:Jm("#ffff00");a(50);Km(!1);Z(150);Km(!0);Z(20);break;case 5:Jm("#ffff00");for(b=0;4>b;b++)Km(!1),Z(150),Im(90),Km(!0),a(50);break;case 6:Jm("#ffff00");for(b=0;3>b;b++)Km(!1),Z(150),Im(120),Km(!0),a(50);Km(!1);Im(-90);Z(100);Km(!0);Jm("#ffffff");Z(50);break;case 7:Jm("#ffff00");for(b=0;3>b;b++)Km(!1),
Z(150),Im(120),Km(!0),a(50);Km(!1);Im(-90);Z(100);Km(!0);Jm("#ffffff");for(b=0;4>b;b++)Z(50),Z(-50),Im(45);break;case 8:Jm("#ffff00");for(b=0;3>b;b++)Km(!1),Z(150),Im(120),Km(!0),a(50);Km(!1);Im(-90);Z(100);Km(!0);Jm("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Im(1);break;case 9:Jm("#ffff00");for(b=0;3>b;b++)Km(!1),Z(150),Im(120),Km(!0),a(50);Km(!1);Im(-90);Z(100);Km(!0);Jm("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Im(1);Im(120);Z(20);Jm("#000000");for(b=0;360>b;b++)Z(50),Z(-50),Im(1)}}
function Lm(a){if(10==U)return 1<B.Za().length;console.log("Pixel errors: "+a);return 100<a?!1:2>=U&&3<B.Za().length||3==U&&4<B.Za().length?(a=document.getElementById("helpUseLoop"),X.Kc(a,null,!1,!0,{width:"30%",left:"35%",top:"12em"},X.ri),X.oi(),!1):!0};function Mm(a,b,c,d,e){this.pm=b-12;this.yd=a+8;this.Jg=a+c-8;this.Sc=20;this.va=.5;this.oj=e;this.Vg=[];e=document.createElementNS(Nm,"line");e.setAttribute("class","sliderTrack");e.setAttribute("x1",a);e.setAttribute("y1",b);e.setAttribute("x2",a+c);e.setAttribute("y2",b);d.appendChild(e);e=document.createElementNS(Nm,"rect");e.setAttribute("style","opacity: 0");e.setAttribute("x",a-this.Sc);e.setAttribute("y",b-this.Sc);e.setAttribute("width",c+2*this.Sc);e.setAttribute("height",2*this.Sc);e.setAttribute("rx",
this.Sc);e.setAttribute("ry",this.Sc);d.appendChild(e);this.Ts=e;a=document.createElementNS(Nm,"path");a.setAttribute("class","sliderKnob");a.setAttribute("d","m 0,0 l -8,8 v 12 h 16 v -12 z");d.appendChild(a);this.jk=a;a=document.createElementNS(Nm,"circle");a.setAttribute("style","opacity: 0");a.setAttribute("r",this.Sc);a.setAttribute("cy",b);d.appendChild(a);this.Hh=a;for(this.ja(.5);d&&"svg"!=d.nodeName.toLowerCase();)d=d.parentNode;this.Rc=d;Om(this.Hh,"mousedown",this,this.ik);Om(this.Hh,"touchstart",
this,this.ik);Om(this.Ts,"mousedown",this,this.Cs);Om(this.Rc,"mouseup",null,Pm);Om(this.Rc,"touchend",null,Pm);Om(this.Rc,"mousemove",null,Qm);Om(this.Rc,"touchmove",null,Qm);Om(document,"mouseover",null,Rm)}var Nm="http://www.w3.org/2000/svg",Sm=null,Tm=0,Um=0;Mm.prototype.ik=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Vm(a)}Sm=this;Tm=Wm(this,a).x;Um=0;var b=this.jk.getAttribute("transform");b&&(b=b.match(/translate\(\s*([-\d.]+)/))&&(Um=Number(b[1]));a.preventDefault()};
function Pm(){Sm=null}function Rm(a){if(Sm){a=a.target;do if(a==Sm.Rc)return;while(a=a.parentNode);Sm=null}}function Qm(a){var b=Sm;if(b){if("touchmove"==a.type){if(1!=a.changedTouches.length)return;Vm(a)}a=Wm(b,a).x-Tm+Um;b.ja((a-b.yd)/(b.Jg-b.yd))}}Mm.prototype.Cs=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Vm(a)}a=Wm(this,a).x;Xm(this,(a-this.yd)/(this.Jg-this.yd))};Mm.prototype.Fa=function(){return this.va};
function Xm(a,b){function c(c){return function(){a.ja(c*(b-d)/9+d)}}for(;a.Vg.length;)clearTimeout(a.Vg.pop());for(var d=a.Fa(),e=0;10>e;e++)a.Vg.push(setTimeout(c(e),200*e/10))}Mm.prototype.ja=function(a){this.va=Math.min(Math.max(a,0),1);a=this.yd+(this.Jg-this.yd)*this.va;this.jk.setAttribute("transform","translate("+a+","+this.pm+")");this.Hh.setAttribute("cx",a);this.oj&&this.oj(this.va)};
function Wm(a,b){var c=a.Rc.createSVGPoint();c.x=b.clientX;c.y=b.clientY;var d=a.Rc.getScreenCTM().inverse();return c.matrixTransform(d)}function Om(a,b,c,d){a.addEventListener(b,function(a){d.apply(c,arguments)},!1)}function Vm(a){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY};/*

 Visual Blocks Language

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
var T=new el("JavaScript");jl("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
T.Sb=0;T.X=1;T.St=1;T.P=2;T.Qt=3;T.Nt=3;T.kf=4;T.Jt=4;T.Ut=4;T.lf=4;T.Tt=4;T.Vt=4;T.Ot=4;T.mp=5;T.jf=5;T.je=5;T.Mg=6;T.op=6;T.Lt=7;T.np=8;T.Pt=8;T.Rt=8;T.Ni=9;T.It=10;T.Mt=11;T.Kt=12;T.kp=13;T.lp=14;T.hf=15;T.Qc=16;T.pa=17;T.S=99;T.g=function(a){T.Hd=Object.create(null);T.Xj=Object.create(null);T.da?T.da.reset():T.da=new Ga(T.Ng);var b=[];a=$f(a);for(var c=0;c<a.length;c++)b[c]="var "+T.da.getName(a[c],"VARIABLE")+";";T.Hd.variables=b.join("\n")};
T.finish=function(a){var b=[],c;for(c in T.Hd)b.push(T.Hd[c]);return b.join("\n\n")+"\n\n\n"+a};T.Hk=function(a){return a+";\n"};T.zk=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
T.bi=function(a,b){var c="";if(!a.G||!a.G.w){var d=a.Cf();d&&(c+=fl(d,"// ")+"\n");for(var e=0;e<a.T.length;e++)if(1==a.T[e].type){var h=H(a.T[e].s);if(h){for(var d=[],h=h.Eb(),k=0;k<h.length;k++){var m=h[k].Cf();m&&d.push(m)}d.length&&d.push("");(d=d.join("\n"))&&(c+=fl(d,"// "))}}}e=gl(T,a.C&&H(a.C));return c+b+e};/*

 Visual Blocks Language

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
T.cs={};T.lists_create_empty=function(){return["[]",T.Sb]};T.lists_create_with=function(a){for(var b=Array(a.ha),c=0;c<a.ha;c++)b[c]=S(a,"ADD"+c,T.pa)||"null";b="["+b.join(", ")+"]";return[b,T.Sb]};T.lists_repeat=function(a){var b=kl("lists_repeat",["function "+T.Ca+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=S(a,"ITEM",T.pa)||"null";a=S(a,"NUM",T.pa)||"0";return[b+"("+c+", "+a+")",T.P]};
T.lists_length=function(a){return[(S(a,"VALUE",T.P)||"[]")+".length",T.X]};T.lists_isEmpty=function(a){return["!"+(S(a,"VALUE",T.X)||"[]")+".length",T.kf]};T.lists_indexOf=function(a){var b="FIRST"==O(a,"END")?"indexOf":"lastIndexOf",c=S(a,"FIND",T.S)||"''";return[(S(a,"VALUE",T.X)||"[]")+"."+b+"("+c+") + 1",T.X]};
T.lists_getIndex=function(a){var b=O(a,"MODE")||"GET",c=O(a,"WHERE")||"FROM_START",d=S(a,"AT",T.lf)||"1";a=S(a,"VALUE",T.X)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",T.X];if("GET_REMOVE"==b)return[a+".shift()",T.X];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",T.X];if("GET_REMOVE"==b)return[a+".pop()",T.X];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=xk(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",T.X];if("GET_REMOVE"==
b)return[a+".splice("+d+", 1)[0]",T.P];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",T.P];if("GET_REMOVE"==b||"REMOVE"==b){c=kl("lists_remove_from_end",["function "+T.Ca+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,T.P];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=kl("lists_get_random_item",["function "+T.Ca+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);",
"  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,T.P];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
T.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Ha(T.da,"tmp_list"),b="var "+a+" = "+c+";\n";c=a;return b}var c=S(a,"LIST",T.X)||"[]",d=O(a,"MODE")||"GET",e=O(a,"WHERE")||"FROM_START",h=S(a,"AT",T.S)||"1";a=S(a,"TO",T.Qc)||"null";if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==
e){h=xk(h)?parseFloat(h)-1:h+" - 1";if("SET"==d)return c+"["+h+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+h+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+c+".length - "+h+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();h=Ha(T.da,"tmp_x");e+="var "+h+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+h+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";
};
T.lists_getSublist=function(a){var b=S(a,"LIST",T.X)||"[]",c=O(a,"WHERE1"),d=O(a,"WHERE2"),e=S(a,"AT1",T.S)||"1";a=S(a,"AT2",T.S)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":kl("lists_get_sublist",["function "+T.Ca+"(list, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {",
"      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",T.P]};/*

 Visual Blocks Language

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
T.Ws={};T.variables_get=function(a){return[T.da.getName(O(a,"VAR"),"VARIABLE"),T.Sb]};T.variables_set=function(a){var b=S(a,"VALUE",T.Qc)||"0";return T.da.getName(O(a,"VAR"),"VARIABLE")+" = "+b+";\n"};/*

 Visual Blocks Language

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
T.text={};T.text=function(a){return[T.zk(O(a,"TEXT")),T.Sb]};T.text_join=function(a){var b;if(0==a.ha)return["''",T.Sb];if(1==a.ha)return b=S(a,"ADD0",T.S)||"''",["String("+b+")",T.P];if(2==a.ha)return b=S(a,"ADD0",T.S)||"''",a=S(a,"ADD1",T.S)||"''",["String("+b+") + String("+a+")",T.Mg];b=Array(a.ha);for(var c=0;c<a.ha;c++)b[c]=S(a,"ADD"+c,T.pa)||"''";b="["+b.join(",")+"].join('')";return[b,T.P]};
T.text_append=function(a){var b=T.da.getName(O(a,"VAR"),"VARIABLE");a=S(a,"TEXT",T.S)||"''";return b+" = String("+b+") + String("+a+");\n"};T.text_length=function(a){return[(S(a,"VALUE",T.P)||"''")+".length",T.X]};T.text_isEmpty=function(a){return["!"+(S(a,"VALUE",T.X)||"''"),T.kf]};T.text_indexOf=function(a){var b="FIRST"==O(a,"END")?"indexOf":"lastIndexOf",c=S(a,"FIND",T.S)||"''";return[(S(a,"VALUE",T.X)||"''")+"."+b+"("+c+") + 1",T.X]};
T.text_charAt=function(a){var b=O(a,"WHERE")||"FROM_START",c=S(a,"AT",T.lf)||"1";a=S(a,"VALUE",T.X)||"''";switch(b){case "FIRST":return[a+".charAt(0)",T.P];case "LAST":return[a+".slice(-1)",T.P];case "FROM_START":return c=xk(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",T.P];case "FROM_END":return[a+".slice(-"+c+").charAt(0)",T.P];case "RANDOM":return b=kl("text_random_letter",["function "+T.Ca+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",[b,
T.P]}throw"Unhandled option (text_charAt).";};
T.text_getSubstring=function(a){var b=S(a,"STRING",T.X)||"''",c=O(a,"WHERE1"),d=O(a,"WHERE2"),e=S(a,"AT1",T.S)||"1";a=S(a,"AT2",T.S)||"1";return["FIRST"==c&&"LAST"==d?b:kl("text_get_substring",["function "+T.Ca+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;",
"    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",T.P]};
T.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[O(a,"CASE")];b?(a=S(a,"TEXT",T.X)||"''",a+=b):(b=kl("text_toTitleCase",["function "+T.Ca+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=S(a,"TEXT",T.S)||"''",a=b+"("+a+")");return[a,T.P]};
T.text_trim=function(a){var b={LEFT:".trimLeft()",RIGHT:".trimRight()",BOTH:".trim()"}[O(a,"MODE")];return[(S(a,"TEXT",T.X)||"''")+b,T.P]};T.text_print=function(a){return"window.alert("+(S(a,"TEXT",T.S)||"''")+");\n"};T.text_prompt=function(a){var b="window.prompt("+T.zk(O(a,"TEXT"))+")";"NUMBER"==O(a,"TYPE")&&(b="parseFloat("+b+")");return[b,T.P]};T.text_prompt_ext=function(a){var b="window.prompt("+(S(a,"TEXT",T.S)||"''")+")";"NUMBER"==O(a,"TYPE")&&(b="parseFloat("+b+")");return[b,T.P]};/*

 Visual Blocks Language

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
T.sj={};T.colour_picker=function(a){return["'"+O(a,"COLOUR")+"'",T.Sb]};T.colour_random=function(){return[kl("colour_random",["function "+T.Ca+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",T.P]};
T.colour_rgb=function(a){var b=S(a,"RED",T.pa)||0,c=S(a,"GREEN",T.pa)||0;a=S(a,"BLUE",T.pa)||0;return[kl("colour_rgb",["function "+T.Ca+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;","  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",T.P]};
T.colour_blend=function(a){var b=S(a,"COLOUR1",T.pa)||"'#000000'",c=S(a,"COLOUR2",T.pa)||"'#000000'";a=S(a,"RATIO",T.pa)||.5;return[kl("colour_blend",["function "+T.Ca+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);","  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);",
"  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",T.P]};/*

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
C.Ws={};C.variables_get={g:function(){this.p=G.Pq;this.j(330);N(N(N(Q(this),G.Sq),new dg(G.Qq),"VAR"),G.Rq);K(this,!0);this.i(G.Tq);this.vj=G.Oq;this.wj="variables_set"},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},ub:function(a){var b={enabled:!0},c=O(this,"VAR");b.text=this.vj.replace("%1",c);c=D("field",null,c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type",this.wj);b.Va=ek.qf(this,c);a.push(b)}};
C.variables_set={g:function(){this.p=G.Uq;this.j(330);this.sa(G.Xq+" %1 "+G.Wq+" %2",["VAR",new dg(G.Vq)],["VALUE",null,1],1);L(this,!0);M(this,!0);this.i(G.Yq);this.vj=G.Og;this.wj="variables_get"},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},ub:C.variables_get.ub};/*

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
C.sj={};C.colour_picker={g:function(){this.p=G.ll;this.j(330);N(Q(this),new Tk("#ff0000"),"COLOUR");K(this,!0,"Colour");this.i(G.ml)}};C.colour_random={g:function(){this.p=G.nl;this.j(20);N(Q(this),G.ol);K(this,!0,"Colour");this.i(G.pl)}};C.colour_rgb={g:function(){this.p=G.sl;this.j(20);N(N(Qi(P(this,"RED").v("Number"),1),G.ul),G.tl);N(Qi(P(this,"GREEN").v("Number"),1),G.rl);N(Qi(P(this,"BLUE").v("Number"),1),G.ql);K(this,!0,"Colour");this.i(G.vl)}};
C.colour_blend={g:function(){this.p=G.hl;this.j(20);N(N(Qi(P(this,"COLOUR1").v("Colour"),1),G.jl),G.fl);N(Qi(P(this,"COLOUR2").v("Colour"),1),G.gl);N(Qi(P(this,"RATIO").v("Number"),1),G.il);K(this,!0,"Colour");this.i(G.kl)}};/*

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
C.fs={};C.controls_repeat={g:function(){this.p=G.Gg;this.j(120);N(N(N(Q(this),G.Bi),new Zk("10",dl),"TIMES"),G.Ci);N($i(this,3,"DO"),G.Oc);L(this,!0);M(this,!0);this.i(G.Hg)}};C.controls_repeat_ext={g:function(){this.p=G.Gg;this.j(120);this.sa(G.Xl,["TIMES","Number",1],1);N($i(this,3,"DO"),G.Oc);L(this,!0);M(this,!0);Sg(this,!0);this.i(G.Hg)}};
C.controls_whileUntil={g:function(){var a=[[G.am,"WHILE"],[G.$l,"UNTIL"]];this.p=G.Yl;this.j(120);N(P(this,"BOOL").v("Boolean"),new F(a),"MODE");N($i(this,3,"DO"),G.Zl);L(this,!0);M(this,!0);var b=this;this.i(function(){var a=O(b,"MODE");return{WHILE:G.cm,UNTIL:G.bm}[a]})}};
C.controls_for={g:function(){this.p=G.Hl;this.j(120);N(N(Q(this),G.Kl),new dg(null),"VAR");this.sa(G.Jl,["FROM","Number",1],["TO","Number",1],["BY","Number",1],1);N($i(this,3,"DO"),G.Il);L(this,!0);M(this,!0);Sg(this,!0);var a=this;this.i(function(){return G.Ll.replace("%1",O(a,"VAR"))})},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},ub:function(a){if(!this.isCollapsed()){var b={enabled:!0},c=O(this,"VAR");b.text=G.Og.replace("%1",c);c=D("field",null,
c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type","variables_get");b.Va=ek.qf(this,c);a.push(b)}}};C.controls_forEach={g:function(){this.p=G.Cl;this.j(120);N(N(N(P(this,"LIST").v("Array"),G.Fl),new dg(null),"VAR"),G.El);G.Ai&&(N(Q(this),G.Ai),Sg(this,!0));N($i(this,3,"DO"),G.Dl);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.Gl.replace("%1",O(a,"VAR"))})},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},ub:C.controls_for.ub};
C.controls_flow_statements={g:function(){var a=[[G.xl,"BREAK"],[G.yl,"CONTINUE"]];this.p=G.wl;this.j(120);N(Q(this),new F(a),"FLOW");L(this,!0);var b=this;this.i(function(){var a=O(b,"FLOW");return{BREAK:G.zl,CONTINUE:G.Al}[a]})},onchange:function(){if(this.t){var a=!1,b=this;do{if("controls_repeat"==b.type||"controls_repeat_ext"==b.type||"controls_forEach"==b.type||"controls_for"==b.type||"controls_whileUntil"==b.type){a=!0;break}b=Wi(b)}while(b);a?this.sd(null):this.sd(G.Bl)}}};/*

 Visual Blocks Language

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
T.gs={};T.math_number=function(a){return[parseFloat(O(a,"NUM")),T.Sb]};T.math_arithmetic=function(a){var b={ADD:[" + ",T.Mg],MINUS:[" - ",T.op],MULTIPLY:[" * ",T.mp],DIVIDE:[" / ",T.jf],POWER:[null,T.pa]}[O(a,"OP")],c=b[0],b=b[1],d=S(a,"A",b)||"0";a=S(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",T.P]};
T.math_single=function(a){var b=O(a,"OP"),c;if("NEG"==b)return a=S(a,"NUM",T.lf)||"0","-"==a[0]&&(a=" "+a),["-"+a,T.lf];a="SIN"==b||"COS"==b||"TAN"==b?S(a,"NUM",T.jf)||"0":S(a,"NUM",T.S)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,T.P];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,T.jf]};
T.math_constant=function(a){return{PI:["Math.PI",T.X],E:["Math.E",T.X],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",T.jf],SQRT2:["Math.SQRT2",T.X],SQRT1_2:["Math.SQRT1_2",T.X],INFINITY:["Infinity",T.Sb]}[O(a,"CONSTANT")]};
T.math_number_property=function(a){var b=S(a,"NUMBER_TO_CHECK",T.je)||"0",c=O(a,"PROPERTY"),d;if("PRIME"==c)return d=kl("math_isPrime",["function "+T.Ca+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,T.P];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=S(a,"DIVISOR",T.je)||"0",d=b+" % "+a+" == 0"}return[d,T.Ni]};
T.math_change=function(a){var b=S(a,"DELTA",T.Mg)||"0";a=T.da.getName(O(a,"VAR"),"VARIABLE");return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};T.math_round=T.math_single;T.math_trig=T.math_single;
T.math_on_list=function(a){var b=O(a,"OP");switch(b){case "SUM":a=S(a,"LIST",T.X)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=S(a,"LIST",T.pa)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=S(a,"LIST",T.pa)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=kl("math_mean",["function "+T.Ca+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=S(a,"LIST",T.S)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=kl("math_median",
["function "+T.Ca+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=S(a,"LIST",T.S)||"[]";a=b+"("+a+")";break;case "MODE":b=kl("math_modes",["function "+T.Ca+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=S(a,"LIST",T.S)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=kl("math_standard_deviation",["function "+T.Ca+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=S(a,"LIST",T.S)||"[]";a=b+"("+a+")";break;case "RANDOM":b=kl("math_random_list",["function "+T.Ca+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=S(a,"LIST",T.S)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,T.P]};T.math_modulo=function(a){var b=S(a,"DIVIDEND",T.je)||"0";a=S(a,"DIVISOR",T.je)||"0";return[b+" % "+a,T.je]};
T.math_constrain=function(a){var b=S(a,"VALUE",T.pa)||"0",c=S(a,"LOW",T.pa)||"0";a=S(a,"HIGH",T.pa)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",T.P]};T.math_random_int=function(a){var b=S(a,"FROM",T.pa)||"0";a=S(a,"TO",T.pa)||"0";return[kl("math_random_int",["function "+T.Ca+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",T.P]};
T.math_random_float=function(){return["Math.random()",T.P]};/*

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
C.text={};C.text={g:function(){this.p=G.Gq;this.j(160);N(N(N(Q(this),this.Wd(!0)),new Zk(""),"TEXT"),this.Wd(!1));K(this,!0,"String");this.i(G.Hq)},Wd:function(a){return new Fl(ph+(a==q?"quote1.png":"quote0.png"),12,12,'"')}};
C.text_join={g:function(){this.p=G.xq;this.j(160);this.ha=2;this.fc();K(this,!0,"String");this.$d(new Qh(["text_create_join_item"]));this.i(G.zq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ha);return a},Oa:function(a){this.ha=parseInt(a.getAttribute("items"),10);this.fc()},Gd:function(a){var b=hc(a,"text_create_join_container");b.ra();for(var c=I(b,"STACK").s,d=0;d<this.ha;d++){var e=hc(a,"text_create_join_item");e.ra();Wg(c,e.K);c=e.C}return b},Dd:function(a){a=
bj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.fe,a=a.C&&H(a.C),c++;this.ha=c;this.fc();for(c=0;c<this.ha;c++)b[c]&&Wg(I(this,"ADD"+c).s,b[c])},Pe:function(a){a=bj(a,"STACK");for(var b=0;a;){var c=I(this,"ADD"+b);a.fe=c&&c.s.w;b++;a=a.C&&H(a.C)}},fc:function(){if(I(this,"EMPTY"))R(this,"EMPTY");else for(var a=0;I(this,"ADD"+a);)R(this,"ADD"+a),a++;if(0==this.ha)N(N(Q(this,"EMPTY"),new Fl(ph+"quote0.png",12,12,'"')),new Fl(ph+"quote1.png",12,12,'"'));else for(a=0;a<this.ha;a++){var b=P(this,"ADD"+a);0==
a&&N(b,G.yq)}}};C.text_create_join_container={g:function(){this.j(160);N(Q(this),G.kq);$i(this,3,"STACK");this.i(G.lq);this.contextMenu=!1}};C.text_create_join_item={g:function(){this.j(160);N(Q(this),G.iq);L(this,!0);M(this,!0);this.i(G.jq);this.contextMenu=!1}};
C.text_append={g:function(){this.p=G.Rp;this.j(160);N(N(N(P(this,"TEXT"),G.Sp),new dg(G.Vp),"VAR"),G.Qp);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.Tp.replace("%1",O(a,"VAR"))})},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")}};C.text_length={g:function(){this.p=G.Aq;this.j(160);this.sa(G.Bq,["VALUE",["String","Array"],1],1);K(this,!0,"Number");this.i(G.Cq)}};
C.text_isEmpty={g:function(){this.p=G.uq;this.j(160);this.sa(G.vq,["VALUE",["String","Array"],1],1);K(this,!0,"Boolean");this.i(G.wq)}};C.text_indexOf={g:function(){var a=[[G.rq,"FIRST"],[G.sq,"LAST"]];this.p=G.pq;this.j(160);K(this,!0,"Number");N(P(this,"VALUE").v("String"),G.qq);N(P(this,"FIND").v("String"),new F(a),"END");G.Xi&&N(Q(this),G.Xi);Sg(this,!0);this.i(G.tq)}};
C.text_charAt={g:function(){this.le=[[G.cq,"FROM_START"],[G.bq,"FROM_END"],[G.aq,"FIRST"],[G.fq,"LAST"],[G.gq,"RANDOM"]];this.p=G.dq;this.j(160);K(this,!0,"String");N(P(this,"VALUE").v("String"),G.eq);Q(this,"AT");Sg(this,!0);this.ca(!0);this.i(G.hq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at",1==I(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ca(a)},ca:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.Tb&&
N(Q(this,"ORDINAL"),G.Tb)):Q(this,"AT");G.Wi&&(R(this,"TAIL",!0),N(Q(this,"TAIL"),G.Wi));var b=new F(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});N(I(this,"AT"),b,"WHERE")}};
C.text_getSubstring={g:function(){this.p=G.mq;this.j(160);N(P(this,"STRING").v("String"),G.nq);Q(this,"AT1");Q(this,"AT2");G.mf&&N(Q(this,"TAIL"),G.mf);Sg(this,!0);K(this,!0,"String");this.ca(1,!0);this.ca(2,!0);this.i(G.oq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==I(this,"AT1").type);a.setAttribute("at2",1==I(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ca(1,b);this.ca(2,a)},ca:function(a,
b){R(this,"AT"+a);R(this,"ORDINAL"+a,!0);b?(P(this,"AT"+a).v("Number"),G.Tb&&N(Q(this,"ORDINAL"+a),G.Tb)):Q(this,"AT"+a);2==a&&G.mf&&(R(this,"TAIL",!0),N(Q(this,"TAIL"),G.mf));var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ca(a,e);ic(h,c,"WHERE"+a);return null}});N(I(this,"AT"+a),c,"WHERE"+a);1==a&&aj(this,"AT1","AT2")}};
C.text_changeCase={g:function(){var a=[[G.Zp,"UPPERCASE"],[G.Xp,"LOWERCASE"],[G.Yp,"TITLECASE"]];this.p=G.Wp;this.j(160);N(P(this,"TEXT").v("String"),new F(a),"CASE");K(this,!0,"String");this.i(G.$p)}};C.text_trim={g:function(){var a=[[G.Jq,"BOTH"],[G.Kq,"LEFT"],[G.Lq,"RIGHT"]];this.p=G.Iq;this.j(160);N(P(this,"TEXT").v("String"),new F(a),"MODE");K(this,!0,"String");this.i(G.Mq)}};C.text_print={g:function(){this.p=G.Dq;this.j(160);this.sa(G.Eq,["TEXT",null,1],1);L(this,!0);M(this,!0);this.i(G.Fq)}};
C.text_prompt={g:function(){var a=[[G.bj,"TEXT"],[G.aj,"NUMBER"]],b=this;this.p=G.Yi;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});N(N(N(N(Q(this),a,"TYPE"),this.Wd(!0)),new Zk(""),"TEXT"),this.Wd(!1));K(this,!0,"String");b=this;this.i(function(){return"TEXT"==O(b,"TYPE")?G.$i:G.Zi})},Wd:C.text.Wd};
C.text_prompt_ext={g:function(){var a=[[G.bj,"TEXT"],[G.aj,"NUMBER"]],b=this;this.p=G.Yi;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});N(P(this,"TEXT"),a,"TYPE");K(this,!0,"String");b=this;this.i(function(){return"TEXT"==O(b,"TYPE")?G.$i:G.Zi})}};/*

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
C.As={};
C.procedures_defnoreturn={g:function(){this.p=G.vp;this.j(290);var a=dc(G.Ti,this);N(N(N(Q(this),G.Ui),new Zk(a,fc),"NAME"),"","PARAMS");this.$d(new Qh(["procedures_mutatorarg"]));this.i(G.wp);this.A=[];this.rd(!0);this.pb=null},rd:function(a){this.Mf!==a&&(a?(N($i(this,3,"STACK"),G.Si),I(this,"RETURN")&&aj(this,"STACK","RETURN")):R(this,"STACK",!0),this.Mf=a)},af:function(){for(var a=!1,b={},c=0;c<this.A.length;c++){if(b["arg_"+this.A[c].toLowerCase()]){a=!0;break}b["arg_"+this.A[c].toLowerCase()]=!0}a?
this.sd(G.Bp):this.sd(null);a="";this.A.length&&(a=G.qp+" "+this.A.join(", "));ic(this,a,"PARAMS")},Ia:function(){for(var a=document.createElement("mutation"),b=0;b<this.A.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}this.Mf||a.setAttribute("statements","false");return a},Oa:function(a){this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.af();this.rd("false"!==a.getAttribute("statements"))},
Gd:function(a){var b=hc(a,"procedures_mutatorcontainer");b.ra();I(this,"RETURN")?ic(b,this.Mf?"TRUE":"FALSE","STATEMENTS"):I(b,"STATEMENT_INPUT").O(!1);for(var c=I(b,"STACK").s,d=0;d<this.A.length;d++){var e=hc(a,"procedures_mutatorarg");e.ra();ic(e,this.A[d],"NAME");e.yu=d;Wg(c,e.K);c=e.C}kc(O(this,"NAME"),this.t,this.A,null);return b},Dd:function(a){this.A=[];this.Rh=[];for(var b=bj(a,"STACK");b;)this.A.push(O(b,"NAME")),this.Rh.push(b.id),b=b.C&&H(b.C);this.af();kc(O(this,"NAME"),this.t,this.A,
this.Rh);a=O(a,"STATEMENTS");if(null!==a&&(a="TRUE"==a,this.Mf!=a))if(a)this.rd(!0),a=I(this,"STACK").s,a.w||!this.pb||this.pb.w||this.pb.h.t!=this.t?this.pb=null:Wg(a,this.pb);else{a=I(this,"STACK").s;if(this.pb=a.w)a=H(a),a.bb(null),a.Ma();this.rd(!1)}},m:function(){for(var a=O(this,"NAME"),a=jc(a,this.t),b=0;b<a.length;b++)a[b].m(!0,!1);this.constructor.prototype.m.apply(this,arguments)},If:function(){return[O(this,"NAME"),this.A,!1]},Zb:function(){return this.A},Hb:function(a,b){for(var c=!1,
d=0;d<this.A.length;d++)Ia(a,this.A[d])&&(this.A[d]=b,c=!0);if(c&&(this.af(),this.Gb.vu()))for(var c=this.Gb.u.Za(),d=0,e;e=c[d];d++)"procedures_mutatorarg"==e.type&&Ia(a,O(e,"NAME"))&&ic(e,b,"NAME")},ub:function(a){var b={enabled:!0},c=O(this,"NAME");b.text=G.up.replace("%1",c);var d=D("mutation");d.setAttribute("name",c);for(var e=0;e<this.A.length;e++)c=D("arg"),c.setAttribute("name",this.A[e]),d.appendChild(c);d=D("block",null,d);d.setAttribute("type",this.mj);b.Va=ek.qf(this,d);a.push(b);if(!this.isCollapsed())for(e=
0;e<this.A.length;e++)b={enabled:!0},c=this.A[e],b.text=G.Og.replace("%1",c),d=D("field",null,c),d.setAttribute("name","VAR"),d=D("block",null,d),d.setAttribute("type","variables_get"),b.Va=ek.qf(this,d),a.push(b)},mj:"procedures_callnoreturn"};
C.procedures_defreturn={g:function(){this.p=G.xp;this.j(290);var a=dc(G.yp,this);N(N(N(Q(this),G.zp),new Zk(a,fc),"NAME"),"","PARAMS");N(Qi(P(this,"RETURN"),1),G.ke);this.$d(new Qh(["procedures_mutatorarg"]));this.i(G.Ap);this.A=[];this.rd(!0);this.pb=null},rd:C.procedures_defnoreturn.rd,af:C.procedures_defnoreturn.af,Ia:C.procedures_defnoreturn.Ia,Oa:C.procedures_defnoreturn.Oa,Gd:C.procedures_defnoreturn.Gd,Dd:C.procedures_defnoreturn.Dd,m:C.procedures_defnoreturn.m,If:function(){return[O(this,
"NAME"),this.A,!0]},Zb:C.procedures_defnoreturn.Zb,Hb:C.procedures_defnoreturn.Hb,ub:C.procedures_defnoreturn.ub,mj:"procedures_callreturn"};C.procedures_mutatorcontainer={g:function(){this.j(290);N(Q(this),G.Hp);$i(this,3,"STACK");N(N(Q(this,"STATEMENT_INPUT"),G.pp),new yk("TRUE"),"STATEMENTS");this.i(G.Ip);this.contextMenu=!1}};
C.procedures_mutatorarg={g:function(){this.j(290);N(N(Q(this),G.Fp),new Zk("x",this.Vs),"NAME");L(this,!0);M(this,!0);this.i(G.Gp);this.contextMenu=!1},Vs:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
C.procedures_callnoreturn={g:function(){this.p=G.rp;this.j(290);N(N(N(Q(this),G.Oi),"","NAME"),G.Ri,"WITH");L(this,!0);M(this,!0);this.A=[];this.Gc=this.ld=null},Ld:function(){return O(this,"NAME")},Zh:function(a,b){Ia(a,this.Ld())&&(ic(this,b,"NAME"),this.i((this.G?G.Qi:G.Pi).replace("%1",b)))},be:function(a,b){if(b){if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";this.Gc||(this.ld={},this.Gc=a.join("\n")==this.A.join("\n")?b:[]);var c=this.B;this.B=!1;for(var d=
this.A.length-1;0<=d;d--){var e=I(this,"ARG"+d);if(e){var h=e.s.w;this.ld[this.Gc[d]]=h;R(this,"ARG"+d)}}this.A=[].concat(a);this.Gc=b;for(d=0;d<this.A.length;d++)if(e=N(Qi(P(this,"ARG"+d),1),this.A[d]),this.Gc){var k=this.Gc[d];k in this.ld&&(h=this.ld[k],!h||h.w||h.h.t!=this.t?delete this.ld[k]:Wg(e.s,h))}Yi(this,"WITH").O(!!this.A.length);(this.B=c)&&this.F()}else this.ld={},this.Gc=null},Ia:function(){var a=document.createElement("mutation");a.setAttribute("name",this.Ld());for(var b=0;b<this.A.length;b++){var c=
document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}return a},Oa:function(a){var b=a.getAttribute("name");ic(this,b,"NAME");this.i((this.G?G.Qi:G.Pi).replace("%1",b));if((b=lc(b,this.t))&&b.Gb.J())this.be(b.A,b.Rh);else{this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.be(this.A,this.A)}},Hb:function(a,b){for(var c=0;c<this.A.length;c++)Ia(a,this.A[c])&&(this.A[c]=b,I(this,"ARG"+c).Pa[0].ia(b))},ub:function(a){var b=
{enabled:!0};b.text=G.Cp;var c=this.Ld(),d=this.t;b.Va=function(){var a=lc(c,d);a&&a.select()};a.push(b)}};C.procedures_callreturn={g:function(){this.p=G.tp;this.j(290);N(N(N(Q(this),G.sp),"","NAME"),G.Ri,"WITH");K(this,!0);this.A=[];this.Gc=this.ld=null},Ld:C.procedures_callnoreturn.Ld,Zh:C.procedures_callnoreturn.Zh,be:C.procedures_callnoreturn.be,Ia:C.procedures_callnoreturn.Ia,Oa:C.procedures_callnoreturn.Oa,Hb:C.procedures_callnoreturn.Hb,ub:C.procedures_callnoreturn.ub};
C.procedures_ifreturn={g:function(){this.p="http://c2.com/cgi/wiki?GuardClause";this.j(290);N(P(this,"CONDITION").v("Boolean"),G.Eg);N(P(this,"VALUE"),G.ke);Sg(this,!0);L(this,!0);M(this,!0);this.i(G.Dp);this.zc=!0},Ia:function(){var a=document.createElement("mutation");a.setAttribute("value",Number(this.zc));return a},Oa:function(a){this.zc=1==a.getAttribute("value");this.zc||(R(this,"VALUE"),N(Q(this,"VALUE"),G.ke))},onchange:function(){if(this.t){var a=!1,b=this;do{if("procedures_defnoreturn"==
b.type||"procedures_defreturn"==b.type){a=!0;break}b=Wi(b)}while(b);a?("procedures_defnoreturn"==b.type&&this.zc?(R(this,"VALUE"),N(Q(this,"VALUE"),G.ke),this.zc=!1):"procedures_defreturn"!=b.type||this.zc||(R(this,"VALUE"),N(P(this,"VALUE"),G.ke),this.zc=!0),this.sd(null)):this.sd(G.Ep)}}};/*

 Visual Blocks Language

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
T.es={};T.controls_if=function(a){for(var b=0,c=S(a,"IF"+b,T.S)||"false",d=hl(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.Ya;b++)c=S(a,"IF"+b,T.S)||"false",d=hl(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.vb&&(d=hl(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};T.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[O(a,"OP")],c="=="==b||"!="==b?T.Ni:T.np,d=S(a,"A",c)||"0";a=S(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
T.logic_operation=function(a){var b="AND"==O(a,"OP")?"&&":"||",c="&&"==b?T.kp:T.lp,d=S(a,"A",c);a=S(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};T.logic_negate=function(a){var b=T.kf;return["!"+(S(a,"BOOL",b)||"true"),b]};T.logic_boolean=function(a){return["TRUE"==O(a,"BOOL")?"true":"false",T.Sb]};T.logic_null=function(){return["null",T.Sb]};
T.logic_ternary=function(a){var b=S(a,"IF",T.hf)||"false",c=S(a,"THEN",T.hf)||"null";a=S(a,"ELSE",T.hf)||"null";return[b+" ? "+c+" : "+a,T.hf]};/*

 Visual Blocks Language

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
T.As={};T.procedures_defreturn=function(a){var b=T.da.getName(O(a,"NAME"),"PROCEDURE"),c=hl(a,"STACK");T.zd&&(c=fl(T.zd.replace(/%1/g,"'"+a.id+"'"),T.he)+c);T.ef&&(c=T.ef.replace(/%1/g,"'"+a.id+"'")+c);var d=S(a,"RETURN",T.S)||"";d&&(d="  return "+d+";\n");for(var e=[],h=0;h<a.A.length;h++)e[h]=T.da.getName(a.A[h],"VARIABLE");c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=T.bi(a,c);T.Hd[b]=c;return null};T.procedures_defnoreturn=T.procedures_defreturn;
T.procedures_callreturn=function(a){for(var b=T.da.getName(O(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=S(a,"ARG"+d,T.pa)||"null";return[b+"("+c.join(", ")+")",T.P]};T.procedures_callnoreturn=function(a){for(var b=T.da.getName(O(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=S(a,"ARG"+d,T.pa)||"null";return b+"("+c.join(", ")+");\n"};
T.procedures_ifreturn=function(a){var b="if ("+(S(a,"CONDITION",T.S)||"false")+") {\n";a.zc?(a=S(a,"VALUE",T.S)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};/*

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
C.es={};
C.controls_if={g:function(){this.p=G.Ql;this.j(210);N(P(this,"IF0").v("Boolean"),G.Eg);N($i(this,3,"DO0"),G.Fg);L(this,!0);M(this,!0);this.$d(new Qh(["controls_if_elseif","controls_if_else"]));var a=this;this.i(function(){if(a.Ya||a.vb){if(!a.Ya&&a.vb)return G.Ul;if(a.Ya&&!a.vb)return G.Vl;if(a.Ya&&a.vb)return G.Wl}else return G.Tl;return""});this.vb=this.Ya=0},Ia:function(){if(!this.Ya&&!this.vb)return null;var a=document.createElement("mutation");this.Ya&&a.setAttribute("elseif",this.Ya);this.vb&&
a.setAttribute("else",1);return a},Oa:function(a){this.Ya=parseInt(a.getAttribute("elseif"),10);this.vb=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.Ya;a++)N(P(this,"IF"+a).v("Boolean"),G.Dg),N($i(this,3,"DO"+a),G.Fg);this.vb&&N($i(this,3,"ELSE"),G.Cg)},Gd:function(a){var b=hc(a,"controls_if_if");b.ra();for(var c=I(b,"STACK").s,d=1;d<=this.Ya;d++){var e=hc(a,"controls_if_elseif");e.ra();Wg(c,e.K);c=e.C}this.vb&&(a=hc(a,"controls_if_else"),a.ra(),Wg(c,a.K));return b},Dd:function(a){this.vb&&
R(this,"ELSE");this.vb=0;for(var b=this.Ya;0<b;b--)R(this,"IF"+b),R(this,"DO"+b);this.Ya=0;for(a=bj(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.Ya++;var b=N(P(this,"IF"+this.Ya).v("Boolean"),G.Dg),c=$i(this,3,"DO"+this.Ya);N(c,G.Fg);a.fe&&Wg(b.s,a.fe);a.pb&&Wg(c.s,a.pb);break;case "controls_if_else":this.vb++;b=$i(this,3,"ELSE");N(b,G.Cg);a.pb&&Wg(b.s,a.pb);break;default:throw"Unknown block type.";}a=a.C&&H(a.C)}},Pe:function(a){a=bj(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=
I(this,"IF"+b),d=I(this,"DO"+b);a.fe=c&&c.s.w;a.pb=d&&d.s.w;b++;break;case "controls_if_else":d=I(this,"ELSE");a.pb=d&&d.s.w;break;default:throw"Unknown block type.";}a=a.C&&H(a.C)}}};C.controls_if_if={g:function(){this.j(210);N(Q(this),G.Rl);$i(this,3,"STACK");this.i(G.Sl);this.contextMenu=!1}};C.controls_if_elseif={g:function(){this.j(210);N(Q(this),G.Ml);L(this,!0);M(this,!0);this.i(G.Nl);this.contextMenu=!1}};
C.controls_if_else={g:function(){this.j(210);N(Q(this),G.Ol);L(this,!0);this.i(G.Pl);this.contextMenu=!1}};
C.logic_compare={g:function(){var a=q?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.p=G.bn;this.j(210);K(this,!0,"Boolean");P(this,"A");N(P(this,"B"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{EQ:G.cn,NEQ:G.jn,LT:G.gn,LTE:G.hn,GT:G.dn,GTE:G.fn}[a]})}};
C.logic_operation={g:function(){var a=[[G.qn,"AND"],[G.sn,"OR"]];this.p=G.rn;this.j(210);K(this,!0,"Boolean");P(this,"A").v("Boolean");N(P(this,"B").v("Boolean"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{AND:G.tn,OR:G.un}[a]})}};C.logic_negate={g:function(){this.p=G.kn;this.j(210);K(this,!0,"Boolean");this.sa(G.ln,["BOOL","Boolean",1],1);this.i(G.mn)}};
C.logic_boolean={g:function(){var a=[[G.an,"TRUE"],[G.Ym,"FALSE"]];this.p=G.Zm;this.j(210);K(this,!0,"Boolean");N(Q(this),new F(a),"BOOL");this.i(G.$m)}};C.logic_null={g:function(){this.p=G.on;this.j(210);K(this,!0);N(Q(this),G.nn);this.i(G.pn)}};C.logic_ternary={g:function(){this.p=G.wn;this.j(210);N(P(this,"IF").v("Boolean"),G.vn);N(P(this,"THEN"),G.yn);N(P(this,"ELSE"),G.xn);K(this,!0);this.i(G.zn)}};/*

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
C.cs={};C.lists_create_empty={g:function(){this.p=G.qm;this.j(260);K(this,!0,"Array");N(Q(this),G.Ei);this.i(G.rm)}};
C.lists_create_with={g:function(){this.j(260);this.ha=3;this.fc();K(this,!0,"Array");this.$d(new Qh(["lists_create_with_item"]));this.i(G.xm)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ha);return a},Oa:function(a){this.ha=parseInt(a.getAttribute("items"),10);this.fc()},Gd:function(a){var b=hc(a,"lists_create_with_container");b.ra();for(var c=I(b,"STACK").s,d=0;d<this.ha;d++){var e=hc(a,"lists_create_with_item");e.ra();Wg(c,e.K);c=e.C}return b},Dd:function(a){a=
bj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.fe,a=a.C&&H(a.C),c++;this.ha=c;this.fc();for(c=0;c<this.ha;c++)b[c]&&Wg(I(this,"ADD"+c).s,b[c])},Pe:function(a){a=bj(a,"STACK");for(var b=0;a;){var c=I(this,"ADD"+b);a.fe=c&&c.s.w;b++;a=a.C&&H(a.C)}},fc:function(){if(I(this,"EMPTY"))R(this,"EMPTY");else for(var a=0;I(this,"ADD"+a);)R(this,"ADD"+a),a++;if(0==this.ha)N(Q(this,"EMPTY"),G.Ei);else for(a=0;a<this.ha;a++){var b=P(this,"ADD"+a);0==a&&N(b,G.um)}}};
C.lists_create_with_container={g:function(){this.j(260);N(Q(this),G.sm);$i(this,3,"STACK");this.i(G.tm);this.contextMenu=!1}};C.lists_create_with_item={g:function(){this.j(260);N(Q(this),G.vm);L(this,!0);M(this,!0);this.i(G.wm);this.contextMenu=!1}};C.lists_repeat={g:function(){this.p=G.Pm;this.j(260);K(this,!0,"Array");this.sa(G.Qm,["ITEM",null,1],["NUM","Number",1],1);this.i(G.Rm)}};
C.lists_length={g:function(){this.p=G.Mm;this.j(260);this.sa(G.Nm,["VALUE",["Array","String"],1],1);K(this,!0,"Number");this.i(G.Om)}};C.lists_isEmpty={g:function(){this.p=G.Km;this.j(260);this.sa(G.Lm,["VALUE",["Array","String"],1],1);Sg(this,!0);K(this,!0,"Boolean");this.i(G.Xm)}};C.lists_indexOf={g:function(){var a=[[G.Gm,"FIRST"],[G.Im,"LAST"]];this.p=G.Ki;this.j(260);K(this,!0,"Number");N(P(this,"VALUE").v("Array"),G.Hm);N(P(this,"FIND"),new F(a),"END");Sg(this,!0);this.i(G.Jm)}};
C.lists_getIndex={g:function(){var a=[[G.ym,"GET"],[G.zm,"GET_REMOVE"],[G.Cm,"REMOVE"]];this.le=[[G.Hi,"FROM_START"],[G.Gi,"FROM_END"],[G.Fi,"FIRST"],[G.Ii,"LAST"],[G.Ji,"RANDOM"]];this.p=G.Am;this.j(260);a=new F(a,function(a){this.h.Wk("REMOVE"==a)});N(P(this,"VALUE").v("Array"),G.Bm);N(N(Q(this),a,"MODE"),"","SPACE");Q(this,"AT");G.Kg&&N(Q(this,"TAIL"),G.Kg);Sg(this,!0);K(this,!0);this.ca(!0);var b=this;this.i(function(){var a=O(b,"MODE")+"_"+O(b,"WHERE");return G["LISTS_GET_INDEX_TOOLTIP_"+a]})},
Ia:function(){var a=document.createElement("mutation");a.setAttribute("statement",!this.G);a.setAttribute("at",1==I(this,"AT").type);return a},Oa:function(a){var b="true"==a.getAttribute("statement");this.Wk(b);a="false"!=a.getAttribute("at");this.ca(a)},Wk:function(a){a!=!this.G&&(Ui(this,!0,!0),a?(K(this,!1),L(this,!0),M(this,!0)):(L(this,!1),M(this,!1),K(this,!0)))},ca:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.Tb&&N(Q(this,"ORDINAL"),G.Tb)):Q(this,"AT");var b=
new F(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});N(I(this,"AT"),b,"WHERE");G.Kg&&aj(this,"TAIL",null)}};
C.lists_setIndex={g:function(){var a=[[G.Wm,"SET"],[G.Vm,"INSERT"]];this.le=[[G.Hi,"FROM_START"],[G.Gi,"FROM_END"],[G.Fi,"FIRST"],[G.Ii,"LAST"],[G.Ji,"RANDOM"]];this.p=G.Sm;this.j(260);N(P(this,"LIST").v("Array"),G.Tm);N(N(Q(this),new F(a),"MODE"),"","SPACE");Q(this,"AT");N(P(this,"TO"),G.Um);Sg(this,!0);L(this,!0);M(this,!0);this.i(G.vt);this.ca(!0);var b=this;this.i(function(){var a=O(b,"MODE")+"_"+O(b,"WHERE");return G["LISTS_SET_INDEX_TOOLTIP_"+a]})},Ia:function(){var a=document.createElement("mutation");
a.setAttribute("at",1==I(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ca(a)},ca:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.Tb&&N(Q(this,"ORDINAL"),G.Tb)):Q(this,"AT");var b=new F(this.le,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});aj(this,"AT","TO");I(this,"ORDINAL")&&aj(this,"ORDINAL","TO");N(I(this,"AT"),b,"WHERE")}};
C.lists_getSublist={g:function(){this.p=G.Dm;this.j(260);N(P(this,"LIST").v("Array"),G.Em);Q(this,"AT1");Q(this,"AT2");G.Lg&&N(Q(this,"TAIL"),G.Lg);Sg(this,!0);K(this,!0,"Array");this.ca(1,!0);this.ca(2,!0);this.i(G.Fm)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==I(this,"AT1").type);a.setAttribute("at2",1==I(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ca(1,b);this.ca(2,a)},ca:function(a,b){R(this,
"AT"+a);R(this,"ORDINAL"+a,!0);b?(P(this,"AT"+a).v("Number"),G.Tb&&N(Q(this,"ORDINAL"+a),G.Tb)):Q(this,"AT"+a);var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ca(a,e);ic(h,c,"WHERE"+a);return null}});N(I(this,"AT"+a),c,"WHERE"+a);1==a&&(aj(this,"AT1","AT2"),I(this,"ORDINAL1")&&aj(this,"ORDINAL1","AT2"));G.Lg&&aj(this,"TAIL",null)}};/*

 Visual Blocks Language

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
T.fs={};T.controls_repeat=function(a){var b=Number(O(a,"TIMES")),c=hl(a,"DO"),c=il(c,a.id);a=Ha(T.da,"count");return"for (var "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};T.controls_repeat_ext=function(a){var b=S(a,"TIMES",T.Qc)||"0",c=hl(a,"DO"),c=il(c,a.id);a="";var d=Ha(T.da,"count"),e=b;b.match(/^\w+$/)||xk(b)||(e=Ha(T.da,"repeat_end"),a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
T.controls_whileUntil=function(a){var b="UNTIL"==O(a,"MODE"),c=S(a,"BOOL",b?T.kf:T.S)||"false",d=hl(a,"DO"),d=il(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
T.controls_for=function(a){var b=T.da.getName(O(a,"VAR"),"VARIABLE"),c=S(a,"FROM",T.Qc)||"0",d=S(a,"TO",T.Qc)||"0",e=S(a,"BY",T.Qc)||"1",h=hl(a,"DO"),h=il(h,a.id);if(xk(c)&&xk(d)&&xk(e)){var k=parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(k?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(k?"++":"--"):a+((k?" += ":" -= ")+b))+(") {\n"+h+"}\n")}else a="",k=c,c.match(/^\w+$/)||xk(c)||(k=Ha(T.da,b+"_start"),a+="var "+k+" = "+c+";\n"),c=d,d.match(/^\w+$/)||xk(d)||(c=Ha(T.da,b+"_end"),
a+="var "+c+" = "+d+";\n"),d=Ha(T.da,b+"_inc"),a+="var "+d+" = ",a=xk(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+k+" > "+c+") {\n",a+=T.he+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+k+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+h+"}\n";return a};
T.controls_forEach=function(a){var b=T.da.getName(O(a,"VAR"),"VARIABLE"),c=S(a,"LIST",T.Qc)||"[]",d=hl(a,"DO"),d=il(d,a.id);a=Ha(T.da,b+"_index");d=T.he+b+" = "+c+"["+a+"];\n"+d;return"for (var "+a+" in "+c+") {\n"+d+"}\n"};T.controls_flow_statements=function(a){switch(O(a,"FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};/*

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
C.gs={};C.math_number={g:function(){this.p=G.fo;this.j(230);N(Q(this),new Zk("0",cl),"NUM");K(this,!0,"Number");this.i(G.ho)}};C.math_arithmetic={g:function(){var a=[[G.Bn,"ADD"],[G.Vo,"MINUS"],[G.eo,"MULTIPLY"],[G.Sn,"DIVIDE"],[G.zo,"POWER"]];this.p=G.Cn;this.j(230);K(this,!0,"Number");P(this,"A").v("Number");N(P(this,"B").v("Number"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{ADD:G.Dn,MINUS:G.Fn,MULTIPLY:G.Gn,DIVIDE:G.En,POWER:G.Hn}[a]})}};
C.math_single={g:function(){var a=[[G.No,"ROOT"],[G.Mo,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];this.p=G.Lo;this.j(230);K(this,!0,"Number");this.sa("%1 %2",["OP",new F(a)],["NUM","Number",1],1);var b=this;this.i(function(){var a=O(b,"OP");return{ROOT:G.Uo,ABS:G.Oo,NEG:G.So,LN:G.Qo,LOG10:G.Ro,EXP:G.Po,POW10:G.To}[a]})}};
C.math_trig={g:function(){var a=[[G.ap,"SIN"],[G.Zo,"COS"],[G.bp,"TAN"],[G.Xo,"ASIN"],[G.Wo,"ACOS"],[G.Yo,"ATAN"]];this.p=G.$o;this.j(230);K(this,!0,"Number");N(P(this,"NUM").v("Number"),new F(a),"OP");var b=this;this.i(function(){var a=O(b,"OP");return{SIN:G.gp,COS:G.fp,TAN:G.hp,ASIN:G.dp,ACOS:G.cp,ATAN:G.ep}[a]})}};
C.math_constant={g:function(){this.p=G.Nn;this.j(230);K(this,!0,"Number");N(Q(this),new F([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.i(G.On)}};
C.math_number_property={g:function(){var a=[[G.Un,"EVEN"],[G.Wn,"ODD"],[G.Yn,"PRIME"],[G.$n,"WHOLE"],[G.Xn,"POSITIVE"],[G.Vn,"NEGATIVE"],[G.Tn,"DIVISIBLE_BY"]];this.j(230);P(this,"NUMBER_TO_CHECK").v("Number");a=new F(a,function(a){this.h.fc("DIVISIBLE_BY"==a)});N(Q(this),a,"PROPERTY");Sg(this,!0);K(this,!0,"Boolean");this.i(G.Zn)},Ia:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==O(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Oa:function(a){a="true"==a.getAttribute("divisor_input");
this.fc(a)},fc:function(a){var b=I(this,"DIVISOR");a?b||P(this,"DIVISOR").v("Number"):b&&R(this,"DIVISOR")}};C.math_change={g:function(){this.p=G.In;this.j(230);this.sa(G.Kn+" %1 "+G.Jn+" %2",["VAR",new dg(G.Ln)],["DELTA","Number",1],1);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.Mn.replace("%1",O(a,"VAR"))})},Zb:function(){return[O(this,"VAR")]},Hb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")}};
C.math_round={g:function(){var a=[[G.Ho,"ROUND"],[G.Jo,"ROUNDUP"],[G.Io,"ROUNDDOWN"]];this.p=G.Go;this.j(230);K(this,!0,"Number");N(P(this,"NUM").v("Number"),new F(a),"OP");this.i(G.Ko)}};
C.math_on_list={g:function(){var a=[[G.qo,"SUM"],[G.mo,"MIN"],[G.ko,"MAX"],[G.jo,"AVERAGE"],[G.lo,"MEDIAN"],[G.no,"MODE"],[G.po,"STD_DEV"],[G.oo,"RANDOM"]],b=this;this.p=G.io;this.j(230);K(this,!0,"Number");a=new F(a,function(a){"MODE"==a?b.G.v("Array"):b.G.v("Number")});N(P(this,"LIST").v("Array"),a,"OP");this.i(function(){var a=O(b,"OP");return{SUM:G.yo,MIN:G.uo,MAX:G.so,AVERAGE:G.ro,MEDIAN:G.to,MODE:G.vo,STD_DEV:G.xo,RANDOM:G.wo}[a]})}};
C.math_modulo={g:function(){this.p=G.ao;this.j(230);K(this,!0,"Number");this.sa(G.bo,["DIVIDEND","Number",1],["DIVISOR","Number",1],1);Sg(this,!0);this.i(G.co)}};C.math_constrain={g:function(){this.p=G.Pn;this.j(230);K(this,!0,"Number");this.sa(G.Qn,["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);Sg(this,!0);this.i(G.Rn)}};C.math_random_int={g:function(){this.p=G.Do;this.j(230);K(this,!0,"Number");this.sa(G.Eo,["FROM","Number",1],["TO","Number",1],1);Sg(this,!0);this.i(G.Fo)}};
C.math_random_float={g:function(){this.p=G.Ao;this.j(230);K(this,!0,"Number");N(Q(this),G.Bo);this.i(G.Co)}};C.turtle_move_internal={g:function(){this.j(160);N(Q(this),new F([["move forward","moveForward"],["move backward","moveBackward"]]),"DIR");L(this,!0);M(this,!0);this.i(V("Turtle_moveTooltip"))}};T.turtle_move_internal=function(a){return O(a,"DIR")+"(100, 'block_id_"+a.id+"');\n"};
C.turtle_turn_internal={g:function(){var a=[["turn right","turnRight"],["turn left","turnLeft"]];a[0][0]+=" \u21bb";a[1][0]+=" \u21ba";this.j(160);N(N(Q(this),new F(a),"DIR"),new F([["slightly","72"],["some","90"],["a lot","144"]]),"VALUE");L(this,!0);M(this,!0);this.i(V("Turtle_turnTooltip"))}};T.turtle_turn_internal=function(a){var b=O(a,"VALUE");"some"==b&&(b=72);alert(b);return O(a,"DIR")+"("+b+", 'block_id_"+a.id+"');\n"};
C.turtle_width={g:function(){this.j(160);N(P(this,"WIDTH").v("Number"),V("Turtle_setWidth"));L(this,!0);M(this,!0);this.i(V("Turtle_widthTooltip"))}};T.turtle_width=function(a){return"penWidth("+(S(a,"WIDTH",T.S)||"1")+", 'block_id_"+a.id+"');\n"};C.turtle_pen={g:function(){var a=[[V("Turtle_penUp"),"penUp"],[V("Turtle_penDown"),"penDown"]];this.j(160);N(Q(this),new F(a),"PEN");L(this,!0);M(this,!0);this.i(V("Turtle_penTooltip"))}};T.turtle_pen=function(a){return O(a,"PEN")+"('block_id_"+a.id+"');\n"};
C.turtle_colour={g:function(){this.j(20);N(P(this,"COLOUR").v("Colour"),V("Turtle_setColour"));L(this,!0);M(this,!0);this.i(V("Turtle_colourTooltip"))}};T.turtle_colour=function(a){return"penColour("+(S(a,"COLOUR",T.S)||"'#000000'")+", 'block_id_"+a.id+"');\n"};C.turtle_colour_internal={g:function(){this.j(20);N(N(Q(this),V("Turtle_setColour")),new Tk("#ff0000"),"COLOUR");L(this,!0);M(this,!0);this.i(V("Turtle_colourTooltip"))}};
T.turtle_colour_internal=function(a){return"penColour("+("'"+O(a,"COLOUR")+"'")+", 'block_id_"+a.id+"');\n"};C.turtle_visibility={g:function(){var a=[[V("Turtle_hideTurtle"),"hideTurtle"],[V("Turtle_showTurtle"),"showTurtle"]];this.j(160);L(this,!0,null);M(this,!0,null);N(Q(this),new F(a),"VISIBILITY");this.i(V("Turtle_turtleVisibilityTooltip"))}};T.turtle_visibility=function(a){return O(a,"VISIBILITY")+"('block_id_"+a.id+"');\n"};
C.turtle_print={g:function(){this.p=V("Turtle_printHelpUrl");this.j(160);N(P(this,"TEXT"),V("Turtle_print"));L(this,!0);M(this,!0);this.i(V("Turtle_printTooltip"))}};T.turtle_print=function(a){return"print("+String(S(a,"TEXT",T.S)||"''")+", 'block_id_"+a.id+"');\n"};
C.turtle_font={g:function(){var a=[[V("Turtle_fontNormal"),"normal"],[V("Turtle_fontItalic"),"italic"],[V("Turtle_fontBold"),"bold"]];this.p=V("Turtle_fontHelpUrl");this.j(160);N(N(Q(this),V("Turtle_font")),new F([["Arial","Arial"],["Courier New","Courier New"],["Georgia","Georgia"],["Impact","Impact"],["Times New Roman","Times New Roman"],["Trebuchet MS","Trebuchet MS"],["Verdana","Verdana"]]),"FONT");N(N(Q(this),V("Turtle_fontSize")),new Zk("18",dl),"FONTSIZE");N(Q(this),new F(a),"FONTSTYLE");L(this,
!0);M(this,!0);this.i(V("Turtle_fontTooltip"))}};T.turtle_font=function(a){return"font('"+O(a,"FONT")+"',"+Number(O(a,"FONTSIZE"))+",'"+O(a,"FONTSTYLE")+"', 'block_id_"+a.id+"');\n"};C.turtle_repeat_internal={g:function(){this.p=G.Gg;this.j(120);N(N(N(Q(this),G.Bi),new F([["3","3"],["4","4"],["5","5"],["360","360"]]),"TIMES"),G.Ci);N($i(this,3,"DO"),G.Oc);L(this,!0);M(this,!0);this.i(G.Hg)}};T.turtle_repeat_internal=T.controls_repeat;var Ym={Eu:!0};r&&Pb(8);function Zm(a){return a&&a.mr&&a.mr===Ym?a.content:String(a).replace($m,an)}var bn={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function an(a){return bn[a]}var $m=/[\x00\x22\x26\x27\x3c\x3e]/g;function cn(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function dn(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>'}
function en(){var a=dn()+'<table width="100%"><tr class="header"><td><h1>',b;b='<span id="title">'+(sm?'<a href="index.html?lang='+Zm(qm)+'">':'<a href="./?lang='+Zm(qm)+'">')+'<img id="banner" src="index/horizontal-logo-01.png" height="60"  alt="Blockly Games"></a>'+Zm("")+"</span>";return a+b+'</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;background-color:white;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/seaturtle.svg" height=32 width=74 x=-21 y=0 />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/bunny.svg" height=32 width=74 x=92 y=0 /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>'+
(10!=U||sm?"":'<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="https://www.reddit.com/r/BlocklyGames/" target="gallery"><button type="submit" title="Open the gallery of drawings on Reddit."><img src="media/1x1.gif" class="reddit icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to Reddit."><img src="media/1x1.gif" class="camera icon21"> Submit to Gallery</button><canvas id="thumbnail" width="100" height="100" style="display: none"></canvas><form id="t2r_form" action="turtle-reddit" method="POST" target="_blank" style="display: none"><input id="t2r_thumb" type="hidden" name="thumb"><input id="t2r_xml" type="hidden" name="xml"></form></td></tr>')+
('<xml id="toolbox" style="display: none"><category name="Pen"><block type="turtle_move_internal"></block><block type="turtle_turn_internal"><field name="VALUE">some</field></block>'+(3<U?'<block type="turtle_pen"></block>':"")+'</category><category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category></xml>')+'<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+cn()+"</div>")+(4>U?'<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can solve the challenge with fewer blocks. Try using "Loops." '+(3>U?"Draw the shape with just three blocks.":"Draw the star with just four blocks.")+"</div>"+cn()+"</div>":"")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+(1==U?'Help the robot draw a square!<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">':
"")+(2==U?"Help the robot draw a hexagon.":"")+"</div>"+cn()+"</div>"+(1==U?'<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>':"")};var ym="turtle";W.Nh=function(){window.location=window.location.protocol+"//"+window.location.host+"/movie?lang="+qm+"&level="+(U+2)};var fn=[],gn=0,hn=null,jn=!0,kn=!1;
function ln(){function a(){c.style.top=Math.max(10,d.offsetTop-window.pageYOffset)+"px";c.style.left=b?"10px":"420px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=en();W.g();var b=-1!=pm.indexOf(qm),c=document.getElementById("blockly"),d=document.getElementById("visualization");window.addEventListener("scroll",function(){a();lh(window,"resize")});window.addEventListener("resize",a);a();10>U&&(Wk=3,Vk="#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));
var e=document.getElementById("toolbox");ql(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:e,trashcan:!0});jl("moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font");document.getElementById("submitButton")&&zm("submitButton",mn);e=document.getElementById("slider");Am=new Mm(10,35,130,e);W.ds(10==U?'<xml>  <block type="turtle_move" x="70" y="70">    <value name="VALUE">      <block type="math_number">        <field name="NUM">10</field>      </block>    </value>  </block></xml>':
'<xml>  <block type="turtle_move_internal" x="70" y="70">  </block></xml>',!0);Bm=document.getElementById("display").getContext("2d");Cm=document.getElementById("answer").getContext("2d");Y=document.getElementById("scratch").getContext("2d");nn();Hm();Cm.globalCompositeOperation="copy";Cm.drawImage(Y.canvas,0,0);Cm.globalCompositeOperation="source-over";nn();zm("runButton",on);zm("resetButton",pn);Cl(["turtle/win.mp3","turtle/win.ogg"],"win");setTimeout(W.Vr,1);setTimeout(W.Wr,1);zm("helpButton",
qn);2>location.hash.length&&!wm(U)&&(setTimeout(qn,1E3),9==U&&setTimeout(X.ej,3E5))}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){W.Xr(dn()+'<div id="blockly"></div>')}):window.addEventListener("load",ln);function qn(){var a=document.getElementById("help"),b=document.getElementById("helpButton");X.Kc(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},rn);X.oi()}function rn(){X.ri();1==U&&(sn(),setTimeout(tn,5E3))}
function tn(){if(!un&&!X.Ac){var a=document.getElementById("helpToolbox"),b=document.getElementById(":0");X.Kc(a,b,!0,!1,{width:"25%",left:"525px",top:"3.3em"},null)}}var un=!1;function sn(){B.Ta.V.J()&&(un=!0,X.mb(!1));un||setTimeout(sn,100)}function nn(){Em=Dm=200;Fm=0;jn=Gm=!0;Y.canvas.width=Y.canvas.width;Y.strokeStyle="#ec8fa1";Y.fillStyle="#ffffff";Y.lineWidth=5;Y.lineCap="round";Y.font="normal 18pt Arial";vn();for(var a=0;a<fn.length;a++)window.clearTimeout(fn[a]);fn.length=0;hn=null}
function vn(){Bm.beginPath();Bm.rect(0,0,Bm.canvas.width,Bm.canvas.height);Bm.fillStyle="#444444";Bm.fill();Bm.globalCompositeOperation="source-over";Bm.globalAlpha=.2;Bm.drawImage(Cm.canvas,0,0);Bm.globalAlpha=1;Bm.globalCompositeOperation="source-over";Bm.drawImage(Y.canvas,0,0);if(jn){Bm.strokeStyle=Y.strokeStyle;Bm.fillStyle=Y.fillStyle;var a=Y.lineWidth/2+10,b=2*a,c=new Image;c.onload=function(){Bm.drawImage(c,Dm-b,Em-a,50,50)};c.src="./turtle/robot.svg";var d=2*Math.PI*Fm/360,e=Dm+(a+10)*Math.sin(d),
h=Em-(a+10)*Math.cos(d),d=d-.3,k=Dm+(a+4)*Math.sin(d),m=Em-(a+4)*Math.cos(d),d=d+.15,p=Dm+(a+6)*Math.sin(d),y=Em-(a+6)*Math.cos(d),d=d+.3,x=Dm+(a+6)*Math.sin(d),E=Em-(a+6)*Math.cos(d),d=d+.15,A=Dm+(a+4)*Math.sin(d),d=Em-(a+4)*Math.cos(d);Bm.beginPath();Bm.moveTo(e,h);Bm.lineTo(k,m);Bm.bezierCurveTo(p,y,x,E,A,d);Bm.closePath();Bm.fill()}}
function on(a){if(!W.Wb(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";document.getElementById("spinner").style.visibility="visible";Hh(B,!0);wn()}}
function pn(a){W.Wb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",document.getElementById("spinner").style.visibility="hidden",Hh(B,!1),nn(),kn=!1)}
function xn(a,b){var c;c=function(a,b){Z(a.valueOf(),b.toString())};a.setProperty(b,"moveForward",a.createNativeFunction(c));c=function(a,b){Z(-a.valueOf(),b.toString())};a.setProperty(b,"moveBackward",a.createNativeFunction(c));c=function(a,b){Im(a.valueOf(),b.toString())};a.setProperty(b,"turnRight",a.createNativeFunction(c));c=function(a,b){Im(-a.valueOf(),b.toString())};a.setProperty(b,"turnLeft",a.createNativeFunction(c));c=function(a){Km(!1,a.toString())};a.setProperty(b,"penUp",a.createNativeFunction(c));
c=function(a){Km(!0,a.toString())};a.setProperty(b,"penDown",a.createNativeFunction(c));c=function(a,b){var c=b.toString();Y.lineWidth=a.valueOf();yn(c)};a.setProperty(b,"penWidth",a.createNativeFunction(c));c=function(a,b){Jm(a.toString(),b.toString())};a.setProperty(b,"penColour",a.createNativeFunction(c));c=function(a){a=a.toString();jn=!1;yn(a)};a.setProperty(b,"hideTurtle",a.createNativeFunction(c));c=function(a){a=a.toString();jn=!0;yn(a)};a.setProperty(b,"showTurtle",a.createNativeFunction(c));
c=function(a,b){var c=a.toString(),k=b.toString();Y.save();Y.translate(Dm,Em);Y.rotate(2*Math.PI*(Fm-90)/360);Y.fillText(c,0,0);Y.restore();yn(k)};a.setProperty(b,"print",a.createNativeFunction(c));c=function(a,b,c,k){k=k.toString();Y.font=c.toString()+" "+b.valueOf()+"pt "+a.toString();yn(k)};a.setProperty(b,"font",a.createNativeFunction(c))}
function wn(){if("Interpreter"in window){nn();var a=T,b=B,c=[];a.g(b);for(var b=Ka(b,!0),d=0,e;e=b[d];d++){var h=gl(a,e);ea(h)&&(h=h[0]);h&&(e.G&&a.Hk&&(h=a.Hk(h)),c.push(h))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");c=c.replace(/[ \t]+\n/g,"\n");hn=new Interpreter(c,xn);fn.push(setTimeout(zn,100))}else setTimeout(wn,250)}
function zn(){gn=fn.length=0;var a;do{try{a=hn.step()}catch(b){alert(b),a=!1}a&&gn&&(a=!1,fn.push(setTimeout(zn,gn)))}while(a);if(!gn){document.getElementById("spinner").style.visibility="hidden";Ih(null);a=Y.getImageData(0,0,400,400);for(var c=Cm.getImageData(0,0,400,400),d=Math.min(a.data.length,c.data.length),e=0,h=3;h<d;h+=4)64<Math.abs(a.data[h]-c.data[h])&&e++;Lm(e)?(W.Hs(),3>U&&(lk("win",.5),X.kr())):Jm("#ff0000");kn=!0}}
function yn(a){vn();a&&(W.zh(a),a=1E3*Math.pow(1-Am.Fa(),2),gn=Math.max(1,a))}function Z(a,b){Gm&&(Y.beginPath(),Y.moveTo(Dm,Em));if(a){Dm+=a*Math.sin(2*Math.PI*Fm/360);Em-=a*Math.cos(2*Math.PI*Fm/360);var c=0}else c=.1;Gm&&(Y.lineTo(Dm,Em+c),Y.stroke());yn(b)}function Im(a,b){Fm+=a;Fm%=360;0>Fm&&(Fm+=360);yn(b)}function Km(a,b){Gm=a;yn(b)}function Jm(a,b){Y.strokeStyle=a;Y.fillStyle=a;yn(b)}
function mn(){if(kn){var a=document.getElementById("thumbnail"),b=a.getContext("2d");b.globalCompositeOperation="copy";b.drawImage(Bm.canvas,0,0,100,100);a=a.toDataURL("image/png");document.getElementById("t2r_thumb").value=a;a=Kg(B);a=Ng(a);document.getElementById("t2r_xml").value=a;document.getElementById("t2r_form").submit()}else alert(V("Turtle_submitDisabled"))};
