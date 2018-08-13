import axios from 'axios';

import races from 'external/5eAPI/races'

const urlBaseSegment = 'http://www.dnd5eapi.co/api/'

export const findAllRaces = () => {
  let queryURL = urlBaseSegment + 'races';

  axios.get(queryURL)
  .then(res => {
    console.log(res.data.results);
    return res.data.results;
  })
}

export const findSpecificRace = (query) => {
  let queryURL = urlBaseSegment + 'races/' + query;

  axios.get(queryURL)
  .then(res => {
    console.log(res.data);
    return res.data;
  })
}
