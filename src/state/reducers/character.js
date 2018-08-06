import {
  SET_RACE,
  SET_CLASS,
  SET_BACKGROUND,
  SET_ALIGNMENT,
  SET_CHARACTERNAME,
  SET_ABILITIES
} from '../actions'
import { SET_ABILITIES } from '../actions/character';

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
        race: action.payload
      }
    case SET_CLASS:
      return {
        ...state,
        class: action.payload
      }
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload
      }
    case SET_ALIGNMENT:
      return {
        ...state,
        alignment: action.payload
      }
    case SET_CHARACTERNAME:
      return {
        ...state,
        characterName: action.payload
      }
    case SET_ABILITIES:
      return {
        ...state,
        abilityModifiers: action.payload
      }
    default:
      return state
  }
}
