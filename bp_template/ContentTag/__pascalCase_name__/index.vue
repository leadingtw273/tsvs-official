<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0"></div>
  </div>
</template>

<script>
import TheTagGroup from "../../../components/TheTagGroup";

export default {
  name: "{{ pascalCase name }}",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [{ text: "default", tag: "#default" }]
    };
  }
};
</script>

<style></style>
