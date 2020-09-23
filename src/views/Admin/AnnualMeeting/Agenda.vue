<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>議程列表</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="900px" dark>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>

        <v-card-text class="black--text">
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="editedItem.date" label="日期"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.timeRange" label="時間區間"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.location" label="地點"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.lecturer" label="講者"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.remarks" label="備註"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Agenda",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "日期", value: "date" },
        { text: "時間區間", value: "timeRange" },
        { text: "標題", value: "title" },
        { text: "地點", value: "location" },
        { text: "講者", value: "lecturer" },
        { text: "備註", value: "remarks" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          date: "2018-12-06",
          timeRange: "09:10-10:00",
          title: "周邊動脈論壇",
          location: "宜華廳",
          lecturer: "XXX",
          remarks: ""
        }
      ],
      editedIndex: -1,
      editedItem: {
        date: "",
        timeRange: "",
        title: "",
        location: "",
        lecturer: "",
        remarks: ""
      },
      defaultItem: {
        date: "",
        timeRange: "",
        title: "",
        location: "",
        lecturer: "",
        remarks: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "編輯";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("確定刪除這筆資料？") && this.items.splice(index, 1);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style></style>
