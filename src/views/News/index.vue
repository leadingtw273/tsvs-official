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
          { text: "秘書處公告", link: "/學會公告/秘書處公告" },
          { text: "活動通知", link: "/學會公告/活動通知" },
          { text: "醫學新知", link: "/學會公告/醫學新知" }
        ]
      }
    };
  }
};
</script>

<style></style>
