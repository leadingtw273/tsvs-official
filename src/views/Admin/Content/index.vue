<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Content",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "內容管理",
        menuList: [
          {
            text: "學會資訊",
            link: { name: "AdminAbout" },
            items: [
              { text: "內容編輯", link: { name: "AdminEditorContent" } },
              { text: "章程法令規章", link: { name: "AdminBylawsRegulations" } },
              { text: "會議記錄", link: { name: "AdminMeetingRecord" } }
            ]
          },
          {
            text: "學會公告",
            link: { name: "AdminNews" }
          },
          {
            text: "會議課程",
            link: { name: "AdminEvents" },
            items: [
              { text: "課程申請內容編輯", link: { name: "AdminCourseApplicationEditor" } },
              { text: "課程列表", link: { name: "AdminCourseList" } }
            ]
          },
          {
            text: "資料查詢",
            link: { name: "AdminSearch" },
            items: [
              { text: "內容編輯", link: { name: "AdminSearchContentEditor" } },
              { text: "影片紀錄", link: { name: "AdminRecord" } },
              { text: "資料下載", link: { name: "AdminDownload" } }
            ]
          },
          {
            text: "衛教專區",
            link: { name: "AdminHealthEducation" }
          },
          {
            text: "相關網站",
            link: { name: "AdminWebsitesLink" }
          }
        ]
      }
    };
  }
};
</script>

<style></style>
