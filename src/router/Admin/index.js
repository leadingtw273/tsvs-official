import store from "@/store";
import children from "./children";

export default [
  {
    path: "/admin",
    name: "Admin",
    component() {
      return import("@/views/Admin");
    },
    children,
    beforeEnter(to, from, next) {
      if (store.getters["user/role"] === 0 || store.getters["user/role"] === 1) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
    redirect: { name: "AdminCommonSetting" }
  }
];
