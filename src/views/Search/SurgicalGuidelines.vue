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
  name: "SurgicalGuidelines",
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
          title: "手術準則文章標題",
          date: "2019-12-17",
          content: `<div class="手術準則與參考標準-手術準則內容">
    <div class="手術準則與參考標準-手術準則內容__a8d98fcb34f64f60bb20825b05a198d3">
      Global Vascular Guidelines for patients with chronic limb-threatening ischemia
      <br />
      <br />J Vasc Surg 2019;69(6 Suppl)
      <br />
      <br />The Society for Vascular Surgery practice guidelines on follow-up after vascular surgery arterial procedures
      <br />
      <br />J Vasc Surg 2018;68:1
      <br />
      <br />Abstract Although follow-up after open surgical and endovascular procedures is generally regarded as an
      important part of the care provided by vascular surgeons, there are no detailed or comprehensive guidelines that
      specify the optimal approaches with regard to testing methods, indications for reintervention, and follow-up
      intervals. To provide guidance to the vascular surgeon, the Clinical Practice Council of the Society for Vascular
      Surgery appointed an expert panel and a methodologist to review the current clinical evidence and to develop
      recommendations for follow-up after vascular surgery procedures. For those procedures for which high-quality
      evidence was not available, recommendations were based on observational studies, committee consensus, and indirect
      evidence. Recognizing that there are numerous published reports on the role of duplex ultrasound for surveillance
      of infrainguinal vein bypass grafts, the Society commissioned a systematic review and meta-analysis on this topic.
      <br />
      <br />The panel classified the strength of each recommendation and the corresponding quality of evidence on the
      basis of the Grading of Recommendations Assessment, Development, and Evaluation (GRADE) system: recommendations
      were graded either strong or weak, and the quality of evidence was graded high, moderate, or low. The resulting
      recommendations represent a wide variety of open surgical and endovascular procedures involving the extracranial
      carotid artery, thoracic and abdominal aorta, mesenteric and renal arteries, and lower extremity arterial
      revascularization. The panel also identified many areas in which there was a lack of high-quality evidence to
      support their recommendations. This suggests that there are opportunities for further clinical research on testing
      methods, threshold criteria, and the role of surveillance as well as on the modes of failure and indications for
      reintervention after vascular surgery procedures.
    </div>
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
      this.$router.push({ name: "SearchSurgicalGuidelinesItem", params: { id: targetId } });
    }
  }
};
</script>

<style lang="scss" scoped>
.手術準則與參考標準-手術準則內容 {
  &__a8d98fcb34f64f60bb20825b05a198d3 {
    font-size: 16px;
    line-height: (34 / 23);
    font-weight: 300;
    color: #121a33;
  }
}
</style>
