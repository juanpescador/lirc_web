function FastClick(t){"use strict";var e,n=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)},void 0!==window.ontouchstart&&(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var r=Node.prototype.removeEventListener;"click"===e?r.call(t,e,n.hijacked||n,i):r.call(t,e,n,i)},t.addEventListener=function(e,n,i){var r=Node.prototype.addEventListener;"click"===e?r.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):r.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}(function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),r=i.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==r&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in i){n=i[o++];break}if(++o>=r)throw new TypeError}for(;r>o;)o in i&&(n=e.call(t,n,i[o],o,i)),o++;return n})})();var Zepto=function(){function t(t){return null==t?t+"":V[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&t.__proto__==Object.prototype}function s(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function c(t){return j.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function l(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in I?I[t]:I[t]=RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||M[l(t)]?e:e+"px"}function d(t){var e,n;return P[t]||(e=$.createElement(t),$.body.appendChild(e),n=L(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),P[t]=n),P[t]}function p(t){return"children"in t?F.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function m(t,e,n){for(E in e)n&&(o(e[E])||s(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),s(e[E])&&!s(t[E])&&(t[E]=[]),m(t[E],e[E],n)):e[E]!==C&&(t[E]=e[E])}function v(t,e){return e===C?T(t):T(t).filter(e)}function g(t,n,i,r){return e(n)?n.call(t,i,r):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,i=n&&n.baseVal!==C;return e===C?i?n.baseVal:n:(i?n.baseVal=e:t.className=e,void 0)}function w(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function k(t,e){e(t);for(var n in t.childNodes)k(t.childNodes[n],e)}var C,E,T,x,S,O,N=[],F=N.slice,j=N.filter,$=window.document,P={},I={},L=$.defaultView.getComputedStyle,M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=/^\s*<(\w+|!)[^>]*>/,D=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,R=["val","css","html","text","data","width","height","offset"],Z=["after","prepend","before","append"],z=$.createElement("table"),X=$.createElement("tr"),B={tr:$.createElement("tbody"),tbody:z,thead:z,tfoot:z,td:X,th:X,"*":$.createElement("div")},U=/complete|loaded|interactive/,Y=/^\.([\w-]+)$/,q=/^#([\w-]*)$/,H=/^[\w-]+$/,V={},J=V.toString,W={},G=$.createElement("div");return W.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~W.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},S=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},O=function(t){return j.call(t,function(e,n){return t.indexOf(e)==n})},W.fragment=function(t,e,n){t.replace&&(t=t.replace(D,"<$1></$2>")),e===C&&(e=A.test(t)&&RegExp.$1),e in B||(e="*");var i,r,s=B[e];return s.innerHTML=""+t,r=T.each(F.call(s.childNodes),function(){s.removeChild(this)}),o(n)&&(i=T(r),T.each(n,function(t,e){R.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},W.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},W.isZ=function(t){return t instanceof W.Z},W.init=function(t,n){if(!t)return W.Z();if(e(t))return T($).ready(t);if(W.isZ(t))return t;var i;if(s(t))i=c(t);else if(r(t))i=[o(t)?T.extend({},t):t],t=null;else if(A.test(t))i=W.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==C)return T(n).find(t);i=W.qsa($,t)}return W.Z(i,t)},T=function(t,e){return W.init(t,e)},T.extend=function(t){var e,n=F.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},W.qsa=function(t,e){var n;return i(t)&&q.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:F.call(Y.test(e)?t.getElementsByClassName(RegExp.$1):H.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=function(t,e){return t!==e&&t.contains(e)},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=s,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},T.camelCase=S,T.trim=function(t){return t.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;t.length>i;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;t.length>n;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return j.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(F.apply(this,arguments))},ready:function(t){return U.test($.readyState)?t(T):$.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===C?F.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(j.call(this,function(e){return W.matches(e,t)}))},add:function(t,e){return T(O(this.concat(T(t,e))))},is:function(t){return this.length>0&&W.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==C)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?F.call(t):T(t);this.forEach(function(t){0>i.indexOf(t)&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return r(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:T(t)},find:function(t){var e,n=this;return e="object"==typeof t?T(t).filter(function(){var t=this;return N.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(W.qsa(this[0],t)):this.map(function(){return W.qsa(this,t)})},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=T(t));n&&!(r?r.indexOf(n)>=0:W.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!i(t)&&0>e.indexOf(t)?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(O(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return F.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return j.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==L(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===C?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===C?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;T(this).empty().append(g(this,t,e,n))})},text:function(t){return t===C?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===C?0==this.length||1!==this[0].nodeType?C:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,g(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===C?this[0]&&this[0][t]:this.each(function(n){this[t]=g(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+l(t),e);return null!==n?w(n):C},val:function(t){return t===C?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=g(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=g(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(2>arguments.length&&"string"==typeof e)return this[0]&&(this[0].style[S(e)]||L(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=l(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(l(e))});else for(E in e)e[E]||0===e[E]?i+=l(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(l(E))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return N.some.call(this,function(t){return this.test(b(t))},h(t))},addClass:function(t){return this.each(function(e){x=[];var n=b(this),i=g(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||x.push(t)},this),x.length&&b(this,n+(n?" ":"")+x.join(" "))})},removeClass:function(t){return this.each(function(e){return t===C?b(this,""):(x=b(this),g(this,t,e,x).split(/\s+/g).forEach(function(t){x=x.replace(h(t)," ")}),b(this,x.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=T(this),r=g(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===C?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=_.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||$.body;t&&!_.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){T.fn[t]=function(e){var r,o=this[0],s=t.replace(/./,function(t){return t[0].toUpperCase()});return e===C?n(o)?o["inner"+s]:i(o)?o.documentElement["offset"+s]:(r=this.offset())&&r[t]:this.each(function(n){o=T(this),o.css(t,g(this,e,n,o[t]()))})}}),Z.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,r,o=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:W.fragment(n)}),s=this.length>1;return 1>o.length?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!r)return T(t).remove();k(r.insertBefore(t,e),function(t){null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||"text/javascript"===t.type)&&!t.src&&window.eval.call(window,t.innerHTML)})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),W.Z.prototype=T.fn,W.uniq=O,W.deserializeValue=w,T.zepto=W,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),r=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=a&&t.match(/TouchPad/),u=t.match(/Kindle\/([\d.]+)/),l=t.match(/Silk\/([\d._]+)/),h=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),d=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),m=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),v=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),s&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),c&&(e.touchpad=!0),h&&(e.blackberry=!0,e.version=h[2]),f&&(e.bb10=!0,e.version=f[2]),d&&(e.rimtabletos=!0,e.version=d[2]),p&&(n.playbook=!0),u&&(e.kindle=!0,e.version=u[1]),l&&(n.silk=!0,n.version=l[1]),!l&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),m&&(n.chrome=!0,n.version=m[1]),v&&(n.firefox=!0,n.version=v[1]),e.tablet=!!(o||p||r&&!t.match(/Mobile/)||v&&t.match(/Tablet/)),e.phone=!e.tablet&&!!(r||s||a||h||f||m&&t.match(/Android/)||m&&t.match(/CriOS\/([\d.]+)/)||v&&t.match(/Mobile/))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=d++)}function n(t,n,o,s){if(n=i(n),n.ns)var a=r(n.ns);return(f[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||o&&e(t.fn)!==e(o)||s&&t.sel!=s)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function s(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return m[t]||t}function c(n,r,c,u,l,h){var d=e(n),p=f[d]||(f[d]=[]);o(r,c,function(e,r){var o=i(e);o.fn=r,o.sel=u,o.e in m&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=l&&l(r,e);var c=o.del||r;o.proxy=function(t){var e=c.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=p.length,p.push(o),n.addEventListener(a(o.e),o.proxy,s(o,h))})}function u(t,i,r,c,u){var l=e(t);o(i||"",r,function(e,i){n(t,e,i,c).forEach(function(e){delete f[l][e.i],t.removeEventListener(a(e.e),e.proxy,s(e,u))})})}function l(e){var n,i={originalEvent:e};for(n in e)!y.test(n)&&void 0!==e[n]&&(i[n]=e[n]);return t.each(b,function(t,n){i[t]=function(){return this[n]=v,e[t].apply(e,arguments)},i[n]=g}),i}function h(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var f=(t.zepto.qsa,{}),d=1,p={},m={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:c,remove:u},t.proxy=function(n,i){if(t.isFunction(n)){var r=function(){return n.apply(i,arguments)};return r._zid=e(n),r}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){u(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){c(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return u(i,e,t),n}})})};var v=function(){return!0},g=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(r,o){c(o,n,i,e,function(n){return function(i){var r,s=t(i.target).closest(e,o).get(0);return s?(r=t.extend(l(i),{currentTarget:s,liveFired:o}),n.apply(s,[r].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){u(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),h(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(s,a){r=l("string"==typeof e?t.Event(e):e),r.data=i,r.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.defaultPrevented}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function s(t,e,i){var r=i.context,o="success";i.success.call(r,t,o,e),n(i,r,"ajaxSuccess",[e,i,t]),c(o,e,i)}function a(t,e,i,r){var o=r.context;r.error.call(o,i,e,t),n(r,o,"ajaxError",[i,r,t]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==C?"json":w.test(t)?"script":k.test(t)&&"xml")||"text"}function h(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),e.data&&(!e.type||"GET"==e.type.toUpperCase())&&(e.url=h(e.url,e.data))}function d(e,n,i,r){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(i)?i:void 0:n,dataType:o?r||i:i}}function p(e,n,i,r){var o,s=t.isArray(n);t.each(n,function(n,a){o=t.type(a),r&&(n=i?r:r+"["+(s?"":n)+"]"),!r&&s?e.add(a.name,a.value):"array"==o||!i&&"object"==o?p(e,a,i,n):e.add(n,a)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,k=/^(?:text|application)\/xml/i,C="application/json",E="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if("type"in e){var n,i="jsonp"+ ++g,r=y.createElement("script"),c=function(){clearTimeout(n),t(r).remove(),delete window[i]},l=function(t){c(),t&&"timeout"!=t||(window[i]=u),a(null,t||"abort",h,e)},h={abort:l};return o(h,e)===!1?(l("abort"),!1):(window[i]=function(t){c(),s(t,h,e)},r.onerror=function(){l("error")},r.src=e.url.replace(/=\?/,"="+i),t("head").append(r),e.timeout>0&&(n=setTimeout(function(){l("timeout")},e.timeout)),h)}return t.ajax(e)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:C,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=""+window.location),f(n),n.cache===!1&&(n.url=h(n.url,"_="+Date.now()));var r=n.dataType,c=/=\?/.test(n.url);if("jsonp"==r||c)return c||(n.url=h(n.url,"callback=?")),t.ajaxJSONP(n);var d,p=n.accepts[r],g={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(g["X-Requested-With"]="XMLHttpRequest"),p&&(g.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(g["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(g,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=u,clearTimeout(d);var e,i=!1;if(b.status>=200&&300>b.status||304==b.status||0==b.status&&"file:"==y){r=r||l(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==r?(1,eval)(e):"xml"==r?e=b.responseXML:"json"==r&&(e=T.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?a(i,"parsererror",b,n):s(e,b,n)}else a(null,b.status?"error":"abort",b,n)}};var w="async"in n?n.async:!0;b.open(n.type,n.url,w);for(v in n.headers)b.setRequestHeader(v,n.headers[v]);return o(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(d=setTimeout(function(){b.onreadystatechange=u,b.abort(),a(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,s=e.split(/\s/),a=d(e,n,i),c=a.success;return s.length>1&&(a.url=s[0],r=s[1]),a.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(a),this};var x=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(x(t)+"="+x(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function r(t){return o?o+t:i(t)}var o,s,a,c,u,l,h,f,d="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},m=window.document,v=m.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(p,function(t,n){return v.style[t+"TransitionProperty"]!==e?(d="-"+i(t)+"-",o=n,!1):void 0}),s=d+"transform",y[a=d+"transition-property"]=y[c=d+"transition-duration"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[h=d+"animation-duration"]=y[f=d+"animation-timing-function"]="",t.fx={off:o===e&&v.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(e,n,i,r){return t.isPlainObject(n)&&(i=n.easing,r=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,r)},t.fn.anim=function(i,r,o,d){var p,m,v,b={},w="",k=this,C=t.fx.transitionEnd;if(r===e&&(r=.4),t.fx.off&&(r=0),"string"==typeof i)b[l]=i,b[h]=r+"s",b[f]=o||"linear",C=t.fx.animationEnd;else{m=[];for(p in i)g.test(p)?w+=p+"("+i[p]+") ":(b[p]=i[p],m.push(n(p)));w&&(b[s]=w,m.push(s)),r>0&&"object"==typeof i&&(b[a]=m.join(", "),b[c]=r+"s",b[u]=o||"linear")}return v=function(e){if(e!==void 0){if(e.target!==e.currentTarget)return;t(e.target).unbind(C,v)}t(this).css(y),d&&d.call(this)},r>0&&this.bind(C,v),this.size()&&this.get(0).clientLeft,this.css(b),0>=r&&setTimeout(function(){k.each(function(){v.call(this)})},0),this},v=null}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var r=Math.abs(t-e),o=Math.abs(n-i);return r>=o?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){u=null,l.last&&(l.el.trigger("longTap"),l={})}function r(){u&&clearTimeout(u),u=null}function o(){s&&clearTimeout(s),a&&clearTimeout(a),c&&clearTimeout(c),u&&clearTimeout(u),s=a=c=u=null,l={}}var s,a,c,u,l={},h=750;t(document).ready(function(){var f,d;t(document.body).bind("touchstart",function(n){f=Date.now(),d=f-(l.last||f),l.el=t(e(n.touches[0].target)),s&&clearTimeout(s),l.x1=n.touches[0].pageX,l.y1=n.touches[0].pageY,d>0&&250>=d&&(l.isDoubleTap=!0),l.last=f,u=setTimeout(i,h)}).bind("touchmove",function(t){r(),l.x2=t.touches[0].pageX,l.y2=t.touches[0].pageY,Math.abs(l.x1-l.x2)>10&&t.preventDefault()}).bind("touchend",function(){r(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?c=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+n(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,l.el.trigger(e),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):s=setTimeout(function(){s=null,l.el.trigger("singleTap"),l={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"input":return this.deviceIsIOS&&"file"===t.type?!0:t.disabled;case"label":case"video":return!0;default:return/\bneedsclick\b/.test(t.className)}},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,200>t.timeStamp-this.lastClickTime&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0];return Math.abs(e.pageX-this.touchStartX)>10||Math.abs(e.pageY-this.touchStartY)>10?!0:!1},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,r,o,s=this.targetElement;if(this.touchHasMoved(t)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>t.timeStamp-this.lastClickTime)return this.cancelNextClick=!0,!0;if(this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(o=t.changedTouches[0],s=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)),i=s.tagName.toLowerCase(),"label"===i){if(e=this.findControl(s)){if(this.focus(s),this.deviceIsAndroid)return!1;
s=e}}else if(this.needsFocus(s))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(r=s.fastClickScrollParent,r&&r.fastClickLastScrollTop!==r.scrollTop)?!0:(this.needsClick(s)||(t.preventDefault(),this.sendClick(s,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.attach=function(t){"use strict";return new FastClick(t)},"undefined"!=typeof define&&define.amd&&define(function(){"use strict";return FastClick}),"undefined"!=typeof module&&module.exports&&(module.exports=FastClick.attach,module.exports.FastClick=FastClick);var OSUR={util:{}};$(function(){$(".command-link").on("click",function(){$.ajax({type:"POST",url:$(this).attr("href"),success:function(){},error:function(){}})}),OSUR.util.hasTouchEvents()?($("body").addClass("has-touch"),$(".command-link, .remote-link").on("touchstart",function(){$(this).addClass("active")}),$(".command-link, .remote-link").on("touchend",function(){$(this).removeClass("active")}),$("body").on("touchcancel",function(){$(".command-link").removeClass("active")})):$("body").addClass("no-touch"),$(".back").on("click",function(){$(".remote.active").removeClass("active"),$(".remotes-nav").removeClass("hidden"),$(".back").addClass("hidden"),$("#title").html($("#title").attr("data-text")),$("#titlebar").removeClass("is-remote")}),$(".remotes-nav a").on("click",function(t){t.preventDefault();var e=$(this).attr("href");$(".remotes-nav").addClass("hidden"),$(e).addClass("active"),$(".back").removeClass("hidden"),$("#title").html($(this).html()),$("#titlebar").addClass("is-remote")}),OSUR.fastClick=new FastClick(document.body)}),OSUR.util.hasTouchEvents=function(){var t;return("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(t=!0),t};