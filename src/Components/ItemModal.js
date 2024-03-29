import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateItem } from '../Redux/Actions/itemActions'


import { Button } from 'semantic-ui-react'


class ItemModal extends Component {

  state = {
    id: this.props.item.id,
    title: this.props.item.title,
    media_type: this.props.item.media_type
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.updateItem(this.state)
  this.props.toggleForm()
}
  render() {
    console.log(this.props.item);
    return (
      <form className="add-item-form" onSubmit={this.handleSubmit}>

          <label id="label">Title:</label>
            <input id="item"
              name="title"
              component="input"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              required/>

          <label id="label">Media Type</label>


          <select
            value={this.state.media_type}
            className="form-control"
            onChange={this.handleChange}>
            <option value="audio">Audio</option>
            <option value="film">Film</option>
            <option value="video">Video</option>
          </select>


        <Button name="update" value={false} color='green' type='submit' onClick={this.handleSubmit}>Update</Button>
        <Button name="nevermind" value={false} color='red' onClick={this.props.toggleForm}>Nevermind</Button>
      </form>
    );
  }
}


export default connect(null, {updateItem})(ItemModal);

// <select
//     name="media_type"
//     onChange={this.handleChange}
//     value={this.state.media_type}
//     required>
//
//     <option></option>
//     <option value="audio"> Audio </option>
//     <option value="film"> Film </option>
//     <option value="video"> Video </option>
//     </select>
