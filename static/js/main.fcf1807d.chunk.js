(this.webpackJsonptimelapses=this.webpackJsonptimelapses||[]).push([[0],{11:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(8),c=n.n(o),r=(n(16),n(9)),s=n(3),h=n(1),l=(n(17),n(2)),u=n(5),d="ontouchstart"in window||navigator.msMaxTouchPoints;window.PADDING_TOP_DIFF=12;var f=d;function g(t){var e=v(t);return""===e?"":t.split(e)[0]}function m(t){var e=v(t);return""===e?t:t.split(e)[1]}function v(t){var e=t.match(/\d+(?!.*\d)/g);return null===e?"":e[0]}function w(t){console.warn("Can\u2019t parse the file sequence correctly, returning [].\nReason: "+t)}var p=[];var y=function(){function t(e){Object(l.a)(this,t);if(this.config=Object(s.a)(Object(s.a)({},{canvas:null,list:[],from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0}),e),""==this.config.from&&""==this.config.to&&0==this.config.list.length)return console.error("Missing filenames."),!1;if(null===this.config.canvas){var n=document.createElement("canvas");document.body.appendChild(n),this.config.canvas=n,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d"),this.list=this.config.list.length>0?this.config.list:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=[],a=v(t);if(""===a)return w("the first filename doesn\u2019t contain a number."),i;var o=v(e);if(""===o)return w("the last filename doesn\u2019t contain a number."),i;var c=g(t),r=m(t);if(c!=g(e)||r!=m(e))return w("the base-names of '"+t+"' and '"+e+"' don\u2019t match."),i;var s=0==a.charAt(0)||0==o.charAt(0);if(s&&a.length!=o.length)return w("wrong number of leading zeros."),i;var h=parseInt(a),l=parseInt(o);if(s)for(var u=h;u<l;u+=n)i.push(c+(u+"").padStart(a.length,"0")+r);else for(var d=h;d<l;d+=n)i.push(c+d+r);return i}(this.config.from,this.config.to,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?new N(this.images,[this.list.shift()],x.bind(null,this)):"all"==this.config.autoLoad&&this.load()}return Object(u.a)(t,[{key:"load",value:function(){this.load=function(){console.log("load() can be called only once.")},new N(this.images,this.list,x.bind(null,this),I.bind(null,this))}},{key:"run",value:function(){var t=this,e=f?"touchmove":"mousemove",n=f?"touchstart":"mousedown",i=f?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(e,S.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(e,b.bind(null,this)),this.ctx.canvas.addEventListener(n,E.bind(null,this)),document.addEventListener(i,M.bind(null,this));else if("auto"===this.config.playMode){var a=0;requestAnimationFrame((function e(n){var i=n-a;i>=t.config.interval&&(t.nextImage(),a=Math.max(n,n-(i-t.config.interval))),requestAnimationFrame(e)}))}}},{key:"nextImage",value:function(t){t||(t=this.config.loop),"pong"===t?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}},{key:"drawImage",value:function(t){if(void 0===t&&(t=this.current),!(t<0||t>=this.images.length)){var e,n,i=this.config.hiDPI?Math.max(window.devicePixelRatio,2):1,a=this.ctx.canvas.width/i,o=this.ctx.canvas.height/i,c=a/o,r=this.images[t],s=r.width/r.height;"cover"==this.config.scaleMode?c>s?n=(e=a)/s:e=(n=o)*s:"contain"==this.config.scaleMode?c<s?n=(e=a)/s:e=(n=o)*s:(e=r.width,n=r.height);var h=a/2-e/2,l=o/2-n/2;this.ctx.save(),this.ctx.scale(i,i),this.ctx.clearRect(0,0,a,o),this.ctx.drawImage(r,0,0,r.width,r.height,~~h,~~l,~~e,~~n),this.ctx.restore()}}},{key:"size",value:function(t,e){var n=this.config.originalWidth,i=this.config.originalHeight,a=Math.min((window.innerWidth-16)/n,(window.innerHeight-112)/i),o=a*n,c=a*i;this.config.canvas.parentElement.parentElement.style.marginTop="".concat(Math.round((window.innerHeight-c)/2)-window.PADDING_TOP_DIFF,"px"),this.config.canvas.parentElement.parentElement.style.marginLeft="".concat(Math.round((window.innerWidth-o)/2),"px"),t=o,e=c;var r=this.config.hiDPI?Math.max(window.devicePixelRatio,2):1,s=this.ctx.canvas;s.width=t*r,s.height=e*r,s.style.width=t+"px",s.style.height=e+"px",this.drawImage()}}]),t}();function x(t,e){e.id>t.lastLoaded&&t.config.showLoadedImages&&(t.drawImage(e.id),t.lastLoaded=e.id),"function"===typeof t.config.imageLoad&&(e.sequencer=t,t.config.imageLoad(e)),"function"===typeof t.imageLoad&&(e.sequencer=t,t.imageLoad(e)),0===e.id&&(t.config.fitFirstImage&&(t.size(e.img.width,e.img.height),t.config.fitFirstImage=!1),t.drawImage(0),t.current=0)}function I(t,e){"function"===typeof t.config.queueComplete&&(e.sequencer=t,t.config.queueComplete(e)),"function"===typeof t.queueComplete&&t.queueComplete(e),t.run(),t.config.showLoadedImages||"none"===t.config.playMode||t.drawImage(0)}function E(t,e){var n,i;e.touches?(n=e.touches[0].pageX-e.touches[0].target.offsetLeft,i=e.touches[0].pageY-e.touches[0].target.offsetTop):(n=e.offsetX,i=e.offsetY),t.pointer={x:n,y:i,down:!0,currentId:t.current}}function M(t,e){t.pointer.down=!1}function b(t,e){if(t.pointer.down){var n,i,a=t.images.length;e.touches?(n=e.touches[0].pageX-e.touches[0].target.offsetLeft,i=e.touches[0].pageY-e.touches[0].target.offsetTop):(n=e.offsetX,i=e.offsetY);var o=0;/x/.test(t.config.direction)?o=(n-t.pointer.x)*t.directionSign:/y/.test(t.config.direction)&&(o=(i-t.pointer.y)*t.directionSign);var c=t.pointer.currentId+Math.floor(o/t.config.dragAmount);c<0?c=a- -c%a:c>a&&(c%=a),c!=t.current&&(t.drawImage(c),t.current=c),e.preventDefault()}}function S(t,e){var n,i,a,o,c=t.images.length,r=t.config.hiDPI?Math.max(window.devicePixelRatio,2):1;if(e.touches){var s=e.touches[0].target.getBoundingClientRect(),h=s.x,l=s.y,u=s.width;s.height;n=Math.round(1.04*(e.touches[0].clientX-h)-.02*u),i=Math.round(1.04*(e.touches[0].clientY-l)-.02*u)}else n=e.offsetX,i=e.offsetY;"x"==t.config.direction?(o=t.ctx.canvas.width/r,a=n):"-x"==t.config.direction?a=(o=t.ctx.canvas.width/r)-n-1:"y"==t.config.direction?(o=t.ctx.canvas.height/r,a=i):"-y"==t.config.direction&&(a=(o=t.ctx.canvas.height/r)-i-1);var d,f,g,m=(d=Math.floor(a/o*c),g=c-1,d<(f=0)?f:d>g?g:d);m!=t.current&&(t.drawImage(m),t.current=m,t.config.onSelect&&t.config.onSelect(m)),e.preventDefault()}function N(t,e,n,i){for(var a=Math.min(e.length,6),o=t.length-1,c=t.length,r=0;r<a;r++)s();function s(){if(!(o>=e.length-1)){o++;var a,r=new Image;r.src=e[o],a=o,r.onload=function(t){"function"===typeof n&&n({id:a,img:r,count:++c,total:e.length}),c<e.length&&s(),c==e.length&&"function"===typeof i&&i({total:e.length})},r.onerror=function(t){console.error("Error with: "+e[a])},t.push(r)}}}var L={make:function(t){var e=new y(t);return!1!==e&&p.push(e),e},instances:p},F=n(10),C="ontouchstart"in window||navigator.msMaxTouchPoints,A={mgyon:{width:720,height:1080,initialFrame:6590,initialHour:17,initialMinute:16,finalFrame:7009,finalHour:17,finalMinute:23,list:O("mgyonp/DSCF",6591,7009,[7e3,6764,6825,6732]).filter((function(t,e){return t.photoId<6620||(t.photoId>6969?e%2===0:e%3===0)}))},thunder:{width:720,height:1080,initialFrame:1887,initialHour:21,initialMinute:0,finalFrame:2439,finalHour:21,finalMinute:55,list:O("thunderp/DSCF",1888,2339,[]).filter((function(t,e){return e<30||(e>130&&e<190||e%2===1)}))},drone:{width:1080,height:720,initialFrame:8274,initialHour:17,initialMinute:47,finalFrame:8564,finalHour:17,finalMinute:52,list:O("dronep/DSCF",8310,8554,[]).filter((function(t,e){return e>100||e<10||e%2===0}))}};for(var T in A)A[T].pathList=A[T].list.map((function(t){return t.path}));var D=["drone","mgyon","thunder"].sort((function(){return Math.random()-.5}));function O(t,e,n,i){return new Array(n-e).fill("").map((function(n,a){return i.includes(e+a)?null:{path:"".concat(t).concat(e+a,".jpg"),photoId:e+a}})).filter((function(t){return!!t}))}function P(t){var e=t.id,n=t.list,i=t.initialFrame,a=t.finalFrame,o=60*(60*t.initialHour+t.initialMinute),c=60*(60*t.finalHour+t.finalMinute);return function(t){var e="0".concat(Math.floor(t/60/60)%24).slice(-2),n="0".concat(Math.floor(t/60)%60).slice(-2),i="0".concat(Math.floor(t%60)).slice(-2),a="00".concat(Math.floor(t%1*100)).slice(-2);return"".concat(e,":").concat(n,":").concat(i,".").concat(a)}((n[e].photoId-i)*((c-o)/(a-i))+o)}function j(t){var e=a.a.useState(!1),n=Object(h.a)(e,2),i=n[0],o=n[1],c=t.name,r=t.list,l=t.height,u=t.width,d=t.active,f=t.onLoad,g=void 0===f?function(){}:f,m=a.a.useState(!0),v=Object(h.a)(m,2),w=v[0],p=v[1],y=a.a.useState(null),x=Object(h.a)(y,2),I=(x[0],x[1]),E=a.a.useState([0,1]),M=Object(h.a)(E,2),b=M[0],S=M[1],N=a.a.useState(-1),F=Object(h.a)(N,2),T=F[0],D=F[1];return a.a.useEffect((function(){if(d&&!i){o(!0);var t={direction:"x",scaleMode:"contain",showLoadedImages:!0,playMode:"hover",originalHeight:l,originalWidth:u,hiDPI:!1,imageLoad:function(t){S([Math.max(b[0],t.count),t.total])},queueComplete:function(t){p(!1),g()},onSelect:function(t){D(t)}},e=L.make(Object(s.a)(Object(s.a)({},t),{},{list:r,canvas:document.querySelector(".swiper-slide.-".concat(c," canvas"))}));window.requestAnimationFrame((function(){e.size()})),window.INSTANCES[c]=e,I(e)}}),[d,i]),a.a.createElement("div",{className:"swiper-slide -".concat(c)},a.a.createElement("div",{className:"canvas-shadow",style:{transform:"translatex(".concat(T/r.length*100-100,"vw)")}}),a.a.createElement("div",{className:"canvas-container"},a.a.createElement("div",{className:"canvas-wrapper"},a.a.createElement("canvas",{className:"canvas",key:"canvas"})),w&&a.a.createElement("div",{className:"info"},"Loading... ",Number(b[0]/b[1]*100).toFixed(0),"%"),!w&&-1===T&&a.a.createElement("div",{className:"info"},C?"\u2190 Scroll \u2192":"\u2190 Hover \u2192"),!w&&-1!==T&&a.a.createElement("div",{className:"info -number"},P(Object(s.a)({id:T},A[c])))))}window.INSTANCES={},window.CURRENT_INSTANCE=D[0];var q=function(){var t=a.a.useState(0),e=Object(h.a)(t,2),n=e[0],i=e[1],o=a.a.useState(0),c=Object(h.a)(o,2),s=c[0],l=c[1];return a.a.useEffect((function(){function t(){for(var t in document.querySelectorAll(".swiper-slide").forEach((function(t){t.style.height="".concat(window.innerHeight,"px")})),document.querySelectorAll(".swiper-container").forEach((function(t){t.style.height="".concat(window.innerHeight,"px")})),window.INSTANCES)window.INSTANCES[t].size();var e=document.querySelector(".swiper-slide.-".concat(window.CURRENT_INSTANCE," .canvas-wrapper"));if(e){var n=e.getBoundingClientRect(),i=(n.width,n.height);document.querySelectorAll(".-note-top").forEach((function(t){t.style.height="".concat(Math.round((window.innerHeight-i)/2-window.PADDING_TOP_DIFF+2),"px")})),document.querySelectorAll(".-note-bottom").forEach((function(t){t.style.height="".concat(Math.round((window.innerHeight-i)/2+1.5*window.PADDING_TOP_DIFF),"px")}))}}window.setTimeout((function(){var e=new F.a(".swiper-container",{direction:"vertical",mousewheel:!0});document.body.classList.add("-".concat(D[e.activeIndex])),e.on("slideChange",(function(){var n,i=Object(r.a)(document.body.classList);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.includes("-")&&document.body.classList.remove(a)}}catch(o){i.e(o)}finally{i.f()}document.body.classList.add("-".concat(D[e.activeIndex])),l(e.activeIndex),window.CURRENT_INSTANCE=D[e.activeIndex],window.setTimeout(t,8)})),t()}),8),t(),window.addEventListener("resize",t)}),[]),a.a.useEffect((function(){i(Math.max(n,s))}),[n,s]),a.a.createElement("div",{className:"swiper-container"},a.a.createElement("div",{className:"swiper-wrapper"},D.map((function(t,e){return a.a.createElement(j,{key:t,active:n>=e,onLoad:function(){i(Math.max(n,e+1))},height:A[t].height,width:A[t].width,list:A[t].pathList,name:t})}))),C?a.a.createElement("div",{className:"note -note-top -how"},"Scroll the picture \u2935 to change time."):a.a.createElement("div",{className:"note -note-top -how"},"Hover over the picture \u2935 to change time."),s<D.length-1&&a.a.createElement("div",{className:"note -note-bottom -more"},"There is more \u2193"),s===D.length-1&&a.a.createElement("div",{className:"note -note-bottom -more"},a.a.createElement("div",null,"Photos and web by ",a.a.createElement("a",{href:"https://javier.xyz"},"javierbyte")),a.a.createElement("div",null,"Thanks! v0.15")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.fcf1807d.chunk.js.map