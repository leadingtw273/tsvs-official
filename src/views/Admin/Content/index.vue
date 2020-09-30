<template>
  <the-view-content-card v-bind="config"> </the-view-content-card>
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
            displayType: "page",
            pageName: "AdminAbout",
            items: [
              { text: "內容編輯", displayType: "page", pageName: "AdminEditorContent" },
              { text: "章程法令規章", displayType: "page", pageName: "AdminBylawsRegulations" },
              { text: "會議記錄", displayType: "page", pageName: "AdminMeetingRecord" }
            ]
          },
          {
            text: "學會公告",
            displayType: "page",
            pageName: "AdminNews"
          },
          {
            text: "活動管理",
            displayType: "page",
            pageName: "AdminEvents",
            items: [
              { text: "活動審核", displayType: "page", pageName: "AdminCourseApplicationEditor" },
              { text: "活動清單", displayType: "page", pageName: "AdminCourseList" }
            ]
          },
          {
            text: "資料查詢",
            displayType: "page",
            pageName: "AdminSearch",
            items: [
              { text: "內容編輯", displayType: "page", pageName: "AdminSearchContentEditor" },
              { text: "影片紀錄", displayType: "page", pageName: "AdminRecord" },
              { text: "資料下載", displayType: "page", pageName: "AdminDownload" }
            ]
          },
          {
            text: "衛教專區",
            displayType: "page",
            pageName: "AdminHealthEducation"
          },
          {
            text: "相關網站",
            displayType: "page",
            pageName: "AdminWebsitesLink"
          }
        ]
      }
    };
  }
};
</script>

<style></style>
