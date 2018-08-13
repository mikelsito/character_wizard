import axios from 'axios';

import races from 'external/5eAPI/races'

const urlBaseSegment = 'http://www.dnd5eapi.co/api/'

export const findAllRaces = () => {
  let queryURL = urlBaseSegment + 'races';

  // You gotta make sure to return here!!
  return axios.get(queryURL)
  .then(res => {
    console.log('RESULTS', res.data.results);
    return res.data.results;
  })
}

export const findSpecificRace = (query) => {
  let queryURL = urlBaseSegment + 'races/' + query;

  return axios.get(queryURL)
  .then(res => {
    console.log(res.data);
    return res.data;
  })
}

export const findAllClasses = () => {
  let queryURL = urlBaseSegment + 'classes';

  axios.get(queryURL)
  .then(res => {
    console.log(res.data.results);
  })
}
