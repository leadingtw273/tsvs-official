import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import dialog from "./dialog";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    }
  },
  modules: {
    user,
    dialog,
    admin
  }
});
