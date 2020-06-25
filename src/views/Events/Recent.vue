<template>
  <div class="my-12 px-12">
    <v-sheet tile height="54" class="d-flex" dark>
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="searchClass"
        :items="searchClassList"
        dense
        outlined
        hide-details
        label="搜索類別"
        class="align-self-start ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600" dark>
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="[0, 1, 2, 3, 4, 5, 6]"
        type="month"
        :events="events"
        :event-color="getEventColor"
        @change="getEvents"
        dark
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script>
// import dayjs from "dayjs";

export default {
  name: "Recent",
  data() {
    return {
      searchClass: "TSVS 主辦",
      searchClassList: ["TSVS 主辦", "會議", "課程", "甄試", "其他"],
      value: "",
      events: [],
      colors: ["blue", "indigo", "deep-purple"],
      names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"]
    };
  },
  methods: {
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</script>

<style lang="scss" scope></style>
