import React, { Component } from 'react';
import CollectionModal from './CollectionModal'
import { connect } from 'react-redux'
import { selectUserCollection } from '../Redux/Actions/collectionActions'
import { deleteCollection } from '../Redux/Actions/collectionActions'
// import { updateCollection } from '../Redux/Actions/modalActions'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class Collection extends Component {

  state = {
    toggleForm: false
  }


handleClick = (e) => {
  if(e.target.id === "select-collection"){
    this.props.selectUserCollection(this.props.collection.id)
  } else if (e.target.id === "update-collection") {
    console.log('i update');
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
      <div className="side-li" id="select-collection" onClick={this.handleClick}>
        <h3>{this.props.collection.collection_name}</h3>
        <Button onClick={this.toggleForm} id="update-collection">Update</Button>
        <Modal open={this.state.toggleForm} >
          <Modal.Header>Update Collection</Modal.Header>
            <CollectionModal toggleForm={this.toggleForm} userCollection={this.props.collection}/>
        </Modal>

        <Button id="delete-collection" > X </Button>
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
