import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import dialog from "./dialog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    view: "normal"
  },
  mutations: {
    checkoutAdminViewPage(state) {
      state.view = "admin";
    },
    checkoutNormalViewPage(state) {
      state.view = "normal";
    }
  },
  actions: {},
  modules: {
    user,
    dialog
  }
});
