<template>
  <v-dialog v-model="dialog" width="500">
    <v-card dark>
      <v-card-title class="headline">
        網路錯誤
        <v-spacer></v-spacer>
        <v-btn @click.stop="dialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="d-flex flex-column align-center ">
        <v-icon color="error" size="150">mdi-alert-circle</v-icon>
        <span class="white--text text-h6">網路出了點問題! 請稍後在試</span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-btn color="white" @click.stop="prePage()" text>
          回上一頁
        </v-btn>
        <v-btn color="primary" @click="reloadPage()">
          重新整理
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NetworkError",
  data() {
    return {};
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.dialog.networkError;
      },
      set(val) {
        this.$store.dispatch("dialog/setNetworkError", val);
      }
    }
  },
  methods: {
    prePage() {
      window.history.go(-1);
      this.dialog = false;
    },
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style></style>
