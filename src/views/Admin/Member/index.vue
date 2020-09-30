<template>
  <the-view-content-card v-bind="config">
    <div>sdfsdfs</div>
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
        menuTitle: "會員管理",
        menuList: [
          { text: "會員列表", displayType: "page", pageName: "AdminMemberList" },
          { text: "會員審核", displayType: "page", pageName: "AdminMemberApply" },
          { text: "積分審核", displayType: "content", pageName: "AdminMemberQuantityApply" }
        ]
      }
    };
  }
};
</script>

<style></style>
