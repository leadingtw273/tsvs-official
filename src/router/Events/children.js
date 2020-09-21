export default [
  {
    path: "申請繼續教育積分",
    name: "EventsApplication",
    component() {
      return import("@/views/Events/Application.vue");
    }
  },
  {
    path: "申請進度查詢",
    name: "EventsProgressQuery",
    component() {
      return import("@/views/Events/ProgressQuery.vue");
    }
  },
  {
    path: "今日活動內容",
    name: "EventsToday",
    component() {
      return import("@/views/Events/Today.vue");
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
    path: "近期會議活動課程/:id",
    name: "EventsView",
    component() {
      return import("@/views/Events/EventItem.vue");
    }
  },
  {
    path: "活動花絮",
    name: "EventsIntroduction",
    component() {
      return import("@/views/Events/Introduction.vue");
    }
  }
];
