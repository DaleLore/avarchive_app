import React, { Component } from 'react';
import Search from '../Components/Search'
import CollectionForm from '../Components/CollectionForm'
import Collection from '../Components/Collection'



class CollectionContainer extends Component {

  render() {
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

export default CollectionContainer;
