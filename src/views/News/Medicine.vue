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
  name: "Medicine",
  components: { TheViewItemList },
  data() {
    return {
      searchText: "",
      resourceList: [
        {
          id: "01",
          class: "醫學新知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-18",
          content:
            '<div class="醫學新知-2018-6-24-內容"><div class="醫學新知-2018-6-24-內容__8947ef70c77a469186d430d94ceed76a"> AAA病人接受EVAR出現Postimplantation syndrome對預後的影響 <br><br>檔案載點 <br><br>Prospective evaluation of postimplantation syndrome evolution on patient outcomes after endovascular aneurysm repair for abdominal aortic aneurysm <br>J Vasc Surg. 2016 May;63(5):1248-55 <br>門諾醫院 黃振銘醫師整理 </div></div>',
          isAdvertising: false,
          isLogin: false
        },
        {
          id: "02",
          class: "醫學新知",
          image: "",
          title: "血管外科健保申報共識",
          date: "2019-10-17",
          content:
            '<div class="醫學新知-2018-4-3-內容"><div class="醫學新知-2018-4-3-內容__e352205fd5a4426ab5bf73d40a158e0f"> Hybrid Endovascular Approach for Aberrant Subclavian Arterial Aneurysm <br><br>檔案載點 <br><br>A 10-year Experience Using a Hybrid Endovascular Approach to Treat Aberrant Subclavian Arterial Aneurysms[1] <br>Mathew Wooster et al., Ann Vasc Surg 2018; 46: 60–64 <br>花蓮慈濟 鄭伊佐醫師整理 </div></div>',
          isAdvertising: false,
          isLogin: false
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
      this.$router.push({ name: "NewsMedicineItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss">
.醫學新知-2018-6-24-內容 {
  &__8947ef70c77a469186d430d94ceed76a {
    font-size: 15px;
    color: #121a33;
  }
}
.醫學新知-2018-4-3-內容 {
  &__e352205fd5a4426ab5bf73d40a158e0f {
    font-size: 15px;
    color: #121a33;
  }
}
</style>
