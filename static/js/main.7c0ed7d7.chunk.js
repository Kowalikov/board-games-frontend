(this["webpackJsonpboard-games-frontend"]=this["webpackJsonpboard-games-frontend"]||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},40:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),i=a.n(s),o=(a(38),a(15)),l=a(17),c=a.n(l),u=a(31),m=a(3),g=a(4),p=a(6),h=a(5),d=(a(40),a(11)),b=a(1),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"clicked",value:function(){console.log(this.props.name),this.props.history.push(this.props.name)}},{key:"render",value:function(){var e=this,t="/"+this.props.name;return r.a.createElement("div",{className:"Game"},r.a.createElement("p",{onClick:function(t){return e.clicked(t)}},"I'm",r.a.createElement(d.b,{to:t}," ",this.props.name," "),"and number of players is: ",this.props.playersNumber),r.a.createElement("img",{src:this.props.img,alt:""}),r.a.createElement("p",null,this.props.children))}}]),a}(n.Component),v=Object(b.f)(f),y=a(14),E=a.n(y),j=(a(63),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.submitting;return r.a.createElement("div",{className:"LogPanel"},r.a.createElement("p",null,"Username:"),r.a.createElement("input",{type:"text",onChange:this.props.changedUsername,onKeyPress:this.props.enterLogin}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"loginButton",onClick:this.props.submit,disabled:e},e&&r.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e&&r.a.createElement("span",null,"Logging in"),!e&&r.a.createElement("span",null,"Log in")),!0===this.props.wrongLoginData&&r.a.createElement("p",{style:{color:"red"}},"Wrong login data"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"gotoRegisterButton",onClick:this.props.gotoRegister},"Sign in"),r.a.createElement("p",null,this.props.children))}}]),a}(n.Component)),L=(a(64),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r)))._handleKeyDown=function(t){if("Enter"===t.key)return e.props.register},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.submitting;return r.a.createElement("div",{className:"RegistrationPanel"},r.a.createElement("p",null,"Username:"),r.a.createElement("input",{type:"text",onChange:this.props.changedUsername,onKeyPress:this.props.enterRegister}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"registrationButton",onClick:this.props.register,disabled:e},e&&r.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e&&r.a.createElement("span",null,"Registering"),!e&&r.a.createElement("span",null,"Register")),!0===this.props.unavaliableUsername&&r.a.createElement("p",{style:{color:"red"}},"That username is unavaliable"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"gotoLoginButton",onClick:this.props.gotoLogin},"Login screen"),r.a.createElement("p",null,this.props.children))}}]),a}(n.Component)),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Warcaby"},r.a.createElement("p",null,"Warcaby bejbo"))}}]),a}(n.Component),k=Object(b.f)(w),O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Szachy"},r.a.createElement("p",null,"Szachy bejbo"))}}]),a}(n.Component),R=Object(b.f)(O),H=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Tictactoe"},r.a.createElement("p",null,"Tictactoe bejbo"))}}]),a}(n.Component),C=Object(b.f)(H),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={games:[],users:[],usersLoaded:!1,gamesListLoaded:!1,isLogged:!1,isRegistered:!1,wantRegister:!1,username:null,password:null,loading:!1,wrongLoginData:!1,unavaliableUsername:!1},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",E.a.get("https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY").then((function(t){e.setState({games:t.data,gamesListLoaded:!0})}));E.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",E.a.get("https://boardgames1.herokuapp.com/register/").then((function(t){e.setState({users:t.data,usersLoaded:!0})}))}},{key:"enterRegisterHandler",value:function(e){13===e.charCode&&this.submitRegisterHandler()}},{key:"submitRegisterHandler",value:function(e){var t=this;function a(){return(a=Object(u.a)(c.a.mark((function e(){var t,a,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return a.apply(this,arguments)})("https://boardgames1.herokuapp.com/register/",{username:this.state.username}).then((function(e){console.log(e.status),201===e.status?(console.log("Zarejestrowany"),t.setState({usersLoaded:!0,isLogged:!0,unavaliableUsername:!1,isRegistered:!0})):400===e.status?(t.setState({unavaliableUsername:!0}),console.log("Z\u0142a nazwa")):console.log("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem")}))}},{key:"enterLoginHandler",value:function(e){13===e.charCode&&this.submitLoginHandler()}},{key:"submitLoginHandler",value:function(e){var t=this;this.setState({loading:!0});var a=this.state.username;this.state.users.map((function(e){a===e.username&&(t.setState({loading:!1}),t.setState({isLogged:!0}),t.setState({wrongLoginData:!1}))})),!1===this.state.isLogged&&(this.setState({loading:!1}),this.setState({wrongLoginData:!0}))}},{key:"usernameChangeHandler",value:function(e){var t=Object(o.a)({},this.state);t.username=e.target.value,this.setState({username:t.username})}},{key:"passwordChangeHandler",value:function(e){var t=Object(o.a)({},this.state);t.password=e.target.value,this.setState({password:t.password})}},{key:"gotoLoginHandler",value:function(e){var t=Object(o.a)({},this.state);t.wantRegister=!1,this.setState({wantRegister:t.wantRegister})}},{key:"gotoRegisterHandler",value:function(e){var t=Object(o.a)({},this.state);t.wantRegister=!0,this.setState({wantRegister:t.wantRegister})}},{key:"render",value:function(){var e=this,t={color:"#0D0A0B"},a=this.state.games.map((function(e,t){return r.a.createElement(v,{name:e.name,key:e.id,playersNumber:e.playersNumber,img:e.imgUrl})}));this.state.games.map((function(e,t){return r.a.createElement(b.c,null,r.a.createElement(b.a,{path:e.name,exact:!0,component:e.name}))}));return!1===this.state.gamesListLoaded||!1===this.state.usersLoaded?r.a.createElement("div",null,"Loading..."):!1===this.state.wantRegister&&!1===this.state.isRegistered&&!1===this.state.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:t},"Hi, welcome to BoardGames!"),r.a.createElement(j,{changedUsername:function(t){return e.usernameChangeHandler(t)},submit:function(t){return e.submitLoginHandler(t)},enterLogin:function(t){return e.enterLoginHandler(t)},submitting:this.state.loading,gotoRegister:function(t){return e.gotoRegisterHandler(t)},wrongLoginData:this.state.wrongLoginData})):!0===this.state.wantRegister&&!1===this.state.isLogged&&!1===this.state.isRegistered?r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:t},"Hi, welcome to BoardGames!"),r.a.createElement(L,{changedUsername:function(t){return e.usernameChangeHandler(t)},register:function(t){return e.submitRegisterHandler(t)},enterRegister:function(t){return e.enterRegisterHandler(t)},submitting:this.state.loading,gotoLogin:function(t){return e.gotoLoginHandler(t)},unavaliableUsername:this.state.unavaliableUsername})):r.a.createElement("div",{className:"App"},r.a.createElement("h1",{style:t},"Hi ",this.state.username,", welcome to BoardGames!"),r.a.createElement("h1",{style:t}," That's your games:"),a,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/Warcaby",exact:!0,component:k}),r.a.createElement(b.a,{path:"/Szachy",exact:!0,component:R}),r.a.createElement(b.a,{path:"/K\xf3\u0142ko i krzy\u017cyk",exact:!0,component:C})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=r.a.createElement(d.a,null,r.a.createElement(S,null));i.a.render(N,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.7c0ed7d7.chunk.js.map