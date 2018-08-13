import { findAllRaces } from 'external/5eAPI/queries'

export const FETCH_RACES = 'FETCH_RACES'

/*
This is a thunk. It's a function that returns a function. The redux thunk
middleware sees that you are returning a function from the actions and
calls that function with dispatch as an argument. This gives us access to
the dispatch function, which allows us to call other actions from within
actions. Pretty cool aye??
*/
export const fetchRaces = payload => dispatch => {
  return dispatch({
    type: FETCH_RACES,
    payload: findAllRaces().then(races => dispatch(receiveRaces(races)))
  })
}
/*
To help understand what's going on...this could be rewritten as:

export const fetchRaces = payload => {
  return (dispatch) => {
    return dispatch({
      type: FETCH_RACES,
      payload: findAllRaces().then(races => dispatch(receiveRaces(races)))
    })
  }
}

...but it looks nice all inline and such and is typically how these thunks are
written.
*/

export const RECEIVE_RACES = 'RECEIVE_RACES';
export const receiveRaces = payload => {
  return {
    type: RECEIVE_RACES,
    payload
  }
}
