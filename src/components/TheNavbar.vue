<template>
  <v-sheet class="the-navbar" color="transparent">
    <v-img class="image" src="../assets/index.jpg" max-height="800px"></v-img>
    <v-container class="pa-10" fluid>
      <div class="d-flex justify-space-between">
        <router-link class="d-flex" :to="{ name: 'Home' }" tag="a" style="text-decoration:none;">
          <v-img src="../assets/TSVS_logo.png" height="80px" width="80px" contain></v-img>
          <div class="d-flex flex-column align-self-center ml-4">
            <span class="white--text display-1 text-shadow">台灣血管外科學會</span>
            <span class="white--text text-shadow">Taiwan Society for Vascular Surgery</span>
          </div>
        </router-link>
        <div class="d-flex align-self-center">
          <v-btn outlined class="text-shadow" rounded color="white" @click="signOut()" v-if="userName != null">
            會員登出
          </v-btn>
          <v-btn
            outlined
            class="text-shadow"
            rounded
            :to="{ name: 'MemberSignIn' }"
            color="white"
            v-if="userName == null"
          >
            會員登入
          </v-btn>
          <template v-if="userName != null && userRole != 999">
            <v-btn
              rounded
              class="ml-4 text-shadow"
              color="accent"
              @click="pushToPage('AdminCommonSetting')"
              v-if="pageType === 'normal'"
            >
              後臺管理
            </v-btn>
            <v-btn
              rounded
              class="ml-4 text-shadow"
              color="primary"
              @click="pushToPage('Home')"
              v-if="pageType === 'admin'"
            >
              一般頁面
            </v-btn>
          </template>
          <v-btn text rounded class="ml-2 text-shadow" color="white">English</v-btn>
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
        <v-btn text class="title text-shadow" :to="{ name: 'AdminCommonSetting' }" color="white">一般設定</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text class="title text-shadow" :to="{ name: 'AdminMember' }" color="white">會員管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text class="title text-shadow" :to="{ name: 'AdminContent' }" color="white">內容管理</v-btn>
        <v-divider class="align-self-center mx-1" vertical></v-divider>
        <v-btn text class="title text-shadow" href="https://tsvs-admin.netlify.app/" color="white">年會頁面管理</v-btn>
      </div>

      <div class="mt-8" v-else>
        <template v-for="(navbar, i) in navbars">
          <v-btn text class="title text-shadow" color="white" @click="routerGo(navbar)" :key="i">
            {{ navbar.meta ? navbar.meta.text.zh : navbar.name }}
          </v-btn>

          <v-divider
            class="align-self-center mx-1"
            vertical
            v-if="i !== navbars.length - 1"
            :key="i + '_divider'"
          ></v-divider>
        </template>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TheNavbar",
  computed: {
    ...mapState({
      menu: state => state.menu.data
    }),
    userName() {
      return this.$store.getters["user/name"];
    },
    userRole() {
      return this.$store.getters["user/role"];
    },
    pageType() {
      return this.$store.state.view;
    },
    navbars() {
      return this.menu.filter(x => !x.meta.admin);
    }
  },
  created() {
    console.log(this.menu);
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
    },
    signOut() {
      this.$store.dispatch("user/signOut");
      this.$router.push({ name: "Home" });
    },
    routerGo(route) {
      let path = "/";
      path += route.path;
      if (route.children && route.children.length > 0) {
        const sidebar = route.children[0];
        path += "/" + sidebar.path;
        if (sidebar.children && sidebar.children.length > 0) {
          const catalog = sidebar.children[0];
          path += "/" + catalog.path;
        }
      }

      if (this.$route.path === path) return;

      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.the-navbar {
  position: relative;
  z-index: 0;

  .text-shadow {
    text-shadow: 2px 2px 2px black;
  }

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
