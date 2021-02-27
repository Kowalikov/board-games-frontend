import React, {Component} from 'react';
import {
    withRouter,
  } from "react-router-dom";
import { WS_BASE } from './WebSockets/config';
import { connect} from 'react-redux'
import actions from '../../../duck/actions'

import "./tictactoe.css"

function Square(props) {
return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
);
}

class Board extends Component {  
  renderSquare(i) {
    if (typeof this.props.squares !== 'undefined') {
     
      return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
    }
      render() {
        //console.log("Board props:", this.props);
        return (
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
};

class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    boardState: Array(9).fill(null),
    stepNumber: 0,
    nextPlayer: true
    };
  }

  ws = new WebSocket(WS_BASE+this.props.roomData.joinedRoom.toString());
  firstMessage = true; 
  componentDidMount() {
    console.log("Tictactoe props: ",this.props)
    this.setState({
      ...this.state,
      boardState: this.props.roomData.boardState,
      nextPlayer: this.props.roomData.nextPlayer
    })
    //open ws
    this.ws.onopen = () => {
      console.log('connected')
      }

    this.ws.onmessage = evt => {
      let payload;
      if (this.props.roomData.finishGame){ 
        console.log("Server finished data",evt.data)
        payload = JSON.parse(evt.data); 
        this.winner = payload.winner;
        return null;
      } else if (this.firstMessage==true) {
        payload = JSON.parse(evt.data); 
        console.log("Server initial data",payload)
        this.firstMessage = false
        if (payload.data.players[0].userId === this.props.userSession.userData.userID) {
          this.props.setMark(payload.data.players[0].mark)
        } else if (payload.data.players[1].userId === this.props.userSession.userData.userID) {
          this.props.setMark(payload.data.players[1].mark)
        } else {
          console.log("Warning: no mark assigned")
        }
        this.props.updateBoardState(payload.data.state);    

        this.setState((prevState, props) => {
          return { 
            boardState: payload.data.state, 
            nextPlayer: payload.data.currentPlayer,
            step:0
          };
        });
        this.props.nextPlayer(payload.data.currentPlayer);
        let status_finished="FINISHED";
        if (payload.data.status===status_finished) {
            this.props.finishGame();
        };
      } else {
        payload = JSON.parse(evt.data);
        console.log("Server data update",payload)
        if (this.props.roomData.activePlayers[0]["userId"] === this.props.userSession.userData.userID) {
          this.props.setMark(this.props.roomData.activePlayers[0].mark)
        } else if (this.props.roomData.activePlayers[1]["userId"] === this.props.userSession.userData.userID) {
          this.props.setMark(this.props.roomData.activePlayers[1].mark)
        } else {
          console.log("Warning: no mark assigned")
        }
        if ( this.props.roomData.boardState !== payload.data.state) {
          this.props.updateBoardState(payload.data.state);
        }
 
        this.setState((prevState, props) => {
          return { 
            boardState: payload.state, 
            nextPlayer: payload.currentPlayer,
            step:0
          };
        });
        this.props.nextPlayer(payload.data.currentPlayer);
        
        let status_finished="FINISHED";
        if (payload.status===status_finished) {
            this.props.finishGame();
        };
      }  
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

    }
  }

  sendMessage=(data)=>{
    try {
      const message = {
        "boardState":data.state["boardState"],
        "playerId": this.props.userSession.userData.userID
      };
      console.log("Send", JSON.stringify(message));
      this.ws.send(JSON.stringify(message)); //send data to the server
    } catch (error) {
        console.log(error) // catch error
    }
}

  handleClick(i) {
    const squares = this.props.roomData.boardState;
    console.log(squares);
    if (this.props.roomData.nextPlayer !== this.props.userSession.userData.userID) {
      console.log("It's not your turn");
      return null;
    };
    var i0;
    let WSBoardState="";
    for (i0 = 0; i0 < 9; i0++) {
      if (i0==i) {
        WSBoardState+=this.props.roomData.myMark;
      }
      else {
        WSBoardState+=squares[i0]
      }
    }
    console.log(WSBoardState)
    this.sendMessage({
      username: this.props.userSession.userData.username,
      state: { "boardState": WSBoardState}
    })
    const stepCurrent = this.state.stepNumber;
    if (calculateWinner(WSBoardState)) {
      this.props.finishGame()
      return;
    }
    if (this.props.roomData.myMark==="X"){
      this.setState({
      boardState: WSBoardState,
      stepNumber: stepCurrent+1,
      nextPlayer: "O"
      });
    }
    else {
      this.setState({
      boardState: WSBoardState,
      stepNumber: stepCurrent+1,
      nextPlayer: "X"
      }); 
    }
  }

  jumpTo(step) {
    this.setState({
      boardState: {squares: Array(9).fill(null)},
      stepNumber: step,
    });
  }

  render() {
    const moves = <button onClick={() => this.jumpTo(0)}>Go to game start</button>
    let status;
    let current = this.state.boardState;
    if (this.props.roomData.finished) {
      status = "Winner: " + this.props.roomData.myMark;
    } else {
      status = "Next player: " + (this.props.roomData.nextPlayer);
    }

    return (
      <div className="game">
        { this.props.roomData.finished? 
          <p>Finished</p>:
          <div className="game-board">
            <br></br>
            <br></br>
            <Board
              squares={current}
              onClick={i => this.handleClick(i)}
            />
            <br></br>
          </div>
        }
        <div className="game-info">
          <br></br>
          <br></br>
          <div>{status}</div>
            <br></br>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
};


const mapStateToProps = state => ({
  ...state.gameSession, //ew movies: state.movies,
  userSession: {
    ...state.userSession,
  },
  joinedRoom: {
    ...state.gameSession.roomData.joinedRoom,
  }
})

const mapDispatchToProps = (dispatch) => ({
  matchesUnloaded: () => dispatch(actions.matchesUnloaded()),
  loadMatches: matches => dispatch(actions.loadMatches(matches)),
  fullLoadMatch: () => dispatch(actions.fullLoadMatch()),
  joinMatch: (roomID, players, maxPlayers) => dispatch(actions.joinMatch(roomID, players, maxPlayers)),
  matchNotJoined: () => dispatch(actions.matchNotJoined()),
  finishGame: () => dispatch(actions.finishGame()),
  updateBoardState: (boardState) => dispatch(actions.updateBoardState(boardState)),
  nextPlayer: (nextPlayer) => dispatch(actions.nextPlayer(nextPlayer)),
  setMark: (mark) => dispatch(actions.setMark(mark))
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tictactoe));

  
function calculateWinner(squares) {
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== "-" && squares[b] !== "-" && squares[c] !== "-" ) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
}
return null;
}





  