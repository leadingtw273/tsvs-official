<template>
  <div>
    <div class="d-flex align-center mb-6">
      <span class=" headline primary--text">{{ date }}</span>
      <span class="ml-6 headline accent--text">{{ title }}</span>
    </div>
    <the-login-request :enable="isLogin">
      <div v-html="content"></div>
    </the-login-request>
  </div>
</template>

<script>
import TheLoginRequest from "./TheLoginRequest";

export default {
  name: "TheBaseViewData",
  components: {
    TheLoginRequest
  },
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
