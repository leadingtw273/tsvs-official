<template>
  <v-select
    v-model="value"
    v-if="type === 'select'"
    :items="items"
    :label="label"
    item-text="label"
    item-value="value"
    :readonly="readonly"
    :rules="fieldRule"
  />
  <div v-else-if="type === 'file'">
    <v-subheader class="px-0 mb-n2">{{ label }}</v-subheader>
    <v-file-input v-if="!readonly" class="mt-n6 mb-1" hide-input :loading="loading" @change="updateFile">
    </v-file-input>

    <v-skeleton-loader v-if="data && loading" type="image"></v-skeleton-loader>
    <v-img v-else :src="data" :loading="loading" style="background: #ccc"></v-img>
  </div>
  <v-text-field v-model="value" v-else v-mask="mask" :rules="fieldRule" :label="label" :readonly="readonly" />
</template>

<script>
import fileApi from "@/apis/File.js";

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
    rules: {},
    mask: {},
    data: {},
    required: {
      type: Boolean,
      default: false
    },
    default: {}
  },
  data: () => ({
    value: null,
    loading: false
  }),
  created() {
    if (typeof this.default !== "undefined") {
      this.value = this.default;
    }
  },
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
  computed: {
    fieldRule: function() {
      if (this.rules && this.required) {
        return [value => !!value || "該欄位為必填!", ...this.rules];
      } else if (this.required) {
        return [value => !!value || "該欄位為必填!"];
      }
      return this.rules;
    }
  },
  methods: {
    handleOk() {
      this.$emit("update:isOpen", false);
    },
    handleOff() {
      this.$emit("update:isOpen", false);
    },
    async updateFile(file) {
      const api = new fileApi();
      this.loading = true;
      const res = await api.uploadImage(file);
      this.loading = false;
      this.value = res.url;
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
