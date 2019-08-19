import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectItem } from '../Redux/Actions/itemActions'
// import { updateItem } from '../Redux/Actions/itemActions'
import { deleteItem } from '../Redux/Actions/itemActions'
import { Button } from 'semantic-ui-react'



class Item extends Component {

  render() {
    return (
      <div>
        <tr className="side-li">
          <td>{this.props.item.title}</td>
          <td>{this.props.item.media_type}</td>
          <td><Button
              id="update-button"
              onClick={null}> Update </Button></td>
          <td><Button
              id="delete-button"
              onClick={() => this.props.deleteItem(this.props.item)}> Delete </Button></td>
        </tr>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: () => dispatch(selectItem()),
    // updateItem: (item) => dispatch(updateItem(item)),
    deleteItem: (item) => dispatch(deleteItem(item))
  }
};

export default connect(null, mapDispatchToProps)(Item);

// <button id="update-button" onClick={() => this.props.updateItem(this.props.item)}> Update </button>
// <button id="update-button" onClick={this.handleClick}> Update </button>
