import children from "./children";

export default [
  {
    path: "/會員專區",
    name: "Member",
    component() {
      return import("@/views/Member");
    },
    children,
    redirect: { name: "MemberSignIn" }
  }
];
