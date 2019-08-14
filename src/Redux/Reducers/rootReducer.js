import { combineReducers } from 'redux'
import userReducer from './userReducer'
import collectionReducer from './collectionReducer'
import itemReducer from './itemReducer'


const rootReducer = combineReducers({
  userInfo: userReducer,
  collectionStore: collectionReducer,
  itemStore: itemReducer
})

export default rootReducer
