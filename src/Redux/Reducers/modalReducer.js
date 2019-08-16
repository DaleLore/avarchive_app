
const intialState = {
  updateCollection: false
}

export default function modalReducer(state=intialState, action){
  switch(action.type){

  case "MODAL_CLOSE":
    return {updateCollection: !state.updateCollection};

  default:
    return state;
  }
}
