import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewItem } from '../Redux/Actions/itemActions'
import { Field, reduxForm } from 'redux-form';
import { Button } from 'semantic-ui-react'


class ItemForm extends Component {

submit = (values) => {
  let collectionId = this.props.collection.id
  this.props.addNewItem({values, collectionId})
}
  render() {
    // console.log(this.props.collection.id);
    return (
      <form className="add-item-form" onSubmit={this.props.handleSubmit(this.submit)}>
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
ItemForm = reduxForm({
  form: 'itemForm'
})(ItemForm);

const mapStateToProps= state => ({
    collection: state.collectionStore.userCollection
});


export default connect(mapStateToProps, {addNewItem})(ItemForm);
