import React, { Component } from 'react';
import Search from '../Components/Search'
import CollectionForm from '../Components/CollectionForm'
import Collection from '../Components/Collection'

import { connect } from 'react-redux'

class CollectionContainer extends Component {

  render() {

    let renderCollection = () => {
      if (this.props.usersCollections){
        return this.props.usersCollections.map((collection) => {
            return <Collection collection={collection} key={collection.id}/>
        })
      } else {
        return null
      }
    }

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
            {renderCollection()}
          </div>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    usersCollections: state.userInfo.collections
  }
};



export default connect(mapStateToProps, null)(CollectionContainer);
