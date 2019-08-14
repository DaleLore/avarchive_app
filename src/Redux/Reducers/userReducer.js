
export default function userReducer(state={}, action){
  switch(action.type){
    case 'LOGIN_USER':
      return action.payload

    case 'LOGOUT_USER':
      return {}

    case "DELETE_COLLECTION":
      const collectionObject = action.payload
      const updatedCollections = state.collections.filter(collection => collection.id !== collectionObject)
      return {...state, collections: updatedCollections}

    default:
      return state;
  }
}
