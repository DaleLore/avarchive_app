import { combineReducers } from 'redux'
import userReducer from './userReducer'
import collectionReducer from './collectionReducer'


const rootReducer = combineReducers({
  userInfo: userReducer,
  collectionStore: collectionReducer
})

export default rootReducer
