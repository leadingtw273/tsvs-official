<template>
  <div>
    <span class="title primary--text">(免費申請，請於活動前兩周提出申請)</span>
    <v-divider class="my-2"></v-divider>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>活動日期</span>
          </div>
          <v-row dense class="d-block">
            <v-col cols="12" class="d-flex">
              <div class="align-self-center mr-6 subTitle">起：</div>
              <date-picker class="mr-6" :value.sync="formData.eventDateStart.date"></date-picker>
              <time-picker :value.sync="formData.eventDateStart.time"></time-picker>
            </v-col>
            <v-col cols="12" class="d-flex">
              <div class="align-self-center mr-6 subTitle">迄：</div>
              <date-picker class="mr-6" :value.sync="formData.eventDateEnd.date"></date-picker>
              <time-picker :value.sync="formData.eventDateEnd.time"></time-picker>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>活動主題</span>
          </div>
          <v-text-field label="活動主題" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>主辦單位</span>
          </div>
          <v-text-field label="主辦單位" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span>協辦單位</span>
          </div>
          <v-text-field label="協辦單位" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>活動地點</span>
          </div>
          <v-text-field label="活動地點" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>聯絡人</span>
          </div>
          <v-text-field label="聯絡人" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>聯絡電話</span>
          </div>
          <v-text-field label="聯絡電話" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>電子信箱</span>
          </div>
          <v-text-field label="電子信箱" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span>網站連結</span>
          </div>
          <v-text-field label="網站連結" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span>報名連結</span>
          </div>
          <v-text-field label="報名連結" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 12%;">
            <span class="accent--text">*</span>
            <span>課程資訊</span>
          </div>

          <div class="d-flex flex-column" style="width: 88%;">
            <v-file-input multiple label="檔案上傳" dense hide-details outlined></v-file-input>

            <span class="accent--text mt-2">＊課程資訊須包含課程表及講師資料</span>
            <span class="accent--text">＊檔案類型須為：pdf、doc、docx、rar或zip等</span>
            <span class="accent--text">＊檔案大小需小於 5 MB</span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-sheet class="pa-6">
        <span class="headline accent--text">注意事項：</span>
        <br />
        <span class="title">甲、繼續教育積分申請須於繼續教育課程開辦前”兩周”提出申請，未依規定申請者恕不受理。</span>
        <br />
        <span class="title">
          乙、未經本學會同意認定前，請勿自行公告『台灣血管外科學會為主辦（協辦）單位』、『台灣
          血管外科學會繼續教育積分若干點』，或刊登類似之廣告；未經本學會同意主辦（協辦）單
          位前，不得自行公告本學會為主辦（協辦）單位。違反本規定者，得拒絕予以認定教育積 分。
        </span>
        <br />
        <span class="title">
          丙、主辦單位申請繼續教育積分認定後未能如期舉行，經本會查證屬實，具蓄意欺騙取得教育
          積分之申請單位，該場積分本會不予認定，且一年內不得提出申請。
        </span>
        <br />
        <span class="title">丁、主辦單位於申請繼續教育積分認定後，臨時更改或延期者，舉行前請照會本學會。</span>
        <br />
        <span class="title">
          戊、凡繼續教育發現有代簽者，教育積分一概不予認定。
        </span>
        <span class="title">
          己、 主辦單位請於活動完成後”兩周內”將與會者簽到資訊 (姓名及身分證字號的 Excel 檔)Email 至
          4tsvs@tsvs.org，並寄回主辦單位用印的簽到單正本，以便登錄學員積分，超 過時間則積分不予認定。
        </span>
      </v-sheet>

      <div class="d-flex justify-center">
        <v-checkbox v-model="confirmCheckBox" label="以閱讀申請繼續教育積分注意事項"></v-checkbox>
      </div>
      <div class="d-flex justify-center">
        <v-btn color="primary" outlined>輸入完成立即新增</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import dayjs from "dayjs";
import DatePicker from "@/components/Picker/DatePicker";
import TimePicker from "@/components/Picker/TimePicker";

export default {
  name: "Application",
  components: {
    DatePicker,
    TimePicker
  },
  data() {
    return {
      valid: false,
      confirmCheckBox: false,
      formData: {
        eventDateStart: {
          date: dayjs().format("YYYY-MM-DD"),
          time: "00:00"
        },
        eventDateEnd: {
          date: dayjs().format("YYYY-MM-DD"),
          time: "00:00"
        }
      }
    };
  }
};
</script>

<style lang="scss"></style>
