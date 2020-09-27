<template>
  <div>
    <template v-if="targetId == null">
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

      <the-view-item-list :itemList="resource" @select="selectId"></the-view-item-list>

      <v-pagination
        v-if="resourceList.length > 10"
        class="mt-4"
        v-model="page"
        :length="6"
        color="primary_light_1"
        dark
      ></v-pagination>
    </template>
    <template v-else>
      <div v-html="targetItem.content"></div>
    </template>
  </div>
</template>

<script>
import TheViewItemList from "@/components/TheViewItemList";

export default {
  components: {
    TheViewItemList
  },
  props: {
    fetchUrl: {
      type: String
    }
  },
  data() {
    return {
      searchText: "",
      page: 1,
      resource: null
    };
  },
  computed: {
    targetId() {
      if (this.$route.query._id == null) return null;
      return this.$route.query._id;
    },
    targetItem() {
      if (this.targetId == null) return null;
      return this.resource.find(({ id }) => id === this.targetId);
    }
  },
  methods: {
    async fetchData() {
      // demo data
      this.resource = [
        {
          id: "1",
          title: "測試１",
          date: "2020-09-22",
          content: "這是測試資料１"
        },
        {
          id: "2",
          title: "測試２",
          date: "2020-09-21",
          content: "這是測試資料２"
        },
        {
          id: "3",
          title: "測試３",
          date: "2020-09-20",
          content: "這是測試資料３"
        },
        {
          id: "4",
          title: "測試４",
          date: "2020-09-19",
          content: "這是測試資料４"
        }
      ];
    },
    selectId(id) {
      this.$router.push({ query: { _id: id } });
    }
  },
  async created() {
    await this.fetchData();
  }
};
</script>

<style></style>
