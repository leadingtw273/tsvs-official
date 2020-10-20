<template>
  <v-sheet color="primary" class="side-bar px-8 py-12" dark>
    <span class="d-flex headline mb-2 ml-4">{{ menuTitle }}</span>
    <v-btn-toggle class="d-flex flex-column" v-model="navbarIndex" color="confirm" mandatory group>
      <template v-for="(navbar, i) in menuList">
        <v-divider v-if="i !== 0" class="item-divider ml-4" :key="i + '_divider'"></v-divider>

        <v-btn class="main-menu justify-start title" :key="i + '_navbar'" @click="routeGo('navbar', navbar)">
          {{ getText(navbar.meta.text, "zh") }}
        </v-btn>

        <v-btn-toggle
          v-if="navbarIndex === i"
          class=" d-flex flex-column"
          v-model="sidebarIndex"
          color="confirm"
          :key="i + '_sub'"
          mandatory
          group
        >
          <template v-for="(sidebar, j) in navbar.children">
            <v-btn class="sub-menu subtitle-1 justify-start" @click="routeGo('sidebar', sidebar)" :key="j + '_sidebar'">
              {{ getText(sidebar.meta.text, "zh") }}
            </v-btn>

            <v-btn-toggle
              class="ml-4 d-flex flex-column"
              v-model="catalogIndex"
              v-if="sidebar.children != null && sidebarIndex === j"
              color="confirm"
              :key="j + '_catalog'"
              mandatory
              group
            >
              <template v-for="catalog in sidebar.children">
                <v-btn
                  class="sub-menu subtitle-1 justify-start"
                  @click="routeGo('catalog', catalog)"
                  :key="catalog.name"
                >
                  {{ getText(catalog.meta.text, "zh") }}
                </v-btn>
              </template>
            </v-btn-toggle>

            <div
              v-if="sidebarIndex === j"
              class="add-btn d-flex ml-12"
              style="font-size: 15px"
              @click.stop="handleCreate('catalog', sidebar)"
              :key="sidebar.name + '_addBtn'"
            >
              <v-icon color="#abbbf0" size="18" left>mdi-plus</v-icon>
              新增
            </div>
            <v-divider
              class="mt-2 mb-2 ml-6"
              style="width: 125px"
              v-if="sidebarIndex === j"
              :key="sidebar.name + '_divider'"
            />
          </template>
        </v-btn-toggle>

        <template v-if="isAdmin && isEditMenu && navbar.children != null && navbarIndex === i">
          <div class="add-btn d-flex ml-7" @click.stop="handleCreate('sidebar', navbar)" :key="i">
            <v-icon color="#abbbf0" left>mdi-plus</v-icon>
            新增
          </div>
        </template>
      </template>
    </v-btn-toggle>

    <template v-if="isAdmin && isEditMenu">
      <v-divider class="item-divider ml-4" />

      <div class="add-btn d-flex" @click="handleCreate('navbar')">
        <v-icon color="#abbbf0" left>mdi-plus</v-icon>
        新增
      </div>

      <dialog-form
        title="新增 Menu"
        :isOpen.sync="isOpen"
        :items="formSchema"
        :data.sync="formData"
        okLabel="新增"
        v-on:save="handleSave"
      />
    </template>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
import DialogForm from "@/components/DialogForm/Form";

export default {
  components: { DialogForm },

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
      navbarIndex: 0,
      sidebarIndex: 0,
      catalogIndex: 0,
      isOpen: false,
      editItem: {},
      formData: {},
      formSchema: [
        { name: "name_zh", label: "中文名稱", col: 6, required: true },
        { name: "name_en", label: "英文名稱", col: 6, required: true },
        {
          name: "locked",
          col: 6,
          label: "是否需要登入",
          type: "select",
          default: false,
          items: [
            { label: "是", value: true },
            { label: "否", value: false }
          ]
        },
        { name: "priority", type: "number", label: "顯示順序(數字越小越前)", default: 0 }
      ]
    };
  },
  computed: {
    ...mapState({
      currentMenu: state => state.menu.current,
      rootId: state => state.menu.rootId
    }),
    isAdmin: function() {
      return this.$route.matched.some(x => x.meta && x.meta.admin === true);
    },
    isEditMenu: function() {
      return this.$route.matched.some(x => x.name === "AdminContent");
    }
  },
  methods: {
    handleCreate(type, parent) {
      this.formData = {};
      if (type !== "navbar") {
        this.formData.parent = parent.meta.id;
      }

      this.isOpen = true;
    },
    async handleSave(route, cb) {
      await this.$store.dispatch("menu/createMenu", route);
      await this.$store.dispatch("initApp");

      cb();
    },
    getText(text, lang = "zh") {
      if (typeof text === "object") {
        return lang ? text[lang] : text.zh;
      } else {
        return text;
      }
    },
    routeGo(type, item) {
      if (item.name === this.currentMenu.menu.name) return;
      if (item.children.length > 0) return;

      const route = {
        name: "",
        params: {}
      };

      switch (type) {
        case "navbar":
          route.name = item.name;
          route.params.navbar = item.name;
          break;

        case "sidebar":
          route.params.navbar = item.meta.parent.name;
          route.params.sidebar = item.name;
          break;

        case "catalog":
          route.params.navbar = item.meta.parent.meta.parent.name;
          route.params.sidebar = item.meta.parent.name;
          route.params.catalog = item.name;
          break;
      }

      if (this.isAdmin && this.isEditMenu) {
        route.name = "AdminContent";
      }

      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.add-btn {
  color: #abbbf0;
  cursor: pointer;
}
.side-bar {
  border-radius: 40px 0 0 40px;
  width: 20%;

  .item-divider {
    width: 65px;
    margin: 10px;

    opacity: 0.6;
    background-color: white;
  }

  .main-menu {
    height: 30px !important;
  }

  .sub-menu {
    margin: 0;
    margin-left: 20px;
    height: 30px !important;
  }

  .v-btn:before {
    background-color: transparent !important;
  }
}
</style>
