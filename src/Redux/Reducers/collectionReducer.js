let initialState = {
  collections: []
}


export default function collectionReducer(state= initialState, action){
  switch(action.type){
    case "SAVE_COLLECTIONS_TO_STATE":
      return {...state, collections: action.payload}

    
    default:
      return state;
  }
}
