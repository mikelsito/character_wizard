import { findAllRaces } from 'external/5eAPI/queries'

export const FETCH_RACES = 'FETCH_RACES'
export const fetchRaces = payload => {
  return {
    type: FETCH_RACES,
    payload: findAllRaces()
  }
}