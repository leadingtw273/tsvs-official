<template>
  <v-form ref="formRef" v-model="valid">
    <v-card>
      <v-toolbar dark color="primary" v-if="!hideTitle">
        <slot name="toolbar-append"></slot>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="toolbar-after"></slot>
      </v-toolbar>

      <v-card-text class="px-0 py-0" :style="`height: ${height}`">
        <template v-if="type === 'tab'">
          <v-tabs v-model="tab">
            <v-tabs-slider></v-tabs-slider>

            <v-tab v-for="(item, i) in tabs" :key="i">
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, i) in tabs" :key="i">
              <v-row class="mx-3 mb-3">
                <v-col v-for="formItem in items[i].items" v-bind:key="formItem.name" :cols="formItem.col || 6">
                  <dynamic-field v-bind="getOptions(formItem)" :data.sync="form[formItem.name]" />
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </template>

        <template v-else>
          <v-row class="mx-3">
            <v-col v-for="formItem in items" v-bind:key="formItem.name" :cols="formItem.col || 6">
              <dynamic-field v-bind="getOptions(formItem)" :data.sync="form[formItem.name]" />
            </v-col>
          </v-row>
        </template>
      </v-card-text>

      <div class="px-6 pb-6">
        <slot></slot>
      </div>

      <template v-if="!hideFooter">
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="handleOff" :disabled="loading">{{ offLabel }}</v-btn>
          <v-btn dark color="#1f2c58" @click="handleOk" :loading="loading">{{ okLabel }}</v-btn>
        </v-card-actions>
      </template>
    </v-card>
  </v-form>
</template>

<script>
import DynamicField from "./Field";
export default {
  name: "DynamicForm",
  components: { DynamicField },
  props: {
    height: {
      type: String,
      default: "auto"
    },
    type: {
      type: String,
      default: "page"
    },
    data: {
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    okLabel: {
      type: String,
      default: "更新"
    },
    offLabel: {
      type: String,
      default: "取消"
    },
    title: {
      type: String,
      default: "Title"
    },
    hideTitle: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  data: () => ({
    valid: false,
    tab: 0,
    form: {},
    loading: false
  }),
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler: function() {
        Object.keys(this.data).forEach(key => {
          this.$set(this.form, key, this.data[key]);
        });
      }
    },
    form: {
      deep: true,
      handler: function() {
        this.$emit("update:data", this.form);
      }
    }
  },
  computed: {
    tabs: function() {
      if (this.type !== "tab") return [];
      return this.items.map(x => x.name);
    }
  },
  methods: {
    async handleOk() {
      if (!this.$refs.formRef.validate()) return;
      this.loading = true;

      const cb = async function() {
        this.loading = false;
      }.bind(this);

      this.$emit("save", this.form, cb);
    },
    handleOff() {
      this.tab = 0;
      setTimeout(() => {
        this.form = {};
      }, 150);
    },
    getOptions(item) {
      const selectKey = ["default", "type", "label", "readonly", "items", "mask", "rules", "required"];

      return selectKey.reduce((res, key) => {
        if (typeof item[key] !== "undefined") res[key] = item[key];
        return res;
      }, {});
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
