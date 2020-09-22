<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Events",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "會議課程資訊",
        menuList: [
          { text: "申請繼續教育積分", displayType: "page", pageName: "EventsApplication" },
          { text: "申請進度查詢", displayType: "page", pageName: "EventsProgressQuery" },
          { text: "今日活動內容", displayType: "page", pageName: "EventsToday" },
          { text: "近期會議活動課程", displayType: "page", pageName: "EventsRecent" },
          { text: "活動花絮", displayType: "page", pageName: "EventsIntroduction" }
        ]
      }
    };
  }
};
</script>

<style></style>
