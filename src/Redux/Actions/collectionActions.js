
// export const fetchCollections = () => {
//   return (dispatch) => {
//     fetch('http://localhost:3000/collections/')
//       .then(response => response.json())
//       .then(collections => dispatch(saveCollectionsToState(collections)))
//   }
// }

// export const saveCollectionsToState = (collections) => {
//   return {
//     type: "SAVE_COLLECTIONS_TO_STATE",
//     payload: collections
//   }
// }

export const selectUserCollection = (collectionId) => dispatch => {
  let id = collectionId
  return fetch(`http://localhost:3000/collections/${id}`)
    .then(response => response.json())
    .then(collectionObject => {
      // console.log(collectionObject)
      dispatch({ type: "CURRENT_COLLECTION", payload: collectionObject})
  })
}
