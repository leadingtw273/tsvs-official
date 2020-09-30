<template>
  <div>
    <template v-if="viewItem == null">
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

      <the-view-item-list :itemList="dataList" @select="showContent"></the-view-item-list>

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
      <div v-html="viewItem.content"></div>
    </template>
  </div>
</template>

<script>
import TheViewItemList from "@/components/TheViewItemList";
import dayjs from "dayjs";

export default {
  name: "Download",
  components: { TheViewItemList },
  data() {
    return {
      searchText: "",
      page: 1,
      resourceList: [
        {
          id: "01",
          class: "資料查詢",
          image: "",
          title: "手術例數申報表",
          date: "2019-12-17",
          content: ``,
          link: "123",
          isAdvertising: false,
          isLogin: true
        },
        {
          id: "02",
          class: "資料查詢",
          image: "",
          title: "手術例數申報表_使用介紹",
          date: "2019-06-06",
          content: ``,
          link: "123",
          isAdvertising: false,
          isLogin: true
        }
      ]
    };
  },
  computed: {
    dataList() {
      return this.resourceList
        .map(({ id, title, date, link }) => ({ id, title, date, link }))
        .sort(({ date: mainDate }, { date: subDate }) => {
          if (dayjs(mainDate).isBefore(dayjs(subDate))) return 1;
          if (dayjs(subDate).isBefore(dayjs(mainDate))) return -1;
          return 0;
        });
    },
    viewItem() {
      return this.resourceList.find(({ id }) => id === this.$route.params.id);
    }
  },
  methods: {
    showContent(targetId) {
      this.$router.push({ name: "SearchRecordItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss"></style>
