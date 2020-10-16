<template>
  <v-select
    v-model="value"
    v-if="type === 'select'"
    :items="items"
    :label="label"
    item-text="label"
    item-value="value"
    :readonly="readonly"
  />
  <div v-else-if="type === 'file'">
    <v-subheader class="px-0 mb-n2">{{ label }}</v-subheader>
    <v-file-input v-if="!readonly" class="mt-n6 mb-1" hide-input :loading="loading"> </v-file-input>

    <v-img :src="data"></v-img>
  </div>
  <v-text-field v-model="value" v-else v-mask="mask" :label="label" :readonly="readonly" />
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "DialogField",
  props: {
    type: {
      type: String,
      default: "string"
    },
    label: {
      type: String,
      default: "label"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    mask: {},
    data: {}
  },
  data: () => ({
    value: null,
    loading: false,
    url: "https://p2.bahamut.com.tw/B/2KU/02/669e2406f6fd57a4824c484fe41a8ia5.JPG?w=500"
  }),
  created() {},
  watch: {
    value: {
      deep: true,
      handler: function() {
        if (this.type === "number") {
          this.$emit("update:data", parseInt(this.value, 10));
        } else if (this.type === "date") {
          this.$emit("update:data", new Date(this.value).getTime());
        } else {
          this.$emit("update:data", this.value);
        }
      }
    },
    data: {
      deep: true,
      immediate: true,
      handler: function() {
        if (this.type === "date") {
          this.value = dayjs(parseInt(this.data, 10)).format("YYYY/MM/DD");
        } else {
          this.value = this.data;
        }
      }
    }
  },
  computed: {},
  methods: {
    handleOk() {
      this.$emit("update:isOpen", false);
    },
    handleOff() {
      this.$emit("update:isOpen", false);
    }
  }
};
</script>

<style lang="scss" scope>
.card-title {
  background: #1f2c58;
  color: #fff;
}
</style>
