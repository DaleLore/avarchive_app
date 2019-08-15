import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutUser } from '../Redux/Actions/userActions'

class Nav extends Component {

onLogout = (e) => {
  localStorage.removeItem("token")
  this.props.logoutUser()
}
render() {
  return (

    <nav>
      {
        this.props.user.id ? (
          <Fragment>
            <Link style={{marginLeft: 15}} to="/">About</Link>
            <Link style={{marginLeft: 15}} to="/profile">Profile</Link>
            <Link style={{marginLeft: 15}} to="/" onClick={this.onLogout}>Logout</Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link style={{marginLeft: 15}} to="/">About</Link>
            <Link style={{marginLeft: 15}} to="/signup">Signup</Link>
            <Link style={{marginLeft: 15}} to="/login">Login</Link>
          </Fragment>
        )
      }
    </nav>
  )
}
}

const mapStateToProps= state => {
  return {
    user: state.userInfo
  }
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
