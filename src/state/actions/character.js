import { queryApi } from 'external/5eAPI/queries';

export const FETCH_RACE = 'FETCH_RACE'
export const fetchRace = payload => dispatch => {
  return dispatch({
    type: FETCH_RACE,
    payload: queryApi(payload).then(race => dispatch(setRace(race)))
  })
}

export const SET_RACE = 'SET_RACE'
export const setRace = payload => {
  return {
    type: SET_RACE,
    payload
  }
}

export const FETCH_CLASS = 'FETCH_CLASS'
export const fetchClass = payload => dispatch => {
  return dispatch({
    type: FETCH_CLASS,
    payload: queryApi(payload).then(classback => dispatch(setClass(classback)))
  })
}

export const SET_CLASS = 'SET_CLASS'
export const setClass = payload => {
  return {
    type: SET_CLASS,
    payload
  }
}

export const FETCH_LANGUAGE = 'FETCH_LANGUAGE'
export const fetchLanguage = payload => dispatch => {
  return dispatch({
      type: FETCH_LANGUAGE,
      payload: queryApi(payload).then(languageback => dispatch(setLanguage(languageback)))
  })
}

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const setLanguage = payload => {
  return {
    type: SET_LANGUAGE,
    payload
  }
}
