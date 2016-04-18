// Automatically generated file.  Do not edit!
'use strict';var f,l=this;function aa(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.tc=function(){return a.bj?a.bj:a.bj=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function m(a){return"string"==typeof a}function n(a){return"number"==typeof a}function ga(a){return"function"==da(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a){return a[ja]||(a[ja]=++ka)}var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;
function la(a,b,c){return a.call.apply(a.bind,arguments)}function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function na(a,b,c){na=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return na.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var pa=Date.now||function(){return+new Date};function q(a,b){function c(){}c.prototype=b.prototype;a.k=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ln=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function qa(a,b){null!=a&&this.append.apply(this,arguments)}f=qa.prototype;f.oa="";f.set=function(a){this.oa=""+a};f.append=function(a,b,c){this.oa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.oa+=arguments[d];return this};f.clear=function(){this.oa=""};f.toString=function(){return this.oa};var ra;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}q(sa,Error);sa.prototype.name="CustomError";function ta(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ua(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function wa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function xa(a){if(!ya.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(za,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Aa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ba,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ca,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Da,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ea,"&#0;"));return a}var za=/&/g,Aa=/</g,Ba=/>/g,Ca=/"/g,Da=/'/g,Ea=/\x00/g,ya=/[\x00&<>"']/;
function Fa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Ga,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Ha(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Ga=/&([^;\s<&]+);?/g;function Ia(a,b){return a<b?-1:a>b?1:0};function Ja(a,b){b.unshift(a);sa.call(this,ta.apply(null,b));b.shift()}q(Ja,sa);Ja.prototype.name="AssertionError";function Ka(a,b){throw new Ja("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function La(){this.Nh="";this.pk=Ma}La.prototype.Ed=!0;La.prototype.Bd=function(){return this.Nh};La.prototype.toString=function(){return"Const{"+this.Nh+"}"};function Na(a){if(a instanceof La&&a.constructor===La&&a.pk===Ma)return a.Nh;Ka("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Ma={};function Oa(){this.Bc="";this.lk=Pa}f=Oa.prototype;f.Ed=!0;f.Bd=function(){return this.Bc};f.$g=!0;f.je=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Bc+"}"};var Pa={};var Qa=Array.prototype,Ra=Qa.indexOf?function(a,b,c){return Qa.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Sa=Qa.forEach?function(a,b,c){Qa.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},Ta=Qa.filter?function(a,b,c){return Qa.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=
0,h=m(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var p=h[k];b.call(c,p,k,a)&&(e[g++]=p)}return e},Ua=Qa.map?function(a,b,c){return Qa.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=m(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},Va=Qa.every?function(a,b,c){return Qa.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function Xa(a,b){return 0<=Ra(a,b)}
function Ya(a,b){var c=Ra(a,b),d;(d=0<=c)&&Qa.splice.call(a,c,1);return d}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function $a(a,b,c,d){Qa.splice.apply(a,ab(arguments,1))}function ab(a,b,c){return 2>=arguments.length?Qa.slice.call(a,b):Qa.slice.call(a,b,c)};function bb(){this.Rf="";this.kk=cb}bb.prototype.Ed=!0;var cb={};bb.prototype.Bd=function(){return this.Rf};bb.prototype.toString=function(){return"SafeStyle{"+this.Rf+"}"};function db(a){var b=new bb;b.Rf=a;return b}var eb=db("");
function fb(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof La?d=Na(d):gb.test(d)||(Ka("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?db(b):eb}var gb=/^[-.%_!# a-zA-Z0-9]+$/;function hb(){this.th="";this.rk=ib}f=hb.prototype;f.Ed=!0;f.Bd=function(){return this.th};f.$g=!0;f.je=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.th+"}"};var ib={};function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<kb.length;g++)c=kb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var nb=mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ob(){this.Bc="";this.jk=pb;this.Ni=null}f=ob.prototype;f.$g=!0;f.je=function(){return this.Ni};f.Ed=!0;f.Bd=function(){return this.Bc};f.toString=function(){return"SafeHtml{"+this.Bc+"}"};function qb(a){if(a instanceof ob&&a.constructor===ob&&a.jk===pb)return a.Bc;Ka("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function rb(a){if(a instanceof ob)return a;var b=null;a.$g&&(b=a.je());return sb(xa(a.Ed?a.Bd():String(a)),b)}
var tb=/^[a-zA-Z0-9-]+$/,ub=mb("action","cite","data","formaction","href","manifest","poster","src"),vb=mb("embed","iframe","link","object","script","style","template");
function wb(a,b,c){if(!tb.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in vb)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!tb.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,p=a;k=g;if(h instanceof La)h=Na(h);else if("style"==k.toLowerCase()){if(!ha(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof bb||
(h=fb(h));p=void 0;h instanceof bb&&h.constructor===bb&&h.kk===cb?p=h.Rf:(Ka("expected object of type SafeStyle, got '"+h+"'"),p="type_error:SafeStyle");h=p}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in ub)if(h instanceof hb)h instanceof hb&&h.constructor===hb&&h.rk===ib?h=h.th:(Ka("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Oa)h instanceof Oa&&h.constructor===
Oa&&h.lk===Pa?h=h.Bc:(Ka("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+p+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Ed&&(h=h.Bd());k=k+'="'+xa(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===nb[a.toLowerCase()]?e+=">":(d=xb(c),e+=">"+qb(d)+"</"+a+">",d=d.je());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return sb(e,d)}
function xb(a){function b(a){ea(a)?Sa(a,b):(a=rb(a),d+=qb(a),a=a.je(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";Sa(arguments,b);return sb(d,c)}var pb={};function sb(a,b){var c=new ob;c.Bc=a;c.Ni=b;return c}var yb=sb("",0);var zb;a:{var Ab=l.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""}function Cb(a){return-1!=zb.indexOf(a)};var Db=Cb("Opera")||Cb("OPR"),r=Cb("Trident")||Cb("MSIE"),Eb=Cb("Gecko")&&-1==zb.toLowerCase().indexOf("webkit")&&!(Cb("Trident")||Cb("MSIE")),u=-1!=zb.toLowerCase().indexOf("webkit"),Fb=u&&Cb("Mobile"),Gb=Cb("Macintosh"),Hb=Cb("Android"),Ib=Cb("iPhone")&&!Cb("iPod")&&!Cb("iPad"),Jb=Cb("iPad");function Kb(){var a=l.document;return a?a.documentMode:void 0}
var Lb=function(){var a="",b;if(Db&&l.opera)return a=l.opera.version,ga(a)?a():a;Eb?b=/rv\:([^\);]+)(\)|;)/:r?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:u&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(zb))?a[1]:"");return r&&(b=Kb(),b>parseFloat(a))?String(b):a}(),Nb={};
function Ob(a){var b;if(!(b=Nb[a])){b=0;for(var c=va(String(Lb)).split("."),d=va(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var t=p.exec(h)||["","",""],C=y.exec(k)||["","",""];if(0==t[0].length&&0==C[0].length)break;b=Ia(0==t[1].length?0:parseInt(t[1],10),0==C[1].length?0:parseInt(C[1],10))||Ia(0==t[2].length,0==C[2].length)||Ia(t[2],C[2])}while(0==b)}b=Nb[a]=0<=b}return b}
var Pb=l.document,Qb=Pb&&r?Kb()||("CSS1Compat"==Pb.compatMode?parseInt(Lb,10):5):void 0;function Rb(a,b){this.width=a;this.height=b}f=Rb.prototype;f.clone=function(){return new Rb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.dj=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=n(b)?b:a;this.width*=a;this.height*=c;return this};function Sb(a,b){a.innerHTML=qb(b)};var Tb=!r||r&&9<=Qb,Ub=!Eb&&!r||r&&r&&9<=Qb||Eb&&Ob("1.9.1"),Vb=r&&!Ob("9");function Wb(a,b,c){return Math.min(Math.max(a,b),c)}function Xb(a){a%=360;return 0>360*a?a+360:a}function Yb(a){return a*Math.PI/180};function v(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=v.prototype;f.clone=function(){return new v(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};function Zb(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof v?(this.x+=a.x,this.y+=a.y):(this.x+=a,n(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=n(b)?b:a;this.x*=a;this.y*=c;return this};function $b(a){return a?new ac(bc(a)):ra||(ra=new ac)}function cc(a,b){jb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in dc?a.setAttribute(dc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var dc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ec(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Rb(a.clientWidth,a.clientHeight)}function w(a,b,c){return fc(document,arguments)}
function fc(a,b){var c=b[0],d=b[1];if(!Tb&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',xa(d.name),'"');if(d.type){c.push(' type="',xa(d.type),'"');var e={};lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(m(d)?c.className=d:ea(d)?c.className=d.join(" "):cc(c,d));2<b.length&&gc(a,c,b,2);return c}
function gc(a,b,c,d){function e(c){c&&b.appendChild(m(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ha(g)&&0<g.nodeType?e(g):Sa(hc(g)?Za(g):g,e)}}function ic(a){for(var b;b=a.firstChild;)a.removeChild(b)}function jc(a){var b=x.j;b.parentNode&&b.parentNode.insertBefore(a,b)}function kc(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function lc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function bc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var mc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},nc={IMG:" ",BR:"\n"};function oc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function pc(a){a=a.tabIndex;return n(a)&&0<=a&&32768>a}
function qc(a){var b=[];rc(a,b,!1);return b.join("")}function rc(a,b,c){if(!(a.nodeName in mc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in nc)b.push(nc[a.nodeName]);else for(a=a.firstChild;a;)rc(a,b,c),a=a.nextSibling}function hc(a){if(a&&"number"==typeof a.length){if(ha(a))return"function"==typeof a.item||"string"==typeof a.item;if(ga(a))return"function"==typeof a.item}return!1}
function ac(a){this.cc=a||l.document||document}f=ac.prototype;f.Eb=$b;f.o=function(a){return m(a)?this.cc.getElementById(a):a};f.P=function(a,b,c){return fc(this.cc,arguments)};f.createElement=function(a){return this.cc.createElement(a)};f.createTextNode=function(a){return this.cc.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){gc(bc(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.zj=ic;f.removeNode=kc;f.Qc=function(a){return Ub&&void 0!=a.children?a.children:Ta(a.childNodes,function(a){return 1==a.nodeType})};f.contains=lc;f.xc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!oc(a)||pc(a)):oc(a)&&pc(a))&&r?(a=ga(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};r&&Ob(8);var sc={};function tc(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};var uc,A;function vc(){var a=B;return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_dress">Dress</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Pond_playerName">Player</span><span id="Pond_targetName">Target</span><span id="Pond_rabbitName">Rabbit</span><span id="Pond_counterName">Counter</span><span id="Pond_rookName">Rook</span><span id="Pond_sniperName">Sniper</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span></div><div style="display: none"></div><div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select><button id="signoutButton" onClick="location.href=\'/\'">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp;<i class="fa fa-question"></i></button></div></div><div id="workspace"><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table></div><div id="dialogDocs"><img src="media/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>'+
('<xml id="toolbox" style="display: none"><category name="Clothes"><block type="tshirt"></block><block type="skirt"></block><block type="boots"></block></category><category name="Accessories"><block type="mask"></block><block type="gloves"></block><block type="cape"></block><block type="logo"></block><block type="belt"></block><block type="shield"></block></category>'+(2<=a?'<category name="Logic">'+(5<=a?'<block type="pond_controls_if"></block><block type="logic_compare"></block>':"")+(7<=a?'<block type="logic_operation"></block>':
"")+'<block type="logic_boolean"></block></category><category name="Loops"><block type="pond_loops_while"></block></category>':"")+(7<=a?'<category name="Variables" custom="VARIABLE"></category>'+(8<=a?'<category name="Functions" custom="PROCEDURE"></category>':""):"")+"</xml>")+'<div id="blockly"></div></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+tc()+"</div>")+(3==a?'<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>'+tc()+"</div>":"")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+(1==a?'<h3> Grace needs your help getting dressed for a mission! </h3>Put Grace\'s superhero outfit on in the correct order.<br><br><img src="pond/docs/order.png" width=146 style="margin-top:-10px;margin-bottom: -50px">':
"")+"</div>"+tc()+"</div>"};/*

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
var wc={},D,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc;function Lc(a){this.Aj=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Aj[a[b]]=!0}this.reset()}Lc.prototype.reset=function(){this.Eg=Object.create(null);this.Gi=Object.create(null)};Lc.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.Eg)return this.Eg[c];var d=Mc(this,a);return this.Eg[c]=d};
function Mc(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.Gi[c+d]||c+d in a.Aj;)d=d?d+1:2;c+=d;a.Gi[c]=!0;return c}function Nc(a,b){return a.toLowerCase()==b.toLowerCase()};/*

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
function Oc(){this.Pd=[]}f=Oc.prototype;f.w=!1;f.hh=Infinity;f.i=function(){this.clear()};f.Zd=function(a){this.Pd.push(a);this.nb()};f.Zf=function(a){for(var b=!1,c,d=0;c=this.Pd[d];d++)if(c==a){this.Pd.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.nb()};function Pc(a,b){var c=[].concat(a.Pd);if(b&&1<c.length){var d=Math.sin(Yb(3));D&&(d*=-1);c.sort(function(a,b){var c=a.ba(),k=b.ba();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.eb=function(){for(var a=Pc(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].Qc());return a};f.clear=function(){for(;this.Pd.length;)this.Pd[0].i()};f.uf=function(){return 0};function Qc(a,b){for(var c=a.eb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Rc(a){return Infinity==a.hh?Infinity:a.hh-a.eb().length}f.nb=function(){};/*

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
function Sc(a){this.jd=new Rb(0,25);this.V(a)}f=Sc.prototype;f.h=null;f.ga=!0;f.clone=function(){Ka("There should never be an instance of Field, only its derived classes.")};f.md=!0;f.g=function(a){this.h||(this.h=a,this.ea=E("g",{},null),this.Jc=E("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.ea),this.ca=E("text",{"class":"blocklyText"},this.ea),this.kc(),a.T().appendChild(this.ea),this.ih=F(this.ea,"mouseup",this,this.mh),Tc(this))};
f.i=function(){this.ih&&(H(this.ih),this.ih=null);this.h=null;kc(this.ea);this.Jc=this.ca=this.ea=null};f.kc=function(){this.md&&(this.h.rc&&!I?(Uc(this.ea,"blocklyEditableText"),Vc(this.ea,"blocklyNoNEditableText"),this.ea.style.cursor=this.kg):(Uc(this.ea,"blocklyNonEditableText"),Vc(this.ea,"blocklyEditableText"),this.ea.style.cursor=""))};f.J=function(){return this.ga};f.L=function(a){if(this.ga!=a){this.ga=a;var b=this.T();b&&(b.style.display=a?"block":"none",this.Md())}};f.T=function(){return this.ea};
f.Md=function(){if(this.ga){try{var a=this.ca.getComputedTextLength()}catch(b){a=8*this.ca.textContent.length}this.Jc&&this.Jc.setAttribute("width",a+10)}else a=0;this.jd.width=a};f.Vi=function(){this.jd.width||this.Md();return this.jd};f.Ga=function(){return this.ya};f.V=function(a){null!==a&&a!==this.ya&&(this.ya=a,Tc(this),this.h&&this.h.w&&(this.h.C(),this.h.ua(),this.h.p.nb()))};
function Tc(a){if(a.ca){var b=a.ya;ic(a.ca);b=b.replace(/\s/g,"\u00a0");D&&b&&(b+="\u200f");b||(b="\u00a0");a.ca.appendChild(document.createTextNode(b));a.jd.width=0}}f.pb=function(){return this.Ga()};f.Ya=function(a){this.V(a)};f.mh=function(a){if(!Ib&&!Jb||0===a.layerX||0===a.layerY)Wc(a)||2!=Xc&&this.h.rc&&!I&&this.Ge()};f.m=function(){};/*

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
function Yc(){for(var a=x.eb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].tf;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Zc);b.sort(Zc);return[c,b]}function Zc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}function $c(a,b){if(b.Sb)return a;for(;!ad(a,b.p,b);){var c=a.match(/^(.*?)(\d+)$/);a=c?c[1]+(parseInt(c[2],10)+1):a+"2"}return a}
function ad(a,b,c){b=b.eb();for(var d=0;d<b.length;d++)if(b[d]!=c){var e=b[d].tf;if(e&&(e=e.call(b[d]),Nc(e[0],a)))return!1}return!0}function bd(a){a=a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"");a=$c(a,this.h);for(var b=this.h.p.eb(),c=0;c<b.length;c++){var d=b[c].vh;d&&d.call(b[c],this.ya,a)}return a}
function cd(a,b,c,d){function e(e,g){for(var p=0;p<e.length;p++){var y=dd(d,g);ed(y,e[p][0],"NAME");for(var t=[],C=0;C<e[p][1].length;C++)t[C]="ARG"+C;y.Jb(e[p][1],t);y.Ha();a.push(y);b.push(2*c)}}if(J.procedures_defnoreturn){var g=dd(d,"procedures_defnoreturn");g.Ha();a.push(g);b.push(2*c)}J.procedures_defreturn&&(g=dd(d,"procedures_defreturn"),g.Ha(),a.push(g),b.push(2*c));J.procedures_ifreturn&&(g=dd(d,"procedures_ifreturn"),g.Ha(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=Yc();e(g[0],
"procedures_callnoreturn");e(g[1],"procedures_callreturn")}function fd(a,b){for(var c=[],d=b.eb(),e=0;e<d.length;e++){var g=d[e].zd;g&&(g=g.call(d[e]))&&Nc(g,a)&&c.push(d[e])}return c}function gd(a,b,c,d){a=fd(a,b);for(b=0;b<a.length;b++)a[b].Jb(c,d)}function hd(a,b){for(var c=b.eb(),d=0;d<c.length;d++){var e=c[d].tf;if(e&&(e=e.call(c[d]))&&Nc(e[0],a))return c[d]}return null};function id(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=id.prototype;f.uf=function(){return this.right-this.left};f.clone=function(){return new id(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof id?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ha(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof v?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,n(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=n(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function jd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=jd.prototype;f.clone=function(){return new jd(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof jd?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Vi=function(){return new Rb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof v?(this.left+=a.x,this.top+=a.y):(this.left+=a,n(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=n(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function kd(a,b){var c=bc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function ld(a,b){return kd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function md(){var a=document,b=a.body,a=a.documentElement;return new v(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function nd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}r&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function od(a){if(r&&!(r&&8<=Qb))return a.offsetParent;var b=bc(a),c=ld(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=ld(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function pd(a){var b,c=bc(a),d=ld(a,"position"),e=Eb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new v(0,0),h;b=c?bc(c):document;(h=!r||r&&9<=Qb)||(h="CSS1Compat"==$b(b).cc.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=nd(a),c=$b(c).cc,a=u||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=r&&Ob("10")&&c.pageYOffset!=a.scrollTop?new v(a.scrollLeft,
a.scrollTop):new v(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(u&&"fixed"==ld(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Db||u&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=od(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,Db&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function qd(a){var b=rd;if("none"!=ld(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function rd(a){var b=a.offsetWidth,c=a.offsetHeight,d=u&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=nd(a),new Rb(a.right-a.left,a.bottom-a.top)):new Rb(b,c)}
function sd(a){var b=pd(a);a=qd(a);return new jd(b.x,b.y,a.width,a.height)}function td(a,b){a.style.display=b?"":"none"}var ud=Eb?"MozUserSelect":u?"WebkitUserSelect":null;function vd(a,b,c){c=c?null:a.getElementsByTagName("*");if(ud){if(b=b?"none":"",a.style[ud]=b,c){a=0;for(var d;d=c[a];a++)d.style[ud]=b}}else if(r||Db)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var xd={thin:2,medium:4,thick:6};
function yd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in xd)d=xd[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function zd(a){if(r&&!(r&&9<=Qb)){var b=yd(a,"borderLeft"),c=yd(a,"borderRight"),d=yd(a,"borderTop");a=yd(a,"borderBottom");return new id(d,c,a,b)}b=kd(a,"borderLeftWidth");c=kd(a,"borderRightWidth");d=kd(a,"borderTopWidth");a=kd(a,"borderBottomWidth");return new id(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var Ad="closure_listenable_"+(1E6*Math.random()|0),Bd=0;function Cd(a,b,c,d,e){this.Vc=a;this.Sf=null;this.src=b;this.type=c;this.$e=!!d;this.wf=e;this.key=++Bd;this.Ld=this.Ze=!1}function Dd(a){a.Ld=!0;a.Vc=null;a.Sf=null;a.src=null;a.wf=null};function Ed(a){this.src=a;this.Qa={};this.Oe=0}Ed.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.Qa[g];a||(a=this.Qa[g]=[],this.Oe++);var h=Fd(a,b,d,e);-1<h?(b=a[h],c||(b.Ze=!1)):(b=new Cd(b,this.src,g,!!d,e),b.Ze=c,a.push(b));return b};Ed.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Qa))return!1;var e=this.Qa[a];b=Fd(e,b,c,d);return-1<b?(Dd(e[b]),Qa.splice.call(e,b,1),0==e.length&&(delete this.Qa[a],this.Oe--),!0):!1};
function Gd(a,b){var c=b.type;if(!(c in a.Qa))return!1;var d=Ya(a.Qa[c],b);d&&(Dd(b),0==a.Qa[c].length&&(delete a.Qa[c],a.Oe--));return d}Ed.prototype.Xf=function(a){a=a&&a.toString();var b=0,c;for(c in this.Qa)if(!a||c==a){for(var d=this.Qa[c],e=0;e<d.length;e++)++b,Dd(d[e]);delete this.Qa[c];this.Oe--}return b};Ed.prototype.ke=function(a,b,c,d){a=this.Qa[a.toString()];var e=-1;a&&(e=Fd(a,b,c,d));return-1<e?a[e]:null};
function Fd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.Ld&&g.Vc==b&&g.$e==!!c&&g.wf==d)return e}return-1};var Hd=!r||r&&9<=Qb,Id=!r||r&&9<=Qb,Jd=r&&!Ob("9");!u||Ob("528");Eb&&Ob("1.9b")||r&&Ob("8")||Db&&Ob("9.5")||u&&Ob("528");Eb&&!Ob("8")||r&&Ob("9");var Kd="ontouchstart"in l||!!(l.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!l.navigator||!l.navigator.msMaxTouchPoints);function Ld(){0!=Md&&(Nd[ia(this)]=this);this.ce=this.ce;this.Mf=this.Mf}var Md=0,Nd={};Ld.prototype.ce=!1;Ld.prototype.i=function(){if(!this.ce&&(this.ce=!0,this.qa(),0!=Md)){var a=ia(this);delete Nd[a]}};Ld.prototype.qa=function(){if(this.Mf)for(;this.Mf.length;)this.Mf.shift()()};function Od(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Zc=!1;this.Cj=!0}Od.prototype.qa=function(){};Od.prototype.i=function(){};Od.prototype.stopPropagation=function(){this.Zc=!0};Od.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Cj=!1};function Pd(a){Pd[" "](a);return a}Pd[" "]=ba;function Qd(a,b){Od.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.ph=!1;this.Na=null;a&&this.g(a,b)}q(Qd,Od);var Rd=[1,4,2];f=Qd.prototype;
f.g=function(a,b){this.Na=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Eb){var e;a:{try{Pd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.Ti,set:this.cm},offsetY:{configurable:!0,enumerable:!0,get:this.Ui,set:this.dm}}):(this.offsetX=this.Ti(),
this.offsetY=this.Ui());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.ph=Gb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Sd(a){return Hd?0==a.Na.button:"click"==a.type?!0:!!(a.Na.button&Rd[0])}f.stopPropagation=function(){Qd.k.stopPropagation.call(this);this.Na.stopPropagation?this.Na.stopPropagation():this.Na.cancelBubble=!0};f.preventDefault=function(){Qd.k.preventDefault.call(this);var a=this.Na;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.qa=function(){};
f.Ti=function(){return u||void 0!==this.Na.offsetX?this.Na.offsetX:this.Na.layerX};f.cm=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.Ui=function(){return u||void 0!==this.Na.offsetY?this.Na.offsetY:this.Na.layerY};f.dm=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Td="closure_lm_"+(1E6*Math.random()|0),Ud={},Vd=0;function Wd(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)Wd(a,b[g],c,d,e);return null}c=Xd(c);if(a&&a[Ad])a=a.O(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Yd(a);h||(a[Td]=h=new Ed(a));c=h.add(b,c,!1,d,e);c.Sf||(d=Zd(),c.Sf=d,d.src=a,d.Vc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent($d(b.toString()),d),Vd++);a=c}return a}
function Zd(){var a=ae,b=Id?function(c){return a.call(b.src,b.Vc,c)}:function(c){c=a.call(b.src,b.Vc,c);if(!c)return c};return b}function be(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)be(a,b[g],c,d,e);else c=Xd(c),a&&a[Ad]?a.tb(b,c,d,e):a&&(a=Yd(a))&&(b=a.ke(b,c,!!d,e))&&ce(b)}
function ce(a){if(n(a)||!a||a.Ld)return!1;var b=a.src;if(b&&b[Ad])return Gd(b.sc,a);var c=a.type,d=a.Sf;b.removeEventListener?b.removeEventListener(c,d,a.$e):b.detachEvent&&b.detachEvent($d(c),d);Vd--;(c=Yd(b))?(Gd(c,a),0==c.Oe&&(c.src=null,b[Td]=null)):Dd(a);return!0}function $d(a){return a in Ud?Ud[a]:Ud[a]="on"+a}function de(a,b,c,d){var e=!0;if(a=Yd(a))if(b=a.Qa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.$e==c&&!g.Ld&&(g=ee(g,d),e=e&&!1!==g)}return e}
function ee(a,b){var c=a.Vc,d=a.wf||a.src;a.Ze&&ce(a);return c.call(d,b)}
function ae(a,b){if(a.Ld)return!0;if(!Id){var c=b||aa("window.event"),d=new Qd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.Zc&&0<=k;k--){d.currentTarget=c[k];var p=de(c[k],g,!0,d),e=e&&p}for(k=0;!d.Zc&&k<c.length;k++)d.currentTarget=c[k],p=de(c[k],g,!1,d),e=e&&p}return e}return ee(a,new Qd(b,
this))}function Yd(a){a=a[Td];return a instanceof Ed?a:null}var fe="__closure_events_fn_"+(1E9*Math.random()>>>0);function Xd(a){if(ga(a))return a;a[fe]||(a[fe]=function(b){return a.handleEvent(b)});return a[fe]};function ge(a){Ld.call(this);this.Yi=a;this.Hf={}}q(ge,Ld);var he=[];f=ge.prototype;f.O=function(a,b,c,d){ea(b)||(b&&(he[0]=b.toString()),b=he);for(var e=0;e<b.length;e++){var g=Wd(a,b[e],c||this.handleEvent,d||!1,this.Yi||this);if(!g)break;this.Hf[g.key]=g}return this};
f.tb=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.tb(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.Yi||this,c=Xd(c),d=!!d,b=a&&a[Ad]?a.ke(b,c,d,e):a?(a=Yd(a))?a.ke(b,c,d,e):null:null,b&&(ce(b),delete this.Hf[b.key]);return this};f.Xf=function(){jb(this.Hf,ce);this.Hf={}};f.qa=function(){ge.k.qa.call(this);this.Xf()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function ie(){}ca(ie);ie.prototype.Fl=0;function je(){Ld.call(this);this.sc=new Ed(this);this.tk=this;this.oh=null}q(je,Ld);je.prototype[Ad]=!0;f=je.prototype;f.rf=function(){return this.oh};f.Dh=function(a){this.oh=a};f.addEventListener=function(a,b,c,d){Wd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){be(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.rf();if(c)for(b=[];c;c=c.rf())b.push(c);var c=this.tk,d=a.type||a;if(m(a))a=new Od(a,c);else if(a instanceof Od)a.target=a.target||c;else{var e=a;a=new Od(d,c);lb(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.Zc&&0<=h;h--)g=a.currentTarget=b[h],e=ke(g,d,!0,a)&&e;a.Zc||(g=a.currentTarget=c,e=ke(g,d,!0,a)&&e,a.Zc||(e=ke(g,d,!1,a)&&e));if(b)for(h=0;!a.Zc&&h<b.length;h++)g=a.currentTarget=b[h],e=ke(g,d,!1,a)&&e;return e};
f.qa=function(){je.k.qa.call(this);this.sc&&this.sc.Xf(void 0);this.oh=null};f.O=function(a,b,c,d){return this.sc.add(String(a),b,!1,c,d)};f.tb=function(a,b,c,d){return this.sc.remove(String(a),b,c,d)};function ke(a,b,c,d){b=a.sc.Qa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.Ld&&h.$e==c){var k=h.Vc,p=h.wf||h.src;h.Ze&&Gd(a.sc,h);e=!1!==k.call(p,d)&&e}}return e&&0!=d.Cj}f.ke=function(a,b,c,d){return this.sc.ke(String(a),b,c,d)};function le(a){je.call(this);this.ff=a||$b();this.bg=me;this.zf=null;this.N=!1;this.G=null;this.vc=void 0;this.oc=this.ha=this.Ja=this.Kf=null;this.xm=!1}q(le,je);le.prototype.ol=ie.tc();var me=null;
function ne(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function oe(a){return a.zf||(a.zf=":"+(a.ol.Fl++).toString(36))}f=le.prototype;f.o=function(){return this.G};function pe(a){a.vc||(a.vc=new ge(a));return a.vc}
f.Ka=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.Ja&&this.zf&&qe(this.Ja,this.zf)&&this.Ja!=a)throw Error("Unable to set parent component");this.Ja=a;le.k.Dh.call(this,a)};f.getParent=function(){return this.Ja};f.Dh=function(a){if(this.Ja&&this.Ja!=a)throw Error("Method not supported");le.k.Dh.call(this,a)};f.Eb=function(){return this.ff};f.P=function(){this.G=this.ff.createElement("div")};f.C=function(a){this.Md(a)};
f.Md=function(a,b){if(this.N)throw Error("Component already rendered");this.G||this.P();a?a.insertBefore(this.G,b||null):this.ff.cc.body.appendChild(this.G);this.Ja&&!this.Ja.N||this.Ba()};f.Ba=function(){this.N=!0;re(this,function(a){!a.N&&a.o()&&a.Ba()})};f.mb=function(){re(this,function(a){a.N&&a.mb()});this.vc&&this.vc.Xf();this.N=!1};
f.qa=function(){this.N&&this.mb();this.vc&&(this.vc.i(),delete this.vc);re(this,function(a){a.i()});!this.xm&&this.G&&kc(this.G);this.Ja=this.Kf=this.G=this.oc=this.ha=null;le.k.qa.call(this)};f.We=function(a,b){this.qd(a,se(this),b)};
f.qd=function(a,b,c){if(a.N&&(c||!this.N))throw Error("Component already rendered");if(0>b||b>se(this))throw Error("Child component index out of bounds");this.oc&&this.ha||(this.oc={},this.ha=[]);if(a.getParent()==this){var d=oe(a);this.oc[d]=a;Ya(this.ha,a)}else{var d=this.oc,e=oe(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.Ka(this);$a(this.ha,b,0,a);a.N&&this.N&&a.getParent()==this?(c=this.Db(),b=c.childNodes[b]||null,b!=a.o()&&c.insertBefore(a.o(),b)):c?(this.G||
this.P(),b=te(this,b+1),a.Md(this.Db(),b?b.G:null)):this.N&&!a.N&&a.G&&a.G.parentNode&&1==a.G.parentNode.nodeType&&a.Ba()};f.Db=function(){return this.G};function ue(a){null==a.bg&&(a.bg="rtl"==ld(a.N?a.G:a.ff.cc.body,"direction"));return a.bg}f.Ee=function(a){if(this.N)throw Error("Component already rendered");this.bg=a};function ve(a){return!!a.ha&&0!=a.ha.length}function se(a){return a.ha?a.ha.length:0}function qe(a,b){var c;a.oc&&b?(c=a.oc,c=(b in c?c[b]:void 0)||null):c=null;return c}
function te(a,b){return a.ha?a.ha[b]||null:null}function re(a,b,c){a.ha&&Sa(a.ha,b,c)}function we(a,b){return a.ha&&b?Ra(a.ha,b):-1}f.removeChild=function(a,b){if(a){var c=m(a)?a:oe(a);a=qe(this,c);if(c&&a){var d=this.oc;c in d&&delete d[c];Ya(this.ha,a);b&&(a.mb(),a.G&&kc(a.G));a.Ka(null)}}if(!a)throw Error("Child is not in parent component");return a};f.zj=function(a){for(var b=[];ve(this);)b.push(this.removeChild(te(this,0),a));return b};function xe(a){if(a.classList)return a.classList;a=a.className;return m(a)&&a.match(/\S+/g)||[]}function ye(a,b){return a.classList?a.classList.contains(b):Xa(xe(a),b)}function ze(a,b){a.classList?a.classList.add(b):ye(a,b)||(a.className+=0<a.className.length?" "+b:b)}function Ae(a,b){if(a.classList)Sa(b,function(b){ze(a,b)});else{var c={};Sa(xe(a),function(a){c[a]=!0});Sa(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function Be(a,b){a.classList?a.classList.remove(b):ye(a,b)&&(a.className=Ta(xe(a),function(a){return a!=b}).join(" "))}function Ce(a,b){a.classList?Sa(b,function(b){Be(a,b)}):a.className=Ta(xe(a),function(a){return!Xa(b,a)}).join(" ")};function De(a,b){if(!a)throw Error("Invalid class name "+a);if(!ga(b))throw Error("Invalid decorator function "+b);}var Ee={};var Fe;function Ge(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function He(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Fe||(Fe={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Fe,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function Ie(){}var Je;ca(Ie);var Ke={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=Ie.prototype;f.jf=function(){};f.P=function(a){return a.Eb().P("div",this.mf(a).join(" "),a.ac)};f.Db=function(a){return a};f.de=function(a,b,c){if(a=a.o?a.o():a){var d=[b];r&&!Ob("7")&&(d=Le(xe(a),b),d.push(b));(c?Ae:Ce)(a,d)}};f.se=function(a){ue(a)&&this.Ee(a.o(),!0);a.isEnabled()&&this.dd(a,a.J())};
function Me(a,b,c){if(a=c||a.jf())c=b.getAttribute("role")||null,a!=c&&Ge(b,a)}function Ne(a,b){a.J()||He(b,"hidden",!a.J());a.isEnabled()||Oe(b,1,!a.isEnabled());a.la&8&&Oe(b,8,a.Ef());a.la&16&&Oe(b,16,!!(a.$&16));a.la&64&&Oe(b,64,a.Fd())}f.Ah=function(a,b){vd(a,!b,!r&&!Db)};f.Ee=function(a,b){this.de(a,this.Fa()+"-rtl",b)};f.xc=function(a){var b;return a.la&32&&(b=a.va())?oc(b)&&pc(b):!1};
f.dd=function(a,b){var c;if(a.la&32&&(c=a.va())){if(!b&&a.$&32){try{c.blur()}catch(d){}a.$&32&&a.oe(null)}(oc(c)&&pc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.L=function(a,b){td(a,b);a&&He(a,"hidden",!b)};f.Kb=function(a,b,c){var d=a.o();if(d){var e=this.lf(b);e&&this.de(a,e,c);Oe(d,b,c)}};
function Oe(a,b,c){Je||(Je={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=Je[b];var d=a.getAttribute("role")||null;d&&(d=Ke[d]||b,b="checked"==b||"selected"==b?d:b);b&&He(a,b,c)}f.va=function(a){return a.o()};f.Fa=function(){return"goog-control"};f.mf=function(a){var b=this.Fa(),c=[b],d=this.Fa();d!=b&&c.push(d);b=a.$;for(d=[];b;){var e=b&-b;d.push(this.lf(e));b&=~e}c.push.apply(c,d);(a=a.Qb)&&c.push.apply(c,a);r&&!Ob("7")&&c.push.apply(c,Le(c));return c};
function Le(a,b){var c=[];b&&(a=a.concat([b]));Sa([],function(d){!Va(d,oa(Xa,a))||b&&!Xa(d,b)||c.push(d.join("_"))});return c}f.lf=function(a){if(!this.pi){var b=this.Fa();b.replace(/\xa0|\s/g," ");this.pi={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.pi[a]};function Pe(a,b,c,d,e){if(!(r||u&&Ob("525")))return!0;if(Gb&&e)return Qe(a);if(e&&!d)return!1;n(b)&&(b=Re(b));if(!c&&(17==b||18==b||Gb&&91==b))return!1;if(u&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(r&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!u}return Qe(a)}
function Qe(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||u&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Re(a){if(Eb)a=Se(a);else if(Gb&&u)a:switch(a){case 93:a=91;break a}return a}
function Se(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Te(a,b){je.call(this);a&&Ue(this,a,b)}q(Te,je);f=Te.prototype;f.G=null;f.Ff=null;f.bh=null;f.Gf=null;f.gb=-1;f.yc=-1;f.qg=!1;
var Ve={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},We={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Xe=r||u&&Ob("525"),Ye=Gb&&Eb;f=Te.prototype;
f.hl=function(a){u&&(17==this.gb&&!a.ctrlKey||18==this.gb&&!a.altKey||Gb&&91==this.gb&&!a.metaKey)&&(this.yc=this.gb=-1);-1==this.gb&&(a.ctrlKey&&17!=a.keyCode?this.gb=17:a.altKey&&18!=a.keyCode?this.gb=18:a.metaKey&&91!=a.keyCode&&(this.gb=91));Xe&&!Pe(a.keyCode,this.gb,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.yc=Re(a.keyCode),Ye&&(this.qg=a.altKey))};f.il=function(a){this.yc=this.gb=-1;this.qg=a.altKey};
f.handleEvent=function(a){var b=a.Na,c,d,e=b.altKey;r&&"keypress"==a.type?(c=this.yc,d=13!=c&&27!=c?b.keyCode:0):u&&"keypress"==a.type?(c=this.yc,d=0<=b.charCode&&63232>b.charCode&&Qe(c)?b.charCode:0):Db?(c=this.yc,d=Qe(c)?b.keyCode:0):(c=b.keyCode||this.yc,d=b.charCode||0,Ye&&(e=this.qg),Gb&&63==d&&224==c&&(c=191));var g=c=Re(c),h=b.keyIdentifier;c?63232<=c&&c in Ve?g=Ve[c]:25==c&&a.shiftKey&&(g=9):h&&h in We&&(g=We[h]);a=g==this.gb;this.gb=g;b=new Ze(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.o=function(){return this.G};function Ue(a,b,c){a.Gf&&a.detach();a.G=b;a.Ff=Wd(a.G,"keypress",a,c);a.bh=Wd(a.G,"keydown",a.hl,c,a);a.Gf=Wd(a.G,"keyup",a.il,c,a)}f.detach=function(){this.Ff&&(ce(this.Ff),ce(this.bh),ce(this.Gf),this.Gf=this.bh=this.Ff=null);this.G=null;this.yc=this.gb=-1};f.qa=function(){Te.k.qa.call(this);this.detach()};function Ze(a,b,c,d){Qd.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}q(Ze,Qd);function $e(a,b,c){le.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ia(b);if(d=Ee[d])break;b=b.k?b.k.constructor:null}b=d?ga(d.tc)?d.tc():new d:null}this.S=b;this.bm(void 0!==a?a:null)}q($e,le);f=$e.prototype;f.ac=null;f.$=0;f.la=39;f.Ak=255;f.Je=0;f.ga=!0;f.Qb=null;f.qe=!0;f.pg=!1;f.Tl=null;f.va=function(){return this.S.va(this)};f.qf=function(){return this.Ia||(this.Ia=new Te)};
f.de=function(a,b){b?a&&(this.Qb?Xa(this.Qb,a)||this.Qb.push(a):this.Qb=[a],this.S.de(this,a,!0)):a&&this.Qb&&Ya(this.Qb,a)&&(0==this.Qb.length&&(this.Qb=null),this.S.de(this,a,!1))};f.P=function(){var a=this.S.P(this);this.G=a;Me(this.S,a,this.sf());this.pg||this.S.Ah(a,!1);this.J()||this.S.L(a,!1)};f.sf=function(){return this.Tl};f.Db=function(){return this.S.Db(this.o())};
f.Ba=function(){$e.k.Ba.call(this);Ne(this,this.G);this.S.se(this);if(this.la&-2&&(this.qe&&af(this,!0),this.la&32)){var a=this.va();if(a){var b=this.qf();Ue(b,a);pe(this).O(b,"key",this.Fb).O(a,"focus",this.vf).O(a,"blur",this.oe)}}};
function af(a,b){var c=pe(a),d=a.o();b?(c.O(d,"mouseover",a.Xg).O(d,"mousedown",a.Cd).O(d,"mouseup",a.re).O(d,"mouseout",a.Wg),a.pe!=ba&&c.O(d,"contextmenu",a.pe),r&&c.O(d,"dblclick",a.Wi)):(c.tb(d,"mouseover",a.Xg).tb(d,"mousedown",a.Cd).tb(d,"mouseup",a.re).tb(d,"mouseout",a.Wg),a.pe!=ba&&c.tb(d,"contextmenu",a.pe),r&&c.tb(d,"dblclick",a.Wi))}f.mb=function(){$e.k.mb.call(this);this.Ia&&this.Ia.detach();this.J()&&this.isEnabled()&&this.S.dd(this,!1)};
f.qa=function(){$e.k.qa.call(this);this.Ia&&(this.Ia.i(),delete this.Ia);delete this.S;this.Qb=this.ac=null};f.bm=function(a){this.ac=a};f.Qg=function(){var a=this.ac;if(!a)return"";if(!m(a))if(ea(a))a=Ua(a,qc).join("");else{if(Vb&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];rc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Vb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return ua(a)};
f.Ee=function(a){$e.k.Ee.call(this,a);var b=this.o();b&&this.S.Ee(b,a)};f.Ah=function(a){this.pg=a;var b=this.o();b&&this.S.Ah(b,a)};f.J=function(){return this.ga};f.L=function(a,b){if(b||this.ga!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.o();c&&this.S.L(c,a);this.isEnabled()&&this.S.dd(this,a);this.ga=a;return!0}return!1};f.isEnabled=function(){return!(this.$&1)};
f.De=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!bf(this,1,!a)||(a||(this.setActive(!1),this.Ib(!1)),this.J()&&this.S.dd(this,a),this.Kb(1,!a,!0))};f.Ib=function(a){bf(this,2,a)&&this.Kb(2,a)};f.tl=function(){return!!(this.$&4)};f.setActive=function(a){bf(this,4,a)&&this.Kb(4,a)};f.Ef=function(){return!!(this.$&8)};f.em=function(){bf(this,8,!0)&&this.Kb(8,!0)};function cf(a,b){bf(a,16,b)&&a.Kb(16,b)}f.Fd=function(){return!!(this.$&64)};
function df(a,b){bf(a,64,b)&&a.Kb(64,b)}f.Kb=function(a,b,c){c||1!=a?this.la&a&&b!=!!(this.$&a)&&(this.S.Kb(this,a,b),this.$=b?this.$|a:this.$&~a):this.De(!b)};f.jb=function(a,b){if(this.N&&this.$&a&&!b)throw Error("Component already rendered");!b&&this.$&a&&this.Kb(a,!1);this.la=b?this.la|a:this.la&~a};function ef(a,b){return!!(a.Ak&b)&&!!(a.la&b)}function bf(a,b,c){return!!(a.la&b)&&!!(a.$&b)!=c&&(!(a.Je&b)||a.dispatchEvent(ne(b,c)))&&!a.ce}
f.Xg=function(a){!ff(a,this.o())&&this.dispatchEvent("enter")&&this.isEnabled()&&ef(this,2)&&this.Ib(!0)};f.Wg=function(a){!ff(a,this.o())&&this.dispatchEvent("leave")&&(ef(this,4)&&this.setActive(!1),ef(this,2)&&this.Ib(!1))};f.pe=ba;function ff(a,b){return!!a.relatedTarget&&lc(b,a.relatedTarget)}f.Cd=function(a){this.isEnabled()&&(ef(this,2)&&this.Ib(!0),!Sd(a)||u&&Gb&&a.ctrlKey||(ef(this,4)&&this.setActive(!0),this.S.xc(this)&&this.va().focus()));this.pg||!Sd(a)||u&&Gb&&a.ctrlKey||a.preventDefault()};
f.re=function(a){this.isEnabled()&&(ef(this,2)&&this.Ib(!0),this.tl()&&this.xe(a)&&ef(this,4)&&this.setActive(!1))};f.Wi=function(a){this.isEnabled()&&this.xe(a)};f.xe=function(a){ef(this,16)&&cf(this,!(this.$&16));ef(this,8)&&this.em();ef(this,64)&&df(this,!this.Fd());var b=new Od("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.ph=a.ph);return this.dispatchEvent(b)};f.vf=function(){ef(this,32)&&bf(this,32,!0)&&this.Kb(32,!0)};
f.oe=function(){ef(this,4)&&this.setActive(!1);ef(this,32)&&bf(this,32,!1)&&this.Kb(32,!1)};f.Fb=function(a){return this.J()&&this.isEnabled()&&this.Rc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.Rc=function(a){return 13==a.keyCode&&this.xe(a)};if(!ga($e))throw Error("Invalid component class "+$e);if(!ga(Ie))throw Error("Invalid renderer class "+Ie);var gf=ia($e);Ee[gf]=Ie;De("goog-control",function(){return new $e(null)});function hf(){this.qi=[]}q(hf,Ie);ca(hf);function jf(a,b){var c=a.qi[b];if(!c){switch(b){case 0:c=a.Fa()+"-highlight";break;case 1:c=a.Fa()+"-checkbox";break;case 2:c=a.Fa()+"-content"}a.qi[b]=c}return c}f=hf.prototype;f.jf=function(){return"menuitem"};f.P=function(a){var b=a.Eb().P("div",this.mf(a).join(" "),kf(this,a.ac,a.Eb()));lf(this,a,b,!!(a.la&8)||!!(a.la&16));return b};f.Db=function(a){return a&&a.firstChild};function kf(a,b,c){a=jf(a,2);return c.P("div",a,b)}
f.Hj=function(a,b,c){a&&b&&lf(this,a,b,c)};f.Bh=function(a,b,c){a&&b&&lf(this,a,b,c)};function lf(a,b,c,d){Me(a,c,b.sf());Ne(b,c);var e;if(e=a.Db(c)){e=e.firstChild;var g=jf(a,1);e=!!e&&ha(e)&&1==e.nodeType&&ye(e,g)}else e=!1;d!=e&&(d?ze(c,"goog-option"):Be(c,"goog-option"),c=a.Db(c),d?(a=jf(a,1),c.insertBefore(b.Eb().P("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.lf=function(a){switch(a){case 2:return jf(this,0);case 16:case 8:return"goog-option-selected";default:return hf.k.lf.call(this,a)}};f.Fa=function(){return"goog-menuitem"};function mf(a,b,c,d){$e.call(this,a,d||hf.tc(),c);this.Ya(b)}q(mf,$e);f=mf.prototype;f.pb=function(){var a=this.Kf;return null!=a?a:this.Qg()};f.Ya=function(a){this.Kf=a};f.jb=function(a,b){mf.k.jb.call(this,a,b);switch(a){case 8:this.$&16&&!b&&cf(this,!1);var c=this.o();c&&this.S.Hj(this,c,b);break;case 16:(c=this.o())&&this.S.Bh(this,c,b)}};f.Hj=function(a){this.jb(8,a)};f.Bh=function(a){this.jb(16,a)};
f.Qg=function(){var a=this.ac;return ea(a)?(a=Ua(a,function(a){return ha(a)&&1==a.nodeType&&(ye(a,"goog-menuitem-accel")||ye(a,"goog-menuitem-mnemonic-separator"))?"":qc(a)}).join(""),ua(a)):mf.k.Qg.call(this)};f.re=function(a){var b=this.getParent();if(b){var c=b.rj;b.rj=null;if(b=c&&n(a.clientX))b=new v(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}mf.k.re.call(this,a)};f.Rc=function(a){return a.keyCode==this.jj&&this.xe(a)?!0:mf.k.Rc.call(this,a)};f.al=function(){return this.jj};
De("goog-menuitem",function(){return new mf(null)});mf.prototype.sf=function(){return this.la&16?"menuitemcheckbox":this.la&8?"menuitemradio":mf.k.sf.call(this)};mf.prototype.getParent=function(){return $e.prototype.getParent.call(this)};mf.prototype.rf=function(){return $e.prototype.rf.call(this)};function nf(a){this.hi=a}ca(nf);f=nf.prototype;f.jf=function(){return this.hi};function of(a,b){a&&(a.tabIndex=b?0:-1)}f.P=function(a){return a.Eb().P("div",this.mf(a).join(" "))};f.Db=function(a){return a};f.se=function(a){a=a.o();vd(a,!0,Eb);r&&(a.hideFocus=!0);var b=this.jf();b&&Ge(a,b)};f.va=function(a){return a.o()};f.Fa=function(){return"goog-container"};f.mf=function(a){var b=this.Fa(),c=[b,a.Kd==pf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function qf(){}q(qf,Ie);ca(qf);qf.prototype.P=function(a){return a.Eb().P("div",this.Fa())};qf.prototype.Fa=function(){return"goog-menuseparator"};function rf(a,b){$e.call(this,null,a||qf.tc(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}q(rf,$e);rf.prototype.Ba=function(){rf.k.Ba.call(this);var a=this.o();Ge(a,"separator")};De("goog-menuseparator",function(){return new rf});function sf(a){this.hi=a||"menu"}q(sf,nf);ca(sf);sf.prototype.Fa=function(){return"goog-menu"};sf.prototype.se=function(a){sf.k.se.call(this,a);a=a.o();He(a,"haspopup","true")};De("goog-menuseparator",function(){return new rf});function tf(a,b,c){le.call(this,c);this.S=b||nf.tc();this.Kd=a||uf}q(tf,le);var pf="horizontal",uf="vertical";f=tf.prototype;f.dh=null;f.Ia=null;f.S=null;f.Kd=null;f.ga=!0;f.Nc=!0;f.Og=!0;f.Z=-1;f.sa=null;f.Jd=!1;f.vk=!1;f.Ql=!0;f.Zb=null;f.va=function(){return this.dh||this.S.va(this)};f.qf=function(){return this.Ia||(this.Ia=new Te(this.va()))};f.P=function(){this.G=this.S.P(this)};f.Db=function(){return this.S.Db(this.o())};
f.Ba=function(){tf.k.Ba.call(this);re(this,function(a){a.N&&vf(this,a)},this);var a=this.o();this.S.se(this);this.L(this.ga,!0);pe(this).O(this,"enter",this.Ug).O(this,"highlight",this.gl).O(this,"unhighlight",this.ll).O(this,"open",this.jl).O(this,"close",this.dl).O(a,"mousedown",this.Cd).O(bc(a),"mouseup",this.el).O(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.cl);this.xc()&&wf(this,!0)};
function wf(a,b){var c=pe(a),d=a.va();b?c.O(d,"focus",a.vf).O(d,"blur",a.oe).O(a.qf(),"key",a.Fb):c.tb(d,"focus",a.vf).tb(d,"blur",a.oe).tb(a.qf(),"key",a.Fb)}f.mb=function(){this.Nd(-1);this.sa&&df(this.sa,!1);this.Jd=!1;tf.k.mb.call(this)};f.qa=function(){tf.k.qa.call(this);this.Ia&&(this.Ia.i(),this.Ia=null);this.S=this.sa=this.Zb=this.dh=null};f.Ug=function(){return!0};
f.gl=function(a){var b=we(this,a.target);if(-1<b&&b!=this.Z){var c=te(this,this.Z);c&&c.Ib(!1);this.Z=b;c=te(this,this.Z);this.Jd&&c.setActive(!0);this.Ql&&this.sa&&c!=this.sa&&(c.la&64?df(c,!0):df(this.sa,!1))}b=this.o();null!=a.target.o()&&He(b,"activedescendant",a.target.o().id)};f.ll=function(a){a.target==te(this,this.Z)&&(this.Z=-1);this.o().removeAttribute("aria-activedescendant")};f.jl=function(a){(a=a.target)&&a!=this.sa&&a.getParent()==this&&(this.sa&&df(this.sa,!1),this.sa=a)};
f.dl=function(a){a.target==this.sa&&(this.sa=null)};f.Cd=function(a){this.Nc&&(this.Jd=!0);var b=this.va();b&&oc(b)&&pc(b)?b.focus():a.preventDefault()};f.el=function(){this.Jd=!1};f.cl=function(a){var b=xf(this,a.target);if(b)switch(a.type){case "mousedown":b.Cd(a);break;case "mouseup":b.re(a);break;case "mouseover":b.Xg(a);break;case "mouseout":b.Wg(a);break;case "contextmenu":b.pe(a)}};
function xf(a,b){if(a.Zb)for(var c=a.o();b&&b!==c;){var d=b.id;if(d in a.Zb)return a.Zb[d];b=b.parentNode}return null}f.vf=function(){};f.oe=function(){this.Nd(-1);this.Jd=!1;this.sa&&df(this.sa,!1)};f.Fb=function(a){return this.isEnabled()&&this.J()&&(0!=se(this)||this.dh)&&this.Rc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.Rc=function(a){var b=te(this,this.Z);if(b&&"function"==typeof b.Fb&&b.Fb(a)||this.sa&&this.sa!=b&&"function"==typeof this.sa.Fb&&this.sa.Fb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.xc())this.va().blur();else return!1;break;case 36:yf(this);break;case 35:zf(this);break;case 38:if(this.Kd==uf)Af(this);else return!1;break;case 37:if(this.Kd==pf)ue(this)?Bf(this):Af(this);else return!1;break;case 40:if(this.Kd==uf)Bf(this);else return!1;break;
case 39:if(this.Kd==pf)ue(this)?Af(this):Bf(this);else return!1;break;default:return!1}return!0};function vf(a,b){var c=b.o(),c=c.id||(c.id=oe(b));a.Zb||(a.Zb={});a.Zb[c]=b}f.We=function(a,b){tf.k.We.call(this,a,b)};
f.qd=function(a,b,c){a.Je|=2;a.Je|=64;!this.xc()&&this.vk||a.jb(32,!1);a.N&&0!=a.qe&&af(a,!1);a.qe=!1;var d=a.getParent()==this?we(this,a):-1;tf.k.qd.call(this,a,b,c);a.N&&this.N&&vf(this,a);a=d;-1==a&&(a=se(this));a==this.Z?this.Z=Math.min(se(this)-1,b):a>this.Z&&b<=this.Z?this.Z++:a<this.Z&&b>this.Z&&this.Z--};
f.removeChild=function(a,b){if(a=m(a)?qe(this,a):a){var c=we(this,a);-1!=c&&(c==this.Z?(a.Ib(!1),this.Z=-1):c<this.Z&&this.Z--);var d=a.o();d&&d.id&&this.Zb&&(c=this.Zb,d=d.id,d in c&&delete c[d])}c=a=tf.k.removeChild.call(this,a,b);c.N&&1!=c.qe&&af(c,!0);c.qe=!0;return a};f.J=function(){return this.ga};
f.L=function(a,b){if(b||this.ga!=a&&this.dispatchEvent(a?"show":"hide")){this.ga=a;var c=this.o();c&&(td(c,a),this.xc()&&of(this.va(),this.Nc&&this.ga),b||this.dispatchEvent(this.ga?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Nc};
f.De=function(a){this.Nc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Nc=!0,re(this,function(a){a.Vj?delete a.Vj:a.De(!0)})):(re(this,function(a){a.isEnabled()?a.De(!1):a.Vj=!0}),this.Jd=this.Nc=!1),this.xc()&&of(this.va(),a&&this.ga))};f.xc=function(){return this.Og};f.dd=function(a){a!=this.Og&&this.N&&wf(this,a);this.Og=a;this.Nc&&this.ga&&of(this.va(),a)};f.Nd=function(a){(a=te(this,a))?a.Ib(!0):-1<this.Z&&te(this,this.Z).Ib(!1)};f.Ib=function(a){this.Nd(we(this,a))};
function yf(a){Cf(a,function(a,c){return(a+1)%c},se(a)-1)}function zf(a){Cf(a,function(a,c){a--;return 0>a?c-1:a},0)}function Bf(a){Cf(a,function(a,c){return(a+1)%c},a.Z)}function Af(a){Cf(a,function(a,c){a--;return 0>a?c-1:a},a.Z)}function Cf(a,b,c){c=0>c?we(a,a.sa):c;var d=se(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=te(a,c);if(g&&a.ni(g)){a.Nd(c);break}e++;c=b.call(a,c,d)}}f.ni=function(a){return a.J()&&a.isEnabled()&&!!(a.la&2)};function Df(){}q(Df,Ie);ca(Df);Df.prototype.Fa=function(){return"goog-menuheader"};function Ef(a,b,c){$e.call(this,a,c||Df.tc(),b);this.jb(1,!1);this.jb(2,!1);this.jb(4,!1);this.jb(32,!1);this.$=1}q(Ef,$e);De("goog-menuheader",function(){return new Ef(null)});function Ff(a,b){tf.call(this,uf,b||sf.tc(),a);this.dd(!1)}q(Ff,tf);f=Ff.prototype;f.og=!0;f.wk=!1;f.Fa=function(){return this.S.Fa()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.i()};function Gf(a){a.og=!0;a.dd(!0)}f.L=function(a,b,c){(b=Ff.k.L.call(this,a,b))&&a&&this.N&&this.og&&this.va().focus();this.rj=a&&c&&n(c.clientX)?new v(c.clientX,c.clientY):null;return b};f.Ug=function(a){this.og&&this.va().focus();return Ff.k.Ug.call(this,a)};
f.ni=function(a){return(this.wk||a.isEnabled())&&a.J()&&!!(a.la&2)};f.Rc=function(a){var b=Ff.k.Rc.call(this,a);b||re(this,function(c){!b&&c.al&&c.jj==a.keyCode&&(this.isEnabled()&&this.Ib(c),b=c.Fb(a))},this);return b};
f.Nd=function(a){Ff.k.Nd.call(this,a);if(a=te(this,a)){var b=a.o();a=this.o();var c=pd(b),d=pd(a),e=zd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new v(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function Hf(a,b){this.Id=a;this.pa=b;If(this);var c=Jf(this)[0];this.Sa=c[1];this.Xe=E("tspan",{},null);this.Xe.appendChild(document.createTextNode(D?Kf+" ":" "+Kf));Hf.k.constructor.call(this,c[0])}q(Hf,Sc);var Kf=Hb?"\u25bc":"\u25be";f=Hf.prototype;f.clone=function(){return new Hf(this.Id,this.pa)};f.kg="default";
f.Ge=function(){Lf(this,null);for(var a=this,b=new Ff,c=Jf(this),d=0;d<c.length;d++){var e=c[d][1],g=new mf(c[d][0]);g.Ya(e);g.Bh(!0);b.We(g,!0);cf(g,e==this.Sa)}Wd(b,"action",function(b){if(b=b.target){b=b.pb();if(a.h&&a.pa){var c=a.pa(b);void 0!==c&&(b=c)}null!==b&&a.Ya(b)}Mf==a&&Nf()});pe(b).O(b.o(),"touchstart",function(a){xf(this,a.target).Cd(a)});pe(b).O(b.o(),"touchend",function(a){xf(this,a.target).xe(a)});c=ec();d=md();e=Of(this.Jc);g=this.Jc.getBBox();b.C(Pf);var h=b.o();Uc(h,"blocklyDropdownMenu");
var k=qd(h);e.y=e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;D?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));Qf(e.x,e.y,c,d);Gf(b);h.focus()};
function If(a){a.qh=null;a.Oh=null;var b=a.Id;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Rf(c),e=Sf(c,d),g=Tf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.qh=c[0].substring(0,e-1));g&&(a.Oh=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.Id=c}}}function Jf(a){return ga(a.Id)?a.Id.call(a):a.Id}f.pb=function(){return this.Sa};f.Ya=function(a){this.Sa=a;for(var b=Jf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.V(b[c][0]);return}this.V(a)};
f.V=function(a){this.h&&(this.Xe.style.fill=Uf(Vf(this.h.yg)));null!==a&&a!==this.ya&&(this.ya=a,Tc(this),this.ca&&(D?this.ca.insertBefore(this.Xe,this.ca.firstChild):this.ca.appendChild(this.Xe)),this.h&&this.h.w&&(this.h.C(),this.h.ua(),this.h.p.nb()))};f.i=function(){Mf==this&&Nf();Hf.k.i.call(this)};/*

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
function Wf(a){a=a||x;var b;if(a.ob)b=a.ob();else if(a.eb)b=a.eb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].dc;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var g=d[e];g&&(a[g.toLowerCase()]=g)}}b=[];for(var h in a)b.push(a[h]);return b}function Xf(a,b){for(var c=x.eb(),d=0;d<c.length;d++){var e=c[d].Hb;e&&e.call(c[d],a,b)}}
function Yf(a,b,c,d){var e=Wf();e.sort(wa);e.unshift(null);for(var g=void 0,h=0;h<e.length;h++)if(e[h]!==g){var k=J.variables_get?dd(d,"variables_get"):null;k&&k.Ha();var p=J.variables_set?dd(d,"variables_set"):null;p&&p.Ha();null===e[h]?g=(k||p).dc()[0]:(k&&ed(k,e[h],"VAR"),p&&ed(p,e[h],"VAR"));p&&a.push(p);k&&a.push(k);k&&p?b.push(c,3*c):b.push(2*c)}}
function Zf(){var a=Wf(),b="";if(a.length){a.sort(wa);for(var c=0,d="i",e=0,g=!1;!b;){e=0;for(g=!1;e<a.length&&!g;)a[e].toLowerCase()==d&&(g=!0),e++;g?("z"===d[0]?(c++,d="a"):(d=String.fromCharCode(d.charCodeAt(0)+1),"l"==d[0]&&(d=String.fromCharCode(d.charCodeAt(0)+1))),0<c&&(d+=c)):b=d}}else b="i";return b};/*

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
function $f(a,b){var c;if(b){var d=this;c=function(a){var c=ag.call(d,a);a=void 0===c?a:null===c?d.pb():c;b.call(d,a);return c}}else c=ag;$f.k.constructor.call(this,bg,c);a?this.Ya(a):this.Ya(Zf())}q($f,Hf);$f.prototype.clone=function(){return new $f(this.pb(),this.pa)};$f.prototype.pb=function(){return this.Ga()};$f.prototype.Ya=function(a){this.Sa=a;this.V(a)};
function bg(){var a=this.h&&this.h.p?Wf(this.h.p):[],b=this.Ga();b&&-1==a.indexOf(b)&&a.push(b);a.sort(wa);a.push(cg);a.push(dg);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function ag(a){function b(a,b){eg();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==cg){var c=this.Ga();(a=b(fg.replace("%1",c),c))&&Xf(c,a);return null}if(a==dg)return(a=b(gg,""))?(Xf(a,a),a):null};var hg=/#(.)(.)(.)/;function Uf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=ig(b.toString(16));c=ig(c.toString(16));a=ig(a.toString(16));return"#"+b+c+a}var jg=/^#(?:[0-9a-f]{3}){1,2}$/i;function ig(a){return 1==a.length?"0"+a:a}
function Vf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function kg(a,b,c){c=Wb(c,0,1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function lg(a,b,c){if(ga(a))c&&(a=na(a,c));else if(a&&"function"==typeof a.handleEvent)a=na(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};function mg(a,b,c){le.call(this,c);this.Aa=b||ng;this.Yg=a instanceof ob?a:sb(a,null)}q(mg,le);var og={};f=mg.prototype;f.zh=!1;f.fe=!1;f.pm=null;f.uk=yb;f.ue=!0;f.df=-1;f.qa=function(){mg.k.qa.call(this);this.ld&&(this.ld.removeNode(this),this.ld=null);this.G=null};
f.Cf=function(){var a=this.o();if(a){var b=pg(this);b&&!b.id&&(b.id=oe(this)+".label");Ge(a,"treeitem");He(a,"selected",!1);He(a,"expanded",!1);He(a,"level",this.yd());b&&He(a,"labelledby",b.id);(a=this.pf())&&Ge(a,"presentation");(a=this.of())&&Ge(a,"presentation");if(a=qg(this))if(Ge(a,"group"),a.hasChildNodes())for(a=se(this),b=1;b<=a;b++){var c=te(this,b-1).o();He(c,"setsize",a);He(c,"posinset",b)}}};
f.P=function(){var a=this.Eb(),b=this.Sh(),c=a.cc,a=c.createElement("div");r?(Sb(a,xb(wb("br"),b)),a.removeChild(a.firstChild)):Sb(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.G=b};f.Ba=function(){mg.k.Ba.call(this);og[oe(this)]=this;this.Cf()};f.mb=function(){mg.k.mb.call(this);delete og[oe(this)]};
f.qd=function(a,b){var c=te(this,b-1),d=te(this,b);mg.k.qd.call(this,a,b);a.Yc=c;a.Gb=d;c?c.Gb=a:this.Ri=a;d?d.Yc=a:this.fj=a;var e=this.Oa();e&&rg(a,e);sg(a,this.yd()+1);if(this.o()&&(this.Qd(),this.Wa())){e=qg(this);a.o()||a.P();var g=a.o(),h=d&&d.o();e.insertBefore(g,h);this.N&&a.Ba();d||(c?c.Qd():(td(e,!0),this.ic(this.Wa())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.qd(a,b?we(this,b):se(this));return a};
f.removeChild=function(a){var b=this.Oa(),c=b?b.ib:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),lg(this.Nl,10,this)):this.select();mg.k.removeChild.call(this,a);this.fj==a&&(this.fj=a.Yc);this.Ri==a&&(this.Ri=a.Gb);a.Yc&&(a.Yc.Gb=a.Gb);a.Gb&&(a.Gb.Yc=a.Yc);c=!a.Gb;a.ld=null;a.df=-1;if(b&&(b.removeNode(this),this.N)){b=qg(this);if(a.N){var d=a.o();b.removeChild(d);a.mb()}c&&(c=te(this,se(this)-1))&&c.Qd();ve(this)||(b.style.display="none",this.Qd(),this.pf().className=this.kf())}return a};
f.remove=mg.prototype.removeChild;f.Nl=function(){this.select()};f.yd=function(){var a=this.df;0>a&&(a=(a=this.getParent())?a.yd()+1:0,sg(this,a));return a};function sg(a,b){if(b!=a.df){a.df=b;var c=tg(a);if(c){var d=ug(a)+"px";ue(a)?c.style.paddingRight=d:c.style.paddingLeft=d}re(a,function(a){sg(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.Qc=function(){var a=[];re(this,function(b){a.push(b)});return a};f.Ef=function(){return this.zh};
f.select=function(){var a=this.Oa();a&&a.fd(this)};function vg(a,b){if(a.zh!=b){a.zh=b;wg(a);var c=a.o();c&&(He(c,"selected",b),b&&(c=a.Oa().o(),He(c,"activedescendant",oe(a))))}}f.Wa=function(){return this.fe};
f.ic=function(a){var b=a!=this.fe;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.fe=a;c=this.Oa();var d=this.o();if(ve(this)){if(!a&&c&&this.contains(c.ib)&&this.select(),d){if(c=qg(this))if(td(c,a),a&&this.N&&!c.hasChildNodes()){var e=[];re(this,function(a){e.push(a.Sh())});Sb(c,xb(e));re(this,function(a){a.Ba()})}this.Qd()}}else(c=qg(this))&&td(c,!1);d&&(this.pf().className=this.kf(),He(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.ic(!this.Wa())};
f.expand=function(){this.ic(!0)};f.collapse=function(){this.ic(!1)};f.xh=function(){var a=this.getParent();a&&(a.ic(!0),a.xh())};f.Sh=function(){var a=this.Oa(),b=!a.He||a==this.getParent()&&!a.Fh?this.Aa.ui:this.Aa.ti,a=this.Wa()&&ve(this),b={"class":b,style:yg(this)},c=[];a&&re(this,function(a){c.push(a.Sh())});a=wb("div",b,c);return wb("div",{"class":this.Aa.Ci,id:oe(this)},[zg(this),a])};function ug(a){return Math.max(0,(a.yd()-1)*a.Aa.ah)}
function zg(a){var b={};b["padding-"+(ue(a)?"right":"left")]=ug(a)+"px";var b={"class":a.me(),style:b},c=a.Rg(),d=wb("span",{style:{display:"inline-block"},"class":a.kf()}),e=wb("span",{"class":a.Aa.Di,title:a.pm||null},a.Yg);a=xb(e,wb("span",{},a.uk));return wb("div",b,[c,d,a])}f.me=function(){return this.Aa.Dg+(this.Ef()?" "+this.Aa.Fi:"")};f.Rg=function(){return wb("span",{type:"expand",style:{display:"inline-block"},"class":Ag(this)})};
function Ag(a){var b=a.Oa(),c=!b.He||b==a.getParent()&&!b.Fh,d=a.Aa,e=new qa;e.append(d.Mc," ",d.Ik," ");if(ve(a)){var g=0;b.Eh&&a.ue&&(g=a.Wa()?2:1);c||(g=a.Gb?g+8:g+4);switch(g){case 1:e.append(d.Mk);break;case 2:e.append(d.Lk);break;case 4:e.append(d.yi);break;case 5:e.append(d.Kk);break;case 6:e.append(d.Jk);break;case 8:e.append(d.zi);break;case 9:e.append(d.Ok);break;case 10:e.append(d.Nk);break;default:e.append(d.xi)}}else c?e.append(d.xi):a.Gb?e.append(d.zi):e.append(d.yi);return e.toString()}
function yg(a){var b=a.Wa()&&ve(a);return fb({"background-position":Bg(a),display:b?null:"none"})}function Bg(a){return(a.Gb?(a.yd()-1)*a.Aa.ah:"-100")+"px 0"}f.o=function(){var a=mg.k.o.call(this);a||(this.G=a=this.Eb().o(oe(this)));return a};function tg(a){return(a=a.o())?a.firstChild:null}f.of=function(){var a=tg(this);return a?a.firstChild:null};f.pf=function(){var a=tg(this);return a?a.childNodes[1]:null};function pg(a){return(a=tg(a))&&a.lastChild?a.lastChild.previousSibling:null}
function qg(a){return(a=a.o())?a.lastChild:null}f.V=function(a){this.Yg=a=rb(a);var b=pg(this);b&&Sb(b,a);(a=this.Oa())&&Cg(a,this)};f.Ga=function(){var a=qb(this.Yg);return-1!=a.indexOf("&")?"document"in l?Fa(a):Ha(a):a};function wg(a){var b=tg(a);b&&(b.className=a.me())}f.Qd=function(){var a=this.of();a&&(a.className=Ag(this));if(a=qg(this))a.style.backgroundPosition=Bg(this)};f.kh=function(a){"expand"==a.target.getAttribute("type")&&ve(this)?this.ue&&this.toggle():(this.select(),wg(this))};
f.lj=function(a){"expand"==a.target.getAttribute("type")&&ve(this)||this.ue&&this.toggle()};function Dg(a){return a.Wa()&&ve(a)?Dg(te(a,se(a)-1)):a}function rg(a,b){a.ld!=b&&(a.ld=b,Cg(b,a),re(a,function(a){rg(a,b)}))}
var ng={ah:19,Ei:"goog-tree-root goog-tree-item",Bi:"goog-tree-hide-root",Ci:"goog-tree-item",ti:"goog-tree-children",ui:"goog-tree-children-nolines",Dg:"goog-tree-row",Di:"goog-tree-item-label",Mc:"goog-tree-icon",Ik:"goog-tree-expand-icon",Mk:"goog-tree-expand-icon-plus",Lk:"goog-tree-expand-icon-minus",Ok:"goog-tree-expand-icon-tplus",Nk:"goog-tree-expand-icon-tminus",Kk:"goog-tree-expand-icon-lplus",Jk:"goog-tree-expand-icon-lminus",zi:"goog-tree-expand-icon-t",yi:"goog-tree-expand-icon-l",xi:"goog-tree-expand-icon-blank",
Bg:"goog-tree-expanded-folder-icon",vi:"goog-tree-collapsed-folder-icon",Cg:"goog-tree-file-icon",Ai:"goog-tree-expanded-folder-icon",wi:"goog-tree-collapsed-folder-icon",Fi:"selected"};function Eg(a,b,c){mg.call(this,a,b,c)}q(Eg,mg);Eg.prototype.Oa=function(){if(this.ld)return this.ld;var a=this.getParent();return a&&(a=a.Oa())?(rg(this,a),a):null};Eg.prototype.kf=function(){var a=this.Wa(),b=this.Wk;if(a&&b)return b;b=this.nl;if(!a&&b)return b;b=this.Aa;if(ve(this)){if(a&&b.Bg)return b.Mc+" "+b.Bg;if(!a&&b.vi)return b.Mc+" "+b.vi}else if(b.Cg)return b.Mc+" "+b.Cg;return""};/*

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
function Fg(a){var b;D&&(b=workarea.uf());var c=w("xml");a=Pc(a,!0);for(var d=0,e;e=a[d];d++){var g=Gg(e);e=e.ba();g.setAttribute("x",D?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}c.setAttribute("level",B);return c}
function Gg(a){var b=w("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.hb){var c=a.hb();c&&b.appendChild(c)}for(var d=0;c=a.R[d];d++)for(var e=0,g;g=c.ra[e];e++)if(g.name&&g.md){var h=w("field",null,g.pb());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.nf())c=w("comment",null,c),"object"==typeof a.X&&(c.setAttribute("pinned",a.X.J()),d=a.X.Pc(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.R[e];e++){var k;g=!0;5!=c.type&&
(h=K(c.s),1==c.type?(k=w("value"),d=!0):3==c.type&&(k=w("statement")),h&&(k.appendChild(Gg(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.te);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.vd&&!I||b.setAttribute("deletable",!1);a.Ub&&!I||b.setAttribute("movable",!1);a.rc&&!I||b.setAttribute("editable",!1);if(a=Hg(a))k=w("next",null,Gg(a)),b.appendChild(k);return b}
function Ig(a){return(new XMLSerializer).serializeToString(a)}function Jg(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Kg(a,b){var c;D&&(c=a.uf());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=Lg(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(D?c-h:h,e)}}
function Lg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=Mg(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.p&&d.i(!0,!1,!0);d.fill(a,e);d.Ja=g}else d=dd(a,e);d.Ha&&d.Ha();(g=b.getAttribute("inline"))&&L(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Ce("true"==g);(g=b.getAttribute("deletable"))&&Ng(d,"true"==g);if(g=b.getAttribute("movable"))d.Ub="true"==g;(g=b.getAttribute("editable"))&&Og(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,p=0,y;y=k.childNodes[p];p++)3==y.nodeType&&y.data.match(/^\s*$/)||(h=y);p=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.Bb&&(d.Bb(k),d.Ha&&d.Ha());break;case "comment":d.Be(k.textContent);var t=k.getAttribute("pinned");t&&setTimeout(function(){d.X&&d.X.L&&d.X.L("true"==t)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.X&&d.X.L&&d.X.Dc(h,k);break;case "title":case "field":ed(d,k.textContent,p);break;case "value":case "statement":k=Pg(d,p);if(!k)throw"Input "+p+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=Lg(a,h,c),h.H)Qg(k.s,h.H);else if(h.K)Qg(k.s,h.K);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.B)throw"Next statement does not exist.";if(d.B.v)throw"Next statement is already connected.";h=Lg(a,
h,c);if(!h.K)throw"Next block does not have previous statement.";Qg(d.B,h.K)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.cd("true"==b);a.w&&((a=Hg(d))?a.C():d.C());return d}function Rg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}l.Blockly||(l.Blockly={});l.Blockly.Xml||(l.Blockly.Xml={});l.Blockly.Xml.domToText=Ig;l.Blockly.Xml.domToWorkspace=Kg;l.Blockly.Xml.textToDom=Jg;
l.Blockly.Xml.workspaceToDom=Fg;/*

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
function Sg(a,b,c,d,e,g,h){var k=Tg;D&&(k=-k);this.yk=Yb(k);this.t=a;this.ac=b;this.Ij=c;a.Od.appendChild(this.zg(b,!(!g||!h)));Ug(this,d,e);g&&h||(a=this.ac.getBBox(),g=a.width+2*Vg,h=a.height+2*Vg);this.Dc(g,h);Wg(this);Xg(this);this.wh=!0;I||(F(this.Ye,"mousedown",this,this.Ck),this.gc&&F(this.gc,"mousedown",this,this.Zl))}var Vg=6,Tg=20,Yg=null,Zg=null;function $g(){Yg&&(H(Yg),Yg=null);Zg&&(H(Zg),Zg=null)}f=Sg.prototype;f.wh=!1;f.vb=0;f.rg=0;f.$c=0;f.ze=0;f.M=0;f.wa=0;f.ug=!0;
f.zg=function(a,b){this.wb=E("g",{},null);var c=E("g",{filter:"url(#blocklyEmboss)"},this.wb);this.ji=E("path",{},c);this.Ye=E("rect",{"class":"blocklyDraggable",x:0,y:0,rx:Vg,ry:Vg},c);b?(this.gc=E("g",{"class":D?"blocklyResizeSW":"blocklyResizeSE"},this.wb),c=2*Vg,E("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.gc),E("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.gc),E("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.gc)):this.gc=
null;this.wb.appendChild(a);return this.wb};f.Ck=function(a){ah(this);$g();Wc(a)||bh(a)||(ch(dh),this.Oi=D?this.$c+a.clientX:this.$c-a.clientX,this.Uk=this.ze-a.clientY,Yg=F(document,"mouseup",this,$g),Zg=F(document,"mousemove",this,this.Dk),eg(),a.stopPropagation())};f.Dk=function(a){this.ug=!1;this.$c=D?this.Oi-a.clientX:this.Oi+a.clientX;this.ze=this.Uk+a.clientY;Wg(this);Xg(this)};
f.Zl=function(a){ah(this);$g();Wc(a)||(ch(dh),this.Yl=D?this.M+a.clientX:this.M-a.clientX,this.Xl=this.wa-a.clientY,Yg=F(document,"mouseup",this,$g),Zg=F(document,"mousemove",this,this.$l),eg(),a.stopPropagation())};f.$l=function(a){this.ug=!1;var b=this.Yl,c=this.Xl+a.clientY,b=D?b-a.clientX:b+a.clientX;this.Dc(b,c);D&&Wg(this)};function ah(a){a.wb.parentNode.appendChild(a.wb)}function Ug(a,b,c){a.vb=b;a.rg=c;a.wh&&Wg(a)}
function Wg(a){a.wb.setAttribute("transform","translate("+(D?a.vb-a.$c-a.M:a.vb+a.$c)+", "+(a.ze+a.rg)+")")}f.Pc=function(){return{width:this.M,height:this.wa}};
f.Dc=function(a,b){var c=2*Vg;a=Math.max(a,c+45);b=Math.max(b,c+18);this.M=a;this.wa=b;this.Ye.setAttribute("width",a);this.Ye.setAttribute("height",b);this.gc&&(D?this.gc.setAttribute("transform","translate("+2*Vg+", "+(b-c)+") scale(-1 1)"):this.gc.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.wh){if(this.ug){var c=-this.M/4,d=-this.wa-25,e=this.t.uc();D?this.vb-e.lb-c-this.M<M?c=this.vb-e.lb-this.M-M:this.vb-e.lb-c>e.na&&(c=this.vb-e.lb-e.na):this.vb+c<e.lb?c=e.lb-this.vb:
e.lb+e.na<this.vb+c+this.M+10+M&&(c=e.lb+e.na-this.vb-this.M-M);this.rg+d<e.Fc&&(d=this.Ij.getBBox().height);this.$c=c;this.ze=d}Wg(this);Xg(this)}eh(this.wb,"resize")};
function Xg(a){var b=[],c=a.M/2,d=a.wa/2,e=-a.$c,g=-a.ze;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;D&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var p=k+Math.PI/2;p>2*Math.PI&&(p-=2*Math.PI);var y=Math.sin(p),t=Math.cos(p),C=a.Pc(),p=(C.width+C.height)/10,p=Math.min(p,C.width,C.height)/2,C=1-8/h,e=c+C*e,g=d+C*g,C=c+p*t,z=d+p*y,c=c-p*t,d=d-p*y,y=k+a.yk;y>2*Math.PI&&(y-=2*Math.PI);k=Math.sin(y)*h/4;h=Math.cos(y)*h/4;b.push("M"+C+","+z);b.push("C"+(C+h)+","+(z+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.ji.setAttribute("d",b.join(" "))}f.n=function(a){this.Ye.setAttribute("fill",a);this.ji.setAttribute("fill",a)};f.i=function(){$g();kc(this.wb);this.Ij=this.ac=this.t=this.wb=null};/*

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
function fh(a){this.t=a}f=fh.prototype;f.Yd=47;f.hg=45;f.Td=15;f.bk=35;f.Zh=35;f.Te=25;f.Fd=!1;f.j=null;f.eg=null;f.fh=0;f.zc=0;f.gj=0;f.Qj=0;
f.P=function(){this.j=E("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=E("clipPath",{id:"blocklyTrashBodyClipPath"},this.j);E("rect",{width:this.Yd,height:this.hg,y:this.Td},a);E("image",{width:gh,height:hh,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.j).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ih+jh);a=E("clipPath",{id:"blocklyTrashLidClipPath"},this.j);E("rect",{width:this.Yd,height:this.Td},a);this.eg=E("image",{width:gh,height:hh,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.j);this.eg.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ih+jh);this.sg();return this.j};f.g=function(){kh(this,!1);this.Ac();F(window,"resize",this,this.Ac)};f.i=function(){this.j&&(kc(this.j),this.j=null);this.t=this.eg=null;l.clearTimeout(this.fh)};f.Ac=function(){var a=this.t.uc();a&&(this.gj=D?this.Zh:a.na+a.ab-this.Yd-this.Zh,this.Qj=a.Da+a.bb-(this.hg+this.Td)-this.bk,this.j.setAttribute("transform","translate("+this.gj+","+this.Qj+")"))};
f.le=function(){var a=lh(this.j);return new jd(a.x-this.Te,a.y-this.Te,this.Yd+2*this.Te,this.hg+this.Td+2*this.Te)};function kh(a,b){a.Fd!=b&&(l.clearTimeout(a.fh),a.Fd=b,a.sg())}f.sg=function(){this.zc+=this.Fd?.2:-.2;this.zc=Wb(this.zc,0,1);var a=45*this.zc;this.eg.setAttribute("transform","rotate("+(D?-a:a)+", "+(D?4:this.Yd-4)+", "+(this.Td-2)+")");this.j.style.opacity=.2+.2*this.zc;if(0<this.zc||1>this.zc)this.fh=lg(this.sg,20,this)};f.close=function(){kh(this,!1)};/*

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
function mh(a){this.t=a;this.fa=null;this.ne=new nh(a,!0,!0);this.Qe=new nh(a,!1,!0);this.be=E("rect",{height:M,width:M,style:"fill: #fff"},null);oh(this.be,a.Od)}mh.prototype.i=function(){H(this.Pf);this.Pf=null;kc(this.be);this.fa=this.t=this.be=null;this.ne.i();this.ne=null;this.Qe.i();this.Qe=null};
mh.prototype.resize=function(){var a=this.t.uc();if(a){var b=!1,c=!1;this.fa&&this.fa.na==a.na&&this.fa.Da==a.Da&&this.fa.bb==a.bb&&this.fa.ab==a.ab?(this.fa&&this.fa.sd==a.sd&&this.fa.lb==a.lb&&this.fa.$b==a.$b||(b=!0),this.fa&&this.fa.cb==a.cb&&this.fa.Fc==a.Fc&&this.fa.xb==a.xb||(c=!0)):c=b=!0;b&&this.ne.resize(a);c&&this.Qe.resize(a);this.fa&&this.fa.na==a.na&&this.fa.ab==a.ab||this.be.setAttribute("x",this.Qe.Gc);this.fa&&this.fa.Da==a.Da&&this.fa.bb==a.bb||this.be.setAttribute("y",this.ne.gg);
this.fa=a}};mh.prototype.set=function(a,b){this.ne.set(a);this.Qe.set(b)};function nh(a,b,c){this.t=a;this.Qf=c||!1;this.Pa=b;this.zg();b?(this.sb.setAttribute("height",M),this.ta.setAttribute("height",M-6),this.ta.setAttribute("y",3)):(this.sb.setAttribute("width",M),this.ta.setAttribute("width",M-6),this.ta.setAttribute("x",3));this.oj=F(this.sb,"mousedown",this,this.Jl);this.pj=F(this.ta,"mousedown",this,this.Kl)}var ph,qh,M=15;aa("document.documentElement.ontouchstart")&&(M=25);f=nh.prototype;
f.i=function(){this.Of();this.Pf&&(H(this.Pf),this.Pf=null);H(this.oj);this.oj=null;H(this.pj);this.pj=null;kc(this.j);this.t=this.ta=this.sb=this.j=null};
f.resize=function(a){if(!a&&(a=this.t.uc(),!a))return;if(this.Pa){var b=a.na;this.Qf?b-=M:this.L(b<a.cb);this.Xa=b/a.sd;if(-Infinity===this.Xa||Infinity===this.Xa||isNaN(this.Xa))this.Xa=0;var c=a.na*this.Xa,d=(a.lb-a.$b)*this.Xa;this.ta.setAttribute("width",Math.max(0,c));this.Gc=a.ab;this.Qf&&D&&(this.Gc+=a.ab+M);this.gg=a.bb+a.Da-M;this.j.setAttribute("transform","translate("+this.Gc+", "+this.gg+")");this.sb.setAttribute("width",Math.max(0,b));this.ta.setAttribute("x",rh(this,d))}else{b=a.Da;
this.Qf?b-=M:this.L(b<a.cb);this.Xa=b/a.cb;if(-Infinity===this.Xa||Infinity===this.Xa||isNaN(this.Xa))this.Xa=0;c=a.Da*this.Xa;d=(a.Fc-a.xb)*this.Xa;this.ta.setAttribute("height",Math.max(0,c));this.Gc=a.ab;D||(this.Gc+=a.na-M);this.gg=a.bb;this.j.setAttribute("transform","translate("+this.Gc+", "+this.gg+")");this.sb.setAttribute("height",Math.max(0,b));this.ta.setAttribute("y",rh(this,d))}sh(this)};
f.zg=function(){this.j=E("g",{},null);this.sb=E("rect",{"class":"blocklyScrollbarBackground"},this.j);var a=Math.floor((M-6)/2);this.ta=E("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.j);oh(this.j,this.t.Od)};f.J=function(){return"none"!=this.j.getAttribute("display")};f.L=function(a){if(a!=this.J()){if(this.Qf)throw"Unable to toggle visibility of paired scrollbars.";a?this.j.setAttribute("display","block"):(this.t.Fj({x:0,y:0}),this.j.setAttribute("display","none"))}};
f.Jl=function(a){this.Of();if(!Wc(a)){var b=th(a),b=this.Pa?b.x:b.y,c=lh(this.ta),c=this.Pa?c.x:c.y,d=parseFloat(this.ta.getAttribute(this.Pa?"width":"height")),e=parseFloat(this.ta.getAttribute(this.Pa?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ta.setAttribute(this.Pa?"x":"y",rh(this,e));sh(this)}a.stopPropagation()};
f.Kl=function(a){this.Of();Wc(a)||(this.hm=parseFloat(this.ta.getAttribute(this.Pa?"x":"y")),this.jm=this.Pa?a.clientX:a.clientY,ph=F(document,"mouseup",this,this.Of),qh=F(document,"mousemove",this,this.Ml));a.stopPropagation()};f.Ml=function(a){this.ta.setAttribute(this.Pa?"x":"y",rh(this,this.hm+((this.Pa?a.clientX:a.clientY)-this.jm)));sh(this)};f.Of=function(){uh();eg(!0);ph&&(H(ph),ph=null);qh&&(H(qh),qh=null)};
function rh(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.Pa?"width":"height",d=parseFloat(a.sb.getAttribute(c)),c=parseFloat(a.ta.getAttribute(c));b=Math.min(b,d-c)}return b}function sh(a){var b=parseFloat(a.ta.getAttribute(a.Pa?"x":"y")),c=parseFloat(a.sb.getAttribute(a.Pa?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.Pa?c.x=b:c.y=b;a.t.Fj(c)}f.set=function(a){this.ta.setAttribute(this.Pa?"x":"y",a*this.Xa);sh(this)};
function oh(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function vh(a,b){vh.k.constructor.call(this);this.uc=a;this.Fj=b;var c=[];c[1]=new wh;c[2]=new wh;c[3]=new wh;c[4]=new wh;this.Hk=c}q(vh,Oc);f=vh.prototype;f.w=!0;f.ej=!1;f.Kg=!1;f.scrollX=0;f.scrollY=0;f.kb=null;f.Mg=null;f.Cc=null;f.P=function(){this.j=E("g",{},null);this.W=E("g",{},this.j);this.Od=E("g",{},this.j);this.nb();return this.j};
f.i=function(){this.w=!1;vh.k.i.call(this);this.j&&(kc(this.j),this.j=null);this.Od=this.W=null;this.U&&(this.U.i(),this.U=null);this.kb&&(this.kb.i(),this.kb=null)};function xh(){var a=x;if(xc&&!I){a.kb=new fh(a);var b=a.kb.P();a.j.insertBefore(b,a.W);a.kb.g()}}f.Zd=function(a){vh.k.Zd.call(this,a);yh&&this==x&&-1==zh.indexOf(a)&&zh.push(a)};f.Zf=function(a){vh.k.Zf.call(this,a);yh&&this==x&&zh.Ln(a)};f.clear=function(){eg();vh.k.clear.call(this)};f.uf=function(){return this.uc().na};
f.C=function(){for(var a=this.eb(),b=0,c;c=a[b];b++)c.Qc().length||c.C()};function Ah(a,b){a.Th=b;a.Uh&&(H(a.Uh),a.Uh=null);b&&(a.Uh=F(a.W,"blocklySelectChange",a,function(){this.Th=!1}))}function Bh(a){var b=x;b.Th&&0!=Xc&&Ah(b,!1);if(b.Th){var c=null;if(a&&(c=Qc(b,a),!c))return;Ah(b,!1);c?c.select():N&&Ch();setTimeout(function(){Ah(b,!0)},1)}}f.nb=function(){if(this.w){this.Mg&&clearTimeout(this.Mg);var a=this.W;a&&(this.Mg=setTimeout(function(){eh(a,"blocklyWorkspaceChange")},0))}};
function Dh(a,b){var c=th(b),c=new v(c.x,c.y);if(a.Ii){if(a.Ii.contains(c))return kh(a.kb,!0),ch(Eh),!0;kh(a.kb,!1)}if(a.Hi&&a.Hi.contains(c))return ch(Eh),!0;ch(dh);return!1}vh.prototype.clear=vh.prototype.clear;/*

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
function Fh(a){this.D=a}f=Fh.prototype;f.da=null;f.Sc=0;f.Tc=0;f.Lc=function(){this.xa||(this.xa=E("g",{},null),this.D.T().appendChild(this.xa),F(this.xa,"mouseup",this,this.Zg),this.kc())};f.i=function(){kc(this.xa);this.xa=null;this.L(!1);this.D=null};f.kc=function(){this.D.Sb?Vc(this.xa,"blocklyIconGroup"):Uc(this.xa,"blocklyIconGroup")};f.J=function(){return!!this.da};f.Zg=function(){this.D.Sb||this.L(!this.J())};f.Ec=function(){if(this.J()){var a=Uf(Vf(this.D.yg));this.da.n(a)}};
function Gh(a){var b=a.D.ba(),c=Hh(a.xa),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Sc||b!==a.Tc)a.Sc=d,a.Tc=b,a.J()&&Ug(a.da,d,b)};/*

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
function Ih(a){Ih.k.constructor.call(this,null);this.vj=[];for(var b=0;b<a.length;b++){var c=w("block",{type:a[b]});this.vj[b]=c}}q(Ih,Fh);f=Ih.prototype;f.Rd=0;f.Re=0;function Jh(a){a.Dd||(Fh.prototype.Lc.call(a),E("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.xa),a.Dd=E("text",{"class":"blocklyIconMark",x:8,y:12},a.xa),a.Dd.appendChild(document.createTextNode("\u2605")))}f.Zg=function(a){this.D.rc&&!I&&Fh.prototype.Zg.call(this,a)};
f.Ag=function(){this.kd=E("svg",{x:Vg,y:Vg},null);E("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.kd);var a=this;this.t=new vh(function(){var b=0;D&&(b+=a.Rd);return{Da:a.Re,na:0,bb:0,ab:b}},null);this.t.U=new Kh;this.t.U.$d=!1;this.kd.appendChild(this.t.U.P());this.kd.appendChild(this.t.P());return this.kd};f.kc=function(){this.D.rc&&!I?Fh.prototype.kc.call(this):(this.L(!1),Vc(this.xa,"blocklyIconGroup"))};
f.ag=function(){var a=2*Vg,b=this.t.W.getBBox(),c=Lh(this.t.U),d;d=D?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.cb+20);d+=3*a;if(Math.abs(this.Rd-d)>a||Math.abs(this.Re-b)>a)this.Rd=d,this.Re=b,this.da.Dc(d+a,b+a),this.kd.setAttribute("width",this.Rd),this.kd.setAttribute("height",this.Re);D&&this.t.W.setAttribute("transform","translate("+this.Rd+",0)")};
f.L=function(a){if(a!=this.J())if(a){this.da=new Sg(this.D.p,this.Ag(),this.D.Xb,this.Sc,this.Tc,null,null);var b=this;this.t.U.g(this.t);this.t.U.show(this.vj);this.hc=this.D.td(this.t);a=this.hc.ob();for(var c=0,d;d=a[c];c++)d.C();this.hc.Ub=!1;Ng(this.hc,!1);a=2*this.t.U.za;c=this.t.U.M+a;D&&(c=-c);this.hc.moveBy(c,a);this.D.Ae&&(this.D.Ae(this.hc),this.Gh=F(this.D.p.W,"blocklyWorkspaceChange",this.D,function(){b.D.Ae(b.hc)}));this.ag();F(this.t.W,"blocklyWorkspaceChange",this.D,function(){if(0==
Xc)for(var a=Pc(b.t,!1),c=0,d;d=a[c];c++){var k=d.ba(),p=Mh(d);20>k.y+p.height&&d.moveBy(0,20-p.height-k.y)}b.hc.p==b.t&&(a=b.D.w,b.D.w=!1,b.D.ae(b.hc),b.D.w=a,b.D.Ha(),b.D.w&&b.D.C(),b.ag(),b.D.p.nb())});this.Ec()}else this.kd=null,this.t.i(),this.hc=this.t=null,this.da.i(),this.da=null,this.Re=this.Rd=0,this.Gh&&(H(this.Gh),this.Gh=null)};f.i=function(){this.D.rb=null;Fh.prototype.i.call(this)};/*

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
function Nh(a,b){this.h=a;this.v=null;this.type=b;this.aa=this.Lb=0;this.Rb=!1;this.qc=this.h.p.Hk}f=Nh.prototype;f.i=function(){if(this.v)throw"Disconnect connection before disposing of it.";this.Rb&&Oh(this.qc[this.type],this);this.Rb=!1;Ph==this&&(Ph=null);Qh==this&&(Qh=null)};function Rh(a){return 1==a.type||3==a.type}
function Qg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.p!==b.h.p)throw"Blocks are on different workspaces.";if(Sh[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.v)throw"Source connection already connected (value).";if(b.v){var c=K(b);c.Ka(null);if(!c.H)throw"Orphan block does not have an output connection.";for(var d=a.h;d=Th(d,c);)if(K(d))d=K(d);else{Qg(d,c.H);c=null;break}c&&setTimeout(function(){Uh(c.H,b)},Vh)}}else{if(a.v)throw"Source connection already connected (block).";
if(b.v){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=K(b);c.Ka(null);if(!c.K)throw"Orphan block does not have a previous connection.";for(d=a.h;d.B;)if(d.B.v)d=Hg(d);else{Wh(c.K,d.B)&&(Qg(d.B,c.K),c=null);break}c&&setTimeout(function(){Uh(c.K,b)},Vh)}}var e;Rh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.v=b;b.v=a;e.Ka(d);d.w&&Xh(d);e.w&&Xh(e);d.w&&e.w&&(3==a.type||4==a.type?e.C():d.C())}
function Th(a,b){for(var c=!1,d=0;d<a.R.length;d++){var e=a.R[d].s;if(e&&1==e.type&&Wh(b.H,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.v;if(!a)throw"Source connection not connected.";if(a.v!=this)throw"Target connection not connected to source connection.";this.v=a.v=null;var b;Rh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.w&&b.C();a.w&&(Xh(a),a.C())};function K(a){return a.v?a.v.h:null}
function Uh(a,b){if(0==Xc){var c=Yh(a.h);if(!c.Sb){var d=!1;if(!c.Ub||I){c=Yh(b.h);if(!c.Ub||I)return;b=a;d=!0}c.T().parentNode.appendChild(c.T());var e=b.Lb+Zh-a.Lb,g=b.aa+Zh-a.aa;d&&(g=-g);D&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.Rb&&Oh(this.qc[this.type],this);this.Lb=a;this.aa=b;$h(this.qc[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.Lb+a,this.aa+b)};
f.$i=function(){var a;1==this.type||2==this.type?(a=D?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=D?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.ba();Nh.yf=E("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.Lb-b.x)+", "+(this.aa-b.y)+")"},this.h.T())};
function ai(a){var b=Math.round(a.v.Lb-a.Lb),c=Math.round(a.v.aa-a.aa);if(0!=b||0!=c){a=K(a);var d=a.T();if(!d)throw"block is not rendered.";d=Hh(d);a.T().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");bi(a,-b,-c)}}
function ci(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.v||1==c.type&&c.v&&(!K(c).Ub||I)||!Wh(C,c))return!0;c=c.h;do{if(t==c)return!0;c=c.getParent()}while(c);var d=h-g[a].Lb,c=k-g[a].aa,d=Math.sqrt(d*d+c*c);d<=b&&(y=g[a],b=d);return c<b}if(a.v)return{s:null,wj:b};var g=a.qc[Sh[a.type]],h=a.Lb+c,k=a.aa+d;c=0;for(var p=d=g.length-2;c<p;)g[p].aa<k?c=p:d=p,p=Math.floor((c+d)/2);d=c=p;var y=null,t=a.h,C=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{s:y,wj:b}}
function Wh(a,b){if(!a.nc||!b.nc)return!0;for(var c=0;c<a.nc.length;c++)if(-1!=b.nc.indexOf(a.nc[c]))return!0;return!1}f.I=function(a){a?(ea(a)||(a=[a]),this.nc=a,this.v&&!Wh(this,this.v)&&(Rh(this)?K(this).Ka(null):this.h.Ka(null),this.h.ua())):this.nc=null;return this};
function di(a){var b=Zh;function c(a){var c=e-d[a].Lb,h=g-d[a].aa;Math.sqrt(c*c+h*h)<=b&&p.push(d[a]);return h<b}var d=a.qc[Sh[a.type]],e=a.Lb,g=a.aa;a=0;for(var h=d.length-2,k=h;a<k;)d[k].aa<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,p=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return p}
function ei(a){a.Rb||$h(a.qc[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=K(a)){var c;a.isCollapsed()?(c=[],a.H&&c.push(a.H),a.B&&c.push(a.B),a.K&&c.push(a.K)):c=fi(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,ei(c[d]));0==b.length&&(b[0]=a)}return b}function wh(){}wh.prototype=[];
function $h(a,b){if(b.Rb)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].aa<b.aa)c=e+1;else if(a[e].aa>b.aa)d=e;else{c=e;break}}a.splice(c,0,b);b.Rb=!0}
function Oh(a,b){if(!b.Rb)throw"Connection not in database.";b.Rb=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].aa<b.aa?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].aa==b.aa;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].aa==b.aa);throw"Unable to find connection in connectionDB.";};/*

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
var J={qm:0,Yk:function(){var a=(++J.qm).toString();return yh?gi(a):a},jn:function(a){var b={g:function(){var b=this;this.n(a.on);this.A=a.A;"string"==typeof a.Ra?this.m(a.Ra):"function"==typeof a.Ra&&this.m(function(){return a.Ra(b)});"undefined"!=a.Rl?O(this,a.Rl):(P(this,"undefined"==typeof a.Ul?!0:a.Ul),Q(this,"undefined"==typeof a.Gl?!0:a.Gl));var d=[];d.push(a.text);a.xk&&a.xk.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):Ka("addTemplate() can only handle value inputs.")});
d.push(1);a.sl&&this.Qn(a.sl);hi.prototype.qb.apply(this,d)}};b.hb=a.Tn?function(){var b=a.Dl?a.Gn():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.Dl;J[a.nn]=b}};/*

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
function ii(a){ii.k.constructor.call(this,a);this.Lc()}q(ii,Fh);f=ii.prototype;f.ya="";f.M=160;f.wa=80;f.Lc=function(){Fh.prototype.Lc.call(this);E("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.xa);this.Dd=E("text",{"class":"blocklyIconMark",x:8,y:13},this.xa);this.Dd.appendChild(document.createTextNode("?"))};
f.Ag=function(){this.he=E("foreignObject",{x:Vg,y:Vg},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.Za=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Za.className="blocklyCommentTextarea";this.Za.setAttribute("dir",D?"RTL":"LTR");a.appendChild(this.Za);this.he.appendChild(a);F(this.Za,"mouseup",this,this.om);return this.he};
f.kc=function(){this.J()&&(this.L(!1),this.L(!0));Fh.prototype.kc.call(this)};f.ag=function(){var a=this.da.Pc(),b=2*Vg;this.he.setAttribute("width",a.width-b);this.he.setAttribute("height",a.height-b);this.Za.style.width=a.width-b-4+"px";this.Za.style.height=a.height-b-4+"px"};
f.L=function(a){if(a!=this.J())if((!this.D.rc||I)&&!this.Za||r)ji.prototype.L.call(this,a);else{var b=this.Ga(),c=this.Pc();a?(this.da=new Sg(this.D.p,this.Ag(),this.D.Xb,this.Sc,this.Tc,this.M,this.wa),F(this.da.wb,"resize",this,this.ag),this.Ec(),this.ya=null):(this.da.i(),this.he=this.Za=this.da=null);this.V(b);this.Dc(c.width,c.height)}};f.om=function(){ah(this.da);this.Za.focus()};f.Pc=function(){return this.J()?this.da.Pc():{width:this.M,height:this.wa}};
f.Dc=function(a,b){this.Za?this.da.Dc(a,b):(this.M=a,this.wa=b)};f.Ga=function(){return this.Za?this.Za.value:this.ya};f.V=function(a){this.Za?this.Za.value=a:this.ya=a};f.i=function(){this.D.X=null;Fh.prototype.i.call(this)};/*

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
var ki=!1,li=0,mi=0,ni={x:0,y:0},oi=null,pi=null,qi=null,ri=null,si=null,ti=null;function ui(){var a=E("g",{"class":"blocklyHidden"},null);qi=a;ti=E("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);si=E("rect",{"class":"blocklyTooltipBackground"},a);ri=E("text",{"class":"blocklyTooltipText"},a);return a}function vi(a){F(a,"mouseover",null,wi);F(a,"mouseout",null,xi);F(a,"mousemove",null,yi)}function wi(a){for(a=a.target;!m(a.Ra)&&!ga(a.Ra);)a=a.Ra;oi!=a&&(zi(),pi=null,oi=a);clearTimeout(li)}
function xi(){li=setTimeout(function(){pi=oi=null;zi()},1);clearTimeout(mi)}function yi(a){oi&&oi.Ra&&0==Xc&&!Mf&&(ki?(a=th(a),10<Math.sqrt(Math.pow(ni.x-a.x,2)+Math.pow(ni.y-a.y,2))&&zi()):pi!=oi&&(clearTimeout(mi),ni=th(a),mi=setTimeout(Ai,1E3)))}function zi(){ki&&(ki=!1,qi&&(qi.style.display="none"));clearTimeout(mi)}
function Ai(){pi=oi;if(qi){ic(ri);var a=oi.Ra;ga(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,p=1,d=0;d<c.length-1;d++)p<(d+1.5)/k?(p++,b[d]=!0):b[d]=!1;for(var b=Bi(c,b,a),d=Ci(c,b,a),k=c,p=[],y=0;y<k.length;y++)p.push(k[y]),void 0!==b[y]&&p.push(b[y]?"\n":" ");b=p.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)E("tspan",{dy:"1em",
x:5},ri).appendChild(document.createTextNode(a[c]));ki=!0;qi.style.display="block";a=ri.getBBox();c=10+a.width;e=a.height;si.setAttribute("width",c);si.setAttribute("height",e);ti.setAttribute("width",c);ti.setAttribute("height",e);if(D)for(e=a.width,g=0;h=ri.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=ni.x;e=D?e-(0+c):e+0;c=ni.y+10;g=Di();c+a.height>g.height&&(c-=a.height+20);D?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);qi.setAttribute("transform",
"translate("+e+","+c+")")}}function Ci(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function Bi(a,b,c){for(var d=Ci(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=Ci(a,h,c);k>d&&(d=k,e=h)}return e?Bi(a,e,c):b};/*

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
function Ei(a){this.h=null;this.jd=new Rb(0,25);this.V(a)}q(Ei,Sc);f=Ei.prototype;f.clone=function(){return new Ei(this.Ga())};f.md=!1;f.g=function(a){this.h||(this.h=a,this.ca=E("text",{"class":"blocklyText"},null),a.T().appendChild(this.ca),this.ca.Ra=this.h,vi(this.ca),Tc(this))};f.i=function(){kc(this.ca);this.ca=null};f.T=function(){return this.ca};f.m=function(a){this.ca.Ra=a};/*

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
function Fi(a,b,c,d){this.type=a;this.name=b;this.h=c;this.s=d;this.ra=[];this.align=-1;this.ga=!0}function R(a,b,c){if(!b&&!c)return a;m(b)&&(b=new Ei(b));a.h.w&&b.g(a.h);b.name=c;b.qh&&R(a,b.qh);a.ra.push(b);b.Oh&&R(a,b.Oh);a.h.w&&(a.h.C(),a.h.ua());return a}function Gi(a){for(var b=0,c;c=a.ra[b];b++)if("NUM"===c.name){c.i();a.ra.splice(b,1);a.h.w&&(a.h.C(),a.h.ua());return}Ka('Field "%s" not found.',"NUM")}f=Fi.prototype;f.J=function(){return this.ga};
f.L=function(a){var b=[];if(this.ga==a)return b;for(var c=(this.ga=a)?"block":"none",d=0,e;e=this.ra[d];d++)e.L(a);if(this.s){if(a)b=ei(this.s);else if(d=this.s,d.Rb&&Oh(d.qc[d.type],d),d.v){e=K(d).ob();for(var g=0;g<e.length;g++){for(var h=e[g],k=fi(h,!0),p=0;p<k.length;p++){var y=k[p];y.Rb&&Oh(d.qc[y.type],y)}h=Hi(h);for(k=0;k<h.length;k++)h[k].L(!1)}}if(d=K(this.s))d.T().style.display=c,a||(d.w=!1)}return b};f.I=function(a){if(!this.s)throw"This input does not have a connection.";this.s.I(a);return this};
function Ii(a,b){a.align=b;a.h.w&&a.h.C();return a}f.g=function(){for(var a=0;a<this.ra.length;a++)this.ra[a].g(this.h)};f.i=function(){for(var a=0,b;b=this.ra[a];a++)b.i();this.s&&this.s.i();this.h=null};/*

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
function ji(a){ji.k.constructor.call(this,a);this.Lc()}q(ji,Fh);f=ji.prototype;f.ya="";f.Lc=function(){Fh.prototype.Lc.call(this);E("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.xa);this.Dd=E("text",{"class":"blocklyIconMark",x:8,y:13},this.xa);this.Dd.appendChild(document.createTextNode("!"))};
f.L=function(a){if(a!=this.J())if(a){var b=this.ya;a=E("text",{"class":"blocklyText blocklyBubbleText",y:Vg},null);for(var b=b.split("\n"),c=0;c<b.length;c++)E("tspan",{dy:"1em",x:Vg},a).appendChild(document.createTextNode(b[c]));this.da=new Sg(this.D.p,a,this.D.Xb,this.Sc,this.Tc,null,null);if(D)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+Vg);this.Ec();a=this.da.Pc();this.da.Dc(a.width,a.height)}else this.da.i(),this.da=null};
f.V=function(a){this.ya!=a&&(this.ya=a,this.J()&&(this.L(!1),this.L(!0)))};f.i=function(){this.D.Yb=null;Fh.prototype.i.call(this)};/*

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
function hi(){}function dd(a,b){if(yh)return Ji.create(hi,a,b);var c=a.w?new Ki:new hi;c.initialize(a,b);return c}f=hi.prototype;f.initialize=function(a,b){this.id=J.Yk();a.Zd(this);this.fill(a,b)};f.fill=function(a,b){this.K=this.B=this.H=null;this.R=[];this.disabled=this.w=this.te=!1;this.Ra="";this.contextMenu=!0;this.Xc=null;this.Mb=[];this.rc=this.Ub=this.vd=!0;this.Kc=!1;this.X=null;this.Xj=new v(0,0);this.p=a;this.Sb=a.ej;if(b){this.type=b;var c=J[b],d;for(d in c)this[d]=c[d]}ga(this.g)&&this.g()};
function Mg(a,b){return yh?Li.get(a):Qc(b,a)}f.i=function(a,b,c){Mi(this,a);this.p&&!c&&(this.p.Zf(this),this.p=null);N==this&&(N=null);for(a=this.Mb.length-1;0<=a;a--)this.Mb[a].i(!1);for(a=0;b=this.R[a];a++)b.i();this.R.length=0;b=fi(this,!0);for(a=0;a<b.length;a++)c=b[a],c.v&&c.disconnect(),b[a].i();if(yh&&!Ni)Li["delete"](this.id.toString())};
function Mi(a,b){var c;c=!1;if(a.H)a.H.v&&a.Ka(null);else{var d=null;a.K&&a.K.v&&(d=a.K.v,a.Ka(null));var e=Hg(a);if(b&&e){var g=a.B.v;e.Ka(null);d&&Wh(d,g)&&Qg(d,g)}}c&&a.moveBy(Zh*(D?-1:1),2*Zh)}function fi(a,b){var c=[];if(b||a.w)if(a.H&&c.push(a.H),a.B&&c.push(a.B),a.K&&c.push(a.K),b||!a.Kc)for(var d=0,e;e=a.R[d];d++)e.s&&c.push(e.s);return c}
f.ua=function(){if(0==Xc){var a=Yh(this);if(!a.Sb)for(var b=fi(this,!1),c=0;c<b.length;c++){var d=b[c];d.v&&Rh(d)&&K(d).ua();for(var e=di(d),g=0;g<e.length;g++){var h=e[g];d.v&&h.v||Yh(h.h)!=a&&(Rh(d)?Uh(h,d):Uh(d,h))}}}};f.getParent=function(){return this.Xc};function Oi(a){for(;;){do{var b=a;a=a.getParent();if(!a)return null}while(Hg(a)==b);return a}}function Hg(a){return a.B&&K(a.B)}function Yh(a){var b=a;do a=b,b=a.Xc;while(b);return a}f.Qc=function(){return this.Mb};
f.Ka=function(a){if(this.Xc){for(var b=this.Xc.Mb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.Xc=null;this.K&&this.K.v&&this.K.disconnect();this.H&&this.H.v&&this.H.disconnect()}else Xa(Pc(this.p,!1),this)&&this.p.Zf(this);(this.Xc=a)?a.Mb.push(this):this.p.Zd(this)};f.ob=function(){for(var a=[this],b,c=0;b=this.Mb[c];c++)a.push.apply(a,b.ob());return a};function Ng(a,b){a.vd=b;a.Oj&&Pi(a.Oj)}
function Og(a,b){a.rc=b;for(var c=0,d;d=a.R[c];c++)for(var e=0,g;g=d.ra[e];e++)g.kc();d=Hi(a);for(c=0;c<d.length;c++)d[c].kc()}f.m=function(a){this.Ra=a};f.n=function(a){this.yg=a;this.w&&this.Ec()};function Qi(a,b){for(var c=0,d;d=a.R[c];c++)for(var e=0,g;g=d.ra[e];e++)if(g.name===b)return g;return null}function S(a,b){var c=Qi(a,b);return c?c.pb():null}function ed(a,b,c){Qi(a,c).Ya(b)}
function P(a,b){var c;a.K&&(a.K.i(),a.K=null);b&&(void 0===c&&(c=null),a.K=new Nh(a,4),a.K.I(c));a.w&&(a.C(),a.ua())}function Q(a,b){var c;a.B&&(a.B.i(),a.B=null);b&&(void 0===c&&(c=null),a.B=new Nh(a,3),a.B.I(c));a.w&&(a.C(),a.ua())}function O(a,b){a.H&&(a.H.i(),a.H=null);void 0===b&&(b=null);a.H=new Nh(a,2);a.H.I(b);a.w&&(a.C(),a.ua())}function L(a,b){a.te=b;a.w&&(a.C(),a.ua(),a.p.nb())}f.Ce=function(a){this.disabled=a};function Ri(a){for(;;){a=Oi(a);if(!a)return!1;if(a.disabled)return!0}}
f.isCollapsed=function(){return this.Kc};f.cd=function(a){this.Kc=a};f.toString=function(a){for(var b=[],c=0,d;d=this.R[c];c++){for(var e=0,g;g=d.ra[e];e++)b.push(g.Ga());d.s&&((d=K(d.s))?b.push(d.toString()):b.push("?"))}b=va(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function T(a,b){return Si(a,1,b)}function U(a,b){return Si(a,5,b||"")}
f.qb=function(a,b){function c(a){a instanceof Sc?R(this,a):R(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.qb.mk),g=[],h=0;h<e.length;h+=2){var k=va(e[h]),p=void 0;k&&g.push(new Ei(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),y=arguments[k];y[1]instanceof Sc?g.push([y[0],y[1]]):p=Ii(T(this,y[0]).I(y[1]),y[2]);arguments[k]=null}else"\n"==k&&g.length&&(p=U(this));p&&g.length&&(g.forEach(c,p),g=[])}g.length&&(p=Ii(U(this),d),g.forEach(c,
p));for(h=1;h<arguments.length-1;h++);L(this,!a.match(this.qb.ak))};f.qb.mk=/(%\d+|\n)/;f.qb.ak=/%1\s*$/;function Si(a,b,c){var d=null;if(1==b||3==b)d=new Nh(a,b);b=new Fi(b,c,a,d);a.R.push(b);a.w&&(a.C(),a.ua());return b}function Ti(a,b,c){if(b!=c){for(var d=-1,e=c?-1:a.R.length,g=0,h;h=a.R[g];g++)if(h.name==b){if(d=g,-1!=e)break}else if(c&&h.name==c&&(e=g,-1!=d))break;b=d;c=a.R[b];a.R.splice(b,1);b<e&&e--;a.R.splice(e,0,c);a.w&&(a.C(),a.ua())}}
function Ui(a,b,c){for(var d=0,e;e=a.R[d];d++)if(e.name==b){e.s&&e.s.v&&K(e.s).Ka(null);e.i();a.R.splice(d,1);a.w&&(a.C(),a.ua());return}c||Ka('Input "%s" not found.',b)}function Pg(a,b){for(var c=0,d;d=a.R[c];c++)if(d.name==b)return d;return null}function Vi(a,b){var c=Pg(a,b);return c&&c.s&&K(c.s)}f.nf=function(){return this.X||""};f.Be=function(a){this.X=a};f.Fe=function(){};f.ed=function(){};f.ba=function(){return this.Xj};f.moveBy=function(a,b){this.Xj.translate(a,b)};/*

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
function Kh(){var a=this;this.t=new vh(function(){return Lh(a)},function(b){var c=Lh(a);c&&(n(b.y)&&(a.t.scrollY=-c.cb*b.y-c.xb),a.t.W.setAttribute("transform","translate(0,"+(a.t.scrollY+c.bb)+")"))});this.t.ej=!0;this.Pi=[];this.wa=this.M=0;this.vg=[];this.Tb=[]}var Wi,Xi,Yi,Zi,$i,aj;f=Kh.prototype;f.$d=!0;f.za=8;f.P=function(){this.j=E("g",{},null);this.sb=E("path",{"class":"blocklyFlyoutBackground"},this.j);this.j.appendChild(this.t.P());return this.j};
f.i=function(){this.ec();H(this.Pi);this.Pi.length=0;this.bd&&(this.bd.i(),this.bd=null);this.t=null;this.j&&(kc(this.j),this.j=null);this.Le=this.sb=null};function Lh(a){if(!a.J())return null;var b=a.wa-2*a.za,c=a.M;try{var d=a.t.W.getBBox()}catch(e){d={height:0,y:0}}return{Da:b,na:c,cb:d.height+d.y,Fc:-a.t.scrollY,xb:0,bb:a.za,ab:0}}
f.g=function(a){this.Le=a;this.bd=new nh(this.t,!1,!1);this.ec();F(window,"resize",this,this.Ac);this.Ac();F(this.j,"wheel",this,this.Wj);F(this.j,"mousewheel",this,this.Wj);F(this.Le.W,"blocklyWorkspaceChange",this,this.Lg);F(this.j,"mousedown",this,this.Nf)};
f.Ac=function(){if(this.J()){var a=this.Le.uc();if(a){var b=this.M-this.za;D&&(b*=-1);var c=["M "+(D?this.M:0)+",0"];c.push("h",b);c.push("a",this.za,this.za,0,0,D?0:1,D?-this.za:this.za,this.za);c.push("v",Math.max(0,a.Da-2*this.za));c.push("a",this.za,this.za,0,0,D?0:1,D?this.za:-this.za,this.za);c.push("h",-b);c.push("z");this.sb.setAttribute("d",c.join(" "));b=a.ab;D&&(b+=a.na,b-=this.M);this.j.setAttribute("transform","translate("+b+","+a.bb+")");this.wa=a.Da;this.bd&&this.bd.resize()}}};
f.Wj=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Eb&&(b*=10);var c=Lh(this),b=c.Fc+b,b=Math.min(b,c.cb-c.Da),b=Math.max(b,0);this.bd.set(b);a.preventDefault()}};f.J=function(){return this.j&&"block"==this.j.style.display};f.ec=function(){if(this.J()){this.j.style.display="none";for(var a=0,b;b=this.Tb[a];a++)H(b);this.Tb.length=0;this.uh&&(H(this.uh),this.uh=null)}};
f.show=function(a){this.ec();for(var b=Pc(this.t,!1),c=0,d;d=b[c];c++)d.p==this.t&&d.i(!1,!1);for(var c=0,e;e=this.vg[c];c++)kc(e);this.vg.length=0;var g=this.za;this.j.style.display="block";var b=[],h=[];if("VARIABLE"==a)Yf(b,h,g,this.t);else if("PROCEDURE"==a)cd(b,h,g,this.t);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Lg(this.t,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.ob();e=0;for(var p;p=c[e];e++)p.Sb=!0,p.Be(null);d.C();p=d.T();e=Mh(d);c=D?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=E("rect",{"fill-opacity":0},null);this.t.W.insertBefore(e,d.T());d.ge=e;this.vg[k]=e;this.$d?this.Tb.push(F(p,"mousedown",null,bj(this,d))):this.Tb.push(F(p,"mousedown",null,cj(this,d)));this.Tb.push(F(p,"mouseover",d,d.ng));this.Tb.push(F(p,"mouseout",d,d.Yf));this.Tb.push(F(e,"mousedown",null,bj(this,d)));this.Tb.push(F(e,"mouseover",d,d.ng));this.Tb.push(F(e,"mouseout",d,d.Yf))}this.Tb.push(F(this.sb,"mouseover",this,function(){for(var a=Pc(this.t,!1),b=0,c;c=a[b];b++)c.Yf()}));
this.M=0;this.xj();this.Lg();dj(window,"resize");this.uh=F(this.t.W,"blocklyWorkspaceChange",this,this.xj);this.t.nb()};
f.xj=function(){for(var a=0,b=this.za,c=Pc(this.t,!1),d=0,e;e=c[d];d++)var g=Mh(e),a=Math.max(a,g.width);a+=b+8+b/2+M;if(this.M!=a){for(d=0;e=c[d];d++){var g=Mh(e),h=e.ba();if(D){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.ge&&(e.ge.setAttribute("width",g.width),e.ge.setAttribute("height",g.height),e.ge.setAttribute("x",D?h.x-g.width:h.x),e.ge.setAttribute("y",h.y))}this.M=a;eh(window,"resize")}};
function cj(a,b){return function(c){ej();eg();Wc(c)?fj(b,c):(uh(),ch(dh),Wi=c,Xi=b,Yi=a,Zi=F(document,"mouseup",this,ej),$i=F(document,"mousemove",this,a.Ll));c.stopPropagation()}}f.Nf=function(a){Wc(a)||(eg(!0),hj(),this.Jj=a.clientY,aj=F(document,"mousemove",this,this.lh),Zi=F(document,"mouseup",this,hj),a.preventDefault(),a.stopPropagation())};f.lh=function(a){var b=a.clientY-this.Jj;this.Jj=a.clientY;a=Lh(this);b=a.Fc-b;b=Math.min(b,a.cb-a.Da);b=Math.max(b,0);this.bd.set(b)};
f.Ll=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(uh(),Math.sqrt(Math.pow(a.clientX-Wi.clientX,2)+Math.pow(a.clientY-Wi.clientY,2))>ij&&bj(Yi,Xi)(Wi))};function bj(a,b){return function(c){if(!Wc(c)&&!b.disabled){var d=Gg(b),d=Lg(a.Le,d),e=b.T();if(!e)throw"originBlock is not rendered.";var e=lh(e),g=d.T();if(!g)throw"block is not rendered.";g=lh(g);d.moveBy(e.x-g.x,e.y-g.y);a.$d?a.ec():a.Lg();d.Nf(c)}}}
f.Lg=function(){for(var a=Rc(this.Le),b=Pc(this.t,!1),c=0,d;d=b[c];c++){var e=d.ob().length>a;d.Ce(e)}};function hj(){Zi&&(H(Zi),Zi=null);$i&&(H($i),$i=null);aj&&(H(aj),aj=null);Zi&&(H(Zi),Zi=null);Yi=Xi=Wi=null}f.le=function(){var a=lh(this.j).x;D||(a-=1E7);return new jd(a,-1E7,1E7+this.M,this.wa+2E7)};function jj(a){if("function"==typeof a.Tg)return a.Tg();if(m(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function kj(a){this.Sa=void 0;this.Ea={};if(a){var b;if("function"==typeof a.Sg)b=a.Sg();else if("function"!=typeof a.Tg)if(fa(a)||m(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=jj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=kj.prototype;f.set=function(a,b){lj(this,a,b,!1)};f.add=function(a,b){lj(this,a,b,!0)};
function lj(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.Ea[g]||(a.Ea[g]=new kj);a=a.Ea[g]}if(d&&void 0!==a.Sa)throw Error('The collection already contains the key "'+b+'"');a.Sa=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.Ea[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Sa:void 0};f.Tg=function(){var a=[];mj(this,a);return a};function mj(a,b){void 0!==a.Sa&&b.push(a.Sa);for(var c in a.Ea)mj(a.Ea[c],b)}
f.Sg=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.Ea[e])return[];c=c.Ea[e]}nj(c,a,b)}else nj(this,"",b);return b};function nj(a,b,c){void 0!==a.Sa&&c.push(b);for(var d in a.Ea)nj(a.Ea[d],b+d,c)}f.clear=function(){this.Ea={};this.Sa=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.Ea[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.Ea[e]}a=b.Sa;for(delete b.Sa;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.Ea[e].dj())delete b.Ea[e];else break;return a};f.clone=function(){return new kj(this)};f.dj=function(){var a;if(a=void 0===this.Sa)a:{a=this.Ea;for(var b in a){a=!1;break a}a=!0}return a};function oj(){this.Wc=new kj}f=oj.prototype;f.oa="";f.gh=null;f.Jf=null;f.we=0;f.Hd=0;function pj(a,b){var c=!1,d=a.Wc.Sg(b);d&&d.length&&(a.Hd=0,a.we=0,c=a.Wc.get(d[0]),c=qj(a,c))&&(a.gh=d);return c}function qj(a,b){var c;b&&(a.Hd<b.length&&(c=b[a.Hd],a.Jf=b),c&&(c.xh(),c.select()));return!!c}f.clear=function(){this.oa=""};function rj(a,b,c,d,e){this.reset(a,b,c,d,e)}rj.prototype.Qi=null;var sj=0;rj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||sj++;d||pa();this.ve=a;this.Cl=b;delete this.Qi};rj.prototype.Ej=function(a){this.ve=a};function tj(a){this.Lf=a;this.Zi=this.ha=this.ve=this.Ja=null}function uj(a,b){this.name=a;this.value=b}uj.prototype.toString=function(){return this.name};var vj=new uj("WARNING",900),wj=new uj("INFO",800),xj=new uj("CONFIG",700),yj=new uj("FINE",500);f=tj.prototype;f.getName=function(){return this.Lf};f.getParent=function(){return this.Ja};f.Qc=function(){this.ha||(this.ha={});return this.ha};f.Ej=function(a){this.ve=a};
function zj(a){if(a.ve)return a.ve;if(a.Ja)return zj(a.Ja);Ka("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=zj(this).value)for(ga(b)&&(b=b()),a=new rj(a,String(b),this.Lf),c&&(a.Qi=c),c="log:"+a.Cl,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Zi)for(var e=0,g=void 0;g=b.Zi[e];e++)g(d);c=c.getParent()}};
f.Yb=function(a,b){this.log(vj,a,b)};f.info=function(a,b){this.log(wj,a,b)};var Aj={},Bj=null;function Cj(a){Bj||(Bj=new tj(""),Aj[""]=Bj,Bj.Ej(xj));var b;if(!(b=Aj[a])){b=new tj(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Cj(a.substr(0,c));c.Qc()[d]=b;b.Ja=c;Aj[a]=b}return b};function Dj(a){je.call(this);this.G=a;a=r?"focusout":"blur";this.yl=Wd(this.G,r?"focusin":"focus",this,!r);this.zl=Wd(this.G,a,this,!r)}q(Dj,je);Dj.prototype.handleEvent=function(a){var b=new Qd(a.Na);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Dj.prototype.qa=function(){Dj.k.qa.call(this);ce(this.yl);ce(this.zl);delete this.G};function Ej(a,b,c){mg.call(this,a,b,c);this.fe=!0;vg(this,!0);this.ib=this;this.Ne=new oj;if(r)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.ij)&&a.Yb("Failed to enable background image cache",void 0)}}q(Ej,mg);f=Ej.prototype;f.Ia=null;f.Ng=null;f.ij=Cj("goog.ui.tree.TreeControl");f.Pg=!1;f.Xk=null;f.He=!0;f.Eh=!0;f.hd=!0;f.Fh=!0;f.Oa=function(){return this};f.yd=function(){return 0};f.xh=function(){};f.fl=function(){this.Pg=!0;ze(this.o(),"focused");this.ib&&this.ib.select()};
f.bl=function(){this.Pg=!1;Be(this.o(),"focused")};f.hasFocus=function(){return this.Pg};f.Wa=function(){return!this.hd||Ej.k.Wa.call(this)};f.ic=function(a){this.hd?Ej.k.ic.call(this,a):this.fe=a};f.Rg=function(){return yb};f.pf=function(){var a=tg(this);return a?a.firstChild:null};f.of=function(){return null};f.Qd=function(){};f.me=function(){return Ej.k.me.call(this)+(this.hd?"":" "+this.Aa.Bi)};
f.kf=function(){var a=this.Wa(),b=this.Wk;if(a&&b)return b;b=this.nl;if(!a&&b)return b;b=this.Aa;return a&&b.Ai?b.Mc+" "+b.Ai:!a&&b.wi?b.Mc+" "+b.wi:""};f.fd=function(a){if(this.ib!=a){var b=!1;this.ib&&(b=this.ib==this.Xk,vg(this.ib,!1));if(this.ib=a)vg(a,!0),b&&a.select();this.dispatchEvent("change")}};function Fj(a){0!=a.He&&(a.He=!1,a.N&&Gj(a))}
function Gj(a){function b(a){var h=qg(a);if(h){var k=!d||c==a.getParent()&&!e?a.Aa.ui:a.Aa.ti;h.className=k;if(h=a.of())h.className=Ag(a)}re(a,b)}var c=a,d=c.He,e=c.Fh;b(a)}function Hj(a){0!=a.Eh&&(a.Eh=!1,a.N&&Gj(a))}function Ij(a){if(0!=a.hd){a.hd=!1;if(a.N){var b=tg(a);b&&(b.className=a.me())}a.ib==a&&te(a,0)&&a.fd(te(a,0))}}f.Cf=function(){Ej.k.Cf.call(this);var a=this.o();Ge(a,"tree");He(a,"labelledby",pg(this).id)};
f.Ba=function(){Ej.k.Ba.call(this);var a=this.o();a.className=this.Aa.Ei;a.setAttribute("hideFocus","true");a=this.o();a.tabIndex=0;var b=this.Ia=new Te(a),c=this.Ng=new Dj(a);pe(this).O(c,"focusout",this.bl).O(c,"focusin",this.fl).O(b,"key",this.Fb).O(a,"mousedown",this.Vg).O(a,"click",this.Vg).O(a,"dblclick",this.Vg);this.Cf()};f.mb=function(){Ej.k.mb.call(this);this.Ia.i();this.Ia=null;this.Ng.i();this.Ng=null};
f.Vg=function(a){var b=this.ij;b&&b.log(yj,"Received event "+a.type,void 0);if(b=Jj(this,a))switch(a.type){case "mousedown":b.kh(a);break;case "click":a.preventDefault();break;case "dblclick":b.lj(a)}};
f.Fb=function(a){var b=!1,b=this.Ne,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.gh;if(d){var e=null,g=!1;if(b.Jf){var h=b.Hd+c;0<=h&&h<b.Jf.length?(b.Hd=h,e=b.Jf):g=!0}e||(h=b.we+c,0<=h&&h<d.length&&(b.we=h),d.length>b.we&&(e=b.Wc.get(d[b.we])),e&&e.length&&g&&(b.Hd=-1==c?e.length-1:0));qj(b,e)&&(b.gh=d)}c=!0}break;case 8:d=b.oa.length-1;c=!0;0<d?(b.oa=b.oa.substring(0,d),pj(b,b.oa)):0==d?b.oa="":c=!1;break;case 27:b.oa="",c=!0}if(!(b=c)&&(b=this.ib)){b=this.ib;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;ve(b)&&(b.Wa()?te(b,0).select():b.ic(!0));break;case 37:if(a.altKey)break;ve(b)&&b.Wa()&&b.ue?b.ic(!1):(d=b.getParent(),e=b.Oa(),d&&(e.hd||d!=e)&&d.select());break;case 40:a:if(ve(b)&&b.Wa())d=te(b,0);else{for(d=b;d!=b.Oa();){e=d.Gb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.Yc;null!=d?d=Dg(d):(d=b.getParent(),e=b.Oa(),d=!e.hd&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.Oa())&&
e.Ne.clear());b=c}b||(b=this.Ne,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.oa)&&(b.oa+=d,c=pj(b,b.oa))),b=c);b&&a.preventDefault();return b};function Jj(a,b){for(var c=null,d=b.target;null!=d;){if(c=og[d.id])return c;if(d==a.o())break;d=d.parentNode}return null}f.createNode=function(a){return new Eg(a||yb,this.Aa,this.Eb())};
function Cg(a,b){var c=a.Ne,d=b.Ga();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.Wc.get(d);e?e.push(b):c.Wc.set(d,[b])}}f.removeNode=function(a){var b=this.Ne,c=a.Ga();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.Wc.get(c);d&&(Ya(d,a),d.length&&b.Wc.remove(c))}};/*

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
function Kj(a,b){this.Hc=w("div","blocklyToolboxDiv");this.Hc.setAttribute("dir",D?"RTL":"LTR");b.appendChild(this.Hc);this.U=new Kh;a.appendChild(this.U.P());F(this.Hc,"mousedown",this,function(a){Wc(a)||a.target==this.Hc?eg(!1):eg(!0)})}f=Kj.prototype;f.width=0;f.jg={ah:19,Ei:"blocklyTreeRoot",Bi:"blocklyHidden",Ci:"",Dg:"blocklyTreeRow",Di:"blocklyTreeLabel",Mc:"blocklyTreeIcon",Bg:"blocklyTreeIconOpen",Cg:"blocklyTreeIconNone",Fi:"blocklyTreeSelected"};
f.g=function(){this.jg.cleardotPath=ih+"1x1.gif";this.jg.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(D?"Rtl":"Ltr");var a=new Lj(this,this.jg);this.Me=a;Ij(a);Fj(a);Hj(a);a.fd(null);this.Hc.style.display="block";this.U.g(x);Mj(this);a.C(this.Hc);var b=this;Wd(window,"resize",function(){b.Ac()});this.Ac()};
f.Ac=function(){var a=this.Hc,b=zd(yc),c=Di();D?(b=Nj(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;D||--this.width};
function Mj(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.Ic=[];e.add(k);var p=h.getAttribute("custom");p?k.Ic=p:b(h,k)}else"HR"==k?e.add(new Oj):"BLOCK"==k&&e.Ic.push(h)}}var c=a.Me;c.zj();c.Ic=[];b(zc,a.Me);if(c.Ic.length)throw"Toolbox cannot have both blocks and categories in the root level.";eh(window,"resize")}
f.le=function(){return new jd(D?Di().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Lj(a,b){this.La=a;Ej.call(this,yb,b)}q(Lj,Ej);Lj.prototype.Ba=function(){Lj.k.Ba.call(this);if(Kd){var a=this.o();F(a,"touchstart",this,this.kl)}};Lj.prototype.kl=function(a){a.preventDefault();var b=Jj(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.kh(a)},1)};Lj.prototype.createNode=function(a){return new Pj(this.La,a?rb(a):yb,this.Aa,this.Eb())};
Lj.prototype.fd=function(a){this.ib!=a&&(Ej.prototype.fd.call(this,a),a&&a.Ic&&a.Ic.length?this.La.U.show(a.Ic):this.La.U.ec())};function Pj(a,b,c,d){mg.call(this,b,c,d);a&&(b=function(){eh(window,"resize")},Wd(a.Me,"expand",b),Wd(a.Me,"collapse",b))}q(Pj,Eg);mg.prototype.Rg=function(){return wb("span")};Pj.prototype.kh=function(){ve(this)&&this.ue?(this.toggle(),this.select()):this.Ef()?this.Oa().fd(null):this.select();wg(this)};Pj.prototype.lj=function(){};
function Oj(){Pj.call(this,null,"",Qj)}q(Oj,Pj);var Qj={Dg:"blocklyTreeSeparator"};/*

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
var Rj={cf:null,show:function(a,b){Lf(Rj,null);if(b.length){for(var c=new Ff,d=0,e;e=b[d];d++){var g=new mf(e.text);c.We(g,!0);g.De(e.enabled);e.enabled&&Wd(g,"action",function(a){return function(){a()}}(e.Ma))}Wd(c,"action",Rj.ec);e=ec();g=md();c.C(Pf);var h=c.o();Uc(h,"blocklyContextMenu");var k=qd(h),d=a.clientX+g.x,p=a.clientY+g.y;a.clientY+k.height>=e.height&&(p-=k.height);D?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);Qf(d,p,e,g);Gf(c);setTimeout(function(){h.focus()},
1);Rj.cf=null}else Rj.ec()},ec:function(){Mf==Rj&&Nf();Rj.cf=null},wg:function(a,b){return function(){var c=Lg(a.p,b),d=a.ba();d.x=D?d.x-Zh:d.x+Zh;d.y+=2*Zh;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Ki(){this.j=E("g",{},null);this.Nj=E("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.j);this.Xb=E("path",{"class":"blocklyPath"},this.j);this.Ph=E("path",{"class":"blocklyPathLight"},this.j);this.Xb.Ra=this;vi(this.Xb);Pi(this)}q(Ki,hi);f=Ki.prototype;f.height=0;f.width=0;
f.Ha=function(){for(var a=0,b;b=this.R[a];a++)b.g();this.rb&&Jh(this.rb);this.Ec();I||F(this.T(),"mousedown",this,this.Nf);this.p.W.appendChild(this.T());ga(this.onchange)&&F(this.p.W,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){N&&Ch();N=this;this.ng();eh(this.p.W,"blocklySelectChange")};function Ch(){var a=N;N=null;a.Yf();eh(a.p.W,"blocklySelectChange")}f.rb=null;f.X=null;f.Yb=null;function Hi(a){var b=[];a.rb&&b.push(a.rb);a.X&&b.push(a.X);a.Yb&&b.push(a.Yb);return b}
var Sj=null,Tj=null;f=Ki.prototype;f.Ka=function(a){var b=this.T();if(this.Xc&&b){var c=this.ba();this.p.W.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Ki.k.Ka.call(this,a);a&&(c=this.ba(),a.T().appendChild(b),a=this.ba(),bi(this,a.x-c.x,a.y-c.y))};f.ba=function(){var a=0,b=0,c=this.T();if(c){do var d=Hh(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.p.W)}return new v(a,b)};
f.moveBy=function(a,b){var c=this.ba();this.T().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");bi(this,a,b);Uj(this)};function Mh(a){var b=a.height,c=a.width;if(a=Hg(a))a=Mh(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.cd=function(a){if(this.Kc!=a){Ki.k.cd.call(this,a);for(var b=[],c=0,d;d=this.R[c];c++)b.push.apply(b,d.L(!a));if(a){a=Hi(this);for(c=0;c<a.length;c++)a[c].L(!1);c=this.toString(Vj);R(U(this,"_TEMP_COLLAPSED_INPUT"),c).g()}else Ui(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.w){for(c=0;a=b[c];c++)a.C();this.ua()}}};
f.Nf=function(a){if(!this.Sb){Wj();ej();this.select();eg();if(Wc(a))fj(this,a);else if(this.Ub&&!I){uh();ch(dh);var b=this.ba();this.Kj=b.x;this.Lj=b.y;this.Kh=a.clientX;this.Lh=a.clientY;Xc=1;Sj=F(document,"mouseup",this,this.mh);Tj=F(document,"mousemove",this,this.lh);this.gf=[];for(var b=this.ob(),c=0,d;d=b[c];c++){d=Hi(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Sc,y:g.Tc};g.Bk=d[e];this.gf.push(g)}}}else return;a.stopPropagation()}};
f.mh=function(a){var b=this;Xj(function(){ej();if(N&&Ph){Qg(Qh,Ph);if(b.w){var c=(Rh(Qh)?Ph:Qh).h;Yj("click");var d=lh(c.j);c.H?(d.x+=D?3:-3,d.y+=13):c.K&&(d.x+=D?-23:23,d.y+=3);c=E("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},yc);c.Ih=new Date;Zj(c)}b.p.kb&&b.p.kb.close()}else Dh(b.p,a)&&((c=b.p.kb)&&lg(c.close,100,c),N.i(!1,!0),eh(window,"resize"));Ph&&(kc(Nh.yf),delete Nh.yf,Ph=null);ch(ak.OPEN)})};
function fj(a,b){if(!I&&a.contextMenu){var c=[];if(a.vd&&!I&&a.Ub&&!I&&!a.Sb){var d={text:bk,enabled:!0,Ma:function(){var b=Gg(a);Rg(b);var b=Lg(a.p,b),c=a.ba();c.x=D?c.x-Zh:c.x+Zh;c.y+=2*Zh;b.moveBy(c.x,c.y);b.select()}};a.ob().length>Rc(a.p)&&(d.enabled=!1);c.push(d);a.rc&&!I&&!a.Kc&&Ac&&(d={enabled:!0},a.X?(d.text=ck,d.Ma=function(){a.Be(null)}):(d.text=dk,d.Ma=function(){a.Be("")}),c.push(d));if(!a.Kc)for(d=0;d<a.R.length;d++)if(1==a.R[d].type){d={enabled:!0};d.text=a.te?ek:fk;d.Ma=function(){L(a,
!a.te)};c.push(d);break}Bc&&(a.Kc?(d={enabled:!0},d.text=gk,d.Ma=function(){a.cd(!1)}):(d={enabled:!0},d.text=hk,d.Ma=function(){a.cd(!0)}),c.push(d));Cc&&(d={text:a.disabled?ik:jk,enabled:!Ri(a),Ma:function(){a.Ce(!a.disabled)}},c.push(d));var d=a.ob().length,e=Hg(a);e&&(d-=e.ob().length);d={text:1==d?kk:lk.replace("%1",String(d)),enabled:!0,Ma:function(){a.i(!0,!0)}};c.push(d)}d={enabled:!(ga(a.A)?!a.A():!a.A)};d.text=mk;d.Ma=function(){var b=ga(a.A)?a.A():a.A;b&&window.open(b)};c.push(d);a.Nb&&
!a.Sb&&a.Nb(c);Rj.show(b,c);Rj.cf=a}}function bi(a,b,c){if(a.w){for(var d=fi(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Hi(a);for(e=0;e<d.length;e++)Gh(d[e]);for(e=0;e<a.Mb.length;e++)bi(a.Mb[e],b,c)}}function nk(a,b){b?Uc(a.j,"blocklyDragging"):Vc(a.j,"blocklyDragging");for(var c=0;c<a.Mb.length;c++)nk(a.Mb[c],b)}
f.lh=function(a){var b=this;Xj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){uh();var c=a.clientX-b.Kh,d=a.clientY-b.Lh;if(1==Xc&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>ij){Xc=2;b.Ka(null);nk(b,!0);var e=b.p;e.Ii=e.kb?e.kb.le():null;e.Hi=e.U?e.U.le():e.La?e.La.le():null}if(2==Xc){b.T().setAttribute("transform","translate("+(b.Kj+c)+", "+(b.Lj+d)+")");for(e=0;e<b.gf.length;e++){var g=b.gf[e],h=g.Bk,k=g.x+c,g=g.y+d;h.Sc=k;h.Tc=g;h.J()&&Ug(h.da,k,g)}for(var h=fi(b,!1),
g=k=null,p=Zh,e=0;e<h.length;e++){var y=h[e],t=ci(y,p,c,d);t.s&&(k=t.s,g=y,p=t.wj)}Ph&&Ph!=k&&(kc(Nh.yf),delete Nh.yf,Qh=Ph=null);k&&k!=Ph&&(k.$i(),Ph=k,Qh=g);b.vd&&!I&&Dh(b.p,a)}}a.stopPropagation()})};function Pi(a){a.Ub&&!I?Uc(a.j,"blocklyDraggable"):Vc(a.j,"blocklyDraggable")}f.T=function(){return this.j};var ok=1*(1-Math.SQRT1_2)+1,pk=3*(1-Math.SQRT1_2)-1,qk="m "+ok+","+ok,rk="a 3,3 0 0,0 "+(-pk-1)+","+(2-pk),sk="a 3,3 0 0,0 "+(2-pk)+","+(pk+1);f=Ki.prototype;
f.i=function(a,b){ej();Rj.cf==this&&Rj.ec();Mi(this,a);if(b&&this.w){Yj("delete");var c=lh(this.j),d=this.j.cloneNode(!0);d.Rj=c.x;d.Sj=c.y;d.setAttribute("transform","translate("+d.Rj+","+d.Sj+")");yc.appendChild(d);d.ii=d.getBBox();d.Ih=new Date;tk(d)}this.w=!1;c=Hi(this);for(d=0;d<c.length;d++)c[d].i();Ki.k.i.call(this,a);kc(this.j);this.Nj=this.Ph=this.Xb=this.j=null};
function tk(a){var b=(new Date-a.Ih)/150;1<b?kc(a):(a.setAttribute("transform","translate("+(a.Rj+(D?-1:1)*a.ii.width/2*b+", "+(a.Sj+a.ii.height*b))+") scale("+(1-b)+")"),setTimeout(function(){tk(a)},10))}function Zj(a){var b=(new Date-a.Ih)/150;1<b?kc(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){Zj(a)},10))}
f.Ec=function(){if(!this.disabled){var a=Uf(Vf(this.yg)),b;b=a;if(!jg.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(hg,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];kg([255,255,255],b,.3);kg([0,0,0],b,.4);this.Xb.setAttribute("fill",a);b=Hi(this);for(a=0;a<b.length;a++)b[a].Ec();for(a=0;b=this.R[a];a++)for(var c=0,d;d=b.ra[c];c++)d.V(null);this.w&&this.C()}};
function Xh(a){a.disabled||Ri(a)?(Uc(a.j,"blocklyDisabled"),a.Xb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Vc(a.j,"blocklyDisabled"),a.Ec());a=a.Qc();for(var b=0,c;c=a[b];b++)Xh(c)}f.nf=function(){return this.X?this.X.Ga().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Be=function(a){var b=!1;m(a)?(this.X||(this.X=new ii(this),b=!0),this.X.V(a)):this.X&&(this.X.i(),b=!0);b&&this.w&&(this.C(),this.ua())};
f.Fe=function(a){this.Sb&&(a=null);var b=!1;m(a)?(this.Yb||(this.Yb=new ji(this),b=!0),this.Yb.V(a)):this.Yb&&(this.Yb.i(),b=!0);b&&this.w&&(this.C(),this.ua())};f.ed=function(a){this.rb&&this.rb!==a&&this.rb.i();a&&(a.D=this,this.rb=a,this.w&&Jh(a))};f.Ce=function(a){this.disabled!=a&&(Ki.k.Ce.call(this,a),Xh(this),this.p.nb())};f.ng=function(){Uc(this.j,"blocklySelected");this.j.parentNode.appendChild(this.j)};f.Yf=function(){Vc(this.j,"blocklySelected")};
f.C=function(){this.w=!0;var a=10;D&&(a=-a);for(var b=Hi(this),c=0;c<b.length;c++){var d=b[c];d.D.isCollapsed()?d.xa.setAttribute("display","none"):(d.xa.setAttribute("display","block"),D&&(a-=16),d.xa.setAttribute("transform","translate("+a+", 5)"),Gh(d),a=D?a-10:a+26)}var e=a+=D?10:-10,g=this.R,b=[];b.ja=e+20;if(this.K||this.B)b.ja=Math.max(b.ja,40);for(var d=c=0,h=!1,k=!1,p=!1,y=void 0,t=this.te&&!this.isCollapsed(),C=0,z;z=g[C];C++)if(z.J()){var G;t&&y&&3!=y&&3!=z.type?G=b[b.length-1]:(y=z.type,
G=[],G.type=t&&3!=z.type?-1:z.type,G.height=0,b.push(G));G.push(z);z.ad=25;z.Ca=t&&1==z.type?20.5:0;if(z.s&&z.s.v){var Wa=Mh(K(z.s));z.ad=Math.max(z.ad,Wa.height);z.Ca=Math.max(z.Ca,Wa.width)}C==g.length-1&&z.ad--;G.height=Math.max(G.height,z.ad);z.Cb=0;1==b.length&&(z.Cb+=D?-e:e);for(var Wa=!1,xg=0,Mb;Mb=z.ra[xg];xg++){0!=xg&&(z.Cb+=10);var gj=Mb.Vi();Mb.Ca=gj.width;Mb.$f=Wa&&Mb.md?10:0;z.Cb+=Mb.Ca+Mb.$f;G.height=Math.max(G.height,gj.height);Wa=Mb.md}-1!=G.type&&(3==G.type?(k=!0,d=Math.max(d,z.Cb)):
(1==G.type?h=!0:5==G.type&&(p=!0),c=Math.max(c,z.Cb)))}for(e=0;G=b[e];e++)if(G.Pj=!1,-1==G.type)for(g=0;z=G[g];g++)if(1==z.type){G.height+=20;G.Pj=!0;break}b.dg=20+d;k&&(b.ja=Math.max(b.ja,b.dg+30));h?b.ja=Math.max(b.ja,c+20+8):p&&(b.ja=Math.max(b.ja,c+20));b.ml=h;b.yn=k;b.xn=p;d=a;this.H?this.Hh=this.cg=!0:(this.Hh=this.cg=!1,this.K&&(a=K(this.K))&&Hg(a)==this&&(this.cg=!0),Hg(this)&&(this.Hh=!0));h=this.ba();k=[];p=[];a=[];c=[];z=b.ja;this.cg?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(D?
qk:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.K&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.K.moveTo(h.x+(D?-30:30),h.y));k.push("H",z);a.push("H",z+(D?-1:0));this.width=z;for(G=z=0;e=b[G];G++){t=10;0==G&&(t+=D?-d:d);a.push("M",b.ja-1+","+(z+1));if(this.isCollapsed())g=e[0],C=z+18,uk(g.ra,t,C),k.push("l 8,0 0,4 8,4 -16,8 8,4"),D?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),D&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(y=0;g=e[y];y++)C=z+18,e.Pj&&(C+=10),t=uk(g.ra,t,C),5!=g.type&&(t+=g.Ca+10),1==g.type&&(p.push("M",t-10+","+(z+10)),p.push("h",6-g.Ca),p.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),p.push("v",g.ad+1-20),p.push("h",g.Ca+2-8),p.push("z"),D?(c.push("M",t-10-3+8-g.Ca+","+(z+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.ad-20+3),c.push("h",g.Ca-8+1)):(c.push("M",t-10+1+","+(z+10+1)),c.push("v",g.ad+1),c.push("h",6-g.Ca),
c.push("M",t-g.Ca-10+1.8+","+(z+10+20-.4)),c.push("l","3.04,-1.8")),C=D?h.x-t-8+10+g.Ca+1:h.x+t+8-10-g.Ca-1,Wa=h.y+z+10+1,g.s.moveTo(C,Wa),g.s.v&&ai(g.s));t=Math.max(t,b.ja);this.width=Math.max(this.width,t);k.push("H",t);a.push("H",t+(D?-1:0));k.push("v",e.height);D&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],C=z+18,-1!=g.align&&(y=b.ja-g.Cb-8-20,1==g.align?t+=y:0==g.align&&(t+=(y+t)/2)),uk(g.ra,t,C),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),y=e.height-20,k.push("v",y),D?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",y)):(a.push("M",b.ja-4.2+","+(z+20-.4)),a.push("l","3.04,-1.8")),C=h.x+(D?-b.ja-1:b.ja+1),Wa=h.y+z,g.s.moveTo(C,Wa),g.s.v&&(ai(g.s),this.width=Math.max(this.width,b.ja+Mh(K(g.s)).width-8+1))):5==e.type?(g=e[0],C=z+18,-1!=g.align&&(y=b.ja-g.Cb-20,b.ml&&(y-=8),1==g.align?t+=y:0==g.align&&(t+=(y+t)/2)),uk(g.ra,t,C),k.push("v",e.height),D&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==G&&(k.push("v",10),D&&a.push("v",9),z+=10),C=z+18,-1!=g.align&&(y=b.dg-g.Cb-20,1==g.align?t+=y:0==g.align&&
(t+=(y+t)/2)),uk(g.ra,t,C),t=b.dg+30,k.push("H",t),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.ja),D?(a.push("M",t-30+pk+","+(z+pk)),a.push(rk),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.ja-1)):(a.push("M",t-30+pk+","+(z+e.height-pk)),a.push(sk),a.push("H",b.ja)),C=h.x+(D?-t:t),Wa=h.y+z+1,g.s.moveTo(C,Wa),g.s.v&&(ai(g.s),this.width=Math.max(this.width,b.dg+Mh(K(g.s)).width)),G==b.length-1||3==b[G+1].type)&&(k.push("v",
10),D&&a.push("v",9),z+=10);z+=e.height}b.length||(z=25,k.push("V",z),D&&a.push("V",z-1));b=z;this.height=b+1;this.B&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.B.moveTo(D?h.x-30:h.x+30,h.y+b+1),this.B.v&&ai(this.B),this.height+=4);this.Hh?(k.push("H 0"),D||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),D||(a.push("M",ok+","+(b-ok)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.H?(this.H.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),D?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):D||(this.cg?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+p.join(" ");this.Xb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.Ph.setAttribute("d",b);D&&(this.Xb.setAttribute("transform","scale(-1 1)"),this.Ph.setAttribute("transform","scale(-1 1)"),this.Nj.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.C():eh(window,"resize");
Uj(this)};function uk(a,b,c){D&&(b=-b);for(var d=0,e;e=a[d];d++)D?(b-=e.$f+e.Ca,e.T().setAttribute("transform","translate("+b+", "+c+")"),e.Ca&&(b-=10)):(e.T().setAttribute("transform","translate("+(b+e.$f)+", "+c+")"),e.Ca&&(b+=e.$f+e.Ca+10));return D?-b:b};/*

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
function Uc(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Vc(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function F(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in vk)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=vk[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var vk={};aa("document.documentElement.ontouchstart")&&(vk={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function H(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function dj(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function eh(a,b){setTimeout(function(){dj(a,b)},0)}
function Hh(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function lh(a){var b=0,c=0;do{var d=Hh(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=yc);return{x:b,y:c}}function Of(a){a=lh(a);return Nj(a.x,a.y,!1)}
function E(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Wc(a){return 2==a.button||a.ctrlKey}
function Nj(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=yc.createSVGPoint();d.x=a;d.y=b;a=yc.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function th(a){return Nj(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Rf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Sf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Rf(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function Tf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Rf(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d}function wk(a){return!!a.match(/^\s*-?\d+(\.\d+)?\s*$/)};/*

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
function xk(a,b){xk.k.constructor.call(this,"");this.pa=b;this.oi=E("text",{"class":"blocklyText",x:-3},this.ea);this.oi.appendChild(document.createTextNode("\u2713"));this.Ya(a)}q(xk,Sc);f=xk.prototype;f.clone=function(){return new xk(this.pb(),this.pa)};f.kg="default";f.pb=function(){return String(this.$).toUpperCase()};f.Ya=function(a){a="TRUE"==a;this.$!==a&&(this.$=a,this.oi.style.display=a?"block":"none",this.h&&this.h.w&&this.h.p.nb())};
f.Ge=function(){var a=!this.$;if(this.h&&this.pa){var b=this.pa(a);void 0!==b&&(a=b)}null!==a&&this.Ya(String(a).toUpperCase())};/*

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
function yk(a,b){yk.k.constructor.call(this,a);this.pa=b}var zk;q(yk,Sc);f=yk.prototype;f.clone=function(){return new yk(this.Ga(),this.pa)};f.kg="text";f.i=function(){Mf==this&&Nf();yk.k.i.call(this)};f.V=function(a){if(null!==a){if(this.h&&this.pa){var b=this.pa(a);null!==b&&void 0!==b&&(a=b)}Sc.prototype.V.call(this,a)}};
f.Ge=function(a){a=a||!1;if(!a&&(Fb||Hb||Jb)){a=window.prompt(Ak,this.ya);if(this.h&&this.pa){var b=this.pa(a);void 0!==b&&(a=b)}null!==a&&this.V(a)}else{Lf(this,Bk(this));var b=Pf,c=w("input","blocklyHtmlInput");zk=c;b.appendChild(c);c.value=c.defaultValue=this.ya;c.kj=null;Ck(this);this.Bj();a||(c.focus(),c.select());c.Il=F(c,"keyup",this,this.nj);c.Hl=F(c,"keypress",this,this.nj);c.Ol=F(this.h.p.W,"blocklyWorkspaceChange",this,this.Bj)}};
f.nj=function(a){var b=zk;13==a.keyCode?Nf():27==a.keyCode?(this.V(b.defaultValue),Nf()):(a=b.value,a!==b.kj?(b.kj=a,this.V(a),Ck(this)):u&&this.h.C())};function Ck(a){var b=!0,c=zk;a.h&&a.pa&&(b=a.pa(c.value));null===b?Uc(c,"blocklyInvalidInput"):Vc(c,"blocklyInvalidInput")}f.Bj=function(){var a=Pf,b=this.ea.getBBox();a.style.width=b.width+"px";b=Of(this.Jc);if(D){var c=this.Jc.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;u&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function Bk(a){return function(){var b=zk,c=b.value;a.h&&a.pa&&(c=a.pa(c),null===c&&(c=b.defaultValue));a.V(c);a.h.w&&a.h.C();H(b.Il);H(b.Hl);H(b.Ol);zk=null;Pf.style.width="auto"}}function Dk(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)};/*

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
function Ek(a){this.Lf=a;this.mg="";this.Zj=new RegExp(this.lc,"g")}Ek.prototype.Se=null;Ek.prototype.pd=null;function Fk(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}
function Gk(a,b){if(!b)return"";if(b.disabled)return Gk(a,Hg(b));var c=a[b.type];if(!c)throw'Language "'+a.Lf+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.yh(b,c[0]),c[1]];if(m(c))return a.pd&&(c=a.pd.replace(/%1/g,"'"+b.id+"'")+c),a.yh(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function V(a,b,c){var d=W;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=Vi(a,b);if(!a)return"";b=Gk(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function Hk(a,b){var c=W,d=Vi(a,b),e=Gk(c,d);if(!m(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=Fk(e,c.Sd));return e}
function Ik(a,b){var c=W;c.Se&&(a=c.Se.replace(/%1/g,"'"+b+"'")+a);c.pd&&(a+=Fk(c.pd.replace(/%1/g,"'"+b+"'"),c.Sd));return a}Ek.prototype.Sd="  ";function Jk(a){var b=W;b.mg+=a+","}Ek.prototype.lc="{leCUI8hutHZI4480Dc}";function Kk(a,b){var c=W;if(!c.ud[a]){var d=Mc(c.ma,a);c.Si[a]=d;c.ud[a]=b.join("\n").replace(c.Zj,d)}return c.Si[a]};/*

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
var dh="handclosed",Eh="handdelete",ak={},Lk="",Mk=null,Nk="";function Ok(){var a=Pk.join("\n");Nk=ih.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Nk),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Mk=c.sheet;ch("hando")}
function ch(a){if(!I&&Lk!=a){Lk=a;var b="url("+Nk+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Mk||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;yc&&(yc.style.cursor="hando"==a?"":b)}}
var Pk=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function Qk(a,b){function c(){Rk(a);Sk()}if(!lc(document,a))throw"Error: container is not in current document.";b&&Tk(b);if(Dc){var d=document.getElementById("realtime");d&&(d.style.display="block");Uk(c,a)}else c()}
function Tk(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Jg(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var p=a.scrollbars;void 0===p&&(p=c);var y=a.sounds;void 0===y&&(y=!0);var t=!!a.realtime,C=t?a.realtimeOptions:void 0;
D=!!a.rtl;Bc=e;Ac=g;Cc=h;I=b;Fc=a.maxBlocks||Infinity;a.media?ih=a.media:a.path&&(ih=a.path+"media/");Gc=c;Hc=p;xc=d;Ic=y;zc=k;Dc=t;Ec=C}
function Rk(a){a.setAttribute("dir","LTR");me=D;Ok();var b=E("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=E("defs",{},b),d,e;d=E("filter",{id:"blocklyEmboss"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=E("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
E("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);E("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);E("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=E("filter",{id:"blocklyTrashcanShadowFilter"},c);E("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);E("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=E("feMerge",{},d);E("feMergeNode",{"in":"offsetBlur"},d);E("feMergeNode",{"in":"SourceGraphic"},
d);d=E("filter",{id:"blocklyShadowFilter"},c);E("feGaussianBlur",{stdDeviation:2},d);c=E("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);E("rect",{width:10,height:10,fill:"#aaa"},c);E("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);x=new vh(Vk,Wk);b.appendChild(x.P());x.hh=Fc;I||(Gc?x.La=new Kj(b,a):(x.U=new Kh,c=x.U,d=c.P(),c.$d=!1,jc(d)),Hc||Xk(function(){if(0==Xc){var a=x.uc(),b=a.lb+a.ab,c=a.Fc+a.bb;if(a.xb<c||a.xb+a.cb>a.Da+c||a.$b<(D?a.lb:
b)||a.$b+a.sd>(D?a.na:a.na+b))for(var d=Pc(x,!1),e=0,t;t=d[e];e++){var C=t.ba(),z=Mh(t),G=c+25-z.height-C.y;0<G&&t.moveBy(0,G);G=c+a.Da-25-C.y;0>G&&t.moveBy(0,G);G=25+b-C.x-(D?0:z.width);0<G&&t.moveBy(G,0);G=b+a.na-25-C.x+(D?z.width:0);0>G&&t.moveBy(G,0)}}}));b.appendChild(ui());a.appendChild(b);yc=b;Wj();Pf=w("div","blocklyWidgetDiv");Pf.style.direction=D?"rtl":"ltr";document.body.appendChild(Pf)}
function Sk(){F(yc,"mousedown",null,Yk);F(yc,"contextmenu",null,Zk);F(Pf,"contextmenu",null,Zk);Jc||(F(window,"resize",document,Wj),F(document,"keydown",null,$k),document.addEventListener("mouseup",al,!1),Jb&&F(window,"orientationchange",document,function(){eh(window,"resize")}),Jc=!0);if(zc)if(x.La)x.La.g();else if(x.U){x.U.g(x);x.U.show(zc.childNodes);x.scrollX=x.U.M;D&&(x.scrollX*=-1);var a="translate("+x.scrollX+", 0)";x.W.setAttribute("transform",a);x.Od.setAttribute("transform",a)}Hc&&(x.Cc=
new mh(x),x.Cc.resize());xh();if(Ic){bl([ih+"click.mp3",ih+"click.wav",ih+"click.ogg"],"click");bl([ih+"delete.mp3",ih+"delete.ogg",ih+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)H(b.pop());for(var a in cl){var d=cl[a];d.volume=.01;d.play();d.pause();if(Jb||Ib)break}};b.push(F(document,"mousemove",null,a));b.push(F(document,"touchstart",null,a))}};/*

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
var Pf=null,Mf=null,dl=null;function Lf(a,b){Nf();Mf=a;dl=b;Pf.style.display="block"}function Nf(){Mf&&(Pf.style.display="none",dl&&dl(),dl=Mf=null,ic(Pf))}function Qf(a,b,c,d){b<d.y&&(b=d.y);D?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);Pf.style.left=a+"px";Pf.style.top=b+"px"};/*

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
function el(a,b,c,d){this.h=null;this.wa=Number(c);this.M=Number(b);this.jd={height:this.wa+10,width:this.M};this.ya=d||"";this.ea=E("g",{},null);this.Af=E("image",{height:this.wa+"px",width:this.M+"px",y:-12},this.ea);this.Ya(a);Eb&&(this.Uf=E("rect",{height:this.wa+"px",width:this.M+"px",y:-12,"fill-opacity":0},this.ea))}q(el,Sc);f=el.prototype;f.clone=function(){return new el(this.wn(),this.M,this.wa,this.Ga())};f.Uf=null;f.md=!1;
f.g=function(a){this.h||(this.h=a,a.T().appendChild(this.ea),a=this.Uf||this.Af,a.Ra=this.h,vi(a))};f.i=function(){kc(this.ea);this.Uf=this.Af=this.ea=null};f.m=function(a){(this.Uf||this.Af).Ra=a};f.pb=function(){return this.fm};f.Ya=function(a){null!==a&&(this.fm=a,this.Af.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",m(a)?a:""))};f.V=function(a){null!==a&&(this.ya=a)};f.Md=function(){};/*

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
function fl(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=l.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var gl=fl();function hl(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function il(a){this.Fk=hl(a,"clientId");this.Vh=gl.userId;document.getElementById(hl(a,"authButtonElementId"));document.getElementById(hl(a,"authDivElementId"))}il.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function jl(a,b,c,d){function e(c){gapi.pc.ia.files.Df({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Oc(d)}function g(){function a(b){gapi.pc.ia.Wl.Df({fileId:"appdata",resource:{key:"folderId",value:b}}).Oc(function(){e(b)})}function b(){gapi.pc.ia.files.Df({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Oc(function(b){a(b.id)})}gapi.pc.ia.Wl.get({fileId:"appdata",propertyKey:"folderId"}).Oc(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.pc.ia.files.get({fileId:g}).Oc(function(a){a.error||
a.labels.Un?b():e(g)})}})}gapi.pc.load("drive","v2",function(){g()})}function kl(a){this.mj=hl(a,"onFileLoaded");this.El=hl(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.aj=hl(a,"initializeModel");this.yj=hl(a,"registerTypes",function(){});this.fi=hl(a,"afterAuth",function(){});this.zk=hl(a,"autoCreate",!1);this.Qk=hl(a,"defaultTitle","New Realtime File");this.Pk=hl(a,"defaultFolderTitle","");this.gi=hl(a,"afterCreate",function(){});this.tg=new il(a)}
function ll(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;gl=fl();for(var e in b)gapi.ia.Wb.load(b[e],a.mj,a.aj,a.Xi)}kl.prototype.start=function(){var a=this;this.tg.start(function(){a.yj&&a.yj();a.fi&&a.fi();a.load()})};
kl.prototype.Xi=function(a){a.type!=gapi.ia.Wb.Yh.fn&&(a.type==gapi.ia.Wb.Yh.Cm?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ia.Wb.Yh.Mm&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
kl.prototype.load=function(){var a=gl.fileIds;a&&(a=a.split(","));var b=this.tg.Vh,b=gl.state;if(a)for(var c in a)gapi.ia.Wb.load(a[c],this.mj,this.aj,this.Xi);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.zn;b=d.Vh;ll(this,a,b);return}}this.zk&&ml(this)}};function ml(a){jl(a.Qk,a.El,a.Pk,function(b){b.id?(a.gi&&a.gi(b.id),ll(a,[b.id],a.tg.Vh)):(console.error("Error creating file."),console.error(b))})};/*

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
var zh,nl,yh=!1,ol=null,Ji=null,pl=null,ql=null,Li=null,Ni=!1,rl=null,sl=null,tl=null;function ul(a){var b=a.Vk;a=a.Vk.length;for(var c=0;c<a;c++){var d=b[c];if(!d.vl){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.uj?vl(function(){wl(e,!1);xl(e)}):"relativeX"!=d.uj&&"relativeY"!=d.uj||vl(function(){e.Oj||wl(e,!1);xl(e)}))}}}function yl(a){if(!a.vl){var b=a.newValue;b?wl(b,!a.oldValue):(b=a.oldValue,zl(b))}}function vl(a){if(Ni)a();else try{Ni=!0,a()}finally{Ni=!1}}
function wl(a,b){vl(function(){var c=Jg(a.Wh).firstChild;if(c=Lg(x,c,!0))b&&c.p.Zd(c),(b||Xa(zh,c))&&xl(c)})}function xl(a){if(!isNaN(a.Vf)&&!isNaN(a.Wf)){var b=Di().width,c=a.ba(),d=a.Vf-c.x;a.moveBy(D?b-d:d,a.Wf-c.y)}}function zl(a){vl(function(){a.i(!0,!0,!0)})}function Uj(a){if(a.p==x&&yh&&!Ni){a=Yh(a);var b=a.ba(),c=!1,d=Gg(a);d.setAttribute("id",a.id);var e=w("xml");e.appendChild(d);d=Ig(e);d!=a.Wh&&(c=!0,a.Wh=d);if(a.Vf!=b.x||a.Wf!=b.y)a.Vf=b.x,a.Wf=b.y,c=!0;c&&Li.set(a.id.toString(),a)}}
function Al(a,b){gapi.pc.ia.sj.list({fileId:a}).Oc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Mn){b(e.domain);break}}})}
var El={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Ji=a;var b=a.qn();a.Ad().set("blocks",b);b=a.pn();a.Ad().set("topBlocks",b);sl&&a.Ad().set(sl,a.rn(tl))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){ol=a;a:{for(var b=a.$k(),c=0;c<b.length;c++){var d=b[c];if(d.wl){pl=d.On;break a}}pl=void 0}Ji=a.Kf;Li=Ji.Ad().get("blocks");zh=Ji.Ad().get("topBlocks");
Ji.Ad().addEventListener(gapi.ia.Wb.lg.Nm,ul);Li.addEventListener(gapi.ia.Wb.lg.gn,yl);ql();a.addEventListener(gapi.ia.Wb.lg.Dm,Bl);a.addEventListener(gapi.ia.Wb.lg.Em,Cl);Dl();a=zh;for(b=0;b<a.length;b++)c=a.get(b),wl(c,!0)},registerTypes:function(){var a=gapi.ia.Wb.sn;a.Kn(hi,"Block");hi.prototype.id=a.xg("id");hi.prototype.Wh=a.xg("xmlDom");hi.prototype.Vf=a.xg("relativeX");hi.prototype.Wf=a.xg("relativeY");a.Pn(hi,hi.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.pc.ia.sj.Df({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Oc(function(c){c.error&&Al(a,function(c){b=gapi.pc.ia.sj.Df({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Oc(function(){})})})}};function Fl(){var a=Ec,b=hl(a,"chatbox");b&&(sl=hl(b,"elementId"),tl=hl(b,"initText",Gl));El.Fk=hl(a,"clientId");nl=hl(a,"collabElementId")}
function Uk(a,b){Fl();yh=!0;Hl(b);ql=function(){a();if(sl){var b=Ji.Ad().get(sl),d=document.getElementById(sl);gapi.ia.Wb.tn.mn(b,d);d.disabled=!1}};rl=new kl(El);rl.start()}
function Hl(a){a.style.background="url("+ih+"progress.gif) no-repeat center center";var b=sd(a),c=w("div");c.id=El.authDivElementId;var d=w("p",null,Il);c.appendChild(d);d=w("button",null,"Authorize");d.id=El.kn;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=sd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Dl(){if(nl){var a;a=nl;a=m(a)?document.getElementById(a):a;ic(a);for(var b=ol.$k(),c=0;c<b.length;c++){var d=b[c],e=w("img",{src:d.In||ih+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.wl?" ("+Jl+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function Bl(){Dl()}function Cl(){Dl()}function gi(a){var b=pl+"-"+a;return Li.has(b)?gi("-"+a):b};/*

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
function Kl(a,b){var c;if(b){var d=this;c=function(a){a=Ll.call(d,a);null!==a&&b.call(d,a);return a}}else c=Ll;this.Qh=E("tspan",{},null);this.Qh.appendChild(document.createTextNode("\u00b0"));Kl.k.constructor.call(this,a,c)}q(Kl,yk);Kl.prototype.clone=function(){return new Kl(this.Ga(),this.pa)};
Kl.prototype.Ge=function(){Kl.k.Ge.call(this,Fb||Hb||Jb);var a=Pf;if(a.firstChild){var a=E("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"100px",width:"100px"},a),b=E("circle",{cx:50,cy:50,r:49,"class":"blocklyAngleCircle"},a);this.ie=E("path",{"class":"blocklyAngleGauge"},a);this.If=E("line",{x1:50,y1:50,"class":"blocklyAngleLine"},a);for(var c=0;360>c;c+=15)E("line",{x1:99,y1:50,x2:99-(0==c%
45?10:5),y2:50,"class":"blocklyAngleMarks",transform:"rotate("+c+", 50, 50)"},a);a.style.marginLeft="-35px";F(a,"click",this,Nf);F(b,"mousemove",this,this.qj);F(this.ie,"mousemove",this,this.qj);Ml(this)}};Kl.prototype.qj=function(a){var b=this.ie.ownerSVGElement.getBoundingClientRect(),c=a.clientX-b.left-50;a=a.clientY-b.top-50;b=Math.atan(-a/c);isNaN(b)||(b=180*b/Math.PI,0>c?b+=180:0<a&&(b+=360),b=15*Math.round(b/15),360<=b&&(b-=360),b=String(b),zk.value=b,this.V(b))};
Kl.prototype.V=function(a){Kl.k.V.call(this,a);this.ca&&(Ml(this),D?this.ca.insertBefore(this.Qh,this.ca.firstChild):this.ca.appendChild(this.Qh),this.jd.width=0)};
function Ml(a){if(a.ie){var b=Yb(Number(a.Ga()));if(isNaN(b))a.ie.setAttribute("d","M 50, 50"),a.If.setAttribute("x2",50),a.If.setAttribute("y2",50);else{var c=50+49*Math.cos(b),d=50+-49*Math.sin(b);a.ie.setAttribute("d","M 50, 50 h 49 A 49,49 0 "+(b>Math.PI?1:0)+" 0 "+c+","+d+" z");a.If.setAttribute("x2",c);a.If.setAttribute("y2",d)}}}function Ll(a){a=Dk(a);null!==a&&(a%=360,0>a&&(a+=360),a=String(a));return a};/*

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
var ih="https://blockly-demo.appspot.com/static/media/",gh=64,hh=92,jh="sprites.png",Sh=[,2,1,4,3],cl=Object.create(null),N=null,I=!1,Ph=null,Qh=null,ij=5,Zh=20,Vh=250,Vj=30,x=null,Nl=null,Xc=0,Ol=null;function Di(){return{width:yc.li,height:yc.ki}}function Wj(){var a=yc,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.li!=c&&(a.setAttribute("width",c+"px"),a.li=c);a.ki!=b&&(a.setAttribute("height",b+"px"),a.ki=b);x.Cc&&x.Cc.resize()}
function Yk(a){Wj();ej();eg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!I&&N&&b&&Ch();a.target==yc&&Wc(a)?Pl(a):(I||b)&&x.Cc&&(x.Kg=!0,x.Kh=a.clientX,x.Lh=a.clientY,x.im=x.uc(),x.km=x.scrollX,x.lm=x.scrollY,"mouseup"in vk&&(Ol=F(document,"mouseup",null,al)),Kc=F(document,"mousemove",null,Ql))}function al(){ch(ak.OPEN);x.Kg=!1;Ol&&(H(Ol),Ol=null);Kc&&(H(Kc),Kc=null)}
function Ql(a){if(x.Kg){uh();var b=x.im,c=x.km+(a.clientX-x.Kh),d=x.lm+(a.clientY-x.Lh),c=Math.min(c,-b.$b),d=Math.min(d,-b.xb),c=Math.max(c,b.na-b.$b-b.sd),d=Math.max(d,b.Da-b.xb-b.cb);x.Cc.set(-c-b.$b,-d-b.xb);a.stopPropagation()}}
function $k(a){if(!bh(a))if(27==a.keyCode)eg();else if(8==a.keyCode||46==a.keyCode)try{N&&N.vd&&!I&&(eg(),N.i(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(N&&N.vd&&!I&&N.Ub&&!I&&N.p==x&&(eg(),67==a.keyCode?Rl():88==a.keyCode&&(Rl(),N.i(!0,!0))),86==a.keyCode&&Nl){a=x;var b=Nl;if(!(b.getElementsByTagName("block").length>=Rc(a))){var c=Lg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){D&&(d=-d);do for(var e=!1,g=a.eb(),
h=0,k;k=g[h];h++)k=k.ba(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=D?d-Zh:d+Zh,b+=2*Zh,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function ej(){Sj&&(H(Sj),Sj=null);Tj&&(H(Tj),Tj=null);var a=N;if(2==Xc&&a){var b=a.ba();bi(a,b.x-a.Kj,b.y-a.Lj);delete a.gf;nk(a,!1);a.C();lg(a.ua,Vh,a);eh(window,"resize");a.p.nb()}Xc=0;ch(ak.OPEN);hj()}function Rl(){var a=N,b=Gg(a);Rg(b);a=a.ba();b.setAttribute("x",D?-a.x:a.x);b.setAttribute("y",a.y);Nl=b}
function Pl(a){if(!I){var b=[];if(Bc){for(var c=!1,d=!1,e=Pc(x,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Hg(h);d={enabled:d};d.text=Sl;d.Ma=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.cd.bind(c,!0),a),c=Hg(c),a+=10};b.push(d);c={enabled:c};c.text=Tl;c.Ma=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.cd.bind(c,!1),a),c=Hg(c),a+=10};b.push(c)}Rj.show(a,b)}}function Zk(a){bh(a)||a.preventDefault()}
function eg(a){zi();Nf();!a&&x.La&&x.La.U&&x.La.U.$d&&x.La.Me.fd(null)}function uh(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function bh(a){return"textarea"==a.target.type||"text"==a.target.type}
function bl(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(cl[b]=c)}}function Yj(a,b){var c=cl[a];c&&(c=Qb&&9===Qb||Jb||Hb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Vk(){var a=Di();x.La&&(a.width-=x.La.width);var b=a.width-M,c=a.height-M;try{var d=x.W.getBBox()}catch(e){return null}if(x.Cc)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!D&&x.La&&(d=x.La.width);return{Da:a.height,na:a.width,cb:c-h,sd:b-g,Fc:-x.scrollY,lb:-x.scrollX,xb:h,$b:g,bb:0,ab:d}}
function Wk(a){if(!x.Cc)throw"Attempt to set main workspace scroll without scrollbars.";var b=Vk();n(a.x)&&(x.scrollX=-b.sd*a.x-b.$b);n(a.y)&&(x.scrollY=-b.cb*a.y-b.xb);a="translate("+(x.scrollX+b.ab)+","+(x.scrollY+b.bb)+")";x.W.setAttribute("transform",a);x.Od.setAttribute("transform",a)}function Xj(a){a()}function Xk(a){return F(x.W,"blocklyWorkspaceChange",null,a)}l.Blockly||(l.Blockly={});l.Blockly.getMainWorkspace=function(){return x};l.Blockly.addChangeListener=Xk;
l.Blockly.removeChangeListener=function(a){H(a)};var dk="Add Comment",Il="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",Ak="Change value:",Gl="Chat with your collaborator by typing in this box!",Sl="Collapse Blocks",hk="Collapse Block",kk="Delete Block",lk="Delete %1 Blocks",jk="Disable Block",bk="Duplicate",ik="Enable Block",Tl="Expand Blocks",gk="Expand Block",ek="External Inputs",mk="Help",fk="Inline Inputs",Ul="false",Vl="true",Wl="and",Xl="or",Yl="random fraction",Jl="Me",dg="New variable...",
gg="New variable name:",Zl="with:",ck="Remove Comment",cg="Rename variable...",fg="Rename all '%1' variables to:";function $l(a,b){var c;c=a.className;for(var d=c=m(c)&&c.match(/\S+/g)||[],e=ab(arguments,1),g=0;g<e.length;g++)Xa(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var am={en:"English"},bm=[],cm=window.BlocklyGamesLang,dm=window.BlocklyGamesLanguages,em=!!window.location.pathname.match(/\.html$/);function fm(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var B,gm=Number(fm("level","NaN"));B=isNaN(gm)?1:Wb(1,gm,10);
function hm(){document.head.parentElement.setAttribute("dir",-1!=bm.indexOf(cm)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",cm);for(var a=[],b=0;b<dm.length;b++){var c=dm[b];a.push([am[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==cm&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!im(b),a&&c&&$l(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(jm,1)}function im(a){var b=km,c;try{c=window.localStorage[b+a]}catch(d){}return c}function lm(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function mm(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function jm(){if(!em){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var X={xd:null,g:function(){hm();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=lm("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=lm("Games_linkAlert"),BlocklyStorage.HASH_ERROR=lm("Games_hashError"),BlocklyStorage.XML_ERROR=lm("Games_xmlError"),BlocklyStorage.alert=sc.nm,a&&mm(a,BlocklyStorage.link),b&&mm(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
X.Ek,!0)},An:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Qk(a,{media:"media/",readOnly:!0,Nn:-1!=bm.indexOf(cm),scrollbars:!1});a=fm("xml","");X.Ch("<xml>"+a+"</xml>")},Dn:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.hj}catch(d){}c&&delete window.sessionStorage.hj;var e=im(B),g=b&&im(B-1);(c=c||
e||g||a)&&X.Ch(c)}},Ch:function(a){X.xd?X.xd.setValue(a,-1):(a=Jg(a),Kg(x,a))},am:function(){if(void 0!=typeof wc&&window.localStorage){var a=km+B;if(X.xd)var b=X.xd.getValue();else b=Fg(x),b=Ig(b);window.localStorage[a]=b}},Bf:function(){window.location=(em?"index.html":"./")+"?lang="+cm},Ek:function(){if(window.sessionStorage){if(X.xd)var a=X.xd.getValue();else a=Fg(x),a=Ig(a);window.sessionStorage.hj=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),
b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},$i:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Bh(a)},Sn:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},Pb:function(a){if("click"==a.type&&"touchend"==X.Pb.sh&&X.Pb.rh+2E3>Date.now()||X.Pb.sh==a.type&&X.Pb.rh+400>Date.now())return a.preventDefault(),
a.stopPropagation(),!0;X.Pb.sh=a.type;X.Pb.rh=Date.now();return!1}};X.Pb.sh=null;X.Pb.rh=0;X.pl=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
X.ql=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=X;X.setCode=X.Ch;var Y={Uc:!1,Ki:null,ef:null,gd:function(a,b,c,d,e,g){function h(){Y.Uc&&(k.style.visibility="visible",k.style.zIndex=10,p.style.visibility="hidden")}Y.Uc&&Y.fb(!1);eg(!0);Y.Uc=!0;Y.Ki=b;Y.ef=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var p=document.getElementById("dialogBorder"),y;for(y in e)k.style[y]=e[y];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Y.Fg=F(d,"mousedown",
null,Y.Rk));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Y.Gd(b,!1,.2),Y.Gd(k,!0,.8),setTimeout(h,175)):h()},Li:0,Mi:0,Rk:function(a){Y.Ig();if(!Wc(a)){var b=document.getElementById("dialog");Y.Li=b.offsetLeft-a.clientX;Y.Mi=b.offsetTop-a.clientY;Y.Hg=F(document,"mouseup",null,Y.Ig);Y.Gg=F(document,"mousemove",null,Y.Sk);a.stopPropagation()}},Sk:function(a){var b=document.getElementById("dialog"),c=Y.Li+a.clientX;a=Y.Mi+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},Ig:function(){Y.Hg&&(H(Y.Hg),Y.Hg=null);Y.Gg&&(H(Y.Gg),Y.Gg=null)},fb:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Y.Uc){Y.Ig();Y.Fg&&(H(Y.Fg),Y.Fg=null);Y.Uc=!1;Y.ef&&Y.ef();Y.ef=null;var c=!1===a?null:Y.Ki;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Y.Gd(a,!1,.8),Y.Gd(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Gd:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Y.Zk(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Zk:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Of(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},nm:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Y.gd(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.Mh);Y.Jh()},sk:function(){if(!im(B))if(Y.Uc||0!=hi.vn)setTimeout(Y.sk,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Y.fb,!0);b.addEventListener("touchend",Y.fb,!0);b=document.getElementById("abortOk");b.addEventListener("click",X.Bf,!0);b.addEventListener("touchend",X.Bf,
!0);Y.gd(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.ei,!0)});document.body.addEventListener("keydown",Y.ei,!0)}},Cn:function(){var a=document.getElementById("dialogDone");x&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("containerCode");a.removeChild(b);10>B?lm("Games_nextLevel").replace("%1",B+1):lm("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",
Y.fb,!0);b.addEventListener("touchend",Y.fb,!0);b=document.getElementById("doneOk");1==B&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));2==B&&(b.addEventListener("click",function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));3==B&&(b.addEventListener("click",function(){window.open("/bird?lang=en?level=3",
"_self")},!0),b.addEventListener("touchend",function(){window.open("/bird?lang=en?level=3","_self")},!0));4==B&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=5","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=5","_self")},!0));5==B&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=6","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=6","_self")},!0));6==B&&(b.addEventListener("click",
function(){window.open("/maze?lang=en?level=10","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=10","_self")},!0));Y.gd(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.rd,!0)});document.body.addEventListener("keydown",Y.rd,!0)}};
window.wd=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.wd.ul||window.wd.xl){var b=document.createElement("a");b.href=a;void 0!==b.Tk&&(b.Tk="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.wd.ul=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.wd.xl=-1<navigator.userAgent.toLowerCase().indexOf("safari");
Y.un=function(){var a=document.getElementById("dialogDone");x&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Y.fb,!0);b.addEventListener("touchend",Y.fb,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"OK";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{Pl:function(a){a=a.toDataURL("image/png");window.wd(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{Pl:function(a){a=a.toDataURL("image/png");window.wd(a)}})},!0);Y.gd(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.rd,!0)});document.body.addEventListener("keydown",Y.rd,!0)};
Y.En=function(){alert("login");document.getElementById("login")};
Y.Gk=function(){var a=document.getElementById("dialogDone");if(x){document.getElementById("dialogLinesText").textContent="";var b=10>B?lm("Games_nextLevel").replace("%1",B+1):lm("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==km?(c.innerHTML="<p>Grace is a superhero. <br/>Dress her up for her first mission.</p>",c=document.getElementById("Games_nextLevel"),c.parentElement.removeChild(c)):"turtle"==km&&1==B?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/pants.svg' height='75px' border=0/><img class='featureUnlocked' src='./movie/long_skirt.svg' height='75px' border=0/>":
"turtle"==km&&2==B?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/shoe.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hightop.svg' width='80px' border=0/>":"bird"==km&&3==B?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/baseball.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/retro_glasses.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/necklace.svg' width='80px' border=0/>":
"maze"==km&&5==B?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/briefcase.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/purse.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/backpack.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/fancy_purse.svg' width='80px' border=0/>":"maze"==km&&6==B?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/dress.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/crown.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/wand.svg' width='80px' border=0/>":
"maze"==km&&10==B&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/cape.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/shield.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask2.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/gloves.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/logo.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/belt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/word.svg' width='80px' border=0/>")}c=
document.getElementById("doneCancel");c.addEventListener("click",Y.fb,!0);c.addEventListener("touchend",Y.fb,!0);c=document.getElementById("doneOk");c.addEventListener("click",X.jh,!0);c.addEventListener("touchend",X.jh,!0);Y.gd(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.rd,!0)});document.body.addEventListener("keydown",Y.rd,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==km&&1==B&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};
Y.Ji=function(a){!Y.Uc||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Y.fb(!0),a.stopPropagation(),a.preventDefault())};Y.Jh=function(){document.body.addEventListener("keydown",Y.Ji,!0)};Y.Mh=function(){document.body.removeEventListener("keydown",Y.Ji,!0)};Y.rd=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.fb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.jh()};
Y.ei=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.fb(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.Bf()};window.BlocklyDialogs=Y;Y.hideDialog=Y.fb;Cj("goog.net.XhrIo");function nm(a,b,c,d,e){this.name=a;this.si=b;this.Mj=c;this.gm=d||0;this.mc=e;this.F=new v;this.reset();console.log(this+" loaded.")}f=nm.prototype;f.mm=!1;f.Ab=!1;f.zb=0;f.bc=0;f.facing=0;f.speed=0;f.Ob=0;f.F=null;f.eh=0;f.toString=function(){return"["+this.name+"]"};
f.reset=function(){delete this.mm;delete this.Ab;delete this.speed;delete this.Ob;delete this.eh;this.zb=this.gm;this.F.x=this.Mj.x;this.F.y=this.Mj.y;this.facing=this.bc=Xb(180*Math.atan2(50-this.F.y,50-this.F.x)/Math.PI);var a=this.si;if(ga(a))a=a();else if(!m(a))throw"Player "+this.name+" has invalid code: "+a;this.cj="Interpreter"in window?new Interpreter(a,this.mc.rl):null};function om(a,b){a.zb+=b;100<=a.zb&&pm(a)}
function pm(a){a.speed=0;a.Ab=!0;a.zb=100;a.mc.Xd.unshift(a);a.mc.ub.push({type:"DIE",player:a});console.log(a+" dies.")}
function qm(a,b){var c=Z.yb,d;d=void 0===b||null===b?5:b;if(!n(a)||isNaN(a)||!n(d)||isNaN(d))throw TypeError;a=Xb(a);d=Wb(d,0,20);c.mc.ub.push({type:"SCAN",player:c,degree:a,resolution:d});var e=Xb(a-d/2);d=Xb(a+d/2);e>d&&(d+=360);for(var g=c.F.x,h=c.F.y,k=Infinity,p=0,y;y=c.mc.Va[p];p++)if(y!=c&&!y.Ab){var t=y.F.x,C=y.F.y;y=Math.sqrt((C-h)*(C-h)+(t-g)*(t-g));y>=k||(t=Math.atan2(C-h,t-g),t=Xb(180*t/Math.PI),t<e&&(t+=360),e<=t&&t<=d&&(k=y))}return k}
f.ia=function(a,b){var c;c=void 0===b||null===b?50:b;if(!n(a)||isNaN(a)||!n(c)||isNaN(c))throw TypeError;this.bc!=Xb(a)&&(50>=this.speed?this.facing=this.bc=Xb(a):c=0);0==this.speed&&0<c&&(this.speed=.1);this.Ob=Wb(c,0,100)};f.stop=function(){this.Ob=0};
function rm(a,b){var c=Z.yb;if(!n(a)||isNaN(a)||!n(b)||isNaN(b))throw TypeError;var d=Date.now();if(c.eh+1E3*c.mc.ik>d)return!1;c.eh=d;d=c.F.clone();a=Xb(a);c.facing=a;b=Wb(b,0,70);d={Sl:c,Ie:d,bc:a,Tf:b,ee:new v(d.x+b*Math.cos(Yb(a)),d.y+b*Math.sin(Yb(a))),ye:0};c.mc.nd.push(d);c.mc.ub.push({type:"BANG",player:c,degree:d.bc});return!0};var Z={Va:[],Xd:[],ub:[],nd:[],$j:50,ok:100,ik:.5,yb:null,hk:1,$h:3,Xh:5,Yj:5,ig:3,tj:0,hf:0,Rh:0,qk:3E5,Jg:null};Z.nk=[new v(10,90),new v(90,10),new v(10,10),new v(90,90),new v(50,99),new v(50,1),new v(1,50),new v(99,50),new v(50,49)];Z.reset=function(){clearTimeout(Z.tj);Z.ub.length=0;Z.nd.length=0;Z.Xd.length=0;for(var a=Z.Rh=0,b;b=Z.Va[a];a++)b.reset()};Z.hn=function(a,b,c,d){c||(c=Z.nk[Z.Va.length]);a=new nm(a,b,c,d,Z);Z.Va.push(a)};
Z.start=function(a){Z.Jg=a;Z.hf=Date.now()+Z.qk;console.log("Starting battle with "+Z.Va.length+" players.");Z.update()};Z.update=function(){Z.rm();Z.sm();Z.tm();Z.Va.length<=Z.Xd.length+1&&(Z.hf=Math.min(Z.hf,Date.now()+1E3));Date.now()>Z.hf?Z.stop():Z.tj=setTimeout(Z.update,1E3/Z.$j)};Z.stop=function(){for(var a=[],b=0,c;c=Z.Va[b];b++)c.Ab||a.push(c);b=a.length;for(a.sort(function(a,b){return a.zb-b.zb});a.length;)Z.Xd.unshift(a.pop());Z.Jg&&Z.Jg(b)};
Z.sm=function(){for(var a=Z.nd.length-1;0<=a;a--){var b=Z.nd[a];b.ye+=Z.$h;var c=0;if(b.Tf-b.ye<Z.$h/2){Z.nd.splice(a,1);for(var d=0,e;e=Z.Va[d];d++)if(!e.Ab){var g=10*(1-Zb(e.F,b.ee)/4);0<g&&(om(e,g),c=Math.max(c,g))}Z.ub.push({type:"BOOM",damage:c,x:b.ee.x,y:b.ee.y})}}};
Z.tm=function(){for(var a=0,b;b=Z.Va[a];a++)if(!b.Ab&&(b.speed<b.Ob?b.speed=Math.min(b.speed+Z.Xh,b.Ob):b.speed>b.Ob&&(b.speed=Math.max(b.speed-Z.Xh,b.Ob)),0<b.speed)){var c=Z.ri(b),d=c[1],e=Yb(b.bc),g=b.speed/100*Z.hk,h=Math.cos(e)*g,g=Math.sin(e)*g;b.F.x+=h;b.F.y+=g;0>b.F.x||100<b.F.x||0>b.F.y||100<b.F.y?(b.F.x=Wb(b.F.x,0,100),b.F.y=Wb(b.F.y,0,100),d=b.speed/100*Z.ig,om(b,d),b.speed=0,b.Ob=0,Z.ub.push({type:"CRASH",player:b,damage:d})):(c=Z.ri(b),e=c[0],c=c[1],c<Z.Yj&&d>c&&(b.F.x-=h,b.F.y-=g,d=
Math.max(b.speed,e.speed)/100*Z.ig,om(b,d),b.speed=0,b.Ob=0,om(e,d),e.speed=0,e.Ob=0,Z.ub.push({type:"CRASH",player:b,damage:d}),Z.ub.push({type:"CRASH",player:e,damage:d})))}};Z.rm=function(){for(var a=0;a<Z.ok;a++){Z.Rh++;for(var b=0,c;c=Z.Va[b];b++)if(!c.Ab){Z.yb=c;try{c.cj.step()}catch(d){console.log(c+" throws an error: "+d),console.dir(c.cj.Rn),pm(c)}Z.yb=null}}};
Z.rl=function(a,b){var c;c=function(b,c){return a.createPrimitive(qm(b&&b.valueOf(),c&&c.valueOf()))};a.setProperty(b,"scan",a.createNativeFunction(c));c=function(b,c){return a.createPrimitive(rm(b&&b.valueOf(),c&&c.valueOf()))};a.setProperty(b,"cannon",a.createNativeFunction(c));c=function(a,b){Z.yb.ia(a&&a.valueOf(),b&&b.valueOf())};a.setProperty(b,"drive",a.createNativeFunction(c));a.setProperty(b,"swim",a.createNativeFunction(c));a.setProperty(b,"stop",a.createNativeFunction(function(){Z.yb.stop()}));
a.setProperty(b,"damage",a.createNativeFunction(function(){return a.createPrimitive(Z.yb.zb)}));a.setProperty(b,"health",a.createNativeFunction(function(){return a.createPrimitive(100-Z.yb.zb)}));a.setProperty(b,"speed",a.createNativeFunction(function(){return a.createPrimitive(Z.yb.speed)}));a.setProperty(b,"loc_x",a.createNativeFunction(function(){return a.createPrimitive(Z.yb.F.x)}));a.setProperty(b,"loc_y",a.createNativeFunction(function(){return a.createPrimitive(Z.yb.F.y)}));var d=a.getProperty(b,
"Math");d!=a.UNDEFINED&&(c=function(b){return a.createPrimitive(Math.sin((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"sin_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.cos((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"cos_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.tan((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"tan_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.asin(b&&b.valueOf())/Math.PI*180)},
a.setProperty(d,"asin_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.acos(b&&b.valueOf())/Math.PI*180)},a.setProperty(d,"acos_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.atan(b&&b.valueOf())/Math.PI*180)},a.setProperty(d,"atan_deg",a.createNativeFunction(c)))};Z.ri=function(a){for(var b=null,c=Infinity,d=0,e;e=Z.Va[d];d++)if(!e.Ab&&a!=e){var g=Math.min(c,Zb(a.F,e.F));g<c&&(c=g,b=e)}return[b,c]};/*

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
var W=new Ek("JavaScript");Jk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
W.Ud=0;W.Vd=1;W.Ym=1;W.Ua=2;W.Wm=3;W.Tm=3;W.ci=4;W.Pm=4;W.$m=4;W.di=4;W.Zm=4;W.an=4;W.Um=4;W.ek=5;W.Ve=5;W.Wd=5;W.ai=6;W.gk=6;W.Rm=7;W.fk=8;W.Vm=8;W.Xm=8;W.bi=9;W.Om=10;W.Sm=11;W.Qm=12;W.ck=13;W.dk=14;W.Ue=15;W.od=16;W.Ta=17;W.$a=99;W.g=function(a){W.ud=Object.create(null);W.Si=Object.create(null);W.ma?W.ma.reset():W.ma=new Lc(W.mg);var b=[];a=Wf(a);for(var c=0;c<a.length;c++)b[c]="var "+W.ma.getName(a[c],"VARIABLE")+";";W.ud.variables=b.join("\n")};
W.finish=function(a){var b=[],c;for(c in W.ud)b.push(W.ud[c]);return b.join("\n\n")+"\n\n\n"+a};W.Dj=function(a){return a+";\n"};W.Jn=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
W.yh=function(a,b){var c="";if(!a.H||!a.H.v){var d=a.nf();d&&(c+=Fk(d,"// ")+"\n");for(var e=0;e<a.R.length;e++)if(1==a.R[e].type){var g=K(a.R[e].s);if(g){for(var d=[],g=g.ob(),h=0;h<g.length;h++){var k=g[h].nf();k&&d.push(k)}d.length&&d.push("");(d=d.join("\n"))&&(c+=Fk(d,"// "))}}}e=Gk(W,a.B&&K(a.B));return c+b+e};/*

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
W.vm={};W.variables_get=function(a){return[W.ma.getName(S(a,"VAR"),"VARIABLE"),W.Ud]};W.variables_set=function(a){var b=V(a,"VALUE",W.od)||"0";return W.ma.getName(S(a,"VAR"),"VARIABLE")+" = "+b+";\n"};/*

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
J.vm={};
J.variables_get={g:function(){this.A="https://github.com/google/blockly/wiki/Variables#get";this.n(330);R(R(R(U(this),""),new $f("item"),"VAR"),"");O(this);this.m("Returns the value of this variable.");this.af="Create 'set %1'";this.bf="variables_set"},dc:function(){return[S(this,"VAR")]},Hb:function(a,b){Nc(a,S(this,"VAR"))&&ed(this,b,"VAR")},Nb:function(a){var b={enabled:!0},c=S(this,"VAR");b.text=this.af.replace("%1",c);c=w("field",null,c);c.setAttribute("name","VAR");c=w("block",null,c);c.setAttribute("type",
this.bf);b.Ma=Rj.wg(this,c);a.push(b)}};J.variables_set={g:function(){this.A="https://github.com/google/blockly/wiki/Variables#set";this.n(330);this.qb("set %1 to %2",["VAR",new $f("item")],["VALUE",null,1],1);P(this,!0);Q(this,!0);this.m("Sets this variable to be equal to the input.");this.af="Create 'get %1'";this.bf="variables_get"},dc:function(){return[S(this,"VAR")]},Hb:function(a,b){Nc(a,S(this,"VAR"))&&ed(this,b,"VAR")},Nb:J.variables_get.Nb};/*

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
W.Bl={};W.math_number=function(a){return[parseFloat(S(a,"NUM")),W.Ud]};W.math_arithmetic=function(a){var b={ADD:[" + ",W.ai],MINUS:[" - ",W.gk],MULTIPLY:[" * ",W.ek],DIVIDE:[" / ",W.Ve],POWER:[null,W.Ta]}[S(a,"OP")],c=b[0],b=b[1],d=V(a,"A",b)||"0";a=V(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",W.Ua]};
W.math_single=function(a){var b=S(a,"OP"),c;if("NEG"==b)return a=V(a,"NUM",W.di)||"0","-"==a[0]&&(a=" "+a),["-"+a,W.di];a="SIN"==b||"COS"==b||"TAN"==b?V(a,"NUM",W.Ve)||"0":V(a,"NUM",W.$a)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,W.Ua];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,W.Ve]};
W.math_constant=function(a){return{PI:["Math.PI",W.Vd],E:["Math.E",W.Vd],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",W.Ve],SQRT2:["Math.SQRT2",W.Vd],SQRT1_2:["Math.SQRT1_2",W.Vd],INFINITY:["Infinity",W.Ud]}[S(a,"CONSTANT")]};
W.math_number_property=function(a){var b=V(a,"NUMBER_TO_CHECK",W.Wd)||"0",c=S(a,"PROPERTY"),d;if("PRIME"==c)return d=Kk("math_isPrime",["function "+W.lc+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,W.Ua];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=V(a,"DIVISOR",W.Wd)||"0",d=b+" % "+a+" == 0"}return[d,W.bi]};
W.math_change=function(a){var b=V(a,"DELTA",W.ai)||"0";a=W.ma.getName(S(a,"VAR"),"VARIABLE");return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};W.math_round=W.math_single;W.math_trig=W.math_single;
W.math_on_list=function(a){var b=S(a,"OP");switch(b){case "SUM":a=V(a,"LIST",W.Vd)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=V(a,"LIST",W.Ta)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=V(a,"LIST",W.Ta)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=Kk("math_mean",["function "+W.lc+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=V(a,"LIST",W.$a)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=Kk("math_median",
["function "+W.lc+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=V(a,"LIST",W.$a)||"[]";a=b+"("+a+")";break;case "MODE":b=Kk("math_modes",["function "+W.lc+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=V(a,"LIST",W.$a)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=Kk("math_standard_deviation",["function "+W.lc+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=V(a,"LIST",W.$a)||"[]";a=b+"("+a+")";break;case "RANDOM":b=Kk("math_random_list",["function "+W.lc+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=V(a,"LIST",W.$a)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,W.Ua]};W.math_modulo=function(a){var b=V(a,"DIVIDEND",W.Wd)||"0";a=V(a,"DIVISOR",W.Wd)||"0";return[b+" % "+a,W.Wd]};
W.math_constrain=function(a){var b=V(a,"VALUE",W.Ta)||"0",c=V(a,"LOW",W.Ta)||"0";a=V(a,"HIGH",W.Ta)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",W.Ua]};W.math_random_int=function(a){var b=V(a,"FROM",W.Ta)||"0";a=V(a,"TO",W.Ta)||"0";return[Kk("math_random_int",["function "+W.lc+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",W.Ua]};
W.math_random_float=function(){return["Math.random()",W.Ua]};/*

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
J.Vl={};
J.procedures_defnoreturn={g:function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);var a=$c("do something",this);R(R(R(U(this),"to"),new yk(a,bd),"NAME"),"","PARAMS");this.ed(new Ih(["procedures_mutatorarg"]));this.m("Creates a function with no output.");this.u=[];this.jc(!0);this.ka=null},jc:function(a){this.xf!==a&&(a?(R(Si(this,3,"STACK"),""),Pg(this,"RETURN")&&Ti(this,"STACK","RETURN")):Ui(this,"STACK",!0),this.xf=a)},Pe:function(){for(var a=!1,b={},c=0;c<
this.u.length;c++){if(b["arg_"+this.u[c].toLowerCase()]){a=!0;break}b["arg_"+this.u[c].toLowerCase()]=!0}a?this.Fe("Warning: This function has duplicate parameters."):this.Fe(null);a="";this.u.length&&(a=Zl+" "+this.u.join(", "));ed(this,a,"PARAMS")},hb:function(){for(var a=document.createElement("mutation"),b=0;b<this.u.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.u[b]);a.appendChild(c)}this.xf||a.setAttribute("statements","false");return a},Bb:function(a){this.u=[];
for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&this.u.push(c.getAttribute("name"));this.Pe();this.jc("false"!==a.getAttribute("statements"))},td:function(a){var b=dd(a,"procedures_mutatorcontainer");b.Ha();Pg(this,"RETURN")?ed(b,this.xf?"TRUE":"FALSE","STATEMENTS"):Pg(b,"STATEMENT_INPUT").L(!1);for(var c=Pg(b,"STACK").s,d=0;d<this.u.length;d++){var e=dd(a,"procedures_mutatorarg");e.Ha();ed(e,this.u[d],"NAME");e.Hn=d;Qg(c,e.K);c=e.B}gd(S(this,"NAME"),this.p,this.u,null);return b},
ae:function(a){this.u=[];this.nh=[];for(var b=Vi(a,"STACK");b;)this.u.push(S(b,"NAME")),this.nh.push(b.id),b=b.B&&K(b.B);this.Pe();gd(S(this,"NAME"),this.p,this.u,this.nh);a=S(a,"STATEMENTS");if(null!==a&&(a="TRUE"==a,this.xf!=a))if(a)this.jc(!0),a=Pg(this,"STACK").s,a.v||!this.ka||this.ka.v||this.ka.h.p!=this.p?this.ka=null:Qg(a,this.ka);else{a=Pg(this,"STACK").s;if(this.ka=a.v)a=K(a),a.Ka(null),a.ua();this.jc(!1)}},i:function(){for(var a=S(this,"NAME"),a=fd(a,this.p),b=0;b<a.length;b++)a[b].i(!0,
!1);this.constructor.prototype.i.apply(this,arguments)},tf:function(){return[S(this,"NAME"),this.u,!1]},dc:function(){return this.u},Hb:function(a,b){for(var c=!1,d=0;d<this.u.length;d++)Nc(a,this.u[d])&&(this.u[d]=b,c=!0);if(c&&(this.Pe(),this.rb.Bn()))for(var c=this.rb.t.eb(),d=0,e;e=c[d];d++)"procedures_mutatorarg"==e.type&&Nc(a,S(e,"NAME"))&&ed(e,b,"NAME")},Nb:function(a){var b={enabled:!0},c=S(this,"NAME");b.text="Create '%1'".replace("%1",c);var d=w("mutation");d.setAttribute("name",c);for(var e=
0;e<this.u.length;e++)c=w("arg"),c.setAttribute("name",this.u[e]),d.appendChild(c);d=w("block",null,d);d.setAttribute("type",this.mi);b.Ma=Rj.wg(this,d);a.push(b);if(!this.isCollapsed())for(e=0;e<this.u.length;e++)b={enabled:!0},c=this.u[e],b.text="Create 'get %1'".replace("%1",c),d=w("field",null,c),d.setAttribute("name","VAR"),d=w("block",null,d),d.setAttribute("type","variables_get"),b.Ma=Rj.wg(this,d),a.push(b)},mi:"procedures_callnoreturn"};
J.procedures_defreturn={g:function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);var a=$c("do something",this);R(R(R(U(this),"to"),new yk(a,bd),"NAME"),"","PARAMS");R(Ii(T(this,"RETURN"),1),"return");this.ed(new Ih(["procedures_mutatorarg"]));this.m("Creates a function with an output.");this.u=[];this.jc(!0);this.ka=null},jc:J.procedures_defnoreturn.jc,Pe:J.procedures_defnoreturn.Pe,hb:J.procedures_defnoreturn.hb,Bb:J.procedures_defnoreturn.Bb,td:J.procedures_defnoreturn.td,
ae:J.procedures_defnoreturn.ae,i:J.procedures_defnoreturn.i,tf:function(){return[S(this,"NAME"),this.u,!0]},dc:J.procedures_defnoreturn.dc,Hb:J.procedures_defnoreturn.Hb,Nb:J.procedures_defnoreturn.Nb,mi:"procedures_callreturn"};J.procedures_mutatorcontainer={g:function(){this.n(290);R(U(this),"inputs");Si(this,3,"STACK");R(R(U(this,"STATEMENT_INPUT"),"allow statements"),new xk("TRUE"),"STATEMENTS");this.m("Add, remove, or reorder inputs to this function.");this.contextMenu=!1}};
J.procedures_mutatorarg={g:function(){this.n(290);R(R(U(this),"input name:"),new yk("x",this.um),"NAME");P(this,!0);Q(this,!0);this.m("Add an input to the function.");this.contextMenu=!1},um:function(a){return(a=a.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,""))||null}};
J.procedures_callnoreturn={g:function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);R(R(R(U(this),""),"","NAME"),"with:","WITH");P(this,!0);Q(this,!0);this.u=[];this.Vb=this.fc=null},zd:function(){return S(this,"NAME")},vh:function(a,b){Nc(a,this.zd())&&(ed(this,b,"NAME"),this.m((this.H?"Run the user-defined function '%1' and use its output.":"Run the user-defined function '%1'.").replace("%1",b)))},Jb:function(a,b){if(b){if(b.length!=a.length)throw"Error: paramNames and paramIds must be the same length.";
this.Vb||(this.fc={},this.Vb=a.join("\n")==this.u.join("\n")?b:[]);var c=this.w;this.w=!1;for(var d=this.u.length-1;0<=d;d--){var e=Pg(this,"ARG"+d);if(e){var g=e.s.v;this.fc[this.Vb[d]]=g;Ui(this,"ARG"+d)}}this.u=[].concat(a);this.Vb=b;for(d=0;d<this.u.length;d++)if(e=R(Ii(T(this,"ARG"+d),1),this.u[d]),this.Vb){var h=this.Vb[d];h in this.fc&&(g=this.fc[h],!g||g.v||g.h.p!=this.p?delete this.fc[h]:Qg(e.s,g))}Qi(this,"WITH").L(!!this.u.length);(this.w=c)&&this.C()}else this.fc={},this.Vb=null},hb:function(){var a=
document.createElement("mutation");a.setAttribute("name",this.zd());for(var b=0;b<this.u.length;b++){var c=document.createElement("arg");c.setAttribute("name",this.u[b]);a.appendChild(c)}return a},Bb:function(a){var b=a.getAttribute("name");ed(this,b,"NAME");this.m((this.H?"Run the user-defined function '%1' and use its output.":"Run the user-defined function '%1'.").replace("%1",b));if((b=hd(b,this.p))&&b.rb.J())this.Jb(b.u,b.nh);else{this.u=[];for(var b=0,c;c=a.childNodes[b];b++)"arg"==c.nodeName.toLowerCase()&&
this.u.push(c.getAttribute("name"));this.Jb(this.u,this.u)}},Hb:function(a,b){for(var c=0;c<this.u.length;c++)Nc(a,this.u[c])&&(this.u[c]=b,Pg(this,"ARG"+c).ra[0].V(b))},Nb:function(a){var b={enabled:!0,text:"Highlight function definition"},c=this.zd(),d=this.p;b.Ma=function(){var a=hd(c,d);a&&a.select()};a.push(b)}};
J.procedures_callreturn={g:function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);R(R(R(U(this),""),"","NAME"),"with:","WITH");O(this);this.u=[];this.Vb=this.fc=null},zd:J.procedures_callnoreturn.zd,vh:J.procedures_callnoreturn.vh,Jb:J.procedures_callnoreturn.Jb,hb:J.procedures_callnoreturn.hb,Bb:J.procedures_callnoreturn.Bb,Hb:J.procedures_callnoreturn.Hb,Nb:J.procedures_callnoreturn.Nb};
J.procedures_ifreturn={g:function(){this.A="http://c2.com/cgi/wiki?GuardClause";this.n(290);R(T(this,"CONDITION").I("Boolean"),"if");R(T(this,"VALUE"),"return");L(this,!0);P(this,!0);Q(this,!0);this.m("If a value is true, then return a second value.");this.wc=!0},hb:function(){var a=document.createElement("mutation");a.setAttribute("value",Number(this.wc));return a},Bb:function(a){this.wc=1==a.getAttribute("value");this.wc||(Ui(this,"VALUE"),R(U(this,"VALUE"),"return"))},onchange:function(){if(this.p){var a=
!1,b=this;do{if("procedures_defnoreturn"==b.type||"procedures_defreturn"==b.type){a=!0;break}b=Oi(b)}while(b);a?("procedures_defnoreturn"==b.type&&this.wc?(Ui(this,"VALUE"),R(U(this,"VALUE"),"return"),this.wc=!1):"procedures_defreturn"!=b.type||this.wc||(Ui(this,"VALUE"),R(T(this,"VALUE"),"return"),this.wc=!0),this.Fe(null)):this.Fe("Warning: This block may be used only within a function definition.")}}};/*

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
J.Bl={};J.math_number={g:function(){this.A="https://en.wikipedia.org/wiki/Number";this.n(230);R(U(this),new yk("0",Dk),"NUM");O(this,"Number");this.m("A number.")}};
J.math_arithmetic={g:function(){this.A="https://en.wikipedia.org/wiki/Arithmetic";this.n(230);O(this,"Number");T(this,"A").I("Number");R(T(this,"B").I("Number"),new Hf([["+","ADD"],["-","MINUS"],["\u00d7","MULTIPLY"],["\u00f7","DIVIDE"],["^","POWER"]]),"OP");L(this,!0);var a=this;this.m(function(){return{ADD:"Return the sum of the two numbers.",MINUS:"Return the difference of the two numbers.",MULTIPLY:"Return the product of the two numbers.",DIVIDE:"Return the quotient of the two numbers.",POWER:"Return the first number raised to the power of the second number."}[S(a,
"OP")]})}};
J.math_single={g:function(){this.A="https://en.wikipedia.org/wiki/Square_root";this.n(230);O(this,"Number");this.qb("%1 %2",["OP",new Hf([["square root","ROOT"],["absolute","ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]])],["NUM","Number",1],1);var a=this;this.m(function(){return{ROOT:"Return the square root of a number.",ABS:"Return the absolute value of a number.",NEG:"Return the negation of a number.",LN:"Return the natural logarithm of a number.",LOG10:"Return the base 10 logarithm of a number.",EXP:"Return e to the power of a number.",
POW10:"Return 10 to the power of a number."}[S(a,"OP")]})}};
J.math_trig={g:function(){this.A="https://en.wikipedia.org/wiki/Trigonometric_functions";this.n(230);O(this,"Number");R(T(this,"NUM").I("Number"),new Hf([["sin","SIN"],["cos","COS"],["tan","TAN"],["asin","ASIN"],["acos","ACOS"],["atan","ATAN"]]),"OP");var a=this;this.m(function(){return{SIN:"Return the sine of a degree (not radian).",COS:"Return the cosine of a degree (not radian).",TAN:"Return the tangent of a degree (not radian).",ASIN:"Return the arcsine of a number.",ACOS:"Return the arccosine of a number.",
ATAN:"Return the arctangent of a number."}[S(a,"OP")]})}};J.math_constant={g:function(){this.A="https://en.wikipedia.org/wiki/Mathematical_constant";this.n(230);O(this,"Number");R(U(this),new Hf([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.m("Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).")}};
J.math_number_property={g:function(){this.n(230);T(this,"NUMBER_TO_CHECK").I("Number");var a=new Hf([["is even","EVEN"],["is odd","ODD"],["is prime","PRIME"],["is whole","WHOLE"],["is positive","POSITIVE"],["is negative","NEGATIVE"],["is divisible by","DIVISIBLE_BY"]],function(a){this.h.Tj("DIVISIBLE_BY"==a)});R(U(this),a,"PROPERTY");L(this,!0);O(this,"Boolean");this.m("Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.")},
hb:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==S(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Bb:function(a){a="true"==a.getAttribute("divisor_input");this.Tj(a)},Tj:function(a){var b=Pg(this,"DIVISOR");a?b||T(this,"DIVISOR").I("Number"):b&&Ui(this,"DIVISOR")}};
J.math_change={g:function(){this.A="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";this.n(230);this.qb("change %1 by %2",["VAR",new $f("item")],["DELTA","Number",1],1);P(this,!0);Q(this,!0);var a=this;this.m(function(){return"Add a number to variable '%1'.".replace("%1",S(a,"VAR"))})},dc:function(){return[S(this,"VAR")]},Hb:function(a,b){Nc(a,S(this,"VAR"))&&ed(this,b,"VAR")}};
J.math_round={g:function(){this.A="https://en.wikipedia.org/wiki/Rounding";this.n(230);O(this,"Number");R(T(this,"NUM").I("Number"),new Hf([["round","ROUND"],["round up","ROUNDUP"],["round down","ROUNDDOWN"]]),"OP");this.m("Round a number up or down.")}};
J.math_on_list={g:function(){var a=this;this.A="";this.n(230);O(this,"Number");var b=new Hf([["sum of list","SUM"],["min of list","MIN"],["max of list","MAX"],["average of list","AVERAGE"],["median of list","MEDIAN"],["modes of list","MODE"],["standard deviation of list","STD_DEV"],["random item of list","RANDOM"]],function(b){"MODE"==b?a.H.I("Array"):a.H.I("Number")});R(T(this,"LIST").I("Array"),b,"OP");this.m(function(){return{SUM:"Return the sum of all the numbers in the list.",MIN:"Return the smallest number in the list.",
MAX:"Return the largest number in the list.",AVERAGE:"Return the average (arithmetic mean) of the numeric values in the list.",MEDIAN:"Return the median number in the list.",MODE:"Return a list of the most common item(s) in the list.",STD_DEV:"Return the standard deviation of the list.",RANDOM:"Return a random element from the list."}[S(a,"OP")]})}};
J.math_modulo={g:function(){this.A="https://en.wikipedia.org/wiki/Modulo_operation";this.n(230);O(this,"Number");this.qb("remainder of %1 \u00f7 %2",["DIVIDEND","Number",1],["DIVISOR","Number",1],1);L(this,!0);this.m("Return the remainder from dividing the two numbers.")}};
J.math_constrain={g:function(){this.A="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";this.n(230);O(this,"Number");this.qb("constrain %1 low %2 high %3",["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);L(this,!0);this.m("Constrain a number to be between the specified limits (inclusive).")}};
J.math_random_int={g:function(){this.A="https://en.wikipedia.org/wiki/Random_number_generation";this.n(230);O(this,"Number");this.qb("random integer from %1 to %2",["FROM","Number",1],["TO","Number",1],1);L(this,!0);this.m("Return a random integer between the two specified limits, inclusive.")}};J.math_random_float={g:function(){this.A="https://en.wikipedia.org/wiki/Random_number_generation";this.n(230);O(this,"Number");R(U(this),Yl);this.m("Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).")}};/*

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
W.Vl={};W.procedures_defreturn=function(a){var b=W.ma.getName(S(a,"NAME"),"PROCEDURE"),c=Hk(a,"STACK");W.pd&&(c=Fk(W.pd.replace(/%1/g,"'"+a.id+"'"),W.Sd)+c);W.Se&&(c=W.Se.replace(/%1/g,"'"+a.id+"'")+c);var d=V(a,"RETURN",W.$a)||"";d&&(d="  return "+d+";\n");for(var e=[],g=0;g<a.u.length;g++)e[g]=W.ma.getName(a.u[g],"VARIABLE");c="function "+b+"("+e.join(", ")+") {\n"+c+d+"}";c=W.yh(a,c);W.ud[b]=c;return null};W.procedures_defnoreturn=W.procedures_defreturn;
W.procedures_callreturn=function(a){for(var b=W.ma.getName(S(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.u.length;d++)c[d]=V(a,"ARG"+d,W.Ta)||"null";return[b+"("+c.join(", ")+")",W.Ua]};W.procedures_callnoreturn=function(a){for(var b=W.ma.getName(S(a,"NAME"),"PROCEDURE"),c=[],d=0;d<a.u.length;d++)c[d]=V(a,"ARG"+d,W.Ta)||"null";return b+"("+c.join(", ")+");\n"};
W.procedures_ifreturn=function(a){var b="if ("+(V(a,"CONDITION",W.$a)||"false")+") {\n";a.wc?(a=V(a,"VALUE",W.$a)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};/*

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
J.Al={};
J.controls_if={g:function(){this.A="https://github.com/google/blockly/wiki/IfElse";this.n(210);R(T(this,"IF0").I("Boolean"),"if");R(Si(this,3,"DO0"),"do");P(this,!0);Q(this,!0);this.ed(new Ih(["controls_if_elseif","controls_if_else"]));var a=this;this.m(function(){if(a.Q||a.Y){if(!a.Q&&a.Y)return"If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";if(a.Q&&!a.Y)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";if(a.Q&&
a.Y)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements."}else return"If a value is true, then do some statements.";return""});this.Y=this.Q=0},hb:function(){if(!this.Q&&!this.Y)return null;var a=document.createElement("mutation");this.Q&&a.setAttribute("elseif",this.Q);this.Y&&a.setAttribute("else",1);return a},Bb:function(a){this.Q=parseInt(a.getAttribute("elseif"),
10);this.Y=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.Q;a++)R(T(this,"IF"+a).I("Boolean"),"else if"),R(Si(this,3,"DO"+a),"do");this.Y&&R(Si(this,3,"ELSE"),"else")},td:function(a){var b=dd(a,"controls_if_if");b.Ha();for(var c=Pg(b,"STACK").s,d=1;d<=this.Q;d++){var e=dd(a,"controls_if_elseif");e.Ha();Qg(c,e.K);c=e.B}this.Y&&(a=dd(a,"controls_if_else"),a.Ha(),Qg(c,a.K));return b},ae:function(a){this.Y&&Ui(this,"ELSE");this.Y=0;for(var b=this.Q;0<b;b--)Ui(this,"IF"+b),Ui(this,"DO"+b);this.Q=
0;for(a=Vi(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.Q++;var b=R(T(this,"IF"+this.Q).I("Boolean"),"else if"),c=Si(this,3,"DO"+this.Q);R(c,"do");a.fg&&Qg(b.s,a.fg);a.ka&&Qg(c.s,a.ka);break;case "controls_if_else":this.Y++;b=Si(this,3,"ELSE");R(b,"else");a.ka&&Qg(b.s,a.ka);break;default:throw"Unknown block type.";}a=a.B&&K(a.B)}},Ae:function(a){a=Vi(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=Pg(this,"IF"+b),d=Pg(this,"DO"+b);a.fg=c&&c.s.v;a.ka=d&&d.s.v;
b++;break;case "controls_if_else":d=Pg(this,"ELSE");a.ka=d&&d.s.v;break;default:throw"Unknown block type.";}a=a.B&&K(a.B)}}};J.controls_if_if={g:function(){this.n(210);R(U(this),"if");Si(this,3,"STACK");this.m("Add, remove, or reorder sections to reconfigure this if block.");this.contextMenu=!1}};J.controls_if_elseif={g:function(){this.n(210);R(U(this),"else if");P(this,!0);Q(this,!0);this.m("Add a condition to the if block.");this.contextMenu=!1}};
J.controls_if_else={g:function(){this.n(210);R(U(this),"else");P(this,!0);this.m("Add a final, catch-all condition to the if block.");this.contextMenu=!1}};
J.logic_compare={g:function(){var a=D?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.A="https://en.wikipedia.org/wiki/Inequality_(mathematics)";this.n(210);O(this,"Boolean");T(this,"A");R(T(this,"B"),new Hf(a),"OP");L(this,!0);var b=this;this.m(function(){return{EQ:"Return true if both inputs equal each other.",NEQ:"Return true if both inputs are not equal to each other.",
LT:"Return true if the first input is smaller than the second input.",LTE:"Return true if the first input is smaller than or equal to the second input.",GT:"Return true if the first input is greater than the second input.",GTE:"Return true if the first input is greater than or equal to the second input."}[S(b,"OP")]})}};
J.logic_operation={g:function(){var a=[[Wl,"AND"],[Xl,"OR"]];this.A="https://github.com/google/blockly/wiki/Logic#logical-operations";this.n(210);O(this,"Boolean");T(this,"A").I("Boolean");R(T(this,"B").I("Boolean"),new Hf(a),"OP");L(this,!0);var b=this;this.m(function(){return{AND:"Return true if both inputs are true.",OR:"Return true if at least one of the inputs is true."}[S(b,"OP")]})}};
J.logic_negate={g:function(){this.A="https://github.com/google/blockly/wiki/Logic#not";this.n(210);O(this,"Boolean");this.qb("not %1",["BOOL","Boolean",1],1);this.m("Returns true if the input is false. Returns false if the input is true.")}};J.logic_boolean={g:function(){var a=[[Vl,"TRUE"],[Ul,"FALSE"]];this.A="https://github.com/google/blockly/wiki/Logic#values";this.n(210);O(this,"Boolean");R(U(this),new Hf(a),"BOOL");this.m("Returns either true or false.")}};
J.logic_null={g:function(){this.A="https://en.wikipedia.org/wiki/Nullable_type";this.n(210);O(this);R(U(this),"null");this.m("Returns null.")}};J.logic_ternary={g:function(){this.A="https://en.wikipedia.org/wiki/%3F:";this.n(210);R(T(this,"IF").I("Boolean"),"test");R(T(this,"THEN"),"if true");R(T(this,"ELSE"),"if false");O(this);this.m("Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.")}};/*

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
W.Fn={};W.controls_repeat=function(a){var b=Number(S(a,"TIMES")),c=Hk(a,"DO"),c=Ik(c,a.id);a=Mc(W.ma,"count");return"for (var "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};W.controls_repeat_ext=function(a){var b=V(a,"TIMES",W.od)||"0",c=Hk(a,"DO"),c=Ik(c,a.id);a="";var d=Mc(W.ma,"count"),e=b;b.match(/^\w+$/)||wk(b)||(e=Mc(W.ma,"repeat_end"),a+="var "+e+" = "+b+";\n");return a+("for (var "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
W.controls_whileUntil=function(a){var b="UNTIL"==S(a,"MODE"),c=V(a,"BOOL",b?W.ci:W.$a)||"false",d=Hk(a,"DO"),d=Ik(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
W.controls_for=function(a){var b=W.ma.getName(S(a,"VAR"),"VARIABLE"),c=V(a,"FROM",W.od)||"0",d=V(a,"TO",W.od)||"0",e=V(a,"BY",W.od)||"1",g=Hk(a,"DO"),g=Ik(g,a.id);if(wk(c)&&wk(d)&&wk(e)){var h=parseFloat(c)<=parseFloat(d);a="for ("+b+" = "+c+"; "+b+(h?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(h?"++":"--"):a+((h?" += ":" -= ")+b))+(") {\n"+g+"}\n")}else a="",h=c,c.match(/^\w+$/)||wk(c)||(h=Mc(W.ma,b+"_start"),a+="var "+h+" = "+c+";\n"),c=d,d.match(/^\w+$/)||wk(d)||(c=Mc(W.ma,b+"_end"),
a+="var "+c+" = "+d+";\n"),d=Mc(W.ma,b+"_inc"),a+="var "+d+" = ",a=wk(e)?a+(Math.abs(e)+";\n"):a+("Math.abs("+e+");\n"),a+="if ("+h+" > "+c+") {\n",a+=W.Sd+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+h+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+g+"}\n";return a};
W.controls_forEach=function(a){var b=W.ma.getName(S(a,"VAR"),"VARIABLE"),c=V(a,"LIST",W.od)||"[]",d=Hk(a,"DO"),d=Ik(d,a.id);a=Mc(W.ma,b+"_index");d=W.Sd+b+" = "+c+"["+a+"];\n"+d;return"for (var "+a+" in "+c+") {\n"+d+"}\n"};W.controls_flow_statements=function(a){switch(S(a,"FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};/*

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
W.Al={};W.controls_if=function(a){for(var b=0,c=V(a,"IF"+b,W.$a)||"false",d=Hk(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.Q;b++)c=V(a,"IF"+b,W.$a)||"false",d=Hk(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.Y&&(d=Hk(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};W.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[S(a,"OP")],c="=="==b||"!="==b?W.bi:W.fk,d=V(a,"A",c)||"0";a=V(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
W.logic_operation=function(a){var b="AND"==S(a,"OP")?"&&":"||",c="&&"==b?W.ck:W.dk,d=V(a,"A",c);a=V(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};W.logic_negate=function(a){var b=W.ci;return["!"+(V(a,"BOOL",b)||"true"),b]};W.logic_boolean=function(a){return["TRUE"==S(a,"BOOL")?"true":"false",W.Ud]};W.logic_null=function(){return["null",W.Ud]};
W.logic_ternary=function(a){var b=V(a,"IF",W.Ue)||"false",c=V(a,"THEN",W.Ue)||"null";a=V(a,"ELSE",W.Ue)||"null";return[b+" ? "+c+" : "+a,W.Ue]};J.cape={g:function(){this.n(160);R(R(U(this),"Cape"),new el("./movie/cape.svg",50,50,"Cape"));this.m("");P(this,!0);Q(this,!0)}};W.cape=function(){return"cape();\n"};J.logo={g:function(){this.n(160);R(R(U(this),"Logo"),new el("./movie/logo.svg",50,50,"Logo"));this.m("");P(this,!0);Q(this,!0)}};W.logo=function(){return"logo();\n"};J.gloves={g:function(){this.n(160);R(R(U(this),"Gloves"),new el("./movie/gloves.svg",50,50,"Gloves"));this.m("");P(this,!0);Q(this,!0)}};W.gloves=function(){return"gloves();\n"};
J.belt={g:function(){this.n(160);R(R(U(this),"Belt"),new el("./movie/belt.svg",50,50,"Belt"));this.m("");P(this,!0);Q(this,!0)}};W.belt=function(){return"belt();\n"};J.shield={g:function(){this.n(160);R(R(U(this),"Shield"),new el("./movie/shield.svg",50,50,"Shield"));this.m("");P(this,!0);Q(this,!0)}};W.shield=function(){return"shield();\n"};J.boots={g:function(){this.n(160);R(R(U(this),"Boots"),new el("./movie/boots.svg",50,50,"Boots"));this.m("");P(this,!0);Q(this,!0)}};W.boots=function(){return"boots();\n"};
J.skirt={g:function(){this.n(160);R(R(U(this),"Skirt"),new el("./movie/skirt2.svg",50,50,"skirt"));this.m("");P(this,!0);Q(this,!0)}};W.skirt=function(){return"skirt();\n"};J.mask={g:function(){this.n(160);R(R(U(this),"Mask"),new el("./movie/mask2.svg",50,50,"Mask"));this.m("");P(this,!0);Q(this,!0)}};W.mask=function(){return"mask();\n"};J.tshirt={g:function(){L(this,!0);this.n(160);R(R(U(this),"Shirt"),new el("./movie/shirt.svg",50,50,"T-Shirt"));P(this,!0);Q(this,!0)}};W.tshirt=function(){return"shirt();\n "};
J.pond_scan={g:function(){this.n(290);R(T(this,"DEGREE").I(["Number","Angle"]),"scan(");R(U(this),")");L(this,!0);O(this,"Number");this.m(lm("Pond_scanTooltip"))}};W.pond_scan=function(a){return["scan("+(V(a,"DEGREE",W.Ta)||0)+")",W.Ua]};J.pond_cannon={g:function(){this.n(290);R(T(this,"DEGREE").I(["Number","Angle"]),"cannon(");R(T(this,"RANGE").I("Number"),",");R(U(this),");");L(this,!0);P(this,!0);Q(this,!0);this.m(lm("Pond_cannonTooltip"))}};
W.pond_cannon=function(a){var b=V(a,"DEGREE",W.Ta)||0;a=V(a,"RANGE",W.Ta)||0;return"cannon("+b+", "+a+");\n"};J.pond_swim={g:function(){this.n(290);R(T(this,"DEGREE").I(["Number","Angle"]),"swim(");R(U(this),");");L(this,!0);P(this,!0);Q(this,!0);this.m(lm("Pond_swimTooltip"))}};W.pond_swim=function(a){return"swim("+(V(a,"DEGREE",W.Ta)||0)+");\n"};J.pond_stop={g:function(){this.n(290);R(U(this),"stop();");P(this,!0);Q(this,!0);this.m(lm("Pond_stopTooltip"))}};W.pond_stop=function(){return"stop();\n"};
J.pond_health={g:function(){this.n(290);R(U(this),"health()");O(this,"Number");this.m(lm("Pond_healthTooltip"))}};W.pond_health=function(){return["health()",W.Ua]};J.pond_speed={g:function(){this.n(290);R(U(this),"speed()");O(this,"Number");this.m(lm("Pond_speedTooltip"))}};W.pond_speed=function(){return["speed()",W.Ua]};J.pond_loc_x={g:function(){this.n(290);R(U(this),"loc_x()");O(this,"Number");this.m(lm("Pond_locXTooltip"))}};W.pond_loc_x=function(){return["loc_x()",W.Ua]};
J.pond_loc_y={g:function(){this.n(290);R(U(this),"loc_y()");O(this,"Number");this.m(lm("Pond_locYTooltip"))}};W.pond_loc_y=function(){return["loc_y()",W.Ua]};
J.pond_controls_if={g:function(){this.A="https://github.com/google/blockly/wiki/IfElse";this.n(210);R(T(this,"IF0").I("Boolean"),"if (");R(U(this),") {");Si(this,3,"DO0");R(U(this,"TAIL"),"}");L(this,!0);P(this,!0);Q(this,!0);this.ed(new Ih(["controls_if_elseif","controls_if_else"]));var a=this;this.m(function(){if(a.Q||a.Y){if(!a.Q&&a.Y)return"If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";if(a.Q&&!a.Y)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
if(a.Q&&a.Y)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements."}else return"If a value is true, then do some statements.";return""});this.Y=this.Q=0},hb:J.controls_if.hb,Bb:function(a){this.Q=parseInt(a.getAttribute("elseif"),10);this.Y=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.Q;a++)R(T(this,"IF"+a).I("Boolean"),"} else if ("),
R(U(this,"TAIL"+a),") {"),Si(this,3,"DO"+a);this.Y&&(R(U(this,"ELSEMSG"),"} else {"),Si(this,3,"ELSE"));Ti(this,"TAIL",null)},td:J.controls_if.td,ae:function(a){this.Y&&(Ui(this,"ELSEMSG"),Ui(this,"ELSE"));this.Y=0;for(var b=this.Q;0<b;b--)Ui(this,"IF"+b),Ui(this,"TAIL"+b),Ui(this,"DO"+b);this.Q=0;for(a=Vi(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.Q++;b=R(T(this,"IF"+this.Q).I("Boolean"),"} else if (");R(U(this,"TAIL"+this.Q),") {");var c=Si(this,3,"DO"+this.Q);a.fg&&Qg(b.s,a.fg);
a.ka&&Qg(c.s,a.ka);break;case "controls_if_else":this.Y++;R(U(this,"ELSEMSG"),"} else {");b=Si(this,3,"ELSE");a.ka&&Qg(b.s,a.ka);break;default:throw"Unknown block type.";}a=a.B&&K(a.B)}Ti(this,"TAIL",null)},Ae:J.controls_if.Ae};W.pond_controls_if=W.controls_if;
J.logic_compare.g=function(){this.A="https://en.wikipedia.org/wiki/Inequality_(mathematics)";this.n(210);O(this,"Boolean");T(this,"A");R(T(this,"B"),new Hf([["==","EQ"],["!=","NEQ"],["<","LT"],["<=","LTE"],[">","GT"],[">=","GTE"]]),"OP");L(this,!0);var a=this;this.m(function(){return{Gm:"Return true if both inputs equal each other.",Lm:"Return true if both inputs are not equal to each other.",Jm:"Return true if the first input is smaller than the second input.",Km:"Return true if the first input is smaller than or equal to the second input.",
Hm:"Return true if the first input is greater than the second input.",Im:"Return true if the first input is greater than or equal to the second input."}[S(a,"OP")]})};Wl="&&";Xl="||";Vl="true";Ul="false";J.pond_loops_while={g:function(){this.A="https://github.com/google/blockly/wiki/Loops#repeat";this.n(120);R(T(this,"BOOL").I("Boolean"),"while (");R(U(this),") {");Si(this,3,"DO");R(U(this),"}");L(this,!0);P(this,!0);Q(this,!0);this.m("While a value is true, then do some statements.")}};
W.pond_loops_while=W.controls_whileUntil;J.pond_math_number={g:function(){this.A="https://en.wikipedia.org/wiki/Number";this.n(230);R(U(this,"DUMMY"),new yk("0",Dk),"NUM");O(this,"Number");this.m("A number.")},onchange:function(){if(this.p&&this.H.v&&this.H.v.nc){var a=Pg(this,"DUMMY"),b=Qi(this,"NUM"),c=b.pb();-1!=this.H.v.nc.indexOf("Angle")?b.constructor!=Kl&&(Gi(a),R(a,new Kl(c),"NUM")):b.constructor!=yk&&(Gi(a),R(a,new yk(c,Dk),"NUM"))}}};W.pond_math_number=W.math_number;
J.pond_math_arithmetic={g:function(){this.A="https://en.wikipedia.org/wiki/Arithmetic";this.n(230);O(this,"Number");T(this,"A").I("Number");R(T(this,"B").I("Number"),new Hf([["+","ADD"],["-","MINUS"],["*","MULTIPLY"],["/","DIVIDE"]]),"OP");L(this,!0);var a=this;this.m(function(){return{ADD:"Return the sum of the two numbers.",MINUS:"Return the difference of the two numbers.",MULTIPLY:"Return the product of the two numbers.",DIVIDE:"Return the quotient of the two numbers."}[S(a,"OP")]})}};
W.pond_math_arithmetic=W.math_arithmetic;
J.pond_math_single={g:function(){this.A="https://en.wikipedia.org/wiki/Square_root";this.n(230);O(this,"Number");R(T(this,"NUM").I("Number"),new Hf([["Math.sqrt (","ROOT"],["Math.abs (","ABS"],["Math.sin_deg (","SIN"],["Math.cos_deg (","COS"],["Math.tan_deg (","TAN"],["Math.asin_deg (","ASIN"],["Math.acos_deg (","ACOS"],["Math.atan_deg (","ATAN"]]),"OP");R(U(this),")");L(this,!0);var a=this;this.m(function(){return{bn:"Return the square root of a number.",ym:"Return the absolute value of a number.",
cn:"Return the sine of a degree (not radian).",Fm:"Return the cosine of a degree (not radian).",dn:"Return the tangent of a degree (not radian).",Am:"Return the arcsine of a number.",zm:"Return the arccosine of a number.",Bm:"Return the arctangent of a number."}[S(a,"OP")]})}};
W.pond_math_single=function(a){var b=S(a,"OP");a=V(a,"NUM",W.$a)||"0";switch(b){case "ABS":b="Math.abs("+a+")";break;case "ROOT":b="Math.sqrt("+a+")";break;case "SIN":b="Math.sin_deg("+a+")";break;case "COS":b="Math.cos_deg("+a+")";break;case "TAN":b="Math.tan_deg("+a+")";break;case "ASIN":b="Math.asin_deg("+a+")";break;case "ACOS":b="Math.acos_deg("+a+")";break;case "ATAN":b="Math.atan_deg("+a+")";break;default:throw"Unknown math operator: "+b;}return[b,W.Ua]};
J.pond_math_change={g:function(){this.A="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";this.n(230);R(R(T(this,"DELTA").I("Number"),new $f("name"),"VAR"),"+=");R(U(this),";");L(this,!0);P(this,!0);Q(this,!0);var a=this;this.m(function(){return"Add a number to variable '%1'.".replace("%1",S(a,"VAR"))})},dc:J.math_change.dc,Hb:J.math_change.Hb};W.pond_math_change=W.math_change;Yl="Math.random()";
J.variables_get.g=function(){this.A="https://github.com/google/blockly/wiki/Variables#get";this.n(330);R(U(this),new $f("name"),"VAR");O(this);this.m("Returns the value of this variable.");this.af="Create 'set %1'";this.bf="variables_set"};
J.variables_set.g=function(){this.A="https://github.com/google/blockly/wiki/Variables#set";this.n(330);R(R(R(T(this,"VALUE"),"var"),new $f("name"),"VAR"),"=");R(U(this),";");L(this,!0);P(this,!0);Q(this,!0);this.m("Sets this variable to be equal to the input.");this.af="Create 'get %1'";this.bf="variables_get"};
J.procedures_defnoreturn.g=function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);var a=$c("do something",this);R(R(R(R(R(U(this),"function"),new yk(a,bd),"NAME"),"("),"","PARAMS"),") {");R(U(this),"}");this.ed(new Ih(["procedures_mutatorarg"]));this.m("Creates a function with no output.");this.u=[];this.jc(!0);this.ka=null};
J.procedures_defreturn.g=function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);var a=$c("do something",this);R(R(R(R(R(U(this),"function"),new yk(a,bd),"NAME"),"("),"","PARAMS"),") {");R(Ii(T(this,"RETURN"),1),"return");R(U(this),"}");this.ed(new Ih(["procedures_mutatorarg"]));this.m("Creates a function with an output.");this.u=[];this.jc(!0);this.ka=null};Zl="";
J.procedures_callnoreturn.g=function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);R(R(U(this),"","NAME"),"(");R(U(this,"TAIL"),");");L(this,!0);P(this,!0);Q(this,!0);this.m("Run the user-defined function '%1'.");this.u=[];this.Vb=this.fc=null};J.procedures_callnoreturn.Gj=J.procedures_callnoreturn.Jb;J.procedures_callnoreturn.Jb=function(a,b){this.Gj(a,b);Ti(this,"TAIL",null)};
J.procedures_callreturn.g=function(){this.A="https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";this.n(290);R(R(U(this),"","NAME"),"(");R(U(this,"TAIL"),")");L(this,!0);O(this);this.m("Run the user-defined function '%1' and use its output.");this.u=[];this.Vb=this.fc=null};J.procedures_callreturn.Gj=J.procedures_callreturn.Jb;J.procedures_callreturn.Jb=J.procedures_callnoreturn.Jb;delete J.procedures_ifreturn;var sm,tm,um,vm={},wm=[],xm=new Image;xm.src="pond/sprites.png";var ym=["#ff8b00","#c90015","#166c0b","#11162a"],zm=0;function Am(){sm=document.getElementById("scratch").getContext("2d");var a=document.getElementById("display").getContext("2d");tm=a;um=a.canvas.width;a.globalCompositeOperation="copy";bl(["pond/whack.mp3","pond/whack.ogg"],"whack");bl(["pond/boom.mp3","pond/boom.ogg"],"boom");bl(["pond/splash.mp3","pond/splash.ogg"],"splash")}
function Bm(){clearTimeout(zm);wm.length=0;var a=document.getElementById("playerStatRow");a.innerHTML="";for(var b=[],c=[],d=0,e;e=Z.Va[d];d++){var g=ym[d%ym.length];e.Uj=d;var h=document.createElement("td");h.style.borderColor=g;var k=document.createElement("div");k.className="playerStatHealth";k.style.background=g;e.wm=k;c[d]=k;h.appendChild(k);k=document.createElement("div");k.className="playerStatName";e=document.createTextNode(e.name);k.appendChild(e);b[d]=k;h.appendChild(k);k=document.createElement("div");
e=document.createTextNode("\u00a0");k.appendChild(e);h.appendChild(k);a.appendChild(h)}for(d=0;k=b[d];d++)k.style.width=k.parentNode.offsetWidth-2+"px";for(d=0;k=c[d];d++)k.style.height=k.parentNode.offsetHeight-2+"px";Cm()}var Dm=0,Em=0;function Fm(){Cm();var a=Date.now(),b=Math.max(1,1E3/36-(a-Dm-Em));zm=setTimeout(Fm,b);Dm=a;Em=b}function Gm(a){return a/100*(um-35)+17.5}
function Cm(){var a=sm;a.beginPath();a.rect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="#527dbf";a.fill();for(var b=[],c=0,d;d=Z.Va[c];c++)d.Ab&&b.push(d);for(c=0;d=Z.Va[c];c++)d.Ab||b.push(d);for(c=0;d=b[c];c++){a.save();var e=Gm(d.F.x),g=Gm(100-d.F.y);a.translate(e,g);var h=d.Uj%ym.length*35;d.Ab&&(a.globalAlpha=.25);0<d.speed&&(a.save(),e=50<d.speed?0:25<d.speed?35:70,a.rotate(-d.bc/180*Math.PI),a.drawImage(xm,455,e,35,35,-45.5,-17.5,35,35),a.restore());a.drawImage(xm,0,h,35,35,-17.5,-17.5,
35,35);e=d.facing/180*Math.PI;a.translate(12*Math.cos(e),12*-Math.sin(e)-2);e=(14-Math.round(d.facing/360*12))%12+1;d=d.facing%30;15<=d&&(d-=30);d/=1.5;a.rotate(-d/180*Math.PI);a.drawImage(xm,35*e,h,35,35,-15.5,-15.5,35,35);a.restore()}for(c=0;d=Z.nd[c];c++){a.save();var g=d.ye/d.Tf,h=(d.ee.y-d.Ie.y)*-g,e=d.Tf/2,k=.15*d.Tf,e=k-Math.pow((d.ye-e)/Math.sqrt(k)*k/e,2),g=Gm(d.Ie.x+(d.ee.x-d.Ie.x)*g),k=Gm(100-d.Ie.y+h-e),h=Gm(100-d.Ie.y+h);a.beginPath();a.arc(g,h,5*Math.max(0,1-e/10),0,2*Math.PI,!0);a.closePath();
a.fillStyle="rgba(128, 128, 128, "+Math.max(0,1-e/10)+")";a.fill();a.beginPath();a.arc(g,k,5,0,2*Math.PI,!0);a.closePath();a.fillStyle=ym[d.Sl.Uj%ym.length];a.fill()}for(c=0;c<Z.ub.length;c++)if(e=Z.ub[c],d=e.player,"CRASH"==e.type){if(h=vm[d.id],!h||h+1E3<pa())Yj("whack",e.damage/Z.ig),vm[d.id]=pa()}else"SCAN"==e.type?(g=Math.max(e.resolution/2,.5),h=-Yb(e.degree+g),k=-Yb(e.degree-g),a.beginPath(),e=Gm(d.F.x),g=Gm(100-d.F.y),a.moveTo(e,g),a.lineTo(e+200*Math.cos(h),g+200*Math.sin(h)),a.arc(e,g,200,
h,k),a.lineTo(e,g),d=a.createRadialGradient(e,g,17.5,e,g,200),d.addColorStop(0,"rgba(255, 255, 255, 0.3)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),a.fillStyle=d,a.fill()):"BANG"!=e.type&&("BOOM"==e.type?(e.damage&&Yj("boom",e.damage/10),wm.push({x:e.x,y:e.y,Ke:0})):"DIE"==e.type&&Yj("splash"));Z.ub.length=0;for(c=wm.length-1;0<=c;c--)d=wm[c],e=Gm(d.x),g=Gm(100-d.y),a.beginPath(),a.arc(e,g,d.Ke+1,0,2*Math.PI,!0),a.closePath(),a.lineWidth=5,a.strokeStyle="rgba(255, 255, 255, "+(1-d.Ke/10)+")",a.stroke(),
d.Ke+=2,10<d.Ke&&wm.splice(c,1);tm.drawImage(a.canvas,0,0);for(c=0;d=b[c];c++)a=d.wm,a.parentNode.title=Math.round(100-d.zb)+"%",a.style.width=Math.max(0,a.parentNode.offsetWidth*(1-d.zb/100)-2)+"px"};var Hm=null;function Im(){var a=document.getElementById("docsButton"),b=document.getElementById("dialogDocs");Y.Gd(b,!1,.8);Y.Gd(a,!0,.2);setTimeout(function(){document.getElementById("dialogBorder").style.visibility="hidden"},175);b.style.visibility="hidden"}function Jm(a){if(!X.Pb(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";Km()}}
function Lm(a){X.Pb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",Z.reset(),Bm())}function Km(){"Interpreter"in window?(Z.reset(),Bm(),Z.start(Hm),Fm()):setTimeout(Km,250)}function Mm(){var a=document.getElementById("help"),b=document.getElementById("helpButton");Y.gd(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.Mh);Y.Jh()};X.jh=function(){10>B?window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"?lang="+cm+"&level="+(B+1):X.Bf()};Hm=function(a){clearTimeout(zm);0!=a&&1==a&&"function"==typeof Z.Xd[0].si&&(3==B&&2E5<Z.Rh?(a=document.getElementById("helpUseScan"),Y.gd(a,null,!1,!0,{width:"30%",left:"35%",top:"12em"},Y.Mh),Y.Jh()):(X.am(),Y.Gk()))};var km="pond-basic";function Nm(){Om();var a=W,b=x,c=[];a.g(b);for(var b=Pc(b,!0),d=0,e;e=b[d];d++){var g=Gk(a,e);ea(g)&&(g=g[0]);g&&(e.H&&a.Dj&&(g=a.Dj(g)),c.push(g))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");c=c.replace(/[ \t]+\n/g,"\n");a=new Interpreter(c,Pm);c=!0;for(b=0;c&&1E4>b;b++)try{c=a.step()}catch(h){alert(h),c=!1}uc.drawImage(A.canvas,0,0)}
function Pm(a,b){a.setProperty(b,"shirt",a.createNativeFunction(function(){A.save();A.translate(0,0);A.translate(0,0);A.translate(0,0);A.scale(1,1);A.translate(200,100);A.strokeStyle="rgba(0,0,0,0)";A.lineCap="butt";A.lineJoin="miter";A.miterLimit=4;A.save();A.restore();A.save();A.fillStyle="#000000";A.beginPath();A.moveTo(-154.3,158);A.bezierCurveTo(-158.8,154,-162,151.9,-171.9,149);A.bezierCurveTo(-173.70000000000002,148.5,-176,146.4,-193,146.4);A.lineTo(-193,147.4);A.bezierCurveTo(-193,147.4,-194.6,
157,-198.3,161.20000000000002);A.bezierCurveTo(-203.5,167.10000000000002,-212.60000000000002,171.70000000000002,-222.60000000000002,172.3);A.bezierCurveTo(-234.8,173,-242.40000000000003,168.70000000000002,-247.10000000000002,165.4);A.bezierCurveTo(-254.90000000000003,159.9,-261.90000000000003,148.9,-263.20000000000005,146.70000000000002);A.lineTo(-263.00000000000006,146.50000000000003);A.bezierCurveTo(-263.1000000000001,146.50000000000003,-263.20000000000005,146.50000000000003,-263.30000000000007,
146.50000000000003);A.bezierCurveTo(-263.4000000000001,146.40000000000003,-263.4000000000001,146.30000000000004,-263.4000000000001,146.30000000000004);A.bezierCurveTo(-263.4000000000001,146.30000000000004,-263.80000000000007,146.40000000000003,-264.4000000000001,146.50000000000003);A.bezierCurveTo(-277.5000000000001,146.40000000000003,-279.7000000000001,146.50000000000003,-290.5000000000001,148.50000000000003);A.bezierCurveTo(-299.10000000000014,150.10000000000002,-305.10000000000014,153.20000000000002,
-309.3000000000001,157.40000000000003);A.bezierCurveTo(-313.5000000000001,161.60000000000002,-337.7000000000001,184.90000000000003,-347.7000000000001,199.60000000000002);A.bezierCurveTo(-343.1000000000001,210.20000000000002,-328.6000000000001,217.60000000000002,-316.3000000000001,220.70000000000002);A.lineTo(-309.40000000000015,213.60000000000002);A.bezierCurveTo(-307.70000000000016,238.40000000000003,-299.90000000000015,250.8,-298.8000000000001,256);A.bezierCurveTo(-297.5000000000001,261.7,-296.60000000000014,
262.4,-295.0000000000001,285.4);A.bezierCurveTo(-293.5000000000001,307.5,-296.60000000000014,327.2,-300.4000000000001,348.9);A.bezierCurveTo(-302.30000000000007,359.59999999999997,-306.1000000000001,372.7,-308.0000000000001,383.4);A.bezierCurveTo(-309.10000000000014,389.29999999999995,-311.7000000000001,402.59999999999997,-306.9000000000001,407.4);A.bezierCurveTo(-297.30000000000007,416.79999999999995,-278.0000000000001,416.2,-254.10000000000008,418.09999999999997);A.bezierCurveTo(-230.20000000000007,
419.99999999999994,-175.50000000000009,416.29999999999995,-166.10000000000008,414.4);A.bezierCurveTo(-156.70000000000007,412.5,-153.70000000000007,408.9,-152.30000000000007,403.7);A.bezierCurveTo(-150.70000000000007,382,-157.70000000000007,361.09999999999997,-162.10000000000008,340.09999999999997);A.bezierCurveTo(-165.9000000000001,321.9,-166.00000000000009,304.2,-164.50000000000009,285.7);A.bezierCurveTo(-163.10000000000008,269.4,-162.00000000000009,266.59999999999997,-159.20000000000007,257.9);
A.bezierCurveTo(-158.00000000000009,254.2,-150.90000000000006,243.09999999999997,-148.10000000000008,216.49999999999997);A.lineTo(-143.4000000000001,220.79999999999998);A.bezierCurveTo(-131.3000000000001,216.99999999999997,-117.20000000000009,208.7,-113.40000000000009,197.79999999999998);A.bezierCurveTo(-124.3,183.7,-149.9,162,-154.3,158);A.closePath();A.fill();A.stroke();A.restore();A.restore()}));a.setProperty(b,"mask",a.createNativeFunction(function(){A.save();A.translate(0,0);A.translate(0,0);
A.translate(0,0);A.scale(.175,.175);A.translate(750,255);A.strokeStyle="rgba(0,0,0,0)";A.lineCap="butt";A.lineJoin="miter";A.miterLimit=4;A.save();A.restore();A.save();A.beginPath();A.moveTo(776.2,262.1);A.lineTo(931.6,223.60000000000002);A.lineTo(914.5,197.40000000000003);A.lineTo(914.5,161.60000000000002);A.lineTo(776,245.20000000000002);A.bezierCurveTo(776.6,221.60000000000002,774.7,203,769.1,203.40000000000003);A.bezierCurveTo(442.40000000000003,223.60000000000002,222,215.80000000000004,32,197.90000000000003);
A.bezierCurveTo(18.1,196.60000000000002,29.3,315.40000000000003,49.4,317.5);A.bezierCurveTo(145.1,327.7,489.4,326,758.6,343.1);A.bezierCurveTo(764.1,343.40000000000003,769.7,317.6,773,288);A.lineTo(918.8,332.4);A.lineTo(895.3,298.2);A.lineTo(931.5999999999999,281.09999999999997);A.lineTo(776.2,262.1);A.closePath();A.moveTo(304.4,307.6);A.bezierCurveTo(269,307.6,240.29999999999998,290.90000000000003,240.29999999999998,270.20000000000005);A.bezierCurveTo(240.29999999999998,249.60000000000005,269,232.80000000000004,
304.4,232.80000000000004);A.bezierCurveTo(339.79999999999995,232.80000000000004,368.5,249.50000000000003,368.5,270.20000000000005);A.bezierCurveTo(368.5,290.8,339.8,307.6,304.4,307.6);A.closePath();A.moveTo(507.5,309.3);A.bezierCurveTo(472.1,309.3,443.4,292.6,443.4,271.90000000000003);A.bezierCurveTo(443.4,251.30000000000004,472.09999999999997,234.50000000000003,507.5,234.50000000000003);A.bezierCurveTo(542.9,234.50000000000003,571.6,251.20000000000002,571.6,271.90000000000003);A.bezierCurveTo(571.6,
292.5,542.9,309.3,507.5,309.3);A.closePath();A.fill();A.stroke();A.restore();A.restore()}));a.setProperty(b,"skirt",a.createNativeFunction(function(){A.save();A.translate(0,0);A.translate(0,0);A.translate(0,0);A.scale(.15,.15);A.translate(540,1052);A.strokeStyle="rgba(0,0,0,0)";A.lineCap="butt";A.lineJoin="miter";A.miterLimit=4;A.save();A.restore();A.save();A.beginPath();A.moveTo(545.8,87.8);A.bezierCurveTo(547.3,42,528.8,27.799999999999997,528.8,27.799999999999997);A.bezierCurveTo(528.8,27.799999999999997,
465.59999999999997,65.69999999999999,354.59999999999997,65.69999999999999);A.bezierCurveTo(243.59999999999997,65.69999999999999,175.8,27.8,175.8,27.8);A.bezierCurveTo(157.3,45.2,161.9,87.8,161.9,87.8);A.bezierCurveTo(124.9,141.5,70.9,233.10000000000002,72.5,424.1);A.bezierCurveTo(72.5,424.1,103.3,469.90000000000003,195.8,484.1);A.bezierCurveTo(194.3,496.70000000000005,194.3,504.6,195.8,510.90000000000003);A.bezierCurveTo(195.8,510.90000000000003,268.3,545.6,343.8,522);A.bezierCurveTo(343.8,522,345.3,
520.4,345.3,518.8);A.bezierCurveTo(345.3,525.0999999999999,346.8,528.3,348.40000000000003,529.9);A.bezierCurveTo(356.1,539.4,473.30000000000007,548.8,507.20000000000005,514.1);A.bezierCurveTo(507.20000000000005,514.1,508.70000000000005,515.7,508.70000000000005,498.3);A.bezierCurveTo(601.2,510.90000000000003,633.6,447.8,633.6,447.8);A.bezierCurveTo(633.7,436.7,655.3,286.7,545.8,87.8);A.closePath();A.fill();A.stroke();A.restore();A.restore()}))}
function Om(){var a=new Image;a.onload=function(){A.drawImage(a,-300,0,1E3,400)};a.src="pond/superhero.svg"}
window.addEventListener("load",function(){function a(){c.style.top=Math.max(10,d.offsetTop-window.pageYOffset)+"px";c.style.left=b?"10px":"0px";c.style.width=window.innerWidth-445+"px"}document.body.innerHTML=vc();X.g();Am();mm("runButton",Jm);mm("resetButton",Lm);mm("closeDocs",Im);setTimeout(X.pl,1);setTimeout(X.ql,1);mm("helpButton",Mm);2>location.hash.length&&!im(B)&&setTimeout(Mm,1E3);var b=-1!=bm.indexOf(cm),c=document.getElementById("blockly"),d=document.getElementById("visualization");window.addEventListener("scroll",
function(){a();eh(window,"resize")});window.addEventListener("resize",a);a();var e=document.getElementById("toolbox");Qk(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:e,trashcan:!0});Jk("scan,cannon,drive,swim,stop,speed,damage,health,loc_x,loc_y");uc=document.getElementById("display").getContext("2d");A=document.getElementById("scratch").getContext("2d");Nm();Xk(Nm)});
