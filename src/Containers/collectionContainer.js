import React, { Component } from 'react';
import Search from '../Components/Search'
import CollectionForm from '../Components/CollectionForm'
import Collection from '../Components/Collection'

import { connect } from 'react-redux'



class CollectionContainer extends Component {

  render() {
    console.log("collection", this.props)
    return (
      <div className="collection-container">
        <h5>Hello from Collection Container </h5>
<hr/>
          <div className="collection-search">
            <Search />
          </div>
<hr/>
          <div className="add-collection-form">
            <CollectionForm />
          </div>
<hr/>
          <div className="collections">
            <Collection />
          </div>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  collections: state.user.collections
});

export default connect(mapStateToProps, null)(CollectionContainer);
