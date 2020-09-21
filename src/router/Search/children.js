export default [
  {
    path: "手術準則與參考標準",
    name: "SearchGuidelines",
    component() {
      return import("@/views/Search/Guidelines.vue");
    }
  },
  {
    path: "影片紀錄",
    name: "SearchRecord",
    component() {
      return import("@/views/Search/Record.vue");
    }
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
    }
  },
  {
    path: "學術教育資源",
    name: "SearchEducationalResources",
    component() {
      return import("@/views/Search/EducationalResources.vue");
    }
  }
];
