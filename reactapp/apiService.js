import axios from 'axios';

const urlBase = 'https://api.github.com/';

export default {
  searchRepositories(search, language) {
    const finalUrl = `${urlBase}search/repositories?q=${search}`;
    return axios.get(finalUrl)
                .then(response => {
                  return response.data;
                });
  },  
};
