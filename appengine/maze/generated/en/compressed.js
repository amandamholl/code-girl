// Automatically generated file.  Do not edit!
'use strict';var f,m=this;function aa(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ba(){}function ca(a){a.Hb=function(){return a.Dh?a.Dh:a.Dh=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"array"==da(a)}function ea(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function t(a){return"number"==typeof a}function v(a){return"function"==da(a)}function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ga(a){return a[ha]||(a[ha]=++ia)}var ha="closure_uid_"+(1E9*Math.random()>>>0),ia=0;
function ja(a,b,c){return a.call.apply(a.bind,arguments)}function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function la(a,b,c){la=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return la.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function w(a,b){function c(){}c.prototype=b.prototype;a.j=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.kl=function(a,c,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function oa(a,b){null!=a&&this.append.apply(this,arguments)}f=oa.prototype;f.V="";f.set=function(a){this.V=""+a};f.append=function(a,b,c){this.V+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.V+=arguments[d];return this};f.clear=function(){this.V=""};f.toString=function(){return this.V};var pa;function qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}w(qa,Error);qa.prototype.name="CustomError";function ra(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function sa(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")}var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ua(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1}
function va(a){if(!wa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Aa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ba,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ca,"&#0;"));return a}var xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,wa=/[\x00&<>"']/;
function Da(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(Ea,function(a,e){var g=b[a];if(g)return g;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(c.innerHTML=a+" ",g=c.firstChild.nodeValue.slice(0,-1));return b[a]=g})}
function Fa(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}var Ea=/&([^;\s<&]+);?/g;function Ga(a,b){return a<b?-1:a>b?1:0};function Ia(a,b){b.unshift(a);qa.call(this,ra.apply(null,b));b.shift()}w(Ia,qa);Ia.prototype.name="AssertionError";function Ja(a,b){throw new Ia("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Ka(){this.ug="";this.Ai=La}Ka.prototype.Lc=!0;Ka.prototype.Gc=function(){return this.ug};Ka.prototype.toString=function(){return"Const{"+this.ug+"}"};function Ma(a){if(a instanceof Ka&&a.constructor===Ka&&a.Ai===La)return a.ug;Ja("expected object of type Const, got '"+a+"'");return"type_error:Const"}var La={};function Na(){this.Pb="";this.yi=Oa}f=Na.prototype;f.Lc=!0;f.Gc=function(){return this.Pb};f.Of=!0;f.jd=function(){return 1};f.toString=function(){return"SafeUrl{"+this.Pb+"}"};var Oa={};var Pa=Array.prototype,Qa=Pa.indexOf?function(a,b,c){return Pa.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ra=Pa.forEach?function(a,b,c){Pa.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},Sa=Pa.filter?function(a,b,c){return Pa.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],g=
0,h=p(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var l=h[k];b.call(c,l,k,a)&&(e[g++]=l)}return e},Ta=Pa.map?function(a,b,c){return Pa.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),g=p(a)?a.split(""):a,h=0;h<d;h++)h in g&&(e[h]=b.call(c,g[h],h,a));return e},Ua=Pa.every?function(a,b,c){return Pa.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&!b.call(c,e[g],g,a))return!1;return!0};function Va(a,b){return 0<=Qa(a,b)}
function Wa(a,b){var c=Qa(a,b),d;(d=0<=c)&&Pa.splice.call(a,c,1);return d}function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function Ya(a,b,c,d){Pa.splice.apply(a,Za(arguments,1))}function Za(a,b,c){return 2>=arguments.length?Pa.slice.call(a,b):Pa.slice.call(a,b,c)};function $a(){this.Ie="";this.xi=ab}$a.prototype.Lc=!0;var ab={};$a.prototype.Gc=function(){return this.Ie};$a.prototype.toString=function(){return"SafeStyle{"+this.Ie+"}"};function bb(a){var b=new $a;b.Ie=a;return b}var cb=bb("");
function db(a){var b="",c;for(c in a){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d instanceof Ka?d=Ma(d):eb.test(d)||(Ja("String value allows only [-.%_!# a-zA-Z0-9], got: "+d),d="zClosurez"),b+=c+":"+d+";")}return b?bb(b):cb}var eb=/^[-.%_!# a-zA-Z0-9]+$/;function fb(){this.fg="";this.Bi=gb}f=fb.prototype;f.Lc=!0;f.Gc=function(){return this.fg};f.Of=!0;f.jd=function(){return 1};f.toString=function(){return"TrustedResourceUrl{"+this.fg+"}"};var gb={};function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var g=0;g<ib.length;g++)c=ib[g],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function kb(a){var b=arguments.length;if(1==b&&n(arguments[0]))return kb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var lb=kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function mb(){this.Pb="";this.wi=nb;this.ph=null}f=mb.prototype;f.Of=!0;f.jd=function(){return this.ph};f.Lc=!0;f.Gc=function(){return this.Pb};f.toString=function(){return"SafeHtml{"+this.Pb+"}"};function ob(a){if(a instanceof mb&&a.constructor===mb&&a.wi===nb)return a.Pb;Ja("expected object of type SafeHtml, got '"+a+"'");return"type_error:SafeHtml"}function pb(a){if(a instanceof mb)return a;var b=null;a.Of&&(b=a.jd());return rb(va(a.Lc?a.Gc():String(a)),b)}
var sb=/^[a-zA-Z0-9-]+$/,tb=kb("action","cite","data","formaction","href","manifest","poster","src"),ub=kb("embed","iframe","link","object","script","style","template");
function vb(a,b,c){if(!sb.test(a))throw Error("Invalid tag name <"+a+">.");if(a.toLowerCase()in ub)throw Error("Tag name <"+a+"> is not allowed for SafeHtml.");var d=null,e="<"+a;if(b)for(var g in b){if(!sb.test(g))throw Error('Invalid attribute name "'+g+'".');var h=b[g];if(null!=h){var k,l=a;k=g;if(h instanceof Ka)h=Ma(h);else if("style"==k.toLowerCase()){if(!fa(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof h+" given: "+h);h instanceof $a||
(h=db(h));l=void 0;h instanceof $a&&h.constructor===$a&&h.xi===ab?l=h.Ie:(Ja("expected object of type SafeStyle, got '"+h+"'"),l="type_error:SafeStyle");h=l}else{if(/^on/i.test(k))throw Error('Attribute "'+k+'" requires goog.string.Const value, "'+h+'" given.');if(k.toLowerCase()in tb)if(h instanceof fb)h instanceof fb&&h.constructor===fb&&h.Bi===gb?h=h.fg:(Ja("expected object of type TrustedResourceUrl, got '"+h+"'"),h="type_error:TrustedResourceUrl");else if(h instanceof Na)h instanceof Na&&h.constructor===
Na&&h.yi===Oa?h=h.Pb:(Ja("expected object of type SafeUrl, got '"+h+"'"),h="type_error:SafeUrl");else throw Error('Attribute "'+k+'" on tag "'+l+'" requires goog.html.SafeUrl or goog.string.Const value, "'+h+'" given.');}h.Lc&&(h=h.Gc());k=k+'="'+va(String(h))+'"';e+=" "+k}}void 0!==c?n(c)||(c=[c]):c=[];!0===lb[a.toLowerCase()]?e+=">":(d=wb(c),e+=">"+ob(d)+"</"+a+">",d=d.jd());(a=b&&b.dir)&&(d=/^(ltr|rtl|auto)$/i.test(a)?0:null);return rb(e,d)}
function wb(a){function b(a){n(a)?Ra(a,b):(a=pb(a),d+=ob(a),a=a.jd(),0==c?c=a:0!=a&&c!=a&&(c=null))}var c=0,d="";Ra(arguments,b);return rb(d,c)}var nb={};function rb(a,b){var c=new mb;c.Pb=a;c.ph=b;return c}var xb=rb("",0);var yb;a:{var zb=m.navigator;if(zb){var Ab=zb.userAgent;if(Ab){yb=Ab;break a}}yb=""}function Bb(a){return-1!=yb.indexOf(a)};var Cb=Bb("Opera")||Bb("OPR"),y=Bb("Trident")||Bb("MSIE"),Db=Bb("Gecko")&&-1==yb.toLowerCase().indexOf("webkit")&&!(Bb("Trident")||Bb("MSIE")),A=-1!=yb.toLowerCase().indexOf("webkit"),Eb=Bb("Macintosh"),Fb=Bb("Android"),Gb=Bb("iPhone")&&!Bb("iPod")&&!Bb("iPad"),Hb=Bb("iPad");function Ib(){var a=m.document;return a?a.documentMode:void 0}
var Jb=function(){var a="",b;if(Cb&&m.opera)return a=m.opera.version,v(a)?a():a;Db?b=/rv\:([^\);]+)(\)|;)/:y?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:A&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(yb))?a[1]:"");return y&&(b=Ib(),b>parseFloat(a))?String(b):a}(),Kb={};
function B(a){var b;if(!(b=Kb[a])){b=0;for(var c=ta(String(Jb)).split("."),d=ta(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",k=d[g]||"",l=/(\d*)(\D*)/g,r=/(\d*)(\D*)/g;do{var q=l.exec(h)||["","",""],x=r.exec(k)||["","",""];if(0==q[0].length&&0==x[0].length)break;b=Ga(0==q[1].length?0:parseInt(q[1],10),0==x[1].length?0:parseInt(x[1],10))||Ga(0==q[2].length,0==x[2].length)||Ga(q[2],x[2])}while(0==b)}b=Kb[a]=0<=b}return b}
var Lb=m.document,Mb=Lb&&y?Ib()||("CSS1Compat"==Lb.compatMode?parseInt(Jb,10):5):void 0;function Nb(a,b){this.width=a;this.height=b}f=Nb.prototype;f.clone=function(){return new Nb(this.width,this.height)};f.toString=function(){return"("+this.width+" x "+this.height+")"};f.Eh=function(){return!(this.width*this.height)};f.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.scale=function(a,b){var c=t(b)?b:a;this.width*=a;this.height*=c;return this};function Ob(a,b){a.innerHTML=ob(b)};var Pb=!y||y&&9<=Mb,Qb=!Db&&!y||y&&y&&9<=Mb||Db&&B("1.9.1"),Rb=y&&!B("9");function Sb(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}f=Sb.prototype;f.clone=function(){return new Sb(this.x,this.y)};f.toString=function(){return"("+this.x+", "+this.y+")"};f.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};f.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};f.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
f.translate=function(a,b){a instanceof Sb?(this.x+=a.x,this.y+=a.y):(this.x+=a,t(b)&&(this.y+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.x*=a;this.y*=c;return this};function Tb(a){return a?new Ub(Vb(a)):pa||(pa=new Ub)}function Wb(a,b){hb(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in Xb?a.setAttribute(Xb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var Xb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yb(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Nb(a.clientWidth,a.clientHeight)}function Zb(a,b,c){return $b(document,arguments)}
function $b(a,b){var c=b[0],d=b[1];if(!Pb&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',va(d.name),'"');if(d.type){c.push(' type="',va(d.type),'"');var e={};jb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=a.createElement(c);d&&(p(d)?c.className=d:n(d)?c.className=d.join(" "):Wb(c,d));2<b.length&&ac(a,c,b,2);return c}function ac(a,b,c,d){function e(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var g=c[d];!ea(g)||fa(g)&&0<g.nodeType?e(g):Ra(bc(g)?Xa(g):g,e)}}
function cc(a){for(var b;b=a.firstChild;)a.removeChild(b)}function dc(a){var b=C.g;b.parentNode&&b.parentNode.insertBefore(a,b)}function D(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}function ec(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}function Vb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
var fc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},gc={IMG:" ",BR:"\n"};function hc(a){a=a.getAttributeNode("tabindex");return null!=a&&a.specified}function ic(a){a=a.tabIndex;return t(a)&&0<=a&&32768>a}function jc(a){var b=[];kc(a,b,!1);return b.join("")}function kc(a,b,c){if(!(a.nodeName in fc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in gc)b.push(gc[a.nodeName]);else for(a=a.firstChild;a;)kc(a,b,c),a=a.nextSibling}
function bc(a){if(a&&"number"==typeof a.length){if(fa(a))return"function"==typeof a.item||"string"==typeof a.item;if(v(a))return"function"==typeof a.item}return!1}function Ub(a){this.vb=a||m.document||document}f=Ub.prototype;f.ab=Tb;f.i=function(a){return p(a)?this.vb.getElementById(a):a};f.I=function(a,b,c){return $b(this.vb,arguments)};f.createElement=function(a){return this.vb.createElement(a)};f.createTextNode=function(a){return this.vb.createTextNode(String(a))};f.appendChild=function(a,b){a.appendChild(b)};
f.append=function(a,b){ac(Vb(a),a,arguments,1)};f.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};f.Wh=cc;f.removeNode=D;
f.Gb=function(a){return Qb&&void 0!=a.children?a.children:Sa(a.childNodes,function(a){return 1==a.nodeType})};f.contains=ec;f.Kb=function(a){var b;(b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!hc(a)||ic(a)):hc(a)&&ic(a))&&y?(a=v(a.getBoundingClientRect)?a.getBoundingClientRect():{height:a.offsetHeight,width:a.offsetWidth},a=null!=a&&0<a.height&&0<a.width):a=b;return a};y&&B(8);var lc={};function mc(){return'<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'};var E,nc,oc,F,G,H,pc;
function qc(){return'<div style="display: none"><span id="Games_name">Code Girl</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Pen</span><span id="Games_movie">Movie</span><span id="Games_pondBasic">Pond</span><span id="Games_pondAdvanced">JS Pond</span><span id="Games_linesOfCode1">You solved this challenge with 1 line of code!</span><span id="Games_linesOfCode2">You solved this solved this challenge with %1 lines of code!</span><span id="Games_nextLevel">Return to your avatar to use these new features.</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Maze_moveForward">move forward</span><span id="Maze_turnLeft">turn left</span><span id="Maze_turnRight">turn right</span><span id="Maze_doCode">do</span><span id="Maze_elseCode">else</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">if path ahead</span><span id="Maze_pathLeft">if path to the left</span><span id="Maze_pathRight">if path to the right</span><span id="Maze_repeatUntil">repeat until</span><span id="Maze_moveForwardTooltip">Moves the player forward one space.</span><span id="Maze_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Maze_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Maze_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="Maze_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div>'}
function rc(){var a=I;return qc()+'<div id="header"><div id="logo"><a href="./"> <img src="./index/horizontal-logo-01.png"></a></div><div class="farSide"><select id="languageMenu"></select>&nbsp;<button id="signoutButton" onClick="location.href=\'/\'">Signout</button><button id="linkButton" title="Save and link to blocks."><img src="media/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></div></div><div id="workspace"><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Makes the player do what the blocks say."><img src="media/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Put the player back at the start of the maze."><img src="media/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="capacityBubble"><div id="capacity"></div></div></div></div>'+
('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>'+(2<a?'<block type="maze_forever"></block>'+(6==a?'<block type="maze_if"><field name="DIR">isPathLeft</field></block>':6<a?'<block type="maze_if"></block>'+(8<a?'<block type="maze_ifElse"></block>':""):""):"")+"</xml>")+'<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div id="dialogCongrats" style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>'+
('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>'+mc()+"</div>")+(1==a?'<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Stack a couple of \'move forward\' blocks together to help me reach the goal.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>On this level, you need to stack together all of the blocks in the white workspace.<iframe id="iframeOneTopBlock" style="height: 80px; width: 100%; border: none;" src=""></iframe></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>':
2==a?'<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>':3==a?'<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Reach the end of this path using only two blocks. Use \'repeat\' to run a block more than once.</td><td><img src="common/help.png"></td></tr></table></div>':
4==a?'<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="common/help.png"></td></tr></table></div>':5==
a?'<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>':6==a?'<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>':7==
a?'<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>':9==a?'<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img style="height:50px;margin-bottom:-6px;" src="maze/help_down.png"></td><td>If-else blocks will do one thing or the other.</td></tr></table></div>':10==a?'<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!'+
mc()+"</td></tr></table></div>":"")};/*

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
var sc={},J,tc,uc,vc,wc,xc,yc,zc,Ac,Cc,Dc,Ec,Fc,Gc,Hc;function Ic(a){this.Xh=Object.create(null);if(a){a=a.split(",");for(var b=0;b<a.length;b++)this.Xh[a[b]]=!0}this.reset()}Ic.prototype.reset=function(){this.sf=Object.create(null);this.ih=Object.create(null)};
Ic.prototype.getName=function(a,b){var c=a.toLowerCase()+"_"+b;if(c in this.sf)return this.sf[c];var d;(d=a)?(d=encodeURI(d.replace(/ /g,"_")).replace(/[^\w]/g,"_"),-1!="0123456789".indexOf(d[0])&&(d="my_"+d)):d="unnamed";for(var e="";this.ih[d+e]||d+e in this.Xh;)e=e?e+1:2;d+=e;this.ih[d]=!0;return this.sf[c]=d};/*

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
function Jc(){this.Xc=[]}f=Jc.prototype;f.t=!1;f.Vf=Infinity;f.k=function(){this.clear()};f.ad=function(a){this.Xc.push(a);this.lb()};f.Pe=function(a){for(var b=!1,c,d=0;c=this.Xc[d];d++)if(c==a){this.Xc.splice(d,1);b=!0;break}if(!b)throw"Block not present in workspace's list of top-most blocks.";this.lb()};function Kc(a,b){var c=[].concat(a.Xc);if(b&&1<c.length){var d=Math.sin(3*Math.PI/180);J&&(d*=-1);c.sort(function(a,b){var c=a.P(),k=b.P();return c.y+d*c.x-(k.y+d*k.x)})}return c}
f.wb=function(){for(var a=Kc(this,!1),b=0;b<a.length;b++)a.push.apply(a,a[b].Gb());return a};f.clear=function(){for(;this.Xc.length;)this.Xc[0].k()};f.je=function(){return 0};function Lc(a,b){for(var c=a.wb(),d=0,e;e=c[d];d++)if(e.id==b)return e;return null}function Mc(a){return Infinity==a.Vf?Infinity:a.Vf-a.wb().length}f.lb=function(){};/*

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
function Nc(a){this.Vc=new Nb(0,25);this.La(a)}f=Nc.prototype;f.h=null;f.R=!0;f.clone=function(){Ja("There should never be an instance of Field, only its derived classes.")};f.uc=!0;f.D=function(a){this.h||(this.h=a,this.X=K("g",{},null),this.bd=K("rect",{rx:4,ry:4,x:-5,y:-12,height:16},this.X),this.ga=K("text",{"class":"blocklyText"},this.X),this.tc(),a.u().appendChild(this.X),this.Wf=L(this.X,"mouseup",this,this.$f),Oc(this))};
f.k=function(){this.Wf&&(M(this.Wf),this.Wf=null);this.h=null;D(this.X);this.bd=this.ga=this.X=null};f.tc=function(){this.uc&&(this.h.Cc&&!N?(Pc(this.X,"blocklyEditableText"),Qc(this.X,"blocklyNoNEditableText"),this.X.style.cursor=this.si):(Pc(this.X,"blocklyNonEditableText"),Qc(this.X,"blocklyEditableText"),this.X.style.cursor=""))};f.v=function(){return this.R};f.H=function(a){if(this.R!=a){this.R=a;var b=this.u();b&&(b.style.display=a?"block":"none",this.Sc())}};f.u=function(){return this.X};
f.Sc=function(){if(this.R){try{var a=this.ga.getComputedTextLength()}catch(b){a=8*this.ga.textContent.length}this.bd&&this.bd.setAttribute("width",a+10)}else a=0;this.Vc.width=a};f.xh=function(){this.Vc.width||this.Sc();return this.Vc};f.mb=function(){return this.Aa};f.La=function(a){null!==a&&a!==this.Aa&&(this.Aa=a,Oc(this),this.h&&this.h.t&&(this.h.F(),this.h.Da(),this.h.o.lb()))};
function Oc(a){if(a.ga){var b=a.Aa;cc(a.ga);b=b.replace(/\s/g,"\u00a0");J&&b&&(b+="\u200f");b||(b="\u00a0");a.ga.appendChild(document.createTextNode(b));a.Vc.width=0}}f.Hc=function(){return this.mb()};f.gb=function(a){this.La(a)};f.$f=function(a){if(!Gb&&!Hb||0===a.layerX||0===a.layerY)Rc(a)||2!=Sc&&this.h.Cc&&!N&&Tc(this)};f.rb=function(){};/*

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
function Uc(){for(var a=C.wb(),b=[],c=[],d=0;d<a.length;d++){var e=a[d].yl;e&&(e=e.call(a[d]))&&(e[2]?b.push(e):c.push(e))}c.sort(Vc);b.sort(Vc);return[c,b]}function Vc(a,b){var c=a[0].toLowerCase(),d=b[0].toLowerCase();return c>d?1:c<d?-1:0}
function Wc(a,b,c,d){function e(e,g){for(var l=0;l<e.length;l++){var r=Xc(d,g);Yc(r,"NAME").gb(e[l][0]);for(var q=[],x=0;x<e[l][1].length;x++)q[x]="ARG"+x;r.Pl(e[l][1],q);r.ob();a.push(r);b.push(2*c)}}if(Zc.procedures_defnoreturn){var g=Xc(d,"procedures_defnoreturn");g.ob();a.push(g);b.push(2*c)}Zc.procedures_defreturn&&(g=Xc(d,"procedures_defreturn"),g.ob(),a.push(g),b.push(2*c));Zc.procedures_ifreturn&&(g=Xc(d,"procedures_ifreturn"),g.ob(),a.push(g),b.push(2*c));b.length&&(b[b.length-1]=3*c);g=
Uc();e(g[0],"procedures_callnoreturn");e(g[1],"procedures_callreturn")};function $c(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}f=$c.prototype;f.je=function(){return this.right-this.left};f.clone=function(){return new $c(this.top,this.right,this.bottom,this.left)};f.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};
f.contains=function(a){return this&&a?a instanceof $c?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};f.expand=function(a,b,c,d){fa(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=b,this.bottom+=c,this.left-=d);return this};
f.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};f.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};f.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
f.translate=function(a,b){a instanceof Sb?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,t(b)&&(this.top+=b,this.bottom+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};function ad(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}f=ad.prototype;f.clone=function(){return new ad(this.left,this.top,this.width,this.height)};f.toString=function(){return"("+this.left+", "+this.top+" - "+this.width+"w x "+this.height+"h)"};f.contains=function(a){return a instanceof ad?this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height:a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height};
f.xh=function(){return new Nb(this.width,this.height)};f.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};f.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
f.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};f.translate=function(a,b){a instanceof Sb?(this.left+=a.x,this.top+=a.y):(this.left+=a,t(b)&&(this.top+=b));return this};f.scale=function(a,b){var c=t(b)?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};function bd(a,b){var c=Vb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function cd(a,b){return bd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}function dd(){var a=document,b=a.body,a=a.documentElement;return new Sb(b.scrollLeft||a.scrollLeft,b.scrollTop||a.scrollTop)}
function ed(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}y&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function fd(a){if(y&&!(y&&8<=Mb))return a.offsetParent;var b=Vb(a),c=cd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(c=cd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function gd(a){var b,c=Vb(a),d=cd(a,"position"),e=Db&&c.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(b=c.getBoxObjectFor(a))&&(0>b.screenX||0>b.screenY),g=new Sb(0,0),h;b=c?Vb(c):document;(h=!y||y&&9<=Mb)||(h="CSS1Compat"==Tb(b).vb.compatMode);h=h?b.documentElement:b.body;if(a==h)return g;if(a.getBoundingClientRect)b=ed(a),c=Tb(c).vb,a=A||"CSS1Compat"!=c.compatMode?c.body||c.documentElement:c.documentElement,c=c.parentWindow||c.defaultView,a=y&&B("10")&&c.pageYOffset!=a.scrollTop?new Sb(a.scrollLeft,
a.scrollTop):new Sb(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop),g.x=b.left+a.x,g.y=b.top+a.y;else if(c.getBoxObjectFor&&!e)b=c.getBoxObjectFor(a),a=c.getBoxObjectFor(h),g.x=b.screenX-a.screenX,g.y=b.screenY-a.screenY;else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;b!=a&&(g.x+=b.clientLeft||0,g.y+=b.clientTop||0);if(A&&"fixed"==cd(b,"position")){g.x+=c.body.scrollLeft;g.y+=c.body.scrollTop;break}b=b.offsetParent}while(b&&b!=a);if(Cb||A&&"absolute"==d)g.y-=c.body.offsetTop;for(b=a;(b=fd(b))&&
b!=c.body&&b!=h;)g.x-=b.scrollLeft,Cb&&"TR"==b.tagName||(g.y-=b.scrollTop)}return g}function hd(a){var b=id;if("none"!=cd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,g=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=g;c.visibility=e;return a}function id(a){var b=a.offsetWidth,c=a.offsetHeight,d=A&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=ed(a),new Nb(a.right-a.left,a.bottom-a.top)):new Nb(b,c)}
function jd(a){var b=gd(a);a=hd(a);return new ad(b.x,b.y,a.width,a.height)}function kd(a,b){a.style.display=b?"":"none"}var ld=Db?"MozUserSelect":A?"WebkitUserSelect":null;function md(a,b,c){c=c?null:a.getElementsByTagName("*");if(ld){if(b=b?"none":"",a.style[ld]=b,c){a=0;for(var d;d=c[a];a++)d.style[ld]=b}}else if(y||Cb)if(b=b?"on":"",a.setAttribute("unselectable",b),c)for(a=0;d=c[a];a++)d.setAttribute("unselectable",b)}var nd={thin:2,medium:4,thick:6};
function od(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null,d;if(c in nd)d=nd[c];else if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}return d}
function pd(a){if(y&&!(y&&9<=Mb)){var b=od(a,"borderLeft"),c=od(a,"borderRight"),d=od(a,"borderTop");a=od(a,"borderBottom");return new $c(d,c,a,b)}b=bd(a,"borderLeftWidth");c=bd(a,"borderRightWidth");d=bd(a,"borderTopWidth");a=bd(a,"borderBottomWidth");return new $c(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};var qd="closure_listenable_"+(1E6*Math.random()|0),rd=0;function sd(a,b,c,d,e){this.dc=a;this.Je=null;this.src=b;this.type=c;this.Td=!!d;this.le=e;this.key=++rd;this.Rc=this.Sd=!1}function td(a){a.Rc=!0;a.dc=null;a.Je=null;a.src=null;a.le=null};function ud(a){this.src=a;this.ya={};this.Kd=0}ud.prototype.add=function(a,b,c,d,e){var g=a.toString();a=this.ya[g];a||(a=this.ya[g]=[],this.Kd++);var h=vd(a,b,d,e);-1<h?(b=a[h],c||(b.Sd=!1)):(b=new sd(b,this.src,g,!!d,e),b.Sd=c,a.push(b));return b};ud.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.ya))return!1;var e=this.ya[a];b=vd(e,b,c,d);return-1<b?(td(e[b]),Pa.splice.call(e,b,1),0==e.length&&(delete this.ya[a],this.Kd--),!0):!1};
function wd(a,b){var c=b.type;if(!(c in a.ya))return!1;var d=Wa(a.ya[c],b);d&&(td(b),0==a.ya[c].length&&(delete a.ya[c],a.Kd--));return d}ud.prototype.Ne=function(a){a=a&&a.toString();var b=0,c;for(c in this.ya)if(!a||c==a){for(var d=this.ya[c],e=0;e<d.length;e++)++b,td(d[e]);delete this.ya[c];this.Kd--}return b};ud.prototype.kd=function(a,b,c,d){a=this.ya[a.toString()];var e=-1;a&&(e=vd(a,b,c,d));return-1<e?a[e]:null};
function vd(a,b,c,d){for(var e=0;e<a.length;++e){var g=a[e];if(!g.Rc&&g.dc==b&&g.Td==!!c&&g.le==d)return e}return-1};var xd=!y||y&&9<=Mb,yd=!y||y&&9<=Mb,zd=y&&!B("9");!A||B("528");Db&&B("1.9b")||y&&B("8")||Cb&&B("9.5")||A&&B("528");Db&&!B("8")||y&&B("9");var Ad="ontouchstart"in m||!!(m.document&&document.documentElement&&"ontouchstart"in document.documentElement)||!(!m.navigator||!m.navigator.msMaxTouchPoints);function Bd(){0!=Cd&&(Dd[ga(this)]=this);this.dd=this.dd;this.De=this.De}var Cd=0,Dd={};Bd.prototype.dd=!1;Bd.prototype.k=function(){if(!this.dd&&(this.dd=!0,this.W(),0!=Cd)){var a=ga(this);delete Dd[a]}};Bd.prototype.W=function(){if(this.De)for(;this.De.length;)this.De.shift()()};function Ed(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.hc=!1;this.Yh=!0}Ed.prototype.W=function(){};Ed.prototype.k=function(){};Ed.prototype.stopPropagation=function(){this.hc=!0};Ed.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Yh=!1};function Fd(a){Fd[" "](a);return a}Fd[" "]=ba;function Gd(a,b){Ed.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.bg=!1;this.ta=null;a&&this.D(a,b)}w(Gd,Ed);var Hd=[1,4,2];f=Gd.prototype;
f.D=function(a,b){this.ta=a;var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(Db){var e;a:{try{Fd(d.nodeName);e=!0;break a}catch(g){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;Object.defineProperties?Object.defineProperties(this,{offsetX:{configurable:!0,enumerable:!0,get:this.vh,set:this.ik},offsetY:{configurable:!0,enumerable:!0,get:this.wh,set:this.jk}}):(this.offsetX=this.vh(),
this.offsetY=this.wh());this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.bg=Eb?a.metaKey:a.ctrlKey;this.state=a.state;a.defaultPrevented&&this.preventDefault()};
function Id(a){return xd?0==a.ta.button:"click"==a.type?!0:!!(a.ta.button&Hd[0])}f.stopPropagation=function(){Gd.j.stopPropagation.call(this);this.ta.stopPropagation?this.ta.stopPropagation():this.ta.cancelBubble=!0};f.preventDefault=function(){Gd.j.preventDefault.call(this);var a=this.ta;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,zd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};f.W=function(){};
f.vh=function(){return A||void 0!==this.ta.offsetX?this.ta.offsetX:this.ta.layerX};f.ik=function(a){Object.defineProperties(this,{offsetX:{writable:!0,enumerable:!0,configurable:!0,value:a}})};f.wh=function(){return A||void 0!==this.ta.offsetY?this.ta.offsetY:this.ta.layerY};f.jk=function(a){Object.defineProperties(this,{offsetY:{writable:!0,enumerable:!0,configurable:!0,value:a}})};var Jd="closure_lm_"+(1E6*Math.random()|0),Kd={},Ld=0;function Md(a,b,c,d,e){if(n(b)){for(var g=0;g<b.length;g++)Md(a,b[g],c,d,e);return null}c=Nd(c);if(a&&a[qd])a=a.A(b,c,d,e);else{if(!b)throw Error("Invalid event type");var g=!!d,h=Od(a);h||(a[Jd]=h=new ud(a));c=h.add(b,c,!1,d,e);c.Je||(d=Pd(),c.Je=d,d.src=a,d.dc=c,a.addEventListener?a.addEventListener(b.toString(),d,g):a.attachEvent(Qd(b.toString()),d),Ld++);a=c}return a}
function Pd(){var a=Rd,b=yd?function(c){return a.call(b.src,b.dc,c)}:function(c){c=a.call(b.src,b.dc,c);if(!c)return c};return b}function Sd(a,b,c,d,e){if(n(b))for(var g=0;g<b.length;g++)Sd(a,b[g],c,d,e);else c=Nd(c),a&&a[qd]?a.Ta(b,c,d,e):a&&(a=Od(a))&&(b=a.kd(b,c,!!d,e))&&Td(b)}
function Td(a){if(t(a)||!a||a.Rc)return!1;var b=a.src;if(b&&b[qd])return wd(b.Fb,a);var c=a.type,d=a.Je;b.removeEventListener?b.removeEventListener(c,d,a.Td):b.detachEvent&&b.detachEvent(Qd(c),d);Ld--;(c=Od(b))?(wd(c,a),0==c.Kd&&(c.src=null,b[Jd]=null)):td(a);return!0}function Qd(a){return a in Kd?Kd[a]:Kd[a]="on"+a}function Ud(a,b,c,d){var e=!0;if(a=Od(a))if(b=a.ya[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.Td==c&&!g.Rc&&(g=Vd(g,d),e=e&&!1!==g)}return e}
function Vd(a,b){var c=a.dc,d=a.le||a.src;a.Sd&&Td(a);return c.call(d,b)}
function Rd(a,b){if(a.Rc)return!0;if(!yd){var c=b||aa("window.event"),d=new Gd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var g=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(h){g=!0}if(g||void 0==c.returnValue)c.returnValue=!0}c=[];for(g=d.currentTarget;g;g=g.parentNode)c.push(g);for(var g=a.type,k=c.length-1;!d.hc&&0<=k;k--){d.currentTarget=c[k];var l=Ud(c[k],g,!0,d),e=e&&l}for(k=0;!d.hc&&k<c.length;k++)d.currentTarget=c[k],l=Ud(c[k],g,!1,d),e=e&&l}return e}return Vd(a,new Gd(b,
this))}function Od(a){a=a[Jd];return a instanceof ud?a:null}var Wd="__closure_events_fn_"+(1E9*Math.random()>>>0);function Nd(a){if(v(a))return a;a[Wd]||(a[Wd]=function(b){return a.handleEvent(b)});return a[Wd]};function Xd(a){Bd.call(this);this.Ah=a;this.we={}}w(Xd,Bd);var Yd=[];f=Xd.prototype;f.A=function(a,b,c,d){n(b)||(b&&(Yd[0]=b.toString()),b=Yd);for(var e=0;e<b.length;e++){var g=Md(a,b[e],c||this.handleEvent,d||!1,this.Ah||this);if(!g)break;this.we[g.key]=g}return this};
f.Ta=function(a,b,c,d,e){if(n(b))for(var g=0;g<b.length;g++)this.Ta(a,b[g],c,d,e);else c=c||this.handleEvent,e=e||this.Ah||this,c=Nd(c),d=!!d,b=a&&a[qd]?a.kd(b,c,d,e):a?(a=Od(a))?a.kd(b,c,d,e):null:null,b&&(Td(b),delete this.we[b.key]);return this};f.Ne=function(){hb(this.we,Td);this.we={}};f.W=function(){Xd.j.W.call(this);this.Ne()};f.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Zd(){}ca(Zd);Zd.prototype.Pj=0;function $d(){Bd.call(this);this.Fb=new ud(this);this.Ci=this;this.ag=null}w($d,Bd);$d.prototype[qd]=!0;f=$d.prototype;f.he=function(){return this.ag};f.ng=function(a){this.ag=a};f.addEventListener=function(a,b,c,d){Md(this,a,b,c,d)};f.removeEventListener=function(a,b,c,d){Sd(this,a,b,c,d)};
f.dispatchEvent=function(a){var b,c=this.he();if(c)for(b=[];c;c=c.he())b.push(c);var c=this.Ci,d=a.type||a;if(p(a))a=new Ed(a,c);else if(a instanceof Ed)a.target=a.target||c;else{var e=a;a=new Ed(d,c);jb(a,e)}var e=!0,g;if(b)for(var h=b.length-1;!a.hc&&0<=h;h--)g=a.currentTarget=b[h],e=ae(g,d,!0,a)&&e;a.hc||(g=a.currentTarget=c,e=ae(g,d,!0,a)&&e,a.hc||(e=ae(g,d,!1,a)&&e));if(b)for(h=0;!a.hc&&h<b.length;h++)g=a.currentTarget=b[h],e=ae(g,d,!1,a)&&e;return e};
f.W=function(){$d.j.W.call(this);this.Fb&&this.Fb.Ne(void 0);this.ag=null};f.A=function(a,b,c,d){return this.Fb.add(String(a),b,!1,c,d)};f.Ta=function(a,b,c,d){return this.Fb.remove(String(a),b,c,d)};function ae(a,b,c,d){b=a.Fb.ya[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,g=0;g<b.length;++g){var h=b[g];if(h&&!h.Rc&&h.Td==c){var k=h.dc,l=h.le||h.src;h.Sd&&wd(a.Fb,h);e=!1!==k.call(l,d)&&e}}return e&&0!=d.Yh}f.kd=function(a,b,c,d){return this.Fb.kd(String(a),b,c,d)};function be(a){$d.call(this);this.Yd=a||Tb();this.Re=ce;this.oe=null;this.w=!1;this.s=null;this.Jb=void 0;this.Cb=this.S=this.qa=this.Ae=null;this.vk=!1}w(be,$d);be.prototype.Aj=Zd.Hb();var ce=null;
function de(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close"}throw Error("Invalid component state");}function ee(a){return a.oe||(a.oe=":"+(a.Aj.Pj++).toString(36))}f=be.prototype;f.i=function(){return this.s};function fe(a){a.Jb||(a.Jb=new Xd(a));return a.Jb}
f.za=function(a){if(this==a)throw Error("Unable to set parent component");if(a&&this.qa&&this.oe&&ge(this.qa,this.oe)&&this.qa!=a)throw Error("Unable to set parent component");this.qa=a;be.j.ng.call(this,a)};f.getParent=function(){return this.qa};f.ng=function(a){if(this.qa&&this.qa!=a)throw Error("Method not supported");be.j.ng.call(this,a)};f.ab=function(){return this.Yd};f.I=function(){this.s=this.Yd.createElement("div")};f.F=function(a){this.Sc(a)};
f.Sc=function(a,b){if(this.w)throw Error("Component already rendered");this.s||this.I();a?a.insertBefore(this.s,b||null):this.Yd.vb.body.appendChild(this.s);this.qa&&!this.qa.w||this.ja()};f.ja=function(){this.w=!0;he(this,function(a){!a.w&&a.i()&&a.ja()})};f.Ra=function(){he(this,function(a){a.w&&a.Ra()});this.Jb&&this.Jb.Ne();this.w=!1};
f.W=function(){this.w&&this.Ra();this.Jb&&(this.Jb.k(),delete this.Jb);he(this,function(a){a.k()});!this.vk&&this.s&&D(this.s);this.qa=this.Ae=this.s=this.Cb=this.S=null;be.j.W.call(this)};f.Od=function(a,b){this.vc(a,ie(this),b)};
f.vc=function(a,b,c){if(a.w&&(c||!this.w))throw Error("Component already rendered");if(0>b||b>ie(this))throw Error("Child component index out of bounds");this.Cb&&this.S||(this.Cb={},this.S=[]);if(a.getParent()==this){var d=ee(a);this.Cb[d]=a;Wa(this.S,a)}else{var d=this.Cb,e=ee(a);if(e in d)throw Error('The object already contains the key "'+e+'"');d[e]=a}a.za(this);Ya(this.S,b,0,a);a.w&&this.w&&a.getParent()==this?(c=this.Za(),b=c.childNodes[b]||null,b!=a.i()&&c.insertBefore(a.i(),b)):c?(this.s||
this.I(),b=O(this,b+1),a.Sc(this.Za(),b?b.s:null)):this.w&&!a.w&&a.s&&a.s.parentNode&&1==a.s.parentNode.nodeType&&a.ja()};f.Za=function(){return this.s};function je(a){null==a.Re&&(a.Re="rtl"==cd(a.w?a.s:a.Yd.vb.body,"direction"));return a.Re}f.Ed=function(a){if(this.w)throw Error("Component already rendered");this.Re=a};function ke(a){return!!a.S&&0!=a.S.length}function ie(a){return a.S?a.S.length:0}function ge(a,b){var c;a.Cb&&b?(c=a.Cb,c=(b in c?c[b]:void 0)||null):c=null;return c}
function O(a,b){return a.S?a.S[b]||null:null}function he(a,b,c){a.S&&Ra(a.S,b,c)}function le(a,b){return a.S&&b?Qa(a.S,b):-1}f.removeChild=function(a,b){if(a){var c=p(a)?a:ee(a);a=ge(this,c);if(c&&a){var d=this.Cb;c in d&&delete d[c];Wa(this.S,a);b&&(a.Ra(),a.s&&D(a.s));a.za(null)}}if(!a)throw Error("Child is not in parent component");return a};f.Wh=function(a){for(var b=[];ke(this);)b.push(this.removeChild(O(this,0),a));return b};function me(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ne(a,b){return a.classList?a.classList.contains(b):Va(me(a),b)}function oe(a,b){a.classList?a.classList.add(b):ne(a,b)||(a.className+=0<a.className.length?" "+b:b)}function pe(a,b){if(a.classList)Ra(b,function(b){oe(a,b)});else{var c={};Ra(me(a),function(a){c[a]=!0});Ra(b,function(a){c[a]=!0});a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function qe(a,b){a.classList?a.classList.remove(b):ne(a,b)&&(a.className=Sa(me(a),function(a){return a!=b}).join(" "))}function re(a,b){a.classList?Ra(b,function(b){qe(a,b)}):a.className=Sa(me(a),function(a){return!Va(b,a)}).join(" ")};function se(a,b){if(!a)throw Error("Invalid class name "+a);if(!v(b))throw Error("Invalid decorator function "+b);}var te={};var ue;function ve(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}function we(a,b,c){n(c)&&(c=c.join(" "));var d="aria-"+b;""===c||void 0==c?(ue||(ue={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"}),c=ue,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)};function xe(){}var ye;ca(xe);var ze={button:"pressed",checkbox:"checked",menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"};f=xe.prototype;f.$d=function(){};f.I=function(a){return a.ab().I("div",this.ce(a).join(" "),a.ub)};f.Za=function(a){return a};f.ed=function(a,b,c){if(a=a.i?a.i():a){var d=[b];y&&!B("7")&&(d=Ae(me(a),b),d.push(b));(c?pe:re)(a,d)}};f.td=function(a){je(a)&&this.Ed(a.i(),!0);a.isEnabled()&&this.nc(a,a.v())};
function Be(a,b,c){if(a=c||a.$d())c=b.getAttribute("role")||null,a!=c&&ve(b,a)}function Ce(a,b){a.v()||we(b,"hidden",!a.v());a.isEnabled()||De(b,1,!a.isEnabled());a.U&8&&De(b,8,a.te());a.U&16&&De(b,16,!!(a.Z&16));a.U&64&&De(b,64,a.Mc())}f.kg=function(a,b){md(a,!b,!y&&!Cb)};f.Ed=function(a,b){this.ed(a,this.oa()+"-rtl",b)};f.Kb=function(a){var b;return a.U&32&&(b=a.ea())?hc(b)&&ic(b):!1};
f.nc=function(a,b){var c;if(a.U&32&&(c=a.ea())){if(!b&&a.Z&32){try{c.blur()}catch(d){}a.Z&32&&a.pd(null)}(hc(c)&&ic(c))!=b&&(b?c.tabIndex=0:(c.tabIndex=-1,c.removeAttribute("tabIndex")))}};f.H=function(a,b){kd(a,b);a&&we(a,"hidden",!b)};f.fb=function(a,b,c){var d=a.i();if(d){var e=this.be(b);e&&this.ed(a,e,c);De(d,b,c)}};
function De(a,b,c){ye||(ye={1:"disabled",8:"selected",16:"checked",64:"expanded"});b=ye[b];var d=a.getAttribute("role")||null;d&&(d=ze[d]||b,b="checked"==b||"selected"==b?d:b);b&&we(a,b,c)}f.ea=function(a){return a.i()};f.oa=function(){return"goog-control"};f.ce=function(a){var b=this.oa(),c=[b],d=this.oa();d!=b&&c.push(d);b=a.Z;for(d=[];b;){var e=b&-b;d.push(this.be(e));b&=~e}c.push.apply(c,d);(a=a.kb)&&c.push.apply(c,a);y&&!B("7")&&c.push.apply(c,Ae(c));return c};
function Ae(a,b){var c=[];b&&(a=a.concat([b]));Ra([],function(d){!Ua(d,ma(Va,a))||b&&!Va(d,b)||c.push(d.join("_"))});return c}f.be=function(a){if(!this.Tg){var b=this.oa();b.replace(/\xa0|\s/g," ");this.Tg={1:b+"-disabled",2:b+"-hover",4:b+"-active",8:b+"-selected",16:b+"-checked",32:b+"-focused",64:b+"-open"}}return this.Tg[a]};function Ee(a,b,c,d,e){if(!(y||A&&B("525")))return!0;if(Eb&&e)return Fe(a);if(e&&!d)return!1;t(b)&&(b=Ge(b));if(!c&&(17==b||18==b||Eb&&91==b))return!1;if(A&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(y&&d&&b==a)return!1;switch(a){case 13:return!0;case 27:return!A}return Fe(a)}
function Fe(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||A&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;default:return!1}}function Ge(a){if(Db)a=He(a);else if(Eb&&A)a:switch(a){case 93:a=91;break a}return a}
function He(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};function Ie(a,b){$d.call(this);a&&Je(this,a,b)}w(Ie,$d);f=Ie.prototype;f.s=null;f.ue=null;f.Qf=null;f.ve=null;f.Ia=-1;f.Mb=-1;f.df=!1;
var Ke={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Le={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Me=y||A&&B("525"),Ne=Eb&&Db;f=Ie.prototype;
f.sj=function(a){A&&(17==this.Ia&&!a.ctrlKey||18==this.Ia&&!a.altKey||Eb&&91==this.Ia&&!a.metaKey)&&(this.Mb=this.Ia=-1);-1==this.Ia&&(a.ctrlKey&&17!=a.keyCode?this.Ia=17:a.altKey&&18!=a.keyCode?this.Ia=18:a.metaKey&&91!=a.keyCode&&(this.Ia=91));Me&&!Ee(a.keyCode,this.Ia,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.Mb=Ge(a.keyCode),Ne&&(this.df=a.altKey))};f.tj=function(a){this.Mb=this.Ia=-1;this.df=a.altKey};
f.handleEvent=function(a){var b=a.ta,c,d,e=b.altKey;y&&"keypress"==a.type?(c=this.Mb,d=13!=c&&27!=c?b.keyCode:0):A&&"keypress"==a.type?(c=this.Mb,d=0<=b.charCode&&63232>b.charCode&&Fe(c)?b.charCode:0):Cb?(c=this.Mb,d=Fe(c)?b.keyCode:0):(c=b.keyCode||this.Mb,d=b.charCode||0,Ne&&(e=this.df),Eb&&63==d&&224==c&&(c=191));var g=c=Ge(c),h=b.keyIdentifier;c?63232<=c&&c in Ke?g=Ke[c]:25==c&&a.shiftKey&&(g=9):h&&h in Le&&(g=Le[h]);a=g==this.Ia;this.Ia=g;b=new Oe(g,d,a,b);b.altKey=e;this.dispatchEvent(b)};
f.i=function(){return this.s};function Je(a,b,c){a.ve&&a.detach();a.s=b;a.ue=Md(a.s,"keypress",a,c);a.Qf=Md(a.s,"keydown",a.sj,c,a);a.ve=Md(a.s,"keyup",a.tj,c,a)}f.detach=function(){this.ue&&(Td(this.ue),Td(this.Qf),Td(this.ve),this.ve=this.Qf=this.ue=null);this.s=null;this.Mb=this.Ia=-1};f.W=function(){Ie.j.W.call(this);this.detach()};function Oe(a,b,c,d){Gd.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c}w(Oe,Gd);function P(a,b,c){be.call(this,c);if(!b){b=this.constructor;for(var d;b;){d=ga(b);if(d=te[d])break;b=b.j?b.j.constructor:null}b=d?v(d.Hb)?d.Hb():new d:null}this.G=b;this.hk(void 0!==a?a:null)}w(P,be);f=P.prototype;f.ub=null;f.Z=0;f.U=39;f.Ji=255;f.Gd=0;f.R=!0;f.kb=null;f.rd=!0;f.cf=!1;f.Zj=null;f.ea=function(){return this.G.ea(this)};f.ge=function(){return this.pa||(this.pa=new Ie)};
f.ed=function(a,b){b?a&&(this.kb?Va(this.kb,a)||this.kb.push(a):this.kb=[a],this.G.ed(this,a,!0)):a&&this.kb&&Wa(this.kb,a)&&(0==this.kb.length&&(this.kb=null),this.G.ed(this,a,!1))};f.I=function(){var a=this.G.I(this);this.s=a;Be(this.G,a,this.ie());this.cf||this.G.kg(a,!1);this.v()||this.G.H(a,!1)};f.ie=function(){return this.Zj};f.Za=function(){return this.G.Za(this.i())};
f.ja=function(){P.j.ja.call(this);Ce(this,this.s);this.G.td(this);if(this.U&-2&&(this.rd&&Pe(this,!0),this.U&32)){var a=this.ea();if(a){var b=this.ge();Je(b,a);fe(this).A(b,"key",this.bb).A(a,"focus",this.ke).A(a,"blur",this.pd)}}};
function Pe(a,b){var c=fe(a),d=a.i();b?(c.A(d,"mouseover",a.Lf).A(d,"mousedown",a.Ic).A(d,"mouseup",a.sd).A(d,"mouseout",a.Kf),a.qd!=ba&&c.A(d,"contextmenu",a.qd),y&&c.A(d,"dblclick",a.yh)):(c.Ta(d,"mouseover",a.Lf).Ta(d,"mousedown",a.Ic).Ta(d,"mouseup",a.sd).Ta(d,"mouseout",a.Kf),a.qd!=ba&&c.Ta(d,"contextmenu",a.qd),y&&c.Ta(d,"dblclick",a.yh))}f.Ra=function(){P.j.Ra.call(this);this.pa&&this.pa.detach();this.v()&&this.isEnabled()&&this.G.nc(this,!1)};
f.W=function(){P.j.W.call(this);this.pa&&(this.pa.k(),delete this.pa);delete this.G;this.kb=this.ub=null};f.hk=function(a){this.ub=a};f.Ef=function(){var a=this.ub;if(!a)return"";if(!p(a))if(n(a))a=Ta(a,jc).join("");else{if(Rb&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];kc(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Rb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""))}return sa(a)};
f.Ed=function(a){P.j.Ed.call(this,a);var b=this.i();b&&this.G.Ed(b,a)};f.kg=function(a){this.cf=a;var b=this.i();b&&this.G.kg(b,a)};f.v=function(){return this.R};f.H=function(a,b){if(b||this.R!=a&&this.dispatchEvent(a?"show":"hide")){var c=this.i();c&&this.G.H(c,a);this.isEnabled()&&this.G.nc(this,a);this.R=a;return!0}return!1};f.isEnabled=function(){return!(this.Z&1)};
f.Dd=function(a){var b=this.getParent();b&&"function"==typeof b.isEnabled&&!b.isEnabled()||!Qe(this,1,!a)||(a||(this.setActive(!1),this.eb(!1)),this.v()&&this.G.nc(this,a),this.fb(1,!a,!0))};f.eb=function(a){Qe(this,2,a)&&this.fb(2,a)};f.setActive=function(a){Qe(this,4,a)&&this.fb(4,a)};f.te=function(){return!!(this.Z&8)};f.kk=function(){Qe(this,8,!0)&&this.fb(8,!0)};function Re(a,b){Qe(a,16,b)&&a.fb(16,b)}f.Mc=function(){return!!(this.Z&64)};function Se(a,b){Qe(a,64,b)&&a.fb(64,b)}
f.fb=function(a,b,c){c||1!=a?this.U&a&&b!=!!(this.Z&a)&&(this.G.fb(this,a,b),this.Z=b?this.Z|a:this.Z&~a):this.Dd(!b)};f.Ka=function(a,b){if(this.w&&this.Z&a&&!b)throw Error("Component already rendered");!b&&this.Z&a&&this.fb(a,!1);this.U=b?this.U|a:this.U&~a};function Te(a,b){return!!(a.Ji&b)&&!!(a.U&b)}function Qe(a,b,c){return!!(a.U&b)&&!!(a.Z&b)!=c&&(!(a.Gd&b)||a.dispatchEvent(de(b,c)))&&!a.dd}f.Lf=function(a){!Ue(a,this.i())&&this.dispatchEvent("enter")&&this.isEnabled()&&Te(this,2)&&this.eb(!0)};
f.Kf=function(a){!Ue(a,this.i())&&this.dispatchEvent("leave")&&(Te(this,4)&&this.setActive(!1),Te(this,2)&&this.eb(!1))};f.qd=ba;function Ue(a,b){return!!a.relatedTarget&&ec(b,a.relatedTarget)}f.Ic=function(a){this.isEnabled()&&(Te(this,2)&&this.eb(!0),!Id(a)||A&&Eb&&a.ctrlKey||(Te(this,4)&&this.setActive(!0),this.G.Kb(this)&&this.ea().focus()));this.cf||!Id(a)||A&&Eb&&a.ctrlKey||a.preventDefault()};f.sd=function(a){this.isEnabled()&&(Te(this,2)&&this.eb(!0),this.Z&4&&this.zd(a)&&Te(this,4)&&this.setActive(!1))};
f.yh=function(a){this.isEnabled()&&this.zd(a)};f.zd=function(a){Te(this,16)&&Re(this,!(this.Z&16));Te(this,8)&&this.kk();Te(this,64)&&Se(this,!this.Mc());var b=new Ed("action",this);a&&(b.altKey=a.altKey,b.ctrlKey=a.ctrlKey,b.metaKey=a.metaKey,b.shiftKey=a.shiftKey,b.bg=a.bg);return this.dispatchEvent(b)};f.ke=function(){Te(this,32)&&Qe(this,32,!0)&&this.fb(32,!0)};f.pd=function(){Te(this,4)&&this.setActive(!1);Te(this,32)&&Qe(this,32,!1)&&this.fb(32,!1)};
f.bb=function(a){return this.v()&&this.isEnabled()&&this.ac(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};f.ac=function(a){return 13==a.keyCode&&this.zd(a)};if(!v(P))throw Error("Invalid component class "+P);if(!v(xe))throw Error("Invalid renderer class "+xe);var Ve=ga(P);te[Ve]=xe;se("goog-control",function(){return new P(null)});function We(){this.Ug=[]}w(We,xe);ca(We);function Xe(a,b){var c=a.Ug[b];if(!c){switch(b){case 0:c=a.oa()+"-highlight";break;case 1:c=a.oa()+"-checkbox";break;case 2:c=a.oa()+"-content"}a.Ug[b]=c}return c}f=We.prototype;f.$d=function(){return"menuitem"};f.I=function(a){var b=a.ab().I("div",this.ce(a).join(" "),Ye(this,a.ub,a.ab()));Ze(this,a,b,!!(a.U&8)||!!(a.U&16));return b};f.Za=function(a){return a&&a.firstChild};function Ye(a,b,c){a=Xe(a,2);return c.I("div",a,b)}
f.ci=function(a,b,c){a&&b&&Ze(this,a,b,c)};f.lg=function(a,b,c){a&&b&&Ze(this,a,b,c)};function Ze(a,b,c,d){Be(a,c,b.ie());Ce(b,c);var e;if(e=a.Za(c)){e=e.firstChild;var g=Xe(a,1);e=!!e&&fa(e)&&1==e.nodeType&&ne(e,g)}else e=!1;d!=e&&(d?oe(c,"goog-option"):qe(c,"goog-option"),c=a.Za(c),d?(a=Xe(a,1),c.insertBefore(b.ab().I("div",a),c.firstChild||null)):c.removeChild(c.firstChild))}
f.be=function(a){switch(a){case 2:return Xe(this,0);case 16:case 8:return"goog-option-selected";default:return We.j.be.call(this,a)}};f.oa=function(){return"goog-menuitem"};function $e(a,b,c,d){P.call(this,a,d||We.Hb(),c);this.gb(b)}w($e,P);f=$e.prototype;f.Hc=function(){var a=this.Ae;return null!=a?a:this.Ef()};f.gb=function(a){this.Ae=a};f.Ka=function(a,b){$e.j.Ka.call(this,a,b);switch(a){case 8:this.Z&16&&!b&&Re(this,!1);var c=this.i();c&&this.G.ci(this,c,b);break;case 16:(c=this.i())&&this.G.lg(this,c,b)}};f.ci=function(a){this.Ka(8,a)};f.lg=function(a){this.Ka(16,a)};
f.Ef=function(){var a=this.ub;return n(a)?(a=Ta(a,function(a){return fa(a)&&1==a.nodeType&&(ne(a,"goog-menuitem-accel")||ne(a,"goog-menuitem-mnemonic-separator"))?"":jc(a)}).join(""),sa(a)):$e.j.Ef.call(this)};f.sd=function(a){var b=this.getParent();if(b){var c=b.Qh;b.Qh=null;if(b=c&&t(a.clientX))b=new Sb(a.clientX,a.clientY),b=c==b?!0:c&&b?c.x==b.x&&c.y==b.y:!1;if(b)return}$e.j.sd.call(this,a)};f.ac=function(a){return a.keyCode==this.Kh&&this.zd(a)?!0:$e.j.ac.call(this,a)};f.kj=function(){return this.Kh};
se("goog-menuitem",function(){return new $e(null)});$e.prototype.ie=function(){return this.U&16?"menuitemcheckbox":this.U&8?"menuitemradio":$e.j.ie.call(this)};$e.prototype.getParent=function(){return P.prototype.getParent.call(this)};$e.prototype.he=function(){return P.prototype.he.call(this)};function af(a){this.Ng=a}ca(af);f=af.prototype;f.$d=function(){return this.Ng};function bf(a,b){a&&(a.tabIndex=b?0:-1)}f.I=function(a){return a.ab().I("div",this.ce(a).join(" "))};f.Za=function(a){return a};f.td=function(a){a=a.i();md(a,!0,Db);y&&(a.hideFocus=!0);var b=this.$d();b&&ve(a,b)};f.ea=function(a){return a.i()};f.oa=function(){return"goog-container"};f.ce=function(a){var b=this.oa(),c=[b,a.Qc==cf?b+"-horizontal":b+"-vertical"];a.isEnabled()||c.push(b+"-disabled");return c};function df(){}w(df,xe);ca(df);df.prototype.I=function(a){return a.ab().I("div",this.oa())};df.prototype.oa=function(){return"goog-menuseparator"};function ef(a,b){P.call(this,null,a||df.Hb(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.Z=1}w(ef,P);ef.prototype.ja=function(){ef.j.ja.call(this);var a=this.i();ve(a,"separator")};se("goog-menuseparator",function(){return new ef});function ff(a){this.Ng=a||"menu"}w(ff,af);ca(ff);ff.prototype.oa=function(){return"goog-menu"};ff.prototype.td=function(a){ff.j.td.call(this,a);a=a.i();we(a,"haspopup","true")};se("goog-menuseparator",function(){return new ef});function gf(a,b,c){be.call(this,c);this.G=b||af.Hb();this.Qc=a||hf}w(gf,be);var cf="horizontal",hf="vertical";f=gf.prototype;f.Rf=null;f.pa=null;f.G=null;f.Qc=null;f.R=!0;f.Yb=!0;f.Cf=!0;f.M=-1;f.Y=null;f.Pc=!1;f.Ei=!1;f.Xj=!0;f.sb=null;f.ea=function(){return this.Rf||this.G.ea(this)};f.ge=function(){return this.pa||(this.pa=new Ie(this.ea()))};f.I=function(){this.s=this.G.I(this)};f.Za=function(){return this.G.Za(this.i())};
f.ja=function(){gf.j.ja.call(this);he(this,function(a){a.w&&jf(this,a)},this);var a=this.i();this.G.td(this);this.H(this.R,!0);fe(this).A(this,"enter",this.If).A(this,"highlight",this.rj).A(this,"unhighlight",this.wj).A(this,"open",this.uj).A(this,"close",this.oj).A(a,"mousedown",this.Ic).A(Vb(a),"mouseup",this.pj).A(a,["mousedown","mouseup","mouseover","mouseout","contextmenu"],this.nj);this.Kb()&&kf(this,!0)};
function kf(a,b){var c=fe(a),d=a.ea();b?c.A(d,"focus",a.ke).A(d,"blur",a.pd).A(a.ge(),"key",a.bb):c.Ta(d,"focus",a.ke).Ta(d,"blur",a.pd).Ta(a.ge(),"key",a.bb)}f.Ra=function(){this.Uc(-1);this.Y&&Se(this.Y,!1);this.Pc=!1;gf.j.Ra.call(this)};f.W=function(){gf.j.W.call(this);this.pa&&(this.pa.k(),this.pa=null);this.G=this.Y=this.sb=this.Rf=null};f.If=function(){return!0};
f.rj=function(a){var b=le(this,a.target);if(-1<b&&b!=this.M){var c=O(this,this.M);c&&c.eb(!1);this.M=b;c=O(this,this.M);this.Pc&&c.setActive(!0);this.Xj&&this.Y&&c!=this.Y&&(c.U&64?Se(c,!0):Se(this.Y,!1))}b=this.i();null!=a.target.i()&&we(b,"activedescendant",a.target.i().id)};f.wj=function(a){a.target==O(this,this.M)&&(this.M=-1);this.i().removeAttribute("aria-activedescendant")};f.uj=function(a){(a=a.target)&&a!=this.Y&&a.getParent()==this&&(this.Y&&Se(this.Y,!1),this.Y=a)};
f.oj=function(a){a.target==this.Y&&(this.Y=null)};f.Ic=function(a){this.Yb&&(this.Pc=!0);var b=this.ea();b&&hc(b)&&ic(b)?b.focus():a.preventDefault()};f.pj=function(){this.Pc=!1};f.nj=function(a){var b=lf(this,a.target);if(b)switch(a.type){case "mousedown":b.Ic(a);break;case "mouseup":b.sd(a);break;case "mouseover":b.Lf(a);break;case "mouseout":b.Kf(a);break;case "contextmenu":b.qd(a)}};
function lf(a,b){if(a.sb)for(var c=a.i();b&&b!==c;){var d=b.id;if(d in a.sb)return a.sb[d];b=b.parentNode}return null}f.ke=function(){};f.pd=function(){this.Uc(-1);this.Pc=!1;this.Y&&Se(this.Y,!1)};f.bb=function(a){return this.isEnabled()&&this.v()&&(0!=ie(this)||this.Rf)&&this.ac(a)?(a.preventDefault(),a.stopPropagation(),!0):!1};
f.ac=function(a){var b=O(this,this.M);if(b&&"function"==typeof b.bb&&b.bb(a)||this.Y&&this.Y!=b&&"function"==typeof this.Y.bb&&this.Y.bb(a))return!0;if(a.shiftKey||a.ctrlKey||a.metaKey||a.altKey)return!1;switch(a.keyCode){case 27:if(this.Kb())this.ea().blur();else return!1;break;case 36:mf(this);break;case 35:nf(this);break;case 38:if(this.Qc==hf)of(this);else return!1;break;case 37:if(this.Qc==cf)je(this)?pf(this):of(this);else return!1;break;case 40:if(this.Qc==hf)pf(this);else return!1;break;case 39:if(this.Qc==
cf)je(this)?of(this):pf(this);else return!1;break;default:return!1}return!0};function jf(a,b){var c=b.i(),c=c.id||(c.id=ee(b));a.sb||(a.sb={});a.sb[c]=b}f.Od=function(a,b){gf.j.Od.call(this,a,b)};f.vc=function(a,b,c){a.Gd|=2;a.Gd|=64;!this.Kb()&&this.Ei||a.Ka(32,!1);a.w&&0!=a.rd&&Pe(a,!1);a.rd=!1;var d=a.getParent()==this?le(this,a):-1;gf.j.vc.call(this,a,b,c);a.w&&this.w&&jf(this,a);a=d;-1==a&&(a=ie(this));a==this.M?this.M=Math.min(ie(this)-1,b):a>this.M&&b<=this.M?this.M++:a<this.M&&b>this.M&&this.M--};
f.removeChild=function(a,b){if(a=p(a)?ge(this,a):a){var c=le(this,a);-1!=c&&(c==this.M?(a.eb(!1),this.M=-1):c<this.M&&this.M--);var d=a.i();d&&d.id&&this.sb&&(c=this.sb,d=d.id,d in c&&delete c[d])}c=a=gf.j.removeChild.call(this,a,b);c.w&&1!=c.rd&&Pe(c,!0);c.rd=!0;return a};f.v=function(){return this.R};
f.H=function(a,b){if(b||this.R!=a&&this.dispatchEvent(a?"show":"hide")){this.R=a;var c=this.i();c&&(kd(c,a),this.Kb()&&bf(this.ea(),this.Yb&&this.R),b||this.dispatchEvent(this.R?"aftershow":"afterhide"));return!0}return!1};f.isEnabled=function(){return this.Yb};f.Dd=function(a){this.Yb!=a&&this.dispatchEvent(a?"enable":"disable")&&(a?(this.Yb=!0,he(this,function(a){a.pi?delete a.pi:a.Dd(!0)})):(he(this,function(a){a.isEnabled()?a.Dd(!1):a.pi=!0}),this.Pc=this.Yb=!1),this.Kb()&&bf(this.ea(),a&&this.R))};
f.Kb=function(){return this.Cf};f.nc=function(a){a!=this.Cf&&this.w&&kf(this,a);this.Cf=a;this.Yb&&this.R&&bf(this.ea(),a)};f.Uc=function(a){(a=O(this,a))?a.eb(!0):-1<this.M&&O(this,this.M).eb(!1)};f.eb=function(a){this.Uc(le(this,a))};function mf(a){qf(a,function(a,c){return(a+1)%c},ie(a)-1)}function nf(a){qf(a,function(a,c){a--;return 0>a?c-1:a},0)}function pf(a){qf(a,function(a,c){return(a+1)%c},a.M)}function of(a){qf(a,function(a,c){a--;return 0>a?c-1:a},a.M)}
function qf(a,b,c){c=0>c?le(a,a.Y):c;var d=ie(a);c=b.call(a,c,d);for(var e=0;e<=d;){var g=O(a,c);if(g&&a.Sg(g)){a.Uc(c);break}e++;c=b.call(a,c,d)}}f.Sg=function(a){return a.v()&&a.isEnabled()&&!!(a.U&2)};function rf(){}w(rf,xe);ca(rf);rf.prototype.oa=function(){return"goog-menuheader"};function sf(a,b,c){P.call(this,a,c||rf.Hb(),b);this.Ka(1,!1);this.Ka(2,!1);this.Ka(4,!1);this.Ka(32,!1);this.Z=1}w(sf,P);se("goog-menuheader",function(){return new sf(null)});function tf(a,b){gf.call(this,hf,b||ff.Hb(),a);this.nc(!1)}w(tf,gf);f=tf.prototype;f.bf=!0;f.Fi=!1;f.oa=function(){return this.G.oa()};f.removeItem=function(a){(a=this.removeChild(a,!0))&&a.k()};function uf(a){a.bf=!0;a.nc(!0)}f.H=function(a,b,c){(b=tf.j.H.call(this,a,b))&&a&&this.w&&this.bf&&this.ea().focus();this.Qh=a&&c&&t(c.clientX)?new Sb(c.clientX,c.clientY):null;return b};f.If=function(a){this.bf&&this.ea().focus();return tf.j.If.call(this,a)};
f.Sg=function(a){return(this.Fi||a.isEnabled())&&a.v()&&!!(a.U&2)};f.ac=function(a){var b=tf.j.ac.call(this,a);b||he(this,function(c){!b&&c.kj&&c.Kh==a.keyCode&&(this.isEnabled()&&this.eb(c),b=c.bb(a))},this);return b};
f.Uc=function(a){tf.j.Uc.call(this,a);if(a=O(this,a)){var b=a.i();a=this.i();var c=gd(b),d=gd(a),e=pd(a),g=c.x-d.x-e.left,c=c.y-d.y-e.top,d=a.clientHeight-b.offsetHeight,e=a.scrollLeft,h=a.scrollTop,e=e+Math.min(g,Math.max(g-(a.clientWidth-b.offsetWidth),0)),h=h+Math.min(c,Math.max(c-d,0)),b=new Sb(e,h);a.scrollLeft=b.x;a.scrollTop=b.y}};/*

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
function vf(a,b){this.Oc=a;this.kf=b;wf(this);var c=xf(this)[0];this.Ha=c[1];this.Pd=K("tspan",{},null);this.Pd.appendChild(document.createTextNode(J?yf+" ":" "+yf));vf.j.constructor.call(this,c[0])}w(vf,Nc);var yf=Fb?"\u25bc":"\u25be";f=vf.prototype;f.clone=function(){return new vf(this.Oc,this.kf)};f.si="default";
function Tc(a){zf(a);for(var b=new tf,c=xf(a),d=0;d<c.length;d++){var e=c[d][1],g=new $e(c[d][0]);g.gb(e);g.lg(!0);b.Od(g,!0);Re(g,e==a.Ha)}Md(b,"action",function(b){if(b=b.target){b=b.Hc();if(a.h&&a.kf){var c=a.kf(b);void 0!==c&&(b=c)}null!==b&&a.gb(b)}Af==a&&Bf()});fe(b).A(b.i(),"touchstart",function(a){lf(this,a.target).Ic(a)});fe(b).A(b.i(),"touchend",function(a){lf(this,a.target).zd(a)});c=Yb();d=dd();e=Cf(a.bd);g=a.bd.getBBox();b.F(Df);var h=b.i();Pc(h,"blocklyDropdownMenu");var k=hd(h);e.y=
e.y+k.height+g.height>=c.height+d.y?e.y-k.height:e.y+g.height;J?(e.x+=g.width,e.x+=25,e.x<d.x+k.width&&(e.x=d.x+k.width)):(e.x-=25,e.x>c.width+d.x-k.width&&(e.x=c.width+d.x-k.width));Ef(e.x,e.y,c,d);uf(b);h.focus()}
function wf(a){a.cg=null;a.vg=null;var b=a.Oc;if(n(b)&&!(2>b.length)){var c=b.map(function(a){return a[0]}),d=Ff(c),e=Gf(c,d),g=Hf(c,d);if((e||g)&&!(d<=e+g)){e&&(a.cg=c[0].substring(0,e-1));g&&(a.vg=c[0].substr(1-g));c=[];for(d=0;d<b.length;d++){var h=b[d][0],k=b[d][1],h=h.substring(e,h.length-g);c[d]=[h,k]}a.Oc=c}}}function xf(a){return v(a.Oc)?a.Oc.call(a):a.Oc}f.Hc=function(){return this.Ha};f.gb=function(a){this.Ha=a;for(var b=xf(this),c=0;c<b.length;c++)if(b[c][1]==a){this.La(b[c][0]);return}this.La(a)};
f.La=function(a){this.h&&(this.Pd.style.fill=If(Jf(this.h.mf)));null!==a&&a!==this.Aa&&(this.Aa=a,Oc(this),this.ga&&(J?this.ga.insertBefore(this.Pd,this.ga.firstChild):this.ga.appendChild(this.Pd)),this.h&&this.h.t&&(this.h.F(),this.h.Da(),this.h.o.lb()))};f.k=function(){Af==this&&Bf();vf.j.k.call(this)};/*

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
function Kf(a){a=a||C;var b;if(a.$a)b=a.$a();else if(a.wb)b=a.wb();else throw"Not Block or Workspace: "+a;a=Object.create(null);for(var c=0;c<b.length;c++){var d=b[c].lj;if(d)for(var d=d.call(b[c]),e=0;e<d.length;e++){var g=d[e];g&&(a[g.toLowerCase()]=g)}}b=[];for(var h in a)b.push(a[h]);return b}
function Lf(a,b,c,d){var e=Kf();e.sort(ua);e.unshift(null);for(var g=void 0,h=0;h<e.length;h++)if(e[h]!==g){var k=Zc.variables_get?Xc(d,"variables_get"):null;k&&k.ob();var l=Zc.variables_set?Xc(d,"variables_set"):null;l&&l.ob();null===e[h]?g=(k||l).lj()[0]:(k&&Yc(k,"VAR").gb(e[h]),l&&Yc(l,"VAR").gb(e[h]));l&&a.push(l);k&&a.push(k);k&&l?b.push(c,3*c):b.push(2*c)}};/*

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
var Mf=/#(.)(.)(.)/;function If(a){var b=a[0],c=a[1];a=a[2];b=Number(b);c=Number(c);a=Number(a);if(isNaN(b)||0>b||255<b||isNaN(c)||0>c||255<c||isNaN(a)||0>a||255<a)throw Error('"('+b+","+c+","+a+'") is not a valid RGB color');b=Nf(b.toString(16));c=Nf(c.toString(16));a=Nf(a.toString(16));return"#"+b+c+a}var Of=/^#(?:[0-9a-f]{3}){1,2}$/i;function Nf(a){return 1==a.length?"0"+a:a}
function Jf(a){var b=0,c=0,d=0,e=Math.floor(a/60),g=a/60-e;a=237.15*(1-.39*g);g=237.15*(1-.39*(1-g));switch(e){case 1:b=a;c=237.15;d=144.6615;break;case 2:b=144.6615;c=237.15;d=g;break;case 3:b=144.6615;c=a;d=237.15;break;case 4:b=g;c=144.6615;d=237.15;break;case 5:b=237.15;c=144.6615;d=a;break;case 6:case 0:b=237.15,c=g,d=144.6615}return[Math.floor(b),Math.floor(c),Math.floor(d)]}
function Pf(a,b,c){c=Math.min(Math.max(c,0),1);Math.round(c*a[0]+(1-c)*b[0]);Math.round(c*a[1]+(1-c)*b[1]);Math.round(c*a[2]+(1-c)*b[2])};function Qf(a,b,c){if(v(a))c&&(a=la(a,c));else if(a&&"function"==typeof a.handleEvent)a=la(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function Rf(a,b,c){be.call(this,c);this.ia=b||Sf;this.Mf=a instanceof mb?a:rb(a,null)}w(Rf,be);var Tf={};f=Rf.prototype;f.jg=!1;f.fd=!1;f.tk=null;f.Di=xb;f.wd=!0;f.Wd=-1;f.W=function(){Rf.j.W.call(this);this.rc&&(this.rc.removeNode(this),this.rc=null);this.s=null};
f.re=function(){var a=this.i();if(a){var b=Uf(this);b&&!b.id&&(b.id=ee(this)+".label");ve(a,"treeitem");we(a,"selected",!1);we(a,"expanded",!1);we(a,"level",this.Ec());b&&we(a,"labelledby",b.id);(a=this.fe())&&ve(a,"presentation");(a=this.ee())&&ve(a,"presentation");if(a=Vf(this))if(ve(a,"group"),a.hasChildNodes())for(a=ie(this),b=1;b<=a;b++){var c=O(this,b-1).i();we(c,"setsize",a);we(c,"posinset",b)}}};
f.I=function(){var a=this.ab(),b=this.yg(),c=a.vb,a=c.createElement("div");y?(Ob(a,wb(vb("br"),b)),a.removeChild(a.firstChild)):Ob(a,b);if(1==a.childNodes.length)b=a.removeChild(a.firstChild);else for(b=c.createDocumentFragment();a.firstChild;)b.appendChild(a.firstChild);this.s=b};f.ja=function(){Rf.j.ja.call(this);Tf[ee(this)]=this;this.re()};f.Ra=function(){Rf.j.Ra.call(this);delete Tf[ee(this)]};
f.vc=function(a,b){var c=O(this,b-1),d=O(this,b);Rf.j.vc.call(this,a,b);a.gc=c;a.cb=d;c?c.cb=a:this.th=a;d?d.gc=a:this.Gh=a;var e=this.ua();e&&Wf(a,e);Xf(a,this.Ec()+1);if(this.i()&&(this.Yc(),this.Ea())){e=Vf(this);a.i()||a.I();var g=a.i(),h=d&&d.i();e.insertBefore(g,h);this.w&&a.ja();d||(c?c.Yc():(kd(e,!0),this.Ab(this.Ea())))}};f.add=function(a,b){a.getParent()&&a.getParent().removeChild(a);this.vc(a,b?le(this,b):ie(this));return a};
f.removeChild=function(a){var b=this.ua(),c=b?b.Ja:null;if(c==a||a.contains(c))b.hasFocus()?(this.select(),Qf(this.Vj,10,this)):this.select();Rf.j.removeChild.call(this,a);this.Gh==a&&(this.Gh=a.gc);this.th==a&&(this.th=a.cb);a.gc&&(a.gc.cb=a.cb);a.cb&&(a.cb.gc=a.gc);c=!a.cb;a.rc=null;a.Wd=-1;if(b&&(b.removeNode(this),this.w)){b=Vf(this);if(a.w){var d=a.i();b.removeChild(d);a.Ra()}c&&(c=O(this,ie(this)-1))&&c.Yc();ke(this)||(b.style.display="none",this.Yc(),this.fe().className=this.ae())}return a};
f.remove=Rf.prototype.removeChild;f.Vj=function(){this.select()};f.Ec=function(){var a=this.Wd;0>a&&(a=(a=this.getParent())?a.Ec()+1:0,Xf(this,a));return a};function Xf(a,b){if(b!=a.Wd){a.Wd=b;var c=Yf(a);if(c){var d=Zf(a)+"px";je(a)?c.style.paddingRight=d:c.style.paddingLeft=d}he(a,function(a){Xf(a,b+1)})}}f.contains=function(a){for(;a;){if(a==this)return!0;a=a.getParent()}return!1};f.Gb=function(){var a=[];he(this,function(b){a.push(b)});return a};f.te=function(){return this.jg};
f.select=function(){var a=this.ua();a&&a.oc(this)};function $f(a,b){if(a.jg!=b){a.jg=b;ag(a);var c=a.i();c&&(we(c,"selected",b),b&&(c=a.ua().i(),we(c,"activedescendant",ee(a))))}}f.Ea=function(){return this.fd};
f.Ab=function(a){var b=a!=this.fd;if(!b||this.dispatchEvent(a?"beforeexpand":"beforecollapse")){var c;this.fd=a;c=this.ua();var d=this.i();if(ke(this)){if(!a&&c&&this.contains(c.Ja)&&this.select(),d){if(c=Vf(this))if(kd(c,a),a&&this.w&&!c.hasChildNodes()){var e=[];he(this,function(a){e.push(a.yg())});Ob(c,wb(e));he(this,function(a){a.ja()})}this.Yc()}}else(c=Vf(this))&&kd(c,!1);d&&(this.fe().className=this.ae(),we(d,"expanded",a));b&&this.dispatchEvent(a?"expand":"collapse")}};f.toggle=function(){this.Ab(!this.Ea())};
f.expand=function(){this.Ab(!0)};f.collapse=function(){this.Ab(!1)};f.ig=function(){var a=this.getParent();a&&(a.Ab(!0),a.ig())};f.yg=function(){var a=this.ua(),b=!a.Fd||a==this.getParent()&&!a.pg?this.ia.Wg:this.ia.Vg,a=this.Ea()&&ke(this),b={"class":b,style:bg(this)},c=[];a&&he(this,function(a){c.push(a.yg())});a=vb("div",b,c);return vb("div",{"class":this.ia.eh,id:ee(this)},[cg(this),a])};function Zf(a){return Math.max(0,(a.Ec()-1)*a.ia.Pf)}
function cg(a){var b={};b["padding-"+(je(a)?"right":"left")]=Zf(a)+"px";var b={"class":a.md(),style:b},c=a.Ff(),d=vb("span",{style:{display:"inline-block"},"class":a.ae()}),e=vb("span",{"class":a.ia.fh,title:a.tk||null},a.Mf);a=wb(e,vb("span",{},a.Di));return vb("div",b,[c,d,a])}f.md=function(){return this.ia.rf+(this.te()?" "+this.ia.hh:"")};f.Ff=function(){return vb("span",{type:"expand",style:{display:"inline-block"},"class":dg(this)})};
function dg(a){var b=a.ua(),c=!b.Fd||b==a.getParent()&&!b.pg,d=a.ia,e=new oa;e.append(d.Xb," ",d.Ri," ");if(ke(a)){var g=0;b.og&&a.wd&&(g=a.Ea()?2:1);c||(g=a.cb?g+8:g+4);switch(g){case 1:e.append(d.Vi);break;case 2:e.append(d.Ui);break;case 4:e.append(d.$g);break;case 5:e.append(d.Ti);break;case 6:e.append(d.Si);break;case 8:e.append(d.ah);break;case 9:e.append(d.Xi);break;case 10:e.append(d.Wi);break;default:e.append(d.Zg)}}else c?e.append(d.Zg):a.cb?e.append(d.ah):e.append(d.$g);return e.toString()}
function bg(a){var b=a.Ea()&&ke(a);return db({"background-position":fg(a),display:b?null:"none"})}function fg(a){return(a.cb?(a.Ec()-1)*a.ia.Pf:"-100")+"px 0"}f.i=function(){var a=Rf.j.i.call(this);a||(this.s=a=this.ab().i(ee(this)));return a};function Yf(a){return(a=a.i())?a.firstChild:null}f.ee=function(){var a=Yf(this);return a?a.firstChild:null};f.fe=function(){var a=Yf(this);return a?a.childNodes[1]:null};function Uf(a){return(a=Yf(a))&&a.lastChild?a.lastChild.previousSibling:null}
function Vf(a){return(a=a.i())?a.lastChild:null}f.La=function(a){this.Mf=a=pb(a);var b=Uf(this);b&&Ob(b,a);(a=this.ua())&&gg(a,this)};f.mb=function(){var a=ob(this.Mf);return-1!=a.indexOf("&")?"document"in m?Da(a):Fa(a):a};function ag(a){var b=Yf(a);b&&(b.className=a.md())}f.Yc=function(){var a=this.ee();a&&(a.className=dg(this));if(a=Vf(this))a.style.backgroundPosition=fg(this)};f.Yf=function(a){"expand"==a.target.getAttribute("type")&&ke(this)?this.wd&&this.toggle():(this.select(),ag(this))};
f.Mh=function(a){"expand"==a.target.getAttribute("type")&&ke(this)||this.wd&&this.toggle()};function hg(a){return a.Ea()&&ke(a)?hg(O(a,ie(a)-1)):a}function Wf(a,b){a.rc!=b&&(a.rc=b,gg(b,a),he(a,function(a){Wf(a,b)}))}
var Sf={Pf:19,gh:"goog-tree-root goog-tree-item",dh:"goog-tree-hide-root",eh:"goog-tree-item",Vg:"goog-tree-children",Wg:"goog-tree-children-nolines",rf:"goog-tree-row",fh:"goog-tree-item-label",Xb:"goog-tree-icon",Ri:"goog-tree-expand-icon",Vi:"goog-tree-expand-icon-plus",Ui:"goog-tree-expand-icon-minus",Xi:"goog-tree-expand-icon-tplus",Wi:"goog-tree-expand-icon-tminus",Ti:"goog-tree-expand-icon-lplus",Si:"goog-tree-expand-icon-lminus",ah:"goog-tree-expand-icon-t",$g:"goog-tree-expand-icon-l",Zg:"goog-tree-expand-icon-blank",
pf:"goog-tree-expanded-folder-icon",Xg:"goog-tree-collapsed-folder-icon",qf:"goog-tree-file-icon",bh:"goog-tree-expanded-folder-icon",Yg:"goog-tree-collapsed-folder-icon",hh:"selected"};function ig(a,b,c){Rf.call(this,a,b,c)}w(ig,Rf);ig.prototype.ua=function(){if(this.rc)return this.rc;var a=this.getParent();return a&&(a=a.ua())?(Wf(this,a),a):null};ig.prototype.ae=function(){var a=this.Ea(),b=this.gj;if(a&&b)return b;b=this.yj;if(!a&&b)return b;b=this.ia;if(ke(this)){if(a&&b.pf)return b.Xb+" "+b.pf;if(!a&&b.Xg)return b.Xb+" "+b.Xg}else if(b.qf)return b.Xb+" "+b.qf;return""};/*

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
function jg(a){var b;J&&(b=workarea.je());var c=Zb("xml");a=Kc(a,!0);for(var d=0,e;e=a[d];d++){var g=kg(e);e=e.P();g.setAttribute("x",J?b-e.x:e.x);g.setAttribute("y",e.y);c.appendChild(g)}c.setAttribute("level",I);return c}
function kg(a){var b=Zb("block");b.setAttribute("type",a.type);b.setAttribute("id",a.id);if(a.Lh){var c=a.Lh();c&&b.appendChild(c)}for(var d=0;c=a.N[d];d++)for(var e=0,g;g=c.na[e];e++)if(g.name&&g.uc){var h=Zb("field",null,g.Hc());h.setAttribute("name",g.name);b.appendChild(h)}if(c=a.de())c=Zb("comment",null,c),"object"==typeof a.L&&(c.setAttribute("pinned",a.L.v()),d=a.L.$b(),c.setAttribute("h",d.height),c.setAttribute("w",d.width)),b.appendChild(c);d=!1;for(e=0;c=a.N[e];e++){var k;g=!0;5!=c.type&&
(h=Q(c.m),1==c.type?(k=Zb("value"),d=!0):3==c.type&&(k=Zb("statement")),h&&(k.appendChild(kg(h)),g=!1),k.setAttribute("name",c.name),g||b.appendChild(k))}d&&b.setAttribute("inline",a.ud);a.isCollapsed()&&b.setAttribute("collapsed",!0);a.disabled&&b.setAttribute("disabled",!0);a.Ac&&!N||b.setAttribute("deletable",!1);a.yb&&!N||b.setAttribute("movable",!1);a.Cc&&!N||b.setAttribute("editable",!1);if(a=lg(a))k=Zb("next",null,kg(a)),b.appendChild(k);return b}
function mg(a){return(new XMLSerializer).serializeToString(a)}function ng(a){a=(new DOMParser).parseFromString(a,"text/xml");if(!a||!a.firstChild||"xml"!=a.firstChild.nodeName.toLowerCase()||a.firstChild!==a.lastChild)throw"Blockly.Xml.textToDom did not obtain a valid XML tree.";return a.firstChild}
function og(a,b){var c;J&&(c=a.je());for(var d=0,e;e=b.childNodes[d];d++)if("block"==e.nodeName.toLowerCase()){var g=pg(a,e),h=parseInt(e.getAttribute("x"),10);e=parseInt(e.getAttribute("y"),10);isNaN(h)||isNaN(e)||g.moveBy(J?c-h:h,e)}}
function pg(a,b,c){var d=null,e=b.getAttribute("type");if(!e)throw"Block type unspecified: \n"+b.outerHTML;var g=b.getAttribute("id");if(c&&g){d=qg(g,a);if(!d)throw"Couldn't get Block with id: "+g;g=d.getParent();d.o&&d.k(!0,!1,!0);d.fill(a,e);d.qa=g}else d=Xc(a,e);d.ob&&d.ob();(g=b.getAttribute("inline"))&&rg(d,"true"==g);(g=b.getAttribute("disabled"))&&d.Cd("true"==g);(g=b.getAttribute("deletable"))&&sg(d,"true"==g);if(g=b.getAttribute("movable"))d.yb="true"==g;(g=b.getAttribute("editable"))&&tg(d,
"true"==g);for(var h=null,g=0,k;k=b.childNodes[g];g++)if(3!=k.nodeType||!k.data.match(/^\s*$/)){for(var h=null,l=0,r;r=k.childNodes[l];l++)3==r.nodeType&&r.data.match(/^\s*$/)||(h=r);l=k.getAttribute("name");switch(k.nodeName.toLowerCase()){case "mutation":d.cj&&(d.cj(k),d.ob&&d.ob());break;case "comment":d.Bd(k.textContent);var q=k.getAttribute("pinned");q&&setTimeout(function(){d.L&&d.L.H&&d.L.H("true"==q)},1);h=parseInt(k.getAttribute("w"),10);k=parseInt(k.getAttribute("h"),10);!isNaN(h)&&!isNaN(k)&&
d.L&&d.L.H&&d.L.lc(h,k);break;case "title":case "field":Yc(d,l).gb(k.textContent);break;case "value":case "statement":k=ug(d,l);if(!k)throw"Input "+l+" does not exist in block "+e;if(h&&"block"==h.nodeName.toLowerCase())if(h=pg(a,h,c),h.J)vg(k.m,h.J);else if(h.C)vg(k.m,h.C);else throw"Child block does not have output or previous statement.";break;case "next":if(h&&"block"==h.nodeName.toLowerCase()){if(!d.K)throw"Next statement does not exist.";if(d.K.n)throw"Next statement is already connected.";
h=pg(a,h,c);if(!h.C)throw"Next block does not have previous statement.";vg(d.K,h.C)}break;default:console.log("Ignoring unknown tag: "+k.nodeName)}}(b=b.getAttribute("collapsed"))&&d.mc("true"==b);a.t&&((a=lg(d))?a.F():d.F());return d}function wg(a){for(var b=0,c;c=a.childNodes[b];b++)if("next"==c.nodeName.toLowerCase()){a.removeChild(c);break}}m.Blockly||(m.Blockly={});m.Blockly.Xml||(m.Blockly.Xml={});m.Blockly.Xml.domToText=mg;m.Blockly.Xml.domToWorkspace=og;m.Blockly.Xml.textToDom=ng;
m.Blockly.Xml.workspaceToDom=jg;/*

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
function xg(a,b,c,d,e,g,h){var k=yg;J&&(k=-k);this.Hi=k*Math.PI/180;this.p=a;this.ub=b;this.di=c;a.Wc.appendChild(this.of(b,!(!g||!h)));zg(this,d,e);g&&h||(a=this.ub.getBBox(),g=a.width+2*Ag,h=a.height+2*Ag);this.lc(g,h);Bg(this);Cg(this);this.hg=!0;N||(L(this.Rd,"mousedown",this,this.Li),this.zb&&L(this.zb,"mousedown",this,this.ek))}var Ag=6,yg=20,Dg=null,Eg=null;function Fg(){Dg&&(M(Dg),Dg=null);Eg&&(M(Eg),Eg=null)}f=xg.prototype;f.hg=!1;f.Ua=0;f.ef=0;f.ic=0;f.Ad=0;f.B=0;f.fa=0;f.hf=!0;
f.of=function(a,b){this.Va=K("g",{},null);var c=K("g",{filter:"url(#blocklyEmboss)"},this.Va);this.Pg=K("path",{},c);this.Rd=K("rect",{"class":"blocklyDraggable",x:0,y:0,rx:Ag,ry:Ag},c);b?(this.zb=K("g",{"class":J?"blocklyResizeSW":"blocklyResizeSE"},this.Va),c=2*Ag,K("polygon",{points:"0,x x,x x,0".replace(/x/g,c.toString())},this.zb),K("line",{"class":"blocklyResizeLine",x1:c/3,y1:c-1,x2:c-1,y2:c/3},this.zb),K("line",{"class":"blocklyResizeLine",x1:2*c/3,y1:c-1,x2:c-1,y2:2*c/3},this.zb)):this.zb=
null;this.Va.appendChild(a);return this.Va};f.Li=function(a){Gg(this);Fg();Rc(a)||Hg(a)||(Ig(Jg),this.qh=J?this.ic+a.clientX:this.ic-a.clientX,this.ej=this.Ad-a.clientY,Dg=L(document,"mouseup",this,Fg),Eg=L(document,"mousemove",this,this.Mi),Kg(),a.stopPropagation())};f.Mi=function(a){this.hf=!1;this.ic=J?this.qh-a.clientX:this.qh+a.clientX;this.Ad=this.ej+a.clientY;Bg(this);Cg(this)};
f.ek=function(a){Gg(this);Fg();Rc(a)||(Ig(Jg),this.dk=J?this.B+a.clientX:this.B-a.clientX,this.ck=this.fa-a.clientY,Dg=L(document,"mouseup",this,Fg),Eg=L(document,"mousemove",this,this.fk),Kg(),a.stopPropagation())};f.fk=function(a){this.hf=!1;var b=this.dk,c=this.ck+a.clientY,b=J?b-a.clientX:b+a.clientX;this.lc(b,c);J&&Bg(this)};function Gg(a){a.Va.parentNode.appendChild(a.Va)}function zg(a,b,c){a.Ua=b;a.ef=c;a.hg&&Bg(a)}
function Bg(a){a.Va.setAttribute("transform","translate("+(J?a.Ua-a.ic-a.B:a.Ua+a.ic)+", "+(a.Ad+a.ef)+")")}f.$b=function(){return{width:this.B,height:this.fa}};
f.lc=function(a,b){var c=2*Ag;a=Math.max(a,c+45);b=Math.max(b,c+18);this.B=a;this.fa=b;this.Rd.setAttribute("width",a);this.Rd.setAttribute("height",b);this.zb&&(J?this.zb.setAttribute("transform","translate("+2*Ag+", "+(b-c)+") scale(-1 1)"):this.zb.setAttribute("transform","translate("+(a-c)+", "+(b-c)+")"));if(this.hg){if(this.hf){var c=-this.B/4,d=-this.fa-25,e=this.p.Ib();J?this.Ua-e.Na-c-this.B<R?c=this.Ua-e.Na-this.B-R:this.Ua-e.Na-c>e.ba&&(c=this.Ua-e.Na-e.ba):this.Ua+c<e.Na?c=e.Na-this.Ua:
e.Na+e.ba<this.Ua+c+this.B+10+R&&(c=e.Na+e.ba-this.Ua-this.B-R);this.ef+d<e.Sb&&(d=this.di.getBBox().height);this.ic=c;this.Ad=d}Bg(this);Cg(this)}Lg(this.Va,"resize")};
function Cg(a){var b=[],c=a.B/2,d=a.fa/2,e=-a.ic,g=-a.Ad;if(c==e&&d==g)b.push("M "+c+","+d);else{g-=d;e-=c;J&&(e*=-1);var h=Math.sqrt(g*g+e*e),k=Math.acos(e/h);0>g&&(k=2*Math.PI-k);var l=k+Math.PI/2;l>2*Math.PI&&(l-=2*Math.PI);var r=Math.sin(l),q=Math.cos(l),x=a.$b(),l=(x.width+x.height)/10,l=Math.min(l,x.width,x.height)/2,x=1-8/h,e=c+x*e,g=d+x*g,x=c+l*q,u=d+l*r,c=c-l*q,d=d-l*r,r=k+a.Hi;r>2*Math.PI&&(r-=2*Math.PI);k=Math.sin(r)*h/4;h=Math.cos(r)*h/4;b.push("M"+x+","+u);b.push("C"+(x+h)+","+(u+k)+
" "+e+","+g+" "+e+","+g);b.push("C"+e+","+g+" "+(c+h)+","+(d+k)+" "+c+","+d)}b.push("z");a.Pg.setAttribute("d",b.join(" "))}f.Rb=function(a){this.Rd.setAttribute("fill",a);this.Pg.setAttribute("fill",a)};f.k=function(){Fg();D(this.Va);this.di=this.ub=this.p=this.Va=null};/*

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
function Mg(a){this.p=a}f=Mg.prototype;f.$c=47;f.Xe=45;f.Zc=15;f.vi=35;f.Hg=35;f.Nd=25;f.Mc=!1;f.g=null;f.Ve=null;f.Sf=0;f.Nb=0;f.Hh=0;f.mi=0;
f.I=function(){this.g=K("g",{filter:"url(#blocklyTrashcanShadowFilter)"},null);var a=K("clipPath",{id:"blocklyTrashBodyClipPath"},this.g);K("rect",{width:this.$c,height:this.Xe,y:this.Zc},a);K("image",{width:Ng,height:Og,y:-32,"clip-path":"url(#blocklyTrashBodyClipPath)"},this.g).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Pg+Qg);a=K("clipPath",{id:"blocklyTrashLidClipPath"},this.g);K("rect",{width:this.$c,height:this.Zc},a);this.Ve=K("image",{width:Ng,height:Og,y:-32,"clip-path":"url(#blocklyTrashLidClipPath)"},
this.g);this.Ve.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",Pg+Qg);this.ff();return this.g};f.D=function(){Rg(this,!1);this.Ob();L(window,"resize",this,this.Ob)};f.k=function(){this.g&&(D(this.g),this.g=null);this.p=this.Ve=null;m.clearTimeout(this.Sf)};f.Ob=function(){var a=this.p.Ib();a&&(this.Hh=J?this.Hg:a.ba+a.Oa-this.$c-this.Hg,this.mi=a.sa+a.Pa-(this.Xe+this.Zc)-this.vi,this.g.setAttribute("transform","translate("+this.Hh+","+this.mi+")"))};
f.ld=function(){var a=Sg(this.g);return new ad(a.x-this.Nd,a.y-this.Nd,this.$c+2*this.Nd,this.Xe+this.Zc+2*this.Nd)};function Rg(a,b){a.Mc!=b&&(m.clearTimeout(a.Sf),a.Mc=b,a.ff())}f.ff=function(){this.Nb+=this.Mc?.2:-.2;this.Nb=Math.min(Math.max(this.Nb,0),1);var a=45*this.Nb;this.Ve.setAttribute("transform","rotate("+(J?-a:a)+", "+(J?4:this.$c-4)+", "+(this.Zc-2)+")");this.g.style.opacity=.2+.2*this.Nb;if(0<this.Nb||1>this.Nb)this.Sf=Qf(this.ff,20,this)};f.close=function(){Rg(this,!1)};/*

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
function Tg(a){this.p=a;this.Q=null;this.od=new Ug(a,!0,!0);this.Ld=new Ug(a,!1,!0);this.cd=K("rect",{height:R,width:R,style:"fill: #fff"},null);Vg(this.cd,a.Wc)}Tg.prototype.k=function(){M(this.Ge);this.Ge=null;D(this.cd);this.Q=this.p=this.cd=null;this.od.k();this.od=null;this.Ld.k();this.Ld=null};
Tg.prototype.resize=function(){var a=this.p.Ib();if(a){var b=!1,c=!1;this.Q&&this.Q.ba==a.ba&&this.Q.sa==a.sa&&this.Q.Pa==a.Pa&&this.Q.Oa==a.Oa?(this.Q&&this.Q.yc==a.yc&&this.Q.Na==a.Na&&this.Q.tb==a.tb||(b=!0),this.Q&&this.Q.Qa==a.Qa&&this.Q.Sb==a.Sb&&this.Q.Xa==a.Xa||(c=!0)):c=b=!0;b&&this.od.resize(a);c&&this.Ld.resize(a);this.Q&&this.Q.ba==a.ba&&this.Q.Oa==a.Oa||this.cd.setAttribute("x",this.Ld.Tb);this.Q&&this.Q.sa==a.sa&&this.Q.Pa==a.Pa||this.cd.setAttribute("y",this.od.We);this.Q=a}};
Tg.prototype.set=function(a,b){this.od.set(a);this.Ld.set(b)};function Ug(a,b,c){this.p=a;this.He=c||!1;this.wa=b;this.of();b?(this.Sa.setAttribute("height",R),this.aa.setAttribute("height",R-6),this.aa.setAttribute("y",3)):(this.Sa.setAttribute("width",R),this.aa.setAttribute("width",R-6),this.aa.setAttribute("x",3));this.Oh=L(this.Sa,"mousedown",this,this.Rj);this.Ph=L(this.aa,"mousedown",this,this.Sj)}var Wg,Xg,R=15;aa("document.documentElement.ontouchstart")&&(R=25);f=Ug.prototype;
f.k=function(){this.Fe();this.Ge&&(M(this.Ge),this.Ge=null);M(this.Oh);this.Oh=null;M(this.Ph);this.Ph=null;D(this.g);this.p=this.aa=this.Sa=this.g=null};
f.resize=function(a){if(!a&&(a=this.p.Ib(),!a))return;if(this.wa){var b=a.ba;this.He?b-=R:this.H(b<a.Qa);this.Fa=b/a.yc;if(-Infinity===this.Fa||Infinity===this.Fa||isNaN(this.Fa))this.Fa=0;var c=a.ba*this.Fa,d=(a.Na-a.tb)*this.Fa;this.aa.setAttribute("width",Math.max(0,c));this.Tb=a.Oa;this.He&&J&&(this.Tb+=a.Oa+R);this.We=a.Pa+a.sa-R;this.g.setAttribute("transform","translate("+this.Tb+", "+this.We+")");this.Sa.setAttribute("width",Math.max(0,b));this.aa.setAttribute("x",Yg(this,d))}else{b=a.sa;
this.He?b-=R:this.H(b<a.Qa);this.Fa=b/a.Qa;if(-Infinity===this.Fa||Infinity===this.Fa||isNaN(this.Fa))this.Fa=0;c=a.sa*this.Fa;d=(a.Sb-a.Xa)*this.Fa;this.aa.setAttribute("height",Math.max(0,c));this.Tb=a.Oa;J||(this.Tb+=a.ba-R);this.We=a.Pa;this.g.setAttribute("transform","translate("+this.Tb+", "+this.We+")");this.Sa.setAttribute("height",Math.max(0,b));this.aa.setAttribute("y",Yg(this,d))}Zg(this)};
f.of=function(){this.g=K("g",{},null);this.Sa=K("rect",{"class":"blocklyScrollbarBackground"},this.g);var a=Math.floor((R-6)/2);this.aa=K("rect",{"class":"blocklyScrollbarKnob",rx:a,ry:a},this.g);Vg(this.g,this.p.Wc)};f.v=function(){return"none"!=this.g.getAttribute("display")};f.H=function(a){if(a!=this.v()){if(this.He)throw"Unable to toggle visibility of paired scrollbars.";a?this.g.setAttribute("display","block"):(this.p.bi({x:0,y:0}),this.g.setAttribute("display","none"))}};
f.Rj=function(a){this.Fe();if(!Rc(a)){var b=$g(a),b=this.wa?b.x:b.y,c=Sg(this.aa),c=this.wa?c.x:c.y,d=parseFloat(this.aa.getAttribute(this.wa?"width":"height")),e=parseFloat(this.aa.getAttribute(this.wa?"x":"y")),g=.95*d;b<=c?e-=g:b>=c+d&&(e+=g);this.aa.setAttribute(this.wa?"x":"y",Yg(this,e));Zg(this)}a.stopPropagation()};
f.Sj=function(a){this.Fe();Rc(a)||(this.mk=parseFloat(this.aa.getAttribute(this.wa?"x":"y")),this.ok=this.wa?a.clientX:a.clientY,Wg=L(document,"mouseup",this,this.Fe),Xg=L(document,"mousemove",this,this.Uj));a.stopPropagation()};f.Uj=function(a){this.aa.setAttribute(this.wa?"x":"y",Yg(this,this.mk+((this.wa?a.clientX:a.clientY)-this.ok)));Zg(this)};f.Fe=function(){ah();Kg(!0);Wg&&(M(Wg),Wg=null);Xg&&(M(Xg),Xg=null)};
function Yg(a,b){if(0>=b||isNaN(b))b=0;else{var c=a.wa?"width":"height",d=parseFloat(a.Sa.getAttribute(c)),c=parseFloat(a.aa.getAttribute(c));b=Math.min(b,d-c)}return b}function Zg(a){var b=parseFloat(a.aa.getAttribute(a.wa?"x":"y")),c=parseFloat(a.Sa.getAttribute(a.wa?"width":"height")),b=b/c;isNaN(b)&&(b=0);c={};a.wa?c.x=b:c.y=b;a.p.bi(c)}f.set=function(a){this.aa.setAttribute(this.wa?"x":"y",a*this.Fa);Zg(this)};
function Vg(a,b){var c=b.nextSibling,d=b.parentNode;if(!d)throw"Reference node has no parent.";c?d.insertBefore(a,c):d.appendChild(a)};/*

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
function bh(a,b){bh.j.constructor.call(this);this.Ib=a;this.bi=b;var c=[];c[1]=new ch;c[2]=new ch;c[3]=new ch;c[4]=new ch;this.Qi=c}w(bh,Jc);f=bh.prototype;f.t=!0;f.Fh=!1;f.yf=!1;f.scrollX=0;f.scrollY=0;f.Ma=null;f.Af=null;f.Qb=null;f.I=function(){this.g=K("g",{},null);this.$=K("g",{},this.g);this.Wc=K("g",{},this.g);this.lb();return this.g};
f.k=function(){this.t=!1;bh.j.k.call(this);this.g&&(D(this.g),this.g=null);this.Wc=this.$=null;this.da&&(this.da.k(),this.da=null);this.Ma&&(this.Ma.k(),this.Ma=null)};function dh(){var a=C;if(tc&&!N){a.Ma=new Mg(a);var b=a.Ma.I();a.g.insertBefore(b,a.$);a.Ma.D()}}f.ad=function(a){bh.j.ad.call(this,a);eh&&this==C&&-1==fh.indexOf(a)&&fh.push(a)};f.Pe=function(a){bh.j.Pe.call(this,a);eh&&this==C&&fh.Jl(a)};f.clear=function(){Kg();bh.j.clear.call(this)};f.je=function(){return this.Ib().ba};
f.F=function(){for(var a=this.wb(),b=0,c;c=a[b];b++)c.Gb().length||c.F()};function gh(a,b){a.zg=b;a.Ag&&(M(a.Ag),a.Ag=null);b&&(a.Ag=L(a.$,"blocklySelectChange",a,function(){this.zg=!1}))}function hh(a){var b=C;b.zg&&0!=Sc&&gh(b,!1);if(b.zg){var c=null;if(a&&(c=Lc(b,a),!c))return;gh(b,!1);c?c.select():S&&ih();setTimeout(function(){gh(b,!0)},1)}}f.lb=function(){if(this.t){this.Af&&clearTimeout(this.Af);var a=this.$;a&&(this.Af=setTimeout(function(){Lg(a,"blocklyWorkspaceChange")},0))}};
function jh(a,b){var c=$g(b),c=new Sb(c.x,c.y);if(a.kh){if(a.kh.contains(c))return Rg(a.Ma,!0),Ig(kh),!0;Rg(a.Ma,!1)}if(a.jh&&a.jh.contains(c))return Ig(kh),!0;Ig(Jg);return!1}bh.prototype.clear=bh.prototype.clear;/*

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
function lh(a){this.Ca=a}f=lh.prototype;f.ha=null;f.Jc=0;f.Kc=0;f.zc=function(){this.xa||(this.xa=K("g",{},null),this.Ca.u().appendChild(this.xa),L(this.xa,"mouseup",this,this.zj),this.tc())};f.k=function(){D(this.xa);this.xa=null;this.H(!1);this.Ca=null};f.tc=function(){this.Ca.Lb?Qc(this.xa,"blocklyIconGroup"):Pc(this.xa,"blocklyIconGroup")};f.v=function(){return!!this.ha};f.zj=function(){this.Ca.Lb||this.H(!this.v())};f.sc=function(){if(this.v()){var a=If(Jf(this.Ca.mf));this.ha.Rb(a)}};
function mh(a){var b=a.Ca.P(),c=nh(a.xa),d=b.x+c.x+8,b=b.y+c.y+8;if(d!==a.Jc||b!==a.Kc)a.Jc=d,a.Kc=b,a.v()&&zg(a.ha,d,b)};/*

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
function oh(a,b){this.h=a;this.n=null;this.type=b;this.O=this.hb=0;this.nb=!1;this.Eb=this.h.o.Qi}f=oh.prototype;f.k=function(){if(this.n)throw"Disconnect connection before disposing of it.";this.nb&&ph(this.Eb[this.type],this);this.nb=!1;qh==this&&(qh=null);rh==this&&(rh=null)};function sh(a){return 1==a.type||3==a.type}
function vg(a,b){if(a.h==b.h)throw"Attempted to connect a block to itself.";if(a.h.o!==b.h.o)throw"Blocks are on different workspaces.";if(th[a.type]!=b.type)throw"Attempt to connect incompatible types.";if(1==a.type||2==a.type){if(a.n)throw"Source connection already connected (value).";if(b.n){var c=Q(b);c.za(null);if(!c.J)throw"Orphan block does not have an output connection.";for(var d=a.h;d=uh(d,c);)if(Q(d))d=Q(d);else{vg(d,c.J);c=null;break}c&&setTimeout(function(){vh(c.J,b)},wh)}}else{if(a.n)throw"Source connection already connected (block).";
if(b.n){if(4!=a.type)throw"Can only do a mid-stack connection with the top of a block.";c=Q(b);c.za(null);if(!c.C)throw"Orphan block does not have a previous connection.";for(d=a.h;d.K;)if(d.K.n)d=lg(d);else{xh(c.C,d.K)&&(vg(d.K,c.C),c=null);break}c&&setTimeout(function(){vh(c.C,b)},wh)}}var e;sh(a)?(d=a.h,e=b.h):(d=b.h,e=a.h);a.n=b;b.n=a;e.za(d);d.t&&yh(d);e.t&&yh(e);d.t&&e.t&&(3==a.type||4==a.type?e.F():d.F())}
function uh(a,b){for(var c=!1,d=0;d<a.N.length;d++){var e=a.N[d].m;if(e&&1==e.type&&xh(b.J,e)){if(c)return null;c=e}}return c}f.disconnect=function(){var a=this.n;if(!a)throw"Source connection not connected.";if(a.n!=this)throw"Target connection not connected to source connection.";this.n=a.n=null;var b;sh(this)?(b=this.h,a=a.h):(b=a.h,a=this.h);b.t&&b.F();a.t&&(yh(a),a.F())};function Q(a){return a.n?a.n.h:null}
function vh(a,b){if(0==Sc){var c=zh(a.h);if(!c.Lb){var d=!1;if(!c.yb||N){c=zh(b.h);if(!c.yb||N)return;b=a;d=!0}c.u().parentNode.appendChild(c.u());var e=b.hb+T-a.hb,g=b.O+T-a.O;d&&(g=-g);J&&(e=-e);c.moveBy(e,g)}}}f.moveTo=function(a,b){this.nb&&ph(this.Eb[this.type],this);this.hb=a;this.O=b;Ah(this.Eb[this.type],this)};f.moveBy=function(a,b){this.moveTo(this.hb+a,this.O+b)};
f.me=function(){var a;1==this.type||2==this.type?(a=J?-8:8,a="m 0,0 v 5 c 0,10 "+-a+",-8 "+-a+",7.5 s "+a+",-2.5 "+a+",7.5 v 5"):a=J?"m 20,0 h -5 l -6,4 -3,0 -6,-4 h -5":"m -20,0 h 5 l 6,4 3,0 6,-4 h 5";var b=this.h.P();oh.ne=K("path",{"class":"blocklyHighlightedConnectionPath",d:a,transform:"translate("+(this.hb-b.x)+", "+(this.O-b.y)+")"},this.h.u())};
function Bh(a){var b=Math.round(a.n.hb-a.hb),c=Math.round(a.n.O-a.O);if(0!=b||0!=c){a=Q(a);var d=a.u();if(!d)throw"block is not rendered.";d=nh(d);a.u().setAttribute("transform","translate("+(d.x-b)+", "+(d.y-c)+")");Ch(a,-b,-c)}}
function Dh(a,b,c,d){function e(a){var c=g[a];if((2==c.type||4==c.type)&&c.n||1==c.type&&c.n&&(!Q(c).yb||N)||!xh(x,c))return!0;c=c.h;do{if(q==c)return!0;c=c.getParent()}while(c);var d=h-g[a].hb,c=k-g[a].O,d=Math.sqrt(d*d+c*c);d<=b&&(r=g[a],b=d);return c<b}if(a.n)return{m:null,Th:b};var g=a.Eb[th[a.type]],h=a.hb+c,k=a.O+d;c=0;for(var l=d=g.length-2;c<l;)g[l].O<k?c=l:d=l,l=Math.floor((c+d)/2);d=c=l;var r=null,q=a.h,x=a;if(g.length){for(;0<=c&&e(c);)c--;do d++;while(d<g.length&&e(d))}return{m:r,Th:b}}
function xh(a,b){if(!a.wc||!b.wc)return!0;for(var c=0;c<a.wc.length;c++)if(-1!=b.wc.indexOf(a.wc[c]))return!0;return!1}f.Tc=function(a){a?(n(a)||(a=[a]),this.wc=a,this.n&&!xh(this,this.n)&&(sh(this)?Q(this).za(null):this.h.za(null),this.h.Da())):this.wc=null;return this};
function Eh(a){var b=T;function c(a){var c=e-d[a].hb,h=g-d[a].O;Math.sqrt(c*c+h*h)<=b&&l.push(d[a]);return h<b}var d=a.Eb[th[a.type]],e=a.hb,g=a.O;a=0;for(var h=d.length-2,k=h;a<k;)d[k].O<g?a=k:h=k,k=Math.floor((a+h)/2);var h=a=k,l=[];if(d.length){for(;0<=a&&c(a);)a--;do h++;while(h<d.length&&c(h))}return l}
function Fh(a){a.nb||Ah(a.Eb[a.type],a);var b=[];if(1!=a.type&&3!=a.type)return b;if(a=Q(a)){var c;a.isCollapsed()?(c=[],a.J&&c.push(a.J),a.K&&c.push(a.K),a.C&&c.push(a.C)):c=Gh(a,!0);for(var d=0;d<c.length;d++)b.push.apply(b,Fh(c[d]));0==b.length&&(b[0]=a)}return b}function ch(){}ch.prototype=[];function Ah(a,b){if(b.nb)throw"Connection already in database.";for(var c=0,d=a.length;c<d;){var e=Math.floor((c+d)/2);if(a[e].O<b.O)c=e+1;else if(a[e].O>b.O)d=e;else{c=e;break}}a.splice(c,0,b);b.nb=!0}
function ph(a,b){if(!b.nb)throw"Connection not in database.";b.nb=!1;for(var c=0,d=a.length-2,e=d;c<e;)a[e].O<b.O?c=e:d=e,e=Math.floor((c+d)/2);for(d=c=e;0<=c&&a[c].O==b.O;){if(a[c]==b){a.splice(c,1);return}c--}do{if(a[d]==b){a.splice(d,1);return}d++}while(d<a.length&&a[d].O==b.O);throw"Unable to find connection in connectionDB.";};/*

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
var Zc={uk:0,ij:function(){var a=(++Zc.uk).toString();return eh?Hh(a):a},il:function(a){var b={D:function(){var b=this;this.Rb(a.ol);this.bc=a.bc;"string"==typeof a.Ba?this.rb(a.Ba):"function"==typeof a.Ba&&this.rb(function(){return a.Ba(b)});"undefined"!=a.Yj?Ih(this,a.Yj):(Jh(this,"undefined"==typeof a.$j?!0:a.$j),Kh(this,"undefined"==typeof a.Qj?!0:a.Qj));var d=[];d.push(a.text);a.Gi&&a.Gi.forEach(function(a){"undefined"==a.type||1==a.type?d.push([a.name,a.check,"undefined"==typeof a.align?1:a.align]):
Ja("addTemplate() can only handle value inputs.")});d.push(1);a.Ej&&this.Ol(a.Ej);Lh.prototype.vd.apply(this,d)}};b.Lh=a.Rl?function(){var b=a.Nj?a.Fl():document.createElement("mutation");b.setAttribute("is_statement",this.isStatement||!1);return b}:a.Nj;Zc[a.ml]=b}};/*

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
function Mh(a){Mh.j.constructor.call(this,a);this.zc()}w(Mh,lh);f=Mh.prototype;f.Aa="";f.B=160;f.fa=80;f.zc=function(){lh.prototype.zc.call(this);K("circle",{"class":"blocklyIconShield",r:8,cx:8,cy:8},this.xa);this.Nf=K("text",{"class":"blocklyIconMark",x:8,y:13},this.xa);this.Nf.appendChild(document.createTextNode("?"))};f.tc=function(){this.v()&&(this.H(!1),this.H(!0));lh.prototype.tc.call(this)};
f.bk=function(){var a=this.ha.$b(),b=2*Ag;this.hd.setAttribute("width",a.width-b);this.hd.setAttribute("height",a.height-b);this.Ga.style.width=a.width-b-4+"px";this.Ga.style.height=a.height-b-4+"px"};
f.H=function(a){if(a!=this.v())if((!this.Ca.Cc||N)&&!this.Ga||y)Nh.prototype.H.call(this,a);else{var b=this.mb(),c=this.$b();if(a){a=this.Ca.o;this.hd=K("foreignObject",{x:Ag,y:Ag},null);var d=document.createElementNS("http://www.w3.org/1999/xhtml","body");d.setAttribute("xmlns","http://www.w3.org/1999/xhtml");d.className="blocklyMinimalBody";this.Ga=document.createElementNS("http://www.w3.org/1999/xhtml","textarea");this.Ga.className="blocklyCommentTextarea";this.Ga.setAttribute("dir",J?"RTL":"LTR");
d.appendChild(this.Ga);this.hd.appendChild(d);L(this.Ga,"mouseup",this,this.sk);this.ha=new xg(a,this.hd,this.Ca.Bb,this.Jc,this.Kc,this.B,this.fa);L(this.ha.Va,"resize",this,this.bk);this.sc();this.Aa=null}else this.ha.k(),this.hd=this.Ga=this.ha=null;this.La(b);this.lc(c.width,c.height)}};f.sk=function(){Gg(this.ha);this.Ga.focus()};f.$b=function(){return this.v()?this.ha.$b():{width:this.B,height:this.fa}};f.lc=function(a,b){this.Ga?this.ha.lc(a,b):(this.B=a,this.fa=b)};
f.mb=function(){return this.Ga?this.Ga.value:this.Aa};f.La=function(a){this.Ga?this.Ga.value=a:this.Aa=a};f.k=function(){this.Ca.L=null;lh.prototype.k.call(this)};/*

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
var Oh=!1,Ph=0,Qh=0,Rh={x:0,y:0},Sh=null,Th=null,Uh=null,Vh=null,Wh=null,Xh=null;function Yh(){var a=K("g",{"class":"blocklyHidden"},null);Uh=a;Xh=K("rect",{"class":"blocklyTooltipShadow",x:2,y:2},a);Wh=K("rect",{"class":"blocklyTooltipBackground"},a);Vh=K("text",{"class":"blocklyTooltipText"},a);return a}function Zh(a){L(a,"mouseover",null,$h);L(a,"mouseout",null,ai);L(a,"mousemove",null,bi)}function $h(a){for(a=a.target;!p(a.Ba)&&!v(a.Ba);)a=a.Ba;Sh!=a&&(ci(),Th=null,Sh=a);clearTimeout(Ph)}
function ai(){Ph=setTimeout(function(){Th=Sh=null;ci()},1);clearTimeout(Qh)}function bi(a){Sh&&Sh.Ba&&0==Sc&&!Af&&(Oh?(a=$g(a),10<Math.sqrt(Math.pow(Rh.x-a.x,2)+Math.pow(Rh.y-a.y,2))&&ci()):Th!=Sh&&(clearTimeout(Qh),Rh=$g(a),Qh=setTimeout(di,1E3)))}function ci(){Oh&&(Oh=!1,Uh&&(Uh.style.display="none"));clearTimeout(Qh)}
function di(){Th=Sh;if(Uh){cc(Vh);var a=Sh.Ba;v(a)&&(a=a());var b=a,a=50;if(b.length<=a)a=b;else{for(var c=b.trim().split(/\s+/),d=0;d<c.length;d++)c[d].length>a&&(a=c[d].length);var e,d=-Infinity,g,h=1;do{e=d;g=b;for(var b=[],k=c.length/h,l=1,d=0;d<c.length-1;d++)l<(d+1.5)/k?(l++,b[d]=!0):b[d]=!1;for(var b=ei(c,b,a),d=fi(c,b,a),k=c,l=[],r=0;r<k.length;r++)l.push(k[r]),void 0!==b[r]&&l.push(b[r]?"\n":" ");b=l.join("");h++}while(d>e);a=g}a=a.split("\n");for(c=0;c<a.length;c++)K("tspan",{dy:"1em",x:5},
Vh).appendChild(document.createTextNode(a[c]));Oh=!0;Uh.style.display="block";a=Vh.getBBox();c=10+a.width;e=a.height;Wh.setAttribute("width",c);Wh.setAttribute("height",e);Xh.setAttribute("width",c);Xh.setAttribute("height",e);if(J)for(e=a.width,g=0;h=Vh.childNodes[g];g++)h.setAttribute("text-anchor","end"),h.setAttribute("x",e+5);e=Rh.x;e=J?e-(0+c):e+0;c=Rh.y+10;g=gi();c+a.height>g.height&&(c-=a.height+20);J?e=Math.max(5,e):e+a.width>g.width-10&&(e=g.width-a.width-10);Uh.setAttribute("transform",
"translate("+e+","+c+")")}}function fi(a,b,c){for(var d=[0],e=[],g=0;g<a.length;g++)d[d.length-1]+=a[g].length,!0===b[g]?(d.push(0),e.push(a[g].charAt(a[g].length-1))):!1===b[g]&&d[d.length-1]++;a=Math.max.apply(Math,d);for(g=b=0;g<d.length;g++)b-=2*Math.pow(Math.abs(c-d[g]),1.5),b-=Math.pow(a-d[g],1.5),-1!=".?!".indexOf(e[g])?b+=c/3:-1!=",;)]}".indexOf(e[g])&&(b+=c/4);1<d.length&&d[d.length-1]<=d[d.length-2]&&(b+=.5);return b}
function ei(a,b,c){for(var d=fi(a,b,c),e,g=0;g<b.length-1;g++)if(b[g]!=b[g+1]){var h=[].concat(b);h[g]=!h[g];h[g+1]=!h[g+1];var k=fi(a,h,c);k>d&&(d=k,e=h)}return e?ei(a,e,c):b};/*

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
function hi(a){this.h=null;this.Vc=new Nb(0,25);this.La(a)}w(hi,Nc);f=hi.prototype;f.clone=function(){return new hi(this.mb())};f.uc=!1;f.D=function(a){this.h||(this.h=a,this.ga=K("text",{"class":"blocklyText"},null),a.u().appendChild(this.ga),this.ga.Ba=this.h,Zh(this.ga),Oc(this))};f.k=function(){D(this.ga);this.ga=null};f.u=function(){return this.ga};f.rb=function(a){this.ga.Ba=a};/*

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
function ii(a,b,c,d){this.type=a;this.name=b;this.h=c;this.m=d;this.na=[];this.align=-1;this.R=!0}function ji(a,b,c){if(!b&&!c)return a;p(b)&&(b=new hi(b));a.h.t&&b.D(a.h);b.name=c;b.cg&&ji(a,b.cg);a.na.push(b);b.vg&&ji(a,b.vg);a.h.t&&(a.h.F(),a.h.Da());return a}f=ii.prototype;f.v=function(){return this.R};
f.H=function(a){var b=[];if(this.R==a)return b;for(var c=(this.R=a)?"block":"none",d=0,e;e=this.na[d];d++)e.H(a);if(this.m){if(a)b=Fh(this.m);else if(d=this.m,d.nb&&ph(d.Eb[d.type],d),d.n){e=Q(d).$a();for(var g=0;g<e.length;g++){for(var h=e[g],k=Gh(h,!0),l=0;l<k.length;l++){var r=k[l];r.nb&&ph(d.Eb[r.type],r)}h=ki(h);for(k=0;k<h.length;k++)h[k].H(!1)}}if(d=Q(this.m))d.u().style.display=c,a||(d.t=!1)}return b};f.Tc=function(a){if(!this.m)throw"This input does not have a connection.";this.m.Tc(a);return this};
function li(a,b){a.align=b;a.h.t&&a.h.F();return a}f.D=function(){for(var a=0;a<this.na.length;a++)this.na[a].D(this.h)};f.k=function(){for(var a=0,b;b=this.na[a];a++)b.k();this.m&&this.m.k();this.h=null};/*

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
function Nh(a){Nh.j.constructor.call(this,a);this.zc()}w(Nh,lh);f=Nh.prototype;f.Aa="";f.zc=function(){lh.prototype.zc.call(this);K("path",{"class":"blocklyIconShield",d:"M 2,15 Q -1,15 0.5,12 L 6.5,1.7 Q 8,-1 9.5,1.7 L 15.5,12 Q 17,15 14,15 z"},this.xa);this.Nf=K("text",{"class":"blocklyIconMark",x:8,y:13},this.xa);this.Nf.appendChild(document.createTextNode("!"))};
f.H=function(a){if(a!=this.v())if(a){var b=this.Aa;a=K("text",{"class":"blocklyText blocklyBubbleText",y:Ag},null);for(var b=b.split("\n"),c=0;c<b.length;c++)K("tspan",{dy:"1em",x:Ag},a).appendChild(document.createTextNode(b[c]));this.ha=new xg(this.Ca.o,a,this.Ca.Bb,this.Jc,this.Kc,null,null);if(J)for(var b=a.getBBox().width,c=0,d;d=a.childNodes[c];c++)d.setAttribute("text-anchor","end"),d.setAttribute("x",b+Ag);this.sc();a=this.ha.$b();this.ha.lc(a.width,a.height)}else this.ha.k(),this.ha=null};
f.La=function(a){this.Aa!=a&&(this.Aa=a,this.v()&&(this.H(!1),this.H(!0)))};f.k=function(){this.Ca.Md=null;lh.prototype.k.call(this)};/*

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
function Lh(){}function Xc(a,b){if(eh)return mi.create(Lh,a,b);var c=a.t?new ni:new Lh;c.initialize(a,b);return c}f=Lh.prototype;f.initialize=function(a,b){this.id=Zc.ij();a.ad(this);this.fill(a,b)};
f.fill=function(a,b){this.C=this.K=this.J=null;this.N=[];this.disabled=this.t=this.ud=!1;this.Ba="";this.contextMenu=!0;this.fc=null;this.ib=[];this.Cc=this.yb=this.Ac=!0;this.Wb=!1;this.L=null;this.ri=new Sb(0,0);this.o=a;this.Lb=a.Fh;if(b){this.type=b;var c=Zc[b],d;for(d in c)this[d]=c[d]}v(this.D)&&this.D()};function qg(a,b){return eh?oi.get(a):Lc(b,a)}
f.k=function(a,b,c){pi(this,a);this.o&&!c&&(this.o.Pe(this),this.o=null);S==this&&(S=null);for(a=this.ib.length-1;0<=a;a--)this.ib[a].k(!1);for(a=0;b=this.N[a];a++)b.k();this.N.length=0;b=Gh(this,!0);for(a=0;a<b.length;a++)c=b[a],c.n&&c.disconnect(),b[a].k();if(eh&&!qi)oi["delete"](this.id.toString())};function pi(a,b){var c;c=!1;if(a.J)a.J.n&&a.za(null);else{var d=null;a.C&&a.C.n&&(d=a.C.n,a.za(null));var e=lg(a);if(b&&e){var g=a.K.n;e.za(null);d&&xh(d,g)&&vg(d,g)}}c&&a.moveBy(T*(J?-1:1),2*T)}
function Gh(a,b){var c=[];if(b||a.t)if(a.J&&c.push(a.J),a.K&&c.push(a.K),a.C&&c.push(a.C),b||!a.Wb)for(var d=0,e;e=a.N[d];d++)e.m&&c.push(e.m);return c}f.Da=function(){if(0==Sc){var a=zh(this);if(!a.Lb)for(var b=Gh(this,!1),c=0;c<b.length;c++){var d=b[c];d.n&&sh(d)&&Q(d).Da();for(var e=Eh(d),g=0;g<e.length;g++){var h=e[g];d.n&&h.n||zh(h.h)!=a&&(sh(d)?vh(h,d):vh(d,h))}}}};f.getParent=function(){return this.fc};function lg(a){return a.K&&Q(a.K)}
function zh(a){var b=a;do a=b,b=a.fc;while(b);return a}f.Gb=function(){return this.ib};f.za=function(a){if(this.fc){for(var b=this.fc.ib,c,d=0;c=b[d];d++)if(c==this){b.splice(d,1);break}this.fc=null;this.C&&this.C.n&&this.C.disconnect();this.J&&this.J.n&&this.J.disconnect()}else Va(Kc(this.o,!1),this)&&this.o.Pe(this);(this.fc=a)?a.ib.push(this):this.o.ad(this)};f.$a=function(){for(var a=[this],b,c=0;b=this.ib[c];c++)a.push.apply(a,b.$a());return a};function sg(a,b){a.Ac=b;a.ki&&ri(a.ki)}
function tg(a,b){a.Cc=b;for(var c=0,d;d=a.N[c];c++)for(var e=0,g;g=d.na[e];e++)g.tc();d=ki(a);for(c=0;c<d.length;c++)d[c].tc()}f.rb=function(a){this.Ba=a};f.Rb=function(a){this.mf=a;this.t&&this.sc()};function Yc(a,b){for(var c=0,d;d=a.N[c];c++)for(var e=0,g;g=d.na[e];e++)if(g.name===b)return g;return null}function si(a){return(a=Yc(a,"DIR"))?a.Hc():null}function Jh(a,b){var c;a.C&&(a.C.k(),a.C=null);b&&(void 0===c&&(c=null),a.C=new oh(a,4),a.C.Tc(c));a.t&&(a.F(),a.Da())}
function Kh(a,b){var c;a.K&&(a.K.k(),a.K=null);b&&(void 0===c&&(c=null),a.K=new oh(a,3),a.K.Tc(c));a.t&&(a.F(),a.Da())}function Ih(a,b){a.J&&(a.J.k(),a.J=null);void 0===b&&(b=null);a.J=new oh(a,2);a.J.Tc(b);a.t&&(a.F(),a.Da())}function rg(a,b){a.ud=b;a.t&&(a.F(),a.Da(),a.o.lb())}f.Cd=function(a){this.disabled=a};function ti(a){for(;;){a:for(;;){do{var b=a;a=a.getParent();if(!a){a=null;break a}}while(lg(a)==b);break a}if(!a)return!1;if(a.disabled)return!0}}f.isCollapsed=function(){return this.Wb};
f.mc=function(a){this.Wb=a};f.toString=function(a){for(var b=[],c=0,d;d=this.N[c];c++){for(var e=0,g;g=d.na[e];e++)b.push(g.mb());d.m&&((d=Q(d.m))?b.push(d.toString()):b.push("?"))}b=ta(b.join(" "))||"???";a&&b.length>a&&(b=b.substring(0,a-3)+"...");return b};function ui(a,b){return vi(a,5,b||"")}
f.vd=function(a,b){function c(a){a instanceof Nc?ji(this,a):ji(this,a[1],a[0])}var d=arguments[arguments.length-1];--arguments.length;for(var e=a.split(this.vd.zi),g=[],h=0;h<e.length;h+=2){var k=ta(e[h]),l=void 0;k&&g.push(new hi(k));if((k=e[h+1])&&"%"==k.charAt(0)){var k=parseInt(k.substring(1),10),r=arguments[k];r[1]instanceof Nc?g.push([r[0],r[1]]):l=li(vi(this,1,r[0]).Tc(r[1]),r[2]);arguments[k]=null}else"\n"==k&&g.length&&(l=ui(this));l&&g.length&&(g.forEach(c,l),g=[])}g.length&&(l=li(ui(this),
d),g.forEach(c,l));for(h=1;h<arguments.length-1;h++);rg(this,!a.match(this.vd.ui))};f.vd.zi=/(%\d+|\n)/;f.vd.ui=/%1\s*$/;function vi(a,b,c){var d=null;if(1==b||3==b)d=new oh(a,b);b=new ii(b,c,a,d);a.N.push(b);a.t&&(a.F(),a.Da());return b}function ug(a,b){for(var c=0,d;d=a.N[c];c++)if(d.name==b)return d;return null}f.de=function(){return this.L||""};f.Bd=function(a){this.L=a};f.P=function(){return this.ri};f.moveBy=function(a,b){this.ri.translate(a,b)};/*

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
function wi(){var a=this;this.p=new bh(function(){return xi(a)},function(b){var c=xi(a);c&&(t(b.y)&&(a.p.scrollY=-c.Qa*b.y-c.Xa),a.p.$.setAttribute("transform","translate(0,"+(a.p.scrollY+c.Pa)+")"))});this.p.Fh=!0;this.rh=[];this.fa=this.B=0;this.jf=[];this.pb=[]}var yi,zi,Ai,Bi,Ci,Di;f=wi.prototype;f.Qd=!0;f.la=8;f.I=function(){this.g=K("g",{},null);this.Sa=K("path",{"class":"blocklyFlyoutBackground"},this.g);this.g.appendChild(this.p.I());return this.g};
f.k=function(){this.xb();M(this.rh);this.rh.length=0;this.kc&&(this.kc.k(),this.kc=null);this.p=null;this.g&&(D(this.g),this.g=null);this.Hd=this.Sa=null};function xi(a){if(!a.v())return null;var b=a.fa-2*a.la,c=a.B;try{var d=a.p.$.getBBox()}catch(e){d={height:0,y:0}}return{sa:b,ba:c,Qa:d.height+d.y,Sb:-a.p.scrollY,Xa:0,Pa:a.la,Oa:0}}
f.D=function(a){this.Hd=a;this.kc=new Ug(this.p,!1,!1);this.xb();L(window,"resize",this,this.Ob);this.Ob();L(this.g,"wheel",this,this.qi);L(this.g,"mousewheel",this,this.qi);L(this.Hd.$,"blocklyWorkspaceChange",this,this.zf);L(this.g,"mousedown",this,this.Ee)};
f.Ob=function(){if(this.v()){var a=this.Hd.Ib();if(a){var b=this.B-this.la;J&&(b*=-1);var c=["M "+(J?this.B:0)+",0"];c.push("h",b);c.push("a",this.la,this.la,0,0,J?0:1,J?-this.la:this.la,this.la);c.push("v",Math.max(0,a.sa-2*this.la));c.push("a",this.la,this.la,0,0,J?0:1,J?this.la:-this.la,this.la);c.push("h",-b);c.push("z");this.Sa.setAttribute("d",c.join(" "));b=a.Oa;J&&(b+=a.ba,b-=this.B);this.g.setAttribute("transform","translate("+b+","+a.Pa+")");this.fa=a.sa;this.kc&&this.kc.resize()}}};
f.qi=function(a){var b=a.deltaY||-a.wheelDeltaY;if(b){Db&&(b*=10);var c=xi(this),b=c.Sb+b,b=Math.min(b,c.Qa-c.sa),b=Math.max(b,0);this.kc.set(b);a.preventDefault()}};f.v=function(){return this.g&&"block"==this.g.style.display};f.xb=function(){if(this.v()){this.g.style.display="none";for(var a=0,b;b=this.pb[a];a++)M(b);this.pb.length=0;this.gg&&(M(this.gg),this.gg=null)}};
f.show=function(a){this.xb();for(var b=Kc(this.p,!1),c=0,d;d=b[c];c++)d.o==this.p&&d.k(!1,!1);for(var c=0,e;e=this.jf[c];c++)D(e);this.jf.length=0;var g=this.la;this.g.style.display="block";var b=[],h=[];if("VARIABLE"==a)Lf(b,h,g,this.p);else if("PROCEDURE"==a)Wc(b,h,g,this.p);else for(var k=0;d=a[k];k++)d.tagName&&"BLOCK"==d.tagName.toUpperCase()&&(d=pg(this.p,d),b.push(d),h.push(3*g));a=g;for(k=0;d=b[k];k++){c=d.$a();e=0;for(var l;l=c[e];e++)l.Lb=!0,l.Bd(null);d.F();l=d.u();e=Ei(d);c=J?0:g+8;d.moveBy(c,
a);a+=e.height+h[k];e=K("rect",{"fill-opacity":0},null);this.p.$.insertBefore(e,d.u());d.gd=e;this.jf[k]=e;this.Qd?this.pb.push(L(l,"mousedown",null,Fi(this,d))):this.pb.push(L(l,"mousedown",null,Gi(this,d)));this.pb.push(L(l,"mouseover",d,d.af));this.pb.push(L(l,"mouseout",d,d.Oe));this.pb.push(L(e,"mousedown",null,Fi(this,d)));this.pb.push(L(e,"mouseover",d,d.af));this.pb.push(L(e,"mouseout",d,d.Oe))}this.pb.push(L(this.Sa,"mouseover",this,function(){for(var a=Kc(this.p,!1),b=0,c;c=a[b];b++)c.Oe()}));
this.B=0;this.Uh();this.zf();Hi(window,"resize");this.gg=L(this.p.$,"blocklyWorkspaceChange",this,this.Uh);this.p.lb()};
f.Uh=function(){for(var a=0,b=this.la,c=Kc(this.p,!1),d=0,e;e=c[d];d++)var g=Ei(e),a=Math.max(a,g.width);a+=b+8+b/2+R;if(this.B!=a){for(d=0;e=c[d];d++){var g=Ei(e),h=e.P();if(J){var k=a-b-8-h.x;e.moveBy(k,0);h.x+=k}e.gd&&(e.gd.setAttribute("width",g.width),e.gd.setAttribute("height",g.height),e.gd.setAttribute("x",J?h.x-g.width:h.x),e.gd.setAttribute("y",h.y))}this.B=a;Lg(window,"resize")}};
function Gi(a,b){return function(c){Ii();Kg();Rc(c)?Ji(b,c):(ah(),Ig(Jg),yi=c,zi=b,Ai=a,Bi=L(document,"mouseup",this,Ii),Ci=L(document,"mousemove",this,a.Tj));c.stopPropagation()}}f.Ee=function(a){Rc(a)||(Kg(!0),Ki(),this.fi=a.clientY,Di=L(document,"mousemove",this,this.Zf),Bi=L(document,"mouseup",this,Ki),a.preventDefault(),a.stopPropagation())};f.Zf=function(a){var b=a.clientY-this.fi;this.fi=a.clientY;a=xi(this);b=a.Sb-b;b=Math.min(b,a.Qa-a.sa);b=Math.max(b,0);this.kc.set(b)};
f.Tj=function(a){"mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button?a.stopPropagation():(ah(),Math.sqrt(Math.pow(a.clientX-yi.clientX,2)+Math.pow(a.clientY-yi.clientY,2))>Li&&Fi(Ai,zi)(yi))};function Fi(a,b){return function(c){if(!Rc(c)&&!b.disabled){var d=kg(b),d=pg(a.Hd,d),e=b.u();if(!e)throw"originBlock is not rendered.";var e=Sg(e),g=d.u();if(!g)throw"block is not rendered.";g=Sg(g);d.moveBy(e.x-g.x,e.y-g.y);a.Qd?a.xb():a.zf();d.Ee(c)}}}
f.zf=function(){for(var a=Mc(this.Hd),b=Kc(this.p,!1),c=0,d;d=b[c];c++){var e=d.$a().length>a;d.Cd(e)}};function Ki(){Bi&&(M(Bi),Bi=null);Ci&&(M(Ci),Ci=null);Di&&(M(Di),Di=null);Bi&&(M(Bi),Bi=null);Ai=zi=yi=null}f.ld=function(){var a=Sg(this.g).x;J||(a-=1E7);return new ad(a,-1E7,1E7+this.B,this.fa+2E7)};function Mi(a){if("function"==typeof a.Hf)return a.Hf();if(p(a))return a.split("");if(ea(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b};function Oi(a){this.Ha=void 0;this.ma={};if(a){var b;if("function"==typeof a.Gf)b=a.Gf();else if("function"!=typeof a.Hf)if(ea(a)||p(a)){b=[];for(var c=a.length,d=0;d<c;d++)b.push(d)}else for(d in b=[],c=0,a)b[c++]=d;else b=void 0;a=Mi(a);for(c=0;c<b.length;c++)this.set(b[c],a[c])}}f=Oi.prototype;f.set=function(a,b){Pi(this,a,b,!1)};f.add=function(a,b){Pi(this,a,b,!0)};
function Pi(a,b,c,d){for(var e=0;e<b.length;e++){var g=b.charAt(e);a.ma[g]||(a.ma[g]=new Oi);a=a.ma[g]}if(d&&void 0!==a.Ha)throw Error('The collection already contains the key "'+b+'"');a.Ha=c}f.get=function(a){a:{for(var b=this,c=0;c<a.length;c++)if(b=b.ma[a.charAt(c)],!b){a=void 0;break a}a=b}return a?a.Ha:void 0};f.Hf=function(){var a=[];Qi(this,a);return a};function Qi(a,b){void 0!==a.Ha&&b.push(a.Ha);for(var c in a.ma)Qi(a.ma[c],b)}
f.Gf=function(a){var b=[];if(a){for(var c=this,d=0;d<a.length;d++){var e=a.charAt(d);if(!c.ma[e])return[];c=c.ma[e]}Ri(c,a,b)}else Ri(this,"",b);return b};function Ri(a,b,c){void 0!==a.Ha&&c.push(b);for(var d in a.ma)Ri(a.ma[d],b+d,c)}f.clear=function(){this.ma={};this.Ha=void 0};
f.remove=function(a){for(var b=this,c=[],d=0;d<a.length;d++){var e=a.charAt(d);if(!b.ma[e])throw Error('The collection does not have the key "'+a+'"');c.push([b,e]);b=b.ma[e]}a=b.Ha;for(delete b.Ha;0<c.length;)if(e=c.pop(),b=e[0],e=e[1],b.ma[e].Eh())delete b.ma[e];else break;return a};f.clone=function(){return new Oi(this)};f.Eh=function(){var a;if(a=void 0===this.Ha)a:{a=this.ma;for(var b in a){a=!1;break a}a=!0}return a};function Si(){this.ec=new Oi}f=Si.prototype;f.V="";f.Uf=null;f.ze=null;f.yd=0;f.Nc=0;function Ti(a,b){var c=!1,d=a.ec.Gf(b);d&&d.length&&(a.Nc=0,a.yd=0,c=a.ec.get(d[0]),c=Ui(a,c))&&(a.Uf=d);return c}function Ui(a,b){var c;b&&(a.Nc<b.length&&(c=b[a.Nc],a.ze=b),c&&(c.ig(),c.select()));return!!c}f.clear=function(){this.V=""};function Vi(a,b,c,d,e){this.reset(a,b,c,d,e)}Vi.prototype.sh=null;var Wi=0;Vi.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Wi++;d||na();this.xd=a;this.Mj=b;delete this.sh};Vi.prototype.ai=function(a){this.xd=a};function Xi(a){this.Ce=a;this.Bh=this.S=this.xd=this.qa=null}function Yi(a,b){this.name=a;this.value=b}Yi.prototype.toString=function(){return this.name};var Zi=new Yi("WARNING",900),$i=new Yi("INFO",800),aj=new Yi("CONFIG",700),bj=new Yi("FINE",500);f=Xi.prototype;f.getName=function(){return this.Ce};f.getParent=function(){return this.qa};f.Gb=function(){this.S||(this.S={});return this.S};f.ai=function(a){this.xd=a};
function cj(a){if(a.xd)return a.xd;if(a.qa)return cj(a.qa);Ja("Root logger has no level set.");return null}f.log=function(a,b,c){if(a.value>=cj(this).value)for(v(b)&&(b=b()),a=new Vi(a,String(b),this.Ce),c&&(a.sh=c),c="log:"+a.Mj,m.console&&(m.console.timeStamp?m.console.timeStamp(c):m.console.markTimeline&&m.console.markTimeline(c)),m.msWriteProfilerMark&&m.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Bh)for(var e=0,g=void 0;g=b.Bh[e];e++)g(d);c=c.getParent()}};
f.Md=function(a,b){this.log(Zi,a,b)};f.info=function(a,b){this.log($i,a,b)};var dj={},ej=null;function fj(a){ej||(ej=new Xi(""),dj[""]=ej,ej.ai(aj));var b;if(!(b=dj[a])){b=new Xi(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=fj(a.substr(0,c));c.Gb()[d]=b;b.qa=c;dj[a]=b}return b};function gj(a){$d.call(this);this.s=a;a=y?"focusout":"blur";this.Jj=Md(this.s,y?"focusin":"focus",this,!y);this.Kj=Md(this.s,a,this,!y)}w(gj,$d);gj.prototype.handleEvent=function(a){var b=new Gd(a.ta);b.type="focusin"==a.type||"focus"==a.type?"focusin":"focusout";this.dispatchEvent(b)};gj.prototype.W=function(){gj.j.W.call(this);Td(this.Jj);Td(this.Kj);delete this.s};function hj(a,b,c){Rf.call(this,a,b,c);this.fd=!0;$f(this,!0);this.Ja=this;this.Jd=new Si;if(y)try{document.execCommand("BackgroundImageCache",!1,!0)}catch(d){(a=this.Jh)&&a.Md("Failed to enable background image cache",void 0)}}w(hj,Rf);hj.prototype.pa=null;hj.prototype.Bf=null;var ij=hj.prototype,jj=fj("goog.ui.tree.TreeControl");ij.Jh=jj;f=hj.prototype;f.Df=!1;f.hj=null;f.Fd=!0;f.og=!0;f.qc=!0;f.pg=!0;f.ua=function(){return this};f.Ec=function(){return 0};f.ig=function(){};
f.qj=function(){this.Df=!0;oe(this.i(),"focused");this.Ja&&this.Ja.select()};f.mj=function(){this.Df=!1;qe(this.i(),"focused")};f.hasFocus=function(){return this.Df};f.Ea=function(){return!this.qc||hj.j.Ea.call(this)};f.Ab=function(a){this.qc?hj.j.Ab.call(this,a):this.fd=a};f.Ff=function(){return xb};f.fe=function(){var a=Yf(this);return a?a.firstChild:null};f.ee=function(){return null};f.Yc=function(){};f.md=function(){return hj.j.md.call(this)+(this.qc?"":" "+this.ia.dh)};
f.ae=function(){var a=this.Ea(),b=this.gj;if(a&&b)return b;b=this.yj;if(!a&&b)return b;b=this.ia;return a&&b.bh?b.Xb+" "+b.bh:!a&&b.Yg?b.Xb+" "+b.Yg:""};f.oc=function(a){if(this.Ja!=a){var b=!1;this.Ja&&(b=this.Ja==this.hj,$f(this.Ja,!1));if(this.Ja=a)$f(a,!0),b&&a.select();this.dispatchEvent("change")}};function kj(a){0!=a.Fd&&(a.Fd=!1,a.w&&lj(a))}
function lj(a){function b(a){var h=Vf(a);if(h){var k=!d||c==a.getParent()&&!e?a.ia.Wg:a.ia.Vg;h.className=k;if(h=a.ee())h.className=dg(a)}he(a,b)}var c=a,d=c.Fd,e=c.pg;b(a)}function mj(a){0!=a.og&&(a.og=!1,a.w&&lj(a))}function nj(a){if(0!=a.qc){a.qc=!1;if(a.w){var b=Yf(a);b&&(b.className=a.md())}a.Ja==a&&O(a,0)&&a.oc(O(a,0))}}f.re=function(){hj.j.re.call(this);var a=this.i();ve(a,"tree");we(a,"labelledby",Uf(this).id)};
f.ja=function(){hj.j.ja.call(this);var a=this.i();a.className=this.ia.gh;a.setAttribute("hideFocus","true");a=this.i();a.tabIndex=0;var b=this.pa=new Ie(a),c=this.Bf=new gj(a);fe(this).A(c,"focusout",this.mj).A(c,"focusin",this.qj).A(b,"key",this.bb).A(a,"mousedown",this.Jf).A(a,"click",this.Jf).A(a,"dblclick",this.Jf);this.re()};f.Ra=function(){hj.j.Ra.call(this);this.pa.k();this.pa=null;this.Bf.k();this.Bf=null};
f.Jf=function(a){var b=this.Jh;b&&b.log(bj,"Received event "+a.type,void 0);if(b=oj(this,a))switch(a.type){case "mousedown":b.Yf(a);break;case "click":a.preventDefault();break;case "dblclick":b.Mh(a)}};
f.bb=function(a){var b=!1,b=this.Jd,c=!1;switch(a.keyCode){case 40:case 38:if(a.ctrlKey){var c=40==a.keyCode?1:-1,d=b.Uf;if(d){var e=null,g=!1;if(b.ze){var h=b.Nc+c;0<=h&&h<b.ze.length?(b.Nc=h,e=b.ze):g=!0}e||(h=b.yd+c,0<=h&&h<d.length&&(b.yd=h),d.length>b.yd&&(e=b.ec.get(d[b.yd])),e&&e.length&&g&&(b.Nc=-1==c?e.length-1:0));Ui(b,e)&&(b.Uf=d)}c=!0}break;case 8:d=b.V.length-1;c=!0;0<d?(b.V=b.V.substring(0,d),Ti(b,b.V)):0==d?b.V="":c=!1;break;case 27:b.V="",c=!0}if(!(b=c)&&(b=this.Ja)){b=this.Ja;c=!0;
switch(a.keyCode){case 39:if(a.altKey)break;ke(b)&&(b.Ea()?O(b,0).select():b.Ab(!0));break;case 37:if(a.altKey)break;ke(b)&&b.Ea()&&b.wd?b.Ab(!1):(d=b.getParent(),e=b.ua(),d&&(e.qc||d!=e)&&d.select());break;case 40:a:if(ke(b)&&b.Ea())d=O(b,0);else{for(d=b;d!=b.ua();){e=d.cb;if(null!=e){d=e;break a}d=d.getParent()}d=null}d&&d.select();break;case 38:d=b.gc;null!=d?d=hg(d):(d=b.getParent(),e=b.ua(),d=!e.qc&&d==e||b==e?null:d);d&&d.select();break;default:c=!1}c&&(a.preventDefault(),(e=b.ua())&&e.Jd.clear());
b=c}b||(b=this.Jd,c=!1,a.ctrlKey||a.altKey||(d=String.fromCharCode(a.charCode||a.keyCode).toLowerCase(),(1==d.length&&" "<=d&&"~">=d||"\u0080"<=d&&"\ufffd">=d)&&(" "!=d||b.V)&&(b.V+=d,c=Ti(b,b.V))),b=c);b&&a.preventDefault();return b};function oj(a,b){for(var c=null,d=b.target;null!=d;){if(c=Tf[d.id])return c;if(d==a.i())break;d=d.parentNode}return null}f.createNode=function(a){return new ig(a||xb,this.ia,this.ab())};
function gg(a,b){var c=a.Jd,d=b.mb();if(d&&!/^[\s\xa0]*$/.test(null==d?"":String(d))){var d=d.toLowerCase(),e=c.ec.get(d);e?e.push(b):c.ec.set(d,[b])}}f.removeNode=function(a){var b=this.Jd,c=a.mb();if(c&&!/^[\s\xa0]*$/.test(null==c?"":String(c))){var c=c.toLowerCase(),d=b.ec.get(c);d&&(Wa(d,a),d.length&&b.ec.remove(c))}};/*

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
function pj(a,b){this.Ub=Zb("div","blocklyToolboxDiv");this.Ub.setAttribute("dir",J?"RTL":"LTR");b.appendChild(this.Ub);this.da=new wi;a.appendChild(this.da.I());L(this.Ub,"mousedown",this,function(a){Rc(a)||a.target==this.Ub?Kg(!1):Kg(!0)})}f=pj.prototype;f.width=0;f.Ye={Pf:19,gh:"blocklyTreeRoot",dh:"blocklyHidden",eh:"",rf:"blocklyTreeRow",fh:"blocklyTreeLabel",Xb:"blocklyTreeIcon",pf:"blocklyTreeIconOpen",qf:"blocklyTreeIconNone",hh:"blocklyTreeSelected"};
f.D=function(){this.Ye.cleardotPath=Pg+"1x1.gif";this.Ye.cssCollapsedFolderIcon="blocklyTreeIconClosed"+(J?"Rtl":"Ltr");var a=new qj(this,this.Ye);this.Id=a;nj(a);kj(a);mj(a);a.oc(null);this.Ub.style.display="block";this.da.D(C);rj(this);a.F(this.Ub);var b=this;Md(window,"resize",function(){b.Ob()});this.Ob()};
f.Ob=function(){var a=this.Ub,b=pd(uc),c=gi();J?(b=sj(0,0,!1),a.style.left=b.x+c.width-a.offsetWidth+"px"):a.style.marginLeft=b.left;a.style.height=c.height+1+"px";this.width=a.offsetWidth;J||--this.width};
function rj(a){function b(a,e){for(var g=0,h;h=a.childNodes[g];g++)if(h.tagName){var k=h.tagName.toUpperCase();if("CATEGORY"==k){k=c.createNode(h.getAttribute("name"));k.Vb=[];e.add(k);var l=h.getAttribute("custom");l?k.Vb=l:b(h,k)}else"HR"==k?e.add(new tj):"BLOCK"==k&&e.Vb.push(h)}}var c=a.Id;c.Wh();c.Vb=[];b(vc,a.Id);if(c.Vb.length)throw"Toolbox cannot have both blocks and categories in the root level.";Lg(window,"resize")}
f.ld=function(){return new ad(J?gi().width-this.width:-1E7,-1E7,1E7+this.width,2E7)};function qj(a,b){this.ra=a;hj.call(this,xb,b)}w(qj,hj);qj.prototype.ja=function(){qj.j.ja.call(this);if(Ad){var a=this.i();L(a,"touchstart",this,this.vj)}};qj.prototype.vj=function(a){a.preventDefault();var b=oj(this,a);b&&"touchstart"===a.type&&setTimeout(function(){b.Yf(a)},1)};qj.prototype.createNode=function(a){return new uj(this.ra,a?pb(a):xb,this.ia,this.ab())};
qj.prototype.oc=function(a){this.Ja!=a&&(hj.prototype.oc.call(this,a),a&&a.Vb&&a.Vb.length?this.ra.da.show(a.Vb):this.ra.da.xb())};function uj(a,b,c,d){Rf.call(this,b,c,d);a&&(b=function(){Lg(window,"resize")},Md(a.Id,"expand",b),Md(a.Id,"collapse",b))}w(uj,ig);Rf.prototype.Ff=function(){return vb("span")};uj.prototype.Yf=function(){ke(this)&&this.wd?(this.toggle(),this.select()):this.te()?this.ua().oc(null):this.select();ag(this)};uj.prototype.Mh=function(){};
function tj(){uj.call(this,null,"",vj)}w(tj,uj);var vj={rf:"blocklyTreeSeparator"};/*

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
var wj={Vd:null,show:function(a,b){zf(wj);if(b.length){for(var c=new tf,d=0,e;e=b[d];d++){var g=new $e(e.text);c.Od(g,!0);g.Dd(e.enabled);e.enabled&&Md(g,"action",function(a){return function(){a()}}(e.Wa))}Md(c,"action",wj.xb);e=Yb();g=dd();c.F(Df);var h=c.i();Pc(h,"blocklyContextMenu");var k=hd(h),d=a.clientX+g.x,l=a.clientY+g.y;a.clientY+k.height>=e.height&&(l-=k.height);J?k.width>=a.clientX&&(d+=k.width):a.clientX+k.width>=e.width&&(d-=k.width);Ef(d,l,e,g);uf(c);setTimeout(function(){h.focus()},
1);wj.Vd=null}else wj.xb()},xb:function(){Af==wj&&Bf();wj.Vd=null},nl:function(a,b){return function(){var c=pg(a.o,b),d=a.P();d.x=J?d.x-T:d.x+T;d.y+=2*T;c.moveBy(d.x,d.y);c.select()}}};/*

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
function ni(){this.g=K("g",{},null);this.ji=K("path",{"class":"blocklyPathDark",transform:"translate(1, 1)"},this.g);this.Bb=K("path",{"class":"blocklyPath"},this.g);this.wg=K("path",{"class":"blocklyPathLight"},this.g);this.Bb.Ba=this;Zh(this.Bb);ri(this)}w(ni,Lh);f=ni.prototype;f.height=0;f.width=0;
f.ob=function(){for(var a=0,b;b=this.N[a];a++)b.D();this.Be&&this.Be.pl();this.sc();N||L(this.u(),"mousedown",this,this.Ee);this.o.$.appendChild(this.u());v(this.onchange)&&L(this.o.$,"blocklyWorkspaceChange",this,this.onchange)};f.select=function(){S&&ih();S=this;this.af();Lg(this.o.$,"blocklySelectChange")};function ih(){var a=S;S=null;a.Oe();Lg(a.o.$,"blocklySelectChange")}f.Be=null;f.L=null;f.Md=null;function ki(a){var b=[];a.Be&&b.push(a.Be);a.L&&b.push(a.L);a.Md&&b.push(a.Md);return b}
var xj=null,yj=null;f=ni.prototype;f.za=function(a){var b=this.u();if(this.fc&&b){var c=this.P();this.o.$.appendChild(b);b.setAttribute("transform","translate("+c.x+", "+c.y+")")}ni.j.za.call(this,a);a&&(c=this.P(),a.u().appendChild(b),a=this.P(),Ch(this,a.x-c.x,a.y-c.y))};f.P=function(){var a=0,b=0,c=this.u();if(c){do var d=nh(c),a=a+d.x,b=b+d.y,c=c.parentNode;while(c&&c!=this.o.$)}return new Sb(a,b)};
f.moveBy=function(a,b){var c=this.P();this.u().setAttribute("transform","translate("+(c.x+a)+", "+(c.y+b)+")");Ch(this,a,b);zj(this)};function Ei(a){var b=a.height,c=a.width;if(a=lg(a))a=Ei(a),b+=a.height-4,c=Math.max(c,a.width);return{height:b,width:c}}
f.mc=function(a){if(this.Wb!=a){ni.j.mc.call(this,a);for(var b=[],c=0,d;d=this.N[c];c++)b.push.apply(b,d.H(!a));if(a){a=ki(this);for(c=0;c<a.length;c++)a[c].H(!1);c=this.toString(Aj);ji(ui(this,"_TEMP_COLLAPSED_INPUT"),c).D()}else a:{for(c=0;a=this.N[c];c++)if("_TEMP_COLLAPSED_INPUT"==a.name){a.m&&a.m.n&&Q(a.m).za(null);a.k();this.N.splice(c,1);this.t&&(this.F(),this.Da());break a}Ja('Input "%s" not found.',"_TEMP_COLLAPSED_INPUT")}b.length||(b[0]=this);if(this.t){for(c=0;a=b[c];c++)a.F();this.Da()}}};
f.Ee=function(a){if(!this.Lb){Bj();Ii();this.select();Kg();if(Rc(a))Ji(this,a);else if(this.yb&&!N){ah();Ig(Jg);var b=this.P();this.gi=b.x;this.hi=b.y;this.sg=a.clientX;this.tg=a.clientY;Sc=1;xj=L(document,"mouseup",this,this.$f);yj=L(document,"mousemove",this,this.Zf);this.Zd=[];for(var b=this.$a(),c=0,d;d=b[c];c++){d=ki(d);for(var e=0;e<d.length;e++){var g;g=d[e];g={x:g.Jc,y:g.Kc};g.Ki=d[e];this.Zd.push(g)}}}else return;a.stopPropagation()}};
f.$f=function(a){var b=this;Cj(function(){Ii();if(S&&qh){vg(rh,qh);if(b.t){var c=(sh(rh)?qh:rh).h;Dj("click");var d=Sg(c.g);c.J?(d.x+=J?3:-3,d.y+=13):c.C&&(d.x+=J?-23:23,d.y+=3);c=K("circle",{cx:d.x,cy:d.y,r:0,fill:"none",stroke:"#888","stroke-width":10},uc);c.rg=new Date;Ej(c)}b.o.Ma&&b.o.Ma.close()}else jh(b.o,a)&&((c=b.o.Ma)&&Qf(c.close,100,c),S.k(!1,!0),Lg(window,"resize"));qh&&(D(oh.ne),delete oh.ne,qh=null);Ig(Fj.OPEN)})};
function Ji(a,b){if(!N&&a.contextMenu){var c=[];if(a.Ac&&!N&&a.yb&&!N&&!a.Lb){var d={text:Gj,enabled:!0,Wa:function(){var b=kg(a);wg(b);var b=pg(a.o,b),c=a.P();c.x=J?c.x-T:c.x+T;c.y+=2*T;b.moveBy(c.x,c.y);b.select()}};a.$a().length>Mc(a.o)&&(d.enabled=!1);c.push(d);a.Cc&&!N&&!a.Wb&&wc&&(d={enabled:!0},a.L?(d.text=Hj,d.Wa=function(){a.Bd(null)}):(d.text=Ij,d.Wa=function(){a.Bd("")}),c.push(d));if(!a.Wb)for(d=0;d<a.N.length;d++)if(1==a.N[d].type){d={enabled:!0};d.text=a.ud?Jj:Kj;d.Wa=function(){rg(a,
!a.ud)};c.push(d);break}xc&&(a.Wb?(d={enabled:!0},d.text=Lj,d.Wa=function(){a.mc(!1)}):(d={enabled:!0},d.text=Mj,d.Wa=function(){a.mc(!0)}),c.push(d));yc&&(d={text:a.disabled?Nj:Oj,enabled:!ti(a),Wa:function(){a.Cd(!a.disabled)}},c.push(d));var d=a.$a().length,e=lg(a);e&&(d-=e.$a().length);d={text:1==d?Pj:Qj.replace("%1",String(d)),enabled:!0,Wa:function(){a.k(!0,!0)}};c.push(d)}d={enabled:!(v(a.bc)?!a.bc():!a.bc)};d.text=Rj;d.Wa=function(){var b=v(a.bc)?a.bc():a.bc;b&&window.open(b)};c.push(d);a.Yi&&
!a.Lb&&a.Yi(c);wj.show(b,c);wj.Vd=a}}function Ch(a,b,c){if(a.t){for(var d=Gh(a,!1),e=0;e<d.length;e++)d[e].moveBy(b,c);d=ki(a);for(e=0;e<d.length;e++)mh(d[e]);for(e=0;e<a.ib.length;e++)Ch(a.ib[e],b,c)}}function Sj(a,b){b?Pc(a.g,"blocklyDragging"):Qc(a.g,"blocklyDragging");for(var c=0;c<a.ib.length;c++)Sj(a.ib[c],b)}
f.Zf=function(a){var b=this;Cj(function(){if(!("mousemove"==a.type&&1>=a.clientX&&0==a.clientY&&0==a.button)){ah();var c=a.clientX-b.sg,d=a.clientY-b.tg;if(1==Sc&&Math.sqrt(Math.pow(c,2)+Math.pow(d,2))>Li){Sc=2;b.za(null);Sj(b,!0);var e=b.o;e.kh=e.Ma?e.Ma.ld():null;e.jh=e.da?e.da.ld():e.ra?e.ra.ld():null}if(2==Sc){b.u().setAttribute("transform","translate("+(b.gi+c)+", "+(b.hi+d)+")");for(e=0;e<b.Zd.length;e++){var g=b.Zd[e],h=g.Ki,k=g.x+c,g=g.y+d;h.Jc=k;h.Kc=g;h.v()&&zg(h.ha,k,g)}for(var h=Gh(b,
!1),g=k=null,l=T,e=0;e<h.length;e++){var r=h[e],q=Dh(r,l,c,d);q.m&&(k=q.m,g=r,l=q.Th)}qh&&qh!=k&&(D(oh.ne),delete oh.ne,rh=qh=null);k&&k!=qh&&(k.me(),qh=k,rh=g);b.Ac&&!N&&jh(b.o,a)}}a.stopPropagation()})};function ri(a){a.yb&&!N?Pc(a.g,"blocklyDraggable"):Qc(a.g,"blocklyDraggable")}f.u=function(){return this.g};var Tj=1*(1-Math.SQRT1_2)+1,Uj=3*(1-Math.SQRT1_2)-1,Vj="m "+Tj+","+Tj,Wj="a 3,3 0 0,0 "+(-Uj-1)+","+(2-Uj),Xj="a 3,3 0 0,0 "+(2-Uj)+","+(Uj+1);f=ni.prototype;
f.k=function(a,b){Ii();wj.Vd==this&&wj.xb();pi(this,a);if(b&&this.t){Dj("delete");var c=Sg(this.g),d=this.g.cloneNode(!0);d.ni=c.x;d.oi=c.y;d.setAttribute("transform","translate("+d.ni+","+d.oi+")");uc.appendChild(d);d.Og=d.getBBox();d.rg=new Date;Yj(d)}this.t=!1;c=ki(this);for(d=0;d<c.length;d++)c[d].k();ni.j.k.call(this,a);D(this.g);this.ji=this.wg=this.Bb=this.g=null};
function Yj(a){var b=(new Date-a.rg)/150;1<b?D(a):(a.setAttribute("transform","translate("+(a.ni+(J?-1:1)*a.Og.width/2*b+", "+(a.oi+a.Og.height*b))+") scale("+(1-b)+")"),setTimeout(function(){Yj(a)},10))}function Ej(a){var b=(new Date-a.rg)/150;1<b?D(a):(a.setAttribute("r",25*b),a.style.opacity=1-b,setTimeout(function(){Ej(a)},10))}
f.sc=function(){if(!this.disabled){var a=If(Jf(this.mf)),b;b=a;if(!Of.test(b))throw Error("'"+b+"' is not a valid hex color");4==b.length&&(b=b.replace(Mf,"#$1$1$2$2$3$3"));b=b.toLowerCase();b=[parseInt(b.substr(1,2),16),parseInt(b.substr(3,2),16),parseInt(b.substr(5,2),16)];Pf([255,255,255],b,.3);Pf([0,0,0],b,.4);this.Bb.setAttribute("fill",a);b=ki(this);for(a=0;a<b.length;a++)b[a].sc();for(a=0;b=this.N[a];a++)for(var c=0,d;d=b.na[c];c++)d.La(null);this.t&&this.F()}};
function yh(a){a.disabled||ti(a)?(Pc(a.g,"blocklyDisabled"),a.Bb.setAttribute("fill","url(#blocklyDisabledPattern)")):(Qc(a.g,"blocklyDisabled"),a.sc());a=a.Gb();for(var b=0,c;c=a[b];b++)yh(c)}f.de=function(){return this.L?this.L.mb().replace(/\s+$/,"").replace(/ +\n/g,"\n"):""};f.Bd=function(a){var b=!1;p(a)?(this.L||(this.L=new Mh(this),b=!0),this.L.La(a)):this.L&&(this.L.k(),b=!0);b&&this.t&&(this.F(),this.Da())};f.Cd=function(a){this.disabled!=a&&(ni.j.Cd.call(this,a),yh(this),this.o.lb())};
f.af=function(){Pc(this.g,"blocklySelected");this.g.parentNode.appendChild(this.g)};f.Oe=function(){Qc(this.g,"blocklySelected")};
f.F=function(){this.t=!0;var a=10;J&&(a=-a);for(var b=ki(this),c=0;c<b.length;c++){var d=b[c];d.Ca.isCollapsed()?d.xa.setAttribute("display","none"):(d.xa.setAttribute("display","block"),J&&(a-=16),d.xa.setAttribute("transform","translate("+a+", 5)"),mh(d),a=J?a-10:a+26)}var e=a+=J?10:-10,g=this.N,b=[];b.T=e+20;if(this.C||this.K)b.T=Math.max(b.T,40);for(var d=c=0,h=!1,k=!1,l=!1,r=void 0,q=this.ud&&!this.isCollapsed(),x=0,u;u=g[x];x++)if(u.v()){var z;q&&r&&3!=r&&3!=u.type?z=b[b.length-1]:(r=u.type,
z=[],z.type=q&&3!=u.type?-1:u.type,z.height=0,b.push(z));z.push(u);u.jc=25;u.ka=q&&1==u.type?20.5:0;if(u.m&&u.m.n){var Ha=Ei(Q(u.m));u.jc=Math.max(u.jc,Ha.height);u.ka=Math.max(u.ka,Ha.width)}x==g.length-1&&u.jc--;z.height=Math.max(z.height,u.jc);u.Ya=0;1==b.length&&(u.Ya+=J?-e:e);for(var Ha=!1,eg=0,qb;qb=u.na[eg];eg++){0!=eg&&(u.Ya+=10);var Ni=qb.xh();qb.ka=Ni.width;qb.Qe=Ha&&qb.uc?10:0;u.Ya+=qb.ka+qb.Qe;z.height=Math.max(z.height,Ni.height);Ha=qb.uc}-1!=z.type&&(3==z.type?(k=!0,d=Math.max(d,u.Ya)):
(1==z.type?h=!0:5==z.type&&(l=!0),c=Math.max(c,u.Ya)))}for(e=0;z=b[e];e++)if(z.li=!1,-1==z.type)for(g=0;u=z[g];g++)if(1==u.type){z.height+=20;z.li=!0;break}b.Ue=20+d;k&&(b.T=Math.max(b.T,b.Ue+30));h?b.T=Math.max(b.T,c+20+8):l&&(b.T=Math.max(b.T,c+20));b.xj=h;b.Bl=k;b.Al=l;d=a;this.J?this.qg=this.Te=!0:(this.qg=this.Te=!1,this.C&&(a=Q(this.C))&&lg(a)==this&&(this.Te=!0),lg(this)&&(this.qg=!0));h=this.P();k=[];l=[];a=[];c=[];u=b.T;this.Te?(k.push("m 0,0"),a.push("m 1,1")):(k.push("m 0,2"),a.push(J?
Vj:"m 1,1"),k.push("A 2,2 0 0,1 2,0"),a.push("A 1,1 0 0,1 2,1"));this.C&&(k.push("H",15),a.push("H",15),k.push("l 6,4 3,0 6,-4"),a.push("l 6.5,4 2,0 6.5,-4"),this.C.moveTo(h.x+(J?-30:30),h.y));k.push("H",u);a.push("H",u+(J?-1:0));this.width=u;for(z=u=0;e=b[z];z++){q=10;0==z&&(q+=J?-d:d);a.push("M",b.T-1+","+(u+1));if(this.isCollapsed())g=e[0],x=u+18,Zj(g.na,q,x),k.push("l 8,0 0,4 8,4 -16,8 8,4"),J?a.push("l 8,0 0,3.8 7,3.2 m -14.5,9 l 8,4"):a.push("h 8"),g=e.height-20,k.push("v",g),J&&a.push("v",
g-2),this.width+=15;else if(-1==e.type){for(r=0;g=e[r];r++)x=u+18,e.li&&(x+=10),q=Zj(g.na,q,x),5!=g.type&&(q+=g.ka+10),1==g.type&&(l.push("M",q-10+","+(u+10)),l.push("h",6-g.ka),l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),l.push("v",g.jc+1-20),l.push("h",g.ka+2-8),l.push("z"),J?(c.push("M",q-10-3+8-g.ka+","+(u+10+1)),c.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),c.push("v",g.jc-20+3),c.push("h",g.ka-8+1)):(c.push("M",q-10+1+","+(u+10+1)),c.push("v",g.jc+1),c.push("h",6-g.ka),
c.push("M",q-g.ka-10+1.8+","+(u+10+20-.4)),c.push("l","3.04,-1.8")),x=J?h.x-q-8+10+g.ka+1:h.x+q+8-10-g.ka-1,Ha=h.y+u+10+1,g.m.moveTo(x,Ha),g.m.n&&Bh(g.m));q=Math.max(q,b.T);this.width=Math.max(this.width,q);k.push("H",q);a.push("H",q+(J?-1:0));k.push("v",e.height);J&&a.push("v",e.height-2)}else 1==e.type?(g=e[0],x=u+18,-1!=g.align&&(r=b.T-g.Ya-8-20,1==g.align?q+=r:0==g.align&&(q+=(r+q)/2)),Zj(g.na,q,x),k.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"),r=e.height-20,k.push("v",r),J?(a.push("v 6.5 m -7.84,2.5 q -0.4,10 2.16,10 m 5.68,-2.5 v 1.5"),
a.push("v",r)):(a.push("M",b.T-4.2+","+(u+20-.4)),a.push("l","3.04,-1.8")),x=h.x+(J?-b.T-1:b.T+1),Ha=h.y+u,g.m.moveTo(x,Ha),g.m.n&&(Bh(g.m),this.width=Math.max(this.width,b.T+Ei(Q(g.m)).width-8+1))):5==e.type?(g=e[0],x=u+18,-1!=g.align&&(r=b.T-g.Ya-20,b.xj&&(r-=8),1==g.align?q+=r:0==g.align&&(q+=(r+q)/2)),Zj(g.na,q,x),k.push("v",e.height),J&&a.push("v",e.height-2)):3==e.type&&(g=e[0],0==z&&(k.push("v",10),J&&a.push("v",9),u+=10),x=u+18,-1!=g.align&&(r=b.Ue-g.Ya-20,1==g.align?q+=r:0==g.align&&(q+=
(r+q)/2)),Zj(g.na,q,x),q=b.Ue+30,k.push("H",q),k.push("l -6,4 -3,0 -6,-4 h -13 a 2,2 0 0,0 -2,2"),k.push("v",e.height-4),k.push("a 2,2 0 0,0 2,2"),k.push("H",b.T),J?(a.push("M",q-30+Uj+","+(u+Uj)),a.push(Wj),a.push("v",e.height-4),a.push("a 3,3 0 0,0 3,3"),a.push("H",b.T-1)):(a.push("M",q-30+Uj+","+(u+e.height-Uj)),a.push(Xj),a.push("H",b.T)),x=h.x+(J?-q:q),Ha=h.y+u+1,g.m.moveTo(x,Ha),g.m.n&&(Bh(g.m),this.width=Math.max(this.width,b.Ue+Ei(Q(g.m)).width)),z==b.length-1||3==b[z+1].type)&&(k.push("v",
10),J&&a.push("v",9),u+=10);u+=e.height}b.length||(u=25,k.push("V",u),J&&a.push("V",u-1));b=u;this.height=b+1;this.K&&(k.push("H","30 l -6,4 -3,0 -6,-4"),this.K.moveTo(J?h.x-30:h.x+30,h.y+b+1),this.K.n&&Bh(this.K),this.height+=4);this.qg?(k.push("H 0"),J||a.push("M","1,"+b)):(k.push("H",2),k.push("a","2,2 0 0,1 -2,-2"),J||(a.push("M",Tj+","+(b-Tj)),a.push("A","1,1 0 0,1 1,"+(b-2))));this.J?(this.J.moveTo(h.x,h.y),k.push("V",20),k.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"),J?(a.push("M","-2.4,8.9"),
a.push("l","-3.6,-2.1")):(a.push("V",19),a.push("m","-7.36,-1 q -1.52,-5.5 0,-11"),a.push("m","7.36,1 V 1 H 2")),this.width+=8):J||(this.Te?a.push("V",1):a.push("V",2));k.push("z");b=k.join(" ")+"\n"+l.join(" ");this.Bb.setAttribute("d",b);b=a.join(" ")+"\n"+c.join(" ");this.wg.setAttribute("d",b);J&&(this.Bb.setAttribute("transform","scale(-1 1)"),this.wg.setAttribute("transform","scale(-1 1)"),this.ji.setAttribute("transform","translate(1,1) scale(-1 1)"));(b=this.getParent())?b.F():Lg(window,"resize");
zj(this)};function Zj(a,b,c){J&&(b=-b);for(var d=0,e;e=a[d];d++)J?(b-=e.Qe+e.ka,e.u().setAttribute("transform","translate("+b+", "+c+")"),e.ka&&(b-=10)):(e.u().setAttribute("transform","translate("+(b+e.Qe)+", "+c+")"),e.ka&&(b+=e.Qe+e.ka+10));return J?-b:b};/*

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
function Pc(a,b){var c=a.getAttribute("class")||"";-1==(" "+c+" ").indexOf(" "+b+" ")&&(c&&(c+=" "),a.setAttribute("class",c+b))}function Qc(a,b){var c=a.getAttribute("class");if(-1!=(" "+c+" ").indexOf(" "+b+" ")){for(var c=c.split(/\s+/),d=0;d<c.length;d++)c[d]&&c[d]!=b||(c.splice(d,1),d--);c.length?a.setAttribute("class",c.join(" ")):a.removeAttribute("class")}}
function L(a,b,c,d){function e(a){d.apply(c,arguments)}a.addEventListener(b,e,!1);var g=[[a,b,e]];if(b in ak)for(var e=function(a){if(1==a.changedTouches.length){var b=a.changedTouches[0];a.clientX=b.clientX;a.clientY=b.clientY}d.apply(c,arguments);a.preventDefault()},h=0,k;k=ak[b][h];h++)a.addEventListener(k,e,!1),g.push([a,k,e]);return g}var ak={};aa("document.documentElement.ontouchstart")&&(ak={mousedown:["touchstart"],mousemove:["touchmove"],mouseup:["touchend","touchcancel"]});
function M(a){for(;a.length;){var b=a.pop();b[0].removeEventListener(b[1],b[2],!1)}}function Hi(a,b){var c=document;if(c.createEvent)c=c.createEvent("UIEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c);else if(c.createEventObject)c=c.createEventObject(),a.fireEvent("on"+b,c);else throw"FireEvent: No event creation mechanism.";}function Lg(a,b){setTimeout(function(){Hi(a,b)},0)}
function nh(a){var b={x:0,y:0},c=a.getAttribute("x");c&&(b.x=parseInt(c,10));if(c=a.getAttribute("y"))b.y=parseInt(c,10);if(a=(a=a.getAttribute("transform"))&&a.match(/translate\(\s*([-\d.]+)([ ,]\s*([-\d.]+)\s*\))?/))b.x+=parseInt(a[1],10),a[3]&&(b.y+=parseInt(a[3],10));return b}function Sg(a){var b=0,c=0;do{var d=nh(a),b=b+d.x,c=c+d.y;a=a.parentNode}while(a&&a!=uc);return{x:b,y:c}}function Cf(a){a=Sg(a);return sj(a.x,a.y,!1)}
function K(a,b,c){a=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)a.setAttribute(d,b[d]);document.body.runtimeStyle&&(a.runtimeStyle=a.currentStyle=a.style);c&&c.appendChild(a);return a}function Rc(a){return 2==a.button||a.ctrlKey}
function sj(a,b,c){c&&(a-=window.scrollX||window.pageXOffset,b-=window.scrollY||window.pageYOffset);var d=uc.createSVGPoint();d.x=a;d.y=b;a=uc.getScreenCTM();c&&(a=a.inverse());d=d.matrixTransform(a);c||(d.x+=window.scrollX||window.pageXOffset,d.y+=window.scrollY||window.pageYOffset);return d}function $g(a){return sj(a.clientX+(window.scrollX||window.pageXOffset),a.clientY+(window.scrollY||window.pageYOffset),!0)}
function Ff(a){if(!a.length)return 0;for(var b=a[0].length,c=1;c<a.length;c++)b=Math.min(b,a[c].length);return b}function Gf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Ff(a),e=0;e<d;e++){for(var g=a[0][e],h=1;h<a.length;h++)if(g!=a[h][e])return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h][e])&&" "!=g)return c;return d}
function Hf(a,b){if(!a.length)return 0;if(1==a.length)return a[0].length;for(var c=0,d=b||Ff(a),e=0;e<d;e++){for(var g=a[0].substr(-e-1,1),h=1;h<a.length;h++)if(g!=a[h].substr(-e-1,1))return c;" "==g&&(c=e+1)}for(h=1;h<a.length;h++)if((g=a[h].charAt(a[h].length-e-1))&&" "!=g)return c;return d};/*

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
function bk(a){this.Ce=a;this.$e=""}bk.prototype.Gg=null;bk.prototype.Ig=null;function ck(a,b){return b+a.replace(/\n(.)/g,"\n"+b+"$1")}function dk(a,b){if(!b)return"";if(b.disabled)return dk(a,lg(b));var c=a[b.type];if(!c)throw'Language "'+a.Ce+'" does not know how to generate code for block type "'+b.type+'".';c=c.call(b,b);if(n(c))return[a.$h(b,c[0]),c[1]];if(p(c))return a.Ig&&(c=a.Ig.replace(/%1/g,"'"+b.id+"'")+c),a.$h(b,c);if(null===c)return"";throw"Invalid code generated: "+c;}
function ek(a,b){var c=U,d;d=(d=ug(a,b))&&d.m&&Q(d.m);var e=dk(c,d);if(!p(e))throw'Expecting code from statement block "'+d.type+'".';e&&(e=ck(e,c.ti));return e}bk.prototype.ti="  ";function fk(a){var b=U;b.$e+=a+","};/*

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
var Jg="handclosed",kh="handdelete",Fj={},gk="",hk=null,ik="";function jk(){var a=kk.join("\n");ik=Pg.replace(/[\\\/]$/,"");var a=a.replace(/<<<PATH>>>/g,ik),b=document,c=b.createElement("style");c.type="text/css";b.getElementsByTagName("head")[0].appendChild(c);c.styleSheet?c.styleSheet.cssText=a:c.appendChild(b.createTextNode(a));hk=c.sheet;Ig("hando")}
function Ig(a){if(!N&&gk!=a){gk=a;var b="url("+ik+"/"+a+".cur) "+("hando"==a?"8 5":"7 3")+", auto",c=".blocklyDraggable {\n  cursor: "+b+";\n}\n",d=hk||"".parentStyleSheet||"".style&&"".style["-closure-parent-stylesheet"];if(d){d.deleteRule?d.deleteRule(0):d.removeRule(0);var e=0;if(0>e||void 0==e){e=null;try{e=d.cssRules||d.rules}catch(g){if(15==g.code)throw g.styleSheet=d,g;}e=e.length}if(d.insertRule)d.insertRule(c,e);else if(c=/^([^\{]+)\{([^\{]+)\}/.exec(c),3==c.length)d.addRule(c[1],c[2],e);
else throw Error("Your CSSRule appears to be ill-formatted.");}else throw Error("Cannot proceed without the parentStyleSheet.");d=document.getElementsByClassName("blocklyToolboxDiv");for(c=0;e=d[c];c++)e.style.cursor="hando"==a?"":b;uc&&(uc.style.cursor="hando"==a?"":b)}}
var kk=[".blocklyDraggable {","}",".blocklySvg {","  background-color: #fff;","  overflow: hidden;","}",".blocklyWidgetDiv {","  position: absolute;","  display: none;","  z-index: 999;","}",".blocklyResizeSE {","  fill: #aaa;","  cursor: se-resize;","}",".blocklyResizeSW {","  fill: #aaa;","  cursor: sw-resize;","}",".blocklyResizeLine {","  stroke-width: 1;","  stroke: #888;","}",".blocklyHighlightedConnectionPath {","  stroke-width: 4px;","  stroke: #fc3;","  fill: none;","}",".blocklyPathLight {",
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
function lk(a,b){function c(){mk(a);nk()}if(!ec(document,a))throw"Error: container is not in current document.";b&&ok(b);if(zc){var d=document.getElementById("realtime");d&&(d.style.display="block");pk(c,a)}else c()}
function ok(a){var b=!!a.readOnly;if(b)var c=!1,d=!1,e=!1,g=!1,h=!1,k=null;else(c=a.toolbox)?("string"!=typeof c&&"undefined"==typeof XSLTProcessor&&(c=c.outerHTML),"string"==typeof c&&(c=ng(c))):c=null,k=c,c=Boolean(k&&k.getElementsByTagName("category").length),d=a.trashcan,void 0===d&&(d=c),e=a.collapse,void 0===e&&(e=c),g=a.comments,void 0===g&&(g=c),h=a.disable,void 0===h&&(h=c);var l=a.scrollbars;void 0===l&&(l=c);var r=a.sounds;void 0===r&&(r=!0);var q=!!a.realtime,x=q?a.realtimeOptions:void 0;
J=!!a.rtl;xc=e;wc=g;yc=h;N=b;Cc=a.maxBlocks||Infinity;a.media?Pg=a.media:a.path&&(Pg=a.path+"media/");Dc=c;Ec=l;tc=d;Fc=r;vc=k;zc=q;Ac=x}
function mk(a){a.setAttribute("dir","LTR");ce=J;jk();var b=K("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:html":"http://www.w3.org/1999/xhtml","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1","class":"blocklySvg"},null),c=K("defs",{},b),d,e;d=K("filter",{id:"blocklyEmboss"},c);K("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:1,result:"blur"},d);e=K("feSpecularLighting",{"in":"blur",surfaceScale:1,specularConstant:.5,specularExponent:10,"lighting-color":"white",result:"specOut"},d);
K("fePointLight",{x:-5E3,y:-1E4,z:2E4},e);K("feComposite",{"in":"specOut",in2:"SourceAlpha",operator:"in",result:"specOut"},d);K("feComposite",{"in":"SourceGraphic",in2:"specOut",operator:"arithmetic",k1:0,k2:1,k3:1,k4:0},d);d=K("filter",{id:"blocklyTrashcanShadowFilter"},c);K("feGaussianBlur",{"in":"SourceAlpha",stdDeviation:2,result:"blur"},d);K("feOffset",{"in":"blur",dx:1,dy:1,result:"offsetBlur"},d);d=K("feMerge",{},d);K("feMergeNode",{"in":"offsetBlur"},d);K("feMergeNode",{"in":"SourceGraphic"},
d);d=K("filter",{id:"blocklyShadowFilter"},c);K("feGaussianBlur",{stdDeviation:2},d);c=K("pattern",{id:"blocklyDisabledPattern",patternUnits:"userSpaceOnUse",width:10,height:10},c);K("rect",{width:10,height:10,fill:"#aaa"},c);K("path",{d:"M 0 0 L 10 10 M 10 0 L 0 10",stroke:"#cc0"},c);C=new bh(qk,rk);b.appendChild(C.I());C.Vf=Cc;N||(Dc?C.ra=new pj(b,a):(C.da=new wi,c=C.da,d=c.I(),c.Qd=!1,dc(d)),Ec||sk(function(){if(0==Sc){var a=C.Ib(),b=a.Na+a.Oa,c=a.Sb+a.Pa;if(a.Xa<c||a.Xa+a.Qa>a.sa+c||a.tb<(J?a.Na:
b)||a.tb+a.yc>(J?a.ba:a.ba+b))for(var d=Kc(C,!1),e=0,q;q=d[e];e++){var x=q.P(),u=Ei(q),z=c+25-u.height-x.y;0<z&&q.moveBy(0,z);z=c+a.sa-25-x.y;0>z&&q.moveBy(0,z);z=25+b-x.x-(J?0:u.width);0<z&&q.moveBy(z,0);z=b+a.ba-25-x.x+(J?u.width:0);0>z&&q.moveBy(z,0)}}}));b.appendChild(Yh());a.appendChild(b);uc=b;Bj();Df=Zb("div","blocklyWidgetDiv");Df.style.direction=J?"rtl":"ltr";document.body.appendChild(Df)}
function nk(){L(uc,"mousedown",null,tk);L(uc,"contextmenu",null,uk);L(Df,"contextmenu",null,uk);Gc||(L(window,"resize",document,Bj),L(document,"keydown",null,vk),document.addEventListener("mouseup",wk,!1),Hb&&L(window,"orientationchange",document,function(){Lg(window,"resize")}),Gc=!0);if(vc)if(C.ra)C.ra.D();else if(C.da){C.da.D(C);C.da.show(vc.childNodes);C.scrollX=C.da.B;J&&(C.scrollX*=-1);var a="translate("+C.scrollX+", 0)";C.$.setAttribute("transform",a);C.Wc.setAttribute("transform",a)}Ec&&(C.Qb=
new Tg(C),C.Qb.resize());dh();if(Fc){xk([Pg+"click.mp3",Pg+"click.wav",Pg+"click.ogg"],"click");xk([Pg+"delete.mp3",Pg+"delete.ogg",Pg+"delete.wav"],"delete");var b=[],a=function(){for(;b.length;)M(b.pop());for(var a in yk){var d=yk[a];d.volume=.01;d.play();d.pause();if(Hb||Gb)break}};b.push(L(document,"mousemove",null,a));b.push(L(document,"touchstart",null,a))}};/*

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
var Df=null,Af=null,zk=null;function zf(a){Bf();Af=a;zk=null;Df.style.display="block"}function Bf(){Af&&(Df.style.display="none",zk&&zk(),zk=Af=null,cc(Df))}function Ef(a,b,c,d){b<d.y&&(b=d.y);J?a>c.width+d.x&&(a=c.width+d.x):a<d.x&&(a=d.x);Df.style.left=a+"px";Df.style.top=b+"px"};/*

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
function Ak(a,b,c,d){this.h=null;this.fa=Number(c);this.B=Number(b);this.Vc={height:this.fa+10,width:this.B};this.Aa=d||"";this.X=K("g",{},null);this.pe=K("image",{height:this.fa+"px",width:this.B+"px",y:-12},this.X);this.gb(a);Db&&(this.Ke=K("rect",{height:this.fa+"px",width:this.B+"px",y:-12,"fill-opacity":0},this.X))}w(Ak,Nc);f=Ak.prototype;f.clone=function(){return new Ak(this.zl(),this.B,this.fa,this.mb())};f.Ke=null;f.uc=!1;
f.D=function(a){this.h||(this.h=a,a.u().appendChild(this.X),a=this.Ke||this.pe,a.Ba=this.h,Zh(a))};f.k=function(){D(this.X);this.Ke=this.pe=this.X=null};f.rb=function(a){(this.Ke||this.pe).Ba=a};f.Hc=function(){return this.lk};f.gb=function(a){null!==a&&(this.lk=a,this.pe.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",p(a)?a:""))};f.La=function(a){null!==a&&(this.Aa=a)};f.Sc=function(){};/*

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
function Bk(){function a(a){a=a.slice(1).split("&");for(var b=0;b<a.length;b++){var d=a[b].split("=");c[decodeURIComponent(d[0])]=decodeURIComponent(d[1])}}var b=m.location||{},c={},d=b.hash;d&&a(d);(b=b.search)&&a(b);return c}var Ck=Bk();function V(a,b,c){if(a.hasOwnProperty(b))return a[b];void 0===c&&console.error(b+" should be present in the options.");return c}
function Dk(a){this.Oi=V(a,"clientId");this.Bg=Ck.userId;document.getElementById(V(a,"authButtonElementId"));document.getElementById(V(a,"authDivElementId"))}Dk.prototype.start=function(){gapi.load("auth:client,drive-realtime,drive-share",function(){})};
function Ek(a,b,c,d){function e(c){gapi.Db.ca.files.se({resource:{mimeType:b,title:a,parents:[{id:c}]}}).Zb(d)}function g(){function a(b){gapi.Db.ca.ak.se({fileId:"appdata",resource:{key:"folderId",value:b}}).Zb(function(){e(b)})}function b(){gapi.Db.ca.files.se({resource:{mimeType:"application/vnd.google-apps.folder",title:c}}).Zb(function(b){a(b.id)})}gapi.Db.ca.ak.get({fileId:"appdata",propertyKey:"folderId"}).Zb(function(d){if(d.error)c?b():a("root");else{var g=d.result.value;gapi.Db.ca.files.get({fileId:g}).Zb(function(a){a.error||
a.labels.Sl?b():e(g)})}})}gapi.Db.load("drive","v2",function(){g()})}function Fk(a){this.Nh=V(a,"onFileLoaded");this.Oj=V(a,"newFileMimeType","application/vnd.google-apps.drive-sdk");this.Ch=V(a,"initializeModel");this.Vh=V(a,"registerTypes",function(){});this.Lg=V(a,"afterAuth",function(){});this.Ii=V(a,"autoCreate",!1);this.$i=V(a,"defaultTitle","New Realtime File");this.Zi=V(a,"defaultFolderTitle","");this.Mg=V(a,"afterCreate",function(){});this.gf=new Dk(a)}
function Gk(a,b,c){var d=[];b&&d.push("fileIds="+b.join(","));c&&d.push("userId="+c);c=0==d.length?window.location.pathname:window.location.pathname+"#"+d.join("&");window.history&&window.history.replaceState?window.history.replaceState("Google Drive Realtime API Playground","Google Drive Realtime API Playground",c):window.location.href=c;Ck=Bk();for(var e in b)gapi.ca.qb.load(b[e],a.Nh,a.Ch,a.zh)}Fk.prototype.start=function(){var a=this;this.gf.start(function(){a.Vh&&a.Vh();a.Lg&&a.Lg();a.load()})};
Fk.prototype.zh=function(a){a.type!=gapi.ca.qb.Fg.gl&&(a.type==gapi.ca.qb.Fg.wk?(alert("An Error happened: "+a.message),window.location.href="/"):a.type==gapi.ca.qb.Fg.zk&&(alert("The file was not found. It does not exist or you do not have read access to the file."),window.location.href="/"))};
Fk.prototype.load=function(){var a=Ck.fileIds;a&&(a=a.split(","));var b=this.gf.Bg,b=Ck.state;if(a)for(var c in a)gapi.ca.qb.load(a[c],this.Nh,this.Ch,this.zh);else{if(b){var d;try{d=JSON.parse(b)}catch(e){d=null}if("open"==d.action){a=d.Cl;b=d.Bg;Gk(this,a,b);return}}this.Ii&&Hk(this)}};function Hk(a){Ek(a.$i,a.Oj,a.Zi,function(b){b.id?(a.Mg&&a.Mg(b.id),Gk(a,[b.id],a.gf.Bg)):(console.error("Error creating file."),console.error(b))})};/*

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
var fh,Ik,eh=!1,Jk=null,mi=null,Kk=null,Lk=null,oi=null,qi=!1,Mk=null,Nk=null,Ok=null;function Pk(a){var b=a.fj;a=a.fj.length;for(var c=0;c<a;c++){var d=b[c];if(!d.Gj){var e=d.target;"value_changed"==d.type&&("xmlDom"==d.Sh?Qk(function(){Rk(e,!1);Sk(e)}):"relativeX"!=d.Sh&&"relativeY"!=d.Sh||Qk(function(){e.ki||Rk(e,!1);Sk(e)}))}}}function Tk(a){if(!a.Gj){var b=a.newValue;b?Rk(b,!a.oldValue):(b=a.oldValue,Uk(b))}}function Qk(a){if(qi)a();else try{qi=!0,a()}finally{qi=!1}}
function Rk(a,b){Qk(function(){var c=ng(a.Eg).firstChild;if(c=pg(C,c,!0))b&&c.o.ad(c),(b||Va(fh,c))&&Sk(c)})}function Sk(a){if(!isNaN(a.Le)&&!isNaN(a.Me)){var b=gi().width,c=a.P(),d=a.Le-c.x;a.moveBy(J?b-d:d,a.Me-c.y)}}function Uk(a){Qk(function(){a.k(!0,!0,!0)})}function zj(a){if(a.o==C&&eh&&!qi){a=zh(a);var b=a.P(),c=!1,d=kg(a);d.setAttribute("id",a.id);var e=Zb("xml");e.appendChild(d);d=mg(e);d!=a.Eg&&(c=!0,a.Eg=d);if(a.Le!=b.x||a.Me!=b.y)a.Le=b.x,a.Me=b.y,c=!0;c&&oi.set(a.id.toString(),a)}}
function Vk(a,b){gapi.Db.ca.Rh.list({fileId:a}).Zb(function(a){for(var d=0;d<a.items.length;d++){var e=a.items[d];if("owner"==e.Kl){b(e.domain);break}}})}
var Zk={clientId:null,authButtonElementId:"authorizeButton",authDivElementId:"authButtonDiv",initializeModel:function(a){mi=a;var b=a.rl();a.Fc().set("blocks",b);b=a.ql();a.Fc().set("topBlocks",b);Nk&&a.Fc().set(Nk,a.sl(Ok))},autoCreate:!0,defaultTitle:"Realtime Blockly File",defaultFolderTitle:"Realtime Blockly Folder",newFileMimeType:null,onFileLoaded:function(a){Jk=a;a:{for(var b=a.jj(),c=0;c<b.length;c++){var d=b[c];if(d.Hj){Kk=d.Ml;break a}}Kk=void 0}mi=a.Ae;oi=mi.Fc().get("blocks");fh=mi.Fc().get("topBlocks");
mi.Fc().addEventListener(gapi.ca.qb.Ze.Ak,Pk);oi.addEventListener(gapi.ca.qb.Ze.hl,Tk);Lk();a.addEventListener(gapi.ca.qb.Ze.xk,Wk);a.addEventListener(gapi.ca.qb.Ze.yk,Xk);Yk();a=fh;for(b=0;b<a.length;b++)c=a.get(b),Rk(c,!0)},registerTypes:function(){var a=gapi.ca.qb.tl;a.Il(Lh,"Block");Lh.prototype.id=a.lf("id");Lh.prototype.Eg=a.lf("xmlDom");Lh.prototype.Le=a.lf("relativeX");Lh.prototype.Me=a.lf("relativeY");a.Nl(Lh,Lh.prototype.initialize)},afterAuth:function(){setTimeout(function(){},18E5)},afterCreate:function(a){var b=
gapi.Db.ca.Rh.se({fileId:a,resource:{type:"anyone",role:"writer",value:"default",withLink:!0}});b.Zb(function(c){c.error&&Vk(a,function(c){b=gapi.Db.ca.Rh.se({fileId:a,resource:{type:"domain",role:"writer",value:c,withLink:!0}});b.Zb(function(){})})})}};function $k(){var a=Ac,b=V(a,"chatbox");b&&(Nk=V(b,"elementId"),Ok=V(b,"initText",al));Zk.Oi=V(a,"clientId");Ik=V(a,"collabElementId")}
function pk(a,b){$k();eh=!0;bl(b);Lk=function(){a();if(Nk){var b=mi.Fc().get(Nk),d=document.getElementById(Nk);gapi.ca.qb.ul.ll(b,d);d.disabled=!1}};Mk=new Fk(Zk);Mk.start()}
function bl(a){a.style.background="url("+Pg+"progress.gif) no-repeat center center";var b=jd(a),c=Zb("div");c.id=Zk.authDivElementId;var d=Zb("p",null,cl);c.appendChild(d);d=Zb("button",null,"Authorize");d.id=Zk.jl;c.appendChild(d);a.appendChild(c);c.style.display="none";c.style.position="relative";c.style.textAlign="center";c.style.border="1px solid";c.style.backgroundColor="#f6f9ff";c.style.borderRadius="15px";c.style.boxShadow="10px 10px 5px #888";c.style.width=b.width/3+"px";a=jd(c);c.style.left=
(b.width-a.width)/3+"px";c.style.top=(b.height-a.height)/4+"px"}function Yk(){if(Ik){var a;a=Ik;a=p(a)?document.getElementById(a):a;cc(a);for(var b=Jk.jj(),c=0;c<b.length;c++){var d=b[c],e=Zb("img",{src:d.Gl||Pg+"anon.jpeg",alt:d.displayName,title:d.displayName+(d.Hj?" ("+dl+")":"")});e.style.backgroundColor=d.color;a.appendChild(e)}}}function Wk(){Yk()}function Xk(){Yk()}function Hh(a){var b=Kk+"-"+a;return oi.has(b)?Hh("-"+a):b};/*

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
var Pg="https://blockly-demo.appspot.com/static/media/",Ng=64,Og=92,Qg="sprites.png",th=[,2,1,4,3],yk=Object.create(null),S=null,N=!1,qh=null,rh=null,Li=5,T=20,wh=250,Aj=30,C=null,el=null,Sc=0,fl=null;function gi(){return{width:uc.Rg,height:uc.Qg}}function Bj(){var a=uc,b=a.parentNode,c=b.offsetWidth,b=b.offsetHeight;a.Rg!=c&&(a.setAttribute("width",c+"px"),a.Rg=c);a.Qg!=b&&(a.setAttribute("height",b+"px"),a.Qg=b);C.Qb&&C.Qb.resize()}
function tk(a){Bj();Ii();Kg();var b=a.target&&a.target.nodeName&&"svg"==a.target.nodeName.toLowerCase();!N&&S&&b&&ih();a.target==uc&&Rc(a)?gl(a):(N||b)&&C.Qb&&(C.yf=!0,C.sg=a.clientX,C.tg=a.clientY,C.nk=C.Ib(),C.pk=C.scrollX,C.qk=C.scrollY,"mouseup"in ak&&(fl=L(document,"mouseup",null,wk)),Hc=L(document,"mousemove",null,hl))}function wk(){Ig(Fj.OPEN);C.yf=!1;fl&&(M(fl),fl=null);Hc&&(M(Hc),Hc=null)}
function hl(a){if(C.yf){ah();var b=C.nk,c=C.pk+(a.clientX-C.sg),d=C.qk+(a.clientY-C.tg),c=Math.min(c,-b.tb),d=Math.min(d,-b.Xa),c=Math.max(c,b.ba-b.tb-b.yc),d=Math.max(d,b.sa-b.Xa-b.Qa);C.Qb.set(-c-b.tb,-d-b.Xa);a.stopPropagation()}}
function vk(a){if(!Hg(a))if(27==a.keyCode)Kg();else if(8==a.keyCode||46==a.keyCode)try{S&&S.Ac&&!N&&(Kg(),S.k(!0,!0))}finally{a.preventDefault()}else if(a.altKey||a.ctrlKey||a.metaKey)if(S&&S.Ac&&!N&&S.yb&&!N&&S.o==C&&(Kg(),67==a.keyCode?il():88==a.keyCode&&(il(),S.k(!0,!0))),86==a.keyCode&&el){a=C;var b=el;if(!(b.getElementsByTagName("block").length>=Mc(a))){var c=pg(a,b),d=parseInt(b.getAttribute("x"),10),b=parseInt(b.getAttribute("y"),10);if(!isNaN(d)&&!isNaN(b)){J&&(d=-d);do for(var e=!1,g=a.wb(),
h=0,k;k=g[h];h++)k=k.P(),1>=Math.abs(d-k.x)&&1>=Math.abs(b-k.y)&&(d=J?d-T:d+T,b+=2*T,e=!0);while(e);c.moveBy(d,b)}c.select()}}}function Ii(){xj&&(M(xj),xj=null);yj&&(M(yj),yj=null);var a=S;if(2==Sc&&a){var b=a.P();Ch(a,b.x-a.gi,b.y-a.hi);delete a.Zd;Sj(a,!1);a.F();Qf(a.Da,wh,a);Lg(window,"resize");a.o.lb()}Sc=0;Ig(Fj.OPEN);Ki()}function il(){var a=S,b=kg(a);wg(b);a=a.P();b.setAttribute("x",J?-a.x:a.x);b.setAttribute("y",a.y);el=b}
function gl(a){if(!N){var b=[];if(xc){for(var c=!1,d=!1,e=Kc(C,!1),g=0;g<e.length;g++)for(var h=e[g];h;)h.isCollapsed()?c=!0:d=!0,h=lg(h);d={enabled:d};d.text=jl;d.Wa=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!0),a),c=lg(c),a+=10};b.push(d);c={enabled:c};c.text=kl;c.Wa=function(){for(var a=0,b=0;b<e.length;b++)for(var c=e[b];c;)setTimeout(c.mc.bind(c,!1),a),c=lg(c),a+=10};b.push(c)}wj.show(a,b)}}function uk(a){Hg(a)||a.preventDefault()}
function Kg(a){ci();Bf();!a&&C.ra&&C.ra.da&&C.ra.da.Qd&&C.ra.Id.oc(null)}function ah(){if(window.getSelection){var a=window.getSelection();a&&a.removeAllRanges&&(a.removeAllRanges(),setTimeout(function(){try{window.getSelection().removeAllRanges()}catch(a){}},0))}}function Hg(a){return"textarea"==a.target.type||"text"==a.target.type}
function xk(a,b){if(window.Audio&&a.length){for(var c,d=new window.Audio,e=0;e<a.length;e++){var g=a[e],h=g.match(/\.(\w+)$/);if(h&&d.canPlayType("audio/"+h[1])){c=new window.Audio(g);break}}c&&c.play&&(yk[b]=c)}}function Dj(a,b){var c=yk[a];c&&(c=Mb&&9===Mb||Hb||Fb?c:c.cloneNode(),c.volume=void 0===b?1:b,c.play())}
function qk(){var a=gi();C.ra&&(a.width-=C.ra.width);var b=a.width-R,c=a.height-R;try{var d=C.$.getBBox()}catch(e){return null}if(C.Qb)var g=Math.min(d.x-b/2,d.x+d.width-b),b=Math.max(d.x+d.width+b/2,d.x+b),h=Math.min(d.y-c/2,d.y+d.height-c),c=Math.max(d.y+d.height+c/2,d.y+c);else g=d.x,b=g+d.width,h=d.y,c=h+d.height;d=0;!J&&C.ra&&(d=C.ra.width);return{sa:a.height,ba:a.width,Qa:c-h,yc:b-g,Sb:-C.scrollY,Na:-C.scrollX,Xa:h,tb:g,Pa:0,Oa:d}}
function rk(a){if(!C.Qb)throw"Attempt to set main workspace scroll without scrollbars.";var b=qk();t(a.x)&&(C.scrollX=-b.yc*a.x-b.tb);t(a.y)&&(C.scrollY=-b.Qa*a.y-b.Xa);a="translate("+(C.scrollX+b.Oa)+","+(C.scrollY+b.Pa)+")";C.$.setAttribute("transform",a);C.Wc.setAttribute("transform",a)}function Cj(a){a()}function sk(a){return L(C.$,"blocklyWorkspaceChange",null,a)}m.Blockly||(m.Blockly={});m.Blockly.getMainWorkspace=function(){return C};m.Blockly.addChangeListener=sk;
m.Blockly.removeChangeListener=function(a){M(a)};var Ij="Add Comment",cl="Please authorize this app to enable your work to be saved and to allow it to be shared by you.",al="Chat with your collaborator by typing in this box!",jl="Collapse Blocks",Mj="Collapse Block",Pj="Delete Block",Qj="Delete %1 Blocks",Oj="Disable Block",Gj="Duplicate",Nj="Enable Block",kl="Expand Blocks",Lj="Expand Block",Jj="External Inputs",Rj="Help",Kj="Inline Inputs",dl="Me",Hj="Remove Comment";function ll(a,b){var c;c=a.className;for(var d=c=p(c)&&c.match(/\S+/g)||[],e=Za(arguments,1),g=0;g<e.length;g++)Va(d,e[g])||d.push(e[g]);a.className=c.join(" ")};var ml={en:"English"},nl=[],ol=window.BlocklyGamesLang,pl=window.BlocklyGamesLanguages,ql=!!window.location.pathname.match(/\.html$/);function rl(a,b){var c=window.location.search.match(new RegExp("[?&]"+a+"=([^&]+)"));return c?decodeURIComponent(c[1].replace(/\+/g,"%20")):b}function sl(a,b,c){a=Number(rl(a,"NaN"));return isNaN(a)?b:Math.min(Math.max(b,a),c)}var I=sl("level",1,10);
function tl(){document.head.parentElement.setAttribute("dir",-1!=nl.indexOf(ol)?"rtl":"ltr");document.head.parentElement.setAttribute("lang",ol);for(var a=[],b=0;b<pl.length;b++){var c=pl[b];a.push([ml[c],c])}a.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:0});for(var d=document.getElementById("languageMenu"),b=d.options.length=0;b<a.length;b++){var e=a[b],c=e[1],e=new Option(e[0],c);c==ol&&(e.selected=!0);d.options.add(e)}1>=d.options.length?d.style.display="none":alert(d.options.length);for(b=
1;10>=b;b++)a=document.getElementById("level"+b),c=!!ul(b),a&&c&&ll(a,"level_done");(b=document.querySelector('meta[name="viewport"]'))&&725>screen.availWidth&&b.setAttribute("content","width=725, initial-scale=.35, user-scalable=no");setTimeout(vl,1)}function ul(a){var b=wl,c;try{c=window.localStorage[b+a]}catch(d){}return c}function W(a){var b;(b=document.getElementById(a))?(b=b.textContent,b=b.replace(/\\n/g,"\n")):b=null;return null===b?"[Unknown message: "+a+"]":b}
function xl(a,b){"string"==typeof a&&(a=document.getElementById(a));a.addEventListener("click",b,!0);a.addEventListener("touchend",b,!0)}function vl(){if(!ql){window.GoogleAnalyticsObject="GoogleAnalyticsFunction";var a=function(){(a.q=a.q||[]).push(arguments)};window.GoogleAnalyticsFunction=a;a.l=1*new Date;var b=document.createElement("script");b.async=1;b.src="//www.google-analytics.com/analytics.js";document.head.appendChild(b);a("create","UA-50448074-1","auto");a("send","pageview")}};var X={Dc:null,D:function(){tl();var a=document.getElementById("linkButton"),b=document.getElementById("signoutButton");"BlocklyStorage"in window?(BlocklyStorage.HTTPREQUEST_ERROR=W("Games_httpRequestError"),BlocklyStorage.LINK_ALERT=W("Games_linkAlert"),BlocklyStorage.HASH_ERROR=W("Games_hashError"),BlocklyStorage.XML_ERROR=W("Games_xmlError"),BlocklyStorage.alert=lc.rk,a&&xl(a,BlocklyStorage.link),b&&xl(b,BlocklyStorage.link)):a&&(a.style.display="none");document.getElementById("languageMenu").addEventListener("change",
X.Ni,!0)},Dj:function(a){document.body.innerHTML=a;a=document.getElementById("blockly");a.style.height=window.innerHeight+"px";lk(a,{media:"media/",readOnly:!0,Ll:-1!=nl.indexOf(ol),scrollbars:!1});a=rl("xml","");X.mg("<xml>"+a+"</xml>")},Lj:function(a,b){if("BlocklyStorage"in window&&1<window.location.hash.length)BlocklyStorage.retrieveXml(window.location.hash.substring(1));else{var c=null;try{c=window.sessionStorage.Ih}catch(d){}c&&delete window.sessionStorage.Ih;var e=ul(I),g=b&&ul(I-1);(c=c||
e||g||a)&&X.mg(c)}},mg:function(a){X.Dc?X.Dc.setValue(a,-1):(a=ng(a),og(C,a))},gk:function(){if(void 0!=typeof sc&&window.localStorage){var a=wl+I;if(X.Dc)var b=X.Dc.getValue();else b=jg(C),b=mg(b);window.localStorage[a]=b}},qe:function(){window.location=(ql?"index.html":"./")+"?lang="+ol},Ni:function(){if(window.sessionStorage){if(X.Dc)var a=X.Dc.getValue();else a=jg(C),a=mg(a);window.sessionStorage.Ih=a}var a=document.getElementById("languageMenu"),a=encodeURIComponent(a.options[a.selectedIndex].value),
b=window.location.search,b=1>=b.length?"?lang="+a:b.match(/[?&]lang=[^&]*/)?b.replace(/([?&]lang=)[^&]*/,"$1"+a):b.replace(/\?/,"?lang="+a+"&");window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+b},me:function(a){if(a){var b=a.match(/^block_id_(\d+)$/);b&&(a=b[1])}hh(a)},Ql:function(a){return a.replace(/(,\s*)?'block_id_\d+'\)/g,")").trimRight()},jb:function(a){if("click"==a.type&&"touchend"==X.jb.eg&&X.jb.dg+2E3>Date.now()||X.jb.eg==a.type&&X.jb.dg+400>Date.now())return a.preventDefault(),
a.stopPropagation(),!0;X.jb.eg=a.type;X.jb.dg=Date.now();return!1}};X.jb.eg=null;X.jb.dg=0;X.Bj=function(){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","js-read-only/JS-Interpreter/compiled.js");document.head.appendChild(a)};
X.Cj=function(){var a=document.createElement("link");a.setAttribute("rel","stylesheet");a.setAttribute("type","text/css");a.setAttribute("href","common/prettify.css");document.head.appendChild(a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src","common/prettify.js");document.head.appendChild(a)};window.BlocklyInterface=X;X.setCode=X.mg;var Y={cc:!1,mh:null,Xd:null,pc:function(a,b,c,d,e,g){function h(){Y.cc&&(k.style.visibility="visible",k.style.zIndex=10,l.style.visibility="hidden")}Y.cc&&Y.va(!1);Kg(!0);Y.cc=!0;Y.mh=b;Y.Xd=g;var k=document.getElementById("dialog");g=document.getElementById("dialogShadow");var l=document.getElementById("dialogBorder"),r;for(r in e)k.style[r]=e[r];d&&(g.style.visibility="visible",g.style.opacity=.3,g.style.zIndex=9,d=document.createElement("div"),d.id="dialogHeader",k.appendChild(d),Y.uf=L(d,"mousedown",
null,Y.aj));k.appendChild(a);a.className=a.className.replace("dialogHiddenContent","");c&&b?(Y.ye(b,!1,.2),Y.ye(k,!0,.8),setTimeout(h,175)):h()},nh:0,oh:0,aj:function(a){Y.xf();if(!Rc(a)){var b=document.getElementById("dialog");Y.nh=b.offsetLeft-a.clientX;Y.oh=b.offsetTop-a.clientY;Y.wf=L(document,"mouseup",null,Y.xf);Y.vf=L(document,"mousemove",null,Y.bj);a.stopPropagation()}},bj:function(a){var b=document.getElementById("dialog"),c=Y.nh+a.clientX;a=Y.oh+a.clientY;a=Math.max(a,0);a=Math.min(a,window.innerHeight-
b.offsetHeight);c=Math.max(c,0);c=Math.min(c,window.innerWidth-b.offsetWidth);b.style.left=c+"px";b.style.top=a+"px"},xf:function(){Y.wf&&(M(Y.wf),Y.wf=null);Y.vf&&(M(Y.vf),Y.vf=null)},va:function(a){function b(){d.style.zIndex=-1;d.style.visibility="hidden";document.getElementById("dialogBorder").style.visibility="hidden"}if(Y.cc){Y.xf();Y.uf&&(M(Y.uf),Y.uf=null);Y.cc=!1;Y.Xd&&Y.Xd();Y.Xd=null;var c=!1===a?null:Y.mh;a=document.getElementById("dialog");var d=document.getElementById("dialogShadow");
d.style.opacity=0;c?(Y.ye(a,!1,.8),Y.ye(c,!0,.2),setTimeout(b,175)):b();a.style.visibility="hidden";a.style.zIndex=-1;for((c=document.getElementById("dialogHeader"))&&c.parentNode.removeChild(c);a.firstChild;)c=a.firstChild,c.className+=" dialogHiddenContent",document.body.appendChild(c)}},ye:function(a,b,c){function d(){e.style.width=g.width+"px";e.style.height=g.height+"px";e.style.left=g.x+"px";e.style.top=g.y+"px";e.style.opacity=c}if(a){var e=document.getElementById("dialogBorder"),g=Y.uh(a);
b?(e.className="dialogAnimate",setTimeout(d,1)):(e.className="",d());e.style.visibility="visible"}},uh:function(a){if(a.getBBox){var b=a.getBBox(),c=b.height,b=b.width;a=Cf(a);var d=a.x,e=a.y}else{c=a.offsetHeight;b=a.offsetWidth;e=d=0;do d+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;while(a)}return{height:c,width:b,x:d,y:e}},rk:function(a){var b=document.getElementById("containerStorage");b.textContent="";a=a.split("\n");for(var c=0;c<a.length;c++){var d=document.createElement("p");d.appendChild(document.createTextNode(a[c]));
b.appendChild(d)}b=document.getElementById("dialogStorage");a=document.getElementById("linkButton");Y.pc(b,a,!0,!0,{width:"50%",left:"25%",top:"5em"},Y.ii);Y.ei()},Kg:function(){if(!ul(I))if(Y.cc||0!=Lh.wl)setTimeout(Y.Kg,15E3);else{var a=document.getElementById("dialogAbort"),b=document.getElementById("abortCancel");b.addEventListener("click",Y.va,!0);b.addEventListener("touchend",Y.va,!0);b=document.getElementById("abortOk");b.addEventListener("click",X.qe,!0);b.addEventListener("touchend",X.qe,
!0);Y.pc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.Jg,!0)});document.body.addEventListener("keydown",Y.Jg,!0)}},Dl:function(){var a=document.getElementById("dialogDone");C&&(document.getElementById("dialogLinesText").textContent="Play a challenge to unlock new features.");var b=document.getElementById("dialogCongrats");a.removeChild(b);b=document.getElementById("containerCode");a.removeChild(b);10>I?W("Games_nextLevel").replace("%1",I+1):W("Games_finalLevel");
b=document.getElementById("doneCancel");b.addEventListener("click",Y.va,!0);b.addEventListener("touchend",Y.va,!0);b=document.getElementById("doneOk");1==I&&(b.addEventListener("click",function(){window.open("/puzzle","_self")},!0),b.addEventListener("touchend",function(){window.open("/puzzle","_self")},!0));2==I&&(b.addEventListener("click",function(){window.open("/turtle","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle","_self")},!0));3==I&&(b.addEventListener("click",
function(){window.open("/turtle?lang=en?level=2","_self")},!0),b.addEventListener("touchend",function(){window.open("/turtle?lang=en?level=2","_self")},!0));4==I&&(b.addEventListener("click",function(){window.open("/bird?lang=en?level=3","_self")},!0),b.addEventListener("touchend",function(){window.open("/bird?lang=en?level=3","_self")},!0));5==I&&(b.addEventListener("click",function(){window.open("/maze?lang=en?level=9","_self")},!0),b.addEventListener("touchend",function(){window.open("/maze?lang=en?level=9",
"_self")},!0));Y.pc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.xc,!0)});document.body.addEventListener("keydown",Y.xc,!0)}};
window.Bc=function(a){if(/(iP)/g.test(navigator.userAgent))return alert("Your device does not support files downloading. Please try again in desktop browser."),!1;if(window.Bc.Fj||window.Bc.Ij){var b=document.createElement("a");b.href=a;void 0!==b.dj&&(b.dj="CodeGirl");if(document.createEvent)return a=document.createEvent("MouseEvents"),a.initEvent("click",!0,!0),b.dispatchEvent(a),!0}-1===a.indexOf("?")&&(a+="?download");window.open(a,"_self");return!0};window.Bc.Fj=-1<navigator.userAgent.toLowerCase().indexOf("chrome");
window.Bc.Ij=-1<navigator.userAgent.toLowerCase().indexOf("safari");
Y.vl=function(){var a=document.getElementById("dialogDone");C&&(document.getElementById("dialogLinesText").textContent='You have finished creating your avatar! Click "OK" to save a picture of your avatar or "Cancel" continue dressing up your avatar.');var b=document.getElementById("containerCode");a.removeChild(b);b=document.getElementById("doneCancel");b.addEventListener("click",Y.va,!0);b.addEventListener("touchend",Y.va,!0);b=document.getElementById("doneOk");document.getElementById("doneOk").innerHTML=
"OK";b.addEventListener("click",function(){html2canvas([document.getElementById("visualization")],{Wj:function(a){a=a.toDataURL("image/png");window.Bc(a)}})},!0);b.addEventListener("touchend",function(){html2canvas([document.getElementById("visualization")],{Wj:function(a){a=a.toDataURL("image/png");window.Bc(a)}})},!0);Y.pc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.xc,!0)});document.body.addEventListener("keydown",Y.xc,!0)};
Y.El=function(){alert("login");document.getElementById("login")};
Y.Pi=function(){var a=document.getElementById("dialogDone");if(C){document.getElementById("dialogLinesText").textContent="";var b=10>I?W("Games_nextLevel").replace("%1",I+1):W("Games_finalLevel"),c=document.getElementById("containerCode");"puzzle"==wl?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/shorts.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/skirt.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/pants.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/long_skirt.svg' width='80px' border=0/>":"turtle"==
wl&&1==I?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/boots.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/cowboyboot.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/flats.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/shoe.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hightop.svg' width='80px' border=0/>":"turtle"==wl&&2==I?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/earrings.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/bow.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/baseball.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/hat.svg' width='80px' border=0/> <img class='featureUnlocked' src='./movie/retro_glasses.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/necklace.svg' width='80px' border=0/>":
"bird"==wl&&3==I?c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/briefcase.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/purse.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/backpack.svg' width='80px' border=0/><img class='featureUnlocked' src='./movie/fancy_purse.svg' width='80px' border=0/>":"maze"==wl&&4==I&&(c.innerHTML="<p>New features unlocked!</p><img class='featureUnlocked' src='./movie/dress.svg' width='80px' border=0 /><img class='featureUnlocked' src='./movie/crown.svg' width='80px' border=0/>")}c=
document.getElementById("doneCancel");c.addEventListener("click",Y.va,!0);c.addEventListener("touchend",Y.va,!0);c=document.getElementById("doneOk");c.addEventListener("click",X.Xf,!0);c.addEventListener("touchend",X.Xf,!0);Y.pc(a,null,!1,!0,{width:"40%",left:"30%"},function(){document.body.removeEventListener("keydown",Y.xc,!0)});document.body.addEventListener("keydown",Y.xc,!0);a=document.getElementById("dialogDoneText");a.innerHTML=b;"turtle"==wl&&1==I&&(a.innerHTML+="<p><em>You can use loops to repeat actions. Next time, try using a loop to help the robot draw a square with fewer blocks! </em></p>")};
Y.lh=function(a){!Y.cc||13!=a.keyCode&&27!=a.keyCode&&32!=a.keyCode||(Y.va(!0),a.stopPropagation(),a.preventDefault())};Y.ei=function(){document.body.addEventListener("keydown",Y.lh,!0)};Y.ii=function(){document.body.removeEventListener("keydown",Y.lh,!0)};Y.xc=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.va(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.Xf()};
Y.Jg=function(a){if(13==a.keyCode||27==a.keyCode||32==a.keyCode)Y.va(!0),a.stopPropagation(),a.preventDefault(),27!=a.keyCode&&X.qe()};window.BlocklyDialogs=Y;Y.hideDialog=Y.va;/*

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
var U=new bk("JavaScript");fk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
U.Dk=0;U.Wk=1;U.Zk=1;U.Pk=2;U.Rk=3;U.Lk=3;U.Uk=4;U.Fk=4;U.el=4;U.dl=4;U.cl=4;U.fl=4;U.Mk=4;U.Yk=5;U.Nk=5;U.Xk=5;U.Bk=6;U.bl=6;U.Hk=7;U.al=8;U.Qk=8;U.Sk=8;U.Ok=9;U.Ek=10;U.Ik=11;U.Gk=12;U.Tk=13;U.Vk=14;U.Kk=15;U.Ck=16;U.Jk=17;U.$k=99;U.D=function(a){U.tf=Object.create(null);U.xl=Object.create(null);U.Cg?U.Cg.reset():U.Cg=new Ic(U.$e);var b=[];a=Kf(a);for(var c=0;c<a.length;c++)b[c]="var "+U.Cg.getName(a[c],"VARIABLE")+";";U.tf.variables=b.join("\n")};
U.finish=function(a){var b=[],c;for(c in U.tf)b.push(U.tf[c]);return b.join("\n\n")+"\n\n\n"+a};U.Zh=function(a){return a+";\n"};U.Hl=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/'/g,"\\'");return"'"+a+"'"};
U.$h=function(a,b){var c="";if(!a.J||!a.J.n){var d=a.de();d&&(c+=ck(d,"// ")+"\n");for(var e=0;e<a.N.length;e++)if(1==a.N[e].type){var g=Q(a.N[e].m);if(g){for(var d=[],g=g.$a(),h=0;h<g.length;h++){var k=g[h].de();k&&d.push(k)}d.length&&d.push("");(d=d.join("\n"))&&(c+=ck(d,"// "))}}}e=dk(U,a.K&&Q(a.K));return c+b+e};Zc.maze_moveForward={D:function(){this.Rb(290);ji(ui(this),W("Maze_moveForward"));Jh(this,!0);Kh(this,!0);this.rb(W("Maze_moveForwardTooltip"))}};U.maze_moveForward=function(a){return"moveForward('block_id_"+a.id+"');\n"};Zc.maze_turn={D:function(){var a=[[W("Maze_turnLeft"),"turnLeft"],[W("Maze_turnRight"),"turnRight"]];a[0][0]+=" \u21ba";a[1][0]+=" \u21bb";this.Rb(290);ji(ui(this),new vf(a),"DIR");Jh(this,!0);Kh(this,!0);this.rb(W("Maze_turnTooltip"))}};
U.maze_turn=function(a){return si(a)+"('block_id_"+a.id+"');\n"};Zc.maze_if={D:function(){var a=[[W("Maze_pathAhead"),"isPathForward"],[W("Maze_pathLeft"),"isPathLeft"],[W("Maze_pathRight"),"isPathRight"]];a[1][0]+=" \u21ba";a[2][0]+=" \u21bb";this.Rb(210);ji(ui(this),new vf(a),"DIR");ji(vi(this,3,"DO"),W("Maze_doCode"));this.rb(W("Maze_ifTooltip"));Jh(this,!0);Kh(this,!0)}};U.maze_if=function(a){var b=si(a)+"('block_id_"+a.id+"')";a=ek(a,"DO");return"if ("+b+") {\n"+a+"}\n"};
Zc.maze_ifElse={D:function(){var a=[[W("Maze_pathAhead"),"isPathForward"],[W("Maze_pathLeft"),"isPathLeft"],[W("Maze_pathRight"),"isPathRight"]];a[1][0]+=" \u21ba";a[2][0]+=" \u21bb";this.Rb(210);ji(ui(this),new vf(a),"DIR");ji(vi(this,3,"DO"),W("Maze_doCode"));ji(vi(this,3,"ELSE"),W("Maze_elseCode"));this.rb(W("Maze_ifelseTooltip"));Jh(this,!0);Kh(this,!0)}};U.maze_ifElse=function(a){var b=si(a)+"('block_id_"+a.id+"')",c=ek(a,"DO");a=ek(a,"ELSE");return"if ("+b+") {\n"+c+"} else {\n"+a+"}\n"};
Zc.maze_forever={D:function(){this.Rb(120);ji(ji(ui(this),W("Maze_repeatUntil")),new Ak(yl.xe,12,16));ji(vi(this,3,"DO"),W("Maze_doCode"));Jh(this,!0);this.rb(W("Maze_whileTooltip"))}};U.maze_forever=function(a){var b=ek(a,"DO");U.Gg&&(b=U.Gg.replace(/%1/g,"'block_id_"+a.id+"'")+b);return"while (notDone()) {\n"+b+"}\n"};var wl="maze";X.Xf=function(){10>I?window.location=window.location.protocol+"//"+window.location.host+window.location.pathname+"?lang="+ol+"&level="+(I+1)+"&skin="+zl:X.qe()};
var Al=[void 0,Infinity,Infinity,2,5,5,5,5,10,Infinity,10][I],Bl=[{Se:"maze/pegman.png",xg:"maze/tiles_pegman.png",xe:"maze/marker.png",background:!1,nd:!1,Tf:"#000",Dg:["maze/win.mp3","maze/win.ogg"],nf:["maze/fail_pegman.mp3","maze/fail_pegman.ogg"],Ud:1},{Se:"maze/astro.png",xg:"maze/tiles_astro.png",xe:"maze/marker.png",background:"maze/bg_astro.jpg",nd:!1,Tf:"#fff",Dg:["maze/win.mp3","maze/win.ogg"],nf:["maze/fail_astro.mp3","maze/fail_astro.ogg"],Ud:2},{Se:"maze/panda.png",xg:"maze/tiles_panda.png",
xe:"maze/marker.png",background:"maze/bg_panda.jpg",nd:!1,Tf:"#000",Dg:["maze/win.mp3","maze/win.ogg"],nf:["maze/fail_panda.mp3","maze/fail_panda.ogg"],Ud:3}],zl=sl("skin",0,Bl.length),yl=Bl[zl],Cl=[void 0,[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,2,1,3,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,3,0,0,0],[0,0,2,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,2,1,1,1,1,3,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,3,1,0],[0,0,0,0,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,1,1,0,0,0,0],[0,2,1,0,0,0,0,0],[1,1,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,3,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0],[0,0,0,0,0,1,0,0],[0,0,0,2,1,1,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0],[0,1,0,0,0,1,0,0],[0,1,1,3,0,1,0,0],[0,0,0,0,
0,1,0,0],[0,2,1,1,1,1,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,1,1,0],[0,2,1,1,1,1,0,0],[0,0,0,0,0,1,1,0],[0,1,1,3,0,1,0,0],[0,1,0,1,0,1,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0],[0,1,0,0,1,1,0,0],[0,1,1,1,0,1,0,0],[0,0,0,1,0,1,0,0],[0,2,1,1,0,3,0,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,0,0],[0,0,1,0,0,0,0,0],[3,1,1,1,1,1,1,0],[0,1,0,1,0,1,1,0],[1,1,1,1,1,0,1,0],[0,1,0,1,0,2,1,0],[0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0],
[0,1,1,0,3,0,1,0],[0,1,1,0,1,1,1,0],[0,1,0,1,0,1,0,0],[0,1,1,1,1,1,1,0],[0,0,0,1,0,0,1,0],[0,2,1,1,1,0,1,0],[0,0,0,0,0,0,0,0]]][I],Dl=Cl.length,El=Cl[0].length,Fl=50*El,Gl=50*Dl,Hl=0,Z=[],Il={10010:[4,0],10001:[3,3],11E3:[0,1],10100:[0,2],11010:[4,1],10101:[3,2],10110:[0,0],10011:[2,0],11001:[4,2],11100:[2,3],11110:[1,1],10111:[1,0],11011:[2,1],11101:[1,2],11111:[2,2],null0:[4,3],null1:[3,0],null2:[3,1],null3:[0,3],null4:[1,3]};
function Jl(){function a(a,b){return 0>a||a>=El||0>b||b>=Dl?"0":0==Cl[b][a]?"0":"1"}var b=document.getElementById("svgMaze"),c=50*Math.max(Dl,El);b.setAttribute("viewBox","0 0 "+c+" "+c);c=document.createElementNS("http://www.w3.org/2000/svg","rect");c.setAttribute("width",Fl);c.setAttribute("height",Gl);c.setAttribute("fill","#F1EEE7");c.setAttribute("stroke-width",1);c.setAttribute("stroke","#CCB");b.appendChild(c);if(yl.background){var d=document.createElementNS("http://www.w3.org/2000/svg","image");
d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yl.background);d.setAttribute("height",Gl);d.setAttribute("width",Fl);d.setAttribute("x",0);d.setAttribute("y",0);b.appendChild(d)}if(yl.nd){for(c=0;c<Dl;c++){var e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("y1",50*c+25.5);e.setAttribute("x2",Fl);e.setAttribute("y2",50*c+25.5);e.setAttribute("stroke",yl.nd);e.setAttribute("stroke-width",1);b.appendChild(e)}for(c=0;c<El;c++)e=document.createElementNS("http://www.w3.org/2000/svg",
"line"),e.setAttribute("x1",50*c+25.5),e.setAttribute("x2",50*c+25.5),e.setAttribute("y2",Gl),e.setAttribute("stroke",yl.nd),e.setAttribute("stroke-width",1),b.appendChild(e)}for(e=c=0;e<Dl;e++)for(var g=0;g<El;g++){d=a(g,e)+a(g,e-1)+a(g+1,e)+a(g,e+1)+a(g-1,e);Il[d]||(d="00000"==d&&.3<Math.random()?"null0":"null"+Math.floor(1+4*Math.random()));var h=Il[d][0],k=Il[d][1],l=document.createElementNS("http://www.w3.org/2000/svg","clipPath");l.setAttribute("id","tileClipPath"+c);d=document.createElementNS("http://www.w3.org/2000/svg",
"rect");d.setAttribute("width",50);d.setAttribute("height",50);d.setAttribute("x",50*g);d.setAttribute("y",50*e);l.appendChild(d);b.appendChild(l);d=document.createElementNS("http://www.w3.org/2000/svg","image");d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yl.xg);d.setAttribute("height",200);d.setAttribute("width",250);d.setAttribute("clip-path","url(#tileClipPath"+c+")");d.setAttribute("x",50*(g-h));d.setAttribute("y",50*(e-k));b.appendChild(d);c++}c=document.createElementNS("http://www.w3.org/2000/svg",
"image");c.setAttribute("id","finish");c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yl.xe);c.setAttribute("height",34);c.setAttribute("width",20);b.appendChild(c);c=document.createElementNS("http://www.w3.org/2000/svg","clipPath");c.setAttribute("id","pegmanClipPath");d=document.createElementNS("http://www.w3.org/2000/svg","rect");d.setAttribute("id","clipRect");d.setAttribute("width",49);d.setAttribute("height",52);c.appendChild(d);b.appendChild(c);c=document.createElementNS("http://www.w3.org/2000/svg",
"image");c.setAttribute("id","pegman");c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",yl.Se);c.setAttribute("height",52);c.setAttribute("width",1029);c.setAttribute("clip-path","url(#pegmanClipPath)");b.appendChild(c)}
function Kl(){function a(){c.style.top="90px";c.style.left=b?"10px":"425px";c.style.width=window.innerWidth-440+"px"}document.body.innerHTML=rc();X.D();var b=-1!=nl.indexOf(ol),c=document.getElementById("blockly");document.getElementById("visualization");window.addEventListener("scroll",function(){a();Lg(window,"resize")});window.addEventListener("resize",a);a();var d=document.getElementById("toolbox");lk(document.getElementById("blockly"),{media:"media/",maxBlocks:Al,rtl:b,toolbox:d,trashcan:!0});
xk(yl.Dg,"win");xk(yl.nf,"fail");fk("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");Jl();X.Lj('<xml>  <block movable="'+(1!=I)+'" type="maze_moveForward" x="70" y="70"></block></xml>',!1);for(d=0;d<Dl;d++)for(var e=0;e<El;e++)2==Cl[d][e]?nc={x:e,y:d}:3==Cl[d][e]&&(oc={x:e,y:d});Ll(!0);sk(function(){var a=Mc(C),b=document.getElementById("capacity");if(Infinity==a)b.style.display="none";else{b.style.display="inline";b.innerHTML="";var a=Number(a),c=
document.createElement("span");c.className="capacityNumber";c.appendChild(document.createTextNode(a));for(var a=(0==a?W("Maze_capacity0"):1==a?W("Maze_capacity1"):W("Maze_capacity2")).split(/%\d/),d=0;d<a.length;d++)b.appendChild(document.createTextNode(a[d])),d!=a.length-1&&b.appendChild(c.cloneNode(!0))}});document.body.addEventListener("mousemove",Ml,!0);xl("runButton",Nl);xl("resetButton",Ol);1==I&&(T*=2);10==I?ul(I)||(d=document.getElementById("dialogHelpWallFollow"),Y.pc(d,null,!1,!0,{width:"30%",
left:"35%",top:"12em"},Y.ii),Y.ei(),setTimeout(Y.Kg,3E5)):setTimeout(function(){sk(function(){Pl()});Pl()},1E4);d=document.getElementById("dialogDoneButtons");e=document.createElement("img");e.id="pegSpin";e.src="media/1x1.gif";e.style.backgroundImage="url("+yl.Se+")";d.parentNode.insertBefore(e,d);setTimeout(X.Bj,1);setTimeout(X.Cj,1)}window.location.pathname.match(/readonly.html$/)?window.addEventListener("load",function(){X.Dj(qc()+'<div id="blockly"></div>')}):window.addEventListener("load",Kl);
function Pl(){var a=mg(jg(C)),b=Kc(C.da.p,!0),c=null,d=null,e=null;if(1==I)2>C.wb().length?(c=document.getElementById("dialogHelpStack"),e={width:"370px",top:"120px"},e[J?"right":"left"]="215px",d=b[0].u()):(b=Kc(C,!0),1<b.length?(document.getElementById("iframeOneTopBlock").src="readonly.html?app=maze&lang="+encodeURIComponent(ol)+"&xml="+encodeURIComponent('<block type="maze_moveForward" x="10" y="10"><next><block type="maze_moveForward"></block></next></block>'),c=document.getElementById("dialogHelpOneTopBlock"),
e={width:"360px",top:"120px"},e[J?"right":"left"]="225px",d=b[0].u()):0==Hl&&(c=document.getElementById("dialogHelpRun"),e={width:"360px",top:"410px"},e[J?"right":"left"]="400px",d=document.getElementById("runButton")));else if(2==I)0!=Hl&&"none"==document.getElementById("runButton").style.display&&(c=document.getElementById("dialogHelpReset"),e={width:"360px",top:"410px"},e[J?"right":"left"]="400px",d=document.getElementById("resetButton"));else if(3==I)-1==a.indexOf("maze_forever")&&(0==Mc(C)?(c=
document.getElementById("dialogHelpCapacity"),e={width:"430px",top:"310px"},e[J?"right":"left"]="50px",d=document.getElementById("capacityBubble")):(c=document.getElementById("dialogHelpRepeat"),e={width:"360px",top:"320px"},e[J?"right":"left"]="425px",d=b[3].u()));else if(4==I)if(0==Mc(C)&&(-1==a.indexOf("maze_forever")||1<Kc(C,!1).length))c=document.getElementById("dialogHelpCapacity"),e={width:"430px",top:"310px"},e[J?"right":"left"]="50px",d=document.getElementById("capacityBubble");else{for(var a=
!0,g=C.wb(),h=0;h<g.length;h++){var k=g[h];if("maze_forever"==k.type){for(var l=0;k;)k=k.Gb(),k=k.length?k[0]:null,l++;if(2<l){a=!1;break}}}a&&(c=document.getElementById("dialogHelpRepeatMany"),e={width:"360px",top:"320px"},e[J?"right":"left"]="425px",d=b[3].u())}else if(5==I)0!=zl||Ql||(c=document.getElementById("dialogHelpSkins"),e={width:"360px",top:"60px"},e[J?"left":"right"]="20px",d=document.getElementById("pegmanButton"));else if(6==I)-1==a.indexOf("maze_if")&&(c=document.getElementById("dialogHelpIf"),
e={width:"360px",top:"400px"},e[J?"right":"left"]="425px",d=b[4].u());else if(7==I){if(!Rl){g=document.createElement("span");g.className="helpMenuFake";h=[W("Maze_pathAhead"),W("Maze_pathLeft"),W("Maze_pathRight")];l=Gf(h);k=Hf(h);g.textContent=(k?h[0].slice(l,-k):h[0].substring(l))+" "+yf;l=document.getElementById("helpMenuText");h=l.textContent;l.textContent="";k=h.split(/%\d/);for(h=0;h<k.length;h++)l.appendChild(document.createTextNode(k[h])),h!=k.length-1&&l.appendChild(g.cloneNode(!0));Rl=!0}-1==
a.indexOf("isPathRight")&&(c=document.getElementById("dialogHelpMenu"),e={width:"360px",top:"400px"},e[J?"right":"left"]="425px",d=b[4].u())}else 9==I&&-1==a.indexOf("maze_ifElse")&&(c=document.getElementById("dialogHelpIfElse"),e={width:"360px",top:"305px"},e[J?"right":"left"]="425px",d=b[5].u());c?c.parentNode!=document.getElementById("dialog")&&Y.pc(c,d,!0,!1,e,null):Y.va(!1)}var Rl,Ql;
function Ll(a){for(var b=0;b<Z.length;b++)window.clearTimeout(Z[b]);Z=[];F=nc.x;G=nc.y;a?(H=2,Sl(!1),Z.push(setTimeout(function(){E=100;Tl([F,G,4*H-4]);H++},5*E))):(H=1,Ul(F,G,4*H));a=document.getElementById("finish");a.setAttribute("x",50*(oc.x+.5)-a.getAttribute("width")/2);a.setAttribute("y",50*(oc.y+.6)-a.getAttribute("height"));a=document.getElementById("look");a.style.display="none";a.parentNode.appendChild(a);a=a.getElementsByTagName("path");for(var b=0,c;c=a[b];b++)c.setAttribute("stroke",
yl.Tf)}function Nl(a){if(!X.jb(a))if(Y.va(!1),1==I&&1<Kc(C).length&&1!=Hl&&!ul(I))Pl();else{a=document.getElementById("runButton");var b=document.getElementById("resetButton");b.style.minWidth||(b.style.minWidth=a.offsetWidth+"px");a.style.display="none";b.style.display="inline";gh(C,!0);Ll(!1);Vl()}}function Ol(a){X.jb(a)||(document.getElementById("runButton").style.display="inline",document.getElementById("resetButton").style.display="none",gh(C,!1),Ll(!1),Pl())}
function Wl(a,b){var c;c=function(a){Xl(0,a.toString())};a.setProperty(b,"moveForward",a.createNativeFunction(c));c=function(a){Xl(2,a.toString())};a.setProperty(b,"moveBackward",a.createNativeFunction(c));c=function(a){Yl(0,a.toString())};a.setProperty(b,"turnLeft",a.createNativeFunction(c));c=function(a){Yl(1,a.toString())};a.setProperty(b,"turnRight",a.createNativeFunction(c));c=function(b){return a.createPrimitive(Zl(0,b.toString()))};a.setProperty(b,"isPathForward",a.createNativeFunction(c));
c=function(b){return a.createPrimitive(Zl(1,b.toString()))};a.setProperty(b,"isPathRight",a.createNativeFunction(c));c=function(b){return a.createPrimitive(Zl(2,b.toString()))};a.setProperty(b,"isPathBackward",a.createNativeFunction(c));c=function(b){return a.createPrimitive(Zl(3,b.toString()))};a.setProperty(b,"isPathLeft",a.createNativeFunction(c));a.setProperty(b,"notDone",a.createNativeFunction(function(){return a.createPrimitive(F!=oc.x||G!=oc.y)}))}
function Vl(){if("Interpreter"in window){pc=[];var a=U,b=C,c=[];a.D(b);for(var b=Kc(b,!0),d=0,e;e=b[d];d++){var g=dk(a,e);n(g)&&(g=g[0]);g&&(e.J&&a.Zh&&(g=a.Zh(g)),c.push(g))}c=c.join("\n");c=a.finish(c);c=c.replace(/^\s+\n/,"");c=c.replace(/\n\s+$/,"\n");c=c.replace(/[ \t]+\n/g,"\n");Hl=0;a=new Interpreter(c,Wl);try{for(c=1E4;a.step();)if(0==c--)throw Infinity;Hl=F!=oc.x||G!=oc.y?-1:1}catch(h){Infinity===h?Hl=2:!1===h?Hl=-2:(Hl=-2,alert(h))}1==Hl?(E=100,pc.push(["finish",null])):E=150;Ll(!1);Z.push(setTimeout($l,
100))}else setTimeout(Vl,250)}
function $l(){var a=pc.shift();if(a){X.me(a[1]);switch(a[0]){case "north":Tl([F,G-1,4*H]);G--;break;case "east":Tl([F+1,G,4*H]);F++;break;case "south":Tl([F,G+1,4*H]);G++;break;case "west":Tl([F-1,G,4*H]);F--;break;case "look_north":am(0);break;case "look_east":am(1);break;case "look_south":am(2);break;case "look_west":am(3);break;case "fail_forward":bm(!0);break;case "fail_backward":bm(!1);break;case "left":Tl([F,G,4*H-4]);H=cm(H-1);break;case "right":Tl([F,G,4*H+4]);H=cm(H+1);break;case "finish":Sl(!0),
X.gk(),setTimeout(Y.Pi,1E3)}Z.push(setTimeout($l,5*E))}else X.me(null),Pl()}function Ml(a){if("dialogHiddenContent"!=document.getElementById("dialogDone").className){var b=document.getElementById("pegSpin"),c=Y.uh(b),d=a.clientX-(c.x+c.width/2-window.pageXOffset);a=Math.atan((a.clientY-(c.y+c.height/2-window.pageYOffset))/d);a=a/Math.PI*180;d=Math.round((0<d?a+90:a+270)/360*16);16==d&&(d=15);b.style.backgroundPosition=49*-d+"px 0px"}}
function Tl(a){var b=[F,G,4*H],c=[(a[0]-b[0])/4,(a[1]-b[1])/4,(a[2]-b[2])/4];Ul(b[0]+c[0],b[1]+c[1],dm(b[2]+c[2]));Z.push(setTimeout(function(){Ul(b[0]+2*c[0],b[1]+2*c[1],dm(b[2]+2*c[2]))},E));Z.push(setTimeout(function(){Ul(b[0]+3*c[0],b[1]+3*c[1],dm(b[2]+3*c[2]))},2*E));Z.push(setTimeout(function(){Ul(a[0],a[1],dm(a[2]))},3*E))}
function bm(a){var b=0,c=0;switch(H){case 0:c=-1;break;case 1:b=1;break;case 2:c=1;break;case 3:b=-1}a||(b=-b,c=-c);if(1==yl.Ud){var b=b/4,c=c/4,d=dm(4*H);Ul(F+b,G+c,d);Dj("fail",.5);Z.push(setTimeout(function(){Ul(F,G,d)},E));Z.push(setTimeout(function(){Ul(F+b,G+c,d);Dj("fail",.5)},2*E));Z.push(setTimeout(function(){Ul(F,G,d)},3*E))}else{var e=10*(Math.random()-.5),g=(Math.random()-.5)/2,b=b+(Math.random()-.5)/4,c=c+(Math.random()-.5)/4,b=b/8,c=c/8,h=0;3==yl.Ud&&(h=.01);Z.push(setTimeout(function(){Dj("fail",
.5)},2*E));a=function(a){return function(){var d=dm(4*H+g*a);Ul(F+b*a,G+c*a,d,e*a);c+=h}};for(var k=1;100>k;k++)Z.push(setTimeout(a(k),E*k/2))}}function Sl(a){var b=dm(4*H);Ul(F,G,16);a&&Dj("win",.5);E=150;Z.push(setTimeout(function(){Ul(F,G,18)},E));Z.push(setTimeout(function(){Ul(F,G,16)},2*E));Z.push(setTimeout(function(){Ul(F,G,b)},3*E))}
function Ul(a,b,c,d){var e=document.getElementById("pegman");e.setAttribute("x",50*a-49*c+1);e.setAttribute("y",50*(b+.5)-26-8);d?e.setAttribute("transform","rotate("+d+", "+(50*a+25)+", "+(50*b+25)+")"):e.setAttribute("transform","rotate(0, 0, 0)");b=document.getElementById("clipRect");b.setAttribute("x",50*a+1);b.setAttribute("y",e.getAttribute("y"))}
function am(a){var b=F,c=G;switch(a){case 0:b+=.5;break;case 1:b+=1;c+=.5;break;case 2:b+=.5;c+=1;break;case 3:c+=.5}b*=50;c*=50;a=90*a-45;var d=document.getElementById("look");d.setAttribute("transform","translate("+b+", "+c+") rotate("+a+" 0 0) scale(.4)");a=d.getElementsByTagName("path");d.style.display="inline";for(b=0;d=a[b];b++)em(d,E*b)}function em(a,b){Z.push(setTimeout(function(){a.style.display="inline";setTimeout(function(){a.style.display="none"},2*E)},b))}
function cm(a){a=Math.round(a)%4;0>a&&(a+=4);return a}function dm(a){a=Math.round(a)%16;0>a&&(a+=16);return a}function Xl(a,b){if(!Zl(a,null))throw pc.push(["fail_"+(a?"backward":"forward"),b]),!1;var c;switch(cm(H+a)){case 0:G--;c="north";break;case 1:F++;c="east";break;case 2:G++;c="south";break;case 3:F--,c="west"}pc.push([c,b])}function Yl(a,b){a?(H++,pc.push(["right",b])):(H--,pc.push(["left",b]));H=cm(H)}
function Zl(a,b){var c,d;switch(cm(H+a)){case 0:c=Cl[G-1]&&Cl[G-1][F];d="look_north";break;case 1:c=Cl[G][F+1];d="look_east";break;case 2:c=Cl[G+1]&&Cl[G+1][F];d="look_south";break;case 3:c=Cl[G][F-1],d="look_west"}b&&pc.push([d,b]);return 0!==c&&void 0!==c};