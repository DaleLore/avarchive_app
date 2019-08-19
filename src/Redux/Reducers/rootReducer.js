import { combineReducers } from 'redux'
import userReducer from './userReducer'
import collectionReducer from './collectionReducer'
import itemReducer from './itemReducer'

import { reducer as reduxFormReducer } from 'redux-form';


const rootReducer = combineReducers({
  userInfo: userReducer,
  collectionStore: collectionReducer,
  itemStore: itemReducer,
  form: reduxFormReducer
})

export default rootReducer
