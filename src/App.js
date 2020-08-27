import React, { Component } from 'react';
import Game from './Game/Game';
import axios from 'axios';
import LogPanel from './LogPanel/LogPanel';
import RegistrationPanel from './RegistrationPanel/RegistrationPanel'
import Warcaby from './Games/warcaby/warcaby'
import Szachy from './Games/szachy/szachy'
import Tictactoe from './Games/tictactoe/tictactoe'
import {
  Switch,
  Route,
//  Link
} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      games:[],
      users:[],
      usersLoaded : false,
      gamesListLoaded : false,
      isLogged : false,
      isRegistered: false,
      wantRegister : false,
      username : null,
      password : null,
      loading : false,
      wrongLoginData : false,
      unavaliableUsername : false

    }
  }


  componentDidMount() {
    //let uTest='https://rickandmortyapi.com/api/character/187'
    let uGamesList='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uGamesList)
      .then(response => {
        this.setState({
          games:response.data,
          gamesListLoaded:true
        });
      });

    let uLog='https://boardgames1.herokuapp.com/register/'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uLog)
      .then(response => {
        this.setState({
          users:response.data,
          usersLoaded:true
        });
      });
   

  }

  enterRegisterHandler(event) {
    if (event.charCode === 13){
      this.submitRegisterHandler();
    }
  }
  
  submitRegisterHandler(event) {
    let uReg='https://boardgames1.herokuapp.com/register/'
    const article = {"username": this.state.username};
    
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
    
    postData(uReg, article).then(
      response => { console.log(response.status);
        if( response.status === 201){
        console.log("Zarejestrowany");
        this.setState({
          usersLoaded:true,
          isLogged: true,
          unavaliableUsername : false,
          isRegistered: true
        });
      }
      else if (response.status === 400){
        this.setState({unavaliableUsername: true});
        console.log("Zła nazwa");
      }
      else{
        console.log("Problem z łącznością z serwerem");
      }
    });
  }

  enterLoginHandler(event) {
    if (event.charCode === 13){
      this.submitLoginHandler();
    }
  }

  submitLoginHandler(event) {
    this.setState({ loading: true });
    
    const username = this.state.username;
    //const users = this.state.users

    this.state.users.map(user => { 
      if (username===user.username){
        this.setState({ loading: false });
        this.setState({isLogged: true});
        this.setState({wrongLoginData : false})
      };
    });
    if (this.state.isLogged===false){
      this.setState({ loading: false });
      this.setState({wrongLoginData : true});
    }
  }

  usernameChangeHandler(event) {
    const logData = {
      ...this.state
    };
    logData.username = event.target.value;
    this.setState({username: logData.username})
  }

  passwordChangeHandler(event) {
    const logData = {
      ...this.state
    };
    logData.password = event.target.value;
    this.setState({password: logData.password})
  }

  gotoLoginHandler(event) {
    const logData = {
      ...this.state
    };
    logData.wantRegister = false;
    this.setState({wantRegister: logData.wantRegister})
  }

  gotoRegisterHandler(event) {
    const logData = {
      ...this.state
    };
    logData.wantRegister = true;
    this.setState({wantRegister: logData.wantRegister})
  }
  

  render () {

    const style = {
      color: '#0D0A0B',
    };

    const games = this.state.games.map((game, index) => { 
      //if (game.name !== "Kółko i krzyżyk") {
        return <Game 
          name={game.name}
          key={game.id}
          playersNumber={game.playersNumber}
          img={game.imgUrl}
          />;
      //}
    });

    const switchToGames = this.state.games.map((game, index) => { 
        return(
          <Switch>
            <Route path={game.name} exact component={game.name}/>
          </Switch>
        )
    });

    //var {gamesListLoaded, gs} = this.setState;

    if (this.state.gamesListLoaded===false || this.state.usersLoaded===false ) {
      return <div>Loading...</div>;
    }
    else if(this.state.wantRegister===false && this.state.isRegistered===false && this.state.isLogged===false){
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <LogPanel
          changedUsername={(event)=> this.usernameChangeHandler(event)}
          //changedPassword={(event)=> this.passwordChangeHandler(event)}
          submit={(event) =>this.submitLoginHandler(event)}
          enterLogin={(event) => this.enterLoginHandler(event)}
          submitting={this.state.loading}
          gotoRegister={(event) => this.gotoRegisterHandler(event)}
          wrongLoginData={this.state.wrongLoginData}></LogPanel>
        </div>
      );
    }
    else if (this.state.wantRegister===true && this.state.isLogged===false && this.state.isRegistered===false ) {
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <RegistrationPanel
          changedUsername={(event)=> this.usernameChangeHandler(event)}
          //changedPassword={(event)=> this.passwordChangeHandler(event)}
          register={(event) =>this.submitRegisterHandler(event)}
          enterRegister={(event) => this.enterRegisterHandler(event)}
          submitting={this.state.loading}
          gotoLogin={(event) => this.gotoLoginHandler(event)}
          unavaliableUsername={this.state.unavaliableUsername}></RegistrationPanel>
        </div>
      );
    }
    else{
      return (
          <div className="App">
            <h1 style={style} >Hi {this.state.username}, welcome to BoardGames!</h1>
            <h1 style={style}> That's your games:</h1>
            {games}
            <Game 
            name={"tictactoe"}
            key={1}
            playersNumber={2}
            />
            <Switch>
              <Route path={"/Warcaby"} exact component={Warcaby}/>
              <Route path={"/Szachy"} exact component={Szachy}/>
              <Route path={"/tictactoe"} exact component={Tictactoe}/>
            </Switch>
          </div>
    );
    }  
  }
}



export default App;
