import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import Header from "./Components/Header";
import Nav from "./Components/Nav";
import './Stylesheets/style.scss'

class App extends Component {


  render() {
    return(
      <Fragment>
        <Router>
          <Header />
          <Nav />

          <div className="main">
            <Routes />
          </div>

        </Router>
      </Fragment>
    )
  }
}


export default App;
