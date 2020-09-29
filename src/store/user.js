import store from "store2";
import apiMember from "@/apis/Member";

export default {
  namespaced: true,
  state: {
    name: null,
    authenticate: null,
    status: "notSigned",
    role: 999
  },
  mutations: {
    SET_USER(state, { name, authenticate, role }) {
      state.name = name;
      state.authenticate = authenticate;
      state.role = role;
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    async login({ commit }, authenticate) {
      commit("SET_STATUS", "loading");

      const member = new apiMember();
      const { success, data } = await member.getSelf(authenticate.token);

      if (success) {
        const { username, role } = data;

        commit("SET_USER", {
          name: username,
          authenticate,
          role
        });
        commit("SET_STATUS", "success");
        store.set("authenticate", JSON.stringify(authenticate));
      } else {
        if (store.has("authenticate")) store.remove("authenticate");

        console.error("store/user/actions/login => 無法取得用戶資訊");
      }
    },
    async signOut({ commit, state }) {
      const member = new apiMember();
      const { success } = await member.signOut(state.authenticate.token);

      if (success) {
        commit("SET_USER", {
          name: null,
          authenticate: null,
          type: 999
        });

        commit("SET_STATUS", "notSigned");
        store.remove("authenticate");
      } else {
        console.error("store/user/actions/signOut => 無法正確登出");
      }
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
    },
    status(state) {
      return state.status;
    }
  }
};
