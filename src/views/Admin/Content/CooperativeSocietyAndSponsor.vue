<template>
  <div>
    <the-tag-group :contentList="contentList" :contentItemIndex.sync="contentItemIndex"></the-tag-group>

    <div class="my-12 px-12" v-if="contentItemIndex === 0">
      <cooperative-society-table></cooperative-society-table>
    </div>
    <div class="my-12 px-12" v-if="contentItemIndex === 1">
      <sponsor-table></sponsor-table>
    </div>
  </div>
</template>

<script>
import CooperativeSocietyTable from "../../../components/Table/Content/CooperativeSociety";
import SponsorTable from "../../../components/Table/Content/Sponsor";
import TheTagGroup from "../../../components/TheTagGroup";

export default {
  name: "CooperativeSocietyAndSponsor",
  components: { TheTagGroup, CooperativeSocietyTable, SponsorTable },
  data() {
    return {
      contentItemIndex: 0,
      contentList: [
        { text: "合作學會", tag: "#合作學會" },
        { text: "贊助廠商", tag: "#贊助廠商" }
      ]
    };
  }
};
</script>

<style></style>
