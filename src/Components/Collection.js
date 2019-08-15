import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectUserCollection } from '../Redux/Actions/collectionActions'
import { updateCollection } from '../Redux/Actions/collectionActions'
import { deleteCollection } from '../Redux/Actions/collectionActions'

class Collection extends Component {


handleClick = (e) => {
  if(e.target.id === "select-collection"){
    this.props.selectUserCollection(this.props.collection.id)
  } else if (e.target.id === "update-button") {
    console.log('i update');
  } else if (e.target.id === "delete-button") {
    this.props.deleteCollection(this.props.collection)
  }
}
showModal = () => {
  console.log('i click');
}

  render() {
    return (

      <div className="side-li" id="select-collection" onClick={this.handleClick}>
        {this.props.collection.collection_name}

        <button id="update-button" > Update </button>
        <button id="delete-button" > X </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
   return {
     selectUserCollection: (collectionId) => dispatch(selectUserCollection(collectionId)),
     updateCollection: (collectionObject) => dispatch(updateCollection(collectionObject)),
     deleteCollection: (collectionObject) => dispatch(deleteCollection(collectionObject))
   }
}


export default connect(null, mapDispatchToProps)(Collection);


// () => this.props.updateCollection(this.props.collection)
