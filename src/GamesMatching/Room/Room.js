import React, {Component} from 'react';
import './Room.css';
import Warcaby from '../../Games/warcaby/warcaby'
import Szachy from '../../Games/szachy/szachy'
import Tictactoe from '../../Games/tictactoe/tictactoe'
import {
    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";

class Room extends Component {
    constructor(props){
        super(props);
        this.state={
            gameId:this.props.gameId,
            gameName: this.props.name,
            id:this.props.id,
            playersArray:this.props.players,
            maxPlayers:this.props.maxPlayers,
            playerNameId: 9,
            isMatchJoined: false

        };
    }
    componentDidMount() {
        var i;
        for (i=0;i<this.state.playersArray.length;i++){
            if (this.state.playersArray[i].userId===9) {
                this.setState({
                    isMatchJoined:true,
                });
                //this.props.matchPasser();
            }
        }
    }

    clickedLeave() {
      let roomURL='https://boardgames1.herokuapp.com/leave-match/'+this.state.playerNameId.toString()
      const article = {
          "userId": this.state.playerNameId};
      
      console.log('Leave match:')
      console.log(article)
  
      async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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
          if( response.status === 204){
          console.log("Joined");
          this.setState({
            isJoinedMatch: false,
          });
          //this.props.matchPasser();
        }
        else if (response.status === 500){
          this.setState({isJoinedMatch: false});
          window.alert("You are in no room");
        }
        else{
          console.log("Problem z łącznością z serwerem");
          window.alert("Problem z łącznością z serwerem")
        }
        var gameURL = "/"
        if (this.state.gameName==="Kółko i krzyżyk"){
            gameURL = "/board-games-frontend/tictactoe"
        }
        else{
            gameURL = "/board-games-frontend/"+ this.state.gameName

        }
        //console.log("game name:", this.state.gameName)
        window.location.replace(gameURL);
      
      });
    }

    clickedJoin(event) {
        let roomURL='https://boardgames1.herokuapp.com/join-match/'
        const article = {
            "match": this.state.id,
            "playerName": this.state.playerNameId};
        
        //console.log('Article')
        //console.log(article)
    
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
            //console.log("Problem z łącznością z serwerem");
            window.alert("Problem z łącznością z serwerem")
          }
          var gameURL = "/"
          if (this.state.gameName==="Kółko i krzyżyk"){
              gameURL = "/board-games-frontend/tictactoe"
          }
          else{
              gameURL = "/board-games-frontend/"+ this.state.gameName

          }
          //console.log("game name:", this.state.gameName)
          window.location.replace(gameURL);
          });
      }

    render() {
        let game
        if (this.state.gameId===1){
            game=<Tictactoe/>
        }
        else{
 
            game= <Szachy/>
            
        }
        return (
            <div className="text-and-button">
                    { this.state.isMatchJoined===false && <div className="Room">
                        <p>
                        Room #{this.state.id} | 
                        players: [{this.state.playersArray.length}/{this.state.maxPlayers}]</p>
                        <button onClick={(event) => this.clickedJoin(event)} > join</button>
                        <p>{this.props.children}</p>
                    </div>}
                    { this.state.isMatchJoined===true && <div className="Room">
                        <br></br>
                        <button className="button button1" onClick={(event) => this.clickedLeave(event)} > Leave</button>
                        {game
                        }
                        <p>
                        Room #{this.state.id} | 
                        players: [{this.state.playersArray.length}/{this.state.maxPlayers}]</p>
                        <p>{this.props.children}</p>
                    </div>}
                </div>
        
        )

    }
};

export default Room;