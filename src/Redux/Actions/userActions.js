//FOR SIGN UP
export const userSignUp = (newUserInfo) => {
  // console.log(newUserInfo)
  return dispatch => {
    return fetch('http://localhost:3000/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUserInfo)
    })
    .then(response => response.json())
    .then(userData =>{
      // console.log("from userActions", userData)
        if (userData.token){ localStorage.token = userData.token }
        dispatch(loginUser(userData.user))
    })
  }
}

//FOR LOGIN
export const userLogin = (userInfo) => {
  return dispatch => {
    return fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(userData => {
        if (userData.token){ localStorage.token = userData.token }
        dispatch(loginUser(userData.user))
    })
  }
}

//TO PERSIST USER
export const fetchUserProfile = () => {
  return dispatch => {
    return fetch('http://localhost:3000/profile', {
      method: "GET",
      headers: {
        Authorization: localStorage.token
      }
    })
      .then(response => response.json())
      .then(profileData => {
        if (profileData.message){
          localStorage.removeItem(localStorage.token)
        } else {
          dispatch(loginUser(profileData))
      }
    })
  }
}

const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const logoutUser = () => ({
    type: "LOGOUT_USER"
})
