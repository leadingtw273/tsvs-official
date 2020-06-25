<template>
  <v-app>
    <the-navbar></the-navbar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  components: { TheNavbar, TheFooter },
  data: () => ({})
};
</script>
