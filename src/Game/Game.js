import React, {Component} from 'react';
import './Game.css';
import {
//    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
    Link
  } from "react-router-dom";

class Game extends Component {
    clicked() {
        //let game_url="/"+game_name
        console.log(this.props.name)
        this.props.history.push(this.props.name)
    }

    render() {
        const gameURL = "/"+ this.props.name
        //console.log(props)
        return (
                <div className="Game">
                    <p onClick={(event) => this.clicked(event)}>I'm
                    <Link to={gameURL}> {this.props.name} </Link>
                    and number of players is: {this.props.playersNumber}</p>
                    <img src={this.props.img} alt=""></img>
                    <p>{this.props.children}</p>
                </div>
        
        )

    }

};

export default withRouter(Game);