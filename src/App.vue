<template>
  <v-app>
    <the-navbar></the-navbar>

    <v-content>
      <router-view></router-view>
    </v-content>

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
