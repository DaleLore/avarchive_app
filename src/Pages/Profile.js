import React, { Component } from 'react';
import CollectionContainer from '../Containers/collectionContainer'
import ItemContainer from '../Containers/itemContainer'

class Profile extends Component {

  render() {
    return (
      <div className="profile">
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
