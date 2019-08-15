
export default function itemReducer(state={}, action){
  switch(action.type){
    //
    case "FETCH_ITEMS":
    // debugger
     return {...state, items: action.payload}

     // case "CURRENT_COLLECTION":
     //   return {...state, userCollection: action.payload}
     //
    case "ADD_ITEM":
      return {...state, items: [...state.items, action.payload]}
    //
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
