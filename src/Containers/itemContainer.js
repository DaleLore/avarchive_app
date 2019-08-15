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

//
// let renderItems = () => {
//   if (collection && collection.items){
//     return collection.items.map((item) => {
//       return <Item item={item} key={item.id}/>
//     })
//   }
// }

findUserItems = () => {
  const id = this.props.user.id
  console.log(this.props.collections)
  if (this.props.collections){
    return this.props.collections.filter(collection => collection.user_id === id)
  }
}

renderItems = () => {
  if (this.findUserItems()){
    return this.findUserItems().map(item => <Item item={item} key={item.id}/>)
  }
}

  render() {
    const { collection } = this.props

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
          {this.renderItems()}
        </div>
      </div>
    );
  }

}

const mapStateToProps= state => ({
  collections: state.collectionStore.collections,
  items: state.itemStore,
  user: state.userInfo
});

export default connect(mapStateToProps, {fetchItems})(ItemContainer);
