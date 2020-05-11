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
    path: "/about",
    name: "About",
    component: About,
    children: [
      {
        path: "contact-info",
        component() {
          return import("../views/About/ContactInfo");
        }
      },
      {
        path: "account-information",
        component() {
          return import("../views/About/AccountInformation");
        }
      },
      {
        path: "society-introduction",
        component() {
          return import("../views/About/SocietyIntroduction");
        }
      },
      {
        path: "mission",
        component() {
          return import("../views/About/Mission");
        }
      },
      {
        path: "bylaws-regulations",
        children: [
          {
            path: "society-charter",
            component() {
              return import("../views/About/BylawsRegulations/SocietyCharter");
            }
          },
          {
            path: "regulations",
            component() {
              return import("../views/About/BylawsRegulations/Regulations");
            }
          },
          {
            path: "decree",
            component() {
              return import("../views/About/BylawsRegulations/Decree");
            }
          }
        ],
        component() {
          return import("../views/About/BylawsRegulations");
        },
        redirect: "bylaws-regulations/society-charter"
      },
      {
        path: "organization-list",
        component() {
          return import("../views/About/OrganizationList");
        }
      },
      {
        path: "meeting-record",
        component() {
          return import("../views/About/MeetingRecord");
        }
      }
    ],
    redirect: "about/contact-info"
  },
  {
    path: "/news",
    name: "News",
    component: News,
    children: [
      {
        path: "secretariat",
        component() {
          return import("../views/News/Secretariat");
        }
      },
      {
        path: "events",
        component() {
          return import("../views/News/Events");
        }
      },
      {
        path: "medicine",
        component() {
          return import("../views/News/Medicine");
        }
      }
    ],
    redirect: "news/secretariat"
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    children: [
      {
        path: "application",
        component() {
          return import("../views/Events/Application.vue");
        }
      },
      {
        path: "today",
        component() {
          return import("../views/Events/Today.vue");
        }
      },
      {
        path: "recent",
        component() {
          return import("../views/Events/Recent.vue");
        }
      },
      {
        path: "introduction",
        component() {
          return import("../views/Events/Introduction.vue");
        }
      }
    ],
    redirect: "events/application"
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    children: [
      {
        path: "guidelines",
        component() {
          return import("../views/Search/Guidelines.vue");
        }
      },
      {
        path: "record",
        component() {
          return import("../views/Search/Record.vue");
        }
      },
      {
        path: "training-hospital",
        component() {
          return import("../views/Search/TrainingHospital.vue");
        }
      },
      {
        path: "link",
        component() {
          return import("../views/Search/Link.vue");
        }
      },
      {
        path: "download",
        component() {
          return import("../views/Search/Download.vue");
        }
      },
      {
        path: "educational-resources",
        component() {
          return import("../views/Search/EducationalResources.vue");
        }
      }
    ],
    redirect: "search/guidelines"
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
    children: [
      {
        path: "sign-up",
        component() {
          return import("../views/Member/SignUp.vue");
        }
      },
      {
        path: "sign-in",
        component() {
          return import("../views/Member/SignIn.vue");
        }
      },
      {
        path: "center",
        component() {
          return import("../views/Member/Center.vue");
        }
      },
      {
        path: "search",
        component() {
          return import("../views/Member/Search.vue");
        }
      },
      {
        path: "integral",
        component() {
          return import("../views/Member/Integral.vue");
        }
      }
    ],
    redirect: "member/sign-up"
  },
  {
    path: "/health-education",
    name: "HealthEducation",
    component: HealthEducation,
    children: [
      {
        path: "search-doctor",
        component() {
          return import("../views/HealthEducation/SearchDoctor.vue");
        }
      },
      {
        path: "surgery-information",
        component() {
          return import("../views/HealthEducation/SurgeryInformation.vue");
        }
      }
    ],
    redirect: "health-education/search-doctor"
  },
  {
    path: "/websites-link",
    name: "WebsitesLink",
    component: WebsitesLink,
    children: [
      {
        path: "cooperative-institute",
        component() {
          return import("../views/WebsitesLink/CooperativeInstitute.vue");
        }
      },
      {
        path: "sponsor",
        component() {
          return import("../views/WebsitesLink/Sponsor.vue");
        }
      }
    ],
    redirect: "websites-link/cooperative-institute"
  },
  {
    path: "/*",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
