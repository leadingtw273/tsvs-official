<template>
  <div>
    <v-sheet color="transparent" max-width="500px">
      <div class="d-flex mb-6">
        <span class="align-self-center mr-6">帳號</span>
        <v-text-field label="帳號" v-model="userAccount" outlined hide-details="auto"></v-text-field>
      </div>
      <div class="d-flex mb-6">
        <span class="align-self-center mr-6">密碼</span>
        <v-text-field label="密碼" outlined hide-details="auto"></v-text-field>
      </div>
      <div class="d-flex justify-end mb-4">
        <v-btn class="mr-6" color="primary" @click="signIn()" rounded>登入</v-btn>
        <v-btn color="primary" rounded>忘記密碼</v-btn>
      </div>
      <div class="d-flex flex-column">
        <span class="primary--text">＊第一次登入時帳號及密碼為身份證號碼，建議同時更改密碼</span>
        <span class="primary--text">＊會員的帳號為身份證字號, 密碼為 9 位數: 身分證後五碼緊接著生日四碼 mmdd</span>
        <span class="accent--text">＊帳號或密碼輸入錯誤，請重新輸入。</span>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      userAccount: ""
    };
  },
  methods: {
    signIn() {
      this.$store.commit("setUser", this.userAccount);
    }
  }
};
</script>

<style lang="scss"></style>
