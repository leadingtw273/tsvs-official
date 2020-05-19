<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">合作學會</div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">贊助廠商</div>
  </div>
</template>

<script>
import TheTagGroup from "../../../components/TheTagGroup";
export default {
  name: "CooperativeSocietyAndSponsor",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "合作學會", tag: "#合作學會" },
        { text: "贊助廠商", tag: "#贊助廠商" }
      ]
    };
  }
};
</script>

<style></style>
