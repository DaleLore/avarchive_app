
export default function userReducer(state={}, action){
  switch(action.type){
    case 'LOGIN_USER':
      let userObj = action.payload
      return action.payload

    // case "SAVE_COLLECTIONS_TO_USER":
    //   return {...state, collections: }

    case 'LOGOUT_USER':
      return {}

    default:
      return state;
  }
}
