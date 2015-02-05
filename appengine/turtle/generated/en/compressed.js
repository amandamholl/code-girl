// Automatically generated file.  Do not edit!
'use strict';var f,g=this;function aa(a){a=a.split(".");for(var b=g,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.gc=function(){return a.Ek?a.Ek:a.Ek=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function l(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a){return a[ka]||(a[ka]=++la)}var ka="closure_uid_"+(1E9*Math.random()>>>0),la=0;
function ma(a,b,c){return a.call.apply(a.bind,arguments)}function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function oa(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)}
function pa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var qa=Date.now||function(){return+new Date};function n(a,b){function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ev=function(a,c,h){for(var k=Array(arguments.length-2),m=2;m<arguments.length;m++)k[m-2]=arguments[m];return b.prototype[c].apply(a,k)}};/*

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
var ra={},q,sa,ta,ua,va,wa,xa,ya,za,Aa,Ba,Ca,Da,Ea,Fa;function Ga(a){this.cl=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.cl[a[b]]=!0}this.reset()}Ga.prototype.reset=function(){this.Ah=Object.create(null);this.gk=Object.create(null)};Ga.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.Ah)return this.Ah[c];var d=Ha(this,a);return this.Ah[c]=d};
function Ha(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.gk[c+d]||c+d in a.cl;)d=d?d+1:2;c+=d;a.gk[c]=!0;return c}function Ia(a,b){return a.toLowerCase()==b.toLowerCase()};/*

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
function Ja(){this.qe=[]}f=Ja.prototype;f.B=!1;f.ci=Infinity;f.m=function(){this.clear()};f.Be=function(a){this.qe.push(a);this.Fb()};f.Dg=function(a){for(var b=!1,c,d=0;c=this.qe[d];d++)if(c==a){this.qe.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.Fb()};function Ka(a,b){var c=[].concat(a.qe);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);q&&(d*=-1);c.sort(function(a,b){var c=a.na(),m=b.na();return c.y+d*c.x-(m.y+d*m.x)})}return c}
f.hb=function(){for(var a=Ka(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].md());return a};f.clear=function(){for(;this.qe.length;)this.qe[0].m()};f.Xf=function(){return 0};function La(a,b){for(var c=a.hb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ma(a){return Infinity==a.ci?Infinity:a.ci-a.hb().length}f.Fb=function(){};function Na(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Oa(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function Qa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ra(a){if(!Sa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ta,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ua,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Va,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Wa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Xa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ya,"&#0;"));return a}var Ta=/&/g,Ua=/</g,Va=/>/g,Wa=/"/g,Xa=/'/g,Ya=/\x00/g,Sa=/[\x00&<>"']/;
function Za(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=g.document.createElement("div");return a.replace($a,function(a,e){var h=b[a];if(h)return h;if("#"==e.charAt(0)){var k=Number("0"+e.substr(1));isNaN(k)||(h=String.fromCharCode(k))}h||(c.innerHTML=a+" ",h=c.firstChild.nodeValue.slice(0,-1));return b[a]=h})}
function ab(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var $a=/&([^;\s<&]+);?/g;function bb(a,b){return a<b?-1:a>b?1:0}function cb(){return"background-color".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function db(a){var b=l(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})};var eb;a:{var fb=g.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function hb(a){return-1!=eb.indexOf(a)};function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var h=0;h<kb.length;h++)c=kb[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var nb;function ob(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ob);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}n(ob,Error);ob.prototype.name="CustomError";function pb(a,b){b.unshift(a);ob.call(this,Na.apply(null,b));b.shift()}n(pb,ob);pb.prototype.name="AssertionError";function qb(a,b){throw new pb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var rb=Array.prototype,sb=rb.indexOf?function(a,b,c){return rb.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},tb=rb.forEach?function(a,b,c){rb.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)h in e&&b.call(c,e[h],h,a)},ub=rb.filter?function(a,b,c){return rb.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],h=
0,k=l(a)?a.split(""):a,m=0;m<d;m++)if(m in k){var p=k[m];b.call(c,p,m,a)&&(e[h++]=p)}return e},vb=rb.map?function(a,b,c){return rb.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),h=l(a)?a.split(""):a,k=0;k<d;k++)k in h&&(e[k]=b.call(c,h[k],k,a));return e},wb=rb.every?function(a,b,c){return rb.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,h=0;h<d;h++)if(h in e&&!b.call(c,e[h],h,a))return!1;return!0};function xb(a,b){return 0<=sb(a,b)}
function yb(a,b){var c=sb(a,b),d;(d=0<=c)&&rb.splice.call(a,c,1);return d}function zb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ab(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,h=d.length||0;a.length=e+h;for(var k=0;k<h;k++)a[e+k]=d[k]}else a.push(d)}}function Bb(a,b,c,d){rb.splice.apply(a,Cb(arguments,1))}function Cb(a,b,c){return 2>=arguments.length?rb.slice.call(a,b):rb.slice.call(a,b,c)};var Db=hb("Opera")||hb("OPR"),r=hb("Trident")||hb("MSIE"),Eb=hb("Gecko")&&-1==eb.toLowerCase().indexOf("webkit")&&!(hb("Trident")||hb("MSIE")),t=-1!=eb.toLowerCase().indexOf("webkit"),Fb=t&&hb("Mobile"),Gb=hb("Macintosh"),Hb,Ib=g.navigator||null;Hb=!!Ib&&-1!=(Ib.appVersion||"").indexOf("X11");var Jb=hb("Android"),Kb=hb("iPhone")&&!hb("iPod")&&!hb("iPad"),Lb=hb("iPad");function Mb(){var a=g.document;return a?a.documentMode:void 0}
var Nb=function(){var a="",b;if(Db&&g.opera)return a=g.opera.version,ha(a)?a():a;Eb?b=/rv\:([^\);]+)(\)|;)/:r?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:t&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(eb))?a[1]:"");return r&&(b=Mb(),b>parseFloat(a))?String(b):a}(),Ob={};
function Pb(a){var b;if(!(b=Ob[a])){b=0;for(var c=Pa(String(Nb)).split("."),d=Pa(String(a)).split("."),e=Math.max(c.length,d.length),h=0;0==b&&h<e;h++){var k=c[h]||"",m=d[h]||"",p=/(\d*)(\D*)/g,x=/(\d*)(\D*)/g;do{var w=p.exec(k)||["","",""],E=x.exec(m)||["","",""];if(0==w[0].length&&0==E[0].length)break;b=bb(0==w[1].length?0:parseInt(w[1],10),0==E[1].length?0:parseInt(E[1],10))||bb(0==w[2].length,0==E[2].length)||bb(w[2],E[2])}while(0==b)}b=Ob[a]=0<=b}return b}
var Qb=g.document,Rb=Qb&&r?Mb()||("CSS1Compat"==Qb.compatMode?parseInt(Nb,10):5):void 0;function Sb(a,b){this.width=a;this.height=b}f=Sb.prototype;f.clone=function(){return new Sb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.Fk=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
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
function Tb(a){this.Ia=new Sb(0,25);this.qa(a)}f=Tb.prototype;f.h=null;f.wa=!0;f.clone=function(){qb("There should never be an instance of Field, only its derived classes.")};f.Id=!0;f.g=function(a){this.h||(this.h=a,this.ta=u("g",{},null),this.Lb=u("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.ta),this.Ra=u("text",{"class":"blocklyText"},this.ta),this.Cc(),a.W().appendChild(this.ta),this.di=v(this.ta,"mouseup",this,this.ji),Ub(this))};
f.m=function(){this.di&&(y(this.di),this.di=null);this.h=null;Vb(this.ta);this.Lb=this.Ra=this.ta=null};f.Cc=function(){this.Id&&(this.h.Gc&&!z?(Wb(this.ta,"blocklyEditableText"),Xb(this.ta,"blocklyNoNEditableText"),this.ta.style.cursor=this.sf):(Wb(this.ta,"blocklyNonEditableText"),Xb(this.ta,"blocklyEditableText"),this.ta.style.cursor=""))};f.J=function(){return this.wa};f.O=function(a){if(this.wa!=a){this.wa=a;var b=this.W();b&&(b.style.display=a?"block":"none",this.ke())}};f.W=function(){return this.ta};
f.ke=function(){if(this.wa){try{var a=this.Ra.getComputedTextLength()}catch(b){a=8*this.Ra.textContent.length}this.Lb&&this.Lb.setAttribute("width",a+10)}else a=0;this.Ia.width=a};f.Xd=function(){this.Ia.width||this.ke();return this.Ia};f.pb=function(){return this.Sa};f.qa=function(a){null!==a&&a!==this.Sa&&(this.Sa=a,Ub(this),this.h&&this.h.B&&(this.h.F(),this.h.Ua(),this.h.t.Fb()))};
function Ub(a){if(a.Ra){var b=a.Sa;Zb(a.Ra);b=b.replace(/\s/g,"\u00a0");q&&b&&(b+="\u200f");b||(b="\u00a0");a.Ra.appendChild(document.createTextNode(b));a.Ia.width=0}}f.Na=function(){return this.pb()};f.ra=function(a){this.qa(a)};f.ji=function(a){if(!Kb&&!Lb||0===a.layerX||0===a.layerY)$b(a)||2!=ac&&this.h.Gc&&!z&&this.Lg()};f.i=function(){};/*

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
function bc(){for(var a=B.hb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Wf;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(cc);b.sort(cc);return[c,b]}function cc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}function dc(a,b){if(b.kc)return a;for(;!ec(a,b.t,b);){var c=a.match(/^(.*?)(\d+)$/);a=c?c[1]+(parseInt(c[2],10)+1):a+"2"}return a}
function ec(a,b,c){b=b.hb();for(var d=0;d<b.length;d++)if(b[d]!=c){var e=b[d].Wf;if(e&&(e=e.call(b[d]),Ia(e[0],a)))return!1}return!0}function fc(a){a=a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");a=dc(a,this.h);for(var b=this.h.t.hb(),c=0;c<b.length;c++){var d=b[c].ti;d&&d.call(b[c],this.Sa,a)}return a}
function gc(a,b,c,d){function e(e,h){for(var p=0;p<e.length;p++){var x=hc(d,h);ic(x,e[p][0],"NAME");for(var w=[],E=0;E<e[p][1].length;E++)w[E]="ARG"+E;x.ne(e[p][1],w);x.za();a.push(x);b.push(2*c)}}if(C.procedures_defnoreturn){var h=hc(d,"procedures_defnoreturn");h.za();a.push(h);b.push(2*c)}C.procedures_defreturn&&(h=hc(d,"procedures_defreturn"),h.za(),a.push(h),b.push(2*c));C.procedures_ifreturn&&(h=hc(d,"procedures_ifreturn"),h.za(),a.push(h),b.push(2*c));b.length&&(b[b.length-1]=3*c);h=bc();e(h[0],
"procedures_callnoreturn");e(h[1],"procedures_callreturn")}function jc(a,b){for(var c=[],d=b.hb(),e=0;e<d.length;e++){var h=d[e].Vd;h&&(h=h.call(d[e]))&&Ia(h,a)&&c.push(d[e])}return c}function kc(a,b,c,d){a=jc(a,b);for(b=0;b<a.length;b++)a[b].ne(c,d)}function lc(a,b){for(var c=b.hb(),d=0;d<c.length;d++){var e=c[d].Wf;if(e&&(e=e.call(c[d]))&&Ia(e[0],a))return c[d]}return null};function mc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=mc.prototype;f.clone=function(){return new mc(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof mc?(this.x+=a.x,this.y+=a.y):(this.x+=a,ga(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.x*=a;this.y*=c;return this};function nc(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=nc.prototype;f.Xf=function(){return this.right-this.left};f.clone=function(){return new nc(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof nc?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ia(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,ga(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function oc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=oc.prototype;f.clone=function(){return new oc(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof oc?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Xd=function(){return new Sb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof mc?(this.left+=a.x,this.top+=a.y):(this.left+=a,ga(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function pc(){this.Oi="";this.xq=qc}pc.prototype.$d=!0;pc.prototype.Yd=function(){return this.Oi};pc.prototype.toString=function(){return"Const{"+this.Oi+"}"};function rc(a){if(a instanceof pc&&a.constructor===pc&&a.xq===qc)return a.Oi;qb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var qc={};function sc(){this.Rc="";this.vq=tc}f=sc.prototype;f.$d=!0;f.Yd=function(){return this.Rc};f.Vh=!0;f.Le=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Rc+"}"};var tc={};var uc=mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function vc(){this.wg="";this.uq=wc}vc.prototype.$d=!0;var wc={};vc.prototype.Yd=function(){return this.wg};vc.prototype.toString=function(){return"SafeStyle{"+this.wg+"}"};function xc(a){var b=new vc;b.wg=a;return b}var yc=xc("");
function zc(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof pc?d=rc(d):Ac.test(d)||(qb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?xc(b):yc}var Ac=/^[-.%_!# a-zA-Z0-9]+$/;function Bc(){this.qi="";this.Ar=Cc}f=Bc.prototype;f.$d=!0;f.Yd=function(){return this.qi};f.Vh=!0;f.Le=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.qi+"}"};var Cc={};function Dc(){this.Rc="";this.tq=Ec;this.ok=null}f=Dc.prototype;f.Vh=!0;f.Le=function(){return this.ok};f.$d=!0;f.Yd=function(){return this.Rc};f.toString=function(){return"SafeHtml{"+this.Rc+"}"};function Fc(a){if(a instanceof Dc&&a.constructor===Dc&&a.tq===Ec)return a.Rc;qb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function Gc(a){if(a instanceof Dc)return a;var b=null;a.Vh&&(b=a.Le());return Hc(Ra(a.$d?a.Yd():String(a)),b)}
var Ic=/^[a-zA-Z0-9-]+$/,Jc=mb("action","cite","data","formaction","href","manifest","poster","src"),Kc=mb("embed","iframe","link","object","script","style","template");
function Lc(a,b,c){if(!Ic.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in Kc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var h in b){if(!Ic.test(h))throw Error('Invalid attribute name "'+h+'".');var k=b[h];if(null!=k){var m,p=a;m=h;if(k instanceof pc)k=rc(k);else if("style"==m.toLowerCase()){if(!ia(k))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof k+" given: "+k);k instanceof vc||
(k=zc(k));p=void 0;k instanceof vc&&k.constructor===vc&&k.uq===wc?p=k.wg:(qb("expected object of type SafeStyle, got '"+k+"'"),p="type_error:SafeStyle");k=p}else{if(/^on/i.test(m))throw Error('Attribute "'+m+'" requires goog.string.Const value, "'+k+'" given.');if(m.toLowerCase()in Jc)if(k instanceof Bc)k instanceof Bc&&k.constructor===Bc&&k.Ar===Cc?k=k.qi:(qb("expected object of type TrustedResourceUrl, got '"+k+"'"),k="type_error:TrustedResourceUrl");else if(k instanceof sc)k instanceof sc&&k.constructor===
sc&&k.vq===tc?k=k.Rc:(qb("expected object of type SafeUrl, got '"+k+"'"),k="type_error:SafeUrl");else throw Error('Attribute "'+m+'" on tag "'+p+'" requires goog.html.SafeUrl or goog.string.Const value, "'+k+'" given.');}k.$d&&(k=k.Yd());m=m+'="'+Ra(String(k))+'"';e+=" "+m}}void 0!==c?ea(c)||(c=[c]):c=[];!0===uc[a.toLowerCase()]?e+=">":(d=Mc(c),e+=">"+Fc(d)+"</"+a+">",d=d.Le());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return Hc(e,d)}
function Mc(a){function b(a){ea(a)?tb(a,b):(a=Gc(a),d+=Fc(a),a=a.Le(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";tb(arguments,b);return Hc(d,c)}var Ec={};function Hc(a,b){var c=new Dc;c.Rc=a;c.ok=b;return c}var Nc=Hc("",0);function Oc(a,b){a.innerHTML=Fc(b)};var Pc=!r||r&&9<=Rb,Qc=!Eb&&!r||r&&r&&9<=Rb||Eb&&Pb("1.9.1"),Rc=r&&!Pb("9");function Sc(a){return a?new Tc(Uc(a)):nb||(nb=new Tc)}
function Vc(a,b){var c=document,c=b||c;if(c.querySelectorAll&&c.querySelector)return c.querySelectorAll("TBODY"+(a?"."+a:""));if(a&&c.getElementsByClassName){for(var c=c.getElementsByClassName(a),d={},e=0,h=0,k;k=c[h];h++)"TBODY"==k.nodeName&&(d[e++]=k);d.length=e;return d}c=c.getElementsByTagName("TBODY");if(a){d={};for(h=e=0;k=c[h];h++){var m=k.className;"function"==typeof m.split&&xb(m.split(/\s+/),a)&&(d[e++]=k)}d.length=e;return d}return c}
function Wc(a,b){ib(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Xc?a.setAttribute(Xc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Xc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Sb(a.clientWidth,a.clientHeight)}function D(a,b,c){return Zc(document,arguments)}
function Zc(a,b){var c=b[0],d=b[1];if(!Pc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ra(d.name),'"');if(d.type){c.push(' type="',Ra(d.type),'"');var e={};lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(l(d)?c.className=d:ea(d)?c.className=d.join(" "):Wc(c,d));2<b.length&&$c(a,c,b,2);return c}
function $c(a,b,c,d){function e(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var h=c[d];!fa(h)||ia(h)&&0<h.nodeType?e(h):tb(ad(h)?zb(h):h,e)}}function Zb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function bd(a){var b=B.o;b.parentNode&&b.parentNode.insertBefore(a,b)}function Vb(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function cd(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function Uc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function dd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else Zb(a),a.appendChild(Uc(a).createTextNode(String(b)))}var ed={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},fd={IMG:" ",BR:"\n"};function gd(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function hd(a){a=a.tabIndex;return ga(a)&&0<=a&&32768>a}
function id(a){if(Rc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];jd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Rc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}function kd(a){var b=[];jd(a,b,!1);return b.join("")}
function jd(a,b,c){if(!(a.nodeName in ed))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in fd)b.push(fd[a.nodeName]);else for(a=a.firstChild;a;)jd(a,b,c),a=a.nextSibling}function ad(a){if(a&&"number"==typeof a.length){if(ia(a))return"function"==typeof a.item||"string"==typeof a.item;if(ha(a))return"function"==typeof a.item}return!1}function Tc(a){this.dc=a||g.document||document}f=Tc.prototype;f.ob=Sc;
f.n=function(a){return l(a)?this.dc.getElementById(a):a};f.H=function(a,b,c){return Zc(this.dc,arguments)};f.createElement=function(a){return this.dc.createElement(a)};f.createTextNode=function(a){return this.dc.createTextNode(String(a))};f.Tj=function(a,b,c){var d=this.dc;c=!!c;for(var e=d.createElement("TABLE"),h=e.appendChild(d.createElement("TBODY")),k=0;k<a;k++){for(var m=d.createElement("TR"),p=0;p<b;p++){var x=d.createElement("TD");c&&dd(x,"\u00a0");m.appendChild(x)}h.appendChild(m)}return e};
f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){$c(Uc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.bl=Zb;f.removeNode=Vb;f.md=function(a){return Qc&&void 0!=a.children?a.children:ub(a.childNodes,function(a){return 1==a.nodeType})};f.contains=cd;f.wc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!gd(a)||hd(a)):gd(a)&&hd(a))&&r?(a=ha(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};var ld={};function md(a,b){var c=Uc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function nd(a,b){return md(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function od(){var a=document,b=a.body,a=a.documentElement;return new mc(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function pd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}r&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function qd(a){if(r&&!(r&&8<=Rb))return a.offsetParent;var b=Uc(a),c=nd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=nd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function rd(a){var b,c=Uc(a),d=nd(a,"position"),e=Eb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),h=new mc(0,0),k;b=c?Uc(c):document;(k=!r||r&&9<=Rb)||(k="CSS1Compat"==Sc(b).dc.compatMode);k=k?b.documentElement:b.body;if(a==k)return h;if(a.getBoundingClientRect)b=pd(a),c=Sc(c).dc,a=t||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=r&&Pb("10")&&c.pageYOffset!=a.scrollTop?new mc(a.scrollLeft,
a.scrollTop):new mc(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),h.x=b.left+a.x,h.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(k),h.x=b.screenX-a.screenX,h.y=b.screenY-a.screenY;else{b=a;do{h.x+=b.offsetLeft;h.y+=b.offsetTop;b!=a&&(h.x+=b.clientLeft||0,h.y+=b.clientTop||0);if(t&&"fixed"==nd(b,"position")){h.x+=c.body.scrollLeft;h.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Db||t&&"absolute"==d)h.y-=c.body.offsetTop;for(b=a;(b=qd(b))&&
b!=c.body&&b!=k;)h.x-=b.scrollLeft,Db&&"TR"==b.tagName||(h.y-=b.scrollTop)}return h}function sd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}function td(a){return ud(a)}function ud(a){var b=vd;if("none"!=nd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=h;c.visibility=e;return a}
function vd(a){var b=a.offsetWidth,c=a.offsetHeight,d=t&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=pd(a),new Sb(a.right-a.left,a.bottom-a.top)):new Sb(b,c)}function wd(a){var b=rd(a);a=ud(a);return new oc(b.x,b.y,a.width,a.height)}function xd(a,b){a.style.display=b?"":"none"}var yd=Eb?"MozUserSelect":t?"WebkitUserSelect":null;
function zd(a,b,c){c=c?null:a.getElementsByTagName("*");if(yd){if(b=b?"none":"",a.style[yd]=b,c){a=0;for(var d;d=c[a];a++)d.style[yd]=b}}else if(r||Db)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var Ad={thin:2,medium:4,thick:6};
function Bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in Ad)d=Ad[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function Cd(a){if(r&&!(r&&9<=Rb)){var b=Bd(a,"borderLeft"),c=Bd(a,"borderRight"),d=Bd(a,"borderTop");a=Bd(a,"borderBottom");return new nc(d,c,a,b)}b=md(a,"borderLeftWidth");c=md(a,"borderRightWidth");d=md(a,"borderTopWidth");a=md(a,"borderBottomWidth");return new nc(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var Dd="closure_listenable_"+(1E6*Math.random()|0),Ed=0;function Fd(a,b,c,d,e){this.rd=a;this.xg=null;this.src=b;this.type=c;this.Ff=!!d;this.Zf=e;this.key=++Ed;this.je=this.Df=!1}function Gd(a){a.je=!0;a.rd=null;a.xg=null;a.src=null;a.Zf=null};function Hd(a){this.src=a;this.sb={};this.of=0}Hd.prototype.add=function(a,b,c,d,e){var h=a.toString();a=this.sb[h];a||(a=this.sb[h]=[],this.of++);var k=Id(a,b,d,e);-1<k?(b=a[k],c||(b.Df=!1)):(b=new Fd(b,this.src,h,!!d,e),b.Df=c,a.push(b));return b};Hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.sb))return!1;var e=this.sb[a];b=Id(e,b,c,d);return-1<b?(Gd(e[b]),rb.splice.call(e,b,1),0==e.length&&(delete this.sb[a],this.of--),!0):!1};
function Jd(a,b){var c=b.type;if(!(c in a.sb))return!1;var d=yb(a.sb[c],b);d&&(Gd(b),0==a.sb[c].length&&(delete a.sb[c],a.of--));return d}Hd.prototype.Bg=function(a){a=a&&a.toString();var b=0,c;for(c in this.sb)if(!a||c==a){for(var d=this.sb[c],e=0;e<d.length;e++)++b,Gd(d[e]);delete this.sb[c];this.of--}return b};Hd.prototype.Me=function(a,b,c,d){a=this.sb[a.toString()];var e=-1;a&&(e=Id(a,b,c,d));return-1<e?a[e]:null};
function Id(a,b,c,d){for(var e=0;e<a.length;++e){var h=a[e];if(!h.je&&h.rd==b&&h.Ff==!!c&&h.Zf==d)return e}return-1};var Kd=!r||r&&9<=Rb,Ld=!r||r&&9<=Rb,Md=r&&!Pb("9");!t||Pb("528");Eb&&Pb("1.9b")||r&&Pb("8")||Db&&Pb("9.5")||t&&Pb("528");Eb&&!Pb("8")||r&&Pb("9");var Nd="ontouchstart"in g||!!(g.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!g.navigator||!g.navigator.msMaxTouchPoints);function Od(){0!=Pd&&(Qd[ja(this)]=this);this.Fe=this.Fe;this.rg=this.rg}var Pd=0,Qd={};Od.prototype.Fe=!1;Od.prototype.m=function(){if(!this.Fe&&(this.Fe=!0,this.Z(),0!=Pd)){var a=ja(this);delete Qd[a]}};Od.prototype.Z=function(){if(this.rg)for(;this.rg.length;)this.rg.shift()()};function Rd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.vd=!1;this.fl=!0}Rd.prototype.Z=function(){};Rd.prototype.m=function(){};Rd.prototype.stopPropagation=function(){this.vd=!0};Rd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.fl=!1};function Sd(a){Sd[" "](a);return a}Sd[" "]=ba;function Td(a,b){Rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.mi=!1;this.mb=null;a&&this.g(a,b)}n(Td,Rd);var Ud=[1,4,2];f=Td.prototype;
f.g=function(a,b){this.mb=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Eb){var e;a:{try{Sd(d.nodeName);e=!0;break a}catch(h){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.xk,set:this.Ct},offsetY:{configurable:!0,enumerable:!0,get:this.yk,set:this.Dt}}):(this.offsetX=this.xk(),
this.offsetY=this.yk());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.mi=Gb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Vd(a){return Kd?0==a.mb.button:"click"==a.type?!0:!!(a.mb.button&Ud[0])}f.stopPropagation=function(){Td.k.stopPropagation.call(this);this.mb.stopPropagation?this.mb.stopPropagation():this.mb.cancelBubble=!0};f.preventDefault=function(){Td.k.preventDefault.call(this);var a=this.mb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Md)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.Z=function(){};
f.xk=function(){return t||void 0!==this.mb.offsetX?this.mb.offsetX:this.mb.layerX};f.Ct=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.yk=function(){return t||void 0!==this.mb.offsetY?this.mb.offsetY:this.mb.layerY};f.Dt=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Wd="closure_lm_"+(1E6*Math.random()|0),Xd={},Yd=0;function Zd(a,b,c,d,e){if(ea(b)){for(var h=0;h<b.length;h++)Zd(a,b[h],c,d,e);return null}c=$d(c);if(a&&a[Dd])a=a.N(b,c,d,e);else{if(!b)throw Error("Invalid event type");var h=!!d,k=ae(a);k||(a[Wd]=k=new Hd(a));c=k.add(b,c,!1,d,e);c.xg||(d=be(),c.xg=d,d.src=a,d.rd=c,a.addEventListener?a.addEventListener(b.toString(),d,h):a.attachEvent(ce(b.toString()),d),Yd++);a=c}return a}
function be(){var a=de,b=Ld?function(c){return a.call(b.src,b.rd,c)}:function(c){c=a.call(b.src,b.rd,c);if(!c)return c};return b}function ee(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)ee(a,b[h],c,d,e);else c=$d(c),a&&a[Dd]?a.Tb(b,c,d,e):a&&(a=ae(a))&&(b=a.Me(b,c,!!d,e))&&fe(b)}
function fe(a){if(ga(a)||!a||a.je)return!1;var b=a.src;if(b&&b[Dd])return Jd(b.Hc,a);var c=a.type,d=a.xg;b.removeEventListener?b.removeEventListener(c,d,a.Ff):b.detachEvent&&b.detachEvent(ce(c),d);Yd--;(c=ae(b))?(Jd(c,a),0==c.of&&(c.src=null,b[Wd]=null)):Gd(a);return!0}function ce(a){return a in Xd?Xd[a]:Xd[a]="on"+a}function ge(a,b,c,d){var e=!0;if(a=ae(a))if(b=a.sb[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var h=b[a];h&&h.Ff==c&&!h.je&&(h=he(h,d),e=e&&!1!==h)}return e}
function he(a,b){var c=a.rd,d=a.Zf||a.src;a.Df&&fe(a);return c.call(d,b)}
function de(a,b){if(a.je)return!0;if(!Ld){var c=b||aa("window.event"),d=new Td(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var h=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){h=!0}if(h||void 0==c.returnValue)c.returnValue=!0}c=[];for(h=d.currentTarget;h;h=h.parentNode)c.push(h);for(var h=a.type,m=c.length-1;!d.vd&&0<=m;m--){d.currentTarget=c[m];var p=ge(c[m],h,!0,d),e=e&&p}for(m=0;!d.vd&&m<c.length;m++)d.currentTarget=c[m],p=ge(c[m],h,!1,d),e=e&&p}return e}return he(a,new Td(b,
this))}function ae(a){a=a[Wd];return a instanceof Hd?a:null}var ie="__closure_events_fn_"+(1E9*Math.random()>>>0);function $d(a){if(ha(a))return a;a[ie]||(a[ie]=function(b){return a.handleEvent(b)});return a[ie]};function je(a){Od.call(this);this.Bk=a;this.jg={}}n(je,Od);var ke=[];f=je.prototype;f.N=function(a,b,c,d){ea(b)||(b&&(ke[0]=b.toString()),b=ke);for(var e=0;e<b.length;e++){var h=Zd(a,b[e],c||this.handleEvent,d||!1,this.Bk||this);if(!h)break;this.jg[h.key]=h}return this};
f.Tb=function(a,b,c,d,e){if(ea(b))for(var h=0;h<b.length;h++)this.Tb(a,b[h],c,d,e);else c=c||this.handleEvent,e=e||this.Bk||this,c=$d(c),d=!!d,b=a&&a[Dd]?a.Me(b,c,d,e):a?(a=ae(a))?a.Me(b,c,d,e):null:null,b&&(fe(b),delete this.jg[b.key]);return this};f.Bg=function(){ib(this.jg,fe);this.jg={}};f.Z=function(){je.k.Z.call(this);this.Bg()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function le(){}ca(le);le.prototype.ct=0;function me(){Od.call(this);this.Hc=new Hd(this);this.Mr=this;this.li=null}n(me,Od);me.prototype[Dd]=!0;f=me.prototype;f.Uf=function(){return this.li};f.Jg=function(a){this.li=a};f.addEventListener=function(a,b,c,d){Zd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){ee(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.Uf();if(c)for(b=[];c;c=c.Uf())b.push(c);var c=this.Mr,d=a.type||a;if(l(a))a=new Rd(a,c);else if(a instanceof Rd)a.target=a.target||c;else{var e=a;a=new Rd(d,c);lb(a,e)}var e=!0,h;if(b)for(var k=b.length-1;!a.vd&&0<=k;k--)h=a.currentTarget=b[k],e=ne(h,d,!0,a)&&e;a.vd||(h=a.currentTarget=c,e=ne(h,d,!0,a)&&e,a.vd||(e=ne(h,d,!1,a)&&e));if(b)for(k=0;!a.vd&&k<b.length;k++)h=a.currentTarget=b[k],e=ne(h,d,!1,a)&&e;return e};
f.Z=function(){me.k.Z.call(this);this.Hc&&this.Hc.Bg(void 0);this.li=null};f.N=function(a,b,c,d){return this.Hc.add(String(a),b,!1,c,d)};f.Tb=function(a,b,c,d){return this.Hc.remove(String(a),b,c,d)};function ne(a,b,c,d){b=a.Hc.sb[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,h=0;h<b.length;++h){var k=b[h];if(k&&!k.je&&k.Ff==c){var m=k.rd,p=k.Zf||k.src;k.Df&&Jd(a.Hc,k);e=!1!==m.call(p,d)&&e}}return e&&0!=d.fl}f.Me=function(a,b,c,d){return this.Hc.Me(String(a),b,c,d)};function oe(a){me.call(this);this.Kf=a||Sc();this.Gg=pe;this.bg=null;this.Q=!1;this.D=null;this.Jc=void 0;this.Dc=this.ya=this.jb=this.og=null;this.St=!1}n(oe,me);oe.prototype.Ms=le.gc();var pe=null;
function qe(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function re(a){return a.bg||(a.bg=":"+(a.Ms.ct++).toString(36))}f=oe.prototype;f.n=function(){return this.D};function se(a){a.Jc||(a.Jc=new je(a));return a.Jc}
f.kb=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.jb&&this.bg&&te(this.jb,this.bg)&&this.jb!=a)throw Error("Unable to set parent component");this.jb=a;oe.k.Jg.call(this,a)};f.getParent=function(){return this.jb};f.Jg=function(a){if(this.jb&&this.jb!=a)throw Error("Method not supported");oe.k.Jg.call(this,a)};f.ob=function(){return this.Kf};f.H=function(){this.D=this.Kf.createElement("div")};f.F=function(a){this.ke(a)};
f.ke=function(a,b){if(this.Q)throw Error("Component already rendered");this.D||this.H();a?a.insertBefore(this.D,b||null):this.Kf.dc.body.appendChild(this.D);this.jb&&!this.jb.Q||this.Ga()};f.Ga=function(){this.Q=!0;ue(this,function(a){!a.Q&&a.n()&&a.Ga()})};f.Mb=function(){ue(this,function(a){a.Q&&a.Mb()});this.Jc&&this.Jc.Bg();this.Q=!1};
f.Z=function(){this.Q&&this.Mb();this.Jc&&(this.Jc.m(),delete this.Jc);ue(this,function(a){a.m()});!this.St&&this.D&&Vb(this.D);this.jb=this.og=this.D=this.Dc=this.ya=null;oe.k.Z.call(this)};f.Ae=function(a,b){this.Md(a,ve(this),b)};
f.Md=function(a,b,c){if(a.Q&&(c||!this.Q))throw Error("Component already rendered");if(0>b||b>ve(this))throw Error("Child component index out of bounds");this.Dc&&this.ya||(this.Dc={},this.ya=[]);if(a.getParent()==this){var d=re(a);this.Dc[d]=a;yb(this.ya,a)}else{var d=this.Dc,e=re(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.kb(this);Bb(this.ya,b,0,a);a.Q&&this.Q&&a.getParent()==this?(c=this.Gb(),b=c.childNodes[b]||null,b!=a.n()&&c.insertBefore(a.n(),b)):c?(this.D||
this.H(),b=we(this,b+1),a.ke(this.Gb(),b?b.D:null)):this.Q&&!a.Q&&a.D&&a.D.parentNode&&1==a.D.parentNode.nodeType&&a.Ga()};f.Gb=function(){return this.D};function xe(a){null==a.Gg&&(a.Gg="rtl"==nd(a.Q?a.D:a.Kf.dc.body,"direction"));return a.Gg}f.hf=function(a){if(this.Q)throw Error("Component already rendered");this.Gg=a};function ye(a){return!!a.ya&&0!=a.ya.length}function ve(a){return a.ya?a.ya.length:0}function te(a,b){var c;a.Dc&&b?(c=a.Dc,c=(b in c?c[b]:void 0)||null):c=null;return c}
function we(a,b){return a.ya?a.ya[b]||null:null}function ue(a,b,c){a.ya&&tb(a.ya,b,c)}function ze(a,b){return a.ya&&b?sb(a.ya,b):-1}f.removeChild=function(a,b){if(a){var c=l(a)?a:re(a);a=te(this,c);if(c&&a){var d=this.Dc;c in d&&delete d[c];yb(this.ya,a);b&&(a.Mb(),a.D&&Vb(a.D));a.kb(null)}}if(!a)throw Error("Child is not in parent component");return a};f.bl=function(a){for(var b=[];ye(this);)b.push(this.removeChild(we(this,0),a));return b};function Ae(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}function Be(a,b){return a.classList?a.classList.contains(b):xb(Ae(a),b)}function Ce(a,b){a.classList?a.classList.add(b):Be(a,b)||(a.className+=0<a.className.length?" "+b:b)}function De(a,b){if(a.classList)tb(b,function(b){Ce(a,b)});else{var c={};tb(Ae(a),function(a){c[a]=!0});tb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Ee(a,b){a.classList?a.classList.remove(b):Be(a,b)&&(a.className=ub(Ae(a),function(a){return a!=b}).join(" "))}function Fe(a,b){a.classList?tb(b,function(b){Ee(a,b)}):a.className=ub(Ae(a),function(a){return!xb(b,a)}).join(" ")};function Ge(a,b){if(!a)throw Error("Invalid class name "+a);if(!ha(b))throw Error("Invalid decorator function "+b);}var He={};var Ie;function Je(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function Ke(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Ie||(Ie={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Ie,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Le(a){a.removeAttribute("aria-activedescendant")}function Me(a,b){var c=a.getAttribute("aria-"+b);return null==c||void 0==c?"":String(c)};function Ne(){}var Oe;ca(Ne);var Pe={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=Ne.prototype;f.Mf=function(){};f.H=function(a){return a.ob().H("div",this.Ke(a).join(" "),a.fb)};f.Gb=function(a){return a};f.Ge=function(a,b,c){if(a=a.n?a.n():a){var d=[b];r&&!Pb("7")&&(d=Qe(Ae(a),b),d.push(b));(c?De:Fe)(a,d)}};f.We=function(a){xe(a)&&this.hf(a.n(),!0);a.isEnabled()&&this.Vc(a,a.J())};
function Re(a,b,c){if(a=c||a.Mf())c=b.getAttribute("role")||null,a!=c&&Je(b,a)}function Se(a,b){a.J()||Ke(b,"hidden",!a.J());a.isEnabled()||Te(b,1,!a.isEnabled());a.Ca&8&&Te(b,8,a.gg());a.Ca&16&&Te(b,16,!!(a.$&16));a.Ca&64&&Te(b,64,a.ae())}f.Ai=function(a,b){zd(a,!b,!r&&!Db)};f.hf=function(a,b){this.Ge(a,this.U()+"-rtl",b)};f.wc=function(a){var b;return a.Ca&32&&(b=a.Ma())?gd(b)&&hd(b):!1};
f.Vc=function(a,b){var c;if(a.Ca&32&&(c=a.Ma())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.Re(null)}(gd(c)&&hd(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.O=function(a,b){xd(a,b);a&&Ke(a,"hidden",!b)};f.Zb=function(a,b,c){var d=a.n();if(d){var e=this.Pf(b);e&&this.Ge(a,e,c);Te(d,b,c)}};
function Te(a,b,c){Oe||(Oe={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=Oe[b];var d=a.getAttribute("role")||null;d&&(d=Pe[d]||b,b="checked"==b||"selected"==b?d:b);b&&Ke(a,b,c)}f.Bd=function(a,b){var c=this.Gb(a);if(c&&(Zb(c),b))if(l(b))dd(c,b);else{var d=function(a){if(a){var b=Uc(c);c.appendChild(l(a)?b.createTextNode(a):a)}};ea(b)?tb(b,d):!fa(b)||"nodeType"in b?d(b):tb(zb(b),d)}};f.Ma=function(a){return a.n()};f.U=function(){return"goog-control"};
f.Ke=function(a){var b=this.U(),c=[b],d=this.U();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.Pf(e));b&=~e}c.push.apply(c,d);(a=a.fc)&&c.push.apply(c,a);r&&!Pb("7")&&c.push.apply(c,Qe(c));return c};function Qe(a,b){var c=[];b&&(a=a.concat([b]));tb([],function(d){!wb(d,pa(xb,a))||b&&!xb(d,b)||c.push(d.join("_"))});return c}
f.Pf=function(a){if(!this.Lj){var b=this.U();b.replace(/\xa0|\s/g," ");this.Lj={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Lj[a]};function Ue(a,b,c,d,e){if(!(r||t&&Pb("525")))return!0;if(Gb&&e)return Ve(a);if(e&&!d)return!1;ga(b)&&(b=We(b));if(!c&&(17==b||18==b||Gb&&91==b))return!1;if(t&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(r&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!t}return Ve(a)}
function Ve(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||t&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function We(a){if(Eb)a=Xe(a);else if(Gb&&t)a:switch(a){case 93:a=91;break a}return a}
function Xe(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Ye(a,b){me.call(this);a&&Ze(this,a,b)}n(Ye,me);f=Ye.prototype;f.D=null;f.hg=null;f.Xh=null;f.ig=null;f.Hb=-1;f.Nc=-1;f.kh=!1;
var $e={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},af={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},bf=r||t&&Pb("525"),cf=Gb&&Eb;f=Ye.prototype;
f.Es=function(a){t&&(17==this.Hb&&!a.ctrlKey||18==this.Hb&&!a.altKey||Gb&&91==this.Hb&&!a.metaKey)&&(this.Nc=this.Hb=-1);-1==this.Hb&&(a.ctrlKey&&17!=a.keyCode?this.Hb=17:a.altKey&&18!=a.keyCode?this.Hb=18:a.metaKey&&91!=a.keyCode&&(this.Hb=91));bf&&!Ue(a.keyCode,this.Hb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Nc=We(a.keyCode),cf&&(this.kh=a.altKey))};f.Fs=function(a){this.Nc=this.Hb=-1;this.kh=a.altKey};
f.handleEvent=function(a){var b=a.mb,c,d,e=b.altKey;r&&"keypress"==a.type?(c=this.Nc,d=13!=c&&27!=c?b.keyCode:0):t&&"keypress"==a.type?(c=this.Nc,d=0<=b.charCode&&63232>b.charCode&&Ve(c)?b.charCode:0):Db?(c=this.Nc,d=Ve(c)?b.keyCode:0):(c=b.keyCode||this.Nc,d=b.charCode||0,cf&&(e=this.kh),Gb&&63==d&&224==c&&(c=191));var h=c=We(c),k=b.keyIdentifier;c?63232<=c&&c in $e?h=$e[c]:25==c&&a.shiftKey&&(h=9):k&&k in af&&(h=af[k]);a=h==this.Hb;this.Hb=h;b=new df(h,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.n=function(){return this.D};function Ze(a,b,c){a.ig&&a.detach();a.D=b;a.hg=Zd(a.D,"keypress",a,c);a.Xh=Zd(a.D,"keydown",a.Es,c,a);a.ig=Zd(a.D,"keyup",a.Fs,c,a)}f.detach=function(){this.hg&&(fe(this.hg),fe(this.Xh),fe(this.ig),this.ig=this.Xh=this.hg=null);this.D=null;this.Nc=this.Hb=-1};f.Z=function(){Ye.k.Z.call(this);this.detach()};function df(a,b,c,d){Td.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}n(df,Td);function ef(a,b,c){oe.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ja(b);if(d=He[d])break;b=b.k?b.k.constructor:null}b=d?ha(d.gc)?d.gc():new d:null}this.L=b;this.Ig(void 0!==a?a:null)}n(ef,oe);f=ef.prototype;f.fb=null;f.$=0;f.Ca=39;f.qh=255;f.Fd=0;f.wa=!0;f.fc=null;f.Te=!0;f.jh=!1;f.st=null;f.Ma=function(){return this.L.Ma(this)};f.Tf=function(){return this.ib||(this.ib=new Ye)};
f.Ge=function(a,b){b?a&&(this.fc?xb(this.fc,a)||this.fc.push(a):this.fc=[a],this.L.Ge(this,a,!0)):a&&this.fc&&yb(this.fc,a)&&(0==this.fc.length&&(this.fc=null),this.L.Ge(this,a,!1))};f.H=function(){var a=this.L.H(this);this.D=a;Re(this.L,a,this.Vf());this.jh||this.L.Ai(a,!1);this.J()||this.L.O(a,!1)};f.Vf=function(){return this.st};f.Gb=function(){return this.L.Gb(this.n())};
f.Ga=function(){ef.k.Ga.call(this);Se(this,this.D);this.L.We(this);if(this.Ca&-2&&(this.Te&&ff(this,!0),this.Ca&32)){var a=this.Ma();if(a){var b=this.Tf();Ze(b,a);se(this).N(b,"key",this.Ob).N(a,"focus",this.Yf).N(a,"blur",this.Re)}}};
function ff(a,b){var c=se(a),d=a.n();b?(c.N(d,"mouseover",a.Ue).N(d,"mousedown",a.Kc).N(d,"mouseup",a.Ve).N(d,"mouseout",a.Qh),a.Se!=ba&&c.N(d,"contextmenu",a.Se),r&&c.N(d,"dblclick",a.zk)):(c.Tb(d,"mouseover",a.Ue).Tb(d,"mousedown",a.Kc).Tb(d,"mouseup",a.Ve).Tb(d,"mouseout",a.Qh),a.Se!=ba&&c.Tb(d,"contextmenu",a.Se),r&&c.Tb(d,"dblclick",a.zk))}f.Mb=function(){ef.k.Mb.call(this);this.ib&&this.ib.detach();this.J()&&this.isEnabled()&&this.L.Vc(this,!1)};
f.Z=function(){ef.k.Z.call(this);this.ib&&(this.ib.m(),delete this.ib);delete this.L;this.fc=this.fb=null};f.Bd=function(a){this.L.Bd(this.n(),a);this.Ig(a)};f.Ig=function(a){this.fb=a};f.Of=function(){var a=this.fb;if(!a)return"";a=l(a)?a:ea(a)?vb(a,kd).join(""):id(a);return Oa(a)};f.hf=function(a){ef.k.hf.call(this,a);var b=this.n();b&&this.L.hf(b,a)};f.Ai=function(a){this.jh=a;var b=this.n();b&&this.L.Ai(b,a)};f.J=function(){return this.wa};
f.O=function(a,b){if(b||this.wa!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.n();c&&this.L.O(c,a);this.isEnabled()&&this.L.Vc(this,a);this.wa=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};f.gf=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!gf(this,1,!a)||(a||(this.setActive(!1),this.xb(!1)),this.J()&&this.L.Vc(this,a),this.Zb(1,!a,!0))};f.xb=function(a){gf(this,2,a)&&this.Zb(2,a)};f.setActive=function(a){gf(this,4,a)&&this.Zb(4,a)};
f.gg=function(){return!!(this.$&8)};f.Di=function(a){gf(this,8,a)&&this.Zb(8,a)};function hf(a,b){gf(a,16,b)&&a.Zb(16,b)}f.ae=function(){return!!(this.$&64)};function jf(a,b){gf(a,64,b)&&a.Zb(64,b)}f.Zb=function(a,b,c){c||1!=a?this.Ca&a&&b!=!!(this.$&a)&&(this.L.Zb(this,a,b),this.$=b?this.$|a:this.$&~a):this.gf(!b)};f.tb=function(a,b){if(this.Q&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.Zb(a,!1);this.Ca=b?this.Ca|a:this.Ca&~a};
function kf(a,b){return!!(a.qh&b)&&!!(a.Ca&b)}function gf(a,b,c){return!!(a.Ca&b)&&!!(a.$&b)!=c&&(!(a.Fd&b)||a.dispatchEvent(qe(b,c)))&&!a.Fe}f.Ue=function(a){!lf(a,this.n())&&this.dispatchEvent("enter")&&this.isEnabled()&&kf(this,2)&&this.xb(!0)};f.Qh=function(a){!lf(a,this.n())&&this.dispatchEvent("leave")&&(kf(this,4)&&this.setActive(!1),kf(this,2)&&this.xb(!1))};f.Se=ba;function lf(a,b){return!!a.relatedTarget&&cd(b,a.relatedTarget)}
f.Kc=function(a){this.isEnabled()&&(kf(this,2)&&this.xb(!0),!Vd(a)||t&&Gb&&a.ctrlKey||(kf(this,4)&&this.setActive(!0),this.L.wc(this)&&this.Ma().focus()));this.jh||!Vd(a)||t&&Gb&&a.ctrlKey||a.preventDefault()};f.Ve=function(a){this.isEnabled()&&(kf(this,2)&&this.xb(!0),this.$&4&&this.Pc(a)&&kf(this,4)&&this.setActive(!1))};f.zk=function(a){this.isEnabled()&&this.Pc(a)};
f.Pc=function(a){kf(this,16)&&hf(this,!(this.$&16));kf(this,8)&&this.Di(!0);kf(this,64)&&jf(this,!this.ae());var b=new Rd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.mi=a.mi);return this.dispatchEvent(b)};f.Yf=function(){kf(this,32)&&gf(this,32,!0)&&this.Zb(32,!0)};f.Re=function(){kf(this,4)&&this.setActive(!1);kf(this,32)&&gf(this,32,!1)&&this.Zb(32,!1)};
f.Ob=function(a){return this.J()&&this.isEnabled()&&this.od(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.od=function(a){return 13==a.keyCode&&this.Pc(a)};if(!ha(ef))throw Error("Invalid component class "+ef);if(!ha(Ne))throw Error("Invalid renderer class "+Ne);var mf=ja(ef);He[mf]=Ne;Ge("goog-control",function(){return new ef(null)});function nf(){this.Mj=[]}n(nf,Ne);ca(nf);function of(a,b){var c=a.Mj[b];if(!c){switch(b){case 0:c=a.U()+"-highlight";break;case 1:c=a.U()+"-checkbox";break;case 2:c=a.U()+"-content"}a.Mj[b]=c}return c}f=nf.prototype;f.Mf=function(){return"menuitem"};f.H=function(a){var b=a.ob().H("div",this.Ke(a).join(" "),pf(this,a.fb,a.ob()));qf(this,a,b,!!(a.Ca&8)||!!(a.Ca&16));return b};f.Gb=function(a){return a&&a.firstChild};
f.Bd=function(a,b){var c=this.Gb(a),d=rf(this,a)?c.firstChild:null;nf.k.Bd.call(this,a,b);d&&!rf(this,a)&&c.insertBefore(d,c.firstChild||null)};function pf(a,b,c){a=of(a,2);return c.H("div",a,b)}f.kl=function(a,b,c){a&&b&&qf(this,a,b,c)};f.Bi=function(a,b,c){a&&b&&qf(this,a,b,c)};function rf(a,b){var c=a.Gb(b);if(c){var c=c.firstChild,d=of(a,1);return!!c&&ia(c)&&1==c.nodeType&&Be(c,d)}return!1}
function qf(a,b,c,d){Re(a,c,b.Vf());Se(b,c);d!=rf(a,c)&&(d?Ce(c,"goog-option"):Ee(c,"goog-option"),c=a.Gb(c),d?(a=of(a,1),c.insertBefore(b.ob().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}f.Pf=function(a){switch(a){case 2:return of(this,0);case 16:case 8:return"goog-option-selected";default:return nf.k.Pf.call(this,a)}};f.U=function(){return"goog-menuitem"};function sf(a,b,c,d){ef.call(this,a,d||nf.gc(),c);this.ra(b)}n(sf,ef);f=sf.prototype;f.Na=function(){var a=this.og;return null!=a?a:this.Of()};f.ra=function(a){this.og=a};f.tb=function(a,b){sf.k.tb.call(this,a,b);switch(a){case 8:this.$&16&&!b&&hf(this,!1);var c=this.n();c&&this.L.kl(this,c,b);break;case 16:(c=this.n())&&this.L.Bi(this,c,b)}};f.kl=function(a){this.tb(8,a)};f.Bi=function(a){this.tb(16,a)};
f.Of=function(){var a=this.fb;return ea(a)?(a=vb(a,function(a){return ia(a)&&1==a.nodeType&&(Be(a,"goog-menuitem-accel")||Be(a,"goog-menuitem-mnemonic-separator"))?"":kd(a)}).join(""),Oa(a)):sf.k.Of.call(this)};f.Ve=function(a){var b=this.getParent();if(b){var c=b.Uk;b.Uk=null;if(b=c&&ga(a.clientX))b=new mc(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}sf.k.Ve.call(this,a)};f.od=function(a){return a.keyCode==this.Nk&&this.Pc(a)?!0:sf.k.od.call(this,a)};f.xs=function(){return this.Nk};
Ge("goog-menuitem",function(){return new sf(null)});sf.prototype.Vf=function(){return this.Ca&16?"menuitemcheckbox":this.Ca&8?"menuitemradio":sf.k.Vf.call(this)};sf.prototype.getParent=function(){return ef.prototype.getParent.call(this)};sf.prototype.Uf=function(){return ef.prototype.Uf.call(this)};function tf(a){this.Cj=a}ca(tf);f=tf.prototype;f.Mf=function(){return this.Cj};function uf(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.ob().H("div",this.Ke(a).join(" "))};f.Gb=function(a){return a};f.We=function(a){a=a.n();zd(a,!0,Eb);r&&(a.hideFocus=!0);var b=this.Mf();b&&Je(a,b)};f.Ma=function(a){return a.n()};f.U=function(){return"goog-container"};f.Ke=function(a){var b=this.U(),c=[b,a.ie==vf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function wf(){}n(wf,Ne);ca(wf);wf.prototype.H=function(a){return a.ob().H("div",this.U())};wf.prototype.Bd=function(){};wf.prototype.U=function(){return"goog-menuseparator"};function xf(a,b){ef.call(this,null,a||wf.gc(),b);this.tb(1,!1);this.tb(2,!1);this.tb(4,!1);this.tb(32,!1);this.$=1}n(xf,ef);xf.prototype.Ga=function(){xf.k.Ga.call(this);var a=this.n();Je(a,"separator")};Ge("goog-menuseparator",function(){return new xf});function yf(a){this.Cj=a||"menu"}n(yf,tf);ca(yf);yf.prototype.U=function(){return"goog-menu"};yf.prototype.We=function(a){yf.k.We.call(this,a);a=a.n();Ke(a,"haspopup","true")};Ge("goog-menuseparator",function(){return new xf});function zf(a,b,c){oe.call(this,c);this.L=b||tf.gc();this.ie=a||Af}n(zf,oe);var vf="horizontal",Af="vertical";f=zf.prototype;f.Yh=null;f.ib=null;f.L=null;f.ie=null;f.wa=!0;f.hd=!0;f.kd=!0;f.M=-1;f.Ha=null;f.fe=!1;f.Or=!1;f.qt=!0;f.tc=null;f.Ma=function(){return this.Yh||this.L.Ma(this)};f.Tf=function(){return this.ib||(this.ib=new Ye(this.Ma()))};f.H=function(){this.D=this.L.H(this)};f.Gb=function(){return this.L.Gb(this.n())};
f.Ga=function(){zf.k.Ga.call(this);ue(this,function(a){a.Q&&Bf(this,a)},this);var a=this.n();this.L.We(this);this.O(this.wa,!0);se(this).N(this,"enter",this.Oh).N(this,"highlight",this.Ds).N(this,"unhighlight",this.Js).N(this,"open",this.Gs).N(this,"close",this.As).N(a,"mousedown",this.Kc).N(Uc(a),"mouseup",this.Bs).N(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.zs);this.wc()&&Cf(this,!0)};
function Cf(a,b){var c=se(a),d=a.Ma();b?c.N(d,"focus",a.Yf).N(d,"blur",a.Re).N(a.Tf(),"key",a.Ob):c.Tb(d,"focus",a.Yf).Tb(d,"blur",a.Re).Tb(a.Tf(),"key",a.Ob)}f.Mb=function(){this.$a(-1);this.Ha&&jf(this.Ha,!1);this.fe=!1;zf.k.Mb.call(this)};f.Z=function(){zf.k.Z.call(this);this.ib&&(this.ib.m(),this.ib=null);this.L=this.Ha=this.tc=this.Yh=null};f.Oh=function(){return!0};
f.Ds=function(a){var b=ze(this,a.target);if(-1<b&&b!=this.M){var c=we(this,this.M);c&&c.xb(!1);this.M=b;c=we(this,this.M);this.fe&&c.setActive(!0);this.qt&&this.Ha&&c!=this.Ha&&(c.Ca&64?jf(c,!0):jf(this.Ha,!1))}b=this.n();null!=a.target.n()&&Ke(b,"activedescendant",a.target.n().id)};f.Js=function(a){a.target==we(this,this.M)&&(this.M=-1);a=this.n();Le(a)};f.Gs=function(a){(a=a.target)&&a!=this.Ha&&a.getParent()==this&&(this.Ha&&jf(this.Ha,!1),this.Ha=a)};
f.As=function(a){a.target==this.Ha&&(this.Ha=null)};f.Kc=function(a){this.hd&&(this.fe=!0);var b=this.Ma();b&&gd(b)&&hd(b)?b.focus():a.preventDefault()};f.Bs=function(){this.fe=!1};f.zs=function(a){var b=Df(this,a.target);if(b)switch(a.type){case "mousedown":b.Kc(a);break;case "mouseup":b.Ve(a);break;case "mouseover":b.Ue(a);break;case "mouseout":b.Qh(a);break;case "contextmenu":b.Se(a)}};
function Df(a,b){if(a.tc)for(var c=a.n();b&&b!==c;){var d=b.id;if(d in a.tc)return a.tc[d];b=b.parentNode}return null}f.Yf=function(){};f.Re=function(){this.$a(-1);this.fe=!1;this.Ha&&jf(this.Ha,!1)};f.Ob=function(a){return this.isEnabled()&&this.J()&&(0!=ve(this)||this.Yh)&&this.od(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.od=function(a){var b=we(this,this.M);if(b&&"function"==typeof b.Ob&&b.Ob(a)||this.Ha&&this.Ha!=b&&"function"==typeof this.Ha.Ob&&this.Ha.Ob(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.wc())this.Ma().blur();else return!1;break;case 36:Ef(this);break;case 35:Ff(this);break;case 38:if(this.ie==Af)Gf(this);else return!1;break;case 37:if(this.ie==vf)xe(this)?Hf(this):Gf(this);else return!1;break;case 40:if(this.ie==Af)Hf(this);else return!1;break;
case 39:if(this.ie==vf)xe(this)?Gf(this):Hf(this);else return!1;break;default:return!1}return!0};function Bf(a,b){var c=b.n(),c=c.id||(c.id=re(b));a.tc||(a.tc={});a.tc[c]=b}f.Ae=function(a,b){zf.k.Ae.call(this,a,b)};
f.Md=function(a,b,c){a.Fd|=2;a.Fd|=64;!this.wc()&&this.Or||a.tb(32,!1);a.Q&&0!=a.Te&&ff(a,!1);a.Te=!1;var d=a.getParent()==this?ze(this,a):-1;zf.k.Md.call(this,a,b,c);a.Q&&this.Q&&Bf(this,a);a=d;-1==a&&(a=ve(this));a==this.M?this.M=Math.min(ve(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=l(a)?te(this,a):a){var c=ze(this,a);-1!=c&&(c==this.M?(a.xb(!1),this.M=-1):c<this.M&&this.M--);var d=a.n();d&&d.id&&this.tc&&(c=this.tc,d=d.id,d in c&&delete c[d])}c=a=zf.k.removeChild.call(this,a,b);c.Q&&1!=c.Te&&ff(c,!0);c.Te=!0;return a};f.J=function(){return this.wa};
f.O=function(a,b){if(b||this.wa!=a&&this.dispatchEvent(a?"show":"hide")){this.wa=a;var c=this.n();c&&(xd(c,a),this.wc()&&uf(this.Ma(),this.hd&&this.wa),b||this.dispatchEvent(this.wa?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.hd};
f.gf=function(a){this.hd!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.hd=!0,ue(this,function(a){a.Al?delete a.Al:a.gf(!0)})):(ue(this,function(a){a.isEnabled()?a.gf(!1):a.Al=!0}),this.fe=this.hd=!1),this.wc()&&uf(this.Ma(),a&&this.wa))};f.wc=function(){return this.kd};f.Vc=function(a){a!=this.kd&&this.Q&&Cf(this,a);this.kd=a;this.hd&&this.wa&&uf(this.Ma(),a)};f.$a=function(a){(a=we(this,a))?a.xb(!0):-1<this.M&&we(this,this.M).xb(!1)};f.xb=function(a){this.$a(ze(this,a))};
function Ef(a){If(a,function(a,c){return(a+1)%c},ve(a)-1)}function Ff(a){If(a,function(a,c){a--;return 0>a?c-1:a},0)}function Hf(a){If(a,function(a,c){return(a+1)%c},a.M)}function Gf(a){If(a,function(a,c){a--;return 0>a?c-1:a},a.M)}function If(a,b,c){c=0>c?ze(a,a.Ha):c;var d=ve(a);c=b.call(a,c,d);for(var e=0;e<=d;){var h=we(a,c);if(h&&a.Ij(h)){a.$a(c);break}e++;c=b.call(a,c,d)}}f.Ij=function(a){return a.J()&&a.isEnabled()&&!!(a.Ca&2)};function Jf(){}n(Jf,Ne);ca(Jf);Jf.prototype.U=function(){return"goog-menuheader"};function Kf(a,b,c){ef.call(this,a,c||Jf.gc(),b);this.tb(1,!1);this.tb(2,!1);this.tb(4,!1);this.tb(32,!1);this.$=1}n(Kf,ef);Ge("goog-menuheader",function(){return new Kf(null)});function Lf(a,b){zf.call(this,Af,b||yf.gc(),a);this.Vc(!1)}n(Lf,zf);f=Lf.prototype;f.ih=!0;f.Pr=!1;f.U=function(){return this.L.U()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.m()};f.wk=function(a){return we(this,a)};
f.me=function(a,b){var c=this.J();c||xd(this.n(),!0);var d=this.n(),e=a,h=b,k=rd(d);e instanceof mc&&(h=e.y,e=e.x);var e=d.offsetLeft+(e-k.x),m=d.offsetTop+(h-k.y),k=Eb&&(Gb||Hb)&&Pb("1.9");e instanceof mc?(h=e.x,e=e.y):(h=e,e=m);d.style.left=sd(h,k);d.style.top=sd(e,k);c||xd(this.n(),!1)};function Mf(a){a.ih=!0;a.Vc(!0)}f.O=function(a,b,c){(b=Lf.k.O.call(this,a,b))&&a&&this.Q&&this.ih&&this.Ma().focus();this.Uk=a&&c&&ga(c.clientX)?new mc(c.clientX,c.clientY):null;return b};
f.Oh=function(a){this.ih&&this.Ma().focus();return Lf.k.Oh.call(this,a)};f.Ij=function(a){return(this.Pr||a.isEnabled())&&a.J()&&!!(a.Ca&2)};f.od=function(a){var b=Lf.k.od.call(this,a);b||ue(this,function(c){!b&&c.xs&&c.Nk==a.keyCode&&(this.isEnabled()&&this.xb(c),b=c.Ob(a))},this);return b};
f.$a=function(a){Lf.k.$a.call(this,a);if(a=we(this,a)){var b=a.n();a=this.n();var c=rd(b),d=rd(a),e=Cd(a),h=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,k=a.scrollTop,e=e+Math.min(h,Math.max(h-(a.clientWidth-b.offsetWidth),0)),k=k+Math.min(c,Math.max(c-d,0)),b=new mc(e,k);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function F(a,b){this.ee=a;this.ma=b;Nf(this);var c=Of(this)[0];this.Da=c[1];this.Bf=u("tspan",{},null);this.Bf.appendChild(document.createTextNode(q?Pf+" ":" "+Pf));F.k.constructor.call(this,c[0])}n(F,Tb);var Pf=Jb?"\u25bc":"\u25be";f=F.prototype;f.clone=function(){return new F(this.ee,this.ma)};f.sf="default";
f.Lg=function(){Qf(this,null);for(var a=this,b=new Lf,c=Of(this),d=0;d<c.length;d++){var e=c[d][1],h=new sf(c[d][0]);h.ra(e);h.Bi(!0);b.Ae(h,!0);hf(h,e==this.Da)}Zd(b,"action",function(b){if(b=b.target){b=b.Na();if(a.h&&a.ma){var c=a.ma(b);void 0!==c&&(b=c)}null!==b&&a.ra(b)}Rf(a)});se(b).N(b.n(),"touchstart",function(a){Df(this,a.target).Kc(a)});se(b).N(b.n(),"touchend",function(a){Df(this,a.target).Pc(a)});c=Yc();d=od();e=Sf(this.Lb);h=this.Lb.getBBox();b.F(Tf);var k=b.n();Wb(k,"blocklyDropdownMenu");
var m=ud(k);e.y=e.y+m.height+h.height>=c.height+d.y?e.y-m.height:e.y+h.height;q?(e.x+=h.width,e.x+=25,e.x<d.x+m.width&&(e.x=d.x+m.width)):(e.x-=25,e.x>c.width+d.x-m.width&&(e.x=c.width+d.x-m.width));Uf(e.x,e.y,c,d);Mf(b);k.focus()};
function Nf(a){a.ni=null;a.Pi=null;var b=a.ee;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Vf(c),e=Wf(c,d),h=Xf(c,d);if((e||h)&&!(d<=e+h)){e&&(a.ni=c[0].substring(0,e-1));h&&(a.Pi=c[0].substr(1-h));c=[];for(d=0;d<b.length;d++){var k=b[d][0],m=b[d][1],k=k.substring(e,k.length-h);c[d]=[k,m]}a.ee=c}}}function Of(a){return ha(a.ee)?a.ee.call(a):a.ee}f.Na=function(){return this.Da};f.ra=function(a){this.Da=a;for(var b=Of(this),c=0;c<b.length;c++)if(b[c][1]==a){this.qa(b[c][0]);return}this.qa(a)};
f.qa=function(a){this.h&&(this.Bf.style.fill=Yf(Zf(this.h.uh)));null!==a&&a!==this.Sa&&(this.Sa=a,Ub(this),this.Ra&&(q?this.Ra.insertBefore(this.Bf,this.Ra.firstChild):this.Ra.appendChild(this.Bf)),this.h&&this.h.B&&(this.h.F(),this.h.Ua(),this.h.t.Fb()))};f.m=function(){Rf(this);F.k.m.call(this)};/*

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
function $f(a){a=a||B;var b;if(a.Nb)b=a.Nb();else if(a.hb)b=a.hb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].hc;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var h=d[e];h&&(a[h.toLowerCase()]=h)}}b=[];for(var k in a)b.push(a[k]);return b}function ag(a,b){for(var c=B.hb(),d=0;d<c.length;d++){var e=c[d].Qb;e&&e.call(c[d],a,b)}}
function bg(a,b,c,d){var e=$f();e.sort(Qa);e.unshift(null);for(var h=void 0,k=0;k<e.length;k++)if(e[k]!==h){var m=C.variables_get?hc(d,"variables_get"):null;m&&m.za();var p=C.variables_set?hc(d,"variables_set"):null;p&&p.za();null===e[k]?h=(m||p).hc()[0]:(m&&ic(m,e[k],"VAR"),p&&ic(p,e[k],"VAR"));p&&a.push(p);m&&a.push(m);m&&p?b.push(c,3*c):b.push(2*c)}}
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
function dg(a,b){var c;if(b){var d=this;c=function(a){var c=eg.call(d,a);a=void 0===c?a:null===c?d.Na():c;b.call(d,a);return c}}else c=eg;dg.k.constructor.call(this,fg,c);a?this.ra(a):this.ra(cg())}n(dg,F);dg.prototype.clone=function(){return new dg(this.Na(),this.ma)};dg.prototype.Na=function(){return this.pb()};dg.prototype.ra=function(a){this.Da=a;this.qa(a)};
function fg(){var a=this.h&&this.h.t?$f(this.h.t):[],b=this.pb();b&&-1==a.indexOf(b)&&a.push(b);a.sort(Qa);a.push(G.pj);a.push(G.gj);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function eg(a){function b(a,b){gg();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==G.pj){var c=this.pb();(a=b(G.sq.replace("%1",c),c))&&ag(c,a);return null}if(a==G.gj)return(a=b(G.Rp,""))?(ag(a,a),a):null};var hg={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",
darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",
moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",
seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ig(a){var b={};a=String(a);var c="#"==a.charAt(0)?a:"#"+a;if(jg.test(c))return b.Rh=kg(c),b.type="hex",b;a:{var d=a.match(lg);if(d){var c=Number(d[1]),e=Number(d[2]),d=Number(d[3]);if(0<=c&&255>=c&&0<=e&&255>=e&&0<=d&&255>=d){c=[c,e,d];break a}}c=[]}if(c.length)return b.Rh=Yf(c),b.type="rgb",b;if(hg&&(c=hg[a.toLowerCase()]))return b.Rh=c,b.type="named",b;throw Error(a+" is not a valid color string");}var mg=/#(.)(.)(.)/;
function kg(a){if(!jg.test(a))throw Error("'"+a+"' is not a valid hex color");4==a.length&&(a=a.replace(mg,"#$1$1$2$2$3$3"));return a.toLowerCase()}function ng(a){a=kg(a);return[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)]}
function Yf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=og(b.toString(16));c=og(c.toString(16));a=og(a.toString(16));return"#"+b+c+a}var jg=/^#(?:[0-9a-f]{3}){1,2}$/i,lg=/^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;function og(a){return 1==a.length?"0"+a:a}
function Zf(a){var b=0,c=0,d=0,e=Math.floor(a/60),h=a/60-e;a=237.15*(1-.39*h);h=237.15*(1-.39*(1-h));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=h;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=h;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=h,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function pg(a,b,c){c=Math.min(Math.max(c,0),1);return[Math.round(c*a[0]+(1-c)*b[0]),Math.round(c*a[1]+(1-c)*b[1]),Math.round(c*a[2]+(1-c)*b[2])]};function qg(a,b){null!=a&&this.append.apply(this,arguments)}f=qg.prototype;f.Fa="";f.set=function(a){this.Fa=""+a};f.append=function(a,b,c){this.Fa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Fa+=arguments[d];return this};f.clear=function(){this.Fa=""};f.toString=function(){return this.Fa};function rg(a,b,c){if(ha(a))c&&(a=oa(a,c));else if(a&&"function"==typeof a.handleEvent)a=oa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:g.setTimeout(a,b||0)};function sg(a,b,c){oe.call(this,c);this.Va=b||tg;this.Th=a instanceof Dc?a:Hc(a,null)}n(sg,oe);var ug={};f=sg.prototype;f.yi=!1;f.He=!1;f.Nt=null;f.Nr=Nc;f.Ye=!0;f.If=-1;f.Z=function(){sg.k.Z.call(this);this.Hd&&(this.Hd.removeNode(this),this.Hd=null);this.D=null};
f.eg=function(){var a=this.n();if(a){var b=vg(this);b&&!b.id&&(b.id=re(this)+".label");Je(a,"treeitem");Ke(a,"selected",!1);Ke(a,"expanded",!1);Ke(a,"level",this.Ud());b&&Ke(a,"labelledby",b.id);(a=this.Sf())&&Je(a,"presentation");(a=this.Rf())&&Je(a,"presentation");if(a=wg(this))if(Je(a,"group"),a.hasChildNodes())for(a=ve(this),b=1;b<=a;b++){var c=we(this,b-1).n();Ke(c,"setsize",a);Ke(c,"posinset",b)}}};
f.H=function(){var a=this.ob(),b=this.Qi(),c=a.dc,a=c.createElement("div");r?(Oc(a,Mc(Lc("br"),b)),a.removeChild(a.firstChild)):Oc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.D=b};f.Ga=function(){sg.k.Ga.call(this);ug[re(this)]=this;this.eg()};f.Mb=function(){sg.k.Mb.call(this);delete ug[re(this)]};
f.Md=function(a,b){var c=we(this,b-1),d=we(this,b);sg.k.Md.call(this,a,b);a.ud=c;a.Yb=d;c?c.Yb=a:this.tk=a;d?d.ud=a:this.Jk=a;var e=this.qb();e&&xg(a,e);yg(a,this.Ud()+1);if(this.n()&&(this.re(),this.vb())){e=wg(this);a.n()||a.H();var h=a.n(),k=d&&d.n();e.insertBefore(h,k);this.Q&&a.Ga();d||(c?c.re():(xd(e,!0),this.Ac(this.vb())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Md(a,b?ze(this,b):ve(this));return a};
f.removeChild=function(a){var b=this.qb(),c=b?b.nd():null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),rg(this.nt,10,this)):this.select();sg.k.removeChild.call(this,a);this.Jk==a&&(this.Jk=a.ud);this.tk==a&&(this.tk=a.Yb);a.ud&&(a.ud.Yb=a.Yb);a.Yb&&(a.Yb.ud=a.ud);c=!a.Yb;a.Hd=null;a.If=-1;if(b&&(b.removeNode(this),this.Q)){b=wg(this);if(a.Q){var d=a.n();b.removeChild(d);a.Mb()}c&&(c=we(this,ve(this)-1))&&c.re();ye(this)||(b.style.display="none",this.re(),this.Sf().className=this.Nf())}return a};
f.remove=sg.prototype.removeChild;f.nt=function(){this.select()};f.Ud=function(){var a=this.If;0>a&&(a=(a=this.getParent())?a.Ud()+1:0,yg(this,a));return a};function yg(a,b){if(b!=a.If){a.If=b;var c=zg(a);if(c){var d=Ag(a)+"px";xe(a)?c.style.paddingRight=d:c.style.paddingLeft=d}ue(a,function(a){yg(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.md=function(){var a=[];ue(this,function(b){a.push(b)});return a};f.gg=function(){return this.yi};
f.select=function(){var a=this.qb();a&&a.Rb(this)};function Bg(a,b){if(a.yi!=b){a.yi=b;Cg(a);var c=a.n();c&&(Ke(c,"selected",b),b&&(c=a.qb().n(),Ke(c,"activedescendant",re(a))))}}f.vb=function(){return this.He};
f.Ac=function(a){var b=a!=this.He;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.He=a;c=this.qb();var d=this.n();if(ye(this)){if(!a&&c&&this.contains(c.nd())&&this.select(),d){if(c=wg(this))if(xd(c,a),a&&this.Q&&!c.hasChildNodes()){var e=[];ue(this,function(a){e.push(a.Qi())});Oc(c,Mc(e));ue(this,function(a){a.Ga()})}this.re()}}else(c=wg(this))&&xd(c,!1);d&&(this.Sf().className=this.Nf(),Ke(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Ac(!this.vb())};
f.expand=function(){this.Ac(!0)};f.collapse=function(){this.Ac(!1)};f.wi=function(){var a=this.getParent();a&&(a.Ac(!0),a.wi())};f.Qi=function(){var a=this.qb(),b=!a.kf||a==this.getParent()&&!a.Gi?this.Va.Vj:this.Va.Uj,a=this.vb()&&ye(this),b={"class":b,style:Dg(this)},c=[];a&&ue(this,function(a){c.push(a.Qi())});a=Lc("div",b,c);return Lc("div",{"class":this.Va.ck,id:re(this)},[Eg(this),a])};function Ag(a){return Math.max(0,(a.Ud()-1)*a.Va.Wh)}
function Eg(a){var b={};b["padding-"+(xe(a)?"right":"left")]=Ag(a)+"px";var b={"class":a.Oe(),style:b},c=a.Kh(),d=Lc("span",{style:{display:"inline-block"},"class":a.Nf()}),e=Lc("span",{"class":a.Va.dk,title:a.Nt||null},a.Th);a=Mc(e,Lc("span",{},a.Nr));return Lc("div",b,[c,d,a])}f.Oe=function(){return this.Va.zh+(this.gg()?" "+this.Va.fk:"")};f.Kh=function(){return Lc("span",{type:"expand",style:{display:"inline-block"},"class":Fg(this)})};
function Fg(a){var b=a.qb(),c=!b.kf||b==a.getParent()&&!b.Gi,d=a.Va,e=new qg;e.append(d.gd," ",d.as," ");if(ye(a)){var h=0;b.Fi&&a.Ye&&(h=a.vb()?2:1);c||(h=a.Yb?h+8:h+4);switch(h){case 1:e.append(d.gs);break;case 2:e.append(d.fs);break;case 4:e.append(d.Zj);break;case 5:e.append(d.ds);break;case 6:e.append(d.bs);break;case 8:e.append(d.$j);break;case 9:e.append(d.js);break;case 10:e.append(d.hs);break;default:e.append(d.Yj)}}else c?e.append(d.Yj):a.Yb?e.append(d.$j):e.append(d.Zj);return e.toString()}
function Dg(a){var b=a.vb()&&ye(a);return zc({"background-position":Gg(a),display:b?null:"none"})}function Gg(a){return(a.Yb?(a.Ud()-1)*a.Va.Wh:"-100")+"px 0"}f.n=function(){var a=sg.k.n.call(this);a||(this.D=a=this.ob().n(re(this)));return a};function zg(a){return(a=a.n())?a.firstChild:null}f.Rf=function(){var a=zg(this);return a?a.firstChild:null};f.Sf=function(){var a=zg(this);return a?a.childNodes[1]:null};function vg(a){return(a=zg(a))&&a.lastChild?a.lastChild.previousSibling:null}
function wg(a){return(a=a.n())?a.lastChild:null}f.qa=function(a){this.Th=a=Gc(a);var b=vg(this);b&&Oc(b,a);(a=this.qb())&&Hg(a,this)};f.pb=function(){var a=Fc(this.Th);return-1!=a.indexOf("&")?"document"in g?Za(a):ab(a):a};function Cg(a){var b=zg(a);b&&(b.className=a.Oe())}f.re=function(){var a=this.Rf();a&&(a.className=Fg(this));if(a=wg(this))a.style.backgroundPosition=Gg(this)};f.gi=function(a){"expand"==a.target.getAttribute("type")&&ye(this)?this.Ye&&this.toggle():(this.select(),Cg(this))};
f.Pk=function(a){"expand"==a.target.getAttribute("type")&&ye(this)||this.Ye&&this.toggle()};function Ig(a){return a.vb()&&ye(a)?Ig(we(a,ve(a)-1)):a}function xg(a,b){a.Hd!=b&&(a.Hd=b,Hg(b,a),ue(a,function(a){xg(a,b)}))}
var tg={Wh:19,ek:"goog-tree-root goog-tree-item",bk:"goog-tree-hide-root",ck:"goog-tree-item",Uj:"goog-tree-children",Vj:"goog-tree-children-nolines",zh:"goog-tree-row",dk:"goog-tree-item-label",gd:"goog-tree-icon",as:"goog-tree-expand-icon",gs:"goog-tree-expand-icon-plus",fs:"goog-tree-expand-icon-minus",js:"goog-tree-expand-icon-tplus",hs:"goog-tree-expand-icon-tminus",ds:"goog-tree-expand-icon-lplus",bs:"goog-tree-expand-icon-lminus",$j:"goog-tree-expand-icon-t",Zj:"goog-tree-expand-icon-l",Yj:"goog-tree-expand-icon-blank",
xh:"goog-tree-expanded-folder-icon",Wj:"goog-tree-collapsed-folder-icon",yh:"goog-tree-file-icon",ak:"goog-tree-expanded-folder-icon",Xj:"goog-tree-collapsed-folder-icon",fk:"selected"};function Jg(a,b,c){sg.call(this,a,b,c)}n(Jg,sg);Jg.prototype.qb=function(){if(this.Hd)return this.Hd;var a=this.getParent();return a&&(a=a.qb())?(xg(this,a),a):null};Jg.prototype.Nf=function(){var a=this.vb(),b=this.ss;if(a&&b)return b;b=this.Ls;if(!a&&b)return b;b=this.Va;if(ye(this)){if(a&&b.xh)return b.gd+" "+b.xh;if(!a&&b.Wj)return b.gd+" "+b.Wj}else if(b.yh)return b.gd+" "+b.yh;return""};/*

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
function Kg(a){var b;q&&(b=workarea.Xf());var c=D("xml");a=Ka(a,!0);for(var d=0,e;e=a[d];d++){var h=Lg(e);e=e.na();h.setAttribute("x",q?b-e.x:e.x);h.setAttribute("y",e.y);c.appendChild(h)}return c}
function Lg(a){var b=D("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Qa){var c=a.Qa();c&&b.appendChild(c)}for(var d=0;c=a.T[d];d++)for(var e=0,h;h=c.Xa[e];e++)if(h.name&&h.Id){var k=D("field",null,h.Na());k.setAttribute("name",h.name);b.appendChild(k)}if(c=a.Qf())c=D("comment",null,c),"object"==typeof a.ba&&(c.setAttribute("pinned",a.ba.J()),d=a.ba.ld(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.T[e];e++){var m;h=!0;5!=c.type&&
(k=H(c.s),1==c.type?(m=D("value"),d=!0):3==c.type&&(m=D("statement")),k&&(m.appendChild(Lg(k)),h=!1),m.setAttribute("name",c.name),h||b.appendChild(m))}d&&b.setAttribute("inline",a.Xe);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Sd&&!z||b.setAttribute("deletable",!1);a.mc&&!z||b.setAttribute("movable",!1);a.Gc&&!z||b.setAttribute("editable",!1);if(a=Mg(a))m=D("next",null,Lg(a)),b.appendChild(m);return b}
function Ng(a){return(new XMLSerializer).serializeToString(a)}function Og(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Pg(a,b){var c;q&&(c=a.Xf());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var h=Qg(a,e),k=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(k)||isNaN(e)||h.moveBy(q?c-k:k,e)}}
function Qg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var h=b.getAttribute("id");if(c&&h){d=Rg(h,a);if(!d)throw"Couldn't get Block with id: "+h;h=d.getParent();d.t&&d.m(!0,!1,!0);d.fill(a,e);d.jb=h}else d=hc(a,e);d.za&&d.za();(h=b.getAttribute("inline"))&&Sg(d,"true"==h);(h=b.getAttribute("disabled"))&&d.ff("true"==h);(h=b.getAttribute("deletable"))&&Tg(d,"true"==h);if(h=b.getAttribute("movable"))d.mc="true"==h;(h=b.getAttribute("editable"))&&Ug(d,
"true"==h);for(var k=null,h=0,m;m=b.childNodes[h];h++)if(3!=m.nodeType||!m.data.match(/^\s*$/)){for(var k=null,p=0,x;x=m.childNodes[p];p++)3==x.nodeType&&x.data.match(/^\s*$/)||(k=x);p=m.getAttribute("name");switch(m.nodeName.toLowerCase()){case "mutation":d.Wa&&(d.Wa(m),d.za&&d.za());break;case "comment":d.ef(m.textContent);var w=m.getAttribute("pinned");w&&setTimeout(function(){d.ba&&d.ba.O&&d.ba.O("true"==w)},1);k=parseInt(m.getAttribute("w"),10);m=parseInt(m.getAttribute("h"),10);!isNaN(k)&&!isNaN(m)&&
d.ba&&d.ba.O&&d.ba.Uc(k,m);break;case "title":case "field":ic(d,m.textContent,p);break;case "value":case "statement":m=I(d,p);if(!m)throw"Input "+p+" does not exist in block "+e;if(k&&"block"==k.nodeName.toLowerCase())if(k=Qg(a,k,c),k.G)Wg(m.s,k.G);else if(k.K)Wg(m.s,k.K);else throw"Child block does not have output or previous statement.";break;case "next":if(k&&"block"==k.nodeName.toLowerCase()){if(!d.C)throw"Next statement does not exist.";if(d.C.w)throw"Next statement is already connected.";k=
Qg(a,k,c);if(!k.K)throw"Next block does not have previous statement.";Wg(d.C,k.K)}break;default:console.log("Ignoring unknown tag: "+m.nodeName)}}(b=b.getAttribute("collapsed"))&&d.Ad("true"==b);a.B&&((a=Mg(d))?a.F():d.F());return d}function Xg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}g.Blockly||(g.Blockly={});g.Blockly.Xml||(g.Blockly.Xml={});g.Blockly.Xml.domToText=Ng;g.Blockly.Xml.domToWorkspace=Pg;g.Blockly.Xml.textToDom=Og;
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
function Yg(a,b,c,d,e,h,k){var m=Zg;q&&(m=-m);this.Rr=m*Math.PI/180;this.u=a;this.fb=b;this.ll=c;a.pe.appendChild(this.vh(b,!(!h||!k)));$g(this,d,e);h&&k||(a=this.fb.getBBox(),h=a.width+2*ah,k=a.height+2*ah);this.Uc(h,k);bh(this);ch(this);this.ui=!0;z||(v(this.Cf,"mousedown",this,this.Ur),this.yc&&v(this.yc,"mousedown",this,this.zt))}var ah=6,Zg=20,dh=null,eh=null;function fh(){dh&&(y(dh),dh=null);eh&&(y(eh),eh=null)}f=Yg.prototype;f.ui=!1;f.Ub=0;f.lh=0;f.xd=0;f.bf=0;f.R=0;f.Oa=0;f.ph=!0;
f.vh=function(a,b){this.Vb=u("g",{},null);var c=u("g",{filter:"url(#blocklyEmboss)"},this.Vb);this.Ej=u("path",{},c);this.Cf=u("rect",{"class":"blocklyDraggable",x:0,y:0,rx:ah,ry:ah},c);b?(this.yc=u("g",{"class":q?"blocklyResizeSW":"blocklyResizeSE"},this.Vb),c=2*ah,u("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.yc),u("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.yc),u("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.yc)):this.yc=
null;this.Vb.appendChild(a);return this.Vb};f.Ur=function(a){gh(this);fh();$b(a)||hh(a)||(ih(jh),this.pk=q?this.xd+a.clientX:this.xd-a.clientX,this.qs=this.bf-a.clientY,dh=v(document,"mouseup",this,fh),eh=v(document,"mousemove",this,this.Vr),gg(),a.stopPropagation())};f.Vr=function(a){this.ph=!1;this.xd=q?this.pk-a.clientX:this.pk+a.clientX;this.bf=this.qs+a.clientY;bh(this);ch(this)};
f.zt=function(a){gh(this);fh();$b(a)||(ih(jh),this.yt=q?this.R+a.clientX:this.R-a.clientX,this.xt=this.Oa-a.clientY,dh=v(document,"mouseup",this,fh),eh=v(document,"mousemove",this,this.At),gg(),a.stopPropagation())};f.At=function(a){this.ph=!1;var b=this.yt,c=this.xt+a.clientY,b=q?b-a.clientX:b+a.clientX;this.Uc(b,c);q&&bh(this)};function gh(a){a.Vb.parentNode.appendChild(a.Vb)}function $g(a,b,c){a.Ub=b;a.lh=c;a.ui&&bh(a)}
function bh(a){a.Vb.setAttribute("transform","translate("+(q?a.Ub-a.xd-a.R:a.Ub+a.xd)+", "+(a.bf+a.lh)+")")}f.ld=function(){return{width:this.R,height:this.Oa}};
f.Uc=function(a,b){var c=2*ah;a=Math.max(a,c+45);b=Math.max(b,c+18);this.R=a;this.Oa=b;this.Cf.setAttribute("width",a);this.Cf.setAttribute("height",b);this.yc&&(q?this.yc.setAttribute("transform","translate("+2*ah+", "+(b-c)+") scale(-1 1)"):this.yc.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.ui){if(this.ph){var c=-this.R/4,d=-this.Oa-25,e=this.u.Ic();q?this.Ub-e.Kb-c-this.R<kh?c=this.Ub-e.Kb-this.R-kh:this.Ub-e.Kb-c>e.Ea&&(c=this.Ub-e.Kb-e.Ea):this.Ub+c<e.Kb?c=e.Kb-this.Ub:
e.Kb+e.Ea<this.Ub+c+this.R+10+kh&&(c=e.Kb+e.Ea-this.Ub-this.R-kh);this.lh+d<e.Xc&&(d=this.ll.getBBox().height);this.xd=c;this.bf=d}bh(this);ch(this)}lh(this.Vb,"resize")};
function ch(a){var b=[],c=a.R/2,d=a.Oa/2,e=-a.xd,h=-a.bf;if(c==e&&d==h)b.push("M "+c+","+d);else{h-=d;e-=c;q&&(e*=-1);var k=Math.sqrt(h*h+e*e),m=Math.acos(e/k);0>h&&(m=2*Math.PI-m);var p=m+Math.PI/2;p>2*Math.PI&&(p-=2*Math.PI);var x=Math.sin(p),w=Math.cos(p),E=a.ld(),p=(E.width+E.height)/10,p=Math.min(p,E.width,E.height)/2,E=1-8/k,e=c+E*e,h=d+E*h,E=c+p*w,A=d+p*x,c=c-p*w,d=d-p*x,x=m+a.Rr;x>2*Math.PI&&(x-=2*Math.PI);m=Math.sin(x)*k/4;k=Math.cos(x)*k/4;b.push("M"+E+","+A);b.push("C"+(E+k)+","+(A+m)+
" "+e+","+h+" "+e+","+h);b.push("C"+e+","+h+" "+(c+k)+","+(d+m)+" "+c+","+d)}b.push("z");a.Ej.setAttribute("d",b.join(" "))}f.j=function(a){this.Cf.setAttribute("fill",a);this.Ej.setAttribute("fill",a)};f.m=function(){fh();Vb(this.Vb);this.ll=this.fb=this.u=this.Vb=null};/*

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
function mh(a){this.u=a}f=mh.prototype;f.ze=47;f.Sg=45;f.ve=15;f.ho=35;f.fj=35;f.vf=25;f.ae=!1;f.o=null;f.Og=null;f.ai=0;f.Oc=0;f.Kk=0;f.wl=0;
f.H=function(){this.o=u("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=u("clipPath",{id:"blocklyTrashBodyClipPath"},this.o);u("rect",{width:this.ze,height:this.Sg,y:this.ve},a);u("image",{width:nh,height:oh,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.o).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ph+qh);a=u("clipPath",{id:"blocklyTrashLidClipPath"},this.o);u("rect",{width:this.ze,height:this.ve},a);this.Og=u("image",{width:nh,height:oh,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.o);this.Og.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ph+qh);this.mh();return this.o};f.g=function(){rh(this,!1);this.Qc();v(window,"resize",this,this.Qc)};f.m=function(){this.o&&(Vb(this.o),this.o=null);this.u=this.Og=null;g.clearTimeout(this.ai)};f.Qc=function(){var a=this.u.Ic();a&&(this.Kk=q?this.fj:a.Ea+a.Ab-this.ze-this.fj,this.wl=a.bb+a.Bb-(this.Sg+this.ve)-this.ho,this.o.setAttribute("transform","translate("+this.Kk+","+this.wl+")"))};
f.Ne=function(){var a=sh(this.o);return new oc(a.x-this.vf,a.y-this.vf,this.ze+2*this.vf,this.Sg+this.ve+2*this.vf)};function rh(a,b){a.ae!=b&&(g.clearTimeout(a.ai),a.ae=b,a.mh())}f.mh=function(){this.Oc+=this.ae?.2:-.2;this.Oc=Math.min(Math.max(this.Oc,0),1);var a=45*this.Oc;this.Og.setAttribute("transform","rotate("+(q?-a:a)+", "+(q?4:this.ze-4)+", "+(this.ve-2)+")");this.o.style.opacity=.2+.2*this.Oc;if(0<this.Oc||1>this.Oc)this.ai=rg(this.mh,20,this)};f.close=function(){rh(this,!1)};/*

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
function th(a){this.u=a;this.ua=null;this.Qe=new uh(a,!0,!0);this.qf=new uh(a,!1,!0);this.De=u("rect",{height:kh,width:kh,style:"fill: #fff"},null);vh(this.De,a.pe)}th.prototype.m=function(){y(this.ug);this.ug=null;Vb(this.De);this.ua=this.u=this.De=null;this.Qe.m();this.Qe=null;this.qf.m();this.qf=null};
th.prototype.resize=function(){var a=this.u.Ic();if(a){var b=!1,c=!1;this.ua&&this.ua.Ea==a.Ea&&this.ua.bb==a.bb&&this.ua.Bb==a.Bb&&this.ua.Ab==a.Ab?(this.ua&&this.ua.Pd==a.Pd&&this.ua.Kb==a.Kb&&this.ua.uc==a.uc||(b=!0),this.ua&&this.ua.Cb==a.Cb&&this.ua.Xc==a.Xc&&this.ua.Wb==a.Wb||(c=!0)):c=b=!0;b&&this.Qe.resize(a);c&&this.qf.resize(a);this.ua&&this.ua.Ea==a.Ea&&this.ua.Ab==a.Ab||this.De.setAttribute("x",this.qf.Yc);this.ua&&this.ua.bb==a.bb&&this.ua.Bb==a.Bb||this.De.setAttribute("y",this.Qe.Rg);
this.ua=a}};th.prototype.set=function(a,b){this.Qe.set(a);this.qf.set(b)};function uh(a,b,c){this.u=a;this.vg=c||!1;this.rb=b;this.vh();b?(this.Sb.setAttribute("height",kh),this.Ja.setAttribute("height",kh-6),this.Ja.setAttribute("y",3)):(this.Sb.setAttribute("width",kh),this.Ja.setAttribute("width",kh-6),this.Ja.setAttribute("x",3));this.Sk=v(this.Sb,"mousedown",this,this.ht);this.Tk=v(this.Ja,"mousedown",this,this.jt)}var wh,xh,kh=15;aa("document.documentElement.ontouchstart")&&(kh=25);f=uh.prototype;
f.m=function(){this.tg();this.ug&&(y(this.ug),this.ug=null);y(this.Sk);this.Sk=null;y(this.Tk);this.Tk=null;Vb(this.o);this.u=this.Ja=this.Sb=this.o=null};
f.resize=function(a){if(!a&&(a=this.u.Ic(),!a))return;if(this.rb){var b=a.Ea;this.vg?b-=kh:this.O(b<a.Cb);this.wb=b/a.Pd;if(-Infinity===this.wb||Infinity===this.wb||isNaN(this.wb))this.wb=0;var c=a.Ea*this.wb,d=(a.Kb-a.uc)*this.wb;this.Ja.setAttribute("width",Math.max(0,c));this.Yc=a.Ab;this.vg&&q&&(this.Yc+=a.Ab+kh);this.Rg=a.Bb+a.bb-kh;this.o.setAttribute("transform","translate("+this.Yc+", "+this.Rg+")");this.Sb.setAttribute("width",Math.max(0,b));this.Ja.setAttribute("x",yh(this,d))}else{b=a.bb;
this.vg?b-=kh:this.O(b<a.Cb);this.wb=b/a.Cb;if(-Infinity===this.wb||Infinity===this.wb||isNaN(this.wb))this.wb=0;c=a.bb*this.wb;d=(a.Xc-a.Wb)*this.wb;this.Ja.setAttribute("height",Math.max(0,c));this.Yc=a.Ab;q||(this.Yc+=a.Ea-kh);this.Rg=a.Bb;this.o.setAttribute("transform","translate("+this.Yc+", "+this.Rg+")");this.Sb.setAttribute("height",Math.max(0,b));this.Ja.setAttribute("y",yh(this,d))}zh(this)};
f.vh=function(){this.o=u("g",{},null);this.Sb=u("rect",{"class":"blocklyScrollbarBackground"},this.o);var a=Math.floor((kh-6)/2);this.Ja=u("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.o);vh(this.o,this.u.pe)};f.J=function(){return"none"!=this.o.getAttribute("display")};f.O=function(a){if(a!=this.J()){if(this.vg)throw"Unable to toggle visibility of paired scrollbars.";a?this.o.setAttribute("display","block"):(this.u.jl({x:0,y:0}),this.o.setAttribute("display","none"))}};
f.ht=function(a){this.tg();if(!$b(a)){var b=Ah(a),b=this.rb?b.x:b.y,c=sh(this.Ja),c=this.rb?c.x:c.y,d=parseFloat(this.Ja.getAttribute(this.rb?"width":"height")),e=parseFloat(this.Ja.getAttribute(this.rb?"x":"y")),h=.95*d;b<=c?e-=h:b>=c+d&&(e+=h);this.Ja.setAttribute(this.rb?"x":"y",yh(this,e));zh(this)}a.stopPropagation()};
f.jt=function(a){this.tg();$b(a)||(this.Ft=parseFloat(this.Ja.getAttribute(this.rb?"x":"y")),this.Ht=this.rb?a.clientX:a.clientY,wh=v(document,"mouseup",this,this.tg),xh=v(document,"mousemove",this,this.mt));a.stopPropagation()};f.mt=function(a){this.Ja.setAttribute(this.rb?"x":"y",yh(this,this.Ft+((this.rb?a.clientX:a.clientY)-this.Ht)));zh(this)};f.tg=function(){Bh();gg(!0);wh&&(y(wh),wh=null);xh&&(y(xh),xh=null)};
function yh(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.rb?"width":"height",d=parseFloat(a.Sb.getAttribute(c)),c=parseFloat(a.Ja.getAttribute(c));b=Math.min(b,d-c)}return b}function zh(a){var b=parseFloat(a.Ja.getAttribute(a.rb?"x":"y")),c=parseFloat(a.Sb.getAttribute(a.rb?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.rb?c.x=b:c.y=b;a.u.jl(c)}f.set=function(a){this.Ja.setAttribute(this.rb?"x":"y",a*this.wb);zh(this)};
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
function Ch(a,b){Ch.k.constructor.call(this);this.Ic=a;this.jl=b;var c=[];c[1]=new Dh;c[2]=new Dh;c[3]=new Dh;c[4]=new Dh;this.Zr=c}n(Ch,Ja);f=Ch.prototype;f.B=!0;f.Gk=!1;f.Fh=!1;f.scrollX=0;f.scrollY=0;f.Jb=null;f.Hh=null;f.Tc=null;f.H=function(){this.o=u("g",{},null);this.aa=u("g",{},this.o);this.pe=u("g",{},this.o);this.Fb();return this.o};
f.m=function(){this.B=!1;Ch.k.m.call(this);this.o&&(Vb(this.o),this.o=null);this.pe=this.aa=null;this.V&&(this.V.m(),this.V=null);this.Jb&&(this.Jb.m(),this.Jb=null)};function Eh(){var a=B;if(sa&&!z){a.Jb=new mh(a);var b=a.Jb.H();a.o.insertBefore(b,a.aa);a.Jb.g()}}f.Be=function(a){Ch.k.Be.call(this,a);Fh&&this==B&&-1==Gh.indexOf(a)&&Gh.push(a)};f.Dg=function(a){Ch.k.Dg.call(this,a);Fh&&this==B&&Gh.zv(a)};f.clear=function(){gg();Ch.k.clear.call(this)};f.Xf=function(){return this.Ic().Ea};
f.F=function(){for(var a=this.hb(),b=0,c;c=a[b];b++)c.md().length||c.F()};function Hh(a,b){a.Ri=b;a.Si&&(y(a.Si),a.Si=null);b&&(a.Si=v(a.aa,"blocklySelectChange",a,function(){this.Ri=!1}))}function Ih(a){var b=B;b.Ri&&0!=ac&&Hh(b,!1);if(b.Ri){var c=null;if(a&&(c=La(b,a),!c))return;Hh(b,!1);c?c.select():Jh&&Kh();setTimeout(function(){Hh(b,!0)},1)}}f.Fb=function(){if(this.B){this.Hh&&clearTimeout(this.Hh);var a=this.aa;a&&(this.Hh=setTimeout(function(){lh(a,"blocklyWorkspaceChange")},0))}};
function Lh(a,b){var c=Ah(b),c=new mc(c.x,c.y);if(a.ik){if(a.ik.contains(c))return rh(a.Jb,!0),ih(Mh),!0;rh(a.Jb,!1)}if(a.hk&&a.hk.contains(c))return ih(Mh),!0;ih(jh);return!1}Ch.prototype.clear=Ch.prototype.clear;/*

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
function Nh(a){this.I=a}f=Nh.prototype;f.sa=null;f.pd=0;f.qd=0;f.fd=function(){this.Pa||(this.Pa=u("g",{},null),this.I.W().appendChild(this.Pa),v(this.Pa,"mouseup",this,this.Uh),this.Cc())};f.m=function(){Vb(this.Pa);this.Pa=null;this.O(!1);this.I=null};f.Cc=function(){this.I.kc?Xb(this.Pa,"blocklyIconGroup"):Wb(this.Pa,"blocklyIconGroup")};f.J=function(){return!!this.sa};f.Uh=function(){this.I.kc||this.O(!this.J())};f.Wc=function(){if(this.J()){var a=Yf(Zf(this.I.uh));this.sa.j(a)}};
function Oh(a){var b=a.I.na(),c=Ph(a.Pa),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.pd||b!==a.qd)a.pd=d,a.qd=b,a.J()&&$g(a.sa,d,b)};/*

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
function Qh(a){Qh.k.constructor.call(this,null);this.Xk=[];for(var b=0;b<a.length;b++){var c=D("block",{type:a[b]});this.Xk[b]=c}}n(Qh,Nh);f=Qh.prototype;f.te=0;f.rf=0;function Rh(a){a.Zd||(Nh.prototype.fd.call(a),u("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.Pa),a.Zd=u("text",{"class":"blocklyIconMark",x:8,y:12},a.Pa),a.Zd.appendChild(document.createTextNode("\u2605")))}f.Uh=function(a){this.I.Gc&&!z&&Nh.prototype.Uh.call(this,a)};
f.wh=function(){this.Gd=u("svg",{x:ah,y:ah},null);u("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.Gd);var a=this;this.u=new Ch(function(){var b=0;q&&(b+=a.te);return{bb:a.rf,Ea:0,Bb:0,Ab:b}},null);this.u.V=new Sh;this.u.V.Ce=!1;this.Gd.appendChild(this.u.V.H());this.Gd.appendChild(this.u.H());return this.Gd};f.Cc=function(){this.I.Gc&&!z?Nh.prototype.Cc.call(this):(this.O(!1),Xb(this.Pa,"blocklyIconGroup"))};
f.Fg=function(){var a=2*ah,b=this.u.aa.getBBox(),c=Th(this.u.V),d;d=q?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.Cb+20);d+=3*a;if(Math.abs(this.te-d)>a||Math.abs(this.rf-b)>a)this.te=d,this.rf=b,this.sa.Uc(d+a,b+a),this.Gd.setAttribute("width",this.te),this.Gd.setAttribute("height",this.rf);q&&this.u.aa.setAttribute("transform","translate("+this.te+",0)")};
f.O=function(a){if(a!=this.J())if(a){this.sa=new Yg(this.I.t,this.wh(),this.I.pc,this.pd,this.qd,null,null);var b=this;this.u.V.g(this.u);this.u.V.show(this.Xk);this.zc=this.I.Qd(this.u);a=this.zc.Nb();for(var c=0,d;d=a[c];c++)d.F();this.zc.mc=!1;Tg(this.zc,!1);a=2*this.u.V.Ta;c=this.u.V.R+a;q&&(c=-c);this.zc.moveBy(c,a);this.I.cf&&(this.I.cf(this.zc),this.Hi=v(this.I.t.aa,"blocklyWorkspaceChange",this.I,function(){b.I.cf(b.zc)}));this.Fg();v(this.u.aa,"blocklyWorkspaceChange",this.I,function(){if(0==
ac)for(var a=Ka(b.u,!1),c=0,d;d=a[c];c++){var m=d.na(),p=Uh(d);20>m.y+p.height&&d.moveBy(0,20-p.height-m.y)}b.zc.t==b.u&&(a=b.I.B,b.I.B=!1,b.I.Od(b.zc),b.I.B=a,b.I.za(),b.I.B&&b.I.F(),b.Fg(),b.I.t.Fb())});this.Wc()}else this.Gd=null,this.u.m(),this.zc=this.u=null,this.sa.m(),this.sa=null,this.rf=this.te=0,this.Hi&&(y(this.Hi),this.Hi=null)};f.m=function(){this.I.Pb=null;Nh.prototype.m.call(this)};/*

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
function Vh(a,b){this.h=a;this.w=null;this.type=b;this.ha=this.$b=0;this.jc=!1;this.Fc=this.h.t.Zr}f=Vh.prototype;f.m=function(){if(this.w)throw"Disconnect connection before disposing of it.";this.jc&&Wh(this.Fc[this.type],this);this.jc=!1;Xh==this&&(Xh=null);Yh==this&&(Yh=null)};function Zh(a){return 1==a.type||3==a.type}
function Wg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.t!==b.h.t)throw"Blocks are on different workspaces.";if($h[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.w)throw"Source connection already connected (value).";if(b.w){var c=H(b);c.kb(null);if(!c.G)throw"Orphan block does not have an output connection.";for(var d=a.h;d=ai(d,c);)if(H(d))d=H(d);else{Wg(d,c.G);c=null;break}c&&setTimeout(function(){bi(c.G,b)},ci)}}else{if(a.w)throw"Source connection already connected (block).";
if(b.w){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=H(b);c.kb(null);if(!c.K)throw"Orphan block does not have a previous connection.";for(d=a.h;d.C;)if(d.C.w)d=Mg(d);else{di(c.K,d.C)&&(Wg(d.C,c.K),c=null);break}c&&setTimeout(function(){bi(c.K,b)},ci)}}var e;Zh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.w=b;b.w=a;e.kb(d);d.B&&ei(d);e.B&&ei(e);d.B&&e.B&&(3==a.type||4==a.type?e.F():d.F())}
function ai(a,b){for(var c=!1,d=0;d<a.T.length;d++){var e=a.T[d].s;if(e&&1==e.type&&di(b.G,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.w;if(!a)throw"Source connection not connected.";if(a.w!=this)throw"Target connection not connected to source connection.";this.w=a.w=null;var b;Zh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.B&&b.F();a.B&&(ei(a),a.F())};function H(a){return a.w?a.w.h:null}
function bi(a,b){if(0==ac){var c=fi(a.h);if(!c.kc){var d=!1;if(!c.mc||z){c=fi(b.h);if(!c.mc||z)return;b=a;d=!0}c.W().parentNode.appendChild(c.W());var e=b.$b+gi-a.$b,h=b.ha+gi-a.ha;d&&(h=-h);q&&(e=-e);c.moveBy(e,h)}}}f.moveTo=function(a,b){this.jc&&Wh(this.Fc[this.type],this);this.$b=a;this.ha=b;hi(this.Fc[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.$b+a,this.ha+b)};
f.Sh=function(){var a;1==this.type||2==this.type?(a=q?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=q?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.na();Vh.ag=u("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.$b-b.x)+", "+(this.ha-b.y)+")"},this.h.W())};
function ii(a){var b=Math.round(a.w.$b-a.$b),c=Math.round(a.w.ha-a.ha);if(0!=b||0!=c){a=H(a);var d=a.W();if(!d)throw"block is not rendered.";d=Ph(d);a.W().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");ji(a,-b,-c)}}
function ki(a,b,c,d){function e(a){var c=h[a];if((2==c.type||4==c.type)&&c.w||1==c.type&&c.w&&(!H(c).mc||z)||!di(E,c))return!0;c=c.h;do{if(w==c)return!0;c=c.getParent()}while(c);var d=k-h[a].$b,c=m-h[a].ha,d=Math.sqrt(d*d+c*c);d<=b&&(x=h[a],b=d);return c<b}if(a.w)return{s:null,Zk:b};var h=a.Fc[$h[a.type]],k=a.$b+c,m=a.ha+d;c=0;for(var p=d=h.length-2;c<p;)h[p].ha<m?c=p:d=p,p=Math.floor((c+d)/2);d=c=p;var x=null,w=a.h,E=a;if(h.length){for(;0<=c&&e(c);)c--;do d++;while(d<h.length&&e(d))}return{s:x,Zk:b}}
function di(a,b){if(!a.Nd||!b.Nd)return!0;for(var c=0;c<a.Nd.length;c++)if(-1!=b.Nd.indexOf(a.Nd[c]))return!0;return!1}f.v=function(a){a?(ea(a)||(a=[a]),this.Nd=a,this.w&&!di(this,this.w)&&(Zh(this)?H(this).kb(null):this.h.kb(null),this.h.Ua())):this.Nd=null;return this};
function li(a){var b=gi;function c(a){var c=e-d[a].$b,k=h-d[a].ha;Math.sqrt(c*c+k*k)<=b&&p.push(d[a]);return k<b}var d=a.Fc[$h[a.type]],e=a.$b,h=a.ha;a=0;for(var k=d.length-2,m=k;a<m;)d[m].ha<h?a=m:k=m,m=Math.floor((a+k)/2);var k=a=m,p=[];if(d.length){for(;0<=a&&c(a);)a--;do k++;while(k<d.length&&c(k))}return p}
function mi(a){a.jc||hi(a.Fc[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=H(a)){var c;a.isCollapsed()?(c=[],a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K)):c=ni(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,mi(c[d]));0==b.length&&(b[0]=a)}return b}function Dh(){}Dh.prototype=[];
function hi(a,b){if(b.jc)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].ha<b.ha)c=e+1;else if(a[e].ha>b.ha)d=e;else{c=e;break}}a.splice(c,0,b);b.jc=!0}
function Wh(a,b){if(!b.jc)throw"Connection not in database.";b.jc=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].ha<b.ha?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].ha==b.ha;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].ha==b.ha);throw"Unable to find connection in connectionDB.";};/*

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
var C={Pt:0,us:function(){var a=(++C.Pt).toString();return Fh?oi(a):a},cv:function(a){var b={g:function(){var b=this;this.j(a.Nj);this.p=a.p;"string"==typeof a.ub?this.i(a.ub):"function"==typeof a.ub&&this.i(function(){return a.ub(b)});"undefined"!=a.rt?K(this,!0,a.rt):(L(this,"undefined"==typeof a.tt?!0:a.tt),M(this,"undefined"==typeof a.dt?!0:a.dt));var d=[];d.push(a.text);a.Qr&&a.Qr.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
qb("addTemplate() can only handle value inputs.")});d.push(1);a.Qs&&this.Fv(a.Qs);pi.prototype.Aa.apply(this,d)}};b.Qa=a.Gv?function(){var b=a.at?a.vv():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.at;C[a.gv]=b}};/*

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
function qi(a){qi.k.constructor.call(this,a);this.fd()}n(qi,Nh);f=qi.prototype;f.Sa="";f.R=160;f.Oa=80;f.fd=function(){Nh.prototype.fd.call(this);u("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.Pa);this.Zd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Pa);this.Zd.appendChild(document.createTextNode("?"))};
f.wh=function(){this.Je=u("foreignObject",{x:ah,y:ah},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.zb=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.zb.className="blocklyCommentTextarea";this.zb.setAttribute("dir",q?"RTL":"LTR");a.appendChild(this.zb);this.Je.appendChild(a);v(this.zb,"mouseup",this,this.Mt);return this.Je};
f.Cc=function(){this.J()&&(this.O(!1),this.O(!0));Nh.prototype.Cc.call(this)};f.Fg=function(){var a=this.sa.ld(),b=2*ah;this.Je.setAttribute("width",a.width-b);this.Je.setAttribute("height",a.height-b);this.zb.style.width=a.width-b-4+"px";this.zb.style.height=a.height-b-4+"px"};
f.O=function(a){if(a!=this.J())if((!this.I.Gc||z)&&!this.zb||r)ri.prototype.O.call(this,a);else{var b=this.pb(),c=this.ld();a?(this.sa=new Yg(this.I.t,this.wh(),this.I.pc,this.pd,this.qd,this.R,this.Oa),v(this.sa.Vb,"resize",this,this.Fg),this.Wc(),this.Sa=null):(this.sa.m(),this.Je=this.zb=this.sa=null);this.qa(b);this.Uc(c.width,c.height)}};f.Mt=function(){gh(this.sa);this.zb.focus()};f.ld=function(){return this.J()?this.sa.ld():{width:this.R,height:this.Oa}};
f.Uc=function(a,b){this.zb?this.sa.Uc(a,b):(this.R=a,this.Oa=b)};f.pb=function(){return this.zb?this.zb.value:this.Sa};f.qa=function(a){this.zb?this.zb.value=a:this.Sa=a};f.m=function(){this.I.ba=null;Nh.prototype.m.call(this)};/*

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
var si=!1,ti=0,ui=0,vi={x:0,y:0},wi=null,xi=null,yi=null,zi=null,Ai=null,Bi=null;function Ci(){var a=u("g",{"class":"blocklyHidden"},null);yi=a;Bi=u("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Ai=u("rect",{"class":"blocklyTooltipBackground"},a);zi=u("text",{"class":"blocklyTooltipText"},a);return a}function Di(a){v(a,"mouseover",null,Ei);v(a,"mouseout",null,Fi);v(a,"mousemove",null,Gi)}function Ei(a){for(a=a.target;!l(a.ub)&&!ha(a.ub);)a=a.ub;wi!=a&&(Hi(),xi=null,wi=a);clearTimeout(ti)}
function Fi(){ti=setTimeout(function(){xi=wi=null;Hi()},1);clearTimeout(ui)}function Gi(a){wi&&wi.ub&&0==ac&&!Ii&&(si?(a=Ah(a),10<Math.sqrt(Math.pow(vi.x-a.x,2)+Math.pow(vi.y-a.y,2))&&Hi()):xi!=wi&&(clearTimeout(ui),vi=Ah(a),ui=setTimeout(Ji,1E3)))}function Hi(){si&&(si=!1,yi&&(yi.style.display="none"));clearTimeout(ui)}
function Ji(){xi=wi;if(yi){Zb(zi);var a=wi.ub;ha(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,h,k=1;do{e=d;h=b;for(var b=[],m=c.length/k,p=1,d=0;d<c.length-1;d++)p<(d+1.5)/m?(p++,b[d]=!0):b[d]=!1;for(var b=Ki(c,b,a),d=Li(c,b,a),m=c,p=[],x=0;x<m.length;x++)p.push(m[x]),void 0!==b[x]&&p.push(b[x]?"\n":" ");b=p.join("");k++}while(d>e);a=h}a=a.split("\n");for(c=0;c<a.length;c++)u("tspan",{dy:"1em",
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
function Ni(a){this.h=null;this.Ia=new Sb(0,25);this.qa(a)}n(Ni,Tb);f=Ni.prototype;f.clone=function(){return new Ni(this.pb())};f.Id=!1;f.g=function(a){this.h||(this.h=a,this.Ra=u("text",{"class":"blocklyText"},null),a.W().appendChild(this.Ra),this.Ra.ub=this.h,Di(this.Ra),Ub(this))};f.m=function(){Vb(this.Ra);this.Ra=null};f.W=function(){return this.Ra};f.i=function(a){this.Ra.ub=a};/*

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
function Oi(a,b,c,d){this.type=a;this.name=b;this.h=c;this.s=d;this.Xa=[];this.align=-1;this.wa=!0}function N(a,b,c){if(!b&&!c)return a;l(b)&&(b=new Ni(b));a.h.B&&b.g(a.h);b.name=c;b.ni&&N(a,b.ni);a.Xa.push(b);b.Pi&&N(a,b.Pi);a.h.B&&(a.h.F(),a.h.Ua());return a}f=Oi.prototype;f.J=function(){return this.wa};
f.O=function(a){var b=[];if(this.wa==a)return b;for(var c=(this.wa=a)?"block":"none",d=0,e;e=this.Xa[d];d++)e.O(a);if(this.s){if(a)b=mi(this.s);else if(d=this.s,d.jc&&Wh(d.Fc[d.type],d),d.w){e=H(d).Nb();for(var h=0;h<e.length;h++){for(var k=e[h],m=ni(k,!0),p=0;p<m.length;p++){var x=m[p];x.jc&&Wh(d.Fc[x.type],x)}k=Pi(k);for(m=0;m<k.length;m++)k[m].O(!1)}}if(d=H(this.s))d.W().style.display=c,a||(d.B=!1)}return b};f.v=function(a){if(!this.s)throw"This input does not have a connection.";this.s.v(a);return this};
function Qi(a,b){a.align=b;a.h.B&&a.h.F();return a}f.g=function(){for(var a=0;a<this.Xa.length;a++)this.Xa[a].g(this.h)};f.m=function(){for(var a=0,b;b=this.Xa[a];a++)b.m();this.s&&this.s.m();this.h=null};/*

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
function ri(a){ri.k.constructor.call(this,a);this.fd()}n(ri,Nh);f=ri.prototype;f.Sa="";f.fd=function(){Nh.prototype.fd.call(this);u("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.Pa);this.Zd=u("text",{"class":"blocklyIconMark",x:8,y:13},this.Pa);this.Zd.appendChild(document.createTextNode("!"))};
f.O=function(a){if(a!=this.J())if(a){var b=this.Sa;a=u("text",{"class":"blocklyText blocklyBubbleText",y:ah},null);for(var b=b.split("\n"),c=0;c<b.length;c++)u("tspan",{dy:"1em",x:ah},a).appendChild(document.createTextNode(b[c]));this.sa=new Yg(this.I.t,a,this.I.pc,this.pd,this.qd,null,null);if(q)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+ah);this.Wc();a=this.sa.ld();this.sa.Uc(a.width,a.height)}else this.sa.m(),this.sa=null};
f.qa=function(a){this.Sa!=a&&(this.Sa=a,this.J()&&(this.O(!1),this.O(!0)))};f.m=function(){this.I.rc=null;Nh.prototype.m.call(this)};/*

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
function pi(){}function hc(a,b){if(Fh)return Ri.create(pi,a,b);var c=a.B?new Si:new pi;c.initialize(a,b);return c}f=pi.prototype;f.initialize=function(a,b){this.id=C.us();a.Be(this);this.fill(a,b)};
f.fill=function(a,b){this.K=this.C=this.G=null;this.T=[];this.disabled=this.B=this.Xe=!1;this.ub="";this.contextMenu=!0;this.td=null;this.cc=[];this.Gc=this.mc=this.Sd=!0;this.ed=!1;this.ba=null;this.Cl=new mc(0,0);this.t=a;this.kc=a.Gk;if(b){this.type=b;var c=C[b],d;for(d in c)this[d]=c[d]}ha(this.g)&&this.g()};function Rg(a,b){return Fh?Ti.get(a):La(b,a)}
f.m=function(a,b,c){Ui(this,a,!1);this.t&&!c&&(this.t.Dg(this),this.t=null);Jh==this&&(Jh=null);for(a=this.cc.length-1;0<=a;a--)this.cc[a].m(!1);for(a=0;b=this.T[a];a++)b.m();this.T.length=0;b=ni(this,!0);for(a=0;a<b.length;a++)c=b[a],c.w&&c.disconnect(),b[a].m();if(Fh&&!Vi)Ti["delete"](this.id.toString())};
function Ui(a,b,c){c=c&&!!a.getParent();if(a.G)a.G.w&&a.kb(null);else{var d=null;a.K&&a.K.w&&(d=a.K.w,a.kb(null));var e=Mg(a);b&&e&&(b=a.C.w,e.kb(null),d&&di(d,b)&&Wg(d,b))}c&&a.moveBy(gi*(q?-1:1),2*gi)}function ni(a,b){var c=[];if(b||a.B)if(a.G&&c.push(a.G),a.C&&c.push(a.C),a.K&&c.push(a.K),b||!a.ed)for(var d=0,e;e=a.T[d];d++)e.s&&c.push(e.s);return c}
f.Ua=function(){if(0==ac){var a=fi(this);if(!a.kc)for(var b=ni(this,!1),c=0;c<b.length;c++){var d=b[c];d.w&&Zh(d)&&H(d).Ua();for(var e=li(d),h=0;h<e.length;h++){var k=e[h];d.w&&k.w||fi(k.h)!=a&&(Zh(d)?bi(k,d):bi(d,k))}}}};f.getParent=function(){return this.td};function Wi(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Mg(a)==b);return a}}function Mg(a){return a.C&&H(a.C)}function fi(a){var b=a;do a=b,b=a.td;while(b);return a}f.md=function(){return this.cc};
f.kb=function(a){if(this.td){for(var b=this.td.cc,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.td=null;this.K&&this.K.w&&this.K.disconnect();this.G&&this.G.w&&this.G.disconnect()}else xb(Ka(this.t,!1),this)&&this.t.Dg(this);(this.td=a)?a.cc.push(this):this.t.Be(this)};f.Nb=function(){for(var a=[this],b,c=0;b=this.cc[c];c++)a.push.apply(a,b.Nb());return a};function Tg(a,b){a.Sd=b;a.ul&&Xi(a.ul)}
function Ug(a,b){a.Gc=b;for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Xa[e];e++)h.Cc();d=Pi(a);for(c=0;c<d.length;c++)d[c].Cc()}f.i=function(a){this.ub=a};f.j=function(a){this.uh=a;this.B&&this.Wc()};function Yi(a,b){for(var c=0,d;d=a.T[c];c++)for(var e=0,h;h=d.Xa[e];e++)if(h.name===b)return h;return null}function O(a,b){var c=Yi(a,b);return c?c.Na():null}function ic(a,b,c){Yi(a,c).ra(b)}
function L(a,b,c){a.K&&(a.K.m(),a.K=null);b&&(void 0===c&&(c=null),a.K=new Vh(a,4),a.K.v(c));a.B&&(a.F(),a.Ua())}function M(a,b,c){a.C&&(a.C.m(),a.C=null);b&&(void 0===c&&(c=null),a.C=new Vh(a,3),a.C.v(c));a.B&&(a.F(),a.Ua())}function K(a,b,c){a.G&&(a.G.m(),a.G=null);b&&(void 0===c&&(c=null),a.G=new Vh(a,2),a.G.v(c));a.B&&(a.F(),a.Ua())}function Sg(a,b){a.Xe=b;a.B&&(a.F(),a.Ua(),a.t.Fb())}f.ff=function(a){this.disabled=a};function Zi(a){for(;;){a=Wi(a);if(!a)return!1;if(a.disabled)return!0}}
f.isCollapsed=function(){return this.ed};f.Ad=function(a){this.ed=a};f.toString=function(a){for(var b=[],c=0,d;d=this.T[c];c++){for(var e=0,h;h=d.Xa[e];e++)b.push(h.pb());d.s&&((d=H(d.s))?b.push(d.toString()):b.push("?"))}b=Pa(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function P(a,b){return $i(a,1,b)}function Q(a,b){return $i(a,5,b||"")}
f.Aa=function(a,b){function c(a){a instanceof Tb?N(this,a):N(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.Aa.wq),h=[],k=0;k<e.length;k+=2){var m=Pa(e[k]),p=void 0;m&&h.push(new Ni(m));if((m=e[k+1])&&"%"==m.charAt(0)){var m=parseInt(m.substring(1),10),x=arguments[m];x[1]instanceof Tb?h.push([x[0],x[1]]):p=Qi(P(this,x[0]).v(x[1]),x[2]);arguments[m]=null}else"\n"==m&&h.length&&(p=Q(this));p&&h.length&&(h.forEach(c,p),h=[])}h.length&&(p=Qi(Q(this),d),h.forEach(c,
p));for(k=1;k<arguments.length-1;k++);Sg(this,!a.match(this.Aa.Tm))};f.Aa.wq=/(%\d+|\n)/;f.Aa.Tm=/%1\s*$/;function $i(a,b,c){var d=null;if(1==b||3==b)d=new Vh(a,b);b=new Oi(b,c,a,d);a.T.push(b);a.B&&(a.F(),a.Ua());return b}function aj(a,b,c){if(b!=c){for(var d=-1,e=c?-1:a.T.length,h=0,k;k=a.T[h];h++)if(k.name==b){if(d=h,-1!=e)break}else if(c&&k.name==c&&(e=h,-1!=d))break;b=d;c=a.T[b];a.T.splice(b,1);b<e&&e--;a.T.splice(e,0,c);a.B&&(a.F(),a.Ua())}}
function R(a,b,c){for(var d=0,e;e=a.T[d];d++)if(e.name==b){e.s&&e.s.w&&H(e.s).kb(null);e.m();a.T.splice(d,1);a.B&&(a.F(),a.Ua());return}c||qb('Input "%s" not found.',b)}function I(a,b){for(var c=0,d;d=a.T[c];c++)if(d.name==b)return d;return null}function bj(a,b){var c=I(a,b);return c&&c.s&&H(c.s)}f.Qf=function(){return this.ba||""};f.ef=function(a){this.ba=a};f.Dd=function(){};f.le=function(){};f.na=function(){return this.Cl};f.moveBy=function(a,b){this.Cl.translate(a,b)};/*

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
function Sh(){var a=this;this.u=new Ch(function(){return Th(a)},function(b){var c=Th(a);c&&(ga(b.y)&&(a.u.scrollY=-c.Cb*b.y-c.Wb),a.u.aa.setAttribute("transform","translate(0,"+(a.u.scrollY+c.Bb)+")"))});this.u.Gk=!0;this.qk=[];this.Oa=this.R=0;this.rh=[];this.lc=[]}var cj,dj,ej,fj,gj,hj;f=Sh.prototype;f.Ce=!0;f.Ta=8;f.H=function(){this.o=u("g",{},null);this.Sb=u("path",{"class":"blocklyFlyoutBackground"},this.o);this.o.appendChild(this.u.H());return this.o};
f.m=function(){this.vc();y(this.qk);this.qk.length=0;this.zd&&(this.zd.m(),this.zd=null);this.u=null;this.o&&(Vb(this.o),this.o=null);this.lf=this.Sb=null};function Th(a){if(!a.J())return null;var b=a.Oa-2*a.Ta,c=a.R;try{var d=a.u.aa.getBBox()}catch(e){d={height:0,y:0}}return{bb:b,Ea:c,Cb:d.height+d.y,Xc:-a.u.scrollY,Wb:0,Bb:a.Ta,Ab:0}}
f.g=function(a){this.lf=a;this.zd=new uh(this.u,!1,!1);this.vc();v(window,"resize",this,this.Qc);this.Qc();v(this.o,"wheel",this,this.Bl);v(this.o,"mousewheel",this,this.Bl);v(this.lf.aa,"blocklyWorkspaceChange",this,this.Gh);v(this.o,"mousedown",this,this.sg)};
f.Qc=function(){if(this.J()){var a=this.lf.Ic();if(a){var b=this.R-this.Ta;q&&(b*=-1);var c=["M "+(q?this.R:0)+",0"];c.push("h",b);c.push("a",this.Ta,this.Ta,0,0,q?0:1,q?-this.Ta:this.Ta,this.Ta);c.push("v",Math.max(0,a.bb-2*this.Ta));c.push("a",this.Ta,this.Ta,0,0,q?0:1,q?this.Ta:-this.Ta,this.Ta);c.push("h",-b);c.push("z");this.Sb.setAttribute("d",c.join(" "));b=a.Ab;q&&(b+=a.Ea,b-=this.R);this.o.setAttribute("transform","translate("+b+","+a.Bb+")");this.Oa=a.bb;this.zd&&this.zd.resize()}}};
f.Bl=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Eb&&(b*=10);var c=Th(this),b=c.Xc+b,b=Math.min(b,c.Cb-c.bb),b=Math.max(b,0);this.zd.set(b);a.preventDefault()}};f.J=function(){return this.o&&"block"==this.o.style.display};f.vc=function(){if(this.J()){this.o.style.display="none";for(var a=0,b;b=this.lc[a];a++)y(b);this.lc.length=0;this.ri&&(y(this.ri),this.ri=null)}};
f.show=function(a){this.vc();for(var b=Ka(this.u,!1),c=0,d;d=b[c];c++)d.t==this.u&&d.m(!1,!1);for(var c=0,e;e=this.rh[c];c++)Vb(e);this.rh.length=0;var h=this.Ta;this.o.style.display="block";var b=[],k=[];if("VARIABLE"==a)bg(b,k,h,this.u);else if("PROCEDURE"==a)gc(b,k,h,this.u);else for(var m=0;d=a[m];m++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Qg(this.u,d),b.push(d),k.push(3*h));a=h;for(m=0;d=b[m];m++){c=d.Nb();e=0;for(var p;p=c[e];e++)p.kc=!0,p.ef(null);d.F();p=d.W();e=Uh(d);c=q?0:h+8;d.moveBy(c,
a);a+=e.height+k[m];e=u("rect",{"fill-opacity":0},null);this.u.aa.insertBefore(e,d.W());d.Ie=e;this.rh[m]=e;this.Ce?this.lc.push(v(p,"mousedown",null,ij(this,d))):this.lc.push(v(p,"mousedown",null,jj(this,d)));this.lc.push(v(p,"mouseover",d,d.hh));this.lc.push(v(p,"mouseout",d,d.Cg));this.lc.push(v(e,"mousedown",null,ij(this,d)));this.lc.push(v(e,"mouseover",d,d.hh));this.lc.push(v(e,"mouseout",d,d.Cg))}this.lc.push(v(this.Sb,"mouseover",this,function(){for(var a=Ka(this.u,!1),b=0,c;c=a[b];b++)c.Cg()}));
this.R=0;this.$k();this.Gh();kj(window,"resize");this.ri=v(this.u.aa,"blocklyWorkspaceChange",this,this.$k);this.u.Fb()};
f.$k=function(){for(var a=0,b=this.Ta,c=Ka(this.u,!1),d=0,e;e=c[d];d++)var h=Uh(e),a=Math.max(a,h.width);a+=b+8+b/2+kh;if(this.R!=a){for(d=0;e=c[d];d++){var h=Uh(e),k=e.na();if(q){var m=a-b-8-k.x;e.moveBy(m,0);k.x+=m}e.Ie&&(e.Ie.setAttribute("width",h.width),e.Ie.setAttribute("height",h.height),e.Ie.setAttribute("x",q?k.x-h.width:k.x),e.Ie.setAttribute("y",k.y))}this.R=a;lh(window,"resize")}};
function jj(a,b){return function(c){lj();gg();$b(c)?mj(b,c):(Bh(),ih(jh),cj=c,dj=b,ej=a,fj=v(document,"mouseup",this,lj),gj=v(document,"mousemove",this,a.kt));c.stopPropagation()}}f.sg=function(a){$b(a)||(gg(!0),nj(),this.ol=a.clientY,hj=v(document,"mousemove",this,this.ii),fj=v(document,"mouseup",this,nj),a.preventDefault(),a.stopPropagation())};f.ii=function(a){var b=a.clientY-this.ol;this.ol=a.clientY;a=Th(this);b=a.Xc-b;b=Math.min(b,a.Cb-a.bb);b=Math.max(b,0);this.zd.set(b)};
f.kt=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Bh(),Math.sqrt(Math.pow(a.clientX-cj.clientX,2)+Math.pow(a.clientY-cj.clientY,2))>oj&&ij(ej,dj)(cj))};function ij(a,b){return function(c){if(!$b(c)&&!b.disabled){var d=Lg(b),d=Qg(a.lf,d),e=b.W();if(!e)throw"originBlock is not rendered.";var e=sh(e),h=d.W();if(!h)throw"block is not rendered.";h=sh(h);d.moveBy(e.x-h.x,e.y-h.y);a.Ce?a.vc():a.Gh();d.sg(c)}}}
f.Gh=function(){for(var a=Ma(this.lf),b=Ka(this.u,!1),c=0,d;d=b[c];c++){var e=d.Nb().length>a;d.ff(e)}};function nj(){fj&&(y(fj),fj=null);gj&&(y(gj),gj=null);hj&&(y(hj),hj=null);fj&&(y(fj),fj=null);ej=dj=cj=null}f.Ne=function(){var a=sh(this.o).x;q||(a-=1E7);return new oc(a,-1E7,1E7+this.R,this.Oa+2E7)};function pj(a){if("function"==typeof a.Nh)return a.Nh();if(l(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function qj(a){this.Da=void 0;this.eb={};if(a){var b;if("function"==typeof a.Lh)b=a.Lh();else if("function"!=typeof a.Nh)if(fa(a)||l(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=pj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=qj.prototype;f.set=function(a,b){rj(this,a,b,!1)};f.add=function(a,b){rj(this,a,b,!0)};
function rj(a,b,c,d){for(var e=0;e<b.length;e++){var h=b.charAt(e);a.eb[h]||(a.eb[h]=new qj);a=a.eb[h]}if(d&&void 0!==a.Da)throw Error('The collection already contains the key "'+b+'"');a.Da=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.eb[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Da:void 0};f.Nh=function(){var a=[];sj(this,a);return a};function sj(a,b){void 0!==a.Da&&b.push(a.Da);for(var c in a.eb)sj(a.eb[c],b)}
f.Lh=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.eb[e])return[];c=c.eb[e]}tj(c,a,b)}else tj(this,"",b);return b};function tj(a,b,c){void 0!==a.Da&&c.push(b);for(var d in a.eb)tj(a.eb[d],b+d,c)}f.clear=function(){this.eb={};this.Da=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.eb[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.eb[e]}a=b.Da;for(delete b.Da;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.eb[e].Fk())delete b.eb[e];else break;return a};f.clone=function(){return new qj(this)};f.Fk=function(){var a;if(a=void 0===this.Da)a:{a=this.eb;for(var b in a){a=!1;break a}a=!0}return a};function uj(){this.sd=new qj}f=uj.prototype;f.Fa="";f.bi=null;f.ng=null;f.$e=0;f.ce=0;function vj(a,b){var c=!1,d=a.sd.Lh(b);d&&d.length&&(a.ce=0,a.$e=0,c=a.sd.get(d[0]),c=wj(a,c))&&(a.bi=d);return c}function wj(a,b){var c;b&&(a.ce<b.length&&(c=b[a.ce],a.ng=b),c&&(c.wi(),c.select()));return!!c}f.clear=function(){this.Fa=""};var xj="StopIteration"in g?g.StopIteration:Error("StopIteration");function yj(){}yj.prototype.next=function(){throw xj;};yj.prototype.xj=function(){return this};function zj(a){if(a instanceof yj)return a;if("function"==typeof a.xj)return a.xj();if(fa(a)){var b=0,c=new yj;c.next=function(){for(;;){if(b>=a.length)throw xj;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");}function Aj(a){try{return zj(a).next()}catch(b){if(b!=xj)throw b;return null}};function Bj(a,b,c,d,e){this.reset(a,b,c,d,e)}Bj.prototype.rk=null;var Cj=0;Bj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Cj++;d||qa();this.Ze=a;this.$s=b;delete this.rk};Bj.prototype.il=function(a){this.Ze=a};function Dj(a){this.pg=a;this.Ck=this.ya=this.Ze=this.jb=null}function Ej(a,b){this.name=a;this.value=b}Ej.prototype.toString=function(){return this.name};var Fj=new Ej("WARNING",900),Gj=new Ej("INFO",800),Hj=new Ej("CONFIG",700),Ij=new Ej("FINE",500);f=Dj.prototype;f.getName=function(){return this.pg};f.getParent=function(){return this.jb};f.md=function(){this.ya||(this.ya={});return this.ya};f.il=function(a){this.Ze=a};
function Jj(a){if(a.Ze)return a.Ze;if(a.jb)return Jj(a.jb);qb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Jj(this).value)for(ha(b)&&(b=b()),a=new Bj(a,String(b),this.pg),c&&(a.rk=c),c="log:"+a.$s,g.console&&(g.console.timeStamp?g.console.timeStamp(c):g.console.markTimeline&&g.console.markTimeline(c)),g.msWriteProfilerMark&&g.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Ck)for(var e=0,h=void 0;h=b.Ck[e];e++)h(d);c=c.getParent()}};
f.rc=function(a,b){this.log(Fj,a,b)};f.info=function(a,b){this.log(Gj,a,b)};var Kj={},Lj=null;function Mj(a){Lj||(Lj=new Dj(""),Kj[""]=Lj,Lj.il(Hj));var b;if(!(b=Kj[a])){b=new Dj(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Mj(a.substr(0,c));c.md()[d]=b;b.jb=c;Kj[a]=b}return b};function Nj(a){me.call(this);this.D=a;a=r?"focusout":"blur";this.Ts=Zd(this.D,r?"focusin":"focus",this,!r);this.Us=Zd(this.D,a,this,!r)}n(Nj,me);Nj.prototype.handleEvent=function(a){var b=new Td(a.mb);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Nj.prototype.Z=function(){Nj.k.Z.call(this);fe(this.Ts);fe(this.Us);delete this.D};function Oj(a,b,c){sg.call(this,a,b,c);this.He=!0;Bg(this,!0);this.va=this;this.nf=new uj;if(r)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.Mk)&&a.rc("Failed to enable background image cache",void 0)}}n(Oj,sg);Oj.prototype.ib=null;Oj.prototype.Ih=null;var Pj=Oj.prototype,Qj=Mj("goog.ui.tree.TreeControl");Pj.Mk=Qj;f=Oj.prototype;f.Jh=!1;f.ts=null;f.kf=!0;f.Fi=!0;f.Ed=!0;f.Gi=!0;f.qb=function(){return this};f.Ud=function(){return 0};f.wi=function(){};
f.Cs=function(){this.Jh=!0;Ce(this.n(),"focused");this.va&&this.va.select()};f.ys=function(){this.Jh=!1;Ee(this.n(),"focused")};f.hasFocus=function(){return this.Jh};f.vb=function(){return!this.Ed||Oj.k.vb.call(this)};f.Ac=function(a){this.Ed?Oj.k.Ac.call(this,a):this.He=a};f.Kh=function(){return Nc};f.Sf=function(){var a=zg(this);return a?a.firstChild:null};f.Rf=function(){return null};f.re=function(){};f.Oe=function(){return Oj.k.Oe.call(this)+(this.Ed?"":" "+this.Va.bk)};
f.Nf=function(){var a=this.vb(),b=this.ss;if(a&&b)return b;b=this.Ls;if(!a&&b)return b;b=this.Va;return a&&b.ak?b.gd+" "+b.ak:!a&&b.Xj?b.gd+" "+b.Xj:""};f.Rb=function(a){if(this.va!=a){var b=!1;this.va&&(b=this.va==this.ts,Bg(this.va,!1));if(this.va=a)Bg(a,!0),b&&a.select();this.dispatchEvent("change")}};f.nd=function(){return this.va};function Rj(a){0!=a.kf&&(a.kf=!1,a.Q&&Tj(a))}
function Tj(a){function b(a){var k=wg(a);if(k){var m=!d||c==a.getParent()&&!e?a.Va.Vj:a.Va.Uj;k.className=m;if(k=a.Rf())k.className=Fg(a)}ue(a,b)}var c=a,d=c.kf,e=c.Gi;b(a)}function Uj(a){0!=a.Fi&&(a.Fi=!1,a.Q&&Tj(a))}function Vj(a){if(0!=a.Ed){a.Ed=!1;if(a.Q){var b=zg(a);b&&(b.className=a.Oe())}a.nd()==a&&we(a,0)&&a.Rb(we(a,0))}}f.eg=function(){Oj.k.eg.call(this);var a=this.n();Je(a,"tree");Ke(a,"labelledby",vg(this).id)};
f.Ga=function(){Oj.k.Ga.call(this);var a=this.n();a.className=this.Va.ek;a.setAttribute("hideFocus","true");a=this.n();a.tabIndex=0;var b=this.ib=new Ye(a),c=this.Ih=new Nj(a);se(this).N(c,"focusout",this.ys).N(c,"focusin",this.Cs).N(b,"key",this.Ob).N(a,"mousedown",this.Ph).N(a,"click",this.Ph).N(a,"dblclick",this.Ph);this.eg()};f.Mb=function(){Oj.k.Mb.call(this);this.ib.m();this.ib=null;this.Ih.m();this.Ih=null};
f.Ph=function(a){var b=this.Mk;b&&b.log(Ij,"Received event "+a.type,void 0);if(b=Wj(this,a))switch(a.type){case "mousedown":b.gi(a);break;case "click":a.preventDefault();break;case "dblclick":b.Pk(a)}};
f.Ob=function(a){var b=!1,b=this.nf,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.bi;if(d){var e=null,h=!1;if(b.ng){var k=b.ce+c;0<=k&&k<b.ng.length?(b.ce=k,e=b.ng):h=!0}e||(k=b.$e+c,0<=k&&k<d.length&&(b.$e=k),d.length>b.$e&&(e=b.sd.get(d[b.$e])),e&&e.length&&h&&(b.ce=-1==c?e.length-1:0));wj(b,e)&&(b.bi=d)}c=!0}break;case 8:d=b.Fa.length-1;c=!0;0<d?(b.Fa=b.Fa.substring(0,d),vj(b,b.Fa)):0==d?b.Fa="":c=!1;break;case 27:b.Fa="",c=!0}if(!(b=c)&&(b=this.va)){b=this.va;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;ye(b)&&(b.vb()?we(b,0).select():b.Ac(!0));break;case 37:if(a.altKey)break;ye(b)&&b.vb()&&b.Ye?b.Ac(!1):(d=b.getParent(),e=b.qb(),d&&(e.Ed||d!=e)&&d.select());break;case 40:a:if(ye(b)&&b.vb())d=we(b,0);else{for(d=b;d!=b.qb();){e=d.Yb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.ud;null!=d?d=Ig(d):(d=b.getParent(),e=b.qb(),d=!e.Ed&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.qb())&&
e.nf.clear());b=c}b||(b=this.nf,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.Fa)&&(b.Fa+=d,c=vj(b,b.Fa))),b=c);b&&a.preventDefault();return b};function Wj(a,b){for(var c=null,d=b.target;null!=d;){if(c=ug[d.id])return c;if(d==a.n())break;d=d.parentNode}return null}f.createNode=function(a){return new Jg(a||Nc,this.Va,this.ob())};
function Hg(a,b){var c=a.nf,d=b.pb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.sd.get(d);e?e.push(b):c.sd.set(d,[b])}}f.removeNode=function(a){var b=this.nf,c=a.pb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.sd.get(c);d&&(yb(d,a),d.length&&b.sd.remove(c))}};/*

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
function Xj(a,b){this.$c=D("div","blocklyToolboxDiv");this.$c.setAttribute("dir",q?"RTL":"LTR");b.appendChild(this.$c);this.V=new Sh;a.appendChild(this.V.H());v(this.$c,"mousedown",this,function(a){$b(a)||a.target==this.$c?gg(!1):gg(!0)})}f=Xj.prototype;f.width=0;f.Tg={Wh:19,ek:"blocklyTreeRoot",bk:"blocklyHidden",ck:"",zh:"blocklyTreeRow",dk:"blocklyTreeLabel",gd:"blocklyTreeIcon",xh:"blocklyTreeIconOpen",yh:"blocklyTreeIconNone",fk:"blocklyTreeSelected"};
f.g=function(){this.Tg.cleardotPath=ph+"1x1.gif";this.Tg.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(q?"Rtl":"Ltr");var a=new Yj(this,this.Tg);this.mf=a;Vj(a);Rj(a);Uj(a);a.Rb(null);this.$c.style.display="block";this.V.g(B);Zj(this);a.F(this.$c);var b=this;Zd(window,"resize",function(){b.Qc()});this.Qc()};
f.Qc=function(){var a=this.$c,b=Cd(ta),c=Mi();q?(b=ak(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;q||--this.width};
function Zj(a){function b(a,e){for(var h=0,k;k=a.childNodes[h];h++)if(k.tagName){var m=k.tagName.toUpperCase();if("CATEGORY"==m){m=c.createNode(k.getAttribute("name"));m.dd=[];e.add(m);var p=k.getAttribute("custom");p?m.dd=p:b(k,m)}else"HR"==m?e.add(new bk):"BLOCK"==m&&e.dd.push(k)}}var c=a.mf;c.bl();c.dd=[];b(ua,a.mf);if(c.dd.length)throw"Toolbox cannot have both blocks and categories in the root level.";lh(window,"resize")}
f.Ne=function(){return new oc(q?Mi().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Yj(a,b){this.ab=a;Oj.call(this,Nc,b)}n(Yj,Oj);Yj.prototype.Ga=function(){Yj.k.Ga.call(this);if(Nd){var a=this.n();v(a,"touchstart",this,this.Is)}};Yj.prototype.Is=function(a){a.preventDefault();var b=Wj(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.gi(a)},1)};Yj.prototype.createNode=function(a){return new ck(this.ab,a?Gc(a):Nc,this.Va,this.ob())};
Yj.prototype.Rb=function(a){this.va!=a&&(Oj.prototype.Rb.call(this,a),a&&a.dd&&a.dd.length?this.ab.V.show(a.dd):this.ab.V.vc())};function ck(a,b,c,d){sg.call(this,b,c,d);a&&(b=function(){lh(window,"resize")},Zd(a.mf,"expand",b),Zd(a.mf,"collapse",b))}n(ck,Jg);sg.prototype.Kh=function(){return Lc("span")};ck.prototype.gi=function(){ye(this)&&this.Ye?(this.toggle(),this.select()):this.gg()?this.qb().Rb(null):this.select();Cg(this)};ck.prototype.Pk=function(){};
function bk(){ck.call(this,null,"",dk)}n(bk,ck);var dk={zh:"blocklyTreeSeparator"};/*

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
var ek={Hf:null,show:function(a,b){Qf(ek,null);if(b.length){for(var c=new Lf,d=0,e;e=b[d];d++){var h=new sf(e.text);c.Ae(h,!0);h.gf(e.enabled);e.enabled&&Zd(h,"action",function(a){return function(){a()}}(e.cb))}Zd(c,"action",ek.vc);e=Yc();h=od();c.F(Tf);var k=c.n();Wb(k,"blocklyContextMenu");var m=ud(k),d=a.clientX+h.x,p=a.clientY+h.y;a.clientY+m.height>=e.height&&(p-=m.height);q?m.width>=a.clientX&&(d+=m.width):a.clientX+m.width>=e.width&&(d-=m.width);Uf(d,p,e,h);Mf(c);setTimeout(function(){k.focus()},
1);ek.Hf=null}else ek.vc()},vc:function(){Rf(ek);ek.Hf=null},Ef:function(a,b){return function(){var c=Qg(a.t,b),d=a.na();d.x=q?d.x-gi:d.x+gi;d.y+=2*gi;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Si(){this.o=u("g",{},null);this.Pg=u("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.o);this.pc=u("path",{"class":"blocklyPath"},this.o);this.Qg=u("path",{"class":"blocklyPathLight"},this.o);this.pc.ub=this;Di(this.pc);Xi(this)}n(Si,pi);f=Si.prototype;f.height=0;f.width=0;
f.za=function(){for(var a=0,b;b=this.T[a];a++)b.g();this.Pb&&Rh(this.Pb);this.Wc();z||v(this.W(),"mousedown",this,this.sg);this.t.aa.appendChild(this.W());ha(this.onchange)&&v(this.t.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){Jh&&Kh();Jh=this;this.hh();lh(this.t.aa,"blocklySelectChange")};function Kh(){var a=Jh;Jh=null;a.Cg();lh(a.t.aa,"blocklySelectChange")}f.Pb=null;f.ba=null;f.rc=null;
function Pi(a){var b=[];a.Pb&&b.push(a.Pb);a.ba&&b.push(a.ba);a.rc&&b.push(a.rc);return b}var fk=null,gk=null;f=Si.prototype;f.kb=function(a){var b=this.W();if(this.td&&b){var c=this.na();this.t.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Si.k.kb.call(this,a);a&&(c=this.na(),a.W().appendChild(b),a=this.na(),ji(this,a.x-c.x,a.y-c.y))};f.na=function(){var a=0,b=0,c=this.W();if(c){do var d=Ph(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.t.aa)}return new mc(a,b)};
f.moveBy=function(a,b){var c=this.na();this.W().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");ji(this,a,b);hk(this)};function Uh(a){var b=a.height,c=a.width;if(a=Mg(a))a=Uh(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.Ad=function(a){if(this.ed!=a){Si.k.Ad.call(this,a);for(var b=[],c=0,d;d=this.T[c];c++)b.push.apply(b,d.O(!a));if(a){a=Pi(this);for(c=0;c<a.length;c++)a[c].O(!1);c=this.toString(ik);N(Q(this,"_TEMP_COLLAPSED_INPUT"),c).g()}else R(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.B){for(c=0;a=b[c];c++)a.F();this.Ua()}}};
f.sg=function(a){if(!this.kc){jk();lj();this.select();gg();if($b(a))mj(this,a);else if(this.mc&&!z){Bh();ih(jh);var b=this.na();this.ql=b.x;this.rl=b.y;this.Li=a.clientX;this.Mi=a.clientY;ac=1;fk=v(document,"mouseup",this,this.ji);gk=v(document,"mousemove",this,this.ii);this.Lf=[];for(var b=this.Nb(),c=0,d;d=b[c];c++){d=Pi(d);for(var e=0;e<d.length;e++){var h;h=d[e];h={x:h.pd,y:h.qd};h.Tr=d[e];this.Lf.push(h)}}}else return;a.stopPropagation()}};
f.ji=function(a){var b=this;kk(function(){lj();if(Jh&&Xh){Wg(Yh,Xh);if(b.B){var c=(Zh(Yh)?Xh:Yh).h;lk("click");var d=sh(c.o);c.G?(d.x+=q?3:-3,d.y+=13):c.K&&(d.x+=q?-23:23,d.y+=3);c=u("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},ta);c.Ji=new Date;mk(c)}b.t.Jb&&b.t.Jb.close()}else Lh(b.t,a)&&((c=b.t.Jb)&&rg(c.close,100,c),Jh.m(!1,!0),lh(window,"resize"));Xh&&(Vb(Vh.ag),delete Vh.ag,Xh=null);ih(nk.OPEN)})};
function mj(a,b){if(!z&&a.contextMenu){var c=[];if(a.Sd&&!z&&a.mc&&!z&&!a.kc){var d={text:G.Lm,enabled:!0,cb:function(){var b=Lg(a);Xg(b);var b=Qg(a.t,b),c=a.na();c.x=q?c.x-gi:c.x+gi;c.y+=2*gi;b.moveBy(c.x,c.y);b.select()}};a.Nb().length>Ma(a.t)&&(d.enabled=!1);c.push(d);a.Gc&&!z&&!a.ed&&va&&(d={enabled:!0},a.ba?(d.text=G.rq,d.cb=function(){a.ef(null)}):(d.text=G.Dl,d.cb=function(){a.ef("")}),c.push(d));if(!a.ed)for(d=0;d<a.T.length;d++)if(1==a.T[d].type){d={enabled:!0};d.text=a.Xe?G.Pm:G.Sm;d.cb=
function(){Sg(a,!a.Xe)};c.push(d);break}wa&&(a.ed?(d={enabled:!0},d.text=G.Om,d.cb=function(){a.Ad(!1)}):(d={enabled:!0},d.text=G.Il,d.cb=function(){a.Ad(!0)}),c.push(d));xa&&(d={text:a.disabled?G.Mm:G.Km,enabled:!Zi(a),cb:function(){a.ff(!a.disabled)}},c.push(d));var d=a.Nb().length,e=Mg(a);e&&(d-=e.Nb().length);d={text:1==d?G.Im:G.Jm.replace("%1",String(d)),enabled:!0,cb:function(){a.m(!0,!0)}};c.push(d)}d={enabled:!(ha(a.p)?!a.p():!a.p)};d.text=G.Rm;d.cb=function(){var b=ha(a.p)?a.p():a.p;b&&window.open(b)};
c.push(d);a.Db&&!a.kc&&a.Db(c);ek.show(b,c);ek.Hf=a}}function ji(a,b,c){if(a.B){for(var d=ni(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Pi(a);for(e=0;e<d.length;e++)Oh(d[e]);for(e=0;e<a.cc.length;e++)ji(a.cc[e],b,c)}}function ok(a,b){b?Wb(a.o,"blocklyDragging"):Xb(a.o,"blocklyDragging");for(var c=0;c<a.cc.length;c++)ok(a.cc[c],b)}
f.ii=function(a){var b=this;kk(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Bh();var c=a.clientX-b.Li,d=a.clientY-b.Mi;if(1==ac&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>oj){ac=2;b.kb(null);ok(b,!0);var e=b.t;e.ik=e.Jb?e.Jb.Ne():null;e.hk=e.V?e.V.Ne():e.ab?e.ab.Ne():null}if(2==ac){b.W().setAttribute("transform","translate("+(b.ql+c)+", "+(b.rl+d)+")");for(e=0;e<b.Lf.length;e++){var h=b.Lf[e],k=h.Tr,m=h.x+c,h=h.y+d;k.pd=m;k.qd=h;k.J()&&$g(k.sa,m,h)}for(var k=ni(b,!1),
h=m=null,p=gi,e=0;e<k.length;e++){var x=k[e],w=ki(x,p,c,d);w.s&&(m=w.s,h=x,p=w.Zk)}Xh&&Xh!=m&&(Vb(Vh.ag),delete Vh.ag,Yh=Xh=null);m&&m!=Xh&&(m.Sh(),Xh=m,Yh=h);b.Sd&&!z&&Lh(b.t,a)}}a.stopPropagation()})};function Xi(a){a.mc&&!z?Wb(a.o,"blocklyDraggable"):Xb(a.o,"blocklyDraggable")}f.W=function(){return this.o};var pk=7*(1-Math.SQRT1_2)+1,qk=9*(1-Math.SQRT1_2)-1,rk="m "+pk+","+pk,sk="a 9,9 0 0,0 "+(-qk-1)+","+(8-qk),tk="a 9,9 0 0,0 "+(8-qk)+","+(qk+1);f=Si.prototype;
f.m=function(a,b){lj();ek.Hf==this&&ek.vc();Ui(this,a,!1);if(b&&this.B){lk("delete");var c=sh(this.o),d=this.o.cloneNode(!0);d.xl=c.x;d.yl=c.y;d.setAttribute("transform","translate("+d.xl+","+d.yl+")");ta.appendChild(d);d.Dj=d.getBBox();d.Ji=new Date;uk(d)}this.B=!1;c=Pi(this);for(d=0;d<c.length;d++)c[d].m();Si.k.m.call(this,a);Vb(this.o);this.Pg=this.Qg=this.pc=this.o=null};
function uk(a){var b=(new Date-a.Ji)/150;1<b?Vb(a):(a.setAttribute("transform","translate("+(a.xl+(q?-1:1)*a.Dj.width/2*b+", "+(a.yl+a.Dj.height*b))+") scale("+(1-b)+")"),setTimeout(function(){uk(a)},10))}function mk(a){var b=(new Date-a.Ji)/150;1<b?Vb(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){mk(a)},10))}
f.Wc=function(){if(!this.disabled){var a=Yf(Zf(this.uh)),b=ng(a),c;c=pg([255,255,255],b,.3);b=pg([0,0,0],b,.4);this.Qg.setAttribute("stroke",Yf(c));this.Pg.setAttribute("fill",Yf(b));this.pc.setAttribute("fill",a);c=Pi(this);for(a=0;a<c.length;a++)c[a].Wc();for(a=0;c=this.T[a];a++)for(var b=0,d;d=c.Xa[b];b++)d.qa(null);this.B&&this.F()}};
function ei(a){a.disabled||Zi(a)?(Wb(a.o,"blocklyDisabled"),a.pc.setAttribute("fill","url(#blocklyDisabledPattern)")):(Xb(a.o,"blocklyDisabled"),a.Wc());a=a.md();for(var b=0,c;c=a[b];b++)ei(c)}f.Qf=function(){return this.ba?this.ba.pb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.ef=function(a){var b=!1;l(a)?(this.ba||(this.ba=new qi(this),b=!0),this.ba.qa(a)):this.ba&&(this.ba.m(),b=!0);b&&this.B&&(this.F(),this.Ua())};
f.Dd=function(a){this.kc&&(a=null);var b=!1;l(a)?(this.rc||(this.rc=new ri(this),b=!0),this.rc.qa(a)):this.rc&&(this.rc.m(),b=!0);b&&this.B&&(this.F(),this.Ua())};f.le=function(a){this.Pb&&this.Pb!==a&&this.Pb.m();a&&(a.I=this,this.Pb=a,this.B&&Rh(a))};f.ff=function(a){this.disabled!=a&&(Si.k.ff.call(this,a),ei(this),this.t.Fb())};f.hh=function(){Wb(this.o,"blocklySelected");this.o.parentNode.appendChild(this.o)};f.Cg=function(){Xb(this.o,"blocklySelected")};
f.F=function(){this.B=!0;var a=10;q&&(a=-a);for(var b=Pi(this),c=0;c<b.length;c++){var d=b[c];d.I.isCollapsed()?d.Pa.setAttribute("display","none"):(d.Pa.setAttribute("display","block"),q&&(a-=16),d.Pa.setAttribute("transform","translate("+a+", 5)"),Oh(d),a=q?a-10:a+26)}var e=a+=q?10:-10,h=this.T,b=[];b.Ba=e+20;if(this.K||this.C)b.Ba=Math.max(b.Ba,40);for(var d=c=0,k=!1,m=!1,p=!1,x=void 0,w=this.Xe&&!this.isCollapsed(),E=0,A;A=h[E];E++)if(A.J()){var J;w&&x&&3!=x&&3!=A.type?J=b[b.length-1]:(x=A.type,
J=[],J.type=w&&3!=A.type?-1:A.type,J.height=0,b.push(J));J.push(A);A.yd=25;A.Ya=w&&1==A.type?20.5:0;if(A.s&&A.s.w){var jb=Uh(H(A.s));A.yd=Math.max(A.yd,jb.height);A.Ya=Math.max(A.Ya,jb.width)}E==h.length-1&&A.yd--;J.height=Math.max(J.height,A.yd);A.Xb=0;1==b.length&&(A.Xb+=q?-e:e);for(var jb=!1,Vg=0,Yb;Yb=A.Xa[Vg];Vg++){0!=Vg&&(A.Xb+=10);var Sj=Yb.Xd();Yb.Ya=Sj.width;Yb.Eg=jb&&Yb.Id?10:0;A.Xb+=Yb.Ya+Yb.Eg;J.height=Math.max(J.height,Sj.height);jb=Yb.Id}-1!=J.type&&(3==J.type?(m=!0,d=Math.max(d,A.Xb)):
(1==J.type?k=!0:5==J.type&&(p=!0),c=Math.max(c,A.Xb)))}for(e=0;J=b[e];e++)if(J.vl=!1,-1==J.type)for(h=0;A=J[h];h++)if(1==A.type){J.height+=10;J.vl=!0;break}b.Ng=20+d;m&&(b.Ba=Math.max(b.Ba,b.Ng+30));k?b.Ba=Math.max(b.Ba,c+20+8):p&&(b.Ba=Math.max(b.Ba,c+20));b.Ks=k;b.rv=m;b.qv=p;d=a;this.G?this.Ii=this.Mg=!0:(this.Ii=this.Mg=!1,this.K&&(a=H(this.K))&&Mg(a)==this&&(this.Mg=!0),Mg(this)&&(this.Ii=!0));k=this.na();m=[];p=[];a=[];c=[];A=b.Ba;this.Mg?(m.push("m 0,0"),a.push("m 1,1")):(m.push("m 0,8"),a.push(q?
rk:"m 1,7"),m.push("A 8,8 0 0,1 8,0"),a.push("A 7,7 0 0,1 8,1"));this.K&&(m.push("H",15),a.push("H",15),m.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.K.moveTo(k.x+(q?-30:30),k.y));m.push("H",A);a.push("H",A+(q?-1:0));this.width=A;for(J=A=0;e=b[J];J++){w=10;0==J&&(w+=q?-d:d);a.push("M",b.Ba-1+","+(A+1));if(this.isCollapsed())h=e[0],E=A+18,vk(h.Xa,w,E),m.push("l 8,0 0,4 8,4 -16,8 8,4"),q?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),h=e.height-20,m.push("v",h),q&&a.push("v",
h-2),this.width+=15;else if(-1==e.type){for(x=0;h=e[x];x++)E=A+18,e.vl&&(E+=5),w=vk(h.Xa,w,E),5!=h.type&&(w+=h.Ya+10),1==h.type&&(p.push("M",w-10+","+(A+5)),p.push("h",6-h.Ya),p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),p.push("v",h.yd+1-20),p.push("h",h.Ya+2-8),p.push("z"),q?(c.push("M",w-10-3+8-h.Ya+","+(A+5+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",h.yd-20+3),c.push("h",h.Ya-8+1)):(c.push("M",w-10+1+","+(A+5+1)),c.push("v",h.yd+1),c.push("h",6-h.Ya),c.push("M",
w-h.Ya-10+1.8+","+(A+5+20-.4)),c.push("l","3.04,-1.8")),E=q?k.x-w-8+10+h.Ya+1:k.x+w+8-10-h.Ya-1,jb=k.y+A+5+1,h.s.moveTo(E,jb),h.s.w&&ii(h.s));w=Math.max(w,b.Ba);this.width=Math.max(this.width,w);m.push("H",w);a.push("H",w+(q?-1:0));m.push("v",e.height);q&&a.push("v",e.height-2)}else 1==e.type?(h=e[0],E=A+18,-1!=h.align&&(x=b.Ba-h.Xb-8-20,1==h.align?w+=x:0==h.align&&(w+=(x+w)/2)),vk(h.Xa,w,E),m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),x=e.height-20,m.push("v",x),q?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",x)):(a.push("M",b.Ba-4.2+","+(A+20-.4)),a.push("l","3.04,-1.8")),E=k.x+(q?-b.Ba-1:b.Ba+1),jb=k.y+A,h.s.moveTo(E,jb),h.s.w&&(ii(h.s),this.width=Math.max(this.width,b.Ba+Uh(H(h.s)).width-8+1))):5==e.type?(h=e[0],E=A+18,-1!=h.align&&(x=b.Ba-h.Xb-20,b.Ks&&(x-=8),1==h.align?w+=x:0==h.align&&(w+=(x+w)/2)),vk(h.Xa,w,E),m.push("v",e.height),q&&a.push("v",e.height-2)):3==e.type&&(h=e[0],0==J&&(m.push("v",10),q&&a.push("v",9),A+=10),E=A+18,-1!=h.align&&(x=b.Ng-h.Xb-20,1==h.align?w+=x:0==h.align&&
(w+=(x+w)/2)),vk(h.Xa,w,E),w=b.Ng+30,m.push("H",w),m.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"),m.push("v",e.height-16),m.push("a 8,8 0 0,0 8,8"),m.push("H",b.Ba),q?(a.push("M",w-30+qk+","+(A+qk)),a.push(sk),a.push("v",e.height-16),a.push("a 9,9 0 0,0 9,9"),a.push("H",b.Ba-1)):(a.push("M",w-30+qk+","+(A+e.height-qk)),a.push(tk),a.push("H",b.Ba)),E=k.x+(q?-w:w),jb=k.y+A+1,h.s.moveTo(E,jb),h.s.w&&(ii(h.s),this.width=Math.max(this.width,b.Ng+Uh(H(h.s)).width)),J==b.length-1||3==b[J+1].type)&&(m.push("v",
10),q&&a.push("v",9),A+=10);A+=e.height}b.length||(A=25,m.push("V",A),q&&a.push("V",A-1));b=A;this.height=b+1;this.C&&(m.push("H","30 l -6,4 -3,0 -6,-4"),this.C.moveTo(q?k.x-30:k.x+30,k.y+b+1),this.C.w&&ii(this.C),this.height+=4);this.Ii?(m.push("H 0"),q||a.push("M","1,"+b)):(m.push("H",8),m.push("a","8,8 0 0,1 -8,-8"),q||(a.push("M",pk+","+(b-pk)),a.push("A","7,7 0 0,1 1,"+(b-8))));this.G?(this.G.moveTo(k.x,k.y),m.push("V",20),m.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),q?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):q||(this.Mg?a.push("V",1):a.push("V",8));m.push("z");b=m.join(" ")+"\n"+p.join(" ");this.pc.setAttribute("d",b);this.Pg.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.Qg.setAttribute("d",b);q&&(this.pc.setAttribute("transform","scale(-1 1)"),this.Qg.setAttribute("transform","scale(-1 1)"),this.Pg.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?
b.F():lh(window,"resize");hk(this)};function vk(a,b,c){q&&(b=-b);for(var d=0,e;e=a[d];d++)q?(b-=e.Eg+e.Ya,e.W().setAttribute("transform","translate("+b+", "+c+")"),e.Ya&&(b-=10)):(e.W().setAttribute("transform","translate("+(b+e.Eg)+", "+c+")"),e.Ya&&(b+=e.Eg+e.Ya+10));return q?-b:b};/*

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
function y(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function kj(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function lh(a,b){setTimeout(function(){kj(a,b)},0)}
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
function yk(a,b){yk.k.constructor.call(this,"");this.ma=b;this.Kj=u("text",{"class":"blocklyText",x:-3},this.ta);this.Kj.appendChild(document.createTextNode("\u2713"));this.ra(a)}n(yk,Tb);f=yk.prototype;f.clone=function(){return new yk(this.Na(),this.ma)};f.sf="default";f.Na=function(){return String(this.$).toUpperCase()};f.ra=function(a){a="TRUE"==a;this.$!==a&&(this.$=a,this.Kj.style.display=a?"block":"none",this.h&&this.h.B&&this.h.t.Fb())};
f.Lg=function(){var a=!this.$;if(this.h&&this.ma){var b=this.ma(a);void 0!==b&&(a=b)}null!==a&&this.ra(String(a).toUpperCase())};function zk(a){me.call(this);this.be=[];Ak(this,a)}n(zk,me);f=zk.prototype;f.va=null;f.zi=null;f.wk=function(a){return this.be[a]||null};function Ak(a,b){b&&(tb(b,function(a){this.df(a,!1)},a),Ab(a.be,b))}f.removeItem=function(a){a&&yb(this.be,a)&&a==this.va&&(this.va=null,this.dispatchEvent("select"))};f.nd=function(){return this.va};f.Rb=function(a){a!=this.va&&(this.df(this.va,!1),this.va=a,this.df(a,!0));this.dispatchEvent("select")};f.Pe=function(){var a=this.va;return a?sb(this.be,a):-1};
f.jf=function(a){this.Rb(this.wk(a))};f.clear=function(){var a=this.be;if(!ea(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0;this.va=null};f.Z=function(){zk.k.Z.call(this);delete this.be;this.va=null};f.df=function(a,b){a&&("function"==typeof this.zi?this.zi(a,b):"function"==typeof a.Di&&a.Di(b))};function Bk(a,b,c,d,e){this.Ib=!!b;a&&this.me(a,d);this.depth=void 0!=e?e:this.Bc||0;this.Ib&&(this.depth*=-1);this.Qj=!c}n(Bk,yj);f=Bk.prototype;f.xc=null;f.Bc=0;f.sl=!1;f.me=function(a,b,c){if(this.xc=a)this.Bc=ga(b)?b:1!=this.xc.nodeType?0:this.Ib?-1:1;ga(c)&&(this.depth=c)};f.clone=function(){return new Bk(this.xc,this.Ib,!this.Qj,this.Bc,this.depth)};
f.next=function(){var a;if(this.sl){if(!this.xc||this.Qj&&0==this.depth)throw xj;a=this.xc;var b=this.Ib?-1:1;if(this.Bc==b){var c=this.Ib?a.lastChild:a.firstChild;c?this.me(c):this.me(a,-1*b)}else(c=this.Ib?a.previousSibling:a.nextSibling)?this.me(c):this.me(a.parentNode,-1*b);this.depth+=this.Bc*(this.Ib?-1:1)}else this.sl=!0;a=this.xc;if(!this.xc)throw xj;return a};
f.splice=function(a){var b=this.xc,c=this.Ib?1:-1;this.Bc==c&&(this.Bc=-1*c,this.depth+=this.Bc*(this.Ib?-1:1));this.Ib=!this.Ib;Bk.prototype.next.call(this);this.Ib=!this.Ib;for(var c=fa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)b.parentNode&&b.parentNode.insertBefore(c[d],b.nextSibling);Vb(b)};function Ck(a,b,c,d){Bk.call(this,a,b,c,null,d)}n(Ck,Bk);Ck.prototype.next=function(){do Ck.k.next.call(this);while(-1==this.Bc);return this.xc};function Dk(){}n(Dk,Ne);ca(Dk);var Ek=0;Dk.prototype.H=function(a){var b=this.Ke(a);a=a.ob().H("DIV",b?b.join(" "):null,Fk(this,a.fb,a.Xd(),a.ob()));Je(a,"grid");return a};function Fk(a,b,c,d){for(var e=[],h=0,k=0;h<c.height;h++){for(var m=[],p=0;p<c.width;p++){var x=b&&b[k++];m.push(Gk(a,x,d))}e.push(Hk(a,m,d))}return a.Tj(e,d)}Dk.prototype.Tj=function(a,b){var c=b.H("TABLE",this.U()+"-table",b.H("TBODY",this.U()+"-body",a));c.cellSpacing=0;c.cellPadding=0;return c};
function Hk(a,b,c){a=c.H("TR",a.U()+"-row",b);Je(a,"row");return a}function Gk(a,b,c){a=c.H("TD",{"class":a.U()+"-cell",id:a.U()+"-cell-"+Ek++},b);Je(a,"gridcell");Ke(a,"selected",!1);if(!id(a)&&!Me(a,"label")){var d;b=new Ck(a);for(c="";!c&&(d=Aj(b));)1==d.nodeType&&(c=Me(d,"label")||d.title);(d=c)&&Ke(a,"label",d)}return a}
Dk.prototype.Bd=function(a,b){if(a){var c=Vc(this.U()+"-body",a)[0];if(c){var d=0;tb(c.rows,function(a){tb(a.cells,function(a){Zb(a);if(b){var c=b[d++];c&&a.appendChild(c)}})});if(d<b.length){for(var e=[],h=Sc(a),k=c.rows[0].cells.length;d<b.length;){var m=b[d++];e.push(Gk(this,m,h));e.length==k&&(m=Hk(this,e,h),c.appendChild(m),e.length=0)}if(0<e.length){for(;e.length<k;)e.push(Gk(this,"",h));m=Hk(this,e,h);c.appendChild(m)}}}zd(a,!0,Eb)}};
function Ik(a,b,c){for(b=b.n();c&&1==c.nodeType&&c!=b;){if("TD"==c.tagName&&Be(c,a.U()+"-cell"))return c.firstChild;c=c.parentNode}return null}Dk.prototype.U=function(){return"goog-palette"};function Jk(a,b,c){ef.call(this,a,b||Dk.gc(),c);this.qh&=-89;this.Ee=new Kk;this.Ee.Jg(this);this.$h=-1}n(Jk,ef);f=Jk.prototype;f.Ia=null;f.M=-1;f.Za=null;f.Z=function(){Jk.k.Z.call(this);this.Za&&(this.Za.m(),this.Za=null);this.Ia=null;this.Ee.m()};f.Ig=function(a){Jk.k.Ig.call(this,a);Lk(this);this.Za?(this.Za.clear(),Ak(this.Za,a)):(this.Za=new zk(a),a=oa(this.df,this),this.Za.zi=a,se(this).N(this.Za,"select",this.Hs));this.M=-1};f.Of=function(){return""};
f.Ue=function(a){Jk.k.Ue.call(this,a);var b=Ik(this.L,this,a.target);b&&a.relatedTarget&&cd(b,a.relatedTarget)||b==Mk(this)||(a=this.fb,this.$a(a?sb(a,b):-1))};f.Kc=function(a){Jk.k.Kc.call(this,a);if(this.$&4&&(a=Ik(this.L,this,a.target),a!=Mk(this))){var b=this.fb;this.$a(b?sb(b,a):-1)}};f.Pc=function(a){var b=Mk(this);return b?(this.Rb(b),Jk.k.Pc.call(this,a)):!1};
f.Ob=function(a){var b=this.fb,b=b?b.length:0,c=this.Ia.width;if(0==b||!this.isEnabled())return!1;if(13==a.keyCode||32==a.keyCode)return this.Pc(a);if(36==a.keyCode)return this.$a(0),!0;if(35==a.keyCode)return this.$a(b-1),!0;var d=0>this.M?this.Pe():this.M;switch(a.keyCode){case 37:if(-1==d||0==d)d=b;this.$a(d-1);a.preventDefault();return!0;case 39:return d==b-1&&(d=-1),this.$a(d+1),a.preventDefault(),!0;case 38:-1==d&&(d=b+c-1);if(d>=c)return this.$a(d-c),a.preventDefault(),!0;break;case 40:if(-1==
d&&(d=-c),d<b-c)return this.$a(d+c),a.preventDefault(),!0}return!1};f.Hs=function(){};f.Xd=function(){return this.Ia};f.Kg=function(a,b){if(this.n())throw Error("Component already rendered");this.Ia=ga(a)?new Sb(a,b):a;Lk(this)};function Mk(a){var b=a.fb;return b&&b[a.M]}f.$a=function(a){a!=this.M&&(Nk(this,this.M,!1),this.$h=this.M,this.M=a,Nk(this,a,!0),this.dispatchEvent("a"))};f.Pe=function(){return this.Za?this.Za.Pe():-1};f.nd=function(){return this.Za?this.Za.nd():null};
f.jf=function(a){this.Za&&this.Za.jf(a)};f.Rb=function(a){this.Za&&this.Za.Rb(a)};function Nk(a,b,c){if(a.n()){var d=a.fb;if(d&&0<=b&&b<d.length){var e;e=(e=Mk(a))?e.parentNode:null;a.Ee.n()!=e&&(a.Ee.D=e);e=a.Ee;e.xb(c);!!(e.$&2)==c&&(b=d[b])&&(b=b?b.parentNode:null,d=a.L.U()+"-cell-hover",c?Ce(b,d):Ee(b,d),c?Ke(a.D,"activedescendant",b.id):b.id==Me(a.D,"activedescendant")&&Le(a.D))}}}f.xb=function(a){a&&-1==this.M?this.$a(-1<this.$h?this.$h:0):a||this.$a(-1);Jk.k.xb.call(this,a)};
f.df=function(a,b){if(this.n()&&a){var c=a.parentNode,d=this.L.U()+"-cell-selected";b?Ce(c,d):Ee(c,d);Ke(c,"selected",b)}};function Lk(a){var b=a.fb;if(b)if(a.Ia&&a.Ia.width){if(b=Math.ceil(b.length/a.Ia.width),!ga(a.Ia.height)||a.Ia.height<b)a.Ia.height=b}else b=Math.ceil(Math.sqrt(b.length)),a.Ia=new Sb(b,b);else a.Ia=new Sb(0,0)}function Kk(){ef.call(this,null);this.Fd|=2}n(Kk,ef);function Ok(a,b,c){this.Gf=a||[];Jk.call(this,null,b||Dk.gc(),c);this.Hg(this.Gf)}n(Ok,Jk);f=Ok.prototype;f.qg=null;f.kg=null;f.Hg=function(a,b){this.Gf=a;this.kg=b||null;this.qg=null;this.Bd(Pk(this))};f.Mh=function(){var a=this.nd();if(a){var b=a.style[cb()];if("undefined"!==typeof b)a=b;else{var b=a.style,c=ld["background-color"];if(!c){var d=cb(),c=d;void 0===a.style[d]&&(d=(t?"Webkit":Eb?"Moz":r?"ms":Db?"O":null)+db(d),void 0!==a.style[d]&&(c=d));ld["background-color"]=c}a=b[c]||""}return Qk(a)}return null};
f.Ei=function(a){a=Qk(a);this.qg||(this.qg=vb(this.Gf,function(a){return Qk(a)}));this.jf(a?sb(this.qg,a):-1)};function Pk(a){return vb(a.Gf,function(a,c){var d=this.ob().H("div",{"class":this.L.U()+"-colorswatch",style:"background-color:"+a});d.title=this.kg&&this.kg[c]?this.kg[c]:"#"==a.charAt(0)?"RGB ("+ng(a).join(", ")+")":a;return d},a)}function Qk(a){if(a)try{return ig(a).Rh}catch(b){}return null};function Rk(a,b){oe.call(this,a);this.Y=b||null;se(this).N(this,"action",this.et)}n(Rk,oe);f=Rk.prototype;f.kd=!0;f.Hg=function(a){this.Y?this.Y.Hg(a):Sk(this,a)};f.Kg=function(a){this.Y||Sk(this,[]);this.Y.Kg(a)};f.Xd=function(){return this.Y?this.Y.Xd():null};f.Pe=function(){return this.Y?this.Y.Pe():-1};f.jf=function(a){this.Y&&this.Y.jf(a)};f.Mh=function(){return this.Y?this.Y.Mh():null};f.Ei=function(a){this.Y&&this.Y.Ei(a)};f.wc=function(){return this.kd};
f.Vc=function(a){this.kd=a;this.Y&&this.Y.tb(32,a)};f.Ga=function(){Rk.k.Ga.call(this);this.Y&&this.Y.F(this.n());this.n().unselectable="on"};f.Z=function(){Rk.k.Z.call(this);this.Y&&(this.Y.m(),this.Y=null)};f.focus=function(){this.Y&&this.Y.n().focus()};f.et=function(a){a.stopPropagation();this.dispatchEvent("change")};function Sk(a,b){var c=new Ok(b,null,a.ob());c.Kg(5);c.tb(32,a.kd);a.Ae(c);a.Y=c;a.Q&&a.Y.F(a.n())};/*

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
function Tk(a,b){Tk.k.constructor.call(this,"\u00a0\u00a0\u00a0");this.ma=b;this.ra(a)}var Uk;n(Tk,Tb);f=Tk.prototype;f.g=function(a){Tk.k.g.call(this,a);this.Lb.style.fillOpacity=1;this.ra(this.Na())};f.clone=function(){return new Tk(this.Na(),this.ma)};f.sf="default";f.m=function(){Rf(this);Tk.k.m.call(this)};f.Na=function(){return this.Oj};f.ra=function(a){this.Oj=a;this.Lb&&(this.Lb.style.fill=a);this.h&&this.h.B&&(hk(this.h),this.h.t.Fb())};
f.pb=function(){var a=this.Oj,b=a.match(/^#(.)\1(.)\2(.)\3$/);b&&(a="#"+b[1]+b[2]+b[3]);return a};
var Vk="#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" "),Wk=
7;Tk.prototype.Lg=function(){Qf(this,Xk);var a=new Rk;a.Kg(Wk);a.Hg(Vk);var b=Yc(),c=od(),d=Sf(this.Lb),e=this.Lb.getBBox();a.F(Tf);a.Ei(this.Na());var h=td(a.n());d.y=d.y+h.height+e.height>=b.height+c.y?d.y-(h.height-1):d.y+(e.height-1);q?(d.x+=e.width,d.x-=h.width,d.x<c.x&&(d.x=c.x)):d.x>b.width+c.x-h.width&&(d.x=b.width+c.x-h.width);Uf(d.x,d.y,b,c);var k=this;Uk=Zd(a,"change",function(a){a=a.target.Mh()||"#000000";Yk();if(k.h&&k.ma){var b=k.ma(a);void 0!==b&&(a=b)}null!==a&&k.ra(a)})};
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
function Zk(a,b){Zk.k.constructor.call(this,a);this.ma=b}var $k;n(Zk,Tb);f=Zk.prototype;f.clone=function(){return new Zk(this.pb(),this.ma)};f.sf="text";f.m=function(){Rf(this);Zk.k.m.call(this)};f.qa=function(a){if(null!==a){if(this.h&&this.ma){var b=this.ma(a);null!==b&&void 0!==b&&(a=b)}Tb.prototype.qa.call(this,a)}};
f.Lg=function(a){a=a||!1;if(!a&&(Fb||Jb||Lb)){a=window.prompt(G.Fl,this.Sa);if(this.h&&this.ma){var b=this.ma(a);void 0!==b&&(a=b)}null!==a&&this.qa(a)}else{Qf(this,al(this));var b=Tf,c=D("input","blocklyHtmlInput");$k=c;b.appendChild(c);c.value=c.defaultValue=this.Sa;c.Ok=null;bl(this);this.dl();a||(c.focus(),c.select());c.gt=v(c,"keyup",this,this.Rk);c.ft=v(c,"keypress",this,this.Rk);c.ot=v(this.h.t.aa,"blocklyWorkspaceChange",this,this.dl)}};
f.Rk=function(a){var b=$k;13==a.keyCode?Yk():27==a.keyCode?(this.qa(b.defaultValue),Yk()):(a=b.value,a!==b.Ok?(b.Ok=a,this.qa(a),bl(this)):t&&this.h.F())};function bl(a){var b=!0,c=$k;a.h&&a.ma&&(b=a.ma(c.value));null===b?Wb(c,"blocklyInvalidInput"):Xb(c,"blocklyInvalidInput")}f.dl=function(){var a=Tf,b=this.ta.getBBox();a.style.width=b.width+"px";b=Sf(this.Lb);if(q){var c=this.Lb.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;t&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function al(a){return function(){var b=$k,c=b.value;a.h&&a.ma&&(c=a.ma(c),null===c&&(c=b.defaultValue));a.qa(c);a.h.B&&a.h.F();y(b.gt);y(b.ft);y(b.ot);$k=null;Tf.style.width="auto"}}function cl(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)}function dl(a){(a=cl(a))&&(a=String(Math.max(0,Math.floor(a))));return a};/*

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
function el(a){this.pg=a;this.fh="";this.Qm=new RegExp(this.Ka,"g")}el.prototype.tf=null;el.prototype.Kd=null;function fl(){var a=S,b=B,c=[];a.g(b);for(var b=Ka(b,!0),d=0,e;e=b[d];d++){var h=gl(a,e);ea(h)&&(h=h[0]);h&&(e.G&&a.hl&&(h=a.hl(h)),c.push(h))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");return c=c.replace(/[ \t]+\n/g,"\n")}function hl(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}
function gl(a,b){if(!b)return"";if(b.disabled)return gl(a,Mg(b));var c=a[b.type];if(!c)throw'Language "'+a.pg+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.xi(b,c[0]),c[1]];if(l(c))return a.Kd&&(c=a.Kd.replace(/%1/g,"'"+b.id+"'")+c),a.xi(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function T(a,b,c){var d=S;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=bj(a,b);if(!a)return"";b=gl(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function il(a,b){var c=S,d=bj(a,b),e=gl(c,d);if(!l(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=hl(e,c.ue));return e}
function jl(a,b){var c=S;c.tf&&(a=c.tf.replace(/%1/g,"'"+b+"'")+a);c.Kd&&(a+=hl(c.Kd.replace(/%1/g,"'"+b+"'"),c.ue));return a}el.prototype.ue="  ";function kl(a){var b=S;b.fh+=a+","}el.prototype.Ka="{leCUI8hutHZI4480Dc}";function ll(a,b){var c=S;if(!c.Rd[a]){var d=Ha(c.ga,a);c.vk[a]=d;c.Rd[a]=b.join("\n").replace(c.Qm,d)}return c.vk[a]};/*

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
var jh="handclosed",Mh="handdelete",nk={},ml="",nl=null,ol="";function pl(){var a=ql.join("\n");ol=ph.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,ol),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));nl=c.sheet;ih("hando")}
function ih(a){if(!z&&ml!=a){ml=a;var b="url("+ol+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=nl||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(h){if(15==h.code)throw h.styleSheet=d,h;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;ta&&(ta.style.cursor="hando"==a?"":b)}}
var ql=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
"  fill:none;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklySelected>.blocklyPath {","  stroke-width: 3px;","  stroke: #fc3;","}",".blocklySelected>.blocklyPathLight {","  display: none;","}",".blocklyDragging>.blocklyPath,",".blocklyDragging>.blocklyPathLight {","  fill-opacity: .8;","  stroke-opacity: .8;","}",".blocklyDragging>.blocklyPathDark {","  display: none;","}",".blocklyDisabled>.blocklyPath {","  fill-opacity: .5;","  stroke-opacity: .5;","}",".blocklyDisabled>.blocklyPathLight,",
".blocklyDisabled>.blocklyPathDark {","  display: none;","}",".blocklyText {","  cursor: default;",'  font-family: "O Sans", sans-serif;',"  font-size: 12pt;","  fill: #fff;","}",".blocklyNonEditableText>text {","  pointer-events: none;","}",".blocklyNonEditableText>rect,",".blocklyEditableText>rect {","  fill: #fff;","  fill-opacity: .6;","}",".blocklyNonEditableText>text,",".blocklyEditableText>text {","  fill: #000;","}",".blocklyEditableText:hover>rect {","  stroke-width: 2;","  stroke: #fff;",
"}",".blocklyBubbleText {","  fill: #000;","}",".blocklySvg text {","  -moz-user-select: none;","  -webkit-user-select: none;","  user-select: none;","  cursor: inherit;","}",".blocklyHidden {","  display: none;","}",".blocklyFieldDropdown:not(.blocklyHidden) {","  display: block;","}",".blocklyTooltipBackground {","  fill: #ffffc7;","  stroke-width: 1px;","  stroke: #d8d8d8;","}",".blocklyTooltipShadow,",".blocklyDropdownMenuShadow {","  fill: #bbb;","  filter: url(#blocklyShadowFilter);","}",".blocklyTooltipText {",
"  font-family: sans-serif;","  font-size: 9pt;","  fill: #000;","}",".blocklyIconShield {","  cursor: default;","  fill: #00c;","  stroke-width: 1px;","  stroke: #ccc;","}",".blocklyIconGroup:hover>.blocklyIconShield {","  fill: #00f;","  stroke: #fff;","}",".blocklyIconGroup:hover>.blocklyIconMark {","  fill: #fff;","}",".blocklyIconMark {","  cursor: default !important;","  font-family: sans-serif;","  font-size: 9pt;","  font-weight: bold;","  fill: #ccc;","  text-anchor: middle;","}",".blocklyWarningBody {",
"}",".blocklyMinimalBody {","  margin: 0;","  padding: 0;","}",".blocklyCommentTextarea {","  margin: 0;","  padding: 2px;","  border: 0;","  resize: none;","  background-color: #ffc;","}",".blocklyHtmlInput {","  font-family: sans-serif;","  font-size: 11pt;","  border: none;","  outline: none;","  width: 100%","}",".blocklyMutatorBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #ddd;","}",".blocklyFlyoutBackground {","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyColourBackground {",
"  fill: #666;","}",".blocklyScrollbarBackground {","  fill: #fff;","  stroke-width: 1;","  stroke: #e4e4e4;","}",".blocklyScrollbarKnob {","  fill: #ccc;","}",".blocklyScrollbarBackground:hover+.blocklyScrollbarKnob,",".blocklyScrollbarKnob:hover {","  fill: #bbb;","}",".blocklyInvalidInput {","  background: #faa;","}",".blocklyAngleCircle {","  stroke: #444;","  stroke-width: 1;","  fill: #ddd;","  fill-opacity: .8;","}",".blocklyAngleMarks {","  stroke: #444;","  stroke-width: 1;","}",".blocklyAngleGauge {",
"  fill: #f88;","  fill-opacity: .8;  ","}",".blocklyAngleLine {","  stroke: #f00;","  stroke-width: 2;","  stroke-linecap: round;","}",".blocklyContextMenu {","  border-radius: 4px;","}",".blocklyDropdownMenu {","  padding: 0 !important;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;","}",".blocklyToolboxDiv {","  background-color: #ec8fa1;",
"  display: none;","  overflow-x: visible;","  overflow-y: auto;","  position: absolute;","}",".blocklyTreeRoot {","  padding: 4px 0;","}",".blocklyTreeRoot:focus {","  outline: none;","}",".blocklyTreeRow {","  line-height: 28px;","  height: 28px;","  padding-right: 1em;","  white-space: nowrap;","}",'.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',"  padding-right: 0;","  padding-left: 1em !important;","}",".blocklyTreeRow:hover {","  background-color: #f7d0d8;","}",".blocklyTreeSeparator {","  height: 0px;",
"  border-bottom: solid #e5e5e5 1px;","  margin: 5px 0;","}",".blocklyTreeIcon {","  height: 16px;","  width: 16px;","  vertical-align: middle;","  background-image: url(<<<PATH>>>/sprites.png);","}",".blocklyTreeIconClosedLtr {","  background-position: -32px -1px;","}",".blocklyTreeIconClosedRtl {","  background-position: 0px -1px;","}",".blocklyTreeIconO {","  background-position: -16px -1px;","}",".blocklyTreeSelected>.blocklyTreeIconClosedLtr {","  background-position: -32px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconClosedRtl {",
"  background-position: 0px -17px;","}",".blocklyTreeSelected>.blocklyTreeIconO {","  background-position: -16px -17px;","}",".blocklyTreeIconNone,",".blocklyTreeSelected>.blocklyTreeIconNone {","  background-position: -48px -1px;","}",".blocklyTreeLabel {","  cursor: default;"," color: #fff;",'  font-family: "O Sans", sans-serif;',"\t font-weight: 400;","  font-size: 18px;","  padding: 0 3px;","  vertical-align: middle;","}",".blocklyTreeSelected  {","  background-color: #dd3858 !important;","}",
".blocklyTreeSelected .blocklyTreeLabel {","  color: #fff;","}",".blocklyWidgetDiv .goog-palette {","  outline: none;","  cursor: default;","}",".blocklyWidgetDiv .goog-palette-table {","  border: 1px solid #666;","  border-collapse: collapse;","}",".blocklyWidgetDiv .goog-palette-cell {","  height: 13px;","  width: 15px;","  margin: 0;","  border: 0;","  text-align: center;","  vertical-align: middle;","  border-right: 1px solid #666;","  font-size: 1px;","}",".blocklyWidgetDiv .goog-palette-colorswatch {",
"  position: relative;","  height: 13px;","  width: 15px;","  border: 1px solid #666;","}",".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {","  border: 1px solid #FFF;","}",".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {","  border: 1px solid #000;","  color: #fff;","}",".blocklyWidgetDiv .goog-menu {","  background: #fff;","  border-color: #ccc #666 #666 #ccc;","  border-style: solid;","  border-width: 1px;","  cursor: default;","  font: normal 13px Arial, sans-serif;",
"  margin: 0;","  outline: none;","  padding: 4px 0;","  position: absolute;","  z-index: 20000;","}",".blocklyWidgetDiv .goog-menuitem {","  color: #000;","  font: normal 13px Arial, sans-serif;","  list-style: none;","  margin: 0;","  padding: 4px 7em 4px 28px;","  white-space: nowrap;","}",".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {","  padding-left: 7em;","  padding-right: 28px;","}",".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,",".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {",
"  padding-left: 12px;","}",".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {","  padding-right: 20px;","}",".blocklyWidgetDiv .goog-menuitem-content {","  color: #000;","  font: normal 13px Arial, sans-serif;","}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {","  color: #ccc !important;","}",".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {","  opacity: 0.3;","  -moz-opacity: 0.3;","  filter: alpha(opacity=30);",
"}",".blocklyWidgetDiv .goog-menuitem-highlight,",".blocklyWidgetDiv .goog-menuitem-hover {","  background-color: #d6e9f8;","  border-color: #d6e9f8;","  border-style: dotted;","  border-width: 1px 0;","  padding-bottom: 3px;","  padding-top: 3px;","}",".blocklyWidgetDiv .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-menuitem-icon {","  background-repeat: no-repeat;","  height: 16px;","  left: 6px;","  position: absolute;","  right: auto;","  vertical-align: middle;","  width: 16px;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,",
".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {","  left: auto;","  right: 6px;","}",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,",".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {","  background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;","}",".blocklyWidgetDiv .goog-menuitem-accel {","  color: #999;","  direction: ltr;","  left: auto;","  padding: 0 6px;","  position: absolute;","  right: 0;","  text-align: right;","}",".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {",
"  left: 0;","  right: auto;","  text-align: left;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {","  text-decoration: underline;","}",".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {","  color: #999;","  font-size: 12px;","  padding-left: 4px;","}",".blocklyWidgetDiv .goog-menuseparator {","  border-top: 1px solid #ccc;","  margin: 4px 0;","  padding: 0;","}",""];/*

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
function ul(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,h=!1,k=!1,m=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Og(c))):c=null,m=c,c=Boolean(m&&m.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),h=a.comments,void 0===h&&(h=c),k=a.disable,void 0===k&&(k=c);var p=a.scrollbars;void 0===p&&(p=c);var x=a.sounds;void 0===x&&(x=!0);var w=!!a.realtime,E=w?a.realtimeOptions:void 0;
q=!!a.rtl;wa=e;va=h;xa=k;z=b;Aa=a.maxBlocks||Infinity;a.media?ph=a.media:a.path&&(ph=a.path+"media/");Ba=c;Ca=p;sa=d;Da=x;ua=m;ya=w;za=E}
function sl(a){a.setAttribute("dir","LTR");pe=q;pl();var b=u("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=u("defs",{},b),d,e;d=u("filter",{id:"blocklyEmboss"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=u("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
u("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);u("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);u("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=u("filter",{id:"blocklyTrashcanShadowFilter"},c);u("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);u("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=u("feMerge",{},d);u("feMergeNode",{"in":"offsetBlur"},d);u("feMergeNode",{"in":"SourceGraphic"},
d);d=u("filter",{id:"blocklyShadowFilter"},c);u("feGaussianBlur",{stdDeviation:2},d);c=u("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);u("rect",{width:10,height:10,fill:"#aaa"},c);u("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);B=new Ch(wl,xl);b.appendChild(B.H());B.ci=Aa;z||(Ba?B.ab=new Xj(b,a):(B.V=new Sh,c=B.V,d=c.H(),c.Ce=!1,bd(d)),Ca||yl(function(){if(0==ac){var a=B.Ic(),b=a.Kb+a.Ab,c=a.Xc+a.Bb;if(a.Wb<c||a.Wb+a.Cb>a.bb+c||a.uc<(q?a.Kb:
b)||a.uc+a.Pd>(q?a.Ea:a.Ea+b))for(var d=Ka(B,!1),e=0,w;w=d[e];e++){var E=w.na(),A=Uh(w),J=c+25-A.height-E.y;0<J&&w.moveBy(0,J);J=c+a.bb-25-E.y;0>J&&w.moveBy(0,J);J=25+b-E.x-(q?0:A.width);0<J&&w.moveBy(J,0);J=b+a.Ea-25-E.x+(q?A.width:0);0>J&&w.moveBy(J,0)}}}));b.appendChild(Ci());a.appendChild(b);ta=b;jk();Tf=D("div","blocklyWidgetDiv");Tf.style.direction=q?"rtl":"ltr";document.body.appendChild(Tf)}
function tl(){v(ta,"mousedown",null,zl);v(ta,"contextmenu",null,Al);v(Tf,"contextmenu",null,Al);Ea||(v(window,"resize",document,jk),v(document,"keydown",null,Bl),document.addEventListener("mouseup",Cl,!1),Lb&&v(window,"orientationchange",document,function(){lh(window,"resize")}),Ea=!0);if(ua)if(B.ab)B.ab.g();else if(B.V){B.V.g(B);B.V.show(ua.childNodes);B.scrollX=B.V.R;q&&(B.scrollX*=-1);var a="translate("+B.scrollX+", 0)";B.aa.setAttribute("transform",a);B.pe.setAttribute("transform",a)}Ca&&(B.Tc=
new th(B),B.Tc.resize());Eh();if(Da){Dl([ph+"click.mp3",ph+"click.wav",ph+"click.ogg"],"click");Dl([ph+"delete.mp3",ph+"delete.ogg",ph+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)y(b.pop());for(var a in El){var d=El[a];d.volume=.01;d.play();d.pause();if(Lb||Kb)break}};b.push(v(document,"mousemove",null,a));b.push(v(document,"touchstart",null,a))}};/*

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
var Tf=null,Ii=null,Fl=null;function Qf(a,b){Yk();Ii=a;Fl=b;Tf.style.display="block"}function Yk(){Ii&&(Tf.style.display="none",Fl&&Fl(),Fl=Ii=null,Zb(Tf))}function Rf(a){Ii==a&&Yk()}function Uf(a,b,c,d){b<d.y&&(b=d.y);q?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);Tf.style.left=a+"px";Tf.style.top=b+"px"};/*

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
function Gl(a,b,c,d){this.h=null;this.Oa=Number(c);this.R=Number(b);this.Ia={height:this.Oa+10,width:this.R};this.Sa=d||"";this.ta=u("g",{},null);this.cg=u("image",{height:this.Oa+"px",width:this.R+"px",y:-12},this.ta);this.ra(a);Eb&&(this.yg=u("rect",{height:this.Oa+"px",width:this.R+"px",y:-12,"fill-opacity":0},this.ta))}n(Gl,Tb);f=Gl.prototype;f.clone=function(){return new Gl(this.pv(),this.R,this.Oa,this.pb())};f.yg=null;f.Id=!1;
f.g=function(a){this.h||(this.h=a,a.W().appendChild(this.ta),a=this.yg||this.cg,a.ub=this.h,Di(a))};f.m=function(){Vb(this.ta);this.yg=this.cg=this.ta=null};f.i=function(a){(this.yg||this.cg).ub=a};f.Na=function(){return this.Et};f.ra=function(a){null!==a&&(this.Et=a,this.cg.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l(a)?a:""))};f.qa=function(a){null!==a&&(this.Sa=a)};f.ke=function(){};/*

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
function Kl(a){this.Xr=Jl(a,"clientId");this.Ti=Il.userId;document.getElementById(Jl(a,"authButtonElementId"));document.getElementById(Jl(a,"authDivElementId"))}Kl.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function Ll(a,b,c,d){function e(c){gapi.Ec.La.files.fg({resource:{mimeType:b,title:a,parents:[{id:c}]}}).jd(d)}function h(){function a(b){gapi.Ec.La.vt.fg({fileId:"appdata",resource:{key:"folderId",value:b}}).jd(function(){e(b)})}function b(){gapi.Ec.La.files.fg({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).jd(function(b){a(b.id)})}gapi.Ec.La.vt.get({fileId:"appdata",propertyKey:"folderId"}).jd(function(d){if(d.error)c?b():a("root");else{var h=d.result.value;gapi.Ec.La.files.get({fileId:h}).jd(function(a){a.error||
a.labels.Hv?b():e(h)})}})}gapi.Ec.load("drive","v2",function(){h()})}function Ml(a){this.Qk=Jl(a,"onFileLoaded");this.bt=Jl(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.Dk=Jl(a,"initializeModel");this.al=Jl(a,"registerTypes",function(){});this.Aj=Jl(a,"afterAuth",function(){});this.Sr=Jl(a,"autoCreate",!1);this.ls=Jl(a,"defaultTitle","New Realtime File");this.ks=Jl(a,"defaultFolderTitle","");this.Bj=Jl(a,"afterCreate",function(){});this.oh=new Kl(a)}
function Nl(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Il=Hl();for(var e in b)gapi.La.nc.load(b[e],a.Qk,a.Dk,a.Ak)}Ml.prototype.start=function(){var a=this;this.oh.start(function(){a.al&&a.al();a.Aj&&a.Aj();a.load()})};
Ml.prototype.Ak=function(a){a.type!=gapi.La.nc.Yi.av&&(a.type==gapi.La.nc.Yi.Tt?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.La.nc.Yi.Eu&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
Ml.prototype.load=function(){var a=Il.fileIds;a&&(a=a.split(","));var b=this.oh.Ti,b=Il.state;if(a)for(var c in a)gapi.La.nc.load(a[c],this.Qk,this.Dk,this.Ak);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.tv;b=d.Ti;Nl(this,a,b);return}}this.Sr&&Ol(this)}};function Ol(a){Ll(a.ls,a.bt,a.ks,function(b){b.id?(a.Bj&&a.Bj(b.id),Nl(a,[b.id],a.oh.Ti)):(console.error("Error creating file."),console.error(b))})};/*

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
var Gh,Pl,Fh=!1,Ql=null,Ri=null,Rl=null,Sl=null,Ti=null,Vi=!1,Tl=null,Ul=null,Vl=null;function Wl(a){var b=a.rs;a=a.rs.length;for(var c=0;c<a;c++){var d=b[c];if(!d.Rs){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Wk?Xl(function(){Yl(e,!1);Zl(e)}):"relativeX"!=d.Wk&&"relativeY"!=d.Wk||Xl(function(){e.ul||Yl(e,!1);Zl(e)}))}}}function $l(a){if(!a.Rs){var b=a.newValue;b?Yl(b,!a.oldValue):(b=a.oldValue,am(b))}}function Xl(a){if(Vi)a();else try{Vi=!0,a()}finally{Vi=!1}}
function Yl(a,b){Xl(function(){var c=Og(a.Ui).firstChild;if(c=Qg(B,c,!0))b&&c.t.Be(c),(b||xb(Gh,c))&&Zl(c)})}function Zl(a){if(!isNaN(a.zg)&&!isNaN(a.Ag)){var b=Mi().width,c=a.na(),d=a.zg-c.x;a.moveBy(q?b-d:d,a.Ag-c.y)}}function am(a){Xl(function(){a.m(!0,!0,!0)})}function hk(a){if(a.t==B&&Fh&&!Vi){a=fi(a);var b=a.na(),c=!1,d=Lg(a);d.setAttribute("id",a.id);var e=D("xml");e.appendChild(d);d=Ng(e);d!=a.Ui&&(c=!0,a.Ui=d);if(a.zg!=b.x||a.Ag!=b.y)a.zg=b.x,a.Ag=b.y,c=!0;c&&Ti.set(a.id.toString(),a)}}
function bm(a,b){gapi.Ec.La.Vk.list({fileId:a}).jd(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Av){b(e.domain);break}}})}
var fm={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Ri=a;var b=a.iv();a.Wd().set("blocks",b);b=a.hv();a.Wd().set("topBlocks",b);Ul&&a.Wd().set(Ul,a.jv(Vl))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){Ql=a;a:{for(var b=a.ws(),c=0;c<b.length;c++){var d=b[c];if(d.Ss){Rl=d.Dv;break a}}Rl=void 0}Ri=a.og;Ti=Ri.Wd().get("blocks");Gh=Ri.Wd().get("topBlocks");
Ri.Wd().addEventListener(gapi.La.nc.$g.Fu,Wl);Ti.addEventListener(gapi.La.nc.$g.bv,$l);Sl();a.addEventListener(gapi.La.nc.$g.Ut,cm);a.addEventListener(gapi.La.nc.$g.Vt,dm);em();a=Gh;for(b=0;b<a.length;b++)c=a.get(b),Yl(c,!0)},registerTypes:function(){var a=gapi.La.nc.kv;a.yv(pi,"Block");pi.prototype.id=a.sh("id");pi.prototype.Ui=a.sh("xmlDom");pi.prototype.zg=a.sh("relativeX");pi.prototype.Ag=a.sh("relativeY");a.Ev(pi,pi.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Ec.La.Vk.fg({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.jd(function(c){c.error&&bm(a,function(c){b=gapi.Ec.La.Vk.fg({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.jd(function(){})})})}};function gm(){var a=za,b=Jl(a,"chatbox");b&&(Ul=Jl(b,"elementId"),Vl=Jl(b,"initText",G.Gl));fm.Xr=Jl(a,"clientId");Pl=Jl(a,"collabElementId")}
function vl(a,b){gm();Fh=!0;hm(b);Sl=function(){a();if(Ul){var b=Ri.Wd().get(Ul),d=document.getElementById(Ul);gapi.La.nc.mv.fv(b,d);d.disabled=!1}};Tl=new Ml(fm);Tl.start()}
function hm(a){a.style.background="url("+ph+"progress.gif) no-repeat center center";var b=wd(a),c=D("div");c.id=fm.authDivElementId;var d=D("p",null,G.El);c.appendChild(d);d=D("button",null,"Authorize");d.id=fm.dv;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=wd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function em(){if(Pl){var a;a=Pl;a=l(a)?document.getElementById(a):a;Zb(a);for(var b=Ql.ws(),c=0;c<b.length;c++){var d=b[c],e=D("img",{src:d.xv||ph+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.Ss?" ("+G.Qp+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function cm(){em()}function dm(){em()}function oi(a){var b=Rl+"-"+a;return Ti.has(b)?oi("-"+a):b};/*

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
var ph="https://blockly-demo.appspot.com/static/media/",nh=64,oh=92,qh="sprites.png",$h=[,2,1,4,3],El=Object.create(null),Jh=null,z=!1,Xh=null,Yh=null,oj=5,gi=20,ci=250,ik=30,B=null,im=null,ac=0,jm=null;function Mi(){return{width:ta.Gj,height:ta.Fj}}function jk(){var a=ta,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Gj!=c&&(a.setAttribute("width",c+"px"),a.Gj=c);a.Fj!=b&&(a.setAttribute("height",b+"px"),a.Fj=b);B.Tc&&B.Tc.resize()}
function zl(a){jk();lj();gg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!z&&Jh&&b&&Kh();a.target==ta&&$b(a)?km(a):(z||b)&&B.Tc&&(B.Fh=!0,B.Li=a.clientX,B.Mi=a.clientY,B.Gt=B.Ic(),B.It=B.scrollX,B.Jt=B.scrollY,"mouseup"in wk&&(jm=v(document,"mouseup",null,Cl)),Fa=v(document,"mousemove",null,lm))}function Cl(){ih(nk.OPEN);B.Fh=!1;jm&&(y(jm),jm=null);Fa&&(y(Fa),Fa=null)}
function lm(a){if(B.Fh){Bh();var b=B.Gt,c=B.It+(a.clientX-B.Li),d=B.Jt+(a.clientY-B.Mi),c=Math.min(c,-b.uc),d=Math.min(d,-b.Wb),c=Math.max(c,b.Ea-b.uc-b.Pd),d=Math.max(d,b.bb-b.Wb-b.Cb);B.Tc.set(-c-b.uc,-d-b.Wb);a.stopPropagation()}}
function Bl(a){if(!hh(a))if(27==a.keyCode)gg();else if(8==a.keyCode||46==a.keyCode)try{Jh&&Jh.Sd&&!z&&(gg(),Jh.m(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(Jh&&Jh.Sd&&!z&&Jh.mc&&!z&&Jh.t==B&&(gg(),67==a.keyCode?mm():88==a.keyCode&&(mm(),Jh.m(!0,!0))),86==a.keyCode&&im){a=B;var b=im;if(!(b.getElementsByTagName("block").length>=Ma(a))){var c=Qg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){q&&(d=-d);do for(var e=
!1,h=a.hb(),k=0,m;m=h[k];k++)m=m.na(),1>=Math.abs(d-m.x)&&1>=Math.abs(b-m.y)&&(d=q?d-gi:d+gi,b+=2*gi,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function lj(){fk&&(y(fk),fk=null);gk&&(y(gk),gk=null);var a=Jh;if(2==ac&&a){var b=a.na();ji(a,b.x-a.ql,b.y-a.rl);delete a.Lf;ok(a,!1);a.F();rg(a.Ua,ci,a);lh(window,"resize");a.t.Fb()}ac=0;ih(nk.OPEN);nj()}function mm(){var a=Jh,b=Lg(a);Xg(b);a=a.na();b.setAttribute("x",q?-a.x:a.x);b.setAttribute("y",a.y);im=b}
function km(a){if(!z){var b=[];if(wa){for(var c=!1,d=!1,e=Ka(B,!1),h=0;h<e.length;h++)for(var k=e[h];k;)k.isCollapsed()?c=!0:d=!0,k=Mg(k);d={enabled:d};d.text=G.Hl;d.cb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.Ad.bind(c,!0),a),c=Mg(c),a+=10};b.push(d);c={enabled:c};c.text=G.Nm;c.cb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.Ad.bind(c,!1),a),c=Mg(c),a+=10};b.push(c)}ek.show(a,b)}}function Al(a){hh(a)||a.preventDefault()}
function gg(a){Hi();Yk();!a&&B.ab&&B.ab.V&&B.ab.V.Ce&&B.ab.mf.Rb(null)}function Bh(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function hh(a){return"textarea"==a.target.type||"text"==a.target.type}
function Dl(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var h=a[e],k=h.match(/\.(\w+)$/);if(k&&d.canPlayType("audio/"+k[1])){c=new window.Audio(h);break}}c&&c.play&&(El[b]=c)}}function lk(a,b){var c=El[a];c&&(c=Rb&&9===Rb||Lb||Jb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function wl(){var a=Mi();B.ab&&(a.width-=B.ab.width);var b=a.width-kh,c=a.height-kh;try{var d=B.aa.getBBox()}catch(e){return null}if(B.Tc)var h=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),k=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else h=d.x,b=h+d.width,k=d.y,c=k+d.height;d=0;!q&&B.ab&&(d=B.ab.width);return{bb:a.height,Ea:a.width,Cb:c-k,Pd:b-h,Xc:-B.scrollY,Kb:-B.scrollX,Wb:k,uc:h,Bb:0,Ab:d}}
function xl(a){if(!B.Tc)throw"Attempt to set main workspace scroll without scrollbars.";var b=wl();ga(a.x)&&(B.scrollX=-b.Pd*a.x-b.uc);ga(a.y)&&(B.scrollY=-b.Cb*a.y-b.Wb);a="translate("+(B.scrollX+b.Ab)+","+(B.scrollY+b.Bb)+")";B.aa.setAttribute("transform",a);B.pe.setAttribute("transform",a)}function kk(a){a()}function yl(a){return v(B.aa,"blocklyWorkspaceChange",null,a)}g.Blockly||(g.Blockly={});g.Blockly.getMainWorkspace=function(){return B};g.Blockly.addChangeListener=yl;
g.Blockly.removeChangeListener=function(a){y(a)};G.ov={};G.Dl="Add Comment";G.El="Please authorize this app to enable your work to be saved and to allow it to be shared by you.";G.Fl="Change value:";G.Gl="Chat with your collaborator by typing in this box!";G.Hl="Collapse Blocks";G.Il="Collapse Block";G.Jl="colour 1";G.Kl="colour 2";G.Ll="http://meyerweb.com/eric/tools/color-blend/";G.Ml="ratio";G.Nl="blend";G.Ol="Blends two colours together with a given ratio (0.0 - 1.0).";G.Pl="https://en.wikipedia.org/wiki/Color";G.Ql="Choose a colour from the palette.";
G.Rl="http://randomcolour.com";G.Sl="random colour";G.Tl="Choose a colour at random.";G.Ul="blue";G.Vl="green";G.Wl="http://www.december.com/html/spec/colorper.html";G.Xl="red";G.Yl="colour with";G.Zl="Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";G.$l="https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";G.am="break out of loop";G.bm="continue with next iteration of loop";G.cm="Break out of the containing loop.";G.dm="Skip the rest of this loop, and continue with the next iteration.";
G.em="Warning: This block may only be used within a loop.";G.fm="https://github.com/google/blockly/wiki/Loops#for-each for each block";G.hm="in list";G.Vi="";G.im="for each item";G.jm="For each item in a list, set the variable '%1' to the item, and then do some statements.";G.lm="https://github.com/google/blockly/wiki/Loops#count-with";G.nm="from %1 to %2 by %3";G.om="count with";G.pm="Have the variable %1 take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
G.rm="Add a condition to the if block.";G.tm="Add a final, catch-all condition to the if block.";G.um="https://github.com/google/blockly/wiki/IfElse";G.wm="Add, remove, or reorder sections to reconfigure this if block.";G.Ug="else";G.Vg="else if";G.Wg="if";G.xm="If a value is true, then do some statements.";G.ym="If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";G.zm="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
G.Am="If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";G.Yg="https://en.wikipedia.org/wiki/For_loop";G.Zc="do";G.Bm="repeat %1 times";G.Wi="repeat";G.Xi="times";G.Zg="Do some statements several times.";G.Cm="https://github.com/google/blockly/wiki/Loops#repeat";G.Em="repeat until";G.Fm="repeat while";G.Gm="While a value is false, then do some statements.";
G.Hm="While a value is true, then do some statements.";G.Im="Delete Block";G.Jm="Delete %1 Blocks";G.Km="Disable Block";G.Lm="Duplicate";G.Mm="Enable Block";G.Nm="Expand Blocks";G.Om="Expand Block";G.Pm="External Inputs";G.Rm="Help";G.Sm="Inline Inputs";G.Vm="https://en.wikipedia.org/wiki/Linked_list#Empty_lists";G.Zi="create empty list";G.Wm="Returns a list, of length 0, containing no data records";G.Xm="list";G.Ym="Add, remove, or reorder sections to reconfigure this list block.";G.Zm="create list with";
G.an="Add an item to the list.";G.bn="Create a list with any number of items.";G.$i="first";G.aj="# from end";G.bj="#";G.cn="get";G.dn="get and remove";G.cj="last";G.dj="random";G.hn="remove";G.bh="";G.Wt="Returns the first item in a list.";G.Xt="Returns the item at the specified position in a list. #1 is the last item.";G.Yt="Returns the item at the specified position in a list. #1 is the first item.";G.Zt="Returns the last item in a list.";G.$t="Returns a random item in a list.";G.au="Removes and returns the first item in a list.";
G.bu="Removes and returns the item at the specified position in a list. #1 is the last item.";G.cu="Removes and returns the item at the specified position in a list. #1 is the first item.";G.du="Removes and returns the last item in a list.";G.fu="Removes and returns a random item in a list.";G.gu="Removes the first item in a list.";G.iu="Removes the item at the specified position in a list. #1 is the last item.";G.ju="Removes the item at the specified position in a list. #1 is the first item.";
G.ku="Removes the last item in a list.";G.lu="Removes a random item in a list.";G.mu="to # from end";G.nu="to #";G.ou="to last";G.jn="https://github.com/google/blockly/wiki/Lists#getting-a-sublist";G.pu="get sub-list from first";G.qu="get sub-list from # from end";G.su="get sub-list from #";G.dh="";G.ln="Creates a copy of the specified portion of a list.";G.mn="find first occurrence of item";G.ej="https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";G.on="find last occurrence of item";
G.pn="Returns the index of the first/last occurrence of the item in the list. Returns 0 if text is not found.";G.uf="in list";G.qn="https://github.com/google/blockly/wiki/Lists#is-empty";G.rn="%1 is empty";G.sn="https://github.com/google/blockly/wiki/Lists#length-of";G.tn="length of %1";G.un="Returns the length of a list.";G.vn="https://github.com/google/blockly/wiki/Lists#create-list-with";G.wn="create list with item %1 repeated %2 times";G.xn="Creates a list consisting of the given value repeated the specified number of times.";
G.yn="https://github.com/google/blockly/wiki/Lists#in-list--set";G.An="as";G.Bn="insert at";G.Cn="set";G.uu="Inserts the item at the start of a list.";G.vu="Inserts the item at the specified position in a list. #1 is the last item.";G.wu="Inserts the item at the specified position in a list. #1 is the first item.";G.xu="Append the item to the end of a list.";G.yu="Inserts the item randomly in a list.";G.zu="Sets the first item in a list.";G.Au="Sets the item at the specified position in a list. #1 is the last item.";
G.Bu="Sets the item at the specified position in a list. #1 is the first item.";G.Cu="Sets the last item in a list.";G.Du="Sets a random item in a list.";G.Dn="Returns true if the list is empty.";G.En="false";G.Fn="https://github.com/google/blockly/wiki/Logic#values";G.Gn="Returns either true or false.";G.Hn="true";G.In="https://en.wikipedia.org/wiki/Inequality_(mathematics)";G.Jn="Return true if both inputs equal each other.";G.Kn="Return true if the first input is greater than the second input.";
G.Ln="Return true if the first input is greater than or equal to the second input.";G.Mn="Return true if the first input is smaller than the second input.";G.Nn="Return true if the first input is smaller than or equal to the second input.";G.On="Return true if both inputs are not equal to each other.";G.Pn="https://github.com/google/blockly/wiki/Logic#not";G.Qn="not %1";G.Rn="Returns true if the input is false. Returns false if the input is true.";G.Sn="null";G.Tn="https://en.wikipedia.org/wiki/Nullable_type";
G.Un="Returns null.";G.Vn="and";G.Wn="https://github.com/google/blockly/wiki/Logic#logical-operations";G.Xn="or";G.Yn="Return true if both inputs are true.";G.Zn="Return true if at least one of the inputs is true.";G.$n="test";G.ao="https://en.wikipedia.org/wiki/%3F:";G.bo="if false";G.co="if true";G.eo="Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";G.io="+";G.jo="https://en.wikipedia.org/wiki/Arithmetic";G.lo="Return the sum of the two numbers.";
G.mo="Return the quotient of the two numbers.";G.no="Return the difference of the two numbers.";G.oo="Return the product of the two numbers.";G.po="Return the first number raised to the power of the second number.";G.qo="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";G.so="by";G.to="change";G.vo="Add a number to variable '%1'.";G.wo="https://en.wikipedia.org/wiki/Mathematical_constant";G.xo="Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
G.yo="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";G.zo="constrain %1 low %2 high %3";G.Ao="Constrain a number to be between the specified limits (inclusive).";G.Bo="\u00f7";G.Co="is divisible by";G.Do="is even";G.Eo="is negative";G.Fo="is odd";G.Go="is positive";G.Ho="is prime";G.Io="Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";G.Jo="is whole";G.Ko="https://en.wikipedia.org/wiki/Modulo_operation";
G.Lo="remainder of %1 \u00f7 %2";G.Mo="Return the remainder from dividing the two numbers.";G.No="\u00d7";G.Oo="https://en.wikipedia.org/wiki/Number";G.Po="A number.";G.Qo="";G.Ro="average of list";G.So="max of list";G.To="median of list";G.Uo="min of list";G.Vo="modes of list";G.Wo="random item of list";G.Xo="standard deviation of list";G.Yo="sum of list";G.Zo="Return the average (arithmetic mean) of the numeric values in the list.";G.$o="Return the largest number in the list.";G.ap="Return the median number in the list.";
G.bp="Return the smallest number in the list.";G.cp="Return a list of the most common item(s) in the list.";G.dp="Return a random element from the list.";G.ep="Return the standard deviation of the list.";G.fp="Return the sum of all the numbers in the list.";G.gp="^";G.hp="https://en.wikipedia.org/wiki/Random_number_generation";G.ip="random fraction";G.jp="Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";G.kp="https://en.wikipedia.org/wiki/Random_number_generation";G.lp="random integer from %1 to %2";
G.mp="Return a random integer between the two specified limits, inclusive.";G.np="https://en.wikipedia.org/wiki/Rounding";G.op="round";G.pp="round down";G.qp="round up";G.rp="Round a number up or down.";G.sp="https://en.wikipedia.org/wiki/Square_root";G.tp="absolute";G.up="square root";G.vp="Return the absolute value of a number.";G.wp="Return e to the power of a number.";G.xp="Return the natural logarithm of a number.";G.yp="Return the base 10 logarithm of a number.";G.zp="Return the negation of a number.";
G.Ap="Return 10 to the power of a number.";G.Bp="Return the square root of a number.";G.Cp="-";G.Dp="acos";G.Ep="asin";G.Fp="atan";G.Gp="cos";G.Hp="https://en.wikipedia.org/wiki/Trigonometric_functions";G.Ip="sin";G.Jp="tan";G.Kp="Return the arccosine of a number.";G.Lp="Return the arcsine of a number.";G.Mp="Return the arctangent of a number.";G.Np="Return the cosine of a degree (not radian).";G.Op="Return the sine of a degree (not radian).";G.Pp="Return the tangent of a degree (not radian).";
G.Qp="Me";G.gj="New variable...";G.Rp="New variable name:";G.bc="";G.Yp="allow statements";G.Zp="with:";G.ij="";G.$p="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.jj="Run the user-defined function '%1'.";G.bq="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.kj="Run the user-defined function '%1' and use its output.";G.lj="with:";G.cq="Create '%1'";G.mj="";G.dq="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.nj="do something";G.oj="to";
G.eq="Creates a function with no output.";G.fq="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";G.xe="return";G.iq="Creates a function with an output.";G.jq="Warning: This function has duplicate parameters.";G.kq="Highlight function definition";G.lq="If a value is true, then return a second value.";G.mq="Warning: This block may be used only within a function definition.";G.nq="input name:";G.oq="Add an input to the function.";G.pq="inputs";G.qq="Add, remove, or reorder inputs to this function.";
G.rq="Remove Comment";G.pj="Rename variable...";G.sq="Rename all '%1' variables to:";G.yq="append text";G.zq="https://github.com/google/blockly/wiki/Text#text-modification";G.Aq="to";G.Bq="Append some text to variable '%1'.";G.Dq="https://github.com/google/blockly/wiki/Text#adjusting-text-case";G.Eq="to lower case";G.Fq="to Title Case";G.Gq="to UPPER CASE";G.Hq="Return a copy of the text in a different case.";G.Iq="get first letter";G.Jq="get letter # from end";G.Kq="get letter #";G.Lq="https://github.com/google/blockly/wiki/Text#extracting-text";
G.Mq="in text";G.Nq="get last letter";G.Oq="get random letter";G.qj="";G.Pq="Returns the letter at the specified position.";G.Rq="Add an item to the text.";G.Sq="join";G.Tq="Add, remove, or reorder sections to reconfigure this text block.";G.Vu="to letter # from end";G.Wu="to letter #";G.Xu="to last letter";G.Uq="https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";G.Vq="in text";G.Yu="get substring from first letter";G.Zu="get substring from letter # from end";G.$u="get substring from letter #";
G.Af="";G.Wq="Returns a specified portion of the text.";G.Xq="https://github.com/google/blockly/wiki/Text#finding-text";G.Yq="in text";G.Zq="find first occurrence of text";G.$q="find last occurrence of text";G.rj="";G.cr="Returns the index of the first/last occurrence of first text in the second text. Returns 0 if text is not found.";G.dr="https://github.com/google/blockly/wiki/Text#checking-for-empty-text";G.er="%1 is empty";G.gr="Returns true if the provided text is empty.";G.hr="https://github.com/google/blockly/wiki/Text#text-creation";
G.ir="create text with";G.jr="Create a piece of text by joining together any number of items.";G.kr="https://github.com/google/blockly/wiki/Text#text-modification";G.lr="length of %1";G.nr="Returns the number of letters (including spaces) in the provided text.";G.or="https://github.com/google/blockly/wiki/Text#printing-text";G.pr="print %1";G.qr="Print the specified text, number or other value.";G.sj="https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";G.tj="Prompt for user for a number.";
G.uj="Prompt for user for some text.";G.vj="prompt for number with message";G.wj="prompt for text with message";G.rr="https://en.wikipedia.org/wiki/String_(computer_science)";G.ur="A letter, word, or line of text.";G.vr="https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";G.wr="trim spaces from both sides of";G.xr="trim spaces from left side of";G.yr="trim spaces from right side of";G.zr="Return a copy of the text with spaces removed from one or both ends.";G.Ld="item";G.Br="Create 'set %1'";
G.Cr="https://github.com/google/blockly/wiki/Variables#get";G.Er="";G.Fr="";G.Gr="Returns the value of this variable.";G.gh="Create 'get %1'";G.Hr="https://github.com/google/blockly/wiki/Variables#set";G.Jr="to";G.Kr="set";G.Lr="Sets this variable to be equal to the input.";G.hq=G.oj;G.kn=G.uf;G.zn=G.uf;G.gq=G.nj;G.Ir=G.Ld;G.$m=G.Ld;G.uo=G.Ld;G.Dr=G.Ld;G.Uu=G.mj;G.fn=G.ej;G.Qq=G.Ld;G.Xg=G.Zc;G.nn=G.uf;G.aq=G.ij;G.gn=G.uf;G.mm=G.Zc;G.gm=G.Zc;G.vm=G.Wg;G.Dm=G.Zc;G.qm=G.Vg;G.Cq=G.Ld;G.sm=G.Ug;var nm={};function om(a,b){var c;c=a.className;for(var d=c=l(c)&&c.match(/\S+/g)||[],e=Cb(arguments,1),h=0;h<e.length;h++)xb(d,e[h])||d.push(e[h]);a.className=c.join(" ")};var pm={ace:"\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",af:"Afrikaans",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",az:"Az\u0259rbaycanca","be-tarask":"Tara\u0161kievica",br:"Brezhoneg",ca:"Catal\u00e0",cdo:"\u95a9\u6771\u8a9e",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",fi:"Suomi",fo:"F\u00f8royskt",fr:"Fran\u00e7ais",frr:"Frasch",gl:"Galego",hak:"\u5ba2\u5bb6\u8a71",
he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hrx:"Hunsrik",hu:"Magyar",ia:"Interlingua",id:"Bahasa Indonesia",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",km:"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",ko:"\ud55c\uad6d\uc5b4",ksh:"Ripoar\u0117sch",ky:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",la:"Latine",lb:"L\u00ebtzebuergesch",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",mg:"Malagasy",ml:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
mk:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",mr:"\u092e\u0930\u093e\u0920\u0940",ms:"Bahasa Melayu",mzn:"\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",nb:"Norsk Bokm\u00e5l",nl:"Nederlands, Vlaams",oc:"Lenga d'\u00f2c",pa:"\u092a\u0902\u091c\u093e\u092c\u0940",pl:"Polski",pms:"Piemont\u00e8is",ps:"\u067e\u069a\u062a\u0648",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sco:"Scots",si:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
sk:"Sloven\u010dina",sr:"\u0421\u0440\u043f\u0441\u043a\u0438",sv:"Svenska",sw:"Kishwahili",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",tl:"Tagalog",tlh:"tlhIngan Hol",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",vi:"Ti\u1ebfng Vi\u1ec7t","zh-hans":"\u7c21\u9ad4\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},qm="ace ar fa he mzn ps".split(" "),rm=window.BlocklyGamesLang,sm=window.BlocklyGamesLanguages,tm=!!window.location.pathname.match(/\.html$/);
function um(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var vm,wm=Number(um("level","NaN"));vm=isNaN(wm)?1:Math.min(Math.max(1,wm),10);
function xm(){document.title=document.getElementById("title").textContent;document.head.parentElement.setAttribute("dir",-1!=qm.indexOf(rm)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",rm);for(var a=[],b=0;b<sm.length;b++){var c=sm[b];a.push([pm[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==rm&&(e.selected=!0);d.options.add(e)}1>=d.options.length&&
(d.style.display="none");for(b=1;10>=b;b++)a=document.getElementById("level"+b),c=!!ym(b),a&&c&&om(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(zm,1)}function ym(a){var b=Am,c;try{c=window.localStorage[b+a]}catch(d){}return c}
function U(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}function Bm(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}
function zm(){if(!tm){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var V={Td:null,g:function(){xm();var a=document.getElementById("linkButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=U("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=U("Games_linkAlert"),BlocklyStorage.HASH_ERROR=U("Games_hashError"),BlocklyStorage.XML_ERROR=U("Games_xmlError"),BlocklyStorage.alert=nm.Kt,a&&Bm(a,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",V.Wr,!0)},Ps:function(a){document.body.innerHTML=
a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";rl(a,{media:"media/",readOnly:!0,Bv:-1!=qm.indexOf(rm),scrollbars:!1});a=um("xml","");V.Ci("<xml>"+a+"</xml>")},Ws:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.Lk}catch(d){}c&&delete window.sessionStorage.Lk;var e=ym(vm),h=b&&ym(vm-1);(c=c||e||h||a)&&V.Ci(c)}},Ci:function(a){V.Td?V.Td.setValue(a,
-1):(a=Og(a),Pg(B,a))},Bt:function(){if(void 0!=typeof ra&&window.localStorage){var a=Am+vm;if(V.Td)var b=V.Td.getValue();else b=Kg(B),b=Ng(b);window.localStorage[a]=b}},dg:function(){window.location=(tm?"index.html":"./")+"?lang="+rm},Wr:function(){if(window.sessionStorage){if(V.Td)var a=V.Td.getValue();else a=Kg(B),a=Ng(a);window.sessionStorage.Lk=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+
a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},Sh:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Ih(a)},Lt:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},ec:function(a){if("click"==a.type&&"touchend"==V.ec.pi&&V.ec.oi+2E3>Date.now()||V.ec.pi==a.type&&V.ec.oi+400>Date.now())return a.preventDefault(),a.stopPropagation(),
!0;V.ec.pi=a.type;V.ec.oi=Date.now();return!1}};V.ec.pi=null;V.ec.oi=0;V.Ns=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
V.Os=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=V;V.setCode=V.Ci;var W={Mc:!1,kk:null,Jf:null,oe:function(a,b,c,d,e,h){function k(){W.Mc&&(m.style.visibility="visible",m.style.zIndex=10,p.style.visibility="hidden")}W.Mc&&W.ic(!1);gg(!0);W.Mc=!0;W.kk=b;W.Jf=h;var m=document.getElementById("dialog");h=document.getElementById("dialogShadow");var p=document.getElementById("dialogBorder"),x;for(x in e)m.style[x]=e[x];d&&(h.style.visibility="visible",h.style.opacity=.3,h.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",m.appendChild(d),W.Bh=v(d,"mousedown",
null,W.ns));m.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(W.lg(b,!1,.2),W.lg(m,!0,.8),setTimeout(k,175)):k()},lk:0,nk:0,ns:function(a){W.Eh();if(!$b(a)){var b=document.getElementById("dialog");W.lk=b.offsetLeft-a.clientX;W.nk=b.offsetTop-a.clientY;W.Dh=v(document,"mouseup",null,W.Eh);W.Ch=v(document,"mousemove",null,W.os);a.stopPropagation()}},os:function(a){var b=document.getElementById("dialog"),c=W.lk+a.clientX;a=W.nk+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},Eh:function(){W.Dh&&(y(W.Dh),W.Dh=null);W.Ch&&(y(W.Ch),W.Ch=null)},ic:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(W.Mc){W.Eh();W.Bh&&(y(W.Bh),W.Bh=null);W.Mc=!1;W.Jf&&W.Jf();W.Jf=null;var c=!1===a?null:W.kk;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(W.lg(a,!1,.8),W.lg(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},lg:function(a,b,c){function d(){e.style.width=h.width+"px";e.style.height=h.height+"px";e.style.left=h.x+"px";e.style.top=h.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),h=W.vs(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},vs:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Sf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Kt:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");W.oe(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},W.Ni);W.Ki()},zj:function(){if(!ym(vm))if(W.Mc||0!=pi.nv)setTimeout(W.zj,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",W.ic,!0);b.addEventListener("touchend",W.ic,!0);b=document.getElementById("abortOk");b.addEventListener("click",V.dg,!0);b.addEventListener("touchend",V.dg,
!0);W.oe(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",W.yj,!0)});document.body.addEventListener("keydown",W.yj,!0)}},Yr:function(){var a=document.getElementById("dialogDone");if(B){var b=document.getElementById("dialogLinesText");b.textContent="";var c=fl(),c=V.Lt(c),c=c.split("\n").length;document.getElementById("containerCode").innerHTML="<p>Five new shirts unlocked!</p><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/>";
c=1==c?U("Games_linesOfCode1"):U("Games_linesOfCode2").replace("%1",c);b.appendChild(document.createTextNode(c))}c=10>vm?U("Games_nextLevel").replace("%1",vm+1):U("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",W.ic,!0);b.addEventListener("touchend",W.ic,!0);b=document.getElementById("doneOk");b.addEventListener("click",V.ei,!0);b.addEventListener("touchend",V.ei,!0);W.oe(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
W.Pj,!0)});document.body.addEventListener("keydown",W.Pj,!0);document.getElementById("dialogDoneText").textContent=c},jk:function(a){!W.Mc||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(W.ic(!0),a.stopPropagation(),a.preventDefault())},Ki:function(){document.body.addEventListener("keydown",W.jk,!0)},Ni:function(){document.body.removeEventListener("keydown",W.jk,!0)},Pj:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)W.ic(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&V.ei()},
yj:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)W.ic(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&V.dg()}};window.BlocklyDialogs=W;W.hideDialog=W.ic;var Cm,X,Dm,Y,Em,Fm,Gm,Hm;
function Im(){function a(a){for(var b=0;5>b;b++)Z(a),Jm(144)}switch(vm){case 1:for(var b=0;4>b;b++)Z(100),Jm(90);break;case 2:for(b=0;5>b;b++)Z(100),Jm(72);break;case 3:Km("#ffff00");a(100);break;case 4:Km("#ffff00");a(50);Lm(!1);Z(150);Lm(!0);Z(20);break;case 5:Km("#ffff00");for(b=0;4>b;b++)Lm(!1),Z(150),Jm(90),Lm(!0),a(50);break;case 6:Km("#ffff00");for(b=0;3>b;b++)Lm(!1),Z(150),Jm(120),Lm(!0),a(50);Lm(!1);Jm(-90);Z(100);Lm(!0);Km("#ffffff");Z(50);break;case 7:Km("#ffff00");for(b=0;3>b;b++)Lm(!1),
Z(150),Jm(120),Lm(!0),a(50);Lm(!1);Jm(-90);Z(100);Lm(!0);Km("#ffffff");for(b=0;4>b;b++)Z(50),Z(-50),Jm(45);break;case 8:Km("#ffff00");for(b=0;3>b;b++)Lm(!1),Z(150),Jm(120),Lm(!0),a(50);Lm(!1);Jm(-90);Z(100);Lm(!0);Km("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Jm(1);break;case 9:Km("#ffff00");for(b=0;3>b;b++)Lm(!1),Z(150),Jm(120),Lm(!0),a(50);Lm(!1);Jm(-90);Z(100);Lm(!0);Km("#ffffff");for(b=0;360>b;b++)Z(50),Z(-50),Jm(1);Jm(120);Z(20);Km("#000000");for(b=0;360>b;b++)Z(50),Z(-50),Jm(1)}}
function Mm(a){if(10==vm)return 1<B.hb().length;console.log("Pixel errors: "+a);return 100<a?!1:2>=vm&&3<B.hb().length||3==vm&&4<B.hb().length?(a=document.getElementById("helpUseLoop"),W.oe(a,null,!1,!0,{width:"30%",left:"35%",top:"12em"},W.Ni),W.Ki(),!1):!0};function Nm(a,b,c,d,e){this.Um=b-12;this.Jd=a+8;this.ah=a+c-8;this.cd=20;this.Da=.5;this.Jj=e;this.nh=[];e=document.createElementNS(Om,"line");e.setAttribute("class","sliderTrack");e.setAttribute("x1",a);e.setAttribute("y1",b);e.setAttribute("x2",a+c);e.setAttribute("y2",b);d.appendChild(e);e=document.createElementNS(Om,"rect");e.setAttribute("style","opacity: 0");e.setAttribute("x",a-this.cd);e.setAttribute("y",b-this.cd);e.setAttribute("width",c+2*this.cd);e.setAttribute("height",2*this.cd);e.setAttribute("rx",
this.cd);e.setAttribute("ry",this.cd);d.appendChild(e);this.Ot=e;a=document.createElementNS(Om,"path");a.setAttribute("class","sliderKnob");a.setAttribute("d","m 0,0 l -8,8 v 12 h 16 v -12 z");d.appendChild(a);this.Ik=a;a=document.createElementNS(Om,"circle");a.setAttribute("style","opacity: 0");a.setAttribute("r",this.cd);a.setAttribute("cy",b);d.appendChild(a);this.Zh=a;for(this.ra(.5);d&&"svg"!=d.nodeName.toLowerCase();)d=d.parentNode;this.bd=d;Pm(this.Zh,"mousedown",this,this.Hk);Pm(this.Zh,"touchstart",
this,this.Hk);Pm(this.Ot,"mousedown",this,this.wt);Pm(this.bd,"mouseup",null,Qm);Pm(this.bd,"touchend",null,Qm);Pm(this.bd,"mousemove",null,Rm);Pm(this.bd,"touchmove",null,Rm);Pm(document,"mouseover",null,Sm)}var Om="http://www.w3.org/2000/svg",Tm=null,Um=0,Vm=0;Nm.prototype.Hk=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Wm(a)}Tm=this;Um=Xm(this,a).x;Vm=0;var b=this.Ik.getAttribute("transform");b&&(b=b.match(/translate\(\s*([-\d.]+)/))&&(Vm=Number(b[1]));a.preventDefault()};
function Qm(){Tm=null}function Sm(a){if(Tm){a=a.target;do if(a==Tm.bd)return;while(a=a.parentNode);Tm=null}}function Rm(a){var b=Tm;if(b){if("touchmove"==a.type){if(1!=a.changedTouches.length)return;Wm(a)}a=Xm(b,a).x-Um+Vm;b.ra((a-b.Jd)/(b.ah-b.Jd))}}Nm.prototype.wt=function(a){if("touchstart"==a.type){if(1!=a.changedTouches.length)return;Wm(a)}a=Xm(this,a).x;Ym(this,(a-this.Jd)/(this.ah-this.Jd))};Nm.prototype.Na=function(){return this.Da};
function Ym(a,b){function c(c){return function(){a.ra(c*(b-d)/9+d)}}for(;a.nh.length;)clearTimeout(a.nh.pop());for(var d=a.Na(),e=0;10>e;e++)a.nh.push(setTimeout(c(e),200*e/10))}Nm.prototype.ra=function(a){this.Da=Math.min(Math.max(a,0),1);a=this.Jd+(this.ah-this.Jd)*this.Da;this.Ik.setAttribute("transform","translate("+a+","+this.Um+")");this.Zh.setAttribute("cx",a);this.Jj&&this.Jj(this.Da)};
function Xm(a,b){var c=a.bd.createSVGPoint();c.x=b.clientX;c.y=b.clientY;var d=a.bd.getScreenCTM().inverse();return c.matrixTransform(d)}function Pm(a,b,c,d){a.addEventListener(b,function(a){d.apply(c,arguments)},!1)}function Wm(a){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY};/*

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
var S=new el("JavaScript");kl("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
S.ac=0;S.X=1;S.Qu=1;S.P=2;S.Ou=3;S.Lu=3;S.yf=4;S.Hu=4;S.Su=4;S.zf=4;S.Ru=4;S.Tu=4;S.Mu=4;S.Vp=5;S.xf=5;S.we=5;S.eh=6;S.Xp=6;S.Ju=7;S.Wp=8;S.Nu=8;S.Pu=8;S.hj=9;S.Gu=10;S.Ku=11;S.Iu=12;S.Sp=13;S.Tp=14;S.wf=15;S.ad=16;S.xa=17;S.S=99;S.g=function(a){S.Rd=Object.create(null);S.vk=Object.create(null);S.ga?S.ga.reset():S.ga=new Ga(S.fh);var b=[];a=$f(a);for(var c=0;c<a.length;c++)b[c]="var "+S.ga.getName(a[c],"VARIABLE")+";";S.Rd.variables=b.join("\n")};
S.finish=function(a){var b=[],c;for(c in S.Rd)b.push(S.Rd[c]);return b.join("\n\n")+"\n\n\n"+a};S.hl=function(a){return a+";\n"};S.Yk=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
S.xi=function(a,b){var c="";if(!a.G||!a.G.w){var d=a.Qf();d&&(c+=hl(d,"// ")+"\n");for(var e=0;e<a.T.length;e++)if(1==a.T[e].type){var h=H(a.T[e].s);if(h){for(var d=[],h=h.Nb(),k=0;k<h.length;k++){var m=h[k].Qf();m&&d.push(m)}d.length&&d.push("");(d=d.join("\n"))&&(c+=hl(d,"// "))}}}e=gl(S,a.C&&H(a.C));return c+b+e};/*

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
S.Vs={};S.lists_create_empty=function(){return["[]",S.ac]};S.lists_create_with=function(a){for(var b=Array(a.oa),c=0;c<a.oa;c++)b[c]=T(a,"ADD"+c,S.xa)||"null";b="["+b.join(", ")+"]";return[b,S.ac]};S.lists_repeat=function(a){var b=ll("lists_repeat",["function "+S.Ka+"(value, n) {","  var array = [];","  for (var i = 0; i < n; i++) {","    array[i] = value;","  }","  return array;","}"]),c=T(a,"ITEM",S.xa)||"null";a=T(a,"NUM",S.xa)||"0";return[b+"("+c+", "+a+")",S.P]};
S.lists_length=function(a){return[(T(a,"VALUE",S.P)||"[]")+".length",S.X]};S.lists_isEmpty=function(a){return["!"+(T(a,"VALUE",S.X)||"[]")+".length",S.yf]};S.lists_indexOf=function(a){var b="FIRST"==O(a,"END")?"indexOf":"lastIndexOf",c=T(a,"FIND",S.S)||"''";return[(T(a,"VALUE",S.X)||"[]")+"."+b+"("+c+") + 1",S.X]};
S.lists_getIndex=function(a){var b=O(a,"MODE")||"GET",c=O(a,"WHERE")||"FROM_START",d=T(a,"AT",S.zf)||"1";a=T(a,"VALUE",S.X)||"[]";if("FIRST"==c){if("GET"==b)return[a+"[0]",S.X];if("GET_REMOVE"==b)return[a+".shift()",S.X];if("REMOVE"==b)return a+".shift();\n"}else if("LAST"==c){if("GET"==b)return[a+".slice(-1)[0]",S.X];if("GET_REMOVE"==b)return[a+".pop()",S.X];if("REMOVE"==b)return a+".pop();\n"}else if("FROM_START"==c){d=xk(d)?parseFloat(d)-1:d+" - 1";if("GET"==b)return[a+"["+d+"]",S.X];if("GET_REMOVE"==
b)return[a+".splice("+d+", 1)[0]",S.P];if("REMOVE"==b)return a+".splice("+d+", 1);\n"}else if("FROM_END"==c){if("GET"==b)return[a+".slice(-"+d+")[0]",S.P];if("GET_REMOVE"==b||"REMOVE"==b){c=ll("lists_remove_from_end",["function "+S.Ka+"(list, x) {","  x = list.length - x;","  return list.splice(x, 1)[0];","}"]);d=c+"("+a+", "+d+")";if("GET_REMOVE"==b)return[d,S.P];if("REMOVE"==b)return d+";\n"}}else if("RANDOM"==c){c=ll("lists_get_random_item",["function "+S.Ka+"(list, remove) {","  var x = Math.floor(Math.random() * list.length);",
"  if (remove) {","    return list.splice(x, 1)[0];","  } else {","    return list[x];","  }","}"]);d=c+"("+a+", "+("GET"!=b)+")";if("GET"==b||"GET_REMOVE"==b)return[d,S.P];if("REMOVE"==b)return d+";\n"}throw"Unhandled combination (lists_getIndex).";};
S.lists_setIndex=function(a){function b(){if(c.match(/^\w+$/))return"";var a=Ha(S.ga,"tmp_list"),b="var "+a+" = "+c+";\n";c=a;return b}var c=T(a,"LIST",S.X)||"[]",d=O(a,"MODE")||"GET",e=O(a,"WHERE")||"FROM_START",h=T(a,"AT",S.S)||"1";a=T(a,"TO",S.ad)||"null";if("FIRST"==e){if("SET"==d)return c+"[0] = "+a+";\n";if("INSERT"==d)return c+".unshift("+a+");\n"}else if("LAST"==e){if("SET"==d)return e=b(),e+(c+"["+c+".length - 1] = "+a+";\n");if("INSERT"==d)return c+".push("+a+");\n"}else if("FROM_START"==
e){h=xk(h)?parseFloat(h)-1:h+" - 1";if("SET"==d)return c+"["+h+"] = "+a+";\n";if("INSERT"==d)return c+".splice("+h+", 0, "+a+");\n"}else if("FROM_END"==e){e=b();if("SET"==d)return e+=c+"["+c+".length - "+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+c+".length - "+h+", 0, "+a+");\n"}else if("RANDOM"==e){e=b();h=Ha(S.ga,"tmp_x");e+="var "+h+" = Math.floor(Math.random() * "+c+".length);\n";if("SET"==d)return e+=c+"["+h+"] = "+a+";\n";if("INSERT"==d)return e+=c+".splice("+h+", 0, "+a+");\n"}throw"Unhandled combination (lists_setIndex).";
};
S.lists_getSublist=function(a){var b=T(a,"LIST",S.X)||"[]",c=O(a,"WHERE1"),d=O(a,"WHERE2"),e=T(a,"AT1",S.S)||"1";a=T(a,"AT2",S.S)||"1";return["FIRST"==c&&"LAST"==d?b+".concat()":ll("lists_get_sublist",["function "+S.Ka+"(list, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = list.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = list.length - 1;","    } else {",
"      throw 'Unhandled option (lists_getSublist).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return list.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",S.P]};/*

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
S.Rt={};S.variables_get=function(a){return[S.ga.getName(O(a,"VAR"),"VARIABLE"),S.ac]};S.variables_set=function(a){var b=T(a,"VALUE",S.ad)||"0";return S.ga.getName(O(a,"VAR"),"VARIABLE")+" = "+b+";\n"};/*

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
S.text={};S.text=function(a){return[S.Yk(O(a,"TEXT")),S.ac]};S.text_join=function(a){var b;if(0==a.oa)return["''",S.ac];if(1==a.oa)return b=T(a,"ADD0",S.S)||"''",["String("+b+")",S.P];if(2==a.oa)return b=T(a,"ADD0",S.S)||"''",a=T(a,"ADD1",S.S)||"''",["String("+b+") + String("+a+")",S.eh];b=Array(a.oa);for(var c=0;c<a.oa;c++)b[c]=T(a,"ADD"+c,S.xa)||"''";b="["+b.join(",")+"].join('')";return[b,S.P]};
S.text_append=function(a){var b=S.ga.getName(O(a,"VAR"),"VARIABLE");a=T(a,"TEXT",S.S)||"''";return b+" = String("+b+") + String("+a+");\n"};S.text_length=function(a){return[(T(a,"VALUE",S.P)||"''")+".length",S.X]};S.text_isEmpty=function(a){return["!"+(T(a,"VALUE",S.X)||"''"),S.yf]};S.text_indexOf=function(a){var b="FIRST"==O(a,"END")?"indexOf":"lastIndexOf",c=T(a,"FIND",S.S)||"''";return[(T(a,"VALUE",S.X)||"''")+"."+b+"("+c+") + 1",S.X]};
S.text_charAt=function(a){var b=O(a,"WHERE")||"FROM_START",c=T(a,"AT",S.zf)||"1";a=T(a,"VALUE",S.X)||"''";switch(b){case "FIRST":return[a+".charAt(0)",S.P];case "LAST":return[a+".slice(-1)",S.P];case "FROM_START":return c=xk(c)?parseFloat(c)-1:c+" - 1",[a+".charAt("+c+")",S.P];case "FROM_END":return[a+".slice(-"+c+").charAt(0)",S.P];case "RANDOM":return b=ll("text_random_letter",["function "+S.Ka+"(text) {","  var x = Math.floor(Math.random() * text.length);","  return text[x];","}"])+"("+a+")",[b,
S.P]}throw"Unhandled option (text_charAt).";};
S.text_getSubstring=function(a){var b=T(a,"STRING",S.X)||"''",c=O(a,"WHERE1"),d=O(a,"WHERE2"),e=T(a,"AT1",S.S)||"1";a=T(a,"AT2",S.S)||"1";return["FIRST"==c&&"LAST"==d?b:ll("text_get_substring",["function "+S.Ka+"(text, where1, at1, where2, at2) {","  function getAt(where, at) {","    if (where == 'FROM_START') {","      at--;","    } else if (where == 'FROM_END') {","      at = text.length - at;","    } else if (where == 'FIRST') {","      at = 0;","    } else if (where == 'LAST') {","      at = text.length - 1;",
"    } else {","      throw 'Unhandled option (text_getSubstring).';","    }","    return at;","  }","  at1 = getAt(where1, at1);","  at2 = getAt(where2, at2) + 1;","  return text.slice(at1, at2);","}"])+"("+b+", '"+c+"', "+e+", '"+d+"', "+a+")",S.P]};
S.text_changeCase=function(a){var b={UPPERCASE:".toUpperCase()",LOWERCASE:".toLowerCase()",TITLECASE:null}[O(a,"CASE")];b?(a=T(a,"TEXT",S.X)||"''",a+=b):(b=ll("text_toTitleCase",["function "+S.Ka+"(str) {","  return str.replace(/\\S+/g,","      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});","}"]),a=T(a,"TEXT",S.S)||"''",a=b+"("+a+")");return[a,S.P]};
S.text_trim=function(a){var b={LEFT:".trimLeft()",RIGHT:".trimRight()",BOTH:".trim()"}[O(a,"MODE")];return[(T(a,"TEXT",S.X)||"''")+b,S.P]};S.text_print=function(a){return"window.alert("+(T(a,"TEXT",S.S)||"''")+");\n"};S.text_prompt=function(a){var b="window.prompt("+S.Yk(O(a,"TEXT"))+")";"NUMBER"==O(a,"TYPE")&&(b="parseFloat("+b+")");return[b,S.P]};S.text_prompt_ext=function(a){var b="window.prompt("+(T(a,"TEXT",S.S)||"''")+")";"NUMBER"==O(a,"TYPE")&&(b="parseFloat("+b+")");return[b,S.P]};/*

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
S.Nj={};S.colour_picker=function(a){return["'"+O(a,"COLOUR")+"'",S.ac]};S.colour_random=function(){return[ll("colour_random",["function "+S.Ka+"() {","  var num = Math.floor(Math.random() * Math.pow(2, 24));","  return '#' + ('00000' + num.toString(16)).substr(-6);","}"])+"()",S.P]};
S.colour_rgb=function(a){var b=T(a,"RED",S.xa)||0,c=T(a,"GREEN",S.xa)||0;a=T(a,"BLUE",S.xa)||0;return[ll("colour_rgb",["function "+S.Ka+"(r, g, b) {","  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;","  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;","  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;","  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);","  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);","  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);","  return '#' + r + g + b;",
"}"])+"("+b+", "+c+", "+a+")",S.P]};
S.colour_blend=function(a){var b=T(a,"COLOUR1",S.xa)||"'#000000'",c=T(a,"COLOUR2",S.xa)||"'#000000'";a=T(a,"RATIO",S.xa)||.5;return[ll("colour_blend",["function "+S.Ka+"(c1, c2, ratio) {","  ratio = Math.max(Math.min(Number(ratio), 1), 0);","  var r1 = parseInt(c1.substring(1, 3), 16);","  var g1 = parseInt(c1.substring(3, 5), 16);","  var b1 = parseInt(c1.substring(5, 7), 16);","  var r2 = parseInt(c2.substring(1, 3), 16);","  var g2 = parseInt(c2.substring(3, 5), 16);","  var b2 = parseInt(c2.substring(5, 7), 16);",
"  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);","  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);","  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);","  r = ('0' + (r || 0).toString(16)).slice(-2);","  g = ('0' + (g || 0).toString(16)).slice(-2);","  b = ('0' + (b || 0).toString(16)).slice(-2);","  return '#' + r + g + b;","}"])+"("+b+", "+c+", "+a+")",S.P]};/*

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
C.Rt={};C.variables_get={g:function(){this.p=G.Cr;this.j(330);N(N(N(Q(this),G.Fr),new dg(G.Dr),"VAR"),G.Er);K(this,!0);this.i(G.Gr);this.Rj=G.Br;this.Sj="variables_set"},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},Db:function(a){var b={enabled:!0},c=O(this,"VAR");b.text=this.Rj.replace("%1",c);c=D("field",null,c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type",this.Sj);b.cb=ek.Ef(this,c);a.push(b)}};
C.variables_set={g:function(){this.p=G.Hr;this.j(330);this.Aa(G.Kr+" %1 "+G.Jr+" %2",["VAR",new dg(G.Ir)],["VALUE",null,1],1);L(this,!0);M(this,!0);this.i(G.Lr);this.Rj=G.gh;this.Sj="variables_get"},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},Db:C.variables_get.Db};/*

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
C.Nj={};C.colour_picker={g:function(){this.p=G.Pl;this.j(20);N(Q(this),new Tk("#ff0000"),"COLOUR");K(this,!0,"Colour");this.i(G.Ql)}};C.colour_random={g:function(){this.p=G.Rl;this.j(20);N(Q(this),G.Sl);K(this,!0,"Colour");this.i(G.Tl)}};C.colour_rgb={g:function(){this.p=G.Wl;this.j(20);N(N(Qi(P(this,"RED").v("Number"),1),G.Yl),G.Xl);N(Qi(P(this,"GREEN").v("Number"),1),G.Vl);N(Qi(P(this,"BLUE").v("Number"),1),G.Ul);K(this,!0,"Colour");this.i(G.Zl)}};
C.colour_blend={g:function(){this.p=G.Ll;this.j(20);N(N(Qi(P(this,"COLOUR1").v("Colour"),1),G.Nl),G.Jl);N(Qi(P(this,"COLOUR2").v("Colour"),1),G.Kl);N(Qi(P(this,"RATIO").v("Number"),1),G.Ml);K(this,!0,"Colour");this.i(G.Ol)}};/*

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
C.Ys={};C.controls_repeat={g:function(){this.p=G.Yg;this.j(120);N(N(N(Q(this),G.Wi),new Zk("10",dl),"TIMES"),G.Xi);N($i(this,3,"DO"),G.Zc);L(this,!0);M(this,!0);this.i(G.Zg)}};C.controls_repeat_ext={g:function(){this.p=G.Yg;this.j(120);this.Aa(G.Bm,["TIMES","Number",1],1);N($i(this,3,"DO"),G.Zc);L(this,!0);M(this,!0);Sg(this,!0);this.i(G.Zg)}};
C.controls_whileUntil={g:function(){var a=[[G.Fm,"WHILE"],[G.Em,"UNTIL"]];this.p=G.Cm;this.j(120);N(P(this,"BOOL").v("Boolean"),new F(a),"MODE");N($i(this,3,"DO"),G.Dm);L(this,!0);M(this,!0);var b=this;this.i(function(){var a=O(b,"MODE");return{WHILE:G.Hm,UNTIL:G.Gm}[a]})}};
C.controls_for={g:function(){this.p=G.lm;this.j(120);N(N(Q(this),G.om),new dg(null),"VAR");this.Aa(G.nm,["FROM","Number",1],["TO","Number",1],["BY","Number",1],1);N($i(this,3,"DO"),G.mm);L(this,!0);M(this,!0);Sg(this,!0);var a=this;this.i(function(){return G.pm.replace("%1",O(a,"VAR"))})},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},Db:function(a){if(!this.isCollapsed()){var b={enabled:!0},c=O(this,"VAR");b.text=G.gh.replace("%1",c);c=D("field",null,
c);c.setAttribute("name","VAR");c=D("block",null,c);c.setAttribute("type","variables_get");b.cb=ek.Ef(this,c);a.push(b)}}};C.controls_forEach={g:function(){this.p=G.fm;this.j(120);N(N(N(P(this,"LIST").v("Array"),G.im),new dg(null),"VAR"),G.hm);G.Vi&&(N(Q(this),G.Vi),Sg(this,!0));N($i(this,3,"DO"),G.gm);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.jm.replace("%1",O(a,"VAR"))})},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")},Db:C.controls_for.Db};
C.controls_flow_statements={g:function(){var a=[[G.am,"BREAK"],[G.bm,"CONTINUE"]];this.p=G.$l;this.j(120);N(Q(this),new F(a),"FLOW");L(this,!0);var b=this;this.i(function(){var a=O(b,"FLOW");return{BREAK:G.cm,CONTINUE:G.dm}[a]})},onchange:function(){if(this.t){var a=!1,b=this;do{if("controls_repeat"==b.type||"controls_repeat_ext"==b.type||"controls_forEach"==b.type||"controls_for"==b.type||"controls_whileUntil"==b.type){a=!0;break}b=Wi(b)}while(b);a?this.Dd(null):this.Dd(G.em)}}};/*

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
S.Zs={};S.math_number=function(a){return[parseFloat(O(a,"NUM")),S.ac]};S.math_arithmetic=function(a){var b={ADD:[" + ",S.eh],MINUS:[" - ",S.Xp],MULTIPLY:[" * ",S.Vp],DIVIDE:[" / ",S.xf],POWER:[null,S.xa]}[O(a,"OP")],c=b[0],b=b[1],d=T(a,"A",b)||"0";a=T(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",S.P]};
S.math_single=function(a){var b=O(a,"OP"),c;if("NEG"==b)return a=T(a,"NUM",S.zf)||"0","-"==a[0]&&(a=" "+a),["-"+a,S.zf];a="SIN"==b||"COS"==b||"TAN"==b?T(a,"NUM",S.xf)||"0":T(a,"NUM",S.S)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,S.P];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,S.xf]};
S.math_constant=function(a){return{PI:["Math.PI",S.X],E:["Math.E",S.X],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",S.xf],SQRT2:["Math.SQRT2",S.X],SQRT1_2:["Math.SQRT1_2",S.X],INFINITY:["Infinity",S.ac]}[O(a,"CONSTANT")]};
S.math_number_property=function(a){var b=T(a,"NUMBER_TO_CHECK",S.we)||"0",c=O(a,"PROPERTY"),d;if("PRIME"==c)return d=ll("math_isPrime",["function "+S.Ka+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,S.P];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=T(a,"DIVISOR",S.we)||"0",d=b+" % "+a+" == 0"}return[d,S.hj]};
S.math_change=function(a){var b=T(a,"DELTA",S.eh)||"0";a=S.ga.getName(O(a,"VAR"),"VARIABLE");return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};S.math_round=S.math_single;S.math_trig=S.math_single;
S.math_on_list=function(a){var b=O(a,"OP");switch(b){case "SUM":a=T(a,"LIST",S.X)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=T(a,"LIST",S.xa)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=T(a,"LIST",S.xa)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=ll("math_mean",["function "+S.Ka+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=T(a,"LIST",S.S)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=ll("math_median",
["function "+S.Ka+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=T(a,"LIST",S.S)||"[]";a=b+"("+a+")";break;case "MODE":b=ll("math_modes",["function "+S.Ka+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=T(a,"LIST",S.S)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=ll("math_standard_deviation",["function "+S.Ka+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=T(a,"LIST",S.S)||"[]";a=b+"("+a+")";break;case "RANDOM":b=ll("math_random_list",["function "+S.Ka+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=T(a,"LIST",S.S)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,S.P]};S.math_modulo=function(a){var b=T(a,"DIVIDEND",S.we)||"0";a=T(a,"DIVISOR",S.we)||"0";return[b+" % "+a,S.we]};
S.math_constrain=function(a){var b=T(a,"VALUE",S.xa)||"0",c=T(a,"LOW",S.xa)||"0";a=T(a,"HIGH",S.xa)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",S.P]};S.math_random_int=function(a){var b=T(a,"FROM",S.xa)||"0";a=T(a,"TO",S.xa)||"0";return[ll("math_random_int",["function "+S.Ka+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",S.P]};
S.math_random_float=function(){return["Math.random()",S.P]};/*

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
C.text={};C.text={g:function(){this.p=G.rr;this.j(160);N(N(N(Q(this),this.ge(!0)),new Zk(""),"TEXT"),this.ge(!1));K(this,!0,"String");this.i(G.ur)},ge:function(a){return new Gl(ph+(a==q?"quote1.png":"quote0.png"),12,12,'"')}};
C.text_join={g:function(){this.p=G.hr;this.j(160);this.oa=2;this.qc();K(this,!0,"String");this.le(new Qh(["text_create_join_item"]));this.i(G.jr)},Qa:function(){var a=document.createElement("mutation");a.setAttribute("items",this.oa);return a},Wa:function(a){this.oa=parseInt(a.getAttribute("items"),10);this.qc()},Qd:function(a){var b=hc(a,"text_create_join_container");b.za();for(var c=I(b,"STACK").s,d=0;d<this.oa;d++){var e=hc(a,"text_create_join_item");e.za();Wg(c,e.K);c=e.C}return b},Od:function(a){a=
bj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.se,a=a.C&&H(a.C),c++;this.oa=c;this.qc();for(c=0;c<this.oa;c++)b[c]&&Wg(I(this,"ADD"+c).s,b[c])},cf:function(a){a=bj(a,"STACK");for(var b=0;a;){var c=I(this,"ADD"+b);a.se=c&&c.s.w;b++;a=a.C&&H(a.C)}},qc:function(){if(I(this,"EMPTY"))R(this,"EMPTY");else for(var a=0;I(this,"ADD"+a);)R(this,"ADD"+a),a++;if(0==this.oa)N(N(Q(this,"EMPTY"),new Gl(ph+"quote0.png",12,12,'"')),new Gl(ph+"quote1.png",12,12,'"'));else for(a=0;a<this.oa;a++){var b=P(this,"ADD"+a);0==
a&&N(b,G.ir)}}};C.text_create_join_container={g:function(){this.j(160);N(Q(this),G.Sq);$i(this,3,"STACK");this.i(G.Tq);this.contextMenu=!1}};C.text_create_join_item={g:function(){this.j(160);N(Q(this),G.Qq);L(this,!0);M(this,!0);this.i(G.Rq);this.contextMenu=!1}};
C.text_append={g:function(){this.p=G.zq;this.j(160);N(N(N(P(this,"TEXT"),G.Aq),new dg(G.Cq),"VAR"),G.yq);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.Bq.replace("%1",O(a,"VAR"))})},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")}};C.text_length={g:function(){this.p=G.kr;this.j(160);this.Aa(G.lr,["VALUE",["String","Array"],1],1);K(this,!0,"Number");this.i(G.nr)}};
C.text_isEmpty={g:function(){this.p=G.dr;this.j(160);this.Aa(G.er,["VALUE",["String","Array"],1],1);K(this,!0,"Boolean");this.i(G.gr)}};C.text_indexOf={g:function(){var a=[[G.Zq,"FIRST"],[G.$q,"LAST"]];this.p=G.Xq;this.j(160);K(this,!0,"Number");N(P(this,"VALUE").v("String"),G.Yq);N(P(this,"FIND").v("String"),new F(a),"END");G.rj&&N(Q(this),G.rj);Sg(this,!0);this.i(G.cr)}};
C.text_charAt={g:function(){this.ye=[[G.Kq,"FROM_START"],[G.Jq,"FROM_END"],[G.Iq,"FIRST"],[G.Nq,"LAST"],[G.Oq,"RANDOM"]];this.p=G.Lq;this.j(160);K(this,!0,"String");N(P(this,"VALUE").v("String"),G.Mq);Q(this,"AT");Sg(this,!0);this.ea(!0);this.i(G.Pq)},Qa:function(){var a=document.createElement("mutation");a.setAttribute("at",1==I(this,"AT").type);return a},Wa:function(a){a="false"!=a.getAttribute("at");this.ea(a)},ea:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.bc&&
N(Q(this,"ORDINAL"),G.bc)):Q(this,"AT");G.qj&&(R(this,"TAIL",!0),N(Q(this,"TAIL"),G.qj));var b=new F(this.ye,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);ic(e,b,"WHERE");return null}});N(I(this,"AT"),b,"WHERE")}};
C.text_getSubstring={g:function(){this.p=G.Uq;this.j(160);N(P(this,"STRING").v("String"),G.Vq);Q(this,"AT1");Q(this,"AT2");G.Af&&N(Q(this,"TAIL"),G.Af);Sg(this,!0);K(this,!0,"String");this.ea(1,!0);this.ea(2,!0);this.i(G.Wq)},Qa:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==I(this,"AT1").type);a.setAttribute("at2",1==I(this,"AT2").type);return a},Wa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ea(1,b);this.ea(2,a)},ea:function(a,
b){R(this,"AT"+a);R(this,"ORDINAL"+a,!0);b?(P(this,"AT"+a).v("Number"),G.bc&&N(Q(this,"ORDINAL"+a),G.bc)):Q(this,"AT"+a);2==a&&G.Af&&(R(this,"TAIL",!0),N(Q(this,"TAIL"),G.Af));var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ea(a,e);ic(h,c,"WHERE"+a);return null}});N(I(this,"AT"+a),c,"WHERE"+a);1==a&&aj(this,"AT1","AT2")}};
C.text_changeCase={g:function(){var a=[[G.Gq,"UPPERCASE"],[G.Eq,"LOWERCASE"],[G.Fq,"TITLECASE"]];this.p=G.Dq;this.j(160);N(P(this,"TEXT").v("String"),new F(a),"CASE");K(this,!0,"String");this.i(G.Hq)}};C.text_trim={g:function(){var a=[[G.wr,"BOTH"],[G.xr,"LEFT"],[G.yr,"RIGHT"]];this.p=G.vr;this.j(160);N(P(this,"TEXT").v("String"),new F(a),"MODE");K(this,!0,"String");this.i(G.zr)}};C.text_print={g:function(){this.p=G.or;this.j(160);this.Aa(G.pr,["TEXT",null,1],1);L(this,!0);M(this,!0);this.i(G.qr)}};
C.text_prompt={g:function(){var a=[[G.wj,"TEXT"],[G.vj,"NUMBER"]],b=this;this.p=G.sj;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});N(N(N(N(Q(this),a,"TYPE"),this.ge(!0)),new Zk(""),"TEXT"),this.ge(!1));K(this,!0,"String");b=this;this.i(function(){return"TEXT"==O(b,"TYPE")?G.uj:G.tj})},ge:C.text.ge};
C.text_prompt_ext={g:function(){var a=[[G.wj,"TEXT"],[G.vj,"NUMBER"]],b=this;this.p=G.sj;this.j(160);a=new F(a,function(a){"NUMBER"==a?b.G.v("Number"):b.G.v("String")});N(P(this,"TEXT"),a,"TYPE");K(this,!0,"String");b=this;this.i(function(){return"TEXT"==O(b,"TYPE")?G.uj:G.tj})}};/*

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
C.ut={};
C.procedures_defnoreturn={g:function(){this.p=G.dq;this.j(290);var a=dc(G.nj,this);N(N(N(Q(this),G.oj),new Zk(a,fc),"NAME"),"","PARAMS");this.le(new Qh(["procedures_mutatorarg"]));this.i(G.eq);this.A=[];this.Cd(!0);this.yb=null},Cd:function(a){this.$f!==a&&(a?(N($i(this,3,"STACK"),G.mj),I(this,"RETURN")&&aj(this,"STACK","RETURN")):R(this,"STACK",!0),this.$f=a)},pf:function(){for(var a=!1,b={},c=0;c<this.A.length;c++){if(b["arg_"+this.A[c].toLowerCase()]){a=!0;break}b["arg_"+this.A[c].toLowerCase()]=!0}a?
this.Dd(G.jq):this.Dd(null);a="";this.A.length&&(a=G.Zp+" "+this.A.join(", "));ic(this,a,"PARAMS")},Qa:function(){for(var a=document.createElement("mutation"),b=0;b<this.A.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}this.$f||a.setAttribute("statements","false");return a},Wa:function(a){this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.pf();this.Cd("false"!==a.getAttribute("statements"))},
Qd:function(a){var b=hc(a,"procedures_mutatorcontainer");b.za();I(this,"RETURN")?ic(b,this.$f?"TRUE":"FALSE","STATEMENTS"):I(b,"STATEMENT_INPUT").O(!1);for(var c=I(b,"STACK").s,d=0;d<this.A.length;d++){var e=hc(a,"procedures_mutatorarg");e.za();ic(e,this.A[d],"NAME");e.wv=d;Wg(c,e.K);c=e.C}kc(O(this,"NAME"),this.t,this.A,null);return b},Od:function(a){this.A=[];this.ki=[];for(var b=bj(a,"STACK");b;)this.A.push(O(b,"NAME")),this.ki.push(b.id),b=b.C&&H(b.C);this.pf();kc(O(this,"NAME"),this.t,this.A,
this.ki);a=O(a,"STATEMENTS");if(null!==a&&(a="TRUE"==a,this.$f!=a))if(a)this.Cd(!0),a=I(this,"STACK").s,a.w||!this.yb||this.yb.w||this.yb.h.t!=this.t?this.yb=null:Wg(a,this.yb);else{a=I(this,"STACK").s;if(this.yb=a.w)a=H(a),a.kb(null),a.Ua();this.Cd(!1)}},m:function(){for(var a=O(this,"NAME"),a=jc(a,this.t),b=0;b<a.length;b++)a[b].m(!0,!1);this.constructor.prototype.m.apply(this,arguments)},Wf:function(){return[O(this,"NAME"),this.A,!1]},hc:function(){return this.A},Qb:function(a,b){for(var c=!1,
d=0;d<this.A.length;d++)Ia(a,this.A[d])&&(this.A[d]=b,c=!0);if(c&&(this.pf(),this.Pb.uv()))for(var c=this.Pb.u.hb(),d=0,e;e=c[d];d++)"procedures_mutatorarg"==e.type&&Ia(a,O(e,"NAME"))&&ic(e,b,"NAME")},Db:function(a){var b={enabled:!0},c=O(this,"NAME");b.text=G.cq.replace("%1",c);var d=D("mutation");d.setAttribute("name",c);for(var e=0;e<this.A.length;e++)c=D("arg"),c.setAttribute("name",this.A[e]),d.appendChild(c);d=D("block",null,d);d.setAttribute("type",this.Hj);b.cb=ek.Ef(this,d);a.push(b);if(!this.isCollapsed())for(e=
0;e<this.A.length;e++)b={enabled:!0},c=this.A[e],b.text=G.gh.replace("%1",c),d=D("field",null,c),d.setAttribute("name","VAR"),d=D("block",null,d),d.setAttribute("type","variables_get"),b.cb=ek.Ef(this,d),a.push(b)},Hj:"procedures_callnoreturn"};
C.procedures_defreturn={g:function(){this.p=G.fq;this.j(290);var a=dc(G.gq,this);N(N(N(Q(this),G.hq),new Zk(a,fc),"NAME"),"","PARAMS");N(Qi(P(this,"RETURN"),1),G.xe);this.le(new Qh(["procedures_mutatorarg"]));this.i(G.iq);this.A=[];this.Cd(!0);this.yb=null},Cd:C.procedures_defnoreturn.Cd,pf:C.procedures_defnoreturn.pf,Qa:C.procedures_defnoreturn.Qa,Wa:C.procedures_defnoreturn.Wa,Qd:C.procedures_defnoreturn.Qd,Od:C.procedures_defnoreturn.Od,m:C.procedures_defnoreturn.m,Wf:function(){return[O(this,
"NAME"),this.A,!0]},hc:C.procedures_defnoreturn.hc,Qb:C.procedures_defnoreturn.Qb,Db:C.procedures_defnoreturn.Db,Hj:"procedures_callreturn"};C.procedures_mutatorcontainer={g:function(){this.j(290);N(Q(this),G.pq);$i(this,3,"STACK");N(N(Q(this,"STATEMENT_INPUT"),G.Yp),new yk("TRUE"),"STATEMENTS");this.i(G.qq);this.contextMenu=!1}};
C.procedures_mutatorarg={g:function(){this.j(290);N(N(Q(this),G.nq),new Zk("x",this.Qt),"NAME");L(this,!0);M(this,!0);this.i(G.oq);this.contextMenu=!1},Qt:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
C.procedures_callnoreturn={g:function(){this.p=G.$p;this.j(290);N(N(N(Q(this),G.ij),"","NAME"),G.lj,"WITH");L(this,!0);M(this,!0);this.A=[];this.Sc=this.wd=null},Vd:function(){return O(this,"NAME")},ti:function(a,b){Ia(a,this.Vd())&&(ic(this,b,"NAME"),this.i((this.G?G.kj:G.jj).replace("%1",b)))},ne:function(a,b){if(b){if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";this.Sc||(this.wd={},this.Sc=a.join("\n")==this.A.join("\n")?b:[]);var c=this.B;this.B=!1;for(var d=
this.A.length-1;0<=d;d--){var e=I(this,"ARG"+d);if(e){var h=e.s.w;this.wd[this.Sc[d]]=h;R(this,"ARG"+d)}}this.A=[].concat(a);this.Sc=b;for(d=0;d<this.A.length;d++)if(e=N(Qi(P(this,"ARG"+d),1),this.A[d]),this.Sc){var k=this.Sc[d];k in this.wd&&(h=this.wd[k],!h||h.w||h.h.t!=this.t?delete this.wd[k]:Wg(e.s,h))}Yi(this,"WITH").O(!!this.A.length);(this.B=c)&&this.F()}else this.wd={},this.Sc=null},Qa:function(){var a=document.createElement("mutation");a.setAttribute("name",this.Vd());for(var b=0;b<this.A.length;b++){var c=
document.createElement("arg");c.setAttribute("name",this.A[b]);a.appendChild(c)}return a},Wa:function(a){var b=a.getAttribute("name");ic(this,b,"NAME");this.i((this.G?G.kj:G.jj).replace("%1",b));if((b=lc(b,this.t))&&b.Pb.J())this.ne(b.A,b.ki);else{this.A=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.A.push(c.getAttribute("name"));this.ne(this.A,this.A)}},Qb:function(a,b){for(var c=0;c<this.A.length;c++)Ia(a,this.A[c])&&(this.A[c]=b,I(this,"ARG"+c).Xa[0].qa(b))},Db:function(a){var b=
{enabled:!0};b.text=G.kq;var c=this.Vd(),d=this.t;b.cb=function(){var a=lc(c,d);a&&a.select()};a.push(b)}};C.procedures_callreturn={g:function(){this.p=G.bq;this.j(290);N(N(N(Q(this),G.aq),"","NAME"),G.lj,"WITH");K(this,!0);this.A=[];this.Sc=this.wd=null},Vd:C.procedures_callnoreturn.Vd,ti:C.procedures_callnoreturn.ti,ne:C.procedures_callnoreturn.ne,Qa:C.procedures_callnoreturn.Qa,Wa:C.procedures_callnoreturn.Wa,Qb:C.procedures_callnoreturn.Qb,Db:C.procedures_callnoreturn.Db};
C.procedures_ifreturn={g:function(){this.p="http://c2.com/cgi/wiki?GuardClause";this.j(290);N(P(this,"CONDITION").v("Boolean"),G.Wg);N(P(this,"VALUE"),G.xe);Sg(this,!0);L(this,!0);M(this,!0);this.i(G.lq);this.Lc=!0},Qa:function(){var a=document.createElement("mutation");a.setAttribute("value",Number(this.Lc));return a},Wa:function(a){this.Lc=1==a.getAttribute("value");this.Lc||(R(this,"VALUE"),N(Q(this,"VALUE"),G.xe))},onchange:function(){if(this.t){var a=!1,b=this;do{if("procedures_defnoreturn"==
b.type||"procedures_defreturn"==b.type){a=!0;break}b=Wi(b)}while(b);a?("procedures_defnoreturn"==b.type&&this.Lc?(R(this,"VALUE"),N(Q(this,"VALUE"),G.xe),this.Lc=!1):"procedures_defreturn"!=b.type||this.Lc||(R(this,"VALUE"),N(P(this,"VALUE"),G.xe),this.Lc=!0),this.Dd(null)):this.Dd(G.mq)}}};/*

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
S.Xs={};S.controls_if=function(a){for(var b=0,c=T(a,"IF"+b,S.S)||"false",d=il(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.gb;b++)c=T(a,"IF"+b,S.S)||"false",d=il(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.Eb&&(d=il(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};S.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[O(a,"OP")],c="=="==b||"!="==b?S.hj:S.Wp,d=T(a,"A",c)||"0";a=T(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
S.logic_operation=function(a){var b="AND"==O(a,"OP")?"&&":"||",c="&&"==b?S.Sp:S.Tp,d=T(a,"A",c);a=T(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};S.logic_negate=function(a){var b=S.yf;return["!"+(T(a,"BOOL",b)||"true"),b]};S.logic_boolean=function(a){return["TRUE"==O(a,"BOOL")?"true":"false",S.ac]};S.logic_null=function(){return["null",S.ac]};
S.logic_ternary=function(a){var b=T(a,"IF",S.wf)||"false",c=T(a,"THEN",S.wf)||"null";a=T(a,"ELSE",S.wf)||"null";return[b+" ? "+c+" : "+a,S.wf]};/*

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
S.ut={};S.procedures_defreturn=function(a){var b=S.ga.getName(O(a,"NAME"),"PROCEDURE"),c=il(a,"STACK");S.Kd&&(c=hl(S.Kd.replace(/%1/g,"'"+a.id+"'"),S.ue)+c);S.tf&&(c=S.tf.replace(/%1/g,"'"+a.id+"'")+c);var d=T(a,"RETURN",S.S)||"";d&&(d="  return "+d+";\n");for(var e=[],h=0;h<a.A.length;h++)e[h]=S.ga.getName(a.A[h],"VARIABLE");c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=S.xi(a,c);S.Rd[b]=c;return null};S.procedures_defnoreturn=S.procedures_defreturn;
S.procedures_callreturn=function(a){for(var b=S.ga.getName(O(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=T(a,"ARG"+d,S.xa)||"null";return[b+"("+c.join(", ")+")",S.P]};S.procedures_callnoreturn=function(a){for(var b=S.ga.getName(O(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.A.length;d++)c[d]=T(a,"ARG"+d,S.xa)||"null";return b+"("+c.join(", ")+");\n"};
S.procedures_ifreturn=function(a){var b="if ("+(T(a,"CONDITION",S.S)||"false")+") {\n";a.Lc?(a=T(a,"VALUE",S.S)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};/*

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
C.Xs={};
C.controls_if={g:function(){this.p=G.um;this.j(210);N(P(this,"IF0").v("Boolean"),G.Wg);N($i(this,3,"DO0"),G.Xg);L(this,!0);M(this,!0);this.le(new Qh(["controls_if_elseif","controls_if_else"]));var a=this;this.i(function(){if(a.gb||a.Eb){if(!a.gb&&a.Eb)return G.ym;if(a.gb&&!a.Eb)return G.zm;if(a.gb&&a.Eb)return G.Am}else return G.xm;return""});this.Eb=this.gb=0},Qa:function(){if(!this.gb&&!this.Eb)return null;var a=document.createElement("mutation");this.gb&&a.setAttribute("elseif",this.gb);this.Eb&&
a.setAttribute("else",1);return a},Wa:function(a){this.gb=parseInt(a.getAttribute("elseif"),10);this.Eb=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.gb;a++)N(P(this,"IF"+a).v("Boolean"),G.Vg),N($i(this,3,"DO"+a),G.Xg);this.Eb&&N($i(this,3,"ELSE"),G.Ug)},Qd:function(a){var b=hc(a,"controls_if_if");b.za();for(var c=I(b,"STACK").s,d=1;d<=this.gb;d++){var e=hc(a,"controls_if_elseif");e.za();Wg(c,e.K);c=e.C}this.Eb&&(a=hc(a,"controls_if_else"),a.za(),Wg(c,a.K));return b},Od:function(a){this.Eb&&
R(this,"ELSE");this.Eb=0;for(var b=this.gb;0<b;b--)R(this,"IF"+b),R(this,"DO"+b);this.gb=0;for(a=bj(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.gb++;var b=N(P(this,"IF"+this.gb).v("Boolean"),G.Vg),c=$i(this,3,"DO"+this.gb);N(c,G.Xg);a.se&&Wg(b.s,a.se);a.yb&&Wg(c.s,a.yb);break;case "controls_if_else":this.Eb++;b=$i(this,3,"ELSE");N(b,G.Ug);a.yb&&Wg(b.s,a.yb);break;default:throw"Unknown block type.";}a=a.C&&H(a.C)}},cf:function(a){a=bj(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=
I(this,"IF"+b),d=I(this,"DO"+b);a.se=c&&c.s.w;a.yb=d&&d.s.w;b++;break;case "controls_if_else":d=I(this,"ELSE");a.yb=d&&d.s.w;break;default:throw"Unknown block type.";}a=a.C&&H(a.C)}}};C.controls_if_if={g:function(){this.j(210);N(Q(this),G.vm);$i(this,3,"STACK");this.i(G.wm);this.contextMenu=!1}};C.controls_if_elseif={g:function(){this.j(210);N(Q(this),G.qm);L(this,!0);M(this,!0);this.i(G.rm);this.contextMenu=!1}};
C.controls_if_else={g:function(){this.j(210);N(Q(this),G.sm);L(this,!0);this.i(G.tm);this.contextMenu=!1}};
C.logic_compare={g:function(){var a=q?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.p=G.In;this.j(210);K(this,!0,"Boolean");P(this,"A");N(P(this,"B"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{EQ:G.Jn,NEQ:G.On,LT:G.Mn,LTE:G.Nn,GT:G.Kn,GTE:G.Ln}[a]})}};
C.logic_operation={g:function(){var a=[[G.Vn,"AND"],[G.Xn,"OR"]];this.p=G.Wn;this.j(210);K(this,!0,"Boolean");P(this,"A").v("Boolean");N(P(this,"B").v("Boolean"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{AND:G.Yn,OR:G.Zn}[a]})}};C.logic_negate={g:function(){this.p=G.Pn;this.j(210);K(this,!0,"Boolean");this.Aa(G.Qn,["BOOL","Boolean",1],1);this.i(G.Rn)}};
C.logic_boolean={g:function(){var a=[[G.Hn,"TRUE"],[G.En,"FALSE"]];this.p=G.Fn;this.j(210);K(this,!0,"Boolean");N(Q(this),new F(a),"BOOL");this.i(G.Gn)}};C.logic_null={g:function(){this.p=G.Tn;this.j(210);K(this,!0);N(Q(this),G.Sn);this.i(G.Un)}};C.logic_ternary={g:function(){this.p=G.ao;this.j(210);N(P(this,"IF").v("Boolean"),G.$n);N(P(this,"THEN"),G.co);N(P(this,"ELSE"),G.bo);K(this,!0);this.i(G.eo)}};/*

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
C.Vs={};C.lists_create_empty={g:function(){this.p=G.Vm;this.j(260);K(this,!0,"Array");N(Q(this),G.Zi);this.i(G.Wm)}};
C.lists_create_with={g:function(){this.j(260);this.oa=3;this.qc();K(this,!0,"Array");this.le(new Qh(["lists_create_with_item"]));this.i(G.bn)},Qa:function(){var a=document.createElement("mutation");a.setAttribute("items",this.oa);return a},Wa:function(a){this.oa=parseInt(a.getAttribute("items"),10);this.qc()},Qd:function(a){var b=hc(a,"lists_create_with_container");b.za();for(var c=I(b,"STACK").s,d=0;d<this.oa;d++){var e=hc(a,"lists_create_with_item");e.za();Wg(c,e.K);c=e.C}return b},Od:function(a){a=
bj(a,"STACK");for(var b=[],c=0;a;)b[c]=a.se,a=a.C&&H(a.C),c++;this.oa=c;this.qc();for(c=0;c<this.oa;c++)b[c]&&Wg(I(this,"ADD"+c).s,b[c])},cf:function(a){a=bj(a,"STACK");for(var b=0;a;){var c=I(this,"ADD"+b);a.se=c&&c.s.w;b++;a=a.C&&H(a.C)}},qc:function(){if(I(this,"EMPTY"))R(this,"EMPTY");else for(var a=0;I(this,"ADD"+a);)R(this,"ADD"+a),a++;if(0==this.oa)N(Q(this,"EMPTY"),G.Zi);else for(a=0;a<this.oa;a++){var b=P(this,"ADD"+a);0==a&&N(b,G.Zm)}}};
C.lists_create_with_container={g:function(){this.j(260);N(Q(this),G.Xm);$i(this,3,"STACK");this.i(G.Ym);this.contextMenu=!1}};C.lists_create_with_item={g:function(){this.j(260);N(Q(this),G.$m);L(this,!0);M(this,!0);this.i(G.an);this.contextMenu=!1}};C.lists_repeat={g:function(){this.p=G.vn;this.j(260);K(this,!0,"Array");this.Aa(G.wn,["ITEM",null,1],["NUM","Number",1],1);this.i(G.xn)}};
C.lists_length={g:function(){this.p=G.sn;this.j(260);this.Aa(G.tn,["VALUE",["Array","String"],1],1);K(this,!0,"Number");this.i(G.un)}};C.lists_isEmpty={g:function(){this.p=G.qn;this.j(260);this.Aa(G.rn,["VALUE",["Array","String"],1],1);Sg(this,!0);K(this,!0,"Boolean");this.i(G.Dn)}};C.lists_indexOf={g:function(){var a=[[G.mn,"FIRST"],[G.on,"LAST"]];this.p=G.ej;this.j(260);K(this,!0,"Number");N(P(this,"VALUE").v("Array"),G.nn);N(P(this,"FIND"),new F(a),"END");Sg(this,!0);this.i(G.pn)}};
C.lists_getIndex={g:function(){var a=[[G.cn,"GET"],[G.dn,"GET_REMOVE"],[G.hn,"REMOVE"]];this.ye=[[G.bj,"FROM_START"],[G.aj,"FROM_END"],[G.$i,"FIRST"],[G.cj,"LAST"],[G.dj,"RANDOM"]];this.p=G.fn;this.j(260);a=new F(a,function(a){this.h.zl("REMOVE"==a)});N(P(this,"VALUE").v("Array"),G.gn);N(N(Q(this),a,"MODE"),"","SPACE");Q(this,"AT");G.bh&&N(Q(this,"TAIL"),G.bh);Sg(this,!0);K(this,!0);this.ea(!0);var b=this;this.i(function(){var a=O(b,"MODE")+"_"+O(b,"WHERE");return G["LISTS_GET_INDEX_TOOLTIP_"+a]})},
Qa:function(){var a=document.createElement("mutation");a.setAttribute("statement",!this.G);a.setAttribute("at",1==I(this,"AT").type);return a},Wa:function(a){var b="true"==a.getAttribute("statement");this.zl(b);a="false"!=a.getAttribute("at");this.ea(a)},zl:function(a){a!=!this.G&&(Ui(this,!0,!0),a?(K(this,!1),L(this,!0),M(this,!0)):(L(this,!1),M(this,!1),K(this,!0)))},ea:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.bc&&N(Q(this,"ORDINAL"),G.bc)):Q(this,"AT");var b=
new F(this.ye,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);ic(e,b,"WHERE");return null}});N(I(this,"AT"),b,"WHERE");G.bh&&aj(this,"TAIL",null)}};
C.lists_setIndex={g:function(){var a=[[G.Cn,"SET"],[G.Bn,"INSERT"]];this.ye=[[G.bj,"FROM_START"],[G.aj,"FROM_END"],[G.$i,"FIRST"],[G.cj,"LAST"],[G.dj,"RANDOM"]];this.p=G.yn;this.j(260);N(P(this,"LIST").v("Array"),G.zn);N(N(Q(this),new F(a),"MODE"),"","SPACE");Q(this,"AT");N(P(this,"TO"),G.An);Sg(this,!0);L(this,!0);M(this,!0);this.i(G.tu);this.ea(!0);var b=this;this.i(function(){var a=O(b,"MODE")+"_"+O(b,"WHERE");return G["LISTS_SET_INDEX_TOOLTIP_"+a]})},Qa:function(){var a=document.createElement("mutation");
a.setAttribute("at",1==I(this,"AT").type);return a},Wa:function(a){a="false"!=a.getAttribute("at");this.ea(a)},ea:function(a){R(this,"AT");R(this,"ORDINAL",!0);a?(P(this,"AT").v("Number"),G.bc&&N(Q(this,"ORDINAL"),G.bc)):Q(this,"AT");var b=new F(this.ye,function(b){var d="FROM_START"==b||"FROM_END"==b;if(d!=a){var e=this.h;e.ea(d);ic(e,b,"WHERE");return null}});aj(this,"AT","TO");I(this,"ORDINAL")&&aj(this,"ORDINAL","TO");N(I(this,"AT"),b,"WHERE")}};
C.lists_getSublist={g:function(){this.p=G.jn;this.j(260);N(P(this,"LIST").v("Array"),G.kn);Q(this,"AT1");Q(this,"AT2");G.dh&&N(Q(this,"TAIL"),G.dh);Sg(this,!0);K(this,!0,"Array");this.ea(1,!0);this.ea(2,!0);this.i(G.ln)},Qa:function(){var a=document.createElement("mutation");a.setAttribute("at1",1==I(this,"AT1").type);a.setAttribute("at2",1==I(this,"AT2").type);return a},Wa:function(a){var b="true"==a.getAttribute("at1");a="true"==a.getAttribute("at2");this.ea(1,b);this.ea(2,a)},ea:function(a,b){R(this,
"AT"+a);R(this,"ORDINAL"+a,!0);b?(P(this,"AT"+a).v("Number"),G.bc&&N(Q(this,"ORDINAL"+a),G.bc)):Q(this,"AT"+a);var c=new F(this["WHERE_OPTIONS_"+a],function(c){var e="FROM_START"==c||"FROM_END"==c;if(e!=b){var h=this.h;h.ea(a,e);ic(h,c,"WHERE"+a);return null}});N(I(this,"AT"+a),c,"WHERE"+a);1==a&&(aj(this,"AT1","AT2"),I(this,"ORDINAL1")&&aj(this,"ORDINAL1","AT2"));G.dh&&aj(this,"TAIL",null)}};/*

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
S.Ys={};S.controls_repeat=function(a){var b=Number(O(a,"TIMES")),c=il(a,"DO"),c=jl(c,a.id);a=Ha(S.ga,"count");return"for (var "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};S.controls_repeat_ext=function(a){var b=T(a,"TIMES",S.ad)||"0",c=il(a,"DO"),c=jl(c,a.id);a="";var d=Ha(S.ga,"count"),e=b;b.match(/^\w+$/)||xk(b)||(e=Ha(S.ga,"repeat_end"),a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
S.controls_whileUntil=function(a){var b="UNTIL"==O(a,"MODE"),c=T(a,"BOOL",b?S.yf:S.S)||"false",d=il(a,"DO"),d=jl(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
S.controls_for=function(a){var b=S.ga.getName(O(a,"VAR"),"VARIABLE"),c=T(a,"FROM",S.ad)||"0",d=T(a,"TO",S.ad)||"0",e=T(a,"BY",S.ad)||"1",h=il(a,"DO"),h=jl(h,a.id);if(xk(c)&&xk(d)&&xk(e)){var k=parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(k?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(k?"++":"--"):a+((k?" += ":" -= ")+b))+(") {\n"+h+"}\n")}else a="",k=c,c.match(/^\w+$/)||xk(c)||(k=Ha(S.ga,b+"_start"),a+="var "+k+" = "+c+";\n"),c=d,d.match(/^\w+$/)||xk(d)||(c=Ha(S.ga,b+"_end"),
a+="var "+c+" = "+d+";\n"),d=Ha(S.ga,b+"_inc"),a+="var "+d+" = ",a=xk(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+k+" > "+c+") {\n",a+=S.ue+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+k+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+h+"}\n";return a};
S.controls_forEach=function(a){var b=S.ga.getName(O(a,"VAR"),"VARIABLE"),c=T(a,"LIST",S.ad)||"[]",d=il(a,"DO"),d=jl(d,a.id);a=Ha(S.ga,b+"_index");d=S.ue+b+" = "+c+"["+a+"];\n"+d;return"for (var "+a+" in "+c+") {\n"+d+"}\n"};S.controls_flow_statements=function(a){switch(O(a,"FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};/*

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
C.Zs={};C.math_number={g:function(){this.p=G.Oo;this.j(230);N(Q(this),new Zk("0",cl),"NUM");K(this,!0,"Number");this.i(G.Po)}};C.math_arithmetic={g:function(){var a=[[G.io,"ADD"],[G.Cp,"MINUS"],[G.No,"MULTIPLY"],[G.Bo,"DIVIDE"],[G.gp,"POWER"]];this.p=G.jo;this.j(230);K(this,!0,"Number");P(this,"A").v("Number");N(P(this,"B").v("Number"),new F(a),"OP");Sg(this,!0);var b=this;this.i(function(){var a=O(b,"OP");return{ADD:G.lo,MINUS:G.no,MULTIPLY:G.oo,DIVIDE:G.mo,POWER:G.po}[a]})}};
C.math_single={g:function(){var a=[[G.up,"ROOT"],[G.tp,"ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]];this.p=G.sp;this.j(230);K(this,!0,"Number");this.Aa("%1 %2",["OP",new F(a)],["NUM","Number",1],1);var b=this;this.i(function(){var a=O(b,"OP");return{ROOT:G.Bp,ABS:G.vp,NEG:G.zp,LN:G.xp,LOG10:G.yp,EXP:G.wp,POW10:G.Ap}[a]})}};
C.math_trig={g:function(){var a=[[G.Ip,"SIN"],[G.Gp,"COS"],[G.Jp,"TAN"],[G.Ep,"ASIN"],[G.Dp,"ACOS"],[G.Fp,"ATAN"]];this.p=G.Hp;this.j(230);K(this,!0,"Number");N(P(this,"NUM").v("Number"),new F(a),"OP");var b=this;this.i(function(){var a=O(b,"OP");return{SIN:G.Op,COS:G.Np,TAN:G.Pp,ASIN:G.Lp,ACOS:G.Kp,ATAN:G.Mp}[a]})}};
C.math_constant={g:function(){this.p=G.wo;this.j(230);K(this,!0,"Number");N(Q(this),new F([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.i(G.xo)}};
C.math_number_property={g:function(){var a=[[G.Do,"EVEN"],[G.Fo,"ODD"],[G.Ho,"PRIME"],[G.Jo,"WHOLE"],[G.Go,"POSITIVE"],[G.Eo,"NEGATIVE"],[G.Co,"DIVISIBLE_BY"]];this.j(230);P(this,"NUMBER_TO_CHECK").v("Number");a=new F(a,function(a){this.h.qc("DIVISIBLE_BY"==a)});N(Q(this),a,"PROPERTY");Sg(this,!0);K(this,!0,"Boolean");this.i(G.Io)},Qa:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==O(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Wa:function(a){a="true"==a.getAttribute("divisor_input");
this.qc(a)},qc:function(a){var b=I(this,"DIVISOR");a?b||P(this,"DIVISOR").v("Number"):b&&R(this,"DIVISOR")}};C.math_change={g:function(){this.p=G.qo;this.j(230);this.Aa(G.to+" %1 "+G.so+" %2",["VAR",new dg(G.uo)],["DELTA","Number",1],1);L(this,!0);M(this,!0);var a=this;this.i(function(){return G.vo.replace("%1",O(a,"VAR"))})},hc:function(){return[O(this,"VAR")]},Qb:function(a,b){Ia(a,O(this,"VAR"))&&ic(this,b,"VAR")}};
C.math_round={g:function(){var a=[[G.op,"ROUND"],[G.qp,"ROUNDUP"],[G.pp,"ROUNDDOWN"]];this.p=G.np;this.j(230);K(this,!0,"Number");N(P(this,"NUM").v("Number"),new F(a),"OP");this.i(G.rp)}};
C.math_on_list={g:function(){var a=[[G.Yo,"SUM"],[G.Uo,"MIN"],[G.So,"MAX"],[G.Ro,"AVERAGE"],[G.To,"MEDIAN"],[G.Vo,"MODE"],[G.Xo,"STD_DEV"],[G.Wo,"RANDOM"]],b=this;this.p=G.Qo;this.j(230);K(this,!0,"Number");a=new F(a,function(a){"MODE"==a?b.G.v("Array"):b.G.v("Number")});N(P(this,"LIST").v("Array"),a,"OP");this.i(function(){var a=O(b,"OP");return{SUM:G.fp,MIN:G.bp,MAX:G.$o,AVERAGE:G.Zo,MEDIAN:G.ap,MODE:G.cp,STD_DEV:G.ep,RANDOM:G.dp}[a]})}};
C.math_modulo={g:function(){this.p=G.Ko;this.j(230);K(this,!0,"Number");this.Aa(G.Lo,["DIVIDEND","Number",1],["DIVISOR","Number",1],1);Sg(this,!0);this.i(G.Mo)}};C.math_constrain={g:function(){this.p=G.yo;this.j(230);K(this,!0,"Number");this.Aa(G.zo,["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);Sg(this,!0);this.i(G.Ao)}};C.math_random_int={g:function(){this.p=G.kp;this.j(230);K(this,!0,"Number");this.Aa(G.lp,["FROM","Number",1],["TO","Number",1],1);Sg(this,!0);this.i(G.mp)}};
C.math_random_float={g:function(){this.p=G.hp;this.j(230);K(this,!0,"Number");N(Q(this),G.ip);this.i(G.jp)}};C.turtle_move_internal={g:function(){this.j(160);N(N(Q(this),new F([["move forward","moveForward"],["move backward","moveBackward"]]),"DIR"),"","VALUE");L(this,!0);M(this,!0);this.i(U("Turtle_moveTooltip"))}};S.turtle_move_internal=function(a){return O(a,"DIR")+"(100, 'block_id_"+a.id+"');\n"};
C.turtle_turn_internal={g:function(){var a=[["turn right","turnRight"],["turn left","turnLeft"]];a[0][0]+=" \u21bb";a[1][0]+=" \u21ba";this.j(160);N(N(Q(this),new F(a),"DIR")," ","VALUE");L(this,!0);M(this,!0);this.i(U("Turtle_turnTooltip"))}};S.turtle_turn_internal=function(a){return O(a,"DIR")+"(90, 'block_id_"+a.id+"');\n"};C.turtle_width={g:function(){this.j(160);N(P(this,"WIDTH").v("Number"),U("Turtle_setWidth"));L(this,!0);M(this,!0);this.i(U("Turtle_widthTooltip"))}};
S.turtle_width=function(a){return"penWidth("+(T(a,"WIDTH",S.S)||"1")+", 'block_id_"+a.id+"');\n"};C.turtle_pen={g:function(){var a=[[U("Turtle_penUp"),"penUp"],[U("Turtle_penDown"),"penDown"]];this.j(160);N(Q(this),new F(a),"PEN");L(this,!0);M(this,!0);this.i(U("Turtle_penTooltip"))}};S.turtle_pen=function(a){return O(a,"PEN")+"('block_id_"+a.id+"');\n"};C.turtle_colour={g:function(){this.j(20);N(P(this,"COLOUR").v("Colour"),U("Turtle_setColour"));L(this,!0);M(this,!0);this.i(U("Turtle_colourTooltip"))}};
S.turtle_colour=function(a){return"penColour("+(T(a,"COLOUR",S.S)||"'#000000'")+", 'block_id_"+a.id+"');\n"};C.turtle_colour_internal={g:function(){this.j(20);N(N(Q(this),U("Turtle_setColour")),new Tk("#ff0000"),"COLOUR");L(this,!0);M(this,!0);this.i(U("Turtle_colourTooltip"))}};S.turtle_colour_internal=function(a){return"penColour("+("'"+O(a,"COLOUR")+"'")+", 'block_id_"+a.id+"');\n"};
C.turtle_visibility={g:function(){var a=[[U("Turtle_hideTurtle"),"hideTurtle"],[U("Turtle_showTurtle"),"showTurtle"]];this.j(160);L(this,!0,null);M(this,!0,null);N(Q(this),new F(a),"VISIBILITY");this.i(U("Turtle_turtleVisibilityTooltip"))}};S.turtle_visibility=function(a){return O(a,"VISIBILITY")+"('block_id_"+a.id+"');\n"};C.turtle_print={g:function(){this.p=U("Turtle_printHelpUrl");this.j(160);N(P(this,"TEXT"),U("Turtle_print"));L(this,!0);M(this,!0);this.i(U("Turtle_printTooltip"))}};
S.turtle_print=function(a){return"print("+String(T(a,"TEXT",S.S)||"''")+", 'block_id_"+a.id+"');\n"};
C.turtle_font={g:function(){var a=[[U("Turtle_fontNormal"),"normal"],[U("Turtle_fontItalic"),"italic"],[U("Turtle_fontBold"),"bold"]];this.p=U("Turtle_fontHelpUrl");this.j(160);N(N(Q(this),U("Turtle_font")),new F([["Arial","Arial"],["Courier New","Courier New"],["Georgia","Georgia"],["Impact","Impact"],["Times New Roman","Times New Roman"],["Trebuchet MS","Trebuchet MS"],["Verdana","Verdana"]]),"FONT");N(N(Q(this),U("Turtle_fontSize")),new Zk("18",dl),"FONTSIZE");N(Q(this),new F(a),"FONTSTYLE");L(this,
!0);M(this,!0);this.i(U("Turtle_fontTooltip"))}};S.turtle_font=function(a){return"font('"+O(a,"FONT")+"',"+Number(O(a,"FONTSIZE"))+",'"+O(a,"FONTSTYLE")+"', 'block_id_"+a.id+"');\n"};C.turtle_repeat_internal={g:function(){this.p=G.Yg;this.j(120);N(N(N(Q(this),G.Wi),new F([["3","3"],["4","4"],["5","5"],["360","360"]]),"TIMES"),G.Xi);N($i(this,3,"DO"),G.Zc);L(this,!0);M(this,!0);this.i(G.Zg)}};S.turtle_repeat_internal=S.controls_repeat;var Zm={Cv:!0};r&&Pb(8);function $m(a){return a&&a.$r&&a.$r===Zm?a.content:String(a).replace(an,bn)}var cn={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function bn(a){return cn[a]}var an=/[\x00\x22\x26\x27\x3c\x3e]/g;function dn(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function en(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>'}
function fn(){var a=en()+'<table width="100%"><tr class="header"><td><h1>',b;b='<span id="title">'+(tm?'<a href="index.html?lang='+$m(rm)+'">':'<a href="./?lang='+$m(rm)+'">')+'<img id="banner" src="index/horizontal-logo-01.png" height="60"  alt="Blockly Games"></a>'+$m("")+"</span>";return a+b+'</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;background-color:white;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="turtle/seaturtle.svg" height=32 width=74 x=-21 y=0 />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="turtle/bunny.svg" height=32 width=74 x=92 y=0 /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="turtle/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><xml id="toolbox" style="display: none"><category name="Pen"><block type="turtle_move_internal"></block><block type="turtle_turn_internal"></block></category><category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category></xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+dn()+"</div>")+('<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can solve the challenge with fewer blocks. Try using "Loops." Draw the shape with just three blocks.</div>'+dn()+"</div>")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+('Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">'+
(tm?"":'<br><br>Use the "See Gallery" button to see what other people have drawn. If you draw something interesting, use the "Submit to Gallery" button to publish it.'))+"</div>"+dn()+'</div><div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>'};var Am="turtle";V.ei=function(){V.dg()};var gn=[],hn=0,jn=null,kn=!0,ln=!1;
function mn(){function a(){c.style.top=Math.max(10,d.offsetTop-window.pageYOffset)+"px";c.style.left=b?"10px":"420px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=fn();V.g();var b=-1!=qm.indexOf(rm),c=document.getElementById("blockly"),d=document.getElementById("visualization");window.addEventListener("scroll",function(){a();lh(window,"resize")});window.addEventListener("resize",a);a();10>vm&&(Wk=3,Vk="#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(" "));var e=
document.getElementById("toolbox");rl(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:e,trashcan:!0});kl("moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font");document.getElementById("submitButton")&&Bm("submitButton",nn);e=document.getElementById("slider");Cm=new Nm(10,35,130,e);V.Ws(10==vm?'<xml>  <block type="turtle_move" x="70" y="70">    <value name="VALUE">      <block type="math_number">        <field name="NUM">10</field>      </block>    </value>  </block></xml>':
'<xml>  <block type="turtle_move_internal" x="70" y="70">  </block></xml>',!0);X=document.getElementById("display").getContext("2d");Dm=document.getElementById("answer").getContext("2d");Y=document.getElementById("scratch").getContext("2d");on();Im();Dm.globalCompositeOperation="copy";Dm.drawImage(Y.canvas,0,0);Dm.globalCompositeOperation="source-over";on();Bm("runButton",pn);Bm("resetButton",qn);Dl(["turtle/win.mp3","turtle/win.ogg"],"win");setTimeout(V.Ns,1);setTimeout(V.Os,1);Bm("helpButton",rn);
2>location.hash.length&&!ym(vm)&&(setTimeout(rn,1E3),9==vm&&setTimeout(W.zj,3E5))}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){V.Ps(en()+'<div id="blockly"></div>')}):window.addEventListener("load",mn);function rn(){var a=document.getElementById("help"),b=document.getElementById("helpButton");W.oe(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},sn);W.Ki()}function sn(){W.Ni();1==vm&&(tn(),setTimeout(un,5E3))}
function un(){if(!vn&&!W.Mc){var a=document.getElementById("helpToolbox"),b=document.getElementById(":0");W.oe(a,b,!0,!1,{width:"25%",left:"525px",top:"3.3em"},null)}}var vn=!1;function tn(){B.ab.V.J()&&(vn=!0,W.ic(!1));vn||setTimeout(tn,100)}function on(){Fm=Em=200;Gm=0;kn=Hm=!0;Y.canvas.width=Y.canvas.width;Y.strokeStyle="#ec8fa1";Y.fillStyle="#ffffff";Y.lineWidth=5;Y.lineCap="round";Y.font="normal 18pt Arial";wn();for(var a=0;a<gn.length;a++)window.clearTimeout(gn[a]);gn.length=0;jn=null}
function wn(){X.beginPath();X.rect(0,0,X.canvas.width,X.canvas.height);X.fillStyle="#444444";X.fill();X.globalCompositeOperation="source-over";X.globalAlpha=.2;X.drawImage(Dm.canvas,0,0);X.globalAlpha=1;X.globalCompositeOperation="source-over";X.drawImage(Y.canvas,0,0);if(kn){X.strokeStyle=Y.strokeStyle;X.fillStyle=Y.fillStyle;var a=Y.lineWidth/2+10,b=2*a,c=new Image;c.onload=function(){X.drawImage(c,Em-b,Fm-a,50,50)};c.src="./turtle/robot.svg";var d=2*Math.PI*Gm/360,e=Em+(a+10)*Math.sin(d),h=Fm-
(a+10)*Math.cos(d),d=d-.3,k=Em+(a+4)*Math.sin(d),m=Fm-(a+4)*Math.cos(d),d=d+.15,p=Em+(a+6)*Math.sin(d),x=Fm-(a+6)*Math.cos(d),d=d+.3,w=Em+(a+6)*Math.sin(d),E=Fm-(a+6)*Math.cos(d),d=d+.15,A=Em+(a+4)*Math.sin(d),d=Fm-(a+4)*Math.cos(d);X.beginPath();X.moveTo(e,h);X.lineTo(k,m);X.bezierCurveTo(p,x,w,E,A,d);X.closePath();X.fill()}}
function pn(a){if(!V.ec(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";document.getElementById("spinner").style.visibility="visible";Hh(B,!0);xn()}}
function qn(a){V.ec(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",document.getElementById("spinner").style.visibility="hidden",Hh(B,!1),on(),ln=!1)}
function yn(a,b){var c;c=function(a,b){Z(a.valueOf(),b.toString())};a.setProperty(b,"moveForward",a.createNativeFunction(c));c=function(a,b){Z(-a.valueOf(),b.toString())};a.setProperty(b,"moveBackward",a.createNativeFunction(c));c=function(a,b){Jm(a.valueOf(),b.toString())};a.setProperty(b,"turnRight",a.createNativeFunction(c));c=function(a,b){Jm(-a.valueOf(),b.toString())};a.setProperty(b,"turnLeft",a.createNativeFunction(c));c=function(a){Lm(!1,a.toString())};a.setProperty(b,"penUp",a.createNativeFunction(c));
c=function(a){Lm(!0,a.toString())};a.setProperty(b,"penDown",a.createNativeFunction(c));c=function(a,b){var c=b.toString();Y.lineWidth=a.valueOf();zn(c)};a.setProperty(b,"penWidth",a.createNativeFunction(c));c=function(a,b){Km(a.toString(),b.toString())};a.setProperty(b,"penColour",a.createNativeFunction(c));c=function(a){a=a.toString();kn=!1;zn(a)};a.setProperty(b,"hideTurtle",a.createNativeFunction(c));c=function(a){a=a.toString();kn=!0;zn(a)};a.setProperty(b,"showTurtle",a.createNativeFunction(c));
c=function(a,b){var c=a.toString(),k=b.toString();Y.save();Y.translate(Em,Fm);Y.rotate(2*Math.PI*(Gm-90)/360);Y.fillText(c,0,0);Y.restore();zn(k)};a.setProperty(b,"print",a.createNativeFunction(c));c=function(a,b,c,k){k=k.toString();Y.font=c.toString()+" "+b.valueOf()+"pt "+a.toString();zn(k)};a.setProperty(b,"font",a.createNativeFunction(c))}function xn(){if("Interpreter"in window){on();var a=fl();jn=new Interpreter(a,yn);gn.push(setTimeout(An,100))}else setTimeout(xn,250)}
function An(){hn=gn.length=0;var a;do{try{a=jn.step()}catch(b){alert(b),a=!1}a&&hn&&(a=!1,gn.push(setTimeout(An,hn)))}while(a);if(!hn){document.getElementById("spinner").style.visibility="hidden";Ih(null);a=Y.getImageData(0,0,400,400);for(var c=Dm.getImageData(0,0,400,400),d=Math.min(a.data.length,c.data.length),e=0,h=3;h<d;h+=4)64<Math.abs(a.data[h]-c.data[h])&&e++;Mm(e)?(V.Bt(),1==vm&&(lk("win",.5),W.Yr())):Km("#ff0000");ln=!0}}
function zn(a){wn();a&&(V.Sh(a),a=1E3*Math.pow(1-Cm.Na(),2),hn=Math.max(1,a))}function Z(a,b){Hm&&(Y.beginPath(),Y.moveTo(Em,Fm));if(a){Em+=a*Math.sin(2*Math.PI*Gm/360);Fm-=a*Math.cos(2*Math.PI*Gm/360);var c=0}else c=.1;Hm&&(Y.lineTo(Em,Fm+c),Y.stroke());zn(b)}function Jm(a,b){Gm+=a;Gm%=360;0>Gm&&(Gm+=360);zn(b)}function Lm(a,b){Hm=a;zn(b)}function Km(a,b){Y.strokeStyle=a;Y.fillStyle=a;zn(b)}
function nn(){if(ln){var a=document.getElementById("thumbnail"),b=a.getContext("2d");b.globalCompositeOperation="copy";b.drawImage(X.canvas,0,0,100,100);a=a.toDataURL("image/png");document.getElementById("t2r_thumb").value=a;a=Kg(B);a=Ng(a);document.getElementById("t2r_xml").value=a;document.getElementById("t2r_form").submit()}else alert(U("Turtle_submitDisabled"))};
