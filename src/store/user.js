import store from "store2";
import apiMember from "@/apis/Member";

export default {
  namespaced: true,
  state: {
    name: null,
    authenticate: null,
    role: 999
  },
  mutations: {
    SET_USER(state, { name, authenticate, role }) {
      state.name = name;
      state.authenticate = authenticate;
      state.role = role;
    }
  },
  actions: {
    async login({ commit }, authenticate) {
      const member = new apiMember();
      const { success, data } = await member.getSelf(authenticate.token);

      if (success) {
        const { username, role } = data;

        commit("SET_USER", {
          name: username,
          authenticate,
          role
        });
        store.set("authenticate", JSON.stringify(authenticate));
      } else {
        console.error("store/user/actions/login => 無法取得用戶資訊");
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
    async reGetStatus({ dispatch }) {
      if (!store.has("authenticate")) return;

      const authenticate = JSON.parse(store.get("authenticate"));
      await dispatch("login", authenticate);
    }
  },
  getters: {
    role(state) {
      return state.role;
    },
    name(state) {
      return state.name;
    }
  }
};
