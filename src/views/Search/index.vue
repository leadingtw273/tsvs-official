<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "Search",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "資料查詢",
        menuList: [
          { text: "手術準則與參考標準", link: "/search/guidelines" },
          { text: "影片紀錄", link: "/search/record" },
          { text: "訓練醫院", link: "/search/training-hospital" },
          { text: "衛服部連結", link: "/search/link" },
          { text: "資料下載", link: "/search/download" },
          { text: "學術教育資源", link: "/search/educational-resources" }
        ]
      }
    };
  }
};
</script>

<style></style>
