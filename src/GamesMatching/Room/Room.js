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
            id:this.props.id,
            playersArray:this.props.players,
            maxPlayers:this.props.maxPlayers,
            playerNameId: 9,
            isMatchJoined: false

        };
    }
    componentDidMount() {
        console.log(this.state.playersArray);
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
        window.location.reload();
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
      
      });
    }

    clickedJoin(event) {
        let roomURL='https://boardgames1.herokuapp.com/join-match/'
        const article = {
            "match": this.state.id,
            "playerName": this.state.playerNameId};
        
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
          window.location.reload();
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
            console.log("Problem z łącznością z serwerem");
            window.alert("Problem z łącznością z serwerem")
          }
        
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
        console.log(this.state.gameId)
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