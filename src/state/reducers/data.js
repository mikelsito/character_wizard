import { 
  FETCH_RACES
} from '../actions'

export const initialState = {
  allRaces: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RACES:
    return {
      ...state,
      allRaces: action.payload,
      logPayload : console.log("Reducer payload:", action.payload)
    }
    default:
      return state
  }
}