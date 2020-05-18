import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import About from "../views/About";
import Events from "../views/Events";
import HealthEducation from "../views/HealthEducation";
import Member from "../views/Member";
import News from "../views/News";
import Search from "../views/Search";
import WebsitesLink from "../views/WebsitesLink";
import Admin from "../views/Admin";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      store.commit("checkoutNormalViewPage");
      next();
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "member",
        name: "AdminMember",
        component() {
          return import("../views/Admin/Member");
        }
      },
      {
        path: "內容管理",
        name: "AdminContent",
        component() {
          return import("../views/Admin/Content");
        },
        children: [
          {
            path: "首頁廣告-重要通知",
            name: "AdminContentAdvertisingAndNotice",
            component() {
              return import("../views/Admin/Content/AdvertisingAndNotice");
            }
          },
          {
            path: "關於學會內容",
            name: "AdminContentAbout",
            component() {
              return import("../views/Admin/Content/About");
            },
            children: [
              {
                path: "章程法令規章",
                name: "AdminContentAboutBylawsRegulations",
                component() {
                  return import("../views/Admin/Content/About/BylawsRegulations");
                }
              },
              {
                path: "組織名單",
                name: "AdminContentAboutOrganizationList",
                component() {
                  return import("../views/Admin/Content/About/OrganizationList");
                }
              },
              {
                path: "會議記錄",
                name: "AdminContentAboutMeetingRecord",
                component() {
                  return import("../views/Admin/Content/About/MeetingRecord");
                }
              },
              {
                path: "秘書處公告",
                name: "AdminContentAboutSecretariat",
                component() {
                  return import("../views/Admin/Content/About/Secretariat");
                }
              },
              {
                path: "活動通知",
                name: "AdminContentAboutEvents",
                component() {
                  return import("../views/Admin/Content/About/Events");
                }
              },
              {
                path: "醫學新知",
                name: "AdminContentAboutMedicine",
                component() {
                  return import("../views/Admin/Content/About/Medicine");
                }
              }
            ],
            redirect: { name: "AdminContentAboutBylawsRegulations" }
          },
          {
            path: "資料查詢內容",
            name: "AdminContentSearch",
            component() {
              return import("../views/Admin/Content/Search");
            },
            children: [
              {
                path: "手術準則",
                name: "AdminContentSearchGuidelines",
                component() {
                  return import("../views/Admin/Content/Search/Guidelines");
                }
              },
              {
                path: "參考標準",
                name: "AdminContentSearchReportingStandards",
                component() {
                  return import("../views/Admin/Content/Search/ReportingStandards");
                }
              },
              {
                path: "影片紀錄",
                name: "AdminContentSearchRecord",
                component() {
                  return import("../views/Admin/Content/Search/Record");
                }
              },
              {
                path: "訓練醫院",
                name: "AdminContentSearchTrainingHospital",
                component() {
                  return import("../views/Admin/Content/Search/TrainingHospital");
                }
              },
              {
                path: "衛服部",
                name: "AdminContentSearchLink",
                component() {
                  return import("../views/Admin/Content/Search/Link");
                }
              },
              {
                path: "學術教育資源",
                name: "AdminContentSearchDownload",
                component() {
                  return import("../views/Admin/Content/Search/Download");
                }
              }
            ],
            redirect: { name: "AdminContentSearchGuidelines" }
          },
          {
            path: "下載資料內容",
            name: "AdminContentDownload",
            component() {
              return import("../views/Admin/Content/Download");
            }
          },
          {
            path: "衛教專區內容",
            name: "AdminContentHealthEducation",
            component() {
              return import("../views/Admin/Content/HealthEducation");
            }
          },
          {
            path: "合作學會-贊助廠商",
            name: "AdminContentCooperativeSocietyAndSponsor",
            component() {
              return import("../views/Admin/Content/CooperativeSocietyAndSponsor");
            }
          }
        ],
        redirect: { name: "AdminContentAdvertisingAndNotice" }
      },
      {
        path: "events",
        name: "AdminEvents",
        component() {
          return import("../views/Admin/Events");
        }
      },
      {
        path: "annual-meeting",
        name: "AdminAnnualMeeting",
        component() {
          return import("../views/Admin/AnnualMeeting");
        }
      },
      {
        path: "moodle",
        name: "AdminMoodle",
        component() {
          return import("../views/Admin/Moodle");
        }
      }
    ],
    beforeEnter(to, from, next) {
      store.commit("checkoutAdminViewPage");
      next();
    },
    redirect: { name: "AdminMember" }
  },
  {
    path: "/學會資訊",
    name: "About",
    component: About,
    children: [
      {
        path: "聯絡資訊",
        name: "AboutContactInfo",
        component() {
          return import("../views/About/ContactInfo");
        }
      },
      {
        path: "帳號資訊",
        name: "AboutAccountInformation",
        component() {
          return import("../views/About/AccountInformation");
        }
      },
      {
        path: "學會簡介",
        name: "AboutSocietyIntroduction",
        component() {
          return import("../views/About/SocietyIntroduction");
        }
      },
      {
        path: "主要任務",
        name: "AboutMission",
        component() {
          return import("../views/About/Mission");
        }
      },
      {
        path: "章程法令規章",
        name: "AboutBylawsRegulations",
        children: [
          {
            path: "學會章程",
            name: "AboutBylawsRegulationsSocietyCharter",
            component() {
              return import("../views/About/BylawsRegulations/SocietyCharter");
            }
          },
          {
            path: "規章",
            name: "AboutBylawsRegulationsRegulations",
            component() {
              return import("../views/About/BylawsRegulations/Regulations");
            }
          },
          {
            path: "法令",
            name: "AboutBylawsRegulationsDecree",
            component() {
              return import("../views/About/BylawsRegulations/Decree");
            }
          }
        ],
        component() {
          return import("../views/About/BylawsRegulations");
        },
        redirect: { name: "AboutBylawsRegulationsSocietyCharter" }
      },
      {
        path: "組織名單",
        name: "AboutOrganizationList",
        component() {
          return import("../views/About/OrganizationList");
        }
      },
      {
        path: "會議紀錄",
        name: "AboutMeetingRecord",
        component() {
          return import("../views/About/MeetingRecord");
        }
      }
    ],
    redirect: { name: "AboutContactInfo" }
  },
  {
    path: "/學會公告",
    name: "News",
    component: News,
    children: [
      {
        path: "秘書處公告",
        name: "NewsSecretariat",
        component() {
          return import("../views/News/Secretariat");
        }
      },
      {
        path: "活動通知",
        name: "NewsEvents",
        component() {
          return import("../views/News/Events");
        }
      },
      {
        path: "醫學新知",
        name: "NewsMedicine",
        component() {
          return import("../views/News/Medicine");
        }
      }
    ],
    redirect: { name: "NewsSecretariat" }
  },
  {
    path: "/會議課程資訊",
    name: "Events",
    component: Events,
    children: [
      {
        path: "申請會議課程活動",
        name: "EventsApplication",
        component() {
          return import("../views/Events/Application.vue");
        }
      },
      {
        path: "今日會議課程活動",
        name: "EventsToday",
        component() {
          return import("../views/Events/Today.vue");
        }
      },
      {
        path: "近期會議活動課程",
        name: "EventsRecent",
        component() {
          return import("../views/Events/Recent.vue");
        }
      },
      {
        path: "會議課程活動介紹",
        name: "EventsIntroduction",
        component() {
          return import("../views/Events/Introduction.vue");
        }
      }
    ],
    redirect: { name: "EventsApplication" }
  },
  {
    path: "/資料查詢",
    name: "Search",
    component: Search,
    children: [
      {
        path: "手術準則與參考標準",
        name: "SearchGuidelines",
        component() {
          return import("../views/Search/Guidelines.vue");
        }
      },
      {
        path: "影片紀錄",
        name: "SearchRecord",
        component() {
          return import("../views/Search/Record.vue");
        }
      },
      {
        path: "訓練醫院",
        name: "SearchTrainingHospital",
        component() {
          return import("../views/Search/TrainingHospital.vue");
        }
      },
      {
        path: "衛服部連結",
        name: "SearchLink",
        component() {
          return import("../views/Search/Link.vue");
        }
      },
      {
        path: "資料下載",
        name: "SearchDownload",
        component() {
          return import("../views/Search/Download.vue");
        }
      },
      {
        path: "學術教育資源",
        name: "SearchEducationalResources",
        component() {
          return import("../views/Search/EducationalResources.vue");
        }
      }
    ],
    redirect: { name: "SearchGuidelines" }
  },
  {
    path: "/會員專區",
    name: "Member",
    component: Member,
    children: [
      {
        path: "會員入會",
        name: "MemberSignUp",
        component() {
          return import("../views/Member/SignUp.vue");
        }
      },
      {
        path: "會員登入",
        name: "MemberSignIn",
        component() {
          return import("../views/Member/SignIn.vue");
        }
      },
      {
        path: "會員中心",
        name: "MemberCenter",
        component() {
          return import("../views/Member/Center.vue");
        }
      },
      {
        path: "資料搜尋",
        name: "MemberSearch",
        component() {
          return import("../views/Member/Search.vue");
        }
      },
      {
        path: "會員積分",
        name: "MemberIntegral",
        component() {
          return import("../views/Member/Integral.vue");
        }
      }
    ],
    redirect: { name: "MemberSignIn" }
  },
  {
    path: "/衛教專區",
    name: "HealthEducation",
    component: HealthEducation,
    children: [
      {
        path: "尋找醫師",
        name: "HealthEducationSearchDoctor",
        component() {
          return import("../views/HealthEducation/SearchDoctor.vue");
        }
      },
      {
        path: "血管手術資訊",
        name: "HealthEducationSurgeryInformation",
        component() {
          return import("../views/HealthEducation/SurgeryInformation.vue");
        }
      }
    ],
    redirect: { name: "HealthEducationSearchDoctor" }
  },
  {
    path: "/相關網站",
    name: "WebsitesLink",
    component: WebsitesLink,
    children: [
      {
        path: "合作學會機關",
        name: "WebsitesLinkCooperativeInstitute",
        component() {
          return import("../views/WebsitesLink/CooperativeInstitute.vue");
        }
      },
      {
        path: "贊助廠商",
        name: "WebsitesLinkSponsor",
        component() {
          return import("../views/WebsitesLink/Sponsor.vue");
        }
      }
    ],
    redirect: { name: "WebsitesLinkCooperativeInstitute" }
  },
  {
    path: "/*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
