import {
  SET_RACE
} from '../actions'

export const initialState = {
  id: null,
  username: null,
  race: null,
  raceRefUrl: null,
  class: null,
  background: null,
  alignment: null,
  alignmentDescription: null,
  characterName: null,
  height: null,
  weight: null,
  age: null,
  ageDescription: null,
  size: null,
  speed: null,
  languages: null,
  abilityBonuses: null,
  startingProficiencies: null,
  startingTraits: null,
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
        ageDescription: action.payload.age,
        alignmentDescription: action.payload.alignment,
        size: action.payload.size,
        startingProficiencies: action.payload.starting_proficiencies,
        languages: action.payload.languages,
        traits: action.payload.traits,
        raceRefUrl: action.payload.url
      }
    default:
      return state
  }
}
