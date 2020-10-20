<template>
  <div>
    <v-btn color="success" class="mb-3">保存內容</v-btn>
    <ckeditor :editor="editor" v-model="editedData"></ckeditor>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editedData:
        '<div class="聯絡資訊內容"><div class="聯絡資訊內容__f4ce9c22999a4ef4ab30c60988a4dd65"> 台內社字第0940037888號 <br><br>秘書 Secretary <br>許心慈 Hsin-Tzu Hsu <br>台灣血管外科學會 Taiwan Society for Vascular Surgery (TSVS) <br><br>ADD：111 台北市士林區文昌路95號 新光B3心臟外科辦公室 <br>95 Wen Chang Rd, Shih Lin District, Taipei, TAIWAN 11101 <br>TEL：+886-2-28332211#2083 <br>CELL：+886-966-877552 <br>OFFICE HOUR：9 AM - 5 PM <br>E-mail：4tsvs@tsvs.org </div></div>'
    };
  },
  created() {},
  async mounted() {},
  computed: {
    ...mapState({
      menu: state => state.menu.data
    })
  },
  watch: {},
  methods: {}
};
</script>
