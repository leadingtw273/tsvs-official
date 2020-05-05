<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
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
          { id: "0", text: "聯絡資訊" },
          { id: "1", text: "帳號資訊" },
          { id: "2", text: "學會簡介" },
          { id: "3", text: "主要任務" },
          {
            id: "4",
            text: "章程法令規章",
            items: [
              { id: "4-0", text: "學會章程" },
              { id: "4-1", text: "規章" },
              { id: "4-2", text: "法令" }
            ]
          },
          { id: "5", text: "組織名單" },
          { id: "6", text: "會議記錄" }
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
          case "4-1":
            this.config.contentList = [
              { id: "0", text: "教育積分認定辦法" },
              { id: "1", text: "專科醫師甄審辦法" },
              { id: "2", text: "專科醫師訓練內容" },
              { id: "3", text: "智慧深耕獎(IUA)甄選辦法" },
              { id: "4", text: "委員會組織簡則" }
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
