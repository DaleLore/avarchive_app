import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// import Routes from "./Routes";

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import './Stylesheets/style.scss'

//DELETE LATER
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";


class App extends Component {

  state = {
    page: 'login'
  }

  redirect = (page) => {
    this.setState({ page: page })
  }

  componentDidMount(){
    if(localStorage.token){
      this.redirect('profile')
    }
  }

  render() {
      switch(this.state.page){
        case 'login':
          return <Login redirect={this.redirect}/>
        case 'signup':
          return <Signup />
        case 'profile':
          return <Profile />
        default:
          return <Login />
      }
  }
}

export default App;


// return(
//   <Fragment>
//     <Router>
//       <Header />
//       <Nav />
//
//       <div className="main">
//
//       </div>
//
//     </Router>
//   </Fragment>
// )
