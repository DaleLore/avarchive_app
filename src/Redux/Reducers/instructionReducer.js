
export default function instructionReducer(state = { }, action) {
switch (action.type) {

  case "STEP_ONE":
    console.log('i here');

  default:
    return state
  }
}
