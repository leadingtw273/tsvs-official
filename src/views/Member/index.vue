<template>
  <the-content-card v-bind="config">
    <router-view></router-view>
  </the-content-card>
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
          { text: "會員入會", link: "/會員專區/會員入會" },
          { text: "會員登入", link: "/會員專區/會員登入" },
          { text: "會員中心", link: "/會員專區/會員中心", show: false },
          { text: "資料搜尋", link: "/會員專區/資料搜尋", show: false },
          { text: "會員積分", link: "/會員專區/會員積分", show: false }
        ]
      }
    };
  }
};
</script>

<style></style>
