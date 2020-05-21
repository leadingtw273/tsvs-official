<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark hide-default-footer>
      <template v-slot:item.image="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5"></v-img>
      </template>

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
          <v-toolbar-title>會議記錄列表</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="500px" dark>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.title" label="Title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="editedItem.link" label="Link"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
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
  name: "MeetingRecord",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Date", value: "date" },
        { text: "Title", value: "title" },
        { text: "Link", value: "link" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          date: "2019/10/15",
          title: "第八屆第一次理監事會議紀錄",
          link: "https://www.youtube.com/watch?v=5qap5aO4i9A"
        },
        {
          date: "2019/09/11",
          title: "第八屆第一次會員大會紀錄",
          link: "https://www.youtube.com/watch?v=5qap5aO4i9A"
        }
      ],
      editedIndex: -1,
      editedItem: {
        date: "",
        title: "",
        link: ""
      },
      defaultItem: {
        date: "",
        title: "",
        link: ""
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
      confirm("確定刪除這條紀錄？") && this.items.splice(index, 1);
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
