import React from 'react';
import './Game.css';

const Game = (props) => {

return (
    <div className="Game">
        <p onClick={props.click}>I'm {props.name} and number of players is: {props.playersNumber}</p>
        <img src={props.img} alt=""></img>
        <p>{props.children}</p>
    </div>

)
};

export default Game;