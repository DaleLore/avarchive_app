import React from "react";
import { connect } from 'react-redux'
import { selectItem } from '../Redux/Actions/itemActions'
import { deleteItem } from '../Redux/Actions/itemActions'

const Item = (props) => {
  // console.log(props)
  // const handleClick = () => {
  //   if sidle
  //   elseif
  //   elseif
  // end
  // }

  return (
    <div className="side-li" onClick={() => props.selectItem()}>
      {props.item.title} : {props.item.media_type}
      <button className="update-button"> Update </button>
      <button className="delete-button" onClick={() => props.deleteItem()}> X </button>


    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectItem: () => dispatch(selectItem()),
    deleteItem: () => dispatch(deleteItem())
  }
};


export default connect(null, mapDispatchToProps)(Item);
