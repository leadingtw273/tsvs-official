<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
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
          { id: "0", text: "合作學會機關" },
          { id: "1", text: "贊助廠商" }
        ],
        contentList: []
      },
      contentId: "0"
    };
  },
  watch: {
    contentId: {
      handler(val) {
        switch (val) {
          default:
            this.config.contentList = [];
        }
      },
      immediate: true
    }
  }
};
</script>

<style></style>
