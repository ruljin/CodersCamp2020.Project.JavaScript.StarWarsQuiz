(()=>{var e={1326:e=>{e.exports={SITES:["index","authors","game","scores","game-over","settings"],LOCAL_STORAGE_SETTINGS:"settings",LOCAL_STORAGE_SCOREBOARD:"scoreboard",LOCAL_STORAGE_PLAYER_CORRECT:"playerCorrectAnswers",LOCAL_STORAGE_COMPUTER_CORRECT:"computerCorrectAnswers",LOCAL_STORAGE_ANSWERS:"answers",CATEGORIES:["people","vehicles","starships"],CATEGORY_PEOPLE_IDS:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],CATEGORY_VEHICLES_IDS:[4,6,7,8,14,16,18,19,20,24,25,26,30,33,34,35,36,37,38,42],CATEGORY_STARSHIPS_IDS:[5,9,10,11,12,13,15,21,22,23,27,28,29,31,39,40,41,43,47,48]}},7071:(e,t,r)=>{const o=r(6769);window.onload=function(){o.removeFromLocalStorage("playerCorrectAnswers"),o.removeFromLocalStorage("computerCorrectAnswers"),o.removeFromLocalStorage("settings"),o.removeFromLocalStorage("answers")};const n=document.querySelector("#buttonSkip"),a=document.querySelector("#starWarsEffect"),i=document.querySelector("#authors"),s=()=>{a.classList.add("star-wars-effect--invisible"),i.classList.remove("container--invisible")};window.addEventListener("load",(()=>{setTimeout((()=>{s()}),6e4)}),!1),n.addEventListener("click",s,!1)},6769:(e,t,r)=>{const o=r(1326),n=()=>{let e=s(o.LOCAL_STORAGE_SCOREBOARD);return null===e&&(e=a()),e},a=()=>(i(o.LOCAL_STORAGE_SCOREBOARD,[]),s(o.LOCAL_STORAGE_SCOREBOARD)),i=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},s=e=>JSON.parse(localStorage.getItem(e)),c=e=>s(e);e.exports={saveSettings:(e,t,r,n)=>{const a=((e,t,r,o)=>({category:e,speed:t,mode:r,difficulty:o}))(e,t,r,n);i(o.LOCAL_STORAGE_SETTINGS,a)},savePlayerScore:(e,t,r)=>{const a=((e,t,r)=>({name:e,points:t,category:r}))(e,t,r),s=((e,t)=>[t,...e])(n(),a);i(o.LOCAL_STORAGE_SCOREBOARD,s)},savePlayerCorrectAnswersNumber:e=>{i(o.LOCAL_STORAGE_PLAYER_CORRECT,e)},saveComputerCorrectAnswersNumber:e=>{i(o.LOCAL_STORAGE_COMPUTER_CORRECT,e)},saveAnswersNumber:e=>{i(o.LOCAL_STORAGE_ANSWERS,e)},getSettings:()=>s(o.LOCAL_STORAGE_SETTINGS),getScoreboard:n,getPlayerCorrectAnswersNumber:()=>c(o.LOCAL_STORAGE_PLAYER_CORRECT),getComputerCorrectAnswersNumber:()=>c(o.LOCAL_STORAGE_COMPUTER_CORRECT),getAnswersNumber:()=>s(o.LOCAL_STORAGE_ANSWERS),removeFromLocalStorage:e=>{localStorage.removeItem(e)},removeLastScore:()=>{const e=n(),t=e.slice(1);i(o.LOCAL_STORAGE_SCOREBOARD,t)}}},3329:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(3645),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".container--invisible{display:none}.star-wars-effect{position:absolute;margin:0 auto;perspective:680px;perspective-origin:bottom;top:0;bottom:0;left:0;right:0;overflow:hidden;width:100vw}.star-wars-effect__text{height:100%;width:100vw;position:absolute;top:100%;left:50%;display:grid;gap:10rem;animation:text-scroll 50s linear;animation-delay:10s;text-align:center}.star-wars-effect--invisible{display:none}.logo{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:#fac300;text-align:center;animation:logo-animation 15s ease-out;animation-fill-mode:forwards;transform-origin:left top}.logo__image{width:120vw}.text--very-large{font-size:6rem;font-weight:700}.text--no-select{-moz-user-select:none;-webkit-user-select:none}.button--skip{position:absolute;bottom:20px;right:20px}.list{display:grid;gap:1.5rem;justify-items:center}.list__item{text-shadow:0 0 10px #fff}@keyframes logo-animation{0%{opacity:0}5%{opacity:1}10%{transform:scale(1) translate(-50%, -50%)}90%{opacity:1}100%{opacity:0;transform:scale(0.01) translate(-50%, -50%);display:none}}@keyframes text-scroll{0%{transform:rotateX(21deg) translate3d(0, 0, 0) translateX(-50%);opacity:1}85%{opacity:1}100%{transform:rotateX(21deg) translate3d(0, -500vh, 0) translateX(-50%);opacity:0}}",""]);const a=n},8190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(3645),n=r.n(o),a=r(1667),i=r.n(a),s=r(4242),c=n()((function(e){return e[1]}));c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap);"]);var l=i()(s);c.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button,input,select,textarea{margin:0;padding:0;font:inherit}*,*::before,*::after{box-sizing:inherit}html{box-sizing:border-box;font-size:62.5%;font-family:"Montserrat",sans-serif}a{text-decoration:none}ul{list-style:none}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}.background{background-color:#000;background:url('+l+") fixed;background-size:cover}.container{max-width:130rem;height:100vh;padding:3rem 0;margin:0 auto;display:grid;grid-template:min-content 1fr min-content/80%;justify-items:stretch;justify-content:center;align-items:center}.button-container{display:flex;justify-content:space-between;align-items:center}.button{width:19rem;height:6rem;border:none;border-radius:.9rem;outline:none;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;text-align:center;font-size:2rem;line-height:6rem;font-weight:600;cursor:pointer;user-select:none}.button--large{width:22rem;height:8rem;font-size:3rem;line-height:8rem}.button--alternative{background-color:#70b5f5;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #70b5f5}.banner{width:100%;height:7rem;border-radius:.9rem;margin:0 auto;display:grid;place-items:center;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;font-size:3.3rem;font-weight:600}.selector{width:16rem;height:5rem;border:none;border-radius:.9rem;outline:none;background-color:#fff;color:#000;font-size:2rem;font-weight:600;cursor:pointer;user-select:none}.selector--static{outline:none;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;cursor:default}.selector--selected{border:.5rem solid #fac300;box-shadow:.4rem .4rem 4rem #fac300}.text{color:#fff;font-size:2.3rem;font-weight:600}.text--large{font-size:2.7rem;font-weight:700}.text--uppercase{text-transform:uppercase}.text--alternative{color:#fac300}.table{width:100%;height:calc(4rem * 3 + 4.5rem);border-radius:1rem;position:relative;display:block;background-color:#fff;text-align:left;font-size:2.5rem;font-weight:600;overflow-y:scroll}.table::-webkit-scrollbar{width:1em}.table::-webkit-scrollbar-thumb{border-radius:1rem;background-color:#fac300}.table--no-scroll{overflow-y:auto}.table--limited{height:calc(4rem * 2 + 4.5rem)}.table__body,.table__head{width:100%;display:block}.table__head{height:4.5rem;position:sticky;top:0;display:flex;align-items:center;background:#fff;font-weight:700}.table__row{height:4rem;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);align-items:center}.table__row--highlighted{background:#fac300}.table__data{padding-left:7%}.table__row:last-child .table__data:first-child{border-bottom-left-radius:1rem}",""]);const d=c},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(n[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},1667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},3379:(e,t,r)=>{"use strict";var o,n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},o=[],n=0;n<e.length;n++){var s=e[n],c=t.base?s[0]+t.base:s[0],l=r[c]||0,d="".concat(c," ").concat(l);r[c]=l+1;var u=i(d),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:g(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=r.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=n(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,r){var o=r.css,n=r.media,a=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function g(e,t){var r,o,n;if(t.singleton){var a=p++;r=f||(f=c(t)),o=u.bind(null,r,a,!1),n=u.bind(null,r,a,!0)}else r=c(t),o=m.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=i(r[o]);a[n].references--}for(var c=s(e,t),l=0;l<r.length;l++){var d=i(r[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=c}}}},4242:(e,t,r)=>{"use strict";e.exports=r.p+"54488fba0f432c699bdc.png"}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(3379),t=r.n(e),o=r(8190);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var n=r(3329);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,r(7071)})()})();