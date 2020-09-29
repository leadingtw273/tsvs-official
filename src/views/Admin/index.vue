<template>
  <router-view v-if="$store.getters['user/status'] === 'success'"></router-view>
</template>

<script>
export default {
  name: "Admin"
};
</script>

<style></style>
