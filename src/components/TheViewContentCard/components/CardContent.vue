<template>
  <div class="my-12 px-12" v-html="resource"></div>
</template>

<script>
export default {
  props: {
    fetchUrl: {
      type: String
    }
  },
  data() {
    return {
      resource: null
    };
  },
  methods: {
    async fetchData() {
      // get data
      this.resource = "demo Data";
    }
  },
  async created() {
    await this.fetchData();
  }
};
</script>

<style></style>
