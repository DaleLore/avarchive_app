
export default function itemReducer(state={}, action){
  switch(action.type){

    case "FETCH_ITEMS":
     return {...state, items: action.payload}

    case "ADD_ITEM":
      return {...state, items: [...state.items, action.payload]}

    case "UPDATE_ITEM":
      const updatedItem = action.payload
      const new_state = state.items.filter(item => item.id !== updatedItem.id)
      return {items: [...new_state, updatedItem]}

    case "DELETE_ITEM":
      const itemObject = action.payload
      const updatedItems = state.items.filter(item => item.id !== itemObject)
      return {...state, items: updatedItems}

    default:
      return state;
  }
}
