import React from "react";
import { connect } from 'react-redux'
import { selectUserCollection } from '../Redux/Actions/collectionActions'
import { deleteCollection } from '../Redux/Actions/collectionActions'


const Collection = (props) => {


  return (
    <div className="side-li" onClick={() => props.selectUserCollection(props.collection.id)}>
      {props.collection.collection_name}
    
      <button > Update </button>
      <button onClick={() => props.deleteCollection(props.collection)}> X </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
   return {
     selectUserCollection: (collectionId) => dispatch(selectUserCollection(collectionId)),
     deleteCollection: (collectionObject) => dispatch(deleteCollection(collectionObject))
   }
}

export default connect(null, mapDispatchToProps)(Collection);
