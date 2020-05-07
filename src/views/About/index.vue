<template>
  <the-content-card v-bind="config" :contentId.sync="contentId">
    <router-view></router-view>
  </the-content-card>
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
          { id: "0", text: "聯絡資訊", link: "/學會資訊/聯絡資訊" },
          { id: "1", text: "帳號資訊", link: "/學會資訊/帳號資訊" },
          { id: "2", text: "學會簡介", link: "/學會資訊/學會簡介" },
          { id: "3", text: "主要任務", link: "/學會資訊/主要任務" },
          {
            id: "4",
            text: "章程法令規章",
            link: "/學會資訊/章程法令規章",
            items: [
              { id: "4-0", text: "學會章程", link: "/學會資訊/章程法令規章/學會章程" },
              { id: "4-1", text: "規章", link: "/學會資訊/章程法令規章/規章" },
              { id: "4-2", text: "法令", link: "/學會資訊/章程法令規章/法令" }
            ]
          },
          { id: "5", text: "組織名單", link: "/學會資訊/組織名單" },
          { id: "6", text: "會議記錄", link: "/學會資訊/會議記錄" }
        ],
        contentList: []
      },
      contentId: "0"
    };
  }
};
</script>

<style></style>
