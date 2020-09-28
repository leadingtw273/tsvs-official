import Vue from "vue";
import Vuex from "vuex";
import store from "store2";
import apiMember from "@/apis/Member";

import dialog from "./dialog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: null,
      authenticate: null,
      type: 999
    },
    view: "normal"
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    checkoutAdminViewPage(state) {
      state.view = "admin";
    },
    checkoutNormalViewPage(state) {
      state.view = "normal";
    }
  },
  actions: {
    async login({ commit }, authenticate) {
      const member = new apiMember();
      const { success, data } = await member.getSelf(authenticate.token);

      if (success) {
        const { username, type } = data;

        commit("SET_USER", {
          name: username,
          authenticate,
          type
        });
        store.set("authenticate", JSON.stringify(authenticate));
      } else {
        console.error("store/actions/login => 無法取得用戶資訊");
      }
    },
    signOut({ commit }) {
      commit("SET_USER", {
        name: null,
        authenticate: null,
        type: 999
      });

      store.remove("authenticate");
    },
    async reGetUserStatus({ dispatch }) {
      const authenticate = JSON.parse(store.get("authenticate"));
      await dispatch("login", authenticate);
    }
  },
  modules: {
    dialog
  }
});
