<template>
  <the-view-content-card v-bind="config"> </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "About",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "學會資訊",
        menuList: [
          { text: "聯絡資訊", displayType: "page", pageName: "AboutContactInfo", fetchUrl: "" },
          { text: "帳號資訊", displayType: "page", pageName: "AboutAccountInformation", fetchUrl: "" },
          { text: "學會簡介", displayType: "page", pageName: "AboutSocietyIntroduction", fetchUrl: "" },
          { text: "主要任務", displayType: "page", pageName: "AboutMission", fetchUrl: "" },
          {
            text: "章程法令規章",
            pageName: "AboutBylawsRegulations",
            items: [
              {
                text: "學會章程",
                displayType: "page",
                pageName: "AboutBylawsRegulationsSocietyCharter",
                fetchUrl: ""
              },
              { text: "規章", displayType: "page", pageName: "AboutBylawsRegulationsRegulations", fetchUrl: "" },
              { text: "法令", displayType: "page", pageName: "AboutBylawsRegulationsDecree", fetchUrl: "" }
            ]
          },
          { text: "組織名單", displayType: "page", pageName: "AboutOrganizationList", fetchUrl: "" },
          { text: "會議記錄", displayType: "page", pageName: "AboutMeetingRecord", fetchUrl: "" }
        ]
      }
    };
  }
};
</script>

<style></style>
