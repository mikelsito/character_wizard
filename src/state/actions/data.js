import { findAllRaces, findAllClasses } from 'external/5eAPI/queries'

export const FETCH_RACES = 'FETCH_RACES'
export const fetchRaces = payload => dispatch => {
  return dispatch({
    type: FETCH_RACES,
    payload: findAllRaces('').then(races => dispatch(receiveRaces(races)))
  })
}

export const RECEIVE_RACES = 'RECEIVE_RACES';
export const receiveRaces = payload => {
  return {
    type: RECEIVE_RACES,
    payload
  }
}

export const FETCH_CLASSES = 'FETCH_CLASSES';
export const fetchClasses = payload => dispatch => {
  return dispatch({
    type: FETCH_CLASSES,
    payload: findAllClasses().then(classes => dispatch(receiveClasses(classes)))
  })
}

export const RECEIVE_CLASSES = 'RECEIEVE_CLASSES';
export const receiveClasses = payload => {
  return {
    type: RECEIVE_CLASSES,
    payload
  }
}
