import {
  RECEIVE_RACES,
  RECEIVE_CLASSES
} from '../actions'

export const initialState = {
  allRaces: [],
  allClasses: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RACES:
      // you can console here before returning.
      // console.log(action.payload)
      return {
        ...state,
        allRaces: action.payload,
      }
    case RECEIVE_CLASSES:
      console.log(action.payload)
      return {
        ...state,
        allClasses: action.payload
      }
    default:
      return state
  }
}
