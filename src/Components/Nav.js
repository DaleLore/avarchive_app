import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/Actions/userActions'

class Nav extends Component {

handleClick = (e) => {
  e.preventDefault();
  localStorage.removeItem("token")
  this.props.logoutUser()
}
  render() {
    return (
      <nav>
        <Link to="/">About</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={this.handleClick}><Link to="/">Logout</Link></button>
      </nav>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(Nav);
