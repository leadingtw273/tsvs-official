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

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>使用者列表</v-toolbar-title>
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
              <v-text-field v-model="editedItem.name" label="姓名"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.identityNumber" label="身分證"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.phone" label="手機號碼"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.email" label="電子信箱"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.hospital" label="任職醫院"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.class" label="科別"></v-text-field>
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
  name: "MemberTable",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "編號", value: "uid" },
        { text: "姓名", value: "name" },
        { text: "身分證", value: "identityNumber" },
        { text: "電子信箱", value: "email" },
        { text: "手機號碼", value: "phone" },
        { text: "任職醫院", value: "hospital" },
        { text: "科別", value: "class" },
        { text: "執行", value: "actions", sortable: false }
      ],
      items: [
        {
          uid: "fg87hAsd8465",
          name: "雲澈",
          identityNumber: "S458965821",
          email: "evil@gmail.com",
          phone: "0946215320",
          hospital: "聖馬爾定",
          class: "精神"
        }
      ],
      editedIndex: -1,
      editedItem: {
        uid: "",
        name: "",
        identityNumber: "",
        email: "",
        phone: "",
        hospital: "",
        class: ""
      },
      defaultItem: {
        uid: "",
        name: "",
        identityNumber: "",
        email: "",
        phone: "",
        hospital: "",
        class: ""
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
