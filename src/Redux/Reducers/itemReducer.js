let initialState = {
  items: []
}

export default function itemReducer(state=initialState, action){
  switch(action.type){
    //
    case "FETCH_ITEMS":
     return {...state, items: action.payload}

     // case "CURRENT_COLLECTION":
     //   return {...state, userCollection: action.payload}
     //
    // case "ADD_ITEM":
    // // debugger
    //   return {...state, items: action.payload}
    // //
    // case "UPDATE_ITEM":
    //   return
    //
    // case "DELETE_ITEM":
    //   return
    //
    // case "SEARCH_ITEMS"
    //   return

    default:
      return state;
  }
}
