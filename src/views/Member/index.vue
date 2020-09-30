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
        menuList: []
      }
    };
  },
  methods: {
    getMenuList() {
      const stats = this.$store.getters["user/status"];
      switch (stats) {
        case "notSigned":
          return [
            { text: "會員入會", displayType: "page", pageName: "MemberSignUp" },
            { text: "會員登入", displayType: "page", pageName: "MemberSignIn" }
          ];
        case "success":
          return [
            { text: "個人資訊", displayType: "page", pageName: "MemberDetail" },
            { text: "申請自填積分", displayType: "page", pageName: "MemberApplyIntegral" },
            { text: "會議記錄", displayType: "page", pageName: "MemberMeetingRecord" },
            { text: "秘書處公告", displayType: "page", pageName: "MemberSecretariat" },
            { text: "影片紀錄", displayType: "page", pageName: "MemberSearchRecord" }
          ];
        default:
          return [
            { text: "會員入會", displayType: "page", pageName: "MemberSignUp" },
            { text: "會員登入", displayType: "page", pageName: "MemberSignIn" }
          ];
      }
    }
  },
  created() {
    this.config.menuList = this.getMenuList();
  }
};
</script>

<style></style>
