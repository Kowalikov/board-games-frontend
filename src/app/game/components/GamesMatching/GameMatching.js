import React, {Component} from 'react';
import axios from 'axios';
import Room from './Room/Room';
//import Warcaby from '../Games/warcaby/warcaby'
import Szachy from '../Games/szachy/szachy'
import Tictactoe from '../Games/tictactoe/tictactoe'
///import './GameMatching.css';
import {
//    BrowserRouter as Route
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";
import {connect} from 'react-redux'
import actions from '../../duck/actions'

class GameMatching extends Component {


    componentDidMount() {
      
      this.props.initGame(this.props.games.name, this.props.games.id)
      this.loadMatchesFromServer()
    }

    loadMatchesFromServer() {
      this.props.matchesUnloaded()
      var num = this.props.games.id
      console.log(num)
      //let gameURL = "/"+ this.props.name='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
      let gameURL = "https://boardgames1.herokuapp.com/matches/"+ num.toString()
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
      axios.get(gameURL)
        .then(response => {
          this.props.loadMatches(response.data.matches);
          var i1;
          var i2;
          console.log(response.data)
          for (i1=0;i1<response.data.matches.length;i1++){
            for (i2=0;i2<response.data.matches[i1].players.length; i2++){  
              if (response.data.matches[i1].players[i2].userId===this.props.userSession.userData.userID) {
                    this.props.joinMatch(
                      response.data.matches[i1].id,
                      response.data.matches[i1].players,
                      response.data.matches[i1].maxPlayers
                    );
              }
            }
          }
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
          "userId": this.props.userSession.userData.userID};
      
      console.log('Leave match:')
      console.log(article)
  
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
        response => { console.log(response.status);
          if( response.status === 204){
          console.log("Room left");
          this.props.matchNotJoined();
          this.loadMatchesFromServer()
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

        let game
        if (this.props.gameData.gameID===1){
            game=<Tictactoe/>
        }
        else{
            game= <Szachy/>   
        }


        return(
            <div className="GameMatching">
                { (this.props.sessionMetadata.matchesListLoaded)===false && <h2>Loading room...</h2>
                }
                { this.props.sessionMetadata.matchesListLoaded && this.props.sessionMetadata.isMatchJoined ? 
                  <div className="Room">
                    <br></br>
                    <button className="button button1" onClick={(event) => this.clickedLeave(event)} > Leave</button>
                    <p>
                        Room #{this.props.roomData.joinedRoom} | 
                        players: [{this.props.roomData.activePlayers.length}/{this.props.roomData.maxPlayers}]</p>
                    {game}
                    <br></br>
                  </div>:
                  <div>
                    <button className="button Create-Room" onClick={(event) => this.clickedCreateRoom(event)} >Create room</button>
                    <br></br>
                    {matchesList}
                  </div>
                }
                {//console.log(this.state.matches)
                }
            </div>
        )

    }

};

const mapStateToProps = state => ({
  ...state.gameSession, //ew movies: state.movies,
  userSession: {
    ...state.userSession,
  }
})

const mapDispatchToProps = (dispatch) => ({
  matchesUnloaded: () => dispatch(actions.matchesUnloaded()),
  loadMatches: matches => dispatch(actions.loadMatches(matches)),
  joinMatch: (roomID, players, maxPlayers) => dispatch(actions.joinMatch(roomID, players, maxPlayers)),
  matchNotJoined: () => dispatch(actions.matchNotJoined()),
  initGame: (gameName, gameID) => dispatch(actions.initGame(gameName, gameID)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameMatching));