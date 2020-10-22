<template>
  <div>
    <div class="mb-3">
      <v-btn class="mr-3" color="#1f2c58" dark @click="handleEditMenu">編輯 Menu</v-btn>
      <v-btn color="grey" dark @click="deleteMenu">移除 Menu</v-btn>
      <v-spacer />
    </div>

    <dialog-form
      title="更新 Menu"
      :isOpen.sync="isOpen"
      :items="formSchema"
      :data.sync="formData"
      okLabel="更新"
      v-on:save="handleSave"
    />
    <div v-if="!loading">
      <editor-page v-if="currentMenu.menu.meta.displayType === 'page'" />
      <editor-list v-else-if="currentMenu.menu.meta.displayType === 'list'" />
      <div v-else-if="currentMenu.menu.meta.displayType === 'menu'">
        該頁面為 Navbar, 請新增子分類
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DialogForm from "@/components/DialogForm/Form";
import EditorPage from "@/layout/admin/page";
import EditorList from "@/layout/admin/list";

export default {
  components: { DialogForm, EditorPage, EditorList },
  data() {
    return {
      isOpen: false,
      formData: {},
      formSchema: [
        { name: "name_zh", label: "中文名稱", col: 6, required: true },
        { name: "name_en", label: "英文名稱", col: 6, required: true },
        {
          name: "locked",
          col: 6,
          label: "是否需要登入",
          type: "select",
          default: true,
          items: [
            { label: "是", value: true },
            { label: "否", value: false }
          ]
        },
        {
          name: "type",
          type: "select",
          readonly: true,
          label: "類別",
          default: 0,
          col: 6,
          items: [
            { label: "清單", value: 0 },
            { label: "頁面", value: 1 },
            { label: "文章列表", value: 2 },
            { label: "相簿", value: 3 },
            { label: "其他", value: 4 }
          ]
        },
        { name: "priority", type: "number", label: "顯示順序(數字越小越前)", default: 0, col: 6 }
      ],
      loading: false,
      post: []
    };
  },
  created() {
    const firstMenu = this.menu[0];
    const route = {
      name: this.$route.name,
      params: {}
    };

    if (firstMenu.children.length > 0) {
      if (firstMenu.children[0].children.length > 0) {
        route.params.catalog = firstMenu.children[0].children[0].name;
      }
      route.params.sidebar = firstMenu.children[0].name;
    }
    route.params.navbar = firstMenu.name;

    this.$router.push(route);
  },
  async mounted() {},
  computed: {
    ...mapState({
      menu: state => state.menu.data,
      currentMenu: state => state.menu.current
    })
  },
  watch: {
    currentMenu: {
      deep: true,
      immediate: true,
      handler: async function() {
        // this.getPost();
      }
    }
  },
  methods: {
    async getPost() {
      this.loading = true;
      const { meta } = this.currentMenu.menu;
      const post = await this.$store.dispatch("post/getPost", {
        parent: meta.id
      });
      this.post = post.data;
      this.loading = false;
    },
    async handleSave(data, cb) {
      const { meta } = this.currentMenu.menu;
      await this.$store.dispatch("menu/updateMenu", { id: meta.id, ...data });
      cb();
      await this.$store.dispatch("menu/getMenu");
    },
    handleEditMenu() {
      const { meta } = this.currentMenu.menu;
      this.formData = {
        name_zh: meta.text.zh,
        name_en: meta.text.en,
        type: meta.type,
        locked: meta.requiresAuth,
        priority: meta.priority
      };
      this.isOpen = true;
    },
    async deleteMenu() {
      const { meta } = this.currentMenu.menu;
      if (confirm("是否確定要刪除?")) {
        await this.$store.dispatch("menu/deleteMenu", meta.id);
        await this.$store.dispatch("menu/getMenu");
      }
    }
  }
};
</script>
