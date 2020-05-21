<template>
  <div class="my-12 px-12">
    <v-btn class="mb-6" color="primary" large>Save</v-btn>
    <ckeditor :editor="editor" v-model="editedData"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "ReportingStandards",
  data() {
    return {
      editor: ClassicEditor,
      editedData:
        '<div class="手術準則與參考標準-文獻報告參考內容"><div class="手術準則與參考標準-文獻報告參考內容__f82593d92a69425b93383c46fb2c79d3"> Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome <br><br>J Vasc Surg. 2016 Sep;64(3):e23–e35. </div></div>'
    };
  }
};
</script>

<style></style>
