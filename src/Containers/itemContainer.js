import React, { Component } from 'react';
import Search from '../Components/Search'
import ItemForm from '../Components/ItemForm'
import Item from '../Components/Item'

import { connect } from 'react-redux'
import { fetchItems } from '../Redux/Actions/itemActions'

class ItemContainer extends Component {

componentDidMount(){
  this.props.fetchItems()
}

  render() {
    const { collection } = this.props

    let renderItems = () => {
      if (collection && collection.items){
        return collection.items.map((item) => {
          return <Item item={item} key={item.id}/>
        })
      }
    }
    return (

      <div className="item-container">
        <h5>Collection Title: {collection ? collection.collection_name : null} </h5>
        <h5>Collection Description: {collection ? collection.description : null}</h5>
        <h5>Total Items in collection: {collection ? collection.count : null}</h5>
        <h5>Stretch Goal: Export as CSV</h5>


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

export default connect(mapStateToProps, {fetchItems})(ItemContainer);
