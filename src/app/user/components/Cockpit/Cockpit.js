import React, {Component} from 'react';
import axios from 'axios';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {connect} from 'react-redux'
import actions from '../../duck/actions'
import gameActions from '../../../game/duck/actions'
import './Cockpit.css'
import Game from '../../../game/components/Game/Game';
import GameMatching from '../../../game/components/GamesMatching/GameMatching'
import LogPanel from '../LogPanel/LogPanel';
import RegistrationPanel from '../RegistrationPanel/RegistrationPanel'

class Cockpit extends Component {
  
  componentDidMount() {
    //console.log("props", this.props)
    this.loadGamesFromServer()
    this.loadUsersFromServer()
  }
  componentDidUpdate() {
    document.title = `${this.props.gameSession.gameData.gameName}`

  }

  loadGamesFromServer() {
    let uGamesList='https://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uGamesList)
      .then(response => {
        this.props.loadGames(response.data);
      });
  }

  loadUsersFromServer(login=false) {
    let uLog='https://boardgames1.herokuapp.com/register/'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uLog)
      .then(response => {
        this.props.loadUsers(response.data);
        if (login===true) {
          const username = this.props.userData.username;
          console.log(username, response.data);
          let loggedTemp=false;
          response.data.map(user => { 
            if (username===user.username){
              this.props.setLoggedIn()
              this.props.setID(user.id)
              loggedTemp = true
            }
          });
          if (loggedTemp===false) {
            this.props.failedLogin()
          }  
            
        }
      });
  }

  submitRegisterHandler() {
    let uReg='https://boardgames1.herokuapp.com/register/'
    const article = {"username": this.props.userData.username};

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
    
    postData(uReg, article).then(
      response => { console.log(response.status);
        if( response.status === 201){ 
        console.log("Zarejestrowany");
        this.props.setRegistered(response.data);
        this.loadUsersFromServer(true);
      }
      else if (response.status === 400){
        console.log("Zła nazwa");
        this.props.unavaliableUsername();
      }
      else{ 
        console.log("Problem z łącznością z serwerem");
        this.props.failedRegistration();
      }
    });
  }
  
  submitLoginHandler() {
    const username = this.props.userData.username;    
    let loggedTemp=false;
    this.props.sessionData.users.map(user => { 
      if (username===user.username){
        this.props.setLoggedIn()
        this.props.setID(user.id)
        loggedTemp=true
      }
    });
    if (loggedTemp===false) {
      this.props.failedLogin()
    }
  }

  enterRegisterHandler(event) {
    if (event.charCode === 13){
      this.submitRegisterHandler();
    }
  }
  
  enterLoginHandler(event) {
    if (event.charCode === 13){
      this.submitLoginHandler();
    }
  }

  GameMatcher(gamesParams) {
    return <GameMatching games={gamesParams}/>
  }

  render () {

    const style = {
      color: '#0D0A0B',
    };

    const games = this.props.sessionData.games.map((game, index) => { 
        return <Game 
          name={game.name}
          key={game.id}
          playersNumber={game.playersNumber}
          img={game.imgUrl}
          />;
    });

    /*const switchToGames = this.props.sessionData.games.map((game, index) => { 
        return(
          <Switch>
            <Route path={game.name} exact component={game.name}/>
          </Switch>
        )
    });*/

    if (this.props.loginMetadata.gamesListLoaded===false || this.props.loginMetadata.usersLoaded===false ) { 
      return <div>Loading...</div>;
    }
    else if(this.props.loginMetadata.wantRegister===false && this.props.loginMetadata.isRegistered===false && this.props.loginMetadata.isLogged===false){ 
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <LogPanel
          changedUsername={(event)=> this.props.changeUsername(event.target.value)}
          //changedPassword={(event)=> this.props.changePassword(event.target.value)} 
          submit={() =>this.submitLoginHandler()} 
          enterLogin={(event) => this.enterLoginHandler(event)}
          submitting={this.props.loginMetadata.loading}
          gotoRegister={() => this.props.gotoRegister()} 
          wrongLoginData={this.props.loginMetadata.wrongLoginData} 
          ></LogPanel> 
        </div>
      );
    }
    else if (this.props.loginMetadata.wantRegister===true && this.props.loginMetadata.isLogged===false && this.props.loginMetadata.isRegistered===false ) { 
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <RegistrationPanel
          changedUsername={(event)=> this.props.changeUsername(event.target.value)} 
          //changedPassword={(event)=> this.props.changePassword(event.target.value)}
          register={(event) =>this.submitRegisterHandler()} 
          enterRegister={(event) => this.enterRegisterHandler(event)}
          submitting={this.props.loginMetadata.loading}
          gotoLogin={() => this.props.gotoLogin()} 
          unavaliableUsername={this.props.loginMetadata.unavaliableUsername} 
          ></RegistrationPanel>
        </div>
      );
    }
    else{
      ///const isMatched = 
      return (
          <div className="App">
            <h1 style={style} >Hi {this.props.userData.username}, welcome to BoardGames!</h1>
            <Link to={'/games'} onClick={() => {this.props.initGame('BoardGames', null);}}> Go to games </Link>
            <h2> </h2>
            <Switch>
              <Route path={"/games"}>{games}</Route>
              <Route path={"/Warcaby"}>{this.GameMatcher(this.props.sessionData.games[0])}</Route>
              <Route path={"/Szachy"}>{this.GameMatcher(this.props.sessionData.games[1])}</Route>
              <Route path={"/tictactoe"}>{this.GameMatcher(this.props.sessionData.games[0])}</Route>
            </Switch>
          </div>
    );
    }  
  }

}

const mapStateToProps = state => ({
  ...state.userSession, //ew movies: state.movies,
  gameSession: {
    ...state.gameSession,
  }
})

const mapDispatchToProps = (dispatch) => ({
  changeUsername: username => dispatch(actions.changeUsername(username)),
  setID: id => dispatch(actions.setID(id)),
  changePassword: password => dispatch(actions.changePassword(password)),
  gotoRegister: () => dispatch(actions.gotoRegister()),
  gotoLogin: () => dispatch(actions.gotoLogin()),
  setLoggedIn: () => dispatch(actions.setLoggedIn()),
  failedLogin: () => dispatch(actions.failedLogin()),
  setRegistered: () => dispatch(actions.setRegistered()),
  unavaliableUsername: () => dispatch(actions.unavaliableUsername()),
  failedRegistration: () => dispatch(actions.failedRegistration()),
  loadGames: games => dispatch(actions.loadGames(games)),
  loadUsers: users => dispatch(actions.loadUsers(users)),
  initGame: (gameName, gameID) => dispatch(gameActions.initGame(gameName, gameID)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Cockpit) //nie wiadomo czy zadziała