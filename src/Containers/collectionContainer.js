import React, { Component } from 'react';
import Search from '../Components/Search'
import CollectionForm from '../Components/CollectionForm'
import Collection from '../Components/Collection'

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
  this.setState({
    searchTerm: e
  });
}

searchCollections = () => {
  if(this.findUserCollections()){
    return this.findUserCollections().filter(collection => {
      return collection.collection_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }
}


findUserCollections = () => {
  if(this.props.collections){
    const userId = this.props.user.id
    return this.props.collections.filter(collection => collection.user_id === userId)
  }
}

renderCollections = () => {
  if(this.searchCollections()){
    return this.searchCollections().map(collection => <Collection collection={collection} key={collection.id}/>)
  }
}
  render() {
    return (
      <div className="collection-container">
        <h5>Hello from Collection Container </h5>

<hr/>
          <div className="collection-search">
            <Search
              searchTerm={this.state.searchTerm}
              inputTerm={this.handleSearchChange}/>
          </div>
<hr/>
          <div className="add-collection-form">
            <CollectionForm />
          </div>
<hr/>
          <div className="collections">

            {this.renderCollections()}
          </div>
      </div>
    );
  }
}

const mapStateToProps= state => {
  return {
    collections: state.collectionStore.collections,
    user: state.userInfo
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
