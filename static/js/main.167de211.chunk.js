(this.webpackJsonptimelapses=this.webpackJsonptimelapses||[]).push([[0],{11:function(t,e,i){t.exports=i(18)},16:function(t,e,i){},17:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),a=i(8),c=i.n(a),r=(i(16),i(9)),h=i(3),s=i(1),l=(i(17),i(2)),d=i(5),p="ontouchstart"in window||navigator.msMaxTouchPoints;window.PADDING_TOP_DIFF=12;var u=p;function g(t){var e=m(t);return""===e?"":t.split(e)[0]}function f(t){var e=m(t);return""===e?t:t.split(e)[1]}function m(t){var e=t.match(/\d+(?!.*\d)/g);return null===e?"":e[0]}function v(t){console.warn("Can\u2019t parse the file sequence correctly, returning [].\nReason: "+t)}var w=[];var x=function(){function t(e){Object(l.a)(this,t);if(this.config=Object(h.a)(Object(h.a)({},{canvas:null,list:[],from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0}),e),""==this.config.from&&""==this.config.to&&0==this.config.list.length)return console.error("Missing filenames."),!1;if(null===this.config.canvas){var i=document.createElement("canvas");document.body.appendChild(i),this.config.canvas=i,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d"),this.list=this.config.list.length>0?this.config.list:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[],o=m(t);if(""===o)return v("the first filename doesn\u2019t contain a number."),n;var a=m(e);if(""===a)return v("the last filename doesn\u2019t contain a number."),n;var c=g(t),r=f(t);if(c!=g(e)||r!=f(e))return v("the base-names of '"+t+"' and '"+e+"' don\u2019t match."),n;var h=0==o.charAt(0)||0==a.charAt(0);if(h&&o.length!=a.length)return v("wrong number of leading zeros."),n;var s=parseInt(o),l=parseInt(a);if(h)for(var d=s;d<l;d+=i)n.push(c+(d+"").padStart(o.length,"0")+r);else for(var p=s;p<l;p+=i)n.push(c+p+r);return n}(this.config.from,this.config.to,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?new j(this.images,[this.list.shift()],I.bind(null,this)):"all"==this.config.autoLoad&&this.load()}return Object(d.a)(t,[{key:"load",value:function(){this.load=function(){console.log("load() can be called only once.")},new j(this.images,this.list,I.bind(null,this),S.bind(null,this))}},{key:"run",value:function(){var t=this,e=u?"touchmove":"mousemove",i=u?"touchstart":"mousedown",n=u?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(e,D.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(e,y.bind(null,this)),this.ctx.canvas.addEventListener(i,F.bind(null,this)),document.addEventListener(n,C.bind(null,this));else if("auto"===this.config.playMode){var o=0;requestAnimationFrame((function e(i){var n=i-o;n>=t.config.interval&&(t.nextImage(),o=Math.max(i,i-(n-t.config.interval))),requestAnimationFrame(e)}))}}},{key:"nextImage",value:function(t){t||(t=this.config.loop),"pong"===t?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}},{key:"drawImage",value:function(t){if(void 0===t&&(t=this.current),!(t<0||t>=this.images.length)){var e,i,n=this.config.hiDPI?Math.max(window.devicePixelRatio,2):1,o=this.ctx.canvas.width/n,a=this.ctx.canvas.height/n,c=o/a,r=this.images[t],h=r.width/r.height;"cover"==this.config.scaleMode?c>h?i=(e=o)/h:e=(i=a)*h:"contain"==this.config.scaleMode?c<h?i=(e=o)/h:e=(i=a)*h:(e=r.width,i=r.height);var s=o/2-e/2,l=a/2-i/2;this.ctx.save(),this.ctx.scale(n,n),this.ctx.clearRect(0,0,o,a),this.ctx.drawImage(r,0,0,r.width,r.height,~~s,~~l,~~e,~~i),this.ctx.restore()}}},{key:"size",value:function(t,e){var i=this.config.originalWidth,n=this.config.originalHeight,o=Math.min((window.innerWidth-16)/i,(window.innerHeight-112)/n),a=o*i,c=o*n;this.config.canvas.parentElement.parentElement.style.marginTop="".concat(Math.round((window.innerHeight-c)/2)-window.PADDING_TOP_DIFF,"px"),this.config.canvas.parentElement.parentElement.style.marginLeft="".concat(Math.round((window.innerWidth-a)/2),"px"),t=a,e=c;var r=this.config.hiDPI?Math.max(window.devicePixelRatio,2):1,h=this.ctx.canvas;h.width=t*r,h.height=e*r,h.style.width=t+"px",h.style.height=e+"px",this.drawImage()}}]),t}();function I(t,e){e.id>t.lastLoaded&&t.config.showLoadedImages&&(t.drawImage(e.id),t.lastLoaded=e.id),"function"===typeof t.config.imageLoad&&(e.sequencer=t,t.config.imageLoad(e)),"function"===typeof t.imageLoad&&(e.sequencer=t,t.imageLoad(e)),0===e.id&&(t.config.fitFirstImage&&(t.size(e.img.width,e.img.height),t.config.fitFirstImage=!1),t.drawImage(0),t.current=0)}function S(t,e){"function"===typeof t.config.queueComplete&&(e.sequencer=t,t.config.queueComplete(e)),"function"===typeof t.queueComplete&&t.queueComplete(e),t.run(),t.config.showLoadedImages||"none"===t.config.playMode||t.drawImage(0)}function F(t,e){var i,n;e.touches?(i=e.touches[0].pageX-e.touches[0].target.offsetLeft,n=e.touches[0].pageY-e.touches[0].target.offsetTop):(i=e.offsetX,n=e.offsetY),t.pointer={x:i,y:n,down:!0,currentId:t.current}}function C(t,e){t.pointer.down=!1}function y(t,e){if(t.pointer.down){var i,n,o=t.images.length;e.touches?(i=e.touches[0].pageX-e.touches[0].target.offsetLeft,n=e.touches[0].pageY-e.touches[0].target.offsetTop):(i=e.offsetX,n=e.offsetY);var a=0;/x/.test(t.config.direction)?a=(i-t.pointer.x)*t.directionSign:/y/.test(t.config.direction)&&(a=(n-t.pointer.y)*t.directionSign);var c=t.pointer.currentId+Math.floor(a/t.config.dragAmount);c<0?c=o- -c%o:c>o&&(c%=o),c!=t.current&&(t.drawImage(c),t.current=c),e.preventDefault()}}function D(t,e){var i,n,o,a,c=t.images.length,r=t.config.hiDPI?Math.max(window.devicePixelRatio,2):1;if(e.touches){var h=e.touches[0].target.getBoundingClientRect(),s=h.x,l=h.y,d=h.width;h.height;i=Math.round(1.04*(e.touches[0].clientX-s)-.02*d),n=Math.round(1.04*(e.touches[0].clientY-l)-.02*d)}else i=e.offsetX,n=e.offsetY;"x"==t.config.direction?(a=t.ctx.canvas.width/r,o=i):"-x"==t.config.direction?o=(a=t.ctx.canvas.width/r)-i-1:"y"==t.config.direction?(a=t.ctx.canvas.height/r,o=n):"-y"==t.config.direction&&(o=(a=t.ctx.canvas.height/r)-n-1);var p,u,g,f=(p=Math.floor(o/a*c),g=c-1,p<(u=0)?u:p>g?g:p);f!=t.current&&(t.drawImage(f),t.current=f,t.config.onSelect&&t.config.onSelect(f)),e.preventDefault()}function j(t,e,i,n){for(var o=Math.min(e.length,6),a=t.length-1,c=t.length,r=0;r<o;r++)h();function h(){if(!(a>=e.length-1)){a++;var o,r=new Image;r.src=e[a],o=a,r.onload=function(t){"function"===typeof i&&i({id:o,img:r,count:++c,total:e.length}),c<e.length&&h(),c==e.length&&"function"===typeof n&&n({total:e.length})},r.onerror=function(t){console.error("Error with: "+e[o])},t.push(r)}}}var E={make:function(t){var e=new x(t);return!1!==e&&w.push(e),e},instances:w},M=i(10),b="ontouchstart"in window||navigator.msMaxTouchPoints,N={mgyon:{width:720,height:1080,initialFrame:6590,initialHour:17,initialMinute:16,finalFrame:7009,finalHour:17,finalMinute:23,list:T("mgyonp/DSCF",6591,7009,[7e3,6764,6825,6732]).filter((function(t,e){return t.photoId<6620||(t.photoId>6969?e%2===0:e%3===0)}))},thunder:{width:720,height:1080,initialFrame:1887,initialHour:21,initialMinute:0,finalFrame:2439,finalHour:21,finalMinute:55,list:T("thunderp/DSCF",1888,2339,[]).filter((function(t,e){return e<30||(t.photoId>2309&&e<190||e%2===1)}))},drone:{width:1080,height:720,initialFrame:8274,initialHour:17,initialMinute:47,finalFrame:8564,finalHour:17,finalMinute:52,list:T("dronep/DSCF",8310,8554,[]).filter((function(t,e){return e>100||e<10||e%2===0}))},expi:{width:720,height:1080,initialFrame:2182,initialHour:1,initialMinute:10,finalFrame:2290,finalHour:1,finalMinute:13,list:[{photoId:2182,path:"expi/DSCF2182.jpg"},{photoId:2185,path:"expi/DSCF2185.jpg"},{photoId:2188,path:"expi/DSCF2188.jpg"},{photoId:2191,path:"expi/DSCF2191.jpg"},{photoId:2194,path:"expi/DSCF2194.jpg"},{photoId:2197,path:"expi/DSCF2197.jpg"},{photoId:2200,path:"expi/DSCF2200.jpg"},{photoId:2203,path:"expi/DSCF2203.jpg"},{photoId:2206,path:"expi/DSCF2206.jpg"},{photoId:2209,path:"expi/DSCF2209.jpg"},{photoId:2212,path:"expi/DSCF2212.jpg"},{photoId:2215,path:"expi/DSCF2215.jpg"},{photoId:2218,path:"expi/DSCF2218.jpg"},{photoId:2221,path:"expi/DSCF2221.jpg"},{photoId:2224,path:"expi/DSCF2224.jpg"},{photoId:2227,path:"expi/DSCF2227.jpg"},{photoId:2230,path:"expi/DSCF2230.jpg"},{photoId:2233,path:"expi/DSCF2233.jpg"},{photoId:2236,path:"expi/DSCF2236.jpg"},{photoId:2239,path:"expi/DSCF2239.jpg"},{photoId:2242,path:"expi/DSCF2242.jpg"},{photoId:2245,path:"expi/DSCF2245.jpg"},{photoId:2248,path:"expi/DSCF2248.jpg"},{photoId:2251,path:"expi/DSCF2251.jpg"},{photoId:2254,path:"expi/DSCF2254.jpg"},{photoId:2257,path:"expi/DSCF2257.jpg"},{photoId:2260,path:"expi/DSCF2260.jpg"},{photoId:2263,path:"expi/DSCF2263.jpg"},{photoId:2266,path:"expi/DSCF2266.jpg"},{photoId:2269,path:"expi/DSCF2269.jpg"},{photoId:2272,path:"expi/DSCF2272.jpg"},{photoId:2275,path:"expi/DSCF2275.jpg"},{photoId:2278,path:"expi/DSCF2278.jpg"},{photoId:2281,path:"expi/DSCF2281.jpg"},{photoId:2284,path:"expi/DSCF2284.jpg"},{photoId:2287,path:"expi/DSCF2287.jpg"},{photoId:2290,path:"expi/DSCF2290.jpg"}]}};for(var L in N)N[L].pathList=N[L].list.map((function(t){return t.path}));var A=["expi","drone","mgyon","thunder"].sort((function(){return Math.random()-.5}));function T(t,e,i,n){return new Array(i-e).fill("").map((function(i,o){return n.includes(e+o)?null:{path:"".concat(t).concat(e+o,".jpg"),photoId:e+o}})).filter((function(t){return!!t}))}function H(t){var e=t.id,i=t.list,n=t.initialFrame,o=t.finalFrame,a=60*(60*t.initialHour+t.initialMinute),c=60*(60*t.finalHour+t.finalMinute);return function(t){var e="0".concat(Math.floor(t/60/60)%24).slice(-2),i="0".concat(Math.floor(t/60)%60).slice(-2),n="0".concat(Math.floor(t%60)).slice(-2),o="00".concat(Math.floor(t%1*100)).slice(-2);return"".concat(e,":").concat(i,":").concat(n,".").concat(o)}((i[e].photoId-n)*((c-a)/(o-n))+a)}function O(t){var e=o.a.useState(!1),i=Object(s.a)(e,2),n=i[0],a=i[1],c=t.name,r=t.list,l=t.height,d=t.width,p=t.active,u=t.onLoad,g=void 0===u?function(){}:u,f=o.a.useState(!0),m=Object(s.a)(f,2),v=m[0],w=m[1],x=o.a.useState(null),I=Object(s.a)(x,2),S=(I[0],I[1]),F=o.a.useState([0,1]),C=Object(s.a)(F,2),y=C[0],D=C[1],j=o.a.useState(-1),M=Object(s.a)(j,2),L=M[0],A=M[1];return o.a.useEffect((function(){if(p&&!n){a(!0);var t={direction:"x",scaleMode:"contain",showLoadedImages:!0,playMode:"hover",originalHeight:l,originalWidth:d,hiDPI:!1,imageLoad:function(t){D([Math.max(y[0],t.count),t.total])},queueComplete:function(t){w(!1),g()},onSelect:function(t){A(t)}},e=E.make(Object(h.a)(Object(h.a)({},t),{},{list:r,canvas:document.querySelector(".swiper-slide.-".concat(c," canvas"))}));window.requestAnimationFrame((function(){e.size()})),window.INSTANCES[c]=e,S(e)}}),[p,n]),o.a.createElement("div",{className:"swiper-slide -".concat(c)},o.a.createElement("div",{className:"canvas-shadow",style:{transform:"translatex(".concat(L/r.length*100-100,"vw)")}}),o.a.createElement("div",{className:"canvas-container"},o.a.createElement("div",{className:"canvas-wrapper"},o.a.createElement("canvas",{className:"canvas",key:"canvas"})),v&&o.a.createElement("div",{className:"info"},"Loading... ",Number(y[0]/y[1]*100).toFixed(0),"%"),!v&&-1===L&&o.a.createElement("div",{className:"info"},b?"\u2190 Scroll \u2192":"\u2190 Hover \u2192"),!v&&-1!==L&&o.a.createElement("div",{className:"info -number"},H(Object(h.a)({id:L},N[c])),"expi"===c&&o.a.createElement("div",{className:"small"}," +",Number(L/r.length*470).toFixed(),"% brigthness"))))}window.INSTANCES={},window.CURRENT_INSTANCE=A[0];var P=function(){var t=o.a.useState(0),e=Object(s.a)(t,2),i=e[0],n=e[1],a=o.a.useState(0),c=Object(s.a)(a,2),h=c[0],l=c[1];return o.a.useEffect((function(){function t(){for(var t in document.querySelectorAll(".swiper-slide").forEach((function(t){t.style.height="".concat(window.innerHeight,"px")})),document.querySelectorAll(".swiper-container").forEach((function(t){t.style.height="".concat(window.innerHeight,"px")})),window.INSTANCES)window.INSTANCES[t].size();var e=document.querySelector(".swiper-slide.-".concat(window.CURRENT_INSTANCE," .canvas-wrapper"));if(e){var i=e.getBoundingClientRect(),n=(i.width,i.height);document.querySelectorAll(".-note-top").forEach((function(t){t.style.height="".concat(Math.round((window.innerHeight-n)/2-window.PADDING_TOP_DIFF+2),"px")})),document.querySelectorAll(".-note-bottom").forEach((function(t){t.style.height="".concat(Math.round((window.innerHeight-n)/2+1.5*window.PADDING_TOP_DIFF),"px")}))}}window.setTimeout((function(){var e=new M.a(".swiper-container",{direction:"vertical",mousewheel:!0});document.body.classList.add("-".concat(A[e.activeIndex])),e.on("slideChange",(function(){var i,n=Object(r.a)(document.body.classList);try{for(n.s();!(i=n.n()).done;){var o=i.value;o.includes("-")&&document.body.classList.remove(o)}}catch(a){n.e(a)}finally{n.f()}document.body.classList.add("-".concat(A[e.activeIndex])),l(e.activeIndex),window.CURRENT_INSTANCE=A[e.activeIndex],window.setTimeout(t,8)})),t()}),8),t(),window.addEventListener("resize",t)}),[]),o.a.useEffect((function(){n(Math.max(i,h))}),[i,h]),o.a.createElement("div",{className:"swiper-container"},o.a.createElement("div",{className:"swiper-wrapper"},A.map((function(t,e){return o.a.createElement(O,{key:t,active:i>=e,onLoad:function(){n(Math.max(i,e+1))},height:N[t].height,width:N[t].width,list:N[t].pathList,name:t})}))),b?o.a.createElement("div",{className:"note -note-top -how"},"Scroll the picture \u2935 to change time."):o.a.createElement("div",{className:"note -note-top -how"},"Hover over the picture \u2935 to change time."),h<A.length-1&&o.a.createElement("div",{className:"note -note-bottom -more"},"There is more \u2193"),h===A.length-1&&o.a.createElement("div",{className:"note -note-bottom -more"},o.a.createElement("div",null,"Photos and web by ",o.a.createElement("a",{href:"https://javier.xyz"},"javierbyte")),o.a.createElement("div",null,"Thanks! v0.17")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.167de211.chunk.js.map