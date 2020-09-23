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
          <v-toolbar-title>影片紀錄列表</v-toolbar-title>
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
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.date" label="時間"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="editedItem.link" label="連結"></v-text-field>
            </v-col>
            <v-col cols="auto">
              <v-checkbox v-model="editedItem.isLogin" label="需登入"></v-checkbox>
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
  name: "Record",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "標題", value: "title" },
        { text: "時間", value: "date" },
        { text: "連結", value: "link" },
        { text: "需登入", value: "isLogin" },
        { text: "執行", value: "actions", sortable: false }
      ],
      items: [
        {
          title: "2019年會 / 議程 (需登入即可觀看)",
          date: "2019-09-07",
          link: "https://www.tsvs.org/news_detail.php?id=281",
          isLogin: true
        },
        {
          title: "2019夏季會 / 議程 (需登入即可觀看)",
          date: "2019-07-05",
          link: "https://www.tsvs.org/news_detail.php?id=281",
          isLogin: true
        }
      ],
      editedIndex: -1,
      editedItem: {
        title: "",
        date: "",
        link: "",
        isLogin: false
      },
      defaultItem: {
        title: "",
        date: "",
        link: "",
        isLogin: false
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
