import { findSpecificRace } from 'external/5eAPI/queries';

export const FETCH_RACE = 'FETCH_RACE'
export const fetchRace = payload => dispatch => {
  return dispatch({
    type: FETCH_RACE,
    payload: findSpecificRace(payload).then(race => dispatch(setRace(race)))
  })
}

export const SET_RACE = 'SET_RACE'
export const setRace = payload => {
  return {
    type: SET_RACE,
    payload
  }
}