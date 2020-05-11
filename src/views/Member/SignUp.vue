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
      <v-stepper v-model="signUpStep">
        <v-stepper-header>
          <v-stepper-step :complete="signUpStep > 0" :step="1" :editable="true">選擇會員別</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="signUpStep > 1" :step="2" :editable="true">填寫資料</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="signUpStep > 2" :step="3" :editable="true">完成</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content :step="1">
            <v-sheet class="mb-12 d-flex justify-center align-center" color="transparent">
              <v-radio-group v-model="form.memberClass" row>
                <v-radio label="學會之友" value="學會之友"></v-radio>
                <v-radio label="正式會員" value="正式會員"></v-radio>
              </v-radio-group>
            </v-sheet>

            <v-btn
              color="primary d-flex ml-auto"
              @click="signUpStep === 3 ? (signUpStep = 1) : (signUpStep = ++signUpStep)"
            >
              確定
            </v-btn>
          </v-stepper-content>
          <v-stepper-content :step="2">
            <v-sheet class="mb-12" color="transparent">
              <v-row>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">申請類別</span>
                  <v-radio-group class="pa-0 ma-0" row hide-details="auto">
                    <v-radio label="個人申請" value="個人申請"></v-radio>
                    <v-radio label="學會/公司/團體" value="學會/公司/團體"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span class="align-self-center mr-6">申請日期</span>
                  <v-menu
                    v-model="applyDateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="form.applyDate"
                        label="申請日期"
                        readonly
                        outlined
                        hide-details="auto"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.applyDate"
                      color="primary"
                      @input="applyDateMenu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="4" class="d-flex">
                      <span class="align-self-center mr-6">姓名(中文)</span>
                      <v-text-field label="姓名(中文)" outlined hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="d-flex">
                      <span class="align-self-center mr-6">姓名(英文)</span>
                      <v-text-field label="姓名(英文)" outlined hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="3" class="d-flex">
                      <span class="align-self-center mr-6">性別</span>
                      <v-radio-group class="align-self-center pa-0 ma-0" row hide-details="auto">
                        <v-radio label="男" value="男"></v-radio>
                        <v-radio label="女" value="女"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span class="align-self-center mr-6">出生日期</span>
                  <v-menu
                    v-model="birthdayMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="form.birthday"
                        label="申請日期"
                        readonly
                        outlined
                        hide-details="auto"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="form.birthday"
                      color="primary"
                      @input="birthdayMenu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">身份證號</span>
                  <v-text-field label="國民身份證 / 外僑統一證號" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">戶籍地址</span>
                  <v-text-field label="戶籍地址" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">通訊地址</span>
                  <v-text-field label="通訊地址" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span class="align-self-center mr-6">公司電話</span>
                  <v-text-field label="公司電話" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span class="align-self-center mr-6">行動電話</span>
                  <v-text-field label="行動電話" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">電子信箱</span>
                  <v-text-field label="電子信箱" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">現職服務醫院</span>
                  <v-row>
                    <v-col cols="4" class="d-flex">
                      <v-text-field label="縣/市" outlined hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="d-flex">
                      <v-text-field label="區/鄉鎮" outlined hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="4" class="d-flex">
                      <v-text-field label="醫院" outlined hide-details="auto"></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="4" class="d-flex">
                  <span class="align-self-center mr-6">科別</span>
                  <v-text-field label="科別" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="4" class="d-flex">
                  <span class="align-self-center mr-6">現任職務</span>
                  <v-text-field label="現任職務" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="4" class="d-flex">
                  <span class="align-self-center mr-6">學歷</span>
                  <v-text-field label="學歷" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">醫院個人介紹連結</span>
                  <v-text-field label="醫院個人介紹連結" outlined hide-details="auto"></v-text-field>
                </v-col>
                <v-col cols="4" class="d-flex" v-if="form.memberClass === '正式會員'">
                  <span class="align-self-center mr-6">個人相片</span>
                  <v-file-input label="檔案上傳" outlined hide-details="auto"></v-file-input>
                </v-col>
                <v-col cols="6" class="d-flex" v-if="form.memberClass === '正式會員'">
                  <span class="align-self-center mr-6">畢業證書(最高學歷)</span>
                  <v-file-input label="檔案上傳" outlined hide-details="auto"></v-file-input>
                </v-col>
              </v-row>
            </v-sheet>
            <div class="d-flex justify-end">
              <span class="accent--text align-self-center mr-6">＊提交失敗，資料檢核有誤，請重新輸入。</span>
              <v-btn color="primary" @click="signUpStep === 3 ? (signUpStep = 1) : (signUpStep = ++signUpStep)">
                確定
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content :step="3">
            <v-sheet class="d-flex flex-column justify-center align-center mb-12" color="transparent">
              <v-icon color="primary" size="100px">mdi-check-circle</v-icon>
              <span class="mt-6">您已完成申請程序，請耐心等待審核，謝謝您。</span>
            </v-sheet>

            <v-btn
              color="primary d-flex ml-auto"
              @click="signUpStep === 3 ? (signUpStep = 1) : (signUpStep = ++signUpStep)"
            >
              完成
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
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
      ],
      signUpStep: 1,
      applyDateMenu: false,
      birthdayMenu: false,
      form: {
        memberClass: "學會之友",
        applyDate: "2019-05-01",
        birthday: "2019-05-01"
      }
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

.v-stepper {
  box-shadow: 0 0 0 0 transparent;
  background: transparent !important;
  .v-stepper__header {
    box-shadow: 0 0 0 0 transparent !important;
  }
}
</style>
