import React, { Component } from 'react';
import Search from '../Components/Search'
import ItemForm from '../Components/ItemForm'
import Item from '../Components/Item'

import { connect } from 'react-redux'
// import { fetchCollections } from '../Redux/Actions/collectionActions'


class ItemContainer extends Component {



  render() {
    let renderItems = () => {
      if (this.props.collection.items){
        return this.props.collection.items.map((item) => {
          return <Item item={item} key={item.id}/>
        })
      }
    }
    return (
      <div>
        <h5>Collection Title: {this.props.collection.collection_name}</h5>
        <h5>Collection Description: {this.props.collection.description}</h5>

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

export default connect(mapStateToProps, null)(ItemContainer);
