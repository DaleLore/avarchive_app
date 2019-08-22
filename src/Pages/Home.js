import React, { Component } from 'react';
import StepOne from '../Pages/English/StepOne'
import StepTwo from '../Pages/English/StepTwo'
import StepThree from '../Pages/English/StepThree'
import StepFour from '../Pages/English/StepFour'
import AvItems from '../Pages/English/AvItems'
import Default from '../Pages/English/Default'

import { connect } from 'react-redux'

import '../Stylesheets/home.scss'


class Home extends Component {

  state = {
      id: 'default'
  }

  handleClick = (e) => {
    if(e.target.id === 'step1'){
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'step2'){
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'step3'){
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'step4'){
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'avItems'){
      this.setState({ id: e.target.id })
    }
  }

  render() {
    return (
      <div className="home">
        <div >
          <li
            id="step1"
            className="menu-item"
            onClick={this.handleClick}> STEP ONE</li >
          <li
            id="step2"
            className="menu-item"
            onClick={this.handleClick}> STEP TWO</li >
          <li
            id="step3"
            className="menu-item"
            onClick={this.handleClick}> STEP THREE</li>
          <li
            id="step4"
            className="menu-item"
            onClick={this.handleClick}> STEP FOUR</li>
          <li
            id="avItems"
            className="menu-item"
            onClick={this.handleClick}> AV ITEMS</li>
        </div>

        <div className="information">
          {this.state.id === 'step1' && <StepOne />}
          {this.state.id === 'step2' && <StepTwo />}
          {this.state.id === 'step3' && <StepThree />}
          {this.state.id === 'step4' && <StepFour />}
          {this.state.id === 'avItems' && <AvItems />}
          {this.state.id === 'default' && <Default />}
        </div>
      </div>
    );
  }

}

export default connect()(Home);
