import React, { Component } from 'react';
import Game from './Game/Game';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters:[],
      isLoaded : false
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

 
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
    };

    const characters = this.state.characters.map(character => { 
      return <Game name={character.name} playersNumber={character.playersNumber} img={character.imgUrl}/>;
    });

    var {isLoaded, chars} = this.setState;

    if (isLoaded===false) {
      return <div>Loading..</div>;
    }
    else{
      return (
        <div className="App">
          <h1>Hi, welcome to BoardGames!</h1>
          <h1> That's your games:</h1>
          {characters}

        </div>
    );
    }  
  }
}


export default App;
