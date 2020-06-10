import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    userType: 0,
    view: "normal"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    checkoutAdminViewPage(state) {
      state.view = "admin";
    },
    checkoutNormalViewPage(state) {
      state.view = "normal";
    }
  },
  actions: {},
  modules: {}
});
