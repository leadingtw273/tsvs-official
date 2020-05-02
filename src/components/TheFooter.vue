<template>
  <v-footer color="primary_dark_1">
    <v-container class="my-12">
      <v-row>
        <v-col>
          <div class="d-flex flex-row">
            <v-img contain src="../assets/logo.png" max-width="280px"></v-img>
            <v-divider class="ml-auto" color="white" vertical></v-divider>
          </div>
          <div class="pa-10">
            <span class="font-weight-thin caption white--text">Design By:</span>
            <v-img contain class="mt-4" src="../assets/sita-logo.png" max-width="200px"></v-img>
          </div>
        </v-col>

        <v-col>
          <div class="mb-4">
            <span>抬頭：台灣血管外科學會</span>
            <span>統編：48682216</span>
          </div>
          <div class="mb-4">
            <span>中華郵政劃撥</span>
            <span>帳號：19944001</span>
            <span>戶名：台灣血管外科學會</span>
          </div>
          <div>
            <span>銀行電滙</span>
            <span>合作金庫代號：006</span>
            <span>立帳銀行：長庚分行</span>
            <span>帳號：3638-717-000159</span>
            <span>戶名：台灣血管外科學會</span>
          </div>
        </v-col>

        <v-col cols="5">
          <div class="mb-2">
            <span>Bank Information for International Wire Transfer</span>
          </div>
          <div class="mb-2">
            <span>Bank Name: Taiwan Cooperative Bank, Chang Gung Branch (006)</span>
          </div>
          <div class="mb-2">
            <span>Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN, TAIWAN, R.O.C.</span>
          </div>
          <div class="mb-2">
            <span>Account Name: Taiwan Society for Vascular Surgery</span>
          </div>
          <div class="mb-2">
            <span>Account number: 3638717000159</span>
          </div>
          <div class="mb-2">
            <span>Swift Code: TACBTWTP543</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
