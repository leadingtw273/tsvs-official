<template>
  <div class="the-view-content-card d-flex flex-row mx-12 mb-12" v-if="!menuLoading">
    <side-bar :menuTitle="menuTitle" :menuList="menuList" />
    <v-sheet color="secondary" class="sidebar-content py-12 px-8">
      <card-header :mainText="mainText" :subText="subText"></card-header>
      <div>
        <component :is="displayComponent"></component>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SideBar from "./components/SideBar";
import CardHeader from "./components/CardHeader";
import CardContent from "./components/CardContent";
import CardContentList from "./components/CardContentList";

export default {
  name: "TheViewContentCard",
  components: { SideBar, CardHeader, CardContent, CardContentList },
  props: {
    menuTitle: {
      type: String,
      required: true
    },
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      status: false,

      navbarIndex: 0,
      sideBarIndex: 0,
      catalogIndex: 0
    };
  },
  computed: {
    ...mapState({
      menuLoading: state => state.menu.loading,
      currentMenu: state => state.menu.current
    }),
    mainText() {
      if (!this.currentMenu.navbar) return "";
      const { text } = this.currentMenu.navbar.meta;
      return typeof text === "object" ? text.zh : text;
    },
    subText() {
      if (!this.currentMenu.sidebar) return "";

      const { text } = this.currentMenu.sidebar.meta;

      return typeof text === "object" ? text.zh : text;
    },
    displayComponent() {
      if (this.$route.name === "AdminContent") {
        return "RouterView";
      }
      const componentMap = new Map([
        ["list", "CardContentList"],
        ["page", "CardContent"],
        ["component", "RouterView"]
      ]);
      return componentMap.get(this.currentMenu.menu.meta.displayType);
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.the-view-content-card {
  min-height: 500px;

  .sidebar-content {
    border-radius: 0 40px 40px 0;
    width: 80%;
  }
}
</style>
