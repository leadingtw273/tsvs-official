import postApi from "@/apis/Post";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getPost({ rootState }, params = {}) {
      let api;
      if (rootState.user.name) {
        api = new postApi({ token: rootState.user.authenticate.token });
      } else {
        api = new postApi();
      }
      const res = await api.getPost(params);
      return res.data;
    },
    async getPostDetail({ rootState }, id) {
      let api;
      if (rootState.user.name) {
        api = new postApi({ token: rootState.user.authenticate.token });
      } else {
        api = new postApi();
      }
      const res = await api.getPostDetail(id);
      return res.data;
    },
    async createPost({ rootState }, params) {
      const api = new postApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.createPost(params);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updatePost({ rootState }, { id, ...params }) {
      const api = new postApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.updatePost(id, params);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deletePost({ rootState }, id) {
      const api = new postApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.deletePost(id);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};
