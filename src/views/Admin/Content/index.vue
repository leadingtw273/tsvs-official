<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "Content",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "內容管理",
        menuList: [
          { text: "首頁廣告/重要通知", link: { name: "AdminContentAdvertisingAndNotice" } },
          {
            text: "關於學會內容",
            link: { name: "AdminContentAbout" },
            items: [
              { text: "章程法令規章", link: { name: "AdminContentAboutBylawsRegulations" } },
              { text: "組織名單", link: { name: "AdminContentAboutOrganizationList" } },
              { text: "會議記錄", link: { name: "AdminContentAboutMeetingRecord" } },
              { text: "秘書處公告", link: { name: "AdminContentAboutSecretariat" } },
              { text: "活動通知", link: { name: "AdminContentAboutEvents" } },
              { text: "醫學新知", link: { name: "AdminContentAboutMedicine" } }
            ]
          },
          {
            text: "資料查詢內容",
            link: { name: "AdminContentSearch" },
            items: [
              { text: "手術準則", link: { name: "AdminContentSearchGuidelines" } },
              { text: "參考標準", link: { name: "AdminContentSearchReportingStandards" } },
              { text: "影片紀錄", link: { name: "AdminContentSearchRecord" } },
              { text: "訓練醫院", link: { name: "AdminContentSearchTrainingHospital" } },
              { text: "衛服部", link: { name: "AdminContentSearchLink" } },
              { text: "學術教育資源", link: { name: "AdminContentSearchEducationalResources" } }
            ]
          },
          { text: "下載資料內容", link: { name: "AdminContentDownload" } },
          { text: "衛教專區內容", link: { name: "AdminContentHealthEducation" } },
          { text: "合作學會/贊助廠商", link: { name: "AdminContentCooperativeSocietyAndSponsor" } }
        ]
      }
    };
  }
};
</script>

<style></style>
