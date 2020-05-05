<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "Events",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "會議課程資訊",
        menuList: [
          { id: "0", text: "申請會議課程活動" },
          { id: "1", text: "今日會議課程活動" },
          { id: "2", text: "近期會議活動課程" },
          { id: "3", text: "會議課程活動介紹" }
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
          case "0":
            this.config.contentList = [
              { id: "0", text: "會議課程活動申請辦法" },
              { id: "1", text: "積分申請" }
            ];
            break;
          case "1":
            this.config.contentList = [
              { id: "0", text: "2019/10/18" },
              { id: "1", text: "2019/10/18" }
            ];
            break;
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
