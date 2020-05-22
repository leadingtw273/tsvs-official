<template>
  <div class="my-12 px-12">
    <v-btn class="mb-6" color="primary" large>Save</v-btn>
    <ckeditor :editor="editor" v-model="editedData"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "{{ pascalCase name }}",
  data() {
    return {
      editor: ClassicEditor,
      editedData: ""
    };
  }
};
</script>

<style></style>
