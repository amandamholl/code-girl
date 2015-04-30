// Automatically generated file.  Do not edit!
'use strict';var f,g=this;function aa(a){a=a.split(".");for(var b=g,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Yb=function(){return a.gk?a.gk:a.gk=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function l(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a){return a[ka]||(a[ka]=++la)}var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;
function ma(a,b,c){return a.call.apply(a.bind,arguments)}function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function oa(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var qa=Date.now||function(){return+new Date};function n(a,b){function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ku=function(a,c,h){for(var k=Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-2]=arguments[m];return b.prototype[c].apply(a,k)}};/*

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
var ra={},q,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa;function Ga(a){this.Fk=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Fk[a[b]]=!0}this.reset()}Ga.prototype.reset=function(){this.ih=Object.create(null);this.Mj=Object.create(null)};Ga.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.ih)return this.ih[c];var d=Ha(this,a);return this.ih[c]=d};
function Ha(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.Mj[c+d]||c+d in a.Fk;)d=d?d+1:2;c+=d;a.Mj[c]=!0;return c}function Ia(a,b){return a.toLowerCase()==b.toLowerCase()};/*

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
function Ja(){this.ee=[]}f=Ja.prototype;f.B=!1;f.Mh=Infinity;f.m=function(){this.clear()};f.pe=function(a){this.ee.push(a);this.wb()};f.og=function(a){for(var b=!1,c,d=0;c=this.ee[d];d++)if(c==a){this.ee.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.wb()};function Ka(a,b){var c=[].concat(a.ee);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);q&&(d*=-1);c.sort(function(a,b){var c=a.ga(),m=b.ga();return c.y+d*c.x-(m.y+d*m.x)})}return c}
f.cb=function(){for(var a=Ka(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].ad());return a};f.clear=function(){for(;this.ee.length;)this.ee[0].m()};f.Kf=function(){return 0};function La(a,b){for(var c=a.cb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ma(a){return Infinity==a.Mh?Infinity:a.Mh-a.cb().length}f.wb=function(){};function Na(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Oa(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function Qa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ra(a){if(!Sa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ta,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ua,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Va,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Wa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Xa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ya,"&#0;"));return a}var Ta=/&/g,Ua=/</g,Va=/>/g,Wa=/"/g,Xa=/'/g,Ya=/\x00/g,Sa=/[\x00&<>"']/;
function Za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=g.document.createElement("div");return a.replace($a,function(a,e){var h=b[a];if(h)return h;if("#"==e.charAt(0)){var k=Number("0"+e.substr(1));isNaN(k)||(h=String.fromCharCode(k))}h||(c.innerHTML=a+" ",h=c.firstChild.nodeValue.slice(0,-1));return b[a]=h})}
function ab(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var $a=/&([^;\s<&]+);?/g;function bb(a,b){return a<b?-1:a>b?1:0}function cb(){return"background-color".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function db(a){var b=l(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var eb;a:{var fb=g.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function hb(a){return-1!=eb.indexOf(a)};function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<kb.length;h++)c=kb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var nb;function ob(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ob);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}n(ob,Error);ob.prototype.name="CustomError";function pb(a,b){b.unshift(a);ob.call(this,Na.apply(null,b));b.shift()}n(pb,ob);pb.prototype.name="AssertionError";function qb(a,b){throw new pb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var rb=Array.prototype,sb=rb.indexOf?function(a,b,c){return rb.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tb=rb.forEach?function(a,b,c){rb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)},ub=rb.filter?function(a,b,c){return rb.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=
0,k=l(a)?a.split(""):a,m=0;m<d;m++)if(m in k){var p=k[m];b.call(c,p,m,a)&&(e[h++]=p)}return e},vb=rb.map?function(a,b,c){return rb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=l(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));return e},wb=rb.every?function(a,b,c){return rb.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;return!0};function xb(a,b){return 0<=sb(a,b)}
function yb(a,b){var c=sb(a,b),d;(d=0<=c)&&rb.splice.call(a,c,1);return d}function zb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}}function Bb(a,b,c,d){rb.splice.apply(a,Cb(arguments,1))}function Cb(a,b,c){return 2>=arguments.length?rb.slice.call(a,b):rb.slice.call(a,b,c)};var Db=hb("Opera")||hb("OPR"),r=hb("Trident")||hb("MSIE"),Eb=hb("Gecko")&&-1==eb.toLowerCase().indexOf("webkit")&&!(hb("Trident")||hb("MSIE")),t=-1!=eb.toLowerCase().indexOf("webkit"),Fb=t&&hb("Mobile"),Gb=hb("Macintosh"),Hb,Ib=g.navigator||null;Hb=!!Ib&&-1!=(Ib.appVersion||"").indexOf("X11");var Jb=hb("Android"),Kb=hb("iPhone")&&!hb("iPod")&&!hb("iPad"),Lb=hb("iPad");function Mb(){var a=g.document;return a?a.documentMode:void 0}
var Nb=function(){var a="",b;if(Db&&g.opera)return a=g.opera.version,ha(a)?a():a;Eb?b=/rv\:([^\);]+)(\)|;)/:r?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:t&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(eb))?a[1]:"");return r&&(b=Mb(),b>parseFloat(a))?String(b):a}(),Ob={};
function Pb(a){var b;if(!(b=Ob[a])){b=0;for(var c=Pa(String(Nb)).split("."),d=Pa(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||"",m=d[h]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var x=p.exec(k)||["","",""],E=y.exec(m)||["","",""];if(0==x[0].length&&0==E[0].length)break;b=bb(0==x[1].length?0:parseInt(x[1],10),0==E[1].length?0:parseInt(E[1],10))||bb(0==x[2].length,0==E[2].length)||bb(x[2],E[2])}while(0==b)}b=Ob[a]=0<=b}return b}
var Qb=g.document,Rb=Qb&&r?Mb()||("CSS1Compat"==Qb.compatMode?parseInt(Nb,10):5):void 0;function Sb(a,b){this.width=a;this.height=b}f=Sb.prototype;f.clone=function(){return new Sb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.hk=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
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
function Tb(a){this.Aa=new Sb(0,25);this.ia(a)}f=Tb.prototype;f.h=null;f.oa=!0;f.clone=function(){qb("There should never be an instance of Field, only its derived classes.")};f.xd=!0;f.g=function(a){this.h||(this.h=a,this.la=u("g",{},null),this.Cb=u("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.la),this.Ja=u("text",{"class":"blocklyText"},this.la),this.qc(),a.W().appendChild(this.la),this.Nh=v(this.la,"mouseup",this,this.Rh),Ub(this))};
f.m=function(){this.Nh&&(w(this.Nh),this.Nh=null);this.h=null;Vb(this.la);this.Cb=this.Ja=this.la=null};f.qc=function(){this.xd&&(this.h.uc&&!z?(Wb(this.la,"blocklyEditableText"),Xb(this.la,"blocklyNoNEditableText"),this.la.style.cursor=this.ef):(Wb(this.la,"blocklyNonEditableText"),Xb(this.la,"blocklyEditableText"),this.la.style.cursor=""))};f.J=function(){return this.oa};f.O=function(a){if(this.oa!=a){this.oa=a;var b=this.W();b&&(b.style.display=a?"block":"none",this.$d())}};f.W=function(){return this.la};
f.$d=function(){if(this.oa){try{var a=this.Ja.getComputedTextLength()}catch(b){a=8*this.Ja.textContent.length}this.Cb&&this.Cb.setAttribute("width",a+10)}else a=0;this.Aa.width=a};f.Od=function(){this.Aa.width||this.$d();return this.Aa};f.fb=function(){return this.Ka};f.ia=function(a){null!==a&&a!==this.Ka&&(this.Ka=a,Ub(this),this.h&&this.h.B&&(this.h.F(),this.h.Ma(),this.h.t.wb()))};
function Ub(a){if(a.Ja){var b=a.Ka;Zb(a.Ja);b=b.replace(/\s/g,"\u00a0");q&&b&&(b+="\u200f");b||(b="\u00a0");a.Ja.appendChild(document.createTextNode(b));a.Aa.width=0}}f.Fa=function(){return this.fb()};f.ja=function(a){this.ia(a)};f.Rh=function(a){if(!Kb&&!Lb||0===a.layerX||0===a.layerY)$b(a)||2!=ac&&this.h.uc&&!z&&this.wg()};f.i=function(){};/*

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
function bc(){for(var a=A.cb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Jf;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(cc);b.sort(cc);return[c,b]}function cc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}function dc(a,b){if(b.ac)return a;for(;!ec(a,b.t,b);){var c=a.match(/^(.*?)(\d+)$/);a=c?c[1]+(parseInt(c[2],10)+1):a+"2"}return a}
function ec(a,b,c){b=b.cb();for(var d=0;d<b.length;d++)if(b[d]!=c){var e=b[d].Jf;if(e&&(e=e.call(b[d]),Ia(e[0],a)))return!1}return!0}function fc(a){a=a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");a=dc(a,this.h);for(var b=this.h.t.cb(),c=0;c<b.length;c++){var d=b[c].$h;d&&d.call(b[c],this.Ka,a)}return a}
function gc(a,b,c,d){function e(e,h){for(var p=0;p<e.length;p++){var y=hc(d,h);ic(y,e[p][0],"NAME");for(var x=[],E=0;E<e[p][1].length;E++)x[E]="ARG"+E;y.ce(e[p][1],x);y.ra();a.push(y);b.push(2*c)}}if(C.procedures_defnoreturn){var h=hc(d,"procedures_defnoreturn");h.ra();a.push(h);b.push(2*c)}C.procedures_defreturn&&(h=hc(d,"procedures_defreturn"),h.ra(),a.push(h),b.push(2*c));C.procedures_ifreturn&&(h=hc(d,"procedures_ifreturn"),h.ra(),a.push(h),b.push(2*c));b.length&&(b[b.length-1]=3*c);h=bc();e(h[0],
"procedures_callnoreturn");e(h[1],"procedures_callreturn")}function jc(a,b){for(var c=[],d=b.cb(),e=0;e<d.length;e++){var h=d[e].Md;h&&(h=h.call(d[e]))&&Ia(h,a)&&c.push(d[e])}return c}function kc(a,b,c,d){a=jc(a,b);for(b=0;b<a.length;b++)a[b].ce(c,d)}function lc(a,b){for(var c=b.cb(),d=0;d<c.length;d++){var e=c[d].Jf;if(e&&(e=e.call(c[d]))&&Ia(e[0],a))return c[d]}return null};function mc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=mc.prototype;f.clone=function(){return new mc(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof mc?(this.x+=a.x,this.y+=a.y):(this.x+=a,ga(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.x*=a;this.y*=c;return this};function nc(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=nc.prototype;f.Kf=function(){return this.right-this.left};f.clone=function(){return new nc(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof nc?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ia(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,ga(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function oc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=oc.prototype;f.clone=function(){return new oc(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof oc?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Od=function(){return new Sb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.top+=a.y):(this.left+=a,ga(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function pc(){this.ti="";this.Qp=qc}pc.prototype.Rd=!0;pc.prototype.Pd=function(){return this.ti};pc.prototype.toString=function(){return"Const{"+this.ti+"}"};function rc(a){if(a instanceof pc&&a.constructor===pc&&a.Qp===qc)return a.ti;qb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var qc={};function sc(){this.Fc="";this.Op=tc}f=sc.prototype;f.Rd=!0;f.Pd=function(){return this.Fc};f.Dh=!0;f.ze=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Fc+"}"};var tc={};var uc=mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function vc(){this.hg="";this.Np=wc}vc.prototype.Rd=!0;var wc={};vc.prototype.Pd=function(){return this.hg};vc.prototype.toString=function(){return"SafeStyle{"+this.hg+"}"};function xc(a){var b=new vc;b.hg=a;return b}var yc=xc("");
function zc(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof pc?d=rc(d):Ac.test(d)||(qb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?xc(b):yc}var Ac=/^[-.%_!# a-zA-Z0-9]+$/;function Bc(){this.Yh="";this.Oq=Cc}f=Bc.prototype;f.Rd=!0;f.Pd=function(){return this.Yh};f.Dh=!0;f.ze=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.Yh+"}"};var Cc={};function Dc(){this.Fc="";this.Mp=Ec;this.Tj=null}f=Dc.prototype;f.Dh=!0;f.ze=function(){return this.Tj};f.Rd=!0;f.Pd=function(){return this.Fc};f.toString=function(){return"SafeHtml{"+this.Fc+"}"};function Fc(a){if(a instanceof Dc&&a.constructor===Dc&&a.Mp===Ec)return a.Fc;qb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function Gc(a){if(a instanceof Dc)return a;var b=null;a.Dh&&(b=a.ze());return Hc(Ra(a.Rd?a.Pd():String(a)),b)}
var Ic=/^[a-zA-Z0-9-]+$/,Jc=mb("action","cite","data","formaction","href","manifest","poster","src"),Kc=mb("embed","iframe","link","object","script","style","template");
function Lc(a,b,c){if(!Ic.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in Kc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var h in b){if(!Ic.test(h))throw Error('Invalid attribute name "'+h+'".');var k=b[h];if(null!=k){var m,p=a;m=h;if(k instanceof pc)k=rc(k);else if("style"==m.toLowerCase()){if(!ia(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof k+" given: "+k);k instanceof vc||
(k=zc(k));p=void 0;k instanceof vc&&k.constructor===vc&&k.Np===wc?p=k.hg:(qb("expected object of type SafeStyle, got '"+k+"'"),p="type_error:SafeStyle");k=p}else{if(/^on/i.test(m))throw Error('Attribute "'+m+'" requires goog.string.Const value, "'+k+'" given.');if(m.toLowerCase()in Jc)if(k instanceof Bc)k instanceof Bc&&k.constructor===Bc&&k.Oq===Cc?k=k.Yh:(qb("expected object of type TrustedResourceUrl, got '"+k+"'"),k="type_error:TrustedResourceUrl");else if(k instanceof sc)k instanceof sc&&k.constructor===
sc&&k.Op===tc?k=k.Fc:(qb("expected object of type SafeUrl, got '"+k+"'"),k="type_error:SafeUrl");else throw Error('Attribute "'+m+'" on tag "'+p+'" requires goog.html.SafeUrl or goog.string.Const value, "'+k+'" given.');}k.Rd&&(k=k.Pd());m=m+'="'+Ra(String(k))+'"';e+=" "+m}}void 0!==c?ea(c)||(c=[c]):c=[];!0===uc[a.toLowerCase()]?e+=">":(d=Mc(c),e+=">"+Fc(d)+"</"+a+">",d=d.ze());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return Hc(e,d)}
function Mc(a){function b(a){ea(a)?tb(a,b):(a=Gc(a),d+=Fc(a),a=a.ze(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";tb(arguments,b);return Hc(d,c)}var Ec={};function Hc(a,b){var c=new Dc;c.Fc=a;c.Tj=b;return c}var Nc=Hc("",0);function Oc(a,b){a.innerHTML=Fc(b)};var Pc=!r||r&&9<=Rb,Qc=!Eb&&!r||r&&r&&9<=Rb||Eb&&Pb("1.9.1"),Rc=r&&!Pb("9");function Sc(a){return a?new Tc(Uc(a)):nb||(nb=new Tc)}
function Vc(a,b){var c=document,c=b||c;if(c.querySelectorAll&&c.querySelector)return c.querySelectorAll("TBODY"+(a?"."+a:""));if(a&&c.getElementsByClassName){for(var c=c.getElementsByClassName(a),d={},e=0,h=0,k;k=c[h];h++)"TBODY"==k.nodeName&&(d[e++]=k);d.length=e;return d}c=c.getElementsByTagName("TBODY");if(a){d={};for(h=e=0;k=c[h];h++){var m=k.className;"function"==typeof m.split&&xb(m.split(/\s+/),a)&&(d[e++]=k)}d.length=e;return d}return c}
function Wc(a,b){ib(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Xc?a.setAttribute(Xc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Sb(a.clientWidth,a.clientHeight)}function D(a,b,c){return Zc(document,arguments)}
function Zc(a,b){var c=b[0],d=b[1];if(!Pc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ra(d.name),'"');if(d.type){c.push(' type="',Ra(d.type),'"');var e={};lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(l(d)?c.className=d:ea(d)?c.className=d.join(" "):Wc(c,d));2<b.length&&$c(a,c,b,2);return c}
function $c(a,b,c,d){function e(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var h=c[d];!fa(h)||ia(h)&&0<h.nodeType?e(h):tb(ad(h)?zb(h):h,e)}}function Zb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function bd(a){var b=A.o;b.parentNode&&b.parentNode.insertBefore(a,b)}function Vb(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function cd(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function Uc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function dd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Zb(a),a.appendChild(Uc(a).createTextNode(String(b)))}var ed={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},fd={IMG:" ",BR:"\n"};function gd(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function hd(a){a=a.tabIndex;return ga(a)&&0<=a&&32768>a}
function id(a){if(Rc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];jd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Rc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}function kd(a){var b=[];jd(a,b,!1);return b.join("")}
function jd(a,b,c){if(!(a.nodeName in ed))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in fd)b.push(fd[a.nodeName]);else for(a=a.firstChild;a;)jd(a,b,c),a=a.nextSibling}function ad(a){if(a&&"number"==typeof a.length){if(ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(ha(a))return"function"==typeof a.item}return!1}function Tc(a){this.Vb=a||g.document||document}f=Tc.prototype;f.eb=Sc;
f.n=function(a){return l(a)?this.Vb.getElementById(a):a};f.H=function(a,b,c){return Zc(this.Vb,arguments)};f.createElement=function(a){return this.Vb.createElement(a)};f.createTextNode=function(a){return this.Vb.createTextNode(String(a))};f.yj=function(a,b,c){var d=this.Vb;c=!!c;for(var e=d.createElement("TABLE"),h=e.appendChild(d.createElement("TBODY")),k=0;k<a;k++){for(var m=d.createElement("TR"),p=0;p<b;p++){var y=d.createElement("TD");c&&dd(y,"\u00a0");m.appendChild(y)}h.appendChild(m)}return e};
f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){$c(Uc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Ek=Zb;f.removeNode=Vb;f.ad=function(a){return Qc&&void 0!=a.children?a.children:ub(a.childNodes,function(a){return 1==a.nodeType})};f.contains=cd;f.kc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!gd(a)||hd(a)):gd(a)&&hd(a))&&r?(a=ha(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};var ld={};function md(a,b){var c=Uc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function nd(a,b){return md(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function od(){var a=document,b=a.body,a=a.documentElement;return new mc(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function pd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}r&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function qd(a){if(r&&!(r&&8<=Rb))return a.offsetParent;var b=Uc(a),c=nd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=nd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function rd(a){var b,c=Uc(a),d=nd(a,"position"),e=Eb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),h=new mc(0,0),k;b=c?Uc(c):document;(k=!r||r&&9<=Rb)||(k="CSS1Compat"==Sc(b).Vb.compatMode);k=k?b.documentElement:b.body;if(a==k)return h;if(a.getBoundingClientRect)b=pd(a),c=Sc(c).Vb,a=t||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=r&&Pb("10")&&c.pageYOffset!=a.scrollTop?new mc(a.scrollLeft,
a.scrollTop):new mc(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),h.x=b.left+a.x,h.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(k),h.x=b.screenX-a.screenX,h.y=b.screenY-a.screenY;else{b=a;do{h.x+=b.offsetLeft;h.y+=b.offsetTop;b!=a&&(h.x+=b.clientLeft||0,h.y+=b.clientTop||0);if(t&&"fixed"==nd(b,"position")){h.x+=c.body.scrollLeft;h.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Db||t&&"absolute"==d)h.y-=c.body.offsetTop;for(b=a;(b=qd(b))&&
b!=c.body&&b!=k;)h.x-=b.scrollLeft,Db&&"TR"==b.tagName||(h.y-=b.scrollTop)}return h}function sd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function td(a){return ud(a)}function ud(a){var b=vd;if("none"!=nd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=h;c.visibility=e;return a}
function vd(a){var b=a.offsetWidth,c=a.offsetHeight,d=t&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=pd(a),new Sb(a.right-a.left,a.bottom-a.top)):new Sb(b,c)}function wd(a){var b=rd(a);a=ud(a);return new oc(b.x,b.y,a.width,a.height)}function xd(a,b){a.style.display=b?"":"none"}var yd=Eb?"MozUserSelect":t?"WebkitUserSelect":null;
function zd(a,b,c){c=c?null:a.getElementsByTagName("*");if(yd){if(b=b?"none":"",a.style[yd]=b,c){a=0;for(var d;d=c[a];a++)d.style[yd]=b}}else if(r||Db)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var Ad={thin:2,medium:4,thick:6};
function Bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in Ad)d=Ad[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function Cd(a){if(r&&!(r&&9<=Rb)){var b=Bd(a,"borderLeft"),c=Bd(a,"borderRight"),d=Bd(a,"borderTop");a=Bd(a,"borderBottom");return new nc(d,c,a,b)}b=md(a,"borderLeftWidth");c=md(a,"borderRightWidth");d=md(a,"borderTopWidth");a=md(a,"borderBottomWidth");return new nc(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var Dd="closure_listenable_"+(1E6*Math.random()|0),Ed=0;function Fd(a,b,c,d,e){this.fd=a;this.ig=null;this.src=b;this.type=c;this.sf=!!d;this.Mf=e;this.key=++Ed;this.Zd=this.qf=!1}function Gd(a){a.Zd=!0;a.fd=null;a.ig=null;a.src=null;a.Mf=null};function Hd(a){this.src=a;this.ib={};this.af=0}Hd.prototype.add=function(a,b,c,d,e){var h=a.toString();a=this.ib[h];a||(a=this.ib[h]=[],this.af++);var k=Id(a,b,d,e);-1<k?(b=a[k],c||(b.qf=!1)):(b=new Fd(b,this.src,h,!!d,e),b.qf=c,a.push(b));return b};Hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.ib))return!1;var e=this.ib[a];b=Id(e,b,c,d);return-1<b?(Gd(e[b]),rb.splice.call(e,b,1),0==e.length&&(delete this.ib[a],this.af--),!0):!1};
function Kd(a,b){var c=b.type;if(!(c in a.ib))return!1;var d=yb(a.ib[c],b);d&&(Gd(b),0==a.ib[c].length&&(delete a.ib[c],a.af--));return d}Hd.prototype.mg=function(a){a=a&&a.toString();var b=0,c;for(c in this.ib)if(!a||c==a){for(var d=this.ib[c],e=0;e<d.length;e++)++b,Gd(d[e]);delete this.ib[c];this.af--}return b};Hd.prototype.Ae=function(a,b,c,d){a=this.ib[a.toString()];var e=-1;a&&(e=Id(a,b,c,d));return-1<e?a[e]:null};
function Id(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.Zd&&h.fd==b&&h.sf==!!c&&h.Mf==d)return e}return-1};var Ld=!r||r&&9<=Rb,Md=!r||r&&9<=Rb,Nd=r&&!Pb("9");!t||Pb("528");Eb&&Pb("1.9b")||r&&Pb("8")||Db&&Pb("9.5")||t&&Pb("528");Eb&&!Pb("8")||r&&Pb("9");var Od="ontouchstart"in g||!!(g.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!g.navigator||!g.navigator.msMaxTouchPoints);function Pd(){0!=Qd&&(Rd[ja(this)]=this);this.te=this.te;this.cg=this.cg}var Qd=0,Rd={};Pd.prototype.te=!1;Pd.prototype.m=function(){if(!this.te&&(this.te=!0,this.Z(),0!=Qd)){var a=ja(this);delete Rd[a]}};Pd.prototype.Z=function(){if(this.cg)for(;this.cg.length;)this.cg.shift()()};function Sd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.kd=!1;this.Hk=!0}Sd.prototype.Z=function(){};Sd.prototype.m=function(){};Sd.prototype.stopPropagation=function(){this.kd=!0};Sd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Hk=!1};function Td(a){Td[" "](a);return a}Td[" "]=ba;function Ud(a,b){Sd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Uh=!1;this.bb=null;a&&this.g(a,b)}n(Ud,Sd);var Vd=[1,4,2];f=Ud.prototype;
f.g=function(a,b){this.bb=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Eb){var e;a:{try{Td(d.nodeName);e=!0;break a}catch(h){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.$j,set:this.Ms},offsetY:{configurable:!0,enumerable:!0,get:this.ak,set:this.Ns}}):(this.offsetX=this.$j(),
this.offsetY=this.ak());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Uh=Gb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Wd(a){return Ld?0==a.bb.button:"click"==a.type?!0:!!(a.bb.button&Vd[0])}f.stopPropagation=function(){Ud.k.stopPropagation.call(this);this.bb.stopPropagation?this.bb.stopPropagation():this.bb.cancelBubble=!0};f.preventDefault=function(){Ud.k.preventDefault.call(this);var a=this.bb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Nd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.Z=function(){};
f.$j=function(){return t||void 0!==this.bb.offsetX?this.bb.offsetX:this.bb.layerX};f.Ms=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.ak=function(){return t||void 0!==this.bb.offsetY?this.bb.offsetY:this.bb.layerY};f.Ns=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Xd="closure_lm_"+(1E6*Math.random()|0),Yd={},Zd=0;function $d(a,b,c,d,e){if(ea(b)){for(var h=0;h<b.length;h++)$d(a,b[h],c,d,e);return null}c=ae(c);if(a&&a[Dd])a=a.N(b,c,d,e);else{if(!b)throw Error("Invalid event type");var h=!!d,k=be(a);k||(a[Xd]=k=new Hd(a));c=k.add(b,c,!1,d,e);c.ig||(d=ce(),c.ig=d,d.src=a,d.fd=c,a.addEventListener?a.addEventListener(b.toString(),d,h):a.attachEvent(de(b.toString()),d),Zd++);a=c}return a}
function ce(){var a=ee,b=Md?function(c){return a.call(b.src,b.fd,c)}:function(c){c=a.call(b.src,b.fd,c);if(!c)return c};return b}function fe(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)fe(a,b[h],c,d,e);else c=ae(c),a&&a[Dd]?a.Kb(b,c,d,e):a&&(a=be(a))&&(b=a.Ae(b,c,!!d,e))&&ge(b)}
function ge(a){if(ga(a)||!a||a.Zd)return!1;var b=a.src;if(b&&b[Dd])return Kd(b.vc,a);var c=a.type,d=a.ig;b.removeEventListener?b.removeEventListener(c,d,a.sf):b.detachEvent&&b.detachEvent(de(c),d);Zd--;(c=be(b))?(Kd(c,a),0==c.af&&(c.src=null,b[Xd]=null)):Gd(a);return!0}function de(a){return a in Yd?Yd[a]:Yd[a]="on"+a}function he(a,b,c,d){var e=!0;if(a=be(a))if(b=a.ib[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.sf==c&&!h.Zd&&(h=ie(h,d),e=e&&!1!==h)}return e}
function ie(a,b){var c=a.fd,d=a.Mf||a.src;a.qf&&ge(a);return c.call(d,b)}
function ee(a,b){if(a.Zd)return!0;if(!Md){var c=b||aa("window.event"),d=new Ud(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var h=a.type,m=c.length-1;!d.kd&&0<=m;m--){d.currentTarget=c[m];var p=he(c[m],h,!0,d),e=e&&p}for(m=0;!d.kd&&m<c.length;m++)d.currentTarget=c[m],p=he(c[m],h,!1,d),e=e&&p}return e}return ie(a,new Ud(b,
this))}function be(a){a=a[Xd];return a instanceof Hd?a:null}var je="__closure_events_fn_"+(1E9*Math.random()>>>0);function ae(a){if(ha(a))return a;a[je]||(a[je]=function(b){return a.handleEvent(b)});return a[je]};function ke(a){Pd.call(this);this.dk=a;this.Wf={}}n(ke,Pd);var le=[];f=ke.prototype;f.N=function(a,b,c,d){ea(b)||(b&&(le[0]=b.toString()),b=le);for(var e=0;e<b.length;e++){var h=$d(a,b[e],c||this.handleEvent,d||!1,this.dk||this);if(!h)break;this.Wf[h.key]=h}return this};
f.Kb=function(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)this.Kb(a,b[h],c,d,e);else c=c||this.handleEvent,e=e||this.dk||this,c=ae(c),d=!!d,b=a&&a[Dd]?a.Ae(b,c,d,e):a?(a=be(a))?a.Ae(b,c,d,e):null:null,b&&(ge(b),delete this.Wf[b.key]);return this};f.mg=function(){ib(this.Wf,ge);this.Wf={}};f.Z=function(){ke.k.Z.call(this);this.mg()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function me(){}ca(me);me.prototype.os=0;function ne(){Pd.call(this);this.vc=new Hd(this);this.$q=this;this.Th=null}n(ne,Pd);ne.prototype[Dd]=!0;f=ne.prototype;f.Hf=function(){return this.Th};f.ug=function(a){this.Th=a};f.addEventListener=function(a,b,c,d){$d(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){fe(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.Hf();if(c)for(b=[];c;c=c.Hf())b.push(c);var c=this.$q,d=a.type||a;if(l(a))a=new Sd(a,c);else if(a instanceof Sd)a.target=a.target||c;else{var e=a;a=new Sd(d,c);lb(a,e)}var e=!0,h;if(b)for(var k=b.length-1;!a.kd&&0<=k;k--)h=a.currentTarget=b[k],e=oe(h,d,!0,a)&&e;a.kd||(h=a.currentTarget=c,e=oe(h,d,!0,a)&&e,a.kd||(e=oe(h,d,!1,a)&&e));if(b)for(k=0;!a.kd&&k<b.length;k++)h=a.currentTarget=b[k],e=oe(h,d,!1,a)&&e;return e};
f.Z=function(){ne.k.Z.call(this);this.vc&&this.vc.mg(void 0);this.Th=null};f.N=function(a,b,c,d){return this.vc.add(String(a),b,!1,c,d)};f.Kb=function(a,b,c,d){return this.vc.remove(String(a),b,c,d)};function oe(a,b,c,d){b=a.vc.ib[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.Zd&&k.sf==c){var m=k.fd,p=k.Mf||k.src;k.qf&&Kd(a.vc,k);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Hk}f.Ae=function(a,b,c,d){return this.vc.Ae(String(a),b,c,d)};function pe(a){ne.call(this);this.xf=a||Sc();this.rg=qe;this.Pf=null;this.Q=!1;this.D=null;this.xc=void 0;this.rc=this.qa=this.$a=this.$f=null;this.at=!1}n(pe,ne);pe.prototype.Vr=me.Yb();var qe=null;
function re(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function se(a){return a.Pf||(a.Pf=":"+(a.Vr.os++).toString(36))}f=pe.prototype;f.n=function(){return this.D};function te(a){a.xc||(a.xc=new ke(a));return a.xc}
f.ab=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.$a&&this.Pf&&ue(this.$a,this.Pf)&&this.$a!=a)throw Error("Unable to set parent component");this.$a=a;pe.k.ug.call(this,a)};f.getParent=function(){return this.$a};f.ug=function(a){if(this.$a&&this.$a!=a)throw Error("Method not supported");pe.k.ug.call(this,a)};f.eb=function(){return this.xf};f.H=function(){this.D=this.xf.createElement("div")};f.F=function(a){this.$d(a)};
f.$d=function(a,b){if(this.Q)throw Error("Component already rendered");this.D||this.H();a?a.insertBefore(this.D,b||null):this.xf.Vb.body.appendChild(this.D);this.$a&&!this.$a.Q||this.ya()};f.ya=function(){this.Q=!0;ve(this,function(a){!a.Q&&a.n()&&a.ya()})};f.Db=function(){ve(this,function(a){a.Q&&a.Db()});this.xc&&this.xc.mg();this.Q=!1};
f.Z=function(){this.Q&&this.Db();this.xc&&(this.xc.m(),delete this.xc);ve(this,function(a){a.m()});!this.at&&this.D&&Vb(this.D);this.$a=this.$f=this.D=this.rc=this.qa=null;pe.k.Z.call(this)};f.oe=function(a,b){this.Bd(a,we(this),b)};
f.Bd=function(a,b,c){if(a.Q&&(c||!this.Q))throw Error("Component already rendered");if(0>b||b>we(this))throw Error("Child component index out of bounds");this.rc&&this.qa||(this.rc={},this.qa=[]);if(a.getParent()==this){var d=se(a);this.rc[d]=a;yb(this.qa,a)}else{var d=this.rc,e=se(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.ab(this);Bb(this.qa,b,0,a);a.Q&&this.Q&&a.getParent()==this?(c=this.xb(),b=c.childNodes[b]||null,b!=a.n()&&c.insertBefore(a.n(),b)):c?(this.D||
this.H(),b=xe(this,b+1),a.$d(this.xb(),b?b.D:null)):this.Q&&!a.Q&&a.D&&a.D.parentNode&&1==a.D.parentNode.nodeType&&a.ya()};f.xb=function(){return this.D};function ye(a){null==a.rg&&(a.rg="rtl"==nd(a.Q?a.D:a.xf.Vb.body,"direction"));return a.rg}f.Ve=function(a){if(this.Q)throw Error("Component already rendered");this.rg=a};function ze(a){return!!a.qa&&0!=a.qa.length}function we(a){return a.qa?a.qa.length:0}function ue(a,b){var c;a.rc&&b?(c=a.rc,c=(b in c?c[b]:void 0)||null):c=null;return c}
function xe(a,b){return a.qa?a.qa[b]||null:null}function ve(a,b,c){a.qa&&tb(a.qa,b,c)}function Ae(a,b){return a.qa&&b?sb(a.qa,b):-1}f.removeChild=function(a,b){if(a){var c=l(a)?a:se(a);a=ue(this,c);if(c&&a){var d=this.rc;c in d&&delete d[c];yb(this.qa,a);b&&(a.Db(),a.D&&Vb(a.D));a.ab(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Ek=function(a){for(var b=[];ze(this);)b.push(this.removeChild(xe(this,0),a));return b};function Be(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}function Ce(a,b){return a.classList?a.classList.contains(b):xb(Be(a),b)}function De(a,b){a.classList?a.classList.add(b):Ce(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Ee(a,b){if(a.classList)tb(b,function(b){De(a,b)});else{var c={};tb(Be(a),function(a){c[a]=!0});tb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Fe(a,b){a.classList?a.classList.remove(b):Ce(a,b)&&(a.className=ub(Be(a),function(a){return a!=b}).join(" "))}function Ge(a,b){a.classList?tb(b,function(b){Fe(a,b)}):a.className=ub(Be(a),function(a){return!xb(b,a)}).join(" ")};function He(a,b){if(!a)throw Error("Invalid class name "+a);if(!ha(b))throw Error("Invalid decorator function "+b);}var Ie={};var Je;function Ke(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function Le(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Je||(Je={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Je,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Me(a){a.removeAttribute("aria-activedescendant")}function Ne(a,b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)};function Oe(){}var Pe;ca(Oe);var Qe={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=Oe.prototype;f.zf=function(){};f.H=function(a){return a.eb().H("div",this.ye(a).join(" "),a.Xa)};f.xb=function(a){return a};f.ue=function(a,b,c){if(a=a.n?a.n():a){var d=[b];r&&!Pb("7")&&(d=Re(Be(a),b),d.push(b));(c?Ee:Ge)(a,d)}};f.Ke=function(a){ye(a)&&this.Ve(a.n(),!0);a.isEnabled()&&this.Jc(a,a.J())};
function Se(a,b,c){if(a=c||a.zf())c=b.getAttribute("role")||null,a!=c&&Ke(b,a)}function Te(a,b){a.J()||Le(b,"hidden",!a.J());a.isEnabled()||Ue(b,1,!a.isEnabled());a.ua&8&&Ue(b,8,a.Tf());a.ua&16&&Ue(b,16,!!(a.$&16));a.ua&64&&Ue(b,64,a.Sd())}f.fi=function(a,b){zd(a,!b,!r&&!Db)};f.Ve=function(a,b){this.ue(a,this.U()+"-rtl",b)};f.kc=function(a){var b;return a.ua&32&&(b=a.Ea())?gd(b)&&hd(b):!1};
f.Jc=function(a,b){var c;if(a.ua&32&&(c=a.Ea())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.Fe(null)}(gd(c)&&hd(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.O=function(a,b){xd(a,b);a&&Le(a,"hidden",!b)};f.Qb=function(a,b,c){var d=a.n();if(d){var e=this.Cf(b);e&&this.ue(a,e,c);Ue(d,b,c)}};
function Ue(a,b,c){Pe||(Pe={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=Pe[b];var d=a.getAttribute("role")||null;d&&(d=Qe[d]||b,b="checked"==b||"selected"==b?d:b);b&&Le(a,b,c)}f.qd=function(a,b){var c=this.xb(a);if(c&&(Zb(c),b))if(l(b))dd(c,b);else{var d=function(a){if(a){var b=Uc(c);c.appendChild(l(a)?b.createTextNode(a):a)}};ea(b)?tb(b,d):!fa(b)||"nodeType"in b?d(b):tb(zb(b),d)}};f.Ea=function(a){return a.n()};f.U=function(){return"goog-control"};
f.ye=function(a){var b=this.U(),c=[b],d=this.U();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.Cf(e));b&=~e}c.push.apply(c,d);(a=a.Xb)&&c.push.apply(c,a);r&&!Pb("7")&&c.push.apply(c,Re(c));return c};function Re(a,b){var c=[];b&&(a=a.concat([b]));tb([],function(d){!wb(d,pa(xb,a))||b&&!xb(d,b)||c.push(d.join("_"))});return c}
f.Cf=function(a){if(!this.rj){var b=this.U();b.replace(/\xa0|\s/g," ");this.rj={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.rj[a]};function Ve(a,b,c,d,e){if(!(r||t&&Pb("525")))return!0;if(Gb&&e)return We(a);if(e&&!d)return!1;ga(b)&&(b=Xe(b));if(!c&&(17==b||18==b||Gb&&91==b))return!1;if(t&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(r&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!t}return We(a)}
function We(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||t&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Xe(a){if(Eb)a=Ye(a);else if(Gb&&t)a:switch(a){case 93:a=91;break a}return a}
function Ye(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Ze(a,b){ne.call(this);a&&$e(this,a,b)}n(Ze,ne);f=Ze.prototype;f.D=null;f.Uf=null;f.Gh=null;f.Vf=null;f.yb=-1;f.Bc=-1;f.Tg=!1;
var af={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},bf={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},cf=r||t&&Pb("525"),df=Gb&&Eb;f=Ze.prototype;
f.Nr=function(a){t&&(17==this.yb&&!a.ctrlKey||18==this.yb&&!a.altKey||Gb&&91==this.yb&&!a.metaKey)&&(this.Bc=this.yb=-1);-1==this.yb&&(a.ctrlKey&&17!=a.keyCode?this.yb=17:a.altKey&&18!=a.keyCode?this.yb=18:a.metaKey&&91!=a.keyCode&&(this.yb=91));cf&&!Ve(a.keyCode,this.yb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Bc=Xe(a.keyCode),df&&(this.Tg=a.altKey))};f.Or=function(a){this.Bc=this.yb=-1;this.Tg=a.altKey};
f.handleEvent=function(a){var b=a.bb,c,d,e=b.altKey;r&&"keypress"==a.type?(c=this.Bc,d=13!=c&&27!=c?b.keyCode:0):t&&"keypress"==a.type?(c=this.Bc,d=0<=b.charCode&&63232>b.charCode&&We(c)?b.charCode:0):Db?(c=this.Bc,d=We(c)?b.keyCode:0):(c=b.keyCode||this.Bc,d=b.charCode||0,df&&(e=this.Tg),Gb&&63==d&&224==c&&(c=191));var h=c=Xe(c),k=b.keyIdentifier;c?63232<=c&&c in af?h=af[c]:25==c&&a.shiftKey&&(h=9):k&&k in bf&&(h=bf[k]);a=h==this.yb;this.yb=h;b=new ef(h,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.n=function(){return this.D};function $e(a,b,c){a.Vf&&a.detach();a.D=b;a.Uf=$d(a.D,"keypress",a,c);a.Gh=$d(a.D,"keydown",a.Nr,c,a);a.Vf=$d(a.D,"keyup",a.Or,c,a)}f.detach=function(){this.Uf&&(ge(this.Uf),ge(this.Gh),ge(this.Vf),this.Vf=this.Gh=this.Uf=null);this.D=null;this.Bc=this.yb=-1};f.Z=function(){Ze.k.Z.call(this);this.detach()};function ef(a,b,c,d){Ud.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}n(ef,Ud);function ff(a,b,c){pe.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ja(b);if(d=Ie[d])break;b=b.k?b.k.constructor:null}b=d?ha(d.Yb)?d.Yb():new d:null}this.L=b;this.tg(void 0!==a?a:null)}n(ff,pe);f=ff.prototype;f.Xa=null;f.$=0;f.ua=39;f.Zg=255;f.ud=0;f.oa=!0;f.Xb=null;f.He=!0;f.Sg=!1;f.Cs=null;f.Ea=function(){return this.L.Ea(this)};f.Gf=function(){return this.Za||(this.Za=new Ze)};
f.ue=function(a,b){b?a&&(this.Xb?xb(this.Xb,a)||this.Xb.push(a):this.Xb=[a],this.L.ue(this,a,!0)):a&&this.Xb&&yb(this.Xb,a)&&(0==this.Xb.length&&(this.Xb=null),this.L.ue(this,a,!1))};f.H=function(){var a=this.L.H(this);this.D=a;Se(this.L,a,this.If());this.Sg||this.L.fi(a,!1);this.J()||this.L.O(a,!1)};f.If=function(){return this.Cs};f.xb=function(){return this.L.xb(this.n())};
f.ya=function(){ff.k.ya.call(this);Te(this,this.D);this.L.Ke(this);if(this.ua&-2&&(this.He&&gf(this,!0),this.ua&32)){var a=this.Ea();if(a){var b=this.Gf();$e(b,a);te(this).N(b,"key",this.Fb).N(a,"focus",this.Lf).N(a,"blur",this.Fe)}}};
function gf(a,b){var c=te(a),d=a.n();b?(c.N(d,"mouseover",a.Ie).N(d,"mousedown",a.yc).N(d,"mouseup",a.Je).N(d,"mouseout",a.yh),a.Ge!=ba&&c.N(d,"contextmenu",a.Ge),r&&c.N(d,"dblclick",a.bk)):(c.Kb(d,"mouseover",a.Ie).Kb(d,"mousedown",a.yc).Kb(d,"mouseup",a.Je).Kb(d,"mouseout",a.yh),a.Ge!=ba&&c.Kb(d,"contextmenu",a.Ge),r&&c.Kb(d,"dblclick",a.bk))}f.Db=function(){ff.k.Db.call(this);this.Za&&this.Za.detach();this.J()&&this.isEnabled()&&this.L.Jc(this,!1)};
f.Z=function(){ff.k.Z.call(this);this.Za&&(this.Za.m(),delete this.Za);delete this.L;this.Xb=this.Xa=null};f.qd=function(a){this.L.qd(this.n(),a);this.tg(a)};f.tg=function(a){this.Xa=a};f.Bf=function(){var a=this.Xa;if(!a)return"";a=l(a)?a:ea(a)?vb(a,kd).join(""):id(a);return Oa(a)};f.Ve=function(a){ff.k.Ve.call(this,a);var b=this.n();b&&this.L.Ve(b,a)};f.fi=function(a){this.Sg=a;var b=this.n();b&&this.L.fi(b,a)};f.J=function(){return this.oa};
f.O=function(a,b){if(b||this.oa!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.n();c&&this.L.O(c,a);this.isEnabled()&&this.L.Jc(this,a);this.oa=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};f.Ue=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!hf(this,1,!a)||(a||(this.setActive(!1),this.ob(!1)),this.J()&&this.L.Jc(this,a),this.Qb(1,!a,!0))};f.ob=function(a){hf(this,2,a)&&this.Qb(2,a)};f.setActive=function(a){hf(this,4,a)&&this.Qb(4,a)};
f.Tf=function(){return!!(this.$&8)};f.ii=function(a){hf(this,8,a)&&this.Qb(8,a)};function jf(a,b){hf(a,16,b)&&a.Qb(16,b)}f.Sd=function(){return!!(this.$&64)};function kf(a,b){hf(a,64,b)&&a.Qb(64,b)}f.Qb=function(a,b,c){c||1!=a?this.ua&a&&b!=!!(this.$&a)&&(this.L.Qb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Ue(!b)};f.jb=function(a,b){if(this.Q&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.Qb(a,!1);this.ua=b?this.ua|a:this.ua&~a};
function lf(a,b){return!!(a.Zg&b)&&!!(a.ua&b)}function hf(a,b,c){return!!(a.ua&b)&&!!(a.$&b)!=c&&(!(a.ud&b)||a.dispatchEvent(re(b,c)))&&!a.te}f.Ie=function(a){!mf(a,this.n())&&this.dispatchEvent("enter")&&this.isEnabled()&&lf(this,2)&&this.ob(!0)};f.yh=function(a){!mf(a,this.n())&&this.dispatchEvent("leave")&&(lf(this,4)&&this.setActive(!1),lf(this,2)&&this.ob(!1))};f.Ge=ba;function mf(a,b){return!!a.relatedTarget&&cd(b,a.relatedTarget)}
f.yc=function(a){this.isEnabled()&&(lf(this,2)&&this.ob(!0),!Wd(a)||t&&Gb&&a.ctrlKey||(lf(this,4)&&this.setActive(!0),this.L.kc(this)&&this.Ea().focus()));this.Sg||!Wd(a)||t&&Gb&&a.ctrlKey||a.preventDefault()};f.Je=function(a){this.isEnabled()&&(lf(this,2)&&this.ob(!0),this.$&4&&this.Dc(a)&&lf(this,4)&&this.setActive(!1))};f.bk=function(a){this.isEnabled()&&this.Dc(a)};
f.Dc=function(a){lf(this,16)&&jf(this,!(this.$&16));lf(this,8)&&this.ii(!0);lf(this,64)&&kf(this,!this.Sd());var b=new Sd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Uh=a.Uh);return this.dispatchEvent(b)};f.Lf=function(){lf(this,32)&&hf(this,32,!0)&&this.Qb(32,!0)};f.Fe=function(){lf(this,4)&&this.setActive(!1);lf(this,32)&&hf(this,32,!1)&&this.Qb(32,!1)};
f.Fb=function(a){return this.J()&&this.isEnabled()&&this.cd(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.cd=function(a){return 13==a.keyCode&&this.Dc(a)};if(!ha(ff))throw Error("Invalid component class "+ff);if(!ha(Oe))throw Error("Invalid renderer class "+Oe);var nf=ja(ff);Ie[nf]=Oe;He("goog-control",function(){return new ff(null)});function of(){this.sj=[]}n(of,Oe);ca(of);function pf(a,b){var c=a.sj[b];if(!c){switch(b){case 0:c=a.U()+"-highlight";break;case 1:c=a.U()+"-checkbox";break;case 2:c=a.U()+"-content"}a.sj[b]=c}return c}f=of.prototype;f.zf=function(){return"menuitem"};f.H=function(a){var b=a.eb().H("div",this.ye(a).join(" "),qf(this,a.Xa,a.eb()));rf(this,a,b,!!(a.ua&8)||!!(a.ua&16));return b};f.xb=function(a){return a&&a.firstChild};
f.qd=function(a,b){var c=this.xb(a),d=sf(this,a)?c.firstChild:null;of.k.qd.call(this,a,b);d&&!sf(this,a)&&c.insertBefore(d,c.firstChild||null)};function qf(a,b,c){a=pf(a,2);return c.H("div",a,b)}f.Lk=function(a,b,c){a&&b&&rf(this,a,b,c)};f.gi=function(a,b,c){a&&b&&rf(this,a,b,c)};function sf(a,b){var c=a.xb(b);if(c){var c=c.firstChild,d=pf(a,1);return!!c&&ia(c)&&1==c.nodeType&&Ce(c,d)}return!1}
function rf(a,b,c,d){Se(a,c,b.If());Te(b,c);d!=sf(a,c)&&(d?De(c,"goog-option"):Fe(c,"goog-option"),c=a.xb(c),d?(a=pf(a,1),c.insertBefore(b.eb().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}f.Cf=function(a){switch(a){case 2:return pf(this,0);case 16:case 8:return"goog-option-selected";default:return of.k.Cf.call(this,a)}};f.U=function(){return"goog-menuitem"};function tf(a,b,c,d){ff.call(this,a,d||of.Yb(),c);this.ja(b)}n(tf,ff);f=tf.prototype;f.Fa=function(){var a=this.$f;return null!=a?a:this.Bf()};f.ja=function(a){this.$f=a};f.jb=function(a,b){tf.k.jb.call(this,a,b);switch(a){case 8:this.$&16&&!b&&jf(this,!1);var c=this.n();c&&this.L.Lk(this,c,b);break;case 16:(c=this.n())&&this.L.gi(this,c,b)}};f.Lk=function(a){this.jb(8,a)};f.gi=function(a){this.jb(16,a)};
f.Bf=function(){var a=this.Xa;return ea(a)?(a=vb(a,function(a){return ia(a)&&1==a.nodeType&&(Ce(a,"goog-menuitem-accel")||Ce(a,"goog-menuitem-mnemonic-separator"))?"":kd(a)}).join(""),Oa(a)):tf.k.Bf.call(this)};f.Je=function(a){var b=this.getParent();if(b){var c=b.wk;b.wk=null;if(b=c&&ga(a.clientX))b=new mc(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}tf.k.Je.call(this,a)};f.cd=function(a){return a.keyCode==this.pk&&this.Dc(a)?!0:tf.k.cd.call(this,a)};f.Gr=function(){return this.pk};
He("goog-menuitem",function(){return new tf(null)});tf.prototype.If=function(){return this.ua&16?"menuitemcheckbox":this.ua&8?"menuitemradio":tf.k.If.call(this)};tf.prototype.getParent=function(){return ff.prototype.getParent.call(this)};tf.prototype.Hf=function(){return ff.prototype.Hf.call(this)};function uf(a){this.ij=a}ca(uf);f=uf.prototype;f.zf=function(){return this.ij};function vf(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.eb().H("div",this.ye(a).join(" "))};f.xb=function(a){return a};f.Ke=function(a){a=a.n();zd(a,!0,Eb);r&&(a.hideFocus=!0);var b=this.zf();b&&Ke(a,b)};f.Ea=function(a){return a.n()};f.U=function(){return"goog-container"};f.ye=function(a){var b=this.U(),c=[b,a.Yd==wf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function xf(){}n(xf,Oe);ca(xf);xf.prototype.H=function(a){return a.eb().H("div",this.U())};xf.prototype.qd=function(){};xf.prototype.U=function(){return"goog-menuseparator"};function yf(a,b){ff.call(this,null,a||xf.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(yf,ff);yf.prototype.ya=function(){yf.k.ya.call(this);var a=this.n();Ke(a,"separator")};He("goog-menuseparator",function(){return new yf});function zf(a){this.ij=a||"menu"}n(zf,uf);ca(zf);zf.prototype.U=function(){return"goog-menu"};zf.prototype.Ke=function(a){zf.k.Ke.call(this,a);a=a.n();Le(a,"haspopup","true")};He("goog-menuseparator",function(){return new yf});function Af(a,b,c){pe.call(this,c);this.L=b||uf.Yb();this.Yd=a||Bf}n(Af,pe);var wf="horizontal",Bf="vertical";f=Af.prototype;f.Hh=null;f.Za=null;f.L=null;f.Yd=null;f.oa=!0;f.Xc=!0;f.Zc=!0;f.M=-1;f.za=null;f.Wd=!1;f.br=!1;f.As=!0;f.hc=null;f.Ea=function(){return this.Hh||this.L.Ea(this)};f.Gf=function(){return this.Za||(this.Za=new Ze(this.Ea()))};f.H=function(){this.D=this.L.H(this)};f.xb=function(){return this.L.xb(this.n())};
f.ya=function(){Af.k.ya.call(this);ve(this,function(a){a.Q&&Cf(this,a)},this);var a=this.n();this.L.Ke(this);this.O(this.oa,!0);te(this).N(this,"enter",this.wh).N(this,"highlight",this.Mr).N(this,"unhighlight",this.Sr).N(this,"open",this.Pr).N(this,"close",this.Jr).N(a,"mousedown",this.yc).N(Uc(a),"mouseup",this.Kr).N(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.Ir);this.kc()&&Df(this,!0)};
function Df(a,b){var c=te(a),d=a.Ea();b?c.N(d,"focus",a.Lf).N(d,"blur",a.Fe).N(a.Gf(),"key",a.Fb):c.Kb(d,"focus",a.Lf).Kb(d,"blur",a.Fe).Kb(a.Gf(),"key",a.Fb)}f.Db=function(){this.Sa(-1);this.za&&kf(this.za,!1);this.Wd=!1;Af.k.Db.call(this)};f.Z=function(){Af.k.Z.call(this);this.Za&&(this.Za.m(),this.Za=null);this.L=this.za=this.hc=this.Hh=null};f.wh=function(){return!0};
f.Mr=function(a){var b=Ae(this,a.target);if(-1<b&&b!=this.M){var c=xe(this,this.M);c&&c.ob(!1);this.M=b;c=xe(this,this.M);this.Wd&&c.setActive(!0);this.As&&this.za&&c!=this.za&&(c.ua&64?kf(c,!0):kf(this.za,!1))}b=this.n();null!=a.target.n()&&Le(b,"activedescendant",a.target.n().id)};f.Sr=function(a){a.target==xe(this,this.M)&&(this.M=-1);a=this.n();Me(a)};f.Pr=function(a){(a=a.target)&&a!=this.za&&a.getParent()==this&&(this.za&&kf(this.za,!1),this.za=a)};
f.Jr=function(a){a.target==this.za&&(this.za=null)};f.yc=function(a){this.Xc&&(this.Wd=!0);var b=this.Ea();b&&gd(b)&&hd(b)?b.focus():a.preventDefault()};f.Kr=function(){this.Wd=!1};f.Ir=function(a){var b=Ef(this,a.target);if(b)switch(a.type){case "mousedown":b.yc(a);break;case "mouseup":b.Je(a);break;case "mouseover":b.Ie(a);break;case "mouseout":b.yh(a);break;case "contextmenu":b.Ge(a)}};
function Ef(a,b){if(a.hc)for(var c=a.n();b&&b!==c;){var d=b.id;if(d in a.hc)return a.hc[d];b=b.parentNode}return null}f.Lf=function(){};f.Fe=function(){this.Sa(-1);this.Wd=!1;this.za&&kf(this.za,!1)};f.Fb=function(a){return this.isEnabled()&&this.J()&&(0!=we(this)||this.Hh)&&this.cd(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.cd=function(a){var b=xe(this,this.M);if(b&&"function"==typeof b.Fb&&b.Fb(a)||this.za&&this.za!=b&&"function"==typeof this.za.Fb&&this.za.Fb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.kc())this.Ea().blur();else return!1;break;case 36:Ff(this);break;case 35:Gf(this);break;case 38:if(this.Yd==Bf)Hf(this);else return!1;break;case 37:if(this.Yd==wf)ye(this)?If(this):Hf(this);else return!1;break;case 40:if(this.Yd==Bf)If(this);else return!1;break;
case 39:if(this.Yd==wf)ye(this)?Hf(this):If(this);else return!1;break;default:return!1}return!0};function Cf(a,b){var c=b.n(),c=c.id||(c.id=se(b));a.hc||(a.hc={});a.hc[c]=b}f.oe=function(a,b){Af.k.oe.call(this,a,b)};
f.Bd=function(a,b,c){a.ud|=2;a.ud|=64;!this.kc()&&this.br||a.jb(32,!1);a.Q&&0!=a.He&&gf(a,!1);a.He=!1;var d=a.getParent()==this?Ae(this,a):-1;Af.k.Bd.call(this,a,b,c);a.Q&&this.Q&&Cf(this,a);a=d;-1==a&&(a=we(this));a==this.M?this.M=Math.min(we(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=l(a)?ue(this,a):a){var c=Ae(this,a);-1!=c&&(c==this.M?(a.ob(!1),this.M=-1):c<this.M&&this.M--);var d=a.n();d&&d.id&&this.hc&&(c=this.hc,d=d.id,d in c&&delete c[d])}c=a=Af.k.removeChild.call(this,a,b);c.Q&&1!=c.He&&gf(c,!0);c.He=!0;return a};f.J=function(){return this.oa};
f.O=function(a,b){if(b||this.oa!=a&&this.dispatchEvent(a?"show":"hide")){this.oa=a;var c=this.n();c&&(xd(c,a),this.kc()&&vf(this.Ea(),this.Xc&&this.oa),b||this.dispatchEvent(this.oa?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Xc};
f.Ue=function(a){this.Xc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Xc=!0,ve(this,function(a){a.Yk?delete a.Yk:a.Ue(!0)})):(ve(this,function(a){a.isEnabled()?a.Ue(!1):a.Yk=!0}),this.Wd=this.Xc=!1),this.kc()&&vf(this.Ea(),a&&this.oa))};f.kc=function(){return this.Zc};f.Jc=function(a){a!=this.Zc&&this.Q&&Df(this,a);this.Zc=a;this.Xc&&this.oa&&vf(this.Ea(),a)};f.Sa=function(a){(a=xe(this,a))?a.ob(!0):-1<this.M&&xe(this,this.M).ob(!1)};f.ob=function(a){this.Sa(Ae(this,a))};
function Ff(a){Jf(a,function(a,c){return(a+1)%c},we(a)-1)}function Gf(a){Jf(a,function(a,c){a--;return 0>a?c-1:a},0)}function If(a){Jf(a,function(a,c){return(a+1)%c},a.M)}function Hf(a){Jf(a,function(a,c){a--;return 0>a?c-1:a},a.M)}function Jf(a,b,c){c=0>c?Ae(a,a.za):c;var d=we(a);c=b.call(a,c,d);for(var e=0;e<=d;){var h=xe(a,c);if(h&&a.oj(h)){a.Sa(c);break}e++;c=b.call(a,c,d)}}f.oj=function(a){return a.J()&&a.isEnabled()&&!!(a.ua&2)};function Kf(){}n(Kf,Oe);ca(Kf);Kf.prototype.U=function(){return"goog-menuheader"};function Lf(a,b,c){ff.call(this,a,c||Kf.Yb(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}n(Lf,ff);He("goog-menuheader",function(){return new Lf(null)});function Mf(a,b){Af.call(this,Bf,b||zf.Yb(),a);this.Jc(!1)}n(Mf,Af);f=Mf.prototype;f.Rg=!0;f.cr=!1;f.U=function(){return this.L.U()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.m()};f.Zj=function(a){return xe(this,a)};
f.be=function(a,b){var c=this.J();c||xd(this.n(),!0);var d=this.n(),e=a,h=b,k=rd(d);e instanceof mc&&(h=e.y,e=e.x);var e=d.offsetLeft+(e-k.x),m=d.offsetTop+(h-k.y),k=Eb&&(Gb||Hb)&&Pb("1.9");e instanceof mc?(h=e.x,e=e.y):(h=e,e=m);d.style.left=sd(h,k);d.style.top=sd(e,k);c||xd(this.n(),!1)};function Nf(a){a.Rg=!0;a.Jc(!0)}f.O=function(a,b,c){(b=Mf.k.O.call(this,a,b))&&a&&this.Q&&this.Rg&&this.Ea().focus();this.wk=a&&c&&ga(c.clientX)?new mc(c.clientX,c.clientY):null;return b};
f.wh=function(a){this.Rg&&this.Ea().focus();return Mf.k.wh.call(this,a)};f.oj=function(a){return(this.cr||a.isEnabled())&&a.J()&&!!(a.ua&2)};f.cd=function(a){var b=Mf.k.cd.call(this,a);b||ve(this,function(c){!b&&c.Gr&&c.pk==a.keyCode&&(this.isEnabled()&&this.ob(c),b=c.Fb(a))},this);return b};
f.Sa=function(a){Mf.k.Sa.call(this,a);if(a=xe(this,a)){var b=a.n();a=this.n();var c=rd(b),d=rd(a),e=Cd(a),h=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,k=a.scrollTop,e=e+Math.min(h,Math.max(h-(a.clientWidth-b.offsetWidth),0)),k=k+Math.min(c,Math.max(c-d,0)),b=new mc(e,k);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function F(a,b){this.Vd=a;this.fa=b;Of(this);var c=Pf(this)[0];this.va=c[1];this.of=u("tspan",{},null);this.of.appendChild(document.createTextNode(q?Qf+" ":" "+Qf));F.k.constructor.call(this,c[0])}n(F,Tb);var Qf=Jb?"\u25bc":"\u25be";f=F.prototype;f.clone=function(){return new F(this.Vd,this.fa)};f.ef="default";
f.wg=function(){Rf(this,null);for(var a=this,b=new Mf,c=Pf(this),d=0;d<c.length;d++){var e=c[d][1],h=new tf(c[d][0]);h.ja(e);h.gi(!0);b.oe(h,!0);jf(h,e==this.va)}$d(b,"action",function(b){if(b=b.target){b=b.Fa();if(a.h&&a.fa){var c=a.fa(b);void 0!==c&&(b=c)}null!==b&&a.ja(b)}Sf(a)});te(b).N(b.n(),"touchstart",function(a){Ef(this,a.target).yc(a)});te(b).N(b.n(),"touchend",function(a){Ef(this,a.target).Dc(a)});c=Yc();d=od();e=Tf(this.Cb);h=this.Cb.getBBox();b.F(Uf);var k=b.n();Wb(k,"blocklyDropdownMenu");
var m=ud(k);e.y=e.y+m.height+h.height>=c.height+d.y?e.y-m.height:e.y+h.height;q?(e.x+=h.width,e.x+=25,e.x<d.x+m.width&&(e.x=d.x+m.width)):(e.x-=25,e.x>c.width+d.x-m.width&&(e.x=c.width+d.x-m.width));Vf(e.x,e.y,c,d);Nf(b);k.focus()};
function Of(a){a.Vh=null;a.ui=null;var b=a.Vd;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Wf(c),e=Xf(c,d),h=Yf(c,d);if((e||h)&&!(d<=e+h)){e&&(a.Vh=c[0].substring(0,e-1));h&&(a.ui=c[0].substr(1-h));c=[];for(d=0;d<b.length;d++){var k=b[d][0],m=b[d][1],k=k.substring(e,k.length-h);c[d]=[k,m]}a.Vd=c}}}function Pf(a){return ha(a.Vd)?a.Vd.call(a):a.Vd}f.Fa=function(){return this.va};f.ja=function(a){this.va=a;for(var b=Pf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.ia(b[c][0]);return}this.ia(a)};
f.ia=function(a){this.h&&(this.of.style.fill=Zf($f(this.h.bh)));null!==a&&a!==this.Ka&&(this.Ka=a,Ub(this),this.Ja&&(q?this.Ja.insertBefore(this.of,this.Ja.firstChild):this.Ja.appendChild(this.of)),this.h&&this.h.B&&(this.h.F(),this.h.Ma(),this.h.t.wb()))};f.m=function(){Sf(this);F.k.m.call(this)};/*

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
function ag(a){a=a||A;var b;if(a.Eb)b=a.Eb();else if(a.cb)b=a.cb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].Zb;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var h=d[e];h&&(a[h.toLowerCase()]=h)}}b=[];for(var k in a)b.push(a[k]);return b}function bg(a,b){for(var c=A.cb(),d=0;d<c.length;d++){var e=c[d].Hb;e&&e.call(c[d],a,b)}}
function cg(a,b,c,d){var e=ag();e.sort(Qa);e.unshift(null);for(var h=void 0,k=0;k<e.length;k++)if(e[k]!==h){var m=C.variables_get?hc(d,"variables_get"):null;m&&m.ra();var p=C.variables_set?hc(d,"variables_set"):null;p&&p.ra();null===e[k]?h=(m||p).Zb()[0]:(m&&ic(m,e[k],"VAR"),p&&ic(p,e[k],"VAR"));p&&a.push(p);m&&a.push(m);m&&p?b.push(c,3*c):b.push(2*c)}}
function dg(){var a=ag(),b="";if(a.length){a.sort(Qa);for(var c=0,d="i",e=0,h=!1;!b;){e=0;for(h=!1;e<a.length&&!h;)a[e].toLowerCase()==d&&(h=!0),e++;h?("z"===d[0]?(c++,d="a"):(d=String.fromCharCode(d.charCodeAt(0)+1),"l"==d[0]&&(d=String.fromCharCode(d.charCodeAt(0)+1))),0<c&&(d+=c)):b=d}}else b="i";return b};/*

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
function eg(a,b){var c;if(b){var d=this;c=function(a){var c=fg.call(d,a);a=void 0===c?a:null===c?d.Fa():c;b.call(d,a);return c}}else c=fg;eg.k.constructor.call(this,gg,c);a?this.ja(a):this.ja(dg())}n(eg,F);eg.prototype.clone=function(){return new eg(this.Fa(),this.fa)};eg.prototype.Fa=function(){return this.fb()};eg.prototype.ja=function(a){this.va=a;this.ia(a)};
function gg(){var a=this.h&&this.h.t?ag(this.h.t):[],b=this.fb();b&&-1==a.indexOf(b)&&a.push(b);a.sort(Qa);a.push(G.Wi);a.push(G.Ni);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function fg(a){function b(a,b){hg();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==G.Wi){var c=this.fb();(a=b(G.Lp.replace("%1",c),c))&&bg(c,a);return null}if(a==G.Ni)return(a=b(G.kp,""))?(bg(a,a),a):null};var ig={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function jg(a){var b={};a=String(a);var c="#"==a.charAt(0)?a:"#"+a;if(kg.test(c))return b.zh=lg(c),b.type="hex",b;a:{var d=a.match(mg);if(d){var c=Number(d[1]),e=Number(d[2]),d=Number(d[3]);if(0<=c&&255>=c&&0<=e&&255>=e&&0<=d&&255>=d){c=[c,e,d];break a}}c=[]}if(c.length)return b.zh=Zf(c),b.type="rgb",b;if(ig&&(c=ig[a.toLowerCase()]))return b.zh=c,b.type="named",b;throw Error(a+" is not a valid color string");}var ng=/#(.)(.)(.)/;
function lg(a){if(!kg.test(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(ng,"#$1$1$2$2$3$3"));return a.toLowerCase()}function og(a){a=lg(a);return[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)]}
function Zf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=pg(b.toString(16));c=pg(c.toString(16));a=pg(a.toString(16));return"#"+b+c+a}var kg=/^#(?:[0-9a-f]{3}){1,2}$/i,mg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;function pg(a){return 1==a.length?"0"+a:a}
function $f(a){var b=0,c=0,d=0,e=Math.floor(a/60),h=a/60-e;a=237.15*(1-.39*h);h=237.15*(1-.39*(1-h));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=h;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=h;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=h,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function qg(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function rg(a,b){null!=a&&this.append.apply(this,arguments)}f=rg.prototype;f.xa="";f.set=function(a){this.xa=""+a};f.append=function(a,b,c){this.xa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.xa+=arguments[d];return this};f.clear=function(){this.xa=""};f.toString=function(){return this.xa};function sg(a,b,c){if(ha(a))c&&(a=oa(a,c));else if(a&&"function"==typeof a.handleEvent)a=oa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:g.setTimeout(a,b||0)};function tg(a,b,c){pe.call(this,c);this.Na=b||ug;this.Bh=a instanceof Dc?a:Hc(a,null)}n(tg,pe);var vg={};f=tg.prototype;f.di=!1;f.ve=!1;f.Ws=null;f.ar=Nc;f.Me=!0;f.vf=-1;f.Z=function(){tg.k.Z.call(this);this.wd&&(this.wd.removeNode(this),this.wd=null);this.D=null};
f.Rf=function(){var a=this.n();if(a){var b=wg(this);b&&!b.id&&(b.id=se(this)+".label");Ke(a,"treeitem");Le(a,"selected",!1);Le(a,"expanded",!1);Le(a,"level",this.Ld());b&&Le(a,"labelledby",b.id);(a=this.Ff())&&Ke(a,"presentation");(a=this.Ef())&&Ke(a,"presentation");if(a=xg(this))if(Ke(a,"group"),a.hasChildNodes())for(a=we(this),b=1;b<=a;b++){var c=xe(this,b-1).n();Le(c,"setsize",a);Le(c,"posinset",b)}}};
f.H=function(){var a=this.eb(),b=this.wi(),c=a.Vb,a=c.createElement("div");r?(Oc(a,Mc(Lc("br"),b)),a.removeChild(a.firstChild)):Oc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.D=b};f.ya=function(){tg.k.ya.call(this);vg[se(this)]=this;this.Rf()};f.Db=function(){tg.k.Db.call(this);delete vg[se(this)]};
f.Bd=function(a,b){var c=xe(this,b-1),d=xe(this,b);tg.k.Bd.call(this,a,b);a.jd=c;a.Pb=d;c?c.Pb=a:this.Xj=a;d?d.jd=a:this.lk=a;var e=this.gb();e&&yg(a,e);zg(a,this.Ld()+1);if(this.n()&&(this.fe(),this.lb())){e=xg(this);a.n()||a.H();var h=a.n(),k=d&&d.n();e.insertBefore(h,k);this.Q&&a.ya();d||(c?c.fe():(xd(e,!0),this.oc(this.lb())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Bd(a,b?Ae(this,b):we(this));return a};
f.removeChild=function(a){var b=this.gb(),c=b?b.bd():null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),sg(this.xs,10,this)):this.select();tg.k.removeChild.call(this,a);this.lk==a&&(this.lk=a.jd);this.Xj==a&&(this.Xj=a.Pb);a.jd&&(a.jd.Pb=a.Pb);a.Pb&&(a.Pb.jd=a.jd);c=!a.Pb;a.wd=null;a.vf=-1;if(b&&(b.removeNode(this),this.Q)){b=xg(this);if(a.Q){var d=a.n();b.removeChild(d);a.Db()}c&&(c=xe(this,we(this)-1))&&c.fe();ze(this)||(b.style.display="none",this.fe(),this.Ff().className=this.Af())}return a};
f.remove=tg.prototype.removeChild;f.xs=function(){this.select()};f.Ld=function(){var a=this.vf;0>a&&(a=(a=this.getParent())?a.Ld()+1:0,zg(this,a));return a};function zg(a,b){if(b!=a.vf){a.vf=b;var c=Ag(a);if(c){var d=Bg(a)+"px";ye(a)?c.style.paddingRight=d:c.style.paddingLeft=d}ve(a,function(a){zg(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.ad=function(){var a=[];ve(this,function(b){a.push(b)});return a};f.Tf=function(){return this.di};
f.select=function(){var a=this.gb();a&&a.Ib(this)};function Cg(a,b){if(a.di!=b){a.di=b;Dg(a);var c=a.n();c&&(Le(c,"selected",b),b&&(c=a.gb().n(),Le(c,"activedescendant",se(a))))}}f.lb=function(){return this.ve};
f.oc=function(a){var b=a!=this.ve;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.ve=a;c=this.gb();var d=this.n();if(ze(this)){if(!a&&c&&this.contains(c.bd())&&this.select(),d){if(c=xg(this))if(xd(c,a),a&&this.Q&&!c.hasChildNodes()){var e=[];ve(this,function(a){e.push(a.wi())});Oc(c,Mc(e));ve(this,function(a){a.ya()})}this.fe()}}else(c=xg(this))&&xd(c,!1);d&&(this.Ff().className=this.Af(),Le(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.oc(!this.lb())};
f.expand=function(){this.oc(!0)};f.collapse=function(){this.oc(!1)};f.bi=function(){var a=this.getParent();a&&(a.oc(!0),a.bi())};f.wi=function(){var a=this.gb(),b=!a.Xe||a==this.getParent()&&!a.li?this.Na.Aj:this.Na.zj,a=this.lb()&&ze(this),b={"class":b,style:Eg(this)},c=[];a&&ve(this,function(a){c.push(a.wi())});a=Lc("div",b,c);return Lc("div",{"class":this.Na.Ij,id:se(this)},[Fg(this),a])};function Bg(a){return Math.max(0,(a.Ld()-1)*a.Na.Eh)}
function Fg(a){var b={};b["padding-"+(ye(a)?"right":"left")]=Bg(a)+"px";var b={"class":a.Ce(),style:b},c=a.sh(),d=Lc("span",{style:{display:"inline-block"},"class":a.Af()}),e=Lc("span",{"class":a.Na.Jj,title:a.Ws||null},a.Bh);a=Mc(e,Lc("span",{},a.ar));return Lc("div",b,[c,d,a])}f.Ce=function(){return this.Na.hh+(this.Tf()?" "+this.Na.Lj:"")};f.sh=function(){return Lc("span",{type:"expand",style:{display:"inline-block"},"class":Gg(this)})};
function Gg(a){var b=a.gb(),c=!b.Xe||b==a.getParent()&&!b.li,d=a.Na,e=new rg;e.append(d.Wc," ",d.nr," ");if(ze(a)){var h=0;b.ki&&a.Me&&(h=a.lb()?2:1);c||(h=a.Pb?h+8:h+4);switch(h){case 1:e.append(d.rr);break;case 2:e.append(d.qr);break;case 4:e.append(d.Ej);break;case 5:e.append(d.pr);break;case 6:e.append(d.or);break;case 8:e.append(d.Fj);break;case 9:e.append(d.tr);break;case 10:e.append(d.sr);break;default:e.append(d.Dj)}}else c?e.append(d.Dj):a.Pb?e.append(d.Fj):e.append(d.Ej);return e.toString()}
function Eg(a){var b=a.lb()&&ze(a);return zc({"background-position":Hg(a),display:b?null:"none"})}function Hg(a){return(a.Pb?(a.Ld()-1)*a.Na.Eh:"-100")+"px 0"}f.n=function(){var a=tg.k.n.call(this);a||(this.D=a=this.eb().n(se(this)));return a};function Ag(a){return(a=a.n())?a.firstChild:null}f.Ef=function(){var a=Ag(this);return a?a.firstChild:null};f.Ff=function(){var a=Ag(this);return a?a.childNodes[1]:null};function wg(a){return(a=Ag(a))&&a.lastChild?a.lastChild.previousSibling:null}
function xg(a){return(a=a.n())?a.lastChild:null}f.ia=function(a){this.Bh=a=Gc(a);var b=wg(this);b&&Oc(b,a);(a=this.gb())&&Ig(a,this)};f.fb=function(){var a=Fc(this.Bh);return-1!=a.indexOf("&")?"document"in g?Za(a):ab(a):a};function Dg(a){var b=Ag(a);b&&(b.className=a.Ce())}f.fe=function(){var a=this.Ef();a&&(a.className=Gg(this));if(a=xg(this))a.style.backgroundPosition=Hg(this)};f.Ph=function(a){"expand"==a.target.getAttribute("type")&&ze(this)?this.Me&&this.toggle():(this.select(),Dg(this))};
f.rk=function(a){"expand"==a.target.getAttribute("type")&&ze(this)||this.Me&&this.toggle()};function Jg(a){return a.lb()&&ze(a)?Jg(xe(a,we(a)-1)):a}function yg(a,b){a.wd!=b&&(a.wd=b,Ig(b,a),ve(a,function(a){yg(a,b)}))}
var ug={Eh:19,Kj:"goog-tree-root goog-tree-item",Hj:"goog-tree-hide-root",Ij:"goog-tree-item",zj:"goog-tree-children",Aj:"goog-tree-children-nolines",hh:"goog-tree-row",Jj:"goog-tree-item-label",Wc:"goog-tree-icon",nr:"goog-tree-expand-icon",rr:"goog-tree-expand-icon-plus",qr:"goog-tree-expand-icon-minus",tr:"goog-tree-expand-icon-tplus",sr:"goog-tree-expand-icon-tminus",pr:"goog-tree-expand-icon-lplus",or:"goog-tree-expand-icon-lminus",Fj:"goog-tree-expand-icon-t",Ej:"goog-tree-expand-icon-l",Dj:"goog-tree-expand-icon-blank",
fh:"goog-tree-expanded-folder-icon",Bj:"goog-tree-collapsed-folder-icon",gh:"goog-tree-file-icon",Gj:"goog-tree-expanded-folder-icon",Cj:"goog-tree-collapsed-folder-icon",Lj:"selected"};function Kg(a,b,c){tg.call(this,a,b,c)}n(Kg,tg);Kg.prototype.gb=function(){if(this.wd)return this.wd;var a=this.getParent();return a&&(a=a.gb())?(yg(this,a),a):null};Kg.prototype.Af=function(){var a=this.lb(),b=this.Br;if(a&&b)return b;b=this.Ur;if(!a&&b)return b;b=this.Na;if(ze(this)){if(a&&b.fh)return b.Wc+" "+b.fh;if(!a&&b.Bj)return b.Wc+" "+b.Bj}else if(b.gh)return b.Wc+" "+b.gh;return""};/*

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
function Lg(a){var b;q&&(b=workarea.Kf());var c=D("xml");a=Ka(a,!0);for(var d=0,e;e=a[d];d++){var h=Mg(e);e=e.ga();h.setAttribute("x",q?b-e.x:e.x);h.setAttribute("y",e.y);c.appendChild(h)}c.setAttribute("level",H);return c}
function Mg(a){var b=D("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Ia){var c=a.Ia();c&&b.appendChild(c)}for(var d=0;c=a.T[d];d++)for(var e=0,h;h=c.Pa[e];e++)if(h.name&&h.xd){var k=D("field",null,h.Fa());k.setAttribute("name",h.name);b.appendChild(k)}if(c=a.Df())c=D("comment",null,c),"object"==typeof a.ba&&(c.setAttribute("pinned",a.ba.J()),d=a.ba.$c(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.T[e];e++){var m;h=!0;5!=c.type&&
(k=I(c.s),1==c.type?(m=D("value"),d=!0):3==c.type&&(m=D("statement")),k&&(m.appendChild(Mg(k)),h=!1),m.setAttribute("name",c.name),h||b.appendChild(m))}d&&b.setAttribute("inline",a.Le);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Id&&!z||b.setAttribute("deletable",!1);a.cc&&!z||b.setAttribute("movable",!1);a.uc&&!z||b.setAttribute("editable",!1);if(a=Ng(a))m=D("next",null,Mg(a)),b.appendChild(m);return b}
function Og(a){return(new XMLSerializer).serializeToString(a)}function Pg(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Qg(a,b){var c;q&&(c=a.Kf());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var h=Rg(a,e),k=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(k)||isNaN(e)||h.moveBy(q?c-k:k,e)}}
function Rg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var h=b.getAttribute("id");if(c&&h){d=Sg(h,a);if(!d)throw"Couldn't get Block with id: "+h;h=d.getParent();d.t&&d.m(!0,!1,!0);d.fill(a,e);d.$a=h}else d=hc(a,e);d.ra&&d.ra();(h=b.getAttribute("inline"))&&Tg(d,"true"==h);(h=b.getAttribute("disabled"))&&d.Te("true"==h);(h=b.getAttribute("deletable"))&&Ug(d,"true"==h);if(h=b.getAttribute("movable"))d.cc="true"==h;(h=b.getAttribute("editable"))&&Vg(d,
"true"==h);for(var k=null,h=0,m;m=b.childNodes[h];h++)if(3!=m.nodeType||!m.data.match(/^\s*$/)){for(var k=null,p=0,y;y=m.childNodes[p];p++)3==y.nodeType&&y.data.match(/^\s*$/)||(k=y);p=m.getAttribute("name");switch(m.nodeName.toLowerCase()){case "mutation":d.Oa&&(d.Oa(m),d.ra&&d.ra());break;case "comment":d.Se(m.textContent);var x=m.getAttribute("pinned");x&&setTimeout(function(){d.ba&&d.ba.O&&d.ba.O("true"==x)},1);k=parseInt(m.getAttribute("w"),10);m=parseInt(m.getAttribute("h"),10);!isNaN(k)&&!isNaN(m)&&
d.ba&&d.ba.O&&d.ba.Ic(k,m);break;case "title":case "field":ic(d,m.textContent,p);break;case "value":case "statement":m=J(d,p);if(!m)throw"Input "+p+" does not exist in block "+e;if(k&&"block"==k.nodeName.toLowerCase())if(k=Rg(a,k,c),k.G)Xg(m.s,k.G);else if(k.K)Xg(m.s,k.K);else throw"Child block does not have output or previous statement.";break;case "next":if(k&&"block"==k.nodeName.toLowerCase()){if(!d.C)throw"Next statement does not exist.";if(d.C.w)throw"Next statement is already connected.";k=
Rg(a,k,c);if(!k.K)throw"Next block does not have previous statement.";Xg(d.C,k.K)}break;default:console.log("Ignoring unknown tag: "+m.nodeName)}}(b=b.getAttribute("collapsed"))&&d.pd("true"==b);a.B&&((a=Ng(d))?a.F():d.F());return d}function Yg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}g.Blockly||(g.Blockly={});g.Blockly.Xml||(g.Blockly.Xml={});g.Blockly.Xml.domToText=Og;g.Blockly.Xml.domToWorkspace=Qg;g.Blockly.Xml.textToDom=Pg;
g.Blockly.Xml.workspaceToDom=Lg;/*

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
function Zg(a,b,c,d,e,h,k){var m=$g;q&&(m=-m);this.er=m*Math.PI/180;this.u=a;this.Xa=b;this.Mk=c;a.de.appendChild(this.dh(b,!(!h||!k)));ah(this,d,e);h&&k||(a=this.Xa.getBBox(),h=a.width+2*bh,k=a.height+2*bh);this.Ic(h,k);ch(this);dh(this);this.ai=!0;z||(v(this.pf,"mousedown",this,this.hr),this.mc&&v(this.mc,"mousedown",this,this.Js))}var bh=6,$g=20,eh=null,fh=null;function gh(){eh&&(w(eh),eh=null);fh&&(w(fh),fh=null)}f=Zg.prototype;f.ai=!1;f.Lb=0;f.Ug=0;f.md=0;f.Pe=0;f.R=0;f.Ga=0;f.Yg=!0;
f.dh=function(a,b){this.Mb=u("g",{},null);var c=u("g",{filter:"url(#blocklyEmboss)"},this.Mb);this.kj=u("path",{},c);this.pf=u("rect",{"class":"blocklyDraggable",x:0,y:0,rx:bh,ry:bh},c);b?(this.mc=u("g",{"class":q?"blocklyResizeSW":"blocklyResizeSE"},this.Mb),c=2*bh,u("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.mc),u("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.mc),u("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.mc)):this.mc=
null;this.Mb.appendChild(a);return this.Mb};f.hr=function(a){hh(this);gh();$b(a)||ih(a)||(jh(kh),this.Uj=q?this.md+a.clientX:this.md-a.clientX,this.zr=this.Pe-a.clientY,eh=v(document,"mouseup",this,gh),fh=v(document,"mousemove",this,this.ir),hg(),a.stopPropagation())};f.ir=function(a){this.Yg=!1;this.md=q?this.Uj-a.clientX:this.Uj+a.clientX;this.Pe=this.zr+a.clientY;ch(this);dh(this)};
f.Js=function(a){hh(this);gh();$b(a)||(jh(kh),this.Is=q?this.R+a.clientX:this.R-a.clientX,this.Hs=this.Ga-a.clientY,eh=v(document,"mouseup",this,gh),fh=v(document,"mousemove",this,this.Ks),hg(),a.stopPropagation())};f.Ks=function(a){this.Yg=!1;var b=this.Is,c=this.Hs+a.clientY,b=q?b-a.clientX:b+a.clientX;this.Ic(b,c);q&&ch(this)};function hh(a){a.Mb.parentNode.appendChild(a.Mb)}function ah(a,b,c){a.Lb=b;a.Ug=c;a.ai&&ch(a)}
function ch(a){a.Mb.setAttribute("transform","translate("+(q?a.Lb-a.md-a.R:a.Lb+a.md)+", "+(a.Pe+a.Ug)+")")}f.$c=function(){return{width:this.R,height:this.Ga}};
f.Ic=function(a,b){var c=2*bh;a=Math.max(a,c+45);b=Math.max(b,c+18);this.R=a;this.Ga=b;this.pf.setAttribute("width",a);this.pf.setAttribute("height",b);this.mc&&(q?this.mc.setAttribute("transform","translate("+2*bh+", "+(b-c)+") scale(-1 1)"):this.mc.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.ai){if(this.Yg){var c=-this.R/4,d=-this.Ga-25,e=this.u.wc();q?this.Lb-e.Bb-c-this.R<lh?c=this.Lb-e.Bb-this.R-lh:this.Lb-e.Bb-c>e.wa&&(c=this.Lb-e.Bb-e.wa):this.Lb+c<e.Bb?c=e.Bb-this.Lb:
e.Bb+e.wa<this.Lb+c+this.R+10+lh&&(c=e.Bb+e.wa-this.Lb-this.R-lh);this.Ug+d<e.Mc&&(d=this.Mk.getBBox().height);this.md=c;this.Pe=d}ch(this);dh(this)}mh(this.Mb,"resize")};
function dh(a){var b=[],c=a.R/2,d=a.Ga/2,e=-a.md,h=-a.Pe;if(c==e&&d==h)b.push("M "+c+","+d);else{h-=d;e-=c;q&&(e*=-1);var k=Math.sqrt(h*h+e*e),m=Math.acos(e/k);0>h&&(m=2*Math.PI-m);var p=m+Math.PI/2;p>2*Math.PI&&(p-=2*Math.PI);var y=Math.sin(p),x=Math.cos(p),E=a.$c(),p=(E.width+E.height)/10,p=Math.min(p,E.width,E.height)/2,E=1-8/k,e=c+E*e,h=d+E*h,E=c+p*x,B=d+p*y,c=c-p*x,d=d-p*y,y=m+a.er;y>2*Math.PI&&(y-=2*Math.PI);m=Math.sin(y)*k/4;k=Math.cos(y)*k/4;b.push("M"+E+","+B);b.push("C"+(E+k)+","+(B+m)+
" "+e+","+h+" "+e+","+h);b.push("C"+e+","+h+" "+(c+k)+","+(d+m)+" "+c+","+d)}b.push("z");a.kj.setAttribute("d",b.join(" "))}f.j=function(a){this.pf.setAttribute("fill",a);this.kj.setAttribute("fill",a)};f.m=function(){gh();Vb(this.Mb);this.Mk=this.Xa=this.u=this.Mb=null};/*

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
function nh(a){this.u=a}f=nh.prototype;f.ne=47;f.Bg=45;f.je=15;f.Bn=35;f.Mi=35;f.hf=25;f.Sd=!1;f.o=null;f.zg=null;f.Kh=0;f.Cc=0;f.mk=0;f.Uk=0;
f.H=function(){this.o=u("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=u("clipPath",{id:"blocklyTrashBodyClipPath"},this.o);u("rect",{width:this.ne,height:this.Bg,y:this.je},a);u("image",{width:oh,height:ph,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.o).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",qh+rh);a=u("clipPath",{id:"blocklyTrashLidClipPath"},this.o);u("rect",{width:this.ne,height:this.je},a);this.zg=u("image",{width:oh,height:ph,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.o);this.zg.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",qh+rh);this.Vg();return this.o};f.g=function(){sh(this,!1);this.Ec();v(window,"resize",this,this.Ec)};f.m=function(){this.o&&(Vb(this.o),this.o=null);this.u=this.zg=null;g.clearTimeout(this.Kh)};f.Ec=function(){var a=this.u.wc();a&&(this.mk=q?this.Mi:a.wa+a.rb-this.ne-this.Mi,this.Uk=a.Ua+a.sb-(this.Bg+this.je)-this.Bn,this.o.setAttribute("transform","translate("+this.mk+","+this.Uk+")"))};
f.Be=function(){var a=th(this.o);return new oc(a.x-this.hf,a.y-this.hf,this.ne+2*this.hf,this.Bg+this.je+2*this.hf)};function sh(a,b){a.Sd!=b&&(g.clearTimeout(a.Kh),a.Sd=b,a.Vg())}f.Vg=function(){this.Cc+=this.Sd?.2:-.2;this.Cc=Math.min(Math.max(this.Cc,0),1);var a=45*this.Cc;this.zg.setAttribute("transform","rotate("+(q?-a:a)+", "+(q?4:this.ne-4)+", "+(this.je-2)+")");this.o.style.opacity=.2+.2*this.Cc;if(0<this.Cc||1>this.Cc)this.Kh=sg(this.Vg,20,this)};f.close=function(){sh(this,!1)};/*

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
function uh(a){this.u=a;this.ma=null;this.Ee=new vh(a,!0,!0);this.cf=new vh(a,!1,!0);this.re=u("rect",{height:lh,width:lh,style:"fill: #fff"},null);wh(this.re,a.de)}uh.prototype.m=function(){w(this.fg);this.fg=null;Vb(this.re);this.ma=this.u=this.re=null;this.Ee.m();this.Ee=null;this.cf.m();this.cf=null};
uh.prototype.resize=function(){var a=this.u.wc();if(a){var b=!1,c=!1;this.ma&&this.ma.wa==a.wa&&this.ma.Ua==a.Ua&&this.ma.sb==a.sb&&this.ma.rb==a.rb?(this.ma&&this.ma.Fd==a.Fd&&this.ma.Bb==a.Bb&&this.ma.ic==a.ic||(b=!0),this.ma&&this.ma.tb==a.tb&&this.ma.Mc==a.Mc&&this.ma.Nb==a.Nb||(c=!0)):c=b=!0;b&&this.Ee.resize(a);c&&this.cf.resize(a);this.ma&&this.ma.wa==a.wa&&this.ma.rb==a.rb||this.re.setAttribute("x",this.cf.Nc);this.ma&&this.ma.Ua==a.Ua&&this.ma.sb==a.sb||this.re.setAttribute("y",this.Ee.Ag);
this.ma=a}};uh.prototype.set=function(a,b){this.Ee.set(a);this.cf.set(b)};function vh(a,b,c){this.u=a;this.gg=c||!1;this.hb=b;this.dh();b?(this.Jb.setAttribute("height",lh),this.Ba.setAttribute("height",lh-6),this.Ba.setAttribute("y",3)):(this.Jb.setAttribute("width",lh),this.Ba.setAttribute("width",lh-6),this.Ba.setAttribute("x",3));this.uk=v(this.Jb,"mousedown",this,this.ts);this.vk=v(this.Ba,"mousedown",this,this.us)}var xh,yh,lh=15;aa("document.documentElement.ontouchstart")&&(lh=25);f=vh.prototype;
f.m=function(){this.eg();this.fg&&(w(this.fg),this.fg=null);w(this.uk);this.uk=null;w(this.vk);this.vk=null;Vb(this.o);this.u=this.Ba=this.Jb=this.o=null};
f.resize=function(a){if(!a&&(a=this.u.wc(),!a))return;if(this.hb){var b=a.wa;this.gg?b-=lh:this.O(b<a.tb);this.nb=b/a.Fd;if(-Infinity===this.nb||Infinity===this.nb||isNaN(this.nb))this.nb=0;var c=a.wa*this.nb,d=(a.Bb-a.ic)*this.nb;this.Ba.setAttribute("width",Math.max(0,c));this.Nc=a.rb;this.gg&&q&&(this.Nc+=a.rb+lh);this.Ag=a.sb+a.Ua-lh;this.o.setAttribute("transform","translate("+this.Nc+", "+this.Ag+")");this.Jb.setAttribute("width",Math.max(0,b));this.Ba.setAttribute("x",zh(this,d))}else{b=a.Ua;
this.gg?b-=lh:this.O(b<a.tb);this.nb=b/a.tb;if(-Infinity===this.nb||Infinity===this.nb||isNaN(this.nb))this.nb=0;c=a.Ua*this.nb;d=(a.Mc-a.Nb)*this.nb;this.Ba.setAttribute("height",Math.max(0,c));this.Nc=a.rb;q||(this.Nc+=a.wa-lh);this.Ag=a.sb;this.o.setAttribute("transform","translate("+this.Nc+", "+this.Ag+")");this.Jb.setAttribute("height",Math.max(0,b));this.Ba.setAttribute("y",zh(this,d))}Ah(this)};
f.dh=function(){this.o=u("g",{},null);this.Jb=u("rect",{"class":"blocklyScrollbarBackground"},this.o);var a=Math.floor((lh-6)/2);this.Ba=u("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.o);wh(this.o,this.u.de)};f.J=function(){return"none"!=this.o.getAttribute("display")};f.O=function(a){if(a!=this.J()){if(this.gg)throw"Unable to toggle visibility of paired scrollbars.";a?this.o.setAttribute("display","block"):(this.u.Kk({x:0,y:0}),this.o.setAttribute("display","none"))}};
f.ts=function(a){this.eg();if(!$b(a)){var b=Bh(a),b=this.hb?b.x:b.y,c=th(this.Ba),c=this.hb?c.x:c.y,d=parseFloat(this.Ba.getAttribute(this.hb?"width":"height")),e=parseFloat(this.Ba.getAttribute(this.hb?"x":"y")),h=.95*d;b<=c?e-=h:b>=c+d&&(e+=h);this.Ba.setAttribute(this.hb?"x":"y",zh(this,e));Ah(this)}a.stopPropagation()};
f.us=function(a){this.eg();$b(a)||(this.Ps=parseFloat(this.Ba.getAttribute(this.hb?"x":"y")),this.Rs=this.hb?a.clientX:a.clientY,xh=v(document,"mouseup",this,this.eg),yh=v(document,"mousemove",this,this.ws));a.stopPropagation()};f.ws=function(a){this.Ba.setAttribute(this.hb?"x":"y",zh(this,this.Ps+((this.hb?a.clientX:a.clientY)-this.Rs)));Ah(this)};f.eg=function(){Ch();hg(!0);xh&&(w(xh),xh=null);yh&&(w(yh),yh=null)};
function zh(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.hb?"width":"height",d=parseFloat(a.Jb.getAttribute(c)),c=parseFloat(a.Ba.getAttribute(c));b=Math.min(b,d-c)}return b}function Ah(a){var b=parseFloat(a.Ba.getAttribute(a.hb?"x":"y")),c=parseFloat(a.Jb.getAttribute(a.hb?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.hb?c.x=b:c.y=b;a.u.Kk(c)}f.set=function(a){this.Ba.setAttribute(this.hb?"x":"y",a*this.nb);Ah(this)};
function wh(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function Dh(a,b){Dh.k.constructor.call(this);this.wc=a;this.Kk=b;var c=[];c[1]=new Eh;c[2]=new Eh;c[3]=new Eh;c[4]=new Eh;this.mr=c}n(Dh,Ja);f=Dh.prototype;f.B=!0;f.ik=!1;f.nh=!1;f.scrollX=0;f.scrollY=0;f.Ab=null;f.ph=null;f.Hc=null;f.H=function(){this.o=u("g",{},null);this.aa=u("g",{},this.o);this.de=u("g",{},this.o);this.wb();return this.o};
f.m=function(){this.B=!1;Dh.k.m.call(this);this.o&&(Vb(this.o),this.o=null);this.de=this.aa=null;this.V&&(this.V.m(),this.V=null);this.Ab&&(this.Ab.m(),this.Ab=null)};function Fh(){var a=A;if(sa&&!z){a.Ab=new nh(a);var b=a.Ab.H();a.o.insertBefore(b,a.aa);a.Ab.g()}}f.pe=function(a){Dh.k.pe.call(this,a);Gh&&this==A&&-1==Hh.indexOf(a)&&Hh.push(a)};f.og=function(a){Dh.k.og.call(this,a);Gh&&this==A&&Hh.Fu(a)};f.clear=function(){hg();Dh.k.clear.call(this)};f.Kf=function(){return this.wc().wa};
f.F=function(){for(var a=this.cb(),b=0,c;c=a[b];b++)c.ad().length||c.F()};function Ih(a,b){a.xi=b;a.yi&&(w(a.yi),a.yi=null);b&&(a.yi=v(a.aa,"blocklySelectChange",a,function(){this.xi=!1}))}function Jh(a){var b=A;b.xi&&0!=ac&&Ih(b,!1);if(b.xi){var c=null;if(a&&(c=La(b,a),!c))return;Ih(b,!1);c?c.select():Kh&&Lh();setTimeout(function(){Ih(b,!0)},1)}}f.wb=function(){if(this.B){this.ph&&clearTimeout(this.ph);var a=this.aa;a&&(this.ph=setTimeout(function(){mh(a,"blocklyWorkspaceChange")},0))}};
function Mh(a,b){var c=Bh(b),c=new mc(c.x,c.y);if(a.Oj){if(a.Oj.contains(c))return sh(a.Ab,!0),jh(Nh),!0;sh(a.Ab,!1)}if(a.Nj&&a.Nj.contains(c))return jh(Nh),!0;jh(kh);return!1}Dh.prototype.clear=Dh.prototype.clear;/*

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
function Oh(a){this.I=a}f=Oh.prototype;f.ka=null;f.dd=0;f.ed=0;f.Vc=function(){this.Ha||(this.Ha=u("g",{},null),this.I.W().appendChild(this.Ha),v(this.Ha,"mouseup",this,this.Ch),this.qc())};f.m=function(){Vb(this.Ha);this.Ha=null;this.O(!1);this.I=null};f.qc=function(){this.I.ac?Xb(this.Ha,"blocklyIconGroup"):Wb(this.Ha,"blocklyIconGroup")};f.J=function(){return!!this.ka};f.Ch=function(){this.I.ac||this.O(!this.J())};f.Lc=function(){if(this.J()){var a=Zf($f(this.I.bh));this.ka.j(a)}};
function Ph(a){var b=a.I.ga(),c=Qh(a.Ha),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.dd||b!==a.ed)a.dd=d,a.ed=b,a.J()&&ah(a.ka,d,b)};/*

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
function Rh(a){Rh.k.constructor.call(this,null);this.zk=[];for(var b=0;b<a.length;b++){var c=D("block",{type:a[b]});this.zk[b]=c}}n(Rh,Oh);f=Rh.prototype;f.he=0;f.df=0;function Sh(a){a.Qd||(Oh.prototype.Vc.call(a),u("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.Ha),a.Qd=u("text",{"class":"blocklyIconMark",x:8,y:12},a.Ha),a.Qd.appendChild(document.createTextNode("\u2605")))}f.Ch=function(a){this.I.uc&&!z&&Oh.prototype.Ch.call(this,a)};
f.eh=function(){this.vd=u("svg",{x:bh,y:bh},null);u("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.vd);var a=this;this.u=new Dh(function(){var b=0;q&&(b+=a.he);return{Ua:a.df,wa:0,sb:0,rb:b}},null);this.u.V=new Th;this.u.V.qe=!1;this.vd.appendChild(this.u.V.H());this.vd.appendChild(this.u.H());return this.vd};f.qc=function(){this.I.uc&&!z?Oh.prototype.qc.call(this):(this.O(!1),Xb(this.Ha,"blocklyIconGroup"))};
f.qg=function(){var a=2*bh,b=this.u.aa.getBBox(),c=Uh(this.u.V),d;d=q?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.tb+20);d+=3*a;if(Math.abs(this.he-d)>a||Math.abs(this.df-b)>a)this.he=d,this.df=b,this.ka.Ic(d+a,b+a),this.vd.setAttribute("width",this.he),this.vd.setAttribute("height",this.df);q&&this.u.aa.setAttribute("transform","translate("+this.he+",0)")};
f.O=function(a){if(a!=this.J())if(a){this.ka=new Zg(this.I.t,this.eh(),this.I.ec,this.dd,this.ed,null,null);var b=this;this.u.V.g(this.u);this.u.V.show(this.zk);this.nc=this.I.Gd(this.u);a=this.nc.Eb();for(var c=0,d;d=a[c];c++)d.F();this.nc.cc=!1;Ug(this.nc,!1);a=2*this.u.V.La;c=this.u.V.R+a;q&&(c=-c);this.nc.moveBy(c,a);this.I.Qe&&(this.I.Qe(this.nc),this.mi=v(this.I.t.aa,"blocklyWorkspaceChange",this.I,function(){b.I.Qe(b.nc)}));this.qg();v(this.u.aa,"blocklyWorkspaceChange",this.I,function(){if(0==
ac)for(var a=Ka(b.u,!1),c=0,d;d=a[c];c++){var m=d.ga(),p=Vh(d);20>m.y+p.height&&d.moveBy(0,20-p.height-m.y)}b.nc.t==b.u&&(a=b.I.B,b.I.B=!1,b.I.Dd(b.nc),b.I.B=a,b.I.ra(),b.I.B&&b.I.F(),b.qg(),b.I.t.wb())});this.Lc()}else this.vd=null,this.u.m(),this.nc=this.u=null,this.ka.m(),this.ka=null,this.df=this.he=0,this.mi&&(w(this.mi),this.mi=null)};f.m=function(){this.I.Gb=null;Oh.prototype.m.call(this)};/*

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
function Wh(a,b){this.h=a;this.w=null;this.type=b;this.ea=this.Rb=0;this.$b=!1;this.tc=this.h.t.mr}f=Wh.prototype;f.m=function(){if(this.w)throw"Disconnect connection before disposing of it.";this.$b&&Xh(this.tc[this.type],this);this.$b=!1;Yh==this&&(Yh=null);Zh==this&&(Zh=null)};function $h(a){return 1==a.type||3==a.type}
function Xg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.t!==b.h.t)throw"Blocks are on different workspaces.";if(ai[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.w)throw"Source connection already connected (value).";if(b.w){var c=I(b);c.ab(null);if(!c.G)throw"Orphan block does not have an output connection.";for(var d=a.h;d=bi(d,c);)if(I(d))d=I(d);else{Xg(d,c.G);c=null;break}c&&setTimeout(function(){ci(c.G,b)},di)}}else{if(a.w)throw"Source connection already connected (block).";
if(b.w){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=I(b);c.ab(null);if(!c.K)throw"Orphan block does not have a previous connection.";for(d=a.h;d.C;)if(d.C.w)d=Ng(d);else{ei(c.K,d.C)&&(Xg(d.C,c.K),c=null);break}c&&setTimeout(function(){ci(c.K,b)},di)}}var e;$h(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.w=b;b.w=a;e.ab(d);d.B&&fi(d);e.B&&fi(e);d.B&&e.B&&(3==a.type||4==a.type?e.F():d.F())}
function bi(a,b){for(var c=!1,d=0;d<a.T.length;d++){var e=a.T[d].s;if(e&&1==e.type&&ei(b.G,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.w;if(!a)throw"Source connection not connected.";if(a.w!=this)throw"Target connection not connected to source connection.";this.w=a.w=null;var b;$h(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.B&&b.F();a.B&&(fi(a),a.F())};function I(a){return a.w?a.w.h:null}
function ci(a,b){if(0==ac){var c=gi(a.h);if(!c.ac){var d=!1;if(!c.cc||z){c=gi(b.h);if(!c.cc||z)return;b=a;d=!0}c.W().parentNode.appendChild(c.W());var e=b.Rb+hi-a.Rb,h=b.ea+hi-a.ea;d&&(h=-h);q&&(e=-e);c.moveBy(e,h)}}}f.moveTo=function(a,b){this.$b&&Xh(this.tc[this.type],this);this.Rb=a;this.ea=b;ii(this.tc[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.Rb+a,this.ea+b)};
f.Ah=function(){var a;1==this.type||2==this.type?(a=q?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=q?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.ga();Wh.Of=u("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.Rb-b.x)+", "+(this.ea-b.y)+")"},this.h.W())};
function ji(a){var b=Math.round(a.w.Rb-a.Rb),c=Math.round(a.w.ea-a.ea);if(0!=b||0!=c){a=I(a);var d=a.W();if(!d)throw"block is not rendered.";d=Qh(d);a.W().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");ki(a,-b,-c)}}
function li(a,b,c,d){function e(a){var c=h[a];if((2==c.type||4==c.type)&&c.w||1==c.type&&c.w&&(!I(c).cc||z)||!ei(E,c))return!0;c=c.h;do{if(x==c)return!0;c=c.getParent()}while(c);var d=k-h[a].Rb,c=m-h[a].ea,d=Math.sqrt(d*d+c*c);d<=b&&(y=h[a],b=d);return c<b}if(a.w)return{s:null,Bk:b};var h=a.tc[ai[a.type]],k=a.Rb+c,m=a.ea+d;c=0;for(var p=d=h.length-2;c<p;)h[p].ea<m?c=p:d=p,p=Math.floor((c+d)/2);d=c=p;var y=null,x=a.h,E=a;if(h.length){for(;0<=c&&e(c);)c--;do d++;while(d<h.length&&e(d))}return{s:y,Bk:b}}
function ei(a,b){if(!a.Cd||!b.Cd)return!0;for(var c=0;c<a.Cd.length;c++)if(-1!=b.Cd.indexOf(a.Cd[c]))return!0;return!1}f.v=function(a){a?(ea(a)||(a=[a]),this.Cd=a,this.w&&!ei(this,this.w)&&($h(this)?I(this).ab(null):this.h.ab(null),this.h.Ma())):this.Cd=null;return this};
function mi(a){var b=hi;function c(a){var c=e-d[a].Rb,k=h-d[a].ea;Math.sqrt(c*c+k*k)<=b&&p.push(d[a]);return k<b}var d=a.tc[ai[a.type]],e=a.Rb,h=a.ea;a=0;for(var k=d.length-2,m=k;a<m;)d[m].ea<h?a=m:k=m,m=Math.floor((a+k)/2);var k=a=m,p=[];if(d.length){for(;0<=a&&c(a);)a--;do k++;while(k<d.length&&c(k))}return p}
function ni(a){a.$b||ii(a.tc[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=I(a)){var c;a.isCollapsed()?(c=[],a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K)):c=oi(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,ni(c[d]));0==b.length&&(b[0]=a)}return b}function Eh(){}Eh.prototype=[];
function ii(a,b){if(b.$b)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].ea<b.ea)c=e+1;else if(a[e].ea>b.ea)d=e;else{c=e;break}}a.splice(c,0,b);b.$b=!0}
function Xh(a,b){if(!b.$b)throw"Connection not in database.";b.$b=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].ea<b.ea?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].ea==b.ea;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].ea==b.ea);throw"Unable to find connection in connectionDB.";};/*

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
var C={Ys:0,Dr:function(){var a=(++C.Ys).toString();return Gh?pi(a):a},iu:function(a){var b={g:function(){var b=this;this.j(a.tj);this.p=a.p;"string"==typeof a.kb?this.i(a.kb):"function"==typeof a.kb&&this.i(function(){return a.kb(b)});"undefined"!=a.Bs?L(this,!0,a.Bs):(M(this,"undefined"==typeof a.Ds?!0:a.Ds),N(this,"undefined"==typeof a.ps?!0:a.ps));var d=[];d.push(a.text);a.dr&&a.dr.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
qb("addTemplate() can only handle value inputs.")});d.push(1);a.Zr&&this.Ku(a.Zr);qi.prototype.sa.apply(this,d)}};b.Ia=a.Nu?function(){var b=a.ms?a.Bu():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.ms;C[a.mu]=b}};/*

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
function ri(a){ri.k.constructor.call(this,a);this.Vc()}n(ri,Oh);f=ri.prototype;f.Ka="";f.R=160;f.Ga=80;f.Vc=function(){Oh.prototype.Vc.call(this);u("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.Ha);this.Qd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Ha);this.Qd.appendChild(document.createTextNode("?"))};
f.eh=function(){this.xe=u("foreignObject",{x:bh,y:bh},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.qb=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.qb.className="blocklyCommentTextarea";this.qb.setAttribute("dir",q?"RTL":"LTR");a.appendChild(this.qb);this.xe.appendChild(a);v(this.qb,"mouseup",this,this.Vs);return this.xe};
f.qc=function(){this.J()&&(this.O(!1),this.O(!0));Oh.prototype.qc.call(this)};f.qg=function(){var a=this.ka.$c(),b=2*bh;this.xe.setAttribute("width",a.width-b);this.xe.setAttribute("height",a.height-b);this.qb.style.width=a.width-b-4+"px";this.qb.style.height=a.height-b-4+"px"};
f.O=function(a){if(a!=this.J())if((!this.I.uc||z)&&!this.qb||r)si.prototype.O.call(this,a);else{var b=this.fb(),c=this.$c();a?(this.ka=new Zg(this.I.t,this.eh(),this.I.ec,this.dd,this.ed,this.R,this.Ga),v(this.ka.Mb,"resize",this,this.qg),this.Lc(),this.Ka=null):(this.ka.m(),this.xe=this.qb=this.ka=null);this.ia(b);this.Ic(c.width,c.height)}};f.Vs=function(){hh(this.ka);this.qb.focus()};f.$c=function(){return this.J()?this.ka.$c():{width:this.R,height:this.Ga}};
f.Ic=function(a,b){this.qb?this.ka.Ic(a,b):(this.R=a,this.Ga=b)};f.fb=function(){return this.qb?this.qb.value:this.Ka};f.ia=function(a){this.qb?this.qb.value=a:this.Ka=a};f.m=function(){this.I.ba=null;Oh.prototype.m.call(this)};/*

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
var ti=!1,ui=0,vi=0,wi={x:0,y:0},xi=null,yi=null,zi=null,Ai=null,Bi=null,Ci=null;function Di(){var a=u("g",{"class":"blocklyHidden"},null);zi=a;Ci=u("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Bi=u("rect",{"class":"blocklyTooltipBackground"},a);Ai=u("text",{"class":"blocklyTooltipText"},a);return a}function Ei(a){v(a,"mouseover",null,Fi);v(a,"mouseout",null,Gi);v(a,"mousemove",null,Hi)}function Fi(a){for(a=a.target;!l(a.kb)&&!ha(a.kb);)a=a.kb;xi!=a&&(Ii(),yi=null,xi=a);clearTimeout(ui)}
function Gi(){ui=setTimeout(function(){yi=xi=null;Ii()},1);clearTimeout(vi)}function Hi(a){xi&&xi.kb&&0==ac&&!Ji&&(ti?(a=Bh(a),10<Math.sqrt(Math.pow(wi.x-a.x,2)+Math.pow(wi.y-a.y,2))&&Ii()):yi!=xi&&(clearTimeout(vi),wi=Bh(a),vi=setTimeout(Ki,1E3)))}function Ii(){ti&&(ti=!1,zi&&(zi.style.display="none"));clearTimeout(vi)}
function Ki(){yi=xi;if(zi){Zb(Ai);var a=xi.kb;ha(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,h,k=1;do{e=d;h=b;for(var b=[],m=c.length/k,p=1,d=0;d<c.length-1;d++)p<(d+1.5)/m?(p++,b[d]=!0):b[d]=!1;for(var b=Li(c,b,a),d=Mi(c,b,a),m=c,p=[],y=0;y<m.length;y++)p.push(m[y]),void 0!==b[y]&&p.push(b[y]?"\n":" ");b=p.join("");k++}while(d>e);a=h}a=a.split("\n");for(c=0;c<a.length;c++)u("tspan",{dy:"1em",
x:5},Ai).appendChild(document.createTextNode(a[c]));ti=!0;zi.style.display="block";a=Ai.getBBox();c=10+a.width;e=a.height;Bi.setAttribute("width",c);Bi.setAttribute("height",e);Ci.setAttribute("width",c);Ci.setAttribute("height",e);if(q)for(e=a.width,h=0;k=Ai.childNodes[h];h++)k.setAttribute("text-anchor","end"),k.setAttribute("x",e+5);e=wi.x;e=q?e-(0+c):e+0;c=wi.y+10;h=Ni();c+a.height>h.height&&(c-=a.height+20);q?e=Math.max(5,e):e+a.width>h.width-10&&(e=h.width-a.width-10);zi.setAttribute("transform",
"translate("+e+","+c+")")}}function Mi(a,b,c){for(var d=[0],e=[],h=0;h<a.length;h++)d[d.length-1]+=a[h].length,!0===b[h]?(d.push(0),e.push(a[h].charAt(a[h].length-1))):!1===b[h]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(h=b=0;h<d.length;h++)b-=2*Math.pow(Math.abs(c-d[h]),1.5),b-=Math.pow(a-d[h],1.5),-1!=".?!".indexOf(e[h])?b+=c/3:-1!=",;)]}".indexOf(e[h])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Li(a,b,c){for(var d=Mi(a,b,c),e,h=0;h<b.length-1;h++)if(b[h]!=b[h+1]){var k=[].concat(b);k[h]=!k[h];k[h+1]=!k[h+1];var m=Mi(a,k,c);m>d&&(d=m,e=k)}return e?Li(a,e,c):b};/*

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
function Oi(a){this.h=null;this.Aa=new Sb(0,25);this.ia(a)}n(Oi,Tb);f=Oi.prototype;f.clone=function(){return new Oi(this.fb())};f.xd=!1;f.g=function(a){this.h||(this.h=a,this.Ja=u("text",{"class":"blocklyText"},null),a.W().appendChild(this.Ja),this.Ja.kb=this.h,Ei(this.Ja),Ub(this))};f.m=function(){Vb(this.Ja);this.Ja=null};f.W=function(){return this.Ja};f.i=function(a){this.Ja.kb=a};/*

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
function Pi(a,b,c,d){this.type=a;this.name=b;this.h=c;this.s=d;this.Pa=[];this.align=-1;this.oa=!0}function O(a,b,c){if(!b&&!c)return a;l(b)&&(b=new Oi(b));a.h.B&&b.g(a.h);b.name=c;b.Vh&&O(a,b.Vh);a.Pa.push(b);b.ui&&O(a,b.ui);a.h.B&&(a.h.F(),a.h.Ma());return a}f=Pi.prototype;f.J=function(){return this.oa};
f.O=function(a){var b=[];if(this.oa==a)return b;for(var c=(this.oa=a)?"block":"none",d=0,e;e=this.Pa[d];d++)e.O(a);if(this.s){if(a)b=ni(this.s);else if(d=this.s,d.$b&&Xh(d.tc[d.type],d),d.w){e=I(d).Eb();for(var h=0;h<e.length;h++){for(var k=e[h],m=oi(k,!0),p=0;p<m.length;p++){var y=m[p];y.$b&&Xh(d.tc[y.type],y)}k=Qi(k);for(m=0;m<k.length;m++)k[m].O(!1)}}if(d=I(this.s))d.W().style.display=c,a||(d.B=!1)}return b};f.v=function(a){if(!this.s)throw"This input does not have a connection.";this.s.v(a);return this};
function Ri(a,b){a.align=b;a.h.B&&a.h.F();return a}f.g=function(){for(var a=0;a<this.Pa.length;a++)this.Pa[a].g(this.h)};f.m=function(){for(var a=0,b;b=this.Pa[a];a++)b.m();this.s&&this.s.m();this.h=null};/*

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
function si(a){si.k.constructor.call(this,a);this.Vc()}n(si,Oh);f=si.prototype;f.Ka="";f.Vc=function(){Oh.prototype.Vc.call(this);u("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.Ha);this.Qd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Ha);this.Qd.appendChild(document.createTextNode("!"))};
f.O=function(a){if(a!=this.J())if(a){var b=this.Ka;a=u("text",{"class":"blocklyText blocklyBubbleText",y:bh},null);for(var b=b.split("\n"),c=0;c<b.length;c++)u("tspan",{dy:"1em",x:bh},a).appendChild(document.createTextNode(b[c]));this.ka=new Zg(this.I.t,a,this.I.ec,this.dd,this.ed,null,null);if(q)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+bh);this.Lc();a=this.ka.$c();this.ka.Ic(a.width,a.height)}else this.ka.m(),this.ka=null};
f.ia=function(a){this.Ka!=a&&(this.Ka=a,this.J()&&(this.O(!1),this.O(!0)))};f.m=function(){this.I.gc=null;Oh.prototype.m.call(this)};/*

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
function qi(){}function hc(a,b){if(Gh)return Si.create(qi,a,b);var c=a.B?new Ti:new qi;c.initialize(a,b);return c}f=qi.prototype;f.initialize=function(a,b){this.id=C.Dr();a.pe(this);this.fill(a,b)};
f.fill=function(a,b){this.K=this.C=this.G=null;this.T=[];this.disabled=this.B=this.Le=!1;this.kb="";this.contextMenu=!0;this.hd=null;this.Ub=[];this.uc=this.cc=this.Id=!0;this.Uc=!1;this.ba=null;this.$k=new mc(0,0);this.t=a;this.ac=a.ik;if(b){this.type=b;var c=C[b],d;for(d in c)this[d]=c[d]}ha(this.g)&&this.g()};function Sg(a,b){return Gh?Ui.get(a):La(b,a)}
f.m=function(a,b,c){Vi(this,a,!1);this.t&&!c&&(this.t.og(this),this.t=null);Kh==this&&(Kh=null);for(a=this.Ub.length-1;0<=a;a--)this.Ub[a].m(!1);for(a=0;b=this.T[a];a++)b.m();this.T.length=0;b=oi(this,!0);for(a=0;a<b.length;a++)c=b[a],c.w&&c.disconnect(),b[a].m();if(Gh&&!Wi)Ui["delete"](this.id.toString())};
function Vi(a,b,c){c=c&&!!a.getParent();if(a.G)a.G.w&&a.ab(null);else{var d=null;a.K&&a.K.w&&(d=a.K.w,a.ab(null));var e=Ng(a);b&&e&&(b=a.C.w,e.ab(null),d&&ei(d,b)&&Xg(d,b))}c&&a.moveBy(hi*(q?-1:1),2*hi)}function oi(a,b){var c=[];if(b||a.B)if(a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K),b||!a.Uc)for(var d=0,e;e=a.T[d];d++)e.s&&c.push(e.s);return c}
f.Ma=function(){if(0==ac){var a=gi(this);if(!a.ac)for(var b=oi(this,!1),c=0;c<b.length;c++){var d=b[c];d.w&&$h(d)&&I(d).Ma();for(var e=mi(d),h=0;h<e.length;h++){var k=e[h];d.w&&k.w||gi(k.h)!=a&&($h(d)?ci(k,d):ci(d,k))}}}};f.getParent=function(){return this.hd};function Xi(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Ng(a)==b);return a}}function Ng(a){return a.C&&I(a.C)}function gi(a){var b=a;do a=b,b=a.hd;while(b);return a}f.ad=function(){return this.Ub};
f.ab=function(a){if(this.hd){for(var b=this.hd.Ub,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.hd=null;this.K&&this.K.w&&this.K.disconnect();this.G&&this.G.w&&this.G.disconnect()}else xb(Ka(this.t,!1),this)&&this.t.og(this);(this.hd=a)?a.Ub.push(this):this.t.pe(this)};f.Eb=function(){for(var a=[this],b,c=0;b=this.Ub[c];c++)a.push.apply(a,b.Eb());return a};function Ug(a,b){a.Id=b;a.Sk&&Yi(a.Sk)}
function Vg(a,b){a.uc=b;for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)h.qc();d=Qi(a);for(c=0;c<d.length;c++)d[c].qc()}f.i=function(a){this.kb=a};f.j=function(a){this.bh=a;this.B&&this.Lc()};function Zi(a,b){for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Pa[e];e++)if(h.name===b)return h;return null}function P(a,b){var c=Zi(a,b);return c?c.Fa():null}function ic(a,b,c){Zi(a,c).ja(b)}
function M(a,b,c){a.K&&(a.K.m(),a.K=null);b&&(void 0===c&&(c=null),a.K=new Wh(a,4),a.K.v(c));a.B&&(a.F(),a.Ma())}function N(a,b,c){a.C&&(a.C.m(),a.C=null);b&&(void 0===c&&(c=null),a.C=new Wh(a,3),a.C.v(c));a.B&&(a.F(),a.Ma())}function L(a,b,c){a.G&&(a.G.m(),a.G=null);b&&(void 0===c&&(c=null),a.G=new Wh(a,2),a.G.v(c));a.B&&(a.F(),a.Ma())}function Tg(a,b){a.Le=b;a.B&&(a.F(),a.Ma(),a.t.wb())}f.Te=function(a){this.disabled=a};function $i(a){for(;;){a=Xi(a);if(!a)return!1;if(a.disabled)return!0}}
f.isCollapsed=function(){return this.Uc};f.pd=function(a){this.Uc=a};f.toString=function(a){for(var b=[],c=0,d;d=this.T[c];c++){for(var e=0,h;h=d.Pa[e];e++)b.push(h.fb());d.s&&((d=I(d.s))?b.push(d.toString()):b.push("?"))}b=Pa(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function Q(a,b){return aj(a,1,b)}function R(a,b){return aj(a,5,b||"")}
f.sa=function(a,b){function c(a){a instanceof Tb?O(this,a):O(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.sa.Pp),h=[],k=0;k<e.length;k+=2){var m=Pa(e[k]),p=void 0;m&&h.push(new Oi(m));if((m=e[k+1])&&"%"==m.charAt(0)){var m=parseInt(m.substring(1),10),y=arguments[m];y[1]instanceof Tb?h.push([y[0],y[1]]):p=Ri(Q(this,y[0]).v(y[1]),y[2]);arguments[m]=null}else"\n"==m&&h.length&&(p=R(this));p&&h.length&&(h.forEach(c,p),h=[])}h.length&&(p=Ri(R(this),d),h.forEach(c,
p));for(k=1;k<arguments.length-1;k++);Tg(this,!a.match(this.sa.pm))};f.sa.Pp=/(%\d+|\n)/;f.sa.pm=/%1\s*$/;function aj(a,b,c){var d=null;if(1==b||3==b)d=new Wh(a,b);b=new Pi(b,c,a,d);a.T.push(b);a.B&&(a.F(),a.Ma());return b}function bj(a,b,c){if(b!=c){for(var d=-1,e=c?-1:a.T.length,h=0,k;k=a.T[h];h++)if(k.name==b){if(d=h,-1!=e)break}else if(c&&k.name==c&&(e=h,-1!=d))break;b=d;c=a.T[b];a.T.splice(b,1);b<e&&e--;a.T.splice(e,0,c);a.B&&(a.F(),a.Ma())}}
function S(a,b,c){for(var d=0,e;e=a.T[d];d++)if(e.name==b){e.s&&e.s.w&&I(e.s).ab(null);e.m();a.T.splice(d,1);a.B&&(a.F(),a.Ma());return}c||qb('Input "%s" not found.',b)}function J(a,b){for(var c=0,d;d=a.T[c];c++)if(d.name==b)return d;return null}function cj(a,b){var c=J(a,b);return c&&c.s&&I(c.s)}f.Df=function(){return this.ba||""};f.Se=function(a){this.ba=a};f.sd=function(){};f.ae=function(){};f.ga=function(){return this.$k};f.moveBy=function(a,b){this.$k.translate(a,b)};/*

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
function Th(){var a=this;this.u=new Dh(function(){return Uh(a)},function(b){var c=Uh(a);c&&(ga(b.y)&&(a.u.scrollY=-c.tb*b.y-c.Nb),a.u.aa.setAttribute("transform","translate(0,"+(a.u.scrollY+c.sb)+")"))});this.u.ik=!0;this.Vj=[];this.Ga=this.R=0;this.$g=[];this.bc=[]}var dj,ej,fj,gj,hj,ij;f=Th.prototype;f.qe=!0;f.La=8;f.H=function(){this.o=u("g",{},null);this.Jb=u("path",{"class":"blocklyFlyoutBackground"},this.o);this.o.appendChild(this.u.H());return this.o};
f.m=function(){this.jc();w(this.Vj);this.Vj.length=0;this.od&&(this.od.m(),this.od=null);this.u=null;this.o&&(Vb(this.o),this.o=null);this.Ye=this.Jb=null};function Uh(a){if(!a.J())return null;var b=a.Ga-2*a.La,c=a.R;try{var d=a.u.aa.getBBox()}catch(e){d={height:0,y:0}}return{Ua:b,wa:c,tb:d.height+d.y,Mc:-a.u.scrollY,Nb:0,sb:a.La,rb:0}}
f.g=function(a){this.Ye=a;this.od=new vh(this.u,!1,!1);this.jc();v(window,"resize",this,this.Ec);this.Ec();v(this.o,"wheel",this,this.Zk);v(this.o,"mousewheel",this,this.Zk);v(this.Ye.aa,"blocklyWorkspaceChange",this,this.oh);v(this.o,"mousedown",this,this.dg)};
f.Ec=function(){if(this.J()){var a=this.Ye.wc();if(a){var b=this.R-this.La;q&&(b*=-1);var c=["M "+(q?this.R:0)+",0"];c.push("h",b);c.push("a",this.La,this.La,0,0,q?0:1,q?-this.La:this.La,this.La);c.push("v",Math.max(0,a.Ua-2*this.La));c.push("a",this.La,this.La,0,0,q?0:1,q?this.La:-this.La,this.La);c.push("h",-b);c.push("z");this.Jb.setAttribute("d",c.join(" "));b=a.rb;q&&(b+=a.wa,b-=this.R);this.o.setAttribute("transform","translate("+b+","+a.sb+")");this.Ga=a.Ua;this.od&&this.od.resize()}}};
f.Zk=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Eb&&(b*=10);var c=Uh(this),b=c.Mc+b,b=Math.min(b,c.tb-c.Ua),b=Math.max(b,0);this.od.set(b);a.preventDefault()}};f.J=function(){return this.o&&"block"==this.o.style.display};f.jc=function(){if(this.J()){this.o.style.display="none";for(var a=0,b;b=this.bc[a];a++)w(b);this.bc.length=0;this.Zh&&(w(this.Zh),this.Zh=null)}};
f.show=function(a){this.jc();for(var b=Ka(this.u,!1),c=0,d;d=b[c];c++)d.t==this.u&&d.m(!1,!1);for(var c=0,e;e=this.$g[c];c++)Vb(e);this.$g.length=0;var h=this.La;this.o.style.display="block";var b=[],k=[];if("VARIABLE"==a)cg(b,k,h,this.u);else if("PROCEDURE"==a)gc(b,k,h,this.u);else for(var m=0;d=a[m];m++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Rg(this.u,d),b.push(d),k.push(3*h));a=h;for(m=0;d=b[m];m++){c=d.Eb();e=0;for(var p;p=c[e];e++)p.ac=!0,p.Se(null);d.F();p=d.W();e=Vh(d);c=q?0:h+8;d.moveBy(c,
a);a+=e.height+k[m];e=u("rect",{"fill-opacity":0},null);this.u.aa.insertBefore(e,d.W());d.we=e;this.$g[m]=e;this.qe?this.bc.push(v(p,"mousedown",null,jj(this,d))):this.bc.push(v(p,"mousedown",null,kj(this,d)));this.bc.push(v(p,"mouseover",d,d.Qg));this.bc.push(v(p,"mouseout",d,d.ng));this.bc.push(v(e,"mousedown",null,jj(this,d)));this.bc.push(v(e,"mouseover",d,d.Qg));this.bc.push(v(e,"mouseout",d,d.ng))}this.bc.push(v(this.Jb,"mouseover",this,function(){for(var a=Ka(this.u,!1),b=0,c;c=a[b];b++)c.ng()}));
this.R=0;this.Ck();this.oh();lj(window,"resize");this.Zh=v(this.u.aa,"blocklyWorkspaceChange",this,this.Ck);this.u.wb()};
f.Ck=function(){for(var a=0,b=this.La,c=Ka(this.u,!1),d=0,e;e=c[d];d++)var h=Vh(e),a=Math.max(a,h.width);a+=b+8+b/2+lh;if(this.R!=a){for(d=0;e=c[d];d++){var h=Vh(e),k=e.ga();if(q){var m=a-b-8-k.x;e.moveBy(m,0);k.x+=m}e.we&&(e.we.setAttribute("width",h.width),e.we.setAttribute("height",h.height),e.we.setAttribute("x",q?k.x-h.width:k.x),e.we.setAttribute("y",k.y))}this.R=a;mh(window,"resize")}};
function kj(a,b){return function(c){mj();hg();$b(c)?nj(b,c):(Ch(),jh(kh),dj=c,ej=b,fj=a,gj=v(document,"mouseup",this,mj),hj=v(document,"mousemove",this,a.vs));c.stopPropagation()}}f.dg=function(a){$b(a)||(hg(!0),oj(),this.Nk=a.clientY,ij=v(document,"mousemove",this,this.Qh),gj=v(document,"mouseup",this,oj),a.preventDefault(),a.stopPropagation())};f.Qh=function(a){var b=a.clientY-this.Nk;this.Nk=a.clientY;a=Uh(this);b=a.Mc-b;b=Math.min(b,a.tb-a.Ua);b=Math.max(b,0);this.od.set(b)};
f.vs=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Ch(),Math.sqrt(Math.pow(a.clientX-dj.clientX,2)+Math.pow(a.clientY-dj.clientY,2))>pj&&jj(fj,ej)(dj))};function jj(a,b){return function(c){if(!$b(c)&&!b.disabled){var d=Mg(b),d=Rg(a.Ye,d),e=b.W();if(!e)throw"originBlock is not rendered.";var e=th(e),h=d.W();if(!h)throw"block is not rendered.";h=th(h);d.moveBy(e.x-h.x,e.y-h.y);a.qe?a.jc():a.oh();d.dg(c)}}}
f.oh=function(){for(var a=Ma(this.Ye),b=Ka(this.u,!1),c=0,d;d=b[c];c++){var e=d.Eb().length>a;d.Te(e)}};function oj(){gj&&(w(gj),gj=null);hj&&(w(hj),hj=null);ij&&(w(ij),ij=null);gj&&(w(gj),gj=null);fj=ej=dj=null}f.Be=function(){var a=th(this.o).x;q||(a-=1E7);return new oc(a,-1E7,1E7+this.R,this.Ga+2E7)};function qj(a){if("function"==typeof a.vh)return a.vh();if(l(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function rj(a){this.va=void 0;this.Wa={};if(a){var b;if("function"==typeof a.th)b=a.th();else if("function"!=typeof a.vh)if(fa(a)||l(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=qj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=rj.prototype;f.set=function(a,b){sj(this,a,b,!1)};f.add=function(a,b){sj(this,a,b,!0)};
function sj(a,b,c,d){for(var e=0;e<b.length;e++){var h=b.charAt(e);a.Wa[h]||(a.Wa[h]=new rj);a=a.Wa[h]}if(d&&void 0!==a.va)throw Error('The collection already contains the key "'+b+'"');a.va=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.Wa[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.va:void 0};f.vh=function(){var a=[];tj(this,a);return a};function tj(a,b){void 0!==a.va&&b.push(a.va);for(var c in a.Wa)tj(a.Wa[c],b)}
f.th=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.Wa[e])return[];c=c.Wa[e]}uj(c,a,b)}else uj(this,"",b);return b};function uj(a,b,c){void 0!==a.va&&c.push(b);for(var d in a.Wa)uj(a.Wa[d],b+d,c)}f.clear=function(){this.Wa={};this.va=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.Wa[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.Wa[e]}a=b.va;for(delete b.va;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.Wa[e].hk())delete b.Wa[e];else break;return a};f.clone=function(){return new rj(this)};f.hk=function(){var a;if(a=void 0===this.va)a:{a=this.Wa;for(var b in a){a=!1;break a}a=!0}return a};function vj(){this.gd=new rj}f=vj.prototype;f.xa="";f.Lh=null;f.Zf=null;f.Oe=0;f.Ud=0;function wj(a,b){var c=!1,d=a.gd.th(b);d&&d.length&&(a.Ud=0,a.Oe=0,c=a.gd.get(d[0]),c=xj(a,c))&&(a.Lh=d);return c}function xj(a,b){var c;b&&(a.Ud<b.length&&(c=b[a.Ud],a.Zf=b),c&&(c.bi(),c.select()));return!!c}f.clear=function(){this.xa=""};var yj="StopIteration"in g?g.StopIteration:Error("StopIteration");function zj(){}zj.prototype.next=function(){throw yj;};zj.prototype.dj=function(){return this};function Aj(a){if(a instanceof zj)return a;if("function"==typeof a.dj)return a.dj();if(fa(a)){var b=0,c=new zj;c.next=function(){for(;;){if(b>=a.length)throw yj;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function Bj(a){try{return Aj(a).next()}catch(b){if(b!=yj)throw b;return null}};function Cj(a,b,c,d,e){this.reset(a,b,c,d,e)}Cj.prototype.Wj=null;var Dj=0;Cj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Dj++;d||qa();this.Ne=a;this.ls=b;delete this.Wj};Cj.prototype.Jk=function(a){this.Ne=a};function Ej(a){this.ag=a;this.ek=this.qa=this.Ne=this.$a=null}function Fj(a,b){this.name=a;this.value=b}Fj.prototype.toString=function(){return this.name};var Gj=new Fj("WARNING",900),Hj=new Fj("INFO",800),Ij=new Fj("CONFIG",700),Jj=new Fj("FINE",500);f=Ej.prototype;f.getName=function(){return this.ag};f.getParent=function(){return this.$a};f.ad=function(){this.qa||(this.qa={});return this.qa};f.Jk=function(a){this.Ne=a};
function Kj(a){if(a.Ne)return a.Ne;if(a.$a)return Kj(a.$a);qb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Kj(this).value)for(ha(b)&&(b=b()),a=new Cj(a,String(b),this.ag),c&&(a.Wj=c),c="log:"+a.ls,g.console&&(g.console.timeStamp?g.console.timeStamp(c):g.console.markTimeline&&g.console.markTimeline(c)),g.msWriteProfilerMark&&g.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.ek)for(var e=0,h=void 0;h=b.ek[e];e++)h(d);c=c.getParent()}};
f.gc=function(a,b){this.log(Gj,a,b)};f.info=function(a,b){this.log(Hj,a,b)};var Lj={},Mj=null;function Nj(a){Mj||(Mj=new Ej(""),Lj[""]=Mj,Mj.Jk(Ij));var b;if(!(b=Lj[a])){b=new Ej(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Nj(a.substr(0,c));c.ad()[d]=b;b.$a=c;Lj[a]=b}return b};function Oj(a){ne.call(this);this.D=a;a=r?"focusout":"blur";this.ds=$d(this.D,r?"focusin":"focus",this,!r);this.es=$d(this.D,a,this,!r)}n(Oj,ne);Oj.prototype.handleEvent=function(a){var b=new Ud(a.bb);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Oj.prototype.Z=function(){Oj.k.Z.call(this);ge(this.ds);ge(this.es);delete this.D};function Pj(a,b,c){tg.call(this,a,b,c);this.ve=!0;Cg(this,!0);this.na=this;this.$e=new vj;if(r)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.ok)&&a.gc("Failed to enable background image cache",void 0)}}n(Pj,tg);Pj.prototype.Za=null;Pj.prototype.qh=null;var Qj=Pj.prototype,Sj=Nj("goog.ui.tree.TreeControl");Qj.ok=Sj;f=Pj.prototype;f.rh=!1;f.Cr=null;f.Xe=!0;f.ki=!0;f.td=!0;f.li=!0;f.gb=function(){return this};f.Ld=function(){return 0};f.bi=function(){};
f.Lr=function(){this.rh=!0;De(this.n(),"focused");this.na&&this.na.select()};f.Hr=function(){this.rh=!1;Fe(this.n(),"focused")};f.hasFocus=function(){return this.rh};f.lb=function(){return!this.td||Pj.k.lb.call(this)};f.oc=function(a){this.td?Pj.k.oc.call(this,a):this.ve=a};f.sh=function(){return Nc};f.Ff=function(){var a=Ag(this);return a?a.firstChild:null};f.Ef=function(){return null};f.fe=function(){};f.Ce=function(){return Pj.k.Ce.call(this)+(this.td?"":" "+this.Na.Hj)};
f.Af=function(){var a=this.lb(),b=this.Br;if(a&&b)return b;b=this.Ur;if(!a&&b)return b;b=this.Na;return a&&b.Gj?b.Wc+" "+b.Gj:!a&&b.Cj?b.Wc+" "+b.Cj:""};f.Ib=function(a){if(this.na!=a){var b=!1;this.na&&(b=this.na==this.Cr,Cg(this.na,!1));if(this.na=a)Cg(a,!0),b&&a.select();this.dispatchEvent("change")}};f.bd=function(){return this.na};function Tj(a){0!=a.Xe&&(a.Xe=!1,a.Q&&Uj(a))}
function Uj(a){function b(a){var k=xg(a);if(k){var m=!d||c==a.getParent()&&!e?a.Na.Aj:a.Na.zj;k.className=m;if(k=a.Ef())k.className=Gg(a)}ve(a,b)}var c=a,d=c.Xe,e=c.li;b(a)}function Vj(a){0!=a.ki&&(a.ki=!1,a.Q&&Uj(a))}function Wj(a){if(0!=a.td){a.td=!1;if(a.Q){var b=Ag(a);b&&(b.className=a.Ce())}a.bd()==a&&xe(a,0)&&a.Ib(xe(a,0))}}f.Rf=function(){Pj.k.Rf.call(this);var a=this.n();Ke(a,"tree");Le(a,"labelledby",wg(this).id)};
f.ya=function(){Pj.k.ya.call(this);var a=this.n();a.className=this.Na.Kj;a.setAttribute("hideFocus","true");a=this.n();a.tabIndex=0;var b=this.Za=new Ze(a),c=this.qh=new Oj(a);te(this).N(c,"focusout",this.Hr).N(c,"focusin",this.Lr).N(b,"key",this.Fb).N(a,"mousedown",this.xh).N(a,"click",this.xh).N(a,"dblclick",this.xh);this.Rf()};f.Db=function(){Pj.k.Db.call(this);this.Za.m();this.Za=null;this.qh.m();this.qh=null};
f.xh=function(a){var b=this.ok;b&&b.log(Jj,"Received event "+a.type,void 0);if(b=Xj(this,a))switch(a.type){case "mousedown":b.Ph(a);break;case "click":a.preventDefault();break;case "dblclick":b.rk(a)}};
f.Fb=function(a){var b=!1,b=this.$e,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Lh;if(d){var e=null,h=!1;if(b.Zf){var k=b.Ud+c;0<=k&&k<b.Zf.length?(b.Ud=k,e=b.Zf):h=!0}e||(k=b.Oe+c,0<=k&&k<d.length&&(b.Oe=k),d.length>b.Oe&&(e=b.gd.get(d[b.Oe])),e&&e.length&&h&&(b.Ud=-1==c?e.length-1:0));xj(b,e)&&(b.Lh=d)}c=!0}break;case 8:d=b.xa.length-1;c=!0;0<d?(b.xa=b.xa.substring(0,d),wj(b,b.xa)):0==d?b.xa="":c=!1;break;case 27:b.xa="",c=!0}if(!(b=c)&&(b=this.na)){b=this.na;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;ze(b)&&(b.lb()?xe(b,0).select():b.oc(!0));break;case 37:if(a.altKey)break;ze(b)&&b.lb()&&b.Me?b.oc(!1):(d=b.getParent(),e=b.gb(),d&&(e.td||d!=e)&&d.select());break;case 40:a:if(ze(b)&&b.lb())d=xe(b,0);else{for(d=b;d!=b.gb();){e=d.Pb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.jd;null!=d?d=Jg(d):(d=b.getParent(),e=b.gb(),d=!e.td&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.gb())&&
e.$e.clear());b=c}b||(b=this.$e,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.xa)&&(b.xa+=d,c=wj(b,b.xa))),b=c);b&&a.preventDefault();return b};function Xj(a,b){for(var c=null,d=b.target;null!=d;){if(c=vg[d.id])return c;if(d==a.n())break;d=d.parentNode}return null}f.createNode=function(a){return new Kg(a||Nc,this.Na,this.eb())};
function Ig(a,b){var c=a.$e,d=b.fb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.gd.get(d);e?e.push(b):c.gd.set(d,[b])}}f.removeNode=function(a){var b=this.$e,c=a.fb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.gd.get(c);d&&(yb(d,a),d.length&&b.gd.remove(c))}};/*

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
function Yj(a,b){this.Pc=D("div","blocklyToolboxDiv");this.Pc.setAttribute("dir",q?"RTL":"LTR");b.appendChild(this.Pc);this.V=new Th;a.appendChild(this.V.H());v(this.Pc,"mousedown",this,function(a){$b(a)||a.target==this.Pc?hg(!1):hg(!0)})}f=Yj.prototype;f.width=0;f.Cg={Eh:19,Kj:"blocklyTreeRoot",Hj:"blocklyHidden",Ij:"",hh:"blocklyTreeRow",Jj:"blocklyTreeLabel",Wc:"blocklyTreeIcon",fh:"blocklyTreeIconOpen",gh:"blocklyTreeIconNone",Lj:"blocklyTreeSelected"};
f.g=function(){this.Cg.cleardotPath=qh+"1x1.gif";this.Cg.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(q?"Rtl":"Ltr");var a=new Zj(this,this.Cg);this.Ze=a;Wj(a);Tj(a);Vj(a);a.Ib(null);this.Pc.style.display="block";this.V.g(A);ak(this);a.F(this.Pc);var b=this;$d(window,"resize",function(){b.Ec()});this.Ec()};
f.Ec=function(){var a=this.Pc,b=Cd(ta),c=Ni();q?(b=bk(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;q||--this.width};
function ak(a){function b(a,e){for(var h=0,k;k=a.childNodes[h];h++)if(k.tagName){var m=k.tagName.toUpperCase();if("CATEGORY"==m){m=c.createNode(k.getAttribute("name"));m.Tc=[];e.add(m);var p=k.getAttribute("custom");p?m.Tc=p:b(k,m)}else"HR"==m?e.add(new ck):"BLOCK"==m&&e.Tc.push(k)}}var c=a.Ze;c.Ek();c.Tc=[];b(ua,a.Ze);if(c.Tc.length)throw"Toolbox cannot have both blocks and categories in the root level.";mh(window,"resize")}
f.Be=function(){return new oc(q?Ni().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Zj(a,b){this.Ta=a;Pj.call(this,Nc,b)}n(Zj,Pj);Zj.prototype.ya=function(){Zj.k.ya.call(this);if(Od){var a=this.n();v(a,"touchstart",this,this.Rr)}};Zj.prototype.Rr=function(a){a.preventDefault();var b=Xj(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Ph(a)},1)};Zj.prototype.createNode=function(a){return new dk(this.Ta,a?Gc(a):Nc,this.Na,this.eb())};
Zj.prototype.Ib=function(a){this.na!=a&&(Pj.prototype.Ib.call(this,a),a&&a.Tc&&a.Tc.length?this.Ta.V.show(a.Tc):this.Ta.V.jc())};function dk(a,b,c,d){tg.call(this,b,c,d);a&&(b=function(){mh(window,"resize")},$d(a.Ze,"expand",b),$d(a.Ze,"collapse",b))}n(dk,Kg);tg.prototype.sh=function(){return Lc("span")};dk.prototype.Ph=function(){ze(this)&&this.Me?(this.toggle(),this.select()):this.Tf()?this.gb().Ib(null):this.select();Dg(this)};dk.prototype.rk=function(){};
function ck(){dk.call(this,null,"",ek)}n(ck,dk);var ek={hh:"blocklyTreeSeparator"};/*

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
var fk={uf:null,show:function(a,b){Rf(fk,null);if(b.length){for(var c=new Mf,d=0,e;e=b[d];d++){var h=new tf(e.text);c.oe(h,!0);h.Ue(e.enabled);e.enabled&&$d(h,"action",function(a){return function(){a()}}(e.Va))}$d(c,"action",fk.jc);e=Yc();h=od();c.F(Uf);var k=c.n();Wb(k,"blocklyContextMenu");var m=ud(k),d=a.clientX+h.x,p=a.clientY+h.y;a.clientY+m.height>=e.height&&(p-=m.height);q?m.width>=a.clientX&&(d+=m.width):a.clientX+m.width>=e.width&&(d-=m.width);Vf(d,p,e,h);Nf(c);setTimeout(function(){k.focus()},
1);fk.uf=null}else fk.jc()},jc:function(){Sf(fk);fk.uf=null},rf:function(a,b){return function(){var c=Rg(a.t,b),d=a.ga();d.x=q?d.x-hi:d.x+hi;d.y+=2*hi;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Ti(){this.o=u("g",{},null);this.Rk=u("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.o);this.ec=u("path",{"class":"blocklyPath"},this.o);this.vi=u("path",{"class":"blocklyPathLight"},this.o);this.ec.kb=this;Ei(this.ec);Yi(this)}n(Ti,qi);f=Ti.prototype;f.height=0;f.width=0;
f.ra=function(){for(var a=0,b;b=this.T[a];a++)b.g();this.Gb&&Sh(this.Gb);this.Lc();z||v(this.W(),"mousedown",this,this.dg);this.t.aa.appendChild(this.W());ha(this.onchange)&&v(this.t.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){Kh&&Lh();Kh=this;this.Qg();mh(this.t.aa,"blocklySelectChange")};function Lh(){var a=Kh;Kh=null;a.ng();mh(a.t.aa,"blocklySelectChange")}f.Gb=null;f.ba=null;f.gc=null;
function Qi(a){var b=[];a.Gb&&b.push(a.Gb);a.ba&&b.push(a.ba);a.gc&&b.push(a.gc);return b}var gk=null,hk=null;f=Ti.prototype;f.ab=function(a){var b=this.W();if(this.hd&&b){var c=this.ga();this.t.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Ti.k.ab.call(this,a);a&&(c=this.ga(),a.W().appendChild(b),a=this.ga(),ki(this,a.x-c.x,a.y-c.y))};f.ga=function(){var a=0,b=0,c=this.W();if(c){do var d=Qh(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.t.aa)}return new mc(a,b)};
f.moveBy=function(a,b){var c=this.ga();this.W().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");ki(this,a,b);ik(this)};function Vh(a){var b=a.height,c=a.width;if(a=Ng(a))a=Vh(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.pd=function(a){if(this.Uc!=a){Ti.k.pd.call(this,a);for(var b=[],c=0,d;d=this.T[c];c++)b.push.apply(b,d.O(!a));if(a){a=Qi(this);for(c=0;c<a.length;c++)a[c].O(!1);c=this.toString(jk);O(R(this,"_TEMP_COLLAPSED_INPUT"),c).g()}else S(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.B){for(c=0;a=b[c];c++)a.F();this.Ma()}}};
f.dg=function(a){if(!this.ac){kk();mj();this.select();hg();if($b(a))nj(this,a);else if(this.cc&&!z){Ch();jh(kh);var b=this.ga();this.Ok=b.x;this.Pk=b.y;this.qi=a.clientX;this.ri=a.clientY;ac=1;gk=v(document,"mouseup",this,this.Rh);hk=v(document,"mousemove",this,this.Qh);this.yf=[];for(var b=this.Eb(),c=0,d;d=b[c];c++){d=Qi(d);for(var e=0;e<d.length;e++){var h;h=d[e];h={x:h.dd,y:h.ed};h.gr=d[e];this.yf.push(h)}}}else return;a.stopPropagation()}};
f.Rh=function(a){var b=this;lk(function(){mj();if(Kh&&Yh){Xg(Zh,Yh);if(b.B){var c=($h(Zh)?Yh:Zh).h;mk("click");var d=th(c.o);c.G?(d.x+=q?3:-3,d.y+=13):c.K&&(d.x+=q?-23:23,d.y+=3);c=u("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},ta);c.oi=new Date;nk(c)}b.t.Ab&&b.t.Ab.close()}else Mh(b.t,a)&&((c=b.t.Ab)&&sg(c.close,100,c),Kh.m(!1,!0),mh(window,"resize"));Yh&&(Vb(Wh.Of),delete Wh.Of,Yh=null);jh(ok.OPEN)})};
function nj(a,b){if(!z&&a.contextMenu){var c=[];if(a.Id&&!z&&a.cc&&!z&&!a.ac){var d={text:G.hm,enabled:!0,Va:function(){var b=Mg(a);Yg(b);var b=Rg(a.t,b),c=a.ga();c.x=q?c.x-hi:c.x+hi;c.y+=2*hi;b.moveBy(c.x,c.y);b.select()}};a.Eb().length>Ma(a.t)&&(d.enabled=!1);c.push(d);a.uc&&!z&&!a.Uc&&va&&(d={enabled:!0},a.ba?(d.text=G.Kp,d.Va=function(){a.Se(null)}):(d.text=G.al,d.Va=function(){a.Se("")}),c.push(d));if(!a.Uc)for(d=0;d<a.T.length;d++)if(1==a.T[d].type){d={enabled:!0};d.text=a.Le?G.lm:G.om;d.Va=
function(){Tg(a,!a.Le)};c.push(d);break}wa&&(a.Uc?(d={enabled:!0},d.text=G.km,d.Va=function(){a.pd(!1)}):(d={enabled:!0},d.text=G.fl,d.Va=function(){a.pd(!0)}),c.push(d));xa&&(d={text:a.disabled?G.im:G.gm,enabled:!$i(a),Va:function(){a.Te(!a.disabled)}},c.push(d));var d=a.Eb().length,e=Ng(a);e&&(d-=e.Eb().length);d={text:1==d?G.em:G.fm.replace("%1",String(d)),enabled:!0,Va:function(){a.m(!0,!0)}};c.push(d)}d={enabled:!(ha(a.p)?!a.p():!a.p)};d.text=G.nm;d.Va=function(){var b=ha(a.p)?a.p():a.p;b&&window.open(b)};
c.push(d);a.ub&&!a.ac&&a.ub(c);fk.show(b,c);fk.uf=a}}function ki(a,b,c){if(a.B){for(var d=oi(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Qi(a);for(e=0;e<d.length;e++)Ph(d[e]);for(e=0;e<a.Ub.length;e++)ki(a.Ub[e],b,c)}}function pk(a,b){b?Wb(a.o,"blocklyDragging"):Xb(a.o,"blocklyDragging");for(var c=0;c<a.Ub.length;c++)pk(a.Ub[c],b)}
f.Qh=function(a){var b=this;lk(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Ch();var c=a.clientX-b.qi,d=a.clientY-b.ri;if(1==ac&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>pj){ac=2;b.ab(null);pk(b,!0);var e=b.t;e.Oj=e.Ab?e.Ab.Be():null;e.Nj=e.V?e.V.Be():e.Ta?e.Ta.Be():null}if(2==ac){b.W().setAttribute("transform","translate("+(b.Ok+c)+", "+(b.Pk+d)+")");for(e=0;e<b.yf.length;e++){var h=b.yf[e],k=h.gr,m=h.x+c,h=h.y+d;k.dd=m;k.ed=h;k.J()&&ah(k.ka,m,h)}for(var k=oi(b,!1),
h=m=null,p=hi,e=0;e<k.length;e++){var y=k[e],x=li(y,p,c,d);x.s&&(m=x.s,h=y,p=x.Bk)}Yh&&Yh!=m&&(Vb(Wh.Of),delete Wh.Of,Zh=Yh=null);m&&m!=Yh&&(m.Ah(),Yh=m,Zh=h);b.Id&&!z&&Mh(b.t,a)}}a.stopPropagation()})};function Yi(a){a.cc&&!z?Wb(a.o,"blocklyDraggable"):Xb(a.o,"blocklyDraggable")}f.W=function(){return this.o};var qk=1*(1-Math.SQRT1_2)+1,rk=3*(1-Math.SQRT1_2)-1,sk="m "+qk+","+qk,tk="a 3,3 0 0,0 "+(-rk-1)+","+(2-rk),uk="a 3,3 0 0,0 "+(2-rk)+","+(rk+1);f=Ti.prototype;
f.m=function(a,b){mj();fk.uf==this&&fk.jc();Vi(this,a,!1);if(b&&this.B){mk("delete");var c=th(this.o),d=this.o.cloneNode(!0);d.Vk=c.x;d.Wk=c.y;d.setAttribute("transform","translate("+d.Vk+","+d.Wk+")");ta.appendChild(d);d.jj=d.getBBox();d.oi=new Date;vk(d)}this.B=!1;c=Qi(this);for(d=0;d<c.length;d++)c[d].m();Ti.k.m.call(this,a);Vb(this.o);this.Rk=this.vi=this.ec=this.o=null};
function vk(a){var b=(new Date-a.oi)/150;1<b?Vb(a):(a.setAttribute("transform","translate("+(a.Vk+(q?-1:1)*a.jj.width/2*b+", "+(a.Wk+a.jj.height*b))+") scale("+(1-b)+")"),setTimeout(function(){vk(a)},10))}function nk(a){var b=(new Date-a.oi)/150;1<b?Vb(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){nk(a)},10))}
f.Lc=function(){if(!this.disabled){var a=Zf($f(this.bh)),b=og(a);qg([255,255,255],b,.3);qg([0,0,0],b,.4);this.ec.setAttribute("fill",a);b=Qi(this);for(a=0;a<b.length;a++)b[a].Lc();for(a=0;b=this.T[a];a++)for(var c=0,d;d=b.Pa[c];c++)d.ia(null);this.B&&this.F()}};function fi(a){a.disabled||$i(a)?(Wb(a.o,"blocklyDisabled"),a.ec.setAttribute("fill","url(#blocklyDisabledPattern)")):(Xb(a.o,"blocklyDisabled"),a.Lc());a=a.ad();for(var b=0,c;c=a[b];b++)fi(c)}
f.Df=function(){return this.ba?this.ba.fb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Se=function(a){var b=!1;l(a)?(this.ba||(this.ba=new ri(this),b=!0),this.ba.ia(a)):this.ba&&(this.ba.m(),b=!0);b&&this.B&&(this.F(),this.Ma())};f.sd=function(a){this.ac&&(a=null);var b=!1;l(a)?(this.gc||(this.gc=new si(this),b=!0),this.gc.ia(a)):this.gc&&(this.gc.m(),b=!0);b&&this.B&&(this.F(),this.Ma())};f.ae=function(a){this.Gb&&this.Gb!==a&&this.Gb.m();a&&(a.I=this,this.Gb=a,this.B&&Sh(a))};
f.Te=function(a){this.disabled!=a&&(Ti.k.Te.call(this,a),fi(this),this.t.wb())};f.Qg=function(){Wb(this.o,"blocklySelected");this.o.parentNode.appendChild(this.o)};f.ng=function(){Xb(this.o,"blocklySelected")};
f.F=function(){this.B=!0;var a=10;q&&(a=-a);for(var b=Qi(this),c=0;c<b.length;c++){var d=b[c];d.I.isCollapsed()?d.Ha.setAttribute("display","none"):(d.Ha.setAttribute("display","block"),q&&(a-=16),d.Ha.setAttribute("transform","translate("+a+", 5)"),Ph(d),a=q?a-10:a+26)}var e=a+=q?10:-10,h=this.T,b=[];b.ta=e+20;if(this.K||this.C)b.ta=Math.max(b.ta,40);for(var d=c=0,k=!1,m=!1,p=!1,y=void 0,x=this.Le&&!this.isCollapsed(),E=0,B;B=h[E];E++)if(B.J()){var K;x&&y&&3!=y&&3!=B.type?K=b[b.length-1]:(y=B.type,
K=[],K.type=x&&3!=B.type?-1:B.type,K.height=0,b.push(K));K.push(B);B.nd=25;B.Qa=x&&1==B.type?20.5:0;if(B.s&&B.s.w){var jb=Vh(I(B.s));B.nd=Math.max(B.nd,jb.height);B.Qa=Math.max(B.Qa,jb.width)}E==h.length-1&&B.nd--;K.height=Math.max(K.height,B.nd);B.Ob=0;1==b.length&&(B.Ob+=q?-e:e);for(var jb=!1,Wg=0,Yb;Yb=B.Pa[Wg];Wg++){0!=Wg&&(B.Ob+=10);var Rj=Yb.Od();Yb.Qa=Rj.width;Yb.pg=jb&&Yb.xd?10:0;B.Ob+=Yb.Qa+Yb.pg;K.height=Math.max(K.height,Rj.height);jb=Yb.xd}-1!=K.type&&(3==K.type?(m=!0,d=Math.max(d,B.Ob)):
(1==K.type?k=!0:5==K.type&&(p=!0),c=Math.max(c,B.Ob)))}for(e=0;K=b[e];e++)if(K.Tk=!1,-1==K.type)for(h=0;B=K[h];h++)if(1==B.type){K.height+=20;K.Tk=!0;break}b.yg=20+d;m&&(b.ta=Math.max(b.ta,b.yg+30));k?b.ta=Math.max(b.ta,c+20+8):p&&(b.ta=Math.max(b.ta,c+20));b.Tr=k;b.xu=m;b.wu=p;d=a;this.G?this.ni=this.xg=!0:(this.ni=this.xg=!1,this.K&&(a=I(this.K))&&Ng(a)==this&&(this.xg=!0),Ng(this)&&(this.ni=!0));k=this.ga();m=[];p=[];a=[];c=[];B=b.ta;this.xg?(m.push("m 0,0"),a.push("m 1,1")):(m.push("m 0,2"),a.push(q?
sk:"m 1,1"),m.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.K&&(m.push("H",15),a.push("H",15),m.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.K.moveTo(k.x+(q?-30:30),k.y));m.push("H",B);a.push("H",B+(q?-1:0));this.width=B;for(K=B=0;e=b[K];K++){x=10;0==K&&(x+=q?-d:d);a.push("M",b.ta-1+","+(B+1));if(this.isCollapsed())h=e[0],E=B+18,wk(h.Pa,x,E),m.push("l 8,0 0,4 8,4 -16,8 8,4"),q?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),h=e.height-20,m.push("v",h),q&&a.push("v",
h-2),this.width+=15;else if(-1==e.type){for(y=0;h=e[y];y++)E=B+18,e.Tk&&(E+=10),x=wk(h.Pa,x,E),5!=h.type&&(x+=h.Qa+10),1==h.type&&(p.push("M",x-10+","+(B+10)),p.push("h",6-h.Qa),p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),p.push("v",h.nd+1-20),p.push("h",h.Qa+2-8),p.push("z"),q?(c.push("M",x-10-3+8-h.Qa+","+(B+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",h.nd-20+3),c.push("h",h.Qa-8+1)):(c.push("M",x-10+1+","+(B+10+1)),c.push("v",h.nd+1),c.push("h",6-h.Qa),
c.push("M",x-h.Qa-10+1.8+","+(B+10+20-.4)),c.push("l","3.04,-1.8")),E=q?k.x-x-8+10+h.Qa+1:k.x+x+8-10-h.Qa-1,jb=k.y+B+10+1,h.s.moveTo(E,jb),h.s.w&&ji(h.s));x=Math.max(x,b.ta);this.width=Math.max(this.width,x);m.push("H",x);a.push("H",x+(q?-1:0));m.push("v",e.height);q&&a.push("v",e.height-2)}else 1==e.type?(h=e[0],E=B+18,-1!=h.align&&(y=b.ta-h.Ob-8-20,1==h.align?x+=y:0==h.align&&(x+=(y+x)/2)),wk(h.Pa,x,E),m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),y=e.height-20,m.push("v",y),q?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",y)):(a.push("M",b.ta-4.2+","+(B+20-.4)),a.push("l","3.04,-1.8")),E=k.x+(q?-b.ta-1:b.ta+1),jb=k.y+B,h.s.moveTo(E,jb),h.s.w&&(ji(h.s),this.width=Math.max(this.width,b.ta+Vh(I(h.s)).width-8+1))):5==e.type?(h=e[0],E=B+18,-1!=h.align&&(y=b.ta-h.Ob-20,b.Tr&&(y-=8),1==h.align?x+=y:0==h.align&&(x+=(y+x)/2)),wk(h.Pa,x,E),m.push("v",e.height),q&&a.push("v",e.height-2)):3==e.type&&(h=e[0],0==K&&(m.push("v",10),q&&a.push("v",9),B+=10),E=B+18,-1!=h.align&&(y=b.yg-h.Ob-20,1==h.align?x+=y:0==h.align&&
(x+=(y+x)/2)),wk(h.Pa,x,E),x=b.yg+30,m.push("H",x),m.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),m.push("v",e.height-4),m.push("a 2,2 0 0,0 2,2"),m.push("H",b.ta),q?(a.push("M",x-30+rk+","+(B+rk)),a.push(tk),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.ta-1)):(a.push("M",x-30+rk+","+(B+e.height-rk)),a.push(uk),a.push("H",b.ta)),E=k.x+(q?-x:x),jb=k.y+B+1,h.s.moveTo(E,jb),h.s.w&&(ji(h.s),this.width=Math.max(this.width,b.yg+Vh(I(h.s)).width)),K==b.length-1||3==b[K+1].type)&&(m.push("v",
10),q&&a.push("v",9),B+=10);B+=e.height}b.length||(B=25,m.push("V",B),q&&a.push("V",B-1));b=B;this.height=b+1;this.C&&(m.push("H","30 l -6,4 -3,0 -6,-4"),this.C.moveTo(q?k.x-30:k.x+30,k.y+b+1),this.C.w&&ji(this.C),this.height+=4);this.ni?(m.push("H 0"),q||a.push("M","1,"+b)):(m.push("H",2),m.push("a","2,2 0 0,1 -2,-2"),q||(a.push("M",qk+","+(b-qk)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.G?(this.G.moveTo(k.x,k.y),m.push("V",20),m.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),q?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):q||(this.xg?a.push("V",1):a.push("V",2));m.push("z");b=m.join(" ")+"\n"+p.join(" ");this.ec.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.vi.setAttribute("d",b);q&&(this.ec.setAttribute("transform","scale(-1 1)"),this.vi.setAttribute("transform","scale(-1 1)"),this.Rk.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.F():mh(window,"resize");
ik(this)};function wk(a,b,c){q&&(b=-b);for(var d=0,e;e=a[d];d++)q?(b-=e.pg+e.Qa,e.W().setAttribute("transform","translate("+b+", "+c+")"),e.Qa&&(b-=10)):(e.W().setAttribute("transform","translate("+(b+e.pg)+", "+c+")"),e.Qa&&(b+=e.pg+e.Qa+10));return q?-b:b};/*

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
function v(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var h=[[a,b,e]];if(b in xk)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},k=0,m;m=xk[b][k];k++)a.addEventListener(m,e,!1),h.push([a,m,e]);return h}var xk={};aa("document.documentElement.ontouchstart")&&(xk={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function w(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function lj(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function mh(a,b){setTimeout(function(){lj(a,b)},0)}
function Qh(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function th(a){var b=0,c=0;do{var d=Qh(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=ta);return{x:b,y:c}}function Tf(a){a=th(a);return bk(a.x,a.y,!1)}
function u(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function $b(a){return 2==a.button||a.ctrlKey}
function bk(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=ta.createSVGPoint();d.x=a;d.y=b;a=ta.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Bh(a){return bk(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Wf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Xf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Wf(a),e=0;e<d;e++){for(var h=a[0][e],k=1;k<a.length;k++)if(h!=a[k][e])return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k][e])&&" "!=h)return c;return d}
function Yf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Wf(a),e=0;e<d;e++){for(var h=a[0].substr(-e-1,1),k=1;k<a.length;k++)if(h!=a[k].substr(-e-1,1))return c;" "==h&&(c=e+1)}for(k=1;k<a.length;k++)if((h=a[k].charAt(a[k].length-e-1))&&" "!=h)return c;return d}function yk(a){return!!a.match(/^\s*-?\d+(\.\d+)?\s*$/)};/*

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
function zk(a,b){zk.k.constructor.call(this,"");this.fa=b;this.qj=u("text",{"class":"blocklyText",x:-3},this.la);this.qj.appendChild(document.createTextNode("\u2713"));this.ja(a)}n(zk,Tb);f=zk.prototype;f.clone=function(){return new zk(this.Fa(),this.fa)};f.ef="default";f.Fa=function(){return String(this.$).toUpperCase()};f.ja=function(a){a="TRUE"==a;this.$!==a&&(this.$=a,this.qj.style.display=a?"block":"none",this.h&&this.h.B&&this.h.t.wb())};
f.wg=function(){var a=!this.$;if(this.h&&this.fa){var b=this.fa(a);void 0!==b&&(a=b)}null!==a&&this.ja(String(a).toUpperCase())};function Ak(a){ne.call(this);this.Td=[];Bk(this,a)}n(Ak,ne);f=Ak.prototype;f.na=null;f.ei=null;f.Zj=function(a){return this.Td[a]||null};function Bk(a,b){b&&(tb(b,function(a){this.Re(a,!1)},a),Ab(a.Td,b))}f.removeItem=function(a){a&&yb(this.Td,a)&&a==this.na&&(this.na=null,this.dispatchEvent("select"))};f.bd=function(){return this.na};f.Ib=function(a){a!=this.na&&(this.Re(this.na,!1),this.na=a,this.Re(a,!0));this.dispatchEvent("select")};f.De=function(){var a=this.na;return a?sb(this.Td,a):-1};
f.We=function(a){this.Ib(this.Zj(a))};f.clear=function(){var a=this.Td;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0;this.na=null};f.Z=function(){Ak.k.Z.call(this);delete this.Td;this.na=null};f.Re=function(a,b){a&&("function"==typeof this.ei?this.ei(a,b):"function"==typeof a.ii&&a.ii(b))};function Ck(a,b,c,d,e){this.zb=!!b;a&&this.be(a,d);this.depth=void 0!=e?e:this.pc||0;this.zb&&(this.depth*=-1);this.vj=!c}n(Ck,zj);f=Ck.prototype;f.lc=null;f.pc=0;f.Qk=!1;f.be=function(a,b,c){if(this.lc=a)this.pc=ga(b)?b:1!=this.lc.nodeType?0:this.zb?-1:1;ga(c)&&(this.depth=c)};f.clone=function(){return new Ck(this.lc,this.zb,!this.vj,this.pc,this.depth)};
f.next=function(){var a;if(this.Qk){if(!this.lc||this.vj&&0==this.depth)throw yj;a=this.lc;var b=this.zb?-1:1;if(this.pc==b){var c=this.zb?a.lastChild:a.firstChild;c?this.be(c):this.be(a,-1*b)}else(c=this.zb?a.previousSibling:a.nextSibling)?this.be(c):this.be(a.parentNode,-1*b);this.depth+=this.pc*(this.zb?-1:1)}else this.Qk=!0;a=this.lc;if(!this.lc)throw yj;return a};
f.splice=function(a){var b=this.lc,c=this.zb?1:-1;this.pc==c&&(this.pc=-1*c,this.depth+=this.pc*(this.zb?-1:1));this.zb=!this.zb;Ck.prototype.next.call(this);this.zb=!this.zb;for(var c=fa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)b.parentNode&&b.parentNode.insertBefore(c[d],b.nextSibling);Vb(b)};function Dk(a,b,c,d){Ck.call(this,a,b,c,null,d)}n(Dk,Ck);Dk.prototype.next=function(){do Dk.k.next.call(this);while(-1==this.pc);return this.lc};function Ek(){}n(Ek,Oe);ca(Ek);var Fk=0;Ek.prototype.H=function(a){var b=this.ye(a);a=a.eb().H("DIV",b?b.join(" "):null,Gk(this,a.Xa,a.Od(),a.eb()));Ke(a,"grid");return a};function Gk(a,b,c,d){for(var e=[],h=0,k=0;h<c.height;h++){for(var m=[],p=0;p<c.width;p++){var y=b&&b[k++];m.push(Hk(a,y,d))}e.push(Ik(a,m,d))}return a.yj(e,d)}Ek.prototype.yj=function(a,b){var c=b.H("TABLE",this.U()+"-table",b.H("TBODY",this.U()+"-body",a));c.cellSpacing=0;c.cellPadding=0;return c};
function Ik(a,b,c){a=c.H("TR",a.U()+"-row",b);Ke(a,"row");return a}function Hk(a,b,c){a=c.H("TD",{"class":a.U()+"-cell",id:a.U()+"-cell-"+Fk++},b);Ke(a,"gridcell");Le(a,"selected",!1);if(!id(a)&&!Ne(a,"label")){var d;b=new Dk(a);for(c="";!c&&(d=Bj(b));)1==d.nodeType&&(c=Ne(d,"label")||d.title);(d=c)&&Le(a,"label",d)}return a}
Ek.prototype.qd=function(a,b){if(a){var c=Vc(this.U()+"-body",a)[0];if(c){var d=0;tb(c.rows,function(a){tb(a.cells,function(a){Zb(a);if(b){var c=b[d++];c&&a.appendChild(c)}})});if(d<b.length){for(var e=[],h=Sc(a),k=c.rows[0].cells.length;d<b.length;){var m=b[d++];e.push(Hk(this,m,h));e.length==k&&(m=Ik(this,e,h),c.appendChild(m),e.length=0)}if(0<e.length){for(;e.length<k;)e.push(Hk(this,"",h));m=Ik(this,e,h);c.appendChild(m)}}}zd(a,!0,Eb)}};
function Jk(a,b,c){for(b=b.n();c&&1==c.nodeType&&c!=b;){if("TD"==c.tagName&&Ce(c,a.U()+"-cell"))return c.firstChild;c=c.parentNode}return null}Ek.prototype.U=function(){return"goog-palette"};function Kk(a,b,c){ff.call(this,a,b||Ek.Yb(),c);this.Zg&=-89;this.se=new Lk;this.se.ug(this);this.Jh=-1}n(Kk,ff);f=Kk.prototype;f.Aa=null;f.M=-1;f.Ra=null;f.Z=function(){Kk.k.Z.call(this);this.Ra&&(this.Ra.m(),this.Ra=null);this.Aa=null;this.se.m()};f.tg=function(a){Kk.k.tg.call(this,a);Mk(this);this.Ra?(this.Ra.clear(),Bk(this.Ra,a)):(this.Ra=new Ak(a),a=oa(this.Re,this),this.Ra.ei=a,te(this).N(this.Ra,"select",this.Qr));this.M=-1};f.Bf=function(){return""};
f.Ie=function(a){Kk.k.Ie.call(this,a);var b=Jk(this.L,this,a.target);b&&a.relatedTarget&&cd(b,a.relatedTarget)||b==Nk(this)||(a=this.Xa,this.Sa(a?sb(a,b):-1))};f.yc=function(a){Kk.k.yc.call(this,a);if(this.$&4&&(a=Jk(this.L,this,a.target),a!=Nk(this))){var b=this.Xa;this.Sa(b?sb(b,a):-1)}};f.Dc=function(a){var b=Nk(this);return b?(this.Ib(b),Kk.k.Dc.call(this,a)):!1};
f.Fb=function(a){var b=this.Xa,b=b?b.length:0,c=this.Aa.width;if(0==b||!this.isEnabled())return!1;if(13==a.keyCode||32==a.keyCode)return this.Dc(a);if(36==a.keyCode)return this.Sa(0),!0;if(35==a.keyCode)return this.Sa(b-1),!0;var d=0>this.M?this.De():this.M;switch(a.keyCode){case 37:if(-1==d||0==d)d=b;this.Sa(d-1);a.preventDefault();return!0;case 39:return d==b-1&&(d=-1),this.Sa(d+1),a.preventDefault(),!0;case 38:-1==d&&(d=b+c-1);if(d>=c)return this.Sa(d-c),a.preventDefault(),!0;break;case 40:if(-1==
d&&(d=-c),d<b-c)return this.Sa(d+c),a.preventDefault(),!0}return!1};f.Qr=function(){};f.Od=function(){return this.Aa};f.vg=function(a,b){if(this.n())throw Error("Component already rendered");this.Aa=ga(a)?new Sb(a,b):a;Mk(this)};function Nk(a){var b=a.Xa;return b&&b[a.M]}f.Sa=function(a){a!=this.M&&(Ok(this,this.M,!1),this.Jh=this.M,this.M=a,Ok(this,a,!0),this.dispatchEvent("a"))};f.De=function(){return this.Ra?this.Ra.De():-1};f.bd=function(){return this.Ra?this.Ra.bd():null};
f.We=function(a){this.Ra&&this.Ra.We(a)};f.Ib=function(a){this.Ra&&this.Ra.Ib(a)};function Ok(a,b,c){if(a.n()){var d=a.Xa;if(d&&0<=b&&b<d.length){var e;e=(e=Nk(a))?e.parentNode:null;a.se.n()!=e&&(a.se.D=e);e=a.se;e.ob(c);!!(e.$&2)==c&&(b=d[b])&&(b=b?b.parentNode:null,d=a.L.U()+"-cell-hover",c?De(b,d):Fe(b,d),c?Le(a.D,"activedescendant",b.id):b.id==Ne(a.D,"activedescendant")&&Me(a.D))}}}f.ob=function(a){a&&-1==this.M?this.Sa(-1<this.Jh?this.Jh:0):a||this.Sa(-1);Kk.k.ob.call(this,a)};
f.Re=function(a,b){if(this.n()&&a){var c=a.parentNode,d=this.L.U()+"-cell-selected";b?De(c,d):Fe(c,d);Le(c,"selected",b)}};function Mk(a){var b=a.Xa;if(b)if(a.Aa&&a.Aa.width){if(b=Math.ceil(b.length/a.Aa.width),!ga(a.Aa.height)||a.Aa.height<b)a.Aa.height=b}else b=Math.ceil(Math.sqrt(b.length)),a.Aa=new Sb(b,b);else a.Aa=new Sb(0,0)}function Lk(){ff.call(this,null);this.ud|=2}n(Lk,ff);function Pk(a,b,c){this.tf=a||[];Kk.call(this,null,b||Ek.Yb(),c);this.sg(this.tf)}n(Pk,Kk);f=Pk.prototype;f.bg=null;f.Xf=null;f.sg=function(a,b){this.tf=a;this.Xf=b||null;this.bg=null;this.qd(Qk(this))};f.uh=function(){var a=this.bd();if(a){var b=a.style[cb()];if("undefined"!==typeof b)a=b;else{var b=a.style,c=ld["background-color"];if(!c){var d=cb(),c=d;void 0===a.style[d]&&(d=(t?"Webkit":Eb?"Moz":r?"ms":Db?"O":null)+db(d),void 0!==a.style[d]&&(c=d));ld["background-color"]=c}a=b[c]||""}return Rk(a)}return null};
f.ji=function(a){a=Rk(a);this.bg||(this.bg=vb(this.tf,function(a){return Rk(a)}));this.We(a?sb(this.bg,a):-1)};function Qk(a){return vb(a.tf,function(a,c){var d=this.eb().H("div",{"class":this.L.U()+"-colorswatch",style:"background-color:"+a});d.title=this.Xf&&this.Xf[c]?this.Xf[c]:"#"==a.charAt(0)?"RGB ("+og(a).join(", ")+")":a;return d},a)}function Rk(a){if(a)try{return jg(a).zh}catch(b){}return null};function Sk(a,b){pe.call(this,a);this.Y=b||null;te(this).N(this,"action",this.qs)}n(Sk,pe);f=Sk.prototype;f.Zc=!0;f.sg=function(a){this.Y?this.Y.sg(a):Tk(this,a)};f.vg=function(a){this.Y||Tk(this,[]);this.Y.vg(a)};f.Od=function(){return this.Y?this.Y.Od():null};f.De=function(){return this.Y?this.Y.De():-1};f.We=function(a){this.Y&&this.Y.We(a)};f.uh=function(){return this.Y?this.Y.uh():null};f.ji=function(a){this.Y&&this.Y.ji(a)};f.kc=function(){return this.Zc};
f.Jc=function(a){this.Zc=a;this.Y&&this.Y.jb(32,a)};f.ya=function(){Sk.k.ya.call(this);this.Y&&this.Y.F(this.n());this.n().unselectable="on"};f.Z=function(){Sk.k.Z.call(this);this.Y&&(this.Y.m(),this.Y=null)};f.focus=function(){this.Y&&this.Y.n().focus()};f.qs=function(a){a.stopPropagation();this.dispatchEvent("change")};function Tk(a,b){var c=new Pk(b,null,a.eb());c.vg(5);c.jb(32,a.Zc);a.oe(c);a.Y=c;a.Q&&a.Y.F(a.n())};/*

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
function Uk(a,b){Uk.k.constructor.call(this,"\u00a0\u00a0\u00a0");this.fa=b;this.ja(a)}var Vk;n(Uk,Tb);f=Uk.prototype;f.g=function(a){Uk.k.g.call(this,a);this.Cb.style.fillOpacity=1;this.ja(this.Fa())};f.clone=function(){return new Uk(this.Fa(),this.fa)};f.ef="default";f.m=function(){Sf(this);Uk.k.m.call(this)};f.Fa=function(){return this.uj};f.ja=function(a){this.uj=a;this.Cb&&(this.Cb.style.fill=a);this.h&&this.h.B&&(ik(this.h),this.h.t.wb())};
f.fb=function(){var a=this.uj,b=a.match(/^#(.)\1(.)\2(.)\3$/);b&&(a="#"+b[1]+b[2]+b[3]);return a};
var Wk="#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),Xk=
7;Uk.prototype.wg=function(){Rf(this,Yk);var a=new Sk;a.vg(Xk);a.sg(Wk);var b=Yc(),c=od(),d=Tf(this.Cb),e=this.Cb.getBBox();a.F(Uf);a.ji(this.Fa());var h=td(a.n());d.y=d.y+h.height+e.height>=b.height+c.y?d.y-(h.height-1):d.y+(e.height-1);q?(d.x+=e.width,d.x-=h.width,d.x<c.x&&(d.x=c.x)):d.x>b.width+c.x-h.width&&(d.x=b.width+c.x-h.width);Vf(d.x,d.y,b,c);var k=this;Vk=$d(a,"change",function(a){a=a.target.uh()||"#000000";Zk();if(k.h&&k.fa){var b=k.fa(a);void 0!==b&&(a=b)}null!==a&&k.ja(a)})};
function Yk(){Vk&&ge(Vk)};/*

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
function $k(a,b){$k.k.constructor.call(this,a);this.fa=b}var al;n($k,Tb);f=$k.prototype;f.clone=function(){return new $k(this.fb(),this.fa)};f.ef="text";f.m=function(){Sf(this);$k.k.m.call(this)};f.ia=function(a){if(null!==a){if(this.h&&this.fa){var b=this.fa(a);null!==b&&void 0!==b&&(a=b)}Tb.prototype.ia.call(this,a)}};
f.wg=function(a){a=a||!1;if(!a&&(Fb||Jb||Lb)){a=window.prompt(G.cl,this.Ka);if(this.h&&this.fa){var b=this.fa(a);void 0!==b&&(a=b)}null!==a&&this.ia(a)}else{Rf(this,bl(this));var b=Uf,c=D("input","blocklyHtmlInput");al=c;b.appendChild(c);c.value=c.defaultValue=this.Ka;c.qk=null;cl(this);this.Gk();a||(c.focus(),c.select());c.ss=v(c,"keyup",this,this.tk);c.rs=v(c,"keypress",this,this.tk);c.ys=v(this.h.t.aa,"blocklyWorkspaceChange",this,this.Gk)}};
f.tk=function(a){var b=al;13==a.keyCode?Zk():27==a.keyCode?(this.ia(b.defaultValue),Zk()):(a=b.value,a!==b.qk?(b.qk=a,this.ia(a),cl(this)):t&&this.h.F())};function cl(a){var b=!0,c=al;a.h&&a.fa&&(b=a.fa(c.value));null===b?Wb(c,"blocklyInvalidInput"):Xb(c,"blocklyInvalidInput")}f.Gk=function(){var a=Uf,b=this.la.getBBox();a.style.width=b.width+"px";b=Tf(this.Cb);if(q){var c=this.Cb.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;t&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function bl(a){return function(){var b=al,c=b.value;a.h&&a.fa&&(c=a.fa(c),null===c&&(c=b.defaultValue));a.ia(c);a.h.B&&a.h.F();w(b.ss);w(b.rs);w(b.ys);al=null;Uf.style.width="auto"}}function dl(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)}function el(a){(a=dl(a))&&(a=String(Math.max(0,Math.floor(a))));return a};/*

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
function fl(a){this.ag=a;this.Og="";this.mm=new RegExp(this.Ca,"g")}fl.prototype.ff=null;fl.prototype.zd=null;function gl(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}
function hl(a,b){if(!b)return"";if(b.disabled)return hl(a,Ng(b));var c=a[b.type];if(!c)throw'Language "'+a.ag+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.ci(b,c[0]),c[1]];if(l(c))return a.zd&&(c=a.zd.replace(/%1/g,"'"+b.id+"'")+c),a.ci(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function T(a,b,c){var d=U;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=cj(a,b);if(!a)return"";b=hl(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function il(a,b){var c=U,d=cj(a,b),e=hl(c,d);if(!l(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=gl(e,c.ie));return e}
function jl(a,b){var c=U;c.ff&&(a=c.ff.replace(/%1/g,"'"+b+"'")+a);c.zd&&(a+=gl(c.zd.replace(/%1/g,"'"+b+"'"),c.ie));return a}fl.prototype.ie="  ";function kl(a){var b=U;b.Og+=a+","}fl.prototype.Ca="{leCUI8hutHZI4480Dc}";function ll(a,b){var c=U;if(!c.Hd[a]){var d=Ha(c.da,a);c.Yj[a]=d;c.Hd[a]=b.join("\n").replace(c.mm,d)}return c.Yj[a]};/*

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
var kh="handclosed",Nh="handdelete",ok={},ml="",nl=null,ol="";function pl(){var a=ql.join("\n");ol=qh.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,ol),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));nl=c.sheet;jh("hando")}
function jh(a){if(!z&&ml!=a){ml=a;var b="url("+ol+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=nl||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(h){if(15==h.code)throw h.styleSheet=d,h;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;ta&&(ta.style.cursor="hando"==a?"":b)}}
var ql=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function rl(a,b){function c(){sl(a);tl()}if(!cd(document,a))throw"Error: container is not in current document.";b&&ul(b);if(ya){var d=document.getElementById("realtime");d&&(d.style.display="block");vl(c,a)}else c()}
function ul(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,h=!1,k=!1,m=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Pg(c))):c=null,m=c,c=Boolean(m&&m.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),h=a.comments,void 0===h&&(h=c),k=a.disable,void 0===k&&(k=c);var p=a.scrollbars;void 0===p&&(p=c);var y=a.sounds;void 0===y&&(y=!0);var x=!!a.realtime,E=x?a.realtimeOptions:void 0;
q=!!a.rtl;wa=e;va=h;xa=k;z=b;Aa=a.maxBlocks||Infinity;a.media?qh=a.media:a.path&&(qh=a.path+"media/");Ba=c;Ca=p;sa=d;Da=y;ua=m;ya=x;za=E}
function sl(a){a.setAttribute("dir","LTR");qe=q;pl();var b=u("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=u("defs",{},b),d,e;d=u("filter",{id:"blocklyEmboss"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=u("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
u("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);u("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);u("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=u("filter",{id:"blocklyTrashcanShadowFilter"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);u("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=u("feMerge",{},d);u("feMergeNode",{"in":"offsetBlur"},d);u("feMergeNode",{"in":"SourceGraphic"},
d);d=u("filter",{id:"blocklyShadowFilter"},c);u("feGaussianBlur",{stdDeviation:2},d);c=u("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);u("rect",{width:10,height:10,fill:"#aaa"},c);u("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);A=new Dh(wl,xl);b.appendChild(A.H());A.Mh=Aa;z||(Ba?A.Ta=new Yj(b,a):(A.V=new Th,c=A.V,d=c.H(),c.qe=!1,bd(d)),Ca||yl(function(){if(0==ac){var a=A.wc(),b=a.Bb+a.rb,c=a.Mc+a.sb;if(a.Nb<c||a.Nb+a.tb>a.Ua+c||a.ic<(q?a.Bb:
b)||a.ic+a.Fd>(q?a.wa:a.wa+b))for(var d=Ka(A,!1),e=0,x;x=d[e];e++){var E=x.ga(),B=Vh(x),K=c+25-B.height-E.y;0<K&&x.moveBy(0,K);K=c+a.Ua-25-E.y;0>K&&x.moveBy(0,K);K=25+b-E.x-(q?0:B.width);0<K&&x.moveBy(K,0);K=b+a.wa-25-E.x+(q?B.width:0);0>K&&x.moveBy(K,0)}}}));b.appendChild(Di());a.appendChild(b);ta=b;kk();Uf=D("div","blocklyWidgetDiv");Uf.style.direction=q?"rtl":"ltr";document.body.appendChild(Uf)}
function tl(){v(ta,"mousedown",null,zl);v(ta,"contextmenu",null,Al);v(Uf,"contextmenu",null,Al);Ea||(v(window,"resize",document,kk),v(document,"keydown",null,Bl),document.addEventListener("mouseup",Cl,!1),Lb&&v(window,"orientationchange",document,function(){mh(window,"resize")}),Ea=!0);if(ua)if(A.Ta)A.Ta.g();else if(A.V){A.V.g(A);A.V.show(ua.childNodes);A.scrollX=A.V.R;q&&(A.scrollX*=-1);var a="translate("+A.scrollX+", 0)";A.aa.setAttribute("transform",a);A.de.setAttribute("transform",a)}Ca&&(A.Hc=
new uh(A),A.Hc.resize());Fh();if(Da){Dl([qh+"click.mp3",qh+"click.wav",qh+"click.ogg"],"click");Dl([qh+"delete.mp3",qh+"delete.ogg",qh+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)w(b.pop());for(var a in El){var d=El[a];d.volume=.01;d.play();d.pause();if(Lb||Kb)break}};b.push(v(document,"mousemove",null,a));b.push(v(document,"touchstart",null,a))}};/*

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
var Uf=null,Ji=null,Fl=null;function Rf(a,b){Zk();Ji=a;Fl=b;Uf.style.display="block"}function Zk(){Ji&&(Uf.style.display="none",Fl&&Fl(),Fl=Ji=null,Zb(Uf))}function Sf(a){Ji==a&&Zk()}function Vf(a,b,c,d){b<d.y&&(b=d.y);q?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);Uf.style.left=a+"px";Uf.style.top=b+"px"};/*

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
function Gl(a,b,c,d){this.h=null;this.Ga=Number(c);this.R=Number(b);this.Aa={height:this.Ga+10,width:this.R};this.Ka=d||"";this.la=u("g",{},null);this.Qf=u("image",{height:this.Ga+"px",width:this.R+"px",y:-12},this.la);this.ja(a);Eb&&(this.jg=u("rect",{height:this.Ga+"px",width:this.R+"px",y:-12,"fill-opacity":0},this.la))}n(Gl,Tb);f=Gl.prototype;f.clone=function(){return new Gl(this.vu(),this.R,this.Ga,this.fb())};f.jg=null;f.xd=!1;
f.g=function(a){this.h||(this.h=a,a.W().appendChild(this.la),a=this.jg||this.Qf,a.kb=this.h,Ei(a))};f.m=function(){Vb(this.la);this.jg=this.Qf=this.la=null};f.i=function(a){(this.jg||this.Qf).kb=a};f.Fa=function(){return this.Os};f.ja=function(a){null!==a&&(this.Os=a,this.Qf.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l(a)?a:""))};f.ia=function(a){null!==a&&(this.Ka=a)};f.$d=function(){};/*

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
function Hl(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=g.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var Il=Hl();function Jl(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function Kl(a){this.kr=Jl(a,"clientId");this.zi=Il.userId;document.getElementById(Jl(a,"authButtonElementId"));document.getElementById(Jl(a,"authDivElementId"))}Kl.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function Ll(a,b,c,d){function e(c){gapi.sc.Da.files.Sf({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Yc(d)}function h(){function a(b){gapi.sc.Da.Fs.Sf({fileId:"appdata",resource:{key:"folderId",value:b}}).Yc(function(){e(b)})}function b(){gapi.sc.Da.files.Sf({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Yc(function(b){a(b.id)})}gapi.sc.Da.Fs.get({fileId:"appdata",propertyKey:"folderId"}).Yc(function(d){if(d.error)c?b():a("root");else{var h=d.result.value;gapi.sc.Da.files.get({fileId:h}).Yc(function(a){a.error||
a.labels.Ou?b():e(h)})}})}gapi.sc.load("drive","v2",function(){h()})}function Ml(a){this.sk=Jl(a,"onFileLoaded");this.ns=Jl(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.fk=Jl(a,"initializeModel");this.Dk=Jl(a,"registerTypes",function(){});this.gj=Jl(a,"afterAuth",function(){});this.fr=Jl(a,"autoCreate",!1);this.vr=Jl(a,"defaultTitle","New Realtime File");this.ur=Jl(a,"defaultFolderTitle","");this.hj=Jl(a,"afterCreate",function(){});this.Xg=new Kl(a)}
function Nl(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Il=Hl();for(var e in b)gapi.Da.dc.load(b[e],a.sk,a.fk,a.ck)}Ml.prototype.start=function(){var a=this;this.Xg.start(function(){a.Dk&&a.Dk();a.gj&&a.gj();a.load()})};
Ml.prototype.ck=function(a){a.type!=gapi.Da.dc.Ei.gu&&(a.type==gapi.Da.dc.Ei.bt?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.Da.dc.Ei.Kt&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
Ml.prototype.load=function(){var a=Il.fileIds;a&&(a=a.split(","));var b=this.Xg.zi,b=Il.state;if(a)for(var c in a)gapi.Da.dc.load(a[c],this.sk,this.fk,this.ck);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.yu;b=d.zi;Nl(this,a,b);return}}this.fr&&Ol(this)}};function Ol(a){Ll(a.vr,a.ns,a.ur,function(b){b.id?(a.hj&&a.hj(b.id),Nl(a,[b.id],a.Xg.zi)):(console.error("Error creating file."),console.error(b))})};/*

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
var Hh,Pl,Gh=!1,Ql=null,Si=null,Rl=null,Sl=null,Ui=null,Wi=!1,Tl=null,Ul=null,Vl=null;function Wl(a){var b=a.Ar;a=a.Ar.length;for(var c=0;c<a;c++){var d=b[c];if(!d.as){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.yk?Xl(function(){Yl(e,!1);Zl(e)}):"relativeX"!=d.yk&&"relativeY"!=d.yk||Xl(function(){e.Sk||Yl(e,!1);Zl(e)}))}}}function $l(a){if(!a.as){var b=a.newValue;b?Yl(b,!a.oldValue):(b=a.oldValue,am(b))}}function Xl(a){if(Wi)a();else try{Wi=!0,a()}finally{Wi=!1}}
function Yl(a,b){Xl(function(){var c=Pg(a.Ai).firstChild;if(c=Rg(A,c,!0))b&&c.t.pe(c),(b||xb(Hh,c))&&Zl(c)})}function Zl(a){if(!isNaN(a.kg)&&!isNaN(a.lg)){var b=Ni().width,c=a.ga(),d=a.kg-c.x;a.moveBy(q?b-d:d,a.lg-c.y)}}function am(a){Xl(function(){a.m(!0,!0,!0)})}function ik(a){if(a.t==A&&Gh&&!Wi){a=gi(a);var b=a.ga(),c=!1,d=Mg(a);d.setAttribute("id",a.id);var e=D("xml");e.appendChild(d);d=Og(e);d!=a.Ai&&(c=!0,a.Ai=d);if(a.kg!=b.x||a.lg!=b.y)a.kg=b.x,a.lg=b.y,c=!0;c&&Ui.set(a.id.toString(),a)}}
function bm(a,b){gapi.sc.Da.xk.list({fileId:a}).Yc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Gu){b(e.domain);break}}})}
var fm={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Si=a;var b=a.ou();a.Nd().set("blocks",b);b=a.nu();a.Nd().set("topBlocks",b);Ul&&a.Nd().set(Ul,a.pu(Vl))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){Ql=a;a:{for(var b=a.Fr(),c=0;c<b.length;c++){var d=b[c];if(d.bs){Rl=d.Iu;break a}}Rl=void 0}Si=a.$f;Ui=Si.Nd().get("blocks");Hh=Si.Nd().get("topBlocks");
Si.Nd().addEventListener(gapi.Da.dc.Jg.Lt,Wl);Ui.addEventListener(gapi.Da.dc.Jg.hu,$l);Sl();a.addEventListener(gapi.Da.dc.Jg.ct,cm);a.addEventListener(gapi.Da.dc.Jg.dt,dm);em();a=Hh;for(b=0;b<a.length;b++)c=a.get(b),Yl(c,!0)},registerTypes:function(){var a=gapi.Da.dc.qu;a.Eu(qi,"Block");qi.prototype.id=a.ah("id");qi.prototype.Ai=a.ah("xmlDom");qi.prototype.kg=a.ah("relativeX");qi.prototype.lg=a.ah("relativeY");a.Ju(qi,qi.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.sc.Da.xk.Sf({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Yc(function(c){c.error&&bm(a,function(c){b=gapi.sc.Da.xk.Sf({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Yc(function(){})})})}};function gm(){var a=za,b=Jl(a,"chatbox");b&&(Ul=Jl(b,"elementId"),Vl=Jl(b,"initText",G.dl));fm.kr=Jl(a,"clientId");Pl=Jl(a,"collabElementId")}
function vl(a,b){gm();Gh=!0;hm(b);Sl=function(){a();if(Ul){var b=Si.Nd().get(Ul),d=document.getElementById(Ul);gapi.Da.dc.ru.lu(b,d);d.disabled=!1}};Tl=new Ml(fm);Tl.start()}
function hm(a){a.style.background="url("+qh+"progress.gif) no-repeat center center";var b=wd(a),c=D("div");c.id=fm.authDivElementId;var d=D("p",null,G.bl);c.appendChild(d);d=D("button",null,"Authorize");d.id=fm.ju;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=wd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function em(){if(Pl){var a;a=Pl;a=l(a)?document.getElementById(a):a;Zb(a);for(var b=Ql.Fr(),c=0;c<b.length;c++){var d=b[c],e=D("img",{src:d.Du||qh+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.bs?" ("+G.jp+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function cm(){em()}function dm(){em()}function pi(a){var b=Rl+"-"+a;return Ui.has(b)?pi("-"+a):b};/*

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
var qh="https://blockly-demo.appspot.com/static/media/",oh=64,ph=92,rh="sprites.png",ai=[,2,1,4,3],El=Object.create(null),Kh=null,z=!1,Yh=null,Zh=null,pj=5,hi=20,di=250,jk=30,A=null,im=null,ac=0,jm=null;function Ni(){return{width:ta.mj,height:ta.lj}}function kk(){var a=ta,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.mj!=c&&(a.setAttribute("width",c+"px"),a.mj=c);a.lj!=b&&(a.setAttribute("height",b+"px"),a.lj=b);A.Hc&&A.Hc.resize()}
function zl(a){kk();mj();hg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!z&&Kh&&b&&Lh();a.target==ta&&$b(a)?km(a):(z||b)&&A.Hc&&(A.nh=!0,A.qi=a.clientX,A.ri=a.clientY,A.Qs=A.wc(),A.Ss=A.scrollX,A.Ts=A.scrollY,"mouseup"in xk&&(jm=v(document,"mouseup",null,Cl)),Fa=v(document,"mousemove",null,lm))}function Cl(){jh(ok.OPEN);A.nh=!1;jm&&(w(jm),jm=null);Fa&&(w(Fa),Fa=null)}
function lm(a){if(A.nh){Ch();var b=A.Qs,c=A.Ss+(a.clientX-A.qi),d=A.Ts+(a.clientY-A.ri),c=Math.min(c,-b.ic),d=Math.min(d,-b.Nb),c=Math.max(c,b.wa-b.ic-b.Fd),d=Math.max(d,b.Ua-b.Nb-b.tb);A.Hc.set(-c-b.ic,-d-b.Nb);a.stopPropagation()}}
function Bl(a){if(!ih(a))if(27==a.keyCode)hg();else if(8==a.keyCode||46==a.keyCode)try{Kh&&Kh.Id&&!z&&(hg(),Kh.m(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(Kh&&Kh.Id&&!z&&Kh.cc&&!z&&Kh.t==A&&(hg(),67==a.keyCode?mm():88==a.keyCode&&(mm(),Kh.m(!0,!0))),86==a.keyCode&&im){a=A;var b=im;if(!(b.getElementsByTagName("block").length>=Ma(a))){var c=Rg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){q&&(d=-d);do for(var e=
!1,h=a.cb(),k=0,m;m=h[k];k++)m=m.ga(),1>=Math.abs(d-m.x)&&1>=Math.abs(b-m.y)&&(d=q?d-hi:d+hi,b+=2*hi,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function mj(){gk&&(w(gk),gk=null);hk&&(w(hk),hk=null);var a=Kh;if(2==ac&&a){var b=a.ga();ki(a,b.x-a.Ok,b.y-a.Pk);delete a.yf;pk(a,!1);a.F();sg(a.Ma,di,a);mh(window,"resize");a.t.wb()}ac=0;jh(ok.OPEN);oj()}function mm(){var a=Kh,b=Mg(a);Yg(b);a=a.ga();b.setAttribute("x",q?-a.x:a.x);b.setAttribute("y",a.y);im=b}
function km(a){if(!z){var b=[];if(wa){for(var c=!1,d=!1,e=Ka(A,!1),h=0;h<e.length;h++)for(var k=e[h];k;)k.isCollapsed()?c=!0:d=!0,k=Ng(k);d={enabled:d};d.text=G.el;d.Va=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.pd.bind(c,!0),a),c=Ng(c),a+=10};b.push(d);c={enabled:c};c.text=G.jm;c.Va=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.pd.bind(c,!1),a),c=Ng(c),a+=10};b.push(c)}fk.show(a,b)}}function Al(a){ih(a)||a.preventDefault()}
function hg(a){Ii();Zk();!a&&A.Ta&&A.Ta.V&&A.Ta.V.qe&&A.Ta.Ze.Ib(null)}function Ch(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function ih(a){return"textarea"==a.target.type||"text"==a.target.type}
function Dl(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var h=a[e],k=h.match(/\.(\w+)$/);if(k&&d.canPlayType("audio/"+k[1])){c=new window.Audio(h);break}}c&&c.play&&(El[b]=c)}}function mk(a,b){var c=El[a];c&&(c=Rb&&9===Rb||Lb||Jb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function wl(){var a=Ni();A.Ta&&(a.width-=A.Ta.width);var b=a.width-lh,c=a.height-lh;try{var d=A.aa.getBBox()}catch(e){return null}if(A.Hc)var h=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),k=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else h=d.x,b=h+d.width,k=d.y,c=k+d.height;d=0;!q&&A.Ta&&(d=A.Ta.width);return{Ua:a.height,wa:a.width,tb:c-k,Fd:b-h,Mc:-A.scrollY,Bb:-A.scrollX,Nb:k,ic:h,sb:0,rb:d}}
function xl(a){if(!A.Hc)throw"Attempt to set main workspace scroll without scrollbars.";var b=wl();ga(a.x)&&(A.scrollX=-b.Fd*a.x-b.ic);ga(a.y)&&(A.scrollY=-b.tb*a.y-b.Nb);a="translate("+(A.scrollX+b.rb)+","+(A.scrollY+b.sb)+")";A.aa.setAttribute("transform",a);A.de.setAttribute("transform",a)}function lk(a){a()}function yl(a){return v(A.aa,"blocklyWorkspaceChange",null,a)}g.Blockly||(g.Blockly={});g.Blockly.getMainWorkspace=function(){return A};g.Blockly.addChangeListener=yl;
g.Blockly.removeChangeListener=function(a){w(a)};G.uu={};G.al="Add Comment";G.bl="Please authorize this app to enable your work to be saved and to allow it to be shared by you.";G.cl="Change value:";G.dl="Chat with your collaborator by typing in this box!";G.el="Collapse Blocks";G.fl="Collapse Block";G.gl="colour 1";G.hl="colour 2";G.il="http://meyerweb.com/eric/tools/color-blend/";G.jl="ratio";G.kl="blend";G.ll="Blends two colours together with a given ratio (0.0 - 1.0).";G.ml="https://en.wikipedia.org/wiki/Color";G.nl="Choose a colour from the palette.";
G.ol="http://randomcolour.com";G.pl="random colour";G.ql="Choose a colour at random.";G.rl="blue";G.sl="green";G.tl="http://www.december.com/html/spec/colorper.html";G.ul="red";G.vl="colour with";G.wl="Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";G.xl="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";G.yl="break out of loop";G.zl="continue with next iteration of loop";G.Al="Break out of the containing loop.";G.Bl="Skip the rest of this loop, and continue with the next iteration.";
G.Cl="Warning: This block may only be used within a loop.";G.Dl="https://github.com/google/blockly/wiki/Loops#for-each for each block";G.Fl="in list";G.Bi="";G.Gl="for each item";G.Hl="For each item in a list, set the variable '%1' to the item, and then do some statements.";G.Il="https://github.com/google/blockly/wiki/Loops#count-with";G.Kl="from %1 to %2 by %3";G.Ll="count with";G.Ml="Have the variable %1 take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
G.Ol="Add a condition to the if block.";G.Ql="Add a final, catch-all condition to the if block.";G.Rl="https://github.com/google/blockly/wiki/IfElse";G.Tl="Add, remove, or reorder sections to reconfigure this if block.";G.Dg="else";G.Eg="else if";G.Fg="if";G.Ul="If a value is true, then do some statements.";G.Vl="If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";G.Wl="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
G.Xl="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";G.Hg="https://en.wikipedia.org/wiki/For_loop";G.Oc="do";G.Yl="repeat %1 times";G.Ci="repeat";G.Di="times";G.Ig="Do some statements several times.";G.Zl="https://github.com/google/blockly/wiki/Loops#repeat";G.am="repeat until";G.bm="repeat while";G.cm="While a value is false, then do some statements.";
G.dm="While a value is true, then do some statements.";G.em="Delete Block";G.fm="Delete %1 Blocks";G.gm="Disable Block";G.hm="Duplicate";G.im="Enable Block";G.jm="Expand Blocks";G.km="Expand Block";G.lm="External Inputs";G.nm="Help";G.om="Inline Inputs";G.rm="https://en.wikipedia.org/wiki/Linked_list#Empty_lists";G.Fi="create empty list";G.sm="Returns a list, of length 0, containing no data records";G.tm="list";G.um="Add, remove, or reorder sections to reconfigure this list block.";G.vm="create list with";
G.xm="Add an item to the list.";G.ym="Create a list with any number of items.";G.Gi="first";G.Hi="# from end";G.Ii="#";G.zm="get";G.Am="get and remove";G.Ji="last";G.Ki="random";G.Dm="remove";G.Lg="";G.et="Returns the first item in a list.";G.ft="Returns the item at the specified position in a list. #1 is the last item.";G.gt="Returns the item at the specified position in a list. #1 is the first item.";G.ht="Returns the last item in a list.";G.it="Returns a random item in a list.";G.jt="Removes and returns the first item in a list.";
G.kt="Removes and returns the item at the specified position in a list. #1 is the last item.";G.lt="Removes and returns the item at the specified position in a list. #1 is the first item.";G.mt="Removes and returns the last item in a list.";G.nt="Removes and returns a random item in a list.";G.ot="Removes the first item in a list.";G.pt="Removes the item at the specified position in a list. #1 is the last item.";G.qt="Removes the item at the specified position in a list. #1 is the first item.";
G.rt="Removes the last item in a list.";G.st="Removes a random item in a list.";G.tt="to # from end";G.ut="to #";G.vt="to last";G.Em="https://github.com/google/blockly/wiki/Lists#getting-a-sublist";G.wt="get sub-list from first";G.xt="get sub-list from # from end";G.yt="get sub-list from #";G.Mg="";G.Gm="Creates a copy of the specified portion of a list.";G.Hm="find first occurrence of item";G.Li="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";G.Jm="find last occurrence of item";
G.Km="Returns the index of the first/last occurrence of the item in the list. Returns 0 if text is not found.";G.gf="in list";G.Lm="https://github.com/google/blockly/wiki/Lists#is-empty";G.Mm="%1 is empty";G.Nm="https://github.com/google/blockly/wiki/Lists#length-of";G.Om="length of %1";G.Pm="Returns the length of a list.";G.Qm="https://github.com/google/blockly/wiki/Lists#create-list-with";G.Rm="create list with item %1 repeated %2 times";G.Sm="Creates a list consisting of the given value repeated the specified number of times.";
G.Tm="https://github.com/google/blockly/wiki/Lists#in-list--set";G.Vm="as";G.Wm="insert at";G.Xm="set";G.At="Inserts the item at the start of a list.";G.Bt="Inserts the item at the specified position in a list. #1 is the last item.";G.Ct="Inserts the item at the specified position in a list. #1 is the first item.";G.Dt="Append the item to the end of a list.";G.Et="Inserts the item randomly in a list.";G.Ft="Sets the first item in a list.";G.Gt="Sets the item at the specified position in a list. #1 is the last item.";
G.Ht="Sets the item at the specified position in a list. #1 is the first item.";G.It="Sets the last item in a list.";G.Jt="Sets a random item in a list.";G.Ym="Returns true if the list is empty.";G.Zm="false";G.$m="https://github.com/google/blockly/wiki/Logic#values";G.an="Returns either true or false.";G.bn="true";G.cn="https://en.wikipedia.org/wiki/Inequality_(mathematics)";G.dn="Return true if both inputs equal each other.";G.fn="Return true if the first input is greater than the second input.";
G.gn="Return true if the first input is greater than or equal to the second input.";G.hn="Return true if the first input is smaller than the second input.";G.jn="Return true if the first input is smaller than or equal to the second input.";G.kn="Return true if both inputs are not equal to each other.";G.ln="https://github.com/google/blockly/wiki/Logic#not";G.mn="not %1";G.nn="Returns true if the input is false. Returns false if the input is true.";G.on="null";G.pn="https://en.wikipedia.org/wiki/Nullable_type";
G.qn="Returns null.";G.rn="and";G.sn="https://github.com/google/blockly/wiki/Logic#logical-operations";G.tn="or";G.un="Return true if both inputs are true.";G.vn="Return true if at least one of the inputs is true.";G.wn="test";G.xn="https://en.wikipedia.org/wiki/%3F:";G.yn="if false";G.zn="if true";G.An="Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";G.Cn="+";G.Dn="https://en.wikipedia.org/wiki/Arithmetic";G.En="Return the sum of the two numbers.";
G.Fn="Return the quotient of the two numbers.";G.Gn="Return the difference of the two numbers.";G.Hn="Return the product of the two numbers.";G.In="Return the first number raised to the power of the second number.";G.Jn="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";G.Kn="by";G.Ln="change";G.Nn="Add a number to variable '%1'.";G.On="https://en.wikipedia.org/wiki/Mathematical_constant";G.Pn="Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
G.Qn="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";G.Rn="constrain %1 low %2 high %3";G.Sn="Constrain a number to be between the specified limits (inclusive).";G.Tn="\u00f7";G.Un="is divisible by";G.Vn="is even";G.Wn="is negative";G.Xn="is odd";G.Yn="is positive";G.Zn="is prime";G.$n="Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";G.ao="is whole";G.bo="https://en.wikipedia.org/wiki/Modulo_operation";
G.co="remainder of %1 \u00f7 %2";G.eo="Return the remainder from dividing the two numbers.";G.fo="\u00d7";G.ho="https://en.wikipedia.org/wiki/Number";G.io="A number.";G.jo="";G.ko="average of list";G.lo="max of list";G.mo="median of list";G.no="min of list";G.oo="modes of list";G.po="random item of list";G.qo="standard deviation of list";G.ro="sum of list";G.so="Return the average (arithmetic mean) of the numeric values in the list.";G.to="Return the largest number in the list.";G.uo="Return the median number in the list.";
G.vo="Return the smallest number in the list.";G.wo="Return a list of the most common item(s) in the list.";G.xo="Return a random element from the list.";G.yo="Return the standard deviation of the list.";G.zo="Return the sum of all the numbers in the list.";G.Ao="^";G.Bo="https://en.wikipedia.org/wiki/Random_number_generation";G.Co="random fraction";G.Do="Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";G.Eo="https://en.wikipedia.org/wiki/Random_number_generation";G.Fo="random integer from %1 to %2";
G.Go="Return a random integer between the two specified limits, inclusive.";G.Ho="https://en.wikipedia.org/wiki/Rounding";G.Io="round";G.Jo="round down";G.Ko="round up";G.Lo="Round a number up or down.";G.Mo="https://en.wikipedia.org/wiki/Square_root";G.No="absolute";G.Oo="square root";G.Po="Return the absolute value of a number.";G.Qo="Return e to the power of a number.";G.Ro="Return the natural logarithm of a number.";G.So="Return the base 10 logarithm of a number.";G.To="Return the negation of a number.";
G.Uo="Return 10 to the power of a number.";G.Vo="Return the square root of a number.";G.Wo="-";G.Xo="acos";G.Yo="asin";G.Zo="atan";G.$o="cos";G.ap="https://en.wikipedia.org/wiki/Trigonometric_functions";G.bp="sin";G.cp="tan";G.dp="Return the arccosine of a number.";G.ep="Return the arcsine of a number.";G.fp="Return the arctangent of a number.";G.gp="Return the cosine of a degree (not radian).";G.hp="Return the sine of a degree (not radian).";G.ip="Return the tangent of a degree (not radian).";
G.jp="Me";G.Ni="New variable...";G.kp="New variable name:";G.Tb="";G.qp="allow statements";G.rp="with:";G.Pi="";G.sp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Qi="Run the user-defined function '%1'.";G.up="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Ri="Run the user-defined function '%1' and use its output.";G.Si="with:";G.vp="Create '%1'";G.Ti="";G.wp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.Ui="do something";G.Vi="to";
G.xp="Creates a function with no output.";G.yp="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.le="return";G.Bp="Creates a function with an output.";G.Cp="Warning: This function has duplicate parameters.";G.Dp="Highlight function definition";G.Ep="If a value is true, then return a second value.";G.Fp="Warning: This block may be used only within a function definition.";G.Gp="input name:";G.Hp="Add an input to the function.";G.Ip="inputs";G.Jp="Add, remove, or reorder inputs to this function.";
G.Kp="Remove Comment";G.Wi="Rename variable...";G.Lp="Rename all '%1' variables to:";G.Rp="append text";G.Sp="https://github.com/google/blockly/wiki/Text#text-modification";G.Tp="to";G.Vp="Append some text to variable '%1'.";G.Xp="https://github.com/google/blockly/wiki/Text#adjusting-text-case";G.Yp="to lower case";G.Zp="to Title Case";G.$p="to UPPER CASE";G.aq="Return a copy of the text in a different case.";G.bq="get first letter";G.cq="get letter # from end";G.dq="get letter #";G.eq="https://github.com/google/blockly/wiki/Text#extracting-text";
G.fq="in text";G.gq="get last letter";G.hq="get random letter";G.Xi="";G.iq="Returns the letter at the specified position.";G.kq="Add an item to the text.";G.lq="join";G.mq="Add, remove, or reorder sections to reconfigure this text block.";G.au="to letter # from end";G.bu="to letter #";G.cu="to last letter";G.nq="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";G.oq="in text";G.du="get substring from first letter";G.eu="get substring from letter # from end";G.fu="get substring from letter #";
G.nf="";G.pq="Returns a specified portion of the text.";G.qq="https://github.com/google/blockly/wiki/Text#finding-text";G.rq="in text";G.sq="find first occurrence of text";G.tq="find last occurrence of text";G.Yi="";G.uq="Returns the index of the first/last occurrence of first text in the second text. Returns 0 if text is not found.";G.vq="https://github.com/google/blockly/wiki/Text#checking-for-empty-text";G.wq="%1 is empty";G.xq="Returns true if the provided text is empty.";G.yq="https://github.com/google/blockly/wiki/Text#text-creation";
G.zq="create text with";G.Aq="Create a piece of text by joining together any number of items.";G.Bq="https://github.com/google/blockly/wiki/Text#text-modification";G.Cq="length of %1";G.Dq="Returns the number of letters (including spaces) in the provided text.";G.Eq="https://github.com/google/blockly/wiki/Text#printing-text";G.Fq="print %1";G.Gq="Print the specified text, number or other value.";G.Zi="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";G.$i="Prompt for user for a number.";
G.aj="Prompt for user for some text.";G.bj="prompt for number with message";G.cj="prompt for text with message";G.Hq="https://en.wikipedia.org/wiki/String_(computer_science)";G.Iq="A letter, word, or line of text.";G.Jq="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";G.Kq="trim spaces from both sides of";G.Lq="trim spaces from left side of";G.Mq="trim spaces from right side of";G.Nq="Return a copy of the text with spaces removed from one or both ends.";G.Ad="item";G.Pq="Create 'set %1'";
G.Qq="https://github.com/google/blockly/wiki/Variables#get";G.Sq="";G.Tq="";G.Uq="Returns the value of this variable.";G.Pg="Create 'get %1'";G.Vq="https://github.com/google/blockly/wiki/Variables#set";G.Xq="to";G.Yq="set";G.Zq="Sets this variable to be equal to the input.";G.Ap=G.Vi;G.Fm=G.gf;G.Um=G.gf;G.zp=G.Ui;G.Wq=G.Ad;G.wm=G.Ad;G.Mn=G.Ad;G.Rq=G.Ad;G.$t=G.Ti;G.Bm=G.Li;G.jq=G.Ad;G.Gg=G.Oc;G.Im=G.gf;G.tp=G.Pi;G.Cm=G.gf;G.Jl=G.Oc;G.El=G.Oc;G.Sl=G.Fg;G.$l=G.Oc;G.Nl=G.Eg;G.Wp=G.Ad;G.Pl=G.Dg;var nm={};function om(a,b){var c;c=a.className;for(var d=c=l(c)&&c.match(/\S+/g)||[],e=Cb(arguments,1),h=0;h<e.length;h++)xb(d,e[h])||d.push(e[h]);a.className=c.join(" ")};var pm={en:"English"},qm=[],rm=window.BlocklyGamesLang,sm=window.BlocklyGamesLanguages,tm=!!window.location.pathname.match(/\.html$/);function um(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var H,vm=Number(um("level","NaN"));H=isNaN(vm)?1:Math.min(Math.max(1,vm),10);
function wm(){document.head.parentElement.setAttribute("dir",-1!=qm.indexOf(rm)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",rm);for(var a=[],b=0;b<sm.length;b++){var c=sm[b];a.push([pm[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==rm&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!xm(b),a&&c&&om(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(ym,1)}function xm(a){var b=zm,c;try{c=window.localStorage[b+a]}catch(d){}return c}function V(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function Am(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function ym(){if(!tm){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var W={Kd:null,g:function(){wm();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=V("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=V("Games_linkAlert"),BlocklyStorage.HASH_ERROR=V("Games_hashError"),BlocklyStorage.XML_ERROR=V("Games_xmlError"),BlocklyStorage.alert=nm.Us,a&&Am(a,BlocklyStorage.link),b&&Am(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
W.jr,!0)},Yr:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";rl(a,{media:"media/",readOnly:!0,Hu:-1!=qm.indexOf(rm),scrollbars:!1});a=um("xml","");W.hi("<xml>"+a+"</xml>")},gs:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.nk}catch(d){}c&&delete window.sessionStorage.nk;var e=xm(H),h=b&&xm(H-1);(c=c||
e||h||a)&&W.hi(c)}},hi:function(a){W.Kd?W.Kd.setValue(a,-1):(a=Pg(a),Qg(A,a))},Ls:function(){if(void 0!=typeof ra&&window.localStorage){var a=zm+H;if(W.Kd)var b=W.Kd.getValue();else b=Lg(A),b=Og(b);window.localStorage[a]=b}},Fh:function(){window.location=(tm?"index.html":"./")+"?lang="+rm},jr:function(){if(window.sessionStorage){if(W.Kd)var a=W.Kd.getValue();else a=Lg(A),a=Og(a);window.sessionStorage.nk=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),
b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},Ah:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Jh(a)},Lu:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Wb:function(a){if("click"==a.type&&"touchend"==W.Wb.Xh&&W.Wb.Wh+2E3>Date.now()||W.Wb.Xh==a.type&&W.Wb.Wh+400>Date.now())return a.preventDefault(),
a.stopPropagation(),!0;W.Wb.Xh=a.type;W.Wb.Wh=Date.now();return!1}};W.Wb.Xh=null;W.Wb.Wh=0;W.Wr=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
W.Xr=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=W;W.setCode=W.hi;var X={Ac:!1,Qj:null,wf:null,Kc:function(a,b,c,d,e,h){function k(){X.Ac&&(m.style.visibility="visible",m.style.zIndex=10,p.style.visibility="hidden")}X.Ac&&X.mb(!1);hg(!0);X.Ac=!0;X.Qj=b;X.wf=h;var m=document.getElementById("dialog");h=document.getElementById("dialogShadow");var p=document.getElementById("dialogBorder"),y;for(y in e)m.style[y]=e[y];d&&(h.style.visibility="visible",h.style.opacity=.3,h.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",m.appendChild(d),X.jh=v(d,"mousedown",
null,X.wr));m.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(X.Yf(b,!1,.2),X.Yf(m,!0,.8),setTimeout(k,175)):k()},Rj:0,Sj:0,wr:function(a){X.mh();if(!$b(a)){var b=document.getElementById("dialog");X.Rj=b.offsetLeft-a.clientX;X.Sj=b.offsetTop-a.clientY;X.lh=v(document,"mouseup",null,X.mh);X.kh=v(document,"mousemove",null,X.xr);a.stopPropagation()}},xr:function(a){var b=document.getElementById("dialog"),c=X.Rj+a.clientX;a=X.Sj+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},mh:function(){X.lh&&(w(X.lh),X.lh=null);X.kh&&(w(X.kh),X.kh=null)},mb:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(X.Ac){X.mh();X.jh&&(w(X.jh),X.jh=null);X.Ac=!1;X.wf&&X.wf();X.wf=null;var c=!1===a?null:X.Qj;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(X.Yf(a,!1,.8),X.Yf(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Yf:function(a,b,c){function d(){e.style.width=h.width+"px";e.style.height=h.height+"px";e.style.left=h.x+"px";e.style.top=h.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),h=X.Er(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Er:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Tf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Us:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");X.Kc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},X.si);X.pi()},fj:function(){if(!xm(H))if(X.Ac||0!=qi.tu)setTimeout(X.fj,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("abortOk");b.addEventListener("click",W.Fh,!0);b.addEventListener("touchend",W.Fh,
!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.ej,!0)});document.body.addEventListener("keydown",X.ej,!0)}},Au:function(){var a=document.getElementById("dialogDone");A&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("dialogCongrats");a.removeChild(b);b=document.getElementById("containerCode");a.removeChild(b);10>H?V("Games_nextLevel").replace("%1",H+
1):V("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("doneOk");1==H&&(b.addEventListener("click",function(){window.open("/puzzle","_self")},!0),b.addEventListener("touchend",function(){window.open("/puzzle","_self")},!0));2==H&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));3==H&&(b.addEventListener("click",
function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.Ed,!0)});document.body.addEventListener("keydown",X.Ed,!0)}};
window.Jd=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.Jd.$r||window.Jd.cs){var b=document.createElement("a");b.href=a;void 0!==b.yr&&(b.yr="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.Jd.$r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.Jd.cs=-1<navigator.userAgent.toLowerCase().indexOf("safari");
X.su=function(){var a=document.getElementById("dialogDone");A&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "Save" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",X.mb,!0);b.addEventListener("touchend",X.mb,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"Save";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{zs:function(a){a=a.toDataURL("image/png");window.Jd(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{zs:function(a){a=a.toDataURL("image/png");window.Jd(a)}})},!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",X.Ed,!0)});document.body.addEventListener("keydown",X.Ed,!0)};
X.lr=function(){var a=document.getElementById("dialogDone");if(A){document.getElementById("dialogLinesText").textContent="";var b=10>H?V("Games_nextLevel").replace("%1",H+1):V("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==zm?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/>":"turtle"==zm&&1==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/>":
"turtle"==zm&&2==H&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/earrings.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/>")}c=document.getElementById("doneCancel");c.addEventListener("click",X.mb,!0);c.addEventListener("touchend",X.mb,!0);c=document.getElementById("doneOk");c.addEventListener("click",W.Oh,!0);c.addEventListener("touchend",W.Oh,!0);X.Kc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
X.Ed,!0)});document.body.addEventListener("keydown",X.Ed,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==zm&&1==H&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};X.Pj=function(a){!X.Ac||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(X.mb(!0),a.stopPropagation(),a.preventDefault())};X.pi=function(){document.body.addEventListener("keydown",X.Pj,!0)};
X.si=function(){document.body.removeEventListener("keydown",X.Pj,!0)};X.Ed=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)X.mb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&W.Oh()};X.ej=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)X.mb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&W.Fh()};window.BlocklyDialogs=X;X.hideDialog=X.mb;var Bm={},Cm,Dm,Em,Y,Fm,Gm,Hm,Im;
function Jm(){function a(a){for(var b=0;5>b;b++)Z(a),Km(144)}switch(H){case 1:Z(100);Km(90);Z(100);Km(90);Z(100);Km(90);Z(100);Km(90);break;case 2:for(var b=0;4>b;b++)Z(100),Km(90);break;case 3:for(b=0;5>b;b++)Z(100),Km(72);break;case 4:Lm("#ffff00");a(100);break;case 5:Lm("#ffff00");for(b=0;4>b;b++)Mm(!1),Z(150),Km(90),Mm(!0),a(50);break;case 6:Lm("#ffff00");for(b=0;3>b;b++)Mm(!1),Z(150),Km(120),Mm(!0),a(50);Mm(!1);Km(-90);Z(100);Mm(!0);Lm("#ffffff");Z(50);break;case 7:Lm("#ffff00");for(b=0;3>b;b++)Mm(!1),
Z(150),Km(120),Mm(!0),a(50);Mm(!1);Km(-90);Z(100);Mm(!0);Lm("#ffffff");for(b=0;4>b;b++)Z(50),Z(-50),Km(45);break;case 8:Lm("#ffff00");for(b=0;3>b;b++)Mm(!1),Z(150),Km(120),Mm(!0),a(50);Mm(!1);Km(-90);Z(100);Mm(!0);Lm("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Km(1);break;case 9:Lm("#ffff00");for(b=0;3>b;b++)Mm(!1),Z(150),Km(120),Mm(!0),a(50);Mm(!1);Km(-90);Z(100);Mm(!0);Lm("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Km(1);Km(120);Z(20);Lm("#000000");for(b=0;360>b;b++)Z(50),Z(-50),Km(1)}}
function Nm(a){if(10==H)return 1<A.cb().length;console.log("Pixel errors: "+a);return 100<a?!1:2==H&&3<A.cb().length?(a=document.getElementById("helpUseLoop"),X.Kc(a,null,!1,!0,{width:"30%",left:"35%",top:"12em"},X.si),X.pi(),!1):!0};function Om(a,b,c,d,e){this.qm=b-12;this.yd=a+8;this.Kg=a+c-8;this.Sc=20;this.va=.5;this.pj=e;this.Wg=[];e=document.createElementNS(Pm,"line");e.setAttribute("class","sliderTrack");e.setAttribute("x1",a);e.setAttribute("y1",b);e.setAttribute("x2",a+c);e.setAttribute("y2",b);d.appendChild(e);e=document.createElementNS(Pm,"rect");e.setAttribute("style","opacity: 0");e.setAttribute("x",a-this.Sc);e.setAttribute("y",b-this.Sc);e.setAttribute("width",c+2*this.Sc);e.setAttribute("height",2*this.Sc);e.setAttribute("rx",
this.Sc);e.setAttribute("ry",this.Sc);d.appendChild(e);this.Xs=e;a=document.createElementNS(Pm,"path");a.setAttribute("class","sliderKnob");a.setAttribute("d","m 0,0 l -8,8 v 12 h 16 v -12 z");d.appendChild(a);this.kk=a;a=document.createElementNS(Pm,"circle");a.setAttribute("style","opacity: 0");a.setAttribute("r",this.Sc);a.setAttribute("cy",b);d.appendChild(a);this.Ih=a;for(this.ja(.5);d&&"svg"!=d.nodeName.toLowerCase();)d=d.parentNode;this.Rc=d;Qm(this.Ih,"mousedown",this,this.jk);Qm(this.Ih,"touchstart",
this,this.jk);Qm(this.Xs,"mousedown",this,this.Gs);Qm(this.Rc,"mouseup",null,Rm);Qm(this.Rc,"touchend",null,Rm);Qm(this.Rc,"mousemove",null,Sm);Qm(this.Rc,"touchmove",null,Sm);Qm(document,"mouseover",null,Tm)}var Pm="http://www.w3.org/2000/svg",Um=null,Vm=0,Wm=0;Om.prototype.jk=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Xm(a)}Um=this;Vm=Ym(this,a).x;Wm=0;var b=this.kk.getAttribute("transform");b&&(b=b.match(/translate\(\s*([-\d.]+)/))&&(Wm=Number(b[1]));a.preventDefault()};
function Rm(){Um=null}function Tm(a){if(Um){a=a.target;do if(a==Um.Rc)return;while(a=a.parentNode);Um=null}}function Sm(a){var b=Um;if(b){if("touchmove"==a.type){if(1!=a.changedTouches.length)return;Xm(a)}a=Ym(b,a).x-Vm+Wm;b.ja((a-b.yd)/(b.Kg-b.yd))}}Om.prototype.Gs=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Xm(a)}a=Ym(this,a).x;Zm(this,(a-this.yd)/(this.Kg-this.yd))};Om.prototype.Fa=function(){return this.va};
function Zm(a,b){function c(c){return function(){a.ja(c*(b-d)/9+d)}}for(;a.Wg.length;)clearTimeout(a.Wg.pop());for(var d=a.Fa(),e=0;10>e;e++)a.Wg.push(setTimeout(c(e),200*e/10))}Om.prototype.ja=function(a){this.va=Math.min(Math.max(a,0),1);a=this.yd+(this.Kg-this.yd)*this.va;this.kk.setAttribute("transform","translate("+a+","+this.qm+")");this.Ih.setAttribute("cx",a);this.pj&&this.pj(this.va)};
function Ym(a,b){var c=a.Rc.createSVGPoint();c.x=b.clientX;c.y=b.clientY;var d=a.Rc.getScreenCTM().inverse();return c.matrixTransform(d)}function Qm(a,b,c,d){a.addEventListener(b,function(a){d.apply(c,arguments)},!1)}function Xm(a){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY};/*

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
var U=new fl("JavaScript");kl("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
U.Sb=0;U.X=1;U.Wt=1;U.P=2;U.Ut=3;U.Rt=3;U.lf=4;U.Nt=4;U.Yt=4;U.mf=4;U.Xt=4;U.Zt=4;U.St=4;U.np=5;U.kf=5;U.ke=5;U.Ng=6;U.pp=6;U.Pt=7;U.op=8;U.Tt=8;U.Vt=8;U.Oi=9;U.Mt=10;U.Qt=11;U.Ot=12;U.lp=13;U.mp=14;U.jf=15;U.Qc=16;U.pa=17;U.S=99;U.g=function(a){U.Hd=Object.create(null);U.Yj=Object.create(null);U.da?U.da.reset():U.da=new Ga(U.Og);var b=[];a=ag(a);for(var c=0;c<a.length;c++)b[c]="var "+U.da.getName(a[c],"VARIABLE")+";";U.Hd.variables=b.join("\n")};
U.finish=function(a){var b=[],c;for(c in U.Hd)b.push(U.Hd[c]);return b.join("\n\n")+"\n\n\n"+a};U.Ik=function(a){return a+";\n"};U.Ak=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
U.ci=function(a,b){var c="";if(!a.G||!a.G.w){var d=a.Df();d&&(c+=gl(d,"// ")+"\n");for(var e=0;e<a.T.length;e++)if(1==a.T[e].type){var h=I(a.T[e].s);if(h){for(var d=[],h=h.Eb(),k=0;k<h.length;k++){var m=h[k].Df();m&&d.push(m)}d.length&&d.push("");(d=d.join("\n"))&&(c+=gl(d,"// "))}}}e=hl(U,a.C&&I(a.C));return c+b+e};/*

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
U.fs={};U.lists_create_empty=function(){return["[]",U.Sb]};U.lists_create_with=function(a){for(var b=Array(a.ha),c=0;c<a.ha;c++)b[c]=T(a,"ADD"+c,U.pa)||"null";b="["+b.join(", ")+"]";return[b,U.Sb]};U.lists_repeat=function(a){var b=ll("lists_repeat",["function "+U.Ca+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=T(a,"ITEM",U.pa)||"null";a=T(a,"NUM",U.pa)||"0";return[b+"("+c+", "+a+")",U.P]};
U.lists_length=function(a){return[(T(a,"VALUE",U.P)||"[]")+".length",U.X]};U.lists_isEmpty=function(a){return["!"+(T(a,"VALUE",U.X)||"[]")+".length",U.lf]};U.lists_indexOf=function(a){var b="FIRST"==P(a,"END")?"indexOf":"lastIndexOf",c=T(a,"FIND",U.S)||"''";return[(T(a,"VALUE",U.X)||"[]")+"."+b+"("+c+") + 1",U.X]};
U.lists_getIndex=function(a){var b=P(a,"MODE")||"GET",c=P(a,"WHERE")||"FROM_START",d=T(a,"AT",U.mf)||"1";a=T(a,"VALUE",U.X)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",U.X];if("GET_REMOVE"==b)return[a+".shift()",U.X];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",U.X];if("GET_REMOVE"==b)return[a+".pop()",U.X];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=yk(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",U.X];if("GET_REMOVE"==
b)return[a+".splice("+d+", 1)[0]",U.P];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",U.P];if("GET_REMOVE"==b||"REMOVE"==b){c=ll("lists_remove_from_end",["function "+U.Ca+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,U.P];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=ll("lists_get_random_item",["function "+U.Ca+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);",
"  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,U.P];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
U.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Ha(U.da,"tmp_list"),b="var "+a+" = "+c+";\n";c=a;return b}var c=T(a,"LIST",U.X)||"[]",d=P(a,"MODE")||"GET",e=P(a,"WHERE")||"FROM_START",h=T(a,"AT",U.S)||"1";a=T(a,"TO",U.Qc)||"null";if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==
e){h=yk(h)?parseFloat(h)-1:h+" - 1";if("SET"==d)return c+"["+h+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+h+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+c+".length - "+h+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();h=Ha(U.da,"tmp_x");e+="var "+h+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+h+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";
};
U.lists_getSublist=function(a){var b=T(a,"LIST",U.X)||"[]",c=P(a,"WHERE1"),d=P(a,"WHERE2"),e=T(a,"AT1",U.S)||"1";a=T(a,"AT2",U.S)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":ll("lists_get_sublist",["function "+U.Ca+"(list, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {",
"      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",U.P]};/*

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
U.$s={};U.variables_get=function(a){return[U.da.getName(P(a,"VAR"),"VARIABLE"),U.Sb]};U.variables_set=function(a){var b=T(a,"VALUE",U.Qc)||"0";return U.da.getName(P(a,"VAR"),"VARIABLE")+" = "+b+";\n"};/*

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
U.text={};U.text=function(a){return[U.Ak(P(a,"TEXT")),U.Sb]};U.text_join=function(a){var b;if(0==a.ha)return["''",U.Sb];if(1==a.ha)return b=T(a,"ADD0",U.S)||"''",["String("+b+")",U.P];if(2==a.ha)return b=T(a,"ADD0",U.S)||"''",a=T(a,"ADD1",U.S)||"''",["String("+b+") + String("+a+")",U.Ng];b=Array(a.ha);for(var c=0;c<a.ha;c++)b[c]=T(a,"ADD"+c,U.pa)||"''";b="["+b.join(",")+"].join('')";return[b,U.P]};
U.text_append=function(a){var b=U.da.getName(P(a,"VAR"),"VARIABLE");a=T(a,"TEXT",U.S)||"''";return b+" = String("+b+") + String("+a+");\n"};U.text_length=function(a){return[(T(a,"VALUE",U.P)||"''")+".length",U.X]};U.text_isEmpty=function(a){return["!"+(T(a,"VALUE",U.X)||"''"),U.lf]};U.text_indexOf=function(a){var b="FIRST"==P(a,"END")?"indexOf":"lastIndexOf",c=T(a,"FIND",U.S)||"''";return[(T(a,"VALUE",U.X)||"''")+"."+b+"("+c+") + 1",U.X]};
U.text_charAt=function(a){var b=P(a,"WHERE")||"FROM_START",c=T(a,"AT",U.mf)||"1";a=T(a,"VALUE",U.X)||"''";switch(b){case "FIRST":return[a+".charAt(0)",U.P];case "LAST":return[a+".slice(-1)",U.P];case "FROM_START":return c=yk(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",U.P];case "FROM_END":return[a+".slice(-"+c+").charAt(0)",U.P];case "RANDOM":return b=ll("text_random_letter",["function "+U.Ca+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",[b,
U.P]}throw"Unhandled option (text_charAt).";};
U.text_getSubstring=function(a){var b=T(a,"STRING",U.X)||"''",c=P(a,"WHERE1"),d=P(a,"WHERE2"),e=T(a,"AT1",U.S)||"1";a=T(a,"AT2",U.S)||"1";return["FIRST"==c&&"LAST"==d?b:ll("text_get_substring",["function "+U.Ca+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;",
"    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",U.P]};
U.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[P(a,"CASE")];b?(a=T(a,"TEXT",U.X)||"''",a+=b):(b=ll("text_toTitleCase",["function "+U.Ca+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=T(a,"TEXT",U.S)||"''",a=b+"("+a+")");return[a,U.P]};
U.text_trim=function(a){var b={LEFT:".trimLeft()",RIGHT:".trimRight()",BOTH:".trim()"}[P(a,"MODE")];return[(T(a,"TEXT",U.X)||"''")+b,U.P]};U.text_print=function(a){return"window.alert("+(T(a,"TEXT",U.S)||"''")+");\n"};U.text_prompt=function(a){var b="window.prompt("+U.Ak(P(a,"TEXT"))+")";"NUMBER"==P(a,"TYPE")&&(b="parseFloat("+b+")");return[b,U.P]};U.text_prompt_ext=function(a){var b="window.prompt("+(T(a,"TEXT",U.S)||"''")+")";"NUMBER"==P(a,"TYPE")&&(b="parseFloat("+b+")");return[b,U.P]};/*

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
U.tj={};U.colour_picker=function(a){return["'"+P(a,"COLOUR")+"'",U.Sb]};U.colour_random=function(){return[ll("colour_random",["function "+U.Ca+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",U.P]};
U.colour_rgb=function(a){var b=T(a,"RED",U.pa)||0,c=T(a,"GREEN",U.pa)||0;a=T(a,"BLUE",U.pa)||0;return[ll("colour_rgb",["function "+U.Ca+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;","  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",U.P]};
U.colour_blend=function(a){var b=T(a,"COLOUR1",U.pa)||"'#000000'",c=T(a,"COLOUR2",U.pa)||"'#000000'";a=T(a,"RATIO",U.pa)||.5;return[ll("colour_blend",["function "+U.Ca+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);","  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);",
"  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",U.P]};/*

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
C.$s={};C.variables_get={g:function(){this.p=G.Qq;this.j(330);O(O(O(R(this),G.Tq),new eg(G.Rq),"VAR"),G.Sq);L(this,!0);this.i(G.Uq);this.wj=G.Pq;this.xj="variables_set"},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")},ub:function(a){var b={enabled:!0},c=P(this,"VAR");b.text=this.wj.replace("%1",c);c=D("field",null,c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type",this.xj);b.Va=fk.rf(this,c);a.push(b)}};
C.variables_set={g:function(){this.p=G.Vq;this.j(330);this.sa(G.Yq+" %1 "+G.Xq+" %2",["VAR",new eg(G.Wq)],["VALUE",null,1],1);M(this,!0);N(this,!0);this.i(G.Zq);this.wj=G.Pg;this.xj="variables_get"},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")},ub:C.variables_get.ub};/*

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
C.tj={};C.colour_picker={g:function(){this.p=G.ml;this.j(330);O(R(this),new Uk("#ff0000"),"COLOUR");L(this,!0,"Colour");this.i(G.nl)}};C.colour_random={g:function(){this.p=G.ol;this.j(20);O(R(this),G.pl);L(this,!0,"Colour");this.i(G.ql)}};C.colour_rgb={g:function(){this.p=G.tl;this.j(20);O(O(Ri(Q(this,"RED").v("Number"),1),G.vl),G.ul);O(Ri(Q(this,"GREEN").v("Number"),1),G.sl);O(Ri(Q(this,"BLUE").v("Number"),1),G.rl);L(this,!0,"Colour");this.i(G.wl)}};
C.colour_blend={g:function(){this.p=G.il;this.j(20);O(O(Ri(Q(this,"COLOUR1").v("Colour"),1),G.kl),G.gl);O(Ri(Q(this,"COLOUR2").v("Colour"),1),G.hl);O(Ri(Q(this,"RATIO").v("Number"),1),G.jl);L(this,!0,"Colour");this.i(G.ll)}};/*

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
C.js={};C.controls_repeat={g:function(){this.p=G.Hg;this.j(120);O(O(O(R(this),G.Ci),new $k("10",el),"TIMES"),G.Di);O(aj(this,3,"DO"),G.Oc);M(this,!0);N(this,!0);this.i(G.Ig)}};C.controls_repeat_ext={g:function(){this.p=G.Hg;this.j(120);this.sa(G.Yl,["TIMES","Number",1],1);O(aj(this,3,"DO"),G.Oc);M(this,!0);N(this,!0);Tg(this,!0);this.i(G.Ig)}};
C.controls_whileUntil={g:function(){var a=[[G.bm,"WHILE"],[G.am,"UNTIL"]];this.p=G.Zl;this.j(120);O(Q(this,"BOOL").v("Boolean"),new F(a),"MODE");O(aj(this,3,"DO"),G.$l);M(this,!0);N(this,!0);var b=this;this.i(function(){var a=P(b,"MODE");return{WHILE:G.dm,UNTIL:G.cm}[a]})}};
C.controls_for={g:function(){this.p=G.Il;this.j(120);O(O(R(this),G.Ll),new eg(null),"VAR");this.sa(G.Kl,["FROM","Number",1],["TO","Number",1],["BY","Number",1],1);O(aj(this,3,"DO"),G.Jl);M(this,!0);N(this,!0);Tg(this,!0);var a=this;this.i(function(){return G.Ml.replace("%1",P(a,"VAR"))})},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")},ub:function(a){if(!this.isCollapsed()){var b={enabled:!0},c=P(this,"VAR");b.text=G.Pg.replace("%1",c);c=D("field",null,
c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type","variables_get");b.Va=fk.rf(this,c);a.push(b)}}};C.controls_forEach={g:function(){this.p=G.Dl;this.j(120);O(O(O(Q(this,"LIST").v("Array"),G.Gl),new eg(null),"VAR"),G.Fl);G.Bi&&(O(R(this),G.Bi),Tg(this,!0));O(aj(this,3,"DO"),G.El);M(this,!0);N(this,!0);var a=this;this.i(function(){return G.Hl.replace("%1",P(a,"VAR"))})},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")},ub:C.controls_for.ub};
C.controls_flow_statements={g:function(){var a=[[G.yl,"BREAK"],[G.zl,"CONTINUE"]];this.p=G.xl;this.j(120);O(R(this),new F(a),"FLOW");M(this,!0);var b=this;this.i(function(){var a=P(b,"FLOW");return{BREAK:G.Al,CONTINUE:G.Bl}[a]})},onchange:function(){if(this.t){var a=!1,b=this;do{if("controls_repeat"==b.type||"controls_repeat_ext"==b.type||"controls_forEach"==b.type||"controls_for"==b.type||"controls_whileUntil"==b.type){a=!0;break}b=Xi(b)}while(b);a?this.sd(null):this.sd(G.Cl)}}};/*

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
U.ks={};U.math_number=function(a){return[parseFloat(P(a,"NUM")),U.Sb]};U.math_arithmetic=function(a){var b={ADD:[" + ",U.Ng],MINUS:[" - ",U.pp],MULTIPLY:[" * ",U.np],DIVIDE:[" / ",U.kf],POWER:[null,U.pa]}[P(a,"OP")],c=b[0],b=b[1],d=T(a,"A",b)||"0";a=T(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",U.P]};
U.math_single=function(a){var b=P(a,"OP"),c;if("NEG"==b)return a=T(a,"NUM",U.mf)||"0","-"==a[0]&&(a=" "+a),["-"+a,U.mf];a="SIN"==b||"COS"==b||"TAN"==b?T(a,"NUM",U.kf)||"0":T(a,"NUM",U.S)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,U.P];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,U.kf]};
U.math_constant=function(a){return{PI:["Math.PI",U.X],E:["Math.E",U.X],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",U.kf],SQRT2:["Math.SQRT2",U.X],SQRT1_2:["Math.SQRT1_2",U.X],INFINITY:["Infinity",U.Sb]}[P(a,"CONSTANT")]};
U.math_number_property=function(a){var b=T(a,"NUMBER_TO_CHECK",U.ke)||"0",c=P(a,"PROPERTY"),d;if("PRIME"==c)return d=ll("math_isPrime",["function "+U.Ca+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,U.P];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=T(a,"DIVISOR",U.ke)||"0",d=b+" % "+a+" == 0"}return[d,U.Oi]};
U.math_change=function(a){var b=T(a,"DELTA",U.Ng)||"0";a=U.da.getName(P(a,"VAR"),"VARIABLE");return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};U.math_round=U.math_single;U.math_trig=U.math_single;
U.math_on_list=function(a){var b=P(a,"OP");switch(b){case "SUM":a=T(a,"LIST",U.X)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=T(a,"LIST",U.pa)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=T(a,"LIST",U.pa)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=ll("math_mean",["function "+U.Ca+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=T(a,"LIST",U.S)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=ll("math_median",
["function "+U.Ca+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=T(a,"LIST",U.S)||"[]";a=b+"("+a+")";break;case "MODE":b=ll("math_modes",["function "+U.Ca+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=T(a,"LIST",U.S)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=ll("math_standard_deviation",["function "+U.Ca+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=T(a,"LIST",U.S)||"[]";a=b+"("+a+")";break;case "RANDOM":b=ll("math_random_list",["function "+U.Ca+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=T(a,"LIST",U.S)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,U.P]};U.math_modulo=function(a){var b=T(a,"DIVIDEND",U.ke)||"0";a=T(a,"DIVISOR",U.ke)||"0";return[b+" % "+a,U.ke]};
U.math_constrain=function(a){var b=T(a,"VALUE",U.pa)||"0",c=T(a,"LOW",U.pa)||"0";a=T(a,"HIGH",U.pa)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",U.P]};U.math_random_int=function(a){var b=T(a,"FROM",U.pa)||"0";a=T(a,"TO",U.pa)||"0";return[ll("math_random_int",["function "+U.Ca+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",U.P]};
U.math_random_float=function(){return["Math.random()",U.P]};/*

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
C.text={};C.text={g:function(){this.p=G.Hq;this.j(160);O(O(O(R(this),this.Xd(!0)),new $k(""),"TEXT"),this.Xd(!1));L(this,!0,"String");this.i(G.Iq)},Xd:function(a){return new Gl(qh+(a==q?"quote1.png":"quote0.png"),12,12,'"')}};
C.text_join={g:function(){this.p=G.yq;this.j(160);this.ha=2;this.fc();L(this,!0,"String");this.ae(new Rh(["text_create_join_item"]));this.i(G.Aq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ha);return a},Oa:function(a){this.ha=parseInt(a.getAttribute("items"),10);this.fc()},Gd:function(a){var b=hc(a,"text_create_join_container");b.ra();for(var c=J(b,"STACK").s,d=0;d<this.ha;d++){var e=hc(a,"text_create_join_item");e.ra();Xg(c,e.K);c=e.C}return b},Dd:function(a){a=
cj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.ge,a=a.C&&I(a.C),c++;this.ha=c;this.fc();for(c=0;c<this.ha;c++)b[c]&&Xg(J(this,"ADD"+c).s,b[c])},Qe:function(a){a=cj(a,"STACK");for(var b=0;a;){var c=J(this,"ADD"+b);a.ge=c&&c.s.w;b++;a=a.C&&I(a.C)}},fc:function(){if(J(this,"EMPTY"))S(this,"EMPTY");else for(var a=0;J(this,"ADD"+a);)S(this,"ADD"+a),a++;if(0==this.ha)O(O(R(this,"EMPTY"),new Gl(qh+"quote0.png",12,12,'"')),new Gl(qh+"quote1.png",12,12,'"'));else for(a=0;a<this.ha;a++){var b=Q(this,"ADD"+a);0==
a&&O(b,G.zq)}}};C.text_create_join_container={g:function(){this.j(160);O(R(this),G.lq);aj(this,3,"STACK");this.i(G.mq);this.contextMenu=!1}};C.text_create_join_item={g:function(){this.j(160);O(R(this),G.jq);M(this,!0);N(this,!0);this.i(G.kq);this.contextMenu=!1}};
C.text_append={g:function(){this.p=G.Sp;this.j(160);O(O(O(Q(this,"TEXT"),G.Tp),new eg(G.Wp),"VAR"),G.Rp);M(this,!0);N(this,!0);var a=this;this.i(function(){return G.Vp.replace("%1",P(a,"VAR"))})},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")}};C.text_length={g:function(){this.p=G.Bq;this.j(160);this.sa(G.Cq,["VALUE",["String","Array"],1],1);L(this,!0,"Number");this.i(G.Dq)}};
C.text_isEmpty={g:function(){this.p=G.vq;this.j(160);this.sa(G.wq,["VALUE",["String","Array"],1],1);L(this,!0,"Boolean");this.i(G.xq)}};C.text_indexOf={g:function(){var a=[[G.sq,"FIRST"],[G.tq,"LAST"]];this.p=G.qq;this.j(160);L(this,!0,"Number");O(Q(this,"VALUE").v("String"),G.rq);O(Q(this,"FIND").v("String"),new F(a),"END");G.Yi&&O(R(this),G.Yi);Tg(this,!0);this.i(G.uq)}};
C.text_charAt={g:function(){this.me=[[G.dq,"FROM_START"],[G.cq,"FROM_END"],[G.bq,"FIRST"],[G.gq,"LAST"],[G.hq,"RANDOM"]];this.p=G.eq;this.j(160);L(this,!0,"String");O(Q(this,"VALUE").v("String"),G.fq);R(this,"AT");Tg(this,!0);this.ca(!0);this.i(G.iq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at",1==J(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ca(a)},ca:function(a){S(this,"AT");S(this,"ORDINAL",!0);a?(Q(this,"AT").v("Number"),G.Tb&&
O(R(this,"ORDINAL"),G.Tb)):R(this,"AT");G.Xi&&(S(this,"TAIL",!0),O(R(this,"TAIL"),G.Xi));var b=new F(this.me,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});O(J(this,"AT"),b,"WHERE")}};
C.text_getSubstring={g:function(){this.p=G.nq;this.j(160);O(Q(this,"STRING").v("String"),G.oq);R(this,"AT1");R(this,"AT2");G.nf&&O(R(this,"TAIL"),G.nf);Tg(this,!0);L(this,!0,"String");this.ca(1,!0);this.ca(2,!0);this.i(G.pq)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==J(this,"AT1").type);a.setAttribute("at2",1==J(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ca(1,b);this.ca(2,a)},ca:function(a,
b){S(this,"AT"+a);S(this,"ORDINAL"+a,!0);b?(Q(this,"AT"+a).v("Number"),G.Tb&&O(R(this,"ORDINAL"+a),G.Tb)):R(this,"AT"+a);2==a&&G.nf&&(S(this,"TAIL",!0),O(R(this,"TAIL"),G.nf));var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ca(a,e);ic(h,c,"WHERE"+a);return null}});O(J(this,"AT"+a),c,"WHERE"+a);1==a&&bj(this,"AT1","AT2")}};
C.text_changeCase={g:function(){var a=[[G.$p,"UPPERCASE"],[G.Yp,"LOWERCASE"],[G.Zp,"TITLECASE"]];this.p=G.Xp;this.j(160);O(Q(this,"TEXT").v("String"),new F(a),"CASE");L(this,!0,"String");this.i(G.aq)}};C.text_trim={g:function(){var a=[[G.Kq,"BOTH"],[G.Lq,"LEFT"],[G.Mq,"RIGHT"]];this.p=G.Jq;this.j(160);O(Q(this,"TEXT").v("String"),new F(a),"MODE");L(this,!0,"String");this.i(G.Nq)}};C.text_print={g:function(){this.p=G.Eq;this.j(160);this.sa(G.Fq,["TEXT",null,1],1);M(this,!0);N(this,!0);this.i(G.Gq)}};
C.text_prompt={g:function(){var a=[[G.cj,"TEXT"],[G.bj,"NUMBER"]],b=this;this.p=G.Zi;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});O(O(O(O(R(this),a,"TYPE"),this.Xd(!0)),new $k(""),"TEXT"),this.Xd(!1));L(this,!0,"String");b=this;this.i(function(){return"TEXT"==P(b,"TYPE")?G.aj:G.$i})},Xd:C.text.Xd};
C.text_prompt_ext={g:function(){var a=[[G.cj,"TEXT"],[G.bj,"NUMBER"]],b=this;this.p=G.Zi;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});O(Q(this,"TEXT"),a,"TYPE");L(this,!0,"String");b=this;this.i(function(){return"TEXT"==P(b,"TYPE")?G.aj:G.$i})}};/*

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
C.Es={};
C.procedures_defnoreturn={g:function(){this.p=G.wp;this.j(290);var a=dc(G.Ui,this);O(O(O(R(this),G.Vi),new $k(a,fc),"NAME"),"","PARAMS");this.ae(new Rh(["procedures_mutatorarg"]));this.i(G.xp);this.A=[];this.rd(!0);this.pb=null},rd:function(a){this.Nf!==a&&(a?(O(aj(this,3,"STACK"),G.Ti),J(this,"RETURN")&&bj(this,"STACK","RETURN")):S(this,"STACK",!0),this.Nf=a)},bf:function(){for(var a=!1,b={},c=0;c<this.A.length;c++){if(b["arg_"+this.A[c].toLowerCase()]){a=!0;break}b["arg_"+this.A[c].toLowerCase()]=!0}a?
this.sd(G.Cp):this.sd(null);a="";this.A.length&&(a=G.rp+" "+this.A.join(", "));ic(this,a,"PARAMS")},Ia:function(){for(var a=document.createElement("mutation"),b=0;b<this.A.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}this.Nf||a.setAttribute("statements","false");return a},Oa:function(a){this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.bf();this.rd("false"!==a.getAttribute("statements"))},
Gd:function(a){var b=hc(a,"procedures_mutatorcontainer");b.ra();J(this,"RETURN")?ic(b,this.Nf?"TRUE":"FALSE","STATEMENTS"):J(b,"STATEMENT_INPUT").O(!1);for(var c=J(b,"STACK").s,d=0;d<this.A.length;d++){var e=hc(a,"procedures_mutatorarg");e.ra();ic(e,this.A[d],"NAME");e.Cu=d;Xg(c,e.K);c=e.C}kc(P(this,"NAME"),this.t,this.A,null);return b},Dd:function(a){this.A=[];this.Sh=[];for(var b=cj(a,"STACK");b;)this.A.push(P(b,"NAME")),this.Sh.push(b.id),b=b.C&&I(b.C);this.bf();kc(P(this,"NAME"),this.t,this.A,
this.Sh);a=P(a,"STATEMENTS");if(null!==a&&(a="TRUE"==a,this.Nf!=a))if(a)this.rd(!0),a=J(this,"STACK").s,a.w||!this.pb||this.pb.w||this.pb.h.t!=this.t?this.pb=null:Xg(a,this.pb);else{a=J(this,"STACK").s;if(this.pb=a.w)a=I(a),a.ab(null),a.Ma();this.rd(!1)}},m:function(){for(var a=P(this,"NAME"),a=jc(a,this.t),b=0;b<a.length;b++)a[b].m(!0,!1);this.constructor.prototype.m.apply(this,arguments)},Jf:function(){return[P(this,"NAME"),this.A,!1]},Zb:function(){return this.A},Hb:function(a,b){for(var c=!1,
d=0;d<this.A.length;d++)Ia(a,this.A[d])&&(this.A[d]=b,c=!0);if(c&&(this.bf(),this.Gb.zu()))for(var c=this.Gb.u.cb(),d=0,e;e=c[d];d++)"procedures_mutatorarg"==e.type&&Ia(a,P(e,"NAME"))&&ic(e,b,"NAME")},ub:function(a){var b={enabled:!0},c=P(this,"NAME");b.text=G.vp.replace("%1",c);var d=D("mutation");d.setAttribute("name",c);for(var e=0;e<this.A.length;e++)c=D("arg"),c.setAttribute("name",this.A[e]),d.appendChild(c);d=D("block",null,d);d.setAttribute("type",this.nj);b.Va=fk.rf(this,d);a.push(b);if(!this.isCollapsed())for(e=
0;e<this.A.length;e++)b={enabled:!0},c=this.A[e],b.text=G.Pg.replace("%1",c),d=D("field",null,c),d.setAttribute("name","VAR"),d=D("block",null,d),d.setAttribute("type","variables_get"),b.Va=fk.rf(this,d),a.push(b)},nj:"procedures_callnoreturn"};
C.procedures_defreturn={g:function(){this.p=G.yp;this.j(290);var a=dc(G.zp,this);O(O(O(R(this),G.Ap),new $k(a,fc),"NAME"),"","PARAMS");O(Ri(Q(this,"RETURN"),1),G.le);this.ae(new Rh(["procedures_mutatorarg"]));this.i(G.Bp);this.A=[];this.rd(!0);this.pb=null},rd:C.procedures_defnoreturn.rd,bf:C.procedures_defnoreturn.bf,Ia:C.procedures_defnoreturn.Ia,Oa:C.procedures_defnoreturn.Oa,Gd:C.procedures_defnoreturn.Gd,Dd:C.procedures_defnoreturn.Dd,m:C.procedures_defnoreturn.m,Jf:function(){return[P(this,
"NAME"),this.A,!0]},Zb:C.procedures_defnoreturn.Zb,Hb:C.procedures_defnoreturn.Hb,ub:C.procedures_defnoreturn.ub,nj:"procedures_callreturn"};C.procedures_mutatorcontainer={g:function(){this.j(290);O(R(this),G.Ip);aj(this,3,"STACK");O(O(R(this,"STATEMENT_INPUT"),G.qp),new zk("TRUE"),"STATEMENTS");this.i(G.Jp);this.contextMenu=!1}};
C.procedures_mutatorarg={g:function(){this.j(290);O(O(R(this),G.Gp),new $k("x",this.Zs),"NAME");M(this,!0);N(this,!0);this.i(G.Hp);this.contextMenu=!1},Zs:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
C.procedures_callnoreturn={g:function(){this.p=G.sp;this.j(290);O(O(O(R(this),G.Pi),"","NAME"),G.Si,"WITH");M(this,!0);N(this,!0);this.A=[];this.Gc=this.ld=null},Md:function(){return P(this,"NAME")},$h:function(a,b){Ia(a,this.Md())&&(ic(this,b,"NAME"),this.i((this.G?G.Ri:G.Qi).replace("%1",b)))},ce:function(a,b){if(b){if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";this.Gc||(this.ld={},this.Gc=a.join("\n")==this.A.join("\n")?b:[]);var c=this.B;this.B=!1;for(var d=
this.A.length-1;0<=d;d--){var e=J(this,"ARG"+d);if(e){var h=e.s.w;this.ld[this.Gc[d]]=h;S(this,"ARG"+d)}}this.A=[].concat(a);this.Gc=b;for(d=0;d<this.A.length;d++)if(e=O(Ri(Q(this,"ARG"+d),1),this.A[d]),this.Gc){var k=this.Gc[d];k in this.ld&&(h=this.ld[k],!h||h.w||h.h.t!=this.t?delete this.ld[k]:Xg(e.s,h))}Zi(this,"WITH").O(!!this.A.length);(this.B=c)&&this.F()}else this.ld={},this.Gc=null},Ia:function(){var a=document.createElement("mutation");a.setAttribute("name",this.Md());for(var b=0;b<this.A.length;b++){var c=
document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}return a},Oa:function(a){var b=a.getAttribute("name");ic(this,b,"NAME");this.i((this.G?G.Ri:G.Qi).replace("%1",b));if((b=lc(b,this.t))&&b.Gb.J())this.ce(b.A,b.Sh);else{this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.ce(this.A,this.A)}},Hb:function(a,b){for(var c=0;c<this.A.length;c++)Ia(a,this.A[c])&&(this.A[c]=b,J(this,"ARG"+c).Pa[0].ia(b))},ub:function(a){var b=
{enabled:!0};b.text=G.Dp;var c=this.Md(),d=this.t;b.Va=function(){var a=lc(c,d);a&&a.select()};a.push(b)}};C.procedures_callreturn={g:function(){this.p=G.up;this.j(290);O(O(O(R(this),G.tp),"","NAME"),G.Si,"WITH");L(this,!0);this.A=[];this.Gc=this.ld=null},Md:C.procedures_callnoreturn.Md,$h:C.procedures_callnoreturn.$h,ce:C.procedures_callnoreturn.ce,Ia:C.procedures_callnoreturn.Ia,Oa:C.procedures_callnoreturn.Oa,Hb:C.procedures_callnoreturn.Hb,ub:C.procedures_callnoreturn.ub};
C.procedures_ifreturn={g:function(){this.p="http://c2.com/cgi/wiki?GuardClause";this.j(290);O(Q(this,"CONDITION").v("Boolean"),G.Fg);O(Q(this,"VALUE"),G.le);Tg(this,!0);M(this,!0);N(this,!0);this.i(G.Ep);this.zc=!0},Ia:function(){var a=document.createElement("mutation");a.setAttribute("value",Number(this.zc));return a},Oa:function(a){this.zc=1==a.getAttribute("value");this.zc||(S(this,"VALUE"),O(R(this,"VALUE"),G.le))},onchange:function(){if(this.t){var a=!1,b=this;do{if("procedures_defnoreturn"==
b.type||"procedures_defreturn"==b.type){a=!0;break}b=Xi(b)}while(b);a?("procedures_defnoreturn"==b.type&&this.zc?(S(this,"VALUE"),O(R(this,"VALUE"),G.le),this.zc=!1):"procedures_defreturn"!=b.type||this.zc||(S(this,"VALUE"),O(Q(this,"VALUE"),G.le),this.zc=!0),this.sd(null)):this.sd(G.Fp)}}};/*

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
U.hs={};U.controls_if=function(a){for(var b=0,c=T(a,"IF"+b,U.S)||"false",d=il(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.Ya;b++)c=T(a,"IF"+b,U.S)||"false",d=il(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.vb&&(d=il(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};U.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[P(a,"OP")],c="=="==b||"!="==b?U.Oi:U.op,d=T(a,"A",c)||"0";a=T(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
U.logic_operation=function(a){var b="AND"==P(a,"OP")?"&&":"||",c="&&"==b?U.lp:U.mp,d=T(a,"A",c);a=T(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};U.logic_negate=function(a){var b=U.lf;return["!"+(T(a,"BOOL",b)||"true"),b]};U.logic_boolean=function(a){return["TRUE"==P(a,"BOOL")?"true":"false",U.Sb]};U.logic_null=function(){return["null",U.Sb]};
U.logic_ternary=function(a){var b=T(a,"IF",U.jf)||"false",c=T(a,"THEN",U.jf)||"null";a=T(a,"ELSE",U.jf)||"null";return[b+" ? "+c+" : "+a,U.jf]};/*

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
U.Es={};U.procedures_defreturn=function(a){var b=U.da.getName(P(a,"NAME"),"PROCEDURE"),c=il(a,"STACK");U.zd&&(c=gl(U.zd.replace(/%1/g,"'"+a.id+"'"),U.ie)+c);U.ff&&(c=U.ff.replace(/%1/g,"'"+a.id+"'")+c);var d=T(a,"RETURN",U.S)||"";d&&(d="  return "+d+";\n");for(var e=[],h=0;h<a.A.length;h++)e[h]=U.da.getName(a.A[h],"VARIABLE");c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=U.ci(a,c);U.Hd[b]=c;return null};U.procedures_defnoreturn=U.procedures_defreturn;
U.procedures_callreturn=function(a){for(var b=U.da.getName(P(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=T(a,"ARG"+d,U.pa)||"null";return[b+"("+c.join(", ")+")",U.P]};U.procedures_callnoreturn=function(a){for(var b=U.da.getName(P(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=T(a,"ARG"+d,U.pa)||"null";return b+"("+c.join(", ")+");\n"};
U.procedures_ifreturn=function(a){var b="if ("+(T(a,"CONDITION",U.S)||"false")+") {\n";a.zc?(a=T(a,"VALUE",U.S)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};/*

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
C.hs={};
C.controls_if={g:function(){this.p=G.Rl;this.j(210);O(Q(this,"IF0").v("Boolean"),G.Fg);O(aj(this,3,"DO0"),G.Gg);M(this,!0);N(this,!0);this.ae(new Rh(["controls_if_elseif","controls_if_else"]));var a=this;this.i(function(){if(a.Ya||a.vb){if(!a.Ya&&a.vb)return G.Vl;if(a.Ya&&!a.vb)return G.Wl;if(a.Ya&&a.vb)return G.Xl}else return G.Ul;return""});this.vb=this.Ya=0},Ia:function(){if(!this.Ya&&!this.vb)return null;var a=document.createElement("mutation");this.Ya&&a.setAttribute("elseif",this.Ya);this.vb&&
a.setAttribute("else",1);return a},Oa:function(a){this.Ya=parseInt(a.getAttribute("elseif"),10);this.vb=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.Ya;a++)O(Q(this,"IF"+a).v("Boolean"),G.Eg),O(aj(this,3,"DO"+a),G.Gg);this.vb&&O(aj(this,3,"ELSE"),G.Dg)},Gd:function(a){var b=hc(a,"controls_if_if");b.ra();for(var c=J(b,"STACK").s,d=1;d<=this.Ya;d++){var e=hc(a,"controls_if_elseif");e.ra();Xg(c,e.K);c=e.C}this.vb&&(a=hc(a,"controls_if_else"),a.ra(),Xg(c,a.K));return b},Dd:function(a){this.vb&&
S(this,"ELSE");this.vb=0;for(var b=this.Ya;0<b;b--)S(this,"IF"+b),S(this,"DO"+b);this.Ya=0;for(a=cj(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.Ya++;var b=O(Q(this,"IF"+this.Ya).v("Boolean"),G.Eg),c=aj(this,3,"DO"+this.Ya);O(c,G.Gg);a.ge&&Xg(b.s,a.ge);a.pb&&Xg(c.s,a.pb);break;case "controls_if_else":this.vb++;b=aj(this,3,"ELSE");O(b,G.Dg);a.pb&&Xg(b.s,a.pb);break;default:throw"Unknown block type.";}a=a.C&&I(a.C)}},Qe:function(a){a=cj(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=
J(this,"IF"+b),d=J(this,"DO"+b);a.ge=c&&c.s.w;a.pb=d&&d.s.w;b++;break;case "controls_if_else":d=J(this,"ELSE");a.pb=d&&d.s.w;break;default:throw"Unknown block type.";}a=a.C&&I(a.C)}}};C.controls_if_if={g:function(){this.j(210);O(R(this),G.Sl);aj(this,3,"STACK");this.i(G.Tl);this.contextMenu=!1}};C.controls_if_elseif={g:function(){this.j(210);O(R(this),G.Nl);M(this,!0);N(this,!0);this.i(G.Ol);this.contextMenu=!1}};
C.controls_if_else={g:function(){this.j(210);O(R(this),G.Pl);M(this,!0);this.i(G.Ql);this.contextMenu=!1}};
C.logic_compare={g:function(){var a=q?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.p=G.cn;this.j(210);L(this,!0,"Boolean");Q(this,"A");O(Q(this,"B"),new F(a),"OP");Tg(this,!0);var b=this;this.i(function(){var a=P(b,"OP");return{EQ:G.dn,NEQ:G.kn,LT:G.hn,LTE:G.jn,GT:G.fn,GTE:G.gn}[a]})}};
C.logic_operation={g:function(){var a=[[G.rn,"AND"],[G.tn,"OR"]];this.p=G.sn;this.j(210);L(this,!0,"Boolean");Q(this,"A").v("Boolean");O(Q(this,"B").v("Boolean"),new F(a),"OP");Tg(this,!0);var b=this;this.i(function(){var a=P(b,"OP");return{AND:G.un,OR:G.vn}[a]})}};C.logic_negate={g:function(){this.p=G.ln;this.j(210);L(this,!0,"Boolean");this.sa(G.mn,["BOOL","Boolean",1],1);this.i(G.nn)}};
C.logic_boolean={g:function(){var a=[[G.bn,"TRUE"],[G.Zm,"FALSE"]];this.p=G.$m;this.j(210);L(this,!0,"Boolean");O(R(this),new F(a),"BOOL");this.i(G.an)}};C.logic_null={g:function(){this.p=G.pn;this.j(210);L(this,!0);O(R(this),G.on);this.i(G.qn)}};C.logic_ternary={g:function(){this.p=G.xn;this.j(210);O(Q(this,"IF").v("Boolean"),G.wn);O(Q(this,"THEN"),G.zn);O(Q(this,"ELSE"),G.yn);L(this,!0);this.i(G.An)}};/*

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
C.fs={};C.lists_create_empty={g:function(){this.p=G.rm;this.j(260);L(this,!0,"Array");O(R(this),G.Fi);this.i(G.sm)}};
C.lists_create_with={g:function(){this.j(260);this.ha=3;this.fc();L(this,!0,"Array");this.ae(new Rh(["lists_create_with_item"]));this.i(G.ym)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("items",this.ha);return a},Oa:function(a){this.ha=parseInt(a.getAttribute("items"),10);this.fc()},Gd:function(a){var b=hc(a,"lists_create_with_container");b.ra();for(var c=J(b,"STACK").s,d=0;d<this.ha;d++){var e=hc(a,"lists_create_with_item");e.ra();Xg(c,e.K);c=e.C}return b},Dd:function(a){a=
cj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.ge,a=a.C&&I(a.C),c++;this.ha=c;this.fc();for(c=0;c<this.ha;c++)b[c]&&Xg(J(this,"ADD"+c).s,b[c])},Qe:function(a){a=cj(a,"STACK");for(var b=0;a;){var c=J(this,"ADD"+b);a.ge=c&&c.s.w;b++;a=a.C&&I(a.C)}},fc:function(){if(J(this,"EMPTY"))S(this,"EMPTY");else for(var a=0;J(this,"ADD"+a);)S(this,"ADD"+a),a++;if(0==this.ha)O(R(this,"EMPTY"),G.Fi);else for(a=0;a<this.ha;a++){var b=Q(this,"ADD"+a);0==a&&O(b,G.vm)}}};
C.lists_create_with_container={g:function(){this.j(260);O(R(this),G.tm);aj(this,3,"STACK");this.i(G.um);this.contextMenu=!1}};C.lists_create_with_item={g:function(){this.j(260);O(R(this),G.wm);M(this,!0);N(this,!0);this.i(G.xm);this.contextMenu=!1}};C.lists_repeat={g:function(){this.p=G.Qm;this.j(260);L(this,!0,"Array");this.sa(G.Rm,["ITEM",null,1],["NUM","Number",1],1);this.i(G.Sm)}};
C.lists_length={g:function(){this.p=G.Nm;this.j(260);this.sa(G.Om,["VALUE",["Array","String"],1],1);L(this,!0,"Number");this.i(G.Pm)}};C.lists_isEmpty={g:function(){this.p=G.Lm;this.j(260);this.sa(G.Mm,["VALUE",["Array","String"],1],1);Tg(this,!0);L(this,!0,"Boolean");this.i(G.Ym)}};C.lists_indexOf={g:function(){var a=[[G.Hm,"FIRST"],[G.Jm,"LAST"]];this.p=G.Li;this.j(260);L(this,!0,"Number");O(Q(this,"VALUE").v("Array"),G.Im);O(Q(this,"FIND"),new F(a),"END");Tg(this,!0);this.i(G.Km)}};
C.lists_getIndex={g:function(){var a=[[G.zm,"GET"],[G.Am,"GET_REMOVE"],[G.Dm,"REMOVE"]];this.me=[[G.Ii,"FROM_START"],[G.Hi,"FROM_END"],[G.Gi,"FIRST"],[G.Ji,"LAST"],[G.Ki,"RANDOM"]];this.p=G.Bm;this.j(260);a=new F(a,function(a){this.h.Xk("REMOVE"==a)});O(Q(this,"VALUE").v("Array"),G.Cm);O(O(R(this),a,"MODE"),"","SPACE");R(this,"AT");G.Lg&&O(R(this,"TAIL"),G.Lg);Tg(this,!0);L(this,!0);this.ca(!0);var b=this;this.i(function(){var a=P(b,"MODE")+"_"+P(b,"WHERE");return G["LISTS_GET_INDEX_TOOLTIP_"+a]})},
Ia:function(){var a=document.createElement("mutation");a.setAttribute("statement",!this.G);a.setAttribute("at",1==J(this,"AT").type);return a},Oa:function(a){var b="true"==a.getAttribute("statement");this.Xk(b);a="false"!=a.getAttribute("at");this.ca(a)},Xk:function(a){a!=!this.G&&(Vi(this,!0,!0),a?(L(this,!1),M(this,!0),N(this,!0)):(M(this,!1),N(this,!1),L(this,!0)))},ca:function(a){S(this,"AT");S(this,"ORDINAL",!0);a?(Q(this,"AT").v("Number"),G.Tb&&O(R(this,"ORDINAL"),G.Tb)):R(this,"AT");var b=
new F(this.me,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});O(J(this,"AT"),b,"WHERE");G.Lg&&bj(this,"TAIL",null)}};
C.lists_setIndex={g:function(){var a=[[G.Xm,"SET"],[G.Wm,"INSERT"]];this.me=[[G.Ii,"FROM_START"],[G.Hi,"FROM_END"],[G.Gi,"FIRST"],[G.Ji,"LAST"],[G.Ki,"RANDOM"]];this.p=G.Tm;this.j(260);O(Q(this,"LIST").v("Array"),G.Um);O(O(R(this),new F(a),"MODE"),"","SPACE");R(this,"AT");O(Q(this,"TO"),G.Vm);Tg(this,!0);M(this,!0);N(this,!0);this.i(G.zt);this.ca(!0);var b=this;this.i(function(){var a=P(b,"MODE")+"_"+P(b,"WHERE");return G["LISTS_SET_INDEX_TOOLTIP_"+a]})},Ia:function(){var a=document.createElement("mutation");
a.setAttribute("at",1==J(this,"AT").type);return a},Oa:function(a){a="false"!=a.getAttribute("at");this.ca(a)},ca:function(a){S(this,"AT");S(this,"ORDINAL",!0);a?(Q(this,"AT").v("Number"),G.Tb&&O(R(this,"ORDINAL"),G.Tb)):R(this,"AT");var b=new F(this.me,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ca(d);ic(e,b,"WHERE");return null}});bj(this,"AT","TO");J(this,"ORDINAL")&&bj(this,"ORDINAL","TO");O(J(this,"AT"),b,"WHERE")}};
C.lists_getSublist={g:function(){this.p=G.Em;this.j(260);O(Q(this,"LIST").v("Array"),G.Fm);R(this,"AT1");R(this,"AT2");G.Mg&&O(R(this,"TAIL"),G.Mg);Tg(this,!0);L(this,!0,"Array");this.ca(1,!0);this.ca(2,!0);this.i(G.Gm)},Ia:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==J(this,"AT1").type);a.setAttribute("at2",1==J(this,"AT2").type);return a},Oa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ca(1,b);this.ca(2,a)},ca:function(a,b){S(this,
"AT"+a);S(this,"ORDINAL"+a,!0);b?(Q(this,"AT"+a).v("Number"),G.Tb&&O(R(this,"ORDINAL"+a),G.Tb)):R(this,"AT"+a);var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ca(a,e);ic(h,c,"WHERE"+a);return null}});O(J(this,"AT"+a),c,"WHERE"+a);1==a&&(bj(this,"AT1","AT2"),J(this,"ORDINAL1")&&bj(this,"ORDINAL1","AT2"));G.Mg&&bj(this,"TAIL",null)}};/*

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
U.js={};U.controls_repeat=function(a){var b=Number(P(a,"TIMES")),c=il(a,"DO"),c=jl(c,a.id);a=Ha(U.da,"count");return"for (var "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};U.controls_repeat_ext=function(a){var b=T(a,"TIMES",U.Qc)||"0",c=il(a,"DO"),c=jl(c,a.id);a="";var d=Ha(U.da,"count"),e=b;b.match(/^\w+$/)||yk(b)||(e=Ha(U.da,"repeat_end"),a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
U.controls_whileUntil=function(a){var b="UNTIL"==P(a,"MODE"),c=T(a,"BOOL",b?U.lf:U.S)||"false",d=il(a,"DO"),d=jl(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
U.controls_for=function(a){var b=U.da.getName(P(a,"VAR"),"VARIABLE"),c=T(a,"FROM",U.Qc)||"0",d=T(a,"TO",U.Qc)||"0",e=T(a,"BY",U.Qc)||"1",h=il(a,"DO"),h=jl(h,a.id);if(yk(c)&&yk(d)&&yk(e)){var k=parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(k?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(k?"++":"--"):a+((k?" += ":" -= ")+b))+(") {\n"+h+"}\n")}else a="",k=c,c.match(/^\w+$/)||yk(c)||(k=Ha(U.da,b+"_start"),a+="var "+k+" = "+c+";\n"),c=d,d.match(/^\w+$/)||yk(d)||(c=Ha(U.da,b+"_end"),
a+="var "+c+" = "+d+";\n"),d=Ha(U.da,b+"_inc"),a+="var "+d+" = ",a=yk(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+k+" > "+c+") {\n",a+=U.ie+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+k+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+h+"}\n";return a};
U.controls_forEach=function(a){var b=U.da.getName(P(a,"VAR"),"VARIABLE"),c=T(a,"LIST",U.Qc)||"[]",d=il(a,"DO"),d=jl(d,a.id);a=Ha(U.da,b+"_index");d=U.ie+b+" = "+c+"["+a+"];\n"+d;return"for (var "+a+" in "+c+") {\n"+d+"}\n"};U.controls_flow_statements=function(a){switch(P(a,"FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};/*

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
C.ks={};C.math_number={g:function(){this.p=G.ho;this.j(230);O(R(this),new $k("0",dl),"NUM");L(this,!0,"Number");this.i(G.io)}};C.math_arithmetic={g:function(){var a=[[G.Cn,"ADD"],[G.Wo,"MINUS"],[G.fo,"MULTIPLY"],[G.Tn,"DIVIDE"],[G.Ao,"POWER"]];this.p=G.Dn;this.j(230);L(this,!0,"Number");Q(this,"A").v("Number");O(Q(this,"B").v("Number"),new F(a),"OP");Tg(this,!0);var b=this;this.i(function(){var a=P(b,"OP");return{ADD:G.En,MINUS:G.Gn,MULTIPLY:G.Hn,DIVIDE:G.Fn,POWER:G.In}[a]})}};
C.math_single={g:function(){var a=[[G.Oo,"ROOT"],[G.No,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];this.p=G.Mo;this.j(230);L(this,!0,"Number");this.sa("%1 %2",["OP",new F(a)],["NUM","Number",1],1);var b=this;this.i(function(){var a=P(b,"OP");return{ROOT:G.Vo,ABS:G.Po,NEG:G.To,LN:G.Ro,LOG10:G.So,EXP:G.Qo,POW10:G.Uo}[a]})}};
C.math_trig={g:function(){var a=[[G.bp,"SIN"],[G.$o,"COS"],[G.cp,"TAN"],[G.Yo,"ASIN"],[G.Xo,"ACOS"],[G.Zo,"ATAN"]];this.p=G.ap;this.j(230);L(this,!0,"Number");O(Q(this,"NUM").v("Number"),new F(a),"OP");var b=this;this.i(function(){var a=P(b,"OP");return{SIN:G.hp,COS:G.gp,TAN:G.ip,ASIN:G.ep,ACOS:G.dp,ATAN:G.fp}[a]})}};
C.math_constant={g:function(){this.p=G.On;this.j(230);L(this,!0,"Number");O(R(this),new F([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.i(G.Pn)}};
C.math_number_property={g:function(){var a=[[G.Vn,"EVEN"],[G.Xn,"ODD"],[G.Zn,"PRIME"],[G.ao,"WHOLE"],[G.Yn,"POSITIVE"],[G.Wn,"NEGATIVE"],[G.Un,"DIVISIBLE_BY"]];this.j(230);Q(this,"NUMBER_TO_CHECK").v("Number");a=new F(a,function(a){this.h.fc("DIVISIBLE_BY"==a)});O(R(this),a,"PROPERTY");Tg(this,!0);L(this,!0,"Boolean");this.i(G.$n)},Ia:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==P(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Oa:function(a){a="true"==a.getAttribute("divisor_input");
this.fc(a)},fc:function(a){var b=J(this,"DIVISOR");a?b||Q(this,"DIVISOR").v("Number"):b&&S(this,"DIVISOR")}};C.math_change={g:function(){this.p=G.Jn;this.j(230);this.sa(G.Ln+" %1 "+G.Kn+" %2",["VAR",new eg(G.Mn)],["DELTA","Number",1],1);M(this,!0);N(this,!0);var a=this;this.i(function(){return G.Nn.replace("%1",P(a,"VAR"))})},Zb:function(){return[P(this,"VAR")]},Hb:function(a,b){Ia(a,P(this,"VAR"))&&ic(this,b,"VAR")}};
C.math_round={g:function(){var a=[[G.Io,"ROUND"],[G.Ko,"ROUNDUP"],[G.Jo,"ROUNDDOWN"]];this.p=G.Ho;this.j(230);L(this,!0,"Number");O(Q(this,"NUM").v("Number"),new F(a),"OP");this.i(G.Lo)}};
C.math_on_list={g:function(){var a=[[G.ro,"SUM"],[G.no,"MIN"],[G.lo,"MAX"],[G.ko,"AVERAGE"],[G.mo,"MEDIAN"],[G.oo,"MODE"],[G.qo,"STD_DEV"],[G.po,"RANDOM"]],b=this;this.p=G.jo;this.j(230);L(this,!0,"Number");a=new F(a,function(a){"MODE"==a?b.G.v("Array"):b.G.v("Number")});O(Q(this,"LIST").v("Array"),a,"OP");this.i(function(){var a=P(b,"OP");return{SUM:G.zo,MIN:G.vo,MAX:G.to,AVERAGE:G.so,MEDIAN:G.uo,MODE:G.wo,STD_DEV:G.yo,RANDOM:G.xo}[a]})}};
C.math_modulo={g:function(){this.p=G.bo;this.j(230);L(this,!0,"Number");this.sa(G.co,["DIVIDEND","Number",1],["DIVISOR","Number",1],1);Tg(this,!0);this.i(G.eo)}};C.math_constrain={g:function(){this.p=G.Qn;this.j(230);L(this,!0,"Number");this.sa(G.Rn,["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);Tg(this,!0);this.i(G.Sn)}};C.math_random_int={g:function(){this.p=G.Eo;this.j(230);L(this,!0,"Number");this.sa(G.Fo,["FROM","Number",1],["TO","Number",1],1);Tg(this,!0);this.i(G.Go)}};
C.math_random_float={g:function(){this.p=G.Bo;this.j(230);L(this,!0,"Number");O(R(this),G.Co);this.i(G.Do)}};C.turtle_move_internal={g:function(){this.j(160);O(R(this),new F([["move forward","moveForward"],["move backward","moveBackward"]]),"DIR");M(this,!0);N(this,!0);this.i(V("Turtle_moveTooltip"))}};U.turtle_move_internal=function(a){return P(a,"DIR")+"(100, 'block_id_"+a.id+"');\n"};C.turtle_turn={g:function(){var a=[["turn right","turnRight"],["turn left","turnLeft"]];a[0][0]+=" \u21bb";a[1][0]+=" \u21ba";this.j(160);O(R(this),new F(a),"DIR");M(this,!0);N(this,!0);this.i(V("Turtle_turnTooltip"))}};
U.turtle_turn=function(a){return P(a,"DIR")+"(90, 'block_id_"+a.id+"');\n"};C.turtle_turn_internal={g:function(){var a=[["turn right","turnRight"],["turn left","turnLeft"]];a[0][0]+=" \u21bb";a[1][0]+=" \u21ba";this.j(160);O(O(R(this),new F(a),"DIR"),new F([["slightly","72"],["some","90"],["a lot","144"]]),"VALUE");M(this,!0);N(this,!0);this.i(V("Turtle_turnTooltip"))}};U.turtle_turn_internal=function(a){var b=P(a,"VALUE");"some"==b&&(b=90);return P(a,"DIR")+"("+b+", 'block_id_"+a.id+"');\n"};
C.turtle_width={g:function(){this.j(160);O(Q(this,"WIDTH").v("Number"),V("Turtle_setWidth"));M(this,!0);N(this,!0);this.i(V("Turtle_widthTooltip"))}};U.turtle_width=function(a){return"penWidth("+(T(a,"WIDTH",U.S)||"1")+", 'block_id_"+a.id+"');\n"};C.turtle_pen={g:function(){var a=[[V("Turtle_penUp"),"penUp"],[V("Turtle_penDown"),"penDown"]];this.j(160);O(R(this),new F(a),"PEN");M(this,!0);N(this,!0);this.i(V("Turtle_penTooltip"))}};U.turtle_pen=function(a){return P(a,"PEN")+"('block_id_"+a.id+"');\n"};
C.turtle_colour={g:function(){this.j(20);O(Q(this,"COLOUR").v("Colour"),V("Turtle_setColour"));M(this,!0);N(this,!0);this.i(V("Turtle_colourTooltip"))}};U.turtle_colour=function(a){return"penColour("+(T(a,"COLOUR",U.S)||"'#000000'")+", 'block_id_"+a.id+"');\n"};C.turtle_colour_internal={g:function(){this.j(20);O(O(R(this),V("Turtle_setColour")),new Uk("#ff0000"),"COLOUR");M(this,!0);N(this,!0);this.i(V("Turtle_colourTooltip"))}};
U.turtle_colour_internal=function(a){return"penColour("+("'"+P(a,"COLOUR")+"'")+", 'block_id_"+a.id+"');\n"};C.turtle_visibility={g:function(){var a=[[V("Turtle_hideTurtle"),"hideTurtle"],[V("Turtle_showTurtle"),"showTurtle"]];this.j(160);M(this,!0,null);N(this,!0,null);O(R(this),new F(a),"VISIBILITY");this.i(V("Turtle_turtleVisibilityTooltip"))}};U.turtle_visibility=function(a){return P(a,"VISIBILITY")+"('block_id_"+a.id+"');\n"};
C.turtle_print={g:function(){this.p=V("Turtle_printHelpUrl");this.j(160);O(Q(this,"TEXT"),V("Turtle_print"));M(this,!0);N(this,!0);this.i(V("Turtle_printTooltip"))}};U.turtle_print=function(a){return"print("+String(T(a,"TEXT",U.S)||"''")+", 'block_id_"+a.id+"');\n"};
C.turtle_font={g:function(){var a=[[V("Turtle_fontNormal"),"normal"],[V("Turtle_fontItalic"),"italic"],[V("Turtle_fontBold"),"bold"]];this.p=V("Turtle_fontHelpUrl");this.j(160);O(O(R(this),V("Turtle_font")),new F([["Arial","Arial"],["Courier New","Courier New"],["Georgia","Georgia"],["Impact","Impact"],["Times New Roman","Times New Roman"],["Trebuchet MS","Trebuchet MS"],["Verdana","Verdana"]]),"FONT");O(O(R(this),V("Turtle_fontSize")),new $k("18",el),"FONTSIZE");O(R(this),new F(a),"FONTSTYLE");M(this,
!0);N(this,!0);this.i(V("Turtle_fontTooltip"))}};U.turtle_font=function(a){return"font('"+P(a,"FONT")+"',"+Number(P(a,"FONTSIZE"))+",'"+P(a,"FONTSTYLE")+"', 'block_id_"+a.id+"');\n"};C.turtle_repeat_internal={g:function(){this.p=G.Hg;this.j(120);O(O(O(R(this),G.Ci),new F([["3","3"],["4","4"],["5","5"],["360","360"]]),"TIMES"),G.Di);O(aj(this,3,"DO"),G.Oc);M(this,!0);N(this,!0);this.i(G.Ig)}};U.turtle_repeat_internal=U.controls_repeat;r&&Pb(8);function $m(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function an(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>'}
function bn(){var a=H;return an()+'<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout</button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></div></div>'+('<xml id="toolbox" style="display: none"><category name="Directions"><block type="turtle_move_internal"></block>'+
(2==a?'<block type="turtle_turn"></block>':"")+(3==a?'<block type="turtle_turn_internal"><field name="VALUE">some</field></block>':"")+'</category><category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category></xml>')+'<div id="blockly"></div><div id="leftSide"><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;background-color:white; padding-top: 10px;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/seaturtle.svg" height=32 width=74 x=-21 y=0 />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/bunny.svg" height=32 width=74 x=92 y=0 /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+$m()+"</div>")+(4>a?'<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can solve the challenge with fewer blocks. Try using "Loops." '+(3>a?"Draw the shape with just three blocks.":"Draw the star with just four blocks.")+"</div>"+$m()+"</div>":"")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+(1==a?'<h3> Learn Sequentiality! </h3>Put the blocks together to help the robot draw a square! Change the value of the fields to make the robot move correctly.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">':
"")+(2==a?"<h3> Learn Loops! </h3>Now, use a loop from the toolbar to help the robot draw a square.":"")+(3==a?"Now, help the robot draw a hexagon using loops.":"")+"</div>"+$m()+"</div>"+(2==a?'<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>':"")};var zm="turtle";W.Oh=function(){window.location=window.location.protocol+"//"+window.location.host+"/movie?lang="+rm+"&level="+(H+2)};var cn=[],dn=0,en=null,fn=!0;
function gn(){function a(){c.style.top=Math.max(10,d.offsetTop-window.pageYOffset)+"px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=bn();W.g();var b=-1!=qm.indexOf(rm),c=document.getElementById("blockly"),d=document.getElementById("visualization");window.addEventListener("scroll",function(){a();mh(window,"resize")});window.addEventListener("resize",a);a();10>H&&(Xk=3,Wk="#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));if(1!=H)var e=document.getElementById("toolbox");
rl(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:e,trashcan:!0});kl("moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font");document.getElementById("submitButton")&&Am("submitButton",Bm.Mu);b=document.getElementById("slider");Cm=new Om(10,35,130,b);W.gs(1==H?'<xml>  <block type="turtle_move_internal" x="70" y="120">  </block>  <block type="turtle_turn" x="300" y="200">  </block>  <block type="turtle_move_internal" x="220" y="50">  </block>  <block type="turtle_turn" x="600" y="150">  </block>  <block type="turtle_move_internal" x="600" y="330">  </block>  <block type="turtle_turn" x="200" y="500">  </block>  <block type="turtle_move_internal" x="100" y="350">  </block>  <block type="turtle_turn" x="500" y="450">  </block></xml>':
'<xml>  <block type="turtle_move_internal" x="70" y="120">  </block>',!1);Dm=document.getElementById("display").getContext("2d");Em=document.getElementById("answer").getContext("2d");Y=document.getElementById("scratch").getContext("2d");hn();Jm();Em.globalCompositeOperation="copy";Em.drawImage(Y.canvas,0,0);Em.globalCompositeOperation="source-over";hn();Am("runButton",jn);Am("resetButton",kn);Dl(["turtle/win.mp3","turtle/win.ogg"],"win");setTimeout(W.Wr,1);setTimeout(W.Xr,1);Am("helpButton",ln);2>
location.hash.length&&!xm(H)&&(setTimeout(ln,1E3),9==H&&setTimeout(X.fj,3E5))}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){W.Yr(an()+'<div id="blockly"></div>')}):window.addEventListener("load",gn);function ln(){var a=document.getElementById("help"),b=document.getElementById("helpButton");X.Kc(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},mn);X.pi()}function mn(){X.si();2==H&&(nn(),setTimeout(on,5E3))}
function on(){if(!pn&&!X.Ac){var a=document.getElementById("helpToolbox"),b=document.getElementById(":0");X.Kc(a,b,!0,!1,{width:"25%",left:"525px",top:"5em"},null)}}var pn=!1;function nn(){A.Ta.V.J()&&(pn=!0,X.mb(!1));pn||setTimeout(nn,100)}function hn(){Gm=Fm=200;Hm=0;fn=Im=!0;Y.canvas.width=Y.canvas.width;Y.strokeStyle="#ec8fa1";Y.fillStyle="#ffffff";Y.lineWidth=5;Y.lineCap="round";Y.font="normal 18pt Arial";qn();for(var a=0;a<cn.length;a++)window.clearTimeout(cn[a]);cn.length=0;en=null}
function qn(){Dm.beginPath();Dm.rect(0,0,Dm.canvas.width,Dm.canvas.height);Dm.fillStyle="#444444";Dm.fill();Dm.globalCompositeOperation="source-over";Dm.globalAlpha=.2;Dm.drawImage(Em.canvas,0,0);Dm.globalAlpha=1;Dm.globalCompositeOperation="source-over";Dm.drawImage(Y.canvas,0,0);if(fn){Dm.strokeStyle=Y.strokeStyle;Dm.fillStyle=Y.fillStyle;var a=Y.lineWidth/2+10,b=2*a,c=new Image;c.onload=function(){Dm.drawImage(c,Fm-b,Gm-a,50,50)};c.src="./turtle/robot.svg";var d=2*Math.PI*Hm/360,e=Fm+(a+10)*Math.sin(d),
h=Gm-(a+10)*Math.cos(d),d=d-.3,k=Fm+(a+4)*Math.sin(d),m=Gm-(a+4)*Math.cos(d),d=d+.15,p=Fm+(a+6)*Math.sin(d),y=Gm-(a+6)*Math.cos(d),d=d+.3,x=Fm+(a+6)*Math.sin(d),E=Gm-(a+6)*Math.cos(d),d=d+.15,B=Fm+(a+4)*Math.sin(d),d=Gm-(a+4)*Math.cos(d);Dm.beginPath();Dm.moveTo(e,h);Dm.lineTo(k,m);Dm.bezierCurveTo(p,y,x,E,B,d);Dm.closePath();Dm.fill()}}
function jn(a){if(!W.Wb(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";document.getElementById("spinner").style.visibility="visible";Ih(A,!0);rn()}}
function kn(a){W.Wb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",document.getElementById("spinner").style.visibility="hidden",Ih(A,!1),hn())}
function sn(a,b){var c;c=function(a,b){Z(a.valueOf(),b.toString())};a.setProperty(b,"moveForward",a.createNativeFunction(c));c=function(a,b){Z(-a.valueOf(),b.toString())};a.setProperty(b,"moveBackward",a.createNativeFunction(c));c=function(a,b){Km(a.valueOf(),b.toString())};a.setProperty(b,"turnRight",a.createNativeFunction(c));c=function(a,b){Km(-a.valueOf(),b.toString())};a.setProperty(b,"turnLeft",a.createNativeFunction(c));c=function(a){Mm(!1,a.toString())};a.setProperty(b,"penUp",a.createNativeFunction(c));
c=function(a){Mm(!0,a.toString())};a.setProperty(b,"penDown",a.createNativeFunction(c));c=function(a,b){var c=b.toString();Y.lineWidth=a.valueOf();tn(c)};a.setProperty(b,"penWidth",a.createNativeFunction(c));c=function(a,b){Lm(a.toString(),b.toString())};a.setProperty(b,"penColour",a.createNativeFunction(c));c=function(a){a=a.toString();fn=!1;tn(a)};a.setProperty(b,"hideTurtle",a.createNativeFunction(c));c=function(a){a=a.toString();fn=!0;tn(a)};a.setProperty(b,"showTurtle",a.createNativeFunction(c));
c=function(a,b){var c=a.toString(),k=b.toString();Y.save();Y.translate(Fm,Gm);Y.rotate(2*Math.PI*(Hm-90)/360);Y.fillText(c,0,0);Y.restore();tn(k)};a.setProperty(b,"print",a.createNativeFunction(c));c=function(a,b,c,k){k=k.toString();Y.font=c.toString()+" "+b.valueOf()+"pt "+a.toString();tn(k)};a.setProperty(b,"font",a.createNativeFunction(c))}
function rn(){if("Interpreter"in window){hn();var a=U,b=A,c=[];a.g(b);for(var b=Ka(b,!0),d=0,e;e=b[d];d++){var h=hl(a,e);ea(h)&&(h=h[0]);h&&(e.G&&a.Ik&&(h=a.Ik(h)),c.push(h))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");c=c.replace(/[ \t]+\n/g,"\n");en=new Interpreter(c,sn);cn.push(setTimeout(un,100))}else setTimeout(rn,250)}
function un(){dn=cn.length=0;var a;do{try{a=en.step()}catch(b){alert(b),a=!1}a&&dn&&(a=!1,cn.push(setTimeout(un,dn)))}while(a);if(!dn){document.getElementById("spinner").style.visibility="hidden";Jh(null);a=Y.getImageData(0,0,400,400);for(var c=Em.getImageData(0,0,400,400),d=Math.min(a.data.length,c.data.length),e=0,h=3;h<d;h+=4)64<Math.abs(a.data[h]-c.data[h])&&e++;Nm(e)?(W.Ls(),3>=H&&(mk("win",.5),X.lr())):Lm("#ff0000")}}
function tn(a){qn();a&&(W.Ah(a),a=1E3*Math.pow(1-Cm.Fa(),2),dn=Math.max(1,a))}function Z(a,b){Im&&(Y.beginPath(),Y.moveTo(Fm,Gm));if(a){Fm+=a*Math.sin(2*Math.PI*Hm/360);Gm-=a*Math.cos(2*Math.PI*Hm/360);var c=0}else c=.1;Im&&(Y.lineTo(Fm,Gm+c),Y.stroke());tn(b)}function Km(a,b){Hm+=a;Hm%=360;0>Hm&&(Hm+=360);tn(b)}function Mm(a,b){Im=a;tn(b)}function Lm(a,b){Y.strokeStyle=a;Y.fillStyle=a;tn(b)};
