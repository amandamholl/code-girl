// Automatically generated file.  Do not edit!
'use strict';var f,l=this;function aa(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Zb=function(){return a.fi?a.fi:a.fi=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function p(a){return"function"==da(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a){return a[ja]||(a[ja]=++ka)}var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;
function la(a,b,c){return a.call.apply(a.bind,arguments)}function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function na(a,b,c){na=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return na.apply(null,arguments)}
function oa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var pa=Date.now||function(){return+new Date};function q(a,b){function c(){}c.prototype=b.prototype;a.i=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nl=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function qa(a,b){null!=a&&this.append.apply(this,arguments)}f=qa.prototype;f.fa="";f.set=function(a){this.fa=""+a};f.append=function(a,b,c){this.fa+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.fa+=arguments[d];return this};f.clear=function(){this.fa=""};f.toString=function(){return this.fa};var ra;function sa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,sa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}q(sa,Error);sa.prototype.name="CustomError";function ta(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ua(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var va=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function wa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function xa(a){if(!ya.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(za,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Aa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ba,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ca,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Da,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ea,"&#0;"));return a}var za=/&/g,Aa=/</g,Ba=/>/g,Ca=/"/g,Da=/'/g,Ea=/\x00/g,ya=/[\x00&<>"']/;
function Fa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Ga,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Ha(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Ga=/&([^;\s<&]+);?/g;function Ia(a,b){return a<b?-1:a>b?1:0};function Ja(a,b){b.unshift(a);sa.call(this,ta.apply(null,b));b.shift()}q(Ja,sa);Ja.prototype.name="AssertionError";function Ka(a,b){throw new Ja("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function La(){this.Tg="";this.nj=Na}La.prototype.bd=!0;La.prototype.Zc=function(){return this.Tg};La.prototype.toString=function(){return"Const{"+this.Tg+"}"};function Oa(a){if(a instanceof La&&a.constructor===La&&a.nj===Na)return a.Tg;Ka("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Na={};function Pa(){this.hc="";this.lj=Qa}f=Pa.prototype;f.bd=!0;f.Zc=function(){return this.hc};f.kg=!0;f.Ed=function(){return 1};f.toString=function(){return"SafeUrl{"+this.hc+"}"};var Qa={};var Ra=Array.prototype,Sa=Ra.indexOf?function(a,b,c){return Ra.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ta=Ra.forEach?function(a,b,c){Ra.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},Ua=Ra.filter?function(a,b,c){return Ra.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=
0,h=n(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[g++]=m)}return e},Va=Ra.map?function(a,b,c){return Ra.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=n(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},Wa=Ra.every?function(a,b,c){return Ra.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function Xa(a,b){return 0<=Sa(a,b)}
function Ya(a,b){var c=Sa(a,b),d;(d=0<=c)&&Ra.splice.call(a,c,1);return d}function Za(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function $a(a,b,c,d){Ra.splice.apply(a,ab(arguments,1))}function ab(a,b,c){return 2>=arguments.length?Ra.slice.call(a,b):Ra.slice.call(a,b,c)};function bb(){this.gf="";this.kj=cb}bb.prototype.bd=!0;var cb={};bb.prototype.Zc=function(){return this.gf};bb.prototype.toString=function(){return"SafeStyle{"+this.gf+"}"};function db(a){var b=new bb;b.gf=a;return b}var eb=db("");
function fb(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof La?d=Oa(d):gb.test(d)||(Ka("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?db(b):eb}var gb=/^[-.%_!# a-zA-Z0-9]+$/;function hb(){this.Cg="";this.oj=ib}f=hb.prototype;f.bd=!0;f.Zc=function(){return this.Cg};f.kg=!0;f.Ed=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.Cg+"}"};var ib={};function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<kb.length;g++)c=kb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function mb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return mb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var nb=mb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function ob(){this.hc="";this.jj=pb;this.Rh=null}f=ob.prototype;f.kg=!0;f.Ed=function(){return this.Rh};f.bd=!0;f.Zc=function(){return this.hc};f.toString=function(){return"SafeHtml{"+this.hc+"}"};function qb(a){if(a instanceof ob&&a.constructor===ob&&a.jj===pb)return a.hc;Ka("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function rb(a){if(a instanceof ob)return a;var b=null;a.kg&&(b=a.Ed());return sb(xa(a.bd?a.Zc():String(a)),b)}
var tb=/^[a-zA-Z0-9-]+$/,ub=mb("action","cite","data","formaction","href","manifest","poster","src"),vb=mb("embed","iframe","link","object","script","style","template");
function wb(a,b,c){if(!tb.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in vb)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!tb.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,m=a;k=g;if(h instanceof La)h=Oa(h);else if("style"==k.toLowerCase()){if(!ha(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof bb||
(h=fb(h));m=void 0;h instanceof bb&&h.constructor===bb&&h.kj===cb?m=h.gf:(Ka("expected object of type SafeStyle, got '"+h+"'"),m="type_error:SafeStyle");h=m}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in ub)if(h instanceof hb)h instanceof hb&&h.constructor===hb&&h.oj===ib?h=h.Cg:(Ka("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Pa)h instanceof Pa&&h.constructor===
Pa&&h.lj===Qa?h=h.hc:(Ka("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+m+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.bd&&(h=h.Zc());k=k+'="'+xa(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===nb[a.toLowerCase()]?e+=">":(d=xb(c),e+=">"+qb(d)+"</"+a+">",d=d.Ed());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return sb(e,d)}
function xb(a){function b(a){ea(a)?Ta(a,b):(a=rb(a),d+=qb(a),a=a.Ed(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";Ta(arguments,b);return sb(d,c)}var pb={};function sb(a,b){var c=new ob;c.hc=a;c.Rh=b;return c}var zb=sb("",0);var Ab;a:{var Bb=l.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""}function Db(a){return-1!=Ab.indexOf(a)};var Eb=Db("Opera")||Db("OPR"),u=Db("Trident")||Db("MSIE"),Fb=Db("Gecko")&&-1==Ab.toLowerCase().indexOf("webkit")&&!(Db("Trident")||Db("MSIE")),w=-1!=Ab.toLowerCase().indexOf("webkit"),Gb=w&&Db("Mobile"),Hb=Db("Macintosh"),Ib=Db("Android"),Jb=Db("iPhone")&&!Db("iPod")&&!Db("iPad"),Kb=Db("iPad");function Lb(){var a=l.document;return a?a.documentMode:void 0}
var Mb=function(){var a="",b;if(Eb&&l.opera)return a=l.opera.version,p(a)?a():a;Fb?b=/rv\:([^\);]+)(\)|;)/:u?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:w&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Ab))?a[1]:"");return u&&(b=Lb(),b>parseFloat(a))?String(b):a}(),Nb={};
function Ob(a){var b;if(!(b=Nb[a])){b=0;for(var c=va(String(Mb)).split("."),d=va(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",m=/(\d*)(\D*)/g,t=/(\d*)(\D*)/g;do{var r=m.exec(h)||["","",""],x=t.exec(k)||["","",""];if(0==r[0].length&&0==x[0].length)break;b=Ia(0==r[1].length?0:parseInt(r[1],10),0==x[1].length?0:parseInt(x[1],10))||Ia(0==r[2].length,0==x[2].length)||Ia(r[2],x[2])}while(0==b)}b=Nb[a]=0<=b}return b}
var Pb=l.document,Qb=Pb&&u?Lb()||("CSS1Compat"==Pb.compatMode?parseInt(Mb,10):5):void 0;function Rb(a,b){this.width=a;this.height=b}f=Rb.prototype;f.clone=function(){return new Rb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.gi=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=ga(b)?b:a;this.width*=a;this.height*=c;return this};function Sb(a,b){a.innerHTML=qb(b)};var Tb=!u||u&&9<=Qb,Ub=!Fb&&!u||u&&u&&9<=Qb||Fb&&Ob("1.9.1"),Vb=u&&!Ob("9");function Wb(a){a%=360;return 0>360*a?a+360:a};function y(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=y.prototype;f.clone=function(){return new y(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};function Xb(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof y?(this.x+=a.x,this.y+=a.y):(this.x+=a,ga(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.x*=a;this.y*=c;return this};function Yb(a){return a?new Zb($b(a)):ra||(ra=new Zb)}function ac(a,b){jb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in bc?a.setAttribute(bc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function cc(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Rb(a.clientWidth,a.clientHeight)}function dc(a,b,c){return ec(document,arguments)}
function ec(a,b){var c=b[0],d=b[1];if(!Tb&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',xa(d.name),'"');if(d.type){c.push(' type="',xa(d.type),'"');var e={};lb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(n(d)?c.className=d:ea(d)?c.className=d.join(" "):ac(c,d));2<b.length&&fc(a,c,b,2);return c}
function fc(a,b,c,d){function e(c){c&&b.appendChild(n(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ha(g)&&0<g.nodeType?e(g):Ta(gc(g)?Za(g):g,e)}}function hc(a){for(var b;b=a.firstChild;)a.removeChild(b)}function ic(a){var b=z.h;b.parentNode&&b.parentNode.insertBefore(a,b)}function A(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function jc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function $b(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var kc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},lc={IMG:" ",BR:"\n"};function mc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function nc(a){a=a.tabIndex;return ga(a)&&0<=a&&32768>a}
function oc(a){var b=[];pc(a,b,!1);return b.join("")}function pc(a,b,c){if(!(a.nodeName in kc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in lc)b.push(lc[a.nodeName]);else for(a=a.firstChild;a;)pc(a,b,c),a=a.nextSibling}function gc(a){if(a&&"number"==typeof a.length){if(ha(a))return"function"==typeof a.item||"string"==typeof a.item;if(p(a))return"function"==typeof a.item}return!1}
function Zb(a){this.Lb=a||l.document||document}f=Zb.prototype;f.pb=Yb;f.k=function(a){return n(a)?this.Lb.getElementById(a):a};f.K=function(a,b,c){return ec(this.Lb,arguments)};f.createElement=function(a){return this.Lb.createElement(a)};f.createTextNode=function(a){return this.Lb.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){fc($b(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.Bi=hc;f.removeNode=A;f.wc=function(a){return Ub&&void 0!=a.children?a.children:Ua(a.childNodes,function(a){return 1==a.nodeType})};f.contains=jc;f.cc=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!mc(a)||nc(a)):mc(a)&&nc(a))&&u?(a=p(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};u&&Ob(8);var qc={};function rc(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};var sc={},tc,C,uc,vc,wc,xc;
function yc(){var a=D;return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_dress">Dress</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Bird_noWorm">does not have magic wand</span><span id="Bird_direction">direction</span><span id="Bird_noWormTooltip">The condition when Grace has not gotten the magic wand.</span><span id="Bird_directionTooltip">Move in the direction of the given angle: 0 is to the right, 90 is straight up, etc.</span><span id="Bird_positionTooltip">x and y mark Grace\'s position. When x = 0 Grace is near the left edge, when x = 100 it\'s near the right edge. When y = 0 Grace is at the bottom, when y = 100 it\'s at the top.</span></div><div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout &nbsp;<i class="fa fa-sign-out"></i></button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help &nbsp; <i class="fa fa-question"></i></button></div></div><div id="workspace">'+('<xml id="toolbox" style="display: none;"><block type="bird_direction"></block>'+
(2<=a?'<block type="bird_noWorm"></block>'+(4<=a?'<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position"><field name="XY">X</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block>'+(5<=a?'<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position"><field name="XY">Y</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block>'+
(8<=a?'<block type="bird_and"></block>':""):""):""):"")+"</xml>")+'<div id="blockly"></div><div id="leftSide"><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px" style="background-color:rgba(255,255,255,.95)"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+rc()+"</div>")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex; font-size: large; margin: 1em;">'+(3==a?'<h3> Learn If-Else Statements! </h3>Put the blocks together and choose directions for Grace to fly to help Grace reach the magic wand and rescue Ada.<br><img src="bird/instructions.gif" height=146 width=146 style="margin-bottom: -50px">':"")+"</div>"+rc()+'</div><div id="dialogHelp" class="dialogHiddenContent">'+
(1==a?'<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_direction.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Change the direction angle to make Grace get the magic wand and rescue Ada.</td></tr></table>':2==a?'<table><tr><td><img src="common/help.png"></td><td>Use this block to go in one direction if you have the magic wand, or a different direction if you don\'t have the magic wand.</td><td><img src="bird/help_up.png"></td></tr></table>':
3==a?'<table><tr><td><img src="bird/help_up.png"></td><td>Use this block to go in one direction if you have the magic wand, or a different direction if you don\'t have the magic wand.</td><td><img class="help" width="72" height="72" src="maze/bulb.png"></td></tr></table>':5==a?'<table><tr><td><img src="bird/help_up.png"></td><td>Click the icon to modify the \'if\' block.</td><td><img src="common/help.png"></td></tr></table>':6==a?"<table><tr><td><img src=\"bird/help_up.png\"></td><td>This level needs both an 'else if' and an 'else' block.</td><td><img src=\"common/help.png\"></td></tr></table>":
8==a?'<table><tr><td><img src="bird/help_up.png"></td><td>The \'and\' block is true only if both its inputs are true.</td><td><img src="common/help.png"></td></tr></table>':"")+"</div>"+(5==a?'<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Drag an \'else\' block into the \'if\' block.</td></tr></table></div>':"")+"</div>"};/*

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
var zc={},E,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Ic,Jc,Kc,Lc,Mc,Nc;function Oc(a){this.Ci=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Ci[a[b]]=!0}this.reset()}Oc.prototype.reset=function(){this.Pf=Object.create(null);this.Kh=Object.create(null)};Oc.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.Pf)return this.Pf[c];var d=Pc(this,a);return this.Pf[c]=d};
function Pc(a,b){var c;(c=b)?(c=encodeURI(c.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(c[0])&&(c="my_"+c)):c="unnamed";for(var d="";a.Kh[c+d]||c+d in a.Ci;)d=d?d+1:2;c+=d;a.Kh[c]=!0;return c};/*

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
function Qc(){this.md=[]}f=Qc.prototype;f.t=!1;f.rg=Infinity;f.j=function(){this.clear()};f.ud=function(a){this.md.push(a);this.nb()};f.nf=function(a){for(var b=!1,c,d=0;c=this.md[d];d++)if(c==a){this.md.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.nb()};function Rc(a,b){var c=[].concat(a.md);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);E&&(d*=-1);c.sort(function(a,b){var c=a.W(),k=b.W();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.Yb=function(){for(var a=Rc(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].wc());return a};f.clear=function(){for(;this.md.length;)this.md[0].j()};f.Ke=function(){return 0};function Sc(a,b){for(var c=a.Yb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Tc(a){return Infinity==a.rg?Infinity:a.rg-a.Yb().length}f.nb=function(){};/*

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
function Uc(a){this.kd=new Rb(0,25);this.X(a)}f=Uc.prototype;f.g=null;f.aa=!0;f.clone=function(){Ka("There should never be an instance of Field, only its derived classes.")};f.pd=!0;f.n=function(a){this.g||(this.g=a,this.Ka=F("g",{},null),this.pc=F("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.Ka),this.Y=F("text",{"class":"blocklyText"},this.Ka),this.Qb(),a.w().appendChild(this.Ka),this.sg=G(this.Ka,"mouseup",this,this.wg),Wc(this))};
f.j=function(){this.sg&&(H(this.sg),this.sg=null);this.g=null;A(this.Ka);this.pc=this.Y=this.Ka=null};f.Qb=function(){this.pd&&(this.g.Wb&&!I?(Xc(this.Ka,"blocklyEditableText"),Yc(this.Ka,"blocklyNoNEditableText"),this.Ka.style.cursor=this.bh):(Xc(this.Ka,"blocklyNonEditableText"),Yc(this.Ka,"blocklyEditableText"),this.Ka.style.cursor=""))};f.A=function(){return this.aa};f.J=function(a){if(this.aa!=a){this.aa=a;var b=this.w();b&&(b.style.display=a?"block":"none",this.Ud())}};f.w=function(){return this.Ka};
f.Ud=function(){if(this.aa){try{var a=this.Y.getComputedTextLength()}catch(b){a=8*this.Y.textContent.length}this.pc&&this.pc.setAttribute("width",a+10)}else a=0;this.kd.width=a};f.Zh=function(){this.kd.width||this.Ud();return this.kd};f.Ca=function(){return this.Ha};f.X=function(a){null!==a&&a!==this.Ha&&(this.Ha=a,Wc(this),this.g&&this.g.t&&(this.g.C(),this.g.Ja(),this.g.s.nb()))};
function Wc(a){if(a.Y){var b=a.Ha;hc(a.Y);b=b.replace(/\s/g,"\u00a0");E&&b&&(b+="\u200f");b||(b="\u00a0");a.Y.appendChild(document.createTextNode(b));a.kd.width=0}}f.ac=function(){return this.Ca()};f.Za=function(a){this.X(a)};f.wg=function(a){if(!Jb&&!Kb||0===a.layerX||0===a.layerY)Zc(a)||2!=$c&&this.g.Wb&&!I&&this.rf()};f.B=function(){};/*

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
function ad(){for(var a=z.Yb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].Zl;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(bd);b.sort(bd);return[c,b]}function bd(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function cd(a,b,c,d){function e(e,g){for(var m=0;m<e.length;m++){var t=dd(d,g);ed(t,"NAME").Za(e[m][0]);for(var r=[],x=0;x<e[m][1].length;x++)r[x]="ARG"+x;t.pm(e[m][1],r);t.Na();a.push(t);b.push(2*c)}}if(J.procedures_defnoreturn){var g=dd(d,"procedures_defnoreturn");g.Na();a.push(g);b.push(2*c)}J.procedures_defreturn&&(g=dd(d,"procedures_defreturn"),g.Na(),a.push(g),b.push(2*c));J.procedures_ifreturn&&(g=dd(d,"procedures_ifreturn"),g.Na(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=ad();
e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function fd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=fd.prototype;f.Ke=function(){return this.right-this.left};f.clone=function(){return new fd(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof fd?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ha(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof y?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,ga(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function gd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=gd.prototype;f.clone=function(){return new gd(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof gd?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.Zh=function(){return new Rb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof y?(this.left+=a.x,this.top+=a.y):(this.left+=a,ga(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=ga(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function hd(a,b){var c=$b(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function id(a,b){return hd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function jd(){var a=document,b=a.body,a=a.documentElement;return new y(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function kd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}u&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ld(a){if(u&&!(u&&8<=Qb))return a.offsetParent;var b=$b(a),c=id(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=id(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function md(a){var b,c=$b(a),d=id(a,"position"),e=Fb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new y(0,0),h;b=c?$b(c):document;(h=!u||u&&9<=Qb)||(h="CSS1Compat"==Yb(b).Lb.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=kd(a),c=Yb(c).Lb,a=w||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=u&&Ob("10")&&c.pageYOffset!=a.scrollTop?new y(a.scrollLeft,
a.scrollTop):new y(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(w&&"fixed"==id(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Eb||w&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=ld(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,Eb&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function nd(a){var b=od;if("none"!=id(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function od(a){var b=a.offsetWidth,c=a.offsetHeight,d=w&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=kd(a),new Rb(a.right-a.left,a.bottom-a.top)):new Rb(b,c)}
function pd(a){var b=md(a);a=nd(a);return new gd(b.x,b.y,a.width,a.height)}function qd(a,b){a.style.display=b?"":"none"}var rd=Fb?"MozUserSelect":w?"WebkitUserSelect":null;function sd(a,b,c){c=c?null:a.getElementsByTagName("*");if(rd){if(b=b?"none":"",a.style[rd]=b,c){a=0;for(var d;d=c[a];a++)d.style[rd]=b}}else if(u||Eb)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var td={thin:2,medium:4,thick:6};
function ud(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in td)d=td[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function vd(a){if(u&&!(u&&9<=Qb)){var b=ud(a,"borderLeft"),c=ud(a,"borderRight"),d=ud(a,"borderTop");a=ud(a,"borderBottom");return new fd(d,c,a,b)}b=hd(a,"borderLeftWidth");c=hd(a,"borderRightWidth");d=hd(a,"borderTopWidth");a=hd(a,"borderBottomWidth");return new fd(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var wd="closure_listenable_"+(1E6*Math.random()|0),xd=0;function yd(a,b,c,d,e){this.Bc=a;this.hf=null;this.src=b;this.type=c;this.ue=!!d;this.Me=e;this.key=++xd;this.hd=this.te=!1}function zd(a){a.hd=!0;a.Bc=null;a.hf=null;a.src=null;a.Me=null};function Ad(a){this.src=a;this.Fa={};this.ee=0}Ad.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.Fa[g];a||(a=this.Fa[g]=[],this.ee++);var h=Bd(a,b,d,e);-1<h?(b=a[h],c||(b.te=!1)):(b=new yd(b,this.src,g,!!d,e),b.te=c,a.push(b));return b};Ad.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Fa))return!1;var e=this.Fa[a];b=Bd(e,b,c,d);return-1<b?(zd(e[b]),Ra.splice.call(e,b,1),0==e.length&&(delete this.Fa[a],this.ee--),!0):!1};
function Cd(a,b){var c=b.type;if(!(c in a.Fa))return!1;var d=Ya(a.Fa[c],b);d&&(zd(b),0==a.Fa[c].length&&(delete a.Fa[c],a.ee--));return d}Ad.prototype.lf=function(a){a=a&&a.toString();var b=0,c;for(c in this.Fa)if(!a||c==a){for(var d=this.Fa[c],e=0;e<d.length;e++)++b,zd(d[e]);delete this.Fa[c];this.ee--}return b};Ad.prototype.Fd=function(a,b,c,d){a=this.Fa[a.toString()];var e=-1;a&&(e=Bd(a,b,c,d));return-1<e?a[e]:null};
function Bd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.hd&&g.Bc==b&&g.ue==!!c&&g.Me==d)return e}return-1};var Dd=!u||u&&9<=Qb,Ed=!u||u&&9<=Qb,Fd=u&&!Ob("9");!w||Ob("528");Fb&&Ob("1.9b")||u&&Ob("8")||Eb&&Ob("9.5")||w&&Ob("528");Fb&&!Ob("8")||u&&Ob("9");var Gd="ontouchstart"in l||!!(l.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!l.navigator||!l.navigator.msMaxTouchPoints);function Hd(){0!=Id&&(Jd[ia(this)]=this);this.yd=this.yd;this.bf=this.bf}var Id=0,Jd={};Hd.prototype.yd=!1;Hd.prototype.j=function(){if(!this.yd&&(this.yd=!0,this.ga(),0!=Id)){var a=ia(this);delete Jd[a]}};Hd.prototype.ga=function(){if(this.bf)for(;this.bf.length;)this.bf.shift()()};function Kd(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Fc=!1;this.Ei=!0}Kd.prototype.ga=function(){};Kd.prototype.j=function(){};Kd.prototype.stopPropagation=function(){this.Fc=!0};Kd.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ei=!1};function Ld(a){Ld[" "](a);return a}Ld[" "]=ba;function Md(a,b){Kd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.yg=!1;this.Ba=null;a&&this.n(a,b)}q(Md,Kd);var Nd=[1,4,2];f=Md.prototype;
f.n=function(a,b){this.Ba=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Fb){var e;a:{try{Ld(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.Xh,set:this.al},offsetY:{configurable:!0,enumerable:!0,get:this.Yh,set:this.bl}}):(this.offsetX=this.Xh(),
this.offsetY=this.Yh());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.yg=Hb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Od(a){return Dd?0==a.Ba.button:"click"==a.type?!0:!!(a.Ba.button&Nd[0])}f.stopPropagation=function(){Md.i.stopPropagation.call(this);this.Ba.stopPropagation?this.Ba.stopPropagation():this.Ba.cancelBubble=!0};f.preventDefault=function(){Md.i.preventDefault.call(this);var a=this.Ba;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Fd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.ga=function(){};
f.Xh=function(){return w||void 0!==this.Ba.offsetX?this.Ba.offsetX:this.Ba.layerX};f.al=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.Yh=function(){return w||void 0!==this.Ba.offsetY?this.Ba.offsetY:this.Ba.layerY};f.bl=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Pd="closure_lm_"+(1E6*Math.random()|0),Qd={},Rd=0;function Sd(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)Sd(a,b[g],c,d,e);return null}c=Td(c);if(a&&a[wd])a=a.I(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Ud(a);h||(a[Pd]=h=new Ad(a));c=h.add(b,c,!1,d,e);c.hf||(d=Vd(),c.hf=d,d.src=a,d.Bc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Wd(b.toString()),d),Rd++);a=c}return a}
function Vd(){var a=Xd,b=Ed?function(c){return a.call(b.src,b.Bc,c)}:function(c){c=a.call(b.src,b.Bc,c);if(!c)return c};return b}function Yd(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)Yd(a,b[g],c,d,e);else c=Td(c),a&&a[wd]?a.hb(b,c,d,e):a&&(a=Ud(a))&&(b=a.Fd(b,c,!!d,e))&&Zd(b)}
function Zd(a){if(ga(a)||!a||a.hd)return!1;var b=a.src;if(b&&b[wd])return Cd(b.Xb,a);var c=a.type,d=a.hf;b.removeEventListener?b.removeEventListener(c,d,a.ue):b.detachEvent&&b.detachEvent(Wd(c),d);Rd--;(c=Ud(b))?(Cd(c,a),0==c.ee&&(c.src=null,b[Pd]=null)):zd(a);return!0}function Wd(a){return a in Qd?Qd[a]:Qd[a]="on"+a}function $d(a,b,c,d){var e=!0;if(a=Ud(a))if(b=a.Fa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.ue==c&&!g.hd&&(g=ae(g,d),e=e&&!1!==g)}return e}
function ae(a,b){var c=a.Bc,d=a.Me||a.src;a.te&&Zd(a);return c.call(d,b)}
function Xd(a,b){if(a.hd)return!0;if(!Ed){var c=b||aa("window.event"),d=new Md(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.Fc&&0<=k;k--){d.currentTarget=c[k];var m=$d(c[k],g,!0,d),e=e&&m}for(k=0;!d.Fc&&k<c.length;k++)d.currentTarget=c[k],m=$d(c[k],g,!1,d),e=e&&m}return e}return ae(a,new Md(b,
this))}function Ud(a){a=a[Pd];return a instanceof Ad?a:null}var be="__closure_events_fn_"+(1E9*Math.random()>>>0);function Td(a){if(p(a))return a;a[be]||(a[be]=function(b){return a.handleEvent(b)});return a[be]};function ce(a){Hd.call(this);this.ci=a;this.Ve={}}q(ce,Hd);var de=[];f=ce.prototype;f.I=function(a,b,c,d){ea(b)||(b&&(de[0]=b.toString()),b=de);for(var e=0;e<b.length;e++){var g=Sd(a,b[e],c||this.handleEvent,d||!1,this.ci||this);if(!g)break;this.Ve[g.key]=g}return this};
f.hb=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.hb(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.ci||this,c=Td(c),d=!!d,b=a&&a[wd]?a.Fd(b,c,d,e):a?(a=Ud(a))?a.Fd(b,c,d,e):null:null,b&&(Zd(b),delete this.Ve[b.key]);return this};f.lf=function(){jb(this.Ve,Zd);this.Ve={}};f.ga=function(){ce.i.ga.call(this);this.lf()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function ee(){}ca(ee);ee.prototype.Dk=0;function fe(){Hd.call(this);this.Xb=new Ad(this);this.pj=this;this.xg=null}q(fe,Hd);fe.prototype[wd]=!0;f=fe.prototype;f.Ie=function(){return this.xg};f.Lg=function(a){this.xg=a};f.addEventListener=function(a,b,c,d){Sd(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Yd(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.Ie();if(c)for(b=[];c;c=c.Ie())b.push(c);var c=this.pj,d=a.type||a;if(n(a))a=new Kd(a,c);else if(a instanceof Kd)a.target=a.target||c;else{var e=a;a=new Kd(d,c);lb(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.Fc&&0<=h;h--)g=a.currentTarget=b[h],e=ge(g,d,!0,a)&&e;a.Fc||(g=a.currentTarget=c,e=ge(g,d,!0,a)&&e,a.Fc||(e=ge(g,d,!1,a)&&e));if(b)for(h=0;!a.Fc&&h<b.length;h++)g=a.currentTarget=b[h],e=ge(g,d,!1,a)&&e;return e};
f.ga=function(){fe.i.ga.call(this);this.Xb&&this.Xb.lf(void 0);this.xg=null};f.I=function(a,b,c,d){return this.Xb.add(String(a),b,!1,c,d)};f.hb=function(a,b,c,d){return this.Xb.remove(String(a),b,c,d)};function ge(a,b,c,d){b=a.Xb.Fa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.hd&&h.ue==c){var k=h.Bc,m=h.Me||h.src;h.te&&Cd(a.Xb,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.Ei}f.Fd=function(a,b,c,d){return this.Xb.Fd(String(a),b,c,d)};function he(a){fe.call(this);this.ye=a||Yb();this.qf=ie;this.Pe=null;this.H=!1;this.v=null;this.bc=void 0;this.Tb=this.ba=this.xa=this.Ze=null;this.ml=!1}q(he,fe);he.prototype.nk=ee.Zb();var ie=null;
function je(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function ke(a){return a.Pe||(a.Pe=":"+(a.nk.Dk++).toString(36))}f=he.prototype;f.k=function(){return this.v};function le(a){a.bc||(a.bc=new ce(a));return a.bc}
f.Ga=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.xa&&this.Pe&&me(this.xa,this.Pe)&&this.xa!=a)throw Error("Unable to set parent component");this.xa=a;he.i.Lg.call(this,a)};f.getParent=function(){return this.xa};f.Lg=function(a){if(this.xa&&this.xa!=a)throw Error("Method not supported");he.i.Lg.call(this,a)};f.pb=function(){return this.ye};f.K=function(){this.v=this.ye.createElement("div")};f.C=function(a){this.Ud(a)};
f.Ud=function(a,b){if(this.H)throw Error("Component already rendered");this.v||this.K();a?a.insertBefore(this.v,b||null):this.ye.Lb.body.appendChild(this.v);this.xa&&!this.xa.H||this.pa()};f.pa=function(){this.H=!0;ne(this,function(a){!a.H&&a.k()&&a.pa()})};f.eb=function(){ne(this,function(a){a.H&&a.eb()});this.bc&&this.bc.lf();this.H=!1};
f.ga=function(){this.H&&this.eb();this.bc&&(this.bc.j(),delete this.bc);ne(this,function(a){a.j()});!this.ml&&this.v&&A(this.v);this.xa=this.Ze=this.v=this.Tb=this.ba=null;he.i.ga.call(this)};f.pe=function(a,b){this.Qc(a,oe(this),b)};
f.Qc=function(a,b,c){if(a.H&&(c||!this.H))throw Error("Component already rendered");if(0>b||b>oe(this))throw Error("Child component index out of bounds");this.Tb&&this.ba||(this.Tb={},this.ba=[]);if(a.getParent()==this){var d=ke(a);this.Tb[d]=a;Ya(this.ba,a)}else{var d=this.Tb,e=ke(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.Ga(this);$a(this.ba,b,0,a);a.H&&this.H&&a.getParent()==this?(c=this.ob(),b=c.childNodes[b]||null,b!=a.k()&&c.insertBefore(a.k(),b)):c?(this.v||
this.K(),b=K(this,b+1),a.Ud(this.ob(),b?b.v:null)):this.H&&!a.H&&a.v&&a.v.parentNode&&1==a.v.parentNode.nodeType&&a.pa()};f.ob=function(){return this.v};function pe(a){null==a.qf&&(a.qf="rtl"==id(a.H?a.v:a.ye.Lb.body,"direction"));return a.qf}f.Yd=function(a){if(this.H)throw Error("Component already rendered");this.qf=a};function qe(a){return!!a.ba&&0!=a.ba.length}function oe(a){return a.ba?a.ba.length:0}function me(a,b){var c;a.Tb&&b?(c=a.Tb,c=(b in c?c[b]:void 0)||null):c=null;return c}
function K(a,b){return a.ba?a.ba[b]||null:null}function ne(a,b,c){a.ba&&Ta(a.ba,b,c)}function re(a,b){return a.ba&&b?Sa(a.ba,b):-1}f.removeChild=function(a,b){if(a){var c=n(a)?a:ke(a);a=me(this,c);if(c&&a){var d=this.Tb;c in d&&delete d[c];Ya(this.ba,a);b&&(a.eb(),a.v&&A(a.v));a.Ga(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Bi=function(a){for(var b=[];qe(this);)b.push(this.removeChild(K(this,0),a));return b};function se(a){if(a.classList)return a.classList;a=a.className;return n(a)&&a.match(/\S+/g)||[]}function te(a,b){return a.classList?a.classList.contains(b):Xa(se(a),b)}function ue(a,b){a.classList?a.classList.add(b):te(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ve(a,b){if(a.classList)Ta(b,function(b){ue(a,b)});else{var c={};Ta(se(a),function(a){c[a]=!0});Ta(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function we(a,b){a.classList?a.classList.remove(b):te(a,b)&&(a.className=Ua(se(a),function(a){return a!=b}).join(" "))}function xe(a,b){a.classList?Ta(b,function(b){we(a,b)}):a.className=Ua(se(a),function(a){return!Xa(b,a)}).join(" ")};function ye(a,b){if(!a)throw Error("Invalid class name "+a);if(!p(b))throw Error("Invalid decorator function "+b);}var ze={};var Ae;function Be(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function Ce(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(Ae||(Ae={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=Ae,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function De(){}var Ee;ca(De);var Fe={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=De.prototype;f.Ae=function(){};f.K=function(a){return a.pb().K("div",this.De(a).join(" "),a.Kb)};f.ob=function(a){return a};f.zd=function(a,b,c){if(a=a.k?a.k():a){var d=[b];u&&!Ob("7")&&(d=Ge(se(a),b),d.push(b));(c?ve:xe)(a,d)}};f.Nd=function(a){pe(a)&&this.Yd(a.k(),!0);a.isEnabled()&&this.Kc(a,a.A())};
function He(a,b,c){if(a=c||a.Ae())c=b.getAttribute("role")||null,a!=c&&Be(b,a)}function Ie(a,b){a.A()||Ce(b,"hidden",!a.A());a.isEnabled()||Je(b,1,!a.isEnabled());a.da&8&&Je(b,8,a.Se());a.da&16&&Je(b,16,!!(a.ia&16));a.da&64&&Je(b,64,a.cd())}f.Ig=function(a,b){sd(a,!b,!u&&!Eb)};f.Yd=function(a,b){this.zd(a,this.va()+"-rtl",b)};f.cc=function(a){var b;return a.da&32&&(b=a.la())?mc(b)&&nc(b):!1};
f.Kc=function(a,b){var c;if(a.da&32&&(c=a.la())){if(!b&&a.ia&32){try{c.blur()}catch(d){}a.ia&32&&a.Jd(null)}(mc(c)&&nc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.J=function(a,b){qd(a,b);a&&Ce(a,"hidden",!b)};f.vb=function(a,b,c){var d=a.k();if(d){var e=this.Ce(b);e&&this.zd(a,e,c);Je(d,b,c)}};
function Je(a,b,c){Ee||(Ee={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=Ee[b];var d=a.getAttribute("role")||null;d&&(d=Fe[d]||b,b="checked"==b||"selected"==b?d:b);b&&Ce(a,b,c)}f.la=function(a){return a.k()};f.va=function(){return"goog-control"};f.De=function(a){var b=this.va(),c=[b],d=this.va();d!=b&&c.push(d);b=a.ia;for(d=[];b;){var e=b&-b;d.push(this.Ce(e));b&=~e}c.push.apply(c,d);(a=a.zb)&&c.push.apply(c,a);u&&!Ob("7")&&c.push.apply(c,Ge(c));return c};
function Ge(a,b){var c=[];b&&(a=a.concat([b]));Ta([],function(d){!Wa(d,oa(Xa,a))||b&&!Xa(d,b)||c.push(d.join("_"))});return c}f.Ce=function(a){if(!this.vh){var b=this.va();b.replace(/\xa0|\s/g," ");this.vh={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.vh[a]};function Ke(a,b,c,d,e){if(!(u||w&&Ob("525")))return!0;if(Hb&&e)return Le(a);if(e&&!d)return!1;ga(b)&&(b=Me(b));if(!c&&(17==b||18==b||Hb&&91==b))return!1;if(w&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(u&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!w}return Le(a)}
function Le(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||w&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Me(a){if(Fb)a=Ne(a);else if(Hb&&w)a:switch(a){case 93:a=91;break a}return a}
function Ne(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Oe(a,b){fe.call(this);a&&Pe(this,a,b)}q(Oe,fe);f=Oe.prototype;f.v=null;f.Te=null;f.ng=null;f.Ue=null;f.Va=-1;f.ec=-1;f.Df=!1;
var Qe={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Re={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Se=u||w&&Ob("525"),Te=Hb&&Fb;f=Oe.prototype;
f.gk=function(a){w&&(17==this.Va&&!a.ctrlKey||18==this.Va&&!a.altKey||Hb&&91==this.Va&&!a.metaKey)&&(this.ec=this.Va=-1);-1==this.Va&&(a.ctrlKey&&17!=a.keyCode?this.Va=17:a.altKey&&18!=a.keyCode?this.Va=18:a.metaKey&&91!=a.keyCode&&(this.Va=91));Se&&!Ke(a.keyCode,this.Va,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.ec=Me(a.keyCode),Te&&(this.Df=a.altKey))};f.hk=function(a){this.ec=this.Va=-1;this.Df=a.altKey};
f.handleEvent=function(a){var b=a.Ba,c,d,e=b.altKey;u&&"keypress"==a.type?(c=this.ec,d=13!=c&&27!=c?b.keyCode:0):w&&"keypress"==a.type?(c=this.ec,d=0<=b.charCode&&63232>b.charCode&&Le(c)?b.charCode:0):Eb?(c=this.ec,d=Le(c)?b.keyCode:0):(c=b.keyCode||this.ec,d=b.charCode||0,Te&&(e=this.Df),Hb&&63==d&&224==c&&(c=191));var g=c=Me(c),h=b.keyIdentifier;c?63232<=c&&c in Qe?g=Qe[c]:25==c&&a.shiftKey&&(g=9):h&&h in Re&&(g=Re[h]);a=g==this.Va;this.Va=g;b=new Ue(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.k=function(){return this.v};function Pe(a,b,c){a.Ue&&a.detach();a.v=b;a.Te=Sd(a.v,"keypress",a,c);a.ng=Sd(a.v,"keydown",a.gk,c,a);a.Ue=Sd(a.v,"keyup",a.hk,c,a)}f.detach=function(){this.Te&&(Zd(this.Te),Zd(this.ng),Zd(this.Ue),this.Ue=this.ng=this.Te=null);this.v=null;this.ec=this.Va=-1};f.ga=function(){Oe.i.ga.call(this);this.detach()};function Ue(a,b,c,d){Md.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}q(Ue,Md);function L(a,b,c){he.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ia(b);if(d=ze[d])break;b=b.i?b.i.constructor:null}b=d?p(d.Zb)?d.Zb():new d:null}this.N=b;this.$k(void 0!==a?a:null)}q(L,he);f=L.prototype;f.Kb=null;f.ia=0;f.da=39;f.wj=255;f.ae=0;f.aa=!0;f.zb=null;f.Ld=!0;f.Cf=!1;f.Rk=null;f.la=function(){return this.N.la(this)};f.He=function(){return this.wa||(this.wa=new Oe)};
f.zd=function(a,b){b?a&&(this.zb?Xa(this.zb,a)||this.zb.push(a):this.zb=[a],this.N.zd(this,a,!0)):a&&this.zb&&Ya(this.zb,a)&&(0==this.zb.length&&(this.zb=null),this.N.zd(this,a,!1))};f.K=function(){var a=this.N.K(this);this.v=a;He(this.N,a,this.Je());this.Cf||this.N.Ig(a,!1);this.A()||this.N.J(a,!1)};f.Je=function(){return this.Rk};f.ob=function(){return this.N.ob(this.k())};
f.pa=function(){L.i.pa.call(this);Ie(this,this.v);this.N.Nd(this);if(this.da&-2&&(this.Ld&&Ve(this,!0),this.da&32)){var a=this.la();if(a){var b=this.He();Pe(b,a);le(this).I(b,"key",this.qb).I(a,"focus",this.Le).I(a,"blur",this.Jd)}}};
function Ve(a,b){var c=le(a),d=a.k();b?(c.I(d,"mouseover",a.hg).I(d,"mousedown",a.$c).I(d,"mouseup",a.Md).I(d,"mouseout",a.gg),a.Kd!=ba&&c.I(d,"contextmenu",a.Kd),u&&c.I(d,"dblclick",a.ai)):(c.hb(d,"mouseover",a.hg).hb(d,"mousedown",a.$c).hb(d,"mouseup",a.Md).hb(d,"mouseout",a.gg),a.Kd!=ba&&c.hb(d,"contextmenu",a.Kd),u&&c.hb(d,"dblclick",a.ai))}f.eb=function(){L.i.eb.call(this);this.wa&&this.wa.detach();this.A()&&this.isEnabled()&&this.N.Kc(this,!1)};
f.ga=function(){L.i.ga.call(this);this.wa&&(this.wa.j(),delete this.wa);delete this.N;this.zb=this.Kb=null};f.$k=function(a){this.Kb=a};f.ag=function(){var a=this.Kb;if(!a)return"";if(!n(a))if(ea(a))a=Va(a,oc).join("");else{if(Vb&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];pc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Vb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return ua(a)};
f.Yd=function(a){L.i.Yd.call(this,a);var b=this.k();b&&this.N.Yd(b,a)};f.Ig=function(a){this.Cf=a;var b=this.k();b&&this.N.Ig(b,a)};f.A=function(){return this.aa};f.J=function(a,b){if(b||this.aa!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.k();c&&this.N.J(c,a);this.isEnabled()&&this.N.Kc(this,a);this.aa=a;return!0}return!1};f.isEnabled=function(){return!(this.ia&1)};
f.Xd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!We(this,1,!a)||(a||(this.setActive(!1),this.ub(!1)),this.A()&&this.N.Kc(this,a),this.vb(1,!a,!0))};f.ub=function(a){We(this,2,a)&&this.vb(2,a)};f.setActive=function(a){We(this,4,a)&&this.vb(4,a)};f.Se=function(){return!!(this.ia&8)};f.cl=function(){We(this,8,!0)&&this.vb(8,!0)};function Xe(a,b){We(a,16,b)&&a.vb(16,b)}f.cd=function(){return!!(this.ia&64)};function Ye(a,b){We(a,64,b)&&a.vb(64,b)}
f.vb=function(a,b,c){c||1!=a?this.da&a&&b!=!!(this.ia&a)&&(this.N.vb(this,a,b),this.ia=b?this.ia|a:this.ia&~a):this.Xd(!b)};f.Ya=function(a,b){if(this.H&&this.ia&a&&!b)throw Error("Component already rendered");!b&&this.ia&a&&this.vb(a,!1);this.da=b?this.da|a:this.da&~a};function Ze(a,b){return!!(a.wj&b)&&!!(a.da&b)}function We(a,b,c){return!!(a.da&b)&&!!(a.ia&b)!=c&&(!(a.ae&b)||a.dispatchEvent(je(b,c)))&&!a.yd}
f.hg=function(a){!$e(a,this.k())&&this.dispatchEvent("enter")&&this.isEnabled()&&Ze(this,2)&&this.ub(!0)};f.gg=function(a){!$e(a,this.k())&&this.dispatchEvent("leave")&&(Ze(this,4)&&this.setActive(!1),Ze(this,2)&&this.ub(!1))};f.Kd=ba;function $e(a,b){return!!a.relatedTarget&&jc(b,a.relatedTarget)}f.$c=function(a){this.isEnabled()&&(Ze(this,2)&&this.ub(!0),!Od(a)||w&&Hb&&a.ctrlKey||(Ze(this,4)&&this.setActive(!0),this.N.cc(this)&&this.la().focus()));this.Cf||!Od(a)||w&&Hb&&a.ctrlKey||a.preventDefault()};
f.Md=function(a){this.isEnabled()&&(Ze(this,2)&&this.ub(!0),this.ia&4&&this.Sd(a)&&Ze(this,4)&&this.setActive(!1))};f.ai=function(a){this.isEnabled()&&this.Sd(a)};f.Sd=function(a){Ze(this,16)&&Xe(this,!(this.ia&16));Ze(this,8)&&this.cl();Ze(this,64)&&Ye(this,!this.cd());var b=new Kd("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.yg=a.yg);return this.dispatchEvent(b)};f.Le=function(){Ze(this,32)&&We(this,32,!0)&&this.vb(32,!0)};
f.Jd=function(){Ze(this,4)&&this.setActive(!1);Ze(this,32)&&We(this,32,!1)&&this.vb(32,!1)};f.qb=function(a){return this.A()&&this.isEnabled()&&this.xc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.xc=function(a){return 13==a.keyCode&&this.Sd(a)};if(!p(L))throw Error("Invalid component class "+L);if(!p(De))throw Error("Invalid renderer class "+De);var af=ia(L);ze[af]=De;ye("goog-control",function(){return new L(null)});function bf(){this.wh=[]}q(bf,De);ca(bf);function cf(a,b){var c=a.wh[b];if(!c){switch(b){case 0:c=a.va()+"-highlight";break;case 1:c=a.va()+"-checkbox";break;case 2:c=a.va()+"-content"}a.wh[b]=c}return c}f=bf.prototype;f.Ae=function(){return"menuitem"};f.K=function(a){var b=a.pb().K("div",this.De(a).join(" "),df(this,a.Kb,a.pb()));ef(this,a,b,!!(a.da&8)||!!(a.da&16));return b};f.ob=function(a){return a&&a.firstChild};function df(a,b,c){a=cf(a,2);return c.K("div",a,b)}
f.Ki=function(a,b,c){a&&b&&ef(this,a,b,c)};f.Jg=function(a,b,c){a&&b&&ef(this,a,b,c)};function ef(a,b,c,d){He(a,c,b.Je());Ie(b,c);var e;if(e=a.ob(c)){e=e.firstChild;var g=cf(a,1);e=!!e&&ha(e)&&1==e.nodeType&&te(e,g)}else e=!1;d!=e&&(d?ue(c,"goog-option"):we(c,"goog-option"),c=a.ob(c),d?(a=cf(a,1),c.insertBefore(b.pb().K("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.Ce=function(a){switch(a){case 2:return cf(this,0);case 16:case 8:return"goog-option-selected";default:return bf.i.Ce.call(this,a)}};f.va=function(){return"goog-menuitem"};function ff(a,b,c,d){L.call(this,a,d||bf.Zb(),c);this.Za(b)}q(ff,L);f=ff.prototype;f.ac=function(){var a=this.Ze;return null!=a?a:this.ag()};f.Za=function(a){this.Ze=a};f.Ya=function(a,b){ff.i.Ya.call(this,a,b);switch(a){case 8:this.ia&16&&!b&&Xe(this,!1);var c=this.k();c&&this.N.Ki(this,c,b);break;case 16:(c=this.k())&&this.N.Jg(this,c,b)}};f.Ki=function(a){this.Ya(8,a)};f.Jg=function(a){this.Ya(16,a)};
f.ag=function(){var a=this.Kb;return ea(a)?(a=Va(a,function(a){return ha(a)&&1==a.nodeType&&(te(a,"goog-menuitem-accel")||te(a,"goog-menuitem-mnemonic-separator"))?"":oc(a)}).join(""),ua(a)):ff.i.ag.call(this)};f.Md=function(a){var b=this.getParent();if(b){var c=b.ui;b.ui=null;if(b=c&&ga(a.clientX))b=new y(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}ff.i.Md.call(this,a)};f.xc=function(a){return a.keyCode==this.mi&&this.Sd(a)?!0:ff.i.xc.call(this,a)};f.$j=function(){return this.mi};
ye("goog-menuitem",function(){return new ff(null)});ff.prototype.Je=function(){return this.da&16?"menuitemcheckbox":this.da&8?"menuitemradio":ff.i.Je.call(this)};ff.prototype.getParent=function(){return L.prototype.getParent.call(this)};ff.prototype.Ie=function(){return L.prototype.Ie.call(this)};function gf(a){this.ph=a}ca(gf);f=gf.prototype;f.Ae=function(){return this.ph};function hf(a,b){a&&(a.tabIndex=b?0:-1)}f.K=function(a){return a.pb().K("div",this.De(a).join(" "))};f.ob=function(a){return a};f.Nd=function(a){a=a.k();sd(a,!0,Fb);u&&(a.hideFocus=!0);var b=this.Ae();b&&Be(a,b)};f.la=function(a){return a.k()};f.va=function(){return"goog-container"};f.De=function(a){var b=this.va(),c=[b,a.gd==jf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function kf(){}q(kf,De);ca(kf);kf.prototype.K=function(a){return a.pb().K("div",this.va())};kf.prototype.va=function(){return"goog-menuseparator"};function lf(a,b){L.call(this,null,a||kf.Zb(),b);this.Ya(1,!1);this.Ya(2,!1);this.Ya(4,!1);this.Ya(32,!1);this.ia=1}q(lf,L);lf.prototype.pa=function(){lf.i.pa.call(this);var a=this.k();Be(a,"separator")};ye("goog-menuseparator",function(){return new lf});function mf(a){this.ph=a||"menu"}q(mf,gf);ca(mf);mf.prototype.va=function(){return"goog-menu"};mf.prototype.Nd=function(a){mf.i.Nd.call(this,a);a=a.k();Ce(a,"haspopup","true")};ye("goog-menuseparator",function(){return new lf});function nf(a,b,c){he.call(this,c);this.N=b||gf.Zb();this.gd=a||of}q(nf,he);var jf="horizontal",of="vertical";f=nf.prototype;f.og=null;f.wa=null;f.N=null;f.gd=null;f.aa=!0;f.tc=!0;f.Zf=!0;f.T=-1;f.ha=null;f.fd=!1;f.rj=!1;f.Pk=!0;f.Ib=null;f.la=function(){return this.og||this.N.la(this)};f.He=function(){return this.wa||(this.wa=new Oe(this.la()))};f.K=function(){this.v=this.N.K(this)};f.ob=function(){return this.N.ob(this.k())};
f.pa=function(){nf.i.pa.call(this);ne(this,function(a){a.H&&pf(this,a)},this);var a=this.k();this.N.Nd(this);this.J(this.aa,!0);le(this).I(this,"enter",this.eg).I(this,"highlight",this.fk).I(this,"unhighlight",this.kk).I(this,"open",this.ik).I(this,"close",this.ck).I(a,"mousedown",this.$c).I($b(a),"mouseup",this.dk).I(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.bk);this.cc()&&qf(this,!0)};
function qf(a,b){var c=le(a),d=a.la();b?c.I(d,"focus",a.Le).I(d,"blur",a.Jd).I(a.He(),"key",a.qb):c.hb(d,"focus",a.Le).hb(d,"blur",a.Jd).hb(a.He(),"key",a.qb)}f.eb=function(){this.jd(-1);this.ha&&Ye(this.ha,!1);this.fd=!1;nf.i.eb.call(this)};f.ga=function(){nf.i.ga.call(this);this.wa&&(this.wa.j(),this.wa=null);this.N=this.ha=this.Ib=this.og=null};f.eg=function(){return!0};
f.fk=function(a){var b=re(this,a.target);if(-1<b&&b!=this.T){var c=K(this,this.T);c&&c.ub(!1);this.T=b;c=K(this,this.T);this.fd&&c.setActive(!0);this.Pk&&this.ha&&c!=this.ha&&(c.da&64?Ye(c,!0):Ye(this.ha,!1))}b=this.k();null!=a.target.k()&&Ce(b,"activedescendant",a.target.k().id)};f.kk=function(a){a.target==K(this,this.T)&&(this.T=-1);this.k().removeAttribute("aria-activedescendant")};f.ik=function(a){(a=a.target)&&a!=this.ha&&a.getParent()==this&&(this.ha&&Ye(this.ha,!1),this.ha=a)};
f.ck=function(a){a.target==this.ha&&(this.ha=null)};f.$c=function(a){this.tc&&(this.fd=!0);var b=this.la();b&&mc(b)&&nc(b)?b.focus():a.preventDefault()};f.dk=function(){this.fd=!1};f.bk=function(a){var b=rf(this,a.target);if(b)switch(a.type){case "mousedown":b.$c(a);break;case "mouseup":b.Md(a);break;case "mouseover":b.hg(a);break;case "mouseout":b.gg(a);break;case "contextmenu":b.Kd(a)}};
function rf(a,b){if(a.Ib)for(var c=a.k();b&&b!==c;){var d=b.id;if(d in a.Ib)return a.Ib[d];b=b.parentNode}return null}f.Le=function(){};f.Jd=function(){this.jd(-1);this.fd=!1;this.ha&&Ye(this.ha,!1)};f.qb=function(a){return this.isEnabled()&&this.A()&&(0!=oe(this)||this.og)&&this.xc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.xc=function(a){var b=K(this,this.T);if(b&&"function"==typeof b.qb&&b.qb(a)||this.ha&&this.ha!=b&&"function"==typeof this.ha.qb&&this.ha.qb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.cc())this.la().blur();else return!1;break;case 36:sf(this);break;case 35:tf(this);break;case 38:if(this.gd==of)uf(this);else return!1;break;case 37:if(this.gd==jf)pe(this)?vf(this):uf(this);else return!1;break;case 40:if(this.gd==of)vf(this);else return!1;break;
case 39:if(this.gd==jf)pe(this)?uf(this):vf(this);else return!1;break;default:return!1}return!0};function pf(a,b){var c=b.k(),c=c.id||(c.id=ke(b));a.Ib||(a.Ib={});a.Ib[c]=b}f.pe=function(a,b){nf.i.pe.call(this,a,b)};
f.Qc=function(a,b,c){a.ae|=2;a.ae|=64;!this.cc()&&this.rj||a.Ya(32,!1);a.H&&0!=a.Ld&&Ve(a,!1);a.Ld=!1;var d=a.getParent()==this?re(this,a):-1;nf.i.Qc.call(this,a,b,c);a.H&&this.H&&pf(this,a);a=d;-1==a&&(a=oe(this));a==this.T?this.T=Math.min(oe(this)-1,b):a>this.T&&b<=this.T?this.T++:a<this.T&&b>this.T&&this.T--};
f.removeChild=function(a,b){if(a=n(a)?me(this,a):a){var c=re(this,a);-1!=c&&(c==this.T?(a.ub(!1),this.T=-1):c<this.T&&this.T--);var d=a.k();d&&d.id&&this.Ib&&(c=this.Ib,d=d.id,d in c&&delete c[d])}c=a=nf.i.removeChild.call(this,a,b);c.H&&1!=c.Ld&&Ve(c,!0);c.Ld=!0;return a};f.A=function(){return this.aa};
f.J=function(a,b){if(b||this.aa!=a&&this.dispatchEvent(a?"show":"hide")){this.aa=a;var c=this.k();c&&(qd(c,a),this.cc()&&hf(this.la(),this.tc&&this.aa),b||this.dispatchEvent(this.aa?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.tc};
f.Xd=function(a){this.tc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.tc=!0,ne(this,function(a){a.Zi?delete a.Zi:a.Xd(!0)})):(ne(this,function(a){a.isEnabled()?a.Xd(!1):a.Zi=!0}),this.fd=this.tc=!1),this.cc()&&hf(this.la(),a&&this.aa))};f.cc=function(){return this.Zf};f.Kc=function(a){a!=this.Zf&&this.H&&qf(this,a);this.Zf=a;this.tc&&this.aa&&hf(this.la(),a)};f.jd=function(a){(a=K(this,a))?a.ub(!0):-1<this.T&&K(this,this.T).ub(!1)};f.ub=function(a){this.jd(re(this,a))};
function sf(a){wf(a,function(a,c){return(a+1)%c},oe(a)-1)}function tf(a){wf(a,function(a,c){a--;return 0>a?c-1:a},0)}function vf(a){wf(a,function(a,c){return(a+1)%c},a.T)}function uf(a){wf(a,function(a,c){a--;return 0>a?c-1:a},a.T)}function wf(a,b,c){c=0>c?re(a,a.ha):c;var d=oe(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=K(a,c);if(g&&a.uh(g)){a.jd(c);break}e++;c=b.call(a,c,d)}}f.uh=function(a){return a.A()&&a.isEnabled()&&!!(a.da&2)};function xf(){}q(xf,De);ca(xf);xf.prototype.va=function(){return"goog-menuheader"};function yf(a,b,c){L.call(this,a,c||xf.Zb(),b);this.Ya(1,!1);this.Ya(2,!1);this.Ya(4,!1);this.Ya(32,!1);this.ia=1}q(yf,L);ye("goog-menuheader",function(){return new yf(null)});function zf(a,b){nf.call(this,of,b||mf.Zb(),a);this.Kc(!1)}q(zf,nf);f=zf.prototype;f.Bf=!0;f.sj=!1;f.va=function(){return this.N.va()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.j()};function Af(a){a.Bf=!0;a.Kc(!0)}f.J=function(a,b,c){(b=zf.i.J.call(this,a,b))&&a&&this.H&&this.Bf&&this.la().focus();this.ui=a&&c&&ga(c.clientX)?new y(c.clientX,c.clientY):null;return b};f.eg=function(a){this.Bf&&this.la().focus();return zf.i.eg.call(this,a)};
f.uh=function(a){return(this.sj||a.isEnabled())&&a.A()&&!!(a.da&2)};f.xc=function(a){var b=zf.i.xc.call(this,a);b||ne(this,function(c){!b&&c.$j&&c.mi==a.keyCode&&(this.isEnabled()&&this.ub(c),b=c.qb(a))},this);return b};
f.jd=function(a){zf.i.jd.call(this,a);if(a=K(this,a)){var b=a.k();a=this.k();var c=md(b),d=md(a),e=vd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new y(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function M(a,b){this.ed=a;this.Aa=b;Bf(this);var c=Cf(this)[0];this.Ia=c[1];this.qe=F("tspan",{},null);this.qe.appendChild(document.createTextNode(E?Df+" ":" "+Df));M.i.constructor.call(this,c[0])}q(M,Uc);var Df=Ib?"\u25bc":"\u25be";f=M.prototype;f.clone=function(){return new M(this.ed,this.Aa)};f.bh="default";
f.rf=function(){Ef(this,null);for(var a=this,b=new zf,c=Cf(this),d=0;d<c.length;d++){var e=c[d][1],g=new ff(c[d][0]);g.Za(e);g.Jg(!0);b.pe(g,!0);Xe(g,e==this.Ia)}Sd(b,"action",function(b){if(b=b.target){b=b.ac();if(a.g&&a.Aa){var c=a.Aa(b);void 0!==c&&(b=c)}null!==b&&a.Za(b)}Ff==a&&Gf()});le(b).I(b.k(),"touchstart",function(a){rf(this,a.target).$c(a)});le(b).I(b.k(),"touchend",function(a){rf(this,a.target).Sd(a)});c=cc();d=jd();e=Hf(this.pc);g=this.pc.getBBox();b.C(If);var h=b.k();Xc(h,"blocklyDropdownMenu");
var k=nd(h);e.y=e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;E?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));Jf(e.x,e.y,c,d);Af(b);h.focus()};
function Bf(a){a.zg=null;a.Ug=null;var b=a.ed;if(ea(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Kf(c),e=Lf(c,d),g=Mf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.zg=c[0].substring(0,e-1));g&&(a.Ug=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.ed=c}}}function Cf(a){return p(a.ed)?a.ed.call(a):a.ed}f.ac=function(){return this.Ia};f.Za=function(a){this.Ia=a;for(var b=Cf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.X(b[c][0]);return}this.X(a)};
f.X=function(a){this.g&&(this.qe.style.fill=Nf(Of(this.g.Jf)));null!==a&&a!==this.Ha&&(this.Ha=a,Wc(this),this.Y&&(E?this.Y.insertBefore(this.qe,this.Y.firstChild):this.Y.appendChild(this.qe)),this.g&&this.g.t&&(this.g.C(),this.g.Ja(),this.g.s.nb()))};f.j=function(){Ff==this&&Gf();M.i.j.call(this)};/*

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
function Pf(a){a=a||z;var b;if(a.fb)b=a.fb();else if(a.Yb)b=a.Yb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].$h;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var g=d[e];g&&(a[g.toLowerCase()]=g)}}b=[];for(var h in a)b.push(a[h]);return b}function Qf(a,b){for(var c=z.Yb(),d=0;d<c.length;d++){var e=c[d].Uk;e&&e.call(c[d],a,b)}}
function Rf(a,b,c,d){var e=Pf();e.sort(wa);e.unshift(null);for(var g=void 0,h=0;h<e.length;h++)if(e[h]!==g){var k=J.variables_get?dd(d,"variables_get"):null;k&&k.Na();var m=J.variables_set?dd(d,"variables_set"):null;m&&m.Na();null===e[h]?g=(k||m).$h()[0]:(k&&ed(k,"VAR").Za(e[h]),m&&ed(m,"VAR").Za(e[h]));m&&a.push(m);k&&a.push(k);k&&m?b.push(c,3*c):b.push(2*c)}}
function Sf(){var a=Pf(),b="";if(a.length){a.sort(wa);for(var c=0,d="i",e=0,g=!1;!b;){e=0;for(g=!1;e<a.length&&!g;)a[e].toLowerCase()==d&&(g=!0),e++;g?("z"===d[0]?(c++,d="a"):(d=String.fromCharCode(d.charCodeAt(0)+1),"l"==d[0]&&(d=String.fromCharCode(d.charCodeAt(0)+1))),0<c&&(d+=c)):b=d}}else b="i";return b};/*

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
function Tf(a,b){var c;if(b){var d=this;c=function(a){var c=Uf.call(d,a);a=void 0===c?a:null===c?d.ac():c;b.call(d,a);return c}}else c=Uf;Tf.i.constructor.call(this,Vf,c);a?this.Za(a):this.Za(Sf())}q(Tf,M);Tf.prototype.clone=function(){return new Tf(this.ac(),this.Aa)};Tf.prototype.ac=function(){return this.Ca()};Tf.prototype.Za=function(a){this.Ia=a;this.X(a)};
function Vf(){var a=this.g&&this.g.s?Pf(this.g.s):[],b=this.Ca();b&&-1==a.indexOf(b)&&a.push(b);a.sort(wa);a.push(Wf);a.push(Xf);for(var b=[],c=0;c<a.length;c++)b[c]=[a[c],a[c]];return b}function Uf(a){function b(a,b){Yf();var c=window.prompt(a,b);return c&&c.replace(/[\s\xa0]+/g," ").replace(/^ | $/g,"")}if(a==Wf){var c=this.Ca();(a=b(Zf.replace("%1",c),c))&&Qf(c,a);return null}if(a==Xf)return(a=b($f,""))?(Qf(a,a),a):null};var ag=/#(.)(.)(.)/;function Nf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=bg(b.toString(16));c=bg(c.toString(16));a=bg(a.toString(16));return"#"+b+c+a}var cg=/^#(?:[0-9a-f]{3}){1,2}$/i;function bg(a){return 1==a.length?"0"+a:a}
function Of(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function dg(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function eg(a,b,c){if(p(a))c&&(a=na(a,c));else if(a&&"function"==typeof a.handleEvent)a=na(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};function fg(a,b,c){he.call(this,c);this.oa=b||gg;this.ig=a instanceof ob?a:sb(a,null)}q(fg,he);var hg={};f=fg.prototype;f.Hg=!1;f.Ad=!1;f.kl=null;f.qj=zb;f.Pd=!0;f.we=-1;f.ga=function(){fg.i.ga.call(this);this.Pc&&(this.Pc.removeNode(this),this.Pc=null);this.v=null};
f.Qe=function(){var a=this.k();if(a){var b=jg(this);b&&!b.id&&(b.id=ke(this)+".label");Be(a,"treeitem");Ce(a,"selected",!1);Ce(a,"expanded",!1);Ce(a,"level",this.Xc());b&&Ce(a,"labelledby",b.id);(a=this.Ge())&&Be(a,"presentation");(a=this.Fe())&&Be(a,"presentation");if(a=kg(this))if(Be(a,"group"),a.hasChildNodes())for(a=oe(this),b=1;b<=a;b++){var c=K(this,b-1).k();Ce(c,"setsize",a);Ce(c,"posinset",b)}}};
f.K=function(){var a=this.pb(),b=this.Xg(),c=a.Lb,a=c.createElement("div");u?(Sb(a,xb(wb("br"),b)),a.removeChild(a.firstChild)):Sb(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.v=b};f.pa=function(){fg.i.pa.call(this);hg[ke(this)]=this;this.Qe()};f.eb=function(){fg.i.eb.call(this);delete hg[ke(this)]};
f.Qc=function(a,b){var c=K(this,b-1),d=K(this,b);fg.i.Qc.call(this,a,b);a.Ec=c;a.tb=d;c?c.tb=a:this.Vh=a;d?d.Ec=a:this.ii=a;var e=this.Da();e&&lg(a,e);mg(a,this.Xc()+1);if(this.k()&&(this.nd(),this.La())){e=kg(this);a.k()||a.K();var g=a.k(),h=d&&d.k();e.insertBefore(g,h);this.H&&a.pa();d||(c?c.nd():(qd(e,!0),this.Pb(this.La())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Qc(a,b?re(this,b):oe(this));return a};
f.removeChild=function(a){var b=this.Da(),c=b?b.Xa:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),eg(this.Mk,10,this)):this.select();fg.i.removeChild.call(this,a);this.ii==a&&(this.ii=a.Ec);this.Vh==a&&(this.Vh=a.tb);a.Ec&&(a.Ec.tb=a.tb);a.tb&&(a.tb.Ec=a.Ec);c=!a.tb;a.Pc=null;a.we=-1;if(b&&(b.removeNode(this),this.H)){b=kg(this);if(a.H){var d=a.k();b.removeChild(d);a.eb()}c&&(c=K(this,oe(this)-1))&&c.nd();qe(this)||(b.style.display="none",this.nd(),this.Ge().className=this.Be())}return a};
f.remove=fg.prototype.removeChild;f.Mk=function(){this.select()};f.Xc=function(){var a=this.we;0>a&&(a=(a=this.getParent())?a.Xc()+1:0,mg(this,a));return a};function mg(a,b){if(b!=a.we){a.we=b;var c=ng(a);if(c){var d=og(a)+"px";pe(a)?c.style.paddingRight=d:c.style.paddingLeft=d}ne(a,function(a){mg(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.wc=function(){var a=[];ne(this,function(b){a.push(b)});return a};f.Se=function(){return this.Hg};
f.select=function(){var a=this.Da();a&&a.Lc(this)};function pg(a,b){if(a.Hg!=b){a.Hg=b;qg(a);var c=a.k();c&&(Ce(c,"selected",b),b&&(c=a.Da().k(),Ce(c,"activedescendant",ke(a))))}}f.La=function(){return this.Ad};
f.Pb=function(a){var b=a!=this.Ad;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.Ad=a;c=this.Da();var d=this.k();if(qe(this)){if(!a&&c&&this.contains(c.Xa)&&this.select(),d){if(c=kg(this))if(qd(c,a),a&&this.H&&!c.hasChildNodes()){var e=[];ne(this,function(a){e.push(a.Xg())});Sb(c,xb(e));ne(this,function(a){a.pa()})}this.nd()}}else(c=kg(this))&&qd(c,!1);d&&(this.Ge().className=this.Be(),Ce(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Pb(!this.La())};
f.expand=function(){this.Pb(!0)};f.collapse=function(){this.Pb(!1)};f.Fg=function(){var a=this.getParent();a&&(a.Pb(!0),a.Fg())};f.Xg=function(){var a=this.Da(),b=!a.Zd||a==this.getParent()&&!a.Ng?this.oa.yh:this.oa.xh,a=this.La()&&qe(this),b={"class":b,style:rg(this)},c=[];a&&ne(this,function(a){c.push(a.Xg())});a=wb("div",b,c);return wb("div",{"class":this.oa.Gh,id:ke(this)},[sg(this),a])};function og(a){return Math.max(0,(a.Xc()-1)*a.oa.lg)}
function sg(a){var b={};b["padding-"+(pe(a)?"right":"left")]=og(a)+"px";var b={"class":a.Hd(),style:b},c=a.bg(),d=wb("span",{style:{display:"inline-block"},"class":a.Be()}),e=wb("span",{"class":a.oa.Hh,title:a.kl||null},a.ig);a=xb(e,wb("span",{},a.qj));return wb("div",b,[c,d,a])}f.Hd=function(){return this.oa.Of+(this.Se()?" "+this.oa.Jh:"")};f.bg=function(){return wb("span",{type:"expand",style:{display:"inline-block"},"class":tg(this)})};
function tg(a){var b=a.Da(),c=!b.Zd||b==a.getParent()&&!b.Ng,d=a.oa,e=new qa;e.append(d.sc," ",d.Fj," ");if(qe(a)){var g=0;b.Mg&&a.Pd&&(g=a.La()?2:1);c||(g=a.tb?g+8:g+4);switch(g){case 1:e.append(d.Jj);break;case 2:e.append(d.Ij);break;case 4:e.append(d.Ch);break;case 5:e.append(d.Hj);break;case 6:e.append(d.Gj);break;case 8:e.append(d.Dh);break;case 9:e.append(d.Lj);break;case 10:e.append(d.Kj);break;default:e.append(d.Bh)}}else c?e.append(d.Bh):a.tb?e.append(d.Dh):e.append(d.Ch);return e.toString()}
function rg(a){var b=a.La()&&qe(a);return fb({"background-position":ug(a),display:b?null:"none"})}function ug(a){return(a.tb?(a.Xc()-1)*a.oa.lg:"-100")+"px 0"}f.k=function(){var a=fg.i.k.call(this);a||(this.v=a=this.pb().k(ke(this)));return a};function ng(a){return(a=a.k())?a.firstChild:null}f.Fe=function(){var a=ng(this);return a?a.firstChild:null};f.Ge=function(){var a=ng(this);return a?a.childNodes[1]:null};function jg(a){return(a=ng(a))&&a.lastChild?a.lastChild.previousSibling:null}
function kg(a){return(a=a.k())?a.lastChild:null}f.X=function(a){this.ig=a=rb(a);var b=jg(this);b&&Sb(b,a);(a=this.Da())&&vg(a,this)};f.Ca=function(){var a=qb(this.ig);return-1!=a.indexOf("&")?"document"in l?Fa(a):Ha(a):a};function qg(a){var b=ng(a);b&&(b.className=a.Hd())}f.nd=function(){var a=this.Fe();a&&(a.className=tg(this));if(a=kg(this))a.style.backgroundPosition=ug(this)};f.ug=function(a){"expand"==a.target.getAttribute("type")&&qe(this)?this.Pd&&this.toggle():(this.select(),qg(this))};
f.oi=function(a){"expand"==a.target.getAttribute("type")&&qe(this)||this.Pd&&this.toggle()};function wg(a){return a.La()&&qe(a)?wg(K(a,oe(a)-1)):a}function lg(a,b){a.Pc!=b&&(a.Pc=b,vg(b,a),ne(a,function(a){lg(a,b)}))}
var gg={lg:19,Ih:"goog-tree-root goog-tree-item",Fh:"goog-tree-hide-root",Gh:"goog-tree-item",xh:"goog-tree-children",yh:"goog-tree-children-nolines",Of:"goog-tree-row",Hh:"goog-tree-item-label",sc:"goog-tree-icon",Fj:"goog-tree-expand-icon",Jj:"goog-tree-expand-icon-plus",Ij:"goog-tree-expand-icon-minus",Lj:"goog-tree-expand-icon-tplus",Kj:"goog-tree-expand-icon-tminus",Hj:"goog-tree-expand-icon-lplus",Gj:"goog-tree-expand-icon-lminus",Dh:"goog-tree-expand-icon-t",Ch:"goog-tree-expand-icon-l",Bh:"goog-tree-expand-icon-blank",
Mf:"goog-tree-expanded-folder-icon",zh:"goog-tree-collapsed-folder-icon",Nf:"goog-tree-file-icon",Eh:"goog-tree-expanded-folder-icon",Ah:"goog-tree-collapsed-folder-icon",Jh:"selected"};function xg(a,b,c){fg.call(this,a,b,c)}q(xg,fg);xg.prototype.Da=function(){if(this.Pc)return this.Pc;var a=this.getParent();return a&&(a=a.Da())?(lg(this,a),a):null};xg.prototype.Be=function(){var a=this.La(),b=this.Vj;if(a&&b)return b;b=this.mk;if(!a&&b)return b;b=this.oa;if(qe(this)){if(a&&b.Mf)return b.sc+" "+b.Mf;if(!a&&b.zh)return b.sc+" "+b.zh}else if(b.Nf)return b.sc+" "+b.Nf;return""};/*

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
function yg(a){var b;E&&(b=workarea.Ke());var c=dc("xml");a=Rc(a,!0);for(var d=0,e;e=a[d];d++){var g=zg(e);e=e.W();g.setAttribute("x",E?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}c.setAttribute("level",D);return c}
function zg(a){var b=dc("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.$e){var c=a.$e();c&&b.appendChild(c)}for(var d=0;c=a.U[d];d++)for(var e=0,g;g=c.ua[e];e++)if(g.name&&g.pd){var h=dc("field",null,g.ac());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.Ee())c=dc("comment",null,c),"object"==typeof a.S&&(c.setAttribute("pinned",a.S.A()),d=a.S.vc(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.U[e];e++){var k;g=!0;5!=c.type&&
(h=N(c.o),1==c.type?(k=dc("value"),d=!0):3==c.type&&(k=dc("statement")),h&&(k.appendChild(zg(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.Od);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Uc&&!I||b.setAttribute("deletable",!1);a.Cb&&!I||b.setAttribute("movable",!1);a.Wb&&!I||b.setAttribute("editable",!1);if(a=Ag(a))k=dc("next",null,zg(a)),b.appendChild(k);return b}
function Bg(a){return(new XMLSerializer).serializeToString(a)}function Cg(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Dg(a,b){var c;E&&(c=a.Ke());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=Eg(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(E?c-h:h,e)}}
function Eg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=Fg(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.s&&d.j(!0,!1,!0);d.fill(a,e);d.xa=g}else d=dd(a,e);d.Na&&d.Na();(g=b.getAttribute("inline"))&&Gg(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Wd("true"==g);(g=b.getAttribute("deletable"))&&Hg(d,"true"==g);if(g=b.getAttribute("movable"))d.Cb="true"==g;(g=b.getAttribute("editable"))&&Ig(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,m=0,t;t=k.childNodes[m];m++)3==t.nodeType&&t.data.match(/^\s*$/)||(h=t);m=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.Uf&&(d.Uf(k),d.Na&&d.Na());break;case "comment":d.Vd(k.textContent);var r=k.getAttribute("pinned");r&&setTimeout(function(){d.S&&d.S.J&&d.S.J("true"==r)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.S&&d.S.J&&d.S.jc(h,k);break;case "title":case "field":ed(d,m).Za(k.textContent);break;case "value":case "statement":k=Jg(d,m);if(!k)throw"Input "+m+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=Eg(a,h,c),h.M)Kg(k.o,h.M);else if(h.G)Kg(k.o,h.G);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.F)throw"Next statement does not exist.";if(d.F.p)throw"Next statement is already connected.";
h=Eg(a,h,c);if(!h.G)throw"Next block does not have previous statement.";Kg(d.F,h.G)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.Jc("true"==b);a.t&&((a=Ag(d))?a.C():d.C());return d}function Lg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}l.Blockly||(l.Blockly={});l.Blockly.Xml||(l.Blockly.Xml={});l.Blockly.Xml.domToText=Bg;l.Blockly.Xml.domToWorkspace=Dg;l.Blockly.Xml.textToDom=Cg;
l.Blockly.Xml.workspaceToDom=yg;/*

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
function Mg(a,b,c,d,e,g,h){var k=Ng;E&&(k=-k);this.uj=k*Math.PI/180;this.m=a;this.Kb=b;this.Li=c;a.ld.appendChild(this.Kf(b,!(!g||!h)));Og(this,d,e);g&&h||(a=this.Kb.getBBox(),g=a.width+2*Pg,h=a.height+2*Pg);this.jc(g,h);Qg(this);Rg(this);this.Eg=!0;I||(G(this.re,"mousedown",this,this.yj),this.Nb&&G(this.Nb,"mousedown",this,this.Xk))}var Pg=6,Ng=20,Sg=null,Tg=null;function Ug(){Sg&&(H(Sg),Sg=null);Tg&&(H(Tg),Tg=null)}f=Mg.prototype;f.Eg=!1;f.ib=0;f.Ef=0;f.Gc=0;f.Td=0;f.Q=0;f.Ua=0;f.Hf=!0;
f.Kf=function(a,b){this.jb=F("g",{},null);var c=F("g",{filter:"url(#blocklyEmboss)"},this.jb);this.rh=F("path",{},c);this.re=F("rect",{"class":"blocklyDraggable",x:0,y:0,rx:Pg,ry:Pg},c);b?(this.Nb=F("g",{"class":E?"blocklyResizeSW":"blocklyResizeSE"},this.jb),c=2*Pg,F("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.Nb),F("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.Nb),F("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.Nb)):this.Nb=
null;this.jb.appendChild(a);return this.jb};f.yj=function(a){Vg(this);Ug();Zc(a)||Wg(a)||(Xg(Yg),this.Sh=E?this.Gc+a.clientX:this.Gc-a.clientX,this.Tj=this.Td-a.clientY,Sg=G(document,"mouseup",this,Ug),Tg=G(document,"mousemove",this,this.zj),Yf(),a.stopPropagation())};f.zj=function(a){this.Hf=!1;this.Gc=E?this.Sh-a.clientX:this.Sh+a.clientX;this.Td=this.Tj+a.clientY;Qg(this);Rg(this)};
f.Xk=function(a){Vg(this);Ug();Zc(a)||(Xg(Yg),this.Wk=E?this.Q+a.clientX:this.Q-a.clientX,this.Vk=this.Ua-a.clientY,Sg=G(document,"mouseup",this,Ug),Tg=G(document,"mousemove",this,this.Yk),Yf(),a.stopPropagation())};f.Yk=function(a){this.Hf=!1;var b=this.Wk,c=this.Vk+a.clientY,b=E?b-a.clientX:b+a.clientX;this.jc(b,c);E&&Qg(this)};function Vg(a){a.jb.parentNode.appendChild(a.jb)}function Og(a,b,c){a.ib=b;a.Ef=c;a.Eg&&Qg(a)}
function Qg(a){a.jb.setAttribute("transform","translate("+(E?a.ib-a.Gc-a.Q:a.ib+a.Gc)+", "+(a.Td+a.Ef)+")")}f.vc=function(){return{width:this.Q,height:this.Ua}};
f.jc=function(a,b){var c=2*Pg;a=Math.max(a,c+45);b=Math.max(b,c+18);this.Q=a;this.Ua=b;this.re.setAttribute("width",a);this.re.setAttribute("height",b);this.Nb&&(E?this.Nb.setAttribute("transform","translate("+2*Pg+", "+(b-c)+") scale(-1 1)"):this.Nb.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.Eg){if(this.Hf){var c=-this.Q/4,d=-this.Ua-25,e=this.m.$b();E?this.ib-e.bb-c-this.Q<O?c=this.ib-e.bb-this.Q-O:this.ib-e.bb-c>e.ea&&(c=this.ib-e.bb-e.ea):this.ib+c<e.bb?c=e.bb-this.ib:
e.bb+e.ea<this.ib+c+this.Q+10+O&&(c=e.bb+e.ea-this.ib-this.Q-O);this.Ef+d<e.lc&&(d=this.Li.getBBox().height);this.Gc=c;this.Td=d}Qg(this);Rg(this)}Zg(this.jb,"resize")};
function Rg(a){var b=[],c=a.Q/2,d=a.Ua/2,e=-a.Gc,g=-a.Td;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;E&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var m=k+Math.PI/2;m>2*Math.PI&&(m-=2*Math.PI);var t=Math.sin(m),r=Math.cos(m),x=a.vc(),m=(x.width+x.height)/10,m=Math.min(m,x.width,x.height)/2,x=1-8/h,e=c+x*e,g=d+x*g,x=c+m*r,v=d+m*t,c=c-m*r,d=d-m*t,t=k+a.uj;t>2*Math.PI&&(t-=2*Math.PI);k=Math.sin(t)*h/4;h=Math.cos(t)*h/4;b.push("M"+x+","+v);b.push("C"+(x+h)+","+(v+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.rh.setAttribute("d",b.join(" "))}f.D=function(a){this.re.setAttribute("fill",a);this.rh.setAttribute("fill",a)};f.j=function(){Ug();A(this.jb);this.Li=this.Kb=this.m=this.jb=null};/*

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
function $g(a){this.m=a}f=$g.prototype;f.td=47;f.wf=45;f.qd=15;f.ej=35;f.eh=35;f.le=25;f.cd=!1;f.h=null;f.uf=null;f.pg=0;f.fc=0;f.ji=0;f.Ui=0;
f.K=function(){this.h=F("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=F("clipPath",{id:"blocklyTrashBodyClipPath"},this.h);F("rect",{width:this.td,height:this.wf,y:this.qd},a);F("image",{width:ah,height:bh,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.h).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ch+dh);a=F("clipPath",{id:"blocklyTrashLidClipPath"},this.h);F("rect",{width:this.td,height:this.qd},a);this.uf=F("image",{width:ah,height:bh,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.h);this.uf.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",ch+dh);this.Ff();return this.h};f.n=function(){eh(this,!1);this.gc();G(window,"resize",this,this.gc)};f.j=function(){this.h&&(A(this.h),this.h=null);this.m=this.uf=null;l.clearTimeout(this.pg)};f.gc=function(){var a=this.m.$b();a&&(this.ji=E?this.eh:a.ea+a.Qa-this.td-this.eh,this.Ui=a.ra+a.Ra-(this.wf+this.qd)-this.ej,this.h.setAttribute("transform","translate("+this.ji+","+this.Ui+")"))};
f.Gd=function(){var a=fh(this.h);return new gd(a.x-this.le,a.y-this.le,this.td+2*this.le,this.wf+this.qd+2*this.le)};function eh(a,b){a.cd!=b&&(l.clearTimeout(a.pg),a.cd=b,a.Ff())}f.Ff=function(){this.fc+=this.cd?.2:-.2;this.fc=Math.min(Math.max(this.fc,0),1);var a=45*this.fc;this.uf.setAttribute("transform","rotate("+(E?-a:a)+", "+(E?4:this.td-4)+", "+(this.qd-2)+")");this.h.style.opacity=.2+.2*this.fc;if(0<this.fc||1>this.fc)this.pg=eg(this.Ff,20,this)};f.close=function(){eh(this,!1)};/*

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
function gh(a){this.m=a;this.$=null;this.Id=new hh(a,!0,!0);this.fe=new hh(a,!1,!0);this.wd=F("rect",{height:O,width:O,style:"fill: #fff"},null);ih(this.wd,a.ld)}gh.prototype.j=function(){H(this.ef);this.ef=null;A(this.wd);this.$=this.m=this.wd=null;this.Id.j();this.Id=null;this.fe.j();this.fe=null};
gh.prototype.resize=function(){var a=this.m.$b();if(a){var b=!1,c=!1;this.$&&this.$.ea==a.ea&&this.$.ra==a.ra&&this.$.Ra==a.Ra&&this.$.Qa==a.Qa?(this.$&&this.$.Tc==a.Tc&&this.$.bb==a.bb&&this.$.Jb==a.Jb||(b=!0),this.$&&this.$.Sa==a.Sa&&this.$.lc==a.lc&&this.$.lb==a.lb||(c=!0)):c=b=!0;b&&this.Id.resize(a);c&&this.fe.resize(a);this.$&&this.$.ea==a.ea&&this.$.Qa==a.Qa||this.wd.setAttribute("x",this.fe.mc);this.$&&this.$.ra==a.ra&&this.$.Ra==a.Ra||this.wd.setAttribute("y",this.Id.vf);this.$=a}};
gh.prototype.set=function(a,b){this.Id.set(a);this.fe.set(b)};function hh(a,b,c){this.m=a;this.ff=c||!1;this.Ea=b;this.Kf();b?(this.gb.setAttribute("height",O),this.ja.setAttribute("height",O-6),this.ja.setAttribute("y",3)):(this.gb.setAttribute("width",O),this.ja.setAttribute("width",O-6),this.ja.setAttribute("x",3));this.ri=G(this.gb,"mousedown",this,this.Ik);this.si=G(this.ja,"mousedown",this,this.Jk)}var jh,kh,O=15;aa("document.documentElement.ontouchstart")&&(O=25);f=hh.prototype;
f.j=function(){this.df();this.ef&&(H(this.ef),this.ef=null);H(this.ri);this.ri=null;H(this.si);this.si=null;A(this.h);this.m=this.ja=this.gb=this.h=null};
f.resize=function(a){if(!a&&(a=this.m.$b(),!a))return;if(this.Ea){var b=a.ea;this.ff?b-=O:this.J(b<a.Sa);this.Oa=b/a.Tc;if(-Infinity===this.Oa||Infinity===this.Oa||isNaN(this.Oa))this.Oa=0;var c=a.ea*this.Oa,d=(a.bb-a.Jb)*this.Oa;this.ja.setAttribute("width",Math.max(0,c));this.mc=a.Qa;this.ff&&E&&(this.mc+=a.Qa+O);this.vf=a.Ra+a.ra-O;this.h.setAttribute("transform","translate("+this.mc+", "+this.vf+")");this.gb.setAttribute("width",Math.max(0,b));this.ja.setAttribute("x",lh(this,d))}else{b=a.ra;
this.ff?b-=O:this.J(b<a.Sa);this.Oa=b/a.Sa;if(-Infinity===this.Oa||Infinity===this.Oa||isNaN(this.Oa))this.Oa=0;c=a.ra*this.Oa;d=(a.lc-a.lb)*this.Oa;this.ja.setAttribute("height",Math.max(0,c));this.mc=a.Qa;E||(this.mc+=a.ea-O);this.vf=a.Ra;this.h.setAttribute("transform","translate("+this.mc+", "+this.vf+")");this.gb.setAttribute("height",Math.max(0,b));this.ja.setAttribute("y",lh(this,d))}mh(this)};
f.Kf=function(){this.h=F("g",{},null);this.gb=F("rect",{"class":"blocklyScrollbarBackground"},this.h);var a=Math.floor((O-6)/2);this.ja=F("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.h);ih(this.h,this.m.ld)};f.A=function(){return"none"!=this.h.getAttribute("display")};f.J=function(a){if(a!=this.A()){if(this.ff)throw"Unable to toggle visibility of paired scrollbars.";a?this.h.setAttribute("display","block"):(this.m.Ii({x:0,y:0}),this.h.setAttribute("display","none"))}};
f.Ik=function(a){this.df();if(!Zc(a)){var b=nh(a),b=this.Ea?b.x:b.y,c=fh(this.ja),c=this.Ea?c.x:c.y,d=parseFloat(this.ja.getAttribute(this.Ea?"width":"height")),e=parseFloat(this.ja.getAttribute(this.Ea?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ja.setAttribute(this.Ea?"x":"y",lh(this,e));mh(this)}a.stopPropagation()};
f.Jk=function(a){this.df();Zc(a)||(this.dl=parseFloat(this.ja.getAttribute(this.Ea?"x":"y")),this.fl=this.Ea?a.clientX:a.clientY,jh=G(document,"mouseup",this,this.df),kh=G(document,"mousemove",this,this.Lk));a.stopPropagation()};f.Lk=function(a){this.ja.setAttribute(this.Ea?"x":"y",lh(this,this.dl+((this.Ea?a.clientX:a.clientY)-this.fl)));mh(this)};f.df=function(){oh();Yf(!0);jh&&(H(jh),jh=null);kh&&(H(kh),kh=null)};
function lh(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.Ea?"width":"height",d=parseFloat(a.gb.getAttribute(c)),c=parseFloat(a.ja.getAttribute(c));b=Math.min(b,d-c)}return b}function mh(a){var b=parseFloat(a.ja.getAttribute(a.Ea?"x":"y")),c=parseFloat(a.gb.getAttribute(a.Ea?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.Ea?c.x=b:c.y=b;a.m.Ii(c)}f.set=function(a){this.ja.setAttribute(this.Ea?"x":"y",a*this.Oa);mh(this)};
function ih(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function ph(a,b){ph.i.constructor.call(this);this.$b=a;this.Ii=b;var c=[];c[1]=new qh;c[2]=new qh;c[3]=new qh;c[4]=new qh;this.Ej=c}q(ph,Qc);f=ph.prototype;f.t=!0;f.hi=!1;f.Vf=!1;f.scrollX=0;f.scrollY=0;f.ab=null;f.Xf=null;f.ic=null;f.K=function(){this.h=F("g",{},null);this.R=F("g",{},this.h);this.ld=F("g",{},this.h);this.nb();return this.h};
f.j=function(){this.t=!1;ph.i.j.call(this);this.h&&(A(this.h),this.h=null);this.ld=this.R=null;this.O&&(this.O.j(),this.O=null);this.ab&&(this.ab.j(),this.ab=null)};function rh(){var a=z;if(Ac&&!I){a.ab=new $g(a);var b=a.ab.K();a.h.insertBefore(b,a.R);a.ab.n()}}f.ud=function(a){ph.i.ud.call(this,a);sh&&this==z&&-1==th.indexOf(a)&&th.push(a)};f.nf=function(a){ph.i.nf.call(this,a);sh&&this==z&&th.jm(a)};f.clear=function(){Yf();ph.i.clear.call(this)};f.Ke=function(){return this.$b().ea};
f.C=function(){for(var a=this.Yb(),b=0,c;c=a[b];b++)c.wc().length||c.C()};function uh(a,b){a.Yg=b;a.Zg&&(H(a.Zg),a.Zg=null);b&&(a.Zg=G(a.R,"blocklySelectChange",a,function(){this.Yg=!1}))}function vh(a){var b=z;b.Yg&&0!=$c&&uh(b,!1);if(b.Yg){var c=null;if(a&&(c=Sc(b,a),!c))return;uh(b,!1);c?c.select():P&&wh();setTimeout(function(){uh(b,!0)},1)}}f.nb=function(){if(this.t){this.Xf&&clearTimeout(this.Xf);var a=this.R;a&&(this.Xf=setTimeout(function(){Zg(a,"blocklyWorkspaceChange")},0))}};
function xh(a,b){var c=nh(b),c=new y(c.x,c.y);if(a.Mh){if(a.Mh.contains(c))return eh(a.ab,!0),Xg(yh),!0;eh(a.ab,!1)}if(a.Lh&&a.Lh.contains(c))return Xg(yh),!0;Xg(Yg);return!1}ph.prototype.clear=ph.prototype.clear;/*

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
function zh(a){this.u=a}f=zh.prototype;f.Z=null;f.yc=0;f.zc=0;f.rc=function(){this.ma||(this.ma=F("g",{},null),this.u.w().appendChild(this.ma),G(this.ma,"mouseup",this,this.jg),this.Qb())};f.j=function(){A(this.ma);this.ma=null;this.J(!1);this.u=null};f.Qb=function(){this.u.dc?Yc(this.ma,"blocklyIconGroup"):Xc(this.ma,"blocklyIconGroup")};f.A=function(){return!!this.Z};f.jg=function(){this.u.dc||this.J(!this.A())};f.kc=function(){if(this.A()){var a=Nf(Of(this.u.Jf));this.Z.D(a)}};
function Ah(a){var b=a.u.W(),c=Bh(a.ma),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.yc||b!==a.zc)a.yc=d,a.zc=b,a.A()&&Og(a.Z,d,b)};/*

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
function Ch(a){Ch.i.constructor.call(this,null);this.xi=[];for(var b=0;b<a.length;b++){var c=dc("block",{type:a[b]});this.xi[b]=c}}q(Ch,zh);f=Ch.prototype;f.od=0;f.ie=0;function Dh(a){a.ad||(zh.prototype.rc.call(a),F("rect",{"class":"blocklyIconShield",width:16,height:16,rx:4,ry:4},a.ma),a.ad=F("text",{"class":"blocklyIconMark",x:8,y:12},a.ma),a.ad.appendChild(document.createTextNode("\u2605")))}f.jg=function(a){this.u.Wb&&!I&&zh.prototype.jg.call(this,a)};
f.Lf=function(){this.Oc=F("svg",{x:Pg,y:Pg},null);F("rect",{"class":"blocklyMutatorBackground",height:"100%",width:"100%"},this.Oc);var a=this;this.m=new ph(function(){var b=0;E&&(b+=a.od);return{ra:a.ie,ea:0,Ra:0,Qa:b}},null);this.m.O=new Eh;this.m.O.vd=!1;this.Oc.appendChild(this.m.O.K());this.Oc.appendChild(this.m.K());return this.Oc};f.Qb=function(){this.u.Wb&&!I?zh.prototype.Qb.call(this):(this.J(!1),Yc(this.ma,"blocklyIconGroup"))};
f.pf=function(){var a=2*Pg,b=this.m.R.getBBox(),c=Fh(this.m.O),d;d=E?-b.x:b.width+b.x;b=Math.max(b.height+3*a,c.Sa+20);d+=3*a;if(Math.abs(this.od-d)>a||Math.abs(this.ie-b)>a)this.od=d,this.ie=b,this.Z.jc(d+a,b+a),this.Oc.setAttribute("width",this.od),this.Oc.setAttribute("height",this.ie);E&&this.m.R.setAttribute("transform","translate("+this.od+",0)")};
f.J=function(a){if(a!=this.A())if(a){this.Z=new Mg(this.u.s,this.Lf(),this.u.Fb,this.yc,this.zc,null,null);var b=this;this.m.O.n(this.m);this.m.O.show(this.xi);this.Ob=this.u.Nj(this.m);a=this.Ob.fb();for(var c=0,d;d=a[c];c++)d.C();this.Ob.Cb=!1;Hg(this.Ob,!1);a=2*this.m.O.na;c=this.m.O.Q+a;E&&(c=-c);this.Ob.moveBy(c,a);this.u.Gg&&(this.u.Gg(this.Ob),this.Og=G(this.u.s.R,"blocklyWorkspaceChange",this.u,function(){b.u.Gg(b.Ob)}));this.pf();G(this.m.R,"blocklyWorkspaceChange",this.u,function(){if(0==
$c)for(var a=Rc(b.m,!1),c=0,d;d=a[c];c++){var k=d.W(),m=Gh(d);20>k.y+m.height&&d.moveBy(0,20-m.height-k.y)}b.Ob.s==b.m&&(a=b.u.t,b.u.t=!1,b.u.Cj(b.Ob),b.u.t=a,b.u.Na(),b.u.t&&b.u.C(),b.pf(),b.u.s.nb())});this.kc()}else this.Oc=null,this.m.j(),this.Ob=this.m=null,this.Z.j(),this.Z=null,this.ie=this.od=0,this.Og&&(H(this.Og),this.Og=null)};f.j=function(){this.u.sb=null;zh.prototype.j.call(this)};/*

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
function Hh(a,b){this.g=a;this.p=null;this.type=b;this.V=this.wb=0;this.Ab=!1;this.Vb=this.g.s.Ej}f=Hh.prototype;f.j=function(){if(this.p)throw"Disconnect connection before disposing of it.";this.Ab&&Ih(this.Vb[this.type],this);this.Ab=!1;Jh==this&&(Jh=null);Kh==this&&(Kh=null)};function Lh(a){return 1==a.type||3==a.type}
function Kg(a,b){if(a.g==b.g)throw"Attempted to connect a block to itself.";if(a.g.s!==b.g.s)throw"Blocks are on different workspaces.";if(Mh[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.p)throw"Source connection already connected (value).";if(b.p){var c=N(b);c.Ga(null);if(!c.M)throw"Orphan block does not have an output connection.";for(var d=a.g;d=Nh(d,c);)if(N(d))d=N(d);else{Kg(d,c.M);c=null;break}c&&setTimeout(function(){Oh(c.M,b)},Ph)}}else{if(a.p)throw"Source connection already connected (block).";
if(b.p){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=N(b);c.Ga(null);if(!c.G)throw"Orphan block does not have a previous connection.";for(d=a.g;d.F;)if(d.F.p)d=Ag(d);else{Qh(c.G,d.F)&&(Kg(d.F,c.G),c=null);break}c&&setTimeout(function(){Oh(c.G,b)},Ph)}}var e;Lh(a)?(d=a.g,e=b.g):(d=b.g,e=a.g);a.p=b;b.p=a;e.Ga(d);d.t&&Rh(d);e.t&&Rh(e);d.t&&e.t&&(3==a.type||4==a.type?e.C():d.C())}
function Nh(a,b){for(var c=!1,d=0;d<a.U.length;d++){var e=a.U[d].o;if(e&&1==e.type&&Qh(b.M,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.p;if(!a)throw"Source connection not connected.";if(a.p!=this)throw"Target connection not connected to source connection.";this.p=a.p=null;var b;Lh(this)?(b=this.g,a=a.g):(b=a.g,a=this.g);b.t&&b.C();a.t&&(Rh(a),a.C())};function N(a){return a.p?a.p.g:null}
function Oh(a,b){if(0==$c){var c=Sh(a.g);if(!c.dc){var d=!1;if(!c.Cb||I){c=Sh(b.g);if(!c.Cb||I)return;b=a;d=!0}c.w().parentNode.appendChild(c.w());var e=b.wb+Th-a.wb,g=b.V+Th-a.V;d&&(g=-g);E&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.Ab&&Ih(this.Vb[this.type],this);this.wb=a;this.V=b;Uh(this.Vb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.wb+a,this.V+b)};
f.Ne=function(){var a;1==this.type||2==this.type?(a=E?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=E?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.g.W();Hh.Oe=F("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.wb-b.x)+", "+(this.V-b.y)+")"},this.g.w())};
function Vh(a){var b=Math.round(a.p.wb-a.wb),c=Math.round(a.p.V-a.V);if(0!=b||0!=c){a=N(a);var d=a.w();if(!d)throw"block is not rendered.";d=Bh(d);a.w().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");Wh(a,-b,-c)}}
function Xh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.p||1==c.type&&c.p&&(!N(c).Cb||I)||!Qh(x,c))return!0;c=c.g;do{if(r==c)return!0;c=c.getParent()}while(c);var d=h-g[a].wb,c=k-g[a].V,d=Math.sqrt(d*d+c*c);d<=b&&(t=g[a],b=d);return c<b}if(a.p)return{o:null,yi:b};var g=a.Vb[Mh[a.type]],h=a.wb+c,k=a.V+d;c=0;for(var m=d=g.length-2;c<m;)g[m].V<k?c=m:d=m,m=Math.floor((c+d)/2);d=c=m;var t=null,r=a.g,x=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{o:t,yi:b}}
function Qh(a,b){if(!a.Rc||!b.Rc)return!0;for(var c=0;c<a.Rc.length;c++)if(-1!=b.Rc.indexOf(a.Rc[c]))return!0;return!1}f.P=function(a){a?(ea(a)||(a=[a]),this.Rc=a,this.p&&!Qh(this,this.p)&&(Lh(this)?N(this).Ga(null):this.g.Ga(null),this.g.Ja())):this.Rc=null;return this};
function Yh(a){var b=Th;function c(a){var c=e-d[a].wb,h=g-d[a].V;Math.sqrt(c*c+h*h)<=b&&m.push(d[a]);return h<b}var d=a.Vb[Mh[a.type]],e=a.wb,g=a.V;a=0;for(var h=d.length-2,k=h;a<k;)d[k].V<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,m=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return m}
function Zh(a){a.Ab||Uh(a.Vb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=N(a)){var c;a.isCollapsed()?(c=[],a.M&&c.push(a.M),a.F&&c.push(a.F),a.G&&c.push(a.G)):c=$h(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,Zh(c[d]));0==b.length&&(b[0]=a)}return b}function qh(){}qh.prototype=[];function Uh(a,b){if(b.Ab)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].V<b.V)c=e+1;else if(a[e].V>b.V)d=e;else{c=e;break}}a.splice(c,0,b);b.Ab=!0}
function Ih(a,b){if(!b.Ab)throw"Connection not in database.";b.Ab=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].V<b.V?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].V==b.V;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].V==b.V);throw"Unable to find connection in connectionDB.";};/*

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
var J={ll:0,Xj:function(){var a=(++J.ll).toString();return sh?ai(a):a},Ll:function(a){var b={n:function(){var b=this;this.D(a.Rl);this.L=a.L;"string"==typeof a.$a?this.B(a.$a):"function"==typeof a.$a&&this.B(function(){return a.$a(b)});"undefined"!=a.Qk?Q(this,a.Qk):(bi(this,"undefined"==typeof a.Sk?!0:a.Sk),ci(this,"undefined"==typeof a.Ek?!0:a.Ek));var d=[];d.push(a.text);a.tj&&a.tj.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
Ka("addTemplate() can only handle value inputs.")});d.push(1);a.qk&&this.om(a.qk);di.prototype.rb.apply(this,d)}};b.$e=a.rm?function(){var b=a.Bk?a.fm():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.Bk;J[a.Pl]=b}};/*

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
function ei(a){ei.i.constructor.call(this,a);this.rc()}q(ei,zh);f=ei.prototype;f.Ha="";f.Q=160;f.Ua=80;f.rc=function(){zh.prototype.rc.call(this);F("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.ma);this.ad=F("text",{"class":"blocklyIconMark",x:8,y:13},this.ma);this.ad.appendChild(document.createTextNode("?"))};
f.Lf=function(){this.Cd=F("foreignObject",{x:Pg,y:Pg},null);var a=document.createElementNS("http://www.w3.org/1999/xhtml","body");a.setAttribute("xmlns","http://www.w3.org/1999/xhtml");a.className="blocklyMinimalBody";this.Pa=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Pa.className="blocklyCommentTextarea";this.Pa.setAttribute("dir",E?"RTL":"LTR");a.appendChild(this.Pa);this.Cd.appendChild(a);G(this.Pa,"mouseup",this,this.jl);return this.Cd};
f.Qb=function(){this.A()&&(this.J(!1),this.J(!0));zh.prototype.Qb.call(this)};f.pf=function(){var a=this.Z.vc(),b=2*Pg;this.Cd.setAttribute("width",a.width-b);this.Cd.setAttribute("height",a.height-b);this.Pa.style.width=a.width-b-4+"px";this.Pa.style.height=a.height-b-4+"px"};
f.J=function(a){if(a!=this.A())if((!this.u.Wb||I)&&!this.Pa||u)fi.prototype.J.call(this,a);else{var b=this.Ca(),c=this.vc();a?(this.Z=new Mg(this.u.s,this.Lf(),this.u.Fb,this.yc,this.zc,this.Q,this.Ua),G(this.Z.jb,"resize",this,this.pf),this.kc(),this.Ha=null):(this.Z.j(),this.Cd=this.Pa=this.Z=null);this.X(b);this.jc(c.width,c.height)}};f.jl=function(){Vg(this.Z);this.Pa.focus()};f.vc=function(){return this.A()?this.Z.vc():{width:this.Q,height:this.Ua}};
f.jc=function(a,b){this.Pa?this.Z.jc(a,b):(this.Q=a,this.Ua=b)};f.Ca=function(){return this.Pa?this.Pa.value:this.Ha};f.X=function(a){this.Pa?this.Pa.value=a:this.Ha=a};f.j=function(){this.u.S=null;zh.prototype.j.call(this)};/*

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
var gi=!1,hi=0,ii=0,ji={x:0,y:0},ki=null,li=null,mi=null,ni=null,oi=null,pi=null;function qi(){var a=F("g",{"class":"blocklyHidden"},null);mi=a;pi=F("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);oi=F("rect",{"class":"blocklyTooltipBackground"},a);ni=F("text",{"class":"blocklyTooltipText"},a);return a}function ri(a){G(a,"mouseover",null,si);G(a,"mouseout",null,ti);G(a,"mousemove",null,ui)}function si(a){for(a=a.target;!n(a.$a)&&!p(a.$a);)a=a.$a;ki!=a&&(vi(),li=null,ki=a);clearTimeout(hi)}
function ti(){hi=setTimeout(function(){li=ki=null;vi()},1);clearTimeout(ii)}function ui(a){ki&&ki.$a&&0==$c&&!Ff&&(gi?(a=nh(a),10<Math.sqrt(Math.pow(ji.x-a.x,2)+Math.pow(ji.y-a.y,2))&&vi()):li!=ki&&(clearTimeout(ii),ji=nh(a),ii=setTimeout(wi,1E3)))}function vi(){gi&&(gi=!1,mi&&(mi.style.display="none"));clearTimeout(ii)}
function wi(){li=ki;if(mi){hc(ni);var a=ki.$a;p(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,m=1,d=0;d<c.length-1;d++)m<(d+1.5)/k?(m++,b[d]=!0):b[d]=!1;for(var b=xi(c,b,a),d=yi(c,b,a),k=c,m=[],t=0;t<k.length;t++)m.push(k[t]),void 0!==b[t]&&m.push(b[t]?"\n":" ");b=m.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)F("tspan",{dy:"1em",x:5},
ni).appendChild(document.createTextNode(a[c]));gi=!0;mi.style.display="block";a=ni.getBBox();c=10+a.width;e=a.height;oi.setAttribute("width",c);oi.setAttribute("height",e);pi.setAttribute("width",c);pi.setAttribute("height",e);if(E)for(e=a.width,g=0;h=ni.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=ji.x;e=E?e-(0+c):e+0;c=ji.y+10;g=zi();c+a.height>g.height&&(c-=a.height+20);E?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);mi.setAttribute("transform",
"translate("+e+","+c+")")}}function yi(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function xi(a,b,c){for(var d=yi(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=yi(a,h,c);k>d&&(d=k,e=h)}return e?xi(a,e,c):b};/*

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
function Ai(a){this.g=null;this.kd=new Rb(0,25);this.X(a)}q(Ai,Uc);f=Ai.prototype;f.clone=function(){return new Ai(this.Ca())};f.pd=!1;f.n=function(a){this.g||(this.g=a,this.Y=F("text",{"class":"blocklyText"},null),a.w().appendChild(this.Y),this.Y.$a=this.g,ri(this.Y),Wc(this))};f.j=function(){A(this.Y);this.Y=null};f.w=function(){return this.Y};f.B=function(a){this.Y.$a=a};/*

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
function Bi(a,b,c,d){this.type=a;this.name=b;this.g=c;this.o=d;this.ua=[];this.align=-1;this.aa=!0}function R(a,b,c){if(!b&&!c)return a;n(b)&&(b=new Ai(b));a.g.t&&b.n(a.g);b.name=c;b.zg&&R(a,b.zg);a.ua.push(b);b.Ug&&R(a,b.Ug);a.g.t&&(a.g.C(),a.g.Ja());return a}f=Bi.prototype;f.A=function(){return this.aa};
f.J=function(a){var b=[];if(this.aa==a)return b;for(var c=(this.aa=a)?"block":"none",d=0,e;e=this.ua[d];d++)e.J(a);if(this.o){if(a)b=Zh(this.o);else if(d=this.o,d.Ab&&Ih(d.Vb[d.type],d),d.p){e=N(d).fb();for(var g=0;g<e.length;g++){for(var h=e[g],k=$h(h,!0),m=0;m<k.length;m++){var t=k[m];t.Ab&&Ih(d.Vb[t.type],t)}h=Ci(h);for(k=0;k<h.length;k++)h[k].J(!1)}}if(d=N(this.o))d.w().style.display=c,a||(d.t=!1)}return b};f.P=function(a){if(!this.o)throw"This input does not have a connection.";this.o.P(a);return this};
function Di(a,b){a.align=b;a.g.t&&a.g.C();return a}f.n=function(){for(var a=0;a<this.ua.length;a++)this.ua[a].n(this.g)};f.j=function(){for(var a=0,b;b=this.ua[a];a++)b.j();this.o&&this.o.j();this.g=null};/*

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
function fi(a){fi.i.constructor.call(this,a);this.rc()}q(fi,zh);f=fi.prototype;f.Ha="";f.rc=function(){zh.prototype.rc.call(this);F("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.ma);this.ad=F("text",{"class":"blocklyIconMark",x:8,y:13},this.ma);this.ad.appendChild(document.createTextNode("!"))};
f.J=function(a){if(a!=this.A())if(a){var b=this.Ha;a=F("text",{"class":"blocklyText blocklyBubbleText",y:Pg},null);for(var b=b.split("\n"),c=0;c<b.length;c++)F("tspan",{dy:"1em",x:Pg},a).appendChild(document.createTextNode(b[c]));this.Z=new Mg(this.u.s,a,this.u.Fb,this.yc,this.zc,null,null);if(E)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+Pg);this.kc();a=this.Z.vc();this.Z.jc(a.width,a.height)}else this.Z.j(),this.Z=null};
f.X=function(a){this.Ha!=a&&(this.Ha=a,this.A()&&(this.J(!1),this.J(!0)))};f.j=function(){this.u.he=null;zh.prototype.j.call(this)};/*

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
function di(){}function dd(a,b){if(sh)return Ei.create(di,a,b);var c=a.t?new Fi:new di;c.initialize(a,b);return c}f=di.prototype;f.initialize=function(a,b){this.id=J.Xj();a.ud(this);this.fill(a,b)};f.fill=function(a,b){this.G=this.F=this.M=null;this.U=[];this.disabled=this.t=this.Od=!1;this.$a="";this.contextMenu=!0;this.Dc=null;this.xb=[];this.Wb=this.Cb=this.Uc=!0;this.qc=!1;this.S=null;this.aj=new y(0,0);this.s=a;this.dc=a.hi;if(b){this.type=b;var c=J[b],d;for(d in c)this[d]=c[d]}p(this.n)&&this.n()};
function Fg(a,b){return sh?Gi.get(a):Sc(b,a)}f.j=function(a,b,c){Hi(this,a);this.s&&!c&&(this.s.nf(this),this.s=null);P==this&&(P=null);for(a=this.xb.length-1;0<=a;a--)this.xb[a].j(!1);for(a=0;b=this.U[a];a++)b.j();this.U.length=0;b=$h(this,!0);for(a=0;a<b.length;a++)c=b[a],c.p&&c.disconnect(),b[a].j();if(sh&&!Ii)Gi["delete"](this.id.toString())};
function Hi(a,b){var c;c=!1;if(a.M)a.M.p&&a.Ga(null);else{var d=null;a.G&&a.G.p&&(d=a.G.p,a.Ga(null));var e=Ag(a);if(b&&e){var g=a.F.p;e.Ga(null);d&&Qh(d,g)&&Kg(d,g)}}c&&a.moveBy(Th*(E?-1:1),2*Th)}function $h(a,b){var c=[];if(b||a.t)if(a.M&&c.push(a.M),a.F&&c.push(a.F),a.G&&c.push(a.G),b||!a.qc)for(var d=0,e;e=a.U[d];d++)e.o&&c.push(e.o);return c}
f.Ja=function(){if(0==$c){var a=Sh(this);if(!a.dc)for(var b=$h(this,!1),c=0;c<b.length;c++){var d=b[c];d.p&&Lh(d)&&N(d).Ja();for(var e=Yh(d),g=0;g<e.length;g++){var h=e[g];d.p&&h.p||Sh(h.g)!=a&&(Lh(d)?Oh(h,d):Oh(d,h))}}}};f.getParent=function(){return this.Dc};function Ag(a){return a.F&&N(a.F)}function Sh(a){var b=a;do a=b,b=a.Dc;while(b);return a}f.wc=function(){return this.xb};
f.Ga=function(a){if(this.Dc){for(var b=this.Dc.xb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.Dc=null;this.G&&this.G.p&&this.G.disconnect();this.M&&this.M.p&&this.M.disconnect()}else Xa(Rc(this.s,!1),this)&&this.s.nf(this);(this.Dc=a)?a.xb.push(this):this.s.ud(this)};f.fb=function(){for(var a=[this],b,c=0;b=this.xb[c];c++)a.push.apply(a,b.fb());return a};function Hg(a,b){a.Uc=b;a.Si&&Ji(a.Si)}
function Ig(a,b){a.Wb=b;for(var c=0,d;d=a.U[c];c++)for(var e=0,g;g=d.ua[e];e++)g.Qb();d=Ci(a);for(c=0;c<d.length;c++)d[c].Qb()}f.B=function(a){this.$a=a};f.D=function(a){this.Jf=a;this.t&&this.kc()};function ed(a,b){for(var c=0,d;d=a.U[c];c++)for(var e=0,g;g=d.ua[e];e++)if(g.name===b)return g;return null}function S(a,b){var c=ed(a,b);return c?c.ac():null}function bi(a,b){var c;a.G&&(a.G.j(),a.G=null);b&&(void 0===c&&(c=null),a.G=new Hh(a,4),a.G.P(c));a.t&&(a.C(),a.Ja())}
function ci(a,b){var c;a.F&&(a.F.j(),a.F=null);b&&(void 0===c&&(c=null),a.F=new Hh(a,3),a.F.P(c));a.t&&(a.C(),a.Ja())}function Q(a,b){a.M&&(a.M.j(),a.M=null);void 0===b&&(b=null);a.M=new Hh(a,2);a.M.P(b);a.t&&(a.C(),a.Ja())}function Gg(a,b){a.Od=b;a.t&&(a.C(),a.Ja(),a.s.nb())}f.Wd=function(a){this.disabled=a};function Ki(a){for(;;){a:for(;;){do{var b=a;a=a.getParent();if(!a){a=null;break a}}while(Ag(a)==b);break a}if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.qc};
f.Jc=function(a){this.qc=a};f.toString=function(a){for(var b=[],c=0,d;d=this.U[c];c++){for(var e=0,g;g=d.ua[e];e++)b.push(g.Ca());d.o&&((d=N(d.o))?b.push(d.toString()):b.push("?"))}b=va(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function T(a,b){return Li(a,1,b)}function Mi(a,b){return Li(a,5,b||"")}
f.rb=function(a,b){function c(a){a instanceof Uc?R(this,a):R(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.rb.mj),g=[],h=0;h<e.length;h+=2){var k=va(e[h]),m=void 0;k&&g.push(new Ai(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),t=arguments[k];t[1]instanceof Uc?g.push([t[0],t[1]]):m=Di(T(this,t[0]).P(t[1]),t[2]);arguments[k]=null}else"\n"==k&&g.length&&(m=Mi(this));m&&g.length&&(g.forEach(c,m),g=[])}g.length&&(m=Di(Mi(this),d),
g.forEach(c,m));for(h=1;h<arguments.length-1;h++);Gg(this,!a.match(this.rb.dj))};f.rb.mj=/(%\d+|\n)/;f.rb.dj=/%1\s*$/;function Li(a,b,c){var d=null;if(1==b||3==b)d=new Hh(a,b);b=new Bi(b,c,a,d);a.U.push(b);a.t&&(a.C(),a.Ja());return b}function Ni(a,b){for(var c=0,d;d=a.U[c];c++)if(d.name==b){d.o&&d.o.p&&N(d.o).Ga(null);d.j();a.U.splice(c,1);a.t&&(a.C(),a.Ja());return}Ka('Input "%s" not found.',b)}function Jg(a,b){for(var c=0,d;d=a.U[c];c++)if(d.name==b)return d;return null}
function Oi(a,b){var c=Jg(a,b);return c&&c.o&&N(c.o)}f.Ee=function(){return this.S||""};f.Vd=function(a){this.S=a};f.Ji=function(){};f.W=function(){return this.aj};f.moveBy=function(a,b){this.aj.translate(a,b)};/*

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
function Eh(){var a=this;this.m=new ph(function(){return Fh(a)},function(b){var c=Fh(a);c&&(ga(b.y)&&(a.m.scrollY=-c.Sa*b.y-c.lb),a.m.R.setAttribute("transform","translate(0,"+(a.m.scrollY+c.Ra)+")"))});this.m.hi=!0;this.Th=[];this.Ua=this.Q=0;this.se=[];this.Bb=[]}var Pi,Qi,Ri,Ti,Ui,Vi;f=Eh.prototype;f.vd=!0;f.na=8;f.K=function(){this.h=F("g",{},null);this.gb=F("path",{"class":"blocklyFlyoutBackground"},this.h);this.h.appendChild(this.m.K());return this.h};
f.j=function(){this.Mb();H(this.Th);this.Th.length=0;this.Ic&&(this.Ic.j(),this.Ic=null);this.m=null;this.h&&(A(this.h),this.h=null);this.be=this.gb=null};function Fh(a){if(!a.A())return null;var b=a.Ua-2*a.na,c=a.Q;try{var d=a.m.R.getBBox()}catch(e){d={height:0,y:0}}return{ra:b,ea:c,Sa:d.height+d.y,lc:-a.m.scrollY,lb:0,Ra:a.na,Qa:0}}
f.n=function(a){this.be=a;this.Ic=new hh(this.m,!1,!1);this.Mb();G(window,"resize",this,this.gc);this.gc();G(this.h,"wheel",this,this.$i);G(this.h,"mousewheel",this,this.$i);G(this.be.R,"blocklyWorkspaceChange",this,this.Wf);G(this.h,"mousedown",this,this.cf)};
f.gc=function(){if(this.A()){var a=this.be.$b();if(a){var b=this.Q-this.na;E&&(b*=-1);var c=["M "+(E?this.Q:0)+",0"];c.push("h",b);c.push("a",this.na,this.na,0,0,E?0:1,E?-this.na:this.na,this.na);c.push("v",Math.max(0,a.ra-2*this.na));c.push("a",this.na,this.na,0,0,E?0:1,E?this.na:-this.na,this.na);c.push("h",-b);c.push("z");this.gb.setAttribute("d",c.join(" "));b=a.Qa;E&&(b+=a.ea,b-=this.Q);this.h.setAttribute("transform","translate("+b+","+a.Ra+")");this.Ua=a.ra;this.Ic&&this.Ic.resize()}}};
f.$i=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Fb&&(b*=10);var c=Fh(this),b=c.lc+b,b=Math.min(b,c.Sa-c.ra),b=Math.max(b,0);this.Ic.set(b);a.preventDefault()}};f.A=function(){return this.h&&"block"==this.h.style.display};f.Mb=function(){if(this.A()){this.h.style.display="none";for(var a=0,b;b=this.Bb[a];a++)H(b);this.Bb.length=0;this.Dg&&(H(this.Dg),this.Dg=null)}};
f.show=function(a){this.Mb();for(var b=Rc(this.m,!1),c=0,d;d=b[c];c++)d.s==this.m&&d.j(!1,!1);for(var c=0,e;e=this.se[c];c++)A(e);this.se.length=0;var g=this.na;this.h.style.display="block";var b=[],h=[];if("VARIABLE"==a)Rf(b,h,g,this.m);else if("PROCEDURE"==a)cd(b,h,g,this.m);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Eg(this.m,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.fb();e=0;for(var m;m=c[e];e++)m.dc=!0,m.Vd(null);d.C();m=d.w();e=Gh(d);c=E?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=F("rect",{"fill-opacity":0},null);this.m.R.insertBefore(e,d.w());d.Bd=e;this.se[k]=e;this.vd?this.Bb.push(G(m,"mousedown",null,Wi(this,d))):this.Bb.push(G(m,"mousedown",null,Xi(this,d)));this.Bb.push(G(m,"mouseover",d,d.Af));this.Bb.push(G(m,"mouseout",d,d.mf));this.Bb.push(G(e,"mousedown",null,Wi(this,d)));this.Bb.push(G(e,"mouseover",d,d.Af));this.Bb.push(G(e,"mouseout",d,d.mf))}this.Bb.push(G(this.gb,"mouseover",this,function(){for(var a=Rc(this.m,!1),b=0,c;c=a[b];b++)c.mf()}));
this.Q=0;this.zi();this.Wf();Yi(window,"resize");this.Dg=G(this.m.R,"blocklyWorkspaceChange",this,this.zi);this.m.nb()};
f.zi=function(){for(var a=0,b=this.na,c=Rc(this.m,!1),d=0,e;e=c[d];d++)var g=Gh(e),a=Math.max(a,g.width);a+=b+8+b/2+O;if(this.Q!=a){for(d=0;e=c[d];d++){var g=Gh(e),h=e.W();if(E){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.Bd&&(e.Bd.setAttribute("width",g.width),e.Bd.setAttribute("height",g.height),e.Bd.setAttribute("x",E?h.x-g.width:h.x),e.Bd.setAttribute("y",h.y))}this.Q=a;Zg(window,"resize")}};
function Xi(a,b){return function(c){Zi();Yf();Zc(c)?$i(b,c):(oh(),Xg(Yg),Pi=c,Qi=b,Ri=a,Ti=G(document,"mouseup",this,Zi),Ui=G(document,"mousemove",this,a.Kk));c.stopPropagation()}}f.cf=function(a){Zc(a)||(Yf(!0),aj(),this.Ni=a.clientY,Vi=G(document,"mousemove",this,this.vg),Ti=G(document,"mouseup",this,aj),a.preventDefault(),a.stopPropagation())};f.vg=function(a){var b=a.clientY-this.Ni;this.Ni=a.clientY;a=Fh(this);b=a.lc-b;b=Math.min(b,a.Sa-a.ra);b=Math.max(b,0);this.Ic.set(b)};
f.Kk=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(oh(),Math.sqrt(Math.pow(a.clientX-Pi.clientX,2)+Math.pow(a.clientY-Pi.clientY,2))>bj&&Wi(Ri,Qi)(Pi))};function Wi(a,b){return function(c){if(!Zc(c)&&!b.disabled){var d=zg(b),d=Eg(a.be,d),e=b.w();if(!e)throw"originBlock is not rendered.";var e=fh(e),g=d.w();if(!g)throw"block is not rendered.";g=fh(g);d.moveBy(e.x-g.x,e.y-g.y);a.vd?a.Mb():a.Wf();d.cf(c)}}}
f.Wf=function(){for(var a=Tc(this.be),b=Rc(this.m,!1),c=0,d;d=b[c];c++){var e=d.fb().length>a;d.Wd(e)}};function aj(){Ti&&(H(Ti),Ti=null);Ui&&(H(Ui),Ui=null);Vi&&(H(Vi),Vi=null);Ti&&(H(Ti),Ti=null);Ri=Qi=Pi=null}f.Gd=function(){var a=fh(this.h).x;E||(a-=1E7);return new gd(a,-1E7,1E7+this.Q,this.Ua+2E7)};function cj(a){if("function"==typeof a.dg)return a.dg();if(n(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function dj(a){this.Ia=void 0;this.sa={};if(a){var b;if("function"==typeof a.cg)b=a.cg();else if("function"!=typeof a.dg)if(fa(a)||n(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=cj(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=dj.prototype;f.set=function(a,b){ej(this,a,b,!1)};f.add=function(a,b){ej(this,a,b,!0)};
function ej(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.sa[g]||(a.sa[g]=new dj);a=a.sa[g]}if(d&&void 0!==a.Ia)throw Error('The collection already contains the key "'+b+'"');a.Ia=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.sa[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Ia:void 0};f.dg=function(){var a=[];fj(this,a);return a};function fj(a,b){void 0!==a.Ia&&b.push(a.Ia);for(var c in a.sa)fj(a.sa[c],b)}
f.cg=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.sa[e])return[];c=c.sa[e]}gj(c,a,b)}else gj(this,"",b);return b};function gj(a,b,c){void 0!==a.Ia&&c.push(b);for(var d in a.sa)gj(a.sa[d],b+d,c)}f.clear=function(){this.sa={};this.Ia=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.sa[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.sa[e]}a=b.Ia;for(delete b.Ia;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.sa[e].gi())delete b.sa[e];else break;return a};f.clone=function(){return new dj(this)};f.gi=function(){var a;if(a=void 0===this.Ia)a:{a=this.sa;for(var b in a){a=!1;break a}a=!0}return a};function hj(){this.Cc=new dj}f=hj.prototype;f.fa="";f.qg=null;f.Ye=null;f.Rd=0;f.dd=0;function ij(a,b){var c=!1,d=a.Cc.cg(b);d&&d.length&&(a.dd=0,a.Rd=0,c=a.Cc.get(d[0]),c=jj(a,c))&&(a.qg=d);return c}function jj(a,b){var c;b&&(a.dd<b.length&&(c=b[a.dd],a.Ye=b),c&&(c.Fg(),c.select()));return!!c}f.clear=function(){this.fa=""};function kj(a,b,c,d,e){this.reset(a,b,c,d,e)}kj.prototype.Uh=null;var lj=0;kj.prototype.reset=function(a,b,c,d,e){"number"==typeof e||lj++;d||pa();this.Qd=a;this.Ak=b;delete this.Uh};kj.prototype.Hi=function(a){this.Qd=a};function mj(a){this.af=a;this.di=this.ba=this.Qd=this.xa=null}function nj(a,b){this.name=a;this.value=b}nj.prototype.toString=function(){return this.name};var oj=new nj("WARNING",900),pj=new nj("INFO",800),qj=new nj("CONFIG",700),rj=new nj("FINE",500);f=mj.prototype;f.getName=function(){return this.af};f.getParent=function(){return this.xa};f.wc=function(){this.ba||(this.ba={});return this.ba};f.Hi=function(a){this.Qd=a};
function sj(a){if(a.Qd)return a.Qd;if(a.xa)return sj(a.xa);Ka("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=sj(this).value)for(p(b)&&(b=b()),a=new kj(a,String(b),this.af),c&&(a.Uh=c),c="log:"+a.Ak,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.di)for(var e=0,g=void 0;g=b.di[e];e++)g(d);c=c.getParent()}};
f.he=function(a,b){this.log(oj,a,b)};f.info=function(a,b){this.log(pj,a,b)};var tj={},uj=null;function vj(a){uj||(uj=new mj(""),tj[""]=uj,uj.Hi(qj));var b;if(!(b=tj[a])){b=new mj(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=vj(a.substr(0,c));c.wc()[d]=b;b.xa=c;tj[a]=b}return b};function wj(a){fe.call(this);this.v=a;a=u?"focusout":"blur";this.vk=Sd(this.v,u?"focusin":"focus",this,!u);this.wk=Sd(this.v,a,this,!u)}q(wj,fe);wj.prototype.handleEvent=function(a){var b=new Md(a.Ba);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};wj.prototype.ga=function(){wj.i.ga.call(this);Zd(this.vk);Zd(this.wk);delete this.v};function xj(a,b,c){fg.call(this,a,b,c);this.Ad=!0;pg(this,!0);this.Xa=this;this.de=new hj;if(u)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.li)&&a.he("Failed to enable background image cache",void 0)}}q(xj,fg);xj.prototype.wa=null;xj.prototype.Yf=null;var yj=xj.prototype,zj=vj("goog.ui.tree.TreeControl");yj.li=zj;f=xj.prototype;f.$f=!1;f.Wj=null;f.Zd=!0;f.Mg=!0;f.Nc=!0;f.Ng=!0;f.Da=function(){return this};f.Xc=function(){return 0};f.Fg=function(){};
f.ek=function(){this.$f=!0;ue(this.k(),"focused");this.Xa&&this.Xa.select()};f.ak=function(){this.$f=!1;we(this.k(),"focused")};f.hasFocus=function(){return this.$f};f.La=function(){return!this.Nc||xj.i.La.call(this)};f.Pb=function(a){this.Nc?xj.i.Pb.call(this,a):this.Ad=a};f.bg=function(){return zb};f.Ge=function(){var a=ng(this);return a?a.firstChild:null};f.Fe=function(){return null};f.nd=function(){};f.Hd=function(){return xj.i.Hd.call(this)+(this.Nc?"":" "+this.oa.Fh)};
f.Be=function(){var a=this.La(),b=this.Vj;if(a&&b)return b;b=this.mk;if(!a&&b)return b;b=this.oa;return a&&b.Eh?b.sc+" "+b.Eh:!a&&b.Ah?b.sc+" "+b.Ah:""};f.Lc=function(a){if(this.Xa!=a){var b=!1;this.Xa&&(b=this.Xa==this.Wj,pg(this.Xa,!1));if(this.Xa=a)pg(a,!0),b&&a.select();this.dispatchEvent("change")}};function Aj(a){0!=a.Zd&&(a.Zd=!1,a.H&&Bj(a))}
function Bj(a){function b(a){var h=kg(a);if(h){var k=!d||c==a.getParent()&&!e?a.oa.yh:a.oa.xh;h.className=k;if(h=a.Fe())h.className=tg(a)}ne(a,b)}var c=a,d=c.Zd,e=c.Ng;b(a)}function Cj(a){0!=a.Mg&&(a.Mg=!1,a.H&&Bj(a))}function Dj(a){if(0!=a.Nc){a.Nc=!1;if(a.H){var b=ng(a);b&&(b.className=a.Hd())}a.Xa==a&&K(a,0)&&a.Lc(K(a,0))}}f.Qe=function(){xj.i.Qe.call(this);var a=this.k();Be(a,"tree");Ce(a,"labelledby",jg(this).id)};
f.pa=function(){xj.i.pa.call(this);var a=this.k();a.className=this.oa.Ih;a.setAttribute("hideFocus","true");a=this.k();a.tabIndex=0;var b=this.wa=new Oe(a),c=this.Yf=new wj(a);le(this).I(c,"focusout",this.ak).I(c,"focusin",this.ek).I(b,"key",this.qb).I(a,"mousedown",this.fg).I(a,"click",this.fg).I(a,"dblclick",this.fg);this.Qe()};f.eb=function(){xj.i.eb.call(this);this.wa.j();this.wa=null;this.Yf.j();this.Yf=null};
f.fg=function(a){var b=this.li;b&&b.log(rj,"Received event "+a.type,void 0);if(b=Ej(this,a))switch(a.type){case "mousedown":b.ug(a);break;case "click":a.preventDefault();break;case "dblclick":b.oi(a)}};
f.qb=function(a){var b=!1,b=this.de,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.qg;if(d){var e=null,g=!1;if(b.Ye){var h=b.dd+c;0<=h&&h<b.Ye.length?(b.dd=h,e=b.Ye):g=!0}e||(h=b.Rd+c,0<=h&&h<d.length&&(b.Rd=h),d.length>b.Rd&&(e=b.Cc.get(d[b.Rd])),e&&e.length&&g&&(b.dd=-1==c?e.length-1:0));jj(b,e)&&(b.qg=d)}c=!0}break;case 8:d=b.fa.length-1;c=!0;0<d?(b.fa=b.fa.substring(0,d),ij(b,b.fa)):0==d?b.fa="":c=!1;break;case 27:b.fa="",c=!0}if(!(b=c)&&(b=this.Xa)){b=this.Xa;
c=!0;switch(a.keyCode){case 39:if(a.altKey)break;qe(b)&&(b.La()?K(b,0).select():b.Pb(!0));break;case 37:if(a.altKey)break;qe(b)&&b.La()&&b.Pd?b.Pb(!1):(d=b.getParent(),e=b.Da(),d&&(e.Nc||d!=e)&&d.select());break;case 40:a:if(qe(b)&&b.La())d=K(b,0);else{for(d=b;d!=b.Da();){e=d.tb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.Ec;null!=d?d=wg(d):(d=b.getParent(),e=b.Da(),d=!e.Nc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.Da())&&e.de.clear());
b=c}b||(b=this.de,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.fa)&&(b.fa+=d,c=ij(b,b.fa))),b=c);b&&a.preventDefault();return b};function Ej(a,b){for(var c=null,d=b.target;null!=d;){if(c=hg[d.id])return c;if(d==a.k())break;d=d.parentNode}return null}f.createNode=function(a){return new xg(a||zb,this.oa,this.pb())};
function vg(a,b){var c=a.de,d=b.Ca();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.Cc.get(d);e?e.push(b):c.Cc.set(d,[b])}}f.removeNode=function(a){var b=this.de,c=a.Ca();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.Cc.get(c);d&&(Ya(d,a),d.length&&b.Cc.remove(c))}};/*

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
function Fj(a,b){this.nc=dc("div","blocklyToolboxDiv");this.nc.setAttribute("dir",E?"RTL":"LTR");b.appendChild(this.nc);this.O=new Eh;a.appendChild(this.O.K());G(this.nc,"mousedown",this,function(a){Zc(a)||a.target==this.nc?Yf(!1):Yf(!0)})}f=Fj.prototype;f.width=0;f.xf={lg:19,Ih:"blocklyTreeRoot",Fh:"blocklyHidden",Gh:"",Of:"blocklyTreeRow",Hh:"blocklyTreeLabel",sc:"blocklyTreeIcon",Mf:"blocklyTreeIconOpen",Nf:"blocklyTreeIconNone",Jh:"blocklyTreeSelected"};
f.n=function(){this.xf.cleardotPath=ch+"1x1.gif";this.xf.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(E?"Rtl":"Ltr");var a=new Gj(this,this.xf);this.ce=a;Dj(a);Aj(a);Cj(a);a.Lc(null);this.nc.style.display="block";this.O.n(z);Hj(this);a.C(this.nc);var b=this;Sd(window,"resize",function(){b.gc()});this.gc()};
f.gc=function(){var a=this.nc,b=vd(Bc),c=zi();E?(b=Ij(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;E||--this.width};
function Hj(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.oc=[];e.add(k);var m=h.getAttribute("custom");m?k.oc=m:b(h,k)}else"HR"==k?e.add(new Jj):"BLOCK"==k&&e.oc.push(h)}}var c=a.ce;c.Bi();c.oc=[];b(Cc,a.ce);if(c.oc.length)throw"Toolbox cannot have both blocks and categories in the root level.";Zg(window,"resize")}
f.Gd=function(){return new gd(E?zi().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Gj(a,b){this.ya=a;xj.call(this,zb,b)}q(Gj,xj);Gj.prototype.pa=function(){Gj.i.pa.call(this);if(Gd){var a=this.k();G(a,"touchstart",this,this.jk)}};Gj.prototype.jk=function(a){a.preventDefault();var b=Ej(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.ug(a)},1)};Gj.prototype.createNode=function(a){return new Kj(this.ya,a?rb(a):zb,this.oa,this.pb())};
Gj.prototype.Lc=function(a){this.Xa!=a&&(xj.prototype.Lc.call(this,a),a&&a.oc&&a.oc.length?this.ya.O.show(a.oc):this.ya.O.Mb())};function Kj(a,b,c,d){fg.call(this,b,c,d);a&&(b=function(){Zg(window,"resize")},Sd(a.ce,"expand",b),Sd(a.ce,"collapse",b))}q(Kj,xg);fg.prototype.bg=function(){return wb("span")};Kj.prototype.ug=function(){qe(this)&&this.Pd?(this.toggle(),this.select()):this.Se()?this.Da().Lc(null):this.select();qg(this)};Kj.prototype.oi=function(){};
function Jj(){Kj.call(this,null,"",Lj)}q(Jj,Kj);var Lj={Of:"blocklyTreeSeparator"};/*

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
var Mj={ve:null,show:function(a,b){Ef(Mj,null);if(b.length){for(var c=new zf,d=0,e;e=b[d];d++){var g=new ff(e.text);c.pe(g,!0);g.Xd(e.enabled);e.enabled&&Sd(g,"action",function(a){return function(){a()}}(e.kb))}Sd(c,"action",Mj.Mb);e=cc();g=jd();c.C(If);var h=c.k();Xc(h,"blocklyContextMenu");var k=nd(h),d=a.clientX+g.x,m=a.clientY+g.y;a.clientY+k.height>=e.height&&(m-=k.height);E?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);Jf(d,m,e,g);Af(c);setTimeout(function(){h.focus()},
1);Mj.ve=null}else Mj.Mb()},Mb:function(){Ff==Mj&&Gf();Mj.ve=null},Ql:function(a,b){return function(){var c=Eg(a.s,b),d=a.W();d.x=E?d.x-Th:d.x+Th;d.y+=2*Th;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Fi(){this.h=F("g",{},null);this.Ri=F("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.h);this.Fb=F("path",{"class":"blocklyPath"},this.h);this.Vg=F("path",{"class":"blocklyPathLight"},this.h);this.Fb.$a=this;ri(this.Fb);Ji(this)}q(Fi,di);f=Fi.prototype;f.height=0;f.width=0;
f.Na=function(){for(var a=0,b;b=this.U[a];a++)b.n();this.sb&&Dh(this.sb);this.kc();I||G(this.w(),"mousedown",this,this.cf);this.s.R.appendChild(this.w());p(this.onchange)&&G(this.s.R,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){P&&wh();P=this;this.Af();Zg(this.s.R,"blocklySelectChange")};function wh(){var a=P;P=null;a.mf();Zg(a.s.R,"blocklySelectChange")}f.sb=null;f.S=null;f.he=null;function Ci(a){var b=[];a.sb&&b.push(a.sb);a.S&&b.push(a.S);a.he&&b.push(a.he);return b}
var Nj=null,Oj=null;f=Fi.prototype;f.Ga=function(a){var b=this.w();if(this.Dc&&b){var c=this.W();this.s.R.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Fi.i.Ga.call(this,a);a&&(c=this.W(),a.w().appendChild(b),a=this.W(),Wh(this,a.x-c.x,a.y-c.y))};f.W=function(){var a=0,b=0,c=this.w();if(c){do var d=Bh(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.s.R)}return new y(a,b)};
f.moveBy=function(a,b){var c=this.W();this.w().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");Wh(this,a,b);Pj(this)};function Gh(a){var b=a.height,c=a.width;if(a=Ag(a))a=Gh(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.Jc=function(a){if(this.qc!=a){Fi.i.Jc.call(this,a);for(var b=[],c=0,d;d=this.U[c];c++)b.push.apply(b,d.J(!a));if(a){a=Ci(this);for(c=0;c<a.length;c++)a[c].J(!1);c=this.toString(Qj);R(Mi(this,"_TEMP_COLLAPSED_INPUT"),c).n()}else Ni(this,"_TEMP_COLLAPSED_INPUT");b.length||(b[0]=this);if(this.t){for(c=0;a=b[c];c++)a.C();this.Ja()}}};
f.cf=function(a){if(!this.dc){Rj();Zi();this.select();Yf();if(Zc(a))$i(this,a);else if(this.Cb&&!I){oh();Xg(Yg);var b=this.W();this.Oi=b.x;this.Pi=b.y;this.Rg=a.clientX;this.Sg=a.clientY;$c=1;Nj=G(document,"mouseup",this,this.wg);Oj=G(document,"mousemove",this,this.vg);this.ze=[];for(var b=this.fb(),c=0,d;d=b[c];c++){d=Ci(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.yc,y:g.zc};g.xj=d[e];this.ze.push(g)}}}else return;a.stopPropagation()}};
f.wg=function(a){var b=this;Sj(function(){Zi();if(P&&Jh){Kg(Kh,Jh);if(b.t){var c=(Lh(Kh)?Jh:Kh).g;Tj("click");var d=fh(c.h);c.M?(d.x+=E?3:-3,d.y+=13):c.G&&(d.x+=E?-23:23,d.y+=3);c=F("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},Bc);c.Qg=new Date;Uj(c)}b.s.ab&&b.s.ab.close()}else xh(b.s,a)&&((c=b.s.ab)&&eg(c.close,100,c),P.j(!1,!0),Zg(window,"resize"));Jh&&(A(Hh.Oe),delete Hh.Oe,Jh=null);Xg(Vj.OPEN)})};
function $i(a,b){if(!I&&a.contextMenu){var c=[];if(a.Uc&&!I&&a.Cb&&!I&&!a.dc){var d={text:Wj,enabled:!0,kb:function(){var b=zg(a);Lg(b);var b=Eg(a.s,b),c=a.W();c.x=E?c.x-Th:c.x+Th;c.y+=2*Th;b.moveBy(c.x,c.y);b.select()}};a.fb().length>Tc(a.s)&&(d.enabled=!1);c.push(d);a.Wb&&!I&&!a.qc&&Dc&&(d={enabled:!0},a.S?(d.text=Xj,d.kb=function(){a.Vd(null)}):(d.text=Yj,d.kb=function(){a.Vd("")}),c.push(d));if(!a.qc)for(d=0;d<a.U.length;d++)if(1==a.U[d].type){d={enabled:!0};d.text=a.Od?Zj:ak;d.kb=function(){Gg(a,
!a.Od)};c.push(d);break}Ec&&(a.qc?(d={enabled:!0},d.text=bk,d.kb=function(){a.Jc(!1)}):(d={enabled:!0},d.text=ck,d.kb=function(){a.Jc(!0)}),c.push(d));Fc&&(d={text:a.disabled?dk:ek,enabled:!Ki(a),kb:function(){a.Wd(!a.disabled)}},c.push(d));var d=a.fb().length,e=Ag(a);e&&(d-=e.fb().length);d={text:1==d?fk:gk.replace("%1",String(d)),enabled:!0,kb:function(){a.j(!0,!0)}};c.push(d)}d={enabled:!(p(a.L)?!a.L():!a.L)};d.text=hk;d.kb=function(){var b=p(a.L)?a.L():a.L;b&&window.open(b)};c.push(d);a.Mj&&!a.dc&&
a.Mj(c);Mj.show(b,c);Mj.ve=a}}function Wh(a,b,c){if(a.t){for(var d=$h(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Ci(a);for(e=0;e<d.length;e++)Ah(d[e]);for(e=0;e<a.xb.length;e++)Wh(a.xb[e],b,c)}}function ik(a,b){b?Xc(a.h,"blocklyDragging"):Yc(a.h,"blocklyDragging");for(var c=0;c<a.xb.length;c++)ik(a.xb[c],b)}
f.vg=function(a){var b=this;Sj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){oh();var c=a.clientX-b.Rg,d=a.clientY-b.Sg;if(1==$c&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>bj){$c=2;b.Ga(null);ik(b,!0);var e=b.s;e.Mh=e.ab?e.ab.Gd():null;e.Lh=e.O?e.O.Gd():e.ya?e.ya.Gd():null}if(2==$c){b.w().setAttribute("transform","translate("+(b.Oi+c)+", "+(b.Pi+d)+")");for(e=0;e<b.ze.length;e++){var g=b.ze[e],h=g.xj,k=g.x+c,g=g.y+d;h.yc=k;h.zc=g;h.A()&&Og(h.Z,k,g)}for(var h=$h(b,!1),
g=k=null,m=Th,e=0;e<h.length;e++){var t=h[e],r=Xh(t,m,c,d);r.o&&(k=r.o,g=t,m=r.yi)}Jh&&Jh!=k&&(A(Hh.Oe),delete Hh.Oe,Kh=Jh=null);k&&k!=Jh&&(k.Ne(),Jh=k,Kh=g);b.Uc&&!I&&xh(b.s,a)}}a.stopPropagation()})};function Ji(a){a.Cb&&!I?Xc(a.h,"blocklyDraggable"):Yc(a.h,"blocklyDraggable")}f.w=function(){return this.h};var jk=1*(1-Math.SQRT1_2)+1,kk=3*(1-Math.SQRT1_2)-1,lk="m "+jk+","+jk,mk="a 3,3 0 0,0 "+(-kk-1)+","+(2-kk),nk="a 3,3 0 0,0 "+(2-kk)+","+(kk+1);f=Fi.prototype;
f.j=function(a,b){Zi();Mj.ve==this&&Mj.Mb();Hi(this,a);if(b&&this.t){Tj("delete");var c=fh(this.h),d=this.h.cloneNode(!0);d.Vi=c.x;d.Wi=c.y;d.setAttribute("transform","translate("+d.Vi+","+d.Wi+")");Bc.appendChild(d);d.qh=d.getBBox();d.Qg=new Date;ok(d)}this.t=!1;c=Ci(this);for(d=0;d<c.length;d++)c[d].j();Fi.i.j.call(this,a);A(this.h);this.Ri=this.Vg=this.Fb=this.h=null};
function ok(a){var b=(new Date-a.Qg)/150;1<b?A(a):(a.setAttribute("transform","translate("+(a.Vi+(E?-1:1)*a.qh.width/2*b+", "+(a.Wi+a.qh.height*b))+") scale("+(1-b)+")"),setTimeout(function(){ok(a)},10))}function Uj(a){var b=(new Date-a.Qg)/150;1<b?A(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){Uj(a)},10))}
f.kc=function(){if(!this.disabled){var a=Nf(Of(this.Jf)),b;b=a;if(!cg.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(ag,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];dg([255,255,255],b,.3);dg([0,0,0],b,.4);this.Fb.setAttribute("fill",a);b=Ci(this);for(a=0;a<b.length;a++)b[a].kc();for(a=0;b=this.U[a];a++)for(var c=0,d;d=b.ua[c];c++)d.X(null);this.t&&this.C()}};
function Rh(a){a.disabled||Ki(a)?(Xc(a.h,"blocklyDisabled"),a.Fb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Yc(a.h,"blocklyDisabled"),a.kc());a=a.wc();for(var b=0,c;c=a[b];b++)Rh(c)}f.Ee=function(){return this.S?this.S.Ca().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Vd=function(a){var b=!1;n(a)?(this.S||(this.S=new ei(this),b=!0),this.S.X(a)):this.S&&(this.S.j(),b=!0);b&&this.t&&(this.C(),this.Ja())};
f.Ji=function(a){this.sb&&this.sb!==a&&this.sb.j();a&&(a.u=this,this.sb=a,this.t&&Dh(a))};f.Wd=function(a){this.disabled!=a&&(Fi.i.Wd.call(this,a),Rh(this),this.s.nb())};f.Af=function(){Xc(this.h,"blocklySelected");this.h.parentNode.appendChild(this.h)};f.mf=function(){Yc(this.h,"blocklySelected")};
f.C=function(){this.t=!0;var a=10;E&&(a=-a);for(var b=Ci(this),c=0;c<b.length;c++){var d=b[c];d.u.isCollapsed()?d.ma.setAttribute("display","none"):(d.ma.setAttribute("display","block"),E&&(a-=16),d.ma.setAttribute("transform","translate("+a+", 5)"),Ah(d),a=E?a-10:a+26)}var e=a+=E?10:-10,g=this.U,b=[];b.ca=e+20;if(this.G||this.F)b.ca=Math.max(b.ca,40);for(var d=c=0,h=!1,k=!1,m=!1,t=void 0,r=this.Od&&!this.isCollapsed(),x=0,v;v=g[x];x++)if(v.A()){var B;r&&t&&3!=t&&3!=v.type?B=b[b.length-1]:(t=v.type,
B=[],B.type=r&&3!=v.type?-1:v.type,B.height=0,b.push(B));B.push(v);v.Hc=25;v.qa=r&&1==v.type?20.5:0;if(v.o&&v.o.p){var Ma=Gh(N(v.o));v.Hc=Math.max(v.Hc,Ma.height);v.qa=Math.max(v.qa,Ma.width)}x==g.length-1&&v.Hc--;B.height=Math.max(B.height,v.Hc);v.mb=0;1==b.length&&(v.mb+=E?-e:e);for(var Ma=!1,ig=0,yb;yb=v.ua[ig];ig++){0!=ig&&(v.mb+=10);var Si=yb.Zh();yb.qa=Si.width;yb.of=Ma&&yb.pd?10:0;v.mb+=yb.qa+yb.of;B.height=Math.max(B.height,Si.height);Ma=yb.pd}-1!=B.type&&(3==B.type?(k=!0,d=Math.max(d,v.mb)):
(1==B.type?h=!0:5==B.type&&(m=!0),c=Math.max(c,v.mb)))}for(e=0;B=b[e];e++)if(B.Ti=!1,-1==B.type)for(g=0;v=B[g];g++)if(1==v.type){B.height+=20;B.Ti=!0;break}b.tf=20+d;k&&(b.ca=Math.max(b.ca,b.tf+30));h?b.ca=Math.max(b.ca,c+20+8):m&&(b.ca=Math.max(b.ca,c+20));b.lk=h;b.am=k;b.$l=m;d=a;this.M?this.Pg=this.sf=!0:(this.Pg=this.sf=!1,this.G&&(a=N(this.G))&&Ag(a)==this&&(this.sf=!0),Ag(this)&&(this.Pg=!0));h=this.W();k=[];m=[];a=[];c=[];v=b.ca;this.sf?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(E?
lk:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.G&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.G.moveTo(h.x+(E?-30:30),h.y));k.push("H",v);a.push("H",v+(E?-1:0));this.width=v;for(B=v=0;e=b[B];B++){r=10;0==B&&(r+=E?-d:d);a.push("M",b.ca-1+","+(v+1));if(this.isCollapsed())g=e[0],x=v+18,pk(g.ua,r,x),k.push("l 8,0 0,4 8,4 -16,8 8,4"),E?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),E&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(t=0;g=e[t];t++)x=v+18,e.Ti&&(x+=10),r=pk(g.ua,r,x),5!=g.type&&(r+=g.qa+10),1==g.type&&(m.push("M",r-10+","+(v+10)),m.push("h",6-g.qa),m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),m.push("v",g.Hc+1-20),m.push("h",g.qa+2-8),m.push("z"),E?(c.push("M",r-10-3+8-g.qa+","+(v+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.Hc-20+3),c.push("h",g.qa-8+1)):(c.push("M",r-10+1+","+(v+10+1)),c.push("v",g.Hc+1),c.push("h",6-g.qa),
c.push("M",r-g.qa-10+1.8+","+(v+10+20-.4)),c.push("l","3.04,-1.8")),x=E?h.x-r-8+10+g.qa+1:h.x+r+8-10-g.qa-1,Ma=h.y+v+10+1,g.o.moveTo(x,Ma),g.o.p&&Vh(g.o));r=Math.max(r,b.ca);this.width=Math.max(this.width,r);k.push("H",r);a.push("H",r+(E?-1:0));k.push("v",e.height);E&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],x=v+18,-1!=g.align&&(t=b.ca-g.mb-8-20,1==g.align?r+=t:0==g.align&&(r+=(t+r)/2)),pk(g.ua,r,x),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),t=e.height-20,k.push("v",t),E?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",t)):(a.push("M",b.ca-4.2+","+(v+20-.4)),a.push("l","3.04,-1.8")),x=h.x+(E?-b.ca-1:b.ca+1),Ma=h.y+v,g.o.moveTo(x,Ma),g.o.p&&(Vh(g.o),this.width=Math.max(this.width,b.ca+Gh(N(g.o)).width-8+1))):5==e.type?(g=e[0],x=v+18,-1!=g.align&&(t=b.ca-g.mb-20,b.lk&&(t-=8),1==g.align?r+=t:0==g.align&&(r+=(t+r)/2)),pk(g.ua,r,x),k.push("v",e.height),E&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==B&&(k.push("v",10),E&&a.push("v",9),v+=10),x=v+18,-1!=g.align&&(t=b.tf-g.mb-20,1==g.align?r+=t:0==g.align&&
(r+=(t+r)/2)),pk(g.ua,r,x),r=b.tf+30,k.push("H",r),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.ca),E?(a.push("M",r-30+kk+","+(v+kk)),a.push(mk),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.ca-1)):(a.push("M",r-30+kk+","+(v+e.height-kk)),a.push(nk),a.push("H",b.ca)),x=h.x+(E?-r:r),Ma=h.y+v+1,g.o.moveTo(x,Ma),g.o.p&&(Vh(g.o),this.width=Math.max(this.width,b.tf+Gh(N(g.o)).width)),B==b.length-1||3==b[B+1].type)&&(k.push("v",
10),E&&a.push("v",9),v+=10);v+=e.height}b.length||(v=25,k.push("V",v),E&&a.push("V",v-1));b=v;this.height=b+1;this.F&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.F.moveTo(E?h.x-30:h.x+30,h.y+b+1),this.F.p&&Vh(this.F),this.height+=4);this.Pg?(k.push("H 0"),E||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),E||(a.push("M",jk+","+(b-jk)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.M?(this.M.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),E?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):E||(this.sf?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+m.join(" ");this.Fb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.Vg.setAttribute("d",b);E&&(this.Fb.setAttribute("transform","scale(-1 1)"),this.Vg.setAttribute("transform","scale(-1 1)"),this.Ri.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.C():Zg(window,"resize");
Pj(this)};function pk(a,b,c){E&&(b=-b);for(var d=0,e;e=a[d];d++)E?(b-=e.of+e.qa,e.w().setAttribute("transform","translate("+b+", "+c+")"),e.qa&&(b-=10)):(e.w().setAttribute("transform","translate("+(b+e.of)+", "+c+")"),e.qa&&(b+=e.of+e.qa+10));return E?-b:b};/*

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
function Xc(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Yc(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function G(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in qk)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=qk[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var qk={};aa("document.documentElement.ontouchstart")&&(qk={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function H(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function Yi(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function Zg(a,b){setTimeout(function(){Yi(a,b)},0)}
function Bh(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function fh(a){var b=0,c=0;do{var d=Bh(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=Bc);return{x:b,y:c}}function Hf(a){a=fh(a);return Ij(a.x,a.y,!1)}
function F(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Zc(a){return 2==a.button||a.ctrlKey}
function Ij(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=Bc.createSVGPoint();d.x=a;d.y=b;a=Bc.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function nh(a){return Ij(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Kf(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Lf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Kf(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function Mf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Kf(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d};/*

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
function rk(a,b){rk.i.constructor.call(this,a);this.Aa=b}var sk;q(rk,Uc);f=rk.prototype;f.clone=function(){return new rk(this.Ca(),this.Aa)};f.bh="text";f.j=function(){Ff==this&&Gf();rk.i.j.call(this)};f.X=function(a){if(null!==a){if(this.g&&this.Aa){var b=this.Aa(a);null!==b&&void 0!==b&&(a=b)}Uc.prototype.X.call(this,a)}};
f.rf=function(a){a=a||!1;if(!a&&(Gb||Ib||Kb)){a=window.prompt(tk,this.Ha);if(this.g&&this.Aa){var b=this.Aa(a);void 0!==b&&(a=b)}null!==a&&this.X(a)}else{Ef(this,uk(this));var b=If,c=dc("input","blocklyHtmlInput");sk=c;b.appendChild(c);c.value=c.defaultValue=this.Ha;c.ni=null;vk(this);this.Di();a||(c.focus(),c.select());c.Hk=G(c,"keyup",this,this.qi);c.Gk=G(c,"keypress",this,this.qi);c.Nk=G(this.g.s.R,"blocklyWorkspaceChange",this,this.Di)}};
f.qi=function(a){var b=sk;13==a.keyCode?Gf():27==a.keyCode?(this.X(b.defaultValue),Gf()):(a=b.value,a!==b.ni?(b.ni=a,this.X(a),vk(this)):w&&this.g.C())};function vk(a){var b=!0,c=sk;a.g&&a.Aa&&(b=a.Aa(c.value));null===b?Xc(c,"blocklyInvalidInput"):Yc(c,"blocklyInvalidInput")}f.Di=function(){var a=If,b=this.Ka.getBBox();a.style.width=b.width+"px";b=Hf(this.pc);if(E){var c=this.pc.getBBox();b.x+=c.width;b.x-=a.offsetWidth}b.y+=1;w&&(b.y-=3);a.style.left=b.x+"px";a.style.top=b.y+"px"};
function uk(a){return function(){var b=sk,c=b.value;a.g&&a.Aa&&(c=a.Aa(c),null===c&&(c=b.defaultValue));a.X(c);a.g.t&&a.g.C();H(b.Hk);H(b.Gk);H(b.Nk);sk=null;If.style.width="auto"}}function wk(a){if(null===a)return null;a=a.replace(/O/ig,"0");a=a.replace(/,/g,"");a=parseFloat(a||0);return isNaN(a)?null:String(a)};/*

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
function xk(a){this.af=a;this.zf="";this.bj=new RegExp(this.Rb,"g")}xk.prototype.kh=null;function yk(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}function zk(a,b){if(!b)return"";if(b.disabled)return zk(a,Ag(b));var c=a[b.type];if(!c)throw'Language "'+a.af+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(ea(c))return[a.Gi(b,c[0]),c[1]];if(n(c))return a.kh&&(c=a.kh.replace(/%1/g,"'"+b.id+"'")+c),a.Gi(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function U(a,b,c){var d=V;if(isNaN(c))throw'Expecting valid order from block "'+a.type+'".';a=Oi(a,b);if(!a)return"";b=zk(d,a);if(""===b)return"";if(!ea(b))throw'Expecting tuple from value block "'+a.type+'".';d=b[0];b=b[1];if(isNaN(b))throw'Expecting valid order from value block "'+a.type+'".';d&&c<=b&&c!=b&&0!=c&&99!=c&&(d="("+d+")");return d}function Ak(a,b){var c=V,d=Oi(a,b),e=zk(c,d);if(!n(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=yk(e,c.cj));return e}
xk.prototype.cj="  ";function Bk(a){var b=V;b.zf+=a+","}xk.prototype.Rb="{leCUI8hutHZI4480Dc}";function Ck(a,b){var c=V;if(!c.xd[a]){var d=Pc(c.ge,a);c.Wh[a]=d;c.xd[a]=b.join("\n").replace(c.bj,d)}return c.Wh[a]};/*

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
var Yg="handclosed",yh="handdelete",Vj={},Dk="",Ek=null,Fk="";function Gk(){var a=Hk.join("\n");Fk=ch.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Fk),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Ek=c.sheet;Xg("hando")}
function Xg(a){if(!I&&Dk!=a){Dk=a;var b="url("+Fk+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Ek||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;Bc&&(Bc.style.cursor="hando"==a?"":b)}}
var Hk=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function Ik(a,b){function c(){Jk(a);Kk()}if(!jc(document,a))throw"Error: container is not in current document.";b&&Lk(b);if(Gc){var d=document.getElementById("realtime");d&&(d.style.display="block");Mk(c,a)}else c()}
function Lk(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Cg(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var m=a.scrollbars;void 0===m&&(m=c);var t=a.sounds;void 0===t&&(t=!0);var r=!!a.realtime,x=r?a.realtimeOptions:void 0;
E=!!a.rtl;Ec=e;Dc=g;Fc=h;I=b;Ic=a.maxBlocks||Infinity;a.media?ch=a.media:a.path&&(ch=a.path+"media/");Jc=c;Kc=m;Ac=d;Lc=t;Cc=k;Gc=r;Hc=x}
function Jk(a){a.setAttribute("dir","LTR");ie=E;Gk();var b=F("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=F("defs",{},b),d,e;d=F("filter",{id:"blocklyEmboss"},c);F("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=F("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
F("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);F("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);F("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=F("filter",{id:"blocklyTrashcanShadowFilter"},c);F("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);F("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=F("feMerge",{},d);F("feMergeNode",{"in":"offsetBlur"},d);F("feMergeNode",{"in":"SourceGraphic"},
d);d=F("filter",{id:"blocklyShadowFilter"},c);F("feGaussianBlur",{stdDeviation:2},d);c=F("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);F("rect",{width:10,height:10,fill:"#aaa"},c);F("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);z=new ph(Nk,Ok);b.appendChild(z.K());z.rg=Ic;I||(Jc?z.ya=new Fj(b,a):(z.O=new Eh,c=z.O,d=c.K(),c.vd=!1,ic(d)),Kc||Pk(function(){if(0==$c){var a=z.$b(),b=a.bb+a.Qa,c=a.lc+a.Ra;if(a.lb<c||a.lb+a.Sa>a.ra+c||a.Jb<(E?a.bb:
b)||a.Jb+a.Tc>(E?a.ea:a.ea+b))for(var d=Rc(z,!1),e=0,r;r=d[e];e++){var x=r.W(),v=Gh(r),B=c+25-v.height-x.y;0<B&&r.moveBy(0,B);B=c+a.ra-25-x.y;0>B&&r.moveBy(0,B);B=25+b-x.x-(E?0:v.width);0<B&&r.moveBy(B,0);B=b+a.ea-25-x.x+(E?v.width:0);0>B&&r.moveBy(B,0)}}}));b.appendChild(qi());a.appendChild(b);Bc=b;Rj();If=dc("div","blocklyWidgetDiv");If.style.direction=E?"rtl":"ltr";document.body.appendChild(If)}
function Kk(){G(Bc,"mousedown",null,Qk);G(Bc,"contextmenu",null,Rk);G(If,"contextmenu",null,Rk);Mc||(G(window,"resize",document,Rj),G(document,"keydown",null,Sk),document.addEventListener("mouseup",Tk,!1),Kb&&G(window,"orientationchange",document,function(){Zg(window,"resize")}),Mc=!0);if(Cc)if(z.ya)z.ya.n();else if(z.O){z.O.n(z);z.O.show(Cc.childNodes);z.scrollX=z.O.Q;E&&(z.scrollX*=-1);var a="translate("+z.scrollX+", 0)";z.R.setAttribute("transform",a);z.ld.setAttribute("transform",a)}Kc&&(z.ic=
new gh(z),z.ic.resize());rh();if(Lc){Uk([ch+"click.mp3",ch+"click.wav",ch+"click.ogg"],"click");Uk([ch+"delete.mp3",ch+"delete.ogg",ch+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)H(b.pop());for(var a in Vk){var d=Vk[a];d.volume=.01;d.play();d.pause();if(Kb||Jb)break}};b.push(G(document,"mousemove",null,a));b.push(G(document,"touchstart",null,a))}};/*

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
var If=null,Ff=null,Wk=null;function Ef(a,b){Gf();Ff=a;Wk=b;If.style.display="block"}function Gf(){Ff&&(If.style.display="none",Wk&&Wk(),Wk=Ff=null,hc(If))}function Jf(a,b,c,d){b<d.y&&(b=d.y);E?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);If.style.left=a+"px";If.style.top=b+"px"};/*

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
function Xk(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=l.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var Yk=Xk();function W(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function Zk(a){this.Bj=W(a,"clientId");this.$g=Yk.userId;document.getElementById(W(a,"authButtonElementId"));document.getElementById(W(a,"authDivElementId"))}Zk.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function $k(a,b,c,d){function e(c){gapi.Ub.ka.files.Re({resource:{mimeType:b,title:a,parents:[{id:c}]}}).uc(d)}function g(){function a(b){gapi.Ub.ka.Tk.Re({fileId:"appdata",resource:{key:"folderId",value:b}}).uc(function(){e(b)})}function b(){gapi.Ub.ka.files.Re({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).uc(function(b){a(b.id)})}gapi.Ub.ka.Tk.get({fileId:"appdata",propertyKey:"folderId"}).uc(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Ub.ka.files.get({fileId:g}).uc(function(a){a.error||
a.labels.sm?b():e(g)})}})}gapi.Ub.load("drive","v2",function(){g()})}function al(a){this.pi=W(a,"onFileLoaded");this.Ck=W(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.ei=W(a,"initializeModel");this.Ai=W(a,"registerTypes",function(){});this.nh=W(a,"afterAuth",function(){});this.vj=W(a,"autoCreate",!1);this.Pj=W(a,"defaultTitle","New Realtime File");this.Oj=W(a,"defaultFolderTitle","");this.oh=W(a,"afterCreate",function(){});this.Gf=new Zk(a)}
function bl(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Yk=Xk();for(var e in b)gapi.ka.Db.load(b[e],a.pi,a.ei,a.bi)}al.prototype.start=function(){var a=this;this.Gf.start(function(){a.Ai&&a.Ai();a.nh&&a.nh();a.load()})};
al.prototype.bi=function(a){a.type!=gapi.ka.Db.dh.Jl&&(a.type==gapi.ka.Db.dh.nl?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ka.Db.dh.sl&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
al.prototype.load=function(){var a=Yk.fileIds;a&&(a=a.split(","));var b=this.Gf.$g,b=Yk.state;if(a)for(var c in a)gapi.ka.Db.load(a[c],this.pi,this.ei,this.bi);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.bm;b=d.$g;bl(this,a,b);return}}this.vj&&cl(this)}};function cl(a){$k(a.Pj,a.Ck,a.Oj,function(b){b.id?(a.oh&&a.oh(b.id),bl(a,[b.id],a.Gf.$g)):(console.error("Error creating file."),console.error(b))})};/*

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
var th,dl,sh=!1,el=null,Ei=null,fl=null,gl=null,Gi=null,Ii=!1,hl=null,il=null,jl=null;function kl(a){var b=a.Uj;a=a.Uj.length;for(var c=0;c<a;c++){var d=b[c];if(!d.sk){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.wi?ll(function(){ml(e,!1);nl(e)}):"relativeX"!=d.wi&&"relativeY"!=d.wi||ll(function(){e.Si||ml(e,!1);nl(e)}))}}}function ol(a){if(!a.sk){var b=a.newValue;b?ml(b,!a.oldValue):(b=a.oldValue,pl(b))}}function ll(a){if(Ii)a();else try{Ii=!0,a()}finally{Ii=!1}}
function ml(a,b){ll(function(){var c=Cg(a.ah).firstChild;if(c=Eg(z,c,!0))b&&c.s.ud(c),(b||Xa(th,c))&&nl(c)})}function nl(a){if(!isNaN(a.jf)&&!isNaN(a.kf)){var b=zi().width,c=a.W(),d=a.jf-c.x;a.moveBy(E?b-d:d,a.kf-c.y)}}function pl(a){ll(function(){a.j(!0,!0,!0)})}function Pj(a){if(a.s==z&&sh&&!Ii){a=Sh(a);var b=a.W(),c=!1,d=zg(a);d.setAttribute("id",a.id);var e=dc("xml");e.appendChild(d);d=Bg(e);d!=a.ah&&(c=!0,a.ah=d);if(a.jf!=b.x||a.kf!=b.y)a.jf=b.x,a.kf=b.y,c=!0;c&&Gi.set(a.id.toString(),a)}}
function ql(a,b){gapi.Ub.ka.vi.list({fileId:a}).uc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.km){b(e.domain);break}}})}
var ul={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Ei=a;var b=a.Tl();a.Yc().set("blocks",b);b=a.Sl();a.Yc().set("topBlocks",b);il&&a.Yc().set(il,a.Ul(jl))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){el=a;a:{for(var b=a.Zj(),c=0;c<b.length;c++){var d=b[c];if(d.tk){fl=d.mm;break a}}fl=void 0}Ei=a.Ze;Gi=Ei.Yc().get("blocks");th=Ei.Yc().get("topBlocks");
Ei.Yc().addEventListener(gapi.ka.Db.yf.tl,kl);Gi.addEventListener(gapi.ka.Db.yf.Kl,ol);gl();a.addEventListener(gapi.ka.Db.yf.ol,rl);a.addEventListener(gapi.ka.Db.yf.pl,sl);tl();a=th;for(b=0;b<a.length;b++)c=a.get(b),ml(c,!0)},registerTypes:function(){var a=gapi.ka.Db.Vl;a.im(di,"Block");di.prototype.id=a.If("id");di.prototype.ah=a.If("xmlDom");di.prototype.jf=a.If("relativeX");di.prototype.kf=a.If("relativeY");a.nm(di,di.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Ub.ka.vi.Re({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.uc(function(c){c.error&&ql(a,function(c){b=gapi.Ub.ka.vi.Re({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.uc(function(){})})})}};function vl(){var a=Hc,b=W(a,"chatbox");b&&(il=W(b,"elementId"),jl=W(b,"initText",wl));ul.Bj=W(a,"clientId");dl=W(a,"collabElementId")}
function Mk(a,b){vl();sh=!0;xl(b);gl=function(){a();if(il){var b=Ei.Yc().get(il),d=document.getElementById(il);gapi.ka.Db.Wl.Ol(b,d);d.disabled=!1}};hl=new al(ul);hl.start()}
function xl(a){a.style.background="url("+ch+"progress.gif) no-repeat center center";var b=pd(a),c=dc("div");c.id=ul.authDivElementId;var d=dc("p",null,yl);c.appendChild(d);d=dc("button",null,"Authorize");d.id=ul.Ml;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=pd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function tl(){if(dl){var a;a=dl;a=n(a)?document.getElementById(a):a;hc(a);for(var b=el.Zj(),c=0;c<b.length;c++){var d=b[c],e=dc("img",{src:d.gm||ch+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.tk?" ("+zl+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function rl(){tl()}function sl(){tl()}function ai(a){var b=fl+"-"+a;return Gi.has(b)?ai("-"+a):b};/*

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
function Al(a,b){var c;if(b){var d=this;c=function(a){a=Bl.call(d,a);null!==a&&b.call(d,a);return a}}else c=Bl;this.Wg=F("tspan",{},null);this.Wg.appendChild(document.createTextNode("\u00b0"));Al.i.constructor.call(this,a,c)}q(Al,rk);Al.prototype.clone=function(){return new Al(this.Ca(),this.Aa)};
Al.prototype.rf=function(){Al.i.rf.call(this,Gb||Ib||Kb);var a=If;if(a.firstChild){var a=F("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"100px",width:"100px"},a),b=F("circle",{cx:50,cy:50,r:49,"class":"blocklyAngleCircle"},a);this.Dd=F("path",{"class":"blocklyAngleGauge"},a);this.We=F("line",{x1:50,y1:50,"class":"blocklyAngleLine"},a);for(var c=0;360>c;c+=15)F("line",{x1:99,y1:50,x2:99-(0==c%
45?10:5),y2:50,"class":"blocklyAngleMarks",transform:"rotate("+c+", 50, 50)"},a);a.style.marginLeft="-35px";G(a,"click",this,Gf);G(b,"mousemove",this,this.ti);G(this.Dd,"mousemove",this,this.ti);Cl(this)}};Al.prototype.ti=function(a){var b=this.Dd.ownerSVGElement.getBoundingClientRect(),c=a.clientX-b.left-50;a=a.clientY-b.top-50;b=Math.atan(-a/c);isNaN(b)||(b=180*b/Math.PI,0>c?b+=180:0<a&&(b+=360),b=15*Math.round(b/15),360<=b&&(b-=360),b=String(b),sk.value=b,this.X(b))};
Al.prototype.X=function(a){Al.i.X.call(this,a);this.Y&&(Cl(this),E?this.Y.insertBefore(this.Wg,this.Y.firstChild):this.Y.appendChild(this.Wg),this.kd.width=0)};
function Cl(a){if(a.Dd){var b;b=Number(a.Ca())*Math.PI/180;if(isNaN(b))a.Dd.setAttribute("d","M 50, 50"),a.We.setAttribute("x2",50),a.We.setAttribute("y2",50);else{var c=50+49*Math.cos(b),d=50+-49*Math.sin(b);a.Dd.setAttribute("d","M 50, 50 h 49 A 49,49 0 "+(b>Math.PI?1:0)+" 0 "+c+","+d+" z");a.We.setAttribute("x2",c);a.We.setAttribute("y2",d)}}}function Bl(a){a=wk(a);null!==a&&(a%=360,0>a&&(a+=360),a=String(a));return a};/*

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
var ch="https://blockly-demo.appspot.com/static/media/",ah=64,bh=92,dh="sprites.png",Mh=[,2,1,4,3],Vk=Object.create(null),P=null,I=!1,Jh=null,Kh=null,bj=5,Th=20,Ph=250,Qj=30,z=null,Dl=null,$c=0,El=null;function zi(){return{width:Bc.th,height:Bc.sh}}function Rj(){var a=Bc,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.th!=c&&(a.setAttribute("width",c+"px"),a.th=c);a.sh!=b&&(a.setAttribute("height",b+"px"),a.sh=b);z.ic&&z.ic.resize()}
function Qk(a){Rj();Zi();Yf();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!I&&P&&b&&wh();a.target==Bc&&Zc(a)?Fl(a):(I||b)&&z.ic&&(z.Vf=!0,z.Rg=a.clientX,z.Sg=a.clientY,z.el=z.$b(),z.gl=z.scrollX,z.hl=z.scrollY,"mouseup"in qk&&(El=G(document,"mouseup",null,Tk)),Nc=G(document,"mousemove",null,Gl))}function Tk(){Xg(Vj.OPEN);z.Vf=!1;El&&(H(El),El=null);Nc&&(H(Nc),Nc=null)}
function Gl(a){if(z.Vf){oh();var b=z.el,c=z.gl+(a.clientX-z.Rg),d=z.hl+(a.clientY-z.Sg),c=Math.min(c,-b.Jb),d=Math.min(d,-b.lb),c=Math.max(c,b.ea-b.Jb-b.Tc),d=Math.max(d,b.ra-b.lb-b.Sa);z.ic.set(-c-b.Jb,-d-b.lb);a.stopPropagation()}}
function Sk(a){if(!Wg(a))if(27==a.keyCode)Yf();else if(8==a.keyCode||46==a.keyCode)try{P&&P.Uc&&!I&&(Yf(),P.j(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(P&&P.Uc&&!I&&P.Cb&&!I&&P.s==z&&(Yf(),67==a.keyCode?Hl():88==a.keyCode&&(Hl(),P.j(!0,!0))),86==a.keyCode&&Dl){a=z;var b=Dl;if(!(b.getElementsByTagName("block").length>=Tc(a))){var c=Eg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){E&&(d=-d);do for(var e=!1,g=a.Yb(),
h=0,k;k=g[h];h++)k=k.W(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=E?d-Th:d+Th,b+=2*Th,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function Zi(){Nj&&(H(Nj),Nj=null);Oj&&(H(Oj),Oj=null);var a=P;if(2==$c&&a){var b=a.W();Wh(a,b.x-a.Oi,b.y-a.Pi);delete a.ze;ik(a,!1);a.C();eg(a.Ja,Ph,a);Zg(window,"resize");a.s.nb()}$c=0;Xg(Vj.OPEN);aj()}function Hl(){var a=P,b=zg(a);Lg(b);a=a.W();b.setAttribute("x",E?-a.x:a.x);b.setAttribute("y",a.y);Dl=b}
function Fl(a){if(!I){var b=[];if(Ec){for(var c=!1,d=!1,e=Rc(z,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Ag(h);d={enabled:d};d.text=Il;d.kb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.Jc.bind(c,!0),a),c=Ag(c),a+=10};b.push(d);c={enabled:c};c.text=Jl;c.kb=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.Jc.bind(c,!1),a),c=Ag(c),a+=10};b.push(c)}Mj.show(a,b)}}function Rk(a){Wg(a)||a.preventDefault()}
function Yf(a){vi();Gf();!a&&z.ya&&z.ya.O&&z.ya.O.vd&&z.ya.ce.Lc(null)}function oh(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function Wg(a){return"textarea"==a.target.type||"text"==a.target.type}
function Uk(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(Vk[b]=c)}}function Tj(a,b){var c=Vk[a];c&&(c=Qb&&9===Qb||Kb||Ib?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Nk(){var a=zi();z.ya&&(a.width-=z.ya.width);var b=a.width-O,c=a.height-O;try{var d=z.R.getBBox()}catch(e){return null}if(z.ic)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!E&&z.ya&&(d=z.ya.width);return{ra:a.height,ea:a.width,Sa:c-h,Tc:b-g,lc:-z.scrollY,bb:-z.scrollX,lb:h,Jb:g,Ra:0,Qa:d}}
function Ok(a){if(!z.ic)throw"Attempt to set main workspace scroll without scrollbars.";var b=Nk();ga(a.x)&&(z.scrollX=-b.Tc*a.x-b.Jb);ga(a.y)&&(z.scrollY=-b.Sa*a.y-b.lb);a="translate("+(z.scrollX+b.Qa)+","+(z.scrollY+b.Ra)+")";z.R.setAttribute("transform",a);z.ld.setAttribute("transform",a)}function Sj(a){a()}function Pk(a){return G(z.R,"blocklyWorkspaceChange",null,a)}l.Blockly||(l.Blockly={});l.Blockly.getMainWorkspace=function(){return z};l.Blockly.addChangeListener=Pk;
l.Blockly.removeChangeListener=function(a){H(a)};var Yj="Add Comment",yl="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",tk="Change value:",wl="Chat with your collaborator by typing in this box!",Il="Collapse Blocks",ck="Collapse Block",fk="Delete Block",gk="Delete %1 Blocks",ek="Disable Block",Wj="Duplicate",dk="Enable Block",Jl="Expand Blocks",bk="Expand Block",Zj="External Inputs",hk="Help",ak="Inline Inputs",zl="Me",Xf="New variable...",$f="New variable name:",Xj="Remove Comment",Wf="Rename variable...",
Zf="Rename all '%1' variables to:";function Kl(a,b){var c;c=a.className;for(var d=c=n(c)&&c.match(/\S+/g)||[],e=ab(arguments,1),g=0;g<e.length;g++)Xa(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var Ll={en:"English"},Ml=[],Nl=window.BlocklyGamesLang,Ol=window.BlocklyGamesLanguages,Pl=!!window.location.pathname.match(/\.html$/);function Ql(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var D,Rl=Number(Ql("level","NaN"));D=isNaN(Rl)?1:Math.min(Math.max(1,Rl),10);
function Sl(){document.head.parentElement.setAttribute("dir",-1!=Ml.indexOf(Nl)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",Nl);for(var a=[],b=0;b<Ol.length;b++){var c=Ol[b];a.push([Ll[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==Nl&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!Tl(b),a&&c&&Kl(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(Ul,1)}function Tl(a){var b=Vl,c;try{c=window.localStorage[b+a]}catch(d){}return c}function Wl(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function Xl(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function Ul(){if(!Pl){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var X={Wc:null,n:function(){Sl();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=Wl("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=Wl("Games_linkAlert"),BlocklyStorage.HASH_ERROR=Wl("Games_hashError"),BlocklyStorage.XML_ERROR=Wl("Games_xmlError"),BlocklyStorage.alert=qc.il,a&&Xl(a,BlocklyStorage.link),b&&Xl(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
X.Aj,!0)},cm:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Ik(a,{media:"media/",readOnly:!0,lm:-1!=Ml.indexOf(Nl),scrollbars:!1});a=Ql("xml","");X.Kg("<xml>"+a+"</xml>")},xk:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.ki}catch(d){}c&&delete window.sessionStorage.ki;var e=Tl(D),g=b&&Tl(D-1);(c=c||
e||g||a)&&X.Kg(c)}},Kg:function(a){X.Wc?X.Wc.setValue(a,-1):(a=Cg(a),Dg(z,a))},Zk:function(){if(void 0!=typeof zc&&window.localStorage){var a=Vl+D;if(X.Wc)var b=X.Wc.getValue();else b=yg(z),b=Bg(b);window.localStorage[a]=b}},mg:function(){window.location=(Pl?"index.html":"./")+"?lang="+Nl},Aj:function(){if(window.sessionStorage){if(X.Wc)var a=X.Wc.getValue();else a=yg(z),a=Bg(a);window.sessionStorage.ki=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),
b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},Ne:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}vh(a)},qm:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},yb:function(a){if("click"==a.type&&"touchend"==X.yb.Bg&&X.yb.Ag+2E3>Date.now()||X.yb.Bg==a.type&&X.yb.Ag+400>Date.now())return a.preventDefault(),
a.stopPropagation(),!0;X.yb.Bg=a.type;X.yb.Ag=Date.now();return!1}};X.yb.Bg=null;X.yb.Ag=0;X.ok=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
X.pk=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=X;X.setCode=X.Kg;var Y={Ac:!1,Oh:null,xe:null,Mc:function(a,b,c,d,e,g){function h(){Y.Ac&&(k.style.visibility="visible",k.style.zIndex=10,m.style.visibility="hidden")}Y.Ac&&Y.Ma(!1);Yf(!0);Y.Ac=!0;Y.Oh=b;Y.xe=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var m=document.getElementById("dialogBorder"),t;for(t in e)k.style[t]=e[t];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Y.Qf=G(d,"mousedown",
null,Y.Qj));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Y.Xe(b,!1,.2),Y.Xe(k,!0,.8),setTimeout(h,175)):h()},Ph:0,Qh:0,Qj:function(a){Y.Tf();if(!Zc(a)){var b=document.getElementById("dialog");Y.Ph=b.offsetLeft-a.clientX;Y.Qh=b.offsetTop-a.clientY;Y.Sf=G(document,"mouseup",null,Y.Tf);Y.Rf=G(document,"mousemove",null,Y.Rj);a.stopPropagation()}},Rj:function(a){var b=document.getElementById("dialog"),c=Y.Ph+a.clientX;a=Y.Qh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},Tf:function(){Y.Sf&&(H(Y.Sf),Y.Sf=null);Y.Rf&&(H(Y.Rf),Y.Rf=null)},Ma:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Y.Ac){Y.Tf();Y.Qf&&(H(Y.Qf),Y.Qf=null);Y.Ac=!1;Y.xe&&Y.xe();Y.xe=null;var c=!1===a?null:Y.Oh;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Y.Xe(a,!1,.8),Y.Xe(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Xe:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Y.Yj(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},Yj:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Hf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},il:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Y.Mc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.Qi);Y.Mi()},mh:function(){if(!Tl(D))if(Y.Ac||0!=di.Yl)setTimeout(Y.mh,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Y.Ma,!0);b.addEventListener("touchend",Y.Ma,!0);b=document.getElementById("abortOk");b.addEventListener("click",X.mg,!0);b.addEventListener("touchend",X.mg,
!0);Y.Mc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.lh,!0)});document.body.addEventListener("keydown",Y.lh,!0)}},dm:function(){var a=document.getElementById("dialogDone");z&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("containerCode");a.removeChild(b);10>D?Wl("Games_nextLevel").replace("%1",D+1):Wl("Games_finalLevel");b=document.getElementById("doneCancel");b.addEventListener("click",
Y.Ma,!0);b.addEventListener("touchend",Y.Ma,!0);b=document.getElementById("doneOk");1==D&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));2==D&&(b.addEventListener("click",function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));3==D&&(b.addEventListener("click",function(){window.open("/bird?lang=en?level=3",
"_self")},!0),b.addEventListener("touchend",function(){window.open("/bird?lang=en?level=3","_self")},!0));4==D&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=5","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=5","_self")},!0));5==D&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=6","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=6","_self")},!0));6==D&&(b.addEventListener("click",
function(){window.open("/maze?lang=en?level=10","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=10","_self")},!0));Y.Mc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Sc,!0)});document.body.addEventListener("keydown",Y.Sc,!0)}};
window.Vc=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.Vc.rk||window.Vc.uk){var b=document.createElement("a");b.href=a;void 0!==b.Sj&&(b.Sj="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.Vc.rk=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.Vc.uk=-1<navigator.userAgent.toLowerCase().indexOf("safari");
Y.Xl=function(){var a=document.getElementById("dialogDone");z&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Y.Ma,!0);b.addEventListener("touchend",Y.Ma,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"OK";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{Ok:function(a){a=a.toDataURL("image/png");window.Vc(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{Ok:function(a){a=a.toDataURL("image/png");window.Vc(a)}})},!0);Y.Mc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Sc,!0)});document.body.addEventListener("keydown",Y.Sc,!0)};
Y.em=function(){alert("login");document.getElementById("login")};
Y.Dj=function(){var a=document.getElementById("dialogDone");if(z){document.getElementById("dialogLinesText").textContent="";var b=10>D?Wl("Games_nextLevel").replace("%1",D+1):Wl("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==Vl?(c.innerHTML="<p>Grace is a superhero. <br/>Dress her up for her first mission.</p>",c=document.getElementById("Games_nextLevel"),c.parentElement.removeChild(c)):"turtle"==Vl&&1==D?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/pants.svg' height='75px' border=0/><img class='featureUnlocked' src='./movie/long_skirt.svg' height='75px' border=0/>":
"turtle"==Vl&&2==D?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/shoe.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hightop.svg' width='80px' border=0/>":"bird"==Vl&&3==D?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/baseball.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/retro_glasses.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/necklace.svg' width='80px' border=0/>":
"maze"==Vl&&5==D?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/briefcase.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/purse.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/backpack.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/fancy_purse.svg' width='80px' border=0/>":"maze"==Vl&&6==D?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/dress.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/crown.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/wand.svg' width='80px' border=0/>":
"maze"==Vl&&10==D&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/cape.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/shield.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask2.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/gloves.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/logo.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/belt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/word.svg' width='80px' border=0/>")}c=
document.getElementById("doneCancel");c.addEventListener("click",Y.Ma,!0);c.addEventListener("touchend",Y.Ma,!0);c=document.getElementById("doneOk");c.addEventListener("click",X.tg,!0);c.addEventListener("touchend",X.tg,!0);Y.Mc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Sc,!0)});document.body.addEventListener("keydown",Y.Sc,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==Vl&&1==D&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};
Y.Nh=function(a){!Y.Ac||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Y.Ma(!0),a.stopPropagation(),a.preventDefault())};Y.Mi=function(){document.body.addEventListener("keydown",Y.Nh,!0)};Y.Qi=function(){document.body.removeEventListener("keydown",Y.Nh,!0)};Y.Sc=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.Ma(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.tg()};
Y.lh=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.Ma(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.mg()};window.BlocklyDialogs=Y;Y.hideDialog=Y.Ma;/*

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
var V=new xk("JavaScript");Bk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
V.me=0;V.rd=1;V.Fl=1;V.Gb=2;V.Dl=3;V.Al=3;V.fj=4;V.wl=4;V.Hl=4;V.jh=4;V.Gl=4;V.Il=4;V.Bl=4;V.hj=5;V.oe=5;V.sd=5;V.fh=6;V.ij=6;V.yl=7;V.ih=8;V.Cl=8;V.El=8;V.gh=9;V.vl=10;V.zl=11;V.xl=12;V.hh=13;V.gj=14;V.ne=15;V.ul=16;V.Sb=17;V.Hb=99;V.n=function(a){V.xd=Object.create(null);V.Wh=Object.create(null);V.ge?V.ge.reset():V.ge=new Oc(V.zf);var b=[];a=Pf(a);for(var c=0;c<a.length;c++)b[c]="var "+V.ge.getName(a[c],"VARIABLE")+";";V.xd.variables=b.join("\n")};
V.finish=function(a){var b=[],c;for(c in V.xd)b.push(V.xd[c]);return b.join("\n\n")+"\n\n\n"+a};V.Fi=function(a){return a+";\n"};V.hm=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
V.Gi=function(a,b){var c="";if(!a.M||!a.M.p){var d=a.Ee();d&&(c+=yk(d,"// ")+"\n");for(var e=0;e<a.U.length;e++)if(1==a.U[e].type){var g=N(a.U[e].o);if(g){for(var d=[],g=g.fb(),h=0;h<g.length;h++){var k=g[h].Ee();k&&d.push(k)}d.length&&d.push("");(d=d.join("\n"))&&(c+=yk(d,"// "))}}}e=zk(V,a.F&&N(a.F));return c+b+e};/*

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
V.zk={};V.math_number=function(a){return[parseFloat(S(a,"NUM")),V.me]};V.math_arithmetic=function(a){var b={ADD:[" + ",V.fh],MINUS:[" - ",V.ij],MULTIPLY:[" * ",V.hj],DIVIDE:[" / ",V.oe],POWER:[null,V.Sb]}[S(a,"OP")],c=b[0],b=b[1],d=U(a,"A",b)||"0";a=U(a,"B",b)||"0";return c?[d+c+a,b]:["Math.pow("+d+", "+a+")",V.Gb]};
V.math_single=function(a){var b=S(a,"OP"),c;if("NEG"==b)return a=U(a,"NUM",V.jh)||"0","-"==a[0]&&(a=" "+a),["-"+a,V.jh];a="SIN"==b||"COS"==b||"TAN"==b?U(a,"NUM",V.oe)||"0":U(a,"NUM",V.Hb)||"0";switch(b){case "ABS":c="Math.abs("+a+")";break;case "ROOT":c="Math.sqrt("+a+")";break;case "LN":c="Math.log("+a+")";break;case "EXP":c="Math.exp("+a+")";break;case "POW10":c="Math.pow(10,"+a+")";break;case "ROUND":c="Math.round("+a+")";break;case "ROUNDUP":c="Math.ceil("+a+")";break;case "ROUNDDOWN":c="Math.floor("+
a+")";break;case "SIN":c="Math.sin("+a+" / 180 * Math.PI)";break;case "COS":c="Math.cos("+a+" / 180 * Math.PI)";break;case "TAN":c="Math.tan("+a+" / 180 * Math.PI)"}if(c)return[c,V.Gb];switch(b){case "LOG10":c="Math.log("+a+") / Math.log(10)";break;case "ASIN":c="Math.asin("+a+") / Math.PI * 180";break;case "ACOS":c="Math.acos("+a+") / Math.PI * 180";break;case "ATAN":c="Math.atan("+a+") / Math.PI * 180";break;default:throw"Unknown math operator: "+b;}return[c,V.oe]};
V.math_constant=function(a){return{PI:["Math.PI",V.rd],E:["Math.E",V.rd],GOLDEN_RATIO:["(1 + Math.sqrt(5)) / 2",V.oe],SQRT2:["Math.SQRT2",V.rd],SQRT1_2:["Math.SQRT1_2",V.rd],INFINITY:["Infinity",V.me]}[S(a,"CONSTANT")]};
V.math_number_property=function(a){var b=U(a,"NUMBER_TO_CHECK",V.sd)||"0",c=S(a,"PROPERTY"),d;if("PRIME"==c)return d=Ck("math_isPrime",["function "+V.Rb+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;","  }","  // False if n is NaN, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
"  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,V.Gb];switch(c){case "EVEN":d=b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=U(a,"DIVISOR",V.sd)||"0",d=b+" % "+a+" == 0"}return[d,V.gh]};
V.math_change=function(a){var b=U(a,"DELTA",V.fh)||"0";a=V.ge.getName(S(a,"VAR"),"VARIABLE");return a+" = (typeof "+a+" == 'number' ? "+a+" : 0) + "+b+";\n"};V.math_round=V.math_single;V.math_trig=V.math_single;
V.math_on_list=function(a){var b=S(a,"OP");switch(b){case "SUM":a=U(a,"LIST",V.rd)||"[]";a+=".reduce(function(x, y) {return x + y;})";break;case "MIN":a=U(a,"LIST",V.Sb)||"[]";a="Math.min.apply(null, "+a+")";break;case "MAX":a=U(a,"LIST",V.Sb)||"[]";a="Math.max.apply(null, "+a+")";break;case "AVERAGE":b=Ck("math_mean",["function "+V.Rb+"(myList) {","  return myList.reduce(function(x, y) {return x + y;}) / myList.length;","}"]);a=U(a,"LIST",V.Hb)||"[]";a=b+"("+a+")";break;case "MEDIAN":b=Ck("math_median",
["function "+V.Rb+"(myList) {","  var localList = myList.filter(function (x) {return typeof x == 'number';});","  if (!localList.length) return null;","  localList.sort(function(a, b) {return b - a;});","  if (localList.length % 2 == 0) {","    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;","  } else {","    return localList[(localList.length - 1) / 2];","  }","}"]);a=U(a,"LIST",V.Hb)||"[]";a=b+"("+a+")";break;case "MODE":b=Ck("math_modes",["function "+V.Rb+"(values) {",
"  var modes = [];","  var counts = [];","  var maxCount = 0;","  for (var i = 0; i < values.length; i++) {","    var value = values[i];","    var found = false;","    var thisCount;","    for (var j = 0; j < counts.length; j++) {","      if (counts[j][0] === value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.push([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }",
"  for (var j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.push(counts[j][0]);","    }","  }","  return modes;","}"]);a=U(a,"LIST",V.Hb)||"[]";a=b+"("+a+")";break;case "STD_DEV":b=Ck("math_standard_deviation",["function "+V.Rb+"(numbers) {","  var n = numbers.length;","  if (!n) return null;","  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;","  var variance = 0;","  for (var j = 0; j < n; j++) {","    variance += Math.pow(numbers[j] - mean, 2);",
"  }","  variance = variance / n;","  return Math.sqrt(variance);","}"]);a=U(a,"LIST",V.Hb)||"[]";a=b+"("+a+")";break;case "RANDOM":b=Ck("math_random_list",["function "+V.Rb+"(list) {","  var x = Math.floor(Math.random() * list.length);","  return list[x];","}"]);a=U(a,"LIST",V.Hb)||"[]";a=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[a,V.Gb]};V.math_modulo=function(a){var b=U(a,"DIVIDEND",V.sd)||"0";a=U(a,"DIVISOR",V.sd)||"0";return[b+" % "+a,V.sd]};
V.math_constrain=function(a){var b=U(a,"VALUE",V.Sb)||"0",c=U(a,"LOW",V.Sb)||"0";a=U(a,"HIGH",V.Sb)||"Infinity";return["Math.min(Math.max("+b+", "+c+"), "+a+")",V.Gb]};V.math_random_int=function(a){var b=U(a,"FROM",V.Sb)||"0";a=U(a,"TO",V.Sb)||"0";return[Ck("math_random_int",["function "+V.Rb+"(a, b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    var c = a;","    a = b;","    b = c;","  }","  return Math.floor(Math.random() * (b - a + 1) + a);","}"])+"("+b+", "+a+")",V.Gb]};
V.math_random_float=function(){return["Math.random()",V.Gb]};/*

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
V.yk={};V.controls_if=function(a){for(var b=0,c=U(a,"IF"+b,V.Hb)||"false",d=Ak(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.ta;b++)c=U(a,"IF"+b,V.Hb)||"false",d=Ak(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.Ta&&(d=Ak(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};V.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[S(a,"OP")],c="=="==b||"!="==b?V.gh:V.ih,d=U(a,"A",c)||"0";a=U(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
V.logic_operation=function(a){var b="AND"==S(a,"OP")?"&&":"||",c="&&"==b?V.hh:V.gj,d=U(a,"A",c);a=U(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};V.logic_negate=function(a){var b=V.fj;return["!"+(U(a,"BOOL",b)||"true"),b]};V.logic_boolean=function(a){return["TRUE"==S(a,"BOOL")?"true":"false",V.me]};V.logic_null=function(){return["null",V.me]};
V.logic_ternary=function(a){var b=U(a,"IF",V.ne)||"false",c=U(a,"THEN",V.ne)||"null";a=U(a,"ELSE",V.ne)||"null";return[b+" ? "+c+" : "+a,V.ne]};/*

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
J.yk={};
J.controls_if={n:function(){this.L="https://github.com/google/blockly/wiki/IfElse";this.D(210);R(T(this,"IF0").P("Boolean"),"if");R(Li(this,3,"DO0"),"do");bi(this,!0);ci(this,!0);this.Ji(new Ch(["controls_if_elseif","controls_if_else"]));var a=this;this.B(function(){if(a.ta||a.Ta){if(!a.ta&&a.Ta)return"If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";if(a.ta&&!a.Ta)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";if(a.ta&&
a.Ta)return"If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements."}else return"If a value is true, then do some statements.";return""});this.Ta=this.ta=0},$e:function(){if(!this.ta&&!this.Ta)return null;var a=document.createElement("mutation");this.ta&&a.setAttribute("elseif",this.ta);this.Ta&&a.setAttribute("else",1);return a},Uf:function(a){this.ta=
parseInt(a.getAttribute("elseif"),10);this.Ta=parseInt(a.getAttribute("else"),10);for(a=1;a<=this.ta;a++)R(T(this,"IF"+a).P("Boolean"),"else if"),R(Li(this,3,"DO"+a),"do");this.Ta&&R(Li(this,3,"ELSE"),"else")},Nj:function(a){var b=dd(a,"controls_if_if");b.Na();for(var c=Jg(b,"STACK").o,d=1;d<=this.ta;d++){var e=dd(a,"controls_if_elseif");e.Na();Kg(c,e.G);c=e.F}this.Ta&&(a=dd(a,"controls_if_else"),a.Na(),Kg(c,a.G));return b},Cj:function(a){this.Ta&&Ni(this,"ELSE");this.Ta=0;for(var b=this.ta;0<b;b--)Ni(this,
"IF"+b),Ni(this,"DO"+b);this.ta=0;for(a=Oi(a,"STACK");a;){switch(a.type){case "controls_if_elseif":this.ta++;var b=R(T(this,"IF"+this.ta).P("Boolean"),"else if"),c=Li(this,3,"DO"+this.ta);R(c,"do");a.Yi&&Kg(b.o,a.Yi);a.$d&&Kg(c.o,a.$d);break;case "controls_if_else":this.Ta++;b=Li(this,3,"ELSE");R(b,"else");a.$d&&Kg(b.o,a.$d);break;default:throw"Unknown block type.";}a=a.F&&N(a.F)}},Gg:function(a){a=Oi(a,"STACK");for(var b=1;a;){switch(a.type){case "controls_if_elseif":var c=Jg(this,"IF"+b),d=Jg(this,
"DO"+b);a.Yi=c&&c.o.p;a.$d=d&&d.o.p;b++;break;case "controls_if_else":d=Jg(this,"ELSE");a.$d=d&&d.o.p;break;default:throw"Unknown block type.";}a=a.F&&N(a.F)}}};J.controls_if_if={n:function(){this.D(210);R(Mi(this),"if");Li(this,3,"STACK");this.B("Add, remove, or reorder sections to reconfigure this if block.");this.contextMenu=!1}};J.controls_if_elseif={n:function(){this.D(210);R(Mi(this),"else if");bi(this,!0);ci(this,!0);this.B("Add a condition to the if block.");this.contextMenu=!1}};
J.controls_if_else={n:function(){this.D(210);R(Mi(this),"else");bi(this,!0);this.B("Add a final, catch-all condition to the if block.");this.contextMenu=!1}};
J.logic_compare={n:function(){var a=E?[["=","EQ"],["\u2260","NEQ"],[">","LT"],["\u2265","LTE"],["<","GT"],["\u2264","GTE"]]:[["=","EQ"],["\u2260","NEQ"],["<","LT"],["\u2264","LTE"],[">","GT"],["\u2265","GTE"]];this.L="https://en.wikipedia.org/wiki/Inequality_(mathematics)";this.D(210);Q(this,"Boolean");T(this,"A");R(T(this,"B"),new M(a),"OP");Gg(this,!0);var b=this;this.B(function(){return{EQ:"Return true if both inputs equal each other.",NEQ:"Return true if both inputs are not equal to each other.",
LT:"Return true if the first input is smaller than the second input.",LTE:"Return true if the first input is smaller than or equal to the second input.",GT:"Return true if the first input is greater than the second input.",GTE:"Return true if the first input is greater than or equal to the second input."}[S(b,"OP")]})}};
J.logic_operation={n:function(){this.L="https://github.com/google/blockly/wiki/Logic#logical-operations";this.D(210);Q(this,"Boolean");T(this,"A").P("Boolean");R(T(this,"B").P("Boolean"),new M([["and","AND"],["or","OR"]]),"OP");Gg(this,!0);var a=this;this.B(function(){return{AND:"Return true if both inputs are true.",OR:"Return true if at least one of the inputs is true."}[S(a,"OP")]})}};
J.logic_negate={n:function(){this.L="https://github.com/google/blockly/wiki/Logic#not";this.D(210);Q(this,"Boolean");this.rb("not %1",["BOOL","Boolean",1],1);this.B("Returns true if the input is false. Returns false if the input is true.")}};J.logic_boolean={n:function(){this.L="https://github.com/google/blockly/wiki/Logic#values";this.D(210);Q(this,"Boolean");R(Mi(this),new M([["true","TRUE"],["false","FALSE"]]),"BOOL");this.B("Returns either true or false.")}};
J.logic_null={n:function(){this.L="https://en.wikipedia.org/wiki/Nullable_type";this.D(210);Q(this);R(Mi(this),"null");this.B("Returns null.")}};J.logic_ternary={n:function(){this.L="https://en.wikipedia.org/wiki/%3F:";this.D(210);R(T(this,"IF").P("Boolean"),"test");R(T(this,"THEN"),"if true");R(T(this,"ELSE"),"if false");Q(this);this.B("Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.")}};/*

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
J.zk={};J.math_number={n:function(){this.L="https://en.wikipedia.org/wiki/Number";this.D(230);R(Mi(this),new rk("0",wk),"NUM");Q(this,"Number");this.B("A number.")}};
J.math_arithmetic={n:function(){this.L="https://en.wikipedia.org/wiki/Arithmetic";this.D(230);Q(this,"Number");T(this,"A").P("Number");R(T(this,"B").P("Number"),new M([["+","ADD"],["-","MINUS"],["\u00d7","MULTIPLY"],["\u00f7","DIVIDE"],["^","POWER"]]),"OP");Gg(this,!0);var a=this;this.B(function(){return{ADD:"Return the sum of the two numbers.",MINUS:"Return the difference of the two numbers.",MULTIPLY:"Return the product of the two numbers.",DIVIDE:"Return the quotient of the two numbers.",POWER:"Return the first number raised to the power of the second number."}[S(a,
"OP")]})}};
J.math_single={n:function(){this.L="https://en.wikipedia.org/wiki/Square_root";this.D(230);Q(this,"Number");this.rb("%1 %2",["OP",new M([["square root","ROOT"],["absolute","ABS"],["-","NEG"],["ln","LN"],["log10","LOG10"],["e^","EXP"],["10^","POW10"]])],["NUM","Number",1],1);var a=this;this.B(function(){return{ROOT:"Return the square root of a number.",ABS:"Return the absolute value of a number.",NEG:"Return the negation of a number.",LN:"Return the natural logarithm of a number.",LOG10:"Return the base 10 logarithm of a number.",EXP:"Return e to the power of a number.",
POW10:"Return 10 to the power of a number."}[S(a,"OP")]})}};
J.math_trig={n:function(){this.L="https://en.wikipedia.org/wiki/Trigonometric_functions";this.D(230);Q(this,"Number");R(T(this,"NUM").P("Number"),new M([["sin","SIN"],["cos","COS"],["tan","TAN"],["asin","ASIN"],["acos","ACOS"],["atan","ATAN"]]),"OP");var a=this;this.B(function(){return{SIN:"Return the sine of a degree (not radian).",COS:"Return the cosine of a degree (not radian).",TAN:"Return the tangent of a degree (not radian).",ASIN:"Return the arcsine of a number.",ACOS:"Return the arccosine of a number.",
ATAN:"Return the arctangent of a number."}[S(a,"OP")]})}};J.math_constant={n:function(){this.L="https://en.wikipedia.org/wiki/Mathematical_constant";this.D(230);Q(this,"Number");R(Mi(this),new M([["\u03c0","PI"],["e","E"],["\u03c6","GOLDEN_RATIO"],["sqrt(2)","SQRT2"],["sqrt(\u00bd)","SQRT1_2"],["\u221e","INFINITY"]]),"CONSTANT");this.B("Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).")}};
J.math_number_property={n:function(){this.D(230);T(this,"NUMBER_TO_CHECK").P("Number");var a=new M([["is even","EVEN"],["is odd","ODD"],["is prime","PRIME"],["is whole","WHOLE"],["is positive","POSITIVE"],["is negative","NEGATIVE"],["is divisible by","DIVISIBLE_BY"]],function(a){this.g.Xi("DIVISIBLE_BY"==a)});R(Mi(this),a,"PROPERTY");Gg(this,!0);Q(this,"Boolean");this.B("Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.")},
$e:function(){var a=document.createElement("mutation"),b="DIVISIBLE_BY"==S(this,"PROPERTY");a.setAttribute("divisor_input",b);return a},Uf:function(a){a="true"==a.getAttribute("divisor_input");this.Xi(a)},Xi:function(a){var b=Jg(this,"DIVISOR");a?b||T(this,"DIVISOR").P("Number"):b&&Ni(this,"DIVISOR")}};
J.math_change={n:function(){this.L="https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";this.D(230);this.rb("change %1 by %2",["VAR",new Tf("item")],["DELTA","Number",1],1);bi(this,!0);ci(this,!0);var a=this;this.B(function(){return"Add a number to variable '%1'.".replace("%1",S(a,"VAR"))})},$h:function(){return[S(this,"VAR")]},Uk:function(a,b){var c=S(this,"VAR");a.toLowerCase()==c.toLowerCase()&&ed(this,"VAR").Za(b)}};
J.math_round={n:function(){this.L="https://en.wikipedia.org/wiki/Rounding";this.D(230);Q(this,"Number");R(T(this,"NUM").P("Number"),new M([["round","ROUND"],["round up","ROUNDUP"],["round down","ROUNDDOWN"]]),"OP");this.B("Round a number up or down.")}};
J.math_on_list={n:function(){var a=this;this.L="";this.D(230);Q(this,"Number");var b=new M([["sum of list","SUM"],["min of list","MIN"],["max of list","MAX"],["average of list","AVERAGE"],["median of list","MEDIAN"],["modes of list","MODE"],["standard deviation of list","STD_DEV"],["random item of list","RANDOM"]],function(b){"MODE"==b?a.M.P("Array"):a.M.P("Number")});R(T(this,"LIST").P("Array"),b,"OP");this.B(function(){return{SUM:"Return the sum of all the numbers in the list.",MIN:"Return the smallest number in the list.",
MAX:"Return the largest number in the list.",AVERAGE:"Return the average (arithmetic mean) of the numeric values in the list.",MEDIAN:"Return the median number in the list.",MODE:"Return a list of the most common item(s) in the list.",STD_DEV:"Return the standard deviation of the list.",RANDOM:"Return a random element from the list."}[S(a,"OP")]})}};
J.math_modulo={n:function(){this.L="https://en.wikipedia.org/wiki/Modulo_operation";this.D(230);Q(this,"Number");this.rb("remainder of %1 \u00f7 %2",["DIVIDEND","Number",1],["DIVISOR","Number",1],1);Gg(this,!0);this.B("Return the remainder from dividing the two numbers.")}};
J.math_constrain={n:function(){this.L="https://en.wikipedia.org/wiki/Clamping_%28graphics%29";this.D(230);Q(this,"Number");this.rb("constrain %1 low %2 high %3",["VALUE","Number",1],["LOW","Number",1],["HIGH","Number",1],1);Gg(this,!0);this.B("Constrain a number to be between the specified limits (inclusive).")}};
J.math_random_int={n:function(){this.L="https://en.wikipedia.org/wiki/Random_number_generation";this.D(230);Q(this,"Number");this.rb("random integer from %1 to %2",["FROM","Number",1],["TO","Number",1],1);Gg(this,!0);this.B("Return a random integer between the two specified limits, inclusive.")}};J.math_random_float={n:function(){this.L="https://en.wikipedia.org/wiki/Random_number_generation";this.D(230);Q(this,"Number");R(Mi(this),"random fraction");this.B("Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).")}};J.bird_noWorm={n:function(){this.D(330);R(Mi(this),Wl("Bird_noWorm"));Q(this,"Boolean");this.B(Wl("Bird_noWormTooltip"))}};V.bird_noWorm=function(){return["noWorm()",V.Gb]};J.bird_direction={n:function(){this.D(290);R(R(Mi(this),Wl("Bird_direction")),new Al("90"),"ANGLE");bi(this,!0);this.B(Wl("Bird_directionTooltip"))}};V.bird_direction=function(a){return"direction("+parseFloat(S(a,"ANGLE"))+", 'block_id_"+a.id+"');\n"};
J.bird_position={n:function(){this.D(330);R(Mi(this),new M([["x","X"],["y","Y"]]),"XY");Q(this,"Number");this.B(Wl("Bird_positionTooltip"))}};V.bird_position=function(a){return["get"+S(a,"XY").charAt(0)+"()",V.Gb]};
J.bird_compare={n:function(){this.L="https://en.wikipedia.org/wiki/Inequality_(mathematics)";var a=E?[[">","LT"],["<","GT"]]:[["<","LT"],[">","GT"]];this.D(210);Q(this,"Boolean");T(this,"A").P("Number");R(T(this,"B").P("Number"),new M(a),"OP");Gg(this,!0);var b=this;this.B(function(){return{rl:"Return true if the first input is smaller than the second input.",ql:"Return true if the first input is greater than the second input."}[S(b,"OP")]})}};
V.bird_compare=function(a){var b="LT"==S(a,"OP")?"<":">",c=V.ih,d=U(a,"A",c)||"0";a=U(a,"B",c)||"0";return[d+" "+b+" "+a,c]};J.bird_and={n:function(){this.L="https://github.com/google/blockly/wiki/Logic#logical-operations";this.D(210);Q(this,"Boolean");T(this,"A").P("Boolean");R(T(this,"B").P("Boolean"),"and","AND");Gg(this,!0);this.B("Return true if both inputs are true.")}};
V.bird_and=function(a){var b=V.hh,c=U(a,"A",b);a=U(a,"B",b);c||a?(c||(c="true"),a||(a="true")):a=c="false";return[c+" && "+a,b]};J.bird_ifElse={n:function(){this.L="https://github.com/google/blockly/wiki/IfElse";this.D(210);R(T(this,"CONDITION"),"if").P("Boolean");R(Li(this,3,"DO"),"do");R(Li(this,3,"ELSE"),"else");Hg(this,!1);this.B("If a value is true, then do the first block of statements. Otherwise, do the second block of statements.")}};
V.bird_ifElse=function(a){var b=U(a,"CONDITION",V.Hb)||"false",c=Ak(a,"DO");a=Ak(a,"ELSE");return"if ("+b+") {\n"+c+"} else {\n"+a+"}\n"};J.controls_if.Fk=J.controls_if.n;J.controls_if.n=function(){this.Fk();bi(this,!1);ci(this,!1);Hg(this,!1)};function Z(a,b,c,d){this.je=a;this.ke=b;this.x1=c;this.y1=d}Z.prototype.clone=function(){return new Z(this.je,this.ke,this.x1,this.y1)};var Vl="bird";X.tg=function(){window.location=window.location.protocol+"//"+window.location.host+"/movie?lang="+Nl+"&level=4"};
var Yl=[void 0,{start:new y(20,20),Eb:90,cb:new y(50,50),Wa:new y(80,80),za:[]},{start:new y(20,20),Eb:0,cb:new y(80,20),Wa:new y(80,80),za:[new Z(0,50,60,50)]},{start:new y(20,70),Eb:270,cb:new y(50,20),Wa:new y(80,70),za:[new Z(50,50,50,100)]},{start:new y(20,80),Eb:0,cb:new y(50,80),Wa:new y(80,20),za:[new Z(0,0,65,65)]},{start:new y(80,80),Eb:270,cb:new y(50,20),Wa:new y(20,20),za:[new Z(0,100,65,35)]},{start:new y(20,40),Eb:0,cb:new y(80,20),Wa:new y(20,80),za:[new Z(0,59,50,59)]},{start:new y(80,
80),Eb:180,cb:new y(80,20),Wa:new y(20,20),za:[new Z(0,70,40,70),new Z(70,50,100,50)]},{start:new y(20,25),Eb:90,cb:new y(80,25),Wa:new y(80,75),za:[new Z(50,0,50,25),new Z(75,50,100,50)]},{start:new y(80,70),Eb:180,cb:new y(20,20),Wa:new y(80,20),za:[new Z(0,69,31,100),new Z(40,50,71,0),new Z(80,50,100,50)]},{start:new y(20,20),Eb:90,cb:new y(80,50),Wa:new y(20,20),za:[new Z(40,60,60,60),new Z(40,60,60,30),new Z(60,30,100,30)]}][D],Zl=[],$l=1;
function am(){var a=document.getElementById("svgBird");Yl.za.push(new Z(-5,-5,-5,105));Yl.za.push(new Z(-5,105,105,105));Yl.za.push(new Z(105,105,105,-5));Yl.za.push(new Z(105,-5,-5,-5));for(var b=0;b<Yl.za.length;b++){var c=Yl.za[b],d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("x1",c.je/100*400);d.setAttribute("y1",400*(1-c.ke/100));d.setAttribute("x2",c.x1/100*400);d.setAttribute("y2",400*(1-c.y1/100));d.setAttribute("stroke","#CCB");d.setAttribute("stroke-width",
10);d.setAttribute("stroke-linecap","round");a.appendChild(d)}b=document.createElementNS("http://www.w3.org/2000/svg","image");b.setAttribute("id","nest");b.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","bird/robot.png");b.setAttribute("height",80);b.setAttribute("width",80);a.appendChild(b);b=document.createElementNS("http://www.w3.org/2000/svg","image");b.setAttribute("id","worm");b.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","bird/magic_wand.png");b.setAttribute("height",
60);b.setAttribute("width",60);a.appendChild(b);b=document.createElementNS("http://www.w3.org/2000/svg","clipPath");b.setAttribute("id","birdClipPath");c=document.createElementNS("http://www.w3.org/2000/svg","rect");c.setAttribute("id","clipRect");c.setAttribute("width",200);c.setAttribute("height",200);b.appendChild(c);a.appendChild(b);b=document.createElementNS("http://www.w3.org/2000/svg","image");b.setAttribute("id","bird");b.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","bird/superheros.png");
b.setAttribute("height",800);b.setAttribute("width",2400);b.setAttribute("clip-path","url(#birdClipPath)");a.appendChild(b);b=document.createElementNS("http://www.w3.org/2000/svg","rect");b.setAttribute("class","edges");b.setAttribute("width",400);b.setAttribute("height",400);a.appendChild(b);for(var b=3<D,c=4<D,d=1,e=.1;.9>e;e+=.1){if(b){var g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("class","edges");g.setAttribute("x1",400*e);g.setAttribute("y1",400);g.setAttribute("x2",
400*e);g.setAttribute("y2",400-9*d);a.appendChild(g)}c&&(g=document.createElementNS("http://www.w3.org/2000/svg","line"),g.setAttribute("class","edges"),g.setAttribute("x1",0),g.setAttribute("y1",400*e),g.setAttribute("x2",9*d),g.setAttribute("y2",400*e),a.appendChild(g));2==d&&(b&&(g=document.createElementNS("http://www.w3.org/2000/svg","text"),g.setAttribute("class","edgeX"),g.setAttribute("x",400*e+2),g.setAttribute("y",396),g.appendChild(document.createTextNode(Math.round(100*e))),a.appendChild(g)),
c&&(g=document.createElementNS("http://www.w3.org/2000/svg","text"),g.setAttribute("class","edgeY"),g.setAttribute("x",3),g.setAttribute("y",400*e-2),g.appendChild(document.createTextNode(Math.round(100-100*e))),a.appendChild(g)));d=1==d?2:1}}
window.addEventListener("load",function(){function a(){c.style.top=Math.max(10,90)+"px";c.style.left="10px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=yc();X.n();var b=-1!=Ml.indexOf(Nl),c=document.getElementById("blockly");document.getElementById("visualization");window.addEventListener("scroll",function(){a();Zg(window,"resize")});window.addEventListener("resize",a);a();var d=document.getElementById("toolbox");Ik(document.getElementById("blockly"),{media:"media/",rtl:b,toolbox:d,
trashcan:!0});Bk("noWorm,direction,getX,getY");am();b="";b=1==D?'<xml>  <block type="bird_direction" x="70" y="70"></block></xml>':5>D?'<xml>  <block type="bird_ifElse" x="70" y="70"></block></xml>':'<xml>  <block type="controls_if" x="70" y="70"></block></xml>';X.xk(b,!1);bm();Xl("runButton",cm);Xl("resetButton",dm);em();setTimeout(X.ok,1);setTimeout(X.pk,1)});
function em(){var a=document.getElementById("help"),b=document.getElementById("helpButton");Y.Mc(a,b,!0,!0,{width:"50%",left:"25%"},fm);Y.Mi()}function fm(){Y.Qi();setTimeout(function(){Pk(function(){gm()});gm()},3E3);8<D&&setTimeout(Y.mh,3E5)}
function gm(){if(sc.result!=hm&&!Tl(D)){var a=Bg(yg(z)),b=Rc(z.O.m,!0),c=document.getElementById("dialogHelp"),d=null,e=null;if(1==D){if(-1!=a.indexOf(">90<")||-1==a.indexOf("bird_direction"))e={width:"370px",top:"140px"},e[E?"right":"left"]="215px",d=Rc(z,!0),d=d.length?d[0].w():b[0].w()}else if(3==D)-1==a.indexOf("bird_noWorm")&&(e={width:"350px",top:"100px"},e[E?"right":"left"]="20px",d=b[1].w());else if(4==D)-1==a.indexOf("bird_compare")&&(e={width:"350px",top:"230px"},e[E?"right":"left"]="180px",
d=b[2].w());else if(5==D){if(-1==a.indexOf("mutation else")){d=Rc(z,!1);for(e=0;(b=d[e])&&"controls_if"!=b.type;e++);b.sb.A()?(c=document.getElementById("dialogMutatorHelp"),d=b.sb.O.se[1],a=Hf(d),e={width:"340px",top:a.y+60+"px"},e.left=a.x-(E?310:0)+"px"):(a=Hf(b.w()),e={width:"340px",top:a.y+100+"px"},e.left=a.x-(E?350:0)+"px",d=b.w())}}else if(6==D){if(-1==a.indexOf("mutation")){d=Rc(z,!1);for(e=0;(b=d[e])&&"controls_if"!=b.type;e++);a=Hf(b.w());e={width:"350px",top:a.y+220+"px"};e.left=a.x-(E?
350:0)+"px";d=b.w()}}else 8==D&&-1==a.indexOf("bird_and")&&(e={width:"350px",top:"360px"},e[E?"right":"left"]="450px",d=b[4].w());e?c.parentNode!=document.getElementById("dialog")&&Y.Mc(c,d,!0,!1,e,null):Y.Ma(!1)}}
function bm(){for(var a=0;a<Zl.length;a++)window.clearTimeout(Zl[a]);Zl=[];C=Yl.start.clone();vc=uc=Yl.Eb;wc=!1;$l=1;im();a=document.getElementById("worm");a.setAttribute("x",Yl.cb.x/100*400-30);a.setAttribute("y",400*(1-Yl.cb.y/100)-30);a.style.visibility="visible";a=document.getElementById("nest");a.setAttribute("x",Yl.Wa.x/100*400-40);a.setAttribute("y",400*(1-Yl.Wa.y/100)-40)}
function cm(a){if(!X.yb(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";uh(z,!0);bm();jm()}}function dm(a){X.yb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",uh(z,!1),bm())}var hm=1;
function km(a,b){var c;c=function(a,b){var c=a.valueOf(),h=b.toString(),k=c*Math.PI/180;C.x+=Math.cos(k);C.y+=Math.sin(k);uc=c;xc.push(["move",C.x,C.y,uc,h]);if(wc&&25>Xb(C,Yl.Wa))throw xc.push(["play","quack",null]),lm(Yl.Wa),xc.push(["finish",null]),!0;!wc&&25>Xb(C,Yl.cb)&&(lm(Yl.cb),xc.push(["worm",null]),xc.push(["play","worm",null]),wc=!0);a:{for(c=0;h=Yl.za[c];c++){var k=C,m=void 0;k instanceof y?(m=k.y,k=k.x):m=void 0;var t=h.je,r=h.ke,x=h.x1-h.je,v=h.y1-h.ke,k=Math.min(Math.max(((k-t)*(h.x1-
t)+(m-r)*(h.y1-r))/(x*x+v*v),0),1),m=h.je,t=h.ke;if(10>Xb(new y(m+k*(h.x1-m),t+k*(h.y1-t)),C)){c=!0;break a}}c=!1}if(c)throw xc.push(["play","whack",null]),!1;};a.setProperty(b,"direction",a.createNativeFunction(c));a.setProperty(b,"noWorm",a.createNativeFunction(function(){return a.createPrimitive(!wc)}));a.setProperty(b,"getX",a.createNativeFunction(function(){return a.createPrimitive(C.x)}));a.setProperty(b,"getY",a.createNativeFunction(function(){return a.createPrimitive(C.y)}))}
function jm(){if("Interpreter"in window){xc=[];var a;a=V;var b=z,c=[];a.n(b);for(var b=Rc(b,!0),d=0,e;e=b[d];d++){var g=zk(a,e);ea(g)&&(g=g[0]);g&&(e.M&&a.Fi&&(g=a.Fi(g)),c.push(g))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");a=c=c.replace(/[ \t]+\n/g,"\n");c=a.indexOf("if (");b=a.indexOf("}\n");-1!=c&&-1!=b&&(a=a.substring(c,b+2));c=0;a=new Interpreter("while(true) {\n"+a+"}",km);try{for(b=1E5;a.step();)if(0==b--)throw Infinity;c=-1}catch(h){Infinity===h?c=2:
!0===h?c=hm:!1===h?c=-2:(c=-2,window.alert(h))}tc=c==hm?10:15;bm();Zl.push(setTimeout(mm,1))}else setTimeout(jm,250)}function mm(){Zl=[];var a=xc.shift();a?(X.Ne(a.pop()),"move"==a[0]||"goto"==a[0]?(C.x=a[1],C.y=a[2],uc=a[3],im()):"worm"==a[0]?document.getElementById("worm").style.visibility="hidden":"finish"==a[0]?($l=3,im(),X.Zk(),Y.Dj()):"play"==a[0]&&Tj(a[1],.5),Zl.push(setTimeout(mm,5*tc))):X.Ne(null)}
function im(){var a;a=Wb(vc)-Wb(uc);180<a?a-=360:-180>=a&&(a=360+a);10>=Math.abs(a)?vc=uc:(vc-=10*(0==a?0:0>a?-1:1),vc=Wb(vc));var b=(14-Math.round(vc/360*12))%12,c=vc%30;15<=c&&(c-=30);var c=-1*c,d;if(1==$l)d=0;else if(3==$l)d=3;else throw"Unknown pose.";a=C.x/100*400-100;var e=400*(1-C.y/100)-100,g=document.getElementById("bird");g.setAttribute("x",a-200*b);g.setAttribute("y",e-200*d);g.setAttribute("transform","rotate("+c+", "+(a+100)+", "+(e+100)+")");b=document.getElementById("clipRect");b.setAttribute("x",
a);b.setAttribute("y",e)}function lm(a){var b=Math.round(Xb(C,a));a=Wb(180*Math.atan2(a.y-C.y,a.x-C.x)/Math.PI);for(var c=a*Math.PI/180,d=0;d<b;d++)C.x+=Math.cos(c),C.y+=Math.sin(c),xc.push(["goto",C.x,C.y,a,null])};
