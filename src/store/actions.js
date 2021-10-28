import { api_key } from '../assets/constants/ApiKey';

export const actions = {
  GET_CARDS_LIST({ commit }) {
    return this.$http.get(`https://pixabay.com/api/?key=${api_key}&q=cats&image_type=all&per_page=100`).then((response) => {
      commit('GET_CARDS_LIST', response.data.hits);
    })
  },
};