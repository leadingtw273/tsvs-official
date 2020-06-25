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
          v-model="time"
          label="時間"
          prepend-icon="mdi-clock-outline"
          readonly
          outlined
          dense
          hide-details
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker v-model="time" @click:minute="inputTimePicker(time)"></v-time-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "TimePicker",
  props: {
    value: {
      type: String,
      default: "00:00"
    }
  },
  data() {
    return {
      menu: false,
      time: this.value
    };
  },
  methods: {
    inputTimePicker() {
      this.$emit("update:value", this.time);
      this.menu = false;
    }
  }
};
</script>

<style></style>
