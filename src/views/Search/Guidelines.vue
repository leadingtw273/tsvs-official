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
  name: "Guidelines",
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
          title: "參考標準文章標題",
          date: "2019-12-17",
          content: `<div class="手術準則與參考標準-參考資料內容__f82593d92a69425b93383c46fb2c79d3">
      Reporting standards of the Society for Vascular Surgery for thoracic outlet syndrome
      <br />
      <br />J Vasc Surg. 2016 Sep;64(3):e23–e35.
    </div>`,
          isAdvertising: false,
          isLogin: true
        }
      ]
    };
  },
  computed: {
    dataList() {
      return this.resourceList
        .map(({ id, title, date }) => ({ id, title, date }))
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
      this.$router.push({ name: "SearchGuidelinesItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss">
.手術準則與參考標準-參考資料內容 {
  &__f82593d92a69425b93383c46fb2c79d3 {
    font-size: 16px;
    line-height: (34 / 23);
    font-weight: 300;
    color: #121a33;
  }
}
</style>
