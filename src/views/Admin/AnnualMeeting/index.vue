<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "AnnualMeeting",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "年會頁面管理",
        menuList: [
          { text: "首頁圖上傳", displayType: "page", pageName: "AdminAnnualMeetingBackgroundImage" },
          { text: "議程", displayType: "page", pageName: "AdminAnnualMeetingAgenda" },
          { text: "人員", displayType: "page", pageName: "AdminAnnualMeetingMember" },
          { text: "投稿", displayType: "page", pageName: "AdminAnnualMeetingContribute" }
        ]
      }
    };
  }
};
</script>

<style></style>
