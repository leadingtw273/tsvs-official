<template>
  <div>
    <v-btn color="success" class="mb-3" @click="handleSave" :loading="loading">保存內容</v-btn>
    <div v-if="status">
      <dynamic-form title="編輯頁面" :items="formSchema" :data.sync="form" v-on:save="handleSave" hide-footer>
        <div class="text-caption mb-1" style="color:#00000099">文章內容</div>
        <!-- <ckeditor v-model="editorContent" :editor="editor" :config="editorConfig"></ckeditor> -->
        <field-ckeditor :content.sync="form.content"></field-ckeditor>
      </dynamic-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DynamicForm from "@/components/DynamicForm/Form";
import FieldCkeditor from "@/components/DynamicForm/FieldCkeditor";

export default {
  props: {
    data: {
      default: () => []
    }
  },
  components: { DynamicForm, FieldCkeditor },
  data() {
    return {
      status: false,
      loading: false,
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
      form: {
        title_zh: "",
        title_en: "",
        content: "",
        locked: false,
        attachments: []
      }
    };
  },
  async mounted() {
    if (this.data.length > 0) {
      const data = this.data[0];
      this.form = {
        title_zh: data.title_zh,
        title_en: data.title_en,
        content: data.content,
        locked: data.locked,
        attachments: data.attachments,
        type: 1,
        catalog: data.catalog
      };
      this.editorContent = data.content;
    }
    this.status = true;
  },
  computed: {
    ...mapState({
      menu: state => state.menu.data,
      currentMenu: state => state.menu.current
    })
  },
  methods: {
    async handleSave() {
      this.loading = true;
      if (this.data.length > 0) {
        await this.update();
      } else {
        await this.save();
      }
      this.loading = false;
    },
    async save() {
      const menuId = this.currentMenu.menu.meta.id;
      this.form.catalog = menuId;
      this.form.type = 1;
      this.form.content = this.editorContent;

      this.$store.dispatch("post/createPost", this.form);
    },
    async update() {
      console.log(JSON.parse(JSON.stringify(this.form)));
      this.$store.dispatch("post/updatePost", {
        id: this.data[0].id,
        ...this.form
      });
    }
  }
};
</script>
