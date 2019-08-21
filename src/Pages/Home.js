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

  // handleClick = (e) => {
  //   this.setState({ show: !this.state.show })
  // }
  handleClick = (e) => {
    if(e.target.id === 'step1'){
      console.log('step1')
      this.setState({ id: e.target.id })

    } else if (e.target.id === 'step2'){
      console.log('step2')
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'step3'){
      console.log('step3')
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'step4'){
      console.log('step4')
      this.setState({ id: e.target.id })
    } else if (e.target.id === 'avItems'){
      console.log('avItems')
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
            onClick={this.handleClick}> Step One</li >
          <li
            id="step2"
            className="menu-item"
            onClick={this.handleClick}> Step Two</li >
          <li
            id="step3"
            className="menu-item"
            onClick={this.handleClick}> Step Three</li>
          <li
            id="step4"
            className="menu-item"
            onClick={this.handleClick}> Step Four</li>
          <li
            id="avItems"
            className="menu-item"
            onClick={this.handleClick}> AV Items</li>
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
