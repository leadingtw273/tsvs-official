<template>
  <div class="my-12 px-12">
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.file="{ value }">
        {{ value == null ? "" : value.name }}
      </template>

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>下載資料列表</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="700px" dark>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>

        <v-card-text class="black--text">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col>
              <v-file-input v-model="editedItem.file" label="檔案"></v-file-input>
            </v-col>
            <v-col cols="auto">
              <v-checkbox v-model="editedItem.isLogin" label="可下載"></v-checkbox>
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
  name: "Download",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "標題", value: "title" },
        { text: "檔案", value: "file" },
        { text: "可下載", value: "downloadable" },
        { text: "執行", value: "actions", sortable: false }
      ],
      items: [
        {
          title: "手術例數申報表",
          file: null,
          downloadable: true
        },
        {
          title: "手術例數申報表_使用介紹",
          file: null,
          downloadable: true
        }
      ],
      editedIndex: -1,
      editedItem: {
        title: "",
        file: null,
        downloadable: true
      },
      defaultItem: {
        title: "",
        file: null,
        downloadable: true
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
