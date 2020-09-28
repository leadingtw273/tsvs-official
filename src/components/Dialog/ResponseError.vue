<template>
  <v-dialog v-model="show" width="500">
    <v-card dark>
      <v-card-title class="headline">
        操作錯誤
        <v-spacer></v-spacer>
        <v-btn @click.stop="dialog = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="d-flex flex-column align-center">
        <v-icon color="error" size="150">mdi-alert-circle</v-icon>
        <span class="white--text text-h6">{{ content.msg }}</span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-btn color="white" @click.stop="show = false" text>
          確定
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ResponseError",
  data() {
    return {};
  },
  computed: {
    content() {
      return this.$store.state.dialog.responseError;
    },
    show: {
      get() {
        return this.content.show;
      },
      set(val) {
        if (!val) {
          this.$store.dispatch("dialog/setResponseError", {
            show: false,
            code: null,
            detail: "",
            msg: ""
          });
        }
      }
    }
  }
};
</script>

<style></style>
