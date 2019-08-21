import React, { Component } from 'react';
import ItemModal from './ItemModal'
import { connect } from 'react-redux'
import { deleteItem } from '../Redux/Actions/itemActions'
import { Modal } from 'semantic-ui-react'


class Item extends Component {

  state = {
    toggleForm: false
  }

  toggleForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  }

  render() {

    return (
      <div className="item-li">
          <span id="item-title">{this.props.item.title}</span>
          <span id="item-media">{this.props.item.media_type}</span>
          <button
              id="update-item"
              onClick={this.toggleForm}> Update </button>

          <Modal open={this.state.toggleForm} >
            <Modal.Header>Update Item</Modal.Header>
            <ItemModal toggleForm={this.toggleForm} item={this.props.item}/>
          </Modal>
          <button
              id="delete-button"
              onClick={() => this.props.deleteItem(this.props.item)}> Delete </button>

      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item))
  }
};

export default connect(null, mapDispatchToProps)(Item);
