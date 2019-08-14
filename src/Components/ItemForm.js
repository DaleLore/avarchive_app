import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNewItem } from '../Redux/Actions/itemActions'
import { selectUserCollection } from '../Redux/Actions/collectionActions'

class ItemForm extends Component {

  state = {
    title: "",
    media_type: "",
  }

handleSubmit = (e) => {
  e.preventDefault()
  this.props.addNewItem(this.state)
}

handleChange = (e) => {
  this.setState({ value: e.target.value})
}
  render() {
    console.log(this.props.selectUserCollection)
    return (
      <form onSubmit={this.handleSubmit}>
        <center><h5>Add a new item to your collection</h5></center>
        <input type="text" name="collection_name" placeholder="Title"/>
        <select name="media_type">
            <option value="audio"> Audio </option>
            <option value="film"> Film </option>
            <option value="video"> Video </option>
        </select>
        <input type="submit" value="Add Item"/>
      </form>
    );
  }
}
const mapStateToProps= state => ({
  selectUserCollection: state.userInfo
});

const mapDispatchToProps = dispatch => {
   return {
     addNewItem: () => dispatch(addNewItem()),
   }
}

export default connect(null, mapDispatchToProps)(ItemForm);
