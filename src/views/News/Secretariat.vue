<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="秘書處公告-2019-12-7-內容">
        <div class="秘書處公告-2019-12-7-內容__cbcf27669f044543949e95337ed33020">
          第八屆理監事暨學會幹部名單
          <br />
          <br />甘宗旦 理事長 李芳艷 副理事長 陳益祥 副理事長 吳毅暉 常務理事 魏崢 常務理事 柯博仁 常務理事 張睿智
          常務理事
          <br />
          <br />李國楨 理事 林致源 理事 張兼華 理事 陳沂名 理事 陳映澄 理事 陳哲伸 理事 黃耀廣 理事
          <br />
          <br />詹志洋 理事 劉國聖 理事 蔡宜廷 理事 鄭伯智 理事 謝世榮 理事 顏旭霆 理事 李中毅 理事
          <br />
          <br />張忠毅 常務監事 李秋陽 監事 林暉翰 監事 許傳智 監事 陳柏霖 監事 蔡忠霖 監事 羅健洺 監事
          <br />
          <br />許喬博 秘書長 劉國聖 副秘書長 黃建偉 副秘書長 曾政哲 財務長
        </div>
      </div>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      <div class="秘書處公告-2019-9-2-內容">
        <div class="秘書處公告-2019-9-2-內容__2d816ef2330144048cf6878c3d77e421">
          2019 血管外科專科醫師甄試 通過名單
          <br />
          <br />(依會員編號順序排列)
          <br />
          <br />S00622 吳欣岱 屏東醫院 S00638 林俊閔 台北馬偕 S00642 張瑞宗 三軍總醫院 S00643 林敬惟 三軍總醫院 S00650
          陳迪詠 成大醫院 <br />S00654 陳泰位 台北榮總 S00660 陳嘉葦 台北榮總 S00665 陳宇恒 台北馬偕 S00669 黃俊銘
          安南醫院 S00673 吳崇丞 林口長庚 <br />S00677 蘇以理 林口長庚 S00686 孟繁傑 台北榮總 S00689 文豪 成大醫院
          <br />
          <br />◎會員編號自動由Ａ→Ｓ
          <br />
          <br />◎請9/5(四)前劃撥繳交專科醫師考試證書費：3000元 / 郵局劃撥帳號: 19944001 台灣血管外科學會 /
          劃撥單上請註明(姓名/專科證書費)
          <br />
          <br />◎收據上傳：email收據圖檔至4tsvs@tsvs.org，方完成繳費程序
          <br />
          <br />◎專科醫師證書將於2019/9/7(六) 11:40 會員大會頒發 (因事無法出席, 請由專人代領)
        </div>
      </div>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 2">
      <div class="秘書處公告-2019-9-1-內容">
        <div class="秘書處公告-2019-9-1-內容__7bf59c8eeef446f0a2d8ce2d5b664552">
          血管外科健保申報共識
          <br />
          <br />檔案載點 (需登入)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "../../components/TheTagGroup";
export default {
  name: "Secretariat",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "2019/12/7", tag: "#2019/12/7" },
        { text: "2019/9/2", tag: "#2019/9/2" },
        { text: "2019/9/1", tag: "#2019/9/1" }
      ]
    };
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
