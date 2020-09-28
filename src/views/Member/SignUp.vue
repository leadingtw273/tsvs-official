<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>
    <div v-if="contentItemIndex === 0">
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
    <div v-if="contentItemIndex === 1">
      <v-stepper v-model="signUpStep" alt-labels>
        <v-stepper-header>
          <v-stepper-step :complete="signUpStep > 0" step="1">選擇會員別</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="signUpStep > 1" step="2">填寫資料</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="signUpStep > 2" step="3">完成</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content :step="1">
            <v-sheet class="mb-12 d-flex justify-center align-center" color="transparent">
              <v-radio-group v-model="form.type" row>
                <v-radio label="學會之友" :value="1"></v-radio>
                <v-radio label="正式會員" :value="2"></v-radio>
              </v-radio-group>
            </v-sheet>

            <v-btn color="primary d-flex ml-auto" @click="++signUpStep">
              確定
            </v-btn>
          </v-stepper-content>
          <v-stepper-content :step="2">
            <v-sheet class="mb-12" color="transparent">
              <v-row>
                <v-col cols="12" class="d-flex">
                  <span class="align-self-center mr-6">申請類別</span>
                  <v-radio-group v-model="form.class" class="align-self-center pa-0 ma-0" row hide-details="auto">
                    <v-radio label="個人申請" :value="1"></v-radio>
                    <v-radio label="學會/公司/團體" :value="2"></v-radio>
                  </v-radio-group>
                </v-col>
                <template v-if="formClass === 1">
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">身份證號</span>
                    <v-text-field
                      v-model="form.username"
                      label="國民身份證 / 外僑統一證號"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">性別</span>
                    <v-radio-group v-model="form.gender" class="align-self-center pa-0 ma-0" row hide-details="auto">
                      <v-radio label="男" :value="1"></v-radio>
                      <v-radio label="女" :value="2"></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">姓名(中文)</span>
                    <v-text-field
                      v-model="form.name_zh"
                      label="姓名(中文)"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">姓名(英文)</span>
                    <v-text-field
                      v-model="form.name_en"
                      label="姓名(英文)"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">出生日期</span>
                    <date-picker :value.sync="form.birthDate"></date-picker>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">電子信箱</span>
                    <v-text-field
                      v-model="form.mail"
                      label="電子信箱"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">公司電話</span>
                    <v-text-field
                      v-model="form.phone_office"
                      label="公司電話"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">行動電話</span>
                    <v-text-field
                      v-model="form.phone_mobile"
                      label="行動電話"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">戶籍地址</span>
                    <v-text-field
                      v-model="form.address_official"
                      label="戶籍地址"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">通訊地址</span>
                    <v-text-field
                      v-model="form.address_contact"
                      label="通訊地址"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="8" class="d-flex">
                    <span class="align-self-center mr-6">現職服務醫院</span>
                    <v-text-field
                      v-model="form.org_address"
                      label="地點"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" class="d-flex">
                    <v-text-field
                      v-model="form.org_name"
                      label="醫院"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">現任職務</span>
                    <v-text-field
                      v-model="form.org_position"
                      label="現任職務"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">科別</span>
                    <v-text-field
                      v-model="form.org_department"
                      label="科別"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">醫院個人介紹</span>
                    <v-text-field v-model="form.link" label="連結" dense outlined hide-details="auto"></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">學歷</span>
                    <v-text-field
                      v-model="form.education"
                      label="學歷"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex" v-if="formType === 2">
                    <span class="align-self-center mr-6">個人相片</span>
                    <v-file-input
                      v-model="coverFile"
                      accept="image/png, image/jpeg, image/bmp"
                      label="檔案上傳"
                      outlined
                      dense
                      hide-details="auto"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="6" class="d-flex" v-if="formType === 2">
                    <span class="align-self-center mr-6">畢業證書</span>
                    <v-file-input
                      v-model="diplomacyFile"
                      accept="image/png, image/jpeg, image/bmp"
                      label="醫學院畢業證書上傳"
                      outlined
                      dense
                      hide-details="auto"
                    ></v-file-input>
                  </v-col>
                </template>
                <template v-else-if="formClass === 2">
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">單位名稱</span>
                    <v-text-field
                      v-model="form.name_zh"
                      label="單位名稱"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">設立日期</span>
                    <date-picker :value.sync="form.birthDate"></date-picker>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">統一編號</span>
                    <v-text-field
                      v-model="form.username"
                      label="統一編號"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">聯絡人姓名</span>
                    <v-text-field
                      v-model="form.org_contact_person"
                      label="聯絡人姓名"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">聯絡人電話</span>
                    <v-text-field
                      v-model="form.phone_mobile"
                      label="行動電話"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">聯絡人職稱</span>
                    <v-text-field
                      v-model="form.org_position"
                      label="聯絡人職稱"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex">
                    <span class="align-self-center mr-6">公司電話</span>
                    <v-text-field
                      v-model="form.phone_office"
                      label="公司電話"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">單位登記地址</span>
                    <v-text-field
                      v-model="form.address_official"
                      label="單位登記地址"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">通訊地址</span>
                    <v-text-field
                      v-model="form.address_contact"
                      label="通訊地址"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">電子信箱</span>
                    <v-text-field
                      v-model="form.mail"
                      label="電子信箱"
                      dense
                      outlined
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="d-flex">
                    <span class="align-self-center mr-6">單位官方網址</span>
                    <v-text-field v-model="form.link" label="連結" dense outlined hide-details="auto"></v-text-field>
                  </v-col>
                  <v-col cols="6" class="d-flex" v-if="formType === 2">
                    <span class="align-self-center mr-6">團體 LOGO</span>
                    <v-file-input
                      v-model="coverFile"
                      accept="image/png, image/jpeg, image/bmp"
                      label="檔案上傳"
                      outlined
                      dense
                      hide-details="auto"
                    ></v-file-input>
                  </v-col>
                  <v-col cols="6" class="d-flex" v-if="formType === 2">
                    <span class="align-self-center mr-6">登記證明文件</span>
                    <v-file-input
                      v-model="diplomacyFile"
                      accept="image/png, image/jpeg, image/bmp"
                      label="立案證書、公司登記、商業登記證明文件上傳"
                      outlined
                      dense
                      hide-details="auto"
                    ></v-file-input>
                  </v-col>
                </template>
              </v-row>
            </v-sheet>
            <div class="d-flex justify-end">
              <span class="accent--text align-self-center mr-6" v-show="registrationStatus === 'failed'"
                >＊提交失敗，資料檢核有誤，請重新輸入。</span
              >
              <v-btn color="primary" @click="signUp()">
                確定
              </v-btn>
            </div>
          </v-stepper-content>
          <v-stepper-content :step="3">
            <v-sheet class="d-flex flex-column justify-center align-center mb-12" color="transparent">
              <v-icon color="primary" size="100px">mdi-check-circle</v-icon>
              <span class="mt-6">您已完成申請程序，請耐心等待審核，謝謝您。</span>
            </v-sheet>

            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn color="primary" :to="{ name: 'MemberSignIn' }" outlined>
                轉至登入頁面
              </v-btn>
              <v-spacer></v-spacer>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </div>
</template>

<script>
import TheTagGroup from "@/components/TheTagGroup";
import DatePicker from "@/components/Picker/DatePicker";
import apiMember from "@/apis/Member";
import dayjs from "dayjs";

export default {
  name: "SignUp",
  components: { TheTagGroup, DatePicker },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "入會須知", tag: "#入會須知" },
        { text: "申請入會", tag: "#申請入會" }
      ],
      signUpStep: 1,
      birthdayMenu: false,
      coverFile: null,
      diplomacyFile: null,
      registrationStatus: null,
      form: {
        username: "",
        type: 1,
        class: 1,
        name_zh: "",
        name_en: "",
        gender: 1,
        birthDate: dayjs().valueOf(),
        education: "",
        link: "",
        cover_image: "",
        diplomacy_image: "",

        address_official: "",
        address_contact: "",
        phone_office: "",
        phone_mobile: "",
        mail: "",

        org_contact_person: "",
        org_address: "",
        org_name: "",
        org_department: "",
        org_position: ""
      }
    };
  },
  computed: {
    formType() {
      return this.form.type;
    },
    formClass() {
      return this.form.class;
    },
    password() {
      // 身分證後五碼 + 生日日期
      return this.form.username.slice(-5) + dayjs(this.form.birthDate).format("MMDD");
    }
  },
  watch: {
    formClass(val) {
      if (val === 1) this.form.gender = 1;
      if (val === 2) this.form.gender = 0;
    }
  },
  methods: {
    async signUp() {
      const member = new apiMember();

      const password = this.password;
      const { success } = await member.signUp({ password, ...this.form });

      if (success) {
        this.signUpStep = 3;
      } else {
        this.registrationStatus = "failed";
      }
    },
    uploadFile() {}
  },
  created() {}
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
