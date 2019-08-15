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

export const selectItem = () => dispatch => {
  console.log('i click')
}

export const deleteItem = () => dispatch => {
  console.log('i delete')
}
