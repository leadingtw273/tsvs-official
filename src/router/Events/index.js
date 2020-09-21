import children from "./children";

export default [
  {
    path: "/會議課程資訊",
    name: "Events",
    component() {
      return import("@/views/Events");
    },
    children,
    redirect: { name: "EventsApplication" }
  }
];
