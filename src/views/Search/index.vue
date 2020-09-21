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
          { text: "手術準則與參考標準", link: { name: "SearchGuidelines" } },
          { text: "影片紀錄", link: { name: "SearchRecord" } },
          { text: "訓練醫院", link: { name: "SearchTrainingHospital" } },
          { text: "衛福部資訊", link: { name: "SearchLink" } },
          { text: "資料下載", link: { name: "SearchDownload" } },
          { text: "學術教育資源", link: { name: "SearchEducationalResources" } }
        ]
      }
    };
  }
};
</script>

<style></style>
