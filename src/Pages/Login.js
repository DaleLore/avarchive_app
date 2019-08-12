import React, { Component } from 'react';

class Login extends Component {

state = {
  username: "",
  password: ""
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(loginData => {
      if (loginData.token){
        localStorage.token = loginData.token
        this.props.redirect('profile')
      }
    })
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <h5>Hello from Login.js</h5>
          <input
            name="username"
            placeholder="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}/>

          <input
            name="password"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}/>

          <input type="submit" value="Login"/>

      </form >
    );
  }

}

export default Login;
