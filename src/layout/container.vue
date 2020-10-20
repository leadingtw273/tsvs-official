<template>
  <the-view-content-card v-if="status" v-bind="config"></the-view-content-card>
</template>

<script>
import { mapState } from "vuex";
import TheViewContentCard from "@/components/TheViewContentCard";

export default {
  name: "Content",
  components: { TheViewContentCard },
  data() {
    return {
      status: false,
      config: {
        menuTitle: "",
        menuList: []
      }
    };
  },
  created() {
    this.config.menuList = this.menu;

    const rootMenu = this.$route.matched.find(x => x.meta && x.meta.displayType === "menu");
    this.config.menuTitle = rootMenu.meta ? rootMenu.meta.text.zh : "";
    this.status = true;
    this.$store.commit("menu/SET_APP_CURRENT_MENU", this.getCurrentMenu());
  },
  computed: {
    ...mapState({
      menu: state => state.menu.data
    })
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function() {
        this.$store.commit("menu/SET_APP_CURRENT_MENU", this.getCurrentMenu());
      }
    }
  },
  methods: {
    getCurrentMenu() {
      const { navbar, sidebar, catalog } = this.$route.params;
      let navbarItem,
        sidebarItem,
        catalogItem,
        menu = undefined;

      navbarItem = this.menu.find(x => x.path === navbar);
      menu = navbarItem;

      if (sidebar) {
        sidebarItem = navbarItem.children.find(x => x.path === sidebar);
        menu = sidebarItem;
      }

      if (catalog) {
        catalogItem = sidebarItem.children.find(x => x.path === catalog);
        menu = catalogItem;
      }

      return {
        navbar: navbarItem,
        sidebar: sidebarItem,
        catalog: catalogItem,
        menu
      };
    }
  }
};
</script>

<style></style>
