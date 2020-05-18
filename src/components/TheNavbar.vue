<template>
  <v-sheet class="the-navbar" color="transparent">
    <v-img class="image" src="../assets/index.jpg" max-height="800px"></v-img>
    <v-container class="pa-10" fluid>
      <div class="d-flex justify-space-between">
        <router-link :to="{ name: 'Home' }" tag="button">
          <div class="d-flex">
            <v-img src="../assets/TSVS_logo.png" height="80px" width="80px" contain></v-img>
            <div class="d-flex flex-column align-self-center ml-4">
              <span class="white--text display-1">台灣血管外科學會</span>
              <span class="white--text">Taiwan Society for Vascular Surgery</span>
            </div>
          </div>
        </router-link>
        <div class="d-flex align-self-center">
          <v-btn outlined rounded :to="{ name: 'MemberSignIn' }" color="white">會員登入</v-btn>
          <v-btn
            rounded
            class="ml-4"
            color="accent"
            @click="pushToPage('Admin')"
            v-if="userType === 0 && pageType === 'normal'"
            >後臺管理</v-btn
          >
          <v-btn
            rounded
            class="ml-4"
            color="primary"
            @click="pushToPage('Home')"
            v-if="userType === 0 && pageType === 'admin'"
            >一般頁面</v-btn
          >
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
      <div class="mt-8" v-if="pageType === 'admin'">
        <v-btn text :to="{ name: 'AdminMember' }" color="white">會員管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'AdminContent' }" color="white">內容管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'AdminEvents' }" color="white">活動管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'AdminAnnualMeeting' }" color="white">年會頁面管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'AdminMoodle' }" color="white">學習專區</v-btn>
      </div>
      <div class="mt-8" v-else>
        <v-btn text :to="{ name: 'About' }" color="white">學會資訊</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'News' }" color="white">學會公告</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'Events' }" color="white">會議課程資訊</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'Search' }" color="white">資料查詢</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'Member' }" color="white">會員專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'HealthEducation' }" color="white">衛教專區</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text :to="{ name: 'WebsitesLink' }" color="white">相關網站</v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "TheNavbar",
  computed: {
    userType() {
      return this.$store.state.userType;
    },
    pageType() {
      return this.$store.state.view;
    }
  },
  data() {
    return {};
  },
  methods: {
    pushToPage(page) {
      switch (page) {
        case "admin":
          this.$store.commit("checkoutAdminViewPage");
          break;
        case "home":
          this.$store.commit("checkoutNormalViewPage");
          break;
        default:
          this.$store.commit("checkoutNormalViewPage");
      }
      this.$router.push({ name: page });
    }
  }
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
