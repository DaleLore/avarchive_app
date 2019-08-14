export const fetchCollections = () => dispatch => {
  return fetch('http://localhost:3000/collections')
    .then(response => response.json())
    .then(collections => {
      dispatch({ type: "FETCH_COLLECTIONS", payload: collections })
    })
}

export const selectUserCollection = (collectionId) => dispatch => {
  let id = collectionId
  return fetch(`http://localhost:3000/collections/${id}`)
    .then(response => response.json())
    .then(collectionObject => {
      // console.log(collectionObject)
      dispatch({ type: "CURRENT_COLLECTION", payload: collectionObject})
  })
}

export const addNewCollection = (newCollectionObject) => dispatch => {
  
  return fetch('http://localhost:3000/collections', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      collection_name: newCollectionObject.newUser.collection_name,
      description: newCollectionObject.newUser.description,
      user_id: newCollectionObject.userId
    })
  })
  .then(response => response.json())
  .then(newCollectionObj => {
    dispatch({ type: "ADD_COLLECTION", payload: newCollectionObj})
  })
}

export const deleteCollection = (collectionObject) => dispatch => {
  let id = collectionObject.id
  return fetch(`http://localhost:3000/collections/${id}`, {
    method: "DELETE"
  })
    .then(() => dispatch({ type: "DELETE_COLLECTION", payload: id}))
}
