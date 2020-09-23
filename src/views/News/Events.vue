<template>
  <div>
    <template v-if="viewItem == null">
      <the-view-item-list :itemList="dataList" @select="showContent"></the-view-item-list>
    </template>
    <template v-else>
      <div v-html="viewItem.content"></div>
    </template>
  </div>
</template>

<script>
import TheViewItemList from "@/components/TheViewItemList";
import dayjs from "dayjs";

export default {
  name: "Events",
  components: { TheViewItemList },
  data() {
    return {
      resourceList: [
        {
          id: "01",
          class: "活動通知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-18",
          content:
            '<div class="活動通知-2019-10-18-01-內容"><div class="活動通知-2019-10-18-01-內容__4875e9cd258248a0bdfc37e741cb2e41"> TSVS課程 2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop <br><br>2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop </div><div class="v-responsive v-image mt-10" style="width: 300px;"><div class="v-responsive__sizer" style="padding-bottom: 71.1752%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;http://127.0.0.1:8080/img/%E8%8A%B1%E8%93%AE%E6%85%88%E6%BF%9F%20Aorta.e5f33c21.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 451px;"></div></div></div>',
          isAdvertising: false,
          isLogin: false
        },
        {
          id: "02",
          class: "活動通知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-17",
          content:
            '<div class="活動通知-2019-10-18-02-內容"><div class="活動通知-2019-10-18-02-內容__6db1df4ea69a44f289416448f1fcfef3"> TSVS活動 11/9(六)下午3點_北區困難病例討論會@維多麗雅酒店3F, 歡迎報名參加 <br><br>報名連結：https://forms.gle/fNwyAp4Zpfb7gc7R7 <br><br>主題：北區困難病例討論會 <br><br>時間：2019/11/9 (六) 15:00-21:00 <br><br>地點：維多麗亞酒店 3F天璽廳 <br><br>地址：台北市中山區敬業四路168號 (捷運文湖線: 劍南路站) <br><br>議程將後續公告… </div></div>',
          isAdvertising: false,
          isLogin: false
        }
      ]
    };
  },
  computed: {
    dataList() {
      return this.resourceList
        .map(({ id, title, date }) => ({ id, title, date }))
        .sort(({ date: mainDate }, { date: subDate }) => {
          if (dayjs(mainDate).isBefore(dayjs(subDate))) return 1;
          if (dayjs(subDate).isBefore(dayjs(mainDate))) return -1;
          return 0;
        });
    },
    viewItem() {
      return this.resourceList.find(({ id }) => id === this.$route.params.id);
    }
  },
  methods: {
    showContent(targetId) {
      this.$router.push({ name: "NewsEventsItem", params: { id: targetId } });
    }
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
