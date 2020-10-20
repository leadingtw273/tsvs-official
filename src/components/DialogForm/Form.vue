<template>
  <v-dialog v-model="isOpen" v-if="isOpen" persistent max-width="900px" scrollable>
    <v-form ref="formRef" v-model="valid">
      <v-card>
        <v-card-title class="headline card-title"> {{ title }} </v-card-title>
        <v-divider></v-divider>

        <v-card-text class="px-0" :style="`height: ${height}`">
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
                    <dialog-field v-bind="getOptions(formItem)" :data.sync="form[formItem.name]" />
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </template>
          <template v-else>
            <v-row class="mx-6 my-3">
              <v-col v-for="formItem in items" v-bind:key="formItem.name" :cols="formItem.col || 6">
                <dialog-field v-bind="getOptions(formItem)" :data.sync="form[formItem.name]" />
              </v-col>
            </v-row>
          </template>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="darken-1" text @click="handleOff" :disabled="loading">{{ offLabel }}</v-btn>
          <v-btn dark color="#1f2c58" @click="handleOk" :loading="loading">{{ okLabel }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import DialogField from "./Field";
export default {
  name: "DialogForm",
  components: { DialogField },
  props: {
    height: {
      type: String,
      default: "auto"
    },
    isOpen: {
      type: Boolean,
      default: false
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
      default: "Test Title"
    }
  },
  data: () => ({
    valid: false,
    tab: 0,
    form: {},
    loading: false
  }),
  watch: {
    data: {
      deep: true,
      handler: function() {
        Object.keys(this.data).forEach(key => {
          this.form[key] = this.data[key];
        });
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
        this.$emit("update:isOpen", false);
        this.loading = false;
      }.bind(this);

      this.$emit("save", this.form, cb);
    },
    handleOff() {
      this.tab = 0;
      this.$emit("update:isOpen", false);
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
