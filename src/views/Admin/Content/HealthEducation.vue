<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <vascular-surgery-information-table></vascular-surgery-information-table>
    </div>
  </div>
</template>

<script>
import VascularSurgeryInformationTable from "../../../components/Table/Content/VascularSurgeryInformation";
import TheTagGroup from "../../../components/TheTagGroup";

export default {
  name: "HealthEducation",
  components: { TheTagGroup, VascularSurgeryInformationTable },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [{ text: "血管手術資訊", tag: "#血管手術資訊" }]
    };
  }
};
</script>

<style></style>
