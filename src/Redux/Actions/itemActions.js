export const fetchItems = () => dispatch => {
  return fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(items => {
      dispatch({ type: "FETCH_ITEMS", payload: items})
    })
}

export const addNewItem = (itemObject) => dispatch => {
  return fetch('http://localhost:3000/items', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      title: itemObject.values.title,
      media_type: itemObject.values.media_type,
      collection_id: itemObject.collectionId
    })
  })
    .then(response => response.json())
    .then(newItemObject => {
      dispatch({type: "ADD_ITEM", payload: newItemObject})
    })
}

export const updateItem = (item) => dispatch => {
  console.log('i click');
//   let id = item.id
//   return fetch(`http://localhost:3000/items/${id}`, {
//     method: "PATCH",
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(item)
//   })
//     .then(response => response.json())
//     .then(itemData => {
//       dispatch({type: "UPDATE_ITEM", payload: itemData})
//     })
}

export const deleteItem = (item) => dispatch => {
  let id = item.id
  return fetch(`http://localhost:3000/items/${id}`, {
    method: "DELETE"
  })
    .then(() => dispatch({ type: "DELETE_ITEM", payload: id}))

}
