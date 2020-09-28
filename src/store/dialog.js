export default {
  namespaced: true,
  state: {
    networkError: false,
    responseError: {
      show: false,
      code: null,
      detail: "",
      msg: ""
    }
  },
  mutations: {
    SET_NETWORKERROR(state, payload) {
      state.networkError = payload;
    },
    SET_RESPONSEERROE(state, payload) {
      state.responseError = payload;
    }
  },
  actions: {
    setNetworkError({ commit }, payload) {
      commit("SET_NETWORKERROR", payload);
    },
    setResponseError({ commit }, payload) {
      commit("SET_RESPONSEERROE", payload);
    }
  }
};
