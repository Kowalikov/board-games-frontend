import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";

class Szachy extends Component {
    render () {
        return (
            <div className="Szachy">
                <p>Szachy bejbo</p>
            </div>
        );
    }
};

export default withRouter(Szachy);