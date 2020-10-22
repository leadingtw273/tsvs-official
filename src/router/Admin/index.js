import store from "@/store";

export default [
  {
    path: "/admin/common",
    name: "AdminCommonSetting",
    component: () => import("@/layout/container"),
    beforeEnter(to, from, next) {
      store.commit("checkoutAdminViewPage");
      next();
    },
    meta: {
      admin: true,
      displayType: "component",
      requiresAuth: true,
      text: {
        zh: "一般設定"
      }
    },
    redirect: { name: "AdminBackgroundImage" },
    children: [
      {
        path: "background",
        name: "AdminBackgroundImage",
        component: () => import("@/views/Admin/CommonSetting/BackgroundImage"),
        meta: {
          displayType: "component",
          requiresAuth: true,
          text: {
            zh: "背景設定"
          }
        }
      }
    ]
  },
  {
    path: "/admin/member",
    name: "AdminMember",
    component: () => import("@/layout/container"),
    beforeEnter(to, from, next) {
      store.commit("checkoutAdminViewPage");
      next();
    },
    meta: {
      admin: true,
      displayType: "component",
      requiresAuth: true,
      text: {
        zh: "會員管理"
      }
    },
    redirect: { name: "AdminMemberList" },
    children: [
      {
        path: "list",
        name: "AdminMemberList",
        component: () => import("@/views/Admin/Member/MemberList"),
        meta: {
          displayType: "component",
          requiresAuth: true,
          text: {
            zh: "會員清單"
          }
        }
      },
      {
        path: "apply",
        name: "AdminMemberApply",
        component: () => import("@/views/Admin/Member/MemberApply"),
        meta: {
          displayType: "component",
          requiresAuth: true,
          text: {
            zh: "待審核會員"
          }
        }
      },
      {
        path: "QuantityApply",
        name: "AdminMemberQuantityApply",
        component: () => import("@/views/Admin/Member/QuantityApply"),
        meta: {
          displayType: "component",
          requiresAuth: true,
          text: {
            zh: "會員分數"
          }
        }
      }
    ]
  },
  {
    path: "/admin/content",
    component: () => import("@/layout/container"),
    beforeEnter(to, from, next) {
      store.commit("checkoutAdminViewPage");
      next();
    },
    meta: {
      admin: true,
      displayType: "component",
      text: {
        zh: "內容管理"
      }
    },
    children: [
      {
        path: ":navbar?/:sidebar?/:catalog?",
        name: "AdminContent",
        component: () => import("@/layout/admin/container"),
        meta: {
          displayType: "component",
          requiresAuth: true,
          text: {
            zh: "內容管理"
          }
        }
      }
    ]
  }
  // {
  //   path: "/admin",
  //   name: "Admin",
  //   component() {
  //     return import("@/layout/container");
  //   },
  //   meta: {
  //     admin: true
  //   },
  //   children: [
  //     {
  //       path: "common",
  //       name: "AdminCommonSetting",
  //       component: () => import("@/views/Admin/CommonSetting"),
  //       children: [
  //         {
  //           path: "background",
  //           name: "AdminBackgroundImage",
  //           meta: {
  //             displayType: "menu",
  //             priority: 0,
  //             requiresAuth: true,
  //             text: {
  //               zh: "背景設定"
  //             },
  //             type: 0
  //           },
  //           component: () => import("@/views/Admin/CommonSetting/BackgroundImage")
  //         }
  //       ],
  //       redirect: { name: "AdminBackgroundImage" }
  //     },
  //     {
  //       path: "member",
  //       name: "AdminMember",
  //       component: () => import("@/views/Admin/Member"),
  //       children: [
  //         {
  //           path: "list",
  //           name: "AdminMemberList",
  //           component: () => import("@/views/Admin/Member/MemberList")
  //         },
  //         {
  //           path: "apply",
  //           name: "AdminMemberApply",
  //           component: () => import("@/views/Admin/Member/MemberApply")
  //         },
  //         {
  //           path: "QuantityApply",
  //           name: "AdminMemberQuantityApply",
  //           component: () => import("@/views/Admin/Member/QuantityApply")
  //         }
  //       ],
  //       redirect: { name: "AdminMemberList" }
  //     },
  //     {
  //       path: "content/:navbar?/:sidebar?/:catalog?",
  //       name: "AdminContent",
  //       component: () => import("@/layout/admin/container"),
  //       meta: {
  //         displayType: "menu",
  //         text: {
  //           zh: "內容管理"
  //         }
  //       }
  //     }
  //   ],
  //   beforeEnter(to, from, next) {
  //     store.commit("checkoutAdminViewPage");

  //     next();
  //   },
  //   redirect: { name: "AdminCommonSetting" }
  // }
];
