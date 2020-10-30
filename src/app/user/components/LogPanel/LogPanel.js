import React, {Component} from 'react';
import './LogPanel.css'

class LogPanel extends Component {

  render (){
    const loading=this.props.submitting  
    return (
      <div className="LogPanel">
          <p>Username:</p>
          <input type= "text" onChange={this.props.changedUsername} onKeyPress={this.props.enterLogin} />
          {/*<p>Password:</p>
          <input type= "password" onChange={props.changedPassword} />*/}
          <br></br>
          <br></br>
          
          <button className="loginButton" onClick={this.props.submit} disabled={loading}>
          {loading && (<i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
            )}
            {loading && <span>Logging in</span>}
            {!loading && <span>Log in</span>}
          </button>
          {this.props.wrongLoginData===true && <p style={{color:'red'}}>Wrong login data</p>}
          <br></br>
          <br></br>
          <button className="gotoRegisterButton" onClick={this.props.gotoRegister} >
          Sign in
          </button>
          <p>{this.props.children}</p>
      </div>
      );
  }
};

export default LogPanel;