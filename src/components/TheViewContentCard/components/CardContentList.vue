<template>
  <div v-if="!loading">
    <template v-if="!post">
      <div class="d-flex mb-4">
        <span class="ml-auto mr-2 align-self-center text-h6 ">查詢： </span>
        <v-text-field
          style="max-width: 300px;"
          v-model="searchText"
          label="關鍵字"
          hide-details="auto"
          outlined
          dense
        ></v-text-field>
      </div>

      <template v-if="posts.length > 0">
        <v-simple-table class="transparent">
          <template v-slot:default>
            <tbody>
              <tr v-for="post in posts" :key="post.id">
                <td class="title" style="width: 10rem">{{ new Date(post.createdAt).toLocaleDateString() }}</td>
                <td>
                  <v-btn text rounded @click="selectTarget(post.id)" class="text-lowercase title ">{{
                    post.title_zh
                  }}</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-pagination class="mt-4" v-model="page" :length="total" color="primary_light_1" dark></v-pagination>
      </template>
      <template v-else>
        目前無資料
      </template>
    </template>
    <template v-else>
      <div v-html="post.content"></div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      post: undefined,
      posts: [],
      loading: false,
      searchText: "",
      total: 1,
      page: 1,
      resource: null
    };
  },
  async created() {
    await this.getPosts();

    if (this.$route.query.id) {
      this.getPostDetail(parseInt(this.$route.query.id, 10));
    }
  },
  computed: {
    ...mapState({
      currentMenu: state => state.menu.current
    }),
    targetId() {
      if (this.$route.query._id == null) return null;
      return this.$route.query._id;
    },
    targetItem() {
      if (this.targetId == null) return null;
      return this.resource.find(({ id }) => id === this.targetId);
    }
  },
  watch: {
    $route: {
      deep: true,
      handler: function(oldRoute, newRoute) {
        if (oldRoute.path !== newRoute.path) {
          this.post = undefined;
          this.getPosts();
        } else if (this.$route.query.id) {
          this.getPostDetail(parseInt(this.$route.query.id, 10));
        } else {
          this.post = undefined;
          this.$router.replace({ query: {} });
        }
      }
    },
    searchText() {
      this.getPosts();
    }
  },

  methods: {
    async getPosts() {
      this.loading = true;
      const { meta } = this.currentMenu.menu;
      const data = await this.$store.dispatch("post/getPost", {
        parent: meta.id,
        keyword: this.searchText,
        size: 30
      });
      // if (!data.data || data.data.length === 0) {
      //   this.$router.push({ name: "NotFound" });
      // }
      this.posts = data.data;
      this.total = Math.ceil(data.total / 30);
      this.loading = false;
    },

    async getPostDetail(id) {
      if (this.posts.map(x => x.id).includes(id)) {
        const data = await this.$store.dispatch("post/getPostDetail", id);
        this.post = data;
      } else {
        this.$router.push({ name: "NotFound" });
      }
    },

    selectTarget(id) {
      this.$router.push({ query: { id: id } });
    }
  }
};
</script>

<style></style>
