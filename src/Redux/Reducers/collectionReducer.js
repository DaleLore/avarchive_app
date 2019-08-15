

export default function collectionReducer(state={}, action){
  switch(action.type){

    case "FETCH_COLLECTIONS":
      return {...state, collections: action.payload}

    case "CURRENT_COLLECTION":
      return {...state, userCollection: action.payload}

    // case "ADD_COLLECTION":
    // debugger
    //   return { ...state, collections: action.payload }

    // case "ADD_ITEM":
    // debugger
    //   const payload = action.payload
    //   return {items: [...state.userCollection.items, payload]};

    case "ADD_ITEM":
      // debugger
      const payload = action.payload
      const addItemToCollection = {...state, items: [...state.userCollection.items, payload]}
      return addItemToCollection
      //

    case "DELETE_COLLECTION":
    // debugger
      const collectionObject = action.payload
      const updatedCollections = state.collections.filter(collection => collection.id !== collectionObject)
      return {...state, collections: updatedCollections}

    case 'LOGOUT_USER':
      return {}

    default:
      return state;
  }
}

// const updatedArray = (collections, id) => collections.filter(collection => collection.id !== id)
