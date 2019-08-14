import React, { Component } from 'react';
import Search from '../Components/Search'
import ItemForm from '../Components/ItemForm'
import Item from '../Components/Item'

import { connect } from 'react-redux'
import { fetchCollections } from '../Redux/Actions/collectionActions'


class ItemContainer extends Component {

  componentDidMount(){
    this.props.fetchCollections()
  }


  render() {
    const { collection } = this.props

    let renderItems = () => {
      if (collection.items){
        return collection.items.map((item) => {
          return <Item item={item} key={item.id}/>
        })
      }
    }
    return (
      <div className="item-container">
        <h5>Collection Title: {collection.collection_name}</h5>
        <h5>Collection Description: {collection.description}</h5>
        <h5>Total Items in collection: {collection.count}</h5>

  <hr/>
        <div className="search">
          <Search />
        </div>
  <hr/>
        <div className="add-item-form">
        <ItemForm />
        </div>
  <hr/>
        <div className="items">
          {renderItems()}
        </div>
      </div>
    );
  }

}

const mapStateToProps= state => ({
  collection: state.collectionStore.userCollection
});

export default connect(mapStateToProps, {fetchCollections})(ItemContainer);
