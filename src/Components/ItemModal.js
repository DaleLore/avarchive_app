import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { updateCollection } from '../Redux/Actions/collectionActions'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'

class ItemModal extends Component {

  state = {

  }

  render() {
    return (
      <form onSubmit={null}>
        <div>
          <label id="label">Title:</label>
          <Field id="item" name="title" component="input" type="text" required/>
        </div>
        <div>
          <label id="label">Media Type</label>
          <Field id="item" name="media_type" component="select" type="text" required>
            <option></option>
            <option value="audio"> Audio </option>
            <option value="film"> Film </option>
            <option value="video"> Video </option>
          </Field>
        </div>

        <Button id="item" type="submit">Add item</Button>
      </form>
    );
  }
}

// Decorate the form component
ItemModal = reduxForm({
  form: 'itemForm'
})(ItemModal);

export default ItemModal;

// <input type="hidden" name="media_type">
// <i class="dropdown icon"></i>
// <div class="default text">Media Type</div>
// <div class="menu">
//   <div class="item" value="audio">Audio</div>
//   <div class="item" value="film">Film</div>
//   <div class="item" value="video">Video</div>
// </div>
