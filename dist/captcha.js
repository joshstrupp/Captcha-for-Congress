!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(3)(o,i);o.locals&&(e.exports=o.locals)},function(e,t,n){(t=e.exports=n(2)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap);",""]),t.push([e.i,'.C4C__shadow {\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  transition: 0.2s opacity;\n  z-index: 99999; }\n  .C4C__shadow.active {\n    opacity: 1; }\n  .C4C__shadow.C4C__shadow--hideShadow {\n    background: transparent;\n    pointer-events: none; }\n\n.C4C__modal {\n  background: #0e2ce4;\n  box-shadow: 0 0 0 6px #0e2ce4;\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n  letter-spacing: 0;\n  overflow: hidden;\n  position: relative;\n  pointer-events: auto;\n  width: 300px; }\n  @media screen and (max-width: 480px) {\n    .C4C__modal {\n      width: 260px; } }\n\n.C4C__header {\n  background: #0e2ce4;\n  box-shadow: 0 0 0 1px #0e2ce4;\n  color: #fff;\n  padding: 15px; }\n  .C4C__header p {\n    font-size: 12px;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    margin: 0; }\n  .C4C__header .C4C__text--large {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 21px;\n    font-weight: 600;\n    margin: 0.2em 0; }\n\n.C4C__footer {\n  background: #fff;\n  text-align: right;\n  padding: 0 8px 8px; }\n\n.C4C__button {\n  appearance: none;\n  background: #0e2ce4;\n  border: 0 none;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: "Roboto", Helvetica, Arial, sans-serif;\n  line-height: 1.15;\n  letter-spacing: 0;\n  display: inline-block;\n  padding: 0.6em 1.5em;\n  transition: 0.2s background-color, 0.2s transform;\n  transform-origin: 100% 100%; }\n  .C4C__button:active, .C4C__button:hover {\n    background: #081984;\n    transform: scale(1.1); }\n\n.C4C__image-container {\n  background: #fff;\n  padding: 8px; }\n  .C4C__image-container .C4C__image__outer {\n    cursor: pointer;\n    float: left;\n    margin: 0 8px 8px 0;\n    padding-bottom: 32%;\n    position: relative;\n    width: calc(33.333% - 5.333px);\n    transition: 0.2s transform; }\n    .C4C__image-container .C4C__image__outer:focus {\n      box-shadow: 0 0 0 4px #0e2ce4;\n      outline: none; }\n    .C4C__image-container .C4C__image__outer:hover {\n      transform: rotate(2deg) scale(0.95); }\n    .C4C__image-container .C4C__image__outer:nth-child(3n + 3) {\n      margin-right: 0; }\n    .C4C__image-container .C4C__image__outer:nth-child(7), .C4C__image-container .C4C__image__outer:nth-child(8), .C4C__image-container .C4C__image__outer:nth-child(9) {\n      margin-bottom: 0; }\n    .C4C__image-container .C4C__image__outer:after {\n      background-color: #2bbe4e;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzMjAuOSAyNTEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIwLjkgMjUxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWxpbmUgY2xhc3M9InN0MCIgZmlsbD0iI2ZmZiIgcG9pbnRzPSIxNTQuNiwyMDguNyAzMjAuOSw0Mi40IDI3OC41LDAgMTEyLjIsMTY2LjMgNDIuNCw5Ni41IDAsMTM4LjkgMTEyLjUsMjUxLjQgIi8+PC9zdmc+Cg==);\n      background-size: 70%;\n      background-repeat: no-repeat;\n      background-position: center center;\n      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.25);\n      content: "";\n      color: #fff;\n      display: block;\n      font-size: 11px;\n      line-height: 18px;\n      border-radius: 50%;\n      height: 16px;\n      opacity: 0;\n      transform: translate(-30%, -30%) rotate(-45deg);\n      width: 16px;\n      position: absolute;\n      text-align: center;\n      top: 0;\n      left: 0;\n      transform-origin: 0 0;\n      transition: 0.2s all; }\n    .C4C__image-container .C4C__image__outer.active {\n      transform: scale(0.9); }\n      .C4C__image-container .C4C__image__outer.active:after {\n        opacity: 1;\n        transform: translate(-30%, -30%) rotate(0); }\n  .C4C__image-container img {\n    height: 100%;\n    object-fit: cover;\n    object-position: center 15%;\n    position: absolute;\n    width: 100%; }\n\n.C4C__clearfix:after {\n  content: "";\n  display: table;\n  clear: both; }\n\n.C4C__modalStepTwo {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  opacity: 0;\n  transform: rotate(90deg);\n  transform-origin: 0 100%;\n  transition: 0.3s transform, 0.3s opacity; }\n  .C4C__modalStepTwo.active {\n    opacity: 1;\n    transform: rotate(0); }\n  .C4C__modalStepTwo p {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 14px;\n    line-height: 1.5;\n    margin: 0.75em 0 0.5em; }\n  .C4C__modalStepTwo .C4C__share__eyebrow {\n    margin-bottom: 0.7rem;\n    font-size: 0.7rem;\n    position: relative; }\n    .C4C__modalStepTwo .C4C__share__eyebrow:before {\n      content: "";\n      display: block;\n      position: absolute;\n      top: -130px;\n      height: 120px;\n      width: 2px;\n      background: #ef0d00;\n      left: calc(50% - 1px);\n      z-index: -1; }\n  .C4C__modalStepTwo h2 {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 22px;\n    text-transform: none;\n    font-weight: bold;\n    margin: 0; }\n\n.C4C__modalStepTwo__body {\n  background: #ef0d00;\n  color: #fff;\n  text-align: center;\n  padding: 30px 15px; }\n  .C4C__modalStepTwo__body.C4C__modalStepTwo__body--large {\n    padding: 35px 15px; }\n    .C4C__modalStepTwo__body.C4C__modalStepTwo__body--large h2 {\n      font-size: 2.3rem;\n      font-weight: bold; }\n  .C4C__modalStepTwo__body h2 {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-weight: bold;\n    text-transform: none;\n    font-size: 1.8rem; }\n  .C4C__modalStepTwo__body p {\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-size: 0.9rem; }\n  .C4C__modalStepTwo__body p:last-child {\n    margin-bottom: 0; }\n\n.C4C__share {\n  flex-grow: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 15px;\n  position: relative;\n  text-align: center; }\n  .C4C__share h2 {\n    color: #0e2ce4;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    font-weight: bold;\n    font-size: 2rem;\n    text-transform: none;\n    line-height: 1;\n    margin: 0 0 0.9rem;\n    text-transform: none; }\n  .C4C__share p {\n    font-size: 14px;\n    font-family: "Roboto", Helvetica, Arial, sans-serif;\n    line-height: 1.15;\n    letter-spacing: 0;\n    margin: 0; }\n  .C4C__share .caps {\n    font-weight: 600;\n    text-transform: uppercase; }\n\n.C4C__share__button {\n  background: #fff;\n  border: 2px solid #ef0d00;\n  color: #0e2ce4;\n  display: inline-block;\n  text-decoration: none;\n  width: 40px;\n  height: 40px;\n  margin: 10px 10px 0;\n  border-radius: 50%;\n  position: relative;\n  transition: 0.2s transform, 0.2s box-shadow;\n  box-shadow: -4px 4px 0 0 #ef0d00; }\n  .C4C__share__button:hover {\n    transform: translate(-4px, 4px);\n    box-shadow: 0 0 0 0 #ef0d00; }\n  .C4C__share__button svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 24px;\n    width: 24px;\n    transform: translate(-50%, -50%); }\n  .C4C__share__button path {\n    fill: #0e2ce4; }\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(r).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,l=0,d=[],p=n(4);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(C(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(C(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(e,t){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],a=t.base?r[0]+t.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,n);n.insertBefore(t,i)}}function _(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return g(t,e.attrs),h(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function C(e,t){var n,o,i,r;if(t.transform&&e.css){if(!(r="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=r}if(t.singleton){var a=l++;n=c||(c=m(t)),o=v.bind(null,n,a,!1),i=v.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),h(e,t),t}(t),o=function(e,t,n){var o=n.css,i=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||r)&&(o=p(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){_(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){_(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=u(e,t);return f(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&f(u(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function v(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);n(0);var o='<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg>',i='<svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>',r=[{name:"Rand Paul",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rand_Paul%2C_official_portrait%2C_112th_Congress.jpg/946px-Rand_Paul%2C_official_portrait%2C_112th_Congress.jpg",belief:"thinks most abortions should be illegal, even in cases of rape, incest."},{name:"Lindsey Graham",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lindsey_Graham%2C_Official_Portrait_2006.jpg/946px-Lindsey_Graham%2C_Official_Portrait_2006.jpg"},{name:"Ted Cruz",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ted_Cruz%2C_official_portrait%2C_113th_Congress.jpg/960px-Ted_Cruz%2C_official_portrait%2C_113th_Congress.jpg"},{name:"Jason Chaffetz",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Jason_Chaffetz%2C_official_portrait%2C_111th_Congress.jpg/360px-Jason_Chaffetz%2C_official_portrait%2C_111th_Congress.jpg"},{name:"Donald Trump",photo:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Donald_Trump_September_2017.png"},{name:"Mike Pence",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mike_Pence_official_Vice_Presidential_portrait.jpg/192px-Mike_Pence_official_Vice_Presidential_portrait.jpg"},{name:"Mitch McConnell",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mitch_McConnell_official_portrait_112th_Congress.jpg/946px-Mitch_McConnell_official_portrait_112th_Congress.jpg"},{name:"Louie Gohmert",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Louie_Gohmert_official_photo_2.jpg/800px-Louie_Gohmert_official_photo_2.jpg"},{name:"Devin Nunes",photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Devin_Nunes.jpg/384px-Devin_Nunes.jpg"}];const a={mount:y,DEBUG:!1};window.C4C=a;const s=document.createElement("div"),c=document.createElement("div"),l=document.createElement("header"),d=document.createElement("div"),p=document.createElement("footer"),f=document.createElement("button"),u=document.createElement("div");let h=!1,_=-1,m=-1;function g(e){e.target.closest(".C4C__image__outer").classList.toggle("active")}function C(e,t=!1,n=!1){document.body.appendChild(s),t&&s.classList.add("C4C__shadow--hideShadow"),s.__C4C_escReset=n,setTimeout(()=>{document.body.style.overflow="hidden";const{width:t,height:n}=c.getBoundingClientRect();let o=e.pageX-t/2;o<0&&(o=0),o>window.innerWidth-t&&(o=window.innerWidth-t);let i=e.pageY-n/2;i<0&&(i=0),i+n>window.innerHeight&&(i=window.innerHeight-n),s.classList.add("active"),c.style.left=o+"px",_=o/window.innerWidth,c.style.top=i+"px",m=i/window.innerHeight,function(){if(h)return;h=!0;const e=window.location.host+window.location.pathname;fetch("https://script.google.com/macros/s/AKfycbwVe12OgYnwyvJ91EwUOJjj5g02lQlbTC_g1wr2pumW32ePtPA/exec",{method:"POST",body:e,headers:{"Content-Type":"text/plain;charset=utf-8"}})}()},100)}function b(){document.body.style.overflow="",s.classList.remove("active"),Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(e=>e.parentNode.classList.remove("active")),setTimeout(()=>{document.body.removeChild(s),u.classList.remove("active")},100)}function w(){!function(e){u.innerHTML="";const t=document.createElement("div");if(t.classList.add("C4C__modalStepTwo__body"),e<9){const e=Array.from(document.querySelectorAll("[data-captcha-img]")).filter(e=>!e.parentNode.classList.contains("active"))[0].getAttribute("alt");t.innerHTML=`<h2>Hold up there...</h2>\n      <p><small>Do you really want ${e} in the driver's seat of your uterus?</small></p>`}else t.classList.add("C4C__modalStepTwo__body--large"),t.innerHTML="<h2>You Got It!</h2><p>Lawmakers should not be part of our family planning process.</p>";u.appendChild(t);const n=document.createElement("div");n.classList.add("C4C__share"),n.innerHTML=`<div>\n    <p class="caps C4C__share__eyebrow">But what can I do about it?</p>\n      <h2>Share Captcha for Congress</h2>\n      <p>Help keep reproductive rights at the top of everyone's mind on the Internet.</p>\n      <div>\n        <a class="C4C__share__button" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcaptchaforcongress.com&text=Bots%20don%27t%20belong%20on%20the%20Internet.%20Congress%20doesn%27t%20belong%20between%20our%20legs.%20Get%20Captcha%20for%20Congress%20and%20show%20your%20support%20for%20reproductive%20rights!" target="_blank">${i}</a>\n        <a class="C4C__share__button" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaptchaforcongress.com" target="_blank">${o}</a>\n      </div>\n    </div>`,u.appendChild(n),u.classList.add("active")}(Array.from(document.querySelectorAll("[data-captcha-img]")).filter(e=>e.parentNode.classList.contains("active")).length)}function v(e){if(window.C4C.DEBUG&&console.log("mounting",e),"auto"===e.getAttribute("data-c4c")){const t=e.getBoundingClientRect();C({pageX:t.left+t.width/2,pageY:t.top+t.height/2},"none"===e.getAttribute("data-c4c-shadow"),"reset"===e.getAttribute("data-c4c-esc"))}else e.addEventListener("click",C)}function y(e=null){if(e)return v(e);Array.from(document.querySelectorAll("[data-c4c]")).forEach(v)}s.classList.add("C4C__shadow"),c.classList.add("C4C__modal"),s.appendChild(c),l.classList.add("C4C__header"),l.innerHTML='<p>Select all images of</p>\n    <p class="C4C__text--large">people who should not be planning my family.</p>\n    <p>Click verify once you\'re done.</p>\n  ',c.appendChild(l),d.classList.add("C4C__image-container","C4C__clearfix"),c.appendChild(d),r.forEach(({name:e,photo:t})=>{const n=document.createElement("a");n.classList.add("C4C__image__outer"),n.setAttribute("href","#");const o=document.createElement("img");o.setAttribute("data-captcha-img","1"),o.setAttribute("alt",e),o.src=t,n.appendChild(o),d.appendChild(n)}),p.classList.add("C4C__footer"),f.innerHTML="Verify",f.classList.add("C4C__button"),p.appendChild(f),c.appendChild(p),u.classList.add("C4C__modalStepTwo"),c.appendChild(u),s.addEventListener("click",e=>{if(console.log(e.target),e.target===s&&b(),e.target.classList.contains("C4C__image__outer"))return g(e);e.target.getAttribute("data-captcha-img")&&g(e),e.target===f&&w()}),window.addEventListener("keydown",e=>{if(27===e.keyCode&&s.__C4C_escReset)return Array.from(document.querySelectorAll("[data-captcha-img]")).forEach(e=>e.parentNode.classList.remove("active")),void u.classList.remove("active");27===e.keyCode&&b()}),window.addEventListener("resize",()=>{if(!s.classList.contains("active"))return;const e=_*window.innerWidth,t=m*window.innerHeight;c.style.left=e+"px",c.style.top=t+"px"}),window.addEventListener("DOMContentLoaded",()=>y())}]);