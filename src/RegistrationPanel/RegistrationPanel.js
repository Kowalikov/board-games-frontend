import React from 'react';


const RegistrationPanel = (props) => {

const loading=props.submitting

return (
    <div className="RegistrationPanel">
        <p>Username:</p>
        <input type= "text" onChange={props.changedUsername} />
        {/*<p>Password:</p>
        <input type= "password" onChange={props.changedPassword} />*/}
        <h5></h5>
        <button className="registrationButton" onClick={props.register} disabled={loading}>
        {loading && (<i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Registering</span>}
          {!loading && <span>Register</span>}
        </button>
        {props.unavaliableUsername===true && <p style={{color:'red'}}>That username is unavaliable</p>}
        <p>{props.children}</p>
    </div>
    );

};

export default RegistrationPanel;