export default [
  {
    path: "參考標準",
    name: "SearchGuidelines",
    component() {
      return import("@/views/Search/Guidelines.vue");
    },
    children: [
      {
        path: ":id",
        name: "SearchGuidelinesItem"
      }
    ]
  },
  {
    path: "手術準則",
    name: "SearchSurgicalGuidelines",
    component() {
      return import("@/views/Search/SurgicalGuidelines.vue");
    },
    children: [
      {
        path: ":id",
        name: "SearchSurgicalGuidelinesItem"
      }
    ]
  },
  {
    path: "影片紀錄",
    name: "SearchRecord",
    component() {
      return import("@/views/Search/Record.vue");
    },
    children: [
      {
        path: ":id",
        name: "SearchRecordItem"
      }
    ]
  },
  {
    path: "訓練醫院",
    name: "SearchTrainingHospital",
    component() {
      return import("@/views/Search/TrainingHospital.vue");
    }
  },
  {
    path: "衛福部資訊",
    name: "SearchLink",
    component() {
      return import("@/views/Search/Link.vue");
    }
  },
  {
    path: "資料下載",
    name: "SearchDownload",
    component() {
      return import("@/views/Search/Download.vue");
    },
    children: [
      {
        path: ":id",
        name: "SearchRecordItem"
      }
    ]
  },
  {
    path: "學術教育資源",
    name: "SearchEducationalResources",
    component() {
      return import("@/views/Search/EducationalResources.vue");
    }
  }
];
