<template>
  <the-view-content-card v-bind="config">
    <router-view></router-view>
  </the-view-content-card>
</template>

<script>
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "HealthEducation",
  components: { TheViewContentCard },
  data() {
    return {
      config: {
        menuTitle: "衛教專區",
        menuList: [
          { text: "尋找醫師", link: { name: "HealthEducationSearchDoctor" } },
          { text: "血管手術介紹", link: { name: "HealthEducationSurgeryInformation" } }
        ]
      }
    };
  }
};
</script>

<style></style>
