import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import dialog from "./dialog";
import admin from "./admin";
import menu from "./menu";
import post from "./post";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: false,
    view: "normal",
    loading: false
  },
  mutations: {
    checkoutAdminViewPage(state) {
      state.view = "admin";
    },
    checkoutNormalViewPage(state) {
      state.view = "normal";
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_APP_STATUS(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    async initApp({ commit, dispatch }) {
      commit("SET_APP_STATUS", false);
      await dispatch("user/reGetStatus");
      await dispatch("menu/getMenu");
      commit("SET_APP_STATUS", true);
    },
    setLoading({ commit }, payload) {
      commit("SET_LOADING", payload);
    }
  },
  modules: {
    user,
    dialog,
    menu,
    post,
    admin
  }
});
