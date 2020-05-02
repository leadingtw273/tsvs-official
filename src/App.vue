<template>
  <v-app>
    <the-navbar></the-navbar>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-sheet color="indigo" height="1900px"></v-sheet>
      </v-container>
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
