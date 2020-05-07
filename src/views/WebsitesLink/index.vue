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
          { text: "合作學會機關", link: "/相關網站/合作學會機關" },
          { text: "贊助廠商", link: "/相關網站/贊助廠商" }
        ]
      }
    };
  }
};
</script>

<style></style>
