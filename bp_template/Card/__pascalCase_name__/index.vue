<template>
  <the-view-content-card v-bind="config">
    <div>
      {{pascalCase name}}
    </div>
  </the-view-content-card>
</template>

<script>
import TheContentCard from "../../../components/TheContentCard";

export default {
  name: "{{ pascalCase name }}",
  components: { TheContentCard },
  data() {
    return {
      config: {
        menuTitle: "{{ pascalCase name }}"
      }
    };
  }
};
</script>

<style></style>
