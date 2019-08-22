import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewItem } from '../Redux/Actions/itemActions'
import { Field, reduxForm, reset } from 'redux-form';



class ItemForm extends Component {


submit = (values) => {
  let collectionId = this.props.collection.id
  this.props.addNewItem({values, collectionId})
  this.props.reset()
}
  render() {
    return (
      <form className="item-form" onSubmit={this.props.handleSubmit(this.submit)}>
        <h5>Add a new item</h5>
        <div id="item-form">
          <label id="label">Title:</label>
          <Field
              id="item"
              name="title"
              component="input"
              type="text"
              placeholder="Item Title"
              required/>

          <label id="label">Media Type</label>
          <Field id="item" name="media_type" component="select" type="text" required>
            <option></option>
            <option value="audio"> Audio </option>
            <option value="digital"> Digital </option>
            <option value="film"> Film </option>
            <option value="video"> Photograph </option>
            <option value="video"> Video </option>

          </Field>
          <button id="create-item" type="submit">Add item</button>
        </div>

      </form>
    );
  }
}

// Decorate the form component
ItemForm = reduxForm({
  form: 'itemForm'
})(ItemForm);

const mapStateToProps= state => ({
    collection: state.collectionStore.userCollection
});


export default connect(mapStateToProps, {addNewItem})(ItemForm);
