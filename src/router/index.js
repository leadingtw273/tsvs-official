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
//           items: [
//             { id: "0", text: "學會章程" },
//             { id: "1", text: "規章" },
//             { id: "2", text: "法令" }
//           ]
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
    component: About
  },
  {
    path: "/學會公告",
    name: "News",
    component: News
  },
  {
    path: "/會議課程資訊",
    name: "Events",
    component: Events
  },
  {
    path: "/資料查詢",
    name: "Search",
    component: Search
  },
  {
    path: "/會員專區",
    name: "Member",
    component: Member
  },
  {
    path: "/衛教專區",
    name: "HealthEducation",
    component: HealthEducation
  },
  {
    path: "/相關網站",
    name: "WebsitesLink",
    component: WebsitesLink
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
