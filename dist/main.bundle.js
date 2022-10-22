(()=>{"use strict";var e={315:(e,r,t)=>{t.d(r,{Z:()=>d});var o=t(402),n=t.n(o),a=t(352),i=t.n(a)()(n());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]),i.push([e.id,'*{padding:0;margin:0;box-sizing:border-box}main .newBookBtn,.modalWrapper form button{padding:.5em;outline:none;border:none;background-color:#d09e53;font-family:"Roboto",sans-serif;font-size:1rem;cursor:pointer}main .newBookBtn:hover,.modalWrapper form button:hover{filter:brightness(1.1)}main .newBookBtn:focus,.modalWrapper form button:focus{filter:brightness(1.3)}body{font-family:"Roboto",sans-serif;color:#e1e1e1;height:100vh;width:100vw;display:flex;flex-direction:column;background-color:#222426}.modalWrapper{display:none;position:fixed;z-index:1;left:0;right:0;width:100%;height:100%;background-color:rgba(0,0,0,.4);justify-content:center;align-items:center}.modalWrapper form{background-color:#222426;padding:1rem;border-radius:5px;display:grid;grid-template-rows:1.5rem repeat(5, 3rem);gap:.5rem;align-items:stretch}.modalWrapper form h2{justify-self:center;font-size:1.5rem}.modalWrapper form label{color:#c8c8c8}.modalWrapper form input[type=text],.modalWrapper form input[type=number]{display:block;border:none;outline:none;border-radius:5px;padding:0 7px;background-color:#303030;font:"Roboto",sans-serif;height:1.8rem;font-size:.9rem;color:#e1e1e1;width:15rem;-moz-appearance:textfield}.modalWrapper form input::-webkit-outer-spin-button,.modalWrapper form input::-webkit-inner-spin-button{-webkit-appearance:none}.modalWrapper form .read{align-self:center;display:flex;justify-content:space-around;align-items:center}.modalWrapper form .read .round{height:1.5rem;position:relative}.modalWrapper form .read .round label{background-color:#222426;border:2px solid #303030;border-radius:50%;height:1.5rem;width:1.5rem;cursor:pointer;position:absolute;left:0;top:0}.modalWrapper form .read .round label:hover{filter:brightness(1.1)}.modalWrapper form .read .round label::after{content:"";border:2px solid #222426;border-top:none;border-right:none;transform:rotate(-45deg);height:6px;width:12px;opacity:0;position:absolute;top:5px;left:3.5px}.modalWrapper form .read .round input[type=checkbox]{visibility:hidden}.modalWrapper form .read .round input[type=checkbox]:checked+label{background-color:#d09e53;border-color:#d09e53}.modalWrapper form .read .round input[type=checkbox]:checked+label::after{opacity:1}.modalWrapper form button{border-radius:10px}header{flex:0 1 auto;padding:.3em 8%;background-color:#181a1b;box-shadow:0 0 5px 0px rgba(0,0,0,.7)}main{flex:1 1 auto;display:flex;flex-direction:column}main .newBookBtn{flex:0 1 auto;align-self:center;display:flex;align-items:center;border-radius:2em;padding-right:.9em;margin:1.5em}main .newBookBtn svg{height:1.5rem}main .gridWrapper{flex:1 1 auto;display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));grid-template-rows:repeat(auto-fill, minmax(300px, 1fr));grid-auto-rows:1fr;gap:1rem;padding:0 1rem}main .gridWrapper .bookCard{padding:1rem;border-radius:5px;background-color:#303030;box-shadow:0 0 2px 0 rgba(0,0,0,.3);display:grid;justify-items:stretch;align-items:center;text-align:center;gap:1em;grid-template-rows:repeat(4, 1fr)}main .gridWrapper .bookCard p:first-child{font-size:1.5rem;font-weight:600}main .gridWrapper .bookCard .buttonsWrapper{display:flex;justify-content:flex-end;align-items:center;gap:15%}main .gridWrapper .bookCard .buttonsWrapper .round{height:1.5rem;position:relative}main .gridWrapper .bookCard .buttonsWrapper .round label{background-color:#303030;border:2px solid #e1e1e1;border-radius:50%;height:1.5rem;width:1.5rem;cursor:pointer;position:absolute;left:0;top:0}main .gridWrapper .bookCard .buttonsWrapper .round label:hover{filter:brightness(1.1)}main .gridWrapper .bookCard .buttonsWrapper .round label::after{content:"";border:2px solid #303030;border-top:none;border-right:none;transform:rotate(-45deg);height:6px;width:12px;opacity:0;position:absolute;top:5px;left:3.5px}main .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox]{visibility:hidden}main .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox]:checked+label{background-color:#e1e1e1;border-color:#e1e1e1}main .gridWrapper .bookCard .buttonsWrapper .round input[type=checkbox]:checked+label::after{opacity:1}main .gridWrapper .bookCard .buttonsWrapper button{border:none;outline:none;background:none;color:#e1e1e1;cursor:pointer}main .gridWrapper .bookCard .buttonsWrapper button svg{height:1.5rem}main .gridWrapper .bookCard .buttonsWrapper button svg:hover{filter:brightness(1.1)}footer{flex:0 1 auto;text-align:center;padding:.8rem;font-size:.8rem}footer a{text-decoration:none;color:#d09e53}',""]);const d=i},352:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",o=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),o&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),o&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var p=this[d][0];null!=p&&(i[p]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),n&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=n):c[4]="".concat(n)),r.push(c))}},r}},402:e=>{e.exports=function(e){return e[1]}},701:e=>{var r=[];function t(e){for(var t=-1,o=0;o<r.length;o++)if(r[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var p=e[d],s=o.base?p[0]+o.base:p[0],c=a[s]||0,l="".concat(s," ").concat(c);a[s]=c+1;var u=t(l),m={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var f=n(m,o);o.byIndex=d,r.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function n(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);r[d].references--}for(var p=o(e,n),s=0;s<a.length;s++){var c=t(a[s]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}a=p}}},80:e=>{var r={};e.exports=function(e,t){var o=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},182:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},850:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},236:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,n&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},213:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{var e=t(701),r=t.n(e),o=t(236),n=t.n(o),a=t(80),i=t.n(a),d=t(850),p=t.n(d),s=t(182),c=t.n(s),l=t(213),u=t.n(l),m=t(315),f={};f.styleTagTransform=u(),f.setAttributes=p(),f.insert=i().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=c(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b,g=function(){function e(e,r,t,o){this.title=e,this.author=r,this.pages=t,this.read=o}return e.prototype.info=function(){return"".concat(this.title," by ").concat(this.author,", ").concat(this.pages," pages, read: ").concat(this.read)},e.prototype.toggleRead=function(){this.read=!this.read},e}(),h={init:function(){b=[];var e=localStorage.getItem("books");if(null!==e){for(var r=0,t=JSON.parse(e);r<t.length;r++){var o=t[r],n=new g(o.title,o.author,o.pages,o.read);v.addBook(n)}b=v.books}},set books(e){b=e,localStorage.setItem("books",JSON.stringify(b))},get books(){return b}},v=function(){var e=[];return{books:e,addBook:function(r){e.push(r)},selectBook:function(r){return e[r]},removeBook:function(r){e.splice(r,1)},reset:function(){e.length=0},saveToLocalstorage:function(){h.books=e}}}();h.init();for(var y=0,x=v.books;y<x.length;y++)k(x[y]);function k(e){var r=e.title,t=e.author,o=e.pages+" pages",n=e.read,a=document.querySelector(".gridWrapper"),i=document.createElement("div");i.classList.add("bookCard");for(var d=0,p=[r,t,o];d<p.length;d++){var s=p[d],c=document.createElement("p");c.textContent=s,i.appendChild(c)}var l=document.createElement("div");l.classList.add("buttonsWrapper"),i.appendChild(l);var u=document.createElement("div");u.classList.add("round"),l.appendChild(u);var m=document.createElement("input");m.type="checkbox",m.id="read ".concat(r),n&&(m.checked=!0),m.addEventListener("click",(function(){var e,r=a.children;e=Array.from(r).indexOf(i),v.selectBook(e).toggleRead(),v.saveToLocalstorage()})),u.appendChild(m);var f=document.createElement("label");f.setAttribute("for","read ".concat(r)),u.appendChild(f);var b=document.createElement("button");b.classList.add("remove"),b.addEventListener("click",(function(){var e,r=a.children;e=Array.from(r).indexOf(i),v.removeBook(e),v.saveToLocalstorage(),i.remove()})),l.appendChild(b);var g="http://www.w3.org/2000/svg",h=document.createElementNS(g,"svg");h.setAttribute("viewBox","0 0 24 24");var y=document.createElementNS(g,"path");y.setAttribute("fill","currentColor"),y.setAttribute("d","M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"),h.appendChild(y),b.appendChild(h),a.appendChild(i)}var W=document.querySelector(".modalWrapper");document.querySelector(".newBookBtn").addEventListener("click",(function(){W.style.display="flex"})),window.addEventListener("click",(function(e){e.target===W&&(W.style.display="none")}));var w=document.querySelector(".newBookForm"),C=document.querySelector("#title"),B=document.querySelector("#author"),S=document.querySelector("#pages"),E=document.querySelector("#read");w.addEventListener("submit",(function(e){var r;e.preventDefault(),r=new g(C.value,B.value,parseInt(S.value),E.checked),v.addBook(r),v.saveToLocalstorage(),k(r),C.value=B.value=S.value="",E.checked=!1,W.style.display="none"}))})()})();