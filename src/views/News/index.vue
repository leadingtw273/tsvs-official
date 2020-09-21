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
          { text: "秘書處公告", link: { name: "NewsSecretariat" } },
          { text: "活動通知", link: { name: "NewsEvents" } },
          { text: "醫學新知", link: { name: "NewsMedicine" } },
          { text: "申請公告活動資訊", link: { name: "NewsApplyEvent" } }
        ]
      }
    };
  }
};
</script>

<style></style>
