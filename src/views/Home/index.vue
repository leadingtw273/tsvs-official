<template>
  <v-container fluid class="pa-0">
    <home-carousel></home-carousel>
    <home-news></home-news>

    <div class="d-inline-flex" style="height: 700px; width: 100%;">
      <div style="height: 100%; width: 40%">
        <home-calendar></home-calendar>
      </div>
      <div style="height: 100%; width: 60%">
        <home-events></home-events>
      </div>
    </div>

    <home-link></home-link>
  </v-container>
</template>

<script>
import HomeCarousel from "./components/Carousel";
import HomeNews from "./components/News";
import HomeCalendar from "./components/Calendar";
import HomeEvents from "./components/Events";
import HomeLink from "./components/Link";

export default {
  name: "Home",
  components: { HomeCarousel, HomeNews, HomeCalendar, HomeEvents, HomeLink }
};
</script>

<style></style>
