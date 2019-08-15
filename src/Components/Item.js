import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectItem } from '../Redux/Actions/itemActions'
import { deleteItem } from '../Redux/Actions/itemActions'


class Item extends Component {

handleClick = (event) => {
  console.log(event.target.id)
  // const handleClick = () => {
  //   if sidle
  //   elseif
  //   elseif
  // end
  // }
}

  render() {
    return (

      <div className="side-li" id="item">
        {this.props.item.title} : {this.props.item.media_type}
        <button id="update-button"> Update </button>
        <button id="delete-button" onClick={() => this.props.deleteItem(this.props.item)}> Delete </button>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: () => dispatch(selectItem()),
    deleteItem: (item) => dispatch(deleteItem(item))
  }
};

export default connect(null, mapDispatchToProps)(Item);


// <button id="update-button" onClick={this.handleClick}> Update </button>
