<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="章程法令規章-法令內容">
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
      </div>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "../../../components/TheTagGroup";

export default {
  name: "Decree",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [{ text: "主動脈支架置放術_操作人員資格", tag: "#主動脈支架置放術_操作人員資格" }]
    };
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
