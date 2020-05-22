<template>
  <div class="my-12 px-12">
    <div class="d-flex px-6">
      <v-select
        class="align-self-start mr-6"
        :items="['所有', '課程', '講座', '分享', '考試']"
        label="搜索類別"
        v-model="searchClass"
        style="max-width: 200px;"
      ></v-select>
      <v-menu v-model="searchDateMenu" :close-on-content-click="false" max-width="290px" min-width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="搜索日期"
            readonly
            hide-details="auto"
            style="max-width: 200px;"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" color="primary" @input="searchDateMenu = false" range></v-date-picker>
      </v-menu>
    </div>

    <v-row class="mb-2">
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 0" class="mx-auto" max-width="344" color="transparent">
            <div class="d-flex pa-4">
              <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            </div>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text small rounded class="text-lowercase ml-auto">more >></v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 0" class="mx-auto" max-width="344" color="transparent">
            <div class="d-flex pa-4">
              <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            </div>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text small rounded class="text-lowercase ml-auto">more >></v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 0" class="mx-auto" max-width="344" color="transparent">
            <div class="d-flex pa-4">
              <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            </div>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text small rounded class="text-lowercase ml-auto">more >></v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 0" class="mx-auto" max-width="344" color="transparent">
            <div class="d-flex pa-4">
              <v-img class="" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
            </div>

            <v-card-title>
              Top western road trips
            </v-card-title>

            <v-card-subtitle>
              1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text small rounded class="text-lowercase ml-auto">more >></v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-pagination v-model="page" :length="6" color="primary"></v-pagination>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "Recent",
  data() {
    return {
      page: 1,
      searchDateMenu: false,
      searchClass: "所有",
      date: [dayjs().format("YYYY-MM-DD")]
    };
  }
};
</script>

<style lang="scss"></style>
