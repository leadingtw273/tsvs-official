import apiAdminMember from "@/apis/AdminMember";

// const api = new apiAdminMember();

export default {
  namespaced: true,
  state: {
    user: {
      total: 0,
      data: [],
      loading: false
    },
    register: {
      total: 0,
      data: [],
      loading: false
    }
  },
  getters: {},
  mutations: {
    SET_INFO(state, { type, data, total }) {
      state[type].data = data;
      state[type].total = total;
    },
    SET_LOADING(state, { type, loading }) {
      state[type].loading = loading;
    }
  },
  actions: {
    async getUserList({ commit, rootState }, params = {}) {
      commit("SET_LOADING", {
        type: "user",
        loading: true
      });
      const api = new apiAdminMember({
        token: rootState.user.authenticate.token
      });
      const res = await api.getUserList(params);

      commit("SET_INFO", {
        type: "user",
        data: res.data,
        total: res.total
      });

      commit("SET_LOADING", {
        type: "user",
        loading: false
      });
    },
    async getRegisterUserList({ commit, rootState }, params = {}) {
      commit("SET_LOADING", {
        type: "register",
        loading: true
      });
      const api = new apiAdminMember({
        token: rootState.user.authenticate.token
      });
      const res = await api.getRegisterUserList(params);

      commit("SET_INFO", {
        type: "register",
        data: res.data,
        total: res.total
      });

      commit("SET_LOADING", {
        type: "register",
        loading: false
      });
    },
    async updateUser({ rootState }, params) {
      const api = new apiAdminMember({
        token: rootState.user.authenticate.token
      });
      await api.updateUser(params);
    },
    async approval({ rootState }, id) {
      const api = new apiAdminMember({
        token: rootState.user.authenticate.token
      });
      await api.approvalUser(id);
    },
    async deleteUser({ rootState }, id) {
      const api = new apiAdminMember({
        token: rootState.user.authenticate.token
      });
      await api.deleteUser(id);
    }
  }
};
