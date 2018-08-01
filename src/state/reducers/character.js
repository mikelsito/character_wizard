import {
  SET_RACE
} from '../actions'

export const initialState = {
  race: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE:
      return {
        ...state,
        race: action.payload.race
      }
  }
}
