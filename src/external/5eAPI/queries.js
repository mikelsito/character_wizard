import axios from 'axios';

const urlBaseSegment = 'http://www.dnd5eapi.co/api/'

export const findAllRaces = () => {
  let queryURL = urlBaseSegment + 'races';

  return axios.get(queryURL)
  .then(res => {
    return res.data.results;
  })
}

export const findSpecificRace = (query) => {
  return axios.get(query)
  .then(res => {
    return res.data;
  })
}

export const findAllClasses = () => {
  let queryURL = urlBaseSegment + 'classes';

  return axios.get(queryURL)
  .then(res => {
    return res.data.results;
  })
}
