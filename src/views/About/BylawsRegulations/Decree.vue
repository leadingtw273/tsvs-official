<template>
  <div>
    <template v-if="viewItem == null">
      <div class="d-flex mb-4">
        <span class="ml-auto mr-2 align-self-center text-h6 ">查詢： </span>
        <v-text-field
          style="max-width: 300px;"
          v-model="searchText"
          label="關鍵字"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </div>

      <the-view-item-list :itemList="dataList" @select="showContent"></the-view-item-list>

      <v-pagination
        v-if="resourceList.length > 10"
        class="mt-4"
        v-model="page"
        :length="6"
        color="primary_light_1"
        dark
      ></v-pagination>
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
  name: "Decree",
  components: { TheViewItemList },
  data() {
    return {
      searchText: "",
      page: 1,
      resourceList: [
        {
          id: "01",
          class: "章程法令規章",
          image: "",
          title: "主動脈支架置放術_操作人員資格",
          date: "2019-12-17",
          content: `<div class="章程法令規章-法令內容">
        <div class="章程法令規章-法令內容__7028bec7bbd04b04955871f46e11e1fc headline">
          主動脈支架置放術_操作人員資格 (衛福部報備資料要求)
          <br />
          <br />即使已取得我會主動脈支架操作醫師證書,衛福部要求, 仍需向地方衛生主管機關報備 <br />若無報備,
          將可能被健保核刪, 請向各地衛生局查核貴院報備情況
          <br />
          <br />
          <br />我會之『主動脈支架操作醫師證書』申請要求如下:
          <br />
          <br />0. 學會會員, 登入帳號後於”主動脈支架操作申請”處, 上傳以下文件 <br />1. 血管外科專科醫師證書影本 <br />2.
          服務醫院出具主動脈瘤手術十例以上經歷之證明文件 <br />3.
          服務醫院出具實際參與操作「主動脈支架」五例以上之經歷證明 <br />4. 完成學會認可之「主動脈支架」訓練課程證明
          <br />5. 證書費5000 劃撥至 19944001 台灣血管外科學會 <br />6. 2張2吋大頭照 郵寄至學會
          <br />
          <br />
          <br />
          <br />「A 型急性 主動脈剝離術」(編號68043B，86451點)
          <br />
          <br />全⺠健康保險醫療服務給付項⽬及⽀付標準部分診療項⽬修正總說明
          <br />
          <br />特定診療-⼿術(第⼆部第⼆章第七節): <br />新增⼼臟及⼼包膜⼿術診 療項⽬
          <br />「經導管主動脈瓣膜置換術」(編號68040B，96975點) <br />「A 型急性主動脈剝離術」(編號68043B，86451點)。
          <br />
          <br />⾃⼀百零六年三⽉⼀⽇⽣效
        </div>
      </div>`,
          isAdvertising: false,
          isLogin: true
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
      this.$router.push({ name: "AboutBylawsRegulationsDecreeItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss">
.章程法令規章-法令內容 {
  &__7028bec7bbd04b04955871f46e11e1fc {
    font-size: 15px;
    color: #121a33;
  }
}
</style>
