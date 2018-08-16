import axios from 'axios';

const urlBaseSegment = 'http://www.dnd5eapi.co/api/'

export const findAllRaces = () => {
  let queryURL = urlBaseSegment + 'races';

  return axios.get(queryURL)
  .then(res => {
    return res.data.results;
  })
}

export const findAllClasses = () => {
  let queryURL = urlBaseSegment + 'classes';

  return axios.get(queryURL)
  .then(res => {
    return res.data.results;
  })
}

export const queryApi = (query) => {
  return axios.get(query)
  .then(res => {
    return res.data
  })
}

// export const findSpecificRace = (query) => {
//   let queryURL = urlBaseSegment + 'races/' + query;

//   return axios.get(queryURL)
//   .then(res => {
//     return res.data
//   })
// }

// export const findSpecificClass = (query) => {
//   let queryURL = urlBaseSegment + 'classes/' + query;

//   return axios.get(queryURL)
//   .then(res => {
//     return res.data
//   })
// }

// export const findLanguage = (query) => {
//   let queryURL = urlBaseSegment + 'languages/' + query;

//   return axios.get(queryURL)
//   .then(res => {
//     return res.data
//   })
// }
