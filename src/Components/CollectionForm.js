import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewCollection } from '../Redux/Actions/collectionActions'
import { Button } from 'semantic-ui-react'

class CollectionForm extends Component {

state={
  collection_name: "",
  description: "",
}


handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  let newUser = this.state
  let userId = this.props.profile.id
  this.props.addNewCollection({newUser, userId})
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <center><h5>Create a new collection</h5></center>
          <input
            type="text"
            name="collection_name"
            placeholder="Collection Name"
            value={this.state.collection_name}
            onChange={this.handleChange}
            required/>

          <textarea
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}/>

          <Button>Create</Button>
      </form>

    );
  }
}

const mapStateToProps= state => ({
  profile: state.userInfo
});


export default connect(mapStateToProps,{addNewCollection})(CollectionForm);
