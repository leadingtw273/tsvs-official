<template>
  <div>
    <v-row>
      <v-col cols="6">
        <label class="text-h6 mb-2">分數</label>
        <v-text-field label="分數" type="number" hide-details="auto" single-line dense outlined></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="text-h6 mb-2">證明文件</label>
        <v-file-input label="證明文件" hide-details="auto" single-line dense outlined></v-file-input>
      </v-col>
      <v-col cols="12">
        <label class="text-h6 mb-2">申請原因</label>
        <v-textarea label="申請原因" hide-details="auto" single-line dense outlined></v-textarea>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-btn color="primary" class="ml-auto" @click="dialog = true">送出申請</v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="500">
      <v-card dark>
        <v-card-title class="headline primary">
          送出成功
          <v-spacer></v-spacer>
          <v-btn @click.stop="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="d-flex flex-column align-center ">
          <v-icon color="success" size="150">mdi-check-circle-outline</v-icon>
          <span class="white--text text-h6">將由學會專人為您審查，後續將以電子郵件做通知</span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" :to="{ name: 'Home' }">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Integral",
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss"></style>
