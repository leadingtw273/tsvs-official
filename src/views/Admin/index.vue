<template>
  <router-view v-if="$store.state.user.name && $store.state.user.name.length > 0"></router-view>
</template>

<script>
export default {
  name: "Admin"
};
</script>

<style></style>
