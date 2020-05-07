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
          { text: "手術準則與參考標準", link: "/資料查詢/手術準則與參考標準" },
          { text: "影片紀錄", link: "/資料查詢/影片紀錄" },
          { text: "訓練醫院", link: "/資料查詢/訓練醫院" },
          { text: "衛服部連結", link: "/資料查詢/衛服部連結" },
          { text: "資料下載", link: "/資料查詢/資料下載" },
          { text: "學術教育資源", link: "/資料查詢/學術教育資源" }
        ]
      }
    };
  }
};
</script>

<style></style>
