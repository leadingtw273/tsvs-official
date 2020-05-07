import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About";
import Events from "../views/Events";
import HealthEducation from "../views/HealthEducation";
import Member from "../views/Member";
import News from "../views/News";
import Search from "../views/Search";
import WebsitesLink from "../views/WebsitesLink";

Vue.use(VueRouter);

// function getSideBarMenu(name) {
//   switch (name) {
//     case "學會資訊":
//       return [
//         { id: "0", text: "聯絡資訊" },
//         { id: "1", text: "帳號資訊" },
//         { id: "2", text: "學會簡介" },
//         { id: "3", text: "主要任務" },
//         {
//           id: "4",
//           text: "章程法令規章",
//           items: [
//             { id: "0", text: "學會章程" },
//             { id: "1", text: "規章" },
//             { id: "2", text: "法令" }
//           ]
//         },
//         { id: "5", text: "組織名單" },
//         { id: "6", text: "會議記錄" }
//       ];
//     case "學會公告":
//       return [
//         {
//           id: "0",
//           text: "秘書處公告",
//         },
//         { id: "1", text: "活動通知" },
//         { id: "2", text: "醫學新知" }
//       ];
//     case "會議課程資訊":
//       return [
//         { id: "0", text: "申請會議課程活動" },
//         { id: "1", text: "今日會議課程活動" },
//         { id: "2", text: "近期會議活動課程" },
//         { id: "3", text: "會議課程活動介紹" }
//       ];
//     case "資料查詢":
//       return [
//         { id: "0", text: "手術準則與參考標準" },
//         { id: "1", text: "影片紀錄" },
//         { id: "2", text: "訓練醫院" },
//         { id: "3", text: "衛服部連結" },
//         { id: "4", text: "資料下載" },
//         { id: "5", text: "學術教育資源" }
//       ];
//     case "會員專區":
//       return [
//         { id: "0", text: "會員入會" },
//         { id: "1", text: "會員登入" }
//       ];
//     case "衛教專區":
//       return [
//         { id: "0", text: "尋找醫師" },
//         { id: "1", text: "血管手術資訊" }
//       ];
//     case "相關網站":
//       return [
//         { id: "0", text: "合作學會機關" },
//         { id: "1", text: "贊助廠商" }
//       ];
//     default:
//       throw new Error("cant find menu List");
//   }
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/學會資訊",
    name: "About",
    component: About,
    children: [
      {
        path: "聯絡資訊",
        component() {
          return import("../views/About/ContactInfo");
        }
      },
      {
        path: "帳號資訊",
        component() {
          return import("../views/About/AccountInformation");
        }
      },
      {
        path: "學會簡介",
        component() {
          return import("../views/About/SocietyIntroduction");
        }
      },
      {
        path: "主要任務",
        component() {
          return import("../views/About/Mission");
        }
      },
      {
        path: "章程法令規章",
        children: [
          {
            path: "學會章程",
            component() {
              return import("../views/About/BylawsRegulations/SocietyCharter");
            }
          },
          {
            path: "規章",
            component() {
              return import("../views/About/BylawsRegulations/Regulations");
            }
          },
          {
            path: "法令",
            component() {
              return import("../views/About/BylawsRegulations/Decree");
            }
          }
        ],
        component() {
          return import("../views/About/BylawsRegulations");
        },
        redirect: "章程法令規章/學會章程"
      },
      {
        path: "組織名單",
        component() {
          return import("../views/About/OrganizationList");
        }
      },
      {
        path: "會議記錄",
        component() {
          return import("../views/About/MeetingRecord");
        }
      }
    ],
    redirect: "學會資訊/聯絡資訊"
  },
  {
    path: "/學會公告",
    name: "News",
    component: News,
    children: [
      {
        path: "秘書處公告",
        component() {
          return import("../views/News/Secretariat");
        }
      },
      {
        path: "活動通知",
        component() {
          return import("../views/News/Events");
        }
      },
      {
        path: "醫學新知",
        component() {
          return import("../views/News/Medicine");
        }
      }
    ],
    redirect: "學會公告/秘書處公告"
  },
  {
    path: "/會議課程資訊",
    name: "Events",
    component: Events,
    children: [
      {
        path: "申請會議課程活動",
        component() {
          return import("../views/Events/Application.vue");
        }
      },
      {
        path: "今日會議課程活動",
        component() {
          return import("../views/Events/Today.vue");
        }
      },
      {
        path: "近期會議活動課程",
        component() {
          return import("../views/Events/Recent.vue");
        }
      },
      {
        path: "會議課程活動介紹",
        component() {
          return import("../views/Events/Introduction.vue");
        }
      }
    ],
    redirect: "會議課程資訊/申請會議課程活動"
  },
  {
    path: "/資料查詢",
    name: "Search",
    component: Search,
    children: [
      {
        path: "手術準則與參考標準"
      },
      {
        path: "影片紀錄"
      },
      {
        path: "訓練醫院"
      },
      {
        path: "衛服部連結"
      },
      {
        path: "資料下載"
      },
      {
        path: "學術教育資源"
      }
    ],
    redirect: "資料查詢/手術準則與參考標準"
  },
  {
    path: "/會員專區",
    name: "Member",
    component: Member,
    children: [
      {
        path: "會員入會"
      },
      {
        path: "會員登入"
      }
    ],
    redirect: "會員專區/會員入會"
  },
  {
    path: "/衛教專區",
    name: "HealthEducation",
    component: HealthEducation,
    children: [
      {
        path: "尋找醫師"
      },
      {
        path: "血管手術資訊"
      }
    ],
    redirect: "衛教專區/尋找醫師"
  },
  {
    path: "/相關網站",
    name: "WebsitesLink",
    component: WebsitesLink,
    children: [
      {
        path: "合作學會機關"
      },
      {
        path: "贊助廠商"
      }
    ],
    redirect: "相關網站/合作學會機關"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
