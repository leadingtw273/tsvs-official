export default [
  {
    path: "/相關網站",
    name: "WebsitesLink",
    component() {
      return import("@/views/WebsitesLink");
    },
    children: [
      {
        path: "合作學會機關",
        name: "WebsitesLinkCooperativeInstitute",
        component() {
          return import("@/views/WebsitesLink/CooperativeInstitute.vue");
        }
      },
      {
        path: "醫藥設備廠商",
        name: "WebsitesLinkSponsor",
        component() {
          return import("@/views/WebsitesLink/Sponsor.vue");
        }
      }
    ],
    redirect: { name: "WebsitesLinkCooperativeInstitute" }
  }
];
