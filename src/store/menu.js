import menuApi from "@/apis/Menu";
import { asyncRoutes } from "@/router/index";
// const Container = () => import("@/layout/container.vue");

function _convertMenu(menu, parent) {
  const PAGE_TYPE = new Map([
    [0, "menu"],
    [1, "page"],
    [2, "list"],
    [3, "album"],
    [4, "other"]
  ]);
  const route = {
    path: menu.name_en.toLowerCase().replace(/ /g, "_"),
    name: menu.name_en.toLowerCase().replace(/ /g, "_"),
    meta: {
      id: menu.id,
      type: menu.type,
      text: { zh: menu.name_zh, en: menu.name_en },
      displayType: PAGE_TYPE.get(menu.type),
      requiresAuth: menu.locked,
      priority: menu.priority
    }
  };

  route.meta.parent = parent;

  return route;
}

export default {
  namespaced: true,
  state: {
    current: {
      navbar: undefined,
      sidebar: undefined,
      catalog: undefined,
      menu: undefined
    },
    total: 0,
    data: [],
    rootId: undefined,
    loading: true
  },
  mutations: {
    SET_MENU(state, data) {
      state.data = data;
      state.total = data.length;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_APP_CURRENT_MENU(state, params) {
      state.current = params;
    },
    SET_ROOT_MENU(state, id) {
      state.rootId = id;
    }
  },
  actions: {
    async getMenu({ commit, rootState }) {
      commit("SET_LOADING", true);
      let api;
      if (rootState.user.name) {
        api = new menuApi({ token: rootState.user.authenticate.token });
      } else {
        api = new menuApi();
      }
      const res = await api.getMenu();
      const root = res.data.find(x => x.type === 999);
      commit("SET_ROOT_MENU", root.id);

      const rootMenu = res.data
        .filter(x => x.parent && x.parent.name_en === "root")
        .map(menu => {
          const navbar = _convertMenu(menu);
          const sidebars = res.data
            .filter(x => x.parent && x.parent.id === navbar.meta.id)
            .map(x => {
              const sidebar = { ..._convertMenu(x, navbar), children: [] };
              if (x.child && x.child.length > 0) {
                const catalogs = res.data
                  .filter(x => x.parent && x.parent.id === sidebar.meta.id)
                  .map(j => ({ ..._convertMenu(j, sidebar), children: [] }));
                sidebar.children = catalogs;
              }

              return sidebar;
            });
          navbar.children = sidebars || [];
          return navbar;
        });

      await commit("SET_MENU", [...rootMenu, ...asyncRoutes]);
      commit("SET_LOADING", false);
    },
    async createMenu({ rootState }, params) {
      const api = new menuApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.createMenu(params);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async updateMenu({ rootState }, { id, ...params }) {
      const api = new menuApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.updateMenu(id, params);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteMenu({ rootState }, id) {
      const api = new menuApi({ token: rootState.user.authenticate.token });
      try {
        const res = await api.deleteMenu(id);
        return res.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
};
