<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="申請會議課程活動-會議課程活動申請辦法內容">
        <div class="申請會議課程活動-會議課程活動申請辦法內容__b887817673f24f6e87553727af3aca2e">
          Bank Information for International Wire Transfer <br />Bank Name: Taiwan Cooperative Bank, Chang Gung Branch
          (006) <br />Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN, TAIWAN, R.O.C. <br />Account
          Name: Taiwan Society for Vascular Surgery <br />Account number: 3638717000159 <br />Swift Code: TACBTWTP543
        </div>
      </div>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      N/A
    </div>
  </div>
</template>

<script>
import TheTagGroup from "../../components/TheTagGroup";
export default {
  name: "Application",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "會議課程活動申請辦法", tag: "#會議課程活動申請辦法" },
        { text: "積分申請", tag: "#積分申請" }
      ]
    };
  }
};
</script>

<style lang="scss">
.申請會議課程活動-會議課程活動申請辦法內容 {
  &__b887817673f24f6e87553727af3aca2e {
    font-size: 23px;
    line-height: (34 / 23);
    font-weight: 300;
    color: #121a33;
  }
}
</style>
