<template>
  <v-footer color="primary_dark_1">
    <v-row class="ma-6">
      <v-col cols="4" class="d-flex flex-column align-center">
        <div class="d-flex">
          <v-img src="../assets/TSVS_logo.png" height="100px" width="100px" contain></v-img>
          <div class="d-flex flex-column align-self-center ml-4 pr-8" style="border-right:1px white solid;">
            <span class="white--text display-1">台灣血管外科學會</span>
            <span class="white--text headline">Taiwan Society for Vascular Surgery</span>
          </div>
        </div>
        <div class="d-inline-flex flex-column mt-8">
          <span class="font-weight-thin caption white--text">Design By:</span>
          <v-img contain class="mt-4" src="../assets/sita-logo.png" max-width="200px"></v-img>
        </div>
      </v-col>

      <v-col cols="auto" class="px-12">
        <div class="mb-4">
          <span class="title">抬頭：台灣血管外科學會</span>
          <span class="title">統編：48682216</span>
        </div>
        <div class="mb-4">
          <span class="title">中華郵政劃撥</span>
          <span class="title">帳號：19944001</span>
          <span class="title">戶名：台灣血管外科學會</span>
        </div>
        <div>
          <span class="title">銀行電滙</span>
          <span class="title">合作金庫代號：006</span>
          <span class="title">立帳銀行：長庚分行</span>
          <span class="title">帳號：3638-717-000159</span>
          <span class="title">戶名：台灣血管外科學會</span>
        </div>
      </v-col>
      <v-col>
        <div class="mb-4">
          <span class="title font-weight-medium">Taiwan Society for Vascular Surgery (TSVS)</span>
        </div>
        <div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">OFFICE HOUR：</span>
            <span class="title font-weight-medium">9 AM - 5 PM</span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">Addrss：</span>
            <span class="title font-weight-medium">
              95 Wen Chang Rd, Shih Lin District, Taipei, TAIWAN 11101 台北市士林區文昌路 95 號 新光 B2 周邊血管檢查室
              11101
            </span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">Telephone：</span>
            <span class="title font-weight-medium">+886-2-28332211#2834</span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">Cellphone：</span>
            <span class="title font-weight-medium">+886-966-877-552</span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">E-mail：</span>
            <span class="title font-weight-medium">4tsvs@tsvs.org</span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">Website：</span>
            <span class="title font-weight-medium">www.tsvs.org</span>
          </div>
          <div class="d-flex">
            <span class="title font-weight-medium mr-4">聯絡人：</span>
            <span class="title font-weight-medium">許心慈</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
.v-footer {
  span {
    display: block;

    font-size: 14px;
    font-weight: lighter;
    color: white;
  }
}
</style>
