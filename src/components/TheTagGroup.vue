<template>
  <v-btn-toggle
    class="d-flex flex-wrap mb-6 mx-8"
    v-model="ItemIndex"
    v-if="contentList.length !== 0"
    color="accent"
    mandatory
    group
  >
    <v-btn
      :class="[ItemIndex === i ? 'v-btn--confirm' : 'primary--text', 'title']"
      :to="$route.path + tag"
      v-for="({ text, tag }, i) in contentList"
      :key="text"
    >
      {{ text }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "TheTageGroup",
  props: {
    contentItemIndex: {
      type: Number
    },
    contentList: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    ItemIndex: {
      get() {
        return this.contentItemIndex;
      },
      set(val) {
        this.$emit("update:contentItemIndex", val);
      }
    }
  },
  methods: {
    getContentIndexFromTag(tag) {
      const index = this.contentList.findIndex(({ tag: itemTag }) => itemTag === decodeURI(tag));
      if (index !== -1) {
        return index;
      } else {
        this.$router.replace(this.$route.path + this.contentList[0].tag);
      }
    }
  },
  updated() {
    this.ItemIndex = this.getContentIndexFromTag(this.$route.hash);
  },
  mounted() {
    if (this.$route.hash === "") this.$router.replace(this.$route.path + this.contentList[0].tag);
    this.ItemIndex = this.getContentIndexFromTag(this.$route.hash);
  }
};
</script>

<style lang="scss" scoped>
.v-btn {
  height: 30px !important;
}

.v-btn:before {
  background-color: transparent !important;
}
</style>
