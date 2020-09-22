<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "CommonSetting",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "一般設定",
        menuList: [{ text: "背景圖片設定", displayType: "page", pageName: "AdminBackgroundImage" }]
      }
    };
  }
};
</script>

<style></style>
