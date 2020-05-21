<template>
  <div class="my-12 px-12">
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

      <template v-slot:item.content="{ value }">
        <v-dialog max-width="75%" dark>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">Preview</v-btn>
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
          <v-toolbar-title>活動通知列表</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.stop="dialog = true" large>新增</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="900px" dark>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text class="black--text">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
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
  name: "Events",
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          shouldNotGroupWhenFull: true
        }
      },
      dialog: false,
      headers: [
        { text: "Date", value: "date" },
        { text: "Content", value: "content" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      items: [
        {
          date: "2019/12/07",
          content:
            '<div class="活動通知-2019-10-18-01-內容"><div class="活動通知-2019-10-18-01-內容__4875e9cd258248a0bdfc37e741cb2e41"> TSVS課程 2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop <br><br>2020/6/3-5@花蓮慈濟 Aorta &amp; Peripheral Artery Cadaver Workshop </div><div class="v-responsive v-image mt-10" style="width: 300px;"><div class="v-responsive__sizer" style="padding-bottom: 71.1752%;"></div><div class="v-image__image v-image__image--cover" style="background-image: url(&quot;http://127.0.0.1:8080/img/%E8%8A%B1%E8%93%AE%E6%85%88%E6%BF%9F%20Aorta.e5f33c21.png&quot;); background-position: center center;"></div><div class="v-responsive__content" style="width: 451px;"></div></div></div>'
        },
        {
          date: "2019/09/02",
          content:
            '<div class="活動通知-2019-10-18-02-內容"><div class="活動通知-2019-10-18-02-內容__6db1df4ea69a44f289416448f1fcfef3"> TSVS活動 11/9(六)下午3點_北區困難病例討論會@維多麗雅酒店3F, 歡迎報名參加 <br><br>報名連結：https://forms.gle/fNwyAp4Zpfb7gc7R7 <br><br>主題：北區困難病例討論會 <br><br>時間：2019/11/9 (六) 15:00-21:00 <br><br>地點：維多麗亞酒店 3F天璽廳 <br><br>地址：台北市中山區敬業四路168號 (捷運文湖線: 劍南路站) <br><br>議程將後續公告… </div></div>'
        }
      ],
      editedIndex: -1,
      editedItem: {
        date: "",
        content: ""
      },
      defaultItem: {
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
