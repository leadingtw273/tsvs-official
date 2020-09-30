<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark hide-default-footer>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:item.content="{ value }">
        <v-dialog max-width="75%" dark>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">預覽</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline" primary-title>
              預覽
            </v-card-title>

            <v-card-text>
              <v-sheet class="secondary pa-12 black--text" style="border-radius: 40px;">
                <v-container>
                  <div v-html="value"></div>
                </v-container>
              </v-sheet>
            </v-card-text>

            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:top>
        <v-toolbar flat dark>
          <v-toolbar-title>章程法令規章列表</v-toolbar-title>
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
              <v-text-field v-model="editedItem.class" label="主要類別"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.subClass" label="次要類別"></v-text-field>
            </v-col>
            <v-col cols="12">
              <ckeditor :editor="editor" v-model="editedItem.content" :config="editorConfig"></ckeditor>
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "CarouselImage",
  data() {
    return {
      dialog: false,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        }
      },
      headers: [
        { text: "ID", value: "id" },
        { text: "POST ID", value: "post" },
        { text: "活動名稱簡寫", value: "title_short" },
        { text: "活動標籤", value: "tag" },
        { text: "活動類型", value: "class" },
        { text: "活動開始時間", value: "date_begin" },
        { text: "活動結束時間", value: "date_end" },
        { text: "封面圖網址", value: "cover_image" },
        { text: "核發積分數量", value: "point" },
        { text: "活動地點", value: "location" },
        { text: "主辦單位", value: "organizer" },
        { text: "協辦單位", value: "co_organizer" },
        { text: "聯絡人", value: "contact_person" },
        { text: "連絡電話", value: "contact_phone" },
        { text: "聯絡電子信箱", value: "contact_mail" },
        { text: "活動網址", value: "link_event" },
        { text: "報名網址", value: "link_signup" },
        { text: "執行", value: "actions", sortable: false }
      ],
      items: [
        {
          post: 1,
          title_short: "台灣血管外科學會",
          tag: "",
          class: 1,
          date_begin: "2020-09-13T09:30",
          date_end: "2020-09-13T17:00",
          cover_image: "",
          point: "",
          location: "",
          organizer: "",
          co_organizer: "",
          contact_person: "",
          contact_phone: "",
          contact_mail: "",
          link_event: "",
          link_signup: ""
        }
      ],
      editedIndex: -1,
      editedItem: {
        class: "",
        subClass: "",
        content: ""
      },
      defaultItem: {
        class: "",
        subClass: "",
        content: ""
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
