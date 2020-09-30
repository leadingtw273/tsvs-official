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
    SET_USER(state, { name, role }) {
      state.name = name;
      state.role = role;
    },
    SET_AUTH(state, authenticate) {
      state.authenticate = authenticate;
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    }
  },
  actions: {
    async getAuthToken({ commit }, { username, password }) {
      const member = new apiMember();

      const { success, data } = await member.signIn({
        username,
        password
      });

      if (success) {
        commit("SET_AUTH", data.token);
        store.set("authenticate", data.token);
      } else {
        throw new Error("store/user/actions/getAuthToken => 用戶登入認證失敗");
      }
    },
    async getUserInfo({ commit }, token) {
      const member = new apiMember();
      const { success, data } = await member.getSelf(token);

      if (success) {
        const { username, role } = data;
        commit("SET_USER", {
          name: username,
          role
        });
      } else {
        if (store.has("authenticate")) store.remove("authenticate");
        throw new Error("store/user/actions/getUserInfo => 無法取得用戶資訊");
      }
    },
    async login({ commit, dispatch, state }, { username, password }) {
      commit("SET_STATUS", "loading");

      try {
        await dispatch("getAuthToken", { username, password });
        await dispatch("getUserInfo", state.authenticate);
        commit("SET_STATUS", "success");
      } catch (error) {
        console.error(error);
        commit("SET_STATUS", "notSigned");
      }
    },
    async signOut({ commit, state }) {
      const member = new apiMember();
      const { success } = await member.signOut(state.authenticate);

      if (!success) console.error("store/user/actions/signOut => 後端無法正確登出");

      commit("SET_USER", {
        name: null,
        authenticate: null,
        type: 999
      });

      commit("SET_STATUS", "notSigned");
      store.remove("authenticate");
    },
    async reGetStatus({ commit, dispatch }) {
      if (!store.has("authenticate")) return;

      commit("SET_STATUS", "loading");

      try {
        const authenticate = store.get("authenticate");
        await dispatch("getUserInfo", authenticate);
        commit("SET_STATUS", "success");
      } catch (error) {
        console.error(error);
        commit("SET_STATUS", "notSigned");
      }
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
    },
    token(state) {
      return state.authenticate;
    }
  }
};
