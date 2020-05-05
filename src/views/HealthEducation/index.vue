<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "HealthEducation",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "衛教專區",
        menuList: [
          { id: "0", text: "尋找醫師" },
          { id: "1", text: "血管手術資訊" }
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
