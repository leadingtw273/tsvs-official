<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <span class="d-flex mb-6">2019年會 / 議程 (需登入即可觀看)</span>
      <v-sheet class="video-block" color="primary" width="100%" height="500px"></v-sheet>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      <span class="d-flex mb-6">2019夏季會 / 議程 (需登入即可觀看)</span>
      <v-sheet class="video-block" color="primary" width="100%" height="500px"></v-sheet>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "@/components/TheTagGroup";
export default {
  name: "Record",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "2019/9/7-8", tag: "#2019/9/7-8" },
        { text: "2019/7/5-6", tag: "#2019/7/5-6" }
      ]
    };
  }
};
</script>

<style lang="scss">
.video-block {
  max-width: 900px;
  max-height: 500px;
}
</style>
