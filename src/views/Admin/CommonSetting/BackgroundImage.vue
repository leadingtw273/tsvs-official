<template>
  <div>
    <v-sheet class="d-flex px-4 mb-6" style="width: 500px;" dark>
      <span class="align-self-center mr-6 title">頁首圖片</span>
      <v-file-input label="首頁背景圖上傳"></v-file-input>
      <v-btn class="ml-6 align-self-center" color="primary" large>Save</v-btn>
    </v-sheet>
    <v-sheet class="pa-6" width="100%" dark>
      <v-img src="@/assets/index.jpg"></v-img>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "BackgroundImage"
};
</script>

<style></style>
