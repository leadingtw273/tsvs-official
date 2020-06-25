<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-6 px-12">
      <v-btn class="mb-6" color="primary" large>Save</v-btn>
      <ckeditor :editor="editor" v-model="editedData"></ckeditor>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TheTagGroup from "../../../../components/TheTagGroup";

export default {
  name: "CourseApplicationEditor",
  components: { TheTagGroup },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "會議課程活動申請辦法", tag: "#會議課程活動申請辦法" },
        { text: "積分申請", tag: "#積分申請" }
      ],
      editor: ClassicEditor
    };
  },
  computed: {
    editedData() {
      switch (this.contentItemIndex) {
        case 0:
          return '<div class="申請繼續教育積分-會議課程活動申請辦法內容"><div class="申請繼續教育積分-會議課程活動申請辦法內容__b887817673f24f6e87553727af3aca2e"> Bank Information for International Wire Transfer <br>Bank Name: Taiwan Cooperative Bank, Chang Gung Branch (006) <br>Bank Address: 5. FU-HSING STREET. KUEI SHAN HSIANG, TAOYUAN HSIEN, TAIWAN, R.O.C. <br>Account Name: Taiwan Society for Vascular Surgery <br>Account number: 3638717000159 <br>Swift Code: TACBTWTP543 </div></div>';
        case 1:
          return "N/A";
        default:
          return "N/A";
      }
    }
  }
};
</script>

<style></style>
