import React from "react";

const CollectionForm = (props) => {
  return (
      <form>
        <center><h5>Create a new collection</h5></center>
        <input type="text" name="collection_name" placeholder="Collection Name"/>
        <input type="text" name="description" placeholder="Description"/>
        <input type="submit" value="Create"/>
      </form>
    )
  };

export default CollectionForm;
