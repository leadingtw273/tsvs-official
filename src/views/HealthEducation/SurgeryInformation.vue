<template>
  <div>
    <template v-if="routerName === 'HealthEducationSurgeryInformation'">
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
                <span class="title">文章名稱_01</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>醫師：</span>
                    <span>測試醫師_01</span>
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
                <span class="title">文章名稱_02</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>醫師：</span>
                    <span>測試醫師_02</span>
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
                <span class="title">文章名稱_03</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>醫師：</span>
                    <span>測試醫師_03</span>
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
                <span class="title">文章名稱_04</span>
              </v-card-title>

              <v-card-text>
                <div class="d-flex flex-column mt-4">
                  <div class="subtitle-1">
                    <span>醫師：</span>
                    <span>測試醫師_04</span>
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
        <v-col v-for="n in 5" :key="n" class="d-flex child-flex" cols="4">
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
  name: "SurgeryInformation",
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
      this.$router.push({ name: "HealthEducationSurgeryInformationItem", params: { id: "01" } });
    }
  }
};
</script>

<style lang="scss"></style>
