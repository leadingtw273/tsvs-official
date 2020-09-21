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
          { text: "首頁圖上傳", link: { name: "AdminAnnualMeetingBackgroundImage" } },
          { text: "議程", link: { name: "AdminAnnualMeetingAgenda" } },
          { text: "人員", link: { name: "AdminAnnualMeetingMember" } },
          { text: "投稿", link: { name: "AdminAnnualMeetingContribute" } }
        ]
      }
    };
  }
};
</script>

<style></style>
