import children from "./children";

export default [
  {
    path: "/學會資訊",
    name: "About",
    component() {
      return import("@/views/About");
    },
    children,
    redirect: { name: "AboutContactInfo" }
  }
];
