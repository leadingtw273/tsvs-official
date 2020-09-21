export default [
  {
    path: "秘書處公告",
    name: "NewsSecretariat",
    component() {
      return import("@/views/News/Secretariat");
    },
    children: [
      {
        path: ":id",
        name: "NewsSecretariatItem"
      }
    ]
  },
  {
    path: "活動通知",
    name: "NewsEvents",
    component() {
      return import("@/views/News/Events");
    },
    children: [
      {
        path: ":id",
        name: "NewsEventsItem"
      }
    ]
  },
  {
    path: "醫學新知",
    name: "NewsMedicine",
    component() {
      return import("@/views/News/Medicine");
    },
    children: [
      {
        path: ":id",
        name: "NewsMedicineItem"
      }
    ]
  },
  {
    path: "申請公告活動資訊",
    name: "NewsApplyEvent",
    component() {
      return import("@/views/News/ApplyEvent");
    }
  }
];
