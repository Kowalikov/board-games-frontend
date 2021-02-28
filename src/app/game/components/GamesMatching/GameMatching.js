import React, {Component} from 'react';
import axios from 'axios';
import Room from './Room/Room';
import WebSocketProvider from '../Games/tictactoe/WebSockets/WebSocket'
//import Warcaby from '../Games/warcaby/warcaby'
import Szachy from '../Games/szachy/szachy'
import Tictactoe from '../Games/tictactoe/tictactoe'
///import './GameMatching.css';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import actions from '../../duck/actions'


class GameMatching extends Component {

  loadMatchesFromServer() {
    this.props.matchesUnloaded()
    var num = this.props.games.id
    //console.log(num)
    //let gameURL = "/"+ this.props.name='https://cors-anywhere.herokuapp.com/https://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    let gameURL = "https://boardgames1.herokuapp.com/matches/"+ num.toString()
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(gameURL)
      .then(response => {
        this.props.loadMatches(response.data.matches);
        var i1;
        var i2;
        let tempJoinedMatch=false
        //console.log(response.data)
        for (i1=0;i1<response.data.matches.length;i1++){
          for (i2=0;i2<response.data.matches[i1].players.length; i2++){  
            if (response.data.matches[i1].players[i2].userId===this.props.userSession.userData.userID) {
              this.props.joinMatch(
                response.data.matches[i1].id,
                response.data.name,
                response.data.id,
                response.data.matches[i1].players,
                response.data.matches[i1].maxPlayers
              );
              tempJoinedMatch=true;
              //console.log("LoadMatchesFromServer init: true",response.data.name)
              this.props.initGame(response.data.name, response.data.id);
            }
          }
        }
        if (tempJoinedMatch===false) {
          this.props.initGame(this.props.games.name, this.props.games.id)
        }
        this.props.fullLoadMatch();
      });
    }

  componentDidMount() {
    this.loadMatchesFromServer();
  }


  game() {
    if (this.props.gameData.gameID===1){
      return (
      //<WebSocketProvider>
        <Tictactoe/>
      //</WebSocketProvider>
      )
    }
    else{ //jak się przyjmie to przenieść tutaj provider
        return  <Szachy/>   
    }
  }

  testWebsocket() {
    console.log("Sprawdzam ostatni stan")
    this.state.ws.sendMessage({
      username: this.props.userSession.userData.username,
      state: { "boardState": "--------X"}
    })
    console.log("State from the store: ", this.props.roomData.boardState)
  }
  testMatch() {
    var num = this.props.roomData.joinedRoom;
    //console.log(num)
    //let gameURL = "/"+ this.props.name='https://cors-anywhere.herokuapp.com/https://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    let gameURL = "https://boardgames1.herokuapp.com/roomdetail/"+ num.toString()
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(gameURL)
      .then(response => {
       console.log("TestMatch info: ", response.data)
      });
  }
    
    
  clickedCreateRoom(event){
    let roomURL='https://boardgames1.herokuapp.com/creatematch/'
    const article = {
        "game": this.props.gameData.gameID,
        "maxPlayers": 2};

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(data) 
      });
      return response; 
    }
    
    postData(roomURL, article).then(
      response => { console.log(response.status);
        if( response.status === 201){
        console.log("Created");
        this.loadMatchesFromServer()
      }
      else if (response.status === 500){
        window.alert("You are already in room");
      }
      else{
        console.log("Problem z łącznością z serwerem");
        window.alert("Problem z łącznością z serwerem")
      }
    });
  }

  clickedLeave() {
    let roomURL='https://boardgames1.herokuapp.com/leave-match/'+this.props.userSession.userData.userID.toString()
    const article = {
        "userId": this.props.userSession.userData.userID,
        "matchId": this.props.roomData.joinedRoom
      };
    
    console.log('Leave match of user:', article)

    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors', 
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(data) 
      });
      return response; 
    }
    
    postData(roomURL, article).then(
      response => {
        if( response.status === 204){
        console.log("Room left: ", response.status);
        this.loadMatchesFromServer()
        this.props.matchNotJoined();
      }
      else if (response.status === 500){
        window.alert("You are in no room");
      }
      else{
        console.log("Problem z łącznością z serwerem");
        window.alert("Problem z łącznością z serwerem")
      }
    
    });
  }

  render() {
    //gotowy skopiowany kod z App.js do wylistowania matchy i dołączenia do nich
    //dodać zmianę stanu pokoi na kliknięcie
    //dołączenie i dopiero potem renderowanie gry
    //zrobić to zmienną joinedMatch w stanie klasy w tym pliku
    
    let matchesList
    if (this.props.sessionMetadata.matchesListLoaded) {
      matchesList = this.props.roomData.matches.map((room, index) => { 
        return <Room
          gameId={this.props.gameData.gameID} 
          id={room.id}
          key={index}
          datakey={index}
          maxPlayers={room.maxPlayers}
          players={room.players}
          />;
      });
    }

    return(
        <div className="GameMatching">
          { (this.props.sessionMetadata.matchesListLoaded)===false && <h2>Loading room...</h2>
          }
          { this.props.sessionMetadata.matchesListLoaded && this.props.sessionMetadata.isMatchJoined && this.props.sessionMetadata.fullDataLoaded && this.props.gameData.gameID===this.props.roomData.joinedGameID && typeof this.props.roomData.activePlayers!== 'undefined' ? 
            <div className="Room">
              <br></br>
              <button className="button button1" onClick={(event) => this.clickedLeave(event)} > Leave</button>
              <p>
                Room #{this.props.roomData.joinedRoom} | 
                players: [{this.props.roomData.activePlayers.length}/{this.props.roomData.maxPlayers}]</p>
              <div>
                {this.game()}
                {
                //<button className="WebsocketTest" onClick={(event) => this.testWebsocket()}>Test WebSocket</button>
                //<button className="MatchTest" onClick={(event) => this.testMatch()}>Get Match info</button>
                }
              </div> 
              <br></br>
            </div>:
            <div>
              {this.props.sessionMetadata.matchesListLoaded && this.props.sessionMetadata.isMatchJoined && this.props.sessionMetadata.fullDataLoaded && this.props.gameData.gameID!==this.props.roomData.joinedGameID ?
              <p>You are already in the game</p>:<br></br>}
            </div>
          }
          { this.props.sessionMetadata.matchesListLoaded && !this.props.sessionMetadata.isMatchJoined ? 
            <div>
              <button className="button Create-Room" onClick={(event) => this.clickedCreateRoom(event)} >Create room</button>
              <br></br>
              {matchesList}
            </div>:<p></p>
          }
        </div>
    )

  }

};

const mapStateToProps = state => ({
  ...state.gameSession, //ew movies: state.movies,
  userSession: {
    ...state.userSession,
  },
})




const mapDispatchToProps = (dispatch) => ({
  matchesUnloaded: () => dispatch(actions.matchesUnloaded()),
  loadMatches: matches => dispatch(actions.loadMatches(matches)),
  fullLoadMatch: () => dispatch(actions.fullLoadMatch()),
  joinMatch: (roomID, roomGameName, roomGameID, players, maxPlayers) => dispatch(actions.joinMatch(roomID, roomGameName, roomGameID, players, maxPlayers)),
  matchNotJoined: () => dispatch(actions.matchNotJoined()),
  initGame: (gameName, gameID) => dispatch(actions.initGame(gameName, gameID)),
  updateBoardState: (boardState) => dispatch(actions.updateBoardState(boardState)),
  gameStatus: (status, winnerMark) => dispatch(actions.gameStatus(status, winnerMark)),
  nextPlayer: (nextPlayer) => dispatch(actions.nextPlayer(nextPlayer))

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameMatching));