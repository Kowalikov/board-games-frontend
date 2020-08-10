import React, { Component } from 'react';
import Game from './Game/Game';
import axios from 'axios';
import LogPanel from './LogPanel/LogPanel';
import RegistrationPanel from './RegistrationPanel/RegistrationPanel'
import Axios from 'axios';

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
      wantRegister : true,
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
    const article = {"username": "foo-user2"};
    
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'text/plain',
          },
        body: data // body data type must match "Content-Type" header
      });
      return response; // parses JSON response into native JavaScript objects
    }
    
    /*
    postData(uLog, article)
      .then(response => {
        console.log(response); // JSON data parsed by `data.json()` call
      }).catch(error =>{console.log(error)});

    */
   this.setState({
    usersLoaded:true
  });
   

  }

  submitRegisterHandler(event) {
    this.setState({isRegistered: true});
    this.setState({isLogged: true});
    this.setState({wantRegister: false});
    this.setState({wrongLoginData : false})
      
   
  }

  submitHandler(event) {
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
 


  render () {

    const style = {
      color: '#0D0A0B',
    };

    const games = this.state.games.map(game => { 
      return <Game name={game.name} playersNumber={game.playersNumber} img={game.imgUrl}/>;
    });

    //var {gamesListLoaded, gs} = this.setState;

    if(this.state.wantRegister===false && this.state.isRegistered===false && this.state.isLogged===false){
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <LogPanel
          changedUsername={(event)=> this.usernameChangeHandler(event)}
          /*changedPassword={(event)=> this.passwordChangeHandler(event)}*/
          submit={(event) =>this.submitHandler(event)}
          submitting={this.state.loading}
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
          /*changedPassword={(event)=> this.passwordChangeHandler(event)}*/
          register={(event) =>this.submitRegisterHandler(event)}
          submitting={this.state.loading}
          unavaliableUsername={this.state.unavaliableUsername}></RegistrationPanel>
        </div>
      );
    }
    else if (this.state.gamesListLoaded===false || this.state.usersLoaded===false ) {
      return <div>Loading..</div>;
    }
    else{
      return (
        <div className="App">
          <h1 style={style} >Hi {this.state.username}, welcome to BoardGames!</h1>
          <h1 style={style}> That's your games:</h1>
          {games}

        </div>
    );
    }  
  }
}


export default App;
