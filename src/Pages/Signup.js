import React, { Component } from 'react';

class Singup extends Component {

  render() {
    return (
      <form className="auth-form">
        <h5>Hello from Signup.js</h5>
          <input
            type="text"
            placeholder="Create a username"
            value={null}
            onChange={null}/>

          <input
            type="password"
            placeholder="Add a password"
            value={null}
            onChange={null}/>

          <input
            type="submit"
            value="Signup"/>
      </form>
    );
  }

}

export default Singup;
