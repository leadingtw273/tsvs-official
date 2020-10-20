export default [
  {
    path: "一般設定",
    name: "AdminCommonSetting",
    component() {
      return import("@/views/Admin/CommonSetting");
    },
    children: [
      {
        path: "背景圖片",
        name: "AdminBackgroundImage",
        component() {
          return import("@/views/Admin/CommonSetting/BackgroundImage");
        }
      }
    ],
    redirect: { name: "AdminBackgroundImage" }
  },
  {
    path: "member",
    name: "AdminMember",
    component() {
      return import("@/views/Admin/Member");
    },
    children: [
      {
        path: "list",
        name: "AdminMemberList",
        component() {
          return import("@/views/Admin/Member/MemberList");
        }
      },
      {
        path: "apply",
        name: "AdminMemberApply",
        component() {
          return import("@/views/Admin/Member/MemberApply");
        }
      },
      {
        path: "QuantityApply",
        name: "AdminMemberQuantityApply",
        component() {
          return import("@/views/Admin/Member/QuantityApply");
        }
      }
    ],
    redirect: { name: "AdminMemberList" }
  },
  {
    path: "content/:navbar?/:sidebar?/:catalog?",
    name: "AdminContent",
    component: () => import("@/layout/admin/container"),
    meta: {
      displayType: "menu",
      text: {
        zh: "內容管理"
      }
    }
  }
];
