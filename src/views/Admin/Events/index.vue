<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "Events",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "活動管理",
        menuList: [
          { text: "訊息登陸", link: "" },
          { text: "積分申請", link: "" },
          { text: "活動登陸", link: "" }
        ]
      }
    };
  }
};
</script>

<style></style>
