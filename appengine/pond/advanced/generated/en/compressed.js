// Automatically generated file.  Do not edit!
'use strict';var f,m=this;function aa(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Nb=function(){return a.Eh?a.Eh:a.Eh=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function q(a){return"number"==typeof a}function t(a){return"function"==da(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a){return a[ia]||(a[ia]=++ja)}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;
function ka(a,b,c){return a.call.apply(a.bind,arguments)}function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ma(a,b,c){ma=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return ma.apply(null,arguments)}
function na(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var oa=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.i=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.$k=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function pa(a,b){null!=a&&this.append.apply(this,arguments)}f=pa.prototype;f.Y="";f.set=function(a){this.Y=""+a};f.append=function(a,b,c){this.Y+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Y+=arguments[d];return this};f.clear=function(){this.Y=""};f.toString=function(){return this.Y};var qa;function ra(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ra);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(ra,Error);ra.prototype.name="CustomError";function sa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function ta(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var ua=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function wa(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function xa(a){if(!ya.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(za,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Aa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ba,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ca,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Da,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ea,"&#0;"));return a}var za=/&/g,Aa=/</g,Ba=/>/g,Ca=/"/g,Da=/'/g,Ea=/\x00/g,ya=/[\x00&<>"']/;
function Fa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ga,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Ha(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Ga=/&([^;\s<&]+);?/g;function Ia(a,b){return a<b?-1:a>b?1:0};function Ja(a,b){b.unshift(a);ra.call(this,sa.apply(null,b));b.shift()}v(Ja,ra);Ja.prototype.name="AssertionError";function Ka(a,b){throw new Ja("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function La(){this.vg="";this.Gi=Ma}La.prototype.Pc=!0;La.prototype.Mc=function(){return this.vg};La.prototype.toString=function(){return"Const{"+this.vg+"}"};function Na(a){if(a instanceof La&&a.constructor===La&&a.Gi===Ma)return a.vg;Ka("expected object of type Const, got '"+a+"'");return"type_error:Const"}var Ma={};function Oa(){this.Vb="";this.Ci=Pa}f=Oa.prototype;f.Pc=!0;f.Mc=function(){return this.Vb};f.Of=!0;f.od=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Vb+"}"};var Pa={};var w=Array.prototype,Qa=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ra=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},Sa=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[g++]=l)}return e},Ta=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=p(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},Ua=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function Va(a,b){return 0<=Qa(a,b)}
function Wa(a,b){var c=Qa(a,b),d;(d=0<=c)&&w.splice.call(a,c,1);return d}function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ya(a,b,c,d){w.splice.apply(a,Za(arguments,1))}function Za(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)};function $a(){this.Ke="";this.Bi=ab}$a.prototype.Pc=!0;var ab={};$a.prototype.Mc=function(){return this.Ke};$a.prototype.toString=function(){return"SafeStyle{"+this.Ke+"}"};function bb(a){var b=new $a;b.Ke=a;return b}var cb=bb("");
function db(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof La?d=Na(d):eb.test(d)||(Ka("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?bb(b):cb}var eb=/^[-.%_!# a-zA-Z0-9]+$/;function fb(){this.eg="";this.Ii=gb}f=fb.prototype;f.Pc=!0;f.Mc=function(){return this.eg};f.Of=!0;f.od=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.eg+"}"};var gb={};function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var jb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<jb.length;g++)c=jb[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function lb(a){var b=arguments.length;if(1==b&&ea(arguments[0]))return lb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var mb=lb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function nb(){this.Vb="";this.Ai=ob;this.oh=null}f=nb.prototype;f.Of=!0;f.od=function(){return this.oh};f.Pc=!0;f.Mc=function(){return this.Vb};f.toString=function(){return"SafeHtml{"+this.Vb+"}"};function pb(a){if(a instanceof nb&&a.constructor===nb&&a.Ai===ob)return a.Vb;Ka("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function qb(a){if(a instanceof nb)return a;var b=null;a.Of&&(b=a.od());return rb(xa(a.Pc?a.Mc():String(a)),b)}
var sb=/^[a-zA-Z0-9-]+$/,tb=lb("action","cite","data","formaction","href","manifest","poster","src"),ub=lb("embed","iframe","link","object","script","style","template");
function vb(a,b,c){if(!sb.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in ub)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!sb.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,l=a;k=g;if(h instanceof La)h=Na(h);else if("style"==k.toLowerCase()){if(!ga(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof $a||
(h=db(h));l=void 0;h instanceof $a&&h.constructor===$a&&h.Bi===ab?l=h.Ke:(Ka("expected object of type SafeStyle, got '"+h+"'"),l="type_error:SafeStyle");h=l}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in tb)if(h instanceof fb)h instanceof fb&&h.constructor===fb&&h.Ii===gb?h=h.eg:(Ka("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Oa)h instanceof Oa&&h.constructor===
Oa&&h.Ci===Pa?h=h.Vb:(Ka("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Pc&&(h=h.Mc());k=k+'="'+xa(String(h))+'"';e+=" "+k}}void 0!==c?ea(c)||(c=[c]):c=[];!0===mb[a.toLowerCase()]?e+=">":(d=wb(c),e+=">"+pb(d)+"</"+a+">",d=d.od());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return rb(e,d)}
function wb(a){function b(a){ea(a)?Ra(a,b):(a=qb(a),d+=pb(a),a=a.od(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";Ra(arguments,b);return rb(d,c)}var ob={};function rb(a,b){var c=new nb;c.Vb=a;c.oh=b;return c}var xb=rb("",0);var yb={zl:!0};var zb;a:{var Ab=m.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""}function Cb(a){return-1!=zb.indexOf(a)};var Db=Cb("Opera")||Cb("OPR"),y=Cb("Trident")||Cb("MSIE"),Eb=Cb("Gecko")&&-1==zb.toLowerCase().indexOf("webkit")&&!(Cb("Trident")||Cb("MSIE")),z=-1!=zb.toLowerCase().indexOf("webkit"),Fb=Cb("Macintosh"),Gb=Cb("Android"),Hb=Cb("iPhone")&&!Cb("iPod")&&!Cb("iPad"),Ib=Cb("iPad");function Jb(){var a=m.document;return a?a.documentMode:void 0}
var Kb=function(){var a="",b;if(Db&&m.opera)return a=m.opera.version,t(a)?a():a;Eb?b=/rv\:([^\);]+)(\)|;)/:y?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:z&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(zb))?a[1]:"");return y&&(b=Jb(),b>parseFloat(a))?String(b):a}(),Lb={};
function A(a){var b;if(!(b=Lb[a])){b=0;for(var c=ua(String(Kb)).split("."),d=ua(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",l=/(\d*)(\D*)/g,r=/(\d*)(\D*)/g;do{var n=l.exec(h)||["","",""],x=r.exec(k)||["","",""];if(0==n[0].length&&0==x[0].length)break;b=Ia(0==n[1].length?0:parseInt(n[1],10),0==x[1].length?0:parseInt(x[1],10))||Ia(0==n[2].length,0==x[2].length)||Ia(n[2],x[2])}while(0==b)}b=Lb[a]=0<=b}return b}
var Mb=m.document,Nb=Mb&&y?Jb()||("CSS1Compat"==Mb.compatMode?parseInt(Kb,10):5):void 0;function Ob(a,b){this.width=a;this.height=b}f=Ob.prototype;f.clone=function(){return new Ob(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.Gh=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=q(b)?b:a;this.width*=a;this.height*=c;return this};function Pb(a,b){a.innerHTML=pb(b)};var Qb=!y||y&&9<=Nb,Rb=!Eb&&!y||y&&y&&9<=Nb||Eb&&A("1.9.1"),Sb=y&&!A("9");function Tb(a,b,c){return Math.min(Math.max(a,b),c)}function Ub(a){a%=360;return 0>360*a?a+360:a};function C(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=C.prototype;f.clone=function(){return new C(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};function Vb(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof C?(this.x+=a.x,this.y+=a.y):(this.x+=a,q(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=q(b)?b:a;this.x*=a;this.y*=c;return this};function Wb(a){return a?new Xb(Yb(a)):qa||(qa=new Xb)}function Zb(a,b){hb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in $b?a.setAttribute($b[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var $b={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ac(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Ob(a.clientWidth,a.clientHeight)}function D(a,b,c){return bc(document,arguments)}
function bc(a,b){var c=b[0],d=b[1];if(!Qb&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',xa(d.name),'"');if(d.type){c.push(' type="',xa(d.type),'"');var e={};kb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(p(d)?c.className=d:ea(d)?c.className=d.join(" "):Zb(c,d));2<b.length&&cc(a,c,b,2);return c}
function cc(a,b,c,d){function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!fa(g)||ga(g)&&0<g.nodeType?e(g):Ra(dc(g)?Xa(g):g,e)}}function ec(a){for(var b;b=a.firstChild;)a.removeChild(b)}function fc(a){var b=E.g;b.parentNode&&b.parentNode.insertBefore(a,b)}function F(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function gc(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function Yb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}var hc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ic={IMG:" ",BR:"\n"};function jc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function kc(a){a=a.tabIndex;return q(a)&&0<=a&&32768>a}
function lc(a){var b=[];mc(a,b,!1);return b.join("")}function mc(a,b,c){if(!(a.nodeName in hc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ic)b.push(ic[a.nodeName]);else for(a=a.firstChild;a;)mc(a,b,c),a=a.nextSibling}function dc(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(t(a))return"function"==typeof a.item}return!1}
function Xb(a){this.zb=a||m.document||document}f=Xb.prototype;f.eb=Wb;f.h=function(a){return p(a)?this.zb.getElementById(a):a};f.G=function(a,b,c){return bc(this.zb,arguments)};f.createElement=function(a){return this.zb.createElement(a)};f.createTextNode=function(a){return this.zb.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};f.append=function(a,b){cc(Yb(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
f.$h=ec;f.removeNode=F;f.gc=function(a){return Rb&&void 0!=a.children?a.children:Sa(a.childNodes,function(a){return 1==a.nodeType})};f.contains=gc;f.Qb=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!jc(a)||kc(a)):jc(a)&&kc(a))&&y?(a=t(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};y&&A(8);function G(a){return a&&a.$i&&a.$i===yb?a.content:String(a).replace(nc,oc)}var pc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function oc(a){return pc[a]}var nc=/[\x00\x22\x26\x27\x3c\x3e]/g;var qc={};function rc(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};function sc(){for(var a=tc,b=H,c='<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_dress">Dress</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Pond_playerName">Player</span><span id="Pond_targetName">Target</span><span id="Pond_rabbitName">Rabbit</span><span id="Pond_counterName">Counter</span><span id="Pond_rookName">Rook</span><span id="Pond_sniperName">Sniper</span><span id="Pond_pendulumName">Pendulum</span><span id="Pond_scaredName">Scared</span><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). Returns the distance to the closest enemy in that direction. Returns Infinity if no enemy found.</span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and a range (0-70).</span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360).</span><span id="Pond_stopTooltip">Stop swimming. Player will slow to a stop.</span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, 100 is healthy).</span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is stopped, 100 is full speed).</span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the left edge, 100 is the right edge).</span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the bottom edge, 100 is the top edge).</span></div><div style="display: none"></div><table width="100%"><tr><td><h1>'+
('<span id="title">'+(uc?'<a href="index.html?lang='+G(a)+'">':'<a href="./?lang='+G(a)+'">')+"</a>"+G("JS Pond")+"</span>"),d=" &nbsp; ",e=1;11>e;e++)d+=" "+(e==b?'<span class="level_number level_done" id="level'+G(e)+'">'+G(e)+"</span>":10==e?'<a class="level_number" id="level'+G(e)+'" href="?lang='+G(a)+"&level="+G(e)+G("")+'" onclick="return false;">'+G(e)+"</a>":'<a class="level_dot" id="level'+G(e)+'" href="?lang='+G(a)+"&level="+G(e)+G("")+'" onclick="return false;"></a>');return c+d+'</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table></div><div id="dialogDocs"><img src="media/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div><div id="editor"></div>\n<div id="playerTarget" style="display: none">\n</div>\n\n<div id="playerRabbit" style="display: none">\n/* rabbit */\n// rabbit runs around the field, randomly and never fires; use as a target.\n\n/* go - go to the point specified */\nfunction go (dest_x, dest_y) {\n  var course = plot_course(dest_x, dest_y);\n  while (distance(loc_x(), loc_y(), dest_x, dest_y) > 5) {\n    drive(course, 25);\n  }\n  while (speed() > 0) {\n    drive(course, 0);\n  }\n}\n\n/* distance forumula. */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot_course - figure out which heading to go. */\nfunction plot_course(xx, yy) {\n  var d;\n  var curx = loc_x();\n  var cury = loc_y();\n  var x = curx - xx;\n  var y = cury - yy;\n\n  if (x == 0) {\n    if (yy > cury) {\n      d = 90;\n    } else {\n      d = 270;\n    }\n  } else {\n    if (yy < cury) {\n      if (xx > curx) {\n        d = 360 + Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    } else {\n      if (xx > curx) {\n        d = Math.atan_deg(y / x);\n      } else {\n        d = 180 + Math.atan_deg(y / x);\n      }\n    }\n  }\n  return d;\n}\n\nwhile (true) {\n  // Go somewhere in the field.\n  var x = Math.random() * 100;\n  var y = Math.random() * 100;\n  go(x, y);\n}\n</div>\n\n<div id="playerCounter" style="display: none">\n/* counter */\n/* scan in a counter-clockwise direction (increasing degrees) */\n/* moves when hit */\n\nvar range;\nvar last_dir = 0;\n\nvar res = 2;\nvar d = damage();\nvar angle = Math.random() * 360;\nwhile (true) {\n  while ((range = scan(angle, res)) != Infinity) {\n    if (range > 70) { /* out of range, head toward it */\n      drive(angle, 50);\n      var i = 1;\n      while (i++ < 50) /* use a counter to limit move time */\n        ;\n      drive (angle, 0);\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 3;\n    } else {\n      while (!cannon(angle, range))\n        ;\n      if (d != damage()) {\n        d = damage();\n        run();\n      }\n      angle -= 15;\n    }\n  }\n  if (d != damage()) {\n    d = damage();\n    run();\n  }\n  angle += res;\n  angle %= 360;\n}\n\n/* run moves around the center of the field */\nfunction run() {\n  var i = 0;\n  var x = loc_x();\n  var y = loc_y();\n\n  if (last_dir == 0) {\n    last_dir = 1;\n    if (y > 51) {\n      drive(270, 100);\n      while (y - 10 < loc_y() && i++ < 50)\n        ;\n      drive(270, 0);\n    } else {\n      drive(90, 100);\n      while (y + 10 > loc_y() && i++ < 50)\n        ;\n      drive(90, 0);\n    }\n  } else {\n    last_dir = 0;\n    if (x > 51) {\n      drive(180, 100);\n      while (x - 10 < loc_x() && i++ < 50)\n        ;\n      drive(180, 0);\n    } else {\n      drive(0, 100);\n      while (x + 10 > loc_x() && i++ < 50)\n        ;\n      drive(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerRook" style="display: none">\n/* rook.r  -  scans the battlefield like a rook, i.e., only 0,90,180,270 */\n/* move horizontally only, but looks horz and vertically */\n\n/* move to center of board */\nif (loc_y() < 50) {\n  while (loc_y() < 40)        /* stop near center */\n    drive(90, 100);           /* start moving */\n} else {\n  while (loc_y() > 60)        /* stop near center */\n    drive(270, 100);          /* start moving */\n}\ndrive(0, 0);\nwhile (speed() > 0)\n  ;\n\n/* initialize starting parameters */\nvar d = damage();\nvar course = 0;\nvar boundary = 99;\ndrive(course, 30);\n\n/* main loop */\nwhile(true) {\n  /* look all directions */\n  look(0);\n  look(90);\n  look(180);\n  look(270);\n\n  /* if near end of battlefield, change directions */\n  if (course == 0) {\n    if (loc_x() > boundary || speed() == 0)\n      change();\n  }\n  else {\n    if (loc_x() < boundary || speed() == 0)\n      change();\n  }\n}\n\n/* look somewhere, and fire cannon repeatedly at in-range target */\nfunction look(deg) {\n  var range;\n  while ((range = scan(deg, 4)) <= 70)  {\n    drive(course, 0);\n    cannon(deg, range);\n    if (d + 20 != damage()) {\n      d = damage();\n      change();\n    }\n  }\n}\n\nfunction change() {\n  if (course == 0) {\n    boundary = 1;\n    course = 180;\n  } else {\n    boundary = 99;\n    course = 0;\n  }\n  drive(course, 30);\n}\n</div>\n\n<div id="playerSniper" style="display: none">\n/* sniper */\n/* strategy: since a scan of the entire battlefield can be done in 90 */\n/* degrees from a corner, sniper can scan the field quickly. */\n\n/* external variables, that can be used by any function */\nvar corner = 0;           /* current corner 0, 1, 2, or 2 */\nvar sc = 0;               /* current scan start */\n\nvar range;          /* range to target */\n\n/* initialize the corner info */\n/* x and y location of a corner, and starting scan degree */\nvar c1x = 2,  c1y = 2,  s1 = 0;\nvar c2x = 2,  c2y = 98, s2 = 270;\nvar c3x = 98, c3y = 98, s3 = 180;\nvar c4x = 98, c4y = 2,  s4 = 90;\nvar closest = Infinity;\nnew_corner();       /* start at a random corner */\nvar d = damage();       /* get current damage */\nvar dir = sc;           /* starting scan direction */\n\nwhile (true) {         /* loop is executed forever */\n  while (dir < sc + 90) {  /* scan through 90 degree range */\n    range = scan(dir, 2);   /* look at a direction */\n    if (range <= 70) {\n      while (range > 0) {    /* keep firing while in range */\n        closest = range;     /* set closest flag */\n        cannon(dir, range);   /* fire! */\n        range = scan(dir, 1); /* check target again */\n        if (d + 15 > damage())  /* sustained several hits, */\n          range = 0;            /* goto new corner */\n      }\n      dir -= 10;             /* back up scan, in case */\n    }\n\n    dir += 2;                /* increment scan */\n    if (d != damage()) {     /* check for damage incurred */\n      new_corner();          /* we\'re hit, move now */\n      d = damage();\n      dir = sc;\n    }\n  }\n\n  if (closest == Infinity) {       /* check for any targets in range */\n    new_corner();             /* nothing, move to new corner */\n    d = damage();\n    dir = sc;\n  } else {                     /* targets in range, resume */\n    dir = sc;\n  }\n  closest = Infinity;\n}\n\n/* new corner function to move to a different corner */\nfunction new_corner() {\n  var x, y;\n\n  var rand = Math.floor(Math.random() * 4);           /* pick a random corner */\n  if (rand == corner)       /* but make it different than the */\n    corner = (rand + 1) % 4;/* current corner */\n  else\n    corner = rand;\n  if (corner == 0) {       /* set new x,y and scan start */\n    x = c1x;\n    y = c1y;\n    sc = s1;\n  }\n  if (corner == 1) {\n    x = c2x;\n    y = c2y;\n    sc = s2;\n  }\n  if (corner == 2) {\n    x = c3x;\n    y = c3y;\n    sc = s3;\n  }\n  if (corner == 3) {\n    x = c4x;\n    y = c4y;\n    sc = s4;\n  }\n\n  /* find the heading we need to get to the desired corner */\n  var angle = plot_course(x,y);\n\n  /* start drive train, full speed */\n\n  /* keep traveling until we are within 15 meters */\n  /* speed is checked in case we run into wall, other robot */\n  /* not terribly great, since were are doing nothing while moving */\n\n  while (distance(loc_x(), loc_y(), x, y) > 15)\n    drive(angle, 100);\n\n  /* cut speed, and creep the rest of the way */\n\n  while (distance(loc_x(), loc_y(), x, y) > 1)\n    drive(angle, 20);\n\n  /* stop drive, should coast in the rest of the way */\n  drive(angle, 0);\n}  /* end of new_corner */\n\n/* classical pythagorean distance formula */\nfunction distance(x1, y1, x2, y2) {\n  var x = x1 - x2;\n  var y = y1 - y2;\n  return Math.sqrt((x * x) + (y * y));\n}\n\n/* plot course function, return degree heading to */\n/* reach destination x, y; uses atan() trig function */\nfunction plot_course(xx, yy) {\n  var d;\n  var x,y;\n  var curx, cury;\n\n  curx = loc_x();  /* get current location */\n  cury = loc_y();\n  x = curx - xx;\n  y = cury - yy;\n\n  /* atan only returns -90 to +90, so figure out how to use */\n  /* the atan() value */\n\n  if (x == 0) {      /* x is zero, we either move due north or south */\n    if (yy > cury)\n      d = 90;        /* north */\n    else\n      d = 270;       /* south */\n  } else {\n    if (yy < cury) {\n      if (xx > curx)\n        d = 360 + Math.atan_deg(y / x);  /* south-east, quadrant 4 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* south-west, quadrant 3 */\n    } else {\n      if (xx > curx)\n        d = Math.atan_deg(y / x);        /* north-east, quadrant 1 */\n      else\n        d = 180 + Math.atan_deg(y / x);  /* north-west, quadrant 2 */\n    }\n  }\n  return d;\n}\n</div>\n\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (loc_x() > 15) {\n      drive(180, 25);\n    } else {\n      west = false;\n      drive(0, 0);\n    }\n  } else {\n    if (loc_x() < 75) {\n      drive(0, 25);\n    } else {\n      west = true;\n      drive(0, 0);\n    }\n  }\n}\n</div>\n\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    drive(315, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    drive(0, 0);\n  }\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+rc()+"</div>")+(3==b?'<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. Use \'scan\' to tell the cannon how far to shoot.</div>'+rc()+"</div>":"")+'<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">'+(1==b?"Use the 'cannon' command to hit the target. The first parameter is the angle, the second parameter is the range. Find the right combination.<pre>cannon(0, 70);</pre>":
2==b?"This target needs to be hit many times. Use a 'while (true)' loop to do something indefinitely.<pre>while (true) {\n  ...\n}</pre>":3==b?"This opponent moves back and forth, making it hard to hit. The 'scan' expression returns the exact range to the opponent in the specified direction.<pre>scan(0, 5)</pre>This range is exactly what the 'cannon' command needs to fire accurately.":4==b?"This opponent is too far away to use the cannon (which has a limit of 70 meters). Instead, use the 'swim' command to start swimming towards the opponent and crash into it.<pre>swim(0, 50);</pre>":
5==b?"This opponent is also too far away to use the cannon. But you are too weak to survive a collision. Swim towards the opponent while your horizontal location is less than than 50. Then 'stop' and use the cannon.<pre>loc_x() &lt; 50</pre><pre>stop();</pre>":6==b?"This opponent will move away when it is hit. Swim towards it if it is out of range (70 meters).":7==b?"Rabbit runs around randomly. Can you hit it?":8==b?"Rook fights back! But it only looks north, south, east and west.":9==b?"Counter looks in all directions. Can you handle two opponents at once?":
10==b?"Sniper hides in a corner looking for targets. Good luck. Seriously.":"")+"</div>"+rc()+"</div>"};/*

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
var vc={},I,wc,J,xc,yc,zc,Ac,Bc,Cc,Dc,Ec,Fc,Gc,Hc,Jc;/*

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
function Kc(){this.$c=[]}f=Kc.prototype;f.v=!1;f.Vf=Infinity;f.j=function(){this.clear()};f.fd=function(a){this.$c.push(a);this.Ab()};f.Re=function(a){for(var b=!1,c,d=0;c=this.$c[d];d++)if(c==a){this.$c.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.Ab()};function Lc(a,b){var c=[].concat(a.$c);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);I&&(d*=-1);c.sort(function(a,b){var c=a.P(),k=b.P();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.ec=function(){for(var a=Lc(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].gc());return a};f.clear=function(){for(;this.$c.length;)this.$c[0].j()};f.pe=function(){return 0};function Mc(a,b){for(var c=a.ec(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Nc(a){return Infinity==a.Vf?Infinity:a.Vf-a.ec().length}f.Ab=function(){};/*

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
function Oc(a){this.Md=new Ob(0,25);this.Gb(a)}f=Oc.prototype;f.k=null;f.R=!0;f.clone=function(){Ka("There should never be an instance of Field, only its derived classes.")};f.bd=!0;f.U=function(a){this.k||(this.k=a,this.Fa=K("g",{},null),this.mf=K("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.Fa),this.Ca=K("text",{"class":"blocklyText"},this.Fa),this.Ac(),a.I().appendChild(this.Fa),this.Wf=L(this.Fa,"mouseup",this,this.$f),Pc(this))};
f.j=function(){this.Wf&&(M(this.Wf),this.Wf=null);this.k=null;F(this.Fa);this.mf=this.Ca=this.Fa=null};f.Ac=function(){this.bd&&(this.k.Jc&&!N?(Qc(this.Fa,"blocklyEditableText"),Rc(this.Fa,"blocklyNoNEditableText"),this.Fa.style.cursor=this.Tk):(Qc(this.Fa,"blocklyNonEditableText"),Rc(this.Fa,"blocklyEditableText"),this.Fa.style.cursor=""))};f.w=function(){return this.R};f.F=function(a){if(this.R!=a){this.R=a;var b=this.I();b&&(b.style.display=a?"block":"none",this.Gd())}};f.I=function(){return this.Fa};
f.Gd=function(){if(this.R){try{var a=this.Ca.getComputedTextLength()}catch(b){a=8*this.Ca.textContent.length}this.mf&&this.mf.setAttribute("width",a+10)}else a=0;this.Md.width=a};f.wh=function(){this.Md.width||this.Gd();return this.Md};f.Bb=function(){return this.ib};f.Gb=function(a){null!==a&&a!==this.ib&&(this.ib=a,Pc(this),this.k&&this.k.v&&(this.k.H(),this.k.Ea(),this.k.s.Ab()))};
function Pc(a){if(a.Ca){var b=a.ib;ec(a.Ca);b=b.replace(/\s/g,"\u00a0");I&&b&&(b+="\u200f");b||(b="\u00a0");a.Ca.appendChild(document.createTextNode(b));a.Md.width=0}}f.xh=function(){return this.Bb()};f.Yc=function(a){this.Gb(a)};f.$f=function(a){if(!Hb&&!Ib||0===a.layerX||0===a.layerY)Sc(a)||2!=Tc&&this.k.Jc&&!N&&this.El()};f.Ue=function(){};/*

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
function Uc(){for(var a=E.ec(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].ml;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Vc);b.sort(Vc);return[c,b]}function Vc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function Wc(a,b,c,d){function e(e,g){for(var l=0;l<e.length;l++){var r=Xc(d,g);Yc(r,"NAME").Yc(e[l][0]);for(var n=[],x=0;x<e[l][1].length;x++)n[x]="ARG"+x;r.Dl(e[l][1],n);r.rb();a.push(r);b.push(2*c)}}if(Zc.procedures_defnoreturn){var g=Xc(d,"procedures_defnoreturn");g.rb();a.push(g);b.push(2*c)}Zc.procedures_defreturn&&(g=Xc(d,"procedures_defreturn"),g.rb(),a.push(g),b.push(2*c));Zc.procedures_ifreturn&&(g=Xc(d,"procedures_ifreturn"),g.rb(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=
Uc();e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function $c(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=$c.prototype;f.pe=function(){return this.right-this.left};f.clone=function(){return new $c(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof $c?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){ga(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof C?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,q(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=q(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function ad(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=ad.prototype;f.clone=function(){return new ad(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof ad?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.wh=function(){return new Ob(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof C?(this.left+=a.x,this.top+=a.y):(this.left+=a,q(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=q(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function bd(a,b){var c=Yb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function cd(a,b){return bd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function dd(){var a=document,b=a.body,a=a.documentElement;return new C(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function ed(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}y&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function fd(a){if(y&&!(y&&8<=Nb))return a.offsetParent;var b=Yb(a),c=cd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=cd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function gd(a){var b,c=Yb(a),d=cd(a,"position"),e=Eb&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new C(0,0),h;b=c?Yb(c):document;(h=!y||y&&9<=Nb)||(h="CSS1Compat"==Wb(b).zb.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=ed(a),c=Wb(c).zb,a=z||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=y&&A("10")&&c.pageYOffset!=a.scrollTop?new C(a.scrollLeft,
a.scrollTop):new C(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(z&&"fixed"==cd(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Db||z&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=fd(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,Db&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function hd(a){var b=id;if("none"!=cd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function id(a){var b=a.offsetWidth,c=a.offsetHeight,d=z&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ed(a),new Ob(a.right-a.left,a.bottom-a.top)):new Ob(b,c)}
function jd(a){var b=gd(a);a=hd(a);return new ad(b.x,b.y,a.width,a.height)}function kd(a,b){a.style.display=b?"":"none"}var ld=Eb?"MozUserSelect":z?"WebkitUserSelect":null;function md(a,b,c){c=c?null:a.getElementsByTagName("*");if(ld){if(b=b?"none":"",a.style[ld]=b,c){a=0;for(var d;d=c[a];a++)d.style[ld]=b}}else if(y||Db)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var nd={thin:2,medium:4,thick:6};
function od(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in nd)d=nd[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function pd(a){if(y&&!(y&&9<=Nb)){var b=od(a,"borderLeft"),c=od(a,"borderRight"),d=od(a,"borderTop");a=od(a,"borderBottom");return new $c(d,c,a,b)}b=bd(a,"borderLeftWidth");c=bd(a,"borderRightWidth");d=bd(a,"borderTopWidth");a=bd(a,"borderBottomWidth");return new $c(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var qd="closure_listenable_"+(1E6*Math.random()|0),rd=0;function sd(a,b,c,d,e){this.kc=a;this.Le=null;this.src=b;this.type=c;this.$d=!!d;this.re=e;this.key=++rd;this.Vc=this.Zd=!1}function td(a){a.Vc=!0;a.kc=null;a.Le=null;a.src=null;a.re=null};function ud(a){this.src=a;this.wa={};this.Td=0}ud.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.wa[g];a||(a=this.wa[g]=[],this.Td++);var h=vd(a,b,d,e);-1<h?(b=a[h],c||(b.Zd=!1)):(b=new sd(b,this.src,g,!!d,e),b.Zd=c,a.push(b));return b};ud.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.wa))return!1;var e=this.wa[a];b=vd(e,b,c,d);return-1<b?(td(e[b]),w.splice.call(e,b,1),0==e.length&&(delete this.wa[a],this.Td--),!0):!1};
function wd(a,b){var c=b.type;if(!(c in a.wa))return!1;var d=Wa(a.wa[c],b);d&&(td(b),0==a.wa[c].length&&(delete a.wa[c],a.Td--));return d}ud.prototype.Pe=function(a){a=a&&a.toString();var b=0,c;for(c in this.wa)if(!a||c==a){for(var d=this.wa[c],e=0;e<d.length;e++)++b,td(d[e]);delete this.wa[c];this.Td--}return b};ud.prototype.pd=function(a,b,c,d){a=this.wa[a.toString()];var e=-1;a&&(e=vd(a,b,c,d));return-1<e?a[e]:null};
function vd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.Vc&&g.kc==b&&g.$d==!!c&&g.re==d)return e}return-1};var xd=!y||y&&9<=Nb,yd=!y||y&&9<=Nb,zd=y&&!A("9");!z||A("528");Eb&&A("1.9b")||y&&A("8")||Db&&A("9.5")||z&&A("528");Eb&&!A("8")||y&&A("9");var Ad="ontouchstart"in m||!!(m.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!m.navigator||!m.navigator.msMaxTouchPoints);function Bd(){0!=Cd&&(Dd[ha(this)]=this);this.hd=this.hd;this.Ee=this.Ee}var Cd=0,Dd={};Bd.prototype.hd=!1;Bd.prototype.j=function(){if(!this.hd&&(this.hd=!0,this.Z(),0!=Cd)){var a=ha(this);delete Dd[a]}};Bd.prototype.Z=function(){if(this.Ee)for(;this.Ee.length;)this.Ee.shift()()};function Ed(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.oc=!1;this.ai=!0}Ed.prototype.Z=function(){};Ed.prototype.j=function(){};Ed.prototype.stopPropagation=function(){this.oc=!0};Ed.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ai=!1};function Fd(a){Fd[" "](a);return a}Fd[" "]=ba;function Gd(a,b){Ed.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.bg=!1;this.sa=null;a&&this.U(a,b)}v(Gd,Ed);var Hd=[1,4,2];f=Gd.prototype;
f.U=function(a,b){this.sa=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Eb){var e;a:{try{Fd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.uh,set:this.wk},offsetY:{configurable:!0,enumerable:!0,get:this.vh,set:this.xk}}):(this.offsetX=this.uh(),
this.offsetY=this.vh());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.bg=Fb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Id(a){return xd?0==a.sa.button:"click"==a.type?!0:!!(a.sa.button&Hd[0])}f.stopPropagation=function(){Gd.i.stopPropagation.call(this);this.sa.stopPropagation?this.sa.stopPropagation():this.sa.cancelBubble=!0};f.preventDefault=function(){Gd.i.preventDefault.call(this);var a=this.sa;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,zd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.Z=function(){};
f.uh=function(){return z||void 0!==this.sa.offsetX?this.sa.offsetX:this.sa.layerX};f.wk=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.vh=function(){return z||void 0!==this.sa.offsetY?this.sa.offsetY:this.sa.layerY};f.xk=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Jd="closure_lm_"+(1E6*Math.random()|0),Kd={},Ld=0;function Md(a,b,c,d,e){if(ea(b)){for(var g=0;g<b.length;g++)Md(a,b[g],c,d,e);return null}c=Nd(c);if(a&&a[qd])a=a.C(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Od(a);h||(a[Jd]=h=new ud(a));c=h.add(b,c,!1,d,e);c.Le||(d=Pd(),c.Le=d,d.src=a,d.kc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Qd(b.toString()),d),Ld++);a=c}return a}
function Pd(){var a=Rd,b=yd?function(c){return a.call(b.src,b.kc,c)}:function(c){c=a.call(b.src,b.kc,c);if(!c)return c};return b}function Sd(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)Sd(a,b[g],c,d,e);else c=Nd(c),a&&a[qd]?a.Ua(b,c,d,e):a&&(a=Od(a))&&(b=a.pd(b,c,!!d,e))&&Td(b)}
function Td(a){if(q(a)||!a||a.Vc)return!1;var b=a.src;if(b&&b[qd])return wd(b.Mb,a);var c=a.type,d=a.Le;b.removeEventListener?b.removeEventListener(c,d,a.$d):b.detachEvent&&b.detachEvent(Qd(c),d);Ld--;(c=Od(b))?(wd(c,a),0==c.Td&&(c.src=null,b[Jd]=null)):td(a);return!0}function Qd(a){return a in Kd?Kd[a]:Kd[a]="on"+a}function Ud(a,b,c,d){var e=!0;if(a=Od(a))if(b=a.wa[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.$d==c&&!g.Vc&&(g=Vd(g,d),e=e&&!1!==g)}return e}
function Vd(a,b){var c=a.kc,d=a.re||a.src;a.Zd&&Td(a);return c.call(d,b)}
function Rd(a,b){if(a.Vc)return!0;if(!yd){var c=b||aa("window.event"),d=new Gd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.oc&&0<=k;k--){d.currentTarget=c[k];var l=Ud(c[k],g,!0,d),e=e&&l}for(k=0;!d.oc&&k<c.length;k++)d.currentTarget=c[k],l=Ud(c[k],g,!1,d),e=e&&l}return e}return Vd(a,new Gd(b,
this))}function Od(a){a=a[Jd];return a instanceof ud?a:null}var Wd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Nd(a){if(t(a))return a;a[Wd]||(a[Wd]=function(b){return a.handleEvent(b)});return a[Wd]};function Xd(a){Bd.call(this);this.Ah=a;this.Ae={}}v(Xd,Bd);var Yd=[];f=Xd.prototype;f.C=function(a,b,c,d){ea(b)||(b&&(Yd[0]=b.toString()),b=Yd);for(var e=0;e<b.length;e++){var g=Md(a,b[e],c||this.handleEvent,d||!1,this.Ah||this);if(!g)break;this.Ae[g.key]=g}return this};
f.Ua=function(a,b,c,d,e){if(ea(b))for(var g=0;g<b.length;g++)this.Ua(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.Ah||this,c=Nd(c),d=!!d,b=a&&a[qd]?a.pd(b,c,d,e):a?(a=Od(a))?a.pd(b,c,d,e):null:null,b&&(Td(b),delete this.Ae[b.key]);return this};f.Pe=function(){hb(this.Ae,Td);this.Ae={}};f.Z=function(){Xd.i.Z.call(this);this.Pe()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Zd(){}ca(Zd);Zd.prototype.ak=0;function $d(){Bd.call(this);this.Mb=new ud(this);this.Ki=this;this.ag=null}v($d,Bd);$d.prototype[qd]=!0;f=$d.prototype;f.ne=function(){return this.ag};f.mg=function(a){this.ag=a};f.addEventListener=function(a,b,c,d){Md(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Sd(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.ne();if(c)for(b=[];c;c=c.ne())b.push(c);var c=this.Ki,d=a.type||a;if(p(a))a=new Ed(a,c);else if(a instanceof Ed)a.target=a.target||c;else{var e=a;a=new Ed(d,c);kb(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.oc&&0<=h;h--)g=a.currentTarget=b[h],e=ae(g,d,!0,a)&&e;a.oc||(g=a.currentTarget=c,e=ae(g,d,!0,a)&&e,a.oc||(e=ae(g,d,!1,a)&&e));if(b)for(h=0;!a.oc&&h<b.length;h++)g=a.currentTarget=b[h],e=ae(g,d,!1,a)&&e;return e};
f.Z=function(){$d.i.Z.call(this);this.Mb&&this.Mb.Pe(void 0);this.ag=null};f.C=function(a,b,c,d){return this.Mb.add(String(a),b,!1,c,d)};f.Ua=function(a,b,c,d){return this.Mb.remove(String(a),b,c,d)};function ae(a,b,c,d){b=a.Mb.wa[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.Vc&&h.$d==c){var k=h.kc,l=h.re||h.src;h.Zd&&wd(a.Mb,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.ai}f.pd=function(a,b,c,d){return this.Mb.pd(String(a),b,c,d)};function be(a){$d.call(this);this.de=a||Wb();this.Te=ce;this.te=null;this.A=!1;this.u=null;this.Pb=void 0;this.Jb=this.S=this.pa=this.Ce=null;this.Pk=!1}v(be,$d);be.prototype.Lj=Zd.Nb();var ce=null;
function de(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function ee(a){return a.te||(a.te=":"+(a.Lj.ak++).toString(36))}f=be.prototype;f.h=function(){return this.u};function fe(a){a.Pb||(a.Pb=new Xd(a));return a.Pb}
f.xa=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.pa&&this.te&&ge(this.pa,this.te)&&this.pa!=a)throw Error("Unable to set parent component");this.pa=a;be.i.mg.call(this,a)};f.getParent=function(){return this.pa};f.mg=function(a){if(this.pa&&this.pa!=a)throw Error("Method not supported");be.i.mg.call(this,a)};f.eb=function(){return this.de};f.G=function(){this.u=this.de.createElement("div")};f.H=function(a){this.Gd(a)};
f.Gd=function(a,b){if(this.A)throw Error("Component already rendered");this.u||this.G();a?a.insertBefore(this.u,b||null):this.de.zb.body.appendChild(this.u);this.pa&&!this.pa.A||this.ha()};f.ha=function(){this.A=!0;he(this,function(a){!a.A&&a.h()&&a.ha()})};f.Ra=function(){he(this,function(a){a.A&&a.Ra()});this.Pb&&this.Pb.Pe();this.A=!1};
f.Z=function(){this.A&&this.Ra();this.Pb&&(this.Pb.j(),delete this.Pb);he(this,function(a){a.j()});!this.Pk&&this.u&&F(this.u);this.pa=this.Ce=this.u=this.Jb=this.S=null;be.i.Z.call(this)};f.cf=function(a,b){this.Cc(a,ie(this),b)};
f.Cc=function(a,b,c){if(a.A&&(c||!this.A))throw Error("Component already rendered");if(0>b||b>ie(this))throw Error("Child component index out of bounds");this.Jb&&this.S||(this.Jb={},this.S=[]);if(a.getParent()==this){var d=ee(a);this.Jb[d]=a;Wa(this.S,a)}else{var d=this.Jb,e=ee(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.xa(this);Ya(this.S,b,0,a);a.A&&this.A&&a.getParent()==this?(c=this.cb(),b=c.childNodes[b]||null,b!=a.h()&&c.insertBefore(a.h(),b)):c?(this.u||
this.G(),b=O(this,b+1),a.Gd(this.cb(),b?b.u:null)):this.A&&!a.A&&a.u&&a.u.parentNode&&1==a.u.parentNode.nodeType&&a.ha()};f.cb=function(){return this.u};function je(a){null==a.Te&&(a.Te="rtl"==cd(a.A?a.u:a.de.zb.body,"direction"));return a.Te}f.Kd=function(a){if(this.A)throw Error("Component already rendered");this.Te=a};function ke(a){return!!a.S&&0!=a.S.length}function ie(a){return a.S?a.S.length:0}function ge(a,b){var c;a.Jb&&b?(c=a.Jb,c=(b in c?c[b]:void 0)||null):c=null;return c}
function O(a,b){return a.S?a.S[b]||null:null}function he(a,b,c){a.S&&Ra(a.S,b,c)}function le(a,b){return a.S&&b?Qa(a.S,b):-1}f.removeChild=function(a,b){if(a){var c=p(a)?a:ee(a);a=ge(this,c);if(c&&a){var d=this.Jb;c in d&&delete d[c];Wa(this.S,a);b&&(a.Ra(),a.u&&F(a.u));a.xa(null)}}if(!a)throw Error("Child is not in parent component");return a};f.$h=function(a){for(var b=[];ke(this);)b.push(this.removeChild(O(this,0),a));return b};function me(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ne(a,b){return a.classList?a.classList.contains(b):Va(me(a),b)}function oe(a,b){a.classList?a.classList.add(b):ne(a,b)||(a.className+=0<a.className.length?" "+b:b)}function pe(a,b){if(a.classList)Ra(b,function(b){oe(a,b)});else{var c={};Ra(me(a),function(a){c[a]=!0});Ra(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function qe(a,b){a.classList?a.classList.remove(b):ne(a,b)&&(a.className=Sa(me(a),function(a){return a!=b}).join(" "))}function re(a,b){a.classList?Ra(b,function(b){qe(a,b)}):a.className=Sa(me(a),function(a){return!Va(b,a)}).join(" ")};function se(a,b){if(!a)throw Error("Invalid class name "+a);if(!t(b))throw Error("Invalid decorator function "+b);}var te={};var ue;function ve(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function P(a,b,c){ea(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ue||(ue={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ue,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function we(){}var xe;ca(we);var ye={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=we.prototype;f.ge=function(){};f.G=function(a){return a.eb().G("div",this.je(a).join(" "),a.xb)};f.cb=function(a){return a};f.jd=function(a,b,c){if(a=a.h?a.h():a){var d=[b];y&&!A("7")&&(d=ze(me(a),b),d.push(b));(c?pe:re)(a,d)}};f.yd=function(a){je(a)&&this.Kd(a.h(),!0);a.isEnabled()&&this.uc(a,a.w())};
function Ae(a,b,c){if(a=c||a.ge())c=b.getAttribute("role")||null,a!=c&&ve(b,a)}function Be(a,b){a.w()||P(b,"hidden",!a.w());a.isEnabled()||Ce(b,1,!a.isEnabled());a.X&8&&Ce(b,8,a.xe());a.X&16&&Ce(b,16,!!(a.aa&16));a.X&64&&Ce(b,64,a.Qc())}f.jg=function(a,b){md(a,!b,!y&&!Db)};f.Kd=function(a,b){this.jd(a,this.na()+"-rtl",b)};f.Qb=function(a){var b;return a.X&32&&(b=a.ea())?jc(b)&&kc(b):!1};
f.uc=function(a,b){var c;if(a.X&32&&(c=a.ea())){if(!b&&a.aa&32){try{c.blur()}catch(d){}a.aa&32&&a.td(null)}(jc(c)&&kc(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.F=function(a,b){kd(a,b);a&&P(a,"hidden",!b)};f.Sa=function(a,b,c){var d=a.h();if(d){var e=this.ie(b);e&&this.jd(a,e,c);Ce(d,b,c)}};
function Ce(a,b,c){xe||(xe={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=xe[b];var d=a.getAttribute("role")||null;d&&(d=ye[d]||b,b="checked"==b||"selected"==b?d:b);b&&P(a,b,c)}f.ea=function(a){return a.h()};f.na=function(){return"goog-control"};f.je=function(a){var b=this.na(),c=[b],d=this.na();d!=b&&c.push(d);b=a.aa;for(d=[];b;){var e=b&-b;d.push(this.ie(e));b&=~e}c.push.apply(c,d);(a=a.ob)&&c.push.apply(c,a);y&&!A("7")&&c.push.apply(c,ze(c));return c};
function ze(a,b){var c=[];b&&(a=a.concat([b]));Ra([],function(d){!Ua(d,na(Va,a))||b&&!Va(d,b)||c.push(d.join("_"))});return c}f.ie=function(a){if(!this.Qg){var b=this.na();b.replace(/\xa0|\s/g," ");this.Qg={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Qg[a]};function De(a,b,c,d,e){if(!(y||z&&A("525")))return!0;if(Fb&&e)return Ee(a);if(e&&!d)return!1;q(b)&&(b=Fe(b));if(!c&&(17==b||18==b||Fb&&91==b))return!1;if(z&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(y&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!z}return Ee(a)}
function Ee(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||z&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Fe(a){if(Eb)a=Ge(a);else if(Fb&&z)a:switch(a){case 93:a=91;break a}return a}
function Ge(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function He(a,b){$d.call(this);a&&Ie(this,a,b)}v(He,$d);f=He.prototype;f.u=null;f.ye=null;f.Qf=null;f.ze=null;f.Ia=-1;f.Sb=-1;f.gf=!1;
var Je={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Ke={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Le=y||z&&A("525"),Me=Fb&&Eb;f=He.prototype;
f.Dj=function(a){z&&(17==this.Ia&&!a.ctrlKey||18==this.Ia&&!a.altKey||Fb&&91==this.Ia&&!a.metaKey)&&(this.Sb=this.Ia=-1);-1==this.Ia&&(a.ctrlKey&&17!=a.keyCode?this.Ia=17:a.altKey&&18!=a.keyCode?this.Ia=18:a.metaKey&&91!=a.keyCode&&(this.Ia=91));Le&&!De(a.keyCode,this.Ia,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Sb=Fe(a.keyCode),Me&&(this.gf=a.altKey))};f.Ej=function(a){this.Sb=this.Ia=-1;this.gf=a.altKey};
f.handleEvent=function(a){var b=a.sa,c,d,e=b.altKey;y&&"keypress"==a.type?(c=this.Sb,d=13!=c&&27!=c?b.keyCode:0):z&&"keypress"==a.type?(c=this.Sb,d=0<=b.charCode&&63232>b.charCode&&Ee(c)?b.charCode:0):Db?(c=this.Sb,d=Ee(c)?b.keyCode:0):(c=b.keyCode||this.Sb,d=b.charCode||0,Me&&(e=this.gf),Fb&&63==d&&224==c&&(c=191));var g=c=Fe(c),h=b.keyIdentifier;c?63232<=c&&c in Je?g=Je[c]:25==c&&a.shiftKey&&(g=9):h&&h in Ke&&(g=Ke[h]);a=g==this.Ia;this.Ia=g;b=new Ne(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.h=function(){return this.u};function Ie(a,b,c){a.ze&&a.detach();a.u=b;a.ye=Md(a.u,"keypress",a,c);a.Qf=Md(a.u,"keydown",a.Dj,c,a);a.ze=Md(a.u,"keyup",a.Ej,c,a)}f.detach=function(){this.ye&&(Td(this.ye),Td(this.Qf),Td(this.ze),this.ze=this.Qf=this.ye=null);this.u=null;this.Sb=this.Ia=-1};f.Z=function(){He.i.Z.call(this);this.detach()};function Ne(a,b,c,d){Gd.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}v(Ne,Gd);function Q(a,b,c){be.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ha(b);if(d=te[d])break;b=b.i?b.i.constructor:null}b=d?t(d.Nb)?d.Nb():new d:null}this.D=b;this.vk(void 0!==a?a:null)}v(Q,be);f=Q.prototype;f.xb=null;f.aa=0;f.X=39;f.Si=255;f.Od=0;f.R=!0;f.ob=null;f.wd=!0;f.ff=!1;f.lk=null;f.ea=function(){return this.D.ea(this)};f.me=function(){return this.oa||(this.oa=new He)};
f.jd=function(a,b){b?a&&(this.ob?Va(this.ob,a)||this.ob.push(a):this.ob=[a],this.D.jd(this,a,!0)):a&&this.ob&&Wa(this.ob,a)&&(0==this.ob.length&&(this.ob=null),this.D.jd(this,a,!1))};f.G=function(){var a=this.D.G(this);this.u=a;Ae(this.D,a,this.oe());this.ff||this.D.jg(a,!1);this.w()||this.D.F(a,!1)};f.oe=function(){return this.lk};f.cb=function(){return this.D.cb(this.h())};
f.ha=function(){Q.i.ha.call(this);Be(this,this.u);this.D.yd(this);if(this.X&-2&&(this.wd&&Oe(this,!0),this.X&32)){var a=this.ea();if(a){var b=this.me();Ie(b,a);fe(this).C(b,"key",this.fb).C(a,"focus",this.qe).C(a,"blur",this.td)}}};
function Oe(a,b){var c=fe(a),d=a.h();b?(c.C(d,"mouseover",a.Lf).C(d,"mousedown",a.vd).C(d,"mouseup",a.xd).C(d,"mouseout",a.Kf),a.ud!=ba&&c.C(d,"contextmenu",a.ud),y&&c.C(d,"dblclick",a.yh)):(c.Ua(d,"mouseover",a.Lf).Ua(d,"mousedown",a.vd).Ua(d,"mouseup",a.xd).Ua(d,"mouseout",a.Kf),a.ud!=ba&&c.Ua(d,"contextmenu",a.ud),y&&c.Ua(d,"dblclick",a.yh))}f.Ra=function(){Q.i.Ra.call(this);this.oa&&this.oa.detach();this.w()&&this.isEnabled()&&this.D.uc(this,!1)};
f.Z=function(){Q.i.Z.call(this);this.oa&&(this.oa.j(),delete this.oa);delete this.D;this.ob=this.xb=null};f.vk=function(a){this.xb=a};f.Ef=function(){var a=this.xb;if(!a)return"";if(!p(a))if(ea(a))a=Ta(a,lc).join("");else{if(Sb&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];mc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Sb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return ta(a)};
f.Kd=function(a){Q.i.Kd.call(this,a);var b=this.h();b&&this.D.Kd(b,a)};f.jg=function(a){this.ff=a;var b=this.h();b&&this.D.jg(b,a)};f.w=function(){return this.R};f.F=function(a,b){if(b||this.R!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.h();c&&this.D.F(c,a);this.isEnabled()&&this.D.uc(this,a);this.R=a;return!0}return!1};f.isEnabled=function(){return!(this.aa&1)};
f.Jd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Pe(this,1,!a)||(a||(this.setActive(!1),this.hb(!1)),this.w()&&this.D.uc(this,a),this.Sa(1,!a,!0))};f.hb=function(a){Pe(this,2,a)&&this.Sa(2,a)};f.Qj=function(){return!!(this.aa&4)};f.setActive=function(a){Pe(this,4,a)&&this.Sa(4,a)};f.xe=function(){return!!(this.aa&8)};f.yk=function(){Pe(this,8,!0)&&this.Sa(8,!0)};f.Qc=function(){return!!(this.aa&64)};function Qe(a,b){Pe(a,64,b)&&a.Sa(64,b)}
f.Sa=function(a,b,c){c||1!=a?this.X&a&&b!=!!(this.aa&a)&&(this.D.Sa(this,a,b),this.aa=b?this.aa|a:this.aa&~a):this.Jd(!b)};f.Ka=function(a,b){if(this.A&&this.aa&a&&!b)throw Error("Component already rendered");!b&&this.aa&a&&this.Sa(a,!1);this.X=b?this.X|a:this.X&~a};function Re(a,b){return!!(a.Si&b)&&!!(a.X&b)}function Pe(a,b,c){return!!(a.X&b)&&!!(a.aa&b)!=c&&(!(a.Od&b)||a.dispatchEvent(de(b,c)))&&!a.hd}
f.Lf=function(a){!Se(a,this.h())&&this.dispatchEvent("enter")&&this.isEnabled()&&Re(this,2)&&this.hb(!0)};f.Kf=function(a){!Se(a,this.h())&&this.dispatchEvent("leave")&&(Re(this,4)&&this.setActive(!1),Re(this,2)&&this.hb(!1))};f.ud=ba;function Se(a,b){return!!a.relatedTarget&&gc(b,a.relatedTarget)}f.vd=function(a){this.isEnabled()&&(Re(this,2)&&this.hb(!0),!Id(a)||z&&Fb&&a.ctrlKey||(Re(this,4)&&this.setActive(!0),this.D.Qb(this)&&this.ea().focus()));this.ff||!Id(a)||z&&Fb&&a.ctrlKey||a.preventDefault()};
f.xd=function(a){this.isEnabled()&&(Re(this,2)&&this.hb(!0),this.Qj()&&this.Je(a)&&Re(this,4)&&this.setActive(!1))};f.yh=function(a){this.isEnabled()&&this.Je(a)};f.Je=function(a){if(Re(this,16)){var b=!(this.aa&16);Pe(this,16,b)&&this.Sa(16,b)}Re(this,8)&&this.yk();Re(this,64)&&Qe(this,!this.Qc());b=new Ed("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.bg=a.bg);return this.dispatchEvent(b)};
f.qe=function(){Re(this,32)&&Pe(this,32,!0)&&this.Sa(32,!0)};f.td=function(){Re(this,4)&&this.setActive(!1);Re(this,32)&&Pe(this,32,!1)&&this.Sa(32,!1)};f.fb=function(a){return this.w()&&this.isEnabled()&&this.hc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.hc=function(a){return 13==a.keyCode&&this.Je(a)};if(!t(Q))throw Error("Invalid component class "+Q);if(!t(we))throw Error("Invalid renderer class "+we);var Te=ha(Q);te[Te]=we;se("goog-control",function(){return new Q(null)});function Ue(){this.Rg=[]}v(Ue,we);ca(Ue);function Ve(a,b){var c=a.Rg[b];if(!c){switch(b){case 0:c=a.na()+"-highlight";break;case 1:c=a.na()+"-checkbox";break;case 2:c=a.na()+"-content"}a.Rg[b]=c}return c}f=Ue.prototype;f.ge=function(){return"menuitem"};f.G=function(a){var b=a.eb().G("div",this.je(a).join(" "),We(this,a.xb,a.eb()));Xe(this,a,b,!!(a.X&8)||!!(a.X&16));return b};f.cb=function(a){return a&&a.firstChild};function We(a,b,c){a=Ve(a,2);return c.G("div",a,b)}
f.ei=function(a,b,c){a&&b&&Xe(this,a,b,c)};f.bi=function(a,b,c){a&&b&&Xe(this,a,b,c)};function Xe(a,b,c,d){Ae(a,c,b.oe());Be(b,c);var e;if(e=a.cb(c)){e=e.firstChild;var g=Ve(a,1);e=!!e&&ga(e)&&1==e.nodeType&&ne(e,g)}else e=!1;d!=e&&(d?oe(c,"goog-option"):qe(c,"goog-option"),c=a.cb(c),d?(a=Ve(a,1),c.insertBefore(b.eb().G("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.ie=function(a){switch(a){case 2:return Ve(this,0);case 16:case 8:return"goog-option-selected";default:return Ue.i.ie.call(this,a)}};f.na=function(){return"goog-menuitem"};function Ye(a,b,c,d){Q.call(this,a,d||Ue.Nb(),c);this.Yc(b)}v(Ye,Q);f=Ye.prototype;f.xh=function(){var a=this.Ce;return null!=a?a:this.Ef()};f.Yc=function(a){this.Ce=a};f.Ka=function(a,b){Ye.i.Ka.call(this,a,b);switch(a){case 8:this.aa&16&&!b&&Pe(this,16,!1)&&this.Sa(16,!1);var c=this.h();c&&this.D.ei(this,c,b);break;case 16:(c=this.h())&&this.D.bi(this,c,b)}};f.ei=function(a){this.Ka(8,a)};f.bi=function(a){this.Ka(16,a)};
f.Ef=function(){var a=this.xb;return ea(a)?(a=Ta(a,function(a){return ga(a)&&1==a.nodeType&&(ne(a,"goog-menuitem-accel")||ne(a,"goog-menuitem-mnemonic-separator"))?"":lc(a)}).join(""),ta(a)):Ye.i.Ef.call(this)};f.xd=function(a){var b=this.getParent();if(b){var c=b.Th;b.Th=null;if(b=c&&q(a.clientX))b=new C(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}Ye.i.xd.call(this,a)};f.hc=function(a){return a.keyCode==this.Mh&&this.Je(a)?!0:Ye.i.hc.call(this,a)};f.vj=function(){return this.Mh};
se("goog-menuitem",function(){return new Ye(null)});Ye.prototype.oe=function(){return this.X&16?"menuitemcheckbox":this.X&8?"menuitemradio":Ye.i.oe.call(this)};Ye.prototype.getParent=function(){return Q.prototype.getParent.call(this)};Ye.prototype.ne=function(){return Q.prototype.ne.call(this)};function Ze(a){this.Kg=a}ca(Ze);f=Ze.prototype;f.ge=function(){return this.Kg};function $e(a,b){a&&(a.tabIndex=b?0:-1)}f.G=function(a){return a.eb().G("div",this.je(a).join(" "))};f.cb=function(a){return a};f.yd=function(a){a=a.h();md(a,!0,Eb);y&&(a.hideFocus=!0);var b=this.ge();b&&ve(a,b)};f.ea=function(a){return a.h()};f.na=function(){return"goog-container"};f.je=function(a){var b=this.na(),c=[b,a.Uc==af?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function bf(){}v(bf,we);ca(bf);bf.prototype.G=function(a){return a.eb().G("div",this.na())};bf.prototype.na=function(){return"goog-menuseparator"};function cf(a,b){Q.call(this,null,a||bf.Nb(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.aa=1}v(cf,Q);cf.prototype.ha=function(){cf.i.ha.call(this);var a=this.h();ve(a,"separator")};se("goog-menuseparator",function(){return new cf});function df(a){this.Kg=a||"menu"}v(df,Ze);ca(df);df.prototype.na=function(){return"goog-menu"};df.prototype.yd=function(a){df.i.yd.call(this,a);a=a.h();P(a,"haspopup","true")};se("goog-menuseparator",function(){return new cf});function ef(a,b,c){be.call(this,c);this.D=b||Ze.Nb();this.Uc=a||ff}v(ef,be);var af="horizontal",ff="vertical";f=ef.prototype;f.Rf=null;f.oa=null;f.D=null;f.Uc=null;f.R=!0;f.cc=!0;f.Cf=!0;f.N=-1;f.$=null;f.Tc=!1;f.Ni=!1;f.ik=!0;f.vb=null;f.ea=function(){return this.Rf||this.D.ea(this)};f.me=function(){return this.oa||(this.oa=new He(this.ea()))};f.G=function(){this.u=this.D.G(this)};f.cb=function(){return this.D.cb(this.h())};
f.ha=function(){ef.i.ha.call(this);he(this,function(a){a.A&&gf(this,a)},this);var a=this.h();this.D.yd(this);this.F(this.R,!0);fe(this).C(this,"enter",this.If).C(this,"highlight",this.Cj).C(this,"unhighlight",this.Hj).C(this,"open",this.Fj).C(this,"close",this.zj).C(a,"mousedown",this.vd).C(Yb(a),"mouseup",this.Aj).C(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.yj);this.Qb()&&hf(this,!0)};
function hf(a,b){var c=fe(a),d=a.ea();b?c.C(d,"focus",a.qe).C(d,"blur",a.td).C(a.me(),"key",a.fb):c.Ua(d,"focus",a.qe).Ua(d,"blur",a.td).Ua(a.me(),"key",a.fb)}f.Ra=function(){this.Xc(-1);this.$&&Qe(this.$,!1);this.Tc=!1;ef.i.Ra.call(this)};f.Z=function(){ef.i.Z.call(this);this.oa&&(this.oa.j(),this.oa=null);this.D=this.$=this.vb=this.Rf=null};f.If=function(){return!0};
f.Cj=function(a){var b=le(this,a.target);if(-1<b&&b!=this.N){var c=O(this,this.N);c&&c.hb(!1);this.N=b;c=O(this,this.N);this.Tc&&c.setActive(!0);this.ik&&this.$&&c!=this.$&&(c.X&64?Qe(c,!0):Qe(this.$,!1))}b=this.h();null!=a.target.h()&&P(b,"activedescendant",a.target.h().id)};f.Hj=function(a){a.target==O(this,this.N)&&(this.N=-1);this.h().removeAttribute("aria-activedescendant")};f.Fj=function(a){(a=a.target)&&a!=this.$&&a.getParent()==this&&(this.$&&Qe(this.$,!1),this.$=a)};
f.zj=function(a){a.target==this.$&&(this.$=null)};f.vd=function(a){this.cc&&(this.Tc=!0);var b=this.ea();b&&jc(b)&&kc(b)?b.focus():a.preventDefault()};f.Aj=function(){this.Tc=!1};f.yj=function(a){var b;a:{b=a.target;if(this.vb)for(var c=this.h();b&&b!==c;){var d=b.id;if(d in this.vb){b=this.vb[d];break a}b=b.parentNode}b=null}if(b)switch(a.type){case "mousedown":b.vd(a);break;case "mouseup":b.xd(a);break;case "mouseover":b.Lf(a);break;case "mouseout":b.Kf(a);break;case "contextmenu":b.ud(a)}};
f.qe=function(){};f.td=function(){this.Xc(-1);this.Tc=!1;this.$&&Qe(this.$,!1)};f.fb=function(a){return this.isEnabled()&&this.w()&&(0!=ie(this)||this.Rf)&&this.hc(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.hc=function(a){var b=O(this,this.N);if(b&&"function"==typeof b.fb&&b.fb(a)||this.$&&this.$!=b&&"function"==typeof this.$.fb&&this.$.fb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Qb())this.ea().blur();else return!1;break;case 36:jf(this);break;case 35:kf(this);break;case 38:if(this.Uc==ff)lf(this);else return!1;break;case 37:if(this.Uc==af)je(this)?mf(this):lf(this);else return!1;break;case 40:if(this.Uc==ff)mf(this);else return!1;break;case 39:if(this.Uc==
af)je(this)?lf(this):mf(this);else return!1;break;default:return!1}return!0};function gf(a,b){var c=b.h(),c=c.id||(c.id=ee(b));a.vb||(a.vb={});a.vb[c]=b}f.cf=function(a,b){ef.i.cf.call(this,a,b)};f.Cc=function(a,b,c){a.Od|=2;a.Od|=64;!this.Qb()&&this.Ni||a.Ka(32,!1);a.A&&0!=a.wd&&Oe(a,!1);a.wd=!1;var d=a.getParent()==this?le(this,a):-1;ef.i.Cc.call(this,a,b,c);a.A&&this.A&&gf(this,a);a=d;-1==a&&(a=ie(this));a==this.N?this.N=Math.min(ie(this)-1,b):a>this.N&&b<=this.N?this.N++:a<this.N&&b>this.N&&this.N--};
f.removeChild=function(a,b){if(a=p(a)?ge(this,a):a){var c=le(this,a);-1!=c&&(c==this.N?(a.hb(!1),this.N=-1):c<this.N&&this.N--);var d=a.h();d&&d.id&&this.vb&&(c=this.vb,d=d.id,d in c&&delete c[d])}c=a=ef.i.removeChild.call(this,a,b);c.A&&1!=c.wd&&Oe(c,!0);c.wd=!0;return a};f.w=function(){return this.R};
f.F=function(a,b){if(b||this.R!=a&&this.dispatchEvent(a?"show":"hide")){this.R=a;var c=this.h();c&&(kd(c,a),this.Qb()&&$e(this.ea(),this.cc&&this.R),b||this.dispatchEvent(this.R?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.cc};f.Jd=function(a){this.cc!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.cc=!0,he(this,function(a){a.ri?delete a.ri:a.Jd(!0)})):(he(this,function(a){a.isEnabled()?a.Jd(!1):a.ri=!0}),this.Tc=this.cc=!1),this.Qb()&&$e(this.ea(),a&&this.R))};
f.Qb=function(){return this.Cf};f.uc=function(a){a!=this.Cf&&this.A&&hf(this,a);this.Cf=a;this.cc&&this.R&&$e(this.ea(),a)};f.Xc=function(a){(a=O(this,a))?a.hb(!0):-1<this.N&&O(this,this.N).hb(!1)};f.hb=function(a){this.Xc(le(this,a))};function jf(a){nf(a,function(a,c){return(a+1)%c},ie(a)-1)}function kf(a){nf(a,function(a,c){a--;return 0>a?c-1:a},0)}function mf(a){nf(a,function(a,c){return(a+1)%c},a.N)}function lf(a){nf(a,function(a,c){a--;return 0>a?c-1:a},a.N)}
function nf(a,b,c){c=0>c?le(a,a.$):c;var d=ie(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=O(a,c);if(g&&a.Pg(g)){a.Xc(c);break}e++;c=b.call(a,c,d)}}f.Pg=function(a){return a.w()&&a.isEnabled()&&!!(a.X&2)};function of(){}v(of,we);ca(of);of.prototype.na=function(){return"goog-menuheader"};function pf(a,b,c){Q.call(this,a,c||of.Nb(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.aa=1}v(pf,Q);se("goog-menuheader",function(){return new pf(null)});function qf(a,b){ef.call(this,ff,b||df.Nb(),a);this.uc(!1)}v(qf,ef);f=qf.prototype;f.ef=!0;f.Oi=!1;f.na=function(){return this.D.na()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.j()};function rf(a){a.ef=!0;a.uc(!0)}f.F=function(a,b,c){(b=qf.i.F.call(this,a,b))&&a&&this.A&&this.ef&&this.ea().focus();this.Th=a&&c&&q(c.clientX)?new C(c.clientX,c.clientY):null;return b};f.If=function(a){this.ef&&this.ea().focus();return qf.i.If.call(this,a)};
f.Pg=function(a){return(this.Oi||a.isEnabled())&&a.w()&&!!(a.X&2)};f.hc=function(a){var b=qf.i.hc.call(this,a);b||he(this,function(c){!b&&c.vj&&c.Mh==a.keyCode&&(this.isEnabled()&&this.hb(c),b=c.fb(a))},this);return b};
f.Xc=function(a){qf.i.Xc.call(this,a);if(a=O(this,a)){var b=a.h();a=this.h();var c=gd(b),d=gd(a),e=pd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new C(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function sf(a,b,c,d){var e=E,g;if(e.pb)g=e.pb();else if(e.ec)g=e.ec();else throw"Not Block or Workspace: "+e;for(var e=Object.create(null),h=0;h<g.length;h++){var k=g[h].wj;if(k)for(var k=k.call(g[h]),l=0;l<k.length;l++){var r=k[l];r&&(e[r.toLowerCase()]=r)}}g=[];for(var n in e)g.push(e[n]);g.sort(wa);g.unshift(null);n=void 0;for(e=0;e<g.length;e++)g[e]!==n&&((h=Zc.variables_get?Xc(d,"variables_get"):null)&&h.rb(),(k=Zc.variables_set?Xc(d,"variables_set"):null)&&k.rb(),null===g[e]?n=(h||k).wj()[0]:
(h&&Yc(h,"VAR").Yc(g[e]),k&&Yc(k,"VAR").Yc(g[e])),k&&a.push(k),h&&a.push(h),h&&k?b.push(c,3*c):b.push(2*c))};/*

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
var tf=/#(.)(.)(.)/;function uf(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=vf(b.toString(16));c=vf(c.toString(16));a=vf(a.toString(16));return"#"+b+c+a}var wf=/^#(?:[0-9a-f]{3}){1,2}$/i;function vf(a){return 1==a.length?"0"+a:a}
function xf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function yf(a,b,c){c=Tb(c,0,1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function zf(a,b,c){if(t(a))c&&(a=ma(a,c));else if(a&&"function"==typeof a.handleEvent)a=ma(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function R(a,b,c){be.call(this,c);this.ga=b||Af;this.Mf=a instanceof nb?a:rb(a,null)}v(R,be);var Bf={};f=R.prototype;f.ig=!1;f.ld=!1;f.Jk=null;f.Mi=xb;f.Bd=!0;f.be=-1;f.Z=function(){R.i.Z.call(this);this.yc&&(this.yc.removeNode(this),this.yc=null);this.u=null};
f.ve=function(){var a=this.h();if(a){var b=Df(this);b&&!b.id&&(b.id=ee(this)+".label");ve(a,"treeitem");P(a,"selected",!1);P(a,"expanded",!1);P(a,"level",this.Kc());b&&P(a,"labelledby",b.id);(a=this.le())&&ve(a,"presentation");(a=this.ke())&&ve(a,"presentation");if(a=Ef(this))if(ve(a,"group"),a.hasChildNodes())for(a=ie(this),b=1;b<=a;b++){var c=O(this,b-1).h();P(c,"setsize",a);P(c,"posinset",b)}}};
f.G=function(){var a=this.eb(),b=this.yg(),c=a.zb,a=c.createElement("div");y?(Pb(a,wb(vb("br"),b)),a.removeChild(a.firstChild)):Pb(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.u=b};f.ha=function(){R.i.ha.call(this);Bf[ee(this)]=this;this.ve()};f.Ra=function(){R.i.Ra.call(this);delete Bf[ee(this)]};
f.Cc=function(a,b){var c=O(this,b-1),d=O(this,b);R.i.Cc.call(this,a,b);a.nc=c;a.gb=d;c?c.gb=a:this.sh=a;d?d.nc=a:this.Ih=a;var e=this.ta();e&&Ff(a,e);Gf(a,this.Kc()+1);if(this.h()&&(this.ad(),this.Aa())){e=Ef(this);a.h()||a.G();var g=a.h(),h=d&&d.h();e.insertBefore(g,h);this.A&&a.ha();d||(c?c.ad():(kd(e,!0),this.Fb(this.Aa())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.Cc(a,b?le(this,b):ie(this));return a};
f.removeChild=function(a){var b=this.ta(),c=b?b.Ja:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),zf(this.gk,10,this)):this.select();R.i.removeChild.call(this,a);this.Ih==a&&(this.Ih=a.nc);this.sh==a&&(this.sh=a.gb);a.nc&&(a.nc.gb=a.gb);a.gb&&(a.gb.nc=a.nc);c=!a.gb;a.yc=null;a.be=-1;if(b&&(b.removeNode(this),this.A)){b=Ef(this);if(a.A){var d=a.h();b.removeChild(d);a.Ra()}c&&(c=O(this,ie(this)-1))&&c.ad();ke(this)||(b.style.display="none",this.ad(),this.le().className=this.he())}return a};
f.remove=R.prototype.removeChild;f.gk=function(){this.select()};f.Kc=function(){var a=this.be;0>a&&(a=(a=this.getParent())?a.Kc()+1:0,Gf(this,a));return a};function Gf(a,b){if(b!=a.be){a.be=b;var c=Hf(a);if(c){var d=If(a)+"px";je(a)?c.style.paddingRight=d:c.style.paddingLeft=d}he(a,function(a){Gf(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.gc=function(){var a=[];he(this,function(b){a.push(b)});return a};f.xe=function(){return this.ig};
f.select=function(){var a=this.ta();a&&a.vc(this)};function Jf(a,b){if(a.ig!=b){a.ig=b;Kf(a);var c=a.h();c&&(P(c,"selected",b),b&&(c=a.ta().h(),P(c,"activedescendant",ee(a))))}}f.Aa=function(){return this.ld};
f.Fb=function(a){var b=a!=this.ld;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.ld=a;c=this.ta();var d=this.h();if(ke(this)){if(!a&&c&&this.contains(c.Ja)&&this.select(),d){if(c=Ef(this))if(kd(c,a),a&&this.A&&!c.hasChildNodes()){var e=[];he(this,function(a){e.push(a.yg())});Pb(c,wb(e));he(this,function(a){a.ha()})}this.ad()}}else(c=Ef(this))&&kd(c,!1);d&&(this.le().className=this.he(),P(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Fb(!this.Aa())};
f.expand=function(){this.Fb(!0)};f.collapse=function(){this.Fb(!1)};f.hg=function(){var a=this.getParent();a&&(a.Fb(!0),a.hg())};f.yg=function(){var a=this.ta(),b=!a.Ld||a==this.getParent()&&!a.og?this.ga.Wg:this.ga.Vg,a=this.Aa()&&ke(this),b={"class":b,style:Lf(this)},c=[];a&&he(this,function(a){c.push(a.yg())});a=vb("div",b,c);return vb("div",{"class":this.ga.eh,id:ee(this)},[Mf(this),a])};function If(a){return Math.max(0,(a.Kc()-1)*a.ga.Pf)}
function Mf(a){var b={};b["padding-"+(je(a)?"right":"left")]=If(a)+"px";var b={"class":a.rd(),style:b},c=a.Ff(),d=vb("span",{style:{display:"inline-block"},"class":a.he()}),e=vb("span",{"class":a.ga.fh,title:a.Jk||null},a.Mf);a=wb(e,vb("span",{},a.Mi));return vb("div",b,[c,d,a])}f.rd=function(){return this.ga.sf+(this.xe()?" "+this.ga.hh:"")};f.Ff=function(){return vb("span",{type:"expand",style:{display:"inline-block"},"class":Nf(this)})};
function Nf(a){var b=a.ta(),c=!b.Ld||b==a.getParent()&&!b.og,d=a.ga,e=new pa;e.append(d.bc," ",d.aj," ");if(ke(a)){var g=0;b.ng&&a.Bd&&(g=a.Aa()?2:1);c||(g=a.gb?g+8:g+4);switch(g){case 1:e.append(d.ej);break;case 2:e.append(d.dj);break;case 4:e.append(d.$g);break;case 5:e.append(d.cj);break;case 6:e.append(d.bj);break;case 8:e.append(d.ah);break;case 9:e.append(d.gj);break;case 10:e.append(d.fj);break;default:e.append(d.Zg)}}else c?e.append(d.Zg):a.gb?e.append(d.ah):e.append(d.$g);return e.toString()}
function Lf(a){var b=a.Aa()&&ke(a);return db({"background-position":Of(a),display:b?null:"none"})}function Of(a){return(a.gb?(a.Kc()-1)*a.ga.Pf:"-100")+"px 0"}f.h=function(){var a=R.i.h.call(this);a||(this.u=a=this.eb().h(ee(this)));return a};function Hf(a){return(a=a.h())?a.firstChild:null}f.ke=function(){var a=Hf(this);return a?a.firstChild:null};f.le=function(){var a=Hf(this);return a?a.childNodes[1]:null};function Df(a){return(a=Hf(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Ef(a){return(a=a.h())?a.lastChild:null}f.Gb=function(a){this.Mf=a=qb(a);var b=Df(this);b&&Pb(b,a);(a=this.ta())&&Pf(a,this)};f.Bb=function(){var a=pb(this.Mf);return-1!=a.indexOf("&")?"document"in m?Fa(a):Ha(a):a};function Kf(a){var b=Hf(a);b&&(b.className=a.rd())}f.ad=function(){var a=this.ke();a&&(a.className=Nf(this));if(a=Ef(this))a.style.backgroundPosition=Of(this)};f.Yf=function(a){"expand"==a.target.getAttribute("type")&&ke(this)?this.Bd&&this.toggle():(this.select(),Kf(this))};
f.Ph=function(a){"expand"==a.target.getAttribute("type")&&ke(this)||this.Bd&&this.toggle()};function Qf(a){return a.Aa()&&ke(a)?Qf(O(a,ie(a)-1)):a}function Ff(a,b){a.yc!=b&&(a.yc=b,Pf(b,a),he(a,function(a){Ff(a,b)}))}
var Af={Pf:19,gh:"goog-tree-root goog-tree-item",dh:"goog-tree-hide-root",eh:"goog-tree-item",Vg:"goog-tree-children",Wg:"goog-tree-children-nolines",sf:"goog-tree-row",fh:"goog-tree-item-label",bc:"goog-tree-icon",aj:"goog-tree-expand-icon",ej:"goog-tree-expand-icon-plus",dj:"goog-tree-expand-icon-minus",gj:"goog-tree-expand-icon-tplus",fj:"goog-tree-expand-icon-tminus",cj:"goog-tree-expand-icon-lplus",bj:"goog-tree-expand-icon-lminus",ah:"goog-tree-expand-icon-t",$g:"goog-tree-expand-icon-l",Zg:"goog-tree-expand-icon-blank",
qf:"goog-tree-expanded-folder-icon",Xg:"goog-tree-collapsed-folder-icon",rf:"goog-tree-file-icon",bh:"goog-tree-expanded-folder-icon",Yg:"goog-tree-collapsed-folder-icon",hh:"selected"};function Rf(a,b,c){R.call(this,a,b,c)}v(Rf,R);Rf.prototype.ta=function(){if(this.yc)return this.yc;var a=this.getParent();return a&&(a=a.ta())?(Ff(this,a),a):null};Rf.prototype.he=function(){var a=this.Aa(),b=this.qj;if(a&&b)return b;b=this.Jj;if(!a&&b)return b;b=this.ga;if(ke(this)){if(a&&b.qf)return b.bc+" "+b.qf;if(!a&&b.Xg)return b.bc+" "+b.Xg}else if(b.rf)return b.bc+" "+b.rf;return""};/*

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
function Sf(a){var b;I&&(b=workarea.pe());var c=D("xml");a=Lc(a,!0);for(var d=0,e;e=a[d];d++){var g=Tf(e);e=e.P();g.setAttribute("x",I?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}c.setAttribute("level",H);return c}
function Tf(a){var b=D("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Nh){var c=a.Nh();c&&b.appendChild(c)}for(var d=0;c=a.V[d];d++)for(var e=0,g;g=c.ma[e];e++)if(g.name&&g.bd){var h=D("field",null,g.xh());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.th())c=D("comment",null,c),"object"==typeof a.M&&(c.setAttribute("pinned",a.M.w()),d=a.M.fc(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.V[e];e++){var k;g=!0;5!=c.type&&
(h=S(c.n),1==c.type?(k=D("value"),d=!0):3==c.type&&(k=D("statement")),h&&(k.appendChild(Tf(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.zd);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Hc&&!N||b.setAttribute("deletable",!1);a.Db&&!N||b.setAttribute("movable",!1);a.Jc&&!N||b.setAttribute("editable",!1);if(a=Uf(a))k=D("next",null,Tf(a)),b.appendChild(k);return b}
function Vf(a){return(new XMLSerializer).serializeToString(a)}function Wf(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function Xf(a,b){var c;I&&(c=a.pe());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=Yf(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(I?c-h:h,e)}}
function Yf(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=Zf(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.s&&d.j(!0,!1,!0);d.fill(a,e);d.pa=g}else d=Xc(a,e);d.rb&&d.rb();(g=b.getAttribute("inline"))&&$f(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Id("true"==g);(g=b.getAttribute("deletable"))&&ag(d,"true"==g);if(g=b.getAttribute("movable"))d.Db="true"==g;(g=b.getAttribute("editable"))&&bg(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,l=0,r;r=k.childNodes[l];l++)3==r.nodeType&&r.data.match(/^\s*$/)||(h=r);l=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.mj&&(d.mj(k),d.rb&&d.rb());break;case "comment":d.Hd(k.textContent);var n=k.getAttribute("pinned");n&&setTimeout(function(){d.M&&d.M.F&&d.M.F("true"==n)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.M&&d.M.F&&d.M.sc(h,k);break;case "title":case "field":Yc(d,l).Yc(k.textContent);break;case "value":case "statement":k=cg(d,l);if(!k)throw"Input "+l+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=Yf(a,h,c),h.L)dg(k.n,h.L);else if(h.B)dg(k.n,h.B);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.K)throw"Next statement does not exist.";if(d.K.m)throw"Next statement is already connected.";
h=Yf(a,h,c);if(!h.B)throw"Next block does not have previous statement.";dg(d.K,h.B)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.tc("true"==b);a.v&&((a=Uf(d))?a.H():d.H());return d}function eg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}m.Blockly||(m.Blockly={});m.Blockly.Xml||(m.Blockly.Xml={});m.Blockly.Xml.domToText=Vf;m.Blockly.Xml.domToWorkspace=Xf;m.Blockly.Xml.textToDom=Wf;
m.Blockly.Xml.workspaceToDom=Sf;/*

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
function fg(a,b,c,d,e,g,h){var k=gg;I&&(k=-k);this.Qi=k*Math.PI/180;this.t=a;this.xb=b;this.fi=c;a.Zc.appendChild(this.pf(b,!(!g||!h)));hg(this,d,e);g&&h||(a=this.xb.getBBox(),g=a.width+2*ig,h=a.height+2*ig);this.sc(g,h);jg(this);kg(this);this.gg=!0;N||(L(this.Yd,"mousedown",this,this.Ui),this.Eb&&L(this.Eb,"mousedown",this,this.sk))}var ig=6,gg=20,lg=null,mg=null;function ng(){lg&&(M(lg),lg=null);mg&&(M(mg),mg=null)}f=fg.prototype;f.gg=!1;f.Wa=0;f.hf=0;f.pc=0;f.Fd=0;f.J=0;f.Ga=0;f.lf=!0;
f.pf=function(a,b){this.Xa=K("g",{},null);var c=K("g",{filter:"url(#blocklyEmboss)"},this.Xa);this.Mg=K("path",{},c);this.Yd=K("rect",{"class":"blocklyDraggable",x:0,y:0,rx:ig,ry:ig},c);b?(this.Eb=K("g",{"class":I?"blocklyResizeSW":"blocklyResizeSE"},this.Xa),c=2*ig,K("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.Eb),K("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.Eb),K("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.Eb)):this.Eb=
null;this.Xa.appendChild(a);return this.Xa};f.Ui=function(a){og(this);ng();Sc(a)||pg(a)||(qg(rg),this.ph=I?this.pc+a.clientX:this.pc-a.clientX,this.oj=this.Fd-a.clientY,lg=L(document,"mouseup",this,ng),mg=L(document,"mousemove",this,this.Vi),sg(),a.stopPropagation())};f.Vi=function(a){this.lf=!1;this.pc=I?this.ph-a.clientX:this.ph+a.clientX;this.Fd=this.oj+a.clientY;jg(this);kg(this)};
f.sk=function(a){og(this);ng();Sc(a)||(qg(rg),this.rk=I?this.J+a.clientX:this.J-a.clientX,this.qk=this.Ga-a.clientY,lg=L(document,"mouseup",this,ng),mg=L(document,"mousemove",this,this.tk),sg(),a.stopPropagation())};f.tk=function(a){this.lf=!1;var b=this.rk,c=this.qk+a.clientY,b=I?b-a.clientX:b+a.clientX;this.sc(b,c);I&&jg(this)};function og(a){a.Xa.parentNode.appendChild(a.Xa)}function hg(a,b,c){a.Wa=b;a.hf=c;a.gg&&jg(a)}
function jg(a){a.Xa.setAttribute("transform","translate("+(I?a.Wa-a.pc-a.J:a.Wa+a.pc)+", "+(a.Fd+a.hf)+")")}f.fc=function(){return{width:this.J,height:this.Ga}};
f.sc=function(a,b){var c=2*ig;a=Math.max(a,c+45);b=Math.max(b,c+18);this.J=a;this.Ga=b;this.Yd.setAttribute("width",a);this.Yd.setAttribute("height",b);this.Eb&&(I?this.Eb.setAttribute("transform","translate("+2*ig+", "+(b-c)+") scale(-1 1)"):this.Eb.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.gg){if(this.lf){var c=-this.J/4,d=-this.Ga-25,e=this.t.Ob();I?this.Wa-e.Na-c-this.J<T?c=this.Wa-e.Na-this.J-T:this.Wa-e.Na-c>e.da&&(c=this.Wa-e.Na-e.da):this.Wa+c<e.Na?c=e.Na-this.Wa:
e.Na+e.da<this.Wa+c+this.J+10+T&&(c=e.Na+e.da-this.Wa-this.J-T);this.hf+d<e.Xb&&(d=this.fi.getBBox().height);this.pc=c;this.Fd=d}jg(this);kg(this)}tg(this.Xa,"resize")};
function kg(a){var b=[],c=a.J/2,d=a.Ga/2,e=-a.pc,g=-a.Fd;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;I&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var l=k+Math.PI/2;l>2*Math.PI&&(l-=2*Math.PI);var r=Math.sin(l),n=Math.cos(l),x=a.fc(),l=(x.width+x.height)/10,l=Math.min(l,x.width,x.height)/2,x=1-8/h,e=c+x*e,g=d+x*g,x=c+l*n,u=d+l*r,c=c-l*n,d=d-l*r,r=k+a.Qi;r>2*Math.PI&&(r-=2*Math.PI);k=Math.sin(r)*h/4;h=Math.cos(r)*h/4;b.push("M"+x+","+u);b.push("C"+(x+h)+","+(u+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.Mg.setAttribute("d",b.join(" "))}f.lg=function(a){this.Yd.setAttribute("fill",a);this.Mg.setAttribute("fill",a)};f.j=function(){ng();F(this.Xa);this.fi=this.xb=this.t=this.Xa=null};/*

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
function ug(a){this.t=a}f=ug.prototype;f.ed=47;f.Ze=45;f.cd=15;f.xi=35;f.Fg=35;f.Wd=25;f.Qc=!1;f.g=null;f.Xe=null;f.Tf=0;f.Tb=0;f.Jh=0;f.ni=0;
f.G=function(){this.g=K("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=K("clipPath",{id:"blocklyTrashBodyClipPath"},this.g);K("rect",{width:this.ed,height:this.Ze,y:this.cd},a);K("image",{width:vg,height:wg,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.g).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",xg+yg);a=K("clipPath",{id:"blocklyTrashLidClipPath"},this.g);K("rect",{width:this.ed,height:this.cd},a);this.Xe=K("image",{width:vg,height:wg,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.g);this.Xe.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",xg+yg);this.jf();return this.g};f.U=function(){zg(this,!1);this.Ub();L(window,"resize",this,this.Ub)};f.j=function(){this.g&&(F(this.g),this.g=null);this.t=this.Xe=null;m.clearTimeout(this.Tf)};f.Ub=function(){var a=this.t.Ob();a&&(this.Jh=I?this.Fg:a.da+a.Oa-this.ed-this.Fg,this.ni=a.ra+a.Pa-(this.Ze+this.cd)-this.xi,this.g.setAttribute("transform","translate("+this.Jh+","+this.ni+")"))};
f.qd=function(){var a=Ag(this.g);return new ad(a.x-this.Wd,a.y-this.Wd,this.ed+2*this.Wd,this.Ze+this.cd+2*this.Wd)};function zg(a,b){a.Qc!=b&&(m.clearTimeout(a.Tf),a.Qc=b,a.jf())}f.jf=function(){this.Tb+=this.Qc?.2:-.2;this.Tb=Tb(this.Tb,0,1);var a=45*this.Tb;this.Xe.setAttribute("transform","rotate("+(I?-a:a)+", "+(I?4:this.ed-4)+", "+(this.cd-2)+")");this.g.style.opacity=.2+.2*this.Tb;if(0<this.Tb||1>this.Tb)this.Tf=zf(this.jf,20,this)};f.close=function(){zg(this,!1)};/*

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
function Bg(a){this.t=a;this.Q=null;this.sd=new Cg(a,!0,!0);this.Ud=new Cg(a,!1,!0);this.gd=K("rect",{height:T,width:T,style:"fill: #fff"},null);Dg(this.gd,a.Zc)}Bg.prototype.j=function(){M(this.He);this.He=null;F(this.gd);this.Q=this.t=this.gd=null;this.sd.j();this.sd=null;this.Ud.j();this.Ud=null};
Bg.prototype.resize=function(){var a=this.t.Ob();if(a){var b=!1,c=!1;this.Q&&this.Q.da==a.da&&this.Q.ra==a.ra&&this.Q.Pa==a.Pa&&this.Q.Oa==a.Oa?(this.Q&&this.Q.Fc==a.Fc&&this.Q.Na==a.Na&&this.Q.wb==a.wb||(b=!0),this.Q&&this.Q.Qa==a.Qa&&this.Q.Xb==a.Xb&&this.Q.Za==a.Za||(c=!0)):c=b=!0;b&&this.sd.resize(a);c&&this.Ud.resize(a);this.Q&&this.Q.da==a.da&&this.Q.Oa==a.Oa||this.gd.setAttribute("x",this.Ud.Yb);this.Q&&this.Q.ra==a.ra&&this.Q.Pa==a.Pa||this.gd.setAttribute("y",this.sd.Ye);this.Q=a}};
Bg.prototype.set=function(a,b){this.sd.set(a);this.Ud.set(b)};function Cg(a,b,c){this.t=a;this.Ie=c||!1;this.ua=b;this.pf();b?(this.Ta.setAttribute("height",T),this.ca.setAttribute("height",T-6),this.ca.setAttribute("y",3)):(this.Ta.setAttribute("width",T),this.ca.setAttribute("width",T-6),this.ca.setAttribute("x",3));this.Rh=L(this.Ta,"mousedown",this,this.ck);this.Sh=L(this.ca,"mousedown",this,this.dk)}var Eg,Fg,T=15;aa("document.documentElement.ontouchstart")&&(T=25);f=Cg.prototype;
f.j=function(){this.Ge();this.He&&(M(this.He),this.He=null);M(this.Rh);this.Rh=null;M(this.Sh);this.Sh=null;F(this.g);this.t=this.ca=this.Ta=this.g=null};
f.resize=function(a){if(!a&&(a=this.t.Ob(),!a))return;if(this.ua){var b=a.da;this.Ie?b-=T:this.F(b<a.Qa);this.Ba=b/a.Fc;if(-Infinity===this.Ba||Infinity===this.Ba||isNaN(this.Ba))this.Ba=0;var c=a.da*this.Ba,d=(a.Na-a.wb)*this.Ba;this.ca.setAttribute("width",Math.max(0,c));this.Yb=a.Oa;this.Ie&&I&&(this.Yb+=a.Oa+T);this.Ye=a.Pa+a.ra-T;this.g.setAttribute("transform","translate("+this.Yb+", "+this.Ye+")");this.Ta.setAttribute("width",Math.max(0,b));this.ca.setAttribute("x",Gg(this,d))}else{b=a.ra;
this.Ie?b-=T:this.F(b<a.Qa);this.Ba=b/a.Qa;if(-Infinity===this.Ba||Infinity===this.Ba||isNaN(this.Ba))this.Ba=0;c=a.ra*this.Ba;d=(a.Xb-a.Za)*this.Ba;this.ca.setAttribute("height",Math.max(0,c));this.Yb=a.Oa;I||(this.Yb+=a.da-T);this.Ye=a.Pa;this.g.setAttribute("transform","translate("+this.Yb+", "+this.Ye+")");this.Ta.setAttribute("height",Math.max(0,b));this.ca.setAttribute("y",Gg(this,d))}Hg(this)};
f.pf=function(){this.g=K("g",{},null);this.Ta=K("rect",{"class":"blocklyScrollbarBackground"},this.g);var a=Math.floor((T-6)/2);this.ca=K("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.g);Dg(this.g,this.t.Zc)};f.w=function(){return"none"!=this.g.getAttribute("display")};f.F=function(a){if(a!=this.w()){if(this.Ie)throw"Unable to toggle visibility of paired scrollbars.";a?this.g.setAttribute("display","block"):(this.t.di({x:0,y:0}),this.g.setAttribute("display","none"))}};
f.ck=function(a){this.Ge();if(!Sc(a)){var b=Ig(a),b=this.ua?b.x:b.y,c=Ag(this.ca),c=this.ua?c.x:c.y,d=parseFloat(this.ca.getAttribute(this.ua?"width":"height")),e=parseFloat(this.ca.getAttribute(this.ua?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.ca.setAttribute(this.ua?"x":"y",Gg(this,e));Hg(this)}a.stopPropagation()};
f.dk=function(a){this.Ge();Sc(a)||(this.Ak=parseFloat(this.ca.getAttribute(this.ua?"x":"y")),this.Ck=this.ua?a.clientX:a.clientY,Eg=L(document,"mouseup",this,this.Ge),Fg=L(document,"mousemove",this,this.fk));a.stopPropagation()};f.fk=function(a){this.ca.setAttribute(this.ua?"x":"y",Gg(this,this.Ak+((this.ua?a.clientX:a.clientY)-this.Ck)));Hg(this)};f.Ge=function(){Jg();sg(!0);Eg&&(M(Eg),Eg=null);Fg&&(M(Fg),Fg=null)};
function Gg(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.ua?"width":"height",d=parseFloat(a.Ta.getAttribute(c)),c=parseFloat(a.ca.getAttribute(c));b=Math.min(b,d-c)}return b}function Hg(a){var b=parseFloat(a.ca.getAttribute(a.ua?"x":"y")),c=parseFloat(a.Ta.getAttribute(a.ua?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.ua?c.x=b:c.y=b;a.t.di(c)}f.set=function(a){this.ca.setAttribute(this.ua?"x":"y",a*this.Ba);Hg(this)};
function Dg(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function Kg(a,b){Kg.i.constructor.call(this);this.Ob=a;this.di=b;var c=[];c[1]=new Lg;c[2]=new Lg;c[3]=new Lg;c[4]=new Lg;this.Zi=c}v(Kg,Kc);f=Kg.prototype;f.v=!0;f.Hh=!1;f.yf=!1;f.scrollX=0;f.scrollY=0;f.Ma=null;f.Af=null;f.Wb=null;f.G=function(){this.g=K("g",{},null);this.ba=K("g",{},this.g);this.Zc=K("g",{},this.g);this.Ab();return this.g};
f.j=function(){this.v=!1;Kg.i.j.call(this);this.g&&(F(this.g),this.g=null);this.Zc=this.ba=null;this.ia&&(this.ia.j(),this.ia=null);this.Ma&&(this.Ma.j(),this.Ma=null)};function Mg(){var a=E;if(wc&&!N){a.Ma=new ug(a);var b=a.Ma.G();a.g.insertBefore(b,a.ba);a.Ma.U()}}f.fd=function(a){Kg.i.fd.call(this,a);Ng&&this==E&&-1==Og.indexOf(a)&&Og.push(a)};f.Re=function(a){Kg.i.Re.call(this,a);Ng&&this==E&&Og.wl(a)};f.clear=function(){sg();Kg.i.clear.call(this)};f.pe=function(){return this.Ob().da};
f.H=function(){for(var a=this.ec(),b=0,c;c=a[b];b++)c.gc().length||c.H()};function Pg(a,b){a.zg=b;a.Ag&&(M(a.Ag),a.Ag=null);b&&(a.Ag=L(a.ba,"blocklySelectChange",a,function(){this.zg=!1}))}function Qg(a){var b=E;b.zg&&0!=Tc&&Pg(b,!1);if(b.zg){var c=null;if(a&&(c=Mc(b,a),!c))return;Pg(b,!1);c?c.select():U&&Rg();setTimeout(function(){Pg(b,!0)},1)}}f.Ab=function(){if(this.v){this.Af&&clearTimeout(this.Af);var a=this.ba;a&&(this.Af=setTimeout(function(){tg(a,"blocklyWorkspaceChange")},0))}};
function Sg(a,b){var c=Ig(b),c=new C(c.x,c.y);if(a.jh){if(a.jh.contains(c))return zg(a.Ma,!0),qg(Tg),!0;zg(a.Ma,!1)}if(a.ih&&a.ih.contains(c))return qg(Tg),!0;qg(rg);return!1}Kg.prototype.clear=Kg.prototype.clear;/*

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
function Ug(a){this.za=a}f=Ug.prototype;f.fa=null;f.Nc=0;f.Oc=0;f.Gc=function(){this.va||(this.va=K("g",{},null),this.za.I().appendChild(this.va),L(this.va,"mouseup",this,this.Kj),this.Ac())};f.j=function(){F(this.va);this.va=null;this.F(!1);this.za=null};f.Ac=function(){this.za.Rb?Rc(this.va,"blocklyIconGroup"):Qc(this.va,"blocklyIconGroup")};f.w=function(){return!!this.fa};f.Kj=function(){this.za.Rb||this.F(!this.w())};f.zc=function(){if(this.w()){var a=uf(xf(this.za.Ug));this.fa.lg(a)}};
function Vg(a){var b=a.za.P(),c=Wg(a.va),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Nc||b!==a.Oc)a.Nc=d,a.Oc=b,a.w()&&hg(a.fa,d,b)};/*

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
function Xg(a,b){this.k=a;this.m=null;this.type=b;this.O=this.jb=0;this.qb=!1;this.Lb=this.k.s.Zi}f=Xg.prototype;f.j=function(){if(this.m)throw"Disconnect connection before disposing of it.";this.qb&&Yg(this.Lb[this.type],this);this.qb=!1;Zg==this&&(Zg=null);$g==this&&($g=null)};function ah(a){return 1==a.type||3==a.type}
function dg(a,b){if(a.k==b.k)throw"Attempted to connect a block to itself.";if(a.k.s!==b.k.s)throw"Blocks are on different workspaces.";if(bh[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.m)throw"Source connection already connected (value).";if(b.m){var c=S(b);c.xa(null);if(!c.L)throw"Orphan block does not have an output connection.";for(var d=a.k;d=ch(d,c);)if(S(d))d=S(d);else{dg(d,c.L);c=null;break}c&&setTimeout(function(){dh(c.L,b)},eh)}}else{if(a.m)throw"Source connection already connected (block).";
if(b.m){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=S(b);c.xa(null);if(!c.B)throw"Orphan block does not have a previous connection.";for(d=a.k;d.K;)if(d.K.m)d=Uf(d);else{fh(c.B,d.K)&&(dg(d.K,c.B),c=null);break}c&&setTimeout(function(){dh(c.B,b)},eh)}}var e;ah(a)?(d=a.k,e=b.k):(d=b.k,e=a.k);a.m=b;b.m=a;e.xa(d);d.v&&gh(d);e.v&&gh(e);d.v&&e.v&&(3==a.type||4==a.type?e.H():d.H())}
function ch(a,b){for(var c=!1,d=0;d<a.V.length;d++){var e=a.V[d].n;if(e&&1==e.type&&fh(b.L,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.m;if(!a)throw"Source connection not connected.";if(a.m!=this)throw"Target connection not connected to source connection.";this.m=a.m=null;var b;ah(this)?(b=this.k,a=a.k):(b=a.k,a=this.k);b.v&&b.H();a.v&&(gh(a),a.H())};function S(a){return a.m?a.m.k:null}
function dh(a,b){if(0==Tc){var c=hh(a.k);if(!c.Rb){var d=!1;if(!c.Db||N){c=hh(b.k);if(!c.Db||N)return;b=a;d=!0}c.I().parentNode.appendChild(c.I());var e=b.jb+V-a.jb,g=b.O+V-a.O;d&&(g=-g);I&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.qb&&Yg(this.Lb[this.type],this);this.jb=a;this.O=b;ih(this.Lb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.jb+a,this.O+b)};
f.Ch=function(){var a;1==this.type||2==this.type?(a=I?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=I?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.k.P();Xg.se=K("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.jb-b.x)+", "+(this.O-b.y)+")"},this.k.I())};
function jh(a){var b=Math.round(a.m.jb-a.jb),c=Math.round(a.m.O-a.O);if(0!=b||0!=c){a=S(a);var d=a.I();if(!d)throw"block is not rendered.";d=Wg(d);a.I().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");kh(a,-b,-c)}}
function lh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.m||1==c.type&&c.m&&(!S(c).Db||N)||!fh(x,c))return!0;c=c.k;do{if(n==c)return!0;c=c.getParent()}while(c);var d=h-g[a].jb,c=k-g[a].O,d=Math.sqrt(d*d+c*c);d<=b&&(r=g[a],b=d);return c<b}if(a.m)return{n:null,Xh:b};var g=a.Lb[bh[a.type]],h=a.jb+c,k=a.O+d;c=0;for(var l=d=g.length-2;c<l;)g[l].O<k?c=l:d=l,l=Math.floor((c+d)/2);d=c=l;var r=null,n=a.k,x=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{n:r,Xh:b}}
function fh(a,b){if(!a.Dc||!b.Dc)return!0;for(var c=0;c<a.Dc.length;c++)if(-1!=b.Dc.indexOf(a.Dc[c]))return!0;return!1}f.Wc=function(a){a?(ea(a)||(a=[a]),this.Dc=a,this.m&&!fh(this,this.m)&&(ah(this)?S(this).xa(null):this.k.xa(null),this.k.Ea())):this.Dc=null;return this};
function mh(a){var b=V;function c(a){var c=e-d[a].jb,h=g-d[a].O;Math.sqrt(c*c+h*h)<=b&&l.push(d[a]);return h<b}var d=a.Lb[bh[a.type]],e=a.jb,g=a.O;a=0;for(var h=d.length-2,k=h;a<k;)d[k].O<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,l=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return l}
function nh(a){a.qb||ih(a.Lb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=S(a)){var c;a.isCollapsed()?(c=[],a.L&&c.push(a.L),a.K&&c.push(a.K),a.B&&c.push(a.B)):c=oh(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,nh(c[d]));0==b.length&&(b[0]=a)}return b}function Lg(){}Lg.prototype=[];function ih(a,b){if(b.qb)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].O<b.O)c=e+1;else if(a[e].O>b.O)d=e;else{c=e;break}}a.splice(c,0,b);b.qb=!0}
function Yg(a,b){if(!b.qb)throw"Connection not in database.";b.qb=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].O<b.O?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].O==b.O;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].O==b.O);throw"Unable to find connection in connectionDB.";};/*

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
var Zc={Kk:0,sj:function(){var a=(++Zc.Kk).toString();return Ng?ph(a):a},Yk:function(a){var b={U:function(){var b=this;this.lg(a.dl);this.ic=a.ic;"string"==typeof a.La?this.Ue(a.La):"function"==typeof a.La&&this.Ue(function(){return a.La(b)});"undefined"!=a.jk?qh(this,a.jk):(rh(this,"undefined"==typeof a.nk?!0:a.nk),sh(this,"undefined"==typeof a.bk?!0:a.bk));var d=[];d.push(a.text);a.Pi&&a.Pi.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
Ka("addTemplate() can only handle value inputs.")});d.push(1);a.Pj&&this.Cl(a.Pj);th.prototype.Ad.apply(this,d)}};b.Nh=a.Hl?function(){var b=a.Zj?a.tl():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.Zj;Zc[a.bl]=b}};/*

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
function uh(a){uh.i.constructor.call(this,a);this.Gc()}v(uh,Ug);f=uh.prototype;f.ib="";f.J=160;f.Ga=80;f.Gc=function(){Ug.prototype.Gc.call(this);K("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.va);this.Nf=K("text",{"class":"blocklyIconMark",x:8,y:13},this.va);this.Nf.appendChild(document.createTextNode("?"))};f.Ac=function(){this.w()&&(this.F(!1),this.F(!0));Ug.prototype.Ac.call(this)};
f.pk=function(){var a=this.fa.fc(),b=2*ig;this.nd.setAttribute("width",a.width-b);this.nd.setAttribute("height",a.height-b);this.Da.style.width=a.width-b-4+"px";this.Da.style.height=a.height-b-4+"px"};
f.F=function(a){if(a!=this.w())if((!this.za.Jc||N)&&!this.Da||y)vh.prototype.F.call(this,a);else{var b=this.Bb(),c=this.fc();if(a){a=this.za.s;this.nd=K("foreignObject",{x:ig,y:ig},null);var d=document.createElementNS("http://www.w3.org/1999/xhtml","body");d.setAttribute("xmlns","http://www.w3.org/1999/xhtml");d.className="blocklyMinimalBody";this.Da=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Da.className="blocklyCommentTextarea";this.Da.setAttribute("dir",I?"RTL":"LTR");
d.appendChild(this.Da);this.nd.appendChild(d);L(this.Da,"mouseup",this,this.Ik);this.fa=new fg(a,this.nd,this.za.Hb,this.Nc,this.Oc,this.J,this.Ga);L(this.fa.Xa,"resize",this,this.pk);this.zc();this.ib=null}else this.fa.j(),this.nd=this.Da=this.fa=null;this.Gb(b);this.sc(c.width,c.height)}};f.Ik=function(){og(this.fa);this.Da.focus()};f.fc=function(){return this.w()?this.fa.fc():{width:this.J,height:this.Ga}};f.sc=function(a,b){this.Da?this.fa.sc(a,b):(this.J=a,this.Ga=b)};
f.Bb=function(){return this.Da?this.Da.value:this.ib};f.Gb=function(a){this.Da?this.Da.value=a:this.ib=a};f.j=function(){this.za.M=null;Ug.prototype.j.call(this)};/*

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
var wh=!1,xh=0,yh=0,zh={x:0,y:0},Ah=null,Bh=null,Ch=null,Dh=null,Eh=null,Fh=null;function Gh(){var a=K("g",{"class":"blocklyHidden"},null);Ch=a;Fh=K("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Eh=K("rect",{"class":"blocklyTooltipBackground"},a);Dh=K("text",{"class":"blocklyTooltipText"},a);return a}function Hh(a){L(a,"mouseover",null,Ih);L(a,"mouseout",null,Jh);L(a,"mousemove",null,Kh)}function Ih(a){for(a=a.target;!p(a.La)&&!t(a.La);)a=a.La;Ah!=a&&(Lh(),Bh=null,Ah=a);clearTimeout(xh)}
function Jh(){xh=setTimeout(function(){Bh=Ah=null;Lh()},1);clearTimeout(yh)}function Kh(a){Ah&&Ah.La&&0==Tc&&!Mh&&(wh?(a=Ig(a),10<Math.sqrt(Math.pow(zh.x-a.x,2)+Math.pow(zh.y-a.y,2))&&Lh()):Bh!=Ah&&(clearTimeout(yh),zh=Ig(a),yh=setTimeout(Nh,1E3)))}function Lh(){wh&&(wh=!1,Ch&&(Ch.style.display="none"));clearTimeout(yh)}
function Nh(){Bh=Ah;if(Ch){ec(Dh);var a=Ah.La;t(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,l=1,d=0;d<c.length-1;d++)l<(d+1.5)/k?(l++,b[d]=!0):b[d]=!1;for(var b=Oh(c,b,a),d=Ph(c,b,a),k=c,l=[],r=0;r<k.length;r++)l.push(k[r]),void 0!==b[r]&&l.push(b[r]?"\n":" ");b=l.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)K("tspan",{dy:"1em",x:5},
Dh).appendChild(document.createTextNode(a[c]));wh=!0;Ch.style.display="block";a=Dh.getBBox();c=10+a.width;e=a.height;Eh.setAttribute("width",c);Eh.setAttribute("height",e);Fh.setAttribute("width",c);Fh.setAttribute("height",e);if(I)for(e=a.width,g=0;h=Dh.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=zh.x;e=I?e-(0+c):e+0;c=zh.y+10;g=Qh();c+a.height>g.height&&(c-=a.height+20);I?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);Ch.setAttribute("transform",
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
function Rh(a){this.k=null;this.Md=new Ob(0,25);this.Gb(a)}v(Rh,Oc);f=Rh.prototype;f.clone=function(){return new Rh(this.Bb())};f.bd=!1;f.U=function(a){this.k||(this.k=a,this.Ca=K("text",{"class":"blocklyText"},null),a.I().appendChild(this.Ca),this.Ca.La=this.k,Hh(this.Ca),Pc(this))};f.j=function(){F(this.Ca);this.Ca=null};f.I=function(){return this.Ca};f.Ue=function(a){this.Ca.La=a};/*

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
function Sh(a,b,c,d){this.type=a;this.name=b;this.k=c;this.n=d;this.ma=[];this.align=-1;this.R=!0}function Th(a,b,c){if(!b&&!c)return a;p(b)&&(b=new Rh(b));a.k.v&&b.U(a.k);b.name=c;b.mk&&Th(a,b.mk);a.ma.push(b);b.Hk&&Th(a,b.Hk);a.k.v&&(a.k.H(),a.k.Ea());return a}f=Sh.prototype;f.w=function(){return this.R};
f.F=function(a){var b=[];if(this.R==a)return b;for(var c=(this.R=a)?"block":"none",d=0,e;e=this.ma[d];d++)e.F(a);if(this.n){if(a)b=nh(this.n);else if(d=this.n,d.qb&&Yg(d.Lb[d.type],d),d.m){e=S(d).pb();for(var g=0;g<e.length;g++){for(var h=e[g],k=oh(h,!0),l=0;l<k.length;l++){var r=k[l];r.qb&&Yg(d.Lb[r.type],r)}h=Uh(h);for(k=0;k<h.length;k++)h[k].F(!1)}}if(d=S(this.n))d.I().style.display=c,a||(d.v=!1)}return b};f.Wc=function(a){if(!this.n)throw"This input does not have a connection.";this.n.Wc(a);return this};
function Vh(a,b){a.align=b;a.k.v&&a.k.H();return a}f.U=function(){for(var a=0;a<this.ma.length;a++)this.ma[a].U(this.k)};f.j=function(){for(var a=0,b;b=this.ma[a];a++)b.j();this.n&&this.n.j();this.k=null};/*

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
function vh(a){vh.i.constructor.call(this,a);this.Gc()}v(vh,Ug);f=vh.prototype;f.ib="";f.Gc=function(){Ug.prototype.Gc.call(this);K("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.va);this.Nf=K("text",{"class":"blocklyIconMark",x:8,y:13},this.va);this.Nf.appendChild(document.createTextNode("!"))};
f.F=function(a){if(a!=this.w())if(a){var b=this.ib;a=K("text",{"class":"blocklyText blocklyBubbleText",y:ig},null);for(var b=b.split("\n"),c=0;c<b.length;c++)K("tspan",{dy:"1em",x:ig},a).appendChild(document.createTextNode(b[c]));this.fa=new fg(this.za.s,a,this.za.Hb,this.Nc,this.Oc,null,null);if(I)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+ig);this.zc();a=this.fa.fc();this.fa.sc(a.width,a.height)}else this.fa.j(),this.fa=null};
f.Gb=function(a){this.ib!=a&&(this.ib=a,this.w()&&(this.F(!1),this.F(!0)))};f.j=function(){this.za.Vd=null;Ug.prototype.j.call(this)};/*

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
function th(){}function Xc(a,b){if(Ng)return Wh.create(th,a,b);var c=a.v?new Xh:new th;c.initialize(a,b);return c}f=th.prototype;f.initialize=function(a,b){this.id=Zc.sj();a.fd(this);this.fill(a,b)};
f.fill=function(a,b){this.B=this.K=this.L=null;this.V=[];this.disabled=this.v=this.zd=!1;this.La="";this.contextMenu=!0;this.mc=null;this.kb=[];this.Jc=this.Db=this.Hc=!0;this.ac=!1;this.M=null;this.ti=new C(0,0);this.s=a;this.Rb=a.Hh;if(b){this.type=b;var c=Zc[b],d;for(d in c)this[d]=c[d]}t(this.U)&&this.U()};function Zf(a,b){return Ng?Yh.get(a):Mc(b,a)}
f.j=function(a,b,c){$h(this,a);this.s&&!c&&(this.s.Re(this),this.s=null);U==this&&(U=null);for(a=this.kb.length-1;0<=a;a--)this.kb[a].j(!1);for(a=0;b=this.V[a];a++)b.j();this.V.length=0;b=oh(this,!0);for(a=0;a<b.length;a++)c=b[a],c.m&&c.disconnect(),b[a].j();if(Ng&&!ai)Yh["delete"](this.id.toString())};function $h(a,b){var c;c=!1;if(a.L)a.L.m&&a.xa(null);else{var d=null;a.B&&a.B.m&&(d=a.B.m,a.xa(null));var e=Uf(a);if(b&&e){var g=a.K.m;e.xa(null);d&&fh(d,g)&&dg(d,g)}}c&&a.moveBy(V*(I?-1:1),2*V)}
function oh(a,b){var c=[];if(b||a.v)if(a.L&&c.push(a.L),a.K&&c.push(a.K),a.B&&c.push(a.B),b||!a.ac)for(var d=0,e;e=a.V[d];d++)e.n&&c.push(e.n);return c}f.Ea=function(){if(0==Tc){var a=hh(this);if(!a.Rb)for(var b=oh(this,!1),c=0;c<b.length;c++){var d=b[c];d.m&&ah(d)&&S(d).Ea();for(var e=mh(d),g=0;g<e.length;g++){var h=e[g];d.m&&h.m||hh(h.k)!=a&&(ah(d)?dh(h,d):dh(d,h))}}}};f.getParent=function(){return this.mc};function Uf(a){return a.K&&S(a.K)}
function hh(a){var b=a;do a=b,b=a.mc;while(b);return a}f.gc=function(){return this.kb};f.xa=function(a){if(this.mc){for(var b=this.mc.kb,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.mc=null;this.B&&this.B.m&&this.B.disconnect();this.L&&this.L.m&&this.L.disconnect()}else Va(Lc(this.s,!1),this)&&this.s.Re(this);(this.mc=a)?a.kb.push(this):this.s.fd(this)};f.pb=function(){for(var a=[this],b,c=0;b=this.kb[c];c++)a.push.apply(a,b.pb());return a};function ag(a,b){a.Hc=b;a.li&&bi(a.li)}
function bg(a,b){a.Jc=b;for(var c=0,d;d=a.V[c];c++)for(var e=0,g;g=d.ma[e];e++)g.Ac();d=Uh(a);for(c=0;c<d.length;c++)d[c].Ac()}f.Ue=function(a){this.La=a};f.lg=function(a){this.Ug=a;this.v&&this.zc()};function Yc(a,b){for(var c=0,d;d=a.V[c];c++)for(var e=0,g;g=d.ma[e];e++)if(g.name===b)return g;return null}function rh(a,b){var c;a.B&&(a.B.j(),a.B=null);b&&(void 0===c&&(c=null),a.B=new Xg(a,4),a.B.Wc(c));a.v&&(a.H(),a.Ea())}
function sh(a,b){var c;a.K&&(a.K.j(),a.K=null);b&&(void 0===c&&(c=null),a.K=new Xg(a,3),a.K.Wc(c));a.v&&(a.H(),a.Ea())}function qh(a,b){a.L&&(a.L.j(),a.L=null);void 0===b&&(b=null);a.L=new Xg(a,2);a.L.Wc(b);a.v&&(a.H(),a.Ea())}function $f(a,b){a.zd=b;a.v&&(a.H(),a.Ea(),a.s.Ab())}f.Id=function(a){this.disabled=a};function ci(a){for(;;){a:for(;;){do{var b=a;a=a.getParent();if(!a){a=null;break a}}while(Uf(a)==b);break a}if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.ac};
f.tc=function(a){this.ac=a};f.toString=function(a){for(var b=[],c=0,d;d=this.V[c];c++){for(var e=0,g;g=d.ma[e];e++)b.push(g.Bb());d.n&&((d=S(d.n))?b.push(d.toString()):b.push("?"))}b=ua(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};
f.Ad=function(a,b){function c(a){a instanceof Oc?Th(this,a):Th(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.Ad.Di),g=[],h=0;h<e.length;h+=2){var k=ua(e[h]),l=void 0;k&&g.push(new Rh(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),r=arguments[k];r[1]instanceof Oc?g.push([r[0],r[1]]):l=Vh(di(this,1,r[0]).Wc(r[1]),r[2]);arguments[k]=null}else"\n"==k&&g.length&&(l=di(this,5,""));l&&g.length&&(g.forEach(c,l),g=[])}g.length&&(l=Vh(di(this,
5,""),d),g.forEach(c,l));for(h=1;h<arguments.length-1;h++);$f(this,!a.match(this.Ad.wi))};f.Ad.Di=/(%\d+|\n)/;f.Ad.wi=/%1\s*$/;function di(a,b,c){var d=null;if(1==b||3==b)d=new Xg(a,b);b=new Sh(b,c,a,d);a.V.push(b);a.v&&(a.H(),a.Ea());return b}function cg(a,b){for(var c=0,d;d=a.V[c];c++)if(d.name==b)return d;return null}f.th=function(){return this.M||""};f.Hd=function(a){this.M=a};f.P=function(){return this.ti};f.moveBy=function(a,b){this.ti.translate(a,b)};/*

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
function ei(){var a=this;this.t=new Kg(function(){return fi(a)},function(b){var c=fi(a);c&&(q(b.y)&&(a.t.scrollY=-c.Qa*b.y-c.Za),a.t.ba.setAttribute("transform","translate(0,"+(a.t.scrollY+c.Pa)+")"))});this.t.Hh=!0;this.qh=[];this.Ga=this.J=0;this.nf=[];this.sb=[]}var gi,hi,ii,ji,ki,li;f=ei.prototype;f.Xd=!0;f.ka=8;f.G=function(){this.g=K("g",{},null);this.Ta=K("path",{"class":"blocklyFlyoutBackground"},this.g);this.g.appendChild(this.t.G());return this.g};
f.j=function(){this.Cb();M(this.qh);this.qh.length=0;this.rc&&(this.rc.j(),this.rc=null);this.t=null;this.g&&(F(this.g),this.g=null);this.Qd=this.Ta=null};function fi(a){if(!a.w())return null;var b=a.Ga-2*a.ka,c=a.J;try{var d=a.t.ba.getBBox()}catch(e){d={height:0,y:0}}return{ra:b,da:c,Qa:d.height+d.y,Xb:-a.t.scrollY,Za:0,Pa:a.ka,Oa:0}}
f.U=function(a){this.Qd=a;this.rc=new Cg(this.t,!1,!1);this.Cb();L(window,"resize",this,this.Ub);this.Ub();L(this.g,"wheel",this,this.si);L(this.g,"mousewheel",this,this.si);L(this.Qd.ba,"blocklyWorkspaceChange",this,this.zf);L(this.g,"mousedown",this,this.Fe)};
f.Ub=function(){if(this.w()){var a=this.Qd.Ob();if(a){var b=this.J-this.ka;I&&(b*=-1);var c=["M "+(I?this.J:0)+",0"];c.push("h",b);c.push("a",this.ka,this.ka,0,0,I?0:1,I?-this.ka:this.ka,this.ka);c.push("v",Math.max(0,a.ra-2*this.ka));c.push("a",this.ka,this.ka,0,0,I?0:1,I?this.ka:-this.ka,this.ka);c.push("h",-b);c.push("z");this.Ta.setAttribute("d",c.join(" "));b=a.Oa;I&&(b+=a.da,b-=this.J);this.g.setAttribute("transform","translate("+b+","+a.Pa+")");this.Ga=a.ra;this.rc&&this.rc.resize()}}};
f.si=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Eb&&(b*=10);var c=fi(this),b=c.Xb+b,b=Math.min(b,c.Qa-c.ra),b=Math.max(b,0);this.rc.set(b);a.preventDefault()}};f.w=function(){return this.g&&"block"==this.g.style.display};f.Cb=function(){if(this.w()){this.g.style.display="none";for(var a=0,b;b=this.sb[a];a++)M(b);this.sb.length=0;this.fg&&(M(this.fg),this.fg=null)}};
f.show=function(a){this.Cb();for(var b=Lc(this.t,!1),c=0,d;d=b[c];c++)d.s==this.t&&d.j(!1,!1);for(var c=0,e;e=this.nf[c];c++)F(e);this.nf.length=0;var g=this.ka;this.g.style.display="block";var b=[],h=[];if("VARIABLE"==a)sf(b,h,g,this.t);else if("PROCEDURE"==a)Wc(b,h,g,this.t);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=Yf(this.t,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.pb();e=0;for(var l;l=c[e];e++)l.Rb=!0,l.Hd(null);d.H();l=d.I();e=mi(d);c=I?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=K("rect",{"fill-opacity":0},null);this.t.ba.insertBefore(e,d.I());d.md=e;this.nf[k]=e;this.Xd?this.sb.push(L(l,"mousedown",null,ni(this,d))):this.sb.push(L(l,"mousedown",null,oi(this,d)));this.sb.push(L(l,"mouseover",d,d.df));this.sb.push(L(l,"mouseout",d,d.Qe));this.sb.push(L(e,"mousedown",null,ni(this,d)));this.sb.push(L(e,"mouseover",d,d.df));this.sb.push(L(e,"mouseout",d,d.Qe))}this.sb.push(L(this.Ta,"mouseover",this,function(){for(var a=Lc(this.t,!1),b=0,c;c=a[b];b++)c.Qe()}));
this.J=0;this.Yh();this.zf();pi(window,"resize");this.fg=L(this.t.ba,"blocklyWorkspaceChange",this,this.Yh);this.t.Ab()};
f.Yh=function(){for(var a=0,b=this.ka,c=Lc(this.t,!1),d=0,e;e=c[d];d++)var g=mi(e),a=Math.max(a,g.width);a+=b+8+b/2+T;if(this.J!=a){for(d=0;e=c[d];d++){var g=mi(e),h=e.P();if(I){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.md&&(e.md.setAttribute("width",g.width),e.md.setAttribute("height",g.height),e.md.setAttribute("x",I?h.x-g.width:h.x),e.md.setAttribute("y",h.y))}this.J=a;tg(window,"resize")}};
function oi(a,b){return function(c){qi();sg();Sc(c)?ri(b,c):(Jg(),qg(rg),gi=c,hi=b,ii=a,ji=L(document,"mouseup",this,qi),ki=L(document,"mousemove",this,a.ek));c.stopPropagation()}}f.Fe=function(a){Sc(a)||(sg(!0),si(),this.gi=a.clientY,li=L(document,"mousemove",this,this.Zf),ji=L(document,"mouseup",this,si),a.preventDefault(),a.stopPropagation())};f.Zf=function(a){var b=a.clientY-this.gi;this.gi=a.clientY;a=fi(this);b=a.Xb-b;b=Math.min(b,a.Qa-a.ra);b=Math.max(b,0);this.rc.set(b)};
f.ek=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(Jg(),Math.sqrt(Math.pow(a.clientX-gi.clientX,2)+Math.pow(a.clientY-gi.clientY,2))>ti&&ni(ii,hi)(gi))};function ni(a,b){return function(c){if(!Sc(c)&&!b.disabled){var d=Tf(b),d=Yf(a.Qd,d),e=b.I();if(!e)throw"originBlock is not rendered.";var e=Ag(e),g=d.I();if(!g)throw"block is not rendered.";g=Ag(g);d.moveBy(e.x-g.x,e.y-g.y);a.Xd?a.Cb():a.zf();d.Fe(c)}}}
f.zf=function(){for(var a=Nc(this.Qd),b=Lc(this.t,!1),c=0,d;d=b[c];c++){var e=d.pb().length>a;d.Id(e)}};function si(){ji&&(M(ji),ji=null);ki&&(M(ki),ki=null);li&&(M(li),li=null);ji&&(M(ji),ji=null);ii=hi=gi=null}f.qd=function(){var a=Ag(this.g).x;I||(a-=1E7);return new ad(a,-1E7,1E7+this.J,this.Ga+2E7)};function ui(a){if("function"==typeof a.Hf)return a.Hf();if(p(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function vi(a){this.ub=void 0;this.la={};if(a){var b;if("function"==typeof a.Gf)b=a.Gf();else if("function"!=typeof a.Hf)if(fa(a)||p(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=ui(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=vi.prototype;f.set=function(a,b){wi(this,a,b,!1)};f.add=function(a,b){wi(this,a,b,!0)};
function wi(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.la[g]||(a.la[g]=new vi);a=a.la[g]}if(d&&void 0!==a.ub)throw Error('The collection already contains the key "'+b+'"');a.ub=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.la[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.ub:void 0};f.Hf=function(){var a=[];xi(this,a);return a};function xi(a,b){void 0!==a.ub&&b.push(a.ub);for(var c in a.la)xi(a.la[c],b)}
f.Gf=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.la[e])return[];c=c.la[e]}yi(c,a,b)}else yi(this,"",b);return b};function yi(a,b,c){void 0!==a.ub&&c.push(b);for(var d in a.la)yi(a.la[d],b+d,c)}f.clear=function(){this.la={};this.ub=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.la[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.la[e]}a=b.ub;for(delete b.ub;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.la[e].Gh())delete b.la[e];else break;return a};f.clone=function(){return new vi(this)};f.Gh=function(){var a;if(a=void 0===this.ub)a:{a=this.la;for(var b in a){a=!1;break a}a=!0}return a};function zi(){this.lc=new vi}f=zi.prototype;f.Y="";f.Uf=null;f.Be=null;f.Dd=0;f.Sc=0;function Ai(a,b){var c=!1,d=a.lc.Gf(b);d&&d.length&&(a.Sc=0,a.Dd=0,c=a.lc.get(d[0]),c=Bi(a,c))&&(a.Uf=d);return c}function Bi(a,b){var c;b&&(a.Sc<b.length&&(c=b[a.Sc],a.Be=b),c&&(c.hg(),c.select()));return!!c}f.clear=function(){this.Y=""};function Ci(a,b,c,d,e){this.reset(a,b,c,d,e)}Ci.prototype.rh=null;var Di=0;Ci.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Di++;d||oa();this.Cd=a;this.Yj=b;delete this.rh};Ci.prototype.ci=function(a){this.Cd=a};function Ei(a){this.Oh=a;this.Bh=this.S=this.Cd=this.pa=null}function Fi(a,b){this.name=a;this.value=b}Fi.prototype.toString=function(){return this.name};var Gi=new Fi("WARNING",900),Hi=new Fi("INFO",800),Ii=new Fi("CONFIG",700),Ji=new Fi("FINE",500);f=Ei.prototype;f.getName=function(){return this.Oh};f.getParent=function(){return this.pa};f.gc=function(){this.S||(this.S={});return this.S};f.ci=function(a){this.Cd=a};
function Ki(a){if(a.Cd)return a.Cd;if(a.pa)return Ki(a.pa);Ka("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=Ki(this).value)for(t(b)&&(b=b()),a=new Ci(a,String(b),this.Oh),c&&(a.rh=c),c="log:"+a.Yj,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Bh)for(var e=0,g=void 0;g=b.Bh[e];e++)g(d);c=c.getParent()}};
f.Vd=function(a,b){this.log(Gi,a,b)};f.info=function(a,b){this.log(Hi,a,b)};var Li={},Mi=null;function Ni(a){Mi||(Mi=new Ei(""),Li[""]=Mi,Mi.ci(Ii));var b;if(!(b=Li[a])){b=new Ei(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=Ni(a.substr(0,c));c.gc()[d]=b;b.pa=c;Li[a]=b}return b};function Oi(a){$d.call(this);this.u=a;a=y?"focusout":"blur";this.Vj=Md(this.u,y?"focusin":"focus",this,!y);this.Wj=Md(this.u,a,this,!y)}v(Oi,$d);Oi.prototype.handleEvent=function(a){var b=new Gd(a.sa);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};Oi.prototype.Z=function(){Oi.i.Z.call(this);Td(this.Vj);Td(this.Wj);delete this.u};function Pi(a,b,c){R.call(this,a,b,c);this.ld=!0;Jf(this,!0);this.Ja=this;this.Sd=new zi;if(y)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.Lh)&&a.Vd("Failed to enable background image cache",void 0)}}v(Pi,R);f=Pi.prototype;f.oa=null;f.Bf=null;f.Lh=Ni("goog.ui.tree.TreeControl");f.Df=!1;f.rj=null;f.Ld=!0;f.ng=!0;f.xc=!0;f.og=!0;f.ta=function(){return this};f.Kc=function(){return 0};f.hg=function(){};f.Bj=function(){this.Df=!0;oe(this.h(),"focused");this.Ja&&this.Ja.select()};
f.xj=function(){this.Df=!1;qe(this.h(),"focused")};f.hasFocus=function(){return this.Df};f.Aa=function(){return!this.xc||Pi.i.Aa.call(this)};f.Fb=function(a){this.xc?Pi.i.Fb.call(this,a):this.ld=a};f.Ff=function(){return xb};f.le=function(){var a=Hf(this);return a?a.firstChild:null};f.ke=function(){return null};f.ad=function(){};f.rd=function(){return Pi.i.rd.call(this)+(this.xc?"":" "+this.ga.dh)};
f.he=function(){var a=this.Aa(),b=this.qj;if(a&&b)return b;b=this.Jj;if(!a&&b)return b;b=this.ga;return a&&b.bh?b.bc+" "+b.bh:!a&&b.Yg?b.bc+" "+b.Yg:""};f.vc=function(a){if(this.Ja!=a){var b=!1;this.Ja&&(b=this.Ja==this.rj,Jf(this.Ja,!1));if(this.Ja=a)Jf(a,!0),b&&a.select();this.dispatchEvent("change")}};function Qi(a){0!=a.Ld&&(a.Ld=!1,a.A&&Ri(a))}
function Ri(a){function b(a){var h=Ef(a);if(h){var k=!d||c==a.getParent()&&!e?a.ga.Wg:a.ga.Vg;h.className=k;if(h=a.ke())h.className=Nf(a)}he(a,b)}var c=a,d=c.Ld,e=c.og;b(a)}function Si(a){0!=a.ng&&(a.ng=!1,a.A&&Ri(a))}function Ti(a){if(0!=a.xc){a.xc=!1;if(a.A){var b=Hf(a);b&&(b.className=a.rd())}a.Ja==a&&O(a,0)&&a.vc(O(a,0))}}f.ve=function(){Pi.i.ve.call(this);var a=this.h();ve(a,"tree");P(a,"labelledby",Df(this).id)};
f.ha=function(){Pi.i.ha.call(this);var a=this.h();a.className=this.ga.gh;a.setAttribute("hideFocus","true");a=this.h();a.tabIndex=0;var b=this.oa=new He(a),c=this.Bf=new Oi(a);fe(this).C(c,"focusout",this.xj).C(c,"focusin",this.Bj).C(b,"key",this.fb).C(a,"mousedown",this.Jf).C(a,"click",this.Jf).C(a,"dblclick",this.Jf);this.ve()};f.Ra=function(){Pi.i.Ra.call(this);this.oa.j();this.oa=null;this.Bf.j();this.Bf=null};
f.Jf=function(a){var b=this.Lh;b&&b.log(Ji,"Received event "+a.type,void 0);if(b=Ui(this,a))switch(a.type){case "mousedown":b.Yf(a);break;case "click":a.preventDefault();break;case "dblclick":b.Ph(a)}};
f.fb=function(a){var b=!1,b=this.Sd,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Uf;if(d){var e=null,g=!1;if(b.Be){var h=b.Sc+c;0<=h&&h<b.Be.length?(b.Sc=h,e=b.Be):g=!0}e||(h=b.Dd+c,0<=h&&h<d.length&&(b.Dd=h),d.length>b.Dd&&(e=b.lc.get(d[b.Dd])),e&&e.length&&g&&(b.Sc=-1==c?e.length-1:0));Bi(b,e)&&(b.Uf=d)}c=!0}break;case 8:d=b.Y.length-1;c=!0;0<d?(b.Y=b.Y.substring(0,d),Ai(b,b.Y)):0==d?b.Y="":c=!1;break;case 27:b.Y="",c=!0}if(!(b=c)&&(b=this.Ja)){b=this.Ja;c=!0;
switch(a.keyCode){case 39:if(a.altKey)break;ke(b)&&(b.Aa()?O(b,0).select():b.Fb(!0));break;case 37:if(a.altKey)break;ke(b)&&b.Aa()&&b.Bd?b.Fb(!1):(d=b.getParent(),e=b.ta(),d&&(e.xc||d!=e)&&d.select());break;case 40:a:if(ke(b)&&b.Aa())d=O(b,0);else{for(d=b;d!=b.ta();){e=d.gb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.nc;null!=d?d=Qf(d):(d=b.getParent(),e=b.ta(),d=!e.xc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.ta())&&e.Sd.clear());
b=c}b||(b=this.Sd,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.Y)&&(b.Y+=d,c=Ai(b,b.Y))),b=c);b&&a.preventDefault();return b};function Ui(a,b){for(var c=null,d=b.target;null!=d;){if(c=Bf[d.id])return c;if(d==a.h())break;d=d.parentNode}return null}f.createNode=function(a){return new Rf(a||xb,this.ga,this.eb())};
function Pf(a,b){var c=a.Sd,d=b.Bb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.lc.get(d);e?e.push(b):c.lc.set(d,[b])}}f.removeNode=function(a){var b=this.Sd,c=a.Bb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.lc.get(c);d&&(Wa(d,a),d.length&&b.lc.remove(c))}};/*

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
function Vi(a,b){this.Zb=D("div","blocklyToolboxDiv");this.Zb.setAttribute("dir",I?"RTL":"LTR");b.appendChild(this.Zb);this.ia=new ei;a.appendChild(this.ia.G());L(this.Zb,"mousedown",this,function(a){Sc(a)||a.target==this.Zb?sg(!1):sg(!0)})}f=Vi.prototype;f.width=0;f.af={Pf:19,gh:"blocklyTreeRoot",dh:"blocklyHidden",eh:"",sf:"blocklyTreeRow",fh:"blocklyTreeLabel",bc:"blocklyTreeIcon",qf:"blocklyTreeIconOpen",rf:"blocklyTreeIconNone",hh:"blocklyTreeSelected"};
f.U=function(){this.af.cleardotPath=xg+"1x1.gif";this.af.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(I?"Rtl":"Ltr");var a=new Wi(this,this.af);this.Rd=a;Ti(a);Qi(a);Si(a);a.vc(null);this.Zb.style.display="block";this.ia.U(E);Xi(this);a.H(this.Zb);var b=this;Md(window,"resize",function(){b.Ub()});this.Ub()};
f.Ub=function(){var a=this.Zb,b=pd(J),c=Qh();I?(b=Yi(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;I||--this.width};
function Xi(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.$b=[];e.add(k);var l=h.getAttribute("custom");l?k.$b=l:b(h,k)}else"HR"==k?e.add(new Zi):"BLOCK"==k&&e.$b.push(h)}}var c=a.Rd;c.$h();c.$b=[];b(xc,a.Rd);if(c.$b.length)throw"Toolbox cannot have both blocks and categories in the root level.";tg(window,"resize")}
f.qd=function(){return new ad(I?Qh().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function Wi(a,b){this.qa=a;Pi.call(this,xb,b)}v(Wi,Pi);Wi.prototype.ha=function(){Wi.i.ha.call(this);if(Ad){var a=this.h();L(a,"touchstart",this,this.Gj)}};Wi.prototype.Gj=function(a){a.preventDefault();var b=Ui(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Yf(a)},1)};Wi.prototype.createNode=function(a){return new $i(this.qa,a?qb(a):xb,this.ga,this.eb())};
Wi.prototype.vc=function(a){this.Ja!=a&&(Pi.prototype.vc.call(this,a),a&&a.$b&&a.$b.length?this.qa.ia.show(a.$b):this.qa.ia.Cb())};function $i(a,b,c,d){R.call(this,b,c,d);a&&(b=function(){tg(window,"resize")},Md(a.Rd,"expand",b),Md(a.Rd,"collapse",b))}v($i,Rf);R.prototype.Ff=function(){return vb("span")};$i.prototype.Yf=function(){ke(this)&&this.Bd?(this.toggle(),this.select()):this.xe()?this.ta().vc(null):this.select();Kf(this)};$i.prototype.Ph=function(){};
function Zi(){$i.call(this,null,"",aj)}v(Zi,$i);var aj={sf:"blocklyTreeSeparator"};/*

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
var cj={ae:null,show:function(a,b){bj();if(b.length){for(var c=new qf,d=0,e;e=b[d];d++){var g=new Ye(e.text);c.cf(g,!0);g.Jd(e.enabled);e.enabled&&Md(g,"action",function(a){return function(){a()}}(e.Ya))}Md(c,"action",cj.Cb);e=ac();g=dd();c.H(dj);var h=c.h();Qc(h,"blocklyContextMenu");var k=hd(h),d=a.clientX+g.x,l=a.clientY+g.y;a.clientY+k.height>=e.height&&(l-=k.height);I?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);ej(d,l,e,g);rf(c);setTimeout(function(){h.focus()},
1);cj.ae=null}else cj.Cb()},Cb:function(){Mh==cj&&fj();cj.ae=null},cl:function(a,b){return function(){var c=Yf(a.s,b),d=a.P();d.x=I?d.x-V:d.x+V;d.y+=2*V;c.moveBy(d.x,d.y);c.select()}}};/*

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
function Xh(){this.g=K("g",{},null);this.ki=K("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.g);this.Hb=K("path",{"class":"blocklyPath"},this.g);this.wg=K("path",{"class":"blocklyPathLight"},this.g);this.Hb.La=this;Hh(this.Hb);bi(this)}v(Xh,th);f=Xh.prototype;f.height=0;f.width=0;
f.rb=function(){for(var a=0,b;b=this.V[a];a++)b.U();this.De&&this.De.el();this.zc();N||L(this.I(),"mousedown",this,this.Fe);this.s.ba.appendChild(this.I());t(this.onchange)&&L(this.s.ba,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){U&&Rg();U=this;this.df();tg(this.s.ba,"blocklySelectChange")};function Rg(){var a=U;U=null;a.Qe();tg(a.s.ba,"blocklySelectChange")}f.De=null;f.M=null;f.Vd=null;function Uh(a){var b=[];a.De&&b.push(a.De);a.M&&b.push(a.M);a.Vd&&b.push(a.Vd);return b}
var gj=null,hj=null;f=Xh.prototype;f.xa=function(a){var b=this.I();if(this.mc&&b){var c=this.P();this.s.ba.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}Xh.i.xa.call(this,a);a&&(c=this.P(),a.I().appendChild(b),a=this.P(),kh(this,a.x-c.x,a.y-c.y))};f.P=function(){var a=0,b=0,c=this.I();if(c){do var d=Wg(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.s.ba)}return new C(a,b)};
f.moveBy=function(a,b){var c=this.P();this.I().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");kh(this,a,b);ij(this)};function mi(a){var b=a.height,c=a.width;if(a=Uf(a))a=mi(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.tc=function(a){if(this.ac!=a){Xh.i.tc.call(this,a);for(var b=[],c=0,d;d=this.V[c];c++)b.push.apply(b,d.F(!a));if(a){a=Uh(this);for(c=0;c<a.length;c++)a[c].F(!1);c=this.toString(jj);Th(di(this,5,"_TEMP_COLLAPSED_INPUT"),c).U()}else a:{for(c=0;a=this.V[c];c++)if("_TEMP_COLLAPSED_INPUT"==a.name){a.n&&a.n.m&&S(a.n).xa(null);a.j();this.V.splice(c,1);this.v&&(this.H(),this.Ea());break a}Ka('Input "%s" not found.',"_TEMP_COLLAPSED_INPUT")}b.length||(b[0]=this);if(this.v){for(c=0;a=b[c];c++)a.H();this.Ea()}}};
f.Fe=function(a){if(!this.Rb){kj();qi();this.select();sg();if(Sc(a))ri(this,a);else if(this.Db&&!N){Jg();qg(rg);var b=this.P();this.hi=b.x;this.ii=b.y;this.sg=a.clientX;this.tg=a.clientY;Tc=1;gj=L(document,"mouseup",this,this.$f);hj=L(document,"mousemove",this,this.Zf);this.ee=[];for(var b=this.pb(),c=0,d;d=b[c];c++){d=Uh(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Nc,y:g.Oc};g.Ti=d[e];this.ee.push(g)}}}else return;a.stopPropagation()}};
f.$f=function(a){var b=this;lj(function(){qi();if(U&&Zg){dg($g,Zg);if(b.v){var c=(ah($g)?Zg:$g).k;mj("click");var d=Ag(c.g);c.L?(d.x+=I?3:-3,d.y+=13):c.B&&(d.x+=I?-23:23,d.y+=3);c=K("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},J);c.qg=new Date;nj(c)}b.s.Ma&&b.s.Ma.close()}else Sg(b.s,a)&&((c=b.s.Ma)&&zf(c.close,100,c),U.j(!1,!0),tg(window,"resize"));Zg&&(F(Xg.se),delete Xg.se,Zg=null);qg(oj.OPEN)})};
function ri(a,b){if(!N&&a.contextMenu){var c=[];if(a.Hc&&!N&&a.Db&&!N&&!a.Rb){var d={text:pj,enabled:!0,Ya:function(){var b=Tf(a);eg(b);var b=Yf(a.s,b),c=a.P();c.x=I?c.x-V:c.x+V;c.y+=2*V;b.moveBy(c.x,c.y);b.select()}};a.pb().length>Nc(a.s)&&(d.enabled=!1);c.push(d);a.Jc&&!N&&!a.ac&&yc&&(d={enabled:!0},a.M?(d.text=qj,d.Ya=function(){a.Hd(null)}):(d.text=rj,d.Ya=function(){a.Hd("")}),c.push(d));if(!a.ac)for(d=0;d<a.V.length;d++)if(1==a.V[d].type){d={enabled:!0};d.text=a.zd?sj:tj;d.Ya=function(){$f(a,
!a.zd)};c.push(d);break}zc&&(a.ac?(d={enabled:!0},d.text=uj,d.Ya=function(){a.tc(!1)}):(d={enabled:!0},d.text=vj,d.Ya=function(){a.tc(!0)}),c.push(d));Ac&&(d={text:a.disabled?wj:xj,enabled:!ci(a),Ya:function(){a.Id(!a.disabled)}},c.push(d));var d=a.pb().length,e=Uf(a);e&&(d-=e.pb().length);d={text:1==d?yj:zj.replace("%1",String(d)),enabled:!0,Ya:function(){a.j(!0,!0)}};c.push(d)}d={enabled:!(t(a.ic)?!a.ic():!a.ic)};d.text=Aj;d.Ya=function(){var b=t(a.ic)?a.ic():a.ic;b&&window.open(b)};c.push(d);a.hj&&
!a.Rb&&a.hj(c);cj.show(b,c);cj.ae=a}}function kh(a,b,c){if(a.v){for(var d=oh(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=Uh(a);for(e=0;e<d.length;e++)Vg(d[e]);for(e=0;e<a.kb.length;e++)kh(a.kb[e],b,c)}}function Bj(a,b){b?Qc(a.g,"blocklyDragging"):Rc(a.g,"blocklyDragging");for(var c=0;c<a.kb.length;c++)Bj(a.kb[c],b)}
f.Zf=function(a){var b=this;lj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){Jg();var c=a.clientX-b.sg,d=a.clientY-b.tg;if(1==Tc&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>ti){Tc=2;b.xa(null);Bj(b,!0);var e=b.s;e.jh=e.Ma?e.Ma.qd():null;e.ih=e.ia?e.ia.qd():e.qa?e.qa.qd():null}if(2==Tc){b.I().setAttribute("transform","translate("+(b.hi+c)+", "+(b.ii+d)+")");for(e=0;e<b.ee.length;e++){var g=b.ee[e],h=g.Ti,k=g.x+c,g=g.y+d;h.Nc=k;h.Oc=g;h.w()&&hg(h.fa,k,g)}for(var h=oh(b,
!1),g=k=null,l=V,e=0;e<h.length;e++){var r=h[e],n=lh(r,l,c,d);n.n&&(k=n.n,g=r,l=n.Xh)}Zg&&Zg!=k&&(F(Xg.se),delete Xg.se,$g=Zg=null);k&&k!=Zg&&(k.Ch(),Zg=k,$g=g);b.Hc&&!N&&Sg(b.s,a)}}a.stopPropagation()})};function bi(a){a.Db&&!N?Qc(a.g,"blocklyDraggable"):Rc(a.g,"blocklyDraggable")}f.I=function(){return this.g};var Cj=1*(1-Math.SQRT1_2)+1,Dj=3*(1-Math.SQRT1_2)-1,Ej="m "+Cj+","+Cj,Fj="a 3,3 0 0,0 "+(-Dj-1)+","+(2-Dj),Gj="a 3,3 0 0,0 "+(2-Dj)+","+(Dj+1);f=Xh.prototype;
f.j=function(a,b){qi();cj.ae==this&&cj.Cb();$h(this,a);if(b&&this.v){mj("delete");var c=Ag(this.g),d=this.g.cloneNode(!0);d.oi=c.x;d.pi=c.y;d.setAttribute("transform","translate("+d.oi+","+d.pi+")");J.appendChild(d);d.Lg=d.getBBox();d.qg=new Date;Hj(d)}this.v=!1;c=Uh(this);for(d=0;d<c.length;d++)c[d].j();Xh.i.j.call(this,a);F(this.g);this.ki=this.wg=this.Hb=this.g=null};
function Hj(a){var b=(new Date-a.qg)/150;1<b?F(a):(a.setAttribute("transform","translate("+(a.oi+(I?-1:1)*a.Lg.width/2*b+", "+(a.pi+a.Lg.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Hj(a)},10))}function nj(a){var b=(new Date-a.qg)/150;1<b?F(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){nj(a)},10))}
f.zc=function(){if(!this.disabled){var a=uf(xf(this.Ug)),b;b=a;if(!wf.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(tf,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];yf([255,255,255],b,.3);yf([0,0,0],b,.4);this.Hb.setAttribute("fill",a);b=Uh(this);for(a=0;a<b.length;a++)b[a].zc();for(a=0;b=this.V[a];a++)for(var c=0,d;d=b.ma[c];c++)d.Gb(null);this.v&&this.H()}};
function gh(a){a.disabled||ci(a)?(Qc(a.g,"blocklyDisabled"),a.Hb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Rc(a.g,"blocklyDisabled"),a.zc());a=a.gc();for(var b=0,c;c=a[b];b++)gh(c)}f.th=function(){return this.M?this.M.Bb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Hd=function(a){var b=!1;p(a)?(this.M||(this.M=new uh(this),b=!0),this.M.Gb(a)):this.M&&(this.M.j(),b=!0);b&&this.v&&(this.H(),this.Ea())};f.Id=function(a){this.disabled!=a&&(Xh.i.Id.call(this,a),gh(this),this.s.Ab())};
f.df=function(){Qc(this.g,"blocklySelected");this.g.parentNode.appendChild(this.g)};f.Qe=function(){Rc(this.g,"blocklySelected")};
f.H=function(){this.v=!0;var a=10;I&&(a=-a);for(var b=Uh(this),c=0;c<b.length;c++){var d=b[c];d.za.isCollapsed()?d.va.setAttribute("display","none"):(d.va.setAttribute("display","block"),I&&(a-=16),d.va.setAttribute("transform","translate("+a+", 5)"),Vg(d),a=I?a-10:a+26)}var e=a+=I?10:-10,g=this.V,b=[];b.W=e+20;if(this.B||this.K)b.W=Math.max(b.W,40);for(var d=c=0,h=!1,k=!1,l=!1,r=void 0,n=this.zd&&!this.isCollapsed(),x=0,u;u=g[x];x++)if(u.w()){var B;n&&r&&3!=r&&3!=u.type?B=b[b.length-1]:(r=u.type,
B=[],B.type=n&&3!=u.type?-1:u.type,B.height=0,b.push(B));B.push(u);u.qc=25;u.ja=n&&1==u.type?20.5:0;if(u.n&&u.n.m){var va=mi(S(u.n));u.qc=Math.max(u.qc,va.height);u.ja=Math.max(u.ja,va.width)}x==g.length-1&&u.qc--;B.height=Math.max(B.height,u.qc);u.bb=0;1==b.length&&(u.bb+=I?-e:e);for(var va=!1,Cf=0,ib;ib=u.ma[Cf];Cf++){0!=Cf&&(u.bb+=10);var Zh=ib.wh();ib.ja=Zh.width;ib.Se=va&&ib.bd?10:0;u.bb+=ib.ja+ib.Se;B.height=Math.max(B.height,Zh.height);va=ib.bd}-1!=B.type&&(3==B.type?(k=!0,d=Math.max(d,u.bb)):
(1==B.type?h=!0:5==B.type&&(l=!0),c=Math.max(c,u.bb)))}for(e=0;B=b[e];e++)if(B.mi=!1,-1==B.type)for(g=0;u=B[g];g++)if(1==u.type){B.height+=20;B.mi=!0;break}b.We=20+d;k&&(b.W=Math.max(b.W,b.We+30));h?b.W=Math.max(b.W,c+20+8):l&&(b.W=Math.max(b.W,c+20));b.Ij=h;b.ol=k;b.nl=l;d=a;this.L?this.pg=this.Ve=!0:(this.pg=this.Ve=!1,this.B&&(a=S(this.B))&&Uf(a)==this&&(this.Ve=!0),Uf(this)&&(this.pg=!0));h=this.P();k=[];l=[];a=[];c=[];u=b.W;this.Ve?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(I?
Ej:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.B&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.B.moveTo(h.x+(I?-30:30),h.y));k.push("H",u);a.push("H",u+(I?-1:0));this.width=u;for(B=u=0;e=b[B];B++){n=10;0==B&&(n+=I?-d:d);a.push("M",b.W-1+","+(u+1));if(this.isCollapsed())g=e[0],x=u+18,Ij(g.ma,n,x),k.push("l 8,0 0,4 8,4 -16,8 8,4"),I?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),I&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(r=0;g=e[r];r++)x=u+18,e.mi&&(x+=10),n=Ij(g.ma,n,x),5!=g.type&&(n+=g.ja+10),1==g.type&&(l.push("M",n-10+","+(u+10)),l.push("h",6-g.ja),l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),l.push("v",g.qc+1-20),l.push("h",g.ja+2-8),l.push("z"),I?(c.push("M",n-10-3+8-g.ja+","+(u+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.qc-20+3),c.push("h",g.ja-8+1)):(c.push("M",n-10+1+","+(u+10+1)),c.push("v",g.qc+1),c.push("h",6-g.ja),
c.push("M",n-g.ja-10+1.8+","+(u+10+20-.4)),c.push("l","3.04,-1.8")),x=I?h.x-n-8+10+g.ja+1:h.x+n+8-10-g.ja-1,va=h.y+u+10+1,g.n.moveTo(x,va),g.n.m&&jh(g.n));n=Math.max(n,b.W);this.width=Math.max(this.width,n);k.push("H",n);a.push("H",n+(I?-1:0));k.push("v",e.height);I&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],x=u+18,-1!=g.align&&(r=b.W-g.bb-8-20,1==g.align?n+=r:0==g.align&&(n+=(r+n)/2)),Ij(g.ma,n,x),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),r=e.height-20,k.push("v",r),I?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",r)):(a.push("M",b.W-4.2+","+(u+20-.4)),a.push("l","3.04,-1.8")),x=h.x+(I?-b.W-1:b.W+1),va=h.y+u,g.n.moveTo(x,va),g.n.m&&(jh(g.n),this.width=Math.max(this.width,b.W+mi(S(g.n)).width-8+1))):5==e.type?(g=e[0],x=u+18,-1!=g.align&&(r=b.W-g.bb-20,b.Ij&&(r-=8),1==g.align?n+=r:0==g.align&&(n+=(r+n)/2)),Ij(g.ma,n,x),k.push("v",e.height),I&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==B&&(k.push("v",10),I&&a.push("v",9),u+=10),x=u+18,-1!=g.align&&(r=b.We-g.bb-20,1==g.align?n+=r:0==g.align&&(n+=
(r+n)/2)),Ij(g.ma,n,x),n=b.We+30,k.push("H",n),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.W),I?(a.push("M",n-30+Dj+","+(u+Dj)),a.push(Fj),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.W-1)):(a.push("M",n-30+Dj+","+(u+e.height-Dj)),a.push(Gj),a.push("H",b.W)),x=h.x+(I?-n:n),va=h.y+u+1,g.n.moveTo(x,va),g.n.m&&(jh(g.n),this.width=Math.max(this.width,b.We+mi(S(g.n)).width)),B==b.length-1||3==b[B+1].type)&&(k.push("v",
10),I&&a.push("v",9),u+=10);u+=e.height}b.length||(u=25,k.push("V",u),I&&a.push("V",u-1));b=u;this.height=b+1;this.K&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.K.moveTo(I?h.x-30:h.x+30,h.y+b+1),this.K.m&&jh(this.K),this.height+=4);this.pg?(k.push("H 0"),I||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),I||(a.push("M",Cj+","+(b-Cj)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.L?(this.L.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),I?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):I||(this.Ve?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+l.join(" ");this.Hb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.wg.setAttribute("d",b);I&&(this.Hb.setAttribute("transform","scale(-1 1)"),this.wg.setAttribute("transform","scale(-1 1)"),this.ki.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.H():tg(window,"resize");
ij(this)};function Ij(a,b,c){I&&(b=-b);for(var d=0,e;e=a[d];d++)I?(b-=e.Se+e.ja,e.I().setAttribute("transform","translate("+b+", "+c+")"),e.ja&&(b-=10)):(e.I().setAttribute("transform","translate("+(b+e.Se)+", "+c+")"),e.ja&&(b+=e.Se+e.ja+10));return I?-b:b};/*

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
function Qc(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Rc(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function L(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in Jj)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=Jj[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var Jj={};aa("document.documentElement.ontouchstart")&&(Jj={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function M(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function pi(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function tg(a,b){setTimeout(function(){pi(a,b)},0)}
function Wg(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function Ag(a){var b=0,c=0;do{var d=Wg(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=J);return{x:b,y:c}}
function K(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Sc(a){return 2==a.button||a.ctrlKey}
function Yi(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=J.createSVGPoint();d.x=a;d.y=b;a=J.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function Ig(a){return Yi(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)};/*

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
var rg="handclosed",Tg="handdelete",oj={},Kj="",Lj=null,Mj="";function Nj(){var a=Oj.join("\n");Mj=xg.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,Mj),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));Lj=c.sheet;qg("hando")}
function qg(a){if(!N&&Kj!=a){Kj=a;var b="url("+Mj+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=Lj||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;J&&(J.style.cursor="hando"==a?"":b)}}
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
function Pj(a){function b(){Qj(a);Rj()}var c={media:"media/",readOnly:!0,yl:-1!=Sj.indexOf(tc),scrollbars:!1};if(!gc(document,a))throw"Error: container is not in current document.";c&&Tj(c);if(Bc){if(c=document.getElementById("realtime"))c.style.display="block";Uj(b,a)}else b()}
function Tj(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=Wf(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var l=a.scrollbars;void 0===l&&(l=c);var r=a.sounds;void 0===r&&(r=!0);var n=!!a.realtime,x=n?a.realtimeOptions:void 0;
I=!!a.rtl;zc=e;yc=g;Ac=h;N=b;Dc=a.maxBlocks||Infinity;a.media?xg=a.media:a.path&&(xg=a.path+"media/");Ec=c;Fc=l;wc=d;Gc=r;xc=k;Bc=n;Cc=x}
function Qj(a){a.setAttribute("dir","LTR");ce=I;Nj();var b=K("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=K("defs",{},b),d,e;d=K("filter",{id:"blocklyEmboss"},c);K("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=K("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
K("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);K("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);K("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=K("filter",{id:"blocklyTrashcanShadowFilter"},c);K("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);K("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=K("feMerge",{},d);K("feMergeNode",{"in":"offsetBlur"},d);K("feMergeNode",{"in":"SourceGraphic"},
d);d=K("filter",{id:"blocklyShadowFilter"},c);K("feGaussianBlur",{stdDeviation:2},d);c=K("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);K("rect",{width:10,height:10,fill:"#aaa"},c);K("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);E=new Kg(Vj,Wj);b.appendChild(E.G());E.Vf=Dc;N||(Ec?E.qa=new Vi(b,a):(E.ia=new ei,c=E.ia,d=c.G(),c.Xd=!1,fc(d)),Fc||Xj(function(){if(0==Tc){var a=E.Ob(),b=a.Na+a.Oa,c=a.Xb+a.Pa;if(a.Za<c||a.Za+a.Qa>a.ra+c||a.wb<(I?a.Na:
b)||a.wb+a.Fc>(I?a.da:a.da+b))for(var d=Lc(E,!1),e=0,n;n=d[e];e++){var x=n.P(),u=mi(n),B=c+25-u.height-x.y;0<B&&n.moveBy(0,B);B=c+a.ra-25-x.y;0>B&&n.moveBy(0,B);B=25+b-x.x-(I?0:u.width);0<B&&n.moveBy(B,0);B=b+a.da-25-x.x+(I?u.width:0);0>B&&n.moveBy(B,0)}}}));b.appendChild(Gh());a.appendChild(b);J=b;kj();dj=D("div","blocklyWidgetDiv");dj.style.direction=I?"rtl":"ltr";document.body.appendChild(dj)}
function Rj(){L(J,"mousedown",null,Yj);L(J,"contextmenu",null,Zj);L(dj,"contextmenu",null,Zj);Hc||(L(window,"resize",document,kj),L(document,"keydown",null,ak),document.addEventListener("mouseup",bk,!1),Ib&&L(window,"orientationchange",document,function(){tg(window,"resize")}),Hc=!0);if(xc)if(E.qa)E.qa.U();else if(E.ia){E.ia.U(E);E.ia.show(xc.childNodes);E.scrollX=E.ia.J;I&&(E.scrollX*=-1);var a="translate("+E.scrollX+", 0)";E.ba.setAttribute("transform",a);E.Zc.setAttribute("transform",a)}Fc&&(E.Wb=
new Bg(E),E.Wb.resize());Mg();if(Gc){ck([xg+"click.mp3",xg+"click.wav",xg+"click.ogg"],"click");ck([xg+"delete.mp3",xg+"delete.ogg",xg+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)M(b.pop());for(var a in dk){var d=dk[a];d.volume=.01;d.play();d.pause();if(Ib||Hb)break}};b.push(L(document,"mousemove",null,a));b.push(L(document,"touchstart",null,a))}};/*

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
var dj=null,Mh=null,ek=null;function bj(){var a=cj;fj();Mh=a;ek=null;dj.style.display="block"}function fj(){Mh&&(dj.style.display="none",ek&&ek(),ek=Mh=null,ec(dj))}function ej(a,b,c,d){b<d.y&&(b=d.y);I?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);dj.style.left=a+"px";dj.style.top=b+"px"};/*

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
function fk(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=m.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var gk=fk();function W(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function hk(a){this.Xi=W(a,"clientId");this.Bg=gk.userId;document.getElementById(W(a,"authButtonElementId"));document.getElementById(W(a,"authDivElementId"))}hk.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function ik(a,b,c,d){function e(c){gapi.Kb.T.files.we({resource:{mimeType:b,title:a,parents:[{id:c}]}}).dc(d)}function g(){function a(b){gapi.Kb.T.ok.we({fileId:"appdata",resource:{key:"folderId",value:b}}).dc(function(){e(b)})}function b(){gapi.Kb.T.files.we({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).dc(function(b){a(b.id)})}gapi.Kb.T.ok.get({fileId:"appdata",propertyKey:"folderId"}).dc(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Kb.T.files.get({fileId:g}).dc(function(a){a.error||
a.labels.Il?b():e(g)})}})}gapi.Kb.load("drive","v2",function(){g()})}function jk(a){this.Qh=W(a,"onFileLoaded");this.$j=W(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.Dh=W(a,"initializeModel");this.Zh=W(a,"registerTypes",function(){});this.Ig=W(a,"afterAuth",function(){});this.Ri=W(a,"autoCreate",!1);this.jj=W(a,"defaultTitle","New Realtime File");this.ij=W(a,"defaultFolderTitle","");this.Jg=W(a,"afterCreate",function(){});this.kf=new hk(a)}
function kk(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;gk=fk();for(var e in b)gapi.T.tb.load(b[e],a.Qh,a.Dh,a.zh)}jk.prototype.start=function(){var a=this;this.kf.start(function(){a.Zh&&a.Zh();a.Ig&&a.Ig();a.load()})};
jk.prototype.zh=function(a){a.type!=gapi.T.tb.Eg.Wk&&(a.type==gapi.T.tb.Eg.Qk?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.T.tb.Eg.Uk&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
jk.prototype.load=function(){var a=gk.fileIds;a&&(a=a.split(","));var b=this.kf.Bg,b=gk.state;if(a)for(var c in a)gapi.T.tb.load(a[c],this.Qh,this.Dh,this.zh);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.pl;b=d.Bg;kk(this,a,b);return}}this.Ri&&lk(this)}};function lk(a){ik(a.jj,a.$j,a.ij,function(b){b.id?(a.Jg&&a.Jg(b.id),kk(a,[b.id],a.kf.Bg)):(console.error("Error creating file."),console.error(b))})};/*

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
var Og,mk,Ng=!1,nk=null,Wh=null,ok=null,pk=null,Yh=null,ai=!1,qk=null,rk=null,sk=null;function tk(a){var b=a.pj;a=a.pj.length;for(var c=0;c<a;c++){var d=b[c];if(!d.Sj){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Wh?uk(function(){vk(e,!1);wk(e)}):"relativeX"!=d.Wh&&"relativeY"!=d.Wh||uk(function(){e.li||vk(e,!1);wk(e)}))}}}function xk(a){if(!a.Sj){var b=a.newValue;b?vk(b,!a.oldValue):(b=a.oldValue,yk(b))}}function uk(a){if(ai)a();else try{ai=!0,a()}finally{ai=!1}}
function vk(a,b){uk(function(){var c=Wf(a.Cg).firstChild;if(c=Yf(E,c,!0))b&&c.s.fd(c),(b||Va(Og,c))&&wk(c)})}function wk(a){if(!isNaN(a.Ne)&&!isNaN(a.Oe)){var b=Qh().width,c=a.P(),d=a.Ne-c.x;a.moveBy(I?b-d:d,a.Oe-c.y)}}function yk(a){uk(function(){a.j(!0,!0,!0)})}function ij(a){if(a.s==E&&Ng&&!ai){a=hh(a);var b=a.P(),c=!1,d=Tf(a);d.setAttribute("id",a.id);var e=D("xml");e.appendChild(d);d=Vf(e);d!=a.Cg&&(c=!0,a.Cg=d);if(a.Ne!=b.x||a.Oe!=b.y)a.Ne=b.x,a.Oe=b.y,c=!0;c&&Yh.set(a.id.toString(),a)}}
function zk(a,b){gapi.Kb.T.Uh.list({fileId:a}).dc(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.xl){b(e.domain);break}}})}
var Dk={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){Wh=a;var b=a.gl();a.Lc().set("blocks",b);b=a.fl();a.Lc().set("topBlocks",b);rk&&a.Lc().set(rk,a.hl(sk))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){nk=a;a:{for(var b=a.uj(),c=0;c<b.length;c++){var d=b[c];if(d.Tj){ok=d.Al;break a}}ok=void 0}Wh=a.Ce;Yh=Wh.Lc().get("blocks");Og=Wh.Lc().get("topBlocks");
Wh.Lc().addEventListener(gapi.T.tb.bf.Vk,tk);Yh.addEventListener(gapi.T.tb.bf.Xk,xk);pk();a.addEventListener(gapi.T.tb.bf.Rk,Ak);a.addEventListener(gapi.T.tb.bf.Sk,Bk);Ck();a=Og;for(b=0;b<a.length;b++)c=a.get(b),vk(c,!0)},registerTypes:function(){var a=gapi.T.tb.il;a.vl(th,"Block");th.prototype.id=a.of("id");th.prototype.Cg=a.of("xmlDom");th.prototype.Ne=a.of("relativeX");th.prototype.Oe=a.of("relativeY");a.Bl(th,th.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Kb.T.Uh.we({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.dc(function(c){c.error&&zk(a,function(c){b=gapi.Kb.T.Uh.we({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.dc(function(){})})})}};function Ek(){var a=Cc,b=W(a,"chatbox");b&&(rk=W(b,"elementId"),sk=W(b,"initText",Fk));Dk.Xi=W(a,"clientId");mk=W(a,"collabElementId")}
function Uj(a,b){Ek();Ng=!0;Gk(b);pk=function(){a();if(rk){var b=Wh.Lc().get(rk),d=document.getElementById(rk);gapi.T.tb.jl.al(b,d);d.disabled=!1}};qk=new jk(Dk);qk.start()}
function Gk(a){a.style.background="url("+xg+"progress.gif) no-repeat center center";var b=jd(a),c=D("div");c.id=Dk.authDivElementId;var d=D("p",null,Hk);c.appendChild(d);d=D("button",null,"Authorize");d.id=Dk.Zk;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=jd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Ck(){if(mk){var a;a=mk;a=p(a)?document.getElementById(a):a;ec(a);for(var b=nk.uj(),c=0;c<b.length;c++){var d=b[c],e=D("img",{src:d.ul||xg+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.Tj?" ("+Ik+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function Ak(){Ck()}function Bk(){Ck()}function ph(a){var b=ok+"-"+a;return Yh.has(b)?ph("-"+a):b};/*

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
var xg="https://blockly-demo.appspot.com/static/media/",vg=64,wg=92,yg="sprites.png",bh=[,2,1,4,3],dk=Object.create(null),U=null,N=!1,Zg=null,$g=null,ti=5,V=20,eh=250,jj=30,E=null,Jk=null,Tc=0,Kk=null;function Qh(){return{width:J.Og,height:J.Ng}}function kj(){var a=J,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Og!=c&&(a.setAttribute("width",c+"px"),a.Og=c);a.Ng!=b&&(a.setAttribute("height",b+"px"),a.Ng=b);E.Wb&&E.Wb.resize()}
function Yj(a){kj();qi();sg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!N&&U&&b&&Rg();a.target==J&&Sc(a)?Lk(a):(N||b)&&E.Wb&&(E.yf=!0,E.sg=a.clientX,E.tg=a.clientY,E.Bk=E.Ob(),E.Dk=E.scrollX,E.Ek=E.scrollY,"mouseup"in Jj&&(Kk=L(document,"mouseup",null,bk)),Jc=L(document,"mousemove",null,Mk))}function bk(){qg(oj.OPEN);E.yf=!1;Kk&&(M(Kk),Kk=null);Jc&&(M(Jc),Jc=null)}
function Mk(a){if(E.yf){Jg();var b=E.Bk,c=E.Dk+(a.clientX-E.sg),d=E.Ek+(a.clientY-E.tg),c=Math.min(c,-b.wb),d=Math.min(d,-b.Za),c=Math.max(c,b.da-b.wb-b.Fc),d=Math.max(d,b.ra-b.Za-b.Qa);E.Wb.set(-c-b.wb,-d-b.Za);a.stopPropagation()}}
function ak(a){if(!pg(a))if(27==a.keyCode)sg();else if(8==a.keyCode||46==a.keyCode)try{U&&U.Hc&&!N&&(sg(),U.j(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(U&&U.Hc&&!N&&U.Db&&!N&&U.s==E&&(sg(),67==a.keyCode?Nk():88==a.keyCode&&(Nk(),U.j(!0,!0))),86==a.keyCode&&Jk){a=E;var b=Jk;if(!(b.getElementsByTagName("block").length>=Nc(a))){var c=Yf(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){I&&(d=-d);do for(var e=!1,g=a.ec(),
h=0,k;k=g[h];h++)k=k.P(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=I?d-V:d+V,b+=2*V,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function qi(){gj&&(M(gj),gj=null);hj&&(M(hj),hj=null);var a=U;if(2==Tc&&a){var b=a.P();kh(a,b.x-a.hi,b.y-a.ii);delete a.ee;Bj(a,!1);a.H();zf(a.Ea,eh,a);tg(window,"resize");a.s.Ab()}Tc=0;qg(oj.OPEN);si()}function Nk(){var a=U,b=Tf(a);eg(b);a=a.P();b.setAttribute("x",I?-a.x:a.x);b.setAttribute("y",a.y);Jk=b}
function Lk(a){if(!N){var b=[];if(zc){for(var c=!1,d=!1,e=Lc(E,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=Uf(h);d={enabled:d};d.text=Ok;d.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.tc.bind(c,!0),a),c=Uf(c),a+=10};b.push(d);c={enabled:c};c.text=Pk;c.Ya=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.tc.bind(c,!1),a),c=Uf(c),a+=10};b.push(c)}cj.show(a,b)}}function Zj(a){pg(a)||a.preventDefault()}
function sg(a){Lh();fj();!a&&E.qa&&E.qa.ia&&E.qa.ia.Xd&&E.qa.Rd.vc(null)}function Jg(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function pg(a){return"textarea"==a.target.type||"text"==a.target.type}
function ck(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(dk[b]=c)}}function mj(a,b){var c=dk[a];c&&(c=Nb&&9===Nb||Ib||Gb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function Vj(){var a=Qh();E.qa&&(a.width-=E.qa.width);var b=a.width-T,c=a.height-T;try{var d=E.ba.getBBox()}catch(e){return null}if(E.Wb)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!I&&E.qa&&(d=E.qa.width);return{ra:a.height,da:a.width,Qa:c-h,Fc:b-g,Xb:-E.scrollY,Na:-E.scrollX,Za:h,wb:g,Pa:0,Oa:d}}
function Wj(a){if(!E.Wb)throw"Attempt to set main workspace scroll without scrollbars.";var b=Vj();q(a.x)&&(E.scrollX=-b.Fc*a.x-b.wb);q(a.y)&&(E.scrollY=-b.Qa*a.y-b.Za);a="translate("+(E.scrollX+b.Oa)+","+(E.scrollY+b.Pa)+")";E.ba.setAttribute("transform",a);E.Zc.setAttribute("transform",a)}function lj(a){a()}function Xj(a){return L(E.ba,"blocklyWorkspaceChange",null,a)}m.Blockly||(m.Blockly={});m.Blockly.getMainWorkspace=function(){return E};m.Blockly.addChangeListener=Xj;
m.Blockly.removeChangeListener=function(a){M(a)};var rj="Add Comment",Hk="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",Fk="Chat with your collaborator by typing in this box!",Ok="Collapse Blocks",vj="Collapse Block",yj="Delete Block",zj="Delete %1 Blocks",xj="Disable Block",pj="Duplicate",wj="Enable Block",Pk="Expand Blocks",uj="Expand Block",sj="External Inputs",Aj="Help",tj="Inline Inputs",Ik="Me",qj="Remove Comment";function Qk(a,b){var c;c=a.className;for(var d=c=p(c)&&c.match(/\S+/g)||[],e=Za(arguments,1),g=0;g<e.length;g++)Va(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var Rk={en:"English"},Sj=[],tc=window.BlocklyGamesLang,Sk=window.BlocklyGamesLanguages,uc=!!window.location.pathname.match(/\.html$/);function Tk(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}var H,Uk=Number(Tk("level","NaN"));H=isNaN(Uk)?1:Tb(1,Uk,10);
function Vk(){document.head.parentElement.setAttribute("dir",-1!=Sj.indexOf(tc)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",tc);for(var a=[],b=0;b<Sk.length;b++){var c=Sk[b];a.push([Rk[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==tc&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!Wk(b),a&&c&&Qk(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(Xk,1)}function Wk(a){var b=Yk,c;try{c=window.localStorage[b+a]}catch(d){}return c}function Zk(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function $k(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function Xk(){if(!uc){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var X={mb:null,U:function(){Vk();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=Zk("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=Zk("Games_linkAlert"),BlocklyStorage.HASH_ERROR=Zk("Games_hashError"),BlocklyStorage.XML_ERROR=Zk("Games_xmlError"),BlocklyStorage.alert=qc.Gk,a&&$k(a,BlocklyStorage.link),b&&$k(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
X.Wi,!0)},ql:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";Pj(a);a=Tk("xml","");X.kg("<xml>"+a+"</xml>")},Xj:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.Kh}catch(d){}c&&delete window.sessionStorage.Kh;var e=Wk(H),g=b&&Wk(H-1);(c=c||e||g||a)&&X.kg(c)}},kg:function(a){X.mb?X.mb.setValue(a,-1):(a=Wf(a),
Xf(E,a))},uk:function(){if(void 0!=typeof vc&&window.localStorage){var a=Yk+H;if(X.mb)var b=X.mb.getValue();else b=Sf(E),b=Vf(b);window.localStorage[a]=b}},ue:function(){window.location=(uc?"index.html":"./")+"?lang="+tc},Wi:function(){if(window.sessionStorage){if(X.mb)var a=X.mb.getValue();else a=Sf(E),a=Vf(a);window.sessionStorage.Kh=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?
b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},Ch:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}Qg(a)},Gl:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},nb:function(a){if("click"==a.type&&"touchend"==X.nb.dg&&X.nb.cg+2E3>Date.now()||X.nb.dg==a.type&&X.nb.cg+400>Date.now())return a.preventDefault(),a.stopPropagation(),!0;X.nb.dg=a.type;X.nb.cg=
Date.now();return!1}};X.nb.dg=null;X.nb.cg=0;X.Mj=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
X.Nj=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=X;X.setCode=X.kg;var Y={jc:!1,lh:null,ce:null,wc:function(a,b,c,d,e,g){function h(){Y.jc&&(k.style.visibility="visible",k.style.zIndex=10,l.style.visibility="hidden")}Y.jc&&Y.Ha(!1);sg(!0);Y.jc=!0;Y.lh=b;Y.ce=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var l=document.getElementById("dialogBorder"),r;for(r in e)k.style[r]=e[r];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Y.tf=L(d,"mousedown",
null,Y.kj));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Y.Rc(b,!1,.2),Y.Rc(k,!0,.8),setTimeout(h,175)):h()},mh:0,nh:0,kj:function(a){Y.wf();if(!Sc(a)){var b=document.getElementById("dialog");Y.mh=b.offsetLeft-a.clientX;Y.nh=b.offsetTop-a.clientY;Y.vf=L(document,"mouseup",null,Y.wf);Y.uf=L(document,"mousemove",null,Y.lj);a.stopPropagation()}},lj:function(a){var b=document.getElementById("dialog"),c=Y.mh+a.clientX;a=Y.nh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},wf:function(){Y.vf&&(M(Y.vf),Y.vf=null);Y.uf&&(M(Y.uf),Y.uf=null)},Ha:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Y.jc){Y.wf();Y.tf&&(M(Y.tf),Y.tf=null);Y.jc=!1;Y.ce&&Y.ce();Y.ce=null;var c=!1===a?null:Y.lh;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Y.Rc(a,!1,.8),Y.Rc(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},Rc:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Y.tj(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},tj:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Ag(a);a=Yi(a.x,a.y,!1);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},Gk:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");
d.appendChild(document.createTextNode(a[c]));b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Y.wc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.ug);Y.rg()},Ji:function(){if(!Wk(H))if(Y.jc||0!=th.ll)setTimeout(Y.Ji,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Y.Ha,!0);b.addEventListener("touchend",Y.Ha,!0);b=document.getElementById("abortOk");b.addEventListener("click",
X.ue,!0);b.addEventListener("touchend",X.ue,!0);Y.wc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Hg,!0)});document.body.addEventListener("keydown",Y.Hg,!0)}},rl:function(){var a=document.getElementById("dialogDone");E&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("containerCode");a.removeChild(b);10>H?Zk("Games_nextLevel").replace("%1",H+1):Zk("Games_finalLevel");
b=document.getElementById("doneCancel");b.addEventListener("click",Y.Ha,!0);b.addEventListener("touchend",Y.Ha,!0);b=document.getElementById("doneOk");1==H&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));2==H&&(b.addEventListener("click",function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));
3==H&&(b.addEventListener("click",function(){window.open("/bird?lang=en?level=3","_self")},!0),b.addEventListener("touchend",function(){window.open("/bird?lang=en?level=3","_self")},!0));4==H&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=5","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=5","_self")},!0));5==H&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=6","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=6",
"_self")},!0));6==H&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=10","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=10","_self")},!0));Y.wc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Ec,!0)});document.body.addEventListener("keydown",Y.Ec,!0)}};
window.Ic=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.Ic.Rj||window.Ic.Uj){var b=document.createElement("a");b.href=a;void 0!==b.nj&&(b.nj="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.Ic.Rj=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.Ic.Uj=-1<navigator.userAgent.toLowerCase().indexOf("safari");
Y.kl=function(){var a=document.getElementById("dialogDone");E&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Y.Ha,!0);b.addEventListener("touchend",Y.Ha,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"OK";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{hk:function(a){a=a.toDataURL("image/png");window.Ic(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{hk:function(a){a=a.toDataURL("image/png");window.Ic(a)}})},!0);Y.wc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Ec,!0)});document.body.addEventListener("keydown",Y.Ec,!0)};
Y.sl=function(){alert("login");document.getElementById("login")};
Y.Yi=function(){var a=document.getElementById("dialogDone");if(E){document.getElementById("dialogLinesText").textContent="";var b=10>H?Zk("Games_nextLevel").replace("%1",H+1):Zk("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==Yk?(c.innerHTML="<p>Grace is a superhero. <br/>Dress her up for her first mission.</p>",c=document.getElementById("Games_nextLevel"),c.parentElement.removeChild(c)):"turtle"==Yk&&1==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/pants.svg' height='75px' border=0/><img class='featureUnlocked' src='./movie/long_skirt.svg' height='75px' border=0/>":
"turtle"==Yk&&2==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/shoe.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hightop.svg' width='80px' border=0/>":"bird"==Yk&&3==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/baseball.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/retro_glasses.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/necklace.svg' width='80px' border=0/>":
"maze"==Yk&&5==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/briefcase.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/purse.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/backpack.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/fancy_purse.svg' width='80px' border=0/>":"maze"==Yk&&6==H?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/dress.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/crown.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/wand.svg' width='80px' border=0/>":
"maze"==Yk&&10==H&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/cape.svg' width='80px' height='71px' border=0 /><img class='featureUnlocked' src='./movie/shield.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/mask2.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/gloves.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/logo.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/belt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/word.svg' width='80px' border=0/>")}c=
document.getElementById("doneCancel");c.addEventListener("click",Y.Ha,!0);c.addEventListener("touchend",Y.Ha,!0);c=document.getElementById("doneOk");c.addEventListener("click",X.Xf,!0);c.addEventListener("touchend",X.Xf,!0);Y.wc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Ec,!0)});document.body.addEventListener("keydown",Y.Ec,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==Yk&&1==H&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};
Y.kh=function(a){!Y.jc||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Y.Ha(!0),a.stopPropagation(),a.preventDefault())};Y.rg=function(){document.body.addEventListener("keydown",Y.kh,!0)};Y.ug=function(){document.body.removeEventListener("keydown",Y.kh,!0)};Y.Ec=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.Xf()};
Y.Hg=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.Ha(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.ue()};window.BlocklyDialogs=Y;Y.hideDialog=Y.Ha;Ni("goog.net.XhrIo");function al(a,b,c,d,e){this.name=a;this.Tg=b;this.ji=c;this.zk=d||0;this.Ib=e;this.p=new C;this.reset();console.log(this+" loaded.")}f=al.prototype;f.Fk=!1;f.ab=!1;f.o=0;f.yb=0;f.facing=0;f.speed=0;f.lb=0;f.p=null;f.Sf=0;f.toString=function(){return"["+this.name+"]"};
f.reset=function(){delete this.Fk;delete this.ab;delete this.speed;delete this.lb;delete this.Sf;this.o=this.zk;this.p.x=this.ji.x;this.p.y=this.ji.y;this.facing=this.yb=Ub(180*Math.atan2(50-this.p.y,50-this.p.x)/Math.PI);var a=this.Tg;if(t(a))a=a();else if(!p(a))throw"Player "+this.name+" has invalid code: "+a;this.Fh="Interpreter"in window?new Interpreter(a,this.Ib.Oj):null};function bl(a,b){a.o+=b;100<=a.o&&cl(a)}
function cl(a){a.speed=0;a.ab=!0;a.o=100;a.Ib.dd.unshift(a);a.Ib.Va.push({type:"DIE",player:a});console.log(a+" dies.")}
function dl(a,b){var c=Z.$a,d;d=void 0===b||null===b?5:b;if(!q(a)||isNaN(a)||!q(d)||isNaN(d))throw TypeError;a=Ub(a);d=Tb(d,0,20);c.Ib.Va.push({type:"SCAN",player:c,degree:a,resolution:d});var e=Ub(a-d/2);d=Ub(a+d/2);e>d&&(d+=360);for(var g=c.p.x,h=c.p.y,k=Infinity,l=0,r;r=c.Ib.ya[l];l++)if(r!=c&&!r.ab){var n=r.p.x,x=r.p.y;r=Math.sqrt((x-h)*(x-h)+(n-g)*(n-g));r>=k||(n=Math.atan2(x-h,n-g),n=Ub(180*n/Math.PI),n<e&&(n+=360),e<=n&&n<=d&&(k=r))}return k}
f.T=function(a,b){var c;c=void 0===b||null===b?50:b;if(!q(a)||isNaN(a)||!q(c)||isNaN(c))throw TypeError;this.yb!=Ub(a)&&(50>=this.speed?this.facing=this.yb=Ub(a):c=0);0==this.speed&&0<c&&(this.speed=.1);this.lb=Tb(c,0,100)};f.stop=function(){this.lb=0};
function el(a,b){var c=Z.$a;if(!q(a)||isNaN(a)||!q(b)||isNaN(b))throw TypeError;var d=Date.now();if(c.Sf+1E3*c.Ib.zi>d)return!1;c.Sf=d;d=c.p.clone();a=Ub(a);c.facing=a;b=Tb(b,0,70);d={kk:c,Nd:d,yb:a,Me:b,kd:new C(d.x+b*Math.cos(a*Math.PI/180),d.y+b*Math.sin(a*Math.PI/180)),Ed:0};c.Ib.Bc.push(d);c.Ib.Va.push({type:"BANG",player:c,degree:d.yb});return!0};var Z={ya:[],dd:[],Va:[],Bc:[],vi:50,Fi:100,zi:.5,$a:null,yi:1,Gg:3,Dg:5,ui:5,$e:3,Vh:0,fe:0,xg:0,Hi:3E5,xf:null};Z.Ei=[new C(10,90),new C(90,10),new C(10,10),new C(90,90),new C(50,99),new C(50,1),new C(1,50),new C(99,50),new C(50,49)];Z.reset=function(){clearTimeout(Z.Vh);Z.Va.length=0;Z.Bc.length=0;Z.dd.length=0;for(var a=Z.xg=0,b;b=Z.ya[a];a++)b.reset()};Z.Li=function(a,b,c,d){c||(c=Z.Ei[Z.ya.length]);a=new al(a,b,c,d,Z);Z.ya.push(a)};
Z.start=function(a){Z.xf=a;Z.fe=Date.now()+Z.Hi;console.log("Starting battle with "+Z.ya.length+" players.");Z.update()};Z.update=function(){Z.Lk();Z.Mk();Z.Nk();Z.ya.length<=Z.dd.length+1&&(Z.fe=Math.min(Z.fe,Date.now()+1E3));Date.now()>Z.fe?Z.stop():Z.Vh=setTimeout(Z.update,1E3/Z.vi)};Z.stop=function(){for(var a=[],b=0,c;c=Z.ya[b];b++)c.ab||a.push(c);b=a.length;for(a.sort(function(a,b){return a.o-b.o});a.length;)Z.dd.unshift(a.pop());Z.xf&&Z.xf(b)};
Z.Mk=function(){for(var a=Z.Bc.length-1;0<=a;a--){var b=Z.Bc[a];b.Ed+=Z.Gg;var c=0;if(b.Me-b.Ed<Z.Gg/2){Z.Bc.splice(a,1);for(var d=0,e;e=Z.ya[d];d++)if(!e.ab){var g=10*(1-Vb(e.p,b.kd)/4);0<g&&(bl(e,g),c=Math.max(c,g))}Z.Va.push({type:"BOOM",damage:c,x:b.kd.x,y:b.kd.y})}}};
Z.Nk=function(){for(var a=0,b;b=Z.ya[a];a++)if(!b.ab&&(b.speed<b.lb?b.speed=Math.min(b.speed+Z.Dg,b.lb):b.speed>b.lb&&(b.speed=Math.max(b.speed-Z.Dg,b.lb)),0<b.speed)){var c=Z.Sg(b),d=c[1],e=b.yb*Math.PI/180,g=b.speed/100*Z.yi,h=Math.cos(e)*g,g=Math.sin(e)*g;b.p.x+=h;b.p.y+=g;0>b.p.x||100<b.p.x||0>b.p.y||100<b.p.y?(b.p.x=Tb(b.p.x,0,100),b.p.y=Tb(b.p.y,0,100),d=b.speed/100*Z.$e,bl(b,d),b.speed=0,b.lb=0,Z.Va.push({type:"CRASH",player:b,damage:d})):(c=Z.Sg(b),e=c[0],c=c[1],c<Z.ui&&d>c&&(b.p.x-=h,b.p.y-=
g,d=Math.max(b.speed,e.speed)/100*Z.$e,bl(b,d),b.speed=0,b.lb=0,bl(e,d),e.speed=0,e.lb=0,Z.Va.push({type:"CRASH",player:b,damage:d}),Z.Va.push({type:"CRASH",player:e,damage:d})))}};Z.Lk=function(){for(var a=0;a<Z.Fi;a++){Z.xg++;for(var b=0,c;c=Z.ya[b];b++)if(!c.ab){Z.$a=c;try{c.Fh.step()}catch(d){console.log(c+" throws an error: "+d),console.dir(c.Fh.Fl),cl(c)}Z.$a=null}}};
Z.Oj=function(a,b){var c;c=function(b,c){return a.createPrimitive(dl(b&&b.valueOf(),c&&c.valueOf()))};a.setProperty(b,"scan",a.createNativeFunction(c));c=function(b,c){return a.createPrimitive(el(b&&b.valueOf(),c&&c.valueOf()))};a.setProperty(b,"cannon",a.createNativeFunction(c));c=function(a,b){Z.$a.T(a&&a.valueOf(),b&&b.valueOf())};a.setProperty(b,"drive",a.createNativeFunction(c));a.setProperty(b,"swim",a.createNativeFunction(c));a.setProperty(b,"stop",a.createNativeFunction(function(){Z.$a.stop()}));
a.setProperty(b,"damage",a.createNativeFunction(function(){return a.createPrimitive(Z.$a.o)}));a.setProperty(b,"health",a.createNativeFunction(function(){return a.createPrimitive(100-Z.$a.o)}));a.setProperty(b,"speed",a.createNativeFunction(function(){return a.createPrimitive(Z.$a.speed)}));a.setProperty(b,"loc_x",a.createNativeFunction(function(){return a.createPrimitive(Z.$a.p.x)}));a.setProperty(b,"loc_y",a.createNativeFunction(function(){return a.createPrimitive(Z.$a.p.y)}));var d=a.getProperty(b,
"Math");d!=a.UNDEFINED&&(c=function(b){return a.createPrimitive(Math.sin((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"sin_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.cos((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"cos_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.tan((b&&b.valueOf())/180*Math.PI))},a.setProperty(d,"tan_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.asin(b&&b.valueOf())/Math.PI*180)},
a.setProperty(d,"asin_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.acos(b&&b.valueOf())/Math.PI*180)},a.setProperty(d,"acos_deg",a.createNativeFunction(c)),c=function(b){return a.createPrimitive(Math.atan(b&&b.valueOf())/Math.PI*180)},a.setProperty(d,"atan_deg",a.createNativeFunction(c)))};Z.Sg=function(a){for(var b=null,c=Infinity,d=0,e;e=Z.ya[d];d++)if(!e.ab&&a!=e){var g=Math.min(c,Vb(a.p,e.p));g<c&&(c=g,b=e)}return[b,c]};var fl,gl,hl,il={},jl=[],kl=new Image;kl.src="pond/sprites.png";var ll=["#ff8b00","#c90015","#166c0b","#11162a"],ml=0;function nl(){fl=document.getElementById("scratch").getContext("2d");var a=document.getElementById("display").getContext("2d");gl=a;hl=a.canvas.width;a.globalCompositeOperation="copy";ck(["pond/whack.mp3","pond/whack.ogg"],"whack");ck(["pond/boom.mp3","pond/boom.ogg"],"boom");ck(["pond/splash.mp3","pond/splash.ogg"],"splash")}
function ol(){clearTimeout(ml);jl.length=0;var a=document.getElementById("playerStatRow");a.innerHTML="";for(var b=[],c=[],d=0,e;e=Z.ya[d];d++){var g=ll[d%ll.length];e.qi=d;var h=document.createElement("td");h.style.borderColor=g;var k=document.createElement("div");k.className="playerStatHealth";k.style.background=g;e.Ok=k;c[d]=k;h.appendChild(k);k=document.createElement("div");k.className="playerStatName";e=document.createTextNode(e.name);k.appendChild(e);b[d]=k;h.appendChild(k);k=document.createElement("div");
e=document.createTextNode("\u00a0");k.appendChild(e);h.appendChild(k);a.appendChild(h)}for(d=0;k=b[d];d++)k.style.width=k.parentNode.offsetWidth-2+"px";for(d=0;k=c[d];d++)k.style.height=k.parentNode.offsetHeight-2+"px";pl()}var ql=0,rl=0;function sl(){pl();var a=Date.now(),b=Math.max(1,1E3/36-(a-ql-rl));ml=setTimeout(sl,b);ql=a;rl=b}function tl(a){return a/100*(hl-35)+17.5}
function pl(){var a=fl;a.beginPath();a.rect(0,0,a.canvas.width,a.canvas.height);a.fillStyle="#527dbf";a.fill();for(var b=[],c=0,d;d=Z.ya[c];c++)d.ab&&b.push(d);for(c=0;d=Z.ya[c];c++)d.ab||b.push(d);for(c=0;d=b[c];c++){a.save();var e=tl(d.p.x),g=tl(100-d.p.y);a.translate(e,g);var h=d.qi%ll.length*35;d.ab&&(a.globalAlpha=.25);0<d.speed&&(a.save(),e=50<d.speed?0:25<d.speed?35:70,a.rotate(-d.yb/180*Math.PI),a.drawImage(kl,455,e,35,35,-45.5,-17.5,35,35),a.restore());a.drawImage(kl,0,h,35,35,-17.5,-17.5,
35,35);e=d.facing/180*Math.PI;a.translate(12*Math.cos(e),12*-Math.sin(e)-2);e=(14-Math.round(d.facing/360*12))%12+1;d=d.facing%30;15<=d&&(d-=30);d/=1.5;a.rotate(-d/180*Math.PI);a.drawImage(kl,35*e,h,35,35,-15.5,-15.5,35,35);a.restore()}for(c=0;d=Z.Bc[c];c++){a.save();var g=d.Ed/d.Me,h=(d.kd.y-d.Nd.y)*-g,e=d.Me/2,k=.15*d.Me,e=k-Math.pow((d.Ed-e)/Math.sqrt(k)*k/e,2),g=tl(d.Nd.x+(d.kd.x-d.Nd.x)*g),k=tl(100-d.Nd.y+h-e),h=tl(100-d.Nd.y+h);a.beginPath();a.arc(g,h,5*Math.max(0,1-e/10),0,2*Math.PI,!0);a.closePath();
a.fillStyle="rgba(128, 128, 128, "+Math.max(0,1-e/10)+")";a.fill();a.beginPath();a.arc(g,k,5,0,2*Math.PI,!0);a.closePath();a.fillStyle=ll[d.kk.qi%ll.length];a.fill()}for(c=0;c<Z.Va.length;c++)if(e=Z.Va[c],d=e.player,"CRASH"==e.type){if(h=il[d.id],!h||h+1E3<oa())mj("whack",e.damage/Z.$e),il[d.id]=oa()}else"SCAN"==e.type?(g=Math.max(e.resolution/2,.5),h=-((e.degree+g)*Math.PI/180),k=-((e.degree-g)*Math.PI/180),a.beginPath(),e=tl(d.p.x),g=tl(100-d.p.y),a.moveTo(e,g),a.lineTo(e+200*Math.cos(h),g+200*
Math.sin(h)),a.arc(e,g,200,h,k),a.lineTo(e,g),d=a.createRadialGradient(e,g,17.5,e,g,200),d.addColorStop(0,"rgba(255, 255, 255, 0.3)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),a.fillStyle=d,a.fill()):"BANG"!=e.type&&("BOOM"==e.type?(e.damage&&mj("boom",e.damage/10),jl.push({x:e.x,y:e.y,Pd:0})):"DIE"==e.type&&mj("splash"));Z.Va.length=0;for(c=jl.length-1;0<=c;c--)d=jl[c],e=tl(d.x),g=tl(100-d.y),a.beginPath(),a.arc(e,g,d.Pd+1,0,2*Math.PI,!0),a.closePath(),a.lineWidth=5,a.strokeStyle="rgba(255, 255, 255, "+
(1-d.Pd/10)+")",a.stroke(),d.Pd+=2,10<d.Pd&&jl.splice(c,1);gl.drawImage(a.canvas,0,0);for(c=0;d=b[c];c++)a=d.Ok,a.parentNode.title=Math.round(100-d.o)+"%",a.style.width=Math.max(0,a.parentNode.offsetWidth*(1-d.o/100)-2)+"px"};var ul=null;function vl(){var a=document.getElementById("docsButton"),b=document.getElementById("dialogDocs");Y.Rc(b,!1,.8);Y.Rc(a,!0,.2);setTimeout(function(){document.getElementById("dialogBorder").style.visibility="hidden"},175);b.style.visibility="hidden"}function wl(a){if(!X.nb(a)){a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";xl()}}
function yl(a){X.nb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",Z.reset(),ol())}function xl(){"Interpreter"in window?(Z.reset(),ol(),Z.start(ul),sl()):setTimeout(xl,250)}function zl(){var a=document.getElementById("help"),b=document.getElementById("helpButton");Y.wc(a,b,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.ug);Y.rg()};X.Xf=function(){10>H?window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"?lang="+tc+"&level="+(H+1):X.ue()};
var Al=[void 0,[{start:new C(50,30),o:0,name:"Pond_playerName",code:null},{start:new C(50,70),o:99,name:"Pond_targetName",code:"playerTarget"}],[{start:new C(20,20),o:0,name:"Pond_playerName",code:null},{start:new C(62.4264,62.4264),o:0,name:"Pond_targetName",code:"playerTarget"}],[{start:new C(90,50),o:0,name:"Pond_playerName",code:null},{start:new C(50,50),o:0,name:"Pond_pendulumName",code:"playerPendulum"}],[{start:new C(20,80),o:0,name:"Pond_playerName",code:null},{start:new C(80,20),o:99,name:"Pond_targetName",
code:"playerTarget"}],[{start:new C(5,50),o:99,name:"Pond_playerName",code:null},{start:new C(95,50),o:0,name:"Pond_targetName",code:"playerTarget"}],[{start:new C(10,90),o:50,name:"Pond_playerName",code:null},{start:new C(40,60),o:0,name:"Pond_scaredName",code:"playerScared"}],[{start:new C(50,50),o:0,name:"Pond_playerName",code:null},{start:new C(50,20),o:0,name:"Pond_rabbitName",code:"playerRabbit"}],[{start:new C(20,80),o:0,name:"Pond_playerName",code:null},{start:new C(50,50),o:0,name:"Pond_rookName",
code:"playerRook"}],[{start:new C(20,80),o:0,name:"Pond_playerName",code:null},{start:new C(80,20),o:0,name:"Pond_rookName",code:"playerRook"},{start:new C(20,20),o:0,name:"Pond_counterName",code:"playerCounter"}],[{start:new C(20,80),o:0,name:"Pond_playerName",code:null},{start:new C(80,20),o:0,name:"Pond_rookName",code:"playerRook"},{start:new C(20,20),o:0,name:"Pond_counterName",code:"playerCounter"},{start:new C(80,80),o:0,name:"Pond_sniperName",code:"playerSniper"}]][H],ul=function(a){clearTimeout(ml);
0!=a&&1==a&&"function"==typeof Z.dd[0].Tg&&(3==H&&2E5<Z.xg?(a=document.getElementById("helpUseScan"),Y.wc(a,null,!1,!0,{width:"30%",left:"35%",top:"12em"},Y.ug),Y.rg()):(X.uk(),Y.Yi()))};var Yk="pond-advanced";
window.addEventListener("load",function(){function a(){var a=e.offsetTop,b=document.getElementById("editor");b.style.top=Math.max(10,a-window.pageYOffset)+"px";b.style.left=d?"10px":"420px";b.style.width=window.innerWidth-440+"px"}document.body.innerHTML=sc();X.U();nl();$k("runButton",wl);$k("resetButton",yl);$k("closeDocs",vl);setTimeout(X.Mj,1);setTimeout(X.Nj,1);$k("helpButton",zl);2>location.hash.length&&!Wk(H)&&setTimeout(zl,1E3);var b=document.getElementById("containerCode");b.parentNode.removeChild(b);
b=4==H?"swim(0, 50);":"cannon(0, 70);";X.mb=window.ace.edit("editor");X.mb.setTheme("ace/theme/chrome");var c=X.mb.getSession();c.setMode("ace/mode/javascript");c.setTabSize(2);c.setUseSoftTabs(!0);X.Xj(b+"\n",4!=H);var d=-1!=Sj.indexOf(tc),e=document.getElementById("visualization");window.addEventListener("scroll",a);window.addEventListener("resize",a);a();for(c=0;b=Al[c];c++){var g=b.code?document.getElementById(b.code).textContent:function(){return X.mb.getValue()},h=Zk(b.name);Z.Li(h,g,b.start,
b.o)}Z.reset();ol()});
