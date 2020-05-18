<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "Member",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "會員管理",
        menuList: [{ text: "列表", link: "" }]
      }
    };
  }
};
</script>

<style></style>
