export default [
  {
    path: "聯絡資訊",
    name: "AboutContactInfo",
    component() {
      return import("@/views/About/ContactInfo");
    }
  },
  {
    path: "帳號資訊",
    name: "AboutAccountInformation",
    component() {
      return import("@/views/About/AccountInformation");
    }
  },
  {
    path: "學會簡介",
    name: "AboutSocietyIntroduction",
    component() {
      return import("@/views/About/SocietyIntroduction");
    }
  },
  {
    path: "主要任務",
    name: "AboutMission",
    component() {
      return import("@/views/About/Mission");
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
          return import("@/views/About/BylawsRegulations/SocietyCharter");
        }
      },
      {
        path: "規章",
        name: "AboutBylawsRegulationsRegulations",
        component() {
          return import("@/views/About/BylawsRegulations/Regulations");
        }
      },
      {
        path: "法令",
        name: "AboutBylawsRegulationsDecree",
        component() {
          return import("@/views/About/BylawsRegulations/Decree");
        }
      }
    ],
    component() {
      return import("@/views/About/BylawsRegulations");
    },
    redirect: { name: "AboutBylawsRegulationsSocietyCharter" }
  },
  {
    path: "組織名單",
    name: "AboutOrganizationList",
    component() {
      return import("@/views/About/OrganizationList");
    }
  },
  {
    path: "會議紀錄",
    name: "AboutMeetingRecord",
    component() {
      return import("@/views/About/MeetingRecord");
    }
  }
];
