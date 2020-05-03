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

    <home-about></home-about>
  </v-container>
</template>

<script>
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeNews from "../components/Home/HomeNews";
import HomeCalendar from "../components/Home/HomeCalendar";
import HomeEvents from "../components/Home/HomeEvents";
import HomeAbout from "../components/Home/HomeAbout";

export default {
  name: "Home",
  components: { HomeCarousel, HomeNews, HomeCalendar, HomeEvents, HomeAbout }
};
</script>

<style></style>
