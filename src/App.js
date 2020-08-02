import React, { Component } from 'react';
import Game from './Game/Game';
import axios from 'axios';
import LogPanel from './LogPanel/LogPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters:[],
      isLoaded : false,
      isLogged : false,
      username : null,
      password : null,
      loading : false
    }
  }


  componentDidMount() {
    let u1='https://rickandmortyapi.com/api/character/187'
    let u2='https://cors-anywhere.herokuapp.com/http://boardgames1.herokuapp.com/games/?fbclid=IwAR37IdjpLC4RmLuN1wSehM1DtarmIavEGkcy7SMh-kf_lsIEVp0r3DeyaXY'
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    axios.get(u2)
      .then(response => {
        this.setState({
          characters:response.data,
          isLoaded:true
        });
      });
      
  
  }

  submitHandler(event) {
    this.setState({ loading: true });
    
    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({isLogged: true})
    }, 1400);
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

    const characters = this.state.characters.map(character => { 
      return <Game name={character.name} playersNumber={character.playersNumber} img={character.imgUrl}/>;
    });

    var {isLoaded, chars} = this.setState;

    if(this.state.isLogged===false){
      return(
        <div className="App">
          <h1 style={style} >Hi, welcome to BoardGames!</h1>
          <LogPanel
          changedUsername={(event)=> this.usernameChangeHandler(event)}
          changedPassword={(event)=> this.passwordChangeHandler(event)}
          submit={(event) =>this.submitHandler(event)}
          submitting={this.state.loading}></LogPanel>
        </div>
      );
    }
    else if (isLoaded===false) {
      return <div>Loading..</div>;
    }
    else{
      return (
        <div className="App">
          <h1 style={style} >Hi {this.state.username}, welcome to BoardGames!</h1>
          <h1 style={style}> That's your games:</h1>
          {characters}

        </div>
    );
    }  
  }
}


export default App;
