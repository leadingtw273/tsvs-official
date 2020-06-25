<template>
  <div style="width: 100%;">
    <v-sheet color="transparent" class="d-flex justify-center" width="100%" v-if="enable && !isLogin">
      <div class="d-flex flex-column align-center">
        <v-icon color="primary" size="100">mdi-account-circle</v-icon>
        <div class="title">登入會員以瀏覽此資料</div>
        <div class="mt-4">
          <v-btn class="title" color="primary" :to="{ name: 'MemberSignIn' }" text small>會員登入</v-btn>
          <v-btn class="title" color="accent" :to="{ name: 'MemberSignUp' }" text small>會員註冊</v-btn>
        </div>
      </div>
    </v-sheet>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: "TheLoginRequest.vue",
  props: {
    enable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.user !== "";
    }
  }
};
</script>

<style></style>
