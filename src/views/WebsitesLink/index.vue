<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "WebsitesLink",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "相關網站",
        menuList: [
          { text: "合作學會機關", displayType: "page", pageName: "WebsitesLinkCooperativeInstitute" },
          { text: "醫藥設備廠商", displayType: "page", pageName: "WebsitesLinkSponsor" }
        ]
      }
    };
  }
};
</script>

<style></style>
