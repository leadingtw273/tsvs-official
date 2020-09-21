import children from "./children";

export default [
  {
    path: "/學會公告",
    name: "News",
    component() {
      return import("@/views/News");
    },
    children,
    redirect: { name: "NewsSecretariat" }
  }
];
