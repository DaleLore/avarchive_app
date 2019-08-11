import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

  render() {
    return (
      <nav>
        <Link to="/">About</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Logout</Link>
      </nav>
    );
  }

}

export default Nav;
