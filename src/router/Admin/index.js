import store from "@/store";
import children from "./children";

export default [
  {
    path: "/admin",
    name: "Admin",
    component() {
      return import("@/layout/container");
    },
    meta: { admin: true },
    children,
    beforeEnter(to, from, next) {
      store.commit("checkoutAdminViewPage");

      next();
    },
    redirect: { name: "AdminCommonSetting" }
  }
];
