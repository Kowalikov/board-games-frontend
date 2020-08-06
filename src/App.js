import React, { Component } from 'react';
import Game from './Game/Game';
import axios from 'axios';
import LogPanel from './LogPanel/LogPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      games:[],
      users:[],
      usersLoaded : false,
      gamesListLoaded : false,
      isLogged : false,
      username : null,
      password : null,
      loading : false,
      wrongLoginData : false
    }
  }


  componentDidMount() {
    let uTest='https://rickandmortyapi.com/api/character/187'
    let uGamesList='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uGamesList)
      .then(response => {
        this.setState({
          games:response.data,
          gamesListLoaded:true
        });
      });
    let uLog='https://cors-anywhere.herokuapp.com/https://boardgames1.herokuapp.com/register/'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(uLog)
      .then(response => {
        this.setState({
          users:response.data,
          usersLoaded:true
        });
      });
    console.log(this.state.users)
  
  }

  submitHandler(event) {
    this.setState({ loading: true });
    
    const username = this.state.username;
    const users = this.state.users

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

    var {gamesListLoaded, gs} = this.setState;

    if(this.state.isLogged===false){
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <LogPanel
          changedUsername={(event)=> this.usernameChangeHandler(event)}
          changedPassword={(event)=> this.passwordChangeHandler(event)}
          submit={(event) =>this.submitHandler(event)}
          submitting={this.state.loading}
          wrongLoginData={this.state.wrongLoginData}></LogPanel>
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
