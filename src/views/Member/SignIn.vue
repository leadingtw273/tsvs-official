<template>
  <div>
    <v-sheet color="transparent" max-width="500px">
      <div class="d-flex mb-6">
        <span class="align-self-center mr-6 text-h5">帳號</span>
        <v-text-field label="請輸入帳號" v-model="username" outlined hide-details="auto"></v-text-field>
      </div>
      <div class="d-flex mb-6">
        <span class="align-self-center mr-6 text-h5">密碼</span>
        <v-text-field label="請輸入密碼" v-model="password" type="password" outlined hide-details="auto"></v-text-field>
      </div>
      <div class="d-flex justify-end mb-4">
        <v-btn class="mr-6" color="primary" @click="signIn()" rounded>登入</v-btn>
        <v-btn color="primary" rounded>忘記密碼</v-btn>
      </div>
      <div class="d-flex flex-column">
        <span class="primary--text">＊第一次登入時帳號及密碼為身份證號碼，建議同時更改密碼</span>
        <span class="primary--text">＊會員的帳號為身份證字號, 密碼為 9 位數: 身分證後五碼緊接著生日四碼 mmdd</span>
        <span class="accent--text" v-show="faileTextShow">＊帳號或密碼輸入錯誤，請重新輸入。</span>
      </div>
    </v-sheet>

    <v-dialog v-model="dialog" width="500">
      <v-card dark>
        <v-card-title class="headline primary">
          登入成功
          <v-spacer></v-spacer>
          <v-btn @click.stop="dialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="d-flex flex-column align-center ">
          <v-icon color="success" size="150">mdi-check-circle-outline</v-icon>
          <span class="white--text text-h6">歡迎回來 {{ $store.getters["user/name"] }}</span>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" :to="{ name: 'Home' }">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      success: null,
      dialog: false,
      loading: false
    };
  },
  computed: {
    faileTextShow() {
      return this.success != null && this.success === false;
    }
  },
  methods: {
    async signIn() {
      this.loading = true;

      await this.$store.dispatch("user/login", {
        username: this.username,
        password: this.password
      });

      if (this.$store.getters["user/status"] === "success") {
        this.dialog = true;
      } else {
        this.success = false;
      }

      this.loading = false;
    }
  }
};
</script>

<style lang="scss"></style>
