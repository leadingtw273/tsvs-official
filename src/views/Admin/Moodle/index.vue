<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "Moodle",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "學習專區",
        menuList: [{ text: "聯絡資訊", link: "" }]
      }
    };
  }
};
</script>

<style></style>
