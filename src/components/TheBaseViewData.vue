<template>
  <div>
    <div class="d-flex align-center mb-6">
      <v-btn icon text large class="primary--text" @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <span class="ml-6 headline primary--text">{{ date }}</span>
      <span class="ml-6 headline accent--text">{{ title }}</span>
    </div>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "TheBaseViewData",
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
    }
  }
};
</script>

<style></style>
