import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userSignUp } from '../Redux/Actions/userActions'


class Signup extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userSignUp(this.state)
      .then(() => {
        this.props.history.push('/profile')
      })
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.handleSubmit}>
        <h5>Hello from Signup.js</h5>
          <input
            type="text"
            name="username"
            placeholder="Create a username"
            value={this.state.username}
            onChange={this.handleChange}/>

          <input
            type="password"
            name="password"
            placeholder="Add a password"
            value={this.state.password}
            onChange={this.handleChange}/>

          <input
            type="submit"
            value="Signup"/>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userSignUp: newUserInfo => dispatch(userSignUp(newUserInfo))
});

export default connect(null, mapDispatchToProps)(Signup);
