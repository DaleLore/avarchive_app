import React, { Component } from 'react';
import CollectionContainer from '../Containers/collectionContainer'
import ItemContainer from '../Containers/itemContainer'

class Profile extends Component {

  state = {
    username: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/profile', {
      headers: {
        Authorization: localStorage.token
      }
    })
      .then(response => response.json())
      .then(profileData => {
        this.setState({ username: profileData.username})
      })
  }

  render() {
    return (
      <div className="profile">
        <h1>Welcome, {this.state.username}</h1>
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

export default Profile;
