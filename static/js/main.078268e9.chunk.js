(this["webpackJsonpboard-games-frontend"]=this["webpackJsonpboard-games-frontend"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),s=(a(22),a(13)),i=a(14),l=a(16),m=a(15),u=(a(23),function(e){return r.a.createElement("div",{className:"Game"},r.a.createElement("p",{onClick:e.click},"I'm ",e.name," and number of players is: ",e.playersNumber),r.a.createElement("img",{src:e.img,alt:""}),r.a.createElement("p",null,e.children))}),d=a(2),h=a.n(d),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={characters:[],isLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",h.a.get("https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY").then((function(t){e.setState({characters:t.data,isLoaded:!0})}))}},{key:"render",value:function(){var e=this.state.characters.map((function(e){return r.a.createElement(u,{name:e.name,playersNumber:e.playersNumber,img:e.imgUrl})})),t=this.setState,a=t.isLoaded;t.chars;return!1===a?r.a.createElement("div",null,"Loading.."):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hi, welcome to BoardGames!"),r.a.createElement("h1",null," That's your games:"),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.078268e9.chunk.js.map