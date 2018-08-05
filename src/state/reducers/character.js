import {
  SET_RACE,
  SET_CLASS
} from '../actions'

export const initialState = {
  id: null,
  username: null,
  race: null,
  class: null,
  background: null,
  alignment: null,
  characterName: null,
  height: null,
  weight: null,
  size: null,
  speed: null,
  abilityModifiers: {
    strength: [],
    dexterity: [],
    constitution: [],
    intelligence: [],
    wisdom: [],
    charsima: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE:
      return {
        ...state,
        race: action.payload.race
      }
    case SET_CLASS:
      return {
        ...state,
        class: action.payload.class
      }
    default:
      return state
  }
}
