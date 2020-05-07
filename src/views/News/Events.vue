<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="活動通知-2019-10-18-01-內容">
        <div class="活動通知-2019-10-18-01-內容__4875e9cd258248a0bdfc37e741cb2e41">
          TSVS課程 2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop
          <br />
          <br />2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop
        </div>
        <v-img class="mt-10" src="../../assets/image/花蓮慈濟 Aorta.png" width="300px"></v-img>
      </div>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      <div class="活動通知-2019-10-18-02-內容">
        <div class="活動通知-2019-10-18-02-內容__6db1df4ea69a44f289416448f1fcfef3">
          TSVS活動 11/9(六)下午3點_北區困難病例討論會@維多麗雅酒店3F, 歡迎報名參加
          <br />
          <br />報名連結：https://forms.gle/fNwyAp4Zpfb7gc7R7
          <br />
          <br />主題：北區困難病例討論會
          <br />
          <br />時間：2019/11/9 (六) 15:00-21:00
          <br />
          <br />地點：維多麗亞酒店 3F天璽廳
          <br />
          <br />地址：台北市中山區敬業四路168號 (捷運文湖線: 劍南路站)
          <br />
          <br />議程將後續公告…
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "../../components/TheTagGroup";
export default {
  name: "Events",
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
.活動通知-2019-10-18-01-內容 {
  &__4875e9cd258248a0bdfc37e741cb2e41 {
    font-size: 15px;
    color: #121a33;
  }
}
.活動通知-2019-10-18-02-內容 {
  &__6db1df4ea69a44f289416448f1fcfef3 {
    font-size: 15px;
    color: #121a33;
  }
}
</style>
