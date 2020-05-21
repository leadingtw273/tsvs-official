<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="秘書處公告-2019-12-7-內容">
        <div class="秘書處公告-2019-12-7-內容__cbcf27669f044543949e95337ed33020">
          第八屆理監事暨學會幹部名單
          <div class="d-flex mt-6">
            <v-simple-table class="transparent mr-6" dense v-for="group in list_1.length / 8" :key="group">
              <template v-slot:default>
                <tbody>
                  <tr v-for="{ name, position } in list_1.slice((group - 1) * 8, group * 8)" :key="name + position">
                    <td>{{ name }}</td>
                    <td>{{ position }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
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
          <div class="d-flex mt-6">
            <v-simple-table class="transparent mr-6" dense>
              <template v-slot:default>
                <tbody>
                  <tr v-for="{ name, hospital, id } in list_2" :key="id">
                    <td>{{ id }}</td>
                    <td>{{ name }}</td>
                    <td>{{ hospital }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
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
      ],
      list_1: [
        { name: "甘宗旦", position: "理事長" },
        { name: "李芳艷", position: "副理事長" },
        { name: "陳益祥", position: "副理事長" },
        { name: "吳毅暉", position: "常務理事" },
        { name: "魏崢", position: "常務理事" },
        { name: "柯博仁", position: "常務理事" },
        { name: "張睿智", position: "常務理事" },
        { name: "李國楨", position: "理事" },
        { name: "林致源", position: "理事" },
        { name: "張兼華", position: "理事" },
        { name: "陳沂名", position: "理事" },
        { name: "陳映澄", position: "理事" },
        { name: "陳哲伸", position: "理事" },
        { name: "黃耀廣", position: "理事" },
        { name: "詹志洋", position: "理事" },
        { name: "劉國聖", position: "理事" },
        { name: "蔡宜廷", position: "理事" },
        { name: "鄭伯智", position: "理事" },
        { name: "謝世榮", position: "理事" },
        { name: "顏旭霆", position: "理事" },
        { name: "李中毅", position: "理事" },
        { name: "張忠毅", position: "常務監事" },
        { name: "李秋陽", position: "監事" },
        { name: "林暉翰", position: "監事" },
        { name: "許傳智", position: "監事" },
        { name: "陳柏霖", position: "監事" },
        { name: "蔡忠霖", position: "監事" },
        { name: "羅健洺", position: "監事" },
        { name: "許喬博", position: "秘書長" },
        { name: "劉國聖", position: "副秘書長" },
        { name: "黃建偉", position: "副秘書長" },
        { name: "曾政哲", position: "財務長" }
      ],
      list_2: [
        { hospital: "屏東醫院", name: "吳欣岱", id: "S00622" },
        { hospital: "台北馬偕", name: "林俊閔", id: "S00638" },
        { hospital: "三軍總醫院", name: "張瑞宗", id: "S00642" },
        { hospital: "三軍總醫院", name: "林敬惟", id: "S00643" },
        { hospital: "成大醫院", name: "陳迪詠", id: "S00650" },
        { hospital: "台北榮總", name: "陳泰位", id: "S00654" },
        { hospital: "台北榮總", name: "陳嘉葦", id: "S00660" },
        { hospital: "台北馬偕", name: "陳宇恒", id: "S00665" },
        { hospital: "安南醫院", name: "黃俊銘", id: "S00669" },
        { hospital: "林口長庚", name: "吳崇丞", id: "S00673" },
        { hospital: "林口長庚", name: "蘇以理", id: "S00677" },
        { hospital: "台北榮總", name: "孟繁傑", id: "S00686" },
        { hospital: "成大醫院", name: "文豪", id: "S00689" }
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
