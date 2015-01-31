// Automatically generated file.  Do not edit!
'use strict';var f,n=this;function aa(a){a=a.split(".");for(var b=n,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Sb=function(){return a.Kh?a.Kh:a.Kh=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function t(a){return"number"==typeof a}function u(a){return"function"==da(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a){return a[ia]||(a[ia]=++ja)}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;
function ka(a,b,c){return a.call.apply(a.bind,arguments)}function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ma(a,b,c){ma=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return ma.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var oa=Date.now||function(){return+new Date};function w(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Jk=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};/*

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
var pa={},x,qa,z,ra,sa,ta,ua,va,xa,ya,za,Aa,Ba,Ca,Da;/*

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
function Ea(){this.jd=[]}f=Ea.prototype;f.t=!1;f.dg=Infinity;f.k=function(){this.clear()};f.nd=function(a){this.jd.push(a);this.ub()};f.$e=function(a){for(var b=!1,c,d=0;c=this.jd[d];d++)if(c==a){this.jd.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.ub()};function Fa(a,b){var c=[].concat(a.jd);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);x&&(d*=-1);c.sort(function(a,b){var c=a.O(),k=b.O();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.Eb=function(){for(var a=Fa(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].kc());return a};f.clear=function(){for(;this.jd.length;)this.jd[0].k()};f.we=function(){return 0};function Ga(a,b){for(var c=a.Eb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ha(a){return Infinity==a.dg?Infinity:a.dg-a.Eb().length}f.ub=function(){};function Ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ja(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function La(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;
function Ua(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=n.document.createElement("div");return a.replace(Va,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Wa(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Va=/&([^;\s<&]+);?/g;function Xa(a,b){return a<b?-1:a>b?1:0};var Ya;a:{var Za=n.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}function ab(a){return-1!=Ya.indexOf(a)};function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<cb.length;g++)c=cb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function eb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return eb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var gb;function hb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,hb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}w(hb,Error);hb.prototype.name="CustomError";function ib(a,b){b.unshift(a);hb.call(this,Ia.apply(null,b));b.shift()}w(ib,hb);ib.prototype.name="AssertionError";function jb(a,b){throw new ib("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=Array.prototype,kb=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},lb=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},mb=A.filter?function(a,b,c){return A.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=q(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[g++]=l)}return e},nb=A.map?function(a,b,c){return A.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=q(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},ob=A.every?function(a,b,c){return A.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function pb(a,b){return 0<=kb(a,b)}
function qb(a,b){var c=kb(a,b),d;(d=0<=c)&&A.splice.call(a,c,1);return d}function rb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function sb(a,b,c,d){A.splice.apply(a,tb(arguments,1))}function tb(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)};var ub=ab("Opera")||ab("OPR"),B=ab("Trident")||ab("MSIE"),vb=ab("Gecko")&&-1==Ya.toLowerCase().indexOf("webkit")&&!(ab("Trident")||ab("MSIE")),C=-1!=Ya.toLowerCase().indexOf("webkit"),wb=ab("Macintosh"),xb=ab("Android"),yb=ab("iPhone")&&!ab("iPod")&&!ab("iPad"),zb=ab("iPad");function Ab(){var a=n.document;return a?a.documentMode:void 0}
var Bb=function(){var a="",b;if(ub&&n.opera)return a=n.opera.version,u(a)?a():a;vb?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:C&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ya))?a[1]:"");return B&&(b=Ab(),b>parseFloat(a))?String(b):a}(),Cb={};
function D(a){var b;if(!(b=Cb[a])){b=0;for(var c=Ka(String(Bb)).split("."),d=Ka(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",l=/(\d*)(\D*)/g,m=/(\d*)(\D*)/g;do{var p=l.exec(h)||["","",""],v=m.exec(k)||["","",""];if(0==p[0].length&&0==v[0].length)break;b=Xa(0==p[1].length?0:parseInt(p[1],10),0==v[1].length?0:parseInt(v[1],10))||Xa(0==p[2].length,0==v[2].length)||Xa(p[2],v[2])}while(0==b)}b=Cb[a]=0<=b}return b}
var Db=n.document,Eb=Db&&B?Ab()||("CSS1Compat"==Db.compatMode?parseInt(Bb,10):5):void 0;function Fb(a,b){this.width=a;this.height=b}f=Fb.prototype;f.clone=function(){return new Fb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.Lh=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=t(b)?b:a;this.width*=a;this.height*=c;return this};/*

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
function Gb(a){this.gd=new Fb(0,25);this.Sa(a)}f=Gb.prototype;f.h=null;f.Q=!0;f.clone=function(){jb("There should never be an instance of Field, only its derived classes.")};f.Fc=!0;f.I=function(a){this.h||(this.h=a,this.Y=E("g",{},null),this.od=E("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.Y),this.ma=E("text",{"class":"blocklyText"},this.Y),this.Ec(),a.D().appendChild(this.Y),this.eg=F(this.Y,"mouseup",this,this.hg),Hb(this))};
f.k=function(){this.eg&&(G(this.eg),this.eg=null);this.h=null;H(this.Y);this.od=this.ma=this.Y=null};f.Ec=function(){this.Fc&&(this.h.Lc&&!I?(Ib(this.Y,"blocklyEditableText"),Jb(this.Y,"blocklyNoNEditableText"),this.Y.style.cursor=this.yi):(Ib(this.Y,"blocklyNonEditableText"),Jb(this.Y,"blocklyEditableText"),this.Y.style.cursor=""))};f.u=function(){return this.Q};f.G=function(a){if(this.Q!=a){this.Q=a;var b=this.D();b&&(b.style.display=a?"block":"none",this.bd())}};f.D=function(){return this.Y};
f.bd=function(){if(this.Q){try{var a=this.ma.getComputedTextLength()}catch(b){a=8*this.ma.textContent.length}this.od&&this.od.setAttribute("width",a+10)}else a=0;this.gd.width=a};f.Dh=function(){this.gd.width||this.bd();return this.gd};f.wb=function(){return this.Ha};f.Sa=function(a){null!==a&&a!==this.Ha&&(this.Ha=a,Hb(this),this.h&&this.h.t&&(this.h.C(),this.h.Ka(),this.h.o.ub()))};
function Hb(a){if(a.ma){var b=a.Ha;Kb(a.ma);b=b.replace(/\s/g,"\u00a0");x&&b&&(b+="\u200f");b||(b="\u00a0");a.ma.appendChild(document.createTextNode(b));a.gd.width=0}}f.Qc=function(){return this.wb()};f.Ta=function(a){this.Sa(a)};f.hg=function(a){if(!yb&&!zb||0===a.layerX||0===a.layerY)Lb(a)||2!=Mb&&this.h.Lc&&!I&&Nb(this)};f.fd=function(){};/*

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
function Ob(){for(var a=J.Eb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Yk;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Pb);b.sort(Pb);return[c,b]}function Pb(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function Qb(a,b,c,d){function e(e,g){for(var l=0;l<e.length;l++){var m=Rb(d,g);Sb(m,"NAME").Ta(e[l][0]);for(var p=[],v=0;v<e[l][1].length;v++)p[v]="ARG"+v;m.vl(e[l][1],p);m.mb();a.push(m);b.push(2*c)}}if(K.procedures_defnoreturn){var g=Rb(d,"procedures_defnoreturn");g.mb();a.push(g);b.push(2*c)}K.procedures_defreturn&&(g=Rb(d,"procedures_defreturn"),g.mb(),a.push(g),b.push(2*c));K.procedures_ifreturn&&(g=Rb(d,"procedures_ifreturn"),g.mb(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=Ob();
e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function L(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=L.prototype;f.clone=function(){return new L(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof L?(this.x+=a.x,this.y+=a.y):(this.x+=a,t(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.x*=a;this.y*=c;return this};function Tb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=Tb.prototype;f.we=function(){return this.right-this.left};f.clone=function(){return new Tb(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof Tb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ga(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,t(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function Ub(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=Ub.prototype;f.clone=function(){return new Ub(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof Ub?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Dh=function(){return new Fb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.top+=a.y):(this.left+=a,t(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function Vb(){this.Fg="";this.Fi=Wb}Vb.prototype.Uc=!0;Vb.prototype.Pc=function(){return this.Fg};Vb.prototype.toString=function(){return"Const{"+this.Fg+"}"};function Xb(a){if(a instanceof Vb&&a.constructor===Vb&&a.Fi===Wb)return a.Fg;jb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Wb={};function Yb(){this.$b="";this.Di=Zb}f=Yb.prototype;f.Uc=!0;f.Pc=function(){return this.$b};f.Xf=!0;f.wd=function(){return 1};f.toString=function(){return"SafeUrl{"+this.$b+"}"};var Zb={};var $b=eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ac(){this.Te="";this.Ci=bc}ac.prototype.Uc=!0;var bc={};ac.prototype.Pc=function(){return this.Te};ac.prototype.toString=function(){return"SafeStyle{"+this.Te+"}"};function cc(a){var b=new ac;b.Te=a;return b}var dc=cc("");
function ec(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof Vb?d=Xb(d):fc.test(d)||(jb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?cc(b):dc}var fc=/^[-.%_!# a-zA-Z0-9]+$/;function gc(){this.og="";this.Gi=hc}f=gc.prototype;f.Uc=!0;f.Pc=function(){return this.og};f.Xf=!0;f.wd=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.og+"}"};var hc={};function ic(){this.$b="";this.Bi=jc;this.vh=null}f=ic.prototype;f.Xf=!0;f.wd=function(){return this.vh};f.Uc=!0;f.Pc=function(){return this.$b};f.toString=function(){return"SafeHtml{"+this.$b+"}"};function kc(a){if(a instanceof ic&&a.constructor===ic&&a.Bi===jc)return a.$b;jb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function lc(a){if(a instanceof ic)return a;var b=null;a.Xf&&(b=a.wd());return mc(Ma(a.Uc?a.Pc():String(a)),b)}
var nc=/^[a-zA-Z0-9-]+$/,oc=eb("action","cite","data","formaction","href","manifest","poster","src"),pc=eb("embed","iframe","link","object","script","style","template");
function qc(a,b,c){if(!nc.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in pc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!nc.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,l=a;k=g;if(h instanceof Vb)h=Xb(h);else if("style"==k.toLowerCase()){if(!ga(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof ac||
(h=ec(h));l=void 0;h instanceof ac&&h.constructor===ac&&h.Ci===bc?l=h.Te:(jb("expected object of type SafeStyle, got '"+h+"'"),l="type_error:SafeStyle");h=l}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in oc)if(h instanceof gc)h instanceof gc&&h.constructor===gc&&h.Gi===hc?h=h.og:(jb("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Yb)h instanceof Yb&&h.constructor===
Yb&&h.Di===Zb?h=h.$b:(jb("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Uc&&(h=h.Pc());k=k+'="'+Ma(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===$b[a.toLowerCase()]?e+=">":(d=rc(c),e+=">"+kc(d)+"</"+a+">",d=d.wd());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return mc(e,d)}
function rc(a){function b(a){ea(a)?lb(a,b):(a=lc(a),d+=kc(a),a=a.wd(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";lb(arguments,b);return mc(d,c)}var jc={};function mc(a,b){var c=new ic;c.$b=a;c.vh=b;return c}var sc=mc("",0);function tc(a,b){a.innerHTML=kc(b)};var uc=!B||B&&9<=Eb,vc=!vb&&!B||B&&B&&9<=Eb||vb&&D("1.9.1"),wc=B&&!D("9");function xc(a){return a?new yc(zc(a)):gb||(gb=new yc)}function Ac(a,b){bb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Bc?a.setAttribute(Bc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Cc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Fb(a.clientWidth,a.clientHeight)}function M(a,b,c){return Dc(document,arguments)}
function Dc(a,b){var c=b[0],d=b[1];if(!uc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ma(d.name),'"');if(d.type){c.push(' type="',Ma(d.type),'"');var e={};db(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(q(d)?c.className=d:ea(d)?c.className=d.join(" "):Ac(c,d));2<b.length&&Ec(a,c,b,2);return c}
function Ec(a,b,c,d){function e(c){c&&b.appendChild(q(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ga(g)&&0<g.nodeType?e(g):lb(Fc(g)?rb(g):g,e)}}function Kb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function Gc(a){var b=J.g;b.parentNode&&b.parentNode.insertBefore(a,b)}function H(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Hc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function zc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var Ic={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Jc={IMG:" ",BR:"\n"};function Kc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function Lc(a){a=a.tabIndex;return t(a)&&0<=a&&32768>a}
function Mc(a){var b=[];Nc(a,b,!1);return b.join("")}function Nc(a,b,c){if(!(a.nodeName in Ic))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Jc)b.push(Jc[a.nodeName]);else for(a=a.firstChild;a;)Nc(a,b,c),a=a.nextSibling}function Fc(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(u(a))return"function"==typeof a.item}return!1}
function yc(a){this.Db=a||n.document||document}f=yc.prototype;f.jb=xc;f.i=function(a){return q(a)?this.Db.getElementById(a):a};f.H=function(a,b,c){return Dc(this.Db,arguments)};f.createElement=function(a){return this.Db.createElement(a)};f.createTextNode=function(a){return this.Db.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){Ec(zc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.ci=Kb;f.removeNode=H;f.kc=function(a){return vc&&void 0!=a.children?a.children:mb(a.childNodes,function(a){return 1==a.nodeType})};f.contains=Hc;f.Vb=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Kc(a)||Lc(a)):Kc(a)&&Lc(a))&&B?(a=u(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};function Oc(a,b){var c=zc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Pc(a,b){return Oc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Qc(){var a=document,b=a.body,a=a.documentElement;return new L(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function Rc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Sc(a){if(B&&!(B&&8<=Eb))return a.offsetParent;var b=zc(a),c=Pc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Pc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Tc(a){var b,c=zc(a),d=Pc(a,"position"),e=vb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new L(0,0),h;b=c?zc(c):document;(h=!B||B&&9<=Eb)||(h="CSS1Compat"==xc(b).Db.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=Rc(a),c=xc(c).Db,a=C||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=B&&D("10")&&c.pageYOffset!=a.scrollTop?new L(a.scrollLeft,
a.scrollTop):new L(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(C&&"fixed"==Pc(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(ub||C&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=Sc(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,ub&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function Uc(a){var b=Vc;if("none"!=Pc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function Vc(a){var b=a.offsetWidth,c=a.offsetHeight,d=C&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Rc(a),new Fb(a.right-a.left,a.bottom-a.top)):new Fb(b,c)}
function Wc(a){var b=Tc(a);a=Uc(a);return new Ub(b.x,b.y,a.width,a.height)}function Xc(a,b){a.style.display=b?"":"none"}var Yc=vb?"MozUserSelect":C?"WebkitUserSelect":null;function Zc(a,b,c){c=c?null:a.getElementsByTagName("*");if(Yc){if(b=b?"none":"",a.style[Yc]=b,c){a=0;for(var d;d=c[a];a++)d.style[Yc]=b}}else if(B||ub)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var $c={thin:2,medium:4,thick:6};
function ad(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in $c)d=$c[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function bd(a){if(B&&!(B&&9<=Eb)){var b=ad(a,"borderLeft"),c=ad(a,"borderRight"),d=ad(a,"borderTop");a=ad(a,"borderBottom");return new Tb(d,c,a,b)}b=Oc(a,"borderLeftWidth");c=Oc(a,"borderRightWidth");d=Oc(a,"borderTopWidth");a=Oc(a,"borderBottomWidth");return new Tb(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var cd="closure_listenable_"+(1E6*Math.random()|0),dd=0;function ed(a,b,c,d,e){this.mc=a;this.Ue=null;this.src=b;this.type=c;this.ge=!!d;this.ye=e;this.key=++dd;this.ad=this.fe=!1}function fd(a){a.ad=!0;a.mc=null;a.Ue=null;a.src=null;a.ye=null};function gd(a){this.src=a;this.Fa={};this.Xd=0}gd.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.Fa[g];a||(a=this.Fa[g]=[],this.Xd++);var h=hd(a,b,d,e);-1<h?(b=a[h],c||(b.fe=!1)):(b=new ed(b,this.src,g,!!d,e),b.fe=c,a.push(b));return b};gd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Fa))return!1;var e=this.Fa[a];b=hd(e,b,c,d);return-1<b?(fd(e[b]),A.splice.call(e,b,1),0==e.length&&(delete this.Fa[a],this.Xd--),!0):!1};
function id(a,b){var c=b.type;if(!(c in a.Fa))return!1;var d=qb(a.Fa[c],b);d&&(fd(b),0==a.Fa[c].length&&(delete a.Fa[c],a.Xd--));return d}gd.prototype.Ye=function(a){a=a&&a.toString();var b=0,c;for(c in this.Fa)if(!a||c==a){for(var d=this.Fa[c],e=0;e<d.length;e++)++b,fd(d[e]);delete this.Fa[c];this.Xd--}return b};gd.prototype.xd=function(a,b,c,d){a=this.Fa[a.toString()];var e=-1;a&&(e=hd(a,b,c,d));return-1<e?a[e]:null};
function hd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.ad&&g.mc==b&&g.ge==!!c&&g.ye==d)return e}return-1};var jd=!B||B&&9<=Eb,kd=!B||B&&9<=Eb,ld=B&&!D("9");!C||D("528");vb&&D("1.9b")||B&&D("8")||ub&&D("9.5")||C&&D("528");vb&&!D("8")||B&&D("9");var md="ontouchstart"in n||!!(n.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!n.navigator||!n.navigator.msMaxTouchPoints);function nd(){0!=od&&(pd[ha(this)]=this);this.qd=this.qd;this.Oe=this.Oe}var od=0,pd={};nd.prototype.qd=!1;nd.prototype.k=function(){if(!this.qd&&(this.qd=!0,this.X(),0!=od)){var a=ha(this);delete pd[a]}};nd.prototype.X=function(){if(this.Oe)for(;this.Oe.length;)this.Oe.shift()()};function qd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.tc=!1;this.di=!0}qd.prototype.X=function(){};qd.prototype.k=function(){};qd.prototype.stopPropagation=function(){this.tc=!0};qd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.di=!1};function rd(a){rd[" "](a);return a}rd[" "]=ba;function sd(a,b){qd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.jg=!1;this.Ba=null;a&&this.I(a,b)}w(sd,qd);var td=[1,4,2];f=sd.prototype;
f.I=function(a,b){this.Ba=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(vb){var e;a:{try{rd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.Bh,set:this.hk},offsetY:{configurable:!0,enumerable:!0,get:this.Ch,set:this.ik}}):(this.offsetX=this.Bh(),
this.offsetY=this.Ch());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.jg=wb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function ud(a){return jd?0==a.Ba.button:"click"==a.type?!0:!!(a.Ba.button&td[0])}f.stopPropagation=function(){sd.j.stopPropagation.call(this);this.Ba.stopPropagation?this.Ba.stopPropagation():this.Ba.cancelBubble=!0};f.preventDefault=function(){sd.j.preventDefault.call(this);var a=this.Ba;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,ld)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.X=function(){};
f.Bh=function(){return C||void 0!==this.Ba.offsetX?this.Ba.offsetX:this.Ba.layerX};f.hk=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.Ch=function(){return C||void 0!==this.Ba.offsetY?this.Ba.offsetY:this.Ba.layerY};f.ik=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var vd="closure_lm_"+(1E6*Math.random()|0),wd={},xd=0;function N(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)N(a,b[g],c,d,e);return null}c=yd(c);if(a&&a[cd])a=a.w(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=zd(a);h||(a[vd]=h=new gd(a));c=h.add(b,c,!1,d,e);c.Ue||(d=Ad(),c.Ue=d,d.src=a,d.mc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Bd(b.toString()),d),xd++);a=c}return a}
function Ad(){var a=Cd,b=kd?function(c){return a.call(b.src,b.mc,c)}:function(c){c=a.call(b.src,b.mc,c);if(!c)return c};return b}function Dd(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)Dd(a,b[g],c,d,e);else c=yd(c),a&&a[cd]?a.bb(b,c,d,e):a&&(a=zd(a))&&(b=a.xd(b,c,!!d,e))&&Ed(b)}
function Ed(a){if(t(a)||!a||a.ad)return!1;var b=a.src;if(b&&b[cd])return id(b.Rb,a);var c=a.type,d=a.Ue;b.removeEventListener?b.removeEventListener(c,d,a.ge):b.detachEvent&&b.detachEvent(Bd(c),d);xd--;(c=zd(b))?(id(c,a),0==c.Xd&&(c.src=null,b[vd]=null)):fd(a);return!0}function Bd(a){return a in wd?wd[a]:wd[a]="on"+a}function Fd(a,b,c,d){var e=!0;if(a=zd(a))if(b=a.Fa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.ge==c&&!g.ad&&(g=Gd(g,d),e=e&&!1!==g)}return e}
function Gd(a,b){var c=a.mc,d=a.ye||a.src;a.fe&&Ed(a);return c.call(d,b)}
function Cd(a,b){if(a.ad)return!0;if(!kd){var c=b||aa("window.event"),d=new sd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.tc&&0<=k;k--){d.currentTarget=c[k];var l=Fd(c[k],g,!0,d),e=e&&l}for(k=0;!d.tc&&k<c.length;k++)d.currentTarget=c[k],l=Fd(c[k],g,!1,d),e=e&&l}return e}return Gd(a,new sd(b,
this))}function zd(a){a=a[vd];return a instanceof gd?a:null}var Hd="__closure_events_fn_"+(1E9*Math.random()>>>0);function yd(a){if(u(a))return a;a[Hd]||(a[Hd]=function(b){return a.handleEvent(b)});return a[Hd]};function Id(a){nd.call(this);this.Gh=a;this.Ie={}}w(Id,nd);var Jd=[];f=Id.prototype;f.w=function(a,b,c,d){ea(b)||(b&&(Jd[0]=b.toString()),b=Jd);for(var e=0;e<b.length;e++){var g=N(a,b[e],c||this.handleEvent,d||!1,this.Gh||this);if(!g)break;this.Ie[g.key]=g}return this};
f.bb=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.bb(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.Gh||this,c=yd(c),d=!!d,b=a&&a[cd]?a.xd(b,c,d,e):a?(a=zd(a))?a.xd(b,c,d,e):null:null,b&&(Ed(b),delete this.Ie[b.key]);return this};f.Ye=function(){bb(this.Ie,Ed);this.Ie={}};f.X=function(){Id.j.X.call(this);this.Ye()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Kd(){}ca(Kd);Kd.prototype.Pj=0;function Ld(){nd.call(this);this.Rb=new gd(this);this.Ii=this;this.ig=null}w(Ld,nd);Ld.prototype[cd]=!0;f=Ld.prototype;f.ue=function(){return this.ig};f.wg=function(a){this.ig=a};f.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Dd(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.ue();if(c)for(b=[];c;c=c.ue())b.push(c);var c=this.Ii,d=a.type||a;if(q(a))a=new qd(a,c);else if(a instanceof qd)a.target=a.target||c;else{var e=a;a=new qd(d,c);db(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.tc&&0<=h;h--)g=a.currentTarget=b[h],e=Md(g,d,!0,a)&&e;a.tc||(g=a.currentTarget=c,e=Md(g,d,!0,a)&&e,a.tc||(e=Md(g,d,!1,a)&&e));if(b)for(h=0;!a.tc&&h<b.length;h++)g=a.currentTarget=b[h],e=Md(g,d,!1,a)&&e;return e};
f.X=function(){Ld.j.X.call(this);this.Rb&&this.Rb.Ye(void 0);this.ig=null};f.w=function(a,b,c,d){return this.Rb.add(String(a),b,!1,c,d)};f.bb=function(a,b,c,d){return this.Rb.remove(String(a),b,c,d)};function Md(a,b,c,d){b=a.Rb.Fa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.ad&&h.ge==c){var k=h.mc,l=h.ye||h.src;h.fe&&id(a.Rb,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.di}f.xd=function(a,b,c,d){return this.Rb.xd(String(a),b,c,d)};function Nd(a){Ld.call(this);this.le=a||xc();this.cf=Od;this.Ae=null;this.v=!1;this.s=null;this.Tb=void 0;this.Nb=this.R=this.za=this.Me=null;this.yk=!1}w(Nd,Ld);Nd.prototype.Fj=Kd.Sb();var Od=null;
function Pd(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function Qd(a){return a.Ae||(a.Ae=":"+(a.Fj.Pj++).toString(36))}f=Nd.prototype;f.i=function(){return this.s};function Rd(a){a.Tb||(a.Tb=new Id(a));return a.Tb}
f.Ga=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.za&&this.Ae&&Sd(this.za,this.Ae)&&this.za!=a)throw Error("Unable to set parent component");this.za=a;Nd.j.wg.call(this,a)};f.getParent=function(){return this.za};f.wg=function(a){if(this.za&&this.za!=a)throw Error("Method not supported");Nd.j.wg.call(this,a)};f.jb=function(){return this.le};f.H=function(){this.s=this.le.createElement("div")};f.C=function(a){this.bd(a)};
f.bd=function(a,b){if(this.v)throw Error("Component already rendered");this.s||this.H();a?a.insertBefore(this.s,b||null):this.le.Db.body.appendChild(this.s);this.za&&!this.za.v||this.qa()};f.qa=function(){this.v=!0;Td(this,function(a){!a.v&&a.i()&&a.qa()})};f.$a=function(){Td(this,function(a){a.v&&a.$a()});this.Tb&&this.Tb.Ye();this.v=!1};
f.X=function(){this.v&&this.$a();this.Tb&&(this.Tb.k(),delete this.Tb);Td(this,function(a){a.k()});!this.yk&&this.s&&H(this.s);this.za=this.Me=this.s=this.Nb=this.R=null;Nd.j.X.call(this)};f.ae=function(a,b){this.Gc(a,Ud(this),b)};
f.Gc=function(a,b,c){if(a.v&&(c||!this.v))throw Error("Component already rendered");if(0>b||b>Ud(this))throw Error("Child component index out of bounds");this.Nb&&this.R||(this.Nb={},this.R=[]);if(a.getParent()==this){var d=Qd(a);this.Nb[d]=a;qb(this.R,a)}else{var d=this.Nb,e=Qd(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.Ga(this);sb(this.R,b,0,a);a.v&&this.v&&a.getParent()==this?(c=this.ib(),b=c.childNodes[b]||null,b!=a.i()&&c.insertBefore(a.i(),b)):c?(this.s||
this.H(),b=O(this,b+1),a.bd(this.ib(),b?b.s:null)):this.v&&!a.v&&a.s&&a.s.parentNode&&1==a.s.parentNode.nodeType&&a.qa()};f.ib=function(){return this.s};function Vd(a){null==a.cf&&(a.cf="rtl"==Pc(a.v?a.s:a.le.Db.body,"direction"));return a.cf}f.Qd=function(a){if(this.v)throw Error("Component already rendered");this.cf=a};function Wd(a){return!!a.R&&0!=a.R.length}function Ud(a){return a.R?a.R.length:0}function Sd(a,b){var c;a.Nb&&b?(c=a.Nb,c=(b in c?c[b]:void 0)||null):c=null;return c}
function O(a,b){return a.R?a.R[b]||null:null}function Td(a,b,c){a.R&&lb(a.R,b,c)}function Xd(a,b){return a.R&&b?kb(a.R,b):-1}f.removeChild=function(a,b){if(a){var c=q(a)?a:Qd(a);a=Sd(this,c);if(c&&a){var d=this.Nb;c in d&&delete d[c];qb(this.R,a);b&&(a.$a(),a.s&&H(a.s));a.Ga(null)}}if(!a)throw Error("Child is not in parent component");return a};f.ci=function(a){for(var b=[];Wd(this);)b.push(this.removeChild(O(this,0),a));return b};function Yd(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}function Zd(a,b){return a.classList?a.classList.contains(b):pb(Yd(a),b)}function $d(a,b){a.classList?a.classList.add(b):Zd(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ae(a,b){if(a.classList)lb(b,function(b){$d(a,b)});else{var c={};lb(Yd(a),function(a){c[a]=!0});lb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function be(a,b){a.classList?a.classList.remove(b):Zd(a,b)&&(a.className=mb(Yd(a),function(a){return a!=b}).join(" "))}function ce(a,b){a.classList?lb(b,function(b){be(a,b)}):a.className=mb(Yd(a),function(a){return!pb(b,a)}).join(" ")};function de(a,b){if(!a)throw Error("Invalid class name "+a);if(!u(b))throw Error("Invalid decorator function "+b);}var ee={};var fe;function ge(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function P(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(fe||(fe={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=fe,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function he(){}var ie;ca(he);var je={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=he.prototype;f.ne=function(){};f.H=function(a){return a.jb().H("div",this.qe(a).join(" "),a.Cb)};f.ib=function(a){return a};f.sd=function(a,b,c){if(a=a.i?a.i():a){var d=[b];B&&!D("7")&&(d=ke(Yd(a),b),d.push(b));(c?ae:ce)(a,d)}};f.Fd=function(a){Vd(a)&&this.Qd(a.i(),!0);a.isEnabled()&&this.zc(a,a.u())};
function le(a,b,c){if(a=c||a.ne())c=b.getAttribute("role")||null,a!=c&&ge(b,a)}function me(a,b){a.u()||P(b,"hidden",!a.u());a.isEnabled()||ne(b,1,!a.isEnabled());a.U&8&&ne(b,8,a.Fe());a.U&16&&ne(b,16,!!(a.$&16));a.U&64&&ne(b,64,a.Vc())}f.tg=function(a,b){Zc(a,!b,!B&&!ub)};f.Qd=function(a,b){this.sd(a,this.xa()+"-rtl",b)};f.Vb=function(a){var b;return a.U&32&&(b=a.ga())?Kc(b)&&Lc(b):!1};
f.zc=function(a,b){var c;if(a.U&32&&(c=a.ga())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.Bd(null)}(Kc(c)&&Lc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.G=function(a,b){Xc(a,b);a&&P(a,"hidden",!b)};f.qb=function(a,b,c){var d=a.i();if(d){var e=this.pe(b);e&&this.sd(a,e,c);ne(d,b,c)}};
function ne(a,b,c){ie||(ie={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=ie[b];var d=a.getAttribute("role")||null;d&&(d=je[d]||b,b="checked"==b||"selected"==b?d:b);b&&P(a,b,c)}f.ga=function(a){return a.i()};f.xa=function(){return"goog-control"};f.qe=function(a){var b=this.xa(),c=[b],d=this.xa();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.pe(e));b&=~e}c.push.apply(c,d);(a=a.tb)&&c.push.apply(c,a);B&&!D("7")&&c.push.apply(c,ke(c));return c};
function ke(a,b){var c=[];b&&(a=a.concat([b]));lb([],function(d){!ob(d,na(pb,a))||b&&!pb(d,b)||c.push(d.join("_"))});return c}f.pe=function(a){if(!this.Yg){var b=this.xa();b.replace(/\xa0|\s/g," ");this.Yg={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Yg[a]};function oe(a,b,c,d,e){if(!(B||C&&D("525")))return!0;if(wb&&e)return pe(a);if(e&&!d)return!1;t(b)&&(b=qe(b));if(!c&&(17==b||18==b||wb&&91==b))return!1;if(C&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(B&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!C}return pe(a)}
function pe(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||C&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function qe(a){if(vb)a=re(a);else if(wb&&C)a:switch(a){case 93:a=91;break a}return a}
function re(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function se(a,b){Ld.call(this);a&&te(this,a,b)}w(se,Ld);f=se.prototype;f.s=null;f.Ge=null;f.$f=null;f.He=null;f.Pa=-1;f.Xb=-1;f.qf=!1;
var ue={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},ve={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},we=B||C&&D("525"),xe=wb&&vb;f=se.prototype;
f.xj=function(a){C&&(17==this.Pa&&!a.ctrlKey||18==this.Pa&&!a.altKey||wb&&91==this.Pa&&!a.metaKey)&&(this.Xb=this.Pa=-1);-1==this.Pa&&(a.ctrlKey&&17!=a.keyCode?this.Pa=17:a.altKey&&18!=a.keyCode?this.Pa=18:a.metaKey&&91!=a.keyCode&&(this.Pa=91));we&&!oe(a.keyCode,this.Pa,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Xb=qe(a.keyCode),xe&&(this.qf=a.altKey))};f.yj=function(a){this.Xb=this.Pa=-1;this.qf=a.altKey};
f.handleEvent=function(a){var b=a.Ba,c,d,e=b.altKey;B&&"keypress"==a.type?(c=this.Xb,d=13!=c&&27!=c?b.keyCode:0):C&&"keypress"==a.type?(c=this.Xb,d=0<=b.charCode&&63232>b.charCode&&pe(c)?b.charCode:0):ub?(c=this.Xb,d=pe(c)?b.keyCode:0):(c=b.keyCode||this.Xb,d=b.charCode||0,xe&&(e=this.qf),wb&&63==d&&224==c&&(c=191));var g=c=qe(c),h=b.keyIdentifier;c?63232<=c&&c in ue?g=ue[c]:25==c&&a.shiftKey&&(g=9):h&&h in ve&&(g=ve[h]);a=g==this.Pa;this.Pa=g;b=new ye(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.i=function(){return this.s};function te(a,b,c){a.He&&a.detach();a.s=b;a.Ge=N(a.s,"keypress",a,c);a.$f=N(a.s,"keydown",a.xj,c,a);a.He=N(a.s,"keyup",a.yj,c,a)}f.detach=function(){this.Ge&&(Ed(this.Ge),Ed(this.$f),Ed(this.He),this.He=this.$f=this.Ge=null);this.s=null;this.Xb=this.Pa=-1};f.X=function(){se.j.X.call(this);this.detach()};function ye(a,b,c,d){sd.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}w(ye,sd);function Q(a,b,c){Nd.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ha(b);if(d=ee[d])break;b=b.j?b.j.constructor:null}b=d?u(d.Sb)?d.Sb():new d:null}this.F=b;this.gk(void 0!==a?a:null)}w(Q,Nd);f=Q.prototype;f.Cb=null;f.$=0;f.U=39;f.Pi=255;f.Td=0;f.Q=!0;f.tb=null;f.Dd=!0;f.pf=!1;f.Yj=null;f.ga=function(){return this.F.ga(this)};f.te=function(){return this.ya||(this.ya=new se)};
f.sd=function(a,b){b?a&&(this.tb?pb(this.tb,a)||this.tb.push(a):this.tb=[a],this.F.sd(this,a,!0)):a&&this.tb&&qb(this.tb,a)&&(0==this.tb.length&&(this.tb=null),this.F.sd(this,a,!1))};f.H=function(){var a=this.F.H(this);this.s=a;le(this.F,a,this.ve());this.pf||this.F.tg(a,!1);this.u()||this.F.G(a,!1)};f.ve=function(){return this.Yj};f.ib=function(){return this.F.ib(this.i())};
f.qa=function(){Q.j.qa.call(this);me(this,this.s);this.F.Fd(this);if(this.U&-2&&(this.Dd&&ze(this,!0),this.U&32)){var a=this.ga();if(a){var b=this.te();te(b,a);Rd(this).w(b,"key",this.kb).w(a,"focus",this.xe).w(a,"blur",this.Bd)}}};
function ze(a,b){var c=Rd(a),d=a.i();b?(c.w(d,"mouseover",a.Uf).w(d,"mousedown",a.Rc).w(d,"mouseup",a.Ed).w(d,"mouseout",a.Tf),a.Cd!=ba&&c.w(d,"contextmenu",a.Cd),B&&c.w(d,"dblclick",a.Eh)):(c.bb(d,"mouseover",a.Uf).bb(d,"mousedown",a.Rc).bb(d,"mouseup",a.Ed).bb(d,"mouseout",a.Tf),a.Cd!=ba&&c.bb(d,"contextmenu",a.Cd),B&&c.bb(d,"dblclick",a.Eh))}f.$a=function(){Q.j.$a.call(this);this.ya&&this.ya.detach();this.u()&&this.isEnabled()&&this.F.zc(this,!1)};
f.X=function(){Q.j.X.call(this);this.ya&&(this.ya.k(),delete this.ya);delete this.F;this.tb=this.Cb=null};f.gk=function(a){this.Cb=a};f.Nf=function(){var a=this.Cb;if(!a)return"";if(!q(a))if(ea(a))a=nb(a,Mc).join("");else{if(wc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Nc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");wc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return Ja(a)};
f.Qd=function(a){Q.j.Qd.call(this,a);var b=this.i();b&&this.F.Qd(b,a)};f.tg=function(a){this.pf=a;var b=this.i();b&&this.F.tg(b,a)};f.u=function(){return this.Q};f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.i();c&&this.F.G(c,a);this.isEnabled()&&this.F.zc(this,a);this.Q=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};
f.Pd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Ae(this,1,!a)||(a||(this.setActive(!1),this.pb(!1)),this.u()&&this.F.zc(this,a),this.qb(1,!a,!0))};f.pb=function(a){Ae(this,2,a)&&this.qb(2,a)};f.setActive=function(a){Ae(this,4,a)&&this.qb(4,a)};f.Fe=function(){return!!(this.$&8)};f.jk=function(){Ae(this,8,!0)&&this.qb(8,!0)};function Be(a,b){Ae(a,16,b)&&a.qb(16,b)}f.Vc=function(){return!!(this.$&64)};function Ce(a,b){Ae(a,64,b)&&a.qb(64,b)}
f.qb=function(a,b,c){c||1!=a?this.U&a&&b!=!!(this.$&a)&&(this.F.qb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Pd(!b)};f.Ra=function(a,b){if(this.v&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.qb(a,!1);this.U=b?this.U|a:this.U&~a};function De(a,b){return!!(a.Pi&b)&&!!(a.U&b)}function Ae(a,b,c){return!!(a.U&b)&&!!(a.$&b)!=c&&(!(a.Td&b)||a.dispatchEvent(Pd(b,c)))&&!a.qd}f.Uf=function(a){!Ee(a,this.i())&&this.dispatchEvent("enter")&&this.isEnabled()&&De(this,2)&&this.pb(!0)};
f.Tf=function(a){!Ee(a,this.i())&&this.dispatchEvent("leave")&&(De(this,4)&&this.setActive(!1),De(this,2)&&this.pb(!1))};f.Cd=ba;function Ee(a,b){return!!a.relatedTarget&&Hc(b,a.relatedTarget)}f.Rc=function(a){this.isEnabled()&&(De(this,2)&&this.pb(!0),!ud(a)||C&&wb&&a.ctrlKey||(De(this,4)&&this.setActive(!0),this.F.Vb(this)&&this.ga().focus()));this.pf||!ud(a)||C&&wb&&a.ctrlKey||a.preventDefault()};f.Ed=function(a){this.isEnabled()&&(De(this,2)&&this.pb(!0),this.$&4&&this.Ld(a)&&De(this,4)&&this.setActive(!1))};
f.Eh=function(a){this.isEnabled()&&this.Ld(a)};f.Ld=function(a){De(this,16)&&Be(this,!(this.$&16));De(this,8)&&this.jk();De(this,64)&&Ce(this,!this.Vc());var b=new qd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.jg=a.jg);return this.dispatchEvent(b)};f.xe=function(){De(this,32)&&Ae(this,32,!0)&&this.qb(32,!0)};f.Bd=function(){De(this,4)&&this.setActive(!1);De(this,32)&&Ae(this,32,!1)&&this.qb(32,!1)};
f.kb=function(a){return this.u()&&this.isEnabled()&&this.lc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.lc=function(a){return 13==a.keyCode&&this.Ld(a)};if(!u(Q))throw Error("Invalid component class "+Q);if(!u(he))throw Error("Invalid renderer class "+he);var Fe=ha(Q);ee[Fe]=he;de("goog-control",function(){return new Q(null)});function Ge(){this.Zg=[]}w(Ge,he);ca(Ge);function He(a,b){var c=a.Zg[b];if(!c){switch(b){case 0:c=a.xa()+"-highlight";break;case 1:c=a.xa()+"-checkbox";break;case 2:c=a.xa()+"-content"}a.Zg[b]=c}return c}f=Ge.prototype;f.ne=function(){return"menuitem"};f.H=function(a){var b=a.jb().H("div",this.qe(a).join(" "),Ie(this,a.Cb,a.jb()));Je(this,a,b,!!(a.U&8)||!!(a.U&16));return b};f.ib=function(a){return a&&a.firstChild};function Ie(a,b,c){a=He(a,2);return c.H("div",a,b)}
f.ii=function(a,b,c){a&&b&&Je(this,a,b,c)};f.ug=function(a,b,c){a&&b&&Je(this,a,b,c)};function Je(a,b,c,d){le(a,c,b.ve());me(b,c);var e;if(e=a.ib(c)){e=e.firstChild;var g=He(a,1);e=!!e&&ga(e)&&1==e.nodeType&&Zd(e,g)}else e=!1;d!=e&&(d?$d(c,"goog-option"):be(c,"goog-option"),c=a.ib(c),d?(a=He(a,1),c.insertBefore(b.jb().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.pe=function(a){switch(a){case 2:return He(this,0);case 16:case 8:return"goog-option-selected";default:return Ge.j.pe.call(this,a)}};f.xa=function(){return"goog-menuitem"};function Ke(a,b,c,d){Q.call(this,a,d||Ge.Sb(),c);this.Ta(b)}w(Ke,Q);f=Ke.prototype;f.Qc=function(){var a=this.Me;return null!=a?a:this.Nf()};f.Ta=function(a){this.Me=a};f.Ra=function(a,b){Ke.j.Ra.call(this,a,b);switch(a){case 8:this.$&16&&!b&&Be(this,!1);var c=this.i();c&&this.F.ii(this,c,b);break;case 16:(c=this.i())&&this.F.ug(this,c,b)}};f.ii=function(a){this.Ra(8,a)};f.ug=function(a){this.Ra(16,a)};
f.Nf=function(){var a=this.Cb;return ea(a)?(a=nb(a,function(a){return ga(a)&&1==a.nodeType&&(Zd(a,"goog-menuitem-accel")||Zd(a,"goog-menuitem-mnemonic-separator"))?"":Mc(a)}).join(""),Ja(a)):Ke.j.Nf.call(this)};f.Ed=function(a){var b=this.getParent();if(b){var c=b.Xh;b.Xh=null;if(b=c&&t(a.clientX))b=new L(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}Ke.j.Ed.call(this,a)};f.lc=function(a){return a.keyCode==this.Qh&&this.Ld(a)?!0:Ke.j.lc.call(this,a)};f.pj=function(){return this.Qh};
de("goog-menuitem",function(){return new Ke(null)});Ke.prototype.ve=function(){return this.U&16?"menuitemcheckbox":this.U&8?"menuitemradio":Ke.j.ve.call(this)};Ke.prototype.getParent=function(){return Q.prototype.getParent.call(this)};Ke.prototype.ue=function(){return Q.prototype.ue.call(this)};function Le(a){this.Rg=a}ca(Le);f=Le.prototype;f.ne=function(){return this.Rg};function Me(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.jb().H("div",this.qe(a).join(" "))};f.ib=function(a){return a};f.Fd=function(a){a=a.i();Zc(a,!0,vb);B&&(a.hideFocus=!0);var b=this.ne();b&&ge(a,b)};f.ga=function(a){return a.i()};f.xa=function(){return"goog-container"};f.qe=function(a){var b=this.xa(),c=[b,a.$c==Ne?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function Oe(){}w(Oe,he);ca(Oe);Oe.prototype.H=function(a){return a.jb().H("div",this.xa())};Oe.prototype.xa=function(){return"goog-menuseparator"};function Pe(a,b){Q.call(this,null,a||Oe.Sb(),b);this.Ra(1,!1);this.Ra(2,!1);this.Ra(4,!1);this.Ra(32,!1);this.$=1}w(Pe,Q);Pe.prototype.qa=function(){Pe.j.qa.call(this);var a=this.i();ge(a,"separator")};de("goog-menuseparator",function(){return new Pe});function Qe(a){this.Rg=a||"menu"}w(Qe,Le);ca(Qe);Qe.prototype.xa=function(){return"goog-menu"};Qe.prototype.Fd=function(a){Qe.j.Fd.call(this,a);a=a.i();P(a,"haspopup","true")};de("goog-menuseparator",function(){return new Pe});function Re(a,b,c){Nd.call(this,c);this.F=b||Le.Sb();this.$c=a||Se}w(Re,Nd);var Ne="horizontal",Se="vertical";f=Re.prototype;f.ag=null;f.ya=null;f.F=null;f.$c=null;f.Q=!0;f.hc=!0;f.Lf=!0;f.M=-1;f.Z=null;f.Yc=!1;f.Ki=!1;f.Wj=!0;f.Ab=null;f.ga=function(){return this.ag||this.F.ga(this)};f.te=function(){return this.ya||(this.ya=new se(this.ga()))};f.H=function(){this.s=this.F.H(this)};f.ib=function(){return this.F.ib(this.i())};
f.qa=function(){Re.j.qa.call(this);Td(this,function(a){a.v&&Te(this,a)},this);var a=this.i();this.F.Fd(this);this.G(this.Q,!0);Rd(this).w(this,"enter",this.Rf).w(this,"highlight",this.wj).w(this,"unhighlight",this.Bj).w(this,"open",this.zj).w(this,"close",this.tj).w(a,"mousedown",this.Rc).w(zc(a),"mouseup",this.uj).w(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.sj);this.Vb()&&Ue(this,!0)};
function Ue(a,b){var c=Rd(a),d=a.ga();b?c.w(d,"focus",a.xe).w(d,"blur",a.Bd).w(a.te(),"key",a.kb):c.bb(d,"focus",a.xe).bb(d,"blur",a.Bd).bb(a.te(),"key",a.kb)}f.$a=function(){this.ed(-1);this.Z&&Ce(this.Z,!1);this.Yc=!1;Re.j.$a.call(this)};f.X=function(){Re.j.X.call(this);this.ya&&(this.ya.k(),this.ya=null);this.F=this.Z=this.Ab=this.ag=null};f.Rf=function(){return!0};
f.wj=function(a){var b=Xd(this,a.target);if(-1<b&&b!=this.M){var c=O(this,this.M);c&&c.pb(!1);this.M=b;c=O(this,this.M);this.Yc&&c.setActive(!0);this.Wj&&this.Z&&c!=this.Z&&(c.U&64?Ce(c,!0):Ce(this.Z,!1))}b=this.i();null!=a.target.i()&&P(b,"activedescendant",a.target.i().id)};f.Bj=function(a){a.target==O(this,this.M)&&(this.M=-1);this.i().removeAttribute("aria-activedescendant")};f.zj=function(a){(a=a.target)&&a!=this.Z&&a.getParent()==this&&(this.Z&&Ce(this.Z,!1),this.Z=a)};
f.tj=function(a){a.target==this.Z&&(this.Z=null)};f.Rc=function(a){this.hc&&(this.Yc=!0);var b=this.ga();b&&Kc(b)&&Lc(b)?b.focus():a.preventDefault()};f.uj=function(){this.Yc=!1};f.sj=function(a){var b=Ve(this,a.target);if(b)switch(a.type){case "mousedown":b.Rc(a);break;case "mouseup":b.Ed(a);break;case "mouseover":b.Uf(a);break;case "mouseout":b.Tf(a);break;case "contextmenu":b.Cd(a)}};
function Ve(a,b){if(a.Ab)for(var c=a.i();b&&b!==c;){var d=b.id;if(d in a.Ab)return a.Ab[d];b=b.parentNode}return null}f.xe=function(){};f.Bd=function(){this.ed(-1);this.Yc=!1;this.Z&&Ce(this.Z,!1)};f.kb=function(a){return this.isEnabled()&&this.u()&&(0!=Ud(this)||this.ag)&&this.lc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.lc=function(a){var b=O(this,this.M);if(b&&"function"==typeof b.kb&&b.kb(a)||this.Z&&this.Z!=b&&"function"==typeof this.Z.kb&&this.Z.kb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Vb())this.ga().blur();else return!1;break;case 36:We(this);break;case 35:Xe(this);break;case 38:if(this.$c==Se)Ye(this);else return!1;break;case 37:if(this.$c==Ne)Vd(this)?Ze(this):Ye(this);else return!1;break;case 40:if(this.$c==Se)Ze(this);else return!1;break;case 39:if(this.$c==
Ne)Vd(this)?Ye(this):Ze(this);else return!1;break;default:return!1}return!0};function Te(a,b){var c=b.i(),c=c.id||(c.id=Qd(b));a.Ab||(a.Ab={});a.Ab[c]=b}f.ae=function(a,b){Re.j.ae.call(this,a,b)};f.Gc=function(a,b,c){a.Td|=2;a.Td|=64;!this.Vb()&&this.Ki||a.Ra(32,!1);a.v&&0!=a.Dd&&ze(a,!1);a.Dd=!1;var d=a.getParent()==this?Xd(this,a):-1;Re.j.Gc.call(this,a,b,c);a.v&&this.v&&Te(this,a);a=d;-1==a&&(a=Ud(this));a==this.M?this.M=Math.min(Ud(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=q(a)?Sd(this,a):a){var c=Xd(this,a);-1!=c&&(c==this.M?(a.pb(!1),this.M=-1):c<this.M&&this.M--);var d=a.i();d&&d.id&&this.Ab&&(c=this.Ab,d=d.id,d in c&&delete c[d])}c=a=Re.j.removeChild.call(this,a,b);c.v&&1!=c.Dd&&ze(c,!0);c.Dd=!0;return a};f.u=function(){return this.Q};
f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){this.Q=a;var c=this.i();c&&(Xc(c,a),this.Vb()&&Me(this.ga(),this.hc&&this.Q),b||this.dispatchEvent(this.Q?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.hc};f.Pd=function(a){this.hc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.hc=!0,Td(this,function(a){a.ui?delete a.ui:a.Pd(!0)})):(Td(this,function(a){a.isEnabled()?a.Pd(!1):a.ui=!0}),this.Yc=this.hc=!1),this.Vb()&&Me(this.ga(),a&&this.Q))};
f.Vb=function(){return this.Lf};f.zc=function(a){a!=this.Lf&&this.v&&Ue(this,a);this.Lf=a;this.hc&&this.Q&&Me(this.ga(),a)};f.ed=function(a){(a=O(this,a))?a.pb(!0):-1<this.M&&O(this,this.M).pb(!1)};f.pb=function(a){this.ed(Xd(this,a))};function We(a){$e(a,function(a,c){return(a+1)%c},Ud(a)-1)}function Xe(a){$e(a,function(a,c){a--;return 0>a?c-1:a},0)}function Ze(a){$e(a,function(a,c){return(a+1)%c},a.M)}function Ye(a){$e(a,function(a,c){a--;return 0>a?c-1:a},a.M)}
function $e(a,b,c){c=0>c?Xd(a,a.Z):c;var d=Ud(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=O(a,c);if(g&&a.Xg(g)){a.ed(c);break}e++;c=b.call(a,c,d)}}f.Xg=function(a){return a.u()&&a.isEnabled()&&!!(a.U&2)};function af(){}w(af,he);ca(af);af.prototype.xa=function(){return"goog-menuheader"};function bf(a,b,c){Q.call(this,a,c||af.Sb(),b);this.Ra(1,!1);this.Ra(2,!1);this.Ra(4,!1);this.Ra(32,!1);this.$=1}w(bf,Q);de("goog-menuheader",function(){return new bf(null)});function cf(a,b){Re.call(this,Se,b||Qe.Sb(),a);this.zc(!1)}w(cf,Re);f=cf.prototype;f.of=!0;f.Li=!1;f.xa=function(){return this.F.xa()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.k()};function df(a){a.of=!0;a.zc(!0)}f.G=function(a,b,c){(b=cf.j.G.call(this,a,b))&&a&&this.v&&this.of&&this.ga().focus();this.Xh=a&&c&&t(c.clientX)?new L(c.clientX,c.clientY):null;return b};f.Rf=function(a){this.of&&this.ga().focus();return cf.j.Rf.call(this,a)};
f.Xg=function(a){return(this.Li||a.isEnabled())&&a.u()&&!!(a.U&2)};f.lc=function(a){var b=cf.j.lc.call(this,a);b||Td(this,function(c){!b&&c.pj&&c.Qh==a.keyCode&&(this.isEnabled()&&this.pb(c),b=c.kb(a))},this);return b};
f.ed=function(a){cf.j.ed.call(this,a);if(a=O(this,a)){var b=a.i();a=this.i();var c=Tc(b),d=Tc(a),e=bd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new L(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function ef(a,b){this.Xc=a;this.wf=b;ff(this);var c=gf(this)[0];this.Oa=c[1];this.be=E("tspan",{},null);this.be.appendChild(document.createTextNode(x?hf+" ":" "+hf));ef.j.constructor.call(this,c[0])}w(ef,Gb);var hf=xb?"\u25bc":"\u25be";f=ef.prototype;f.clone=function(){return new ef(this.Xc,this.wf)};f.yi="default";
function Nb(a){jf(a);for(var b=new cf,c=gf(a),d=0;d<c.length;d++){var e=c[d][1],g=new Ke(c[d][0]);g.Ta(e);g.ug(!0);b.ae(g,!0);Be(g,e==a.Oa)}N(b,"action",function(b){if(b=b.target){b=b.Qc();if(a.h&&a.wf){var c=a.wf(b);void 0!==c&&(b=c)}null!==b&&a.Ta(b)}kf==a&&lf()});Rd(b).w(b.i(),"touchstart",function(a){Ve(this,a.target).Rc(a)});Rd(b).w(b.i(),"touchend",function(a){Ve(this,a.target).Ld(a)});c=Cc();d=Qc();e=mf(a.od);g=a.od.getBBox();b.C(nf);var h=b.i();Ib(h,"blocklyDropdownMenu");var k=Uc(h);e.y=
e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;x?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));of(e.x,e.y,c,d);df(b);h.focus()}
function ff(a){a.kg=null;a.Gg=null;var b=a.Xc;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=pf(c),e=qf(c,d),g=rf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.kg=c[0].substring(0,e-1));g&&(a.Gg=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.Xc=c}}}function gf(a){return u(a.Xc)?a.Xc.call(a):a.Xc}f.Qc=function(){return this.Oa};f.Ta=function(a){this.Oa=a;for(var b=gf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.Sa(b[c][0]);return}this.Sa(a)};
f.Sa=function(a){this.h&&(this.be.style.fill=sf(tf(this.h.yf)));null!==a&&a!==this.Ha&&(this.Ha=a,Hb(this),this.ma&&(x?this.ma.insertBefore(this.be,this.ma.firstChild):this.ma.appendChild(this.be)),this.h&&this.h.t&&(this.h.C(),this.h.Ka(),this.h.o.ub()))};f.k=function(){kf==this&&lf();ef.j.k.call(this)};/*

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
function uf(a,b,c,d){var e=J,g;if(e.vb)g=e.vb();else if(e.Eb)g=e.Eb();else throw"Not Block or Workspace: "+e;for(var e=Object.create(null),h=0;h<g.length;h++){var k=g[h].qj;if(k)for(var k=k.call(g[h]),l=0;l<k.length;l++){var m=k[l];m&&(e[m.toLowerCase()]=m)}}g=[];for(var p in e)g.push(e[p]);g.sort(La);g.unshift(null);p=void 0;for(e=0;e<g.length;e++)g[e]!==p&&((h=K.variables_get?Rb(d,"variables_get"):null)&&h.mb(),(k=K.variables_set?Rb(d,"variables_set"):null)&&k.mb(),null===g[e]?p=(h||k).qj()[0]:
(h&&Sb(h,"VAR").Ta(g[e]),k&&Sb(k,"VAR").Ta(g[e])),k&&a.push(k),h&&a.push(h),h&&k?b.push(c,3*c):b.push(2*c))};/*

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
var vf=/#(.)(.)(.)/;function sf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=wf(b.toString(16));c=wf(c.toString(16));a=wf(a.toString(16));return"#"+b+c+a}var xf=/^#(?:[0-9a-f]{3}){1,2}$/i;function wf(a){return 1==a.length?"0"+a:a}
function tf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function yf(a,b,c){c=Math.min(Math.max(c,0),1);return[Math.round(c*a[0]+(1-c)*b[0]),Math.round(c*a[1]+(1-c)*b[1]),Math.round(c*a[2]+(1-c)*b[2])]};function zf(a,b){null!=a&&this.append.apply(this,arguments)}f=zf.prototype;f.W="";f.set=function(a){this.W=""+a};f.append=function(a,b,c){this.W+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.W+=arguments[d];return this};f.clear=function(){this.W=""};f.toString=function(){return this.W};function Af(a,b,c){if(u(a))c&&(a=ma(a,c));else if(a&&"function"==typeof a.handleEvent)a=ma(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:n.setTimeout(a,b||0)};function R(a,b,c){Nd.call(this,c);this.oa=b||Cf;this.Vf=a instanceof ic?a:mc(a,null)}w(R,Nd);var Df={};f=R.prototype;f.sg=!1;f.td=!1;f.wk=null;f.Ji=sc;f.Id=!0;f.je=-1;f.X=function(){R.j.X.call(this);this.Cc&&(this.Cc.removeNode(this),this.Cc=null);this.s=null};
f.De=function(){var a=this.i();if(a){var b=Ef(this);b&&!b.id&&(b.id=Qd(this)+".label");ge(a,"treeitem");P(a,"selected",!1);P(a,"expanded",!1);P(a,"level",this.Nc());b&&P(a,"labelledby",b.id);(a=this.se())&&ge(a,"presentation");(a=this.re())&&ge(a,"presentation");if(a=Ff(this))if(ge(a,"group"),a.hasChildNodes())for(a=Ud(this),b=1;b<=a;b++){var c=O(this,b-1).i();P(c,"setsize",a);P(c,"posinset",b)}}};
f.H=function(){var a=this.jb(),b=this.Hg(),c=a.Db,a=c.createElement("div");B?(tc(a,rc(qc("br"),b)),a.removeChild(a.firstChild)):tc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.s=b};f.qa=function(){R.j.qa.call(this);Df[Qd(this)]=this;this.De()};f.$a=function(){R.j.$a.call(this);delete Df[Qd(this)]};
f.Gc=function(a,b){var c=O(this,b-1),d=O(this,b);R.j.Gc.call(this,a,b);a.rc=c;a.ob=d;c?c.ob=a:this.zh=a;d?d.rc=a:this.Nh=a;var e=this.Ca();e&&Gf(a,e);Hf(a,this.Nc()+1);if(this.i()&&(this.kd(),this.La())){e=Ff(this);a.i()||a.H();var g=a.i(),h=d&&d.i();e.insertBefore(g,h);this.v&&a.qa();d||(c?c.kd():(Xc(e,!0),this.Lb(this.La())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Gc(a,b?Xd(this,b):Ud(this));return a};
f.removeChild=function(a){var b=this.Ca(),c=b?b.Qa:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),Af(this.Vj,10,this)):this.select();R.j.removeChild.call(this,a);this.Nh==a&&(this.Nh=a.rc);this.zh==a&&(this.zh=a.ob);a.rc&&(a.rc.ob=a.ob);a.ob&&(a.ob.rc=a.rc);c=!a.ob;a.Cc=null;a.je=-1;if(b&&(b.removeNode(this),this.v)){b=Ff(this);if(a.v){var d=a.i();b.removeChild(d);a.$a()}c&&(c=O(this,Ud(this)-1))&&c.kd();Wd(this)||(b.style.display="none",this.kd(),this.se().className=this.oe())}return a};
f.remove=R.prototype.removeChild;f.Vj=function(){this.select()};f.Nc=function(){var a=this.je;0>a&&(a=(a=this.getParent())?a.Nc()+1:0,Hf(this,a));return a};function Hf(a,b){if(b!=a.je){a.je=b;var c=If(a);if(c){var d=Jf(a)+"px";Vd(a)?c.style.paddingRight=d:c.style.paddingLeft=d}Td(a,function(a){Hf(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.kc=function(){var a=[];Td(this,function(b){a.push(b)});return a};f.Fe=function(){return this.sg};
f.select=function(){var a=this.Ca();a&&a.Ac(this)};function Kf(a,b){if(a.sg!=b){a.sg=b;Lf(a);var c=a.i();c&&(P(c,"selected",b),b&&(c=a.Ca().i(),P(c,"activedescendant",Qd(a))))}}f.La=function(){return this.td};
f.Lb=function(a){var b=a!=this.td;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.td=a;c=this.Ca();var d=this.i();if(Wd(this)){if(!a&&c&&this.contains(c.Qa)&&this.select(),d){if(c=Ff(this))if(Xc(c,a),a&&this.v&&!c.hasChildNodes()){var e=[];Td(this,function(a){e.push(a.Hg())});tc(c,rc(e));Td(this,function(a){a.qa()})}this.kd()}}else(c=Ff(this))&&Xc(c,!1);d&&(this.se().className=this.oe(),P(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Lb(!this.La())};
f.expand=function(){this.Lb(!0)};f.collapse=function(){this.Lb(!1)};f.rg=function(){var a=this.getParent();a&&(a.Lb(!0),a.rg())};f.Hg=function(){var a=this.Ca(),b=!a.Sd||a==this.getParent()&&!a.yg?this.oa.bh:this.oa.ah,a=this.La()&&Wd(this),b={"class":b,style:Mf(this)},c=[];a&&Td(this,function(a){c.push(a.Hg())});a=qc("div",b,c);return qc("div",{"class":this.oa.kh,id:Qd(this)},[Nf(this),a])};function Jf(a){return Math.max(0,(a.Nc()-1)*a.oa.Yf)}
function Nf(a){var b={};b["padding-"+(Vd(a)?"right":"left")]=Jf(a)+"px";var b={"class":a.zd(),style:b},c=a.Of(),d=qc("span",{style:{display:"inline-block"},"class":a.oe()}),e=qc("span",{"class":a.oa.lh,title:a.wk||null},a.Vf);a=rc(e,qc("span",{},a.Ji));return qc("div",b,[c,d,a])}f.zd=function(){return this.oa.Cf+(this.Fe()?" "+this.oa.nh:"")};f.Of=function(){return qc("span",{type:"expand",style:{display:"inline-block"},"class":Of(this)})};
function Of(a){var b=a.Ca(),c=!b.Sd||b==a.getParent()&&!b.yg,d=a.oa,e=new zf;e.append(d.gc," ",d.Xi," ");if(Wd(a)){var g=0;b.xg&&a.Id&&(g=a.La()?2:1);c||(g=a.ob?g+8:g+4);switch(g){case 1:e.append(d.aj);break;case 2:e.append(d.$i);break;case 4:e.append(d.gh);break;case 5:e.append(d.Zi);break;case 6:e.append(d.Yi);break;case 8:e.append(d.hh);break;case 9:e.append(d.cj);break;case 10:e.append(d.bj);break;default:e.append(d.fh)}}else c?e.append(d.fh):a.ob?e.append(d.hh):e.append(d.gh);return e.toString()}
function Mf(a){var b=a.La()&&Wd(a);return ec({"background-position":Pf(a),display:b?null:"none"})}function Pf(a){return(a.ob?(a.Nc()-1)*a.oa.Yf:"-100")+"px 0"}f.i=function(){var a=R.j.i.call(this);a||(this.s=a=this.jb().i(Qd(this)));return a};function If(a){return(a=a.i())?a.firstChild:null}f.re=function(){var a=If(this);return a?a.firstChild:null};f.se=function(){var a=If(this);return a?a.childNodes[1]:null};function Ef(a){return(a=If(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Ff(a){return(a=a.i())?a.lastChild:null}f.Sa=function(a){this.Vf=a=lc(a);var b=Ef(this);b&&tc(b,a);(a=this.Ca())&&Qf(a,this)};f.wb=function(){var a=kc(this.Vf);return-1!=a.indexOf("&")?"document"in n?Ua(a):Wa(a):a};function Lf(a){var b=If(a);b&&(b.className=a.zd())}f.kd=function(){var a=this.re();a&&(a.className=Of(this));if(a=Ff(this))a.style.backgroundPosition=Pf(this)};f.fg=function(a){"expand"==a.target.getAttribute("type")&&Wd(this)?this.Id&&this.toggle():(this.select(),Lf(this))};
f.Th=function(a){"expand"==a.target.getAttribute("type")&&Wd(this)||this.Id&&this.toggle()};function Rf(a){return a.La()&&Wd(a)?Rf(O(a,Ud(a)-1)):a}function Gf(a,b){a.Cc!=b&&(a.Cc=b,Qf(b,a),Td(a,function(a){Gf(a,b)}))}
var Cf={Yf:19,mh:"goog-tree-root goog-tree-item",jh:"goog-tree-hide-root",kh:"goog-tree-item",ah:"goog-tree-children",bh:"goog-tree-children-nolines",Cf:"goog-tree-row",lh:"goog-tree-item-label",gc:"goog-tree-icon",Xi:"goog-tree-expand-icon",aj:"goog-tree-expand-icon-plus",$i:"goog-tree-expand-icon-minus",cj:"goog-tree-expand-icon-tplus",bj:"goog-tree-expand-icon-tminus",Zi:"goog-tree-expand-icon-lplus",Yi:"goog-tree-expand-icon-lminus",hh:"goog-tree-expand-icon-t",gh:"goog-tree-expand-icon-l",fh:"goog-tree-expand-icon-blank",
Af:"goog-tree-expanded-folder-icon",dh:"goog-tree-collapsed-folder-icon",Bf:"goog-tree-file-icon",ih:"goog-tree-expanded-folder-icon",eh:"goog-tree-collapsed-folder-icon",nh:"selected"};function Sf(a,b,c){R.call(this,a,b,c)}w(Sf,R);Sf.prototype.Ca=function(){if(this.Cc)return this.Cc;var a=this.getParent();return a&&(a=a.Ca())?(Gf(this,a),a):null};Sf.prototype.oe=function(){var a=this.La(),b=this.kj;if(a&&b)return b;b=this.Dj;if(!a&&b)return b;b=this.oa;if(Wd(this)){if(a&&b.Af)return b.gc+" "+b.Af;if(!a&&b.dh)return b.gc+" "+b.dh}else if(b.Bf)return b.gc+" "+b.Bf;return""};/*

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
function Tf(a){var b;x&&(b=workarea.we());var c=M("xml");a=Fa(a,!0);for(var d=0,e;e=a[d];d++){var g=Uf(e);e=e.O();g.setAttribute("x",x?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}return c}
function Uf(a){var b=M("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Zc){var c=a.Zc();c&&b.appendChild(c)}for(var d=0;c=a.S[d];d++)for(var e=0,g;g=c.wa[e];e++)if(g.name&&g.Fc){var h=M("field",null,g.Qc());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.Ah())c=M("comment",null,c),"object"==typeof a.L&&(c.setAttribute("pinned",a.L.u()),d=a.L.jc(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.S[e];e++){var k;g=!0;5!=c.type&&
(h=S(c.n),1==c.type?(k=M("value"),d=!0):3==c.type&&(k=M("statement")),h&&(k.appendChild(Uf(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.Gd);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Kc&&!I||b.setAttribute("deletable",!1);a.Jb&&!I||b.setAttribute("movable",!1);a.Lc&&!I||b.setAttribute("editable",!1);if(a=Vf(a))k=M("next",null,Uf(a)),b.appendChild(k);return b}
function Wf(a){return(new XMLSerializer).serializeToString(a)}function Xf(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Yf(a,b){var c;x&&(c=a.we());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=Zf(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(x?c-h:h,e)}}
function Zf(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=$f(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.o&&d.k(!0,!1,!0);d.fill(a,e);d.za=g}else d=Rb(a,e);d.mb&&d.mb();(g=b.getAttribute("inline"))&&ag(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Od("true"==g);(g=b.getAttribute("deletable"))&&bg(d,"true"==g);if(g=b.getAttribute("movable"))d.Jb="true"==g;(g=b.getAttribute("editable"))&&cg(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,l=0,m;m=k.childNodes[l];l++)3==m.nodeType&&m.data.match(/^\s*$/)||(h=m);l=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.rd&&(d.rd(k),d.mb&&d.mb());break;case "comment":d.Nd(k.textContent);var p=k.getAttribute("pinned");p&&setTimeout(function(){d.L&&d.L.G&&d.L.G("true"==p)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.L&&d.L.G&&d.L.xc(h,k);break;case "title":case "field":Sb(d,l).Ta(k.textContent);break;case "value":case "statement":k=dg(d,l);if(!k)throw"Input "+l+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=Zf(a,h,c),h.K)eg(k.n,h.K);else if(h.B)eg(k.n,h.B);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.J)throw"Next statement does not exist.";if(d.J.m)throw"Next statement is already connected.";
h=Zf(a,h,c);if(!h.B)throw"Next block does not have previous statement.";eg(d.J,h.B)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.yc("true"==b);a.t&&((a=Vf(d))?a.C():d.C());return d}function fg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}n.Blockly||(n.Blockly={});n.Blockly.Xml||(n.Blockly.Xml={});n.Blockly.Xml.domToText=Wf;n.Blockly.Xml.domToWorkspace=Yf;n.Blockly.Xml.textToDom=Xf;
n.Blockly.Xml.workspaceToDom=Tf;/*

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
function gg(a,b,c,d,e,g,h){var k=hg;x&&(k=-k);this.Ni=k*Math.PI/180;this.p=a;this.Cb=b;this.ji=c;a.hd.appendChild(this.zf(b,!(!g||!h)));ig(this,d,e);g&&h||(a=this.Cb.getBBox(),g=a.width+2*jg,h=a.height+2*jg);this.xc(g,h);kg(this);lg(this);this.qg=!0;I||(F(this.ee,"mousedown",this,this.Ri),this.Kb&&F(this.Kb,"mousedown",this,this.dk))}var jg=6,hg=20,mg=null,ng=null;function og(){mg&&(G(mg),mg=null);ng&&(G(ng),ng=null)}f=gg.prototype;f.qg=!1;f.cb=0;f.rf=0;f.uc=0;f.Md=0;f.A=0;f.ha=0;f.uf=!0;
f.zf=function(a,b){this.eb=E("g",{},null);var c=E("g",{filter:"url(#blocklyEmboss)"},this.eb);this.Tg=E("path",{},c);this.ee=E("rect",{"class":"blocklyDraggable",x:0,y:0,rx:jg,ry:jg},c);b?(this.Kb=E("g",{"class":x?"blocklyResizeSW":"blocklyResizeSE"},this.eb),c=2*jg,E("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.Kb),E("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.Kb),E("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.Kb)):this.Kb=
null;this.eb.appendChild(a);return this.eb};f.Ri=function(a){pg(this);og();Lb(a)||qg(a)||(rg(sg),this.wh=x?this.uc+a.clientX:this.uc-a.clientX,this.ij=this.Md-a.clientY,mg=F(document,"mouseup",this,og),ng=F(document,"mousemove",this,this.Si),tg(),a.stopPropagation())};f.Si=function(a){this.uf=!1;this.uc=x?this.wh-a.clientX:this.wh+a.clientX;this.Md=this.ij+a.clientY;kg(this);lg(this)};
f.dk=function(a){pg(this);og();Lb(a)||(rg(sg),this.ck=x?this.A+a.clientX:this.A-a.clientX,this.bk=this.ha-a.clientY,mg=F(document,"mouseup",this,og),ng=F(document,"mousemove",this,this.ek),tg(),a.stopPropagation())};f.ek=function(a){this.uf=!1;var b=this.ck,c=this.bk+a.clientY,b=x?b-a.clientX:b+a.clientX;this.xc(b,c);x&&kg(this)};function pg(a){a.eb.parentNode.appendChild(a.eb)}function ig(a,b,c){a.cb=b;a.rf=c;a.qg&&kg(a)}
function kg(a){a.eb.setAttribute("transform","translate("+(x?a.cb-a.uc-a.A:a.cb+a.uc)+", "+(a.Md+a.rf)+")")}f.jc=function(){return{width:this.A,height:this.ha}};
f.xc=function(a,b){var c=2*jg;a=Math.max(a,c+45);b=Math.max(b,c+18);this.A=a;this.ha=b;this.ee.setAttribute("width",a);this.ee.setAttribute("height",b);this.Kb&&(x?this.Kb.setAttribute("transform","translate("+2*jg+", "+(b-c)+") scale(-1 1)"):this.Kb.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.qg){if(this.uf){var c=-this.A/4,d=-this.ha-25,e=this.p.Fb();x?this.cb-e.Va-c-this.A<T?c=this.cb-e.Va-this.A-T:this.cb-e.Va-c>e.V&&(c=this.cb-e.Va-e.V):this.cb+c<e.Va?c=e.Va-this.cb:
e.Va+e.V<this.cb+c+this.A+10+T&&(c=e.Va+e.V-this.cb-this.A-T);this.rf+d<e.bc&&(d=this.ji.getBBox().height);this.uc=c;this.Md=d}kg(this);lg(this)}ug(this.eb,"resize")};
function lg(a){var b=[],c=a.A/2,d=a.ha/2,e=-a.uc,g=-a.Md;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;x&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var l=k+Math.PI/2;l>2*Math.PI&&(l-=2*Math.PI);var m=Math.sin(l),p=Math.cos(l),v=a.jc(),l=(v.width+v.height)/10,l=Math.min(l,v.width,v.height)/2,v=1-8/h,e=c+v*e,g=d+v*g,v=c+l*p,r=d+l*m,c=c-l*p,d=d-l*m,m=k+a.Ni;m>2*Math.PI&&(m-=2*Math.PI);k=Math.sin(m)*h/4;h=Math.cos(m)*h/4;b.push("M"+v+","+r);b.push("C"+(v+h)+","+(r+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.Tg.setAttribute("d",b.join(" "))}f.dd=function(a){this.ee.setAttribute("fill",a);this.Tg.setAttribute("fill",a)};f.k=function(){og();H(this.eb);this.ji=this.Cb=this.p=this.eb=null};/*

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
function vg(a){this.p=a}f=vg.prototype;f.md=47;f.kf=45;f.ld=15;f.Ai=35;f.Ng=35;f.$d=25;f.Vc=!1;f.g=null;f.ff=null;f.bg=0;f.Yb=0;f.Oh=0;f.pi=0;
f.H=function(){this.g=E("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=E("clipPath",{id:"blocklyTrashBodyClipPath"},this.g);E("rect",{width:this.md,height:this.kf,y:this.ld},a);E("image",{width:wg,height:xg,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.g).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yg+zg);a=E("clipPath",{id:"blocklyTrashLidClipPath"},this.g);E("rect",{width:this.md,height:this.ld},a);this.ff=E("image",{width:wg,height:xg,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.g);this.ff.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yg+zg);this.sf();return this.g};f.I=function(){Ag(this,!1);this.Zb();F(window,"resize",this,this.Zb)};f.k=function(){this.g&&(H(this.g),this.g=null);this.p=this.ff=null;n.clearTimeout(this.bg)};f.Zb=function(){var a=this.p.Fb();a&&(this.Oh=x?this.Ng:a.V+a.Wa-this.md-this.Ng,this.pi=a.ta+a.Xa-(this.kf+this.ld)-this.Ai,this.g.setAttribute("transform","translate("+this.Oh+","+this.pi+")"))};
f.yd=function(){var a=Bg(this.g);return new Ub(a.x-this.$d,a.y-this.$d,this.md+2*this.$d,this.kf+this.ld+2*this.$d)};function Ag(a,b){a.Vc!=b&&(n.clearTimeout(a.bg),a.Vc=b,a.sf())}f.sf=function(){this.Yb+=this.Vc?.2:-.2;this.Yb=Math.min(Math.max(this.Yb,0),1);var a=45*this.Yb;this.ff.setAttribute("transform","rotate("+(x?-a:a)+", "+(x?4:this.md-4)+", "+(this.ld-2)+")");this.g.style.opacity=.2+.2*this.Yb;if(0<this.Yb||1>this.Yb)this.bg=Af(this.sf,20,this)};f.close=function(){Ag(this,!1)};/*

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
function Cg(a){this.p=a;this.P=null;this.Ad=new Dg(a,!0,!0);this.Yd=new Dg(a,!1,!0);this.pd=E("rect",{height:T,width:T,style:"fill: #fff"},null);Eg(this.pd,a.hd)}Cg.prototype.k=function(){G(this.Re);this.Re=null;H(this.pd);this.P=this.p=this.pd=null;this.Ad.k();this.Ad=null;this.Yd.k();this.Yd=null};
Cg.prototype.resize=function(){var a=this.p.Fb();if(a){var b=!1,c=!1;this.P&&this.P.V==a.V&&this.P.ta==a.ta&&this.P.Xa==a.Xa&&this.P.Wa==a.Wa?(this.P&&this.P.Ic==a.Ic&&this.P.Va==a.Va&&this.P.Bb==a.Bb||(b=!0),this.P&&this.P.Za==a.Za&&this.P.bc==a.bc&&this.P.gb==a.gb||(c=!0)):c=b=!0;b&&this.Ad.resize(a);c&&this.Yd.resize(a);this.P&&this.P.V==a.V&&this.P.Wa==a.Wa||this.pd.setAttribute("x",this.Yd.cc);this.P&&this.P.ta==a.ta&&this.P.Xa==a.Xa||this.pd.setAttribute("y",this.Ad.jf);this.P=a}};
Cg.prototype.set=function(a,b){this.Ad.set(a);this.Yd.set(b)};function Dg(a,b,c){this.p=a;this.Se=c||!1;this.Da=b;this.zf();b?(this.ab.setAttribute("height",T),this.ba.setAttribute("height",T-6),this.ba.setAttribute("y",3)):(this.ab.setAttribute("width",T),this.ba.setAttribute("width",T-6),this.ba.setAttribute("x",3));this.Vh=F(this.ab,"mousedown",this,this.Rj);this.Wh=F(this.ba,"mousedown",this,this.Sj)}var Fg,Gg,T=15;aa("document.documentElement.ontouchstart")&&(T=25);f=Dg.prototype;
f.k=function(){this.Qe();this.Re&&(G(this.Re),this.Re=null);G(this.Vh);this.Vh=null;G(this.Wh);this.Wh=null;H(this.g);this.p=this.ba=this.ab=this.g=null};
f.resize=function(a){if(!a&&(a=this.p.Fb(),!a))return;if(this.Da){var b=a.V;this.Se?b-=T:this.G(b<a.Za);this.Ma=b/a.Ic;if(-Infinity===this.Ma||Infinity===this.Ma||isNaN(this.Ma))this.Ma=0;var c=a.V*this.Ma,d=(a.Va-a.Bb)*this.Ma;this.ba.setAttribute("width",Math.max(0,c));this.cc=a.Wa;this.Se&&x&&(this.cc+=a.Wa+T);this.jf=a.Xa+a.ta-T;this.g.setAttribute("transform","translate("+this.cc+", "+this.jf+")");this.ab.setAttribute("width",Math.max(0,b));this.ba.setAttribute("x",Hg(this,d))}else{b=a.ta;this.Se?
b-=T:this.G(b<a.Za);this.Ma=b/a.Za;if(-Infinity===this.Ma||Infinity===this.Ma||isNaN(this.Ma))this.Ma=0;c=a.ta*this.Ma;d=(a.bc-a.gb)*this.Ma;this.ba.setAttribute("height",Math.max(0,c));this.cc=a.Wa;x||(this.cc+=a.V-T);this.jf=a.Xa;this.g.setAttribute("transform","translate("+this.cc+", "+this.jf+")");this.ab.setAttribute("height",Math.max(0,b));this.ba.setAttribute("y",Hg(this,d))}Ig(this)};
f.zf=function(){this.g=E("g",{},null);this.ab=E("rect",{"class":"blocklyScrollbarBackground"},this.g);var a=Math.floor((T-6)/2);this.ba=E("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.g);Eg(this.g,this.p.hd)};f.u=function(){return"none"!=this.g.getAttribute("display")};f.G=function(a){if(a!=this.u()){if(this.Se)throw"Unable to toggle visibility of paired scrollbars.";a?this.g.setAttribute("display","block"):(this.p.gi({x:0,y:0}),this.g.setAttribute("display","none"))}};
f.Rj=function(a){this.Qe();if(!Lb(a)){var b=Jg(a),b=this.Da?b.x:b.y,c=Bg(this.ba),c=this.Da?c.x:c.y,d=parseFloat(this.ba.getAttribute(this.Da?"width":"height")),e=parseFloat(this.ba.getAttribute(this.Da?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ba.setAttribute(this.Da?"x":"y",Hg(this,e));Ig(this)}a.stopPropagation()};
f.Sj=function(a){this.Qe();Lb(a)||(this.lk=parseFloat(this.ba.getAttribute(this.Da?"x":"y")),this.ok=this.Da?a.clientX:a.clientY,Fg=F(document,"mouseup",this,this.Qe),Gg=F(document,"mousemove",this,this.Uj));a.stopPropagation()};f.Uj=function(a){this.ba.setAttribute(this.Da?"x":"y",Hg(this,this.lk+((this.Da?a.clientX:a.clientY)-this.ok)));Ig(this)};f.Qe=function(){Kg();tg(!0);Fg&&(G(Fg),Fg=null);Gg&&(G(Gg),Gg=null)};
function Hg(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.Da?"width":"height",d=parseFloat(a.ab.getAttribute(c)),c=parseFloat(a.ba.getAttribute(c));b=Math.min(b,d-c)}return b}function Ig(a){var b=parseFloat(a.ba.getAttribute(a.Da?"x":"y")),c=parseFloat(a.ab.getAttribute(a.Da?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.Da?c.x=b:c.y=b;a.p.gi(c)}f.set=function(a){this.ba.setAttribute(this.Da?"x":"y",a*this.Ma);Ig(this)};
function Eg(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function Lg(a,b){Lg.j.constructor.call(this);this.Fb=a;this.gi=b;var c=[];c[1]=new Mg;c[2]=new Mg;c[3]=new Mg;c[4]=new Mg;this.Vi=c}w(Lg,Ea);f=Lg.prototype;f.t=!0;f.Mh=!1;f.Hf=!1;f.scrollX=0;f.scrollY=0;f.Ua=null;f.Jf=null;f.ac=null;f.H=function(){this.g=E("g",{},null);this.aa=E("g",{},this.g);this.hd=E("g",{},this.g);this.ub();return this.g};
f.k=function(){this.t=!1;Lg.j.k.call(this);this.g&&(H(this.g),this.g=null);this.hd=this.aa=null;this.ra&&(this.ra.k(),this.ra=null);this.Ua&&(this.Ua.k(),this.Ua=null)};function Ng(){var a=J;if(qa&&!I){a.Ua=new vg(a);var b=a.Ua.H();a.g.insertBefore(b,a.aa);a.Ua.I()}}f.nd=function(a){Lg.j.nd.call(this,a);Og&&this==J&&-1==Pg.indexOf(a)&&Pg.push(a)};f.$e=function(a){Lg.j.$e.call(this,a);Og&&this==J&&Pg.kl(a)};f.clear=function(){tg();Lg.j.clear.call(this)};f.we=function(){return this.Fb().V};
f.C=function(){for(var a=this.Eb(),b=0,c;c=a[b];b++)c.kc().length||c.C()};function Qg(a,b){a.Ig=b;a.Jg&&(G(a.Jg),a.Jg=null);b&&(a.Jg=F(a.aa,"blocklySelectChange",a,function(){this.Ig=!1}))}function Rg(a){var b=J;b.Ig&&0!=Mb&&Qg(b,!1);if(b.Ig){var c=null;if(a&&(c=Ga(b,a),!c))return;Qg(b,!1);c?c.select():U&&Sg(U);setTimeout(function(){Qg(b,!0)},1)}}f.ub=function(){if(this.t){this.Jf&&clearTimeout(this.Jf);var a=this.aa;a&&(this.Jf=setTimeout(function(){ug(a,"blocklyWorkspaceChange")},0))}};
function Tg(a,b){var c=Jg(b),c=new L(c.x,c.y);if(a.ph){if(a.ph.contains(c))return Ag(a.Ua,!0),rg(Ug),!0;Ag(a.Ua,!1)}if(a.oh&&a.oh.contains(c))return rg(Ug),!0;rg(sg);return!1}Lg.prototype.clear=Lg.prototype.clear;/*

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
function Vg(a){this.Ja=a}f=Vg.prototype;f.na=null;f.Sc=0;f.Tc=0;f.Jc=function(){this.Ea||(this.Ea=E("g",{},null),this.Ja.D().appendChild(this.Ea),F(this.Ea,"mouseup",this,this.Ej),this.Ec())};f.k=function(){H(this.Ea);this.Ea=null;this.G(!1);this.Ja=null};f.Ec=function(){this.Ja.Wb?Jb(this.Ea,"blocklyIconGroup"):Ib(this.Ea,"blocklyIconGroup")};f.u=function(){return!!this.na};f.Ej=function(){this.Ja.Wb||this.G(!this.u())};f.Dc=function(){if(this.u()){var a=sf(tf(this.Ja.yf));this.na.dd(a)}};
function Wg(a){var b=a.Ja.O(),c=Xg(a.Ea),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Sc||b!==a.Tc)a.Sc=d,a.Tc=b,a.u()&&ig(a.na,d,b)};/*

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
function Yg(a,b){this.h=a;this.m=null;this.type=b;this.N=this.rb=0;this.xb=!1;this.Pb=this.h.o.Vi}f=Yg.prototype;f.k=function(){if(this.m)throw"Disconnect connection before disposing of it.";this.xb&&Zg(this.Pb[this.type],this);this.xb=!1;$g==this&&($g=null);ah==this&&(ah=null)};function bh(a){return 1==a.type||3==a.type}
function eg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.o!==b.h.o)throw"Blocks are on different workspaces.";if(ch[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.m)throw"Source connection already connected (value).";if(b.m){var c=S(b);c.Ga(null);if(!c.K)throw"Orphan block does not have an output connection.";for(var d=a.h;d=dh(d,c);)if(S(d))d=S(d);else{eg(d,c.K);c=null;break}c&&setTimeout(function(){eh(c.K,b)},fh)}}else{if(a.m)throw"Source connection already connected (block).";
if(b.m){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=S(b);c.Ga(null);if(!c.B)throw"Orphan block does not have a previous connection.";for(d=a.h;d.J;)if(d.J.m)d=Vf(d);else{gh(c.B,d.J)&&(eg(d.J,c.B),c=null);break}c&&setTimeout(function(){eh(c.B,b)},fh)}}var e;bh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.m=b;b.m=a;e.Ga(d);d.t&&hh(d);e.t&&hh(e);d.t&&e.t&&(3==a.type||4==a.type?e.C():d.C())}
function dh(a,b){for(var c=!1,d=0;d<a.S.length;d++){var e=a.S[d].n;if(e&&1==e.type&&gh(b.K,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.m;if(!a)throw"Source connection not connected.";if(a.m!=this)throw"Target connection not connected to source connection.";this.m=a.m=null;var b;bh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.t&&b.C();a.t&&(hh(a),a.C())};function S(a){return a.m?a.m.h:null}
function eh(a,b){if(0==Mb){var c=ih(a.h);if(!c.Wb){var d=!1;if(!c.Jb||I){c=ih(b.h);if(!c.Jb||I)return;b=a;d=!0}c.D().parentNode.appendChild(c.D());var e=b.rb+V-a.rb,g=b.N+V-a.N;d&&(g=-g);x&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.xb&&Zg(this.Pb[this.type],this);this.rb=a;this.N=b;jh(this.Pb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.rb+a,this.N+b)};
f.Ih=function(){var a;1==this.type||2==this.type?(a=x?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=x?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.O();Yg.ze=E("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.rb-b.x)+", "+(this.N-b.y)+")"},this.h.D())};
function kh(a){var b=Math.round(a.m.rb-a.rb),c=Math.round(a.m.N-a.N);if(0!=b||0!=c){a=S(a);var d=a.D();if(!d)throw"block is not rendered.";d=Xg(d);a.D().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");lh(a,-b,-c)}}
function mh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.m||1==c.type&&c.m&&(!S(c).Jb||I)||!gh(v,c))return!0;c=c.h;do{if(p==c)return!0;c=c.getParent()}while(c);var d=h-g[a].rb,c=k-g[a].N,d=Math.sqrt(d*d+c*c);d<=b&&(m=g[a],b=d);return c<b}if(a.m)return{n:null,$h:b};var g=a.Pb[ch[a.type]],h=a.rb+c,k=a.N+d;c=0;for(var l=d=g.length-2;c<l;)g[l].N<k?c=l:d=l,l=Math.floor((c+d)/2);d=c=l;var m=null,p=a.h,v=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{n:m,$h:b}}
function gh(a,b){if(!a.Hc||!b.Hc)return!0;for(var c=0;c<a.Hc.length;c++)if(-1!=b.Hc.indexOf(a.Hc[c]))return!0;return!1}f.cd=function(a){a?(ea(a)||(a=[a]),this.Hc=a,this.m&&!gh(this,this.m)&&(bh(this)?S(this).Ga(null):this.h.Ga(null),this.h.Ka())):this.Hc=null;return this};
function nh(a){var b=V;function c(a){var c=e-d[a].rb,h=g-d[a].N;Math.sqrt(c*c+h*h)<=b&&l.push(d[a]);return h<b}var d=a.Pb[ch[a.type]],e=a.rb,g=a.N;a=0;for(var h=d.length-2,k=h;a<k;)d[k].N<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,l=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return l}
function oh(a){a.xb||jh(a.Pb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=S(a)){var c;a.isCollapsed()?(c=[],a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B)):c=ph(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,oh(c[d]));0==b.length&&(b[0]=a)}return b}function Mg(){}Mg.prototype=[];function jh(a,b){if(b.xb)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].N<b.N)c=e+1;else if(a[e].N>b.N)d=e;else{c=e;break}}a.splice(c,0,b);b.xb=!0}
function Zg(a,b){if(!b.xb)throw"Connection not in database.";b.xb=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].N<b.N?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].N==b.N;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].N==b.N);throw"Unable to find connection in connectionDB.";};/*

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
var K={xk:0,mj:function(){var a=(++K.xk).toString();return Og?qh(a):a},Hk:function(a){var b={I:function(){var b=this;this.dd(a.Pk);this.Ub=a.Ub;"string"==typeof a.Ia?this.fd(a.Ia):"function"==typeof a.Ia&&this.fd(function(){return a.Ia(b)});"undefined"!=a.Xj?rh(this,a.Xj):(sh(this,"undefined"==typeof a.Zj?!0:a.Zj),th(this,"undefined"==typeof a.Qj?!0:a.Qj));var d=[];d.push(a.text);a.Mi&&a.Mi.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
jb("addTemplate() can only handle value inputs.")});d.push(1);a.Hj&&this.ul(a.Hj);uh.prototype.Hd.apply(this,d)}};b.Zc=a.wl?function(){var b=a.Nj?a.hl():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.Nj;K[a.Lk]=b}};/*

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
function vh(a){vh.j.constructor.call(this,a);this.Jc()}w(vh,Vg);f=vh.prototype;f.Ha="";f.A=160;f.ha=80;f.Jc=function(){Vg.prototype.Jc.call(this);E("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.Ea);this.Wf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.Ea);this.Wf.appendChild(document.createTextNode("?"))};f.Ec=function(){this.u()&&(this.G(!1),this.G(!0));Vg.prototype.Ec.call(this)};
f.ak=function(){var a=this.na.jc(),b=2*jg;this.vd.setAttribute("width",a.width-b);this.vd.setAttribute("height",a.height-b);this.Na.style.width=a.width-b-4+"px";this.Na.style.height=a.height-b-4+"px"};
f.G=function(a){if(a!=this.u())if((!this.Ja.Lc||I)&&!this.Na||B)wh.prototype.G.call(this,a);else{var b=this.wb(),c=this.jc();if(a){a=this.Ja.o;this.vd=E("foreignObject",{x:jg,y:jg},null);var d=document.createElementNS("http://www.w3.org/1999/xhtml","body");d.setAttribute("xmlns","http://www.w3.org/1999/xhtml");d.className="blocklyMinimalBody";this.Na=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Na.className="blocklyCommentTextarea";this.Na.setAttribute("dir",x?"RTL":"LTR");
d.appendChild(this.Na);this.vd.appendChild(d);F(this.Na,"mouseup",this,this.vk);this.na=new gg(a,this.vd,this.Ja.Mb,this.Sc,this.Tc,this.A,this.ha);F(this.na.eb,"resize",this,this.ak);this.Dc();this.Ha=null}else this.na.k(),this.vd=this.Na=this.na=null;this.Sa(b);this.xc(c.width,c.height)}};f.vk=function(){pg(this.na);this.Na.focus()};f.jc=function(){return this.u()?this.na.jc():{width:this.A,height:this.ha}};f.xc=function(a,b){this.Na?this.na.xc(a,b):(this.A=a,this.ha=b)};
f.wb=function(){return this.Na?this.Na.value:this.Ha};f.Sa=function(a){this.Na?this.Na.value=a:this.Ha=a};f.k=function(){this.Ja.L=null;Vg.prototype.k.call(this)};/*

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
var xh=!1,yh=0,zh=0,Ah={x:0,y:0},Bh=null,Ch=null,Dh=null,Eh=null,Fh=null,Gh=null;function Hh(){var a=E("g",{"class":"blocklyHidden"},null);Dh=a;Gh=E("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Fh=E("rect",{"class":"blocklyTooltipBackground"},a);Eh=E("text",{"class":"blocklyTooltipText"},a);return a}function Ih(a){F(a,"mouseover",null,Jh);F(a,"mouseout",null,Kh);F(a,"mousemove",null,Lh)}function Jh(a){for(a=a.target;!q(a.Ia)&&!u(a.Ia);)a=a.Ia;Bh!=a&&(Mh(),Ch=null,Bh=a);clearTimeout(yh)}
function Kh(){yh=setTimeout(function(){Ch=Bh=null;Mh()},1);clearTimeout(zh)}function Lh(a){Bh&&Bh.Ia&&0==Mb&&!kf&&(xh?(a=Jg(a),10<Math.sqrt(Math.pow(Ah.x-a.x,2)+Math.pow(Ah.y-a.y,2))&&Mh()):Ch!=Bh&&(clearTimeout(zh),Ah=Jg(a),zh=setTimeout(Nh,1E3)))}function Mh(){xh&&(xh=!1,Dh&&(Dh.style.display="none"));clearTimeout(zh)}
function Nh(){Ch=Bh;if(Dh){Kb(Eh);var a=Bh.Ia;u(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,l=1,d=0;d<c.length-1;d++)l<(d+1.5)/k?(l++,b[d]=!0):b[d]=!1;for(var b=Oh(c,b,a),d=Ph(c,b,a),k=c,l=[],m=0;m<k.length;m++)l.push(k[m]),void 0!==b[m]&&l.push(b[m]?"\n":" ");b=l.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)E("tspan",{dy:"1em",x:5},
Eh).appendChild(document.createTextNode(a[c]));xh=!0;Dh.style.display="block";a=Eh.getBBox();c=10+a.width;e=a.height;Fh.setAttribute("width",c);Fh.setAttribute("height",e);Gh.setAttribute("width",c);Gh.setAttribute("height",e);if(x)for(e=a.width,g=0;h=Eh.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=Ah.x;e=x?e-(0+c):e+0;c=Ah.y+10;g=Qh();c+a.height>g.height&&(c-=a.height+20);x?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);Dh.setAttribute("transform",
"translate("+e+","+c+")")}}function Ph(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Oh(a,b,c){for(var d=Ph(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=Ph(a,h,c);k>d&&(d=k,e=h)}return e?Oh(a,e,c):b};/*

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
function Rh(a){this.h=null;this.gd=new Fb(0,25);this.Sa(a)}w(Rh,Gb);f=Rh.prototype;f.clone=function(){return new Rh(this.wb())};f.Fc=!1;f.I=function(a){this.h||(this.h=a,this.ma=E("text",{"class":"blocklyText"},null),a.D().appendChild(this.ma),this.ma.Ia=this.h,Ih(this.ma),Hb(this))};f.k=function(){H(this.ma);this.ma=null};f.D=function(){return this.ma};f.fd=function(a){this.ma.Ia=a};/*

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
function Sh(a,b,c,d){this.type=a;this.name=b;this.h=c;this.n=d;this.wa=[];this.align=-1;this.Q=!0}function Th(a,b,c){if(!b&&!c)return a;q(b)&&(b=new Rh(b));a.h.t&&b.I(a.h);b.name=c;b.kg&&Th(a,b.kg);a.wa.push(b);b.Gg&&Th(a,b.Gg);a.h.t&&(a.h.C(),a.h.Ka());return a}f=Sh.prototype;f.u=function(){return this.Q};
f.G=function(a){var b=[];if(this.Q==a)return b;for(var c=(this.Q=a)?"block":"none",d=0,e;e=this.wa[d];d++)e.G(a);if(this.n){if(a)b=oh(this.n);else if(d=this.n,d.xb&&Zg(d.Pb[d.type],d),d.m){e=S(d).vb();for(var g=0;g<e.length;g++){for(var h=e[g],k=ph(h,!0),l=0;l<k.length;l++){var m=k[l];m.xb&&Zg(d.Pb[m.type],m)}h=Uh(h);for(k=0;k<h.length;k++)h[k].G(!1)}}if(d=S(this.n))d.D().style.display=c,a||(d.t=!1)}return b};f.cd=function(a){if(!this.n)throw"This input does not have a connection.";this.n.cd(a);return this};
function Vh(a,b){a.align=b;a.h.t&&a.h.C();return a}f.I=function(){for(var a=0;a<this.wa.length;a++)this.wa[a].I(this.h)};f.k=function(){for(var a=0,b;b=this.wa[a];a++)b.k();this.n&&this.n.k();this.h=null};/*

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
function wh(a){wh.j.constructor.call(this,a);this.Jc()}w(wh,Vg);f=wh.prototype;f.Ha="";f.Jc=function(){Vg.prototype.Jc.call(this);E("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.Ea);this.Wf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.Ea);this.Wf.appendChild(document.createTextNode("!"))};
f.G=function(a){if(a!=this.u())if(a){var b=this.Ha;a=E("text",{"class":"blocklyText blocklyBubbleText",y:jg},null);for(var b=b.split("\n"),c=0;c<b.length;c++)E("tspan",{dy:"1em",x:jg},a).appendChild(document.createTextNode(b[c]));this.na=new gg(this.Ja.o,a,this.Ja.Mb,this.Sc,this.Tc,null,null);if(x)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+jg);this.Dc();a=this.na.jc();this.na.xc(a.width,a.height)}else this.na.k(),this.na=null};
f.Sa=function(a){this.Ha!=a&&(this.Ha=a,this.u()&&(this.G(!1),this.G(!0)))};f.k=function(){this.Ja.Zd=null;Vg.prototype.k.call(this)};/*

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
function uh(){}function Rb(a,b){if(Og)return Wh.create(uh,a,b);var c=a.t?new Xh:new uh;c.initialize(a,b);return c}f=uh.prototype;f.initialize=function(a,b){this.id=K.mj();a.nd(this);this.fill(a,b)};f.fill=function(a,b){this.B=this.J=this.K=null;this.S=[];this.disabled=this.t=this.Gd=!1;this.Ia="";this.contextMenu=!0;this.pc=null;this.sb=[];this.Lc=this.Jb=this.Kc=!0;this.fc=!1;this.L=null;this.xi=new L(0,0);this.o=a;this.Wb=a.Mh;if(b){this.type=b;var c=K[b],d;for(d in c)this[d]=c[d]}u(this.I)&&this.I()};
function $f(a,b){return Og?Yh.get(a):Ga(b,a)}f.k=function(a,b,c){Zh(this,a);this.o&&!c&&(this.o.$e(this),this.o=null);U==this&&(U=null);for(a=this.sb.length-1;0<=a;a--)this.sb[a].k(!1);for(a=0;b=this.S[a];a++)b.k();this.S.length=0;b=ph(this,!0);for(a=0;a<b.length;a++)c=b[a],c.m&&c.disconnect(),b[a].k();if(Og&&!$h)Yh["delete"](this.id.toString())};
function Zh(a,b){var c;c=!1;if(a.K)a.K.m&&a.Ga(null);else{var d=null;a.B&&a.B.m&&(d=a.B.m,a.Ga(null));var e=Vf(a);if(b&&e){var g=a.J.m;e.Ga(null);d&&gh(d,g)&&eg(d,g)}}c&&a.moveBy(V*(x?-1:1),2*V)}function ph(a,b){var c=[];if(b||a.t)if(a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B),b||!a.fc)for(var d=0,e;e=a.S[d];d++)e.n&&c.push(e.n);return c}
f.Ka=function(){if(0==Mb){var a=ih(this);if(!a.Wb)for(var b=ph(this,!1),c=0;c<b.length;c++){var d=b[c];d.m&&bh(d)&&S(d).Ka();for(var e=nh(d),g=0;g<e.length;g++){var h=e[g];d.m&&h.m||ih(h.h)!=a&&(bh(d)?eh(h,d):eh(d,h))}}}};f.getParent=function(){return this.pc};function ai(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Vf(a)==b);return a}}function Vf(a){return a.J&&S(a.J)}function ih(a){var b=a;do a=b,b=a.pc;while(b);return a}f.kc=function(){return this.sb};
f.Ga=function(a){if(this.pc){for(var b=this.pc.sb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.pc=null;this.B&&this.B.m&&this.B.disconnect();this.K&&this.K.m&&this.K.disconnect()}else pb(Fa(this.o,!1),this)&&this.o.$e(this);(this.pc=a)?a.sb.push(this):this.o.nd(this)};f.vb=function(){for(var a=[this],b,c=0;b=this.sb[c];c++)a.push.apply(a,b.vb());return a};function bg(a,b){a.Kc=b;a.ni&&bi(a.ni)}
function cg(a,b){a.Lc=b;for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.wa[e];e++)g.Ec();d=Uh(a);for(c=0;c<d.length;c++)d[c].Ec()}f.fd=function(a){this.Ia=a};f.dd=function(a){this.yf=a;this.t&&this.Dc()};function Sb(a,b){for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.wa[e];e++)if(g.name===b)return g;return null}function sh(a,b){var c;a.B&&(a.B.k(),a.B=null);b&&(void 0===c&&(c=null),a.B=new Yg(a,4),a.B.cd(c));a.t&&(a.C(),a.Ka())}
function th(a,b){var c;a.J&&(a.J.k(),a.J=null);b&&(void 0===c&&(c=null),a.J=new Yg(a,3),a.J.cd(c));a.t&&(a.C(),a.Ka())}function rh(a,b){a.K&&(a.K.k(),a.K=null);void 0===b&&(b=null);a.K=new Yg(a,2);a.K.cd(b);a.t&&(a.C(),a.Ka())}function ag(a,b){a.Gd=b;a.t&&(a.C(),a.Ka(),a.o.ub())}f.Od=function(a){this.disabled=a};function ci(a){for(;;){a=ai(a);if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.fc};f.yc=function(a){this.fc=a};
f.toString=function(a){for(var b=[],c=0,d;d=this.S[c];c++){for(var e=0,g;g=d.wa[e];e++)b.push(g.wb());d.n&&((d=S(d.n))?b.push(d.toString()):b.push("?"))}b=Ka(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};
f.Hd=function(a,b){function c(a){a instanceof Gb?Th(this,a):Th(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.Hd.Ei),g=[],h=0;h<e.length;h+=2){var k=Ka(e[h]),l=void 0;k&&g.push(new Rh(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),m=arguments[k];m[1]instanceof Gb?g.push([m[0],m[1]]):l=Vh(di(this,1,m[0]).cd(m[1]),m[2]);arguments[k]=null}else"\n"==k&&g.length&&(l=di(this,5,""));l&&g.length&&(g.forEach(c,l),g=[])}g.length&&(l=Vh(di(this,
5,""),d),g.forEach(c,l));for(h=1;h<arguments.length-1;h++);ag(this,!a.match(this.Hd.zi))};f.Hd.Ei=/(%\d+|\n)/;f.Hd.zi=/%1\s*$/;function di(a,b,c){var d=null;if(1==b||3==b)d=new Yg(a,b);b=new Sh(b,c,a,d);a.S.push(b);a.t&&(a.C(),a.Ka());return b}function dg(a,b){for(var c=0,d;d=a.S[c];c++)if(d.name==b)return d;return null}f.Ah=function(){return this.L||""};f.Nd=function(a){this.L=a};f.O=function(){return this.xi};f.moveBy=function(a,b){this.xi.translate(a,b)};/*

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
function ei(){var a=this;this.p=new Lg(function(){return fi(a)},function(b){var c=fi(a);c&&(t(b.y)&&(a.p.scrollY=-c.Za*b.y-c.gb),a.p.aa.setAttribute("transform","translate(0,"+(a.p.scrollY+c.Xa)+")"))});this.p.Mh=!0;this.xh=[];this.ha=this.A=0;this.vf=[];this.yb=[]}var hi,ii,ji,ki,li,mi;f=ei.prototype;f.ce=!0;f.ua=8;f.H=function(){this.g=E("g",{},null);this.ab=E("path",{"class":"blocklyFlyoutBackground"},this.g);this.g.appendChild(this.p.H());return this.g};
f.k=function(){this.Gb();G(this.xh);this.xh.length=0;this.wc&&(this.wc.k(),this.wc=null);this.p=null;this.g&&(H(this.g),this.g=null);this.Ud=this.ab=null};function fi(a){if(!a.u())return null;var b=a.ha-2*a.ua,c=a.A;try{var d=a.p.aa.getBBox()}catch(e){d={height:0,y:0}}return{ta:b,V:c,Za:d.height+d.y,bc:-a.p.scrollY,gb:0,Xa:a.ua,Wa:0}}
f.I=function(a){this.Ud=a;this.wc=new Dg(this.p,!1,!1);this.Gb();F(window,"resize",this,this.Zb);this.Zb();F(this.g,"wheel",this,this.wi);F(this.g,"mousewheel",this,this.wi);F(this.Ud.aa,"blocklyWorkspaceChange",this,this.If);F(this.g,"mousedown",this,this.Pe)};
f.Zb=function(){if(this.u()){var a=this.Ud.Fb();if(a){var b=this.A-this.ua;x&&(b*=-1);var c=["M "+(x?this.A:0)+",0"];c.push("h",b);c.push("a",this.ua,this.ua,0,0,x?0:1,x?-this.ua:this.ua,this.ua);c.push("v",Math.max(0,a.ta-2*this.ua));c.push("a",this.ua,this.ua,0,0,x?0:1,x?this.ua:-this.ua,this.ua);c.push("h",-b);c.push("z");this.ab.setAttribute("d",c.join(" "));b=a.Wa;x&&(b+=a.V,b-=this.A);this.g.setAttribute("transform","translate("+b+","+a.Xa+")");this.ha=a.ta;this.wc&&this.wc.resize()}}};
f.wi=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){vb&&(b*=10);var c=fi(this),b=c.bc+b,b=Math.min(b,c.Za-c.ta),b=Math.max(b,0);this.wc.set(b);a.preventDefault()}};f.u=function(){return this.g&&"block"==this.g.style.display};f.Gb=function(){if(this.u()){this.g.style.display="none";for(var a=0,b;b=this.yb[a];a++)G(b);this.yb.length=0;this.pg&&(G(this.pg),this.pg=null)}};
f.show=function(a){this.Gb();for(var b=Fa(this.p,!1),c=0,d;d=b[c];c++)d.o==this.p&&d.k(!1,!1);for(var c=0,e;e=this.vf[c];c++)H(e);this.vf.length=0;var g=this.ua;this.g.style.display="block";var b=[],h=[];if("VARIABLE"==a)uf(b,h,g,this.p);else if("PROCEDURE"==a)Qb(b,h,g,this.p);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Zf(this.p,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.vb();e=0;for(var l;l=c[e];e++)l.Wb=!0,l.Nd(null);d.C();l=d.D();e=ni(d);c=x?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=E("rect",{"fill-opacity":0},null);this.p.aa.insertBefore(e,d.D());d.ud=e;this.vf[k]=e;this.ce?this.yb.push(F(l,"mousedown",null,oi(this,d))):this.yb.push(F(l,"mousedown",null,pi(this,d)));this.yb.push(F(l,"mouseover",d,d.nf));this.yb.push(F(l,"mouseout",d,d.Ze));this.yb.push(F(e,"mousedown",null,oi(this,d)));this.yb.push(F(e,"mouseover",d,d.nf));this.yb.push(F(e,"mouseout",d,d.Ze))}this.yb.push(F(this.ab,"mouseover",this,function(){for(var a=Fa(this.p,!1),b=0,c;c=a[b];b++)c.Ze()}));
this.A=0;this.ai();this.If();qi(window,"resize");this.pg=F(this.p.aa,"blocklyWorkspaceChange",this,this.ai);this.p.ub()};
f.ai=function(){for(var a=0,b=this.ua,c=Fa(this.p,!1),d=0,e;e=c[d];d++)var g=ni(e),a=Math.max(a,g.width);a+=b+8+b/2+T;if(this.A!=a){for(d=0;e=c[d];d++){var g=ni(e),h=e.O();if(x){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.ud&&(e.ud.setAttribute("width",g.width),e.ud.setAttribute("height",g.height),e.ud.setAttribute("x",x?h.x-g.width:h.x),e.ud.setAttribute("y",h.y))}this.A=a;ug(window,"resize")}};
function pi(a,b){return function(c){ri();tg();Lb(c)?si(b,c):(Kg(),rg(sg),hi=c,ii=b,ji=a,ki=F(document,"mouseup",this,ri),li=F(document,"mousemove",this,a.Tj));c.stopPropagation()}}f.Pe=function(a){Lb(a)||(tg(!0),ti(),this.ki=a.clientY,mi=F(document,"mousemove",this,this.gg),ki=F(document,"mouseup",this,ti),a.preventDefault(),a.stopPropagation())};f.gg=function(a){var b=a.clientY-this.ki;this.ki=a.clientY;a=fi(this);b=a.bc-b;b=Math.min(b,a.Za-a.ta);b=Math.max(b,0);this.wc.set(b)};
f.Tj=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Kg(),Math.sqrt(Math.pow(a.clientX-hi.clientX,2)+Math.pow(a.clientY-hi.clientY,2))>ui&&oi(ji,ii)(hi))};function oi(a,b){return function(c){if(!Lb(c)&&!b.disabled){var d=Uf(b),d=Zf(a.Ud,d),e=b.D();if(!e)throw"originBlock is not rendered.";var e=Bg(e),g=d.D();if(!g)throw"block is not rendered.";g=Bg(g);d.moveBy(e.x-g.x,e.y-g.y);a.ce?a.Gb():a.If();d.Pe(c)}}}
f.If=function(){for(var a=Ha(this.Ud),b=Fa(this.p,!1),c=0,d;d=b[c];c++){var e=d.vb().length>a;d.Od(e)}};function ti(){ki&&(G(ki),ki=null);li&&(G(li),li=null);mi&&(G(mi),mi=null);ki&&(G(ki),ki=null);ji=ii=hi=null}f.yd=function(){var a=Bg(this.g).x;x||(a-=1E7);return new Ub(a,-1E7,1E7+this.A,this.ha+2E7)};function vi(a){if("function"==typeof a.Qf)return a.Qf();if(q(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function wi(a){this.Oa=void 0;this.va={};if(a){var b;if("function"==typeof a.Pf)b=a.Pf();else if("function"!=typeof a.Qf)if(fa(a)||q(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=vi(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=wi.prototype;f.set=function(a,b){xi(this,a,b,!1)};f.add=function(a,b){xi(this,a,b,!0)};
function xi(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.va[g]||(a.va[g]=new wi);a=a.va[g]}if(d&&void 0!==a.Oa)throw Error('The collection already contains the key "'+b+'"');a.Oa=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.va[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Oa:void 0};f.Qf=function(){var a=[];yi(this,a);return a};function yi(a,b){void 0!==a.Oa&&b.push(a.Oa);for(var c in a.va)yi(a.va[c],b)}
f.Pf=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.va[e])return[];c=c.va[e]}zi(c,a,b)}else zi(this,"",b);return b};function zi(a,b,c){void 0!==a.Oa&&c.push(b);for(var d in a.va)zi(a.va[d],b+d,c)}f.clear=function(){this.va={};this.Oa=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.va[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.va[e]}a=b.Oa;for(delete b.Oa;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.va[e].Lh())delete b.va[e];else break;return a};f.clone=function(){return new wi(this)};f.Lh=function(){var a;if(a=void 0===this.Oa)a:{a=this.va;for(var b in a){a=!1;break a}a=!0}return a};function Ai(){this.nc=new wi}f=Ai.prototype;f.W="";f.cg=null;f.Le=null;f.Kd=0;f.Wc=0;function Bi(a,b){var c=!1,d=a.nc.Pf(b);d&&d.length&&(a.Wc=0,a.Kd=0,c=a.nc.get(d[0]),c=Ci(a,c))&&(a.cg=d);return c}function Ci(a,b){var c;b&&(a.Wc<b.length&&(c=b[a.Wc],a.Le=b),c&&(c.rg(),c.select()));return!!c}f.clear=function(){this.W=""};function Di(a,b,c,d,e){this.reset(a,b,c,d,e)}Di.prototype.yh=null;var Ei=0;Di.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Ei++;d||oa();this.Jd=a;this.Mj=b;delete this.yh};Di.prototype.ei=function(a){this.Jd=a};function Fi(a){this.Rh=a;this.Hh=this.R=this.Jd=this.za=null}function Gi(a,b){this.name=a;this.value=b}Gi.prototype.toString=function(){return this.name};var Hi=new Gi("WARNING",900),Ii=new Gi("INFO",800),Ji=new Gi("CONFIG",700),Ki=new Gi("FINE",500);f=Fi.prototype;f.getName=function(){return this.Rh};f.getParent=function(){return this.za};f.kc=function(){this.R||(this.R={});return this.R};f.ei=function(a){this.Jd=a};
function Li(a){if(a.Jd)return a.Jd;if(a.za)return Li(a.za);jb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Li(this).value)for(u(b)&&(b=b()),a=new Di(a,String(b),this.Rh),c&&(a.yh=c),c="log:"+a.Mj,n.console&&(n.console.timeStamp?n.console.timeStamp(c):n.console.markTimeline&&n.console.markTimeline(c)),n.msWriteProfilerMark&&n.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Hh)for(var e=0,g=void 0;g=b.Hh[e];e++)g(d);c=c.getParent()}};
f.Zd=function(a,b){this.log(Hi,a,b)};f.info=function(a,b){this.log(Ii,a,b)};var Mi={},Ni=null;function Oi(a){Ni||(Ni=new Fi(""),Mi[""]=Ni,Ni.ei(Ji));var b;if(!(b=Mi[a])){b=new Fi(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Oi(a.substr(0,c));c.kc()[d]=b;b.za=c;Mi[a]=b}return b};function Pi(a){Ld.call(this);this.s=a;a=B?"focusout":"blur";this.Kj=N(this.s,B?"focusin":"focus",this,!B);this.Lj=N(this.s,a,this,!B)}w(Pi,Ld);Pi.prototype.handleEvent=function(a){var b=new sd(a.Ba);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Pi.prototype.X=function(){Pi.j.X.call(this);Ed(this.Kj);Ed(this.Lj);delete this.s};function Qi(a,b,c){R.call(this,a,b,c);this.td=!0;Kf(this,!0);this.Qa=this;this.Wd=new Ai;if(B)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.Ph)&&a.Zd("Failed to enable background image cache",void 0)}}w(Qi,R);Qi.prototype.ya=null;Qi.prototype.Kf=null;var Ri=Qi.prototype,Si=Oi("goog.ui.tree.TreeControl");Ri.Ph=Si;f=Qi.prototype;f.Mf=!1;f.lj=null;f.Sd=!0;f.xg=!0;f.Bc=!0;f.yg=!0;f.Ca=function(){return this};f.Nc=function(){return 0};f.rg=function(){};
f.vj=function(){this.Mf=!0;$d(this.i(),"focused");this.Qa&&this.Qa.select()};f.rj=function(){this.Mf=!1;be(this.i(),"focused")};f.hasFocus=function(){return this.Mf};f.La=function(){return!this.Bc||Qi.j.La.call(this)};f.Lb=function(a){this.Bc?Qi.j.Lb.call(this,a):this.td=a};f.Of=function(){return sc};f.se=function(){var a=If(this);return a?a.firstChild:null};f.re=function(){return null};f.kd=function(){};f.zd=function(){return Qi.j.zd.call(this)+(this.Bc?"":" "+this.oa.jh)};
f.oe=function(){var a=this.La(),b=this.kj;if(a&&b)return b;b=this.Dj;if(!a&&b)return b;b=this.oa;return a&&b.ih?b.gc+" "+b.ih:!a&&b.eh?b.gc+" "+b.eh:""};f.Ac=function(a){if(this.Qa!=a){var b=!1;this.Qa&&(b=this.Qa==this.lj,Kf(this.Qa,!1));if(this.Qa=a)Kf(a,!0),b&&a.select();this.dispatchEvent("change")}};function Ti(a){0!=a.Sd&&(a.Sd=!1,a.v&&Ui(a))}
function Ui(a){function b(a){var h=Ff(a);if(h){var k=!d||c==a.getParent()&&!e?a.oa.bh:a.oa.ah;h.className=k;if(h=a.re())h.className=Of(a)}Td(a,b)}var c=a,d=c.Sd,e=c.yg;b(a)}function Vi(a){0!=a.xg&&(a.xg=!1,a.v&&Ui(a))}function Wi(a){if(0!=a.Bc){a.Bc=!1;if(a.v){var b=If(a);b&&(b.className=a.zd())}a.Qa==a&&O(a,0)&&a.Ac(O(a,0))}}f.De=function(){Qi.j.De.call(this);var a=this.i();ge(a,"tree");P(a,"labelledby",Ef(this).id)};
f.qa=function(){Qi.j.qa.call(this);var a=this.i();a.className=this.oa.mh;a.setAttribute("hideFocus","true");a=this.i();a.tabIndex=0;var b=this.ya=new se(a),c=this.Kf=new Pi(a);Rd(this).w(c,"focusout",this.rj).w(c,"focusin",this.vj).w(b,"key",this.kb).w(a,"mousedown",this.Sf).w(a,"click",this.Sf).w(a,"dblclick",this.Sf);this.De()};f.$a=function(){Qi.j.$a.call(this);this.ya.k();this.ya=null;this.Kf.k();this.Kf=null};
f.Sf=function(a){var b=this.Ph;b&&b.log(Ki,"Received event "+a.type,void 0);if(b=Xi(this,a))switch(a.type){case "mousedown":b.fg(a);break;case "click":a.preventDefault();break;case "dblclick":b.Th(a)}};
f.kb=function(a){var b=!1,b=this.Wd,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.cg;if(d){var e=null,g=!1;if(b.Le){var h=b.Wc+c;0<=h&&h<b.Le.length?(b.Wc=h,e=b.Le):g=!0}e||(h=b.Kd+c,0<=h&&h<d.length&&(b.Kd=h),d.length>b.Kd&&(e=b.nc.get(d[b.Kd])),e&&e.length&&g&&(b.Wc=-1==c?e.length-1:0));Ci(b,e)&&(b.cg=d)}c=!0}break;case 8:d=b.W.length-1;c=!0;0<d?(b.W=b.W.substring(0,d),Bi(b,b.W)):0==d?b.W="":c=!1;break;case 27:b.W="",c=!0}if(!(b=c)&&(b=this.Qa)){b=this.Qa;c=!0;
switch(a.keyCode){case 39:if(a.altKey)break;Wd(b)&&(b.La()?O(b,0).select():b.Lb(!0));break;case 37:if(a.altKey)break;Wd(b)&&b.La()&&b.Id?b.Lb(!1):(d=b.getParent(),e=b.Ca(),d&&(e.Bc||d!=e)&&d.select());break;case 40:a:if(Wd(b)&&b.La())d=O(b,0);else{for(d=b;d!=b.Ca();){e=d.ob;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.rc;null!=d?d=Rf(d):(d=b.getParent(),e=b.Ca(),d=!e.Bc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.Ca())&&e.Wd.clear());
b=c}b||(b=this.Wd,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.W)&&(b.W+=d,c=Bi(b,b.W))),b=c);b&&a.preventDefault();return b};function Xi(a,b){for(var c=null,d=b.target;null!=d;){if(c=Df[d.id])return c;if(d==a.i())break;d=d.parentNode}return null}f.createNode=function(a){return new Sf(a||sc,this.oa,this.jb())};
function Qf(a,b){var c=a.Wd,d=b.wb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.nc.get(d);e?e.push(b):c.nc.set(d,[b])}}f.removeNode=function(a){var b=this.Wd,c=a.wb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.nc.get(c);d&&(qb(d,a),d.length&&b.nc.remove(c))}};/*

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
function Yi(a,b){this.dc=M("div","blocklyToolboxDiv");this.dc.setAttribute("dir",x?"RTL":"LTR");b.appendChild(this.dc);this.ra=new ei;a.appendChild(this.ra.H());F(this.dc,"mousedown",this,function(a){Lb(a)||a.target==this.dc?tg(!1):tg(!0)})}f=Yi.prototype;f.width=0;f.lf={Yf:19,mh:"blocklyTreeRoot",jh:"blocklyHidden",kh:"",Cf:"blocklyTreeRow",lh:"blocklyTreeLabel",gc:"blocklyTreeIcon",Af:"blocklyTreeIconOpen",Bf:"blocklyTreeIconNone",nh:"blocklyTreeSelected"};
f.I=function(){this.lf.cleardotPath=yg+"1x1.gif";this.lf.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(x?"Rtl":"Ltr");var a=new Zi(this,this.lf);this.Vd=a;Wi(a);Ti(a);Vi(a);a.Ac(null);this.dc.style.display="block";this.ra.I(J);$i(this);a.C(this.dc);var b=this;N(window,"resize",function(){b.Zb()});this.Zb()};
f.Zb=function(){var a=this.dc,b=bd(z),c=Qh();x?(b=aj(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;x||--this.width};
function $i(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.ec=[];e.add(k);var l=h.getAttribute("custom");l?k.ec=l:b(h,k)}else"HR"==k?e.add(new bj):"BLOCK"==k&&e.ec.push(h)}}var c=a.Vd;c.ci();c.ec=[];b(ra,a.Vd);if(c.ec.length)throw"Toolbox cannot have both blocks and categories in the root level.";ug(window,"resize")}
f.yd=function(){return new Ub(x?Qh().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Zi(a,b){this.Aa=a;Qi.call(this,sc,b)}w(Zi,Qi);Zi.prototype.qa=function(){Zi.j.qa.call(this);if(md){var a=this.i();F(a,"touchstart",this,this.Aj)}};Zi.prototype.Aj=function(a){a.preventDefault();var b=Xi(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.fg(a)},1)};Zi.prototype.createNode=function(a){return new cj(this.Aa,a?lc(a):sc,this.oa,this.jb())};
Zi.prototype.Ac=function(a){this.Qa!=a&&(Qi.prototype.Ac.call(this,a),a&&a.ec&&a.ec.length?this.Aa.ra.show(a.ec):this.Aa.ra.Gb())};function cj(a,b,c,d){R.call(this,b,c,d);a&&(b=function(){ug(window,"resize")},N(a.Vd,"expand",b),N(a.Vd,"collapse",b))}w(cj,Sf);R.prototype.Of=function(){return qc("span")};cj.prototype.fg=function(){Wd(this)&&this.Id?(this.toggle(),this.select()):this.Fe()?this.Ca().Ac(null):this.select();Lf(this)};cj.prototype.Th=function(){};function bj(){cj.call(this,null,"",dj)}
w(bj,cj);var dj={Cf:"blocklyTreeSeparator"};/*

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
var ej={ie:null,show:function(a,b){jf(ej);if(b.length){for(var c=new cf,d=0,e;e=b[d];d++){var g=new Ke(e.text);c.ae(g,!0);g.Pd(e.enabled);e.enabled&&N(g,"action",function(a){return function(){a()}}(e.fb))}N(c,"action",ej.Gb);e=Cc();g=Qc();c.C(nf);var h=c.i();Ib(h,"blocklyContextMenu");var k=Uc(h),d=a.clientX+g.x,l=a.clientY+g.y;a.clientY+k.height>=e.height&&(l-=k.height);x?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);of(d,l,e,g);df(c);setTimeout(function(){h.focus()},
1);ej.ie=null}else ej.Gb()},Gb:function(){kf==ej&&lf();ej.ie=null},Ok:function(a,b){return function(){var c=Zf(a.o,b),d=a.O();d.x=x?d.x-V:d.x+V;d.y+=2*V;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Xh(){this.g=E("g",{},null);this.gf=E("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.g);this.Mb=E("path",{"class":"blocklyPath"},this.g);this.hf=E("path",{"class":"blocklyPathLight"},this.g);this.Mb.Ia=this;Ih(this.Mb);bi(this)}w(Xh,uh);f=Xh.prototype;f.height=0;f.width=0;
f.mb=function(){for(var a=0,b;b=this.S[a];a++)b.I();this.Ne&&this.Ne.Rk();this.Dc();I||F(this.D(),"mousedown",this,this.Pe);this.o.aa.appendChild(this.D());u(this.onchange)&&F(this.o.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){U&&Sg(U);U=this;this.nf();ug(this.o.aa,"blocklySelectChange")};function Sg(a){U=null;a.Ze();ug(a.o.aa,"blocklySelectChange")}f.Ne=null;f.L=null;f.Zd=null;function Uh(a){var b=[];a.Ne&&b.push(a.Ne);a.L&&b.push(a.L);a.Zd&&b.push(a.Zd);return b}
var fj=null,gj=null;f=Xh.prototype;f.Ga=function(a){var b=this.D();if(this.pc&&b){var c=this.O();this.o.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Xh.j.Ga.call(this,a);a&&(c=this.O(),a.D().appendChild(b),a=this.O(),lh(this,a.x-c.x,a.y-c.y))};f.O=function(){var a=0,b=0,c=this.D();if(c){do var d=Xg(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.o.aa)}return new L(a,b)};
f.moveBy=function(a,b){var c=this.O();this.D().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");lh(this,a,b);hj(this)};function ni(a){var b=a.height,c=a.width;if(a=Vf(a))a=ni(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.yc=function(a){if(this.fc!=a){Xh.j.yc.call(this,a);for(var b=[],c=0,d;d=this.S[c];c++)b.push.apply(b,d.G(!a));if(a){a=Uh(this);for(c=0;c<a.length;c++)a[c].G(!1);c=this.toString(ij);Th(di(this,5,"_TEMP_COLLAPSED_INPUT"),c).I()}else a:{for(c=0;a=this.S[c];c++)if("_TEMP_COLLAPSED_INPUT"==a.name){a.n&&a.n.m&&S(a.n).Ga(null);a.k();this.S.splice(c,1);this.t&&(this.C(),this.Ka());break a}jb('Input "%s" not found.',"_TEMP_COLLAPSED_INPUT")}b.length||(b[0]=this);if(this.t){for(c=0;a=b[c];c++)a.C();this.Ka()}}};
f.Pe=function(a){if(!this.Wb){jj();ri();this.select();tg();if(Lb(a))si(this,a);else if(this.Jb&&!I){Kg();rg(sg);var b=this.O();this.li=b.x;this.mi=b.y;this.Cg=a.clientX;this.Dg=a.clientY;Mb=1;fj=F(document,"mouseup",this,this.hg);gj=F(document,"mousemove",this,this.gg);this.me=[];for(var b=this.vb(),c=0,d;d=b[c];c++){d=Uh(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Sc,y:g.Tc};g.Qi=d[e];this.me.push(g)}}}else return;a.stopPropagation()}};
f.hg=function(a){var b=this;kj(function(){ri();if(U&&$g){eg(ah,$g);if(b.t){var c=(bh(ah)?$g:ah).h;lj("click");var d=Bg(c.g);c.K?(d.x+=x?3:-3,d.y+=13):c.B&&(d.x+=x?-23:23,d.y+=3);c=E("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},z);c.Ag=new Date;mj(c)}b.o.Ua&&b.o.Ua.close()}else Tg(b.o,a)&&((c=b.o.Ua)&&Af(c.close,100,c),U.k(!1,!0),ug(window,"resize"));$g&&(H(Yg.ze),delete Yg.ze,$g=null);rg(nj.OPEN)})};
function si(a,b){if(!I&&a.contextMenu){var c=[];if(a.Kc&&!I&&a.Jb&&!I&&!a.Wb){var d={text:oj,enabled:!0,fb:function(){var b=Uf(a);fg(b);var b=Zf(a.o,b),c=a.O();c.x=x?c.x-V:c.x+V;c.y+=2*V;b.moveBy(c.x,c.y);b.select()}};a.vb().length>Ha(a.o)&&(d.enabled=!1);c.push(d);a.Lc&&!I&&!a.fc&&sa&&(d={enabled:!0},a.L?(d.text=pj,d.fb=function(){a.Nd(null)}):(d.text=qj,d.fb=function(){a.Nd("")}),c.push(d));if(!a.fc)for(d=0;d<a.S.length;d++)if(1==a.S[d].type){d={enabled:!0};d.text=a.Gd?rj:sj;d.fb=function(){ag(a,
!a.Gd)};c.push(d);break}ta&&(a.fc?(d={enabled:!0},d.text=tj,d.fb=function(){a.yc(!1)}):(d={enabled:!0},d.text=uj,d.fb=function(){a.yc(!0)}),c.push(d));ua&&(d={text:a.disabled?vj:wj,enabled:!ci(a),fb:function(){a.Od(!a.disabled)}},c.push(d));var d=a.vb().length,e=Vf(a);e&&(d-=e.vb().length);d={text:1==d?xj:yj.replace("%1",String(d)),enabled:!0,fb:function(){a.k(!0,!0)}};c.push(d)}d={enabled:!(u(a.Ub)?!a.Ub():!a.Ub)};d.text=zj;d.fb=function(){var b=u(a.Ub)?a.Ub():a.Ub;b&&window.open(b)};c.push(d);a.dj&&
!a.Wb&&a.dj(c);ej.show(b,c);ej.ie=a}}function lh(a,b,c){if(a.t){for(var d=ph(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Uh(a);for(e=0;e<d.length;e++)Wg(d[e]);for(e=0;e<a.sb.length;e++)lh(a.sb[e],b,c)}}function Aj(a,b){b?Ib(a.g,"blocklyDragging"):Jb(a.g,"blocklyDragging");for(var c=0;c<a.sb.length;c++)Aj(a.sb[c],b)}
f.gg=function(a){var b=this;kj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Kg();var c=a.clientX-b.Cg,d=a.clientY-b.Dg;if(1==Mb&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>ui){Mb=2;b.Ga(null);Aj(b,!0);var e=b.o;e.ph=e.Ua?e.Ua.yd():null;e.oh=e.ra?e.ra.yd():e.Aa?e.Aa.yd():null}if(2==Mb){b.D().setAttribute("transform","translate("+(b.li+c)+", "+(b.mi+d)+")");for(e=0;e<b.me.length;e++){var g=b.me[e],h=g.Qi,k=g.x+c,g=g.y+d;h.Sc=k;h.Tc=g;h.u()&&ig(h.na,k,g)}for(var h=ph(b,
!1),g=k=null,l=V,e=0;e<h.length;e++){var m=h[e],p=mh(m,l,c,d);p.n&&(k=p.n,g=m,l=p.$h)}$g&&$g!=k&&(H(Yg.ze),delete Yg.ze,ah=$g=null);k&&k!=$g&&(k.Ih(),$g=k,ah=g);b.Kc&&!I&&Tg(b.o,a)}}a.stopPropagation()})};function bi(a){a.Jb&&!I?Ib(a.g,"blocklyDraggable"):Jb(a.g,"blocklyDraggable")}f.D=function(){return this.g};var Bj=7*(1-Math.SQRT1_2)+1,Cj=9*(1-Math.SQRT1_2)-1,Dj="m "+Bj+","+Bj,Ej="a 9,9 0 0,0 "+(-Cj-1)+","+(8-Cj),Fj="a 9,9 0 0,0 "+(8-Cj)+","+(Cj+1);f=Xh.prototype;
f.k=function(a,b){ri();ej.ie==this&&ej.Gb();Zh(this,a);if(b&&this.t){lj("delete");var c=Bg(this.g),d=this.g.cloneNode(!0);d.ri=c.x;d.ti=c.y;d.setAttribute("transform","translate("+d.ri+","+d.ti+")");z.appendChild(d);d.Sg=d.getBBox();d.Ag=new Date;Gj(d)}this.t=!1;c=Uh(this);for(d=0;d<c.length;d++)c[d].k();Xh.j.k.call(this,a);H(this.g);this.gf=this.hf=this.Mb=this.g=null};
function Gj(a){var b=(new Date-a.Ag)/150;1<b?H(a):(a.setAttribute("transform","translate("+(a.ri+(x?-1:1)*a.Sg.width/2*b+", "+(a.ti+a.Sg.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Gj(a)},10))}function mj(a){var b=(new Date-a.Ag)/150;1<b?H(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){mj(a)},10))}
f.Dc=function(){if(!this.disabled){var a=sf(tf(this.yf)),b,c;c=a;if(!xf.test(c))throw Error("'"+c+"' is not a valid hex color");4==c.length&&(c=c.replace(vf,"#$1$1$2$2$3$3"));c=c.toLowerCase();b=[parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16)];c=yf([255,255,255],b,.3);b=yf([0,0,0],b,.4);this.hf.setAttribute("stroke",sf(c));this.gf.setAttribute("fill",sf(b));this.Mb.setAttribute("fill",a);c=Uh(this);for(a=0;a<c.length;a++)c[a].Dc();for(a=0;c=this.S[a];a++){b=0;for(var d;d=
c.wa[b];b++)d.Sa(null)}this.t&&this.C()}};function hh(a){a.disabled||ci(a)?(Ib(a.g,"blocklyDisabled"),a.Mb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Jb(a.g,"blocklyDisabled"),a.Dc());a=a.kc();for(var b=0,c;c=a[b];b++)hh(c)}f.Ah=function(){return this.L?this.L.wb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Nd=function(a){var b=!1;q(a)?(this.L||(this.L=new vh(this),b=!0),this.L.Sa(a)):this.L&&(this.L.k(),b=!0);b&&this.t&&(this.C(),this.Ka())};
f.Od=function(a){this.disabled!=a&&(Xh.j.Od.call(this,a),hh(this),this.o.ub())};f.nf=function(){Ib(this.g,"blocklySelected");this.g.parentNode.appendChild(this.g)};f.Ze=function(){Jb(this.g,"blocklySelected")};
f.C=function(){this.t=!0;var a=10;x&&(a=-a);for(var b=Uh(this),c=0;c<b.length;c++){var d=b[c];d.Ja.isCollapsed()?d.Ea.setAttribute("display","none"):(d.Ea.setAttribute("display","block"),x&&(a-=16),d.Ea.setAttribute("transform","translate("+a+", 5)"),Wg(d),a=x?a-10:a+26)}var e=a+=x?10:-10,g=this.S,b=[];b.T=e+20;if(this.B||this.J)b.T=Math.max(b.T,40);for(var d=c=0,h=!1,k=!1,l=!1,m=void 0,p=this.Gd&&!this.isCollapsed(),v=0,r;r=g[v];v++)if(r.u()){var y;p&&m&&3!=m&&3!=r.type?y=b[b.length-1]:(m=r.type,
y=[],y.type=p&&3!=r.type?-1:r.type,y.height=0,b.push(y));y.push(r);r.vc=25;r.sa=p&&1==r.type?20.5:0;if(r.n&&r.n.m){var wa=ni(S(r.n));r.vc=Math.max(r.vc,wa.height);r.sa=Math.max(r.sa,wa.width)}v==g.length-1&&r.vc--;y.height=Math.max(y.height,r.vc);r.hb=0;1==b.length&&(r.hb+=x?-e:e);for(var wa=!1,Bf=0,fb;fb=r.wa[Bf];Bf++){0!=Bf&&(r.hb+=10);var gi=fb.Dh();fb.sa=gi.width;fb.bf=wa&&fb.Fc?10:0;r.hb+=fb.sa+fb.bf;y.height=Math.max(y.height,gi.height);wa=fb.Fc}-1!=y.type&&(3==y.type?(k=!0,d=Math.max(d,r.hb)):
(1==y.type?h=!0:5==y.type&&(l=!0),c=Math.max(c,r.hb)))}for(e=0;y=b[e];e++)if(y.oi=!1,-1==y.type)for(g=0;r=y[g];g++)if(1==r.type){y.height+=10;y.oi=!0;break}b.ef=20+d;k&&(b.T=Math.max(b.T,b.ef+30));h?b.T=Math.max(b.T,c+20+8):l&&(b.T=Math.max(b.T,c+20));b.Cj=h;b.al=k;b.$k=l;d=a;this.K?this.zg=this.df=!0:(this.zg=this.df=!1,this.B&&(a=S(this.B))&&Vf(a)==this&&(this.df=!0),Vf(this)&&(this.zg=!0));h=this.O();k=[];l=[];a=[];c=[];r=b.T;this.df?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,8"),a.push(x?
Dj:"m 1,7"),k.push("A 8,8 0 0,1 8,0"),a.push("A 7,7 0 0,1 8,1"));this.B&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.B.moveTo(h.x+(x?-30:30),h.y));k.push("H",r);a.push("H",r+(x?-1:0));this.width=r;for(y=r=0;e=b[y];y++){p=10;0==y&&(p+=x?-d:d);a.push("M",b.T-1+","+(r+1));if(this.isCollapsed())g=e[0],v=r+18,Hj(g.wa,p,v),k.push("l 8,0 0,4 8,4 -16,8 8,4"),x?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),x&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(m=0;g=e[m];m++)v=r+18,e.oi&&(v+=5),p=Hj(g.wa,p,v),5!=g.type&&(p+=g.sa+10),1==g.type&&(l.push("M",p-10+","+(r+5)),l.push("h",6-g.sa),l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),l.push("v",g.vc+1-20),l.push("h",g.sa+2-8),l.push("z"),x?(c.push("M",p-10-3+8-g.sa+","+(r+5+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.vc-20+3),c.push("h",g.sa-8+1)):(c.push("M",p-10+1+","+(r+5+1)),c.push("v",g.vc+1),c.push("h",6-g.sa),c.push("M",
p-g.sa-10+1.8+","+(r+5+20-.4)),c.push("l","3.04,-1.8")),v=x?h.x-p-8+10+g.sa+1:h.x+p+8-10-g.sa-1,wa=h.y+r+5+1,g.n.moveTo(v,wa),g.n.m&&kh(g.n));p=Math.max(p,b.T);this.width=Math.max(this.width,p);k.push("H",p);a.push("H",p+(x?-1:0));k.push("v",e.height);x&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],v=r+18,-1!=g.align&&(m=b.T-g.hb-8-20,1==g.align?p+=m:0==g.align&&(p+=(m+p)/2)),Hj(g.wa,p,v),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),m=e.height-20,k.push("v",m),x?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",m)):(a.push("M",b.T-4.2+","+(r+20-.4)),a.push("l","3.04,-1.8")),v=h.x+(x?-b.T-1:b.T+1),wa=h.y+r,g.n.moveTo(v,wa),g.n.m&&(kh(g.n),this.width=Math.max(this.width,b.T+ni(S(g.n)).width-8+1))):5==e.type?(g=e[0],v=r+18,-1!=g.align&&(m=b.T-g.hb-20,b.Cj&&(m-=8),1==g.align?p+=m:0==g.align&&(p+=(m+p)/2)),Hj(g.wa,p,v),k.push("v",e.height),x&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==y&&(k.push("v",10),x&&a.push("v",9),r+=10),v=r+18,-1!=g.align&&(m=b.ef-g.hb-20,1==g.align?p+=m:0==g.align&&(p+=
(m+p)/2)),Hj(g.wa,p,v),p=b.ef+30,k.push("H",p),k.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"),k.push("v",e.height-16),k.push("a 8,8 0 0,0 8,8"),k.push("H",b.T),x?(a.push("M",p-30+Cj+","+(r+Cj)),a.push(Ej),a.push("v",e.height-16),a.push("a 9,9 0 0,0 9,9"),a.push("H",b.T-1)):(a.push("M",p-30+Cj+","+(r+e.height-Cj)),a.push(Fj),a.push("H",b.T)),v=h.x+(x?-p:p),wa=h.y+r+1,g.n.moveTo(v,wa),g.n.m&&(kh(g.n),this.width=Math.max(this.width,b.ef+ni(S(g.n)).width)),y==b.length-1||3==b[y+1].type)&&(k.push("v",
10),x&&a.push("v",9),r+=10);r+=e.height}b.length||(r=25,k.push("V",r),x&&a.push("V",r-1));b=r;this.height=b+1;this.J&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.J.moveTo(x?h.x-30:h.x+30,h.y+b+1),this.J.m&&kh(this.J),this.height+=4);this.zg?(k.push("H 0"),x||a.push("M","1,"+b)):(k.push("H",8),k.push("a","8,8 0 0,1 -8,-8"),x||(a.push("M",Bj+","+(b-Bj)),a.push("A","7,7 0 0,1 1,"+(b-8))));this.K?(this.K.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),x?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):x||(this.df?a.push("V",1):a.push("V",8));k.push("z");b=k.join(" ")+"\n"+l.join(" ");this.Mb.setAttribute("d",b);this.gf.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.hf.setAttribute("d",b);x&&(this.Mb.setAttribute("transform","scale(-1 1)"),this.hf.setAttribute("transform","scale(-1 1)"),this.gf.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?
b.C():ug(window,"resize");hj(this)};function Hj(a,b,c){x&&(b=-b);for(var d=0,e;e=a[d];d++)x?(b-=e.bf+e.sa,e.D().setAttribute("transform","translate("+b+", "+c+")"),e.sa&&(b-=10)):(e.D().setAttribute("transform","translate("+(b+e.bf)+", "+c+")"),e.sa&&(b+=e.bf+e.sa+10));return x?-b:b};/*

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
function F(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in Ij)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=Ij[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var Ij={};aa("document.documentElement.ontouchstart")&&(Ij={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function G(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function qi(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function ug(a,b){setTimeout(function(){qi(a,b)},0)}
function Xg(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function Bg(a){var b=0,c=0;do{var d=Xg(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=z);return{x:b,y:c}}function mf(a){a=Bg(a);return aj(a.x,a.y,!1)}
function E(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Lb(a){return 2==a.button||a.ctrlKey}
function aj(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=z.createSVGPoint();d.x=a;d.y=b;a=z.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Jg(a){return aj(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function pf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function qf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||pf(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function rf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||pf(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d};/*

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
var sg="handclosed",Ug="handdelete",nj={},Jj="",Kj=null,Lj="";function Mj(){var a=Nj.join("\n");Lj=yg.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Lj),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Kj=c.sheet;rg("hando")}
function rg(a){if(!I&&Jj!=a){Jj=a;var b="url("+Lj+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Kj||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;z&&(z.style.cursor="hando"==a?"":b)}}
var Nj=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function Oj(a,b){function c(){Pj(a);Qj()}if(!Hc(document,a))throw"Error: container is not in current document.";b&&Rj(b);if(va){var d=document.getElementById("realtime");d&&(d.style.display="block");Sj(c,a)}else c()}
function Rj(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Xf(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var l=a.scrollbars;void 0===l&&(l=c);var m=a.sounds;void 0===m&&(m=!0);var p=!!a.realtime,v=p?a.realtimeOptions:void 0;
x=!!a.rtl;ta=e;sa=g;ua=h;I=b;ya=a.maxBlocks||Infinity;a.media?yg=a.media:a.path&&(yg=a.path+"media/");za=c;Aa=l;qa=d;Ba=m;ra=k;va=p;xa=v}
function Pj(a){a.setAttribute("dir","LTR");Od=x;Mj();var b=E("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=E("defs",{},b),d,e;d=E("filter",{id:"blocklyEmboss"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=E("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
E("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);E("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);E("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=E("filter",{id:"blocklyTrashcanShadowFilter"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);E("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=E("feMerge",{},d);E("feMergeNode",{"in":"offsetBlur"},d);E("feMergeNode",{"in":"SourceGraphic"},
d);d=E("filter",{id:"blocklyShadowFilter"},c);E("feGaussianBlur",{stdDeviation:2},d);c=E("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);E("rect",{width:10,height:10,fill:"#aaa"},c);E("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);J=new Lg(Tj,Uj);b.appendChild(J.H());J.dg=ya;I||(za?J.Aa=new Yi(b,a):(J.ra=new ei,c=J.ra,d=c.H(),c.ce=!1,Gc(d)),Aa||Vj(function(){if(0==Mb){var a=J.Fb(),b=a.Va+a.Wa,c=a.bc+a.Xa;if(a.gb<c||a.gb+a.Za>a.ta+c||a.Bb<(x?a.Va:
b)||a.Bb+a.Ic>(x?a.V:a.V+b))for(var d=Fa(J,!1),e=0,p;p=d[e];e++){var v=p.O(),r=ni(p),y=c+25-r.height-v.y;0<y&&p.moveBy(0,y);y=c+a.ta-25-v.y;0>y&&p.moveBy(0,y);y=25+b-v.x-(x?0:r.width);0<y&&p.moveBy(y,0);y=b+a.V-25-v.x+(x?r.width:0);0>y&&p.moveBy(y,0)}}}));b.appendChild(Hh());a.appendChild(b);z=b;jj();nf=M("div","blocklyWidgetDiv");nf.style.direction=x?"rtl":"ltr";document.body.appendChild(nf)}
function Qj(){F(z,"mousedown",null,Wj);F(z,"contextmenu",null,Xj);F(nf,"contextmenu",null,Xj);Ca||(F(window,"resize",document,jj),F(document,"keydown",null,Yj),document.addEventListener("mouseup",Zj,!1),zb&&F(window,"orientationchange",document,function(){ug(window,"resize")}),Ca=!0);if(ra)if(J.Aa)J.Aa.I();else if(J.ra){J.ra.I(J);J.ra.show(ra.childNodes);J.scrollX=J.ra.A;x&&(J.scrollX*=-1);var a="translate("+J.scrollX+", 0)";J.aa.setAttribute("transform",a);J.hd.setAttribute("transform",a)}Aa&&(J.ac=
new Cg(J),J.ac.resize());Ng();if(Ba){ak([yg+"click.mp3",yg+"click.wav",yg+"click.ogg"],"click");ak([yg+"delete.mp3",yg+"delete.ogg",yg+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)G(b.pop());for(var a in bk){var d=bk[a];d.volume=.01;d.play();d.pause();if(zb||yb)break}};b.push(F(document,"mousemove",null,a));b.push(F(document,"touchstart",null,a))}};/*

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
var nf=null,kf=null,ck=null;function jf(a){lf();kf=a;ck=null;nf.style.display="block"}function lf(){kf&&(nf.style.display="none",ck&&ck(),ck=kf=null,Kb(nf))}function of(a,b,c,d){b<d.y&&(b=d.y);x?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);nf.style.left=a+"px";nf.style.top=b+"px"};/*

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
function dk(a,b,c,d){this.h=null;this.ha=Number(c);this.A=Number(b);this.gd={height:this.ha+10,width:this.A};this.Ha=d||"";this.Y=E("g",{},null);this.Be=E("image",{height:this.ha+"px",width:this.A+"px",y:-12},this.Y);this.Ta(a);vb&&(this.Ve=E("rect",{height:this.ha+"px",width:this.A+"px",y:-12,"fill-opacity":0},this.Y))}w(dk,Gb);f=dk.prototype;f.clone=function(){return new dk(this.Zk(),this.A,this.ha,this.wb())};f.Ve=null;f.Fc=!1;
f.I=function(a){this.h||(this.h=a,a.D().appendChild(this.Y),a=this.Ve||this.Be,a.Ia=this.h,Ih(a))};f.k=function(){H(this.Y);this.Ve=this.Be=this.Y=null};f.fd=function(a){(this.Ve||this.Be).Ia=a};f.Qc=function(){return this.kk};f.Ta=function(a){null!==a&&(this.kk=a,this.Be.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",q(a)?a:""))};f.Sa=function(a){null!==a&&(this.Ha=a)};f.bd=function(){};/*

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
function ek(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=n.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var fk=ek();function W(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function gk(a){this.Ui=W(a,"clientId");this.Kg=fk.userId;document.getElementById(W(a,"authButtonElementId"));document.getElementById(W(a,"authDivElementId"))}gk.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function hk(a,b,c,d){function e(c){gapi.Ob.ea.files.Ee({resource:{mimeType:b,title:a,parents:[{id:c}]}}).ic(d)}function g(){function a(b){gapi.Ob.ea.$j.Ee({fileId:"appdata",resource:{key:"folderId",value:b}}).ic(function(){e(b)})}function b(){gapi.Ob.ea.files.Ee({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).ic(function(b){a(b.id)})}gapi.Ob.ea.$j.get({fileId:"appdata",propertyKey:"folderId"}).ic(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Ob.ea.files.get({fileId:g}).ic(function(a){a.error||
a.labels.xl?b():e(g)})}})}gapi.Ob.load("drive","v2",function(){g()})}function ik(a){this.Uh=W(a,"onFileLoaded");this.Oj=W(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.Jh=W(a,"initializeModel");this.bi=W(a,"registerTypes",function(){});this.Pg=W(a,"afterAuth",function(){});this.Oi=W(a,"autoCreate",!1);this.fj=W(a,"defaultTitle","New Realtime File");this.ej=W(a,"defaultFolderTitle","");this.Qg=W(a,"afterCreate",function(){});this.tf=new gk(a)}
function jk(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;fk=ek();for(var e in b)gapi.ea.zb.load(b[e],a.Uh,a.Jh,a.Fh)}ik.prototype.start=function(){var a=this;this.tf.start(function(){a.bi&&a.bi();a.Pg&&a.Pg();a.load()})};
ik.prototype.Fh=function(a){a.type!=gapi.ea.zb.Mg.Fk&&(a.type==gapi.ea.zb.Mg.zk?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ea.zb.Mg.Dk&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
ik.prototype.load=function(){var a=fk.fileIds;a&&(a=a.split(","));var b=this.tf.Kg,b=fk.state;if(a)for(var c in a)gapi.ea.zb.load(a[c],this.Uh,this.Jh,this.Fh);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.bl;b=d.Kg;jk(this,a,b);return}}this.Oi&&kk(this)}};function kk(a){hk(a.fj,a.Oj,a.ej,function(b){b.id?(a.Qg&&a.Qg(b.id),jk(a,[b.id],a.tf.Kg)):(console.error("Error creating file."),console.error(b))})};/*

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
var Pg,lk,Og=!1,mk=null,Wh=null,nk=null,ok=null,Yh=null,$h=!1,pk=null,qk=null,rk=null;function sk(a){var b=a.jj;a=a.jj.length;for(var c=0;c<a;c++){var d=b[c];if(!d.Ij){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Zh?tk(function(){uk(e,!1);vk(e)}):"relativeX"!=d.Zh&&"relativeY"!=d.Zh||tk(function(){e.ni||uk(e,!1);vk(e)}))}}}function wk(a){if(!a.Ij){var b=a.newValue;b?uk(b,!a.oldValue):(b=a.oldValue,xk(b))}}function tk(a){if($h)a();else try{$h=!0,a()}finally{$h=!1}}
function uk(a,b){tk(function(){var c=Xf(a.Lg).firstChild;if(c=Zf(J,c,!0))b&&c.o.nd(c),(b||pb(Pg,c))&&vk(c)})}function vk(a){if(!isNaN(a.We)&&!isNaN(a.Xe)){var b=Qh().width,c=a.O(),d=a.We-c.x;a.moveBy(x?b-d:d,a.Xe-c.y)}}function xk(a){tk(function(){a.k(!0,!0,!0)})}function hj(a){if(a.o==J&&Og&&!$h){a=ih(a);var b=a.O(),c=!1,d=Uf(a);d.setAttribute("id",a.id);var e=M("xml");e.appendChild(d);d=Wf(e);d!=a.Lg&&(c=!0,a.Lg=d);if(a.We!=b.x||a.Xe!=b.y)a.We=b.x,a.Xe=b.y,c=!0;c&&Yh.set(a.id.toString(),a)}}
function yk(a,b){gapi.Ob.ea.Yh.list({fileId:a}).ic(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.ll){b(e.domain);break}}})}
var Ck={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Wh=a;var b=a.Tk();a.Oc().set("blocks",b);b=a.Sk();a.Oc().set("topBlocks",b);qk&&a.Oc().set(qk,a.Uk(rk))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){mk=a;a:{for(var b=a.oj(),c=0;c<b.length;c++){var d=b[c];if(d.Jj){nk=d.rl;break a}}nk=void 0}Wh=a.Me;Yh=Wh.Oc().get("blocks");Pg=Wh.Oc().get("topBlocks");
Wh.Oc().addEventListener(gapi.ea.zb.mf.Ek,sk);Yh.addEventListener(gapi.ea.zb.mf.Gk,wk);ok();a.addEventListener(gapi.ea.zb.mf.Ak,zk);a.addEventListener(gapi.ea.zb.mf.Bk,Ak);Bk();a=Pg;for(b=0;b<a.length;b++)c=a.get(b),uk(c,!0)},registerTypes:function(){var a=gapi.ea.zb.Vk;a.jl(uh,"Block");uh.prototype.id=a.xf("id");uh.prototype.Lg=a.xf("xmlDom");uh.prototype.We=a.xf("relativeX");uh.prototype.Xe=a.xf("relativeY");a.sl(uh,uh.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Ob.ea.Yh.Ee({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.ic(function(c){c.error&&yk(a,function(c){b=gapi.Ob.ea.Yh.Ee({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.ic(function(){})})})}};function Dk(){var a=xa,b=W(a,"chatbox");b&&(qk=W(b,"elementId"),rk=W(b,"initText",Ek));Ck.Ui=W(a,"clientId");lk=W(a,"collabElementId")}
function Sj(a,b){Dk();Og=!0;Fk(b);ok=function(){a();if(qk){var b=Wh.Oc().get(qk),d=document.getElementById(qk);gapi.ea.zb.Wk.Kk(b,d);d.disabled=!1}};pk=new ik(Ck);pk.start()}
function Fk(a){a.style.background="url("+yg+"progress.gif) no-repeat center center";var b=Wc(a),c=M("div");c.id=Ck.authDivElementId;var d=M("p",null,Gk);c.appendChild(d);d=M("button",null,"Authorize");d.id=Ck.Ik;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=Wc(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Bk(){if(lk){var a;a=lk;a=q(a)?document.getElementById(a):a;Kb(a);for(var b=mk.oj(),c=0;c<b.length;c++){var d=b[c],e=M("img",{src:d.il||yg+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.Jj?" ("+Hk+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function zk(){Bk()}function Ak(){Bk()}function qh(a){var b=nk+"-"+a;return Yh.has(b)?qh("-"+a):b};/*

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
var yg="https://blockly-demo.appspot.com/static/media/",wg=64,xg=92,zg="sprites.png",ch=[,2,1,4,3],bk=Object.create(null),U=null,I=!1,$g=null,ah=null,ui=5,V=20,fh=250,ij=30,J=null,Ik=null,Mb=0,Jk=null;function Qh(){return{width:z.Vg,height:z.Ug}}function jj(){var a=z,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Vg!=c&&(a.setAttribute("width",c+"px"),a.Vg=c);a.Ug!=b&&(a.setAttribute("height",b+"px"),a.Ug=b);J.ac&&J.ac.resize()}
function Wj(a){jj();ri();tg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!I&&U&&b&&Sg(U);a.target==z&&Lb(a)?Kk(a):(I||b)&&J.ac&&(J.Hf=!0,J.Cg=a.clientX,J.Dg=a.clientY,J.nk=J.Fb(),J.pk=J.scrollX,J.qk=J.scrollY,"mouseup"in Ij&&(Jk=F(document,"mouseup",null,Zj)),Da=F(document,"mousemove",null,Lk))}function Zj(){rg(nj.OPEN);J.Hf=!1;Jk&&(G(Jk),Jk=null);Da&&(G(Da),Da=null)}
function Lk(a){if(J.Hf){Kg();var b=J.nk,c=J.pk+(a.clientX-J.Cg),d=J.qk+(a.clientY-J.Dg),c=Math.min(c,-b.Bb),d=Math.min(d,-b.gb),c=Math.max(c,b.V-b.Bb-b.Ic),d=Math.max(d,b.ta-b.gb-b.Za);J.ac.set(-c-b.Bb,-d-b.gb);a.stopPropagation()}}
function Yj(a){if(!qg(a))if(27==a.keyCode)tg();else if(8==a.keyCode||46==a.keyCode)try{U&&U.Kc&&!I&&(tg(),U.k(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(U&&U.Kc&&!I&&U.Jb&&!I&&U.o==J&&(tg(),67==a.keyCode?Mk():88==a.keyCode&&(Mk(),U.k(!0,!0))),86==a.keyCode&&Ik){a=J;var b=Ik;if(!(b.getElementsByTagName("block").length>=Ha(a))){var c=Zf(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){x&&(d=-d);do for(var e=!1,g=a.Eb(),
h=0,k;k=g[h];h++)k=k.O(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=x?d-V:d+V,b+=2*V,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function ri(){fj&&(G(fj),fj=null);gj&&(G(gj),gj=null);var a=U;if(2==Mb&&a){var b=a.O();lh(a,b.x-a.li,b.y-a.mi);delete a.me;Aj(a,!1);a.C();Af(a.Ka,fh,a);ug(window,"resize");a.o.ub()}Mb=0;rg(nj.OPEN);ti()}function Mk(){var a=U,b=Uf(a);fg(b);a=a.O();b.setAttribute("x",x?-a.x:a.x);b.setAttribute("y",a.y);Ik=b}
function Kk(a){if(!I){var b=[];if(ta){for(var c=!1,d=!1,e=Fa(J,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Vf(h);d={enabled:d};d.text=Nk;d.fb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.yc.bind(c,!0),a),c=Vf(c),a+=10};b.push(d);c={enabled:c};c.text=Ok;c.fb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.yc.bind(c,!1),a),c=Vf(c),a+=10};b.push(c)}ej.show(a,b)}}function Xj(a){qg(a)||a.preventDefault()}
function tg(a){Mh();lf();!a&&J.Aa&&J.Aa.ra&&J.Aa.ra.ce&&J.Aa.Vd.Ac(null)}function Kg(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function qg(a){return"textarea"==a.target.type||"text"==a.target.type}
function ak(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(bk[b]=c)}}function lj(a,b){var c=bk[a];c&&(c=Eb&&9===Eb||zb||xb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Tj(){var a=Qh();J.Aa&&(a.width-=J.Aa.width);var b=a.width-T,c=a.height-T;try{var d=J.aa.getBBox()}catch(e){return null}if(J.ac)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!x&&J.Aa&&(d=J.Aa.width);return{ta:a.height,V:a.width,Za:c-h,Ic:b-g,bc:-J.scrollY,Va:-J.scrollX,gb:h,Bb:g,Xa:0,Wa:d}}
function Uj(a){if(!J.ac)throw"Attempt to set main workspace scroll without scrollbars.";var b=Tj();t(a.x)&&(J.scrollX=-b.Ic*a.x-b.Bb);t(a.y)&&(J.scrollY=-b.Za*a.y-b.gb);a="translate("+(J.scrollX+b.Wa)+","+(J.scrollY+b.Xa)+")";J.aa.setAttribute("transform",a);J.hd.setAttribute("transform",a)}function kj(a){a()}function Vj(a){return F(J.aa,"blocklyWorkspaceChange",null,a)}n.Blockly||(n.Blockly={});n.Blockly.getMainWorkspace=function(){return J};n.Blockly.addChangeListener=Vj;
n.Blockly.removeChangeListener=function(a){G(a)};function Pk(a,b){var c;c=a.className;for(var d=c=q(c)&&c.match(/\S+/g)||[],e=tb(arguments,1),g=0;g<e.length;g++)pb(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var Qk={},Rk={ace:"\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",af:"Afrikaans",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",az:"Az\u0259rbaycanca","be-tarask":"Tara\u0161kievica",br:"Brezhoneg",ca:"Catal\u00e0",cdo:"\u95a9\u6771\u8a9e",cs:"\u010cesky",da:"Dansk",de:"Deutsch",el:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",en:"English",es:"Espa\u00f1ol",eu:"Euskara",fa:"\u0641\u0627\u0631\u0633\u06cc",fi:"Suomi",fo:"F\u00f8royskt",fr:"Fran\u00e7ais",frr:"Frasch",gl:"Galego",hak:"\u5ba2\u5bb6\u8a71",
he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hi:"\u0939\u093f\u0928\u094d\u0926\u0940",hrx:"Hunsrik",hu:"Magyar",ia:"Interlingua",id:"Bahasa Indonesia",is:"\u00cdslenska",it:"Italiano",ja:"\u65e5\u672c\u8a9e",ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",km:"\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",ko:"\ud55c\uad6d\uc5b4",ksh:"Ripoar\u0117sch",ky:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",la:"Latine",lb:"L\u00ebtzebuergesch",lt:"Lietuvi\u0173",lv:"Latvie\u0161u",mg:"Malagasy",ml:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
mk:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",mr:"\u092e\u0930\u093e\u0920\u0940",ms:"Bahasa Melayu",mzn:"\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",nb:"Norsk Bokm\u00e5l",nl:"Nederlands, Vlaams",oc:"Lenga d'\u00f2c",pa:"\u092a\u0902\u091c\u093e\u092c\u0940",pl:"Polski",pms:"Piemont\u00e8is",ps:"\u067e\u069a\u062a\u0648",pt:"Portugu\u00eas","pt-br":"Portugu\u00eas Brasileiro",ro:"Rom\u00e2n\u0103",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",sc:"Sardu",sco:"Scots",si:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
sk:"Sloven\u010dina",sr:"\u0421\u0440\u043f\u0441\u043a\u0438",sv:"Svenska",sw:"Kishwahili",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",tl:"Tagalog",tlh:"tlhIngan Hol",tr:"T\u00fcrk\u00e7e",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",vi:"Ti\u1ebfng Vi\u1ec7t","zh-hans":"\u7c21\u9ad4\u4e2d\u6587","zh-hant":"\u6b63\u9ad4\u4e2d\u6587"},Sk="ace ar fa he mzn ps".split(" "),Tk=window.BlocklyGamesLang,Uk=window.BlocklyGamesLanguages,Vk=!!window.location.pathname.match(/\.html$/);
function Wk(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var Xk,Yk=Number(Wk("level","NaN"));Xk=isNaN(Yk)?1:Math.min(Math.max(1,Yk),10);
function Zk(){document.title=document.getElementById("title").textContent;document.head.parentElement.setAttribute("dir",-1!=Sk.indexOf(Tk)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",Tk);for(var a=[],b=0;b<Uk.length;b++){var c=Uk[b];a.push([Rk[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==Tk&&(e.selected=!0);d.options.add(e)}1>=d.options.length&&
(d.style.display="none");for(b=1;10>=b;b++)a=document.getElementById("level"+b),c=!!$k(b),a&&c&&Pk(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(al,1)}function $k(a){var b=bl,c;try{c=window.localStorage[b+a]}catch(d){}return c}function X(a){var b=cl(a);return null===b?"[Unknown message: "+a+"]":b}
function cl(a){return(a=document.getElementById(a))?(a=a.textContent,a=a.replace(/\\n/g,"\n")):null}function dl(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}
function al(){if(!Vk){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};K.animal={I:function(){this.dd(185);Th(di(this,5,""),"","NAME");Th(Vh(di(this,1,"PIC"),1),X("Puzzle_picture"));Th(Th(Vh(di(this,5,""),1),X("Puzzle_legs")),new ef(el),"LEGS")},Zc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ya);return a},rd:function(a){this.qc(parseInt(a.getAttribute("animal"),10))},Ya:0,qc:function(a){this.Ya=a;var b=X("Puzzle_animal"+a).toUpperCase();Sb(this,"NAME").Ta(b);this.Ub=X("Puzzle_animal"+a+"HelpUrl")},Zf:function(){var a=Sb(this,"LEGS");
return(a?a.Qc():null)==this.Ya}};K.picture={I:function(){this.dd(348);di(this,5,"PIC");rh(this);this.fd("")},Zc:K.animal.Zc,rd:K.animal.rd,Ya:0,qc:function(a){this.Ya=a;var b="puzzle/"+X("Puzzle_animal"+a+"Pic"),c=X("Puzzle_animal"+a+"PicHeight");a=X("Puzzle_animal"+a+"PicWidth");Th(dg(this,"PIC"),new dk(b,a,c))},Zf:function(){var a=this.getParent();return a&&a.Ya==this.Ya}};
K.trait={I:function(){this.dd(18);Th(di(this,5,""),"","NAME");sh(this,!0);th(this,!0)},Zc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ya);a.setAttribute("trait",this.qi);return a},rd:function(a){this.qc(parseInt(a.getAttribute("animal"),10),parseInt(a.getAttribute("trait"),10))},Ya:0,qi:0,qc:function(a,b){this.Ya=a;this.qi=b;var c=X("Puzzle_animal"+a+"Trait"+b);Sb(this,"NAME").Ta(c)},Zf:function(){var a=ai(this);return a&&a.Ya==this.Ya}};var qj="Add Comment",Gk="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",Ek="Chat with your collaborator by typing in this box!",Nk="Collapse Blocks",uj="Collapse Block",xj="Delete Block",yj="Delete %1 Blocks",wj="Disable Block",oj="Duplicate",vj="Enable Block",Ok="Expand Blocks",tj="Expand Block",rj="External Inputs",zj="Help",sj="Inline Inputs",Hk="Me",pj="Remove Comment";var Y={Mc:null,I:function(){Zk();var a=document.getElementById("linkButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=X("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=X("Games_linkAlert"),BlocklyStorage.HASH_ERROR=X("Games_hashError"),BlocklyStorage.XML_ERROR=X("Games_xmlError"),BlocklyStorage.alert=Qk.rk,a&&dl(a,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",Y.Ti,!0)},Gj:function(a){document.body.innerHTML=
a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Oj(a,{media:"media/",readOnly:!0,ol:-1!=Sk.indexOf(Tk),scrollbars:!1});a=Wk("xml","");Y.vg("<xml>"+a+"</xml>")},fl:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.Je}catch(d){}c&&delete window.sessionStorage.Je;var e=$k(Xk),g=b&&$k(Xk-1);(c=c||e||g||a)&&Y.vg(c)}},vg:function(a){Y.Mc?Y.Mc.setValue(a,
-1):(a=Xf(a),Yf(J,a))},fk:function(){if(void 0!=typeof pa&&window.localStorage){var a=bl+Xk;if(Y.Mc)var b=Y.Mc.getValue();else b=Tf(J),b=Wf(b);window.localStorage[a]=b}},Ce:function(){window.location=(Vk?"index.html":"./")+"?lang="+Tk},Ti:function(){if(window.sessionStorage){if(Y.Mc)var a=Y.Mc.getValue();else a=Tf(J),a=Wf(a);window.sessionStorage.Je=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+
a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},Ih:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Rg(a)},tk:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Qb:function(a){if("click"==a.type&&"touchend"==Y.Qb.ng&&Y.Qb.lg+2E3>Date.now()||Y.Qb.ng==a.type&&Y.Qb.lg+400>Date.now())return a.preventDefault(),a.stopPropagation(),
!0;Y.Qb.ng=a.type;Y.Qb.lg=Date.now();return!1}};Y.Qb.ng=null;Y.Qb.lg=0;Y.cl=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
Y.dl=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=Y;Y.setCode=Y.vg;var Z={Ib:!1,rh:null,ke:null,Rd:function(a,b,c,d,e,g){function h(){Z.Ib&&(k.style.visibility="visible",k.style.zIndex=10,l.style.visibility="hidden")}Z.Ib&&Z.Hb(!1);tg(!0);Z.Ib=!0;Z.rh=b;Z.ke=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var l=document.getElementById("dialogBorder"),m;for(m in e)k.style[m]=e[m];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Z.Df=F(d,"mousedown",
null,Z.gj));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Z.Ke(b,!1,.2),Z.Ke(k,!0,.8),setTimeout(h,175)):h()},sh:0,uh:0,gj:function(a){Z.Gf();if(!Lb(a)){var b=document.getElementById("dialog");Z.sh=b.offsetLeft-a.clientX;Z.uh=b.offsetTop-a.clientY;Z.Ff=F(document,"mouseup",null,Z.Gf);Z.Ef=F(document,"mousemove",null,Z.hj);a.stopPropagation()}},hj:function(a){var b=document.getElementById("dialog"),c=Z.sh+a.clientX;a=Z.uh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},Gf:function(){Z.Ff&&(G(Z.Ff),Z.Ff=null);Z.Ef&&(G(Z.Ef),Z.Ef=null)},Hb:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Z.Ib){Z.Gf();Z.Df&&(G(Z.Df),Z.Df=null);Z.Ib=!1;Z.ke&&Z.ke();Z.ke=null;var c=!1===a?null:Z.rh;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Z.Ke(a,!1,.8),Z.Ke(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Ke:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Z.nj(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},nj:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=mf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},rk:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Z.Rd(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Z.Eg);Z.Bg()},Hi:function(){if(!$k(Xk))if(Z.Ib||0!=uh.Xk)setTimeout(Z.Hi,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Z.Hb,!0);b.addEventListener("touchend",Z.Hb,!0);b=document.getElementById("abortOk");b.addEventListener("click",Y.Ce,!0);b.addEventListener("touchend",Y.Ce,
!0);Z.Rd(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.Og,!0)});document.body.addEventListener("keydown",Z.Og,!0)}},Qk:function(){var a=document.getElementById("dialogDone");if(J){var b=document.getElementById("dialogLinesText");b.textContent="";var c=pa.Ck.yl(),c=Y.tk(c),c=c.split("\n").length;document.getElementById("containerCode").innerHTML="<p>Five new shirts unlocked!</p><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/><img src='./turtle/shirt.png' width='80px' border=0/>";
c=1==c?X("Games_linesOfCode1"):X("Games_linesOfCode2").replace("%1",c);b.appendChild(document.createTextNode(c))}c=10>Xk?X("Games_nextLevel").replace("%1",Xk+1):X("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",Z.Hb,!0);b.addEventListener("touchend",Z.Hb,!0);b=document.getElementById("doneOk");b.addEventListener("click",Y.Sh,!0);b.addEventListener("touchend",Y.Sh,!0);Z.Rd(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
Z.$g,!0)});document.body.addEventListener("keydown",Z.$g,!0);document.getElementById("dialogDoneText").textContent=c},qh:function(a){!Z.Ib||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Z.Hb(!0),a.stopPropagation(),a.preventDefault())},Bg:function(){document.body.addEventListener("keydown",Z.qh,!0)},Eg:function(){document.body.removeEventListener("keydown",Z.qh,!0)},$g:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Hb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Sh()},
Og:function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Hb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Ce()}};window.BlocklyDialogs=Z;Z.hideDialog=Z.Hb;var fl={ql:!0};B&&D(8);function gl(a){return a&&a.Wi&&a.Wi===fl?a.content:String(a).replace(hl,il)}var jl={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function il(a){return jl[a]}var hl=/[\x00\x22\x26\x27\x3c\x3e]/g;function kl(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function ll(){return'<div style="display: none"><span id="Puzzle_animal1">Elephant</span><span id="Puzzle_animal1Pic">elephant.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Elephant</span><span id="Puzzle_animal2">Ladybug</span><span id="Puzzle_animal2Pic">ladybug.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Coccinellidae</span><span id="Puzzle_animal3">Goldfish</span><span id="Puzzle_animal3Pic">goldfish.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Fish</span><span id="Puzzle_animal4">Penguin</span><span id="Puzzle_animal4Pic">penguin.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Penguin</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>'}
function ml(){var a=ll()+'<table id="header" width="100%"><tr><td valign="bottom"><h1>',b;b='<span id="title">'+(Vk?'<a href="index.html?lang='+gl(Tk)+'">':'<a href="./?lang='+gl(Tk)+'">')+'<img id="banner" src="index/horizontal-logo-01.png" height="60"  alt="Blockly Games"></a>'+gl("")+"</span>";return a+b+'</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Help</button>&nbsp;<button id="checkButton" class="primary">Check Answers</button></td></tr></table><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (blue), attach its picture and choose its number of legs.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang='+
gl(Tk)+'&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>'+
kl()+'</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>'+kl()+"</div>"};var bl="puzzle";
function nl(){function a(){c.style.width=window.innerWidth-20+"px";c.style.height=window.innerHeight-c.offsetTop-15+"px"}document.body.innerHTML=ml();Y.I();var b=-1!=Sk.indexOf(Tk),c=document.getElementById("blockly");a();window.addEventListener("resize",a);Oj(document.getElementById("blockly"),{media:"media/",rtl:b,scrollbars:!1,trashcan:!1});var d=$k(Xk);try{var e=window.sessionStorage.Je}catch(g){e=null}if(e)delete window.sessionStorage.Je,b=Xf(e),Yf(J,b);else if(d)b=Xf(d),Yf(J,b);else{for(var h=
[],k=[],l=[],e=1;cl("Puzzle_animal"+e);){var m=Rb(J,"animal");m.qc(e);h.push(m);m=Rb(J,"picture");m.qc(e);k.push(m);for(var p=1;cl("Puzzle_animal"+e+"Trait"+p);)m=Rb(J,"trait"),m.qc(e,p),l.push(m),p++;e++}ol(h);ol(k);ol(l);h=[].concat(h,k,l);b&&h.reverse();for(e=0;m=h[e];e++)bg(m,!1),m.mb(),m.C();for(e=k=0;m=h[e];e++){var v=m.D().getBBox();m.Nk=v.width;m.Mk=v.height;m.Wg=v.width*v.height;k+=m.Wg}jj();l=Qh();l.width-=50;l.height-=50;for(e=p=0;m=h[e];e++){var v=m.D().getBBox(),r=b?v.width+p/k*l.width:
p/k*(l.width-v.width),r=Math.round(r+50*Math.random()),v=Math.round(Math.random()*(l.height-v.height));m.moveBy(r,v);p+=m.Wg}}dl("checkButton",pl);dl("helpButton",function(){ql(!0)});d||ql(!1);if(C){h=J.Eb();for(e=0;m=h[e];e++)m.select();Sg(U)}V*=2;ak(["puzzle/win.mp3","puzzle/win.ogg"],"win")}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){Y.Gj(ll()+'<div id="blockly"></div>')}):window.addEventListener("load",nl);
function ol(a){for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}}function el(){for(var a=[[X("Puzzle_legsChoose"),"0"]],b=1,c;c=cl("Puzzle_animal"+b+"Legs");)a[b]=[c,String(b)],b++;a.sort(function(a,b){return a[0]-b[0]});return a}
function pl(){for(var a=J.Eb(),b=0,c=[],d=0,e;e=a[d];d++)e.Zf()||(b++,e.select(),c.push(e));var g=document.getElementById("graphValue");setTimeout(function(){g.style.width=100*(a.length-b)/a.length+"px"},500);1==b?d=[X("Puzzle_error1"),X("Puzzle_tryAgain")]:b?d=[X("Puzzle_error2").replace("%1",b),X("Puzzle_tryAgain")]:(d=[X("Puzzle_error0").replace("%1",a.length)],Y.fk());e=document.getElementById("answerMessage");e.textContent="";for(var h=0;h<d.length;h++){var k=document.createElement("div");k.appendChild(document.createTextNode(d[h]));
e.appendChild(k)}d=document.getElementById("answers");e=document.getElementById("checkButton");Z.Rd(d,e,!0,!0,{width:"25%",left:-1!=Sk.indexOf(Tk)?"5%":"70%",top:"5em"},b?Z.Eg:Y.Ce);Z.Bg();if(c.length){ol(c);var l=c[0],m=function(){l.select();Z.Ib&&(setTimeout(function(){Sg(l)},150),setTimeout(m,300))};m()}else setTimeout(rl,2E3),U&&Sg(U)}function rl(){lj("win",.5);for(var a=Fa(J,!1),b=0,c;c=a[b];b++)sl(c,b/a.length*360)}
function sl(a,b){if(Z.Ib){var c=J.Fb(),d=c.ta/2,e=c.V/2,c=a.O(),g=ni(a),h=Math.max(175,Math.min(d,e)-Math.max(g.height,g.width)/2),k=Date.now(),l=b+k/50%360,h=h*(Math.sin(k%5E3/5E3*2*Math.PI)/8+.875),e=h*Math.cos(l*Math.PI/180)+e-g.width/2,g=h*Math.sin(l*Math.PI/180)+d-g.height/2;5>Math.sqrt(Math.pow(e-c.x,2)+Math.pow(g-c.y,2))?(d=e-c.x,c=g-c.y):(c=180*Math.atan2(g-c.y,e-c.x)/Math.PI%360,c=0>360*c?c+360:c,d=Math.round(5*Math.cos(c*Math.PI/180)),c=Math.round(5*Math.sin(c*Math.PI/180)));a.moveBy(d,
c);setTimeout(sl.bind(null,a,b),50)}}function ql(a){var b=document.getElementById("help"),c=document.getElementById("helpButton");Z.Rd(b,c,a,!0,{width:"50%",left:"25%",top:"5em"},Z.Eg);Z.Bg()};
