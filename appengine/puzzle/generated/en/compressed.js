// Automatically generated file.  Do not edit!
'use strict';var f,n=this;function aa(a){a=a.split(".");for(var b=n,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Ib=function(){return a.uh?a.uh:a.uh=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function r(a){return"number"==typeof a}function u(a){return"function"==da(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a){return a[ia]||(a[ia]=++ja)}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;
function ka(a,b,c){return a.call.apply(a.bind,arguments)}function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ma(a,b,c){ma=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return ma.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var oa=Date.now||function(){return+new Date};function w(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pk=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};/*

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
function Ea(){this.$c=[]}f=Ea.prototype;f.t=!1;f.Pf=Infinity;f.k=function(){this.clear()};f.dd=function(a){this.$c.push(a);this.lb()};f.Oe=function(a){for(var b=!1,c,d=0;c=this.$c[d];d++)if(c==a){this.$c.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.lb()};function Fa(a,b){var c=[].concat(a.$c);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);x&&(d*=-1);c.sort(function(a,b){var c=a.O(),k=b.O();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.vb=function(){for(var a=Fa(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].ac());return a};f.clear=function(){for(;this.$c.length;)this.$c[0].k()};f.ke=function(){return 0};function Ga(a,b){for(var c=a.vb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Ha(a){return Infinity==a.Pf?Infinity:a.Pf-a.vb().length}f.lb=function(){};function Ia(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ja(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function La(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function Ma(a){if(!Na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Sa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ta,"&#0;"));return a}var Oa=/&/g,Pa=/</g,Qa=/>/g,Ra=/"/g,Sa=/'/g,Ta=/\x00/g,Na=/[\x00&<>"']/;
function Ua(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=n.document.createElement("div");return a.replace(Va,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Wa(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Va=/&([^;\s<&]+);?/g;function Xa(a,b){return a<b?-1:a>b?1:0};var Ya;a:{var Za=n.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}function ab(a){return-1!=Ya.indexOf(a)};function bb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<cb.length;g++)c=cb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function eb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return eb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var fb;function hb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,hb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}w(hb,Error);hb.prototype.name="CustomError";function ib(a,b){b.unshift(a);hb.call(this,Ia.apply(null,b));b.shift()}w(ib,hb);ib.prototype.name="AssertionError";function jb(a,b){throw new ib("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var A=Array.prototype,kb=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},lb=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},mb=A.filter?function(a,b,c){return A.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[g++]=l)}return e},nb=A.map?function(a,b,c){return A.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=p(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},ob=A.every?function(a,b,c){return A.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function pb(a,b){return 0<=kb(a,b)}
function qb(a,b){var c=kb(a,b),d;(d=0<=c)&&A.splice.call(a,c,1);return d}function rb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function sb(a,b,c,d){A.splice.apply(a,tb(arguments,1))}function tb(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)};var ub=ab("Opera")||ab("OPR"),B=ab("Trident")||ab("MSIE"),vb=ab("Gecko")&&-1==Ya.toLowerCase().indexOf("webkit")&&!(ab("Trident")||ab("MSIE")),C=-1!=Ya.toLowerCase().indexOf("webkit"),wb=ab("Macintosh"),xb=ab("Android"),yb=ab("iPhone")&&!ab("iPod")&&!ab("iPad"),zb=ab("iPad");function Ab(){var a=n.document;return a?a.documentMode:void 0}
var Bb=function(){var a="",b;if(ub&&n.opera)return a=n.opera.version,u(a)?a():a;vb?b=/rv\:([^\);]+)(\)|;)/:B?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:C&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ya))?a[1]:"");return B&&(b=Ab(),b>parseFloat(a))?String(b):a}(),Cb={};
function D(a){var b;if(!(b=Cb[a])){b=0;for(var c=Ka(String(Bb)).split("."),d=Ka(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",l=/(\d*)(\D*)/g,m=/(\d*)(\D*)/g;do{var q=l.exec(h)||["","",""],v=m.exec(k)||["","",""];if(0==q[0].length&&0==v[0].length)break;b=Xa(0==q[1].length?0:parseInt(q[1],10),0==v[1].length?0:parseInt(v[1],10))||Xa(0==q[2].length,0==v[2].length)||Xa(q[2],v[2])}while(0==b)}b=Cb[a]=0<=b}return b}
var Db=n.document,Eb=Db&&B?Ab()||("CSS1Compat"==Db.compatMode?parseInt(Bb,10):5):void 0;function Fb(a,b){this.width=a;this.height=b}f=Fb.prototype;f.clone=function(){return new Fb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.vh=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
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
function Gb(a){this.Yc=new Fb(0,25);this.La(a)}f=Gb.prototype;f.h=null;f.Q=!0;f.clone=function(){jb("There should never be an instance of Field, only its derived classes.")};f.uc=!0;f.I=function(a){this.h||(this.h=a,this.Y=E("g",{},null),this.ed=E("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.Y),this.fa=E("text",{"class":"blocklyText"},this.Y),this.tc(),a.D().appendChild(this.Y),this.Qf=F(this.Y,"mouseup",this,this.Uf),Hb(this))};
f.k=function(){this.Qf&&(G(this.Qf),this.Qf=null);this.h=null;H(this.Y);this.ed=this.fa=this.Y=null};f.tc=function(){this.uc&&(this.h.Cc&&!I?(Ib(this.Y,"blocklyEditableText"),Jb(this.Y,"blocklyNoNEditableText"),this.Y.style.cursor=this.ei):(Ib(this.Y,"blocklyNonEditableText"),Jb(this.Y,"blocklyEditableText"),this.Y.style.cursor=""))};f.u=function(){return this.Q};f.G=function(a){if(this.Q!=a){this.Q=a;var b=this.D();b&&(b.style.display=a?"block":"none",this.Tc())}};f.D=function(){return this.Y};
f.Tc=function(){if(this.Q){try{var a=this.fa.getComputedTextLength()}catch(b){a=8*this.fa.textContent.length}this.ed&&this.ed.setAttribute("width",a+10)}else a=0;this.Yc.width=a};f.nh=function(){this.Yc.width||this.Tc();return this.Yc};f.nb=function(){return this.za};f.La=function(a){null!==a&&a!==this.za&&(this.za=a,Hb(this),this.h&&this.h.t&&(this.h.C(),this.h.Ca(),this.h.o.lb()))};
function Hb(a){if(a.fa){var b=a.za;Kb(a.fa);b=b.replace(/\s/g,"\u00a0");x&&b&&(b+="\u200f");b||(b="\u00a0");a.fa.appendChild(document.createTextNode(b));a.Yc.width=0}}f.Hc=function(){return this.nb()};f.Ma=function(a){this.La(a)};f.Uf=function(a){if(!yb&&!zb||0===a.layerX||0===a.layerY)Lb(a)||2!=Mb&&this.h.Cc&&!I&&Nb(this)};f.Xc=function(){};/*

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
function Ob(){for(var a=J.vb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Ek;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Pb);b.sort(Pb);return[c,b]}function Pb(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function Qb(a,b,c,d){function e(e,g){for(var l=0;l<e.length;l++){var m=Rb(d,g);Sb(m,"NAME").Ma(e[l][0]);for(var q=[],v=0;v<e[l][1].length;v++)q[v]="ARG"+v;m.Yk(e[l][1],q);m.eb();a.push(m);b.push(2*c)}}if(K.procedures_defnoreturn){var g=Rb(d,"procedures_defnoreturn");g.eb();a.push(g);b.push(2*c)}K.procedures_defreturn&&(g=Rb(d,"procedures_defreturn"),g.eb(),a.push(g),b.push(2*c));K.procedures_ifreturn&&(g=Rb(d,"procedures_ifreturn"),g.eb(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=Ob();
e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function L(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=L.prototype;f.clone=function(){return new L(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof L?(this.x+=a.x,this.y+=a.y):(this.x+=a,r(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.x*=a;this.y*=c;return this};function Tb(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=Tb.prototype;f.ke=function(){return this.right-this.left};f.clone=function(){return new Tb(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof Tb?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ga(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,r(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function Ub(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=Ub.prototype;f.clone=function(){return new Ub(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof Ub?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.nh=function(){return new Fb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof L?(this.left+=a.x,this.top+=a.y):(this.left+=a,r(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=r(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function Vb(){this.qg="";this.li=Wb}Vb.prototype.Lc=!0;Vb.prototype.Gc=function(){return this.qg};Vb.prototype.toString=function(){return"Const{"+this.qg+"}"};function Xb(a){if(a instanceof Vb&&a.constructor===Vb&&a.li===Wb)return a.qg;jb("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Wb={};function Yb(){this.Qb="";this.ji=Zb}f=Yb.prototype;f.Lc=!0;f.Gc=function(){return this.Qb};f.If=!0;f.nd=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Qb+"}"};var Zb={};var $b=eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ac(){this.He="";this.ii=bc}ac.prototype.Lc=!0;var bc={};ac.prototype.Gc=function(){return this.He};ac.prototype.toString=function(){return"SafeStyle{"+this.He+"}"};function cc(a){var b=new ac;b.He=a;return b}var dc=cc("");
function ec(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof Vb?d=Xb(d):fc.test(d)||(jb("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?cc(b):dc}var fc=/^[-.%_!# a-zA-Z0-9]+$/;function gc(){this.$f="";this.mi=hc}f=gc.prototype;f.Lc=!0;f.Gc=function(){return this.$f};f.If=!0;f.nd=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.$f+"}"};var hc={};function ic(){this.Qb="";this.hi=jc;this.fh=null}f=ic.prototype;f.If=!0;f.nd=function(){return this.fh};f.Lc=!0;f.Gc=function(){return this.Qb};f.toString=function(){return"SafeHtml{"+this.Qb+"}"};function kc(a){if(a instanceof ic&&a.constructor===ic&&a.hi===jc)return a.Qb;jb("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function lc(a){if(a instanceof ic)return a;var b=null;a.If&&(b=a.nd());return mc(Ma(a.Lc?a.Gc():String(a)),b)}
var nc=/^[a-zA-Z0-9-]+$/,oc=eb("action","cite","data","formaction","href","manifest","poster","src"),pc=eb("embed","iframe","link","object","script","style","template");
function qc(a,b,c){if(!nc.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in pc)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!nc.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,l=a;k=g;if(h instanceof Vb)h=Xb(h);else if("style"==k.toLowerCase()){if(!ga(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof ac||
(h=ec(h));l=void 0;h instanceof ac&&h.constructor===ac&&h.ii===bc?l=h.He:(jb("expected object of type SafeStyle, got '"+h+"'"),l="type_error:SafeStyle");h=l}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in oc)if(h instanceof gc)h instanceof gc&&h.constructor===gc&&h.mi===hc?h=h.$f:(jb("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Yb)h instanceof Yb&&h.constructor===
Yb&&h.ji===Zb?h=h.Qb:(jb("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Lc&&(h=h.Gc());k=k+'="'+Ma(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===$b[a.toLowerCase()]?e+=">":(d=rc(c),e+=">"+kc(d)+"</"+a+">",d=d.nd());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return mc(e,d)}
function rc(a){function b(a){ea(a)?lb(a,b):(a=lc(a),d+=kc(a),a=a.nd(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";lb(arguments,b);return mc(d,c)}var jc={};function mc(a,b){var c=new ic;c.Qb=a;c.fh=b;return c}var sc=mc("",0);function tc(a,b){a.innerHTML=kc(b)};var uc=!B||B&&9<=Eb,vc=!vb&&!B||B&&B&&9<=Eb||vb&&D("1.9.1"),wc=B&&!D("9");function xc(a){return a?new yc(zc(a)):fb||(fb=new yc)}function Ac(a,b){bb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Cc?a.setAttribute(Cc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Dc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Fb(a.clientWidth,a.clientHeight)}function M(a,b,c){return Ec(document,arguments)}
function Ec(a,b){var c=b[0],d=b[1];if(!uc&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',Ma(d.name),'"');if(d.type){c.push(' type="',Ma(d.type),'"');var e={};db(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(p(d)?c.className=d:ea(d)?c.className=d.join(" "):Ac(c,d));2<b.length&&Fc(a,c,b,2);return c}
function Fc(a,b,c,d){function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ga(g)&&0<g.nodeType?e(g):lb(Gc(g)?rb(g):g,e)}}function Kb(a){for(var b;b=a.firstChild;)a.removeChild(b)}function Hc(a){var b=J.g;b.parentNode&&b.parentNode.insertBefore(a,b)}function H(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Ic(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function zc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var Jc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Kc={IMG:" ",BR:"\n"};function Lc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function Mc(a){a=a.tabIndex;return r(a)&&0<=a&&32768>a}
function Nc(a){var b=[];Oc(a,b,!1);return b.join("")}function Oc(a,b,c){if(!(a.nodeName in Jc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Kc)b.push(Kc[a.nodeName]);else for(a=a.firstChild;a;)Oc(a,b,c),a=a.nextSibling}function Gc(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(u(a))return"function"==typeof a.item}return!1}
function yc(a){this.ub=a||n.document||document}f=yc.prototype;f.bb=xc;f.i=function(a){return p(a)?this.ub.getElementById(a):a};f.H=function(a,b,c){return Ec(this.ub,arguments)};f.createElement=function(a){return this.ub.createElement(a)};f.createTextNode=function(a){return this.ub.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){Fc(zc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Mh=Kb;f.removeNode=H;f.ac=function(a){return vc&&void 0!=a.children?a.children:mb(a.childNodes,function(a){return 1==a.nodeType})};f.contains=Ic;f.Lb=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Lc(a)||Mc(a)):Lc(a)&&Mc(a))&&B?(a=u(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};function Pc(a,b){var c=zc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Qc(a,b){return Pc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function Rc(){var a=document,b=a.body,a=a.documentElement;return new L(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function Sc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Tc(a){if(B&&!(B&&8<=Eb))return a.offsetParent;var b=zc(a),c=Qc(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=Qc(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Uc(a){var b,c=zc(a),d=Qc(a,"position"),e=vb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new L(0,0),h;b=c?zc(c):document;(h=!B||B&&9<=Eb)||(h="CSS1Compat"==xc(b).ub.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=Sc(a),c=xc(c).ub,a=C||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=B&&D("10")&&c.pageYOffset!=a.scrollTop?new L(a.scrollLeft,
a.scrollTop):new L(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(C&&"fixed"==Qc(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(ub||C&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=Tc(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,ub&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function Vc(a){var b=Wc;if("none"!=Qc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function Wc(a){var b=a.offsetWidth,c=a.offsetHeight,d=C&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Sc(a),new Fb(a.right-a.left,a.bottom-a.top)):new Fb(b,c)}
function Xc(a){var b=Uc(a);a=Vc(a);return new Ub(b.x,b.y,a.width,a.height)}function Yc(a,b){a.style.display=b?"":"none"}var Zc=vb?"MozUserSelect":C?"WebkitUserSelect":null;function $c(a,b,c){c=c?null:a.getElementsByTagName("*");if(Zc){if(b=b?"none":"",a.style[Zc]=b,c){a=0;for(var d;d=c[a];a++)d.style[Zc]=b}}else if(B||ub)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var ad={thin:2,medium:4,thick:6};
function bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in ad)d=ad[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function cd(a){if(B&&!(B&&9<=Eb)){var b=bd(a,"borderLeft"),c=bd(a,"borderRight"),d=bd(a,"borderTop");a=bd(a,"borderBottom");return new Tb(d,c,a,b)}b=Pc(a,"borderLeftWidth");c=Pc(a,"borderRightWidth");d=Pc(a,"borderTopWidth");a=Pc(a,"borderBottomWidth");return new Tb(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var dd="closure_listenable_"+(1E6*Math.random()|0),ed=0;function fd(a,b,c,d,e){this.cc=a;this.Ie=null;this.src=b;this.type=c;this.Wd=!!d;this.me=e;this.key=++ed;this.Sc=this.Vd=!1}function gd(a){a.Sc=!0;a.cc=null;a.Ie=null;a.src=null;a.me=null};function hd(a){this.src=a;this.xa={};this.Nd=0}hd.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.xa[g];a||(a=this.xa[g]=[],this.Nd++);var h=id(a,b,d,e);-1<h?(b=a[h],c||(b.Vd=!1)):(b=new fd(b,this.src,g,!!d,e),b.Vd=c,a.push(b));return b};hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.xa))return!1;var e=this.xa[a];b=id(e,b,c,d);return-1<b?(gd(e[b]),A.splice.call(e,b,1),0==e.length&&(delete this.xa[a],this.Nd--),!0):!1};
function jd(a,b){var c=b.type;if(!(c in a.xa))return!1;var d=qb(a.xa[c],b);d&&(gd(b),0==a.xa[c].length&&(delete a.xa[c],a.Nd--));return d}hd.prototype.Me=function(a){a=a&&a.toString();var b=0,c;for(c in this.xa)if(!a||c==a){for(var d=this.xa[c],e=0;e<d.length;e++)++b,gd(d[e]);delete this.xa[c];this.Nd--}return b};hd.prototype.od=function(a,b,c,d){a=this.xa[a.toString()];var e=-1;a&&(e=id(a,b,c,d));return-1<e?a[e]:null};
function id(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.Sc&&g.cc==b&&g.Wd==!!c&&g.me==d)return e}return-1};var kd=!B||B&&9<=Eb,ld=!B||B&&9<=Eb,md=B&&!D("9");!C||D("528");vb&&D("1.9b")||B&&D("8")||ub&&D("9.5")||C&&D("528");vb&&!D("8")||B&&D("9");var nd="ontouchstart"in n||!!(n.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!n.navigator||!n.navigator.msMaxTouchPoints);function od(){0!=pd&&(qd[ha(this)]=this);this.gd=this.gd;this.Ce=this.Ce}var pd=0,qd={};od.prototype.gd=!1;od.prototype.k=function(){if(!this.gd&&(this.gd=!0,this.X(),0!=pd)){var a=ha(this);delete qd[a]}};od.prototype.X=function(){if(this.Ce)for(;this.Ce.length;)this.Ce.shift()()};function rd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.hc=!1;this.Nh=!0}rd.prototype.X=function(){};rd.prototype.k=function(){};rd.prototype.stopPropagation=function(){this.hc=!0};rd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Nh=!1};function sd(a){sd[" "](a);return a}sd[" "]=ba;function td(a,b){rd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.Wf=!1;this.ta=null;a&&this.I(a,b)}w(td,rd);var ud=[1,4,2];f=td.prototype;
f.I=function(a,b){this.ta=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(vb){var e;a:{try{sd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.lh,set:this.Tj},offsetY:{configurable:!0,enumerable:!0,get:this.mh,set:this.Uj}}):(this.offsetX=this.lh(),
this.offsetY=this.mh());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.Wf=wb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function vd(a){return kd?0==a.ta.button:"click"==a.type?!0:!!(a.ta.button&ud[0])}f.stopPropagation=function(){td.j.stopPropagation.call(this);this.ta.stopPropagation?this.ta.stopPropagation():this.ta.cancelBubble=!0};f.preventDefault=function(){td.j.preventDefault.call(this);var a=this.ta;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,md)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.X=function(){};
f.lh=function(){return C||void 0!==this.ta.offsetX?this.ta.offsetX:this.ta.layerX};f.Tj=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.mh=function(){return C||void 0!==this.ta.offsetY?this.ta.offsetY:this.ta.layerY};f.Uj=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var wd="closure_lm_"+(1E6*Math.random()|0),xd={},yd=0;function zd(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)zd(a,b[g],c,d,e);return null}c=Ad(c);if(a&&a[dd])a=a.w(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Bd(a);h||(a[wd]=h=new hd(a));c=h.add(b,c,!1,d,e);c.Ie||(d=Cd(),c.Ie=d,d.src=a,d.cc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Dd(b.toString()),d),yd++);a=c}return a}
function Cd(){var a=Ed,b=ld?function(c){return a.call(b.src,b.cc,c)}:function(c){c=a.call(b.src,b.cc,c);if(!c)return c};return b}function Fd(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)Fd(a,b[g],c,d,e);else c=Ad(c),a&&a[dd]?a.Va(b,c,d,e):a&&(a=Bd(a))&&(b=a.od(b,c,!!d,e))&&Gd(b)}
function Gd(a){if(r(a)||!a||a.Sc)return!1;var b=a.src;if(b&&b[dd])return jd(b.Hb,a);var c=a.type,d=a.Ie;b.removeEventListener?b.removeEventListener(c,d,a.Wd):b.detachEvent&&b.detachEvent(Dd(c),d);yd--;(c=Bd(b))?(jd(c,a),0==c.Nd&&(c.src=null,b[wd]=null)):gd(a);return!0}function Dd(a){return a in xd?xd[a]:xd[a]="on"+a}function Hd(a,b,c,d){var e=!0;if(a=Bd(a))if(b=a.xa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.Wd==c&&!g.Sc&&(g=Id(g,d),e=e&&!1!==g)}return e}
function Id(a,b){var c=a.cc,d=a.me||a.src;a.Vd&&Gd(a);return c.call(d,b)}
function Ed(a,b){if(a.Sc)return!0;if(!ld){var c=b||aa("window.event"),d=new td(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.hc&&0<=k;k--){d.currentTarget=c[k];var l=Hd(c[k],g,!0,d),e=e&&l}for(k=0;!d.hc&&k<c.length;k++)d.currentTarget=c[k],l=Hd(c[k],g,!1,d),e=e&&l}return e}return Id(a,new td(b,
this))}function Bd(a){a=a[wd];return a instanceof hd?a:null}var Jd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ad(a){if(u(a))return a;a[Jd]||(a[Jd]=function(b){return a.handleEvent(b)});return a[Jd]};function Kd(a){od.call(this);this.qh=a;this.we={}}w(Kd,od);var Ld=[];f=Kd.prototype;f.w=function(a,b,c,d){ea(b)||(b&&(Ld[0]=b.toString()),b=Ld);for(var e=0;e<b.length;e++){var g=zd(a,b[e],c||this.handleEvent,d||!1,this.qh||this);if(!g)break;this.we[g.key]=g}return this};
f.Va=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.Va(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.qh||this,c=Ad(c),d=!!d,b=a&&a[dd]?a.od(b,c,d,e):a?(a=Bd(a))?a.od(b,c,d,e):null:null,b&&(Gd(b),delete this.we[b.key]);return this};f.Me=function(){bb(this.we,Gd);this.we={}};f.X=function(){Kd.j.X.call(this);this.Me()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Md(){}ca(Md);Md.prototype.zj=0;function Nd(){od.call(this);this.Hb=new hd(this);this.oi=this;this.Vf=null}w(Nd,od);Nd.prototype[dd]=!0;f=Nd.prototype;f.ie=function(){return this.Vf};f.hg=function(a){this.Vf=a};f.addEventListener=function(a,b,c,d){zd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Fd(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.ie();if(c)for(b=[];c;c=c.ie())b.push(c);var c=this.oi,d=a.type||a;if(p(a))a=new rd(a,c);else if(a instanceof rd)a.target=a.target||c;else{var e=a;a=new rd(d,c);db(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.hc&&0<=h;h--)g=a.currentTarget=b[h],e=Od(g,d,!0,a)&&e;a.hc||(g=a.currentTarget=c,e=Od(g,d,!0,a)&&e,a.hc||(e=Od(g,d,!1,a)&&e));if(b)for(h=0;!a.hc&&h<b.length;h++)g=a.currentTarget=b[h],e=Od(g,d,!1,a)&&e;return e};
f.X=function(){Nd.j.X.call(this);this.Hb&&this.Hb.Me(void 0);this.Vf=null};f.w=function(a,b,c,d){return this.Hb.add(String(a),b,!1,c,d)};f.Va=function(a,b,c,d){return this.Hb.remove(String(a),b,c,d)};function Od(a,b,c,d){b=a.Hb.xa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.Sc&&h.Wd==c){var k=h.cc,l=h.me||h.src;h.Vd&&jd(a.Hb,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Nh}f.od=function(a,b,c,d){return this.Hb.od(String(a),b,c,d)};function Pd(a){Nd.call(this);this.$d=a||xc();this.Qe=Qd;this.oe=null;this.v=!1;this.s=null;this.Jb=void 0;this.Db=this.R=this.ra=this.Ae=null;this.fk=!1}w(Pd,Nd);Pd.prototype.nj=Md.Ib();var Qd=null;
function Rd(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function Sd(a){return a.oe||(a.oe=":"+(a.nj.zj++).toString(36))}f=Pd.prototype;f.i=function(){return this.s};function Td(a){a.Jb||(a.Jb=new Kd(a));return a.Jb}
f.ya=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.ra&&this.oe&&Ud(this.ra,this.oe)&&this.ra!=a)throw Error("Unable to set parent component");this.ra=a;Pd.j.hg.call(this,a)};f.getParent=function(){return this.ra};f.hg=function(a){if(this.ra&&this.ra!=a)throw Error("Method not supported");Pd.j.hg.call(this,a)};f.bb=function(){return this.$d};f.H=function(){this.s=this.$d.createElement("div")};f.C=function(a){this.Tc(a)};
f.Tc=function(a,b){if(this.v)throw Error("Component already rendered");this.s||this.H();a?a.insertBefore(this.s,b||null):this.$d.ub.body.appendChild(this.s);this.ra&&!this.ra.v||this.ia()};f.ia=function(){this.v=!0;Vd(this,function(a){!a.v&&a.i()&&a.ia()})};f.Ta=function(){Vd(this,function(a){a.v&&a.Ta()});this.Jb&&this.Jb.Me();this.v=!1};
f.X=function(){this.v&&this.Ta();this.Jb&&(this.Jb.k(),delete this.Jb);Vd(this,function(a){a.k()});!this.fk&&this.s&&H(this.s);this.ra=this.Ae=this.s=this.Db=this.R=null;Pd.j.X.call(this)};f.Rd=function(a,b){this.vc(a,Wd(this),b)};
f.vc=function(a,b,c){if(a.v&&(c||!this.v))throw Error("Component already rendered");if(0>b||b>Wd(this))throw Error("Child component index out of bounds");this.Db&&this.R||(this.Db={},this.R=[]);if(a.getParent()==this){var d=Sd(a);this.Db[d]=a;qb(this.R,a)}else{var d=this.Db,e=Sd(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.ya(this);sb(this.R,b,0,a);a.v&&this.v&&a.getParent()==this?(c=this.ab(),b=c.childNodes[b]||null,b!=a.i()&&c.insertBefore(a.i(),b)):c?(this.s||
this.H(),b=N(this,b+1),a.Tc(this.ab(),b?b.s:null)):this.v&&!a.v&&a.s&&a.s.parentNode&&1==a.s.parentNode.nodeType&&a.ia()};f.ab=function(){return this.s};function Xd(a){null==a.Qe&&(a.Qe="rtl"==Qc(a.v?a.s:a.$d.ub.body,"direction"));return a.Qe}f.Hd=function(a){if(this.v)throw Error("Component already rendered");this.Qe=a};function Yd(a){return!!a.R&&0!=a.R.length}function Wd(a){return a.R?a.R.length:0}function Ud(a,b){var c;a.Db&&b?(c=a.Db,c=(b in c?c[b]:void 0)||null):c=null;return c}
function N(a,b){return a.R?a.R[b]||null:null}function Vd(a,b,c){a.R&&lb(a.R,b,c)}function Zd(a,b){return a.R&&b?kb(a.R,b):-1}f.removeChild=function(a,b){if(a){var c=p(a)?a:Sd(a);a=Ud(this,c);if(c&&a){var d=this.Db;c in d&&delete d[c];qb(this.R,a);b&&(a.Ta(),a.s&&H(a.s));a.ya(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Mh=function(a){for(var b=[];Yd(this);)b.push(this.removeChild(N(this,0),a));return b};function $d(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ae(a,b){return a.classList?a.classList.contains(b):pb($d(a),b)}function be(a,b){a.classList?a.classList.add(b):ae(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ce(a,b){if(a.classList)lb(b,function(b){be(a,b)});else{var c={};lb($d(a),function(a){c[a]=!0});lb(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function de(a,b){a.classList?a.classList.remove(b):ae(a,b)&&(a.className=mb($d(a),function(a){return a!=b}).join(" "))}function ee(a,b){a.classList?lb(b,function(b){de(a,b)}):a.className=mb($d(a),function(a){return!pb(b,a)}).join(" ")};function fe(a,b){if(!a)throw Error("Invalid class name "+a);if(!u(b))throw Error("Invalid decorator function "+b);}var ge={};var he;function ie(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function O(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(he||(he={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=he,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function je(){}var ke;ca(je);var le={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=je.prototype;f.be=function(){};f.H=function(a){return a.bb().H("div",this.ee(a).join(" "),a.tb)};f.ab=function(a){return a};f.jd=function(a,b,c){if(a=a.i?a.i():a){var d=[b];B&&!D("7")&&(d=me($d(a),b),d.push(b));(c?ce:ee)(a,d)}};f.wd=function(a){Xd(a)&&this.Hd(a.i(),!0);a.isEnabled()&&this.nc(a,a.u())};
function ne(a,b,c){if(a=c||a.be())c=b.getAttribute("role")||null,a!=c&&ie(b,a)}function oe(a,b){a.u()||O(b,"hidden",!a.u());a.isEnabled()||pe(b,1,!a.isEnabled());a.U&8&&pe(b,8,a.te());a.U&16&&pe(b,16,!!(a.$&16));a.U&64&&pe(b,64,a.Mc())}f.eg=function(a,b){$c(a,!b,!B&&!ub)};f.Hd=function(a,b){this.jd(a,this.pa()+"-rtl",b)};f.Lb=function(a){var b;return a.U&32&&(b=a.da())?Lc(b)&&Mc(b):!1};
f.nc=function(a,b){var c;if(a.U&32&&(c=a.da())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.sd(null)}(Lc(c)&&Mc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.G=function(a,b){Yc(a,b);a&&O(a,"hidden",!b)};f.hb=function(a,b,c){var d=a.i();if(d){var e=this.de(b);e&&this.jd(a,e,c);pe(d,b,c)}};
function pe(a,b,c){ke||(ke={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=ke[b];var d=a.getAttribute("role")||null;d&&(d=le[d]||b,b="checked"==b||"selected"==b?d:b);b&&O(a,b,c)}f.da=function(a){return a.i()};f.pa=function(){return"goog-control"};f.ee=function(a){var b=this.pa(),c=[b],d=this.pa();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.de(e));b&=~e}c.push.apply(c,d);(a=a.kb)&&c.push.apply(c,a);B&&!D("7")&&c.push.apply(c,me(c));return c};
function me(a,b){var c=[];b&&(a=a.concat([b]));lb([],function(d){!ob(d,na(pb,a))||b&&!pb(d,b)||c.push(d.join("_"))});return c}f.de=function(a){if(!this.Kg){var b=this.pa();b.replace(/\xa0|\s/g," ");this.Kg={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Kg[a]};function qe(a,b,c,d,e){if(!(B||C&&D("525")))return!0;if(wb&&e)return re(a);if(e&&!d)return!1;r(b)&&(b=se(b));if(!c&&(17==b||18==b||wb&&91==b))return!1;if(C&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(B&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!C}return re(a)}
function re(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||C&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function se(a){if(vb)a=te(a);else if(wb&&C)a:switch(a){case 93:a=91;break a}return a}
function te(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function ue(a,b){Nd.call(this);a&&ve(this,a,b)}w(ue,Nd);f=ue.prototype;f.s=null;f.ue=null;f.Lf=null;f.ve=null;f.Ia=-1;f.Nb=-1;f.af=!1;
var we={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},xe={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},ye=B||C&&D("525"),ze=wb&&vb;f=ue.prototype;
f.fj=function(a){C&&(17==this.Ia&&!a.ctrlKey||18==this.Ia&&!a.altKey||wb&&91==this.Ia&&!a.metaKey)&&(this.Nb=this.Ia=-1);-1==this.Ia&&(a.ctrlKey&&17!=a.keyCode?this.Ia=17:a.altKey&&18!=a.keyCode?this.Ia=18:a.metaKey&&91!=a.keyCode&&(this.Ia=91));ye&&!qe(a.keyCode,this.Ia,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Nb=se(a.keyCode),ze&&(this.af=a.altKey))};f.gj=function(a){this.Nb=this.Ia=-1;this.af=a.altKey};
f.handleEvent=function(a){var b=a.ta,c,d,e=b.altKey;B&&"keypress"==a.type?(c=this.Nb,d=13!=c&&27!=c?b.keyCode:0):C&&"keypress"==a.type?(c=this.Nb,d=0<=b.charCode&&63232>b.charCode&&re(c)?b.charCode:0):ub?(c=this.Nb,d=re(c)?b.keyCode:0):(c=b.keyCode||this.Nb,d=b.charCode||0,ze&&(e=this.af),wb&&63==d&&224==c&&(c=191));var g=c=se(c),h=b.keyIdentifier;c?63232<=c&&c in we?g=we[c]:25==c&&a.shiftKey&&(g=9):h&&h in xe&&(g=xe[h]);a=g==this.Ia;this.Ia=g;b=new Ae(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.i=function(){return this.s};function ve(a,b,c){a.ve&&a.detach();a.s=b;a.ue=zd(a.s,"keypress",a,c);a.Lf=zd(a.s,"keydown",a.fj,c,a);a.ve=zd(a.s,"keyup",a.gj,c,a)}f.detach=function(){this.ue&&(Gd(this.ue),Gd(this.Lf),Gd(this.ve),this.ve=this.Lf=this.ue=null);this.s=null;this.Nb=this.Ia=-1};f.X=function(){ue.j.X.call(this);this.detach()};function Ae(a,b,c,d){td.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}w(Ae,td);function P(a,b,c){Pd.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ha(b);if(d=ge[d])break;b=b.j?b.j.constructor:null}b=d?u(d.Ib)?d.Ib():new d:null}this.F=b;this.Sj(void 0!==a?a:null)}w(P,Pd);f=P.prototype;f.tb=null;f.$=0;f.U=39;f.vi=255;f.Jd=0;f.Q=!0;f.kb=null;f.ud=!0;f.$e=!1;f.Jj=null;f.da=function(){return this.F.da(this)};f.he=function(){return this.qa||(this.qa=new ue)};
f.jd=function(a,b){b?a&&(this.kb?pb(this.kb,a)||this.kb.push(a):this.kb=[a],this.F.jd(this,a,!0)):a&&this.kb&&qb(this.kb,a)&&(0==this.kb.length&&(this.kb=null),this.F.jd(this,a,!1))};f.H=function(){var a=this.F.H(this);this.s=a;ne(this.F,a,this.je());this.$e||this.F.eg(a,!1);this.u()||this.F.G(a,!1)};f.je=function(){return this.Jj};f.ab=function(){return this.F.ab(this.i())};
f.ia=function(){P.j.ia.call(this);oe(this,this.s);this.F.wd(this);if(this.U&-2&&(this.ud&&Be(this,!0),this.U&32)){var a=this.da();if(a){var b=this.he();ve(b,a);Td(this).w(b,"key",this.cb).w(a,"focus",this.le).w(a,"blur",this.sd)}}};
function Be(a,b){var c=Td(a),d=a.i();b?(c.w(d,"mouseover",a.Ff).w(d,"mousedown",a.Ic).w(d,"mouseup",a.vd).w(d,"mouseout",a.Ef),a.td!=ba&&c.w(d,"contextmenu",a.td),B&&c.w(d,"dblclick",a.oh)):(c.Va(d,"mouseover",a.Ff).Va(d,"mousedown",a.Ic).Va(d,"mouseup",a.vd).Va(d,"mouseout",a.Ef),a.td!=ba&&c.Va(d,"contextmenu",a.td),B&&c.Va(d,"dblclick",a.oh))}f.Ta=function(){P.j.Ta.call(this);this.qa&&this.qa.detach();this.u()&&this.isEnabled()&&this.F.nc(this,!1)};
f.X=function(){P.j.X.call(this);this.qa&&(this.qa.k(),delete this.qa);delete this.F;this.kb=this.tb=null};f.Sj=function(a){this.tb=a};f.yf=function(){var a=this.tb;if(!a)return"";if(!p(a))if(ea(a))a=nb(a,Nc).join("");else{if(wc&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Oc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");wc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return Ja(a)};
f.Hd=function(a){P.j.Hd.call(this,a);var b=this.i();b&&this.F.Hd(b,a)};f.eg=function(a){this.$e=a;var b=this.i();b&&this.F.eg(b,a)};f.u=function(){return this.Q};f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.i();c&&this.F.G(c,a);this.isEnabled()&&this.F.nc(this,a);this.Q=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};
f.Gd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Ce(this,1,!a)||(a||(this.setActive(!1),this.gb(!1)),this.u()&&this.F.nc(this,a),this.hb(1,!a,!0))};f.gb=function(a){Ce(this,2,a)&&this.hb(2,a)};f.setActive=function(a){Ce(this,4,a)&&this.hb(4,a)};f.te=function(){return!!(this.$&8)};f.Vj=function(){Ce(this,8,!0)&&this.hb(8,!0)};function De(a,b){Ce(a,16,b)&&a.hb(16,b)}f.Mc=function(){return!!(this.$&64)};function Ee(a,b){Ce(a,64,b)&&a.hb(64,b)}
f.hb=function(a,b,c){c||1!=a?this.U&a&&b!=!!(this.$&a)&&(this.F.hb(this,a,b),this.$=b?this.$|a:this.$&~a):this.Gd(!b)};f.Ka=function(a,b){if(this.v&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.hb(a,!1);this.U=b?this.U|a:this.U&~a};function Fe(a,b){return!!(a.vi&b)&&!!(a.U&b)}function Ce(a,b,c){return!!(a.U&b)&&!!(a.$&b)!=c&&(!(a.Jd&b)||a.dispatchEvent(Rd(b,c)))&&!a.gd}f.Ff=function(a){!Ge(a,this.i())&&this.dispatchEvent("enter")&&this.isEnabled()&&Fe(this,2)&&this.gb(!0)};
f.Ef=function(a){!Ge(a,this.i())&&this.dispatchEvent("leave")&&(Fe(this,4)&&this.setActive(!1),Fe(this,2)&&this.gb(!1))};f.td=ba;function Ge(a,b){return!!a.relatedTarget&&Ic(b,a.relatedTarget)}f.Ic=function(a){this.isEnabled()&&(Fe(this,2)&&this.gb(!0),!vd(a)||C&&wb&&a.ctrlKey||(Fe(this,4)&&this.setActive(!0),this.F.Lb(this)&&this.da().focus()));this.$e||!vd(a)||C&&wb&&a.ctrlKey||a.preventDefault()};f.vd=function(a){this.isEnabled()&&(Fe(this,2)&&this.gb(!0),this.$&4&&this.Cd(a)&&Fe(this,4)&&this.setActive(!1))};
f.oh=function(a){this.isEnabled()&&this.Cd(a)};f.Cd=function(a){Fe(this,16)&&De(this,!(this.$&16));Fe(this,8)&&this.Vj();Fe(this,64)&&Ee(this,!this.Mc());var b=new rd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.Wf=a.Wf);return this.dispatchEvent(b)};f.le=function(){Fe(this,32)&&Ce(this,32,!0)&&this.hb(32,!0)};f.sd=function(){Fe(this,4)&&this.setActive(!1);Fe(this,32)&&Ce(this,32,!1)&&this.hb(32,!1)};
f.cb=function(a){return this.u()&&this.isEnabled()&&this.bc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.bc=function(a){return 13==a.keyCode&&this.Cd(a)};if(!u(P))throw Error("Invalid component class "+P);if(!u(je))throw Error("Invalid renderer class "+je);var He=ha(P);ge[He]=je;fe("goog-control",function(){return new P(null)});function Ie(){this.Lg=[]}w(Ie,je);ca(Ie);function Je(a,b){var c=a.Lg[b];if(!c){switch(b){case 0:c=a.pa()+"-highlight";break;case 1:c=a.pa()+"-checkbox";break;case 2:c=a.pa()+"-content"}a.Lg[b]=c}return c}f=Ie.prototype;f.be=function(){return"menuitem"};f.H=function(a){var b=a.bb().H("div",this.ee(a).join(" "),Ke(this,a.tb,a.bb()));Le(this,a,b,!!(a.U&8)||!!(a.U&16));return b};f.ab=function(a){return a&&a.firstChild};function Ke(a,b,c){a=Je(a,2);return c.H("div",a,b)}
f.Qh=function(a,b,c){a&&b&&Le(this,a,b,c)};f.fg=function(a,b,c){a&&b&&Le(this,a,b,c)};function Le(a,b,c,d){ne(a,c,b.je());oe(b,c);var e;if(e=a.ab(c)){e=e.firstChild;var g=Je(a,1);e=!!e&&ga(e)&&1==e.nodeType&&ae(e,g)}else e=!1;d!=e&&(d?be(c,"goog-option"):de(c,"goog-option"),c=a.ab(c),d?(a=Je(a,1),c.insertBefore(b.bb().H("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.de=function(a){switch(a){case 2:return Je(this,0);case 16:case 8:return"goog-option-selected";default:return Ie.j.de.call(this,a)}};f.pa=function(){return"goog-menuitem"};function Me(a,b,c,d){P.call(this,a,d||Ie.Ib(),c);this.Ma(b)}w(Me,P);f=Me.prototype;f.Hc=function(){var a=this.Ae;return null!=a?a:this.yf()};f.Ma=function(a){this.Ae=a};f.Ka=function(a,b){Me.j.Ka.call(this,a,b);switch(a){case 8:this.$&16&&!b&&De(this,!1);var c=this.i();c&&this.F.Qh(this,c,b);break;case 16:(c=this.i())&&this.F.fg(this,c,b)}};f.Qh=function(a){this.Ka(8,a)};f.fg=function(a){this.Ka(16,a)};
f.yf=function(){var a=this.tb;return ea(a)?(a=nb(a,function(a){return ga(a)&&1==a.nodeType&&(ae(a,"goog-menuitem-accel")||ae(a,"goog-menuitem-mnemonic-separator"))?"":Nc(a)}).join(""),Ja(a)):Me.j.yf.call(this)};f.vd=function(a){var b=this.getParent();if(b){var c=b.Gh;b.Gh=null;if(b=c&&r(a.clientX))b=new L(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}Me.j.vd.call(this,a)};f.bc=function(a){return a.keyCode==this.Ah&&this.Cd(a)?!0:Me.j.bc.call(this,a)};f.Yi=function(){return this.Ah};
fe("goog-menuitem",function(){return new Me(null)});Me.prototype.je=function(){return this.U&16?"menuitemcheckbox":this.U&8?"menuitemradio":Me.j.je.call(this)};Me.prototype.getParent=function(){return P.prototype.getParent.call(this)};Me.prototype.ie=function(){return P.prototype.ie.call(this)};function Ne(a){this.Dg=a}ca(Ne);f=Ne.prototype;f.be=function(){return this.Dg};function Oe(a,b){a&&(a.tabIndex=b?0:-1)}f.H=function(a){return a.bb().H("div",this.ee(a).join(" "))};f.ab=function(a){return a};f.wd=function(a){a=a.i();$c(a,!0,vb);B&&(a.hideFocus=!0);var b=this.be();b&&ie(a,b)};f.da=function(a){return a.i()};f.pa=function(){return"goog-container"};f.ee=function(a){var b=this.pa(),c=[b,a.Rc==Pe?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function Qe(){}w(Qe,je);ca(Qe);Qe.prototype.H=function(a){return a.bb().H("div",this.pa())};Qe.prototype.pa=function(){return"goog-menuseparator"};function Re(a,b){P.call(this,null,a||Qe.Ib(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.$=1}w(Re,P);Re.prototype.ia=function(){Re.j.ia.call(this);var a=this.i();ie(a,"separator")};fe("goog-menuseparator",function(){return new Re});function Se(a){this.Dg=a||"menu"}w(Se,Ne);ca(Se);Se.prototype.pa=function(){return"goog-menu"};Se.prototype.wd=function(a){Se.j.wd.call(this,a);a=a.i();O(a,"haspopup","true")};fe("goog-menuseparator",function(){return new Re});function Te(a,b,c){Pd.call(this,c);this.F=b||Ne.Ib();this.Rc=a||Ue}w(Te,Pd);var Pe="horizontal",Ue="vertical";f=Te.prototype;f.Mf=null;f.qa=null;f.F=null;f.Rc=null;f.Q=!0;f.Yb=!0;f.wf=!0;f.M=-1;f.Z=null;f.Pc=!1;f.qi=!1;f.Hj=!0;f.rb=null;f.da=function(){return this.Mf||this.F.da(this)};f.he=function(){return this.qa||(this.qa=new ue(this.da()))};f.H=function(){this.s=this.F.H(this)};f.ab=function(){return this.F.ab(this.i())};
f.ia=function(){Te.j.ia.call(this);Vd(this,function(a){a.v&&Ve(this,a)},this);var a=this.i();this.F.wd(this);this.G(this.Q,!0);Td(this).w(this,"enter",this.Cf).w(this,"highlight",this.ej).w(this,"unhighlight",this.jj).w(this,"open",this.hj).w(this,"close",this.bj).w(a,"mousedown",this.Ic).w(zc(a),"mouseup",this.cj).w(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.aj);this.Lb()&&We(this,!0)};
function We(a,b){var c=Td(a),d=a.da();b?c.w(d,"focus",a.le).w(d,"blur",a.sd).w(a.he(),"key",a.cb):c.Va(d,"focus",a.le).Va(d,"blur",a.sd).Va(a.he(),"key",a.cb)}f.Ta=function(){this.Wc(-1);this.Z&&Ee(this.Z,!1);this.Pc=!1;Te.j.Ta.call(this)};f.X=function(){Te.j.X.call(this);this.qa&&(this.qa.k(),this.qa=null);this.F=this.Z=this.rb=this.Mf=null};f.Cf=function(){return!0};
f.ej=function(a){var b=Zd(this,a.target);if(-1<b&&b!=this.M){var c=N(this,this.M);c&&c.gb(!1);this.M=b;c=N(this,this.M);this.Pc&&c.setActive(!0);this.Hj&&this.Z&&c!=this.Z&&(c.U&64?Ee(c,!0):Ee(this.Z,!1))}b=this.i();null!=a.target.i()&&O(b,"activedescendant",a.target.i().id)};f.jj=function(a){a.target==N(this,this.M)&&(this.M=-1);this.i().removeAttribute("aria-activedescendant")};f.hj=function(a){(a=a.target)&&a!=this.Z&&a.getParent()==this&&(this.Z&&Ee(this.Z,!1),this.Z=a)};
f.bj=function(a){a.target==this.Z&&(this.Z=null)};f.Ic=function(a){this.Yb&&(this.Pc=!0);var b=this.da();b&&Lc(b)&&Mc(b)?b.focus():a.preventDefault()};f.cj=function(){this.Pc=!1};f.aj=function(a){var b=Xe(this,a.target);if(b)switch(a.type){case "mousedown":b.Ic(a);break;case "mouseup":b.vd(a);break;case "mouseover":b.Ff(a);break;case "mouseout":b.Ef(a);break;case "contextmenu":b.td(a)}};
function Xe(a,b){if(a.rb)for(var c=a.i();b&&b!==c;){var d=b.id;if(d in a.rb)return a.rb[d];b=b.parentNode}return null}f.le=function(){};f.sd=function(){this.Wc(-1);this.Pc=!1;this.Z&&Ee(this.Z,!1)};f.cb=function(a){return this.isEnabled()&&this.u()&&(0!=Wd(this)||this.Mf)&&this.bc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.bc=function(a){var b=N(this,this.M);if(b&&"function"==typeof b.cb&&b.cb(a)||this.Z&&this.Z!=b&&"function"==typeof this.Z.cb&&this.Z.cb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Lb())this.da().blur();else return!1;break;case 36:Ye(this);break;case 35:Ze(this);break;case 38:if(this.Rc==Ue)$e(this);else return!1;break;case 37:if(this.Rc==Pe)Xd(this)?af(this):$e(this);else return!1;break;case 40:if(this.Rc==Ue)af(this);else return!1;break;case 39:if(this.Rc==
Pe)Xd(this)?$e(this):af(this);else return!1;break;default:return!1}return!0};function Ve(a,b){var c=b.i(),c=c.id||(c.id=Sd(b));a.rb||(a.rb={});a.rb[c]=b}f.Rd=function(a,b){Te.j.Rd.call(this,a,b)};f.vc=function(a,b,c){a.Jd|=2;a.Jd|=64;!this.Lb()&&this.qi||a.Ka(32,!1);a.v&&0!=a.ud&&Be(a,!1);a.ud=!1;var d=a.getParent()==this?Zd(this,a):-1;Te.j.vc.call(this,a,b,c);a.v&&this.v&&Ve(this,a);a=d;-1==a&&(a=Wd(this));a==this.M?this.M=Math.min(Wd(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=p(a)?Ud(this,a):a){var c=Zd(this,a);-1!=c&&(c==this.M?(a.gb(!1),this.M=-1):c<this.M&&this.M--);var d=a.i();d&&d.id&&this.rb&&(c=this.rb,d=d.id,d in c&&delete c[d])}c=a=Te.j.removeChild.call(this,a,b);c.v&&1!=c.ud&&Be(c,!0);c.ud=!0;return a};f.u=function(){return this.Q};
f.G=function(a,b){if(b||this.Q!=a&&this.dispatchEvent(a?"show":"hide")){this.Q=a;var c=this.i();c&&(Yc(c,a),this.Lb()&&Oe(this.da(),this.Yb&&this.Q),b||this.dispatchEvent(this.Q?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Yb};f.Gd=function(a){this.Yb!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Yb=!0,Vd(this,function(a){a.bi?delete a.bi:a.Gd(!0)})):(Vd(this,function(a){a.isEnabled()?a.Gd(!1):a.bi=!0}),this.Pc=this.Yb=!1),this.Lb()&&Oe(this.da(),a&&this.Q))};
f.Lb=function(){return this.wf};f.nc=function(a){a!=this.wf&&this.v&&We(this,a);this.wf=a;this.Yb&&this.Q&&Oe(this.da(),a)};f.Wc=function(a){(a=N(this,a))?a.gb(!0):-1<this.M&&N(this,this.M).gb(!1)};f.gb=function(a){this.Wc(Zd(this,a))};function Ye(a){bf(a,function(a,c){return(a+1)%c},Wd(a)-1)}function Ze(a){bf(a,function(a,c){a--;return 0>a?c-1:a},0)}function af(a){bf(a,function(a,c){return(a+1)%c},a.M)}function $e(a){bf(a,function(a,c){a--;return 0>a?c-1:a},a.M)}
function bf(a,b,c){c=0>c?Zd(a,a.Z):c;var d=Wd(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=N(a,c);if(g&&a.Jg(g)){a.Wc(c);break}e++;c=b.call(a,c,d)}}f.Jg=function(a){return a.u()&&a.isEnabled()&&!!(a.U&2)};function cf(){}w(cf,je);ca(cf);cf.prototype.pa=function(){return"goog-menuheader"};function df(a,b,c){P.call(this,a,c||cf.Ib(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.$=1}w(df,P);fe("goog-menuheader",function(){return new df(null)});function ef(a,b){Te.call(this,Ue,b||Se.Ib(),a);this.nc(!1)}w(ef,Te);f=ef.prototype;f.Ze=!0;f.ri=!1;f.pa=function(){return this.F.pa()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.k()};function ff(a){a.Ze=!0;a.nc(!0)}f.G=function(a,b,c){(b=ef.j.G.call(this,a,b))&&a&&this.v&&this.Ze&&this.da().focus();this.Gh=a&&c&&r(c.clientX)?new L(c.clientX,c.clientY):null;return b};f.Cf=function(a){this.Ze&&this.da().focus();return ef.j.Cf.call(this,a)};
f.Jg=function(a){return(this.ri||a.isEnabled())&&a.u()&&!!(a.U&2)};f.bc=function(a){var b=ef.j.bc.call(this,a);b||Vd(this,function(c){!b&&c.Yi&&c.Ah==a.keyCode&&(this.isEnabled()&&this.gb(c),b=c.cb(a))},this);return b};
f.Wc=function(a){ef.j.Wc.call(this,a);if(a=N(this,a)){var b=a.i();a=this.i();var c=Uc(b),d=Uc(a),e=cd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new L(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function gf(a,b){this.Oc=a;this.gf=b;hf(this);var c=jf(this)[0];this.Ga=c[1];this.Sd=E("tspan",{},null);this.Sd.appendChild(document.createTextNode(x?kf+" ":" "+kf));gf.j.constructor.call(this,c[0])}w(gf,Gb);var kf=xb?"\u25bc":"\u25be";f=gf.prototype;f.clone=function(){return new gf(this.Oc,this.gf)};f.ei="default";
function Nb(a){lf(a);for(var b=new ef,c=jf(a),d=0;d<c.length;d++){var e=c[d][1],g=new Me(c[d][0]);g.Ma(e);g.fg(!0);b.Rd(g,!0);De(g,e==a.Ga)}zd(b,"action",function(b){if(b=b.target){b=b.Hc();if(a.h&&a.gf){var c=a.gf(b);void 0!==c&&(b=c)}null!==b&&a.Ma(b)}mf==a&&nf()});Td(b).w(b.i(),"touchstart",function(a){Xe(this,a.target).Ic(a)});Td(b).w(b.i(),"touchend",function(a){Xe(this,a.target).Cd(a)});c=Dc();d=Rc();e=of(a.ed);g=a.ed.getBBox();b.C(pf);var h=b.i();Ib(h,"blocklyDropdownMenu");var k=Vc(h);e.y=
e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;x?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));qf(e.x,e.y,c,d);ff(b);h.focus()}
function hf(a){a.Xf=null;a.rg=null;var b=a.Oc;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=rf(c),e=sf(c,d),g=tf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.Xf=c[0].substring(0,e-1));g&&(a.rg=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.Oc=c}}}function jf(a){return u(a.Oc)?a.Oc.call(a):a.Oc}f.Hc=function(){return this.Ga};f.Ma=function(a){this.Ga=a;for(var b=jf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.La(b[c][0]);return}this.La(a)};
f.La=function(a){this.h&&(this.Sd.style.fill=uf(vf(this.h.jf)));null!==a&&a!==this.za&&(this.za=a,Hb(this),this.fa&&(x?this.fa.insertBefore(this.Sd,this.fa.firstChild):this.fa.appendChild(this.Sd)),this.h&&this.h.t&&(this.h.C(),this.h.Ca(),this.h.o.lb()))};f.k=function(){mf==this&&nf();gf.j.k.call(this)};/*

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
function wf(a,b,c,d){var e=J,g;if(e.mb)g=e.mb();else if(e.vb)g=e.vb();else throw"Not Block or Workspace: "+e;for(var e=Object.create(null),h=0;h<g.length;h++){var k=g[h].Zi;if(k)for(var k=k.call(g[h]),l=0;l<k.length;l++){var m=k[l];m&&(e[m.toLowerCase()]=m)}}g=[];for(var q in e)g.push(e[q]);g.sort(La);g.unshift(null);q=void 0;for(e=0;e<g.length;e++)g[e]!==q&&((h=K.variables_get?Rb(d,"variables_get"):null)&&h.eb(),(k=K.variables_set?Rb(d,"variables_set"):null)&&k.eb(),null===g[e]?q=(h||k).Zi()[0]:
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
var xf=/#(.)(.)(.)/;function uf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=yf(b.toString(16));c=yf(c.toString(16));a=yf(a.toString(16));return"#"+b+c+a}var zf=/^#(?:[0-9a-f]{3}){1,2}$/i;function yf(a){return 1==a.length?"0"+a:a}
function vf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function Af(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function Bf(a,b){null!=a&&this.append.apply(this,arguments)}f=Bf.prototype;f.W="";f.set=function(a){this.W=""+a};f.append=function(a,b,c){this.W+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.W+=arguments[d];return this};f.clear=function(){this.W=""};f.toString=function(){return this.W};function Cf(a,b,c){if(u(a))c&&(a=ma(a,c));else if(a&&"function"==typeof a.handleEvent)a=ma(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:n.setTimeout(a,b||0)};function Q(a,b,c){Pd.call(this,c);this.ha=b||Ef;this.Gf=a instanceof ic?a:mc(a,null)}w(Q,Pd);var Ff={};f=Q.prototype;f.dg=!1;f.kd=!1;f.dk=null;f.pi=sc;f.zd=!0;f.Yd=-1;f.X=function(){Q.j.X.call(this);this.rc&&(this.rc.removeNode(this),this.rc=null);this.s=null};
f.re=function(){var a=this.i();if(a){var b=Gf(this);b&&!b.id&&(b.id=Sd(this)+".label");ie(a,"treeitem");O(a,"selected",!1);O(a,"expanded",!1);O(a,"level",this.Ec());b&&O(a,"labelledby",b.id);(a=this.ge())&&ie(a,"presentation");(a=this.fe())&&ie(a,"presentation");if(a=Hf(this))if(ie(a,"group"),a.hasChildNodes())for(a=Wd(this),b=1;b<=a;b++){var c=N(this,b-1).i();O(c,"setsize",a);O(c,"posinset",b)}}};
f.H=function(){var a=this.bb(),b=this.tg(),c=a.ub,a=c.createElement("div");B?(tc(a,rc(qc("br"),b)),a.removeChild(a.firstChild)):tc(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.s=b};f.ia=function(){Q.j.ia.call(this);Ff[Sd(this)]=this;this.re()};f.Ta=function(){Q.j.Ta.call(this);delete Ff[Sd(this)]};
f.vc=function(a,b){var c=N(this,b-1),d=N(this,b);Q.j.vc.call(this,a,b);a.gc=c;a.fb=d;c?c.fb=a:this.jh=a;d?d.gc=a:this.xh=a;var e=this.ua();e&&If(a,e);Jf(a,this.Ec()+1);if(this.i()&&(this.ad(),this.Da())){e=Hf(this);a.i()||a.H();var g=a.i(),h=d&&d.i();e.insertBefore(g,h);this.v&&a.ia();d||(c?c.ad():(Yc(e,!0),this.Bb(this.Da())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.vc(a,b?Zd(this,b):Wd(this));return a};
f.removeChild=function(a){var b=this.ua(),c=b?b.Ja:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),Cf(this.Fj,10,this)):this.select();Q.j.removeChild.call(this,a);this.xh==a&&(this.xh=a.gc);this.jh==a&&(this.jh=a.fb);a.gc&&(a.gc.fb=a.fb);a.fb&&(a.fb.gc=a.gc);c=!a.fb;a.rc=null;a.Yd=-1;if(b&&(b.removeNode(this),this.v)){b=Hf(this);if(a.v){var d=a.i();b.removeChild(d);a.Ta()}c&&(c=N(this,Wd(this)-1))&&c.ad();Yd(this)||(b.style.display="none",this.ad(),this.ge().className=this.ce())}return a};
f.remove=Q.prototype.removeChild;f.Fj=function(){this.select()};f.Ec=function(){var a=this.Yd;0>a&&(a=(a=this.getParent())?a.Ec()+1:0,Jf(this,a));return a};function Jf(a,b){if(b!=a.Yd){a.Yd=b;var c=Kf(a);if(c){var d=Lf(a)+"px";Xd(a)?c.style.paddingRight=d:c.style.paddingLeft=d}Vd(a,function(a){Jf(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.ac=function(){var a=[];Vd(this,function(b){a.push(b)});return a};f.te=function(){return this.dg};
f.select=function(){var a=this.ua();a&&a.oc(this)};function Mf(a,b){if(a.dg!=b){a.dg=b;Nf(a);var c=a.i();c&&(O(c,"selected",b),b&&(c=a.ua().i(),O(c,"activedescendant",Sd(a))))}}f.Da=function(){return this.kd};
f.Bb=function(a){var b=a!=this.kd;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.kd=a;c=this.ua();var d=this.i();if(Yd(this)){if(!a&&c&&this.contains(c.Ja)&&this.select(),d){if(c=Hf(this))if(Yc(c,a),a&&this.v&&!c.hasChildNodes()){var e=[];Vd(this,function(a){e.push(a.tg())});tc(c,rc(e));Vd(this,function(a){a.ia()})}this.ad()}}else(c=Hf(this))&&Yc(c,!1);d&&(this.ge().className=this.ce(),O(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Bb(!this.Da())};
f.expand=function(){this.Bb(!0)};f.collapse=function(){this.Bb(!1)};f.cg=function(){var a=this.getParent();a&&(a.Bb(!0),a.cg())};f.tg=function(){var a=this.ua(),b=!a.Id||a==this.getParent()&&!a.jg?this.ha.Ng:this.ha.Mg,a=this.Da()&&Yd(this),b={"class":b,style:Of(this)},c=[];a&&Vd(this,function(a){c.push(a.tg())});a=qc("div",b,c);return qc("div",{"class":this.ha.Vg,id:Sd(this)},[Pf(this),a])};function Lf(a){return Math.max(0,(a.Ec()-1)*a.ha.Jf)}
function Pf(a){var b={};b["padding-"+(Xd(a)?"right":"left")]=Lf(a)+"px";var b={"class":a.qd(),style:b},c=a.zf(),d=qc("span",{style:{display:"inline-block"},"class":a.ce()}),e=qc("span",{"class":a.ha.Wg,title:a.dk||null},a.Gf);a=rc(e,qc("span",{},a.pi));return qc("div",b,[c,d,a])}f.qd=function(){return this.ha.nf+(this.te()?" "+this.ha.Yg:"")};f.zf=function(){return qc("span",{type:"expand",style:{display:"inline-block"},"class":Qf(this)})};
function Qf(a){var b=a.ua(),c=!b.Id||b==a.getParent()&&!b.jg,d=a.ha,e=new Bf;e.append(d.Xb," ",d.Ei," ");if(Yd(a)){var g=0;b.ig&&a.zd&&(g=a.Da()?2:1);c||(g=a.fb?g+8:g+4);switch(g){case 1:e.append(d.Ii);break;case 2:e.append(d.Hi);break;case 4:e.append(d.Rg);break;case 5:e.append(d.Gi);break;case 6:e.append(d.Fi);break;case 8:e.append(d.Sg);break;case 9:e.append(d.Ki);break;case 10:e.append(d.Ji);break;default:e.append(d.Qg)}}else c?e.append(d.Qg):a.fb?e.append(d.Sg):e.append(d.Rg);return e.toString()}
function Of(a){var b=a.Da()&&Yd(a);return ec({"background-position":Rf(a),display:b?null:"none"})}function Rf(a){return(a.fb?(a.Ec()-1)*a.ha.Jf:"-100")+"px 0"}f.i=function(){var a=Q.j.i.call(this);a||(this.s=a=this.bb().i(Sd(this)));return a};function Kf(a){return(a=a.i())?a.firstChild:null}f.fe=function(){var a=Kf(this);return a?a.firstChild:null};f.ge=function(){var a=Kf(this);return a?a.childNodes[1]:null};function Gf(a){return(a=Kf(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Hf(a){return(a=a.i())?a.lastChild:null}f.La=function(a){this.Gf=a=lc(a);var b=Gf(this);b&&tc(b,a);(a=this.ua())&&Sf(a,this)};f.nb=function(){var a=kc(this.Gf);return-1!=a.indexOf("&")?"document"in n?Ua(a):Wa(a):a};function Nf(a){var b=Kf(a);b&&(b.className=a.qd())}f.ad=function(){var a=this.fe();a&&(a.className=Qf(this));if(a=Hf(this))a.style.backgroundPosition=Rf(this)};f.Sf=function(a){"expand"==a.target.getAttribute("type")&&Yd(this)?this.zd&&this.toggle():(this.select(),Nf(this))};
f.Ch=function(a){"expand"==a.target.getAttribute("type")&&Yd(this)||this.zd&&this.toggle()};function Tf(a){return a.Da()&&Yd(a)?Tf(N(a,Wd(a)-1)):a}function If(a,b){a.rc!=b&&(a.rc=b,Sf(b,a),Vd(a,function(a){If(a,b)}))}
var Ef={Jf:19,Xg:"goog-tree-root goog-tree-item",Ug:"goog-tree-hide-root",Vg:"goog-tree-item",Mg:"goog-tree-children",Ng:"goog-tree-children-nolines",nf:"goog-tree-row",Wg:"goog-tree-item-label",Xb:"goog-tree-icon",Ei:"goog-tree-expand-icon",Ii:"goog-tree-expand-icon-plus",Hi:"goog-tree-expand-icon-minus",Ki:"goog-tree-expand-icon-tplus",Ji:"goog-tree-expand-icon-tminus",Gi:"goog-tree-expand-icon-lplus",Fi:"goog-tree-expand-icon-lminus",Sg:"goog-tree-expand-icon-t",Rg:"goog-tree-expand-icon-l",Qg:"goog-tree-expand-icon-blank",
lf:"goog-tree-expanded-folder-icon",Og:"goog-tree-collapsed-folder-icon",mf:"goog-tree-file-icon",Tg:"goog-tree-expanded-folder-icon",Pg:"goog-tree-collapsed-folder-icon",Yg:"selected"};function Uf(a,b,c){Q.call(this,a,b,c)}w(Uf,Q);Uf.prototype.ua=function(){if(this.rc)return this.rc;var a=this.getParent();return a&&(a=a.ua())?(If(this,a),a):null};Uf.prototype.ce=function(){var a=this.Da(),b=this.Ti;if(a&&b)return b;b=this.lj;if(!a&&b)return b;b=this.ha;if(Yd(this)){if(a&&b.lf)return b.Xb+" "+b.lf;if(!a&&b.Og)return b.Xb+" "+b.Og}else if(b.mf)return b.Xb+" "+b.mf;return""};/*

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
function Vf(a){var b;x&&(b=workarea.ke());var c=M("xml");a=Fa(a,!0);for(var d=0,e;e=a[d];d++){var g=Wf(e);e=e.O();g.setAttribute("x",x?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}c.setAttribute("level",R);return c}
function Wf(a){var b=M("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Qc){var c=a.Qc();c&&b.appendChild(c)}for(var d=0;c=a.S[d];d++)for(var e=0,g;g=c.oa[e];e++)if(g.name&&g.uc){var h=M("field",null,g.Hc());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.kh())c=M("comment",null,c),"object"==typeof a.L&&(c.setAttribute("pinned",a.L.u()),d=a.L.$b(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.S[e];e++){var k;g=!0;5!=c.type&&
(h=S(c.n),1==c.type?(k=M("value"),d=!0):3==c.type&&(k=M("statement")),h&&(k.appendChild(Wf(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.xd);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Ac&&!I||b.setAttribute("deletable",!1);a.zb&&!I||b.setAttribute("movable",!1);a.Cc&&!I||b.setAttribute("editable",!1);if(a=Xf(a))k=M("next",null,Wf(a)),b.appendChild(k);return b}
function Yf(a){return(new XMLSerializer).serializeToString(a)}function Zf(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function $f(a,b){var c;x&&(c=a.ke());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=ag(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(x?c-h:h,e)}}
function ag(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=bg(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.o&&d.k(!0,!1,!0);d.fill(a,e);d.ra=g}else d=Rb(a,e);d.eb&&d.eb();(g=b.getAttribute("inline"))&&cg(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Fd("true"==g);(g=b.getAttribute("deletable"))&&dg(d,"true"==g);if(g=b.getAttribute("movable"))d.zb="true"==g;(g=b.getAttribute("editable"))&&eg(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,l=0,m;m=k.childNodes[l];l++)3==m.nodeType&&m.data.match(/^\s*$/)||(h=m);l=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.hd&&(d.hd(k),d.eb&&d.eb());break;case "comment":d.Ed(k.textContent);var q=k.getAttribute("pinned");q&&setTimeout(function(){d.L&&d.L.G&&d.L.G("true"==q)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.L&&d.L.G&&d.L.lc(h,k);break;case "title":case "field":Sb(d,l).Ma(k.textContent);break;case "value":case "statement":k=fg(d,l);if(!k)throw"Input "+l+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=ag(a,h,c),h.K)gg(k.n,h.K);else if(h.B)gg(k.n,h.B);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.J)throw"Next statement does not exist.";if(d.J.m)throw"Next statement is already connected.";
h=ag(a,h,c);if(!h.B)throw"Next block does not have previous statement.";gg(d.J,h.B)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.mc("true"==b);a.t&&((a=Xf(d))?a.C():d.C());return d}function hg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}n.Blockly||(n.Blockly={});n.Blockly.Xml||(n.Blockly.Xml={});n.Blockly.Xml.domToText=Yf;n.Blockly.Xml.domToWorkspace=$f;n.Blockly.Xml.textToDom=Zf;
n.Blockly.Xml.workspaceToDom=Vf;/*

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
function ig(a,b,c,d,e,g,h){var k=jg;x&&(k=-k);this.ti=k*Math.PI/180;this.p=a;this.tb=b;this.Rh=c;a.Zc.appendChild(this.kf(b,!(!g||!h)));kg(this,d,e);g&&h||(a=this.tb.getBBox(),g=a.width+2*lg,h=a.height+2*lg);this.lc(g,h);mg(this);ng(this);this.bg=!0;I||(F(this.Ud,"mousedown",this,this.xi),this.Ab&&F(this.Ab,"mousedown",this,this.Pj))}var lg=6,jg=20,og=null,pg=null;function qg(){og&&(G(og),og=null);pg&&(G(pg),pg=null)}f=ig.prototype;f.bg=!1;f.Wa=0;f.bf=0;f.ic=0;f.Dd=0;f.A=0;f.ea=0;f.ef=!0;
f.kf=function(a,b){this.Xa=E("g",{},null);var c=E("g",{filter:"url(#blocklyEmboss)"},this.Xa);this.Fg=E("path",{},c);this.Ud=E("rect",{"class":"blocklyDraggable",x:0,y:0,rx:lg,ry:lg},c);b?(this.Ab=E("g",{"class":x?"blocklyResizeSW":"blocklyResizeSE"},this.Xa),c=2*lg,E("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.Ab),E("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.Ab),E("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.Ab)):this.Ab=
null;this.Xa.appendChild(a);return this.Xa};f.xi=function(a){rg(this);qg();Lb(a)||sg(a)||(tg(ug),this.gh=x?this.ic+a.clientX:this.ic-a.clientX,this.Ri=this.Dd-a.clientY,og=F(document,"mouseup",this,qg),pg=F(document,"mousemove",this,this.yi),vg(),a.stopPropagation())};f.yi=function(a){this.ef=!1;this.ic=x?this.gh-a.clientX:this.gh+a.clientX;this.Dd=this.Ri+a.clientY;mg(this);ng(this)};
f.Pj=function(a){rg(this);qg();Lb(a)||(tg(ug),this.Oj=x?this.A+a.clientX:this.A-a.clientX,this.Nj=this.ea-a.clientY,og=F(document,"mouseup",this,qg),pg=F(document,"mousemove",this,this.Qj),vg(),a.stopPropagation())};f.Qj=function(a){this.ef=!1;var b=this.Oj,c=this.Nj+a.clientY,b=x?b-a.clientX:b+a.clientX;this.lc(b,c);x&&mg(this)};function rg(a){a.Xa.parentNode.appendChild(a.Xa)}function kg(a,b,c){a.Wa=b;a.bf=c;a.bg&&mg(a)}
function mg(a){a.Xa.setAttribute("transform","translate("+(x?a.Wa-a.ic-a.A:a.Wa+a.ic)+", "+(a.Dd+a.bf)+")")}f.$b=function(){return{width:this.A,height:this.ea}};
f.lc=function(a,b){var c=2*lg;a=Math.max(a,c+45);b=Math.max(b,c+18);this.A=a;this.ea=b;this.Ud.setAttribute("width",a);this.Ud.setAttribute("height",b);this.Ab&&(x?this.Ab.setAttribute("transform","translate("+2*lg+", "+(b-c)+") scale(-1 1)"):this.Ab.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.bg){if(this.ef){var c=-this.A/4,d=-this.ea-25,e=this.p.wb();x?this.Wa-e.Oa-c-this.A<T?c=this.Wa-e.Oa-this.A-T:this.Wa-e.Oa-c>e.V&&(c=this.Wa-e.Oa-e.V):this.Wa+c<e.Oa?c=e.Oa-this.Wa:
e.Oa+e.V<this.Wa+c+this.A+10+T&&(c=e.Oa+e.V-this.Wa-this.A-T);this.bf+d<e.Sb&&(d=this.Rh.getBBox().height);this.ic=c;this.Dd=d}mg(this);ng(this)}wg(this.Xa,"resize")};
function ng(a){var b=[],c=a.A/2,d=a.ea/2,e=-a.ic,g=-a.Dd;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;x&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var l=k+Math.PI/2;l>2*Math.PI&&(l-=2*Math.PI);var m=Math.sin(l),q=Math.cos(l),v=a.$b(),l=(v.width+v.height)/10,l=Math.min(l,v.width,v.height)/2,v=1-8/h,e=c+v*e,g=d+v*g,v=c+l*q,t=d+l*m,c=c-l*q,d=d-l*m,m=k+a.ti;m>2*Math.PI&&(m-=2*Math.PI);k=Math.sin(m)*h/4;h=Math.cos(m)*h/4;b.push("M"+v+","+t);b.push("C"+(v+h)+","+(t+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.Fg.setAttribute("d",b.join(" "))}f.Vc=function(a){this.Ud.setAttribute("fill",a);this.Fg.setAttribute("fill",a)};f.k=function(){qg();H(this.Xa);this.Rh=this.tb=this.p=this.Xa=null};/*

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
function xg(a){this.p=a}f=xg.prototype;f.cd=47;f.Ve=45;f.bd=15;f.gi=35;f.zg=35;f.Qd=25;f.Mc=!1;f.g=null;f.Te=null;f.Nf=0;f.Ob=0;f.yh=0;f.Yh=0;
f.H=function(){this.g=E("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=E("clipPath",{id:"blocklyTrashBodyClipPath"},this.g);E("rect",{width:this.cd,height:this.Ve,y:this.bd},a);E("image",{width:yg,height:zg,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.g).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Ag+Bg);a=E("clipPath",{id:"blocklyTrashLidClipPath"},this.g);E("rect",{width:this.cd,height:this.bd},a);this.Te=E("image",{width:yg,height:zg,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.g);this.Te.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Ag+Bg);this.cf();return this.g};f.I=function(){Cg(this,!1);this.Pb();F(window,"resize",this,this.Pb)};f.k=function(){this.g&&(H(this.g),this.g=null);this.p=this.Te=null;n.clearTimeout(this.Nf)};f.Pb=function(){var a=this.p.wb();a&&(this.yh=x?this.zg:a.V+a.Pa-this.cd-this.zg,this.Yh=a.la+a.Qa-(this.Ve+this.bd)-this.gi,this.g.setAttribute("transform","translate("+this.yh+","+this.Yh+")"))};
f.pd=function(){var a=Dg(this.g);return new Ub(a.x-this.Qd,a.y-this.Qd,this.cd+2*this.Qd,this.Ve+this.bd+2*this.Qd)};function Cg(a,b){a.Mc!=b&&(n.clearTimeout(a.Nf),a.Mc=b,a.cf())}f.cf=function(){this.Ob+=this.Mc?.2:-.2;this.Ob=Math.min(Math.max(this.Ob,0),1);var a=45*this.Ob;this.Te.setAttribute("transform","rotate("+(x?-a:a)+", "+(x?4:this.cd-4)+", "+(this.bd-2)+")");this.g.style.opacity=.2+.2*this.Ob;if(0<this.Ob||1>this.Ob)this.Nf=Cf(this.cf,20,this)};f.close=function(){Cg(this,!1)};/*

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
function Eg(a){this.p=a;this.P=null;this.rd=new Fg(a,!0,!0);this.Od=new Fg(a,!1,!0);this.fd=E("rect",{height:T,width:T,style:"fill: #fff"},null);Gg(this.fd,a.Zc)}Eg.prototype.k=function(){G(this.Fe);this.Fe=null;H(this.fd);this.P=this.p=this.fd=null;this.rd.k();this.rd=null;this.Od.k();this.Od=null};
Eg.prototype.resize=function(){var a=this.p.wb();if(a){var b=!1,c=!1;this.P&&this.P.V==a.V&&this.P.la==a.la&&this.P.Qa==a.Qa&&this.P.Pa==a.Pa?(this.P&&this.P.yc==a.yc&&this.P.Oa==a.Oa&&this.P.sb==a.sb||(b=!0),this.P&&this.P.Sa==a.Sa&&this.P.Sb==a.Sb&&this.P.Za==a.Za||(c=!0)):c=b=!0;b&&this.rd.resize(a);c&&this.Od.resize(a);this.P&&this.P.V==a.V&&this.P.Pa==a.Pa||this.fd.setAttribute("x",this.Od.Tb);this.P&&this.P.la==a.la&&this.P.Qa==a.Qa||this.fd.setAttribute("y",this.rd.Ue);this.P=a}};
Eg.prototype.set=function(a,b){this.rd.set(a);this.Od.set(b)};function Fg(a,b,c){this.p=a;this.Ge=c||!1;this.va=b;this.kf();b?(this.Ua.setAttribute("height",T),this.ba.setAttribute("height",T-6),this.ba.setAttribute("y",3)):(this.Ua.setAttribute("width",T),this.ba.setAttribute("width",T-6),this.ba.setAttribute("x",3));this.Eh=F(this.Ua,"mousedown",this,this.Bj);this.Fh=F(this.ba,"mousedown",this,this.Cj)}var Hg,Ig,T=15;aa("document.documentElement.ontouchstart")&&(T=25);f=Fg.prototype;
f.k=function(){this.Ee();this.Fe&&(G(this.Fe),this.Fe=null);G(this.Eh);this.Eh=null;G(this.Fh);this.Fh=null;H(this.g);this.p=this.ba=this.Ua=this.g=null};
f.resize=function(a){if(!a&&(a=this.p.wb(),!a))return;if(this.va){var b=a.V;this.Ge?b-=T:this.G(b<a.Sa);this.Ea=b/a.yc;if(-Infinity===this.Ea||Infinity===this.Ea||isNaN(this.Ea))this.Ea=0;var c=a.V*this.Ea,d=(a.Oa-a.sb)*this.Ea;this.ba.setAttribute("width",Math.max(0,c));this.Tb=a.Pa;this.Ge&&x&&(this.Tb+=a.Pa+T);this.Ue=a.Qa+a.la-T;this.g.setAttribute("transform","translate("+this.Tb+", "+this.Ue+")");this.Ua.setAttribute("width",Math.max(0,b));this.ba.setAttribute("x",Jg(this,d))}else{b=a.la;this.Ge?
b-=T:this.G(b<a.Sa);this.Ea=b/a.Sa;if(-Infinity===this.Ea||Infinity===this.Ea||isNaN(this.Ea))this.Ea=0;c=a.la*this.Ea;d=(a.Sb-a.Za)*this.Ea;this.ba.setAttribute("height",Math.max(0,c));this.Tb=a.Pa;x||(this.Tb+=a.V-T);this.Ue=a.Qa;this.g.setAttribute("transform","translate("+this.Tb+", "+this.Ue+")");this.Ua.setAttribute("height",Math.max(0,b));this.ba.setAttribute("y",Jg(this,d))}Kg(this)};
f.kf=function(){this.g=E("g",{},null);this.Ua=E("rect",{"class":"blocklyScrollbarBackground"},this.g);var a=Math.floor((T-6)/2);this.ba=E("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.g);Gg(this.g,this.p.Zc)};f.u=function(){return"none"!=this.g.getAttribute("display")};f.G=function(a){if(a!=this.u()){if(this.Ge)throw"Unable to toggle visibility of paired scrollbars.";a?this.g.setAttribute("display","block"):(this.p.Ph({x:0,y:0}),this.g.setAttribute("display","none"))}};
f.Bj=function(a){this.Ee();if(!Lb(a)){var b=Lg(a),b=this.va?b.x:b.y,c=Dg(this.ba),c=this.va?c.x:c.y,d=parseFloat(this.ba.getAttribute(this.va?"width":"height")),e=parseFloat(this.ba.getAttribute(this.va?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ba.setAttribute(this.va?"x":"y",Jg(this,e));Kg(this)}a.stopPropagation()};
f.Cj=function(a){this.Ee();Lb(a)||(this.Xj=parseFloat(this.ba.getAttribute(this.va?"x":"y")),this.Zj=this.va?a.clientX:a.clientY,Hg=F(document,"mouseup",this,this.Ee),Ig=F(document,"mousemove",this,this.Ej));a.stopPropagation()};f.Ej=function(a){this.ba.setAttribute(this.va?"x":"y",Jg(this,this.Xj+((this.va?a.clientX:a.clientY)-this.Zj)));Kg(this)};f.Ee=function(){Mg();vg(!0);Hg&&(G(Hg),Hg=null);Ig&&(G(Ig),Ig=null)};
function Jg(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.va?"width":"height",d=parseFloat(a.Ua.getAttribute(c)),c=parseFloat(a.ba.getAttribute(c));b=Math.min(b,d-c)}return b}function Kg(a){var b=parseFloat(a.ba.getAttribute(a.va?"x":"y")),c=parseFloat(a.Ua.getAttribute(a.va?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.va?c.x=b:c.y=b;a.p.Ph(c)}f.set=function(a){this.ba.setAttribute(this.va?"x":"y",a*this.Ea);Kg(this)};
function Gg(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function Ng(a,b){Ng.j.constructor.call(this);this.wb=a;this.Ph=b;var c=[];c[1]=new Og;c[2]=new Og;c[3]=new Og;c[4]=new Og;this.Ci=c}w(Ng,Ea);f=Ng.prototype;f.t=!0;f.wh=!1;f.sf=!1;f.scrollX=0;f.scrollY=0;f.Na=null;f.uf=null;f.Rb=null;f.H=function(){this.g=E("g",{},null);this.aa=E("g",{},this.g);this.Zc=E("g",{},this.g);this.lb();return this.g};
f.k=function(){this.t=!1;Ng.j.k.call(this);this.g&&(H(this.g),this.g=null);this.Zc=this.aa=null;this.ja&&(this.ja.k(),this.ja=null);this.Na&&(this.Na.k(),this.Na=null)};function Pg(){var a=J;if(qa&&!I){a.Na=new xg(a);var b=a.Na.H();a.g.insertBefore(b,a.aa);a.Na.I()}}f.dd=function(a){Ng.j.dd.call(this,a);Qg&&this==J&&-1==Rg.indexOf(a)&&Rg.push(a)};f.Oe=function(a){Ng.j.Oe.call(this,a);Qg&&this==J&&Rg.Rk(a)};f.clear=function(){vg();Ng.j.clear.call(this)};f.ke=function(){return this.wb().V};
f.C=function(){for(var a=this.vb(),b=0,c;c=a[b];b++)c.ac().length||c.C()};function Sg(a,b){a.ug=b;a.vg&&(G(a.vg),a.vg=null);b&&(a.vg=F(a.aa,"blocklySelectChange",a,function(){this.ug=!1}))}function Tg(a){var b=J;b.ug&&0!=Mb&&Sg(b,!1);if(b.ug){var c=null;if(a&&(c=Ga(b,a),!c))return;Sg(b,!1);c?c.select():U&&Ug(U);setTimeout(function(){Sg(b,!0)},1)}}f.lb=function(){if(this.t){this.uf&&clearTimeout(this.uf);var a=this.aa;a&&(this.uf=setTimeout(function(){wg(a,"blocklyWorkspaceChange")},0))}};
function Vg(a,b){var c=Lg(b),c=new L(c.x,c.y);if(a.$g){if(a.$g.contains(c))return Cg(a.Na,!0),tg(Wg),!0;Cg(a.Na,!1)}if(a.Zg&&a.Zg.contains(c))return tg(Wg),!0;tg(ug);return!1}Ng.prototype.clear=Ng.prototype.clear;/*

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
function Xg(a){this.Ba=a}f=Xg.prototype;f.ga=null;f.Jc=0;f.Kc=0;f.zc=function(){this.wa||(this.wa=E("g",{},null),this.Ba.D().appendChild(this.wa),F(this.wa,"mouseup",this,this.mj),this.tc())};f.k=function(){H(this.wa);this.wa=null;this.G(!1);this.Ba=null};f.tc=function(){this.Ba.Mb?Jb(this.wa,"blocklyIconGroup"):Ib(this.wa,"blocklyIconGroup")};f.u=function(){return!!this.ga};f.mj=function(){this.Ba.Mb||this.G(!this.u())};f.sc=function(){if(this.u()){var a=uf(vf(this.Ba.jf));this.ga.Vc(a)}};
function Yg(a){var b=a.Ba.O(),c=Zg(a.wa),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Jc||b!==a.Kc)a.Jc=d,a.Kc=b,a.u()&&kg(a.ga,d,b)};/*

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
function $g(a,b){this.h=a;this.m=null;this.type=b;this.N=this.ib=0;this.ob=!1;this.Fb=this.h.o.Ci}f=$g.prototype;f.k=function(){if(this.m)throw"Disconnect connection before disposing of it.";this.ob&&ah(this.Fb[this.type],this);this.ob=!1;bh==this&&(bh=null);ch==this&&(ch=null)};function dh(a){return 1==a.type||3==a.type}
function gg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.o!==b.h.o)throw"Blocks are on different workspaces.";if(eh[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.m)throw"Source connection already connected (value).";if(b.m){var c=S(b);c.ya(null);if(!c.K)throw"Orphan block does not have an output connection.";for(var d=a.h;d=fh(d,c);)if(S(d))d=S(d);else{gg(d,c.K);c=null;break}c&&setTimeout(function(){gh(c.K,b)},hh)}}else{if(a.m)throw"Source connection already connected (block).";
if(b.m){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=S(b);c.ya(null);if(!c.B)throw"Orphan block does not have a previous connection.";for(d=a.h;d.J;)if(d.J.m)d=Xf(d);else{ih(c.B,d.J)&&(gg(d.J,c.B),c=null);break}c&&setTimeout(function(){gh(c.B,b)},hh)}}var e;dh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.m=b;b.m=a;e.ya(d);d.t&&jh(d);e.t&&jh(e);d.t&&e.t&&(3==a.type||4==a.type?e.C():d.C())}
function fh(a,b){for(var c=!1,d=0;d<a.S.length;d++){var e=a.S[d].n;if(e&&1==e.type&&ih(b.K,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.m;if(!a)throw"Source connection not connected.";if(a.m!=this)throw"Target connection not connected to source connection.";this.m=a.m=null;var b;dh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.t&&b.C();a.t&&(jh(a),a.C())};function S(a){return a.m?a.m.h:null}
function gh(a,b){if(0==Mb){var c=kh(a.h);if(!c.Mb){var d=!1;if(!c.zb||I){c=kh(b.h);if(!c.zb||I)return;b=a;d=!0}c.D().parentNode.appendChild(c.D());var e=b.ib+V-a.ib,g=b.N+V-a.N;d&&(g=-g);x&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.ob&&ah(this.Fb[this.type],this);this.ib=a;this.N=b;lh(this.Fb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.ib+a,this.N+b)};
f.sh=function(){var a;1==this.type||2==this.type?(a=x?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=x?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.O();$g.ne=E("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.ib-b.x)+", "+(this.N-b.y)+")"},this.h.D())};
function mh(a){var b=Math.round(a.m.ib-a.ib),c=Math.round(a.m.N-a.N);if(0!=b||0!=c){a=S(a);var d=a.D();if(!d)throw"block is not rendered.";d=Zg(d);a.D().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");nh(a,-b,-c)}}
function oh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.m||1==c.type&&c.m&&(!S(c).zb||I)||!ih(v,c))return!0;c=c.h;do{if(q==c)return!0;c=c.getParent()}while(c);var d=h-g[a].ib,c=k-g[a].N,d=Math.sqrt(d*d+c*c);d<=b&&(m=g[a],b=d);return c<b}if(a.m)return{n:null,Jh:b};var g=a.Fb[eh[a.type]],h=a.ib+c,k=a.N+d;c=0;for(var l=d=g.length-2;c<l;)g[l].N<k?c=l:d=l,l=Math.floor((c+d)/2);d=c=l;var m=null,q=a.h,v=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{n:m,Jh:b}}
function ih(a,b){if(!a.wc||!b.wc)return!0;for(var c=0;c<a.wc.length;c++)if(-1!=b.wc.indexOf(a.wc[c]))return!0;return!1}f.Uc=function(a){a?(ea(a)||(a=[a]),this.wc=a,this.m&&!ih(this,this.m)&&(dh(this)?S(this).ya(null):this.h.ya(null),this.h.Ca())):this.wc=null;return this};
function ph(a){var b=V;function c(a){var c=e-d[a].ib,h=g-d[a].N;Math.sqrt(c*c+h*h)<=b&&l.push(d[a]);return h<b}var d=a.Fb[eh[a.type]],e=a.ib,g=a.N;a=0;for(var h=d.length-2,k=h;a<k;)d[k].N<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,l=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return l}
function qh(a){a.ob||lh(a.Fb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=S(a)){var c;a.isCollapsed()?(c=[],a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B)):c=rh(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,qh(c[d]));0==b.length&&(b[0]=a)}return b}function Og(){}Og.prototype=[];function lh(a,b){if(b.ob)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].N<b.N)c=e+1;else if(a[e].N>b.N)d=e;else{c=e;break}}a.splice(c,0,b);b.ob=!0}
function ah(a,b){if(!b.ob)throw"Connection not in database.";b.ob=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].N<b.N?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].N==b.N;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].N==b.N);throw"Unable to find connection in connectionDB.";};/*

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
var K={ek:0,Vi:function(){var a=(++K.ek).toString();return Qg?sh(a):a},nk:function(a){var b={I:function(){var b=this;this.Vc(a.vk);this.Kb=a.Kb;"string"==typeof a.Aa?this.Xc(a.Aa):"function"==typeof a.Aa&&this.Xc(function(){return a.Aa(b)});"undefined"!=a.Ij?th(this,a.Ij):(uh(this,"undefined"==typeof a.Kj?!0:a.Kj),vh(this,"undefined"==typeof a.Aj?!0:a.Aj));var d=[];d.push(a.text);a.si&&a.si.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
jb("addTemplate() can only handle value inputs.")});d.push(1);a.pj&&this.Xk(a.pj);wh.prototype.yd.apply(this,d)}};b.Qc=a.$k?function(){var b=a.xj?a.Ok():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.xj;K[a.rk]=b}};/*

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
function xh(a){xh.j.constructor.call(this,a);this.zc()}w(xh,Xg);f=xh.prototype;f.za="";f.A=160;f.ea=80;f.zc=function(){Xg.prototype.zc.call(this);E("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.wa);this.Hf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.wa);this.Hf.appendChild(document.createTextNode("?"))};f.tc=function(){this.u()&&(this.G(!1),this.G(!0));Xg.prototype.tc.call(this)};
f.Mj=function(){var a=this.ga.$b(),b=2*lg;this.md.setAttribute("width",a.width-b);this.md.setAttribute("height",a.height-b);this.Fa.style.width=a.width-b-4+"px";this.Fa.style.height=a.height-b-4+"px"};
f.G=function(a){if(a!=this.u())if((!this.Ba.Cc||I)&&!this.Fa||B)yh.prototype.G.call(this,a);else{var b=this.nb(),c=this.$b();if(a){a=this.Ba.o;this.md=E("foreignObject",{x:lg,y:lg},null);var d=document.createElementNS("http://www.w3.org/1999/xhtml","body");d.setAttribute("xmlns","http://www.w3.org/1999/xhtml");d.className="blocklyMinimalBody";this.Fa=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Fa.className="blocklyCommentTextarea";this.Fa.setAttribute("dir",x?"RTL":"LTR");
d.appendChild(this.Fa);this.md.appendChild(d);F(this.Fa,"mouseup",this,this.ck);this.ga=new ig(a,this.md,this.Ba.Cb,this.Jc,this.Kc,this.A,this.ea);F(this.ga.Xa,"resize",this,this.Mj);this.sc();this.za=null}else this.ga.k(),this.md=this.Fa=this.ga=null;this.La(b);this.lc(c.width,c.height)}};f.ck=function(){rg(this.ga);this.Fa.focus()};f.$b=function(){return this.u()?this.ga.$b():{width:this.A,height:this.ea}};f.lc=function(a,b){this.Fa?this.ga.lc(a,b):(this.A=a,this.ea=b)};
f.nb=function(){return this.Fa?this.Fa.value:this.za};f.La=function(a){this.Fa?this.Fa.value=a:this.za=a};f.k=function(){this.Ba.L=null;Xg.prototype.k.call(this)};/*

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
var zh=!1,Ah=0,Bh=0,Ch={x:0,y:0},Dh=null,Eh=null,Fh=null,Gh=null,Hh=null,Ih=null;function Jh(){var a=E("g",{"class":"blocklyHidden"},null);Fh=a;Ih=E("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Hh=E("rect",{"class":"blocklyTooltipBackground"},a);Gh=E("text",{"class":"blocklyTooltipText"},a);return a}function Kh(a){F(a,"mouseover",null,Lh);F(a,"mouseout",null,Mh);F(a,"mousemove",null,Nh)}function Lh(a){for(a=a.target;!p(a.Aa)&&!u(a.Aa);)a=a.Aa;Dh!=a&&(Oh(),Eh=null,Dh=a);clearTimeout(Ah)}
function Mh(){Ah=setTimeout(function(){Eh=Dh=null;Oh()},1);clearTimeout(Bh)}function Nh(a){Dh&&Dh.Aa&&0==Mb&&!mf&&(zh?(a=Lg(a),10<Math.sqrt(Math.pow(Ch.x-a.x,2)+Math.pow(Ch.y-a.y,2))&&Oh()):Eh!=Dh&&(clearTimeout(Bh),Ch=Lg(a),Bh=setTimeout(Ph,1E3)))}function Oh(){zh&&(zh=!1,Fh&&(Fh.style.display="none"));clearTimeout(Bh)}
function Ph(){Eh=Dh;if(Fh){Kb(Gh);var a=Dh.Aa;u(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,l=1,d=0;d<c.length-1;d++)l<(d+1.5)/k?(l++,b[d]=!0):b[d]=!1;for(var b=Qh(c,b,a),d=Rh(c,b,a),k=c,l=[],m=0;m<k.length;m++)l.push(k[m]),void 0!==b[m]&&l.push(b[m]?"\n":" ");b=l.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)E("tspan",{dy:"1em",x:5},
Gh).appendChild(document.createTextNode(a[c]));zh=!0;Fh.style.display="block";a=Gh.getBBox();c=10+a.width;e=a.height;Hh.setAttribute("width",c);Hh.setAttribute("height",e);Ih.setAttribute("width",c);Ih.setAttribute("height",e);if(x)for(e=a.width,g=0;h=Gh.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=Ch.x;e=x?e-(0+c):e+0;c=Ch.y+10;g=Sh();c+a.height>g.height&&(c-=a.height+20);x?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);Fh.setAttribute("transform",
"translate("+e+","+c+")")}}function Rh(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Qh(a,b,c){for(var d=Rh(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=Rh(a,h,c);k>d&&(d=k,e=h)}return e?Qh(a,e,c):b};/*

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
function Th(a){this.h=null;this.Yc=new Fb(0,25);this.La(a)}w(Th,Gb);f=Th.prototype;f.clone=function(){return new Th(this.nb())};f.uc=!1;f.I=function(a){this.h||(this.h=a,this.fa=E("text",{"class":"blocklyText"},null),a.D().appendChild(this.fa),this.fa.Aa=this.h,Kh(this.fa),Hb(this))};f.k=function(){H(this.fa);this.fa=null};f.D=function(){return this.fa};f.Xc=function(a){this.fa.Aa=a};/*

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
function Uh(a,b,c,d){this.type=a;this.name=b;this.h=c;this.n=d;this.oa=[];this.align=-1;this.Q=!0}function Vh(a,b,c){if(!b&&!c)return a;p(b)&&(b=new Th(b));a.h.t&&b.I(a.h);b.name=c;b.Xf&&Vh(a,b.Xf);a.oa.push(b);b.rg&&Vh(a,b.rg);a.h.t&&(a.h.C(),a.h.Ca());return a}f=Uh.prototype;f.u=function(){return this.Q};
f.G=function(a){var b=[];if(this.Q==a)return b;for(var c=(this.Q=a)?"block":"none",d=0,e;e=this.oa[d];d++)e.G(a);if(this.n){if(a)b=qh(this.n);else if(d=this.n,d.ob&&ah(d.Fb[d.type],d),d.m){e=S(d).mb();for(var g=0;g<e.length;g++){for(var h=e[g],k=rh(h,!0),l=0;l<k.length;l++){var m=k[l];m.ob&&ah(d.Fb[m.type],m)}h=Wh(h);for(k=0;k<h.length;k++)h[k].G(!1)}}if(d=S(this.n))d.D().style.display=c,a||(d.t=!1)}return b};f.Uc=function(a){if(!this.n)throw"This input does not have a connection.";this.n.Uc(a);return this};
function Xh(a,b){a.align=b;a.h.t&&a.h.C();return a}f.I=function(){for(var a=0;a<this.oa.length;a++)this.oa[a].I(this.h)};f.k=function(){for(var a=0,b;b=this.oa[a];a++)b.k();this.n&&this.n.k();this.h=null};/*

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
function yh(a){yh.j.constructor.call(this,a);this.zc()}w(yh,Xg);f=yh.prototype;f.za="";f.zc=function(){Xg.prototype.zc.call(this);E("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.wa);this.Hf=E("text",{"class":"blocklyIconMark",x:8,y:13},this.wa);this.Hf.appendChild(document.createTextNode("!"))};
f.G=function(a){if(a!=this.u())if(a){var b=this.za;a=E("text",{"class":"blocklyText blocklyBubbleText",y:lg},null);for(var b=b.split("\n"),c=0;c<b.length;c++)E("tspan",{dy:"1em",x:lg},a).appendChild(document.createTextNode(b[c]));this.ga=new ig(this.Ba.o,a,this.Ba.Cb,this.Jc,this.Kc,null,null);if(x)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+lg);this.sc();a=this.ga.$b();this.ga.lc(a.width,a.height)}else this.ga.k(),this.ga=null};
f.La=function(a){this.za!=a&&(this.za=a,this.u()&&(this.G(!1),this.G(!0)))};f.k=function(){this.Ba.Pd=null;Xg.prototype.k.call(this)};/*

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
function wh(){}function Rb(a,b){if(Qg)return Yh.create(wh,a,b);var c=a.t?new Zh:new wh;c.initialize(a,b);return c}f=wh.prototype;f.initialize=function(a,b){this.id=K.Vi();a.dd(this);this.fill(a,b)};f.fill=function(a,b){this.B=this.J=this.K=null;this.S=[];this.disabled=this.t=this.xd=!1;this.Aa="";this.contextMenu=!0;this.ec=null;this.jb=[];this.Cc=this.zb=this.Ac=!0;this.Wb=!1;this.L=null;this.di=new L(0,0);this.o=a;this.Mb=a.wh;if(b){this.type=b;var c=K[b],d;for(d in c)this[d]=c[d]}u(this.I)&&this.I()};
function bg(a,b){return Qg?$h.get(a):Ga(b,a)}f.k=function(a,b,c){ai(this,a);this.o&&!c&&(this.o.Oe(this),this.o=null);U==this&&(U=null);for(a=this.jb.length-1;0<=a;a--)this.jb[a].k(!1);for(a=0;b=this.S[a];a++)b.k();this.S.length=0;b=rh(this,!0);for(a=0;a<b.length;a++)c=b[a],c.m&&c.disconnect(),b[a].k();if(Qg&&!bi)$h["delete"](this.id.toString())};
function ai(a,b){var c;c=!1;if(a.K)a.K.m&&a.ya(null);else{var d=null;a.B&&a.B.m&&(d=a.B.m,a.ya(null));var e=Xf(a);if(b&&e){var g=a.J.m;e.ya(null);d&&ih(d,g)&&gg(d,g)}}c&&a.moveBy(V*(x?-1:1),2*V)}function rh(a,b){var c=[];if(b||a.t)if(a.K&&c.push(a.K),a.J&&c.push(a.J),a.B&&c.push(a.B),b||!a.Wb)for(var d=0,e;e=a.S[d];d++)e.n&&c.push(e.n);return c}
f.Ca=function(){if(0==Mb){var a=kh(this);if(!a.Mb)for(var b=rh(this,!1),c=0;c<b.length;c++){var d=b[c];d.m&&dh(d)&&S(d).Ca();for(var e=ph(d),g=0;g<e.length;g++){var h=e[g];d.m&&h.m||kh(h.h)!=a&&(dh(d)?gh(h,d):gh(d,h))}}}};f.getParent=function(){return this.ec};function ci(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Xf(a)==b);return a}}function Xf(a){return a.J&&S(a.J)}function kh(a){var b=a;do a=b,b=a.ec;while(b);return a}f.ac=function(){return this.jb};
f.ya=function(a){if(this.ec){for(var b=this.ec.jb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.ec=null;this.B&&this.B.m&&this.B.disconnect();this.K&&this.K.m&&this.K.disconnect()}else pb(Fa(this.o,!1),this)&&this.o.Oe(this);(this.ec=a)?a.jb.push(this):this.o.dd(this)};f.mb=function(){for(var a=[this],b,c=0;b=this.jb[c];c++)a.push.apply(a,b.mb());return a};function dg(a,b){a.Ac=b;a.Wh&&di(a.Wh)}
function eg(a,b){a.Cc=b;for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.oa[e];e++)g.tc();d=Wh(a);for(c=0;c<d.length;c++)d[c].tc()}f.Xc=function(a){this.Aa=a};f.Vc=function(a){this.jf=a;this.t&&this.sc()};function Sb(a,b){for(var c=0,d;d=a.S[c];c++)for(var e=0,g;g=d.oa[e];e++)if(g.name===b)return g;return null}function uh(a,b){var c;a.B&&(a.B.k(),a.B=null);b&&(void 0===c&&(c=null),a.B=new $g(a,4),a.B.Uc(c));a.t&&(a.C(),a.Ca())}
function vh(a,b){var c;a.J&&(a.J.k(),a.J=null);b&&(void 0===c&&(c=null),a.J=new $g(a,3),a.J.Uc(c));a.t&&(a.C(),a.Ca())}function th(a,b){a.K&&(a.K.k(),a.K=null);void 0===b&&(b=null);a.K=new $g(a,2);a.K.Uc(b);a.t&&(a.C(),a.Ca())}function cg(a,b){a.xd=b;a.t&&(a.C(),a.Ca(),a.o.lb())}f.Fd=function(a){this.disabled=a};function ei(a){for(;;){a=ci(a);if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.Wb};f.mc=function(a){this.Wb=a};
f.toString=function(a){for(var b=[],c=0,d;d=this.S[c];c++){for(var e=0,g;g=d.oa[e];e++)b.push(g.nb());d.n&&((d=S(d.n))?b.push(d.toString()):b.push("?"))}b=Ka(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};
f.yd=function(a,b){function c(a){a instanceof Gb?Vh(this,a):Vh(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.yd.ki),g=[],h=0;h<e.length;h+=2){var k=Ka(e[h]),l=void 0;k&&g.push(new Th(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),m=arguments[k];m[1]instanceof Gb?g.push([m[0],m[1]]):l=Xh(fi(this,1,m[0]).Uc(m[1]),m[2]);arguments[k]=null}else"\n"==k&&g.length&&(l=fi(this,5,""));l&&g.length&&(g.forEach(c,l),g=[])}g.length&&(l=Xh(fi(this,
5,""),d),g.forEach(c,l));for(h=1;h<arguments.length-1;h++);cg(this,!a.match(this.yd.fi))};f.yd.ki=/(%\d+|\n)/;f.yd.fi=/%1\s*$/;function fi(a,b,c){var d=null;if(1==b||3==b)d=new $g(a,b);b=new Uh(b,c,a,d);a.S.push(b);a.t&&(a.C(),a.Ca());return b}function fg(a,b){for(var c=0,d;d=a.S[c];c++)if(d.name==b)return d;return null}f.kh=function(){return this.L||""};f.Ed=function(a){this.L=a};f.O=function(){return this.di};f.moveBy=function(a,b){this.di.translate(a,b)};/*

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
function hi(){var a=this;this.p=new Ng(function(){return ii(a)},function(b){var c=ii(a);c&&(r(b.y)&&(a.p.scrollY=-c.Sa*b.y-c.Za),a.p.aa.setAttribute("transform","translate(0,"+(a.p.scrollY+c.Qa)+")"))});this.p.wh=!0;this.hh=[];this.ea=this.A=0;this.ff=[];this.pb=[]}var ji,ki,li,mi,ni,oi;f=hi.prototype;f.Td=!0;f.ma=8;f.H=function(){this.g=E("g",{},null);this.Ua=E("path",{"class":"blocklyFlyoutBackground"},this.g);this.g.appendChild(this.p.H());return this.g};
f.k=function(){this.xb();G(this.hh);this.hh.length=0;this.kc&&(this.kc.k(),this.kc=null);this.p=null;this.g&&(H(this.g),this.g=null);this.Kd=this.Ua=null};function ii(a){if(!a.u())return null;var b=a.ea-2*a.ma,c=a.A;try{var d=a.p.aa.getBBox()}catch(e){d={height:0,y:0}}return{la:b,V:c,Sa:d.height+d.y,Sb:-a.p.scrollY,Za:0,Qa:a.ma,Pa:0}}
f.I=function(a){this.Kd=a;this.kc=new Fg(this.p,!1,!1);this.xb();F(window,"resize",this,this.Pb);this.Pb();F(this.g,"wheel",this,this.ci);F(this.g,"mousewheel",this,this.ci);F(this.Kd.aa,"blocklyWorkspaceChange",this,this.tf);F(this.g,"mousedown",this,this.De)};
f.Pb=function(){if(this.u()){var a=this.Kd.wb();if(a){var b=this.A-this.ma;x&&(b*=-1);var c=["M "+(x?this.A:0)+",0"];c.push("h",b);c.push("a",this.ma,this.ma,0,0,x?0:1,x?-this.ma:this.ma,this.ma);c.push("v",Math.max(0,a.la-2*this.ma));c.push("a",this.ma,this.ma,0,0,x?0:1,x?this.ma:-this.ma,this.ma);c.push("h",-b);c.push("z");this.Ua.setAttribute("d",c.join(" "));b=a.Pa;x&&(b+=a.V,b-=this.A);this.g.setAttribute("transform","translate("+b+","+a.Qa+")");this.ea=a.la;this.kc&&this.kc.resize()}}};
f.ci=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){vb&&(b*=10);var c=ii(this),b=c.Sb+b,b=Math.min(b,c.Sa-c.la),b=Math.max(b,0);this.kc.set(b);a.preventDefault()}};f.u=function(){return this.g&&"block"==this.g.style.display};f.xb=function(){if(this.u()){this.g.style.display="none";for(var a=0,b;b=this.pb[a];a++)G(b);this.pb.length=0;this.ag&&(G(this.ag),this.ag=null)}};
f.show=function(a){this.xb();for(var b=Fa(this.p,!1),c=0,d;d=b[c];c++)d.o==this.p&&d.k(!1,!1);for(var c=0,e;e=this.ff[c];c++)H(e);this.ff.length=0;var g=this.ma;this.g.style.display="block";var b=[],h=[];if("VARIABLE"==a)wf(b,h,g,this.p);else if("PROCEDURE"==a)Qb(b,h,g,this.p);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=ag(this.p,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.mb();e=0;for(var l;l=c[e];e++)l.Mb=!0,l.Ed(null);d.C();l=d.D();e=pi(d);c=x?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=E("rect",{"fill-opacity":0},null);this.p.aa.insertBefore(e,d.D());d.ld=e;this.ff[k]=e;this.Td?this.pb.push(F(l,"mousedown",null,qi(this,d))):this.pb.push(F(l,"mousedown",null,ri(this,d)));this.pb.push(F(l,"mouseover",d,d.Ye));this.pb.push(F(l,"mouseout",d,d.Ne));this.pb.push(F(e,"mousedown",null,qi(this,d)));this.pb.push(F(e,"mouseover",d,d.Ye));this.pb.push(F(e,"mouseout",d,d.Ne))}this.pb.push(F(this.Ua,"mouseover",this,function(){for(var a=Fa(this.p,!1),b=0,c;c=a[b];b++)c.Ne()}));
this.A=0;this.Kh();this.tf();si(window,"resize");this.ag=F(this.p.aa,"blocklyWorkspaceChange",this,this.Kh);this.p.lb()};
f.Kh=function(){for(var a=0,b=this.ma,c=Fa(this.p,!1),d=0,e;e=c[d];d++)var g=pi(e),a=Math.max(a,g.width);a+=b+8+b/2+T;if(this.A!=a){for(d=0;e=c[d];d++){var g=pi(e),h=e.O();if(x){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.ld&&(e.ld.setAttribute("width",g.width),e.ld.setAttribute("height",g.height),e.ld.setAttribute("x",x?h.x-g.width:h.x),e.ld.setAttribute("y",h.y))}this.A=a;wg(window,"resize")}};
function ri(a,b){return function(c){ti();vg();Lb(c)?ui(b,c):(Mg(),tg(ug),ji=c,ki=b,li=a,mi=F(document,"mouseup",this,ti),ni=F(document,"mousemove",this,a.Dj));c.stopPropagation()}}f.De=function(a){Lb(a)||(vg(!0),vi(),this.Sh=a.clientY,oi=F(document,"mousemove",this,this.Tf),mi=F(document,"mouseup",this,vi),a.preventDefault(),a.stopPropagation())};f.Tf=function(a){var b=a.clientY-this.Sh;this.Sh=a.clientY;a=ii(this);b=a.Sb-b;b=Math.min(b,a.Sa-a.la);b=Math.max(b,0);this.kc.set(b)};
f.Dj=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Mg(),Math.sqrt(Math.pow(a.clientX-ji.clientX,2)+Math.pow(a.clientY-ji.clientY,2))>wi&&qi(li,ki)(ji))};function qi(a,b){return function(c){if(!Lb(c)&&!b.disabled){var d=Wf(b),d=ag(a.Kd,d),e=b.D();if(!e)throw"originBlock is not rendered.";var e=Dg(e),g=d.D();if(!g)throw"block is not rendered.";g=Dg(g);d.moveBy(e.x-g.x,e.y-g.y);a.Td?a.xb():a.tf();d.De(c)}}}
f.tf=function(){for(var a=Ha(this.Kd),b=Fa(this.p,!1),c=0,d;d=b[c];c++){var e=d.mb().length>a;d.Fd(e)}};function vi(){mi&&(G(mi),mi=null);ni&&(G(ni),ni=null);oi&&(G(oi),oi=null);mi&&(G(mi),mi=null);li=ki=ji=null}f.pd=function(){var a=Dg(this.g).x;x||(a-=1E7);return new Ub(a,-1E7,1E7+this.A,this.ea+2E7)};function xi(a){if("function"==typeof a.Bf)return a.Bf();if(p(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function yi(a){this.Ga=void 0;this.na={};if(a){var b;if("function"==typeof a.Af)b=a.Af();else if("function"!=typeof a.Bf)if(fa(a)||p(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=xi(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=yi.prototype;f.set=function(a,b){zi(this,a,b,!1)};f.add=function(a,b){zi(this,a,b,!0)};
function zi(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.na[g]||(a.na[g]=new yi);a=a.na[g]}if(d&&void 0!==a.Ga)throw Error('The collection already contains the key "'+b+'"');a.Ga=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.na[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Ga:void 0};f.Bf=function(){var a=[];Ai(this,a);return a};function Ai(a,b){void 0!==a.Ga&&b.push(a.Ga);for(var c in a.na)Ai(a.na[c],b)}
f.Af=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.na[e])return[];c=c.na[e]}Bi(c,a,b)}else Bi(this,"",b);return b};function Bi(a,b,c){void 0!==a.Ga&&c.push(b);for(var d in a.na)Bi(a.na[d],b+d,c)}f.clear=function(){this.na={};this.Ga=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.na[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.na[e]}a=b.Ga;for(delete b.Ga;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.na[e].vh())delete b.na[e];else break;return a};f.clone=function(){return new yi(this)};f.vh=function(){var a;if(a=void 0===this.Ga)a:{a=this.na;for(var b in a){a=!1;break a}a=!0}return a};function Ci(){this.dc=new yi}f=Ci.prototype;f.W="";f.Of=null;f.ze=null;f.Bd=0;f.Nc=0;function Di(a,b){var c=!1,d=a.dc.Af(b);d&&d.length&&(a.Nc=0,a.Bd=0,c=a.dc.get(d[0]),c=Ei(a,c))&&(a.Of=d);return c}function Ei(a,b){var c;b&&(a.Nc<b.length&&(c=b[a.Nc],a.ze=b),c&&(c.cg(),c.select()));return!!c}f.clear=function(){this.W=""};function Fi(a,b,c,d,e){this.reset(a,b,c,d,e)}Fi.prototype.ih=null;var Gi=0;Fi.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Gi++;d||oa();this.Ad=a;this.wj=b;delete this.ih};Fi.prototype.Oh=function(a){this.Ad=a};function Hi(a){this.Bh=a;this.rh=this.R=this.Ad=this.ra=null}function Ii(a,b){this.name=a;this.value=b}Ii.prototype.toString=function(){return this.name};var Ji=new Ii("WARNING",900),Ki=new Ii("INFO",800),Li=new Ii("CONFIG",700),Mi=new Ii("FINE",500);f=Hi.prototype;f.getName=function(){return this.Bh};f.getParent=function(){return this.ra};f.ac=function(){this.R||(this.R={});return this.R};f.Oh=function(a){this.Ad=a};
function Ni(a){if(a.Ad)return a.Ad;if(a.ra)return Ni(a.ra);jb("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Ni(this).value)for(u(b)&&(b=b()),a=new Fi(a,String(b),this.Bh),c&&(a.ih=c),c="log:"+a.wj,n.console&&(n.console.timeStamp?n.console.timeStamp(c):n.console.markTimeline&&n.console.markTimeline(c)),n.msWriteProfilerMark&&n.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.rh)for(var e=0,g=void 0;g=b.rh[e];e++)g(d);c=c.getParent()}};
f.Pd=function(a,b){this.log(Ji,a,b)};f.info=function(a,b){this.log(Ki,a,b)};var Oi={},Pi=null;function Qi(a){Pi||(Pi=new Hi(""),Oi[""]=Pi,Pi.Oh(Li));var b;if(!(b=Oi[a])){b=new Hi(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Qi(a.substr(0,c));c.ac()[d]=b;b.ra=c;Oi[a]=b}return b};function Ri(a){Nd.call(this);this.s=a;a=B?"focusout":"blur";this.uj=zd(this.s,B?"focusin":"focus",this,!B);this.vj=zd(this.s,a,this,!B)}w(Ri,Nd);Ri.prototype.handleEvent=function(a){var b=new td(a.ta);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Ri.prototype.X=function(){Ri.j.X.call(this);Gd(this.uj);Gd(this.vj);delete this.s};function Si(a,b,c){Q.call(this,a,b,c);this.kd=!0;Mf(this,!0);this.Ja=this;this.Md=new Ci;if(B)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.zh)&&a.Pd("Failed to enable background image cache",void 0)}}w(Si,Q);Si.prototype.qa=null;Si.prototype.vf=null;var Ti=Si.prototype,Ui=Qi("goog.ui.tree.TreeControl");Ti.zh=Ui;f=Si.prototype;f.xf=!1;f.Ui=null;f.Id=!0;f.ig=!0;f.qc=!0;f.jg=!0;f.ua=function(){return this};f.Ec=function(){return 0};f.cg=function(){};
f.dj=function(){this.xf=!0;be(this.i(),"focused");this.Ja&&this.Ja.select()};f.$i=function(){this.xf=!1;de(this.i(),"focused")};f.hasFocus=function(){return this.xf};f.Da=function(){return!this.qc||Si.j.Da.call(this)};f.Bb=function(a){this.qc?Si.j.Bb.call(this,a):this.kd=a};f.zf=function(){return sc};f.ge=function(){var a=Kf(this);return a?a.firstChild:null};f.fe=function(){return null};f.ad=function(){};f.qd=function(){return Si.j.qd.call(this)+(this.qc?"":" "+this.ha.Ug)};
f.ce=function(){var a=this.Da(),b=this.Ti;if(a&&b)return b;b=this.lj;if(!a&&b)return b;b=this.ha;return a&&b.Tg?b.Xb+" "+b.Tg:!a&&b.Pg?b.Xb+" "+b.Pg:""};f.oc=function(a){if(this.Ja!=a){var b=!1;this.Ja&&(b=this.Ja==this.Ui,Mf(this.Ja,!1));if(this.Ja=a)Mf(a,!0),b&&a.select();this.dispatchEvent("change")}};function Vi(a){0!=a.Id&&(a.Id=!1,a.v&&Wi(a))}
function Wi(a){function b(a){var h=Hf(a);if(h){var k=!d||c==a.getParent()&&!e?a.ha.Ng:a.ha.Mg;h.className=k;if(h=a.fe())h.className=Qf(a)}Vd(a,b)}var c=a,d=c.Id,e=c.jg;b(a)}function Xi(a){0!=a.ig&&(a.ig=!1,a.v&&Wi(a))}function Yi(a){if(0!=a.qc){a.qc=!1;if(a.v){var b=Kf(a);b&&(b.className=a.qd())}a.Ja==a&&N(a,0)&&a.oc(N(a,0))}}f.re=function(){Si.j.re.call(this);var a=this.i();ie(a,"tree");O(a,"labelledby",Gf(this).id)};
f.ia=function(){Si.j.ia.call(this);var a=this.i();a.className=this.ha.Xg;a.setAttribute("hideFocus","true");a=this.i();a.tabIndex=0;var b=this.qa=new ue(a),c=this.vf=new Ri(a);Td(this).w(c,"focusout",this.$i).w(c,"focusin",this.dj).w(b,"key",this.cb).w(a,"mousedown",this.Df).w(a,"click",this.Df).w(a,"dblclick",this.Df);this.re()};f.Ta=function(){Si.j.Ta.call(this);this.qa.k();this.qa=null;this.vf.k();this.vf=null};
f.Df=function(a){var b=this.zh;b&&b.log(Mi,"Received event "+a.type,void 0);if(b=Zi(this,a))switch(a.type){case "mousedown":b.Sf(a);break;case "click":a.preventDefault();break;case "dblclick":b.Ch(a)}};
f.cb=function(a){var b=!1,b=this.Md,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Of;if(d){var e=null,g=!1;if(b.ze){var h=b.Nc+c;0<=h&&h<b.ze.length?(b.Nc=h,e=b.ze):g=!0}e||(h=b.Bd+c,0<=h&&h<d.length&&(b.Bd=h),d.length>b.Bd&&(e=b.dc.get(d[b.Bd])),e&&e.length&&g&&(b.Nc=-1==c?e.length-1:0));Ei(b,e)&&(b.Of=d)}c=!0}break;case 8:d=b.W.length-1;c=!0;0<d?(b.W=b.W.substring(0,d),Di(b,b.W)):0==d?b.W="":c=!1;break;case 27:b.W="",c=!0}if(!(b=c)&&(b=this.Ja)){b=this.Ja;c=!0;
switch(a.keyCode){case 39:if(a.altKey)break;Yd(b)&&(b.Da()?N(b,0).select():b.Bb(!0));break;case 37:if(a.altKey)break;Yd(b)&&b.Da()&&b.zd?b.Bb(!1):(d=b.getParent(),e=b.ua(),d&&(e.qc||d!=e)&&d.select());break;case 40:a:if(Yd(b)&&b.Da())d=N(b,0);else{for(d=b;d!=b.ua();){e=d.fb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.gc;null!=d?d=Tf(d):(d=b.getParent(),e=b.ua(),d=!e.qc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.ua())&&e.Md.clear());
b=c}b||(b=this.Md,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.W)&&(b.W+=d,c=Di(b,b.W))),b=c);b&&a.preventDefault();return b};function Zi(a,b){for(var c=null,d=b.target;null!=d;){if(c=Ff[d.id])return c;if(d==a.i())break;d=d.parentNode}return null}f.createNode=function(a){return new Uf(a||sc,this.ha,this.bb())};
function Sf(a,b){var c=a.Md,d=b.nb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.dc.get(d);e?e.push(b):c.dc.set(d,[b])}}f.removeNode=function(a){var b=this.Md,c=a.nb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.dc.get(c);d&&(qb(d,a),d.length&&b.dc.remove(c))}};/*

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
function $i(a,b){this.Ub=M("div","blocklyToolboxDiv");this.Ub.setAttribute("dir",x?"RTL":"LTR");b.appendChild(this.Ub);this.ja=new hi;a.appendChild(this.ja.H());F(this.Ub,"mousedown",this,function(a){Lb(a)||a.target==this.Ub?vg(!1):vg(!0)})}f=$i.prototype;f.width=0;f.We={Jf:19,Xg:"blocklyTreeRoot",Ug:"blocklyHidden",Vg:"",nf:"blocklyTreeRow",Wg:"blocklyTreeLabel",Xb:"blocklyTreeIcon",lf:"blocklyTreeIconOpen",mf:"blocklyTreeIconNone",Yg:"blocklyTreeSelected"};
f.I=function(){this.We.cleardotPath=Ag+"1x1.gif";this.We.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(x?"Rtl":"Ltr");var a=new aj(this,this.We);this.Ld=a;Yi(a);Vi(a);Xi(a);a.oc(null);this.Ub.style.display="block";this.ja.I(J);bj(this);a.C(this.Ub);var b=this;zd(window,"resize",function(){b.Pb()});this.Pb()};
f.Pb=function(){var a=this.Ub,b=cd(z),c=Sh();x?(b=cj(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;x||--this.width};
function bj(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.Vb=[];e.add(k);var l=h.getAttribute("custom");l?k.Vb=l:b(h,k)}else"HR"==k?e.add(new dj):"BLOCK"==k&&e.Vb.push(h)}}var c=a.Ld;c.Mh();c.Vb=[];b(ra,a.Ld);if(c.Vb.length)throw"Toolbox cannot have both blocks and categories in the root level.";wg(window,"resize")}
f.pd=function(){return new Ub(x?Sh().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function aj(a,b){this.sa=a;Si.call(this,sc,b)}w(aj,Si);aj.prototype.ia=function(){aj.j.ia.call(this);if(nd){var a=this.i();F(a,"touchstart",this,this.ij)}};aj.prototype.ij=function(a){a.preventDefault();var b=Zi(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Sf(a)},1)};aj.prototype.createNode=function(a){return new ej(this.sa,a?lc(a):sc,this.ha,this.bb())};
aj.prototype.oc=function(a){this.Ja!=a&&(Si.prototype.oc.call(this,a),a&&a.Vb&&a.Vb.length?this.sa.ja.show(a.Vb):this.sa.ja.xb())};function ej(a,b,c,d){Q.call(this,b,c,d);a&&(b=function(){wg(window,"resize")},zd(a.Ld,"expand",b),zd(a.Ld,"collapse",b))}w(ej,Uf);Q.prototype.zf=function(){return qc("span")};ej.prototype.Sf=function(){Yd(this)&&this.zd?(this.toggle(),this.select()):this.te()?this.ua().oc(null):this.select();Nf(this)};ej.prototype.Ch=function(){};
function dj(){ej.call(this,null,"",fj)}w(dj,ej);var fj={nf:"blocklyTreeSeparator"};/*

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
var gj={Xd:null,show:function(a,b){lf(gj);if(b.length){for(var c=new ef,d=0,e;e=b[d];d++){var g=new Me(e.text);c.Rd(g,!0);g.Gd(e.enabled);e.enabled&&zd(g,"action",function(a){return function(){a()}}(e.Ya))}zd(c,"action",gj.xb);e=Dc();g=Rc();c.C(pf);var h=c.i();Ib(h,"blocklyContextMenu");var k=Vc(h),d=a.clientX+g.x,l=a.clientY+g.y;a.clientY+k.height>=e.height&&(l-=k.height);x?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);qf(d,l,e,g);ff(c);setTimeout(function(){h.focus()},
1);gj.Xd=null}else gj.xb()},xb:function(){mf==gj&&nf();gj.Xd=null},uk:function(a,b){return function(){var c=ag(a.o,b),d=a.O();d.x=x?d.x-V:d.x+V;d.y+=2*V;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Zh(){this.g=E("g",{},null);this.Vh=E("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.g);this.Cb=E("path",{"class":"blocklyPath"},this.g);this.sg=E("path",{"class":"blocklyPathLight"},this.g);this.Cb.Aa=this;Kh(this.Cb);di(this)}w(Zh,wh);f=Zh.prototype;f.height=0;f.width=0;
f.eb=function(){for(var a=0,b;b=this.S[a];a++)b.I();this.Be&&this.Be.wk();this.sc();I||F(this.D(),"mousedown",this,this.De);this.o.aa.appendChild(this.D());u(this.onchange)&&F(this.o.aa,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){U&&Ug(U);U=this;this.Ye();wg(this.o.aa,"blocklySelectChange")};function Ug(a){U=null;a.Ne();wg(a.o.aa,"blocklySelectChange")}f.Be=null;f.L=null;f.Pd=null;function Wh(a){var b=[];a.Be&&b.push(a.Be);a.L&&b.push(a.L);a.Pd&&b.push(a.Pd);return b}
var hj=null,ij=null;f=Zh.prototype;f.ya=function(a){var b=this.D();if(this.ec&&b){var c=this.O();this.o.aa.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Zh.j.ya.call(this,a);a&&(c=this.O(),a.D().appendChild(b),a=this.O(),nh(this,a.x-c.x,a.y-c.y))};f.O=function(){var a=0,b=0,c=this.D();if(c){do var d=Zg(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.o.aa)}return new L(a,b)};
f.moveBy=function(a,b){var c=this.O();this.D().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");nh(this,a,b);jj(this)};function pi(a){var b=a.height,c=a.width;if(a=Xf(a))a=pi(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.mc=function(a){if(this.Wb!=a){Zh.j.mc.call(this,a);for(var b=[],c=0,d;d=this.S[c];c++)b.push.apply(b,d.G(!a));if(a){a=Wh(this);for(c=0;c<a.length;c++)a[c].G(!1);c=this.toString(kj);Vh(fi(this,5,"_TEMP_COLLAPSED_INPUT"),c).I()}else a:{for(c=0;a=this.S[c];c++)if("_TEMP_COLLAPSED_INPUT"==a.name){a.n&&a.n.m&&S(a.n).ya(null);a.k();this.S.splice(c,1);this.t&&(this.C(),this.Ca());break a}jb('Input "%s" not found.',"_TEMP_COLLAPSED_INPUT")}b.length||(b[0]=this);if(this.t){for(c=0;a=b[c];c++)a.C();this.Ca()}}};
f.De=function(a){if(!this.Mb){lj();ti();this.select();vg();if(Lb(a))ui(this,a);else if(this.zb&&!I){Mg();tg(ug);var b=this.O();this.Th=b.x;this.Uh=b.y;this.ng=a.clientX;this.og=a.clientY;Mb=1;hj=F(document,"mouseup",this,this.Uf);ij=F(document,"mousemove",this,this.Tf);this.ae=[];for(var b=this.mb(),c=0,d;d=b[c];c++){d=Wh(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Jc,y:g.Kc};g.wi=d[e];this.ae.push(g)}}}else return;a.stopPropagation()}};
f.Uf=function(a){var b=this;mj(function(){ti();if(U&&bh){gg(ch,bh);if(b.t){var c=(dh(ch)?bh:ch).h;nj("click");var d=Dg(c.g);c.K?(d.x+=x?3:-3,d.y+=13):c.B&&(d.x+=x?-23:23,d.y+=3);c=E("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},z);c.lg=new Date;oj(c)}b.o.Na&&b.o.Na.close()}else Vg(b.o,a)&&((c=b.o.Na)&&Cf(c.close,100,c),U.k(!1,!0),wg(window,"resize"));bh&&(H($g.ne),delete $g.ne,bh=null);tg(pj.OPEN)})};
function ui(a,b){if(!I&&a.contextMenu){var c=[];if(a.Ac&&!I&&a.zb&&!I&&!a.Mb){var d={text:qj,enabled:!0,Ya:function(){var b=Wf(a);hg(b);var b=ag(a.o,b),c=a.O();c.x=x?c.x-V:c.x+V;c.y+=2*V;b.moveBy(c.x,c.y);b.select()}};a.mb().length>Ha(a.o)&&(d.enabled=!1);c.push(d);a.Cc&&!I&&!a.Wb&&sa&&(d={enabled:!0},a.L?(d.text=rj,d.Ya=function(){a.Ed(null)}):(d.text=sj,d.Ya=function(){a.Ed("")}),c.push(d));if(!a.Wb)for(d=0;d<a.S.length;d++)if(1==a.S[d].type){d={enabled:!0};d.text=a.xd?tj:uj;d.Ya=function(){cg(a,
!a.xd)};c.push(d);break}ta&&(a.Wb?(d={enabled:!0},d.text=vj,d.Ya=function(){a.mc(!1)}):(d={enabled:!0},d.text=wj,d.Ya=function(){a.mc(!0)}),c.push(d));ua&&(d={text:a.disabled?xj:yj,enabled:!ei(a),Ya:function(){a.Fd(!a.disabled)}},c.push(d));var d=a.mb().length,e=Xf(a);e&&(d-=e.mb().length);d={text:1==d?zj:Aj.replace("%1",String(d)),enabled:!0,Ya:function(){a.k(!0,!0)}};c.push(d)}d={enabled:!(u(a.Kb)?!a.Kb():!a.Kb)};d.text=Bj;d.Ya=function(){var b=u(a.Kb)?a.Kb():a.Kb;b&&window.open(b)};c.push(d);a.Li&&
!a.Mb&&a.Li(c);gj.show(b,c);gj.Xd=a}}function nh(a,b,c){if(a.t){for(var d=rh(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Wh(a);for(e=0;e<d.length;e++)Yg(d[e]);for(e=0;e<a.jb.length;e++)nh(a.jb[e],b,c)}}function Cj(a,b){b?Ib(a.g,"blocklyDragging"):Jb(a.g,"blocklyDragging");for(var c=0;c<a.jb.length;c++)Cj(a.jb[c],b)}
f.Tf=function(a){var b=this;mj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Mg();var c=a.clientX-b.ng,d=a.clientY-b.og;if(1==Mb&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>wi){Mb=2;b.ya(null);Cj(b,!0);var e=b.o;e.$g=e.Na?e.Na.pd():null;e.Zg=e.ja?e.ja.pd():e.sa?e.sa.pd():null}if(2==Mb){b.D().setAttribute("transform","translate("+(b.Th+c)+", "+(b.Uh+d)+")");for(e=0;e<b.ae.length;e++){var g=b.ae[e],h=g.wi,k=g.x+c,g=g.y+d;h.Jc=k;h.Kc=g;h.u()&&kg(h.ga,k,g)}for(var h=rh(b,
!1),g=k=null,l=V,e=0;e<h.length;e++){var m=h[e],q=oh(m,l,c,d);q.n&&(k=q.n,g=m,l=q.Jh)}bh&&bh!=k&&(H($g.ne),delete $g.ne,ch=bh=null);k&&k!=bh&&(k.sh(),bh=k,ch=g);b.Ac&&!I&&Vg(b.o,a)}}a.stopPropagation()})};function di(a){a.zb&&!I?Ib(a.g,"blocklyDraggable"):Jb(a.g,"blocklyDraggable")}f.D=function(){return this.g};var Dj=1*(1-Math.SQRT1_2)+1,Ej=3*(1-Math.SQRT1_2)-1,Fj="m "+Dj+","+Dj,Gj="a 3,3 0 0,0 "+(-Ej-1)+","+(2-Ej),Hj="a 3,3 0 0,0 "+(2-Ej)+","+(Ej+1);f=Zh.prototype;
f.k=function(a,b){ti();gj.Xd==this&&gj.xb();ai(this,a);if(b&&this.t){nj("delete");var c=Dg(this.g),d=this.g.cloneNode(!0);d.$h=c.x;d.ai=c.y;d.setAttribute("transform","translate("+d.$h+","+d.ai+")");z.appendChild(d);d.Eg=d.getBBox();d.lg=new Date;Ij(d)}this.t=!1;c=Wh(this);for(d=0;d<c.length;d++)c[d].k();Zh.j.k.call(this,a);H(this.g);this.Vh=this.sg=this.Cb=this.g=null};
function Ij(a){var b=(new Date-a.lg)/150;1<b?H(a):(a.setAttribute("transform","translate("+(a.$h+(x?-1:1)*a.Eg.width/2*b+", "+(a.ai+a.Eg.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Ij(a)},10))}function oj(a){var b=(new Date-a.lg)/150;1<b?H(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){oj(a)},10))}
f.sc=function(){if(!this.disabled){var a=uf(vf(this.jf)),b;b=a;if(!zf.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(xf,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];Af([255,255,255],b,.3);Af([0,0,0],b,.4);this.Cb.setAttribute("fill",a);b=Wh(this);for(a=0;a<b.length;a++)b[a].sc();for(a=0;b=this.S[a];a++)for(var c=0,d;d=b.oa[c];c++)d.La(null);this.t&&this.C()}};
function jh(a){a.disabled||ei(a)?(Ib(a.g,"blocklyDisabled"),a.Cb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Jb(a.g,"blocklyDisabled"),a.sc());a=a.ac();for(var b=0,c;c=a[b];b++)jh(c)}f.kh=function(){return this.L?this.L.nb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Ed=function(a){var b=!1;p(a)?(this.L||(this.L=new xh(this),b=!0),this.L.La(a)):this.L&&(this.L.k(),b=!0);b&&this.t&&(this.C(),this.Ca())};f.Fd=function(a){this.disabled!=a&&(Zh.j.Fd.call(this,a),jh(this),this.o.lb())};
f.Ye=function(){Ib(this.g,"blocklySelected");this.g.parentNode.appendChild(this.g)};f.Ne=function(){Jb(this.g,"blocklySelected")};
f.C=function(){this.t=!0;var a=10;x&&(a=-a);for(var b=Wh(this),c=0;c<b.length;c++){var d=b[c];d.Ba.isCollapsed()?d.wa.setAttribute("display","none"):(d.wa.setAttribute("display","block"),x&&(a-=16),d.wa.setAttribute("transform","translate("+a+", 5)"),Yg(d),a=x?a-10:a+26)}var e=a+=x?10:-10,g=this.S,b=[];b.T=e+20;if(this.B||this.J)b.T=Math.max(b.T,40);for(var d=c=0,h=!1,k=!1,l=!1,m=void 0,q=this.xd&&!this.isCollapsed(),v=0,t;t=g[v];v++)if(t.u()){var y;q&&m&&3!=m&&3!=t.type?y=b[b.length-1]:(m=t.type,
y=[],y.type=q&&3!=t.type?-1:t.type,y.height=0,b.push(y));y.push(t);t.jc=25;t.ka=q&&1==t.type?20.5:0;if(t.n&&t.n.m){var ya=pi(S(t.n));t.jc=Math.max(t.jc,ya.height);t.ka=Math.max(t.ka,ya.width)}v==g.length-1&&t.jc--;y.height=Math.max(y.height,t.jc);t.$a=0;1==b.length&&(t.$a+=x?-e:e);for(var ya=!1,Df=0,gb;gb=t.oa[Df];Df++){0!=Df&&(t.$a+=10);var gi=gb.nh();gb.ka=gi.width;gb.Pe=ya&&gb.uc?10:0;t.$a+=gb.ka+gb.Pe;y.height=Math.max(y.height,gi.height);ya=gb.uc}-1!=y.type&&(3==y.type?(k=!0,d=Math.max(d,t.$a)):
(1==y.type?h=!0:5==y.type&&(l=!0),c=Math.max(c,t.$a)))}for(e=0;y=b[e];e++)if(y.Xh=!1,-1==y.type)for(g=0;t=y[g];g++)if(1==t.type){y.height+=20;y.Xh=!0;break}b.Se=20+d;k&&(b.T=Math.max(b.T,b.Se+30));h?b.T=Math.max(b.T,c+20+8):l&&(b.T=Math.max(b.T,c+20));b.kj=h;b.Hk=k;b.Gk=l;d=a;this.K?this.kg=this.Re=!0:(this.kg=this.Re=!1,this.B&&(a=S(this.B))&&Xf(a)==this&&(this.Re=!0),Xf(this)&&(this.kg=!0));h=this.O();k=[];l=[];a=[];c=[];t=b.T;this.Re?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(x?
Fj:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.B&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.B.moveTo(h.x+(x?-30:30),h.y));k.push("H",t);a.push("H",t+(x?-1:0));this.width=t;for(y=t=0;e=b[y];y++){q=10;0==y&&(q+=x?-d:d);a.push("M",b.T-1+","+(t+1));if(this.isCollapsed())g=e[0],v=t+18,Jj(g.oa,q,v),k.push("l 8,0 0,4 8,4 -16,8 8,4"),x?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),x&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(m=0;g=e[m];m++)v=t+18,e.Xh&&(v+=10),q=Jj(g.oa,q,v),5!=g.type&&(q+=g.ka+10),1==g.type&&(l.push("M",q-10+","+(t+10)),l.push("h",6-g.ka),l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),l.push("v",g.jc+1-20),l.push("h",g.ka+2-8),l.push("z"),x?(c.push("M",q-10-3+8-g.ka+","+(t+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.jc-20+3),c.push("h",g.ka-8+1)):(c.push("M",q-10+1+","+(t+10+1)),c.push("v",g.jc+1),c.push("h",6-g.ka),
c.push("M",q-g.ka-10+1.8+","+(t+10+20-.4)),c.push("l","3.04,-1.8")),v=x?h.x-q-8+10+g.ka+1:h.x+q+8-10-g.ka-1,ya=h.y+t+10+1,g.n.moveTo(v,ya),g.n.m&&mh(g.n));q=Math.max(q,b.T);this.width=Math.max(this.width,q);k.push("H",q);a.push("H",q+(x?-1:0));k.push("v",e.height);x&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],v=t+18,-1!=g.align&&(m=b.T-g.$a-8-20,1==g.align?q+=m:0==g.align&&(q+=(m+q)/2)),Jj(g.oa,q,v),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),m=e.height-20,k.push("v",m),x?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",m)):(a.push("M",b.T-4.2+","+(t+20-.4)),a.push("l","3.04,-1.8")),v=h.x+(x?-b.T-1:b.T+1),ya=h.y+t,g.n.moveTo(v,ya),g.n.m&&(mh(g.n),this.width=Math.max(this.width,b.T+pi(S(g.n)).width-8+1))):5==e.type?(g=e[0],v=t+18,-1!=g.align&&(m=b.T-g.$a-20,b.kj&&(m-=8),1==g.align?q+=m:0==g.align&&(q+=(m+q)/2)),Jj(g.oa,q,v),k.push("v",e.height),x&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==y&&(k.push("v",10),x&&a.push("v",9),t+=10),v=t+18,-1!=g.align&&(m=b.Se-g.$a-20,1==g.align?q+=m:0==g.align&&(q+=
(m+q)/2)),Jj(g.oa,q,v),q=b.Se+30,k.push("H",q),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.T),x?(a.push("M",q-30+Ej+","+(t+Ej)),a.push(Gj),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.T-1)):(a.push("M",q-30+Ej+","+(t+e.height-Ej)),a.push(Hj),a.push("H",b.T)),v=h.x+(x?-q:q),ya=h.y+t+1,g.n.moveTo(v,ya),g.n.m&&(mh(g.n),this.width=Math.max(this.width,b.Se+pi(S(g.n)).width)),y==b.length-1||3==b[y+1].type)&&(k.push("v",
10),x&&a.push("v",9),t+=10);t+=e.height}b.length||(t=25,k.push("V",t),x&&a.push("V",t-1));b=t;this.height=b+1;this.J&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.J.moveTo(x?h.x-30:h.x+30,h.y+b+1),this.J.m&&mh(this.J),this.height+=4);this.kg?(k.push("H 0"),x||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),x||(a.push("M",Dj+","+(b-Dj)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.K?(this.K.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),x?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):x||(this.Re?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+l.join(" ");this.Cb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.sg.setAttribute("d",b);x&&(this.Cb.setAttribute("transform","scale(-1 1)"),this.sg.setAttribute("transform","scale(-1 1)"),this.Vh.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.C():wg(window,"resize");
jj(this)};function Jj(a,b,c){x&&(b=-b);for(var d=0,e;e=a[d];d++)x?(b-=e.Pe+e.ka,e.D().setAttribute("transform","translate("+b+", "+c+")"),e.ka&&(b-=10)):(e.D().setAttribute("transform","translate("+(b+e.Pe)+", "+c+")"),e.ka&&(b+=e.Pe+e.ka+10));return x?-b:b};/*

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
function F(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in Kj)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=Kj[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var Kj={};aa("document.documentElement.ontouchstart")&&(Kj={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function G(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function si(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function wg(a,b){setTimeout(function(){si(a,b)},0)}
function Zg(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function Dg(a){var b=0,c=0;do{var d=Zg(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=z);return{x:b,y:c}}function of(a){a=Dg(a);return cj(a.x,a.y,!1)}
function E(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Lb(a){return 2==a.button||a.ctrlKey}
function cj(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=z.createSVGPoint();d.x=a;d.y=b;a=z.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Lg(a){return cj(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function rf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function sf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||rf(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function tf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||rf(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d};/*

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
var ug="handclosed",Wg="handdelete",pj={},Lj="",Mj=null,Nj="";function Oj(){var a=Pj.join("\n");Nj=Ag.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Nj),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Mj=c.sheet;tg("hando")}
function tg(a){if(!I&&Lj!=a){Lj=a;var b="url("+Nj+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Mj||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;z&&(z.style.cursor="hando"==a?"":b)}}
var Pj=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function Qj(a,b){function c(){Rj(a);Sj()}if(!Ic(document,a))throw"Error: container is not in current document.";b&&Tj(b);if(va){var d=document.getElementById("realtime");d&&(d.style.display="block");Uj(c,a)}else c()}
function Tj(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Zf(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var l=a.scrollbars;void 0===l&&(l=c);var m=a.sounds;void 0===m&&(m=!0);var q=!!a.realtime,v=q?a.realtimeOptions:void 0;
x=!!a.rtl;ta=e;sa=g;ua=h;I=b;xa=a.maxBlocks||Infinity;a.media?Ag=a.media:a.path&&(Ag=a.path+"media/");za=c;Aa=l;qa=d;Ba=m;ra=k;va=q;wa=v}
function Rj(a){a.setAttribute("dir","LTR");Qd=x;Oj();var b=E("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=E("defs",{},b),d,e;d=E("filter",{id:"blocklyEmboss"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=E("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
E("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);E("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);E("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=E("filter",{id:"blocklyTrashcanShadowFilter"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);E("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=E("feMerge",{},d);E("feMergeNode",{"in":"offsetBlur"},d);E("feMergeNode",{"in":"SourceGraphic"},
d);d=E("filter",{id:"blocklyShadowFilter"},c);E("feGaussianBlur",{stdDeviation:2},d);c=E("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);E("rect",{width:10,height:10,fill:"#aaa"},c);E("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);J=new Ng(Vj,Wj);b.appendChild(J.H());J.Pf=xa;I||(za?J.sa=new $i(b,a):(J.ja=new hi,c=J.ja,d=c.H(),c.Td=!1,Hc(d)),Aa||Xj(function(){if(0==Mb){var a=J.wb(),b=a.Oa+a.Pa,c=a.Sb+a.Qa;if(a.Za<c||a.Za+a.Sa>a.la+c||a.sb<(x?a.Oa:
b)||a.sb+a.yc>(x?a.V:a.V+b))for(var d=Fa(J,!1),e=0,q;q=d[e];e++){var v=q.O(),t=pi(q),y=c+25-t.height-v.y;0<y&&q.moveBy(0,y);y=c+a.la-25-v.y;0>y&&q.moveBy(0,y);y=25+b-v.x-(x?0:t.width);0<y&&q.moveBy(y,0);y=b+a.V-25-v.x+(x?t.width:0);0>y&&q.moveBy(y,0)}}}));b.appendChild(Jh());a.appendChild(b);z=b;lj();pf=M("div","blocklyWidgetDiv");pf.style.direction=x?"rtl":"ltr";document.body.appendChild(pf)}
function Sj(){F(z,"mousedown",null,Yj);F(z,"contextmenu",null,Zj);F(pf,"contextmenu",null,Zj);Ca||(F(window,"resize",document,lj),F(document,"keydown",null,ak),document.addEventListener("mouseup",bk,!1),zb&&F(window,"orientationchange",document,function(){wg(window,"resize")}),Ca=!0);if(ra)if(J.sa)J.sa.I();else if(J.ja){J.ja.I(J);J.ja.show(ra.childNodes);J.scrollX=J.ja.A;x&&(J.scrollX*=-1);var a="translate("+J.scrollX+", 0)";J.aa.setAttribute("transform",a);J.Zc.setAttribute("transform",a)}Aa&&(J.Rb=
new Eg(J),J.Rb.resize());Pg();if(Ba){ck([Ag+"click.mp3",Ag+"click.wav",Ag+"click.ogg"],"click");ck([Ag+"delete.mp3",Ag+"delete.ogg",Ag+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)G(b.pop());for(var a in dk){var d=dk[a];d.volume=.01;d.play();d.pause();if(zb||yb)break}};b.push(F(document,"mousemove",null,a));b.push(F(document,"touchstart",null,a))}};/*

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
var pf=null,mf=null,ek=null;function lf(a){nf();mf=a;ek=null;pf.style.display="block"}function nf(){mf&&(pf.style.display="none",ek&&ek(),ek=mf=null,Kb(pf))}function qf(a,b,c,d){b<d.y&&(b=d.y);x?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);pf.style.left=a+"px";pf.style.top=b+"px"};/*

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
function fk(a,b,c,d){this.h=null;this.ea=Number(c);this.A=Number(b);this.Yc={height:this.ea+10,width:this.A};this.za=d||"";this.Y=E("g",{},null);this.pe=E("image",{height:this.ea+"px",width:this.A+"px",y:-12},this.Y);this.Ma(a);vb&&(this.Je=E("rect",{height:this.ea+"px",width:this.A+"px",y:-12,"fill-opacity":0},this.Y))}w(fk,Gb);f=fk.prototype;f.clone=function(){return new fk(this.Fk(),this.A,this.ea,this.nb())};f.Je=null;f.uc=!1;
f.I=function(a){this.h||(this.h=a,a.D().appendChild(this.Y),a=this.Je||this.pe,a.Aa=this.h,Kh(a))};f.k=function(){H(this.Y);this.Je=this.pe=this.Y=null};f.Xc=function(a){(this.Je||this.pe).Aa=a};f.Hc=function(){return this.Wj};f.Ma=function(a){null!==a&&(this.Wj=a,this.pe.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",p(a)?a:""))};f.La=function(a){null!==a&&(this.za=a)};f.Tc=function(){};/*

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
function gk(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=n.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var hk=gk();function W(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function ik(a){this.Ai=W(a,"clientId");this.wg=hk.userId;document.getElementById(W(a,"authButtonElementId"));document.getElementById(W(a,"authDivElementId"))}ik.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function jk(a,b,c,d){function e(c){gapi.Eb.ca.files.se({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Zb(d)}function g(){function a(b){gapi.Eb.ca.Lj.se({fileId:"appdata",resource:{key:"folderId",value:b}}).Zb(function(){e(b)})}function b(){gapi.Eb.ca.files.se({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Zb(function(b){a(b.id)})}gapi.Eb.ca.Lj.get({fileId:"appdata",propertyKey:"folderId"}).Zb(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Eb.ca.files.get({fileId:g}).Zb(function(a){a.error||
a.labels.al?b():e(g)})}})}gapi.Eb.load("drive","v2",function(){g()})}function kk(a){this.Dh=W(a,"onFileLoaded");this.yj=W(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.th=W(a,"initializeModel");this.Lh=W(a,"registerTypes",function(){});this.Bg=W(a,"afterAuth",function(){});this.ui=W(a,"autoCreate",!1);this.Ni=W(a,"defaultTitle","New Realtime File");this.Mi=W(a,"defaultFolderTitle","");this.Cg=W(a,"afterCreate",function(){});this.df=new ik(a)}
function lk(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;hk=gk();for(var e in b)gapi.ca.qb.load(b[e],a.Dh,a.th,a.ph)}kk.prototype.start=function(){var a=this;this.df.start(function(){a.Lh&&a.Lh();a.Bg&&a.Bg();a.load()})};
kk.prototype.ph=function(a){a.type!=gapi.ca.qb.yg.lk&&(a.type==gapi.ca.qb.yg.gk?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ca.qb.yg.jk&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
kk.prototype.load=function(){var a=hk.fileIds;a&&(a=a.split(","));var b=this.df.wg,b=hk.state;if(a)for(var c in a)gapi.ca.qb.load(a[c],this.Dh,this.th,this.ph);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.Ik;b=d.wg;lk(this,a,b);return}}this.ui&&mk(this)}};function mk(a){jk(a.Ni,a.yj,a.Mi,function(b){b.id?(a.Cg&&a.Cg(b.id),lk(a,[b.id],a.df.wg)):(console.error("Error creating file."),console.error(b))})};/*

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
var Rg,nk,Qg=!1,ok=null,Yh=null,pk=null,qk=null,$h=null,bi=!1,rk=null,sk=null,tk=null;function uk(a){var b=a.Si;a=a.Si.length;for(var c=0;c<a;c++){var d=b[c];if(!d.rj){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Ih?vk(function(){wk(e,!1);xk(e)}):"relativeX"!=d.Ih&&"relativeY"!=d.Ih||vk(function(){e.Wh||wk(e,!1);xk(e)}))}}}function yk(a){if(!a.rj){var b=a.newValue;b?wk(b,!a.oldValue):(b=a.oldValue,zk(b))}}function vk(a){if(bi)a();else try{bi=!0,a()}finally{bi=!1}}
function wk(a,b){vk(function(){var c=Zf(a.xg).firstChild;if(c=ag(J,c,!0))b&&c.o.dd(c),(b||pb(Rg,c))&&xk(c)})}function xk(a){if(!isNaN(a.Ke)&&!isNaN(a.Le)){var b=Sh().width,c=a.O(),d=a.Ke-c.x;a.moveBy(x?b-d:d,a.Le-c.y)}}function zk(a){vk(function(){a.k(!0,!0,!0)})}function jj(a){if(a.o==J&&Qg&&!bi){a=kh(a);var b=a.O(),c=!1,d=Wf(a);d.setAttribute("id",a.id);var e=M("xml");e.appendChild(d);d=Yf(e);d!=a.xg&&(c=!0,a.xg=d);if(a.Ke!=b.x||a.Le!=b.y)a.Ke=b.x,a.Le=b.y,c=!0;c&&$h.set(a.id.toString(),a)}}
function Ak(a,b){gapi.Eb.ca.Hh.list({fileId:a}).Zb(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Sk){b(e.domain);break}}})}
var Ek={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Yh=a;var b=a.yk();a.Fc().set("blocks",b);b=a.xk();a.Fc().set("topBlocks",b);sk&&a.Fc().set(sk,a.zk(tk))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){ok=a;a:{for(var b=a.Xi(),c=0;c<b.length;c++){var d=b[c];if(d.sj){pk=d.Vk;break a}}pk=void 0}Yh=a.Ae;$h=Yh.Fc().get("blocks");Rg=Yh.Fc().get("topBlocks");
Yh.Fc().addEventListener(gapi.ca.qb.Xe.kk,uk);$h.addEventListener(gapi.ca.qb.Xe.mk,yk);qk();a.addEventListener(gapi.ca.qb.Xe.hk,Bk);a.addEventListener(gapi.ca.qb.Xe.ik,Ck);Dk();a=Rg;for(b=0;b<a.length;b++)c=a.get(b),wk(c,!0)},registerTypes:function(){var a=gapi.ca.qb.Ak;a.Qk(wh,"Block");wh.prototype.id=a.hf("id");wh.prototype.xg=a.hf("xmlDom");wh.prototype.Ke=a.hf("relativeX");wh.prototype.Le=a.hf("relativeY");a.Wk(wh,wh.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Eb.ca.Hh.se({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Zb(function(c){c.error&&Ak(a,function(c){b=gapi.Eb.ca.Hh.se({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Zb(function(){})})})}};function Fk(){var a=wa,b=W(a,"chatbox");b&&(sk=W(b,"elementId"),tk=W(b,"initText",Gk));Ek.Ai=W(a,"clientId");nk=W(a,"collabElementId")}
function Uj(a,b){Fk();Qg=!0;Hk(b);qk=function(){a();if(sk){var b=Yh.Fc().get(sk),d=document.getElementById(sk);gapi.ca.qb.Bk.qk(b,d);d.disabled=!1}};rk=new kk(Ek);rk.start()}
function Hk(a){a.style.background="url("+Ag+"progress.gif) no-repeat center center";var b=Xc(a),c=M("div");c.id=Ek.authDivElementId;var d=M("p",null,Ik);c.appendChild(d);d=M("button",null,"Authorize");d.id=Ek.ok;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=Xc(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Dk(){if(nk){var a;a=nk;a=p(a)?document.getElementById(a):a;Kb(a);for(var b=ok.Xi(),c=0;c<b.length;c++){var d=b[c],e=M("img",{src:d.Pk||Ag+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.sj?" ("+Jk+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function Bk(){Dk()}function Ck(){Dk()}function sh(a){var b=pk+"-"+a;return $h.has(b)?sh("-"+a):b};/*

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
var Ag="https://blockly-demo.appspot.com/static/media/",yg=64,zg=92,Bg="sprites.png",eh=[,2,1,4,3],dk=Object.create(null),U=null,I=!1,bh=null,ch=null,wi=5,V=20,hh=250,kj=30,J=null,Kk=null,Mb=0,Lk=null;function Sh(){return{width:z.Hg,height:z.Gg}}function lj(){var a=z,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Hg!=c&&(a.setAttribute("width",c+"px"),a.Hg=c);a.Gg!=b&&(a.setAttribute("height",b+"px"),a.Gg=b);J.Rb&&J.Rb.resize()}
function Yj(a){lj();ti();vg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!I&&U&&b&&Ug(U);a.target==z&&Lb(a)?Mk(a):(I||b)&&J.Rb&&(J.sf=!0,J.ng=a.clientX,J.og=a.clientY,J.Yj=J.wb(),J.$j=J.scrollX,J.ak=J.scrollY,"mouseup"in Kj&&(Lk=F(document,"mouseup",null,bk)),Da=F(document,"mousemove",null,Nk))}function bk(){tg(pj.OPEN);J.sf=!1;Lk&&(G(Lk),Lk=null);Da&&(G(Da),Da=null)}
function Nk(a){if(J.sf){Mg();var b=J.Yj,c=J.$j+(a.clientX-J.ng),d=J.ak+(a.clientY-J.og),c=Math.min(c,-b.sb),d=Math.min(d,-b.Za),c=Math.max(c,b.V-b.sb-b.yc),d=Math.max(d,b.la-b.Za-b.Sa);J.Rb.set(-c-b.sb,-d-b.Za);a.stopPropagation()}}
function ak(a){if(!sg(a))if(27==a.keyCode)vg();else if(8==a.keyCode||46==a.keyCode)try{U&&U.Ac&&!I&&(vg(),U.k(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(U&&U.Ac&&!I&&U.zb&&!I&&U.o==J&&(vg(),67==a.keyCode?Ok():88==a.keyCode&&(Ok(),U.k(!0,!0))),86==a.keyCode&&Kk){a=J;var b=Kk;if(!(b.getElementsByTagName("block").length>=Ha(a))){var c=ag(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){x&&(d=-d);do for(var e=!1,g=a.vb(),
h=0,k;k=g[h];h++)k=k.O(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=x?d-V:d+V,b+=2*V,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function ti(){hj&&(G(hj),hj=null);ij&&(G(ij),ij=null);var a=U;if(2==Mb&&a){var b=a.O();nh(a,b.x-a.Th,b.y-a.Uh);delete a.ae;Cj(a,!1);a.C();Cf(a.Ca,hh,a);wg(window,"resize");a.o.lb()}Mb=0;tg(pj.OPEN);vi()}function Ok(){var a=U,b=Wf(a);hg(b);a=a.O();b.setAttribute("x",x?-a.x:a.x);b.setAttribute("y",a.y);Kk=b}
function Mk(a){if(!I){var b=[];if(ta){for(var c=!1,d=!1,e=Fa(J,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Xf(h);d={enabled:d};d.text=Pk;d.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!0),a),c=Xf(c),a+=10};b.push(d);c={enabled:c};c.text=Qk;c.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!1),a),c=Xf(c),a+=10};b.push(c)}gj.show(a,b)}}function Zj(a){sg(a)||a.preventDefault()}
function vg(a){Oh();nf();!a&&J.sa&&J.sa.ja&&J.sa.ja.Td&&J.sa.Ld.oc(null)}function Mg(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function sg(a){return"textarea"==a.target.type||"text"==a.target.type}
function ck(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(dk[b]=c)}}function nj(a,b){var c=dk[a];c&&(c=Eb&&9===Eb||zb||xb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Vj(){var a=Sh();J.sa&&(a.width-=J.sa.width);var b=a.width-T,c=a.height-T;try{var d=J.aa.getBBox()}catch(e){return null}if(J.Rb)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!x&&J.sa&&(d=J.sa.width);return{la:a.height,V:a.width,Sa:c-h,yc:b-g,Sb:-J.scrollY,Oa:-J.scrollX,Za:h,sb:g,Qa:0,Pa:d}}
function Wj(a){if(!J.Rb)throw"Attempt to set main workspace scroll without scrollbars.";var b=Vj();r(a.x)&&(J.scrollX=-b.yc*a.x-b.sb);r(a.y)&&(J.scrollY=-b.Sa*a.y-b.Za);a="translate("+(J.scrollX+b.Pa)+","+(J.scrollY+b.Qa)+")";J.aa.setAttribute("transform",a);J.Zc.setAttribute("transform",a)}function mj(a){a()}function Xj(a){return F(J.aa,"blocklyWorkspaceChange",null,a)}n.Blockly||(n.Blockly={});n.Blockly.getMainWorkspace=function(){return J};n.Blockly.addChangeListener=Xj;
n.Blockly.removeChangeListener=function(a){G(a)};function Rk(a,b){var c;c=a.className;for(var d=c=p(c)&&c.match(/\S+/g)||[],e=tb(arguments,1),g=0;g<e.length;g++)pb(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var Sk={},Tk={en:"English"},Uk=[],Vk=window.BlocklyGamesLang,Wk=window.BlocklyGamesLanguages,Xk=!!window.location.pathname.match(/\.html$/);function Yk(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var R,Zk=Number(Yk("level","NaN"));R=isNaN(Zk)?1:Math.min(Math.max(1,Zk),10);
function $k(){document.head.parentElement.setAttribute("dir",-1!=Uk.indexOf(Vk)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",Vk);for(var a=[],b=0;b<Wk.length;b++){var c=Wk[b];a.push([Tk[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==Vk&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!al(b),a&&c&&Rk(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(bl,1)}function al(a){var b=cl,c;try{c=window.localStorage[b+a]}catch(d){}return c}function X(a){var b=dl(a);return null===b?"[Unknown message: "+a+"]":b}function dl(a){return(a=document.getElementById(a))?(a=a.textContent,a=a.replace(/\\n/g,"\n")):null}
function el(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function bl(){if(!Xk){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};K.animal={I:function(){this.Vc(185);Vh(fi(this,5,""),"","NAME");Vh(Xh(fi(this,1,"PIC"),1),X("Puzzle_picture"));Vh(Vh(Xh(fi(this,5,""),1),X("Puzzle_legs")),new gf(fl),"LEGS")},Qc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ra);return a},hd:function(a){this.fc(parseInt(a.getAttribute("animal"),10))},Ra:0,fc:function(a){this.Ra=a;var b=X("Puzzle_animal"+a).toUpperCase();Sb(this,"NAME").Ma(b);this.Kb=X("Puzzle_animal"+a+"HelpUrl")},Kf:function(){var a=Sb(this,"LEGS");
return(a?a.Hc():null)==this.Ra}};K.picture={I:function(){this.Vc(348);fi(this,5,"PIC");th(this);this.Xc("")},Qc:K.animal.Qc,hd:K.animal.hd,Ra:0,fc:function(a){this.Ra=a;var b="puzzle/"+X("Puzzle_animal"+a+"Pic"),c=X("Puzzle_animal"+a+"PicHeight");a=X("Puzzle_animal"+a+"PicWidth");Vh(fg(this,"PIC"),new fk(b,a,c))},Kf:function(){var a=this.getParent();return a&&a.Ra==this.Ra}};
K.trait={I:function(){this.Vc(18);Vh(fi(this,5,""),"","NAME");uh(this,!0);vh(this,!0)},Qc:function(){var a=document.createElement("mutation");a.setAttribute("animal",this.Ra);a.setAttribute("trait",this.Zh);return a},hd:function(a){this.fc(parseInt(a.getAttribute("animal"),10),parseInt(a.getAttribute("trait"),10))},Ra:0,Zh:0,fc:function(a,b){this.Ra=a;this.Zh=b;var c=X("Puzzle_animal"+a+"Trait"+b);Sb(this,"NAME").Ma(c)},Kf:function(){var a=ci(this);return a&&a.Ra==this.Ra}};var sj="Add Comment",Ik="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",Gk="Chat with your collaborator by typing in this box!",Pk="Collapse Blocks",wj="Collapse Block",zj="Delete Block",Aj="Delete %1 Blocks",yj="Disable Block",qj="Duplicate",xj="Enable Block",Qk="Expand Blocks",vj="Expand Block",tj="External Inputs",Bj="Help",uj="Inline Inputs",Jk="Me",rj="Remove Comment";var Y={Dc:null,I:function(){$k();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=X("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=X("Games_linkAlert"),BlocklyStorage.HASH_ERROR=X("Games_hashError"),BlocklyStorage.XML_ERROR=X("Games_xmlError"),BlocklyStorage.alert=Sk.bk,a&&el(a,BlocklyStorage.link),b&&el(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
Y.zi,!0)},oj:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Qj(a,{media:"media/",readOnly:!0,Tk:-1!=Uk.indexOf(Vk),scrollbars:!1});a=Yk("xml","");Y.gg("<xml>"+a+"</xml>")},Mk:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.xe}catch(d){}c&&delete window.sessionStorage.xe;var e=al(R),g=b&&al(R-1);(c=c||
e||g||a)&&Y.gg(c)}},gg:function(a){Y.Dc?Y.Dc.setValue(a,-1):(a=Zf(a),$f(J,a))},Rj:function(){if(void 0!=typeof pa&&window.localStorage){var a=cl+R;if(Y.Dc)var b=Y.Dc.getValue();else b=Vf(J),b=Yf(b);window.localStorage[a]=b}},qe:function(){window.location=(Xk?"index.html":"./")+"?lang="+Vk},zi:function(){if(window.sessionStorage){if(Y.Dc)var a=Y.Dc.getValue();else a=Vf(J),a=Yf(a);window.sessionStorage.xe=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),
b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},sh:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Tg(a)},Zk:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Gb:function(a){if("click"==a.type&&"touchend"==Y.Gb.Zf&&Y.Gb.Yf+2E3>Date.now()||Y.Gb.Zf==a.type&&Y.Gb.Yf+400>Date.now())return a.preventDefault(),
a.stopPropagation(),!0;Y.Gb.Zf=a.type;Y.Gb.Yf=Date.now();return!1}};Y.Gb.Zf=null;Y.Gb.Yf=0;Y.Jk=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
Y.Kk=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=Y;Y.setCode=Y.gg;var Z={yb:!1,bh:null,Zd:null,pc:function(a,b,c,d,e,g){function h(){Z.yb&&(k.style.visibility="visible",k.style.zIndex=10,l.style.visibility="hidden")}Z.yb&&Z.Ha(!1);vg(!0);Z.yb=!0;Z.bh=b;Z.Zd=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var l=document.getElementById("dialogBorder"),m;for(m in e)k.style[m]=e[m];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Z.of=F(d,"mousedown",
null,Z.Oi));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Z.ye(b,!1,.2),Z.ye(k,!0,.8),setTimeout(h,175)):h()},dh:0,eh:0,Oi:function(a){Z.rf();if(!Lb(a)){var b=document.getElementById("dialog");Z.dh=b.offsetLeft-a.clientX;Z.eh=b.offsetTop-a.clientY;Z.qf=F(document,"mouseup",null,Z.rf);Z.pf=F(document,"mousemove",null,Z.Pi);a.stopPropagation()}},Pi:function(a){var b=document.getElementById("dialog"),c=Z.dh+a.clientX;a=Z.eh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},rf:function(){Z.qf&&(G(Z.qf),Z.qf=null);Z.pf&&(G(Z.pf),Z.pf=null)},Ha:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Z.yb){Z.rf();Z.of&&(G(Z.of),Z.of=null);Z.yb=!1;Z.Zd&&Z.Zd();Z.Zd=null;var c=!1===a?null:Z.bh;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Z.ye(a,!1,.8),Z.ye(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},ye:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Z.Wi(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Wi:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=of(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},bk:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Z.pc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Z.pg);Z.mg()},ni:function(){if(!al(R))if(Z.yb||0!=wh.Dk)setTimeout(Z.ni,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("abortOk");b.addEventListener("click",Y.qe,!0);b.addEventListener("touchend",Y.qe,
!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.Ag,!0)});document.body.addEventListener("keydown",Z.Ag,!0)}},Lk:function(){var a=document.getElementById("dialogDone");J&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("dialogCongrats");a.removeChild(b);b=document.getElementById("containerCode");a.removeChild(b);10>R?X("Games_nextLevel").replace("%1",R+
1):X("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("doneOk");1==R&&(b.addEventListener("click",function(){window.open("/puzzle","_self")},!0),b.addEventListener("touchend",function(){window.open("/puzzle","_self")},!0));2==R&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));3==R&&(b.addEventListener("click",
function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.xc,!0)});document.body.addEventListener("keydown",Z.xc,!0)}};
window.Bc=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.Bc.qj||window.Bc.tj){var b=document.createElement("a");b.href=a;void 0!==b.Qi&&(b.Qi="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.Bc.qj=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.Bc.tj=-1<navigator.userAgent.toLowerCase().indexOf("safari");
Z.Ck=function(){var a=document.getElementById("dialogDone");J&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "Save" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Z.Ha,!0);b.addEventListener("touchend",Z.Ha,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"Save";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{Gj:function(a){a=a.toDataURL("image/png");window.Bc(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{Gj:function(a){a=a.toDataURL("image/png");window.Bc(a)}})},!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",Z.xc,!0)});document.body.addEventListener("keydown",Z.xc,!0)};Z.Nk=function(){document.getElementById("login")};
Z.Bi=function(){var a=document.getElementById("dialogDone");if(J){document.getElementById("dialogLinesText").textContent="";var b=10>R?X("Games_nextLevel").replace("%1",R+1):X("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==cl?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/>":"turtle"==cl&&1==R?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/>":
"turtle"==cl&&2==R&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/earrings.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/>")}c=document.getElementById("doneCancel");c.addEventListener("click",Z.Ha,!0);c.addEventListener("touchend",Z.Ha,!0);c=document.getElementById("doneOk");c.addEventListener("click",Y.Rf,!0);c.addEventListener("touchend",Y.Rf,!0);Z.pc(a,null,!1,!0,{width:"40%",left:"30%",top:"3em"},function(){document.body.removeEventListener("keydown",
Z.xc,!0)});document.body.addEventListener("keydown",Z.xc,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==cl&&1==R&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};Z.ah=function(a){!Z.yb||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Z.Ha(!0),a.stopPropagation(),a.preventDefault())};Z.mg=function(){document.body.addEventListener("keydown",Z.ah,!0)};
Z.pg=function(){document.body.removeEventListener("keydown",Z.ah,!0)};Z.xc=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.Rf()};Z.Ag=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Z.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&Y.qe()};window.BlocklyDialogs=Z;Z.hideDialog=Z.Ha;var gl={Uk:!0};B&&D(8);var hl={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function il(a){return hl[a]}var jl=/[\x00\x22\x26\x27\x3c\x3e]/g;function kl(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function ll(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Puzzle_animal1">Elephant</span><span id="Puzzle_animal1Pic">elephant.png</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Elephant</span><span id="Puzzle_animal2">Ladybug</span><span id="Puzzle_animal2Pic">ladybug.png</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Coccinellidae</span><span id="Puzzle_animal3">Goldfish</span><span id="Puzzle_animal3Pic">goldfish.png</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Fish</span><span id="Puzzle_animal4">Penguin</span><span id="Puzzle_animal4Pic">penguin.png</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Penguin</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>'}
function ml(){var a=ll()+'<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout</button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button><button id="checkButton" class="primary">Check Answers</button></div></div><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+kl()+"</div>")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (blue), attach its picture and choose its number of legs.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?app=puzzle&lang=',b;b=Vk&&Vk.Di&&Vk.Di===gl?Vk.content:String(Vk).replace(jl,il);return a+b+'&xml=%3Cblock+type%3D%22animal%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LEGS%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22PIC%22%3E%3Cblock+type%3D%22picture%22%3E%3Cmutation+animal%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22TRAITS%22%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22trait%22%3E%3Cmutation+animal%3D%221%22+trait%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>'+
kl()+'</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>'+kl()+"</div>"};var cl="puzzle";Y.Rf=function(){window.location=window.location.protocol+"//"+window.location.host+"/movie?lang="+Vk+"&level="+(R+1)};
function nl(){function a(){c.style.width=window.innerWidth-20+"px";c.style.height=window.innerHeight-c.offsetTop-15+"px"}document.body.innerHTML=ml();Y.I();var b=-1!=Uk.indexOf(Vk),c=document.getElementById("blockly");a();window.addEventListener("resize",a);Qj(document.getElementById("blockly"),{media:"media/",rtl:b,scrollbars:!1,trashcan:!1});var d=al(R);try{var e=window.sessionStorage.xe}catch(g){e=null}if(e)delete window.sessionStorage.xe,b=Zf(e),$f(J,b);else if(d)b=Zf(d),$f(J,b);else{for(var h=
[],k=[],l=[],e=1;dl("Puzzle_animal"+e);){var m=Rb(J,"animal");m.fc(e);h.push(m);m=Rb(J,"picture");m.fc(e);k.push(m);for(var q=1;dl("Puzzle_animal"+e+"Trait"+q);)m=Rb(J,"trait"),m.fc(e,q),l.push(m),q++;e++}ol(h);ol(k);ol(l);h=[].concat(h,k,l);b&&h.reverse();for(e=0;m=h[e];e++)dg(m,!1),m.eb(),m.C();for(e=k=0;m=h[e];e++){var v=m.D().getBBox();m.tk=v.width;m.sk=v.height;m.Ig=v.width*v.height;k+=m.Ig}lj();l=Sh();l.width-=50;l.height-=50;for(e=q=0;m=h[e];e++){var v=m.D().getBBox(),t=b?v.width+q/k*l.width:
q/k*(l.width-v.width),t=Math.round(t+50*Math.random()),v=Math.round(Math.random()*(l.height-v.height));m.moveBy(t,v);q+=m.Ig}}el("checkButton",pl);el("helpButton",function(){ql(!0)});d||ql(!1);if(C){h=J.vb();for(e=0;m=h[e];e++)m.select();Ug(U)}V*=2;ck(["puzzle/win.mp3","puzzle/win.ogg"],"win")}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){Y.oj(ll()+'<div id="blockly"></div>')}):window.addEventListener("load",nl);
function ol(a){for(var b=a.length-1;0<b;b--){var c=Math.floor(Math.random()*(b+1)),d=a[b];a[b]=a[c];a[c]=d}}function fl(){for(var a=[[X("Puzzle_legsChoose"),"0"]],b=1,c;c=dl("Puzzle_animal"+b+"Legs");)a[b]=[c,String(b)],b++;a.sort(function(a,b){return a[0]-b[0]});return a}
function pl(){for(var a=J.vb(),b=0,c=[],d=0,e;e=a[d];d++)e.Kf()||(b++,e.select(),c.push(e));var g=document.getElementById("graphValue");setTimeout(function(){g.style.width=100*(a.length-b)/a.length+"px"},500);1==b?d=[X("Puzzle_error1"),X("Puzzle_tryAgain")]:b?d=[X("Puzzle_error2").replace("%1",b),X("Puzzle_tryAgain")]:(d=[X("Puzzle_error0").replace("%1",a.length)],Y.Rj(),document.getElementsByClassName("secondary").addEventListener("click",Z.Bi()));e=document.getElementById("answerMessage");e.textContent=
"";for(var h=0;h<d.length;h++){var k=document.createElement("div");k.appendChild(document.createTextNode(d[h]));e.appendChild(k)}d=document.getElementById("answers");e=document.getElementById("checkButton");Z.pc(d,e,!0,!0,{width:"25%",left:-1!=Uk.indexOf(Vk)?"5%":"70%",top:"5em"},b?Z.pg:Y.qe);Z.mg();if(c.length){ol(c);var l=c[0],m=function(){l.select();Z.yb&&(setTimeout(function(){Ug(l)},150),setTimeout(m,300))};m()}else setTimeout(rl,2E3),U&&Ug(U)}
function rl(){nj("win",.5);for(var a=Fa(J,!1),b=0,c;c=a[b];b++)sl(c,b/a.length*360)}
function sl(a,b){if(Z.yb){var c=J.wb(),d=c.la/2,e=c.V/2,c=a.O(),g=pi(a),h=Math.max(175,Math.min(d,e)-Math.max(g.height,g.width)/2),k=Date.now(),l=b+k/50%360,h=h*(Math.sin(k%5E3/5E3*2*Math.PI)/8+.875),e=h*Math.cos(l*Math.PI/180)+e-g.width/2,g=h*Math.sin(l*Math.PI/180)+d-g.height/2;5>Math.sqrt(Math.pow(e-c.x,2)+Math.pow(g-c.y,2))?(d=e-c.x,c=g-c.y):(c=180*Math.atan2(g-c.y,e-c.x)/Math.PI%360,c=0>360*c?c+360:c,d=Math.round(5*Math.cos(c*Math.PI/180)),c=Math.round(5*Math.sin(c*Math.PI/180)));a.moveBy(d,
c);setTimeout(sl.bind(null,a,b),50)}}function ql(a){var b=document.getElementById("help"),c=document.getElementById("helpButton");Z.pc(b,c,a,!0,{width:"50%",left:"25%",top:"5em"},Z.pg);Z.mg()};
