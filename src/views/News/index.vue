<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "News",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "學會公告",
        menuList: [
          { text: "秘書處公告", displayType: "page", pageName: "NewsSecretariat" },
          { text: "活動通知", displayType: "page", pageName: "NewsEvents" },
          { text: "醫學新知", displayType: "page", pageName: "NewsMedicine" },
          { text: "申請公告活動資訊", displayType: "page", pageName: "NewsApplyEvent" }
        ]
      }
    };
  }
};
</script>

<style></style>
