<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "HealthEducation",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "衛教專區",
        menuList: [
          { text: "尋找醫師", link: "/衛教專區/尋找醫師" },
          { text: "血管手術資訊", link: "/衛教專區/血管手術資訊" }
        ]
      }
    };
  }
};
</script>

<style></style>
