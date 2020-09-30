<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Member",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "會員專區",
        menuList: [
          { text: "會員入會", displayType: "page", pageName: "MemberSignUp" },
          { text: "會員登入", displayType: "page", pageName: "MemberSignIn" },
          { text: "忘記密碼", displayType: "page", pageName: "MemberCenter" },

          { text: "會員基本資料", displayType: "page", pageName: "MemberCenter" },
          { text: "變更密碼", displayType: "page", pageName: "MemberSearch" },
          { text: "會員積分", displayType: "page", pageName: "MemberIntegral" }
        ]
      }
    };
  }
};
</script>

<style></style>
