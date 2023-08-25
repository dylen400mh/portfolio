(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>f});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),l=new URL(t(161),t.b),d=new URL(t(529),t.b),p=a()(o()),u=s()(l),m=s()(d);p.push([n.id,`:root {\n  --primary: rgb(29, 42, 59);\n  --secondary: rgb(245, 245, 220);\n  scroll-behavior: smooth;\n  scroll-padding-top: 100px;\n}\n\n* {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nbody {\n  background-color: var(--primary);\n  color: white;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  z-index: 2;\n}\n\nnav {\n  background-color: transparent;\n  padding: 1rem;\n}\n\nbutton {\n  border: none;\n  display: inline-block;\n  background-size: cover;\n  background-position: center;\n  cursor: pointer;\n  background-color: transparent;\n}\n\n.menu-button {\n  width: 32px;\n  height: 32px;\n  background-image: url(${u});\n}\n\n.dropdown-menu {\n  position: fixed;\n  top: -300px;\n  right: 0;\n  padding: 0;\n  width: 70%;\n  background-color: var(--secondary);\n  text-align: center;\n  font-weight: 600;\n  border-bottom-left-radius: 50px;\n  display: flex;\n  justify-content: space-between;\n  transition: transform 0.5s;\n  box-shadow: 5px 5px 15px 3px #000000;\n}\n\n.dropdown-menu ul {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n}\n\n.dropdown-menu li,\n.main-menu li {\n  transition: transform 0.1s;\n}\n\n.dropdown-menu li:hover,\n.main-menu li:hover {\n  transform: translateY(-2px);\n}\n\n.dropdown-menu a,\n.main-menu a {\n  color: black;\n}\n\n.close-menu-button {\n  background-image: url(${m});\n  width: 32px;\n  height: 32px;\n  margin: 1rem;\n  background-size: cover;\n}\n\n.dropdown-menu.visible {\n  transform: translateY(300px);\n  visibility: visible;\n}\n\n.main-menu {\n  display: none;\n  background-color: var(--secondary);\n  width: 100%;\n  font-weight: 600;\n  box-shadow: 5px 5px 15px 3px #000000;\n}\n\n.main-menu ul {\n  display: flex;\n  justify-content: flex-end;\n  gap: 3rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5rem;\n}\n\n.home,\n.about,\n.projects,\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 600px;\n}\n\n.home {\n  justify-content: center;\n  text-align: center;\n  height: 100vh;\n  opacity: 0;\n  transition: opacity 3s;\n}\n\n.home.visible {\n  opacity: 100%;\n}\n\n.home button {\n  color: white;\n  border: 3px solid white;\n  padding: 1rem;\n  font-size: 1rem;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.home button:hover {\n  animation-duration: 0.5s;\n  animation-name: bounce;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n\n@keyframes bounce {\n  from {\n    transform: translateY(0);\n  }\n\n  to {\n    transform: translateY(-5px);\n  }\n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3rem;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 0;\n}\n\n.skill {\n  display: flex;\n  flex-direction: column;\n}\n\n.skill i {\n  font-size: 50px;\n  transition: transform 0.1s;\n}\n\n.skill i:hover {\n  transform: scale(1.1) translateY(-5px);\n}\n\n.skill span {\n  font-size: 12px;\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project {\n  max-width: 600px;\n  border: 1px 0 solid white;\n}\n\n.project img {\n  transition: transform 0.3s;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 10px;\n}\n\n.image-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  border-radius: 10px;\n}\n\n.project img:hover {\n  transform: scale(1.05);\n}\n\n.project p {\n  text-align: center;\n}\n\n.project-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.project button,\nform button {\n  background-color: var(--secondary);\n  color: black;\n  font-size: 16px;\n  padding: 0.5rem;\n  border-radius: 8px;\n}\n\n.project button {\n  transition: transform 0.1s ease-out;\n}\n\n.project button:hover {\n  transform: translateY(-3px);\n}\n\n.contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  max-width: 600px;\n  gap: 0.5rem;\n}\n\nform textarea {\n  height: 8rem;\n}\n\nform input,\nform textarea {\n  background-color: white;\n  color: black;\n  outline: none;\n  border: none;\n  border-radius: 8px;\n  padding: 0.5rem;\n}\n\nfooter nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 3rem;\n}\n\nfooter i {\n  font-size: 32px;\n  color: white;\n}\n\nfooter a,\nfooter img {\n  transition: transform 0.3s;\n}\n\nfooter a:hover,\nfooter img:hover {\n  transform: rotate(360deg);\n}\n\n@media (min-width: 750px) {\n  .hamburger-menu {\n    display: none;\n  }\n\n  .main-menu {\n    display: block;\n  }\n}\n\n@media (min-width: 1200px) {\n  .about,\n  .projects,\n  .contact {\n    max-width: 1000px;\n  }\n\n  .about {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr;\n  }\n\n  .about h1 {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n  }\n\n  .about p {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n  }\n\n  .skills {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding: 0;\n  }\n\n  .project {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto 1fr;\n    max-width: 1000px;\n    gap: 1rem;\n  }\n\n  .project h3 {\n    text-align: center;\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n  }\n\n  .project p {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n  }\n\n  .project-buttons {\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n  }\n\n  .image-container {\n    grid-row: 1 / 4;\n    grid-column: 1 / 2;\n  }\n\n  .project:nth-child(even) .image-container {\n    grid-row: 1 / 4;\n    grid-column: 2 / 3;\n  }\n\n  .project:nth-child(even) h3 {\n    text-align: center;\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n  }\n\n  .project:nth-child(even) p {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n  }\n\n  .project:nth-child(even) .project-buttons {\n    grid-row: 3 / 4;\n    grid-column: 1 / 2;\n  }\n}\n`,""]);const f=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},161:(n,e,t)=>{n.exports=t.p+"images/icons8-menu-fc25c012f08e492cfe6c.svg"},529:(n,e,t)=>{n.exports=t.p+"images/icons8-x-8265f088f188bceed9ff.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),m=t(890),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.querySelector(".home"),h=document.querySelector(".menu-button"),x=document.querySelector(".dropdown-menu"),b=document.querySelector(".close-menu-button"),v=x.querySelector("ul");function y(n){n.stopPropagation(),"visible"===x.style.visibility&&setTimeout((()=>{x.style.visibility="hidden"}),500),x.classList.remove("visible")}h.addEventListener("click",(function(n){n.stopPropagation(),x.classList.add("visible")})),x.addEventListener("click",(n=>{n.stopPropagation()})),v.addEventListener("click",y),b.addEventListener("click",y),document.addEventListener("click",y),window.addEventListener("load",(()=>{g.classList.add("visible")}))})()})();