export default [
  {
    path: "/衛教專區",
    name: "HealthEducation",
    component() {
      return import("@/views/HealthEducation");
    },
    children: [
      {
        path: "尋找醫師",
        name: "HealthEducationSearchDoctor",
        component() {
          return import("@/views/HealthEducation/SearchDoctor.vue");
        }
      },
      {
        path: "血管手術介紹",
        name: "HealthEducationSurgeryInformation",
        component() {
          return import("@/views/HealthEducation/SurgeryInformation.vue");
        },
        children: [
          {
            path: ":id",
            name: "HealthEducationSurgeryInformationItem"
          }
        ]
      }
    ],
    redirect: { name: "HealthEducationSearchDoctor" }
  }
];
