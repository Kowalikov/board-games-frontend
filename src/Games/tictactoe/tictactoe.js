import React, {Component} from 'react';
import {
//    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";

class Tictactoe extends Component {
    render () {
        return (
            <div className="Tictactoe">
                <p>Tictactoe bejbo</p>
            </div>
        );
    }
};

export default withRouter(Tictactoe);