<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
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
          { text: "聯絡資訊", link: { name: "AboutContactInfo" } },
          { text: "帳號資訊", link: { name: "AboutAccountInformation" } },
          { text: "學會簡介", link: { name: "AboutSocietyIntroduction" } },
          { text: "主要任務", link: { name: "AboutMission" } },
          {
            text: "章程法令規章",
            link: { name: "AboutBylawsRegulations" },
            items: [
              { text: "學會章程", link: { name: "AboutBylawsRegulationsSocietyCharter" } },
              { text: "規章", link: { name: "AboutBylawsRegulationsRegulations" } },
              { text: "法令", link: { name: "AboutBylawsRegulationsDecree" } }
            ]
          },
          { text: "組織名單", link: { name: "AboutOrganizationList" } },
          { text: "會議記錄", link: { name: "AboutMeetingRecord" } }
        ]
      }
    };
  }
};
</script>

<style></style>
