<template>
  <the-content-card v-bind="config" :contentId.sync="contentId"></the-content-card>
</template>

<script>
import TheContentCard from "../../components/TheContentCard";

export default {
  name: "Member",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "會員專區",
        menuList: [
          { id: "0", text: "會員入會" },
          { id: "1", text: "會員登入" }
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
              { id: "0", text: "入會須知" },
              { id: "1", text: "會員入會" },
              { id: "2", text: "申請入會" }
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
