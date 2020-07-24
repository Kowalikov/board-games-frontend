import React from 'react';
import './Game.css';

const Game = (props) => {

return (
    <div className="Game">
        <p onClick={props.click}>I'm {props.name} and that's my id: {props.id}</p>
        <p>{props.children}</p>
    </div>

)
};

export default Game;