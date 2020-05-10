<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "About",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "學會資訊",
        menuList: [
          { text: "聯絡資訊", link: "/about/contact-info" },
          { text: "帳號資訊", link: "/about/account-information" },
          { text: "學會簡介", link: "/about/society-introduction" },
          { text: "主要任務", link: "/about/mission" },
          {
            text: "章程法令規章",
            link: "/about/bylaws-regulations",
            items: [
              { text: "學會章程", link: "/about/bylaws-regulations/society-charter" },
              { text: "規章", link: "/about/bylaws-regulations/regulations" },
              { text: "法令", link: "/about/bylaws-regulations/decree" }
            ]
          },
          { text: "組織名單", link: "/about/organization-list" },
          { text: "會議記錄", link: "/about/meeting-record" }
        ]
      }
    };
  }
};
</script>

<style></style>
