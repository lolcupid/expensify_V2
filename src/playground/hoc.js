import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info Page</h1>
      <p>About: {props.info}</p>
    </div>
  )
}

const requireAuthentication = (WrappedInfo) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? <WrappedInfo {...props}/> : <p>{props.error}</p> }
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='There are a lot of information' error='You need to login In'/>, document.getElementById('app'));