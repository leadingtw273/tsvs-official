import children from "./children";

export default [
  {
    path: "/資料查詢",
    name: "Search",
    component() {
      return import("@/views/Search");
    },
    children,
    redirect: { name: "SearchGuidelines" }
  }
];
