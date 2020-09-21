<template>
  <v-footer color="primary_dark_1">
    <v-container>
      <v-row class="ma-6">
        <v-col class="d-flex">
          <v-img src="../assets/TSVS_logo.png" height="100px" width="100px" contain></v-img>
          <div class="d-flex flex-column align-self-center ml-4 pr-8" style="border-right:1px white solid;">
            <span class="white--text display-1">台灣血管外科學會</span>
            <span class="white--text headline">Taiwan Society for Vascular Surgery</span>
          </div>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img contain src="../assets/sita-logo.png" max-width="300px"></v-img>
        </v-col>
      </v-row>
      <span class="my-6 text-center">
        © Copyright Taiwan Society for Vascular Surgery 2020 All Right Reserved. Designed with ❤ by Sitatech Information
        Services Co., Ltd.
      </span>
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
