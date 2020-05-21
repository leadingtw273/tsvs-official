<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <carousels-advertising></carousels-advertising>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">N/A</div>
  </div>
</template>

<script>
import CarouselsAdvertising from "../../../components/Table/Content/CarouselsAdvertising";
import TheTagGroup from "../../../components/TheTagGroup";
export default {
  name: "AdvertisingAndNotice",
  components: { TheTagGroup, CarouselsAdvertising },
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
