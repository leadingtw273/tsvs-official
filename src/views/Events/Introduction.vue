<template>
  <div>
    <template v-if="routerName === 'EventsIntroduction'">
      <div class="d-flex">
        <div style="width: 200px;">
          <v-select v-model="selectedClass" :items="eventClass" label="類別" outlined dense hide-details></v-select>
        </div>
        <div class="d-flex ml-6" style="width: 500px;">
          <date-picker :value.sync="selectedDateRange.start"></date-picker>
          <span class="title mx-3">~</span>
          <date-picker :value.sync="selectedDateRange.end"></date-picker>
        </div>
      </div>

      <v-row class="mt-6">
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col xl="3" lg="4" md="6" sm="12">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" :elevation="hover ? 12 : 0" @click="viewEvent()" dark>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

              <v-card-title>
                <span class="title">【會議】TSVS 第八屆第二次夏季學術研討會</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>活動日期：</span>
                    <span>2020/06/05 07:40</span>
                  </div>
                  <div class="subtitle-1">
                    <span>主辦單位：</span>
                    <span>高雄榮民總醫院放射線部</span>
                  </div>
                  <div class="subtitle-1">
                    <span>活動地點：</span>
                    <span>高雄榮民總醫院放射線部中會議室</span>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import DatePicker from "@/components/Picker/DatePicker";
import dayjs from "dayjs";

export default {
  name: "Introduction",
  components: {
    DatePicker
  },
  data() {
    return {
      selectedClass: "所有活動",
      selectedDateRange: {
        start: dayjs()
          .subtract(1, "month")
          .format("YYYY-MM-DD"),
        end: dayjs()
          .add(1, "month")
          .format("YYYY-MM-DD")
      },
      eventClass: ["所有活動", "TSVS 主辦", "會議", "課程", "甄試", "其他"]
    };
  },
  computed: {
    routerName() {
      return this.$route.name;
    }
  },
  methods: {
    viewEvent() {
      this.$router.push({ name: "EventsIntroductionItem", params: { id: "01" } });
    }
  }
};
</script>

<style lang="scss"></style>
