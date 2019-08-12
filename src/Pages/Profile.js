import React, { Component } from 'react';
import CollectionContainer from '../Containers/collectionContainer'
import ItemContainer from '../Containers/itemContainer'

import { connect } from 'react-redux'
import { fetchUserProfile } from '../Redux/Actions/userActions'


class Profile extends Component {

  componentDidMount(){
    if (!localStorage.token){
      this.props.history.push('/')
    } else {
      this.props.fetchUserProfile()
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="profile">
        <h1>Welcome, {this.props.profile.username}!</h1>
        <h5>Hello from Profile.js</h5>
        <p> I want Login link to toggle into profile link once logged in</p>

        <div className="page-container">

          <div className="side-panel">
            <CollectionContainer />
          </div>

          <div className="show-panel">
            <ItemContainer />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  profile: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: () => dispatch(fetchUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
