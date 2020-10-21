<template>
  <div>
    <v-data-table :headers="headers" :items="data" class="elevation-1" :loading="loading.list" hide-default-footer>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="openDialog(item)">mdi-pencil</v-icon>
        <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
      </template>

      <template v-slot:item.content="{ item }">
        <v-dialog max-width="75%" dark scrollable>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="review(item)">預覽</v-btn>
          </template>

          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>預覽</v-toolbar-title>
              <v-progress-linear
                :active="loading.post"
                :indeterminate="loading.post"
                absolute
                bottom
                color="#eaedf7"
              ></v-progress-linear>
            </v-toolbar>
            <v-card-title class="headline" primary-title> </v-card-title>

            <v-card-text>
              <v-sheet class="secondary pa-12 black--text" style="border-radius: 40px;">
                <v-container>
                  <div v-if="!loading.post" v-html="form.content"></div>
                </v-container>
              </v-sheet>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:top>
        <v-toolbar flat dark color="#1f2c58">
          <v-toolbar-title>{{ currentMenu.menu.meta.text.zh }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="success" @click.stop="openDialog()" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" persistent>
      <dynamic-form title="編輯頁面" :items="formSchema" :data.sync="form" hide-footer v-if="dialog">
        <template v-slot:toolbar-append>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>

        <template v-slot:toolbar-after>
          <v-btn class="mr-3" icon dark @click="handleSave()">保存</v-btn>
        </template>

        <div class="text-caption mb-1" style="color:#00000099">文章內容</div>
        <field-ckeditor :content.sync="form.content"></field-ckeditor>
      </dynamic-form>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DynamicForm from "@/components/DynamicForm/Form";
import FieldCkeditor from "@/components/DynamicForm/FieldCkeditor";

export default {
  components: { DynamicForm, FieldCkeditor },
  data() {
    return {
      dialog: false,
      loading: {
        list: true,
        post: false
      },
      formSchema: [
        { name: "title_zh", label: "中文標題", col: 6, required: true },
        { name: "title_en", label: "英文標題", col: 6, required: true },
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
        }
      ],
      headers: [
        { text: "標題", value: "title_zh" },
        { text: "內容", value: "content", align: "center" },
        { text: "執行", value: "actions", sortable: false }
      ],
      data: [],
      form: {
        title_zh: "",
        title_en: "",
        content: "",
        locked: false,
        attachments: []
      }
    };
  },
  created() {
    this.getPosts();
  },
  computed: {
    ...mapState({
      menu: state => state.menu.data,
      currentMenu: state => state.menu.current
    }),
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "編輯";
    }
  },
  watch: {
    dialog(open) {
      if (!open) {
        this.resetForm();
      }
    }
  },

  methods: {
    async getPosts() {
      this.loading.list = true;
      const { meta } = this.currentMenu.menu;
      const data = await this.$store.dispatch("post/getPost", {
        parent: meta.id
      });
      this.data = data;
      this.loading.list = false;
    },
    async getPostDetail(id) {
      this.loading.post = true;
      const post = await this.$store.dispatch("post/getPostDetail", id);
      this.loading.post = false;
      return post;
    },
    async review(form) {
      const post = await this.getPostDetail(form.id);
      this.form = {
        id: post.id,
        title_zh: post.title_zh,
        title_en: post.title_en,
        content: post.content,
        locked: post.locked
      };
    },
    async openDialog(form = {}) {
      if (form.id) {
        const post = await this.getPostDetail(form.id);
        this.$set(this, "form", {
          id: post.id,
          title_zh: post.title_zh,
          title_en: post.title_en,
          content: post.content,
          locked: post.locked
        });
      }
      this.dialog = true;
    },
    async handleSave() {
      this.loading.post = true;
      if (this.form.id) {
        await this.update();
      } else {
        await this.save();
      }
      this.loading.post = false;
      this.resetForm();

      this.getPosts();

      this.dialog = false;
    },
    async save() {
      const menuId = this.currentMenu.menu.meta.id;
      this.form.catalog = menuId;
      this.form.type = 2;

      this.$store.dispatch("post/createPost", this.form);
    },
    async update() {
      this.$store.dispatch("post/updatePost", this.form);
    },
    async deleteItem(form) {
      if (confirm("確定要刪除?")) {
        await this.$store.dispatch("post/deletePost", form.id);
        this.getPosts();
      }
    },
    resetForm() {
      this.$set(this, "form", {
        title_zh: "",
        title_en: "",
        content: "",
        locked: false
      });
    }
  }
};
</script>

<style></style>
