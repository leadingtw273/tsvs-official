<template>
  <v-sheet class="header" color="transparent">
    <v-img class="image" src="../assets/index.jpg" max-height="500px"></v-img>
    <v-container class="pa-10" fluid>
      <v-row no-gutters align="center">
        <v-col cols="6">
          <v-img src="../assets/logo.png" max-width="400px" contain></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex flex-row">
          <v-btn outlined rounded color="white">會員登入</v-btn>
          <v-btn text rounded class="ml-2" color="white">English</v-btn>
          <v-divider class="align-self-center mx-5" vertical></v-divider>
          <v-icon color="white" large>crop_square</v-icon>
          <v-icon color="white" large>crop_square</v-icon>
        </v-col>
      </v-row>
      <div class="mt-12">
        <v-btn text color="white">About TSVS</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">News</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">Events</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">資料查詢</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">會員專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">衛教專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text color="white">相關網站</v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 0;

  .image {
    position: absolute;
    z-index: -1;
  }

  .v-divider {
    border-color: white;
    height: 20px;
  }
}
</style>
