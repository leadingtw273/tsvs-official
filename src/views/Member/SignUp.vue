<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <div class="會員入會-入會須知內容">
        <div class="會員入會-入會須知內容__900a60fcb5654a30abe17c932d39abb5">
          本會會員分類及入會方式如下：
          <br />
          <br />一、一般會員： <br />
          1. 對血管外科有興趣者，經本會理事會通過並繳納會費者，得為本會一般會員。 <br />
          2. 欲入會者請填妥入會申請表，或線上申請入會，本會將透過電子郵件通知審核結果及繳費訊息。 <br />
          3. 一般會員入會費為1,500元，年費為500元。
          <br />
          <br />二、專科醫師會員： <br />
          1.
          凡在國內、外醫學院系以上畢業，具外科專科醫師資格，且具本會一般會員資格至少一年以上，以及積分達100分以上者，可申請為專科醫師會員。
          <br />
          2. 欲申請為專科醫師之會員，請填妥專科醫師甄審申請表，或線上申請專科醫師資格。 <br />
          3. 自2011年開始，本會開始實施次專科醫師甄試，會員除符合上述條件外，需通過本會之考試，方可取得專科醫師資格。
          <br />
          4. 專科醫師每六年需換證。 <br />
          5. 專科醫師甄審審查費為1,500元，年費2,000元，證書費3,000元，換證費500元。
          <br />
          <br />三、贊助會員：凡對本會在經濟或其他方面有實際贊助者，經本會理事會通過者，得聘請為二年期贊助會員。
          <br />
          <br />四、榮譽會員：凡對本會有特殊貢獻，經本會理事會通過者，得聘請為榮譽會員。
          <br />
          <br />郵政劃撥帳號：19944001 <br />戶名：台灣血管外科學會
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
  name: "SignUp",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "入會須知", tag: "#入會須知" },
        { text: "申請入會", tag: "#申請入會" }
      ]
    };
  }
};
</script>

<style lang="scss">
.會員入會-入會須知內容 {
  &__900a60fcb5654a30abe17c932d39abb5 {
    font-size: 18px;
    line-height: (34 / 18);
    font-weight: 300;
    color: #121a33;
  }
}
</style>
