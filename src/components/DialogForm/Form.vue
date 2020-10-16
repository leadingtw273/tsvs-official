<template>
  <v-dialog v-model="isOpen" persistent max-width="900px" scrollable>
    <v-card>
      <v-card-title class="headline card-title"> {{ title }} </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="px-0" style="height: 90vh;">
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
                  <dialog-field
                    :type="formItem.type"
                    :label="formItem.label"
                    :readonly="formItem.readonly"
                    :items="formItem.items"
                    :mask="formItem.mask"
                    :data.sync="form[formItem.name]"
                  ></dialog-field>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </template>
        <template v-else>
          <div class="mx-6 my-3">
            <dialog-field
              v-for="item in items"
              :key="item.name"
              :type="item.type"
              :label="item.label"
              :readonly="item.readonly"
              :items="item.items"
              :mask="formItem.mask"
              :data.sync="form[item.name]"
            ></dialog-field>
          </div>
        </template>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="darken-1" text @click="handleOff" :disabled="loading">{{ offLabel }}</v-btn>
        <v-btn dark color="#1f2c58" @click="handleOk" :loading="loading">{{ okLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogField from "./Field";
export default {
  name: "DialogForm",
  components: { DialogField },
  props: {
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
    tab: 0,
    form: {},
    loading: false
  }),
  created() {},
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
      this.loading = true;

      const cb = async function() {
        this.$emit("update:isOpen", false);
        this.loading = false;
      }.bind(this);

      this.$emit("save", this.form, cb);
    },
    handleOff() {
      this.form = {};
      this.tab = 0;
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
