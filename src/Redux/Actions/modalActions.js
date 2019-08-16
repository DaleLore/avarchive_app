
// export const updateCollection = () => dispatch => {
//   dispatch({ type: "MODAL_TOGGLE", payload: null})
// }

export const modalToggle = (e) => dispatch => {
  dispatch({
    type: "MODAL_CLOSE"
  })
}
