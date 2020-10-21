<template>
  <ckeditor v-model="cont" :editor="editor" :config="editorConfig" :disabled="disabled"></ckeditor>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import FileApi from "@/apis/File";

function customUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = loader => {
    return new UploadAdapter(loader);
  };
}

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file.then(async file => {
      const api = new FileApi();
      try {
        const res = await api.uploadImage(file);
        console.log(res);
        return { default: res.url, ...res };
      } catch (error) {
        console.log(error);
        throw error;
      }
    });
  }
  abort() {
    console.log("ckeditor: abort to insert image!");
  }
}
export default {
  name: "FieldCkeditor",
  props: {
    content: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        },
        language: "zh-tw",
        extraPlugins: [customUploadAdapterPlugin]
      }
    };
  },
  computed: {
    cont: {
      get: function() {
        return this.content === null ? "" : this.content;
      },
      set: function(newValue) {
        this.$emit("getContent", newValue);
        this.$emit("update:content", newValue);
      }
    }
  },
  created() {}
};
</script>

<style scoped>
.richTest {
  height: 31.25rem;
}
.ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
.ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
  height: 100px;
}
</style>
