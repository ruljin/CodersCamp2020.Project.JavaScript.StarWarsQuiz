(()=>{var e={1326:e=>{e.exports={SITES:["index","authors","game","scores","game-over","settings"],LOCAL_STORAGE_SETTINGS:"settings",LOCAL_STORAGE_SCOREBOARD:"scoreboard",LOCAL_STORAGE_PLAYER_CORRECT:"playerCorrectAnswers",LOCAL_STORAGE_COMPUTER_CORRECT:"computerCorrectAnswers",LOCAL_STORAGE_ANSWERS:"answers",CATEGORIES:["people","vehicles","starships"],CATEGORY_PEOPLE_IDS:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],CATEGORY_VEHICLES_IDS:[4,6,7,8,14,16,18,19,20,24,25,26,30,33,34,35,36,37,38,42],CATEGORY_STARSHIPS_IDS:[5,9,10,11,12,13,15,21,22,23,27,28,29,31,39,40,41,43,47,48]}},6944:(e,t,r)=>{const n=r(6769),o=document.querySelector("#submit");null===n.getSettings()&&(location.href="./index.html"),("solo"===n.getSettings().mode&&null===n.getPlayerCorrectAnswersNumber()||"computer"===n.getSettings().mode&&null===n.getPlayerCorrectAnswersNumber()&&null===n.getComputerCorrectAnswersNumber())&&(location.href="./index.html");const a=(e,t,r,n)=>{const o=e%10,a=e%100;return`\n    <tr class="table__row ${n?"table__row--highlighted":""}">\n      <td class="table__data">${e+=1==o&&11!=a?"st":2==o&&12!=a?"nd":3==o&&13!=a?"rd":"th"}</td>\n      <td class="table__data">${t}</td>\n      <td class="table__data">${r}</td>\n    </tr>\n  `},i=e=>a(e,"Player",m(),!0),s=e=>a(e,"Computer",u(),!1),l=()=>{const e=document.querySelector("#tableBody");if(c()){const[t,r]=d(),n=["",""];n[t-1]=i(t),n[r-1]=s(r),e.innerHTML=n.join("")}else e.innerHTML=i(1)},c=()=>{const e=n.getSettings();return null!==e&&"computer"===e.mode},d=()=>n.getPlayerCorrectAnswersNumber()>=n.getComputerCorrectAnswersNumber()?[1,2]:[2,1],m=()=>{const e=n.getPlayerCorrectAnswersNumber();return p(e)},u=()=>{const e=n.getComputerCorrectAnswersNumber();return p(e)},p=e=>{const t=n.getSettings.speed,r=h(t);return Math.floor(e*r)+Math.floor(e/n.getAnswersNumber()*(e*r))},h=e=>"long"===e?1:"normal"===e?2:3,g=()=>{const e=document.querySelector("#banner");c()&&2===d()[0]?(e.textContent="Game Over!",e.classList.add("banner--lose")):(e.textContent="You Won!",e.classList.add("banner--win"))},b=e=>{e.preventDefault();const t=document.querySelector("#usernameInput"),r=t.value;!0!==t.disabled&&(""!==r?(f(r),w(),x(!0,r),n.removeFromLocalStorage("playerCorrectAnswers"),n.removeFromLocalStorage("computerCorrectAnswers")):x(!1))},f=e=>{n.savePlayerScore(e,m(),n.getSettings().category)},w=()=>{document.querySelector("#usernameInput").disabled=!0},x=(e,t="")=>{document.querySelector("#label").textContent=e?`${t}, your score - ${m()} - has been added to the hall of fame!`:"Please enter valid name!"};l(),g(),o.addEventListener("click",b),e.exports={createTableRow:a,createPlayerTableRow:i,getPlayerPoints:m,createComputerTableRow:s,getComputerPoints:u,checkComputerMode:c,populateTable:l,getPointsFromCorrectAnswersNumber:p,setBanner:g,getPlaces:d,getPlayerPoints:m,switchLabel:x,blockInput:w,submitScore:f,handleSubmitButton:b,getTimeModifier:h}},6769:(e,t,r)=>{const n=r(1326),o=()=>{let e=s(n.LOCAL_STORAGE_SCOREBOARD);return null===e&&(e=a()),e},a=()=>(i(n.LOCAL_STORAGE_SCOREBOARD,[]),s(n.LOCAL_STORAGE_SCOREBOARD)),i=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},s=e=>JSON.parse(localStorage.getItem(e)),l=e=>s(e);e.exports={saveSettings:(e,t,r,o)=>{const a=((e,t,r,n)=>({category:e,speed:t,mode:r,difficulty:n}))(e,t,r,o);i(n.LOCAL_STORAGE_SETTINGS,a)},savePlayerScore:(e,t,r)=>{const a=((e,t,r)=>({name:e,points:t,category:r}))(e,t,r),s=((e,t)=>[t,...e])(o(),a);i(n.LOCAL_STORAGE_SCOREBOARD,s)},savePlayerCorrectAnswersNumber:e=>{i(n.LOCAL_STORAGE_PLAYER_CORRECT,e)},saveComputerCorrectAnswersNumber:e=>{i(n.LOCAL_STORAGE_COMPUTER_CORRECT,e)},saveAnswersNumber:e=>{i(n.LOCAL_STORAGE_ANSWERS,e)},getSettings:()=>s(n.LOCAL_STORAGE_SETTINGS),getScoreboard:o,getPlayerCorrectAnswersNumber:()=>l(n.LOCAL_STORAGE_PLAYER_CORRECT),getComputerCorrectAnswersNumber:()=>l(n.LOCAL_STORAGE_COMPUTER_CORRECT),getAnswersNumber:()=>s(n.LOCAL_STORAGE_ANSWERS),removeFromLocalStorage:e=>{localStorage.removeItem(e)},removeLastScore:()=>{const e=o(),t=e.slice(1);i(n.LOCAL_STORAGE_SCOREBOARD,t)}}},4736:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"@media(max-width: 800px){.container{display:block;width:90vw}}.form{height:6rem;width:100%;display:grid;grid-template-columns:repeat(3, 1fr);gap:2rem;align-items:center}@media(max-width: 800px){.form{grid-template-columns:repeat(2, 1fr);width:80vw;margin:0 auto}}@media(max-width: 600px){.form{grid-template-columns:repeat(1, 1fr)}}.form__input{height:6rem;padding:1rem;box-shadow:inset 0px 4px 4px rgba(0,0,0,.25);border-radius:1.5rem;font-size:2.3rem}@media(max-width: 600px){.form__input{width:100%}}@media(max-width: 800px){.label{text-align:center;grid-area:1/1/span 1/span 2}}@media(max-width: 600px){.label{grid-area:unset}}.text--small{font-size:1.5rem}.text--label{text-align:center;margin-top:3rem}@media(max-width: 600px){.text--label{margin-top:12rem}}.button--submit{justify-self:end;width:15rem}@media(max-width: 600px){.button--submit{justify-self:center}}.button-container{flex-direction:row;justify-content:space-around}@media(max-width: 450px){.button-container{flex-direction:column-reverse}}@media(max-width: 800px){.button-mobile--large{height:6rem;line-height:6rem;border-radius:rem}}.page-content{padding:7rem 0 4rem 0;margin:auto;display:grid;row-gap:3rem;place-items:center}@media(max-width: 800px){.page-content{display:flex;flex-direction:column;padding:5rem 0;margin-top:100px}}@media(max-width: 600px){.page-content{margin-top:40px}}.banner--alternative{box-shadow:none;background-color:transparent;font-size:10rem;text-transform:uppercase}@media(max-width: 830px){.banner--alternative{font-size:9rem}}@media(max-width: 700px){.banner--alternative{font-size:8rem}}@media(max-width: 600px){.banner--alternative{font-size:6rem}}.banner--win{color:#70b5f5}.banner--lose{color:red}@media(max-width: 600px){.table{margin-left:unset}}.table__data{padding:0 1rem}",""]);const a=o},8190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(3645),o=r.n(n),a=r(1667),i=r.n(a),s=r(4242),l=o()((function(e){return e[1]}));l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap);"]);var c=i()(s);l.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button,input,select,textarea{margin:0;padding:0;font:inherit}*,*::before,*::after{box-sizing:inherit}html{box-sizing:border-box;font-size:62.5%;font-family:"Montserrat",sans-serif}a{text-decoration:none}ul{list-style:none}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}.background{background-color:#000;background:url('+c+") fixed;background-size:cover;background-repeat:repeat}.container{max-width:130rem;min-height:100vh;padding:3rem 0;margin:0 auto;display:grid;row-gap:30px;grid-template:min-content 1fr min-content/80%;justify-items:stretch;justify-content:center;align-items:center}.button-container{display:flex;justify-content:space-between;align-items:center}@media(max-width: 800px){.button-container{flex-direction:column}}.button{width:19rem;height:6rem;border:none;border-radius:.9rem;outline:none;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;text-align:center;font-size:2rem;line-height:6rem;font-weight:600;cursor:pointer;user-select:none}@media(max-width: 800px){.button{height:4.5rem;line-height:4.5rem;border-radius:9999px;margin-bottom:20px}}.button--large{width:22rem;height:8rem;font-size:3rem;line-height:8rem}@media(max-width: 800px){.button--large{width:19rem;height:4.5rem;font-size:2rem;line-height:4.5rem;order:-1}}.button--alternative{background-color:#70b5f5;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #70b5f5}.banner{width:100%;height:7rem;border-radius:.9rem;margin:0 auto;display:grid;place-items:center;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;color:#000;font-size:3.3rem;font-weight:600}@media(max-width: 600px){.banner{height:unset;text-align:center;padding:10px}}.selector{width:16rem;height:5rem;border:none;border-radius:.9rem;outline:none;background-color:#fff;color:#000;font-size:2rem;font-weight:600;cursor:pointer;user-select:none}@media(max-width: 800px){.selector{border-radius:9999px;height:4.5rem}}.selector--static{outline:none;box-shadow:inset .2rem .3rem .4rem #000001,.4rem .4rem 4rem #fac300;background-color:#fac300;cursor:default}.selector--selected{border:.5rem solid #fac300;box-shadow:.4rem .4rem 4rem #fac300}@media(max-width: 800px){.selector--selected{box-shadow:inset 4px 4px 8px 0px rgba(0,0,0,.75)}}.text{color:#fff;font-size:2.3rem;font-weight:600}.text--large{font-size:2.7rem;font-weight:700}.text--uppercase{text-transform:uppercase}.text--alternative{color:#fac300}.table{width:100%;height:calc(4rem * 3 + 4.5rem);border-radius:1rem;position:relative;display:block;background-color:#fff;text-align:left;font-size:2.5rem;font-weight:600;overflow-y:scroll}@media(max-width: 600px){.table{height:30vh;width:90vw;margin-left:-5vw}}.table::-webkit-scrollbar{width:1em}.table::-webkit-scrollbar-thumb{border-radius:1rem;background-color:#fac300}.table--no-scroll{overflow-y:auto}.table--limited{height:calc(4rem * 2 + 4.5rem)}.table__body,.table__head{width:100%;display:block}.table__body .table__body{word-break:break-word}@media(max-width: 400px){.table__head,.table__row{font-size:1.5rem}}.table__head{height:4.5rem;position:sticky;top:0;display:flex;align-items:center;background:#fff;font-weight:700}.table__row{width:100%;display:grid;grid-template-columns:repeat(3, 1fr);align-items:center}@media(max-width: 300px){.table__row{text-align:center}}.table__row--highlighted{background:#fac300}.table__data{padding-left:7%}.table__row:last-child .table__data:first-child{border-bottom-left-radius:1rem}",""]);const d=l},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},1667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},3379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),a=[];function i(e){for(var t=-1,r=0;r<a.length;r++)if(a[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var s=e[o],l=t.base?s[0]+t.base:s[0],c=r[l]||0,d="".concat(l," ").concat(c);r[l]=c+1;var m=i(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(a[m].references++,a[m].updater(u)):a.push({identifier:d,updater:g(u,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=r.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function m(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function u(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,h=0;function g(e,t){var r,n,o;if(t.singleton){var a=h++;r=p||(p=l(t)),n=m.bind(null,r,a,!1),o=m.bind(null,r,a,!0)}else r=l(t),n=u.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);a[o].references--}for(var l=s(e,t),c=0;c<r.length;c++){var d=i(r[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=l}}}},4242:(e,t,r)=>{"use strict";e.exports=r.p+"54488fba0f432c699bdc.png"}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{"use strict";var e=r(3379),t=r.n(e),n=r(8190);t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;var o=r(4736);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,r(6944)})()})();