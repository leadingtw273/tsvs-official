<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="醫學新知-2018-6-24-內容">
        <div class="醫學新知-2018-6-24-內容__8947ef70c77a469186d430d94ceed76a">
          AAA病人接受EVAR出現Postimplantation syndrome對預後的影響
          <br />
          <br />檔案載點
          <br />
          <br />Prospective evaluation of postimplantation syndrome evolution on patient outcomes after endovascular
          aneurysm repair for abdominal aortic aneurysm <br />J Vasc Surg. 2016 May;63(5):1248-55 <br />門諾醫院
          黃振銘醫師整理
        </div>
      </div>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      <div class="醫學新知-2018-4-3-內容">
        <div class="醫學新知-2018-4-3-內容__e352205fd5a4426ab5bf73d40a158e0f">
          Hybrid Endovascular Approach for Aberrant Subclavian Arterial Aneurysm
          <br />
          <br />檔案載點
          <br />
          <br />A 10-year Experience Using a Hybrid Endovascular Approach to Treat Aberrant Subclavian Arterial
          Aneurysms[1] <br />Mathew Wooster et al., Ann Vasc Surg 2018; 46: 60–64 <br />花蓮慈濟 鄭伊佐醫師整理
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "../../components/TheTagGroup";
export default {
  name: "Medicine",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "2019/10/18", tag: "#2019/10/18" },
        { text: "2019/10/17", tag: "#2019/10/17" }
      ]
    };
  }
};
</script>

<style lang="scss">
.醫學新知-2018-6-24-內容 {
  &__8947ef70c77a469186d430d94ceed76a {
    font-size: 15px;
    color: #121a33;
  }
}
.醫學新知-2018-4-3-內容 {
  &__e352205fd5a4426ab5bf73d40a158e0f {
    font-size: 15px;
    color: #121a33;
  }
}
</style>
