<template>
  <v-sheet class="the-navbar" color="transparent">
    <v-img class="image" src="../assets/index.jpg" max-height="800px"></v-img>
    <v-container class="pa-10" fluid>
      <div class="d-flex justify-space-between">
        <router-link :to="{ name: 'Home' }" class="d-flex">
          <v-img src="../assets/TSVS_logo.png" height="80px" width="80px" contain></v-img>
          <div class="d-flex flex-column align-self-center ml-4">
            <span class="white--text display-1">台灣血管外科學會</span>
            <span class="white--text">Taiwan Society for Vascular Surgery</span>
          </div>
        </router-link>
        <div class="d-flex align-self-center">
          <v-btn outlined rounded color="white">會員登入</v-btn>
          <v-btn text rounded class="ml-2" color="white">English</v-btn>
          <v-divider class="align-self-center mx-5" vertical></v-divider>
          <v-btn icon large color="#3B5998">
            <v-icon large>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon large color="#FF0000">
            <v-icon large>mdi-youtube</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="mt-8">
        <v-btn text :to="{ path: '/學會資訊' }" color="white">學會資訊</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/學會公告' }" color="white">學會公告</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/會議課程資訊' }" color="white">會議課程資訊</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/資料查詢' }" color="white">資料查詢</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/會員專區' }" color="white">會員專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/衛教專區' }" color="white">衛教專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ path: '/相關網站' }" color="white">相關網站</v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "TheNavbar"
};
</script>

<style lang="scss" scoped>
.the-navbar {
  position: relative;
  z-index: 0;

  .v-btn:before {
    background-color: transparent !important;
  }

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
