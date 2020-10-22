<template>
  <v-app v-if="status">
    <the-navbar></the-navbar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <the-footer></the-footer>

    <network-error-dialog></network-error-dialog>
    <response-error-dialog></response-error-dialog>

    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import NetworkErrorDialog from "@/components/Dialog/NetworkError";
import ResponseErrorDialog from "@/components/Dialog/ResponseError";

export default {
  name: "App",
  components: { TheNavbar, TheFooter, NetworkErrorDialog, ResponseErrorDialog },
  computed: {
    ...mapState({
      status: state => state.status,
      loading: state => state.loading
    })
  },
  async created() {
    await this.$store.dispatch("initApp");
  }
};
</script>
