import axios from 'axios';

import races from 'external/5eAPI/races'

const urlBaseSegment = 'http://www.dnd5eapi.co/api/'

export const findSpecificRace = (query) => {
  axios.get(query)
  .then(res => {
    console.log(res.data);
  })
}
