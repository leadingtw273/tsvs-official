<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheContentCard from "@/components/TheContentCard";

export default {
  name: "{{ pascalCase name }}",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "{{ pascalCase name }}",
        menuList: [{ text: "default", link: "" }]
      }
    };
  }
};
</script>

<style></style>
