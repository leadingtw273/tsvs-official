<template>
  <div style="width: 100%;">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-right="32"
      :nudge-bottom="6"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="日期"
          prepend-icon="mdi-calendar-outline"
          readonly
          outlined
          dense
          hide-details
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "DatePicker",
  props: {
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      menu: false
    };
  },
  computed: {
    date: {
      get() {
        if (this.value === "") return dayjs(this.value).format("YYYY-MM-DD");
        return dayjs(this.value).format("YYYY-MM-DD");
      },
      set(val) {
        this.inputDatePicker(dayjs(val).valueOf());
      }
    }
  },
  methods: {
    inputDatePicker(date) {
      this.$emit("update:value", date);
      this.menu = false;
    }
  }
};
</script>

<style></style>
