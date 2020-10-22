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
  computed: {
    ...mapState({
      currentMenu: state => state.menu.current,
      menu: state => state.menu.data
    }),
    isAdminContent() {
      return this.$route.name === "AdminContent";
    }
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler: function() {
        this.status = false;
        const newMenu = this.getCurrentMenu();
        this.$store.commit("menu/SET_APP_CURRENT_MENU", newMenu);

        if (!this.isAdminContent) {
          this.config.menuList = newMenu.navbar.children;
          this.config.menuTitle = newMenu.navbar.meta.text ? newMenu.navbar.meta.text.zh : newMenu.navbar.name;
        } else {
          this.config.menuList = this.menu.filter(x => !x.meta.admin);
          this.config.menuTitle = newMenu.navbar.meta.text ? newMenu.navbar.meta.text.zh : newMenu.navbar.name;
        }

        this.status = true;
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
      const isAdmin = this.$route.matched.some(x => x.meta && x.meta.admin);
      if (isAdmin && !this.isAdminContent) {
        navbarItem = this.menu.find(x => x.name === this.$route.matched[0].name);
        menu = navbarItem;

        if (navbarItem && navbarItem.children && navbarItem.children.length > 0) {
          sidebarItem = navbarItem.children.find(x => x.name === this.$route.matched[1].name);
          menu = sidebarItem;
        }

        if (sidebarItem && sidebarItem.children && sidebarItem.children.length > 0) {
          catalogItem = sidebarItem.children.find(x => x.name === this.$route.matched[2].name);
          menu = catalogItem;
        }
      } else {
        navbarItem = this.menu.find(x => x.path === navbar);

        if (!navbarItem && this.isAdminContent) {
          navbarItem = this.menu[0];
        }
        menu = navbarItem;

        if (sidebar) {
          sidebarItem = navbarItem.children.find(x => x.path === sidebar);
          menu = sidebarItem;
        }

        if (catalog) {
          catalogItem = sidebarItem.children.find(x => x.path === catalog);
          menu = catalogItem;
        }
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
