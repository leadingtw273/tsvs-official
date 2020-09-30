export default [
  {
    path: "申請繼續教育積分",
    name: "EventsApplication",
    component() {
      return import("@/views/Events/Application.vue");
    }
  },
  {
    path: "近期會議活動課程",
    name: "EventsRecent",
    component() {
      return import("@/views/Events/Recent.vue");
    }
  },
  {
    path: "活動花絮",
    name: "EventsIntroduction",
    component() {
      return import("@/views/Events/Introduction.vue");
    },
    children: [
      {
        path: ":id",
        name: "EventsIntroductionItem"
      }
    ]
  }
];
