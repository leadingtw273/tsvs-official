import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TheContentCard from "../components/TheContentCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/:content",
    name: "ContentCard",
    component: TheContentCard,
    props: route => ({ title: route.params.content }),
    beforeEnter: (to, from, next) => {
      next();
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
