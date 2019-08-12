let initialState = {
  currentUser: {}
}


export default function userReducer(state= initialState, action){
  switch(action.type){
    case 'LOGIN_USER':
      let userObj = action.payload
      return {...state, currentUser: userObj}

    case 'LOG_OUT':
      return {...state, currentUser: {}}

    default:
      return state;
  }
}
