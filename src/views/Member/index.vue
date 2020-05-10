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
          { text: "會員入會", link: "/member/sign-up" },
          { text: "會員登入", link: "/member/sign-in" },
          { text: "會員中心", link: "/member/center", show: false },
          { text: "資料搜尋", link: "/member/search", show: false },
          { text: "會員積分", link: "/member/integral", show: false }
        ]
      }
    };
  }
};
</script>

<style></style>
