import {
  RECEIVE_RACES,
  RECEIVE_CLASSES,
  SET_RACE,
  SET_CLASS
} from '../actions'

export const initialState = {
  allRaces: [],
  allClasses: [],
  raceRefUrl: null,
  languageOptions: null,
  languageDescription: null,
  raceProficiencies: null,
  classRefUrl: null,
  subclasses: null,
  alignmentDescription: null,
  ageDescription: null,
  classLvlUrl: null,
  spellcastingUrl: null,
  startingEquipmentUrl: null,
  proficienyChoices: null,
  classProficiencies: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_RACES:
      return {
        ...state,
        allRaces: action.payload,
      }
    case SET_RACE:
      return {
        ...state,
        raceRefUrl: action.payload.url,
        languageOptions: action.payload.language_options,
        languageDescription: action.payload.language_desc,
        alignmentDescription: action.payload.alignment,
        ageDescription: action.payload.age,
        classProficiencies: action.payload.starting_proficiencies
      }
    case RECEIVE_CLASSES:
      console.log(action.payload)
      return {
        ...state,
        allClasses: action.payload
      }
    case SET_CLASS:
      return {
        ...state,
        classRefUrl: action.payload.url,
        subclasses: action.payload.subclasses,
        classLvlUrl: action.payload.classLvlUrl,
        spellcastingUrl : action.payload.spellcasting,
        startingEquipmentUrl: action.payload.starting_equipment,
        proficienyChoices: action.payload.proficiency_choices,
        classProficiencies: action.payload.proficiencies
      }
    default:
      return state
  }
}
