import React, {Component} from 'react';
import axios from 'axios';
import Room from './Room/Room';
import Warcaby from '../Games/warcaby/warcaby'
import Szachy from '../Games/szachy/szachy'
import Tictactoe from '../Games/tictactoe/tictactoe'
///import './GameMatching.css';
import {
//    BrowserRouter as Route
    withRouter,
//    Switch,
//    Route,
    Link
  } from "react-router-dom";

class GameMatching extends Component {
    constructor(props){
        super(props);
        this.state={
            gameName:this.props.games.name, 
            gameId:this.props.games.id,
            matches:[],
            isMatchJoined:false,
            matchesListLoaded:false,

        };
    }

    componentDidMount() {

        this.setState({
          matchesListLoaded:false
        })
        //let gameURL = "/"+ this.props.name='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
        let gameURL = "https://boardgames1.herokuapp.com/matches/"+ this.state.gameId
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        axios.get(gameURL)
          .then(response => {
            this.setState({
              matches:response.data.matches,
              matchesListLoaded:true
            });
          });
      }

      /*componentDidUpdate(){
        //let gameURL = "/"+ this.props.name='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
        let gameURL = "https://boardgames1.herokuapp.com/matches/"+ this.state.gameId
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        axios.get(gameURL)
          .then(response => {
            this.setState({
              matches:response.data.matches,
              matchesListLoaded:true
            });
          });
      }*/
      
    
    clickedCreateRoom(event){
      let roomURL='https://boardgames1.herokuapp.com/creatematch/'
      const article = {
          "game": this.state.gameId,
          "maxPlayers": 2};
      
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
        window.location.reload(false);
        return response; // parses JSON response into native JavaScript objects
      }
      
      postData(roomURL, article).then(
        response => { console.log(response.status);
          if( response.status === 201){
          console.log("Created");
          this.setState({
            isJoinedMatch: true,
          });
          //this.props.matchPasser();
        }
        else if (response.status === 500){
          this.setState({isJoinedMatch: false});
          window.alert("You are already in room");
        }
        else{
          console.log("Problem z łącznością z serwerem");
          window.alert("Problem z łącznością z serwerem")
        }
      
      });
    }

    matchPasser() {
      console.log("Passed");
      this.setState({
        isMatchJoined:true,
      });
      console.log(this.state.isMatchJoined);
    }

    render() {

        //gotowy skopiowany kod z App.js do wylistowania matchy i dołączenia do nich
        //dokończyć design komponent Room w CSSie
        //dodać zmianę stanu pokoi na kliknięcie
        //dołączenie i dopiero potem renderowanie gry
        //zrobić to zmienną joinedMatch w stanie klasy w tym pliku
        
        
        let matchesList
        if (this.state.matchesListLoaded) {
          matchesList = this.state.matches.map((room, index) => { 
              //console.log(room.players.length)
              //console.log('wy[isuję array players')
              //console.log("props name:",this.state.gameName)
              return <Room
                gameId={this.state.gameId} 
                id={room.id}
                key={index}
                name={this.state.gameName}
                maxPlayers={room.maxPlayers}
                players={room.players}
                matchPasser={this.matchPasser}
                />;
            });
            //console.log('odłożone')
        }


        return(
            <div className="GameMatching">
                { (this.state.matchesListLoaded)===false && <h2>Loading room...</h2>
                }
                <button className="button Create-Room" onClick={(event) => this.clickedCreateRoom(event)} >Create room</button>
                <br></br>
                { this.state.matchesListLoaded && matchesList}
                {//console.log(this.state.matches)
                }
            </div>
        )

    }

};

export default withRouter(GameMatching);