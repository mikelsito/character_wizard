import {
  SET_RACE,
  SET_CLASS
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  languageOptions: null,
=======
  languageDescription: null,
>>>>>>> working on what to display on left
>>>>>>> working on what to display on left
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
        languages: action.payload.languages,
<<<<<<< HEAD
=======
<<<<<<< HEAD
        languageOptions: action.payload.language_options,
>>>>>>> working on what to display on left
        traits: action.payload.traits
      }
    case SET_CLASS: 
      return {
        ...state,
        class: action.payload.name,
        hitDie: action.payload.hit_die,
        savingThrows: action.payload.saving_throws,
<<<<<<< HEAD
=======
        startingEquipmentUrl: action.payload.starting_equipment,
        classLvlUrl: action.payload.classLvlUrl,
        subclasses: action.payload.subclasses
=======
        languageDescription: action.payload.language_desc,
        traits: action.payload.traits,
        raceRefUrl: action.payload.url
>>>>>>> working on what to display on left
>>>>>>> working on what to display on left
      }
    default:
      return state
  }
}
