import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLogin } from '../Redux/Actions/userActions'

class Login extends Component {

state = {
  username: "",
  password: ""
}

handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

handleSubmit = (e) => {
    e.preventDefault()
    this.props.userLogin(this.state)
      .then(() => {
        this.props.history.push('/profile')
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

const mapDispatchToProps = (dispatch) => ({
  userLogin: userInfo => dispatch(userLogin(userInfo))
});

export default connect(null, mapDispatchToProps)(Login)
