<template>
  <the-view-content-card v-bind="config">
    <member-table></member-table>
  </the-view-content-card>
</template>

<script>
import MemberTable from "./components/MemberTable";
import TheViewContentCard from "../../../components/TheViewContentCard";

export default {
  name: "Member",
  components: { TheViewContentCard, MemberTable },
  data() {
    return {
      config: {
        menuTitle: "會員管理"
      }
    };
  }
};
</script>

<style></style>
