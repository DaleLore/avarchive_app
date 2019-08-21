import React, { Component } from 'react';
import CollectionModal from './CollectionModal'
import { Modal } from 'semantic-ui-react'
import '../Stylesheets/collectionContainer.scss'

import { connect } from 'react-redux'
import { selectUserCollection } from '../Redux/Actions/collectionActions'
import { deleteCollection } from '../Redux/Actions/collectionActions'

class Collection extends Component {

  state = {
    toggleForm: false
  }


handleClick = (e) => {
  if(e.target.id === "select-collection"){
    this.props.selectUserCollection(this.props.collection.id)
  } else if (e.target.id === "delete-collection") {
    this.props.deleteCollection(this.props.collection)
  }
}

toggleForm = () => {
  this.setState({
    toggleForm: !this.state.toggleForm
  })
}

  render() {
    return (
      <div className="collection-li" id="select-collection" onClick={this.handleClick}>
        <h3>{this.props.collection.collection_name}</h3>
        <button
          id="update-collection"
          onClick={this.toggleForm}> Update </button>

        <Modal open={this.state.toggleForm} >
          <Modal.Header>Update Collection</Modal.Header>
            <CollectionModal toggleForm={this.toggleForm} collection={this.props.collection}/>
        </Modal>

        <button id="delete-collection" > X </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
   return {
     selectUserCollection: (collectionId) => dispatch(selectUserCollection(collectionId)),
     deleteCollection: (collectionObject) => dispatch(deleteCollection(collectionObject))
   }
}


export default connect(null, mapDispatchToProps)(Collection);


// () => this.props.updateCollection(this.props.collection)
