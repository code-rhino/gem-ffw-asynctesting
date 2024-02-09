const axios = require('axios');
const API_URL = 'https://cat-fact.herokuapp.com/facts';

function fetchVerifiedCatFacts() {
  return axios
    .get(API_URL)
    .then(({ data }) => {
      return data.filter((fact) => fact.status.verified);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

module.exports = { fetchVerifiedCatFacts };
