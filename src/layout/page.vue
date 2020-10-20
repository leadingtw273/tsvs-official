<template>
  <div>test</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.menu.find(x => x.));
  },
  computed: {
    ...mapState({
      menu: state => state.menu.data
    })
  }
};
</script>
