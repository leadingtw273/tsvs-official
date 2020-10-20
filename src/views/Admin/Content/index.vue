<template>
  <the-view-content-card v-if="status" v-bind="config"> </the-view-content-card>
</template>

<script>
import { mapState } from "vuex";
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Content",
  components: { TheViewContentCard },
  data() {
    return {
      status: false,
      config: {
        menuTitle: "內容管理",
        menuList: []
      }
    };
  },
  created() {
    this.config.menuList = this.menu;
    this.status = true;
  },
  computed: {
    ...mapState({
      menu: state => state.menu.data
    })
  }
};
</script>

<style></style>
