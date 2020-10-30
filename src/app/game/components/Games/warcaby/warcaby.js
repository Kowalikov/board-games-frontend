import React, {Component} from 'react';
import {
//    BrowserRouter as Router,
    withRouter,
//    Switch,
//    Route,
//    Link
  } from "react-router-dom";
import "./warcaby.css"

class Warcaby extends Component {
    render () {
        return (
            <div className="Warcaby">
                <p>Warcaby bejbo</p>
            </div>
        );
    }
};

export default withRouter(Warcaby);