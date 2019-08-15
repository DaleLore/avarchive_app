import React, { Component } from 'react';
import Search from '../Components/Search'
import CollectionForm from '../Components/CollectionForm'
import Collection from '../Components/Collection'
// import UpdateCollectionModal from '../Components/Modal/udpateCollectionModal.js'

import { connect } from 'react-redux'
import { fetchCollections } from '../Redux/Actions/collectionActions'

class CollectionContainer extends Component {

  state = {
    searchTerm: ""
  }

  componentDidMount(){
    this.props.fetchCollections()
  }

handleSearchChange = (e) => {
  this.setState({ searchTerm: e})
}

searchCollections = () => {
  if(this.props.usersCollections) {
    return this.props.usersCollections.filter(collection => {
      return collection.collection_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }
}

  render() {
    console.log(this.props.usersCollections);
    console.log(this.searchCollections());
    let renderCollection = () => {
      if (this.props.usersCollections){
        return this.searchCollections().map((collection) => {
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
            <Search searchTerm={this.state.searchTerm} inputTerm={this.handleSearchChange}/>
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



export default connect(mapStateToProps, {fetchCollections})(CollectionContainer);
