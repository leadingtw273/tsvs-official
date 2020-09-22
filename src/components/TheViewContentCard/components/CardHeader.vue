<template>
  <div class="d-flex flex-row mb-6">
    <v-btn icon text large class="primary--text" @click="$router.back()">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="d-flex">
      <v-divider class="mx-6" color="black" vertical></v-divider>
      <span class="headline align-self-center">{{ mainText }}</span>
    </div>
    <div class="d-flex" v-if="subText !== ''">
      <v-divider class="mx-6" color="black" vertical></v-divider>
      <span class="headline align-self-center">{{ subText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      required: true
    },
    subText: {
      type: String
    }
  }
};
</script>

<style></style>
