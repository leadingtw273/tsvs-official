<template>
  <v-btn
    @click="pushLink()"
    :color="textColor"
    class="text-lowercase"
    v-text="text"
    tag="button"
    text
    small
    rounded
  ></v-btn>
</template>

<script>
export default {
  name: "BtnMoreLink",
  props: {
    textColor: {
      type: String,
      default: "black"
    },
    text: {
      type: String,
      default: "more >>"
    },
    to: {
      type: Object,
      default() {
        return {
          name: "Home"
        };
      }
    }
  },
  methods: {
    pushLink() {
      this.$router.push(this.to);
    }
  }
};
</script>

<style></style>
