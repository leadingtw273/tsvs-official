<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "Search",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "資料查詢",
        menuList: [
          { id: "0", text: "手術準則與參考標準" },
          { id: "1", text: "影片紀錄" },
          { id: "2", text: "訓練醫院" },
          { id: "3", text: "衛服部連結" },
          { id: "4", text: "資料下載" },
          { id: "5", text: "學術教育資源" }
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
              { id: "0", text: "手術準則" },
              { id: "1", text: "文獻報告參考" }
            ];
            break;
          case "1":
            this.config.contentList = [
              { id: "0", text: "2019/9/7-8" },
              { id: "1", text: "2019/7/5-6" }
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
