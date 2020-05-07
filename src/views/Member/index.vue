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
          { text: "會員登入", link: "/會員專區/會員登入" }
        ]
      }
    };
  }
};
</script>

<style></style>
