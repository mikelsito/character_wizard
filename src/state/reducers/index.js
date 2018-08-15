// All various reducers you add will all be combined in rootReducer.js
import { combineReducers } from 'redux'
import character from './character'
import data from './data'
import charOptions from './charOptions'

export default combineReducers({
  character,
  data,
  charOptions
})
