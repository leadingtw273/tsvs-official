<template>
  <v-dialog v-model="isOpen" persistent max-width="900px">
    <v-card>
      <v-card-title class="headline card-title"> {{ title }} </v-card-title>

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
                <v-text-field
                  v-if="!formItem.type"
                  v-model="form[formItem.name]"
                  :label="formItem.label"
                  :readonly="formItem.readonly || false"
                />
                <v-text-field
                  v-else-if="formItem.type === 'number'"
                  v-model="form[formItem.name]"
                  :label="formItem.label"
                  :readonly="formItem.readonly || false"
                />
                <v-select
                  v-else-if="formItem.type === 'select'"
                  v-model="form[formItem.name]"
                  :items="formItem.items"
                  :label="formItem.label"
                  item-text="label"
                  item-value="value"
                  :readonly="formItem.readonly || false"
                ></v-select>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </template>
      <template v-else>
        <div class="mx-6 my-3">
          test
        </div>
      </template>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleOff">{{ offLabel }}</v-btn>
        <v-btn color="blue darken-1" text @click="handleOk">{{ okLabel }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moduleName from "";
export default {
  name: "DialogForm",
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
    form: {}
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
