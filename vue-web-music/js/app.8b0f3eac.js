(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b724a":"5a787e21","chunk-37e24c0d":"7db5065f","chunk-773e0af3":"e57c8cb2","chunk-3570ab08":"7335f76a","chunk-3e21364b":"35e9e4e0","chunk-46a943ba":"b2508ddf","chunk-5485aa56":"781a2551","chunk-5b903ff4":"7a067560","chunk-620ad018":"caa33dd4"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-37e24c0d":1,"chunk-773e0af3":1,"chunk-3570ab08":1,"chunk-3e21364b":1,"chunk-46a943ba":1,"chunk-5485aa56":1,"chunk-5b903ff4":1,"chunk-620ad018":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0b724a":"31d6cfe0","chunk-37e24c0d":"55a29fc0","chunk-773e0af3":"47381c7e","chunk-3570ab08":"e84e99de","chunk-3e21364b":"12cdeab2","chunk-46a943ba":"bc75844c","chunk-5485aa56":"78e44621","chunk-5b903ff4":"3eb5c210","chunk-620ad018":"a5b56a46"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-web-music/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a94":function(t,e,n){"use strict";var a=n("a82d"),r=n.n(a);r.a},"0af3":function(t,e,n){"use strict";var a=n("8b5d"),r=n.n(a);r.a},"2bdf":function(t,e,n){t.exports=n.p+"img/bg-song.52d59ddd.png"},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"playing",(function(){return E})),n.d(a,"playerFullScreen",(function(){return j})),n.d(a,"playMode",(function(){return F})),n.d(a,"currentIndex",(function(){return I})),n.d(a,"currentSong",(function(){return O})),n.d(a,"currentSongDetail",(function(){return B})),n.d(a,"currentPlayList",(function(){return q}));var r={};n.r(r),n.d(r,"setPlaying",(function(){return z})),n.d(r,"changePlayerFullScreen",(function(){return R})),n.d(r,"setPlayMode",(function(){return X})),n.d(r,"setCurrentSong",(function(){return H})),n.d(r,"setCurrentPlayList",(function(){return A}));n("66cf");var i=n("343b"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.playerFullScreen,expression:"!this.$store.state.playerFullScreen"}],staticClass:"top",style:{"margin-bottom":t.mt60}},[n("router-view")],1),n("ConPlayer")],1)},s=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"con-player"},[t.currentSongDetail?a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:this.playerFullScreen,expression:"this.playerFullScreen"}],staticClass:"full"},[a("div",{staticClass:"bg-bg",style:{"background-image":"url("+t.currentSongDetail.al.picUrl+")"}}),a("TopBar",{attrs:{title:t.currentSongDetail.name,"title-sub":t.currentSongDetail.ar[0].name,icon:"fenxiang1"},on:{backMethod:t.changePlayerFullScreen}}),a("div",{staticClass:"middle"},[a("div",{staticClass:"record"},[a("div",{staticClass:"bg-transparent"}),a("img",{staticClass:"bg-cd",style:{"animation-play-state":t.rotatePaused},attrs:{src:n("2bdf"),alt:""}}),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSongDetail.al.picUrl,expression:"currentSongDetail.al.picUrl"}],staticClass:"cd",style:{"animation-play-state":t.rotatePaused},attrs:{alt:""}})])]),a("footer",[t._m(0),a("div",{staticClass:"scroll-bar-wrap"},[a("span",{domProps:{innerHTML:t._s(t.currentTime)}}),a("div",{ref:"scrollBar",staticClass:"scroll-bar"},[a("div",{staticClass:"progress-dark",on:{touchstart:t.barTouchStart,touchmove:t.barTouchMove,touchend:t.barTouchEnd}}),a("div",{staticClass:"progress-big",style:{width:100*t.barX+"%"},on:{touchstart:t.barTouchStart,touchmove:t.barTouchMove,touchend:t.barTouchEnd}}),a("div",{staticClass:"bar",style:{left:100*t.barX+"%",transform:t.barScale},on:{touchstart:t.barTouchStart,touchmove:t.barTouchMove,touchend:t.barTouchEnd}})]),a("span",{domProps:{innerHTML:t._s(t.duration)}})]),a("div",{staticClass:"controll"},[a("i",{class:"iconfont icon-"+t.playMode[1],on:{click:t.toggelMode}}),a("i",{staticClass:"iconfont icon-shangyiqu101",on:{click:function(e){return t.audioChangeSong(!1)}}}),a("i",{staticClass:"iconfont",class:[t.playing?"icon-zanting":"icon-bofang1"],on:{click:function(e){return t.audioPlay(!1)}}}),a("i",{staticClass:"iconfont icon-xiayiqu101",on:{click:function(e){return t.audioChangeSong(!0)}}}),a("i",{staticClass:"iconfont icon-PlayListbofangliebiao",on:{click:function(e){t.showPlayList=!t.showPlayList}}})])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!this.playerFullScreen,expression:"!this.playerFullScreen"}],staticClass:"normal",on:{click:t.changePlayerFullScreen}},[a("div",{staticClass:"wrapper"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSongDetail.al.picUrl,expression:"currentSongDetail.al.picUrl"}]}),a("p",[a("span",{domProps:{innerHTML:t._s(t.currentSongDetail.name)}}),a("span",{domProps:{innerHTML:t._s(t.currentSongDetail.ar[0].name)}})]),a("i",{staticClass:"iconfont",class:[t.playing?"icon-zanting":"icon-bofang"],on:{click:function(e){return e.stopPropagation(),t.audioPlay(!1)}}}),a("i",{staticClass:"iconfont icon-24gf-playlist",on:{click:function(e){e.stopPropagation(),t.showPlayList=!t.showPlayList}}})])])]):t._e(),a("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{playing:t.audioPlaying,pause:t.audioPlaying,canplay:t.audioPlay,timeupdate:t.audioTimeupdate,ended:t.audioEnd}}),a("Popup",{style:{width:"90%",height:"70%","margin-left":"5%","border-radius":"10px","margin-bottom":"10px"},attrs:{round:"",position:"bottom"},model:{value:t.showPlayList,callback:function(e){t.showPlayList=e},expression:"showPlayList"}},[a("div",{staticClass:"pop-play-list"},[a("header",[a("p",[t._v(" 当前播放"),a("span",[t._v("("+t._s(t.currentPlayList.length)+")")])]),a("div",[a("p",[a("i",{class:"iconfont icon-"+t.playMode[1]}),a("span",[t._v(t._s(t.playMode[2]))])]),a("p",[a("i",{staticClass:"iconfont icon-shoucangjia"}),a("span",[t._v("收藏全部")]),a("span",{staticClass:"iconfont icon-shanchu van-hairline--left",on:{click:function(e){return t.deleteSong(t.index,!0)}}})])])]),t._l(t.currentPlayList,(function(e,n){return a("div",{key:n,staticClass:"pop-song"},[a("p",[t._v(" "+t._s(e.al.name)),a("span",[t._v(" - "+t._s(e.ar[0].name))])]),a("i",{staticClass:"iconfont icon-guanbixiao",on:{click:function(e){return t.deleteSong(n)}}})])}))],2)])],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-bar-wrap"},[n("i",{staticClass:"iconfont icon-yizhuifan"}),n("i",{staticClass:"iconfont icon-ziyuan"}),n("i",{staticClass:"iconfont icon-yinle2"}),n("i",{staticClass:"iconfont icon-pinglun"}),n("i",{staticClass:"iconfont icon-ellipsis-circle"})])}],d=(n("a434"),n("8a58"),n("e41f")),h=n("5530"),f=n("2f62"),p=n("d99a"),g={name:"Player",data:function(){return{ct:0,currentTime:"00:00",duration:"00:00",barX:0,barScale:"scale(1)",touch:!1,rotatePaused:"",mode:[[0,"xunhuanbofang","列表循环"],[1,"danquxunhuan1","单曲循环"],[2,"suijibofang","随机播放"]],showPlayList:!1}},computed:Object(h["a"])({},Object(f["c"])(["playing","playerFullScreen","playMode","currentSong","currentIndex","currentSongDetail","currentPlayList"])),methods:Object(h["a"])({audioPlaying:function(){this.rotatePaused=this.$refs.audio.paused?"paused":""},audioEnd:function(){1===this.playMode[0]?this.$refs.audio.currentTime=0:this.audioChangeSong()},audioTimeupdate:function(){this.$refs.audio&&!this.touch&&parseInt(this.$refs.audio.currentTime)!==this.ct&&(this.barX=this.$refs.audio.currentTime/(this.currentSongDetail.dt/1e3),this.ct=parseInt(this.$refs.audio.currentTime),this.currentTime=this.getCompleteTime(this.ct),this.$forceUpdate())},toggelMode:function(){var t=(this.playMode[0]+1)%3;this.setPlayMode(this.mode[t])},audioPlay:function(t){t?this.setPlaying(t):this.setPlaying(!this.playing),this.duration=this.getCompleteTime(this.currentSongDetail.dt/1e3),this.playing?this.$refs.audio.play():this.$refs.audio.pause()},audioChangeSong:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];2===this.playMode[0]?this.randomBroadcast():(t=e?this.currentIndex===this.currentPlayList.length-1?0:this.currentIndex+1:this.currentIndex?this.currentIndex-1:this.currentPlayList.length-1,this.setSong(t))},getCompleteTime:function(t){parseInt(t/3600);var e=parseInt(t%3600/60),n=parseInt(t%3600%60),a="";return a+=String(e).length>1?e:"0"+e+":",a+=String(n).length>1?n:"0"+n,a},randomBroadcast:function(){var t=Math.floor(Math.random()*this.currentPlayList.length);t!==this.currentIndex?this.setSong(t):this.randomBroadcast()},setSong:function(t){var e=this;this.$api.playerRequest.getSongUrl(this.currentPlayList[t].id).then((function(n){e.setCurrentSong({currentIndex:t,currentSong:n.data[0],currentSongDetail:e.currentPlayList[t]})}))},barTouchStart:function(){this.barScale="scale(2)",this.touch=!0,this.barTouchMove()},barTouchMove:function(){var t=(event.touches[0].pageX-this.$refs.scrollBar.offsetLeft)/this.$refs.scrollBar.clientWidth;this.barX=t>1?"1":t<0?0:t,this.currentTime=this.getCompleteTime(this.barX*this.$refs.audio.duration)},barTouchEnd:function(){this.barScale="scale(1)",this.touch=!1,this.$refs.audio.currentTime=this.$refs.audio.duration*this.barX,this.playing?this.$refs.audio.play():this.$refs.audio.pause()},deleteSong:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?console.log(e):(console.log(t,this.currentPlayList),this.currentPlayList.splice(t,1),console.log(this.currentPlayList))}},Object(f["b"])({setPlaying:"setPlaying",setPlayMode:"setPlayMode",changePlayerFullScreen:"changePlayerFullScreen",setCurrentSong:"setCurrentSong"})),components:{TopBar:p["a"],Popup:d["a"]},directives:{vLazy:i["a"]}},y=g,m=(n("0a94"),n("2877")),b=Object(m["a"])(y,u,l,!1,null,"0284cefe",null),v=b.exports,S={name:"app",computed:{mt60:function(){return this.$store.state.currentIndex?"60px":0}},components:{ConPlayer:v}},P=S,C=(n("5c0b"),Object(m["a"])(P,c,s,!1,null,null,null)),k=C.exports,L=(n("d3b7"),n("8c4f"));o["a"].use(L["a"]);var w=[{path:"/",component:function(){return n.e("chunk-5b903ff4").then(n.bind(null,"1e4b"))},children:[{path:"/",redirect:"/found"},{path:"/found",name:"found",meta:{index:1},component:function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-37e24c0d")]).then(n.bind(null,"b4d3"))}},{path:"/user",name:"user",meta:{index:0},component:function(){return n.e("chunk-46a943ba").then(n.bind(null,"1511"))}},{path:"/yunchun",name:"yunchun",meta:{index:2},component:function(){return n.e("chunk-5485aa56").then(n.bind(null,"227c"))}},{path:"/video",name:"video",meta:{index:3},component:function(){return n.e("chunk-3570ab08").then(n.bind(null,"81a8"))}}]},{path:"/play-list/:id",name:"playList",component:function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-773e0af3")]).then(n.bind(null,"fddd"))}},{path:"/play-lists",name:"playList",component:function(){return n.e("chunk-620ad018").then(n.bind(null,"ba2b"))}},{path:"/search",name:"Search",component:function(){return n.e("chunk-3e21364b").then(n.bind(null,"2d3b"))}}],x=new L["a"]({mode:"history",base:"/vue-web-music/",routes:w}),T=x,_={SET_FULL_SCREEN:"SET_FULL_SCREEN"},M=_,$={playing:null,playerFullScreen:!1,playMode:[0,"xunhuanbofang","列表循环"],currentIndex:null,currentSong:{},currentSongDetail:null,currentPlayList:[]},D=$,E=function(t){return t.playing},j=function(t){return t.playerFullScreen},F=function(t){return t.playMode},I=function(t){return t.currentIndex},O=function(t){return t.currentSong},B=function(t){return t.currentSongDetail},q=function(t){return t.currentPlayList},N={setPlaying:function(t,e){t.playing=e},changePlayerFullScreen:function(t){t.playerFullScreen=!t.playerFullScreen},setPlayMode:function(t,e){t.playMode=e},setCurrentIndex:function(t,e){t.currentIndex=e},setCurrentSong:function(t,e){t.currentSong=e},setCurrentSongDetail:function(t,e){t.currentSongDetail=e},setCurrentPlayList:function(t,e){t.currentPlayList=e}},U=N,z=function(t,e){var n=t.commit;n("setPlaying",e)},R=function(t){var e=t.commit;e("changePlayerFullScreen")},X=function(t,e){var n=t.commit;n("setPlayMode",e)},H=function(t,e){var n=t.commit,a=e.currentSong,r=e.currentSongDetail,i=e.currentIndex;console.log(a,r,i),n("setPlaying",!0),n("setCurrentIndex",i),n("setCurrentSong",a),n("setCurrentSongDetail",r)},A=function(t,e){var n=t.commit,a=e.currentPlayList;console.log(a),n("setCurrentPlayList",a)};o["a"].use(f["a"]);var J=new f["a"].Store({types:M,state:D,getters:a,mutations:U,actions:r}),K=n("bc3a"),W=n.n(K);W.a.defaults.baseURL="http://47.97.249.197:3000";var G=W.a.create({timeout:1e4});G.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",G.interceptors.request.use((function(t){return t}),(function(t){return Promise.error(t)})),G.interceptors.response.use((function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)}),(function(t){return Promise.reject(t)}));var Q=G,V={getBanners:function(){return Q.get("/banner")},getRecommendPlayList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15;return Q.get("/personalized",{params:{limit:t}})}},Y=V,Z={getSongUrl:function(t){return Q.get("/song/url",{params:{id:t}})},getSongDetail:function(t){return Q.get("/song/detail",{params:{ids:t}})}},tt=Z,et={getPlayListDetail:function(t){return Q.get("/playlist/detail",{params:{id:t}})},getPlayListHotCatList:function(){return Q.get("/playlist/hot")},getPlayListCatList:function(){return Q.get("/playlist/catlist")},getPlayListHighquality:function(t,e,n){return console.log(t,e),Q.get("/top/playlist/highquality",{params:{cat:t,limit:e,before:n}})},getTopPlayList:function(t,e,n){return Q.get("/top/playlist",{params:{cat:t,limit:e,order:n}})}},nt=et,at={getSearchDefault:function(){return Q.get("/search/default")},search:function(t,e,n,a){return Q.get("/search",{params:{keywords:t,type:a,limit:e,offset:n}})}},rt=at,it={foundRequest:Y,playerRequest:tt,playListRequest:nt,searchRequest:rt},ot=(n("157a"),n("b37a"),n("4ee2"),n("fe3c")),ct=n.n(ot);ct.a.attach(document.body),o["a"].use(i["a"],{lazyComponent:!0}),o["a"].prototype.$api=it,o["a"].config.productionTip=!1,new o["a"]({router:T,store:J,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"8b5d":function(t,e,n){},"9c0c":function(t,e,n){},a82d:function(t,e,n){},b37a:function(t,e,n){},d99a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"con-top-bar",style:{color:t.color,background:t.background}},[n("i",{staticClass:"left iconfont icon-back1",on:{click:t.backMethod}}),t._t("center",[t.titleSub?n("p",{staticClass:"title-sub"},[n("span",[t._v(t._s(t.title))]),n("span",[t._v(t._s(t.titleSub))])]):n("p",{staticClass:"title"},[n("span",[t._v(t._s(t.title))])])]),t.icon?n("i",{class:"right iconfont icon-"+t.icon}):t._e()],2)},r=[],i={name:"TopBar",props:{title:String,titleSub:String,icon:String,isBack:Boolean,color:String,background:String},methods:{backMethod:function(){this.isBack?this.$router.go(-1):this.$emit("backMethod")}}},o=i,c=(n("0af3"),n("2877")),s=Object(c["a"])(o,a,r,!1,null,"72081769",null);e["a"]=s.exports}});