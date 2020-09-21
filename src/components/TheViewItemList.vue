<template>
  <v-simple-table class="transparent">
    <template v-slot:default>
      <tbody>
        <tr v-for="{ id, title, date } in itemList" :key="id">
          <td class="title">{{ date }}</td>
          <td>
            <v-btn text rounded @click="selectTarget(id)" class="text-lowercase title ml-3">{{ title }}</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "TheViewItemList",
  props: {
    itemList: {
      type: Array,
      required: true,
      validator(arr) {
        return arr.every(item => {
          const checkProperty = Object.prototype.hasOwnProperty.bind(item);
          return checkProperty("id") && checkProperty("title") && checkProperty("date");
        });
      }
    }
  },
  methods: {
    selectTarget(id) {
      this.$emit("select", id);
    }
  }
};
</script>

<style></style>
