import React, {Component} from 'react';
import './RegistrationPanel.css'

class RegistrationPanel extends Component {
  _handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        return (this.props.register) 
      } 
  }
  render(){
    const loading=this.props.submitting

    return (
      <div className="RegistrationPanel">
          <p>Username:</p>
          <input type= "text" onChange={this.props.changedUsername} onKeyPress={this.props.enterRegister} />
          {/*<p>Password:</p>
          <input type= "password" onChange={this.props.changedPassword} />*/}
          <br></br>
          <br></br>
          <button className="registrationButton" onClick={this.props.register}  disabled={loading}>
          {loading && (<i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
            )}
            {loading && <span>Registering</span>}
            {!loading && <span>Register</span>}
          </button>
          {this.props.unavaliableUsername===true && <p style={{color:'red'}}>That username is unavaliable</p>}
          <br></br>
          <br></br>
          <button className="gotoLoginButton" onClick={this.props.gotoLogin} >
          Login screen
          </button>
          <p>{this.props.children}</p>
      </div>
    );
  }
};

export default RegistrationPanel;