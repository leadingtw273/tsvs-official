import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import dialog from "./dialog";
import admin from "./admin";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    dialog,
    admin
  }
});
