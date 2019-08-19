import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateItem } from '../Redux/Actions/itemActions'


import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'


class ItemModal extends Component {

  state = {
    id: this.props.item.collection_id,
    title: this.props.item.title,
    media_type: this.props.item.media_type
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  console.log('i click');
}
  render() {
  console.log(this.state.title);
    return (
      <form className="add-item-form" onSubmit={this.handleSubmit}>

          <label id="label">Title:</label>
            <Field id="item"
              name="title"
              component="input"
              type="text"
              onChange={this.handleChange}
              placeholder={this.props.item.title}
              required/>

          <label id="label">Media Type</label>
            <Field id="item"
              name="media_type"
              component="select"
              type="text"
              onChange={this.handleChange}
              required>

              <option></option>
              <option value="audio"> Audio </option>
              <option value="film"> Film </option>
              <option value="video"> Video </option>
            </Field>

        <Button name="update" value={false} color='green' type='submit' onClick={this.handleSubmit}>Update</Button>
        <Button name="nevermind" value={false} color='red' onClick={this.props.toggleForm}>Nevermind</Button>
      </form>
    );
  }
}

ItemModal = reduxForm({
  form: 'itemForm',

})(ItemModal);

export default connect()(ItemModal);
