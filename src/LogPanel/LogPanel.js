import React from 'react';


const LogPanel = (props) => {

const loading=props.submitting

return (
    <div className="LogPanel">
        <p>Username:</p>
        <input type= "text" onChange={props.changedUsername}/>
        <p>Password:</p>
        <input type= "password" onChange={props.changedPassword}/>
        <h5></h5>
        <button className="loginButton" onClick={props.submit} disabled={loading}>
        {loading && (<i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}
          {loading && <span>Logging in</span>}
          {!loading && <span>Log in</span>}
        </button>
        <p>{props.children}</p>
    </div>
    );

};

export default LogPanel;