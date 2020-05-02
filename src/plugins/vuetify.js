import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1F2C58",
        primary_dark_1: "#121A33",
        primary_light_1: "#404F80",
        primary_light_2: "#A4AECC",
        primary_light_3: "#B8C0D9",
        primary_light_4: "#DAE0F2",
        secondary: "#EAEDF7",
        accent: "#800000"
      }
    }
  }
});
