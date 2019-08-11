import React from "react";

const ItemForm = (props) => {
  return (
      <form>
        <center><h5>Add a new item to your collection</h5></center>
        <input type="text" name="collection_name" placeholder="Title"/>
        <input type="text" name="description" placeholder="Media Type"/>
        <input type="submit" value="Add Item"/>
      </form>
    )
  };

export default ItemForm;
