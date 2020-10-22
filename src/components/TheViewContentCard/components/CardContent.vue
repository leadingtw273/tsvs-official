<template>
  <div class="my-12 px-12" v-html="data"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: "",
      loading: false
    };
  },
  async created() {
    await this.getPosts();
  },
  computed: {
    ...mapState({
      currentMenu: state => state.menu.current
    })
  },
  methods: {
    async getPosts() {
      this.loading = true;
      const { meta } = this.currentMenu.menu;
      const data = await this.$store.dispatch("post/getPost", {
        parent: meta.id
      });
      if (!data || data.length === 0) {
        this.$router.push({ name: "NotFound" });
      }
      this.data = data.data[0].content;
      this.loading = false;
    }
  }
};
</script>

<style></style>
