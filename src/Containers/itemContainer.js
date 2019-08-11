import React, { Component } from 'react';
import Search from '../Components/Search'
import ItemForm from '../Components/ItemForm'
import Item from '../Components/Item'



class ItemContainer extends Component {

  render() {
    return (
      <div>
        <h5>Hello from Item Container </h5>
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
          <Item />
        </div>
      </div>
    );
  }

}

export default ItemContainer;
