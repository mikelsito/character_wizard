import {
  SET_RACE,
  SET_CLASS,
  SET_LANGUAGE
} from '../actions'

export const initialState = {
  id: 1,
  username: null,
  race: null,
  class: null,
  subclass: null,
  background: null,
  alignment: null,
  characterName: null,
  level: null,
  height: null,
  weight: null,
  age: null,
  size: null,
  speed: null,
  languages: null,
  abilityBonuses: null,
  savingThrows: null,
  proficiencies: null,
  startingTraits: null,
  hitDie: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE:
      return {
        ...state,
        race: action.payload.name,
        speed: action.payload.speed,
        size: action.payload,
        abilityBonuses: action.payload.ability_bonuses,
        size: action.payload.size,
        // languages: action.payload.languages,
        traits: action.payload.traits
      }
    case SET_CLASS: 
      return {
        ...state,
        class: action.payload.name,
        hitDie: action.payload.hit_die,
        savingThrows: action.payload.saving_throws,
      }
    case SET_LANGUAGE: 
      return {
        ...state,
        languages: [...this.languages, action.payload]
      }
    default:
      return state
  }
}