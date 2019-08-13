let initialState = {
  collections: [],
  userCollection: []
}


export default function collectionReducer(state= initialState, action){
  switch(action.type){
    // case "SAVE_COLLECTIONS_TO_STATE":
    //   return {...state, collections: action.payload}

    case "CURRENT_COLLECTION":
      // console.log("collectionReducer: collectionObj", action.payload);
      return {...state, userCollection: action.payload}


    default:
      return state;
  }
}
