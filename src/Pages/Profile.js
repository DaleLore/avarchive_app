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
    return (
      <div className="profile">
        <h1>Welcome, {this.props.profile.username}!</h1>
        <div className="page-container">

          <div className="collection-container">
            <CollectionContainer />
          </div>

          <div className="item-container">
            <ItemContainer />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  profile: state.userInfo
});

const mapDispatchToProps = dispatch => ({
  fetchUserProfile: () => dispatch(fetchUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
