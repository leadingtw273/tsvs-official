<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Search",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "資料查詢",
        menuList: [
          { text: "手術準則", displayType: "page", pageName: "SearchSurgicalGuidelines" },
          { text: "參考標準", displayType: "page", pageName: "SearchGuidelines" },
          { text: "影片紀錄", displayType: "page", pageName: "SearchRecord" },
          { text: "訓練醫院", displayType: "page", pageName: "SearchTrainingHospital" },
          { text: "衛福部資訊", displayType: "page", pageName: "SearchLink" },
          { text: "資料下載", displayType: "page", pageName: "SearchDownload" },
          { text: "學術教育資源", displayType: "page", pageName: "SearchEducationalResources" }
        ]
      }
    };
  }
};
</script>

<style></style>
