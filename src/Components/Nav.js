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
        <div id="nav-item"><Link to="/">About</Link></div>
        <div id="nav-item"><Link to="/signup">Signup</Link></div>
        <div id="nav-item"><Link to="/login">Login</Link></div>
        <div id="nav-item"><Link to="/profile">Profile</Link></div>
        <div id="nav-item"onClick={this.handleClick}><Link to="/">Logout</Link></div>
      </nav>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(Nav);


//Checkout componentWillReceiveProps
//<div>{localStorage.token ? <Link to="/profile">Profile</Link> : null }</div>
