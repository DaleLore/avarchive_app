let initialState = {
  collections: [],
  userCollection: []
}


export default function collectionReducer(state= initialState, action){
  switch(action.type){

    // case "FETCH_COLLECTIONS":
    //   return {...state, collections: action.payload}

    case "CURRENT_COLLECTION":
      // console.log("collectionReducer: collectionObj", action.payload);
      return {...state, userCollection: action.payload}

    case "DELETE_COLLECTION":
      const collectionObject = action.payload
      const updatedCollections = state.collections.filter(collection => collection.id !== collectionObject)
      return {...state, collections: updatedCollections}

    default:
      return state;
  }
}

// const updatedArray = (collections, id) => collections.filter(collection => collection.id !== id)
