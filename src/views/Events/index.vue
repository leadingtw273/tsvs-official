<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "Events",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "會議課程資訊",
        menuList: [
          { text: "申請繼續教育積分", link: { name: "EventsApplication" } },
          { text: "申請進度查詢", link: { name: "EventsProgressQuery" } },
          { text: "今日活動內容", link: { name: "EventsToday" } },
          { text: "近期會議活動課程", link: { name: "EventsRecent" } },
          { text: "活動花絮", link: { name: "EventsIntroduction" } }
        ]
      }
    };
  }
};
</script>

<style></style>
