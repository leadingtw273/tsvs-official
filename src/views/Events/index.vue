<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
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
          { text: "申請會議課程活動", link: "/會議課程資訊/申請會議課程活動" },
          { text: "今日會議課程活動", link: "/會議課程資訊/今日會議課程活動" },
          { text: "近期會議活動課程", link: "/會議課程資訊/近期會議活動課程" },
          { text: "會議課程活動介紹", link: "/會議課程資訊/會議課程活動介紹" }
        ]
      }
    };
  }
};
</script>

<style></style>
