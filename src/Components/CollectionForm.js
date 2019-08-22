import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewCollection } from '../Redux/Actions/collectionActions'

import '../Stylesheets/collectionContainer.scss'

class CollectionForm extends Component {

state={
  collection_name: "",
  description: "",
}

initialState = () => {
  const initialState = {
    collection_name: "",
    description: ""
  }
  return initialState
}

resetState = () => {
  this.setState(this.initialState())
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
  this.resetState()
}

  render() {
    return (
      <div>

        <form
          className="collection-form"
          onSubmit={this.handleSubmit}>
          <div><input
              type="text"
              name="collection_name"
              placeholder="Collection Name"
              value={this.state.collection_name}
              onChange={this.handleChange}
              required/></div>

            <div><textarea
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}/></div>

            <div id="create-button"><button>Create</button></div>
        </form>
      </div>
    );
  }
}

const mapStateToProps= state => ({
  profile: state.userInfo
});


export default connect(mapStateToProps,{addNewCollection})(CollectionForm);
