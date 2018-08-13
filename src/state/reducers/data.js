import {
  RECEIVE_RACES
} from '../actions'

export const initialState = {
  allRaces: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RACES:
      // you can console here before returning.
      console.log(action.payload)
      return {
        ...state,
        allRaces: action.payload,
      }
    default:
      return state
  }
}
