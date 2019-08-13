import React from "react";

const Collection = (props) => {
  console.log(props)
  return (
    <div className="side-li">
      {props.collection.collection_name}
    </div>
  )
}

export default Collection;
