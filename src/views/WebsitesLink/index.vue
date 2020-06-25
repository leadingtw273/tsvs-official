<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "WebsitesLink",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "相關網站",
        menuList: [
          { text: "合作學會機關", link: { name: "WebsitesLinkCooperativeInstitute" } },
          { text: "醫藥設備廠商", link: { name: "WebsitesLinkSponsor" } }
        ]
      }
    };
  }
};
</script>

<style></style>
