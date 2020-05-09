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
        path: "手術準則與參考標準",
        component() {
          return import("../views/Search/Guidelines.vue");
        }
      },
      {
        path: "影片紀錄",
        component() {
          return import("../views/Search/Record.vue");
        }
      },
      {
        path: "訓練醫院",
        component() {
          return import("../views/Search/TrainingHospital.vue");
        }
      },
      {
        path: "衛服部連結",
        component() {
          return import("../views/Search/Link.vue");
        }
      },
      {
        path: "資料下載",
        component() {
          return import("../views/Search/Download.vue");
        }
      },
      {
        path: "學術教育資源",
        component() {
          return import("../views/Search/EducationalResources.vue");
        }
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
        path: "會員入會",
        component() {
          return import("../views/Member/SignUp.vue");
        }
      },
      {
        path: "會員登入",
        component() {
          return import("../views/Member/SignIn.vue");
        }
      },
      {
        path: "會員中心",
        component() {
          return import("../views/Member/Center.vue");
        }
      },
      {
        path: "資料搜尋",
        component() {
          return import("../views/Member/Search.vue");
        }
      },
      {
        path: "會員積分",
        component() {
          return import("../views/Member/Integral.vue");
        }
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
        path: "尋找醫師",
        component() {
          return import("../views/HealthEducation/SearchDoctor.vue");
        }
      },
      {
        path: "血管手術資訊",
        component() {
          return import("../views/HealthEducation/SurgeryInformation.vue");
        }
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
        path: "合作學會機關",
        component() {
          return import("../views/WebsitesLink/CooperativeInstitute.vue");
        }
      },
      {
        path: "贊助廠商",
        component() {
          return import("../views/WebsitesLink/Sponsor.vue");
        }
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

router.beforeEach((to, from, next) => {
  if (to.path !== decodeURI(to.path) || to.hash !== decodeURI(to.hash)) {
    next({ path: decodeURI(to.path), hash: decodeURI(to.hash), replace: true });
  }
  next();
});

export default router;
