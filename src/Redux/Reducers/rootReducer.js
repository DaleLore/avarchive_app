import { combineReducers } from 'redux'
import userReducer from './userReducer'
import collectionReducer from './collectionReducer'
import itemReducer from './itemReducer'
import modalReducer from './modalReducer'

import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  userInfo: userReducer,
  collectionStore: collectionReducer,
  itemStore: itemReducer,
  form: reduxFormReducer,
  modal: modalReducer
})

export default rootReducer
