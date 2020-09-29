import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

import Admin from "./Admin";
import About from "./About";
import News from "./News";
import Events from "./Events";
import Search from "./Search";
import Member from "./Member";
import HealthEducation from "./HealthEducation";
import WebsitesLink from "./WebsitesLink";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  ...Admin,
  ...About,
  ...News,
  ...Events,
  ...Search,
  ...Member,
  ...HealthEducation,
  ...WebsitesLink,
  {
    path: "/*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
