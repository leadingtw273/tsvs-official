<template>
  <div class="px-12">
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
  name: "Secretariat",
  components: { TheViewItemList },
  data() {
    return {
      resourceList: [
        {
          id: "01",
          class: "秘書處公告",
          image: "",
          title: "第八屆理監事暨學會幹部名單",
          date: "2019-12-17",
          content:
            '<div class="秘書處公告-2019-12-7-內容"><div class="秘書處公告-2019-12-7-內容__cbcf27669f044543949e95337ed33020"> 第八屆理監事暨學會幹部名單 <div class="d-flex mt-6"><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>甘宗旦</td><td>理事長</td></tr><tr><td>李芳艷</td><td>副理事長</td></tr><tr><td>陳益祥</td><td>副理事長</td></tr><tr><td>吳毅暉</td><td>常務理事</td></tr><tr><td>魏崢</td><td>常務理事</td></tr><tr><td>柯博仁</td><td>常務理事</td></tr><tr><td>張睿智</td><td>常務理事</td></tr><tr><td>李國楨</td><td>理事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>林致源</td><td>理事</td></tr><tr><td>張兼華</td><td>理事</td></tr><tr><td>陳沂名</td><td>理事</td></tr><tr><td>陳映澄</td><td>理事</td></tr><tr><td>陳哲伸</td><td>理事</td></tr><tr><td>黃耀廣</td><td>理事</td></tr><tr><td>詹志洋</td><td>理事</td></tr><tr><td>劉國聖</td><td>理事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>蔡宜廷</td><td>理事</td></tr><tr><td>鄭伯智</td><td>理事</td></tr><tr><td>謝世榮</td><td>理事</td></tr><tr><td>顏旭霆</td><td>理事</td></tr><tr><td>李中毅</td><td>理事</td></tr><tr><td>張忠毅</td><td>常務監事</td></tr><tr><td>李秋陽</td><td>監事</td></tr><tr><td>林暉翰</td><td>監事</td></tr></tbody></table></div></div><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>許傳智</td><td>監事</td></tr><tr><td>陳柏霖</td><td>監事</td></tr><tr><td>蔡忠霖</td><td>監事</td></tr><tr><td>羅健洺</td><td>監事</td></tr><tr><td>許喬博</td><td>秘書長</td></tr><tr><td>劉國聖</td><td>副秘書長</td></tr><tr><td>黃建偉</td><td>副秘書長</td></tr><tr><td>曾政哲</td><td>財務長</td></tr></tbody></table></div></div></div></div></div>',
          isAdvertising: false,
          isLogin: true
        },
        {
          id: "02",
          class: "秘書處公告",
          image: "",
          title: "2019 血管外科專科醫師甄試 通過名單",
          date: "2019-09-02",
          content:
            '<div class="秘書處公告-2019-9-2-內容"><div class="秘書處公告-2019-9-2-內容__2d816ef2330144048cf6878c3d77e421"> 2019 血管外科專科醫師甄試 通過名單 <br><br>(依會員編號順序排列) <br><div class="d-flex mt-6"><div class="v-data-table transparent mr-6 v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table><tbody><tr><td>S00622</td><td>吳欣岱</td><td>屏東醫院</td></tr><tr><td>S00638</td><td>林俊閔</td><td>台北馬偕</td></tr><tr><td>S00642</td><td>張瑞宗</td><td>三軍總醫院</td></tr><tr><td>S00643</td><td>林敬惟</td><td>三軍總醫院</td></tr><tr><td>S00650</td><td>陳迪詠</td><td>成大醫院</td></tr><tr><td>S00654</td><td>陳泰位</td><td>台北榮總</td></tr><tr><td>S00660</td><td>陳嘉葦</td><td>台北榮總</td></tr><tr><td>S00665</td><td>陳宇恒</td><td>台北馬偕</td></tr><tr><td>S00669</td><td>黃俊銘</td><td>安南醫院</td></tr><tr><td>S00673</td><td>吳崇丞</td><td>林口長庚</td></tr><tr><td>S00677</td><td>蘇以理</td><td>林口長庚</td></tr><tr><td>S00686</td><td>孟繁傑</td><td>台北榮總</td></tr><tr><td>S00689</td><td>文豪</td><td>成大醫院</td></tr></tbody></table></div></div></div><br>◎會員編號自動由Ａ→Ｓ <br><br>◎請9/5(四)前劃撥繳交專科醫師考試證書費：3000元 / 郵局劃撥帳號: 19944001 台灣血管外科學會 / 劃撥單上請註明(姓名/專科證書費) <br><br>◎收據上傳：email收據圖檔至4tsvs@tsvs.org，方完成繳費程序 <br><br>◎專科醫師證書將於2019/9/7(六) 11:40 會員大會頒發 (因事無法出席, 請由專人代領) </div></div>',
          isAdvertising: false,
          isLogin: true
        },
        {
          id: "03",
          class: "秘書處公告",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-09-01",
          content:
            '<div class="秘書處公告-2019-9-1-內容"><div class="秘書處公告-2019-9-1-內容__7bf59c8eeef446f0a2d8ce2d5b664552"> 血管外科健保申報共識 <br><br>檔案載點 (需登入) </div></div>',
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
      this.$router.push({ name: "NewsSecretariatItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss">
.秘書處公告-2019-12-7-內容 {
  &__cbcf27669f044543949e95337ed33020 {
    font-size: 15px;
    color: #121a33;
  }
}
.秘書處公告-2019-9-2-內容 {
  &__2d816ef2330144048cf6878c3d77e421 {
    font-size: 15px;
    color: #121a33;
  }
}
.秘書處公告-2019-9-1-內容 {
  &__7bf59c8eeef446f0a2d8ce2d5b664552 {
    font-size: 15px;
    color: #121a33;
  }
}
</style>
