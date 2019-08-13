import React from "react";

const Item = (props) => {
  console.log(props)
  return (
    <div>
      {props.item.title} : {props.item.media_type}
    </div>
  )
}

export default Item;
