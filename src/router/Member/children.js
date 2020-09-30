import store from "@/store";

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
    },
    beforeEnter: (to, from, next) => {
      if (store.getters["user/status"] === "success") {
        next({ name: "MemberDetail" });
      } else {
        next();
      }
    }
  },
  {
    path: "個人資訊",
    name: "MemberDetail",
    component() {
      return import("@/views/Member/Detail.vue");
    }
  },
  {
    path: "申請自填積分",
    name: "MemberApplyIntegral",
    component() {
      return import("@/views/Member/Integral.vue");
    }
  },
  {
    path: "會議記錄",
    name: "MemberMeetingRecord",
    redirect: { name: "AboutMeetingRecord" }
  },
  {
    path: "秘書處公告",
    name: "MemberSecretariat",
    redirect: { name: "NewsSecretariat" }
  },
  {
    path: "影片紀錄",
    name: "MemberSearchRecord",
    redirect: { name: "SearchRecord" }
  }
];
