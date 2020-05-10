<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "News",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "學會公告",
        menuList: [
          { text: "秘書處公告", link: "/news/secretariat" },
          { text: "活動通知", link: "/news/events" },
          { text: "醫學新知", link: "/news/medicine" }
        ]
      }
    };
  }
};
</script>

<style></style>
