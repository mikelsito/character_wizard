// All various reducers you add will all be combined in rootReducer.js
import { combineReducers } from 'redux'
import character from 'state/reducers/character'

export default combineReducers({
  character
})
