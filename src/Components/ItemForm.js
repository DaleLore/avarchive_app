import React from "react";

const ItemForm = (props) => {
  return (
      <form>
        <center><h5>Add a new item to your collection</h5></center>
        <input type="text" name="collection_name" placeholder="Title"/>
        <select name="media_type">
            <option value="Audio"> Audio </option>
            <option value="Film"> Film </option>
            <option value="Video"> Video </option>
        </select>
        <input type="submit" value="Add Item"/>
      </form>
    )
  };

export default ItemForm;
