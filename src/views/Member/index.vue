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
          { text: "會員入會", link: { name: "MemberSignUp" } },
          { text: "會員登入", link: { name: "MemberSignIn" } },
          { text: "會員中心", link: { name: "MemberCenter" }, show: false },
          { text: "資料搜尋", link: { name: "MemberSearch" }, show: false },
          { text: "會員積分", link: { name: "MemberIntegral" }, show: false }
        ]
      }
    };
  }
};
</script>

<style></style>
