import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

import Admin from "./Admin";
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      store.commit("checkoutNormalViewPage");
      next();
    }
  },
  ...Admin,
  {
    path: "/:navbar/:sidebar?/:catalog?",
    name: "Content",
    component: () => import("@/layout/container")
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/*",
    component: NotFound
  }
];
export const asyncRoutes = [...Admin];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
