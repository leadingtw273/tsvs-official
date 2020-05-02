<template>
  <v-container fluid class="pa-0">
    <home-carousel></home-carousel>
    <home-news></home-news>
    <home-about></home-about>
  </v-container>
</template>

<script>
import HomeCarousel from "../components/Home/HomeCarousel";
import HomeNews from "../components/Home/HomeNews";
import HomeAbout from "../components/Home/HomeAbout";

export default {
  name: "Home",
  components: { HomeCarousel, HomeNews, HomeAbout }
};
</script>

<style></style>
