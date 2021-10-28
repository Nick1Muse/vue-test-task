export const getters = {
  getCardData: (state) => (id) => {
    return state.cardsList.find((item) => item.id === +id);
  },
};