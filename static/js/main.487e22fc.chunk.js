(this["webpackJsonpboard-games-frontend"]=this["webpackJsonpboard-games-frontend"]||[]).push([[0],{40:function(e,t,a){e.exports=a(77)},45:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"userTypes",(function(){return j})),a.d(n,"userActions",(function(){return D})),a.d(n,"default",(function(){return ue}));var r=a(0),s=a.n(r),o=a(21),i=a.n(o),c=(a(45),a(3)),u=a(4),l=a(6),m=a(5),p=a(1),d=a(13),h=a.n(d),g=a(17),b=a(9),f=a.n(b),O=a(15),y=a(2),E=a(14),j={CHANGE_USERNAME:"CHANGE_USERNAME",SET_ID:"SET_ID",CHANGE_PASSWORD:"CHANGE_PASSWORD",GOTO_REGISTER:"GOTO_REGISTER",GOTO_LOGIN:"GOTO_LOGIN",SET_LOGGED_IN:"SET_LOGGED_IN",FAILED_LOGIN:"FAILED_LOGIN",SET_REGISTERED:"SET_REGISTERED",UNAVALIABLE_USERNAME:"UNAVALIABLE_USERNAME",FAILED_REGISTRATION:"FAILED_REGISTRATION",LOAD_GAMES:"LOAD_GAMES",LOAD_USERS:"LOAD_USERS"},D={changeUsername:function(e){return{type:j.CHANGE_USERNAME,username:e}},setID:function(e){return{type:j.SET_ID,userID:e}},changePassword:function(e){return{type:j.CHANGE_PASSWORD,password:e}},gotoRegister:function(){return{type:j.GOTO_REGISTER}},gotoLogin:function(){return{type:j.GOTO_LOGIN}},setLoggedIn:function(){return{type:j.SET_LOGGED_IN}},failedLogin:function(){return{type:j.FAILED_LOGIN}},setRegistered:function(){return{type:j.SET_REGISTERED}},unavaliableUsername:function(){return{type:j.UNAVALIABLE_USERNAME}},failedRegistration:function(){return{type:j.FAILED_REGISTRATION}},loadGames:function(e){return{type:j.LOAD_GAMES,games:e}},loadUsers:function(e){return{type:j.LOAD_USERS,users:e}}},v="MATCHES_UNLOADED",S="LOAD_MATCHES",M="FULL_LOAD_MATCH",L="JOIN_MATCH",k="MATCH_NOT_JOINED",I="INIT_GAME",R="UPDATE_BOARDSTATE",N="FINISH_GAME",G="NEXT_PLAYER",A="SET_MARK",w=function(){return{type:v}},P=function(e){return{type:S,matches:e}},T=function(){return{type:M}},_=function(e,t,a,n,r){return{type:L,roomID:e,roomGameName:t,roomGameID:a,players:n,maxPlayers:r}},C=function(){return{type:k}},U=function(e,t){return{type:I,gameName:e,gameID:t}},x=function(e){return{type:R,boardState:e}},H=function(){return{type:N}},z=function(e){return{type:G,nextPlayer:e}},J=function(e){return{type:A,mark:e}},q=(a(68),a(69),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"clicked",value:function(){console.log("K\xf3\u0142ko i krzy\u017cyk"===this.props.name);var e="/";e="K\xf3\u0142ko i krzy\u017cyk"===this.props.name?"/tictactoe":"/"+this.props.name,this.props.history.push(e)}},{key:"render",value:function(){var e=this,t="/";return t="K\xf3\u0142ko i krzy\u017cyk"===this.props.name?"/tictactoe":"/"+this.props.name,s.a.createElement("div",{className:"Game"},s.a.createElement("p",{onClick:function(t){return e.clicked(t)}},"I'm",s.a.createElement(O.b,{to:t}," ",this.props.name," "),"and number of players is: ",this.props.playersNumber),s.a.createElement("img",{src:this.props.img,alt:""}),s.a.createElement("p",null,this.props.children))}}]),a}(r.Component)),F=Object(y.f)(q),W=(a(71),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gameId:n.props.gameId,id:n.props.id,datakey:n.props.datakey,playersArray:n.props.players,maxPlayers:n.props.maxPlayers,isMatchJoined:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"loadMatchesFromServer",value:function(){var e=this;this.props.matchesUnloaded();var t="https://boardgames1.herokuapp.com/matches/"+this.props.gameData.gameID.toString();f.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",f.a.get(t).then((function(t){var a,n;e.props.loadMatches(t.data.matches);var r=!1;for(console.log(t.data),a=0;a<t.data.matches.length;a++)for(n=0;n<t.data.matches[a].players.length;n++)t.data.matches[a].players[n].userId===e.props.userSession.userData.userID&&(e.props.joinMatch(t.data.matches[a].id,t.data.name,t.data.id,t.data.matches[a].players,t.data.matches[a].maxPlayers),r=!0,e.props.initGame(t.data.name,t.data.id));!1===r&&e.props.initGame(e.props.games.name,e.props.games.id),e.props.fullLoadMatch()}))}},{key:"clickedJoin",value:function(e){var t=this,a={match:this.state.id,playerName:this.props.userSession.userData.userID};function n(){return(n=Object(g.a)(h.a.mark((function e(){var t,a,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Article"),console.log(a),function(){return n.apply(this,arguments)}("https://boardgames1.herokuapp.com/join-match/",a).then((function(e){console.log(e.status),201===e.status?(console.log("Joined"),t.loadMatchesFromServer()):500===e.status?window.alert("You are already in room"):(console.log("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"),window.alert("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"text-and-button"},!1===this.props.sessionMetadata.isMatchJoined&&s.a.createElement("div",{className:"Room"},s.a.createElement("p",null,"Room #",this.state.id," | players: [",this.props.roomData.matches[this.state.datakey].players.length,"/",this.props.roomData.matches[this.state.datakey].maxPlayers,"]"),s.a.createElement("button",{onClick:function(t){return e.clickedJoin(t)}}," join"),s.a.createElement("p",null,this.props.children)))}}]),a}(r.Component)),B=Object(E.b)((function(e){return Object(p.a)(Object(p.a)({},e.gameSession),{},{userSession:Object(p.a)({},e.userSession)})}),(function(e){return{matchesUnloaded:function(){return e(w())},loadMatches:function(t){return e(P(t))},fullLoadMatch:function(){return e(T())},joinMatch:function(t,a,n,r,s){return e(_(t,a,n,r,s))},matchNotJoined:function(){return e(C())},initGame:function(t,a){return e(U(t,a))}}}))(Object(y.f)(W)),X=(a(72),a(73),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Szachy"},s.a.createElement("p",null,"Szachy bejbo"))}}]),a}(r.Component)),K=a(39);a(74);function Y(e){return s.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var V=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderSquare",value:function(e){var t=this;if("undefined"!==typeof this.props.squares)return s.a.createElement(Y,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),s.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),s.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.Component),Z=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).ws=new WebSocket("wss://boardgames1.herokuapp.com/ws/match/"+n.props.roomData.joinedRoom.toString()),n.firstMessage=!0,n.sendMessage=function(e){try{var t={boardState:e.state.boardState,playerId:n.props.userSession.userData.userID};console.log("Send",JSON.stringify(t)),n.ws.send(JSON.stringify(t))}catch(a){console.log(a)}},n.state={boardState:Array(9).fill(null),stepNumber:0,nextPlayer:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Tictactoe props: ",this.props),this.setState(Object(p.a)(Object(p.a)({},this.state),{},{boardState:this.props.roomData.boardState,nextPlayer:this.props.roomData.nextPlayer})),this.ws.onopen=function(){console.log("connected")},this.ws.onmessage=function(t){var a;if(e.props.roomData.finishGame)return console.log("Server finished data",t.data),a=JSON.parse(t.data),e.winner=a.winner,null;if(1==e.firstMessage){a=JSON.parse(t.data),console.log("Server initial data",a),e.firstMessage=!1,a.data.players[0].userId===e.props.userSession.userData.userID?e.props.setMark(a.data.players[0].mark):a.data.players[1].userId===e.props.userSession.userData.userID?e.props.setMark(a.data.players[1].mark):console.log("Warning: no mark assigned"),e.props.updateBoardState(a.data.state),e.setState((function(e,t){return{boardState:a.data.state,nextPlayer:a.data.currentPlayer,step:0}})),e.props.nextPlayer(a.data.currentPlayer);"FINISHED"===a.data.status&&e.props.finishGame()}else{a=JSON.parse(t.data),console.log("Server data update",a),e.props.roomData.activePlayers[0].userId===e.props.userSession.userData.userID?e.props.setMark(e.props.roomData.activePlayers[0].mark):e.props.roomData.activePlayers[1].userId===e.props.userSession.userData.userID?e.props.setMark(e.props.roomData.activePlayers[1].mark):console.log("Warning: no mark assigned"),"undefined"===typeof a.data&&(a=a.data),e.props.updateBoardState(a.state),e.setState((function(e,t){return{boardState:a.state,nextPlayer:a.currentPlayer,step:0}})),console.log("Payload data state update",a.state),e.props.nextPlayer(a.currentPlayer);"FINISHED"===a.status&&e.props.finishGame()}},this.ws.onclose=function(){console.log("disconnected")}}},{key:"handleClick",value:function(e){var t,a=this.props.roomData.boardState;if(console.log(a),this.props.roomData.nextPlayer!==this.props.userSession.userData.userID)return console.log("It's not your turn"),null;var n="";for(t=0;t<9;t++)n+=t==e?this.props.roomData.myMark:a[t];console.log(n),this.sendMessage({username:this.props.userSession.userData.username,state:{boardState:n}});var r=this.state.stepNumber;!function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(K.a)(t[a],3),r=n[0],s=n[1],o=n[2];if("-"!==e[r]&&"-"!==e[s]&&"-"!==e[o]&&e[r]&&e[r]===e[s]&&e[r]===e[o])return e[r]}return null}(n)?"X"===this.props.roomData.myMark?this.setState({boardState:n,stepNumber:r+1,nextPlayer:"O"}):this.setState({boardState:n,stepNumber:r+1,nextPlayer:"X"}):this.props.finishGame()}},{key:"jumpTo",value:function(e){this.setState({boardState:{squares:Array(9).fill(null)},stepNumber:e})}},{key:"render",value:function(){var e,t=this,a=s.a.createElement("button",{onClick:function(){return t.jumpTo(0)}},"Go to game start"),n=this.state.boardState;return e=this.props.roomData.finished?"Winner: "+this.props.roomData.myMark:"Next player: "+this.props.roomData.nextPlayer,s.a.createElement("div",{className:"game"},this.props.roomData.finished?s.a.createElement("p",null,"Finished"):s.a.createElement("div",{className:"game-board"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(V,{squares:n,onClick:function(e){return t.handleClick(e)}}),s.a.createElement("br",null)),s.a.createElement("div",{className:"game-info"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,e),s.a.createElement("br",null),s.a.createElement("div",null,a)))}}]),a}(r.Component),$=Object(E.b)((function(e){return Object(p.a)(Object(p.a)({},e.gameSession),{},{userSession:Object(p.a)({},e.userSession),joinedRoom:Object(p.a)({},e.gameSession.roomData.joinedRoom)})}),(function(e){return{matchesUnloaded:function(){return e(w())},loadMatches:function(t){return e(P(t))},fullLoadMatch:function(){return e(T())},joinMatch:function(t,a,n){return e(_(t,a,n))},matchNotJoined:function(){return e(C())},finishGame:function(){return e(H())},updateBoardState:function(t){return e(x(t))},nextPlayer:function(t){return e(z(t))},setMark:function(t){return e(J(t))}}}))(Object(y.f)(Z));var Q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"loadMatchesFromServer",value:function(){var e=this;this.props.matchesUnloaded();var t="https://boardgames1.herokuapp.com/matches/"+this.props.games.id.toString();f.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",f.a.get(t).then((function(t){var a,n;e.props.loadMatches(t.data.matches);var r=!1;for(a=0;a<t.data.matches.length;a++)for(n=0;n<t.data.matches[a].players.length;n++)t.data.matches[a].players[n].userId===e.props.userSession.userData.userID&&(e.props.joinMatch(t.data.matches[a].id,t.data.name,t.data.id,t.data.matches[a].players,t.data.matches[a].maxPlayers),r=!0,e.props.initGame(t.data.name,t.data.id));!1===r&&e.props.initGame(e.props.games.name,e.props.games.id),e.props.fullLoadMatch()}))}},{key:"componentDidMount",value:function(){this.loadMatchesFromServer()}},{key:"game",value:function(){return 1===this.props.gameData.gameID?s.a.createElement($,null):s.a.createElement(X,null)}},{key:"testWebsocket",value:function(){console.log("Sprawdzam ostatni stan"),this.state.ws.sendMessage({username:this.props.userSession.userData.username,state:{boardState:"--------X"}}),console.log("State from the store: ",this.props.roomData.boardState)}},{key:"testMatch",value:function(){var e="https://boardgames1.herokuapp.com/roomdetail/"+this.props.roomData.joinedRoom.toString();f.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",f.a.get(e).then((function(e){console.log("TestMatch info: ",e.data)}))}},{key:"clickedCreateRoom",value:function(e){var t=this;function a(){return(a=Object(g.a)(h.a.mark((function e(){var t,a,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return a.apply(this,arguments)})("https://boardgames1.herokuapp.com/creatematch/",{game:this.props.gameData.gameID,maxPlayers:2}).then((function(e){console.log(e.status),201===e.status?(console.log("Created"),t.loadMatchesFromServer()):500===e.status?window.alert("You are already in room"):(console.log("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"),window.alert("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"))}))}},{key:"clickedLeave",value:function(){var e=this,t="https://boardgames1.herokuapp.com/leave-match/"+this.props.userSession.userData.userID.toString(),a={userId:this.props.userSession.userData.userID,matchId:this.props.roomData.joinedRoom};function n(){return(n=Object(g.a)(h.a.mark((function e(){var t,a,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("Leave match of user:",a),function(){return n.apply(this,arguments)}(t,a).then((function(t){204===t.status?(console.log("Room left: ",t.status),e.loadMatchesFromServer(),e.props.matchNotJoined()):500===t.status?window.alert("You are in no room"):(console.log("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"),window.alert("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"))}))}},{key:"render",value:function(){var e,t=this;return this.props.sessionMetadata.matchesListLoaded&&(e=this.props.roomData.matches.map((function(e,a){return s.a.createElement(B,{gameId:t.props.gameData.gameID,id:e.id,key:a,datakey:a,maxPlayers:e.maxPlayers,players:e.players})}))),s.a.createElement("div",{className:"GameMatching"},!1===this.props.sessionMetadata.matchesListLoaded&&s.a.createElement("h2",null,"Loading room..."),this.props.sessionMetadata.matchesListLoaded&&this.props.sessionMetadata.isMatchJoined&&this.props.sessionMetadata.fullDataLoaded&&this.props.gameData.gameID===this.props.roomData.joinedGameID&&"undefined"!==typeof this.props.roomData.activePlayers?s.a.createElement("div",{className:"Room"},s.a.createElement("br",null),s.a.createElement("button",{className:"button button1",onClick:function(e){return t.clickedLeave(e)}}," Leave"),s.a.createElement("p",null,"Room #",this.props.roomData.joinedRoom," | players: [",this.props.roomData.activePlayers.length,"/",this.props.roomData.maxPlayers,"]"),s.a.createElement("div",null,this.game(),s.a.createElement("button",{className:"WebsocketTest",onClick:function(e){return t.testWebsocket()}},"Test WebSocket"),s.a.createElement("button",{className:"MatchTest",onClick:function(e){return t.testMatch()}},"Get Match info")),s.a.createElement("br",null)):s.a.createElement("div",null,this.props.sessionMetadata.matchesListLoaded&&this.props.sessionMetadata.isMatchJoined&&this.props.sessionMetadata.fullDataLoaded&&this.props.gameData.gameID!==this.props.roomData.joinedGameID?s.a.createElement("p",null,"You are already in the game"):s.a.createElement("br",null)),this.props.sessionMetadata.matchesListLoaded&&!this.props.sessionMetadata.isMatchJoined?s.a.createElement("div",null,s.a.createElement("button",{className:"button Create-Room",onClick:function(e){return t.clickedCreateRoom(e)}},"Create room"),s.a.createElement("br",null),e):s.a.createElement("p",null))}}]),a}(r.Component),ee=Object(E.b)((function(e){return Object(p.a)(Object(p.a)({},e.gameSession),{},{userSession:Object(p.a)({},e.userSession)})}),(function(e){return{matchesUnloaded:function(){return e(w())},loadMatches:function(t){return e(P(t))},fullLoadMatch:function(){return e(T())},joinMatch:function(t,a,n,r,s){return e(_(t,a,n,r,s))},matchNotJoined:function(){return e(C())},initGame:function(t,a){return e(U(t,a))},updateBoardState:function(t){return e(x(t))},finishGame:function(){return e(H())},nextPlayer:function(t){return e(z(t))}}}))(Object(y.f)(Q)),te=(a(75),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.submitting;return s.a.createElement("div",{className:"LogPanel"},s.a.createElement("p",null,"Username:"),s.a.createElement("input",{type:"text",onChange:this.props.changedUsername,onKeyPress:this.props.enterLogin}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"loginButton",onClick:this.props.submit,disabled:e},e&&s.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e&&s.a.createElement("span",null,"Logging in"),!e&&s.a.createElement("span",null,"Log in")),!0===this.props.wrongLoginData&&s.a.createElement("p",{style:{color:"red"}},"Wrong login data"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"gotoRegisterButton",onClick:this.props.gotoRegister},"Sign in"),s.a.createElement("p",null,this.props.children))}}]),a}(r.Component)),ae=(a(76),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r)))._handleKeyDown=function(t){if("Enter"===t.key)return e.props.register},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.submitting;return s.a.createElement("div",{className:"RegistrationPanel"},s.a.createElement("p",null,"Username:"),s.a.createElement("input",{type:"text",onChange:this.props.changedUsername,onKeyPress:this.props.enterRegister}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"registrationButton",onClick:this.props.register,disabled:e},e&&s.a.createElement("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e&&s.a.createElement("span",null,"Registering"),!e&&s.a.createElement("span",null,"Register")),!0===this.props.unavaliableUsername&&s.a.createElement("p",{style:{color:"red"}},"That username is unavaliable"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"gotoLoginButton",onClick:this.props.gotoLogin},"Login screen"),s.a.createElement("p",null,this.props.children))}}]),a}(r.Component)),ne=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadGamesFromServer(),this.loadUsersFromServer()}},{key:"componentDidUpdate",value:function(){document.title="".concat(this.props.gameSession.gameData.gameName)}},{key:"loadGamesFromServer",value:function(){var e=this;f.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",f.a.get("https://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY").then((function(t){e.props.loadGames(t.data)}))}},{key:"loadUsersFromServer",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a="https://boardgames1.herokuapp.com/register/";f.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",f.a.get(a).then((function(a){if(e.props.loadUsers(a.data),!0===t){var n=e.props.userData.username;console.log(n,a.data);var r=!1;a.data.map((function(t){n===t.username&&(e.props.setLoggedIn(),e.props.setID(t.id),r=!0)})),!1===r&&e.props.failedLogin()}}))}},{key:"submitRegisterHandler",value:function(){var e=this;function t(){return(t=Object(g.a)(h.a.mark((function e(){var t,a,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",a=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})("https://boardgames1.herokuapp.com/register/",{username:this.props.userData.username}).then((function(t){console.log(t.status),201===t.status?(console.log("Zarejestrowany"),e.props.setRegistered(t.data),e.loadUsersFromServer(!0)):400===t.status?(console.log("Z\u0142a nazwa"),e.props.unavaliableUsername()):(console.log("Problem z \u0142\u0105czno\u015bci\u0105 z serwerem"),e.props.failedRegistration())}))}},{key:"submitLoginHandler",value:function(){var e=this,t=this.props.userData.username,a=!1;this.props.sessionData.users.map((function(n){t===n.username&&(e.props.setLoggedIn(),e.props.setID(n.id),a=!0)})),!1===a&&this.props.failedLogin()}},{key:"enterRegisterHandler",value:function(e){13===e.charCode&&this.submitRegisterHandler()}},{key:"enterLoginHandler",value:function(e){13===e.charCode&&this.submitLoginHandler()}},{key:"GameMatcher",value:function(e){return s.a.createElement(ee,{games:e})}},{key:"render",value:function(){var e=this,t={color:"#0D0A0B"},a=this.props.sessionData.games.map((function(e,t){return s.a.createElement(F,{name:e.name,key:e.id,playersNumber:e.playersNumber,img:e.imgUrl})}));return!1===this.props.loginMetadata.gamesListLoaded||!1===this.props.loginMetadata.usersLoaded?s.a.createElement("div",null,"Loading..."):!1===this.props.loginMetadata.wantRegister&&!1===this.props.loginMetadata.isRegistered&&!1===this.props.loginMetadata.isLogged?s.a.createElement("div",{className:"App"},s.a.createElement("h1",{style:t},"Hi, welcome to BoardGames!"),s.a.createElement(te,{changedUsername:function(t){return e.props.changeUsername(t.target.value)},submit:function(){return e.submitLoginHandler()},enterLogin:function(t){return e.enterLoginHandler(t)},submitting:this.props.loginMetadata.loading,gotoRegister:function(){return e.props.gotoRegister()},wrongLoginData:this.props.loginMetadata.wrongLoginData})):!0===this.props.loginMetadata.wantRegister&&!1===this.props.loginMetadata.isLogged&&!1===this.props.loginMetadata.isRegistered?s.a.createElement("div",{className:"App"},s.a.createElement("h1",{style:t},"Hi, welcome to BoardGames!"),s.a.createElement(ae,{changedUsername:function(t){return e.props.changeUsername(t.target.value)},register:function(t){return e.submitRegisterHandler()},enterRegister:function(t){return e.enterRegisterHandler(t)},submitting:this.props.loginMetadata.loading,gotoLogin:function(){return e.props.gotoLogin()},unavaliableUsername:this.props.loginMetadata.unavaliableUsername})):s.a.createElement("div",{className:"App"},s.a.createElement("h1",{style:t},"Hi ",this.props.userData.username,", welcome to BoardGames!"),s.a.createElement(O.b,{to:"/games",onClick:function(){e.props.initGame("BoardGames",null)}}," Go to games "),s.a.createElement("h2",null," "),s.a.createElement(y.c,null,s.a.createElement(y.a,{path:"/games"},a),s.a.createElement(y.a,{path:"/Warcaby"},this.GameMatcher(this.props.sessionData.games[0])),s.a.createElement(y.a,{path:"/Szachy"},this.GameMatcher(this.props.sessionData.games[1])),s.a.createElement(y.a,{path:"/tictactoe"},this.GameMatcher(this.props.sessionData.games[0]))))}}]),a}(r.Component),re=Object(E.b)((function(e){return Object(p.a)(Object(p.a)({},e.userSession),{},{gameSession:Object(p.a)({},e.gameSession)})}),(function(e){return{changeUsername:function(t){return e(D.changeUsername(t))},setID:function(t){return e(D.setID(t))},changePassword:function(t){return e(D.changePassword(t))},gotoRegister:function(){return e(D.gotoRegister())},gotoLogin:function(){return e(D.gotoLogin())},setLoggedIn:function(){return e(D.setLoggedIn())},failedLogin:function(){return e(D.failedLogin())},setRegistered:function(){return e(D.setRegistered())},unavaliableUsername:function(){return e(D.unavaliableUsername())},failedRegistration:function(){return e(D.failedRegistration())},loadGames:function(t){return e(D.loadGames(t))},loadUsers:function(t){return e(D.loadUsers(t))},initGame:function(t,a){return e(U(t,a))}}}))(ne),se=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(re,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(16),ie=a(38),ce={userData:{username:null,userID:null,password:null},loginMetadata:{isLogged:!1,isRegistered:!1,wantRegister:!1,loading:!1,wrongLoginData:!1,unavaliableUsername:!1,usersLoaded:!1,gamesListLoaded:!1},sessionData:{games:[],users:[]}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.CHANGE_USERNAME:return Object(p.a)(Object(p.a)({},e),{},{userData:Object(p.a)(Object(p.a)({},e.userData),{},{username:t.username})});case j.SET_ID:return Object(p.a)(Object(p.a)({},e),{},{userData:Object(p.a)(Object(p.a)({},e.userData),{},{userID:t.userID})});case j.CHANGE_PASSWORD:return Object(p.a)(Object(p.a)({},e),{},{userData:Object(p.a)(Object(p.a)({},e.userData),{},{password:t.password})});case j.GOTO_REGISTER:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{wantRegister:!0})});case j.GOTO_LOGIN:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{wantRegister:!1})});case j.SET_LOGGED_IN:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{loading:!1,isLogged:!0,wrongLoginData:!1})});case j.FAILED_LOGIN:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{loading:!1,wrongLoginData:!0})});case j.SET_REGISTERED:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{usersLoaded:!0,isLogged:!0,unavaliableUsername:!1,isRegistered:!0})});case j.UNAVALIABLE_USERNAME:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{isLogged:!1,unavaliableUsername:!0,isRegistered:!1})});case j.FAILED_REGISTRATION:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{isLogged:!1,unavaliableUsername:!1,isRegistered:!1})});case j.LOAD_GAMES:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{gamesListLoaded:!0}),sessionData:Object(p.a)(Object(p.a)({},e.sessionData),{},{games:t.games})});case j.LOAD_USERS:return Object(p.a)(Object(p.a)({},e),{},{loginMetadata:Object(p.a)(Object(p.a)({},e.loginMetadata),{},{usersLoaded:!0}),sessionData:Object(p.a)(Object(p.a)({},e.sessionData),{},{users:t.users})});default:return e}},le={gameData:{gameName:"BoardGames",gameID:null},sessionMetadata:{isMatchJoined:!1,fullDataLoaded:!1,matchesListLoaded:!1},roomData:{joinedGameName:null,joinedGameID:0,matches:[],joinedRoom:null,activePlayers:[],maxPlayers:null,boardState:[],myMark:null,nextPlayer:null,finished:!1}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(p.a)(Object(p.a)({},e),{},{sessionMetadata:Object(p.a)(Object(p.a)({},e.sessionMetadata),{},{matchesListLoaded:!1,fullDataLoaded:!1})});case S:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{matches:t.matches}),sessionMetadata:Object(p.a)(Object(p.a)({},e.sessionMetadata),{},{matchesListLoaded:!0})});case M:return Object(p.a)(Object(p.a)({},e),{},{sessionMetadata:Object(p.a)(Object(p.a)({},e.sessionMetadata),{},{fullDataLoaded:!0})});case L:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{joinedGameName:t.roomGameName,joinedGameID:t.roomGameID,joinedRoom:t.roomID,activePlayers:t.players,maxPlayers:t.maxPlayers}),sessionMetadata:Object(p.a)(Object(p.a)({},e.sessionMetadata),{},{isMatchJoined:!0})});case k:return Object(p.a)(Object(p.a)({},e),{},{sessionMetadata:Object(p.a)(Object(p.a)({},e.sessionMetadata),{},{isMatchJoined:!1,fullDataLoaded:!1}),roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{joinedRoom:null,activePlayers:[],maxPlayers:null,boardState:[],finished:!1})});case I:return Object(p.a)(Object(p.a)({},e),{},{gameData:{gameName:t.gameName,gameID:t.gameID}});case R:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{boardState:t.boardState})});case N:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{finished:!0})});case G:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{nextPlayer:t.nextPlayer})});case A:return Object(p.a)(Object(p.a)({},e),{},{roomData:Object(p.a)(Object(p.a)({},e.roomData),{},{myMark:t.mark})});default:return e}},pe=Object(oe.combineReducers)({userSession:ue,gameSession:me}),de=Object(ie.composeWithDevTools)({actionCreators:n,trace:!0,traceLimit:25}),he=Object(oe.createStore)(pe,de()),ge=s.a.createElement(s.a.StrictMode,null,s.a.createElement(E.a,{store:he},s.a.createElement(O.a,null,s.a.createElement(se,null))));i.a.render(ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.487e22fc.chunk.js.map