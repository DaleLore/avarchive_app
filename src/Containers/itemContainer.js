import React, { Component } from 'react';
import Search from '../Components/Search'
import ItemForm from '../Components/ItemForm'
import Item from '../Components/Item'

import { connect } from 'react-redux'
import { fetchItems } from '../Redux/Actions/itemActions'
import { fetchCollections } from '../Redux/Actions/collectionActions'


class ItemContainer extends Component {

componentDidMount(){
  this.props.fetchItems()
  this.props.fetchCollections()
}

findCollectionItems = () => {
  if(this.props.userCollection){
    const collectionId = this.props.userCollection.id
    return this.props.items.filter(item => item.collection_id === collectionId)
  }
}

renderItems = () => {
  if(this.findCollectionItems()){
    return this.findCollectionItems().map(item => <Item item={item} key={item.id}/>)
  }
}

  render() {
    return (
      <div className="item-container">
        <h5>Collection Title: {this.props.userCollection ? this.props.userCollection.collection_name : null} </h5>
        <h5>Collection Description: {this.props.userCollection ? this.props.userCollection.description : null}</h5>
        <h5>Total Items in collection: {this.props.userCollection ? this.props.userCollection.count : null}</h5>
        <h5>Stretch Goal: Export as CSV</h5>

  <hr/>
        <div className="form-container">
        {this.findCollectionItems() ? <ItemForm /> : null}
        </div>
  <hr/>
        <div className="item-header">
              <span><h3>Title</h3></span>
              <span><h3>Media Type</h3></span>
              <span><h3> </h3></span>
              <span><h3> </h3></span>
        </div>

        {this.renderItems()}
      </div>
    );
  }

}

const mapStateToProps= state => ({
  collections: state.collectionStore.collections,
  userCollection: state.collectionStore.userCollection,
  items: state.itemStore.items,
  user: state.userInfo
});

export default connect(mapStateToProps, {fetchItems, fetchCollections})(ItemContainer);
