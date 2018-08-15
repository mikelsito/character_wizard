import {
  SET_RACE,
  SET_CLASS
} from '../actions'

export const initialState = {
  id: null,
  username: null,
  race: null,
  raceRefUrl: null,
  class: null,
  classRefUrl: null,
  subclasses: null,
  background: null,
  alignment: null,
  alignmentDescription: null,
  characterName: null,
  level: null,
  height: null,
  weight: null,
  age: null,
  ageDescription: null,
  size: null,
  speed: null,
  languages: null,
  languageOptions: null,
  abilityBonuses: null,
  savingThrows: null,
  proficiencies: null,
  proficienyChoices: null,
  classProficiencies: null,
  startingTraits: null,
  hitDie: null,
  startingEquipmentUrl: null,
  spellcastingUrl: null,
  classLvlUrl: null,

}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RACE:
      return {
        ...state,
        race: action.payload.name,
        raceRefUrl: action.payload.url,
        speed: action.payload.speed,
        size: action.payload,
        abilityBonuses: action.payload.ability_bonuses,
        ageDescription: action.payload.age,
        alignmentDescription: action.payload.alignment,
        size: action.payload.size,
        proficiencies: action.payload.starting_proficiencies,
        languages: action.payload.languages,
        languageOptions: action.payload.language_options,
        traits: action.payload.traits
      }
    case SET_CLASS: 
      return {
        ...state,
        class: action.payload.name,
        classRefUrl: action.payload.url,
        hitDie: action.payload.hit_die,
        proficienyChoices: action.payload.proficiency_choices,
        classProficiencies: action.payload.proficiencies,
        savingThrows: action.payload.saving_throws,
        startingEquipmentUrl: action.payload.starting_equipment,
        classLvlUrl: action.payload.classLvlUrl,
        subclasses: action.payload.subclasses,
        spellcastingUrl : action.payload.spellcasting
      }
    default:
      return state
  }
}
