import React, { Component } from 'react';
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
          <div>
            <Link style={{marginLeft: 15}} to="/">About</Link>
            <Link style={{marginLeft: 15}} to="/profile">Profile</Link>
            <button onClick={this.onLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link style={{marginLeft: 15}} to="/">About</Link>
            <Link style={{marginLeft: 15}} to="/signup">Signup</Link>
            <Link style={{marginLeft: 15}} to="/login">Login</Link>
          </div>
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
