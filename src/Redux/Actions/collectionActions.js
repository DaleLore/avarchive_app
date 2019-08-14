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

export const deleteCollection = (collectionObject) => dispatch => {
  let id = collectionObject.id
  return fetch(`http://localhost:3000/collections/${id}`, {
    method: "DELETE"
  })
    .then(() => dispatch({ type: "DELETE_COLLECTION", payload: id}))
}
