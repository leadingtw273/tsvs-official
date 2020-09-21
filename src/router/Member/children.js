export default [
  {
    path: "會員入會",
    name: "MemberSignUp",
    component() {
      return import("@/views/Member/SignUp.vue");
    }
  },
  {
    path: "會員登入",
    name: "MemberSignIn",
    component() {
      return import("@/views/Member/SignIn.vue");
    }
  },
  {
    path: "會員中心",
    name: "MemberCenter",
    component() {
      return import("@/views/Member/Center.vue");
    }
  },
  {
    path: "資料搜尋",
    name: "MemberSearch",
    component() {
      return import("@/views/Member/Search.vue");
    }
  },
  {
    path: "會員積分",
    name: "MemberIntegral",
    component() {
      return import("@/views/Member/Integral.vue");
    }
  }
];
