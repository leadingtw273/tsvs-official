<template>
  <v-sheet color="primary_light_2" height="100%" width="100%" tile>
    <v-sheet class="pa-12 d-flex justify-end align-center" color="transparent" height="23%">
      <span class="main-title display-1 white--text pb-5">行事曆</span>
    </v-sheet>
    <v-sheet class="px-12 d-flex justify-end align-center" color="primary_light_3" height="54%">
      <v-date-picker v-model="picker" color="primary" class="date-picker ma-0" no-title></v-date-picker>
    </v-sheet>
    <v-sheet class="px-12 py-6 d-flex justify-end" color="transparent" height="23%">
      <btn-more textColor="white" :to="{ name: 'EventsRecent' }"></btn-more>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "HomeCalendar",
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10)
    };
  }
};
</script>

<style lang="scss">
.main-title {
  border-bottom: white 1px solid;
}
.date-picker {
  background-color: transparent !important;
  box-shadow: 0 0 0 0 !important;

  > * {
    width: 350px !important;
    height: 350px !important;

    font-size: 20px !important;
  }

  .v-date-picker-table {
    height: 100% !important;

    table {
      height: 100% !important;
    }

    th {
      font-size: 18px !important;
    }

    .v-btn {
      font-size: 18px !important;
    }
  }

  .v-picker__body {
    background-color: transparent !important;
  }
}
</style>
