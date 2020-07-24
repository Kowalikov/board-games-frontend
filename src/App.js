import React, { Component } from 'react';
import Game from './Game/Game';

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
    let u2='http://arturborowiec.pl/boardgames.json?fbclid=IwAR1svYb9xakqe39Cx44jmDr0JxL1hpTyW4s4ANwk-4Vt9mBn26JFCCvYwzs'
    fetch(u1)
    .then(res => res.json())
    .then(json=>{
      this.setState({
        characters:json,
        isLoaded : true
      })
    });

  }
 
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    };

    var {isLoaded, characters} = this.setState;

    if (isLoaded===false) {
      return <div>Loading..</div>;
    }
    else{
      return (
        <div className="App">
          <h1>Hi, welcome to hovel!</h1>
          <h1> That's your games:</h1>
          <Game name={this.state.characters.name} id={this.state.characters.id}/>
        </div>
    );
    }  
  }
}


export default App;
