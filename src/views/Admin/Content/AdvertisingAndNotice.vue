<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">首頁廣告</div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">重要通知</div>
  </div>
</template>

<script>
import TheTagGroup from "../../../components/TheTagGroup";
export default {
  name: "AdvertisingAndNotice",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "首頁廣告", tag: "#首頁廣告" },
        { text: "重要通知", tag: "#重要通知" }
      ]
    };
  }
};
</script>

<style></style>
