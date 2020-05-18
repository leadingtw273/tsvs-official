<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "AnnualMeeting",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "年會管理",
        menuList: [
          { text: "專區外觀", link: "" },
          { text: "年會資訊", link: "" },
          { text: "Program 管理", link: "" },
          { text: "議程管理", link: "" },
          { text: "講者/工作人員介紹", link: "" },
          { text: "投稿管理", link: "" },
          { text: "參展管理", link: "" }
        ]
      }
    };
  }
};
</script>

<style></style>
