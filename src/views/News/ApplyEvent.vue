<template>
  <div>
    <span class="title primary--text">(免費申請，請於活動前兩周提出申請)</span>
    <v-divider class="my-2"></v-divider>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
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
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span class="accent--text">*</span>
            <span>活動主題</span>
          </div>
          <v-text-field label="活動主題" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span class="accent--text">*</span>
            <span>主辦單位</span>
          </div>
          <v-text-field label="主辦單位" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span class="accent--text">*</span>
            <span>聯絡人</span>
          </div>
          <v-text-field label="聯絡人" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span class="accent--text">*</span>
            <span>聯絡電話</span>
          </div>
          <v-text-field label="聯絡電話" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span>活動網址</span>
          </div>
          <v-text-field label="活動網址" dense hide-details outlined></v-text-field>
        </v-col>

        <v-col cols="12" class="d-flex">
          <div class="align-self-center title text-right mr-6" style="width: 100px;">
            <span class="accent--text">*</span>
            <span>活動資訊</span>
          </div>
          <v-file-input multiple label="檔案上傳 (議程/講師介紹/演講摘要)" dense hide-details outlined></v-file-input>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-sheet class="pa-6">
        <span class="headline accent--text">注意事項：</span>
        <br />
        <span class="title">甲、 申請"活動公告"須於活動開辦前"兩周"提出申請，未依規定申請者恕不受理。</span>
        <br />
        <span class="title">
          乙、 活動公告不等同於申請繼續教育積分，申請繼續教育積分請至"會議課程資訊"頁面申請。
        </span>
        <br />
        <span class="title">丙、 內容審查成功後，方顯示於活動公告處。</span>
        <br />
        <span class="title">丁、 主辦單位申請公告活動後，臨時更改或延期者，舉行前請照會本學會。</span>
        <br />
        <span class="title">
          戊、 活動未能如期舉行且未通知或活動內容與我會學術內容無關，具蓄意欺騙意圖之申請單位，將永久不得提出申請。
        </span>
      </v-sheet>

      <div class="d-flex justify-center">
        <v-checkbox v-model="confirmCheckBox" label="以閱讀申請公告活動資訊注意事項"></v-checkbox>
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
  name: "ApplyEvent",
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

<style></style>
