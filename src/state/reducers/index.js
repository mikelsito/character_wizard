// All various reducers you add will all be combined in rootReducer.js
import { combineReducers } from 'redux'
import character from './character'

export default combineReducers({
  character
})
