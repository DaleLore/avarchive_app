import React from "react";
import { connect } from 'react-redux'
import { selectUserCollection } from '../Redux/Actions/collectionActions'


const Collection = (props) => {


  return (
    <div className="side-li" onClick={() => props.selectUserCollection(props.collection.id)}>
      {props.collection.collection_name}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
   return {
     selectUserCollection: (collectionId) => dispatch(selectUserCollection(collectionId))
   }
}

export default connect(null, mapDispatchToProps)(Collection);
