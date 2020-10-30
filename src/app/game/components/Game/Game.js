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
        console.log(this.props.name==="Kółko i krzyżyk")
        var gameURL = "/"
        if (this.props.name==="Kółko i krzyżyk"){
            gameURL = "/tictactoe"
        }
        else{
            gameURL = "/"+ this.props.name
        }
        this.props.history.push(gameURL)
    }

    render() {
        var gameURL = "/"
        if (this.props.name==="Kółko i krzyżyk"){
            gameURL = "/tictactoe"
        }
        else{
            gameURL = "/"+ this.props.name

        }

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