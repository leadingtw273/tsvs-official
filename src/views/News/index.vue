<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "News",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "學會公告",
        menuList: [
          { id: "0", text: "秘書處公告" },
          { id: "1", text: "活動通知" },
          { id: "2", text: "醫學新知" }
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
              { id: "0", text: "2019/12/7" },
              { id: "1", text: "2019/9/2" },
              { id: "2", text: "2019/9/1" }
            ];
            break;
          case "1":
            this.config.contentList = [
              { id: "0", text: "2019/10/18" },
              { id: "1", text: "2019/10/18" }
            ];
            break;
          case "2":
            this.config.contentList = [
              { id: "0", text: "2018/6/24" },
              { id: "1", text: "2018/4/3" }
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
