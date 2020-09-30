<template>
  <v-simple-table class="transparent">
    <template v-slot:default>
      <tbody>
        <tr v-for="{ id, title, date, org, count, link } in itemList" :key="id">
          <td class="title">{{ date }}</td>
          <td class="title" v-if="org != null">{{ org }}</td>
          <td class="title" v-if="count != null">{{ count }}</td>
          <td>
            <template v-if="link != null">
              <span class="text-h6">{{ title }}</span>
            </template>
            <template v-else>
              <v-btn text rounded @click="selectTarget(id)" class="text-lowercase title ml-3">{{ title }}</v-btn>
            </template>
          </td>
          <td class="title" v-if="link != null">
            <v-btn color="primary" rounded href="" class="text-lowercase title ml-3" small>點此下載</v-btn>
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
