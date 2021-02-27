import React, {Component} from 'react';
import './Room.css';
import axios from 'axios';
/*import Warcaby from '../../Games/warcaby/warcaby'
import Szachy from '../../Games/szachy/szachy'
import Tictactoe from '../../Games/tictactoe/tictactoe'*/
import {
//    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";
import {connect} from 'react-redux'
import actions from '../../../duck/actions'

class Room extends Component {
    constructor(props){
        super(props);
        this.state={
            gameId:this.props.gameId,
            id:this.props.id,
            datakey:this.props.datakey,
            playersArray:this.props.players,
            maxPlayers:this.props.maxPlayers,
            isMatchJoined: false

        };
    }
    componentDidMount() {
      //console.log("JoinedRoom: ",this.props.joinedRoom)

    }

    componentDidUpdate() {
      //console.log("JoinedRoom: ",this.props.joinedRoom)

    }

    loadMatchesFromServer() {
      this.props.matchesUnloaded()
      var num = this.props.gameData.gameID
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

          console.log(response.data)
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

    clickedJoin(event) {
        let roomURL='https://boardgames1.herokuapp.com/join-match/'
        const article = {
            "match": this.state.id,
            "playerName": this.props.userSession.userData.userID};
        
        console.log('Article')
        console.log(article)
    
        async function postData(url = '', data = {}) {
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              'Content-Type': 'application/json',
              },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return response; // parses JSON response into native JavaScript objects
        }
        
        postData(roomURL, article).then(
          response => { console.log(response.status);
            if( response.status === 201){
            console.log("Joined");
            this.loadMatchesFromServer();
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

    render() {
        
        return (
            <div className="text-and-button">
                    { this.props.sessionMetadata.isMatchJoined===false && <div className="Room">
                        <p>
                        Room #{this.state.id} | 
                        players: [{this.props.roomData.matches[this.state.datakey].players.length}/{this.props.roomData.matches[this.state.datakey].maxPlayers}]</p>
                        <button onClick={(event) => this.clickedJoin(event)} > join</button>
                        <p>{this.props.children}</p>
                    </div>}
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

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Room));