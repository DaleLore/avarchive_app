import React, { Component } from 'react';
import ItemModal from './ItemModal'
import { connect } from 'react-redux'
import { deleteItem } from '../Redux/Actions/itemActions'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


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
      <div className="side-li">
          <span>{this.props.item.title}</span>
          <span>{this.props.item.media_type}</span>
          <Button
              id="update-item"
              onClick={this.toggleForm}> Update </Button>

          <Modal open={this.state.toggleForm} >
            <Modal.Header>Update Item</Modal.Header>
            <ItemModal toggleForm={this.toggleForm} item={this.props.item}/>
          </Modal>
          <Button
              id="delete-button"
              onClick={() => this.props.deleteItem(this.props.item)}> Delete </Button>

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
