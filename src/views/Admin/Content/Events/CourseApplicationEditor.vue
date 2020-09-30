<template>
  <div>
    <v-data-table :headers="headers" :items="items" class="elevation-1" dark>
      <template v-slot:item.attachment="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5" v-if="value !== ''"></v-img>
      </template>

      <template v-slot:item.attachment="{ value }">
        <v-img class="ma-auto my-2" :src="value" width="200px" aspect-ratio="1.5"></v-img>
      </template>

      <template v-slot:item.type="{ value }">
        {{ value === 1 ? "公告活動資訊" : "繼續教育積分" }}
      </template>

      <template v-slot:item.pass="{ item }">
        <v-btn color="success" class="ma-1" small>通過</v-btn>
        <v-btn color="warning" class="ma-1" small>待補件</v-btn>
        <v-btn
          color="accent"
          class="ma-1"
          @click.stop="
            rejectDialog = true;
            deleteItemId = item.id;
          "
          small
          >拒絕</v-btn
        >
      </template>

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
          <v-toolbar-title>活動審核</v-toolbar-title>
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
            <v-col cols="12" v-if="editedItem.image !== ''">
              <v-img class="ma-auto" :src="editedItem.image" width="70%" aspect-ratio="1.7"></v-img>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="editedItem.image" label="圖片"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.title" label="標題"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="editedItem.date" label="課程日期"></v-text-field>
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

    <v-dialog v-model="rejectDialog" width="500">
      <v-card dark>
        <v-card-title class="headline primary">
          確認刪除理由
        </v-card-title>

        <v-card-text class="d-flex flex-column align-center ">
          <v-textarea label="理由" style="width: 100%;"></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="deleteTestItem()">
            確定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import dayjs from "dayjs";

export default {
  name: "CourseApplicationEditor",
  data() {
    return {
      rejectDialog: false,
      deleteItemId: null,
      dialog: false,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        }
      },
      headers: [
        { text: "申請類別", value: "type" },
        { text: "圖片", value: "attachment" },
        { text: "標題", value: "title_zh" },
        { text: "課程日期", value: "date_begin" },
        { text: "內容", value: "content", align: "center" },
        { text: "Actions", value: "actions", sortable: false },
        { text: "狀態", value: "pass", sortable: false }
      ],
      items: [
        {
          title_zh: "123", // 活動主題
          type: 1, // 申請類別（1: 公告活動、2: 繼續教育積分）
          date_begin: dayjs(1601395200000).format("YYYY-MM-DD"), // 起
          date_end: dayjs(1601395200000).format("YYYY-MM-DD"), // 迄
          location: "", // 活動地點
          organizer: "台灣血管外科學會", // 主辦單位
          co_organizer: "", // 協辦單位
          contact_person: "123", // 聯絡人
          contact_phone: "0912345678", // 連絡電話
          contact_mail: "ceo@sita.tech", // 電子信箱
          link_event: "", // 活動連結
          attachment: "https://i.imgur.com/TNYqUno.jpg" // 附件
        },
        {
          title_zh: "123",
          type: 2,
          date_begin: dayjs(1601395200000).format("YYYY-MM-DD"),
          date_end: dayjs(1601395200000).format("YYYY-MM-DD"),
          location: "123",
          organizer: "台灣血管外科學會",
          co_organizer: "123",
          contact_person: "123",
          contact_phone: "0912345678",
          contact_mail: "ceo@sita.tech",
          link_event: "",
          attachment: "https://i.imgur.com/TNYqUno.jpg"
        }
      ],
      editedIndex: -1,
      editedItem: {
        image: "",
        title: "",
        date: "",
        content: ""
      },
      defaultItem: {
        image: "",
        title: "",
        date: "",
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
    deleteTestItem() {
      const deleteIndex = this.items.findIndex(({ id }) => id === this.deleteItemId);
      this.items.splice(deleteIndex, 1);
      this.rejectDialog = false;
    },
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
