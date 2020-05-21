<template>
  <div class="my-12 px-12">
    <v-btn class="mb-6" color="primary" large>Save</v-btn>
    <ckeditor :editor="editor" v-model="editedData"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "Link",
  data() {
    return {
      editor: ClassicEditor,
      editedData:
        '<div class="衛服部連結內容"><div class="衛服部連結內容__0497399d91f141c6aefd225d39503cc4 mb-6">健保血管特材給付規定(適應症/分類碼)</div><div class="衛服部連結內容__c79463cc70444a83b3693c2b3b7198a3"> 分類碼 品名表 <br>A220-1 頸動脈支架 CAROTID STENT <br>A220-2 腸骨動脈血管支架 <br>A220-3 腹主動脈瘤支架 <br>A220-4 淺股動脈血管支架 <br>A220-5 血管治療導管(下肢) <br>A220-6 胸主動脈支架系統 <br>A220-7 藥物釋放型冠狀動脈氣球導管 <br>A220-8 腎動脈血管支架系統之給付規定 <br>A220-9 周邊血管支架(含人工血管)之給付規定 <br>A220-10 開窗型客製化腹主動脈瘤支架 <br>A220-11 周邊動脈血管支架及傳輸裝置(球擴式覆膜支架) <br>A216-8 高壓注射式 PORT-A NEEDLE <br>B301-4 血栓濾過導引線系統 <br>B301-5 周邊動脈血栓移除系統組 </div></div>'
    };
  }
};
</script>

<style></style>
