<template>
  <div>
    <v-sheet dark>
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat>
              <v-btn outlined class="mr-4" @click="setToday">
                Today
              </v-btn>
              <v-btn fab text small @click="prev">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small @click="next">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-select
                v-model="searchClass"
                :items="searchClassList"
                dense
                outlined
                hide-details
                label="搜索類別"
                class="align-self-start ma-2"
              ></v-select>
              <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn outlined v-bind="attrs" v-on="on">
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="viewEvents"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              :nudge-bottom="25"
            >
              <v-card width="400px" flat dark>
                <v-toolbar :color="getEventColor(selectedEvent)" dark>
                  <v-toolbar-title v-html="selectedEvent.class"></v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-img :src="selectedEvent.image" aspect-ratio="1.7"></v-img>
                  <div class="d-flex flex-column mt-4">
                    <div class="title">
                      <span>活動名稱：</span>
                      <span>{{ selectedEvent.name }}</span>
                    </div>
                    <div class="title">
                      <span>活動開始時間：</span>
                      <span>{{ selectedEvent.start }}</span>
                    </div>
                    <div class="title">
                      <span>活動結束時間：</span>
                      <span>{{ selectedEvent.end }}</span>
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    :to="{ name: 'EventsView', params: { id: selectedEvent.id } }"
                    @click="selectedOpen = false"
                  >
                    查看
                  </v-btn>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    取消
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "Recent",
  data() {
    return {
      searchClass: "所有活動",
      searchClassList: ["所有活動", "TSVS 主辦", "會議", "課程", "甄試", "其他"],
      focus: "",
      type: "month",
      typeToLabel: {
        month: "Month",
        week: "Week",
        day: "Day",
        "4day": "4 Days"
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      names: ["Meeting", "Holiday", "PTO", "Travel", "Event", "Birthday", "Conference", "Party"]
    };
  },
  computed: {
    viewEvents() {
      if (this.searchClass === "所有活動") return this.events;
      return this.events.filter(event => event.class === this.searchClass);
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      const colorList = {
        "TSVS 主辦": "blue",
        會議: "indigo",
        課程: "deep-purple",
        甄試: "cyan",
        其他: "grey darken-1"
      };
      return colorList[event.class];
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
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
          id: this.rnd(0, 9999),
          image: "https://fakeimg.pl/250x100/",
          class: this.searchClassList[this.rnd(1, this.searchClassList.length - 1)],
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: dayjs(first).format("YYYY-MM-DD hh:mm:ss"),
          end: dayjs(second).format("YYYY-MM-DD hh:mm:ss"),
          timed: !allDay
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    }
  }
};
</script>

<style lang="scss">
.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday {
  color: white !important;
}
</style>
