

export default function collectionReducer(state={}, action){
  switch(action.type){

    case "FETCH_COLLECTIONS":
      return {...state, collections: action.payload}

    case "CURRENT_COLLECTION":
      return {...state, userCollection: action.payload}

    case "ADD_COLLECTION":
      return {...state, collections: [...state.collections, action.payload]}

    case "UPDATE_COLLECTION":
      const updatedCollection = action.payload
      const new_state = state.collections.filter(collection => collection.id !== updatedCollection.id)
      return {collections: [...new_state, updatedCollection]}

    case "DELETE_COLLECTION":
      const collectionObject = action.payload
      const updatedCollections = state.collections.filter(collection => collection.id !== collectionObject)
      return {...state, collections: updatedCollections}

    case 'LOGOUT_USER':
      return {}

    default:
      return state;
  }
}
